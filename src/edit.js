/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import "bootstrap/dist/css/bootstrap.min.css";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	useBlockProps,
	ColorPalette,
	InspectorControls,
	BlockControls,
	BlockMover,
} from "@wordpress/block-editor";


import {
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
	FontSizePicker,
	__experimentalRadio as Radio,
	__experimentalRadioGroup as RadioGroup,
	__experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
	TextControl,
	__experimentalNumberControl as NumberControl,
} from "@wordpress/components";

const { Component } = wp.element;
import "./editor.scss";
import apiFetch from "@wordpress/api-fetch";
import Moment from "moment";
const { RichText } = wp.blockEditor;

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

class BlockEdit extends Component {
	
	componentDidMount() {
		apiFetch({ path: "/wp/v2/"+this.props.attributes.selected_type+'/?per_page='+this.props.attributes.numberofPosts }).then((posts) => {
			this.props.setAttributes({ posts_array: posts });
		});
		apiFetch({ path: "/wp/v2/types" }).then((types) => {
			this.props.setAttributes({ post_types_array: types });
		});
	}
	
	render() {
		const { attributes, setAttributes } 	= this.props;
		const { posts_array } 					= this.props.attributes;
		const { post_types_array } 				= this.props.attributes;
		const post_types 						= post_types_array ? Object.values(post_types_array) : "";
		
		if (posts_array) {
			var back_listing = posts_array ? posts_array.map(function (item) {
				var post_id 				= item.id ? item.id : "";
				var post_date	 			= item.date ? Moment(item.date).format(attributes.date_format) : "";
				var main_title 				= item.title.rendered ? item.title.rendered : item.title;
				var show_excerpt_content 	= attributes.show_excerpt_content;
				var post_excerpt 			= item.excerpt.rendered ? item.excerpt.rendered : item.excerpt;
				var post_content 			= item.content ? item.content.rendered : item.content ;
				var content_type 			= (show_excerpt_content == 'excerpt') ? post_excerpt : post_content;
				var clean_content			= content_type;
				var post_link 				= item.link;
				let column_class			= attributes.column_class;
				var descriptionFontSize 	= attributes.descriptionFontSize;
				var blogTitleFontSize 		= attributes.blogTitleFontSize;
				var blogTitleFontColor 		= attributes.blogTitleFontColor;
				var descriptionColor 		= attributes.descriptionColor;
				var readmore_target 		= (attributes.readmore_newtab) ? '__blank' : ''; 
				var blogTitleLinkNewTab 	= (attributes.blogTitleLinkNewTab) ? '__blank' : ''; 
				var categories = item.categories ? item.categories : '';
				
				return (
					<>
					<div className={column_class + " back-blog-post-listing"}>
						<div class="back-inner-wrapp" data-index={post_id}>
								
							{
								attributes.blogTitleLink 
								?
									<div class="back-title_wrapper">
											<h5 id="back_main_header">
												<a href={post_link} class="post_link" target={blogTitleLinkNewTab} style={{fontSize:blogTitleFontSize, color:blogTitleFontColor}}>
													{main_title}
												</a>
											</h5>
									</div>
								: 	
								<div class="back-title_wrapper">
									<h5 id="back_main_header" style={{fontSize:blogTitleFontSize, color:blogTitleFontColor}}>{main_title}</h5>
								</div>
							}
							
							{ attributes.show_date && <p class="post_date">{post_date}</p> }
							<div class="content" style={{fontSize:descriptionFontSize, color:descriptionColor}} dangerouslySetInnerHTML={{__html: clean_content}}/>
							{
								attributes.show_readmore &&
									<a href={post_link} class="post_link" target={readmore_target}>
										{attributes.custom_readmore_text}
									</a>  
							}
						</div>
					</div>
					</>
				);
			}): [];
		}
		back_listing =  ((typeof back_listing !== 'undefined') 
							? (Object.keys(back_listing).length !== 0 
								? back_listing 
								: <div className='text-center'><h3>No Content</h3></div>) 
							: 'Loading');

		var postTypes 		= [];
		var defaultTypes 	= [ 'pages', 'media', 'menu-items', 'blocks', 'templates', 'template-parts', 'navigation', 'product' ];
		var type_dropdown 	= post_types
			? post_types.map(function (type, index) {
					if(!defaultTypes.includes(type.rest_base)){
						postTypes.push({ value: type.rest_base, label: type.name });
					}
			})
			: "";

		const changeNumberOfColumns = (newColumns) => {
			let colClass = "";
			switch (newColumns) {
				case 1:
					colClass = "col-12";
					break;
				case 2:
					colClass = "col-6";
					break;
				case 3:
					colClass = "col-4";
					break;
				case 4:
					colClass = "col-3";
					break;
				default:
					break;
			}

			setAttributes({
				number_of_columns: newColumns,
				column_class: colClass,
			});
		};
		const fontSizes = [
			{
				name: __( 'Small' ),
				slug: 'small',
				size: 18,
			},
			{
				name: __( 'Medium' ),
				slug: 'big',
				size: 22,
			},
			{
				name: __( 'Large' ),
				slug: 'big',
				size: 26,
			},
			{
				name: __( 'Extra Large' ),
				slug: 'big',
				size: 30,
			},
		];
		const descfontSizes = [
			{
				name: __( 'Small' ),
				slug: 'small',
				size: 10,
			},
			{
				name: __( 'Medium' ),
				slug: 'big',
				size: 14,
			},
			{
				name: __( 'Large' ),
				slug: 'big',
				size: 18,
			},
			{
				name: __( 'Extra Large' ),
				slug: 'big',
				size: 22,
			},
		];
		const fallbackFontSize 	= 18;
		const today_date 		= new Date();

		return (
			<>
				<InspectorControls>
					{/* <PanelBody title={"Title"} initialOpen={false}>
						<FontSizePicker
							fontSizes={ fontSizes }
							value={ attributes.titleFontSize }
							fallbackFontSize={ fallbackFontSize }
							onChange={(titleFontSize) => setAttributes({ titleFontSize })}
						/>
						<span>Color</span>
						<ColorPalette
							value={attributes.titleColor}
							onChange={(titleColor) => setAttributes({ titleColor })}
						/>
					</PanelBody> */}

					<PanelBody title={"Design"} initialOpen={true}>
						<p style={{marginBottom:0}}>Number of Columns</p>
						<RangeControl
						value={attributes.number_of_columns}
							onChange={changeNumberOfColumns}
							min={1}
							max={4}
							step={1}
						/>
						<strong>Blog Title</strong>
						<FontSizePicker
							fontSizes={ fontSizes }
							value={ attributes.blogTitleFontSize }
							fallbackFontSize={ fallbackFontSize }
							onChange={(blogTitleFontSize) => setAttributes({ blogTitleFontSize })}
						/>
						<ColorPalette
							value={attributes.blogTitleFontColor}
							onChange={(blogTitleFontColor) => setAttributes({ blogTitleFontColor }) }
						/>
						<strong>Blog Body</strong>
						<FontSizePicker
							fontSizes={ descfontSizes }
							value={ attributes.descriptionFontSize }
							fallbackFontSize={ fallbackFontSize }
							onChange={(descriptionFontSize) => setAttributes({ descriptionFontSize })}
						/>
						<ColorPalette
							value={attributes.descriptionColor}
							onChange={(descriptionColor) => setAttributes({ descriptionColor }) }
						/>
					</PanelBody>
					<PanelBody title={"Content"} initialOpen={false}>
						<br/>
						{/* <p>Number of Posts to Show</p>
						<NumberControl
							min={1}
							value={attributes.numberofPosts}
							onChange={(numberofPosts, event) => setAttributes({ numberofPosts:numberofPosts })}
							// onChange={(numberofPosts, extra) => console.log(numberofPosts, extra.event.target?.validity.valid)}
							// onChange={(newNumber) => apiFetch({ path: "/wp/v2/"+attributes.selected_type+'/?per_page='+newNumber }).then((posts) => {
							// 	this.props.setAttributes({ numberofPosts: newNumber , posts_array: posts});
							// })}
							
						/> */}
						{/* <RangeControl
							value={attributes.numberofPosts}
							// onChange={(numberofPosts) => setAttributes({ numberofPosts }) }
							onChange={(newNumber) => apiFetch({ path: "/wp/v2/"+attributes.selected_type+'/?per_page='+newNumber }).then((posts) => {
								this.props.setAttributes({ numberofPosts: newNumber , posts_array: posts});
							})}
							min={1}
							max={100}
							step={1}
						/> */}
						{
							postTypes.length > 1 && 
							<SelectControl
								label="Post Types"
								value={attributes.selected_type}
								options={postTypes}
								onChange={(newType) => apiFetch({ path: "/wp/v2/"+newType+'/?per_page='+attributes.numberofPosts }).then((posts) => {
									this.props.setAttributes({ selected_type: newType , posts_array: posts});
								})}
							/>
						}
						<p>Show Content/Excerpt?</p>
						<ToggleGroupControl isBlock value={attributes.show_excerpt_content} onChange={(show_excerpt_content) => setAttributes({ show_excerpt_content })} >
							<ToggleGroupControlOption value='excerpt' label="Excerpt" />
							<ToggleGroupControlOption value='content' label="Content" />
						</ToggleGroupControl>

						<ToggleControl
							label="Title Link?"
							checked={ attributes.blogTitleLink }
							onChange={(blogTitleLink) =>
								setAttributes({ blogTitleLink })
							}
						/>
						{
							attributes.blogTitleLink  &&
							<ToggleControl
								label="Title Link in new tab?"
								checked={ attributes.blogTitleLinkNewTab }
								onChange={(blogTitleLinkNewTab) => setAttributes({ blogTitleLinkNewTab }) }
							/>
						}
						<ToggleControl
							label="Show Date?"
							checked={ attributes.show_date }
							onChange={(show_date) => setAttributes({ show_date }) }
						/>
						{
							attributes.show_date &&
							<SelectControl 
								label="Date Format"
								value={ attributes.date_format }
								options={ [
									{ label: Moment(today_date).format("MM-DD-YY"), value:'MM-DD-YY' },
									{ label: Moment(today_date).format("YYYY-MM-DD"), value:'YYYY-MM-DD' },
									{ label: Moment(today_date).format("DD/MM/YY"), value:'DD/MM/YY' },
									{ label: Moment(today_date).format("MMM DD, YYYY"), value:'MMM DD, YYYY' },
								] }
								onChange={ ( date_format ) => setAttributes({date_format}) }
							/>
						}
						<ToggleControl
							label="Show Read More?"
							checked={ attributes.show_readmore }
							onChange={(show_readmore) => setAttributes({ show_readmore }) }
						/>
						{
							attributes.show_readmore &&
							<>
								<ToggleControl
								label="Open in new tab?"
								checked={ attributes.readmore_newtab }
								onChange={(readmore_newtab) => setAttributes({ readmore_newtab }) }
								/>
								<TextControl
									label='Custom "Read More" text'
									value={ attributes.custom_readmore_text }
									onChange={ ( custom_readmore_text ) =>  setAttributes({ custom_readmore_text })}
								/>
							</>
						}
					</PanelBody>
				</InspectorControls>
				{/* <RichText
					tagName="h2"
					placeholder="Enter Blog Title"
					className="text-center"
					value={attributes.block_title}
					onChange={ ( block_title ) =>  setAttributes({ block_title })}
					style={{
						color: attributes.titleColor,
						textAlign: attributes.textAlign,
						fontSize: attributes.titleFontSize,
					}}
				/> */}
				{/* {console.log(this.props)} */}
				
				<div className="block-content container">
					<div className="row">
						<br />
						{back_listing}
					</div>
					
				</div>
				
			</>
		);
	}
}

export default BlockEdit;
