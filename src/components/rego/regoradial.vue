<template>
	<v-container>
		<v-radio-group v-model="radios" :mandatory="false">
			<v-radio label="Use our Standard rego style 'Nice Block'" value="radio-1"></v-radio>
			<v-radio label="Use same style as name" value="radio-2"></v-radio>
			<v-radio value="radio-3"> 
			<template slot="label">
					<PickFont v-on:buttonpressed="pickClick" :_dialog="dialog" :dtype="'RegoNumber'" :title="'Rego Number'"/> 
				</template>
			</v-radio> 
		</v-radio-group>        
	</v-container>
</template>
<script>
import {mapState} from 'vuex'

import PickFont   from "@/components/gui/pickfont/pickfont.vue";
export default {
	name:"RegoRadial",
	components:{PickFont},
	data:() => ({
		radios:"radio-1",
		dialog:false
	}),
	computed:{
		...mapState(['design_displays','current_display'])
	},
		
	watch:{
		radios(val){
			this.dialog = false
			switch(val){
				case 'radio-1':
					this.design_displays[this.current_display].font = "Nice Block"
				break
				case 'radio-2':
					this.design_displays[this.current_display].font = this.design_displays.BoatName.font
				break
				case 'radio-3':
					this.dialog = true
				break
			}
		},
	},
		
	methods:{
		pickClick() {
			this.radios = "radio-3"
		}
	},
	created(){
		this.$root.$on('reset_display',() => {
			this.radios = "radio-1"
		})
	}
}
</script>