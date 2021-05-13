(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={form:"Form_form__31iCB",label:"Form_label__3YEdp",input:"Form_input__10LiG"}},13:function(t,e,n){t.exports={list:"Contacts_list__1Pgrk",item:"Contacts_item__1OaGM",contact:"Contacts_contact__35Vaw",btn:"Contacts_btn__1kGyq",loader:"Contacts_loader__1XBM4"}},28:function(t,e,n){t.exports={label:"Filter_label__3RoOf",input:"Filter_input__2dXg2"}},91:function(t,e,n){},92:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(9),o=n(16),s=n.n(o),u=n(20),i=n(1),l=Object(u.a)({title:{textTransform:"capitalize",fontSize:30,marginLeft:30,marginBottom:10}}),b=function(t){var e=t.title,n=l();return Object(i.jsx)("h2",{className:n.title,children:e})},d=n(5),j=n(18),h=n(19),f=n(23),O=n(22),p=n(93),m=Object(u.a)({button:{cursor:"pointer",width:100,borderRadius:3,backgroundColor:"rgb(253, 252, 252)",outline:"none","&:hover":{backgroundColor:"blue",color:"white"}}}),C=function(){var t=m();return Object(i.jsx)("button",{className:t.button,type:"submit",children:"Add contact"})},x=n(10),g=n.n(x),v=function(t){var e=t.name,n=t.handleChange;return Object(i.jsxs)("label",{className:g.a.label,children:["Name",Object(i.jsx)("input",{type:"text",value:e,name:"name",onChange:n,placeholder:"Enter your full name",className:g.a.input,required:!0})]})},k=function(t){var e=t.number,n=t.handleChange;return Object(i.jsxs)("label",{className:g.a.label,children:["Number",Object(i.jsx)("input",{type:"tel",value:e,name:"number",onChange:n,placeholder:"xxx-xx-xx",className:g.a.input,required:!0})]})},_=n(4),y={fetchContactsRequest:Object(_.b)("phonebook/fetchContactsRequest"),fetchContactsSuccess:Object(_.b)("phonebook/fetchContactsSuccess"),fetchContactsError:Object(_.b)("phonebook/fetchContactsError"),addContactRequest:Object(_.b)("phonebook/addContactRequest"),addContactSuccess:Object(_.b)("phonebook/addContactSuccess"),addContactError:Object(_.b)("phonebook/addContactError"),deleteContactRequest:Object(_.b)("phonebook/deleteContactRequest"),deleteContactSuccess:Object(_.b)("phonebook/deleteContactSuccess"),deleteContactError:Object(_.b)("phonebook/deleteContactError"),changeFilter:Object(_.b)("phonebook/changeFilter")},F=n(11),S=n.n(F),w=n(24),N=n(15),R=n.n(N);R.a.defaults.baseURL="http://localhost:4040/contacts";var q,E,L=function(){return function(){var t=Object(w.a)(S.a.mark((function t(e){var n,c;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(y.fetchContactsRequest()),t.prev=1,t.next=4,R.a.get("/contacts");case 4:n=t.sent,c=n.data,e(y.fetchContactsSuccess(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(y.fetchContactsError(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},B=function(t){var e=t.name,n=t.number;return function(){var t=Object(w.a)(S.a.mark((function t(c){var a,r,o;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={name:e,number:n},c(y.addContactRequest()),t.prev=2,t.next=5,R.a.post("/contacts",a);case 5:r=t.sent,o=r.data,c(y.addContactSuccess(o)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),c(y.addContactError(t.t0));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},D=function(t){return function(){var e=Object(w.a)(S.a.mark((function e(n){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(y.deleteContactRequest()),e.prev=1,e.next=4,R.a.delete("/contacts/".concat(t));case 4:n(y.deleteContactSuccess(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(y.deleteContactError(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},M=n(17),z=function(t){return t.contacts.items},A=function(t){return t.contacts.filter},G={getContacts:z,getFilter:A,getLoading:function(t){return t.contacts.loading},getVisibleContacts:Object(M.a)([z,A],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},V=n(21),J=n(6),P=y.fetchContactsRequest,T=y.fetchContactsSuccess,X=y.fetchContactsError,I=y.addContactRequest,U=y.addContactSuccess,Y=y.addContactError,H=y.deleteContactRequest,K=y.deleteContactSuccess,Q=y.deleteContactError,W=[],Z="",$=Object(_.c)(W,(q={},Object(d.a)(q,T,(function(t,e){return e.payload})),Object(d.a)(q,U,(function(t,e){return[e.payload].concat(Object(V.a)(t))})),Object(d.a)(q,K,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),q)),tt=Object(_.c)(!1,(E={},Object(d.a)(E,P,(function(){return!0})),Object(d.a)(E,T,(function(){return!1})),Object(d.a)(E,X,(function(){return!1})),Object(d.a)(E,I,(function(){return!0})),Object(d.a)(E,U,(function(){return!1})),Object(d.a)(E,Y,(function(){return!1})),Object(d.a)(E,H,(function(){return!0})),Object(d.a)(E,K,(function(){return!1})),Object(d.a)(E,Q,(function(){return!1})),E)),et=Object(_.c)(Z,Object(d.a)({},y.changeFilter,(function(t,e){return e.payload}))),nt=Object(J.b)({items:$,filter:et,loading:tt}),ct=function(t){Object(f.a)(n,t);var e=Object(O.a)(n);function n(){var t;Object(j.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(d.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault();var n={id:Object(p.a)(),name:t.state.name,number:t.state.number};t.props.addContact(n),t.setState({name:"",number:""})},t}return Object(h.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("form",{className:g.a.form,onSubmit:this.handleSubmit,children:[Object(i.jsx)(v,{handleChange:this.handleChange,name:e}),Object(i.jsx)(k,{handleChange:this.handleChange,number:n}),Object(i.jsx)(C,{})]})})}}]),n}(c.Component),at=Object(r.b)((function(t){return{contacts:G.getContacts(t)}}),(function(t){return{addContact:function(e){return t(B(e))}}}))(ct),rt=n(13),ot=n.n(rt),st=n(42),ut=n.n(st),it=function(t){Object(f.a)(n,t);var e=Object(O.a)(n);function n(){return Object(j.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=this.props,e=t.allContacts,n=t.onDeleteContact,c=t.isLoading;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("ul",{className:ot.a.list,children:[e.length>0&&Object(i.jsx)("h2",{children:" Contacts "}),e.map((function(t){return Object(i.jsxs)("li",{className:ot.a.item,children:[Object(i.jsxs)("p",{className:ot.a.contact,children:[t.name,": ",t.number]}),Object(i.jsx)("button",{type:"button",className:ot.a.btn,onClick:function(){return n(t.id)},children:"Delete"})]},Object(p.a)())}))]}),c&&Object(i.jsxs)("div",{className:ot.a.loader,children:["",Object(i.jsx)(ut.a,{type:"Rings",color:"#00BFFF",height:200,width:200})]})]})}}]),n}(c.Component),lt=Object(r.b)((function(t){return{allContacts:G.getVisibleContacts(t),isLoading:G.getLoading(t)}}),(function(t){return{onDeleteContact:function(e){return t(D(e))},fetchContacts:function(){return t(L())}}}))(it),bt=n(28),dt=n.n(bt),jt=Object(r.b)((function(t){return{value:G.getFilter(t)}}),(function(t){return{handleChangeFilter:function(e){return t(y.changeFilter(e.target.value))}}}))((function(t){var e=t.handleChangeFilter,n=t.value;return Object(i.jsxs)("label",{className:dt.a.label,htmlFor:Object(p.a)(),children:["Find contacts by name",Object(i.jsx)("input",{className:dt.a.input,id:Object(p.a)(),type:"text",name:"filter",onChange:e,value:n})]})})),ht=(n(91),function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("section",{className:"phonebook",children:[Object(i.jsx)(b,{title:"Phonebook"}),Object(i.jsx)(at,{})]}),Object(i.jsxs)("section",{className:"contacts",children:[Object(i.jsx)(b,{title:"Contacts"}),Object(i.jsx)(jt,{}),Object(i.jsx)(lt,{})]})]})}),ft=n(12),Ot=n(43),pt=n.n(Ot),mt=[].concat(Object(V.a)(Object(_.d)({serializableCheck:{ignoredActions:[ft.a,ft.f,ft.b,ft.c,ft.d,ft.e]}})),[pt.a]),Ct=Object(_.a)({reducer:{contacts:nt},devTools:!1,middleware:mt});s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(r.a,{store:Ct,children:Object(i.jsx)(ht,{})})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.21254475.chunk.js.map