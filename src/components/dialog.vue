<template>
<div v-if="isShow">
  <div class="dialog-show">
  </div>
   <div class="dialog-block">
      <div class="dialog-box">
        <div class="close-btn" @click="closeMySelf">!</div>
<slot>emply</slot>
      </div>
    </div>
    </div>
</template>


<script>
export default {
 props:{
   isShow:{
     type:Boolean,
     default:false
   }
 },
 method:{
   closeMySelf(){
    this.$emit("on-close")
   }
 }
};
</script>
<style>
.dialog-show{
  position:fixed;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.4);
  z-index:2;
  top:0;
  left:0;

}
.dialog-block{
  background:#fff;
  width:600px;
  height:400px;
   position:fixed;
  top:50%;
  left:50%;
  margin-left:-300px;
  margin-top:-200px;
  border-radius:2px;
    z-index:3;
}
.dialog-box{
  position:relative;
}
.close-btn{
  position:absolute;
  top:10px;
  right:10px;
}
</style>