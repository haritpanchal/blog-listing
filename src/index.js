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

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType("create-block/blog-listing-block", {
	/**
	 * @see ./edit.js
	 */
	title: 'Custom Post Types Listing Block',
	description: "Gutenberg Block to list posts and custom post types with additional features.",
	icon: 'list-view',
	category: 'widgets',
	apiVersion: 1,	
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
				content: {
					type: "string",
					source: "html",
					selector: ".main_content",
				},
				link: {
					attribute: "href",
					type: "string",
					source: "attribute",
					selector: ".post_link",
				},
			},
		},
		post_types_array: {
			type: "array",
			source: "query",
			query: {
				name: {
					type: "string",
					source: "html",
				},
				rest_base: {
					type: "string",
					source: "html",
				},
			},
		},
		title_alignment: {
			type: "string",
			default: "none",
		},
		toolbar_show: {
			type: "string",
			default: "none",
		},
		toolbar_border: {
			type: "string",
			default: "none",
		},
		number_of_columns: {
			type: "number",
			default: 1,
		},
		column_class: {
			type: "string",
			default: "col-12",
		},
		blogTitleFontSize: {
			type: "number",
			default: 22,
		},
		descriptionFontSize: {
			type: "number",
			default: 14,
		},
		blogTitleFontColor: {
			type: "string",
			default: "#333",
		},
		blogTitleLink: {
			type: "boolean",
			default: true,
		},
		blogTitleLinkNewTab: {
			type: "boolean",
			default: false,
		},
		descriptionColor: {
			type: "string",
			default: "#333",
		},
		show_excerpt_content: {
			type: "string",
			default: 'content',
		},
		show_date: {
			type: "boolean",
			default: true,
		},
		date_format: {
			type: "string",
			default: "MM-DD-YY",	
		},
		show_readmore: {
			type: "boolean",
			default: true,
		},
		custom_readmore_text: {
			type: "string",
			default: "Read More"
		},
	    readmore_newtab: {
			type: "boolean",
			default: false,
		},
		selected_type: {
			type: "string",
			default: "posts",
		},
		blog_view: {
			type: "string",
			default: "list"
		},
		posts_per_page: {
			type: "number",
			default: 10,
		},
		pagination_type: {
			type: 'string',
			default: 'old_new'
		},
		older_posts_label: {
			type: 'string',
			default: 'Older Posts'
		},
		newer_posts_label: {
			type: 'string',
			default: 'Newer Posts'
		},
		show_prev_next_buttons: {
			type: "boolean",
			default: true,
		},
		previous_label: {
			type: 'string',
			default: 'Previous'
		},
		next_label: {
			type: 'string',
			default: 'Next'
		},
		sorting_method: {
			type: 'string',
			default: 'old_new'
		},
		blb_orderby: {
			type: 'string',
			default: 'date'
		},
		blb_order: {
			type: 'string',
			default: 'asc'
		},
		open_design_panel: {
			type: "boolean",
			default: false,
		},
		open_content_panel: {
			type: "boolean",
			default: false,
		},
		open_pagination_panel: {
			type: "boolean",
			default: false,
		},
	},
	edit: BlockEdit,

	/**
	 * @see ./save.js
	 */
	save: ( props ) => {
		return null;
	},
});
