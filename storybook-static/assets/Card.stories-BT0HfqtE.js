import{b as _,t as C,o as f}from"./vue.esm-bundler-ng_C8-Xh.js";const x=(e,a)=>{const s=e.__vccOpts||e;for(const[g,u]of a)s[g]=u;return s},v={class:"text-red-900 bg-black"},l={__name:"Card",props:{title:String},setup(e){return(a,s)=>(f(),_("div",v,C(e.title),1))}},n=x(l,[["__scopeId","data-v-2eb3c63e"]]);l.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"title",type:{name:"string"}}],sourceFiles:["/home/qq/vhosts/npx/src/components/Card.vue"]};const S={component:n,title:"Card"},t={render:e=>({components:{Card:n},setup(){return{args:e}},template:'<Card v-bind="args" />'}),args:{title:"card test test test adsfasf"}},r={render:e=>({components:{Card:n},setup(){return{args:e}},template:'<Card v-bind="args" />'}),args:{title:"card "}};var o,c,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Card
    },
    setup() {
      return {
        args
      };
    },
    template: '<Card v-bind="args" />'
  }),
  args: {
    title: "card test test test adsfasf"
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Card
    },
    setup() {
      return {
        args
      };
    },
    template: '<Card v-bind="args" />'
  }),
  args: {
    title: "card "
  }
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const h=["TextLarge","TextSmall"];export{t as TextLarge,r as TextSmall,h as __namedExportsOrder,S as default};
