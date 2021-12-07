/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";

/**
 * Internal dependencies
 */
import BlockEdit from "./edit";
import save from "./save";

// const { ToggleControl, PanelBody, PanelRow, CheckboxControl, SelectControl, ColorPicker, Toolbar, IconButton } = wp.components;

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType("create-block/blog-listing", {
	/**
	 * @see ./edit.js
	 */
	attributes: {
		posts_array: {
			type: "array",
			source: "query",
			selector: ".blog-post-listing",
			query: {
				id: {
					attribute: "data-index",
					source: "attribute",
					selector: ".inner-wrapp",
				},
				date: {
					type: "date",
					source: "text",
					selector: ".post_date",
				},
				title: {
					type: "string",
					source: "text",
					selector: "#main_header",
				},
				excerpt: {
					type: "string",
					source: "html",
					selector: ".content",
				},
				link: {
					attribute: "href",
					type: "string",
					source: "attribute",
					selector: ".post_link",
				},
			},
		},
		page_title: {
			type: "string",
			source: "html",
			selector: "h2",
		},
		title_alignment:{
			type: "string",
			default: "none",
		},
		toolbar_show:{
			type: "string",
			default: "none"
		},
		toolbar_border:{
			type: "string",
			default: "none"
		},
		number_of_columns:{
			type: "number",
			default: 1,
		},
		column_class:{
			type:"string",
			default: "col-12"
		},
	},
	edit: BlockEdit,

	/**
	 * @see ./save.js
	 */
	save: save,
});
