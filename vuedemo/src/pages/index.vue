<template>
	<div class="index-wrap">
		<aside class="index-left">
			<div class="index-left-block all-product">
				<h3>全部产品</h3>
				<template v-for='(product,key,index) in productList'>
					<div class="all-product-item">
						<h4>{{product.title}}</h4>
						<ul>
							<li v-for='item in product.list'>
								<a :href="item.url">{{item.name}}</a>
								<span class="hot-tag" v-if='item.hot'>HOT</span>
							</li>
						</ul>
						<div class="hr" v-if='!product.hrHide'></div>
					</div>
					
				</template>
			</div>
			<div class="index-left-block latest-news">
				<h3>最新消息</h3>
				<ul> 
					<li v-for='item in news'><a :href="item.url">{{item.title}}</a></li>
				</ul>
			</div>
		</aside> 
		<article class="index-right">
			<div class="Carousel">
				
			</div>
			<div class="index-board-list">
				<template v-for='(item,index) in boardList'>
					<div class="index-board-item ">
						<div class="index-board-item-inner" :class='["index-board-"+item.id]'>
							<h2>{{item.title}}</h2>
							<p>{{item.description}}</p>
							<div class="button"><a href="">立即购买</a></div>
						</div>
					</div> 
				</template>
				<div class="hidden">&nbsp;</div> 
				
				
			</div>
		</article>
	</div>
</template>
<script type="text/javascript">
	export default {
	  name: 'IndexPage',
	  created () {
	  	console.log(this);
	  	this.$http.get('/api/getNewsList')
	  	.then((response)=>{
	  		this.news = response.data.data;
	  		console.log(this.news);
	  	}, function(err){
	  		console.log("获取数据失败："+err);

	  	})
	  },
	  data () {
	    return {
	    	boardList: [
	    	  {
	    	    title: '开放产品',
	    	    description: '开放产品是一款开放产品',
	    	    id: 'car',
	    	    toKey: 'analysis',
	    	    saleout: false
	    	  },
	    
	    	  {
	    	    title: '品牌营销',
	    	    description: '品牌营销帮助你的产品更好地找到定位',
	    	    id: 'earth',
	    	    toKey: 'count',
	    	    saleout: false
	    	  },
	    	  {
	    	    title: '使命必达',
	    	    description: '使命必达快速迭代永远保持最前端的速度',
	    	    id: 'loud',
	    	    toKey: 'forecast',
	    	    saleout: true
	    	  },
	    	  {
	    	    title: '勇攀高峰',
	    	    description: '帮你勇闯高峰，到达事业的顶峰',
	    	    id: 'hill',
	    	    toKey: 'publish',
	    	    saleout: false
	    	  },
	    	  {
	    	    title: '勇攀高峰',
	    	    description: '帮你勇闯高峰，到达事业的顶峰',
	    	    id: 'hill',
	    	    toKey: 'publish',
	    	    saleout: false
	    	  },



	    	],
	    	productList: {
	    		pc: {
	    			
	    			title: 'PC产品',
	    			list: [
	    			            {
	    			              name: '数据统计',
	    			              url: 'http://starcraft.com'
	    			            },
	    			            {
	    			              name: '数据预测',
	    			              url: 'http://warcraft.com'
	    			            },
	    			            {
	    			              name: '流量分析',
	    			              url: 'http://overwatch.com',
	    			              hot: true
	    			            },
	    			            {
	    			              name: '广告发布',
	    			              url: 'http://hearstone.com'
	    			            }
	    			          ]
	    		},
	    		
	    		app: {
	    			hrHide: true,
	    			title: '手机应用类',
	    			list: [
	    			            {
	    			              name: '91助手',
	    			              url: 'http://weixin.com'
	    			            },
	    			            {
	    			              name: '产品助手',
	    			              url: 'http://twitter.com',
	    			              hot: true
	    			            },
	    			            {
	    			              name: '智能地图',
	    			              url: 'http://maps.com'
	    			            },
	    			            {
	    			              name: '团队语音',
	    			              url: 'http://phone.com'
	    			            }
	    			          ]
	    		}
	    	},

	    	news: []


	    }
	  },


	}
</script>
<style scoped>
/*整体布局*/
.index-left {
	width: 100%;
	margin-bottom: 0.1rem;
}
.index-right {
	width: 100%;
}
/*sider style*/
.index-left-block {
	background-color: #fff;
	padding-bottom: 0.1rem;
}
.index-left-block h3 {
	margin: 0;
	padding: 0.07rem 0.1rem;
	background-color: #4fc08d;
	color: #fff;
	font-weight: 400;
	font-size: 0.16rem;
}



.index-left-block h4 {
	margin: 0.15rem 0.07rem;
	font-size: 0.15rem;
}
.index-left-block ul {
	margin: 0.1rem;
	font-size: 0.14rem;
}
.index-left-block li {
	padding: 0.04rem 0.15rem;
}
.hot-tag {
	color: #fff;
	background-color: #ff0000;
}
.hr {
	display: none;
}
.latest-news {
	margin-top: 0.15rem;

}

.latest-news li {
	border-bottom: 1px dashed #ccc;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	word-break: keep-all;
}

.all-product-item {
	display: inline-block;
	width: 50%;
}
/*article style*/
.Carousel {
	border: 2px solid red;
	height: 200px;
}
.index-board-list {
	margin-top: 0.1rem;
}
.index-board-item {
	width: 100%;
	background: #fff;
	padding: 0.2rem;
	margin: 0.1rem 0;
}

.index-board-item-inner {
	padding-left: 1.3rem;

}
.index-board-item-inner h2 {
	margin: 0;
	font-size: 0.18rem;

}
.index-board-item-inner p {
	font-size: 0.15rem;

}
.index-board-item-inner .button {
	display: inline-block;
	background-color: #4fc08d;
	font-size: 0.15rem;
	padding: 0.07rem 0.2rem;
	margin-top: 0.1rem;

}
.button a {
	color: #fff;
}

.index-board-car {
	background: url(../assets/images/1.png) left center no-repeat;
}
.index-board-earth {
	background: url(../assets/images/2.png) left center no-repeat;
}
 .index-board-loud {
	background: url(../assets/images/3.png) left center no-repeat;
}
.index-board-hill {
	background: url(../assets/images/4.png) left center no-repeat;
}

.hidden {
	display: inline-block;
	width: 100%;
	height: 0;
	border: 2px solid red;
	visibility: hidden;
}



@media screen and (min-width:768px ){
	/*整体布局*/
.index-wrap {
	overflow: hidden;
	padding-left: 250px;
	
}
.index-left {
	width: 250px;
	float: left;
	margin-left: -250px;
}
.index-right {
	padding-left: 0.15rem;
	width: 100%;
	float: left;

}

.all-product-item {
	display: block;
	width: 100%;
}
.hr {
	margin-top: 0.1rem;
	border: 0.5px solid #ccc;
}

    
}

@media screen and (min-width:950px ){
	/*整体布局*/
.index-wrap {
	overflow: hidden;
	padding-left: 250px;
	
}
.index-left {
	width: 250px;
	float: left;
	margin-left: -250px;
}
.index-right {
	padding-left: 0.15rem;
	width: 100%;
	float: left;

}


/*article style*/

/*flex layout*/
/*.index-board-list {
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-content: flex-start;
	margin-top: 0.1rem;
	margin-right: -0.1rem;
}
.index-board-item {
	flex: 1 45%;
	margin: 0 0.1rem 0.1rem 0;
}


.hidden {
	flex: 1 45%;
	margin: 0 0.1rem 0.1rem 0;
	visibility: visible;
}*/



/*line-block layout*/

.index-board-list {
	margin-top: 0.1rem;
	margin-right: -0.1rem;
	font-size: 0;
	letter-spacing: -4px;
}
.index-board-item {
	padding-top: 0;
	padding-bottom: 0;
	letter-spacing: normal;
	margin: 0 0.1rem 0.1rem 0;
	display: inline-block;
	width: calc((100% - 0.2rem) * 0.5);
	height: 200px;
	line-height: 200px;
	vertical-align: middle;
}
.index-board-item * {
	line-height: normal;
}

.index-board-item-inner {
	display: inline-block;
	vertical-align: middle;
}




}

</style>