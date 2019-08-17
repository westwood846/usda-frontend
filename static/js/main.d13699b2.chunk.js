(window["webpackJsonpusda-react"]=window["webpackJsonpusda-react"]||[]).push([[0],{225:function(e,t,a){e.exports=a(410)},230:function(e,t,a){},235:function(e,t,a){},410:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(55),o=a.n(c),s=(a(230),a(10)),l=a(11),u=a(13),i=a(12),p=a(14),m=a(16),d=a(27),h=(a(235),a(36)),b=a(18),E=a(20),f=a(35),O=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"SearchResultItem"},n.a.createElement(f.a,{to:"/report/".concat(this.props.item.ndbno)},n.a.createElement("h3",null,this.props.item.name)),n.a.createElement("div",{className:"SearchResultItem-meta"},n.a.createElement("span",{className:"SearchResultItem-metaDescriptor"},n.a.createElement("strong",null,"ndbno: "),this.props.item.ndbno),n.a.createElement("span",{className:"SearchResultItem-metaDescriptor"},n.a.createElement("strong",null,"Manufacturer: "),this.props.item.manu),n.a.createElement("span",{className:"SearchResultItem-metaDescriptor"},n.a.createElement("strong",null,"Data Source: "),this.props.item.ds)))}}]),t}(r.Component),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).handleItemClick=function(e){a.props.push("/report/".concat(e.target.value))},a.handleItemClick=a.handleItemClick.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=Object(E.sortBy)(this.props.result.list.item,"name"),t=this.props.result.list.q,a=this.props.result.list.ds,r=this.props.result.list.start+1,c=Number(this.props.result.list.end),o=this.props.result.list.total;return n.a.createElement("div",{className:"SearchResult"},n.a.createElement("div",{className:"descriptor"},'Result for "',t,'" in "',a,'" (',r," to ",c," of ",o,"):"),n.a.createElement("ul",null,e.map(function(e,t){return n.a.createElement("li",{key:t},n.a.createElement(O,{item:e}))})))}}]),t}(r.Component),v={push:b.d},j=Object(m.c)(function(e){return{}},v)(y),R=function(e){return{type:"SET_QUERY",payload:e}},g=function(){return{type:"SEARCH"}},S=["Proximates","Vitamins","Minerals","Lipids","Other"],N=function(e,t){return S.indexOf(e.group)-S.indexOf(t.group)},C={BOTH:"Any",STANDARD_REFERENCE:"Standard Reference",BRANDED_FOOD_PRODUCTS:"Branded Food Products"},D=Object.keys(C),k=function(e){return C[e]},T=function(e,t){return Object(E.find)(e.nutrients,{name:t})},P=function(e,t){return Number(T(e,t)?T(e,t).value:void 0)},F={Energy:2e3,"Total lipid (fat)":67,"Fatty acids, total saturated":20,Cholesterol:300,"Sodium, Na":2400,"Potassium, K":3533,"Carbohydrate, by difference":300,"Fiber, total dietary":25,Protein:50},_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).handleInputChange=function(e){a.props.setQuery(e.target.value),a.props.searchQuery&&a.props.search()},a.handleDataSourceChange=function(e){a.props.setDataSource(e.target.value),a.props.searchQuery&&a.props.search()},a.handleInputChange=a.handleInputChange.bind(Object(h.a)(a)),a.handleDataSourceChange=a.handleDataSourceChange.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"SearchBar"},n.a.createElement("label",null,n.a.createElement("input",{type:"text",className:"queryInput",value:this.props.searchQuery,onChange:this.handleInputChange,autoFocus:!0})),n.a.createElement("br",null),"Data Source:\xa0",D.map(function(t){return n.a.createElement("label",{className:"dataSourceInputLabel",key:t},n.a.createElement("input",{type:"radio",className:"dataSourceInput",value:t,checked:e.props.searchDataSource===t,onChange:e.handleDataSourceChange}),k(t))}))}}]),t}(r.Component),w={setQuery:R,setDataSource:function(e){return{type:"SET_DATA_SOURCE",payload:e}},search:g},A=Object(m.c)(function(e){return{searchQuery:e.app.searchQuery,searchDataSource:e.app.searchDataSource}},w)(_),I=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"Logo"},n.a.createElement(f.a,{to:"/search"},n.a.createElement("h1",null,"USDA")))}}]),t}(r.Component),L=function(e){function t(e){var a;Object(s.a)(this,t),a=Object(u.a)(this,Object(i.a)(t).call(this,e));var r=new URLSearchParams(window.location.search);return r.has("dataSource")&&a.props.setQuery(r.get("dataSource")),r.has("query")?(a.props.setQuery(r.get("query")),a.props.search()):a.props.setQuery(""),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.searching?n.a.createElement("span",null,'Searching for "',this.props.query,'" in ',k(this.props.dataSource),"..."):this.props.error?this.props.error.errors.error.map(function(e,t){return n.a.createElement("div",{key:t,style:{color:"red"}},e.message)}):this.props.result?n.a.createElement(j,{result:this.props.result}):null;return n.a.createElement("div",{className:"SearchPage"},n.a.createElement("div",{className:"header"},n.a.createElement(I,null),n.a.createElement(A,null)),n.a.createElement("hr",null),n.a.createElement("div",{className:"ResultContainer"},e))}}]),t}(r.Component),B={setQuery:R,search:g},Q=Object(m.c)(function(e){return{searching:e.app.searching,query:e.app.searchQuery,dataSource:e.app.searchDataSource,result:e.app.searchResult,error:e.app.searchError}},B)(L),U=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"NutrientTable"},n.a.createElement("h2",null,this.props.name),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Name"),n.a.createElement("td",{className:"val"},"Per 100 g"))),n.a.createElement("tbody",null,this.props.nutrients.map(function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("td",null,e.name),n.a.createElement("td",{className:"val"},"".concat(e.value," ").concat(e.unit)))}))))}}]),t}(r.Component),x=(Object(m.c)(function(e){return{}},{})(U),function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).datum=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=T(a.props.report,e);return r?"".concat(Number(r.value).toFixed(t)," ").concat(r.unit):null},a.reference=function(e){return"".concat(Math.round(T(a.props.report,e).value/F[e]*100)," %")},a.tableRow=function(e,t,r){var c=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return T(a.props.report,t)?n.a.createElement("tr",{key:e},n.a.createElement("td",{className:"nutTable-left ".concat(!c&&"indent-2")},c?n.a.createElement("strong",null,r," "):r+" ",a.datum(t)),n.a.createElement("td",{className:"nutTable-right"},a.reference(t))):null},a.tableRows=[{label:"Energy",key:"Calories",main:!0},{label:"Total Fat",key:"Total lipid (fat)",main:!0},{label:"Saturated fat",key:"Fatty acids, total saturated",main:!1},{label:"Polyunsaturated fat",key:"Fatty acids, total polyunsaturated",main:!1},{label:"Monounsaturated fat",key:"Fatty acids, total monounsaturated",main:!1},{label:"Water",key:"Water",main:!0},{label:"Cholesterol",key:"Cholesterol",main:!0},{label:"Sodium",key:"Sodium, Na",main:!0},{label:"Potassium",key:"Potassium, K",main:!0},{label:"Total Carbohydrate",key:"Carbohydrate, by difference",main:!0},{label:"Dietary fiber",key:"Fiber, total dietary",main:!1},{label:"Sugar",key:"Sugars, total",main:!1},{label:"Protein",key:"Protein",main:!0}],a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=function(e){return Object(E.groupBy)(e,"group")}(function(e){return e.sort(N)}(this.props.report.nutrients));return n.a.createElement("div",{className:"Report"},n.a.createElement("table",{className:"nutTable"},n.a.createElement("tbody",null,this.tableRows.map(function(t,a){return e.tableRow(a,t.key,t.label,t.main)}))),Object.keys(t).map(function(e,a){return n.a.createElement(U,{nutrients:t[e],name:e,key:a})}))}}]),t}(r.Component)),J=Object(m.c)(function(e){return{}},{})(x),q=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.name.split(", ");return n.a.createElement("div",{className:"Breadcrumbs"},t.map(function(t,a,r){return n.a.createElement("span",{key:a},"\xa0/\xa0",n.a.createElement(f.a,{to:{pathname:"/search",search:"?query=".concat(r.slice(0,a+1).join(", "),"&dataSource=").concat(e.props.dataSource)},className:"Breadcrumbs-item"},t))}))}}]),t}(r.Component),H=Object(m.c)(function(e){return{dataSource:e.app.searchDataSource}},{})(q),M=a(66),G=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=P(this.props.report,"Total lipid (fat)"),t=P(this.props.report,"Carbohydrate, by difference"),a=P(this.props.report,"Protein"),r=P(this.props.report,"Water"),c=100-(e+t+a+r),o=[{name:"Total Fat",value:e},{name:"Total Carbohydrate",value:t},{name:"Protein",value:a},{name:"Water",value:r},{name:"Other",value:c}],s=P(this.props.report,"Fatty acids, total saturated"),l=P(this.props.report,"Fatty acids, total polyunsaturated"),u=P(this.props.report,"Fatty acids, total monounsaturated"),i=e-s-l-u,p=P(this.props.report,"Fiber, total dietary"),m=P(this.props.report,"Sugars, total"),d=[{name:"Polyunsat. Fat",value:l},{name:"Monounsat. Fat",value:u},{name:"Saturated Fat",value:s},{name:"Other Fats",value:i},{name:"Dietary Fiber",value:p},{name:"Sugar",value:m},{name:"Other Carbohydrates",value:t-p-m},{name:"Protein",value:a},{name:"Water",value:r},{name:"Other",value:c}],h=[["#ffeb3b","#fdd835","#fbc02d","#f9a825"],["#aed581","#8bc34a","#689f38"],["#f06292"],["#2196f3"],["#e0e0e0"]];return n.a.createElement(M.c,{width:500,height:300},n.a.createElement(M.b,{data:o,dataKey:"value",cx:250,cy:150,outerRadius:60,fill:"#8884d8"},o.map(function(e,t){return n.a.createElement(M.a,{key:t,fill:h[t][0]})})),n.a.createElement(M.b,{data:d,dataKey:"value",cx:250,cy:150,innerRadius:70,outerRadius:90,fill:"red",labelLine:!1,label:function(e){var t=e.cx,a=e.cy,r=e.midAngle,c=e.innerRadius,o=e.outerRadius,s=e.value,l=e.index,u=e.fill;if(!function(e){return e.percent>.03}(e))return null;var i=Math.PI/180,p=25+c+(o-c),m=t+p*Math.cos(-r*i),h=a+p*Math.sin(-r*i);return s=new Intl.NumberFormat("en-IN",{maximumSignificantDigits:1}).format(s),n.a.createElement("text",{x:m,y:h,fill:u,textAnchor:m>t?"start":"end",dominantBaseline:"central"},d[l].name," ",s," g")}},d.map(function(e,t){return n.a.createElement(M.a,{key:"index",fill:Object(E.flatten)(h)[t]})})))}}]),t}(r.PureComponent),W=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.report.nutrients.find(function(e){return"Energy"===e.name}),t=Math.round(Number(e.value)/105),a=Math.round(Number(e.value)/67);return n.a.createElement("div",{className:"Analysis"},n.a.createElement(G,{report:this.props.report}),n.a.createElement("pre",null,n.a.createElement("code",null,JSON.stringify(this.props.report,null,2))),n.a.createElement("div",null,e.value," ",e.unit," equal..."),n.a.createElement("div",{className:"emoji-comparator"},Object(E.times)(t,function(e){return"\ud83c\udf4c"})," ",t," medium bananas (118g)"),n.a.createElement("div",{className:"emoji-comparator"},Object(E.times)(a,function(e){return"\ud83c\udf5e"})," ",a," slices of white bread (28g)"))}}]),t}(r.Component),K=Object(m.c)(function(e){return{}},{})(W),Y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).urlNDBNO=a.props.match.params.ndbno,a.props.getReport(a.urlNDBNO),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"ReportPage"},n.a.createElement("div",{className:"header"},n.a.createElement("div",null,n.a.createElement("h1",null,this.props.loaded?"".concat(this.props.name):"Loading report for ndbno ".concat(this.urlNDBNO),n.a.createElement("br",null)),n.a.createElement("div",{className:"descriptor"},this.props.loaded&&n.a.createElement("small",null,[this.props.ds,this.props.manu,this.props.ndbno].filter(function(e){return e}).join(" \xb7 "))),this.props.loaded&&n.a.createElement(H,{name:this.props.name}),n.a.createElement(f.a,{to:"/search/",className:"newSearchLink"},"\u2190 New Search"))),this.props.loaded&&n.a.createElement("div",{className:"ReportPage-container"},n.a.createElement("div",{className:"ReportPage-report"},n.a.createElement(J,{report:this.props.report})),n.a.createElement("div",{className:"ReportPage-analysis"},n.a.createElement(K,{report:this.props.report}))))}}]),t}(r.Component),V={getReport:function(e){return{type:"GET_REPORT",payload:e}}},z=Object(m.c)(function(e){return{loaded:!Object(E.isUndefined)(e.app.getReportResult),report:e.app.getReportResult,name:Object(E.get)(e.app.getReportResult,"desc.name"),ds:Object(E.get)(e.app.getReportResult,"desc.ds"),manu:Object(E.get)(e.app.getReportResult,"desc.manu"),ndbno:Object(E.get)(e.app.getReportResult,"desc.ndbno")}},V)(Y),Z=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(d.c,null,n.a.createElement(d.a,{path:"/",exact:!0,component:Q}),n.a.createElement(d.a,{path:"/search",component:Q}),n.a.createElement(d.a,{path:"/report/:ndbno",component:z})))}}]),t}(r.Component),$=Object(m.c)(function(e){return{}},{})(Z);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=a(44),ee=a(415),te=a(22),ae=a(181),re=a(194),ne=a(56);function ce(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function oe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ce(a,!0).forEach(function(t){Object(re.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ce(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var se={searching:!1,searchQuery:"",searchDataSource:"STANDARD_REFERENCE"},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(console.log(a,r),a){case"SET_QUERY":return oe({},e,{searchQuery:r,searchResult:void 0,searchError:void 0});case"SET_DATA_SOURCE":return oe({},e,{searchDataSource:r,searchResult:void 0,searchError:void 0});case"SEARCH":return""===e.searchQuery?oe({},e,{searching:!1,searchResult:void 0,searchError:void 0}):oe({},e,{searching:!0,searchResult:void 0,searchError:void 0});case"SEARCH_FULFILLED":return oe({},e,{searchResult:r,searching:!1});case"SEARCH_REJECTED":return oe({},e,{searchError:r,searching:!1});case"GET_REPORT":return oe({},e,{getReportNDBNO:r,gettingReport:!0,getReportResult:void 0,getReportError:void 0});case"GET_REPORT_FULFILLED":return oe({},e,{getReportResult:r,gettingReport:!1,getReportNDBNO:void 0});case"GET_REPORT_REJECTED":return oe({},e,{getReportError:r,gettingReport:!1,getReportNDBNO:void 0});default:return e}},ue=function(e){return Object(X.c)({router:Object(ne.b)(e),app:le})},ie=a(418),pe=a(417),me=a(411),de=a(413),he=a(196),be=a(96),Ee=a(414),fe=a(195),Oe=a(416),ye=a(197),ve="FYTSTF75mesLeO85VFSKvqgWEzdL0hQAYCZUtjJk",je=Object(Oe.a)(function(e,t){return e.pipe(Object(fe.a)("SEARCH"),Object(pe.a)(500),Object(me.a)(function(e){return""!==t.value.app.searchQuery}),Object(de.a)(console.log(t.value)),Object(he.a)(function(e){return ie.a.getJSON("https://api.nal.usda.gov/ndb/search?api_key=".concat(ve,"&q=").concat(encodeURIComponent(t.value.app.searchQuery),"&ds=").concat((a=t.value.app.searchDataSource,{BOTH:encodeURIComponent(""),STANDARD_REFERENCE:encodeURIComponent("Standard Reference"),BRANDED_FOOD_PRODUCTS:encodeURIComponent("Branded Food Products")}[a]))).pipe(Object(be.a)(function(e){return e.errors?{type:"SEARCH_REJECTED",payload:e}:function(e){return{type:"SEARCH_FULFILLED",payload:e}}(e)}),Object(Ee.a)(function(e){return Object(ye.a)({type:"SEARCH_REJECTED",payload:e.xhr.response,error:!0})}));var a}))},function(e){return e.pipe(Object(fe.a)("GET_REPORT"),Object(pe.a)(500),Object(he.a)(function(e){return ie.a.getJSON("https://api.nal.usda.gov/ndb/V2/reports?api_key=".concat(ve,"&ndbno=").concat(encodeURIComponent(e.payload))).pipe(Object(be.a)(function(e){return e.foods[0].error?{type:"GET_REPORT_REJECTED",payload:e}:function(e){return{type:"GET_REPORT_FULFILLED",payload:e}}(e.foods[0].food)}),Object(Ee.a)(function(e){return Object(ye.a)({type:"GET_REPORT_REJECTED",payload:e.xhr.response,error:!0})}))}))}),Re=Object(ee.a)(),ge=Object(te.a)({basename:"/usda-frontend/"});o.a.render(n.a.createElement(m.a,{store:function(e){var t=Object(X.e)(ue(ge),e,Object(X.d)(Object(X.a)(Object(ae.a)(ge),Re)));return Re.run(je),t}()},n.a.createElement(ne.a,{history:ge},n.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[225,1,2]]]);
//# sourceMappingURL=main.d13699b2.chunk.js.map