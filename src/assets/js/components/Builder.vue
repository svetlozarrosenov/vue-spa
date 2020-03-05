<template>
	<div class="section section-features">
		<sidebar></sidebar>
		
		<div class="section__container">			
			<div class="section__content">
				<div class="features">
					<div class="cols">
						<div class="col">
							<div class="feature">
								<img class="feature__image" src="assets/images/temp/flato-logo-big.png" alt="">

								<h2>Experience that hometown feeling</h2>

								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>

								<img class="feature__image-bottom" src="assets/images/temp/feature-image1.png" alt="">
							</div><!-- feature -->
						</div><!-- col -->

						<div class="col">
							<div class="feature">
								<h2>Experience that hometown feeling</h2>

								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>

								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also</p>
							</div><!-- feature -->
						</div><!-- col -->

						<div class="col">
							<div class="feature feature--wider">
								<img class="feature__image" src="assets/images/temp/feature2.png" alt="">

								<h2>Experience that hometown feeling</h2>

								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
							</div><!-- feature -->
						</div><!-- col -->
					</div><!-- cols -->
				</div><!-- features -->
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
