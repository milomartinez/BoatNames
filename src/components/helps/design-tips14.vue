<template>
<v-container>
    <v-card outlined class="pa-4"> 
        <v-row align="center" class="mx-3">
            <h1>Size & Price - Boat Name</h1>
            <v-spacer></v-spacer>
            <a class="mx-2">13</a>
        </v-row>
        <br/>
        <v-row>
            <v-col align="left" class="mx-3">
                <a>
                Order your Boat Name by selecting one, or both, of these options.<br/>
                </a>
            </v-col>
        </v-row>
         <v-row>
            <v-col cols="6" align="center" justify="center">
                 <v-img :src="require('@/assets/images/designtip/DesignTipImage_16.png')" max-width="423px" />
            </v-col>
            <v-col cols="6" align="center" justify="center" >
                <a style="font-size:12px;">
                Ordering Side Names will mean you recieve two names, one for each side of your boat.<br/>
                <br/>
                Ordering a Transom Name will mean you receive one name for the stern of your boat.
                </a>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="left" class="mx-3">
                <a>
                The height select allows you to set the height of the capital letters in your name. <br/>
                </a>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center">
                 <v-img :src="require('@/assets/images/designtip/DesignTipImage_17.png')" max-width="244px" />
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center" class="mx-3">
                <a>
                The Max Length option allows you to set maximum lenght for the name to occupy. Use this value if you have
                restricted space for the name to occupy. Please include the units the measurement is in (mm or cm)
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
