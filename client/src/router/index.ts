import { createRouter, createWebHistory, RouteRecord, RouteRecordRaw } from "vue-router";

import Home from '../pages/Home.vue';
import Todo from '../pages/Todo.vue';
import Login from '../pages/Login.vue';
import Generic from '../pages/Generic.vue';
import Signup from '../pages/Signup.vue';
import session from '../models/session';
import Calendar from '../pages/Calendar.vue';
import About from '../pages/About.vue';

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.

const routes: RouteRecordRaw[ ] = [
  { path: '/calendar', component: Calendar },
  { path: '/', component: Home },
  { path: '/todo', component:  Todo},
  { path: '/about', component: About },
  { path: '/issue', component: Generic, props: { title: "Will reach you soon! Thank you for being patient!  " } },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
]
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes,
  linkActiveClass: 'is-active', // short for `routes: routes`
})
//Guards
router.beforeEach((to, from) => {
    if(session.destinationUrl == null && to.path != '/login'){
      session.destinationUrl = to.path;
    }
    const protectedUrls = ['/calendar', '/todo'];

    if(protectedUrls.includes(to.path)) {
      console.log('requires login');
        if(!session.user) {
            return '/login';
        }
    }
})

export default router;