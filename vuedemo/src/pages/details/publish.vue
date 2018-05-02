<template>
	<div class="wrap">
		<div class="wrap-block">
			<h1>广告发布</h1>
			<p>广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
			<div class="wrap-block-item first-item">
				<span>购买数量：</span>
				<my-counter :range='product.range' @on-change='paramChange("buyNum",$event)'></my-counter>
			</div>
			<div class="wrap-block-item">
				<span>行业：</span>
				<my-selection :selection='product.industries' @on-change='paramChange("industry",$event)'></my-selection>
			</div>
			
			<div class="wrap-block-item">
				<span>产品版本：</span>
				<my-mul-chooser :selection='product.versionList' 
						@on-change='paramChange("versions",$event)'>
						</my-mul-chooser>
			</div>
			<div class="wrap-block-item">
				<span>有效时间：</span>
				<div>{{product.period.label}}</div>
			</div>
			<div class="wrap-block-item">
				<span>总价：</span>
				<div class="price">{{price+'元'}}</div>
			</div>
			<div class="wrap-block-btn">
				<button>立即购买</button>
			</div>

		</div>
		<div class="wrap-block wrap-block-bottom">
			<h1>产品说明</h1>
			<p>广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
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
			this.buyNum = this.product.range.minNum,
			this.industry = this.product.industries[0],
			this.versions = [this.product.versionList[0]],
			this.period = this.product.period,
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
				buyNum: 0,
				industry: {},
				versions: [],
				period: {},
				price: 0,

				product: {
					range: {
						minNum: 20,
						maxNum: 100
					},
					period:
					  {
					    label: '半年',
					    value: 0
					  },
					versionList: [
					  {
					    label: '初级版',
					    value: 0
					  },
					  {
					    label: '中级版',
					    value: 1
					  },
					  {
					    label: '高级版',
					    value: 1
					  },
					  {
					    label: '专家版',
					    value: 2
					  }
					],
					industries: [
					  {
					    label: '出版业',
					    value: 0
					  },
					  {
					    label: '金融',
					    value: 1
					  },
					  {
					    label: '媒体',
					    value: 2
					  },
					  {
					    label: '互联网',
					    value: 3
					  },
					  {
					    label: '游戏',
					    value: 4
					  },
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
					proIndustry: this.industry.value,
					proVersions: this.versions,
					proPeriod: this.period.value,
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