import{y as w,X as fe,r as Mt,Y as Mi,w as x,x as c,J as f,z as n,B as S,Z as ve,$ as bi,a0 as Yt,a1 as Be,p as D,a2 as Fi,a3 as Ui,P as wt,a4 as wi,M as H,a5 as R,a6 as Ft,I as E,a7 as Se,a8 as $e,O,W as U,V as Ce,a9 as je,aa as Ee,K as T,ab as Ae,E as Ut,ac as Bi,ad as ji,ae as yt,Q as He,af as xi,q as Me,ag as Hi,ah as Ni,ai as qi,aj as Gi,ak as Vi,al as Yi,am as Rt}from"./ui.NkqJAWMk.js";import{n as it,h as Te,a as Wi,b as Gt,c as ti,i as Si,d as $i}from"./colors.CmH1RCDr.js";import{p as Ki,a as Ci}from"./index.uj8lAg3q.js";import{K as _e,c as Zi,q as Ei,a as Qi,L as Xi}from"./player.ByPIXlX8.js";const ei=2,Ji=100,ts=1,es=1e3,is=2,bt=Symbol("selectedIndex");function et(t){return t?.kind==="items"}function F(t){return t?.kind==="header"}class ss extends w{constructor(){super(),this.data=[],this.headers=[],this.viewportSize={width:0,height:0},this.itemElements=[],this.headerElements=[],this.elementToItem=new Map,this.rebuildingLayout=!1,this.accumulatedScrollUp=0,this.styleElement=null,this.itemsPerRow=0,this.scrollState={delta:0,dir:0,top:0},this.layoutState={totalContentHeight:0,columnsCount:0,rowSlotCount:0,headerSlotCount:0,logicalRows:[],itemsRows:[],headersRows:[],itemSize:{width:0,height:0}},this.itemSlots=[],this.headerSlots=[],this.isAtBottom=!1,this.handleScrollThrottled=()=>{this.onScroll(this.scrollTop)}}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{for(const i of e){const{width:o,height:s}=i.contentRect;this.lastObservedSize?this.resizeDebouncer=fe(this.resizeDebouncer,Mt(Ji),()=>{this.onResize({width:o,height:s})}):this.onResize({width:o,height:s}),this.lastObservedSize={width:o,height:s}}}),this.resizeObserver.observe(this),this.addEventListener("scroll",()=>{this.scrollDebouncer=fe(this.scrollDebouncer,Mi,this.handleScrollThrottled)},{passive:!0})}disconnectedCallback(){super.disconnectedCallback()}reset(){this.data=[],this.headers=[],this.scrollState={delta:0,dir:0,top:0},this.scrollTop=0,this.layoutState={totalContentHeight:0,columnsCount:0,rowSlotCount:0,headerSlotCount:0,logicalRows:[],itemsRows:[],headersRows:[],itemSize:{width:0,height:0}};for(const e of this.itemElements)e.remove();for(const e of this.headerElements)e.remove();this.itemElements=[],this.headerElements=[],this.elementToItem=new Map,this.itemSlots=[],this.headerSlots=[],this.rebuildingLayout=!1,this.accumulatedScrollUp=0,this.isAtBottom=!1,this.styleElement&&(this.styleElement.remove(),this.styleElement=null)}rebuild(){if(!(this.viewportSize.width===0||this.viewportSize.height===0)){this.rebuildingLayout=!0;try{let e=0,i=this.scrollState.top;if(i>0){const{anchorItem:o,anchorHeader:s,offsetFromTop:r}=this.findScrollAnchor(i);this.initLayout(),e=this.findRowIndex({anchorItem:o,anchorHeader:s}),i=(this.layoutState.logicalRows[e]?.top||0)+r,i=Math.max(0,i),e=this.findRowIndexByTop(i).index,e===-1&&(e=0),this.scrollTop=i,this.scrollState.top=i,this.scrollState.delta=0,this.scrollState.dir=0}else this.scrollState.top=0,this.initLayout();this.freeElementsOutsideScene(),this.initItems(e),this.initHeaders(e),this.initStyle()}finally{this.rebuildingLayout=!1}}}initLayout(){const e=this.viewportSize,i=this.itemSize,o=this.gap,{marginTop:s,marginBottom:r}=this,a=this.data,l=this.headers,{itemsPerRow:h,rowSlotCount:b,headerSlotCount:p}=this.computeLayoutMetrics(e);this.layoutState.columnsCount=this.itemsPerRow=h,this.layoutState.rowSlotCount=b,this.layoutState.headerSlotCount=p,this.layoutState.itemSize=i;const u=this.layoutState.logicalRows=[];if(l.length===0)for(let m=0;m<a.length;m+=h){const d=Math.floor(m/h),g=d===0,y=d===Math.floor((a.length-1)/h),P=a.slice(m,m+h),v=u[d-1]?.bottom??0;let $=g?s:v+o,k=$+i.height;y&&(k+=r),u.push({kind:"items",items:P,rowIndex:d,top:$,bottom:k,startIndex:m})}else{const m=new Map(l.map(y=>[y.index,y]));let d=0,g=0;for(let y=0;y<a.length;y+=1){const P=y===0,v=y===a.length-1,$=m.get(y);if($){if(g>0){const Z=u[d-1]?.bottom||0,qt=d===0?s:Z+o;let ae=qt+i.height;u.push({kind:"items",items:a.slice(y-g,y),rowIndex:d,top:qt,bottom:ae,startIndex:y-g}),g=0,d+=1}const k=u[d-1]?.bottom||0,M=(d===0?s:k)+(P?0:this.headerSpace($)),K=M+this.headerHeight($);u.push({kind:"header",header:$,rowIndex:d,top:M,bottom:K}),g=0,d+=1}if(g+=1,g>=h||v){const k=u[d-1]?.bottom||0,L=d===0,M=v&&y===a.length-1,K=L?s:k+o;let Z=K+i.height;M&&(Z+=r),u.push({kind:"items",items:a.slice(y-g+1,y+1),rowIndex:d,top:K,bottom:Z,startIndex:y-g+1}),g=0,d+=1}}}this.layoutState.itemsRows=u.filter(et),this.layoutState.headersRows=u.filter(F),this.layoutState.totalContentHeight=u.length?u[u.length-1].bottom:0,this.container.style.height=`${this.layoutState.totalContentHeight}px`}handleRowIndexForItems(e){for(;e<this.layoutState.logicalRows.length&&!et(this.layoutState.logicalRows[e]);)e++;const i=this.layoutState.logicalRows[e];return e=this.layoutState.itemsRows.indexOf(i),e===-1&&(e=this.layoutState.itemsRows.length),e=Math.max(0,Math.min(e,this.layoutState.itemsRows.length-this.layoutState.rowSlotCount)),e}handleRowIndexForHeaders(e){for(;e<this.layoutState.logicalRows.length&&!F(this.layoutState.logicalRows[e]);)e++;const i=this.layoutState.logicalRows[e];return e=this.layoutState.headersRows.indexOf(i),e===-1&&(e=this.layoutState.headersRows.length),e=Math.max(0,Math.min(e,this.layoutState.headersRows.length-this.layoutState.headerSlotCount)),e}initItems(e=0){if(this.layoutState.logicalRows.length===0){for(const p of this.itemElements)p.remove();this.itemElements=[],this.elementToItem=new Map,this.itemSlots=[];return}e=this.handleRowIndexForItems(e);let i=this.layoutState.rowSlotCount,o=this.layoutState.columnsCount;const s=o*i-this.itemElements.length;if(s>0)for(let p=0;p<s;p++){const u=this.createItemElement();u.classList.add("unused"),this.container.appendChild(u),this.itemElements.push(u)}const r=[];for(const p of this.itemElements)this.elementToItem.has(p)||r.push(p);const a=new Map;for(const[p,u]of this.elementToItem.entries())a.set(u,p);const l=new Map,h=[];this.elementToItem=new Map;for(let p=0;p<o;p++)for(let u=0;u<i;u++){const m=this.layoutState.itemsRows[e+u];if(!et(m))continue;const d=m.items[p];let g;if(g||(g=a.get(d)),g||(g=r.pop()),!g)throw new Error("Not enough item elements to assign data items.");h.push(g),l.set(g,{row:u,col:p}),d&&this.elementToItem.set(g,d),this.syncItemElement(g,d),g[bt]=this.data.indexOf(d),this.updateElementPositionClasses(g,u,p)}this.itemElements=this.itemElements.filter(p=>{const u=h.includes(p);return u||p.remove(),u}),this.itemSlots=[];const b=p=>{const u=[];for(const[m,d]of l.entries())d.row===p&&(u[d.col]=m);return u};for(let p=0;p<this.layoutState.rowSlotCount;p++){const u=this.layoutState.itemsRows[e+p],m=b(p);this.itemSlots.push({elements:m,logicalRow:u,index:p})}}initHeaders(e=0){if(this.layoutState.logicalRows.length===0)return;e=this.handleRowIndexForHeaders(e);const i=this.layoutState.headerSlotCount-this.headerElements.length;if(i>0)for(let o=0;o<i;o++){const s=this.createHeaderElement();s.classList.add("unused"),this.container.appendChild(s),this.headerElements.push(s)}else if(i<0)for(let o=0;o<-i;o++){const s=this.headerElements.pop();s&&s.remove()}for(let o=0;o<this.headerElements.length;o++){const s=this.headerElements[o];s.classList.remove(...Array.from(s.classList).filter(r=>r.startsWith("header-"))),s.classList.add(`header-${o}`)}this.headerSlots=[];for(let o=0;o<this.headerElements.length;o++){const s=this.layoutState.headersRows[e+o],r=[this.headerElements[o]];this.headerSlots.push({elements:r,logicalRow:s,index:o})}for(const o of this.headerSlots){const s=o.logicalRow;s?this.syncHeaderElement(o.elements[0],s.header):this.syncHeaderElement(o.elements[0],void 0)}}initStyle(){const e=this.gap,{marginLeft:i,marginRight:o,marginTop:s,marginBottom:r}=this,a=this.itemSize,l=[];for(let d=0;d<this.layoutState.columnsCount;d++){const g=i+d*(a.width+e);l.push(`.col-${d} { 
                --item-x: var(--item-x-${d}, 0px); 
            }`),this.container.style.setProperty(`--item-x-${d}`,`${g}px`)}const h=[],b=[];let p=0,u=0;for(let d=0;d<this.layoutState.logicalRows.length;d++){const g=this.layoutState.logicalRows[d];if(F(g)){if(u>this.layoutState.headerSlotCount-1)continue;b.push(`.header-${u} { --header-y: var(--header-y-${u}, 0px); }`),u+=1}else if(et(g)){if(p>this.layoutState.rowSlotCount-1)continue;h.push(`.row-${p} { --item-y: var(--item-y-${p}, 0px); }`),p+=1}}for(const d of this.itemSlots){const g=d.logicalRow;if(g){const y=g.top;this.container.style.setProperty(`--item-y-${d.index}`,`${y}px`)}}for(const d of this.headerSlots){const g=d.logicalRow;if(g){const y=g.top;this.container.style.setProperty(`--header-y-${d.index}`,`${y}px`)}}this.container.style.setProperty("--margin-left",`${i}px`),this.container.style.setProperty("--margin-right",`${o}px`),this.container.style.setProperty("--margin-top",`${s}px`),this.container.style.setProperty("--margin-bottom",`${r}px`),this.container.style.setProperty("--gap",`${e}px`),this.styleElement&&this.styleElement.remove();const m=this.styleElement=document.createElement("style");m.innerHTML=`
            ${l.join(`
`)}
            ${h.join(`
`)}
            ${b.join(`
`)}
        `,this.shadowRoot.appendChild(m)}setData(e,i=[]){this.reset(),this.data=e,this.headers=i,this.rebuild()}appendData(e,i=[]){if(!e.length&&!i.length)return;let o=this.scrollState.top;const s=this.findRowIndexByTop(o).index;if(s===-1&&this.data.length>0)throw new Error("Failed to find row index by top after appending data.");this.data,e.length&&this.data.push(...e),i.length&&this.headers.push(...i),this.freeElementsOutsideScene(),this.initLayout(),this.initItems(s),this.initHeaders(s),this.initStyle()}removeData(e,i=[]){if(!(!e.length&&!i.length)){this.rebuildingLayout=!0;try{this.removeDataInternal(e,i)}finally{this.rebuildingLayout=!1}}}removeDataInternal(e,i){const o=r=>{const a=this.data;let l=a.indexOf(r);if(l===-1)return;a.splice(l,1);const h=this.findRowIndexByTop(this.scrollState.top).index;if(h===-1)throw new Error("Failed to find row index by top after removal.");this.initLayout();for(const[b,p]of this.elementToItem.entries())if(p===r){this.elementToItem.delete(b);break}this.freeElementsOutsideScene(),this.initItems(h),this.initHeaders(h),this.initStyle()},s=r=>{const a=this.headers.indexOf(r);a!==-1&&this.headers.splice(a,1)};for(const r of e)o(r);for(const r of i)s(r)}computeLayoutMetrics(e){const i=this.itemSize,o=this.gap,{marginLeft:s,marginRight:r}=this,a=this.headers,l=Math.max(e.width-s-r,i.width);let h=Math.floor((l+o)/(i.width+o));h>0&&h*i.width+(h-1)*o>l&&(h-=1),h=Math.max(h,1);const b=Math.ceil(e.height/(i.height+o))+ei,p=a.length>0?Math.ceil(b/2)+ei:0;return{itemsPerRow:h,rowSlotCount:b,headerSlotCount:p}}needsRebuild(e){if(this.viewportSize.width===0&&this.viewportSize.height===0)return!0;const i=this.computeLayoutMetrics(e);return i.itemsPerRow!==this.itemsPerRow||i.headerSlotCount!==this.layoutState.headerSlotCount||Math.abs(i.rowSlotCount-this.layoutState.rowSlotCount)>ts}needsReposition(){return this.itemSize.width!==this.layoutState.itemSize.width||this.itemSize.height!==this.layoutState.itemSize.height}updateElementPositionClasses(e,i,o){const r=Array.from(e.classList).filter(a=>a.startsWith("row-")||a.startsWith("col-"));r.length&&e.classList.remove(...r),e.classList.add(`row-${i}`,`col-${o}`)}findScrollAnchor(e){const{visibleRowStartIndex:i,visibleRowEndIndex:o}=this.computeVisibleRange(e),s=i>0?Math.floor((i+o)/2):0,r=this.layoutState.logicalRows[s];if(!r)return{offsetFromTop:0};const a=e-r.top;return et(r)&&r.items.length>0?{anchorItem:r.items[Math.floor(r.items.length/2)]||r.items[0],offsetFromTop:a}:F(r)?{anchorHeader:r.header,offsetFromTop:a}:{offsetFromTop:0}}findRowIndex(e){const{anchorItem:i,anchorHeader:o}=e;for(const s of this.layoutState.logicalRows)if(i&&et(s)&&s.items.includes(i)||o&&F(s)&&s.header===o)return s.rowIndex;return 0}findRowIndexByTop(e){const i=this.layoutState.logicalRows,o=i.length;if(o===0)return{index:-1,row:null};if(e<=i[0].top)return{index:0,row:i[0]};if(e>=i[o-1].bottom)return{index:o-1,row:i[o-1]};let s=0,r=o-1,a=o-1;for(;s<=r;){const h=s+r>>1;i[h].bottom>=e?(a=h,r=h-1):s=h+1}const l=i[a];return e<l.top&&a>0?{index:a-1,row:i[a-1]}:{index:a,row:l}}findItemPosition(e){let i=this.data.indexOf(e);if(i===-1)return null;let o=this.layoutState.itemsRows.findIndex(r=>r.items.some((a,l)=>r.startIndex+l===i));if(o===-1)return null;let s=this.layoutState.itemsRows[o].items.indexOf(this.data[i]);return{rowIndex:o,colIndex:s}}freeElementsOutsideScene(){const e=new Set;for(const i of this.layoutState.logicalRows)if(et(i)){if(i.bottom<this.scrollState.top)continue;if(i.top>this.scrollState.top+this.viewportSize.height)break;for(const o of i.items)o&&e.add(o)}for(const i of this.itemElements){const o=this.elementToItem.get(i);o&&!e.has(o)&&this.elementToItem.delete(i)}}onResize(e){if(!(this.viewportSize.width===e.width&&this.viewportSize.height===e.height)){if(this.rebuildingLayout)throw new Error("onResize called while rebuilding layout.");if(this.viewportSize=e,this.layoutState.logicalRows.length===0){this.data.length>0&&this.rebuild();return}if(!(!this.needsRebuild(e)&&!this.needsReposition())){this.rebuildingLayout=!0;try{this.onResizeInternal()}finally{this.rebuildingLayout=!1}}}}onResizeInternal(){let e=this.scrollState.top,i=0;if(e>0){const{anchorItem:o,anchorHeader:s,offsetFromTop:r}=this.findScrollAnchor(this.scrollState.top);if(this.initLayout(),i=this.findRowIndex({anchorItem:o,anchorHeader:s}),e=(this.layoutState.logicalRows[i]?.top||0)+r,e=Math.max(0,e),i=this.findRowIndexByTop(e).index,i===-1)throw new Error("Failed to find row index by top after resize.");this.scrollTop=e,this.scrollState.top=e,this.scrollState.delta=0,this.scrollState.dir=0}else this.initLayout();this.freeElementsOutsideScene(),this.initItems(i),this.initHeaders(i),this.initStyle()}onScroll(e){const i=this.scrollState.top;if(e===i)return;this.scrollState.top=e,this.scrollState.delta=this.scrollState.top-i,this.scrollState.dir=this.scrollState.delta<0?-1:this.scrollState.delta>0?1:0,this.scrollState.dir===-1?this.accumulatedScrollUp+=Math.abs(this.scrollState.delta):this.accumulatedScrollUp=0;const{visibleRowStartIndex:o,visibleRowEndIndex:s}=this.computeVisibleRange(e);this.recycleItems(this.scrollState.dir,o,s),this.recycleHeaders(this.scrollState.dir,o,s);const r=this.scrollState.top+this.viewportSize.height,a=this.layoutState.totalContentHeight,l=r>=a-is;this.scrollState.dir===1&&!this.isAtBottom&&l?(this.isAtBottom=!0,this.onScrolledToBottom()):this.isAtBottom&&!l&&(this.isAtBottom=!1)}onScrolledToBottom(){}computeVisibleRange(e){const i=this.layoutState.logicalRows,o=i.length;if(o===0)return{visibleRowStartIndex:0,visibleRowEndIndex:0};const s=e+this.viewportSize.height;if(o<=es){let r=0,a=0;for(let l=0;l<o;l++)if(this.layoutState.logicalRows[l].bottom>=e){r=l;break}for(let l=r;l<o;l++)if(this.layoutState.logicalRows[l].top>=s){a=l;break}return a<r&&(a=o-1),{visibleRowStartIndex:r,visibleRowEndIndex:a}}else{const r=b=>{let p=0,u=o;for(;p<u;){const m=p+u>>>1;i[m].bottom>=b?u=m:p=m+1}return p},a=b=>{let p=0,u=o;for(;p<u;){const m=p+u>>>1;i[m].top>=b?u=m:p=m+1}return p};let l=r(e),h=a(s);return l>=o&&(l=o-1),h>=o&&(h=o-1),h<l&&(h=o-1),{visibleRowStartIndex:l,visibleRowEndIndex:h}}}recycleItems(e,i,o,s=!1){if(this.rebuildingLayout)throw new Error("recycleItems called while rebuilding layout.");if(this.itemSlots.length===0)return;const r=this.itemSlots.map(p=>p.logicalRow?.rowIndex).filter(p=>typeof p=="number"&&Number.isFinite(p)),a=r.length?Math.min(...r):1/0,l=r.length?Math.max(...r):-1/0;if(!!(o<a||i>l)||s){this.elementToItem.clear();const p=this.layoutState.logicalRows.length,u=this.itemSlots.length;let m=i,d=o;const g=(P,v)=>{let $=0;for(let k=P;k<=v;k++)et(this.layoutState.logicalRows[k])&&$++;return $};for(;g(m,d)<u;)if(e===1){if(d++,d>=p)break}else if(m--,m<0)break;for(;g(m,d)<u;)if(e===1){if(m--,m<0)break}else if(d++,d>=p)break;m<0&&(m=0),d>p-1&&(d=p-1);let y=m;for(let P=0;P<this.itemSlots.length;P++){for(;y<=d&&!et(this.layoutState.logicalRows[y]);)y++;const v=this.layoutState.logicalRows[y],$=this.itemSlots[P];if($.logicalRow=v,v){this.container.style.setProperty(`--item-y-${$.index}`,`${v.top}px`);const k=v.items||[],L=$.elements;for(let M=0;M<L.length;M++){const K=k[M],Z=L[M];this.syncItemElement(Z,K),Z[bt]=this.data.indexOf(K),K?this.elementToItem.set(Z,K):this.elementToItem.delete(Z)}y++}else for(let k=0;k<$.elements.length;k++){const L=$.elements[k];this.syncItemElement(L,void 0),L[bt]=-1,this.elementToItem.delete(L)}}return}if(e==1){let p=this.itemSlots.filter(u=>u.logicalRow&&u.logicalRow.rowIndex<i).sort((u,m)=>u.logicalRow.rowIndex-m.logicalRow.rowIndex);if(p.length){let m=Math.max(...this.itemSlots.filter(d=>d.logicalRow).map(d=>d.logicalRow.rowIndex))+1;m<i&&(m=i);for(let d=0;d<p.length;d++){for(;m<this.layoutState.logicalRows.length&&F(this.layoutState.logicalRows[m]);)m++;const g=this.layoutState.logicalRows[m];if(!g)break;if(!et(g))throw new Error("Expected an items row here.");const y=p[d];y.logicalRow=g,this.container.style.setProperty(`--item-y-${y.index}`,`${g.top}px`);for(let P=0;P<y.elements.length;P++){const v=y.elements[P],$=g.items[P];$?this.elementToItem.set(v,$):this.elementToItem.delete(v),this.syncItemElement(v,$),v[bt]=this.data.indexOf($)}m++}}}if(e==-1){let p=this.itemSlots.filter(u=>u.logicalRow&&u.logicalRow.rowIndex>o).sort((u,m)=>m.logicalRow.rowIndex-u.logicalRow.rowIndex);if(p.length){let m=Math.min(...this.itemSlots.filter(d=>d.logicalRow).map(d=>d.logicalRow.rowIndex))-1;m>o&&(m=o);for(let d=0;d<p.length;d++){for(;m>=0&&F(this.layoutState.logicalRows[m]);)m--;const g=this.layoutState.logicalRows[m];if(!g)break;if(!et(g))throw new Error("Expected an items row here.");const y=p[d];y.logicalRow=g,this.container.style.setProperty(`--item-y-${y.index}`,`${g.top}px`);for(let P=0;P<y.elements.length;P++){const v=y.elements[P],$=g.items[P];$?this.elementToItem.set(v,$):this.elementToItem.delete(v),this.syncItemElement(v,$),v[bt]=this.data.indexOf($)}m--}}}}recycleHeaders(e,i,o,s=!1){if(this.rebuildingLayout)throw new Error("recycleHeaders called while rebuilding layout.");if(!(this.layoutState.headerSlotCount===0||this.headerSlots.length===0)){if(s){const r=this.layoutState.logicalRows.length,a=this.headerSlots.length;let l=i,h=o;const b=(u,m)=>{let d=0;for(let g=u;g<=m;g++)g>=0&&g<r&&F(this.layoutState.logicalRows[g])&&d++;return d};for(;b(l,h)<a;)if(e===1){if(h++,h>=r)break}else if(l--,l<0)break;for(;b(l,h)<a;)if(e===1){if(l--,l<0)break}else if(h++,h>=r)break;l<0&&(l=0),h>r-1&&(h=r-1);let p=l;for(let u=0;u<this.headerSlots.length;u++){for(;p<=h&&!F(this.layoutState.logicalRows[p]);)p++;const m=this.layoutState.logicalRows[p],d=this.headerSlots[u];d.logicalRow=m,m?(this.container.style.setProperty(`--header-y-${d.index}`,`${m.top}px`),this.syncHeaderElement(d.elements[0],m.header),p++):this.syncHeaderElement(d.elements[0],void 0)}return}if(e==1){const r=this.headerSlots.filter(a=>a.logicalRow&&a.logicalRow.rowIndex<i).sort((a,l)=>a.logicalRow.rowIndex-l.logicalRow.rowIndex);if(r.length){let a=Math.max(...this.headerSlots.filter(l=>l.logicalRow).map(l=>l.logicalRow.rowIndex))+1;a<i&&(a=i);for(let l=0;l<r.length;l++){for(;a<this.layoutState.logicalRows.length&&!F(this.layoutState.logicalRows[a]);)a++;const h=this.layoutState.logicalRows[a];if(!h)break;if(!F(h))throw new Error("Expected a header row here.");const b=r[l];b.logicalRow=h,this.container.style.setProperty(`--header-y-${b.index}`,`${h.top}px`),this.syncHeaderElement(b.elements[0],h.header),a++}}}if(e==-1){const r=this.headerSlots.filter(a=>a.logicalRow&&a.logicalRow.rowIndex>o).sort((a,l)=>l.logicalRow.rowIndex-a.logicalRow.rowIndex);if(r.length){let a=Math.min(...this.headerSlots.filter(l=>l.logicalRow).map(l=>l.logicalRow.rowIndex))-1;a>o&&(a=o);for(let l=0;l<r.length;l++){for(;a>=0&&!F(this.layoutState.logicalRows[a]);)a--;const h=this.layoutState.logicalRows[a];if(!h)break;if(!F(h))throw new Error("Expected a header row here.");const b=r[l];b.logicalRow=h,this.container.style.setProperty(`--header-y-${b.index}`,`${h.top}px`),this.syncHeaderElement(b.elements[0],h.header),a--}}}}}headerHeight(e){return 50}headerSpace(e){return this.gap}}const os=["in","hover","morph","loop"];function me(t,e){return t==="loop"?e?"continuous":"once":t==="in"?"once":t==="hover"?e?"continuous":"once":t==="morph"?e?"continuous":"boomerang":"once"}function Ne(t,e){const i=[];return(t!=="loop"||!e)&&i.push("once"),(t==="in"||t==="morph")&&i.push("reverse"),t==="morph"&&i.push("boomerang"),e&&i.push("continuous"),i}function ge(t){const e=[];return t==="morph"?(e.push(1e3),e.push(1e3)):t==="in"?e.push(500):t==="hover"&&e.push(1e3),e}function q(t){const[e,i]=t.split("-");return os.includes(e)?e:"hover"}function rs(t,e,i,o){const s=q(t),r=Ne(s,e),a=l=>l&&r.includes(l)?l:void 0;return{playback:a(i?.playback)??a(o?.playback)??me(s,e),delay:i?.delay??o?.delay??ge(s),speed:i?.speed??o?.speed??1}}function Ea(t,e={}){if(e.frame!==void 0)return{sequence:`frame:${e.frame}`};const i=_e(t),o=e.state||"",s=i.find(h=>h.name===o)||i.find(h=>h.default)||i[0];let r=0;if(s.params.length){const h=parseFloat(s.params[0]);!isNaN(h)&&h>0&&h<=1&&(r=h)}return{sequence:`frame:${r?s.duration*r:s.duration}`}}function as(t,e){const i=_e(t),o=t?.fr||30,s=e.state||"",r=i.find(p=>p.name===s),a=1,l=[],h=[],b=p=>(p||0)/o*1e3*(1/a);if(r)l.push("play"),h.push({duration:b(r?.duration),animation:!0,ratio:1,title:"Play"});else{for(let u=0;u<i.length;u++){const m=i[u],d=i[u-1];if(d){const g=Math.ceil((m.time-d.time)/o*100);l.push(`delay:${g}`),h.push({duration:g,animation:!1,ratio:0,title:"Delay"})}l.push(`state:${m.name}`),l.push("play"),h.push({duration:b(m?.duration),animation:!0,ratio:0,title:`Play ${m.name}`})}const p=h.reduce((u,m)=>u+m.duration,0);h.forEach(u=>{u.ratio=u.duration/p})}return{sequence:l.join(","),sections:h}}function ns(t,e){const i=_e(t),o=t?.fr??30,s=e.state??"",r=i.find(v=>v.name===s)||i.find(v=>v.default)||i[0],a=e.playback,l=e.delay??[],h=e.speed??1,b=q(r?.name??s);if(!r)throw new Error("State not found");const p=[],u=[],m=v=>(v||0)/o*1e3*(1/h),d=(v,$)=>{v&&p.push($?`delay:${v}:last`:`delay:${v}`)},g=v=>{v&&u.push({duration:v,animation:!1,ratio:0,title:"Delay"})},y=(v,$,k)=>{p.push(v),u.push({duration:k,animation:!0,ratio:0,title:$})};if(i.length>1&&r.name&&p.push(`state:${r.name}`),b==="in"){const v=l?.[0]??0;d(v),g(v),a==="reverse"?y("play:reverse","Play reverse",m(r?.duration)):y("play","Play",m(r?.duration)),a!=="continuous"&&p.push("idle")}else if(b==="hover"){const v=l?.[0]??0;d(v,!0),y("play","Play",m(r?.duration)),g(v),a!=="continuous"&&p.push("idle")}else if(b==="morph"){const v=l?.[0]??0,$=l?.[1]??0,k=r.params?.length?parseFloat(r.params[0]):NaN,L=!isNaN(k)&&k>0&&k<1,M=L?Math.floor((r.duration+1)*k):0,K=L?`frame:0:${M}`:"play",Z=L?`frame:${M}:${r.duration}`:"play:reverse",qt=L?"Play enter":"Play",ae=L?"Play leave":"Play reverse",Xe=m(L?M:r?.duration),Je=m(L?r.duration-M:r?.duration);a==="once"?(d(v,!0),y(K,qt,Xe),g(v)):a==="reverse"?(d(v,!0),y(Z,ae,Je),g(v)):(y(K,qt,Xe),d($),g($),d(v,!0),y(Z,ae,Je),g(v)),a!=="continuous"&&p.push("idle")}else if(b==="loop")y("play","Play",m(r?.duration)),a!=="continuous"&&p.push("idle");else throw new Error("Unsupported trigger");const P=u.reduce((v,$)=>v+$.duration,0);return u.forEach(v=>{v.ratio=v.duration/P}),{sequence:p.join(","),sections:u}}function _a(t){const e=t.replace(/,?(idle(:\w+)?)(?=,|$)/,"");return[e,e!==t]}const ls='@charset "UTF-8";:host{display:block}.accordion{display:flex;flex-direction:column;overflow:hidden}.header{display:flex;align-items:center;justify-content:space-between;background:var(--color-white-100);padding:var(--space-sm) var(--space-md);color:var(--color-gray-500);cursor:pointer}li-pictogram.rotated{transform:rotate(180deg)}.body{display:flex;flex-direction:column;gap:var(--space-sm);background:var(--color-gray-100);padding:var(--space-sm) var(--space-md)}.field-col{display:grid;grid-template-columns:max-content 1fr 1fr;column-gap:var(--space-xs);row-gap:var(--space-sm)}.field-col li-field{min-width:5.625rem}';var cs=Object.defineProperty,hs=Object.getOwnPropertyDescriptor,mt=(t,e,i,o)=>{for(var s=o>1?void 0:o?hs(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&cs(e,i,s),s};const ds={once:{title:"Once",description:"Plays once and stops"},reverse:{title:"Reverse",description:"Plays from end to start once"},boomerang:{title:"Boomerang once",description:"Plays and smoothly returns"},continuous:{title:"Continuous",description:"Plays continuously"}},ne=0,le=5,ii=.1,si=3,oi=.1,ce=.1,ps=200;let st=class extends w{constructor(){super(...arguments),this.trigger="morph",this.supportsLoop=!0,this.playback="continuous",this.delay=[],this.speed=1,this.animationSettingsOpen=!1,this.delayFirst=0,this.delaySecond=0,this.notifyChange=()=>{const t=this.playback,e=this.speed,i=[this.delayFirst??0,this.delaySecond??void 0].filter(o=>o!==void 0).map(o=>o*1e3);this.dispatchEvent(new CustomEvent("change",{detail:{playback:t,speed:e,delay:i}}))}}willUpdate(t){t.has("delay")&&(this.delayFirst=(this.delay?.[0]??0)/1e3,this.delaySecond=(this.delay?.[1]??0)/1e3)}toggleAnimationSettings(){this.animationSettingsOpen=!this.animationSettingsOpen}handleHeaderKeydown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.toggleAnimationSettings())}scheduleNotifyChange(){this.notifyChangeThrottler=fe(this.notifyChangeThrottler,Mt(ps),this.notifyChange)}handlePlaybackChange(t){t.stopPropagation(),this.playback=t.detail.value,this.scheduleNotifyChange()}handleDelayChange(t){t.stopPropagation(),this.delayFirst=Number(t.detail.value),this.scheduleNotifyChange()}handleDelayMorphChange(t){t.stopPropagation(),this.delaySecond=Number(t.detail.value),this.scheduleNotifyChange()}handleSpeedChange(t){t.stopPropagation(),this.speed=Number(t.detail.value),this.scheduleNotifyChange()}render(){let t=null;if(this.animationSettingsOpen){const e=this.trigger!=="loop",i=this.trigger==="morph"&&this.playback!=="once"&&this.playback!=="reverse",o=e?n` <li-label class="gray sm">Delay</li-label>
                      <li-slider
                          fill
                          .value=${this.delayFirst}
                          .min=${ne}
                          .max=${le}
                          .step=${ce}
                          @change=${this.handleDelayChange}
                      ></li-slider>
                      <li-field class="sm frame">
                          <li-input
                              .value=${this.delayFirst}
                              .min=${ne}
                              .max=${le}
                              .step=${ce}
                              type="number"
                              suffix="sec"
                              @change=${this.handleDelayChange}
                          ></li-input>
                      </li-field>`:null,s=i?n` <li-label class="gray sm">Delay morph</li-label>
                      <li-slider
                          fill
                          .value=${this.delaySecond}
                          .min=${ne}
                          .max=${le}
                          .step=${ce}
                          @change=${this.handleDelayMorphChange}
                      ></li-slider>
                      <li-field class="sm frame">
                          <li-input
                              .value=${this.delaySecond}
                              .min=${ne}
                              .max=${le}
                              .step=${ce}
                              type="number"
                              suffix="sec"
                              @change=${this.handleDelayMorphChange}
                          ></li-input>
                      </li-field>`:null,r=n` <li-label class="gray sm">Speed</li-label>
                <li-slider
                    fill
                    .value=${this.speed}
                    .min=${ii}
                    .max=${si}
                    .step=${oi}
                    @change=${this.handleSpeedChange}
                ></li-slider>
                <li-field class="sm frame">
                    <li-input
                        .value=${this.speed}
                        .min=${ii}
                        .max=${si}
                        .step=${oi}
                        type="number"
                        suffix="x"
                        @change=${this.handleSpeedChange}
                    ></li-input>
                </li-field>`;t=n`<div class="body">
                <li-field-group>
                    <li-label class="gray sm">Playback type</li-label>
                    <li-select
                        .value=${this.playback}
                        .label=${this.playbackOptions.find(a=>a.value===this.playback)?.title}
                        .options=${this.playbackOptions}
                        @change=${this.handlePlaybackChange}
                    ></li-select>
                </li-field-group>

                <div class="field-col">${o} ${s} ${r}</div>
            </div>`}return n`
            <div class="accordion">
                <div
                    class="header"
                    role="button"
                    tabindex="0"
                    aria-expanded=${this.animationSettingsOpen}
                    @click=${this.toggleAnimationSettings}
                    @keydown=${this.handleHeaderKeydown}
                >
                    <li-label class="gray sm">Advanced settings</li-label>
                    <li-pictogram
                        class="sm${this.animationSettingsOpen?" rotated":""}"
                        icon="arrowDown"
                    ></li-pictogram>
                </div>
                ${t}
            </div>
        `}get playbackOptions(){return Ne(this.trigger,this.supportsLoop).map(t=>({value:t,...ds[t]}))}};st.styles=x(ls);mt([c({type:String})],st.prototype,"trigger",2);mt([c({type:Boolean})],st.prototype,"supportsLoop",2);mt([c({type:String})],st.prototype,"playback",2);mt([c({type:Array})],st.prototype,"delay",2);mt([c({type:Number})],st.prototype,"speed",2);mt([f()],st.prototype,"animationSettingsOpen",2);mt([f()],st.prototype,"delayFirst",2);mt([f()],st.prototype,"delaySecond",2);st=mt([S("li-animation-settings")],st);const us='@charset "UTF-8";:host{display:block;width:12.5rem}li-select-button{width:inherit}li-list{display:none}';var ms=Object.defineProperty,gs=Object.getOwnPropertyDescriptor,qe=(t,e,i,o)=>{for(var s=o>1?void 0:o?gs(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&ms(e,i,s),s};const ri="All categories";let Wt=class extends w{constructor(){super(),this.items=[],this._categoryGroups=[],this._getWidthAnchor=()=>ve()?bi(this):void 0,this.tabIndex=0}willUpdate(t){t.has("items")&&this._updateCategoryGroups()}_updateCategoryGroups(){const t=this.items.filter(s=>s.promoted),e=this.items.filter(s=>!s.promoted),i={options:[]},o={options:[]};i.options.push({value:"",title:ri}),i.options.push(...t.map(s=>({title:Yt(s.title),value:s.title}))),o.options.push(...e.map(s=>({title:Yt(s.title),value:s.title}))),this._categoryGroups=[i,o]}render(){const t=this.value?Yt(this.value):ri;return n`
            <li-select
                class="lg"
                .label=${t}
                .value=${this.value}
                .options=${this._categoryGroups}
                .widthAnchorProvider=${this._getWidthAnchor}
            ></li-select>
        `}};Wt.styles=x(us);qe([c({type:Object})],Wt.prototype,"items",2);qe([c({type:String})],Wt.prototype,"value",2);Wt=qe([S("li-category-select")],Wt);const Ge=Be("library-colors"),_i=Be("library-last-collection"),Pi=Be("library-preferences");async function ki(t,e,i){try{await t.http.post(`/api/collections/${i.id}/icons`,{index:e.index,family:e.family,style:e.style});const o=D(`/icons/${e.family}/${e.style}/${e.index}-${e.name}.li`),s=document.createElement("lord-icon");return s.setAttribute("src",o),s.setAttribute("delay","1000"),s.setAttribute("trigger","in-hover"),t.toast.show(Fi`Added to ${Ui.bold(i.name)}`,{preview:s,actions:[{label:"Go to collection",name:"go-to-collection"}],onAction:r=>{r==="go-to-collection"&&t.navigation?.navigatePage(wt.COLLECTION,{collectionId:i.id})}}),!0}catch(o){return o instanceof wi?o.status===429?t.toast.show("Too many requests. Please try again later."):o.status===409?t.toast.show(`Icon is already in "${i.name}".`):o.status===403?t.toast.show(`"${i.name}" is full.`):t.toast.show(o.message||"Failed to add icon to collection."):t.toast.show("Failed to add icon to collection."),!1}}class ai{constructor(e,i={},o=0){this.run=e,this.callbacks=i,this.delay=o,this.abortController=null,this.seq=0,this.currentResult=null,this.debounceTimer=0,this.debounceReject=null}async load(){if(this.delay>0){this.debounceTimer&&(clearTimeout(this.debounceTimer),this.debounceReject&&this.debounceReject("Overridden"));try{await new Promise((o,s)=>{this.debounceReject=s,this.debounceTimer=window.setTimeout(()=>{this.debounceTimer=0,this.debounceReject=null,o()},this.delay)})}catch{return}}this.abortController&&this.abortController.abort(),this.abortController=new AbortController;const e=this.abortController.signal,i=++this.seq;try{const o=await this.run(e,i);if(i!==this.seq){this.callbacks.onStale?.(o,i);return}this.currentResult=o,this.callbacks.onLoaded?.(o,i)}catch(o){if(i!==this.seq||o instanceof Error&&o.name==="AbortError")return;this.callbacks.onError?.(o,i)}finally{i===this.seq&&this.abortController&&this.abortController.signal.aborted&&(this.abortController=null)}}cancel(){if(this.seq++,this.debounceTimer&&(clearTimeout(this.debounceTimer),this.debounceTimer=0,this.debounceReject&&(this.debounceReject("Cancelled"),this.debounceReject=null)),this.abortController){try{this.abortController.abort()}catch{}this.abortController=null}}destroy(){this.cancel(),this.currentResult!=null&&(this.callbacks.onDestroy?.(this.currentResult),this.currentResult=null)}}const Fe="#ffffff";function ni(t,e){return e.background?t===void 0||t===null?e.transparent?null:Fe:t:null}const fs={1:"light",2:"regular",3:"bold"};function vs(t){return typeof t=="number"?fs[t]??"regular":t}function ys(t,e){const i=[`src="https://cdn.lordicon.com/${t}.json"`];if(i.push(`trigger="${q(e.state??"")}"`),e.state&&i.push(`state="${e.state}"`),e.colors&&Object.keys(e.colors).length){const o=Object.entries(e.colors).map(([s,r])=>`${s}:${r}`).join(",");i.push(`colors="${o}"`)}return e.stroke&&i.push(`stroke="${vs(e.stroke)}"`),i.push(`style="width:${e.size}px;height:${e.size}px"`),['<script src="https://cdn.lordicon.com/lordicon.js"><\/script>',"<lord-icon",...i.map(o=>`    ${o}`),"></lord-icon>"].join(`
`)}const Oi="free-export-upsell-shown",li="free-export-click-count",bs=2;function ci(){try{return sessionStorage.getItem(Oi)==="1"}catch{return!1}}function ws(){try{sessionStorage.setItem(Oi,"1")}catch(t){console.error("Failed to persist free export upsell flag to session storage",t)}}function xs(){let t=0;try{t=(Number(sessionStorage.getItem(li))||0)+1,sessionStorage.setItem(li,String(t))}catch(e){console.error("Failed to persist export click count to session storage",e)}return t}let he=null;function Ri(t){return he||(he=t.get("/api/library/highlights").catch(e=>{throw he=null,e})),he}function Li(t){const e={};for(const i of t){const[o]=i.name.split("-");e[o]||(e[o]=[]),e[o].push(i)}return e}function Ss(t){const{in:e=[],hover:i=[],morph:o=[],loop:s=[]}=Li(t);return[...e,...i,...o,...s]}function hi(t){return t.find(e=>e.default)?.name??""}function $s(t){const[e]=t.split("-"),i=e==="in";return{trigger:e||"hover",delay:i?500:0,clickToReplay:i}}function Cs(t,e){return e?t:t.filter(i=>i.default||i.name.startsWith("morph-"))}function Es(t,e){if(t)return e||t.startsWith("morph-")?t:void 0}function _s(t,e,i,o,s=!1){const r=["lottie","aep","mogrt"].includes(t),a=["lottie","gif","apng","webp","mp4","aep","mogrt","html"].includes(t)||t==="png"&&!!e.png,l=a&&!r&&t!=="html",h=s&&["lottie","gif","apng","webp","mp4","png","svg","html"].includes(t),b=["gif","apng","webp","mp4","png","svg"].includes(t),p=["gif","apng","webp","mp4","png","html"].includes(t),u=["gif","apng","webp"].includes(t),m=["gif","webp","apng","png","svg"].includes(t),d=i&&!["aep","mogrt"].includes(t),g=o&&!["aep","mogrt"].includes(t);return{animation:a,animationSettings:l,states:h,colors:d,stroke:g,background:b,transparent:m,size:p,source:r,loop:u}}const Ps='@charset "UTF-8";:host{display:flex;flex-direction:row;align-items:center;gap:var(--space-sm)}li-field{flex:1}li-colors-palette{display:none}',ks='@charset "UTF-8";:host{display:flex;flex-direction:column;padding:var(--space-md);gap:var(--space-sm);box-sizing:border-box;background:var(--color-white-100);border-radius:var(--radius-xl);position:relative;width:21.5625rem;--color-knob-size: var(--icon-size-lg);--color-knob-left: 0;--color-knob-top: 0;--color-knob: transparent}:host(.shadow){box-shadow:var(--shadow-popover);border:1px solid var(--color-gray-300)}.grid{display:grid;grid-template-columns:repeat(15,minmax(0,1fr));background:var(--color-white-100);border:1px solid var(--color-gray-300);border-radius:var(--radius-md);overflow:hidden;position:relative;width:100%}.grid div{position:relative;display:block;aspect-ratio:1;box-sizing:border-box;background-color:currentColor;cursor:pointer}.grid div:before{content:"";position:absolute;background:currentColor;width:calc(100% + 1px);height:calc(100% + 1px);left:0;top:0}.grid div.active:after{content:"";position:absolute;display:block;box-sizing:border-box;width:100%;height:100%;left:0;top:0;background:currentColor;border:1px solid var(--color-white-100);box-shadow:var(--shadow-selected);z-index:2}.color-knob{position:absolute;width:var(--color-knob-size);height:var(--color-knob-size);left:calc(var(--color-knob-left) - var(--color-knob-size) / 2);top:calc(var(--color-knob-top) - var(--color-knob-size) / 2);background:var(--color-knob);border:1px solid var(--color-gray-300);box-shadow:var(--shadow-selected);box-sizing:border-box;pointer-events:none;z-index:10;border-radius:var(--radius-sm)}.recently{display:flex;flex-direction:column;gap:var(--space-xs);margin-top:var(--space-sm)}.recently>div{display:grid;width:100%;grid-template-columns:repeat(10,minmax(0,1fr));gap:var(--space-xs)}li-color{width:100%;height:auto}';var Os=Object.defineProperty,Rs=Object.getOwnPropertyDescriptor,ht=(t,e,i,o)=>{for(var s=o>1?void 0:o?Rs(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&Os(e,i,s),s};const Ls=["#faddd1","#fad3d1","#fad1e6","#e5d1fa","#d4d1fa","#d1e3fa","#d1f3fa","#d1faf0","#d1fad7","#ebfad1","#faf9d1","#faefd1","#fae6d1","#f2e2d9","#ffffff","#f4b69c","#f4a09c","#f49cc8","#c69cf4","#a39cf4","#9cc2f4","#9ce5f4","#9cf4df","#9cf4a7","#d4f49c","#f4f19c","#f4dc9c","#f4c89c","#e3c0ac","#e4e4e4","#ee8f66","#ee6d66","#ee66aa","#a866ee","#7166ee","#66a1ee","#66d7ee","#66eece","#66ee78","#bcee66","#eee966","#eeca66","#eeaa66","#d59f80","#b4b4b4","#e86830","#e83a30","#e8308c","#8930e8","#4030e8","#3080e8","#30c9e8","#30e8bd","#30e849","#a5e830","#e8e230","#e8b730","#e88c30","#c67d53","#848484","#c74b16","#c71f16","#c7166f","#6c16c7","#2516c7","#1663c7","#16a9c7","#16c79e","#16c72e","#86c716","#c7c116","#c79816","#c76f16","#a66037","#545454","#913710","#911710","#911051","#4f1091","#1b1091","#104891","#107c91","#109173","#109121","#629110","#918d10","#916f10","#915110","#794628","#242424","#5c230a","#5c0e0a","#5c0a33","#320a5c","#110a5c","#0a2e5c","#0a4e5c","#0a5c49","#0a5c15","#3e5c0a","#5c590a","#5c460a","#5c330a","#4d2c19","#000000"].map(t=>it(t)),Ts=[{value:"palette",title:"palette"},{value:"map",title:"map"}];let B=class extends w{constructor(){super(...arguments),this.value="",this.tab="palette",this.hue=0,this.saturation=100,this.brightness=100,this.palette=Ls,this.colors=[],this.knob=!1,this._localValue="",this.handleGridMouseLeave=()=>{this.knob=!1}}connectedCallback(){super.connectedCallback(),this.colorsService&&(this.unsubscribe=this.colorsService.subscribe(t=>{this.colors=t,this.requestUpdate()}))}disconnectedCallback(){this.unsubscribe?.(),super.disconnectedCallback()}willUpdate(t){if(t.has("value")&&this.value!==this._localValue){const{h:e,s:i,v:o}=Te(this.value);this.hue=e,this.saturation=i,this.brightness=o}}updated(t){super.updated(t)}handleColorChange(t){this.value=t;const{h:e,s:i,v:o}=Te(t);this.hue=e,this.saturation=i,this.brightness=o;const s=new CustomEvent("change",{detail:{value:t}});this.dispatchEvent(s)}handleHueChange(t){this.hue=t.detail.value,this.updateValueFromHSV()}handleSaturationAreaChange(t){const{saturation:e,value:i}=t.detail;this.saturation=e,this.brightness=i,this.updateValueFromHSV()}updateValueFromHSV(){const t=Wi(this.hue,this.saturation,this.brightness);t!==this._localValue&&(this._localValue=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t}})))}handleTabChange(t){this.tab=t.detail.value;const{h:e,s:i,v:o}=Te(this.value);this.hue=e,this.saturation=i,this.brightness=o}handleGridHover(t,e){this.renderRoot.querySelector(".grid");const i=t.target,o=this.getBoundingClientRect(),s=i.getBoundingClientRect(),r=s.left-o.left+s.width/2,a=s.top-o.top+s.height/2;this.knob=!0,this.style.setProperty("--color-knob",e),this.style.setProperty("--color-knob-left",`${r}px`),this.style.setProperty("--color-knob-top",`${a}px`)}renderRecent(){const t=it(this.value),e=this.colors;return e.length>0?n`
                  <div class="recently">
                      <li-label class="gray">Recently used colors</li-label>
                      <div>
                          ${e.map(i=>n`
                                  <li-color
                                      @click=${this.handleColorChange.bind(this,i)}
                                      .color=${i}
                                      class=${R({active:i==t,clickable:!0})}
                                  ></li-color>
                              `)}
                      </div>
                  </div>
              `:null}renderKnob(){return this.knob?n` <div class="color-knob"></div> `:null}renderGrid(){const t=it(this.value),e=this.palette,i=this.renderKnob();return n`
            <div class="grid" @mouseleave=${this.handleGridMouseLeave}>
                ${e.map(o=>n`
                        <div
                            @mouseenter=${s=>this.handleGridHover(s,o)}
                            @click=${this.handleColorChange.bind(this,o)}
                            style=${Ft({color:o})}
                            class=${R({active:o==t})}
                        ></div>
                    `)}
            </div>
            ${i}
        `}renderMap(){return n`
            <li-saturation-area
                .hue=${this.hue}
                .saturation=${this.saturation}
                .value=${this.brightness}
                @change=${this.handleSaturationAreaChange}
            ></li-saturation-area>
            <li-hue-slider .value=${this.hue} @change=${this.handleHueChange}></li-hue-slider>
        `}render(){return n`
            <li-value-switch
                .value=${this.tab}
                .options=${Ts}
                @change=${this.handleTabChange}
            ></li-value-switch>

            ${this.tab==="palette"?this.renderGrid():this.renderMap()} ${this.renderRecent()}
        `}};B.maxHeight=320;B.styles=x(ks);ht([c()],B.prototype,"value",2);ht([c()],B.prototype,"tab",2);ht([f()],B.prototype,"hue",2);ht([f()],B.prototype,"saturation",2);ht([f()],B.prototype,"brightness",2);ht([H({context:Ge})],B.prototype,"colorsService",2);ht([f()],B.prototype,"palette",2);ht([f()],B.prototype,"colors",2);ht([f()],B.prototype,"knob",2);B=ht([S("li-colors-palette")],B);var Ds=Object.defineProperty,Is=Object.getOwnPropertyDescriptor,ot=(t,e,i,o)=>{for(var s=o>1?void 0:o?Is(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&Ds(e,i,s),s};const Vt=20,zs=80,As=(t=0)=>({anchor:e,popover:i,viewport:o})=>{const{width:s,height:r}=o,a={},l=Math.max(i.height,t);return r-(e.top+e.height)>=l+Vt?(a.top=`${e.top+e.height}px`,a.right=`${s-e.right}px`):e.top>=l+Vt?(a.bottom=`${r-e.top}px`,a.right=`${s-e.right}px`):(a.right=`${s-e.left+Vt}px`,e.top+l+Vt>r?a.bottom=`${Vt}px`:a.top=`${e.top}px`),a};let V=class extends w{constructor(){super(),this.value="",this.defaultValue="",this.placeholder="",this.indeterminate=!1,this.indeterminateText="mixed",this.popoverOpen=!1,this._dirty=!1,this.popoverController=Se({strategy:As(B.maxHeight),onOpened:t=>{const e=this.preferencesService?.get("color-palette-tab");e&&(t.tab=e),this.popoverOpen=!0},onClosed:t=>{this.preferencesService?.set("color-palette-tab",t.tab),this.dispatchChangeCommit(),this.popoverOpen=!1}})}openPopover(){this.colorComponent&&this.popoverController.open(this,{boundary:this.colorComponent})}handleColorChange(t){this.colorChangeDebouncer=fe(this.colorChangeDebouncer,Mt(zs),()=>this.applyValue(t.detail.value,!1))}handleInputChange(t){this.applyValue(t.detail.value,!0)}handleInputBlur(){this.indeterminate||this.value||this.applyValue("",!0)}applyValue(t,e){const i=it(t),o=Gt(i)?i:it(this.lastValidValue||this.defaultValue),s=o!==it(this.value)||this.indeterminate&&Gt(o);this.setInternalValue(o),Gt(o)&&(this.lastValidValue=o),s&&this.notifyChange(),e&&this.dispatchChangeCommit()}setInternalValue(t){this._lastInternalValue=t,this.value=t,this.inputComponent&&(this.inputComponent.value=t?it(t).substring(1):"")}notifyChange(){let t=it(this.value);this._dirty=!0,this.dispatchEvent(new CustomEvent("change",{detail:{value:t}}))}dispatchChangeCommit(){this._dirty&&(this._dirty=!1,this.value&&Gt(this.value)&&this.colorsService?.addColor(this.value),this.dispatchEvent(new CustomEvent("change-commit",{detail:{value:this.value}})))}willUpdate(t){if(t.has("value")&&this.value!==this._lastInternalValue){const e=it(this.value);this.lastValidValue=Gt(e)?e:void 0,this._dirty=!1}}render(){const t=this.displayValue,e=this.displayPlaceholder;return n`
            <li-color
                @click=${this.openPopover}
                .color=${t}
                .indeterminate=${this.indeterminate}
                class=${R({clickable:!0,active:this.popoverOpen})}
            ></li-color>

            <li-field class="sm">
                <li-input
                    autoselect
                    @blur=${this.handleInputBlur}
                    @change=${this.handleInputChange}
                    .value=${t}
                    .indeterminate=${this.indeterminate}
                    .indeterminateText=${this.indeterminateText}
                    type="text"
                    suffix="hex"
                    .placeholder=${e}
                ></li-input>
            </li-field>

            <li-colors-palette
                class="shadow"
                @change=${this.handleColorChange}
                ${$e(this.popoverController)}
                .value=${this.indeterminate?"":this.value}
            ></li-colors-palette>
        `}get displayPlaceholder(){return this.defaultValue?it(this.defaultValue).substring(1):this.placeholder}get displayValue(){return this.indeterminate?"":it(this.value||this.defaultValue).substring(1)}};V.styles=x(Ps);ot([c()],V.prototype,"value",2);ot([c()],V.prototype,"defaultValue",2);ot([c()],V.prototype,"placeholder",2);ot([c({type:Boolean})],V.prototype,"indeterminate",2);ot([c({type:String})],V.prototype,"indeterminateText",2);ot([E("li-color",!0)],V.prototype,"colorComponent",2);ot([E("li-input",!0)],V.prototype,"inputComponent",2);ot([f()],V.prototype,"popoverOpen",2);ot([H({context:Ge})],V.prototype,"colorsService",2);ot([H({context:Pi})],V.prototype,"preferencesService",2);V=ot([S("li-color-field")],V);const Ms=':host{display:block;aspect-ratio:1;box-sizing:border-box;width:var(--color-size);height:var(--color-size);border-radius:var(--color-radius);position:relative;z-index:2;--color-bg: black;--color-border: black;--color-size: 35px;--color-radius: 6.5px}:host(.clickable){cursor:pointer}.color{width:100%;aspect-ratio:1;box-sizing:border-box;background:var(--color-bg);border-radius:var(--color-radius);border:1px solid var(--color-border)}.transparent{width:100%;aspect-ratio:1;box-sizing:border-box;border-radius:var(--color-radius);background:repeating-conic-gradient(var(--color-gray-300) 0% 25%,#fff 0% 50%) 50%/16px 16px;border:1px solid var(--color-gray-300)}.indeterminate{width:100%;aspect-ratio:1;box-sizing:border-box;border-radius:var(--color-radius);background:conic-gradient(#f33,#f93,#ff3,#00e600,#00e6e6,#33f,#93f,#f3f,#f39,#f33);position:relative}.indeterminate:after{content:"";position:absolute;inset:6px;background:var(--color-white-100);border-radius:calc(var(--color-radius) - 2px)}:host(.clickable:hover) .color,:host(.clickable:hover) .transparent{border:2px solid var(--color-gray-300)}:host(.active) .color,:host(.active) .transparent{border:2px solid var(--color-green-300)}';var Fs=Object.defineProperty,Us=Object.getOwnPropertyDescriptor,Ve=(t,e,i,o)=>{for(var s=o>1?void 0:o?Us(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&Fs(e,i,s),s};let Kt=class extends w{constructor(){super(...arguments),this.color="",this.indeterminate=!1}render(){return this.indeterminate?n` <div class="indeterminate"></div> `:this.color?n`
            <div
                class="color"
                style=${Ft({"--color-border":ti(this.color,!0),"--color-bg":ti(this.color)})}
            ></div>
        `:n` <div class="transparent"></div> `}};Kt.styles=x(Ms);Ve([c({type:String})],Kt.prototype,"color",2);Ve([c({type:Boolean})],Kt.prototype,"indeterminate",2);Kt=Ve([S("li-color")],Kt);const Bs='@charset "UTF-8";:host{display:contents}';var js=Object.defineProperty,Hs=Object.getOwnPropertyDescriptor,gt=(t,e,i,o)=>{for(var s=o>1?void 0:o?Hs(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&js(e,i,s),s};const de="HTML_USAGE_OTHER";let Q=class extends w{constructor(){super(...arguments),this.selectedSubtype=null,this.radioError=!1,this.otherText="",this.textError=!1,this.submitting=!1}async open(){this.selectedSubtype=null,this.radioError=!1,this.otherText="",this.textError=!1,this.submitting=!1,await this.dialog.open({mask:!0,width:450})}handleRadioChange(t){this.selectedSubtype=t.detail.value,this.radioError=!1,this.textError=!1}handleTextareaChange(t){this.otherText=t.detail.value,this.textError=!1}async handleAction(t){if(t.detail.name==="cancel"){this.dialog.close();return}if(t.detail.name==="send"){if(!this.selectedSubtype){this.radioError=!0;return}if(this.selectedSubtype===de&&!this.otherText.trim()){this.textError=!0;return}if(this.submitting||!this.feedbackService)return;this.submitting=!0;try{await this.feedbackService.submitHtmlUsage(this.selectedSubtype,this.selectedSubtype===de?this.otherText:void 0),this.toastService?.show("Thanks for your feedback! We will use it to improve our service."),this.dialog.close()}catch{this.toastService?.show("Failed to submit feedback. Please try again.")}finally{this.submitting=!1}}}handleClose(){this.dispatchEvent(new CustomEvent("close"))}render(){const t=[{label:"Cancel",name:"cancel"},{label:this.submitting?"Sending...":"Send",name:"send"}],e=[{value:"HTML_USAGE_SQUARESPACE",title:"Squarespace"},{value:"HTML_USAGE_SHOPIFY",title:"Shopify"},{value:"HTML_USAGE_WIX",title:"Wix"},{value:"HTML_USAGE_WP_ELEMENTOR",title:"WordPress Elementor"},{value:"HTML_USAGE_WP_DIVI",title:"WordPress Divi"},{value:de,title:"Other"}],i=this.selectedSubtype===de?n`
                      <li-field class=${R({auto:!0,error:this.textError})}>
                          <li-textarea
                              placeholder="Enter the platform name"
                              .value=${this.otherText}
                              @change=${this.handleTextareaChange}
                          ></li-textarea>
                      </li-field>
                  `:null;return n`
            <li-dialog
                id="dialog"
                heading="Where do you use html?"
                .actions=${t}
                @close=${this.handleClose}
                @action=${this.handleAction}
            >
                <li-radio-group
                    class=${R({error:this.radioError})}
                    .options=${e}
                    .value=${this.selectedSubtype}
                    @change=${this.handleRadioChange}
                ></li-radio-group>

                ${i}
            </li-dialog>
        `}};Q.styles=x(Bs);gt([E("#dialog",!0)],Q.prototype,"dialog",2);gt([c({attribute:!1})],Q.prototype,"feedbackService",2);gt([c({attribute:!1})],Q.prototype,"toastService",2);gt([f()],Q.prototype,"selectedSubtype",2);gt([f()],Q.prototype,"radioError",2);gt([f()],Q.prototype,"otherText",2);gt([f()],Q.prototype,"textError",2);gt([f()],Q.prototype,"submitting",2);Q=gt([S("li-dialog-html-usage")],Q);async function Pa(t,e){const i=new Q;i.feedbackService=t,i.toastService=e,await O.instance.assign(i),i.addEventListener("close",()=>{O.instance.release(i)}),i.open()}const Ns='@charset "UTF-8";:host{display:contents}.question{margin:0;color:var(--color-navy-300);font-size:var(--font-size-sm);line-height:var(--line-height-md)}.rate{display:flex;flex-direction:column;gap:var(--space-xs)}.values{display:grid;grid-template-columns:repeat(10,1fr);gap:var(--space-xs)}.values button{all:unset;display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:var(--radius-md);border:1px solid var(--color-gray-300);background:var(--color-gray-100);color:var(--color-navy-300);font-family:var(--font-family);font-size:var(--font-size-sm);font-weight:var(--font-weight-medium);aspect-ratio:1;transition:background .15s,border-color .15s,color .15s}.values button:hover{border-color:var(--color-green-300);background:var(--color-green-100)}.values button.active{border-color:var(--color-green-300);background:var(--color-green-300);color:var(--color-white-100)}.labels{display:flex;justify-content:space-between;color:var(--color-gray-500);font-size:var(--font-size-xs)}.comment{display:flex;flex-direction:column;gap:var(--space-sm)}.comment p{margin:0;color:var(--color-navy-300);font-size:var(--font-size-sm);line-height:var(--line-height-md)}.comment.hidden{display:none}';var qs=Object.defineProperty,Gs=Object.getOwnPropertyDescriptor,Pe=(t,e,i,o)=>{for(var s=o>1?void 0:o?Gs(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&qs(e,i,s),s};const Vs=["RATING_1","RATING_2","RATING_3","RATING_4","RATING_5","RATING_6","RATING_7","RATING_8","RATING_9","RATING_10"],Ys=["RATING_9","RATING_10"],Ws="What can we do to improve your score?",Ks="What's the main reason for your score?";let $t=class extends w{constructor(){super(...arguments),this.subtype=null}async open(){await this.dialog.open({mask:!1,width:450,placement:"corner-bottom-left"})}handleRatingSelect(t){this.subtype=t}handleClose(){this.dispatchEvent(new CustomEvent("close"))}async handleSubmit(t){if(t.preventDefault(),!this.subtype)return;const e=(this.textarea?.value??"").trim();await this.dialog.close(),this.dispatchEvent(new CustomEvent("result",{detail:{subtype:this.subtype,comment:e}}))}render(){const t=Ys.includes(this.subtype??"")?Ks:Ws,e=this.subtype!==null;return n`
            <li-dialog
                id="dialog"
                heading="Share your thoughts"
                closable="BUTTON"
                .actions=${[]}
                @close=${this.handleClose}
            >
                <p class="question">
                    On a scale of 1 to 10, how likely are you to recommend our library to a friend?
                </p>

                <div class="rate">
                    <div class="values">
                        ${Vs.map((i,o)=>n`
                                <button
                                    class=${R({active:this.subtype===i})}
                                    type="button"
                                    @click=${()=>this.handleRatingSelect(i)}
                                >
                                    ${o+1}
                                </button>
                            `)}
                    </div>
                    <div class="labels">
                        <span>Not at all likely</span>
                        <span>Extremely likely</span>
                    </div>
                </div>

                <div class=${R({comment:!0,hidden:!e})}>
                    <p>${t}</p>
                    <li-field class="auto">
                        <li-textarea placeholder="Type here..."></li-textarea>
                    </li-field>
                    <li-button class="primary md" @click=${this.handleSubmit}>Submit</li-button>
                </div>
            </li-dialog>
        `}};$t.styles=x(Ns);Pe([E("#dialog",!0)],$t.prototype,"dialog",2);Pe([E("li-textarea")],$t.prototype,"textarea",2);Pe([f()],$t.prototype,"subtype",2);$t=Pe([S("li-dialog-library-rating")],$t);async function ka(t){const e=new $t;await O.instance.assign(e),e.addEventListener("close",()=>{O.instance.release(e)}),e.addEventListener("result",i=>{t(i.detail)}),e.open()}const Zs='@charset "UTF-8";:host{display:contents}';var Qs=Object.defineProperty,Xs=Object.getOwnPropertyDescriptor,ft=(t,e,i,o)=>{for(var s=o>1?void 0:o?Xs(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&Qs(e,i,s),s};let X=class extends w{constructor(){super(...arguments),this.icon=void 0,this.selectedSubtype=null,this.radioError=!1,this.comment="",this.submitting=!1}async open(){this.selectedSubtype=null,this.radioError=!1,this.comment="",this.submitting=!1,await this.dialog.open({mask:!0,width:450})}handleRadioChange(t){this.selectedSubtype=t.detail.value,this.radioError=!1}handleTextareaChange(t){this.comment=t.detail.value}async handleAction(t){if(t.detail.name==="report"){if(!this.selectedSubtype){this.radioError=!0;return}if(this.submitting||!this.httpService||!this.icon)return;this.submitting=!0;try{await this.httpService.post("/api/feedback/icon-issue",{subtype:this.selectedSubtype,...this.comment.trim()?{comment:this.comment.trim()}:{},family:this.icon.family,style:this.icon.style,iconIndex:this.icon.index},{rawResponse:!0}),this.toastService?.show("Thank you for your feedback!"),this.dialog.close()}catch{this.toastService?.show("Failed to submit report. Please try again.")}finally{this.submitting=!1}}}handleClose(){this.dispatchEvent(new CustomEvent("close"))}render(){const t="Report an issue",e=[{label:this.submitting?"Sending...":"Report",name:"report"}],i=[{value:"ICON_ISSUE_COLOR",title:"Color adjustment doesn't work"},{value:"ICON_ISSUE_ANIMATION",title:"Problem with animation"},{value:"ICON_ISSUE_DESIGN",title:"Problem with design"},{value:"ICON_ISSUE_SOURCE",title:"Problem with source files"},{value:"ICON_ISSUE_MATCH",title:"Icon name doesn't match the visual"},{value:"ICON_ISSUE_OTHER",title:"Other"}];return n`
            <li-dialog
                id="dialog"
                .actions=${e}
                .heading=${t}
                @close=${this.handleClose}
                @action=${this.handleAction}
            >
                Have you experienced an issue with this icon? Let us know the details.

                <li-radio-group
                    class=${R({error:this.radioError})}
                    .options=${i}
                    .value=${this.selectedSubtype}
                    @change=${this.handleRadioChange}
                ></li-radio-group>

                <li-field class="auto">
                    <li-textarea
                        placeholder="Additional comment"
                        .value=${this.comment}
                        @change=${this.handleTextareaChange}
                    ></li-textarea>
                </li-field>
            </li-dialog>
        `}};X.styles=x(Zs);ft([c({type:Object})],X.prototype,"icon",2);ft([E("#dialog",!0)],X.prototype,"dialog",2);ft([c({attribute:!1})],X.prototype,"httpService",2);ft([c({attribute:!1})],X.prototype,"toastService",2);ft([f()],X.prototype,"selectedSubtype",2);ft([f()],X.prototype,"radioError",2);ft([f()],X.prototype,"comment",2);ft([f()],X.prototype,"submitting",2);X=ft([S("li-dialog-report")],X);async function Oa(t,e,i){const o=new X;o.icon=t,o.httpService=e,o.toastService=i,await O.instance.assign(o),o.addEventListener("close",()=>{O.instance.release(o)}),o.open()}const Js='@charset "UTF-8";:host{display:contents}';var to=Object.defineProperty,eo=Object.getOwnPropertyDescriptor,vt=(t,e,i,o)=>{for(var s=o>1?void 0:o?eo(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&to(e,i,s),s};const di="state-request/chat",io=[{value:"STATE_REQUEST_IN",title:"In",description:"This animation presents the appearance of an icon.",state:"in-reveal"},{value:"STATE_REQUEST_HOVER",title:"Hover",description:"This animation begins quickly and gradually slows down.",state:"hover-pinch"},{value:"STATE_REQUEST_MORPH",title:"Morph",description:"This animation transitions smoothly between two forms.",state:"morph-change"},{value:"STATE_REQUEST_LOOP",title:"Loop",description:"This animation plays smoothly at a constant speed.",state:"loop-cycle"}];let J=class extends w{constructor(){super(...arguments),this.icon=void 0,this.selectedSubtype=null,this.radioError=!1,this.comment="",this.submitting=!1}async open(){this.selectedSubtype=null,this.radioError=!1,this.comment="",this.submitting=!1,await this.dialog.open({mask:!0,width:450})}handleRadioChange(t){this.selectedSubtype=t.detail.value,this.radioError=!1}handleTextareaChange(t){this.comment=t.detail.value}async handleAction(t){if(t.detail.name==="cancel"){this.dialog.close();return}if(t.detail.name==="send"){if(!this.selectedSubtype){this.radioError=!0;return}if(this.submitting||!this.httpService||!this.icon)return;this.submitting=!0;try{await this.httpService.post("/api/feedback/state-request",{subtype:this.selectedSubtype,...this.comment.trim()?{comment:this.comment.trim()}:{},family:this.icon.family,style:this.icon.style,iconIndex:this.icon.index},{rawResponse:!0}),this.toastService?.show("Thank you! We will consider adding this animation."),this.dialog.close()}catch{this.toastService?.show("Failed to submit request. Please try again.")}finally{this.submitting=!1}}}handleClose(){this.dispatchEvent(new CustomEvent("close"))}render(){const t=[{label:"Cancel",name:"cancel"},{label:this.submitting?"Sending...":"Send",name:"send"}];return n`
            <li-dialog
                id="dialog"
                heading="Request new animation state"
                .actions=${t}
                @close=${this.handleClose}
                @action=${this.handleAction}
            >
                <li-radio-group
                    class=${R({lg:!0,error:this.radioError})}
                    .value=${this.selectedSubtype}
                    @change=${this.handleRadioChange}
                >
                    ${io.map(e=>n`
                            <li-radio-option value=${e.value}>
                                <li-state-preview
                                    slot="preview"
                                    src=${D(`/assets/icons/${di}.json`)}
                                    fallback=${D(`/assets/icons/${di}.svg`)}
                                    state=${e.state}
                                    target="li-radio-option"
                                ></li-state-preview>
                                ${e.title}
                                <span slot="description">${e.description}</span>
                            </li-radio-option>
                        `)}
                </li-radio-group>

                <li-field class="auto">
                    <li-textarea
                        placeholder="Describe motion so we can react faster."
                        .value=${this.comment}
                        @change=${this.handleTextareaChange}
                    ></li-textarea>
                </li-field>
            </li-dialog>
        `}};J.styles=x(Js);vt([E("#dialog",!0)],J.prototype,"dialog",2);vt([c({type:Object})],J.prototype,"icon",2);vt([c({attribute:!1})],J.prototype,"httpService",2);vt([c({attribute:!1})],J.prototype,"toastService",2);vt([f()],J.prototype,"selectedSubtype",2);vt([f()],J.prototype,"radioError",2);vt([f()],J.prototype,"comment",2);vt([f()],J.prototype,"submitting",2);J=vt([S("li-dialog-state-request")],J);async function Ra(t,e,i){const o=new J;o.icon=t,o.httpService=e,o.toastService=i,await O.instance.assign(o),o.addEventListener("close",()=>{O.instance.release(o)}),o.open()}const so='@charset "UTF-8";:host{display:none}@media(max-width:991px){:host{display:block}}.row{display:flex;flex-direction:row;align-items:center;gap:var(--space-sm);box-sizing:border-box;width:100%;height:3rem;padding:0 var(--space-md);background:var(--color-white-100);border:0;border-bottom:1px solid var(--color-gray-300);color:var(--color-green-300);font-family:var(--font-family);font-size:var(--font-size-md);font-weight:var(--font-weight-medium);cursor:pointer;-webkit-user-select:none;user-select:none}';var oo=Object.defineProperty,ro=Object.getOwnPropertyDescriptor,Ti=(t,e,i,o)=>{for(var s=o>1?void 0:o?ro(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&oo(e,i,s),s};let ye=class extends w{constructor(){super(...arguments),this.label="Back"}render(){return n`
            <button class="row" @click=${()=>this.dispatchEvent(new CustomEvent("back"))}>
                <li-icon class=" green arrow" icon="ui/arrow-back" target=".row"></li-icon>
                <span>${this.label}</span>
            </button>
        `}};ye.styles=x(so);Ti([c({type:String})],ye.prototype,"label",2);ye=Ti([S("li-editor-back")],ye);const ao='@charset "UTF-8";:host{display:flex;flex-direction:row;box-sizing:border-box;align-items:center;color:var(--color-white-100);font-weight:500;position:relative;cursor:pointer;--progress: 0%}:host div:first-of-type{border-top-left-radius:var(--radius-md);border-bottom-left-radius:var(--radius-md)}:host div:last-of-type{border-top-right-radius:var(--radius-md);border-bottom-right-radius:var(--radius-md)}.export{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;padding:0 var(--space-md);text-align:center;background:var(--color-green-300);height:40px}.export:hover{background:var(--color-green-500)}.export:active{background:var(--color-green-700)}:host(.busy) .export{background:linear-gradient(90deg,var(--color-green-300) 0%,var(--color-green-300) 50%,var(--color-green-500) 50%);background-size:200% 100%;background-position:calc(-1 * var(--progress, 0%))}:host(.busy) .export:after{display:block;content:var(--progress, 0%)}.more{display:flex;flex-direction:row;align-items:center;justify-content:center;background:var(--color-green-300);height:40px;aspect-ratio:1;border-left:1px solid var(--color-white-100)}.more:hover{background:var(--color-green-500)}.more:active{background:var(--color-green-700)}li-list{display:none}';var no=Object.defineProperty,lo=Object.getOwnPropertyDescriptor,Lt=(t,e,i,o)=>{for(var s=o>1?void 0:o?lo(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&no(e,i,s),s};const co="More formats",ho=[{title:"Animated",options:[{value:"lottie",title:"Lottie"},{value:"gif",title:"GIF"},{value:"mp4",title:"MP4"},{value:"webp",title:"WEBP"},{value:"apng",title:"APNG"}]},{title:"Static",options:[{value:"svg",title:"SVG"},{value:"png",title:"PNG"}]},,{title:"Source",options:[{value:"aep",title:"AEP"},{value:"mogrt",title:"MOGRT"}]}];let dt=class extends w{constructor(){super(...arguments),this.progress=null,this.more=!1,this.selected=!1,this.format="lottie",this.formats=ho,this.timer=null,this._popover=Se()}finish(){this.timer&&(clearTimeout(this.timer),this.timer=null),this.progress=1,this.requestUpdate(),this.timer=setTimeout(()=>{this.progress=null,this.requestUpdate()},500)}updated(t){super.update(t),t.has("progress")&&(this.progress!==null?(this.classList.add("busy"),this.style.setProperty("--progress",`${this.progress*100}%`),this.setAttribute("inert","")):(this.classList.remove("busy"),this.style.setProperty("--progress","0%"),this.removeAttribute("inert")))}actionExport(){this.dispatchEvent(new CustomEvent("export",{detail:{format:this.format}}))}actionFormat(){this.openPopover(),this.dispatchEvent(new CustomEvent("more"))}openPopover(){this._popover.open(this)}formatChange(t){this._popover.close(),this.format=t.detail.value,this.notifyChange()}notifyChange(){const t=new CustomEvent("change",{detail:{value:this.format}});this.dispatchEvent(t)}render(){const t=this.more?n`
            <div class="more" @click=${this.actionFormat} ${U(co)}>
                <li-pictogram icon="arrowDown"></li-pictogram>
            </div>
            <li-list 
                class="shadow"
                @change=${this.formatChange}
                .selected=${this.format}
                .options=${this.formats} 
                ${$e(this._popover)}></li-list>
        `:null;return n`
            <div class="export" @click=${this.actionExport}>
                ${this.progress!==null?this.progressLabel:this.formatLabel}
            </div>

            ${t}
        `}get progressLabel(){return this.progress!==null?`${Math.round(this.progress*100)}%`:""}get formatLabel(){let t="Export";switch(this.format){case"gif":return`${t} GIF`;case"svg":return`${t} SVG`;case"png":return`${t} PNG`;case"lottie":return`${t} Lottie`;case"mp4":return`${t} MP4`;case"webp":return`${t} WEBP`;case"apng":return`${t} APNG`;case"aep":return`${t} AEP`;case"mogrt":return`${t} MOGRT`;default:return t}}};dt.styles=x(ao);Lt([E("li-list",!0)],dt.prototype,"listComponent",2);Lt([c({type:Number})],dt.prototype,"progress",2);Lt([c({type:Boolean})],dt.prototype,"more",2);Lt([c({type:Boolean})],dt.prototype,"selected",2);Lt([c({type:String})],dt.prototype,"format",2);Lt([c({type:Array})],dt.prototype,"formats",2);dt=Lt([S("li-editor-export-button")],dt);const po='@charset "UTF-8";:host{display:none;box-sizing:border-box;padding:var(--space-xm);background:var(--color-purple-100);border-radius:var(--radius-md);font-family:var(--font-family);font-size:var(--font-size-sm);color:var(--color-navy-300);-webkit-user-select:none;user-select:none}:host([ready]){display:block}.title{font-weight:var(--font-weight-semibold);line-height:var(--line-height-md)}.subtitle{margin-top:var(--space-xs);color:var(--color-navy-300);line-height:var(--line-height-lg)}.features{display:flex;flex-direction:column;gap:var(--space-sm);margin-top:var(--space-xm);font-weight:var(--font-weight-medium)}.feature{display:flex;align-items:center;gap:var(--space-sm)}li-button{display:block;margin-top:var(--space-md)}li-pictogram{color:var(--color-purple-500)}.login{display:block;width:100%;margin-top:var(--space-sm);padding:var(--space-xs);border:none;background:none;color:var(--color-purple-500);font-family:var(--font-family);font-size:var(--font-size-sm);font-weight:var(--font-weight-medium);text-align:center;cursor:pointer}';var uo=Object.defineProperty,mo=Object.getOwnPropertyDescriptor,Tt=(t,e,i,o)=>{for(var s=o>1?void 0:o?mo(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&uo(e,i,s),s};const go={bolt:["M11.4999 2.47442C12.5971 1.35482 14.4998 2.13173 14.4998 3.69933V9.50021H20.1196C21.6702 9.50021 22.4548 11.3676 21.3695 12.475L12.4997 21.5259C11.4025 22.6455 9.49982 21.8686 9.49982 20.301V14.5002H3.87989C2.32937 14.5001 1.54482 12.6327 2.63009 11.5253L11.4999 2.47442ZM12.9998 3.69933C12.9998 3.47541 12.7279 3.36439 12.5712 3.52433L3.70138 12.5752C3.54638 12.7334 3.65844 13.0001 3.87989 13.0002H10.2498C10.664 13.0002 10.9998 13.336 10.9998 13.7502V20.301C10.9998 20.5249 11.2716 20.6359 11.4283 20.476L20.2983 11.4251C20.4532 11.2669 20.3411 11.0002 20.1196 11.0002H13.7498C13.3356 11.0002 12.9998 10.6644 12.9998 10.2502V3.69933Z"],download:["M8 12C8.26345 12 8.50801 12.1384 8.64355 12.3643L9.9248 14.5H14.0752L15.3564 12.3643C15.492 12.1384 15.7366 12 16 12H21.25C21.6642 12 22 12.3358 22 12.75V18.25C22 19.2165 21.2165 20 20.25 20H3.75C2.7835 20 2 19.2165 2 18.25V12.75C2 12.3358 2.33579 12 2.75 12H8ZM3.5 18.25C3.5 18.3881 3.61193 18.5 3.75 18.5H20.25C20.3881 18.5 20.5 18.3881 20.5 18.25V13.5H16.4248L15.1436 15.6357C15.008 15.8616 14.7634 16 14.5 16H9.5C9.23655 16 8.99199 15.8616 8.85645 15.6357L7.5752 13.5H3.5V18.25Z","M12 1C12.4142 1.00003 12.75 1.33581 12.75 1.75V9.43945L14.7197 7.46973C15.0126 7.17686 15.4874 7.17684 15.7803 7.46973C16.0731 7.76261 16.0731 8.23739 15.7803 8.53027L12.5303 11.7803C12.2374 12.0732 11.7626 12.0731 11.4697 11.7803L8.21973 8.53027C7.92683 8.23738 7.92683 7.76262 8.21973 7.46973C8.51262 7.17686 8.98739 7.17684 9.28027 7.46973L11.25 9.43945V1.75C11.25 1.33579 11.5858 1 12 1Z"],image:["M16.7195 3.21966C17.8406 2.0985 19.6587 2.09881 20.78 3.21966C21.9013 4.34098 21.9013 6.15889 20.78 7.28021L12.6736 15.3867C12.7224 15.6672 12.7498 15.9554 12.7498 16.2499V16.4218C12.7498 19.1161 10.6813 21.3593 7.99585 21.5771L2.8103 21.997C2.56346 22.0169 2.32251 21.9141 2.16675 21.7216C2.01102 21.529 1.95985 21.2714 2.031 21.0341L2.52807 19.3779C2.67489 18.8885 2.74975 18.38 2.74975 17.8691V16.2499C2.74975 13.4886 4.98846 11.2501 7.74975 11.2499C8.04444 11.2499 8.33332 11.2762 8.61401 11.3251L16.7195 3.21966ZM7.74975 12.7499C5.81689 12.7501 4.24975 14.317 4.24975 16.2499V17.8691C4.24975 18.5259 4.15332 19.1794 3.9646 19.8085L3.78296 20.414L7.87475 20.082C9.7813 19.9273 11.2498 18.3347 11.2498 16.4218V16.2499C11.2498 14.3169 9.68275 12.7499 7.74975 12.7499ZM10.1804 11.8798C10.9936 12.333 11.6657 13.0071 12.1189 13.8203L13.6892 12.2499L11.7498 10.3105L10.1804 11.8798ZM19.7195 4.28021C19.1839 3.74514 18.3154 3.74483 17.78 4.28021L12.8103 9.24994L14.7498 11.1894L19.7195 6.21966C20.255 5.68413 20.255 4.81574 19.7195 4.28021Z"],shield:["M15.2196 9.21963C15.5125 8.92676 15.9875 8.92677 16.2804 9.21963C16.5733 9.51252 16.5733 9.98748 16.2804 10.2804L11.7804 14.7804C11.4875 15.0733 11.0125 15.0733 10.7196 14.7804L8.21963 12.2804L8.19307 12.2523C7.92709 11.9579 7.9359 11.5034 8.21963 11.2196C8.50336 10.9359 8.95793 10.9271 9.25234 11.1931L9.28037 11.2196L11.25 13.1893L15.2196 9.21963Z","M19.2514 3C20.2178 3.00002 21.0014 3.78351 21.0014 4.75V13.0309C21.0014 15.4454 19.7116 17.6761 17.6189 18.8808L12.3742 21.9C12.1426 22.0333 11.8574 22.0334 11.6258 21.9L6.38203 18.8809C4.28965 17.6762 3.00001 15.4456 3 13.0312V4.75C3 3.7835 3.7835 3 4.75 3H19.2514ZM4.75 4.5C4.61193 4.5 4.5 4.61193 4.5 4.75V13.0312C4.50001 14.909 5.50306 16.6439 7.13047 17.5809L12 20.3845L16.8706 17.5808C18.4982 16.6438 19.5014 14.9089 19.5014 13.0309V4.75C19.5014 4.61194 19.3894 4.50002 19.2514 4.5H4.75Z"],calendar:["M 3.75,7 A 0.75,0.75 0 0 0 3,7.75 0.75,0.75 0 0 0 3.75,8.5 h 16.5 A 0.75,0.75 0 0 0 21,7.75 0.75,0.75 0 0 0 20.25,7 Z","M 8,1.25 A 0.75,0.75 0 0 0 7.25,2 V 4 A 0.75,0.75 0 0 0 8,4.75 0.75,0.75 0 0 0 8.75,4 V 2 A 0.75,0.75 0 0 0 8,1.25 Z","M 16,1.25 A 0.75,0.75 0 0 0 15.25,2 V 4 A 0.75,0.75 0 0 0 16,4.75 0.75,0.75 0 0 0 16.75,4 V 2 A 0.75,0.75 0 0 0 16,1.25 Z","M 4.75,3.5 C 3.7923821,3.5 3,4.2923821 3,5.25 v 14 C 3,20.207623 3.7924002,21 4.75,21 h 14.5 C 20.207605,21 21,20.207605 21,19.25 v -14 C 21,4.2924002 20.207623,3.5 19.25,3.5 Z m 0,1.5 h 14.5 c 0.146977,0 0.25,0.1030398 0.25,0.25 v 14 c 0,0.146995 -0.103005,0.25 -0.25,0.25 H 4.75 C 4.6030398,19.5 4.5,19.396977 4.5,19.25 v -14 C 4.5,5.1030579 4.6030579,5 4.75,5 Z","m 9.75,11 a 0.75,0.75 0 0 0 -0.53125,0.21875 0.75,0.75 0 0 0 0,1.0625 L 10.9375,14 9.21875,15.71875 a 0.75,0.75 0 0 0 0,1.0625 0.75,0.75 0 0 0 1.0625,0 L 12,15.0625 l 1.71875,1.71875 a 0.75,0.75 0 0 0 1.0625,0 0.75,0.75 0 0 0 0,-1.0625 L 13.0625,14 14.78125,12.28125 a 0.75,0.75 0 0 0 0,-1.0625 0.75,0.75 0 0 0 -1.0625,0 L 12,12.9375 10.28125,11.21875 A 0.75,0.75 0 0 0 9.75,11 Z"]},fo={icon:{title:"This icon is PRO",withIconsCount:!0,features:[{icon:"bolt",text:"Powerful library features"},{icon:"shield",text:"No attribution required"},{icon:"calendar",text:"Cancel anytime"}]},collection:{title:"Bulk export is PRO",withIconsCount:!1,features:[{icon:"download",text:"Save hours with bulk export"},{icon:"image",text:"Edit once, apply to all"},{icon:"shield",text:"No attribution required"}]}};let pt=class extends w{constructor(){super(...arguments),this.variant="icon",this.highlights=null,this.ready=!1}connectedCallback(){if(super.connectedCallback(),!this.httpService){this.ready=!0;return}Ri(this.httpService).then(t=>{this.highlights=t}).catch(()=>{}).finally(()=>{this.ready=!0})}handleGetPro(){this.navigationService?.navigatePage(wt.PRICING)}handleLogin(){this.navigationService?.navigatePage(wt.LOGIN)}render(){const t=fo[this.variant],e=this.sessionService?.isAuthenticated??!1;return n`
            <div class="title">${t.title}</div>
            ${t.withIconsCount&&this.highlights?n`<div class="subtitle">
                          Unlock this icon and ${Ae(this.highlights.iconsCount)}+ more
                      </div>`:T}
            <div class="features">
                ${t.features.map(i=>n`
                        <div class="feature">
                            <li-pictogram .paths=${go[i.icon]} class="sm"></li-pictogram>
                            ${i.text}
                        </div>
                    `)}
            </div>
            <li-button class="pro" @click=${this.handleGetPro}>Unlock PRO</li-button>
            ${e?T:n`<button class="login" @click=${this.handleLogin}>
                          Already PRO? Log in
                      </button>`}
        `}};pt.styles=x(po);Tt([c({type:String})],pt.prototype,"variant",2);Tt([H({context:Ce,subscribe:!0})],pt.prototype,"navigationService",2);Tt([H({context:je,subscribe:!0})],pt.prototype,"sessionService",2);Tt([H({context:Ee,subscribe:!0})],pt.prototype,"httpService",2);Tt([f()],pt.prototype,"highlights",2);Tt([c({type:Boolean,reflect:!0})],pt.prototype,"ready",2);pt=Tt([S("li-editor-upsell-panel")],pt);const vo='@charset "UTF-8";:host{display:flex;flex-direction:row;align-items:center;gap:var(--space-xs);height:4rem;overflow:hidden;padding:0 var(--space-md);font-family:var(--font-family)}.left{display:flex;flex-direction:row;align-items:center;gap:var(--space-xs);flex:1;min-width:0}.text{display:flex;flex-direction:column;flex:1;min-width:0}.right{display:flex;flex-direction:row;align-items:center}.title-container,.subtitle-container{display:flex;align-items:center;width:100%;gap:var(--space-xs)}.title-text,.subtitle-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex-shrink:1}.title-text{color:var(--color-navy-300);font-size:var(--font-size-md);font-weight:var(--font-weight-semibold);line-height:var(--line-height-md)}.subtitle-text{color:var(--color-gray-500);font-size:var(--font-size-xm);font-weight:var(--font-weight-medium);line-height:var(--line-height-lg)}.pro{flex-shrink:0}';var yo=Object.defineProperty,bo=Object.getOwnPropertyDescriptor,ke=(t,e,i,o)=>{for(var s=o>1?void 0:o?bo(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&yo(e,i,s),s};let Bt=class extends w{constructor(){super(...arguments),this.title="Title",this.subtitle="",this.premium=!1}render(){const t=this.premium?n`<li-badge class="pro">pro</li-badge>`:null,e=this.title;return n`
            <div class="left">
                <slot name="before"></slot>
                <div class="text">
                    <div class="title-container">
                        <span class="title-text" ${U(e,{whenTruncated:!0})}
                            >${e}</span
                        >
                        ${t}
                    </div>
                    ${this.subtitle?n`<div class="subtitle-container">
                              <span class="subtitle-text">${this.subtitle}</span>
                          </div>`:null}
                </div>
            </div>
            <div class="right">
                <slot></slot>
            </div>
        `}};Bt.styles=x(vo);ke([c({type:String})],Bt.prototype,"title",2);ke([c({type:String})],Bt.prototype,"subtitle",2);ke([c({type:Boolean})],Bt.prototype,"premium",2);Bt=ke([S("li-editor-header")],Bt);const wo='@charset "UTF-8";:host{display:flex;align-items:center;flex-direction:column;justify-content:center;box-sizing:border-box;border-radius:var(--radius-md);position:relative;height:calc(var(--preview-size) + 16px + var(--space-xs));--preview-size: 128px;--default-background: repeating-conic-gradient( rgba(0, 0, 0, .05) 0% 25%, var(--color-white-100) 0% 50% ) 50% / 16px 16px}:host(.light){--default-background: repeating-conic-gradient( rgba(0, 0, 0, .25) 0% 25%, rgba(0, 0, 0, .35) 0% 50% ) 50% / 16px 16px}.icon{display:block;width:var(--preview-size);height:var(--preview-size);background:var(--background, var(--default-background))}lord-icon,::slotted(img){display:block;width:inherit;height:inherit}.slider{display:block;width:100%}.slider li-editor-slider{flex:1}.hidden{display:none}';var xo=Object.defineProperty,So=Object.getOwnPropertyDescriptor,tt=(t,e,i,o)=>{for(var s=o>1?void 0:o?So(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&xo(e,i,s),s};const $o=2;let j=class extends w{constructor(){super(...arguments),this.sequence="",this.state="",this.sections=[],this.stroke=$o,this.background="",this.colors=[],this.format="gif",this.speed=1}updated(t){if(t.has("background")&&this.style.setProperty("--background",this.background),t.has("colors")){const i=this.colors.reduce((s,r)=>s&&Si(r.color),!0),o=this.colors.reduce((s,r)=>s&&$i(r.color,.35),!0);i&&o?(this.classList.add("dark"),this.classList.remove("light")):(this.classList.toggle("light",i),this.classList.toggle("dark",o))}const e=["icon","state","sequence","animation","speed","format"];for(const i of e)if(t.has(i)){this.refresh();break}}refresh(){this.icon&&(this.sliderElement?.stop(),this.iconElement.icon=this.icon,this.iconElement.state=this.state,this.sequence?(this.iconElement.setAttribute("trigger","sequence"),this.iconElement.setAttribute("speed",""+this.speed),this.iconElement.setAttribute("sequence",this.sequence)):this.iconElement.trigger="last-frame",this.iconElement?.ready&&this.handleReady())}handleReady(){this.sliderElement?.start(this.iconElement)}togglePlayPause(){this.sliderElement?.togglePlayPause()}seekBy(t){this.sliderElement?.seekBy(t)}render(){const t=this.sections.length>0?n`
                      <div class="slider">
                          <li-editor-slider .sections=${this.sections}></li-editor-slider>
                      </div>
                  `:null;return n`
            <div class="icon">
                <lord-icon
                    @ready=${this.handleReady}
                    .stroke=${this.stroke}
                    .colors=${this.parsedColors}
                ></lord-icon>
            </div>

            ${t}
        `}get parsedColors(){return this.colors.map(t=>`${t.name}:${t.color}`).join(",")}};j.styles=x(wo);tt([c({type:Object})],j.prototype,"icon",2);tt([c()],j.prototype,"sequence",2);tt([c()],j.prototype,"state",2);tt([c({type:Array})],j.prototype,"sections",2);tt([c({type:Number})],j.prototype,"stroke",2);tt([c()],j.prototype,"background",2);tt([c({type:Array})],j.prototype,"colors",2);tt([c({type:String})],j.prototype,"format",2);tt([c({type:Number})],j.prototype,"speed",2);tt([E("lord-icon",!0)],j.prototype,"iconElement",2);tt([E("li-editor-slider",!1)],j.prototype,"sliderElement",2);j=tt([S("li-editor-preview")],j);const Co='@charset "UTF-8";:host{display:block}#slider{display:flex;flex-direction:row;align-items:center;flex:1;position:relative;height:34px;margin:0 2px;cursor:pointer;--editor-sections-progress: 0%}.line{height:34px;color:var(--color-green-100);width:20px;position:relative}.line:after{display:block;content:"";position:absolute;left:0;top:16.5px;width:100%;height:2px;background-color:currentColor;z-index:1}.line.animation:after{color:var(--color-green-250)}.line.first:after{border-top-left-radius:2px;border-bottom-left-radius:2px}.line.last:after{border-top-right-radius:2px;border-bottom-right-radius:2px}#knob{position:absolute;left:var(--editor-sections-progress);top:10.5px;z-index:2;background:var(--color-navy-300);transform:translate(-50%);border-radius:2px;width:2px;height:11px;transform:translate(-2px);pointer-events:none;border:2px solid var(--color-white-100)}';var Eo=Object.defineProperty,_o=Object.getOwnPropertyDescriptor,ee=(t,e,i,o)=>{for(var s=o>1?void 0:o?_o(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&Eo(e,i,s),s};let Ct=class extends w{constructor(){super(...arguments),this.value=0,this.sections=[],this.drag=!1,this.onMouseMoveBound=this.onMouseMove.bind(this),this.onMouseUpBound=this.onMouseUp.bind(this)}disconnectedCallback(){this.cleanupDragListeners(),super.disconnectedCallback()}updated(t){t.has("value")&&this.refresh()}refresh(){const t=this.progress;this.sliderElement.style.setProperty("--editor-sections-progress",`${t*100}%`)}firstUpdated(){this.refresh()}getPositionFromClientX(t){const e=this.sliderElement.getBoundingClientRect();return Math.max(0,Math.min(1,(t-e.left)/e.width))}onMouseDown(t){t.preventDefault(),this.drag=!0,document.addEventListener("mousemove",this.onMouseMoveBound),document.addEventListener("mouseup",this.onMouseUpBound);const e=this.getPositionFromClientX(t.clientX);this.dispatchEvent(new CustomEvent("seek-begin",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("seek-change",{detail:{position:e},bubbles:!0,composed:!0}))}onMouseMove(t){if(!this.drag)return;const e=this.getPositionFromClientX(t.clientX);this.dispatchEvent(new CustomEvent("seek-change",{detail:{position:e},bubbles:!0,composed:!0}))}onMouseUp(){this.drag&&(this.cleanupDragListeners(),this.dispatchEvent(new CustomEvent("seek-end",{bubbles:!0,composed:!0})))}cleanupDragListeners(){this.drag&&(this.drag=!1,document.removeEventListener("mousemove",this.onMouseMoveBound),document.removeEventListener("mouseup",this.onMouseUpBound))}notifyValue(){const t=new CustomEvent("change",{detail:{value:this.value}});this.dispatchEvent(t)}render(){const t=this.sections.map((e,i)=>{const o={line:!0,animation:e.animation,delay:!e.animation,first:i===0,last:i===this.sections.length-1},s={width:`${e.ratio*100}%`},r=e.title;return n`
                <div ${U(r)} style=${Ft(s)} class=${R(o)}></div>
            `});return n`
            <div id="slider" @mousedown=${this.onMouseDown}>
                ${t}
                <div id="knob"></div>
            </div>
        `}get progress(){return this.value/100}};Ct.styles=x(Co);ee([E("#slider",!0)],Ct.prototype,"sliderElement",2);ee([E("#knob",!0)],Ct.prototype,"knobElement",2);ee([c({type:Number})],Ct.prototype,"value",2);ee([c({type:Array})],Ct.prototype,"sections",2);Ct=ee([S("li-editor-sections")],Ct);const Po='@charset "UTF-8";:host{display:block;color:var(--color-gray-500);font-family:var(--font-family);font-weight:var(--font-weight-medium);font-style:normal;font-size:var(--font-size-xm)}.container{display:flex;flex-direction:row;align-items:center;gap:var(--space-xs)}.slider{flex:1}';var ko=Object.defineProperty,Oo=Object.getOwnPropertyDescriptor,ie=(t,e,i,o)=>{for(var s=o>1?void 0:o?Oo(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&ko(e,i,s),s};const Ro=t=>`${Math.round(t*10)/10}s`;let Et=class extends w{constructor(){super(...arguments),this.sections=[],this.progress=0,this.duration=0,this.playing=!1,this.iconElement=null,this.progressController=null}disconnectedCallback(){this.stop(),super.disconnectedCallback()}start(t){if(this.progressController)throw new Error("Progress already initialized");this.iconElement=t,this.progressController=new Ki(this.triggerInstance,{onProgressChange:e=>{this.progress=e},onPlayingChange:e=>{this.playing=e},onDurationChange:e=>{this.duration=e}})}stop(){this.iconElement=null,this.progressController&&(this.progressController.destroy(),this.progressController=null)}togglePlayPause(){this.progressController?.togglePlayPause()}seekBy(t){if(!this.progressController)return;this.progressController.pause();const e=Math.max(0,Math.min(1,this.progress+t));this.progressController.seekTo(e)}handleSeekBegin(){this.progressController?.beginSeek()}handleSeekChange(t){this.progressController?.seekTo(t.detail.position)}handleSeekEnd(){this.progressController?.endSeek()}renderSectionsSlider(){return n`
            <li-editor-sections
                .sections=${this.sections}
                .value=${this.progress*100}
                @seek-begin=${this.handleSeekBegin}
                @seek-change=${this.handleSeekChange}
                @seek-end=${this.handleSeekEnd}
            ></li-editor-sections>
        `}render(){const t=this.renderSectionsSlider(),e=Ro(this.duration);return n`
            <div class="container">
                <li-pictogram-button
                    .icon=${this.playing?"pause":"play"}
                    @click=${this.togglePlayPause}
                ></li-pictogram-button>

                <div class="slider">${t}</div>

                <div class="legend">${e}</div>
            </div>
        `}get triggerInstance(){return this.iconElement?.triggerInstance}};Et.styles=x(Po);ie([c({type:Array})],Et.prototype,"sections",2);ie([f()],Et.prototype,"progress",2);ie([f()],Et.prototype,"duration",2);ie([f()],Et.prototype,"playing",2);Et=ie([S("li-editor-slider")],Et);const Lo='@charset "UTF-8";:host{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));column-gap:var(--space-sm);row-gap:var(--space-md)}.item{cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:var(--space-sm);min-width:0}.frame{box-sizing:border-box;display:flex;align-items:center;justify-content:center;width:100%;max-width:5rem;aspect-ratio:1;background:var(--color-gray-100);border:1px solid var(--color-gray-100);border-radius:var(--radius-md);--state-preview-size: 3.75rem}.item:not(.active):hover .frame{border-color:var(--color-gray-300)}.item.active .frame{background:var(--color-white-100);border-color:var(--color-green-300)}.item span{width:100%;color:var(--color-navy-300);font-size:var(--font-size-sm);font-weight:var(--font-weight-normal);line-height:var(--line-height-md);text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}';var To=Object.defineProperty,Do=Object.getOwnPropertyDescriptor,se=(t,e,i,o)=>{for(var s=o>1?void 0:o?Do(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&To(e,i,s),s};function Io(t){const[,...e]=t.name.split("-");return e.join("-")}function pe(t){return t.length==0?null:n`
        ${Ut(t,e=>e.name,e=>n`
                <div
                    ${U(e.name)}
                    class=${R({active:e.name==this.value,item:!0})}
                    @click=${this.select.bind(this,e)}
                >
                    <div class="frame">
                        <li-state-preview
                            .animation=${this.animation}
                            .icon=${this.icon}
                            .state=${e.name}
                            target=".item"
                        >
                        </li-state-preview>
                    </div>
                    <span>${Io(e)}</span>
                </div>
            `)}
    `}let _t=class extends w{constructor(){super(...arguments),this.items=[],this.icon=null,this.value="",this.animation=!0}select(t,e){e.preventDefault();const i=new CustomEvent("change",{detail:{value:t.name}});this.dispatchEvent(i)}render(){const{in:t=[],hover:e=[],morph:i=[],loop:o=[]}=Li(this.items);return n`
            ${pe.call(this,t)} ${pe.call(this,e)}
            ${pe.call(this,i)} ${pe.call(this,o)}
        `}};_t.styles=x(Lo);se([c({type:Array})],_t.prototype,"items",2);se([c({type:Object})],_t.prototype,"icon",2);se([c()],_t.prototype,"value",2);se([c()],_t.prototype,"animation",2);_t=se([S("li-editor-states")],_t);const zo='@charset "UTF-8";:host{display:flex;flex-direction:column;-webkit-user-select:none;user-select:none;box-sizing:border-box;overflow-y:auto}.section{display:flex;flex-direction:column;gap:var(--space-sm);padding:var(--space-sm) var(--space-md)}.section.line{border-top:1px solid var(--color-gray-300)}.body{display:flex;flex-direction:column;gap:var(--space-md);padding:var(--space-md);z-index:0}.colors-group{display:flex;flex-direction:column;gap:var(--space-sm)}.sticky{position:sticky;top:0;background:#fff;z-index:1;border-bottom:1px solid var(--color-gray-300)}.placeholder{display:flex;justify-content:center}.placeholder img{width:100%;height:auto;display:block;animation:loading-pulse 1.5s infinite}.empty{display:flex;align-items:flex-start;gap:var(--space-xs);align-self:stretch}.empty lord-icon{width:var(--icon-size-xs);height:var(--icon-size-xs)}.empty p{margin:0;color:var(--color-gray-500);font-family:var(--font-family);font-size:var(--font-size-sm);font-style:normal;font-weight:var(--font-weight-normal);line-height:var(--line-height-lg)}li-editor-header{padding:0 var(--space-sm) 0 var(--space-md)}li-animation-settings{margin:0 calc(-1 * var(--space-md));margin-top:calc(-1 * var(--space-sm))}@keyframes loading-pulse{0%{opacity:1}50%{opacity:.4}to{opacity:1}}',Ao='@charset "UTF-8";:host{display:flex;flex-direction:column;gap:var(--space-md)}.code{display:block;margin:0;padding:var(--space-md);background:var(--color-gray-100);color:var(--color-navy-300);border-radius:var(--radius-md);font-size:var(--font-size-xm);white-space:pre;overflow-x:auto;-webkit-user-select:text;user-select:text}.code::-webkit-scrollbar{height:5px;width:5px}.code::-webkit-scrollbar-thumb{background:var(--color-gray-300)}::selection{color:var(--color-navy-300);background:var(--color-green-200)}';var Mo=Object.defineProperty,Fo=Object.getOwnPropertyDescriptor,oe=(t,e,i,o)=>{for(var s=o>1?void 0:o?Fo(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&Mo(e,i,s),s};let Pt=class extends w{constructor(){super(...arguments),this.code=null,this.available=!0,this.noticeDismissed=!1,this.highlighted=null,this.highlightSeq=0}willUpdate(t){(t.has("code")||t.has("available"))&&this.updateHighlight()}async updateHighlight(){const t=++this.highlightSeq;this.highlighted=null;const e=this.available?this.code:null;if(!e)return;const i=await Bi();t===this.highlightSeq&&(this.customStyle||(this.customStyle=document.createElement("style"),this.customStyle.innerHTML=i.CSS,this.shadowRoot.appendChild(this.customStyle)),this.highlighted=i.highlight(e,"html"))}handleFeedback(){this.dispatchEvent(new CustomEvent("feedback"))}handleDismiss(){this.dispatchEvent(new CustomEvent("dismiss"))}renderNotice(){return this.noticeDismissed?T:n`
            <li-message variant="blue" stacked>
                <span>
                    We will stop supporting the HTML Embed format by the end of 2026. Existing
                    HTML embeds will continue to be hosted and work on your websites until
                    December 31, 2030. For better performance, we recommend switching to our
                    Custom Element integration. Need a specific integration? Fill out our short
                    survey and tell us what you're building.
                </span>
                <li-link slot="action" variant="blue" @click=${this.handleFeedback}>
                    Give feedback
                </li-link>
                <li-link slot="action" variant="blue" @click=${this.handleDismiss}>
                    Got it!
                </li-link>
            </li-message>
        `}render(){return!this.available||!this.code?n`
                <li-message variant="blue" stacked>
                    <span>
                        HTML embed has been discontinued for new icons. Use Lottie, SVG, or GIF
                        instead.
                    </span>
                </li-message>
            `:n`${this.renderNotice()}<pre class="code"><code class="language-html">${this.highlighted?ji(this.highlighted):this.code}</code></pre>`}};Pt.styles=x(Ao);oe([c({type:String})],Pt.prototype,"code",2);oe([c({type:Boolean})],Pt.prototype,"available",2);oe([c({type:Boolean})],Pt.prototype,"noticeDismissed",2);oe([f()],Pt.prototype,"highlighted",2);Pt=oe([S("li-html-embed-panel")],Pt);var Uo=Object.defineProperty,Bo=Object.getOwnPropertyDescriptor,_=(t,e,i,o)=>{for(var s=o>1?void 0:o?Bo(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&Uo(e,i,s),s};const pi="gif",jo=256,Ho=2;function ui(t){const{format:e,formatParams:i,...o}=t;return o}const No=[{value:"1",title:"light"},{value:"2",title:"regular"},{value:"3",title:"bold"}],qo=[{name:"goto",title:"Go to icon page",icon:"library/arrow-go"},{name:"request-state",title:"Request new state",icon:"library/request"},{name:"report",title:"Report issue",icon:"library/flag"}],Go=["1","2","3","4","5","6","7","8","9"];let C=class extends w{constructor(){super(),this.upsellOpen=!1,this.loading=!1,this.animationPlayback="continuous",this.collectionMode=!1,this.isAuthenticated=!1,this.hasPremiumAccess=!1,this.hasHtmlEmbedAccess=!1,this.htmlEmbedNoticeDismissed=!1,this._customization={},this._baseCustomization={},this._groupAnimationSettings={},this._abortController=null,this._shortcutCleanup=null,this._spacecleanup=null,this._seekLeftCleanup=null,this._seekRightCleanup=null,this._exportCleanup=null,this._collectionCleanup=null,this._stateShortcutsCleanup=null,this._exporting=!1,this.recalculate()}static registerExportHandler(t){this.exportHandler=t}static registerCollectionServices(t){this.collectionServices=t}get locked(){return!!this.icon?.premium&&!this.hasPremiumAccess}get htmlEmbedEnabled(){return this.hasHtmlEmbedAccess&&!this.collectionMode}get htmlEmbedAvailable(){return this.htmlEmbedEnabled&&!!this.icon?.key}get htmlEmbedCode(){if(this.format!=="html"||!this.icon?.key)return null;const t=this.supports;return ys(this.icon.key,{state:this.state,size:this.size,stroke:t.stroke?this.stroke:void 0,colors:t.colors?this.colors.reduce((e,i)=>(e[i.name]=i.color,e),{}):void 0})}connectedCallback(){super.connectedCallback(),this._shortcutCleanup=yt.register({key:"r",handler:()=>{this.icon&&this.reset()}}),this._spacecleanup=yt.register("space",()=>{this.icon&&this.editorPreview?.togglePlayPause()}),this._seekLeftCleanup=yt.register("meta+left",()=>{this.icon&&this.editorPreview?.seekBy(-.1)}),this._seekRightCleanup=yt.register("meta+right",()=>{this.icon&&this.editorPreview?.seekBy(.1)}),this._exportCleanup=yt.register("meta+e",()=>{this.icon&&this.export()}),this._collectionCleanup=yt.register("meta+c",()=>{this.icon&&this.isAuthenticated&&this.addToLastCollection()}),this._stateShortcutsCleanup=yt.register(Go,t=>{this.selectStateByShortcutIndex(t)})}disconnectedCallback(){super.disconnectedCallback(),this._shortcutCleanup?.(),this._shortcutCleanup=null,this._spacecleanup?.(),this._spacecleanup=null,this._seekLeftCleanup?.(),this._seekLeftCleanup=null,this._seekRightCleanup?.(),this._seekRightCleanup=null,this._exportCleanup?.(),this._exportCleanup=null,this._collectionCleanup?.(),this._collectionCleanup=null,this._stateShortcutsCleanup?.(),this._stateShortcutsCleanup=null,this._abortController&&this._abortController.abort()}async loadIcon(t,e={},i){this.upsellOpen=!1,this.format=e.format??pi,this.formatParams=e.formatParams??{},this._customization=ui(e),this._baseCustomization=structuredClone(ui(i??{})),this._abortController&&this._abortController.abort(),this._abortController=new AbortController;const o=this._abortController.signal;this.loading=!0;try{const s=D(`/icons/${t.family}/${t.style}/${t.index}-${t.name}.li`),r=await fetch(s,{signal:o});if(!r.ok)throw new Error(`Failed to fetch icon: ${r.status}`);const a=await r.text();if(o.aborted)return;this.icon=t,this.iconData=Ci(a),this.states=Ss(_e(this.iconData)),this.state=this.resolveState(e.state),this._lastState=this.state,this.state!==hi(this.states)&&(this._customization.state=this.state),this.recalculate()}catch(s){s.name!=="AbortError"&&console.error("Failed to load icon:",s)}finally{this.loading=!1}}resolveState(t){if(t&&this.states.find(e=>e.name===t))return t;if(this._lastState){if(this.states.find(o=>o.name===this._lastState))return this._lastState;const e=q(this._lastState),i=this.states.find(o=>q(o.name)===e);if(i)return i.name}return hi(this.states)}recalculate(){const t=this._customization||{};if(this.iconData){const s=Zi(this.iconData);this.colors=s.filter(r=>r.type==="color").map(r=>{const a=Ei(r.value);return{name:r.name,color:t.colors?.[a]||a,default:a}}),this.hasStroke=s.some(r=>r.name==="stroke"),this.hasColors=s.some(r=>r.type==="color"),this.hasStates=this.states.length>0}else this.colors=[],this.states=[],this.state="",this.hasStroke=!1,this.hasColors=!1,this.hasStates=!1;this.stroke=t?.stroke||Ho,this.size=t?.size||jo;const e=t?.background;this.background=e===""?null:e;const i=this._groupAnimationSettings[q(this.state)],o=rs(this.state,this.supports.loop,t?.animation,i);this.animationDelay=o.delay,this.animationSpeed=o.speed,this.animationPlayback=o.playback,!t?.animation&&i&&(this._customization.animation={playback:this.animationPlayback,delay:this.animationDelay,speed:this.animationSpeed})}clearIcon(){this._abortController&&this._abortController.abort(),this.upsellOpen=!1,this.icon=void 0,this.iconData=void 0,this._customization={},this._baseCustomization={},this.format=pi,this.formatParams={},this.recalculate()}markLoading(){this.loading=!0}reset(){this._customization=structuredClone(this._baseCustomization),this.hasStates&&(this.state=this.states.find(t=>t.default)?.name||""),this._lastState=this.state,delete this._groupAnimationSettings[q(this.state)],this.recalculate(),this.notifyCustomizationChange(),this.notifyTrack("editor_reset"),this.resetAnimationSettings()}resetAnimationSettings(){this.animationDelay=ge(q(this.state)),this.animationSpeed=1,this.animationPlayback=me(q(this.state),this.supports.loop)}async addToLastCollection(){if(!this.icon)return;const t=C.collectionServices;if(!t)return;const e=t.lastCollection.get();if(!e){t.toast.show("Select a collection first.");return}const i={index:this.icon.index,family:this.icon.family,style:this.icon.style,name:this.icon.name};await ki(t,i,e)}async export(){if(this.locked){this.upsellOpen=!0,this.scrollTop=0;return}if(!C.exportHandler)throw new Error("No export handler registered");if(!this._exporting){this._exporting=!0;try{this.exportButtonComponent.progress=0;const t=this.supports,e={icon:this.icon,iconData:this.iconData,format:this.format,formatParams:this.formatParams,params:{state:this.format==="html"?this.state:Es(this.state,t.animation),stroke:t.stroke?this.stroke:void 0,colors:t.colors?this.colors.reduce((i,o)=>(i[o.name]=o.color,i),{}):void 0,size:t.size?this.size:void 0,background:this.displayBackground||void 0,animation:t.animationSettings?{playback:this.animationPlayback,delay:this.animationDelay,speed:this.animationSpeed}:void 0}};await C.exportHandler(e,i=>{this.exportButtonComponent.progress=i})}catch(t){this.toastService?.showError(t)}finally{this._exporting=!1,this.exportButtonComponent.finish()}}}handleMoreAction(t){t.preventDefault(),t.stopPropagation();const e=t.detail.name;e==="goto"?this.dispatchEvent(new CustomEvent("goto-icon-page",{detail:{icon:this.icon}})):e==="request-state"?this.dispatchEvent(new CustomEvent("request-icon-state",{detail:{icon:this.icon},bubbles:!0,composed:!0})):e==="report"&&this.dispatchEvent(new CustomEvent("report-icon",{detail:{icon:this.icon},bubbles:!0,composed:!0}))}handleHtmlEmbedFeedback(){this.dispatchEvent(new CustomEvent("html-embed-feedback",{bubbles:!0,composed:!0}))}handleHtmlEmbedDismiss(){this.dispatchEvent(new CustomEvent("html-embed-dismiss",{bubbles:!0,composed:!0}))}changeAnimationSettings(t){this.animationPlayback=t.detail.playback,this.animationDelay=t.detail.delay,this.animationSpeed=t.detail.speed,this._customization.animation={playback:this.animationPlayback,delay:this.animationDelay,speed:this.animationSpeed},this._groupAnimationSettings[q(this.state)]={...this._customization.animation},this.notifyCustomizationChange()}changeColor(t,e){const i=e.detail.value,o=this.colors.findIndex(s=>s.default===t);o>-1&&this.colors[o].color===i||(o>-1&&(this.colors[o].color=i,this.colors=[...this.colors]),this._customization.colors||(this._customization.colors={}),this._customization.colors[t]=i,this.notifyCustomizationChange(),this.notifyTrack("editor_colors"))}changeBackground(t){const e=t.detail.value||null;ni(e,this.supports)!==this.displayBackground&&(this.background=e,this._customization.background=e,this.notifyCustomizationChange(),this.notifyTrack("editor_background"))}changeBackgroundEnabled(t){const e=t.detail.value;this.background=e?Fe:null,this._customization.background=this.background,this.notifyCustomizationChange(),this.notifyTrack("editor_background")}changeStroke(t){this.stroke=Qi(t.detail.value),this._customization.stroke=this.stroke,this.notifyCustomizationChange(),this.notifyTrack("editor_stroke")}changeState(t){if(t.detail.value===this.state)return;const e=this.state;this.state=t.detail.value,this._customization.state=this.state,this._lastState=this.state,this.applyAnimationSettingsForStateChange(e),this.notifyCustomizationChange(),this.notifyTrack("editor_state")}selectStateByShortcutIndex(t){if(!this.icon||!this.states?.length)return;const e=this.states[t];if(!e||e.name===this.state)return;const i=this.state;this.state=e.name,this._customization.state=this.state,this._lastState=this.state,this.applyAnimationSettingsForStateChange(i),this.notifyCustomizationChange(),this.notifyTrack("editor_state")}applyAnimationSettingsForStateChange(t){const e=q(t),i=q(this.state);let o=!1;if(i!==e){const s=this._groupAnimationSettings[i];if(s){const r=Ne(i,this.supports.loop);this.animationPlayback=s.playback&&r.includes(s.playback)?s.playback:me(i,this.supports.loop),this.animationDelay=s.delay??ge(i),this.animationSpeed=s.speed??1}else this.animationPlayback=me(i,this.supports.loop),this.animationDelay=ge(i),this.animationSpeed=1,o=!0}return this._groupAnimationSettings[i]?this._customization.animation={playback:this.animationPlayback,delay:this.animationDelay,speed:this.animationSpeed}:o&&delete this._customization.animation,o}changeSize(t){this.size=+t.detail.value,this._customization.size=this.size,this.notifyCustomizationChange(),this.notifyTrack("editor_size")}changeFormat(t){const e=this.state;this.hasStates&&(this.state=this.states.find(s=>s.default)?.name||"");const i=t.detail;this.format=i.value,this.formatParams=i.params,delete this._customization.state,this._lastState=this.state,this.applyAnimationSettingsForStateChange(e)&&(this._baseCustomization.animation={...this._customization.animation}),this.dispatchEvent(new CustomEvent("format-change",{detail:{format:this.format,formatParams:this.formatParams}})),this.notifyCustomizationChange(),this.notifyTrack("editor_format")}notifyCustomizationChange(){const t=structuredClone(this._customization);this.dispatchEvent(new CustomEvent("customization-change",{detail:{customization:t}}))}notifyTrack(t){this.dispatchEvent(new CustomEvent("track",{detail:{event:t}}))}render(){if(!this.icon)return this.loading?this.renderLoadingPlaceholder():this.renderEmptyEditor();const t=this.supports,e=t.source,i=this.iconData,o=t.states?this.state:null,s=this.format,r=t.stroke?this.stroke:null,a=this.animationSpeed,l=t.colors?this.colors:[],h=this.displayBackground;let b="",p=[];if(t.animation)if(e===!0){const v=as(i,{state:s==="lottie"?o:null});b=v.sequence,p=v.sections}else{const v=ns(i,{state:this.state,playback:this.animationPlayback,delay:this.animationDelay,speed:this.animationSpeed});b=v.sequence,p=v.sections}const u=this.icon?this.icon.name:"",m=this.icon?`${this.icon.family}-${this.icon.style}-${this.icon.index}`:"",d=this.icon?.premium||!1,g=[];this.format==="html"&&g.push(n`
                <li-html-embed-panel
                    .code=${this.htmlEmbedCode}
                    .available=${this.htmlEmbedAvailable}
                    .noticeDismissed=${this.htmlEmbedNoticeDismissed}
                    @feedback=${this.handleHtmlEmbedFeedback}
                    @dismiss=${this.handleHtmlEmbedDismiss}
                ></li-html-embed-panel>
            `);const y=t.states?this.renderStatesEditor():null;y&&g.push(y),t.colors&&g.push(this.renderColorsEditor()),t.background&&g.push(this.renderBackgroundEditor()),t.stroke&&g.push(this.renderStrokeEditor()),t.size&&g.push(this.renderSizeEditor());const P=g.length>0;return g.length||g.push(this.renderEmptyEditor()),n`
            <div class="sticky">
                <li-editor-back
                    .label=${this.collectionMode?"Back to collection":"Back to library"}
                    @back=${()=>this.dispatchEvent(new CustomEvent("back"))}
                ></li-editor-back>
                <li-editor-header .title=${u} .subtitle=${m} .premium=${d}>
                    ${this.collectionMode?n`<li-icon-button
                                  icon="library/minus"
                                  ${U("Remove from collection")}
                                  @click=${()=>this.dispatchEvent(new CustomEvent("remove"))}
                              ></li-icon-button>`:n`<li-menu-button
                                  buttonClass="outline"
                                  icon="editor/plus"
                                  ${U("Collection")}
                              >
                                  ${this.isAuthenticated?n`<li-collections-menu-button-overlay
                                                slot="overlay"
                                                class="shadow"
                                                .icon=${this.icon?{index:this.icon.index,family:this.icon.family,style:this.icon.style,name:this.icon.name}:null}
                                            ></li-collections-menu-button-overlay>`:n`<li-collections-signin-overlay
                                                slot="overlay"
                                                class="shadow"
                                            ></li-collections-signin-overlay>`}
                              </li-menu-button>`}
                    <li-menu-button buttonClass="flat" icon="editor/dots" ${U("More")}>
                        <li-menu-button-overlay
                            slot="overlay"
                            class="shadow"
                            .options=${qo}
                            @action=${this.handleMoreAction}
                        ></li-menu-button-overlay>
                    </li-menu-button>
                </li-editor-header>
                <div id="preview" class="section line">
                    <li-editor-preview
                        .icon=${i}
                        .state=${o}
                        .sequence=${b}
                        .sections=${p}
                        .format=${s}
                        .stroke=${r}
                        .speed=${a}
                        .colors=${l}
                        .background=${h}
                    ></li-editor-preview>
                </div>

                <div class="section line">
                    <li-export-button
                        @export=${this.export}
                        @change=${this.changeFormat}
                        .format=${this.format}
                        .formatParams=${this.formatParams}
                        .locked=${this.locked}
                        .copyMode=${this.format==="html"}
                        .disabled=${this.upsellOpen||this.format==="html"&&!this.htmlEmbedAvailable}
                        .hideHtmlOption=${!this.htmlEmbedEnabled}
                    >
                    </li-export-button>
                </div>

                ${P?n`
                              <div class="section line">
                                  <li-label>
                                      Editor
                                      <li-button
                                          slot="suffix"
                                          class="flat sm"
                                          icon="editor/update"
                                          ?disabled=${!this.changes}
                                          @click=${this.reset}
                                          >Reset</li-button
                                      >
                                  </li-label>
                              </div>
                          `:T}
            </div>

            <div class="body">
                ${this.upsellOpen?n`<li-editor-upsell-panel variant="icon"></li-editor-upsell-panel>`:T}
                ${g}
            </div>
        `}renderStatesEditor(){const t=this.supports,e=this.animationPlayback,i=q(this.state),o=Cs(this.states,t.animation);if(!o.length||o.length===1&&!t.animation)return null;const s=t.animationSettings?n` <li-animation-settings
                  .playback=${e}
                  .trigger=${i}
                  .supportsLoop=${t.loop}
                  .delay=${this.animationDelay}
                  .speed=${this.animationSpeed}
                  @change=${this.changeAnimationSettings}
              ></li-animation-settings>`:null;return n`
            <li-field-group>
                <li-label class="sm">Animation</li-label>

                <li-editor-states
                    @change=${this.changeState}
                    .value=${this.state}
                    .items=${o}
                    .icon=${this.iconData}
                    .animation=${t.animation}
                ></li-editor-states>
            </li-field-group>
            ${s}
        `}renderColorsEditor(){return n`
            <li-field-group>
                <li-label class="sm">Colors</li-label>
                <div class="colors-group">
                    ${Ut(this.colors,t=>t.name,t=>n`
                            <li-color-field
                                .defaultValue=${t.default}
                                .value=${t.color}
                                @change=${this.changeColor.bind(this,t.default)}
                                placeholder="transparent"
                            ></li-color-field>
                        `)}
                </div>
            </li-field-group>
        `}renderBackgroundEditor(){const t=this.supports.transparent?n`<li-switch
                  .value=${this.backgroundEnabled}
                  slot="suffix"
                  class="small"
                  @change=${this.changeBackgroundEnabled}
              ></li-switch>`:null;return n`
            <li-field-group>
                <li-label class="sm">Background ${t}</li-label>
                <li-color-field
                    @change=${this.changeBackground}
                    .value=${this.displayBackground}
                    placeholder="transparent"
                ></li-color-field>
            </li-field-group>
        `}renderStrokeEditor(){return n`
            <li-field-group>
                <li-label class="sm">Stroke</li-label>
                <li-value-switch
                    @change=${this.changeStroke}
                    .value=${this.stroke}
                    .options=${No}
                ></li-value-switch>
            </li-field-group>
        `}renderSizeEditor(){return n`
            <li-field-group>
                <li-label class="sm">Icon size</li-label>
                <li-field class="sm">
                    <li-input
                        @change=${this.changeSize}
                        .value=${this.size}
                        min="8"
                        max="2048"
                        type="number"
                        suffix="px"
                    ></li-input>
                </li-field>
            </li-field-group>
        `}renderLoadingPlaceholder(){return n`
            <div class="placeholder">
                <img src=${D("/assets/pictures/editor-placeholder.svg")} alt="" />
            </div>
        `}renderEmptyEditor(){return n`
            <div class="empty">
                <lord-icon
                    trigger="hover"
                    class="current-color"
                    state="hover"
                    target=".empty"
                    .src=${D("/assets/icons/editor/info.json")}
                >
                </lord-icon>
                <p>Icons can’t be edited for source files.</p>
            </div>
        `}get changes(){const t=this._baseCustomization,e=this._customization;if((e.stroke??void 0)!==(t.stroke??void 0)||(e.background??void 0)!==(t.background??void 0)||(e.size??void 0)!==(t.size??void 0)||(e.state??void 0)!==(t.state??void 0)||(e.animation?.speed??void 0)!==(t.animation?.speed??void 0)||(e.animation?.playback??void 0)!==(t.animation?.playback??void 0))return!0;const i=e.animation?.delay,o=t.animation?.delay;if(i!==o&&(!i||!o||i.length!==o.length||i.some((l,h)=>l!==o[h])))return!0;const s=e.colors??{},r=t.colors??{},a=new Set([...Object.keys(s),...Object.keys(r)]);for(const l of a)if(s[l]!==r[l])return!0;return!1}get supports(){return _s(this.format,this.formatParams,this.hasColors,this.hasStroke,this.hasStates)}get displayBackground(){return ni(this.background,this.supports)}get backgroundEnabled(){return this.supports.transparent?this.displayBackground!==null:this.supports.background}};C.collectionServices=null;C.styles=x(zo);_([H({context:He,subscribe:!0}),c({attribute:!1})],C.prototype,"toastService",2);_([f()],C.prototype,"icon",2);_([f()],C.prototype,"iconData",2);_([f()],C.prototype,"upsellOpen",2);_([f()],C.prototype,"state",2);_([f()],C.prototype,"size",2);_([f()],C.prototype,"stroke",2);_([f()],C.prototype,"colors",2);_([f()],C.prototype,"background",2);_([f()],C.prototype,"format",2);_([f()],C.prototype,"formatParams",2);_([f()],C.prototype,"animationDelay",2);_([f()],C.prototype,"animationSpeed",2);_([f()],C.prototype,"loading",2);_([f()],C.prototype,"animationPlayback",2);_([E("li-editor-preview")],C.prototype,"editorPreview",2);_([E("li-export-button")],C.prototype,"exportButtonComponent",2);_([f()],C.prototype,"hasStates",2);_([f()],C.prototype,"hasStroke",2);_([f()],C.prototype,"hasColors",2);_([f()],C.prototype,"states",2);_([c({type:Boolean})],C.prototype,"collectionMode",2);_([c({type:Boolean})],C.prototype,"isAuthenticated",2);_([c({type:Boolean})],C.prototype,"hasPremiumAccess",2);_([c({type:Boolean})],C.prototype,"hasHtmlEmbedAccess",2);_([c({type:Boolean})],C.prototype,"htmlEmbedNoticeDismissed",2);C=_([S("li-editor")],C);const Vo='@charset "UTF-8";:host{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;gap:var(--space-xs)}.col{flex:1 1 0;min-width:0;max-width:100%;display:flex;align-items:stretch}.col>*{flex:1}.busy{display:inline-flex;padding:var(--space-xs) var(--space-xm);justify-content:center;font-weight:var(--font-weight-medium);font-size:var(--button-font-size, var(--font-size-md));font-family:var(--font-family);-webkit-user-select:none;user-select:none;line-height:var(--line-height-lg);border-radius:var(--radius-md);border:1px solid var(--color-green-300);color:var(--color-white-100);background:linear-gradient(90deg,var(--color-green-300) 0%,var(--color-green-300) 50%,var(--color-green-500) 50%);background-size:200% 100%;background-position:calc(-1 * var(--progress, 0%));overflow:hidden}li-dialog{display:none}';var Yo=Object.defineProperty,Wo=Object.getOwnPropertyDescriptor,N=(t,e,i,o)=>{for(var s=o>1?void 0:o?Wo(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&Yo(e,i,s),s};const ue="lossless",De=75;let I=class extends w{constructor(){super(),this._webpMode=ue,this._webpQuality=De,this.format="lottie",this.formatParams={},this.progress=null,this.active=!1,this.locked=!1,this.copyMode=!1,this.disabled=!1,this.hideHtmlOption=!1,this._timer=null,this._listPopover=Se({strategy:xi.SelectBottom({maxHeight:()=>window.innerHeight*.5}),onOpened:t=>{this.active=!0,t.scrollToSelected()},onClosed:()=>{this.active=!1}}),this.handleLottieOpen=this.handleLottieOpen.bind(this),this.handlePngOpen=this.handlePngOpen.bind(this),this.handleWebpOpen=this.handleWebpOpen.bind(this)}updated(t){super.update(t),t.has("progress")&&(this.progress!==null?(this.style.setProperty("--progress",`${this.progress*100}%`),this.setAttribute("inert","")):(this.style.setProperty("--progress","0%"),this.removeAttribute("inert")))}async open(){await this._listPopover.open(this,{boundary:this})}async close(){this._listPopover.close()}async finish(){this._timer&&(clearTimeout(this._timer),this._timer=null),this.progress=1,this.requestUpdate(),this._timer=setTimeout(()=>{this.progress=null,this.requestUpdate()},500)}notifyChange(){const t=new CustomEvent("change",{detail:{value:this.format,params:this.formatParams}});this.dispatchEvent(t)}formatChange(t){t.preventDefault(),this.format=t.detail.value,this.close(),this.notifyChange()}async handleLottieOpen(t){t.preventDefault(),t.stopPropagation(),await O.instance.assign(this.lottieDialog),this.lottieDialog.open({mask:!0,width:350})}async handlePngOpen(t){t.preventDefault(),t.stopPropagation(),await O.instance.assign(this.pngDialog),this.pngDialog.open({mask:!0,width:350})}async handleWebpOpen(t){t.preventDefault(),t.stopPropagation(),this._webpMode=this.formatParams.webp?.mode??ue,this._webpQuality=this.formatParams.webp?.quality??De,await O.instance.assign(this.webpDialog),this.webpDialog.open({mask:!0,width:350})}async handleDocs(t){t.preventDefault(),t.stopPropagation(),this.dispatchEvent(new CustomEvent("docs-requested",{detail:{type:"format"},bubbles:!0,composed:!0}))}export(){this.dispatchEvent(new CustomEvent("export",{}))}renderList(){const t=this.format||"",e=n`
            <span>Lottie</span>
            ${this.formatParams.lottie?n`<li-badge slot="suffix" class="outline"
                          >${this.formatParams.lottie}</li-badge
                      >`:""}
            <li-pictogram-button
                slot="suffix"
                class="sm"
                icon="settings"
                @click=${this.handleLottieOpen}
                ${U("Format settings")}
            ></li-pictogram-button>
        `,i=n`
            <span>PNG</span>
            ${this.formatParams.png?n`<li-badge slot="suffix" class="outline"
                          >${this.formatParams.png}</li-badge
                      >`:""}
            <li-pictogram-button
                slot="suffix"
                class="sm"
                icon="settings"
                @click=${this.handlePngOpen}
                ${U("Format settings")}
            ></li-pictogram-button>
        `,o=n`
            <span>WebP</span>
            ${this.formatParams.webp&&this.formatParams.webp.mode!==ue?n`<li-badge slot="suffix" class="outline"
                          >${this.formatParams.webp.mode}
                          ${this.formatParams.webp.quality}%</li-badge
                      >`:""}
            <li-pictogram-button
                slot="suffix"
                class="sm"
                icon="settings"
                @click=${this.handleWebpOpen}
                ${U("Format settings")}
            ></li-pictogram-button>
        `,s=[{title:"Animated",options:[{value:"lottie",title:e},{value:"gif",title:"GIF"},{value:"mp4",title:"MP4"},{value:"webp",title:o},{value:"apng",title:"APNG"},...this.hideHtmlOption?[]:[{value:"html",title:"HTML"}]]},{title:"Static",options:[{value:"svg",title:"SVG"},{value:"png",title:i}]},{title:"Source",options:[{value:"aep",title:"AEP"},{value:"mogrt",title:"MOGRT"}]}];return n`
            <li-list
                class="shadow compact"
                .options=${s}
                .value=${t}
                @change=${this.formatChange}
                ${$e(this._listPopover)}
            >
                <li-link slot="footer" @click=${this.handleDocs}>Learn how to use formats</li-link>
            </li-list>
        `}renderButton(){return this.progress!==null?n`<div class="busy">${this.progressLabel}</div>`:n`<li-button
            @click=${this.export}
            ?disabled=${this.disabled}
            class="${this.locked?"pro":"primary"} expand"
            >${this.copyMode?"Copy":"Export"}</li-button
        >`}renderSelect(){const t=this.formatLabel??"Select format";return n`
            <li-select-button @click=${this.open} .active=${this.active}>
                ${t}
            </li-select-button>
        `}renderLottieDialog(){const t=[{label:"Cancel",name:"cancel"},{label:"Select",name:"select"}],e=[{value:"",title:"Minified (default)",description:"Optimizes for minimal size, saving only selected animation"},{value:"raw",title:"Raw",description:"Include all icon properties, allowing you to easily switch between different animation types."}],i=()=>{console.log("Lottie dialog closed"),O.instance.release(this.lottieDialog)},o=r=>{const a=this.lottieDialog.querySelector("li-radio-group");r.detail.name==="select"&&(this.format="lottie",this.formatParams.lottie=a.value,this.requestUpdate(),this.notifyChange(),console.log("Selected Lottie format",this.formatParams)),this.lottieDialog.close()},s=this.formatParams.lottie||"";return n`
            <li-dialog
                id="lottie-dialog"
                heading="Lottie format options"
                .actions=${t}
                @close=${i}
                @action=${o}
            >
                <li-radio-group .value=${s} .options=${e}></li-radio-group>
            </li-dialog>
        `}renderPngDialog(){const t=[{label:"Cancel",name:"cancel"},{label:"Select",name:"select"}],e=[{value:"",title:"Single frame (default)"},{value:"spritesheet",title:"Sprite sheet",description:"Packaged as a single image file that tiles every animation frame together."},{value:"sequence",title:"Sequence",description:"A set of PNG files where each file represents the next frame of the animation."}],i=()=>{console.log("PNG dialog closed"),O.instance.release(this.pngDialog)},o=r=>{const a=this.pngDialog.querySelector("li-radio-group");r.detail.name==="select"&&(this.format="png",this.formatParams.png=a.value,this.requestUpdate(),this.notifyChange(),console.log("Selected PNG format",this.formatParams)),this.pngDialog.close()},s=this.formatParams.png||"";return n`
            <li-dialog
                id="png-dialog"
                heading="PNG format options"
                .actions=${t}
                @close=${i}
                @action=${o}
            >
                <li-radio-group .value=${s} .options=${e}></li-radio-group>
            </li-dialog>
        `}renderWebpDialog(){const t=[{label:"Cancel",name:"cancel"},{label:"Select",name:"select"}],e=[{value:"lossless",title:"Lossless (default)",description:"Pixel-perfect quality, larger file size."},{value:"near-lossless",title:"Near-lossless",description:"Near pixel-perfect quality with better compression than lossless."},{value:"lossy",title:"Lossy",description:"Smallest file size, with subtle visual artifacts."}],i=()=>{O.instance.release(this.webpDialog)},o=l=>{this._webpMode=l.detail.value},s=l=>{this._webpQuality=Number(l.detail.value)},r=l=>{l.detail.name==="select"&&(this.format="webp",this.formatParams.webp={mode:this._webpMode,quality:this._webpMode==="lossless"?De:this._webpQuality},this.requestUpdate(),this.notifyChange()),this.webpDialog.close()},a=this._webpMode==="lossless"?null:n`
                      <li-field-group>
                          <li-label class="sm">Quality</li-label>
                          <li-field class="sm">
                              <li-input
                                  .value=${this._webpQuality}
                                  .min=${0}
                                  .max=${100}
                                  .step=${1}
                                  type="number"
                                  suffix="%"
                                  @change=${s}
                              ></li-input>
                          </li-field>
                      </li-field-group>
                  `;return n`
            <li-dialog
                id="webp-dialog"
                heading="WebP format options"
                .actions=${t}
                @close=${i}
                @action=${r}
            >
                <li-radio-group
                    .value=${this._webpMode}
                    .options=${e}
                    @change=${o}
                ></li-radio-group>

                ${a}
            </li-dialog>
        `}render(){const t=this.renderSelect(),e=this.renderButton(),i=this.renderList(),o=this.renderLottieDialog(),s=this.renderPngDialog(),r=this.renderWebpDialog();return n`
            <div class="col">${t}</div>
            <div class="col">${e}</div>
            ${i} ${o} ${s} ${r}
        `}get progressLabel(){return this.progress!==null?`${Math.round(this.progress*100)}%`:"0%"}get formatLabel(){switch(this.format){case"gif":return"GIF";case"svg":return"SVG";case"png":return this.formatParams.png?`PNG ${this.formatParams.png}`:"PNG";case"lottie":return this.formatParams.lottie?`Lottie ${this.formatParams.lottie}`:"Lottie";case"mp4":return"MP4";case"webp":return this.formatParams.webp&&this.formatParams.webp.mode!==ue?`WebP ${this.formatParams.webp.mode} ${this.formatParams.webp.quality}%`:"WebP";case"apng":return"APNG";case"aep":return"AEP";case"mogrt":return"MOGRT";case"html":return"HTML"}}};I.styles=x(Vo);N([E("#lottie-dialog",!0)],I.prototype,"lottieDialog",2);N([E("#png-dialog",!0)],I.prototype,"pngDialog",2);N([E("#webp-dialog",!0)],I.prototype,"webpDialog",2);N([f()],I.prototype,"_webpMode",2);N([f()],I.prototype,"_webpQuality",2);N([c({type:String})],I.prototype,"format",2);N([c({type:Object})],I.prototype,"formatParams",2);N([c({type:Number})],I.prototype,"progress",2);N([c({type:Boolean,reflect:!0})],I.prototype,"active",2);N([c({type:Boolean})],I.prototype,"locked",2);N([c({type:Boolean})],I.prototype,"copyMode",2);N([c({type:Boolean})],I.prototype,"disabled",2);N([c({type:Boolean})],I.prototype,"hideHtmlOption",2);I=N([S("li-export-button")],I);const Ko='@charset "UTF-8";:host{display:flex;flex-direction:column;box-sizing:border-box;background:var(--color-white-100);border-radius:var(--radius-md);border:1px solid var(--color-gray-300);padding:var(--space-md);gap:var(--space-sm);-webkit-user-select:none;user-select:none;font-family:var(--font-family);overflow-y:auto}@media(max-width:991px){:host{padding:var(--space-xs)}:host>li-label{display:none}}:host(.shadow){box-shadow:0 5px 10px #7171821a}.section{display:grid;grid-template-columns:repeat(1,1fr);gap:var(--space-md)}@media(min-width:992px){.section{grid-template-columns:repeat(3,1fr)}}.group li-label{margin-bottom:var(--space-xs)}lord-icon,img{display:block;width:var(--icon-size-md);height:var(--icon-size-md)}@media(min-width:992px){li-list-item{width:8.75rem}}@media(max-width:991px){li-label{padding-top:var(--space-sm);padding-left:var(--space-sm);position:relative}li-label:after{content:"";position:absolute;top:0;left:calc(-1 * var(--space-xs));right:calc(-1 * var(--space-xs));height:1px;background:var(--color-gray-300)}}';var Zo=Object.defineProperty,Qo=Object.getOwnPropertyDescriptor,Ye=(t,e,i,o)=>{for(var s=o>1?void 0:o?Qo(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&Zo(e,i,s),s};let Zt=class extends w{constructor(){super(),this.items={},this.tabIndex=0}selectItem(t){this.dispatchEvent(new CustomEvent("selected",{detail:{item:t},bubbles:!0,composed:!0}))}renderStyle(t,e){const i=`/assets/icons/editor/styles-${t}-${e}`,o=()=>{this.selectItem({family:t,style:e})},s=this.selected?.family===t&&this.selected?.style===e;return n`
            <li-list-item class="capitalize" ?active=${s} @click=${o}>
                <lord-icon
                    slot="prefix"
                    src=${D(i+".json")}
                    trigger="hover"
                    loading="interaction"
                    target="li-list-item"
                >
                    <img alt="" src=${D(i+".svg")} />
                </lord-icon>
                <span>${e}</span>
            </li-list-item>
        `}renderGroup(t,e){return n`
            <div class="group">
                <li-label class="gray sm capitalize">${t}</li-label>
                ${e.map(i=>this.renderStyle(t,i))}
            </div>
        `}render(){return n`
            <li-label>Styles</li-label>
            <div class="section">
                <div class="group">
                    <li-list-item
                        class="capitalize"
                        ?active=${!this.selected}
                        @click=${()=>this.selectItem(void 0)}
                    >
                        <img
                            slot="prefix"
                            alt=""
                            src=${D("/assets/icons/editor/styles-all.svg")}
                        />
                        <span>All Styles</span>
                    </li-list-item>
                </div>
            </div>
            <div class="section">
                ${Object.entries(this.items).map(([t,e])=>this.renderGroup(t,e.map(i=>i.style)))}
            </div>
        `}};Zt.styles=x(Ko);Ye([c({type:Object})],Zt.prototype,"items",2);Ye([c({type:Object})],Zt.prototype,"selected",2);Zt=Ye([S("li-family-list")],Zt);const Xo='@charset "UTF-8";:host{display:block;position:fixed;inset:0;box-sizing:border-box;overflow-y:auto;background:var(--color-gray-100);font-family:var(--font-family);pointer-events:auto;--illustration-edge-gap: var(--space-md);--illustration-overlap: 5rem;--illustration-max-size: 30rem}.illustration-top-left,.illustration-bottom-right{position:absolute;overflow:hidden;z-index:-1;pointer-events:none;visibility:hidden;width:var(--illustration-size);height:var(--illustration-size)}.illustration-top-left.is-positioned,.illustration-bottom-right.is-positioned{visibility:visible}.illustration-top-left img,.illustration-bottom-right img{display:block;width:100%;height:100%;object-fit:contain}.illustration-top-left{top:var(--illustration-top-left-top);left:var(--illustration-top-left-left)}.illustration-bottom-right{bottom:var(--illustration-bottom-right-bottom);right:var(--illustration-bottom-right-right)}@media(max-width:1249px){.illustration-top-left,.illustration-bottom-right{display:none}}li-icon-button.close{position:absolute;top:var(--space-md);right:var(--space-md)}.content{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;box-sizing:border-box;min-height:100%;max-width:46.25rem;margin:0 auto;padding:var(--space-xl) var(--space-md);text-align:center}.content h1{margin:0;color:var(--color-navy-300);font-size:var(--font-size-xxl);font-weight:var(--font-weight-semibold);line-height:var(--line-height-sm)}@media(min-width:992px){.content h1{line-height:var(--line-height-md)}}.content .subtitle{margin:var(--space-sm) 0 var(--space-lg);color:var(--color-navy-300);font-size:var(--font-size-md)}.content .footer{margin:var(--space-lg) 0 0;color:var(--color-gray-500);font-size:var(--font-size-md)}.content .footer a{color:var(--color-navy-300);font-weight:var(--font-weight-medium);text-decoration:none}.content .footer a:hover{text-decoration:underline}.cards{position:relative;display:flex;flex-wrap:wrap;justify-content:center;gap:var(--space-md);width:100%}.card{display:flex;flex-direction:column;box-sizing:border-box;padding:var(--space-md);border-radius:var(--radius-lg);background:var(--color-white-100);border:1px solid var(--color-gray-300);text-align:left;width:100%}@media(min-width:992px){.card{width:18.125rem}}.card.pro{border:2px solid var(--color-purple-300)}@media(min-width:992px){.card.pro{width:23.125rem}}.card .header{display:flex;align-items:center;gap:var(--space-xs)}.card .header .plan{font-size:var(--font-size-lg);font-weight:var(--font-weight-semibold);color:var(--color-navy-300)}.card .price{display:flex;align-items:baseline;gap:var(--space-xs);margin:var(--space-sm) 0}.card .price .amount{font-size:var(--font-size-xxl);font-weight:var(--font-weight-semibold);color:var(--color-navy-300)}.card .price .period{color:var(--color-gray-500);font-size:var(--font-size-md)}.card .features{display:flex;flex-direction:column;gap:var(--space-xs);margin:0 0 var(--space-md);padding:0;list-style:none;color:var(--color-navy-300);font-size:var(--font-size-md)}.card .features li{display:flex;align-items:center;gap:var(--space-xs)}.card .features .check{flex:0 0 auto;color:var(--color-navy-300)}.card li-button{margin-top:auto}lord-icon{width:100%;height:100%}';var Jo=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,Dt=(t,e,i,o)=>{for(var s=o>1?void 0:o?tr(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&Jo(e,i,s),s};const mi=300,er=100;function Ie(t){const e=parseFloat(t);return t.trim().endsWith("rem")?e*parseFloat(getComputedStyle(document.documentElement).fontSize):e}const gi=["Powerful library features","No attribution required"],fi=["Unlimited downloads","Attribution required"];let nt=class extends w{constructor(){super(...arguments),this.opened=!1,this.handleWindowResize=()=>{this.illustrationResizeDebouncer=Me(this.illustrationResizeDebouncer,Mt(er),()=>this.updateIllustrationLayout())}}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.handleWindowResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.handleWindowResize),this.illustrationResizeDebouncer?.cancel()}firstUpdated(){this.updateIllustrationLayout()}updateIllustrationLayout(){const t=this.cardsElement,e=this.illustrationTopLeftElement,i=this.illustrationBottomRightElement;if(!t||!e||!i)return;const o=t.getBoundingClientRect(),s=getComputedStyle(this),r=Ie(s.getPropertyValue("--illustration-edge-gap")),a=Ie(s.getPropertyValue("--illustration-overlap")),l=Ie(s.getPropertyValue("--illustration-max-size")),h=o.left,b=window.innerWidth-o.right,p=o.top,u=window.innerHeight-o.bottom,m=Math.min(h,b)-r+a,d=Math.max(0,Math.min(m,l));this.style.setProperty("--illustration-size",`${d}px`),this.style.setProperty("--illustration-top-left-left",`${Math.max(0,h+a-d)}px`),this.style.setProperty("--illustration-top-left-top",`${Math.max(0,p+a-d)}px`),this.style.setProperty("--illustration-bottom-right-right",`${Math.max(0,b+a-d)}px`),this.style.setProperty("--illustration-bottom-right-bottom",`${Math.max(0,u+a-d)}px`),e.classList.add("is-positioned"),i.classList.add("is-positioned")}async open(){if(this.opened)return;const t=O.instance.ref({element:this,close:this.close.bind(this)},{mask:!1});this.style.zIndex=""+t,this.animation=this.animate({opacity:[0,1]},{duration:mi,easing:"ease-in-out",fill:"both"}),await new Promise(e=>{this.animation.onfinish=()=>{this.animation=void 0,e()}}),this.opened=!0}async close(){this.animation||!this.opened||(this.animation=this.animate({opacity:[1,0]},{duration:mi,easing:"ease-in-out",fill:"both"}),await new Promise(t=>{this.animation.onfinish=()=>{this.animation=void 0,t()}}),this.opened=!1,O.instance.unref(),this.dispatchEvent(new CustomEvent("close")))}handleGetPro(){this.navigationService?.navigatePage(wt.CHECKOUT_PRO_ANNUAL)}handleCompareAllPlans(t){t.preventDefault(),this.navigationService?.navigatePage(wt.PRICING)}handleContinueWithFree(){this.close()}renderProCard(){const t=this.highlights;return n`
            <div class="card pro">
                <div class="header">
                    <span class="plan">PRO</span>
                    <li-badge class="pro lg">Best for you</li-badge>
                </div>
                <div class="price">
                    ${t?n`<span class="amount"
                                  >${Hi(t.lowestMonthlyPrice)}</span
                              >`:T}
                    <span class="period">/month, billed annually</span>
                </div>
                <ul class="features">
                    ${t?this.renderFeature(`${Ae(t.iconsCount)}+ icons, no limits`):T}
                    ${this.renderFeature(gi[0])}
                    ${t?this.renderFeature(`Up to ${t.collectionsLimitPro} icon collections`):T}
                    ${this.renderFeature(gi[1])}
                </ul>
                <li-button class="pro expand" @click=${this.handleGetPro}
                    >Unlock Everything</li-button
                >
            </div>
        `}renderFeature(t){return n` <li><span class="check" aria-hidden="true">✓</span>${t}</li> `}renderFreeCard(){const t=this.highlights;return n`
            <div class="card free">
                <div class="header">
                    <span class="plan">Free</span>
                </div>
                <div class="price">
                    <span class="amount">$0</span>
                </div>
                <ul class="features">
                    ${t?this.renderFeature(`${Ae(t.freeIconsCount)} free animated icons`):T}
                    ${this.renderFeature(fi[0])}
                    ${t?this.renderFeature(`${t.collectionsLimitFree} icon collection`):T}
                    ${this.renderFeature(fi[1])}
                </ul>
                <li-button class="secondary expand" @click=${this.handleContinueWithFree}
                    >Continue Free</li-button
                >
            </div>
        `}render(){return n`
            <div class="illustration-top-left">
                <lord-icon
                    trigger="loop"
                    src=${D("/assets/animations/free-export-upsell/female.json")}
                    ><img
                        loading="lazy"
                        alt=""
                        src=${D("/assets/animations/free-export-upsell/female.svg")}
                /></lord-icon>
            </div>
            <div class="illustration-bottom-right">
                <lord-icon
                    trigger="loop"
                    src=${D("/assets/animations/free-export-upsell/male.json")}
                    ><img
                        loading="lazy"
                        alt=""
                        src=${D("/assets/animations/free-export-upsell/male.svg")}
                /></lord-icon>
            </div>

            <li-icon-button
                class="close"
                icon="editor/close"
                @click=${this.handleContinueWithFree}
            ></li-icon-button>

            <div class="content">
                <h1>Build without limits</h1>
                <p class="subtitle">Unlock the full library and create without interruptions.</p>

                <div class="cards">${this.renderProCard()} ${this.renderFreeCard()}</div>

                <p class="footer">
                    Need more seats or team features?
                    <a href="#" @click=${this.handleCompareAllPlans}>Compare all plans</a>
                </p>
            </div>
        `}};nt.styles=x(Xo);Dt([c({attribute:!1})],nt.prototype,"navigationService",2);Dt([c({attribute:!1})],nt.prototype,"statsService",2);Dt([c({attribute:!1})],nt.prototype,"highlights",2);Dt([E(".cards")],nt.prototype,"cardsElement",2);Dt([E(".illustration-top-left")],nt.prototype,"illustrationTopLeftElement",2);Dt([E(".illustration-bottom-right")],nt.prototype,"illustrationBottomRightElement",2);nt=Dt([S("li-free-export-upsell-popup")],nt);async function La(t){const{sessionService:e,navigationService:i,httpService:o,statsService:s,format:r}=t,a=xs();if(t.debug)console.log(`maybeShowFreeExportUpsellPopup: format=${r}, clickCount=${a}, hasPremiumAccess=${e.hasPremiumAccess}, hasBeenShown=${ci()}`);else if(r==="html"||e.hasPremiumAccess||ci()||a<bs)return!1;let l;try{l=await Ri(o)}catch{return!1}const h=new nt;return h.navigationService=i,h.statsService=s,h.highlights=l,await O.instance.assign(h),h.addEventListener("close",()=>{O.instance.release(h)}),await h.open(),ws(),s.track("export_upsell_shown"),!0}const ir='@charset "UTF-8";:host{display:block}.content{display:flex;flex-direction:row;align-items:center;gap:var(--space-xs);min-width:0}.title{flex:1;min-width:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.preview img{width:var(--icon-size-md);height:var(--icon-size-md);display:block}li-select-button{width:12.5rem}li-family-list{display:none}@media(max-width:991px){li-select-button{width:100%}}';var sr=Object.defineProperty,or=Object.getOwnPropertyDescriptor,Oe=(t,e,i,o)=>{for(var s=o>1?void 0:o?or(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&sr(e,i,s),s};let jt=class extends w{constructor(){super(),this.items=[],this.active=!1,this._groupedItems={},this._listPopover=Se({strategy:xi.SelectBottom({maxHeight:()=>window.innerHeight*.5,adjustWidth:()=>ve()}),onOpened:t=>{this.active=!0},onClosed:()=>{this.active=!1}}),this.tabIndex=0}updated(t){t.has("items")&&this._groupItems()}_groupItems(){this._groupedItems=this.items.reduce((t,e)=>(t[e.family]||(t[e.family]=[]),t[e.family].push(e),t),{})}async open(){await this._listPopover.open(this,{boundary:this,widthAnchor:ve()?bi(this):void 0})}async close(){this._listPopover.close()}selectItem(t){console.log("select item",t),this.selected=t,this.close(),this.dispatchEvent(new CustomEvent("selected",{detail:{item:t}}))}render(){const t=i=>this.selectItem(i.detail.item);let e;if(this.selected){const i=`${this.selected.family} ${this.selected.style}`,o=`/assets/icons/editor/styles-${this.selected.family}-${this.selected.style}`;e=n`
                <div class="preview">
                    <img alt="" src=${D(o+".svg")} />
                </div>
                <div class="title">${i}</div>
            `}else e=n`
                <div class="preview">
                    <img alt="" src=${D("/assets/icons/editor/styles-all.svg")} />
                </div>
                <div class="title">All styles</div>
            `;return n`
            <li-select-button class="lg" @click=${this.open} .active=${this.active}>
                <div class="content">${e}</div>
            </li-select-button>

            <li-family-list
                class="shadow"
                .items=${this._groupedItems}
                .selected=${this.selected}
                @selected=${t}
                ${$e(this._listPopover)}
            ></li-family-list>
        `}};jt.styles=x(ir);Oe([c({type:Array})],jt.prototype,"items",2);Oe([c({type:Object})],jt.prototype,"selected",2);Oe([c({type:Boolean,reflect:!0})],jt.prototype,"active",2);jt=Oe([S("li-family")],jt);const rr=":host{display:block}";var ar=Object.getOwnPropertyDescriptor,nr=(t,e,i,o)=>{for(var s=o>1?void 0:o?ar(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=a(s)||s);return s};const lr=[{name:"getting-started",title:"Getting started",icon:"library/student"},{name:"keyboard",title:"Keyboard shortcuts",icon:"library/keyboard"}];let Ue=class extends w{constructor(){super()}handleMoreAction(t){t.preventDefault(),t.stopPropagation(),this.dispatchEvent(new CustomEvent("help-action",{detail:t.detail,bubbles:!0,composed:!0}))}render(){return n`
            <li-menu-button icon="library/help" buttonClass="outline round" ${U("Help")}>
                <li-menu-button-overlay
                    slot="overlay"
                    class="shadow"
                    .options=${lr}
                    @action=${this.handleMoreAction}
                ></li-menu-button-overlay>
            </li-menu-button>
        `}};Ue.styles=x(rr);Ue=nr([S("li-help-button")],Ue);const cr='@charset "UTF-8";:host{display:block;position:relative;height:1rem;border-radius:.5rem;-webkit-user-select:none;user-select:none;background:linear-gradient(to right,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red);touch-action:none;cursor:pointer}.thumb{position:absolute;top:50%;transform:translate(-50%,-50%);width:1.25rem;height:1.25rem;border-radius:50%;background:currentColor;border:2px solid white;box-shadow:0 0 0 1px #0000001a,0 2px 4px #0003;pointer-events:none;box-sizing:border-box}';var hr=Object.defineProperty,dr=Object.getOwnPropertyDescriptor,Di=(t,e,i,o)=>{for(var s=o>1?void 0:o?dr(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&hr(e,i,s),s};let be=class extends w{constructor(){super(),this.value=0,this.startDrag=this.startDrag.bind(this),this.onDrag=this.onDrag.bind(this),this.stopDrag=this.stopDrag.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("mousedown",this.startDrag),this.addEventListener("touchstart",this.startDrag,{passive:!1})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mousedown",this.startDrag),this.removeEventListener("touchstart",this.startDrag)}startDrag(t){t.cancelable&&t.preventDefault(),this.updateHue(t),t.type==="mousedown"?(window.addEventListener("mousemove",this.onDrag),window.addEventListener("mouseup",this.stopDrag)):(window.addEventListener("touchmove",this.onDrag,{passive:!1}),window.addEventListener("touchend",this.stopDrag),window.addEventListener("touchcancel",this.stopDrag))}onDrag(t){t.cancelable&&t.preventDefault(),this.updateHue(t)}stopDrag(){window.removeEventListener("mousemove",this.onDrag),window.removeEventListener("mouseup",this.stopDrag),window.removeEventListener("touchmove",this.onDrag),window.removeEventListener("touchend",this.stopDrag),window.removeEventListener("touchcancel",this.stopDrag)}updateHue(t){const e=this.getBoundingClientRect();let i;typeof TouchEvent<"u"&&t instanceof TouchEvent?i=(t.touches[0]||t.changedTouches[0]).clientX:i=t.clientX;let s=i-e.left;s=Math.max(0,Math.min(s,e.width));let r=Math.round(s/e.width*360);r=Math.min(360,Math.max(0,r)),this.value!==r&&(this.value=r,this.notifyChange())}notifyChange(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))}render(){return n`
            <div
                class="thumb"
                style=${Ft({left:`${this.value/360*100}%`,backgroundColor:`hsl(${this.value}, 100%, 50%)`})}
            ></div>
        `}};be.styles=x(cr);Di([c({type:Number})],be.prototype,"value",2);be=Di([S("li-hue-slider")],be);const pr='@charset "UTF-8";:host{display:block;position:relative;width:300px;-webkit-user-select:none;user-select:none}.title{font-weight:var(--font-weight-semibold);font-size:var(--font-size-lg);font-size:var(--font-size-ml);color:var(--color-navy-300);line-height:var(--line-height-md);margin-bottom:20px;padding:0 var(--margin-right) 0 var(--margin-left);text-transform:capitalize}.subtitle{font-weight:var(--font-weight-medium);font-size:var(--font-size-sm);color:var(--color-gray-500);line-height:var(--line-height-md);padding:0 var(--margin-right) 0 var(--margin-left);text-transform:capitalize}.has-title-only{height:40px}.has-title-and-subtitle{height:75px}';var ur=Object.defineProperty,mr=Object.getOwnPropertyDescriptor,We=(t,e,i,o)=>{for(var s=o>1?void 0:o?mr(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&ur(e,i,s),s};let kt=class extends w{constructor(){super(...arguments),this.title="",this.subtitle=""}static get TITLE_HEIGHT(){return 28}static get SUBTITLE_HEIGHT(){return 23}static headerHeight(t,e){let i=0;return t&&(i+=this.TITLE_HEIGHT,i+=20),e&&(i+=this.SUBTITLE_HEIGHT,i+=5),i}render(){const t=!!this.title,e=!!this.subtitle;return n`
            <div class=${t&&e?"has-title-and-subtitle":t?"has-title-only":""}>
                ${t?n`<div class="title">${Yt(this.title)}</div>`:null}
                ${e?n`<div class="subtitle">${Yt(this.subtitle)}</div>`:null}
            </div>
        `}};kt.styles=x(pr);We([c({type:String})],kt.prototype,"title",2);We([c({type:String})],kt.prototype,"subtitle",2);kt=We([S("li-icons-grid-header")],kt);const gr=Ni(class extends qi{constructor(){super(...arguments),this.key=T}render(t,e){return this.key=t,e}update(t,[e,i]){return e!==this.key&&(Gi(t),this.key=e),i}}),fr='@charset "UTF-8";:host{display:block;width:var(--item-width, 150px);height:var(--item-height, 180px);position:relative;cursor:pointer;-webkit-user-select:none;user-select:none}:host(:hover) .wrapper{border-color:var(--color-gray-500)}:host([selected]) .wrapper{border-color:var(--color-green-300)}.wrapper{display:block;background:var(--tile-bg, var(--color-white-100));width:inherit;height:inherit;border-radius:var(--radius-md);overflow:hidden;box-sizing:border-box;border:1px solid var(--color-white-100)}.preview{display:block;width:var(--item-preview, 50px);height:var(--item-preview, 50px);position:absolute;top:50%;left:50%;transform:translate(-50%,calc(-50% - 10px))}:host(.light) .wrapper{background:var(--color-gray-400)}.name{text-align:center;padding:0 var(--radius-md);text-overflow:ellipsis;overflow:hidden;position:absolute;color:var(--color-gray-500);width:100%;top:calc(50% + 30px);box-sizing:border-box;font-size:var(--font-size-sm);line-height:var(--line-height-sm);display:-webkit-box;line-clamp:2;-webkit-line-clamp:2;-webkit-box-orient:vertical}:host(.dark-bg) .name{color:var(--color-white-100)}.pro-badge{position:absolute;top:8px;left:8px}.latest-badge{position:absolute;bottom:10px;right:7px;display:inline-block;border-radius:50%;width:5px;height:5px;background:var(--color-blue-300)}li-icon-button,li-menu-button{position:absolute;top:10px;right:10px}li-icon-button:not([active]),li-menu-button:not([active]){visibility:hidden}:host(:hover) li-icon-button,:host(:hover) li-menu-button{visibility:visible}@media(max-width:991px){li-icon-button,li-menu-button{display:none}}.hidden{display:none}';var vr=Object.defineProperty,yr=Object.getOwnPropertyDescriptor,rt=(t,e,i,o)=>{for(var s=o>1?void 0:o?yr(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&vr(e,i,s),s};function br(t){switch(t){case"add":return"library/plus";case"remove":return"library/minus";default:return""}}const wr=100;let z=class extends w{constructor(){super(),this.icon=null,this.state=null,this.selected=!1,this.customization=null,this.action=null,this.background=null,this.isPlayerReady=!1,this.imageUrl=null,this.player=null,this.mouseOver=!1,this.morph={queue:[],segments:null,entered:!1},this.frameLoader=new ai(async(t,e)=>{if(!this.icon?.srcSvg)throw new Error("No SVG source available");const i=await fetch(this.icon.srcSvg,{signal:t});if(!i.ok)throw new Error(`Failed fetching ${this.icon.srcSvg}: ${i.status}`);const o=await i.blob();return URL.createObjectURL(o)},{onLoaded:t=>{this.imageUrl&&URL.revokeObjectURL(this.imageUrl),this.imageUrl=t},onStale:t=>{t&&URL.revokeObjectURL(t)},onDestroy:t=>{t&&URL.revokeObjectURL(t)}},wr),this.animationLoader=new ai(async t=>{if(!this.icon?.srcLi)throw new Error("No animation source available");const e=await fetch(this.icon.srcLi,{signal:t});if(!e.ok)throw new Error(`Failed fetching ${this.icon.srcLi}: ${e.status}`);const i=await e.text(),o=Ci(i),s=new Xi(this.animationContainer,o,{state:this.state},{autoInit:!1});return s.init(),this.customization&&this.applyCustomization(s),await new Promise((r,a)=>{if(s.ready){r();return}const l=()=>{r()};s.addEventListener("ready",l)}),this.trigger==="in"&&s.seekToEnd(),s.addEventListener("complete",this.onComplete),s},{onLoaded:t=>{this.player&&this.player.destroy(),this.player=t,this.isPlayerReady=!0,this.trigger==="morph"&&(this.morph.segments=this.buildMorphSegments(t))},onStale:t=>{t&&t.destroy()},onDestroy:t=>{t&&t.destroy()}}),this.onHover=this.onHover.bind(this),this.onLeave=this.onLeave.bind(this),this.onComplete=this.onComplete.bind(this),this.handleActionClick=this.handleActionClick.bind(this),this.handleWrapperClick=this.handleWrapperClick.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this.onHover),this.addEventListener("mouseleave",this.onLeave)}disconnectedCallback(){this.removeEventListener("mouseenter",this.onHover),this.removeEventListener("mouseleave",this.onLeave),this.cancelFrameLoad(),this.destroyFramePreview(),this.cancelAnimationLoad(),this.destroyAnimationPreview(),super.disconnectedCallback()}willUpdate(t){if(super.willUpdate(t),(t.has("customization")||t.has("background"))&&this.updateTileBackground(),t.has("customization")&&this.player&&this.isPlayerReady&&this.applyCustomization(this.player),t.has("state")&&this.player&&this.isPlayerReady){this.player.state=this.state;const e=(t.get("state")??"").split("-")[0];(this.trigger==="morph"||e==="morph")&&(this.morph={queue:[],segments:null,entered:!1},this.trigger==="morph"&&(this.morph.segments=this.buildMorphSegments(this.player))),this.trigger==="in"&&this.player.seekToEnd()}if(t.has("icon")){const e=t.get("icon"),i=e?.srcLi!==this.icon?.srcLi,o=e?.srcSvg!==this.icon?.srcSvg;i&&(this.cancelAnimationLoad(),this.destroyAnimationPreview(),this.icon?.srcLi&&this.hasCustomization&&this.createAnimationPreview().catch(()=>{})),o&&(this.cancelFrameLoad(),this.destroyFramePreview(),this.icon?.srcSvg&&!this.hasCustomization&&this.createFramePreview().catch(()=>{}))}}updateTileBackground(){const t=Object.values(this.customization?.colors??{}),e=t.length>0&&t.every(o=>Si(o)),i=this.background?$i(this.background):e;this.classList.toggle("light",e&&!this.background),this.classList.toggle("dark-bg",i),this.background?this.style.setProperty("--tile-bg",this.background):this.style.removeProperty("--tile-bg")}onHover(){this.mouseOver=!0,this.trigger==="morph"?this.morphOnEnter():this.hoverOnEnter()}onLeave(){this.mouseOver=!1,this.trigger==="morph"&&this.morphOnLeave()}onComplete(){this.player&&(this.trigger==="loop"&&this.mouseOver?this.player.playFromStart():this.trigger==="morph"&&this.morphOnComplete())}async hoverOnEnter(){if(this.canLoadAnimation)try{await this.ensureAnimationPlayer(),this.player&&!this.player.playing&&this.player.playFromStart()}catch{}}async createFramePreview(){if(!this.icon?.srcSvg)throw new Error("No SVG source available");if(this.imageUrl)throw new Error("Frame preview already exists");await this.frameLoader.load()}async createAnimationPreview(){if(!this.icon?.srcLi)throw new Error("No animation source available");if(this.player)throw new Error("Player already exists");await this.animationLoader.load()}destroyFramePreview(){this.frameLoader.destroy(),this.imageUrl=null}destroyAnimationPreview(){this.animationLoader.destroy(),this.player=null,this.isPlayerReady=!1,this.morph={queue:[],segments:null,entered:!1}}cancelFrameLoad(){this.frameLoader.cancel()}cancelAnimationLoad(){this.animationLoader.cancel()}async ensureAnimationPlayer(){this.player||await this.createAnimationPreview()}buildMorphSegments(t){const e=t.availableStates.find(r=>r.name===t.state);if(!e)return null;const i=parseFloat(e.params[0]);if(isNaN(i)||i<=0||i>=1)return null;const o=[e.time,e.time+Math.floor((e.duration+1)*i)],s=[o[1],e.time+e.duration+1];return[o,s]}async morphOnEnter(){if(this.canLoadAnimation){this.morph.entered=!0,this.morph.queue.push(0);try{await this.ensureAnimationPlayer()}catch{return}this.morphProcessQueue()}}morphOnLeave(){this.morph.entered&&(this.morph.queue.push(1),this.morphProcessQueue())}morphOnComplete(){this.morphProcessQueue()}morphProcessQueue(){if(!this.player||!this.isPlayerReady||this.player.playing)return;const t=Math.floor(this.morph.queue.length/2)*2;if(t>0&&this.morph.queue.splice(0,t),!this.morph.queue.length)return;const e=this.morph.queue.shift();this.morph.segments?(this.player.direction=1,this.player.switchSegment(this.morph.segments[e])):this.player.direction=e===0?1:-1,this.player.play()}render(){const e=!!(this.imageUrl&&!this.hasCustomization)?gr(this.icon?.srcSvg??"",n`
                      <img
                          src=${this.imageUrl}
                          class=${R({preview:!0,hidden:this.isPlayerReady})}
                      />
                  `):null,i=n`<div
            id="animation"
            class=${R({preview:!0,hidden:!this.isPlayerReady})}
        ></div>`,o=n`<li-badge
            class=${R({"pro-badge":!0,pro:!0,hidden:!this.icon?.premium})}
        >
            pro
        </li-badge>`,s=n`<div
            class=${R({"latest-badge":!0,hidden:!this.icon?.latest})}
        ></div>`;let r=null;if(this.action==="add"){const l=this.sessionService?.isAuthenticated??!1;r=n`
                <li-menu-button
                    buttonClass="outline"
                    icon="editor/plus"
                    ${U("Add to collection")}
                >
                    ${l?n`
                                  <li-collections-menu-button-overlay
                                      slot="overlay"
                                      class="shadow"
                                      .icon=${this.icon}
                                  ></li-collections-menu-button-overlay>
                              `:n`
                                  <li-collections-signin-overlay
                                      slot="overlay"
                                      class="shadow"
                                  ></li-collections-signin-overlay>
                              `}
                </li-menu-button>
            `}else this.action==="remove"&&(r=n`
                <li-icon-button
                    @click=${this.handleActionClick}
                    .icon=${br(this.action)}
                    class="outline"
                    ${U("Remove from collection")}
                ></li-icon-button>
            `);const a=n`<div class="name">${this.icon?.name??""}</div>`;return n`<div class="wrapper" @click=${this.handleWrapperClick}>
            ${e} ${i} ${o} ${s} ${r} ${a}
        </div>`}handleActionClick(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("action",{detail:{action:this.action},bubbles:!0,composed:!0}))}handleWrapperClick(){this.dispatchEvent(new CustomEvent("item-click",{bubbles:!0,composed:!0}))}applyCustomization(t){if(this.customization&&(this.customization.stroke!==void 0&&(t.stroke=this.customization.stroke),this.customization.colors&&t.lottieProperties)){const e={},i=t.lottieProperties;for(const o of i){if(o.type!=="color"||!o.value)continue;const s=Ei(o.value);if(!s)continue;const r=this.customization.colors[s]||this.customization.colors[s.toLowerCase()]||this.customization.colors[s.toUpperCase()];r&&(e[o.name]=r)}Object.keys(e).length>0&&(t.colors=e)}}get canLoadAnimation(){return!!(this.icon?.srcLi&&(this.hasCustomization||this.imageUrl))}get hasCustomization(){return this.customization!==null}get trigger(){return(this.state||"").split("-")[0]||"hover"}};z.styles=x(fr);rt([E("#animation")],z.prototype,"animationContainer",2);rt([c({type:Object})],z.prototype,"icon",2);rt([c({type:String})],z.prototype,"state",2);rt([c({type:Boolean,reflect:!0})],z.prototype,"selected",2);rt([c({type:Object})],z.prototype,"customization",2);rt([c({type:String})],z.prototype,"action",2);rt([H({context:je,subscribe:!0})],z.prototype,"sessionService",2);rt([c({type:String})],z.prototype,"background",2);rt([f()],z.prototype,"isPlayerReady",2);rt([f()],z.prototype,"imageUrl",2);z=rt([S("li-icons-grid-icon")],z);const xr='@charset "UTF-8";:host{display:block;position:relative;overflow-x:hidden;overflow-y:scroll;contain:layout style size paint}#prefix{position:absolute;left:0;right:0;top:0;z-index:2}#container{position:absolute;left:0;right:0;top:0;z-index:1;--item-x: 0px;--item-y: 0px;--header-x: 0px;--header-y: 0px;--item-width: 150px;--item-height: 150px;--item-preview: 70px}.item{position:absolute;left:0;top:0;transform:translate(var(--item-x),var(--item-y));will-change:transform}.header{position:absolute;top:0;left:0;width:100%;transform:translate(var(--header-x),var(--header-y));will-change:transform}.unused{visibility:hidden}';var Sr=Object.defineProperty,$r=Object.getOwnPropertyDescriptor,It=(t,e,i,o)=>{for(var s=o>1?void 0:o?$r(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&Sr(e,i,s),s};const Cr=15,Er=20,_r=80,Pr=40,vi=140,kr=70,Or=45;let G=class extends ss{constructor(){super(),this.action=null,this.allowUnselect=!1,this.showBackground=!1,this.calculatedItemSize=null,this.handleKeyDown=this.handleKeyDown.bind(this),this.handleContainerClick=this.handleContainerClick.bind(this)}connectedCallback(){super.connectedCallback(),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleContainerClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.handleKeyDown),this.removeEventListener("click",this.handleContainerClick)}reset(){super.reset(),this.selected=void 0}firstUpdated(t){super.firstUpdated(t),this.rebuild()}syncAllItems(){for(const[t,e]of this.elementToItem.entries()){const i=t;this.syncItemElement(i,e),i.player&&i.applyCustomization(i.player)}}syncItemElement(t,e){if(e){const i=this.data.indexOf(e);t.icon=e,t.state=e.customization?.state,t.customization=e.customization??null,t.background=this.showBackground?e.customization?.background??null:null,t.updateTileBackground(),t.selected=this.selected?.index===i,t.classList.remove("unused"),t.style.setProperty("--item-preview",`${this.previewSizeForFamily(e.family)}px`)}else t.icon=null,t.state=null,t.customization=null,t.background=null,t.selected=!1,t.classList.add("unused"),t.style.removeProperty("--item-preview")}syncHeaderElement(t,e){e?(t.title=e.title||"",t.subtitle=e.subtitle||"",t.classList.remove("unused")):(t.title="",t.subtitle="",t.classList.add("unused"))}createItemElement(){const t=new z;return t.classList.add("item"),t.action=this.action,t.addEventListener("action",e=>{e.stopPropagation();const i=t[bt],o=this.data[i];this.dispatchEvent(new CustomEvent("action",{detail:{action:e.detail.action,item:o},bubbles:!0,composed:!0}))}),t.addEventListener("item-click",e=>{e.stopPropagation();const i=t[bt],o=this.data[i],s=this.selected?.index===i;this.allowUnselect&&s?this.clearSelection():(this.selected&&this.selected.element&&(this.selected.element.selected=!1),this.selected={item:o,element:t,index:i},t.selected=!0,this.dispatchEvent(new CustomEvent("selected",{detail:{item:o},bubbles:!0,composed:!0})))}),t}createHeaderElement(){const t=new kt;return t.classList.add("header"),t}headerHeight(t){return kt.headerHeight(!!t.title,!!t.subtitle)}headerSpace(t){return t.title?_r:Pr}render(){return n`
            <div id="prefix"><slot></slot></div>
            <div id="container"></div>
        `}onScroll(t){super.onScroll(t),this.dispatchEvent(new CustomEvent("scrolled",{detail:{scrollTop:t},bubbles:!0,composed:!0}))}onScrolledToBottom(){this.dispatchEvent(new CustomEvent("scrolled-to-bottom",{bubbles:!0,composed:!0}))}onResize(t){this.calculateItemSize(t),this.container.style.setProperty("--item-width",`${this.calculatedItemSize.width}px`),this.container.style.setProperty("--item-height",`${this.calculatedItemSize.height}px`),super.onResize(t)}previewSizeForFamily(t){return t==="system"?Or:kr}calculateItemSize(t){let e=vi;const i=Vi&&ve();{const o=t.width-this.marginLeft-this.marginRight,s=Math.floor((o+this.gap)/(e+this.gap)),r=s*e+(s-1)*this.gap,a=o-r;if(a<vi/2){const l=Math.floor(a/s*10)/10;e+=l}else{const l=i?2:s+1;e=Math.floor((o-(l-1)*this.gap)/l*10)/10}}this.calculatedItemSize={width:e,height:e*1.1}}getHeaderTopByTitle(t){for(const e of this.layoutState.logicalRows)if(F(e)&&e.header.title===t)return e.top;return 0}clearSelection(){this.selected&&(this.selected.element&&(this.selected.element.selected=!1),this.selected=void 0,this.dispatchEvent(new CustomEvent("selected",{detail:{item:void 0},bubbles:!0,composed:!0})))}handleContainerClick(t){if(!this.allowUnselect||!this.selected)return;t.composedPath().some(i=>i instanceof z)||this.clearSelection()}handleKeyDown(t){if(!this.data.length||t.ctrlKey||t.altKey||t.metaKey||t.shiftKey)return;if(!this.selected&&["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.key)){this.selectItemByIndex(0);return}let e=this.selected?.item,i=this.selected?.index,o=i;if(t.key==="ArrowUp"){const s=this.findItemPosition(e);if(!s)return;let{rowIndex:r,colIndex:a}=s;r>0&&r--,a=Math.min(a,this.layoutState.itemsRows[r].items.length-1),o=this.layoutState.itemsRows[r].startIndex+a}else if(t.key==="ArrowDown"){const s=this.findItemPosition(e);if(!s)return;let{rowIndex:r,colIndex:a}=s;r<this.layoutState.itemsRows.length-1&&r++,a=Math.min(a,this.layoutState.itemsRows[r].items.length-1),o=this.layoutState.itemsRows[r].startIndex+a}else t.key==="ArrowLeft"?o=i-1:t.key==="ArrowRight"&&(o=i+1);if(e=this.data[o],o>=0&&o<this.data.length&&o!==i){t.preventDefault(),this.selectItemByIndex(o);const s=this.findItemPosition(e);if(!s)return;const a=this.layoutState.itemsRows[s.rowIndex].top;if(o<i){let l=-this.prefixElement.offsetHeight;const h=this.scrollTop+this.marginTop+l;a<=h&&(this.scrollTop=a-this.marginTop-l)}else if(o>i){const l=a+this.itemSize.height,h=this.scrollTop+this.viewportSize.height-this.marginBottom;l>=h&&(this.scrollTop=l-this.viewportSize.height+this.marginBottom)}}}selectItemByIndex(t,e={}){const i=this.data[t];if(!i)return;this.selected&&this.selected.element&&(this.selected.element.selected=!1);const o=Array.from(this.elementToItem.entries()).find(([s,r])=>s[bt]===t)?.[0];this.selected={item:i,index:t,element:o},o&&(o.selected=!0),this.dispatchEvent(new CustomEvent("selected",{detail:{item:i,auto:e.auto},bubbles:!0,composed:!0}))}autoSelectFirstItem(){this.data.length>0&&this.selectItemByIndex(0,{auto:!0})}removeAt(t){if(t<0||t>=this.data.length)return;const e=this.data.splice(t,1)[0];this.selected&&this.selected.item===e?this.clearSelection():this.reanchorSelectionIndex(),this.rebuild(),this.reanchorSelectionElement()}insertAt(t,e){this.data.splice(Math.min(Math.max(t,0),this.data.length),0,e),this.reanchorSelectionIndex(),this.rebuild(),this.reanchorSelectionElement()}syncSelectedItem(){const t=this.selected?.item;if(!t)return;const e=this.elementFor(t);e&&this.syncItemElement(e,t)}reanchorSelectionIndex(){this.selected&&(this.selected.index=this.data.indexOf(this.selected.item))}reanchorSelectionElement(){this.selected&&(this.selected.element=this.elementFor(this.selected.item))}elementFor(t){if(t){for(const[e,i]of this.elementToItem.entries())if(i===t)return e}}get container(){return this.containerElement}get gap(){return Cr}get marginBottom(){return this.margins?.bottom??G.margin}get marginTop(){return this.margins?.top??G.margin}get marginLeft(){return this.margins?.left??G.margin}get marginRight(){return this.margins?.right??G.margin}get itemSize(){return this.calculatedItemSize}static get margin(){return Er}};G.styles=x(xr);It([E("#container",!0)],G.prototype,"containerElement",2);It([E("#prefix",!0)],G.prototype,"prefixElement",2);It([c({type:Object})],G.prototype,"margins",2);It([c({type:String})],G.prototype,"action",2);It([c({type:Boolean})],G.prototype,"allowUnselect",2);It([c({type:Boolean})],G.prototype,"showBackground",2);G=It([S("li-icons-grid")],G);const Rr='@charset "UTF-8";:host{--inline-create-color: var(--color-green-300);--inline-create-hover-bg: var(--color-green-50);position:relative;display:flex;align-items:center;height:2.375rem;padding:0 var(--space-sm);border-radius:var(--radius-md);box-sizing:border-box;cursor:pointer}:host(.purple){--inline-create-color: var(--color-purple-500);--inline-create-hover-bg: var(--color-purple-100)}:host(:hover:not([editing])){background-color:var(--inline-create-hover-bg)}:host([editing]){cursor:default}:host(:not([editing])) input{display:none}.trigger{display:flex;flex-direction:row;align-items:center;flex:1;gap:var(--space-sm);color:var(--inline-create-color);font-size:var(--font-size-sm);font-weight:var(--font-weight-medium);min-width:0}:host([editing]) .trigger{visibility:hidden}.label{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1}input{position:absolute;top:0;bottom:0;left:var(--space-xs);right:var(--space-xs);border:1px solid var(--color-green-300);border-radius:var(--radius-md);background:var(--color-white-100);color:var(--color-navy-300);font-family:var(--font-family);font-size:var(--font-size-sm);padding:0 var(--space-sm);outline:none;box-sizing:border-box;min-width:0;width:auto}';var Lr=Object.defineProperty,Tr=Object.getOwnPropertyDescriptor,re=(t,e,i,o)=>{for(var s=o>1?void 0:o?Tr(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&Lr(e,i,s),s};let Ot=class extends w{constructor(){super(),this.placeholder="New item",this.locked=!1,this.editing=!1,this.enterEditMode=this.enterEditMode.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.enterEditMode)}disconnectedCallback(){this.removeEventListener("click",this.enterEditMode),super.disconnectedCallback()}updated(t){t.has("editing")&&this.toggleAttribute("editing",this.editing)}enterEditMode(t){if(t.stopPropagation(),!this.editing){if(this.locked){this.dispatchEvent(new CustomEvent("locked-click",{bubbles:!0,composed:!0}));return}this.editing=!0,this.updateComplete.then(()=>{this.inputEl&&(this.inputEl.value="",this.inputEl.focus())})}}exitEditMode(){this.editing=!1,this.inputEl&&(this.inputEl.value="")}handleKeyDown(t){if(t.key==="Enter"){const e=t.target.value.trim();e&&this.dispatchEvent(new CustomEvent("create",{detail:{value:e},bubbles:!0,composed:!0})),this.exitEditMode()}else t.key==="Escape"&&this.exitEditMode()}handleBlur(){this.exitEditMode()}render(){return n`
            <div class="trigger">
                <slot name="icon"></slot>
                <span class="label"><slot></slot></span>
                <slot name="badge"></slot>
            </div>
            <input
                type="text"
                placeholder=${this.placeholder}
                @keydown=${this.handleKeyDown}
                @blur=${this.handleBlur}
            />
        `}};Ot.styles=x(Rr);re([c({type:String,reflect:!0})],Ot.prototype,"placeholder",2);re([c({type:Boolean,reflect:!0})],Ot.prototype,"locked",2);re([f()],Ot.prototype,"editing",2);re([E("input")],Ot.prototype,"inputEl",2);Ot=re([S("li-inline-create")],Ot);const Dr=":host{display:block;position:fixed;bottom:var(--space-md);left:50%;transform:translate(-50%);pointer-events:none;font-family:var(--font-family);color:var(--color-white-100);-webkit-user-select:none;user-select:none}.panel{display:flex;flex-direction:column;gap:var(--space-md);pointer-events:auto;box-sizing:border-box;width:1000px;max-width:calc(100vw - 40px);background:var(--color-navy-300);border-radius:var(--radius-xl);font-family:var(--font-family);will-change:transform;padding:var(--space-sm) var(--space-xm);box-shadow:var(--shadow-popover)}.header{display:flex;align-items:center}.header li-icon{cursor:pointer}.title{flex:1;font-size:var(--font-size-md);font-weight:var(--font-weight-semibold);line-height:var(--line-height-md)}.columns{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-xl)}.column{display:flex;flex-direction:column;gap:var(--space-md)}.shortcut{display:flex;align-items:center;justify-content:space-between;gap:var(--space-md)}.shortcut-label{flex-grow:1;font-size:var(--font-size-md);line-height:var(--line-height-lg);white-space:nowrap}.shortcut-keys{display:flex;align-items:center;gap:var(--space-sm);flex-shrink:0;margin-left:auto}.key{display:inline-flex;align-items:center;justify-content:center;min-width:38px;padding:5px 12px;border:1px solid var(--color-white-100);border-radius:var(--radius-md);font-weight:var(--font-weight-medium);box-sizing:border-box}";var Ir=Object.defineProperty,zr=Object.getOwnPropertyDescriptor,Ii=(t,e,i,o)=>{for(var s=o>1?void 0:o?zr(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&Ir(e,i,s),s};const ze=Yi?"⌘":"Ctrl",yi=250;function At(t,e){return n`
        <div class="shortcut">
            <span class="shortcut-label">${t}</span>
            <div class="shortcut-keys">${e.map(i=>n`<span class="key">${i}</span>`)}</div>
        </div>
    `}let Qt=class extends w{constructor(){super(...arguments),this.opened=!1}async open(){if(this.opened)return;const t=O.instance.ref({element:this,close:this.close.bind(this),closable:()=>!0},{mask:!0});this.style.zIndex=String(t),this.animation=this.panel.animate({opacity:[0,1],transform:["translateY(120%)","translateY(0)"]},{duration:yi,easing:"cubic-bezier(0.02, 0.38, 0.15, 0.98)",fill:"both"}),await new Promise(e=>{this.animation.onfinish=()=>{this.animation=void 0,e()}}),this.opened=!0}async close(){this.animation||!this.opened||(this.animation=this.panel.animate({opacity:[1,0],transform:["translateY(0)","translateY(120%)"]},{duration:yi,easing:"cubic-bezier(0.02, 0.38, 0.15, 0.98)",fill:"both"}),await new Promise(t=>{this.animation.onfinish=()=>{this.animation=void 0,t()}}),this.opened=!1,O.instance.unref(),O.instance.release(this))}handleClose(){this.close()}renderShortcutSearch(){return At("Search",[ze,"K"])}renderShortcutNavigate(){return At("Navigate icons",["←","↑","→","↓"])}renderShortcutAddToCollection(){return At("Add to collection",[ze,"C"])}renderShortcutExport(){return At("Export",[ze,"E"])}renderShortcutPlayPause(){return At("Play / Pause",["Space"])}renderShortcutReset(){return At("Reset",["R"])}render(){return n`
            <div class="panel">
                <div class="header">
                    <span class="title">Keyboard shortcuts</span>
                    <li-icon icon="editor/close" class="white" @click=${this.handleClose}></li-icon>
                </div>
                <div class="columns">
                    <div class="column">
                        ${this.renderShortcutSearch()} ${this.renderShortcutNavigate()}
                    </div>
                    <div class="column">
                        ${this.renderShortcutAddToCollection()} ${this.renderShortcutExport()}
                    </div>
                    <div class="column">
                        ${this.renderShortcutPlayPause()} ${this.renderShortcutReset()}
                    </div>
                </div>
            </div>
        `}};Qt.styles=x(Dr);Ii([E(".panel")],Qt.prototype,"panel",2);Qt=Ii([S("li-keyboard-shortcuts-overlay")],Qt);async function Ta(){const t=new Qt;await O.instance.assign(t),t.open()}const Ar='@charset "UTF-8";:host{display:contents}';var Mr=Object.defineProperty,Fr=Object.getOwnPropertyDescriptor,xt=(t,e,i,o)=>{for(var s=o>1?void 0:o?Fr(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&Mr(e,i,s),s};let lt=class extends w{render(){return n` <slot></slot> `}};lt.styles=x(Ar);xt([Rt({context:Ge}),c({attribute:!1})],lt.prototype,"colorsService",2);xt([Rt({context:_i}),c({attribute:!1})],lt.prototype,"lastCollectionService",2);xt([Rt({context:Pi}),c({attribute:!1})],lt.prototype,"preferencesService",2);xt([Rt({context:Ee}),c({attribute:!1})],lt.prototype,"httpService",2);xt([Rt({context:He}),c({attribute:!1})],lt.prototype,"toastService",2);xt([Rt({context:Ce}),c({attribute:!1})],lt.prototype,"navigationService",2);xt([Rt({context:je}),c({attribute:!1})],lt.prototype,"sessionService",2);lt=xt([S("li-library-context")],lt);const Ur='@charset "UTF-8";:host{display:block;padding:0 20px;box-sizing:border-box}.body{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:2.5rem 0}.actions{display:flex;flex-direction:row;gap:10px}h1{font-family:Inter;font-size:20px;font-style:normal;font-weight:600;margin:0;color:var(--color-navy-500);line-height:1.4}strong{color:var(--color-navy-500);font-family:Inter;font-size:24px;font-style:normal;font-weight:600;line-height:33.6px}p{color:var(--color-navy-500);font-family:Inter;font-size:16px;font-style:normal;font-weight:400;line-height:28px;margin:5px 0 20px}lord-icon{width:420px;max-width:100%;height:auto;aspect-ratio:3/2;margin-bottom:1.25rem;color:var(--color-gray-500)}';var Br=Object.defineProperty,jr=Object.getOwnPropertyDescriptor,zi=(t,e,i,o)=>{for(var s=o>1?void 0:o?jr(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&Br(e,i,s),s};let we=class extends w{constructor(){super(),this.query=""}onSearchAllIcons(){this.dispatchEvent(new CustomEvent("search-all-icons",{detail:{}}))}onRequestNewIcon(){this.dispatchEvent(new CustomEvent("request-new-icon",{detail:{}}))}render(){const t="no-icons-to-show";return n`
            ${this.query?n`<h1>Results for “${this.query}”</h1>`:n`<h1>Search for icons</h1>`}

            <div class="body">
                <lord-icon
                    trigger="hover"
                    loading="interaction"
                    src=${D("/assets/animations/"+t+".json")}
                    ><img
                        loading="lazy"
                        alt=""
                        src=${D("/assets/animations/"+t+".svg")}
                /></lord-icon>
                <strong>There’s nothing here</strong>
                <p>Try expanding your search by looking in all icons or request new one</p>

                <div class="actions">
                    <li-button class="primary-secondary" @click=${this.onSearchAllIcons}
                        >Search all icons</li-button
                    >
                    <li-button class="primary-secondary" @click=${this.onRequestNewIcon}
                        >Request new icon</li-button
                    >
                </div>
            </div>
        `}};we.styles=x(Ur);zi([c({type:String})],we.prototype,"query",2);we=zi([S("li-library-placeholder")],we);const Hr='@charset "UTF-8";:host{display:flex;flex-direction:column;padding:0 20px;height:70px;box-sizing:border-box;-webkit-user-select:none;user-select:none;font-family:var(--font-family);color:var(--color-navy-300)}h1{font-size:var(--font-size-ml);font-weight:var(--font-weight-semibold);font-style:normal;line-height:var(--line-height-md);margin:0}.tags{display:flex;flex-direction:row;align-items:center;gap:var(--space-xs);margin-top:var(--space-xs);overflow-x:auto;overflow-y:hidden;scrollbar-width:thin}.tags .legend{flex-shrink:0;white-space:nowrap;color:var(--color-gray-500);font-size:var(--font-size-md);font-weight:var(--font-weight-normal);font-style:normal;line-height:var(--line-height-xl)}.tags .item{display:flex;flex-shrink:0;padding:0 var(--space-sm);justify-content:center;align-items:center;gap:var(--space-xs);white-space:nowrap;text-transform:capitalize;border-radius:1.875rem;border:1px solid var(--color-gray-300);font-size:var(--font-size-xm);color:var(--color-navy-300);font-weight:var(--font-weight-medium);background:var(--color-white-100);cursor:pointer}.tags .item:hover{background-color:var(--color-gray-200)}';var Nr=Object.defineProperty,qr=Object.getOwnPropertyDescriptor,Ke=(t,e,i,o)=>{for(var s=o>1?void 0:o?qr(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&Nr(e,i,s),s};let Xt=class extends w{constructor(){super(),this.query="",this.tags=[]}tagSelected(t){this.dispatchEvent(new CustomEvent("selected",{detail:{tag:t}}))}render(){const t=this.tags?.length?n`<div class="tags">
                  <div class="legend">Search by related tags:</div>
                  ${this.tags.map(e=>n`<div class="item" @click=${()=>this.tagSelected(e)}>
                              ${e}
                          </div>`)}
              </div>`:null;return n`
            <h1>Results for “${this.query}”</h1>
            ${t}
        `}static get size(){return 71}};Xt.styles=x(Hr);Ke([c({type:String})],Xt.prototype,"query",2);Ke([c({type:Array})],Xt.prototype,"tags",2);Xt=Ke([S("li-library-search-header")],Xt);const Gr='@charset "UTF-8";:host{display:flex;flex-direction:row;align-items:center;position:relative;height:48px;margin:20px;gap:10px;border-radius:var(--radius-md);--toolbar-search-width: auto}@media(min-width:992px){:host(.active):before{content:"";position:absolute;inset:-10px;border-radius:14px;transition:border-color .2s ease;background:#f6f6f7e6;border:1px solid var(--color-gray-300);box-sizing:border-box}}li-search{flex:1;width:var(--toolbar-search-width);min-width:0}@media(max-width:991px){:host{flex-wrap:wrap;height:auto}li-search{flex:1 1 100%;order:-1}li-family,li-category-select{flex:1 1 0;min-width:0}}';var Vr=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,zt=(t,e,i,o)=>{for(var s=o>1?void 0:o?Yr(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&Vr(e,i,s),s};let ut=class extends w{constructor(){super(),this.free=!1,this.variants=[],this.categories=[]}onVariantSelected(t){const{item:e}=t.detail;this.variant=e,e&&this.dispatchEvent(new CustomEvent("variant-changed",{detail:{family:e.family,style:e.style}})),this.notify()}onCategorySelected(t){const{value:e}=t.detail;this.category=e,this.query="",e&&this.dispatchEvent(new CustomEvent("category-changed",{detail:{category:e}})),this.notify()}onSearchChange(t){const{value:e,free:i}=t.detail;this.free=i,e!==this.query&&(this.query=e,this.category="",e&&this.dispatchEvent(new CustomEvent("search-changed",{detail:{phrase:e}}))),this.notify()}notify(){this.dispatchEvent(new CustomEvent("changed",{detail:{family:this.variant?.family,style:this.variant?.style,category:this.category||void 0,query:this.query||void 0,free:this.free}}))}render(){return n`
            <li-family
                .items=${this.variants}
                .selected=${this.variant}
                @selected=${this.onVariantSelected}
            ></li-family>
            <li-search
                .query=${this.query}
                .free=${this.free}
                .variant=${this.variant}
                placeholder="Search icons"
                @change=${this.onSearchChange}
            ></li-search>
            <li-category-select
                .items=${this.categories}
                .value=${this.category}
                @change=${this.onCategorySelected}
            ></li-category-select>
        `}static get size(){return 88}};ut.styles=x(Gr);zt([c({type:Object})],ut.prototype,"variant",2);zt([c({type:String})],ut.prototype,"category",2);zt([c({type:String})],ut.prototype,"query",2);zt([c({type:Boolean})],ut.prototype,"free",2);zt([c({type:Array})],ut.prototype,"variants",2);zt([c({type:Array})],ut.prototype,"categories",2);ut=zt([S("li-library-toolbar")],ut);const Wr='@charset "UTF-8";:host{display:block;min-width:230px;background:#fff;border-radius:var(--radius-md);border:1px solid var(--color-gray-300);-webkit-user-select:none;user-select:none;max-height:50vh;overflow-y:auto;box-sizing:border-box}.group{padding:4px}.group:not(:first-child){border-top:1px solid var(--color-gray-300);margin-top:5px}.header{display:flex;justify-content:space-between;align-items:center;padding:var(--space-xs) var(--space-sm)}.upsell{contain:inline-size;padding:var(--space-sm);margin-top:var(--space-xs);border-radius:var(--radius-md);background:var(--color-purple-100)}.upsell .heading{color:var(--color-purple-500);font-size:var(--font-size-sm);font-weight:var(--font-weight-semibold)}.upsell .text{margin-top:var(--space-xs);color:var(--color-purple-500);font-size:var(--font-size-sm);line-height:1.4}.upsell li-button{margin-top:var(--space-sm)}:host(.shadow){box-shadow:0 5px 10px #7171821a}';var Kr=Object.defineProperty,Zr=Object.getOwnPropertyDescriptor,at=(t,e,i,o)=>{for(var s=o>1?void 0:o?Zr(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&Kr(e,i,s),s};let Y=class extends w{constructor(){super(...arguments),this.icon=null,this.menuData=null,this.error=!1,this.saving=new Set,this.creating=new Set,this.upsellOpen=!1,this.loadedFor=null}async load(){if(!this.httpService||!this.icon)throw new Error("Not ready");const{index:t,family:e,style:i,name:o}=this.icon,s=this.loadedFor;if(!(s&&s.index===t&&s.family===e&&s.style===i)){this.error=!1;try{this.menuData=await this.httpService.get("/api/collections/menu",{queryParams:{iconIndex:String(t),iconFamily:e,iconStyle:i}}),this.loadedFor={index:t,family:e,style:i,name:o}}catch(r){throw this.error=!0,this.menuData=null,this.loadedFor=null,r}await this.updateComplete}}updated(t){t.has("icon")&&(this.loadedFor=null,this.menuData=null,this.upsellOpen=!1)}async handleSelect(t){if(!this.httpService||!this.toastService||!this.icon||this.saving.has(t))return;const e=this.resolveCollection(t);this.saving=new Set(this.saving).add(t);try{if(!await ki({http:this.httpService,toast:this.toastService,navigation:this.navigationService},this.icon,e))return;if(this.lastCollectionService?.set(e),this.menuData){const o=s=>{if(s.id!==t)return s;const r=s.iconsCount+1;return{...s,iconsCount:r,alreadyUsed:!0,alreadyFull:r>=s.limit}};this.menuData={personal:{...this.menuData.personal,collections:this.menuData.personal.collections.map(o)},teams:this.menuData.teams.map(s=>({...s,collections:s.collections.map(o)}))}}this.loadedFor=null,this.dispatchEvent(new CustomEvent("select",{detail:{collectionId:t,collectionName:e.name},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("action",{bubbles:!0,composed:!0}))}finally{const i=new Set(this.saving);i.delete(t),this.saving=i}}resolveCollection(t){const e=this.menuData?.personal.collections.find(i=>i.id===t)?.name??this.menuData?.teams.flatMap(i=>i.collections).find(i=>i.id===t)?.name??"collection";return{id:t,name:e}}async handleCreate(t,e){if(!this.httpService||this.creating.has(e))return;const i=t.detail.value.trim();if(i){this.creating=new Set(this.creating).add(e);try{const o=e==="personal"?"/api/collections":`/api/collections/team/${e}`,s=await this.httpService.post(o,{title:i});if(this.menuData){const r={id:s.id,name:i,iconsCount:0,limit:s.iconLimit,alreadyUsed:!1,alreadyFull:!1};if(e==="personal")this.menuData={...this.menuData,personal:{collections:[...this.menuData.personal.collections,r],group:s.group}};else{const a=Number(e);this.menuData={...this.menuData,teams:this.menuData.teams.map(l=>l.id!==a?l:{...l,collections:[...l.collections,r],group:s.group})}}}this.loadedFor=null,this.upsellOpen=!1,this.dispatchEvent(new CustomEvent("create",{detail:{context:e,name:i},bubbles:!0,composed:!0}))}catch(o){o instanceof wi?this.toastService?.show(o.message||"Failed to create collection."):this.toastService?.show("Failed to create collection.")}finally{const o=new Set(this.creating);o.delete(e),this.creating=o}}}handleLockedClick(){this.upsellOpen=!0}handleGetPro(){this.navigationService?.navigatePage(wt.PRICING)}renderCollection(t){const e=this.saving.has(t.id),i=t.alreadyFull||t.alreadyUsed||e,o=t.alreadyUsed||t.alreadyFull?"editor/info":null;let s="";return t.alreadyUsed?s="Icon is already in this collection.":t.alreadyFull&&(s="This collection is full."),n`
            <li-list-item
                ${U(s)}
                ?disabled=${i}
                @click=${()=>!i&&this.handleSelect(t.id)}
            >
                ${t.name} ${e?n`<li-spinner></li-spinner>`:T}
                ${!e&&o?n`<li-icon disabled class="gray-400" icon=${o}></li-icon>`:T}
            </li-list-item>
        `}renderCreateRow(t,e){if(t.createType===null)return T;const i=t.createType==="pro";return n`
            <li-inline-create
                placeholder="New collection"
                class=${i?"purple":""}
                ?locked=${i}
                @create=${o=>this.handleCreate(o,e)}
                @locked-click=${this.handleLockedClick}
            >
                <li-pictogram slot="icon" icon="plus"></li-pictogram>
                New collection
                ${i?n`<li-badge slot="badge" class="pro">pro</li-badge>`:T}
            </li-inline-create>
        `}renderUpsell(){return n`
            <div class="upsell">
                <div class="heading">Collections are a PRO feature</div>
                <div class="text">
                    Organize icons into multiple collections and keep your projects organized.
                </div>
                <li-button class="pro sm expand" @click=${this.handleGetPro}>Unlock PRO</li-button>
            </div>
        `}renderPersonalGroup(){const{collections:t,group:e}=this.menuData.personal;return n`
            <div class="group">
                <div class="header">
                    <li-label class="gray sm">Personal</li-label>
                    <li-label class="gray sm">${e.collectionsCount}/${e.limit}</li-label>
                </div>
                ${Ut(t,i=>i.id,i=>this.renderCollection(i))}
                ${this.renderCreateRow(e,"personal")}
                ${this.upsellOpen?this.renderUpsell():T}
            </div>
        `}renderTeamGroup(t){return n`
            <div class="group">
                <div class="header">
                    <li-label class="gray sm">${t.title}</li-label>
                    <li-label class="gray sm"
                        >${t.group.collectionsCount}/${t.group.limit}</li-label
                    >
                </div>
                ${Ut(t.collections,e=>e.id,e=>this.renderCollection(e))}
                ${this.renderCreateRow(t.group,String(t.id))}
            </div>
        `}render(){return this.error?n`<div class="error">Failed to load collections.</div>`:this.menuData?n`
            ${this.renderPersonalGroup()}
            ${this.menuData.teams.map(t=>this.renderTeamGroup(t))}
        `:T}};Y.styles=x(Wr);at([H({context:Ee,subscribe:!0})],Y.prototype,"httpService",2);at([H({context:He,subscribe:!0})],Y.prototype,"toastService",2);at([H({context:Ce,subscribe:!0})],Y.prototype,"navigationService",2);at([H({context:_i,subscribe:!0})],Y.prototype,"lastCollectionService",2);at([c({type:Object})],Y.prototype,"icon",2);at([f()],Y.prototype,"menuData",2);at([f()],Y.prototype,"error",2);at([f()],Y.prototype,"saving",2);at([f()],Y.prototype,"creating",2);at([f()],Y.prototype,"upsellOpen",2);Y=at([S("li-collections-menu-button-overlay")],Y);const Qr='@charset "UTF-8";:host{display:block;box-sizing:border-box;width:17.5rem;padding:var(--space-md);background:#fff;border:1px solid var(--color-gray-300);border-radius:var(--radius-md);-webkit-user-select:none;user-select:none;font-family:var(--font-family)}.title{color:var(--color-navy-300);font-size:var(--font-size-sm);font-weight:var(--font-weight-semibold)}.text{margin-top:var(--space-xs);color:var(--color-gray-500);font-size:var(--font-size-sm);line-height:1.5}.actions{display:flex;gap:var(--space-sm);margin-top:var(--space-xm)}.actions li-button{flex:1}:host(.shadow){box-shadow:0 5px 10px #7171821a}';var Xr=Object.defineProperty,Jr=Object.getOwnPropertyDescriptor,Ai=(t,e,i,o)=>{for(var s=o>1?void 0:o?Jr(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&Xr(e,i,s),s};let xe=class extends w{closePopover(){this.dispatchEvent(new CustomEvent("action",{bubbles:!0,composed:!0}))}handleLogin(){this.closePopover(),this.navigationService?.navigatePage(wt.LOGIN)}handleSignup(){this.closePopover(),this.navigationService?.navigatePage(wt.REGISTER)}render(){return n`
            <div class="title">Sign in to save icons</div>
            <div class="text">
                Sign up or log in to add icons to your collection and access them anytime.
            </div>
            <div class="actions">
                <li-button class="primary-secondary sm expand" @click=${this.handleLogin}>
                    Log in
                </li-button>
                <li-button class="primary sm expand" @click=${this.handleSignup}>
                    Sign up
                </li-button>
            </div>
        `}};xe.styles=x(Qr);Ai([H({context:Ce,subscribe:!0})],xe.prototype,"navigationService",2);xe=Ai([S("li-collections-signin-overlay")],xe);const ta='@charset "UTF-8";:host{display:flex;flex-direction:column;box-sizing:border-box;font-family:var(--font-family);line-height:var(--line-height-lg);gap:var(--space-sm);-webkit-user-select:none;user-select:none}:host(.error){--radio-option-color: var(--color-red-300);--radio-option-dot-color: var(--color-red-300)}:host(.lg){gap:1.25rem;--radio-option-preview-size: 5rem;--radio-option-preview-content-size: 3.125rem}';var ea=Object.defineProperty,ia=Object.getOwnPropertyDescriptor,Ze=(t,e,i,o)=>{for(var s=o>1?void 0:o?ia(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&ea(e,i,s),s};let Jt=class extends w{constructor(){super(...arguments),this.options=[]}updated(t){t.has("value")&&this.syncSlotted()}syncSlotted(){for(const t of this.slottedOptions)t.active=t.value===this.value}get slottedOptions(){const t=this.renderRoot.querySelector("slot");return t?t.assignedElements().filter(e=>e.tagName==="LI-RADIO-OPTION"):[]}handleSelect(t){this.value=t.detail.value,this.syncSlotted(),this.notifyChange()}notifyChange(){const t=new CustomEvent("change",{detail:{value:this.value}});this.dispatchEvent(t)}render(){return n`
            <slot @slotchange=${this.syncSlotted} @radio-select=${this.handleSelect}></slot>
            ${Ut(this.options,t=>t.value,t=>n`
                    <li-radio-option
                        value=${t.value}
                        .active=${this.value==t.value}
                        @radio-select=${this.handleSelect}
                    >
                        ${t.title||t.value}
                        ${t.description?n`<span slot="description">${t.description}</span>`:""}
                    </li-radio-option>
                `)}
        `}};Jt.styles=x(ta);Ze([c()],Jt.prototype,"value",2);Ze([c({type:Array})],Jt.prototype,"options",2);Jt=Ze([S("li-radio-group")],Jt);const sa='@charset "UTF-8";:host{display:block;flex:1;box-sizing:border-box}.radio{position:relative;color:var(--radio-option-color, var(--color-navy-300));cursor:pointer}.radio:hover{color:var(--radio-option-color, var(--color-green-500))}.radio:hover .dot{background:var(--color-gray-200)}.dot{width:1.5rem;height:1.5rem;border:2px solid currentColor;border-radius:50%;box-sizing:border-box;color:var(--radio-option-dot-color, var(--color-gray-400));position:absolute;left:0;top:0}.active .dot{color:var(--radio-option-dot-color, var(--color-navy-300))}.active .dot:after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:.625rem;height:.625rem;background:currentColor;border-radius:50%}.content{display:flex;flex-direction:column;padding-left:calc(1.5rem + var(--space-sm))}.with-preview .content{flex-direction:row;align-items:center;gap:var(--space-sm)}.with-preview .dot{top:50%;transform:translateY(-50%)}.text{display:flex;flex-direction:column}.preview{flex-shrink:0;display:none;align-items:center;justify-content:center;width:var(--radio-option-preview-size, 4rem);height:var(--radio-option-preview-size, 4rem);background:var(--color-gray-200);border-radius:var(--radius-md)}.preview ::slotted(*){width:var(--radio-option-preview-content-size, 2.5rem);height:var(--radio-option-preview-content-size, 2.5rem)}.with-preview .preview{display:flex}.title{font-weight:var(--font-weight-medium);font-size:var(--font-size-sm)}.description{color:var(--color-gray-500);font-weight:var(--font-weight-normal)}';var oa=Object.defineProperty,ra=Object.getOwnPropertyDescriptor,Re=(t,e,i,o)=>{for(var s=o>1?void 0:o?ra(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&oa(e,i,s),s};let Ht=class extends w{constructor(){super(...arguments),this.value="",this.active=!1,this.hasPreview=!1}handleClick(t){t.preventDefault();const e=new CustomEvent("radio-select",{detail:{value:this.value},bubbles:!0});this.dispatchEvent(e)}handlePreviewChange(t){this.hasPreview=t.target.assignedElements().length>0}render(){return n`
            <div
                class=${R({radio:!0,active:this.active,"with-preview":this.hasPreview})}
                @click=${this.handleClick}
            >
                <div class="dot"></div>
                <div class="content">
                    <div class="preview">
                        <slot name="preview" @slotchange=${this.handlePreviewChange}></slot>
                    </div>
                    <div class="text">
                        <div class="title"><slot></slot></div>
                        <div class="description"><slot name="description"></slot></div>
                    </div>
                </div>
            </div>
        `}};Ht.styles=x(sa);Re([c({type:String})],Ht.prototype,"value",2);Re([c({type:Boolean,reflect:!0})],Ht.prototype,"active",2);Re([f()],Ht.prototype,"hasPreview",2);Ht=Re([S("li-radio-option")],Ht);const aa='@charset "UTF-8";:host{display:block;position:relative;-webkit-user-select:none;user-select:none;touch-action:none;cursor:crosshair}.wrapper{position:relative;width:100%;height:9.375rem}.area{width:100%;height:100%;position:relative;border-radius:var(--radius-md);overflow:hidden}.white-overlay,.black-overlay{position:absolute;inset:0}.white-overlay{background:linear-gradient(to right,#fff,#fff0)}.black-overlay{background:linear-gradient(to bottom,transparent,#000)}.thumb{position:absolute;width:1rem;height:1rem;border-radius:50%;border:2px solid white;box-shadow:0 1px 4px #0000004d;transform:translate(-50%,-50%);pointer-events:none;background-color:transparent}';var na=Object.defineProperty,la=Object.getOwnPropertyDescriptor,Le=(t,e,i,o)=>{for(var s=o>1?void 0:o?la(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&na(e,i,s),s};let Nt=class extends w{constructor(){super(),this.hue=0,this.saturation=100,this.value=100,this.startDrag=this.startDrag.bind(this),this.onDrag=this.onDrag.bind(this),this.stopDrag=this.stopDrag.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("mousedown",this.startDrag),this.addEventListener("touchstart",this.startDrag,{passive:!1})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mousedown",this.startDrag),this.removeEventListener("touchstart",this.startDrag)}startDrag(t){t.cancelable&&t.preventDefault(),this.updateColor(t),t.type==="mousedown"?(window.addEventListener("mousemove",this.onDrag),window.addEventListener("mouseup",this.stopDrag)):(window.addEventListener("touchmove",this.onDrag,{passive:!1}),window.addEventListener("touchend",this.stopDrag),window.addEventListener("touchcancel",this.stopDrag))}onDrag(t){t.cancelable&&t.preventDefault(),this.updateColor(t)}stopDrag(){window.removeEventListener("mousemove",this.onDrag),window.removeEventListener("mouseup",this.stopDrag),window.removeEventListener("touchmove",this.onDrag),window.removeEventListener("touchend",this.stopDrag),window.removeEventListener("touchcancel",this.stopDrag)}updateColor(t){const e=this.shadowRoot.querySelector(".wrapper").getBoundingClientRect();let i,o;if(typeof TouchEvent<"u"&&t instanceof TouchEvent){const b=t.touches[0]||t.changedTouches[0];i=b.clientX,o=b.clientY}else i=t.clientX,o=t.clientY;let r=i-e.left,a=o-e.top;r=Math.max(0,Math.min(r,e.width)),a=Math.max(0,Math.min(a,e.height));let l=r/e.width*100,h=100-a/e.height*100;l=Math.round(l),h=Math.round(h),(this.saturation!==l||this.value!==h)&&(this.saturation=l,this.value=h,this.notifyChange())}notifyChange(){this.dispatchEvent(new CustomEvent("change",{detail:{saturation:this.saturation,value:this.value}}))}render(){return n`
            <div class="wrapper">
                <div class="area" style=${Ft({backgroundColor:`hsl(${this.hue}, 100%, 50%)`})}>
                    <div class="white-overlay"></div>
                    <div class="black-overlay"></div>
                </div>
                <div 
                    class="thumb" 
                    style=${Ft({left:`${this.saturation}%`,top:`${100-this.value}%`,backgroundColor:`hsl(${this.hue}, ${this.saturation}%, ${this.value/2}%)`})}
                ></div>
            </div>
        `}};Nt.styles=x(aa);Le([c({type:Number})],Nt.prototype,"hue",2);Le([c({type:Number})],Nt.prototype,"saturation",2);Le([c({type:Number})],Nt.prototype,"value",2);Nt=Le([S("li-saturation-area")],Nt);const ca='@charset "UTF-8";:host{display:block;position:relative}:host(:hover) .container{border-color:var(--color-gray-400)}:host(:focus-within) .container{border-color:var(--color-green-300)}.container{display:flex;flex-direction:row;align-items:center;text-align:center;position:relative;box-sizing:border-box;overflow:hidden;padding:0 var(--space-xm);border:1px solid var(--color-gray-300);background:var(--color-white-100);border-radius:var(--radius-md);gap:var(--space-sm)}.close{cursor:pointer}.close:hover{color:var(--color-green-300)}.close.hidden{visibility:hidden;pointer-events:none}input{display:block;width:100%;box-sizing:border-box;height:inherit;line-height:3rem;border:0;outline:0;font-family:var(--font-family);font-size:var(--font-size-md);font-weight:var(--font-weight-normal);background:transparent;padding:0;text-overflow:ellipsis}input::placeholder{color:var(--color-gray-500);text-overflow:ellipsis}::selection{color:var(--color-navy-300);background:var(--color-green-200)}.suggestions{position:absolute;top:100%;left:0;right:0;z-index:100;background:var(--color-white-100);border:1px solid var(--color-gray-300);border-radius:var(--radius-lg);box-shadow:var(--shadow-popover);padding:4px;overflow:hidden}.suggestions li-list-item{cursor:pointer}.suggestions .typed{font-weight:var(--font-weight-normal)}.suggestions b{font-weight:var(--font-weight-semibold)}';var ha=Object.defineProperty,da=Object.getOwnPropertyDescriptor,W=(t,e,i,o)=>{for(var s=o>1?void 0:o?da(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&ha(e,i,s),s};const pa=500,ua=300,ma=2;let A=class extends w{constructor(){super(),this.placeholder="Search...",this.query="",this.autofocus=!1,this.autoselect=!0,this.free=!1,this.hasContent=!1,this.suggestions=[],this.showSuggestions=!1,this.highlightedIndex=-1,this.tabIndex=0,this.keyDown=this.keyDown.bind(this),this.keyPress=this.keyPress.bind(this)}updated(t){if(this.autofocus&&this.focusAndSelect(),t.has("query")&&this.query!==void 0){const e=(this.searchValueInput?.value??"").trim().toLowerCase();this.query.trim().toLowerCase()!==e&&(this.value=this.query,this.closeSuggestions())}}connectedCallback(){super.connectedCallback(),this._shortcutCleanup=yt.register("meta+k",()=>this.focusAndSelect())}disconnectedCallback(){this._shortcutCleanup?.(),this._shortcutCleanup=void 0,super.disconnectedCallback(),this._activeDebouncer?.cancel(),this._suggestionDebouncer?.cancel()}keyPress(t){t.key==='"'&&t.preventDefault()}keyDown(t){(t.ctrlKey||t.metaKey)&&t.key==="k"?(t.preventDefault(),this.focusAndSelect()):t.key==="Escape"?this.showSuggestions?this.closeSuggestions():this.clear():t.key==="ArrowDown"&&this.showSuggestions?(t.preventDefault(),this.highlightedIndex=Math.min(this.highlightedIndex+1,this.suggestions.length-1)):t.key==="ArrowUp"&&this.showSuggestions?(t.preventDefault(),this.highlightedIndex=Math.max(this.highlightedIndex-1,-1)):t.key==="Enter"&&this.showSuggestions&&this.highlightedIndex>=0&&(t.preventDefault(),this.selectSuggestion(this.suggestions[this.highlightedIndex]))}input(){this.change()}onFreeChange(t){this.free=t.detail.value,this.scheduleEmit()}change(){this.scheduleEmit(),this._suggestionDebouncer=Me(this._suggestionDebouncer,Mt(ua),()=>this.fetchSuggestions())}scheduleEmit(){this._activeDebouncer=Me(this._activeDebouncer,Mt(pa),()=>{const t=this.searchValueInput.value.trim().toLowerCase();this.hasContent=t.length>0,this.emitChange(t)})}async fetchSuggestions(){const t=this.searchValueInput?.value?.trim()??"";if(!this.httpService||t.length<ma){this.closeSuggestions();return}try{const e=await this.httpService.get("/api/library/query",{queryParams:{query:t,family:this.variant?.family,style:this.variant?.style}});this.suggestions=Array.isArray(e)?e:[],this.showSuggestions=this.suggestions.length>0,this.highlightedIndex=-1}catch{this.suggestions=[],this.showSuggestions=!1}}selectSuggestion(t){this.searchValueInput.value=t.query,this.hasContent=!0,this._activeDebouncer?.cancel(),this._suggestionDebouncer?.cancel(),this.closeSuggestions(),this.emitChange(t.query)}closeSuggestions(){this.showSuggestions=!1,this.suggestions=[],this.highlightedIndex=-1}onInputBlur(){setTimeout(()=>this.closeSuggestions(),150)}renderSuggestionTitle(t){const e=this.searchValueInput?.value?.trim()??"";return!e||e.length>=t.length?n`${t}`:n`<span
            ><span class="typed">${t.slice(0,e.length)}</span
            ><b>${t.slice(e.length)}</b></span
        >`}clear(){this.searchValueInput.value="",this.hasContent=!1,this._activeDebouncer?.cancel(),this._suggestionDebouncer?.cancel(),this.closeSuggestions(),this.emitChange("")}focusAndSelect(){this.searchValueInput.focus(),this.searchValueInput.select()}focused(){this.autoselect&&this.searchValueInput.setSelectionRange(0,this.searchValueInput.value.length)}render(){return n`
            <div class="container">
                <li-icon icon="editor/search" class="gray" trigger="hover"></li-icon>

                <input
                    id="input"
                    maxlength="16"
                    type="text"
                    autocomplete="off"
                    spellcheck="false"
                    @input=${this.input}
                    @keypress=${this.keyPress}
                    @focus=${this.focused}
                    @keydown=${this.keyDown}
                    @blur=${this.onInputBlur}
                    placeholder=${this.placeholder}
                />

                <li-icon
                    class=${R({close:!0,hidden:!this.hasContent})}
                    trigger="hover"
                    icon="editor/close"
                    @click=${this.clear}
                ></li-icon>

                <li-switch
                    label="Free only"
                    .value=${this.free}
                    @change=${this.onFreeChange}
                ></li-switch>
            </div>

            ${this.showSuggestions&&this.suggestions.length>0?n`
                          <div
                              class="suggestions"
                              @mousedown=${t=>t.preventDefault()}
                          >
                              ${this.suggestions.map((t,e)=>n`
                                  <li-list-item
                                      ?active=${this.highlightedIndex===e}
                                      @click=${()=>this.selectSuggestion(t)}
                                  >
                                      ${this.renderSuggestionTitle(t.title)}
                                  </li-list-item>
                              `)}
                          </div>
                      `:null}
        `}emitChange(t){this.dispatchEvent(new CustomEvent("change",{detail:{value:t,free:this.free}}))}set value(t){this.searchValueInput.value=t,this.hasContent=t.length>0}get value(){return this.searchValueInput.value}};A.styles=x(ca);W([H({context:Ee,subscribe:!0})],A.prototype,"httpService",2);W([E("#input",!0)],A.prototype,"searchValueInput",2);W([c({type:String})],A.prototype,"placeholder",2);W([c({type:String})],A.prototype,"query",2);W([c({type:Boolean})],A.prototype,"autofocus",2);W([c({type:Boolean})],A.prototype,"autoselect",2);W([c({type:Boolean})],A.prototype,"free",2);W([c({type:Object})],A.prototype,"variant",2);W([f()],A.prototype,"hasContent",2);W([f()],A.prototype,"suggestions",2);W([f()],A.prototype,"showSuggestions",2);W([f()],A.prototype,"highlightedIndex",2);A=W([S("li-search")],A);const ga='@charset "UTF-8";:host{display:block;width:var(--state-preview-size, 32px);height:var(--state-preview-size, 32px)}lord-icon,img{display:block;width:100%;height:100%}';var fa=Object.defineProperty,va=Object.getOwnPropertyDescriptor,St=(t,e,i,o)=>{for(var s=o>1?void 0:o?va(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&fa(e,i,s),s};let ct=class extends w{constructor(){super(...arguments),this.icon=null,this.animation=!0}updated(t){(t.has("icon")||t.has("src")||t.has("state")||t.has("animation"))&&this.refresh()}refresh(){if(!(!this.state||!this.icon&&!this.src))if(this.icon?this.iconElement.icon=this.icon:this.iconElement.src!==this.src&&(this.iconElement.src=this.src),this.iconElement.state=this.state,this.animation){const{trigger:t,delay:e,clickToReplay:i}=$s(this.state);e?this.iconElement.setAttribute("delay",e.toString()):this.iconElement.removeAttribute("delay"),i?this.iconElement.setAttribute("click-to-replay",""):this.iconElement.removeAttribute("click-to-replay"),this.iconElement.trigger=t}else this.iconElement.trigger="last-frame"}render(){return n`
            <lord-icon loading="lazy" .target=${this.target}>
                ${this.fallback?n`<img alt="" src=${this.fallback} />`:""}
            </lord-icon>
        `}};ct.styles=x(ga);St([E("lord-icon",!0)],ct.prototype,"iconElement",2);St([c({type:Object})],ct.prototype,"icon",2);St([c({type:String})],ct.prototype,"src",2);St([c({type:String})],ct.prototype,"fallback",2);St([c({type:String})],ct.prototype,"state",2);St([c({type:String})],ct.prototype,"target",2);St([c()],ct.prototype,"animation",2);ct=St([S("li-state-preview")],ct);const ya=":host{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;background:var(--color-white-100);border-radius:var(--radius-md);border:1px solid var(--color-gray-300);font-family:var(--font-family);font-weight:var(--font-weight-medium);font-size:var(--font-size-sm);line-height:var(--line-height-lg);padding:var(--space-xs);-webkit-user-select:none;user-select:none}div{flex:1;text-align:center;position:relative;color:var(--color-navy-300);border-radius:var(--radius-sm);cursor:pointer}div:hover{color:var(--color-navy-300);background:var(--color-gray-200)}div.active{color:var(--color-green-500);background:var(--color-green-50)}";var ba=Object.defineProperty,wa=Object.getOwnPropertyDescriptor,Qe=(t,e,i,o)=>{for(var s=o>1?void 0:o?wa(e,i):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(s=(o?a(e,i,s):a(s))||s);return o&&s&&ba(e,i,s),s};let te=class extends w{constructor(){super(...arguments),this.options=[]}selectOption(t,e){e.preventDefault(),this.value=t.value,this.notifyChange()}notifyChange(){const t=new CustomEvent("change",{detail:{value:this.value}});this.dispatchEvent(t)}render(){return n`
            ${Ut(this.options,t=>t.value,t=>n`
                    <div
                        class=${R({active:this.value==t.value})}
                        @click=${this.selectOption.bind(this,t)}
                    >
                        ${t.title||t.value}
                    </div>
                `)}
        `}};te.styles=x(ya);Qe([c()],te.prototype,"value",2);Qe([c({type:Array})],te.prototype,"options",2);te=Qe([S("li-value-switch")],te);export{Fe as D,C as E,G as I,Xt as L,No as S,we as a,ut as b,Ra as c,_s as d,ys as e,ni as f,hi as g,Pa as h,rs as i,Es as j,ns as k,_a as l,La as m,Ea as n,Ta as o,Oa as r,ka as s};
//# sourceMappingURL=value-switch.component.DI6pY0ht.js.map
