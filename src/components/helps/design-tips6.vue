<script setup>
</script>
<template>
<v-container>
    <v-card outlined class="pa-4">
      <v-row align="center" class="ma-2">
        <h2>Hint — Choose Your Effect Colours</h2>
      </v-row>
        <br />
        <v-row>

            <v-col class="text-justify mx-2">
                <a>
                  Use Outline Colour and Shadow Colour to set the colours of the effects you’ve selected.
                  Together with your main Name Colour, these let you create a design with up to three colours.
                </a>
            </v-col>

        </v-row>
          <v-row>
            <v-col>
              <v-img :src="require('@/assets/images/tips/tip3_1.png')" contain  max-width="100%"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col >
                 <v-img :src="require('@/assets/images/designtip/DesignTipImage_21.png')" max-width="315px" />
            </v-col>
        </v-row>
         <v-row>

            <v-col class="text-justify mx-2">
                <a>
                  Watch the preview as you experiment. A contrasting outline can help define the lettering, while a shadow can add depth.
                  Keep it simple: use an extra colour when it improves the design—not just because it’s available.
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
