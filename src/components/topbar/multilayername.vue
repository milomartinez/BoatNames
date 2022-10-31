<template>
<v-card
    outlined
    shaped
    :color="backcolor"
    :height="size()" >      
        <span v-for=" (each,id) in astyle" :key="id"  >
            <p :style="each"  > {{getName()}} </p>
        </span>   
</v-card>
    
</template>
<script>

import {mapState} from 'vuex' 
import jDefaultDesign   from "@/assets/data/defaultdesign.json";
import jEffectSize      from "@/assets/data/effectktes.json";
export default {
    name:"multi-layer-name",
    props:["mscale"],
    data:()=>({

        text:"Home",
        backcolor:null,

       

        current_effects:{},
        astyle:{
            
            displayshadow:{    
            
                'font-family': 'Elite Sample',
                'font-size'  :'80px',
                'margin'     : '0.045em 0.045em',
                '-webkit-text-stroke': '0.15em grey',
                
                'top': '50%',
                'left': '50%',
                'transform': 'translate(-50%, -50%)',
                'white-space': 'nowrap',
            },

            shadowgap:{          

                'font-family': 'Elite Sample',
                'font-size'       :'80px',
                '-webkit-text-stroke': '0.15em white',
                'top': '50%',
                'left': '50%',
                'transform': 'translate(-50%, -50%)',
                'white-space': 'nowrap',
            },
            displaystroke:    {

                'font-family': 'Elite Sample',
                'font-size'       :'80px',
                '-webkit-text-stroke': '0.1em blue',
                'top': '50%',
                'left': '50%',
                'transform': 'translate(-50%, -50%)',
                'white-space': 'nowrap',
            },
            strokegap:   {

                'font-family': 'Elite Sample',
                'font-size'       :'80px',
                '-webkit-text-stroke': '0.05em white',
                'top': '50%',
                'left': '50%',
                'transform': 'translate(-50%, -50%)',
                'white-space': 'nowrap',
            },
           top: {

                'color':'black',
                'font-family': 'Elite Sample',
                'font-size'  :'80px',
                'top': '50%',
                'left': '50%',
                'transform': 'translate(-50%, -50%)',
                'white-space': 'nowrap',
              
                
                

            }
        }
    }),

    computed:{

    ...mapState(['design_displays','current_display','addable']),
     
    },
   

    watch: {
        design_displays: {
            handler(displays){
                // do stuff
                this.updateEffects(displays);

            },
            deep: true
        },
        current_display (){
          
            this.updateEffects(this.design_displays);
        
        }
    },
    methods:{

        updateShadow(elem){

            var shadow_color    = elem.back_color.color;
            var shadow_gap_color= elem.back_color.color; 
            var size            = '0px '
            var gap_size        = '0px '
            var margin          = "0em 0em ";
            if(elem.shadow.enable) {
                shadow_color = elem.shadow.color.color;

                size    = '0.07em '
                gap_size= '0.025em '                
                margin  = '0.03em 0.03em';            
              
                if(elem.stroke.enable) {
                   size     = jEffectSize.shadow[elem.stroke.type].size
                   gap_size = jEffectSize.shadow[elem.stroke.type].gap
                   margin   = jEffectSize.shadow[elem.stroke.type].margin
                   
                }
            }
                  
            this.astyle['displayshadow']['-webkit-text-stroke'] = size + shadow_color
            this.astyle['shadowgap']['-webkit-text-stroke']     = gap_size + shadow_gap_color
            this.astyle['displayshadow']['margin']              = margin;
               
        },

        updateStroke(elem){

            var stroke_gap_color= elem.back_color.color; 
            var stroke_color    = elem.back_color.color; 
            var stroke_size     = '0px ' 
            var gap_size        = '0px '
  
            if(elem.stroke.enable) { 
                stroke_size     = jEffectSize.stroke[elem.stroke.type].size
                gap_size        = jEffectSize.stroke[elem.stroke.type].gap
                stroke_color    = elem.stroke.color.color;
                stroke_gap_color= elem.back_color.color;                
            }
                    
            this.astyle['displaystroke']['-webkit-text-stroke'] = stroke_size + stroke_color;
            this.astyle['strokegap']['-webkit-text-stroke']     = gap_size + stroke_gap_color;
        },

        updateEffects(displays){
            
            this.$cookies.set("name_display", displays);
            this.$cookies.set("addable", this.addable);
            var elem = displays[this.current_display]
            this.backcolor = elem.back_color.color;
            this.updateFntColor(elem.back_color.color);
            this.updateAllStyles('font-size',this.getFontSize());
            this.updateAllStyles('font-family',elem.font);
            var style = (elem.slanted)?'italic':'normal'
            this.updateAllStyles('font-style',style);
             
            this.astyle['top']['color'] = elem.font_color.color;
            this.updateShadow(elem);
            this.updateStroke(elem);

        },

        getName(){

            return this.design_displays[this.current_display].text
        },

        getFontSize(){

            var size = {xs:45,sm:75,md:80}[this.$vuetify.breakpoint.name];   
            size =  size ? size : 90
            var _scale = (typeof this.mscale == 'undefined')?1:this.mscale
            //console.log("my sacle:"+this.mscale+" _scale:"+_scale);
            size *= _scale
            size += "px"
            return size;
        },

        updateAllStyles(tag, value){

            for (var each in this.astyle){
                this.astyle[each][tag] = value;
            }
        },

        //update all but top so get rife of saw border
        updateFntColor( )  {
            for (var each in this.astyle) {   
                if(each != top)
                this.astyle[each]['color'] = 'rgba(0, 0, 0, 0)'; 
            }
        },

        size () {
            const size = {xs:100,sm:135}[this.$vuetify.breakpoint.name];
            return size ? size : 150
        },      
    },

    created(){

        //this.updateEffects(this.design_displays[this.current_display]);
        //javascript cookie
        //var x = document.cookie;
        //document.cookie = "username=John Doe";
        //console.log("doc:",x);  
        var snamedisplay = JSON.stringify(this.$cookies.get('name_display'));    
        var name_display = JSON.parse(snamedisplay);

     
        var jaddable = JSON.parse(JSON.stringify(this.$cookies.get('addable')));


        if(name_display == null)
        {
            this.$store.state.design_displays = jDefaultDesign;
        }
        else
        {
            this.$store.state.design_displays = null;
            this.$store.state.design_displays = {}
            let newObj = JSON.parse(JSON.stringify(name_display))
            this.$store.state.design_displays = newObj ;
            this.$store.state.addable = jaddable;
        }      
    }
}
</script>
<style scoped>
p{

    z-index: 10;
    position: absolute;
}



</style>