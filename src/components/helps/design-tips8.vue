<template>
<v-container>
    <v-card outlined class="pa-4"> 
        <v-row align="center" class="mx-3">
            <h1 >Registration Number</h1>
            <v-spacer></v-spacer>
            <a class="mx-2">8</a>
        </v-row>
        <br />
        <v-row>
            <v-col align="center" class="mx-3">
                <a>
                Choose the font to use with your Rego Numbers. 'Nice Block' is a standard font to use.
                <br/><br/>
                'Same Stle as Name' will set the font to the one used for your Boat Name.
                <br /><br/>
                Or choose Letter style to set an individual font style for your Rego numbers.
                </a>
            </v-col>   
        </v-row>
        <v-row>
            <v-col align="center">
                 <v-img :src="require('@/assets/images/designtip/DesignTipImage_11.png')" max-width="673px" />
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center" class="mx-3">
                <a>
                For a customised look on small power boats it is usually best to choose "Nice Block" and us the same 
                colour combinations that you have choosen for your boat name.
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
