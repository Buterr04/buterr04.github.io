"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[4077],{4077:(e,t,n)=>{n.d(t,{findYouTubePoster:()=>c,resolveYouTubeVideoId:()=>s});const o=/(?:youtu\.be|youtube|youtube\.com|youtube-nocookie\.com)\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|)((?:\w|-){11})/,u=new Map,a=new Map;function s(e){return e.match(o)?.[1]}async function c(e,t){if(u.has(e))return u.get(e);if(a.has(e))return a.get(e);const n=new Promise((async n=>{const o=["maxresdefault","sddefault","hqdefault"];for(const a of o)for(const o of[!0,!1]){const s=r(e,a,o);if((await fetch(s,{mode:"no-cors",signal:t.signal})).status<400)return u.set(e,s),void n(s)}})).catch((()=>"")).finally((()=>a.delete(e)));return a.set(e,n),n}function r(e,t,n){return`https://i.ytimg.com/${n?"vi_webp":"vi"}/${e}/${t}.${n?"webp":"jpg"}`}}}]);