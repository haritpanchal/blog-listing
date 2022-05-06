<?php
/**
 * Plugin Name:       Custom Post Types Listing Block
 * Description:       Gutenberg Block to list posts and custom post types with additional features.
 * Requires at least: 5.9.3
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Harit Panchal
 * Author URI: 		  https://profiles.wordpress.org/haritpanchal/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blog-listing
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function create_block_blog_listing_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'create_block_blog_listing_block_init' );

require_once plugin_dir_path( __FILE__ ) . 'src/blog-listing-data.php';