(function(t){function e(e){for(var i,n,r=e[0],l=e[1],c=e[2],d=0,h=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&h.push(s[n][0]),s[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(h.length)h.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(i=!1)}i&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},s={app:0},o=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("85ec"),s=a.n(i);s.a},"43cf":function(t,e,a){"use strict";var i=a("647d"),s=a.n(i);s.a},"4f8d":function(t,e,a){"use strict";var i=a("859a"),s=a.n(i);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=a("5c96"),o=a.n(s),n=(a("a83d"),a("ecee")),r=a("c074"),l=a("b702"),c=a("f2d1"),u=a("ad3d"),d=a("bc3a"),h=a.n(d),f=(a("d3b7"),"https://anime-music.jijidown.com/api/v2/"),m=h.a.create({timeout:7e3,baseURL:f,method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"}});m.interceptors.response.use((function(t){return t}),(function(t){console.log("TCL: error",t);var e=void 0!==t.Message?t.Message:"";return Object(s["Message"])({message:"网络错误"+e,type:"error",duration:3e3}),Promise.reject(t)}));var p=a("a7fe"),v=a.n(p),g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{on:{postplayid:t.getPlay}}),i("transition",{attrs:{name:"fade"}},[t.back_show?i("div",{staticStyle:{"z-index":"-99999999"}},[i("div",{staticClass:"back_img_box",style:{background:"url("+t.back_img+") no-repeat center center"}})]):t._e()]),i("div",{staticClass:"header"},[i("img",{staticClass:"Logo",attrs:{src:a("cf05"),height:"100%",alt:"Logo"}}),i("div",{attrs:{id:"nav"}},[i("router-link",{attrs:{to:"/"}},[t._v("主页")]),i("router-link",{attrs:{to:"/search"}},[t._v("搜索")]),i("router-link",{attrs:{to:"/about"}},[t._v("关于")])],1)]),i("div",{staticClass:"view"},[i("router-view",{ref:"childrenmode",on:{"my-event":t.getMyEvent}}),i("div",{staticStyle:{width:"100%",height:"300px"}})],1),i("el-backtop",{attrs:{bottom:"400","visibility-height":"80",target:".page-component__scroll .el-scrollbar__wrap"}}),i("audio",{ref:"audio",attrs:{autoplay:"",src:this.audio_src},on:{timeupdate:t.updateTime}}),i("div",{staticClass:"player-bar"},[i("div",{ref:"runfatbar",attrs:{id:"progress"},on:{click:t.clickrunfatbar}},[i("div",{staticClass:"load",style:{width:t.loadhealth+"%"}}),i("div",{ref:"runbar",style:{width:t.health+"%"},attrs:{id:"now"}},[i("div",{staticClass:"now-circular"})])]),i("div",{staticClass:"player-control"},[i("el-image",{staticClass:"cover",attrs:{src:t.cover_img,fit:"cover"}},[i("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v(" 加载中"),i("span",{staticClass:"dot"},[t._v("...")])])]),i("div",{staticClass:"songinfo"},[i("div",{staticClass:"song-title",on:{click:function(e){return t.goSongInfo()}}},[i("strong",[t._v(t._s(t.songtitle))])]),i("div",{staticClass:"song-album",on:{click:function(e){return t.searchAlbum()}}},[t._v(t._s(t.album))])]),i("div",{staticClass:"playtime"},[i("div",{staticClass:"od_bnt"},[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"音量："+this.audiovolume+"%",placement:"top-start"}},[i("el-popover",{attrs:{placement:"top",width:"160"},model:{value:t.volumevisible,callback:function(e){t.volumevisible=e},expression:"volumevisible"}},[t._v(" 音量："+t._s(t.audiovolume+"%")+" "),i("el-slider",{attrs:{"show-tooltip":!1},on:{change:t.changevolume},model:{value:t.audiovolume,callback:function(e){t.audiovolume=e},expression:"audiovolume"}}),i("font-awesome-icon",{attrs:{slot:"reference",icon:["fas","volume-down"],size:"1x"},slot:"reference"})],1)],1),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:this.playmodetips,placement:"top"}},[i("font-awesome-icon",{attrs:{icon:["fas",this.playmodeset],size:"1x"},on:{click:function(e){return t.playmode_toggle()}}})],1),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"收藏",placement:"top"}},[i("font-awesome-icon",{attrs:{icon:["far","heart"],size:"1x"},on:{click:function(e){return t.share()}}})],1),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"分享",placement:"top"}},[i("font-awesome-icon",{attrs:{icon:["fas","share"],size:"1x"},on:{click:function(e){return t.share()}}})],1),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"设置",placement:"top"}},[i("font-awesome-icon",{attrs:{icon:["fas","cog"],size:"1x"},on:{click:function(e){return t.settings()}}})],1)],1),t._v(" "+t._s(t.playtime)+" / "+t._s(t.allplaytime)+" ")]),i("div",{staticClass:"player_ctrl_bnt"},[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"上一首",placement:"top-start"}},[i("font-awesome-icon",{attrs:{icon:["fas","chevron-left"],size:"3x"},on:{click:function(e){return t.play_up()}}})],1),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:this.statustips,placement:"top"}},[i("font-awesome-icon",{ref:"playbnt",attrs:{icon:["far",this.statusico],size:"3x"},on:{click:function(e){return t.play_toggle()}}})],1),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"下一首",placement:"top-end"}},[i("font-awesome-icon",{attrs:{icon:["fas","chevron-right"],size:"3x"},on:{click:function(e){return t.play_next()}}})],1)],1)],1)])],1)},b=[];a("e25e"),a("ac1f"),a("5319");function _(t){return m(t?{url:"/music/"+t,method:"get"}:{url:"/music",method:"get"})}function y(t){return m({url:"/music/search?key="+t,method:"get"})}function k(t){return m({url:"/anime/search?key="+t,method:"get"})}var w={name:"app",data:function(){return{playmode:"random",playmodeset:"random",back_show:!1,volumevisible:!1,cover_img:"/img/logo.png",back_img_url:"",back_img:"",audio_src:"",health:0,loadhealth:0,currentTime:0,statusico:"play-circle",songtitle:"未在播放",album:"未知",playtime:"NaN:NaN",allplaytime:"NaN:NaN",thisid:"",statustips:"播放",playmodetips:"随机播放",audiovolume:parseInt(localStorage.getItem("audiovolume"))}},created:function(){localStorage.removeItem("back_img")},mounted:function(){localStorage.getItem("audiovolume")?(this.volume=parseInt(localStorage.getItem("audiovolume")),this.$refs.audio.volume=parseInt(localStorage.getItem("audiovolume"))/100):(localStorage.setItem("audiovolume",parseInt(60)),this.$refs.audio.volume=parseInt(localStorage.getItem("audiovolume"))/100,this.audiovolume=60),this.getMusicdata()},methods:{goSongInfo:function(){this.$router.push({path:"/song/"+this.thisid})},searchAlbum:function(){this.$router.push({path:"/search/"+encodeURIComponent(this.album)})},changevolume:function(){localStorage.setItem("audiovolume",this.audiovolume),this.$refs.audio.volume=parseInt(localStorage.getItem("audiovolume"))/100},getBase64:function(t){var e=new Image,a="";e.src=t,e.setAttribute("crossOrigin","anonymous"),e.onload=function(){var t=document.createElement("canvas"),i=e.width,s=e.height;t.width=i,t.height=s,t.getContext("2d").drawImage(e,0,0,i,s),a=t.toDataURL("image/jpeg"),localStorage.setItem("back_img",a)}},getMusicdata:function(t){var e=this;_(t).then((function(t){"ok"==t.data.msg&&(e.audio_src=t.data.res.play_url,e.$refs.audio.load,e.cover_img=t.data.res.anime_info.logo.replace(/^http/,"https"),e.songtitle=t.data.res.title,e.album=t.data.res.anime_info.title,e.back_img_url=t.data.res.anime_info.bg,e.thisid=t.data.res.id,console.log("ID: "+t.data.res.id),e.back_img=e.getBase64(e.back_img_url))}))},updateTime:function(t){localStorage.getItem("back_img")&&(this.back_img=localStorage.getItem("back_img"),setTimeout(this.back_show=!0,1e3)),this.currentTime=t.target.currentTime,this.loadtime=this.$refs.audio.buffered,this.health=this.currentTime/this.$refs.audio.duration*100,0!=this.$refs.audio.buffered.length&&(this.loadhealth=100*this.$refs.audio.buffered.end(this.$refs.audio.buffered.length-1)/this.$refs.audio.duration*100/100),this.am=Math.floor(this.$refs.audio.duration/60%60)<10?"0"+Math.floor(this.$refs.audio.duration/60%60):Math.floor(this.$refs.audio.duration/60%60),this.as=Math.floor(this.$refs.audio.duration%60)<10?"0"+Math.floor(this.$refs.audio.duration%60):Math.floor(this.$refs.audio.duration%60),this.m=Math.floor(this.currentTime/60%60)<10?"0"+Math.floor(this.currentTime/60%60):Math.floor(this.currentTime/60%60),this.s=Math.floor(this.currentTime%60)<10?"0"+Math.floor(this.currentTime%60):Math.floor(this.currentTime%60),this.ret=this.m+":"+this.s,this.aret=this.am+":"+this.as,this.playtime=this.ret,this.allplaytime=this.aret,this.$refs.audio.ended&&(this.statusico="play-circle",this.statustips="播放",localStorage.removeItem("back_img"),this.back_show=!1,"random"==this.playmode&&this.getMusicdata(),"loop"==this.playmode&&this.getMusicdata(this.thisid)),1!=this.$refs.audio.paused?(this.statusico="pause-circle",this.statustips="暂停"):(this.statusico="play-circle",this.statustips="播放")},play_toggle:function(){"play-circle"==this.statusico?this.play():this.pause()},playmode_toggle:function(){"random"==this.playmode?(this.playmode="loop",this.playmodetips="单曲循环",this.playmodeset="undo"):(this.playmode="random",this.playmodetips="随机播放",this.playmodeset="random")},clickrunfatbar:function(t){var e=this.$refs.audio,a=t.pageX/this.$refs.runfatbar.offsetWidth;this.$refs.runbar.style.width="".concat(100*a,"%"),e.currentTime=e.duration*a},getMyEvent:function(t){this.getPlay(t)},getPlay:function(t){console.log(t),localStorage.removeItem("back_img"),this.back_show=!1,this.getMusicdata(t)},play:function(){this.audio_src||this.getMusicdata(),this.$refs.audio.play(),this.statusico="pause-circle",this.statustips="暂停"},pause:function(){this.$refs.audio.pause(),this.statusico="play-circle",this.statustips="播放"},play_next:function(){localStorage.removeItem("back_img"),this.back_show=!1,this.getMusicdata()},play_up:function(){},share:function(){},settings:function(){}}},C=w,x=(a("034f"),a("2877")),$=Object(x["a"])(C,g,b,!1,null,null,null),M=$.exports,I=a("8c4f"),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"})},O=[],j={name:"home"},T=j,z=Object(x["a"])(T,S,O,!1,null,null,null),P=z.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("关于唧唧FM")]),a("p",[t._v(" 唧唧FM是一个优质的动漫FM电台。"),a("br"),t._v(" 由"),a("a",{attrs:{href:"https://github.com/JxiaoC"}},[t._v("JxiaoC")]),t._v("开发的后端构成。"),a("br"),t._v(" Vue前端由"),a("a",{attrs:{href:"https://github.com/Kurokitu"}},[t._v("Kurokitu")]),t._v("开发。 ")])])}],U=(a("e76e"),{}),L=Object(x["a"])(U,E,N,!1,null,null,null),R=L.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search"},[a("div",{staticClass:"search-bar"},[a("div",{staticClass:"select-box"},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("div",{staticClass:"input-box"},[a("el-input",{attrs:{placeholder:"请输入要搜索的内容"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getSerachdata()}},model:{value:t.serachinput,callback:function(e){t.serachinput=e},expression:"serachinput"}})],1),a("div",{staticClass:"serach-bnt-box"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.getSerachdata()}}},[t._v("搜索")])],1)]),a("div",{staticClass:"SearchOK"},t._l(t.datares,(function(e){return a("el-card",{key:e.id,staticClass:"box-card"},[a("el-image",{staticStyle:{width:"180px",height:"100px",float:"left","margin-top":"-20px","margin-left":"-20px"},attrs:{src:e.anime_info.logo,fit:"cover"}}),a("div",{staticClass:"songinfo"},[a("div",{staticClass:"title"},[a("strong",[t._v(t._s(e.title))])]),a("div",{staticClass:"album"},[t._v(t._s(e.anime_info.title))])]),a("div",{staticClass:"card-play",on:{click:function(a){return t.sendplayid(e.id)}}},[a("font-awesome-icon",{attrs:{icon:["fas","play-circle"],size:"3x"}})],1)],1)})),1)])},J=[],A={name:"serach",data:function(){return{options:[{value:"title",label:"按歌曲名搜索"},{value:"anime",label:"按动漫名搜索"}],value:"title",serachinput:"",datares:[],title:"未知",album:"未知"}},mounted:function(){this.$route.params.value&&(this.value="anime",this.serachinput=decodeURIComponent(this.$route.params.value),this.getSerachdata())},methods:{getSerachdata:function(){var t=this;"title"==this.value&&y(this.serachinput).then((function(e){"ok"==e.data.msg&&(t.datares=e.data.res)})),"anime"==this.value&&k(this.serachinput).then((function(e){"ok"==e.data.msg&&(t.datares=e.data.res)}))},sendplayid:function(t){this.$emit("my-event",t)}},watch:{$route:function(){this.value="anime",this.serachinput=decodeURIComponent(this.$route.params.value),this.getSerachdata()}}},K=A,B=(a("43cf"),Object(x["a"])(K,F,J,!1,null,null,null)),D=B.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"song"},[a("el-card",{staticClass:"sel-card"},[a("el-image",{staticStyle:{float:"left","margin-top":"-20px","margin-left":"-20px",width:"622px"},attrs:{src:t.logo}}),a("div",{staticClass:"songinfo-box"},[a("div",{staticClass:"sbox2"},[a("h2",[t._v(t._s(t.title))]),a("strong",[t._v(t._s(t.subtitle))]),a("p",[t._v(t._s(t.info))]),a("div",{on:{click:function(e){return t.sendplayid()}}},[a("font-awesome-icon",{attrs:{icon:["fas","play-circle"],size:"3x"}})],1)])])],1)],1)},W=[],X={name:"song",data:function(){return{id:"",logo:"",title:"未知",subtitle:"未知",info:"未知"}},mounted:function(){this.getMusicInfo()},methods:{getMusicInfo:function(){var t=this;_(this.$route.params.id).then((function(e){"ok"==e.data.msg&&(t.logo=e.data.res.anime_info.logo,t.title=e.data.res.title,t.subtitle=e.data.res.anime_info.title,t.info=e.data.res.anime_info.desc)}))},sendplayid:function(){this.$emit("my-event",this.$route.params.id)}},watch:{$route:function(){this.getMusicInfo()}}},q=X,G=(a("4f8d"),Object(x["a"])(q,V,W,!1,null,null,null)),H=G.exports;i["default"].use(I["a"]);var Q=[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:R},{path:"/search",name:"search",component:D},{path:"/search/:value",name:"search",component:D},{path:"/song/:id",name:"song",component:H}],Y=new I["a"]({base:"/",routes:Q}),Z=Y;i["default"].config.productionTip=!1,i["default"].prototype.$axios=m,i["default"].use(o.a),i["default"].use(v.a,h.a),n["c"].add(r["a"],l["a"],c["a"]),i["default"].component("font-awesome-icon",u["a"]),i["default"].component("font-awesome-layers",u["b"]),i["default"].component("font-awesome-layers-text",u["c"]),new i["default"]({router:Z,render:function(t){return t(M)}}).$mount("#app")},"647d":function(t,e,a){},"859a":function(t,e,a){},"85ec":function(t,e,a){},"91aa":function(t,e,a){},a83d:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.bf3ccf1f.png"},e76e:function(t,e,a){"use strict";var i=a("91aa"),s=a.n(i);s.a}});
//# sourceMappingURL=app.4969e240.js.map