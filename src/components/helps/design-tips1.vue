<template>
<v-container>
    <v-card outlined class="pa-4"> 
        <v-row align="center" class="mx-3">
            <v-spacer></v-spacer>
           <a> 1 </a>
        </v-row>
        <v-row >
            <v-col align="center">
                <a>
                Enter your Boat name here. As you change the name the Display area above will change to show design.
                </a>
            </v-col>
            <v-col justify="center">
                <v-img :src="require('@/assets/images/designtip/DesignTipImage_0.png')" max-width="100%" />
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center">
                <v-img :src="require('@/assets/images/designtip/DesignTipImage_1.png')" max-width="155px" />
            </v-col>
            <v-col align="center">
                <a>
                You can use the var at the Top of the page to navigate around the Design tool. Just click on hte titles to go to that page
                </a>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center">
                <a>
                You can also use 'Next' and 'Back' buttons to move between the Design pages. 
                </a>
            </v-col>
            <v-col align="center">
     
                <v-row class="px-5"> 
                    <v-img :src="require('@/assets/images/designtip/DesignTipImage_2.png')" max-width="93px" />
                    <v-img :src="require('@/assets/images/designtip/DesignTipImage_3.png')" max-width="93px" />
                </v-row>

            </v-col>           
        </v-row>
            <v-col align="center">
                <v-img :src="require('@/assets/images/designtip/DesignTipImage_6.png')" max-width="512px" />
            </v-col >
            
        <v-row>
            <v-col align="center">
                <a>
                The buttons under the Dwsign Area let you change between your desigs, Boat name, Resgistration Numbers adn Home Port.
                <br><br>
                The Display size  slider let you change the size of the design - this does not affect the actual size of the completed design.
                </a>
            </v-col >
        </v-row>
    </v-card>
</v-container>    
</template>
<script>
export default {
        
}
</script>
<style scoped>

a {

   font-size: 16px;
}
</style>