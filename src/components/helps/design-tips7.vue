<template>
<v-container>
    <v-card outlined class="pa-4"> 
        <v-row align="center" class="mx-3">
            <h1 >Registration Numbers</h1>
            <v-spacer></v-spacer>
            <a class="mx-2">7</a>
        </v-row>
        <v-row>
            <v-col cols="1"/>
            <v-col align="center" class="mx-10">
                <a>
                   Enter your Registration Numbers here. As you change the numbers, the Display area above will change to show you your design. 
                </a>
            </v-col>
            <v-col cols="1"/>
        </v-row>
        <v-row>
            <v-col align="center">
                 <v-img :src="require('@/assets/images/designtip/DesignTipImage_10.png')" max-width="471px" />
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center">
                 <v-img :src="require('@/assets/images/offer1.png')" max-width="142px" />
            </v-col>
        </v-row>
        <v-row>
        <v-col cols="1"/>
            <v-col align="center" class="mx-10">
                <a>
                   You receive FREE (1 colour) rego number when you spend $65 or more on other items
                </a>
            </v-col>
            <v-col cols="1"/>
        </v-row> 
          <v-row>
            <v-col align="center">
                 <v-img :src="require('@/assets/images/regoplain.png')" max-width="200px" />
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
