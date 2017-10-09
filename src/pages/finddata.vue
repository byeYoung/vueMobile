<template>
  <div class="findData">
  </div>
</template>

<script>
export default {
   data () {
    return {

    }
},
  methods:{
     findData:function () {
       console.log(this.$store.state.projects);
       console.log(this.$store.state.b);
       console.log(sessionStorage.getItem('key'))
     }
  }
}
</script>

<style scoped>
  @import '../assets/css/common.css';

</style>
