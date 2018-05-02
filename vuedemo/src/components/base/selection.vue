<template>
	<div class="selection-wrap">
		<div class="selection-show" @click='isShow=!isShow'>{{selection[selectIndex].label}}</div>
		<div class="selection-option" v-if='isShow'>
			<ul>
				<li v-for='(item,index) in selection' 
				@click='selected(index)'
				>{{item.label}}</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		
		props: {
			selection: {
				type: Array,
				default: [
					{
					    label: '入门版',
					    value: 0
					},
				]

			},

		},
		data () {
			return {
				selectIndex: 0,
				isShow: false,
			}
		},
		methods: {
			selected (index) {
				this.selectIndex = index;
				this.$emit('on-change',this.selection[this.selectIndex]);
				this.isShow = false;
			}
		},
		
	}
</script>
<style scoped>
.selection-wrap {
	display: inline-block;
	position: relative;
	font-size: 0.15rem;
}
.selection-show {
	
	display: inline-block;
	border: 1px solid rgb(227,227,227);
	background: #fff;
	line-height: 0.31rem;
	height: 0.3rem;
	padding-left: 0.06rem;
	padding-right: 0.05rem;
	cursor: pointer;
}
.selection-show::after,
.selection-option li::after {
	content: '';
	display: inline-block;
	border-top: 10px solid rgb(227,227,227);
	border-right: 5px solid transparent;
	border-left: 5px solid transparent;
	margin-left: 0.1rem;
}
.selection-option {
	position: absolute;
	border: 1px solid rgb(227,227,227);
	background: #fff;
	top: calc(0.3rem - 1px);
	padding-top: 0.05rem;
}
.selection-option li {
	margin-bottom: 0.05rem;
	padding-left: 0.06rem;
	padding-right: 0.05rem;
	cursor: pointer;
}
.selection-option li::after {
	visibility: hidden;
}
.selection-option li:hover {
	background: #4FC08D;
	color: #fff;
}

</style>


<!-- 
<my-selection :selection='' @on-change=''></my-selection>
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
                    
                    
子组件向父组件触发事件：on-change：当选项发生变化时触发该事件，默认向父组件传递被选对象
-->
