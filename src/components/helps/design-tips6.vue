<template>
<v-container>
    <v-card outlined class="pa-4"> 
        <v-row align="center" class="mx-3">
            <h1>Effect Colours</h1>
            <v-spacer></v-spacer>
            <a class="mx-2">6</a>
        </v-row>
        <br />
        <v-row>
            <v-col cols="1"/>
            <v-col align="center" class="mx-10">
                <a>
                    Here you can set the colours for the Outline and the Shadow of your Boat Name.
                </a>
            </v-col>
            <v-col cols="1"/>
        </v-row>
          <v-row>
            <v-col align="center">
                 <v-img :src="require('@/assets/images/designtip/DesignTipImage_5.png')" max-width="626px" />
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center">
                 <v-img :src="require('@/assets/images/designtip/DesignTipImage_21.png')" max-width="315px" />
            </v-col>
        </v-row>
         <v-row>
            <v-col cols="1"/>
            <v-col align="center" class="mx-10">
                <a>
                    Here is an example of a 3 Colour name.
                </a>
            </v-col>
            <v-col cols="1"/>
        </v-row>
    </v-card>
</v-container>      
</template>
<style scoped>
a {

   font-size: 16px;
}
</style>
