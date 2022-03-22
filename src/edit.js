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
	BlockControls,
	ColorPalette,
	InspectorControls,
} from "@wordpress/block-editor";


import {
	PanelBody,
	PanelRow,
	PanelHeader,
	RangeControl,
	DropdownMenu,
	Toolbar,
	ToolbarButton,
	ToolbarGroup,
	SelectControl,
	Button,
	ToggleControl,
	FontSizePicker,
	__experimentalRadio as Radio,
	__experimentalRadioGroup as RadioGroup,
	__experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
	TextControl,
} from "@wordpress/components";
import { trash } from "@wordpress/icons";

const { Component } = wp.element;
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
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
		apiFetch({ path: "/wp/v2/posts?per_page=1" }).then((posts) => {
			// const new_array = posts.map((posts) => {
			// 	props.setAttributes( {categories : posts.categories})
			// } )
			this.props.setAttributes({ posts_array: posts });
		});

		apiFetch({ path: "/wp/v2/types" }).then((types) => {
			this.props.setAttributes({ post_types_array: types });
		});
	}

	render() {
		const { attributes, setAttributes } = this.props;
		const { posts_array } = this.props.attributes;
		const { post_types_array } = this.props.attributes;
		
		const post_types = post_types_array ? Object.values(post_types_array) : "";
		if (posts_array) {
			var back_listing = posts_array.map(function (item) {
				// console.log(item.content.rendered);
				var post_id = item.id ? item.id : "";
				var post_date = item.date ? Moment(item.date).format(attributes.date_format) : "";
				var main_title = item.title.rendered ? item.title.rendered : item.title;
				var show_excerpt_content = attributes.show_excerpt_content;
				var post_excerpt = item.excerpt.rendered
				? item.excerpt.rendered
				: item.excerpt;
				var post_content = item.content ? item.content.rendered : item.content ;
				var content_type = (show_excerpt_content == 'excerpt') ? post_excerpt : post_content;
				var clean_content = content_type;
				var post_link = item.link;
				let column_class = attributes.column_class;
				var descriptionFontSize = attributes.descriptionFontSize;
				var blogTitleFontSize = attributes.blogTitleFontSize;
				var blogTitleFontColor = attributes.blogTitleFontColor;
				var descriptionColor = attributes.descriptionColor;
				var readmore_target = (attributes.readmore_newtab) ? '__blank' : ''; 
				// var image_id = item.featured_media ? item.featured_media : '';
				// console.log(image_id);
				// var imageObj = wp.data.select('core').getMedia(image_id) ? wp.data.select('core').getMedia(image_id) : '';
				// console.log(imageObj);
				// var image_url = imageObj.source_url ? imageObj.source_url : ''; 
				// console.log(image_url);
				return (
					<>
					<div className={column_class + " back-blog-post-listing"}>
						<div class="back-inner-wrapp" data-index={post_id}>
							<a href={post_link} class="post_link">
								<div class="back-title_wrapper">
									<h5 id="back_main_header" style={{fontSize:blogTitleFontSize, color:blogTitleFontColor}}>{main_title}</h5>
								</div>
							</a>
							{
								attributes.show_date 
									? 
									<p class="post_date">{post_date}</p>
									: 
									''
							}
							
							<div>
								{/* <img src={image_url} /> */}
							</div>
							<div class="content" style={{fontSize:descriptionFontSize, color:descriptionColor}} dangerouslySetInnerHTML={{__html: clean_content}}/>
							{
								attributes.show_readmore 
									? 
									<a href={post_link} class="post_link" target={readmore_target}>
										{attributes.custom_readmore_text}
									</a>  
									: 
									''
							}
						</div>
					</div>
					</>
				);
			});
		}
		var type_dropdown = post_types
			? post_types.map(function (type) {
					return { value: type.rest_base, label: type.name };
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
		const fallbackFontSize = 18;
		const today_date = new Date();
		
		return (
			<div
			// onClick={() =>
			// 	setAttributes({
			// 		toolbar_show:attributes.toolbar_show == "none" ? "inline-block" : "none",
			// 		toolbar_border: attributes.toolbar_border == "none" ? '2px solid blue' : "none",
			// 	},)
			// }
			// style={{border: attributes.toolbar_border}}
			>
				<InspectorControls>
					<PanelBody title={"Title"} initialOpen={true}>
						{/* <RangeControl
							value={attributes.titleFontSize}
							onChange={(titleFontSize) => setAttributes({ titleFontSize })}
							min={0}
							max={100}
							step={2}
						/> */}
						<FontSizePicker
							fontSizes={ fontSizes }
							value={ attributes.titleFontSize }
							fallbackFontSize={ fallbackFontSize }
							onChange={(titleFontSize) => setAttributes({ titleFontSize })}
						/>
						<PanelRow>
							<strong>Color</strong>
						</PanelRow>
						<ColorPalette
							value={attributes.titleColor}
							onChange={(titleColor) => setAttributes({ titleColor })}
						/>
					</PanelBody>

					<PanelBody title={"Design"} initialOpen={false}>
						<PanelRow>
							<strong>Number of Columns</strong>
						</PanelRow>
						<RangeControl
							value={attributes.number_of_columns}
							onChange={changeNumberOfColumns}
							min={1}
							max={4}
							step={1}
						/>
						
						{/* <SelectControl
							label="Size"
							value={attributes.selected_type}
							options={type_dropdown}
							onChange={(newType) =>
								setAttributes({
									selected_type: newType,
									//  posts_array: apiFetch({ path: "/wp/v2/"+ attributes.selected_type }).then((posts) => {
									// 	// const new_array = posts.map((posts) => {
									// 	// 	props.setAttributes( {categories : posts.categories})
									// 	// } )
									// 	this.props.setAttributes({ posts_array: posts });
									// })
								})
							}
						/> */}
						<PanelRow>
							<strong>Blog Title</strong>
						</PanelRow>
						{/* <RangeControl
							value={attributes.descriptionFontSize}
							onChange={(descriptionFontSize) =>
								setAttributes({ descriptionFontSize })
							}
							min={0}
							max={100}
							step={2}
						/> */}
						<FontSizePicker
							fontSizes={ fontSizes }
							value={ attributes.blogTitleFontSize }
							fallbackFontSize={ fallbackFontSize }
							onChange={(blogTitleFontSize) => setAttributes({ blogTitleFontSize })}
						/>
						<ColorPalette
							value={attributes.blogTitleFontColor}
							onChange={(blogTitleFontColor) =>
								setAttributes({ blogTitleFontColor })
							}
						/>
						<PanelRow>
							<strong>Blog Body</strong>
						</PanelRow>
						{/* <RangeControl
							value={attributes.descriptionFontSize}
							onChange={(descriptionFontSize) =>
								setAttributes({ descriptionFontSize })
							}
							min={0}
							max={100}
							step={2}
						/> */}
						<FontSizePicker
							fontSizes={ descfontSizes }
							value={ attributes.descriptionFontSize }
							fallbackFontSize={ fallbackFontSize }
							onChange={(descriptionFontSize) => setAttributes({ descriptionFontSize })}
						/>
						<ColorPalette
							value={attributes.descriptionColor}
							onChange={(descriptionColor) =>
								setAttributes({ descriptionColor })
							}
						/>
					</PanelBody>
					<PanelBody title={"Content"} initialOpen={false}>
						<p>Show Content/Excerpt?</p>
						{/* <RadioGroup label="Width" onChange={(show_excerpt_content) => setAttributes({ show_excerpt_content })} checked= {attributes.show_excerpt_content}>
							<Radio value="excerpt">Excerpt</Radio>
							<Radio value="content">Content</Radio>
						</RadioGroup> */}
						<ToggleGroupControl isBlock value={attributes.show_excerpt_content} onChange={(show_excerpt_content) => setAttributes({ show_excerpt_content })} >
							<ToggleGroupControlOption value='excerpt' label="Excerpt" />
							<ToggleGroupControlOption value='content' label="Content" />
						</ToggleGroupControl>
						<ToggleControl
							label="Show Date?"
							// help={
							// 	attributes.show_date
							// 		? 'Show Date'
							// 		: 'Hide Date'
							// }
							checked={ attributes.show_date }
							onChange={(show_date) =>
								setAttributes({ show_date })
							}
						/>
						{
							attributes.show_date 
							?
							<>
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
							</>
							: 
							'' 
						}
						<ToggleControl
							label="Show Read More?"
							// help={
							// 	attributes.show_readmore
							// 		? 'Show Read More'
							// 		: 'Hide Read More'
							// }
							checked={ attributes.show_readmore }
							onChange={(show_readmore) =>
								setAttributes({ show_readmore })
							}
						/>
						{
							attributes.show_readmore 
							?
							<>
								<ToggleControl
								label="Open in new tab?"
								checked={ attributes.readmore_newtab }
								onChange={(readmore_newtab) =>
									setAttributes({ readmore_newtab })
								}
								/>
								<TextControl
									label='Custom "Read More" text'
									value={ attributes.custom_readmore_text }
									onChange={ ( custom_readmore_text ) =>  setAttributes({ custom_readmore_text })}
								/>
							</>
							: 
							'' 
						}
					</PanelBody>
				</InspectorControls>
				{/* <Toolbar label="Options" style={{ display: attributes.toolbar_show }}>
					<ToolbarGroup>
						<ToolbarButton
							icon={trash}
							label="Remoe"
							onClick={() => console.log("clicked removed")}
						/>
					</ToolbarGroup>
				</Toolbar> */}

				<RichText
					tagName="h2"
					placeholder="Enter Blog Title"
					className="text-center"
					value={attributes.page_title}
					onChange={(page_title) => setAttributes({ page_title })}
					style={{
						color: attributes.titleColor,
						textAlign: attributes.textAlign,
						fontSize: attributes.titleFontSize,
					}}
				/>

				<div className="block-content container">
					<div className="row">
						<br />
						{back_listing}
					</div>
				</div>
			</div>
		);
	}
}

export default BlockEdit;
