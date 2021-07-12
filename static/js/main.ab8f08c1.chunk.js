(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(22),s=a.n(c),o=(a(49),a(20)),r=a(18),i=a.n(r),l=a(1),j=function(){return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)(o.b,{className:"linkRoute",activeClassName:"activeLinkRoute",to:i.a.home,children:"home"}),Object(l.jsx)(o.b,{className:"linkRoute",activeClassName:"activeLinkRoute",to:i.a.phonebook,children:"phonebook"}),Object(l.jsx)(o.b,{className:"linkRoute",activeClassName:"activeLinkRoute",to:i.a.gallery,children:"imagefinder"})]})},u=a(5),d=a(7),m=a(39),b=a(61),h=a.n(b);var p=function(e){var t=e.onSubmitQuery,a=Object(n.useState)(""),c=Object(d.a)(a,2),s=c[0],o=c[1];return Object(l.jsxs)("label",{className:"labelSearchBar",children:[Object(l.jsx)("h2",{className:"titleFormSearch",children:"Please enter the question:"}),Object(l.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),t(s)},children:[Object(l.jsx)("input",{className:"SearchBar-input",type:"text",autoComplete:"off",value:s,onChange:function(e){o(e.target.value)},autoFocus:!0,placeholder:"Search images and photos"}),Object(l.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(l.jsx)(h.a,{className:"imageIconSearch"})})]})]})},O=a(65),x=(a(93),a(68));var f=function(e){var t=e.id,a=e.previewURL,c=e.tags,s=e.likes,o=e.largeImageURL,r=e.views,i=e.downloads,j=e.comments,u=Object(n.useState)(!1),m=Object(d.a)(u,2),b=m[0],h=m[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(x.a,{open:b,onClose:function(){h(!1)},children:Object(l.jsxs)("div",{className:"modalWrapper",children:[Object(l.jsx)("img",{src:o,alt:c,className:"largeImgModal"}),Object(l.jsxs)("div",{className:"statsInfo",children:[Object(l.jsx)("h2",{className:"titleCountInfo",children:"Count Stats info"}),Object(l.jsxs)("div",{className:"descriptionIcons",children:[Object(l.jsxs)("span",{className:"iconView",children:[Object(l.jsx)("span",{className:"strongTextInfo",children:"likes:"}),s]}),Object(l.jsxs)("span",{className:"iconView",children:[Object(l.jsx)("span",{className:"strongTextInfo",children:"views:"}),r]}),Object(l.jsxs)("span",{className:"iconView",children:[Object(l.jsx)("span",{className:"strongTextInfo",children:"downloads:"}),i]}),Object(l.jsxs)("span",{className:"iconView",children:[Object(l.jsx)("span",{className:"strongTextInfo",children:"comments:"}),j]})]})]})]})}),Object(l.jsx)("li",{className:"itemGallery",onClick:function(){h(!0)},children:Object(l.jsx)("img",{src:a,alt:c,className:"imgGallery"})},t)]})};var g=function(e){var t=e.isLoading,a=e.images;return Object(l.jsxs)("div",{children:[t&&Object(l.jsx)("div",{className:"wrapperLoader",children:Object(l.jsx)(O.PushSpinner,{size:100,color:"rgb(16, 211, 9)"})}),Object(l.jsx)("ul",{className:"ImageGallery",children:a.map((function(e){var t=e.id,a=e.webformatURL,n=e.tags,c=e.likes,s=e.largeImageURL,o=e.views,r=e.downloads,i=e.comments;return Object(l.jsx)(f,{id:t,previewURL:a,tags:n,likes:c,largeImageURL:s,views:o,downloads:r,comments:i},t)}))})]})},N=a(32),v=a.n(N),C="22420681-313330a10c6fb67bf32b92a1a";var I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2?arguments[2]:void 0;return v()("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(C,"&image_type=photo&orientation=horizontal&per_page=12"),a).then((function(e){return e.data}))},y=(a(111),a(133));var k=function(e){var t=e.pagesCount,a=e.pageNum,n=e.onChangePageHandler;return Object(l.jsx)("div",{children:Object(l.jsx)(y.a,{count:Math.ceil(t/12),page:a,hideNextButton:!0,hidePrevButton:!0,onChange:n,variant:"outlined",shape:"rounded"})})},S=a(132),w=function(e,t){switch(t.type){case"searchImages":return t.payload.images;case"loadMoreImages":return[].concat(Object(m.a)(e),[t.payload.moreImages]);default:return e}};function F(){var e=Object(n.useState)(1),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),o=Object(d.a)(s,2),r=o[0],i=o[1],j=Object(n.useReducer)(w,[]),u=Object(d.a)(j,2),m=u[0],b=u[1],h=Object(n.useState)(""),O=Object(d.a)(h,2),x=O[0],f=O[1],N=Object(n.useState)(0),C=Object(d.a)(N,2),y=C[0],F=C[1],L=Object(n.useState)(!0),H=Object(d.a)(L,2),T=H[0],R=H[1];Object(n.useEffect)((function(){if(x&&T){var e=v.a.CancelToken.source();i(!0),I(x,a,{cancelToken:e.token}).then((function(e){F(e.totalHits),b({type:"searchImages",payload:{images:e.hits}})})).catch((function(e){return console.log(e)})).finally((function(){return i(!1)}))}if(a>1&&!T){var t=v.a.CancelToken.source();i(!0),I(x,a,{cancelToken:t.token}).then((function(e){b({type:"loadMoreImages",payload:{moreImages:e.hits}})})).catch((function(e){return console.log(e)})).finally((function(){return i(!1)}))}}),[x,a,T]);var B=setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),500);return Object(n.useEffect)((function(){return function(){clearTimeout(B)}}),[m,B]),Object(l.jsxs)("div",{children:[Object(l.jsx)(p,{onSubmitQuery:function(e){e!==x&&""!==e&&(f(e),c(1),R(!0))}}),m.length>0&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(g,{images:m.flat(),isLoading:r}),Object(l.jsxs)("div",{className:"wrapperBtnsLoadMore",children:[Object(l.jsx)(S.a,{variant:"contained",color:"primary",className:"js-btn-loadMore",onClick:function(){c(a+1),R(!1)},children:"load more"}),Object(l.jsx)(k,{pagesCount:y,pageNum:a,onChangePageHandler:function(e){c(Number(e.target.textContent)),R(!0)}})]})]})]})}var L=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"titleHome",children:"Welcome to start page"}),Object(l.jsx)("span",{className:"subTitleHome",children:"All tasks are completed using react hooks, and two tasks combined using react router"}),Object(l.jsxs)("div",{className:"wrapperDescription",children:[Object(l.jsx)("span",{className:"description",children:"In the first task, form validation was added during data entry, as well as saving all data to local storage"}),Object(l.jsx)("span",{className:"description",children:'The second task, when clicking on a specific page, shows only a single item. When you click on "load more", additional elements are loaded using the API.'})]})]})};function H(){return Object(l.jsx)("article",{className:"wrapperArticleNotFound",children:Object(l.jsxs)("div",{className:"wrapperNotFound",children:[Object(l.jsxs)("div",{className:"infoPageTitle",children:[Object(l.jsx)("h1",{className:"titleNotFound",children:" page not found"}),Object(l.jsx)("h2",{className:"subtitleNotFound",children:"404"})]}),Object(l.jsx)(o.b,{className:"linkRouteMain",to:i.a.home,children:"return to main page..."})]})})}var T=function(e){var t=e.filter,a=e.onFilterContactsByNameHandler;return Object(l.jsx)("div",{className:"wrapperInputFilter",children:Object(l.jsxs)("label",{htmlFor:"",className:"labelInputFormContact",children:[Object(l.jsx)("span",{className:"titleInputContact",children:"search name:"}),Object(l.jsx)("input",{type:"text",value:t,onChange:a,className:"js-inputFilter"})]})})},R=function(e){var t=e.name,a=e.onHandleChangeInputs,c=e.onCheckUniqNameInput,s=Object(n.useState)(!0),o=Object(d.a)(s,2),r=o[0],i=o[1];return Object(l.jsx)("aside",{children:Object(l.jsxs)("label",{htmlFor:"",className:"labelInputFormContact",children:[Object(l.jsx)("span",{className:"titleInputContact",children:"name:"}),Object(l.jsx)("input",{type:"text",name:"name",value:t,onInput:function(e){var t=e.target,n=t.value,c=t.pattern;0===n.length?i(!0):i(Boolean(n.match(c))),a(e)},className:r?c()?"inputForm inputFormNotUniq":"inputForm":"inputForm inputFormBad",placeholder:"please enter the name...",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})})},B=function(e){var t=e.number,a=e.onHandleChangeInputs;return Object(l.jsx)("aside",{children:Object(l.jsxs)("label",{htmlFor:"",className:"labelInputFormContact",children:[Object(l.jsx)("span",{className:"titleInputContact",children:"number:"}),Object(l.jsx)("input",{type:"tel",name:"number",value:t,onInput:a,className:t.length>12?"inputForm inputFormBad":"inputForm",placeholder:"please enter the nubmer...",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]})})},M=a(134),U=function(e){var t=e.onHandleSubmitContact,a=e.contacts,c=Object(n.useState)(""),s=Object(d.a)(c,2),o=s[0],r=s[1],i=Object(n.useState)(""),j=Object(d.a)(i,2),u=j[0],m=j[1];Object(n.useEffect)((function(){var e=localStorage.getItem("itemsLocal");if(e){var t=JSON.parse(e),a=t.nameContact,n=t.numberContact;r(a),m(n)}}),[]),Object(n.useEffect)((function(){localStorage.setItem("itemsLocal",JSON.stringify({nameContact:o,numberContact:u}))}),[o,u]);var b=function(e){var t=e.target,a=t.name,n=t.value;"name"===a&&r(n),"number"===a&&m(n)},h=function(){return a.some((function(e){return e.name===o}))};return Object(l.jsxs)("aside",{children:[Object(l.jsx)("h2",{className:"subtitleFormAddContact",children:"Form for adding contacts"}),Object(l.jsxs)("div",{className:"colorValidateInfo",children:[Object(l.jsx)("h3",{className:"subtitleColorsScheme",children:"Color scheme of :focus inputs"}),Object(l.jsxs)("div",{className:"itemValidateColor",children:[Object(l.jsx)("div",{className:"colorWrapper colorGood"}),Object(l.jsx)("span",{className:"descriptionColorInfo",children:" - all good"})]}),Object(l.jsxs)("div",{className:"itemValidateColor",children:[Object(l.jsx)("div",{className:"colorWrapper colorMedium"}),Object(l.jsx)("span",{className:"descriptionColorInfo",children:" - is not uniq name"})]}),Object(l.jsxs)("div",{className:"itemValidateColor",children:[Object(l.jsx)("div",{className:"colorWrapper colorBad"}),Object(l.jsx)("span",{className:"descriptionColorInfo",children:" - bad input data"})]})]}),Object(l.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),h()||(t({id:Object(M.a)(),name:o,number:u}),r(""),m(""))},children:[Object(l.jsx)(R,{name:o,onHandleChangeInputs:b,onCheckUniqNameInput:h}),Object(l.jsx)(B,{number:u,onHandleChangeInputs:b}),Object(l.jsx)("button",{type:"submit",className:"js-btn-addContact",children:"add to contacts"})]})]})},A=function(e){var t=e.id,a=e.name,n=e.number,c=e.ondeleteContactHandler;return Object(l.jsxs)("div",{className:"contactCard",children:[Object(l.jsx)("h2",{className:"titleNameCard",children:a}),Object(l.jsxs)("span",{className:"numberContactText",children:["tel: ",n]}),Object(l.jsx)("button",{className:"js-btn-deleteContact",onClick:function(){c(t)},children:"\u2715"})]})},q=function(e){var t=e.contacts,a=e.ondeleteContactHandler;return Object(l.jsx)("article",{children:t.map((function(e){var t=e.id,n=e.name,c=e.number;return Object(l.jsx)(A,{id:t,name:n,number:c,ondeleteContactHandler:a},t)}))})},E=(a(112),function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),o=Object(d.a)(s,2),r=o[0],i=o[1];Object(n.useEffect)((function(){localStorage.getItem("contactsList")&&c(JSON.parse(localStorage.getItem("contactsList")))}),[]),Object(n.useEffect)((function(){localStorage.setItem("contactsList",JSON.stringify(a))}),[a]);var j=Object(n.useMemo)((function(){return a.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}))}),[a,r]);return Object(l.jsxs)("div",{className:"phonebookContainer",children:[Object(l.jsx)(U,{onHandleSubmitContact:function(e){c((function(t){return[].concat(Object(m.a)(t),[e])}))},contacts:a}),Object(l.jsxs)("div",{className:"wrapperContactsList",children:[Object(l.jsx)("h2",{className:"titleContactList",children:"Contact list"}),Object(l.jsx)(T,{filter:r,onFilterContactsByNameHandler:function(e){i(e.target.value)}}),a.length>0?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(q,{contacts:j,ondeleteContactHandler:function(e){c(a.filter((function(t){return t.id!==e})))}})}):Object(l.jsx)("h2",{className:"titleNoContacts",children:"Sorry but you doesn't have any contacts or you doesn't have contacts with this name"})]})]})}),V=function(){return Object(l.jsx)("main",{className:"main",children:Object(l.jsx)("div",{className:"containerMain",children:Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{exact:!0,path:i.a.home,component:L}),Object(l.jsx)(u.a,{exact:!0,path:i.a.phonebook,component:E}),Object(l.jsx)(u.a,{exact:!0,path:i.a.gallery,component:F}),Object(l.jsx)(u.a,{component:H})]})})})},J=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{}),Object(l.jsx)(V,{})]})};a(113);s.a.render(Object(l.jsx)(o.a,{children:Object(l.jsx)(J,{})}),document.getElementById("root"))},18:function(e,t){e.exports={home:"/react-hw_3_SkillUp",phonebook:"/phonebook",gallery:"/gallery"}},49:function(e,t,a){}},[[114,1,2]]]);
//# sourceMappingURL=main.ab8f08c1.chunk.js.map