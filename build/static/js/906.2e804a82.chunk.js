"use strict";(self.webpackChunkntask=self.webpackChunkntask||[]).push([[906],{4906:function(t,n,i){i.r(n),i.d(n,{default:function(){return d}});i(2791);var e=i(9712),a=i(2906),r=i(5777),o=i(7689),s=i(184);function l(t){var n=t.greeting,i=(0,o.s0)();return(0,s.jsxs)(e.xu,{as:"div",sx:{display:"flex",flexDirection:{base:"column",md:"row"},gap:1},children:[(0,s.jsx)(e.xu,{sx:{flex:2,display:"flex",flexDirection:"column",textAlign:"center",justifyContent:"center",alignItems:"center"},children:(0,s.jsxs)(a.Rg,{in:!0,offsetY:"-20rem",children:[(0,s.jsx)(e.xv,{fontSize:"6xl",fontWeight:"bold",children:(0,s.jsx)(e.y$,{query:"nTask",styles:{color:"purple.500"},children:n})}),(0,s.jsx)(r.zx,{colorScheme:"twitter",size:"lg",sx:{borderRadius:"2rem",mt:3},onClick:function(){i("/events")},children:"Qu\u1ea3n l\xfd s\u1ef1 ki\u1ec7n"})]})}),(0,s.jsx)(e.xu,{sx:{flex:3},children:(0,s.jsx)(a.Rg,{in:!0,offsetX:"50rem",children:(0,s.jsx)("img",{src:"/banner.jpg",alt:"banner",style:{borderRadius:"1rem"}})})})]})}var d=function(){return(0,s.jsx)(e.xu,{as:"div",children:(0,s.jsx)(l,{greeting:"Ch\xe0o m\u1eebng b\u1ea1n \u0111\u1ebfn v\u1edbi \u1ee9ng d\u1ee5ng nTask \ud83d\udc4b"})})}},2906:function(t,n,i){i.d(n,{MT:function(){return R},Mi:function(){return X},Qh:function(){return S},Rg:function(){return C},Xc:function(){return Y},uf:function(){return j}});var e=i(9439),a=i(5987),r=i(1413),o=i(2791),s=i(4549),l=i(3946),d=["in","unmountOnExit","animateOpacity","startingHeight","endingHeight","style","className","transition","transitionEnd"],u=["unmountOnExit","in","className","transition","transitionEnd","delay"],c=["unmountOnExit","in","reverse","initialScale","className","transition","transitionEnd","delay"],x=["direction","style","unmountOnExit","in","className","transition","transitionEnd","delay","motionProps"],v=["unmountOnExit","in","reverse","className","offsetX","offsetY","transition","transitionEnd","delay"],f=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return n.filter(Boolean).join(" ")};var m={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},y={position:{left:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"-100%",y:0}},E={position:{right:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"100%",y:0}},g={position:{top:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"-100%"}},h={position:{bottom:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"100%"}};function p(t){var n;switch(null!==(n=null==t?void 0:t.direction)&&void 0!==n?n:"right"){case"right":default:return E;case"left":return y;case"bottom":return h;case"top":return g}}var Z={enter:{duration:.2,ease:m.easeOut},exit:{duration:.1,ease:m.easeIn}},O=function(t,n){return(0,r.Z)((0,r.Z)({},t),{},{delay:"number"===typeof n?n:null==n?void 0:n.enter})},N=function(t,n){return(0,r.Z)((0,r.Z)({},t),{},{delay:"number"===typeof n?n:null==n?void 0:n.exit})},b={exit:{height:{duration:.2,ease:m.ease},opacity:{duration:.3,ease:m.ease}},enter:{height:{duration:.3,ease:m.ease},opacity:{duration:.4,ease:m.ease}}},k={exit:function(t){var n,i,e=t.animateOpacity,a=t.startingHeight,o=t.transition,s=t.transitionEnd,l=t.delay;return(0,r.Z)((0,r.Z)({},e&&{opacity:(i=a,null!=i&&parseInt(i.toString(),10)>0?1:0)}),{},{height:a,transitionEnd:null==s?void 0:s.exit,transition:null!==(n=null==o?void 0:o.exit)&&void 0!==n?n:N(b.exit,l)})},enter:function(t){var n,i=t.animateOpacity,e=t.endingHeight,a=t.transition,o=t.transitionEnd,s=t.delay;return(0,r.Z)((0,r.Z)({},i&&{opacity:1}),{},{height:e,transitionEnd:null==o?void 0:o.enter,transition:null!==(n=null==a?void 0:a.enter)&&void 0!==n?n:O(b.enter,s)})}};(0,o.forwardRef)((function(t,n){var i,u=t.in,c=t.unmountOnExit,x=t.animateOpacity,v=void 0===x||x,m=t.startingHeight,y=void 0===m?0:m,E=t.endingHeight,g=void 0===E?"auto":E,h=t.style,p=t.className,Z=t.transition,O=t.transitionEnd,N=(0,a.Z)(t,d),b=(0,o.useState)(!1),w=(0,e.Z)(b,2),j=w[0],S=w[1];(0,o.useEffect)((function(){var t=setTimeout((function(){S(!0)}));return function(){return clearTimeout(t)}}),[]),i={condition:Boolean(y>0&&c),message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"},i.message;var R=parseFloat(y.toString())>0,H={startingHeight:y,endingHeight:g,animateOpacity:v,transition:j?Z:{enter:{duration:0}},transitionEnd:{enter:null==O?void 0:O.enter,exit:c?null==O?void 0:O.exit:(0,r.Z)((0,r.Z)({},null==O?void 0:O.exit),{},{display:R?"block":"none"})}},M=!c||u,X=u||c?"enter":"exit";return o.createElement(s.M,{initial:!1,custom:H},M&&o.createElement(l.E.div,(0,r.Z)((0,r.Z)({ref:n},N),{},{className:f("chakra-collapse",p),style:(0,r.Z)({overflow:"hidden",display:"block"},h),custom:H,variants:k,initial:!!c&&"exit",animate:X,exit:"exit"})))})).displayName="Collapse";var w={enter:function(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=n.transition,e=n.transitionEnd,a=n.delay;return{opacity:1,transition:null!==(t=null==i?void 0:i.enter)&&void 0!==t?t:O(Z.enter,a),transitionEnd:null==e?void 0:e.enter}},exit:function(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=n.transition,e=n.transitionEnd,a=n.delay;return{opacity:0,transition:null!==(t=null==i?void 0:i.exit)&&void 0!==t?t:N(Z.exit,a),transitionEnd:null==e?void 0:e.exit}}},j={initial:"exit",animate:"enter",exit:"exit",variants:w};(0,o.forwardRef)((function(t,n){var i=t.unmountOnExit,e=t.in,d=t.className,c=t.transition,x=t.transitionEnd,v=t.delay,m=(0,a.Z)(t,u),y=e||i?"enter":"exit",E=!i||e&&i,g={transition:c,transitionEnd:x,delay:v};return o.createElement(s.M,{custom:g},E&&o.createElement(l.E.div,(0,r.Z)((0,r.Z)({ref:n,className:f("chakra-fade",d),custom:g},j),{},{animate:y},m)))})).displayName="Fade";var S={initial:"exit",animate:"enter",exit:"exit",variants:{exit:function(t){var n,i=t.reverse,e=t.initialScale,a=t.transition,o=t.transitionEnd,s=t.delay;return(0,r.Z)((0,r.Z)({opacity:0},i?{scale:e,transitionEnd:null==o?void 0:o.exit}:{transitionEnd:(0,r.Z)({scale:e},null==o?void 0:o.exit)}),{},{transition:null!==(n=null==a?void 0:a.exit)&&void 0!==n?n:N(Z.exit,s)})},enter:function(t){var n,i=t.transitionEnd,e=t.transition,a=t.delay;return{opacity:1,scale:1,transition:null!==(n=null==e?void 0:e.enter)&&void 0!==n?n:O(Z.enter,a),transitionEnd:null==i?void 0:i.enter}}}},R=(0,o.forwardRef)((function(t,n){var i=t.unmountOnExit,e=t.in,d=t.reverse,u=void 0===d||d,x=t.initialScale,v=void 0===x?.95:x,m=t.className,y=t.transition,E=t.transitionEnd,g=t.delay,h=(0,a.Z)(t,c),p=!i||e&&i,Z=e||i?"enter":"exit",O={initialScale:v,reverse:u,transition:y,transitionEnd:E,delay:g};return o.createElement(s.M,{custom:O},p&&o.createElement(l.E.div,(0,r.Z)((0,r.Z)({ref:n,className:f("chakra-offset-slide",m)},S),{},{animate:Z,custom:O},h)))}));R.displayName="ScaleFade";var H={exit:{duration:.15,ease:m.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},M={exit:function(t){var n,i=t.direction,e=t.transition,a=t.transitionEnd,o=t.delay,s=p({direction:i}).exit;return(0,r.Z)((0,r.Z)({},s),{},{transition:null!==(n=null==e?void 0:e.exit)&&void 0!==n?n:N(H.exit,o),transitionEnd:null==a?void 0:a.exit})},enter:function(t){var n,i=t.direction,e=t.transitionEnd,a=t.transition,o=t.delay,s=p({direction:i}).enter;return(0,r.Z)((0,r.Z)({},s),{},{transition:null!==(n=null==a?void 0:a.enter)&&void 0!==n?n:O(H.enter,o),transitionEnd:null==e?void 0:e.enter})}},X=(0,o.forwardRef)((function(t,n){var i=t.direction,e=void 0===i?"right":i,d=t.style,u=t.unmountOnExit,c=t.in,v=t.className,m=t.transition,y=t.transitionEnd,E=t.delay,g=t.motionProps,h=(0,a.Z)(t,x),Z=p({direction:e}),O=Object.assign({position:"fixed"},Z.position,d),N=!u||c&&u,b=c||u?"enter":"exit",k={transitionEnd:y,transition:m,direction:e,delay:E};return o.createElement(s.M,{custom:k},N&&o.createElement(l.E.div,(0,r.Z)((0,r.Z)({},h),{},{ref:n,initial:"exit",className:f("chakra-slide",v),animate:b,exit:"exit",custom:k,variants:M,style:O},g)))}));X.displayName="Slide";var Y={initial:"initial",animate:"enter",exit:"exit",variants:{initial:function(t){var n,i=t.offsetX,e=t.offsetY,a=t.transition,r=t.transitionEnd,o=t.delay;return{opacity:0,x:i,y:e,transition:null!==(n=null==a?void 0:a.exit)&&void 0!==n?n:N(Z.exit,o),transitionEnd:null==r?void 0:r.exit}},enter:function(t){var n,i=t.transition,e=t.transitionEnd,a=t.delay;return{opacity:1,x:0,y:0,transition:null!==(n=null==i?void 0:i.enter)&&void 0!==n?n:O(Z.enter,a),transitionEnd:null==e?void 0:e.enter}},exit:function(t){var n,i=t.offsetY,e=t.offsetX,a=t.transition,o=t.transitionEnd,s=t.reverse,l=t.delay,d={x:e,y:i};return(0,r.Z)({opacity:0,transition:null!==(n=null==a?void 0:a.exit)&&void 0!==n?n:N(Z.exit,l)},s?(0,r.Z)((0,r.Z)({},d),{},{transitionEnd:null==o?void 0:o.exit}):{transitionEnd:(0,r.Z)((0,r.Z)({},d),null==o?void 0:o.exit)})}}},C=(0,o.forwardRef)((function(t,n){var i=t.unmountOnExit,e=t.in,d=t.reverse,u=void 0===d||d,c=t.className,x=t.offsetX,m=void 0===x?0:x,y=t.offsetY,E=void 0===y?8:y,g=t.transition,h=t.transitionEnd,p=t.delay,Z=(0,a.Z)(t,v),O=!i||e&&i,N=e||i?"enter":"exit",b={offsetX:m,offsetY:E,reverse:u,transition:g,transitionEnd:h,delay:p};return o.createElement(s.M,{custom:b},O&&o.createElement(l.E.div,(0,r.Z)((0,r.Z)({ref:n,className:f("chakra-offset-slide",c),custom:b},Y),{},{animate:N},Z)))}));C.displayName="SlideFade"}}]);
//# sourceMappingURL=906.2e804a82.chunk.js.map