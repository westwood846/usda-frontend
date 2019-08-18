(window["webpackJsonpusda-react"]=window["webpackJsonpusda-react"]||[]).push([[0],{229:function(e,t,a){e.exports=a(430)},234:function(e,t,a){},239:function(e,t,a){},430:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(57),o=a.n(c),s=(a(234),a(10)),i=a(11),l=a(13),u=a(12),p=a(14),m=a(16),d=a(27),h=(a(239),a(36)),b=a(19),f=a(17),E=a(35),O=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"SearchResultItem"},n.a.createElement(E.a,{to:"/report/".concat(this.props.item.ndbno)},n.a.createElement("h3",null,this.props.item.name)),n.a.createElement("div",{className:"SearchResultItem-meta"},n.a.createElement("span",{className:"SearchResultItem-metaDescriptor"},n.a.createElement("strong",null,"ndbno: "),this.props.item.ndbno),n.a.createElement("span",{className:"SearchResultItem-metaDescriptor"},n.a.createElement("strong",null,"Manufacturer: "),this.props.item.manu),n.a.createElement("span",{className:"SearchResultItem-metaDescriptor"},n.a.createElement("strong",null,"Data Source: "),this.props.item.ds)))}}]),t}(r.Component),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleItemClick=function(e){a.props.push("/report/".concat(e.target.value))},a.handleItemClick=a.handleItemClick.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=Object(f.sortBy)(this.props.result.list.item,"name"),t=this.props.result.list.q,a=this.props.result.list.ds,r=this.props.result.list.start+1,c=Number(this.props.result.list.end),o=this.props.result.list.total;return n.a.createElement("div",{className:"SearchResult"},n.a.createElement("div",{className:"descriptor"},'Result for "',t,'" in "',a,'" (',r," to ",c," of ",o,"):"),n.a.createElement("ul",null,e.map(function(e,t){return n.a.createElement("li",{key:t},n.a.createElement(O,{item:e}))})))}}]),t}(r.Component),v={push:b.d},g=Object(m.c)(function(e){return{}},v)(y),j=function(e){return{type:"SET_QUERY",payload:e}},R=function(e){return{type:"SET_DATA_SOURCE",payload:e}},S=function(){return{type:"SEARCH"}},C=["Proximates","Vitamins","Minerals","Lipids","Other"],N=function(e,t){return C.indexOf(e.group)-C.indexOf(t.group)},D={BOTH:"Any",STANDARD_REFERENCE:"Standard Reference",BRANDED_FOOD_PRODUCTS:"Branded Food Products"},T=Object.keys(D),k=function(e){return D[e]},P=function(e,t){return Object(f.find)(e.nutrients,{name:t})},F=function(e,t){return Number(P(e,t)?P(e,t).value:void 0)},A={Energy:2e3,"Total lipid (fat)":67,"Fatty acids, total saturated":20,Cholesterol:300,"Carbohydrate, by difference":300,"Fiber, total dietary":25,Protein:50,"Vitamin C, total ascorbic acid":60,"Vitamin B-6":1.2,"Vitamin B-12":6,"Vitamin E (alpha-tocopherol)":15,"Vitamin K (phylloquinone)":120,Riboflavin:1.1,Thiamin:1.1,Niacin:14,"Folate, DFE":400,"Vitamin A, RAE":600,"Vitamin D":800,"Vitamin D (D2 + D3)":20,"Calcium, Ca":1e3,"Iron, Fe":19,"Magnesium, Mg":420,"Phosphorus, P":700,"Sodium, Na":2400,"Potassium, K":3533,"Zinc, Zn":8},V={"Vitamin C, total ascorbic acid":"Vitamin C","Vitamin B-6":"Vitamin B6","Vitamin B-12":"Vitamin B12","Vitamin E (alpha-tocopherol)":"Vitamin E","Vitamin K (phylloquinone)":"Vitamin E","Calcium, Ca":"Calcium","Iron, Fe":"Iron","Magnesium, Mg":"Magnesium","Phosphorus, P":"Phosphorus","Potassium, K":"Potassium","Sodium, Na":"Sodium","Zinc, Zn":"Zinc"},_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).stringifyState=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.props.searchQuery,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.props.searchDataSource;return"?query=".concat(e,"&dataSource=").concat(t)},a.handleInputChange=function(e){a.props.setQuery(e.target.value),a.props.push(a.stringifyState(e.target.value)),a.props.searchQuery&&a.props.search()},a.handleDataSourceChange=function(e){a.props.setDataSource(e.target.value),a.props.push(a.stringifyState(void 0,e.target.value)),a.props.searchQuery&&a.props.search()},a.handleInputChange=a.handleInputChange.bind(Object(h.a)(a)),a.handleDataSourceChange=a.handleDataSourceChange.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"SearchBar"},n.a.createElement("label",null,n.a.createElement("input",{type:"text",className:"queryInput",value:this.props.searchQuery,onChange:this.handleInputChange,autoFocus:!0})),n.a.createElement("br",null),"Data Source:\xa0",T.map(function(t){return n.a.createElement("label",{className:"dataSourceInputLabel",key:t},n.a.createElement("input",{type:"radio",className:"dataSourceInput",value:t,checked:e.props.searchDataSource===t,onChange:e.handleDataSourceChange}),k(t))}))}}]),t}(r.Component),w={setQuery:j,setDataSource:R,search:S,push:b.d},I=Object(m.c)(function(e){return{searchQuery:e.app.searchQuery,searchDataSource:e.app.searchDataSource}},w)(_),B=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"Logo"},n.a.createElement(E.a,{to:"/search"},n.a.createElement("h1",null,"USDA")))}}]),t}(r.Component),M=function(e){function t(e){var a;Object(s.a)(this,t),a=Object(l.a)(this,Object(u.a)(t).call(this,e));var r=new URLSearchParams(window.location.search);return r.has("dataSource")&&r.get("dataSource")!==a.props.dataSource&&a.props.setDataSource(r.get("dataSource")),r.has("query")?r.get("query")!==a.props.query&&(a.props.setQuery(r.get("query")),a.props.search()):a.props.setQuery(""),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.searching?n.a.createElement("span",null,'Searching for "',this.props.query,'" in ',k(this.props.dataSource),"..."):this.props.error?this.props.error.errors.error.map(function(e,t){return n.a.createElement("div",{key:t,style:{color:"red"}},e.message)}):this.props.result?n.a.createElement(g,{result:this.props.result}):null;return n.a.createElement("div",{className:"SearchPage"},n.a.createElement("div",{className:"header"},n.a.createElement(B,null),n.a.createElement(I,null)),n.a.createElement("hr",null),n.a.createElement("div",{className:"ResultContainer"},e))}}]),t}(r.Component),L={setQuery:j,setDataSource:R,search:S},Q=Object(m.c)(function(e){return{searching:e.app.searching,query:e.app.searchQuery,dataSource:e.app.searchDataSource,result:e.app.searchResult,error:e.app.searchError}},L)(M),x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).datum=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=P(a.props.report,e);return r?"".concat(Number(r.value*a.props.factor).toFixed(t)," ").concat(r.unit):null},a.reference=function(e){return A[e]?"".concat(Math.round(P(a.props.report,e).value*a.props.factor/A[e]*100)," %"):null},a.datumCell=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,r=arguments.length>2?arguments[2]:void 0;return n.a.createElement("td",{className:"nutTable-left ".concat(!r&&"indent-2")},r?n.a.createElement("strong",null,t," "):t+" ",a.datum(e))},a.referenceCell=function(e){return n.a.createElement("td",{className:"nutTable-right"},a.reference(e))},a.tableRow=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,c=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return P(a.props.report,t)?n.a.createElement("tr",{key:e},a.datumCell(t,r,c),a.referenceCell(t)):null},a.doubleTable=function(e){var t=e.map(function(e){return a.datumCell(e.name,V[e.name],!0)}),r=e.map(function(e){return a.referenceCell(e.name)}),c=Object(f.chunk)(t,2),o=Object(f.chunk)(r,2);return n.a.createElement("table",{className:"nutTable"},n.a.createElement("tbody",null,c.map(function(e,t){return n.a.createElement("tr",{key:t},c[t][0],o[t][0],c[t][1]||n.a.createElement("td",{className:"nutTable-left"}),o[t][1]||n.a.createElement("td",{className:"nutTable-right"}))})))},a.tableRows=[{label:"Calories",key:"Energy",main:!0},{label:"Total Fat",key:"Total lipid (fat)",main:!0},{label:"Saturated fat",key:"Fatty acids, total saturated",main:!1},{label:"Polyunsaturated fat",key:"Fatty acids, total polyunsaturated",main:!1},{label:"Monounsaturated fat",key:"Fatty acids, total monounsaturated",main:!1},{label:"Water",key:"Water",main:!0},{label:"Cholesterol",key:"Cholesterol",main:!0},{label:"Sodium",key:"Sodium, Na",main:!0},{label:"Potassium",key:"Potassium, K",main:!0},{label:"Total Carbohydrate",key:"Carbohydrate, by difference",main:!0},{label:"Dietary fiber",key:"Fiber, total dietary",main:!1},{label:"Sugar",key:"Sugars, total",main:!1},{label:"Protein",key:"Protein",main:!0}],a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=function(e){return Object(f.groupBy)(e,"group")}(function(e){return e.sort(N)}(this.props.report.nutrients));return n.a.createElement("div",{className:"Report"},n.a.createElement("table",{className:"nutTable"},n.a.createElement("tbody",null,this.tableRows.map(function(t,a){return e.tableRow(a,t.key,t.label,t.main)}))),t.Vitamins&&this.doubleTable(t.Vitamins),t.Minerals&&this.doubleTable(t.Minerals),t.Other&&this.doubleTable(t.Other))}}]),t}(r.Component),U=Object(m.c)(function(e){return{mass:e.app.mass,factor:e.app.mass/100}},{})(x),q=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.name.split(", ");return n.a.createElement("div",{className:"Breadcrumbs"},t.map(function(t,a,r){return n.a.createElement("span",{key:a},"\xa0/\xa0",n.a.createElement(E.a,{to:{pathname:"/search",search:"?query=".concat(r.slice(0,a+1).join(", "),"&dataSource=").concat(e.props.dataSource)},className:"Breadcrumbs-item"},t))}))}}]),t}(r.Component),J=Object(m.c)(function(e){return{dataSource:e.app.searchDataSource}},{})(q),H=a(46),W=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).getValue=function(e){return F(a.props.report,e)*a.props.mass/100},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.getValue("Total lipid (fat)"),t=this.getValue("Carbohydrate, by difference"),a=this.getValue("Protein"),r=this.getValue("Water"),c=this.props.mass-(e+t+a+r),o=[{name:"Total Fat",value:e},{name:"Total Carbs",value:t},{name:"Protein",value:a},{name:"Water",value:r},{name:"Other",value:c}],s=this.getValue("Fatty acids, total saturated"),i=this.getValue("Fatty acids, total polyunsaturated"),l=this.getValue("Fatty acids, total monounsaturated"),u=e-s-i-l,p=this.getValue("Fiber, total dietary"),m=this.getValue("Sugars, total"),d=[{name:"Polyunsat. Fat",value:i},{name:"Monounsat. Fat",value:l},{name:"Saturated Fat",value:s},{name:"Other Fats",value:u},{name:"Dietary Fiber",value:p},{name:"Sugar",value:m},{name:"Other Carbs",value:t-p-m},{name:"Protein",value:a},{name:"Water",value:r},{name:"Other",value:c}],h=[["#ffeb3b","#fdd835","#fbc02d","#f9a825"],["#aed581","#8bc34a","#689f38"],["#f06292"],["#2196f3"],["#e0e0e0"]],b=o.map(function(e,t){return{value:e.name,color:h[t][0]}});return n.a.createElement(H.e,{width:500,height:275},n.a.createElement(H.d,{data:o,dataKey:"value",cx:250,cy:125,innerRadius:30,outerRadius:60,fill:"#8884d8",isAnimationActive:!1},o.map(function(e,t){return n.a.createElement(H.a,{key:t,fill:h[t][0]})})),n.a.createElement(H.d,{data:d,dataKey:"value",cx:250,cy:125,innerRadius:70,outerRadius:90,fill:"red",labelLine:!1,label:function(e){var t=e.cx,a=e.cy,r=e.midAngle,c=e.innerRadius,o=e.outerRadius,s=e.value,i=e.index,l=e.fill;if(!function(e){return e.percent>.03}(e))return null;var u=Math.PI/180,p=10+c+(o-c),m=t+p*Math.cos(-r*u),h=a+p*Math.sin(-r*u);return s=new Intl.NumberFormat("en-IN",{maximumFractionDigits:1}).format(s),n.a.createElement("text",{x:m,y:h,fill:l,textAnchor:m>t?"start":"end",dominantBaseline:"central"},d[i].name," ",s," g")},isAnimationActive:!1},d.map(function(e,t){return n.a.createElement(H.a,{key:"index",fill:Object(f.flatten)(h)[t]})}),n.a.createElement(H.b,{value:"".concat(this.props.mass," g"),position:"center"})),n.a.createElement(H.c,{payload:b}))}}]),t}(r.PureComponent),G=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=Math.round(this.props.calories/105),t=Math.round(this.props.calories/95),a=Math.round(this.props.calories/67),r=Math.round(this.props.calories/350);return n.a.createElement("div",{className:"Comparator"},n.a.createElement("div",{className:"Comparator-header"},n.a.createElement("h2",null,this.props.calories," kcal"),n.a.createElement("br",null),"equal"),n.a.createElement("div",{className:"emoji-comparator"},Object(f.times)(e,function(e){return"\ud83c\udf4c"}),n.a.createElement("br",null),e," Medium Bananas (118g)"),n.a.createElement("div",{className:"emoji-comparator"},Object(f.times)(t,function(e){return"\ud83c\udf4e"}),n.a.createElement("br",null),t," Apples (182g)"),n.a.createElement("div",{className:"emoji-comparator"},Object(f.times)(a,function(e){return"\ud83c\udf5e"}),n.a.createElement("br",null),a," Slices of White Bread (28g)"),n.a.createElement("div",{className:"emoji-comparator"},Object(f.times)(r,function(e){return"\ud83c\udf79"}),n.a.createElement("br",null),r," Cups of Bubble Tea"))}}]),t}(r.Component),K=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.report.nutrients.find(function(e){return"Energy"===e.name}).value*this.props.mass/100;return n.a.createElement("div",{className:"Analysis"},n.a.createElement(W,{report:this.props.report,mass:this.props.mass}),n.a.createElement(G,{calories:e}))}}]),t}(r.Component),Z=Object(m.c)(function(e){return{mass:e.app.mass}},{})(K),Y=a(197),z=a.n(Y),$=(a(429),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).sliderPrecision=function(e){return e<25?1:e<100?5:e<500?10:50},a.urlNDBNO=a.props.match.params.ndbno,a.props.getReport(a.urlNDBNO),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"ReportPage"},n.a.createElement("div",{className:"header"},n.a.createElement("div",null,n.a.createElement("h1",null,this.props.loaded?"".concat(this.props.name):"Loading report for ndbno ".concat(this.urlNDBNO),n.a.createElement("br",null)),n.a.createElement("div",{className:"descriptor"},this.props.loaded&&n.a.createElement("small",null,[this.props.ds,this.props.manu,this.props.ndbno].filter(function(e){return e}).join(" \xb7 "))),this.props.loaded&&n.a.createElement(J,{name:this.props.name}),n.a.createElement(E.a,{to:"/search/",className:"newSearchLink"},"\u2190 New Search"),n.a.createElement(z.a,{className:"massInput",minValue:0,maxValue:1e3,step:this.sliderPrecision(this.props.mass),value:this.props.mass,onChange:this.props.setMass,formatLabel:function(e){return"Mass ".concat(e," g")}}))),this.props.loaded&&n.a.createElement("div",{className:"ReportPage-container"},n.a.createElement("div",{className:"ReportPage-report"},n.a.createElement(U,{report:this.props.report})),n.a.createElement("div",{className:"ReportPage-analysis"},n.a.createElement(Z,{report:this.props.report}))))}}]),t}(r.Component)),X={getReport:function(e){return{type:"GET_REPORT",payload:e}},setMass:function(e){return{type:"SET_MASS",payload:e}}},ee=Object(m.c)(function(e){return{loaded:!Object(f.isUndefined)(e.app.getReportResult),report:e.app.getReportResult,name:Object(f.get)(e.app.getReportResult,"desc.name"),ds:Object(f.get)(e.app.getReportResult,"desc.ds"),manu:Object(f.get)(e.app.getReportResult,"desc.manu"),ndbno:Object(f.get)(e.app.getReportResult,"desc.ndbno"),mass:e.app.mass}},X)($),te=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(d.c,null,n.a.createElement(d.a,{path:"/",exact:!0,component:Q}),n.a.createElement(d.a,{path:"/search",component:Q}),n.a.createElement(d.a,{path:"/report/:ndbno",component:ee})))}}]),t}(r.Component),ae=Object(m.c)(function(e){return{}},{})(te);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=a(44),ne=a(435),ce=a(22),oe=a(184),se=a(198),ie=a(48);function le(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function ue(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?le(a,!0).forEach(function(t){Object(se.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):le(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var pe={searching:!1,searchQuery:"",searchDataSource:"STANDARD_REFERENCE",mass:100},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(console.log(a,r),a){case"SET_QUERY":return ue({},e,{searchQuery:r,searchResult:void 0,searchError:void 0});case"SET_DATA_SOURCE":return ue({},e,{searchDataSource:r,searchResult:void 0,searchError:void 0});case"SEARCH":return""===e.searchQuery?ue({},e,{searching:!1,searchResult:void 0,searchError:void 0}):ue({},e,{searching:!0,searchResult:void 0,searchError:void 0});case"SEARCH_FULFILLED":return ue({},e,{searchResult:r,searching:!1});case"SEARCH_REJECTED":return ue({},e,{searchError:r,searching:!1});case"GET_REPORT":return ue({},e,{getReportNDBNO:r,gettingReport:!0,getReportResult:void 0,getReportError:void 0});case"GET_REPORT_FULFILLED":return ue({},e,{getReportResult:r,gettingReport:!1,getReportNDBNO:void 0});case"GET_REPORT_REJECTED":return ue({},e,{getReportError:r,gettingReport:!1,getReportNDBNO:void 0});case"SET_MASS":return ue({},e,{mass:r});default:return e}},de=function(e){return Object(re.c)({router:Object(ie.b)(e),app:me})},he=a(438),be=a(437),fe=a(431),Ee=a(433),Oe=a(200),ye=a(97),ve=a(434),ge=a(199),je=a(436),Re=a(201),Se="FYTSTF75mesLeO85VFSKvqgWEzdL0hQAYCZUtjJk",Ce=Object(je.a)(function(e,t){return e.pipe(Object(ge.a)("SEARCH"),Object(be.a)(500),Object(fe.a)(function(e){return""!==t.value.app.searchQuery}),Object(Ee.a)(console.log(t.value)),Object(Oe.a)(function(e){return he.a.getJSON("https://api.nal.usda.gov/ndb/search?api_key=".concat(Se,"&q=").concat(encodeURIComponent(t.value.app.searchQuery),"&ds=").concat((a=t.value.app.searchDataSource,{BOTH:encodeURIComponent(""),STANDARD_REFERENCE:encodeURIComponent("Standard Reference"),BRANDED_FOOD_PRODUCTS:encodeURIComponent("Branded Food Products")}[a]))).pipe(Object(ye.a)(function(e){return e.errors?{type:"SEARCH_REJECTED",payload:e}:function(e){return{type:"SEARCH_FULFILLED",payload:e}}(e)}),Object(ve.a)(function(e){return Object(Re.a)({type:"SEARCH_REJECTED",payload:e.xhr.response,error:!0})}));var a}))},function(e){return e.pipe(Object(ge.a)("GET_REPORT"),Object(be.a)(500),Object(Oe.a)(function(e){return he.a.getJSON("https://api.nal.usda.gov/ndb/V2/reports?api_key=".concat(Se,"&ndbno=").concat(encodeURIComponent(e.payload))).pipe(Object(ye.a)(function(e){return e.foods[0].error?{type:"GET_REPORT_REJECTED",payload:e}:function(e){return{type:"GET_REPORT_FULFILLED",payload:e}}(e.foods[0].food)}),Object(ve.a)(function(e){return Object(Re.a)({type:"GET_REPORT_REJECTED",payload:e.xhr.response,error:!0})}))}))}),Ne=Object(ne.a)(),De=Object(ce.a)({basename:"/usda-frontend/"});o.a.render(n.a.createElement(m.a,{store:function(e){var t=Object(re.e)(de(De),e,Object(re.d)(Object(re.a)(Object(oe.a)(De),Ne)));return Ne.run(Ce),t}()},n.a.createElement(ie.a,{history:De},n.a.createElement(ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[229,1,2]]]);
//# sourceMappingURL=main.7c22d7b5.chunk.js.map