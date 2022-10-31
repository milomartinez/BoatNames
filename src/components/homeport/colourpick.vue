<template>
	<v-row >
		<v-col cols="12" sm="6" align="center" justify="center">
			<a>Home Port Colour</a>
			<madvColorPalette v-on:picked="nameColorPicked" :colors_array="color_array"/>
		</v-col> 
		<v-col cols="12" sm="6" align="center" justify="center">
			<a>Boat Colour</a>
			<madvColorPalette v-on:picked="boatColorPicked" :colors_array="color_array" default_color="White"/>
		</v-col> 
	</v-row>
</template>
<script>
import madvColorPalette from "@/components/gui/colorpalette.vue";
   
export default {
    name:"ColourPick",
    components: {madvColorPalette  },
    
    data: () => ({
          color_array :null  
    }),

    methods: {
		boatColorPicked(color) {

			this.$store.state.current_display =  "HomePort";
			this.$store.state.design_displays["HomePort"].back_color = color;
		},
		nameColorPicked(color) {
			this.$store.state.current_display =  "HomePort";
			this.$store.state.design_displays["HomePort"].font_color = color;
		},
	},
    created() {
      this.color_array = this.$store.state.pickable_colors;
    }
}
</script>
