(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{191:function(t,n,l){"use strict";l.r(n);var o=function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("scroll",{ref:"scroll",attrs:{data:t.list,pullUpLoad:t.pullUpLoad,pullDownRefresh:t.pullDownRefresh},on:{pullingDown:t.onPullingDown,pullingUp:t.onPullingUp}},[l("ul",t._l(t.list,(function(n){return l("li",[t._v("\n\t\t\t"+t._s(n)+"\n\t\t")])})),0)])};o._withStripped=!0;var s={data:function(){return{pullDownRefresh:{threshold:80,stop:40},pullUpLoad:{threshold:-50},list:[]}},mounted:function(){this.list=[].concat(this.setList())},methods:{onPullingDown:function(){var t=this;setTimeout((function(){Math.random()>.5?t.list=[].concat(t.setList()):t.$refs.scroll.forceUpdate()}),1500)},setList:function(){for(var t=[],n=0;n<=20;n++)t.push(Math.floor(100*Math.random()));return t},onPullingUp:function(){var t=this;setTimeout((function(){Math.random()>.5?t.list=t.list.concat(t.setList()):t.$refs.scroll.forceUpdate()}),1500)}}},e=(l(242),l(0)),i=Object(e.a)(s,o,[],!1,null,"4271e4be",null);i.options.__file="example/pages/scroll/Scroll.vue";n.default=i.exports},223:function(t,n,l){},242:function(t,n,l){"use strict";var o=l(223);l.n(o).a}}]);