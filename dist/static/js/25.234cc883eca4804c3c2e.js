webpackJsonp([25],{KLra:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("2uFj"),i={name:"remember",data:function(){return{type:"邮箱找回",sending:!1,send:!1,captcha:e.k,loading:!1,form:{email:"",phone:"",captcha:"",code:"",uId:""}}},methods:{getcaptcha:function(){this.captcha=this.captcha+"?"+new Date},submit:function(){}}},o={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"remember"},[s("div",{staticClass:"page-view"},[s("div",{staticClass:"t-c",staticStyle:{"margin-top":"20px"}},[s("RadioGroup",{attrs:{type:"button",size:"large"},model:{value:t.type,callback:function(a){t.type=a},expression:"type"}},[s("Radio",{attrs:{label:"邮箱找回"}},[t._v("邮箱找回")]),t._v(" "),s("Radio",{attrs:{label:"手机找回"}},[t._v("手机找回")])],1)],1),t._v(" "),"邮箱找回"===t.type?s("ul",{staticClass:"form",staticStyle:{width:"50%","padding-top":"20px"}},[s("li",{staticClass:"form-item"},[s("h2",{staticClass:"label"},[t._v("邮箱")]),t._v(" "),s("div",{staticClass:"form-row"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{type:"text",placeholder:"请填写密码!"},domProps:{value:t.form.email},on:{input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}})])]),t._v(" "),s("li",{staticClass:"form-item"},[s("h2",{staticClass:"label"},[t._v("图片验证码")]),t._v(" "),s("div",{staticClass:"row w"},[s("div",{staticClass:"col v-m g-8"},[s("div",{staticClass:"form-row"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.captcha,expression:"form.captcha"}],attrs:{type:"text",placeholder:"请填写5位验证码！"},domProps:{value:t.form.captcha},on:{input:function(a){a.target.composing||t.$set(t.form,"captcha",a.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col v-m g-6",staticStyle:{"padding-left":"10px"}},[s("img",{staticClass:"v-m",staticStyle:{cursor:"pointer"},attrs:{src:t.captcha,alt:""},on:{click:t.getcaptcha}})]),t._v(" "),s("div",{staticClass:"col v-m g-10"},[t.send?t._e():s("Button",{attrs:{loading:t.sending,type:"success",disabled:t.form.captcha.length<5,size:"large"}},[t._v("发送邮件验证码")]),t._v(" "),t.send?s("Button",{attrs:{type:"ghost",disabled:"",size:"large"}},[t._v(t._s(t.time)+"s重新获取")]):t._e()],1)])]),t._v(" "),s("li",{staticClass:"form-item"},[s("h2",{staticClass:"label"},[t._v("邮箱验证码")]),t._v(" "),s("div",{staticClass:"form-row"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.code,expression:"form.code"}],attrs:{type:"text",placeholder:"请填写密码!"},domProps:{value:t.form.code},on:{input:function(a){a.target.composing||t.$set(t.form,"code",a.target.value)}}})])]),t._v(" "),s("li",{staticClass:"form-item"},[s("h2",{staticClass:"label"},[t._v("新密码")]),t._v(" "),s("div",{staticClass:"form-row"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],attrs:{type:"password",placeholder:"请填写密码!"},domProps:{value:t.form.password},on:{input:function(a){a.target.composing||t.$set(t.form,"password",a.target.value)}}})])]),t._v(" "),s("li",{staticClass:"form-item",staticStyle:{"margin-top":"50px"}},[s("button",{staticClass:"button primary",class:{loading:t.loading},staticStyle:{width:"100%"},on:{click:t.submit}},[s("span",{staticClass:"iconfont icon-loading"}),s("span",[t._v("注册")])])]),t._v(" "),s("li",{staticClass:"form-item"},[s("ul",{staticClass:"form-info row w"},[s("li",{staticClass:"col v-m"},[t._v("\n            已经有账号？前往"),s("router-link",{attrs:{to:"/login"}},[t._v("登录")])],1),t._v(" "),s("li",{staticClass:"col v-m t-r"},[s("router-link",{attrs:{to:"/remember"}},[t._v("忘记密码？")])],1)])])]):t._e(),t._v(" "),"手机找回"===t.type?s("ul",{staticClass:"form",staticStyle:{width:"50%","padding-top":"20px"}},[s("li",{staticClass:"form-item"},[s("h2",{staticClass:"label"},[t._v("手机")]),t._v(" "),s("div",{staticClass:"form-row"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{type:"text",placeholder:"请填写密码!"},domProps:{value:t.form.email},on:{input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}})])]),t._v(" "),s("li",{staticClass:"form-item"},[s("h2",{staticClass:"label"},[t._v("图片验证码")]),t._v(" "),s("div",{staticClass:"row w"},[s("div",{staticClass:"col v-m g-8"},[s("div",{staticClass:"form-row"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.captcha,expression:"form.captcha"}],attrs:{type:"text",placeholder:"请填写5位验证码！"},domProps:{value:t.form.captcha},on:{input:function(a){a.target.composing||t.$set(t.form,"captcha",a.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col v-m g-6",staticStyle:{"padding-left":"10px"}},[s("img",{staticClass:"v-m",staticStyle:{cursor:"pointer"},attrs:{src:t.captcha,alt:""},on:{click:t.getcaptcha}})]),t._v(" "),s("div",{staticClass:"col v-m g-10"},[t.send?t._e():s("Button",{attrs:{loading:t.sending,type:"success",disabled:t.form.captcha.length<5,size:"large"}},[t._v("发送邮件验证码")]),t._v(" "),t.send?s("Button",{attrs:{type:"ghost",disabled:"",size:"large"}},[t._v(t._s(t.time)+"s重新获取")]):t._e()],1)])]),t._v(" "),s("li",{staticClass:"form-item"},[s("h2",{staticClass:"label"},[t._v("邮箱验证码")]),t._v(" "),s("div",{staticClass:"form-row"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.code,expression:"form.code"}],attrs:{type:"text",placeholder:"请填写密码!"},domProps:{value:t.form.code},on:{input:function(a){a.target.composing||t.$set(t.form,"code",a.target.value)}}})])]),t._v(" "),s("li",{staticClass:"form-item"},[s("h2",{staticClass:"label"},[t._v("新密码")]),t._v(" "),s("div",{staticClass:"form-row"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],attrs:{type:"password",placeholder:"请填写密码!"},domProps:{value:t.form.password},on:{input:function(a){a.target.composing||t.$set(t.form,"password",a.target.value)}}})])]),t._v(" "),s("li",{staticClass:"form-item",staticStyle:{"margin-top":"50px"}},[s("button",{staticClass:"button primary",class:{loading:t.loading},staticStyle:{width:"100%"},on:{click:t.submit}},[s("span",{staticClass:"iconfont icon-loading"}),s("span",[t._v("注册")])])]),t._v(" "),s("li",{staticClass:"form-item"},[s("ul",{staticClass:"form-info row w"},[s("li",{staticClass:"col v-m"},[t._v("\n            已经有账号？前往"),s("router-link",{attrs:{to:"/login"}},[t._v("登录")])],1),t._v(" "),s("li",{staticClass:"col v-m t-r"},[s("router-link",{attrs:{to:"/remember"}},[t._v("忘记密码？")])],1)])])]):t._e()])])},staticRenderFns:[]},l=s("VU/8")(i,o,!1,null,null,null);a.default=l.exports}});
//# sourceMappingURL=25.234cc883eca4804c3c2e.js.map