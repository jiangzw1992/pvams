(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pStation"],{"01e4":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"p-station"},[a("div",{staticClass:"main-content-between"},[a("div",[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[e._v("资产管理")]),a("el-breadcrumb-item",[e._v("电站信息")])],1)],1),a("div",{staticClass:"main-content-end"},[e.getUserJurisdiction("AT04")?a("el-button",{attrs:{size:"small"},on:{click:function(t){e.isVisibleAdd=!0}}},[e._v("新建电站")]):e._e(),a("a",{attrs:{href:e.hostname+"/pvams/station/template/"+e.stationId}},[a("el-button",{style:{margin:"0 10px"},attrs:{size:"small"}},[e._v("导出模板")])],1),e.getUserJurisdiction("AT05")?a("el-upload",{style:{marginLeft:"10px"},attrs:{action:"/pvams/station/import/"+e.stationId,"on-success":function(t){return e.uploadSuccess(t)},"show-file-list":!1,"before-upload":function(t){return e.beforeAvatarUpload(t,1)}}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("导入信息")])],1):e._e()],1)]),e._l(e.mainList,function(t,s){return a("div",{directives:[{name:"show",rawName:"v-show",value:t,expression:"item"}],key:s,staticClass:"main"},[t?a("p",{staticClass:"title"},[e._v(e._s(t.title||""))]):e._e(),t?a("el-form",{ref:"form",refInFor:!0,attrs:{model:t,"label-width":"120px"}},[e._l(t.formList,function(t,s){return a("el-col",{key:s,staticClass:"col",attrs:{span:8}},[t.show?a("el-form-item",{staticClass:"item",attrs:{label:t.label+"："}},[a("span",{staticClass:"form-value"},[e._v(e._s(t.value||""))])]):e._e()],1)}),a("el-col",{staticClass:"col",attrs:{span:24}},["并网信息"===t.title?a("el-form-item",{attrs:{label:"接入点照片："}},[a("div",{staticClass:"imgs"},[e._l(t.imgs,function(e,t){return a("img",{key:t,attrs:{src:e.fileUrl,alt:""}})}),e.getUserJurisdiction("AT06")?a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/pvams/station/uploadAccessPointFile/"+e.stationId,"show-file-list":!1,"on-success":function(t){return e.uploadSuccess(t)},"before-upload":function(t){return e.beforeAvatarUpload(t,3)}}},[a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]):e._e()],2)]):e._e()],1)],2):e._e()],1)}),a("div",{staticClass:"table",style:{padding:"20px"}},[a("el-row",{style:{marginBottom:"20px"}},[a("el-col",{attrs:{span:12}},[a("p",{style:{fontWeight:"600"}},[e._v("电站资料")])]),a("el-col",{attrs:{span:12,align:"right"}},[e.getUserJurisdiction("AT07")?a("el-upload",{staticClass:"upload-demo",attrs:{action:"/pvams/station/uploadStationFile/"+e.stationId,"on-success":function(t){return e.uploadSuccess(t)},"before-upload":function(t){return e.beforeAvatarUpload(t,2)}}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("上传")])],1):e._e()],1)],1),a("el-table",{attrs:{"header-cell-class-name":"table-th",data:e.tableList,border:"",stripe:""}},[a("el-table-column",{attrs:{align:"center",width:"100px",label:"序号",type:"index"}}),a("el-table-column",{attrs:{align:"center",label:"文件名称",prop:"fileName"}}),a("el-table-column",{attrs:{align:"center",width:"200px",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"mini"}},[a("a",{attrs:{href:e.hostname+"/pvams/station/download/"+t.row.id}},[e._v("下载")])]),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.clickDelete(t.row)}}},[e._v("删除")])]}}])})],1)],1),a("div",{staticClass:"dialog"},[a("el-dialog",{attrs:{title:"新建电站",visible:e.isVisibleAdd,width:"40%"},on:{"update:visible":function(t){e.isVisibleAdd=t},close:e.clickClose}},[a("el-form",{ref:"addform",attrs:{model:e.addform,size:"small","label-width":"100px"}},[a("el-form-item",{attrs:{label:"电站名称：",prop:"stationName",rules:[{required:!0,message:"请输入电站名称"}]}},[a("el-input",{model:{value:e.addform.stationName,callback:function(t){e.$set(e.addform,"stationName",t)},expression:"addform.stationName"}})],1),a("el-form-item",{attrs:{label:"电站类型：",prop:"stationType",rules:[{required:!0,message:"请选择电站类型"}]}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.addform.stationType,callback:function(t){e.$set(e.addform,"stationType",t)},expression:"addform.stationType"}},e._l(e.stationTypeList,function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1)],1),a("div",{attrs:{slot:"footer",align:"center"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.isVisibleAdd=!1}}},[e._v("取 消")]),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.clickConfirmAdd("addform")}}},[e._v("确 定")])],1)],1)],1)],2)},l=[],i=a("cebc"),o=(a("ac6a"),a("96cf"),a("3b8d")),n=(a("6762"),a("2fdb"),a("f121")),r=a("bfe6"),c={mixins:[r["a"]],data:function(){return{isVisibleAdd:!1,mainList:[],tableList:[],stationId:"",pId:"",hostname:"",isPid:!1,addform:{stationName:""},stationTypeList:[{label:"地面电站",value:1},{label:"山地电站",value:2},{label:"农光电站",value:3},{label:"渔光电站",value:4},{label:"渔浮电站",value:5},{label:"分布式电站",value:6},{label:"扶贫电站",value:7},{label:"户用分布式电站",value:8}]}},created:function(){this.hostname=n["a"].HOST.pvamsDomain||"";var e=this.$store.state.getTreeId.treeId;e.id&&(e.id.includes("s")||e.id.includes("c"))&&(e.id.includes("s")&&e.pId?(this.isPid=!1,this.stationId=e.id.slice(1,e.id.length),this.pId=e.pId.slice(1,e.pId.length)):e.id.includes("c")&&e.id&&(this.isPid=!0,this.pId=e.id.slice(1,e.id.length)),e.pId&&this.stationId&&this.getDataList())},watch:{getStateData:function(e){var t=this.$store.state.getTreeId.treeId;t.id&&(t.id.includes("s")||t.id.includes("c"))&&(t.id.includes("s")&&t.pId?(this.stationId=t.id.slice(1,t.id.length),this.isPid=!1,this.pId=t.pId.slice(1,t.pId.length)):t.id.includes("c")&&t.id&&(this.isPid=!0,this.pId=t.id.slice(1,t.id.length)),this.getDataList())}},computed:{getStateData:function(){return this.$store.state.getTreeId.treeId}},methods:{getDataList:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,a,s,l,i,o,r,c,u,d,p,m,v,h,b,f,w,g,y;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loadingOpen(),t={stationId:this.stationId},e.next=4,this.axios("/pvams/station/getStationInfo",{params:t});case 4:a=e.sent,s=a.data.data,this.loadingClose(),s&&(l=s.baseInfo,i=void 0===l?{}:l,o=s.stationInfo,r=void 0===o?{}:o,c=s.buildInfo,u=void 0===c?{}:c,d=s.constructInfo,p=void 0===d?{}:d,m=s.superviseInfo,v=void 0===m?{}:m,h=s.girdInfo,b=void 0===h?{}:h,f=s.stationFileList,w=void 0===f?{}:f,this.tableList=w,i&&(i.title="电站位置信息",i.formList=[{label:"电站名称",value:i.stationName,show:!0},{label:"电站编号",value:i.stationId,show:!0},{label:"省份选择",value:i.province,show:!0},{label:"地级市选择",value:i.city,show:!0},{label:"区县级选择",value:i.county,show:!0},{label:"乡镇选择",value:"".concat(i.town).concat(i.village),show:!0},{label:"电站经度",value:i.longitude,show:!0},{label:"电站纬度",value:i.latitude,show:!0}]),r&&(r.title="电站基础信息",g=r.stationType,y=["1","2","3","4","5","6","7"].includes(g),r.formList=[{label:"电站类型",value:r.stationTypeName,show:!0},{label:"装机容量",value:r.installedCapacity,show:!0},{label:"并网容量",value:r.gridCapacity,show:!0},{label:"电站装机功率",value:r.installedPower,show:!0},{label:"并网时间",value:r.gridTime,show:!0},{label:"项目倾角",value:r.projectAngle,show:!0},{label:"阵列间距",value:r.arraySpace,show:!0},{label:"并网电压等级",value:r.gridPowerLevel,show:y},{label:"并网点数量",value:r.gridNum,show:y},{label:"电站容配比",value:r.scale,show:!0},{label:"送出线路长度",value:r.lineLength,show:["1","2","3","4","5"].includes(g)},{label:"路面类型",value:r.roadType,show:["1","2","3","4","5","7"].includes(g)},{label:"是否于耕种区毗邻",value:r.isCloseFramarea,show:["1","2","3","7"].includes(g)},{label:"是否封闭围栏",value:r.isCorral,show:["1","2","3","7"].includes(g)},{label:"是否有外来人员种植",value:r.isOutsidersPlant,show:["1","2","3","7"].includes(g)},{label:"是否有外来人员祭祖",value:r.isOutsidersAncestor,show:["1","2","3","7"].includes(g)},{label:"组件底端距地面距离",value:r.bottomLandDistance,show:["1","2","3","7"].includes(g)},{label:"水塘数量",value:r.pondNum,show:["4","5"].includes(g)},{label:"水塘平均深度",value:r.pondAvgDepth,show:["4","5"].includes(g)},{label:"浮体类型",value:r.floatType,show:["4"].includes(g)},{label:"固定类型",value:r.fixedType,show:["4"].includes(g)},{label:"组件底端距水面距离",value:r.bottomWaterDistance,show:["4","5"].includes(g)},{label:"是否有水产养殖",value:r.isAquatic,show:["4","5"].includes(g)},{label:"是否有动物养殖",value:r.isAnimal,show:["3"].includes(g)},{label:"屋顶类型",value:r.roofType,show:["6","8"].includes(g)},{label:"有/无采光带",value:r.isDaylight,show:["6","8"].includes(g)},{label:"上屋面条件",value:r.upCondition,show:["6","8"].includes(g)},{label:"屋顶数量",value:r.roofNum,show:["6","8"].includes(g)},{label:"分布点数量",value:r.distributionPointNum,show:["6","7","8"].includes(g)},{label:"清洗水源",value:r.clearWaterSource,show:["1","2","3","4","5"].includes(g)},{label:"清洗水源接入",value:r.clearWaterSourceAccess,show:["6","8"].includes(g)}]),u&&(u.title="施工信息",u.formList=[{label:"施工单位",value:u.buildCompany,show:!0},{label:"联系人",value:u.contact,show:!0},{label:"联系电话",value:u.phone,show:!0},{label:"单位地址",value:u.companyAddress,show:!0},{label:"备注",value:u.remark,show:!0}]),p&&(p.title="建设信息",p.formList=[{label:"建设单位",value:p.constructCompany,show:!0},{label:"联系人",value:p.contact,show:!0},{label:"联系电话",value:p.phone,show:!0},{label:"单位地址",value:p.companyAddress,show:!0},{label:"备注",value:p.remark,show:!0}]),v&&(v.title="监理信息",v.formList=[{label:"监理单位",value:v.superviseCompany,show:!0},{label:"联系人",value:v.contact,show:!0},{label:"联系电话",value:v.phone,show:!0},{label:"单位地址",value:v.companyAddress,show:!0},{label:"备注",value:v.remark,show:!0}]),b&&(b.title="并网信息",b.formList=[{label:"电网名称",value:b.girdName,show:!0},{label:"联系人",value:b.contact,show:!0},{label:"联系电话",value:b.phone,show:!0},{label:"电压等级",value:b.voltageLevel,show:!0},{label:"备注",value:b.remark,show:!0}]),b&&(b.accessPointFiles&&0!==b.accessPointFiles.length&&(b.accessPointFiles.forEach(function(e){e.fileUrl=n["a"].HOST.pvamsDomain+e.fileUrl}),b.imgs=b.accessPointFiles),b.type=1),this.mainList=[i,r,u,p,v,b]);case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),clickClose:function(){this.$refs.addform.resetFields()},clickConfirmAdd:function(e){var t=this;this.$refs[e].validate(function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(a){var s,l,o,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=7;break}return s=Object(i["a"])({},t.addform,{companyId:t.pId}),e.next=4,t.axios.post("/pvams/station/add",s);case 4:l=e.sent,o=l.data,200===o.code&&(t.$message({type:"success",message:"添加成功"}),t.isVisibleAdd=!1,n=Object(i["a"])({},o.data.data,{isPid:t.isPid}),t.$store.commit("getTreeId/treeUpdate",n));case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},uploadSuccess:function(e){200===e.code?(this.$message({type:"success",message:"上传成功"}),this.getDataList()):this.$message({type:"error",message:e.message})},beforeAvatarUpload:function(e,t){if(1===t){var a=e.size/1024/1024<20;return a||this.$message.error("上传文件大小不得超过20mb!"),a}if(2===t)return!0;if(3===t){var s=e.size/1024/1024<10,l="image/jpeg"===e.type||"image/png"===e.type;return l||this.$message.error("上传头像图片只能是 JPG或者Png 格式!"),s||this.$message.error("上传大小不得超过10mb!"),l&&s}},clickAddpStation:function(){},clickUpload:function(){},clickDelete:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){var a,s,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.id,e.next=3,this.axios("/pvams/station/deleteStationFile/".concat(a));case 3:s=e.sent,l=s.data,l&&200==l.code&&(this.$message({type:"success",message:"删除成功"}),this.getDataList());case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}},u=c,d=(a("f552"),a("e8d2"),a("2877")),p=Object(d["a"])(u,s,l,!1,null,"d8c7aeae",null);t["default"]=p.exports},"0908":function(e,t,a){},2720:function(e,t,a){},e8d2:function(e,t,a){"use strict";var s=a("0908"),l=a.n(s);l.a},f121:function(e,t,a){"use strict";var s={};a.r(s),a.d(s,"HOST",function(){return o}),a.d(s,"ENV",function(){return n});var l={};a.r(l),a.d(l,"HOST",function(){return r}),a.d(l,"ENV",function(){return c});var i,o={pvamsDomain:"http://148.70.2.3:8090"},n="sit",r={pvamsDomain:"http://101.37.67.138:8088"},c="prd";i="101.37.67.138"===window.location.hostname?l:s;t["a"]=i},f552:function(e,t,a){"use strict";var s=a("2720"),l=a.n(s);l.a}}]);
//# sourceMappingURL=pStation.a23693b2.js.map