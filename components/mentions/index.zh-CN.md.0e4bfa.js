(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{2981:function(t,n){t.exports={content:["section",["p","\u63D0\u53CA\u7EC4\u4EF6\u3002"],["h2","\u4F55\u65F6\u4F7F\u7528"],["p","\u7528\u4E8E\u5728\u8F93\u5165\u4E2D\u63D0\u53CA\u67D0\u4EBA\u6216\u67D0\u4E8B\uFF0C\u5E38\u7528\u4E8E\u53D1\u5E03\u3001\u804A\u5929\u6216\u8BC4\u8BBA\u529F\u80FD\u3002"]],meta:{category:"Components",subtitle:"\u63D0\u53CA",type:"\u6570\u636E\u5F55\u5165",title:"Mentions",cover:"https://gw.alipayobjects.com/zos/alicdn/jPE-itMFM/Mentions.svg",filename:"components/mentions/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4F55\u65F6\u4F7F\u7528",title:"\u4F55\u65F6\u4F7F\u7528"},"\u4F55\u65F6\u4F7F\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Mentions</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Mentions.Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sample<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Sample<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Mentions.Option</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Mentions</span><span class="token punctuation">></span></span>`},["code",`<Mentions onChange={onChange}>
  <Mentions.Option value="sample">Sample</Mentions.Option>
</Mentions>`]],["h3","Mentions"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"]]],["tbody",["tr",["td","autoFocus"],["td","\u81EA\u52A8\u83B7\u5F97\u7126\u70B9"],["td","boolean"],["td","false"]],["tr",["td","autoSize"],["td","\u81EA\u9002\u5E94\u5185\u5BB9\u9AD8\u5EA6\uFF0C\u53EF\u8BBE\u7F6E\u4E3A true ","|"," false \u6216\u5BF9\u8C61\uFF1A{ minRows: 2, maxRows: 6 }"],["td","boolean ","|"," object"],["td","false"]],["tr",["td","defaultValue"],["td","\u9ED8\u8BA4\u503C"],["td","string"],["td","-"]],["tr",["td","filterOption"],["td","\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u903B\u8F91"],["td","false ","|"," (input: string, option: OptionProps) => boolean"],["td","-"]],["tr",["td","getPopupContainer"],["td","\u6307\u5B9A\u5EFA\u8BAE\u6846\u6302\u8F7D\u7684 HTML \u8282\u70B9"],["td","() => HTMLElement"],["td","-"]],["tr",["td","notFoundContent"],["td","\u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9"],["td","ReactNode"],["td",["code","Not Found"]]],["tr",["td","placement"],["td","\u5F39\u51FA\u5C42\u5C55\u793A\u4F4D\u7F6E"],["td",["code","top"]," ","|"," ",["code","bottom"]],["td",["code","bottom"]]],["tr",["td","prefix"],["td","\u8BBE\u7F6E\u89E6\u53D1\u5173\u952E\u5B57"],["td","string ","|"," string","[","]"],["td",["code","@"]]],["tr",["td","split"],["td","\u8BBE\u7F6E\u9009\u4E2D\u9879\u524D\u540E\u5206\u9694\u7B26"],["td","string"],["td",["code",""]]],["tr",["td","validateSearch"],["td","\u81EA\u5B9A\u4E49\u89E6\u53D1\u9A8C\u8BC1\u903B\u8F91"],["td","(text: string, props: MentionsProps) => void"],["td","-"]],["tr",["td","value"],["td","\u8BBE\u7F6E\u503C"],["td","string"],["td","-"]],["tr",["td","onBlur"],["td","\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1"],["td","() => void"],["td","-"]],["tr",["td","onChange"],["td","\u503C\u6539\u53D8\u65F6\u89E6\u53D1"],["td","(text: string) => void"],["td","-"]],["tr",["td","onFocus"],["td","\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1"],["td","() => void"],["td","-"]],["tr",["td","onResize"],["td","resize \u56DE\u8C03"],["td","function({ width, height })"],["td","-"]],["tr",["td","onSearch"],["td","\u641C\u7D22\u65F6\u89E6\u53D1"],["td","(text: string, prefix: string) => void"],["td","-"]],["tr",["td","onSelect"],["td","\u9009\u62E9\u9009\u9879\u65F6\u89E6\u53D1"],["td","(option: OptionProps, prefix: string) => void"],["td","-"]]]],["h3","Mentions \u65B9\u6CD5"],["table",["thead",["tr",["th","\u540D\u79F0"],["th","\u63CF\u8FF0"]]],["tbody",["tr",["td","blur()"],["td","\u79FB\u9664\u7126\u70B9"]],["tr",["td","focus()"],["td","\u83B7\u53D6\u7126\u70B9"]]]],["h3","Option"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"]]],["tbody",["tr",["td","children"],["td","\u9009\u9879\u5185\u5BB9"],["td","ReactNode"],["td","-"]],["tr",["td","value"],["td","\u9009\u62E9\u65F6\u586B\u5145\u7684\u503C"],["td","string"],["td","-"]]]]]}}}]);
