<template>
	<v-row>
		<v-col >
			<h1> Rego</h1>
			<v-row>
				<v-col cols="11">
					<InputRego />
				</v-col>
				<v-col cols="1">
					<HelpTipBt id=7 />
				</v-col>
			</v-row>

			<v-row>    
				<v-col cols="11">
					<RegoRadial />
				</v-col>
				<v-col cols="1">
					<HelpTipBt id=8 />
				</v-col>
			</v-row>

			<v-row> 
				<v-col cols="1" />
				<v-col cols="10">
					<RegoColours />
				</v-col>
				<v-col cols="1" justify="center">
					<HelpTipBt id=10 />
				</v-col>
			</v-row> 

			<v-row>
				<RegoCart />
			</v-row>
		</v-col>

	</v-row>
</template>

<script>

import InputRego	from "@/components/rego/inputrego.vue";
import RegoColours	from "@/components/rego/regocolours.vue";
import RegoCart		from '@/components/cart/regocart'
import RegoRadial	from "@/components/rego/regoradial.vue";
import HelpTipBt	from "@/components/gui/helptipbt.vue";

export default {
	name:"rego-comp",
  components: { InputRego,RegoRadial,RegoColours,HelpTipBt,RegoCart }

    
};
</script>
