<template>
  <div class="loop">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="background-image:url(../../../static/lbt1.jpg)"></div>
        <div class="swiper-slide" style="background-image:url(../../../static/lbt2.jpg)"></div>
        <div class="swiper-slide" style="background-image:url(../../../static/lbt3.jpg)"></div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination swiper-pagination-white"></div>
      <!-- Add Arrows -->
      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
    </div>

  </div>
</template>

<script>
  import Swiper from '../../../static/idangerous.swiper';
  export default {
    data () {
      return {
      }
    },
    mounted () {
      this.lunbo()
    },
    methods: {
      lunbo () {
        var swiper = new Swiper('.swiper-container', {
          loop: true,
          autoplay: 1000,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          preventClicks : false,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          noSwiping : true,
          effect : false,
          autoplayDisableOnInteraction : false,
        });
        $(".swiper-container").mouseenter(function () {//滑过悬停
          swiper.stopAutoplay();//mySwiper 为上面你swiper实例化的名称
        }).mouseleave(function(){//离开开启
          swiper.startAutoplay();
        });
      }

    }
  }
</script>

<style scoped>
  @import '../../assets/css/common.css';
  @import '../../assets/css/idangerous.swiper.css';
  html, body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    width: 100%;
    height: 500px;
    cursor: pointer;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
  }
</style>
