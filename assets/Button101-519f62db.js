var r=Object.defineProperty;var e=(o,t)=>r(o,"name",{value:t,configurable:!0});const c=e(o=>new DOMParser().parseFromString(o,"text/html").body,"render"),a=["full","large","medium","small"],u=["primary","secondary","tertiary","critical"],l=["destroy","disable","enable","refresh"],b=e(o=>{const{methodName:t="enable",click:s=e(()=>null,"onClick"),...n}=o;return $(()=>{$("#button").click(s).button101(n).button101(t)}),c(`
    <button id="button"></button>
    <script>
      $(() => {
        $("#button")
          .button101(${JSON.stringify(n)})
          .button101("${t}")
          .on('click', console.log);
      });
    <\/script>
  `)},"renderButton");$.widget("custom.button101",$.ui.button,{_create(){this._super(),this.element.each((o,t)=>{t.dataset.size=this.options.size,t.dataset.color=this.options.color})}}),0;export{u as c,l as m,b as r,a as s};
//# sourceMappingURL=Button101-519f62db.js.map
