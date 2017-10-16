<template>
  <div class="phtContent">
    <p v-html="msg"></p>
    <button @click="select()">测试一下</button>
    <button @click="getData()">数据调取</button>
    <button @click="projects()">vuex</button>
    <input type="text" v-model="msg">
    <div>{{resultData}}</div>
  </div>
</template>

<script>
  import {phtservice} from '../assets/js/phtservice'
export default {
   data () {
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
      phtservice.setStore('key',this.$store.state.b);
      console.log(this.$store.state.projects)
    }
  },
  components:{
  }

}
</script>

<style scoped>

</style>
