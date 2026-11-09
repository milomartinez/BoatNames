<script setup>
</script>
<template>
<v-container>
    <v-card outlined class="pa-4">
      <v-row align="center" class="ma-2">
        <h2>Hint — Add an Outline or Shadow</h2>
      </v-row>
        <v-row>
            <v-col>
                 <v-img :src="require('@/assets/images/tips/tip4_1.png')" contain  max-width="100%" />
            </v-col>
        </v-row>
        <v-row>

            <v-col  class="text-justify mx-2">
                <a>
                  Keep your boat name single-colour for a clean look, or add an outline, a shadow, or both.
                  An outline adds a border around the letters. A shadow adds depth behind them. Selecting Both combines the two effects.
                  Choose colours that help your name stand out against the hull.
                  Your chosen height and number of colours affect the price. Select a height in the order section to see your price, then compare different combinations.
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
