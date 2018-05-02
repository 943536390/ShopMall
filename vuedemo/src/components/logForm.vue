<template>
	<div class="reg-form">
		<div class="username-wrap">
			<span>用户名：</span>
			<input type="text" name="userName" v-model='userName'>
			<span class="tip" :class="{'warn':nameWarn}">{{'*'+userNameTip}}</span>
		</div>
		<div class="psw-wrap">
			<span>密码：</span>
			<input type="password" name="psw" v-model='password'>
			<span class="tip" :class="{'warn':pswWarn}">{{"*"+pswTip}}</span>
		</div>
		<div class="regBtn-wrap">
			<input type="button" name="registry" value="登录" @click='login'>
		</div>
		<span class="tip warn" v-if='isWarnShow'>请检查用户名或密码格式是否输入正确</span>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				userName: '',
				password: '',
				nameWarn: false,
				pswWarn: false,
				isWarnShow: false
			}
		},
		computed: {
			userNameTip () {
				let pattern = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+\.){1,63}[a-z0-9]+$/g;
				if(!pattern.test(this.userName)){
					this.nameWarn = true;
					return "输入的用户名必须包含@";
				}else{
					this.nameWarn = false;
					return "格式正确";
				}
			},
			pswTip () {
				let pattern = /^.{6,}$/g;
				if(!pattern.test(this.password)){
					this.pswWarn = true;
					return "请输入至少6位密码";
				}else{
					this.pswWarn = false;
					return "格式正确";
				}
			}
		},
		methods: {
			login () {
				if(!this.nameWarn&&!this.pswWarn){
					this.isWarnShow = false;
					this.$http.post('api/login').then(function(res){
						let userInfo = res.data.data;
						this.$emit('loginSuccess',userInfo);

					}, function(err){
						console.log("登陆失败:"+err);

					})
				}else{
					this.isWarnShow = true;
				}
				
			}
		}

	}
</script>
<style scoped>
.reg-form {
	margin-top: 0.2rem;
}
div[class $= wrap] {
	margin-bottom: 0.2rem;
	line-height: 0.4rem;
}

input {
	height: 0.3rem;
}

span:not(.tip) {
	display: inline-block;
	width: 0.7rem;
	text-align: right;
}
.tip {
	display: block;
	margin: 0;
	line-height: normal;
	text-align: left;
	margin-left: 0.7rem;
	font-size: 0.12rem;
	color: #4fc08d;
}
.warn {
	color: #f00;
}
.regBtn-wrap input {
	font-size: 0.14rem;
	padding-right: 0.2rem;
	padding-left: 0.2rem;
	margin-left: 0.7rem;
	background: #4fc08d;
	color: #fff;
	outline: none;
	border: none;
	height: 0.4rem;
}

@media screen and (min-width: 768px){
	.reg-form {
		padding-left: 0.3rem;
	}
	.tip {
		display: inline-block;
		margin-left: 0.2rem;
	}
	input {
		margin-left: 0.3rem;
	}
}

</style>