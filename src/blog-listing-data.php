
  
<?php
/**
 * Plugin Name: Gutenberg examples dynamic
 */

 function gutenberg_examples_dynamic() {
    
    // automatically load dependencies and version
    // $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
 
    // wp_register_script(
    //     'gutenberg-examples-dynamic',
    //     plugins_url( 'build/block.js', __FILE__ ),
    //     $asset_file['dependencies'],
    //     $asset_file['version']
    // );
 
    register_block_type( 'create-block/blog-listing-block', array(
        'api_version' => 2,
        // 'editor_script' => 'gutenberg-examples-dynamic',
        'render_callback' => 'gutenberg_examples_dynamic_render_callback',
        'attributes' => array(
            'block_title' => array(
                'type' => 'string',
                'source' => 'h2'
                
            ),
            'number_of_columns' => array(
                'type' => 'number',
                'default'=> 1,
            ),
            'column_class' => array(
                'type' => 'string',
                'default'=> 'col-12',
            ),
            'titleFontSize' => array(
                'type' => 'number',
                'default'=> 22,
            ),
            'blogTitleFontSize' => array(
                'type' => 'number',
                'default'=> 22,
            ),
            'descriptionFontSize' => array(
                'type' => 'number',
                'default'=> 14,
            ),
            'titleColor' => array(
                'type' => 'string',
                'default'=> '#333',
            ),
            'blogTitleFontColor' => array(
                'type' => 'string',
                'default'=> '#333',
            ),
            'descriptionColor' => array(
                'type' => 'string',
                'default'=> '#333',
            ),
            'blogTitleLink' => array(
                'type' => 'boolean',
                'default'=> true,
            ),
            'blogTitleLinkNewTab' => array(
                'type' => 'boolean',
                'default'=> true,
            ),
            'show_excerpt_content' => array(
                'type' => 'string',
                'default'=> 'content',
            ),
            'show_date' => array(
                'type' => 'boolean',
                'default'=> true,
            ),
            'date_format' => array(
                'type' => 'string',
                'default'=> 'MM-DD-YY',
            ),
            'show_readmore' => array(
                'type' => 'boolean',
                'default'=> true,
            ),
            'custom_readmore_text' => array(
                'type' => 'string',
                'default'=> 'Read More',
            ),
            'readmore_newtab' => array(
                'type' => 'boolean',
                'default'=> true,
            ),
            'selected_type' => array(
                'type' => 'string',
                'default'=> 'post',
            ),
            'numberofPosts' => array(
                'type' => 'number',
                'default'=> 10,
            ),
            'content' => array(
                'type' => 'html',
            ),
        )
    ) );
 
}

function gutenberg_examples_dynamic_render_callback( $block_attributes, $content ) {
    
    $block_title             = $block_attributes['block_title'];
    // $block_title                = $block_attributes['page_content'];
    $column_class           = $block_attributes['column_class'];
    $blogTitleFontSize      = $block_attributes['blogTitleFontSize'] ? 'font-size:'.$block_attributes['blogTitleFontSize'].'px;' : '';  
    $blogTitleFontColor     = $block_attributes['blogTitleFontColor'] ? 'color:'.$block_attributes['blogTitleFontColor'] : '';  
    $descriptionFontSize    = $block_attributes['descriptionFontSize'] ? 'font-size:'.$block_attributes['descriptionFontSize'].'px;' : '';  
    $descriptionColor       = $block_attributes['descriptionColor'] ? 'color:'.$block_attributes['descriptionColor'] : '';  
    $custom_readmore_text   = $block_attributes['custom_readmore_text'];  
    $readmore_newtab        = $block_attributes['readmore_newtab'] ? '__blank' : '';  
    $blogTitleLinkNewTab    = $block_attributes['blogTitleLinkNewTab'] ? '__blank' : '';  
    $date_format            = $block_attributes['date_format'];
    $blogTitleLink          = $block_attributes['blogTitleLink'];
    $show_date              = $block_attributes['show_date'];
    $show_readmore          = $block_attributes['show_readmore'];
    $titleFontSize          = $block_attributes['titleFontSize'] ? 'font-size:'.$block_attributes['titleFontSize'].'px,' : '';

    switch ($date_format) {
        case 'MM-DD-YY':
            $date_format = 'm-d-y';
            break;
        case 'YYYY-MM-DD':
            $date_format = 'Y-m-d';
            break;
        case 'DD/MM/YY':
            $date_format = 'd/m/y';
            break;
        case 'MMM DD, YYYY':
            $date_format = 'M d, Y';
            break;
        default:
            $date_format = 'm-d-y';
            break;
    }

    $title_style        = 'style='.$blogTitleFontSize;
    $blogTitle_style    = 'style='.$blogTitleFontSize.$blogTitleFontColor;
    $blogDesc_style     = 'style=margin-bottom:14px;'.$descriptionFontSize.$descriptionColor;

    $blog_listing_query_args = array(
                                'post_type'         => $block_attributes['selected_type'],
                                'post_status'       => array('publish'),
                                'posts_per_page'    => 3, 
                                'paged'             => get_query_var('paged'),
    );
    $blog_listing_query = new WP_Query( $blog_listing_query_args );
    // echo "<pre>";
    // print_r($block_attributes);
    // echo "</pre>";exit;
    ob_start(); 
    ?>
        <div>
            <h2 class="text-center"><?php echo $block_title; ?></h2>
			<div class="block-content container">
				<div class="row">
                    <?php 
                        if ( $blog_listing_query->have_posts() ) { 
                            while( $blog_listing_query->have_posts() ){
                                $blog_listing_query->the_post();
                                
                                $post_id        = get_the_ID();
                                $title          = get_the_title( $post_id ) ? get_the_title( $post_id ) : '';
                                $post_excerpt   = get_the_excerpt( $post_id ) ? get_the_excerpt( $post_id ) : '';
                                $post_content   = get_the_content( $post_id ) ? get_the_content( $post_id ) : '';
                                $post_link      = get_the_permalink( $post_id ) ? get_the_permalink( $post_id ) : '';
                                $post_date      = get_the_date( $date_format, $post_id ) ? get_the_date( $date_format, $post_id ) : '';
                                $content_type   = ($block_attributes['show_excerpt_content'] == 'excerpt') ? $post_excerpt : $post_content;  
                    ?>
                    <div class="blog-post-listing <?php echo $column_class; ?>" <?php echo $blogDesc_style; ?> >
                        <div class="inner-wrapp" data-index="<?php echo $post_id; ?>">
                            <?php 
                                echo ($blogTitleLink) 
                                ?
                                '<a href="'.$post_link.'" class="post_link" target="'.$blogTitleLinkNewTab.'" rel="noopener">
                                    <div class="title_wrapper">
                                        <h5 id="main_header" '.$blogTitle_style.'>'.$title.'</h5>
                                    </div>
                                </a>'
                                : 
                                '<div class="title_wrapper">
                                    <h5 id="main_header" '.$blogTitle_style.'>'.$title.'</h5>
                                </div>';
                            ?>
                            <?php echo ($show_date) ? '<p class="post_date">'.$post_date.'</p>' :  ''; ?>
                            <div class="content main_content" <?php echo $blogDesc_style; ?>>
                                <?php echo $content_type; ?>
                            </div>
                            
                            <?php 
                                echo ($show_readmore) 
                                ?
                                '<a href="'.$post_link.'" class="post_link" target="'.$readmore_newtab.'" rel="noopener">
                                    '.$custom_readmore_text.'
                                </a>'
                                : 
                                '';
                            ?>
                        </div>
                    </div>

                    <?php 
                            }
                        } 
                        wp_reset_postdata();
                    ?>
                    <div>
                        <span><?php next_posts_link( 'Older posts', $blog_listing_query ->max_num_pages); ?></span>
                        <span style="float:right"><?php previous_posts_link( 'Newer posts' ); ?></span>
                    </div>
                    <?php
                        echo paginate_links( array(
                            'current' => max( 1, get_query_var('paged') ),
                            'total' => $blog_listing_query->max_num_pages,
                            'mid_size' => 1
                        ) );
                    ?>
                </div>
			</div>
		</div>
    <?php return ob_get_clean();
}
add_action( 'init', 'gutenberg_examples_dynamic' );
