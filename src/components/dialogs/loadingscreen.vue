<template>
    <v-dialog
        v-model="display"
        persistent
        fullscreen>
        <v-container fluid fill-height style="background-color: rgba(0, 0, 0, 0.5);">
            <v-row justify="center"> 
               <v-progress-circular       
                indeterminate
                size="80"
                color="primary"
                ></v-progress-circular>
            </v-row>
        </v-container>
    </v-dialog>
</template>
<script>
import {mapState} from 'vuex' 

export default {
    name:"loading-screen",
     computed:{
        ...mapState(['loading_screen']),

        display:{

            get:function(){
                return this.loading_screen;
            },
            set:function(){                
            }
        }
     },

    watch:{
        display:function(val){
            if(!val)
                this.$root.$emit('response_recv','jejeje')
        }
    }

}
</script>