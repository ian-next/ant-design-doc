(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{3730:function(t,n){t.exports={content:["section",["p","\u8F93\u5165\u6846\u81EA\u52A8\u5B8C\u6210\u529F\u80FD\u3002"],["h2","\u4F55\u65F6\u4F7F\u7528"],["ul",["li",["p","\u9700\u8981\u4E00\u4E2A\u8F93\u5165\u6846\u800C\u4E0D\u662F\u9009\u62E9\u5668\u3002"]],["li",["p","\u9700\u8981\u8F93\u5165\u5EFA\u8BAE/\u8F85\u52A9\u63D0\u793A\u3002"]]],["p","\u548C Select \u7684\u533A\u522B\u662F\uFF1A"],["ul",["li",["p","AutoComplete \u662F\u4E00\u4E2A\u5E26\u63D0\u793A\u7684\u6587\u672C\u8F93\u5165\u6846\uFF0C\u7528\u6237\u53EF\u4EE5\u81EA\u7531\u8F93\u5165\uFF0C\u5173\u952E\u8BCD\u662F\u8F85\u52A9",["strong","\u8F93\u5165"],"\u3002"]],["li",["p","Select \u662F\u5728\u9650\u5B9A\u7684\u53EF\u9009\u9879\u4E2D\u8FDB\u884C\u9009\u62E9\uFF0C\u5173\u952E\u8BCD\u662F",["strong","\u9009\u62E9"],"\u3002"]]]],meta:{category:"Components",subtitle:"\u81EA\u52A8\u5B8C\u6210",type:"\u6570\u636E\u5F55\u5165",cols:2,title:"AutoComplete",cover:"https://gw.alipayobjects.com/zos/alicdn/qtJm4yt45/AutoComplete.svg",filename:"components/auto-complete/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4F55\u65F6\u4F7F\u7528",title:"\u4F55\u65F6\u4F7F\u7528"},"\u4F55\u65F6\u4F7F\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u65B9\u6CD5",title:"\u65B9\u6CD5"},"\u65B9\u6CD5"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","allowClear"],["td","\u652F\u6301\u6E05\u9664"],["td","boolean"],["td","false"],["td"]],["tr",["td","autoFocus"],["td","\u81EA\u52A8\u83B7\u53D6\u7126\u70B9"],["td","boolean"],["td","false"],["td"]],["tr",["td","backfill"],["td","\u4F7F\u7528\u952E\u76D8\u9009\u62E9\u9009\u9879\u7684\u65F6\u5019\u628A\u9009\u4E2D\u9879\u56DE\u586B\u5230\u8F93\u5165\u6846\u4E2D"],["td","boolean"],["td","false"],["td"]],["tr",["td","children (\u81EA\u52A8\u5B8C\u6210\u7684\u6570\u636E\u6E90)"],["td","\u81EA\u52A8\u5B8C\u6210\u7684\u6570\u636E\u6E90"],["td","React.ReactElement","<","OptionProps> ","|"," Array","<","React.ReactElement","<","OptionProps>>"],["td","-"],["td"]],["tr",["td","children (\u81EA\u5B9A\u4E49\u8F93\u5165\u6846)"],["td","\u81EA\u5B9A\u4E49\u8F93\u5165\u6846"],["td","HTMLInputElement ","|"," HTMLTextAreaElement ","|"," React.ReactElement","<","InputProps>"],["td","<","Input />"],["td"]],["tr",["td","defaultActiveFirstOption"],["td","\u662F\u5426\u9ED8\u8BA4\u9AD8\u4EAE\u7B2C\u4E00\u4E2A\u9009\u9879"],["td","boolean"],["td","true"],["td"]],["tr",["td","defaultOpen"],["td","\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355"],["td","boolean"],["td","-"],["td"]],["tr",["td","defaultValue"],["td","\u6307\u5B9A\u9ED8\u8BA4\u9009\u4E2D\u7684\u6761\u76EE"],["td","string"],["td","-"],["td"]],["tr",["td","disabled"],["td","\u662F\u5426\u7981\u7528"],["td","boolean"],["td","false"],["td"]],["tr",["td","dropdownClassName"],["td","\u4E0B\u62C9\u83DC\u5355\u7684 className \u5C5E\u6027"],["td","string"],["td","-"],["td"]],["tr",["td","dropdownMatchSelectWidth"],["td","\u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD\u3002\u9ED8\u8BA4\u5C06\u8BBE\u7F6E ",["code","min-width"],"\uFF0C\u5F53\u503C\u5C0F\u4E8E\u9009\u62E9\u6846\u5BBD\u5EA6\u65F6\u4F1A\u88AB\u5FFD\u7565\u3002false \u65F6\u4F1A\u5173\u95ED\u865A\u62DF\u6EDA\u52A8"],["td","boolean ","|"," number"],["td","true"],["td"]],["tr",["td","filterOption"],["td","\u662F\u5426\u6839\u636E\u8F93\u5165\u9879\u8FDB\u884C\u7B5B\u9009\u3002\u5F53\u5176\u4E3A\u4E00\u4E2A\u51FD\u6570\u65F6\uFF0C\u4F1A\u63A5\u6536 ",["code","inputValue"]," ",["code","option"]," \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 ",["code","option"]," \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE true\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE false"],["td","boolean ","|"," function(inputValue, option)"],["td","true"],["td"]],["tr",["td","getPopupContainer"],["td","\u83DC\u5355\u6E32\u67D3\u7236\u8282\u70B9\u3002\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\uFF0C\u5982\u679C\u4F60\u9047\u5230\u83DC\u5355\u6EDA\u52A8\u5B9A\u4F4D\u95EE\u9898\uFF0C\u8BD5\u8BD5\u4FEE\u6539\u4E3A\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u5E76\u76F8\u5BF9\u5176\u5B9A\u4F4D\u3002",["a",{title:null,href:"https://codesandbox.io/s/4j168r7jw0"},"\u793A\u4F8B"]],["td","function(triggerNode)"],["td","() => document.body"],["td"]],["tr",["td","notFoundContent"],["td","\u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","open"],["td","\u662F\u5426\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355"],["td","boolean"],["td","-"],["td"]],["tr",["td","options"],["td","\u6570\u636E\u5316\u914D\u7F6E\u9009\u9879\u5185\u5BB9\uFF0C\u76F8\u6BD4 jsx \u5B9A\u4E49\u4F1A\u83B7\u5F97\u66F4\u597D\u7684\u6E32\u67D3\u6027\u80FD"],["td","{ label, value }","[","]"],["td","-"],["td"]],["tr",["td","placeholder"],["td","\u8F93\u5165\u6846\u63D0\u793A"],["td","string"],["td","-"],["td"]],["tr",["td","status"],["td","\u8BBE\u7F6E\u6821\u9A8C\u72B6\u6001"],["td","'error' ","|"," 'warning'"],["td","-"],["td","4.19.0"]],["tr",["td","value"],["td","\u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE"],["td","string"],["td","-"],["td"]],["tr",["td","onBlur"],["td","\u5931\u53BB\u7126\u70B9\u65F6\u7684\u56DE\u8C03"],["td","function()"],["td","-"],["td"]],["tr",["td","onChange"],["td","\u9009\u4E2D option\uFF0C\u6216 input \u7684 value \u53D8\u5316\u65F6\uFF0C\u8C03\u7528\u6B64\u51FD\u6570"],["td","function(value)"],["td","-"],["td"]],["tr",["td","onDropdownVisibleChange"],["td","\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355\u7684\u56DE\u8C03"],["td","function(open)"],["td","-"],["td"]],["tr",["td","onFocus"],["td","\u83B7\u5F97\u7126\u70B9\u65F6\u7684\u56DE\u8C03"],["td","function()"],["td","-"],["td"]],["tr",["td","onSearch"],["td","\u641C\u7D22\u8865\u5168\u9879\u7684\u65F6\u5019\u8C03\u7528"],["td","function(value)"],["td","-"],["td"]],["tr",["td","onSelect"],["td","\u88AB\u9009\u4E2D\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u9009\u4E2D\u9879\u7684 value \u503C"],["td","function(value, option)"],["td","-"],["td"]],["tr",["td","onClear"],["td","\u6E05\u9664\u5185\u5BB9\u65F6\u56DE\u8C03"],["td","function"],["td","-"],["td","4.6.0"]]]],["h2","\u65B9\u6CD5"],["table",["thead",["tr",["th","\u540D\u79F0"],["th","\u63CF\u8FF0"],["th","\u7248\u672C"]]],["tbody",["tr",["td","blur()"],["td","\u79FB\u9664\u7126\u70B9"],["td"]],["tr",["td","focus()"],["td","\u83B7\u53D6\u7126\u70B9"],["td"]]]],["h2","FAQ"],["h3","\u4E3A\u4F55\u53D7\u63A7\u72B6\u6001\u4E0B\u4F7F\u7528 onSearch \u65E0\u6CD5\u8F93\u5165\u4E2D\u6587\uFF1F"],["p","\u8BF7\u4F7F\u7528 ",["code","onChange"]," \u8FDB\u884C\u53D7\u63A7\u7BA1\u7406\u3002",["code","onSearch"]," \u89E6\u53D1\u4E8E\u641C\u7D22\u8F93\u5165\uFF0C\u4E0E ",["code","onChange"]," \u65F6\u673A\u4E0D\u540C\u3002\u6B64\u5916\uFF0C\u70B9\u9009\u9009\u9879\u65F6\u4E5F\u4E0D\u4F1A\u89E6\u53D1 ",["code","onSearch"]," \u4E8B\u4EF6\u3002"],["p","\u76F8\u5173 issue\uFF1A",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/18230"},"#18230"]," ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/17916"},"#17916"]],["h3","v3 \u7684\u90E8\u5206\u5C5E\u6027\u4E3A\u4F55\u5728 v4 \u4E2D\u6CA1\u6709\u4E86\uFF1F"],["p","AutoComplete \u7EC4\u4EF6\u662F\u4E00\u4E2A\u652F\u6301\u81EA\u52A8\u63D0\u793A\u7684 Input \u7EC4\u4EF6\uFF0C\u56E0\u800C\u5176\u4E0D\u5177\u6709 ",["code","labelInValue"]," \u7B49\u5F71\u54CD value \u5C55\u793A\u7684\u5C5E\u6027\u3002\u5728 v3 \u7248\u672C\uFF0CAutoComplete \u5B9E\u73B0\u5B58\u5728\u8F93\u5165\u503C\u5982\u679C\u9047\u5230 ",["code","value"]," \u4E0E ",["code","label"]," \u76F8\u540C\u65F6\u65E0\u6CD5\u6620\u5C04\u7684\u95EE\u9898\u3002 v4 \u4E2D\u4E0D\u518D\u652F\u6301 ",["code","label"]," \u4E3A\u503C\u7684\u8F93\u5165\u5F62\u6001\u3002"],["p","\u6B64\u5916\u4E3A\u4E86\u7EDF\u4E00 API\uFF0C",["code","dataSource"]," \u6539\u4E3A ",["code","options"]," \u4F60\u53EF\u4EE5\u5982\u4E0B\u8F6C\u6362\uFF1A"],["h4","v3"],["pre",{lang:"tsx",highlighted:`dataSource <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'light'</span><span class="token punctuation">,</span> <span class="token string">'bamboo'</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
<span class="token operator">/</span><span class="token operator">/</span> <span class="token operator">or</span>
dataSource <span class="token operator">=</span> <span class="token punctuation">[</span>
  { value<span class="token punctuation">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span> text<span class="token punctuation">:</span> <span class="token string">'Light'</span> }<span class="token punctuation">,</span>
  { value<span class="token punctuation">:</span> <span class="token string">'bamboo'</span><span class="token punctuation">,</span> text<span class="token punctuation">:</span> <span class="token string">'Bamboo'</span> }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>`},["code",`dataSource = ['light', 'bamboo'];
// or
dataSource = [
  { value: 'light', text: 'Light' },
  { value: 'bamboo', text: 'Bamboo' },
];`]],["h4","v4"],["pre",{lang:"tsx",highlighted:`options <span class="token operator">=</span> <span class="token punctuation">[</span>
  { value<span class="token punctuation">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">'Light'</span> }<span class="token punctuation">,</span>
  { value<span class="token punctuation">:</span> <span class="token string">'bamboo'</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">'Bamboo'</span> }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>`},["code",`options = [
  { value: 'light', label: 'Light' },
  { value: 'bamboo', label: 'Bamboo' },
];`]]]}}}]);
