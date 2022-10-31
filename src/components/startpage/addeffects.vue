<template>
	<v-container >
		<v-row justify="center">
			<v-col cols="1" />
			<v-col cols="10">
				<PickEffect  v-on:displaySpecialEffects="radioChange" />   
			</v-col> 
			<v-col cols="1" >
				<HelpTipBt id=4 />  
			</v-col>
		</v-row>
		<v-row justify="center"   v-show="display_special" >    
			<v-col cols="1" />
			<v-col cols="10">
				<SpecialEffects/>    
			</v-col> 
			<v-col cols="1" >
				<HelpTipBt id=5 />  
			</v-col>
		</v-row>
		<v-row justify="center">   
			<v-col cols="1" />
			<v-col cols="10"> 
				<EffectsColors/>   
			</v-col> 
			<v-col cols="1" >
				<HelpTipBt id=6 />  
			</v-col> 
		</v-row>		
	</v-container>
</template>

<script>
import {mapState} from 'vuex' 

import PickEffect      from "@/components/addeffects/pickeffect.vue";
import SpecialEffects  from "@/components/addeffects/specialeffects.vue";
import EffectsColors   from "@/components/addeffects/effectscolors.vue";
import HelpTipBt        from "@/components/gui/helptipbt.vue";
export default {
	name:"AddEffects",
	data ()	{
		return{
			display_special:false,
		}
	},
	components: {
		PickEffect,SpecialEffects,EffectsColors, HelpTipBt
	},
	computed:{
		...mapState(['addable'])
	},
	methods: {
		radioChange(data){
			this.display_special = data;

	

			
		}
	},
	created(){
		this.$root.$on('reset_display',() => {
			this.display_special = false;
		})
	}
};
</script>
