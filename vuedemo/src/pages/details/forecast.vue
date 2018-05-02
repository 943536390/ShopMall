<template>
	<div class="wrap">
		<div class="wrap-block">
			<h1>数据预测</h1>
			<p>未来，大数据会变得越来越重要，其核心应用预测也会成为互联网行业以及产业变革的重要力量，我们很有必要对数据预测及其分析方法进行全面且深入的了解。在这一点上，《大数据预测》是本很好的读物，适合大数据所有相关行业的人阅读。</p>
			<div class="wrap-block-item first-item">
				<span>购买数量：</span>
				<my-counter :range='product.range' @on-change='paramChange("buyNum",$event)'></my-counter>
			</div>
			<div class="wrap-block-item">
				<span>媒介：</span>
				<my-chooser :selection='product.mediaList' @on-change='paramChange("media",$event)'></my-chooser>
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
			<p>2020年的一天，在你驱车前往公司的路上，导航系统通过预测交通流量，会自动帮你选择一条最合适的交通路线；车内推荐系统会根据你的饮食习惯预测你可能会喜欢吃什么，并推荐沿途的早餐店；你的电子社交助理已经为你自动选择了你可能感兴趣的社交网信息；当车内系统预测到你驾车有些分心时，座椅会自动震动进行提醒…… 以上这些情景不是科幻大片独有的，它们有的已经或会在未来的某一天成为现实。而这一切所倚靠的就是预测分析技术。 大数据时代下，作为其核心，预测分析已在商业和社会中得到广泛应用。随着越来越多的数据被记录和整理，未来预测分析必定会成为所有领域的关键技术。 作为预测分析领域的专家，埃里克·西格尔博士深谙预测分析界已经实现和正在发生的事情、面临的问题和将来可能的前景。在《大数据预测》一书中，他结合预测分析的应用实例，对其进行了深入、细致且全面的解读。 关于预测分析，你想了解的全部，你的生活以及这个世界会因为预测分析改变到什么程度，《大数据预测》都会告诉你。</p>
			
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
			this.buyNum = this.product.range.minNum;
			this.media = this.product.mediaList[0];
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
				media: {},
				price: 0,

				product: {
					range: {
						minNum: 20,
						maxNum: 100

					},
					
					period: {
						label: '半年',
					    value: 0
					},
					mediaList: [

					  {
					    label: 'pdf',
					    value: 0
					  },
					  {
					    label: '页面报告',
					    value: 1
					  },
					  {
					    label: '邮件',
					    value: 2
					  },
					  {
						label: '纸质报告',
					    value: 0
					},
					],
					
				},
				

			}
		},
		methods: {
			paramChange (attr,val) {
				this[attr] = val;
				console.log(this[attr]);
				this.getPrice();
			},
			getPrice () {
				let paramObject = {
					proNum: this.buyNum,
					proMedia: this.media.value,
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