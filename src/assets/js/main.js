import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';
import Models from './components/Models.vue';
import routes from './routes';
import store from './state'

;(function(window, document, $) {
	var $win = $(window);
	var $doc = $(document);

	Vue.use(VueRouter);

	const router = new VueRouter({
		routes: routes,
		// mode: 'history',
		// base: '/projects/signcast/beeton-village/html/build/'
	})

	store.dispatch('getModels');

	new Vue({
		store,
		el: '#app',
		template: '<App/>',
		components: { App },
		router: router
	}).$mount('#app');
})(window, document, window.jQuery);
