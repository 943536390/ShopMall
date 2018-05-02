<template>
  <div class="slide" @mouseenter='clearInv' @mouseleave='runInv'>
    <div class="slide-img">
      <a :href="slides[nowIndex].href" >
      <!-- this nowIndex is new picture's index -->
      <transition name='slide-trans'>  
        <img :src="slides[nowIndex].src" v-if='show'>
      </transition>
      <!-- this nowIndex is old picture's index -->
      <transition name='slide-trans-old'>
        <img :src="slides[nowIndex].src" v-if='!show'>
      </transition>
      </a>
    </div>
    <div class="slide-page">
      <span>{{ slides[nowIndex].title }}</span>
      <ul>
        <li @click='gotoIndex(preIndex)'>&lt;</li>
        <li v-for='(item,index) in slides' 
            @click='gotoIndex(index)' 
            :class='{"on": nowIndex==index}'>
          {{ index + 1  }}
        </li>
        <li @click='gotoIndex(nextIndex)'>&gt;</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slide-show',
  props: {
        slides: {
          type: Array,
          default: []
        },
        invTime: {
          type: Number,
          default: 1000
        }
      },
  data () {
    return {
      nowIndex: 0,
      show: false,
    }
  },
  computed: {
    preIndex () {
      return this.nowIndex==0 ? this.slides.length-1 : this.nowIndex-1;
    },
    nextIndex () {
      return this.nowIndex==this.slides.length-1 ? 0 : this.nowIndex+1;
    }

  },
  methods: {
    gotoIndex (index) {
      this.show = false;//让下一跳图片先不显示，
      setTimeout(()=>{
         this.show = true;//等10s以后在显示下一个图片
        this.nowIndex = index;
       // this.$emit('change',index);//当跳到下一图片时，触发父组件的change事件，将index传给父组件
      },10)
      
    },
    pre () {
      this.nowIndex = this.nowIndex==0 ? this.slides.length-1 : this.nowIndex-1;
    },
    next () {
      this.nowIndex = this.nowIndex==this.slides.length-1 ? 0 : this.nowIndex+1;
    },
    runInv () {
       //console.log("out");
      this.intv = setTimeout(()=>{
        this.gotoIndex(this.nextIndex);
        this.runInv();
      },this.invTime);
    },
    clearInv () {
      //console.log("over");
      clearTimeout(this.intv);
    }
  },
  mounted () {
    this.runInv();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  float: right;
  list-style-type: none;
  padding: 0;
  color: #fff;
}
li {
  display: inline-block;
  margin: 0 0.05rem;
  cursor: pointer;
  width: 0.1rem;
  text-align: center;
}
/*li:hover {
  background: rgba(204,204,204,0.5);

}*/
a {
  color: #42b983;
}

.slide {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;

}
.slide-img {
  width: 100%;
  height: 100%;
  
}
.slide-img img {
  position: absolute;
  top: 0; 
  max-width: 100%;
  width: 100%;height: 100%;

}
.slide-img a {
  display: inline-block;
  width: 100%;
  height: 100%; 
}
.slide-page {
  position: absolute;
  background: rgba(0,0,0,0.5);
  width: 100%;
  line-height: 0.3rem;
  bottom: 0;
}
.slide-page span {
  display: inline-block;
  margin-left: 0.1rem;
  color: #ccc;

}

.on {
  background: rgba(204,204,204,0.5);
}

/*过渡动画效果*/
.slide-trans-enter-active,
.slide-trans-leave-active,
.slide-trans-old-enter-active,
.slide-trans-old-leave-active {
  transition: all .5s;
}

.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transform: translateX(-900px);
}


@media screen and (min-width:768px ){
  .slide {
    height: 300px;
  }
  li {
    display: inline-block;
    margin: 0 0.08rem;
    cursor: pointer;
    width: 0.2rem;
    text-align: center;
  }
  
}
@media screen and (min-width:950px ){
  .slide {
    height: 450px;
  }
  
}

</style>

<!-- 
<slide-show :slides='slides' :invTime='slideSpeed' @change='doSomethingOnSlideChange'></slide-show> 
父组件向子组件传值：slides:需要轮播展示的数据
                        Array, 
                        基本格式： [
                                      {
                                        src: require('../assets/slideShow/pic1.jpg'),
                                        title: 'xxx1',
                                        href: 'detail/analysis'
                                      }
                                    ]
                    
                    invTime:轮播的速度，Number,基本格式：1000；
                    
子组件向父组件触发事件：change：当图片发生变化时触发该事件，默认向父组件传递当前图片的index值，可修改
-->