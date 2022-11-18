var C=Object.defineProperty;var F=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var v=(l,t,u)=>t in l?C(l,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):l[t]=u,b=(l,t)=>{for(var u in t||(t={}))f.call(t,u)&&v(l,u,t[u]);if(F)for(var u of F(t))A.call(t,u)&&v(l,u,t[u]);return l};var E=(l,t,u)=>new Promise((r,d)=>{var c=n=>{try{a(u.next(n))}catch(o){d(o)}},s=n=>{try{a(u.throw(n))}catch(o){d(o)}},a=n=>n.done?r(n.value):Promise.resolve(n.value).then(c,s);a((u=u.apply(l,t)).next())});import{d as y,s as m,j as x,o as D,c as _,a as e,x as i,z as p,y as B,l as V,m as g,A as I,G as w,B as h,T as S,C as k}from"./index.js?v=d200b1a2";const M=["onSubmit"],N=w('<div class="label-info"> \u65C1\u8DEF\u7531\u6A21\u5F0F\uFF0C\u4E5F\u53EB\u5355\u81C2\u8DEF\u7531\u6A21\u5F0F\u3002\u60A8\u53EF\u4EE5\u7528\u4E0A\u4E00\u7EA7\u8DEF\u7531\u62E8\u53F7\uFF0C\u7136\u540E\u7531\u8BE5\u8BBE\u5907\u6765\u5B9E\u73B0\u4E00\u4E9B\u9AD8\u7EA7\u529F\u80FD\u3002 </div><div class="label-name"><span>LAN \u63A5\u53E3\u914D\u7F6E\u65B9\u5F0F</span></div><div class="label-value"><select disabled><option> \u65C1\u8DEF\u7531\u6A21\u5F0F\u4EC5\u652F\u6301\u9759\u6001IP\u5730\u5740 </option></select></div><div class="label-name"><span>IP \u5730\u5740\uFF08\u8BF7\u548C\u4E0A\u4E00\u6B65\u8BB0\u5F55\u7684\u4E3B\u8DEF\u7531\u5730\u5740\u5728\u540C\u4E00\u7F51\u6BB5\uFF09</span></div>',4),P={class:"label-value"},U=e("div",{class:"label-name"},[e("span",null,"\u5B50\u7F51\u63A9\u7801")],-1),q={class:"label-value"},L=e("div",{class:"label-name"},[e("span",null,"\u7F51\u5173\u5730\u5740")],-1),T={class:"label-value"},G=e("div",{class:"label-name"},[e("span",null,"DNS\u670D\u52A1\u5668")],-1),H={class:"label-value"},R=e("div",{class:"label-name"},[e("span",null,"\u662F\u5426\u63D0\u4F9B DHCP\uFF08\u5982\u679C\u662F\u63D0\u4F9B DHCP\uFF0C\u5219\u9700\u8981\u5173\u95ED\u4E3B\u8DEF\u7531 DHCP\uFF09")],-1),j={class:"label-value"},z={class:"label-flex"},O=h("\u5173\u95ED"),J=h("\u542F\u7528"),K={class:"label-btns"},Q=["disabled"],W={key:0,class:"label-msg"},Z=y({__name:"index",setup(l){const t=m(""),u=x({subnetMask:"255.255.255.0",staticDnsIp:"223.5.5.5",staticLanIp:"",gateway:"",enableDhcp:!0}),r=m(!1),d=()=>E(this,null,function*(){const c=b({},u),s=S.Loading("\u914D\u7F6E\u4E2D...");try{const a=yield k.Guide.GatewayRouter.POST(c);if(a!=null&&a.data){const{success:n,error:o}=a==null?void 0:a.data;o&&(t.value=o),(n==null||n==0)&&(t.value="\u914D\u7F6E\u6210\u529F")}}catch(a){t.value=a}s.Close()});return(c,s)=>(D(),_("form",{class:"form-container",onSubmit:I(d,["prevent"])},[N,e("div",P,[i(e("input",{type:"text",placeholder:"ip\u5730\u5740","onUpdate:modelValue":s[0]||(s[0]=a=>u.staticLanIp=a),required:""},null,512),[[p,u.staticLanIp,void 0,{trim:!0}]])]),U,e("div",q,[i(e("input",{type:"text",placeholder:"\u5B50\u7F51\u63A9\u7801\u5730\u5740","onUpdate:modelValue":s[1]||(s[1]=a=>u.subnetMask=a),required:""},null,512),[[p,u.subnetMask,void 0,{trim:!0}]])]),L,e("div",T,[i(e("input",{type:"text",placeholder:"\u7F51\u5173\u5730\u5740","onUpdate:modelValue":s[2]||(s[2]=a=>u.gateway=a),required:""},null,512),[[p,u.gateway,void 0,{trim:!0}]])]),G,e("div",H,[i(e("input",{type:"text",placeholder:"dns\u670D\u52A1\u5668\u5730\u5740","onUpdate:modelValue":s[3]||(s[3]=a=>u.staticDnsIp=a),required:""},null,512),[[p,u.staticDnsIp,void 0,{trim:!0}]])]),R,e("div",j,[e("div",z,[e("label",null,[i(e("input",{type:"radio",value:!1,"onUpdate:modelValue":s[4]||(s[4]=a=>u.enableDhcp=a)},null,512),[[B,u.enableDhcp]]),O]),e("label",null,[i(e("input",{type:"radio",value:!0,"onUpdate:modelValue":s[5]||(s[5]=a=>u.enableDhcp=a)},null,512),[[B,u.enableDhcp]]),J])])]),e("div",K,[e("button",{class:"sumbit",disabled:r.value},"\u4FDD\u5B58",8,Q)]),t.value?(D(),_("div",W,[e("span",null,V(t.value),1)])):g("",!0)],40,M))}});export{Z as default};
