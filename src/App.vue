<template>
  <div id="app">
    <head-top></head-top>
    <pc-nav></pc-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import headTop from '@/components/headTop/head.vue'
  import pcNav from '@/components/nav/nav.vue'
export default {
  name: 'app',
  data () {
    return {
      parentMsg: '普惠通',
    }
  },
  methods:{

  },
  components:{
    headTop,
    pcNav
  }
}
</script>

<style scoped>
    @import './assets/css/common.css';
</style>
