<template>
  <div>
    <header>
      <nav>
        <ul  >
          <img src="../../assets/logo.png" alt="logo-image" />
          <li v-for="nav in navbars" :key="nav">
            <router-link v-bind:class="{ isactive : ( nav.id === isactived)}" v-on:click="activationNavbar(nav.id)" :to="nav.link">{{ nav.name }}</router-link>
          <!-- <span>{{isactiveId}}</span> -->
          </li>
        </ul>
        <div class="link">
          <a href="https://github.com/vuejs/vue-hackernews-2.0" target="_blank"
            >Built with Vue.js</a
          >
        </div>
      </nav>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isactived: 0,
      navbars: [
        {
          id: 1,
          name: "Top",
          link: "/top",
        },
        {
          id: 2,
          name: "New",
          link: "/news",
        },
        {
          id: 3,
          name: "Show",
          link: "/shows",
        },
        {
          id: 4,
          name: "Ask",
          link: "/ask",
        },
        {
          id: 5,
          name: "Jobs",
          link: "/jobs",
        },
      ],
    };
  },
  methods:{
    activationNavbar(id){
      this.isactived === id
    }
  }
};
</script>
<style scoped>
header {
  width: 100%;
  height: 3.3rem;
  background-color: #f60;
  position: fixed;
  z-index: 999;
  height: 55px;
  top: 0;
  left: 0;
  right: 0;
}
/* .news-list-nav {
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
.news-list-nav a {
  margin: 0 1em;
  text-decoration: none;
} */
header a {
  text-decoration: none;
  /* color: #ffffff;
  display: inline-block; */
  padding: 0 1rem;
  border: 0.5px solid transparent;
  color: hsla(0, 0%, 100%, 0.8);
  line-height: 24px;
  transition: color 0.15s ease;
  display: inline-block;
  vertical-align: middle;
  font-weight: 300;
  letter-spacing: 0.075em;
  margin-right: 0.5em;
}
header ul img {
  width: 25px;
  margin-right: 1.5em;
}
.link {
  width: 40%;
}
header nav {
  width: 60%;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

li {
  margin: 0 0rem;
}
/* .isactive {
  font-weight: 800;
  color: rgb(237, 237, 237);
} */
a.router-link-exact-active{
   color: rgb(237, 237, 237);
   font-weight:400;
}

/* pagination */
/* .pagination {
  display: inline-block;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
} */
</style>