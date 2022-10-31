<template>
<v-container>
    <v-card outlined class="pa-4"> 
        <v-row align="center" class="mx-3">
            <h1 >Registration Number</h1>
            <v-spacer></v-spacer>
            <a class="mx-2">9</a>
        </v-row>
        <br/>
        <v-row>
            <v-col align="left">
                 <v-img :src="require('@/assets/images/offer2.png')" max-width="146px" />
            </v-col>
        </v-row>
           <v-row>
            <v-col align="center">
                 <v-img :src="require('@/assets/images/regoweb.png')" max-width="350px" />
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center" class="mx-3">
                <a>
                You receive a $15 discount if you allow us to add our web address in samll letters to your rego number.
                 Only available for regos 15mm high adn in block letter style. Supported letter styles are marked with an '*' 
                 in the Font Window
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
</style>>
