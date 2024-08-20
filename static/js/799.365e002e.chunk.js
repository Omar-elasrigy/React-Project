"use strict";(self.webpackChunkmovie_app=self.webpackChunkmovie_app||[]).push([[799],{994:(e,o,t)=>{t.d(o,{A:()=>b});var r=t(43),i=t(204),n=t(475),d=t(3),l=t(467),a=t(579);const s={lightmode:{border:"1px solid white",color:"black",width:"200px",backgroundColor:"white",borderRadius:"10px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",margin:"10px",textAlign:"center",position:"relative"},darkmode:{width:"200px",backgroundColor:"#333",borderRadius:"10px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",margin:"10px",textAlign:"center",position:"relative",color:"white"}},c={position:"relative",borderRadius:"15px"},p={width:"100%",height:"100%",objectFit:"cover",marginBottom:"10px"},x={padding:"10px",position:"relative"},g={marginTop:"15px",fontSize:"18px",height:"50px",marginBottom:"15px"},h={marginBottom:"10px",fontSize:"14px",color:"#888"},u={position:"absolute",bottom:"35px",right:"10px",display:"flex",justifyContent:"center",alignItems:"center"},b=function(e){let{movie:o}=e;const t=(0,d.wA)(),b=(0,d.d4)((e=>e.favList.favList.some((e=>(null===e||void 0===e?void 0:e.id)===(null===o||void 0===o?void 0:o.id))))),[f,m]=(0,r.useState)(b);(0,r.useEffect)((()=>{m(b)}),[b]);const k=document.body.classList.contains("dark-mode")?"darkmode":"lightmode",v=Math.round(10*o.vote_average),y={position:"absolute",bottom:"-15px",border:`5px solid ${(e=>e>=80?"#00ff00":e>=60?"yellow":e>=50?"orange":"red")(v)}`,left:"10px",width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"#1e2533",color:"#87ceeb",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",fontSize:"14px"};return(0,a.jsxs)("div",{style:s[k],children:[(0,a.jsxs)("div",{style:c,children:[(0,a.jsx)("img",{src:o.poster_path?`https://image.tmdb.org/t/p/w500${o.poster_path}`:"default-poster-path.jpg",alt:o.title,style:p}),(0,a.jsx)("div",{style:y,children:(0,a.jsx)("span",{children:v})})]}),(0,a.jsxs)("div",{style:x,children:[(0,a.jsx)("h3",{style:g,children:o.title}),(0,a.jsx)("p",{style:h,children:new Date(o.release_date).toDateString()}),(0,a.jsx)("div",{style:u,children:(0,a.jsx)(i.Mbv,{style:{color:f?"#ffeb3b":"gray",fontSize:"20px",cursor:"pointer"},onClick:()=>{m((e=>{const r=!e;return t(r?(0,l.FO)(o):(0,l.Lw)(o.id)),r}))}})}),(0,a.jsx)(n.N_,{to:`/movie/${o.id}`,children:(0,a.jsx)("button",{className:"btn btn-outline-warning mb-3",children:"View Details"})})]})]})}},799:(e,o,t)=>{t.r(o),t.d(o,{default:()=>j});var r=t(43),i=(t(421),t(579));const n={lightmode:{backgroundColor:"#f1f1f1",padding:"20px",color:"black"},darkmode:{backgroundColor:"#333",padding:"20px",color:"white"}},d={lightmode:{maxWidth:"1200px",margin:"auto",textAlign:"left",paddingLeft:"10px",backgroundColor:"#f1f1f1",color:"black"},darkmode:{maxWidth:"1200px",margin:"auto",textAlign:"left",paddingLeft:"10px",backgroundColor:"#333",color:"white"}},l={lightmode:{display:"flex",alignItems:"center",marginTop:"10px",backgroundColor:"#f1f1f1",color:"black"},darkmode:{display:"flex",alignItems:"center",marginTop:"10px",backgroundColor:"#333",color:"white"}},a={darkmode:{flex:"1",padding:"10px",borderRadius:"5px",border:"1px solid #ccc",marginRight:"10px",backgroundColor:"black",color:"white",fontFamily:"Arial, sans-serif",fontSize:"16px",fontWeight:"bold"},lightmode:{flex:"1",padding:"10px",borderRadius:"5px",border:"1px solid #ccc",marginRight:"10px",backgroundColor:"white",color:"black",fontFamily:"Arial, sans-serif",fontSize:"16px",fontWeight:"bold"}},s={padding:"10px 20px",color:"#333",backgroundColor:"#ffeb3b",border:"1px solid yellow",borderRadius:"5px",boxShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)"},c=function(e){let{onSearch:o}=e;const t=(0,r.useRef)(null),[c,p]=(0,r.useState)(""),x=document.body.classList.contains("dark-mode")?"darkmode":"lightmode",g=()=>{const e=t.current.value;o(e),p(""),t.current.value=""};return(0,i.jsx)("header",{className:"headBar",style:n[x],children:(0,i.jsxs)("div",{style:d[x],children:[(0,i.jsx)("h1",{children:"Welcome to our movie app"}),(0,i.jsx)("p",{children:"Millions of movies, TV shows, and people to discover. Explore now."}),(0,i.jsxs)("div",{style:l[x],children:[(0,i.jsx)("input",{ref:t,type:"text",placeholder:"Search",value:c,onChange:e=>{p(e.target.value),o(e.target.value)},onKeyDown:e=>"Enter"===e.key&&g(),style:a[x]}),(0,i.jsx)("button",{onClick:g,style:s,children:"Search"})]})]})})};var p=t(994);const x={display:"flex",flexWrap:"wrap",justifyContent:"center"},g=function(e){let{movies:o}=e;return(0,i.jsx)("div",{style:x,children:o.map((e=>(0,i.jsx)(p.A,{movie:e},e.id)))})};const h={lightmode:{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px",backgroundColor:"white"},darkmode:{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px",backgroundColor:"black"}},u={backgroundColor:"#ffeb3b",color:"#1e2533",border:"none",padding:"10px 15px",borderRadius:"5px",cursor:"pointer",fontWeight:"bold",fontSize:"16px",margin:"0 5px",transition:"background-color 0.3s ease"},b={borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px"},f={borderTopRightRadius:"20px",borderBottomRightRadius:"20px"},m={backgroundColor:"#b3b3b3",cursor:"not-allowed"},k={color:"#ffeb3b",fontWeight:"bold",fontSize:"16px",margin:"0 10px"},v=function(e){let{currentPage:o,totalPages:t,onPageChange:r}=e;const n=document.body.classList.contains("dark-mode")?"darkmode":"lightmode";return(0,i.jsxs)("div",{style:h[n],children:[(0,i.jsx)("button",{style:{...u,...b,...1===o&&m},onClick:()=>r(o-1),disabled:1===o,children:"<"}),(0,i.jsxs)("span",{style:k,children:[o," / ",t]}),(0,i.jsx)("button",{style:{...u,...f,...o===t&&m},onClick:()=>r(o+1),disabled:o===t,children:">"})]})},y={lightmode:{padding:"20px",backgroundColor:"#f8f9fa",color:"black"},darkmode:{padding:"20px",backgroundColor:"black",color:"white"}},j=()=>{const[e,o]=(0,r.useState)([]),[t,n]=(0,r.useState)(!0),[d,l]=(0,r.useState)(1),[a,s]=(0,r.useState)("");(0,r.useEffect)((()=>{(async()=>{try{const e=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d406d67947f4328b84625ac0a728bd14&page=${d}`),t=await e.json();o(t.results||[]),n(!1)}catch(e){console.error("Error fetching the movies:",e),n(!1)}})()}),[d]);const p=e.filter((e=>e.title.toLowerCase().includes(a.toLowerCase()))),x=Math.ceil(p.length/12),h=p.slice(12*(d-1),12*d),u=document.body.classList.contains("dark-mode")?"darkmode":"lightmode",b={fontSize:"50px",color:"darkmode"===u?"white":"grey",textAlign:"center",marginTop:"20px",fontWeight:"bold"};return(0,i.jsxs)("div",{children:[(0,i.jsx)(c,{onSearch:e=>{s(e),l(1)}}),(0,i.jsxs)("section",{style:y[u],children:[(0,i.jsx)("h2",{children:"Popular Movies"}),t?(0,i.jsx)("p",{children:"Loading movies..."}):0===p.length?(0,i.jsx)("p",{style:b,children:"No Movies Found"}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g,{movies:h}),p.length>0&&(0,i.jsx)(v,{currentPage:d,totalPages:x,onPageChange:e=>{e>0&&e<=x&&l(e)}})]})]})]})}},421:()=>{}}]);
//# sourceMappingURL=799.365e002e.chunk.js.map