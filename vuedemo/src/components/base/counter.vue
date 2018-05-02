<template>
	<div class="count-wrap">
		<div class="counter-btn" @click='del'>-</div>
		<div class="counter-show">
			<input type="text" name="number" @keyup='testNum' v-model='number'>
		</div>
		<div class="counter-btn" @click='add'>+</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		
		props: {
			range: {
				type: Object,
				default: {
					minNum: 1,
					maxNum: 5
				}
			}

		},
		data () {
			return {
				number: this.range.minNum,

			}
		},
		methods: {
			add () {
				this.number = (this.number+1)>this.range.maxNum ? this.range.maxNum : this.number+1;
			},
			del () {
				this.number = (this.number-1)<this.range.minNum ? this.range.minNum : this.number-1;

			},
			testNum () {
				let pattern = /^\d+$/g;
				// console.log(this.number);
				// console.log(pattern.test(this.number));
				if(!pattern.test(this.number)||this.number>this.range.maxNum||this.number<this.range.minNum){
					this.number = this.range.minNum;
				}
			}
		},
		watch: {
			number () {
				this.$emit('on-change',this.number);

			}
		}
	}
</script>
<style scoped>
.count-wrap {
	display: inline-block;
	font-size: 0;
	letter-spacing: -4px;
	line-height: 0.25rem;
	height: 0.24rem;
}
.count-wrap div {
	line-height: 0.25rem;
	font-size: 0.14rem;
	letter-spacing: normal;
	display: inline-block;
	background: #fff;
}
.counter-show {
	padding-left: 0.1rem;
	border-bottom: 1px solid rgb(227,227,227);
	border-top: 1px solid rgb(227,227,227);
}
.counter-show input {
	font-size: 0.16rem;
	border: none;
	outline: none;
	width: 0.3rem;
}
.counter-btn {
	width: 0.3rem;
	text-align: center;
	border: 1px solid rgb(227,227,227);
	cursor: pointer;
}
.counter-btn:hover {
	background: #4FC08D;
	color: #fff;
}

</style>


<!-- 
<my-counter :range='range' @on-change='dosomethingOnCountChange'></my-counter> 
父组件向子组件传值：range:数量范围
                        range: {
							type: Object,
							default: {
								minNum: 1,
								maxNum: 5
							}
						}
                    
                    
子组件向父组件触发事件：on-change：当数量发生变化时触发该事件，默认向父组件传递当前数值number
-->
