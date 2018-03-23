<template>
  <div>
    <input type="text" placeholder="请输入验证码" @blur="picCode" v-model="publicCode">
    <input type="button" class="codeActive" id="code" @click="createCode" v-model="checkCode">
  </div>
</template>

<script>

  export  default ({
    data () {
      return {
        publicCode: '',
        checkCode: '',
        flag: ''
      }
    },
    methods: {
      createCode: function() {
        var code = ''
        this.checkCode =''
//        验证码长度
        let codeLength = 4
//        生成随机数
        let random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',

          'S','T','U','V','W','X','Y','Z')
        for(var i=0; i<codeLength; i++) {
//          取得随机数（0-35）
          let index = Math.floor(Math.random()*36)
//          根据索引取得随机数加到code上
          code += random[index]
        }
//        把code值赋值给验证码
        this.checkCode = code
      },
//      失去焦点
      picCode: function() {
//        验证码转成大写
        this.publicCode.toUpperCase()
        if(this.publicCode == '') {
         this.flag = 0
        }else if(this.publicCode.toUpperCase() !=this.checkCode) {
          this.flag = 1
//          刷新验证码
          this.createCode()
          this.publicCode = ''
        }else{
          this.flag = 2
        }
        console.log(this.flag)
        this.$emit("checkNewCode",this.flag)
      }
    },
    created () {
      this.createCode()
    }
  })
</script>

<style lang="less" scoped>
  .codeActive{
    width:93px;
    height:40px;
  }
</style>
