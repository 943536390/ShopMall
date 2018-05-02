<template>
	<div class="dialog">
		<div class="dialog-cover" v-if='isShow' @click='closeDialog'></div>
		<transition name='drop'>
			<div class="dialog-content" v-if='isShow'>
				<span class="dialog-close" @click='closeDialog'>x</span>
				<slot>empty</slot>
			</div>
		</transition>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: {
			isShow: {
				type: Boolean,
				default: false
			},

		},
		data () {
			return {

			}
		},
		methods: {
			closeDialog () {
				this.$emit('on-close',);
			}

		}
	}
</script>
<style scoped>
.dialog {
	position: fixed;
	width: 100%;
	height: 100%;
}
.dialog-cover {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.5);
}
.dialog-content {
	position: fixed;
	left: 50%;
	top: 15vh;
	margin-left: -45%;
	width: 90%;
	background: #fff;
	line-height: 1.5;
	padding: 0.1rem;
	max-height: 80vh;
	overflow: auto;
}
.dialog-close {
	position: absolute;
	top: 0rem;
	right: 0.1rem;
	font-size: 0.2rem;
	cursor: pointer;
	line-height: normal;
}

/*dialog animation style */
.drop-enter-active,
.drop-leave-active {
  transition: all .5s;
}
.drop-enter,
.drop-leave-active {
  transform: translateY(-900px);
}


@media screen and (min-width: 1200px){
	.dialog-content {
		left: 50%;
		margin-left: -25%;
		width: 50%;
	}
}

</style>

<!-- 
<my-dialog  @on-close="closeDialog" :isShow='isLogShow'>
    <log-form @loginSuccess='loginSuccess'></log-form>
  </my-dialog>
父组件向子组件传值：isShow:控制弹框的显示， Boolean 
                                             
子组件向父组件触发事件：on-close：触发父控件改变isLogShow的状态从而关闭弹窗

可向组件中插入其他内容，eg：<log-form></log-form>
-->