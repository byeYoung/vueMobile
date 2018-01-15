<template>
  <div id="app">
    <heard :echo="parentMsg"></heard>
    <pc-nav></pc-nav>
    <router-view :card="parentCard"></router-view>
  </div>
</template>

<script>
  import heard from '@/components/heard/heard.vue'
  import pcNav from '@/components/nav/nav.vue'
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
    pcNav
  }
}
</script>

<style scoped>

</style>
