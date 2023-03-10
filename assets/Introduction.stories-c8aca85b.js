var p=Object.defineProperty;var s=(o,e)=>p(o,"name",{value:e,configurable:!0});import"./index-c49d88fa.js";import{c as t,A as m,M as c}from"./Props-f1c5e52d.js";import"./jsx-runtime-5731c40f.js";import"./es.object.get-own-property-descriptor-96317e73.js";import"./web.url.constructor-892723f9.js";import"./iframe-0f7e6240.js";import"./es.number.is-integer-bfe28c3c.js";import"./index-681e4b07-98779330.js";import"./es.map.constructor-900ea59a.js";import"./es.number.to-fixed-eec181fb.js";import"./index-f6fef307.js";function i(){return i=Object.assign?Object.assign.bind():function(o){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(o[n]=a[n])}return o},i.apply(this,arguments)}s(i,"_extends");const d={},g="wrapper";function l({components:o,...e}){return t(g,i({},d,e,{components:o,mdxType:"MDXLayout"}),t(c,{title:"Introduction",mdxType:"Meta"}),t("style",null,`
    .subheading {
      --mediumdark: '#999999';
      font-weight: 900;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

      .link-list {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        row-gap: 10px;
      }

      @media (min-width: 620px) {
        .link-list {
          row-gap: 20px;
          column-gap: 20px;
          grid-template-columns: 1fr 1fr;
        }
      }

      @media all and (-ms-high-contrast:none) {
      .link-list {
          display: -ms-grid;
          -ms-grid-columns: 1fr 1fr;
          -ms-grid-rows: 1fr 1fr;
        }
      }

      .link-item {
        display: block;
        padding: 20px 30px 20px 15px;
        border: 1px solid #00000010;
        border-radius: 5px;
        transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
        color: #333333;
        display: flex;
        align-items: flex-start;
      }

      .link-item:hover {
        border-color: #1EA7FD50;
        transform: translate3d(0, -3px, 0);
        box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
      }

      .link-item:active {
        border-color: #1EA7FD;
        transform: translate3d(0, 0, 0);
      }

      .link-item strong {
        font-weight: 700;
        display: block;
        margin-bottom: 2px;
      }

      .link-item img {
        height: 40px;
        width: 40px;
        margin-right: 15px;
        flex: none;
      }

      .link-item span {
        font-size: 14px;
        line-height: 20px;
      }

      .tip {
        display: inline-block;
        border-radius: 1em;
        font-size: 11px;
        line-height: 12px;
        font-weight: 700;
        background: #E7FDD8;
        color: #66BF3C;
        padding: 4px 12px;
        margin-right: 10px;
        vertical-align: top;
      }

      .tip-wrapper {
        font-size: 13px;
        line-height: 20px;
        margin-top: 40px;
        margin-bottom: 40px;
      }

      .tip-wrapper code {
        font-size: 12px;
        display: inline-block;
      }
`),t("h1",null,"Welcome to Storybook"),t("p",null,`Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,t("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),t("p",null,`Browse example stories now by navigating to them in the sidebar.
View their code in the `,t("inlineCode",{parentName:"p"},"stories"),` directory to learn how they work.
We recommend building UIs with a `,t("a",{parentName:"p",href:"https://componentdriven.org"},t("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),t("div",{className:"subheading"},"Configure"),t("div",{className:"link-list"},t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},t("img",{src:"resources/plugin.svg",alt:"plugin"}),t("span",null,t("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},t("img",{src:"resources/stackalt.svg",alt:"Build"}),t("span",null,t("strong",null,"Build configuration"),"How to customize webpack and Babel")),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},t("img",{src:"resources/colors.svg",alt:"colors"}),t("span",null,t("strong",null,"Styling"),"How to load and configure CSS libraries")),t("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},t("img",{src:"resources/flow.svg",alt:"flow"}),t("span",null,t("strong",null,"Data"),"Providers and mocking for data libraries"))),t("div",{className:"subheading"},"Learn"),t("div",{className:"link-list"},t("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},t("img",{src:"resources/repo.svg",alt:"repo"}),t("span",null,t("strong",null,"Storybook documentation"),"Configure, customize, and extend")),t("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank"},t("img",{src:"resources/direction.svg",alt:"direction"}),t("span",null,t("strong",null,"In-depth guides"),"Best practices from leading teams")),t("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},t("img",{src:"resources/colors.svg",alt:"code"}),t("span",null,t("strong",null,"GitHub project"),"View the source and add issues")),t("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},t("img",{src:"resources/comments.svg",alt:"comments"}),t("span",null,t("strong",null,"Discord chat"),"Chat with maintainers and the community"))),t("div",{className:"tip-wrapper"},t("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",t("code",null,"stories/Introduction.stories.mdx")))}s(l,"MDXContent");l.isMDXComponent=!0;const u=s(()=>{throw new Error("Docs-only story")},"__page");u.parameters={docsOnly:!0};const r={title:"Introduction",includeStories:["__page"]},h={};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:()=>t(m,{mdxStoryNameToKey:h,mdxComponentAnnotations:r},t(l,null))};const D=["__page"];export{D as __namedExportsOrder,u as __page,r as default};
//# sourceMappingURL=Introduction.stories-c8aca85b.js.map
