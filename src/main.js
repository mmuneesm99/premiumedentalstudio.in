import { createApp } from 'vue';
import './style.css';  // Your global CSS
import AOS from 'aos';
import 'aos/dist/aos.css';  // AOS CSS for animations
import router from './router';  // Import the Vue Router instance

import App from './App.vue';

// Initialize AOS
AOS.init({
  once: true,  // Optional: animations will only happen once, not every scroll
  duration: 1000,  // Optional: set the duration of the animations
  easing: 'ease',  // Optional: set the easing animation
});

// Create the Vue app and apply router and AOS initialization
const app = createApp(App);

// Use the router instance in the Vue app
app.use(router);

// Mount the Vue app to the DOM
app.mount('#app');

