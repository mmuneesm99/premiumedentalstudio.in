import{d as m}from"./departments-DjFyWSWt.js";import{_ as p,c as r,b as e,t as n,g as x,F as d,d as _,o as a}from"./index-B8sX4N0w.js";const h={props:["name"],data(){return{department:null}},methods:{getImageUrl(s){return this.department?"https://mmuneesm99.github.io/imagecloude/servises/"+s:""}},created(){this.department=m.departments.find(s=>s.name===this.name)}},g={key:0,id:"services",class:"h-auto relative"},u={class:"max-w-screen-xl flex flex-col mt-[150px] items-center justify-center mx-auto px-4 md:px-0"},f={class:"mb-10 sm:mb-0 sm:pr-8 text-center"},v={class:"text-balance text-4xl font-semibold tracking-tight text-[#004443] lg:text-6xl 2xl:text-7xl"},b={class:"grid grid-cols-1 items-center md:grid-cols-2 gap-5 mt-8 md:mt-14"},y={class:""},w=["src","alt"],k={class:"text-center md:text-left"},U={class:"max-w-screen-xl h-auto mx-auto px-4 md:px-0"},j={class:"flex flex-wrap gap-6 justify-center pb-12"},A={class:"bg-white shadow-md overflow-hidden relative rounded-[32px] flex flex-col items-start md:w-[300px]"},B=["src"],D={class:"text-[#00AEAA] font-semibold px-3 pb-4 text-lg"},I={class:"px-3 pb-4"};function N(s,l,z,C,t,o){return a(),r(d,null,[t.department?(a(),r("header",g,[e("div",u,[e("div",f,[e("h1",v,n(t.department.name),1)]),e("div",b,[e("div",y,[e("img",{loading:"lazy",class:"min-h-[200px] object-cover rounded-[32px]",src:o.getImageUrl(t.department.imageUrl),alt:t.department.name},null,8,w)]),e("div",k,[e("p",null,n(t.department.description),1)])])])])):x("",!0),e("div",U,[l[0]||(l[0]=e("div",{class:"py-16"},[e("h2",{class:"text-[#004443] font-bold text-center text-3xl"},"Our services")],-1)),e("div",j,[(a(!0),r(d,null,_(t.department.services,(c,i)=>(a(),r("div",{class:"flex justify-center",key:i},[e("div",A,[e("img",{src:o.getImageUrl(t.department.imageUrl),alt:"Root Canal Treatment",loading:"lazy",class:"rounded-t-lg mb-4"},null,8,B),e("h3",D,n(c.serviceName),1),e("p",I,n(c.description),1)])]))),128))])])],64)}const V=p(h,[["render",N]]);export{V as default};