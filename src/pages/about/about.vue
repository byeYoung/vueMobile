<template>
  <div class="phtIndex" v-title="'关于我们'">
    <button @click="getData()">获取数据</button>
    <button @click="setGetData()">获取第二条数据</button>
    <div class="globalData">

    </div>
    <div class="text">
    {{loginStatus}}
    {{navStatus}}
    </div>
  </div>

</template>

<script>
  import {phtservice}  from '../../assets/js/phtservice'
  import headTop from '../../components/headTop/head.vue'
  import {mapGetters, mapActions, mapState} from 'vuex'
  export default {
  data() {
    return {
    }
  },
  mounted(){
    this.getNavStatus()
  },
  computed:{
    ...mapGetters([
      'loginStatus','navStatus'])
  },
   methods:{
     //调取action的方法
     ...mapActions({ setNavStatus: 'setNavStatus' }),
     getNavStatus () {
       //给选中的当行赋值
       this.setNavStatus(5)
   },
  getData:function () {
      let data =phtservice.submitData( {
        'CURR_PAGE_NUM': 1,
        'CUST_ID': '151318',
        'CUST_TYPE': '1',
        'PER_PAGE_SIZE': 4,
        'PROJ_CODE': 'DPS201710110001',
        'QUERY_TYPE': '3',
        'USER_ID': '151318',
        'USER_TYPE': '1'
      });
      console.log(data)
      this.data = data
      phtservice.globalPostData('/api/handler/ProjapprHandler!queryMainPageTotalDataFor4_0.action',data).then((data)=>{console.log(data)}
      )
    }
  },
  components:{
  }
}
</script>

<style scoped>

</style>
