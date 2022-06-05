(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["authRegister"],{"1f0e":function(e,t,r){},5656:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var a,s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"auth-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[e._v("Sign up")]),r("p",{staticClass:"text-xs-center"},[e.isRegisterMode?r("router-link",{attrs:{to:{name:e.$routesNames.authLogin}}},[e._v(" Have an account? ")]):r("router-link",{attrs:{to:{name:e.$routesNames.authRegister}}},[e._v(" Need an account? ")])],1),r("common-errors-list",{attrs:{errors:e.errors}}),r("form",[r("fieldset",{attrs:{disabled:e.isLoading}},[e.isRegisterMode?r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your Name",required:"true"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]):e._e(),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email",required:"true"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password",required:"true"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),e.isLoading?r("common-loader",{staticClass:"pull-xs-right",attrs:{size:5,margin:0}}):r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right",on:{click:e.authAction}},[e._v(" "+e._s(e.isRegisterMode?"Sign up":"Sign in")+" ")])],1)],1)])])])},n=[],o=r("1da1"),i=r("d4ec"),c=r("bee2"),u=r("262e"),l=r("2caf"),d=(r("96cf"),r("9ab4")),m=r("60a3"),p=r("d13b"),f=r("bccb"),b=r("7f1d"),g=r("f5e0");(function(e){e["Register"]="Register",e["Login"]="Login"})(a||(a={}));var v=function(e){Object(u["a"])(r,e);var t=Object(l["a"])(r);function r(){var e;return Object(i["a"])(this,r),e=t.apply(this,arguments),e.isLoading=!1,e.username="",e.email="",e.password="",e.errors=[],e}return Object(c["a"])(r,[{key:"mounted",value:function(){this.errors=[]}},{key:"hasErrors",get:function(){var e;return!(null===(e=this.errors)||void 0===e||!e.length)}},{key:"isRegisterMode",get:function(){return this.mode===a.Register}},{key:"authAction",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.errors=[],this.isLoading=!0,e.prev=2,!this.isRegisterMode){e.next=8;break}return e.next=6,b["a"].register({email:this.email,password:this.password,username:this.username});case 6:e.next=10;break;case 8:return e.next=10,b["a"].login({email:this.email,password:this.password});case 10:this.$router.push({name:this.$routesNames.home}),e.next=20;break;case 13:if(e.prev=13,e.t0=e["catch"](2),!Object(g["a"])(e.t0)){e.next=19;break}this.errors=e.t0,e.next=20;break;case 19:throw e.t0;case 20:return e.prev=20,this.isLoading=!1,e.finish(20);case 23:case"end":return e.stop()}}),e,this,[[2,13,20,23]])})));function t(){return e.apply(this,arguments)}return t}()}]),r}(m["d"]);Object(d["a"])([Object(m["c"])({required:!0})],v.prototype,"mode",void 0),v=Object(d["a"])([Object(m["a"])({components:{CommonLoader:f["a"],CommonErrorsList:p["a"]}})],v);var h=v,y=h,j=r("2877"),O=Object(j["a"])(y,s,n,!1,null,null,null);t["b"]=O.exports},"803d":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("auth-page",{attrs:{mode:e.mode}})},s=[],n=r("d4ec"),o=r("262e"),i=r("2caf"),c=r("9ab4"),u=r("60a3"),l=r("5656"),d=function(e){Object(o["a"])(r,e);var t=Object(i["a"])(r);function r(){var e;return Object(n["a"])(this,r),e=t.apply(this,arguments),e.mode=l["a"].Register,e}return r}(u["d"]);d=Object(c["a"])([Object(u["a"])({components:{AuthPage:l["b"]}})],d);var m=d,p=m,f=r("2877"),b=Object(f["a"])(p,a,s,!1,null,null,null);t["default"]=b.exports},bccb:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"loader",style:e.styleVars})},s=[],n=r("d4ec"),o=r("bee2"),i=r("262e"),c=r("2caf"),u=r("9ab4"),l=r("60a3"),d=function(e){Object(i["a"])(r,e);var t=Object(c["a"])(r);function r(){return Object(n["a"])(this,r),t.apply(this,arguments)}return Object(o["a"])(r,[{key:"styleVars",get:function(){return{"--loader-size":"".concat(this.size,"em"),"--margin":"".concat(this.margin,"px")}}}]),r}(l["d"]);Object(u["a"])([Object(l["c"])({default:10})],d.prototype,"size",void 0),Object(u["a"])([Object(l["c"])({default:60})],d.prototype,"margin",void 0),d=Object(u["a"])([l["a"]],d);var m=d,p=m,f=(r("d3d2"),r("2877")),b=Object(f["a"])(p,a,s,!1,null,"4fea4ac7",null);t["a"]=b.exports},d13b:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"error-messages"},e._l(e.errors,(function(t){return r("li",{key:t},[e._v(e._s(t))])})),0)},s=[],n=r("d4ec"),o=r("262e"),i=r("2caf"),c=r("9ab4"),u=r("60a3"),l=function(e){Object(o["a"])(r,e);var t=Object(i["a"])(r);function r(){return Object(n["a"])(this,r),t.apply(this,arguments)}return r}(u["d"]);Object(c["a"])([Object(u["c"])({required:!0})],l.prototype,"errors",void 0),l=Object(c["a"])([u["a"]],l);var d=l,m=d,p=r("2877"),f=Object(p["a"])(m,a,s,!1,null,null,null);t["a"]=f.exports},d3d2:function(e,t,r){"use strict";r("1f0e")},f5e0:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0");function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function s(e,t){return!!t&&t instanceof Array&&(0===t.length||t.every((function(t){return a(t)===a(e)})))}function n(e){return s("string",e)}}}]);
//# sourceMappingURL=authRegister.56c41377.js.map