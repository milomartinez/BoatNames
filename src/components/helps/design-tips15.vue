<template>
<v-container>
    <v-card outlined class="pa-4"> 
        <v-row align="center" class="mx-3">
            <h1>Size & Price - Rego Numbers</h1>
            <v-spacer></v-spacer>
            <a class="mx-2">14</a>
        </v-row>
        <br/>
        <v-row>
            <v-col align="center" class="mx-3">
                <a>
                Order your Rego Numbes by selecting one of these options.
                </a>
            </v-col>
        </v-row>         
         <v-row>
            <v-col  align="center" justify="center">
                 <v-img :src="require('@/assets/images/designtip/DesignTipImage_18.png')" max-width="430px" />
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center" class="mx-3">
                <a>
                Select the state allows you to set the height of the rego numbers for your State of registration.
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
                The Max Lenght option allows you to set a maximum lenght for the REGO numbers to occupy.
                Use this value if you have restricted space for the REGO to occupy. Please include the units
                the measurement is in (mm or cm)
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
