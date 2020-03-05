import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	strict: true,
	state: {
		models: [],
		showedModels: [],
		filters: []
	},
	mutations: {
		setModels(state, payload){
			state.models = payload.models;
			this.commit({
				type: 'setShowedModels',
				showedModels: payload.models
			});
		},
		setShowedModels(state, payload){
			state.showedModels = payload.showedModels;
		},
		setFilters(state){
			state.models.forEach((elem)=>{
				state.filters.push(elem.category);
			});

			state.filters = state.filters.filter((filter, index, filters) => state.filters.indexOf(filter) == index);
		},
	},
	actions: {
		getModels({commit, getters, state}){
			let $promise = axios.get('models.json')
			.then((response) => {
				commit({
					type: 'setModels',
					models: response.data.models
				});

				commit('setFilters');
			})
			.catch(function (error) {
				console.log(error);
			});

			return $promise;
		}
	}
});

export default store;