<template>
	<div>
		<my-dialog :isShow='isPayDialogShow' @on-close='checkPayStatus' >
			<span class="">是否支付完成？</span>
			<button class="paySuccess-button pay-btn" @click='checkPayStatus'>支付成功</button>
			<button class="payFail-button pay-btn" @click='checkPayStatus'>支付失败</button>
		</my-dialog>
		<my-dialog :isShow='isPaySuccessShow' @on-close='toOderListPage'>
			<span class="">购买成功！</span>
		</my-dialog>
		<my-dialog :isShow='isPayFailShow' @on-close='toOderListPage'>
			<span class="">购买失败！</span>
		</my-dialog>

	</div>
</template>
<script type="text/javascript">
import myDialog from '../components/base/dialog.vue';

	export default {
		components: {
			myDialog,

		},
		props: {
			isPayDialogShow: {
				type: Boolean,
				default: false
			},
			orderId: {
				type: [String, Number],
			}

		},
		data () {
			return {
				isPaySuccessShow: false,
				isPayFailShow: false

			}
		},
		methods: {
			checkPayStatus () {
				this.$http.post('/api/checkOrder',{orderId:this.orderId}).then((res)=>{
					this.isPaySuccessShow = true;
					this.$emit('on-close-pay-dialog');
				}, (err)=>{
					this.isPayFailShow = true;
					this.$emit('on-close-pay-dialog');
				});	
			},
			toOderListPage () {
				this.$router.push({path:'/orderList'});
			}
			

		}
	}
</script>
<style scoped>
.pay-btn {
	margin-left: 0.1rem;
}

</style>