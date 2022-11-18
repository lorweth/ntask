"use strict";(self.webpackChunkntask=self.webpackChunkntask||[]).push([[616],{5604:function(e,n,t){t.d(n,{Z:function(){return c}});t(2791);var i=t(5684),r=t(824),s=t(5863),a=t(1134),l=t(184);function o(e){var n=e.type,t=e.onChange,s=e.onBlur,a=e.value,o=e.innerRef;return"textarea"===n?(0,l.jsx)(i.g,{onChange:t,onBlur:s,value:a,ref:o}):(0,l.jsx)(r.II,{type:n,onChange:t,onBlur:s,value:a,ref:o})}function c(e){var n=e.control,t=e.name,i=e.type,r=e.label,c=e.rules,d=e.sx;return(0,l.jsx)(a.Qr,{name:t,rules:c,control:n,render:function(e){var n=e.field,t=n.onChange,a=n.onBlur,c=n.value,u=n.ref,x=e.fieldState.error;return(0,l.jsxs)(s.NI,{sx:d,isInvalid:!!x,children:[(0,l.jsx)(s.lX,{children:r}),(0,l.jsx)(o,{type:i,onChange:t,onBlur:a,value:c,innerRef:u}),x&&(0,l.jsx)(s.J1,{children:null===x||void 0===x?void 0:x.message})]})}})}},1616:function(e,n,t){t.r(n),t.d(n,{default:function(){return K}});var i=t(4229),r=t(4666),s=t(2791),a=t(9712),l=t(7269),o=t(824),c=t(5777),d=t(1363),u=t(8844),x=t(9434),m=t(6871),h=t(2398),f=t(1413),p=t(9439),j=t(7552),v=t(7335),g=t(1911),D=t(4828),b=t(2157),k=t(184);function C(e){var n=e.eventID,t=e.name,i=e.imageURL,r=e.startAt,s=e.endAt,l=e.members,o=(0,m.s0)(),u=function(e){return new Date(e).toLocaleString("vi-VN",{timeZone:"Asia/Ho_Chi_Minh"})};return(0,k.jsxs)(a.kC,{flexDirection:"column",p:5,mb:4,shadow:"md",borderWidth:"1px",borderRadius:"md",children:[i&&(0,k.jsx)(D.Ee,{src:i,alt:""}),(0,k.jsx)(a.xv,{fontWeight:"500",fontSize:"md",children:t}),(0,k.jsxs)(a.kC,{alignItems:"center",gap:2,children:[(0,k.jsx)(d.G,{icon:g.SZ,color:"gray"}),u(r)]}),(0,k.jsxs)(a.kC,{alignItems:"center",gap:2,children:[(0,k.jsx)(d.G,{icon:v.DH,color:"gray"}),u(s)]}),(0,k.jsx)(a.kC,{justifyContent:"flex-end",children:l&&(0,k.jsx)(b.HE,{size:"sm",max:2,children:l.map((function(e){return(0,k.jsx)(b.qE,{size:"sm",name:e.login,src:e.avatarUrl?"".concat("http://34.172.124.66:8080/files","/").concat(e.avatarUrl):""},e.login)}))})}),(0,k.jsx)(a.kC,{justifyContent:"flex-end",mt:3,children:(0,k.jsx)(c.zx,{colorScheme:"green",size:"sm",onClick:function(){o("/events/".concat(n))},children:"Chi ti\xea\u0301t"})})]})}var A=t(2767);function Y(e){var n=e.title,t=e.dropgableID,i=e.eventStatus,r=(0,s.useState)([]),o=(0,p.Z)(r,2),c=o[0],d=o[1],m=(0,x.v9)((function(e){return e.eventMgmt})),h=m.loading,v=m.createdEvents,g=m.inprogressEvents,D=m.doneEvents;return(0,s.useEffect)((function(){i===A.N3.CREATED?d(v):i===A.N3.IN_PROGRESS?d(g):i===A.N3.DONE&&d(D)}),[v,g,D,i]),(0,k.jsxs)(a.xu,{sx:{display:"flex",flexDirection:"column",flex:1,gap:"1rem"},children:[(0,k.jsxs)(a.xu,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[(0,k.jsx)(a.xv,{fontSize:"xl",fontWeight:"500",children:n}),(0,k.jsx)(a.xv,{children:(null===c||void 0===c?void 0:c.length)||0})]}),(0,k.jsx)(u.bK,{droppableId:t,children:function(e,n){return(0,k.jsxs)(a.xu,{as:"div",ref:e.innerRef,bgColor:n.isDraggingOver&&l.rS.colors.gray[500],children:[h&&(0,k.jsx)(j.Ex,{size:"xs",isIndeterminate:!0}),c&&c.map((function(e,n){return(0,k.jsx)(u._l,{draggableId:"draggable_".concat(e.id),index:n,children:function(n,t){return(0,k.jsx)(a.xu,(0,f.Z)((0,f.Z)((0,f.Z)({as:"div",ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{bgColor:t.isDragging&&l.rS.colors.gray[500],children:(0,k.jsx)(C,{eventID:e.id,name:e.name,imageURL:e.description,startAt:e.startAt,endAt:e.endAt,tags:e.tags,members:e.members})}))}},e.id)}))]})}})]})}var y=t(3382),E=t(5830),I=t(338),S=t(1624),T=t(5604),w=t(1134),z=t(7892),Z=t.n(z);function H(){var e=(0,x.I0)(),n=(0,m.s0)(),t=(0,m.TH)(),i=(0,w.cI)({defaultValues:{name:"",description:"",startAt:Z()().format("YYYY-MM-DDTHH:mm"),endAt:Z()().format("YYYY-MM-DDTHH:mm")}}),r=i.control,l=i.handleSubmit,o=i.watch,u=(0,s.useRef)({});u.current=o("startAt","");var h={name:{required:"Name is required"},description:{required:"Description is required"},startAt:{required:"Start time is required"},endAt:{required:"End time is required",validate:function(e){return Z()(e).isAfter(Z()(u.current.value))||"End time must be after start time"}}};return(0,k.jsxs)(S.u_,{isOpen:!0,onClose:function(){var e,i;n((null===(e=t.state)||void 0===e||null===(i=e.backgroundLocation)||void 0===i?void 0:i.pathname)||-1)},children:[(0,k.jsx)(S.ZA,{}),(0,k.jsxs)(S.hz,{children:[(0,k.jsx)(S.ol,{}),(0,k.jsx)(S.xB,{children:(0,k.jsxs)(a.xv,{fontSize:"2xl",fontWeight:"bold",color:"teal.600",children:[(0,k.jsx)(b.qE,{bg:"teal.500",color:"whiteAlpha.900",icon:(0,k.jsx)(d.G,{icon:I.WR})}),"\xa0T\u1ea1o s\u1ef1 ki\u1ec7n m\u1edbi"]})}),(0,k.jsx)(S.fe,{children:(0,k.jsxs)(a.xu,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem",width:"700",p:2},as:"form",onSubmit:l((function(n){var t=Z()(n.startAt).format("YYYY-MM-DDTHH:mm:ssZ"),i=Z()(n.endAt).format("YYYY-MM-DDTHH:mm:ssZ");e((0,y.yM)((0,f.Z)((0,f.Z)({},n),{},{startAt:t,endAt:i})))})),children:[(0,k.jsx)(T.Z,{control:r,name:"name",type:"text",label:"T\xean s\u1ef1 ki\u1ec7n",rules:h.name}),(0,k.jsx)(T.Z,{control:r,name:"description",type:"textarea",label:"M\xf4 t\u1ea3",rules:h.description}),(0,k.jsx)(T.Z,{control:r,name:"startAt",type:"datetime-local",label:"B\u1eaft \u0111\u1ea7u",rules:h.startAt}),(0,k.jsx)(T.Z,{control:r,name:"endAt",type:"datetime-local",label:"K\u1ebft th\xfac",rules:h.endAt}),(0,k.jsxs)(c.zx,{type:"submit",width:"100%",mt:2,children:[(0,k.jsx)(d.G,{icon:E.Ed}),"\xa0L\u01b0u"]})]})})]})]})}var M=t(3433),N=t(5521),R=t(7507),O=t(5863),q=t(7717),G=t(8096);function B(e){var n=e.title,t=e.data,i=e.onClickDetail,r=e.onClickDelete,s=e.TicketComponent;return(0,k.jsxs)(a.xu,{sx:{display:"flex",flexDirection:"column",flex:1,gap:"1rem"},children:[(0,k.jsxs)(a.xu,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[(0,k.jsx)(a.xv,{fontSize:"xl",fontWeight:"500",children:n}),(0,k.jsx)(a.xv,{children:(null===t||void 0===t?void 0:t.length)||0})]}),t&&0!==t.length?(0,k.jsx)(a.xu,{children:t.map((function(e){return(0,k.jsx)(s,(0,f.Z)({onClickDetail:function(){return i(e.id)},onClickDelete:function(){return r(e.id)}},e),e.id)}))}):(0,k.jsxs)(G.bZ,{status:"warning",children:[(0,k.jsx)(G.zM,{}),"Kh\xf4ng co\u0301 ticket na\u0300o"]})]})}var W=t(6534),L=t(625);function X(e){var n=e.name,t=e.startAt,i=e.endAt,r=e.members,s=e.onClickDetail,l=e.onClickDelete;return(0,k.jsxs)(a.kC,{sx:{display:"flex",flexDirection:"column",shadow:"md",borderWidth:"1px",borderRadius:"md",mb:4,p:4},children:[(0,k.jsx)(a.xv,{fontWeight:"500",fontSize:"md",children:n}),(0,k.jsxs)(a.kC,{alignItems:"center",gap:2,children:[(0,k.jsx)(d.G,{icon:g.SZ,color:"gray"}),(0,A.rJ)(t)]}),(0,k.jsxs)(a.kC,{alignItems:"center",gap:2,children:[(0,k.jsx)(d.G,{icon:v.DH,color:"gray"}),(0,A.rJ)(i)]}),(0,k.jsx)(a.kC,{justifyContent:"flex-end",children:r&&(0,k.jsx)(b.HE,{size:"sm",max:2,children:r.map((function(e){return(0,k.jsx)(b.qE,{size:"sm",name:e.login,src:e.avatarUrl?"".concat("http://34.172.124.66:8080/files","/").concat(e.avatarUrl):""},e.login)}))})}),(0,k.jsxs)(a.kC,{justifyContent:"flex-end",mt:3,children:[(0,k.jsxs)(c.zx,{colorScheme:"teal",size:"md",onClick:s,children:[(0,k.jsx)(d.G,{icon:L.Iw}),"\xa0Chi ti\xea\u0301t"]}),"\xa0",(0,k.jsxs)(c.zx,{colorScheme:"red",size:"md",onClick:l,children:[(0,k.jsx)(d.G,{icon:W.$}),"\xa0X\xf3a"]})]})]})}function U(e){var n=e.isOpen,t=e.onClose,i=e.memberID,r=e.onRemoveMember;return(0,k.jsxs)(S.u_,{isOpen:n,onClose:t,children:[(0,k.jsx)(S.ZA,{}),(0,k.jsxs)(S.hz,{children:[(0,k.jsx)(S.xB,{children:"X\xe1c nh\u1eadn x\xf3a th\xe0nh vi\xean"}),(0,k.jsx)(S.ol,{}),(0,k.jsx)(S.fe,{children:(0,k.jsxs)(a.xv,{children:["B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a th\xe0nh vi\xean ",i,"?"]})}),(0,k.jsxs)(S.mz,{children:[(0,k.jsx)(c.zx,{colorScheme:"red",mr:3,onClick:function(){r(i),t()},children:"\u0110\u1ed3ng \xfd"}),(0,k.jsx)(c.zx,{variant:"ghost",onClick:t,children:"H\u1ee7y"})]})]})]})}function _(){var e=(0,m.UO)().eventID,n=(0,x.I0)(),t=(0,m.TH)(),l=(0,m.s0)(),u=(0,x.v9)((function(e){return e.eventMgmt})),j=u.selectedEvent,v=u.users,g=u.tasks,D=u.updateSuccess,C=u.deleteTaskSuccess,Y=(0,w.cI)({defaultValues:{name:"",description:"",startAt:Z()().format("YYYY-MM-DDTHH:mm"),endAt:Z()().add(1,"hour").format("YYYY-MM-DDTHH:mm"),status:""}}),I=Y.control,S=Y.handleSubmit,z=Y.watch,H=Y.setValue,G=(0,s.useRef)({});G.current=z("startAt",Z()().format("YYYY-MM-DDTHH:mm"));var W,L=(0,s.useRef)({}),_=(0,s.useState)([]),P=(0,p.Z)(_,2),$=P[0],J=P[1],V=(0,s.useState)(""),K=(0,p.Z)(V,2),Q=K[0],F=K[1],ee=(0,s.useState)(!1),ne=(0,p.Z)(ee,2),te=ne[0],ie=ne[1],re=(W="task",function(e){if("event"===W){var n=e.name,t=e.startAt,i=e.endAt,r=e.members,s=e.onClickDetail;return(0,k.jsx)(X,{name:n,startAt:t,endAt:i,members:r,onClickDetail:s})}if("task"===W){var a=e.name,l=e.startAt,o=e.endAt,c=e.assignees,d=e.onClickDetail,u=e.onClickDelete;return(0,k.jsx)(X,{name:a,startAt:l,endAt:o,members:c,onClickDetail:d,onClickDelete:u})}}),se={name:{required:"T\xean s\u1ef1 ki\u1ec7n l\xe0 b\u1eaft bu\u1ed9c"},description:{required:"M\xf4 t\u1ea3 l\xe0 b\u1eaft bu\u1ed9c"},startAt:{required:"Th\u1eddi gian b\u1eaft \u0111\u1ea7u l\xe0 b\u1eaft bu\u1ed9c"},endAt:{required:"Th\u1eddi gian k\u1ebft th\xfac l\xe0 b\u1eaft bu\u1ed9c",validate:function(e){return Z()(e).isAfter(Z()(G.current))||"Th\u1eddi gian k\u1ebft th\xfac ph\u1ea3i sau th\u1eddi gian b\u1eaft \u0111\u1ea7u"}},status:{required:"Tr\u1ea1ng th\xe1i s\u1ef1 ki\u1ec7n l\xe0 b\u1eaft bu\u1ed9c"}};(0,s.useEffect)((function(){n((0,y.EY)(e)),n((0,y.Jv)({eventID:e,page:0,size:100}))}),[]),(0,s.useEffect)((function(){D&&(n((0,y.EY)(e)),n((0,y.Jv)({eventID:e,page:0,size:100})))}),[D]),(0,s.useEffect)((function(){j&&(H("name",j.name),H("description",j.description),H("startAt",Z()(j.startAt).format("YYYY-MM-DDTHH:mm")),H("endAt",Z()(j.endAt).format("YYYY-MM-DDTHH:mm")),H("status",j.status),J(j.members.map((function(e){return{user:e.id,role:e.eventRole.id,name:e.name,avatarUrl:e.avatarUrl}}))))}),[j]),(0,s.useEffect)((function(){var i,r;C&&(n((0,y.Jv)({eventID:e,page:0,size:100})),l((null===(i=t.state)||void 0===i||null===(r=i.backgroundLocation)||void 0===r?void 0:r.pathname)||-1))}),C);var ae=function(e){l("".concat(t.pathname,"/tasks/").concat(e),{state:{backgroundLocation:t}})},le=function(e){l("".concat(t.pathname,"/tasks/").concat(e,"/delete"),{state:{backgroundLocation:t}})};return(0,k.jsxs)(a.xu,{sx:{display:"flex",flexDirection:"column",gap:"0.2rem",width:"100%"},children:[(0,k.jsxs)(a.xu,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,k.jsxs)(a.xv,{fontSize:"2xl",fontWeight:"bold",color:"teal.600",children:[(0,k.jsx)(b.qE,{bg:"teal.500",color:"whiteAlpha.900",icon:(0,k.jsx)(d.G,{icon:R.a1})}),"\xa0Chi ti\u1ebft s\u1ef1 ki\u1ec7n"]}),(0,k.jsx)(c.zx,{colorScheme:"telegram",variant:"outline",onClick:function(){l("/events")},children:(0,k.jsx)(d.G,{icon:N.ac})})]}),(0,k.jsxs)(a.xu,{sx:{display:"flex",flexDirection:"row",gap:"0.5rem"},children:[(0,k.jsxs)(a.xu,{sx:{display:"flex",flexDirection:"column",flex:2,gap:"0.5rem",p:2},as:"form",onSubmit:S((function(t){var i=Z()(t.startAt).format("YYYY-MM-DDTHH:mm:ssZ"),r=Z()(t.endAt).format("YYYY-MM-DDTHH:mm:ssZ");n((0,y.eJ)((0,f.Z)((0,f.Z)({},t),{},{eventID:e,startAt:i,endAt:r,members:$})))})),children:[(0,k.jsxs)(a.xu,{sx:{display:"flex",flexDirection:"row",gap:"1rem"},children:[(0,k.jsx)(T.Z,{sx:{flex:2},control:I,name:"name",type:"text",label:"T\xean s\u1ef1 ki\u1ec7n",rules:se.name}),(0,k.jsx)(w.Qr,{name:"status",rules:se.status,control:I,render:function(e){var n=e.field,t=n.onChange,i=n.onBlur,r=n.value,s=n.ref,a=e.fieldState.error;return(0,k.jsxs)(O.NI,{sx:{flex:1},isInvalid:!!a,children:[(0,k.jsx)(O.lX,{children:"Tr\u1ea1ng th\xe1i"}),(0,k.jsxs)(q.Ph,{onChange:t,onBlur:i,value:r,ref:s,children:[(0,k.jsx)("option",{value:A.N3.CREATED,children:A.X$.CREATED}),(0,k.jsx)("option",{value:A.N3.IN_PROGRESS,children:A.X$.IN_PROGRESS}),(0,k.jsx)("option",{value:A.N3.DONE,children:A.X$.DONE})]}),a&&(0,k.jsx)(O.J1,{children:null===a||void 0===a?void 0:a.message})]})}})]}),(0,k.jsx)(T.Z,{control:I,name:"description",type:"textarea",label:"M\xf4 t\u1ea3",rules:se.description}),(0,k.jsxs)(a.xu,{sx:{display:"flex",flexDirection:"row",gap:"1rem"},children:[(0,k.jsx)(T.Z,{sx:{flex:1},control:I,name:"startAt",type:"datetime-local",label:"B\u1eaft \u0111\u1ea7u",rules:se.startAt}),(0,k.jsx)(T.Z,{sx:{flex:1},control:I,name:"endAt",type:"datetime-local",label:"K\u1ebft th\xfac",rules:se.endAt})]}),(0,k.jsxs)(a.xu,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",gap:"1rem"},children:[(0,k.jsx)(a.xu,{direction:"row",sx:{flexWrap:"wrap",justifyContent:"flex-start",span:{width:"1.5rem",height:"1.5rem",m:1,div:{fontSize:"9pt"}}},children:null===$||void 0===$?void 0:$.map((function(e){return(0,k.jsx)(a.xu,{cursor:"pointer",display:"inline-block",onClick:function(){return n=e.user,void($.length<2?(0,h.m)({title:"C\u1ea3nh b\xe1o",description:"S\u1ef1 ki\u1ec7n ph\u1ea3i c\xf3 \xedt nh\u1ea5t 1 th\xe0nh vi\xean",status:"warning"}):(ie(!0),F(n)));var n},children:(0,k.jsx)(b.qE,{name:e.name,src:"".concat("http://34.172.124.66:8080/files","/").concat(e.avatarUrl)})},"member-".concat(e.user))}))}),(0,k.jsxs)(c.zx,{type:"submit",variant:"outline",colorScheme:"facebook",children:[(0,k.jsx)(d.G,{icon:E.Ed}),"\xa0L\u01b0u"]})]})]}),(0,k.jsxs)(a.xu,{sx:{display:"flex",flex:1,flexDirection:"column",gap:"0.5rem",p:2,width:"max-content"},children:[(0,k.jsxs)(a.xu,{children:[(0,k.jsx)(O.lX,{children:"T\xecm ki\u1ebfm ng\u01b0\u1eddi d\xf9ng"}),(0,k.jsxs)(a.xu,{as:"div",sx:{display:"flex",flexDirection:"row",gap:"0.3rem"},children:[(0,k.jsx)(o.II,{ref:L,placeholder:"Nh\u1eadp email"}),(0,k.jsx)(c.zx,{colorScheme:"teal",onClick:function(){var e=function(e){return e?e.match(A.CU)?null:"Email kh\xf4ng h\u1ee3p l\u1ec7":"Email l\xe0 b\u1eaft bu\u1ed9c"}(L.current.value);e?(0,h.m)({title:"C\u1ea3nh b\xe1o",description:e,status:"warning"}):n((0,y.uh)({q:L.current.value,page:0,size:6}))},children:(0,k.jsx)(d.G,{icon:r.Y$})})]})]}),v.length>0&&(0,k.jsx)(a.xu,{sx:{display:"flex",flexDirection:"column",gap:"0.3rem",width:"100%",alignItems:"start"},children:v.map((function(e){return(0,k.jsxs)(c.zx,{variant:"ghost",onClick:function(){return n=e,void($.find((function(e){return e.user===n.id}))?(0,h.m)({title:"C\u1ea3nh b\xe1o",description:"Th\xe0nh vi\xean \u0111\xe3 t\u1ed3n t\u1ea1i",status:"warning"}):J([].concat((0,M.Z)($),[{user:n.id,role:A.UB}])));var n},children:[(0,k.jsx)(b.qE,{name:e.login,src:e.avatarUrl,size:"sm",bg:"teal.500",color:"whiteAlpha.900"},"user-".concat(e.id)),"\xa0",e.login]},JSON.stringify(e))}))})]})]}),(0,k.jsx)(a.iz,{}),(0,k.jsxs)(a.xu,{sx:{display:"flex",flexDirection:"row",gap:"0.2rem",mt:3},children:[(0,k.jsxs)(a.xu,{sx:{display:"flex",flexDir:"row",flex:1},as:"form",noValidate:!0,children:[(0,k.jsx)(o.II,{placeholder:"Ti\u0300m ki\xea\u0301m..."}),(0,k.jsx)(c.zx,{type:"submit",children:(0,k.jsx)(d.G,{icon:r.Y$})})]}),(0,k.jsxs)(c.zx,{colorScheme:"green",onClick:function(){l("".concat(t.pathname,"/tasks/new"),{state:{backgroundLocation:t}})},children:[(0,k.jsx)(d.G,{icon:i.r8}),"\xa0",(0,k.jsx)(a.xv,{display:{base:"none",md:"inline"},children:"Th\xeam task"})]})]}),(0,k.jsx)(U,{isOpen:te,onClose:function(){ie(!1),F("")},memberID:Q,onRemoveMember:function(e){J($.filter((function(n){return n.user!==e})))}}),(0,k.jsxs)(a.xu,{sx:{display:"flex",flexDirection:"row",gap:"1rem"},children:[(0,k.jsx)(B,{title:"S\u1eafp di\u1ec5n ra",data:(null===g||void 0===g?void 0:g.filter((function(e){return e.status===A.N3.CREATED})))||[],onClickDetail:ae,onClickDelete:le,TicketComponent:re}),(0,k.jsx)(B,{title:"\u0110ang di\u1ec5n ra",data:(null===g||void 0===g?void 0:g.filter((function(e){return e.status===A.N3.IN_PROGRESS})))||[],onClickDetail:ae,onClickDelete:le,TicketComponent:re}),(0,k.jsx)(B,{title:"\u0110\xe3 k\u1ebft th\xfac",data:(null===g||void 0===g?void 0:g.filter((function(e){return e.status===A.N3.DONE})))||[],onClickDetail:ae,onClickDelete:le,TicketComponent:re})]})]})}var P="http://34.172.124.66:8080/files";function $(){var e,n,t=(0,m.UO)(),i=t.eventID,r=t.taskID,l=void 0===r||null===r,o=(0,x.I0)(),u=(0,m.TH)(),h=(0,m.s0)(),j=(0,x.v9)((function(e){return e.eventMgmt})),v=j.selectedTask,g=j.selectedEvent,D=(0,w.cI)({defaultValues:{name:"",description:"",startAt:Z()().format("YYYY-MM-DDTHH:mm"),endAt:Z()().add(1,"hour").format("YYYY-MM-DDTHH:mm"),status:A.N3.CREATED}}),C=D.control,Y=D.handleSubmit,I=D.watch,z=D.setValue,H=(0,s.useRef)({});H.current=I("startAt",Z()().format("YYYY-MM-DDTHH:mm"));var N=(0,s.useState)([]),G=(0,p.Z)(N,2),B=G[0],W=G[1],L={name:{required:"B\u1eaft bu\u1ed9c nh\u1eadp t\xean c\xf4ng vi\u1ec7c"},startAt:{required:"B\u1eaft bu\u1ed9c nh\u1eadp th\u1eddi gian b\u1eaft \u0111\u1ea7u"},endAt:{required:"B\u1eaft bu\u1ed9c nh\u1eadp th\u1eddi gian k\u1ebft th\xfac",validate:function(e){return Z()(e).isAfter(Z()(H.current))||"Th\u1eddi gian k\u1ebft th\xfac ph\u1ea3i sau th\u1eddi gian b\u1eaft \u0111\u1ea7u"}},status:{required:"B\u1eaft bu\u1ed9c nh\u1eadp tr\u1ea1ng th\xe1i"}};(0,s.useEffect)((function(){l||o((0,y._X)(r))}),[]),(0,s.useEffect)((function(){!l&&v&&(z("name",v.name),z("description",v.description),z("startAt",Z()(v.startAt).format("YYYY-MM-DDTHH:mm")),z("endAt",Z()(v.endAt).format("YYYY-MM-DDTHH:mm")),z("status",v.status),W(v.assignees))}),[v]);return(0,k.jsxs)(S.u_,{isOpen:!0,onClose:function(){var e,n;h((null===(e=u.state)||void 0===e||null===(n=e.backgroundLocation)||void 0===n?void 0:n.pathname)||-1)},children:[(0,k.jsx)(S.ZA,{}),(0,k.jsxs)(S.hz,{sx:{maxWidth:"max-content"},children:[(0,k.jsx)(S.ol,{}),(0,k.jsx)(S.xB,{children:(0,k.jsxs)(a.xv,{fontSize:"2xl",fontWeight:"bold",color:"teal.600",children:[(0,k.jsx)(b.qE,{bg:"teal.500",color:"whiteAlpha.900",icon:(0,k.jsx)(d.G,{icon:R.a1})}),"\xa0C\u1eadp nh\u1eadt c\xf4ng vi\u1ec7c"]})}),(0,k.jsxs)(S.fe,{sx:{display:"flex",flexDirection:"row",gap:"0.5rem"},children:[(0,k.jsxs)(a.xu,{sx:{display:"flex",flex:1,flexDirection:"column",gap:"0.5rem",p:2},as:"form",onSubmit:Y((function(e){var n=Z()(e.startAt).format("YYYY-MM-DDTHH:mm:ssZ"),t=Z()(e.endAt).format("YYYY-MM-DDTHH:mm:ssZ");o(l?(0,y.vr)((0,f.Z)((0,f.Z)({},e),{},{event:i,startAt:n,endAt:t,assignees:B})):(0,y.xJ)((0,f.Z)((0,f.Z)({},e),{},{id:r,event:i,startAt:n,endAt:t,assignees:B})))})),children:[(0,k.jsx)(T.Z,{control:C,name:"name",type:"text",label:"T\xean c\xf4ng vi\u1ec7c",rules:L.name}),(0,k.jsx)(T.Z,{control:C,name:"description",type:"textarea",label:"M\xf4 t\u1ea3",rules:L.description}),(0,k.jsx)(T.Z,{control:C,name:"startAt",type:"datetime-local",label:"B\u1eaft \u0111\u1ea7u",rules:L.startAt}),(0,k.jsx)(T.Z,{control:C,name:"endAt",type:"datetime-local",label:"K\u1ebft th\xfac",rules:L.endAt}),r&&(0,k.jsx)(w.Qr,{name:"status",rules:L.status,control:C,render:function(e){var n=e.field,t=n.onChange,i=n.onBlur,r=n.value,s=n.ref,a=e.fieldState.error;return(0,k.jsxs)(O.NI,{isInvalid:!!a,children:[(0,k.jsx)(O.lX,{children:"Tr\u1ea1ng th\xe1i"}),(0,k.jsxs)(q.Ph,{onChange:t,onBlur:i,value:r,ref:s,children:[(0,k.jsx)("option",{value:A.N3.CREATED,children:A.X$.CREATED}),(0,k.jsx)("option",{value:A.N3.IN_PROGRESS,children:A.X$.IN_PROGRESS}),(0,k.jsx)("option",{value:A.N3.DONE,children:A.X$.DONE})]}),a&&(0,k.jsx)(O.J1,{children:null===a||void 0===a?void 0:a.message})]})}}),(0,k.jsx)(a.xu,{direction:"row",sx:{maxW:"249px",flexWrap:"wrap",justifyContent:"flex-start",span:{width:"1.5rem",height:"1.5rem",m:1,div:{fontSize:"9pt"}}},children:null===B||void 0===B?void 0:B.map((function(e){return(0,k.jsx)(a.xu,{cursor:"pointer",display:"inline-block",onClick:function(){return function(e){W(B.filter((function(n){return n.id!==e.id})))}(e)},children:(0,k.jsx)(b.qE,{name:e.name,src:"".concat(P,"/").concat(e.avatarUrl)})},"member-".concat(e.id))}))}),(0,k.jsxs)(c.zx,{type:"submit",width:"100%",mt:2,colorScheme:"facebook",children:[(0,k.jsx)(d.G,{icon:E.Ed}),"\xa0L\u01b0u"]})]}),(0,k.jsxs)(a.xu,{sx:{display:"flex",flex:1,flexDirection:"column",gap:"0.5rem",p:2,width:"max-content"},children:[(0,k.jsx)(a.xv,{fontWeight:"medium",children:"Th\xe0nh vi\xean:"}),(null===g||void 0===g||null===(e=g.members)||void 0===e?void 0:e.length)>0&&(0,k.jsx)(a.xu,{sx:{display:"flex",flexDirection:"column",gap:"0.3rem",width:"100%",alignItems:"start"},children:null===g||void 0===g||null===(n=g.members)||void 0===n?void 0:n.map((function(e){return(0,k.jsxs)(c.zx,{variant:"ghost",onClick:function(){return n=e,void(B.find((function(e){return e.id===n.id}))||W([].concat((0,M.Z)(B),[n])));var n},children:[(0,k.jsx)(b.qE,{name:e.login,src:e.avatarUrl?"".concat(P,"/").concat(e.avatarUrl):"",size:"sm",bg:"teal.500",color:"whiteAlpha.900"},"user-".concat(e.id)),"\xa0",e.login]},JSON.stringify(e))}))})]})]})]})]})}function J(){var e=(0,m.UO)(),n=e.eventID,t=e.taskID,i=(0,x.I0)(),r=(0,m.TH)(),s=(0,m.s0)(),l=function(){var e,n;s((null===(e=r.state)||void 0===e||null===(n=e.backgroundLocation)||void 0===n?void 0:n.pathname)||-1)};return(0,k.jsxs)(S.u_,{isOpen:!0,onClose:l,children:[(0,k.jsx)(S.ZA,{}),(0,k.jsxs)(S.hz,{children:[(0,k.jsxs)(S.xB,{children:["[S\u1ef1 ki\u1ec7n ",n,"]X\xe1c nh\u1eadn x\xf3a c\xf4ng vi\u1ec7c"]}),(0,k.jsx)(S.ol,{}),(0,k.jsx)(S.fe,{children:(0,k.jsxs)(a.xv,{children:["B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a c\xf4ng vi\u1ec7c ",t,"?"]})}),(0,k.jsxs)(S.mz,{children:[(0,k.jsx)(c.zx,{colorScheme:"red",mr:3,onClick:function(){i((0,y._5)(t))},children:"\u0110\u1ed3ng \xfd"}),(0,k.jsx)(c.zx,{variant:"ghost",onClick:l,children:"H\u1ee7y"})]})]})]})}function V(){var e=(0,x.I0)(),n=(0,m.s0)(),t=(0,m.TH)();return(0,k.jsxs)(a.xu,{sx:{display:"flex",flexDirection:"column"},children:[(0,k.jsx)(a.X6,{color:l.rS.colors.green[500],variant:"h1",size:"lg",children:"S\u01b0\u0323 ki\xea\u0323n"}),(0,k.jsxs)(a.xu,{sx:{display:"flex",flexDir:"row",justifyContent:"space-between",mt:5,gap:5},children:[(0,k.jsxs)(a.xu,{sx:{display:"flex",flexDir:"row",flex:1},as:"form",noValidate:!0,children:[(0,k.jsx)(o.II,{placeholder:"Ti\u0300m ki\xea\u0301m..."}),(0,k.jsx)(c.zx,{type:"submit",children:(0,k.jsx)(d.G,{icon:r.Y$})})]}),(0,k.jsxs)(c.zx,{colorScheme:"green",onClick:function(){n("new",{state:{backgroundLocation:t}})},children:[(0,k.jsx)(d.G,{icon:i.r8}),"\xa0",(0,k.jsx)(a.xv,{display:{base:"none",md:"inline"},children:"Th\xeam s\u01b0\u0323 ki\xea\u0323n"})]})]}),(0,k.jsx)(u.Z5,{onDragEnd:function(n){var t=n.source,i=n.destination;i&&(t.droppableId===i.droppableId&&e((0,y.HP)({sourceIndex:t.index,destinationIndex:i.index,statusName:t.droppableId})),t.droppableId!==i.droppableId&&console.log("Dragged to a different list"))},children:(0,k.jsxs)(a.xu,{sx:{display:"flex",flexDirection:"row",mt:5,gap:"2rem"},children:[(0,k.jsx)(Y,{title:"S\u0103\u0301p di\xea\u0303n ra",dropgableID:A.sL[A.X$.CREATED],eventStatus:A.N3.CREATED}),(0,k.jsx)(Y,{title:"\u0110ang di\xea\u0303n ra",dropgableID:A.sL[A.X$.IN_PROGRESS],eventStatus:A.N3.IN_PROGRESS}),(0,k.jsx)(Y,{title:"\u0110a\u0303 k\xea\u0301t thu\u0301c",dropgableID:A.sL[A.X$.DONE],eventStatus:A.N3.DONE})]})})]})}function K(){var e,n,t=(0,x.I0)(),i=(0,m.TH)(),r=(0,x.v9)((function(e){return e.eventMgmt})),a=r.updateSuccess,l=r.deleteSuccess,o=r.errorMessage;return(0,s.useEffect)((function(){t((0,y.sZ)({page:0,size:30}))}),[]),(0,s.useEffect)((function(){a&&(t((0,y.sZ)({page:0,size:30})),(0,h.m)({title:"Th\xe0nh c\xf4ng",description:"C\u1eadp nh\u1eadt th\xe0nh c\xf4ng",status:"success"}))}),[a]),(0,s.useEffect)((function(){l&&(t((0,y.sZ)({page:0,size:30})),(0,h.m)({title:"Th\xe0nh c\xf4ng",description:"X\xf3a c\xf4ng vi\u1ec7c th\xe0nh c\xf4ng",status:"success"}))}),[l]),(0,s.useEffect)((function(){o&&(0,h.m)({title:"L\u1ed7i",description:o,status:"error"})}),[o]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(m.Z5,{location:(null===(e=i.state)||void 0===e?void 0:e.backgroundLocation)||i,children:[(0,k.jsx)(m.AW,{path:"/",element:(0,k.jsx)(V,{})}),(0,k.jsx)(m.AW,{path:"/:eventID",element:(0,k.jsx)(_,{})})]}),(null===(n=i.state)||void 0===n?void 0:n.backgroundLocation)&&(0,k.jsxs)(m.Z5,{children:[(0,k.jsx)(m.AW,{path:"/new",element:(0,k.jsx)(H,{})}),(0,k.jsx)(m.AW,{path:"/:eventID/tasks/new",element:(0,k.jsx)($,{})}),(0,k.jsx)(m.AW,{path:"/:eventID/tasks/:taskID",element:(0,k.jsx)($,{})}),(0,k.jsx)(m.AW,{path:"/:eventID/tasks/:taskID/delete",element:(0,k.jsx)(J,{})})]})]})}}}]);
//# sourceMappingURL=616.df909f06.chunk.js.map