<template>
<v-container>
    <v-card outlined class="pa-4"> 
        <v-row align="center" class="mx-3">
            <h1>Fonts</h1>
            <v-spacer></v-spacer>
            <a class="mx-2">2</a>
        </v-row>
        <v-row >
            <v-col align="center">
                <a>
                    The Font Select allows you to change the style of your Boat Name. Just select the different fonts and watch 
                    the design are at the top of the page change
                    <br/>
                    You can select different categories of fonts with the drop down at the top.
                </a>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center">
             <v-img :src="require('@/assets/images/designtip/DesignTipImage_22.png')" max-width="362px" />
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center">
                <a>
                    Whe you have got the font you want, press the 'Close' button to exit the Font Window
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