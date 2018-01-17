<template>
  <div id="app">
    <heard></heard>
      <pc-nav></pc-nav>
    <router-view></router-view>
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
