<script setup>
</script>
<template>
<v-container>
    <v-card outlined class="pa-4">
      <v-row align="center" class="ma-2">
        <h2>Hint — Choose Your Name and Boat Colour</h2>
      </v-row>
        <v-row>
            <v-col  class="text-justify">
                <a>
                  Name Colour sets the main colour of your lettering.
                  Boat Colour changes the preview background. Choose a colour close to your hull so you can see how well your lettering stands out.

                </a>
            </v-col>
        </v-row>
         <v-row>
            <v-col >
                 <v-img :src="require('@/assets/images/tips/tip3_1.png')" contain  max-width="100%"/>
            </v-col>
        </v-row>
         <v-row>
            <v-col  class="text-justify" >
                <a>
                  The background is not part of your sticker. Your boat supplies the background—there is no solid coloured rectangle behind the name.
                  Your lettering arrives pre-spaced and correctly aligned, with application tape holding everything in position while you install it.
                </a>
            </v-col>
        </v-row>
    </v-card>
</v-container>    
</template>
<style scoped>

a {

   font-size: 16px;
}
</style>