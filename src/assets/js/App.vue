<template>
	<div id="app">
		<div class="container">
			<router-view></router-view>
		</div><!-- container -->
	</div><!-- app -->
</template>

<script>
import homePage from './components/Homepage.vue';
import Beeton from './components/Beeton.vue';
import Models from './components/Models.vue';
import SingleModel from './components/SingleModel.vue';
import Floorplan from './components/Floorplan.vue';
import Map from './components/Map.vue';
import Features from './components/Features.vue';
import Builder from './components/Builder.vue';

export default {
	name: 'app',
	components: {
		homePage,
		Beeton,
		Models,
		SingleModel,
		Floorplan,
		Map,
		Features,
		Builder
	}
}
</script>

<style>
 
</style>