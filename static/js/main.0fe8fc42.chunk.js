(this["webpackJsonpusda-react"]=this["webpackJsonpusda-react"]||[]).push([[0],{103:function(e,t,n){"use strict";(function(e){var a=n(0),r=n.n(a),c=n(55),o=n(39),u=n(143),i=n(104),l=n(76),s=n(114),d=n(115),p=n(116);n(136);t.a=Object(c.hot)(e)((function(){return r.a.createElement(o.a,{history:l.b,basename:""},r.a.createElement("div",{className:"App"},r.a.createElement(u.a,{theme:i.a},r.a.createElement(s.a,null),r.a.createElement(d.a,null),p.a)))}))}).call(this,n(91)(e))},104:function(e,t,n){"use strict";var a=n(82),r=n(92),c=n.n(r),o=n(93),u=n.n(o),i=n(94),l=n.n(i),s=n(108),d=n.n(s),p=Object(a.a)({palette:{primary:c.a,secondary:u.a},status:{error:l.a,danger:d.a}});t.a=p},114:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(9),o=n(145),u=n(142),i=n(69);t.a=function(){var e=Object(c.f)().pathname;return/^\/$/.test(e)||/^\/search/.test(e)?null:r.a.createElement(o.a,{position:"static"},r.a.createElement(u.a,null,r.a.createElement(i.a,{variant:"white"})))}},115:function(e,t,n){"use strict";var a=n(3),r=n(85),c=n(33),o=n(0),u=n.n(o),i=n(21),l=n(34),s=n(9),d=n(45),p=n(24),b=n(13);function m(){var e=Object(c.a)(["\n                    max-width: 200px;\n                    text-overflow: ellipsis;\n                    overflow: hidden;\n                    white-space: nowrap;\n                  "]);return m=function(){return e},e}function f(){var e=Object(c.a)(["\n            display: ",";\n            margin: 0;\n            margin-top: 0.5rem;\n            padding: 0.5rem;\n          "]);return f=function(){return e},e}function h(){var e=Object(c.a)(["\n              margin: 0;\n            "]);return h=function(){return e},e}function O(){var e=Object(c.a)(["\n            display: flex;\n            justify-content: space-between;\n            background-color: #eaeaea;\n            padding: 0.5rem;\n          "]);return O=function(){return e},e}function E(){var e=Object(c.a)(["\n          display: ",";\n          position: fixed;\n          bottom: 0;\n          right: 5rem;\n          border: 1px solid black;\n          border-bottom: none;\n          background-color: white;\n          min-width: 300px;\n        "]);return E=function(){return e},e}function j(){var e=Object(c.a)(["\n      display: flex;\n      justify-content: space-between;\n      padding: 0.5rem;\n    "]);return j=function(){return e},e}var v=function(e){return u.a.createElement("div",Object.assign({className:Object(l.a)(j())},e))},g=Object(s.g)((function(e){var t=e.compare,n=e.compareClear,a=e.compareRemove,c=e.location,i=t.length>0&&"/compare"!==c.pathname,s=Object(o.useState)(!0),b=Object(r.a)(s,2),j=b[0],g=b[1],y=Object(p.map)(t,"ndbno").join(",");return u.a.createElement("div",{className:Object(l.a)(E(),i?"initial":"none")},u.a.createElement("div",{className:Object(l.a)(O()),onClick:function(){return g(!j)}},u.a.createElement("h3",{className:Object(l.a)(h())},"Collection ",u.a.createElement("small",null,"(",t.length,")")),j?" \ud83d\udd3c":" \ud83d\udd3d"),u.a.createElement("table",{className:Object(l.a)(f(),j?"visible":"none")},u.a.createElement("tbody",null,t.map((function(e){return u.a.createElement("tr",{key:e.ndbno},u.a.createElement("td",{className:Object(l.a)(m()),title:e.report?e.report.desc.name:e.ndbno},e.report?e.report.desc.name:e.fallbackName),u.a.createElement("td",null,e.amount," g"),u.a.createElement("td",null,u.a.createElement("button",{onClick:function(){return a(e.ndbno)}},"X")))})))),u.a.createElement(v,{style:{display:j?"flex":"none"}},u.a.createElement("button",{onClick:n},"Clear Collection"),u.a.createElement(d.a,{to:"/compare?ids=".concat(y)},"Go to Collection")))})),y={compareClear:b.a,compareRemove:b.c};t.a=Object(i.c)((function(e){return{compare:e.app.compare.map((function(t){return Object(a.a)(Object(a.a)({},t),{},{report:e.app.reports[t.ndbno]})}))}}),y)(g)},116:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(9),o=n(73),u=n(77),i=r.a.lazy((function(){return Promise.resolve().then(n.bind(null,77))})),l=r.a.lazy((function(){return Promise.all([n.e(2),n.e(5)]).then(n.bind(null,146))})),s=r.a.createElement(a.Suspense,{fallback:r.a.createElement(o.a,null)},r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/",exact:!0,component:u.default}),r.a.createElement(c.a,{path:"/search",exact:!0,component:u.default}),r.a.createElement(c.a,{path:"/report/:ndbno",component:i}),r.a.createElement(c.a,{path:"/compare",exact:!0,component:l})));t.a=s},125:function(e,t,n){e.exports=n(137)},13:function(e,t,n){"use strict";n.d(t,"l",(function(){return r})),n.d(t,"k",(function(){return c})),n.d(t,"h",(function(){return o})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return i})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return m})),n.d(t,"a",(function(){return f}));var a=n(5),r=function(e){return{type:a.m,payload:e}},c=function(e){return{type:a.k,payload:e}},o=function(){return{type:a.h}},u=function(e){return{type:a.i,payload:e}},i=function(e){return{type:a.j,payload:e}},l=function(e){return{type:a.e,payload:e}},s=function(e){return{type:a.f,payload:e}},d=function(e){return{type:a.g,payload:e}},p=function(e){return{type:a.c,payload:e}},b=function(e,t,n){return{type:a.d,payload:{ndbno:e,amount:t,fallbackName:n}}},m=function(e){return{type:a.b,payload:e}},f=function(){return{type:a.a}}},131:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){"use strict";n.r(t);var a=n(55);Object(a.setConfig)({reloadHooks:!1,logLevel:"log"});var r=n(0),c=n.n(r),o=n(37),u=n.n(o),i=(n(131),n(103));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(76),s=n(21),d=Object(l.a)();"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})),u.a.render(c.a.createElement(s.a,{store:d},c.a.createElement(i.a,null)),document.getElementById("root"))},47:function(e,t,n){"use strict";n.d(t,"e",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"f",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return f}));var a=n(38),r=n(3),c=n(24),o=["Proximates","Lipids","Vitamins","Minerals","Other"],u=function(e){return o.indexOf(e.group)},i={BOTH:"Any",STANDARD_REFERENCE:"Standard Reference",BRANDED_FOOD_PRODUCTS:"Branded Food Products"},l=Object.keys(i),s=function(e){return i[e]},d=function(e,t){return Object(c.find)(e.nutrients,{name:t})},p=function(e){return Object(r.a)(Object(r.a)({},e),{},{nutrients:e.nutrients.reduce((function(e,t){return Object(r.a)(Object(r.a)({},e),{},Object(a.a)({},t.name,t))}),{})})},b={Energy:2e3,"Total lipid (fat)":67,"Fatty acids, total saturated":20,Cholesterol:300,"Carbohydrate, by difference":300,"Fiber, total dietary":25,Protein:50,"Vitamin C, total ascorbic acid":60,"Vitamin B-6":1.2,"Vitamin B-12":6,"Vitamin E (alpha-tocopherol)":15,"Vitamin K (phylloquinone)":120,Riboflavin:1.1,Thiamin:1.1,Niacin:14,"Folate, DFE":400,"Vitamin A, RAE":600,"Vitamin D":800,"Vitamin D (D2 + D3)":20,"Calcium, Ca":1e3,"Iron, Fe":19,"Magnesium, Mg":420,"Phosphorus, P":700,"Sodium, Na":2400,"Potassium, K":3533,"Zinc, Zn":8},m=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=d(e,t);return r?"".concat(Object(c.round)(Number(r.value*n),a)," ").concat(r.unit):null},f=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=d(t,e);return b[e]&&r?Object(c.round)(r.value*n/b[e]*100,a):void 0}},5:function(e,t,n){"use strict";n.d(t,"m",(function(){return a})),n.d(t,"k",(function(){return r})),n.d(t,"h",(function(){return c})),n.d(t,"i",(function(){return o})),n.d(t,"j",(function(){return u})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return s})),n.d(t,"l",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return b})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return f}));var a="SET_QUERY",r="SET_DATA_SOURCE",c="SEARCH",o="SEARCH_FULFILLED",u="SEARCH_REJECTED",i="GET_REPORT",l="GET_REPORT_FULFILLED",s="GET_REPORT_REJECTED",d="SET_MASS",p="COMPARE_SET",b="COMPARE_UPSERT",m="COMPARE_REMOVE",f="COMPARE_CLEAR"},69:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(45),o=n(22),u=n(141),i=n(144);t.a=function(e){var t=e.variant,n=Object(o.a)({root:{color:{white:"white",primary:void 0}[t]}})(u.a);return r.a.createElement(i.a,{component:c.a,to:"/search"},r.a.createElement(n,{variant:"h5"},"USDA Frontend"))}},73:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(){return r.a.createElement("div",null,"Loading...")}},76:function(e,t,n){"use strict";n.d(t,"b",(function(){return _})),n.d(t,"a",(function(){return T}));var a=n(32),r=n(159),c=n(15),o=n(95),u=n(101),i=n(38),l=n(3),s=n(5),d=n(39),p=n(24),b={searching:!1,searchQuery:"",searchDataSource:"STANDARD_REFERENCE",mass:100,reports:{},compare:[]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(console.log(n,a),n){case s.m:return Object(l.a)(Object(l.a)({},e),{},{searchQuery:a,searchResult:void 0,searchError:void 0});case s.k:return Object(l.a)(Object(l.a)({},e),{},{searchDataSource:a,searchResult:void 0,searchError:void 0});case s.h:return""===e.searchQuery?Object(l.a)(Object(l.a)({},e),{},{searching:!1,searchResult:void 0,searchError:void 0}):Object(l.a)(Object(l.a)({},e),{},{searching:!0,searchResult:void 0,searchError:void 0});case s.i:return Object(l.a)(Object(l.a)({},e),{},{searchResult:a,searching:!1});case s.j:return Object(l.a)(Object(l.a)({},e),{},{searchError:a,searching:!1});case s.e:return Object(l.a)(Object(l.a)({},e),{},{getReportNDBNO:a,gettingReport:!0,getReportResult:void 0,getReportError:void 0});case s.f:return Object(l.a)(Object(l.a)({},e),{},{getReportResult:a,gettingReport:!1,getReportNDBNO:void 0,reports:Object(l.a)(Object(l.a)({},e.reports),{},Object(i.a)({},a.desc.ndbno,a))});case s.g:return Object(l.a)(Object(l.a)({},e),{},{getReportError:a,gettingReport:!1,getReportNDBNO:void 0});case s.l:return Object(l.a)(Object(l.a)({},e),{},{mass:a});case s.c:return Object(l.a)(Object(l.a)({},e),{},{compare:a});case s.d:return Object(l.a)(Object(l.a)({},e),{},{compare:Object(p.uniqBy)([a].concat(Object(u.a)(e.compare)),"ndbno")});case s.b:return Object(l.a)(Object(l.a)({},e),{},{compare:e.compare.filter((function(e){return e.ndbno!==a}))});case s.a:return Object(l.a)(Object(l.a)({},e),{},{compare:b.compare});default:return e}},f=n(163),h=n(165),O=n(139),E=n(164),j=n(112),v=n(64),g=n(157),y=n(111),R=n(162),S=n(13),C=n(113),D="FYTSTF75mesLeO85VFSKvqgWEzdL0hQAYCZUtjJk",N=Object(R.a)((function(e,t){return e.pipe(Object(y.a)(s.h),Object(h.a)(500),Object(O.a)((function(e){return""!==t.value.app.searchQuery})),Object(E.a)(console.log(t.value)),Object(j.a)((function(e){return f.a.getJSON("https://api.nal.usda.gov/ndb/search?api_key=".concat(D,"&q=").concat(encodeURIComponent(t.value.app.searchQuery),"&ds=").concat((n=t.value.app.searchDataSource,{BOTH:encodeURIComponent(""),STANDARD_REFERENCE:encodeURIComponent("Standard Reference"),BRANDED_FOOD_PRODUCTS:encodeURIComponent("Branded Food Products")}[n]))).pipe(Object(v.a)((function(e){return e.errors?Object(S.j)(e):Object(S.i)(e)})),Object(g.a)((function(e){return Object(C.a)({type:s.j,payload:e.xhr.response,error:!0})})));var n})))}),(function(e){return e.pipe(Object(y.a)(s.e),Object(h.a)(500),Object(j.a)((function(e){return f.a.getJSON("https://api.nal.usda.gov/ndb/V2/reports?api_key=".concat(D,"&ndbno=").concat(encodeURIComponent(e.payload))).pipe(Object(v.a)((function(e){return e.foods[0].error?Object(S.g)(e):Object(S.f)(e.foods[0].food)})),Object(g.a)((function(e){return Object(C.a)({type:s.g,payload:e.xhr.response,error:!0})})))})))})),k=Object(r.a)(),_=Object(c.a)({basename:"/"});function T(e){var t,n=Object(a.e)((t=_,Object(a.c)({router:Object(d.b)(t),app:m})),e,Object(a.d)(Object(a.a)(Object(o.a)(_),k),(window.__REDUX_DEVTOOLS_EXTENSION__,function(e){return e})));return k.run(N),n}},77:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n(98),u=n(99),i=n(49),l=n(102),s=n(100),d=n(13),p=n(47),b=n(12),m=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).stringifyState=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.props.searchQuery,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.props.searchDataSource;return"?query=".concat(e,"&dataSource=").concat(t)},a.handleInputChange=function(e){a.props.setQuery(e.target.value),a.props.push(a.stringifyState(e.target.value)),a.props.searchQuery&&a.props.search()},a.handleDataSourceChange=function(e){a.props.setDataSource(e.target.value),a.props.push(a.stringifyState(void 0,e.target.value)),a.props.searchQuery&&a.props.search()},a.handleInputChange=a.handleInputChange.bind(Object(i.a)(a)),a.handleDataSourceChange=a.handleDataSourceChange.bind(Object(i.a)(a)),a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"SearchBar"},r.a.createElement("label",null,r.a.createElement("input",{type:"text",className:"queryInput",value:this.props.searchQuery,onChange:this.handleInputChange,autoFocus:!0})),r.a.createElement("br",null),"Data Source:\xa0",p.a.map((function(t){return r.a.createElement("label",{className:"dataSourceInputLabel",key:t},r.a.createElement("input",{type:"radio",className:"dataSourceInput",value:t,checked:e.props.searchDataSource===t,onChange:e.handleDataSourceChange}),Object(p.b)(t))})))}}]),n}(a.Component),f={setQuery:d.l,setDataSource:d.k,search:d.h,push:b.d},h=Object(c.c)((function(e){return{searchQuery:e.app.searchQuery,searchDataSource:e.app.searchDataSource}}),f)(m),O=n(69),E=n(73),j=n(160),v=r.a.lazy((function(){return n.e(4).then(n.bind(null,517))})),g={setQuery:d.l,setDataSource:d.k,search:d.h};t.default=Object(c.c)((function(e){return{searching:e.app.searching,query:e.app.searchQuery,dataSource:e.app.searchDataSource,result:e.app.searchResult,error:e.app.searchError}}),g)((function(e){var t=e.location,n=e.dataSource,c=e.setDataSource,o=e.query,u=e.setQuery,i=e.search,l=e.searching,s=e.error,d=e.result;Object(a.useEffect)((function(){var e=new URLSearchParams(window.location.search);e.has("dataSource")&&e.get("dataSource")!==n&&c(e.get("dataSource")),e.has("query")?e.get("query")!==o&&(u(e.get("query")),i()):u("")}),[t,n,c,o,u,i]);var b=l?r.a.createElement("span",null,'Searching for "',o,'" in ',Object(p.b)(n),"..."):s?s.errors.error.map((function(e,t){return r.a.createElement("div",{key:t,style:{color:"red"}},e.message)})):d?r.a.createElement(a.Suspense,{fallback:r.a.createElement(E.a,null)},r.a.createElement(v,{result:d})):null;return r.a.createElement("div",{className:"SearchPage"},r.a.createElement("div",{className:"header"},r.a.createElement(j.a,{mr:3},r.a.createElement(O.a,null)),r.a.createElement(h,null)),r.a.createElement("hr",null),r.a.createElement("div",{className:"ResultContainer"},b))}))}},[[125,1,3]]]);
//# sourceMappingURL=main.0fe8fc42.chunk.js.map