<template>
  <div class="home" v-title="'普惠通'">
    <div class="homeContainer">
      <loop></loop>
      <bottom></bottom>
    </div>
  <!--{{loginStatus}}-->
  <!--{{navStatus}}-->
  </div>
</template>

<script>
  import {phtservice}  from '../../assets/js/phtservice'
  import bus  from '../../assets/js/bus'
  import loop from '@/components/loop/loop.vue'
  import  bottom from '@/components/bottom/bottom.vue'
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
        this.setNavStatus(0)
        this.setUserInfo({data:'1111'})
      }
    },
    components:{
      loop,
      bottom
    }
  }
</script>

<style scoped>
  @import '../../assets/css/common.css';
</style>
