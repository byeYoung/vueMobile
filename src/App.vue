<template>
  <div id="app">
    <head-top></head-top>
    <pc-nav :getNavStatus = 'getNavStatus()'></pc-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import headTop from '@/components/headTop/head.vue'
  import pcNav from '@/components/nav/nav.vue'
  import {mapGetters, mapActions,mapState} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      parentMsg: '普惠通',
    }
  },
  computed: {
    ...mapGetters(['navStatus'])
  },
  mounted(){

  },
  methods:{
 getNavStatus(){
  return this.navStatus
}
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
