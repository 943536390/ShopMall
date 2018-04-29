<template>
  <div class="root">
    <header class="app-header">
      <img src="./assets/logo.png" height="50" width="50" class="logo">
      <ul class="nav-list">
        <li>登录</li>
        <li class="nav-pile">|</li>
        <li>注册</li>
        <li class="nav-pile">|</li>
        <li>关于</li>
      </ul>
    </header>
    <main class="app-content">
      <keep-alive>
         <router-view></router-view>
      </keep-alive>
    </main>
    <footer class="app-footer">@ 2018 xa</footer>
  </div>  
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {

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
  /*  min-width: 1000px;*/
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
