import { createApp } from 'vue';
import App from './App.vue';
import Carousel from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

createApp(App)
    .use(Carousel)
    .mount('#app');