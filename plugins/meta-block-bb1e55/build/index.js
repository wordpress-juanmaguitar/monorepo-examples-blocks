!function(){"use strict";var e,t={834:function(){var e=window.wp.blocks,t=window.React,n=window.wp.components,o=window.wp.data,r=window.wp.coreData,l=window.wp.blockEditor,c=JSON.parse('{"u2":"block-development-examples/meta-block-bb1e55"}');(0,e.registerBlockType)(c.u2,{edit:function(){const e=(0,l.useBlockProps)(),c=(0,o.useSelect)((e=>e("core/editor").getCurrentPostType()),[]),[i,a]=(0,r.useEntityProp)("postType",c,"meta"),u=i.myguten_meta_block_field;return(0,t.createElement)("div",{...e},(0,t.createElement)(n.TextControl,{label:"Meta Block Field",value:u,onChange:e=>{a({...i,myguten_meta_block_field:e})}}))}})}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,o),l.exports}o.m=t,e=[],o.O=function(t,n,r,l){if(!n){var c=1/0;for(p=0;p<e.length;p++){n=e[p][0],r=e[p][1],l=e[p][2];for(var i=!0,a=0;a<n.length;a++)(!1&l||c>=l)&&Object.keys(o.O).every((function(e){return o.O[e](n[a])}))?n.splice(a--,1):(i=!1,l<c&&(c=l));if(i){e.splice(p--,1);var u=r();void 0!==u&&(t=u)}}return t}l=l||0;for(var p=e.length;p>0&&e[p-1][2]>l;p--)e[p]=e[p-1];e[p]=[n,r,l]},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,l,c=n[0],i=n[1],a=n[2],u=0;if(c.some((function(t){return 0!==e[t]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(a)var p=a(o)}for(t&&t(n);u<c.length;u++)l=c[u],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(p)},n=self.webpackChunk_block_development_examples_meta_block_bb1e55=self.webpackChunk_block_development_examples_meta_block_bb1e55||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var r=o.O(void 0,[431],(function(){return o(834)}));r=o.O(r)}();