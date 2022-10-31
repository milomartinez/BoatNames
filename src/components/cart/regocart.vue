<template>
    <v-container>
        <h2 class="ml-2" >Rego</h2>
        <v-item-group  v-model="radio_selected" >
            <!--v-item  v-slot:default="{ active, toggle }" :key="each.name" v-for="(each,id) in regodata"-->
                <v-item   :key="each.name" v-for="(each,id) in regodata">
                <v-card
                    class="pa-4"
                    outlined
                    >
                    <v-row>
                        <v-col cols="12" md="5" >
                            <v-row class="justify-md-start justify-center">
                                <v-col>
                                    <a class="mx-2 center">{{each.name}}</a>
                                </v-col>
                                <v-col cols="5">
              
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="6" md="3">
                            <v-select
                                v-model="each.selected"
                                :items="each.items"
                                outlined
                      
                                label="Choose State"                       
                                >                
                            </v-select>
                        </v-col>

                        <v-col cols="6" md="4">
                            <v-text-field                             
                                v-model="each.maxlength"
                                label="Set Max Length (Optional)"
                                outlined  >        
                            </v-text-field> 
                        </v-col>
                                        
                    </v-row>
                    <v-row>                                  
                    <v-container class="mx-4 mt-n6" >   
                            <v-row justify="center" align="center">     
                                <v-spacer></v-spacer>          
                                <h2 class="mx-2 my-1 ">Price:</h2>
                                <v-card width="120px">
                                    <v-card-title primary-title class="justify-center">
                                            <a v-if="prices.RegoNumber[id]!=null">{{prices.RegoNumber[id].toLocaleString('us-US', { style: 'currency', currency: 'AUD' })   }}</a>  
                                   </v-card-title>
                                </v-card>  
                                <v-btn                                     
                                    :disabled="!each.bt_enable"
                                    @click="add2Cart(id, each)"
                                    class="primary mx-4 my-2">
                                    Add to Cart
                                </v-btn> 
                            </v-row>  
                        </v-container> 
                    </v-row>
				</v-card>
            </v-item>
        </v-item-group>
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
/* eslint-disable */
import {mapState,  mapActions} from 'vuex'
export default {
    name:"regp-cart",
    data:()=>({        
        regodata:{
            powerBoatRego:{
                id:0,
                name:"Planing Power Boat ",
                selected:null,
                items:[],
                raw_items:[],
                maxlength:null,
                price:null,
                bt_enable:true
              
            },
            yachtRego:{
                id:1,
                name:"Yatch & Displacement",
                selected:null,
                items:[],
                raw_items:[],
                maxlength:null,
                price:null,
                bt_enable:true

            },
           PWC: {
                id:2,
                name:"PWC / Jetski",
                selected:null,
                items:[],
                raw_items:[],
                maxlength:null,
                price:null,
                bt_enable:true

            }
        },
        radio_selected:null,
		keys:[],
		xtrainfo:null,
    }),
      watch: {
		
		xtrainfo(_val){
			this.$store.state.xtrainfo_regonumbers = _val
		},

		regodata: {		
			handler(){		
               this.updatePrices()
			},
			deep: true
        },
        design_displays: {
            handler(dd){

                this.regodata.powerBoatRego.bt_enable = true
                this.regodata.yachtRego.bt_enable = true
                this.regodata.PWC.bt_enable = true
                if(dd.RegoNumber.text == null || dd.RegoNumber.text == "Rego Number"){
                    this.regodata.powerBoatRego.bt_enable = false
                    this.regodata.yachtRego.bt_enable = false
                    this.regodata.PWC.bt_enable = false
                }

                this.updatePrices()
            },
            deep: true
        },
	},
    computed:{
        ...mapState(['color_tags','design_displays','current_display',
                    'cart','design_products','prices','xtrainfo_regonumbers'])
    },
    methods:{
       ...mapActions(['getRegoPrice','removeFromCart','addRegoToCart']),
       add2Cart(id, each){
           each.bt_enable = false;
            var name = id
           var elem    = this.regodata[name]   
                var obj     = {}
                obj.selected= elem.raw_items[elem.selected]
                obj.tag     = name

           this.getRegoPrice(obj)
           this.addRegoToCart(this.regodata[id]);
       },
       
        updatePrices(){
            for(var name in this.regodata){
                var elem    = this.regodata[name]   
                var obj     = {}
                obj.selected= elem.raw_items[elem.selected]
                obj.tag     = name
                this.prices.RegoNumber[name]   = (obj  == null)?null:this.getRegoPrice(obj)
                   
            }
        },
        getRegoPrice:function( obj) {	
		
         
			var regonumbers = this.design_products.regonumbers.variations; 
   
			this.cart['regonumbers'] = {};
			this.cart['regonumbers'].id = this.design_products.regonumbers.id
	
			var tmp = regonumbers.filter(function(v){return obj.selected == v.attribute_size});

			var design_tmp = this.design_displays['RegoNumber']

			var aColor = []; 
			aColor.push(design_tmp.font_color);
			if(design_tmp.shadow.enable)aColor.push(design_tmp.shadow.color);
			if(design_tmp.stroke.enable)aColor.push(design_tmp.stroke.color);

			var color_obj = {};
			for (var each in aColor) {
                //if(!color_obj.hasOwnProperty(aColor[each].color)) 
                if(!Object.prototype.hasOwnProperty.call(color_obj, aColor[each].color))
					color_obj[aColor[each].color]=1;
			}

			var nColors =  this.color_tags[ Object.keys(color_obj).length - 1 ];

			var result = null;
			if(tmp.length > 0) 	{
				result = tmp.filter(function(v){return nColors == v.attribute_colors})[0];
				this.cart['regonumbers'].variation_id = result.id;
			}
			return result.price; 

	},
        /*  combobox data*/
        populateElement(data) {

            //console.log("data:",data)
            this.regodata[data.type].items      = this.createComboValues(data.value)
            this.regodata[data.type].selected   = this.regodata[data.type].items[0]
            this.regodata[data.type].raw_items  = this.createRawValues(data.value);
        },

        createRawValues(values) {
            var tmp = {};
            for (var each in values) {
            
                var val = values[each];
                var s = this.createComboElement(val);
                tmp[s] =  val.height+"mm"+" "+val.placement;
            }
            return tmp;
        },

        createComboValues(values) {
            var tmp = [];
            for (var each in values) {
                var s = this.createComboElement(values[each]);
                tmp.push(s);
            }
            return tmp;
        },

        createComboElement(val) {
            return val.state+" "+val.height+"mm"+" "+val.placement;
        }
    },

    mounted(){
     
        var rego_data = this.$store.state.design_data;     
      //  console.log("rego_data:",rego_data)  
        this.populateElement(rego_data.powerBoatRego, "Planing Power Boat");
        this.populateElement(rego_data.yachtRego, "Yacht & Displacement");
        this.populateElement(rego_data.PWC, "PWC / Jetski");

        this.keys = [];
        for(var tag in this.regodata) {
            this.keys.push(tag);
        }
        
        this.regodata.powerBoatRego.bt_enable = true
        this.regodata.yachtRego.bt_enable = true
        this.regodata.PWC.bt_enable = true
        if(this.design_displays.RegoNumber.text == null || this.design_displays.RegoNumber.text == "Rego Number"){
            this.regodata.powerBoatRego.bt_enable = false
            this.regodata.yachtRego.bt_enable = false
            this.regodata.PWC.bt_enable = false
        }


        this.$root.$on('response_recv',() => {
             for (var each in this.namesdata) {
                 this.regodata[each].bt_enable = true;
             }
         });
    }
}
</script>
<style scoped>
h2{
    color:#069 ;
}
</style>