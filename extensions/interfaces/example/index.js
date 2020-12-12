import{n as e}from"../../normalize-component-1efcb3aa.js";import t from"@/api";import{ref as n,computed as r,watch as a}from"@vue/composition-api";import u from"@/lang";import l from"@/composables/use-collection";import{notify as i}from"@/utils/notify";import{unexpectedError as o}from"@/utils/unexpected-error";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function v(e,t,n,r){return new(n||(n=Promise))((function(a,u){function l(e){try{o(r.next(e))}catch(e){u(e)}}function i(e){try{o(r.throw(e))}catch(e){u(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}o((r=r.apply(e,t||[])).next())}))}function c(e,t){var n,r,a,u,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(a=2&u[0]?r.return:u[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,u[1])).done)return a;switch(r=0,a&&(u=[2&u[0],a.value]),u[0]){case 0:case 1:a=u;break;case 4:return l.label++,{value:u[1],done:!1};case 5:l.label++,r=u[1],u=[0];continue;case 7:u=l.ops.pop(),l.trys.pop();continue;default:if(!(a=l.trys,(a=a.length>0&&a[a.length-1])||6!==u[0]&&2!==u[0])){l=0;continue}if(3===u[0]&&(!a||u[1]>a[0]&&u[1]<a[3])){l.label=u[1];break}if(6===u[0]&&l.label<a[1]){l.label=a[1],a=u;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(u);break}a[2]&&l.ops.pop(),l.trys.pop();continue}u=t.call(e,l)}catch(e){u=[6,e],r=0}finally{n=a=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}}console.log((function(e,d){var f=l(e),h=f.info,p=f.primaryKeyField,m=n(null),y=n(null),b=n([]),_=n(!1),w=n(!1),g=n(!1),x=n(!1),A=n({}),I=r((function(){return"+"===d.value})),E=r((function(){return"string"==typeof d.value&&d.value.includes(",")})),O=r((function(){var e,t;return!!(null===(t=null===(e=h.value)||void 0===e?void 0:e.meta)||void 0===t?void 0:t.singleton)})),D=r((function(){var e,t,n,r;return(null===(t=null===(e=h.value)||void 0===e?void 0:e.meta)||void 0===t?void 0:t.archive_field)?"true"===h.value.meta.archive_value?!0===(null===(n=m.value)||void 0===n?void 0:n[h.value.meta.archive_field]):(null===(r=m.value)||void 0===r?void 0:r[h.value.meta.archive_field])===h.value.meta.archive_value:null})),L=r((function(){return e.value.startsWith("directus_")?"/"+e.value.substring(9):"/items/"+e.value})),F=r((function(){return O.value?L.value:L.value+"/"+d.value}));return a([e,d],j,{immediate:!0}),{edits:A,item:m,error:y,loading:_,saving:w,refresh:j,save:function(){var e,n;return v(this,void 0,void 0,(function(){var r,a,l;return c(this,(function(s){switch(s.label){case 0:w.value=!0,b.value=[],s.label=1;case 1:return s.trys.push([1,6,7,8]),r=void 0,!0!==I.value?[3,3]:[4,t.post(L.value,A.value)];case 2:return r=s.sent(),i({title:u.tc("item_create_success",E.value?2:1),type:"success"}),[3,5];case 3:return[4,t.patch(F.value,A.value)];case 4:r=s.sent(),i({title:u.tc("item_update_success",E.value?2:1),type:"success"}),s.label=5;case 5:return k(r),A.value={},[2,r.data.data];case 6:throw a=s.sent(),(null===(n=null===(e=null==a?void 0:a.response)||void 0===e?void 0:e.data)||void 0===n?void 0:n.errors)?(b.value=a.response.data.errors.filter((function(e){var t;return"FAILED_VALIDATION"===(null===(t=null==e?void 0:e.extensions)||void 0===t?void 0:t.code)})).map((function(e){return e.extensions})),(l=a.response.data.errors.filter((function(e){var t;return"FAILED_VALIDATION"!==(null===(t=null==e?void 0:e.extensions)||void 0===t?void 0:t.code)}))).length>0&&l.forEach(o)):o(a),a;case 7:return w.value=!1,[7];case 8:return[2]}}))}))},isNew:I,remove:function(){return v(this,void 0,void 0,(function(){var e;return c(this,(function(n){switch(n.label){case 0:g.value=!0,n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,t.delete(F.value)];case 2:return n.sent(),m.value=null,i({title:u.tc("item_delete_success",E.value?2:1),type:"success"}),[3,5];case 3:throw e=n.sent(),o(e),e;case 4:return g.value=!1,[7];case 5:return[2]}}))}))},deleting:g,archive:function(){var e,n;return v(this,void 0,void 0,(function(){var r,a,l,v,d,f,p;return c(this,(function(c){switch(c.label){case 0:if(!(null===(n=null===(e=h.value)||void 0===e?void 0:e.meta)||void 0===n?void 0:n.archive_field))return[2];x.value=!0,r=h.value.meta.archive_field,"true"===(a=h.value.meta.archive_value)&&(a=!0),"false"===a&&(a=!1),"true"===(l=h.value.meta.unarchive_value)&&(l=!0),"false"===l&&(l=!1),c.label=1;case 1:return c.trys.push([1,3,4,5]),"true"===(v=m.value&&m.value[r]===a?l:a)&&(v=!0),"false"===v&&(v=!1),m.value=s(s({},m.value),((f={})[r]=v,f)),[4,t.patch(F.value,(p={},p[r]=v,p))];case 2:return c.sent(),i({title:u.tc("item_delete_success",E.value?2:1),type:"success"}),[3,5];case 3:throw d=c.sent(),o(d),d;case 4:return x.value=!1,[7];case 5:return[2]}}))}))},isArchived:D,archiving:x,saveAsCopy:function(){var e,n;return v(this,void 0,void 0,(function(){var r,a,l;return c(this,(function(v){switch(v.label){case 0:w.value=!0,b.value=[],r=s(s({},m.value||{}),A.value),p.value&&r.hasOwnProperty(p.value.field)&&delete r[p.value.field],v.label=1;case 1:return v.trys.push([1,3,4,5]),[4,t.post(L.value,r)];case 2:return a=v.sent(),i({title:u.tc("item_create_success",1),type:"success"}),A.value={},[2,p.value?a.data.data[p.value.field]:null];case 3:if(l=v.sent(),!(null===(n=null===(e=null==l?void 0:l.response)||void 0===e?void 0:e.data)||void 0===n?void 0:n.errors))throw o(l),l;return b.value=l.response.data.errors.filter((function(e){var t;return"FAILED_VALIDATION"===(null===(t=null==e?void 0:e.extensions)||void 0===t?void 0:t.code)})).map((function(e){return e.extensions})),[3,5];case 4:return w.value=!1,[7];case 5:return[2]}}))}))},isBatch:E,getItem:T,validationErrors:b};function T(){return v(this,void 0,void 0,(function(){var e;return c(this,(function(n){switch(n.label){case 0:_.value=!0,y.value=null,n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,t.get(F.value)];case 2:return k(n.sent()),[3,5];case 3:return e=n.sent(),y.value=e,[3,5];case 4:return _.value=!1,[7];case 5:return[2]}}))}))}function j(){y.value=null,_.value=!1,w.value=!1,g.value=!1,!0===I.value?m.value=null:T()}function k(e){if(!1===E.value)m.value=e.data.data;else{var t=s({},e.data.data[0]);e.data.data.forEach((function(e){for(var n=0,r=Object.entries(e);n<r.length;n++){var a=r[n],u=a[0],l=a[1];t[u]!==l&&delete t[u]}})),m.value=t}}}));const d={};var f=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("My Custom Interface")])};f._withStripped=!0;var h={id:"custom",name:"Custom",description:"This is my custom interface!",icon:"box",component:e({render:f,staticRenderFns:[]},undefined,d,undefined,false,undefined,!1,void 0,void 0,void 0),types:["string"]};export default h;
