(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["userAdsn"],{"11e9":function(e,t,r){var a=r("52a7"),n=r("4630"),i=r("6821"),s=r("6a99"),o=r("69a8"),l=r("c69a"),c=Object.getOwnPropertyDescriptor;t.f=r("9e1e")?c:function(e,t){if(e=i(e),t=s(t,!0),l)try{return c(e,t)}catch(r){}if(o(e,t))return n(!a.f.call(e,t),e[t])}},"1af6":function(e,t,r){var a=r("63b6");a(a.S,"Array",{isArray:r("9003")})},"20fd":function(e,t,r){"use strict";var a=r("d9f6"),n=r("aebd");e.exports=function(e,t,r){t in e?a.f(e,t,n(0,r)):e[t]=r}},"25ab":function(e,t,r){},"549b":function(e,t,r){"use strict";var a=r("d864"),n=r("63b6"),i=r("241e"),s=r("b0dc"),o=r("3702"),l=r("b447"),c=r("20fd"),d=r("7cd6");n(n.S+n.F*!r("4ee1")(function(e){Array.from(e)}),"Array",{from:function(e){var t,r,n,u,p=i(e),m="function"==typeof this?this:Array,f=arguments.length,h=f>1?arguments[1]:void 0,y=void 0!==h,b=0,v=d(p);if(y&&(h=a(h,f>2?arguments[2]:void 0,2)),void 0==v||m==Array&&o(v))for(t=l(p.length),r=new m(t);t>b;b++)c(r,b,y?h(p[b],b):p[b]);else for(u=v.call(p),r=new m;!(n=u.next()).done;b++)c(r,b,y?s(u,h,[n.value,b],!0):n.value);return r.length=b,r}})},"54a1":function(e,t,r){r("6c1c"),r("1654"),e.exports=r("95d5")},"59a1":function(e,t,r){},"5dbc":function(e,t,r){var a=r("d3f4"),n=r("8b97").set;e.exports=function(e,t,r){var i,s=t.constructor;return s!==r&&"function"==typeof s&&(i=s.prototype)!==r.prototype&&a(i)&&n&&n(e,i),e}},"774e":function(e,t,r){e.exports=r("d2d5")},"8b97":function(e,t,r){var a=r("d3f4"),n=r("cb7c"),i=function(e,t){if(n(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{a=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),a(e,[]),t=!(e instanceof Array)}catch(n){t=!0}return function(e,r){return i(e,r),t?e.__proto__=r:a(e,r),e}}({},!1):void 0),check:i}},9093:function(e,t,r){var a=r("ce10"),n=r("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return a(e,n)}},"95d5":function(e,t,r){var a=r("40c3"),n=r("5168")("iterator"),i=r("481b");e.exports=r("584a").isIterable=function(e){var t=Object(e);return void 0!==t[n]||"@@iterator"in t||i.hasOwnProperty(a(t))}},a745:function(e,t,r){e.exports=r("f410")},aa77:function(e,t,r){var a=r("5ca1"),n=r("be13"),i=r("79e5"),s=r("fdef"),o="["+s+"]",l="​",c=RegExp("^"+o+o+"*"),d=RegExp(o+o+"*$"),u=function(e,t,r){var n={},o=i(function(){return!!s[e]()||l[e]()!=l}),c=n[e]=o?t(p):s[e];r&&(n[r]=c),a(a.P+a.F*o,"String",n)},p=u.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(d,"")),e};e.exports=u},c5f6:function(e,t,r){"use strict";var a=r("7726"),n=r("69a8"),i=r("2d95"),s=r("5dbc"),o=r("6a99"),l=r("79e5"),c=r("9093").f,d=r("11e9").f,u=r("86cc").f,p=r("aa77").trim,m="Number",f=a[m],h=f,y=f.prototype,b=i(r("2aeb")(y))==m,v="trim"in String.prototype,g=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){t=v?t.trim():p(t,3);var r,a,n,i=t.charCodeAt(0);if(43===i||45===i){if(r=t.charCodeAt(2),88===r||120===r)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+t}for(var s,l=t.slice(2),c=0,d=l.length;c<d;c++)if(s=l.charCodeAt(c),s<48||s>n)return NaN;return parseInt(l,a)}}return+t};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof f&&(b?l(function(){y.valueOf.call(r)}):i(r)!=m)?s(new h(g(t)),r,f):g(t)};for(var C,w=r("9e1e")?c(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;w.length>x;x++)n(h,C=w[x])&&!n(f,C)&&u(f,C,d(h,C));f.prototype=y,y.constructor=f,r("2aba")(a,m,f)}},c8bb:function(e,t,r){e.exports=r("54a1")},d2d5:function(e,t,r){r("1654"),r("549b"),e.exports=r("584a").Array.from},e236:function(e,t,r){"use strict";var a=r("59a1"),n=r.n(a);n.a},ef03:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user-adsn"},[r("div",{staticClass:"main-content-between"},[r("div",[r("el-button",{attrs:{size:"small",type:""},on:{click:e.clickBatchDel}},[e._v("批量删除")])],1),r("div",[e.getUserJurisdiction("AT01")?r("el-button",{attrs:{type:"",size:"small"},on:{click:function(t){e.addCompanyForm={},e.isVisibleAddCompany=!0,e.isUpdateCompany=!1,e.isDisable=!1}}},[e._v("新建公司")]):e._e(),e.getUserJurisdiction("AT02")?r("el-button",{attrs:{type:"",size:"small"},on:{click:function(t){return e.clickUpdateCompany()}}},[e._v("编辑公司")]):e._e(),e.getUserJurisdiction("AT35")?r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.clickAddUser()}}},[e._v("新建用户")]):e._e()],1)]),r("div",{staticClass:"table",style:{marginTop:"30px"}},[r("el-table",{attrs:{"header-cell-class-name":"table-th",data:e.tableList,border:"",stripe:""},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"40px"}}),r("el-table-column",{attrs:{type:"index",align:"center",label:"序号",width:"60px"}}),r("el-table-column",{attrs:{align:"center",prop:"username",label:"用户名",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.clickUserUpdate(t.row)}}},[e._v(e._s(t.row.username||""))])]}}])}),e._l(e.columns,function(e,t){return r("el-table-column",{key:t,attrs:{align:"center",type:e.type,prop:e.prop,label:e.label,width:e.width}})}),r("el-table-column",{attrs:{align:"center",width:"100px",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.cilckDelete(t.row)}}},[e._v("删除")]),e.getUserJurisdiction("AT36")?r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.clickUserUpdate(t.row)}}},[e._v("编辑")]):e._e()]}}])})],2)],1),r("div",[r("el-pagination",{attrs:{align:"right",small:"","page-size":10,layout:"prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1),r("div",{staticClass:"dialog"},[r("el-dialog",{attrs:{title:e.isUpdateCompany?"编辑公司":"新建公司",visible:e.isVisibleAddCompany,width:"40%"},on:{"update:visible":function(t){e.isVisibleAddCompany=t},close:function(t){return e.handleClose("addCompanyForm")}}},[r("el-form",{ref:"addCompanyForm",attrs:{size:"small",model:e.addCompanyForm,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"公司名称：",prop:"companyName",rules:[{required:!0,message:"请输入公司名称"}]}},[r("el-input",{attrs:{disabled:e.isDisable},model:{value:e.addCompanyForm.companyName,callback:function(t){e.$set(e.addCompanyForm,"companyName",t)},expression:"addCompanyForm.companyName"}})],1),r("el-form-item",{attrs:{label:"公司地址：",prop:"provinceId",rules:[{required:!0,message:"请输入公司地址"}]}},[r("el-row",[r("el-col",{attrs:{span:8}},[r("el-select",{attrs:{disabled:e.isDisable,placeholder:"请选择省"},on:{change:e.changeProvince},model:{value:e.addCompanyForm.provinceId,callback:function(t){e.$set(e.addCompanyForm,"provinceId",t)},expression:"addCompanyForm.provinceId"}},e._l(e.provinceList,function(e,t){return r("el-option",{key:t,attrs:{label:e.provinceName,value:e.provinceId}})}),1)],1),r("el-col",{attrs:{span:8}},[r("el-select",{attrs:{disabled:e.isDisable,placeholder:"请选择市"},on:{change:e.changeCity},model:{value:e.addCompanyForm.cityId,callback:function(t){e.$set(e.addCompanyForm,"cityId",t)},expression:"addCompanyForm.cityId"}},e._l(e.cityList,function(e,t){return r("el-option",{key:t,attrs:{label:e.cityName,value:e.cityId}})}),1)],1),r("el-col",{attrs:{span:8}},[r("el-select",{attrs:{disabled:e.isDisable,placeholder:"请选择乡镇/区"},model:{value:e.addCompanyForm.countyId,callback:function(t){e.$set(e.addCompanyForm,"countyId",t)},expression:"addCompanyForm.countyId"}},e._l(e.countyList,function(e,t){return r("el-option",{key:t,attrs:{label:e.countyName,value:e.countyId}})}),1)],1)],1)],1),r("el-form-item",{attrs:{label:"街道地址：",prop:"townAddress",rules:[{required:!0,message:"请输入街道地址"}]}},[r("el-input",{attrs:{disabled:e.isDisable,placeholder:"请输入详细地址"},model:{value:e.addCompanyForm.townAddress,callback:function(t){e.$set(e.addCompanyForm,"townAddress",t)},expression:"addCompanyForm.townAddress"}})],1),r("el-form-item",{attrs:{label:"联系人：",prop:"contact",rules:[{required:!0,message:"请输入联系人"}]}},[r("el-input",{attrs:{disabled:e.isDisable,placeholder:"请输入联系人"},model:{value:e.addCompanyForm.contact,callback:function(t){e.$set(e.addCompanyForm,"contact",t)},expression:"addCompanyForm.contact"}})],1),r("el-form-item",{attrs:{label:"联系电话：",prop:"phone",rules:[{required:!0,message:"请输入联系电话"}]}},[r("el-input",{attrs:{disabled:e.isDisable,placeholder:"请输入联系电话"},model:{value:e.addCompanyForm.phone,callback:function(t){e.$set(e.addCompanyForm,"phone",t)},expression:"addCompanyForm.phone"}})],1),r("el-form-item",{attrs:{label:"营业执照：",prop:"license",rules:[{required:!0,message:"请上传营业执照"}]}},[r("div",{staticClass:"img"},[r("img",{attrs:{src:e.hostDomain+e.addCompanyForm.license,alt:""}}),r("el-upload",{staticClass:"avatar-uploader",attrs:{disabled:e.isDisable,action:e.actionUrl,"show-file-list":!1,"on-success":function(t){return e.uploadSuccess(t)},"before-upload":function(t){return e.beforeAvatarUpload(t,3)}}},[r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)]),r("el-form-item",{attrs:{label:"系统授权：",prop:"grantAuthType",rules:[{required:!0,message:"请选择系统授权"}]}},[r("el-radio-group",{model:{value:e.addCompanyForm.grantAuthType,callback:function(t){e.$set(e.addCompanyForm,"grantAuthType",t)},expression:"addCompanyForm.grantAuthType"}},[r("el-radio",{attrs:{disabled:e.isDisable,label:0}},[e._v("限制使用")]),r("el-radio",{attrs:{disabled:e.isDisable,label:1}},[e._v("无限制使用")])],1)],1)],1),r("div",{attrs:{slot:"footer",align:"center"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:function(t){e.isVisibleAddCompany=!1}}},[e._v("取 消")]),r("el-button",{attrs:{size:"small",disabled:e.isDisable,type:"primary"},on:{click:function(t){return e.confirmAddCompany("addCompanyForm")}}},[e._v("确 定")]),e.isUpdateCompany?r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){e.isDisable=!1}}},[e._v("编辑")]):e._e()],1)],1),r("el-dialog",{attrs:{title:e.isUserUpdate?"编辑用户":"新建用戶",visible:e.isVisibleAddUser,width:"40%"},on:{"update:visible":function(t){e.isVisibleAddUser=t},close:function(t){return e.handleClose("addUserform")}}},[r("el-form",{ref:"addUserform",attrs:{model:e.addUserform,size:"small","label-width":"100px"}},[r("el-form-item",{attrs:{label:"用戶名：",prop:"username",rules:[{required:!0,message:"請輸入用戶名"}]}},[r("el-input",{model:{value:e.addUserform.username,callback:function(t){e.$set(e.addUserform,"username",t)},expression:"addUserform.username"}})],1),r("el-form-item",{attrs:{label:"姓名：",prop:"realname",rules:[{required:!0,message:"姓名"}]}},[r("el-input",{model:{value:e.addUserform.realname,callback:function(t){e.$set(e.addUserform,"realname",t)},expression:"addUserform.realname"}})],1),r("el-form-item",{attrs:{label:"联系方式：",prop:"phone",rules:[{required:!0,message:"請輸入联系方式"}]}},[r("el-input",{model:{value:e.addUserform.phone,callback:function(t){e.$set(e.addUserform,"phone",t)},expression:"addUserform.phone"}})],1),r("el-form-item",{attrs:{label:"邮箱：",prop:"mail",rules:[{required:!0,message:"請輸入邮箱"}]}},[r("el-input",{model:{value:e.addUserform.mail,callback:function(t){e.$set(e.addUserform,"mail",t)},expression:"addUserform.mail"}})],1),r("el-form-item",{attrs:{label:"角色：",prop:"role",rules:[{required:!0,message:"请选择角色"}]}},[r("el-select",{attrs:{placeholder:"请选择角色"},model:{value:e.addUserform.role,callback:function(t){e.$set(e.addUserform,"role",t)},expression:"addUserform.role"}},[e.getUserJurisdiction("AT03")?r("el-option",{attrs:{label:"超级管理员",value:1}}):e._e(),e._l(e.userList,function(t,a){return t.isNoShow?e._e():r("el-option",{key:a,attrs:{label:t.label,value:t.value}})})],2)],1),r("el-form-item",{attrs:{label:e.isUserUpdate?"新密码：":"密码：",prop:"password",rules:[{required:!0,message:"请输入密码"}]}},[r("el-input",{model:{value:e.addUserform.password,callback:function(t){e.$set(e.addUserform,"password",t)},expression:"addUserform.password"}})],1)],1),r("div",{attrs:{slot:"footer",align:"center"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:function(t){e.isVisibleAddUser=!1}}},[e._v("取 消")]),r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.confirmAddUser("addUserform")}}},[e._v("确 定")])],1)],1)],1)])},n=[],i=r("cebc"),s=r("a745"),o=r.n(s);function l(e){if(o()(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}var c=r("774e"),d=r.n(c),u=r("c8bb"),p=r.n(u);function m(e){if(p()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return d()(e)}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(e){return l(e)||m(e)||f()}r("c5f6"),r("ac6a"),r("96cf");var y=r("3b8d"),b=(r("6762"),r("2fdb"),r("f121")),v=r("bfe6"),g={mixins:[v["a"]],data:function(){return{tableList:[],isVisibleAddCompany:!1,isVisibleAddUser:!1,isUpdateCompany:!1,isDisable:!0,columns:[{label:"姓名",width:"",prop:"realname",type:""},{label:"角色",width:"",type:"",prop:"roleName"},{label:"联系电话",width:"",type:"",prop:"phone"},{label:"邮箱",width:"",type:"",prop:"mail"}],actionUrl:"/pvams/upload",addCompanyForm:{grantAuthType:0},isEditUser:!1,total:0,hostDomain:"",addUserform:{},isUserUpdate:!1,unitId:"",pId:"",userType:"",provinceList:[],cityList:[],countyList:[],userList:[{label:"超级管理员",value:1,isNoShow:!0},{label:"企业管理员",value:2},{label:"企业运维人员",value:3},{label:"企业运维人员",value:4},{label:"电站管理员",value:5},{label:"电站运维人员",value:6},{label:"电站普通用户",value:7}]}},created:function(){this.hostDomain="".concat(b["a"].HOST.pvamsDomain,"/");var e=this.$store.state.getTreeId.treeId;if(this.userType=localStorage.getItem("userType"),this.getProvince(),e.id){var t=0==this.userType?e.id.includes("s")||e.id.includes("c"):e.id.includes("s");this.pId=e.id.includes("s")?e.pId.slice(1,e.id.length):e.id.includes("c")?e.id.slice(1,e.id.length):"",t&&(this.unitId=e.id.slice(1,e.id.length),this.getDataList(1))}},watch:{getStateData:function(e){var t=this.$store.state.getTreeId.treeId;if(t.id){var r=0==this.userType?t.id.includes("s")||t.id.includes("c"):t.id.includes("s");this.pId=t.id.includes("s")?t.pId.slice(1,t.id.length):t.id.includes("c")?t.id.slice(1,t.id.length):"",r&&(this.unitId=t.id.slice(1,t.id.length),this.getDataList(1))}}},computed:{getStateData:function(){return this.$store.state.getTreeId.treeId}},methods:{getDataList:function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(t){var r,a,n,i,s,o,l,c=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loadingOpen(),r={userType:this.userType,unitId:this.unitId,pageNo:t,pageSize:20},e.next=4,this.axios("/pvams/user/query",{params:r});case 4:a=e.sent,n=a.data.data,i=n.count,s=void 0===i?"":i,o=n.userList,l=void 0===o?[]:o,this.loadingClose(),this.total=s,l.forEach(function(e){if(e.role){var t=c.userList.filter(function(t){return t.value===e.role});e.roleName=t&&0!==t.length&&t[0].label}}),this.tableList=l;case 14:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),getCompanyList:function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(){var t,r,a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t="/pvams/unit/query/".concat(this.pId),e.next=3,this.axios(t);case 3:return r=e.sent,a=r.data.data.company,n=void 0===a?{}:a,e.abrupt("return",n);case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),clickUpdateCompany:function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyList();case 2:if(t=e.sent,!t.provinceId){e.next=9;break}return e.next=6,this.changeProvince(t.provinceId);case 6:if(!t.cityId){e.next=9;break}return e.next=9,this.changeCity(t.cityId);case 9:this.addCompanyForm=t,this.addCompanyForm.provinceId=Number(t.provinceId)||"",this.addCompanyForm.cityId=Number(t.cityId)||"",this.addCompanyForm.countyId=Number(t.countyId)||"",this.isVisibleAddCompany=!0,this.isUpdateCompany=!0,this.isDisable=!0;case 16:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getProvince:function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(){var t,r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.axios("/pvams/getProvince");case 2:t=e.sent,r=t.data.data.data,a=void 0===r?[]:r,this.provinceList=a;case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),changeProvince:function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(t){var r,a,n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.addCompanyForm.cityId="",this.$set(this.addCompanyForm,"countyId",""),r="/pvams/getCity/".concat(t),e.next=5,this.axios(r);case 5:a=e.sent,n=a.data.data.data,i=void 0===n?[]:n,this.cityList=i,this.countyList=[];case 10:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),changeCity:function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(t){var r,a,n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.$set(this.addCompanyForm,"countyId",""),r="/pvams/getCounty/".concat(t),e.next=4,this.axios(r);case 4:a=e.sent,n=a.data.data.data,i=void 0===n?[]:n,this.countyList=h(i);case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),clickAddUser:function(){this.addUserform={},this.isVisibleAddUser=!0,this.isUserUpdate=!1},confirmAddCompany:function(e){var t=this;this.$refs[e].validate(function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(r){var a,n,i,s,o,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.isUpdateCompany?"/pvams/unit/update":"/pvams/unit/add",!r){e.next=11;break}return e.next=4,t.axios.post(a,t.addCompanyForm);case 4:n=e.sent,i=n.data,s=i.code,o=void 0===s?"":s,l=i.data,void 0===l?{}:l,200===o&&(t.$message({type:"success",message:t.isUpdateCompany?"编辑成功":"添加成功"}),t.isVisibleAddCompany=!1,location.reload());case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},confirmAddUser:function(e){var t=this;this.$refs[e].validate(function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(r){var a,n,s,o,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=9;break}return a=Object(i["a"])({},t.addUserform,{userType:t.userType,unitId:t.unitId}),n=t.isUserUpdate?"/pvams/user/update":"/pvams/user/add",e.next=5,t.axios.post(n,a);case 5:s=e.sent,o=s.data.code,l=void 0===o?"":o,200===l&&(t.getDataList(1),t.isVisibleAddUser=!1);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},clickUserUpdate:function(e){this.addUserform=Object(i["a"])({},e),this.isUserUpdate=!0,this.isVisibleAddUser=!0},cilckDelete:function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(t,r){var a,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a={idList:r?t:[t.userId],unitId:this.unitId,userType:this.userType},this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(t){var r,i,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.axios.post("/pvams/user/delete",a);case 2:r=e.sent,i=r.data.code,s=void 0===i?"":i,200===s&&(n.$message({type:"success",message:"操作成功"}),n.getDataList(1));case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}},e,this)}));function t(t,r){return e.apply(this,arguments)}return t}(),handleSelectionChange:function(e){this.selectionIds=e.map(function(e){return e.userId})},clickBatchDel:function(){var e=Object(y["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.cilckDelete(this.selectionIds,1);case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleCurrentChange:function(e){this.getDataList(e)},handleClose:function(e){"addCompanyForm"===e&&(this.addCompanyForm.cityId="",this.addCompanyForm.countyId=""),this.$refs[e].resetFields(),this.addCompanyForm={}},uploadSuccess:function(e){if(200===e.code){this.$message({type:"success",message:"上传成功"});var t=e.data;this.$set(this.addCompanyForm,"license",t)}else this.$message({type:"error",message:e.message})},beforeAvatarUpload:function(e,t){if(1===t){var r=e.size/1024/1024<20;return r||this.$message.error("上传文件大小不得超过20mb!"),r}if(2===t)return!0;if(3===t){var a=e.size/1024/1024<10,n="image/jpeg"===e.type||"image/png"===e.type;return n||this.$message.error("上传头像图片只能是 JPG或者Png 格式!"),a||this.$message.error("上传大小不得超过10mb!"),n&&a}}}},C=g,w=(r("e236"),r("f5ea"),r("2877")),x=Object(w["a"])(C,a,n,!1,null,"1537c6cd",null);t["default"]=x.exports},f121:function(e,t,r){"use strict";var a={};r.r(a),r.d(a,"HOST",function(){return s}),r.d(a,"ENV",function(){return o});var n={};r.r(n),r.d(n,"HOST",function(){return l}),r.d(n,"ENV",function(){return c});var i,s={pvamsDomain:"http://148.70.2.3:8090"},o="sit",l={pvamsDomain:"http://101.37.67.138:8088"},c="prd";i="101.37.67.138"===window.location.hostname?n:a;t["a"]=i},f410:function(e,t,r){r("1af6"),e.exports=r("584a").Array.isArray},f5ea:function(e,t,r){"use strict";var a=r("25ab"),n=r.n(a);n.a},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=userAdsn.b43b4a0a.js.map