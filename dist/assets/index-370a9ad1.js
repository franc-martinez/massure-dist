import{j as e,r as h,u as q,c as P,C as V,D as T,P as L,G as z}from"./index-25584642.js";import{c as E,e as I,V as A,f as B}from"./yup-ab945057.js";import{N as G,s as S,A as H,t as R,G as U}from"./use-toast-9b7c6b0c.js";import{C as v}from"./index-40c48591.js";import{P as J}from"./ProgressBar-afcce3ae.js";import{c as K}from"./createLucideIcon-d81fb2bf.js";/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Q=K("CircleAlert",O),F=({item:i,itemIds:s,handleCheckItem:t})=>e.jsxs("div",{children:[e.jsx("input",{type:"checkbox",className:"form-checkbox text-primary",id:`formCheckbox-${i.id}`,value:i.id,checked:s&&s.includes(i.id)||!1,onChange:r=>{t(r,i)}}),e.jsx("label",{className:"ms-1.5",htmlFor:`formCheckbox-${i.id}`,children:i.name})]},i.id),W=E().shape({category_ids:I().min(1,"At least one category is required").required("Category is required")}),X=({categories:i,gaugeData:s,arrowAccordion:t,handleIconAccordion:r,validateStep:m,handleNextStep:y,handlePreviousStep:x,renderFieldError:p})=>{const[d,u]=h.useState(s.category_ids||[]),j=(l,g)=>{const c=g.id;u(o=>{let n=[...o];return l.target.checked?n.includes(c)||n.push(c):n=n.filter(f=>f!==c),n})},b=async()=>{s.category_ids=d,await m(s,W)&&y(s)};return e.jsx("div",{className:"space-y-4 min-h",children:e.jsxs(A,{onSubmit:b,children:[e.jsx("div",{children:e.jsx("h1",{className:"text-black text-lg my-4",children:"Categories"})}),e.jsxs("div",{children:[e.jsxs(v,{open:t==="category",toggleCollapse:r("category"),children:[e.jsxs(v.Toggle,{openClass:"text-primary hover:text-primary",className:"py-2 inline-flex gap-x-1 w-full font-semibold text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400",as:"div",children:[e.jsx("i",{className:"mgc_down_line transition-all text-xl"}),e.jsx("span",{children:"Expand all categories"})]}),e.jsx(v.Menu,{className:"w-full overflow-hidden transition-[height] duration-300",children:i.map(l=>e.jsx(F,{item:l,itemIds:d,handleCheckItem:j},`category-${l.id}`))})]}),p("category_ids")]}),e.jsx(G,{handlePreviousStep:x})]})})},Y=E().shape({entity_ids:I().min(1,"At least one entity is required").required("Entity is required")}),Z=({entities:i,gaugeData:s,arrowAccordion:t,handleIconAccordion:r,validateStep:m,handleNextStep:y,handlePreviousStep:x,renderFieldError:p})=>{const[d,u]=h.useState(s.entity_ids||[]),j=(l,g)=>{const c=g.id;u(o=>{let n=[...o];return l.target.checked?n.includes(c)||n.push(c):n=n.filter(f=>f!==c),n})},b=async()=>{s.entity_ids=d,await m(s,Y)&&y(s)};return e.jsx("div",{className:"space-y-4 min-h",children:e.jsxs(A,{onSubmit:b,children:[e.jsx("div",{children:e.jsx("h1",{className:"text-black text-lg my-4",children:"Entities"})}),e.jsxs("div",{children:[e.jsxs(v,{open:t==="entity",toggleCollapse:r("entity"),children:[e.jsxs(v.Toggle,{openClass:"text-primary hover:text-primary",className:"py-2 inline-flex gap-x-1 w-full font-semibold text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400",as:"div",children:[e.jsx("i",{className:"mgc_down_line transition-all text-xl"}),e.jsx("span",{children:"Expand all entities"})]}),e.jsx(v.Menu,{className:"w-full overflow-hidden transition-[height] duration-300",children:i.map(l=>e.jsx(F,{item:l,itemIds:d,handleCheckItem:j},`entity-${l.id}`))})]}),p("entity_ids")]}),e.jsx(G,{handlePreviousStep:x})]})})},D=({entities:i,categories:s,gaugeData:t})=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-black text-lg my-4",children:"Finalize creating gauges"}),e.jsx("div",{id:"dismiss-alert",className:"transition duration-300 bg-teal-50 border border-teal-200 rounded-md p-3",role:"alert",children:e.jsx("div",{className:"flex items-center gap-3",children:e.jsx("div",{className:"flex-grow",children:e.jsx("div",{className:"text-sm text-teal-800 font-medium",children:"Do you want to create this gauge?"})})})})]}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-black text-lg my-4",children:"Properties"}),e.jsxs("div",{children:[e.jsx("h2",{className:"my-1 text-black",children:"Name"}),e.jsx("p",{className:"text-sm min-h-2",children:t.name})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"my-1 text-black",children:"Description"}),e.jsx("div",{className:"text-sm min-h-2",dangerouslySetInnerHTML:{__html:t.description||""}})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"my-1 text-black",children:"Unit"}),e.jsx("p",{className:"text-sm min-h-2",children:t.unit})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"my-1 text-black",children:"Time interval"}),e.jsx("p",{className:"text-sm min-h-2",children:t.time_interval})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"my-1 text-black",children:"From"}),e.jsx("p",{className:"text-sm",children:t.started_on})]})]}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-black text-lg mt-4 mb-2",children:"Category"}),e.jsx("div",{className:"min-h-2",children:t.category_ids&&e.jsx("div",{children:s.filter(r=>t.category_ids.includes(r.id)).map(r=>e.jsx("p",{children:r.name},`category-${r.id}`))})})]}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-black text-lg mt-4 mb-2",children:"Entity"}),e.jsx("div",{className:"min-h-2",children:t.entity_ids&&e.jsx("div",{children:i.filter(r=>t.entity_ids.includes(r.id)).map(r=>e.jsx("p",{children:r.name},`entity-${r.id}`))})})]})]}),ee={name:"",description:"",unit:"",time_interval:"",started_on:"",ended_on:"",category_ids:[],import_only:!1,entity_ids:[]};function le(){const[i,s]=h.useState(0),[t,r]=h.useState(ee),[m,y]=h.useState({}),[x,p]=h.useState(""),d=q(),{categories:u,entities:j,loading:b,error:l}=P(a=>({entities:a.Entity.entities,categories:a.Category.categories,loading:a.Category.loading&&a.Entity.loading,error:a.Category.error||a.Entity.error}));h.useEffect(()=>{d(V()),d(T())},[d]);const g=async(a,N)=>{try{return await N.validate(t,{abortEarly:!1}),y({}),!0}catch(w){if(w instanceof B){const _={};w.inner.forEach(k=>{k.path&&(_[k.path]=k.message)}),y(_)}return!1}},c=async a=>{r(a),s(N=>Math.min(N+1,S.length-1))},o=()=>{s(a=>Math.max(a-1,0))},n=()=>{s(0)},f=a=>m[a]?e.jsxs("p",{className:"mt-1 text-sm text-red-600 flex items-center",children:[e.jsx(Q,{className:"w-4 h-4 mr-1"}),m[a]]}):null,C=a=>()=>{p(a===x?null:a)},M=async()=>{await z(t).then(()=>{R({title:"Gauge Created",description:"Gauge created successfully!"})})},$=()=>{switch(i){case 0:return e.jsx(U,{gaugeData:t,handlePreviousStep:o,handleNextStep:c});case 1:return e.jsx(X,{categories:u,gaugeData:t,arrowAccordion:x,handleIconAccordion:C,validateStep:g,handleNextStep:c,handlePreviousStep:o,renderFieldError:f});case 2:return e.jsx(Z,{entities:j,gaugeData:t,arrowAccordion:x,handleIconAccordion:C,validateStep:g,handleNextStep:c,handlePreviousStep:o,renderFieldError:f});case 3:return e.jsx(D,{entities:j,categories:u,gaugeData:t});default:return null}};return e.jsxs(e.Fragment,{children:[e.jsx(L,{title:"Manual",name:"Manual"}),e.jsx("div",{className:"min-h-screen from-blue-50 to-indigo-100 p-6",children:e.jsxs("div",{className:"max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8",children:[e.jsx(J,{steps:S,currentStep:i}),$(),i===3&&e.jsxs("div",{className:"flex justify-between max-w-3xl mx-auto py-8",children:[e.jsxs("button",{type:"button",onClick:o,className:"bg-white text-gray-700 border border-gray px-4 py-2 rounded-md hover:bg-gray-300",children:[e.jsx(H,{className:"inline-block w-4 h-4 mr-2"}),"Previous step"]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{type:"button",onClick:M,className:"bg-blue-600 text-white border border-gray px-4 py-2 rounded-md hover:bg-indigo-700",children:"Save"}),e.jsx("button",{type:"button",onClick:n,className:"bg-white text-gray-700 border border-gray px-4 py-2 rounded-md hover:bg-gray-300",children:"Cancel"})]})]})]})})]})}export{le as default};
