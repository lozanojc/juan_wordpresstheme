<?php
/**
 * The template for displaying all single posts.
 *
 * @package _mbbasetheme
 */

get_header(); ?>


		<?php while ( have_posts() ) : the_post(); ?>

			<?php get_template_part( 'content', 'single' ); ?>
			
		<?php endwhile; // end of the loop. ?>
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		</main><!-- #main -->
	</div><!-- #primary -->
<?php get_footer(); ?>
