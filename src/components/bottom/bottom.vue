<template>
  <div class="bottom">
    <div class="bottom-container">
      <div class="friend-link clearfix">
        <p class="linkp">友情链接</p>
        <ul class="friend-busi clearfix">
          <li>
            <p><a href="http://www.cqsscsh.com/">重庆市四川商会</a></p>
            <p><a href="http://www.bjscc.org/">云南省四川商会</a></p>
          </li>
          <li>
            <p><a href="https://www.xwbank.com/">新网银行</a></p>
            <p><a href="http://www.wdzj.com/">网贷之家</a></p>
          </li>
          <li>
            <p><a href="http://www.bjscc.org/">吉林省川渝商会</a></p>
            <p><a href="http://www.sxscsh.com/">山西省四川商会</a></p>
          </li>
          <li>
            <p><a href="http://www.gzscsh.com/">贵州省四川总商会</a></p>
            <p><a href="http://www.bjscc.org/">北京四川企业商会</a></p>
          </li>
          <li>
            <p><a href="http://www.pki.org.cn/">国家信息安全工程技术研究中心</a></p>
            <p><a href="http://www.csii.com.cn/">北京柯蓝软件系统股份有限公司</a></p>
          </li>
          <li>
            <p><a href="http://www.scsgsl.cn/">四川总商会</a></p>
          </li>
        </ul>
      </div>
      <div class="bottom-company clearfix">
        <div class="bottom-left">
          <div class="company-site">
            <p>公司站点</p>
            <p>关于我们</p>
            <p>安全保障</p>
            <p>媒体报道</p>
            <p>业务产品</p>
            <p>发展历程</p>
            <p>联系我们</p>
            <p>新手帮助</p>
          </div>
          <div class="server">
            <p>客户服务</p>
            <p>微信公众号 : JinWuTongFuWuPingTai(金梧桐互联网金融服务平台)</p>
            <p>400-159-8866 (9:00-21:00)</p>
          </div>
        </div>
        <div class="bottom-right">
          <img src="../../assets/images/bottom/erwei.png" alt="">
        </div>
      </div>
      <div class="bottom-footer">
        <p>
          <span>&copy;2017金梧桐 All Rights Reserved &nbsp;|</span>
          <span>北京普惠通数据信息技术有限公司 &nbsp;|</span>
          <span>京ICP备14046794号 -1  &nbsp;|</span>
          <span><a href="">
            <img src="../../assets/images/bottom/beian.png" alt="">
            京公网安备 11010802025070号
          </a></span>
        </p>
        <div class="clearfix">
          <p class="norton"></p>
          <p class="honesty"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
  .bottom{
    background:#d0d0ce;
    .bottom-container{
      width: 1000px;
      height:100%;
      margin:0 auto;
      .friend-link{
        padding:24px 0;
        border-bottom:1px solid #b5b5b6;
        .linkp{
          float: left;
          padding-right:47px;
          font-size: 13px;
          line-height: 20px;
          color: #808080;
        }
        .friend-busi{
          float: left;
          li{
            float: left;
            padding-left:30px;
            p{
              padding-right:21px;
              border-right:1px solid  #eae9e9;
            }
            p:first-child{
              padding-bottom:10px;
              a{
                font-size: 13px;
                line-height: 20px;
                color: #808080;
              }
              a:hover{
                color: rgb(153, 3, 2);
              }
            }
          }
          li:last-child p{
            border-right:0;
          }
        }
      }
      /*公司站点*/
      .bottom-company{
        width:100%;
        border-top:1px solid #efefef;
        border-bottom: 1px solid #b5b5b6;
        .bottom-left{
          float: left;
          .company-site{
            padding-top:25px;
            width: 780px;
            p{
              float: left;
              width:12.5%;
              text-align: center;
              padding-bottom:25px;
              color:#808080;
            }
            p:first-child{
              text-align: left;
            }
          }
          .server{
            p{
              float: left;
              color:#808080;
            }
            p:first-child{
              margin-right:65px;
            }
            p:last-child{
              margin-left:30px;
              font-size: 13px;
              color: #808080;
            }
          }
        }
        .bottom-right{
          float: right;
          img{
            height:100px;
          }
        }
      }
      .bottom-footer{
        width:100%;
        border-top:1px solid #efefef;
        padding-top:13px;
        p{
          width: 100%;
          text-align: center;
          span{
            color:#808080;
            img{
              vertical-align: middle;
            }
          }
        }
        div{
          width: 248px;
          padding:10px 0 20px 0;
          text-align: center;
          margin:0 auto;
          p{
            float: left;
            height:42px ;
          }
          .norton{
            width: 105px;
            margin-right: 8px;
            background: url("../../assets/images/bottom/1.jpg") no-repeat center;
          }
          .norton:hover{
            background: url("../../assets/images/bottom/2.jpg") no-repeat center;
          }
          .honesty{
            width: 116px;
            background: url("../../assets/images/bottom/cert2.jpg") no-repeat center;
          }
          .honesty:hover{
            background: url("../../assets/images/bottom/cert1.jpg") no-repeat center;
          }
        }
      }
    }
  }


















</style>
