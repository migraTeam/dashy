(this.webpackJsonpdashy=this.webpackJsonpdashy||[]).push([[0],{14:function(e,t,a){e.exports=a(25)},19:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(4),c=a.n(r),i=(a(19),a(2)),o=a(7),s=a.n(o),u=a(8),m=a.n(u);var d=function(e){var t=e.onHeaderClick,a=e.logIn,r={whichUserHeader:e.whichUserHeader};function c(e){for(;e.toString().length<2;)e="0"+e;return e}r=r.whichUserHeader;var o=Object(n.useState)(new Date),u=Object(i.a)(o,2),d=u[0],E=u[1],v=c(d.getHours())+":"+c(d.getMinutes())+":"+c(d.getSeconds());return Object(n.useEffect)((function(){var e=setInterval((function(){E(new Date)}),1e3);return function(){clearInterval(e)}})),l.a.createElement("div",{className:"header"},1===a?l.a.createElement("div",{className:"greeting"},"Hello ",r,", it is ",v," and you have no appointments in your calendar today!"):l.a.createElement(l.a.Fragment,null,"."),l.a.createElement("img",{className:"greeting",src:1===a?s.a:m.a,alt:"logo",onClick:t}))};function E(e){var t=e.onTabsClick,a=e.logIn,n=e.index;return l.a.createElement("div",{className:"menu",style:{justifyContent:"flex-start"}},1===a&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:0===n?"tabnameactive":"tabname",onClick:function(){return t(0)}},l.a.createElement("div",null,"Syllabus")),l.a.createElement("div",{className:1===n?"tabnameactive":"tabname"},l.a.createElement("div",{onClick:function(){return t(1)}},"SLACK")),l.a.createElement("div",{className:2===n?"tabnameactive":"tabname"},l.a.createElement("div",{onClick:function(){return t(2)}},"Homeworks")),l.a.createElement("div",{className:3===n?"tabnameactive":"tabname"},l.a.createElement("div",{onClick:function(){return t(3)}},"Recordings")),l.a.createElement("div",{className:4===n?"tabnameactive":"tabname"},l.a.createElement("div",{onClick:function(){return t(4)}},"Calendar")),l.a.createElement("div",{className:5===n?"tabnameactive":"tabname"},l.a.createElement("div",{onClick:function(){return t(5)}},"CHAT one2one")),l.a.createElement("div",{className:6===n?"tabnameactive":"tabname"},l.a.createElement("div",{onClick:function(){return t(6)}},"Useful links"))))}var v=a(9),b=a.n(v);var h=function(e){return l.a.createElement("div",{className:"tabcontent"},l.a.createElement("img",{src:b.a,alt:"slack"}))},f=a(5);var g=function(e){return l.a.createElement("div",{className:"tabcontent"},l.a.createElement(f.a,{url:"https://secvidchat.herokuapp.com/",width:"100%",height:"650px",id:"myId",className:"myClassname",display:"initial",position:"relative"}))};var p=function(){return l.a.createElement("div",{className:"tabcontent"},l.a.createElement(f.a,{url:"https://migracode-barcelona.github.io/syllabus/db/week-1/lesson.html",width:"100%",height:"650px",id:"myId",className:"myClassname",display:"initial",position:"relative"}))};var k=function(e){return l.a.createElement("div",{className:"tabcontent"},"HOMEWORKS")};var N=function(e){return l.a.createElement("div",{className:"tabcontent"},"RECORDINGS (here the links)")},y=a(10),C=a(6),S=a(11),w=a(12),O=a(13);var j=function(e){return l.a.createElement("div",{className:"tabcontent"},l.a.createElement(y.a,{plugins:[C.b,S.a,w.a,O.a],initialView:"dayGridMonth",events:[{title:"MEETING",date:"2020-08-17"},{title:"CLASS",date:"2020-08-19"},{title:"CLASS",date:"2020-08-22"}],dateClick:function(e){alert(e.dateStr)}}))};var x=function(e){var t=e.userName;console.log("username"+t);var a=Object(n.useState)([]),r=Object(i.a)(a,2),c=r[0],o=r[1],s=Object(n.useState)(""),u=Object(i.a)(s,2),m=u[0],d=u[1],E=Object(n.useState)(""),v=Object(i.a)(E,2),b=v[0],h=v[1];return l.a.createElement("div",{id:"links"},l.a.createElement("h3",null,"You have ",c.length," links"),l.a.createElement("input",{type:"text",placeholder:"Save your link",value:m,onChange:function(e){d(e.target.value)}}),b?l.a.createElement("a",null,b):null,l.a.createElement("button",{onClick:function(){""!==m?(h(""),o(c.concat(m))):h("Please enter a link")}},"Save"),l.a.createElement("h3",null,"links saved by mentors"),l.a.createElement("div",{className:"links-mentors"},l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#",target:"_blank"},"https://github.com/Jose-cod7/tutorials/tree/sql-tutorial/sql"))))),l.a.createElement("h3",null,"links saved by students"),l.a.createElement("div",{className:"links-students"},l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#",target:"_blank"},"https://www.postgresql.org/docs/12/datatype.html")),l.a.createElement("li",null,l.a.createElement("a",{href:"#",target:"_blank"},"https://reactjs.org/tutorial/tutorial.html")),l.a.createElement("li",null,l.a.createElement("a",{href:"#",target:"_blank"},"https://github.com/Jose-cod7/tutorials/tree/sql-tutorial/sql")))),c.map((function(e,t){return l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:m,target:"_blank",key:t},e))))}))))};function I(e){var t=e.index,a=e.userName;return l.a.createElement("div",{className:"maincontainer"},{0:l.a.createElement(p,null),1:l.a.createElement(h,null),2:l.a.createElement(k,null),3:l.a.createElement(N,null),4:l.a.createElement(j,null),5:l.a.createElement(g,null),6:l.a.createElement(x,{userName:a})}[t])}a(24);var H=function(){var e=["Kamel","Thiago","Jose","Ion"],t=Object(n.useState)(0),a=Object(i.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(0),s=Object(i.a)(o,2),u=s[0],m=s[1],v=Object(n.useState)(""),b=Object(i.a)(v,2),h=b[0],f=b[1],g=Object(n.useState)(""),p=Object(i.a)(g,2),k=p[0],N=p[1],y=Object(n.useState)(0),C=Object(i.a)(y,2),S=C[0],w=C[1],O=function(){w(0===S?2:0),2===S&&c(0),m(0)},j=function(){f(""),N(""),w(2),m(2)},x=function(){var e=Object(n.useRef)(null);return[e,function(){e.current&&e.current.focus()}]}(),H=Object(i.a)(x,2),q=H[0],U=H[1];return console.log(u+" "+h),l.a.createElement(l.a.Fragment,null,2===S&&l.a.createElement("div",{className:"outPopUp"}," ",l.a.createElement("form",{className:"form-container",onSubmit:function(t){t.preventDefault(),h!==k?(f(""),N(""),m(1),w(2)):(e.includes(h)&&2===S?w(1):j(),1===S&&c(0))}},l.a.createElement("label",null,"Username:",l.a.createElement("input",{autoFocus:!0,ref:q,type:"text",placeholder:"Enter username",value:h,onChange:function(e){return f(e.target.value)},required:!0})),l.a.createElement("label",null,"Password:",l.a.createElement("input",{type:"text",placeholder:"Enter Password",value:k,onChange:function(e){return function(e){N(e)}(e.target.value)},required:!0})),l.a.createElement("input",{type:"submit",value:"Submit",className:"btn",onClick:U}),l.a.createElement("div",{className:"cancelAndForgot"},l.a.createElement("input",{type:"button",value:"Close",className:" cancel",onClick:O}),l.a.createElement("input",{type:"button",style:{color:"red"},value:0===u?"":1===u?"Forgot password?":"No username matched",className:" cancel",onClick:O})))),l.a.createElement("div",{className:0===S?"all":"allblur"},l.a.createElement(d,{onHeaderClick:function(){w(0===S?2:0),1===S&&c(0)},logIn:S,whichUserHeader:h}),l.a.createElement(E,{onTabsClick:function(e){c(e)},logIn:S,index:r}),l.a.createElement(I,{index:r,userName:h})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a.p+"static/media/migracode-logo.e87ea0c3.png"},8:function(e,t,a){e.exports=a.p+"static/media/login.3a05bb07.png"},9:function(e,t,a){e.exports=a.p+"static/media/Slack.216f7c0d.png"}},[[14,1,2]]]);
//# sourceMappingURL=main.4aa4252b.chunk.js.map