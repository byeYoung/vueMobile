<template>
  <div class="nav">
    <div class="nav_container">
      <div class="pic_box">
        <img src="../../assets/images/logo.png" alt="">
      </div>
    <div>
      <ul>
        <li v-for="(item ,index) in navList" @click="listSelect(item ,index)"><span :class="{ active : i == index}">{{item.listName}}</span></li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
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
            this.$router.push("/about")
        }else if(index == 5){
            this.$router.push("/about")
        }else{}
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
  }
  .pic_box{
    float: left;
  }


</style>
