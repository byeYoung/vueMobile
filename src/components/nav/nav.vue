<template>
  <div class="nav">
    <div class="navContainer">
      <div class="logo">
        <router-link to="/home">
          <img src="../../assets/images/logo.png" />
        </router-link>
      </div>
      <ul class="navBar">
        <li v-for="(item, index) in navList" @click = "listSelect(item, index)">
          <span :class="{active:i == index}">{{item.listName}}</span>
        </li>
      </ul>
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
            this.$router.push("/home")
        }else if(index == 5){
            this.$router.push("/home")
        }else{}
      }
    }
  }
</script>

<style scoped>
  .nav{
    width:100%;
    background-color: #fff;
    height:80px;
    line-height: 80px;
    border-bottom: 1px solid #ccc;
  }
  .navContainer{
    width: 1000px;
    margin:0 auto;
  }
  .logo{
    float: left;
  }
  .logo img{
    vertical-align: middle;
  }
  .navBar{
    float: right;
  }
  .navBar li{
    float: left;
    margin-left: 20px;
    cursor: pointer;
  }
  .navBar li span{
    font-size: 17px;
    color: #6e6e6e;
  }
  .navBar li span.active{
    color: #a32228;
  }
  .navBar li span:hover{
    color: #a32228;
  }
</style>
