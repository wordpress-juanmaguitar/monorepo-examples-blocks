!function(){"use strict";var e,t={476:function(){var e=window.wp.blocks,t=window.wp.components,n=window.wp.blockEditor;const r="wp-block-block-development-examples-counter-js-99def1";(0,e.registerBlockType)("block-development-examples/counter-js-99def1",{edit:({attributes:e,setAttributes:r})=>React.createElement(React.Fragment,null,React.createElement("div",(0,n.useBlockProps)(),React.createElement("p",null,"Javascript Counter"),React.createElement("span",null,"Initial value"),React.createElement(t.__experimentalNumberControl,{placeholder:"Enter the initial value",value:e.initial,onChange:e=>r({initial:e})}),React.createElement("span",null,"Incremental value"),React.createElement(t.__experimentalNumberControl,{placeholder:"Enter the incremental value",value:e.increment,onChange:e=>r({increment:e})}))),save:({attributes:e})=>React.createElement("div",n.useBlockProps.save(),React.createElement("p",null,"Javascript Counter"),React.createElement("details",null,React.createElement("summary",null,"Attributes"),React.createElement("pre",null,React.createElement("small",null,JSON.stringify(e,null,2)))),React.createElement("br",null),React.createElement("button",{className:r+"__decrement"},"-"),React.createElement("input",{width:"5",step:e.increment,type:"number",className:r+"__value",value:e.initial}),React.createElement("button",{className:r+"__increment"},"+"))})}},n={};function r(e){var l=n[e];if(void 0!==l)return l.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=function(t,n,l,a){if(!n){var c=1/0;for(s=0;s<e.length;s++){n=e[s][0],l=e[s][1],a=e[s][2];for(var o=!0,i=0;i<n.length;i++)(!1&a||c>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[i])}))?n.splice(i--,1):(o=!1,a<c&&(c=a));if(o){e.splice(s--,1);var u=l();void 0!==u&&(t=u)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[n,l,a]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={181:0,802:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,a,c=n[0],o=n[1],i=n[2],u=0;if(c.some((function(t){return 0!==e[t]}))){for(l in o)r.o(o,l)&&(r.m[l]=o[l]);if(i)var s=i(r)}for(t&&t(n);u<c.length;u++)a=c[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(s)},n=self.webpackChunk_block_development_examples_interactive_blocks_demos_99def1=self.webpackChunk_block_development_examples_interactive_blocks_demos_99def1||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var l=r.O(void 0,[802],(function(){return r(476)}));l=r.O(l)}();