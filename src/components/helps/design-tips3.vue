<template>
<v-container>
    <v-card outlined class="pa-4"> 
        <v-row align="center" class="mx-3">
            <h1>Colours</h1>
            <v-spacer></v-spacer>
            <a class="mx-2">3</a>
        </v-row>
        <v-row>
            <v-col align="center">
                <a>
                    The colour is in the Design Tool allow you to set the different colours of items you are designing.
                </a>
            </v-col>
        </v-row>
         <v-row>
            <v-col align="center">
                 <v-img :src="require('@/assets/images/designtip/DesignTipImage_5.png')" max-width="626px" />
            </v-col>
        </v-row>
         <v-row>
            <v-col align="center">
                <a>
                   On this page you can change the colour of your Boat Name and also the colour of you 'Boat' (Background).
                   This allows you to see what your design will look when in place on your boat.
                   <br /> <br /> <br />
                   You boat name comes pre-spaced all lined on with a front application papper to hold everything in place while 
                   you apply it. So the background colour is not anothe layer of vinyl it is your actual boat colour.
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