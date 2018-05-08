<template>
  <div>
    <header>
      <div class="container">
        <img src="../assets/img2.png" />
        <ul class="nav-list">
          <li @click="logClick">登录</li>
          <li @click="regClick">注册</li>
          <li @click="aboutClick">关于</li>
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
    <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、
        用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、
        准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
    </my-dialog>
    <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
      登陆
    </my-dialog>
    <my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
     注册
    </my-dialog>
  </div>
</template>
<script>
import Dialog from './dialog'
export default{
  components:{
    MyDialog:Dialog
  },
  data(){
    return {
       isShowAboutDialog: false,
      isShowLogDialog: false,
      isShowRegDialog: false,
    }
  },
  methods:{
   aboutClick() {
      this.isShowAboutDialog = true;
    },
    logClick(){
      this.isShowLogDialog = true;
    },
    regClick(){
      this.isShowRegDialog = true;
    },
    closeDialog(attr){
      this[attr] = false;
    },
  }
}
</script>
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
