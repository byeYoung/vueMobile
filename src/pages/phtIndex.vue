<template>
  <div class="phtIndex" v-title="'社会你杨哥哥'">
    <div  class="drag"  v-drag>我可以拖拽</div>
    <p v-html="msg"></p>
    <button @click="select()">测试一下</button>
    <button @click="getData()">数据调取</button>
    <button @click="projects()">vuex</button>
    <input type="text" v-model="msg">
    <div>{{resultData}}</div>
  </div>

</template>

<script>
  import {Adaptation} from '../assets/js/common'

  export default {
    data() {
      return {
        msg: '普惠通',
        resultData:''
      }
    },
    watch:{
      msg(){
        this.$store.dispatch('msgFn',this.msg).then(
        )
      }
    },
    mounted:function () {
      this.$store.dispatch('changeDate');
      this.resultData =this.$store.state.projects;
    },
    methods: {
      select: function () {
       this.msg='我不信'
      },
      projects: function () {

      },
      getData: function () {
        console.log(this.$store.state.b);
        sessionStorage.setItem('key',this.$store.state.b);
        console.log(this.$store.state.projects)
      }
    }
  }
</script>

<style scoped>
  @import '../assets/css/common.css';


</style>
