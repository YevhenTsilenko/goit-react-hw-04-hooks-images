(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3WpX-",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__1BJOg"}},14:function(e,t,a){e.exports={Loader:"Loader_Loader__3kEwh"}},15:function(e,t,a){e.exports={Button:"Button_Button__1HLKZ"}},20:function(e,t,a){},4:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1mNDR",SearchForm:"Searchbar_SearchForm__35jCG",SearchForm_button:"Searchbar_SearchForm_button__36NoM",SearchForm_button_label:"Searchbar_SearchForm_button_label__EsfLJ",SearchForm_input:"Searchbar_SearchForm_input__VM9w0"}},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(12),o=a.n(r),i=(a(20),a(3)),s=a(4),l=a.n(s),u=a(0);function m(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(i.a)(a,2),r=c[0],o=c[1];return Object(u.jsx)("header",{className:l.a.Searchbar,children:Object(u.jsxs)("form",{className:l.a.SearchForm,onSubmit:function(e){if(e.preventDefault(),""===r.trim())return alert("Please enter something");t(r),o("")},children:[Object(u.jsx)("button",{type:"submit",className:l.a.SearchForm_button,children:Object(u.jsx)("span",{className:l.a.SearchForm_button_label,children:"Search"})}),Object(u.jsx)("input",{className:l.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:r,onChange:function(e){o(e.currentTarget.value.toLowerCase())},name:"query"})]})})}var j=a(9),b=a.n(j);function h(e){var t=e.modalImg,a=e.onClose;Object(n.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}}));var c=function(e){"Escape"===e.code&&a()};return Object(u.jsx)("div",{className:b.a.Overlay,onClick:function(e){e.currentTarget===e.target&&a()},children:Object(u.jsx)("div",{className:b.a.Modal,children:Object(u.jsx)("img",{src:t.largeImageURL,alt:t.tags})})})}var d=a(11),g=a(10),_=a.n(g);function f(e){var t=e.images,a=e.onClick;return t.map((function(e){return Object(u.jsx)("li",{className:_.a.ImageGalleryItem,children:Object(u.jsx)("img",{onClick:function(){return a(e)},src:e.webformatURL,alt:e.tags,className:_.a.ImageGalleryItem_image})},e.id)}))}a(22);var O=a(13),p=a.n(O),x=a(14),v=a.n(x);function S(){return Object(u.jsx)("div",{className:v.a.Loader,children:Object(u.jsx)(p.a,{type:"Circles",color:"#3f51b5",height:100,width:100,timeout:5e3,"margin-left":300})})}var y=a(15),I=a.n(y);function w(e){var t=e.onClick;return Object(u.jsx)("button",{onClick:t,className:I.a.Button,type:"button",children:"Load more"})}var C=a(7),F=a.n(C);function N(e){var t=e.query,a=e.onClick,c=e.page,r=e.loadNewPage,o=Object(n.useState)([]),s=Object(i.a)(o,2),l=s[0],m=s[1],j=Object(n.useState)(null),b=Object(i.a)(j,2),h=b[0],g=b[1],_=Object(n.useState)("idle"),O=Object(i.a)(_,2),p=O[0],x=O[1];Object(n.useEffect)((function(){t&&v(t,c)}),[t,c]);var v=function(e,t){1===t&&0===l.length&&y(e,t),1===t&&0!==l.length&&(m([]),y(e,t)),t>1&&(y(e,t),I())},y=function(e,t){(function(e,t){return fetch("".concat("https://pixabay.com/api/","/?q=").concat(e,"&page=").concat(t,"&key=").concat("22485348-da19140f48b52c54df68447da","&image_type=photo&orientation=horizontal&per_page=").concat(12)).then((function(t){return t.ok?t.json():Promise.reject(new Error("There are no images with ".concat(e)))}))})(e,t).then((function(e){var t=e.hits;m((function(e){return[].concat(Object(d.a)(e),Object(d.a)(t))})),x("resolved")})).catch((function(e){x("rejected"),g(e)}))},I=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})};return"idle"===p?Object(u.jsx)("p",{className:F.a.text_before_search,children:"You can find everything you want"}):"pending"===p?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("ul",{className:F.a.ImageGallery,children:Object(u.jsx)(f,{images:l,onClick:a})}),Object(u.jsx)(S,{})]}):"rejected"===p?h:"resolved"===p?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("ul",{className:F.a.ImageGallery,children:Object(u.jsx)(f,{images:l,onClick:a})}),l.length>0?Object(u.jsx)(w,{onClick:r}):Object(u.jsx)("p",{children:"Try to find something else"})]}):void 0}a(43);function k(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),o=Object(i.a)(r,2),s=o[0],l=o[1],j=Object(n.useState)(""),b=Object(i.a)(j,2),d=b[0],g=b[1],_=Object(n.useState)(1),f=Object(i.a)(_,2),O=f[0],p=f[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(m,{onSubmit:function(e){c(e),p(1)}}),Object(u.jsx)(N,{query:a,page:O,onClick:function(e){l(!0),g(e)},loadNewPage:function(){p((function(e){return e+1}))}}),s&&Object(u.jsx)(h,{modalImg:d,onClose:function(){l(!1)}})]})}var G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root")),G()},7:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3V7jH",text_before_search:"ImageGallery_text_before_search__3XFvC"}},9:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2j_I_",Modal:"Modal_Modal__pzwNd"}}},[[44,1,2]]]);
//# sourceMappingURL=main.5a07c2c6.chunk.js.map