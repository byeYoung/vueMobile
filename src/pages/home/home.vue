<template>
  <div class="home" v-title="'普惠通'">
    <div class="home_container"></div>
   <loop></loop>
  </div>
</template>

<script>
  import {phtservice}  from '../../assets/js/phtservice'
  import bus  from '../../assets/js/bus'
  import loop from '@/components/loop/loop.vue'
export default {
   data () {
    return {

    }
},
  mounted(){

  },

  methods:{


  },
components:{
loop
}
}
</script>

<style scoped>
  @import '../../assets/css/common.css';
</style>
