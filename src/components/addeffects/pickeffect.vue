<template>
    <v-item-group  v-model="radio_selected" row @change="getRadioButton()">      
        <v-row align="center" justify="center"> 
            <v-card  class="px-5 mx-5"  color="#FFFFFF" flat> 
                <v-row>
                    <v-img :src="ShadowImg"  />   
                </v-row>
                <v-item  key ="shadow" v-slot:default="{ active, toggle }">
                    <v-col @click="toggle()">  
                        <v-row align="center" justify="center">                                
                            <v-icon  v-if="!active" >mdi-checkbox-blank-circle-outline</v-icon>
                            <v-icon  v-if="active"  >mdi-circle-slice-8</v-icon>    
                        </v-row>            
                    </v-col>                
                </v-item>
            </v-card>
            <v-card  class="px-5 mx-5 "  color="#FFFFFF" flat> 
                <v-row>
                    <v-img :src="OutlineImg" />   
                </v-row>
                <v-item  key ="outline" v-slot:default="{ active, toggle }">
                    <v-col  @click="toggle()">      
                        <v-row align="center" justify="center">                               
                            <v-icon  v-if="!active"  >mdi-checkbox-blank-circle-outline</v-icon>
                            <v-icon  v-if="active"   >mdi-circle-slice-8</v-icon>      
                        </v-row>          
                    </v-col>                
                </v-item>
            </v-card>
            <v-card  class="px-5 mx-5"  color="#FFFFFF" flat> 
                <v-row>
                    <v-img :src="BothImg" />  
                </v-row>
                <v-item  key="both"  v-slot:default="{ active, toggle }">
                    <v-col  @click="toggle()">  
                        <v-row align="center" justify="center">  
                            <v-icon  v-if="!active"  >mdi-checkbox-blank-circle-outline</v-icon>
                            <v-icon  v-if="active"   >mdi-circle-slice-8</v-icon>    
                        </v-row>            
                    </v-col>                
                </v-item>
            </v-card>              
        </v-row> 
    </v-item-group>    
</template>
<script>

import {mapState} from 'vuex' 
export default {
    name:"PickEffect",
     data () {
      return {
          model:null,
          radio_selected: null,
          prev_select:null,
          BothImg: require('@/assets/images/both.png'),
          ShadowImg: require('@/assets/images/shadow.png'),
          OutlineImg: require('@/assets/images/outline.png')
      }
    },

    computed:{
        ...mapState(['current_display','design_displays'])
    },
    methods:
    {
        getRadioButton()
        {
            var display = true;
            if (typeof this.radio_selected == 'undefined' )
                display = false;
           
            if(this.radio_selected == 0) //shadow
                display = false;


			this.$cookies.set("radio_selected",this.radio_selected)
            this.$store.state.current_display =  "BoatName";
            this.design_displays.BoatName.shadow.enable = false;
            this.design_displays.BoatName.stroke.enable = false;
            switch(this.radio_selected )
            {
                case 0://shadow  
                    this.design_displays.BoatName.effect = "Shadow";        
                 //   this.design_displays.BoatName.shadow.color = "#000000" ;    
                    this.design_displays.BoatName.shadow.enable = (this.radio_selected == 0)?true:false;
                break;
                case 1://outline
                     this.design_displays.BoatName.effect = "Outline";  
                    this.design_displays.BoatName.stroke.enable = true;
            
                break;
                case 2://both
                    this.design_displays.BoatName.effect = "ShadowOutline";  
                    this.design_displays.BoatName.stroke.enable = true;
                    this.design_displays.BoatName.shadow.enable = true;
              
                break;
                default:
                    this.design_displays.BoatName.shadow.enable = false;
                    this.design_displays.BoatName.stroke.enable = false;
                break;
            }

      
             this.$emit('displaySpecialEffects',display);
        },        
    },

    created(){


        this.$root.$on('reset_display',() => {

            console.log("jere")
            this.model = null;
            this.radio_selecte = null;
            this.prev_select = null;
        })
    },
    mounted(){

       // this.radio_selected  = 	this.$cookies.get("radio_selected")
       // console.log(      this.radio_selected )
    }

    
}
</script>