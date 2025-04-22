(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))A(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const u of d.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&A(u)}).observe(document,{childList:!0,subtree:!0});function s(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function A(l){if(l.ep)return;l.ep=!0;const d=s(l);fetch(l.href,d)}})();function l_(E){return E&&E.__esModule&&Object.prototype.hasOwnProperty.call(E,"default")?E.default:E}var J={exports:{}},e_;function A_(){return e_||(e_=1,function(E){const i=(()=>{const u={},N={font:"Standard",fontPath:"./fonts"};function w(T,n){let _={},e,t,r,o,L=[[16384,"vLayout",2],[8192,"vLayout",1],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",2],[64,"hLayout",1],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];for(e=n!==null?n:T,t=0,r=L.length;t<r;)o=L[t],e>=o[0]?(e=e-o[0],_[o[1]]=typeof _[o[1]]>"u"?o[2]:_[o[1]]):o[1]!=="vLayout"&&o[1]!=="hLayout"&&(_[o[1]]=!1),t++;return typeof _.hLayout>"u"?T===0?_.hLayout=1:T===-1?_.hLayout=0:_.hRule1||_.hRule2||_.hRule3||_.hRule4||_.hRule5||_.hRule6?_.hLayout=3:_.hLayout=2:_.hLayout===2&&(_.hRule1||_.hRule2||_.hRule3||_.hRule4||_.hRule5||_.hRule6)&&(_.hLayout=3),typeof _.vLayout>"u"?_.vRule1||_.vRule2||_.vRule3||_.vRule4||_.vRule5?_.vLayout=3:_.vLayout=0:_.vLayout===2&&(_.vRule1||_.vRule2||_.vRule3||_.vRule4||_.vRule5)&&(_.vLayout=3),_}function V(T,n,_){return T===n&&T!==_?T:!1}function b(T,n){let _="|/\\[]{}()<>";if(T==="_"){if(_.indexOf(n)!==-1)return n}else if(n==="_"&&_.indexOf(T)!==-1)return T;return!1}function H(T,n){let _="| /\\ [] {} () <>",e=_.indexOf(T),t=_.indexOf(n);if(e!==-1&&t!==-1&&e!==t&&Math.abs(e-t)!==1){const r=Math.max(e,t),o=r+1;return _.substring(r,o)}return!1}function x(T,n){let _="[] {} ()",e=_.indexOf(T),t=_.indexOf(n);return e!==-1&&t!==-1&&Math.abs(e-t)<=1?"|":!1}function M(T,n){let _="/\\ \\/ ><",e={0:"|",3:"Y",6:"X"},t=_.indexOf(T),r=_.indexOf(n);return t!==-1&&r!==-1&&r-t===1?e[t]:!1}function p(T,n,_){return T===_&&n===_?_:!1}function F(T,n){return T===n?T:!1}function G(T,n){let _="|/\\[]{}()<>";if(T==="_"){if(_.indexOf(n)!==-1)return n}else if(n==="_"&&_.indexOf(T)!==-1)return T;return!1}function B(T,n){let _="| /\\ [] {} () <>",e=_.indexOf(T),t=_.indexOf(n);if(e!==-1&&t!==-1&&e!==t&&Math.abs(e-t)!==1){const r=Math.max(e,t),o=r+1;return _.substring(r,o)}return!1}function X(T,n){return T==="-"&&n==="_"||T==="_"&&n==="-"?"=":!1}function k(T,n){return T==="|"&&n==="|"?"|":!1}function W(T,n,_){return n===" "||n===""||n===_&&T!==" "?T:n}function n_(T,n,_){if(_.fittingRules.vLayout===0)return"invalid";let e,t=Math.min(T.length,n.length),r,o,L=!1,a;if(t===0)return"invalid";for(e=0;e<t;e++)if(r=T.substring(e,e+1),o=n.substring(e,e+1),r!==" "&&o!==" "){if(_.fittingRules.vLayout===1)return"invalid";if(_.fittingRules.vLayout===2)return"end";if(k(r,o)){L=L||!1;continue}if(a=!1,a=_.fittingRules.vRule1?F(r,o):a,a=!a&&_.fittingRules.vRule2?G(r,o):a,a=!a&&_.fittingRules.vRule3?B(r,o):a,a=!a&&_.fittingRules.vRule4?X(r,o):a,L=!0,!a)return"invalid"}return L?"end":"valid"}function t_(T,n,_){let e=T.length,t=T.length;n.length;let r,o,L,a=1,I,h,R;for(;a<=e;){for(r=T.slice(Math.max(0,t-a),t),o=n.slice(0,Math.min(e,a)),L=o.length,R="",I=0;I<L;I++)if(h=n_(r[I],o[I],_),h==="end")R=h;else if(h==="invalid"){R=h;break}else R===""&&(R="valid");if(R==="invalid"){a--;break}if(R==="end")break;R==="valid"&&a++}return Math.min(e,a)}function r_(T,n,_){let e,t=Math.min(T.length,n.length),r,o,L="",a;for(e=0;e<t;e++)r=T.substring(e,e+1),o=n.substring(e,e+1),r!==" "&&o!==" "?_.fittingRules.vLayout===1||_.fittingRules.vLayout===2?L+=W(r,o):(a=!1,a=_.fittingRules.vRule5?k(r,o):a,a=!a&&_.fittingRules.vRule1?F(r,o):a,a=!a&&_.fittingRules.vRule2?G(r,o):a,a=!a&&_.fittingRules.vRule3?B(r,o):a,a=!a&&_.fittingRules.vRule4?X(r,o):a,L+=a):L+=W(r,o);return L}function a_(T,n,_,e){let t=T.length,r=n.length,o=T.slice(0,Math.max(0,t-_)),L=T.slice(Math.max(0,t-_),t),a=n.slice(0,Math.min(_,r)),I,h,R,f=[],c,v=[];for(h=L.length,I=0;I<h;I++)I>=r?R=L[I]:R=r_(L[I],a[I],e),f.push(R);return c=n.slice(Math.min(_,r),r),v.concat(o,f,c)}function q(T,n){let _,e=T.length,t="";for(_=0;_<n;_++)t+=" ";for(_=0;_<e;_++)T[_]+=t}function L_(T,n,_){let e=T[0].length,t=n[0].length,r;return e>t?q(n,e-t):t>e&&q(T,t-e),r=t_(T,n,_),a_(T,n,r,_)}function o_(T,n,_){if(_.fittingRules.hLayout===0)return 0;let e,t=T.length,r=n.length,o=t,L=1,a=!1,I=!1,h,R,f,c;if(t===0)return 0;_:for(;L<=o;){const v=t-L;for(h=T.substring(v,v+L),R=n.substring(0,Math.min(L,r)),e=0;e<Math.min(L,r);e++)if(f=h.substring(e,e+1),c=R.substring(e,e+1),f!==" "&&c!==" "){if(_.fittingRules.hLayout===1){L=L-1;break _}else if(_.fittingRules.hLayout===2){(f===_.hardBlank||c===_.hardBlank)&&(L=L-1);break _}else if(a=!0,I=!1,I=_.fittingRules.hRule1?V(f,c,_.hardBlank):I,I=!I&&_.fittingRules.hRule2?b(f,c,_.hardBlank):I,I=!I&&_.fittingRules.hRule3?H(f,c,_.hardBlank):I,I=!I&&_.fittingRules.hRule4?x(f,c,_.hardBlank):I,I=!I&&_.fittingRules.hRule5?M(f,c,_.hardBlank):I,I=!I&&_.fittingRules.hRule6?p(f,c,_.hardBlank):I,!I){L=L-1;break _}}if(a)break;L++}return Math.min(o,L)}function j(T,n,_,e){let t,r,o=[],L,a,I,h,R,f,c,v;for(t=0;t<e.height;t++){c=T[t],v=n[t],R=c.length,f=v.length,L=R-_,a=c.substr(0,Math.max(0,L)),I="";const __=Math.max(0,R-_);var P=c.substring(__,__+_),K=v.substring(0,Math.min(_,f));for(r=0;r<_;r++){var S=r<R?P.substring(r,r+1):" ",C=r<f?K.substring(r,r+1):" ";if(S!==" "&&C!==" ")if(e.fittingRules.hLayout===1)I+=W(S,C,e.hardBlank);else if(e.fittingRules.hLayout===2)I+=W(S,C,e.hardBlank);else{var m="";m=!m&&e.fittingRules.hRule1?V(S,C,e.hardBlank):m,m=!m&&e.fittingRules.hRule2?b(S,C,e.hardBlank):m,m=!m&&e.fittingRules.hRule3?H(S,C,e.hardBlank):m,m=!m&&e.fittingRules.hRule4?x(S,C,e.hardBlank):m,m=!m&&e.fittingRules.hRule5?M(S,C,e.hardBlank):m,m=!m&&e.fittingRules.hRule6?p(S,C,e.hardBlank):m,m=m||W(S,C,e.hardBlank),I+=m}else I+=W(S,C,e.hardBlank)}_>=f?h="":h=v.substring(_,_+Math.max(0,f-_)),o[t]=a+I+h}return o}function U(T){let n=[],_;for(_=0;_<T;_++)n[_]="";return n}const D=function(T){return Math.max.apply(Math,T.map(function(n,_){return n.length}))};function $(T,n,_){return T.reduce(function(e,t){return j(e,t.fig,t.overlap,_)},U(n))}function I_(T,n,_){const e={};for(let t=T.length;--t;){let r=$(T.slice(0,t),n,_);if(D(r)<=_.width){e.outputFigText=r,t<T.length?e.chars=T.slice(t):e.chars=[];break}}return e}function i_(T,n,_){let e,t,r=0,o,L,a,I=_.height,h=[],R,f,c=[],v,P,K,S,C;for(L=U(I),_.width>0&&_.whitespaceBreak&&(f={chars:[],overlap:r}),_.printDirection===1&&(T=T.split("").reverse().join("")),a=T.length,e=0;e<a;e++)if(v=T.substring(e,e+1),P=v.match(/\s/),t=n[v.charCodeAt(0)],S=null,t){if(_.fittingRules.hLayout!==0){for(r=1e4,o=0;o<_.height;o++)r=Math.min(r,o_(L[o],t[o],_));r=r===1e4?0:r}if(_.width>0&&(_.whitespaceBreak?(K=$(f.chars.concat([{fig:t,overlap:r}]),I,_),S=$(c.concat([{fig:K,overlap:f.overlap}]),I,_),R=D(S)):(S=j(L,t,r,_),R=D(S)),R>=_.width&&e>0&&(_.whitespaceBreak?(L=$(c.slice(0,-1),I,_),c.length>1&&(h.push(L),L=U(I)),c=[]):(h.push(L),L=U(I)))),_.width>0&&_.whitespaceBreak&&((!P||e===a-1)&&f.chars.push({fig:t,overlap:r}),P||e===a-1)){for(C=null;S=$(f.chars,I,_),R=D(S),R>=_.width;)C=I_(f.chars,I,_),f={chars:C.chars},h.push(C.outputFigText);R>0&&(C?c.push({fig:S,overlap:1}):c.push({fig:S,overlap:f.overlap})),P&&(c.push({fig:t,overlap:r}),L=U(I)),e===a-1&&(L=$(c,I,_)),f={chars:[],overlap:r};continue}L=j(L,t,r,_)}return D(L)>0&&h.push(L),_.showHardBlanks!==!0&&h.forEach(function(m){for(a=m.length,o=0;o<a;o++)m[o]=m[o].replace(new RegExp("\\"+_.hardBlank,"g")," ")}),h}const s_=function(T,n){let _=["hLayout","hRule1","hRule2","hRule3","hRule4","hRule5","hRule6"],e={},t;if(T==="default")for(t=0;t<_.length;t++)e[_[t]]=n.fittingRules[_[t]];else if(T==="full")e={hLayout:0,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(T==="fitted")e={hLayout:1,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(T==="controlled smushing")e={hLayout:3,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(T==="universal smushing")e={hLayout:2,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return e},E_=function(T,n){let _=["vLayout","vRule1","vRule2","vRule3","vRule4","vRule5"],e={},t;if(T==="default")for(t=0;t<_.length;t++)e[_[t]]=n.fittingRules[_[t]];else if(T==="full")e={vLayout:0,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(T==="fitted")e={vLayout:1,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(T==="controlled smushing")e={vLayout:3,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(T==="universal smushing")e={vLayout:2,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return e},z=function(T,n,_){_=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`);let e=_.split(`
`),t=[],r,o,L;for(o=e.length,r=0;r<o;r++)t=t.concat(i_(e[r],u[T],n));for(o=t.length,L=t[0],r=1;r<o;r++)L=L_(L,t[r],n);return L?L.join(`
`):""};function Z(T,n){let _=JSON.parse(JSON.stringify(T)),e,t;if(typeof n.horizontalLayout<"u"){e=s_(n.horizontalLayout,T);for(t in e)e.hasOwnProperty(t)&&(_.fittingRules[t]=e[t])}if(typeof n.verticalLayout<"u"){e=E_(n.verticalLayout,T);for(t in e)e.hasOwnProperty(t)&&(_.fittingRules[t]=e[t])}return _.printDirection=typeof n.printDirection<"u"?n.printDirection:T.printDirection,_.showHardBlanks=n.showHardBlanks||!1,_.width=n.width||-1,_.whitespaceBreak=n.whitespaceBreak||!1,_}const g=function(T,n,_){return g.text(T,n,_)};return g.text=async function(T,n,_){let e="";return T=T+"",typeof arguments[1]=="function"&&(_=n,n={},n.font=N.font),typeof n=="string"?(e=n,n={}):(n=n||{},e=n.font||N.font),await new Promise((t,r)=>{g.loadFont(e,function(o,L){if(o){r(o),_&&_(o);return}const a=z(e,Z(L,n),T);t(a),_&&_(null,a)})})},g.textSync=function(T,n){let _="";T=T+"",typeof n=="string"?(_=n,n={}):(n=n||{},_=n.font||N.font);var e=Z(g.loadFontSync(_),n);return z(_,e,T)},g.metadata=function(T,n){return T=T+"",new Promise(function(_,e){g.loadFont(T,function(t,r){if(t){n&&n(t),e(t);return}n&&n(null,r,u[T].comment),_([r,u[T].comment])})})},g.defaults=function(T){if(typeof T=="object"&&T!==null)for(var n in T)T.hasOwnProperty(n)&&(N[n]=T[n]);return JSON.parse(JSON.stringify(N))},g.parseFont=function(T,n){n=n.replace(/\r\n/g,`
`).replace(/\r/g,`
`),u[T]={};var _=n.split(`
`),e=_.splice(0,1)[0].split(" "),t=u[T],r={};if(r.hardBlank=e[0].substr(5,1),r.height=parseInt(e[1],10),r.baseline=parseInt(e[2],10),r.maxLength=parseInt(e[3],10),r.oldLayout=parseInt(e[4],10),r.numCommentLines=parseInt(e[5],10),r.printDirection=e.length>=6?parseInt(e[6],10):0,r.fullLayout=e.length>=7?parseInt(e[7],10):null,r.codeTagCount=e.length>=8?parseInt(e[8],10):null,r.fittingRules=w(r.oldLayout,r.fullLayout),t.options=r,r.hardBlank.length!==1||isNaN(r.height)||isNaN(r.baseline)||isNaN(r.maxLength)||isNaN(r.oldLayout)||isNaN(r.numCommentLines))throw new Error("FIGlet header contains invalid values.");let o=[],L;for(L=32;L<=126;L++)o.push(L);if(o=o.concat(196,214,220,228,246,252,223),_.length<r.numCommentLines+r.height*o.length)throw new Error("FIGlet file is missing data.");let a,I,h=!1;for(t.comment=_.splice(0,r.numCommentLines).join(`
`),t.numChars=0;_.length>0&&t.numChars<o.length;){for(a=o[t.numChars],t[a]=_.splice(0,r.height),L=0;L<r.height;L++)typeof t[a][L]>"u"?t[a][L]="":(I=new RegExp("\\"+t[a][L].substr(t[a][L].length-1,1)+"+$"),t[a][L]=t[a][L].replace(I,""));t.numChars++}for(;_.length>0;){if(a=_.splice(0,1)[0].split(" ")[0],/^0[xX][0-9a-fA-F]+$/.test(a))a=parseInt(a,16);else if(/^0[0-7]+$/.test(a))a=parseInt(a,8);else if(/^[0-9]+$/.test(a))a=parseInt(a,10);else if(/^-0[xX][0-9a-fA-F]+$/.test(a))a=parseInt(a,16);else{if(a==="")break;console.log("Invalid data:"+a),h=!0;break}for(t[a]=_.splice(0,r.height),L=0;L<r.height;L++)typeof t[a][L]>"u"?t[a][L]="":(I=new RegExp("\\"+t[a][L].substr(t[a][L].length-1,1)+"+$"),t[a][L]=t[a][L].replace(I,""));t.numChars++}if(h===!0)throw new Error("Error parsing data.");return r},g.loadFont=function(T,n){if(u[T])return n&&n(null,u[T].options),Promise.resolve();if(typeof fetch!="function")throw console.error("figlet.js requires the fetch API or a fetch polyfill such as https://cdnjs.com/libraries/fetch"),new Error("fetch is required for figlet.js to work.");return fetch(N.fontPath+"/"+T+".flf").then(function(_){if(_.ok)return _.text();throw console.log("Unexpected response",_),new Error("Network response was not ok.")}).then(function(_){n&&n(null,g.parseFont(T,_))}).catch(n)},g.loadFontSync=function(T){if(u[T])return u[T].options;throw new Error("synchronous font loading is not implemented for the browser")},g.preloadFonts=function(T,n){let _=[];return T.reduce(function(e,t){return e.then(function(){return fetch(N.fontPath+"/"+t+".flf").then(r=>r.text()).then(function(r){_.push(r)})})},Promise.resolve()).then(function(e){for(var t in T)T.hasOwnProperty(t)&&g.parseFont(T[t],_[t]);n&&n()})},g.figFonts=u,g})();E.exports=i}(J)),J.exports}var d_=A_();const Y=l_(d_),u_=`flf2a$ 6 5 16 15 13 0 24463 229
Standard by Glenn Chappell & Ian Chai 3/93 -- based on Frank's .sig
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Modified for figlet 2.2 by John Cowan <cowan@ccil.org>
  to add Latin-{2,3,4,5} support (Unicode U+0100-017F).
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

Font modified May 20, 2012 by patorjk to add the 0xCA0 character
 $@
 $@
 $@
 $@
 $@
 $@@
  _ @
 | |@
 | |@
 |_|@
 (_)@
    @@
  _ _ @
 ( | )@
  V V @
   $  @
   $  @
      @@
    _  _   @
  _| || |_ @
 |_  ..  _|@
 |_      _|@
   |_||_|  @
           @@
   _  @
  | | @
 / __)@
 \\__ \\@
 (   /@
  |_| @@
  _  __@
 (_)/ /@
   / / @
  / /_ @
 /_/(_)@
       @@
   ___   @
  ( _ )  @
  / _ \\/\\@
 | (_>  <@
  \\___/\\/@
         @@
  _ @
 ( )@
 |/ @
  $ @
  $ @
    @@
   __@
  / /@
 | | @
 | | @
 | | @
  \\_\\@@
 __  @
 \\ \\ @
  | |@
  | |@
  | |@
 /_/ @@
       @
 __/\\__@
 \\    /@
 /_  _\\@
   \\/  @
       @@
        @
    _   @
  _| |_ @
 |_   _|@
   |_|  @
        @@
    @
    @
    @
  _ @
 ( )@
 |/ @@
        @
        @
  _____ @
 |_____|@
    $   @
        @@
    @
    @
    @
  _ @
 (_)@
    @@
     __@
    / /@
   / / @
  / /  @
 /_/   @
       @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
  _ @
 / |@
 | |@
 | |@
 |_|@
    @@
  ____  @
 |___ \\ @
   __) |@
  / __/ @
 |_____|@
        @@
  _____ @
 |___ / @
   |_ \\ @
  ___) |@
 |____/ @
        @@
  _  _   @
 | || |  @
 | || |_ @
 |__   _|@
    |_|  @
         @@
  ____  @
 | ___| @
 |___ \\ @
  ___) |@
 |____/ @
        @@
   __   @
  / /_  @
 | '_ \\ @
 | (_) |@
  \\___/ @
        @@
  _____ @
 |___  |@
    / / @
   / /  @
  /_/   @
        @@
   ___  @
  ( _ ) @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
   ___  @
  / _ \\ @
 | (_) |@
  \\__, |@
    /_/ @
        @@
    @
  _ @
 (_)@
  _ @
 (_)@
    @@
    @
  _ @
 (_)@
  _ @
 ( )@
 |/ @@
   __@
  / /@
 / / @
 \\ \\ @
  \\_\\@
     @@
        @
  _____ @
 |_____|@
 |_____|@
    $   @
        @@
 __  @
 \\ \\ @
  \\ \\@
  / /@
 /_/ @
     @@
  ___ @
 |__ \\@
   / /@
  |_| @
  (_) @
      @@
    ____  @
   / __ \\ @
  / / _\` |@
 | | (_| |@
  \\ \\__,_|@
   \\____/ @@
     _    @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @@
  ____  @
 | __ ) @
 |  _ \\ @
 | |_) |@
 |____/ @
        @@
   ____ @
  / ___|@
 | |    @
 | |___ @
  \\____|@
        @@
  ____  @
 |  _ \\ @
 | | | |@
 | |_| |@
 |____/ @
        @@
  _____ @
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @@
  _____ @
 |  ___|@
 | |_   @
 |  _|  @
 |_|    @
        @@
   ____ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
  _   _ @
 | | | |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
  ___ @
 |_ _|@
  | | @
  | | @
 |___|@
      @@
      _ @
     | |@
  _  | |@
 | |_| |@
  \\___/ @
        @@
  _  __@
 | |/ /@
 | ' / @
 | . \\ @
 |_|\\_\\@
       @@
  _     @
 | |    @
 | |    @
 | |___ @
 |_____|@
        @@
  __  __ @
 |  \\/  |@
 | |\\/| |@
 | |  | |@
 |_|  |_|@
         @@
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  __/ @
 |_|    @
        @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\__\\_\\@
        @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
  ____  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
        @@
  _   _ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @@
 __     __@
 \\ \\   / /@
  \\ \\ / / @
   \\ V /  @
    \\_/   @
          @@
 __        __@
 \\ \\      / /@
  \\ \\ /\\ / / @
   \\ V  V /  @
    \\_/\\_/   @
             @@
 __  __@
 \\ \\/ /@
  \\  / @
  /  \\ @
 /_/\\_\\@
       @@
 __   __@
 \\ \\ / /@
  \\ V / @
   | |  @
   |_|  @
        @@
  _____@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
  __ @
 | _|@
 | | @
 | | @
 | | @
 |__|@@
 __    @
 \\ \\   @
  \\ \\  @
   \\ \\ @
    \\_\\@
       @@
  __ @
 |_ |@
  | |@
  | |@
  | |@
 |__|@@
  /\\ @
 |/\\|@
   $ @
   $ @
   $ @
     @@
        @
        @
        @
        @
  _____ @
 |_____|@@
  _ @
 ( )@
  \\|@
  $ @
  $ @
    @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
  _     @
 | |__  @
 | '_ \\ @
 | |_) |@
 |_.__/ @
        @@
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @@
      _ @
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @@
   __ @
  / _|@
 | |_ @
 |  _|@
 |_|  @
      @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
  _     @
 | |__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
  _ @
 (_)@
 | |@
 | |@
 |_|@
    @@
    _ @
   (_)@
   | |@
   | |@
  _/ |@
 |__/ @@
  _    @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
       @@
  _ @
 | |@
 | |@
 | |@
 |_|@
    @@
            @
  _ __ ___  @
 | '_ \` _ \\ @
 | | | | | |@
 |_| |_| |_|@
            @@
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
        @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
        @
  _ __  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 |_|    @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
     |_|@@
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
       @@
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
      @@
  _   @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @@
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
        @
 __   __@
 \\ \\ / /@
  \\ V / @
   \\_/  @
        @@
           @
 __      __@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @@
       @
 __  __@
 \\ \\/ /@
  >  < @
 /_/\\_\\@
       @@
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
      @
  ____@
 |_  /@
  / / @
 /___|@
      @@
    __@
   / /@
  | | @
 < <  @
  | | @
   \\_\\@@
  _ @
 | |@
 | |@
 | |@
 | |@
 |_|@@
 __   @
 \\ \\  @
  | | @
   > >@
  | | @
 /_/  @@
  /\\/|@
 |/\\/ @
   $  @
   $  @
   $  @
      @@
  _   _ @
 (_)_(_)@
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\___/ @
        @@
  _   _ @
 (_)_(_)@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
   ___ @
  / _ \\@
 | |/ /@
 | |\\ \\@
 | ||_/@
 |_|   @@
160  NO-BREAK SPACE
 $@
 $@
 $@
 $@
 $@
 $@@
161  INVERTED EXCLAMATION MARK
  _ @
 (_)@
 | |@
 | |@
 |_|@
    @@
162  CENT SIGN
    _  @
   | | @
  / __)@
 | (__ @
  \\   )@
   |_| @@
163  POUND SIGN
    ___  @
   / ,_\\ @
 _| |_   @
  | |___ @
 (_,____|@
         @@
164  CURRENCY SIGN
 /\\___/\\@
 \\  _  /@
 | (_) |@
 / ___ \\@
 \\/   \\/@
        @@
165  YEN SIGN
  __ __ @
  \\ V / @
 |__ __|@
 |__ __|@
   |_|  @
        @@
166  BROKEN BAR
  _ @
 | |@
 |_|@
  _ @
 | |@
 |_|@@
167  SECTION SIGN
    __ @
  _/ _)@
 / \\ \\ @
 \\ \\\\ \\@
  \\ \\_/@
 (__/  @@
168  DIAERESIS
  _   _ @
 (_) (_)@
  $   $ @
  $   $ @
  $   $ @
        @@
169  COPYRIGHT SIGN
    _____   @
   / ___ \\  @
  / / __| \\ @
 | | (__   |@
  \\ \\___| / @
   \\_____/  @@
170  FEMININE ORDINAL INDICATOR
  __ _ @
 / _\` |@
 \\__,_|@
 |____|@
    $  @
       @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
   ____@
  / / /@
 / / / @
 \\ \\ \\ @
  \\_\\_\\@
       @@
172  NOT SIGN
        @
  _____ @
 |___  |@
     |_|@
    $   @
        @@
173  SOFT HYPHEN
       @
       @
  ____ @
 |____|@
    $  @
       @@
174  REGISTERED SIGN
    _____   @
   / ___ \\  @
  / | _ \\ \\ @
 |  |   /  |@
  \\ |_|_\\ / @
   \\_____/  @@
175  MACRON
  _____ @
 |_____|@
    $   @
    $   @
    $   @
        @@
176  DEGREE SIGN
   __  @
  /  \\ @
 | () |@
  \\__/ @
    $  @
       @@
177  PLUS-MINUS SIGN
    _   @
  _| |_ @
 |_   _|@
  _|_|_ @
 |_____|@
        @@
178  SUPERSCRIPT TWO
  ___ @
 |_  )@
  / / @
 /___|@
   $  @
      @@
179  SUPERSCRIPT THREE
  ____@
 |__ /@
  |_ \\@
 |___/@
   $  @
      @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
  $ @
  $ @
    @@
181  MICRO SIGN
        @
  _   _ @
 | | | |@
 | |_| |@
 | ._,_|@
 |_|    @@
182  PILCROW SIGN
   _____ @
  /     |@
 | (| | |@
  \\__ | |@
    |_|_|@
         @@
183  MIDDLE DOT
    @
  _ @
 (_)@
  $ @
  $ @
    @@
184  CEDILLA
    @
    @
    @
    @
  _ @
 )_)@@
185  SUPERSCRIPT ONE
  _ @
 / |@
 | |@
 |_|@
  $ @
    @@
186  MASCULINE ORDINAL INDICATOR
  ___ @
 / _ \\@
 \\___/@
 |___|@
   $  @
      @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
 ____  @
 \\ \\ \\ @
  \\ \\ \\@
  / / /@
 /_/_/ @
       @@
188  VULGAR FRACTION ONE QUARTER
  _   __    @
 / | / / _  @
 | |/ / | | @
 |_/ /|_  _|@
  /_/   |_| @
            @@
189  VULGAR FRACTION ONE HALF
  _   __   @
 / | / /__ @
 | |/ /_  )@
 |_/ / / / @
  /_/ /___|@
           @@
190  VULGAR FRACTION THREE QUARTERS
  ____  __    @
 |__ / / / _  @
  |_ \\/ / | | @
 |___/ /|_  _|@
    /_/   |_| @
              @@
191  INVERTED QUESTION MARK
   _  @
  (_) @
  | | @
 / /_ @
 \\___|@
      @@
192  LATIN CAPITAL LETTER A WITH GRAVE
   __   @
   \\_\\  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
193  LATIN CAPITAL LETTER A WITH ACUTE
    __  @
   /_/  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
195  LATIN CAPITAL LETTER A WITH TILDE
   /\\/| @
  |/\\/  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
    _   @
   (o)  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
198  LATIN CAPITAL LETTER AE
     ______ @
    /  ____|@
   / _  _|  @
  / __ |___ @
 /_/ |_____|@
            @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   ____ @
  / ___|@
 | |    @
 | |___ @
  \\____|@
    )_) @@
200  LATIN CAPITAL LETTER E WITH GRAVE
   __   @
  _\\_\\_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
201  LATIN CAPITAL LETTER E WITH ACUTE
    __  @
  _/_/_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
 | ____|@
 |  _|_ @
 |_____|@
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
  _   _ @
 (_)_(_)@
 | ____|@
 |  _|_ @
 |_____|@
        @@
204  LATIN CAPITAL LETTER I WITH GRAVE
  __  @
  \\_\\ @
 |_ _|@
  | | @
 |___|@
      @@
205  LATIN CAPITAL LETTER I WITH ACUTE
   __ @
  /_/ @
 |_ _|@
  | | @
 |___|@
      @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
 |_ _|@
  | | @
 |___|@
      @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  |_ _| @
   | |  @
  |___| @
        @@
208  LATIN CAPITAL LETTER ETH
    ____  @
   |  _ \\ @
  _| |_| |@
 |__ __| |@
   |____/ @
          @@
209  LATIN CAPITAL LETTER N WITH TILDE
   /\\/|@
  |/\\/ @
 | \\| |@
 | .\` |@
 |_|\\_|@
       @@
210  LATIN CAPITAL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
211  LATIN CAPITAL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
213  LATIN CAPITAL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
215  MULTIPLICATION SIGN
     @
     @
 /\\/\\@
 >  <@
 \\/\\/@
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   ____ @
  / _// @
 | |// |@
 | //| |@
  //__/ @
        @@
217  LATIN CAPITAL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | |_| |@
  \\___/ @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\___/ @
        @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
    __  @
 __/_/__@
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
222  LATIN CAPITAL LETTER THORN
  _     @
 | |___ @
 |  __ \\@
 |  ___/@
 |_|    @
        @@
223  LATIN SMALL LETTER SHARP S
   ___ @
  / _ \\@
 | |/ /@
 | |\\ \\@
 | ||_/@
 |_|   @@
224  LATIN SMALL LETTER A WITH GRAVE
   __   @
   \\_\\_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
225  LATIN SMALL LETTER A WITH ACUTE
    __  @
   /_/_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
227  LATIN SMALL LETTER A WITH TILDE
   /\\/| @
  |/\\/_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
229  LATIN SMALL LETTER A WITH RING ABOVE
    __  @
   (()) @
  / _ '|@
 | (_| |@
  \\__,_|@
        @@
230  LATIN SMALL LETTER AE
           @
   __ ____ @
  / _\`  _ \\@
 | (_|  __/@
  \\__,____|@
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
   )_) @@
232  LATIN SMALL LETTER E WITH GRAVE
   __  @
   \\_\\ @
  / _ \\@
 |  __/@
  \\___|@
       @@
233  LATIN SMALL LETTER E WITH ACUTE
    __ @
   /_/ @
  / _ \\@
 |  __/@
  \\___|@
       @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
   //\\ @
  |/_\\|@
  / _ \\@
 |  __/@
  \\___|@
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 |  __/ @
  \\___| @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
 __ @
 \\_\\@
 | |@
 | |@
 |_|@
    @@
237  LATIN SMALL LETTER I WITH ACUTE
  __@
 /_/@
 | |@
 | |@
 |_|@
    @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
  | | @
  | | @
  |_| @
      @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
   | |  @
   | |  @
   |_|  @
        @@
240  LATIN SMALL LETTER ETH
   /\\/\\ @
   >  < @
  _\\/\\ |@
 / __\` |@
 \\____/ @
        @@
241  LATIN SMALL LETTER N WITH TILDE
   /\\/| @
  |/\\/  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
242  LATIN SMALL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
243  LATIN SMALL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
245  LATIN SMALL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
247  DIVISION SIGN
        @
    _   @
  _(_)_ @
 |_____|@
   (_)  @
        @@
248  LATIN SMALL LETTER O WITH STROKE
         @
   ____  @
  / _//\\ @
 | (//) |@
  \\//__/ @
         @@
249  LATIN SMALL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
250  LATIN SMALL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
253  LATIN SMALL LETTER Y WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
254  LATIN SMALL LETTER THORN
  _     @
 | |__  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 |_|    @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
0x0100  LATIN CAPITAL LETTER A WITH MACRON
   ____ @
  /___/ @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
0x0101  LATIN SMALL LETTER A WITH MACRON
    ___ @
   /_ _/@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0102  LATIN CAPITAL LETTER A WITH BREVE
  _   _ @
  \\\\_// @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
0x0103  LATIN SMALL LETTER A WITH BREVE
   \\_/  @
   ___  @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0104  LATIN CAPITAL LETTER A WITH OGONEK
        @
    _   @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
     (_(@@
0x0105  LATIN SMALL LETTER A WITH OGONEK
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
     (_(@@
0x0106  LATIN CAPITAL LETTER C WITH ACUTE
     __ @
   _/_/ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x0107  LATIN SMALL LETTER C WITH ACUTE
    __ @
   /__/@
  / __|@
 | (__ @
  \\___|@
       @@
0x0108  LATIN CAPITAL LETTER C WITH CIRCUMFLEX
     /\\ @
   _//\\\\@
  / ___|@
 | |___ @
  \\____|@
        @@
0x0109  LATIN SMALL LETTER C WITH CIRCUMFLEX
    /\\ @
   /_\\ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010A  LATIN CAPITAL LETTER C WITH DOT ABOVE
    []  @
   ____ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x010B  LATIN SMALL LETTER C WITH DOT ABOVE
   []  @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010C  LATIN CAPITAL LETTER C WITH CARON
   \\\\// @
   _\\/_ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x010D  LATIN SMALL LETTER C WITH CARON
   \\\\//@
   _\\/ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010E  LATIN CAPITAL LETTER D WITH CARON
   \\\\// @
  __\\/  @
 |  _ \\ @
 | |_| |@
 |____/ @
        @@
0x010F  LATIN SMALL LETTER D WITH CARON
  \\/  _ @
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0110  LATIN CAPITAL LETTER D WITH STROKE
   ____   @
  |_ __ \\ @
 /| |/ | |@
 /|_|/_| |@
  |_____/ @
          @@
0x0111  LATIN SMALL LETTER D WITH STROKE
    ---|@
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0112  LATIN CAPITAL LETTER E WITH MACRON
   ____ @
  /___/ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0113  LATIN SMALL LETTER E WITH MACRON
    ____@
   /_ _/@
  / _ \\ @
 |  __/ @
  \\___| @
        @@
0x0114  LATIN CAPITAL LETTER E WITH BREVE
  _   _ @
  \\\\_// @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0115  LATIN SMALL LETTER E WITH BREVE
  \\\\  //@
    --  @
  / _ \\ @
 |  __/ @
  \\___| @
        @@
0x0116  LATIN CAPITAL LETTER E WITH DOT ABOVE
    []  @
  _____ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0117  LATIN SMALL LETTER E WITH DOT ABOVE
    [] @
    __ @
  / _ \\@
 |  __/@
  \\___|@
       @@
0x0118  LATIN CAPITAL LETTER E WITH OGONEK
        @
  _____ @
 | ____|@
 |  _|_ @
 |_____|@
    (__(@@
0x0119  LATIN SMALL LETTER E WITH OGONEK
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
    (_(@@
0x011A  LATIN CAPITAL LETTER E WITH CARON
   \\\\// @
  __\\/_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x011B  LATIN SMALL LETTER E WITH CARON
   \\\\//@
    \\/ @
  / _ \\@
 |  __/@
  \\___|@
       @@
0x011C  LATIN CAPITAL LETTER G WITH CIRCUMFLEX
   _/\\_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x011D  LATIN SMALL LETTER G WITH CIRCUMFLEX
     /\\ @
   _/_ \\@
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x011E  LATIN CAPITAL LETTER G WITH BREVE
   _\\/_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x011F  LATIN SMALL LETTER G WITH BREVE
  \\___/ @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x0120  LATIN CAPITAL LETTER G WITH DOT ABOVE
   _[]_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x0121  LATIN SMALL LETTER G WITH DOT ABOVE
   []   @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x0122  LATIN CAPITAL LETTER G WITH CEDILLA
   ____ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
   )__) @@
0x0123  LATIN SMALL LETTER G WITH CEDILLA
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |_))))@@
0x0124  LATIN CAPITAL LETTER H WITH CIRCUMFLEX
  _/ \\_ @
 | / \\ |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
0x0125  LATIN SMALL LETTER H WITH CIRCUMFLEX
  _  /\\ @
 | |//\\ @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0126  LATIN CAPITAL LETTER H WITH STROKE
  _   _ @
 | |=| |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
0x0127  LATIN SMALL LETTER H WITH STROKE
  _     @
 |=|__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0128  LATIN CAPITAL LETTER I WITH TILDE
  /\\//@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x0129  LATIN SMALL LETTER I WITH TILDE
    @
 /\\/@
 | |@
 | |@
 |_|@
    @@
0x012A  LATIN CAPITAL LETTER I WITH MACRON
 /___/@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x012B  LATIN SMALL LETTER I WITH MACRON
  ____@
 /___/@
  | | @
  | | @
  |_| @
      @@
0x012C  LATIN CAPITAL LETTER I WITH BREVE
  \\__/@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x012D  LATIN SMALL LETTER I WITH BREVE
    @
 \\_/@
 | |@
 | |@
 |_|@
    @@
0x012E  LATIN CAPITAL LETTER I WITH OGONEK
  ___ @
 |_ _|@
  | | @
  | | @
 |___|@
  (__(@@
0x012F  LATIN SMALL LETTER I WITH OGONEK
  _  @
 (_) @
 | | @
 | | @
 |_|_@
  (_(@@
0x0130  LATIN CAPITAL LETTER I WITH DOT ABOVE
  _[] @
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x0131  LATIN SMALL LETTER DOTLESS I
    @
  _ @
 | |@
 | |@
 |_|@
    @@
0x0132  LATIN CAPITAL LIGATURE IJ
  ___  _ @
 |_ _|| |@
  | | | |@
  | |_| |@
 |__|__/ @
         @@
0x0133  LATIN SMALL LIGATURE IJ
  _   _ @
 (_) (_)@
 | | | |@
 | | | |@
 |_|_/ |@
   |__/ @@
0x0134  LATIN CAPITAL LETTER J WITH CIRCUMFLEX
      /\\ @
     /_\\|@
  _  | | @
 | |_| | @
  \\___/  @
         @@
0x0135  LATIN SMALL LETTER J WITH CIRCUMFLEX
    /\\@
   /_\\@
   | |@
   | |@
  _/ |@
 |__/ @@
0x0136  LATIN CAPITAL LETTER K WITH CEDILLA
  _  _  @
 | |/ / @
 | ' /  @
 | . \\  @
 |_|\\_\\ @
    )__)@@
0x0137  LATIN SMALL LETTER K WITH CEDILLA
  _    @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
    )_)@@
0x0138  LATIN SMALL LETTER KRA
       @
  _ __ @
 | |/ \\@
 |   < @
 |_|\\_\\@
       @@
0x0139  LATIN CAPITAL LETTER L WITH ACUTE
  _   //@
 | | // @
 | |    @
 | |___ @
 |_____|@
        @@
0x013A  LATIN SMALL LETTER L WITH ACUTE
  //@
 | |@
 | |@
 | |@
 |_|@
    @@
0x013B  LATIN CAPITAL LETTER L WITH CEDILLA
  _     @
 | |    @
 | |    @
 | |___ @
 |_____|@
    )__)@@
0x013C  LATIN SMALL LETTER L WITH CEDILLA
  _   @
 | |  @
 | |  @
 | |  @
 |_|  @
   )_)@@
0x013D  LATIN CAPITAL LETTER L WITH CARON
  _ \\\\//@
 | | \\/ @
 | |    @
 | |___ @
 |_____|@
        @@
0x013E  LATIN SMALL LETTER L WITH CARON
  _ \\\\//@
 | | \\/ @
 | |    @
 | |    @
 |_|    @
        @@
0x013F  LATIN CAPITAL LETTER L WITH MIDDLE DOT
  _     @
 | |    @
 | | [] @
 | |___ @
 |_____|@
        @@
0x0140  LATIN SMALL LETTER L WITH MIDDLE DOT
  _    @
 | |   @
 | | []@
 | |   @
 |_|   @
       @@
0x0141  LATIN CAPITAL LETTER L WITH STROKE
  __    @
 | //   @
 |//|   @
 // |__ @
 |_____|@
        @@
0x0142  LATIN SMALL LETTER L WITH STROKE
  _ @
 | |@
 |//@
 //|@
 |_|@
    @@
0x0143  LATIN CAPITAL LETTER N WITH ACUTE
  _/ /_ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
0x0144  LATIN SMALL LETTER N WITH ACUTE
     _  @
  _ /_/ @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0145  LATIN CAPITAL LETTER N WITH CEDILLA
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
 )_)    @@
0x0146  LATIN SMALL LETTER N WITH CEDILLA
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
 )_)    @@
0x0147  LATIN CAPITAL LETTER N WITH CARON
  _\\/ _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
0x0148  LATIN SMALL LETTER N WITH CARON
  \\\\//  @
  _\\/_  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0149  LATIN SMALL LETTER N PRECEDED BY APOSTROPHE
          @
  _  __   @
 ( )| '_\\ @
 |/| | | |@
   |_| |_|@
          @@
0x014A  LATIN CAPITAL LETTER ENG
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\ |@
     )_)@@
0x014B  LATIN SMALL LETTER ENG
  _ __  @
 | '_ \\ @
 | | | |@
 |_| | |@
     | |@
    |__ @@
0x014C  LATIN CAPITAL LETTER O WITH MACRON
   ____ @
  /_ _/ @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
0x014D  LATIN SMALL LETTER O WITH MACRON
   ____ @
  /_ _/ @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
0x014E  LATIN CAPITAL LETTER O WITH BREVE
  \\   / @
   _-_  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x014F  LATIN SMALL LETTER O WITH BREVE
  \\   / @
   _-_  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0150  LATIN CAPITAL LETTER O WITH DOUBLE ACUTE
    ___ @
   /_/_/@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0151  LATIN SMALL LETTER O WITH DOUBLE ACUTE
    ___ @
   /_/_/@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0152  LATIN CAPITAL LIGATURE OE
   ___  ___ @
  / _ \\| __|@
 | | | |  | @
 | |_| | |__@
  \\___/|____@
            @@
0x0153  LATIN SMALL LIGATURE OE
             @
   ___   ___ @
  / _ \\ / _ \\@
 | (_) |  __/@
  \\___/ \\___|@
             @@
0x0154  LATIN CAPITAL LETTER R WITH ACUTE
  _/_/  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
0x0155  LATIN SMALL LETTER R WITH ACUTE
     __@
  _ /_/@
 | '__|@
 | |   @
 |_|   @
       @@
0x0156  LATIN CAPITAL LETTER R WITH CEDILLA
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
 )_)    @@
0x0157  LATIN SMALL LETTER R WITH CEDILLA
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
   )_) @@
0x0158  LATIN CAPITAL LETTER R WITH CARON
  _\\_/  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
0x0159  LATIN SMALL LETTER R WITH CARON
  \\\\// @
  _\\/_ @
 | '__|@
 | |   @
 |_|   @
       @@
0x015A  LATIN CAPITAL LETTER S WITH ACUTE
  _/_/  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x015B  LATIN SMALL LETTER S WITH ACUTE
    __@
  _/_/@
 / __|@
 \\__ \\@
 |___/@
      @@
0x015C  LATIN CAPITAL LETTER S WITH CIRCUMFLEX
  _/\\_  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x015D  LATIN SMALL LETTER S WITH CIRCUMFLEX
      @
  /_\\_@
 / __|@
 \\__ \\@
 |___/@
      @@
0x015E  LATIN CAPITAL LETTER S WITH CEDILLA
  ____  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
    )__)@@
0x015F  LATIN SMALL LETTER S WITH CEDILLA
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
   )_)@@
0x0160  LATIN CAPITAL LETTER S WITH CARON
  _\\_/  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x0161  LATIN SMALL LETTER S WITH CARON
  \\\\//@
  _\\/ @
 / __|@
 \\__ \\@
 |___/@
      @@
0x0162  LATIN CAPITAL LETTER T WITH CEDILLA
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
    )__)@@
0x0163  LATIN SMALL LETTER T WITH CEDILLA
  _   @
 | |_ @
 | __|@
 | |_ @
  \\__|@
   )_)@@
0x0164  LATIN CAPITAL LETTER T WITH CARON
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
        @@
0x0165  LATIN SMALL LETTER T WITH CARON
  \\/  @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @@
0x0166  LATIN CAPITAL LETTER T WITH STROKE
  _____ @
 |_   _|@
   | |  @
  -|-|- @
   |_|  @
        @@
0x0167  LATIN SMALL LETTER T WITH STROKE
  _   @
 | |_ @
 | __|@
 |-|_ @
  \\__|@
      @@
0x0168  LATIN CAPITAL LETTER U WITH TILDE
        @
  _/\\/_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x0169  LATIN SMALL LETTER U WITH TILDE
        @
  _/\\/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016A  LATIN CAPITAL LETTER U WITH MACRON
   ____ @
  /__ _/@
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x016B  LATIN SMALL LETTER U WITH MACRON
   ____ @
  / _  /@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016C  LATIN CAPITAL LETTER U WITH BREVE
        @
   \\_/_ @
 | | | |@
 | |_| |@
  \\____|@
        @@
0x016D  LATIN SMALL LETTER U WITH BREVE
        @
   \\_/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016E  LATIN CAPITAL LETTER U WITH RING ABOVE
    O   @
  __  _ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x016F  LATIN SMALL LETTER U WITH RING ABOVE
    O   @
  __ __ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x0170  LATIN CAPITAL LETTER U WITH DOUBLE ACUTE
   -- --@
  /_//_/@
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x0171  LATIN SMALL LETTER U WITH DOUBLE ACUTE
    ____@
  _/_/_/@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x0172  LATIN CAPITAL LETTER U WITH OGONEK
  _   _ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
    (__(@@
0x0173  LATIN SMALL LETTER U WITH OGONEK
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
     (_(@@
0x0174  LATIN CAPITAL LETTER W WITH CIRCUMFLEX
 __    /\\  __@
 \\ \\  //\\\\/ /@
  \\ \\ /\\ / / @
   \\ V  V /  @
    \\_/\\_/   @
             @@
0x0175  LATIN SMALL LETTER W WITH CIRCUMFLEX
      /\\   @
 __  //\\\\__@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @@
0x0176  LATIN CAPITAL LETTER Y WITH CIRCUMFLEX
    /\\  @
 __//\\\\ @
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
0x0177  LATIN SMALL LETTER Y WITH CIRCUMFLEX
    /\\  @
   //\\\\ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
0x0178  LATIN CAPITAL LETTER Y WITH DIAERESIS
  []  []@
 __    _@
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
0x0179  LATIN CAPITAL LETTER Z WITH ACUTE
  __/_/@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017A  LATIN SMALL LETTER Z WITH ACUTE
    _ @
  _/_/@
 |_  /@
  / / @
 /___|@
      @@
0x017B  LATIN CAPITAL LETTER Z WITH DOT ABOVE
  __[]_@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017C  LATIN SMALL LETTER Z WITH DOT ABOVE
   [] @
  ____@
 |_  /@
  / / @
 /___|@
      @@
0x017D  LATIN CAPITAL LETTER Z WITH CARON
  _\\_/_@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017E  LATIN SMALL LETTER Z WITH CARON
  \\\\//@
  _\\/_@
 |_  /@
  / / @
 /___|@
      @@
0x017F  LATIN SMALL LETTER LONG S
     __ @
    / _|@
 |-| |  @
 |-| |  @
   |_|  @
        @@
0x02C7  CARON
 \\\\//@
  \\/ @
    $@
    $@
    $@
    $@@
0x02D8  BREVE
 \\\\_//@
  \\_/ @
     $@
     $@
     $@
     $@@
0x02D9  DOT ABOVE
 []@
  $@
  $@
  $@
  $@
  $@@
0x02DB  OGONEK
    $@
    $@
    $@
    $@
    $@
 )_) @@
0x02DD  DOUBLE ACUTE ACCENT
  _ _ @
 /_/_/@
     $@
     $@
     $@
     $@@
0xCA0  KANNADA LETTER TTHA
   _____)@
  /_ ___/@
  / _ \\  @
 | (_) | @
 $\\___/$ @
         @@
         `,f_=`flf2a$ 8 6 14 15 16
DOOM by Frans P. de Vries <fpv@xymph.iaf.nl>  18 Jun 1996
based on Big by Glenn Chappell 4/93 -- based on Standard
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Explanation of first line:
flf2 - "magic number" for file identification
a    - should always be \`a', for now
$    - the "hardblank" -- prints as a blank, but can't be smushed
8    - height of a character
6    - height of a character, not including descenders
14   - max line length (excluding comment lines) + a fudge factor
15   - default smushmode for this font
16   - number of comment lines

$@
$@
$@
$@
$@
$@
$@
$@@
 _ @
| |@
| |@
| |@
|_|@
(_)@
   @
   @@
 _ _ @
( | )@
 V V @
  $  @
  $  @
  $  @
     @
     @@
   _  _   @
 _| || |_ @
|_  __  _|@
 _| || |_ @
|_  __  _|@
  |_||_|  @
          @
          @@
  _  @
 | | @
/ __)@
\\__ \\@
(   /@
 |_| @
     @
     @@
 _   __@
(_) / /@
   / / @
  / /  @
 / / _ @
/_/ (_)@
       @
       @@
        @
  ___   @
 ( _ )  @
 / _ \\/\\@
| (_>  <@
 \\___/\\/@
        @
        @@
 _ @
( )@
|/ @
 $ @
 $ @
 $ @
   @
   @@
  __@
 / /@
| | @
| | @
| | @
| | @
 \\_\\@
    @@
__  @
\\ \\ @
 | |@
 | |@
 | |@
 | |@
/_/ @
    @@
    _    @
 /\\| |/\\ @
 \\ \` ' / @
|_     _|@
 / , . \\ @
 \\/|_|\\/ @
         @
         @@
       @
   _   @
 _| |_ @
|_   _|@
  |_|  @
   $   @
       @
       @@
   @
   @
   @
   @
 _ @
( )@
|/ @
   @@
        @
        @
 ______ @
|______|@
    $   @
    $   @
        @
        @@
   @
   @
   @
   @
 _ @
(_)@
   @
   @@
     __@
    / /@
   / / @
  / /  @
 / /   @
/_/    @
       @
       @@
 _____ @
|  _  |@
| |/' |@
|  /| |@
\\ |_/ /@
 \\___/ @
       @
       @@
 __  @
/  | @
\`| | @
 | | @
_| |_@
\\___/@
     @
     @@
 _____ @
/ __  \\@
\`' / /'@
  / /  @
./ /___@
\\_____/@
       @
       @@
 _____ @
|____ |@
    / /@
  $ \\ \\@
.___/ /@
\\____/ @
       @
       @@
   ___ @
  /   |@
 / /| |@
/ /_| |@
\\___  |@
    |_/@
       @
       @@
 _____ @
|  ___|@
|___ \\ @
    \\ \\@
/\\__/ /@
\\____/ @
       @
       @@
  ____ @
 / ___|@
/ /___ @
| ___ \\@
| \\_/ |@
\\_____/@
       @
       @@
 ______@
|___  /@
  $/ / @
  / /  @
./ /   @
\\_/    @
       @
       @@
 _____ @
|  _  |@
 \\ V / @
 / _ \\ @
| |_| |@
\\_____/@
       @
       @@
 _____ @
|  _  |@
| |_| |@
\\____ |@
.___/ /@
\\____/ @
       @
       @@
   @
 _ @
(_)@
 $ @
 _ @
(_)@
   @
   @@
   @
 _ @
(_)@
 $ @
 _ @
( )@
|/ @
   @@
   __@
  / /@
 / / @
< <  @
 \\ \\ @
  \\_\\@
     @
     @@
        @
 ______ @
|______|@
 ______ @
|______|@
        @
        @
        @@
__   @
\\ \\  @
 \\ \\ @
  > >@
 / / @
/_/  @
     @
     @@
 ___  @
|__ \\ @
   ) |@
  / / @
 |_|  @
 (_)  @
      @
      @@
         @
   ____  @
  / __ \\ @
 / / _\` |@
| | (_| |@
 \\ \\__,_|@
  \\____/ @
         @@
  ___  @
 / _ \\ @
/ /_\\ \\@
|  _  |@
| | | |@
\\_| |_/@
       @
       @@
______ @
| ___ \\@
| |_/ /@
| ___ \\@
| |_/ /@
\\____/ @
       @
       @@
 _____ @
/  __ \\@
| /  \\/@
| |    @
| \\__/\\@
 \\____/@
       @
       @@
______ @
|  _  \\@
| | | |@
| | | |@
| |/ / @
|___/  @
       @
       @@
 _____ @
|  ___|@
| |__  @
|  __| @
| |___ @
\\____/ @
       @
       @@
______ @
|  ___|@
| |_   @
|  _|  @
| |    @
\\_|    @
       @
       @@
 _____ @
|  __ \\@
| |  \\/@
| | __ @
| |_\\ \\@
 \\____/@
       @
       @@
 _   _ @
| | | |@
| |_| |@
|  _  |@
| | | |@
\\_| |_/@
       @
       @@
 _____ @
|_   _|@
  | |  @
  | |  @
 _| |_ @
 \\___/ @
       @
       @@
   ___ @
  |_  |@
  $ | |@
    | |@
/\\__/ /@
\\____/ @
       @
       @@
 _   __@
| | / /@
| |/ / @
|    \\ @
| |\\  \\@
\\_| \\_/@
       @
       @@
 _     @
| | $  @
| | $  @
| |    @
| |____@
\\_____/@
       @
       @@
___  ___@
|  \\/  |@
| .  . |@
| |\\/| |@
| |  | |@
\\_|  |_/@
        @
        @@
 _   _ @
| \\ | |@
|  \\| |@
| . \` |@
| |\\  |@
\\_| \\_/@
       @
       @@
 _____ @
|  _  |@
| | | |@
| | | |@
\\ \\_/ /@
 \\___/ @
       @
       @@
______ @
| ___ \\@
| |_/ /@
|  __/ @
| |    @
\\_|    @
       @
       @@
 _____ @
|  _  |@
| | | |@
| | | |@
\\ \\/' /@
 \\_/\\_\\@
       @
       @@
______ @
| ___ \\@
| |_/ /@
|    / @
| |\\ \\ @
\\_| \\_|@
       @
       @@
 _____ @
/  ___|@
\\ \`--. @
 \`--. \\@
/\\__/ /@
\\____/ @
       @
       @@
 _____ @
|_   _|@
  | |  @
  | |  @
  | |  @
  \\_/  @
       @
       @@
 _   _ @
| | | |@
| | | |@
| | | |@
| |_| |@
 \\___/ @
       @
       @@
 _   _ @
| | | |@
| | | |@
| | | |@
\\ \\_/ /@
 \\___/ @
       @
       @@
 _    _ @
| |  | |@
| |  | |@
| |/\\| |@
\\  /\\  /@
 \\/  \\/ @
        @
        @@
__   __@
\\ \\ / /@
 \\ V / @
 /   \\ @
/ /^\\ \\@
\\/   \\/@
       @
       @@
__   __@
\\ \\ / /@
 \\ V / @
  \\ /  @
  | |  @
  \\_/  @
       @
       @@
 ______@
|___  /@
  $/ / @
  / /  @
./ /___@
\\_____/@
       @
       @@
 ___ @
|  _|@
| |  @
| |  @
| |  @
| |_ @
|___|@
     @@
__     @
\\ \\    @
 \\ \\   @
  \\ \\  @
   \\ \\ @
    \\_\\@
       @
       @@
 ___ @
|_  |@
  | |@
  | |@
  | |@
 _| |@
|___|@
     @@
 /\\ @
|/\\|@
  $ @
  $ @
  $ @
  $ @
    @
    @@
        @
        @
        @
        @
        @
    $   @
 ______ @
|______|@@
 _ @
( )@
 \\|@
 $ @
 $ @
 $ @
   @
   @@
       @
       @
  __ _ @
 / _\` |@
| (_| |@
 \\__,_|@
       @
       @@
 _     @
| |    @
| |__  @
| '_ \\ @
| |_) |@
|_.__/ @
       @
       @@
      @
      @
  ___ @
 / __|@
| (__ @
 \\___|@
      @
      @@
     _ @
    | |@
  __| |@
 / _\` |@
| (_| |@
 \\__,_|@
       @
       @@
      @
      @
  ___ @
 / _ \\@
|  __/@
 \\___|@
      @
      @@
  __ @
 / _|@
| |_ @
|  _|@
| |  @
|_|  @
     @
     @@
       @
       @
  __ _ @
 / _\` |@
| (_| |@
 \\__, |@
  __/ |@
 |___/ @@
 _     @
| |    @
| |__  @
| '_ \\ @
| | | |@
|_| |_|@
       @
       @@
 _ @
(_)@
 _ @
| |@
| |@
|_|@
   @
   @@
   _ @
  (_)@
   _ @
  | |@
  | |@
  | |@
 _/ |@
|__/ @@
 _    @
| |   @
| | __@
| |/ /@
|   < @
|_|\\_\\@
      @
      @@
 _ @
| |@
| |@
| |@
| |@
|_|@
   @
   @@
           @
           @
 _ __ ___  @
| '_ \` _ \\ @
| | | | | |@
|_| |_| |_|@
           @
           @@
       @
       @
 _ __  @
| '_ \\ @
| | | |@
|_| |_|@
       @
       @@
       @
       @
  ___  @
 / _ \\ @
| (_) |@
 \\___/ @
       @
       @@
       @
       @
 _ __  @
| '_ \\ @
| |_) |@
| .__/ @
| |    @
|_|    @@
       @
       @
  __ _ @
 / _\` |@
| (_| |@
 \\__, |@
    | |@
    |_|@@
      @
      @
 _ __ @
| '__|@
| |   @
|_|   @
      @
      @@
     @
     @
 ___ @
/ __|@
\\__ \\@
|___/@
     @
     @@
 _   @
| |  @
| |_ @
| __|@
| |_ @
 \\__|@
     @
     @@
       @
       @
 _   _ @
| | | |@
| |_| |@
 \\__,_|@
       @
       @@
       @
       @
__   __@
\\ \\ / /@
 \\ V / @
  \\_/  @
       @
       @@
          @
          @
__      __@
\\ \\ /\\ / /@
 \\ V  V / @
  \\_/\\_/  @
          @
          @@
      @
      @
__  __@
\\ \\/ /@
 >  < @
/_/\\_\\@
      @
      @@
       @
       @
 _   _ @
| | | |@
| |_| |@
 \\__, |@
  __/ |@
 |___/ @@
     @
     @
 ____@
|_  /@
 / / @
/___|@
     @
     @@
   __@
  / /@
 | | @
/ /  @
\\ \\  @
 | | @
  \\_\\@
     @@
 _ @
| |@
| |@
| |@
| |@
| |@
| |@
|_|@@
__   @
\\ \\  @
 | | @
  \\ \\@
  / /@
 | | @
/_/  @
     @@
 /\\/|@
|/\\/ @
  $  @
  $  @
  $  @
  $  @
     @
     @@
 _   _ @
(_)_(_)@
 / _ \\ @
/ /_\\ \\@
|  _  |@
\\_| |_/@
       @
       @@
 _   _ @
(_)_(_)@
|  _  |@
| | | |@
\\ \\_/ /@
 \\___/ @
       @
       @@
 _   _ @
(_) (_)@
| | | |@
| | | |@
| |_| |@
 \\___/ @
       @
       @@
 _   _ @
(_) (_)@
  __ _ @
 / _\` |@
| (_| |@
 \\__,_|@
       @
       @@
 _   _ @
(_) (_)@
  ___  @
 / _ \\ @
| (_) |@
 \\___/ @
       @
       @@
 _   _ @
(_) (_)@
 _   _ @
| | | |@
| |_| |@
 \\__,_|@
       @
       @@
  ___  @
 / _ \\ @
| | ) |@
| |< < @
| | ) |@
| ||_/ @
\\_|    @
       @@
`,R_=`flf2a$ 6 5 16 15 10 0 18319
Slant by Glenn Chappell 3/93 -- based on Standard
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

     $$@
    $$ @
   $$  @
  $$   @
 $$    @
$$     @@
    __@
   / /@
  / / @
 /_/  @
(_)   @
      @@
 _ _ @
( | )@
|/|/ @
 $   @
$    @
     @@
     __ __ @
  __/ // /_@
 /_  _  __/@
/_  _  __/ @
 /_//_/    @
           @@
     __@
   _/ /@
  / __/@
 (_  ) @
/  _/  @
/_/    @@
   _   __@
  (_)_/_/@
   _/_/  @
 _/_/_   @
/_/ (_)  @
         @@
   ___   @
  ( _ )  @
 / __ \\/|@
/ /_/  < @
\\____/\\/ @
         @@
  _ @
 ( )@
 |/ @
 $  @
$   @
    @@
     __@
   _/_/@
  / /  @
 / /   @
/ /    @
|_|    @@
     _ @
    | |@
    / /@
   / / @
 _/_/  @
/_/    @@
       @
  __/|_@
 |    /@
/_ __| @
 |/    @
       @@
       @
    __ @
 __/ /_@
/_  __/@
 /_/   @
       @@
   @
   @
   @
 _ @
( )@
|/ @@
       @
       @
 ______@
/_____/@
  $    @
       @@
   @
   @
   @
 _ @
(_)@
   @@
       __@
     _/_/@
   _/_/  @
 _/_/    @
/_/      @
         @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\____/  @
        @@
   ___@
  <  /@
  / / @
 / /  @
/_/   @
      @@
   ___ @
  |__ \\@
  __/ /@
 / __/ @
/____/ @
       @@
   _____@
  |__  /@
   /_ < @
 ___/ / @
/____/  @
        @@
   __ __@
  / // /@
 / // /_@
/__  __/@
  /_/   @
        @@
    ______@
   / ____/@
  /___ \\  @
 ____/ /  @
/_____/   @
          @@
   _____@
  / ___/@
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
 _____@
/__  /@
  / / @
 / /  @
/_/   @
      @@
   ____ @
  ( __ )@
 / __  |@
/ /_/ / @
\\____/  @
        @@
   ____ @
  / __ \\@
 / /_/ /@
 \\__, / @
/____/  @
        @@
     @
   _ @
  (_)@
 _   @
(_)  @
     @@
     @
   _ @
  (_)@
 _   @
( )  @
|/   @@
  __@
 / /@
/ / @
\\ \\ @
 \\_\\@
    @@
       @
  _____@
 /____/@
/____/ @
  $    @
       @@
__  @
\\ \\ @
 \\ \\@
 / /@
/_/ @
    @@
  ___ @
 /__ \\@
  / _/@
 /_/  @
(_)   @
      @@
   ______ @
  / ____ \\@
 / / __ \`/@
/ / /_/ / @
\\ \\__,_/  @
 \\____/   @@
    ___ @
   /   |@
  / /| |@
 / ___ |@
/_/  |_|@
        @@
    ____ @
   / __ )@
  / __  |@
 / /_/ / @
/_____/  @
         @@
   ______@
  / ____/@
 / /     @
/ /___   @
\\____/   @
         @@
    ____ @
   / __ \\@
  / / / /@
 / /_/ / @
/_____/  @
         @@
    ______@
   / ____/@
  / __/   @
 / /___   @
/_____/   @
          @@
    ______@
   / ____/@
  / /_    @
 / __/    @
/_/       @
          @@
   ______@
  / ____/@
 / / __  @
/ /_/ /  @
\\____/   @
         @@
    __  __@
   / / / /@
  / /_/ / @
 / __  /  @
/_/ /_/   @
          @@
    ____@
   /  _/@
   / /  @
 _/ /   @
/___/   @
        @@
       __@
      / /@
 __  / / @
/ /_/ /  @
\\____/   @
         @@
    __ __@
   / //_/@
  / ,<   @
 / /| |  @
/_/ |_|  @
         @@
    __ @
   / / @
  / /  @
 / /___@
/_____/@
       @@
    __  ___@
   /  |/  /@
  / /|_/ / @
 / /  / /  @
/_/  /_/   @
           @@
    _   __@
   / | / /@
  /  |/ / @
 / /|  /  @
/_/ |_/   @
          @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\____/  @
        @@
    ____ @
   / __ \\@
  / /_/ /@
 / ____/ @
/_/      @
         @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\___\\_\\ @
        @@
    ____ @
   / __ \\@
  / /_/ /@
 / _, _/ @
/_/ |_|  @
         @@
   _____@
  / ___/@
  \\__ \\ @
 ___/ / @
/____/  @
        @@
  ______@
 /_  __/@
  / /   @
 / /    @
/_/     @
        @@
   __  __@
  / / / /@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
 _    __@
| |  / /@
| | / / @
| |/ /  @
|___/   @
        @@
 _       __@
| |     / /@
| | /| / / @
| |/ |/ /  @
|__/|__/   @
           @@
   _  __@
  | |/ /@
  |   / @
 /   |  @
/_/|_|  @
        @@
__  __@
\\ \\/ /@
 \\  / @
 / /  @
/_/   @
      @@
 _____@
/__  /@
  / / @
 / /__@
/____/@
      @@
     ___@
    / _/@
   / /  @
  / /   @
 / /    @
/__/    @@
__    @
\\ \\   @
 \\ \\  @
  \\ \\ @
   \\_\\@
      @@
     ___@
    /  /@
    / / @
   / /  @
 _/ /   @
/__/    @@
  //|@
 |/||@
  $  @
 $   @
$    @
     @@
       @
       @
       @
       @
 ______@
/_____/@@
  _ @
 ( )@
  V @
 $  @
$   @
    @@
        @
  ____ _@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
    __  @
   / /_ @
  / __ \\@
 / /_/ /@
/_.___/ @
        @@
       @
  _____@
 / ___/@
/ /__  @
\\___/  @
       @@
       __@
  ____/ /@
 / __  / @
/ /_/ /  @
\\__,_/   @
         @@
      @
  ___ @
 / _ \\@
/  __/@
\\___/ @
      @@
    ____@
   / __/@
  / /_  @
 / __/  @
/_/     @
        @@
         @
   ____ _@
  / __ \`/@
 / /_/ / @
 \\__, /  @
/____/   @@
    __  @
   / /_ @
  / __ \\@
 / / / /@
/_/ /_/ @
        @@
    _ @
   (_)@
  / / @
 / /  @
/_/   @
      @@
       _ @
      (_)@
     / / @
    / /  @
 __/ /   @
/___/    @@
    __  @
   / /__@
  / //_/@
 / ,<   @
/_/|_|  @
        @@
    __@
   / /@
  / / @
 / /  @
/_/   @
      @@
            @
   ____ ___ @
  / __ \`__ \\@
 / / / / / /@
/_/ /_/ /_/ @
            @@
        @
   ____ @
  / __ \\@
 / / / /@
/_/ /_/ @
        @@
       @
  ____ @
 / __ \\@
/ /_/ /@
\\____/ @
       @@
         @
    ____ @
   / __ \\@
  / /_/ /@
 / .___/ @
/_/      @@
        @
  ____ _@
 / __ \`/@
/ /_/ / @
\\__, /  @
  /_/   @@
        @
   _____@
  / ___/@
 / /    @
/_/     @
        @@
        @
   _____@
  / ___/@
 (__  ) @
/____/  @
        @@
   __ @
  / /_@
 / __/@
/ /_  @
\\__/  @
      @@
        @
  __  __@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
       @
 _   __@
| | / /@
| |/ / @
|___/  @
       @@
          @
 _      __@
| | /| / /@
| |/ |/ / @
|__/|__/  @
          @@
        @
   _  __@
  | |/_/@
 _>  <  @
/_/|_|  @
        @@
         @
   __  __@
  / / / /@
 / /_/ / @
 \\__, /  @
/____/   @@
     @
 ____@
/_  /@
 / /_@
/___/@
     @@
     __@
   _/_/@
 _/_/  @
< <    @
/ /    @
\\_\\    @@
     __@
    / /@
   / / @
  / /  @
 / /   @
/_/    @@
     _ @
    | |@
    / /@
   _>_>@
 _/_/  @
/_/    @@
  /\\//@
 //\\/ @
  $   @
 $    @
$     @
      @@
    _  _ @
   (_)(_)@
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_)_(_)@
 / __ \`/ @
/ /_/ /  @
\\__,_/   @
         @@
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\__,_/   @
         @@
     ____ @
    / __ \\@
   / / / /@
  / /_| | @
 / //__/  @
/_/       @@
160  NO-BREAK SPACE
     $$@
    $$ @
   $$  @
  $$   @
 $$    @
$$     @@
161  INVERTED EXCLAMATION MARK
    _ @
   (_)@
  / / @
 / /  @
/_/   @
      @@
162  CENT SIGN
     __@
  __/ /@
 / ___/@
/ /__  @
\\  _/  @
/_/    @@
163  POUND SIGN
     ____ @
    / ,__\\@
 __/ /_   @
 _/ /___  @
(_,____/  @
          @@
164  CURRENCY SIGN
    /|___/|@
   | __  / @
  / /_/ /  @
 /___  |   @
|/   |/    @
           @@
165  YEN SIGN
    ____@
  _| / /@
 /_  __/@
/_  __/ @
 /_/    @
        @@
166  BROKEN BAR
     __@
    / /@
   /_/ @
  __   @
 / /   @
/_/    @@
167  SECTION SIGN
     __ @
   _/ _)@
  / | | @
 | || | @
 | |_/  @
(__/    @@
168  DIAERESIS
  _   _ @
 (_) (_)@
  $   $ @
 $   $  @
$   $   @
        @@
169  COPYRIGHT SIGN
    ______  @
   / _____\\ @
  / / ___/ |@
 / / /__  / @
|  \\___/ /  @
 \\______/   @@
170  FEMININE ORDINAL INDICATOR
   ___ _@
  / _ \`/@
 _\\_,_/ @
/____/  @
 $      @
        @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
  ____@
 / / /@
/ / / @
\\ \\ \\ @
 \\_\\_\\@
      @@
172  NOT SIGN
       @
 ______@
/___  /@
   /_/ @
 $     @
       @@
173  SOFT HYPHEN
      @
      @
 _____@
/____/@
  $   @
      @@
174  REGISTERED SIGN
    ______  @
   / ___  \\ @
  / / _ \\  |@
 / / , _/ / @
| /_/|_| /  @
 \\______/   @@
175  MACRON
 ______@
/_____/@
  $    @
 $     @
$      @
       @@
176  DEGREE SIGN
  ___ @
 / _ \\@
/ // /@
\\___/ @
 $    @
      @@
177  PLUS-MINUS SIGN
      __ @
   __/ /_@
  /_  __/@
 __/_/_  @
/_____/  @
         @@
178  SUPERSCRIPT TWO
   ___ @
  |_  |@
 / __/ @
/____/ @
 $     @
       @@
179  SUPERSCRIPT THREE
   ____@
  |_  /@
 _/_ < @
/____/ @
 $     @
       @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
 $  @
$   @
    @@
181  MICRO SIGN
          @
    __  __@
   / / / /@
  / /_/ / @
 / ._,_/  @
/_/       @@
182  PILCROW SIGN
  _______@
 / _    /@
/ (/ / / @
\\_  / /  @
 /_/_/   @
         @@
183  MIDDLE DOT
   @
 _ @
(_)@
 $ @
$  @
   @@
184  CEDILLA
   @
   @
   @
   @
 _ @
/_)@@
185  SUPERSCRIPT ONE
  ___@
 <  /@
 / / @
/_/  @
$    @
     @@
186  MASCULINE ORDINAL INDICATOR
   ___ @
  / _ \\@
 _\\___/@
/____/ @
 $     @
       @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
____  @
\\ \\ \\ @
 \\ \\ \\@
 / / /@
/_/_/ @
      @@
188  VULGAR FRACTION ONE QUARTER
  ___   __ @
 <  / _/_/ @
 / /_/_/___@
/_//_// / /@
 /_/ /_  _/@
      /_/  @@
189  VULGAR FRACTION ONE HALF
  ___   __   @
 <  / _/_/__ @
 / /_/_/|_  |@
/_//_/ / __/ @
 /_/  /____/ @
             @@
190  VULGAR FRACTION THREE QUARTERS
   ____    __ @
  |_  /  _/_/ @
 _/_ < _/_/___@
/____//_// / /@
    /_/ /_  _/@
         /_/  @@
191  INVERTED QUESTION MARK
    _ @
   (_)@
 _/ / @
/ _/_ @
\\___/ @
      @@
192  LATIN CAPITAL LETTER A WITH GRAVE
    __ @
   _\\_\\@
  / _ |@
 / __ |@
/_/ |_|@
       @@
193  LATIN CAPITAL LETTER A WITH ACUTE
     __@
   _/_/@
  / _ |@
 / __ |@
/_/ |_|@
       @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
     //|@
   _|/||@
  / _ | @
 / __ | @
/_/ |_| @
        @@
195  LATIN CAPITAL LETTER A WITH TILDE
     /\\//@
   _//\\/ @
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
    _  _ @
   (_)(_)@
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
    (())@
   /   |@
  / /| |@
 / ___ |@
/_/  |_|@
        @@
198  LATIN CAPITAL LETTER AE
    __________@
   /     ____/@
  / /|  __/   @
 / __  /___   @
/_/ /_____/   @
              @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   ______@
  / ____/@
 / /     @
/ /___   @
\\____/   @
 /_)     @@
200  LATIN CAPITAL LETTER E WITH GRAVE
    __ @
   _\\_\\@
  / __/@
 / _/  @
/___/  @
       @@
201  LATIN CAPITAL LETTER E WITH ACUTE
     __@
   _/_/@
  / __/@
 / _/  @
/___/  @
       @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
     //|@
   _|/||@
  / __/ @
 / _/   @
/___/   @
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
    _  _ @
   (_)(_)@
  / __/  @
 / _/    @
/___/    @
         @@
204  LATIN CAPITAL LETTER I WITH GRAVE
    __ @
   _\\_\\@
  /  _/@
 _/ /  @
/___/  @
       @@
205  LATIN CAPITAL LETTER I WITH ACUTE
     __@
   _/_/@
  /  _/@
 _/ /  @
/___/  @
       @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
     //|@
   _|/||@
  /  _/ @
 _/ /   @
/___/   @
        @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
    _  _ @
   (_)(_)@
  /  _/  @
 _/ /    @
/___/    @
         @@
208  LATIN CAPITAL LETTER ETH
     ____ @
    / __ \\@
 __/ /_/ /@
/_  __/ / @
 /_____/  @
          @@
209  LATIN CAPITAL LETTER N WITH TILDE
     /\\//@
   _//\\/ @
  / |/ / @
 /    /  @
/_/|_/   @
         @@
210  LATIN CAPITAL LETTER O WITH GRAVE
    __ @
  __\\_\\@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
211  LATIN CAPITAL LETTER O WITH ACUTE
     __@
  __/_/@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
    //|@
  _|/||@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
213  LATIN CAPITAL LETTER O WITH TILDE
    /\\//@
  _//\\/ @
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
215  MULTIPLICATION SIGN
     @
     @
 /|/|@
 > < @
|/|/ @
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   _____ @
  / _// \\@
 / //// /@
/ //// / @
\\_//__/  @
         @@
217  LATIN CAPITAL LETTER U WITH GRAVE
    __  @
  __\\_\\_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
     __ @
  __/_/_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
    //| @
  _|/||_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
   __ @
__/_/_@
\\ \\/ /@
 \\  / @
 /_/  @
      @@
222  LATIN CAPITAL LETTER THORN
    __  @
   / /_ @
  / __ \\@
 / ____/@
/_/     @
        @@
223  LATIN SMALL LETTER SHARP S
     ____ @
    / __ \\@
   / / / /@
  / /_| | @
 / //__/  @
/_/       @@
224  LATIN SMALL LETTER A WITH GRAVE
    __  @
  __\\_\\_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
225  LATIN SMALL LETTER A WITH ACUTE
     __ @
  __/_/_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
    //| @
  _|/||_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
227  LATIN SMALL LETTER A WITH TILDE
    /\\//@
  _//\\/_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \`/ @
/ /_/ /  @
\\__,_/   @
         @@
229  LATIN SMALL LETTER A WITH RING ABOVE
     __ @
  __(())@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
230  LATIN SMALL LETTER AE
           @
  ____ ___ @
 / __ \` _ \\@
/ /_/   __/@
\\__,_____/ @
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
  _____@
 / ___/@
/ /__  @
\\___/  @
/_)    @@
232  LATIN SMALL LETTER E WITH GRAVE
   __ @
  _\\_\\@
 / _ \\@
/  __/@
\\___/ @
      @@
233  LATIN SMALL LETTER E WITH ACUTE
    __@
  _/_/@
 / _ \\@
/  __/@
\\___/ @
      @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
    //|@
  _|/||@
 / _ \\ @
/  __/ @
\\___/  @
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
   _  _ @
  (_)(_)@
 / _ \\  @
/  __/  @
\\___/   @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
   __ @
   \\_\\@
  / / @
 / /  @
/_/   @
      @@
237  LATIN SMALL LETTER I WITH ACUTE
    __@
   /_/@
  / / @
 / /  @
/_/   @
      @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
    //|@
   |/||@
  / /  @
 / /   @
/_/    @
       @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / /   @
 / /    @
/_/     @
        @@
240  LATIN SMALL LETTER ETH
     || @
    =||=@
 ___ || @
/ __\` | @
\\____/  @
        @@
241  LATIN SMALL LETTER N WITH TILDE
     /\\//@
   _//\\/ @
  / __ \\ @
 / / / / @
/_/ /_/  @
         @@
242  LATIN SMALL LETTER O WITH GRAVE
    __ @
  __\\_\\@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
243  LATIN SMALL LETTER O WITH ACUTE
     __@
  __/_/@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
    //|@
  _|/||@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
245  LATIN SMALL LETTER O WITH TILDE
    /\\//@
  _//\\/ @
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
247  DIVISION SIGN
       @
    _  @
 __(_)_@
/_____/@
 (_)   @
       @@
248  LATIN SMALL LETTER O WITH STROKE
        @
  _____ @
 / _// \\@
/ //// /@
\\_//__/ @
        @@
249  LATIN SMALL LETTER U WITH GRAVE
    __  @
  __\\_\\_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
250  LATIN SMALL LETTER U WITH ACUTE
     __ @
  __/_/_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
    //| @
  _|/||_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\__,_/   @
         @@
253  LATIN SMALL LETTER Y WITH ACUTE
      __ @
   __/_/_@
  / / / /@
 / /_/ / @
 \\__, /  @
/____/   @@
254  LATIN SMALL LETTER THORN
     __  @
    / /_ @
   / __ \\@
  / /_/ /@
 / .___/ @
/_/      @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
    _   _ @
   (_) (_)@
  / / / / @
 / /_/ /  @
 \\__, /   @
/____/    @@
`,c_=`flf2a$ 4 3 10 -1 20
Cyberfont - large
Figlet conversion by Kent Nassen, kentn@cyberspace.org, 8-10-94
From: stock@fwi.uva.nl (Lennert Stock)
Date: 15 Jul 1994 00:04:25 GMT

Here are some fonts. Non-figlet I'm afraid, if you wanna convert them, be
my guest. I posted the isometric fonts before.

------------------------------------------------------------------------------

     .x%%%%%%x.                                             .x%%%%%%x.
    ,%%%%%%%%%%.                                           .%%%%%%%%%%.
   ,%%%'  )'  \\)                                           :(  \`(  \`%%%.
  ,%x%)________) --------- L e n n e r t   S t o c k       ( _   __ (%x%.
  (%%%~^88P~88P|                                           |~=> .=-~ %%%)
  (%%::. .:,\\ .'                                           \`. /,:. .::%%)
  \`;%:\`\\. \`-' |                                             | \`-' ./':%:'
   \`\`x\`. -===.'                   stock@fwi.uva.nl -------- \`.===- .'x''
    / \`:\`.__.;                                               :.__.':' \\
 .d8b.     ..\`.                                             .'..     .d8b.
 $  $@
 $  $@
 $  $@
 $  $@@
   /@
  / @
 .  @
   $@@
 ..@
 ''@
   @
   @@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
 .@
 '@
  @
  @@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
 $@
 $@
 .@
 '@@
 $$$@
 ___@
 $$$@
 $$$@@
 $@
 $@
 .@
 $@@
    /@
   / @
  /  @
 /   @@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
 $@
 .@
 .@
 $@@
 $@
 .@
 .@
 '@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
 ____ @
  ___|@
  \\   @
   \`  @@
@
@
@
@@
 _______@
 |_____|@
 |     |@
        @@
 ______ @
 |_____]@
 |_____]@
        @@
 _______@
 |     $@
 |_____$@
        @@
 ______$@
 |     \\@
 |_____/@
        @@
 _______@
 |______@
 |______@
        @@
 _______@
 |______@
 |     $@
        @@
  ______@
 |  ____@
 |_____|@
        @@
 _     _@
 |_____|@
 |     |@
        @@
 _____@
   | $@
 __|__@
      @@
 _____@
   | $@
 __| $@
      @@
 _     _@
 |____/$@
 |    \\_@
        @@
 $    $@
 |    $@
 |_____@
       @@
 _______@
 |  |  |@
 |  |  |@
        @@
 __   _@
 | \\  |@
 |  \\_|@
       @@
  _____ @
 |     |@
 |_____|@
        @@
  _____ @
 |_____]@
 |     $@
        @@
  _____ @
 |   __|@
 |____\\|@
        @@
  ______@
 |_____/@
 |    \\_@
        @@
 _______@
 |______@
 ______|@
        @@
 _______@
    |  $@
    |  $@
        @@
 _     _@
 |     |@
 |_____|@
        @@
 _    _@
  \\  /$@
   \\/ $@
       @@
 _  _  _@
 |  |  |@
 |__|__|@
        @@
 _     _@
  \\___/$@
 _/   \\_@
        @@
 __   __@
   \\_/ $@
    |  $@
        @@
 ______@
  ____/@
 /_____@
       @@
@
@
@
@@
 \\   @
  \\  @
   \\ @
    \\@@
@
@
@
@@
@
@
@
@@
      @
      @
 _____@
      @@
 .@
 \`@
  @
  @@
 _______@
 |_____|@
 |     |@
        @@
 ______ @
 |_____]@
 |_____]@
        @@
 _______@
 |     $@
 |_____$@
        @@
 ______$@
 |     \\@
 |_____/@
        @@
 _______@
 |______@
 |______@
        @@
 _______@
 |______@
 |     $@
        @@
  ______@
 |  ____@
 |_____|@
        @@
 _     _@
 |_____|@
 |     |@
        @@
 _____@
   | $@
 __|__@
      @@
 _____@
   | $@
 __| $@
      @@
 _     _@
 |____/$@
 |    \\_@
        @@
 $    $@
 |    $@
 |_____@
       @@
 _______@
 |  |  |@
 |  |  |@
        @@
 __   _@
 | \\  |@
 |  \\_|@
       @@
  _____ @
 |     |@
 |_____|@
        @@
  _____ @
 |_____]@
 |     $@
        @@
  _____ @
 |   __|@
 |____\\|@
        @@
  ______@
 |_____/@
 |    \\_@
        @@
 _______@
 |______@
 ______|@
        @@
 _______@
    |  $@
    |  $@
        @@
 _     _@
 |     |@
 |_____|@
        @@
 _    _@
  \\  /$@
   \\/ $@
       @@
 _  _  _@
 |  |  |@
 |__|__|@
        @@
 _     _@
  \\___/$@
 _/   \\_@
        @@
 __   __@
   \\_/ $@
    |  $@
        @@
 ______@
  ____/@
 /_____@
       @@
@
@
@
@@
  |@
  |@
  |@
  |@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
@
@
@
@@
`;Y.parseFont("Standard",u_);Y.parseFont("Doom",f_);Y.parseFont("Slant",R_);Y.parseFont("Cyberlarge",c_);window.inputEl=document.getElementById("terminal-input");window.outputEl=document.getElementById("output");window.sendBtn=document.getElementById("send-btn");window.sendSound=document.getElementById("sfx-send");window.glitchSound=document.getElementById("sfx-glitch");window.glitchify=E=>{const i=["̷","͟","͜","̶","͡","͠","͢","̸","⸸","⚠","⛧"];return E.split("").map(s=>Math.random()<.1?i[Math.floor(Math.random()*i.length)]+s:Math.random()<.05?"":s).join("")};window.print=(E,i="#00ffcc")=>{const s=document.createElement("span");s.style.color=i,s.textContent=E+`
`,outputEl.appendChild(s),outputEl.scrollTop=outputEl.scrollHeight};let T_,O=null;window.startLoading=()=>{const E=[".","..","..."],i=["#ff66cc","#ff3399"];let s=0;O=document.createElement("span"),O.style.color=i[0],outputEl.appendChild(O),T_=setInterval(()=>{O.textContent=`> 🧠 Summoning${E[s%E.length]}`,O.style.color=i[s%i.length],s++},400)};window.stopLoading=()=>{clearInterval(T_),O&&(O.remove(),O=null)};window.logMemory=(E,i)=>{const s=JSON.parse(localStorage.getItem("ghostlog")||"[]");s.push({timestamp:new Date().toISOString(),prompt:E,response:i}),localStorage.setItem("ghostlog",JSON.stringify(s))};window.showLog=()=>{const E=JSON.parse(localStorage.getItem("ghostlog")||"[]");if(!E.length)return print("> No ghost memories stored.","#777");E.forEach((i,s)=>{print(`
${s+1}. [${i.timestamp}]`,"#ccc"),print(`> You: ${i.prompt}`,"#ff66cc"),print(`> Ghost: ${i.response}`,"#00ffff")})};window.imageToAscii=async(E,i=80,s=50)=>new Promise((A,l)=>{const d=document.getElementById("ascii-canvas"),u=d.getContext("2d"),N=new Image;N.crossOrigin="anonymous",N.src=E,N.onload=()=>{d.width=i,d.height=s,u.drawImage(N,0,0,i,s);const w=u.getImageData(0,0,i,s).data,V=[" ",".",":","-","=","+","*","#","%","@"];let b="";for(let H=0;H<s;H++){let x="";for(let M=0;M<i;M++){const p=(H*i+M)*4,F=w[p],G=w[p+1],B=w[p+2],X=(F+G+B)/3,k=Math.floor(X/255*(V.length-1));x+=V[k]}b+=x+`
`}A(b)},N.onerror=()=>l(new Error("Failed to load image"))});const Q=[{name:"The Fool",card:`
        .-------------------.
        |         0  *  *{  |
        |             *  *\`~|
        |       /P  *   *  *|
        |      / ###~8     *|
        |     / (^◡^)       |
        |    /  /   \\    ❀  |
        |  E/==/\\❀-❀/\\===3  |
        |       /   \\       |
        |      /~~~~~\\      |
        |       (/(/   /\\_;\\|
        |     ;\\|| \\\\~/     |
        | ;\\~/  ||  \\\\      |
        |/     od   o/      |
        |                   |
        |            U(･ｪ･)U|
        |              m m  |
        |-------------------|
        |      The Fool     |
        \`-------------------´
        `},{name:"The Magician",card:`
        .-------------------.
        |;´*\`:´✿  I ´;\`;✿:\`:|
        |✿ |_             .;|
        |✿ E \\   (X)       ✿|
        |; |\\ \\  ___       :|
        |  * \\)\\(◕‿◕)      ;|
        |    |  |__|\\      .|
        |    |  |  | \\      |
        |    |  |  |  \\     |
        |   \\_/ |~~|  (\\    |
        |    o  |  |  | q   |
        |(☆ )|------+ |     |
        |===========* |     |
        |_______/.✿,. |     |
        |✿.   ||.:;:;.:.,✿,.|
        |:.;✿;.,.✿:;..✿..;::|
        |                   |
        |-------------------|
        |   The Magician    |
        \`-------------------´
        `},{name:"The High Priestess",card:`
        .-------------------.
        |        II         |
        | \\△/  ❀     ❀   \\△/|
        |▽  ▽     ❀     ▽  ▽|
        |   | ❀ {( )} ❀ |   |
        |   |   )---(   |   |
        |   |   (◕‿◕)   |   |
        |   |❀ /|\\ /|\\ ❀|   |
        | B | / |-+-| \\ | J |
        |   | | |   | | |   |
        |   | | |   | | |   |
        |   |❀|_|___|_|❀|   |
        |   | (  \\    ) -.  |
        |   |  \\  \\  /  ) \\ |
        |   |  /   \\ \\  } / |
        |   | /~~~~~\\~\\´-´  |
        |                   |
        |-------------------|
        |The High Priestess |
        \`-------------------´
        `},{name:"The Empress",card:`
        .-------------------.
        |        III        |
        |     _             |
        |    ( )            |
        |     \\\\*<*>*       |
        |     /3@◡‿◡@       |
        |/---/ /@---@\\      |
        ||--/___⋇⋆✦⋆⋇ \\     |
        | \\_____|  ) ) \\    |
        |  \\____|❀  ❀ \\ \\b  |
        |   \\___| ❀____\\---.|
        |    \\__\\   ❀  ) ❀ )|
        | __ __\\_\\ ❀  ❀ \\ ❀||
        |(  V  )\\_\\ ❀  ❀ \\ ||
        | \\ O / /__\\  ❀  ❀\\||
        |  \\+/ /___/~~~~~~~~|
        |                   |
        |-------------------|
        |    The Empress    |
        \`-------------------´
        `},{name:"The Emperor",card:`
        .-------------------.
        |        IV         |
        |  Oo.---------.oO  |
        |  8    ^*^*^    8  |
        |  |    (°ʖ°)    |  |
        | o|  /--wvw--\\  |  |
        | +| /\\_  W    \\ |  |
        | ||/\\_ \\_    _/\\|  |
        | |/  /\\_ \\__/ _/\\  |
        | E__/ | \\____/| mm |
        | O..O( \\____/ )O..O|
        | (--)|   \\_/ / (--)|
        | |  ||__ \\/ / /|  ||
        | |  | \\ \\__/ / |  ||
        | |  |  \\|  |/  |  ||
        | |__|  </  \\>  |__||
        |                   |
        |-------------------|
        |    The Emperor    |
        \`-------------------´
        `},{name:"The Hierophant",card:`
        .-------------------.
        |         V         |
        |                   |
        |       ._o_.       |
        |    m  O_o_O   +   |
        |   (/ _(◡.◡)_  +   |
        |   ||/ |\\_/| \\ |   |
        |  /_/  o + o  \\E)  |
        |  \\      |     |/  |
        |   \\     +     |   |
        |    \\_   |    _|   |
        |     /_      _\\    |
        |     |        |    |
        |     |        |    |
        |     |        |    |
        |     |__d__b__|    |
        |                   |
        |-------------------|
        |   The Hierophant  |
        \`-------------------´
        `},{name:"The Lovers",card:`
        .-------------------.
        |         VI        |
        |                   |
        | /W\\  {ooooo}  /W\\ |
        |    \\_(*˘ω˘*)_/    |
        |   ╰(  \\   /  )╯   |
        |    /   -o-   \\    |
        |   {           }   |
        |  ___ ♡     ♡ ___  |
        | (°з°)   ♡   (°ε°) |
        | /()()\\/   \\/|_|_|\\|
        |  \\ /         \\ /  |
        | (( |         | )) |
        |  |||         |||  |
        |  |||         |||  |
        |  b b         d d  |
        |                   |
        |-------------------|
        |    The Lovers     |
        \`-------------------´
        `},{name:"The Chariot",card:`
        .-------------------.
        |        VII        |
        |   --------------  |
        |   |* */_*_\\* *|   |
        |   |_*/(-.-)\\*_|   |
        |   | __/\\ /\\__ |   |
        |   |(   □□□   )|   |
        | o | \\|  □  |/ |   |
        |  \\| / ===== \\ |   |
        |   \\/ /     \\ \\|   |
        |   |E/_/_|_\\_\\3|   |
        |   |    ≧∀≦    |   |
        | <^v^> ≧ ∀ ≦ <^v^> |
        | /˘◡˘\\  \\ /  /˘◡˘\\ |
        | \\   /\\  ∀  /\\   / |
        | //||  )   (  ||\\\\ |
        |m/ m/mm     mm\\m \\m|
        |-------------------|
        |    The Chariot    |
        \`-------------------´
        `},{name:"Strength",card:`
        .-------------------.
        |        VIII       |
        |                   |
        |       (X)         |
        |      @@@@@        |
        |     (◡‿◡✿)        |
        |     /✿✿✿✿ \\       |
        |    //|✿  |\\\\      |
        |    \\V  ✿  V/      |
        |     m   ✿ m       |
        |     /ᐠ@@ᐟ\\        |
        |    @ =･ｪ･=@-----. |
        |    @@@@@@@    y ) |
        |     @@@@@@ ._///  |
        |       @@@ /  |||  |
        |       ////   mm/  |
        |      m/m/         |
        |-------------------|
        |     Strength      |
        \`-------------------´
        `},{name:"The Hermit",card:`
        .-------------------.
        |         IX        |
        |           __      |
        | E\\\\   || /  \`\\    |
        |_?_\\\\  ||(- -) \\   |
        ||*| \\\\/E \\  {  |   |
        |--- |\\ ||\\\\/   |   |
        |    \\  || \\/   |   |
        |     \\ || {    |   |
        |      \\||  {   |   |
        |       ||   {  |   |
        |       ||{   { |   |
        |       || {   {|   |
        |       ||  {   |   |
        |       ||   {  |   |
        |       ||    { |   |
        |       ||______/   |
        |-------------------|
        |     The Hermit    |
        \`-------------------´
        `},{name:"Wheel of Fortune",card:`
        .-------------------.
        |         X         |
        |  _o_         _o_  |
        | (¬‿¬)       (↼_↼) |
        |                   |
        |       _____       |
        |     .´  |  \`.     |
        |    /  \\ | /  \\    |
        |   . ☆  \\|/  口.   |
        |   |-----+-----|   |
        |   . 〇 /|\\  △ .   |
        |    \\  / | \\  /    |
        |     \`.__|__.´     |
        |                   |
        |  _o_         _o_  |
        | (¬_¬)       (↼‿↼) |
        |                   |
        |-------------------|
        | Wheel of Fortune  |
        \`-------------------´
        `},{name:"Justice",card:`
        .-------------------.
        |  |      XI        |
        |  |                |
        |  |                |
        |  |    ^*^*^       |
        |  |    (-ω-)       |
        |  +   /\\___/\\__    |
        |  E--/  |  |   \\   |
        |  \\)    |  |  (3   |
        |   \\    |  | .-+-. |
        |    \\__/  /  A   A |
        |     |  \\ | (_) (_)|
        |     |   \\|   |    |
        |     /        \\    |
        |    /          \\   |
        |    ~~~~~~~~~~~~   |
        |                   |
        |-------------------|
        |      Justice      |
        \`-------------------´
        `},{name:"The Hanged Man",card:`
        .-------------------.
        |        XII        |
        |--------| |o-------|
        |@~      | /|     ~@|
        |~       | ||      ~|
        |        | ||       |
        |   .------||-o     |
        |    \\ \\--/_|       |
        |     \\/\\/  \\       |
        |      \\    /       |
        |      |    |       |
        |   /--/    \\--\\    |
        |   \\___/--\\___/    |
        |     .´(◕ ◕)\`.     |
        |     ;  ###  ;     |
        |      \`.| |.´      |
        |                   |
        |-------------------|
        |  The Hanged Man   |
        \`-------------------´
        `},{name:"Death",card:`
        .-------------------.
        |       XIII        |
        |           ______  |
        | ~.___    // ✿  |  |
        |  (X.x)  // ✿ ✿ |  |
        | / |||  //~~~~~~|  |
        | |   \\_//          |
        | |  \\__3 @@@@/\\@^  |
        |_(  |--@@@    o |  |
        |  \\ \\  \`,   /\\| |  |
        |   \\ \\  \`,.)  (.|  |
        |____||   )/        |
        |    |_> \\\\         |
        |      \\ /\\\\        |
        |      //  \\\\       |
        |      || D/        |
        |      ||           |
        |-------------------|
        |      Death        |
        \`-------------------´
        `},{name:"Temperance",card:`
        .-------------------.
        |        XIV        |
        |        ___        |
        |     A (   ) A     |
        |   /'-\\@@@@@/-'\\   |
        |  /   @(-_-)@   \\  |
        | /   w/\\___/\\w   \\ |
        |/  w/|   △   |\\w  \\|
        | w/ w|    ( )|w \\w |
        |/ w  |( )  \\E| \\w \\|
        |w/   |3/   |     \\w|
        |      |    |   ❀   |
        |^*^*^ |    | ❀     |
        |      |    |     ❀ |
        |      /     \\      |
        |     /~~~~~~~\\     |
        |                   |
        |-------------------|
        |    Temperance     |
        \`-------------------´
        `},{name:"The Devil",card:`
        .-------------------.
        |        XV         |
        |(                 )|
        |\\      <(_)>      /|
        |_\`-(  (\\ V /)  )-´_|
        | WW-\\_(Φ._.Φ)_/--/ |
        |  |\\/ (.\\ /.) \\    |
        |  | | /--  --\\ \\   |
        |  \\__/(  .   )\\ \\  |
        |   (   \\---/  )\\ \\ |
        |   6\\ \\____/ /9 \\ \\|
        |    6\\ \\  / /9  LMM|
        |     6\\|  |/9      |
        | v   9 w  w 6   v  |
        | O  9 MM  MM 6  O  |
        |/|\\            /|\\ |
        | /\\             /\\ |
        |-------------------|
        |    The Devil      |
        \`-------------------´
        `},{name:"The Tower",card:`
        .-------------------.
        |        XVI     /__|
        |    <*^       /__´ |
        |   <^ ( (   /_´   .|
        |     (_)) /´    .  |
        |      |     )  .  .|
        |  .   |    (_). .  |
        | .    |  (  |      |
        |.     | (_) |      |
        | . \\/ |     |      |
        |.  /  |     |\\/    |
        | -/\\  |     | \\    |
        | O    |     | /\\-  |
        |  .   |     |   O  |
        |     /\\  /\\ |      |
        |    /\\/\\/\\/\\/\\     |
        |   /\\/\\/\\/\\/\\/\\    |
        |-------------------|
        |     The Tower     |
        \`-------------------´
        `},{name:"The Star",card:`
        .-------------------.
        |        XVII       |
        |  *             *  |
        |       \\>/\\</      |
        | *    <=<  >=>   * |
        |       /v\\/v\\ *    |
        |    *   ___        |
        |       (･ω･)___    |
        | *    //( ( \\-\\\\   |
        |     //  \\.  \\ \\\\  |
        |   _// .--\\ / ) >D |
        |  ( )  | /-/ /b ~  |
        |~~~A~~~||~ |_/  ~  |
        |   ~  c_d ~~    ~  |
        |   ~      ~~~   ~  |
        |        ~~~    ~~~ |
        |                   |
        |-------------------|
        |     The Star      |
        \`-------------------´
        `},{name:"The Moon",card:`
        .-------------------.
        |        XVIII      |
        |                   |
        |      \\.' \\ './    |
        |     ~/    }  \\~   |
        |    -|     )´ω\`|-  |
        |     ~\\    }  /~   |
        |      /\`. /_.´\\    |
        |       *   *   *   |
        |   Ƹ̵̡Ӝ̵̨̄Ʒ   *   *     |
        |       *   *  Ƹ̵̡Ӝ̵̨̄Ʒ  |
        |     ʕ·_·ʔ         |
        |     (o o)         |
        |         =^･ｪ･^=   |
        |  U^ｪ^U   (m m)    |
        |  (m m)            |
        |       ᘛ⁐̤ᕐᐷ        |
        |-------------------|
        |     The Moon      |
        \`-------------------´
        `},{name:"The Sun",card:`
        .-------------------.
        |        XIX        |
        | *  *.       .*  * |
        |*  */         \\ * *|
        |* * .  ʘ   ʘ  . *  |
        |*  *\\         /* * |
        | *  *\`-.....-´* o  |
        |  *  *  *  *   //( |
        |*   *   *   * //  )|
        |   *    *    //(  (|
        |  *  ~___~  //  )_)|
        | *   (◠◡◠) //      |
        |*   ╰/   \\╯@/\\_/|  |
        |    _\\ _ /@   @/   |
        | ~~/ d/  @( o o|   |
        |  (     @  |/ /    |
        |  \\        ('')    |
        |-------------------|
        |      The Sun      |
        \`-------------------´
        `},{name:"Judgement",card:`
        .-------------------.
        |        XX         |
        |                   |
        |  /W\\ @@@@@ /W\\    |
        |    @@(-ʖ-)@@      |
        |     @  \\\\ @       |
        |      ___\\\\        |
        |      )  )\\\\       |
        |     ( + ( \\\\      |
        |      )___) \\\\     |
        |            / \\    |
        |      O    . . .   |
        |  O  \\|/  . . . .  |
        | \\|/ / \\       O   |
        | / \\          \\|/  |
        |         \\o/  / \\  |
        |         / \\       |
        |-------------------|
        |     Judgement     |
        \`-------------------´
        `},{name:"The World",card:`
        .-------------------.
        |        XXI        |
        |(¬_¬ )        (･Θ･)|
        |     .o     o.     |
        |   .o         o.   |
        | .o     %%%%    o. |
        | o   ~%%(-.-)    o |
        | .      /   \\    . |
        | o   * /(   )\\ * o |
        | .   |// )  (\\\\| . |
        | o   d/ (  \\ )\\b o |
        | .   *   \\  \\| * . |
        | o       /| |    o |
        | .       |/\\|    . |
        |  o      b  b   o  |
        |   \`o . . . . o´   |
        |(ˆ(oo)ˆ)    (´(ｴ)ˋ)|
        |-------------------|
        |     The World     |
        \`-------------------´
        `},{name:"Ace of Wands",card:`
        .-------------------.
        |     *  *          |
        |      *( ) *       |
        |     * | }/        |
        |     * | |   *     |
        |      \\{ |   __.   |
        |       | | .( _).  |
        |    *  | / ( ( _)  |
        |  *    || * \\ __ ).|
        |      _|p.   (_  _)|
        |     ( |\\ \\   (  ))|
        |     (\\_d  )--/ __)|
        |     (\\_d____(_)   |
        |     (\\_d ._(_  )./|
        |       || (__ _)_) |
        |       **   (__)   |
        |                   |
        |-------------------|
        |    Ace of Wands   |
        \`-------------------´
        `},{name:"Two of Wands",card:`
        .-------------------.
        |        II         |
        |  *                |
        |  |                |
        |  |     _____   *  |
        |  |     \\___/   |  |
        |  |   _ (° @@   |  |
        |  |  (_)/\\  \\   |  |
        |  |___\\/||   |  |  |
        |  E_____/|   |  |  |
        |  |    | |   |  |  |
        |  |    | | | |  |  |
        |  |    | | | |  |  |
        |  *    / | |||  |  |
        |       \\ | |||  |  |
        |       /-| |||  |  |
        |       |||-LL|  *  |
        |      c_d          |
        |                   |
        \`-------------------´
        `},{name:"Three of Wands",card:`
        .-------------------.
        |        III        |
        |                *  |
        |   *            |  |
        |   |          * |  |
        |   |    __    | |  |
        |   |   (  )   | |  |
        |   |   /==L___|_|  |
        |   |  / \\ \\___|_3  |
        |   | /   \\ \\| | |  |
        |   | |    \\_| | |  |
        |   | |      | | |  |
        |   | ||     | | |  |
        |   | || | | / | |  |
        |   | \\| | ||  | |  |
        |   |  |_L_L/  | *  |
        |   *    d b   |    |
        |              *    |
        |                   |
        \`-------------------´
        `},{name:"Four of Wands",card:`
        .-------------------.
        |         IV        |
        |  *  *        *  * |
        | ❀|❀ |        | ❀|❀|
        | {|~❀|~      ~|❀~|}|
        |  |~{|❀~~❀~~❀~|}~| |
        |  | ~|~❀~~❀~~❀|~ | |
        |  |  |        |  | |
        |  |  |        |  | |
        |  |  |        |  | |
        |  |  |        |  | |
        |  |  |        |  | |
        |  |  |❀ o  O ❀|  | |
        |  |  | \\|/\\|/ |  | |
        |  |  |  |  |  |  | |
        |  |  |  /\\ /\\ |  | |
        |  |  | /  V  \\|  | |
        |                   |
        |                   |
        \`-------------------´
        `},{name:"Five of Wands",card:`
        .-------------------.
        |     *   V         |
        |     |             |
        |     |        *    |
        |     *()      |    |
        |   *  \\|_     |    |
        |   |   \\      *()  |
        |   |   /\\      \\|/ |
        | ()*  /  \\      /  |
        |\\|/            /\\  |
        | \\      *   * /  \\ |
        | /\\     |   |      |
        |/  \\    |   |      |
        |      ()*   *()    |
        |     _|/     \\|/   |
        |      /       \\    |
        |     /\\       /\\   |
        |    /  \\     /  \\  |
        |                   |
        \`-------------------´
        `},{name:"Six of Wands",card:`
        .-------------------.
        |         VI *      |
        |           _|_     |
        | * *      (*|*)    |
        | | |    *  -|-   * |
        | | |     \\  | *  | |
        | | | **** \\ | |  | |
        | | | ( -)  \\| |  | |
        | | | |\\ \\__ | |  | |
        | | | | \\____3 |@/\\@|
        | | | |    |  @@( o |
        |_|_|_/    |@@@  \\--|
        |    /  _/\\|    / (.|
        |   / _/\\  \\o-o-o   |
        |  /_/   \\  \\    \\  |
        |         | |     \\ |
        |         | |     / |
        |         c_>    /  |
        |                   |
        \`-------------------´
        `},{name:"Seven of Wands",card:`
        .-------------------.
        |        VII        |
        |                   |
        |    *              |
        |     \\             |
        |    /3\\  ____      |
        |   //__\\( >_<)     |
        |  /___  \\   /      |
        |      \\  \\  \\      |
        |       \\  \\  \\     |
        |    *      \\_/     |
        |   /     *  \\ *    |
        |  /       \\  * \\   |
        | /  *      \\    \\  |
        |/   |  * *  \\    \\ |
        |    |  | |   \\    \\|
        |    |  | |    \\    |
        |    |  | |     \\   |
        |    |  | |      \\  |
        \`-------------------´
        `},{name:"Eight of Wands",card:`
        .-------------------.
        |        VIII       |
        |  \\ \\\\             |
        |\\  \\ \\\\     \\      |
        |\\\\  \\ \\\\     \\     |
        | \\\\  \\ \\\\     \\    |
        |\\ \\\\  \\ \\\\     \\   |
        | \\ \\\\  \\ \\\\     \\  |
        |\\ \\ \\\\  \\ \\\\     * |
        | \\ \\ \\\\  \\ \\\\      |
        |  \\ \\ \\\\  \\ \\\\     |
        |   \\ \\ \\\\  \\ \\\\    |
        |    \\ \\ \\\\  \\ \\*   |
        |     \\ \\ \\\\  \\ *   |
        |      \\ \\ \\\\  \\    |
        |       \\ \\ \\\\  *   |
        |        \\ \\ \\\\     |
        |         \\ * \\*    |
        |          *   *    |
        \`-------------------´
        `},{name:"Nine of Wands",card:`
        .-------------------.
        |         IX        |
        |*       *      *   |
        ||    *  |      | * |
        || *  |  |      | |*|
        || |  |* |      | |||
        || |  || |   ___| |||
        || |  || |  (･ω･) |/|
        || |  || | /|__|\\ /||
        || |  || |/_____ 3|||
        || |  || | \\--o-/ |||
        || |  || | /   /| |||
        || |  || |/~~~/ | |||
        || |  || | \\ /| | |||
        || |  || |  / | | |||
        || |  || | / \\|/| |||
        |* *  ** */  db * **|
        |        *          |
        |                   |
        \`-------------------´
        `},{name:"Ten of Wands",card:`
        .-------------------.
        |          X        |
        |                   |
        |  ****    ***    * |
        |   \\\\\\\\   |||   / *|
        |    \\\\\\\\  |||  / /*|
        |     \\\\\\\\ ||| / // |
        |      \\\\\\\\|||/ //  |
        |       \\\\\\( ;)//   |
        |       / /  /\\_>   |
        |     _/____/__ /   |
        |    /     /\\|/     |
        |   /_____( \\\\3     |
        |    |  /   //\\\\    |
        |    / /   //||\\    |
        |   / )|  //|||\\\\   |
        |  c /||b ***|****  |
        |   \\bc      ***    |
        |                   |
        \`-------------------´
        `},{name:"Page of Wands",card:`
        .-------------------.
        |                   |
        |              **   |
        |      *{:･}ﾟ  ||   |
        |      (◕‿◕)   E)   |
        |      /~*~\\__/||   |
        |      \\     _/||   |
        |       \\   |___3   |
        |        >--@  ||   |
        |       /    \\ ||   |
        |      /      \\||   |
        |     :--------:|   |
        |       // ||  ||   |
        |      //  ||  ||   |
        |     //   ||  ||   |
        |    od    bd  ||   |
        |              **   |
        |-------------------|
        |   Page of Wands   |
        \`-------------------´
        `},{name:"Knight of Wands",card:`
        .-------------------.
        |                   |
        |        **         |
        |        ||  --.**~ |
        |        || /◔ |    |
        |        || \\__|    |
        |   @@@@@3\\(# #/)   |
        | /@/|@@@@ \\_#_\\ \\  |
        | \\ O )  @~E_____)  |
        | /\\.)~*~/ \\ # #\\   |
        |//\\        \\ # /---|
        |/  \\ Y )   /  /    |
        |D   \\_/---(  / /   |
        |          / /\\(    |
        |        <__/   \\_  |
        |                 \\ |
        |                   |
        |-------------------|
        |  Knight of Wands  |
        \`-------------------´
        `},{name:"Queen of Wands",card:`
        .-------------------.
        |     .--------.    |
        |   **|        |    |
        |   ||| ^*^*^  |    |
        |   |||@(◕ ◕)@ |    |
        |   |||@@   @@ |    |
        |   |||/\\-*-/ \\|✿   |
        |   ||/ /\\V/ \\ \\|   |
        |   (3_/      \\_@   |
        |   ||/_   ____ \\   |
        |  _||   \\/    )/_  |
        | (x||\\   \\   /| x) |
        |  \\|||    \\ / | /  |
        |   ||/\\ /\\ /  |\\|  |
        |   |(=\`x\`=)_____\\  |
        |   ** m m          |
        |                   |
        |-------------------|
        |  Queen of Wands   |
        \`-------------------´
        `},{name:"King of Wands",card:`
        .-------------------.
        |           |     | |
        |  **       |     | |
        |  ||   ^*^*^     | |
        |  ||   (°ʖ̯°)     | |
        |  ||   /\\_/ \\    | |
        |  ||  /\`~*~-´\\   | |
        |  ||_/\`~*~*~\\ \\  | |
        |  E____/    / /\\ | |
        |  ||/___   @_/  \\| |
        |  ||/   _____)   \\ |
        |  ||    |        | |
        | d||    \\        | |
        |  ||\\   |\\       \\ |
        |  ||d\\__| \\       \\|
        |  **       \\-------|
        |                   |
        |-------------------|
        |   King of Wands   |
        \`-------------------´
        `},{name:"Ace of Cups",card:`
        .-------------------.
        |                   |
        |      \\ vVv /      |
        |       w o w       |
        |         ∇         |
        |       .   ..      |
        |     .::____::.    |
        |      (:    :) .   |
        |      :\\ oo /:     |
        |      :.oooo.:     |
        |    . :: || ::     |
        |   .  ::/__\\.:     |
        |      ::    .:     |
        |      ::    :: .   |
        |      ::    .:     |
        |      ::    ::     |
        |      :.    ::     |
        |-------------------|
        |    Ace of Cups    |
        \`-------------------´
        `},{name:"Two of Cups",card:`
        .-------------------.
        |         II        |
        |    /\\       /\\    |
        |   /wwW\\   /Www\\   |
        |  Vvw  (. .)  wvV  |
        |        p|q        |
        |       ( | )       |
        | ✿✿✿✿   )|(   ✿✿✿✿ |
        |(✿◡‿◡)  (|)  (◡‿◡✿)|
        ||  / ____ ____ \\  ||
        ||  \\_\\  / \\  /_/  ||
        || \\___3/   \\E___/ ||
        ||   | ||   || |   ||
        ||   | --   -- |   ||
        ||   |         |   ||
        ||   |         |   ||
        ||   |         |   ||
        ||~~~|         |~~~||
        |                   |
        \`-------------------´
        `},{name:"Three of Cups",card:`
        .-------------------.
        |         III       |
        |      O            |
        |      Y   O  O     |
        |      3   Y  Y     |
        | ✿✿✿ /    3  E     |
        |(^◡^)✿✿✿ /\\  \\\\✿✿✿ |
        | \\* (^◡^)//   (^◡^)|
        |  \\ /* *\\/    /* *\\|
        |   |  *  \\   /  *  |
        |   |      \\  &     |
        |   |      &   &    |
        |   /     &/   /&   |
        |  /     &||  //|&  |
        |  |    & // // \\ & |
        |  &&&&& // d/   \\\\&|
        |    /b /b        d |
        |✿+ﾟ*｡:ﾟ+ ✿+ﾟ*｡:ﾟ+✿+|
        |                   |
        \`-------------------´
        `},{name:"Four of Cups",card:`
        .-------------------.
        |        IV         |
        |   @@@@@@@@@@@@@@@@|
        |    @@    @@@@@@@@@|
        |     @    |  @@@ @@|
        |          |  |@@   |
        |          |  | @   |
        |          |  |     |
        |    _     |  |     |
        | .(( )\\_/ |  L__   |
        |(___))=3  | (u.u)  |
        |       |  |/ \\/ \\  |
        |         .| /-p\\ | |
        |        ;  \\_/\\_/.,|
        |_,_.-;''   /____\\  |
        |          (___\\__) |
        |\\_/\\_/\\_/          |
        | o  o  o           |
        | |  |  |           |
        \`-------------------´
        `},{name:"Five of Cups",card:`
        .-------------------.
        |         V         |
        |                   |
        |                   |
        |       ____        |
        |      (TヘT)       |
        |       |    \\      |
        |       |     |     |
        |       |     |     |
        |       |     |     |
        |       |     |     |
        |       |     |     |
        |       |     |     |
        |  O>-{ |     |     |
        | O>-{  |_____| O   |
        |   O>-{  dd    Y O |
        |                 Y |
        |                   |
        |                   |
        \`-------------------´
        `},{name:"Six of Cups",card:`
        .-------------------.
        |        VI         |
        |                   |
        |                   |
        |                   |
        | .✿.               |
        | \\_/               |
        |  o   _/\\_         |
        |  |  ( ͡ ͜ʖ ͡)  ___   |
        |     |-- .✿.(•ω•)  |
        |     \\   \\_/ |  |  |
        |     |\\___3  |  |  |
        |     |    |  |~~|  |
        |                   |
        | .✿.  .✿.  .✿. .✿. |
        | \\_/  \\_/  \\_/ \\_/ |
        |  o    o    o   o  |
        |  |    |    |   |  |
        |                   |
        \`-------------------´
        `},{name:"Seven of Cups",card:`
        .-------------------.
        |         VII       |
        |             >o~~. |
        |  @@@         (()) |
        | (≧◡≦)   __    \\/  |
        |  (())  (..)   /\\  |
        |   \\/  /~~~~\\      |
        |   /\\   (())       |
        |         \\/        |
        |         /\\   ʕ•̀o•́ʔ|
        |    *❀*        (())|
        |    (())    .   \\/ |
        |     \\/    .:   /\\ |
        |     /\\    :;      |
        |[--]      (())     |
        ||  |       \\/      |
        |(())       /\\      |
        | \\/                |
        | /\\                |
        \`-------------------´
        `},{name:"Eight of Cups",card:`
        .-------------------.
        |        VIII       |
        |                   |
        |   ,-,-.           |
        |  / (◕ω◕\\          |
        |  \\ {   /          |
        |   \`-\`-´     _     |
        |            ( )__b |
        |           (  ( /| |
        |           /  \\/ | |
        |          /___/  | |
        |           //b     |
        |  \\_/ \\_/  b  \\_/  |
        |   o   o       o   |
        |   |   |       |   |
        |\\_/ \\_/ \\_/ \\_/ \\_/|
        | o   o   o   o   o |
        | |   |   |   |   | |
        |                   |
        \`-------------------´
        `},{name:"Nine of Cups",card:`
        .-------------------.
        |        IX         |
        |                   |
        |       V V V       |
        | V V V i i i V V V |
        | i i i _____ i i i |
        |______/     \\______|
        |                   |
        |        ___        |
        |       (___)Oo.    |
        |       (u‿u)       |
        |      /\\---/\\      |
        |     /_d/_\\b_\\     |
        |       /   \\       |
        |      /_   _\\      |
        |     (  \\ /  )     |
        |     |   /   |     |
        |     |d~~~~~b|     |
        |                   |
        \`-------------------´
        `},{name:"Ten of Cups",card:`
        .-------------------.
        |         X         |
        |                   |
        |     ._______.     |
        |   ./ V V V V \\.   |
        | ./ V i i i i V \\. |
        |/ V i ./---\\. i V \\|
        |V i ./       \\. i V|
        |i ./           \\. i|
        |./               \\.|
        |                   |
        |                   |
        |  \\ O  o /         |
        |   \\|==|/          |
        |    |  |    \\o/\\o/ |
        |    /\\ /\\   / \\/ \\ |
        |   /  \\  \\         |
        |                   |
        |                   |
        \`-------------------´
        `},{name:"Page of Cups",card:`
        .-------------------.
        |                   |
        |                   |
        |        *{:･}ﾟ     |
        | <.)>~< (◕‿◕)      |
        |  \\ /   /~*~\\-     |
        |   Y___/     \\\\    |
        |   3----/\\   |\\\\   |
        |          >--@_/   |
        |         /    \\    |
        |        /      \\   |
        |       :--------:  |
        |        //   ||    |
        |       //    ||    |
        |      //     ||    |
        |     od      bd    |
        |                   |
        |-------------------|
        |    Page of Cups   |
        \`-------------------´
        `},{name:"Knight of Cups",card:`
        .-------------------.
        |                   |
        | ~**.__            |
        |    | ◔\\           |
        |    |__/  (( ))    |
        |    (  \\   \\ /     |
        |    |\\  \\---3      |
        |    | \\----/-\\@@@  |
        |----\\  _/@@@@@@@/\\@|
        |     \\ \\ @@   /|o /|
        |      | )@   / | / |
        |    /-| |   )\\ (.) |
        |/--/  \\_>- -\\ \\    |
        |\\       / / _\\ )   |
        |\\\\     / /D/__/    |
        |D/    / /          |
        |                   |
        |-------------------|
        |  Knight of Cups   |
        \`-------------------´
        `},{name:"Queen of Cups",card:`
        .-------------------.
        |                   |
        |           .____ . |
        |          /       \\|
        |         ✿✿     ✿✿ |
        |    ･*:･  ^*^*^ || |
        |   (/  \\) (◕ @\\ || |
        |  {-\\  /-}/_/ ) || |
        |     ||_ /   /| || |
        |     EE_____/ | || |
        |    ___/      | || |
        |   (  (  __  /  /  |
        |   |  | /   /| /   |
        |   |  | |  / |     |
        |   |  | |  \\ |_____|
        |  /         \\      |
        |                   |
        |-------------------|
        |   Queen of Cups   |
        \`-------------------´
        `},{name:"King of Cups",card:`
        .-------------------.
        |                   |
        |     .--------.    |
        |     |        |    |
        |     | ^*^*^  |    |
        |     | (°ʖ̯°)  |    |
        |     |/----/\\ |    |
        |     (()) / /\\| () |
        |    / \\/ / /  \\_|| |
        |   (___3/ /  \\___@ |
        |   / __/ /____ \\   |
        |   \\ (  \\/    )/   |
        |    \\\\   \\   /|    |
        |   | |    \\ / |    |
        |   | |     /  |\\   |
        |   |____________\\  |
        |                   |
        |-------------------|
        |    King of Cups   |
        \`-------------------´
        `},{name:"Ace of Swords",card:`
        .-------------------.
        |                   |
        |        ╱╲         |
        |        |||        |
        |       \\^*^/       |
        |      \\^*^*^/      |
        |    .~{ ||| }~.    |
        |  .~%@} ||| {@%~.  |
        | .~%@@{ ||| }@@%~. |
        |  .     |||     .  |
        | . .    |||    . . |
        |        |||        |
        |    [0=======0]    |
        |        | |        |
        |        [ ]        |
        |         o         |
        |                   |
        |-------------------|
        |   Ace of Swords   |
        \`-------------------´
        `},{name:"Two of Swords",card:`
        .-------------------.
        |        II         |
        |                   |
        |              ☽    |
        | \\               / |
        |  \\             /  |
        |   \\           /   |
        |    \\   ___   /    |
        |     \\ (=_=) /     |
        |      +E\\-/3+      |
        |      /_\\|/_\\      |
        |       \\   /       |
        |       /   \\       |
        |    /-(     )-\\    |
        |   /--|     |--\\   |
        |   |  |     |  |   |
        |      '~d~b~'      |
        |                   |
        |                   |
        \`-------------------´
        `},{name:"Three of Swords",card:`
        .-------------------.
        |        III        |
        |                   |
        |                   |
        |         +         |
        |  +      |      +  |
        |   \\___, | ,___/   |
        |  /´\\   \\|/   /\`\\  |
        | |   \\   |   /   | |
        | |    \\  |  /    | |
        |  \\_           _/  |
        |    \\_       _/    |
        |      \\_   _/      |
        |       /\\./\\       |
        |      /  |  \\      |
        |     /   |   \\     |
        |         |         |
        |                   |
        |                   |
        \`-------------------´
        `},{name:"Four of Swords",card:`
        .-------------------.
        |         IV        |
        |* * * |            |
        | * *  |            |
        |* * * |   +  +  +  |
        | * *  |   |  |  |  |
        |* * * |   |  |  |  |
        |------|   |  |  |  |
        |          |  |  |  |
        |          |  |  |  |
        |          |  |  |  |
        |                   |
        |          (()    __|
        |-----------||---(↼ |
        |___________|___/(@@|
        |*~*~*~*~*~*~*~*~*~*|
        |                   |
        |   -------------+  |
        |                   |
        \`-------------------´
        `},{name:"Five of Swords",card:`
        .-------------------.
        |         V ._ __.  |
        |     .__-((  (  .) |
        |_._+(      .____)  |
        |       .)__)       |
        |   .___)           |
        |_.))       ____ // |
        |      __. (=.= //  |
        |  ._-(  )  /  //\\  |
        | ((____)  /  //  \\ |
        |         /  //    \\|
        |       E+_/++E____/|
        |  O      \\      \\  |
        | /|\\     /\\      \\ |
        | / \\    /__\\______\\|
        |          ||\\  \\\\  |
        | +        || \\  \\\\ |
        |  \\  +----||---  \\\\|
        |   \\    c__d     b_|
        \`-------------------´
        `},{name:"Six of Swords",card:`
        .-------------------.
        |         VI        |
        | _                 |
        | \\\\                |
        |  /3               |
        | //\\\\              |
        | |\\ \\\\          ++ |
        | | ( )\\    + + +||+|
        | |   \\-\\   | | |||||
        | |   A \\\\  | | |||||
        | |__/ \\ \\\\ | __|||||
        | |  \\  L_3\\|/(¬)||||
        | |~~~\\    \\\\  \\|||||
        |   ||  __ /\\\\  |||||
        |   // ( ¬(  \\\\ )||~|
        |  //b (__(___\\\\~~/ |
        |  \\b       ~~/\\\\   |
        |       /~~/    \\\\  |
        |                   |
        \`-------------------´
        `},{name:"Seven of Swords",card:`
        .-------------------.
        |        VII        |
        |                   |
        |                   |
        |        +_____     |
        |   +   /+|___|     |
        |  +|  //+(¬_¬)     |
        |  || ///    /      |
        |  ||///  / /       |
        |  ||//__/ /        |
        |  3E/____/         |
        |   \\ /   |    +  + |
        |   ( _\\   \\   |  | |
        |   //  \\___>  |  | |
        |  //      \\\\  |  | |
        |c_/        \\\\ |  | |
        |           c/      |
        |                   |
        |                   |
        \`-------------------´
        `},{name:"Eight of Swords",card:`
        .-------------------.
        |       VIII        |
        |                   |
        |                   |
        |      ___          |
        |     (=.=)         |
        |   + /\\_/\\ +   +   |
        | + ||=====|| + |+ +|
        | | ||=====|| | || ||
        | | |\\=====/| | || ||
        |+| | |====|| | || ||
        | \\ | |    || | || ||
        | |\\| |    || | || ||
        | | \\ |    || | || ||
        | | |\\|    || | || ||
        | |   \\~db~|  |  | ||
        |      \\            |
        |       \\           |
        |                   |
        \`-------------------´
        `},{name:"Nine of Swords",card:`
        .-------------------.
        |         IX        |
        | +––––––––––––––   |
        |  +––––––––––––––  |
        | +––––––––––––––   |
        |  +––––––––––––––  |
        | +––––––––––––––   |
        |  +––––––––––––––  |
        | +–––––––––===––   |
        |  +–––––––/(-())–  |
        | +–––––––/  V//–   |
        |  +–––––/  \\//–––  |
        |_      /   L_______|
        |@\\----(___/ / / / /|
        |_________/_/_/_/_/_|
        |---------| | | | | |
        |         | | | | | |
        |---------|~|~|~|~|~|
        |                   |
        \`-------------------´
        `},{name:"Ten of Swords",card:`
        .-------------------.
        |         X         |
        |                   |
        |                   |
        |                   |
        |  ++ ++ +++ ++ ++  |
        |  || || ||| || ||  |
        |  || || ||| || ||  |
        |  || || ||| || ||  |
        |  || || ||| || ||  |
        |  || || ||| || ||  |
        |  || || ||| || ||  |
        |  || || ||| || ||  |
        |  || || ||| || ||  |
        |  || || ||| || ||  |
        | /         ( X_x ) |
        |/    ________   /  |
        |    /   C|_____/   |
        |   /               |
        \`-------------------´
        `},{name:"Page of Swords",card:`
        .-------------------.
        |                /\\ |
        |               / / |
        |       *{:･}ﾟ / /  |
        |       (◕‿◕) / /   |
        |       /~*~\\4--4   |
        |       | \\ / 33    |
        |        \\ V /V     |
        |         >--@      |
        |        /    \\     |
        |       /      \\    |
        |      :--------:   |
        |       //   ||     |
        |      //    ||     |
        |     //     ||     |
        |    od      bd     |
        |                   |
        |-------------------|
        |  Page of Swords   |
        \`-------------------´
        `},{name:"Knight of Swords",card:`
        .-------------------.
        |     |             |
        |     |             |
        |     |     --.**~  |
        |     E\\   /◔ | ~~~~|
        |     +\\\\__\\__|/_   |
        |       \\____    )\\ |
        |    ^@^@@@  \\E____)|
        |   / ◔  @@@ / \\    |
        |  /  _)_~*~/   |  /|
        | (..)   \\      / / |
        |        /     ( /  |
        |    ___/     / /   |
        |   / __/ /-<__/----|
        |  / / / /          |
        | / / / /           |
        |                   |
        |-------------------|
        | Knight of Swords  |
        \`-------------------´
        `},{name:"Queen of Swords",card:`
        .-------------------.
        |            .      |
        |           / \\     |
        |           | |     |
        |           | |     |
        | . ^*^*^   | |     |
        | |\\&  ◕)   | |     |
        | |&% ⌣/    | |K    |
        | | |  '____| |/    |
        | | |   \\-- | |     |
        | | \\  y___4---4    |
        | |  \\_______E3     |
        | |          / )    |
        | \\‧͙⁺˚*･༓☾  /   \\   |
        |  \\˚*•̩̩͙✩•̩̩͙*˚ |    \\  |
        |   \\ ˚ ˚   |     \\ |
        |    V------V_____| |
        |-------------------|
        |  Queen of Swords  |
        \`-------------------´
        `},{name:"King of Swords",card:`
        .-------------------.
        |                   |
        |     .--------.    |
        |   /\\|        |    |
        |   \\ \\ ^*^*^  |    |
        |    \\ \\(°ʖ̯°)  |    |
        |     \\ \\--- \\ |    |
        |     /\\ \\    \\|    |
        |    / 7--7    \\    |
        |    (__3    @__)   |
        |   / ___  ____ \\   |
        |   \\ (  \\/    )/   |
        |   | \\   \\   /|    |
        |   | |    \\ / |    |
        |   | |     /  |\\   |
        |   |____________\\  |
        |                   |
        |-------------------|
        |  King of Swords   |
        \`-------------------´
        `},{name:"Ace of Pentacles",card:`
        .-------------------.
        |                   |
        |    .--------.     |
        |  .´    /\\    \`.   |
        | /_____/__\\_____\\  |
        | |\`-. /    \\ ,-'|  |
        | |   /-.  .-\\   |  |
        | |  /  ,\`'.  \\  |  |
        | *\\/,-'    '-.\\/*  |
        |  *'.,_______,.\` * |
        |   *  *  *  *  *  *|
        |    *  *  *  *  *  |
        |     *  *  *  *  * |
        |      *  *  *  *  *|
        |       *  *  *  *  |
        |        *  *  *  * |
        |                   |
        |-------------------|
        |  Ace of Pentacles |
        \`-------------------´
        `},{name:"Two of Pentacles",card:`
        .-------------------.
        |        II         |
        |                   |
        |                   |
        |       (nnn)       |
        |.---.  (uuu)       |
        |(☆ ) \\ (-_-)       |
        |\\w    \\/   \\       |
        | \`---._\\____.---.  |
        |   \\__/ \\     (☆ ) |
        |      /~o\`-.___w./ |
        |     /       \\     |
        |     ununununu     |
        |       \\ | / /     |
        |        \\| |/      |
        |       c_d cb      |
        |                   |
        |                   |
        |                   |
        \`-------------------´
        `},{name:"Three of Pentacles",card:`
        .-------------------.
        |        III        |
        |    /         \\    |
        |  ./    .-.    \\.  |
        | /     ( ☆ )     \\ |
        |/    .-.\`-´.-.    \\|
        |  /\\( ☆ ) ( ☆ )/\\  |
        | /--\\\`-´   \`-´/--\\ |
        |/___ \\  (✿)  /    \\|
        |(._.) \\ /△\\ /_ __  |
        |\\   //d\\\\▽//..(_.) |
        | \\ /\\/  ---/--/  | |
        | / \\    | p__/   | |
        ||___|   | |      | |
        | |||    | |\\     | |
        | |||    | | \\    | |
        |  bb    | |  \\   | |
        |        | |   \\__| |
        |        | |    dd  |
        \`-------------------´
        `},{name:"Four of Pentacles",card:`
        .-------------------.
        |        IV         |
        |                   |
        |                   |
        |                   |
        |       .--.        |
        |      ( ☆  )       |
        |      \\\`--´/       |
        |      (-_- )       |
        |      / .--.\\      |
        |     / /( ☆ )\\     |
        |     \\_3\`--´_/     |
        |     /  \\    \\     |
        |     |  |    |     |
        |     |~~|~~~~|     |
        |    .--d   b--.    |
        |   ( ☆ )   ( ☆ )   |
        |    \`--´   \`--´    |
        |                   |
        \`-------------------´
        `},{name:"Five of Pentacles",card:`
        .-------------------.
        |         V         |
        |   ||\\      /||    |
        |   ||/*(☆ )*\\||    |
        |   ||\\__/\\__/||    |
        |   ||(☆ )(☆ )||    |
        |   ||\\__/\\__/||    |
        |   ||(☆ )(☆ )||    |
        |   |/___\\/___\\|    |
        |               ___ |
        |    ___      /(⇀_⇀)|
        |   (¬.¬)   _/vvvv/ |
        |  /\\vv|\\__/vvvvv/  |
        | //vvv/-/vvvvvv/   |
        | \\\\vv/ /vvvvvv/    |
        | /evv\\ |vvvvv/     |
        |/vvvv| |vvvv/      |
        | b vv|  b vv|      |
        |     b      b      |
        \`-------------------´
        `},{name:"Six of Pentacles",card:`
        .-------------------.
        |        VI         |
        |                   |
        | (☆ )  (☆ )   (☆ ) |
        |                   |
        | (☆ )   _*__  (☆ ) |
        |       (˘､˘ )      |
        | (☆ )   |   \\  /?  |
        |        |    \\/_|_ |
        |       //|    /\\ /\\|
        |     _// |    -- --|
        |      .  |    \\/ \\/|
        |     .             |
        | ____  .           |
        |(˘̩╭╮˘̩)っ   ______  |
        |/    \\    (｡•́︿•̀｡) |
        |      \\  ╰/    」\\ |
        |         /        \\|
        |                   |
        \`-------------------´
        `},{name:"Seven of Pentacles",card:`
        .-------------------.
        |        VII        |
        |                   |
        |                   |
        |          ___      |
        |         (‿ ‿)--.  |
        | @@@     //==\\_ \\  |
        |@__@@   // /|\\___\\ |
        |(☆ )}~ /--/ |  |   |
        |@@@@__@   | |  \\   |
        | ~{(☆ )}~ / |   \\  |
        |@__@@    /_ |____\\ |
        |(☆ )}~@__ / | \\ \\  |
        |@@@@~{(☆ )( |  \\ ) |
        |@@@@@@@__@| |  | | |
        |@__~{(☆ )}| |  | | |
        |(☆ )}~@@ o_d|__c__o|
        |@@@@@     ~{(☆ )}~@|
        |                   |
        \`-------------------´
        `},{name:"Eight of Pentacles",card:`
        .-------------------.
        |        VIII       |
        |              (☆ ) |
        |                   |
        |              (☆ ) |
        |                   |
        |              (☆ ) |
        |                   |
        |              (☆ ) |
        |       ___         |
        |      ( -.)   (☆ ) |
        |     /    P        |
        |    /  \\_/3 I (☆ ) |
        |   /  \\__/__3      |
        |  (_____ | (☆ )    |
        |       /\\ \\        |
        |      /_>\\ \\   (☆ )|
        |  (☆ )    c_>      |
        |                   |
        \`-------------------´
        `},{name:"Nine of Pentacles",card:`
        .-------------------.
        |         IX        |
        |               _*  |
        |        o___o <o)  |
        |        (◕‿◕)  \\)< |
        |        /\\ /\\  --  |
        |       /  /  \\//   |
        |      //     \\/|   |
        |   __//|    \\  |   |
        |    \\/ |    |\\/    |
        |       |    |      |
        | (☆)   |    |      |
        |       |    \\ (☆)  |
        |   (☆) |     \\     |
        |       /      \\ (☆)|
        |(☆)   /        \\   |
        |     /~~~~~~~~~~\\  |
        | (☆)     (☆)       |
        |     (☆)      (☆)  |
        \`-------------------´
        `},{name:"Ten of Pentacles",card:`
        .-------------------.
        |         X         |
        |                   |
        |       ( ☆ )       |
        |(☆ )           (☆ )|
        |       ( ☆ )       |
        |(☆ )           (☆ )|
        |                   |
        |       ____  @@@@  |
        |      (⁀ヮ⁀)(◡‿◡*) |
        |      |    | \\   | |
        |(☆ )  |    | / (☆ )|
        | ###  |    |/    | |
        |(´ω\`) |( ☆ )     | |
        |/   | |d--b/\\/\\  | |
        |    |      (･ω･)_| |
        |    |  ( ☆ )∪(･ω･)∪|
        |-bb-|         m m  |
        |                   |
        \`-------------------´
        `},{name:"Page of Pentacles",card:`
        .-------------------.
        |                   |
        |                   |
        |      *{:･}ﾟ .--.  |
        |      (◕‿◕) ( ☆  ) |
        |      /~*~\\/__--´  |
        |      \\ \\_///      |
        |       \\--/|       |
        |        >--@       |
        |       /    \\      |
        |      /      \\     |
        |     :--------:    |
        |       // ||       |
        |      //  ||       |
        |     //   ||       |
        |    od    bd       |
        |                   |
        |-------------------|
        | Page of Pentacles |
        \`-------------------´
        `},{name:"Knight of Pentacles",card:`
        .-------------------.
        |                   |
        | ~**.__            |
        |    | ◔\\           |
        |    |__/   .-.     |
        |    (  \\  ( ☆ )    |
        |    | \\ \\/3._.@^@^ |
        |   _\\  \\_/  @@(oo| |
        |___| \\  _\\@@@/ \\ \\ |
        |   \\--\\__ \\  \\ (..)|
        |     ||  \\ )  \\    |
        |     ||   \\ \\ /    |
        |  Y------y \\_>     |
        | /        \\ /      |
        |/         //\\      |
        |         // \\\\     |
        |         D  D/     |
        |-------------------|
        |Knight of Pentacles|
        \`-------------------´
        `},{name:"Queen of Pentacles",card:`
        .-------------------.
        |✿✿~ ~✿~    ~✿~ ~✿✿~|
        |           _____   |
        |      ^*^*^_____\\  |
        |      (◕u◕)      | |
        |       /\\/ \\     | |
        |      / **  \\    | |
        |    .-.  //  |   | |
        |   ( ☆ )//   |   | |
        |   /\`-´E/    |  /| |
        |   | |  ____/ _/ | |
        |   | |  \\  | /   | |
        |   | /   \\ || ___| |
        |   |~dd~~~\\||/     |
        |                   |
        |~✿~   ~✿✿~   ~✿~ ~✿|
        |                   |
        |-------------------|
        |Queen of Pentacles |
        \`-------------------´
        `},{name:"King of Pentacles",card:`
        .-------------------.
        |                   |
        |     .--------.    |
        |     |        |    |
        | |\\~~/|^*^*^  |    |
        |  \\TT/ (°ʖ̯°)  |    |
        |  (..)/@\\_/@\\ |    |
        |    \\/* ~*~ *\\|    |
        |   ()ﾟ.*･｡ .-.\\    |
        |   ||･｡ﾟ.*( ☆  )   |
        |  (_3___. \\._./\\   |
        |   \\ (*.\\/ﾟ.*･)/   |
        |    \\\\ ﾟ*\\*･｡/|    |
        |   | |.*･｡\\./ |    |
        |   | |ﾟ.*･ /  |\\   |
        |   |____________\\  |
        |                   |
        |-------------------|
        | King of Pentacles |
        \`-------------------´
        `},{name:"The Fool Reversed",card:`
        .-------------------.
        |         0  *  *{  |
        |             *  *\`~|
        |       /P  *   *  *|
        |      / ###~8     *|
        |     / (^◡^)       |
        |    /  /   \\    ❀  |
        |  E/==/\\❀-❀/\\===3  |
        |       /   \\       |
        |      /~~~~~\\      |
        |       (/(/   /\\_;\\|
        |     ;\\|| \\\\~/     |
        | ;\\~/  ||  \\\\      |
        |/     od   o/      |
        |                   |
        |            U(･ｪ･)U|
        |              m m  |
        |-------------------|
        |      looɟ ǝɥʇ     |
        \`-------------------´
        `},{name:"The Magician Reversed",card:`
        .-------------------.
        |;´*\`:´✿  I ´;\`;✿:\`:|
        |✿ |_             .;|
        |✿ E \\   (X)       ✿|
        |; |\\ \\  ___       :|
        |  * \\)\\(◕‿◕)      ;|
        |    |  |__|\\      .|
        |    |  |  | \\      |
        |    |  |  |  \\     |
        |   \\_/ |~~|  (\\    |
        |    o  |  |  | q   |
        |(☆ )|------+ |     |
        |===========* |     |
        |_______/.✿,. |     |
        |✿.   ||.:;:;.:.,✿,.|
        |:.;✿;.,.✿:;..✿..;::|
        |                   |
        |-------------------|
        |   uɐıɔıƃɐɯ ǝɥʇ    |
        \`-------------------´
        `},{name:"The High Priestess Reversed",card:`
        .-------------------.
        |        II         |
        | \\△/  ❀     ❀   \\△/|
        |▽  ▽     ❀     ▽  ▽|
        |   | ❀ {( )} ❀ |   |
        |   |   )---(   |   |
        |   |   (◕‿◕)   |   |
        |   |❀ /|\\ /|\\ ❀|   |
        | B | / |-+-| \\ | J |
        |   | | |   | | |   |
        |   | | |   | | |   |
        |   |❀|_|___|_|❀|   |
        |   | (  \\    ) -.  |
        |   |  \\  \\  /  ) \\ |
        |   |  /   \\ \\  } / |
        |   | /~~~~~\\~\\´-´  |
        |                   |
        |-------------------|
        |ssǝʇsǝıɹd ɥƃıɥ ǝɥʇ |
        \`-------------------´
        `},{name:"The Empress Reversed",card:`
        .-------------------.
        |        III        |
        |     _             |
        |    ( )            |
        |     \\\\*<*>*       |
        |     /3@◡‿◡@       |
        |/---/ /@---@\\      |
        ||--/___⋇⋆✦⋆⋇ \\     |
        | \\_____|  ) ) \\    |
        |  \\____|❀  ❀ \\ \\b  |
        |   \\___| ❀____\\---.|
        |    \\__\\   ❀  ) ❀ )|
        | __ __\\_\\ ❀  ❀ \\ ❀||
        |(  V  )\\_\\ ❀  ❀ \\ ||
        | \\ O / /__\\  ❀  ❀\\||
        |  \\+/ /___/~~~~~~~~|
        |                   |
        |-------------------|
        |    ssǝɹdɯǝ ǝɥʇ    |
        \`-------------------´
        `},{name:"The Emperor Reversed",card:`
        .-------------------.
        |        IV         |
        |  Oo.---------.oO  |
        |  8    ^*^*^    8  |
        |  |    (°ʖ°)    |  |
        | o|  /--wvw--\\  |  |
        | +| /\\_  W    \\ |  |
        | ||/\\_ \\_    _/\\|  |
        | |/  /\\_ \\__/ _/\\  |
        | E__/ | \\____/| mm |
        | O..O( \\____/ )O..O|
        | (--)|   \\_/ / (--)|
        | |  ||__ \\/ / /|  ||
        | |  | \\ \\__/ / |  ||
        | |  |  \\|  |/  |  ||
        | |__|  </  \\>  |__||
        |                   |
        |-------------------|
        |    ɹoɹǝdɯǝ ǝɥʇ    |
        \`-------------------´
        `},{name:"The Hierophant Reversed",card:`
        .-------------------.
        |         V         |
        |                   |
        |       ._o_.       |
        |    m  O_o_O   +   |
        |   (/ _(◡.◡)_  +   |
        |   ||/ |\\_/| \\ |   |
        |  /_/  o + o  \\E)  |
        |  \\      |     |/  |
        |   \\     +     |   |
        |    \\_   |    _|   |
        |     /_      _\\    |
        |     |        |    |
        |     |        |    |
        |     |        |    |
        |     |__d__b__|    |
        |                   |
        |-------------------|
        |   ʇuɐɥdoɹǝıɥ ǝɥʇ  |
        \`-------------------´
        `},{name:"The Lovers Reversed",card:`
        .-------------------.
        |         VI        |
        |                   |
        | /W\\  {ooooo}  /W\\ |
        |    \\_(*˘ω˘*)_/    |
        |   ╰(  \\   /  )╯   |
        |    /   -o-   \\    |
        |   {           }   |
        |  ___ ♡     ♡ ___  |
        | (°з°)   ♡   (°ε°) |
        | /()()\\/   \\/|_|_|\\|
        |  \\ /         \\ /  |
        | (( |         | )) |
        |  |||         |||  |
        |  |||         |||  |
        |  b b         d d  |
        |                   |
        |-------------------|
        |    sɹǝʌol ǝɥʇ     |
        \`-------------------´
        `},{name:"The Chariot Reversed",card:`
        .-------------------.
        |        VII        |
        |   --------------  |
        |   |* */_*_\\* *|   |
        |   |_*/(-.-)\\*_|   |
        |   | __/\\ /\\__ |   |
        |   |(   □□□   )|   |
        | o | \\|  □  |/ |   |
        |  \\| / ===== \\ |   |
        |   \\/ /     \\ \\|   |
        |   |E/_/_|_\\_\\3|   |
        |   |    ≧∀≦    |   |
        | <^v^> ≧ ∀ ≦ <^v^> |
        | /˘◡˘\\  \\ /  /˘◡˘\\ |
        | \\   /\\  ∀  /\\   / |
        | //||  )   (  ||\\\\ |
        |m/ m/mm     mm\\m \\m|
        |-------------------|
        |    ʇoıɹɐɥɔ ǝɥʇ    |
        \`-------------------´
        `},{name:"Strength Reversed",card:`
        .-------------------.
        |        VIII       |
        |                   |
        |       (X)         |
        |      @@@@@        |
        |     (◡‿◡✿)        |
        |     /✿✿✿✿ \\       |
        |    //|✿  |\\\\      |
        |    \\V  ✿  V/      |
        |     m   ✿ m       |
        |     /ᐠ@@ᐟ\\        |
        |    @ =･ｪ･=@-----. |
        |    @@@@@@@    y ) |
        |     @@@@@@ ._///  |
        |       @@@ /  |||  |
        |       ////   mm/  |
        |      m/m/         |
        |-------------------|
        |     ɥʇƃuǝɹʇs      |
        \`-------------------´
        `},{name:"The Hermit Reversed",card:`
        .-------------------.
        |         IX        |
        |           __      |
        | E\\\\   || /  \`\\    |
        |_?_\\\\  ||(- -) \\   |
        ||*| \\\\/E \\  {  |   |
        |--- |\\ ||\\\\/   |   |
        |    \\  || \\/   |   |
        |     \\ || {    |   |
        |      \\||  {   |   |
        |       ||   {  |   |
        |       ||{   { |   |
        |       || {   {|   |
        |       ||  {   |   |
        |       ||   {  |   |
        |       ||    { |   |
        |       ||______/   |
        |-------------------|
        |     ʇıɯɹǝɥ ǝɥʇ    |
        \`-------------------´
        `},{name:"Wheel of Fortune Reversed",card:`
        .-------------------.
        |         X         |
        |  _o_         _o_  |
        | (¬‿¬)       (↼_↼) |
        |                   |
        |       _____       |
        |     .´  |  \`.     |
        |    /  \\ | /  \\    |
        |   . ☆  \\|/  口.   |
        |   |-----+-----|   |
        |   . 〇 /|\\  △ .   |
        |    \\  / | \\  /    |
        |     \`.__|__.´     |
        |                   |
        |  _o_         _o_  |
        | (¬_¬)       (↼‿↼) |
        |                   |
        |-------------------|
        | ǝunʇɹoɟ ɟo lǝǝɥʍ  |
        \`-------------------´
        `},{name:"Justice Reversed",card:`
        .-------------------.
        |  |      XI        |
        |  |                |
        |  |                |
        |  |    ^*^*^       |
        |  |    (-ω-)       |
        |  +   /\\___/\\__    |
        |  E--/  |  |   \\   |
        |  \\)    |  |  (3   |
        |   \\    |  | .-+-. |
        |    \\__/  /  A   A |
        |     |  \\ | (_) (_)|
        |     |   \\|   |    |
        |     /        \\    |
        |    /          \\   |
        |    ~~~~~~~~~~~~   |
        |                   |
        |-------------------|
        |      ǝɔıʇsnɾ      |
        \`-------------------´
        `},{name:"The Hanged Man Reversed",card:`
        .-------------------.
        |        XII        |
        |--------| |o-------|
        |@~      | /|     ~@|
        |~       | ||      ~|
        |        | ||       |
        |   .------||-o     |
        |    \\ \\--/_|       |
        |     \\/\\/  \\       |
        |      \\    /       |
        |      |    |       |
        |   /--/    \\--\\    |
        |   \\___/--\\___/    |
        |     .´(◕ ◕)\`.     |
        |     ;  ###  ;     |
        |      \`.| |.´      |
        |                   |
        |-------------------|
        |  uɐɯ pǝƃuɐɥ ǝɥʇ   |
        \`-------------------´
        `},{name:"Death Reversed",card:`
        .-------------------.
        |       XIII        |
        |           ______  |
        | ~.___    // ✿  |  |
        |  (X.x)  // ✿ ✿ |  |
        | / |||  //~~~~~~|  |
        | |   \\_//          |
        | |  \\__3 @@@@/\\@^  |
        |_(  |--@@@    o |  |
        |  \\ \\  \`,   /\\| |  |
        |   \\ \\  \`,.)  (.|  |
        |____||   )/        |
        |    |_> \\\\         |
        |      \\ /\\\\        |
        |      //  \\\\       |
        |      || D/        |
        |      ||           |
        |-------------------|
        |      ɥʇɐǝp        |
        \`-------------------´
        `},{name:"Temperance Reversed",card:`
        .-------------------.
        |        XIV        |
        |        ___        |
        |     A (   ) A     |
        |   /'-\\@@@@@/-'\\   |
        |  /   @(-_-)@   \\  |
        | /   w/\\___/\\w   \\ |
        |/  w/|   △   |\\w  \\|
        | w/ w|    ( )|w \\w |
        |/ w  |( )  \\E| \\w \\|
        |w/   |3/   |     \\w|
        |      |    |   ❀   |
        |^*^*^ |    | ❀     |
        |      |    |     ❀ |
        |      /     \\      |
        |     /~~~~~~~\\     |
        |                   |
        |-------------------|
        |    ǝɔuɐɹǝdɯǝʇ     |
        \`-------------------´
        `},{name:"The Devil Reversed",card:`
        .-------------------.
        |        XV         |
        |(                 )|
        |\\      <(_)>      /|
        |_\`-(  (\\ V /)  )-´_|
        | WW-\\_(Φ._.Φ)_/--/ |
        |  |\\/ (.\\ /.) \\    |
        |  | | /--  --\\ \\   |
        |  \\__/(  .   )\\ \\  |
        |   (   \\---/  )\\ \\ |
        |   6\\ \\____/ /9 \\ \\|
        |    6\\ \\  / /9  LMM|
        |     6\\|  |/9      |
        | v   9 w  w 6   v  |
        | O  9 MM  MM 6  O  |
        |/|\\            /|\\ |
        | /\\             /\\ |
        |-------------------|
        |    lıʌǝp ǝɥʇ      |
        \`-------------------´
        `},{name:"The Tower Reversed",card:`
        .-------------------.
        |        XVI     /__|
        |    <*^       /__´ |
        |   <^ ( (   /_´   .|
        |     (_)) /´    .  |
        |      |     )  .  .|
        |  .   |    (_). .  |
        | .    |  (  |      |
        |.     | (_) |      |
        | . \\/ |     |      |
        |.  /  |     |\\/    |
        | -/\\  |     | \\    |
        | O    |     | /\\-  |
        |  .   |     |   O  |
        |     /\\  /\\ |      |
        |    /\\/\\/\\/\\/\\     |
        |   /\\/\\/\\/\\/\\/\\    |
        |-------------------|
        |     ɹǝʍoʇ ǝɥʇ     |
        \`-------------------´
        `},{name:"The Star Reversed",card:`
        .-------------------.
        |        XVII       |
        |  *             *  |
        |       \\>/\\</      |
        | *    <=<  >=>   * |
        |       /v\\/v\\ *    |
        |    *   ___        |
        |       (･ω･)___    |
        | *    //( ( \\-\\\\   |
        |     //  \\.  \\ \\\\  |
        |   _// .--\\ / ) >D |
        |  ( )  | /-/ /b ~  |
        |~~~A~~~||~ |_/  ~  |
        |   ~  c_d ~~    ~  |
        |   ~      ~~~   ~  |
        |        ~~~    ~~~ |
        |                   |
        |-------------------|
        |     ɹɐʇs ǝɥʇ      |
        \`-------------------´
        `},{name:"The Moon Reversed",card:`
        .-------------------.
        |        XVIII      |
        |                   |
        |      \\.' \\ './    |
        |     ~/    }  \\~   |
        |    -|     )´ω\`|-  |
        |     ~\\    }  /~   |
        |      /\`. /_.´\\    |
        |       *   *   *   |
        |   Ƹ̵̡Ӝ̵̨̄Ʒ   *   *     |
        |       *   *  Ƹ̵̡Ӝ̵̨̄Ʒ  |
        |     ʕ·_·ʔ         |
        |     (o o)         |
        |         =^･ｪ･^=   |
        |  U^ｪ^U   (m m)    |
        |  (m m)            |
        |       ᘛ⁐̤ᕐᐷ        |
        |-------------------|
        |     uooɯ ǝɥʇ      |
        \`-------------------´
        `},{name:"The Sun Reversed",card:`
        .-------------------.
        |        XIX        |
        | *  *.       .*  * |
        |*  */         \\ * *|
        |* * .  ʘ   ʘ  . *  |
        |*  *\\         /* * |
        | *  *\`-.....-´* o  |
        |  *  *  *  *   //( |
        |*   *   *   * //  )|
        |   *    *    //(  (|
        |  *  ~___~  //  )_)|
        | *   (◠◡◠) //      |
        |*   ╰/   \\╯@/\\_/|  |
        |    _\\ _ /@   @/   |
        | ~~/ d/  @( o o|   |
        |  (     @  |/ /    |
        |  \\        ('')    |
        |-------------------|
        |      uns ǝɥʇ      |
        \`-------------------´
        `},{name:"Judgement Reversed",card:`
        .-------------------.
        |        XX         |
        |                   |
        |  /W\\ @@@@@ /W\\    |
        |    @@(-ʖ-)@@      |
        |     @  \\\\ @       |
        |      ___\\\\        |
        |      )  )\\\\       |
        |     ( + ( \\\\      |
        |      )___) \\\\     |
        |            / \\    |
        |      O    . . .   |
        |  O  \\|/  . . . .  |
        | \\|/ / \\       O   |
        | / \\          \\|/  |
        |         \\o/  / \\  |
        |         / \\       |
        |-------------------|
        |     ʇuǝɯǝƃpnɾ     |
        \`-------------------´
        `},{name:"The World Reversed",card:`
        .-------------------.
        |        XXI        |
        |(¬_¬ )        (･Θ･)|
        |     .o     o.     |
        |   .o         o.   |
        | .o     %%%%    o. |
        | o   ~%%(-.-)    o |
        | .      /   \\    . |
        | o   * /(   )\\ * o |
        | .   |// )  (\\\\| . |
        | o   d/ (  \\ )\\b o |
        | .   *   \\  \\| * . |
        | o       /| |    o |
        | .       |/\\|    . |
        |  o      b  b   o  |
        |   \`o . . . . o´   |
        |(ˆ(oo)ˆ)    (´(ｴ)ˋ)|
        |-------------------|
        |     plɹoʍ ǝɥʇ     |
        \`-------------------´
        `},{name:"Ace of Wands Reversed",card:`
        .-------------------.
        |     *  *          |
        |      *( ) *       |
        |     * | }/        |
        |     * | |   *     |
        |      \\{ |   __.   |
        |       | | .( _).  |
        |    *  | / ( ( _)  |
        |  *    || * \\ __ ).|
        |      _|p.   (_  _)|
        |     ( |\\ \\   (  ))|
        |     (\\_d  )--/ __)|
        |     (\\_d____(_)   |
        |     (\\_d ._(_  )./|
        |       || (__ _)_) |
        |       **   (__)   |
        |                   |
        |-------------------|
        |    spuɐʍ ɟo ǝɔɐ   |
        \`-------------------´
        `},{name:"Two of Wands Reversed",card:`
        .-------------------.
        |  *                |
        |  |                |
        |  |     _____   *  |
        |  |     \\___/   |  |
        |  |   _ (° @@   |  |
        |  |  (_)/\\  \\   |  |
        |  |___\\/||   |  |  |
        |  E_____/|   |  |  |
        |  |    | |   |  |  |
        |  |    | | | |  |  |
        |  |    | | | |  |  |
        |  *    / | |||  |  |
        |       \\ | |||  |  |
        |       /-| |||  |  |
        |       |||-LL|  *  |
        |      c_d          |
        |                   |
        |        II         |
        \`-------------------´
        `},{name:"Three of Wands Reversed",card:`
        .-------------------.
        |                *  |
        |   *            |  |
        |   |          * |  |
        |   |    __    | |  |
        |   |   (  )   | |  |
        |   |   /==L___|_|  |
        |   |  / \\ \\___|_3  |
        |   | /   \\ \\| | |  |
        |   | |    \\_| | |  |
        |   | |      | | |  |
        |   | ||     | | |  |
        |   | || | | / | |  |
        |   | \\| | ||  | |  |
        |   |  |_L_L/  | *  |
        |   *    d b   |    |
        |              *    |
        |                   |
        |        III        |
        \`-------------------´
        `},{name:"Four of Wands Reversed",card:`
        .-------------------.
        |                   |
        |  *  *        *  * |
        | ❀|❀ |        | ❀|❀|
        | {|~❀|~      ~|❀~|}|
        |  |~{|❀~~❀~~❀~|}~| |
        |  | ~|~❀~~❀~~❀|~ | |
        |  |  |        |  | |
        |  |  |        |  | |
        |  |  |        |  | |
        |  |  |        |  | |
        |  |  |        |  | |
        |  |  |❀ o  O ❀|  | |
        |  |  | \\|/\\|/ |  | |
        |  |  |  |  |  |  | |
        |  |  |  /\\ /\\ |  | |
        |  |  | /  V  \\|  | |
        |                   |
        |         IV        |
        \`-------------------´
        `},{name:"Five of Wands Reversed",card:`
        .-------------------.
        |     *             |
        |     |             |
        |     |        *    |
        |     *()      |    |
        |   *  \\|_     |    |
        |   |   \\      *()  |
        |   |   /\\      \\|/ |
        | ()*  /  \\      /  |
        |\\|/            /\\  |
        | \\      *   * /  \\ |
        | /\\     |   |      |
        |/  \\    |   |      |
        |      ()*   *()    |
        |     _|/     \\|/   |
        |      /       \\    |
        |     /\\       /\\   |
        |    /  \\     /  \\  |
        |          V        |
        \`-------------------´
        `},{name:"Six of Wands Reversed",card:`
        .-------------------.
        |            *      |
        |           _|_     |
        | * *      (*|*)    |
        | | |    *  -|-   * |
        | | |     \\  | *  | |
        | | | **** \\ | |  | |
        | | | ( -)  \\| |  | |
        | | | |\\ \\__ | |  | |
        | | | | \\____3 |@/\\@|
        | | | |    |  @@( o |
        |_|_|_/    |@@@  \\--|
        |    /  _/\\|    / (.|
        |   / _/\\  \\o-o-o   |
        |  /_/   \\  \\    \\  |
        |         | |     \\ |
        |         | |     / |
        |         c_>    /  |
        |         VI        |
        \`-------------------´
        `},{name:"Seven of Wands Reversed",card:`
        .-------------------.
        |                   |
        |    *              |
        |     \\             |
        |    /3\\  ____      |
        |   //__\\( >_<)     |
        |  /___  \\   /      |
        |      \\  \\  \\      |
        |       \\  \\  \\     |
        |    *      \\_/     |
        |   /     *  \\ *    |
        |  /       \\  * \\   |
        | /  *      \\    \\  |
        |/   |  * *  \\    \\ |
        |    |  | |   \\    \\|
        |    |  | |    \\    |
        |    |  | |     \\   |
        |    |  | |      \\  |
        |        VII        |
        \`-------------------´
        `},{name:"Eight of Wands Reversed",card:`
        .-------------------.
        |  \\ \\\\             |
        |\\  \\ \\\\     \\      |
        |\\\\  \\ \\\\     \\     |
        | \\\\  \\ \\\\     \\    |
        |\\ \\\\  \\ \\\\     \\   |
        | \\ \\\\  \\ \\\\     \\  |
        |\\ \\ \\\\  \\ \\\\     * |
        | \\ \\ \\\\  \\ \\\\      |
        |  \\ \\ \\\\  \\ \\\\     |
        |   \\ \\ \\\\  \\ \\\\    |
        |    \\ \\ \\\\  \\ \\*   |
        |     \\ \\ \\\\  \\ *   |
        |      \\ \\ \\\\  \\    |
        |       \\ \\ \\\\  *   |
        |        \\ \\ \\\\     |
        |         \\ * \\*    |
        |          *   *    |
        |        VIII       |
        \`-------------------´
        `},{name:"Nine of Wands Reversed",card:`
        .-------------------.
        |                   |
        |*       *      *   |
        ||    *  |      | * |
        || *  |  |      | |*|
        || |  |* |      | |||
        || |  || |   ___| |||
        || |  || |  (･ω･) |/|
        || |  || | /|__|\\ /||
        || |  || |/_____ 3|||
        || |  || | \\--o-/ |||
        || |  || | /   /| |||
        || |  || |/~~~/ | |||
        || |  || | \\ /| | |||
        || |  || |  / | | |||
        || |  || | / \\|/| |||
        |* *  ** */  db * **|
        |        *          |
        |        IX         |
        \`-------------------´
        `},{name:"Ten of Wands Reversed",card:`
        .-------------------.
        |                   |
        |  ****    ***    * |
        |   \\\\\\\\   |||   / *|
        |    \\\\\\\\  |||  / /*|
        |     \\\\\\\\ ||| / // |
        |      \\\\\\\\|||/ //  |
        |       \\\\\\( ;)//   |
        |       / /  /\\_>   |
        |     _/____/__ /   |
        |    /     /\\|/     |
        |   /_____( \\\\3     |
        |    |  /   //\\\\    |
        |    / /   //||\\    |
        |   / )|  //|||\\\\   |
        |  c /||b ***|****  |
        |   \\bc      ***    |
        |                   |
        |          X        |
        \`-------------------´
        `},{name:"Page of Wands Reversed",card:`
        .-------------------.
        |                   |
        |              **   |
        |      *{:･}ﾟ  ||   |
        |      (◕‿◕)   E)   |
        |      /~*~\\__/||   |
        |      \\     _/||   |
        |       \\   |___3   |
        |        >--@  ||   |
        |       /    \\ ||   |
        |      /      \\||   |
        |     :--------:|   |
        |       // ||  ||   |
        |      //  ||  ||   |
        |     //   ||  ||   |
        |    od    bd  ||   |
        |              **   |
        |-------------------|
        |   spuɐʍ ɟo ǝƃɐd   |
        \`-------------------´
        `},{name:"Knight of Wands Reversed",card:`
        .-------------------.
        |                   |
        |        **         |
        |        ||  --.**~ |
        |        || /◔ |    |
        |        || \\__|    |
        |   @@@@@3\\(# #/)   |
        | /@/|@@@@ \\_#_\\ \\  |
        | \\ O )  @~E_____)  |
        | /\\.)~*~/ \\ # #\\   |
        |//\\        \\ # /---|
        |/  \\ Y )   /  /    |
        |D   \\_/---(  / /   |
        |          / /\\(    |
        |        <__/   \\_  |
        |                 \\ |
        |                   |
        |-------------------|
        |  spuɐʍ ɟo ʇɥƃıuʞ  |
        \`-------------------´
        `},{name:"Queen of Wands Reversed",card:`
        .-------------------.
        |     .--------.    |
        |   **|        |    |
        |   ||| ^*^*^  |    |
        |   |||@(◕ ◕)@ |    |
        |   |||@@   @@ |    |
        |   |||/\\-*-/ \\|✿   |
        |   ||/ /\\V/ \\ \\|   |
        |   (3_/      \\_@   |
        |   ||/_   ____ \\   |
        |  _||   \\/    )/_  |
        | (x||\\   \\   /| x) |
        |  \\|||    \\ / | /  |
        |   ||/\\ /\\ /  |\\|  |
        |   |(=\`x\`=)_____\\  |
        |   ** m m          |
        |                   |
        |-------------------|
        |  spuɐʍ ɟo uǝǝnb   |
        \`-------------------´
        `},{name:"King of Wands Reversed",card:`
        .-------------------.
        |           |     | |
        |  **       |     | |
        |  ||   ^*^*^     | |
        |  ||   (°ʖ̯°)     | |
        |  ||   /\\_/ \\    | |
        |  ||  /\`~*~-´\\   | |
        |  ||_/\`~*~*~\\ \\  | |
        |  E____/    / /\\ | |
        |  ||/___   @_/  \\| |
        |  ||/   _____)   \\ |
        |  ||    |        | |
        | d||    \\        | |
        |  ||\\   |\\       \\ |
        |  ||d\\__| \\       \\|
        |  **       \\-------|
        |                   |
        |-------------------|
        |   spuɐʍ ɟo ƃuıʞ   |
        \`-------------------´
        `},{name:"Ace of Cups Reversed",card:`
        .-------------------.
        |                   |
        |      \\ vVv /      |
        |       w o w       |
        |         ∇         |
        |       .   ..      |
        |     .::____::.    |
        |      (:    :) .   |
        |      :\\ oo /:     |
        |      :.oooo.:     |
        |    . :: || ::     |
        |   .  ::/__\\.:     |
        |      ::    .:     |
        |      ::    :: .   |
        |      ::    .:     |
        |      ::    ::     |
        |      :.    ::     |
        |-------------------|
        |    sdnɔ ɟo ǝɔɐ    |
        \`-------------------´
        `},{name:"Two of Cups Reversed",card:`
        .-------------------.
        |    /\\       /\\    |
        |   /wwW\\   /Www\\   |
        |  Vvw  (. .)  wvV  |
        |        p|q        |
        |       ( | )       |
        | ✿✿✿✿   )|(   ✿✿✿✿ |
        |(✿◡‿◡)  (|)  (◡‿◡✿)|
        ||  / ____ ____ \\  ||
        ||  \\_\\  / \\  /_/  ||
        || \\___3/   \\E___/ ||
        ||   | ||   || |   ||
        ||   | --   -- |   ||
        ||   |         |   ||
        ||   |         |   ||
        ||   |         |   ||
        ||~~~|         |~~~||
        |                   |
        |         II        |
        \`-------------------´
        `},{name:"Three of Cups Reversed",card:`
        .-------------------.
        |      O            |
        |      Y   O  O     |
        |      3   Y  Y     |
        | ✿✿✿ /    3  E     |
        |(^◡^)✿✿✿ /\\  \\\\✿✿✿ |
        | \\* (^◡^)//   (^◡^)|
        |  \\ /* *\\/    /* *\\|
        |   |  *  \\   /  *  |
        |   |      \\  &     |
        |   |      &   &    |
        |   /     &/   /&   |
        |  /     &||  //|&  |
        |  |    & // // \\ & |
        |  &&&&& // d/   \\\\&|
        |    /b /b        d |
        |✿+ﾟ*｡:ﾟ+ ✿+ﾟ*｡:ﾟ+✿+|
        |                   |
        |         III       |
        \`-------------------´
        `},{name:"Four of Cups Reversed",card:`
        .-------------------.
        |   @@@@@@@@@@@@@@@@|
        |    @@    @@@@@@@@@|
        |     @    |  @@@ @@|
        |          |  |@@   |
        |          |  | @   |
        |          |  |     |
        |    _     |  |     |
        | .(( )\\_/ |  L__   |
        |(___))=3  | (u.u)  |
        |       |  |/ \\/ \\  |
        |         .| /-p\\ | |
        |        ;  \\_/\\_/.,|
        |_,_.-;''   /____\\  |
        |          (___\\__) |
        |\\_/\\_/\\_/          |
        | o  o  o           |
        | |  |  |           |
        |        IV         |
        \`-------------------´
        `},{name:"Five of Cups Reversed",card:`
        .-------------------.
        |                   |
        |                   |
        |                   |
        |       ____        |
        |      (TヘT)       |
        |       |    \\      |
        |       |     |     |
        |       |     |     |
        |       |     |     |
        |       |     |     |
        |       |     |     |
        |       |     |     |
        |  O>-{ |     |     |
        | O>-{  |_____| O   |
        |   O>-{  dd    Y O |
        |                 Y |
        |                   |
        |         V         |
        \`-------------------´
        `},{name:"Six of Cups Reversed",card:`
        .-------------------.
        |                   |
        |                   |
        |                   |
        | .✿.               |
        | \\_/               |
        |  o   _/\\_         |
        |  |  ( ͡ ͜ʖ ͡)  ___   |
        |     |-- .✿.(•ω•)  |
        |     \\   \\_/ |  |  |
        |     |\\___3  |  |  |
        |     |    |  |~~|  |
        |                   |
        | .✿.  .✿.  .✿. .✿. |
        | \\_/  \\_/  \\_/ \\_/ |
        |  o    o    o   o  |
        |  |    |    |   |  |
        |                   |
        |        VI         |
        \`-------------------´
        `},{name:"Seven of Cups Reversed",card:`
        .-------------------.
        |                   |
        |             >o~~. |
        |  @@@         (()) |
        | (≧◡≦)   __    \\/  |
        |  (())  (..)   /\\  |
        |   \\/  /~~~~\\      |
        |   /\\   (())       |
        |         \\/        |
        |         /\\   ʕ•̀o•́ʔ|
        |    *❀*        (())|
        |    (())    .   \\/ |
        |     \\/    .:   /\\ |
        |     /\\    :;      |
        |[--]      (())     |
        ||  |       \\/      |
        |(())       /\\      |
        | \\/                |
        | /\\    VII         |
        \`-------------------´
        `},{name:"Eight of Cups Reversed",card:`
        .-------------------.
        |                   |
        |   ,-,-.           |
        |  / (◕ω◕\\          |
        |  \\ {   /          |
        |   \`-\`-´     _     |
        |            ( )__b |
        |           (  ( /| |
        |           /  \\/ | |
        |          /___/  | |
        |           //b     |
        |  \\_/ \\_/  b  \\_/  |
        |   o   o       o   |
        |   |   |       |   |
        |\\_/ \\_/ \\_/ \\_/ \\_/|
        | o   o   o   o   o |
        | |   |   |   |   | |
        |                   |
        |        VIII       |
        \`-------------------´
        `},{name:"Nine of Cups Reversed",card:`
        .-------------------.
        |                   |
        |       V V V       |
        | V V V i i i V V V |
        | i i i _____ i i i |
        |______/     \\______|
        |                   |
        |        ___        |
        |       (___)Oo.    |
        |       (u‿u)       |
        |      /\\---/\\      |
        |     /_d/_\\b_\\     |
        |       /   \\       |
        |      /_   _\\      |
        |     (  \\ /  )     |
        |     |   /   |     |
        |     |d~~~~~b|     |
        |                   |
        |        IX         |
        \`-------------------´
        `},{name:"Ten of Cups Reversed",card:`
        .-------------------.
        |                   |
        |     ._______.     |
        |   ./ V V V V \\.   |
        | ./ V i i i i V \\. |
        |/ V i ./---\\. i V \\|
        |V i ./       \\. i V|
        |i ./           \\. i|
        |./               \\.|
        |                   |
        |                   |
        |  \\ O  o /         |
        |   \\|==|/          |
        |    |  |    \\o/\\o/ |
        |    /\\ /\\   / \\/ \\ |
        |   /  \\  \\         |
        |                   |
        |                   |
        |         X         |
        \`-------------------´
        `},{name:"Page of Cups Reversed",card:`
        .-------------------.
        |                   |
        |                   |
        |        *{:･}ﾟ     |
        | <.)>~< (◕‿◕)      |
        |  \\ /   /~*~\\-     |
        |   Y___/     \\\\    |
        |   3----/\\   |\\\\   |
        |          >--@_/   |
        |         /    \\    |
        |        /      \\   |
        |       :--------:  |
        |        //   ||    |
        |       //    ||    |
        |      //     ||    |
        |     od      bd    |
        |                   |
        |-------------------|
        |    sdnɔ ɟo ǝƃɐd   |
        \`-------------------´
        `},{name:"Knight of Cups Reversed",card:`
        .-------------------.
        |                   |
        | ~**.__            |
        |    | ◔\\           |
        |    |__/  (( ))    |
        |    (  \\   \\ /     |
        |    |\\  \\---3      |
        |    | \\----/-\\@@@  |
        |----\\  _/@@@@@@@/\\@|
        |     \\ \\ @@   /|o /|
        |      | )@   / | / |
        |    /-| |   )\\ (.) |
        |/--/  \\_>- -\\ \\    |
        |\\       / / _\\ )   |
        |\\\\     / /D/__/    |
        |D/    / /          |
        |                   |
        |-------------------|
        |  sdnɔ ɟo ʇɥƃıuʞ   |
        \`-------------------´
        `},{name:"Queen of Cups Reversed",card:`
        .-------------------.
        |                   |
        |           .____ . |
        |          /       \\|
        |         ✿✿     ✿✿ |
        |    ･*:･  ^*^*^ || |
        |   (/  \\) (◕ @\\ || |
        |  {-\\  /-}/_/ ) || |
        |     ||_ /   /| || |
        |     EE_____/ | || |
        |    ___/      | || |
        |   (  (  __  /  /  |
        |   |  | /   /| /   |
        |   |  | |  / |     |
        |   |  | |  \\ |_____|
        |  /         \\      |
        |                   |
        |-------------------|
        |   sdnɔ ɟo uǝǝnb   |
        \`-------------------´
        `},{name:"King of Cups Reversed",card:`
        .-------------------.
        |                   |
        |     .--------.    |
        |     |        |    |
        |     | ^*^*^  |    |
        |     | (°ʖ̯°)  |    |
        |     |/----/\\ |    |
        |     (()) / /\\| () |
        |    / \\/ / /  \\_|| |
        |   (___3/ /  \\___@ |
        |   / __/ /____ \\   |
        |   \\ (  \\/    )/   |
        |    \\\\   \\   /|    |
        |   | |    \\ / |    |
        |   | |     /  |\\   |
        |   |____________\\  |
        |                   |
        |-------------------|
        |    sdnɔ ɟo ƃuıʞ   |
        \`-------------------´
        `},{name:"Ace of Swords Reversed",card:`
        .-------------------.
        |                   |
        |        ╱╲         |
        |        |||        |
        |       \\^*^/       |
        |      \\^*^*^/      |
        |    .~{ ||| }~.    |
        |  .~%@} ||| {@%~.  |
        | .~%@@{ ||| }@@%~. |
        |  .     |||     .  |
        | . .    |||    . . |
        |        |||        |
        |    [0=======0]    |
        |        | |        |
        |        [ ]        |
        |         o         |
        |                   |
        |-------------------|
        |   spɹoʍs ɟo ǝɔɐ   |
        \`-------------------´
        `},{name:"Two of Swords Reversed",card:`
        .-------------------.
        |                   |
        |                   |
        |              ☽    |
        | \\               / |
        |  \\             /  |
        |   \\           /   |
        |    \\   ___   /    |
        |     \\ (=_=) /     |
        |      +E\\-/3+      |
        |      /_\\|/_\\      |
        |       \\   /       |
        |       /   \\       |
        |    /-(     )-\\    |
        |   /--|     |--\\   |
        |   |  |     |  |   |
        |      '~d~b~'      |
        |                   |
        |         II        |
        \`-------------------´
        `},{name:"Three of Swords Reversed",card:`
        .-------------------.
        |                   |
        |                   |
        |                   |
        |         +         |
        |  +      |      +  |
        |   \\___, | ,___/   |
        |  /´\\   \\|/   /\`\\  |
        | |   \\   |   /   | |
        | |    \\  |  /    | |
        |  \\_           _/  |
        |    \\_       _/    |
        |      \\_   _/      |
        |       /\\./\\       |
        |      /  |  \\      |
        |     /   |   \\     |
        |         |         |
        |                   |
        |        III        |
        \`-------------------´
        `},{name:"Four of Swords Reversed",card:`
        .-------------------.
        |                   |
        |* * * |            |
        | * *  |            |
        |* * * |   +  +  +  |
        | * *  |   |  |  |  |
        |* * * |   |  |  |  |
        |------|   |  |  |  |
        |          |  |  |  |
        |          |  |  |  |
        |          |  |  |  |
        |                   |
        |          (()    __|
        |-----------||---(↼ |
        |___________|___/(@@|
        |*~*~*~*~*~*~*~*~*~*|
        |                   |
        |   -------------+  |
        |        IV         |
        \`-------------------´
        `},{name:"Five of Swords Reversed",card:`
        .-------------------.
        |           ._ __.  |
        |     .__-((  (  .) |
        |_._+(      .____)  |
        |       .)__)       |
        |   .___)           |
        |_.))       ____ // |
        |      __. (=.= //  |
        |  ._-(  )  /  //\\  |
        | ((____)  /  //  \\ |
        |         /  //    \\|
        |       E+_/++E____/|
        |  O      \\      \\  |
        | /|\\     /\\      \\ |
        | / \\    /__\\______\\|
        |          ||\\  \\\\  |
        | +        || \\  \\\\ |
        |  \\  +----||---  \\\\|
        |   \\   Vc__d     b_|
        \`-------------------´
        `},{name:"Six of Swords Reversed",card:`
        .-------------------.
        | _                 |
        | \\\\                |
        |  /3               |
        | //\\\\              |
        | |\\ \\\\          ++ |
        | | ( )\\    + + +||+|
        | |   \\-\\   | | |||||
        | |   A \\\\  | | |||||
        | |__/ \\ \\\\ | __|||||
        | |  \\  L_3\\|/(¬)||||
        | |~~~\\    \\\\  \\|||||
        |   ||  __ /\\\\  |||||
        |   // ( ¬(  \\\\ )||~|
        |  //b (__(___\\\\~~/ |
        |  \\b       ~~/\\\\   |
        |       /~~/    \\\\  |
        |                   |
        |         VI        |
        \`-------------------´
        `},{name:"Seven of Swords Reversed",card:`
        .-------------------.
        |                   |
        |                   |
        |                   |
        |        +_____     |
        |   +   /+|___|     |
        |  +|  //+(¬_¬)     |
        |  || ///    /      |
        |  ||///  / /       |
        |  ||//__/ /        |
        |  3E/____/         |
        |   \\ /   |    +  + |
        |   ( _\\   \\   |  | |
        |   //  \\___>  |  | |
        |  //      \\\\  |  | |
        |c_/        \\\\ |  | |
        |           c/      |
        |                   |
        |        VII        |
        \`-------------------´
        `},{name:"Eight of Swords Reversed",card:`
        .-------------------.
        |                   |
        |                   |
        |      ___          |
        |     (=.=)         |
        |   + /\\_/\\ +   +   |
        | + ||=====|| + |+ +|
        | | ||=====|| | || ||
        | | |\\=====/| | || ||
        |+| | |====|| | || ||
        | \\ | |    || | || ||
        | |\\| |    || | || ||
        | | \\ |    || | || ||
        | | |\\|    || | || ||
        | |   \\~db~|  |  | ||
        |      \\            |
        |       \\           |
        |                   |
        |       VIII        |
        \`-------------------´
        `},{name:"Nine of Swords Reversed",card:`
        .-------------------.
        | +––––––––––––––   |
        |  +––––––––––––––  |
        | +––––––––––––––   |
        |  +––––––––––––––  |
        | +––––––––––––––   |
        |  +––––––––––––––  |
        | +–––––––––===––   |
        |  +–––––––/(-())–  |
        | +–––––––/  V//–   |
        |  +–––––/  \\//–––  |
        |_      /   L_______|
        |@\\----(___/ / / / /|
        |_________/_/_/_/_/_|
        |---------| | | | | |
        |         | | | | | |
        |---------|~|~|~|~|~|
        |                   |
        |         IX        |
        \`-------------------´
        `},{name:"Ten of Swords Reversed",card:`
        .-------------------.
        |                   |
        |                   |
        |                   |
        |  ++ ++ +++ ++ ++  |
        |  || || ||| || ||  |
        |  || || ||| || ||  |
        |  || || ||| || ||  |
        |  || || ||| || ||  |
        |  || || ||| || ||  |
        |  || || ||| || ||  |
        |  || || ||| || ||  |
        |  || || ||| || ||  |
        |  || || ||| || ||  |
        | /         ( X_x ) |
        |/    ________   /  |
        |    /   C|_____/   |
        |   /               |
        |         X         |
        \`-------------------´
        `},{name:"Page of Swords Reversed",card:`
        .-------------------.
        |                /\\ |
        |               / / |
        |       *{:･}ﾟ / /  |
        |       (◕‿◕) / /   |
        |       /~*~\\4--4   |
        |       | \\ / 33    |
        |        \\ V /V     |
        |         >--@      |
        |        /    \\     |
        |       /      \\    |
        |      :--------:   |
        |       //   ||     |
        |      //    ||     |
        |     //     ||     |
        |    od      bd     |
        |                   |
        |-------------------|
        |  spɹoʍs ɟo ǝƃɐd   |
        \`-------------------´
        `},{name:"Knight of Swords Reversed",card:`
        .-------------------.
        |     |             |
        |     |             |
        |     |     --.**~  |
        |     E\\   /◔ | ~~~~|
        |     +\\\\__\\__|/_   |
        |       \\____    )\\ |
        |    ^@^@@@  \\E____)|
        |   / ◔  @@@ / \\    |
        |  /  _)_~*~/   |  /|
        | (..)   \\      / / |
        |        /     ( /  |
        |    ___/     / /   |
        |   / __/ /-<__/----|
        |  / / / /          |
        | / / / /           |
        |                   |
        |-------------------|
        | spɹoʍs ɟo ʇɥƃıuʞ  |
        \`-------------------´
        `},{name:"Queen of Swords Reversed",card:`
        .-------------------.
        |            .      |
        |           / \\     |
        |           | |     |
        |           | |     |
        | . ^*^*^   | |     |
        | |\\&  ◕)   | |     |
        | |&% ⌣/    | |K    |
        | | |  '____| |/    |
        | | |   \\-- | |     |
        | | \\  y___4---4    |
        | |  \\_______E3     |
        | |          / )    |
        | \\‧͙⁺˚*･༓☾  /   \\   |
        |  \\˚*•̩̩͙✩•̩̩͙*˚ |    \\  |
        |   \\ ˚ ˚   |     \\ |
        |    V------V_____| |
        |-------------------|
        |  spɹoʍs ɟo uǝǝnb  |
        \`-------------------´
        `},{name:"King of Swords Reversed",card:`
        .-------------------.
        |                   |
        |     .--------.    |
        |   /\\|        |    |
        |   \\ \\ ^*^*^  |    |
        |    \\ \\(°ʖ̯°)  |    |
        |     \\ \\--- \\ |    |
        |     /\\ \\    \\|    |
        |    / 7--7    \\    |
        |    (__3    @__)   |
        |   / ___  ____ \\   |
        |   \\ (  \\/    )/   |
        |   | \\   \\   /|    |
        |   | |    \\ / |    |
        |   | |     /  |\\   |
        |   |____________\\  |
        |                   |
        |-------------------|
        |  spɹoʍs ɟo ƃuıʞ   |
        \`-------------------´
        `},{name:"Ace of Pentacles Reversed",card:`
        .-------------------.
        |                   |
        |    .--------.     |
        |  .´    /\\    \`.   |
        | /_____/__\\_____\\  |
        | |\`-. /    \\ ,-'|  |
        | |   /-.  .-\\   |  |
        | |  /  ,\`'.  \\  |  |
        | *\\/,-'    '-.\\/*  |
        |  *'.,_______,.\` * |
        |   *  *  *  *  *  *|
        |    *  *  *  *  *  |
        |     *  *  *  *  * |
        |      *  *  *  *  *|
        |       *  *  *  *  |
        |        *  *  *  * |
        |                   |
        |-------------------|
        |  sǝlɔɐʇuǝd ɟo ǝɔɐ |
        \`-------------------´
        `},{name:"Two of Pentacles Reversed",card:`
        .-------------------.
        |                   |
        |                   |
        |                   |
        |       (nnn)       |
        |.---.  (uuu)       |
        |(☆ ) \\ (-_-)       |
        |\\w    \\/   \\       |
        | \`---._\\____.---.  |
        |   \\__/ \\     (☆ ) |
        |      /~o\`-.___w./ |
        |     /       \\     |
        |     ununununu     |
        |       \\ | / /     |
        |        \\| |/      |
        |       c_d cb      |
        |                   |
        |                   |
        |         II        |
        \`-------------------´
        `},{name:"Three of Pentacles Reversed",card:`
        .-------------------.
        |    /         \\    |
        |  ./    .-.    \\.  |
        | /     ( ☆ )     \\ |
        |/    .-.\`-´.-.    \\|
        |  /\\( ☆ ) ( ☆ )/\\  |
        | /--\\\`-´   \`-´/--\\ |
        |/___ \\  (✿)  /    \\|
        |(._.) \\ /△\\ /_ __  |
        |\\   //d\\\\▽//..(_.) |
        | \\ /\\/  ---/--/  | |
        | / \\    | p__/   | |
        ||___|   | |      | |
        | |||    | |\\     | |
        | |||    | | \\    | |
        |  bb    | |  \\   | |
        |        | |   \\__| |
        |        | |    dd  |
        |        III        |
        \`-------------------´
        `},{name:"Four of Pentacles Reversed",card:`
        .-------------------.
        |                   |
        |                   |
        |                   |
        |       .--.        |
        |      ( ☆  )       |
        |      \\\`--´/       |
        |      (-_- )       |
        |      / .--.\\      |
        |     / /( ☆ )\\     |
        |     \\_3\`--´_/     |
        |     /  \\    \\     |
        |     |  |    |     |
        |     |~~|~~~~|     |
        |    .--d   b--.    |
        |   ( ☆ )   ( ☆ )   |
        |    \`--´   \`--´    |
        |                   |
        |        IV         |
        \`-------------------´
        `},{name:"Five of Pentacles Reversed",card:`
        .-------------------.
        |   ||\\      /||    |
        |   ||/*(☆ )*\\||    |
        |   ||\\__/\\__/||    |
        |   ||(☆ )(☆ )||    |
        |   ||\\__/\\__/||    |
        |   ||(☆ )(☆ )||    |
        |   |/___\\/___\\|    |
        |               ___ |
        |    ___      /(⇀_⇀)|
        |   (¬.¬)   _/vvvv/ |
        |  /\\vv|\\__/vvvvv/  |
        | //vvv/-/vvvvvv/   |
        | \\\\vv/ /vvvvvv/    |
        | /evv\\ |vvvvv/     |
        |/vvvv| |vvvv/      |
        | b vv|  b vv|      |
        |     b      b      |
        |         V         |
        \`-------------------´
        `},{name:"Six of Pentacles Reversed",card:`
        .-------------------.
        |                   |
        | (☆ )  (☆ )   (☆ ) |
        |                   |
        | (☆ )   _*__  (☆ ) |
        |       (˘､˘ )      |
        | (☆ )   |   \\  /?  |
        |        |    \\/_|_ |
        |       //|    /\\ /\\|
        |     _// |    -- --|
        |      .  |    \\/ \\/|
        |     .             |
        | ____  .           |
        |(˘̩╭╮˘̩)っ   ______  |
        |/    \\    (｡•́︿•̀｡) |
        |      \\  ╰/    」\\ |
        |         /        \\|
        |                   |
        |        VI         |
        \`-------------------´
        `},{name:"Seven of Pentacles Reversed",card:`
        .-------------------.
        |                   |
        |                   |
        |          ___      |
        |         (‿ ‿)--.  |
        | @@@     //==\\_ \\  |
        |@__@@   // /|\\___\\ |
        |(☆ )}~ /--/ |  |   |
        |@@@@__@   | |  \\   |
        | ~{(☆ )}~ / |   \\  |
        |@__@@    /_ |____\\ |
        |(☆ )}~@__ / | \\ \\  |
        |@@@@~{(☆ )( |  \\ ) |
        |@@@@@@@__@| |  | | |
        |@__~{(☆ )}| |  | | |
        |(☆ )}~@@ o_d|__c__o|
        |@@@@@     ~{(☆ )}~@|
        |                   |
        |        VII        |
        \`-------------------´
        `},{name:"Eight of Pentacles Reversed",card:`
        .-------------------.
        |              (☆ ) |
        |                   |
        |              (☆ ) |
        |                   |
        |              (☆ ) |
        |                   |
        |              (☆ ) |
        |       ___         |
        |      ( -.)   (☆ ) |
        |     /    P        |
        |    /  \\_/3 I (☆ ) |
        |   /  \\__/__3      |
        |  (_____ | (☆ )    |
        |       /\\ \\        |
        |      /_>\\ \\   (☆ )|
        |  (☆ )    c_>      |
        |                   |
        |        VIII       |
        \`-------------------´
        `},{name:"Nine of Pentacles Reversed",card:`
        .-------------------.
        |               _*  |
        |        o___o <o)  |
        |        (◕‿◕)  \\)< |
        |        /\\ /\\  --  |
        |       /  /  \\//   |
        |      //     \\/|   |
        |   __//|    \\  |   |
        |    \\/ |    |\\/    |
        |       |    |      |
        | (☆)   |    |      |
        |       |    \\ (☆)  |
        |   (☆) |     \\     |
        |       /      \\ (☆)|
        |(☆)   /        \\   |
        |     /~~~~~~~~~~\\  |
        | (☆)     (☆)       |
        |     (☆)      (☆)  |
        |         IX        |
        \`-------------------´
        `},{name:"Ten of Pentacles Reversed",card:`
        .-------------------.
        |                   |
        |       ( ☆ )       |
        |(☆ )           (☆ )|
        |       ( ☆ )       |
        |(☆ )           (☆ )|
        |                   |
        |       ____  @@@@  |
        |      (⁀ヮ⁀)(◡‿◡*) |
        |      |    | \\   | |
        |(☆ )  |    | / (☆ )|
        | ###  |    |/    | |
        |(´ω\`) |( ☆ )     | |
        |/   | |d--b/\\/\\  | |
        |    |      (･ω･)_| |
        |    |  ( ☆ )∪(･ω･)∪|
        |-bb-|         m m  |
        |                   |
        |         X         |
        \`-------------------´
        `},{name:"Page of Pentacles Reversed",card:`
        .-------------------.
        |                   |
        |                   |
        |      *{:･}ﾟ .--.  |
        |      (◕‿◕) ( ☆  ) |
        |      /~*~\\/__--´  |
        |      \\ \\_///      |
        |       \\--/|       |
        |        >--@       |
        |       /    \\      |
        |      /      \\     |
        |     :--------:    |
        |       // ||       |
        |      //  ||       |
        |     //   ||       |
        |    od    bd       |
        |                   |
        |-------------------|
        | sǝlɔɐʇuǝd ɟo ǝƃɐd |
        \`-------------------´
        `},{name:"Knight of Pentacles Reversed",card:`
        .-------------------.
        |                   |
        | ~**.__            |
        |    | ◔\\           |
        |    |__/   .-.     |
        |    (  \\  ( ☆ )    |
        |    | \\ \\/3._.@^@^ |
        |   _\\  \\_/  @@(oo| |
        |___| \\  _\\@@@/ \\ \\ |
        |   \\--\\__ \\  \\ (..)|
        |     ||  \\ )  \\    |
        |     ||   \\ \\ /    |
        |  Y------y \\_>     |
        | /        \\ /      |
        |/         //\\      |
        |         // \\\\     |
        |         D  D/     |
        |-------------------|
        |sǝlɔɐʇuǝd ɟo ʇɥƃıuʞ|
        \`-------------------´
        `},{name:"Queen of Pentacles Reversed",card:`
        .-------------------.
        |✿✿~ ~✿~    ~✿~ ~✿✿~|
        |           _____   |
        |      ^*^*^_____\\  |
        |      (◕u◕)      | |
        |       /\\/ \\     | |
        |      / **  \\    | |
        |    .-.  //  |   | |
        |   ( ☆ )//   |   | |
        |   /\`-´E/    |  /| |
        |   | |  ____/ _/ | |
        |   | |  \\  | /   | |
        |   | /   \\ || ___| |
        |   |~dd~~~\\||/     |
        |                   |
        |~✿~   ~✿✿~   ~✿~ ~✿|
        |                   |
        |-------------------|
        |sǝlɔɐʇuǝd ɟo uǝǝnb |
        \`-------------------´
        `},{name:"King of Pentacles Reversed",card:`
        .-------------------.
        |                   |
        |     .--------.    |
        |     |        |    |
        | |\\~~/|^*^*^  |    |
        |  \\TT/ (°ʖ̯°)  |    |
        |  (..)/@\\_/@\\ |    |
        |    \\/* ~*~ *\\|    |
        |   ()ﾟ.*･｡ .-.\\    |
        |   ||･｡ﾟ.*( ☆  )   |
        |  (_3___. \\._./\\   |
        |   \\ (*.\\/ﾟ.*･)/   |
        |    \\\\ ﾟ*\\*･｡/|    |
        |   | |.*･｡\\./ |    |
        |   | |ﾟ.*･ /  |\\   |
        |   |____________\\  |
        |                   |
        |-------------------|
        | sǝlɔɐʇuǝd ɟo ƃuıʞ |
        \`-------------------´
        `}];let y=!1;const h_=async E=>{const i=()=>Q[Math.floor(Math.random()*Q.length)],s=A=>new Promise(l=>setTimeout(l,A));if(E==="One card"){await s(500);const A=i();print(`🔮 ${A.name}
${A.card}`,"#ff3399")}else if(E==="Three cards")for(let A of["Past","Present","Future"]){await s(500);const l=i();print(`
${A}:
${l.name}
${l.card}`,"#ff66cc")}else if(E==="Celtic cross"){const A=["You","Your obstacle","Root of the matter","The past","What’s above you","The near future","Your attitude","Others involved","Hopes/Fears","Outcome"];for(let l of A){await s(500);const d=i();print(`
${l}:
${d.name}
${d.card}`,"#cc00ff")}}else if(E==="Show me the deck")for(let A of Q)await s(100),print(`${A.name}
${A.card}`,"#999")};window.handleInput=async()=>{const E=inputEl.value.trim();if(E){if(inputEl.value="",print(`> You: ${E}`,"#ff66cc"),sendSound.currentTime=0,sendSound.play(),E==="/manual"){[`📖 TERMINAL MANUAL
`,"/glitchmode               — toggles corrupted UI","/textify [word/phrase]    — AI-stylized terminal banners based on your vibe","/ascii [text]             — creates large ASCII text banners from a word or phrase","/image [path/url]         — converts an image to ASCII art","/ghostlog                 — view past ghost conversations","/tarot                    — pull cards from a ASCII tarot deck","/manual                   — display this command reference",`/exit                     — closes the terminal session (browser reload)
`].forEach(s=>print(s,"#ff66cc"));return}if(E==="/glitchmode"){if(y=!y,y){glitchSound.play();const i=["[terminal.exe v͠i͟r͘t̡ual̡ cor͢e r̕͢eb͘͟oot...]",">>> GlitchMODE INITIALIZED","ghost signal corrupted... attempting resync...","██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒"],s=["#ff3399","#cc00ff","#ff3300","#00ffff"];for(let A=0;A<i.length;A++){const l=glitchify(i[A]);print(l,s[A%s.length]),await new Promise(d=>setTimeout(d,400))}}else print("🧼 Glitchmode deactivated","#ff3399");return}if(E==="/exit"){print("👻 The ghost vanishes into the datastream... refreshing...","#999"),setTimeout(()=>location.reload(),1500);return}if(E==="/ghostlog"){showLog();const i=document.getElementById("ghostlog-download");i.style.display="inline-block",i.onclick=()=>{const A=JSON.parse(localStorage.getItem("ghostlog")||"[]").map(N=>`[$
        {entry.timestamp}]
> You: ${N.prompt}
> Ghost: ${N.response}

`).join(""),l=new Blob([A],{type:"text/plain"}),d=URL.createObjectURL(l),u=document.createElement("a");u.href=d,u.download="ghostlog.txt",u.click(),URL.revokeObjectURL(d)};return}if(E.startsWith("/textify ")){const s=`You're an aesthetic CLI stylist with an unhinged sense of creativity.
Your job is to transform a single word or phrase into 3 wildly stylized and emotionally expressive terminal text banners.
Each line should feel like a poster from a different aesthetic subculture — vaporwave, glitchcore, cybergrunge, witchy internet, cursed emoji, terminal magic, etc.
Use a mix of terminal-safe characters, rare emojis, sparkles, ASCII chaos, kaomoji, symbols, or ancient glyph vibes.
Phrase: "${E.replace("/textify ","").trim()}"
Respond with exactly 3 stylized lines, one per line. No explanations, no extra text — just pure aesthetic madness. Make it DRIP:`;try{startLoading();const A=await fetch("https://deepseek-proxy.jaidenschembri1.workers.dev/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"deepseek-chat",messages:[{role:"user",content:s}]})});stopLoading();const l=(await A.json()).choices[0].message.content.trim().split(`
`),d=["#ff66cc","#ff3399","#cc00ff","#66ccff","#00ffff","#00ffcc","#ffff00","#ff9933"];l.forEach((u,N)=>print(u,d[N%d.length]))}catch(A){stopLoading(),print(`⚠️ Textify error: ${A.message}`,"#ff0000")}return}if(E.startsWith("/ascii ")){const i=E.replace("/ascii ","").trim(),s=document.getElementById("ascii-picker"),A=document.getElementById("ascii-font"),l=document.getElementById("ascii-confirm");s.style.display="block",inputEl.disabled=!0,sendBtn.disabled=!0,l.onclick=()=>{const d=A.value;s.style.display="none",inputEl.disabled=!1,sendBtn.disabled=!1,inputEl.focus(),figlet.text(i,{font:d},(u,N)=>{if(u)return print(`⚠️ ASCII error: ${u.message}`,"#ff0000");print(N,"#00ffcc")})};return}if(E.startsWith("/image")){const i=E.replace("/image","").trim(),s=document.getElementById("ascii-upload"),A=async l=>{try{startLoading();const d=await imageToAscii(l);stopLoading(),print(d,"#00ffcc")}catch(d){stopLoading(),print(`⚠️ Failed to render image: ${d.message}`,"#ff0000")}};if(i)return A(i);s.click(),s.onchange=l=>{const d=l.target.files[0];if(!d)return;const u=new FileReader;u.onload=N=>A(N.target.result),u.readAsDataURL(d)};return}if(E==="/tarot"){const i=document.getElementById("tarot-picker");i.style.display="block",inputEl.disabled=!0,sendBtn.disabled=!0;const s=document.getElementById("spread-select"),A=document.getElementById("spread-confirm");A.onclick=async()=>{const l=s.value;if(i.style.display="none",inputEl.disabled=!1,sendBtn.disabled=!1,inputEl.focus(),l==="Cancel")return print("🔙 Returned to the ghost.","#888");await h_(l)};return}try{startLoading();const i=await fetch("https://deepseek-proxy.jaidenschembri1.workers.dev/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"deepseek-chat",messages:[{role:"user",content:E}]})});stopLoading();const s=(await i.json()).choices[0].message.content,A=y?glitchify(s):s;print(`👻 ${A}`,y?"#00ffcc":"#00ffff"),logMemory(E,s)}catch(i){stopLoading(),print(`⚠️ Ghost failed to respond: ${i.message}`,"#ff0000")}}};inputEl.addEventListener("keydown",E=>{E.key==="Enter"&&handleInput()});sendBtn.addEventListener("click",handleInput);
