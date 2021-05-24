(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){e.exports={inputCorrect:"Input_inputCorrect__19fJk",inputError:"Input_inputError__dvIfl",error:"Input_error__2l2Uc"}},16:function(e,t,n){e.exports={checkbox:"Checkbox_checkbox__33Sb0"}},25:function(e,t,n){e.exports={App:"App_App__3IM3x"}},28:function(e,t,n){e.exports={button:"Button_button__2wJZm"}},29:function(e,t,n){e.exports={stringsContainer:"Strings_stringsContainer__1VknB"}},30:function(e,t,n){e.exports={headerContainer:"Header_headerContainer__hlziG"}},31:function(e,t,n){e.exports={footerContainer:"Footer_footerContainer__1k6gx"}},36:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(9),c=n.n(a),s=(n(36),n(25)),i=n.n(s),o=n(4),u=n(15),l=n.n(u),p=n(26),j=n(6),b=n(27),d=n.n(b).a.create({baseURL:"https://secret-ocean-49799.herokuapp.com/https://www.mrsoft.by/data.json"}),h=function(){return d.get("").then((function(e){return e.data}))},f=Object(j.b)("strings/fetchStrings",function(){var e=Object(p.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(x({status:"loading"})),e.prev=1,n.dispatch(x({status:"succeeded"})),e.next=5,h();case 5:return r=e.sent,e.abrupt("return",{data:r.data});case 9:return e.prev=9,e.t0=e.catch(1),n.dispatch(x({status:"failed"})),e.abrupt("return",n.rejectWithValue(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),g=Object(j.c)({name:"strings",initialState:{status:"loading",data:[]},reducers:{setAppStatusAC:function(e,t){e.status=t.payload.status}},extraReducers:function(e){e.addCase(f.fulfilled,(function(e,t){e.data=t.payload.data}))}}),x=g.actions.setAppStatusAC,O=n(8),C=n(3),_=n(10),m=n(11),v=n.n(m),N=n(1),k=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=(e.onKeyPress,e.error),a=(e.className,e.spanClassName),c=e.helperText,s=Object(_.a)(e,["type","onChange","onChangeText","onKeyPress","error","className","spanClassName","helperText"]),i="".concat(v.a.error," ").concat(a||""),o="".concat(r?v.a.inputError:v.a.inputCorrect);return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("input",Object(C.a)(Object(C.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)}},s),{},{className:o})),r&&Object(N.jsx)("div",{className:i,children:c})]})},y=n(16),S=n.n(y),w=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(_.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(S.a.checkbox," ").concat(r||"");return Object(N.jsxs)("label",{children:[Object(N.jsx)("input",Object(C.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(N.jsx)("span",{className:S.a.spanClassName,children:a})]})},F=n(28),T=n.n(F),A=function(e){var t=Object.assign({},e);return Object(N.jsx)("button",Object(C.a)({className:T.a.button},t))},I=n(29),L=n.n(I),B=function(e){var t=e.strings;return Object(N.jsx)("div",{className:L.a.stringsContainer,children:t.map((function(e,t){return Object(N.jsx)("div",{children:e},t)}))})},E=n(7),J=n.n(E),P=function(e){var t=e.strings,n=Object(r.useState)(""),a=Object(O.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(!1),o=Object(O.a)(i,2),u=o[0],l=o[1],p=Object(r.useState)([]),j=Object(O.a)(p,2),b=j[0],d=j[1],h=Object(r.useState)(null),f=Object(O.a)(h,2),g=f[0],x=f[1];return Object(N.jsxs)("div",{className:J.a.filterContainer,children:[Object(N.jsx)("div",{className:J.a.input,children:Object(N.jsx)(k,{value:c,onChange:function(e){x(null),s(e.currentTarget.value)},error:g,placeholder:"filter for length or substring...",helperText:"Filter is required!",onBlur:function(){return x(null)}})}),Object(N.jsx)("div",{className:J.a.checkbox,children:Object(N.jsxs)("label",{children:[Object(N.jsx)("span",{children:"Register:"})," ",Object(N.jsx)(w,{checked:u,onChange:function(e){l(e.currentTarget.checked)}})]})}),Object(N.jsxs)("div",{className:J.a.buttons,children:[Object(N.jsx)(A,{onClick:function(){""===c&&x(!0);var e=function(e,t){var n=[];if(e&&!isNaN(+e))for(var r=0;r<t.length;r++)t[r].length>e&&n.push(t[r]);return n}(c,t);d(e),s("")},children:"length"}),Object(N.jsx)(A,{onClick:function(){""===c&&x(!0);var e=function(e,t,n){var r=[];if(e)if(t){if("string"===typeof e)for(var a=0;a<n.length;a++)n[a].includes(e)&&r.push(n[a])}else if("string"===typeof e)for(var c=0;c<n.length;c++)n[c].toLocaleLowerCase().includes(e.toLocaleLowerCase())&&r.push(n[c]);return r}(c,u,t);d(e),s("")},children:"substring"})]}),Object(N.jsx)("h2",{children:"Filtered strings:"}),Object(N.jsx)(B,{strings:b})]})},R=n(30),K=n.n(R),M=function(){return Object(N.jsx)("div",{className:K.a.headerContainer})},U=n(31),V=n.n(U),q=function(){return Object(N.jsx)("div",{className:V.a.footerContainer})},z=n.p+"static/media/Rolling-1s-231px.5238d0e6.svg",D=function(){return Object(N.jsx)("div",{style:{margin:"0 auto",width:"200px"},children:Object(N.jsx)("img",{src:z,alt:"loading",style:{width:"100px",height:"100px"}})})},G=function(){var e=Object(o.c)((function(e){return e.strings.data})),t=Object(o.c)((function(e){return e.strings.status})),n=Object(o.b)();return Object(r.useEffect)((function(){n(f())}),[n]),"loading"===t?Object(N.jsx)(D,{}):Object(N.jsxs)("div",{className:i.a.App,children:[Object(N.jsx)(M,{}),Object(N.jsx)(P,{strings:e}),Object(N.jsx)(q,{})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},W=n(5),Z=Object(j.a)({reducer:{strings:g.reducer},middleware:function(e){return e().prepend(W.a)}});c.a.render(Object(N.jsx)(o.a,{store:Z,children:Object(N.jsx)(G,{})}),document.getElementById("root")),H()},7:function(e,t,n){e.exports={filterContainer:"FilterSettings_filterContainer__2N-io",input:"FilterSettings_input__2fa9y",checkbox:"FilterSettings_checkbox__2F6eA",buttons:"FilterSettings_buttons__aBbnM"}}},[[61,1,2]]]);
//# sourceMappingURL=main.0ad2978d.chunk.js.map