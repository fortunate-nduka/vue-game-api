import {createWebHistory, createRouter} from 'vue-router';
import VideoPage from '../components/VideoPage.vue';
import ContactPage from "../components/ContactPage.vue";

const routes = [
	{ path: '/', name: 'VideoPage', component: VideoPage },
	{ path: '/contact', name: 'ContactPage', component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router