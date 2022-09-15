// <template>
  <div>
    fGHD
  </div>
</template>
  <!-- <div>
    <div class="news-view">
      <div class="news-list-nav">
        <button class="disabled fa fa-angle-right" @click="changePage(-1)">&lt;- prev</button>
          <button>{{ pageNumber }}/{{ paginate_total }}</button>
          <button @click.prevent="changePage(1)">
          more &gt;
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['total','per_page','current_page'],
  // props: { 
  //   total: {
  //     type: Number,
  //   },
  //   per_page: {
  //     type: Number,
  //   },
  //   change_page: {
  //     type: Function,
  //   },
  //   current_page: {
  //     type: Number,
  //   },
  // },
  data(){
    return{
      pageNumber:1,
      perpage:this.per_page[0]
    }
  },
  computed: {
    paginate_total() {
      
      const resminder = this.newsTop.length % this.perpage;
      if ( resminder > 0) {
        return Math.floor( this.newsTop.length / this.perpage) + 1;
      }else{
        return  this.newsTop.length / this.perpage;
      }
    },
//  created() {
//     this.pageNumber = this.current_page;
//   },
//  computed:{
//    current_page1(pageNumber) {
//      if(pageNumber >=30){
//       return this.current_page+1
//      }else{
//            return this.current_page
//      }
//     }
//   },
  // change_page(){
  //     this.current_page = this.indexlast++;
       
  // },
  },
  methods:{
    changePage(val){
         switch(val){
          case 0: this.pageNumber=1;
          break;
          case -1: this.pageNumber=this.pageNumber>1 ? this.pageNumber -1 :this.pageNumber; 
          break;
          case 1:this.pageNumber= this.pageNumber< this.paginate_total ? this.pageNumber+1:this.pageNumber;
          break;
          case this.paginate_total:this.pageNumber=this.paginate_total;
          break;
         }
         this.$emit('input',{pageNumber:this.pageNumber,per_page:this.per_page})
    }
  }
} -->
<!-- </script> -->
<style scoped>
.news-list-nav {
  padding: 15px 30px;
  background-color: #fff;
  border-radius: 2px;
  position: fixed;
  text-align: center;
  top: 55px;
  left: 0;
  right: 0;
  z-index: 998;
  box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
}
.news-view {
  padding-top: 4px;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}
.news-list-nav .disabled {
  color: #ccc;
}
.news-list-nav button {
  margin: 0 1em;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
}
</style>