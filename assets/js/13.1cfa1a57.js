(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{317:function(e,t,n){},322:function(e,t,n){},330:function(e,t,n){"use strict";var i=n(0),r=n(28).find,s=n(100),a=n(17),o=!0,l=a("find");"find"in[]&&Array(1).find((function(){o=!1})),i({target:"Array",proto:!0,forced:o||!l},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),s("find")},331:function(e,t,n){"use strict";n(317)},332:function(e,t,n){"use strict";n.r(t);n(94);var i=n(347),r=n(333),s=n(313);function a(e,t){if("group"===t.type){var n=t.path&&Object(s.e)(e,t.path),i=t.children.some((function(t){return"group"===t.type?a(e,t):"page"===t.type&&Object(s.e)(e,t.path)}));return n||i}return!1}var o={name:"SidebarLinks",components:{SidebarGroup:i.default,SidebarLink:r.default},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data:function(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var e=function(e,t){for(var n=0;n<t.length;n++){var i=t[n];if(a(e,i))return n}return-1}(this.$route,this.items);e>-1&&(this.openGroupIndex=e)},toggleGroup:function(e){this.openGroupIndex=e===this.openGroupIndex?-1:e},isActive:function(e){return Object(s.e)(this.$route,e.regularPath)}}},l=n(43),u=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.items.length?n("ul",{staticClass:"sidebar-links"},e._l(e.items,(function(t,i){return n("li",{key:i},["group"===t.type?n("SidebarGroup",{attrs:{item:t,open:i===e.openGroupIndex,collapsable:t.collapsable||t.collapsible,depth:e.depth},on:{toggle:function(t){return e.toggleGroup(i)}}}):n("SidebarLink",{attrs:{"sidebar-depth":e.sidebarDepth,item:t}})],1)})),0):e._e()}),[],!1,null,null,null);t.default=u.exports},333:function(e,t,n){"use strict";n.r(t);n(330),n(66),n(94);var i=n(313);function r(e,t,n,i,r){var s={props:{to:t,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}};return r>2&&(s.style={"padding-left":r+"rem"}),e("RouterLink",s,n)}function s(e,t,n,a,o){var l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!t||l>o?null:e("ul",{class:"sidebar-sub-headers"},t.map((function(t){var u=Object(i.e)(a,n+"#"+t.slug);return e("li",{class:"sidebar-sub-header"},[r(e,n+"#"+t.slug,t.title,u,t.level-1),s(e,t.children,n,a,o,l+1)])})))}var a={functional:!0,props:["item","sidebarDepth"],render:function(e,t){var n=t.parent,a=n.$page,o=(n.$site,n.$route),l=n.$themeConfig,u=n.$themeLocaleConfig,p=t.props,c=p.item,d=p.sidebarDepth,h=Object(i.e)(o,c.path),f="auto"===c.type?h||c.children.some((function(e){return Object(i.e)(o,c.basePath+"#"+e.slug)})):h,b="external"===c.type?function(e,t,n){return e("a",{attrs:{href:t,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,e("OutboundLink")])}(e,c.path,c.title||c.path):r(e,c.path,c.title||c.path,f),m=[a.frontmatter.sidebarDepth,d,u.sidebarDepth,l.sidebarDepth,1].find((function(e){return void 0!==e})),v=u.displayAllHeaders||l.displayAllHeaders;return"auto"===c.type?[b,s(e,c.children,c.basePath,o,m)]:(f||v)&&c.headers&&!i.d.test(c.path)?[b,s(e,Object(i.c)(c.headers),c.path,o,m)]:b}},o=(n(331),n(43)),l=Object(o.a)(a,void 0,void 0,!1,null,null,null);t.default=l.exports},345:function(e,t,n){"use strict";n(322)},346:function(e,t,n){},347:function(e,t,n){"use strict";n.r(t);var i=n(313),r={name:"SidebarGroup",components:{DropdownTransition:n(324).default},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(332).default},methods:{isActive:i.e}},s=(n(345),n(43)),a=Object(s.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"sidebar-group",class:[{collapsable:e.collapsable,"is-sub-group":0!==e.depth},"depth-"+e.depth]},[e.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:e.open,active:e.isActive(e.$route,e.item.path)},attrs:{to:e.item.path},nativeOn:{click:function(t){return e.$emit("toggle")}}},[n("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?n("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]):n("p",{staticClass:"sidebar-heading",class:{open:e.open},on:{click:function(t){return e.$emit("toggle")}}},[n("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?n("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]),e._v(" "),n("DropdownTransition",[e.open||!e.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:e.item.children,"sidebar-depth":e.item.sidebarDepth,"initial-open-group-index":e.item.initialOpenGroupIndex,depth:e.depth+1}}):e._e()],1)],1)}),[],!1,null,null,null);t.default=a.exports},362:function(e,t,n){"use strict";n(346)},373:function(e,t,n){"use strict";n.r(t);var i=n(332),r=n(348),s={name:"Sidebar",components:{SidebarLinks:i.default,NavLinks:r.default},props:["items"]},a=(n(362),n(43)),o=Object(a.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("aside",{staticClass:"sidebar"},[t("NavLinks"),this._v(" "),this._t("top"),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);t.default=o.exports}}]);