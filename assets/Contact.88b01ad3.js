import{_ as b,F as u,r as m,o as f,c as h,a as e,w as r,v,b as _,d as g,e as p,p as y,f as w}from"./index.c38f0a8b.js";const C={name:"Contact",components:{FooterVue:u},mounted(){this.particles(),this.showTxt()},methods:{showTxt(){const a=document.querySelector("#contactForm"),t=document.querySelector(".span1"),s=document.querySelector(".span2"),l=document.querySelector(".btn-dl-cv");window.addEventListener("scroll",()=>{const{scrollTop:n,scrollHeight:i,clientHeight:c}=document.documentElement,o=a.getBoundingClientRect().top;n>(n+o).toFixed()-c*.3&&(t.classList.add("active"),s.classList.add("active2"),l.classList.add("active3"))})},particles(){const a=document.querySelector(".header"),t=document.querySelector(".hero");window.addEventListener("scroll",()=>{const{scrollTop:s,scrollHeight:l,clientHeight:n}=document.documentElement,i=t.getBoundingClientRect().top;s>(s+i).toFixed()-n>=-120&&a.classList.add("bg")}),particlesJS("tsparticles",{particles:{number:{value:16,density:{enable:!0,value_area:600}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.25,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:10,random:!0,anim:{enable:!1,speed:2,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:300,color:"#ffffff",opacity:0,width:0},move:{enable:!0,speed:2,direction:"top",random:!0,straight:!0,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:800,line_linked:{opacity:1}},bubble:{distance:800,size:80,duration:2,opacity:.8,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},d=a=>(y("data-v-2ba13a67"),a=a(),w(),a),S=p('<nav class="header container-fluid navbar-expand-lg" data-v-2ba13a67><a class="name navbar-brand" href="/p-liberty/" data-v-2ba13a67>Clara Lalibert\xE9</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" data-v-2ba13a67><span class="navbar-toggler-icon" data-v-2ba13a67></span></button><div class="collapse navbar-collapse menu" id="navbarSupportedContent" data-v-2ba13a67><ul class="navbar-nav mr-auto mb-2 mb-lg-0" data-v-2ba13a67><li class="nav-item" data-v-2ba13a67><a class="contact" href="#about" data-v-2ba13a67>A propos</a></li><li class="nav-item" data-v-2ba13a67><a class="contact" href="#education" data-v-2ba13a67>Parcours</a></li><li class="nav-item" data-v-2ba13a67><a class="contact" href="#portfolio" data-v-2ba13a67>Portfolio</a></li><li class="nav-item" data-v-2ba13a67><a class="contact" href="/p-liberty/Contact/" data-v-2ba13a67>Contact</a></li></ul></div></nav><div class="hero" id="tsparticles" data-v-2ba13a67><div class="w wave" data-v-2ba13a67></div><div class="w wave2" data-v-2ba13a67></div><div class="w wave3" data-v-2ba13a67></div><div class="w wave4" data-v-2ba13a67></div></div>',2),V={id:"contactForm",class:"row form-contact"},T=p('<div class="col-md-6 contact_text" data-v-2ba13a67><span class="span1" data-v-2ba13a67>Vous souhaitez discuter de mes motivations ? Je vous invite \xE0 me contacter. Vous pouvez t\xE9l\xE9charger mon cv ou utiliser le formulaire. </span><div class="col-12 col-md-6 btn-dl-cv" data-v-2ba13a67><a href="/p-liberty/lib/web/CV_HAULTCOEUR_CLARA.pdf" download data-v-2ba13a67><button type="button" class="btn btn-light" data-v-2ba13a67><i class="bi bi-file-pdf" data-v-2ba13a67></i> T\xE9l\xE9charger mon CV</button></a></div><span class="span2" data-v-2ba13a67> A bient\xF4t ! </span></div>',1),E={class:"card col-md-6"},x={id:"form",action:""},F=d(()=>e("h4",null,"Formulaire de contact",-1)),L=d(()=>e("label",{for:"reply_to",class:"form-label"},"Email:",-1)),k=d(()=>e("label",{for:"message",class:"form-label"},"Votre message:",-1)),z={class:"button"};function B(a,t,s,l,n,i){const c=m("FooterVue");return f(),h(g,null,[S,e("div",V,[T,e("div",E,[e("form",x,[F,e("div",null,[L,r(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>a.email=o),type:"email",class:"form-control",id:"reply_to",name:"reply_to",placeholder:"Laissez moi votre Email","aria-describedby":"emailHelp"},null,512),[[v,a.email]])]),e("div",null,[k,r(e("textarea",{"onUpdate:modelValue":t[1]||(t[1]=o=>a.message=o),class:"form-control",id:"message",name:"message",rows:"3",placeholder:"Je serais ravie de prendre contact avec vous..."},null,512),[[v,a.message]])]),e("div",z,[e("button",{id:"sendBtn",onClick:t[2]||(t[2]=o=>a.sendEmail()),type:"submit",value:"Send Email",class:"btn btn-light"},"Envoyer")])])])]),_(c)],64)}const H=b(C,[["render",B],["__scopeId","data-v-2ba13a67"]]);export{H as default};
