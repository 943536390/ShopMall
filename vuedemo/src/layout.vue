<template>
  <div class="root">
    <header class="app-header">
      <router-link :to="{path: '/'}">
         <img src="./assets/logo.png" height="50" width="50" class="logo">
      </router-link>
     
      <ul class="nav-list">
         <li v-if='isUserShow'>{{userName}}</li>
        <li @click="openDialog('isLogShow')" v-else>登录</li>
        <li class="nav-pile">|</li>
        <li v-if='isUserShow'>退出</li>
        <li @click="openDialog('isRegShow')" v-else>注册</li>
        <li class="nav-pile">|</li>
        <li @click="openDialog('isAboutShow')">关于</li>
      </ul>
    </header>
    <main class="app-content">
      <keep-alive>
       <router-view></router-view>
     </keep-alive>
   </main>
   <footer class="app-footer">@ 2018 xa</footer>
   
   <my-dialog  @on-close="closeDialog('isLogShow')" :isShow='isLogShow'>
    <log-form @loginSuccess='loginSuccess'></log-form>
  </my-dialog>
  <my-dialog  @on-close="closeDialog('isRegShow')" :isShow='isRegShow'>
    <reg-form></reg-form>
  </my-dialog>
  <my-dialog  @on-close="closeDialog('isAboutShow')" :isShow='isAboutShow'>
    <p class="dialog-about">本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
  </my-dialog>
  

</div>  
</template>

<script>
import myDialog from './components/base/dialog.vue';
import logForm from './components/logForm.vue';
import regForm from './components/regForm.vue';
export default {
  name: 'Layout',
  components: {
    myDialog,
    logForm,
    regForm
  },
  data () {
    return {
      isLogShow: false,
      isRegShow: false,
      isAboutShow: false,
      isUserShow: false,
      userName: ''
    }
  },
  methods: {
    closeDialog (type) {
      this[type] = false;

    },
    openDialog (type) {
      this[type] = true;
    },
    loginSuccess (userInfo) {
      this.closeDialog('isLogShow');
      this.isUserShow = true;
      this.userName = userInfo.username;

    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
html,
body {
  padding: 0;
  margin: 0;
  font-size: 625%;
  height: 100%;
}
body {
  background-color: #f0f2f5;
  font-size: 0.16rem;
  min-width: 400px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
img {
  vertical-align: middle;
}
a {
  text-decoration: none;
  color: #000;
}
button {
  outline: none;
  border: none;
}

/*header style*/
.app-header {
  background-color: rgb(54,54,54);
  line-height: 90px;
  font-size: 0;
}
.logo {
  margin-left: 0.2rem;
  cursor: pointer;
}
.nav-list {
  margin: 0 0.2rem 0 0;
  padding: 0;
  color: #ccc;
  float: right;

}
.nav-list li { 
  display: inline-block;
  font-size: 0.15rem;
  vertical-align: middle;
  cursor: pointer;
}
.nav-pile {
  margin-right: 0.1rem;
  margin-left: 0.1rem;
}

/*footer style*/
.app-footer {
  line-height: 90px;
  background-color: #e3e4e8;
  text-align: center;
  font-size: 0.14rem;
}

/*main content style*/
.app-content {
  margin: 0.1rem;
  min-height: calc(100vh - 180px - 0.3rem);
}

/*dialog style*/
.dialog-about {
  text-indent: 0.32rem;
  margin-top: 0.25rem;
}




@media screen and (min-width:1200px ){
  .logo {
    margin-left: 10%;
  }
  .nav-list {
    margin: 0 10% 0 0;
  }
  .app-content {
    width: 80%;
    margin: 0.1rem auto;
  }

}



</style>
