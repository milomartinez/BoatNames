<template>
  <v-container>
    <div>
      <v-card
      
      >
<h1> this is a test</h1>
        <v-select
      class="my-select"
      v-model="selected"
      :items="comboQty"
      label="Quantity"                       
        >     
      </v-select>  
      </v-card>
       
    </div>
            
 

  </v-container>
  
</template>

<script>
/* eslint-disable */ 


  export default {
    name: 'Home',
    
    data:()=>({
      selected:null,
      combo_qty:[
            {value:1,text:"1 Name Only"},
            {value:2,text:"2 Names"},
            {value:3,text:"3 Names"},
            {value:4,text:"4 Names"},
            {value:5,text:"5 Names"},
            {value:6,text:"6 Names"},
            {value:7,text:"7 Names"},
            {value:8,text:"8 Names"},
            {value:9,text:"9 Names"},
            {value:10, text:"10 Names"},
        ],
    }),
    components: {
    
    },

    computed:{
      comboQty(){
            return this.combo_qty;
        },
    },
    mounted(){
      console.log("v2");
      this.selected = this.combo_qty[0];
    }
  }
</script>
<style scoped>

.my-select {
    background-color: orange;
    color: purple;
    overflow: visible;
  margin-left: 10px;
  margin-right: 10px;
  width: 280px;
}
</style>