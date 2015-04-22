<?php
/**
 * The template used for displaying page content in page.php
 *
 * @package _mbbasetheme
 */
?>
<div class="slider-full-size"><?php the_field(gallery_shortcode)?></div>
	<header class="entry-header">
		
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
		<h2 class="subtitle-intro"><?php the_field(subtitle_portfolio)?></h2>
		<p class="to-load no-anim excerpt-intro"><?php the_field(quickview_excerpt)?></p>
		
	</header><!-- .entry-header -->

	<div class = "block1"></div>
	<div class="entry-content">
		<div id = "page" class= "post-content">

			<?php the_content(); ?>
			<?php
				wp_link_pages( array(
					'before' => '<div class="page-links">' . __( 'Pages:', '_mbbasetheme' ),
					'after'  => '</div>',
				) );
			?>
		</div><!-- .entry-content -->
	</div><!--page-->
	<footer class="entry-footer">
		<?php edit_post_link( __( 'Edit', '_mbbasetheme' ), '<span class="edit-link">', '</span>' ); ?>
	</footer><!-- .entry-footer -->
