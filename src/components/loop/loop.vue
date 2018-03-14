<template>
  <div class="swiper-container">
       <div class="swiper-wrapper">
        <div class="swiper-slide" style="background-image:url('https://www.phtfdata.com//file/file/WEB_PIC/banner_pic//1515420731295.jpg')"></div>
        <div class="swiper-slide" style="background-image:url('https://www.phtfdata.com//file/file/WEB_PIC/banner_pic//1515420731295.jpg')"></div>
        <div class="swiper-slide" style="background-image:url('https://www.phtfdata.com//file/file/WEB_PIC/banner_pic//1515613199857.png')"></div>
        <div class="swiper-slide" style="background-image:url('https://www.phtfdata.com//file/file/WEB_PIC/banner_pic//1512516321950.png')"></div>
      </div>
      <!-- Add Pagination -->
       <div class="swiper-pagination swiper-pagination-white"></div>
      <!-- Add Arrows -->
      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
  </div>
</template>

<script>
  import { phtservice } from '../../assets/js/phtservice'
  import { mapState, mapGetters, mapActions} from 'vuex'
  import Swiper from '../../../static/idangerous.swiper'
  export default {
    data () {
      return {
        bannerList:null
      }
    },
    mounted () {
      this.lunbo()
    },
    methods: {
      lunbo () {
        phtservice.globalPostData('/apis/msgcenter/query/1.0/getBanner/1.0',phtservice.submitData({"FILE_TYPE": 'banner_pic'})).then((data) => {
          this.bannerList =data;
        })
        var swiper = new Swiper('.swiper-container', {
          loop: true,
          autoplay: 3000,
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
