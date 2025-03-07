"use strict";(self.webpackChunkproject_model=self.webpackChunkproject_model||[]).push([[811],{589:(e,r,a)=>{a.d(r,{A:()=>t});var n=a(6540),s=a(4848);const o=e=>{let{id:r,option:a,setSelectedId:o,isSelected:t,isCorrect:i,isIncorrect:l,isDisabled:c}=e;const[d,p]=(0,n.useState)(!1);return(0,s.jsx)("button",{onMouseEnter:()=>{p(!c)},onMouseLeave:()=>{p(!1)},onClick:()=>{c||o(r)},className:`option-container \n    ${t?"selected":""} \n    ${i?"correct":""}\n    ${l?"incorrect":""}\n    ${c?"disabled":""}\n    ${d&&!t?"hovered":""}`,children:a})},t=e=>{let{info:r,options:a,correctAnswerIndex:t,explanation:i}=e;const[l,c]=(0,n.useState)(-1),[d,p]=(0,n.useState)(!1),[u,m]=(0,n.useState)(!1),[j,h]=(0,n.useState)(!1);return(0,s.jsxs)("div",{className:"multiple-answer",children:[(0,s.jsxs)("div",{className:"question-container",children:[(0,s.jsx)("p",{children:r}),a.map(((e,r)=>(0,s.jsx)(o,{id:r,isSelected:l==r,isCorrect:d&&r==t,isIncorrect:l==r&&d&&!u,isDisabled:l!=r&&d,setSelectedId:c,option:e}))),(0,s.jsxs)("div",{className:"buttons-container",children:[(0,s.jsx)("button",{onClick:()=>{-1!=l&&(p(!0),m(l==t))},className:"check-button",children:"Revisar"}),(0,s.jsx)("button",{onClick:()=>{h(!j)},className:"why-button "+(d?"":"hidden"),children:"\xbfPor qu\xe9?"})]})]}),(0,s.jsx)("div",{className:"explanation-container "+(j?"slide-down":""),children:(0,s.jsx)("p",{className:"explanation-text",children:i})})]})}},1377:(e,r,a)=>{a.d(r,{A:()=>n});const n=a.p+"assets/images/control-3ec82a63842e694935c689069a7cb090.jpg"},2332:(e,r,a)=>{a.d(r,{A:()=>s});a(6540);var n=a(4848);const s=e=>{let{children:r}=e;return(0,n.jsx)("div",{className:"multiple-answer-container",children:r})}},8271:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"steps/control","title":"Controlar","description":"Controlar se refiere al proceso de comprobar la calidad del proyecto mientras se elabora. Es decir, asegurarse de que el proyecto se est\xe1 realizando de manera correcta. Una vez se termina una tarea del plan, se revisa la calidad del trabajo para corregir fallos detectados.","source":"@site/docs/steps/control.md","sourceDirName":"steps","slug":"/steps/control","permalink":"/ProjectModel/docs/steps/control","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"control","title":"Controlar","sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Ejecutar","permalink":"/ProjectModel/docs/steps/execute"},"next":{"title":"Valorar","permalink":"/ProjectModel/docs/steps/assess"}}');var s=a(4848),o=a(8453),t=a(589);a(2332);const i={id:"control",title:"Controlar",sidebar_position:5},l="Controlar",c={},d=[{value:"Ejemplos",id:"ejemplos",level:2}];function p(e){const r={h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"controlar",children:"Controlar"})}),"\n",(0,s.jsxs)(r.p,{children:["Controlar se refiere al proceso de ",(0,s.jsx)(r.strong,{children:"comprobar"})," la calidad del proyecto mientras se elabora. Es decir, asegurarse de que el proyecto se est\xe1 realizando de manera correcta. Una vez se termina una tarea del plan, se revisa la calidad del trabajo para corregir fallos detectados."]}),"\n",(0,s.jsx)("img",{src:a(1377).A}),"\n",(0,s.jsx)(r.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Mientras se desarrolla una p\xe1gina web, se pueden escribir pruebas que sirvan para comprobar que los cambios que se van realizando funcionan y no afectan el resto del proyecto."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"En el proceso de realizar un ejercicio matem\xe1tico, se pueden comprobar los pasos que se van realizando para asegurarse que tienen coherencia l\xf3gica y llevar\xe1n a\r\nun resultado correcto."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Mientras se pinta una pared, se puede revisar que el pintado se est\xe1 realizando de manera uniforme."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Mientras se escribe un art\xedculo, se puede leer desde el inicio para asegurar que las ideas mantienen un hilo narrativo."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.A,{info:"Hemos implementado un plan de estudios para mejorar el aprendizaje en nuestra escuela. \xbfQu\xe9 acci\xf3n pertenece a la fase de control?",options:["Evaluar el progreso de los estudiantes","Dise\xf1ar actividades de aprendizaje","Contratar m\xe1s profesores"],correctAnswerIndex:0,explanation:"Evaluar el progreso permite verificar si el plan est\xe1 funcionando y hacer ajustes si es necesario."}),"\n",(0,s.jsx)(t.A,{info:"Lanzamos una campa\xf1a publicitaria en redes sociales. \xbfQu\xe9 acci\xf3n nos ayuda en la fase de control?",options:["Analizar el impacto de la campa\xf1a","Dise\xf1ar m\xe1s anuncios","Invertir m\xe1s dinero en publicidad"],correctAnswerIndex:0,explanation:"Analizar el impacto permite medir resultados antes de tomar m\xe1s decisiones de ejecuci\xf3n."})]})}function u(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,r,a)=>{a.d(r,{R:()=>t,x:()=>i});var n=a(6540);const s={},o=n.createContext(s);function t(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);