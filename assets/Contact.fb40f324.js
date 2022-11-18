import{_ as u,F as p,r as b,o as f,c as h,a,w as r,v,b as _,d as g,e as m,p as y,f as w}from"./index.ba5ce5d2.js";const V={name:"Contact",components:{FooterVue:p},mounted(){this.particles(),this.showTxt()},methods:{showTxt(){const e=document.querySelector("#contactForm"),t=document.querySelector(".span1"),o=document.querySelector(".span2"),n=document.querySelector(".btn-dl-cv");window.addEventListener("scroll",()=>{const{scrollTop:l,scrollHeight:i,clientHeight:c}=document.documentElement,s=e.getBoundingClientRect().top;l>(l+s).toFixed()-c*.3&&(t.classList.add("active"),o.classList.add("active2"),n.classList.add("active3"))})},particles(){const e=document.querySelector(".header"),t=document.querySelector(".hero");window.addEventListener("scroll",()=>{const{scrollTop:o,scrollHeight:n,clientHeight:l}=document.documentElement,i=t.getBoundingClientRect().top;o>(o+i).toFixed()-l>=-120&&e.classList.add("bg")}),particlesJS("tsparticles",{particles:{number:{value:16,density:{enable:!0,value_area:600}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.25,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:10,random:!0,anim:{enable:!1,speed:2,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:300,color:"#ffffff",opacity:0,width:0},move:{enable:!0,speed:2,direction:"top",random:!0,straight:!0,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:800,line_linked:{opacity:1}},bubble:{distance:800,size:80,duration:2,opacity:.8,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},d=e=>(y("data-v-4afa4b65"),e=e(),w(),e),E=m('<nav class="header container-fluid navbar navbar-expand-lg" data-v-4afa4b65><a class="name navbar-brand" href="/p-liberty/" data-v-4afa4b65>Clara Lalibert\xE9</a><div class="offcanvas-body" data-v-4afa4b65><div class="menu" data-v-4afa4b65><ul class="navbar-nav mr-auto mb-2 mb-lg-0" data-v-4afa4b65><li class="nav-item" data-v-4afa4b65><a class="contact" href="/p-liberty/" data-v-4afa4b65><i class="bi bi-house-door-fill" data-v-4afa4b65></i></a></li></ul></div></div></nav><div class="hero" id="tsparticles" data-v-4afa4b65><div class="w wave" data-v-4afa4b65></div><div class="w wave2" data-v-4afa4b65></div><div class="w wave3" data-v-4afa4b65></div><div class="w wave4" data-v-4afa4b65></div></div>',2),T={id:"contactForm",class:"row form-contact"},C=m('<div class="col-10 col-md-6 contact_text" data-v-4afa4b65><span class="span1" data-v-4afa4b65>Vous souhaitez discuter de mes motivations ? Je vous invite \xE0 me contacter. Vous pouvez t\xE9l\xE9charger mon cv ou utiliser le formulaire. </span><div class="col-12 col-md-6 btn-dl-cv" data-v-4afa4b65><a href="/p-liberty/lib/web/CV_HAULTCOEUR_CLARA.pdf" download data-v-4afa4b65><button type="button" class="btn btn-light" data-v-4afa4b65><i class="bi bi-file-pdf" data-v-4afa4b65></i> T\xE9l\xE9charger mon CV</button></a></div><span class="span2" data-v-4afa4b65> A bient\xF4t ! </span></div>',1),S={class:"card col-10 col-md-6"},F={id:"form",action:""},L=d(()=>a("h4",null,"Formulaire de contact",-1)),x=d(()=>a("label",{for:"reply_to",class:"form-label"},"Email:",-1)),k=d(()=>a("label",{for:"message",class:"form-label"},"Votre message:",-1)),z={class:"button"};function B(e,t,o,n,l,i){const c=b("FooterVue");return f(),h(g,null,[E,a("div",T,[C,a("div",S,[a("form",F,[L,a("div",null,[x,r(a("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>e.email=s),type:"email",class:"form-control",id:"reply_to",name:"reply_to",placeholder:"Laissez moi votre Email","aria-describedby":"emailHelp"},null,512),[[v,e.email]])]),a("div",null,[k,r(a("textarea",{"onUpdate:modelValue":t[1]||(t[1]=s=>e.message=s),class:"form-control",id:"message",name:"message",rows:"3",placeholder:"Je serais ravie de prendre contact avec vous..."},null,512),[[v,e.message]])]),a("div",z,[a("button",{id:"sendBtn",onClick:t[2]||(t[2]=s=>e.sendEmail()),type:"submit",value:"Send Email",class:"btn btn-light"},"Envoyer")])])])]),_(c)],64)}const H=u(V,[["render",B],["__scopeId","data-v-4afa4b65"]]);export{H as default};
