<template>
  <div class="section">
    <div class="head">
      <div class="heading">
        <h1>{{ shows.title }}</h1>
      </div>
      <div class="link">({{ shows.url }})</div>
    </div>
    <div class="para">
      <p>
        {{ shows.score }} points | by
        <router-link to="/singleShow">{{
          shows.by
        }}</router-link>
        | {{ timeAgo(shows.time) }} ago
      </p>
    </div>
  </div>
  <div>
    <div class="main-section">
      <div class="all-data">
        <ul>
          <p>{{ comments.length }} comments</p>
          <hr />
          <li v-for="item in comments" :key="item.id">
            <p>
              <a href="#">{{ item.by }}</a> {{ timeAgo(item.time) }} ago
            </p>
            <p v-html="item.text"></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  <script>
import axios from "axios";
// import
export default {
  name: "commentsTop",
  data() {
    return {
      shows: {},
      comments: [],
      // header: false,
    };
  },
  mounted() {
   axios
      .get(
        `https://hacker-news.firebaseio.com/v0/item/${this.$route.params.id}.json`
      )
      .then((response) => {
        this.shows = response.data;
        console.log(this.shows);
        this.story.comments = [];
        this.shows.kids.forEach((id) => {
          axios
            .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then((response) => {
              this.comments.push(response.data);
              console.log(this.comments);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      }).catch((err) => {
        console.log(err);
      });
  },
  methods: {
    timeAgo(time) {
      const bet = Date.now() / 1000 - Number(time);
      if (bet < 3600) {
        return this.pushlized(~~(bet / 60), "  minute");
      } else if (bet < 86400) {
        return this.pushlized(~~(bet / 3600), "  hour");
      } else {
        return this.pushlized(~~(bet / 86400), "  day");
      }
    },
    pushlized(time, label) {
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
  margin: 50px auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  width: 45%;
  height: 120px;
  background-color: #fff;
  color: #34495e;
  box-sizing: border-box;
}
.head {
  margin: 0;
  display: flex;
  padding: 1.8em 2em 1em;
  align-content: center;
  justify-content: center;
}
.heading h1 {
  margin: 0;
  font-size: 16px;
  padding: 0;
}
.link {
  font-size: 14px;
  padding: 0 0 0 10px;
}
.para {
  display: inline-flex;
  width: 100%;
  padding: 1em 4em;
}
.para a {
  color: #34495e;
}
.main-section {
  background-color: #fff;
  padding: 0 2em 0.5em;
  margin: 0px auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  width: 45%;
}
.all-data {
  margin: 0;
  font-size: 1.25em;
  padding: 1.5em 0;
  position: relative;
}
.all-data p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  font-size: 1.2em;
  margin-inline-end: 0px;
}
.all-data ul li {
  border-top: 1px solid #eee;
  position: relative;
  display: list-item;
  text-align: -webkit-match-parent;
  list-style-type: decimal-leading-zero;
  padding: 0;
  margin: 0;
  font-size: 13px;
  margin: -1em 0;
}
.all-data ul li a,
p {
  color: #34495e;
  cursor: pointer;
}
</style>