<template>
	<v-container align="center" justify="center">
		<v-row  >   
			<v-col cols="6" >
				<v-container  >
					<v-row class="my-2">
						<v-btn  width ='100%' class="fourth--text " to="/" color='theird' @click="boatClick()">Boat Name</v-btn>   
					</v-row>	
					<v-row class="my-2">
						<v-btn width ='100%' class="fourth--text" to="/rego" color='theird' @click="regoClick()">Rego Number</v-btn> 
					</v-row>	
					<v-row class="my-2">	
						<v-btn width ='100%' class="fourth--text" to="/homeport" color='theird' @click="homeportClick()">Extras</v-btn>
					</v-row>
				</v-container>
			</v-col>
			<v-col cols="6"  class="my-4">
				<Add2CartBtns  :price="12" />
			</v-col>
		</v-row> 
	</v-container>
</template>

<script>
import jDefaultDesign   from "@/assets/data/defaultdesign.json";
import Add2CartBtns    	from "@/components/cart/add2cartbtns.vue";

export default {
	name:"DisplayButtons",
	components:{Add2CartBtns },
	methods: {
		boatClick() {
			this.$store.state.current_display = "BoatName"
		},
		
		regoClick() {
			this.$store.state.current_display = "RegoNumber"
		},
		
		homeportClick() {
			this.$store.state.current_display = "HomePort"
		},

		cleanCookies(){
		
			this.$store.state.design_displays = JSON.parse(JSON.stringify(jDefaultDesign));
			this.$store.state.addable = {};

			this.$store.state.addable.names 	= {popup:false, bt_visible:false}
			this.$store.state.addable.homeport	= {popup:false, bt_visible:false}
			this.$store.state.addable.regonumbers={popup:false, bt_visible:false}
		
			this.$root.$emit('reset_display',null)
		}
	}    
   
};
</script>
