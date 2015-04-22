<li id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
			<?php if ( has_post_thumbnail() ) {the_post_thumbnail('large'); } ?>

			<a href="#0" class="cd-trigger">Preview</a>
			<a href="<?php the_permalink(); ?>" class= "view-full">See Project</a>

			<a href="<?php the_permalink(); ?>">
			<div class="inner-project-description columns large-4 medium-5 small-12">
				<div id = "project-content"> 
					<div class="to-load no-anim">
						<div>
							<div class = "frame top"><div id = "frame-top"></div>
							</div>

							<div class = "frame right"><div id="frame-right"></div>
							</div>
							
							<div class = "frame bottom"><div></div>
							</div>

							<div class = "frame left"><div></div>
							</div>

							<div class= "project-info">
								<div class="project-title">
									<span class="attribute">Client</span>
									<h3><?php the_title(); ?></h3>
									<div class="border bottom">
										<div class="border-tiny-project"></div>
									</div>
								</div>

								<div class="project-attributes">
									<div class="photo-count">
										<span class="attribute">Photos</span>
										<h4><?php the_field(pics_num)?></h4>
										<div class="border right"><div class="border-tiny-project"></div></div>
									</div>


									<?php

									$category = get_the_category();
									

									?>

									<div class="taxonomy">
										<span class="attribute">Taxonomy</span>
										<h3 class="categories"><?php echo $category[0] ->cat_name; ?> </h3>
									</div>
								</div>
							</div>
						</div>
					</div>	
				</div>
			</div>
		</a>

		<div class="cd-quick-view no-anim">
			<a href="#0" class="cd-close">Close</a>
				<div class="quickview-content frame-container">
					<div class = "frame top">
						<div id = "frame-top"></div>
					</div>

					<div class = "frame right">
						<div id="frame-right"></div>
					</div>
					
					<div class = "frame bottom">
						<div></div>
					</div>

					<div class = "frame left">
						<div></div>
					</div>

					<div class="project-preview-info">
						<div class="project-title columns large-4 medium-4 small-3">
							<span class="attribute">Client</span>
							<h3><?php the_title(); ?></h3>
						
							<div class="border right">
								<div class="border-tiny-project"></div>
							</div>

						</div>



						<div class="project-title columns large-4 medium-4 small-3">
							<span class="attribute">Taxonomy</span>
							<h3> <?php if($category[0]){ echo '<a href="'.get_category_link($category[0]->term_id ).'">'.$category[0]->cat_name.'</a>';} ?> </h3>

							<div class="border right">
								<div class="border-tiny-project"></div>
							</div>

						</div>

		

						<a class="project-view-more columns large-4 medium-4 small-3" href="<?php the_permalink(); ?>">
							<span class="view-more">View More</span>
							<span class = "icon"> 
								<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
										 width="40px" height="34.3px" viewBox="0 0 58.333 50" enable-background="new 0 0 58.333 50" xml:space="preserve">
									<g>
										<path fill="#FFFFFF" d="M55.629,3.177c-0.109-0.263-0.316-0.473-0.58-0.581c-0.131-0.055-0.271-0.083-0.41-0.083H41.963
											c-0.594,0-1.074,0.48-1.074,1.074s0.48,1.074,1.074,1.074h10.082l-19.83,19.831c-0.42,0.42-0.42,1.1,0,1.519
											c0.209,0.21,0.484,0.314,0.76,0.314s0.549-0.104,0.76-0.314l19.83-19.831v10.082c0,0.594,0.48,1.074,1.074,1.074
											s1.074-0.48,1.074-1.074V3.587C55.713,3.448,55.684,3.308,55.629,3.177z"/>
										<path fill="#FFFFFF" d="M47.984,16.102c-0.594,0-1.074,0.48-1.074,1.074v28.162H4.769V11.52h36.354c0.594,0,1.074-0.48,1.074-1.074
											s-0.48-1.074-1.074-1.074H3.695c-0.594,0-1.074,0.48-1.074,1.074v35.966c0,0.594,0.48,1.074,1.074,1.074h44.29
											c0.594,0,1.074-0.48,1.074-1.074V17.176C49.059,16.583,48.578,16.102,47.984,16.102z"/>
									</g>
								</svg>
							</span>

						</a>



						<div class="border bottom">
							<div class="border-tiny-project"></div>
						</div>

					</div>

					<div class="cd-item-info columns large-5 medium-5 small-5">
						<div class="border right">
							<div class="border-tiny-project"></div>
						</div>

						<span class="attribute">Excerpt</span>
						<p><?php echo substr(get_the_excerpt(), 0,250); ?>...</p>
					</div> <!-- cd-item-info -->

					<div class="cd-slider-wrapper columns large-7 medium-7 small-7">
						<span class="attribute">Preview Slider</span>
						<ul class="cd-slider">
							<li class="selected"><img src="//localhost:3000/wp-content/uploads/2014/08/gl-thumb900x450.png" alt="Product 3"></li>
							<li class="selected"><img src="//localhost:3000/wp-content/uploads/2014/10/seed-thumb900x450.png" alt="Product 2"></li>
						</ul> <!-- cd-slider -->

						<ul class="cd-slider-navigation">
							<li><a class="cd-next" href="#0">Prev</a></li>
							<li><a class="cd-prev" href="#0">Next</a></li>
						</ul> <!-- cd-slider-navigation -->
					</div> <!-- cd-slider-wrapper -->
				</div>
		</div> <!-- cd-quick-view -->

	</li>
