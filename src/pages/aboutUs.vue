<template>
  <div class="aboutUs" @click="getPostData()">

  </div>
</template>

<script>
  import {phtservice} from '../assets/js/phtservice'
export default {
   data () {
    return {
    }
},
  methods:{
     getPostData:function () {
       phtservice.globalGetData('http://www.tuling123.com/openapi/api?info=%E4%BD%A0%E5%A5%BD&key=317aefe222b240dd86b2d25d3af66cde').then((data)=>{console.log(data)}
       )

     }
  }
  }
</script>

<style scoped>
  @import '../assets/css/common.css';
  .aboutUs{

  }

</style>
