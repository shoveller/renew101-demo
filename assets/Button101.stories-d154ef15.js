var e=Object.defineProperty;var o=(t,n)=>e(t,"name",{value:n,configurable:!0});import{a as r}from"./index-be27026c.js";import{m as a,s as l,c as i,r as s}from"./Button101-519f62db.js";import"./es.object.get-own-property-descriptor-96317e73.js";import"./iframe-8c12e244.js";import"./web.url.constructor-6b71ba64.js";import"./es.number.is-integer-0af8f36f.js";import"./make-decorator-73e0e272.js";const g={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/html'
import {
  colorSchemeList,
  methodNameList,
  renderButton,
  sizeList,
} from 'src/atoms/Button101/Button101'

export default {
  title: 'atoms/$.ui.Button101',
  argTypes: {
    methodName: {
      control: { type: 'radio' },
      defaultValue: 'enable',
      options: methodNameList,
    },
    // icon: {
    //   control: 'text',
    //   defaultValue: 'ui-icon-gear',
    // },
    // iconPosition: {
    //   control: { type: 'radio' },
    //   defaultValue: 'beginning',
    //   options: ['beginning', 'end', 'bottom'],
    // },
    label: { control: 'text' },
    click: { action: 'click', defaultValue: action('click') },
    // showLabel: {
    //   control: { type: 'boolean', defaultValue: true },
    // },
    size: {
      control: { type: 'radio' },
      defaultValue: 'large',
      options: sizeList,
    },
    color: {
      control: { type: 'radio' },
      defaultValue: 'primary',
      options: colorSchemeList,
    },
  },
} as Meta<JQueryUI.Button101>

const Template: Story<JQueryUI.Button101> = (props) => {
  return renderButton(props)
}

export const 기본적인_사용법 = Template.bind({})
기본적인_사용법.args = {
  label: 'Button',
}
`,locationsMap:{"기본적인-사용법":{startLoc:{col:44,line:45},endLoc:{col:1,line:47},startBody:{col:44,line:45},endBody:{col:1,line:47}}}}},title:"atoms/$.ui.Button101",argTypes:{methodName:{control:{type:"radio"},defaultValue:"enable",options:a},label:{control:"text"},click:{action:"click",defaultValue:r("click")},size:{control:{type:"radio"},defaultValue:"large",options:l},color:{control:{type:"radio"},defaultValue:"primary",options:i}}},c=o(t=>s(t),"Template"),u=c.bind({});u.args={label:"Button"};const V=["기본적인_사용법"];export{V as __namedExportsOrder,g as default,u as 기본적인_사용법};
//# sourceMappingURL=Button101.stories-d154ef15.js.map
