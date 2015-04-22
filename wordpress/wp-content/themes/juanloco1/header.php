<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package _mbbasetheme
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?php wp_title( '|', true, 'right' ); ?></title>
	<link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/favicon.ico">
	<link rel="apple-touch-icon" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/apple-touch-icon.png">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<!--[if lt IE 9]>
	    <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
	<![endif]-->

	<header id="masthead" class="site-header" role="banner">
		<div class="inner-header-container">
			<div class="menu-content frame-container">
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
				

				<div class= "top-options">
					<h5 class="site-translate">
						<a href="#">Español</a>
					</h5>

					<div class= "image">
						<img src="http://localhost:8888/wp-content/uploads/2014/12/name-logo-united.png">
					</div>

					<h2 class="site-title">
						<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
					</h2>

					<h3 class="site-description"><?php bloginfo( 'description' ); ?></h3>
					
					<div class="border bottom"><div class="border-tiny"></div></div>

				</div>

				<div class = "site-branding">
					<div class="border bottom"><div class = "border-tiny"></div></div>

					<div id="site-navigation" class="main-navigation" role="navigation">
							<span><?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?></span>
					</div>
				</div>
			</div>	
		</div>

	</header><!-- #masthead -->

<a href="#" id="menu-btn">
	<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="85px" height="180px" viewBox="0 0 85 180" enable-background="new 0 0 85 180" xml:space="preserve">
		<path fill="#38a7a8" d="M67,161.717H18v-144h49V161.717z M22,157.717h41v-136H22V157.717z"/>
		<g>
			<path fill="#38a7a8" d="M48.93,93.662v1.332H35.966v-1.35h9.868v-0.037l-6.356-2.664l6.356-2.647l-0.037-0.036h-9.831v-1.35H48.93
				v1.314l-6.463,2.719L48.93,93.662z"/>
			<path fill="#38a7a8" d="M47.796,109.178v-5.383h-4.609v3.871h-1.134v-3.871h-4.952v5.51h-1.134v-6.86H48.93v6.733H47.796z"/>
			<path fill="#38a7a8" d="M48.93,116.412v1.566l-9.687,3.943v0.054h9.687v1.351H35.84v-1.278l10.46-4.249l-0.035-0.037H35.966v-1.35
				H48.93z"/>
			<path fill="#38a7a8" d="M48.93,137.726h-9.561c-2.449,0-3.655-1.837-3.655-3.583c0-1.404,0.792-3.602,4.375-3.602h8.84v1.351
				h-9.561c-1.873,0-2.521,1.206-2.521,2.251c0,1.656,1.224,2.232,2.683,2.232h9.398V137.726z"/>
		</g>
		<g>
			<rect x="32.133" y="41.523" fill="#38a7a8" width="20.304" height="1.293"/>
			<rect x="32.133" y="48.449" fill="#38a7a8" width="20.304" height="1.293"/>
			<rect x="32.133" y="34.598" fill="#38a7a8" width="20.304" height="1.292"/>
		</g>
		<path fill="#38a7a8" d="M20.51,21.223V66.71h43.938V21.223H20.51z M42.53,62.697c-11.271,0-20.41-9.138-20.41-20.41
			c0-11.272,9.139-20.409,20.41-20.409c11.271,0,20.41,9.137,20.41,20.409C62.94,53.56,53.801,62.697,42.53,62.697z"/>
	</svg>
</a>
