<template>
	<div class="chooser-wrap">
		<ul class="chooser-option">
			<li class="chooser-option-item" 
			v-for='(item,index) in selection'
			:class="{'active': isContainIndex(index)}"
			@click='changeIndex(index)'>{{item.label}}</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: {
			selection: {
				type: Array,
				default: [
					{
						label: '半年',
						value: 0.5
					}
				]

			},

		},
		data () {
			return {
				nowIndex: [0],

			}
		},
		methods: {
			changeIndex (index) {
				if(this.nowIndex.indexOf(index)!==-1){
					this.nowIndex.splice(this.nowIndex.indexOf(index),1);
				}else{
					this.nowIndex.push(index);
				}
				let selectArr = this.nowIndex.map((value) => {
					return this.selection[value];
				})
				console.log(selectArr);
				this.$emit('on-change',selectArr);
			},
			isContainIndex (index) {
				return this.nowIndex.indexOf(index)!=-1;
			}
		},
		
	}
</script>
<style scoped>
.chooser-wrap {
	display: inline-block;
}
.chooser-option-item {
	font-size: 0.14rem;
	border: 1px solid rgb(227,227,227);
	border-radius: 3px;
	display: inline-block;
	padding: 0.05rem 0.1rem;
	background: #fff;
	cursor: pointer;
	margin-right: 0.1rem;
}
.active {
	background: #4FC08D;
	color: #fff;
	border: 1px solid transparent;

}

</style>


<!-- 
<my-mul-chooser :selection='' @on-change=''></my-mul-chooser>
父组件向子组件传值：selection:选项数组
                        selection: {
                        				type: Array,
                        				default: [
                        					{
                        						label: '半年',
                        						value: 0.5
                        					}
                        				]

                        			},
                    
                    
子组件向父组件触发事件：on-change：当数量发生变化时触发该事件，默认向父组件传递包含当前所有被选项的数组
-->
