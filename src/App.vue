<template>
	<v-app>   
  
			<v-card
				absolute>		
				<v-col align="center" justify="center">
					<Topbar />     
				</v-col>			
			</v-card>   
			<v-sheet
				class="overflow-y-auto "
				max-height="600"
				width="100%">
				<v-container height="100%" width="100%"  >  
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
			/*this.$store.state.design_products = {};
			//console.log(this.products.designproducts)
			for (var each in this.products.designproducts ) {
				var prod = this.products.designproducts[each];
				this.$store.state.design_products[prod.product] = prod;
			}  */  
		},

		processDesignData() {
			this.updateDesignData(this.design_data);
			/*this.$store.state.design_data = {}
			for(var each in this.design_data.regonumbers) {
				var p = this.design_data.regonumbers[each];
				this.$store.state.design_data [p.type] = p;
			}*/
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

/*
	
		var dataError = false;
		try{
		var response1 = await axios.get("/design/data.json") 
		}catch(err){

			this.design_data = jDesignData
			dataError = true;
		}
		
		if(!dataError)
		this.design_data = response1.data
		console.log("design data:",this.design_data);
		this.processDesignData();
*/
		
		var xhttp2 = new XMLHttpRequest();
		xhttp2.onreadystatechange = function() {
			if (xhttp2.readyState == 4 && xhttp2.status == 200) {
					this.products =  JSON.parse(xhttp2.responseText)
					//console.log("1. products:",xhttp2.responseText)
					//console.log("2. products:",this.products )
					this.processProducts();		
					this.updateReady( true);

			}
		}.bind(this)
		
		xhttp2.open("POST", "/designproductdata/", true);
		xhttp2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; UTF-8");
		xhttp2.send();	
	/*	var productError = false;
		try{
		var reponse2 = await axios.post("/designproductdata/",true) 
		}
		catch(err){
			productError = true;
			this.products = jProducts
		}
		if(!productError)
		this.products = reponse2.data;
		
		console.log("products:",this.products);
		this.processProducts();	*/

		console.log("2023-01-23 v1");
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
