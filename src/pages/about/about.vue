<template>
  <div class="phtIndex" v-title="'金梧桐'">
    <button @click="getData()">获取数据</button>
    <button @click="setGetData()">获取第二条数据</button>
    <div class="globalData">
      {{userInfo}}
    </div>
    <div class="text">

    </div>
  </div>

</template>

<script>
  import {phtservice}  from '../../assets/js/phtservice'
  import heard from '../../components/heard/heard.vue'
  export default {
    data() {
      return {
      }
    },
    methods:{
      getData:function () {
        let headerData =phtservice.header('','pc','web','project_platform','1.0');
        let data ={
          headerData,
          'request': {
            'params': {
              'CURR_PAGE_NUM': 1,
              'CUST_ID': '151318',
              'CUST_TYPE': '1',
              'PER_PAGE_SIZE': 4,
              'PROJ_CODE': 'DPS201710110001',
              'QUERY_TYPE': '3',
              'USER_ID': '151318',
              'USER_TYPE': '1'
            },
            'saveOperTokenCode': '',
            'tokenCode': ''
          }
        };
        phtservice.globalPostData('/api/handler/ProjapprHandler!queryMainPageTotalDataFor4_0.action',data).then((data)=>{console.log(data)}
        )

      },
      setGetData:function() {

        let headerData =phtservice.header('','pc','web','project_platform','1.0');
        let data ={
          headerData,
          'request': {
            'params': {
              'BIND_TYPE':'1',
              'PAY_FLAG':'1'
            },
            'saveOperTokenCode': '',
            'tokenCode': ''
          }
        };
        phtservice.globalPostData('/data/user/query/1.0/selectXwBank/1.0',data).then((data)=>{console.log(data)}
        )

      }
    },
    components:{
    }
  }
</script>

<style scoped>
  @import '../../assets/css/common.css';


</style>
