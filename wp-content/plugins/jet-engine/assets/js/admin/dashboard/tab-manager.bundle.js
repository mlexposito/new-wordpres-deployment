!function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);var n={};i.r(n),i.d(n,"title",(function(){return b})),i.d(n,"component",(function(){return y}));var a={};i.r(a),i.d(a,"title",(function(){return S})),i.d(a,"component",(function(){return O}));var r={};i.r(r),i.d(r,"title",(function(){return R})),i.d(r,"component",(function(){return $}));var o={};i.r(o),i.d(o,"title",(function(){return N})),i.d(o,"component",(function(){return V}));var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("br"),e._v(" "),i("div",{staticClass:"cx-vui-subtitle"},[e._v("\n\t\t"+e._s("Forms Settings")+"\n\t")]),e._v(" "),e._l(e.tabs,(function(t,n){return i("CxVuiCollapseMini",{key:t.component.name,attrs:{desc:t.desc||"",label:t.title}},[i("keep-alive",[i(t.component,{ref:"tabComponents",refInFor:!0,tag:"component",attrs:{incoming:e.getIncoming(t.component.name)}})],1),e._v(" "),i("cx-vui-button",{attrs:{"button-style":"accent",loading:e.loadingTab},on:{click:function(i){return e.onSaveTab(n,t.component.name)}}},[i("span",{attrs:{slot:"label"},slot:"label"},[e._v("Save")])])],1)}))],2)};s._withStripped=!0;var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:{"cx-vui-collapse-mini__item":!0,"cx-vui-collapse-mini__item--active":e.isActive}},[i("div",{staticClass:"cx-vui-collapse-mini__header",on:{click:e.collapse}},[i("div",{staticClass:"cx-vui-collapse-mini__header-label"},[i("svg",{attrs:{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M14 13.9999L14 -0.00012207L0 -0.000121458L6.11959e-07 13.9999L14 13.9999Z",fill:"white"}}),e._v(" "),i("path",{attrs:{d:"M5.32911 1L11 7L5.32911 13L4 11.5938L8.34177 7L4 2.40625L5.32911 1Z",fill:"#007CBA"}})]),e._v("\n\t\t\t"+e._s(e.label)+"\n\t\t")]),e._v(" "),e.desc?i("div",{staticClass:"cx-vui-collapse-mini__header-desc"},[e._v("\n\t\t\t"+e._s(e.desc)+"\n\t\t")]):e._e()]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"cx-vui-collapse-mini__content"},[e._t("default",[e._v("Collapse content...")])],2)])};function c(e,t,i,n,a,r,o,s){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=i,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):a&&(l=s?function(){a.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:a),l)if(c.functional){c._injectStyles=l;var p=c.render;c.render=function(e,t){return l.call(t),p(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:c}}l._withStripped=!0;var p=c({name:"cx-vui-collapse-mini",props:{initialActive:{type:Boolean,default:!1},label:{type:String,default:"Collapse Mini"},desc:{type:String,default:""}},data:function(){return{isActive:!1}},created:function(){this.isActive=this.initialActive},methods:{collapse:function(){this.isActive=!this.isActive}}},l,[],!1,null,null,null);p.options.__file="package/collapse-mini/CxVuiCollapseMini.vue";var u=p.exports,f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("cx-vui-input",{attrs:{label:e.label.key,"wrapper-css":["equalwidth"],size:"fullwidth"},model:{value:e.key,callback:function(t){e.key=t},expression:"key"}}),e._v(" "),i("cx-vui-input",{attrs:{label:e.label.secret,"wrapper-css":["equalwidth"],size:"fullwidth"},model:{value:e.secret,callback:function(t){e.secret=t},expression:"secret"}}),e._v(" "),i("p",[e._v(e._s(e.help.apiPref)+" "),i("a",{attrs:{href:e.help.apiLink,target:"_blank"}},[e._v(e._s(e.help.apiLinkLabel))])])],1)};f._withStripped=!0;var _=wp.i18n.__,d={key:_("Site Key","jet-form-builder"),secret:_("Secret Key","jet-form-builder")},v={apiPref:_("Register reCAPTCHA v3 keys"),apiLinkLabel:_("here"),apiLink:"https://www.google.com/recaptcha/admin/create"},m=c({name:"captcha",props:{incoming:{type:Object,default:function(){return{}}}},data:function(){return{label:d,help:v,key:"",secret:""}},created:function(){this.key=this.incoming.key||"",this.secret=this.incoming.secret||""},methods:{getRequestOnSave:function(){return{data:{secret:this.secret,key:this.key}}}}},f,[],!1,null,null,null);m.options.__file="tabs/forms-settings/forms-tabs/captcha/Captcha.vue";var h=m.exports,b=(0,wp.i18n.__)("Captcha Settings","jet-form-builder"),y=h,g=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("cx-vui-input",{attrs:{label:e.label.api_key,"wrapper-css":["equalwidth"],size:"fullwidth"},model:{value:e.api_key,callback:function(t){e.api_key=t},expression:"api_key"}}),e._v(" "),i("cx-vui-input",{attrs:{label:e.label.api_url,"wrapper-css":["equalwidth"],size:"fullwidth"},model:{value:e.api_url,callback:function(t){e.api_url=t},expression:"api_url"}}),e._v(" "),i("p",{staticClass:"fb-description"},[e._v(e._s(e.help.apiPref)+" "),i("a",{attrs:{href:e.help.apiLink,target:"_blank"}},[e._v(e._s(e.help.apiLinkLabel))])])],1)};g._withStripped=!0;var k=wp.i18n.__,w={api_key:k("API Key","jet-form-builder"),api_url:k("API URL","jet-form-builder")},x={apiPref:k("How to obtain your ActiveCampaign API URL and Key? More info"),apiLinkLabel:k("here"),apiLink:"https://help.activecampaign.com/hc/en-us/articles/207317590-Getting-started-with-the-API"},j=c({name:"active-campaign",props:{incoming:{type:Object,default:{}}},data:function(){return{label:w,help:x,api_key:"",api_url:""}},created:function(){this.api_key=this.incoming.api_key||"",this.api_url=this.incoming.api_url||""},methods:{getRequestOnSave:function(){return{data:{api_key:this.api_key,api_url:this.api_url}}}}},g,[],!1,null,null,null);j.options.__file="tabs/forms-settings/forms-tabs/activecampaign/ActiveCampaignTab.vue";var C=j.exports,S=(0,wp.i18n.__)("ActiveCampaign API","jet-form-builder"),O=C,L=function(){var e=this,t=e.$createElement;return(e._self._c||t)("cx-vui-input",{attrs:{label:e.label.api_key,"wrapper-css":["equalwidth"],description:e.help.apiPref+' <a href="'+e.help.apiLink+'" target="_blank">'+e.help.apiLinkLabel+"</a>",size:"fullwidth"},model:{value:e.api_key,callback:function(t){e.api_key=t},expression:"api_key"}})};L._withStripped=!0;var P=wp.i18n.__,A={api_key:P("API Key","jet-form-builder")},T={apiPref:P("How to obtain your MailChimp API Key? More info"),apiLinkLabel:P("here"),apiLink:"https://mailchimp.com/help/about-api-keys/"},E=c({name:"mailchimp",props:{incoming:{type:Object,default:{}}},data:function(){return{label:A,help:T,api_key:""}},created:function(){this.api_key=this.incoming.api_key||""},methods:{getRequestOnSave:function(){return{data:{api_key:this.api_key}}}}},L,[],!1,null,null,null);E.options.__file="tabs/forms-settings/forms-tabs/mailchimp/MailChimpTab.vue";var M=E.exports,R=(0,wp.i18n.__)("MailChimp API","jet-form-builder"),$=M,I=function(){var e=this,t=e.$createElement;return(e._self._c||t)("cx-vui-input",{attrs:{label:e.label.api_key,"wrapper-css":["equalwidth"],description:e.help.apiPref+' <a href="'+e.help.apiLink+'" target="_blank">'+e.help.apiLinkLabel+"</a>",size:"fullwidth"},model:{value:e.api_key,callback:function(t){e.api_key=t},expression:"api_key"}})};I._withStripped=!0;var q=wp.i18n.__,D={api_key:q("API Key","jet-form-builder")},F={apiPref:q("How to obtain your GetResponse API Key? More info"),apiLinkLabel:q("here"),apiLink:"https://app.getresponse.com/api"},K=c({name:"get-response",props:{incoming:{type:Object,default:{}}},data:function(){return{label:D,help:F,api_key:""}},created:function(){this.api_key=this.incoming.api_key||""},methods:{getRequestOnSave:function(){return{data:{api_key:this.api_key}}}}},I,[],!1,null,null,null);K.options.__file="tabs/forms-settings/forms-tabs/getresponse/GetResponseTab.vue";var z=K.exports,N=(0,wp.i18n.__)("GetResponse API","jet-form-builder"),V=z;function X(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function G(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?X(Object(i),!0).forEach((function(t){H(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):X(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function H(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var U=(0,wp.hooks.applyFilters)("jet.engine.formTabs.register",[n,a,r,o]),B=c({name:"forms",components:{CxVuiCollapseMini:u},data:function(){return{tabs:U,loadingTab:!1}},methods:{onSaveTab:function(e,t){var i=this.$refs.tabComponents[e],n=this,a=G(G({},{url:window.ajaxurl,type:"POST",dataType:"json"}),i.getRequestOnSave());a.data=G({action:"jet_engine_forms_save_tab__".concat(t)},a.data),n.loadingTab=!0,jQuery.ajax(a).done((function(e){"function"==typeof i.onSaveDone?i.onSaveDone(e):e.success?n.$CXNotice.add({message:e.data.message,type:"success",duration:5e3}):n.$CXNotice.add({message:e.data.message,type:"error",duration:1e4}),n.loadingTab=!1})).fail((function(e,t,a){"function"==typeof i.onSaveFail?i.onSaveFail(e,t,a):n.$CXNotice.add({message:a,type:"error",duration:1e4}),n.loadingTab=!1}))},getIncoming:function(e){return window.JetEngineDashboardConfig._config__forms&&window.JetEngineDashboardConfig._config__forms[e]?window.JetEngineDashboardConfig._config__forms[e]:{}}}},s,[],!1,null,null,null);B.options.__file="tabs/forms-settings/FormsSettings.vue";var J=B.exports;(0,wp.hooks.applyFilters)("jet.engine.tabs.register",[J]).forEach((function(e){Vue.component("jet-engine-tab-".concat(e.name),e)}))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW1hbmFnZXIuYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3RhYi1tYW5hZ2VyLmJ1bmRsZS5qcyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=