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
	title: 'Blog Listing',
	icon: 'list-view',
	category: 'widgets',
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
		page_title: {
			type: "string",
			source: "html",
			selector: "h2.text-center",
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
		titleFontSize: {
			type: "number",
			default: 22,
		},
		blogTitleFontSize: {
			type: "number",
			default: 22,
		},
		descriptionFontSize: {
			type: "number",
			default: 14,
		},
		titleColor: {
			type: "string",
			default: "#333",
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
			default: true,
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
		numberofPosts: {
			type: "number",
			default: 10,
		}
	},
	edit: BlockEdit,

	/**
	 * @see ./save.js
	 */
	save: ( props ) => {
		return null;
	},
});
