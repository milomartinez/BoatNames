<template>
    <v-container>
        <v-col cols="12">
            <v-row class="mx-5">
                <v-text-field 
                    v-model="up_txt"
                    placeholder="lettering for top of lifering"
                    >
                </v-text-field>
            </v-row>
            <v-row class="mx-5">            
                <v-text-field 
                    v-model="bottom_txt"
                    placeholder="lettering for bottom of lifering"
                    >
                </v-text-field>
            </v-row>
            <v-row>
                <v-combobox
                    v-model="select"
                    :items="combo_data"
                    label="Lifering Lettering"
                    :disabled="up_txt == null && bottom_txt == null"
                    @change="getSelected()"
                    ></v-combobox>
            </v-row>
            <v-row align="center" justify="center">
                <v-img
                    :src="image"
                    :lazy-src="image"
                    aspect-ratio="1"
                    
                    max-width="270"
                    max-height="260"
                />
            </v-row>    
         </v-col>
    </v-container>
</template>
<script>
import {mapState, } from 'vuex'

export default {
    name:"Lifering-comp",
    data() {
        return{
            bottom_txt:null,
            up_txt:null,
            select:null,
            data:null,
            combo_data:null,
            image: require('@/assets/images/boat-Life-ring-lettering.png')
        }
    },
    computed:{
        ...mapState(['lifering','lifering_uptxt','lifering_bottomtxt']),     
    },

    watch:{
        up_txt(newval){
            this.$store.state.lifering_uptxt = newval
            
        },
        bottom_txt(newval){
            this.$store.state.lifering_bottomtxt = newval

        }
    },
   
    methods:{
        getSelected(){              
            var winnner = null
            for(var each in this.data){

                if(this.data[each].attribute_amount == this.select){
                    winnner = this.data[each]
                    break
                }
            }
            this.$store.state.lifering = {}
            this.$store.state.lifering = winnner
            if(winnner == null){
                this.$nextTick(() =>  {
                    this.select = null
                })
            }  
        }
    },

    created()  {
        this.data = this.$store.state.design_products.liferingname.variations;
        this.combo_data=[];
         this.combo_data.push(0)
        for(var each in this.data){
            this.combo_data.push( this.data[each].attribute_amount);
        }
    }
}
</script>