<template>
<v-container>
    <v-card outlined class="pa-4">
      <v-row align="center" class="ma-2">
        <h2> Hint - Enter Your Boat Name</h2>

      </v-row>
        <v-row >
            <v-col  class="text-justify">
                <a>
                Type your boat name exactly as you want it to appear, including spaces, capital letters and lowercase letters.
                The text is case-sensitive. For example, type SEA BREEZE for all capitals or Sea Breeze for a mix of capitals and lowercase letters.
                The preview updates as you type, so you can see your design taking shape.
                </a>

                <v-img :src="require('@/assets/images/tips/tip1_1.png')" contain  max-width="100%"/>
            </v-col>
        </v-row>
        <v-row class="pa-2" >
            <v-divider></v-divider>
        </v-row>
        <v-row>
         <v-col class="text-justify" cols=6>
           <a>
           Use the BOAT NAME, REGO NUMBER and EXTRAS tabs to move around the designer.
           Remember: changing the preview’s display size does not change the finished size of your lettering. Choose the actual size in the order section.
           </a>
         </v-col>
         <v-col cols=6>
           <v-img :src="require('@/assets/images/tips/tip1_2.png')" contain  max-width="100%"/>
         </v-col>
        </v-row>

    </v-card>
</v-container>    
</template>
<script>
export default {
        
}
</script>
<style scoped>

a {

   font-size: 16px;
}
</style>