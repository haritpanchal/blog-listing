/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import Moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	const { posts_array } = props.attributes;
	var posts_array_listing = posts_array ? posts_array.map(function (item) {
		var post_id 			= item.id ? item.id : "";
		var post_date 			= item.date ? Moment(item.date).format(props.attributes.date_format) : "";
		var main_title 			= item.title.rendered ? item.title.rendered : item.title;
		var post_excerpt 		= item.excerpt.rendered ? item.excerpt.rendered : item.excerpt;
		var post_link 			= item.link;
		let column_class 		= props.attributes.column_class;
		var descriptionFontSize = props.attributes.descriptionFontSize;
		var blogTitleFontSize 	= props.attributes.blogTitleFontSize;
		var blogTitleFontColor 	= props.attributes.blogTitleFontColor;
		var descriptionColor 	= props.attributes.descriptionColor;
		var post_content 		= item.content.rendered ? item.content.rendered : item.content ;
		var content_type 		= (props.attributes.show_excerpt_content == 'excerpt') ? post_excerpt : post_content;
		var readmore_target 	= (props.attributes.readmore_newtab) ? '__blank' : ''; 
		var blogTitleLinkNewTab = (props.attributes.blogTitleLinkNewTab) ? '__blank' : ''; 

		return (
			<div className={column_class + " blog-post-listing"}>
				<div class="inner-wrapp" data-index={post_id}>
					{
						props.attributes.blogTitleLink 
						?
						<a href={post_link} class="post_link" target={blogTitleLinkNewTab} rel="noopener">
							<div class="title_wrapper">
								<h5 id="main_header" style={{fontSize:blogTitleFontSize, color:blogTitleFontColor}}>{main_title}</h5>
							</div>
						</a>
						:
						<div class="title_wrapper">
							<h5 id="main_header" style={{fontSize:blogTitleFontSize, color:blogTitleFontColor}}>{main_title}</h5>
						</div>
					}
					{ props.attributes.show_date && <p class="post_date">{post_date}</p> }
					<div class="content main_content" style={{fontSize:descriptionFontSize, color:descriptionColor}} dangerouslySetInnerHTML={{__html: content_type}}/>
					{
						props.attributes.show_readmore && 
							<a href={post_link} class="post_link" target={readmore_target} rel="noopener">
								{props.attributes.custom_readmore_text}
							</a> 
					}
				</div>
			</div>
		);
	}) : '';
	posts_array_listing 	= ((typeof posts_array_listing !== 'undefined') 
							? (Object.keys(posts_array_listing).length !== 0 ? posts_array_listing : <div className='text-center'><h3>No Content</h3></div>) 
							: '');
	return (
		<div>
			<RichText.Content
				tagName="h2"
				className="text-center"
				value={props.attributes.page_title}
				style={{color: props.attributes.titleColor}}
			/>
			<div class="block-content container">
				<div className="row">{posts_array_listing}</div>
			</div>
		</div>
	);
}
