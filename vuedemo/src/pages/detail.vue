<template>
	<div class="detail-wrap">
		<div class="detail-left detail-block-wrap">
			<div class="detail-left-block">
				<img src="../assets/images/1.png" height="100" width="100">
				<ul>
					<router-link v-for='item in products' 
					tag='li' 
					:to="{path: item.path}"
					active-class='active' :key='item.id'>
						{{item.title}}
					</router-link>	
				</ul>
			</div>
		</div>
		<div class="detail-right detail-block-wrap">
			<div class="detail-right-block">
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</div>
		</div>
	
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				products: [
					{
						title: "数据统计",
						path: 'count',
						id: 'count'

					},
					{
						title: "数据预测",
						path: 'forecast',
						id: 'forecast'

					},
					{
						title: "数据分析",
						path: 'analysis',
						id: 'analysis'

					},
					{
						title: "广告发布",
						path: 'publish',
						id: 'publish'

					}
				]

			}
		},
	}
</script>
<style>
button {
  padding: 0.1rem 0.2rem;
  font-size: 0.14rem;
  background: #4FC08D;
  color: #fff;
  cursor: pointer;
  
}
.detail-wrap {
	display: flex;
	flex-flow: row wrap;

}
.detail-left {
	flex: 1 20%;
	min-width: 150px;
	

}
.detail-right {
	flex: 1 80%;
}
.detail-block-wrap {
	padding: 0.1rem;

}
.detail-left-block {
	background: #fff;
	text-align: center;
	padding-bottom: 0.3rem;
}
.detail-left-block img {
	margin-top: 0.2rem;
	margin-bottom: 0.2rem;
}
.detail-left-block li {
	text-align: left;
	padding: 0.06rem 0.2rem;
	cursor: pointer;
	font-size: 0.14rem;
}

.active {
	background: #4fc08d;
	color: #fff;
}



/*detailsPage common style*/
.wrap-block {
  background: #fff;
  padding: 0.2rem;
  margin-bottom: 0.2rem;
  
}
.wrap-block h1 {
  font-size: 0.2rem;
  font-weight: 400;
  margin: 0 0 0.2rem 0;
}
.wrap-block h2 {
  font-size: 0.18rem;
  font-weight: 700;
  margin: 0.2rem 0 0.06rem 0;
}
.wrap-block p {
  font-size: 0.14rem;
  color: #999;
  line-height: 1.8; 
}
.wrap-block-bottom p {
  color: #000;
}

.wrap-block-item {
  font-size: 0;
  letter-spacing: -4px;
  margin-bottom: 0.25rem;
  font-size: 0.14rem;
  color: rgb(68,68,68);
}
.wrap-block-item * {
  font-size: 0.14rem;
  letter-spacing: normal;
}
.wrap-block-item span {
  display: inline-block;
  margin-right: 0.2rem;
  width: 1rem;
}
.wrap-block-item div {
  display: inline-block;
}
.first-item {
  margin-top: 0.4rem;
}
.wrap-block-btn button {
  margin-left: 1.2rem;
  padding: 0.1rem 0.2rem;  
}



/*product table style*/
.product-board-table {
  width: 100%;
  border: 1px solid rgb(227,227,227);
  border-collapse: collapse;
  font-size: 0.15rem;
  max-width: 100%;
  
}
.product-board-table thead {
   background: #4FC08D;
  color: #fff;
  text-align: center;
  
}
.product-board-table td {
  border: 1px solid rgb(227,227,227);
  padding: 0.15rem;
}

.product-dialog-table {
	margin-top: 0.3rem;
}
.product-dialog-table td {
	text-align: center;
}

.dialog-title {
	margin-bottom: 0.1rem;
}

@media screen and (min-width:750px ){
  .detail-left {	
	margin-left: -0.1rem;
}
.detail-right {
	margin-right: -0.1rem;
}

}

</style>


