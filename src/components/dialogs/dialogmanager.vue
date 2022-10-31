<template>    
	<v-dialog
		v-model="dialog"
		max-width="650px"> 
		<Add2CartResponseOk />
	</v-dialog>
</template>
<script>
import {mapState} from 'vuex' 

import Add2CartResponseOk from '@/components/dialogs/add2cartresponseok'
export default {
	name:"dialog-manager",
	components:{Add2CartResponseOk},
	computed:{
		...mapState(['msg_popups','addable']),
		dialog:{
			get: function() {                
				var result = (this.msg_popups.type != null ) ;
				return    result  
			},
			set: function(value) {
				this.msg_popups.type = null 
				if(value)
					return;
				for(var e in this.addable)
					this.addable[e].popup = false;
			
			}            
		}       
	}
}
</script>