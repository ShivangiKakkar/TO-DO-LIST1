import { createApp } from 'vue';
import { createPinia } from 'pinia';
import "bulma";
import "@fortawesome/fontawesome-free/css/all.css";
import App from './App.vue';
import Oruga from "@oruga-ui/oruga-next";
import router from './router'

createApp(App)
    .use(router)
    .use(createPinia())
    .use(Oruga)
    .mount('#app');
