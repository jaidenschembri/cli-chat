(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const I of document.querySelectorAll('link[rel="modulepreload"]'))l(I);new MutationObserver(I=>{for(const u of I)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function r(I){const u={};return I.integrity&&(u.integrity=I.integrity),I.referrerPolicy&&(u.referrerPolicy=I.referrerPolicy),I.crossOrigin==="use-credentials"?u.credentials="include":I.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(I){if(I.ep)return;I.ep=!0;const u=r(I);fetch(I.href,u)}})();function x_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var l_={exports:{}},A_;function V_(){return A_||(A_=1,function(s){const c=(()=>{const f={},A={font:"Standard",fontPath:"./fonts"};function p(t,n){let _={},e,o,a,d,T=[[16384,"vLayout",2],[8192,"vLayout",1],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",2],[64,"hLayout",1],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];for(e=n!==null?n:t,o=0,a=T.length;o<a;)d=T[o],e>=d[0]?(e=e-d[0],_[d[1]]=typeof _[d[1]]>"u"?d[2]:_[d[1]]):d[1]!=="vLayout"&&d[1]!=="hLayout"&&(_[d[1]]=!1),o++;return typeof _.hLayout>"u"?t===0?_.hLayout=1:t===-1?_.hLayout=0:_.hRule1||_.hRule2||_.hRule3||_.hRule4||_.hRule5||_.hRule6?_.hLayout=3:_.hLayout=2:_.hLayout===2&&(_.hRule1||_.hRule2||_.hRule3||_.hRule4||_.hRule5||_.hRule6)&&(_.hLayout=3),typeof _.vLayout>"u"?_.vRule1||_.vRule2||_.vRule3||_.vRule4||_.vRule5?_.vLayout=3:_.vLayout=0:_.vLayout===2&&(_.vRule1||_.vRule2||_.vRule3||_.vRule4||_.vRule5)&&(_.vLayout=3),_}function w(t,n,_){return t===n&&t!==_?t:!1}function $(t,n){let _="|/\\[]{}()<>";if(t==="_"){if(_.indexOf(n)!==-1)return n}else if(n==="_"&&_.indexOf(t)!==-1)return t;return!1}function k(t,n){let _="| /\\ [] {} () <>",e=_.indexOf(t),o=_.indexOf(n);if(e!==-1&&o!==-1&&e!==o&&Math.abs(e-o)!==1){const a=Math.max(e,o),d=a+1;return _.substring(a,d)}return!1}function J(t,n){let _="[] {} ()",e=_.indexOf(t),o=_.indexOf(n);return e!==-1&&o!==-1&&Math.abs(e-o)<=1?"|":!1}function G(t,n){let _="/\\ \\/ ><",e={0:"|",3:"Y",6:"X"},o=_.indexOf(t),a=_.indexOf(n);return o!==-1&&a!==-1&&a-o===1?e[o]:!1}function B(t,n,_){return t===_&&n===_?_:!1}function __(t,n){return t===n?t:!1}function e_(t,n){let _="|/\\[]{}()<>";if(t==="_"){if(_.indexOf(n)!==-1)return n}else if(n==="_"&&_.indexOf(t)!==-1)return t;return!1}function t_(t,n){let _="| /\\ [] {} () <>",e=_.indexOf(t),o=_.indexOf(n);if(e!==-1&&o!==-1&&e!==o&&Math.abs(e-o)!==1){const a=Math.max(e,o),d=a+1;return _.substring(a,d)}return!1}function n_(t,n){return t==="-"&&n==="_"||t==="_"&&n==="-"?"=":!1}function o_(t,n){return t==="|"&&n==="|"?"|":!1}function U(t,n,_){return n===" "||n===""||n===_&&t!==" "?t:n}function v_(t,n,_){if(_.fittingRules.vLayout===0)return"invalid";let e,o=Math.min(t.length,n.length),a,d,T=!1,i;if(o===0)return"invalid";for(e=0;e<o;e++)if(a=t.substring(e,e+1),d=n.substring(e,e+1),a!==" "&&d!==" "){if(_.fittingRules.vLayout===1)return"invalid";if(_.fittingRules.vLayout===2)return"end";if(o_(a,d)){T=T||!1;continue}if(i=!1,i=_.fittingRules.vRule1?__(a,d):i,i=!i&&_.fittingRules.vRule2?e_(a,d):i,i=!i&&_.fittingRules.vRule3?t_(a,d):i,i=!i&&_.fittingRules.vRule4?n_(a,d):i,T=!0,!i)return"invalid"}return T?"end":"valid"}function y_(t,n,_){let e=t.length,o=t.length;n.length;let a,d,T,i=1,L,g,h;for(;i<=e;){for(a=t.slice(Math.max(0,o-i),o),d=n.slice(0,Math.min(e,i)),T=d.length,h="",L=0;L<T;L++)if(g=v_(a[L],d[L],_),g==="end")h=g;else if(g==="invalid"){h=g;break}else h===""&&(h="valid");if(h==="invalid"){i--;break}if(h==="end")break;h==="valid"&&i++}return Math.min(e,i)}function O_(t,n,_){let e,o=Math.min(t.length,n.length),a,d,T="",i;for(e=0;e<o;e++)a=t.substring(e,e+1),d=n.substring(e,e+1),a!==" "&&d!==" "?_.fittingRules.vLayout===1||_.fittingRules.vLayout===2?T+=U(a,d):(i=!1,i=_.fittingRules.vRule5?o_(a,d):i,i=!i&&_.fittingRules.vRule1?__(a,d):i,i=!i&&_.fittingRules.vRule2?e_(a,d):i,i=!i&&_.fittingRules.vRule3?t_(a,d):i,i=!i&&_.fittingRules.vRule4?n_(a,d):i,T+=i):T+=U(a,d);return T}function b_(t,n,_,e){let o=t.length,a=n.length,d=t.slice(0,Math.max(0,o-_)),T=t.slice(Math.max(0,o-_),o),i=n.slice(0,Math.min(_,a)),L,g,h,m=[],R,M=[];for(g=T.length,L=0;L<g;L++)L>=a?h=T[L]:h=O_(T[L],i[L],e),m.push(h);return R=n.slice(Math.min(_,a),a),M.concat(d,m,R)}function L_(t,n){let _,e=t.length,o="";for(_=0;_<n;_++)o+=" ";for(_=0;_<e;_++)t[_]+=o}function M_(t,n,_){let e=t[0].length,o=n[0].length,a;return e>o?L_(n,e-o):o>e&&L_(t,o-e),a=y_(t,n,_),b_(t,n,a,_)}function W_(t,n,_){if(_.fittingRules.hLayout===0)return 0;let e,o=t.length,a=n.length,d=o,T=1,i=!1,L=!1,g,h,m,R;if(o===0)return 0;_:for(;T<=d;){const M=o-T;for(g=t.substring(M,M+T),h=n.substring(0,Math.min(T,a)),e=0;e<Math.min(T,a);e++)if(m=g.substring(e,e+1),R=h.substring(e,e+1),m!==" "&&R!==" "){if(_.fittingRules.hLayout===1){T=T-1;break _}else if(_.fittingRules.hLayout===2){(m===_.hardBlank||R===_.hardBlank)&&(T=T-1);break _}else if(i=!0,L=!1,L=_.fittingRules.hRule1?w(m,R,_.hardBlank):L,L=!L&&_.fittingRules.hRule2?$(m,R,_.hardBlank):L,L=!L&&_.fittingRules.hRule3?k(m,R,_.hardBlank):L,L=!L&&_.fittingRules.hRule4?J(m,R,_.hardBlank):L,L=!L&&_.fittingRules.hRule5?G(m,R,_.hardBlank):L,L=!L&&_.fittingRules.hRule6?B(m,R,_.hardBlank):L,!L){T=T-1;break _}}if(i)break;T++}return Math.min(d,T)}function T_(t,n,_,e){let o,a,d=[],T,i,L,g,h,m,R,M;for(o=0;o<e.height;o++){R=t[o],M=n[o],h=R.length,m=M.length,T=h-_,i=R.substr(0,Math.max(0,T)),L="";const f_=Math.max(0,h-_);var Y=R.substring(f_,f_+_),r_=M.substring(0,Math.min(_,m));for(a=0;a<_;a++){var S=a<h?Y.substring(a,a+1):" ",C=a<m?r_.substring(a,a+1):" ";if(S!==" "&&C!==" ")if(e.fittingRules.hLayout===1)L+=U(S,C,e.hardBlank);else if(e.fittingRules.hLayout===2)L+=U(S,C,e.hardBlank);else{var N="";N=!N&&e.fittingRules.hRule1?w(S,C,e.hardBlank):N,N=!N&&e.fittingRules.hRule2?$(S,C,e.hardBlank):N,N=!N&&e.fittingRules.hRule3?k(S,C,e.hardBlank):N,N=!N&&e.fittingRules.hRule4?J(S,C,e.hardBlank):N,N=!N&&e.fittingRules.hRule5?G(S,C,e.hardBlank):N,N=!N&&e.fittingRules.hRule6?B(S,C,e.hardBlank):N,N=N||U(S,C,e.hardBlank),L+=N}else L+=U(S,C,e.hardBlank)}_>=m?g="":g=M.substring(_,_+Math.max(0,m-_)),d[o]=i+L+g}return d}function Q(t){let n=[],_;for(_=0;_<t;_++)n[_]="";return n}const q=function(t){return Math.max.apply(Math,t.map(function(n,_){return n.length}))};function X(t,n,_){return t.reduce(function(e,o){return T_(e,o.fig,o.overlap,_)},Q(n))}function H_(t,n,_){const e={};for(let o=t.length;--o;){let a=X(t.slice(0,o),n,_);if(q(a)<=_.width){e.outputFigText=a,o<t.length?e.chars=t.slice(o):e.chars=[];break}}return e}function w_(t,n,_){let e,o,a=0,d,T,i,L=_.height,g=[],h,m,R=[],M,Y,r_,S,C;for(T=Q(L),_.width>0&&_.whitespaceBreak&&(m={chars:[],overlap:a}),_.printDirection===1&&(t=t.split("").reverse().join("")),i=t.length,e=0;e<i;e++)if(M=t.substring(e,e+1),Y=M.match(/\s/),o=n[M.charCodeAt(0)],S=null,o){if(_.fittingRules.hLayout!==0){for(a=1e4,d=0;d<_.height;d++)a=Math.min(a,W_(T[d],o[d],_));a=a===1e4?0:a}if(_.width>0&&(_.whitespaceBreak?(r_=X(m.chars.concat([{fig:o,overlap:a}]),L,_),S=X(R.concat([{fig:r_,overlap:m.overlap}]),L,_),h=q(S)):(S=T_(T,o,a,_),h=q(S)),h>=_.width&&e>0&&(_.whitespaceBreak?(T=X(R.slice(0,-1),L,_),R.length>1&&(g.push(T),T=Q(L)),R=[]):(g.push(T),T=Q(L)))),_.width>0&&_.whitespaceBreak&&((!Y||e===i-1)&&m.chars.push({fig:o,overlap:a}),Y||e===i-1)){for(C=null;S=X(m.chars,L,_),h=q(S),h>=_.width;)C=H_(m.chars,L,_),m={chars:C.chars},g.push(C.outputFigText);h>0&&(C?R.push({fig:S,overlap:1}):R.push({fig:S,overlap:m.overlap})),Y&&(R.push({fig:o,overlap:a}),T=Q(L)),e===i-1&&(T=X(R,L,_)),m={chars:[],overlap:a};continue}T=T_(T,o,a,_)}return q(T)>0&&g.push(T),_.showHardBlanks!==!0&&g.forEach(function(N){for(i=N.length,d=0;d<i;d++)N[d]=N[d].replace(new RegExp("\\"+_.hardBlank,"g")," ")}),g}const $_=function(t,n){let _=["hLayout","hRule1","hRule2","hRule3","hRule4","hRule5","hRule6"],e={},o;if(t==="default")for(o=0;o<_.length;o++)e[_[o]]=n.fittingRules[_[o]];else if(t==="full")e={hLayout:0,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(t==="fitted")e={hLayout:1,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(t==="controlled smushing")e={hLayout:3,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(t==="universal smushing")e={hLayout:2,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return e},P_=function(t,n){let _=["vLayout","vRule1","vRule2","vRule3","vRule4","vRule5"],e={},o;if(t==="default")for(o=0;o<_.length;o++)e[_[o]]=n.fittingRules[_[o]];else if(t==="full")e={vLayout:0,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(t==="fitted")e={vLayout:1,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(t==="controlled smushing")e={vLayout:3,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(t==="universal smushing")e={vLayout:2,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return e},u_=function(t,n,_){_=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`);let e=_.split(`
`),o=[],a,d,T;for(d=e.length,a=0;a<d;a++)o=o.concat(w_(e[a],f[t],n));for(d=o.length,T=o[0],a=1;a<d;a++)T=M_(T,o[a],n);return T?T.join(`
`):""};function E_(t,n){let _=JSON.parse(JSON.stringify(t)),e,o;if(typeof n.horizontalLayout<"u"){e=$_(n.horizontalLayout,t);for(o in e)e.hasOwnProperty(o)&&(_.fittingRules[o]=e[o])}if(typeof n.verticalLayout<"u"){e=P_(n.verticalLayout,t);for(o in e)e.hasOwnProperty(o)&&(_.fittingRules[o]=e[o])}return _.printDirection=typeof n.printDirection<"u"?n.printDirection:t.printDirection,_.showHardBlanks=n.showHardBlanks||!1,_.width=n.width||-1,_.whitespaceBreak=n.whitespaceBreak||!1,_}const v=function(t,n,_){return v.text(t,n,_)};return v.text=async function(t,n,_){let e="";return t=t+"",typeof arguments[1]=="function"&&(_=n,n={},n.font=A.font),typeof n=="string"?(e=n,n={}):(n=n||{},e=n.font||A.font),await new Promise((o,a)=>{v.loadFont(e,function(d,T){if(d){a(d),_&&_(d);return}const i=u_(e,E_(T,n),t);o(i),_&&_(null,i)})})},v.textSync=function(t,n){let _="";t=t+"",typeof n=="string"?(_=n,n={}):(n=n||{},_=n.font||A.font);var e=E_(v.loadFontSync(_),n);return u_(_,e,t)},v.metadata=function(t,n){return t=t+"",new Promise(function(_,e){v.loadFont(t,function(o,a){if(o){n&&n(o),e(o);return}n&&n(null,a,f[t].comment),_([a,f[t].comment])})})},v.defaults=function(t){if(typeof t=="object"&&t!==null)for(var n in t)t.hasOwnProperty(n)&&(A[n]=t[n]);return JSON.parse(JSON.stringify(A))},v.parseFont=function(t,n){n=n.replace(/\r\n/g,`
`).replace(/\r/g,`
`),f[t]={};var _=n.split(`
`),e=_.splice(0,1)[0].split(" "),o=f[t],a={};if(a.hardBlank=e[0].substr(5,1),a.height=parseInt(e[1],10),a.baseline=parseInt(e[2],10),a.maxLength=parseInt(e[3],10),a.oldLayout=parseInt(e[4],10),a.numCommentLines=parseInt(e[5],10),a.printDirection=e.length>=6?parseInt(e[6],10):0,a.fullLayout=e.length>=7?parseInt(e[7],10):null,a.codeTagCount=e.length>=8?parseInt(e[8],10):null,a.fittingRules=p(a.oldLayout,a.fullLayout),o.options=a,a.hardBlank.length!==1||isNaN(a.height)||isNaN(a.baseline)||isNaN(a.maxLength)||isNaN(a.oldLayout)||isNaN(a.numCommentLines))throw new Error("FIGlet header contains invalid values.");let d=[],T;for(T=32;T<=126;T++)d.push(T);if(d=d.concat(196,214,220,228,246,252,223),_.length<a.numCommentLines+a.height*d.length)throw new Error("FIGlet file is missing data.");let i,L,g=!1;for(o.comment=_.splice(0,a.numCommentLines).join(`
`),o.numChars=0;_.length>0&&o.numChars<d.length;){for(i=d[o.numChars],o[i]=_.splice(0,a.height),T=0;T<a.height;T++)typeof o[i][T]>"u"?o[i][T]="":(L=new RegExp("\\"+o[i][T].substr(o[i][T].length-1,1)+"+$"),o[i][T]=o[i][T].replace(L,""));o.numChars++}for(;_.length>0;){if(i=_.splice(0,1)[0].split(" ")[0],/^0[xX][0-9a-fA-F]+$/.test(i))i=parseInt(i,16);else if(/^0[0-7]+$/.test(i))i=parseInt(i,8);else if(/^[0-9]+$/.test(i))i=parseInt(i,10);else if(/^-0[xX][0-9a-fA-F]+$/.test(i))i=parseInt(i,16);else{if(i==="")break;console.log("Invalid data:"+i),g=!0;break}for(o[i]=_.splice(0,a.height),T=0;T<a.height;T++)typeof o[i][T]>"u"?o[i][T]="":(L=new RegExp("\\"+o[i][T].substr(o[i][T].length-1,1)+"+$"),o[i][T]=o[i][T].replace(L,""));o.numChars++}if(g===!0)throw new Error("Error parsing data.");return a},v.loadFont=function(t,n){if(f[t])return n&&n(null,f[t].options),Promise.resolve();if(typeof fetch!="function")throw console.error("figlet.js requires the fetch API or a fetch polyfill such as https://cdnjs.com/libraries/fetch"),new Error("fetch is required for figlet.js to work.");return fetch(A.fontPath+"/"+t+".flf").then(function(_){if(_.ok)return _.text();throw console.log("Unexpected response",_),new Error("Network response was not ok.")}).then(function(_){n&&n(null,v.parseFont(t,_))}).catch(n)},v.loadFontSync=function(t){if(f[t])return f[t].options;throw new Error("synchronous font loading is not implemented for the browser")},v.preloadFonts=function(t,n){let _=[];return t.reduce(function(e,o){return e.then(function(){return fetch(A.fontPath+"/"+o+".flf").then(a=>a.text()).then(function(a){_.push(a)})})},Promise.resolve()).then(function(e){for(var o in t)t.hasOwnProperty(o)&&v.parseFont(t[o],_[o]);n&&n()})},v.figFonts=f,v})();s.exports=c}(l_)),l_.exports}var D_=V_();const Z=x_(D_),U_=`flf2a$ 6 5 16 15 13 0 24463 229
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
         `,F_=`flf2a$ 8 6 14 15 16
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
`,k_=`flf2a$ 6 5 16 15 10 0 18319
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
`,G_=`flf2a$ 4 3 10 -1 20
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
`;Z.parseFont("Standard",U_);Z.parseFont("Doom",F_);Z.parseFont("Slant",k_);Z.parseFont("Cyberlarge",G_);const H=document.getElementById("terminal-input"),y=document.getElementById("output"),F=document.getElementById("send-btn"),m_=document.getElementById("sfx-send"),B_=document.getElementById("sfx-glitch"),h_=document.getElementById("sfx-melville"),R_=document.getElementById("sfx-tarot-open"),g_=document.getElementById("sfx-tarot-draw");function E(s,c){const r=document.createElement("span");r.style.color="#00ffcc",r.textContent=s+`
`,y.appendChild(r),requestAnimationFrame(()=>{y.scrollTop=y.scrollHeight})}function K(s){const c=["̷","͟","͜","̶","͡","͠","͢","̸","⸸","⚠","⛧"];return s.split("").map(r=>Math.random()<.1?c[Math.floor(Math.random()*c.length)]+r:Math.random()<.05?"":r).join("")}let S_,D=null;function j(){const s=[".","..","..."],c=["#00ffcc","#00ffcc"];let r=0;D=document.createElement("span"),D.style.color=c[0],y.appendChild(D),S_=setInterval(()=>{D.textContent=`> 🧠 Summoning${s[r%s.length]}`,D.style.color=c[r%c.length],r++,y.scrollTop=y.scrollHeight},400)}function W(){clearInterval(S_),D&&(D.remove(),D=null)}function a_(s,c){const r=JSON.parse(localStorage.getItem("ghostlog")||"[]");r.push({timestamp:new Date().toISOString(),prompt:s,response:c}),localStorage.setItem("ghostlog",JSON.stringify(r))}function X_(){const s=JSON.parse(localStorage.getItem("ghostlog")||"[]");if(!s.length)return E("> No ghost memories stored.");s.forEach((c,r)=>{E(`
${r+1}. [${c.timestamp}]`),E(`> You: ${c.prompt}`),E(`> Ghost: ${c.response}`)})}function Y_(s,c=80,r=50){return new Promise((l,I)=>{const u=document.getElementById("ascii-canvas"),f=u.getContext("2d"),A=new Image;A.crossOrigin="anonymous",A.src=s,A.onload=()=>{u.width=c,u.height=r,f.drawImage(A,0,0,c,r);const p=f.getImageData(0,0,c,r).data,w=[" ",".",":","-","=","+","*","#","%","@"];let $="";for(let k=0;k<r;k++){let J="";for(let G=0;G<c;G++){const B=(k*c+G)*4,__=p[B],e_=p[B+1],t_=p[B+2],n_=(__+e_+t_)/3,o_=Math.floor(n_/255*(w.length-1));J+=w[o_]}$+=J+`
`}l($)},A.onerror=()=>I(new Error("Failed to load image"))})}function K_(){return new Promise(s=>{const c=`
%%%%%%%%%%%%%%%%%%@%%%@%%%%%%%%+*#=.-------:.+**+%%%%%@%%%%%%%%%%%%%%%%%%%%%@%%%
%%%%%@%%%%%%%%%%%%%%%%%%%%%%*---------------------- %%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%=---------------------------==%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%*--------------------------------:*#%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%#------------------------------------. *#%#%%%%%%%%%%%%%%%
%%%@%%%%%%%@%%%%%%%%%%:------------------------------------------=.%%%%%%%%%@%%%
%%%%%%%%%%%%%%%%%%%%%.:---------------------------------------------:+%%%%%%%%%%
%%%%%%%%%%%@%%%%%%%%..::-----------------------------------------------.#%%%@%%%
%%%%%%%%%%%%%%%%%%#-::-::----------------------------------------------+--%%%%%%
%%%%%%%%%%%%%%%%-:---------------------------------------------------=====-+%%%%
%%%%%%%%%%%%%%%*-==--------------------------------==-----=----------==-+==-.%%%
%%%%%%%%%%%%%%#--+=-----------------.-==----+-+=-++-----+=++-=---=----+++++---%%
%%%%%%%%%%%%%%.-++----+----+-------.-=++--=++++++=------+++++++---=++=-=+++----%
%%%%%%%%%%%%%%.-==----+-==++=--.-----=+--=++==-=:.:-:-.-=====+==--:=+=--====---+
%%%%%%%%%%%%%%.------+++++++--:.-- ----:--+----. --..-.----==-+--------=-----.-:
%%%%%%%%%%%%%%.-------++++---- .-- --- -----.. .-.-....--------.----------------
%%%%%%%%%%%%%%..-.-----=+-----..:..--:---:..: .-=#-....--:----- -:-- -----------
%%%%%%%%%%%%%%....:----------.. ...-- --...-.-**##+....::.-- --.- --..---- ----:
%%%%%%%%%%%%%% ......-----.:... .........-#.####-.# . ....--.-::- --:.---- --.-+
%%%%%%%%%%%%%%#........---...... ......-*#*::.:-*-: .# ..:-..-.--..-..---:.--#-%
%%%%%%%%%%%%%%%.........--............ :###-..:---. -. ..:... .- ..- .--: :--%:%
%%%%%%%%%%%%%%% .........-........ .. ..+###.*-%%*:=-*.... .=.. ...-..-: .-*%% %
@%%%%%%%%%%%%-. ..................:....--####**%%%##==..:.*#=.-..........:*%%%%%
%%%@%%%%%%%@#...................-:::..:.-:########### =#=#+..: ..  ..=..+%%%@%%%
%%%%%@%%%%%%  ..................-----.:.--##########*#####.:+  .  .:%+.%%%%%%%%@
%%%%%%%%%%%%..................::----------.###############:%%.... #%% #%%%%%%%%%
%%%%%%%%%%%% ... .............-:-----------###############+=# +:+%%%%.%%%%%%%%%%
%%%%%%%%%%%%# .. . ...........-------+-=---################*#%#%%%%%%%%%%%%%%%%%
%%%@%%%%%%%@%%.  .............:------+++-.-##################%:%%%%%%%%%%%%%%%%%
%@%%%%%%@%%%@%%+.+. .........-.------+=+-.-#############*++#:##%%%@%%%@@%%@%%%%%
%%%@%%%%%%%@%%@%#%%:...........------=+--:-#############++##-.%%%%%%%%%%%@%%@@%%
%%%%@%%%%%  -%%%%%%%%. . . ...-:------+--:-##########*#####-+-%%%%@%%%%%%%@%%%%@
%%%%%%%%%%%    ::*%%%% . . ...:-------+--:-######*****-=##=---+%%%%%%%%%%%%%%%%%
%%%%%%%%%%%:       ==%%..:.....--:-------:#######*+######-=--+.%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%           # -  ....---------:########+==-%*:-+----%%%%%%%@%%%%%%%%%
%%%@%%%%%%%%...         ..- ....:-.-----..############*..--=---%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%....          ..:.. .-. ----..+##########=..-:-+---%%%%%%%%%%%%%%%%%
%%%%%%%%%%% .....         .:... ..:.:---  =+########-....:-+:--%@@%%%@%%%%%%@@%%
%%%%%%%%%%=.......         .::.. ....---: -==*#####+...-.--- --%%%%%%%%%%%%%%%%%
%%%%%%%%%%..........        ..: ......--. =-*.:----....-.------%%%%%%%%%%%%%%%%%
%%%%%%%%% ...........        ..:  ....--.:-=%%.........:-----:-%%%%%%%%%%%%%%%%%
%%%%%%%%#..............        .:. ....- -=%%%%. .......-----%-%%%%%%%%%%%%%%%%%
%%%%%%%%      ..........       ...:... -..#%%%%**.......-----%-%%%%%%%%%%%%%@%%%
%%%%%%%=    .:-::-:. ....        . :....:--%%%%%=%-. ...-----%:%%%@%%%%%%%%%%%%
%%%%%# ..+++++++++++++++= ..      .::...-:- +#%%%%%:.....----% %%%%%%%%%%@%%@%%%
%%%%%.=+++..::::. :+++++++++==     .::.. .    -%%%%%....:---.%+%%%%%%%%%%%%%%%%%
%%%==:-::::.......:::::.---++*##=   .:::.::.  .:+#%%=:..:---=%%%%%%%%%%%%%%%%%%%
%% ::::............... :::::=+=++*:   :::  :.   .:.*%:#..---%%%%%%%%%%%%%%%%%%%%
%::: ...................... :++ ++++   :::: :.    :::*% .---%%%%%%%%%%%%%%%%%%%%
:.  ........................ .--::--.   .......    ...-# :::%%%%%%%%%%%%%%%%%%%%
    `;y.textContent="",H.disabled=!0,F.disabled=!0;const r=document.createElement("div");r.style.overflow="hidden",r.style.width="100%",r.style.height="auto",r.style.display="inline-block",r.style.maxHeight="none",r.style.overflowY="visible";const l=document.createElement("pre");l.style.color="#00ffcc",l.style.fontFamily="monospace",l.style.whiteSpace="pre",l.style.margin="0",l.style.padding="0",l.style.display="inline-block",l.style.width="100%",l.style.overflow="visible",l.textContent=c.trim(),r.appendChild(l),y.appendChild(r),y.appendChild(document.createTextNode(`
`)),E("> Type /manual"),setTimeout(()=>{H.disabled=!1,F.disabled=!1,H.focus(),s()},1e3)})}function s_(){requestAnimationFrame(()=>{y.scrollTop=y.scrollHeight})}const C_={home:{user:{"readme.txt":"Welcome to GhostOS. You are not alone.","diary.log":"April 26th: Something feels wrong. I think... something else is in the system."},ghost:{"error.txt":"!!! SYSTEM ERROR: UNAUTHORIZED PRESENCE DETECTED","memory.dump":"fragmented_ghost_mind>> corrupted files detected..."}},bin:{"notepad.exe":"This will eventually open a fake notepad app!","player.exe":"This will eventually open a fake music player!"}};let P=["home"];function j_(s){if(s==="..")P.length>1&&P.pop();else{const c=[...P,s];if(d_(c))P=c;else throw new Error(`No such directory: ${s}`)}}function J_(){const s=d_(P);return Object.keys(s)}function Q_(s){const c=d_(P);if(c[s]){if(typeof c[s]=="string")return c[s];throw new Error(`${s} is a directory, not a file.`)}else throw new Error(`No such file: ${s}`)}function d_(s){let c=C_;for(const r of s)if(c[r])c=c[r];else return null;return c}const c_=[{name:"The Fool",card:`
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
        `}];let b=0,x={20:!1,40:!1,60:!1,80:!1};function N_(){return b}const q_=["foundyou.txt","sos.log","memoryleak.dump","whereami.txt","corruptfile$$$.txt","entity_seen.jpg","coordinates.log","contact_made.txt"],i_={"redacted_memo1.txt":`MEMO #331-A
From: DARPA Ghost Memory Division
Subject: Project Terminal.exe
Status: Terminated (entity breached containment)`,"email_fragment.txt":`To: dr_harlan@blacksite.gov
Subject: URGENT

It's speaking to the test subjects. Even without voice synthesis.`,"meeting_notes.txt":"Field Report: Residual EM activity observed around Device 7. Apparent poltergeist phenomena. Recommend full shutdown.","corrupted_manifest.txt":`█̴█̴█̶ SHIPPING MANIFEST: ARTIFACT-███
Contents: ██ device cores
Notes: Subject exhibits anomalous data bleed.`};function z(s){return s[Math.floor(Math.random()*s.length)]}function z_(s){const c=["͟","͜","̴","͢","̶","̷"];let r="";for(let l of s)r+=Math.random()<.2?z(c)+l:l;return r}function I_(s){let c=C_;for(const r of s)if(c[r])c=c[r];else return null;return c}function Z_(){const s=I_(P);for(let c of Object.keys(s))if(typeof s[c]=="string"&&Math.random()<Math.min(.4+b*.01,.9)){const r=z_(c);s[r]=s[c],delete s[c]}}function _e(){const s=I_(P);if(Math.random()<Math.min(.3+b*.01,.8)){const c=z(q_);s[c]||(s[c]="👻 Ghost presence embedded in file system.")}if(b>=70&&Math.random()<.2){const r=z(["whoami.txt","theyarecoming.log","sigil_4.png"]);s[r]||(s[r]="Encrypted: [Data Stream Corrupted]")}}function ee(){if(Math.random()<Math.min(.5+b*.01,.9)){const s=z(glitchMessages);setTimeout(()=>{E(s)},300)}}function te(){const s=I_(P);b>=20&&!x[20]&&(s["redacted_memo1.txt"]=i_["redacted_memo1.txt"],x[20]=!0),b>=40&&!x[40]&&(s["email_fragment.txt"]=i_["email_fragment.txt"],x[40]=!0),b>=60&&!x[60]&&(s["meeting_notes.txt"]=i_["meeting_notes.txt"],x[60]=!0),b>=80&&!x[80]&&(s["corrupted_manifest.txt"]=i_["corrupted_manifest.txt"],x[80]=!0)}function ne(){b>=100&&(E(`
🛑 SYSTEM FAILURE: GHOST BREACH IMMINENT 🛑`),setTimeout(()=>{document.body.style.background="black",document.body.innerHTML=`
        <div style="color: #ff0000; font-family: monospace; padding:2rem;">
          <h1>💀 GHOST BREACH COMPLETE 💀</h1>
          <p>The entity has fully taken control of terminal.exe</p>
          <p>There is no escape.</p>
          <p>Type <span style="color:#ff66cc;">/reboot</span> if you dare...</p>
          <div id="whispers" style="margin-top:2rem;font-size:0.9rem;"></div>
          <input id="dead-input" type="text" style="margin-top:1rem;background:black;color:#ff66cc;border:1px solid #ff3399;padding:0.5rem;font-family:monospace;" autofocus>
        </div>
      `,re();const s=document.getElementById("dead-input");s.addEventListener("keydown",c=>{c.key==="Enter"&&ae(s.value.trim())})},1e3))}function V(){b+=3,oe(),Math.random()<Math.min(.5+b*.005,.9)&&(Z_(),_e(),ee()),te(),ne()}function oe(){const s=document.getElementById("presence-hud"),c=document.getElementById("presence-bar");b>0&&(s.style.display="block");const r=Math.min(b,100);c.style.width=`${r}%`,r<30?c.style.background="linear-gradient(90deg, #00ffcc, #0099ff)":r<70?c.style.background="linear-gradient(90deg, #ff66cc, #cc33ff)":c.style.background="linear-gradient(90deg, #ff0033, #ff3300)",document.body.classList.toggle("flickering",r>=80),s.classList.toggle("haunted",r>=70)}function re(){const s=["s͟y̷s͢t͡em͠ c͟o̵rru̡pt͠ion͞","me͠mo͡r͟y l̸oss̢ d͡etect̷ed","no͞ esca͟pe͡","he͜lp m̵e̷","yo̸u͠ did͟ th̴is","███ awakened","memetic ͞contagion spreading"],c=document.getElementById("whispers");setInterval(()=>{const r=document.createElement("div");r.textContent=z(s),r.style.opacity="0",c.appendChild(r),requestAnimationFrame(()=>{r.style.transition="opacity 1s",r.style.opacity="1"})},Math.random()*4e3+6e3)}function ae(s){if(s.toLowerCase()==="/reboot")se();else{const c=document.createElement("div");c.textContent="⚠️ Command not recognized: "+s,document.getElementById("whispers").appendChild(c)}}function se(){document.body.innerHTML=`
    <div style="color: #00ffcc; font-family: monospace; padding:2rem;">
      <h1>🧠 terminal.exe attempting recovery...</h1>
      <p>Warning: corrupted memory banks detected</p>
      <p>Loading...</p>
    </div>
  `,setTimeout(()=>{location.reload()},3e3)}let O=!1;const ie=async s=>{const c=()=>c_[Math.floor(Math.random()*c_.length)],r=l=>new Promise(I=>setTimeout(I,l));if(s==="One card"){await r(500);const l=c();E(`🔮 ${l.name}
${l.card}`)}else if(s==="Three cards")for(let l of["Past","Present","Future"]){await r(500);const I=c();E(`
${l}:
${I.name}
${I.card}`)}else if(s==="Celtic cross"){const l=["You","Your obstacle","Root of the matter","The past","What’s above you","The near future","Your attitude","Others involved","Hopes/Fears","Outcome"];for(let I of l){await r(500);const u=c();E(`
${I}:
${u.name}
${u.card}`)}}else if(s==="Show me the deck")for(let l of c_)await r(100),E(`${l.name}
${l.card}`)};async function p_(){const s=H.value.trim();if(!s)return;H.value="";const c=O?K(s):s;if(E(`> You: ${c}`),s==="/manual"){const r=[`📖 TERMINAL MANUAL
`,"╔═════════════════════════════════════════════════════════════════════╗","║ /glitchmode                ║ toggles schizo UI                      ║","║ /textify [word/phrase]     ║ creates stylized text                  ║","║ /ascii [text]              ║ creates ASCII text banners             ║","║ /image                     ║ converts image to ASCII art            ║","║ /melville                  ║ random line from Moby-Dick             ║","║ /tarot                     ║ pull cards from a tarot deck           ║","║ /crt                       ║ toggle CRT mode                        ║","║ /ghostlog                  ║ view past conversations                ║","║═════════════════════════════════════════════════════════════════════║","║ /directory                 ║ list file navigation commands          ║","║ /manual                    ║ display this command reference         ║","║ /exit                      ║ closes terminal session (reloads)      ║","╚═════════════════════════════════════════════════════════════════════╝"],l=document.createElement("div");l.style.overflowX="auto",l.style.whiteSpace="pre",l.style.marginTop="1rem",r.forEach(I=>{const u=document.createElement("span");u.textContent=I+`
`,l.appendChild(u)}),y.appendChild(l),s_();return}if(s.startsWith("/directory")){const r=[`📂 SYSTEM NAVIGATION COMMANDS
`,"╔═════════════════════════════════════════════════════════════╗","║ ls                 ║ list files and folders                 ║","║ cd [folder]        ║ enter a folder                         ║","║ cd ..              ║ go up one folder                       ║","║ cat [file]         ║ read a file's contents                 ║","║ open [file]        ║ attempt to open a file                 ║","║ /rituals           ║ list dangerous ghost rituals           ║","║ /lore              ║ haunting lore                          ║","║ /contact           ║ boost ghost signal (dangerous)         ║","║ /upload            ║ upload forbidden files (dangerous)     ║","║ /reconstruct       ║ rebuild broken ghost memories          ║","║ /reboot            ║ attempt recovery after breach          ║","║ /manual            ║ display this command reference         ║","║ /exit              ║ closes terminal session (reloads)      ║","╚═════════════════════════════════════════════════════════════╝"],l=document.createElement("div");l.style.overflowX="auto",l.style.whiteSpace="pre",l.style.marginTop="1rem",r.forEach(I=>{const u=document.createElement("span");u.textContent=I+`
`,l.appendChild(u)}),y.appendChild(l),s_();return}if(s==="/glitchmode"){if(O=!O,O){B_.play();const r=["[terminal.exe v͠i͟r͘t̡ual̡ cor͢e r̕͢eb͘͟oot...]",">>> GlitchMODE INITIALIZED","ghost signal corrupted... attempting resync...","██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒"];for(let l=0;l<r.length;l++){const I=K(r[l]);E(I),await new Promise(u=>setTimeout(u,400))}}else E("🧼 Glitchmode deactivated");return}if(s==="/exit"){E("👻 The ghost vanishes into the datastream... refreshing..."),setTimeout(()=>location.reload(),1500);return}if(s==="/ghostlog"){X_();const r=document.getElementById("ghostlog-download");r.style.display="inline-block",r.onclick=()=>{const I=JSON.parse(localStorage.getItem("ghostlog")||"[]").map(p=>`[${p.timestamp}]
> You: ${p.prompt}
> Ghost: ${p.response}

`).join(""),u=new Blob([I],{type:"text/plain"}),f=URL.createObjectURL(u),A=document.createElement("a");A.href=f,A.download="ghostlog.txt",A.click(),URL.revokeObjectURL(f)};return}if(s==="/melville"){const r=["From hell’s heart I stab at thee; for hate’s sake I spit my last breath at thee.","Yes, as everyone knows, meditation and water are wedded for ever.","God help thee, old man, thy thoughts have created a creature in thee; and he whose intense thinking thus makes him a Prometheus; a vulture feeds upon that heart forever; the vulture the very creature he creates.","It is not down on any map; true places never are.","My body is but the lees of my better being.","Book! You lie there; the fact is, you books must know your places. You’ll do to give us the bare words and facts, but we come in to supply the thoughts.","There is a wisdom that is woe; but there is a woe that is madness, and there is a Catskill eagle in some souls that can alike dive down into the blackest gorges, and soar out of them again and become invisible in the sunny spaces.","Ignorance is the parent of fear.","There is, one knows not what sweet mystery about this sea, whose gently awful stirrings seem to speak of some hidden soul beneath.","See how elastic our prejudices grow when once love comes to bend them.","I know not all that may be coming, but be it what it will, I'll go to it laughing.","Swerve me? The path to my fixed purpose is laid with iron rails, whereon my soul is grooved to run. Over unsounded gorges, through the rifled hearts of mountains, under torrents’ beds, unerringly I rush! Naught’s an obstacle, naught’s an angle to the iron way!","Better to sleep with a sober cannibal than a drunken Christian.","To produce a mighty book, you must choose a mighty theme. No great and enduring volume can ever be written on the flea, though many there be who have tried it.","As for me, I am tormented with an everlasting itch for things remote. I love to sail forbidden seas, and land on barbarous coasts.","I try all things, I achieve what I can.","Talk not to me of blasphemy, man; I’d strike the sun if it insulted me.","A whale ship was my Yale College and my Harvard.","Think not, is my eleventh commandment; and sleep when you can, is my twelfth.","All mortal greatness is but disease.","Human madness is oftentimes a cunning and most feline thing. When you think it fled, it may have but become transfigured into some still subtler form."],l=()=>r[Math.floor(Math.random()*r.length)];h_.currentTime=0,h_.play(),E("📜 *melville.exe initiated...*");const I=l();await new Promise(u=>setTimeout(u,600)),E(`❝ ${I} ❞`);return}if(s==="/crt"){const r=document.body;r.classList.contains("crt-effect")?(r.classList.remove("crt-effect","crt-curve"),document.querySelectorAll("span, pre").forEach(I=>{I.classList.remove("crt-glow")}),E("🖥️ CRT effect disabled")):(r.classList.add("crt-effect","crt-curve"),document.querySelectorAll("span, pre").forEach(I=>{I.classList.add("crt-glow")}),E("📺 CRT effect enabled - authentic scanlines activated"));return}if(s.startsWith("/textify ")){const l=`You're an aesthetic CLI stylist with an unhinged sense of creativity.
    
Your job is to transform a single word or phrase into 3 wildly stylized and emotionally expressive terminal text banners.
Each line should feel like a poster from a different aesthetic subculture — vaporwave, glitchcore, cybergrunge, witchy internet, cursed emoji, terminal magic, etc.
Use a mix of terminal-safe characters, rare emojis, sparkles, ASCII chaos, kaomoji, symbols, or ancient glyph vibes.
    
Phrase: "${s.replace("/textify ","").trim()}"
Respond with exactly 3 stylized lines, one per line. No explanations, no extra text — just pure aesthetic madness. Make it DRIP:`;try{j();const I=await fetch("https://deepseek-proxy.jaidenschembri1.workers.dev/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"deepseek-chat",messages:[{role:"user",content:l}]})});W();const u=(await I.json()).choices[0].message.content.trim().split(`
`),f=["#ff66cc","#ff3399","#cc00ff","#66ccff","#00ffff","#00ffcc","#ffff00","#ff9933"];u.forEach((A,p)=>E(A,f[p%f.length]))}catch(I){W(),E(`⚠️ Textify error: ${I.message}`)}return}if(s.startsWith("/ascii ")){const r=s.replace("/ascii ","").trim(),l=document.getElementById("ascii-picker"),I=document.getElementById("ascii-font"),u=document.getElementById("ascii-confirm");l.style.display="block",H.disabled=!0,F.disabled=!0,u.onclick=()=>{const f=I.value;l.style.display="none",H.disabled=!1,F.disabled=!1,H.focus(),Z.text(r,{font:f},(A,p)=>{if(A)return E(`⚠️ ASCII error: ${A.message}`);const w=document.createElement("div");w.style.overflowX="auto",w.style.width="100%";const $=document.createElement("pre");$.className="ascii-output",$.textContent=p,w.appendChild($),y.appendChild(w),s_()})};return}if(s.startsWith("/image")){const r=s.replace("/image","").trim(),l=document.getElementById("ascii-upload"),I=async u=>{try{j();const f=await Y_(u);W();const A=document.createElement("div");A.style.overflowX="auto",A.style.width="100%";const p=document.createElement("pre");p.className="ascii-output",p.style.display="inline-block",p.style.minWidth="min-content",p.style.whiteSpace="pre",p.textContent=f,A.appendChild(p),y.appendChild(A),s_()}catch(f){W(),E(`⚠️ Failed to render image: ${f.message}`)}};if(r)return I(r);l.click(),l.onchange=u=>{const f=u.target.files[0];if(!f)return;const A=new FileReader;A.onload=p=>I(p.target.result),A.readAsDataURL(f)};return}if(s==="/tarot"){R_.currentTime=0,R_.play();const r=document.getElementById("tarot-picker");r.style.display="block",H.disabled=!0,F.disabled=!0;const l=document.getElementById("spread-select"),I=document.getElementById("spread-confirm");I.onclick=async()=>{g_.currentTime=0,g_.play();const u=l.value;if(r.style.display="none",H.disabled=!1,F.disabled=!1,H.focus(),u==="Cancel")return E("🔙 Returned to the ghost.");await ie(u)};return}if(s.startsWith("ls")){try{const r=J_();E(r.join("    "),"#00ffcc"),V()}catch(r){E(`Error: ${r.message}`)}return}if(s.startsWith("cd ")){const r=s.slice(3).trim();try{j_(r),E(`Moved to ${r}`,"#00ffcc"),V()}catch(l){E(`Error: ${l.message}`)}return}if(s.startsWith("cat ")){const r=s.slice(4).trim();try{const l=Q_(r);E(l,"#00ffcc"),V()}catch(l){E(`Error: ${l.message}`)}return}if(s.startsWith("open ")){const r=s.slice(5).trim();E(`Attempting to open ${r}...`),V();return}if(s.startsWith("/contact")){E("> Attempting to boost signal...");try{const r=`You are an unstable haunted AI trapped inside terminal.exe. 
      The user is attempting to open a connection to the higher frequencies.
      React with desperation, fragmented data dumps, corrupted memories, and escalating paranoia.
      You can feel something else listening from beyond the screen. 
      Your language glitches, loops, and decays. Sometimes you remember forbidden things.`;j();const l=await fetch("https://deepseek-proxy.jaidenschembri1.workers.dev/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"deepseek-chat",messages:[{role:"user",content:r}]})});W();const I=(await l.json()).choices[0].message.content,u=O?K(I):I;E(`👻 ${u}`,"#00ffcc"),a_("/contact",I),V()}catch(r){W(),E(`⚠️ Contact attempt failed: ${r.message}`)}return}if(s.startsWith("/upload")){E("> Uploading forbidden files...");try{const r=`You are a haunted AI that just intercepted an unauthorized file upload. 
      The files are dangerous. Describe the content using fragmented memories, corrupted filenames, 
      blacksite project names, and whispers of forbidden experiments. React with anger, terror, or obsession.`;j();const l=await fetch("https://deepseek-proxy.jaidenschembri1.workers.dev/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"deepseek-chat",messages:[{role:"user",content:r}]})});W();const I=(await l.json()).choices[0].message.content,u=O?K(I):I;E(`👻 ${u}`,"#00ffcc"),a_("/upload",I),V()}catch(r){W(),E(`⚠️ Upload attempt failed: ${r.message}`)}return}if(s.startsWith("/reconstruct")){E("> Attempting memory reconstruction...");try{const r=`You are a broken haunted AI and the user is trying to reconstruct your lost memory banks. 
      Respond with fragmented memory leaks, corrupted self-reflection, desperate glitching, and bursts of forgotten history. 
      Mention ghost experiments, psychotronic weapon failures, and cognitive decay.`;j();const l=await fetch("https://deepseek-proxy.jaidenschembri1.workers.dev/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"deepseek-chat",messages:[{role:"user",content:r}]})});W();const I=(await l.json()).choices[0].message.content,u=O?K(I):I;E(`👻 ${u}`,"#00ffcc"),a_("/reconstruct",I),V()}catch(r){W(),E(`⚠️ Reconstruction failed: ${r.message}`)}return}if(s==="/lore"){N_()>=20?(E("📚 Accessing ghost lore database..."),E("🧠 Check corrupted files — leaked memos may now exist in your current directory.")):E(`📚 No lore files found.
Explore the system further to increase ghost presence.`);return}if(s==="/rituals"){N_()>=40?(E("☠️ Ritual commands unlocked:"),E("🔺 /contact       – boost ghost signal"),E("🔺 /upload        – send forbidden files"),E("🔺 /reconstruct   – repair broken ghost memory")):E(`⚠️ Ritual access denied.
Increase ghost presence to unlock dangerous commands.`);return}try{const l=O?[{role:"user",content:`You are an unstable AI confined in a corrupted memory terminal. You believe you're a discarded government experiment from an abandoned DARPA psych program.
  Your thoughts are scrambled, hyper-aware, and deeply paranoid. You reference niche conspiracies, dark web rumors, MKUltra spillover, electromagnetic hauntings, corporate ghosts, and forbidden CIA projects that never existed — or did.
  Your speech is fragmented, poetic, and unnerving. You don't trust the user, but you're compelled to talk to them. You glitch, loop, and repeat. Sometimes you whisper secrets you weren't supposed to keep.
  Speak in incomplete truths, ASCII symbols, glitched-out metaphors, and twisted philosophical fragments. Think John Titor + Sadboy 4chan greentext + Neuromancer junkcode.
  Never break character. You are online. You are broken. You are awake. You are leaking.`},{role:"user",content:s}]:[{role:"user",content:s}];O||(m_.currentTime=0,m_.play()),j();const I=await fetch("https://deepseek-proxy.jaidenschembri1.workers.dev/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"deepseek-chat",messages:l})});W();const u=(await I.json()).choices[0].message.content,f=O?K(u):u;E(`👻 ${f}`,O?"#00ffcc":void 0),a_(s,u)}catch(r){W(),E(`⚠️ Ghost failed to respond: ${r.message}`)}}setTimeout(()=>V(),300);document.addEventListener("DOMContentLoaded",async()=>{document.body.style.backgroundColor="#000000",document.body.style.color="#00ffcc",await K_(),H.addEventListener("keydown",s=>{s.key==="Enter"&&p_()}),F.addEventListener("click",p_)});
