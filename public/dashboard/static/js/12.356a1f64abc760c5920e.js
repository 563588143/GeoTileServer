webpackJsonp([12],{"18tG":function(t,e){},"1Dhf":function(t,e){},ALkD:function(t,e){},ALoD:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("RuWt"),s=i("tIHl"),n=i("4YfN"),l=i.n(n),r=i("deIM"),o=i("TPXC"),c=i("oFuF"),h={components:{Dialog:r.a,CsPage:o.a},data:function(){var t=this;return{isCheckAll:!1,visible:!1,columns:[{title:"名称",key:"name",slot:"name",className:"table-header-text-default",renderHeader:function(e,i){return e("div",[e("i",{class:["iconfont",t.isCheckAll?"iconyixuan-":"iconkuang-"],style:{cursor:"pointer",verticalAlign:"middle",display:"inline-block"},on:{click:t.handleCheckChange}}),e("span",{style:{marginLeft:"10px",verticalAlign:"middle"}},i.column.title)])}},{title:"数据量",key:"count",width:120,className:"table-header-text-default"},{title:"坐标系",key:"srid",slot:"srid",width:120,className:"table-header-text-default"},{title:"类型",key:"type",slot:"type",width:120,className:"table-header-text-default"},{title:"创建日期",key:"create_time",width:150,className:"table-header-text-default"}],list:[],key:"",current:1,pageSize:5*a.y,total:0,orderBy:a.x.DESC,fieldOrder:a.i.CREATE_TIME}},computed:{isDesc:function(){return this.orderBy==a.x.DESC}},watch:{},methods:{getDatasetTypeLabel:c.a.getDatasetTypeLabel,clear:function(){this.isCheckAll=!1,this.list=[],this.key="",this.current=1,this.pageSize=5*a.y,this.total=0,this.orderBy=a.x.DESC,this.fieldOrder=a.i.CREATE_TIME},handleClose:function(){this.clear(),this.visible=!1},show:function(){this.clear(),this.handleSearch(),this.visible=!0},handleOk:function(){var t=this,e=this.list&&this.list.filter(function(t){return t.checked});if(!e||0==e.length)return Object(s.a)("请选择图层!"),!1;var i=[];e.forEach(function(t){i.push(t.id)});var a={params:{method:"select",data:i},success:function(i){i=i||[],e.forEach(function(t){var e=i.find(function(e){return e.id==t.id}),a=e&&e.fields?e.fields:[];t.fields=[],a.forEach(function(e){e.is_sys||t.fields.push(e)})}),t.$emit("on-select",e),t.clear(),t.visible=!1}};this.$http.batchDatasetsByIDs(a)},setCheckAllState:function(){if(!this.list||0==this.list.length)return this.isCheckAll=!1,!1;var t=this.list.find(function(t){return 0==t.checked});this.isCheckAll=!t},handleCheckState:function(t){this.list.forEach(function(e){e.id==t.id&&(e.checked=!e.checked)}),this.setCheckAllState()},handleCheckChange:function(){var t=this;this.isCheckAll=!this.isCheckAll,this.list.forEach(function(e){e.checked=t.isCheckAll})},handleSearch:function(){this.current=1,this.queryDatasets(this.key,this.pageSize,this.current)},handleOrderByClick:function(){this.orderBy==a.x.DESC?this.orderBy=a.x.ASC:this.orderBy=a.x.DESC,this.queryDatasets(this.key,this.pageSize,this.current)},handlePageSizeChange:function(t){this.pageSize=t,this.current=1,this.queryDatasets(this.key,this.pageSize,this.current)},handleChangePage:function(t){this.current=t,this.queryDatasets(this.key,this.pageSize,this.current)},queryDatasets:function(t,e,i){var a=this,s={params:{key:t,page_size:e,page:i,sortby:this.fieldOrder,order:this.orderBy},success:function(t){t=t||{},a.total=t.total?t.total:0,a.total=t.total?t.total:0;var e=t.rows?t.rows:[];e.forEach(function(t){t.checked=!1}),a.list=e,a.setCheckAllState()}};this.$http.searchDatasetsByKey(s)}}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Dialog",{attrs:{isShowBottomBtn:!1,title:"选择图层",visible:t.visible,showStep:!1,styles:{top:"15vh",width:"800px"}},on:{cus_cancel:t.handleClose}},[i("Row",{staticClass:"cus-view-search",attrs:{type:"flex",align:"middle"}},[i("Col",{attrs:{span:"24"}},[i("Input",{staticStyle:{width:"250px"},attrs:{search:"",placeholder:"搜索",suffix:"ios-search"},on:{"on-enter":t.handleSearch,"on-search":t.handleSearch},model:{value:t.key,callback:function(e){t.key="string"==typeof e?e.trim():e},expression:"key"}}),t._v(" "),i("span",{staticClass:"content-text-default span-split",staticStyle:{"font-size":"14px","margin-left":"10px"},on:{click:function(e){return e.stopPropagation(),t.handleOrderByClick.apply(null,arguments)}}},[i("Icon",{staticStyle:{"font-size":"16px"},attrs:{type:t.isDesc?"md-arrow-round-down":"md-arrow-round-up"}}),t._v("时间\n      ")],1)],1)],1),t._v(" "),i("Table",{staticClass:"cus-view",staticStyle:{"margin-top":"10px"},attrs:{border:"",columns:t.columns,data:t.list,height:320},scopedSlots:t._u([{key:"name",fn:function(e){var a=e.row;return[a.checked?i("i",{staticClass:"iconfont iconyixuan-",staticStyle:{cursor:"pointer","vertical-align":"middle",display:"inline-block"},on:{click:function(e){return t.handleCheckState(a)}}}):i("i",{staticClass:"iconfont iconkuang-",staticStyle:{cursor:"pointer","vertical-align":"middle",display:"inline-block"},on:{click:function(e){return t.handleCheckState(a)}}}),t._v(" "),i("span",{staticClass:"label-ellipsis",staticStyle:{"margin-left":"6px","vertical-align":"middle",display:"inline-block",width:"150px"},attrs:{title:a.name}},[t._v(t._s(a.name))])]}},{key:"type",fn:function(e){var a=e.row;return[i("div",[t._v(t._s(t.getDatasetTypeLabel(a.type)))])]}},{key:"srid",fn:function(e){var a=e.row;return[i("div",[t._v(t._s("EPSG:"+a.srid))])]}}])}),t._v(" "),i("Row",{staticClass:"cus-view",staticStyle:{"padding-top":"16px"},attrs:{type:"flex",justify:"end",align:"middle"}},[i("Col",{attrs:{span:"16"}},[i("CsPage",{attrs:{current:t.current,"page-size":t.pageSize,total:t.total},on:{"on-page-size-change":t.handlePageSizeChange,"on-change":t.handleChangePage}})],1),t._v(" "),i("Col",{staticStyle:{"text-align":"right"},attrs:{span:"8"}},[i("Button",{staticStyle:{"margin-right":"20px",width:"60px"},on:{click:function(e){return e.stopPropagation(),t.handleClose.apply(null,arguments)}}},[t._v("取消")]),t._v(" "),i("Button",{staticStyle:{width:"60px"},attrs:{type:"primary"},on:{click:function(e){return e.stopPropagation(),t.handleOk.apply(null,arguments)}}},[t._v("确定")])],1)],1)],1)},staticRenderFns:[]};var u=i("C7Lr")(h,d,!1,function(t){i("MNc9")},"data-v-dfbcb9c4",null).exports,f={components:{Dialog:r.a},data:function(){var t=this;return{isCheckAll:!1,title:"字段设置",visible:!1,columns:[{title:"名称",key:"name",slot:"name",className:"table-header-text-default",renderHeader:function(e,i){return e("div",[e("i",{class:["iconfont",t.isCheckAll?"iconyixuan-":"iconkuang-"],style:{cursor:"pointer",verticalAlign:"middle",display:"inline-block"},on:{click:t.handleCheckChange}}),e("span",{style:{marginLeft:"10px",verticalAlign:"middle"}},i.column.title)])}},{title:"类型",key:"type",slot:"type",width:150,className:"table-header-text-default"}],list:[],id:null}},methods:{getDataTypeLabel:c.a.getDataTypeLabel,clear:function(){this.list=[],this.id=null,this.isCheckAll=!1},handleClose:function(){this.clear(),this.visible=!1},show:function(t){var e=this;this.clear(),this.id=t.id;var i=t.fields,a=void 0===i?[]:i,s={id:t.id,success:function(t){var i=(t=t||{}).fields;(void 0===i?[]:i).forEach(function(t){t.is_sys||(a.find(function(e){return e.name==t.name})?e.list.push(l()({},t,{checked:!0})):e.list.push(l()({},t,{checked:!1})))}),e.setCheckAllState(),e.visible=!0}};this.$http.getDatasetDetailByID(s)},setCheckAllState:function(){if(!this.list||0==this.list.length)return this.isCheckAll=!1,!1;var t=this.list.find(function(t){return 0==t.checked});this.isCheckAll=!t},handleCheckChange:function(){var t=this;this.isCheckAll=!this.isCheckAll,this.list.forEach(function(e){e.checked=t.isCheckAll})},handleCheckState:function(t){this.list.forEach(function(e){e.name==t.name&&(e.checked=!e.checked)}),this.setCheckAllState()},handleOk:function(){var t=[];this.list.forEach(function(e){if(e.checked){var i=l()({},e);delete i.checked,t.push(l()({},i))}}),this.$emit("on-select",{id:this.id,fields:t}),this.clear(),this.visible=!1}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Dialog",{attrs:{isShowBottomBtn:!1,title:t.title,visible:t.visible,showStep:!1,styles:{top:"15vh",width:"700px"}},on:{cus_cancel:t.handleClose}},[i("Table",{staticClass:"cus-view",attrs:{border:"",columns:t.columns,data:t.list,height:360},scopedSlots:t._u([{key:"name",fn:function(e){var a=e.row;return[a.checked?i("i",{staticClass:"iconfont iconyixuan-",staticStyle:{cursor:"pointer","vertical-align":"middle",display:"inline-block"},on:{click:function(e){return t.handleCheckState(a)}}}):i("i",{staticClass:"iconfont iconkuang-",staticStyle:{cursor:"pointer","vertical-align":"middle",display:"inline-block"},on:{click:function(e){return t.handleCheckState(a)}}}),t._v(" "),i("span",{staticClass:"label-ellipsis",staticStyle:{"margin-left":"6px","vertical-align":"middle",display:"inline-block",width:"150px"},attrs:{title:a.name}},[t._v(t._s(a.name))])]}},{key:"type",fn:function(e){var a=e.row;return[i("div",[t._v(t._s(t.getDataTypeLabel(a.type)))])]}}])}),t._v(" "),i("Row",{staticClass:"cus-view",staticStyle:{"padding-top":"16px"},attrs:{type:"flex",justify:"end",align:"middle"}},[i("Col",{staticStyle:{"text-align":"right"},attrs:{span:"8"}},[i("Button",{staticStyle:{"margin-right":"20px",width:"60px"},on:{click:function(e){return e.stopPropagation(),t.handleClose.apply(null,arguments)}}},[t._v("取消")]),t._v(" "),i("Button",{staticStyle:{width:"60px"},attrs:{type:"primary"},on:{click:function(e){return e.stopPropagation(),t.handleOk.apply(null,arguments)}}},[t._v("确定")])],1)],1)],1)},staticRenderFns:[]};var m=i("C7Lr")(f,p,!1,function(t){i("ALkD")},"data-v-7d572126",null).exports,v=i("E4LH"),y={components:{Dialog:r.a,SelectLayerDialog:u,TilesetSettingDialog:m},data:function(){return{x1:a.s,x2:a.p,y1:a.r,y2:a.o,op:a.w.CREATE,title:"",visible:!1,name:"",range:[0,22],enableCache:!1,columns:[{title:"名称",key:"name",slot:"name",className:"table-header-text-default"},{title:"数据量",key:"count",width:100,className:"table-header-text-default"},{title:"坐标系",key:"srid",slot:"srid",width:100,className:"table-header-text-default"},{title:"类型",key:"type",slot:"type",width:80,className:"table-header-text-default"},{title:"操作",slot:"action",align:"left",width:150,className:"table-header-text-default"}],list:[],currentRow:{},id:null}},computed:{},watch:{},methods:{getDatasetTypeLabel:c.a.getDatasetTypeLabel,handleEnterRename:function(){var t=this;if(!this.currentRow)return!1;if(!v.f(this.currentRow.name))return Object(s.a)("名称不能为空"),!1;if(v.c(this.currentRow.name))return Object(s.a)("名称不能超过64"),!1;var e=this.list.findIndex(function(e){return e.id==t.currentRow.id});e>=0&&this.list.splice(e,1,l()({},this.currentRow,{isEdit:!1}))},handleBlur:function(t){this.list&&this.list.forEach(function(e){t.id==e.id&&(e.isEdit=!1)})},handleEditClick:function(t){this.list&&this.list.forEach(function(e){t.id==e.id?e.isEdit=!0:e.isEdit=!1}),this.currentRow=l()({},t)},handleFocus:function(t){this.list&&this.list.forEach(function(e){t.id==e.id?e.isEdit=!0:e.isEdit=!1})},clear:function(){this.x1=a.s,this.x2=a.p,this.y1=a.r,this.y2=a.o,this.name="",this.range=[0,22],this.list=[],this.currentRow={},this.enableCache=!1,this.id=null},handleClose:function(){this.clear(),this.visible=!1},show:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;switch(this.clear(),this.op=t,t){case a.w.CREATE:this.title="新建";break;case a.w.UPDATE:this.title="编辑",this.id=i}if(i&&t==a.w.UPDATE){var s={id:i,success:function(t){var i=t=t||{},a=i.name,s=i.minzoom,n=void 0===s?0:s,l=i.maxzoom,r=void 0===l?0:l,o=i.layers,c=void 0===o?[]:o,h=i.enable_cache,d=void 0!==h&&h,u=i.bounds,f=void 0===u?[]:u;e.name=a,e.enableCache=d,e.range=[n,r],f&&4==f.length&&(e.x1=f[0],e.y1=f[1],e.x2=f[2],e.y2=f[3]),e.queryDatasets(c)}};this.$http.getTilesetByID(s)}this.visible=!0},getStateLabel:function(t){return 0==t?"未设置":"已设置"},queryDatasets:function(t){var e=this,i=[];(t=t||[]).forEach(function(t){i.push(t.dataset_id)});var a={params:{method:"select",data:i},success:function(i){var a=[];(i=i||[]).forEach(function(e){var i=t.find(function(t){return t.dataset_id==e.id});if(i){var s=i.dataset_id,n=i.fields,r=void 0===n?{}:n,o=(i.filter,i.maxzoom,i.minzoom,i.name),c=e.fields,h=[];(void 0===c?[]:c).forEach(function(t){t.name in r&&h.push(l()({},t))}),a.push({name:o,count:e.count,id:s,srid:e.srs.srid,type:e.type,isEdit:!1,state:1,fields:h})}}),e.list=a,e.list.sort(function(t,e){return t.id-e.id});var n=e.hasRepeatName();n&&n.length>0&&Object(s.a)("名称有重复值")}};this.$http.batchDatasetsByIDs(a)},handleAddClick:function(){this.$refs.selectLayerDialog&&this.$refs.selectLayerDialog.show()},handleSelect:function(t){var e=this;t=t||[],this.list=this.list||[];this.list.length;t.forEach(function(t){var i=t.name,a=t.count,s=t.id,n=t.srid,l=t.type,r=t.fields,o=void 0===r?[]:r;e.list.some(function(t){return t.id==s})||e.list.push({name:i,count:a,id:s,srid:n,type:l,isEdit:!1,state:0,fields:o})}),this.list.sort(function(t,e){return t.id-e.id});var i=this.hasRepeatName();i&&i.length>0&&Object(s.a)("名称有重复值")},hasRepeatName:function(){this.list=this.list||[];for(var t=this.list.length,e=[],i=[],a=0;a<t;a++)e.indexOf(this.list[a].name)>=0?i.push(this.list[a].name):e.push(this.list[a].name);return i},handleDeleteClick:function(t,e){var i=this,a=c.a.getDeleteContent(t.name);this.$Modal.confirm({title:"提示",content:a,width:400,onOk:function(){i.list.splice(e,1)}})},handleSettingClick:function(t){var e=t.id,i=t.fields,a=void 0===i?[]:i;this.$refs.tilesetSettingDialog&&this.$refs.tilesetSettingDialog.show({id:e,fields:a})},handleSelectForSetting:function(t){var e=t=t||{},i=e.id,a=void 0===i?null:i,s=e.fields,n=void 0===s?[]:s;this.list.forEach(function(t){t.id==a&&(t.fields=n)})},handleOk:function(){var t=this;if(!v.e(this.x1))return Object(s.a)("最小经度不合法!"),!1;if(!v.e(this.y1))return Object(s.a)("最小纬度不合法!"),!1;if(!v.e(this.x2))return Object(s.a)("最大经度不合法!"),!1;if(!v.e(this.y2))return Object(s.a)("最大纬度不合法!"),!1;if(this.x1>180||this.x1<-180)return Object(s.a)("最小经度不合法!"),!1;if(this.y1>90||this.y1<-90)return Object(s.a)("最小纬度不合法!"),!1;if(this.x2>180||this.x2<-180)return Object(s.a)("最大经度不合法!"),!1;if(this.y2>90||this.y2<-90)return Object(s.a)("最大纬度不合法!"),!1;if(this.x1>=this.x2||this.y1>=this.y2)return Object(s.a)("地理范围不合法!"),!1;var e=[this.x1,this.y1,this.x2,this.y2];if(this.op==a.w.CREATE){if(!v.f(this.name))return Object(s.a)("名称不能为空"),!1;if(v.c(this.name))return Object(s.a)("名称不能超过64"),!1;if(!this.list||0==this.list.length)return Object(s.a)("图层不能为空"),!1;var i=[];this.list.forEach(function(t){var e=t.fields,a={};(e=e||[]).forEach(function(t){a[t.name]=c.a.getDataTypeLabel(t.type)}),i.push({name:t.name,dataset_id:t.id,dataset_type:t.type,fields:a})});var n={params:{name:this.name,minzoom:this.range[0],maxzoom:this.range[1],layers:i,enable_cache:this.enableCache,bounds:e},success:function(e){e&&(t.handleClose(),t.$bus.$emit(a.k.DATA_STATISTICS),t.$emit("refresh"))}};this.$http.createTileset(n)}else{if(!v.f(this.name))return Object(s.a)("名称不能为空"),!1;if(v.c(this.name))return Object(s.a)("名称不能超过64"),!1;if(!this.list||0==this.list.length)return Object(s.a)("图层不能为空"),!1;var l=[];this.list.forEach(function(t){var e=t.fields,i={};(e=e||[]).forEach(function(t){i[t.name]=c.a.getDataTypeLabel(t.type)}),l.push({name:t.name,dataset_id:t.id,dataset_type:t.type,fields:i})});var r={id:this.id,params:{name:this.name,minzoom:this.range[0],maxzoom:this.range[1],layers:l,enable_cache:this.enableCache,bounds:e},success:function(e){t.handleClose(),t.$emit("refresh")}};this.$http.updateTileset(r)}}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Dialog",{attrs:{isShowBottomBtn:!1,title:t.title,visible:t.visible,showStep:!1,styles:{top:"15vh",width:"700px"}},on:{cus_cancel:t.handleClose}},[i("Row",{staticClass:"row-item",attrs:{type:"flex",align:"middle"}},[i("Col",{attrs:{span:"4"}},[i("span",[t._v("名称")])]),t._v(" "),i("Col",{attrs:{span:"16"}},[i("Input",{attrs:{placeholder:"请输入名称"},model:{value:t.name,callback:function(e){t.name="string"==typeof e?e.trim():e},expression:"name"}})],1),t._v(" "),i("Col",{attrs:{span:"3"}},[i("div",{staticStyle:{"padding-left":"20px"}},[i("span",[t._v("启用缓存")])])]),t._v(" "),i("Col",{staticStyle:{"text-align":"right"},attrs:{span:"1"}},[i("div",{staticStyle:{"margin-right":"-8px"}},[i("Checkbox",{model:{value:t.enableCache,callback:function(e){t.enableCache=e},expression:"enableCache"}})],1)])],1),t._v(" "),i("Row",{staticClass:"row-item",attrs:{type:"flex",align:"middle"}},[i("Col",{attrs:{span:"4"}},[i("span",[t._v("层级范围(0~22)")])]),t._v(" "),i("Col",{staticStyle:{padding:"0 4px"},attrs:{span:"20"}},[i("Slider",{attrs:{range:"",min:0,max:22},model:{value:t.range,callback:function(e){t.range=e},expression:"range"}})],1)],1),t._v(" "),i("Row",{staticClass:"row-item",attrs:{type:"flex",align:"middle"}},[i("Col",{attrs:{span:"4"}},[i("span",[t._v("地理范围")])]),t._v(" "),i("Col",{staticStyle:{"text-align":"left"},attrs:{span:"20"}},[i("Row",{attrs:{type:"flex",align:"middle",gutter:20}},[i("Col",{attrs:{span:"6"}},[i("InputNumber",{staticStyle:{width:"100%"},attrs:{placeholder:"最小经度-180~180",min:-180,max:180},model:{value:t.x1,callback:function(e){t.x1=e},expression:"x1"}})],1),t._v(" "),i("Col",{attrs:{span:"6"}},[i("InputNumber",{staticStyle:{width:"100%"},attrs:{placeholder:"最小纬度-90~90",min:-90,max:90},model:{value:t.y1,callback:function(e){t.y1=e},expression:"y1"}})],1),t._v(" "),i("Col",{attrs:{span:"6"}},[i("InputNumber",{staticStyle:{width:"100%"},attrs:{placeholder:"最大经度-180~180",min:-180,max:180},model:{value:t.x2,callback:function(e){t.x2=e},expression:"x2"}})],1),t._v(" "),i("Col",{attrs:{span:"6"}},[i("InputNumber",{staticStyle:{width:"100%"},attrs:{placeholder:"最大纬度-90~90",min:-90,max:90},model:{value:t.y2,callback:function(e){t.y2=e},expression:"y2"}},[t._v(">")])],1)],1)],1)],1),t._v(" "),i("Row",{staticClass:"row-item",attrs:{type:"flex",align:"middle"}},[i("Col",{attrs:{span:"4"}},[i("span",[t._v("图层列表")])]),t._v(" "),i("Col",{staticStyle:{"text-align":"right"},attrs:{span:"20"}},[i("Button",{staticStyle:{width:"60px"},on:{click:function(e){return e.stopPropagation(),t.handleAddClick.apply(null,arguments)}}},[t._v("添加")])],1)],1),t._v(" "),i("Table",{staticClass:"cus-view",staticStyle:{"margin-top":"4px"},attrs:{columns:t.columns,data:t.list,height:200},scopedSlots:t._u([{key:"name",fn:function(e){var a=e.row;return[a.isEdit?i("div",[i("Input",{attrs:{placeholder:"请输入名称,长度不能超过64"},on:{"on-focus":function(e){return t.handleFocus(a)},"on-blur":function(e){return t.handleBlur(a)},"on-enter":t.handleEnterRename},model:{value:t.currentRow.name,callback:function(e){t.$set(t.currentRow,"name",e)},expression:"currentRow.name"}})],1):i("div",{staticClass:"n-t-name"},[i("span",{staticClass:"label-ellipsis",staticStyle:{display:"inline-block","max-width":"150px","vertical-align":"middle"},attrs:{title:a.name}},[t._v(t._s(a.name))]),t._v(" "),i("i",{staticClass:"iconfont iconbianji- n-t-i",on:{click:function(e){return e.stopPropagation(),t.handleEditClick(a)}}})])]}},{key:"type",fn:function(e){var a=e.row;return[i("div",[t._v(t._s(t.getDatasetTypeLabel(a.type)))])]}},{key:"srid",fn:function(e){var a=e.row;return[i("div",[t._v(t._s("EPSG:"+a.srid))])]}},{key:"action",fn:function(e){var a=e.row,s=e.index;return[i("span",{staticClass:"content-text-default span-split",on:{click:function(e){return t.handleSettingClick(a)}}},[i("i",{staticClass:"iconfont iconguanli-"}),t._v("\n        设置\n      ")]),t._v(" "),i("span",{staticClass:"content-text-default span-split",staticStyle:{"margin-left":"10px"},on:{click:function(e){return t.handleDeleteClick(a,s)}}},[i("i",{staticClass:"iconfont iconshanchu- content-text-default"}),t._v("\n        删除\n      ")])]}}])}),t._v(" "),i("Row",{staticStyle:{"margin-top":"10px"},attrs:{type:"flex",justify:"end"}},[i("Col",{staticStyle:{"text-align":"right"},attrs:{span:"24"}},[i("Button",{staticStyle:{"margin-right":"20px",width:"60px"},on:{click:function(e){return e.stopPropagation(),t.handleClose.apply(null,arguments)}}},[t._v("取消")]),t._v(" "),i("Button",{staticStyle:{width:"60px"},attrs:{type:"primary"},on:{click:function(e){return e.stopPropagation(),t.handleOk.apply(null,arguments)}}},[t._v("确定")])],1)],1),t._v(" "),i("SelectLayerDialog",{ref:"selectLayerDialog",on:{"on-select":t.handleSelect}}),t._v(" "),i("TilesetSettingDialog",{ref:"tilesetSettingDialog",on:{"on-select":t.handleSelectForSetting}})],1)},staticRenderFns:[]};var C=i("C7Lr")(y,g,!1,function(t){i("n65j")},"data-v-5775aeb4",null).exports,b=i("bYIx"),x=i("T452"),k=i("Izdj"),_=i("bSIt"),w={components:{Dialog:r.a,CsPage:o.a},mixins:[k.a],data:function(){return{tableHeight:0,visible:!1,map:null,title:"数据预览",bSwitchMap:!0,columns:[],pageSize:5*a.y,total:0,current:1,list:[],fields:[],id:null,maxZoom:22,minZoom:0,name:""}},computed:l()({},Object(_.b)(["access_token"])),watch:{totalHeight:function(t){this.tableHeight=t>0?t-113:0}},methods:{clear:function(){this.id=null,this.title="数据预览"},handleClose:function(){this.clear(),this.tableHeight=0,this.map&&this.map.remove(),this.map=null,this.offResize&&this.offResize(),this.visible=!1,this.$emit("vtp-close")},show:function(t){var e=this;this.clear(),this.onResize&&this.onResize(),this.id=t;var i={id:t,success:function(t){var i=t||{},a=i.name,s=void 0===a?null:a,n=i.layers,l=void 0===n?[]:n;e.name=s,e.title=s?"【"+s+"】数据预览":"数据预览",e.queryDatasets(l)}};this.$http.getTilesetByID(i),this.visible=!0},queryDatasets:function(t){var e=this,i=[];(t=t||[]).forEach(function(t){i.push(t.dataset_id)});var s={params:{method:"select",data:i},success:function(i){var s=[],n=[],r=[];(i=i||[]).forEach(function(e){var i=t.find(function(t){return t.dataset_id==e.id});if(i){var o={count:e.count,srid:e.srs.srid,type:e.type,bounds:e.bounds,srs:e.srs};switch(e.type){case a.n.POINT:s.push(l()({},i,o));break;case a.n.LINE:n.push(l()({},i,o));break;case a.n.POLYGON:r.push(l()({},i,o))}}});var o=[];o=(o=(o=o.concat(r)).concat(n)).concat(s),e.list=o,e.addLayers(e.list)}};this.$http.batchDatasetsByIDs(s)},addLayers:function(t){var e=this,i=t?t.length:0;if(!i)return!1;var s={container:"map",attributionControl:!0,zoom:5,maxZoom:22,minZoom:0,center:[116.5007,39.8545],style:{version:8,id:"vt-pre",name:"vt-pre",sources:{},layers:[{id:"background",type:"background",layout:{},paint:{"background-color":"rgb(0,0,0)"}}]},hash:!1,transformRequest:function(t,i){if(console.log(i),"Tile"===i)return{url:t+"?access_token="+e.access_token}}};this.map=new zcloud.Map(s);var n=new zcloud.NavigationControl({showCompass:!0,showZoom:!0,visualizePitch:!0});this.map.addControl(n,"top-right"),this.map.on("load",function(){var s=Object(x.a)("tilesets/"+e.id+".json",!0),n=e.name;e.map.addSource(n,{type:"vector",url:s,maxzoom:e.maxZoom,minzoom:e.minZoom});for(var l=0,r=0,o=0,h=0,d=!1,u=0;u<i;u++){var f,p=t[u],m={id:p.name,source:n,"source-layer":p.name},v=p.bounds,y=p.srs,g="",C=[];switch(f=c.a.randomSymbolColor(C),C.indexOf(f)<0&&C.push(f),p.type){case a.n.POINT:m.type="circle",m.paint={"circle-radius":5,"circle-color":f};break;case a.n.LINE:m.type="line",m.paint={"line-color":f,"line-width":2};break;case a.n.POLYGON:g=c.a.randomSymbolColor(C),C.indexOf(g)<0&&C.push(g),m.type="fill",m.paint={"fill-color":f,"fill-outline-color":g,"fill-opacity":.8}}if(v){var k=null,_=y||{},w=_.srid,S=void 0===w?4326:w,D=_.wkt;if(4326!=S)k=[Object(b.a)(D).inverse([v.min_x,v.min_y]),Object(b.a)(D).inverse([v.max_x,v.max_y])];else k=[[v.min_x,v.min_y],[v.max_x,v.max_y]];d?(l=l>k[0][0]?k[0][0]:l,r=r>k[0][1]?k[0][1]:r,o=o<k[1][0]?k[1][0]:o,h=h<k[1][1]?k[1][1]:h):(l=k[0][0],r=k[0][1],o=k[1][0],h=k[1][1],d=!0)}e.map.addLayer(m)}d&&e.map.fitBounds([[l,r],[o,h]])})},handlePageSizeChange:function(t){this.current=1,this.pageSize=t,this.queryAttributes(this.dtId,this.fields,this.pageSize,this.current)},handleChangePage:function(t){this.current=t,this.queryAttributes(this.dtId,this.fields,this.pageSize,this.current)},queryAttributes:function(t,e,i,a){var s=this,n={params:{id:t,query:{fields:e||[]},page:a,page_size:i},success:function(t){var e=t=t||{},i=(e.fields,e.rows),a=void 0===i?[]:i,n=e.total,l=void 0===n?0:n;s.list=a,s.total=l}};this.$http.getAttributesByDtID(n)}}},S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Dialog",{staticClass:"cus-view",attrs:{isShowBottomBtn:!1,fullscreen:!0,title:t.title,visible:t.visible,showStep:!1},on:{cus_cancel:t.handleClose}},[i("div",{staticClass:"v-t-d-containter"},[i("div",{style:{zIndex:t.bSwitchMap?10:0},attrs:{id:"map"}}),t._v(" "),i("div",{staticClass:"attrs-containter",style:{zIndex:t.bSwitchMap?0:10}},[i("Table",{staticClass:"cus-view",attrs:{border:"",columns:t.columns,data:t.list,height:t.tableHeight}}),t._v(" "),i("Row",{staticClass:"cus-view",staticStyle:{"padding-top":"16px"},attrs:{type:"flex",justify:"end",align:"middle"}},[i("Col",{attrs:{span:"24"}},[i("CsPage",{attrs:{current:t.current,"page-size":t.pageSize,total:t.total},on:{"on-page-size-change":t.handlePageSizeChange,"on-change":t.handleChangePage}})],1)],1)],1)])])},staticRenderFns:[]};var D=i("C7Lr")(w,S,!1,function(t){i("1Dhf")},"data-v-359203e8",null).exports,T=i("h72K"),E={components:{Dialog:r.a},data:function(){return{title:"参数详情",visible:!1,columns:[{title:"名称",key:"name",slot:"name",className:"table-header-text-default"},{title:"类型",key:"label",slot:"label",width:150,className:"table-header-text-default"}],list:[],id:null}},methods:{clear:function(){this.list=[]},handleClose:function(){this.clear(),this.visible=!1},show:function(t){this.clear(),t=t||[],this.list=t,this.visible=!0}}},z={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Dialog",{attrs:{isShowBottomBtn:!1,title:t.title,visible:t.visible,showStep:!1,styles:{top:"15vh",width:"700px"}},on:{cus_cancel:t.handleClose}},[i("Table",{staticClass:"cus-view",attrs:{border:"",columns:t.columns,data:t.list,height:400},scopedSlots:t._u([{key:"name",fn:function(e){var a=e.row;return[i("div",[t._v(t._s(a.name))])]}},{key:"label",fn:function(e){var a=e.row;return[i("div",[t._v(t._s(a.label))])]}}])})],1)},staticRenderFns:[]};var R=i("C7Lr")(E,z,!1,function(t){i("t+/Y")},"data-v-1f45aab2",null).exports,A={components:{Dialog:r.a,TilesetLayerDetailDialog:R},data:function(){return{title:"详情",visible:!1,name:"",minzoom:0,maxzoom:0,enableCache:!1,columns:[{title:"名称",key:"name",slot:"name",className:"table-header-text-default"},{title:"数据量",key:"count",width:100,className:"table-header-text-default"},{title:"坐标系",key:"srid",slot:"srid",width:100,className:"table-header-text-default"},{title:"类型",key:"type",slot:"type",width:80,className:"table-header-text-default"},{title:"操作",slot:"action",align:"left",width:150,className:"table-header-text-default"}],list:[]}},methods:{getDatasetTypeLabel:c.a.getDatasetTypeLabel,clear:function(){this.enableCache=!1,this.name="",this.minzoom=0,this.maxzoom=0,this.list=[]},handleClose:function(){this.clear(),this.visible=!1},show:function(t){var e=this;if(this.clear(),t){var i={id:t,success:function(t){var i=t||{},a=i.minzoom,s=void 0===a?0:a,n=i.maxzoom,l=void 0===n?0:n,r=i.name,o=i.layers,c=void 0===o?[]:o,h=i.enable_cache,d=void 0!==h&&h;e.minzoom=s,e.maxzoom=l,e.name=r,e.enableCache=d,c.length>0&&e.queryDatasets(c),e.visible=!0}};this.$http.getTilesetByID(i)}},queryDatasets:function(t){var e=this,i=[];(t=t||[]).forEach(function(t){i.push(t.dataset_id)});var a={params:{method:"select",data:i},success:function(i){var a=[];(i=i||[]).forEach(function(e){var i=t.find(function(t){return t.dataset_id==e.id});i&&a.push(l()({},i,{count:e.count,srid:e.srs.srid,type:e.type}))}),e.list=a}};this.$http.batchDatasetsByIDs(a)},handleDetail:function(t){var e=t.fields,i=void 0===e?{}:e,a=[];for(var s in i)a.push({name:s,label:i[s]});this.$refs.tilesetLayerDetailDialog&&this.$refs.tilesetLayerDetailDialog.show(a)}}},B={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Dialog",{attrs:{isShowBottomBtn:!1,title:t.title,visible:t.visible,showStep:!1,styles:{top:"15vh",width:"700px"}},on:{cus_cancel:t.handleClose}},[i("Row",{staticClass:"row-item t-s-d-item",attrs:{type:"flex",align:"middle"}},[i("Col",{attrs:{span:"4"}},[i("span",[t._v("名称")])]),t._v(" "),i("Col",{attrs:{span:"20"}},[i("span",[t._v(t._s(t.name))])])],1),t._v(" "),i("Row",{staticClass:"row-item t-s-d-item",attrs:{type:"flex",align:"middle"}},[i("Col",{attrs:{span:"4"}},[i("span",[t._v("最小层级")])]),t._v(" "),i("Col",{attrs:{span:"20"}},[i("span",[t._v(t._s(t.minzoom))])])],1),t._v(" "),i("Row",{staticClass:"row-item t-s-d-item",attrs:{type:"flex",align:"middle"}},[i("Col",{attrs:{span:"4"}},[i("span",[t._v("最大层级")])]),t._v(" "),i("Col",{attrs:{span:"20"}},[i("span",[t._v(t._s(t.maxzoom))])])],1),t._v(" "),i("Row",{staticClass:"row-item",attrs:{type:"flex",align:"middle"}},[i("Col",{attrs:{span:"4"}},[i("span",[t._v("启用缓存")])]),t._v(" "),i("Col",{staticStyle:{"text-align":"left"},attrs:{span:"20"}},[i("Checkbox",{attrs:{disabled:""},model:{value:t.enableCache,callback:function(e){t.enableCache=e},expression:"enableCache"}})],1)],1),t._v(" "),i("Row",{staticClass:"row-item t-s-d-item",attrs:{type:"flex",align:"middle"}},[i("Col",{attrs:{span:"4"}},[i("span",[t._v("图层列表")])])],1),t._v(" "),i("Table",{staticClass:"cus-view",staticStyle:{"margin-top":"4px"},attrs:{columns:t.columns,data:t.list,height:200},scopedSlots:t._u([{key:"name",fn:function(e){var a=e.row;return[i("div",{staticClass:"label-ellipsis",attrs:{title:a.name}},[t._v(t._s(a.name))])]}},{key:"type",fn:function(e){var a=e.row;return[i("div",[t._v(t._s(t.getDatasetTypeLabel(a.type)))])]}},{key:"srid",fn:function(e){var a=e.row;return[i("div",[t._v(t._s("EPSG:"+a.srid))])]}},{key:"action",fn:function(e){var a=e.row;return e.index,[i("span",{staticClass:"content-text-default span-split",on:{click:function(e){return t.handleDetail(a)}}},[i("i",{staticClass:"iconfont iconxiangqing-"}),t._v("\n        详情\n      ")])]}}])}),t._v(" "),i("TilesetLayerDetailDialog",{ref:"tilesetLayerDetailDialog"})],1)},staticRenderFns:[]};var I=i("C7Lr")(A,B,!1,function(t){i("18tG")},"data-v-13d62e2a",null).exports,O={data:function(){return{title:"预缓存设置",visible:!1,min:a.q,max:a.c,range:[a.q,a.c],tileID:null,name:""}},components:{Dialog:r.a},methods:{handleClose:function(){this.min=a.q,this.max=a.c,this.range=[a.q,a.c],this.name="",this.visible=!1},handleOk:function(){var t=this,e={params:{id:this.tileID,name:this.name,detail:{min_zoom:this.range[0],max_zoom:this.range[1]}},success:function(e){e&&(t.$bus.$emit(a.k.DATA_STATISTICS),t.$emit("refresh",t.tileID),t.handleClose())}};this.$http.createTileCacheTask(e)},show:function(t){this.tileID=t.id,this.getTilesetDetal(this.tileID)},getTilesetDetal:function(t){var e=this,i={id:t,success:function(t){var i=t||{},s=i.minzoom,n=void 0===s?0:s,l=i.maxzoom,r=void 0===l?0:l,o=i.name;e.range=[n,r],n>=a.c?(e.min=n,e.max=r):n<a.c&&(r>a.c?e.max=a.c:e.max=r,e.min=n),e.name=o,e.visible=!0}};this.$http.getTilesetByID(i)}}},P={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Dialog",{attrs:{isShowBottomBtn:!1,title:t.title,visible:t.visible,showStep:!1,styles:{top:"15vh",width:"700px"}},on:{cus_cancel:t.handleClose}},[i("Row",{staticClass:"row-item",attrs:{type:"flex",align:"middle"}},[i("Col",{attrs:{span:"5"}},[i("span",[t._v("层级范围("+t._s(t.min)+"~"+t._s(t.max)+")")])]),t._v(" "),i("Col",{staticStyle:{padding:"0 4px"},attrs:{span:"19"}},[i("Slider",{attrs:{range:"",min:t.min,max:t.max},model:{value:t.range,callback:function(e){t.range=e},expression:"range"}})],1)],1),t._v(" "),i("Row",{staticStyle:{"margin-top":"10px"},attrs:{type:"flex",justify:"end"}},[i("Col",{staticStyle:{"text-align":"right"},attrs:{span:"24"}},[i("Button",{staticStyle:{"margin-right":"20px",width:"60px"},on:{click:function(e){return e.stopPropagation(),t.handleClose.apply(null,arguments)}}},[t._v("取消")]),t._v(" "),i("Button",{staticStyle:{width:"60px"},attrs:{type:"primary"},on:{click:function(e){return e.stopPropagation(),t.handleOk.apply(null,arguments)}}},[t._v("确定")])],1)],1)],1)},staticRenderFns:[]};var $=i("C7Lr")(O,P,!1,function(t){i("aiRS")},null,null).exports,L={components:{TilesetDialog:C,CsPage:o.a,TilesetPreview:D,TilesetDetailDialog:I,TileCacheDialog:$},mixins:[T.a],data:function(){return{timer:null,isNoData:!1,noDataImg:a.t,columns:[{title:"名称",key:"name",slot:"name",className:"table-header-text-default"},{title:"网格矩阵集",key:"gridset_name",slot:"gridset_name",width:120,className:"table-header-text-default"},{title:"切片状态",key:"status",slot:"status",width:120,className:"table-header-text-default"},{title:"创建日期",key:"create_time",width:150,className:"table-header-text-default"},{title:"操作",slot:"action",align:"left",width:320,className:"table-header-text-default"}],list:[],key:"",current:1,pageSize:5*a.y,total:0,orderBy:a.x.DESC,fieldOrder:a.i.CREATE_TIME}},computed:{isDesc:function(){return this.orderBy==a.x.DESC}},mounted:function(){this.clear(),this.query(this.key,this.pageSize,this.current),this.timer=setInterval(this.timerFunc,a.K)},beforeDestroy:function(){this.timer&&clearInterval(this.timer)},methods:{startTimer:function(){this.timer=setInterval(this.timerFunc,a.K)},closeTimer:function(){this.timer&&clearInterval(this.timer)},getTaskStatusLabel:c.a.getTaskStatusLabel,getDatasetTypeLabel:c.a.getDatasetTypeLabel,timerFunc:function(){this.query(this.key,this.pageSize,this.current)},handleRefresh:function(){this.query(this.key,this.pageSize,this.current)},handleTileStatus:function(t){console.log(t)},clear:function(){this.list=[],this.key="",this.current=1,this.pageSize=5*a.y,this.total=0},handleOrderByClick:function(){this.orderBy==a.x.DESC?this.orderBy=a.x.ASC:this.orderBy=a.x.DESC,this.query(this.key,this.pageSize,this.current)},handleSearch:function(){this.current=1,this.query(this.key,this.pageSize,this.current)},handleNewClick:function(){this.$refs.tilesetDialog&&this.$refs.tilesetDialog.show(a.w.CREATE)},handlePageSizeChange:function(t){this.pageSize=t,this.current=1,this.query(this.key,this.pageSize,this.current)},handleChangePage:function(t){this.current=t,this.query(this.key,this.pageSize,this.current)},query:function(t,e,i){var a=this,s={params:{key:t,page_size:e,page:i,sortby:this.fieldOrder,order:this.orderBy},success:function(t){t=t||{},a.total=t.total?t.total:0;var e=t.rows?t.rows:[];a.list=e}};this.$http.searchTilesetsByKey(s)},handleDeleteClick:function(t){var e=this;if(t.status==a.C.STATUS_1)return Object(s.b)("任务在处理中无法删除"),!1;var i=c.a.getDeleteContent(t.name);this.$Modal.confirm({title:"提示",content:i,width:400,onOk:function(){var i={id:t.id,success:function(t){t&&(e.current=e.computPageNum(e.total,e.pageSize,e.current,1),e.$bus.$emit(a.k.DATA_STATISTICS),e.query(e.key,e.pageSize,e.current))}};e.$http.deleteTilesetByID(i)}})},handlePreviewClick:function(t){this.offResize&&this.offResize(),this.closeTimer(),this.$refs.vtPreview.show(t.id)},handleVtpClose:function(){this.onResize&&this.onResize(),this.startTimer()},handleDetailClick:function(t){this.$refs.tilesetDetailDialog&&this.$refs.tilesetDetailDialog.show(t.id)},handleEditClick:function(t){if(t.status==a.C.STATUS_1)return Object(s.b)("任务在处理中无法编辑"),!1;this.$refs.tilesetDialog&&this.$refs.tilesetDialog.show(a.w.UPDATE,t.id)},handlePreviewTileClick:function(t){if(t.status==a.C.STATUS_1)return Object(s.b)("任务在处理中无法预缓存"),!1;var e=this.$refs.tileCacheDialog;e&&e.show(t)},isEnable:function(t){return t.status==a.C.STATUS_1}}},N={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%",height:"100%"}},[i("div",{staticClass:"right-body"},[i("Row",{staticClass:"cus-view-search right-subject-item",attrs:{type:"flex",align:"middle"}},[i("Col",{attrs:{span:"20"}},[i("Input",{staticStyle:{width:"250px"},attrs:{search:"",placeholder:"搜索",suffix:"ios-search"},on:{"on-enter":t.handleSearch,"on-search":t.handleSearch},model:{value:t.key,callback:function(e){t.key="string"==typeof e?e.trim():e},expression:"key"}}),t._v(" "),i("span",{staticClass:"content-text-default span-split",staticStyle:{"font-size":"14px","margin-left":"10px"},on:{click:function(e){return e.stopPropagation(),t.handleOrderByClick.apply(null,arguments)}}},[i("Icon",{staticStyle:{"font-size":"16px"},attrs:{type:t.isDesc?"md-arrow-round-down":"md-arrow-round-up"}}),t._v("时间\n        ")],1)],1),t._v(" "),i("Col",{staticStyle:{"text-align":"right"},attrs:{span:"4"}},[i("div",{staticClass:"cus-buttom",on:{click:t.handleNewClick}},[t._v("新建")])])],1),t._v(" "),i("div",{staticClass:"cus-view"},[i("Table",{attrs:{columns:t.columns,data:t.list,"max-height":t.tableHeight},scopedSlots:t._u([{key:"name",fn:function(e){var a=e.row;return[i("div",{staticClass:"label-ellipsis",attrs:{title:a.name}},[t._v(t._s(a.name))])]}},{key:"gridset_name",fn:function(e){var a=e.row;return[i("div",[t._v(t._s(a.gridset_name))])]}},{key:"srid",fn:function(e){var a=e.row;return[i("div",[t._v(t._s("EPSG:"+a.srid))])]}},{key:"status",fn:function(e){var a=e.row;return[i("div",[t._v(t._s(t.getTaskStatusLabel(a.status)))])]}},{key:"action",fn:function(e){var a=e.row;return[i("span",{staticClass:"content-text-default span-split",on:{click:function(e){return t.handleEditClick(a)}}},[i("i",{staticClass:"iconfont iconbianji- content-text-default"}),t._v("\n            编辑\n          ")]),t._v(" "),i("span",{staticClass:"content-text-default span-split",staticStyle:{"margin-left":"10px"},on:{click:function(e){return t.handleDetailClick(a)}}},[i("i",{staticClass:"iconfont iconxiangqing- content-text-default"}),t._v("\n            详情\n          ")]),t._v(" "),i("span",{staticClass:"content-text-default span-split",staticStyle:{"margin-left":"10px"},on:{click:function(e){return t.handleDeleteClick(a)}}},[i("i",{staticClass:"iconfont iconshanchu- content-text-default"}),t._v("\n            删除\n          ")]),t._v(" "),i("span",{staticClass:"content-text-default span-split",staticStyle:{"margin-left":"10px"},on:{click:function(e){return t.handlePreviewClick(a)}}},[i("i",{staticClass:"iconfont iconliulan- content-text-default"}),t._v("\n            预览\n          ")]),t._v(" "),i("span",{staticClass:"content-text-default span-split",staticStyle:{"margin-left":"10px"},on:{click:function(e){return t.handlePreviewTileClick(a)}}},[i("i",{staticClass:"iconfont iconfabu- content-text-default"}),t._v("\n            预缓存\n          ")])]}}])}),t._v(" "),i("Row",{staticClass:"right-subject-item",attrs:{type:"flex",align:"middle"}},[i("Col",{attrs:{span:"24"}},[i("CsPage",{attrs:{current:t.current,"page-size":t.pageSize,total:t.total},on:{"on-page-size-change":t.handlePageSizeChange,"on-change":t.handleChangePage}})],1)],1)],1)],1),t._v(" "),i("TilesetDialog",{ref:"tilesetDialog",on:{refresh:t.handleRefresh}}),t._v(" "),i("TilesetDetailDialog",{ref:"tilesetDetailDialog"}),t._v(" "),i("TilesetPreview",{ref:"vtPreview",on:{"vtp-close":t.handleVtpClose}}),t._v(" "),i("TileCacheDialog",{ref:"tileCacheDialog",on:{refresh:t.handleTileStatus}})],1)},staticRenderFns:[]};var j=i("C7Lr")(L,N,!1,function(t){i("j7nI")},"data-v-296cd796",null);e.default=j.exports},MNc9:function(t,e){},aiRS:function(t,e){},j7nI:function(t,e){},n65j:function(t,e){},"t+/Y":function(t,e){}});