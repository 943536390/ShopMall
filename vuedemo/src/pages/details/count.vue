<template>
	<div class="wrap">
		<div class="wrap-block">
			<h1>数据统计</h1>
			<p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
			<div class="wrap-block-item first-item">
				<span>产品类型：</span>
				<my-chooser :selection='product.buyTypes' @on-change='paramChange("buyType",$event)'></my-chooser>
			</div>
			<div class="wrap-block-item">
				<span>适用地区：</span>
				<my-selection :selection='product.regions' @on-change='paramChange("region",$event)'></my-selection>
			</div>
			<div class="wrap-block-item">
				<span>有效时间：</span>
				<div>{{product.period.label}}</div>
			</div>
			<div class="wrap-block-item">
				<span>总价：</span>
				<div>{{price+'元'}}</div>
			</div>
			<div class="wrap-block-btn">
				<button>立即购买</button>
			</div>

		</div>
		<div class="wrap-block wrap-block-bottom">
			<h1>产品说明</h1>
			<p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
			<table class="product-board-table">
				<tbody>
				    <tr class="ui-table-row">
				        <td class="col-first">安全安保</td>
				        <td>办公文教</td>
				        <td>彩票</td>
				        <td>车辆物流</td>
				        <td>成人用品</td>
				        <td>出版传媒</td>
				        <td>电脑硬件</td>
				    </tr>
				    <tr class="ui-table-row">
				        <td class="col-first">电子电工</td>
				        <td>房地产建筑装修</td>
				        <td>分类平台</td>
				        <td>服装鞋帽</td>
				        <td>箱包饰品</td>
				        <td>化工原料制品</td>
				        <td>机械设备</td>
				    </tr>
				    <tr class="ui-table-row">
				        <td class="col-first">家庭日用品</td>
				        <td>家用电器</td>
				        <td>教育培训</td>
				        <td>节能环保</td>
				        <td>金融服务</td>
				        <td>礼品</td>
				        <td>旅游住宿</td>
				    </tr>
				    <tr class="ui-table-row">
				        <td class="col-first">美容化妆</td>
				        <td>母婴护理</td>
				        <td>农林牧渔</td>
				        <td>软件</td>
				        <td>商务服务</td>
				        <td>生活服务</td>
				        <td>食品保健品</td>
				    </tr>
				    <tr class="ui-table-row">
				        <td class="col-first">手机数码</td>
				        <td>通讯服务设备</td>
				        <td>网络服务</td>
				        <td>医疗服务</td>
				        <td>游戏</td>
				        <td>运动休闲娱乐</td>
				        <td>招商加盟</td>
				    </tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script type="text/javascript">
import myCounter from '../../components/base/counter.vue'
import myChooser from '../../components/base/chooser.vue'
import myMulChooser from '../../components/base/multiplyChooser.vue'
import mySelection from '../../components/base/selection.vue'
	export default {
		mounted () {
			this.region = this.product.regions[0],
			this.buyType = this.product.buyTypes[0],
			this.getPrice();
		},
		components: {
			myCounter,
			myChooser,
			myMulChooser,
			mySelection

		},
		data () {
			return {
				region: {},
				buyType: {},
				price: 0,

				product: {
					period: {
						label: '半年',
					    value: 0
					},
					regions: [
					  {
					    label: '北京',
					    value: 0
					  },
					  {
					    label: '上海',
					    value: 1
					  },
					  {
					    label: '广州',
					    value: 2
					  },
					  {
					    label: '深圳',
					    value: 3
					  },
					  {
					    label: '重庆',
					    value: 4
					  },
					  {
					    label: '武汉',
					    value: 5
					  }
					],
					
					buyTypes: [
					  {
					    label: '红色版',
					    value: 0
					  },
					  {
					    label: '绿色版',
					    value: 1
					  },
					  {
					    label: '紫色版',
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
					proType: this.buyType.value,
					proRegion: this.region.value,
					proPeriod: this.product.period.value,
				};
				console.log(paramObject);
				this.$http.post('/api/getPrice',paramObject).then((res)=>{
					this.price = res.data.data.amount;
				}, (err)=>{
					console.log("获取价格失败："+err);
				})

			}
		}
	}
</script>
<style scoped>

</style>