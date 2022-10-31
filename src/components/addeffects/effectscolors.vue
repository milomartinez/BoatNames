<template>
    <v-row  align="center" justify="center">       
        <v-col cols="12" md="6" align="center" justify="center" >    
            <a>Shadow Colour</a>                  
            <madvColorPalette default_color="MidGrey" v-on:picked="shadowColorPicked" :colors_array="color_array"/>    
        </v-col>
        <v-col cols="12" md="6"  align="center" justify="center">
            <a>Outline Colour</a>         
            <madvColorPalette v-on:picked="outlineColorPicked" :colors_array="color_array"/>    
        </v-col>
    </v-row>  
</template>

<script>
import madvColorPalette from "@/components/gui/colorpalette.vue";

export default {
    name:"EffectsColors",

    components: {madvColorPalette,  },
    data () {
      return {
          disabled_shadow:false,
          disabled_outline:false,
          color_array :null,
        }
    },

    methods: {
        
        shadowColorPicked(color) {
            if(color == null)
                return;
            this.$store.state.design_displays.BoatName.shadow.color = color;
        },

        outlineColorPicked(color) {
            if(color == null)
                return;
            
            this.$store.state.design_displays.BoatName.stroke.color = color;
        },
    },


    created() {
        this.color_array = this.$store.state.pickable_colors;

    }
}
</Script>
