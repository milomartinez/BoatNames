<template>
	<v-row  align="center" justify="center">
		<v-col cols="0" md="1" />		
		<v-col cols="12" md="5" justify="center" align="center">
			<a>Name Colour</a>
			<madvColorPalette v-on:picked="nameColorPicked" :colors_array="color_array" default_color="Black"/>
		</v-col> 
		<v-col cols="12"  md="5" justify="center" align="center" >
			<a>Boat Colour</a>
			<madvColorPalette v-on:picked="boatColorPicked" :colors_array="color_array"  default_color="White"/>
		</v-col>
		<v-col cols="0" md="1" />      
	</v-row>
</template>
<script>

import madvColorPalette from "@/components/gui/colorpalette.vue";
   
export default {
    name:"ColourPick",
    components: {madvColorPalette},
    
    data: () => ({
    

      color_array :null,
   
    }),

    methods:
    {
      boatColorPicked(newcolor)
      {       
        var _color ={ color: "rgba(255,255,255)", name:"White"};
        if(newcolor != null)
          _color = newcolor;
        this.$store.state.current_display =  "BoatName";  
        this.$store.state.design_displays["BoatName"].back_color = _color;
      },
      nameColorPicked(newcolor)     {

        var _color = { color: "rgba(0,0,0)", name:"Black"};
        if(newcolor != null)
          _color = newcolor;
        this.$store.state.current_display =  "BoatName";
        this.$store.state.design_displays["BoatName"].font_color = _color;
      },
       
    },
    created()
    {
      this.color_array = this.$store.state.pickable_colors;

    }
}
</script>
