<template>
	<div class="section section-beeton">
		<sidebar></sidebar>
		
		<div class="section__container">			
			<div class="section__content">
				<div class="section__image">
					<a class="popup-video-link" href="https://www.youtube.com/watch?v=NpEaa2P7qZI"></a>

					<img src="assets/images/temp/beeton-landing-image.png" alt="">
					
					<div class="section__play-icon">
						<img src="assets/images/temp/play-button.png" alt="">
					</div><!-- section__play-icon -->
				</div><!-- section__image -->		

				<div class="article">
					<h2 class="article__title">Experience that hometown feeling</h2><!-- article__title -->

					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a</p>

					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a</p>
				</div><!-- article -->		
			</div><!-- section__content -->
		</div><!-- section__right -->
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
	},
	methods: {
		magnificPopupInit() {
			$('.popup-video-link').magnificPopup({
			    type: 'iframe',
			    iframe: {
			        patterns: {
			            youtube: {
			                index: 'youtube.com/', 
			                id: function(url) {        
			                    var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
			                    if ( !m || !m[1] ) return null;
			                    return m[1];
			                },
			                src: '//www.youtube.com/embed/%id%?autoplay=1'
			            },
			            vimeo: {
			                index: 'vimeo.com/', 
			                id: function(url) {        
			                    var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
			                    if ( !m || !m[5] ) return null;
			                    return m[5];
			                },
			                src: '//player.vimeo.com/video/%id%?autoplay=1'
			            }
			        }
			    }
			});
		}
	},
	mounted() {
		this.magnificPopupInit();
	}
}
</script>
