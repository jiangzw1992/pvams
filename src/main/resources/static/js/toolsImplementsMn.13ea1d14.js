(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["toolsImplementsMn"],{"11f6":function(e,t,l){"use strict";l.r(t);var i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"tools-implements"},[l("div",{staticClass:"main-content-end"},[l("a",{attrs:{href:"/pvams/tool/export/"+e.stationId}},[l("el-button",{attrs:{type:"",size:"small"}},[e._v("导出模板")])],1),e.getUserJurisdiction("AT23")?l("el-upload",{staticClass:"upload-demo",style:{marginLeft:"20px"},attrs:{action:"/pvams/tool/import/"+e.stationId,"on-success":function(t){return e.uploadSuccess(t)},"show-file-list":!1,"before-upload":function(t){return e.beforeAvatarUpload(t)}}},[l("el-button",{attrs:{size:"small",type:"primary"}},[e._v("导入信息")])],1):e._e()],1),l("div",{staticClass:"table",style:{marginTop:"20px"}},[l("el-table",{attrs:{"header-cell-class-name":"table-th",data:e.tableList,border:"",stripe:""}},[e._l(e.columns,function(e,t){return l("el-table-column",{key:t,attrs:{align:"center",prop:e.prop,label:e.label,width:e.width}})}),l("el-table-column",{attrs:{label:"点检状态",align:"center",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticClass:"status-sty",style:{color:0===t.row.checkStatus?"#FF1F4D":1===t.row.checkStatus?"#CAA668":2===t.row.checkStatus?"#008000":"#000"}},[l("i",{style:{backgroundColor:0===t.row.checkStatus?"#FF1F4D":1===t.row.checkStatus?"#CAA668":2===t.row.checkStatus?"#008000":"#000"}}),e._v(" "+e._s(0===t.row.checkStatus?"未点检":1===t.row.checkStatus?"未确认":"已完成"))])]}}])}),l("el-table-column",{attrs:{label:"操作",align:"center",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.checkStatus?l("el-button",{attrs:{size:"small",type:"text"},on:{click:function(l){return e.clickSingle(t.row)}}},[e._v("点检")]):e._e(),l("el-button",{attrs:{size:"small",type:"text"},on:{click:function(l){return e.clickRecord(t.row,1)}}},[e._v("记录查询")])]}}])})],2)],1),l("div",[l("el-pagination",{attrs:{align:"right",small:"","page-size":10,layout:"prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1),l("div",{staticClass:"dialog"},[l("el-dialog",{attrs:{title:"消防器材点检单",visible:e.isVisbleSingle,width:"40%"},on:{"update:visible":function(t){e.isVisbleSingle=t},close:function(t){return e.closeSingle("formSingle")}}},[l("div",{staticClass:"main",style:{overflow:"hidden"}},[l("el-form",{ref:"formSingle",attrs:{model:e.formSingle,size:"small","label-width":"120px"}},[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"工器具名称"}},[l("el-input",{attrs:{disabled:"",placeholder:""},model:{value:e.formSingle.tool,callback:function(t){e.$set(e.formSingle,"tool",t)},expression:"formSingle.tool"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"位置"}},[l("el-input",{attrs:{disabled:"",placeholder:""},model:{value:e.formSingle.position,callback:function(t){e.$set(e.formSingle,"position",t)},expression:"formSingle.position"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"数量"}},[l("el-input",{attrs:{disabled:"",placeholder:""},model:{value:e.formSingle.num,callback:function(t){e.$set(e.formSingle,"num",t)},expression:"formSingle.num"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"类型"}},[l("el-input",{attrs:{disabled:"",placeholder:""},model:{value:e.formSingle.type,callback:function(t){e.$set(e.formSingle,"type",t)},expression:"formSingle.type"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"点检时间"}},[l("el-input",{attrs:{disabled:"",placeholder:""},model:{value:e.formSingle.checkTime,callback:function(t){e.$set(e.formSingle,"checkTime",t)},expression:"formSingle.checkTime"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"点检人"}},[l("el-input",{attrs:{disabled:"",placeholder:""},model:{value:e.formSingle.checkUserId,callback:function(t){e.$set(e.formSingle,"checkUserId",t)},expression:"formSingle.checkUserId"}})],1)],1),l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"丢失数量",prop:"loseNum",rules:[{required:!0,message:"请输入丢失数量"}]}},[l("el-input",{attrs:{placeholder:""},model:{value:e.formSingle.loseNum,callback:function(t){e.$set(e.formSingle,"loseNum",t)},expression:"formSingle.loseNum"}})],1)],1),l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"破损数量",prop:"damageNum",rules:[{required:!0,message:"请输入破损数量"}]}},[l("el-input",{attrs:{placeholder:""},model:{value:e.formSingle.damageNum,callback:function(t){e.$set(e.formSingle,"damageNum",t)},expression:"formSingle.damageNum"}})],1)],1),l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"更换数量",prop:"changeNum",rules:[{required:!0,message:"请输入更换数量"}]}},[l("el-input",{attrs:{placeholder:""},model:{value:e.formSingle.changeNum,callback:function(t){e.$set(e.formSingle,"changeNum",t)},expression:"formSingle.changeNum"}})],1)],1),l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"点检结果",prop:"checkResult",rules:[{required:!0,message:"请输入点检结果"}]}},[l("el-input",{attrs:{placeholder:""},model:{value:e.formSingle.checkResult,callback:function(t){e.$set(e.formSingle,"checkResult",t)},expression:"formSingle.checkResult"}})],1)],1),l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"下次点检日期",prop:"nextCheckTime",rules:[{required:!0,message:"请选择下次点检日期"}]}},[l("el-date-picker",{attrs:{type:"date",format:"yyyy-MM-dd hh:mm:ss","value-format":"yyyy-MM-dd hh:mm:ss",placeholder:"选择日期时间"},model:{value:e.formSingle.nextCheckTime,callback:function(t){e.$set(e.formSingle,"nextCheckTime",t)},expression:"formSingle.nextCheckTime"}})],1)],1)],1)],1),l("div",{attrs:{slot:"footer",align:"center"},slot:"footer"},[l("el-button",{on:{click:function(t){e.isVisbleSingle=!1}}},[e._v("取 消")]),l("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.clickSingleConfirm("formSingle")}}},[e._v("确 定")])],1)]),l("el-dialog",{attrs:{title:"记录查询",visible:e.isVisibleQuery,width:"62%"},on:{"update:visible":function(t){e.isVisibleQuery=t},close:e.close}},[l("div",{staticClass:"main"},[l("el-table",{attrs:{data:e.recordDataList,border:"",stripe:""}},[e._l(e.recordColumns,function(e,t){return l("el-table-column",{key:t,attrs:{align:"center",prop:e.prop,label:e.label,width:e.width}})}),l("el-table-column",{attrs:{label:"确认状态",width:"80px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(0===t.row.confirmStatus?"未确认":"已确认")+"\n            ")]}}])}),e.getUserJurisdiction("AT24")?l("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{disabled:0!==t.row.confirmStatus,type:"primary",size:"small"},on:{click:function(l){return e.clickQueryConfirm(t.row)}}},[e._v("确认")])]}}],null,!1,2196755137)}):e._e()],2)],1)])],1)])},a=[],r=l("cebc"),s=(l("96cf"),l("3b8d")),n=(l("6762"),l("2fdb"),l("c1df")),o=l.n(n),c=l("bfe6"),u={mixins:[c["a"]],data:function(){return{tableList:[],columns:[{label:"工器具名称",width:"120px",prop:"tool"},{label:"位置",width:"",prop:"position"},{label:"数量",width:"",prop:"num"},{label:"类型",width:"",prop:"type"},{label:"本次点检日期",width:"160px",prop:"checkTime"},{label:"参数",width:"",prop:"param"},{label:"点检校验计划",width:"200px",prop:"checkPlan"},{label:"下次点检日期",width:"160px",prop:"nextCheckTime"}],total:0,pageNo:1,formSingle:{},recordDataList:[],recordColumns:[{label:"点检人",width:"",prop:"checker"},{label:"点检时间",width:"160px",prop:"checkTime"},{label:"确认人",width:"",prop:"confirmer"},{label:"下次点检时间",width:"160px",prop:"nextCheckTime"}],recordId:"",userId:"",isVisibleQuery:!1,stationId:"",isVisbleSingle:!1}},created:function(){this.userId=localStorage.getItem("userId");var e=this.$store.state.getTreeId.treeId;e.id&&e.id.includes("s")&&(this.stationId=e.id.slice(1,e.id.length),this.stationId&&this.getTableList(1))},watch:{getStateData:function(e){var t=this.$store.state.getTreeId.treeId;t.id&&t.id.includes("s")&&(this.stationId=t.id.slice(1,t.id.length),this.stationId&&this.getTableList(1))}},computed:{getStateData:function(){return this.$store.state.getTreeId.treeId}},methods:{getTableList:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var l,i,a,r,s,n,o,c,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loadingOpen(),l={stationId:this.stationId,pageNo:t,pageSize:20},e.next=4,this.axios("/pvams/tool/query",{params:l});case 4:i=e.sent,a=i.data,a=void 0===a?{}:a,r=a.code,s=a.data,s=void 0===s?{}:s,n=s.count,o=void 0===n?0:n,c=s.resultList,u=void 0===c?[]:c,this.loadingClose(),200===r&&(this.tableList=u,this.total=o);case 12:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),handleCurrentChange:function(e){this.pageNo=e,this.getTableList(e)},clickSingle:function(e){this.isVisbleSingle=!0,this.formSingle=Object(r["a"])({},e,{nextCheckTime:"",toolId:e.id,checkTime:o()(new Date).format("YYYY-MM-DD HH:mm:ss")})},clickQueryConfirm:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var l,i,a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return l={userId:this.userId,id:t.id,confirmStatus:1},e.next=3,this.axios("/pvams/tool/confirm",{params:l});case 3:i=e.sent,a=i.data,a=void 0===a?{}:a,r=a.code,200===r&&(this.getTableList(this.pageNo),this.clickRecord({id:this.recordId},1));case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),clickSingleConfirm:function(e){var t=this;this.$refs[e].validate(function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(l){var i,a,s,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!l){e.next=10;break}return t.formSingle.id=null,i=Object(r["a"])({},t.formSingle,{checkUserId:t.userId}),e.next=5,t.axios.post("/pvams/tool/check",i);case 5:a=e.sent,s=a.data,s=void 0===s?{}:s,n=s.code,200===n&&(t.$message({type:"success",message:"点检成功"}),t.getTableList(t.pageNo),t.isVisbleSingle=!1);case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},closeSingle:function(e){this.$refs[e].resetFields()},close:function(){},clickRecord:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t,l){var i,a,r,s,n,o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.recordId=t.id,this.isVisibleQuery=!0,i={toolId:t.id,pageNo:l,pageSize:20},e.next=5,this.axios("/pvams/tool/queryRecord",{params:i});case 5:a=e.sent,r=a.data,r=void 0===r?{}:r,s=r.code,n=r.data,n=void 0===n?{}:n,o=n.resultList,c=void 0===o?[]:o,200===s&&(this.recordDataList=c);case 12:case"end":return e.stop()}},e,this)}));function t(t,l){return e.apply(this,arguments)}return t}(),uploadSuccess:function(e){200===e.code?(this.$message({type:"success",message:"上传成功"}),this.getTableList(this.pageNo)):this.$message({type:"error",message:e.message})},beforeAvatarUpload:function(e){var t=e.size/1024/1024<20;return t||this.$message.error("上传文件大小不得超过20mb!"),t}}},d=u,m=(l("2ae4"),l("2877")),p=Object(m["a"])(d,i,a,!1,null,"d69900ae",null);t["default"]=p.exports},"2ae4":function(e,t,l){"use strict";var i=l("a445"),a=l.n(i);a.a},a445:function(e,t,l){}}]);
//# sourceMappingURL=toolsImplementsMn.13ea1d14.js.map