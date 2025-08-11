import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		prices:{
			BoatName:{
				sidenames:null,
				transomname:null
			},
			RegoNumber:{
				powerBoatRego:null,
				yachtRego:null,
				PWC:null
			},
			HomePort:{
				homeport:null,
				lifering:null,
				tender:null,
			}
		},
		ready:0,
		lifering:null,
		lifering_uptxt:null,
		lifering_bottomtxt:null,
		tender:null,
		tender_txt:null,
		color_tags:['1 Color','2 Colors','3 Colors'],
		design_displays:null,
		design_data:null,
		design_products:null,
		current_display:'BoatName',
		pickable_colors:null,
		dialogue:null,
		cart:[],
		rgbaDictionary:{},
		loading_screen:false,
		addable:{
			names:{popup:false, bt_visible:false},
			homeport:{popup:false, bt_visible:false},
			regonumbers:{popup:false, bt_visible:false},
		},
		
		msg_popups:{type:null, data:null,extra:null},
		xtrainfo_boatname:null,
		xtrainfo_regonumbers:null,
		xtrainfo_homeport:null,

		
		
	},
	mutations: {

	},
	actions: {
		updateDesignProducts(ctx, _products){

			ctx.state.design_products = {};						
			for (var each in _products.designproducts ) {
				var prod = _products.designproducts[each];
				ctx.state.design_products[prod.product] = prod;
			}    
		
		},

		updateDesignData(ctx, _designData){

			ctx.state.design_data = {}
			for(var each in _designData.regonumbers) {
				var p = _designData.regonumbers[each];
				ctx.state.design_data [p.type] = p;
			}
		},

		updateReady(ctx, ){

			ctx.state.ready++;
		},

		addNamesToCart:function(ctx, obj) {			
			
			//console.log(obj)
			var sproduct = obj.name
			var cdata = obj.class
			var product	 = ctx.state.cart[sproduct]; 
			var display_names = ctx.state.design_displays.BoatName;
			
			var smsg = '/product/side-names/'+
			'?add-to-cart={id}&variation_id={variation_id}&wccpf_boatname={boatname}'

			smsg = smsg.replace("{id}",product.id);
			smsg = smsg.replace("{variation_id}",product.variation_id);
			smsg = smsg.replace("{boatname}",display_names.text);

			smsg += "&wccpf_namecolor=" + ctx.state.rgbaDictionary[ display_names.font_color.color]
			smsg += "&wccpf_boatcolor=" + ctx.state.rgbaDictionary[ display_names.back_color.color]
			smsg += "&wccpf_font="+ display_names.font;
			if(ctx.state.xtrainfo_boatname != null)
				smsg += "&wccpf_more_info="+ctx.state.xtrainfo_boatname

			if(cdata.maxlength != null)
				smsg += "&wccpf_maxlength=" +cdata.maxlength;
			
			//smsg += "&wccpf_quantity="+cdata.qty
			smsg += "&quantity="+cdata.qty

			//	smsg += "&slanted=" +
			
			if(display_names.stroke.enable) {
				smsg += '&wccpf_outlinetype='+display_names.stroke.type;
				smsg += '&wccpf_outlinecolor='+ ctx.state.rgbaDictionary[ display_names.stroke.color.color];
			}

			if(display_names.shadow.enable) {
				smsg += '&wccpf_shadowcolor='+ ctx.state.rgbaDictionary[ display_names.shadow.color.color];
			}

			if(display_names.effect){
				smsg += '&wccpf_effect='+display_names.effect
			}
			var self = ctx.state;   	 
			self.loading_screen = true


			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (xhttp.readyState == 4 && xhttp.status == 200) {
					var response =  xhttp.responseText
					self.info = response 
					self.msg_popups = {type: "RESPONSE_OK", data:"BoatName", extra:response}
					$(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash]);
					self.loading_screen = false

			
				}
			}.bind(this)
			
			xhttp.open("POST", smsg, true);
			xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; UTF-8");
			console.log( "send:"+smsg)
			xhttp.send();	
		},

		addPortToCart:function(ctx, maxlength){

			var product	 = ctx.state.cart['homeport'];
			var display_names = ctx.state.design_displays.HomePort;
			var smsg = '/product/home-port/'+
			'?add-to-cart={id}&variation_id={variation_id}&wccpf_homeport={boatname}'

			smsg = smsg.replace("{id}",product.id);
			smsg = smsg.replace("{variation_id}",product.variation_id);
			smsg = smsg.replace("{boatname}",display_names.text);
			if(ctx.state.xtrainfo_homeport != null)
				smsg += "&more_info="+ctx.state.xtrainfo_homeport

			if(maxlength != null)
				smsg += "&wccpf_maxlength=" +maxlength;

			smsg += "&wccpf_boatcolour=" + ctx.state.rgbaDictionary[ display_names.back_color.color]
			smsg += "&wccpf_homeportfont="+ display_names.font;
			smsg += "&wccpf_homeportcolour="+ ctx.state.rgbaDictionary[ display_names.font_color.color]


			var self = ctx.state;   

			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (xhttp.readyState == 4 && xhttp.status == 200) {
					var response =  xhttp.responseText
					self.info = response, 
					self.msg_popups = {type: "RESPONSE_OK", data:"HomePort", extra:response},
					$(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash]);
					self.loading_screen = false

			
				}
			}.bind(this)
			xhttp.open("POST", smsg, true);
			xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; UTF-8");
			xhttp.send();	

		},
		
		addRegoToCart:function(ctx, regodata){

			var product	 = ctx.state.cart['regonumbers'];
			var display_names = ctx.state.design_displays.RegoNumber;
			var smsg = '/product/rego-numbers/'+
			'?add-to-cart={id}&variation_id={variation_id}&wccpf_registration={boatname}'

			if(regodata.maxlength != null)
				smsg += "&wccpf_regomaxlength=" +regodata.maxlength 
				
		
			if(display_names.stroke.enable){
				smsg += "&wccpf_outlinecolour=" + ctx.state.rgbaDictionary[ display_names.stroke.color.color]
				smsg += "&wccpf_regotype=" +display_names.stroke.type 
			}
			if(display_names.shadow.enable){
				smsg += "&wccpf_shadowcolour=" + ctx.state.rgbaDictionary[ display_names.shadow.color.color]
			}

			smsg += "&wccpf_regostate="+regodata.selected
			//
		
			smsg += "&wccpf_slantedrego="+display_names.slanted
			//
			smsg = smsg.replace("{id}",product.id);
			smsg = smsg.replace("{variation_id}",product.variation_id);
			smsg = smsg.replace("{boatname}",display_names.text);

			smsg += "&wccpf_boatcolour=" + ctx.state.rgbaDictionary[ display_names.back_color.color]
			smsg += "&wccpf_regofont="+ display_names.font;
			smsg += "&wccpf_regocolour="+ ctx.state.rgbaDictionary[ display_names.font_color.color]
			if(ctx.state.xtrainfo_regonumbers != null)
				smsg += "&wccpf_more_info="+ctx.state.xtrainfo_regonumbers


			var self = ctx.state;   

			console.log("yacth:",smsg);
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (xhttp.readyState == 4 && xhttp.status == 200) {
					var response =  xhttp.responseText
					self.info = response, 
					self.msg_popups = {type: "RESPONSE_OK", data:"RegoNumber", extra:response},
					$(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash]);
					self.loading_screen = false

			
				}
			}.bind(this)
			xhttp.open("POST", smsg, true);
			xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; UTF-8");
			xhttp.send();	
		},

	
		addLiferingToCart:function(ctx){

			var product	 = ctx.state.design_products.liferingname;
			var smsg = '/product/lifering-lettering/'+
			'?add-to-cart={id}&variation_id={variation_id}&wccpf_liferingtop={liferingtop}&wccpf_liferingbottom={liferingbottom}'
			
			var variation_id = ctx.state.lifering.id
			smsg = smsg.replace("{id}",product.id);
			smsg = smsg.replace("{variation_id}",variation_id);
			smsg = smsg.replace("{liferingtop}",ctx.state.lifering_uptxt);
			smsg = smsg.replace("{liferingbottom}",ctx.state.lifering_bottomtxt);
		
			console.log(variation_id);
			console.log(product);
			var att_amount;
			for(var i= 0; i <product.variations.length; i++ ){
				if(product.variations[i].id == variation_id){
					att_amount = product.variations[i].attribute_amount.substring(0, 1);
					break;
				}
			}
			console.log(att_amount);
			//smsg += "&quantity="+att_amount
			var self = ctx.state;   

			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (xhttp.readyState == 4 && xhttp.status == 200) {
					var response =  xhttp.responseText
					self.info = response, 
					self.msg_popups = {type: "RESPONSE_OK", data:"RegoNumber", extra:response},
					$(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash]);
					self.loading_screen = false

			
				}
			}.bind(this)
			xhttp.open("POST", smsg, true);
			xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; UTF-8");
			xhttp.send();
		},

		addTenderToCart:function(ctx){

			var product	 = ctx.state.design_products.tenderto;
			var smsg = '/product/tender-to/'+
			'?add-to-cart={id}&variation_id={variation_id}&wccpf_tendertolettering={tendertolettering}'
			
			var variation_id = ctx.state.tender.id

			smsg = smsg.replace("{id}",product.id);
			smsg = smsg.replace("{variation_id}",variation_id);
			smsg = smsg.replace("{tendertolettering}",ctx.state.tender_txt);
		
			var self = ctx.state;   

			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (xhttp.readyState == 4 && xhttp.status == 200) {
					var response =  xhttp.responseText
					self.info = response, 
					self.msg_popups = {type: "RESPONSE_OK", data:"RegoNumber", extra:response},
					$(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash]);
					self.loading_screen = false

			
				}
			}.bind(this)
			xhttp.open("POST", smsg, true);
			xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; UTF-8");
			xhttp.send();	

		},

		removeFromCart:function(ctx, tag) {
			if (typeof ctx.state.cart[tag] == 'undefined')
				return;
			
			delete  ctx.state.cart[tag];
		},	
	},
	modules: {
	},

})
