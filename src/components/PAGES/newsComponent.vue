<template>
  <div>
  <newsComp></newsComp>

  <!-- <singleUserNews
    :id="story.id"
    :by="story.by"
    :time="story.time"
    :title="story.title"
    :score="story.score"
  ></singleUserNews>
  <div v-for="news in comments" :key="news">
    <NewComments
      :id="news.id"
      :by="news.by"
      :title="news.title"
      :score="news.score"
      :time="news.time"
      :url="news.url"
     

      
    > -->
   
  </div>
</template>
<script>
// import singleUserNews from "../singleUser/singleUserNews.vue";
// import NewComments from "../commentsPage/NewComments.vue";
import newsComp from "../UI/UiForNews/newsComp.vue";
// import axios from "axios";
export default {
//   data() {
//     return {
//       story: {},
//       comments: [],
//     };
//   },
  components: {
    newsComp,
//     // singleUserNews,
//     // NewComments,
  },
//   mounted() {
//     axios
//       .get(
//         `https://hacker-news.firebaseio.com/v0/item/${this.$route.params.id}.json`
//       )
//       .then((response) => {
//         this.story = response.data;
//         console.log(this.story);
//         this.story.comments = [];
//         this.story.kids.forEach((id) => {
//           axios
//             .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
//             .then((response) => {
//               this.comments.push(response.data);
//               console.log(this.comments);
//             })
//             .catch((err) => {
//               console.log(err);
//             });
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   },
//   methods: {
//     timeAgo(time) {
//       const between = Date.now() / 1000 - Number(time);
//       if (between < 3600) {
//         return this.pluralize(~~(between / 60), " minute");
//       } else if (between < 86400) {
//         return this.pluralize(~~(between / 3600), " hour");
//       } else {
//         return this.pluralize(~~(between / 86400), " day");
//       }
//     },
//     pluralize(time, label) {
//       if (time === 1) {
//         return time + label;
//       }
//       return time + label + "s";
//     },
//   },
};
</script>
<style scoped>
</style>