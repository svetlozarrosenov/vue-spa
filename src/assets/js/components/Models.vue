<template>
	<div class="section section-models">
		<sidebar></sidebar>
		
		<div class="section__container">			
			<div class="section__content">
				<div class="models">
					<ul>
						<li v-for="model in models" class="model">
							<a href=""></a>
							
							<div class="model__image">
								<img v-bind:src="model.img" alt="">
							</div><!-- model__image -->

							<div class="model__title">
								{{model.title}}
							</div><!-- mode__name -->

							<div class="model__details">
								{{model.sqft}} SQ FT. / {{model.bedrooms}} Bedrooms	
							</div><!-- mode__details -->
							
							<router-link :to="`/model/${model.id}`" class="btn btn--model">View Details</router-link>
						</li>
					</ul>
				</div><!-- models -->
			</div><!-- section__content -->

			<div class="models-filters">
				<ul>
					<li class="models-filters__filter">
						<router-link to="/models/" class="btn btn--filter btn--dark">All Models</router-link>
					</li>

					<li class="models-filters__filter" v-for="(filter, index) in filters">
						<router-link :to="`/models/${filter}`" class="btn btn--filter">{{filter}}</router-link>
					</li>
				</ul>
			</div><!-- models-filters -->
		</div><!-- section__container -->
	</div><!-- section-home -->
</template>

<script>
import Sidebar from '../components/Sidebar.vue';

export default {
	data() {
		return {
		}
	},
	methods: {
		filterByCategory: function(){
			let category = this.$route.params.category;
			let	showedModels = this.$store.state.models.filter((model, index, models) => {
				if ( ( category === 'all' || category === undefined ) || model.category === category ) {
					return model;
				}
			});
			
			this.$store.commit({
				type: 'setShowedModels',
				showedModels
			});
		}
	},
	components: {
		Sidebar
	},
	computed: {
		models: function() {
			this.filterByCategory();
			return this.$store.state.showedModels;
		},
		filters: function() {
			return this.$store.state.filters;
		}
	},
	watch: {
    	'$route' (to, from) {
			this.filterByCategory();
    	}
    }
}
</script>
