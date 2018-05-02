<template>
	<div class="wrap">
		<div class="wrap-block">
			<h1>流量分析</h1>
			<p>是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
			<div class="wrap-block-item first-item">
				<span>购买数量：</span>
				<my-counter :range='product.range' @on-change='paramChange("buyNum",$event)'></my-counter>
			</div>
			<div class="wrap-block-item">
				<span>产品类型：</span>
				<my-selection :selection='product.buyTypes' @on-change='paramChange("buyType",$event)'></my-selection>
			</div>
			<div class="wrap-block-item">
				<span>有效时间：</span>
				<my-chooser :selection='product.periodList' @on-change='paramChange("period",$event)'></my-chooser>
			</div>
			<div class="wrap-block-item">
				<span>产品版本：</span>
				<my-mul-chooser :selection='product.versionList' 
						@on-change='paramChange("versions",$event)'>
						</my-mul-chooser>
			</div>
			<div class="wrap-block-item">
				<span>总价：</span>
				<div class="price">{{price+'元'}}</div>
			</div>
			<div class="wrap-block-btn">
				<button @click='popDialog("isDialogShow")'>立即购买</button>
			</div>

		</div>
		<div class="wrap-block wrap-block-bottom">
			<h1>产品说明</h1>
			<p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>
			<h2>用户行为指标</h2>
			<p>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：<br>
用户在网站的停留时间；<br>
用户来源网站（也叫“引导网站”）；<br>
用户所使用的搜索引擎及其关键词；<br>
在不同时段的用户访问量情况等。</p>
			<h2>浏览网站方式</h2>
			<p>用户上网设备类型<br>
用户浏览器的名称和版本<br>
访问者电脑分辨率显示模式<br>
用户所使用的操作系统名称和版本<br>
用户所在地理区域分布状况等</p>
		</div>

		<my-dialog :isShow='isDialogShow' @on-close='closeDialog("isDialogShow")'>
			<table class="product-board-table product-dialog-table">
				<thead>
					<tr>
						<td>购买数量</td>
						<td>产品类型</td>
						<td>有效时间</td>
						<td>产品版本</td>
						<td>总价</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{{this.buyNum}}</td>
						<td>{{this.buyType.label}}</td>
						<td>{{this.period.label}}</td>
						<td>{{this.versionStr}}</td>
						<td>{{this.price}}</td>
					</tr>
				</tbody>
			</table>
			<h4 class="dialog-title">请选择银行</h4>
			<bank-chooser @on-change='selectedBank'></bank-chooser>
			<button class="confirmBuy-button " @click='confirm'>确认购买</button>

		</my-dialog>
		<my-dialog :isShow='isErrorDialogShow' @on-close='closeDialog("isErrorDialogShow")'>
			支付失败！
		</my-dialog>
		<check-order :isPayDialogShow='isPayDialogShow' @on-close-pay-dialog='closeDialog("isPayDialogShow")'></check-order>
	</div>
</template>
<script type="text/javascript">
import myCounter from '../../components/base/counter.vue'
import myChooser from '../../components/base/chooser.vue'
import myMulChooser from '../../components/base/multiplyChooser.vue'
import mySelection from '../../components/base/selection.vue'
import myDialog from '../../components/base/dialog.vue';
import bankChooser from '../../components/bankChooser.vue';
import checkOrder from '../../components/checkOrder.vue';


	export default {
		mounted () {
			this.buyNum = this.product.range.minNum,
			this.buyType = this.product.buyTypes[0],
			this.versions = [this.product.versionList[0]],
			this.period = this.product.periodList[0],
			this.getPrice();
		},
		components: {
			myCounter,
			myChooser,
			myMulChooser,
			mySelection,
			myDialog,
			bankChooser,
			checkOrder

		},
		computed: {
			versionStr () {
				return this.versions.map(function(item) {
					return item.label;
				}).join(' ');
			}
		},
		data () {
			return {
				isDialogShow: false,
				isPayDialogShow: false,
				isErrorDialogShow: false,

				bank: {},
				orderId: '',

				buyNum: 0,
				buyType: {},
				versions: [],
				period: {},
				price: 0,

				product: {
					range: {
						minNum: 1,
						maxNum: 5
					},
					periodList: [
					  {
					    label: '半年',
					    value: 0
					  },
					  {
					    label: '一年',
					    value: 1
					  },
					  {
					    label: '三年',
					    value: 2
					  }
					],
					versionList: [
					  {
					    label: '客户版',
					    value: 0
					  },
					  {
					    label: '代理商版',
					    value: 1
					  },
					  {
					    label: '专家版',
					    value: 2
					  }
					],
					buyTypes: [
					  {
					    label: '入门版',
					    value: 0
					  },
					  {
					    label: '中级版',
					    value: 1
					  },
					  {
					    label: '高级版',
					    value: 2
					  }
					],
				},


				

			}
		},
		methods: {
			paramChange (attr,val) {
				this[attr] = val;
				this.getPrice();
			},
			getPrice () {
				let paramObject = {
					proNum: this.buyNum,
					proType: this.buyType.value,
					proVersions: this.versions,
					proPeriod: this.period.value,
				};
				console.log(paramObject);
				this.$http.post('/api/getPrice',paramObject).then((res)=>{
					this.price = res.data.data.amount;
				}, (err)=>{
					console.log("获取价格失败："+err);
				})

			},
			popDialog (attr) {
				this[attr] = true;
			},
			closeDialog (attr) {
				console.log(attr);
				console.log(this[attr]);
				this[attr] = false;
			},
			selectedBank (v) {
				this.bank = v;
			},
			confirm () {

				let versionValArr = this.versions.map(function(item){
					return item.value;
				});
				//console.log(this.versions);
				let paramObject = {
					proNum: this.buyNum,
					proType: this.buyType.value,
					proVersions: versionValArr,
					proPeriod: this.period.value,
					bankId: this.bank.id,
				};
				console.log(this.versions);
				this.$http.post('/api/createOrder',paramObject).then((res)=>{

					this.isDialogShow = false;
					this.isPayDialogShow = true;
					this.orderId = res.data.data.orderId;
					
				}, (err)=>{
					this.isDialogShow = false;
					this.isErrorDialogShow = true;
				});
				
				
			}
		}
	}
</script>
<style scoped>
.confirmBuy-button {
  	margin-top: 0.2rem;
}
</style>