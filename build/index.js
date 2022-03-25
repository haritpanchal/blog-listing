(window["webpackJsonp_blog_listing"] = window["webpackJsonp_blog_listing"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp_blog_listing"] = window["webpackJsonp_blog_listing"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */



const {
  Component
} = wp.element;



const {
  RichText
} = wp.blockEditor;
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
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default()({
      path: "/wp/v2/" + this.props.attributes.selected_type + '/?per_page=' + this.props.attributes.numberofPosts
    }).then(posts => {
      this.props.setAttributes({
        posts_array: posts
      });
    });
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default()({
      path: "/wp/v2/types"
    }).then(types => {
      this.props.setAttributes({
        post_types_array: types
      });
    });
  }

  render() {
    const {
      attributes,
      setAttributes
    } = this.props;
    const {
      posts_array
    } = this.props.attributes;
    const {
      post_types_array
    } = this.props.attributes;
    const post_types = post_types_array ? Object.values(post_types_array) : "";

    if (posts_array) {
      var back_listing = posts_array ? posts_array.map(function (item) {
        var post_id = item.id ? item.id : "";
        var post_date = item.date ? moment__WEBPACK_IMPORTED_MODULE_7___default()(item.date).format(attributes.date_format) : "";
        var main_title = item.title.rendered ? item.title.rendered : item.title;
        var show_excerpt_content = attributes.show_excerpt_content;
        var post_excerpt = item.excerpt.rendered ? item.excerpt.rendered : item.excerpt;
        var post_content = item.content ? item.content.rendered : item.content;
        var content_type = show_excerpt_content == 'excerpt' ? post_excerpt : post_content;
        var clean_content = content_type;
        var post_link = item.link;
        let column_class = attributes.column_class;
        var descriptionFontSize = attributes.descriptionFontSize;
        var blogTitleFontSize = attributes.blogTitleFontSize;
        var blogTitleFontColor = attributes.blogTitleFontColor;
        var descriptionColor = attributes.descriptionColor;
        var readmore_target = attributes.readmore_newtab ? '__blank' : '';
        var blogTitleLinkNewTab = attributes.blogTitleLinkNewTab ? '__blank' : '';
        var categories = item.categories ? item.categories : '';
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          className: column_class + " back-blog-post-listing"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          class: "back-inner-wrapp",
          "data-index": post_id
        }, attributes.blogTitleLink ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
          href: post_link,
          class: "post_link",
          target: blogTitleLinkNewTab
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          class: "back-title_wrapper"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h5", {
          id: "back_main_header",
          style: {
            fontSize: blogTitleFontSize,
            color: blogTitleFontColor
          }
        }, main_title))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          class: "back-title_wrapper"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h5", {
          id: "back_main_header",
          style: {
            fontSize: blogTitleFontSize,
            color: blogTitleFontColor
          }
        }, main_title)), attributes.show_date && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
          class: "post_date"
        }, post_date), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          class: "content",
          style: {
            fontSize: descriptionFontSize,
            color: descriptionColor
          },
          dangerouslySetInnerHTML: {
            __html: clean_content
          }
        }), attributes.show_readmore && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
          href: post_link,
          class: "post_link",
          target: readmore_target
        }, attributes.custom_readmore_text))));
      }) : [];
    }

    back_listing = typeof back_listing !== 'undefined' ? Object.keys(back_listing).length !== 0 ? back_listing : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "text-center"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "No Content")) : '';
    var postTypes = [];
    var defaultTypes = ['pages', 'media', 'menu-items', 'blocks', 'templates', 'template-parts', 'navigation', 'product'];
    var type_dropdown = post_types ? post_types.map(function (type, index) {
      if (!defaultTypes.includes(type.rest_base)) {
        postTypes.push({
          value: type.rest_base,
          label: type.name
        });
      }
    }) : "";

    const changeNumberOfColumns = newColumns => {
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
        column_class: colClass
      });
    };

    const fontSizes = [{
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small'),
      slug: 'small',
      size: 18
    }, {
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium'),
      slug: 'big',
      size: 22
    }, {
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large'),
      slug: 'big',
      size: 26
    }, {
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Extra Large'),
      slug: 'big',
      size: 30
    }];
    const descfontSizes = [{
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small'),
      slug: 'small',
      size: 10
    }, {
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium'),
      slug: 'big',
      size: 14
    }, {
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large'),
      slug: 'big',
      size: 18
    }, {
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Extra Large'),
      slug: 'big',
      size: 22
    }];
    const fallbackFontSize = 18;
    const today_date = new Date();
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: "Title",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"], {
      fontSizes: fontSizes,
      value: attributes.titleFontSize,
      fallbackFontSize: fallbackFontSize,
      onChange: titleFontSize => setAttributes({
        titleFontSize
      })
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["ColorPalette"], {
      value: attributes.titleColor,
      onChange: titleColor => setAttributes({
        titleColor
      })
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: "Design",
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      style: {
        marginBottom: 0
      }
    }, "Number of Columns"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
      value: attributes.number_of_columns,
      onChange: changeNumberOfColumns,
      min: 1,
      max: 4,
      step: 1
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, "Blog Title"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"], {
      fontSizes: fontSizes,
      value: attributes.blogTitleFontSize,
      fallbackFontSize: fallbackFontSize,
      onChange: blogTitleFontSize => setAttributes({
        blogTitleFontSize
      })
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["ColorPalette"], {
      value: attributes.blogTitleFontColor,
      onChange: blogTitleFontColor => setAttributes({
        blogTitleFontColor
      })
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, "Blog Body"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FontSizePicker"], {
      fontSizes: descfontSizes,
      value: attributes.descriptionFontSize,
      fallbackFontSize: fallbackFontSize,
      onChange: descriptionFontSize => setAttributes({
        descriptionFontSize
      })
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["ColorPalette"], {
      value: attributes.descriptionColor,
      onChange: descriptionColor => setAttributes({
        descriptionColor
      })
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: "Content",
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), postTypes.length > 1 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
      label: "Post Types",
      value: attributes.selected_type,
      options: postTypes,
      onChange: newType => _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default()({
        path: "/wp/v2/" + newType + '/?per_page=' + attributes.numberofPosts
      }).then(posts => {
        this.props.setAttributes({
          selected_type: newType,
          posts_array: posts
        });
      })
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Show Content/Excerpt?"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["__experimentalToggleGroupControl"], {
      isBlock: true,
      value: attributes.show_excerpt_content,
      onChange: show_excerpt_content => setAttributes({
        show_excerpt_content
      })
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["__experimentalToggleGroupControlOption"], {
      value: "excerpt",
      label: "Excerpt"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["__experimentalToggleGroupControlOption"], {
      value: "content",
      label: "Content"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
      label: "Title Link?",
      checked: attributes.blogTitleLink,
      onChange: blogTitleLink => setAttributes({
        blogTitleLink
      })
    }), attributes.blogTitleLink && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
      label: "Title Link in new tab?",
      checked: attributes.blogTitleLinkNewTab,
      onChange: blogTitleLinkNewTab => setAttributes({
        blogTitleLinkNewTab
      })
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
      label: "Show Date?",
      checked: attributes.show_date,
      onChange: show_date => setAttributes({
        show_date
      })
    }), attributes.show_date && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
      label: "Date Format",
      value: attributes.date_format,
      options: [{
        label: moment__WEBPACK_IMPORTED_MODULE_7___default()(today_date).format("MM-DD-YY"),
        value: 'MM-DD-YY'
      }, {
        label: moment__WEBPACK_IMPORTED_MODULE_7___default()(today_date).format("YYYY-MM-DD"),
        value: 'YYYY-MM-DD'
      }, {
        label: moment__WEBPACK_IMPORTED_MODULE_7___default()(today_date).format("DD/MM/YY"),
        value: 'DD/MM/YY'
      }, {
        label: moment__WEBPACK_IMPORTED_MODULE_7___default()(today_date).format("MMM DD, YYYY"),
        value: 'MMM DD, YYYY'
      }],
      onChange: date_format => setAttributes({
        date_format
      })
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
      label: "Show Read More?",
      checked: attributes.show_readmore,
      onChange: show_readmore => setAttributes({
        show_readmore
      })
    }), attributes.show_readmore && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
      label: "Open in new tab?",
      checked: attributes.readmore_newtab,
      onChange: readmore_newtab => setAttributes({
        readmore_newtab
      })
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
      label: "Custom \"Read More\" text",
      value: attributes.custom_readmore_text,
      onChange: custom_readmore_text => setAttributes({
        custom_readmore_text
      })
    })))), console.log(attributes.page_title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "h2",
      placeholder: "Enter Blog Title",
      className: "text-center",
      value: attributes.page_title,
      onChange: page_title => setAttributes({
        page_title
      }),
      style: {
        color: attributes.titleColor,
        textAlign: attributes.textAlign,
        fontSize: attributes.titleFontSize
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "block-content container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), back_listing)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BlockEdit);

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])("create-block/blog-listing-block", {
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
          selector: ".inner-wrapp"
        },
        date: {
          type: "date",
          source: "text",
          selector: ".post_date"
        },
        title: {
          type: "string",
          source: "text",
          selector: "#main_header"
        },
        excerpt: {
          type: "string",
          source: "html",
          selector: ".content"
        },
        content: {
          type: "string",
          source: "html",
          selector: ".main_content"
        },
        link: {
          attribute: "href",
          type: "string",
          source: "attribute",
          selector: ".post_link"
        }
      }
    },
    post_types_array: {
      type: "array",
      source: "query",
      query: {
        name: {
          type: "string",
          source: "html"
        },
        rest_base: {
          type: "string",
          source: "html"
        }
      }
    },
    page_title: {
      type: "string",
      source: "html",
      selector: "h2"
    },
    title_alignment: {
      type: "string",
      default: "none"
    },
    toolbar_show: {
      type: "string",
      default: "none"
    },
    toolbar_border: {
      type: "string",
      default: "none"
    },
    number_of_columns: {
      type: "number",
      default: 1
    },
    column_class: {
      type: "string",
      default: "col-12"
    },
    titleFontSize: {
      type: "number",
      default: 22
    },
    blogTitleFontSize: {
      type: "number",
      default: 22
    },
    descriptionFontSize: {
      type: "number",
      default: 14
    },
    titleColor: {
      type: "string",
      default: "#333"
    },
    blogTitleFontColor: {
      type: "string",
      default: "#333"
    },
    blogTitleLink: {
      type: "boolean",
      default: true
    },
    blogTitleLinkNewTab: {
      type: "boolean",
      default: true
    },
    descriptionColor: {
      type: "string",
      default: "#333"
    },
    show_excerpt_content: {
      type: "string",
      default: 'content'
    },
    show_date: {
      type: "boolean",
      default: true
    },
    date_format: {
      type: "string",
      default: "MM-DD-YY"
    },
    show_readmore: {
      type: "boolean",
      default: true
    },
    custom_readmore_text: {
      type: "string",
      default: "Read More"
    },
    readmore_newtab: {
      type: "boolean",
      default: false
    },
    selected_type: {
      type: "string",
      default: "posts"
    },
    blog_view: {
      type: "string",
      default: "list"
    },
    numberofPosts: {
      type: "number",
      default: 10
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */




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

function save(props) {
  const {
    posts_array
  } = props.attributes;
  var posts_array_listing = posts_array ? posts_array.map(function (item) {
    var post_id = item.id ? item.id : "";
    var post_date = item.date ? moment__WEBPACK_IMPORTED_MODULE_3___default()(item.date).format(props.attributes.date_format) : "";
    var main_title = item.title.rendered ? item.title.rendered : item.title;
    var post_excerpt = item.excerpt.rendered ? item.excerpt.rendered : item.excerpt;
    var post_link = item.link;
    let column_class = props.attributes.column_class;
    var descriptionFontSize = props.attributes.descriptionFontSize;
    var blogTitleFontSize = props.attributes.blogTitleFontSize;
    var blogTitleFontColor = props.attributes.blogTitleFontColor;
    var descriptionColor = props.attributes.descriptionColor;
    var post_content = item.content.rendered ? item.content.rendered : item.content;
    var content_type = props.attributes.show_excerpt_content == 'excerpt' ? post_excerpt : post_content;
    var readmore_target = props.attributes.readmore_newtab ? '__blank' : '';
    var blogTitleLinkNewTab = props.attributes.blogTitleLinkNewTab ? '__blank' : '';
    console.log(props.attributes.page_title);
    console.log(props.attributes.show_readmore);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: column_class + " blog-post-listing"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "inner-wrapp",
      "data-index": post_id
    }, props.attributes.blogTitleLink ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: post_link,
      class: "post_link",
      target: blogTitleLinkNewTab,
      rel: "noopener"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "title_wrapper"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h5", {
      id: "main_header",
      style: {
        fontSize: blogTitleFontSize,
        color: blogTitleFontColor
      }
    }, main_title))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "title_wrapper"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h5", {
      id: "main_header",
      style: {
        fontSize: blogTitleFontSize,
        color: blogTitleFontColor
      }
    }, main_title)), props.attributes.show_date && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      class: "post_date"
    }, post_date), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "content main_content",
      style: {
        fontSize: descriptionFontSize,
        color: descriptionColor
      },
      dangerouslySetInnerHTML: {
        __html: content_type
      }
    }), props.attributes.show_readmore && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: post_link,
      class: "post_link",
      target: readmore_target,
      rel: "noopener"
    }, props.attributes.custom_readmore_text)));
  }) : '';
  posts_array_listing = typeof posts_array_listing !== 'undefined' ? Object.keys(posts_array_listing).length !== 0 ? posts_array_listing : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "text-center"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "No Content")) : '';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
    tagName: "h2",
    className: "text-center",
    value: props.attributes.page_title,
    style: {
      color: props.attributes.titleColor
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "block-content container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "row"
  }, posts_array_listing)));
}

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["moment"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map