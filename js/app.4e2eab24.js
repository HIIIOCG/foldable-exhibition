(function(){"use strict";var t={3373:function(t,e,n){e.Z=n.p+"assets/models/exhition05.80e9d8f.glb"},2997:function(t,e,n){var i=n(9242),a=n(2483),s=n(3396);function o(t,e,n,i,a,o){const r=(0,s.up)("RouterView");return(0,s.wg)(),(0,s.j4)(r)}var r={name:"App",components:{}},d=n(89);const l=(0,d.Z)(r,[["render",o]]);var c=l,h=n.p+"img/RORINGCOSMOS_LOGO.65f62bd2.svg";const m=t=>((0,s.dD)("data-v-4aea3c1a"),t=t(),(0,s.Cn)(),t),u={class:"interact"},p=m((()=>(0,s._)("img",{src:h,alt:"",id:"LOGO"},null,-1)));function v(t,e,n,i,a,o){const r=(0,s.up)("ModelView");return(0,s.wg)(),(0,s.iD)("div",u,[(0,s.Wm)(r),p])}var f=n(7139);const g={class:"three"},w={class:"three-container"},C={class:"three-canvas",ref:"mountPoint"},b=["onClick"];function I(t,e,n,a,o,r){return(0,s.wg)(),(0,s.iD)("div",g,[(0,s._)("div",{class:(0,f.C_)(["loading",{complete:o.complete}])},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.log.slice(0,o.showlog),((t,e)=>((0,s.wg)(),(0,s.iD)("p",{key:e},(0,f.zw)(t),1)))),128))],2),(0,s._)("div",w,[(0,s._)("div",C,null,512),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.buttons,(t=>((0,s.wg)(),(0,s.iD)("div",{class:(0,f.C_)(["three-button",{"three-button_show":t.show}]),key:t.i,style:(0,f.j5)({left:t.x+"px",top:t.y+"px"}),onClick:(0,i.iM)((e=>r.buttonClick(t)),["prevent"])},null,14,b)))),128))])])}n(7658);var y=n(1114),x=n(9469),_=n(4543);function T(t,e,n,i=1/60){t.sub(n);let a=t.length();a>e&&(a+=(e-a)*.1**(60*i),t.setLength(a)),t.add(n)}const O=[{frame:0,buttons:[{hint:"Expand",name:"Button001",goto:1}]},{frame:100,buttons:[{hint:"Wall",name:"Button002001",goto:2},{hint:"Wall",name:"Button002002",goto:2}]},{frame:200,buttons:[{hint:"Poster",name:"Button003001",goto:3},{hint:"Poster",name:"Button003002",goto:3},{hint:"Poster",name:"Button003003",goto:3},{hint:"Poster",name:"Button003004",goto:3}]},{frame:300,buttons:[{hint:"Table & TV",name:"Button004001",goto:4},{hint:"Table & TV",name:"Button004002",goto:4},{hint:"Table & TV",name:"Button004003",goto:4},{hint:"Table & TV",name:"Button004004",goto:4},{hint:"Table & TV",name:"Button004005",goto:4}]},{frame:400,buttons:[{hint:"Close",name:"Button005",goto:0}]}],j=60,S=550,M=S/j,k=[];for(let Q=0;Q<O.length;Q++){const t=O[Q];t.i=Q,t.time=t.frame/j,k.push(t.frame)}var D={data(){return{animationFrameID:null,collapse:0,buttons:[],time:0,fps:60,currentStateId:0,showStateId:null,log:[],complete:!1,showlog:0}},mounted(){let t=this;const e=new y.lLk;e.onStart=function(e,n,i){console.log("Started loading file: "+e+".\nLoaded "+n+" of "+i+" files."),e=e.replace(/^.*[\\/]/,"").toUpperCase(),t.log.push("Loading application... "+e+" ("+n+" of "+i+")")},e.onLoad=function(){console.log("Loading complete!"),t.log.push("Loading complete."),t.complete=!0},e.onProgress=function(e,n,i){console.log("Loading file: "+e+".\nLoaded "+n+" of "+i+" files."),e=e.replace(/^.*[\\/]/,"").toUpperCase(),t.log.push("Loading file... "+e+"  ("+n+" of "+i+")")},e.onError=function(e){console.log("There was an error loading "+e),e=e.replace(/^.*[\\/]/,"").toUpperCase(),t.log.push("There was an error loading "+e)},this.initThreeScene(),this.loadGLTF(e),this.onResize(),this.animate(),addEventListener("resize",this.onResize)},beforeUnmount(){cancelAnimationFrame(this.animationFrameID),removeEventListener("resize",this.onResize)},methods:{initThreeScene(){this.lastUpdate=Date.now(),this.scene=new y.xsS,this.origin=new y.Pa4(0,0,0);const t=500,e=500;this.ground_y=0,this.renderer=new y.CP7({antialias:!0}),this.renderer.setClearColor(16777215,0),this.renderer.setSize(t,e),this.$refs.mountPoint.appendChild(this.renderer.domElement),this.camera=new y.cPb(45,t/e,1,1e4),this.camera.position.z=10,this.controls=new _.z(this.camera,this.renderer.domElement),this.controls.update(),this.controls.dampingFactor=.2,this.controls.enableDamping=!0;const n=new y.Mig(16777215);this.scene.add(n);const i=new y.cek(16777215,1);i.position.set(2,2,2),this.scene.add(i)},resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)},onResize(){this.resize(window.innerWidth,window.innerHeight)},loadGLTF(t){const e=new x.E(t);this.raw_mesh=[],e.load(n(3373).Z,(t=>{let e=t.scene;this.scene.add(e),console.log(t),this.mixer=new y.Xcj(e),this.action=this.mixer.clipAction(t.animations[0]),this.action.play();let n=[e],i=[];for(let o of O)for(let t of o.buttons){let n=e.getObjectByName(t.name);i.push({name:t.name,goto:t.goto,display:o.i,x:0,y:0,obj:n,hint:t.hint,show:!1})}this.buttons=i;let a=e.getObjectByName("lightstick");console.log(a),a.material.emissiveIntensity=100;let s=e.getObjectByName("iron");console.log(s);while(n.length>0){let t=n.pop();t.frustumCulled=!1,t.children&&n.push(...t.children),t.morphTargetInfluences&&t.morphTargetInfluences.length>0&&this.raw_mesh.push(t),"Plane"==t.name&&t.parent.remove(t)}}))},animate(){this.showlog<this.log.length&&(this.showlog+=1),this.animationFrameID=requestAnimationFrame(this.animate);let t=Date.now(),e=(t-this.lastUpdate)/1e3;this.lastUpdate=t,this.time>M&&(this.time=this.time-M);let n=O[this.currentStateId].time,i=this.currentStateId-1;i<0&&(i+=O.length);let a=O[i].time,s=n-a;s<0&&(s+=M);let o=this.time-a;o<0&&(o+=M);let r=o/s;o<=s&&o+e>s?this.time=n:this.time+=e,this.mixer&&(this.action.time=this.time,this.mixer.update(0)),T(this.controls.target,2,this.origin,e),T(this.camera.position,10,this.origin,e),this.camera.position.y<this.ground_y&&(this.camera.position.y=this.ground_y),this.controls.update(e);for(let c of this.raw_mesh)c.morphTargetInfluences[0]=this.collapse;if(this.renderer.render(this.scene,this.camera),this.buttons){var d=new y.Pa4;this.renderer.getSize(d);let t=new y.Pa4(0,0,0),n=0,i=null,a=null;for(let e of this.buttons){var l=new y.Pa4;if(l.setFromMatrixPosition(e.obj.matrixWorld),l.project(this.camera),e.x=(l.x+1)*d.x/2,e.y=(1-l.y)*d.y/2,e.show=!1,e.time,e.display==this.currentStateId){t.add(e.obj.position),n+=1;let s=new y.Pa4,o=s.subVectors(this.camera.position,e.obj.position).lengthSq();r>.8&&(null==a||o<a)&&(i=e,a=o)}}null!==i&&(i.show=!0),n>0&&(t.divideScalar(n),this.origin.add(t.sub(this.origin).multiplyScalar(.05**(60*e))))}},buttonClick(t){this.currentStateId=t.goto}}};const L=(0,d.Z)(D,[["render",I],["__scopeId","data-v-6cf5247b"]]);var P=L,B={name:"App",components:{ModelView:P}};const E=(0,d.Z)(B,[["render",v],["__scopeId","data-v-4aea3c1a"]]);var z=E;const R={class:"display"},V={class:"display-container row"},F={class:"col menu"},Z=(0,s.uE)('<div class="menu-body" data-v-41cdf204><h2 data-v-41cdf204>可伸縮結構，將空間“摺疊”</h2><p data-v-41cdf204>摺疊展場的金屬骨架，在穩固支撐的同時，裝上滑輪就能自由拉伸深度。收納時把展牆模塊與燈具簡易拆下，並將展間摺疊壓平，整組系統可收納骨架中。</p><hr data-v-41cdf204><div class="row" data-v-41cdf204><div class="spec" data-v-41cdf204><h3 data-v-41cdf204>摺疊深度</h3><p data-v-41cdf204>60cm</p></div><div class="spec" data-v-41cdf204><h3 data-v-41cdf204>展開深度</h3><p data-v-41cdf204>&lt;6m</p></div></div><div class="gap" data-v-41cdf204></div><div class="tags" data-v-41cdf204><span data-v-41cdf204>#空間最佳化</span></div></div><div class="menu-title" data-v-41cdf204><h1 data-v-41cdf204>設計原理</h1><h1 style="letter-spacing:0.09em;" data-v-41cdf204>DESIGN</h1></div>',2),G=[Z],U=(0,s.uE)('<div class="menu-body" data-v-41cdf204><p data-v-41cdf204>骨架使用電鍍鋅鋼管，防鏽且輕量。透光浪板塗覆紫外線吸收劑，防止褪黃並賦予自淨功能。二手棧板外牆的中空結構可一併收納電源線材與LED燈管。</p><hr data-v-41cdf204><div class="row" data-v-41cdf204><div class="spec" data-v-41cdf204><h3 data-v-41cdf204>使用壽命可達</h3><p data-v-41cdf204>8-10年</p></div></div><div class="gap" data-v-41cdf204></div><div class="tags" data-v-41cdf204><span data-v-41cdf204>#穩固防水</span><span data-v-41cdf204>#室內外通用</span></div></div><div class="menu-title" data-v-41cdf204><h1 data-v-41cdf204>結構再利用</h1><h1 style="letter-spacing:0.12em;" data-v-41cdf204>TEXTURE</h1></div>',2),N=[U],W=(0,s.uE)('<div class="menu-body" data-v-41cdf204><h2 data-v-41cdf204>不止於環保，我們需要更好</h2><p data-v-41cdf204>要取代展覽業用完即棄的傳統，僅達成循環永續的產品是遠遠不夠的。</p><p data-v-41cdf204>「Roaring Cosmos摺疊展場」是使用可複用材料，能快速搭建與扁平收納的模組化展場系統。我們旨在打造多方面,都優於市場的展場空間新解答。</p><div class="gap" data-v-41cdf204></div><div class="tags" data-v-41cdf204><span data-v-41cdf204>Space-saving</span><span data-v-41cdf204>Long-lasting</span><span data-v-41cdf204>Eco-friendly</span></div></div><div class="menu-title" data-v-41cdf204><h1 style="letter-spacing:0.27em;" data-v-41cdf204>何謂摺疊展場</h1><h1 data-v-41cdf204>INTRODUCTION</h1></div>',2),A=[W],H={class:"col"},K=(0,s.uE)('<a id="IG" href="https://www.instagram.com/mmd_nfu_edu/" target="_blank" data-v-41cdf204><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none" data-v-41cdf204><path d="M15.18 11.5C15.18 12.2278 14.9642 12.9393 14.5598 13.5445C14.1554 14.1497 13.5807 14.6213 12.9083 14.8999C12.2358 15.1784 11.4959 15.2513 10.7821 15.1093C10.0682 14.9673 9.4125 14.6168 8.89785 14.1022C8.38319 13.5875 8.0327 12.9318 7.89071 12.2179C7.74872 11.5041 7.82159 10.7642 8.10012 10.0917C8.37865 9.41929 8.85033 8.84456 9.4555 8.44019C10.0607 8.03583 10.7722 7.82 11.5 7.82C12.4757 7.82112 13.411 8.20919 14.1009 8.89908C14.7908 9.58897 15.1789 10.5243 15.18 11.5ZM23 6.44V16.56C22.9981 18.2674 22.3189 19.9043 21.1116 21.1116C19.9043 22.3189 18.2674 22.9981 16.56 23H6.44C4.7326 22.9981 3.09568 22.3189 1.88837 21.1116C0.681053 19.9043 0.0019337 18.2674 0 16.56V6.44C0.0019337 4.7326 0.681053 3.09568 1.88837 1.88837C3.09568 0.681053 4.7326 0.0019337 6.44 0H16.56C18.2674 0.0019337 19.9043 0.681053 21.1116 1.88837C22.3189 3.09568 22.9981 4.7326 23 6.44ZM17.02 11.5C17.02 10.4082 16.6963 9.34101 16.0897 8.43325C15.4832 7.52549 14.6211 6.81798 13.6124 6.40019C12.6038 5.98239 11.4939 5.87308 10.4231 6.08607C9.35233 6.29906 8.36876 6.82478 7.59677 7.59677C6.82478 8.36876 6.29906 9.35233 6.08607 10.4231C5.87308 11.4939 5.98239 12.6038 6.40019 13.6124C6.81798 14.6211 7.52549 15.4832 8.43325 16.0897C9.34101 16.6963 10.4082 17.02 11.5 17.02C12.9635 17.0183 14.3666 16.4362 15.4014 15.4014C16.4362 14.3666 17.0183 12.9635 17.02 11.5ZM18.86 5.52C18.86 5.24706 18.7791 4.98025 18.6274 4.75331C18.4758 4.52637 18.2603 4.34949 18.0081 4.24505C17.7559 4.1406 17.4785 4.11327 17.2108 4.16652C16.9431 4.21976 16.6972 4.3512 16.5042 4.54419C16.3112 4.73719 16.1798 4.98308 16.1265 5.25077C16.0733 5.51847 16.1006 5.79594 16.205 6.0481C16.3095 6.30027 16.4864 6.51579 16.7133 6.66743C16.9403 6.81907 17.2071 6.9 17.48 6.9C17.846 6.9 18.197 6.75461 18.4558 6.49581C18.7146 6.23701 18.86 5.886 18.86 5.52Z" fill="white" data-v-41cdf204></path></svg><span style="letter-spacing:0.08em;margin-left:5px;" data-v-41cdf204> ROARINGCOSMOS </span></a><img src="'+h+'" alt="" id="LOGO" data-v-41cdf204>',2);function Y(t,e,n,a,o,r){return(0,s.wg)(),(0,s.iD)("div",R,[(0,s._)("div",V,[(0,s._)("div",F,[(0,s._)("div",{class:(0,f.C_)(["menu-item",{hidden:0!=o.selected}]),onClick:e[0]||(e[0]=t=>r.selectMenuItem(0))},G,2),(0,s._)("div",{class:(0,f.C_)(["menu-item",{hidden:1!=o.selected}]),onClick:e[1]||(e[1]=t=>r.selectMenuItem(1))},N,2),(0,s._)("div",{class:(0,f.C_)(["menu-item",{hidden:2!=o.selected}]),onClick:e[2]||(e[2]=t=>r.selectMenuItem(2))},A,2)]),(0,s._)("div",H,[(0,s._)("div",{class:"images",onClick:e[3]||(e[3]=t=>r.nextImage())},[K,(0,s.Wm)(i.W3,{name:"fade"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.images.filter(((t,e)=>e==o.imageid)),(t=>((0,s.wg)(),(0,s.iD)("div",{key:t,class:"image",style:(0,f.j5)({"background-image":`url(${t})`})},null,4)))),128))])),_:1})])])])])}var q={data(){return{images:[n(182),n(5087),n(6797),n(3187)],selected:0,imageid:0,menuInterval:null,imageInterval:null}},mounted(){for(let t of this.images){let e=new Image;e.src=t}this.setMenuTimer(),this.setImageTimer()},unmounted(){clearInterval(this.menuInterval),clearInterval(this.imageInterval)},methods:{setMenuTimer(){clearInterval(this.menuInterval),this.menuInterval=setInterval((()=>{this.nextMenuItem()}),1e4)},setImageTimer(){clearInterval(this.imageInterval),this.imageInterval=setInterval((()=>{this.nextImage()}),7e3)},nextMenuItem(){this.selected+=1,this.selected=this.selected%3},nextImage(){this.imageid+=1,this.imageid=this.imageid%this.images.length,this.setImageTimer()},selectMenuItem(t){this.setMenuTimer(),this.selected=t}}};const X=(0,d.Z)(q,[["render",Y],["__scopeId","data-v-41cdf204"]]);var $=X;console.log(a.p7);const J=(0,a.p7)({history:(0,a.r5)(),routes:[{path:"/",component:z},{path:"/interact",component:z},{path:"/display",component:$}]});(0,i.ri)(c).use(J).mount("#app")},182:function(t,e,n){t.exports=n.p+"img/1.4c782261.jpg"},5087:function(t,e,n){t.exports=n.p+"img/2.96f0cf52.jpg"},6797:function(t,e,n){t.exports=n.p+"img/3.d9583449.jpg"},3187:function(t,e,n){t.exports=n.p+"img/4.4e38f38f.jpg"}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var s=e[i]={exports:{}};return t[i].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,i,a,s){if(!i){var o=1/0;for(c=0;c<t.length;c++){i=t[c][0],a=t[c][1],s=t[c][2];for(var r=!0,d=0;d<i.length;d++)(!1&s||o>=s)&&Object.keys(n.O).every((function(t){return n.O[t](i[d])}))?i.splice(d--,1):(r=!1,s<o&&(o=s));if(r){t.splice(c--,1);var l=a();void 0!==l&&(e=l)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[i,a,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p=""}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,s,o=i[0],r=i[1],d=i[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(d)var c=d(n)}for(e&&e(i);l<o.length;l++)s=o[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(c)},i=self["webpackChunkexhibition"]=self["webpackChunkexhibition"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(2997)}));i=n.O(i)})();
//# sourceMappingURL=app.4e2eab24.js.map