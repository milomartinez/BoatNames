<template>
    <v-item-group >
        <v-card outlined class="pa-5 ma-1" width="350"> 
            <v-row>
                <v-col class="py-0 px-5">
                    <v-card id="maindisplay"
                       outlined="">
                        <v-card      
                        flat                 
                            :color="pickedColorData.color"
                        
                            height="50">
                            <v-img v-if="typeof pickedColorData.image != 'undefined'" 
                                width="100%" height="100%"
                                :src="pickedColorData.image"/>
                            <div></div>
                        </v-card>
                    </v-card>
                </v-col>
            </v-row>  
            <v-row>
                <v-col class="py-2">                    
                    <a>{{pickedColorData.name}}</a>                        
                </v-col>
            </v-row>  
            <v-row wrap>
                <v-col
                class="pa-1"
                v-for="(n,idx) in this.colors_array"
                :key="idx"
                cols="2"                          
                md="2" >
                    <v-item v-slot:default="{  active, toggle }">
                        <v-card
                        outlined
                      
                        >
                            <v-card                               
                                :color=n.color 
                                class="d-flex align-center"
                                width="50"
                                height="20"
                                @click="toggle(); onPick(n,!active) ">
                          
                                    <v-img v-if="typeof n.image != 'undefined'" 
                                        width="50" height="20"
                                        :src="n.image"/>    
                                    <!--
                                    <v-scroll-y-transition>
                                            <v-icon  v-if="active" class="center " dark right>mdi-checkbox-marked-circle</v-icon>
                                    </v-scroll-y-transition >    
                                    -->
         
                            </v-card>
                        </v-card>
                    </v-item>
                </v-col>
            </v-row>
        </v-card>
    </v-item-group>
</template>

<script>

//import Chrome       from '@/assets/images/Chrome.png'
import Gold         from '@/assets/images/Gold.jpg'
import Silver       from '@/assets/images/Silver.jpg'
import MetalCoal    from '@/assets/images/Charcoal.jpg'

export default {
    name:"madvColorPalette",
    props:["colors_array","default_color"],

    data()
    {
        return{
     
            pickedColorData:null,
            local_color_array:this.colors_array
        }
    },
    methods:
    {
           
        onPick(data,  active)
        {   
           this.pickedColorData = data;
           if(!active)data = null;
            this.$emit("picked", data);
        
        },     

        init(){
            var colorName = (typeof this.default_color == 'undefined')?"Black":this.default_color ;       
            this.pickedColorData  = this.colors_array[colorName]
 
            for (var each in this.colors_array)
            {
                if(typeof this.colors_array[each].image == 'undefined' )
                    continue;

                switch(each)
                {
                   /* case "Chrome":
                        this.colors_array[each].image = Chrome;
                        break;*/
                    case "Silver":
                        this.local_color_array[each].image = Silver;
                        break;
                    case "Gold":
                        this.local_color_array[each].image = Gold;
                        break;
                    case "MetalCoal":
                        this.local_color_array[each].image = MetalCoal;
                        break;

                }
           

        }
            
        }
    },
    created() {
        this.init();
        this.$root.$on('reset_display',() => {
            this.init();
       })
        
    }
  
  
}
</script>
<style  scoped>

#maindisplay{
  
    border: 1px solid grey !important
}
</style>