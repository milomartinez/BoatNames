<template>
    <v-btn text icon color="indigo" @click="onclick">
      <v-icon>mdi-help-circle-outline</v-icon>
    </v-btn>
</template>
<script>
export default {
    name:"HelpTipBt",
    props:["id"],
    methods:{

        onclick() {
             this.$store.state.dialogue = this.id;
        }
    }
}
</script>