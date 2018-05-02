<template>
	<div class="bank-wrap">
		<ul class="bank-wrap-list">
			<li class="bank-list-item" v-for='(item,index) in banks' 
			:class="['bank-list-item-'+item.name,{'selected':nowIndex==index}]"
			@click='selectBank(index)'></li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		mounted () {
			this.selectBank(0);
		},
		methods: {
			selectBank (index) {
				this.nowIndex = index;
				this.$emit('on-change',this.banks[this.nowIndex]);
			}

		},
		data () {
			return {
				nowIndex: 0,
				banks: [
				    {
				        id: 201,
				        label: '招商银行',
				        name: 'zhaoshang'
				    },
				    {
				        id: 301,
				        label: '中国建设银行',
				        name: 'jianshe'
				    },
				    {
				        id: 601,
				        label: '浦发银行',
				        name: 'pufa'
				    },
				    {
				        id: 1101,
				        label: '交通银行',
				        name: 'jiaotong'
				    },
				    {
				        id: 101,
				        label: '中国工商银行',
				        name: 'gongshang'
				    },
				    {
				        id: 401,
				        label: '中国农业银行',
				        name: 'nongye'
				    },
				    {
				        id: 1201,
				        label: '中国银行',
				        name: 'zhongguo'
				    },
				    {
				        id: 501,
				        label: '中信银行',
				        name: 'zhongxin'
				    }
				]

			}
		},
	}
</script>
<style scoped>
.bank-wrap-list {
	width: 100%;
}
.bank-list-item {
	display: inline-block;
  	border: 1px solid rgb(227,227,227);
	width: 117px;
	height: 32px;
	background: url(../assets/banks/banks.png) no-repeat;
	margin-right: 0.1rem;
	margin-bottom: 0.1rem;
}
.bank-list-item-zhaoshang {
	background-position: -2160px 0;
}
.bank-list-item-jianshe {
	background-position: -720px 0;
}
.bank-list-item-pufa {
	background-position: -1800px 0;
}
.bank-list-item-jiaotong {
	background-position: -3120px 0;
}
.bank-list-item-gongshang {
	background-position: -2640px 0;
}
.bank-list-item-nongye {
	background-position: -1680px 0;
}
.bank-list-item-zhongguo {
	background-position: -2520px 0;
}
.bank-list-item-zhongxin {
	background-position: -480px 0;
}
.selected {
	border: 1px solid #4fc08d;
}

</style>

<!-- 
<bank-chooser @on-change=''></bank-chooser>
                    
子组件向父组件触发事件：on-change：当所选银行发生变化时触发该事件，
						默认向父组件传递当前选项对象
						Object：{
				        			id: 501,
				          			label: '中信银行',
				        			name: 'zhongxin'
				    			}
-->