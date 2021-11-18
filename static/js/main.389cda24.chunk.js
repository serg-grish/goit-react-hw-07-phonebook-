(this["webpackJsonpgoit-react-hw-07-phonebook-"]=this["webpackJsonpgoit-react-hw-07-phonebook-"]||[]).push([[0],{13:function(t,e,n){t.exports={listItem:"ContactListItem_listItem__2yqNO",listItemText:"ContactListItem_listItemText__1y59s",button:"ContactListItem_button__qpOuc"}},23:function(t,e,n){t.exports={filterLabel:"Filter_filterLabel__2ZNSx",filterInput:"Filter_filterInput__AdX91"}},35:function(t,e,n){t.exports={list:"ContactList_list__2cE9S"}},67:function(t,e,n){},77:function(t,e,n){},78:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(17),u=n.n(c),s=n(3),i=n(20),o=n(5),l=n(34),b=n(2),f=n(4),j=Object(o.b)("contact-filter"),d=n(6),p=n.n(d),O=n(8),m=n(12),h=n.n(m);function x(){return v.apply(this,arguments)}function v(){return(v=Object(O.a)(p.a.mark((function t(){var e,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return y.apply(this,arguments)}function y(){return(y=Object(O.a)(p.a.mark((function t(e){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.delete("/contacts/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return C.apply(this,arguments)}function C(){return(C=Object(O.a)(p.a.mark((function t(e){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.post("/contacts",e);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}h.a.defaults.baseURL="https://61957e7e74c1bd00176c6d8c.mockapi.io";var w,N,k=Object(o.c)("contact/fetchContacts",Object(O.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))),I=Object(o.c)("contact/addContacts",function(){var t=Object(O.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),A=Object(o.c)("contact/deleteContacts",function(){var t=Object(O.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),L=Object(o.d)([],(w={},Object(b.a)(w,I.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(i.a)(t),[n])})),Object(b.a)(w,A.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Object(b.a)(w,k.fulfilled,(function(t,e){return e.payload})),w)),T=Object(o.d)("",Object(b.a)({},j,(function(t,e){return e.payload}))),F=Object(o.d)(!1,(N={},Object(b.a)(N,I.pending,(function(){return!0})),Object(b.a)(N,I.rejected,(function(){return!1})),Object(b.a)(N,I.fulfilled,(function(){return!1})),Object(b.a)(N,A.pending,(function(){return!0})),Object(b.a)(N,A.rejected,(function(){return!1})),Object(b.a)(N,A.fulfilled,(function(){return!1})),Object(b.a)(N,k.pending,(function(){return!0})),Object(b.a)(N,k.rejected,(function(){return!1})),Object(b.a)(N,k.fulfilled,(function(){return!1})),N)),S=Object(f.b)({contacts:L,filter:T,loading:F}),z=n(10),E=[].concat(Object(i.a)(Object(o.e)({serializableCheck:{ignoredActions:[z.a,z.f,z.b,z.c,z.d,z.e]}})),[l.logger]),M=Object(o.a)({reducer:S,middleware:E,devTools:!0}),q=(n(67),n(24)),B=n(9),Z=n.n(B),J=n(18),U=function(t){return t.contacts},D=Object(J.a)([U,function(t){return t.filter}],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)||t.phone.includes(e)}))})),R=n(1);function P(){var t=Object(r.useState)(""),e=Object(q.a)(t,2),n=e[0],a=e[1],c=Object(r.useState)(""),u=Object(q.a)(c,2),i=u[0],o=u[1],l=Object(s.b)(),b=Object(s.c)((function(t){return U(t)})),f=function(t){var e=t.currentTarget,n=e.name,r=e.value;switch(n){case"name":a(r);break;case"number":o(r);break;default:return}};return Object(R.jsx)("div",{className:Z.a.form,children:Object(R.jsxs)("form",{onSubmit:function(t){(t.preventDefault(),b.map((function(t){return t.name})).includes(n))?alert("Sorry,  ".concat(n," is already in contacs.")):(l(I({name:n,number:i})),a(""),o(""))},children:[Object(R.jsxs)("label",{className:Z.a.label,children:["NAME",Object(R.jsx)("input",{className:Z.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:f})]}),Object(R.jsxs)("label",{className:Z.a.label,children:["NUMBER",Object(R.jsx)("input",{className:Z.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:i,onChange:f})]}),Object(R.jsx)("button",{className:Z.a.button,type:"submit",children:Object(R.jsx)("span",{className:Z.a.btnText,children:"Add contact"})})]})})}var X=n(13),$=n.n(X);function G(t){var e=t.id,n=t.name,r=t.number,a=Object(s.b)();return Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)("li",{className:$.a.listItem,children:[Object(R.jsx)("span",{className:$.a.listItemText,children:n}),Object(R.jsx)("span",{className:$.a.listItemText,children:r}),Object(R.jsx)("button",{className:$.a.button,type:"button",onClick:function(){return a(A(e))},children:"Delete"})]})})}var H=n(35),K=n.n(H);function Q(){var t=Object(s.c)(D),e=Object(s.b)();return Object(r.useEffect)((function(){e(k())}),[e]),Object(R.jsxs)("ul",{className:K.a.list,children:[" ",t.map((function(t){var e=t.id,n=t.name,r=t.number;return Object(R.jsx)(G,{id:e,name:n,number:r},e)}))]})}var V=n(36),W=n.n(V),Y=n(23),tt=n.n(Y);function et(){var t=Object(s.c)((function(t){return t.filter})),e=Object(s.b)(),n=W.a.generate();return Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)("label",{htmlFor:n,className:tt.a.filterLabel,children:[Object(R.jsx)("h3",{children:"Find contacts by name"}),Object(R.jsx)("input",{type:"text",id:n,value:t,onChange:function(t){return e(j(t.target.value))},className:tt.a.filterInput})]})})}n(77);function nt(){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("h1",{children:"Phonebook"}),Object(R.jsx)(P,{}),Object(R.jsx)("h2",{children:"Contacts"}),Object(R.jsx)(et,{}),Object(R.jsx)(Q,{})]})}u.a.render(Object(R.jsx)(a.a.StrictMode,{children:Object(R.jsx)(s.a,{store:M,children:Object(R.jsx)(nt,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={form:"Contacts_form__2hfAr",label:"Contacts_label__LzAMT",input:"Contacts_input__1poBn",button:"Contacts_button__3NsEU"}}},[[78,1,2]]]);
//# sourceMappingURL=main.389cda24.chunk.js.map