<template>
    <div class="text-center">
        <v-dialog
          v-model="dialog"
          width="750"
          @click:outside="clikcOutside"
          >
       
        <v-card>
            <v-card-title
            class="headline grey lighten-2"
            primary-title>
            <v-col  cols="2" md="4" align="right" @click="goPrev()">
                 <v-icon  x-large color="primary">mdi-menu-left</v-icon>
            </v-col>
            <v-col cols="8"  md="4" justify="center" align="center">
                <v-row justify="center" >
                  <a> Desgin Tips </a>
                </v-row>
                <v-row justify="center" class="py-2">
                    <v-btn
                        color="primary"
                        @click="closeDialogue" >
                        close
                    </v-btn>
                </v-row>
            </v-col>
            <v-col  cols="2"  md="4" align="left" @click="goNext()">
              <v-icon x-large color="primary">mdi-menu-right</v-icon>
            </v-col>
            </v-card-title>

            <v-card-text class="my-2">
              <DesignTips1 v-if="dialog_id == 1"/>
              <DesignTips2 v-if="dialog_id == 2"/>
              <DesignTips3 v-if="dialog_id == 3"/>
              <DesignTips4 v-if="dialog_id == 4"/>
              <DesignTips5 v-if="dialog_id == 5"/>
              <DesignTips6 v-if="dialog_id == 6"/>
              <DesignTips7 v-if="dialog_id == 7"/>
              <DesignTips8 v-if="dialog_id == 8"/>
             <!-- <DesignTips9 v-if="dialog_id == 9"/> -->
              <DesignTips10 v-if="dialog_id == 9"/>
              <DesignTips11 v-if="dialog_id == 10"/>
              <DesignTips12 v-if="dialog_id == 11"/>
              <DesignTips13 v-if="dialog_id == 12"/>
              <DesignTips14 v-if="dialog_id == 13"/>
              <DesignTips15 v-if="dialog_id == 14"/>
              <DesignTips16 v-if="dialog_id == 15"/>
            </v-card-text>
      </v-card>
    </v-dialog>
  </div>
    
</template>
<script>

import DesignTips1 from "@/components/helps/design-tips1.vue";
import DesignTips2 from "@/components/helps/design-tips2.vue";
import DesignTips3 from "@/components/helps/design-tips3.vue";
import DesignTips4 from "@/components/helps/design-tips4.vue";
import DesignTips5 from "@/components/helps/design-tips5.vue";
import DesignTips6 from "@/components/helps/design-tips6.vue";
import DesignTips7 from "@/components/helps/design-tips7.vue";
import DesignTips8 from "@/components/helps/design-tips8.vue";
//import DesignTips9 from "@/components/helps/designtips9.vue";
import DesignTips10 from "@/components/helps/design-tips10.vue";
import DesignTips11 from "@/components/helps/design-tips11.vue";
import DesignTips12 from "@/components/helps/design-tips12.vue";
import DesignTips13 from "@/components/helps/design-tips13.vue";
import DesignTips14 from "@/components/helps/design-tips14.vue";
import DesignTips15 from "@/components/helps/design-tips15.vue";
import DesignTips16 from "@/components/helps/design-tips16.vue";
import {mapState} from 'vuex' 
  export default {
    name:"help-controller",
    components: { DesignTips1, DesignTips2,DesignTips3,DesignTips4 ,DesignTips5,DesignTips6,
                  DesignTips7, DesignTips8,  DesignTips10, DesignTips11, DesignTips12,
                  DesignTips13, DesignTips14, DesignTips15, DesignTips16,   },
    data :()=>({
             
        max_tips:15,
        min_tips:1,
        dialog: false,
        dialog_id:null,
    }),

	watch:{
       dialogue (val){
			this.dialog = ( val != null);
			this.dialog_id = val;
		}
	},
    computed: {
		...mapState(['dialogue']),
    },
    methods:{
        closeDialogue(){
            this.dialog = false;
            this.$store.state.dialogue = null;
            this.dialog_id = null;
        },
        clikcOutside(){
           this.$store.state.dialogue = null;
           this.dialog_id = null;
        },

        goNext(){
          this.$store.state.dialogue++;
          if(this.$store.state.dialogue > this.max_tips)
            this.$store.state.dialogue=this.min_tips
        },

        goPrev(){
          this.$store.state.dialogue--;
          if(this.$store.state.dialogue < this.min_tips)
            this.$store.state.dialogue=this.max_tips
        }
        
        
    }
  }
</script>