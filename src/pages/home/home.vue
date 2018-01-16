<template>
  <div class="home" v-title="'普惠通'">
      <pc-nav></pc-nav>
    <div class="home_container"></div>
    {{card}}
    <button @click="getData()">试试看</button>
    <pagination :pageNum="page" :showItem=5 :allpage=10  @currentPage = "currentPage"></pagination>

    <div class="lll">

    </div>
  </div>
</template>

<script>
  import {phtservice}  from '../../assets/js/phtservice'
  import pcNav from '@/components/nav/nav.vue'
  import pagination    from '../../components/pagination/pagination.vue'
  import bus  from '../../assets/js/bus'
export default {
  props:{
    card: String
  },
   data () {
    return {
      page:9

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
    currentPage:function (data) {
      this.page =data;

    }

  },
components:{
  pagination,
  pcNav
}
}
</script>

<style scoped>
  @import '../../assets/css/common.css';
</style>
