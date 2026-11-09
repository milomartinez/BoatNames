<script setup>
</script>
<template>
<v-container>
    <v-card outlined class="pa-4"> 
        <v-row align="center" class="ma-2">
            <h2> Hint - Choose Your Letter Style</h2>

        </v-row>
        <v-row  align="center"  justify="center">
            <v-col class="text-justify">
                <a>
                  Select CHOOSE LETTER STYLE to explore different fonts.
                  Use the category menu to browse the styles, then select a font to see your boat name in that lettering.
                  Try a few combinations to find a style that suits your boat and her name. Check that the wording is easy to read—not just attractive up close.

                </a>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center">
             <v-img :src="require('@/assets/images/tips/tip2_1.png')" contain  max-width="100%" />
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center">
                <a>
                  When you’re happy with your choice, select CLOSE to return to the designer.
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