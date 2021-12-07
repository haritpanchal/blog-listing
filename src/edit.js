/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import 'bootstrap/dist/css/bootstrap.min.css';


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	useBlockProps,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	PanelBody,
	IconButton,
	RangeControl,
	FontSizePicker,
} from "@wordpress/components";
import {
	Toolbar,
	ToolbarButton,
	ToolbarGroup,
	ToolbarDropdownMenu,
} from "@wordpress/components";
import {
	formatBold,
	formatItalic,
	more,
	arrowLeft,
	arrowRight,
	arrowUp,
	arrowDown,
	trash,
} from "@wordpress/icons";

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
		apiFetch({ path: "/wp/v2/posts" }).then((posts) => {
			// const new_array = posts.map((posts) => {
			// 	props.setAttributes( {categories : posts.categories})
			// } )
			this.props.setAttributes({ posts_array: posts });
		});
	}

	render() {
		const { attributes, setAttributes } = this.props;
		const { posts_array } = this.props.attributes;
		if (posts_array) {
			var back_listing = posts_array.map(function (item) {
				var post_id = item.id ? item.id : "";
				var post_date = item.date ? Moment(item.date).format("MM-DD-YYYY") : "";
				var main_title = item.title.rendered ? item.title.rendered : item.title;
				var post_excerpt = item.excerpt.rendered
					? item.excerpt.rendered
					: item.excerpt;
				var clean_content = post_excerpt.replace(/(<([^>]+)>)/gi, "");
				var post_link = item.link;
				let column_class = attributes.column_class;

				return (
					<div className={column_class + ' back-blog-post-listing'}>
						<div class="back-inner-wrapp" data-index={post_id}>
							<div class="back-title_wrapper">
								<h5 id="back_main_header">{main_title}</h5>
							</div>
							<p class="post_date">{post_date}</p>
							<p class="content">{clean_content}</p>
							<a href={post_link} class="post_link">
								Read More
							</a>
						</div>
					</div>
				);
			});
		}

		const changeNumberOfColumns = (newColumns) => {
			let colClass = '';
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

		console.log(attributes.number_of_columns)
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
					<PanelBody>
						<p>
							<strong>Number of Columns</strong>
						</p>
						<RangeControl
							value={attributes.number_of_columns}
							onChange={changeNumberOfColumns}
							min={1}
							max={4}
							step={1}
						/>
					</PanelBody>
				</InspectorControls>
				<Toolbar label="Options" style={{ display: attributes.toolbar_show }}>
					<ToolbarGroup>
						<ToolbarButton
							icon={trash}
							label="Remoe"
							onClick={() => console.log("clicked removed")}
						/>
					</ToolbarGroup>
				</Toolbar>

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
