<template>
  <div>
    <header>
      <div class="container">
        <img src="../assets/img2.png" />
        <ul class="nav-list">
          <li>登录</li>
          <li>注册</li>
          <li>关于</li>
        </ul>
      </div>
     
    </header>
    <div class="app-content">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>  
    <footer class="app-foot">
      <p>@ 2018 fishenal mit</p>
    </footer>
  </div>
</template>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
ul{
  list-style: none;
  margin:0;
  padding:0;
}
*{
  margin:0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  overflow: hidden;
  margin: 0 auto;
  width: 1200px;
}
header {
  background: #2c3e50;
  color: #fff;
  overflow: hidden;
  width: 100%;
}
.nav-list {
  list-style: none;
  float: right;
}
.nav-list li {
  float: left;
  border-left: 1px solid #ccc;
  line-height: 30px;
  padding: 0 30px;
}
.app-foot {
  font-size: 14px;
  line-height: 80px;
  text-align: center;
  background: #ccc;
}
</style>
