"use strict";(self.webpackChunkproject_model=self.webpackChunkproject_model||[]).push([[995],{589:(e,n,r)=>{r.d(n,{A:()=>t});var s=r(6540),a=r(4848);const o=e=>{let{id:n,option:r,setSelectedId:o,isSelected:t,isCorrect:i,isIncorrect:c,isDisabled:l}=e;const[d,u]=(0,s.useState)(!1);return(0,a.jsx)("button",{onMouseEnter:()=>{u(!l)},onMouseLeave:()=>{u(!1)},onClick:()=>{l||o(n)},className:`option-container \n    ${t?"selected":""} \n    ${i?"correct":""}\n    ${c?"incorrect":""}\n    ${l?"disabled":""}\n    ${d&&!t?"hovered":""}`,children:r})},t=e=>{let{info:n,options:r,correctAnswerIndex:t,explanation:i}=e;const[c,l]=(0,s.useState)(-1),[d,u]=(0,s.useState)(!1),[p,m]=(0,s.useState)(!1),[f,h]=(0,s.useState)(!1);return(0,a.jsxs)("div",{className:"multiple-answer",children:[(0,a.jsxs)("div",{className:"question-container",children:[(0,a.jsx)("p",{children:n}),r.map(((e,n)=>(0,a.jsx)(o,{id:n,isSelected:c==n,isCorrect:d&&n==t,isIncorrect:c==n&&d&&!p,isDisabled:c!=n&&d,setSelectedId:l,option:e}))),(0,a.jsxs)("div",{className:"buttons-container",children:[(0,a.jsx)("button",{onClick:()=>{-1!=c&&(u(!0),m(c==t))},className:"check-button",children:"Revisar"}),(0,a.jsx)("button",{onClick:()=>{h(!f)},className:"why-button "+(d?"":"hidden"),children:"\xbfPor qu\xe9?"})]})]}),(0,a.jsx)("div",{className:"explanation-container "+(f?"slide-down":""),children:(0,a.jsx)("p",{className:"explanation-text",children:i})})]})}},2332:(e,n,r)=>{r.d(n,{A:()=>a});r(6540);var s=r(4848);const a=e=>{let{children:n}=e;return(0,s.jsx)("div",{className:"multiple-answer-container",children:n})}},7771:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"steps/inform","title":"Informar","description":"Antes de empezar cualquier proyecto, independientemente de su naturaleza, primero debemos informarnos.","source":"@site/docs/steps/inform.md","sourceDirName":"steps","slug":"/steps/inform","permalink":"/ProjectModel/docs/steps/inform","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Ejecutar","permalink":"/ProjectModel/docs/steps/execute"},"next":{"title":"Planificar","permalink":"/ProjectModel/docs/steps/plan"}}');var a=r(4848),o=r(8453),t=r(589),i=r(2332);const c={},l="Informar",d={},u=[{value:"\xbfQu\xe9 es informarse?",id:"qu\xe9-es-informarse",level:2},{value:"Ejemplos",id:"ejemplos",level:2}];function p(e){const n={admonition:"admonition",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"informar",children:"Informar"})}),"\n",(0,a.jsxs)(n.p,{children:["Antes de empezar cualquier proyecto, independientemente de su naturaleza, primero debemos ",(0,a.jsx)(n.strong,{children:"informarnos"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"qu\xe9-es-informarse",children:"\xbfQu\xe9 es informarse?"}),"\n",(0,a.jsxs)(n.p,{children:["Informarse implica ",(0,a.jsx)(n.strong,{children:"recopilar las informaciones necesarias para resolver una tarea"}),". Es decir, conlleva un\r\nproceso investigativo que hace uso de diversas fuentes de informaci\xf3n, como libros, revistas, videos, manuales, etc."]}),"\n",(0,a.jsx)(n.admonition,{title:"Informarse es un paso fundamental",type:"tip",children:(0,a.jsxs)(n.p,{children:["Muchas personas saltan a elaborar un proyecto sin antes informarse correctamente acerca de lo que conlleva. Informarse sienta las ",(0,a.jsx)(n.strong,{children:"bases"})," necesarias para desarrollar un proyecto con la menor cantidad de contratiempos posible."]})}),"\n",(0,a.jsx)(n.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(t.A,{info:"Suponga que queremos planear una fiesta de cumplea\xf1os. \xbfCu\xe1l podr\xeda ser nuestro primer paso?",options:["Ir a la tienda a comprar decoraciones","Comprar el queque","Preguntarle al cumplea\xf1ero acerca de sus preferencias"],correctAnswerIndex:2,explanation:"Las primeras dos opciones no se relacionan con informarse, sino con actuar, mientras que la \xfaltima es la \xfanica que recopila informaci\xf3n."}),(0,a.jsx)(t.A,{info:"Suponga que queremos estudiar en una universidad p\xfablica. \xbfCu\xe1l podr\xeda ser nuestro primer paso?",options:["Leer el plan de estudios de las carreras","Hacer el examen de admisi\xf3n","Pagar la matr\xedcula"],correctAnswerIndex:0,explanation:"Hacer el examen de admisi\xf3n y pagar la matr\xedcula se refieren a acciones de ejecuci\xf3n, mientras que leer implica recopilar informaci\xf3n."})]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>i});var s=r(6540);const a={},o=s.createContext(a);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);