<template>
  <div class="section">
    <h1>User: {{ story.id }}</h1>
    <div class="view">
      <p>Created: {{ timeAgo(story.created) }} Ago</p>
      <p>Karma: {{ story.karma }}</p>
    </div>
    <div class="links">
      <router-link :to="{ path: '/submissions' + story.id }">Submissions</router-link> |
      <router-link to="/showComment">comments</router-link>
    </div>
  </div>
</template>
  <script>
import axios from "axios";
export default {
  //  props: ["score", "title", "id", "by",'time'],
  data() {
    return {
      story: {},
    };
  },
  async created() {
    await axios
      .get(
        `https://hacker-news.firebaseio.com/v0/user/${this.$route.params.id}.json`
      )
      .then((response) => {

        this.story = response.data;
        console.log(this.story);
        // let storys=response.data
        //     storys.forEach(Id => {
        //      axios.get(`https://hacker-news.firebaseio.com/v0/item/${Id}.json`).then((response)=>{
        //         this.story.push(response.data);
        //         console.log(this.story)
        //      }).catch((err)=>{
        //         console.log(err)
        //      });
        //     });
      })
      .catch((err) => {
        console.log(err);
      })
  },

  methods: {
    timeAgo(time) {
      const between = Date.now() / 1000 - Number(time);
      if (between < 3600) {
        return this.pluralize(~~(between / 60), " minute");
      } else if (between < 86400) {
        return this.pluralize(~~(between / 3600), " hour");
      } else {
        return this.pluralize(~~(between / 86400), " day");
      }
    },
    pluralize(time, label) {
      if (time === 1) {
        return time + label;
      }
      return time + label + "s";
    },
  },
};
</script>
  <style scoped>
.section {
  margin: 60px auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  width: 40%;
  height: fit-content;
  background-color: #fff;
  color: #34495e;
  box-sizing: border-box;
  padding: 2.5em 3em;
}
h1 {
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.view p {
  max-width: 800px;
  margin: auto;
  position: relative;
  padding: 0.357em 0em;
  font-size: 1.2em;
  font-weight: 400;
}
.links {
  width: 100%;
  padding: 1em 0em;
}
.links a {
  color: #34495e;
}
</style>