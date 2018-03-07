<template>
  <div class="nav">
    <div class="nav_container">
      <div class="pic_box">
        <img src="../../assets/images/3-首页logo9.png" alt="">
      </div>
    <div>
      <ul>
        <li v-for="(item ,index) in navList" @click="pageSelect(item ,index)"><span :class="{ active : i == index}">{{item}}</span></li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
  export default {
    data () {
      return {
        navList:[
          {listName: '首页' },
          {listName: '安全保障' },
          {listName: '投资频道' },
          {listName: '账户管理' },
          {listName: '信息披露' },
          {listName: '关于我们' }
        ],
        i:0
      }
    },
    methods:{
      listSelect: function (list, index) {
        this.i = index
        if(index == 0){
          this.$router.push("/home")
        }else if(index == 1){
            this.$router.push("/safety")
        }else if(index == 2){
            this.$router.push("/home")
        }else if(index == 3){
            this.$router.push("/home")
        }else if(index == 4){
            this.$router.push("/home")
        }else if(index == 5){
            this.$router.push("/about")
        }else{}
      }
=======
  import {mapGetters, mapActions, mapState} from 'vuex'
export default {
   props:['navStatusData'],
   data () {
    return {
      navList:[
        '首页','安全保障','投资频道','账户管理','信息披露','关于我们'
      ],
      i:''

>>>>>>> 460dec9989f9231c358ea728fe308c50b7296acf
    }
   },
   created(){
      this.initNavStatus()
  },
  methods:{

     initNavStatus:function () {
       let _this =this
       setTimeout(function () {
         _this.i =_this.navStatusData
         console.log(_this.i)
     }, 110)

     },
     pageSelect:function (item,index) {
       this.i =index;
       let flag =index;
       if (flag ===1){
         this.$router.push({path:'/loop'})
       }else if(flag ===0) {
         this.$router.push({path:'/home'})
       }else if (flag == 5) {
          this.$router.push({path:'/about'})
       } {

       }

     }
  }

}
</script>

<style scoped>
  .nav{
    height: 60px;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #ccc;

  }
  .nav_container{
    height: 100%;
    width: 1000px;
    margin: 0 auto;
    background: #fff;
    line-height: 60px;
    font-family: '微软雅黑';
    font-size: 14px;
  }
  .nav_container ul li{
    display: inline-block;
    margin-left: 40px;
  }
  .nav_container ul{
    float: right;
  }
  .nav_container ul li span{
    display: block;
    height: 45px;
    cursor: pointer;
  }
  .nav_container .active{
    color: red;
    border-bottom: 3px solid red;
  }
  .pic_box{
    float: left;
  }


</style>
