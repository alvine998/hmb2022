(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{2410:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/kotak-suara",function(){return t(2841)}])},5279:function(e,i,t){"use strict";t.d(i,{jY:function(){return s},qw:function(){return n},Ns:function(){return o}});var s={src:"/_next/static/media/logo.95360869.png",height:612,width:812,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAwElEQVR42g3DPQsBcRwH8O/1z4uxkJiwyOOAJAxGk5cgg7wIhMVkMdgUueFyHv6eDZxBSh2XYlFSF/X3+9QHE2GAStUZB3U3+MSjijeoBJCssWcufQ3qKz2PonA/CetlG8hcNVCGyndkyT/6oE35Z4iB+RKB26ZV/FxALajt26y8qoMmutpcdA47kZv1UqWtAsrgXXDmHqugoRhXzPhUNv1jORxZqqAM6fNGinIZ1B5eKc7geuSITIe2pK4hqWvSH78pbeQqeq0+AAAAAElFTkSuQmCC"},o={src:"/_next/static/media/votebox.bd6429d7.png",height:500,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAt0lEQVR42mOAgSf//7PA2PeR2Aw2DAyMMPbtxvY9d5o6DsH4RSC5////gxWsXbE67s6kaf/vTZ7xf/3SFckMyODggUOhz16+/P/sydO/QPzn+atX/48cPhoLV3DvwcOCf9+/////6dP3f+/ff//39ev/B4+fVCAUPH5S+PfT5/9/nz77//fZ8/9/373//+DZs0q4gtOnzwa9evP2wpsPH/e9+fhx36u3by+cPXsuAiQHcSQmgMsBABh5cm97dlpGAAAAAElFTkSuQmCC"},n={src:"/_next/static/media/quickcount.5579165e.png",height:217,width:438,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAgUlEQVR42mMAgf9MDCU/9dU6GPaukWCAgt02RcwQ1rH/zS+javs+WHDPzZnYu+isD4PN+QQGLpDUuekRLAwMh/5ve5jSPfuVu96a7ClTl+yO09q9Iyq7ZZ/ORFsGBhA49H/Oo+Su9ovxkQdK+yatW1GasHJZRP2hQ7H1Xf//MyQBAGZNNCJ6WjsyAAAAAElFTkSuQmCC"}},2841:function(e,i,t){"use strict";t.r(i);var s=t(5893),o=t(7294),n=t(5314),a=t(214),c=t.n(a),d=t(1163),r=t(9669),l=t.n(r);function h(e){var i=(0,o.useState)([]),t=i[0],a=i[1],r=(0,o.useState)(""),h=(r[0],r[1],(0,o.useState)("")),_=(h[0],h[1],(0,o.useState)("")),m=(_[0],_[1],(0,d.useRouter)());return(0,o.useEffect)((function(){!function(){var e=localStorage.getItem("loginKey");console.log(e),(null==e||"admin"!==e)&&m.push("/login")}(),l().get("http://evotinghmb.herokuapp.com/votes").then((function(e){var i=e.data;console.log(i),a(i.reverse())}))}),[]),(0,s.jsx)("div",{style:{overflow:"hidden"},children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-md-3",children:(0,s.jsx)(n.default,{kotak:!0})}),(0,s.jsx)("div",{className:"col-md",children:(0,s.jsxs)("div",{className:"container "+c().uppers,children:[(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-md-3 "+c().righthere,children:(0,s.jsx)("input",{className:"form-control",type:"text",placeholder:"Cari disini"})}),(0,s.jsx)("div",{className:"col-md-2",children:(0,s.jsx)("button",{className:"btn btn-outline-success w-50",children:"Cari"})})]}),(0,s.jsxs)("table",{class:"table",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{scope:"col",children:"No"}),(0,s.jsx)("th",{scope:"col",children:"Kandidat"}),(0,s.jsx)("th",{scope:"col",children:"Pemilih"}),(0,s.jsx)("th",{scope:"col",children:"Waktu Memilih"})]})}),(0,s.jsx)("tbody",{children:t.map((function(e,i){return(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{scope:"row",children:i+1}),(0,s.jsx)("td",{children:e.id_kandidat}),(0,s.jsx)("td",{children:e.id_user}),(0,s.jsx)("td",{children:e.createdAt.substr(0,19)})]},i)}))})]})]})})]})})}h.title="Kotak-Suara",i.default=h},5314:function(e,i,t){"use strict";t.r(i);var s=t(5893),o=t(5675),n=t(1664),a=(t(7294),t(5279)),c=t(214),d=t.n(c);i.default=function(e){return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"container "+d().topper,children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-md-4",children:(0,s.jsx)("div",{className:d().sider,children:(0,s.jsx)(o.default,{src:a.jY,height:50,width:70})})}),(0,s.jsx)("div",{className:"col-md",children:(0,s.jsx)("h5",{className:d().textCentering,children:"E-Voting HIMABO"})})]})}),(0,s.jsx)("hr",{}),(0,s.jsxs)("div",{className:d().background,children:[(0,s.jsx)(n.default,{href:"/admin",children:(0,s.jsx)("div",{className:e.dashboard?d().setactive:d().box1,children:(0,s.jsx)("div",{className:d().textbox1,children:(0,s.jsx)("h5",{children:"Dashboard"})})})}),(0,s.jsx)(n.default,{href:"/admin/data-pemilih",children:(0,s.jsx)("div",{style:{marginTop:10},className:e.pemilih?d().setactive:d().box1,children:(0,s.jsx)("div",{className:d().textbox1,children:(0,s.jsx)("h5",{children:"Data Pemilih"})})})}),(0,s.jsx)(n.default,{href:"/admin/data-kandidat",children:(0,s.jsx)("div",{style:{marginTop:10},className:e.kandidat?d().setactive:d().box1,children:(0,s.jsx)("div",{className:d().textbox1,children:(0,s.jsx)("h5",{children:"Data Kandidat"})})})}),(0,s.jsx)(n.default,{href:"/admin/kotak-suara",children:(0,s.jsx)("div",{style:{marginTop:10},className:e.kotak?d().setactive:d().box1,children:(0,s.jsx)("div",{className:d().textbox1,children:(0,s.jsx)("h5",{children:"Kotak Suara"})})})}),(0,s.jsx)(n.default,{href:"/admin/quick-count",children:(0,s.jsx)("div",{style:{marginTop:10},className:e.quick?d().setactive:d().box1,children:(0,s.jsx)("div",{className:d().textbox1,children:(0,s.jsx)("h5",{children:"Quick Count"})})})}),(0,s.jsx)(n.default,{href:"/login",children:(0,s.jsx)("div",{onClick:function(){localStorage.removeItem("loginKey")},style:{marginTop:10},className:d().box1,children:(0,s.jsx)("div",{className:d().textbox1,children:(0,s.jsx)("h5",{children:"Keluar"})})})})]})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb",inputPosition:"Home_inputPosition__MpUCg",sizeLogo:"Home_sizeLogo__6GAlF",background:"Home_background__I_nYJ",box1:"Home_box1__wKD0u",textbox1:"Home_textbox1__vSMCR",setactive:"Home_setactive__kYRok",textCentering:"Home_textCentering__F3k32",topper:"Home_topper__J_NLY",sider:"Home_sider__pUmOy",boxPemilih:"Home_boxPemilih___VFug",boxKandidat:"Home_boxKandidat__D3hR_",boxSudahPilih:"Home_boxSudahPilih__0jGtP",boxBelumPilih:"Home_boxBelumPilih__2T2RA",toppers:"Home_toppers__ofnKY",whiteText:"Home_whiteText__zy_Mp",uppers:"Home_uppers__4TN7u",righthere:"Home_righthere__235HS",bg:"Home_bg__MDUv5",slide:"Home_slide__DJiuc",bg2:"Home_bg2__YptbV",bg3:"Home_bg3__AcJz3",content:"Home_content__Zy02X",centeringContent:"Home_centeringContent___7nHv",boxPemilihan:"Home_boxPemilihan__GtWJd",boxPemilihan2:"Home_boxPemilihan2__5WpXi",right2:"Home_right2__BRhqI",content2:"Home_content2__fY9rW",boxCalon:"Home_boxCalon__p82cG",sizing:"Home_sizing__9US2V",charts:"Home_charts__Kc9Dd",attractive:"Home_attractive__5vT7J"}},1163:function(e,i,t){e.exports=t(387)}},function(e){e.O(0,[173,675,774,888,179],(function(){return i=2410,e(e.s=i);var i}));var i=e.O();_N_E=i}]);