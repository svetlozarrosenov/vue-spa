<template>
	<div class="section section-single-model">
		<sidebar></sidebar>
		
		<div class="section__container">			
			<div class="section__head">
				<h2 class="section__heade-title">
					{{model.title}} / {{model.bedrooms}} Bedrooms
				</h2><!-- section-single-model__title -->

				<div class="section__head-actions">
					<router-link to="/models" class="btn btn--dark">Previous Page</router-link>
				</div><!-- section-single-model__title -->
			</div><!-- section__head -->

			<div class="section__content">
				<div class="selected-elevation">
					<div class="elevation">
						<div class="elevation__image">
							<img :src="elevation.img" alt="">
						
							<h3 class="elevation__title">{{elevation.name}} - {{elevation.sqft}} SQ. FT</h3><!-- elevation__title -->
						</div><!-- elevation__image -->
					</div><!-- elevation -->
					
					<div class="selected-elevation__actions">
						<router-link :to="`/floorplan/${model.id}`" class="btn btn--green">View Floor Plans</router-link>
					</div><!-- selected-elevation__actions -->
				</div><!-- selected-elevation -->

				<div class="elevations-sidebar">
					<div v-for="elevation in model.elevations" class="elevation">
						<div class="elevation__image" @click="getSelectedElevation(elevation)">
							<img :src="elevation.img" alt="">
							
							<h3 class="elevation__title">{{elevation.name}} - {{elevation.sqft}} SQ. FT</h3><!-- elevation__title -->
						</div><!-- elevation__image -->
					</div><!-- elevation -->
				</div><!-- selected-elevation -->
			</div><!-- section__content -->
		</div><!-- section__container -->
	</div><!-- section-home -->
</template>


<script>
import Sidebar from '../components/Sidebar.vue';

export default {
	data() {
		return {
			selectedModel: {
				title: '',
				bedrooms: '',
				elevations: '',
			},
			selectedElevation: {}
		}
	},
	methods: {
		getSelectedElevation(selectedElevation) {
			this.selectedElevation = selectedElevation;
		}
	},
	components: {
		Sidebar
	},
	computed: {
		model: function() {
			let modelID = this.$route.params.id;

			let selectedModel = this.$store.state.models.filter((model, index, models) => model.id == modelID)[0];

			this.selectedModel = selectedModel ? selectedModel : this.selectedModel;
			
			this.selectedElevation = this.selectedModel.elevations[0] ? this.selectedModel.elevations[0] : this.selectedElevation; 

			return this.selectedModel;
		},
		elevation: function() {
			return this.selectedElevation;
		}
	}
}
</script>
