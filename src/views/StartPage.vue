<template>
	<v-container>
	<v-row>
		<v-col cols="11">
			<BoatName/>
		</v-col>
		<v-col cols="1" align-end justify-end >
			<HelpTipBt id=1 />
		</v-col>
	</v-row>
	<v-row>	  
		<v-col cols="11">
			<PickFont :dtype="'BoatName'" :title="'Boat Name'"/>
		</v-col>
		<v-col cols="1" align-end justify-end>
			<HelpTipBt id=2 />
		</v-col>
	</v-row>
	<v-row>
		<v-col cols="1" />
		<v-col cols="10">
			<ColourPick/> 
		</v-col>
		<v-col cols="1">
			<HelpTipBt id=3 />
		</v-col> 
	</v-row> 
	<AddEffects />

	<NameCart />
	</v-container>
</template>

<script>
 

import NameCart		from '@/components/cart/namescart'
import BoatName		from "@/components/startpage/boatname.vue";
import ColourPick	from "@/components/startpage/colourpick.vue";
import AddEffects	from "@/components/startpage/addeffects.vue";


import PickFont		from "@/components/gui/pickfont/pickfont.vue";
import HelpTipBt	from "@/components/gui/helptipbt.vue";

export default {
	name:"StartPage",
	components: { BoatName, ColourPick,PickFont,HelpTipBt,AddEffects, NameCart } 
};
</script>
