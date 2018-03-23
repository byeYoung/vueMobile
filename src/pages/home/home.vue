<template>
  <div class="home" v-title="'普惠通'">
    <div class="homeContainer">
      <loop></loop>

    </div>
  <!--{{loginStatus}}-->
  <!--{{navStatus}}-->
  </div>
</template>

<script>
  import {phtservice}  from '../../assets/js/phtservice'
  import loop from '@/components/loop/loop.vue'
  import {mapGetters, mapActions,mapState} from 'vuex'
  export default {
     data () {
      return {

      }
    },
    computed: {
      ...mapGetters([
          'loginStatus','navStatus'

      ])
    },
    mounted(){
      this.connectServer()
    },
    methods:{
      ...mapActions({ setUserInfo: 'setUserInfo',
      setNavStatus: 'setNavStatus' }),
        connectServer() {

      }
    },
    components:{
      loop
    }
  }
</script>

<style scoped>
  @import '../../assets/css/common.css';
</style>
