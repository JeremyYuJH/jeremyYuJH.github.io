(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{200:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this.$createElement,e=this._self._c||t;return e("PageContent",{attrs:{contentClass:"clip-page"}},[e("Navbar",{attrs:{slot:"header"},slot:"header"},[this._v("ClipImage")]),this._v(" "),e("div",{staticClass:"browse-warp"},[e("input",{ref:"input",attrs:{type:"file",accept:"image/*"},on:{change:this.change}})])],1)};n._withStripped=!0;var i,s=a(3),r={data:function(){return{}},created:function(){this.init()},methods:{init:function(){var t=this;(i=new FileReader).onload=function(e){new t.$ClipImage({url:e.target.result})}},change:function(t){var e=Object(s.a)(t.target.files,1)[0];e&&i.readAsDataURL(e),this.$refs.input.value=""}}},c=(a(245),a(0)),l=Object(c.a)(r,n,[],!1,null,null,null);l.options.__file="example/pages/clipImage/ClipImage.vue";e.default=l.exports},225:function(t,e,a){},245:function(t,e,a){"use strict";var n=a(225);a.n(n).a}}]);