<template>
  <div class="about" v-title="'关于我们'">
    <div></div>
  </div>
</template>
<script>
<<<<<<< HEAD
  export default {
=======
  import {phtservice}  from '../../assets/js/phtservice'
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
   ...mapActions({ setNavStatus: 'setNavStatus' }),
   getNavStatus () {
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
    },
>>>>>>> 460dec9989f9231c358ea728fe308c50b7296acf

  }
</script>
<style scoped>
  @import '../../assets/css/common.css';


</style>
