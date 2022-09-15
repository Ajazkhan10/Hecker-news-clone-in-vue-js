<template>
  <div>
<!-- 
      <PaginationComp
        :current_page="current_page"
        :total="total"
        :per_page="per_page"
        @change_page="pageChange($event)"
      ></PaginationComp> -->
    
    <topInsidesElementsVue>

    </topInsidesElementsVue>
  </div>
</template>
<script>
 import axios from 'axios'
import topInsidesElementsVue from "../UI/UiForTOP/topInsidesElements.vue";
// import PaginationComp from "../../components/Layout/PaginationComp.vue";
export default {
  components: {
    topInsidesElementsVue,
    // PaginationComp,
  },
  data() {
    return {
      current_page: 1,
      total: 100,
      per_page: 10,
      data:[]
    };
  },
  methods: {
    pageChange(pageNumber) {
      this.current_page = pageNumber;
      this.getData();
    },
   async getData(){
    var response=await axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.current_page}.json`);
     var  responseData=response.data;
     this.data=responseData.data;
     this.per_page=responseData.per_page;
     this.total=responseData.total;
   },
  
  },
  mounted(){
    this.current_page=1;
    this.getData();
    
  }
};
</script>

<style scoped>
</style>>

