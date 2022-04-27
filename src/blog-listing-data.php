<?php

 function gutenberg_blog_listing_block() {
    
    wp_enqueue_style('blog_listing_block_style', plugins_url( 'style.scss', __FILE__ ) , array(), '0.1.0', 'all');
    register_block_type( 'create-block/blog-listing-block', array(
        'api_version' => 2,
        'render_callback' => 'blog_listing_block_callback',
        'style'           => 'blog_listing_block_style',  
        'attributes' => array(
            'number_of_columns' => array(
                'type'      => 'number',
                'default'   => 1,
            ),
            'column_class' => array(
                'type'      => 'string',
                'default'   => 'col-12',
            ),
            'blogTitleFontSize' => array(
                'type'      => 'number',
                'default'   => 22,
            ),
            'descriptionFontSize' => array(
                'type'      => 'number',
                'default'   => 14,
            ),
            'blogTitleFontColor' => array(
                'type'      => 'string',
                'default'   => '#333',
            ),
            'descriptionColor' => array(
                'type'      => 'string',
                'default'   => '#333',
            ),
            'blogTitleLink' => array(
                'type'      => 'boolean',
                'default'   => true,
            ),
            'blogTitleLinkNewTab' => array(
                'type'      => 'boolean',
                'default'   => false,
            ),
            'show_excerpt_content' => array(
                'type'      => 'string',
                'default'   => 'content',
            ),
            'show_date' => array(
                'type'      => 'boolean',
                'default'   => true,
            ),
            'date_format' => array(
                'type'      => 'string',
                'default'   => 'MM-DD-YY',
            ),
            'show_readmore' => array(
                'type'      => 'boolean',
                'default'   => true,
            ),
            'custom_readmore_text' => array(
                'type'      => 'string',
                'default'   => 'Read More',
            ),
            'readmore_newtab' => array(
                'type'      => 'boolean',
                'default'   => false,
            ),
            'selected_type' => array(
                'type'      => 'string',
                'default'   => 'post',
            ),
            'numberofPosts' => array(
                'type'      => 'number',
                'default'   => 10,
            ),
            'posts_per_page' => array(
                'type'      => 'number',
                'default'   => 10,
            ),
            'pagination_type' => array(
                'type'      => 'string',
                'default'   => 'old_new',       
            ),
            'older_posts_label' => array(
                'type'      => 'string',
                'default'   => 'Older Posts',       
            ),
            'newer_posts_label' => array(
                'type'      => 'string',
                'default'   => 'Newer Posts',       
            ),
            'show_prev_next_buttons' => array(
                'type'      => 'boolean',
                'default'   => true,
            ),
            'previous_label' => array(
                'type'      => 'string',
                'default'   => 'Previous',       
            ),
            'next_label' => array(
                'type'      => 'string',
                'default'   => 'Next',       
            ),
            'blb_orderby' => array(
                'type'      => 'string',
                'default'   => 'date',       
            ),
            'blb_order' => array(
                'type'      => 'string',
                'default'   => 'asc',       
            ),
        )
    ) );
 
}

function blog_listing_block_callback( $block_attributes, $content ) {
    
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
    $posts_per_page         = $block_attributes['posts_per_page'];
    $pagination_type        = $block_attributes['pagination_type'];
    $older_posts_label      = $block_attributes['older_posts_label'];
    $newer_posts_label      = $block_attributes['newer_posts_label'];
    $show_prev_next_buttons = $block_attributes['show_prev_next_buttons'];
    $previous_label         = $block_attributes['previous_label'];
    $next_label             = $block_attributes['next_label'];
    $blb_orderby            = $block_attributes['blb_orderby'];
    $blb_order              = $block_attributes['blb_order'];

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
                                'posts_per_page'    => $posts_per_page, 
                                'paged'             => get_query_var('paged'),
                                'orderby'           => $blb_orderby,
                                'order'             => $blb_order,
    );
    $blog_listing_query = new WP_Query( $blog_listing_query_args );
    
    ob_start(); 
    ?>
        <div class="blb-main">
			<div class="blb-container block-content container">
				<div class="row">
                    <?php 
                        if ( $blog_listing_query->have_posts() ) { 
                            while( $blog_listing_query->have_posts() ){
                                $blog_listing_query->the_post();
                                
                                $post_id        = get_the_ID();
                                $title          = get_the_title( $post_id ) ? get_the_title( $post_id ) : '';
                                $post_excerpt   = get_the_excerpt( $post_id ) ? get_the_excerpt( $post_id ) : '';
                                $post_content   = get_the_content( $post_id ) ? wp_trim_words( get_the_content( $post_id ), 200 ) : '';
                                $post_link      = get_the_permalink( $post_id ) ? get_the_permalink( $post_id ) : '';
                                $post_date      = get_the_date( $date_format, $post_id ) ? get_the_date( $date_format, $post_id ) : '';
                                $content_type   = ($block_attributes['show_excerpt_content'] == 'excerpt') ? $post_excerpt : $post_content;  
                    ?>
                    <div class="blog-post-listing <?php echo esc_html( $column_class, 'blog-listing' ); ?>" <?php echo esc_html( $blogDesc_style, 'blog-listing' ); ?> >
                        <div class="inner-wrapp" data-index="<?php echo esc_attr( $post_id, 'blog-listing' ); ?>">
                            <?php 
                                if($blogTitleLink){
                                    echo '<div class="title_wrapper">
                                            <h5 id="main_header">
                                                <a href="'.esc_url( $post_link ).'" class="post_link" target="'.esc_attr( $blogTitleLinkNewTab, 'blog-listing' ).'" rel="noopener" '.esc_html( $blogTitle_style, 'blog-listing' ).'>'.esc_html( $title, 'blog-listing' ).'</a>
                                            </h5>
                                        </div>';    
                                }
                                else{
                                    echo '<div class="title_wtitle_wrapperrapper">
                                            <h5 id="main_header" '.esc_attr( $blogTitle_style, 'blog-listing' ).'>'.esc_attr( $title, 'blog-listing' ).'</h5>
                                        </div>';
                                }
                            
                                if($show_date){
                                    echo '<p class="post_date">'.esc_attr__( $post_date, 'blog-listing' ).'</p>';
                                }
                            ?>
                            <div class="content main_content" <?php echo esc_attr__( $blogDesc_style, 'blog-listing' ); ?>>
                                <?php echo esc_attr( $content_type, 'blog-listing' ); ?>
                            </div>
                            
                            <?php 
                                if($show_readmore){
                                    echo '<a href="'.esc_url( $post_link ).'" class="post_link" target="'.esc_attr( $readmore_newtab, 'blog-listing' ).'" rel="noopener">
                                            '.esc_html( $custom_readmore_text, 'blog-listing' ).'
                                        </a>';       
                                }
                            ?>
                        </div>
                    </div>

                    <?php 
                            }
                        } 
                        wp_reset_postdata();
                    ?>
                </div>
                <div class="blb-fe-pagination">
                    <?php 
                        if( 'old_new' == $pagination_type ){ ?>
                                <div class="blb-new-old-pagination">
                                <span><?php next_posts_link( $older_posts_label, $blog_listing_query ->max_num_pages); ?></span>
                                <span style="float:right"><?php previous_posts_link( $newer_posts_label ); ?></span>
                            </div>
                        <?php }
                        else { ?>
                            <div class="blb-num-pagination">
                                <?php
                                    echo paginate_links( array(
                                        'current' => max( 1, get_query_var('paged') ),
                                        'prev_next' => $show_prev_next_buttons,
                                        'prev_text' => $previous_label,
                                        'next_text' => $next_label,
                                        'total' => $blog_listing_query->max_num_pages,
                                        'mid_size' => 1
                                    ) );
                                ?>
                            </div>
                        <?php  } ?>
                </div>
			</div>
		</div>
    <?php return ob_get_clean();
}
add_action( 'init', 'gutenberg_blog_listing_block' );
