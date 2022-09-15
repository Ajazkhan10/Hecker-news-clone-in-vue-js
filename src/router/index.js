import { createRouter, createWebHistory } from "vue-router";
import topComponentHome from "../components/PAGES/topComponentHome.vue";
import askComponent from "../components/PAGES/askComponent.vue";
import jobsComponent from "../components/PAGES/jobsComponent.vue";
import newsComponent from "../components/PAGES/newsComponent.vue";
import showsComponent from "../components/PAGES/showsComponent.vue";

import singleUserTop from "../components/singleUser/singleUserTop.vue";
import commentsTop from "../components/commentsPage/commentsTop.vue";
// import topInsidesElements from "../components/UI/UiForTOP/topInsidesElements.vue";
import singleUserNews from '../components/singleUser/singleUserNews.vue'
import NewComments from '../components/commentsPage/NewComments.vue'
import componentShow from '../components/commentsPage/commentShow.vue'
import singleUserShow from '../components/singleUser/singleUserShow.vue'
// function isAuthenticated() {
//   return false;
// }
import jobCoomment from '../components/commentsPage/jobCoomment.vue'
import askComment from '../components/commentsPage/askComment.vue'

import singleAsk from '../components/singleUser/singleAsk.vue'
import singleJobs from '../components/singleUser/singleJobs.vue'
const routes = [
  {
    path: "/",
    redirect: "/top",
  },
  {
    path: "/top",
    name: "topnew",
    component: topComponentHome,
  },

  
  {
    path:'/user/:id',
    name:'insideUserComment',
    component:singleUserTop,

  },
  {
    path:'/user/:id',
    name:'user',
    component:singleUserTop,

  },
  {
    path:'/item/:id',
    name:'item',
    component:commentsTop,

  },
  ///
  {
    path: "/askComment",
    name: "askComment",
    component: askComment,
  },
  {
    path: "/jobCoomment",
    name: "jobCoomment",
    component: jobCoomment,
  },
  {
    path: "/singleAsk",
    name: "singleAsk",
    component: singleAsk,
  },
  {
    path: "/singleJobs",
    name: "singleJobs",
    component: singleJobs,
  },
  /////
  // {
  //   path: "/top/user/:id",
  //   name: "topside",
  //   component: topComponentHome,
  //   children: [
  //     {
  //       path: '/user',
  //       name: "user",
  //       component: singleUserTop,
  //     },
  //     {
  //       path: '/userid',
  //       name: "userid",
  //       component: commentsTop,
  //     },
  //   ],
  // },
  // {
  // path: '/top',
  // component: topInsidesElements,
  // children: [
  //   <^> {
  //     path: '/top/id',
  //     component: commentsTop
  //   },
  //   {
  //     path: '/top/name',
  //     component: singleUserTop
  //   }
  // ]
  // },
  // {
  //   path: '/name=',
  //   component: singleUserTop,
  //   beforeEnter(to, from, next) {
  //     if (isAuthenticated()) {
  //       next(to.);
  //     } else {
  //       next('/id=');
  //     }
  //   }
  // },
  // {
  //   path: "/top/:id",
  //   name: "topsingle",
  //   component: singleUserTop,
  // },
  //top finish
  {
    path: "/ask",
    props:true,
    name: "askNews",
    component: askComponent,
  },
  {
    path: "/jobs",
    name: "jobsNews",
    props:true,
    component: jobsComponent,
  },
  //new start
  {
    path: "/news",
    name: "newsNews",
    props:true,
    component: newsComponent,
  },
  {
    path:'/newsName/:name',
    props:true,
    name:'userNew',
    component:singleUserNews
  },
  // {
  //   path:'/newsname/:name',
  //   name:'userNew',
  //   comsponet:NewComments
  // },
  {
    path: '/user/:id',
    props:true,  
    component: newsComponent,
    // notice how only the child route has a name
    children: [
      { path: '', name: 'user', component: singleUserNews },
      // { path: '', name: 'userid', component: NewComments },
  ],
  },
  {
    path:'/comments',
    name:'comment',
    component:NewComments
  },
  {
    path:'/singleShow',
    name:'show',
    component:singleUserShow
  },
  { path: '/item/:id(\\d+)', component: commentsTop },
  { path: '/user/:id', component: singleUserTop },
  // {
  //   path: '/usereee/:id',
  //   component: newsComponent,
  //   // notice how only the child route has a name
  //   children: [
  //     { path: '/usereee/', name: 'user', component: NewComments },
  // ],
  // },
  // end oof new
  {
    path: "/shows",
    name: "showsNews",
    component: showsComponent,
  },
  {
    path:'/showComment',
    name:'showComment',
    component:componentShow
  },
  //   {
  //     path: "/coaches/:id",
  //     component: coachDeatils,
  //     props: true,
  //     children: [{ path: "contact", component: contactCoach }],
  //   },

  //   {
  //     path: "/requests",
  //     name: "requests",
  //     component: requestRecives,
  //     meta:{requiresAuth:true}
  //   },

  // {
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     // import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
