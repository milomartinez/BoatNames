<template>
    <v-container>       
        <v-col cols="12" align="center">
               <v-row class="mx-4 my-9">
                    <v-text-field 
                        v-model="tender_model"
                        placeholder="tender to lettering"
                        >
                    </v-text-field>
            </v-row>
            <v-row>
                <v-combobox
                    v-model="select"
                    :items="combo_data"
                    label="Tender to"
                    :disabled="tender_model == null"
                    @change="getSelected()"
                />
            </v-row>
            <v-row align="center" justify="center">
                <v-img
                    
                    :src="image"
                    :lazy-src="image"
                    aspect-ratio="1"                    
                    max-width="187"
                    max-height="71"
                />
            </v-row>  
            <v-row>
                <a>After this design tool you wil be able to select Striping & Graphics </a>
            </v-row>  
         </v-col>
    </v-container>
</template>
<script>
import {mapState, } from 'vuex'

export default {
    name:"Tender-comp",
      data()
    {
        return{
            tender_model:null,
            select:null,
            data:null,
            combo_data:null,
            image: require('@/assets/images/Australian-Tender-To-inflatable-dinghy-lettering.png')
        }
    },
    watch:{

        tender_model(newval){
            this.$store.state.tender_txt = newval
        }
    },
    computed:{
        ...mapState(['cart','tender_txt'])
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
            this.$store.state.tender = {}
            this.$store.state.tender = winnner
            if(winnner == null){
                this.$nextTick(() =>  {
                    this.select = null
                })
            }
        },

      
    },
    created() {

        this.data = this.$store.state.design_products.tenderto.variations;
        this.combo_data=[];
         this.combo_data.push(0)
        for(var each in this.data){
            this.combo_data.push( this.data[each].attribute_amount);
        }
        //console.log(    this.combo_data);
    }
}
</script>