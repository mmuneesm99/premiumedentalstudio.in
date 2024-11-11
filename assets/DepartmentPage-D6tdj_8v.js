import{d as i}from"./departments-Dj7KxbjP.js";import{_ as x,c as r,b as e,t as n,g as p,F as m,d as u,o as a}from"./index-CkwlWYbI.js";const _={props:["name"],data(){return{department:null}},methods:{getImageUrl(s){return this.department?"https://mmuneesm99.github.io/imagecloude/"+s:""}},created(){this.department=i.departments.find(s=>s.name===this.name)}},h={key:0,id:"",class:"h-auto relative"},f={class:"max-w-screen-xl flex flex-col mt-[150px] items-center justify-center mx-auto px-4 md:px-0"},g={class:"mb-10 sm:mb-0 sm:pr-8 text-center"},v={class:"text-balance text-4xl font-semibold tracking-tight text-[#004443] lg:text-6xl 2xl:text-7xl"},b={class:"flex flex-col justify-center items-center gap-10 mt-4 md:mt-6"},y={class:"text-center max-w-4xl text-[#004443] order-2 md:order-1"},w={class:"order-1 flex justify-center relative"},j=["src","alt"],k={class:"max-w-screen-xl h-auto mx-auto px-4 md:px-0"},A={class:"flex flex-wrap gap-6 justify-center pb-12"},B={class:"bg-white shadow-md overflow-hidden relative rounded-3xl flex flex-col items-start md:w-[300px]"},C=["src"],D={class:"text-[#00AEAA] font-semibold px-3 text-lg"},I={class:"px-3 pb-4 text-[#004443]"};function U(s,l,E,N,t,d){return a(),r(m,null,[t.department?(a(),r("header",h,[e("div",f,[e("div",g,[e("h1",v,n(t.department.name),1)]),e("div",b,[e("div",y,[e("p",null,n(t.department.description),1)]),e("div",w,[l[0]||(l[0]=e("div",{class:"h-20 rounded-3xl mx-auto absolute bg-[#0CB2AE] w-[80%]"},null,-1)),e("img",{loading:"lazy",class:"w-full mt-5 md:mt-10 relative object-cover rounded-3xl",src:d.getImageUrl(t.department.banner),alt:t.department.name},null,8,j)])])])])):p("",!0),e("div",k,[l[1]||(l[1]=e("div",{class:"py-16"},[e("h2",{class:"text-[#004443] font-bold text-center text-3xl md:text-4xl"},"In-Depth Care Services")],-1)),e("div",A,[(a(!0),r(m,null,u(t.department.services,(o,c)=>(a(),r("div",{class:"flex justify-center",key:c},[e("div",B,[e("img",{src:d.getImageUrl(o.imageUrl),alt:"Root Canal Treatment",loading:"lazy",class:"rounded-t-lg mb-4"},null,8,C),e("h3",D,n(o.serviceName),1),e("p",I,n(o.description),1)])]))),128))])])],64)}const S=x(_,[["render",U]]);export{S as default};