import { createApp } from 'vue';
import AppAdmin from './AppAdmin.vue';
import router from './router';
import store from './store';

const app = createApp(AppAdmin);
app.use(router);
app.use(store);
app.mount('#admin-app');
