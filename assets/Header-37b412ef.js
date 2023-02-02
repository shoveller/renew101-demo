var s=Object.defineProperty;var d=(l,a)=>s(l,"name",{value:a,configurable:!0});import{r as t}from"./Button101-519f62db.js";const v=d(({user:l,onLogout:a,onLogin:i,onCreateAccount:o})=>{const c=document.createElement("header"),n=document.createElement("div");n.className="wrapper";const p=`<div>
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path
          d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
          fill="#FFF" />
        <path
          d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
          fill="#555AB9" />
        <path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8" />
      </g>
    </svg>
    <h1>Acme</h1>
  </div>`;n.insertAdjacentHTML("afterbegin",p);const e=document.createElement("div");if(l){const r=`<span class="welcome">Welcome, <b>${l.name}</b>!</span>`;e.innerHTML=r,e.appendChild(t({label:"Log out",click:a}))}else e.appendChild(t({label:"Log in",click:i})),e.appendChild(t({label:"Sign up",click:o}));return n.appendChild(e),c.appendChild(n),c},"createHeader");export{v as c};
//# sourceMappingURL=Header-37b412ef.js.map
