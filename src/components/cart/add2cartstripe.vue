<template>
    <v-bottom-navigation
        grow >
        <v-card
            :color="getColor"
            width ='100%'
            :disabled="getDisabled">
            <v-container fill-height>
            <v-row class="white--text title justify-center "   > 
                Total Cart Amount : {{carttotal.toLocaleString('us-US', { style: 'currency', currency: 'AUD' })   }} 

            </v-row>      
        </v-container>
        </v-card>
    </v-bottom-navigation>
</template>


<script>
import {mapState} from 'vuex'

export default {
    data: () => ({
        carttotal:0,
        products_map:{
            startpage:"BoatName",
            rego:"RegoNumber",
            homeport:"HomePort"

        }
	
    }),
    
    watch:{
        prices(){

          this.getCartTotal()
        },
        deep:true,

        design_products:{
            handler(newValue) {
             console.log("newvaue:",newValue);
            },
            deep: true
        },
        ready:{
            handler(newValue) {
             console.log("ready newvaue:",newValue);
            },
            deep: true

        }

    },
    
    computed:{
        ...mapState(['addable','getNamePrice','design_products','prices','ready']),

   
        getTotal(){
            var total = 0;

            var types = this.prices[this.products_map[this.$route.name]]

            for(var each in types){

                total += types[each]
            }
            return total
        },
        getDisabled(){

            return !this.displayButton()
        },
        
        getColor(){

            return this.displayButton()?'primary':"grey" 
        },        
    },

     methods:{

        onClick(){

            switch(this.$route.name){

                case 'startpage':
                case 'addeffects':
                   this.addable.names.popup = true;
                    break;
                case 'rego':
                      this.addable.regonumbers.popup = true;
                    break;
                case 'homeport':
                    this.addable.homeport.popup = true;
                    break;
            }
        },

        displayButton(){
            var bdisplay = false;
 
            switch(this.$route.name){

                case 'startpage':
                case 'addeffects':
                    bdisplay = this.addable.names.bt_visible ;
                    break;
                case 'homeport':
                      bdisplay = this.addable.homeport.bt_visible ;
                    break;
                case 'rego':
                     bdisplay = this.addable.regonumbers.bt_visible ;
                    break;
            }
        
            return bdisplay;

        },

        getCartTotal(){
            var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (xhttp.readyState == 4 && xhttp.status == 200) {
                    var response =  JSON.parse(xhttp.responseText)
                    this.carttotal = response.carttotal
                   // console.log("response:",response)
                   // console.log("arttotal:",this.carttotal)
				}
			}.bind(this)
			xhttp.open("POST", '/bncarttotal/', true);
			xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; UTF-8");
			xhttp.send();

        }
    },

    mounted(){

        console.log(">>> mounted");
        this.getCartTotal()
    }
}
</script>