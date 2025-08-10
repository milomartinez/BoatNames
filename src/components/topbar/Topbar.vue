<template>    
    <v-container >

        
        <MultilayerName class="my-n7" mscale="1" />
        <DisplayButtons class="my-n6"/>
    </v-container>
</template>

<script>
/* eslint-disable */
import MultilayerName   from "@/components/topbar/multilayername.vue";
import DisplayButtons   from "@/components/topbar/displaybuttons.vue";

export default {
    name:"Topbar",
    components: {
      DisplayButtons, MultilayerName
    },
    mounted () {
      //console.log(this.$vuetify.breakpoint)
    },

};
</script>
