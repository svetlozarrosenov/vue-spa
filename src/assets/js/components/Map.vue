<template>
	<div class="section section-map">
		<sidebar></sidebar>
		
		<div class="section__container">			
			<div class="section__content">
				<div class="map">
					<div class="map__head">
						<div class="map__title">
							experience that hometown feeling
						</div><!-- map__title -->
					</div><!-- map__head -->

					<div class="map__body">
						<div class="map__image">
							<img src="assets/images/temp/map-green.png" alt="">
						</div><!-- map__image -->
					</div><!-- map__body -->
				</div><!-- map -->
			</div><!-- section__content -->
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
	components: {
		Sidebar
	}
}
</script>
