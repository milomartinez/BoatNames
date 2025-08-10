<template>
    <v-container>
        <v-card
            class="ma-2 pa-2"
            outlined>
            <h2 >Home Port</h2>
            <div :key=id v-for="(each, id) in this.portdata" class="ma-2">
                <v-row>
                    <v-col cols="12" md="5">                    
                        <v-row class="my-md-2 justify-md-start justify-center " >
                            <a class="mx-2">{{each.name}}</a>
                        </v-row>
                    </v-col>
                    <v-col cols="6" md="3">
                        <v-select
                            v-model="each.selected"
                            :items="each.items"
                            outlined
       
                            label="Height"                       
                            >                
                        </v-select>
                    </v-col>
                  
                    <v-col cols="6" md="4">
                        <v-text-field 
                            v-model="each.maxlength"
                            label="RESTRICT Lenght (Optional)"
                            class="auto-size-label"
                            outlined  >        

                        </v-text-field> 
                    </v-col>                   
                </v-row>
                <v-row>                                  
                    <v-container class="mx-4 mt-n6" >   
                        <v-row justify="center" align="center">     
                            <v-spacer></v-spacer>          
                            <v-col cols="12" md="5">
                                <h2 >Price:</h2>
                            </v-col>
                            <v-col cols="12" md="7">
                            <v-card  class="mx-2" min-width="120px" min-height="50" >
                               <v-card-title primary-title class="justify-center">
                                   <a   class="auto-size-link" v-if="prices.HomePort[id]!= null"> {{prices.HomePort[id].toLocaleString('us-US', { style: 'currency', currency: 'AUD' }) }}</a>  
                               </v-card-title>
                               
                            </v-card>  
                            </v-col>
                            <v-btn class="primary "
                                
                                @click="add2Cart( each)"
                                :disabled="!each.bt_enable"
                                >
                            Add to Cart
                            </v-btn> 
                        </v-row>  
                    </v-container> 
                </v-row>
            </div>
           
        </v-card>
        <v-card
            class="ma-2 pa-2"
            outlined>
            <div class="ma-2">
                <v-row>
                    <a class="mx-4">Lifering</a>         
                    <v-container class="mx-4 mt-n6" >    
                        <v-row justify="center" align="center">  
                            <v-spacer></v-spacer>   
                            <v-col cols="12" md="5">    
                                <h2 class="mx- my-1 ">Price:</h2>
                            </v-col> 
                            <v-col cols="12" md="7"> 
                            <v-card class="mx-2" min-width="120px" min-height="50" >
                                <v-card-title primary-title class="justify-center">
                                    <a class="auto-size-link" v-if="liferingprice!= null"> {{liferingprice.toLocaleString('us-US', { style: 'currency', currency: 'AUD' })}} </a>  
                                </v-card-title>                        
                            </v-card>  
                            </v-col>
                            <v-btn class="primary "
                                @click="addLifering2Cart"
                                :disabled="liferingprice == null" >
                                Add to Cart
                            </v-btn> 
                        </v-row>
                    </v-container>
                </v-row>
            </div>
        </v-card>
       <v-card 
            class="ma-2 pa-2"
            outlined>
            <div class="ma-2">
                <v-row>
                    <a class="mx-4">Tender</a>
                        <v-container class="mx-4 mt-n6" >
                            <v-row justify="center" align="center">
                            <v-spacer></v-spacer>    
                            <v-col cols="12" md="5">    
                                <h2 class="mx- my-1 ">Price:</h2>
                        </v-col>
                        <v-col cols="12" md="7">    
                            <v-card class="mx-2" min-width="120px" min-height="50" >
                                <v-card-title primary-title class="justify-center">
                                    <a class="auto-size-link" v-if="tenderprice!= null"> {{tenderprice.toLocaleString('us-US', { style: 'currency', currency: 'AUD' })}} </a>  
                                </v-card-title>
                            </v-card>  
                        </v-col>
                <v-btn class="primary"
               
                    :disabled="tenderprice == null"
                    @click="addTender2Cart"
                     >
                    Add to Cart
                </v-btn> 
                
                </v-row>
            </v-container>
            </v-row>
        </div>
                
        </v-card>
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
    name:"home-port-cart",
    data:()=>({
        portdata:{
            homeport:{
                check:null,
                name:"Home Port",
                selected:null,
                items:[],
                maxlength:null,
                price:null,
                bt_enable:true,
            }
        },

        liferingprice:null,
        tenderprice:null,
        xtrainfo:null,
    }),

    computed:{
        ...mapState(['color_tags','design_displays','current_display',
                    'lifering','tender','design_products','prices','cart','xtrainfo_homeport'])
    },
     watch: {
        xtrainfo(_val){
			this.$store.state.xtrainfo_homeport = _val
		},

        lifering:{
           handler(newval){         
                if(newval == null)
                    this.liferingprice = null;
                else         
                    this.liferingprice = newval.price

                this.prices.HomePort.lifering = (this.liferingprice == null)?0:this.liferingprice 
               
               
            },
            deep: true
        },
         
        tender:{
           handler(newval){      
                if(newval == null)
                    this.tenderprice = null;
                else               
                    this.tenderprice = newval.price
                 this.prices.HomePort.tender = (this.tenderprice == null)?0:this.tenderprice 
               
            },
            deep: true
        },
     
		portdata: {		
            handler(){		// do stuff   
            
                
               this.updatePrices()
			},
			deep: true
        },
        design_displays: {
            handler(dd){
                // do stuff
                this.portdata.homeport.bt_enable = true
                if(dd.HomePort.text == null || dd.HomePort.text == "Home Port"){
                    this.portdata.homeport.bt_enable = false
                }
                this.updatePrices()

            },
            deep: true
        },
	},

    methods:{
        ...mapActions(['getHomePort','removeFromCart','addPortToCart','addLiferingToCart','addTenderToCart']),

        add2Cart( each){
            each.bt_enable = false;
            this.addPortToCart(this.portdata.homeport.maxlength);
        },
 
        addLifering2Cart(){
         
            this.addLiferingToCart();
        },

        addTender2Cart(){
         
            this.addTenderToCart();
        },
        processHomeport() {
            var homeport = this.$store.state.design_products.homeport;
            this.portdata.homeport.items = [];
            for (var each in homeport.variations) {
                var o = homeport.variations[each];
                this.portdata.homeport.items.push(o.attribute_size);
            }   
            this.portdata.homeport.selected =  this.portdata.homeport.items[0]
        },

        updatePrices(){
   
            for(var name in this.portdata){
                var each    = this.portdata[name]   
                var obj     = {}
                obj.selected= each.selected
                obj.tag     = name
                this.prices.HomePort[name]  = (obj  == null)?null:this.getHomePort(obj)                             
            }
        },

        getHomePort:function( obj) 	{
	
			var homeport = this.design_products.homeport.variations; 
			this.cart['homeport'] = {};
			this.cart['homeport'].id = this.design_products.homeport.id
			var combo_pick = obj.selected;
			var tmp = homeport.filter(function(v){return combo_pick == v.attribute_size});
			
			var design_tmp = this.design_displays['HomePort']
			var aColor = []; 
			aColor.push(design_tmp.font_color);
			if(design_tmp.shadow.enable)aColor.push(design_tmp.shadow.color);
			if(design_tmp.stroke.enable)aColor.push(design_tmp.stroke.color);

			var color_obj = {};
			for (var each in aColor) {
            //	if(!color_obj.hasOwnProperty(aColor[each].color))
                if(!Object.prototype.hasOwnProperty.call(color_obj, aColor[each].color))
					color_obj[aColor[each].color]=1;
			}

			var nColors =  this.color_tags[ Object.keys(color_obj).length - 1];

			var result = null;
			if(tmp.length > 0) 	{
				result = tmp.filter(function(v){return nColors == v.attribute_colors})[0];
				this. cart['homeport'].variation_id = result.id;
			}
			return result.price; 

        },
    },

    mounted(){

        this.processHomeport();

            this.portdata.homeport.bt_enable = true
            if(this.design_displays.HomePort.text == null || this.design_displays.HomePort.text == "Home Port"){
                this.portdata.homeport.bt_enable = false
            }

        this.$root.$on('response_recv',() => {
             for (var each in this.namesdata){
                 this.portdata[each].bt_enable = true;
             }
         });
    }
}
</script>
<style scoped>
h2{
    color:#069 ;
}
.auto-size-label .v-label {
  white-space: nowrap;
  font-size: calc(12px + 0.3vw); /* Tamaño base + ajuste responsivo */
  transform-origin: left center;
}

.auto-size-link {
  display: inline-block;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: clamp(12px, 3vw, 24px); /* Tamaño mínimo, adaptable, máximo */
}
</style>