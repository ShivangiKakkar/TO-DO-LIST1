import { createRouter, createWebHistory, RouteRecord, RouteRecordRaw } from "vue-router";

import Home from '../pages/Home.vue';
import Messages from '../pages/Messages.vue';
import Login from '../pages/Login.vue';
import Generic from '../pages/Generic.vue';
import session from '../models/session';
import Calendar from '../components/Calendar.vue';
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.

const routes: RouteRecordRaw[ ] = [
  { path: '/', component: Home },
  { path: '/overview', component: Generic, props: { title: "Overview Page!" } },
  { path: '/monthly', component: Generic, props: { title: "Monthly Page" } },
  { path: '/calendar', component: Calendar },
  { path: '/events', component: Messages },
  { path: '/tasks', component: Generic, props: { title: "Tasks Page!" } },
  { path: '/login', component: Login },
  { path: '/signup', component: Generic, props: { title: "Signup Page" } },
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
    if(['/overview'].includes(to.path)) {
        if(!session.user) {
            return '/login';
        }
    }
})

export default router;