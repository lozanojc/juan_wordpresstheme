<?php
/**
 * The template for displaying the front page.
 *
 * This is the template that displays on the front page only.
 *
 * @package _mbbasetheme
 */

get_header(); ?>

<div class="slider-full-size"><div class = "home-intro"></div>
<div class = "block1"></div>
</div>
	<header class="entry-header">
		<?php the_title( '<h1 class="entry-title-home">', '</h1>' ); ?>
		<h2 class= "subtitle-intro"><?php the_field(subtitle)?></h2>
	</header><!-- .entry-header -->
<div class = "block3"></div>
<div id="page" class="hfeed site">
	<div id="primary" class="content-area">
		<main id="main" class="site-main columns large-12 medium-12 small-12" role="main">
			<ul class="porftolio-preview columns large-12 medium-12 small-12">

					<?php $args = array( 'post_type' => 'portfolio', 'posts_per_page' => 2, 'orderby' => 'time', 'order' => 'DES');
					$loop = new WP_Query( $args );
					while ( $loop->have_posts() ) : $loop->the_post();?>
					<?php get_template_part( 'portfolio', get_post_format() );
				  ?><?php endwhile; // End the loop ?>
			</ul>
		</main><!-- #main -->
	</div><!-- #primary -->
<?php get_footer(); ?>
