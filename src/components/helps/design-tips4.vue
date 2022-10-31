<template>
<v-container>
    <v-card outlined class="pa-4"> 
        <v-row align="center" class="mx-3">
            <h1>Boat Name Effects</h1>
            <v-spacer></v-spacer>
            <a class="mx-2">4</a>
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
                    The Effects page lets you set Shadow and Outline for your Name. Selecting 'Both' sets a Shadow adn Ouline.
                </a>
            </v-col>
            <v-col cols="1"/>
        </v-row>
        <v-row>
            <v-col align="center">
                 <v-img :src="require('@/assets/images/designtip/DesignTipImage_7.png')" max-width="279px" />
            </v-col>
        </v-row>
        <v-row>
            <v-col align class="ma-2">
                <a style="text-align: justify:text-justify: inter-word;">
                   The cost of your design is determinated by the height of the capitol letters and the number of colours
                   you choose. You can see the current totla price in the window at the bottom of the page. This will be only start showing
                   the price of a name once a height has been chosen on the Size & Price page. To reduce the price either remove a colour from your
                   design or reduce the height slightly.
                   <br/>
                   <br/>
                    The cost of the names higher than 275mm jumps up considerabily becuase we have to use twice as much vinyl as the can not be laid
                    up to each other on hte roll width
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
