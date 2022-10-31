<template>
   <v-container >
       <v-row>
        <v-col cols="9" >
            <v-row>        
                <v-col cols="4">  
                   <CustomCheckbox :title="row_name"  :active="radio_selected" v-on:checkboxPicked="getRadioButton"  />
                </v-col>
                <v-col cols="2"  v-if="this.combo_size == 3">                            
                    <v-row class="py-3" >
                        <a>{{this.amount}}</a>
                    </v-row>   
                </v-col>
                <v-col :cols="combo_size">
                    <v-select
                        v-model="select_name"
                        :items="items"
                        outlined
                        dense
                        height="10"
                        :label="combo_label"
                        @change="getSelected()"
                        >
                    </v-select>
                </v-col>
                <v-col cols="3">
                    <v-row class="py-3" align="center" justify="center">
                        <a>  {{ getPriceWithCurrency()}}</a>
                    </v-row>
                </v-col>
      
            </v-row>
        </v-col>
  
        <v-col cols="3" >
            <v-row class="py-3">
                <v-text-field 
                v-model="input_maxlength"
                @input="onMaxLengthChange(input_maxlength)"        
                outlined  >        
                </v-text-field> 
            </v-row>
        </v-col>
      </v-row>
   </v-container>
</template>
<script>

import CustomCheckbox  from "@/components/gui/customcheckbox.vue";

export default {
    name:"PriceRow",
    components:{CustomCheckbox},
    props:["row_name","amount","items","combo_label","combo_default",
            "combo_size","price","tag"],
    data () {
        return {
            radio_selected:null,
            names_combo:null,
            sidenames:null,
            select_name:null,
            input_maxlength:null
        }
    },

    created() {
        this.select_name = this.combo_default;
    },


    methods: {
        getRadioButton(bradio) {
        
            var obj = null;
            if(bradio) {
                obj = {};
                obj.selected = this.select_name;
                obj.tag = this.tag;
            }
            this.$emit("picked", obj);
        },
        getSelected()
        {
            this.radio_selected = true;
            this.getRadioButton(this.radio_selected);
        },
        onMaxLengthChange() {

        },

        getPriceWithCurrency() {
            if(this.price == null)
                return null;
            return this.price.toLocaleString('us-US', { style: 'currency', currency: 'AUD' });
        }  
    }
}
</script>
    