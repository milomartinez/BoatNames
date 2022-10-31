<template>
    <v-row align="center">      
        <a>{{this.title}}</a>
        <v-item-group v-model="radio_selected" row @change="getRadioButton()">
            <v-item  key="both"  v-slot:default="{ active, toggle }">
                <v-col  @click="toggle()">   
                    <v-icon  v-if="!active"  >mdi-checkbox-blank-circle-outline</v-icon>
                    <v-icon  v-if="active"   >mdi-circle-slice-8</v-icon>           
                </v-col>                
            </v-item>
        </v-item-group>
    </v-row>
</template>
<script>
export default {
    name:"CustomeCheckbox",
    props:["title"],
    data(){
        return{
            active:null,radio_selected:null,
        }
    },
    methods:{
        getRadioButton()
        {
            var bradio = (typeof this.radio_selected == 'undefined')?false:true;
            this.$emit("checkboxPicked", bradio);
        }
    }

}
</script>