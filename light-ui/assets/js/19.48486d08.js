(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{199:function(t,v,_){"use strict";_.r(v);var e=_(0),a=Object(e.a)({},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"popup"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#popup","aria-hidden":"true"}},[t._v("#")]),t._v(" Popup")]),t._v(" "),_("p",[t._v("弹出组件。这是一个基础组件，所有弹出类组件都基于此组件实现。")]),t._v(" "),_("p",[t._v("在使用"),_("code",[t._v("use")]),t._v("方法导入组件库或单一组件时会把"),_("code",[t._v("Popup")]),t._v("类绑定到"),_("code",[t._v("Vue")]),t._v("原型链中，属性名为："),_("code",[t._v("$Popup")])]),t._v(" "),_("p",[t._v("采用构造函数的方式调用"),_("code",[t._v("new $Popup()")]),t._v("。需要两个参数。第一个参数为一个组件对象"),_("code",[t._v("(VueComponent)")]),t._v("，也就是弹出时展示的内容。第二个参数也是一个对象"),_("code",[t._v("(option)")]),t._v("为配置参数。")]),t._v(" "),_("h2",{attrs:{id:"说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),_("p",[_("code",[t._v("Popup")]),t._v("组件本质上是"),_("code",[t._v("new")]),t._v("了一个新的"),_("code",[t._v("Vue")]),t._v("实例，并使用"),_("code",[t._v("render")]),t._v("函数来定义模板。所以这里涉及到两个组件。一个是父组件"),_("code",[t._v("PopupView")]),t._v("，一个是传入的组件"),_("code",[t._v("MyComponent")]),t._v("。")]),t._v(" "),_("p",[t._v("其中"),_("code",[t._v("position")]),t._v("、"),_("code",[t._v("isMaskClose")]),t._v("、"),_("code",[t._v("isMask")]),t._v("、"),_("code",[t._v("onClose")]),t._v("为保留字段，用来配置父组件。其他传入的字段都会作用到子组件也就是调用时传入的组件中。基本原则为:以"),_("code",[t._v("on")]),t._v("开头为事件,其他为"),_("code",[t._v("Props")])]),t._v(" "),_("h2",{attrs:{id:"示例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),_("div",{staticClass:"language-javascript extra-class"},[_("pre",{pre:!0,attrs:{class:"language-javascript"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("$Popup")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyComponent"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tposition"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'top'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tsize"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'50px'")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),_("h2",{attrs:{id:"option"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#option","aria-hidden":"true"}},[t._v("#")]),t._v(" Option")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("可选值")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("position")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[_("code",[t._v("center")])]),t._v(" "),_("td",[_("code",[t._v("center")]),t._v("、"),_("code",[t._v("top")]),t._v("、"),_("code",[t._v("bottom")]),t._v("、"),_("code",[t._v("left")]),t._v("、"),_("code",[t._v("right")])]),t._v(" "),_("td",[t._v("弹出的方向")])]),t._v(" "),_("tr",[_("td",[t._v("isMask")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("true/false")]),t._v(" "),_("td",[t._v("是否出现遮罩层")])]),t._v(" "),_("tr",[_("td",[t._v("isMaskClose")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("true/false")]),t._v(" "),_("td",[t._v("点击遮罩是否关闭")])])])]),t._v(" "),_("h2",{attrs:{id:"event"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#event","aria-hidden":"true"}},[t._v("#")]),t._v(" Event")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("收件名")]),t._v(" "),_("th",[t._v("描述")]),t._v(" "),_("th",[t._v("参数")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("onClose")]),t._v(" "),_("td",[t._v("关闭事件")]),t._v(" "),_("td")])])])])},[],!1,null,null,null);v.default=a.exports}}]);