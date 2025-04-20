<template>
    <v-card
    class="pa-4"   
    outlined>
        <v-card
            style="overflow:hidden"
            outlined>

            <v-row align="center" justify="center" class="my-6 mb-10">
                <h2 >{{titles[msg_popups.data]}} added to the cart</h2>
            </v-row>
            <v-row align="center" justify="center" class="my-6 mt-10">
                <v-col cols="12" md="6">
                    <v-btn 
                        @click="return2Design()"
                        class="primary ma-2">
                        Return to Design
                    </v-btn> 
                </v-col>
                <v-col  cols="12" md="6">
                    <v-btn 
                        @click="go2Cart()"
                        class="primary ma-2">
                        Go to Cart
                    </v-btn> 
                </v-col>
            </v-row>
        </v-card>
    </v-card>
</template>

<script>
import {mapState} from 'vuex' 

export default {
    name:"add-to-cart-response",
    data:()=>({
        titles:{
            BoatName:"Boat Name",
            HomePort:"Home Port",
            RegoNumber:"Rego Numbers"
        }
    }),
    computed:{
        ...mapState(['msg_popups'   ,'addable']),        
    },
    methods:{
        go2Cart(){
            window.location.href = '/cart/'
        },
        return2Design(){
            this.msg_popups.type = null ;
            window.location.reload()
           // for(var e in this.addable)
           //         this.addable[e].popup = false;

       }
    }
}
</script>