<template>
<v-container>
    <v-card outlined class="pa-4"> 
        <v-row align="center" class="mx-3">
            <h1>Outline Type</h1>
            <v-spacer></v-spacer>
            <a class="mx-2">5</a>
        </v-row>
        <v-row>
            <v-col align="center">
                 <v-img :src="require('@/assets/images/designtip/DesignTipImage_8.png')" max-width="131px" />
            </v-col>
        </v-row>
         <v-row>
            <v-col cols="1"/>
            <v-col align="center" class="mx-10">
                <a>
                    If using an Outline, you can change the type of outline the best suit your Boat Name.
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
