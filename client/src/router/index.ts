import { createRouter, createWebHistory, RouteRecord, RouteRecordRaw } from "vue-router";

import Home from '../pages/Home.vue';
import Todo from '../pages/Todo.vue';
import Login from '../pages/Login.vue';
import Generic from '../pages/Generic.vue';
import Signup from '../pages/Signup.vue';
import { useSession } from '../models/session';
import Calendar from '../pages/Calendar.vue';
import About from '../pages/About.vue';


const routes: RouteRecordRaw[ ] = [
  { path: '/calendar/:handle?', component: Calendar },
  { path: '/', component: Home },
  { path: '/todo/:handle?', component:  Todo},
  { path: '/about', component: About },
  { path: '/issue', component: Generic, props: { title: "Will reach you soon! Thank you for being patient!  " } },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'is-active', 
})
//Guards
router.beforeEach((to, from) => {
  const session = useSession();
    if(session.destinationUrl == null) {
      session.destinationUrl == to.path;
    }
    const protectedUrls = ['/calendar', '/todo'];

    if(protectedUrls.includes(to.path.toLowerCase())) {
      console.log('requires login');
        if(!session.user) {
            return '/login';
        }
    }
})

export default router;