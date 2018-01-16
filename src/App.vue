<template>
  <div id="app">
    <heard :echo="parentMsg"></heard>
    <router-view :card="parentCard"></router-view>
  </div>
</template>

<script>
  import heard from '@/components/heard/heard.vue'
export default {
  name: 'app',
  data () {
    return {
      parentMsg: '普惠通',
      parentCard: '金梧桐',
    }
  },
  methods:{

  },
  components:{
    heard,
  }
}
</script>

<style scoped>

</style>
