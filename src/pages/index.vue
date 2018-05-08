<template>
  <div class="container">
   <div class="leftbox">
     <div class="left-navbox">
       <h2>全部产品</h2>
      <div class="left-nav" >
<template v-for="product in productList">
        <h4 v-text="product.title"></h4>
        <ul>
          <li v-if="product.list" v-for="item in product.list">
            <a :href="item.url">{{item.title}}</a>
            <span class="hot_tag" v-if="item.hot">HOT</span>
          </li>
        </ul>
        <div v-if="!product.last" class="hr"></div>
        </template>
      </div>
      
     </div>
      <div class="left-navbox">
        <h2>最新消息</h2>
      <div class="left-nav">
        <ul>
          <li v-if="newsList" v-for="item in newsList" class="new_item">
            <a :href="item.url">{{item.title}}</a>
          </li>
        </ul>
      </div>
      
     </div>
     
   </div>
   <div class="rightbox">
     <slide-show :slides="slides" :inv="slideSpeed"></slide-show>
   <div>
     <div class="boadlist" v-if="boardList" v-for="(item,index) in boardList" :class="[{'line-box':index%2!==0},'img'+item.id]">
       <div class="imgbox" ></div>
       <div class="boardtxt">
         <h4>{{item.title}}</h4>
         <p>{{item.discribe}}</p>
         <button>立即购买</button>
       </div>
     </div>
   </div>
   </div>
  </div>
</template>
<script>
import slideShow from '../components/slideShow'
export default {
  components:{slideShow},
    name: 'IndexPages',
    created:function(){
      this.$http.get('api/seller')
      .then((data)=>{
        console.log(data.data)
        this.newsList=data.data.data.newsList

      },(err)=>{
console.log(err)
      })
    },
  data () {
    return {
      slideSpeed:2000,
      slides:[
        {
          src:require("../assets/img/slide1.jpg"),
          title:'xxx1',
          href:'http://vuex.vuejs.org/'
        },
         {
          src:require("../assets/img/slide2.jpg"),
          title:'xxx2',
          href:'http://vue-loader.vuejs.org/'
        },
         {
          src:require("../assets/img/slide3.jpg"),
          title:'xxx3',
          href:'http://router.vuejs.org/'
        },
         {
          src:require("../assets/img/slide4.jpg"),
          title:'xxx4',
          href:'https://github.com/vuejs/awesome-vue'
        }
      ],
      boardList:[
        {
          title:"开放产品",
          discribe:"开放产品是一款呢开放产品",
          saleout:true,
          id:1
        },{
          title:"开放产品",
          discribe:"开放产品是一款呢开放",
          saleout:true,
          id:2
        },
        {
          title:"开放产品",
          discribe:"开放产品是一款呢开放产品",
          saleout:true,
          id:3
        },{
          title:"开放产品",
          discribe:"开放产品是一款呢开放",
          saleout:true,
          id:4
        }
      ],
      newsList:[
       
      ],
      productList:{
          pc:{
            title:"pc产品",
            list:[
              {
                title:"数据统计",
                url:""
              },
              {
                title:"数据预测",
                url:"",
                hot:true
              },
              {
                title:"流量分析",
                url:""
              },
              {
                title:"广告发布",
                url:""
              }
            ]
          },
          app:{
            title:"应用类",
            list:[
              {
                title:"91助手",
                url:""
              },
              {
                title:"产品助手",
                url:""
              },
              {
                title:"智能地图",
                url:""
              },
              {
                title:"团队语音",
                url:""
              }
            ]
          }
          
        }

    }
  }
}
</script>
<style scoped>

.leftbox{
  width:200px;
  float:left;
}
.rightbox{
  float:left;
  width:1000px;
}
.left-navbox h2{
  font-size:14px;
  background:green;
  color:#fff;
  font-weight:bold;
  line-height:40px;
  padding-left:20px;
}
.left-nav h4{
  font-size:14px;
  font-weight: bold;
}
.left-nav{
  background:#fff;
  padding-left:20px;
  line-height:38px;
  color:#666;
 
}
.hr{
  width:100%;
  border-bottom:1px solid #ccc;
  height:1px;
}
.hot_tag{
  color:#fff;
  background:red;

}
.boadlist{
  float:left;
  width:480px;
  margin-right:20px;
  margin-bottom:20px;
}
.imgbox{
  min-width:125px;
  display: block;
  float:left;
  height:100px;
  
}
.img1 .imgbox{
  background:url(../assets/img/1.jpg) no-repeat;
  background-size:contain;
}
.img2 .imgbox{
  background:url(../assets/img/2.jpg) no-repeat;
  background-size:contain;
}
.img3 .imgbox{
  background:url(../assets/img/3.jpg) no-repeat;
  background-size:contain;
}
.img4 .imgbox{
  background:url(../assets/img/4.jpg) no-repeat;
  background-size:contain;
}
.line-box{
  margin-right:0;
}
.boardtxt{
  float:left;
}
.boardtxt h4{
  color:#333;
}
.boardtxt p{
  color:#666;
  padding:10px 0;
}
.boardtxt button{
  color:#fff;
  background:blue;
  border:0;
}
.new_item{
  width:190px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap;
}
</style>
