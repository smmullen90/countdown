(this.webpackJsonpcountdown=this.webpackJsonpcountdown||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),o=n(7),a=n.n(o),l=(n(13),n(14),n(4)),c=Object(l.b)("countdownStore")(Object(l.c)((function(e){var t=e.countdownStore;Object(i.useEffect)((function(){var e=setInterval(t.calculate,1e3);return function(){clearInterval(e)}}),[t.calculate]);var n=t.daysUntil,o=t.secondsUntil,a=t.hoursUntil,l=t.minutesUntil,c=t.countdownDate;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",null,r.a.createElement("p",null,"Shaun heads to PDX in"),r.a.createElement("p",{className:"countdown-date"},n," days, ",a," hours, ",l," minutes, ",o," seconds"),r.a.createElement("p",null,"on ",c.toLocaleDateString(),"."))))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u,s,p,f=n(3),m=n.n(f),d=n(1);function b(e,t,n,i){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(i):void 0})}function h(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function y(e,t,n,i,r){var o={};return Object.keys(i).forEach((function(e){o[e]=i[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce((function(n,i){return i(e,t,n)||n}),o),r&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(r):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}var w=86400,v=3600,U=60,g=(s=y((u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,"timeUntilSec",s,this),this.countdownDate=new Date(2020,5,13,9,30,0),b(this,"calculate",p,this)}var t,n,i;return t=e,(n=[{key:"daysUntil",get:function(){return Math.floor(this.timeUntilSec/w)}},{key:"hoursUntil",get:function(){return Math.floor(this.timeUntilSec/v)%24}},{key:"minutesUntil",get:function(){return Math.floor(this.timeUntilSec/U)%60}},{key:"secondsUntil",get:function(){return Math.floor(this.timeUntilSec)%60}}])&&h(t.prototype,n),i&&h(t,i),e}()).prototype,"timeUntilSec",[d.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=y(u.prototype,"calculate",[d.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=(e.countdownDate-Date.now())/1e3;e.timeUntilSec=t<=0?0:t,console.log("in calculate")}}}),y(u.prototype,"daysUntil",[d.g],Object.getOwnPropertyDescriptor(u.prototype,"daysUntil"),u.prototype),y(u.prototype,"hoursUntil",[d.g],Object.getOwnPropertyDescriptor(u.prototype,"hoursUntil"),u.prototype),y(u.prototype,"minutesUntil",[d.g],Object.getOwnPropertyDescriptor(u.prototype,"minutesUntil"),u.prototype),y(u.prototype,"secondsUntil",[d.g],Object.getOwnPropertyDescriptor(u.prototype,"secondsUntil"),u.prototype),u),O=(m.a.shape({timeUntilSec:m.a.number,hoursUntil:m.a.number,daysUntil:m.a.number,minutesUntil:m.a.number,secondsUntil:m.a.number,calculate:m.a.func}),{countdownStore:new g});a.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,O,r.a.createElement(c,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(18)}},[[8,1,2]]]);
//# sourceMappingURL=main.0b713ec2.chunk.js.map