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
	var posts_array_listing = posts_array.map(function (item) {
		var post_id = item.id ? item.id : "";
		var post_date = item.date ? Moment(item.date).format(props.attributes.date_format) : "";
		console.log(post_date);
		var main_title = item.title.rendered ? item.title.rendered : item.title;
		var post_excerpt = item.excerpt.rendered
			? item.excerpt.rendered
			: item.excerpt;
		var clean_content = post_excerpt.replace(/(<([^>]+)>)/gi, "");
		var post_link = item.link;
		let column_class = props.attributes.column_class;
		var descriptionFontSize = props.attributes.descriptionFontSize;
		var blogTitleFontSize = props.attributes.blogTitleFontSize;
		var blogTitleFontColor = props.attributes.blogTitleFontColor;
		var descriptionColor = props.attributes.descriptionColor;
		var titleColor = props.attributes.titleColor;
		var post_content = item.content.rendered ? item.content.rendered : item.content ;
		var content_type = (props.attributes.show_excerpt_content == 'excerpt') ? post_excerpt : post_content;
		var readmore_target = (props.attributes.readmore_newtab) ? '__blank' : ''; 
		// console.log(item);
		// console.log(item.content);
		// console.log(item.content.rendered);
		// var categories = item.categories ? item.categories : '';

		// var category_listing = categories.map(function(item){
		// 	return <li class="cats-listing">
		// 		{item}
		// 	</li>
		// })

		return (
			<div className={column_class + " blog-post-listing"}>
				<div class="inner-wrapp" data-index={post_id}>
					<a href={post_link} class="post_link">
						<div class="title_wrapper">
							<h5 id="main_header" style={{fontSize:blogTitleFontSize, color:blogTitleFontColor}}>{main_title}</h5>
						</div>
					</a>
					{/* <ul class="blog-cat-listing">{category_listing}</ul> */}
					{
						props.attributes.show_date 
							? 
							<p class="post_date">{post_date}</p>
							: 
							''
					}
					<div class="content main_content" style={{fontSize:descriptionFontSize, color:descriptionColor}} dangerouslySetInnerHTML={{__html: content_type}}/>
					{
						props.attributes.show_readmore 
							? 
							<a href={post_link} class="post_link" target={readmore_target} rel="noopener">
								{props.attributes.custom_readmore_text}
							</a>
							: 
							''
					}
					

					{/* <p class="excerpt">{item.status}</p> */}
				</div>
			</div>
		);
	});

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
