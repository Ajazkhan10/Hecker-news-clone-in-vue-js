<template>
  <TheHeader></TheHeader>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/Layout/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>

<style>
body {
  font-family:-apple-system,BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
  Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 15px;
  
  margin: 0;
  padding-top: 55px;
  overflow-y: scroll;
}
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
  /* background-color: #f2f3f5; */
}

/* main design start here */
</style>
