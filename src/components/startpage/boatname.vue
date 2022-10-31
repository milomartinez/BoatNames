<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-text-field 
        placeholder="Your Boat Name"
        label="Your Boat Name"
        v-model="input_boatname"
        @input="onChange(input_boatname)"        
        outlined  >        
      </v-text-field>      
    </v-col>

  </v-row>
</template>
<script>

import {mapState} from 'vuex' 

export default {
	name:"BoatName",
	data () {
		return {
			input_boatname:null,
		}
	},

	computed:{
		...mapState(['addable','design_displays','current_display'])
	},
	
	methods: {
		onChange (){
			this.$store.state.current_display =  "BoatName";
			this.addable.names.bt_visible = true;
			if(this.input_boatname.length == 0) {
				this.input_boatname = null;
				this.addable.names.bt_visible = false;
				this.design_displays.BoatName.text = "Your Boat Name";
			}
			else {
				this.design_displays.BoatName.text = this.input_boatname;
			}
		}		
	},

	mounted(){
		if(this.design_displays.BoatName.text != "Your Boat Name"){
			this.input_boatname  = this.design_displays.BoatName.text;
		}
	}
}
</script>