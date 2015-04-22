<?php
/**
 * Template Name: home page
 *
 * Displays content for home
 *
 * 
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
	
					<?php $args = array( 'post_type' => 'portfolio', 'posts_per_page' => 2, 'orderby' => 'time', 'order' => 'ASC');
					$loop = new WP_Query( $args );
					while ( $loop->have_posts() ) : $loop->the_post();?>
					<?php get_template_part( 'portfolio', get_post_format() );
				  ?><?php endwhile; // End the loop ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>
