<template>
  <!-- <PaginationComp></PaginationComp> -->
  <div class="news-view">
      <div class="news-list-nav">
        <button class="disabled fa fa-angle-right" @click="changePage(pagination.pageNumber--)">
          &lt;- prev
        </button>
        <button>{{ pagination.pageNumber }}/{{ paginate_total }}</button>
        <button @click.prevent="changePage(pagination.pageNumber++)">more &gt;</button>
      </div>
    </div>
  <section>
    {{showsNew.length}}
    <div v-for="news in computeddata" :key="news">
      <div class="container">
        <div class="numberLength">{{ news.descendants }}</div>
        <div class="main">
          <h5>
            <a :href="news.url" id="tag" target="_blank">{{ news.title }}</a>
            ({{ news.url }})
          </h5>
          <p>
            by
            <router-link to='/singleShow'>{{ news.by }} | </router-link>
            1 day ago |
            <router-link to='/showComment'
              >{{ news.score }} comments</router-link
            >
          </p>
        </div>
      </div>
      <!-- <span class="hr"></span> -->
    </div>
  </section>
</template>
  <script>
import axios from "axios";
// import PaginationComp from '../../Layout/PaginationComp.vue'
const perpage =[ 30, 60, 90, 120, 150, 180, 210, 240, 370, 300, 330, 360, 390, 420,450,480,510,540,570,600,630,660,690,720,750,780,810,840,70,900
];
export default {
  props: ["id"],
  data() {
    return {
      showsNew: [],
      perpage,
      pagination: { pageNumber: 1, perpageOption: perpage[0] },
      paginate: 30,
      pageNumber: 1,
      per1page: perpage[0],
    };
  },
  // watch:{
  //   showsNew(){
  //     if(this.showsNew>this.perpage){
  //       return null
  //     }
  //   }
  // },
  computed: {
    computeddata() {
      if (!this.showsNew) return [];
      else {
        const firstindex =
          (this.pagination.pageNumber - 1) * this.pagination.perpageOption;
        const lastindex =
          this.pagination.pageNumber * this.pagination.perpageOption;
        console.log(firstindex, lastindex + "hasfjhasd");
        return this.showsNew.slice(firstindex, lastindex);
      }
    },
    paginate_total() {
      const resminder = this.showsNew.length % this.per1page;
      if (resminder > 0) {
        return Math.floor(this.showsNew.length / this.per1page) + 1;
      } else {
        return this.showsNew.length / this.per1page;
      }
    },
  },
  async beforeMount() {
    await axios
      .get("https://hacker-news.firebaseio.com/v0/showstories.json")
      .then((response) => {
        let stories = response.data;
        stories.forEach((Id) => {
          axios
            .get(`https://hacker-news.firebaseio.com/v0/item/${Id}.json`)
            .then((response) => {
              this.showsNew.push(response.data);
              console.log(this.showsNew);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      });
  },
  methods:{
    changePage(val) {
      switch (val) {
        case 0:
          this.pageNumber = 1;
          break;
        case -1:
          this.pageNumber =
            this.pageNumber > 1 ? this.pageNumber - 1 : this.pageNumber;
          break;
        case 1:
          this.pageNumber =
            this.pageNumber < this.paginate_total
              ? this.pageNumber + 1
              : this.pageNumber;
          break;
        case this.paginate_total:
          this.pageNumber = this.paginate_total;
          break;
      }
      // this.computeddata(this.pageNumber,perpage);
      this.computeddata;
      this.pagination;
     
      // this.$emit("input", {
      //   pageNumber: this.pageNumber,
      //   per1page: this.per_page,
      // });
    },
  }
};
</script>
  <style  scoped>
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
section {
  margin: 60px auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  width: 40%;
  height: fit-content;
}
.container {
  width: 100%;
  height: 100px;
  margin: 10px auto;
  padding: 25px;
  display: flex;
}
.numberLength {
  width: 4%;
  /* height: 0px; */
  margin: auto;
  font-size: 17px;
  font-weight: 700;
  color: #f97127;
}
.main {
  width: 90%;
  height: 100px;
  margin: auto;
  font-size: 15px;
  color: rgb(114, 114, 114);
}
h5 {
  /* font-size:20px; */
  padding: 10px 0 5px 0;
  margin: 0;
}
#tag {
  text-decoration: none;
}
p {
  font-size: 13px;
  margin: 0;
  padding: 0;
}
span:hover {
  color: #f97127;
}
a {
  color: gray;
}
.hr {
  width: 100%;
  height: 1px;
  background: lightgray;
}
span {
  text-decoration: underline;
}
</style>
  
  