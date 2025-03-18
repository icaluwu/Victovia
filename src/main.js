import 'bootstrap/dist/css/bootstrap.min.css';      // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icon


import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(createPinia()); // Gunakan Pinia sebagai state management
app.use(router); // Gunakan Router sebagai routing management
app.mount('#app');
