webpackJsonp([5,8],{113:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),a=n.n(r),c=n(2),o=n.n(c),u=n(32),i=n.n(u),d=n(1),f=n.n(d),s=n(11),l=n.n(s),p=n(3),h=n.n(p),P=n(25),O=this;t.default=function(){var e=h()(a.a.mark(function e(){var t,n,r,c,u,d=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},p=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",h=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",v=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"fetch";return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(p=p.toUpperCase(),d=P.b+d,"GET"==p&&(t="",l()(s).forEach(function(e){t+=e+"="+s[e]+"&"}),""!==t&&(t=t.substr(0,t.lastIndexOf("&")),d=d+"?"+t)),n=new Headers,n.append("Content-Type","application/json"),n.append("Accept","application/json"),n.append("Authorization",h),!window.fetch||"fetch"!=v){e.next=26;break}return r={method:p,headers:n,mode:"cors",cache:"force-cache",credentials:"include"},"POST"==p&&Object.defineProperty(r,"body",{value:f()(s)}),e.prev=10,e.next=13,fetch(d,r);case 13:return c=e.sent,401===c.status&&(window.location=P.a+"/views/coach/index.html#/redirect"),e.next=17,c.json();case 17:return u=e.sent,e.abrupt("return",u);case 21:throw e.prev=21,e.t0=e.catch(10),new Error(e.t0);case 24:e.next=28;break;case 26:return console.log("not support fetch!"),e.abrupt("return",new i.a(function(e,t){var n=void 0;n=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject;var r="";"POST"==p&&(r=f()(s)),n.open(p,d,!0),n.setRequestHeader("Content-type","application/json"),n.setRequestHeader("Authorization",h),n.send(r),n.onreadystatechange=function(){if(4===n.readyState)if(n.status,200===n.status){var r=n.response;"object"!==(void 0===r?"undefined":o()(r))&&(r=JSON.parse(r)),e(r)}else 401===n.status?window.location=P.a+"/views/coach/index.html#/redirect":t(n)}}));case 28:case"end":return e.stop()}},e,O,[[10,21]])}));return function(){return e.apply(this,arguments)}}()},33:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"redirect",function(){return a}),n.d(t,"getUser",function(){return c}),n.d(t,"login",function(){return o}),n.d(t,"myattendence",function(){return u}),n.d(t,"getDayHour",function(){return i}),n.d(t,"setattendence",function(){return d}),n.d(t,"releaseMonthPlan",function(){return f}),n.d(t,"getMonthPlan",function(){return s}),n.d(t,"getDayPlanDetail",function(){return l}),n.d(t,"askOff",function(){return p}),n.d(t,"addWork",function(){return h}),n.d(t,"cancelAskOff",function(){return P}),n.d(t,"cancelAddWork",function(){return O}),n.d(t,"changeHistory",function(){return v}),n.d(t,"cancelExamineAsk",function(){return T}),n.d(t,"reservationDetail",function(){return w}),n.d(t,"setPrebook",function(){return S}),n.d(t,"logout",function(){return _}),n.d(t,"modifyPwd",function(){return g}),n.d(t,"validateCoach",function(){return y}),n.d(t,"forgetPwd",function(){return b});var r=n(113),a=function(e){return n.i(r.default)("/api/oauth/create",e,"POST")},c=function(e){return n.i(r.default)("/api/oauth/get_user",e,"POST")},o=function(e){return n.i(r.default)("/api/coach/bind",e,"POST")},u=function(e,t){return n.i(r.default)("/api/coach/get_module",e,"POST",t)},i=function(e,t){return n.i(r.default)("/api/coach/get_dayhour",e,"POST",t)},d=function(e,t){return n.i(r.default)("/api/coach/set_module",e,"POST",t)},f=function(e,t){return n.i(r.default)("/api/coach/release_plan",e,"POST",t)},s=function(e,t){return n.i(r.default)("/api/coach/get_plan",e,"POST",t)},l=function(e,t){return n.i(r.default)("/api/coach/dayspan_detail",e,"POST",t)},p=function(e,t){return n.i(r.default)("/api/coach/ask_off",e,"POST",t)},h=function(e,t){return n.i(r.default)("/api/coach/add_work",e,"POST",t)},P=function(e,t){return n.i(r.default)("/api/coach/cancel_askoff",e,"POST",t)},O=function(e,t){return n.i(r.default)("/api/coach/cancel_addwork",e,"POST",t)},v=function(e,t){return n.i(r.default)("/api/coach/change_history",e,"POST",t)},T=function(e,t){return n.i(r.default)("/api/coach/cancel_ask",e,"POST",t)},w=function(e,t){return n.i(r.default)("/api/coach/my_prebook",e,"POST",t)},S=function(e,t){return n.i(r.default)("/api/coach/set_prebook",e,"POST",t)},_=function(e,t){return n.i(r.default)("/api/coach/unbind",e,"POST",t)},g=function(e,t){return n.i(r.default)("/api/coach/modify_pwd",e,"POST",t)},y=function(e,t){return n.i(r.default)("/api/coach/validate_coach",e,"POST")},b=function(e,t){return n.i(r.default)("/api/coach/forget_pwd",e,"POST")}}},[33]);