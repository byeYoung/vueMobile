<template>
  <div id="app">
    <heard></heard>
      <pc-nav :navStatusData='getNavStatus()'></pc-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import heard from '@/components/headTop/head.vue'
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
    heard,
    pcNav
  }
}
</script>

<style lang="less" scoped>

</style>
