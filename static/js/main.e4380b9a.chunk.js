(this.webpackJsonpcv_builder=this.webpackJsonpcv_builder||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n(2),r=n.n(s),a=n(5),d=n.n(a),l=(n(19),n(6)),c=n(7),h=n(11),j=n(10),o=(n(20),function(e){var t;return t="1"===e.sT?{border:"none",width:"100%",height:"50px",fontSize:"22px"}:{backgroundColor:"rgb(242, 245, 250)",border:"none",width:"100%",height:"50px",fontSize:"22px"},Object(i.jsx)("input",{style:t,onChange:e.handler,id:e.id,className:e.cName,value:e.val,placeholder:e.ph})}),x=function(e){var t={fontSize:e.font[0],fontWeight:"bold",marginBottom:"10%"};return Object(i.jsxs)("div",{style:{fontSize:"16pt"},children:[" ",Object(i.jsxs)("p",{style:t,children:[" ",e.fName," ",e.lName," "]})]})},b=function(e){return Object(i.jsx)("div",{style:{fontSize:"9pt"},children:Object(i.jsx)("p",{style:{fontSize:e.font[4]},children:e.info})})},f=function(e){return Object(i.jsxs)("p",{onKeyDown:e.handler,tabIndex:"0",n:e.n,className:"AddButton",onClick:e.handler,children:[e.text," "]})},p=function(e){return Object(i.jsx)("div",{style:{border:"2px solid rgb(147, 148, 150)",marginBottom:"10px"},children:Object(i.jsxs)("div",{style:{display:"flex",margin:"10px"},children:[Object(i.jsx)(o,{handler:e.handler,id:e.id1,cName:e.cname,ph:e.ph1}),Object(i.jsx)(o,{handler:e.handler,id:e.id2,cName:e.cname,ph:e.ph2})]})})},O=function(e){return Object(i.jsxs)("div",{className:"About",children:[Object(i.jsx)("input",{style:{border:"none",width:"100%",height:"50px",fontSize:"22px"},id:"aboutmeheader",onChange:e.handler,placeholder:"Om deg - endre"}),Object(i.jsx)("textarea",{style:{width:"100%",height:"30vh",resize:"none",border:"none",backgroundColor:"rgb(242, 245, 250)",fontSize:"15pt"},id:"aboutMe",onChange:e.handler})]})},u=function(e){var t={fontSize:e.font[4],wordWrap:"break-word",width:"100%"};return Object(i.jsxs)("div",{className:"DisplayAboutMe",children:[Object(i.jsx)("div",{style:{fontSize:"14pt"},children:Object(i.jsx)("h1",{style:{fontSize:e.font[0]},className:"header",children:e.header})}),Object(i.jsx)("div",{style:{fontSize:"9pt"},children:Object(i.jsxs)("p",{style:t,className:"content",children:[" ",e.content," "]})})]})},v=function(e){var t={display:"flex",width:"100%",marginBottom:"10px"};return Object(i.jsx)("div",{style:{display:"flex",flexDirection:"column",width:"100%",marginBottom:"30px",border:"2px solid rgb(147, 148, 150)"},children:Object(i.jsxs)("div",{style:{margin:"10px"},children:[Object(i.jsxs)("div",{style:t,children:[Object(i.jsx)(o,{id:"Grad",handler:e.handler,ph:e.ph[0],cName:e.cname}),Object(i.jsx)(o,{id:"Skole",handler:e.handler,ph:e.ph[1],cName:e.cname})]}),Object(i.jsxs)("div",{style:t,children:[Object(i.jsxs)("div",{style:{display:"flex",width:"100%",marginRight:"40px"},children:[Object(i.jsx)(o,{id:"Start",handler:e.handler,ph:e.ph[2],cName:e.cname}),Object(i.jsx)(o,{id:"Slutt",handler:e.handler,ph:e.ph[3],cName:e.cname})]}),Object(i.jsx)(o,{handler:e.handler,id:"By",ph:e.ph[4],cName:e.cname})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:"Beskrivelse"}),Object(i.jsx)("textarea",{style:{width:"100%",height:"30vh",resize:"none",border:"none",backgroundColor:"rgb(242, 245, 250)",fontSize:"15pt"},id:"Beskrivelse",onChange:e.handler,className:e.cname})]})]})})},m=function(e){var t={margin:"10px",display:"flex",flexDirection:"row"};return Object(i.jsxs)("div",{style:{marginBottom:"30px",border:"2px solid rgb(147, 148, 150)"},children:[Object(i.jsxs)("div",{style:t,children:[Object(i.jsx)(o,{id:"Navn",handler:e.handler,cName:e.cname,ph:"Referentens Navn"}),Object(i.jsx)(o,{id:"Org",handler:e.handler,cName:e.cname,ph:"Organisasjon/stilling"})]}),Object(i.jsxs)("div",{style:t,children:[Object(i.jsx)(o,{id:"Tlf",handler:e.handler,cName:e.cname,ph:"Telefonnummer"}),Object(i.jsx)(o,{id:"Email",handler:e.handler,cName:e.cname,ph:"Email"})]})]})},g=function(e){return Object(i.jsx)("div",{style:{border:"2px solid rgb(147, 148, 150)",marginBottom:"10px"},children:Object(i.jsx)("div",{style:{margin:"10px"},children:Object(i.jsx)(o,{id:"skill",cName:"skillAdders",handler:e.handler})})})},S=function(e){var t="",n="",s="";void 0!==e.info[1]&&(n=", "),void 0!==e.info[2]&&(s=", "),void 0!==e.info[4]&&(t=" - ");var r={fontSize:e.font[3],fontWeight:"bold"},a={fontSize:e.font[5]},d={fontSize:e.font[4]};return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{style:{fontSize:"11pt"},children:Object(i.jsxs)("h2",{style:r,children:[" ",e.info[0],n,e.info[1],s,e.info[2],"  "]})}),Object(i.jsx)("div",{style:{fontSize:"7pt"},children:Object(i.jsxs)("p",{style:a,children:[e.info[3],t,e.info[4]," "]})}),Object(i.jsx)("div",{style:{fontSize:"9pt"},children:Object(i.jsxs)("p",{style:d,children:[e.info[5]," "]})})]})},y=function(e){var t={fontSize:e.font[4],margin:"0"},n={fontSize:e.font[3],margin:"0"},s="",r="";return void 0!==e.info[1]&&(r=", "),void 0!==e.info[3]&&(s=" | "),Object(i.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(i.jsx)("div",{style:{fontSize:"11pt"},children:Object(i.jsxs)("h2",{style:n,children:[e.info[0],r,e.info[1]," "]})}),Object(i.jsx)("div",{style:{fontSize:"9pt"},children:Object(i.jsxs)("p",{style:t,children:[e.info[2],s,e.info[3]," "]})})]})},z=function(e){var t="";void 0!=e.Niv\u00e5&&(t=" - ");var n={paddingLeft:"2%",fontSize:e.font[4]};return Object(i.jsx)("div",{style:{fontSize:"9pt"},children:Object(i.jsxs)("p",{style:n,children:[e.Spr\u00e5k,t,e.Niv\u00e5]})})},N=n(8),k=n(9),w=(n(21),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={fName:"",lName:"",tlf:"",email:"",aboutmeheader:"Om meg",aboutMe:"",Detaljer:"Detaljer",Linker:"Linker",Ferdigheter:"Ferdigheter","Spr\xe5k":"Spr\xe5k",Utdanning:"Utdanning",Erfaring:"Erfaring",Referanse:"Referanser",Fritiden:"P\xe5 fritiden",linkAdders:[],skillAdders:[],languageAdders:[],utdanning:[],erfaringer:[],referanser:[],fritider:[],editPageOn:!0,size:{width:"100%",height:"100%"},size2:{width:"35vw",height:"48vw"},textSize:["0.9vw","0.75vw","0.7vw","0.65vw","0.5vW","0.4vw"]},e.inputHandler=function(t){var n={};n[t.target.id]=t.target.value,e.setState(n)},e.indexedInputHandler=function(t,n){var i=n.target.className,s=e.state[i],r=s[t];r[n.target.id]=n.target.value,s[t]=r,e.setState(s)},e.addHandler=function(t){if(13===t.keyCode||"click"===t.type){var n=t.target.getAttribute("n"),i=e.state[n].slice();i.push({});var s={};s[n]=i,e.setState(s)}},e.stylesetter1=function(){e.setState({size2:{width:"21cm",height:"29.7cm"}})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state.languageAdders.map((function(t,n){return Object(i.jsx)(p,{handler:e.indexedInputHandler.bind(e,n),cname:"languageAdders",id1:"spr\xe5k",id2:"niv\xe5",ph1:"Spr\xe5k",ph2:"Niv\xe5"})})),n=this.state.skillAdders.map((function(t,n){return Object(i.jsx)(g,{handler:e.indexedInputHandler.bind(e,n)})})),s=this.state.utdanning.map((function(t,n){return Object(i.jsx)(v,{cname:"utdanning",handler:e.indexedInputHandler.bind(e,n),ph:["Grad","Skole","Start","Slutt","By"]})})),r=this.state.erfaringer.map((function(t,n){return Object(i.jsx)(v,{cname:"erfaringer",handler:e.indexedInputHandler.bind(e,n),ph:["Tittel/jobb","Ansetter/institusjon","Start","Slutt","By"]})})),a=this.state.referanser.map((function(t,n){return Object(i.jsx)(m,{handler:e.indexedInputHandler.bind(e,n),cname:"referanser"})})),d=this.state.fritider.map((function(t,n){return Object(i.jsx)(v,{cname:"fritider",handler:e.indexedInputHandler.bind(e,n),ph:["Funksjonstittel/handling","Ansetter/institusjon","Start","Slutt","By"]})})),l=this.state.skillAdders.map((function(t,n){return Object(i.jsx)(b,{font:e.state.textSize,info:t.skill})})),c=this.state.languageAdders.map((function(t,n){return Object(i.jsx)(z,{font:e.state.textSize,"Spr\xe5k":t.spr\u00e5k,"Niv\xe5":t.niv\u00e5})})),h=this.state.utdanning.map((function(t,n){return Object(i.jsx)(S,{info:[t.Grad,t.Skole,t.By,t.Start,t.Slutt,t.Beskrivelse],font:e.state.textSize})})),j=this.state.erfaringer.map((function(t,n){return Object(i.jsx)(S,{info:[t.Grad,t.Skole,t.By,t.Start,t.Slutt,t.Beskrivelse],font:e.state.textSize})})),w=this.state.fritider.map((function(t,n){return Object(i.jsx)(S,{info:[t.Grad,t.Skole,t.By,t.Start,t.Slutt,t.Beskrivelse],font:e.state.textSize})})),H=this.state.referanser.map((function(t,n){return Object(i.jsx)(y,{font:e.state.textSize,info:[t.Navn,t.Org,t.Tlf,t.Email],children:" "})})),B=Object(i.jsx)("div",{style:{fontSize:"12"},children:Object(i.jsxs)("h1",{style:{fontSize:this.state.textSize[2]},id:"Detaljer",children:[this.state.Detaljer," "]})}),A=Object(i.jsx)("div",{style:{fontSize:"12"},children:Object(i.jsxs)("h1",{style:{fontSize:this.state.textSize[2]},id:"Ferdigheter",children:[this.state.Ferdigheter," "]})}),C=Object(i.jsx)("div",{style:{fontSize:"12"},children:Object(i.jsxs)("h1",{style:{fontSize:this.state.textSize[2]},id:"Spr\xe5k",children:[this.state.Spr\u00e5k," "]})}),D=Object(i.jsx)("div",{style:{fontSize:"14"},children:Object(i.jsxs)("h1",{style:{fontSize:this.state.textSize[1]},id:"Utdanning",children:[this.state.Utdanning," "]})}),E=Object(i.jsx)("div",{style:{fontSize:"14"},children:Object(i.jsxs)("h1",{style:{fontSize:this.state.textSize[1]},id:"Erfaring",children:[this.state.Erfaring," "]})}),F=Object(i.jsx)("div",{style:{fontSize:"14"},children:Object(i.jsxs)("h1",{style:{fontSize:this.state.textSize[1]},id:"Referanse",children:[this.state.Referanse," "]})}),T=Object(i.jsx)("div",{style:{fontSize:"14"},children:Object(i.jsxs)("h1",{style:{fontSize:this.state.textSize[1]},id:"Fritiden",children:[this.state.Fritiden," "]})}),L=Object(i.jsx)("div",{className:"EditPage",children:Object(i.jsxs)("div",{className:"EditPageWrapper",children:[Object(i.jsxs)("div",{className:"Detaljer",children:[Object(i.jsx)(o,{sT:"1",id:"Detaljer",handler:this.inputHandler,ph:"Detaljer (kan endres)"}),Object(i.jsxs)("div",{className:"DetaljWrapper",children:[Object(i.jsxs)("div",{className:"LeftSide",children:[Object(i.jsx)("p",{children:"Fornavn"}),Object(i.jsx)(o,{handler:this.inputHandler,id:"fName",came:"Personalia",val:this.state.fName})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:"Etternavn"}),Object(i.jsx)(o,{handler:this.inputHandler,id:"lName",cName:"Personalia",val:this.state.lName})]})]}),Object(i.jsxs)("div",{className:"DetaljWrapper",children:[Object(i.jsxs)("div",{className:"LeftSide",children:[Object(i.jsx)("p",{children:"Telefonnummer"}),Object(i.jsx)(o,{handler:this.inputHandler,id:"tlf",cName:"Personalia",val:this.state.tlf})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:"Email"}),Object(i.jsx)(o,{handler:this.inputHandler,id:"email",cName:"Personalia",val:this.state.email})]})]}),Object(i.jsx)(O,{handler:this.inputHandler})]}),Object(i.jsxs)("ul",{className:"Skill",children:[Object(i.jsx)(o,{sT:"1",id:"Ferdigheter",handler:this.inputHandler,ph:"Ferdigheter (kan endres)"}),Object(i.jsxs)("div",{children:[n," "]}),Object(i.jsx)(f,{n:"skillAdders",text:"+ Legg til ferdighet",handler:this.addHandler})]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)(o,{sT:"1",id:"Spr\xe5k",handler:this.inputHandler,ph:"Spr\xe5k (kan endres)"}),Object(i.jsxs)("div",{children:[t," "]}),Object(i.jsx)(f,{n:"languageAdders",text:"+ Legg til spr\xe5k",handler:this.addHandler})]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)(o,{sT:"1",id:"Utdanning",handler:this.inputHandler,ph:"Utdanning (kan endres)"}),Object(i.jsxs)("div",{children:[s," "]}),Object(i.jsx)(f,{n:"utdanning",text:"+ Legg til utdanning",handler:this.addHandler,children:" "})]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)(o,{sT:"1",id:"Erfaring",handler:this.inputHandler,ph:"Erfaring (kan endres)"}),Object(i.jsxs)("div",{children:[r," "]}),Object(i.jsx)(f,{n:"erfaringer",text:"+ Legg til erfaring",handler:this.addHandler,children:" "})]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)(o,{sT:"1",id:"Referanser",handler:this.inputHandler,ph:"Referanser (kan endres)"}),Object(i.jsxs)("div",{children:[a," "]}),Object(i.jsx)(f,{n:"referanser",text:"+ Legg til referanse",handler:this.addHandler,children:" "})]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)(o,{sT:"1",id:"Fritiden",handler:this.inputHandler,ph:"P\xe5 fritiden (kan endres)"}),Object(i.jsxs)("div",{children:[d," "]}),Object(i.jsx)(f,{n:"fritider",text:"+ Legg til aktivitet",handler:this.addHandler,children:" "})]})]})});return Object(i.jsxs)("div",{className:"App",children:[L,Object(i.jsx)("button",{onMouseDown:this.stylesetter1,className:"DownloadButton",onMouseUp:function(){e.setState({textSize:["100%","100%","100%","100%","100%","100%"]});var t=document.getElementById("capture");console.log(t),k.a(t).then((function(t){var n=new N.a;n.addImage(t,"pdf",0,0),n.save("download.pdf"),e.setState({size1:{width:"100%",height:"100%"},size2:{width:"35vw",height:"48vw"},textSize:["0.9vw","0.75vw","0.7vw","0.65vw","0.5vW","0.4vw"]})}))},children:" Export pdf"}),Object(i.jsx)("div",{className:"Cv",style:this.state.size1,children:Object(i.jsxs)("div",{className:"CvWrapper",id:"capture",style:this.state.size2,children:[Object(i.jsx)("div",{className:"SideBarWrapper",children:Object(i.jsxs)("div",{className:"SideBar",children:[Object(i.jsx)(x,{font:this.state.textSize,fName:this.state.fName,lName:this.state.lName}),Object(i.jsxs)("div",{className:" SectionSplitter1",children:[B,Object(i.jsx)(b,{font:this.state.textSize,info:this.state.tlf}),Object(i.jsx)(b,{font:this.state.textSize,info:this.state.email})]}),Object(i.jsxs)("div",{className:" SectionSplitter1",children:[A,l]}),Object(i.jsxs)("div",{className:" SectionSplitter1",children:[C,c]})]})}),Object(i.jsx)("div",{className:"MainContentWrapper",children:Object(i.jsxs)("div",{className:"MainContent",children:[Object(i.jsx)("div",{className:"SectionSplitter",children:Object(i.jsx)(u,{font:this.state.textSize,header:this.state.aboutmeheader,content:this.state.aboutMe})}),Object(i.jsxs)("div",{className:"SectionSplitter",children:[D,h]}),Object(i.jsxs)("div",{className:"SectionSplitter",children:[E,j]}),Object(i.jsxs)("div",{className:"SectionSplitter",children:[F,H]}),Object(i.jsxs)("div",{className:"SectionSplitter",children:[T,w]})]})})]})})]})}}]),n}(s.Component)),H=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,399)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),r(e),a(e)}))};d.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(w,{})}),document.getElementById("root")),H()}},[[22,1,3]]]);
//# sourceMappingURL=main.e4380b9a.chunk.js.map