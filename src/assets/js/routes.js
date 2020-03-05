import homePage from './components/Homepage.vue';
import Beeton from './components/Beeton.vue';
import Models from './components/Models.vue';
import SingleModel from './components/SingleModel.vue';
import Floorplan from './components/Floorplan.vue';
import Map from './components/Map.vue';
import Features from './components/Features.vue';
import Builder from './components/Builder.vue';

let routes = [
	{ path: '/', component: homePage },
	{ path: '/beeton', component: Beeton },
	{ path: '/map/', component: Map },
	{ path: '/builder/', component: Builder },
	{ path: '/features/', component: Features },
	{ path: '/floorplan/:id', component: Floorplan },
	{ path: '/model/:id', component: SingleModel },
	{ path: '/models/', component: Models },
	{ path: '/models/:category', component: Models },
];

export default routes;