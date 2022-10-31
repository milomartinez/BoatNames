<template>


	<v-dialog	
		content-class="my-custom-dialog"
		v-model="dialog"
		max-width="480px"		

		>
		<template v-slot:activator="{ on }">
			<v-btn
				color="secondary lighten-2"
				dark
				v-on="on">
				Choose Letter Style
			</v-btn>       
		</template>  

			<v-card
	
				:style="my_style"		
			>
				
				<v-container > 
					<v-row justify="center" class="my-n4" >
					
						<MultilayerName  :mscale="name_scale" />		
						<!--				
						<v-toolbar-title class="mx-2" >{{title}}</v-toolbar-title>
						-->
					</v-row>
					
					<v-row  >  
						
						<v-col justify="center" >
							<a>Font Categories</a>   
						</v-col>     
						<v-col>
							<v-combobox
							v-model="select"
							:items="items"
							></v-combobox>
						</v-col>    
						<v-card-actions>
							<v-btn
							small
							color="primary"          
							@click="dialog = false" >
							close
							</v-btn>
						</v-card-actions>
						
					</v-row>
					<span class="d-none d-lg-block"><!--   dsiplay helpers  hide on screens smaller than lg -->
					<v-row  align="center" justify="center">
						<h1 :style="{'font-family':getFntName(), 'font-size':'45px'}">{{getFntName()}}</h1>
					</v-row>
					</span>
					<v-divider></v-divider>
					
					<v-row
						:style="scroll_height"
						class="overflow-y-auto"
						>   
						<FontsList  :display_type="dtype" :filter="select" /> 
				
					</v-row> 
				</v-container>
			</v-card>
	
	</v-dialog>
</template>


<script>

import FontsList from "@/components/gui/pickfont/fontlist.vue";
import MultilayerName   from "@/components/topbar/multilayername.vue";

export default {
	name:"PickFont",
	components:{FontsList, MultilayerName },
	props:["dtype","title","_dialog"],
	data :()=> ({
	
		my_style:null,
		scroll_height:null,
		name_scale:0.6,
		dialog_width:"480px",
		dialog: false,
		select:"All",
		items:["All","Block & Cartoon","Modern","Old World","Script","Various"]
	
	}),
	watch:{
		_dialog(val){
			this.dialog = val
		},
		dialog(val){
	
			if(val){
				this.$emit("buttonpressed");
			}
		}
	},
	methods:{
		getFntName() {
			return this.$store.state.design_displays[this.$store.state.current_display].font
		},

		getStyle(){

			var max_width = (this.isLandscape())?480:500;
			var max_height = (this.isLandscape())?690:450;
			var header_height = 200;

			var sout 	= "";
			var card_height = screen.availHeight - header_height; // 120 web page header
			if(card_height > max_height)
				card_height = max_height;



			this.scroll_height  = "height:"+(card_height *0.475)+"px;"
			var card_w	=  screen.availWidth;
			if(card_w > max_width)
				card_w = max_width;

			this.dialog_width = card_w;
		
			//console.log("scroll height:"+this.scroll_height);
			//console.log("screen.availWidth:",screen);
			//var x  	= (screen.availWidth - card_w)/2;
			//var y 	= (screen.availHeight - header_height - card_height)/2;
			sout 	= "height:"+card_height+"px; width:"+card_w+"px;";
	
			return sout;	
		},

		isLandscape(){

			return (screen.availHeight > screen.availWidth)?false:true

		}
	},

	computed:{

	
	},

	mounted(){
		//console.log("pick font mounted")
		this.my_style = this.getStyle();
		window.addEventListener("orientationchange", function() {
			//console.log("the orientation of the device is now " + event.target.screen.orientation.angle);
			this.my_style = this.getStyle();
		}.bind(this));

	}


}
</script>

<style scoped>
   >>>.my-custom-dialog {
    align-self: flex-end;
  }
</style>
