<template>
  <div class="pagination-wrap" v-show="allpage>1">
    <ul class="pagination" >
      <li @click=" current!=1 ?current--&&goto(current):aaa()" ><a><<</a></li>
      <li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
        <a>{{index}}</a>
      </li>
      <li @click="allpage!=current ?(current++ && goto(current++)):aaa()"><a> >></a></li>
    </ul>
    <input type="text" class="page_input" onkeyup="this.value=this.value.replace(/\D/g,'')">
    <input type="button" value="跳转" class="skip" @click="skip()">
  </div>
</template>
<script>
  export default{

    name:'pagination',
    data(){
      return {
        current:this.pageNum
      }
    },
    props:{
      pageNum:null,
      showItem:null,
      allpage:null
    },
    computed:{
      pages:function(){
        var pag = [];
        if( this.current < this.showItem ){ //如果当前页 小于要显示的页数
          //总页数和要显示的条数那个大就显示多少条
          var i = Math.min(this.showItem,this.allpage); //Math.min  比较哪个小
          while(i){
            pag.unshift(i--); //渲染要显示的页数
          }
        }else{ //当前页数大于显示页数了
          var middle = this.current - Math.floor(this.showItem / 2 ),//从哪里开始
            i = this.showItem;
          if( middle >  (this.allpage - this.showItem)  ){
            middle = (this.allpage - this.showItem) + 1
          }
          while(i--){
            pag.push( middle++ );
          }
        }
        return pag
      }
    },
    methods:{
      goto:function(index){
        if(index == this.current) return;
        this.current = index;
      },
      skip:function () {
        let currentPage =$('.page_input').val();
        if (currentPage<1){
          return
        }else {
          this.$emit('currentPage',currentPage);

        }

      },
      aaa(){
      }
    }
  }
</script>
<style scoped>
  body{
    font-family:"Segoe UI";
  }
  li{
    list-style:none;
  }
  a{
    text-decoration:none;
  }
  .pagination-wrap{
    width: 100%;
    text-align: center;
    padding: 15px;
    box-sizing: border-box;
    user-select: none;
  }
  .pagination {
    position: relative;
    display: inline-block;
    font-size: 0;
  }
  .pagination li{
    display: inline-block;
    margin:0;
    box-sizing: border-box;
  }
  .pagination a{
    display:inline-block;
    border:1px solid #ddd;
    background:#fff;
    width: 35px;
    height: 35px;
    line-height: 35px;
    font-size: 14px;
    color:#30b579;
    border-right: 0;
    cursor: pointer;
  }
  .pagination li:first-child>a{
    border-radius:5px 0 0 5px;
  }
  .pagination li:last-child>a{
    border-radius:0 5px 5px 0;
    border-right: 1px solid #ddd;
  }
  .pagination li a:hover{
    background:#eee;
  }
  .pagination li.active a{
    background:#30b579;
    color:#fff;
  }
  .page_input{
    width: 33px;
    height: 33px;
    outline: none;
    border: 1px solid #ddd;
    border-radius:5px;
    text-indent: 6px;
  }
  .skip{
    display:inline-block;
    width: 35px;
    height: 35px;
    color: #fff;
    font-size: 12px;
    border: 1px solid #ddd;
    background: #30b579;
    cursor: pointer;
    outline: none;
  }
</style>
