<template>
	<div class="sidebar">
		<router-link to="/beeton" class="logo">
			<img src="assets/images/temp/beeton-logo.png" alt="">
		</router-link>
		
		<ul class="sidebar__actions">
			<li>
				<router-link to="/models" class="btn btn--sidebar">Models</router-link>
			</li>

			<li>
				<router-link to="/features" class="btn btn--sidebar">Features & Finishes</router-link>
			</li>

			<li>
				<router-link to="/map" class="btn btn--sidebar">Area Amenities</router-link>
			</li>

			<li>
				<router-link to="/builder" class="btn btn--sidebar">The Builder</router-link>
			</li>

			<li class="sidebar__actions--dark-btn">
				<router-link to="/" class="btn btn--sidebar">Other Projects</router-link>
			</li>
		</ul><!-- sidebar__actions -->

		<div class="logo">
			<img src="assets/images/temp/flato-logo.png" alt="">
		</div><!-- logo -->
	</div><!-- sidebar -->
</template>

<script>

export default {
	data() {
		return {
		}
	}
}
</script>
