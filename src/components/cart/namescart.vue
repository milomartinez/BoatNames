<template>
   
    <v-container>   
        <h2 >Order Boat Names</h2>
    
        <div :key=each.name v-for="(each,id) in this.namesdata">              
            <v-card 
                class="my-2"
                outlined>
                <v-container class="ma-4">
                    <v-row class="my-1">
                        <v-col cols="12" md="5">
                            <v-row class="justify-start  mt-n4">
                                <a class="ma-2  justify-center">
                                        How we measure the Height
                                </a>
                            </v-row>
                            <v-row class="ma-auto" style="font-size:11px">
                                <span>
                                        “The height is measured from the lettering baseline to the highest point, including shadow or outline effects. It does not include tails that hang below the baseline."
                                </span>
                            </v-row>
                        </v-col>
                        <v-col cols="6" md="3" class="" >
                  
                            <v-select
                           
                                item-text="text"
                                v-model="each.selected"
                                :items="mesHeight"
                                outlined 
                             
                                label="Height"                       
                                >                
                            </v-select>
                        </v-col>
                    
                        <v-col cols="6" md="4">
                            <v-text-field 
                            
                                class="mr-4"
                                v-model="each.maxlength"
                                label="Set Max Length (Optional)"
                                outlined  >        
                            </v-text-field> 
                        </v-col>
                    </v-row>

                    <v-row class="my-1">                      
                        <v-col cols="12" md="5">
                            <v-row class="justify-start ">
                                <a class="ma-2">
                                    For 2 boats names, select quantity 2 etc
                                </a>
                            </v-row>
                            <v-row class="ma-auto" style="font-size:11px">
                                <span>
                                    However, Rego numbers are ordered in pairs
                                </span>
                            </v-row>                             
                        </v-col>
                            
                        <v-col cols="12" md="7">
                            <v-row>
                                   
                                <v-col cols="4" >
                                    <v-row align="center" justify="center" class="mx-auto">
                                
                     
                            <v-select
                          
                                v-model="each.qty"
                                :items="comboQty"
                                item-text="text"
                                item-value="value"
                                outlined 
                                label="Quantity"                       
                                >                
                            </v-select>
                                    </v-row>
                                </v-col>
                                
                                <v-col cols="8" > 
                                    <v-row  >  
                                
                                        <h2 class="mx-1 my-1 ">Price:</h2>
                                        <v-card  >
                                            <v-card-title primary-title class="justify-center">
                                            <a v-if="current_price !=  null">
                                                {{(each.qty*current_price[id]).toLocaleString('us-US', { style: 'currency', currency: 'AUD' }) }}
                                            </a>  
                                        </v-card-title>
                                        </v-card> 
                                    </v-row>    

                                  
                                </v-col >
                            </v-row>     
                            <v-row align="center" justify="center" >                            
                                <v-col cols="4" />
                                <v-col cols="8" >   
                                    <v-row  align="center" justify="center">  
                                    <v-btn class="ma-auto primary"
                                            
                                            @click="add2Cart(each, id)"
                                            :disabled="!each.bt_enable">
                                            Add to Cart
                                    </v-btn> 
                                     </v-row>
                                </v-col>
                            </v-row>                                

                                                  
                        </v-col>
                    </v-row>
                </v-container > 
            </v-card>                 
		</div>   
		<v-row>
			<v-text-field 
				class="ma-4"
				v-model="xtrainfo"
				placeholder="Extra Info"
				label="Extra Info"
				outlined  >          
			</v-text-field> 
		</v-row> 
    </v-container>

</template>
<script>

import {mapState,  mapActions} from 'vuex'

export default {
    name:"names-cart",
    data:()=>({
		xtrainfo:null,
        namesdata:{
            boatname:{
                name:"Boat Name",
                check:null,
                selected:null,
                products:[],
                items:[],
                maxlength:null,
                price:null,
                bt_enable:false,
                qty:1,
            }
        },

        current_price:null,
        combo_qty:[
            {value:1,text:"1 Name Only"},
            {value:2,text:"2 Names"},
            {value:3,text:"3 Names"},
            {value:4,text:"4 Names"},
            {value:5,text:"5 Names"},
            {value:6,text:"6 Names"},
            {value:7,text:"7 Names"},
            {value:8,text:"8 Names"},
            {value:9,text:"9 Names"},
            {value:10, text:"10 Names"},
        ],
       
    }),

    watch: {
        

        readyCount(){
   
            for (var tag in this.namesdata){        
                this.setupData(tag);
            }                
            
        },
		xtrainfo(_val){
			this.$store.state.xtrainfo_boatname = _val
		},
		namesdata: {		
			handler(){		// do stuff    
               this.updatePrices()
			},
			deep: true
        },
        'namesdata.boatname.selected':{
            handler(newval){
             
                this.$cookies.set("sidename_selected",newval)
            },
            deep:true

        },

      

        design_displays: {
            handler(dd){
            
                // do stuff
                this.namesdata.boatname.bt_enable = true
                if(dd.BoatName.text == null || dd.BoatName.text == "Your Boat Name" ){
                    this.namesdata.boatname.bt_enable = false
                }
                            
                this.updatePrices()

            },
            deep: true
        },
	},

    computed:{
        ...mapState(['color_tags','design_displays','current_display',
                    'cart','design_products','prices','xtrainfo_boatname','ready']),
        
        comboQty(){
            return this.combo_qty;
        },

        mesHeight(){

   
            return this.namesdata['boatname'].items

        }
         
        
    },
    
    methods:{

        ...mapActions(['removeFromCart','addNamesToCart']),

        mysort(a, b) {
            var _a = parseInt(a.replace('mm',''));
            var _b = parseInt(b.replace('mm',''));
            return _a - _b;

        },
/*
        processCombo(each){
            console.log(this.editForm, "-",each);

        },*/

  
        add2Cart(each, id){

            each.bt_enable = false;
           // console.log( this.namesdata[id])

            this.addNamesToCart( {name:id, class: this.namesdata[id] });
            this.removeFromCart(id);
        },
     
        setupData(tag){
           
            this.namesdata[tag].products = this.design_products[tag];   
            var tmp = this.namesdata[tag].products.variations 
     
            if (tmp == null)
                return;
                
            this.namesdata[tag].items = [];

            for (var each in tmp)
            {            
                if(!this.namesdata[tag].items.includes(tmp[each].attribute_size))
                    this.namesdata[tag].items.push(tmp[each].attribute_size);
            }

            this.namesdata[tag].items.sort(this.mysort);
            
            if(this.namesdata[tag].selected  == null)
            this.namesdata[tag].selected = this.namesdata[tag].items[0];
    
        },

        updatePrices(){
             this.current_price = {}
            for(var name in this.namesdata){
                var each    = this.namesdata[name]   
                var obj     = {}
                obj.selected=each.selected
                obj.tag     = name
                this.prices.BoatName[name]   = (obj  == null)?null:this.getNamePrice(obj).price
               
                this.current_price[name] =  this.prices.BoatName[name]
              //  console.log(this.current_price[name])
                      
            }
        },

        getNamePrice:function( obj)   {		
        
            var tag = obj.tag;
			var selection = obj.selected;
			this.cart[tag] = {};
			this.cart[tag].id =this.design_products[tag].id;

			var tmp = this.design_products[tag].variations;
			tmp = tmp.filter(function(v){return selection == v.attribute_size});
		
			var design_tmp = this.design_displays['BoatName']
			var aColor = []; 
			aColor.push(design_tmp.font_color);
			if(design_tmp.shadow.enable)aColor.push(design_tmp.shadow.color);
			if(design_tmp.stroke.enable)aColor.push(design_tmp.stroke.color);

			var color_obj = {};
			for (var each in aColor) {
                //if(!color_obj.hasOwnProperty(aColor[each].color)) 
                if(!Object.prototype.hasOwnProperty.call(color_obj, aColor[each].color))
					color_obj[aColor[each].color] = 1;
			}
    

			var nColors =  this.color_tags[ Object.keys(color_obj).length - 1];
		
			var elem = tmp.filter(function(v){return nColors == v.attribute_colors})[0];	 
            this.cart[tag].variation_id = elem.id;	
           // console.log(elem)	 
			return elem	
        },
    },
    
  
    mounted(){      
  
       
        for (var tag in this.namesdata){        
           // console.log(tag)
            this.setupData(tag);
        }

        this.namesdata.boatname.bt_enable = true
     //   this.namesdata.transomname.bt_enable = true
        if(this.design_displays.BoatName.text == null || this.design_displays.BoatName.text == "Your Boat Name" ){

            this.namesdata.boatname.bt_enable = false
           // this.namesdata.transomname.bt_enable = false
        }
                

        this.$root.$on('response_recv',() => {
             for (var each in this.namesdata) {
                 this.namesdata[each].bt_enable = true;
             }
         });
    },

    

}
</script>
<style scoped>
h2{
    color:#069 ;
}


</style>