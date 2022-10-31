<template>
	<v-list  >
		<v-list-item-group 
			v-model="model"
			color="indigo">
			<v-list-item id="fntitem"
				v-for="i in getList"
				:key="i.name"
				@click="onClick(i.name)" 
				>
			
				<v-list-item-content>
					<v-row class="my-n4">
						<v-col cols="10">
							<span :style = "{'font-family':i.name,'font_size':'135px'}" >
								{{i.name}}
							</span>							
						</v-col>
						<v-col v-if="i.sp == '*'">
							*
						</v-col>
					</v-row>
				</v-list-item-content>
			</v-list-item>
		</v-list-item-group>
	</v-list>
</template>
<script>

import jFontsList from "@/assets/data/fonts.json";
export default {
	name:"FontsList",
	props: ['display_type',"filter"],
	data(){
		return {
			jFontsList,
			model:1  
		}
	},
	computed:{
		getFontList() {
			return this.fntList
		},
		getList()  {
			var fntList = jFontsList;
			if (this.filter != "All") {
			
				fntList = jFontsList.filter(function(v){return this.filter == v.category}.bind(this))
			}
			return fntList
		}
	},
	methods:  {
		onClick(sname) 		{
			this.$nextTick(() => {
				this.$store.state.current_display = this.display_type;
				this.getCurrentElem().font = sname;
				this.$emit('closeDialog');
			});
		},
		getCurrentElem() {
			return this.$store.state.design_displays[this.$store.state.current_display];
		},
		
	}  
}
</script>
<style  scoped>
@import '~@/assets/css/fonts.css';
#fntitem{
  font-size: 2rem;
}
</style>