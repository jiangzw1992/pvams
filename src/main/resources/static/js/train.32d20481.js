(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["train"],{"5f8d":function(e,t,r){},7320:function(e,t,r){"use strict";var a=r("5f8d"),i=r.n(a);i.a},"7d81":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"train"},[r("div",{staticClass:"title"},[r("h1",{style:{fontSize:"20px"}},[e._v(e._s(e.preMnTitle))]),r("div",{staticClass:"search-edit"},[r("el-date-picker",{attrs:{size:"small",type:"year","value-format":"yyyy",placeholder:"选择日期时间"},on:{change:e.changeTime},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}}),e.getUserJurisdiction("AT30")?r("el-button",{style:{marginLeft:"10px"},attrs:{size:"small",type:"primary",icon:"el-icon-plus"},on:{click:e.clickAdd}}):e._e()],1)]),r("div",{staticClass:"table"},[r("el-table",{attrs:{data:e.dataList,border:"",stripe:"","header-cell-class-name":"table-th"}},[r("el-table-column",{attrs:{align:"center",prop:"title",label:"标题"}}),r("el-table-column",{attrs:{align:"center",prop:"content",label:"内容"}}),e._l(e.columns,function(t,a){return r("el-table-column",{key:a,attrs:{label:String(t.label),align:"center"}},e._l(t.children,function(a,i){return r("el-table-column",{key:i,attrs:{align:"center",label:String(a.week),width:String(t.label).includes("/")?"80px":"40px",prop:t.prop},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.trainPlanDetailList&&t.row.trainPlanDetailList[a.week-1]&&t.row.trainPlanDetailList[a.week-1].trainId?r("span",{staticClass:"record",style:{backgroundColor:0===t.row.trainPlanDetailList[a.week-1].status?"#999999":1===t.row.trainPlanDetailList[a.week-1].status?"#339933":2===t.row.trainPlanDetailList[a.week-1].status?"#0000FF":"#FFF"},on:{click:function(r){return e.clickShowRecord(t.row.trainPlanDetailList[a.week-1],a.week-1)}}},[e._v("\n              "+e._s(t.row.trainPlanDetailList[a.week-1].trainId?t.row.trainPlanDetailList[a.week-1].deviceType:"")+"\n            ")]):e._e()]}}],null,!0)})}),1)}),r("el-table-column",{attrs:{fixed:"right",align:"center",width:"140px",prop:"content",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.getUserJurisdiction("AT31")?r("el-button",{attrs:{size:"small",type:"",icon:"el-icon-edit-outline"},on:{click:function(r){return e.clickEdit(t.row)}}}):e._e(),e.getUserJurisdiction("AT32")?r("el-button",{attrs:{size:"small",type:"warning",icon:"el-icon-delete"},on:{click:function(r){return e.clickDelete(t.row)}}}):e._e()]}}])})],2)],1),r("el-dialog",{attrs:{title:"培训记录表",visible:e.isRecordDialog,width:"40%"},on:{close:function(t){return e.close("recordform")},"update:visible":function(t){e.isRecordDialog=t}}},[r("div",{staticClass:"main"},[r("el-form",{ref:"recordform",attrs:{model:e.recordform,size:"small","label-width":"100px"}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}}),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"培训人："}},[r("el-input",{attrs:{disabled:"",placeholder:""},model:{value:e.recordform.submiter,callback:function(t){e.$set(e.recordform,"submiter",t)},expression:"recordform.submiter"}})],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"计划时间："}},[r("el-input",{attrs:{disabled:"",placeholder:""},model:{value:e.recordform.firstDay,callback:function(t){e.$set(e.recordform,"firstDay",t)},expression:"recordform.firstDay"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"执行时间："}},[r("el-input",{attrs:{disabled:"",placeholder:""},model:{value:e.recordform.confirmTime,callback:function(t){e.$set(e.recordform,"confirmTime",t)},expression:"recordform.confirmTime"}})],1)],1)],1),r("el-form-item",{attrs:{label:"培训内容：",prop:"content",rules:[{required:!0,message:"请输入培训内容"}]}},[r("el-input",{attrs:{disabled:0!==e.recordform.status,type:"textarea",rows:2,placeholder:"请输入培训内容"},model:{value:e.recordform.content,callback:function(t){e.$set(e.recordform,"content",t)},expression:"recordform.content"}})],1),r("el-form-item",{attrs:{label:"培训过程：",prop:"flow",rules:[{required:!0,message:"请输入培训过程"}]}},[r("el-input",{attrs:{disabled:0!==e.recordform.status,type:"textarea",rows:2,placeholder:"请输入培训过程"},model:{value:e.recordform.flow,callback:function(t){e.$set(e.recordform,"flow",t)},expression:"recordform.flow"}})],1),r("el-form-item",{attrs:{label:"培训结果：",prop:"result",rules:[{required:!0,message:"请输入培训结果"}]}},[r("el-input",{attrs:{disabled:0!==e.recordform.status,type:"textarea",rows:2,placeholder:"请输入培训结果"},model:{value:e.recordform.result,callback:function(t){e.$set(e.recordform,"result",t)},expression:"recordform.result"}})],1),r("el-form-item",{attrs:{label:"培训资料："}},[r("div",{staticClass:"img"},[e._l(e.recordform.fileList,function(t,a){return r("img",{key:a,attrs:{src:t?e.hostDomain+t:"",alt:""}})}),2!==e.recordform.status?r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.actionUrl,"show-file-list":!1,"on-success":function(t){return e.uploadSuccess(t)},"before-upload":function(t){return e.beforeAvatarUpload(t,3)}}},[r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]):e._e()],2)]),2==e.recordform.status?r("el-form-item",{attrs:{label:"确认人："}},[r("el-input",{style:{width:"50%"},attrs:{disabled:"",placeholder:""},model:{value:e.recordform.confirmer,callback:function(t){e.$set(e.recordform,"confirmer",t)},expression:"recordform.confirmer"}})],1):e._e()],1)],1),r("div",{attrs:{slot:"footer",align:"center"},slot:"footer"},[1===e.recordform.status&&e.getUserJurisdiction("AT29")||0==e.recordform.status?r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.clickRecordConfirm("recordform")}}},[e._v(e._s(0==e.recordform.status?"确认并提交":"确认"))]):e._e()],1)]),r("el-dialog",{attrs:{title:e.isEdit?"编辑培训内容":"新建培训内容",visible:e.isShowAddMaintain,width:"40%"},on:{close:function(t){return e.close("addform")},"update:visible":function(t){e.isShowAddMaintain=t}}},[r("div",{staticClass:"main"},[r("el-form",{ref:"addform",attrs:{model:e.addform,size:"small",align:"left","label-width":"120px"}},[r("el-form-item",{attrs:{label:"标题：",prop:"title",rules:[{required:!0,message:"请输入标题"}]}},[r("el-input",{model:{value:e.addform.title,callback:function(t){e.$set(e.addform,"title",t)},expression:"addform.title"}})],1),r("el-form-item",{attrs:{label:"培训内容：",prop:"content",rules:[{required:!0,message:"请输入培训内容"}]}},[r("el-input",{attrs:{type:"textarea",rows:2},model:{value:e.addform.content,callback:function(t){e.$set(e.addform,"content",t)},expression:"addform.content"}})],1),r("el-divider",{staticStyle:{height:"3px"}}),r("el-form-item",{attrs:{label:"安全培训周：",prop:"week",rules:[{required:!0,message:"请选择安全培训周"}]}},[r("el-select",{style:{width:"100%"},attrs:{multiple:"",placeholder:"请选择"},model:{value:e.addform.week,callback:function(t){e.$set(e.addform,"week",t)},expression:"addform.week"}},e._l(e.weekDataList,function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1)],1)],1),r("div",{attrs:{slot:"footer",align:"center"},slot:"footer"},[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.clickAddMaintain("addform")}}},[e._v("更新信息")]),r("el-button",{attrs:{size:"small"},on:{click:function(t){e.isShowAddMaintain=!1}}},[e._v("取消")])],1)])],1)},i=[],n=r("cebc"),s=(r("ac6a"),r("96cf"),r("3b8d")),o=(r("6762"),r("2fdb"),r("f121")),l=r("c1df"),c=r.n(l),d=r("bfe6"),u={mixins:[d["a"]],data:function(){return{time:"",preMnTitle:"",isShowAddMaintain:!1,isRecordDialog:!1,dataList:[],addform:{},isEdit:!1,recordform:{},actionUrl:"/pvams/upload",columns:[],weekDataList:[],hostDomain:"",userId:"",realname:"",stationId:""}},created:function(){this.hostDomain="".concat(o["a"].HOST.pvamsDomain),this.userId=localStorage.getItem("userId"),this.realname=localStorage.getItem("realname");var e=this.$store.state.getTreeId.treeId;e.id&&e.id.includes("s")&&(this.stationId=e.id.slice(1,e.id.length),this.stationId&&(this.getTableData(),this.getWeekData()))},watch:{getStateData:function(e){var t=this.$store.state.getTreeId.treeId.id;t&&t.includes("s")&&(this.stationId=t.slice(1,t.length),this.getTableData(),this.getWeekData())}},computed:{getStateData:function(){return this.$store.state.getTreeId.treeId}},methods:{getWeekData:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r,a,i,n,s,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.axios("/pvams/getDateWeek");case 2:if(t=e.sent,r=t.data.data,r&&0!==r.length){if(a=r[r.length-1],a&&0!==a.length&&a.children&&0!==a.children.length)for(i=a.children[a.children.length-1],n=i.week,s=1;s<=n;s++)o={label:"第".concat(s,"周"),value:s},this.weekDataList.push(o);r.forEach(function(e){e["label"]="".concat(e.month,"月")}),this.columns=r||[]}case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getTableData:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r,a,i,n,s,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loadingOpen(),t={stationId:this.stationId,year:this.time},e.next=4,this.axios("/pvams/train/getTrainPlan",{params:t});case 4:r=e.sent,a=r.data.data,i=a.list,n=void 0===i?[]:i,s=a.title,o=void 0===s?"":s,this.loadingClose(),this.preMnTitle=o,n&&(this.dataList=n);case 13:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),changeTime:function(e){this.getTableData()},close:function(e){var t=this;this.$nextTick(function(){t.$refs[e].resetFields()})},clickAdd:function(){this.isEdit=!1,this.addform={},this.isShowAddMaintain=!0},clickAddMaintain:function(e){var t=this;this.$refs[e].validate(function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(r){var a,i,s,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=8;break}return a=Object(n["a"])({},t.addform,{userId:t.userId,stationId:t.stationId,year:t.time||""}),i=t.addform.trainId?"/pvams/train/updateTrainPlan":"/pvams/train/addTrainPlan",e.next=5,t.axios.post(i,a);case 5:s=e.sent,o=s.data.code,200===o&&(t.isShowAddMaintain=!1,t.getTableData());case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},clickEdit:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var r,a,i,n,s,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.isEdit=!0,r=t.trainId,a=void 0===r?"":r,e.next=4,this.axios("/pvams/train/query",{params:{trainId:a}});case 4:i=e.sent,n=i.data,s=n.code,o=n.data,200===s&&(this.isShowAddMaintain=!0,this.addform={title:o.title||"",content:o.content||"",week:o.week||[],trainId:o.trainId||""});case 9:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),clickDelete:function(e){var t=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark(function r(){var a,i,n,s,o;return regeneratorRuntime.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return a=e.trainId,i=void 0===a?"":a,n={trainId:i},r.next=4,t.axios("/pvams/train/delete",{params:n});case 4:s=r.sent,o=s.data.code,200===o&&(t.$message({type:"success",message:"删除成功"}),t.getTableData());case 7:case"end":return r.stop()}},r)})))},clickRecordConfirm:function(e){var t=this;this.$refs[e].validate(function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(r){var a,i,s,o,l,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=9;break}return a=t.recordform.status,i=void 0===a?"":a,s=Object(n["a"])({},t.recordform,{submitUserId:t.recordform.submitUserId||t.userId,confirmUserId:0===i?null:t.userId}),o=0===i?"/pvams/train/submitTrainPlan":"/pvams/train/confirmTrainPlan",e.next=6,t.axios.post(o,s);case 6:l=e.sent,c=l.data,200===c.code&&(t.isRecordDialog=!1,t.$message({type:"success",message:"提交成功"}),t.getTableData());case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},clickShowRecord:function(e){this.recordform=Object(n["a"])({},e,{submiter:e.submiter||this.realname}),this.recordform.confirmTime=0===e.status?c()(new Date).format("YYYY-MM-DD HH:mm:ss"):this.recordform.confirmTime,this.isRecordDialog=!0},uploadSuccess:function(e){if(200===e.code){this.$message({type:"success",message:"上传成功"});var t=e.data;this.recordform&&!this.recordform.fileList&&(this.recordform.fileList=[]),this.recordform.fileList.push(t)}else this.$message({type:"error",message:e.message})},beforeAvatarUpload:function(e,t){if(1===t){var r=e.size/1024/1024<20;return r||this.$message.error("上传文件大小不得超过20mb!"),r}if(2===t)return!0;if(3===t){var a=e.size/1024/1024<10,i="image/jpeg"===e.type||"image/png"===e.type;return i||this.$message.error("上传头像图片只能是 JPG或者Png 格式!"),a||this.$message.error("上传大小不得超过10mb!"),i&&a}}}},m=u,f=(r("e11e2"),r("7320"),r("2877")),p=Object(f["a"])(m,a,i,!1,null,"7799bf93",null);t["default"]=p.exports},9902:function(e,t,r){},e11e2:function(e,t,r){"use strict";var a=r("9902"),i=r.n(a);i.a},f121:function(e,t,r){"use strict";var a={};r.r(a),r.d(a,"HOST",function(){return s}),r.d(a,"ENV",function(){return o});var i={};r.r(i),r.d(i,"HOST",function(){return l}),r.d(i,"ENV",function(){return c});var n,s={pvamsDomain:"http://148.70.2.3:8090"},o="sit",l={pvamsDomain:"http://101.37.67.138:8088"},c="prd";n="101.37.67.138"===window.location.hostname?i:a;t["a"]=n}}]);
//# sourceMappingURL=train.32d20481.js.map