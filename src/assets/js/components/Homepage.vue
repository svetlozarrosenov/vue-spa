<template>
	<div class="section-home">
		<div class="section__container">
			<div class="section__image" style="background-image: url(assets/images/temp/home-image-left.png);"></div><!-- section__image -->	

			<div class="section__content">
				<div class="logo">
					<img src="assets/images/temp/beeton-logo.png" alt="">
				</div><!-- logo -->
				
				<router-link to="/beeton" class="btn home--btn">Touch to start</router-link>
			</div><!-- section__content -->
		</div><!-- section__left -->

		<div class="section__container">
			<div class="section__image" style="background-image: url(assets/images/temp/home-image-right.png);"></div><!-- section__image -->	
			
			<div class="section__content">
				<div class="logo logo--bigger">
					<img src="assets/images/temp/logo-greenridge-new.png" alt="">
				</div><!-- logo -->
				
				<router-link to="/green-ride" class="btn home--btn">Touch to start</router-link>
			</div><!-- section__content -->
		</div><!-- section__right -->
	</div><!-- section-home -->
</template>
