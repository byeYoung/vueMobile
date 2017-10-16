<template>
  <div class="home" v-title="'普惠通'">
    <div class="home_container"></div>
    {{card}}
    <button @click="getData()">试试看</button>
  </div>
</template>

<script>
  import {phtservice}  from '../../assets/js/phtservice'
  import bus  from '../../assets/js/bus'
export default {
  props:{
    card: String
  },
   data () {
    return {

    }
},
  mounted(){
     this.getData();
     console.log(this.card);
  },

  methods:{
     getData:function () {
       phtservice.setStore('login',false);

     },

  },
components:{

}
}
</script>

<style scoped>
  @import '../../assets/css/common.css';
</style>
