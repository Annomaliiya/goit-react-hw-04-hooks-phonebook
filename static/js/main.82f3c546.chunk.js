(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={input:"Filter_input__2fhgm",label:"Filter_label__1LqRT"}},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(11),i=n.n(r),s=(n(18),n(12)),o=n(13),l=n(2),u=n(3),b=n(9),d=n.n(b),j=n(0),m=function(e){var t=e.title,n=e.children;return Object(j.jsxs)("section",{className:d.a.section,children:[Object(j.jsx)("h1",{className:d.a.title,children:t}),n]})},f=n(4),h=n.n(f),O=function(e){var t=e.changeContact,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(""),o=Object(l.a)(s,2),b=o[0],d=o[1],m=Object(u.a)(),f=Object(u.a)();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r,b),i(""),d("")},children:[Object(j.jsxs)("label",{className:h.a.label,htmlFor:m,children:["Name",Object(j.jsx)("input",{className:h.a.input,type:"text",name:"name",value:r,onChange:function(e){var t=e.currentTarget.value;i(t)},id:m,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0})]}),Object(j.jsxs)("label",{className:h.a.label,htmlFor:f,children:["Number",Object(j.jsx)("input",{className:h.a.input,type:"tel",value:b,onChange:function(e){var t=e.currentTarget.value;d(t)},id:f,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",required:!0})]}),Object(j.jsx)("button",{className:h.a.btnAdd,type:"submit",children:"Add contact"})]})})},p=n(7),x=n.n(p),_=function(e){var t=e.contacts,n=e.deleteFunction,a=t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(j.jsxs)("li",{className:x.a.contactsListItem,children:[a," ",c,Object(j.jsx)("button",{onClick:function(){return n(t)},className:x.a.btnDelete,children:"X"})]},a)}));return Object(j.jsx)("ul",{className:x.a.contactsList,children:a})},v=n(10),g=n.n(v),C=function(e){var t=e.filter,n=e.handleChange,a=e.filterInputId;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("label",{className:g.a.label,htmlFor:a,children:["Find contacts by name",Object(j.jsx)("input",{className:g.a.input,type:"text",name:"filter",value:t,onChange:n,id:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})})},N=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],F=function(){var e=Object(a.useState)(N),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),b=i[0],d=i[1],f=Object(u.a)();Object(a.useEffect)((function(){var e=localStorage.getItem("contacts"),t=JSON.parse(e);t&&c(t)}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var h=function(){if(!b)return n;var e=b.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m,{title:"Phonebook",children:Object(j.jsx)(O,{handleChange:function(e){var t=e.currentTarget,n=t.name,a=t.value;c(Object(s.a)({},n,a))},changeContact:function(e,t){if(n.find((function(t){return t.name.toLowerCase()===e.toLowerCase()})))alert(e+" is already in contacts.");else{var a={id:Object(u.a)(),name:e,number:t};c((function(e){return[].concat(Object(o.a)(e),[a])}))}}})}),Object(j.jsxs)(m,{title:"Contacts",children:[Object(j.jsx)(C,{filter:b,handleChange:function(e){var t=e.currentTarget.value;d(t)},filterInputId:f}),Object(j.jsx)(_,{contacts:h,deleteFunction:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})]})};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root"))},4:function(e,t,n){e.exports={label:"ContactForm_label__3rs4D",input:"ContactForm_input__3Bynt",btnAdd:"ContactForm_btnAdd__1S_zI"}},7:function(e,t,n){e.exports={contactsListItem:"ContactList_contactsListItem__voDjU",btnDelete:"ContactList_btnDelete__9X0tn"}},9:function(e,t,n){e.exports={section:"Section_section__v6Hf3",title:"Section_title__1fgbv"}}},[[20,1,2]]]);
//# sourceMappingURL=main.82f3c546.chunk.js.map