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
            <v-col align="center" class="mx-3">
                <a>
                Here you can set the colours for your Rego Number.<br/>
                </a>
            </v-col>
        </v-row>
       <v-row>
            <v-col cols="4"/>
            <v-col cols="4" align="left" class="mx-2">
                <a>
                <ul>
                    <li>Rego Numbers</li>
                    <li>Boat Colour</li>
                    <li>Shadow Colour</li>
                    <li>Outline Colour</li>
                </ul>
                </a>
            </v-col>
            <v-col cols="4"/>
        </v-row>
        <v-row>
            <v-col align="center">
                 <v-img :src="require('@/assets/images/designtip/DesignTipImage_5.png')" max-width="626px" />
            </v-col>
        </v-row>
    </v-card>
</v-container>
</template>

<script>
export default {
    name:"design-tip10"
}
</script>
<style scoped>
a {

   font-size: 16px;
}
</style>>
