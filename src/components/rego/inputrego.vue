<template>
	<v-container>
		<v-row>
			<v-col cols="12" sm="6">
				<v-text-field 
					placeholder="Rego Number"
					label="Rego Number"
					v-model="input_regonumber"
					@input="onChange(input_regonumber)"                
					outlined  >          
					
				</v-text-field>      
			</v-col>
		
			<v-col cols="12" sm="6" align-end justify-end>
				<v-row>
					<v-col>
						<v-checkbox v-model="slanted" label="Slanted"></v-checkbox>
					</v-col>
		
				</v-row>
			</v-col>
		</v-row>
	</v-container>    
</template>
<script>
import {mapState} from 'vuex' 

export default {
	name:"InputRego",
	data:()=>({ 
		slanted:null,
		input_regonumber:null,
	}),

	watch:{
		slanted(val){
			this.$store.state.current_display = "RegoNumber"
			this.$store.state.design_displays[this.$store.state.current_display].slanted = val
		}
	},
	
	computed:{
		...mapState(['addable','design_displays','current_display'])
	},
	methods: {
		onChange()  {
			this.$store.state.current_display =  "RegoNumber";           
			this.addable.regonumbers.bt_visible = true;
			if(this.input_regonumber.length == 0) {
				this.input_regonumber = null;
				this.addable.regonumbers.bt_visible = false;
				this.$store.state.design_displays.RegoNumber.text = "Rego Number";
			}
			else{
				this.$store.state.design_displays.RegoNumber.text = this.input_regonumber;
			}
		}
	},
	created(){
		this.$root.$on('reset_display',() => {
			this.input_regonumber = null;
		})
	},
	mounted(){
		if(this.design_displays.RegoNumber.text != "Rego Number"){
			this.input_regonumber  = this.design_displays.RegoNumber.text;
		}
	}
};
</script>