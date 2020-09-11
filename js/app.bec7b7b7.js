(function(t){function e(e){for(var n,a,l=e[0],c=e[1],s=e[2],d=0,f=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,l=1;l<o.length;l++){var c=o[l];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},r={app:0},i=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=c;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{"font-family":"Segoe UI",color:"#2c3e50","margin-top":"20vh",display:"flex","justify-content":"center","align-items":"center","flex-direction":"column",padding:"0 1rem"},attrs:{id:"app"}},[o("striven-editor",{ref:"editor",staticStyle:{"min-height":"300px",width:"90%"},attrs:{"toolbar-hide":t.toolbarHide,minimal:t.minimal,"toolbar-bottom":t.toolbarBottom,placeholder:"Type something in here...","on-enter":t.submitOnEnter,"on-paste":t.onPaste,"after-paste":t.afterPaste,change:t.onChange},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)},i=[],a=o("75fc"),l=(o("ac6a"),chai),c=l.assert;function s(){var t=Object(a["a"])(document.getElementsByClassName("striven-editor")).pop();return t.StrivenEditor()}function u(t){var e=document.createElement("div");return e.innerHTML=t,e}mocha.setup("bdd"),describe("Regression Tests",(function(){it("should not return script elements",(function(){var t=s(),e="\n    <p>This is some dangerous content!</p>\n    <script>alert('hello');<\/script>\n  ";t.setContent(e);var o=u(t.getContent()).querySelector("script");c.notExists(o,"script tags were pruned"),t.clearContent()})),it("should create an ordered list with no content",(function(){var t=s();t.toolbar.querySelector("#toolbar-insertOrderedList").click(),c.exists(t.body.querySelector("ol"),"an ordered list was created"),t.clearContent()})),it("should create an unordered list with no content",(function(){var t=s();t.toolbar.querySelector("#toolbar-insertUnorderedList").click(),c.exists(t.body.querySelector("ul"),"an unordered list was created"),t.clearContent()})),it("apply font style to content",(function(t){var e=s();e.setContent("<p>Change me to Verdana</p>"),setTimeout((function(){e.getRange().selectNode(e.body.querySelector("p")),e.toolbar.querySelector("#toolbar-fontName").click(),e.editor.querySelector('.se-toolbar-popup-option[style="font-family: Verdana;"]').click(),e.body.onfocus(),setTimeout((function(){c.exists(e.body.querySelector('p font[face="Verdana"]'),"selected font style was applied"),e.clearContent(),t()}),0)}),200)})),it("apply font size to content",(function(t){var e=s();e.setContent("<p>Change me to 36pt size</p>"),setTimeout((function(){e.getRange().selectNode(e.body.querySelector("p")),e.toolbar.querySelector("#toolbar-fontSize").click();var o=Object(a["a"])(e.editor.querySelectorAll(".se-toolbar-popup-option")).filter((function(t){return"36pt"===t.textContent})).pop();o.click(),e.body.onfocus(),setTimeout((function(){c.exists(e.body.querySelector('font[size="7"]'),"selected font size was applied"),e.clearContent(),t()}),0)}),200)})),it("should apply font format to content",(function(t){var e=s();e.setContent("<p>Change me to an H1 format</p>"),setTimeout((function(){e.getRange().selectNode(e.body.querySelector("p")),e.toolbar.querySelector("#toolbar-fontFormat").click();var o=Object(a["a"])(e.editor.querySelectorAll(".se-toolbar-popup-option")).filter((function(t){return"Heading 1"===t.textContent})).pop();o.click(),e.body.onfocus(),setTimeout((function(){c.exists(e.body.querySelector("h1"),"selected font format was applied"),e.clearContent(),t()}),0)}),200)})),it("should apply a scroll bar for large content",(function(){var t=s();t.editor.setAttribute("max-height","300px"),t.body.style.maxHeight="300px";for(var e="",o=0;o<1e3;o++)e+="<p>line ".concat(o,"</p>");t.setContent(e),t.body.blur(),c.notEqual(t.body.scrollHeight,t.body.offsetHeight,"scroll bar was set"),t.clearContent(),t.overflow()})),it("should apply a scroll bar for large content after collapsing fullscreen",(function(){var t=s();t.editor.setAttribute("max-height","300px"),t.body.style.maxHeight="300px",t.toolbar.querySelector("#toolbar-fullscreen").click();for(var e="",o=0;o<1e3;o++)e+="<p>line ".concat(o,"</p>");t.setContent(e),t.toolbar.querySelector("#toolbar-fullscreen").click(),c.notEqual(t.body.scrollHeight,t.body.offsetHeight,"scroll bar was set"),t.clearContent(),t.overflow()}))})),describe("Internal Tests",(function(){it("should of been created",(function(){c.exists(s().editor,"Editor is created")})),it("should have a body",(function(){c.exists(s().body,"Editor contains a body")})),it("should have a toolbar",(function(){c.exists(s().toolbar,"Editor contains a body")}))})),mocha.run();var d=o("062b"),f={name:"app",components:{StrivenEditor:d["VueStrivenEditor"]},data:function(){var t=this;return{minimal:!1,uploadOnPaste:!1,toolbarBottom:!1,toolbarHide:!1,sanitizePaste:!0,onInvalidFile:function(){alert("invalid file")},placeholder:"Begin typing in this editor...",submitOnEnter:function(e){if(e.ctrlKey){var o=t.editor.getContent(),n=t.editor.getFiles();(o||n.length)&&(console.log({content:o,files:n}),t.editor.clearContent(),t.editor.clearFiles())}},content:"",editor:null}},mounted:function(){this.editor=this.$refs.editor.editor},methods:{onChange:function(){var t=this;this.editor.body.style.backgroundColor="green",setTimeout((function(){return t.editor.body.style.backgroundColor=null}),200)},afterPaste:function(){var t=this;setTimeout((function(){Object(a["a"])(t.editor.body.querySelectorAll(".striven-mention")).forEach((function(t){return t.outerHTML=t.textContent}))}),0)},onPaste:function(t){console.log(t)},sendContent:function(){console.log(this.editor.getContent()),this.editor.clearContent()},safariOut:function(){this.editor.setContent("".concat(this.editor.browser.isSafari()))},chromeOut:function(){this.editor.setContent("".concat(this.editor.browser.isChrome()))},insertList:function(){document.execCommand("insertUnorderedList")}}},p=f,b=(o("034f"),o("2877")),y=Object(b["a"])(p,r,i,!1,null,null,null),h=y.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(h)}}).$mount("#app")},"85ec":function(t,e,o){}});
//# sourceMappingURL=app.bec7b7b7.js.map