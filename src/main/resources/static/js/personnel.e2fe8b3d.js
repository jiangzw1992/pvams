(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["personnel"],{1222:function(t,e,i){},"4c63":function(t,e,i){"use strict";var a=i("923f"),s=i.n(a);s.a},"84cd":function(t,e,i){"use strict";var a=i("1222"),s=i.n(a);s.a},"923f":function(t,e,i){},c22e:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"personnel"},[i("el-row",[i("el-col",{attrs:{span:12}},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",[t._v("资产管理")]),i("el-breadcrumb-item",[t._v("人员信息")])],1)],1),i("el-col",{attrs:{span:12,align:"right"}},[i("el-button",{attrs:{size:"small"},on:{click:t.clickAdd}},[t._v("新建人员")])],1)],1),i("div",{staticClass:"main"},[i("el-row",{attrs:{gutter:20}},t._l(t.userDataList,function(e,a){return i("el-col",{key:a,staticClass:"col",attrs:{span:8}},[i("div",{staticClass:"list"},[i("div",{staticClass:"info"},[i("div",{staticClass:"faic",on:{click:function(i){return t.clickShowImg(e.userPic)}}},[i("img",{attrs:{src:e.userPic||"../../assets/u3571.svg",alt:""}})]),i("div",{staticClass:"userInfo"},[i("p",{staticClass:"name"},[t._v(t._s(e.realName||""))]),i("p",{style:{marginBottom:"10px"}},[t._v("身份证号： "),i("span",[t._v(t._s(e.idCard||""))])]),i("p",[t._v("资质："),i("span",{style:{color:"#8D8DFF",cursor:"pointer"},on:{click:function(i){return t.clickShowImg(e.certificatePic)}}},[t._v(t._s(e.credential||""))])])]),i("div",{staticClass:"btns"},[i("el-button",{attrs:{size:"mini",icon:"el-icon-edit",type:""},on:{click:function(i){return t.clickEdit(e)}}}),i("el-button",{style:{marginLeft:"2px"},attrs:{size:"mini",icon:"el-icon-delete",type:""},on:{click:function(i){return t.clickDelete(e)}}})],1)]),i("div",{staticClass:"footer"},[i("span",[t._v(t._s(e.maintainCompany||""))]),i("span",[t._v(t._s(e.position||""))])])])])}),1)],1),i("div",{staticClass:"dialog"},[i("el-dialog",{attrs:{title:"人员信息新增",visible:t.isVisibleAdd,width:"40%"},on:{close:function(e){return t.dialogClose("addForm")},"update:visible":function(e){t.isVisibleAdd=e}}},[i("div",{staticClass:"dialog-main"},[i("el-form",{ref:"addForm",attrs:{model:t.addForm,size:"small","label-width":"120px"}},[i("el-form-item",{attrs:{label:"姓名：",prop:"realName",rules:[{required:!0,message:"请输入姓名"}]}},[i("el-input",{model:{value:t.addForm.realName,callback:function(e){t.$set(t.addForm,"realName",e)},expression:"addForm.realName "}})],1),i("el-form-item",{attrs:{label:"运营公司名称：",prop:"maintainCompany",rules:[{required:!0,message:"请输入运营公司名称"}]}},[i("el-input",{model:{value:t.addForm.maintainCompany,callback:function(e){t.$set(t.addForm,"maintainCompany",e)},expression:"addForm.maintainCompany "}})],1),i("el-form-item",{attrs:{label:"职位：",prop:"position",rules:[{required:!0,message:"请输入职位"}]}},[i("el-input",{model:{value:t.addForm.position,callback:function(e){t.$set(t.addForm,"position",e)},expression:"addForm.position "}})],1),i("el-form-item",{attrs:{label:"身份证号：",prop:"idCard",rules:[{required:!0,message:"请输入身份证号"},{pattern:/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/,message:"请输入正确得身份证号"}]}},[i("el-input",{model:{value:t.addForm.idCard,callback:function(e){t.$set(t.addForm,"idCard",e)},expression:"addForm.idCard "}})],1),i("el-form-item",{attrs:{label:"资质：",prop:"credential",rules:[{required:!0,message:"请输入资质"}]}},[i("el-input",{model:{value:t.addForm.credential,callback:function(e){t.$set(t.addForm,"credential",e)},expression:"addForm.credential"}})],1),i("el-form-item",{attrs:{label:"证书：",prop:"certificatePic",rules:[{required:!0,message:"请上传证书"}]}},[i("div",{staticClass:"update-logo"},[i("div",{staticClass:"logos round-logo"},[i("el-upload",{attrs:{action:t.actionUrl,"on-success":function(e){return t.uploadSuccess(e,"certificatePic")},"before-upload":t.beforeAvatarUpload}},[i("i",{staticClass:"el-icon-plus"})]),i("div",{staticClass:"logo-show-img"},[i("img",{attrs:{src:t.addForm.certificatePic,alt:""}}),i("div",{staticClass:"cover-bcg"})]),i("div",{staticClass:"pic-update"},[i("p",[i("span")]),i("p",[i("span",[t._v("图片格式支持JPG、PNG")])])])],1)])]),i("el-form-item",{attrs:{label:"头像：",prop:"userPic",rules:[{required:!0,message:"请上传头像"}]}},[i("div",{staticClass:"update-logo"},[i("div",{staticClass:"logos round-logo"},[i("el-upload",{attrs:{action:t.actionUrl,"on-success":function(e){return t.uploadSuccess(e,"userPic")},"before-upload":t.beforeAvatarUpload}},[i("i",{staticClass:"el-icon-plus"})]),i("div",{staticClass:"logo-show-img"},[i("img",{attrs:{src:t.addForm.userPic,alt:""}}),i("div",{staticClass:"cover-bcg"})]),i("div",{staticClass:"pic-update"},[i("p",[i("span")]),i("p",[i("span",[t._v("图片格式支持JPG、PNG")])])])],1)])])],1)],1),i("div",{attrs:{slot:"footer",align:"center"},slot:"footer"},[i("el-button",{on:{click:function(e){return t.clickCancel("addForm")}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.clickAddper("addForm")}}},[t._v("确 定")])],1)]),i("el-dialog",{attrs:{title:"",visible:t.isVisibleImg,width:"40%"},on:{"update:visible":function(e){t.isVisibleImg=e}}},[i("img",{style:{display:"block",width:"100%",height:"100%"},attrs:{src:t.showImg||"",alt:""}})])],1)],1)},s=[],r=(i("ac6a"),i("cebc")),n=(i("96cf"),i("3b8d")),o=(i("6762"),i("2fdb"),i("f121")),c=i("bfe6"),l={mixins:[c["a"]],data:function(){return{isVisibleAdd:!1,isVisibleImg:!1,userDataList:[],actionUrl:"/pvams/upload",showImg:"",stationId:"",hostname:"",addForm:{realName:"",maintainCompany:"",position:"",idCard:"",credential:"",certificatePic:"",userPic:""}}},created:function(){this.hostname=o["a"].HOST.pvamsDomain||"";var t=this.$store.state.getTreeId.treeId;t.id&&t.id.includes("s")&&(this.stationId=t.id.slice(1,t.id.length),this.stationId&&this.getDataList())},watch:{getStateData:function(t){var e=this.$store.state.getTreeId.treeId;e.id&&e.id.includes("s")&&(this.stationId=e.id.slice(1,e.id.length),e.pId&&(this.pId=e.pId.slice(1,e.pId.length)),this.getDataList())}},computed:{getStateData:function(){return this.$store.state.getTreeId.treeId}},methods:{clickAdd:function(){this.isVisibleAdd=!0,this.addForm={}},clickAddper:function(t){var e=this;this.$refs[t].validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(i){var a,s,n,o,c,l,d,u,m,p,f;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!i){t.next=11;break}return a=e.addForm,s=a.certificatePic,n=void 0===s?"":s,o=a.userPic,c=void 0===o?"":o,l=n.slice(n.indexOf("/file"),n.length),d=c.slice(c.indexOf("/file"),c.length),u=Object(r["a"])({},e.addForm,{stationId:e.stationId||1,certificatePic:l,userPic:d}),m=e.addForm.memberId?"/pvams/member/update":"/pvams/member/add",t.next=8,e.axios.post(m,u);case 8:p=t.sent,f=p.data,200===f.code&&(e.getDataList(),e.isVisibleAdd=!1);case 11:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())},clickDelete:function(t){var e=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(n["a"])(regeneratorRuntime.mark(function i(){var a,s,r,n,o;return regeneratorRuntime.wrap(function(i){while(1)switch(i.prev=i.next){case 0:return a=t.memberId,s=void 0===a?"":a,r={memberId:s},i.next=4,e.axios("/pvams/member/delete",{params:r});case 4:n=i.sent,o=n.data.code,200===o&&(e.$message({type:"success",message:"删除成功"}),e.getDataList());case 7:case"end":return i.stop()}},i)})))},dialogClose:function(t){var e=this;this.addForm={},this.$nextTick(function(){e.$refs[t].resetFields()})},clickCancel:function(t){this.isVisibleAdd=!1},clickEdit:function(t){this.isVisibleAdd=!0,this.addForm=Object(r["a"])({},t)},clickShowImg:function(t){var e=0===t.indexOf("http://")?t:"".concat(this.hostname).concat(t);this.isVisibleImg=!0,this.showImg=e||""},uploadSuccess:function(t,e){this.$set(this.addForm,e,o["a"].HOST.pvamsDomain+t.data)},beforeAvatarUpload:function(t){var e=t.size/1024/1024<10;return e||this.$message.error("上传大小不得超过10mb!"),e},getDataList:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,i,a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loadingOpen(),e={stationId:this.stationId||1},t.next=4,this.axios("/pvams/member/query",{params:e});case 4:i=t.sent,a=i.data.data.list,s=void 0===a?[]:a,this.loadingClose(),s&&(s.forEach(function(t){t.userPic&&(t.userPic=o["a"].HOST.pvamsDomain+t.userPic),t.certificatePic&&(t.certificatePic=o["a"].HOST.pvamsDomain+t.certificatePic)}),this.userDataList=s);case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},d=l,u=(i("4c63"),i("84cd"),i("2877")),m=Object(u["a"])(d,a,s,!1,null,"43f61696",null);e["default"]=m.exports},f121:function(t,e,i){"use strict";var a={};i.r(a),i.d(a,"HOST",function(){return n}),i.d(a,"ENV",function(){return o});var s={};i.r(s),i.d(s,"HOST",function(){return c}),i.d(s,"ENV",function(){return l});var r,n={pvamsDomain:"http://101.37.67.138:8088"},o="sit",c={pvamsDomain:"http://101.37.67.138:8088"},l="prd";r="101.37.67.138"===window.location.hostname?s:a;e["a"]=r}}]);
//# sourceMappingURL=personnel.e2fe8b3d.js.map