(window["webpackJsonpusda-react"]=window["webpackJsonpusda-react"]||[]).push([[0],{69:function(e,t,r){e.exports=r(82)},74:function(e,t,r){},79:function(e,t,r){},82:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(41),o=r.n(c),s=(r(74),r(7)),u=r(8),l=r(10),p=r(9),i=r(11),h=r(6),m=r(20),d=(r(79),r(25)),E=r(13),O=r(23),b=r(24),j=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"SearchResultItem"},n.a.createElement(b.a,{to:"/report/".concat(this.props.item.ndbno)},n.a.createElement("h3",null,this.props.item.name)),n.a.createElement("div",{className:"SearchResultItem-meta"},n.a.createElement("span",{className:"SearchResultItem-metaDescriptor"},n.a.createElement("strong",null,"ndbno: "),this.props.item.ndbno),n.a.createElement("span",{className:"SearchResultItem-metaDescriptor"},n.a.createElement("strong",null,"Manufacturer: "),this.props.item.manu),n.a.createElement("span",{className:"SearchResultItem-metaDescriptor"},n.a.createElement("strong",null,"Data Source: "),this.props.item.ds)))}}]),t}(a.Component),f=function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(l.a)(this,Object(p.a)(t).call(this,e))).handleItemClick=function(e){r.props.push("/report/".concat(e.target.value))},r.handleItemClick=r.handleItemClick.bind(Object(d.a)(r)),r}return Object(i.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=Object(O.sortBy)(this.props.result.list.item,"name"),t=this.props.result.list.q,r=this.props.result.list.ds,a=this.props.result.list.start+1,c=Number(this.props.result.list.end),o=this.props.result.list.total;return n.a.createElement("div",{className:"SearchResult"},n.a.createElement("div",{className:"SearchResult-descriptor"},'Result for "',t,'" in "',r,'" (',a," to ",c," of ",o,"):"),n.a.createElement("ul",null,e.map(function(e,t){return n.a.createElement("li",{key:t},n.a.createElement(j,{item:e}))})))}}]),t}(a.Component),R={push:E.d},y=Object(h.c)(function(e){return{}},R)(f),g=function(e){return{type:"SET_QUERY",payload:e}},v=function(){return{type:"SEARCH"}},S=["Proximates","Vitamins","Minerals","Lipids","Other"],D=function(e,t){return S.indexOf(e.group)-S.indexOf(t.group)},N={BOTH:"Any",STANDARD_REFERENCE:"Standard Reference",BRANDED_FOOD_PRODUCTS:"Branded Food Products"},C=Object.keys(N),T=function(e){return N[e]},_=function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(l.a)(this,Object(p.a)(t).call(this,e))).handleInputChange=function(e){r.props.setQuery(e.target.value),r.props.searchQuery&&r.props.search()},r.handleDataSourceChange=function(e){r.props.setDataSource(e.target.value),r.props.searchQuery&&r.props.search()},r.handleInputChange=r.handleInputChange.bind(Object(d.a)(r)),r.handleDataSourceChange=r.handleDataSourceChange.bind(Object(d.a)(r)),r}return Object(i.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"SearchBar"},n.a.createElement("label",null,n.a.createElement("input",{type:"text",className:"queryInput",value:this.props.searchQuery,onChange:this.handleInputChange,autoFocus:!0})),n.a.createElement("br",null),"Data Source:\xa0",C.map(function(t){return n.a.createElement("label",{className:"dataSourceInputLabel",key:t},n.a.createElement("input",{type:"radio",className:"dataSourceInput",value:t,checked:e.props.searchDataSource===t,onChange:e.handleDataSourceChange}),T(t))}))}}]),t}(a.Component),k={setQuery:g,setDataSource:function(e){return{type:"SET_DATA_SOURCE",payload:e}},search:v},P=Object(h.c)(function(e){return{searchQuery:e.app.searchQuery,searchDataSource:e.app.searchDataSource}},k)(_),A=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"Logo"},n.a.createElement(b.a,{to:"/search"},n.a.createElement("h1",null,"USDA")))}}]),t}(a.Component),I=function(e){function t(e){var r;Object(s.a)(this,t),r=Object(l.a)(this,Object(p.a)(t).call(this,e));var a=new URLSearchParams(window.location.search);return a.has("dataSource")&&r.props.setQuery(a.get("dataSource")),a.has("query")?(r.props.setQuery(a.get("query")),r.props.search()):r.props.setQuery(""),r}return Object(i.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.searching?n.a.createElement("span",null,'Searching for "',this.props.query,'" in ',T(this.props.dataSource),"..."):this.props.error?this.props.error.errors.error.map(function(e,t){return n.a.createElement("div",{key:t,style:{color:"red"}},e.message)}):this.props.result?n.a.createElement(y,{result:this.props.result}):null;return n.a.createElement("div",{className:"SearchPage"},n.a.createElement("div",{className:"header"},n.a.createElement(A,null),n.a.createElement(P,null)),n.a.createElement("hr",null),n.a.createElement("div",{className:"ResultContainer"},e))}}]),t}(a.Component),w={setQuery:g,search:v},Q=Object(h.c)(function(e){return{searching:e.app.searching,query:e.app.searchQuery,dataSource:e.app.searchDataSource,result:e.app.searchResult,error:e.app.searchError}},w)(I),B=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"NutrientTable"},n.a.createElement("h2",null,this.props.name),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Name"),n.a.createElement("td",{className:"val"},"Per 100 g"))),n.a.createElement("tbody",null,this.props.nutrients.map(function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("td",null,e.name),n.a.createElement("td",{className:"val"},"".concat(e.value," ").concat(e.unit)))}))))}}]),t}(a.Component),F=(Object(h.c)(function(e){return{}},{})(B),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=function(e){return Object(O.groupBy)(e,"group")}(function(e){return e.sort(D)}(this.props.report.nutrients));return n.a.createElement("div",{className:"Report"},Object.keys(e).map(function(t,r){return n.a.createElement(B,{nutrients:e[t],name:t,key:r})}))}}]),t}(a.Component)),L=Object(h.c)(function(e){return{}},{})(F),U=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.name.split(", ");return n.a.createElement("div",{className:"Breadcrumbs"},t.map(function(t,r,a){return n.a.createElement("span",{key:r},"\xa0/\xa0",n.a.createElement(b.a,{to:{pathname:"/search",search:"?query=".concat(a.slice(0,r+1).join(", "),"&dataSource=").concat(e.props.dataSource)},className:"Breadcrumbs-item"},t))}))}}]),t}(a.Component),J=Object(h.c)(function(e){return{dataSource:e.app.searchDataSource}},{})(U),H=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"Analysis"},n.a.createElement("pre",null,n.a.createElement("code",null,JSON.stringify(this.props.report,null,2))))}}]),t}(a.Component),q=(Object(h.c)(function(e){return{}},{})(H),function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(l.a)(this,Object(p.a)(t).call(this,e))).urlNDBNO=r.props.match.params.ndbno,r.props.getReport(r.urlNDBNO),r}return Object(i.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"ReportPage"},n.a.createElement(b.a,{to:"/search/"},"\u2190 New Search"),n.a.createElement("h1",null,this.props.loaded?"".concat(this.props.name):"Loading report for ndbno ".concat(this.urlNDBNO),n.a.createElement("br",null),this.props.loaded&&n.a.createElement("small",null,[this.props.ds,this.props.manu,this.props.ndbno].filter(function(e){return e}).join(" \xb7 "))),this.props.loaded&&n.a.createElement(J,{name:this.props.name}),this.props.loaded&&n.a.createElement("div",{className:"ReportPage-container"},n.a.createElement("div",{className:"ReportPage-report"},n.a.createElement(L,{report:this.props.report}))))}}]),t}(a.Component)),x={getReport:function(e){return{type:"GET_REPORT",payload:e}}},G=Object(h.c)(function(e){return{loaded:!Object(O.isUndefined)(e.app.getReportResult),report:e.app.getReportResult,name:Object(O.get)(e.app.getReportResult,"desc.name"),ds:Object(O.get)(e.app.getReportResult,"desc.ds"),manu:Object(O.get)(e.app.getReportResult,"desc.manu"),ndbno:Object(O.get)(e.app.getReportResult,"desc.ndbno")}},x)(q),Y=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(m.c,null,n.a.createElement(m.a,{path:"/",exact:!0,component:Q}),n.a.createElement(m.a,{path:"/search",component:Q}),n.a.createElement(m.a,{path:"/report/:ndbno",component:G})))}}]),t}(a.Component),V=Object(h.c)(function(e){return{}},{})(Y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=r(29),M=r(87),z=r(15),K=r(60),Z=r(63),$=r(32);function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(r,!0).forEach(function(t){Object(Z.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var te={searching:!1,searchQuery:"",searchDataSource:"STANDARD_REFERENCE"},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0,r=t.type,a=t.payload;switch(console.log(r,a),r){case"SET_QUERY":return ee({},e,{searchQuery:a,searchResult:void 0,searchError:void 0});case"SET_DATA_SOURCE":return ee({},e,{searchDataSource:a,searchResult:void 0,searchError:void 0});case"SEARCH":return""===e.searchQuery?ee({},e,{searching:!1,searchResult:void 0,searchError:void 0}):ee({},e,{searching:!0,searchResult:void 0,searchError:void 0});case"SEARCH_FULFILLED":return ee({},e,{searchResult:a,searching:!1});case"SEARCH_REJECTED":return ee({},e,{searchError:a,searching:!1});case"GET_REPORT":return ee({},e,{getReportNDBNO:a,gettingReport:!0,getReportResult:void 0,getReportError:void 0});case"GET_REPORT_FULFILLED":return ee({},e,{getReportResult:a,gettingReport:!1,getReportNDBNO:void 0});case"GET_REPORT_REJECTED":return ee({},e,{getReportError:a,gettingReport:!1,getReportNDBNO:void 0});default:return e}},ae=function(e){return Object(W.c)({router:Object($.b)(e),app:re})},ne=r(90),ce=r(89),oe=r(83),se=r(85),ue=r(65),le=r(48),pe=r(86),ie=r(64),he=r(88),me=r(66),de="FYTSTF75mesLeO85VFSKvqgWEzdL0hQAYCZUtjJk",Ee=Object(he.a)(function(e,t){return e.pipe(Object(ie.a)("SEARCH"),Object(ce.a)(500),Object(oe.a)(function(e){return""!==t.value.app.searchQuery}),Object(se.a)(console.log(t.value)),Object(ue.a)(function(e){return ne.a.getJSON("https://api.nal.usda.gov/ndb/search?api_key=".concat(de,"&q=").concat(encodeURIComponent(t.value.app.searchQuery),"&ds=").concat((r=t.value.app.searchDataSource,{BOTH:encodeURIComponent(""),STANDARD_REFERENCE:encodeURIComponent("Standard Reference"),BRANDED_FOOD_PRODUCTS:encodeURIComponent("Branded Food Products")}[r]))).pipe(Object(le.a)(function(e){return e.errors?{type:"SEARCH_REJECTED",payload:e}:function(e){return{type:"SEARCH_FULFILLED",payload:e}}(e)}),Object(pe.a)(function(e){return Object(me.a)({type:"SEARCH_REJECTED",payload:e.xhr.response,error:!0})}));var r}))},function(e){return e.pipe(Object(ie.a)("GET_REPORT"),Object(ce.a)(500),Object(ue.a)(function(e){return ne.a.getJSON("https://api.nal.usda.gov/ndb/V2/reports?api_key=".concat(de,"&ndbno=").concat(encodeURIComponent(e.payload))).pipe(Object(le.a)(function(e){return e.foods[0].error?{type:"GET_REPORT_REJECTED",payload:e}:function(e){return{type:"GET_REPORT_FULFILLED",payload:e}}(e.foods[0].food)}),Object(pe.a)(function(e){return Object(me.a)({type:"GET_REPORT_REJECTED",payload:e.xhr.response,error:!0})}))}))}),Oe=Object(M.a)(),be=Object(z.a)({basename:"/usda-frontend/"});o.a.render(n.a.createElement(h.a,{store:function(e){var t=Object(W.e)(ae(be),e,Object(W.d)(Object(W.a)(Object(K.a)(be),Oe)));return Oe.run(Ee),t}()},n.a.createElement($.a,{history:be},n.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[69,1,2]]]);
//# sourceMappingURL=main.55f0b8ea.chunk.js.map