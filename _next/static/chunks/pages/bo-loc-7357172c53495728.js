(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[310],{11250:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bo-loc",function(){return t(22156)}])},59843:function(e,n,t){"use strict";var r=t(85893);t(67294);n.Z=function(){return(0,r.jsxs)("div",{className:"divCenter",style:{padding:"20px 50px 50px 50px "},children:[(0,r.jsx)("img",{src:"/static/images/comming-soon.png",style:{width:"300px"}}),(0,r.jsxs)("a",{href:"/",children:[(0,r.jsx)("h1",{className:"h1Title",children:"B\u1ea1n h\xe3y quay v\u1ec1 Trang Ch\u1ee7 nh\xe9"})," "]})]})}},22156:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return re}});var r=t(85893),o=t(67294),i=t(56225),c=(t(62444),t(41527)),a=(t(96486),t(1257)),u=t(38585),s=t(22582),l=t(78117),f=t(25968),h=t(6226),m=t(24435),d=t(10932),p=t(58789);function y(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){b(e,n,t[n])}))}return e}function g(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return y(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return y(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var N=l.Z.Option,_=function(e){var n=e.showItems,t=e.DataGoc,i=e.displayNames,c=(0,o.useState)({}),a=c[0],u=c[1],s=(0,o.useState)(t),y=s[0],_=s[1],j=function(e,n,t){u(v({},a,b({},e,v({},a[e],b({},n,t)))))},O=Object.keys(t[0]||{}).filter((function(e){return n.indexOf(e)>=0})).map((function(e){return{title:(0,r.jsx)("span",{style:{fontSize:"9pt",padding:"0px 0px"},children:i[e]?i[e]:e}),dataIndex:e,key:e,align:"symbol"===e?"left":"right",width:100,sorter:function(n,t){return n[e]-t[e]}}}));return(0,r.jsxs)("div",{style:{width:"100%"},children:[(0,r.jsxs)("div",{style:{width:"100%",marginBottom:16},className:"boxBoLoc",children:[(0,r.jsx)(f.Z,{style:{width:"100%"},children:Object.keys(t[0]||{}).map((function(e){var t,o,c;return n.indexOf(e)>=0?",lastDates,lastNoXauDates,slcp,lastQuaterPrice,vonHoaP73".indexOf(e)<0&&(0,r.jsx)(h.Z,{span:12,className:"divCenter",children:(0,r.jsxs)("div",{className:"wrapItemLoc divRow divLeft",children:[(0,r.jsx)("span",{className:"colLocLabel",children:i[e]?i[e]:e}),(0,r.jsxs)(l.Z,{className:"colLocSelect",value:a[e]&&a[e].type?a[e].type:"equal",onChange:function(n){return j(e,"type",n)},children:[(0,r.jsx)(N,{value:"equal",children:"B\u1eb1ng"}),(0,r.jsx)(N,{value:"range",children:"Kho\u1ea3ng"})]}),"range"===(null===(t=a[e])||void 0===t?void 0:t.type)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.Z,{placeholder:"Min",style:{marginRight:8},onChange:function(n){return j(e,"min",n)}}),(0,r.jsx)(m.Z,{placeholder:"Max",onChange:function(n){return j(e,"max",n)}})]}):(0,r.jsx)(m.Z,{placeholder:"Nh\u1eadp gi\xe1 tr\u1ecb ".concat(e),onChange:function(n){return j(e,"value",n)},value:"range"!==(null===(o=a[e])||void 0===o?void 0:o.type)?null===(c=a[e])||void 0===c?void 0:c.value:null})]})},e):""}))}),(0,r.jsxs)("div",{className:"divRow divCenter divBoLocButton",children:[(0,r.jsx)(d.ZP,{className:"btnXanh",onClick:function(){var e=g(t);Object.keys(a).forEach((function(n){var t=a[n];"range"===t.type?(void 0!==t.min&&(e=e.filter((function(e){return e[n]>=t.min}))),void 0!==t.max&&(e=e.filter((function(e){return e[n]<=t.max})))):"equal"!==t.type&&void 0!==t.type||void 0===t.value||null===t.value||(e=e.filter((function(e){return e[n]===t.value})))})),_(e)},children:"\xc1p d\u1ee5ng b\u1ed9 l\u1ecdc"}),(0,r.jsx)(d.ZP,{className:"btnXam",onClick:function(){var e=g(t);u({}),_(e)},children:"\u0110\u1eb7t l\u1ea1i"})]})]}),(0,r.jsx)(p.Z,{className:"custom-table",columns:O,dataSource:y,rowKey:"symbol",scroll:{x:"max-content",y:400},pagination:!1})]})},j=function(e){var n=e.mucTimKiemItems,t=e.callbackCheckSubItem,o=e.displayNames;return console.log("mucTimKiemItems",n),(0,r.jsxs)("div",{style:{width:"100%"},children:[(0,r.jsx)("h2",{className:"h2Title",children:"Ch\u1ecdn Ti\xeau Ch\xed L\u1ecdc"}),n.map((function(e,n){return"chung"!==e.itemName&&(0,r.jsxs)("div",{style:{width:"100%",textAlign:"start",alignItems:"flex-start"},children:[(0,r.jsx)("h3",{className:"h3Title",children:e.itemName}),(0,r.jsx)("div",{className:"divRowWrap",style:{backgroundColor:"#F3F3F3",padding:"2px 5px",fontSize:"9pt"},children:e.subItems.map((function(n,i){return(0,r.jsxs)("div",{className:"divBoLocChonItem",children:[(0,r.jsx)("input",{type:"checkbox",checked:n.checked,onChange:function(){return t(e.itemName,n.subItemName)},style:{marginRight:"5px"}}),o[n.subItemName]]},i)}))})]},n)}))]})};function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){T(e,n,t[n])}))}return e}function P(e,n){return!n||"object"!==k(n)&&"function"!==typeof n?O(e):n}function S(e,n){return(S=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var k=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function L(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=C(e);if(n){var o=C(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return P(this,t)}}var B={chung:{symbol:"CP",lastNoXauDates:"",slcp:""},"\u0110\u1ecbnh gi\xe1":{PB:"PB",PE:"PE",PS:"PS"},"Kh\u1ea3 n\u0103ng sinh l\u1eddi":{roa:"ROA (cu\u1ed1i qu\xfd)",roe:"ROE (cu\u1ed1i qu\xfd)"},"Ch\u1ea5t l\u01b0\u1ee3ng t\xe0i s\u1ea3n":{lastNoXauTiLeBaoPhu:"N\u1ee3 x\u1ea5u (nh\xf3m 3-5)",lastTyLeNhomNo2345:"N\u1ee3 (nh\xf3m 2-5)",lastnoXauTiLeBaoPhu:"D\u1ef1 ph\xf2ng RR/ N\u1ee3 x\u1ea5u (nh\xf3m 3-5)",lastduPhongRuiRoTinDungNo2345:"D\u1ef1 ph\xf2ng RR/ N\u1ee3 (nh\xf3m 2-5)",lastnhTsTiLeLaiPhiTongTaiSan:"L\xe3i v\xe0 ph\xed ph\u1ea3i thu/ T\u1ed5ng TS"},"T\xe0i s\u1ea3n":{lastTongTS:"T\u1ed5ng TS/ VCSH",lastVcsh:"VCSH",lastnhChoVayKhachHang:"Quy m\xf4 t\xedn d\u1ee5ng (Cho vay KH)",lastTangTruongTongTS:"T\u0103ng tr\u01b0\u1edfng t\u1ed5ng TS (YoY)",lastTangTruongVcsh:"T\u0103ng tr\u01b0\u1edfng VCSH (YoY)",lastnhTangTruongChoVayKhachHang:"T\u0103ng tr\u01b0\u1edfng quy m\xf4 t\xedn d\u1ee5ng (YoY)",lastnhToiTangTruongYoy5Nam:"T\u0103ng tr\u01b0\u1edfng t\u1ed5ng TS (YoY) 5 n\u0103m g\u1ea7n nh\u1ea5t",lastVcshYoy5Nam:"T\u0103ng tr\u01b0\u1edfng VCSH (YoY) - 5 n\u0103m g\u1ea7n nh\u1ea5t",lastQuiMoTinDungYoy5Nam:"T\u0103ng tr\u01b0\u1edfng quy m\xf4 t\xedn d\u1ee5ng (YoY) 5 n\u0103m"},"Hi\u1ec7u qu\u1ea3 ho\u1ea1t \u0111\u1ed9ng":{lastnhSlNIM:"NIM",lastnhSlYOAE:"L\xe3i cho vay (YOAE)",lastnhSlCOF:"Chi ph\xed v\u1ed1n (COF)",lastnhTiLeLaiHDDV_TOI:"L\xe3i thu\u1ea7n t\u1eeb H\u0110 DV/ T\u1ed5ng thu nh\u1eadp H\u0110 (TOI)",lastnhToiTangTruongYoy:"T\u0103ng tr\u01b0\u1edfng TOI (YoY)",lastTangTruongLnst:"T\u0103ng tr\u01b0\u1edfng LNST (YoY)",nhToiTangTruongYoy5Nam:"T\u0103ng tr\u01b0\u1edfng TOI (YoY) - 5 n\u0103m g\u1ea7n nh\u1ea5t",lasttangTruongLNSTCtyMeNam:"T\u0103ng tr\u01b0\u1edfng LNST(YoY) - 5 n\u0103m g\u1ea7n nh\u1ea5t"},"C\u1ed5 t\u1ee9c":{ctcp5:"C\u1ed5 t\u1ee9c TB 5 n\u0103m g\u1ea7n nh\u1ea5t/ Gi\xe1 CP",ctcp3:"C\u1ed5 t\u1ee9c TB 3 n\u0103m g\u1ea7n nh\u1ea5t/ Gi\xe1 CP"}},R=Object.keys(B).map((function(e){return{itemName:e,subItems:Object.keys(B[e]).map((function(e){return{subItemName:e,checked:!1}}))}})),D=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&S(e,n)}(l,e);var n,t,o,i=L(l);function l(e){var n;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,l),T(O(n=i.call(this,e)),"handleSubMenuClick",(function(e){n.setState({subMenu1Path:e})})),T(O(n),"callbackCheckSubItem",(function(e,t){var r=n.state.mucTimKiemItems;r=r.map((function(n){return n.itemName===e?w({},n,{subItems:n.subItems.map((function(e){return e.subItemName===t?w({},e,{checked:!e.checked}):e}))}):n})),n.setState({mucTimKiemItems:r})})),n.state={mucTimKiemItems:R},n}return n=l,(t=[{key:"componentWillReceiveProps",value:function(e){}},{key:"componentDidMount",value:function(){(0,c.bh)().dispatch((0,a.VX)())}},{key:"render",value:function(){var e=this.state,n=(e.subMenu1Path,e.mucTimKiemItems),t=this.props,o=t.BO_LOC_NGAN_HANG_Data,i=t.userLoginData,c=(0,s.K8)(i,"".concat(s.Cx.GSP_CB)),a={},l=",symbol";n.map((function(e){e.subItems.map((function(e){e.checked&&(l+=",".concat(e.subItemName))}))})),Object.keys(B).forEach((function(e){var n=B[e];Object.keys(n).forEach((function(e){a[e]=n[e]}))}));try{if((0,u.isNullOrUndefined)(o))return(0,r.jsx)("div",{className:"bieuDoBox",children:"-"});var f="";return f=""!==c?(0,r.jsx)("div",{className:"boxGocNhin",children:c}):(0,r.jsx)(_,{showItems:l,DataGoc:o,displayNames:a}),(0,r.jsx)("div",{className:"divColCenter",children:(0,r.jsxs)("div",{className:"divCenter divCol",style:{width:"100%"},children:[(0,r.jsxs)("div",{className:"divRow2ColOnMobile",children:[(0,r.jsx)("div",{className:"divBoLocDaLuuWrap",children:(0,r.jsx)("h2",{className:"h2Title",children:"B\u1ed9 L\u1ecdc \u0110\xe3 L\u01b0u"})}),(0,r.jsx)("div",{className:"divBoLocChonTieuChiLocWrap",children:(0,r.jsx)(j,{mucTimKiemItems:n,callbackCheckSubItem:this.callbackCheckSubItem,displayNames:a})})]}),f]})})}catch(h){return console.log("error",h),(0,r.jsx)("div",{className:"bieuDoBox",children:"e"})}}}])&&x(n.prototype,t),o&&x(n,o),l}(o.Component),I=(0,i.$j)((function(e){return{BO_LOC_NGAN_HANG_Data:e.stockReducer.BO_LOC_NGAN_HANG_Data,userLoginData:e.userReducer.userLoginData}}),(function(e){return{FGET_BO_LOC_NGAN_HANG:function(){return e((0,a.VX)())}}}))(D);var A=t(59843);function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,n){return!n||"object"!==K(n)&&"function"!==typeof n?G(e):n}function M(e,n){return(M=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var K=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function V(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=Y(e);if(n){var o=Y(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return H(this,t)}}var Z=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&M(e,n)}(l,e);var n,t,o,i=V(l);function l(e){var n,t,r,o;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,l),n=i.call(this,e),t=G(n),o=function(e){n.setState({subMenu1Path:e})},(r="handleSubMenuClick")in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,n.state={},n}return n=l,(t=[{key:"componentWillReceiveProps",value:function(e){}},{key:"componentDidMount",value:function(){(0,c.bh)().dispatch((0,a.VX)())}},{key:"render",value:function(){this.state.subMenu1Path;var e=this.props,n=e.BO_LOC_NGAN_HANG_Data,t=e.userLoginData,o=(0,s.K8)(t,"".concat(s.Cx.GSP_CB));console.log("render BO_LOC_NGAN_HANG_Data",n);try{if((0,u.isNullOrUndefined)(n))return(0,r.jsx)("div",{className:"bieuDoBox",children:"-"});var i="";return i=""!==o?(0,r.jsx)("div",{className:"boxGocNhin",children:o}):(0,r.jsx)(A.Z,{}),(0,r.jsxs)("div",{className:"divColCenter",children:[(0,r.jsx)("h1",{className:"h1Title",children:"B\u1ed9 L\u1ecdc Ng\xe2n H\xe0ng"}),(0,r.jsx)("div",{className:"divCenter",style:{width:"100%"},children:i})]})}catch(c){return console.log("error",c),(0,r.jsx)("div",{className:"bieuDoBox",children:"e"})}}}])&&E(n.prototype,t),o&&E(n,o),l}(o.Component),X=(0,i.$j)((function(e){return{BO_LOC_NGAN_HANG_Data:e.stockReducer.BO_LOC_NGAN_HANG_Data,userLoginData:e.userReducer.userLoginData}}),(function(e){return{FGET_BO_LOC_NGAN_HANG:function(){return e((0,a.VX)())}}}))(Z),q=(t(53948),t(45325));function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Q(e,n){return!n||"object"!==z(n)&&"function"!==typeof n?F(e):n}function U(e,n){return(U=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var z=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function J(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=$(e);if(n){var o=$(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return Q(this,t)}}var ee="subMenuBoLoc_NH",ne="subMenuBoLoc_DN",te=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&U(e,n)}(c,e);var n,t,o,i=J(c);function c(e){var n,t,r,o;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c),n=i.call(this,e),t=F(n),o=function(e){n.setState({subMenu1Path:e})},(r="handleSubMenuClick")in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,n.state={subMenu1Path:ee},n}return n=c,(t=[{key:"render",value:function(){var e=this,n=this.state.subMenu1Path;return(0,r.jsxs)(q.Z,{navmenu:!1,container:!1,className:"divCenter",children:[(0,r.jsxs)("div",{className:"nav_submenu_roundButton_wrap divCenter",children:[(0,r.jsx)("button",{className:"nav_h1menu_solid_submenu_item_left ".concat(n===ne?"nav_h1menu_solid_submenu_item_active":""),onClick:function(){return e.handleSubMenuClick(ne)},children:"B\u1ed9 L\u1ecdc C\u1ed5 Phi\u1ebfu Th\u01b0\u1eddng"}),(0,r.jsx)("button",{className:"nav_h1menu_solid_submenu_item_right ".concat(n===ee?"nav_h1menu_solid_submenu_item_active":""),onClick:function(){return e.handleSubMenuClick(ee)},children:"B\u1ed9 L\u1ecdc C\u1ed5 Phi\u1ebfu Ng\xe2n H\xe0ng"})]}),n===ne&&(0,r.jsx)(X,{className:"text-muted small"}),n===ee&&(0,r.jsx)(I,{className:"text-muted small"})]})}}])&&W(n.prototype,t),o&&W(n,o),c}(o.Component),re=(0,i.$j)((function(e){return{ttckData:e.bctcReducer.ttckData,userLoginData:e.userReducer.userLoginData}}),(function(e){return{getTtckTg:function(){return e(getTtckTg())}}}))(te)}},function(e){e.O(0,[523,260,868,986,325,774,888,179],(function(){return n=11250,e(e.s=n);var n}));var n=e.O();_N_E=n}]);