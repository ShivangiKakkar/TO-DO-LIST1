import { createRouter, createWebHistory, RouteRecord, RouteRecordRaw } from "vue-router";

import Home from '../pages/Home.vue';
import Tasks from '../pages/Tasks.vue';
import Login from '../pages/Login.vue';
import Generic from '../pages/Generic.vue';
import Signup from '../pages/Signup.vue';
import session from '../models/session';
import MonthlyCalendar from '../components/MonthlyCalendar.vue';
import Calendar from '../components/Calendar.vue';
import About from '../components/About.vue';
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.

const routes: RouteRecordRaw[ ] = [
  { path: '/calendar', component: Calendar },
  { path: '/', component: Home },
  { path: '/monthly', component: MonthlyCalendar },
  { path: '/tasks', component: Tasks },
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
    const protectedUrls = ['/messages', '/wall', '/feed', '/hidden'];

    if(protectedUrls.includes(to.path)) {

    }
    if(['/overview', '/wall', '/feed'].includes(to.path)) {
        console.log('requires login');
        if(!session.user) {
            return '/login';
        }
    }
})

export default router;