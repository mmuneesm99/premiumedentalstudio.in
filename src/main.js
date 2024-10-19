import { createApp } from 'vue'
import 'swiper/swiper-bundle.css';
import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import App from './App.vue'

createApp(App).mount('#app')
