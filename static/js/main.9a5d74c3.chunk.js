(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,r,t){e.exports=t(39)},32:function(e,r,t){},33:function(e,r,t){},39:function(e,r,t){"use strict";t.r(r);var n=t(0),a=t.n(n),c=t(17),i=t.n(c),o=(t(11),t(32),t(33),t(2));function s(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Choose the preflop situation you want to see:"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(o.b,{to:"/position?situation=open"},"Open position")),a.a.createElement("li",null,a.a.createElement(o.b,{to:"/position?situation=facing-raise"},"Facing a raise")),a.a.createElement("li",null,a.a.createElement(o.b,{to:"/position?situation=facing-3bet"},"Facing a 3bet after my raise")),a.a.createElement("li",null,a.a.createElement(o.b,{to:"/position?situation=facing-4bet"},"Facing a 4bet after my 3bet")),a.a.createElement("li",null,a.a.createElement(o.b,{to:"/position?situation=squeeze"},"Squeeze from the blinds"))))}var P=t(7),l=t(9);function u(e,r,t){return e?"outline-warning":r?"outline-danger":"outline-info"}function p(e,r,t,n){return"open"===e&&6===r||"facing-raise"===e&&!t&&1===r||"facing-raise"===e&&t&&r>=t||"facing-3bet"===e&&!t&&6===r||"facing-3bet"===e&&t&&r<=t||"facing-4bet"===e&&!t&&1===r||"facing-4bet"===e&&t&&r>=t||"squeeze"===e&&t&&n&&r<=n||"squeeze"===e&&t&&n&&r>=t||"squeeze"===e&&!t&&r<5||"squeeze"===e&&5===parseInt(t)&&!n&&r>3||"squeeze"===e&&6===parseInt(t)&&!n&&r>4}function m(e,r,t){return"open"===e?(t.set("hero",r),{pathname:"/position/situation/ready",search:t.toString()}):"squeeze"===e?(t.get("hero")&&t.get("villain")?(t.set("caller",r),n="/position/situation/ready",a=t.toString()):t.get("hero")&&!t.get("villain")?(t.set("villain",r),n="/position/situation/",a=t.toString()):(t.set("hero",r),n="/position/situation",a=t.toString()),{pathname:n,search:a}):(t.get("hero")?(t.set("villain",r),c="/position/situation/ready",i=t.toString()):(t.set("hero",r),c="/position/situation",i=t.toString()),{pathname:c,search:i});var n,a,c,i}function h(e){var r=e.position,t=(e.disabled,e.match,e.onClick,new URLSearchParams(Object(P.f)().search)),n=t.get("situation"),c=t.get("hero")==r,i=t.get("hero"),s=t.get("villain")==r,h=t.get("villain");return a.a.createElement(o.b,{to:m(n,r,t)},a.a.createElement(l.a,{variant:u(c,s),disabled:p(n,r,i,h)},r))}var f={open:"Open position","facing-raise":"Facing a raise:","facing-3bet":"Facing a 3bet after my raise:","facing-4bet":"Facing a 4bet after my 3bet:",squeeze:"Squeeze from the blinds:"},g={open:"","facing-raise":["Who raises?"],"facing-3bet":["Who 3bets?"],"facing-4bet":["Who raises and 4bets:"],squeeze:["Who Raises?","Who Calls?"]};function b(e){var r=new URLSearchParams(Object(P.f)().search);return a.a.createElement("div",null,a.a.createElement("h2",null,f[r.get("situation")]),a.a.createElement("h5",null,function(e){var r=e.get("hero"),t=e.get("villain"),n=e.get("situation");return"squeeze"===n?r?r&&!t?"Who Raises?":"Who Calls?":"What's My Position?":r?g[n]:"What's My Position?"}(r)),a.a.createElement("p",null,[1,2,3,4,5,6].map(function(e,r){return a.a.createElement(h,{key:r,position:e})})),a.a.createElement(P.a,{path:"/position/situation/ready"},a.a.createElement(o.b,{to:{pathname:"/analyze",search:r.toString()}},a.a.createElement(l.a,{variant:"success"},"Analyze Position"))))}var E=t(21),d=t(22),y=t(25),v=t(23),w=t(26),A=t(24),J={1:[{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:4},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:24},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0}],2:[{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:90},{action:"",raisePercent:10},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:7},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:14},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:11},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:91},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:21},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0}],3:[{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:27},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:4},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:17},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0}],4:[{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:96},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:30},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:95},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:94},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:4},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0}],5:[{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"c",raisePercent:6},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"c",raisePercent:14},{action:"c",raisePercent:64},{action:"c",raisePercent:78},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"c",raisePercent:83},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"c",raisePercent:4},{action:"c",raisePercent:14},{action:"c",raisePercent:14},{action:"c",raisePercent:8},{action:"c",raisePercent:6},{action:"c",raisePercent:9},{action:"r",raisePercent:0},{action:"c",raisePercent:75},{action:"c",raisePercent:9},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"c",raisePercent:37},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"c",raisePercent:4},{action:"c",raisePercent:10},{action:"c",raisePercent:8},{action:"c",raisePercent:14},{action:"r",raisePercent:0},{action:"c",raisePercent:9},{action:"c",raisePercent:49},{action:"c",raisePercent:15},{action:"c",raisePercent:35},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"c",raisePercent:0},{action:"c",raisePercent:65},{action:"c",raisePercent:5},{action:"c",raisePercent:13},{action:"c",raisePercent:13},{action:"c",raisePercent:5},{action:"c",raisePercent:5},{action:"c",raisePercent:12},{action:"c",raisePercent:40},{action:"c",raisePercent:27},{action:"c",raisePercent:17},{action:"r",raisePercent:0},{action:"c",raisePercent:84},{action:"c",raisePercent:23},{action:"c",raisePercent:22},{action:"c",raisePercent:32},{action:"c",raisePercent:14},{action:"c",raisePercent:15},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"c",raisePercent:68},{action:"c",raisePercent:89},{action:"c",raisePercent:44},{action:"c",raisePercent:57},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"c",raisePercent:83},{action:"c",raisePercent:83},{action:"c",raisePercent:19},{action:"c",raisePercent:19},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"c",raisePercent:9},{action:"c",raisePercent:49},{action:"c",raisePercent:34},{action:"c",raisePercent:48},{action:"c",raisePercent:28},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"c",raisePercent:28},{action:"c",raisePercent:36},{action:"c",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"c",raisePercent:6},{action:"c",raisePercent:15},{action:"c",raisePercent:15},{action:"c",raisePercent:0},{action:"c",raisePercent:47},{action:"r",raisePercent:0},{action:"c",raisePercent:89},{action:"c",raisePercent:45},{action:"c",raisePercent:41},{action:"c",raisePercent:15},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"c",raisePercent:7},{action:"c",raisePercent:0},{action:"",raisePercent:7},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"c",raisePercent:55},{action:"r",raisePercent:0},{action:"c",raisePercent:93},{action:"c",raisePercent:15},{action:"c",raisePercent:0},{action:"",raisePercent:0},{action:"c",raisePercent:15},{action:"c",raisePercent:54},{action:"",raisePercent:14},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"c",raisePercent:18},{action:"r",raisePercent:0},{action:"r",raisePercent:0},{action:"c",raisePercent:71},{action:"",raisePercent:0},{action:"c",raisePercent:32},{action:"c",raisePercent:42},{action:"",raisePercent:5},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"c",raisePercent:38},{action:"c",raisePercent:14},{action:"",raisePercent:0},{action:"c",raisePercent:6},{action:"",raisePercent:9},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"r",raisePercent:0},{action:"",raisePercent:11},{action:"c",raisePercent:11},{action:"",raisePercent:9},{action:"",raisePercent:6},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"",raisePercent:0},{action:"c",raisePercent:92}]},K={0:"AA",1:"AKs",2:"AQs",3:"AJs",4:"ATs",5:"A9s",6:"A8s",7:"A7s",8:"A6s",9:"A5s",10:"A4s",11:"A3s",12:"A2s",13:"AKo",14:"KK",15:"KQs",16:"KJs",17:"KTs",18:"K9s",19:"K8s",20:"K7s",21:"K6s",22:"K5s",23:"K4s",24:"K3s",25:"K2s",26:"AQo",27:"KQo",28:"QQ",29:"QJs",30:"QTs",31:"Q9s",32:"Q8s",33:"Q7s",34:"Q6s",35:"Q5s",36:"Q4s",37:"Q3s",38:"Q2s",39:"AJo",40:"KJo",41:"QJo",42:"JJ",43:"JTs",44:"J9s",45:"J8s",46:"J7s",47:"J6s",48:"J5s",49:"J4s",50:"J3s",51:"J2s",52:"ATo",53:"KTo",54:"QTo",55:"JTo",56:"TT",57:"T9s",58:"T8s",59:"T7s",60:"T6s",61:"T5s",62:"T4s",63:"T3s",64:"T2s",65:"A9o",66:"K9o",67:"Q9o",68:"J9o",69:"T9o",70:"99",71:"98s",72:"97s",73:"96s",74:"95s",75:"94s",76:"93s",77:"92s",78:"A8o",79:"K8o",80:"Q8o",81:"J8o",82:"T8o",83:"98o",84:"88",85:"87s",86:"86s",87:"85s",88:"84s",89:"83s",90:"82s",91:"A7o",92:"K7o",93:"Q7o",94:"J7o",95:"T7o",96:"97o",97:"87o",98:"77",99:"76s",100:"75s",101:"74s",102:"73s",103:"72s",104:"A6o",105:"K6o",106:"Q6o",107:"J6o",108:"T6o",109:"96o",110:"86o",111:"76o",112:"66",113:"65s",114:"64s",115:"63s",116:"62s",117:"A5o",118:"K5o",119:"Q5o",120:"J5o",121:"T5o",122:"95o",123:"85o",124:"75o",125:"65o",126:"55",127:"54s",128:"53s",129:"52s",130:"A4o",131:"K4o",132:"Q4o",133:"J4o",134:"T4o",135:"94o",136:"84o",137:"74o",138:"64o",139:"54o",140:"44",141:"43s",142:"42s",143:"A3o",144:"K3o",145:"Q3o",146:"J3o",147:"T3o",148:"93o",149:"83o",150:"73o",151:"63o",152:"53o",153:"43o",154:"33",155:"32s",156:"A2o",157:"K2o",158:"Q2o",159:"J2o",160:"T2o",161:"92o",162:"82o",163:"72o",164:"62o",165:"52o",166:"42o",167:"32o",168:"22"};function Q(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function T(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Q(t,!0).forEach(function(r){Object(A.a)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q(t).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var O={root:{flexDirection:"column",display:"flex",width:"500px"},row:{display:"flex"},cell:{width:"40px",height:"40px",textAlign:"center",borderStyle:"solid",borderWidth:"1px",lineHeight:"40px"}};function j(e){var r=e.action,t=e.index,n=(e.raisePercent,"r"===r?"green":"c"===r?"yellow":"white");return a.a.createElement("div",{style:T({},O.cell,{backgroundColor:n})},K[t])}function z(e){var r,t=e.index,n=[];for(r=0;r<13;r++)n.push(a.a.createElement(j,{key:13*t+r,index:13*t+r,action:J[1][13*t+r].action}));return a.a.createElement("div",{style:O.row},n)}function x(){var e,r=new Array;for(e=0;e<13;e++)r.push(a.a.createElement(z,{key:e,index:e}));return a.a.createElement(a.a.Fragment,null,r)}function S(){return a.a.createElement("div",{styles:O.root},a.a.createElement(x,null))}var q=function(e){function r(){return Object(E.a)(this,r),Object(y.a)(this,Object(v.a)(r).apply(this,arguments))}return Object(w.a)(r,e),Object(d.a)(r,[{key:"render",value:function(){return a.a.createElement(S,null)}}]),r}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(function(){return a.a.createElement(o.a,null,a.a.createElement("div",null,a.a.createElement(P.c,null,a.a.createElement(P.a,{path:"/analyze"},a.a.createElement(q,null)),a.a.createElement(P.a,{path:"/position"},a.a.createElement(b,null)),a.a.createElement(P.a,{path:"/"},a.a.createElement(s,null)))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.9a5d74c3.chunk.js.map