(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[150],{89365:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/du-lieu-ttck",function(){return n(54310)}])},41399:function(e,t,n){"use strict";var r=n(85893),o=n(67294),i=n(36456),a=(n(96486),n(38585)),l=(n(72162),n(13481)),c=n(29009),s=n(98687),u=n(14195),d=n(3023),f=n(75358),h=n(26050),p=n(33558),b=n(56880),y=n(49762);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return!t||"object"!==C(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var C=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var o=x(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}var w=function(e){var t,n=e.formattedGraphicalItems,o=n[0],i=n[1];return null===o||void 0===o||null===(t=o.props)||void 0===t?void 0:t.points.map((function(e,t){var n,a,c=null===o||void 0===o||null===(n=o.props)||void 0===n?void 0:n.points[t],s=null===i||void 0===i||null===(a=i.props)||void 0===a?void 0:a.points[t],u=c.y-s.y;return(0,r.jsx)(l.A,{width:10,height:-u,x:c.x-5,y:c.y,fill:"#cccccc"},t)}))},D=function(e){var t=e.cx,n=e.cy;e.stroke,e.payload;return null===e.value?(0,r.jsx)("svg",{x:t-10,y:n,width:20,height:20,fill:"#222222",viewBox:"0 0 1024 1024"}):(0,r.jsx)("svg",{x:t-10,y:n,width:20,height:20,fill:"#222222",viewBox:"0 0 1024 1024",children:(0,r.jsx)("line",{x1:"150",y1:"0",x2:"500",y2:"-1",transform:"translate(160 116.687117)",fill:"none",stroke:"#222222",strokeWidth:"200",strokeLinecap:"round"})})},T=function(e){var t=e.active,n=e.payload,o=e.label,i=e.labels,l=e.dataDot;if(t&&n&&n.length){for(var c=0,s=0;s<i.length;s++)if(o==i[s]){c=(0,a.round)(l[s],2);break}return(0,r.jsx)("div",{className:"customTooltip",children:(0,r.jsxs)("p",{className:"label",children:["".concat(o," ")," ",(0,r.jsx)("br",{}),"Hi\u1ec7n t\u1ea1i: ".concat(c),(0,r.jsx)("br",{}),"Trung v\u1ecb: ".concat((0,a.round)(n[3].value,2))]})})}return null},O=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(l,e);var t,n,o,i=N(l);function l(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),i.call(this,e)}return t=l,(n=[{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){for(var e,t=this.props,n=(t.title,t.labels),o=(t.lineTitle,t.dataLine),i=(t.minTitle,t.dataMin),l=(t.barTitle,t.max),v=(t.dotTitle,t.dataDot),m=t.heightChart,x=t.yAxisMax||Math.round(110*Number((e=Math).max.apply(e,_(l))))/100,g=[{label:"",dot:null,line:null,min:null,max:null}],j=0;j<n.length;j++)g.push({label:n[j],dot:v[j]>=x?x:(0,a.round)(v[j],2),line:o[j],min:(0,a.round)(i[j],2),max:(0,a.round)(l[j],2)>=x?x:(0,a.round)(l[j],2)});try{return(0,r.jsx)(c.h,{width:"100%",height:m,children:(0,r.jsxs)(s.w,{width:500,height:300,data:g,margin:{top:5,right:30,left:20,bottom:5},children:[(0,r.jsx)(u.q,{strokeDasharray:"3 3"}),(0,r.jsx)(d.K,{dataKey:"label",angle:-90,textAnchor:"end",style:{fontSize:"10px"}}),(0,r.jsx)(f.B,{type:"number",domain:[0,x]}),(0,r.jsx)(h.u,{content:(0,r.jsx)(T,{labels:n,dataDot:v})}),(0,r.jsx)(p.D,{}),(0,r.jsx)(b.x,{type:"monotone",dataKey:"min",stroke:"#8884d800"}),(0,r.jsx)(b.x,{type:"monotone",dataKey:"max",stroke:"#82ca9d00"}),(0,r.jsx)(y.M,{component:w}),(0,r.jsx)(b.x,{type:"monotone",dataKey:"dot",stroke:"#fe6c0000",fill:"#fe6c00"}),(0,r.jsx)(b.x,{type:"monotone",dataKey:"line",stroke:"#fe6c0000",dot:(0,r.jsx)(D,{})})]})})}catch(C){return console.log("error",C),(0,r.jsx)(Error,{title:"Bi\u1ec3u \u0111\u1ed3",content:C+""})}}}])&&m(t.prototype,n),o&&m(t,o),l}(o.Component);t.Z=(0,i.$j)((function(e){return{}}),(function(e){return{}}))(O)},54310:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return Oe},default:function(){return Pe}});var r=n(85893),o=n(67294),i=n(36456),a=(n(8539),n(96486),n(9198)),l=n.n(a),c=n(49905),s=n(38585),u=n(23148),d=n(76588),f=n(1257),h=(n(72162),n(26495)),p=n(57028),b=n(66912),y=n(11310);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return!t||"object"!==C(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var C=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var o=x(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}u.kL.register(u.f$,u.uw,u.ZL,u.od,u.jn,u.De,u.u,u.ST,u.vn,p.Z,u.Dx);var w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(a,e);var t,n,o,i=N(a);function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,n=[{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e,t=this.props,n=(t.title,t.labels),o=t.lineTitle,i=t.dataLine,a=t.minTitle,l=t.dataMin,c=t.barTitle,s=t.max,u=t.dotTitle,d=t.dataDot,f=t.heightChart,p=t.yAxisMax||(e=Math).max.apply(e,_(s)),b={responsive:!0,interaction:{mode:"index",intersect:!1},plugins:{legend:{display:!0,position:"bottom",labels:{boxHeight:y.legendboxHeight,boxWidth:y.legendboxWidth}},datalabels:{display:!1}},scales:{x:{stacked:!0,ticks:{font:{size:10}}},y:{type:"linear",display:!0,position:"left",grid:{drawOnChartArea:!1},max:p}}},v={labels:n,datasets:[{type:"line",label:o,backgroundColor:"#000000",borderColor:"#00000000",borderWidth:3,fill:!1,data:i,borderDash:[5,3],yAxisID:"y"},{pointRadius:4,type:"line",label:u,backgroundColor:"#fe6c00",borderColor:"#fe6c0000",borderWidth:2,fill:!1,data:d,yAxisID:"y"},{type:"bar",label:a,backgroundColor:"#fff",borderColor:"#fff",data:l,borderWidth:2,yAxisID:"y"},{type:"bar",label:c,backgroundColor:"#ddd",borderColor:"#fff",data:s,borderWidth:2,yAxisID:"y"}]};try{return(0,r.jsx)("div",{className:"bieuDoPBPER",style:{width:"100%"},children:(0,r.jsx)("div",{className:"divChart",children:(0,r.jsx)(h.kL,{options:b,data:v,height:f,width:"100%"})})})}catch(m){return console.log("error",m),(0,r.jsx)(Error,{title:"Bi\u1ec3u \u0111\u1ed3",content:m+""})}}}],n&&m(t.prototype,n),o&&m(t,o),a}(o.Component),D=((0,i.$j)((function(e){return{}}),(function(e){return{}}))(w),n(41399));function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return!t||"object"!==R(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return P(this,n)}}u.kL.register(u.f$,u.uw,u.ZL,u.od,u.jn,u.De,u.u,u.ST,u.vn,p.Z,u.Dx);var M=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(a,e);var t,n,o,i=E(a);function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,n=[{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this.props,t=(e.title,e.labels),n=e.lineTitle,o=e.dataLine,i=e.minTitle,a=e.dataMin,l=e.barTitle,c=e.max,u=e.dotTitle,d=e.dataDot,f=(0,s.isMobile)()?"600px":"200px",p={indexAxis:"y",responsive:!0,interaction:{mode:"index",intersect:!1},plugins:{legend:{display:!0,position:"bottom",labels:{boxHeight:y.legendboxHeight,boxWidth:y.legendboxWidth}},datalabels:{display:!1}},scales:{x:{type:"linear",display:!0,position:"top"},y:{stacked:!0,ticks:{font:{size:10}}}}},b={labels:t,datasets:[{type:"line",label:n,backgroundColor:"#000000",borderColor:"#00000000",borderWidth:3,fill:!1,data:o,borderDash:[5,3],yAxisID:"y"},{pointRadius:4,type:"line",label:u,backgroundColor:"#fe6c00",borderColor:"#fe6c0000",borderWidth:2,fill:!1,data:d,yAxisID:"y"},{type:"bar",label:i,backgroundColor:"#fff",borderColor:"#fff",data:a,borderWidth:2,yAxisID:"y"},{type:"bar",label:l,backgroundColor:"#ddd",borderColor:"#fff",data:c,borderWidth:2,yAxisID:"y"}]};try{return(0,r.jsx)("div",{className:"bieuDoPBPER",style:{width:"100%"},children:(0,r.jsx)("div",{className:"divChart",children:(0,r.jsx)(h.kL,{options:p,data:b,height:f,width:"100%"})})})}catch(v){return console.log("error",v),(0,r.jsx)(Error,{title:"Bi\u1ec3u \u0111\u1ed3",content:v+""})}}}],n&&T(t.prototype,n),o&&T(t,o),a}(o.Component),S=(0,i.$j)((function(e){return{}}),(function(e){return{}}))(M);function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return!t||"object"!==L(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var L=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function H(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=G(e);if(t){var o=G(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return I(this,n)}}u.kL.register(u.f$,u.uw,u.ZL,u.od,u.jn,u.De,u.u,u.ST,u.vn,p.Z,u.Dx);var K=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(a,e);var t,n,o,i=H(a);function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,n=[{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e,t,n=this.props,o=n.title,i=n.fiscalDates,a=n.lineTitle,l=n.dataLine,c=n.color,u=n.median,d=[""],f=[];if((0,s.isNullOrUndefined)(i)||(d=i),!(0,s.isNullOrUndefined)(l)){var p=l[l.length-1],b=u,v=Math.round(100*(p/b-1));e="".concat((0,s.formatNumbers)(Number(p),1)," l\u1ea7n, "),v>=25?(e+="l\u1edbn h\u01a1n trung v\u1ecb ".concat(v,"%"),t="boxTitleXau"):v<=-25?(e+="nh\u1ecf h\u01a1n trung v\u1ecb ".concat(v,"%"),t="boxTitleTot"):(e+="ch\xeanh trung v\u1ecb ".concat(v,"%"),t="boxTitleTrungTinh")}for(var m=0;m<l.length;m++)f.push(u);var x={responsive:!0,layout:{},legend:{position:"bottom"},interaction:{mode:"index",intersect:!1},stacked:!1,plugins:{legend:{display:!0,position:"bottom",boxHeight:"2px",labels:{boxHeight:y.legendboxHeight,boxWidth:y.legendboxWidth}},datalabels:{display:!1,labels:{boxHeight:2,boxWidth:y.legendboxWidth}}}},g={labels:d,datasets:[{type:"line",pointRadius:0,label:a,borderColor:c,backgroundColor:c,borderWidth:2,fill:!1,data:l,datalabels:{color:c}},{pointRadius:0,type:"line",label:"Trung v\u1ecb",backgroundColor:"#000000",borderColor:"#000000",borderWidth:1,fill:!1,data:f,borderDash:[5,3]}]};try{return(0,r.jsxs)("div",{className:"bieuDoPBPER divCenter",children:[(0,r.jsxs)("h2",{className:"boxTitle",children:[o," ",(0,r.jsx)("span",{className:t,children:e})]}),(0,r.jsx)("div",{className:"divChart",children:(0,r.jsx)(h.kL,{options:x,data:g,height:y.heightChart})})]})}catch(j){return console.log("error",j),(0,r.jsx)(Error,{title:"Bi\u1ec3u \u0111\u1ed3",content:j+""})}}}],n&&A(t.prototype,n),o&&A(t,o),a}(o.Component),W=(0,i.$j)((function(e){return{}}),(function(e){return{}}))(K),V=n(29009),X=n(94831),$=n(14195),F=n(3023),Z=n(75358),U=n(26050),z=n(18001),Y=n(43815),q={container1:{width:"900px",overflowX:"scroll",overflowY:"hidden",padding:"10px",border:"1px solid #ccc"},container:{display:"flex",flexDirection:"row",alignItems:"center",height:"100px"},rotatedText:{writingMode:"vertical-rl",transform:"rotate(180deg)"},redDiv:{border:"solid 1px red",backgroundColor:"red",flex:1,height:"100%"}},J=function(e){for(var t=e.labels,n=e.barData,o=e.donvi,i=(e.heightChart,[]),a=0;a<t.length;a++)i.push({label:t[a],value:n[a]});return(0,r.jsx)("div",{className:"bieuDoPBPER",style:{width:"100%"},children:(0,r.jsx)("table",{style:{width:"100%"},children:(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{style:{width:"10px"},children:(0,r.jsx)("span",{style:q.rotatedText,children:o})}),(0,r.jsx)("td",{children:(0,r.jsx)(V.h,{width:"100%",height:200,children:(0,r.jsxs)(X.v,{data:i,margin:{top:5,right:5,left:5,bottom:15},children:[(0,r.jsx)($.q,{}),(0,r.jsx)(F.K,{dataKey:"label",angle:-45,textAnchor:"end",style:{fontSize:"10px"}}),(0,r.jsx)(Z.B,{}),(0,r.jsx)(U.u,{}),(0,r.jsx)(z.$,{dataKey:"value",fill:"green",children:i.map((function(e,t){return(0,r.jsx)(Y.b,{fill:e.value>=0?"green":"red"},"cell-".concat(t))}))})]})})})]})})})})},Q=n(3033);function ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function te(e){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ne(e,t){return!t||"object"!==oe(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function re(e,t){return(re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var oe=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function ie(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=te(e);if(t){var o=te(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ne(this,n)}}var ae=function(e){var t=e.item;e.index;return(0,r.jsxs)("tr",{className:"".concat(t.change>=0?"colorTot":"colorXau"),children:[(0,r.jsx)("td",{className:"colTen",children:t.vnCountryName}),(0,r.jsx)("td",{className:"colTen",children:t.name}),(0,r.jsx)("td",{className:"colNumberValue",children:(0,s.formatNumbers)(t.close)}),(0,r.jsx)("td",{className:"colNumberValue",children:(0,s.formatNumbers)(t.change,1)}),(0,r.jsx)("td",{className:"colNumberValue",children:(0,s.formatNumbers)(t.pctChange,1)}),(0,r.jsx)("td",{className:"colNumberValue",children:t.date})]})},le=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&re(e,t)}(a,e);var t,n,o,i=ie(a);function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this.props.CKTG_CHANGEData;if(!e)return(0,r.jsx)(Q.Z,{});var t=e.map((function(e,t){return(0,r.jsx)(ae,{index:t,item:e},t)}));try{return(0,r.jsxs)("div",{className:"bieuDoPBPER divCenter",children:[(0,r.jsx)("h2",{className:"boxTitle",children:"Bi\u1ebfn \u0110\u1ed9ng CKTG"}),(0,r.jsx)("div",{className:"divChart",style:{borderRadius:"10px"},children:(0,r.jsx)("table",{style:{borderRadius:"10px",width:"100%"},children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{className:"trHead",children:[(0,r.jsx)("td",{style:{borderRadius:"10px 0px 0px 0px"},children:"Th\u1ecb tr\u01b0\u1eddng"}),(0,r.jsx)("td",{children:"T\xean"}),(0,r.jsx)("td",{children:"Gi\xe1 \u0111\xf3ng c\u1eeda"}),(0,r.jsx)("td",{children:"Thay \u0111\u1ed5i"}),(0,r.jsx)("td",{children:"%"}),(0,r.jsx)("td",{style:{borderRadius:"0px 10px 0px 0px"},children:"Ng\xe0y"})]}),t]})})})]})}catch(n){return console.log("error",n),(0,r.jsx)(Error,{title:"Bi\u1ec3u \u0111\u1ed3",content:n+""})}}}])&&ee(t.prototype,n),o&&ee(t,o),a}(o.Component),ce=(0,i.$j)((function(e){return{}}),(function(e){return{}}))(le);(0,a.registerLocale)("vi",c.vi);function se(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ue(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function de(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function he(e){return(he=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function pe(e,t){return!t||"object"!==ve(t)&&"function"!==typeof t?ue(e):t}function be(e,t){return(be=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ye(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return se(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return se(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ve=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function me(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=he(e);if(t){var o=he(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return pe(this,n)}}(0,a.registerLocale)("vi",c.vi);var xe="subMenu1ttck_tg",ge="subMenu1vn100",je="subMenu1GdfGt",_e="subMenu1Gdfkl",Ce="subMenu1GdpGt",Ne="subMenu1Gdpkl";u.kL.register(u.f$,u.uw,u.ZL,u.od,u.jn,u.De,u.u,u.ST,u.vn);var we=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&be(e,t)}(a,e);var t,n,o,i=me(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),fe(ue(t=i.call(this,e)),"handleSubMenuClick",(function(e){t.setState({subMenu1Path:e})})),fe(ue(t),"handleSubMenuClickGDF",(function(e){console.log("subMenu1PathGDF",e),t.setState({subMenu1PathGDF:e})})),fe(ue(t),"handleSubMenuClickGDP",(function(e){t.setState({subMenu1PathGDP:e})})),fe(ue(t),"handlePrDateChange",(function(e){var n=ye(e,2),r=n[0],o=n[1];t.setState({prStartDate:r,prEndDate:o})})),t.state={subMenu1Path:xe,subMenu1PathGDF:je,subMenu1PathGDP:Ce,prStartDate:new Date("2009/04/25"),prEndDate:new Date},t}return t=a,(n=[{key:"componentWillReceiveProps",value:function(e){}},{key:"componentDidMount",value:function(){(0,b.bh)().dispatch((0,d.oh)()),(0,b.bh)().dispatch((0,d.vO)()),(0,b.bh)().dispatch((0,f.DX)()),(0,b.bh)().dispatch((0,f._6)())}},{key:"render",value:function(){var e=this.props,t=(e.newFiscalDate,e.ttckData),n=e.VNINDEX_INDICATORSData,o=e.CKTG_CHANGEData,i=e.GD_KHOI_NGOAI_TU_DOANHData,a=this.state,c=a.subMenu1Path,u=a.subMenu1PathGDF,d=a.subMenu1PathGDP,f=a.prStartDate,h=a.prEndDate;if(!t||!n)return(0,r.jsx)(Q.Z,{});for(var p=t.ToJson,b=t.ToJson100,y=[],v=[],m=[],x=[],g=[],j=[],_=[],C=[],N=[],w=[],T=[],O=[],P=[],k=[],R=[],E=n.tradingDates,M=n.PER,A=n.PBR,G=f.toISOString().substring(0,10),I=h||new Date,B=(I=(0,s.getLastDayOfMonth)(I)).toISOString().substring(0,10),L=0;L<E.length;L++)G<=E[L]&&E[L]<=B&&(P.push(E[L]),k.push((0,s.formatNumbers)(M[L],2)),R.push((0,s.formatNumbers)(A[L],2)));var H=(0,s.median)(k,2),K=(0,s.median)(R,2);console.log("medianPER, medianPBR",H,K);try{var V=this,X=[],$=[],F="",Z="",U=[],z=[],Y="",q="",ee="",te="",ne="boxTitleXau",re="boxTitleXau";if(i){var oe=i.tdF,ie=i.netValF,ae=i.netVolF,le=i.tdP,se=i.netValP,ue=i.netVolP;U=oe.map((function(e){return(0,s.convertYMD2DMY)(e)})),z=le.map((function(e){return(0,s.convertYMD2DMY)(e)}));var de=ie[ie.length-1]/1e9;de>=0&&(ne="boxTitleTot"),q=oe[oe.length-1],Y="".concat((0,s.formatNumbers)(de,1)," t\u1ef7 kh\u1ed1i l\u01b0\u1ee3ng ").concat((0,s.formatNumbers)(ae[ae.length-1]/1e6,1)," tri\u1ec7u c\u1ed5");var he=se[se.length-1]/1e9;he>=0&&(re="boxTitleTot"),te=le[le.length-1],ee="".concat((0,s.formatNumbers)(he,1)," t\u1ef7 kh\u1ed1i l\u01b0\u1ee3ng ").concat((0,s.formatNumbers)(ae[ae.length-1]/1e6,1)," tri\u1ec7u c\u1ed5"),u===je?(X=ie.map((function(e){return Math.round(10*e/1e9)/10})),F="T\u1ef7 \u0111\u1ed3ng"):(X=ae.map((function(e){return Math.round(10*e/1e6)/10})),F="Tri\u1ec7u c\u1ed5 phi\u1ebfu"),d===Ce?($=se.map((function(e){return Math.round(10*e/1e9)/10})),Z="T\u1ef7 \u0111\u1ed3ng"):($=ue.map((function(e){return Math.round(10*e/1e6)/10})),Z="Tri\u1ec7u c\u1ed5 phi\u1ebfu")}if((0,s.isNullOrUndefined)(t))return(0,r.jsx)("div",{className:"bieuDoBox",children:"-"});for(L=0;L<p.length;L++)y.push(p[L].Code),x.push(p[L].Min),j.push(p[L].KhoangGiaTri),m.push(p[L].HienTai),v.push(p[L].Median),g.push(p[L].Max);for(L=0;L<b.length;L++)_.push(b[L].Code),w.push(b[L].Min),O.push(b[L].KhoangGiaTri),N.push(b[L].HienTai),C.push(b[L].Median),T.push(b[L].Max);var pe=(0,s.isMobile)()?"100%":"50%",be=(0,s.isMobile)()?"100%":"20%";return(0,r.jsx)("div",{className:"homeBound",style:{width:"100%",padding:"0px 20px"},children:(0,r.jsx)("div",{className:"homeContent",children:(0,r.jsxs)("div",{className:"divColCenter",children:[(0,r.jsx)("h1",{className:"h1Title",children:"\u0110\u1ecbnh Gi\xe1 PE & PB"}),(0,r.jsxs)("div",{className:"nav_submenu_roundButton_wrap",children:[(0,r.jsx)("button",{className:"nav_solid_submenu_item ".concat(c===xe?"nav_solid_submenu_item_active":""),onClick:function(){return V.handleSubMenuClick(xe)},children:"Th\u1ecb Tr\u01b0\u1eddng Ch\u1ee9ng Kho\xe1n"}),(0,r.jsx)("button",{className:"nav_solid_submenu_item ".concat(c===ge?"nav_solid_submenu_item_active":""),onClick:function(){return V.handleSubMenuClick(ge)},children:"VN100"})]}),c===xe&&(0,r.jsxs)("div",{className:"divCol",style:{width:"100%"},children:[(0,r.jsxs)("div",{className:"divRowDColM",style:{width:"100%"},children:[(0,r.jsxs)("div",{className:"divColCenter div50d100m",style:{width:"50%",justifyContent:"flex-start",border:"1px solid #E7E7E7",borderRadius:"10px",marginRight:"10px",paddingTop:"5px"},children:[(0,r.jsx)("h2",{className:"boxTitle",children:"PE Th\u1ecb Tr\u01b0\u1eddng CKTG"}),(0,r.jsx)(D.Z,{title:"",labels:y,lineTitle:"Trung v\u1ecb",dataLine:v,dotTitle:"Hi\u1ec7n t\u1ea1i",dataDot:m,minTitle:"Min",heightChart:300,dataMin:x,barTitle:"Max",max:g,yAxisMax:50})]}),(0,r.jsx)("div",{className:"divColCenter div50d100m",style:fe({width:"50%",justifyContent:"top",border:"1px solid #E7E7E7",borderRadius:"10px",marginLeft:"5px",paddingTop:"5px"},"justifyContent","flex-start"),children:(0,r.jsx)(ce,{CKTG_CHANGEData:o})})]}),(0,r.jsxs)("div",{className:"divCol",style:{border:"1px solid #E7E7E7",marginTop:"15px",borderRadius:"10px"},children:[(0,r.jsxs)("div",{className:"divRow",style:{width:"100%",padding:"10px 10px 5px 10px"},children:[(0,r.jsxs)("div",{className:"div50d100m divLeft",children:[(0,r.jsx)("span",{style:{paddingRight:"5px"},children:"Kho\u1ea3ng th\u1eddi gian xem d\u1eef li\u1ec7u"}),(0,r.jsx)(l(),{showIcon:!0,selected:f,onChange:this.handlePrDateChange,selectsRange:!0,startDate:f,endDate:h,dateFormat:"MM/yyyy",showMonthYearPicker:!0,locale:"vi",wid:!0})]}),(0,r.jsx)("div",{className:"div50d100m divRight",children:(0,r.jsxs)("label",{children:["(D\u1eef li\u1ec7u c\u1eadp nh\u1eadt \u0111\u1ebfn ng\xe0y ",P[P.length-1],")"]})})]}),(0,r.jsxs)("div",{className:"divRowDColM",style:{width:"100%"},children:[(0,r.jsx)("div",{className:"divColCenter div50d100m",style:{width:"50%",justifyContent:"center",margin:"3px"},children:(0,r.jsx)(W,{fiscalDates:P,title:"PER C\u1ee7a VNINDEX",lineTitle:"PE",dataLine:k,color:"#0E448A",median:H})}),(0,r.jsx)("div",{className:"divColCenter div50d100m",style:{width:"50%",margin:"3px"},children:(0,r.jsx)(W,{fiscalDates:P,title:"PBR C\u1ee7a VNINDEX",lineTitle:"PB",dataLine:R,color:"#FD9E2B",median:K})})]})]}),(0,r.jsx)("div",{className:"divCol",style:{border:"1px solid #E7E7E7",marginTop:"15px",borderRadius:"10px",padding:"10px"},children:(0,r.jsx)("div",{className:"divCol divCenter",style:{width:"100%"},children:(0,r.jsxs)("div",{className:"divCol divCenter",style:{width:"100%"},children:[(0,r.jsxs)("div",{className:"divRowDColM",style:{width:"100%"},children:[(0,r.jsx)("div",{className:"div50d100m divLeft",children:(0,r.jsx)("h2",{className:"h2Title",children:"Di\u1ec5n bi\u1ebfn giao d\u1ecbch kh\u1ed1i ngo\u1ea1i"})}),(0,r.jsxs)("div",{className:"div50d100m divRight",children:[(0,r.jsxs)("span",{className:"h2Title",style:{fontSize:"10pt"},children:["Gi\xe1 tr\u1ecb r\xf2ng ng\xe0y ",q]}),(0,r.jsx)("span",{className:"h2Title ".concat(ne),style:{fontSize:"10pt",paddingLeft:"10px"},children:Y})]})]}),(0,r.jsxs)("div",{className:"nav_submenu_roundButton_wrap",children:[(0,r.jsx)("button",{className:"nav_solid_submenu_item ".concat(u===je?"nav_solid_submenu_item_active":""),onClick:function(){return V.handleSubMenuClickGDF(je)},children:"Gi\xe1 tr\u1ecb GD"}),(0,r.jsx)("button",{className:"nav_solid_submenu_item ".concat(u===_e?"nav_solid_submenu_item_active":""),onClick:function(){return V.handleSubMenuClickGDF(_e)},children:"Kh\u1ed1i l\u01b0\u1ee3ng"})]}),(0,r.jsx)(J,{labels:U,barData:X,donvi:F,heightChart:be})]})})}),(0,r.jsxs)("div",{className:"divCol",style:{border:"1px solid #E7E7E7",marginTop:"15px",borderRadius:"10px",padding:"10px"},children:[(0,r.jsxs)("div",{className:"divCol divCenter",style:{width:"100%"},children:[(0,r.jsxs)("div",{className:"divRowDColM",style:{width:"100%"},children:[(0,r.jsx)("div",{className:"div50d100m divLeft",children:(0,r.jsx)("h2",{className:"h2Title",children:"Di\u1ec5n bi\u1ebfn giao d\u1ecbch t\u1ef1 doanh"})}),(0,r.jsxs)("div",{className:"div50d100m divRight",children:[(0,r.jsxs)("span",{className:"h2Title",style:{fontSize:"10pt"},children:["Gi\xe1 tr\u1ecb r\xf2ng ng\xe0y ",te]}),(0,r.jsx)("span",{className:"h2Title ".concat(re),style:{fontSize:"10pt",paddingLeft:"10px"},children:ee})]})]}),(0,r.jsxs)("div",{className:"nav_submenu_roundButton_wrap",children:[(0,r.jsx)("button",{className:"nav_solid_submenu_item ".concat(d===Ce?"nav_solid_submenu_item_active":""),onClick:function(){return V.handleSubMenuClickGDP(Ce)},children:"Gi\xe1 tr\u1ecb GD"}),(0,r.jsx)("button",{className:"nav_solid_submenu_item ".concat(d===Ne?"nav_solid_submenu_item_active":""),onClick:function(){return V.handleSubMenuClickGDP(Ne)},children:"Kh\u1ed1i l\u01b0\u1ee3ng"})]})]}),(0,r.jsx)(J,{labels:z,barData:$,donvi:Z,heightChart:be})]})]}),c===ge&&(0,r.jsx)("div",{className:"divCenter",style:{width:"100%"},children:(0,r.jsx)(S,{title:"",labels:_,lineTitle:"Trung v\u1ecb",dataLine:C,dotTitle:"Hi\u1ec7n t\u1ea1i",dataDot:N,minTitle:"Min",heightChart:pe,dataMin:w,barTitle:"Max",max:T})})]})})})}catch(ye){return console.log("error",ye),(0,r.jsx)("div",{className:"bieuDoBox",children:"e"})}}}])&&de(t.prototype,n),o&&de(t,o),a}(o.Component),De=(0,i.$j)((function(e){return{ttckData:e.bctcReducer.ttckData,CKTG_CHANGEData:e.bctcReducer.CKTG_CHANGEData,VNINDEX_INDICATORSData:e.stockReducer.VNINDEX_INDICATORSData,GD_KHOI_NGOAI_TU_DOANHData:e.stockReducer.GD_KHOI_NGOAI_TU_DOANHData}}),(function(e){return{getTtckTg:function(){return e((0,d.oh)())},getCKTG_CHANGE:function(){return e((0,d.vO)())},getVNINDEX_INDICATORS:function(){return e((0,f.DX)())},getGD_KHOI_NGOAI_TU_DOANH:function(){return e((0,f._6)())}}}))(we),Te=(n(53948),n(45325)),Oe=!0,Pe=function(){var e=(0,i.I0)();return(0,o.useEffect)((function(){}),[e]),(0,r.jsx)(Te.Z,{navmenu:!1,container:!1,children:(0,r.jsx)(De,{className:"text-muted small"})})}}},function(e){e.O(0,[523,551,260,196,20,331,496,192,325,472,774,888,179],(function(){return t=89365,e(e.s=t);var t}));var t=e.O();_N_E=t}]);