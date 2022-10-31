<template>
   <v-container>
       <v-row  justify="center">
     
                <v-item-group v-model="radio_selected" row @change="getRadioButton()" mandatory>
                    <v-container align="center" justify="center">
                        <v-row justify="center"> 
                            <v-card  class="px-5 mx-5 align-center" cols="12" md="4" color="#FFFFFF" flat> 
                                <v-row>
                                    <v-img :src="img_outline1" max-height="70" max-width="170"  />   
                                </v-row>
                                <v-item  key ="thinclose" v-slot:default="{ active, toggle }">
                                    <v-row @click="toggle()" align="center" justify="center">  
                                        <v-col cols="2">                            
                                            <v-icon  v-if="!active"   >mdi-checkbox-blank-circle-outline</v-icon>
                                            <v-icon  v-if="active"  >mdi-circle-slice-8</v-icon>   
                                        </v-col> 
                                        <v-col cols="10">
                                            <a>Thin and Close</a>
                                        </v-col>                                        
                                    </v-row>                
                                </v-item>
                            </v-card>
                            <v-card  class="px-5 mx-5 align-center" cols="12" md="4" color="#FFFFFF" flat> 
                                <v-row>
                                    <v-img :src="img_outline2"  max-height="70" max-width="170" />   
                                </v-row>
                                <v-item  key ="thinwide" v-slot:default="{ active, toggle }">
                                    <v-row @click="toggle()" align="center" justify="center">    
                                        <v-col cols="2">                           
                                            <v-icon  v-if="!active"  >mdi-checkbox-blank-circle-outline</v-icon>
                                            <v-icon  v-if="active"   >mdi-circle-slice-8</v-icon>
                                        </v-col>
                                        <v-col cols="10">
                                            <a>Thin with Wide Space</a>
                                        </v-col>      
                                    </v-row>          
                                </v-item>
                            </v-card>
                        </v-row > 
                        <v-row  justify="center" > 
                            <v-card  class="px-5 mx-5 align-center" cols="12" md="4" color="#FFFFFF" flat> 
                                <v-row>
                                    <v-img :src="img_outline3"  max-height="70" max-width="170"/>  
                                </v-row>
                                <v-item  key="thickclose"  v-slot:default="{ active, toggle }">
                                    <v-row @click="toggle()" align="center" justify="center">  
                                        <v-col cols="2">   
                                            <v-icon  v-if="!active"  >mdi-checkbox-blank-circle-outline</v-icon>
                                            <v-icon  v-if="active"   >mdi-circle-slice-8</v-icon>    
                                        </v-col>
                                        <v-col cols="10">
                                            <a>Thick and Close</a>
                                        </v-col>  
                                    </v-row> 
                                </v-item>
                            </v-card>
                            <v-card  class="px-5 mx-5 align-center" cols="12" md="4" color="#FFFFFF" flat> 
                                <v-row>
                                    <v-img :src="img_outline4"  max-height="70" max-width="170" />  
                                </v-row>
                                <v-item  key="thickwide"  v-slot:default="{ active, toggle }">
                                    <v-row @click="toggle()" align="center" justify="center">  
                                        <v-col cols="2"> 
                                            <v-icon  v-if="!active"  >mdi-checkbox-blank-circle-outline</v-icon>
                                            <v-icon  v-if="active"   >mdi-circle-slice-8</v-icon>    
                                        </v-col>
                                        <v-col cols="10">
                                            <a>Thick with Wide Space</a>
                                        </v-col> 
                                    </v-row>            
                                </v-item>
                            </v-card>                    
                        </v-row>       
                    </v-container>
            
                </v-item-group> 
 
   
       </v-row>
   </v-container>
</template>
<script>

export default {
    name:"SpecialEffect",
     data () {
      return {
            model:null,
            radio_selected: null,
            prev_select:null,

            img_outline1:require('@/assets/images/outline.png'),
            img_outline2:require('@/assets/images/outline2.png'),
            img_outline3:require('@/assets/images/outline3.png'),
            img_outline4:require('@/assets/images/outline4.png'),
            outlines : ["thinclose","thinwide","thickclose","thickwide"]
    
        }
    },

    methods:
    {
        getRadioButton(){
            var stype = this.outlines[this.radio_selected];           
            this.$store.state.design_displays.BoatName.stroke.type = stype;
        },        
    },
    
    created(){
        this.$root.$on('reset_display',() => {

            this.model = null;
            this.radio_selected = null;
            this. prev_select = null;
        })
    }

}
</Script>
