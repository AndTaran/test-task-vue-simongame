(function(e){function t(t){for(var r,i,s=t[0],o=t[1],u=t[2],b=0,p=[];b<s.length;b++)i=s[b],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&p.push(c[i][0]),c[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var o=n[s];0!==c[o]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/test-task-vue-simongame/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=o;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e8d":function(e,t,n){e.exports=n.p+"media/s2.d2c4a2c4.mp3"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t,n,c,a,i){var s=Object(r["g"])("SimonGame");return Object(r["f"])(),Object(r["c"])(s,{title:"Simon game"})}var a=n("5dca"),i=n.n(a),s=n("0e8d"),o=n.n(s),u=n("d073"),l=n.n(u),b=n("9382"),p=n.n(b),f={class:"container"},d={class:"title"},m={class:"row"},v={class:"panel-game"},h={class:"panel-options"},j={class:"round"},O={class:"complexity"},k=Object(r["d"])(" Сложность: "),y={class:"easy"},g=Object(r["e"])("label",{for:"easy"},"Легкий",-1),x={class:"middle"},w=Object(r["e"])("label",{for:"middle"},"Средний",-1),S={class:"hard"},q=Object(r["e"])("label",{for:"hard"},"Сложный",-1),$={ref:"s1"},P=Object(r["e"])("source",{src:i.a},null,-1),L={ref:"s2"},R=Object(r["e"])("source",{src:o.a},null,-1),G={ref:"s3"},T=Object(r["e"])("source",{src:l.a},null,-1),_={ref:"s4"},C=Object(r["e"])("source",{src:p.a},null,-1);function M(e,t,n,c,a,i){return Object(r["f"])(),Object(r["c"])(r["a"],null,[Object(r["e"])("div",f,[Object(r["e"])("div",d,Object(r["h"])(n.title),1),Object(r["e"])("div",m,[Object(r["e"])("div",v,[Object(r["e"])("div",null,[Object(r["e"])("div",{onClick:t[1]||(t[1]=function(){return i.click&&i.click.apply(i,arguments)}),ref:"topLeft",class:"btn top-left-btn"},null,512),Object(r["e"])("div",{onClick:t[2]||(t[2]=function(){return i.click&&i.click.apply(i,arguments)}),ref:"topRight",class:"btn top-right-btn"},null,512)]),Object(r["e"])("div",null,[Object(r["e"])("div",{onClick:t[3]||(t[3]=function(){return i.click&&i.click.apply(i,arguments)}),ref:"botLeft",class:"btn bottom-left-btn"},null,512),Object(r["e"])("div",{onClick:t[4]||(t[4]=function(){return i.click&&i.click.apply(i,arguments)}),ref:"botRight",class:"btn bottom-right-btn"},null,512)])]),Object(r["e"])("div",h,[Object(r["e"])("button",{onClick:t[5]||(t[5]=function(){return i.start&&i.start.apply(i,arguments)}),class:"start",disabled:a.sequence.length}," Поехали ",8,["disabled"]),Object(r["e"])("div",j,"Раунд "+Object(r["h"])(a.round),1),Object(r["e"])("div",O,[k,Object(r["e"])("div",y,[Object(r["j"])(Object(r["e"])("input",{class:"radio",type:"radio",name:"complexity",id:"easy",value:"easy","onUpdate:modelValue":t[6]||(t[6]=function(e){return a.complexity=e})},null,512),[[r["i"],a.complexity]]),g]),Object(r["e"])("div",x,[Object(r["j"])(Object(r["e"])("input",{class:"radio",type:"radio",name:"complexity",id:"middle",value:"middle","onUpdate:modelValue":t[7]||(t[7]=function(e){return a.complexity=e})},null,512),[[r["i"],a.complexity]]),w]),Object(r["e"])("div",S,[Object(r["j"])(Object(r["e"])("input",{class:"radio",type:"radio",name:"complexity",id:"hard",value:"hard","onUpdate:modelValue":t[8]||(t[8]=function(e){return a.complexity=e})},null,512),[[r["i"],a.complexity]]),q])])])])]),Object(r["e"])("audio",$,[P],512),Object(r["e"])("audio",L,[R],512),Object(r["e"])("audio",G,[T],512),Object(r["e"])("audio",_,[C],512)],64)}var U=n("2909"),V=n("b85c"),J=n("1da1"),A=(n("96cf"),n("d3b7"),{name:"SimonGame",props:{title:String},data:function(){return{round:1,sequence:[],complexity:"easy",interval:0,repeatSequence:[],startGame:!1,"blockСlick":!1}},methods:{start:function(){var e=this;return Object(J["a"])(regeneratorRuntime.mark((function t(){var n,r,c,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.startGame=!0,e.blockСlick=!0,t.t0=e.complexity,t.next="easy"===t.t0?5:"middle"===t.t0?7:"hard"===t.t0?9:11;break;case 5:return e.interval=1500,t.abrupt("break",11);case 7:return e.interval=1e3,t.abrupt("break",11);case 9:return e.interval=400,t.abrupt("break",11);case 11:e.sequencePush(),n=Object(V["a"])(e.sequence),t.prev=13,n.s();case 15:if((r=n.n()).done){t.next=23;break}return c=r.value,e.active(c),a=function(e){return new Promise((function(t){return setTimeout(t,e)}))},t.next=21,a(e.interval);case 21:t.next=15;break;case 23:t.next=28;break;case 25:t.prev=25,t.t1=t["catch"](13),n.e(t.t1);case 28:return t.prev=28,n.f(),t.finish(28);case 31:e.repeatSequence=Object(U["a"])(e.sequence),e.blockСlick=!1;case 33:case"end":return t.stop()}}),t,null,[[13,25,28,31]])})))()},active:function(e){var t=this;return new Promise((function(n){t.music(e),setTimeout((function(){e.classList.toggle("active")}),t.interval),setTimeout((function(){n()}),200)})).then((function(){e.classList.toggle("active")}))},click:function(e){var t=this;return Object(J["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.blockСlick){n.next=17;break}if(t.blockСlick=!0,e.target.classList.toggle("active"),t.music(e.target),setTimeout((function(){e.target.classList.toggle("active"),t.blockСlick=!1}),500),!t.startGame){n.next=17;break}if(r=t.repeatSequence.shift(),r!==e.target){n.next=13;break}if(0!==t.repeatSequence.length){n.next=11;break}return n.next=11,setTimeout((function(){t.round++,t.start(),t.repeatSequence=Object(U["a"])(t.sequence)}),1e3);case 11:n.next=17;break;case 13:alert("Упс! Вы проиграли..."),t.round=1,t.sequence=[],t.startGame=!1;case 17:case"end":return n.stop()}}),n)})))()},sequencePush:function(){this.sequence.push(this.random())},random:function(){var e=[this.$refs.topLeft,this.$refs.topRight,this.$refs.botLeft,this.$refs.botRight];return e[parseInt(Math.random()*e.length)]},music:function(e){switch(e){case this.$refs.topLeft:this.$refs.s1.play();break;case this.$refs.topRight:this.$refs.s2.play();break;case this.$refs.botLeft:this.$refs.s3.play();break;case this.$refs.botRight:this.$refs.s4.play();break}}}});n("d69f");A.render=M;var I=A,z={name:"App",components:{SimonGame:I}};n("ee16");z.render=c;var B=z;Object(r["b"])(B).mount("#app")},"5dca":function(e,t,n){e.exports=n.p+"media/s1.99e50f7d.mp3"},"616b":function(e,t,n){},9382:function(e,t,n){e.exports=n.p+"media/s4.36d5a722.mp3"},b45f:function(e,t,n){},d073:function(e,t,n){e.exports=n.p+"media/s3.c1c96b44.mp3"},d69f:function(e,t,n){"use strict";n("b45f")},ee16:function(e,t,n){"use strict";n("616b")}});
//# sourceMappingURL=app.db73f0cf.js.map