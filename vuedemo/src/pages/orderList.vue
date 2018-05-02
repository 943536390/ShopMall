<template>
	<div class="orderList-wrap">
		<h3>您的产品</h3>
		<div class="orderList-chooser">
			<div class="chooser-block">
				<span>选择产品：</span>
				<my-select :selection='products' @on-change='selectChange'></my-select>
			</div>
			<div class="chooser-block">
				<span>开始日期：</span>
				 <date-picker :readonly="true"  width="180px" name="date" @on-change='dateChange("startDate",$event)'></date-picker>
			</div>
			<div class="chooser-block">
				<span>结束日期：</span>
				 <date-picker :readonly="true"  width="180px" name="date" @on-change='dateChange("endDate",$event)'></date-picker>
			</div>
			<div class="chooser-block ">
				<span>关键词：</span>
				<input type="text" name="words" v-model='keyWords' class="keyWords">
			</div>
		</div>
		<table class="orderList-table">
			<thead>
				<tr>
					<td v-for='item in listHeader' 
					@click='sortList(item)'
					:class="{activeTd:item.active}">{{item.label}}</td>
				</tr>
			</thead>
			<tbody >
				<tr v-for='item in orderList'>
					<td v-for='tditem in listHeader'>{{item[tditem.name]}}</td>
				</tr>
				<tr v-if='this.orderList.length==0'><td>获取数据失败！</td></tr>
			</tbody>
		</table>
	</div>
</template>
<script type="text/javascript">
import mySelect from "../components/base/selection.vue";
import DatePicker from '../components/base/datetimePicker.vue'

	export default {
		components: {
			mySelect,
			DatePicker

		},
		watch: {
			keyWords () {
				this.getOrderList();
			}
		},
		data () {
			return {
				//控制升序或降序，1表示升序，-1表示降序
				order: 1,
				active: false,

				keyWords: '',
				product: {},
				startDate: '',
				endDate: '',

				products: [
				        {
				          label: '数据统计',
				          value: 0
				        },
				        {
				          label: '数据预测',
				          value: 1
				        },
				        {
				          label: '流量分析',
				          value: 2
				        },
				        {
				          label: '广告发布',
				          value: 3
				        }
				      ], 

				orderList: [],
				listHeader: [
				  {
				    label: '订单号',
				    name: 'orderId'
				  },
				  {
				    label: '购买产品',
				    name: 'product'
				  },
				  {
				    label: '版本类型',
				    name: 'version'
				  },
				  {
				    label: '有效时间',
				    name: 'period'
				  },
				  {
				    label: '购买日期',
				    name: 'date'
				  },
				  {
				    label: '数量',
				    name: 'buyNum'
				  },
				  {
				    label: '总价',
				    name: 'amount'
				  },
				  
				]


			}
		},

		methods: {
			getOrderList () {
				let paramObject = {
					keyWords: this.keyWords,
					product: this.product.value,
					startDate: this.startDate,
					endDate: this.endDate,

				}

				this.$http.post('/api/getOrderList',paramObject).then((res)=>{
					this.orderList = res.data.data.list;
				}, (err)=>{
					console.log("获取数据失败："+err);
				})
			},
			selectChange (v) {
				this.product = v;
				this.getOrderList();
			},
			dateChange (attr,v) {
				this[attr] = v;
				this.getOrderList();
			},

			sortList (item) {
				this.listHeader = this.listHeader.map((item)=>{
					item.active = false;
					return item;
				});
				item.active = true;

					this.orderList.sort((x,y)=>{
						let a,b;
						switch(item.name){
							case 'amount':
								a = parseFloat(x[item.name]);
								b = parseFloat(y[item.name]);
								break;
							case 'date':
								let arrX = x[item.name].split('-');
								let arrY = y[item.name].split('-');
								a = new Date(arrX[0],arrX[1],arrX[2]);
								b = new Date(arrY[0],arrY[1],arrY[2]);
								break;
							default:
								a = x[item.name];
								b = y[item.name];
								break;
						}
						if(a>b){
							return 1 * this.order;
						}else if(a<b){
							return -1 * this.order;
						}else{
							return 0;
						}
						
					});

					this.order = -this.order;
				
				

			}
		},
		mounted () {
			
			this.getOrderList();
		}
	}
</script>
<style scoped>
.orderList-chooser {
	width: 100%;
}
.chooser-block {
	font-size: 0.15rem;
	display: inline-block;
	margin-right: 0.25rem;
	margin-bottom: 0.2rem;
	vertical-align: middle;
}
.chooser-block span {
	display: inline-block;
	width: 0.8rem;
	line-height: 0.31rem;
}
.keyWords {
	font-size: 0.15rem;
	border: 1px solid rgb(227,227,227);
	background: #fff;
	line-height: 0.31rem;
	height: 0.3rem;
	padding-left: 0.06rem;
	padding-right: 0.05rem;
	width: 1.5rem;	
}

/*product table style*/
.orderList-table {
	margin-top: 0.3rem;
  width: 100%;
  border: 1px solid rgb(227,227,227);
  border-collapse: collapse;
  font-size: 0.15rem;
  max-width: 100%;
  
}
.orderList-table thead {
   background: #4FC08D;
  color: #fff;
  text-align: center;
  cursor: pointer;
  
}
.orderList-table td {
  border: 1px solid rgb(227,227,227);
  padding: 0.1rem;
  text-align: center;
}
.activeTd {
	background: #35495e;
}

</style>