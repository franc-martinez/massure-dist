import{j as e,F as I,o as O,r as p,u as L,c as _,p as A,P as R,L as S}from"./index-020c9027.js";import{f as v,u as G,G as T,a as q}from"./GaugeFilter-9f93b900.js";import{M as E}from"./PopoverLayout-6a018b4d.js";import{R as B}from"./quill.bubble-4d23126f.js";import{V as P,F as K}from"./yup-6604d8dd.js";import{r as U,t as V,a as Y}from"./index-0ea01b0f.js";import"./index-8f0e4179.js";const D=({className:c,value:r,options:a,placeholder:i,onChange:m})=>e.jsx(e.Fragment,{children:e.jsx(I,{className:c,"data-enable-time":!0,value:r,options:a,onChange:m?s=>m(s[0]):void 0,placeholder:i})});var F={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(c){(function(){var r={}.hasOwnProperty;function a(){for(var s="",x=0;x<arguments.length;x++){var t=arguments[x];t&&(s=m(s,i(t)))}return s}function i(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return a.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var x="";for(var t in s)r.call(s,t)&&s[t]&&(x=m(x,t));return x}function m(s,x){return x?s?s+" "+x:s+x:s}c.exports?(a.default=a,c.exports=a):window.classNames=a})()})(F);var $=F.exports;const M=O($);function H(c,r){U(2,arguments);var a=V(c),i=Y(r);if(isNaN(i))return new Date(NaN);if(!i)return a;var m=a.getDate(),s=new Date(a.getTime());s.setMonth(a.getMonth()+i+1,0);var x=s.getDate();return m>=x?s:(a.setFullYear(s.getFullYear(),s.getMonth(),m),a)}const Q={toolbar:[["bold","italic","underline","strike"],[{script:"super"},{script:"sub"}],[{header:[!1,1,2,3,4,5,6]},"blockquote","code-block"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}]]},W=[{id:1,comment:"First comment",author:{name:"Ralph Wagner"},createdAt:new Date},{id:2,comment:"Second comment",author:{name:"Ralph Wagner"},createdAt:new Date}],J=({open:c,gauge:r,toggleModal:a})=>{const[i,m]=p.useState(W),[s,x]=p.useState(""),[t,u]=p.useState(null),[j,n]=p.useState(!1),b=l=>{n(!1),u(l),x(l.comment)},f=l=>{m(i.filter(w=>w.id!==l))},N=()=>{n(!0),s&&(t&&m(i.map(l=>(l.id===t.id&&(l.comment=s),l))),a())},[y,k]=p.useState(),[C,d]=p.useState(),[h,o]=p.useState(),g=[{name:"Month",value:1},{name:"Quarter",value:3},{name:"Half a year",value:6},{name:"Year",value:12}];return p.useEffect(()=>{y&&h&&d(H(y,h))},[y,h]),e.jsx(E,{showModal:c,toggleModal:a,panelClassName:"sm:max-w-lg",isStatic:!0,placement:"justify-center items-center",children:e.jsxs("div",{className:"duration-500 ease-out transition-all sm:w-full m-3 sm:mx-auto flex flex-col bg-white border shadow-sm rounded-md dark:bg-slate-800 dark:border-gray-700",children:[e.jsxs("div",{className:"flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700",children:[e.jsxs("h3",{className:"font-medium text-gray-800 dark:text-white text-lg mr-8",children:["Comments: ",r==null?void 0:r.name]}),e.jsx("button",{onClick:a,className:"inline-flex justify-center items-center h-8 w-8 dark:text-gray-200",children:e.jsx("i",{className:"mgc_close_line text-xl"})})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("div",{className:"flex flex-col gap-2 mb-4 border-b pb-2",children:i.map((l,w)=>e.jsxs("div",{className:M("p-2 border rounded-lg",{"border-primary":(t==null?void 0:t.id)===l.id}),children:[e.jsxs("h3",{children:["On ",v(l.createdAt,"MMMM, d yyyy"),","," ",e.jsx("span",{className:"text-primary",children:l.author.name})]}),e.jsx("div",{className:"text-sm px-1",dangerouslySetInnerHTML:{__html:l.comment}}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsxs("button",{onClick:()=>b(l),className:"btn border text-xs px-2 py-1 border-primary text-primary",children:[e.jsx("i",{className:"mgc_edit_3_line mr-1"})," Edit"]}),e.jsxs("button",{onClick:()=>f(w),className:"btn border text-xs px-2 py-1 border-danger text-danger",children:[e.jsx("i",{className:"mgc_delete_2_line mr-1"})," Delete"]})]})]},`comment-${w}`))}),e.jsxs(P,{onSubmit:N,children:[e.jsx("h2",{className:"text-lg mb-2",children:"Add comments"}),e.jsxs("div",{className:"mb-3",children:[e.jsx(B,{id:"description",modules:Q,className:"text-black",theme:"snow",placeholder:"Add comment...",value:s,onChange:l=>x(l.replaceAll("<p><br></p>","").trim())}),j&&!s&&e.jsx("p",{className:"text-xs text-red-600 mt-2",children:"Comment is required"})]}),e.jsx(K,{label:"Tags",type:"text",name:"tags",containerClass:"mb-4",className:"form-input",labelClassName:"block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2",required:!0}),e.jsxs("div",{className:M("grid gap-3","grid-cols-3"),children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2",children:"Period From"}),e.jsx("div",{className:"pb-2",children:e.jsx(D,{className:"form-input",options:{enableTime:!1},value:y,onChange:k})})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2",children:"Between"}),e.jsx("div",{className:"pb-2",children:e.jsxs("select",{className:"form-select mb-2",value:h,onChange:l=>o(+l.target.value),children:[e.jsx("option",{value:""}),g.map(l=>e.jsx("option",{value:l.value,children:l.name},l.value))]})})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2",children:"Until"}),e.jsx("div",{className:"pb-2",children:e.jsx(D,{className:"form-input",options:{enableTime:!1},value:C,onChange:d})})]})]}),e.jsxs("div",{className:"flex justify-end items-center gap-2 pt-3 border-t dark:border-slate-700",children:[e.jsx("button",{className:"py-2 px-5 inline-flex justify-center items-center gap-2 rounded dark:text-gray-200 border dark:border-slate-700 font-medium hover:bg-slate-100 hover:dark:bg-slate-700 transition-all",onClick:a,type:"button",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn text-white bg-primary",children:"Save"})]})]})]})]})})},z=({open:c,gauge:r,toggleModal:a})=>e.jsx(E,{showModal:c,toggleModal:a,panelClassName:"sm:max-w-lg",isStatic:!0,placement:"justify-center items-center",children:e.jsxs("div",{className:"duration-500 ease-out transition-all sm:w-full m-3 sm:mx-auto flex flex-col bg-white border shadow-sm rounded-md dark:bg-slate-800 dark:border-gray-700",children:[e.jsxs("div",{className:"flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700",children:[e.jsx("h3",{className:"font-medium text-gray-800 dark:text-white text-lg mr-8",children:"General Information"}),e.jsx("button",{onClick:a,className:"inline-flex justify-center items-center dark:text-gray-200",children:e.jsx("i",{className:"mgc_close_line text-xl"})})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("div",{className:"mb-2",children:e.jsxs("p",{children:[e.jsx("b",{children:"Unit + elaboration"}),": Medium-haul flights average (km)"]})}),e.jsx("div",{className:"mb-2",children:e.jsxs("p",{children:[e.jsx("b",{children:"Scope 1"}),": -"]})}),e.jsx("div",{className:"mb-2",children:e.jsxs("p",{children:[e.jsx("b",{children:"Scope 2 (Location based)"}),": -"]})}),e.jsx("div",{className:"mb-2",children:e.jsxs("p",{children:[e.jsx("b",{children:"Scope 2 (Market based)"}),": -"]})}),e.jsx("div",{className:"mb-2",children:e.jsxs("p",{children:[e.jsx("b",{children:"Scope 3"}),":  172 g / km"]})}),e.jsx("div",{className:"mb-2",children:e.jsxs("p",{children:[e.jsx("b",{children:"Energy"}),": 2.8 MJ / km"]})}),e.jsx("div",{className:"mb-2",children:e.jsxs("p",{children:[e.jsx("b",{children:"Money"}),": 0.35 EUR / km"]})})]})]})}),X=()=>{const c=L(),{searchKey:r,filter:a}=G(),{gauges:i,loading:m,error:s}=_(d=>({gauges:d.Gauge.gauges,loading:d.Gauge.loading,error:d.Gauge.error}));p.useEffect(()=>{c(A())},[c]);const x=p.useMemo(()=>i==null?void 0:i.filter(d=>{var h,o,g;return!r&&!a.categories.length&&!a.entities.length?!0:(d.name.toLowerCase().includes(r.toLowerCase())||((h=d.description)==null?void 0:h.toLowerCase().includes(r.toLowerCase())))&&(!a.categories.length||((o=d.categories)==null?void 0:o.some(l=>a.categories.includes(l.id))))&&(!a.entities.length||((g=d.entites)==null?void 0:g.some(l=>a.entities.includes(l.id))))}),[r,a,i]),[t,u]=p.useState(null),[j,n]=p.useState(!1),[b,f]=p.useState(!1),[N,y]=p.useState({}),k=d=>{u(d||null),n(!!d)},C=d=>{u(d||null),f(!!d)};return p.useEffect(()=>{let d={};x.forEach(h=>{var g;const o=((g=h.categories)==null?void 0:g.reduce((l,w)=>`${l}-${w.id}`,""))||"";d[o]?d[o].gauges=[...d[o].gauges,h]:d[o]={categories:h.categories,gauges:[h]}}),y(d)},[x]),e.jsxs("div",{className:"pt-4",children:[Object.keys(N).map(d=>{var h;return e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center flex-wrap text-xs bg-blue-500 px-4",children:(h=N[d].categories)==null?void 0:h.map((o,g)=>e.jsxs("div",{className:"font-bold flex items-center text-white py-1.5",children:[!!g&&e.jsx("i",{className:"mgc_right_line mx-1"}),e.jsx("span",{className:"whitespace-nowrap",children:o.name})]},o.id))}),e.jsx("div",{className:"px-4 pt-3 pb-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4",children:N[d].gauges.map(o=>{var g;return e.jsxs("div",{className:"rounded-md border border-gray-300 px-4 py-3 relative flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("p",{className:"font-bold",children:o.name}),e.jsxs("div",{className:"flex gap-2 -mr-1",children:[e.jsx("button",{className:"btn btn-primary shadow px-2 py-1",onClick:()=>C(o),children:e.jsx("i",{className:"mgc_information_line"})}),e.jsx("button",{className:"btn btn-primary shadow px-2 py-1",children:e.jsx("i",{className:"mgc_edit_line"})}),e.jsx("button",{className:"btn btn-primary shadow px-2 py-1",onClick:()=>k(o),children:e.jsx("i",{className:"mgc_comment_line"})})]})]}),e.jsx("p",{className:"mb-1 text-xs",children:o.description}),e.jsx("div",{className:"flex-1",children:(g=o.entites)==null?void 0:g.map(l=>e.jsx("div",{className:"inline-block text-blue-400 border border-blue-400 text-xs rounded px-1 py-0.5",children:l.name},l.id))}),e.jsxs("div",{className:"pt-3",children:[e.jsxs("div",{className:"font-bold text-xs mb-1",children:[v(new Date(o.started_on),"yyyy MMM")," ~"," ",o.ended_on&&v(new Date(o.ended_on),"yyyy MMM")]}),e.jsxs("div",{className:"flex pb-1",children:[e.jsx("input",{type:"text",placeholder:"Search...",className:"form-input rounded-r-none py-1.5 text-xs",value:o.value,disabled:!0}),e.jsx("div",{className:"cursor-pointer inline-flex items-center px-2 rounded-e border border-s-0 border-gray-200 bg-gray-50 text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400",children:o.unit})]})]})]},o.id)})})]},d)}),e.jsx(J,{open:j,toggleModal:()=>k(),gauge:t}),e.jsx(z,{open:b,toggleModal:()=>C(),gauge:t})]})},Z=()=>{const{searchKey:c,filter:r}=G(),a=L(),[i,m]=p.useState([]),{gauges:s,loading:x,error:t}=_(n=>({gauges:n.Gauge.gauges,loading:n.Gauge.loading,error:n.Gauge.error}));p.useEffect(()=>{a(A())},[a]);const u=p.useMemo(()=>s==null?void 0:s.filter(n=>{var b,f,N;return!c&&!r.categories.length&&!r.entities.length?!0:(n.name.toLowerCase().includes(c.toLowerCase())||((b=n.description)==null?void 0:b.toLowerCase().includes(c.toLowerCase())))&&(!r.categories.length||((f=n.categories)==null?void 0:f.some(y=>r.categories.includes(y.id))))&&(!r.entities.length||((N=n.entites)==null?void 0:N.some(y=>r.entities.includes(y.id))))}),[c,r,s]),j=n=>{m(i.includes(n)?i.filter(b=>b!==n):[...i,n])};return e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-end px-4 gap-2",children:[e.jsx("button",{type:"button",disabled:!i.length,className:"btn bg-primary disabled:bg-gray-300 text-white",children:"Submit"}),e.jsx("button",{type:"button",className:"btn bg-primary text-white",children:"Submit All"})]}),e.jsx("div",{className:"p-4 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4",children:u==null?void 0:u.map(n=>{var b;return e.jsxs("div",{className:"rounded-md border cursor-pointer border-gray-300 px-4 py-3 relative flex flex-col",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("input",{className:"form-checkbox rounded text-primary",type:"checkbox",checked:i.includes(n.id),onChange:()=>j(n.id)}),e.jsx("p",{className:"font-bold mr-1",children:n.name})]}),e.jsxs("div",{className:"text-primary text-xs whitespace-nowrap",children:[v(new Date(n.started_on),"yyyy MMM")," ~"," ",n.ended_on&&v(new Date(n.ended_on),"yyyy MMM")]}),e.jsx("p",{className:"mb-1 text-xs",children:n.description}),e.jsx("div",{className:"mb-1",children:n.entites.map(f=>e.jsx("div",{className:"inline-block text-blue-400 border border-blue-400 text-xs rounded px-1 py-0.5",children:f.name},f.id))}),e.jsx("div",{className:"flex items-center flex-wrap",children:(b=n.categories)==null?void 0:b.map(f=>e.jsxs("div",{className:"text-primary text-xs font-bold flex items-center",children:[e.jsx("div",{className:"rounded-full mx-2 w-1 h-1 bg-primary"}),e.jsx("span",{className:"whitespace-nowrap",children:f.name})]},f.id))}),e.jsx("div",{className:"pt-3 flex-1 flex flex-col justify-end",children:e.jsxs("div",{className:"flex pb-1",children:[e.jsx("input",{type:"text",placeholder:"Search...",className:"form-input rounded-r-none py-1.5 text-xs",value:n.value,disabled:!0}),e.jsx("div",{className:"cursor-pointer inline-flex items-center px-2 rounded-e border border-s-0 border-gray-200 bg-gray-50 text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400",children:n.unit})]})})]},n.id)})})]})},ee=()=>{const{searchKey:c,filter:r}=G(),{gauges:a}=_(t=>({gauges:t.Gauge.gauges,loading:t.Gauge.loading,error:t.Gauge.error})),i=p.useMemo(()=>a.filter(t=>{var u,j,n;return!c&&!r.categories.length&&!r.entities.length?!0:(t.name.toLowerCase().includes(c.toLowerCase())||((u=t.description)==null?void 0:u.toLowerCase().includes(c.toLowerCase())))&&(!r.categories.length||((j=t.categories)==null?void 0:j.some(b=>r.categories.includes(b.id))))&&(!r.entities.length||((n=t.entites)==null?void 0:n.some(b=>r.entities.includes(b.id))))}),[c,r]),[m,s]=p.useState([]),x=t=>{s(m.includes(t)?m.filter(u=>u!==t):[...m,t])};return e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-end px-4 gap-2",children:[e.jsx("button",{type:"button",disabled:!m.length,className:"btn bg-primary disabled:bg-gray-300 text-white",children:"Approve"}),e.jsx("button",{type:"button",className:"btn bg-primary text-white",children:"Approve All"})]}),e.jsx("div",{className:"p-4 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4",children:i.map(t=>{var u;return e.jsxs("div",{onClick:()=>x(t.id),className:"rounded-md border cursor-pointer border-gray-300 px-4 py-3 relative flex flex-col",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("input",{className:"form-checkbox rounded text-primary",type:"checkbox",checked:m.includes(t.id)}),e.jsx("p",{className:"font-bold mr-1",children:t.name})]}),e.jsxs("div",{className:"text-primary text-xs whitespace-nowrap",children:[v(new Date(t.started_on),"yyyy MMM")," ~"," ",t.ended_on&&v(new Date(t.ended_on),"yyyy MMM")]}),e.jsx("p",{className:"mb-1 text-xs",children:t.description}),e.jsx("div",{className:"mb-1",children:t.entites.map(j=>e.jsx("div",{className:"inline-block text-blue-400 border border-blue-400 text-xs rounded px-1 py-0.5",children:j.name},j.id))}),e.jsx("div",{className:"flex items-center flex-wrap",children:(u=t.categories)==null?void 0:u.map(j=>e.jsxs("div",{className:"text-primary text-xs font-bold flex items-center",children:[e.jsx("div",{className:"rounded-full mx-2 w-1 h-1 bg-primary"}),e.jsx("span",{className:"whitespace-nowrap",children:j.name})]},j.id))}),e.jsx("div",{className:"pt-3 flex-1 flex flex-col justify-end",children:e.jsxs("div",{className:"flex pb-1",children:[e.jsx("input",{type:"text",placeholder:"Search...",className:"form-input rounded-r-none py-1.5 text-xs",value:t.value,disabled:!0}),e.jsx("div",{className:"cursor-pointer inline-flex items-center px-2 rounded-e border border-s-0 border-gray-200 bg-gray-50 text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400",children:t.unit})]})})]},t.id)})})]})},de=()=>{const c=["gauges","submit","approve"],[r,a]=p.useState("gauges");return e.jsxs(T,{children:[e.jsx(R,{title:"Gauges",name:"Gauges",breadCrumbItems:["Gauges"]}),e.jsxs("div",{className:"flex justify-end pb-2 gap-2",children:[e.jsxs(S,{to:"/gauges/bulk-edit",className:"btn border-gray-400 text-xs px-2 py-1",children:[e.jsx("i",{className:"mgc_edit_3_line mr-1"}),"Bulk Edit"]}),e.jsxs(S,{to:"/gauges/bult-delet",className:"btn border-gray-400 text-xs px-2 py-1",children:[e.jsx("i",{className:"mgc_delete_line mr-1"}),"Bulk Delete"]}),e.jsxs(S,{to:"/gauges/create",className:"btn border-gray-400 text-xs px-2 py-1",children:[e.jsx("i",{className:"mgc_add_line mr-1"}),"Add new Gauge"]})]}),e.jsxs("div",{className:"flex gap-3 mx-auto",children:[e.jsx(q,{}),e.jsxs("div",{className:"card flex-1",children:[e.jsx("ul",{className:"flex list-none flex-row flex-wrap border-b-0 ps-0",role:"tablist",children:c.map((i,m)=>e.jsx("li",{role:"presentation",children:e.jsx("a",{onClick:()=>a(i),className:M("mt-2 block cursor-pointer border-b-2 px-7 pb-2.5 pt-3 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:bg-neutral-100 focus:isolate focus:border-transparent",{"border-primary text-primary":r===i,"border-transparent":r!==i}),role:"tab",children:i})},m))}),r==="gauges"&&e.jsx(X,{}),r==="submit"&&e.jsx(Z,{}),r==="approve"&&e.jsx(ee,{})]})]})]})};export{de as default};
