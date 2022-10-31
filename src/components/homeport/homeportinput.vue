<template>
    <v-row>      
        <v-col cols="12" sm="6">  
            <v-text-field 
                placeholder="Your Home Port"
                label="Your Home Port"
                v-model="homeport"  
                @input="onChange()"      
                outlined  > 
            </v-text-field> 
        </v-col>     
    </v-row>
</template>
<script>
import {mapState} from 'vuex' 

export default {

	name:"home-port-input",
	data:()=>({
		homeport:"",
	}),
	computed:{
		...mapState(['addable','design_displays'])
	},
	methods: {
		onChange (){
			this.$store.state.current_display =  "HomePort";
			this.addable.homeport.bt_visible = true;
	
			if(this.homeport.length == 0) {
				this.homeport = null;
				this.addable.homeport.bt_visible = false;
				this.$store.state.design_displays.HomePort.text = "Home Port";
			} 
			else{
				this.$store.state.design_displays.HomePort.text = this.homeport;
			}
		},
	},
	created(){
		this.$root.$on('reset_display',() => {
			this.homeport = null;
		})
	},
	mounted(){
		if(this.design_displays.HomePort.text != "Home Port"){
			this.homeport  = this.design_displays.HomePort.text;
		}
	}
}
</script>