(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[664],{7170:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/voting",function(){return t(4234)}])},4234:function(e,o,t){"use strict";t.r(o);var n=t(5893),i=t(9669),_=t.n(i),a=t(1664),s=t(1163),c=t(7294),r=t(6737),m=t.n(r),h=t(214),u=t.n(h);function l(e){var o=(0,c.useState)(!1),t=(o[0],o[1]),i=(0,c.useState)([]),r=i[0],h=i[1],l=(0,c.useState)(""),d=l[0],g=l[1],p=(0,c.useState)(""),b=p[0],x=p[1],H=(0,s.useRouter)(),v=function(e,o,n){var i={id_user:b,id_kandidat:n,keterangan:"selesai"};m()({title:"Apakah kamu sudah yakin?",icon:"warning",buttons:!0,dangerMode:!0}).then((function(n){n?_().post("http://evotinghmb.herokuapp.com/votes",i).then((function(t){console.log(t.data),m()("Terima kasih sudah memilih",{icon:"success"}),H.push("/"),function(e,o){var t={jumlah_suara:o+1};console.log(t),_().put("http://evotinghmb.herokuapp.com/kandidats/".concat(e),t).then((function(e){console.log("Suara Masuk",e.data)}))}(e,o),_().put("http://evotinghmb.herokuapp.com/users/".concat(d),{status_user:0,keterangan:"sudah memilih"}).then((function(e){console.log(e.data,"Berhasil update status")}))})):t(!1)}))};return(0,c.useEffect)((function(){_().get("http://evotinghmb.herokuapp.com/kandidats").then((function(e){var o=e.data;console.log(o),h(o)})),function(){var e=localStorage.getItem("loginKey");_().get("http://evotinghmb.herokuapp.com/users/usr/".concat(e)).then((function(e){var o=e.data;g(o._id),x(o.username),console.log(o)}))}()}),[]),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:u().container,children:[(0,n.jsx)("div",{className:u().right2,children:(0,n.jsx)(a.default,{href:"/",children:(0,n.jsx)("button",{className:"btn btn-outline-warning",children:"Kembali"})})}),(0,n.jsx)("div",{className:u().bg}),(0,n.jsx)("div",{className:u().bg+u().bg2}),(0,n.jsx)("div",{className:u().bg+u().bg3}),(0,n.jsx)("div",{className:u().content2,children:(0,n.jsx)("h1",{children:"Voting Now"})}),(0,n.jsx)("div",{className:u().centeringContent,children:(0,n.jsx)("div",{className:u().boxPemilihan,children:(0,n.jsx)("div",{className:"row",children:r.map((function(e,o){return(0,n.jsx)("div",{className:"col-md",children:(0,n.jsx)("a",{style:{textDecoration:"none",color:"black"},href:"#",onClick:function(){v(e._id,e.jumlah_suara,e.nama),t(!0)},children:(0,n.jsxs)("div",{className:u().boxCalon,children:[(0,n.jsx)("img",{src:"http://evotinghmb.herokuapp.com/resources/uploads/".concat(e.foto),className:u().sizing}),(0,n.jsxs)("h2",{children:["No Urut ",o+1]}),(0,n.jsx)("h2",{children:e.nama})]})})},o)}))})})})]})})}l.title="Voting",o.default=l},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb",inputPosition:"Home_inputPosition__MpUCg",sizeLogo:"Home_sizeLogo__6GAlF",background:"Home_background__I_nYJ",box1:"Home_box1__wKD0u",textbox1:"Home_textbox1__vSMCR",setactive:"Home_setactive__kYRok",textCentering:"Home_textCentering__F3k32",topper:"Home_topper__J_NLY",sider:"Home_sider__pUmOy",boxPemilih:"Home_boxPemilih___VFug",boxKandidat:"Home_boxKandidat__D3hR_",boxSudahPilih:"Home_boxSudahPilih__0jGtP",boxBelumPilih:"Home_boxBelumPilih__2T2RA",toppers:"Home_toppers__ofnKY",whiteText:"Home_whiteText__zy_Mp",uppers:"Home_uppers__4TN7u",righthere:"Home_righthere__235HS",bg:"Home_bg__MDUv5",slide:"Home_slide__DJiuc",bg2:"Home_bg2__YptbV",bg3:"Home_bg3__AcJz3",content:"Home_content__Zy02X",centeringContent:"Home_centeringContent___7nHv",boxPemilihan:"Home_boxPemilihan__GtWJd",boxPemilihan2:"Home_boxPemilihan2__5WpXi",right2:"Home_right2__BRhqI",content2:"Home_content2__fY9rW",boxCalon:"Home_boxCalon__p82cG",sizing:"Home_sizing__9US2V",charts:"Home_charts__Kc9Dd",attractive:"Home_attractive__5vT7J"}}},function(e){e.O(0,[173,391,774,888,179],(function(){return o=7170,e(e.s=o);var o}));var o=e.O();_N_E=o}]);