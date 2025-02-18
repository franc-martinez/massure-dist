import{j as e}from"./index-25584642.js";import{c as a}from"./createLucideIcon-d81fb2bf.js";/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],c=a("Check",r),d=({steps:l,currentStep:t})=>e.jsx("div",{className:"mb-8",children:e.jsx("div",{className:"flex justify-between",children:l.map((i,s)=>e.jsxs("div",{className:"flex flex-col items-center w-full",children:[e.jsx("div",{className:`flex items-center justify-center w-10 h-10 rounded-full border-2 
                ${s<t?"border-green-600 text-green-600":s===t?"border-indigo-600 bg-indigo-600 text-white":"border-gray-300 bg-gray-300 text-white"}`,children:s<t?e.jsx(c,{className:"w-6 h-6"}):e.jsx(i.icon,{className:"w-5 h-5"})}),e.jsx("p",{className:`mt-2 text-sm font-medium ${s<=t?"text-indigo-600":"text-gray-500"}`,children:i.title}),s<l.length&&e.jsx("div",{className:`hidden sm:block w-full h-[2px] mt-5 
                  ${s<=t?"bg-indigo-600":"bg-gray-300"}`})]},i.title))})});export{d as P};
