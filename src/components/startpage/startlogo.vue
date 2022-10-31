<template>
  <v-container fluid class="background   center  " pa-4> 
    <v-row align="center" justify="center">
    <v-img
      :src="myImage"
      :lazy-src="myImage"
      aspect-ratio="1"
     
     max-width="227"
      max-height="71"
    ></v-img>
  </v-row>
        </v-container>
</template>
<script>
export default {
    name:"StartLogo",
     data () {
        return {
            myImage: require('@/assets/images/Global-secure-ssl-site.gif')
        }
    }
}
</script>
