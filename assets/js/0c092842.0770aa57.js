"use strict";(self.webpackChunkproject_model=self.webpackChunkproject_model||[]).push([[153],{7729:(o,e,t)=>{t.r(e),t.d(e,{default:()=>b});t(6540);var s=t(1410),a=t(8532),r=t(6347),l=t(6960),i=(t(3127),t(4848));let c=function(o,e,t,s){let a=2*Math.PI*t,r=[{x:o,y:e+t}];for(let l=1;l<6;l++){let i=l*a/s/t,c=Math.PI/2-i;r.push({x:t*Math.cos(c)+o,y:t*Math.sin(c)+e})}return r}(100,100,200,6);console.log(c);const d=[{id:"1-2",source:"1",target:"2",label:"con la informaci\xf3n obtenida"},{id:"2-3",source:"2",target:"3",label:"para consolidar el plan"},{id:"3-4",source:"3",target:"4",label:"para realizar el plan"},{id:"4-5",source:"4",target:"5",label:"para comprobar el proceso"},{id:"5-6",source:"5",target:"6",label:"para reflexionar"},{id:"6-1",source:"6",target:"1",label:"y empezar nuevamente con"}],n=[{id:"1",data:{label:"Informar"},position:c[3],targetPosition:"bottom",sourcePosition:"bottom",style:{backgroundColor:"#55BD51"}},{id:"2",data:{label:"Planificar"},position:c[2],style:{backgroundColor:"#AFEBA2"}},{id:"3",data:{label:"Decidir"},position:c[1],style:{backgroundColor:"#CBEBBC"}},{id:"4",data:{label:"Ejecutar"},position:c[0],sourcePosition:"top",style:{backgroundColor:"#DBE6DA"}},{id:"5",data:{label:"Controlar"},position:c[5],targetPosition:"bottom",sourcePosition:"top",style:{backgroundColor:"#CBEBBC"}},{id:"6",data:{label:"Valorar"},position:c[4],sourcePosition:"top",targetPosition:"bottom",style:{backgroundColor:"#AFEBA2"}},{id:"7",data:{label:"Los saberes"},position:{x:100,y:100},style:{backgroundColor:"#060F04",color:"white"}}],p={1:"/ProjectModel/docs/steps/inform",2:"/ProjectModel/docs/steps/plan",3:"/ProjectModel/docs/steps/decide",4:"/ProjectModel/docs/steps/execute",5:"/ProjectModel/docs/steps/control",6:"/ProjectModel/docs/steps/assess",7:"/ProjectModel/docs/category/los-saberes"},u=()=>{const{colorMode:o}=(0,a.G)(),e=(0,r.W6)();return(0,i.jsxs)("div",{style:{height:"94vh"},children:[(0,i.jsx)("p",{style:{position:"absolute",left:50,top:100,fontSize:18},children:"Presione los nodos para navegar"}),(0,i.jsx)(l.Gc,{onNodeClick:function(o,t){e.push(p[t.id])},colorMode:o,fitView:!0,nodes:n,edges:d})]})},b=()=>(0,i.jsx)(s.A,{children:(0,i.jsx)(u,{})})}}]);