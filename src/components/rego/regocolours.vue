<template>
    <v-container>
		<v-col >
			<v-row  >  
				<v-col cols="12" md="6" align="center" justify="center">             
					<a>Rego Colour</a>
					<madvColorPalette v-on:picked="regoColorPicked" :colors_array="color_array"/>          
				</v-col>
				<v-col cols="12" md="6" align="center" justify="center">
					<a>Boat Colour</a>
					<madvColorPalette v-on:picked="boatColorPicked" :colors_array="color_array"/>    
				</v-col>            
			</v-row>
			<v-row >            
				<v-col cols="12" md="6" align="center" justify="center"  >  
					<v-card class="px-5 mx-5" flat>  
						<v-row align="center" justify="center"   >         
							<v-img 
								spect-ratio="1"
								max-width="200"
								max-height="80" 
								:src="ShadowImg" 
							/> 
						</v-row> 
						<v-row align="center" justify="center"   >  
							<v-checkbox  
								v-model="disabled_shadow" 
								off-icon="mdi-checkbox-blank-circle-outline"
								on-icon="mdi-circle-slice-8" 
								@change="shadowPicked()" >							
							</v-checkbox>
						</v-row> 
					</v-card>
					<v-row align="center" justify="center"   >  
						<madvColorPalette  default_color="MidGrey" v-on:picked="shadowColorPicked" :colors_array="color_array"/>    
					</v-row> 					
				</v-col>
				<v-col cols="12" md="6" align="center" justify="center">
					<v-card class="px-5 mx-5" flat> 
						<v-row align="center" justify="center"> 
							<v-img   
								spect-ratio="1"
								max-width="200"
								max-height="80" 
								:src="OutlineImg" 
							/>  
						</v-row> 
						<v-row align="center" justify="center"> 
							<v-checkbox 
								off-icon="mdi-checkbox-blank-circle-outline"
								on-icon="mdi-circle-slice-8" 
								v-model="disabled_outline" 
								@change="outlinePicked()" >
							</v-checkbox>
						</v-row>  
					</v-card>
					<v-row align="center" justify="center">   
						<madvColorPalette v-on:picked="outlineColorPicked" :colors_array="color_array"/>    
					</v-row> 				
				</v-col>
			</v-row>
		</v-col>
	</v-container>    
</template>
<script>
import madvColorPalette from "@/components/gui/colorpalette.vue";
     
export default {
    name:"RegoColours",
    components:{madvColorPalette},
    data(){
        return{
            color_array:null,
            disabled_outline:null,
            disabled_shadow:null,
            ShadowImg: require('@/assets/images/shadow.png'),
            OutlineImg: require('@/assets/images/outline.png')
        }
    },

    methods:{

        regoColorPicked(color)
        {
            var _color ={ color: "#000000", name:"Black"};
            if(color != null)
            _color = color;
            this.$store.state.current_display =  "RegoNumber";
            this.$store.state.design_displays["RegoNumber"].font_color = _color;

        },
        
        outlineColorPicked(color)
        {
            var _color ={ color: "#000000", name:"Black"};
            if(color != null)
            _color = color;
            this.$store.state.design_displays["RegoNumber"].stroke.color = _color;
        },
        
        shadowColorPicked(color) {
            var _color ={ color: "#FFFFFF", name:"White"};
            if(color != null)
            _color = color;
            console.log(_color);
            this.$store.state.design_displays["RegoNumber"].shadow.color = _color;
        },

        outlinePicked(){
			if(!this.disabled_outline)
				this.$store.state.current_display =  "RegoNumber";
            this.$store.state.design_displays.RegoNumber.stroke.enable = this.disabled_outline;
        },

        shadowPicked() {
            if(this.disabled_shadow)
				this.$store.state.current_display =  "RegoNumber";
            this.$store.state.design_displays.RegoNumber.shadow.enable = this.disabled_shadow;
        },

        boatColorPicked(color) {   
            var _color ={ color: "#FFFFFF", name:"White"};
            if(color != null)
            _color = color;
            this.$store.state.current_display =  "RegoNumber";
            this.$store.state.design_displays["RegoNumber"]. back_color = _color;
        },
    },
    created()
    {
        this.color_array = this.$store.state.pickable_colors;
        this.$root.$on('reset_display',() => {
            this.disabled_outline = null;
            this.disabled_shadow = null;
        })
    }
}
</script>