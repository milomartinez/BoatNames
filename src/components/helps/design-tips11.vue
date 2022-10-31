<template>
<v-container>
    <v-card outlined class="pa-4"> 
        <v-row align="center" class="mx-3">
            <h1>Home Port</h1>
            <v-spacer></v-spacer>
            <a class="mx-2">10</a>
        </v-row>
        <br/>
        <v-row>
            <v-col align="center">
                <v-img :src="require('@/assets/images/designtip/DesignTipImage_12.png')" max-width="465px" />
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center" class="mx-3">
                <a>
                Set your Home Port Here.<br/>
                </a>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center">
                <v-img :src="require('@/assets/images/designtip/DesignTipImage_13.png')" max-width="152px" />
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center" class="mx-6">
                <a>
                Choose the Letter Style for your Home Port here.<br/>
                <br/>
                A Home port is usually only used the back of larger boat like cruisers
                and yachts. The best font for a Home prt is usually Homeport wich the design tool is already set to.<br/>
                <br/>
                Home ports usually looks best in all capitol letters.
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
