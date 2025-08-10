<template>
	<v-app style="overflow: hidden;">   
  
			<v-card>		
				<v-col align="center" justify="center">
					<Topbar />     
				</v-col>			
			</v-card>   
			<v-sheet
				class="overflow-y-auto "
				max-height="600"
				width="100%">
				<v-container  height="100%" width="100%"  >  
					<LoadingScreen />
					<DialogManager />            
					<keep-alive >            
						<router-view />
					</keep-alive>
					<HelpController />				
				</v-container>
			</v-sheet>  
		<!--	<Stripe />
		-->
	
	</v-app>
</template>

<script>
//import axios from 'axios';

import jDesignData		from "@/assets/data/designdata.json";
import jProducts		from "@/assets/data/designproduct.json";
import jColors			from "@/assets/data/colorpalette.json";  

import HelpController	from "@/components/helps/helpcontroller.vue";
import DialogManager	from "@/components/dialogs/dialogmanager.vue";
import LoadingScreen	from "@/components/dialogs/loadingscreen.vue";
//import Stripe			from "@/components/cart/add2cartstripe.vue";
import Topbar			from "@/components/topbar/Topbar.vue";

import {mapState, mapActions} from 'vuex'

export default {
	name: 'App',
	components: {Topbar, HelpController,  
	DialogManager, LoadingScreen,},

	data: () => ({
		jDesignData,jProducts,

		design_data:null,
		products:null,
	}),
	
	computed:{
        ...mapState(['ready',]),
		
	},
	methods: {
		...mapActions(['updateReady', 'updateDesignProducts','updateDesignData']),
		processProducts(){
			this.updateDesignProducts(this.products);

		},

		processDesignData() {
			this.updateDesignData(this.design_data);
		}
	},

	beforeCreate:function() {
		this.$store.state.pickable_colors = jColors; 
		for (var each in jColors) {
			var c = jColors[each];
			this.$store.state.rgbaDictionary[c.color] = c.name;
		}
	},

	created:  function()  {

		this.design_data = jDesignData
		this.products = jProducts


		this.processDesignData();
		this.processProducts();	
		this.updateReady( true);
		var xhttp1 = new XMLHttpRequest();
		
		xhttp1.onreadystatechange = function() {
		
			if (xhttp1.readyState == 4 && xhttp1.status == 200) {
					this.design_data = xhttp1.responseText
					
					if(typeof this.design_data.regonumbers == 'undefined') 
						this.design_data = jDesignData
	
					this.processDesignData();	
					this.updateReady( true);
	
			}
		}.bind(this)
		

		
		xhttp1.open("GET", "/design/data.json", true);
		//xhttp1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; UTF-8");
		xhttp1.send();	



		console.log("req desig products")
		
		var xhttp2 = new XMLHttpRequest();
		xhttp2.onreadystatechange = function() {
				console.log("readyState:"+xhttp2.readyState+" status:"+xhttp2.status)
			if (xhttp2.readyState == 4 && xhttp2.status == 200) {
			
				//console.log("1. responseText:",xhttp2.responseText)
				//console.log("1. response:",xhttp2.response)
				//console.log("1. responseType:",xhttp2.responseType)
				this.products =  JSON.parse(xhttp2.responseText)
				//console.log("2. products:",this.products )
				this.processProducts();		
				this.updateReady( true);

			}
		}.bind(this)
		
		var endpoint = "https://www.boatnames.com.au/wp-json/custom-api/v1/products";
		//	xhttp2.open("POST", "/designproductdata/", true);
		//var endpoint = "/api/wp-json/custom-api/v1/products";
		xhttp2.open("GET", endpoint, true);
		//xhttp2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; UTF-8");
		xhttp2.send();	

	},    

	updated(){
        switch(this.$route.name){

            case 'startpage':
                this.$store.state.current_display =  "BoatName";
                break;
            case 'rego':
                 this.$store.state.current_display =  "RegoNumber";
                break;
            case 'homeport':
                 this.$store.state.current_display =  "HomePort";
                break;
		}
	}
};
</script>

<style  scoped>

/* width */
::-webkit-scrollbar {
  width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #2196f3; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #0367B4; 
}
</style>
