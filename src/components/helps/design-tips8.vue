<script setup>
</script>
<template>
<v-container>
    <v-card outlined class="pa-4">

      <v-row align="center" class="ma-2">
        <h2>Hint — Choose Your Rego Letter Style</h2>
      </v-row>
      <br />
      <v-row>

        <v-col class="text-justify mx-2">
          <a>
            Choose Nice Block for a simple, easy-to-read registration number.
            Select Same Style as Name to use your boat-name font, or CHOOSE LETTER STYLE to select a different font.
            For a coordinated look, try a clear block font with the same colour combination as your boat name. The two designs don’t need identical fonts to look good together.
            Readability comes first: check your state’s rego requirements before choosing a decorative style.

          </a>
        </v-col>

      </v-row>
      <v-row>
        <v-col>
          <v-img :src="require('@/assets/images/tips/tip8_1.png')" contain  max-width="100%"/>
        </v-col>
      </v-row>



    </v-card>
</v-container>
</template>
<style scoped>
a {

   font-size: 16px;
}
</style>>
