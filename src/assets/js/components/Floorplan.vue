<template>
	<div class="section section-floorplan">
		<sidebar></sidebar>
		
		<div class="section__container">			
			<div class="section__content">
				<div class="floorplan">
					<div class="floorplan__head">
						<div class="floorplan__title">
							{{model.category}} > {{model.title}}
						</div><!-- floorplan__title -->

						<div class="floorplan__actions">
							<router-link :to="`/model/${model.id}`" class="btn btn--green">Back to Model</router-link>
						</div><!-- floorplan__actions -->
					</div><!-- floorplan__head -->

					<div class="floorplan__body">
						<div class="floorplan__image">
							<img :src="model.floorplan" alt="">
						</div><!-- floorplan__image -->
					</div><!-- floorplan__body -->
				</div><!-- floorplan -->
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
				category: '',
				floorplan: '',
			},
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
			
			return this.selectedModel;
		}
	}
}
</script>
