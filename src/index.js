/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import apiFetch from '@wordpress/api-fetch';
const { Component } = wp.element;
const { RichText } = wp.blockEditor;
// const { ToggleControl, PanelBody, PanelRow, CheckboxControl, SelectControl, ColorPicker, Toolbar, IconButton } = wp.components;
class BlockEdit extends Component{


	componentDidMount(){
		apiFetch( { path: '/wp/v2/posts' } ).then( posts => {
			// const new_array = posts.map((posts) => {
			// 	props.setAttributes( {categories : posts.categories})
			// } )
			this.props.setAttributes( {posts_array : posts})
			
		} );
	}

	render() {
		const { attributes, setAttributes } = this.props;
		const { posts_array } = this.props.attributes;

		if(posts_array){
			var back_listing = posts_array.map(function(item){
				
				var post_id = item.id ? item.id : '';
				var post_date = item.date ? item.date : ''; 
				var main_title = item.title.rendered ? item.title.rendered : item.title;
				var post_excerpt = item.excerpt.rendered ? item.excerpt.rendered : item.excerpt;
				var clean_content = post_excerpt.replace(/(<([^>]+)>)/gi, "")
				var post_link = item.link;
	
				return (
					
					<div className='back-blog-post-listing'>
						<div class= "back-inner-wrapp" data-index={post_id}>
							<div class="back-title_wrapper">
								<h5 id="back_main_header">{main_title}</h5>
							</div>
							<p class="post_date">{post_date}</p>
							<p class="content">{clean_content}</p>
							<a href = {post_link} class="post_link">Read More</a>
						</div>
					</div>
				);
				
			});
			
		}
		return (
			<div>
				<RichText
					tagName = 'h2'
					placeholder = 'Enter Blog Title'
					className = "text-center"
					value = { attributes.page_title }
					onChange = { (page_title) => setAttributes( { page_title } ) }
					style = {{ color: attributes.titleColor, textAlign: attributes.textAlign, fontSize: attributes.titleFontSize }}
				/>
				<div className='block-content'>
					<br/>
					{back_listing}
				</div>

			</div>
		);
	}
}
/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( 'create-block/blog-listing', {
	/**
	 * @see ./edit.js
	 */
	attributes: {
		posts_array : {
			type : 'array',
			source: 'query',
			selector: '.blog-post-listing',
			query : {
				id : {
					attribute : 'data-index',
					source : 'attribute',
					selector : '.inner-wrapp'
				},
				date : {
					type: 'string',
					source: 'text',
					selector: '.post_date'
				},
				title : {
					type: 'string',
					source: 'text',
					selector: '#main_header'
				},
				excerpt : {
					type: 'string',
					source: 'html',
					selector: '.content'
				},
				link : {
					attribute : 'href',
					type: 'string',
					source: 'attribute',
					selector: '.post_link'
				},
			}
		},
		page_title : {
			type : 'string',
			source : 'html',
			selector : 'h2',
		}
	},
	edit: BlockEdit,

	/**
	 * @see ./save.js
	 */
	save,
} );
