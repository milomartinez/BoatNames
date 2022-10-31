<template>
	<v-row>
		<v-col >
			<h1> Home Port </h1>
			<PortInput />
			
			<v-row>
				<v-col cols="11">
					<PickFont :dtype="'HomePort'" :title="'Home Port'"/>
				</v-col>
				<v-col cols="1">
					<HelpTipBt id=11 />
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="11">
					<ColourPick />
				</v-col>
				<v-col cols="1">
					<HelpTipBt id=12 />
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="11">
				<v-row>
					<v-col cols="12" md="6">
					<Lifering/>
					</v-col>
					<v-col cols="12" md="6">
					<Tender/>
					</v-col>
				</v-row>
				</v-col>
				<v-col cols="1">
				<HelpTipBt id=13 />
				</v-col>
			</v-row>
			<v-row>
				<HomeportCart />
			</v-row>
		</v-col>

	</v-row>
</template>

<script>

import PickFont       from "@/components/gui/pickfont/pickfont.vue";
import ColourPick     from "@/components/homeport/colourpick.vue";
import Lifering       from "@/components/homeport/lifering.vue";
import Tender         from "@/components/homeport/tender.vue";
import PortInput      from "@/components/homeport/homeportinput.vue";
import HelpTipBt      from "@/components/gui/helptipbt.vue";
import HomeportCart   from '@/components/cart/homeportcart'
export default {
	name:"HomePort",
	components: { PickFont,ColourPick,Lifering,Tender, HelpTipBt, PortInput, HomeportCart},    
};
</script>
