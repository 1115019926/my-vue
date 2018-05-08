<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
          <transition name="slide-trans">
            <img v-if="isShow" :src="slides[nowIndex].src" />
          </transition>
        <transition name="slide-trans-old">
            <img v-if="!isShow" :src="slides[nowIndex].src" />
          </transition>
      </a>
    </div>
    <h2>{{slides[nowIndex].title}}</h2>
    <ul class="slide-pages">
      <li  @click="goto(prevIndex)">&lt;</li>
      <li v-for="(item,index) in slides" @click="goto(index)">
        <a v-text="index+1" :class="{on:index===nowIndex}"></a>
      </li>
      <li  @click="goto(nextIndex)">&gt;</li>
    </ul>

  </div>
</template>


<script>
export default {
  props: {
    slides: {
      type: Array,
      default: []
    },
    inv:{
      type:Number,
      default:1000
    }
  },
  data() {
    return {
      isShow:true,
      nowIndex:0,
    };
  },
  methods:{
    goto(index){
      this.isShow=false;
      setTimeout(()=>{
        this.isShow=true;
        this.nowIndex=index
        this.$emit("onchange",index)
      },10)
   
    },
    runInv(){
      this.invId=setInterval(()=>{
        this.goto(this.nextIndex)
      },this.inv)
    },
    clearInv(){
      clearInterval(this.invId)
    }
  },
  computed:{
    prevIndex(){
      if(this.nowIndex===0){
        return this.slides.length-1;
      }else{
        return this.nowIndex-1
      }
    },
    nextIndex(){
      if(this.nowIndex===this.slides.length-1){
        return 0
      }else{
        return this.nowIndex+1
      }
    }
  },
  mounted() {
    console.log(this.slides);
    this.runInv()
  }
};
</script>
<style>
.slide-trans-enter-active{
  transition:alll .5s;
}
.slide-trans-enter{
  transform: translateX(900px);
}
.slide-trans-old-leave-active{
  transition:all .5s;
  transform:translateX(-900px);
}
.slide-show{
  position:relative;
  margin:15px 15px 15px 0;
  width:900px;
  overflow:hidden;
  height:350px;
}
.slide-show h2{
  position:absolute;
  width:100%;
  height:100%;
  color:#fff;
  background:#000;
  opacity:.5;
  bottom:0;
  height:30px;
  text-align:left;
  padding-left:15px;
}
.slide-img{
  width:100%;
}
.slide-img img{
width:100%;
position: absolute;
top:0;
}
.slide-pages{
  position:absolute;
  bottom:0px;
  right:15px;
}
.slide-pages li{
  float:left;
    width:16px;
  height:16px;
  margin:8px 10px;
    cursor:pointer;
}
.slide-pages li a{
   width:16px;
  height:16px;
  border:1px solid #999;
  border-radius:50%;
  text-align:center;
  display:inline-block;

}
.on{
  border:0;
  background:#999;

}

</style>