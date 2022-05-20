(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{3807:function(t,d){t.exports={content:["section",["p","\u901A\u8FC7\u9F20\u6807\u6216\u952E\u76D8\uFF0C\u8F93\u5165\u8303\u56F4\u5185\u7684\u6570\u503C\u3002"],["h2","\u4F55\u65F6\u4F7F\u7528"],["p","\u5F53\u9700\u8981\u83B7\u53D6\u6807\u51C6\u6570\u503C\u65F6\u3002"]],meta:{category:"Components",subtitle:"\u6570\u5B57\u8F93\u5165\u6846",type:"\u6570\u636E\u5F55\u5165",title:"InputNumber",cover:"https://gw.alipayobjects.com/zos/alicdn/XOS8qZ0kU/InputNumber.svg",filename:"components/input-number/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4F55\u65F6\u4F7F\u7528",title:"\u4F55\u65F6\u4F7F\u7528"},"\u4F55\u65F6\u4F7F\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u65B9\u6CD5",title:"\u65B9\u6CD5"},"\u65B9\u6CD5"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["p","\u5C5E\u6027\u5982\u4E0B"],["table",["thead",["tr",["th","\u6210\u5458"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","addonAfter"],["td","\u5E26\u6807\u7B7E\u7684 input\uFF0C\u8BBE\u7F6E\u540E\u7F6E\u6807\u7B7E"],["td","ReactNode"],["td","-"],["td","4.17.0"]],["tr",["td","addonBefore"],["td","\u5E26\u6807\u7B7E\u7684 input\uFF0C\u8BBE\u7F6E\u524D\u7F6E\u6807\u7B7E"],["td","ReactNode"],["td","-"],["td","4.17.0"]],["tr",["td","autoFocus"],["td","\u81EA\u52A8\u83B7\u53D6\u7126\u70B9"],["td","boolean"],["td","false"],["td","-"]],["tr",["td","bordered"],["td","\u662F\u5426\u6709\u8FB9\u6846"],["td","boolean"],["td","true"],["td","4.12.0"]],["tr",["td","controls"],["td","\u662F\u5426\u663E\u793A\u589E\u51CF\u6309\u94AE\uFF0C\u4E5F\u53EF\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u7BAD\u5934\u56FE\u6807"],["td","boolean ","|"," { upIcon?: React.ReactNode; downIcon?: React.ReactNode; }"],["td","-"],["td","4.19.0"]],["tr",["td","decimalSeparator"],["td","\u5C0F\u6570\u70B9"],["td","string"],["td","-"],["td","-"]],["tr",["td","defaultValue"],["td","\u521D\u59CB\u503C"],["td","number"],["td","-"],["td","-"]],["tr",["td","disabled"],["td","\u7981\u7528"],["td","boolean"],["td","false"],["td","-"]],["tr",["td","formatter"],["td","\u6307\u5B9A\u8F93\u5165\u6846\u5C55\u793A\u503C\u7684\u683C\u5F0F"],["td","function(value: number ","|"," string, info: { userTyping: boolean, input: string }): string"],["td","-"],["td","info: 4.17.0"]],["tr",["td","keyboard"],["td","\u662F\u5426\u542F\u7528\u952E\u76D8\u5FEB\u6377\u884C\u4E3A"],["td","boolean"],["td","true"],["td","4.12.0"]],["tr",["td","max"],["td","\u6700\u5927\u503C"],["td","number"],["td",["a",{title:null,href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER"},"Number.MAX_SAFE_INTEGER"]],["td","-"]],["tr",["td","min"],["td","\u6700\u5C0F\u503C"],["td","number"],["td",["a",{title:null,href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER"},"Number.MIN_SAFE_INTEGER"]],["td","-"]],["tr",["td","parser"],["td","\u6307\u5B9A\u4ECE ",["code","formatter"]," \u91CC\u8F6C\u6362\u56DE\u6570\u5B57\u7684\u65B9\u5F0F\uFF0C\u548C ",["code","formatter"]," \u642D\u914D\u4F7F\u7528"],["td","function(string): number"],["td","-"],["td","-"]],["tr",["td","precision"],["td","\u6570\u503C\u7CBE\u5EA6\uFF0C\u914D\u7F6E ",["code","formatter"]," \u65F6\u4F1A\u4EE5 ",["code","formatter"]," \u4E3A\u51C6"],["td","number"],["td","-"],["td","-"]],["tr",["td","readOnly"],["td","\u53EA\u8BFB"],["td","boolean"],["td","false"],["td","-"]],["tr",["td","status"],["td","\u8BBE\u7F6E\u6821\u9A8C\u72B6\u6001"],["td","'error' ","|"," 'warning'"],["td","-"],["td","4.19.0"]],["tr",["td","prefix"],["td","\u5E26\u6709\u524D\u7F00\u56FE\u6807\u7684 input"],["td","ReactNode"],["td","-"],["td","4.17.0"]],["tr",["td","size"],["td","\u8F93\u5165\u6846\u5927\u5C0F"],["td",["code","large"]," ","|"," ",["code","middle"]," ","|"," ",["code","small"]],["td","-"],["td","-"]],["tr",["td","step"],["td","\u6BCF\u6B21\u6539\u53D8\u6B65\u6570\uFF0C\u53EF\u4EE5\u4E3A\u5C0F\u6570"],["td","number ","|"," string"],["td","1"],["td","-"]],["tr",["td","stringMode"],["td","\u5B57\u7B26\u503C\u6A21\u5F0F\uFF0C\u5F00\u542F\u540E\u652F\u6301\u9AD8\u7CBE\u5EA6\u5C0F\u6570\u3002\u540C\u65F6 ",["code","onChange"]," \u5C06\u8FD4\u56DE string \u7C7B\u578B"],["td","boolean"],["td","false"],["td","4.13.0"]],["tr",["td","value"],["td","\u5F53\u524D\u503C"],["td","number"],["td","-"],["td","-"]],["tr",["td","onChange"],["td","\u53D8\u5316\u56DE\u8C03"],["td","function(value: number ","|"," string ","|"," null)"],["td","-"],["td","-"]],["tr",["td","onPressEnter"],["td","\u6309\u4E0B\u56DE\u8F66\u7684\u56DE\u8C03"],["td","function(e)"],["td","-"],["td","-"]],["tr",["td","onStep"],["td","\u70B9\u51FB\u4E0A\u4E0B\u7BAD\u5934\u7684\u56DE\u8C03"],["td","(value: number, info: { offset: number, type: 'up' ","|"," 'down' }) => void"],["td","-"],["td","4.7.0"]]]],["h2","\u65B9\u6CD5"],["table",["thead",["tr",["th","\u540D\u79F0"],["th","\u63CF\u8FF0"]]],["tbody",["tr",["td","blur()"],["td","\u79FB\u9664\u7126\u70B9"]],["tr",["td","focus()"],["td","\u83B7\u53D6\u7126\u70B9"]]]],["h2","FAQ"],["h3","\u4E3A\u4F55\u53D7\u63A7\u6A21\u5F0F\u4E0B\uFF0C",["code","value"]," \u53EF\u4EE5\u8D85\u51FA ",["code","min"]," \u548C ",["code","max"]," \u8303\u56F4\uFF1F"],["p","\u5728\u53D7\u63A7\u6A21\u5F0F\u4E0B\uFF0C\u5F00\u53D1\u8005\u53EF\u80FD\u81EA\u884C\u5B58\u50A8\u76F8\u5173\u6570\u636E\u3002\u5982\u679C\u7EC4\u4EF6\u5C06\u6570\u636E\u7EA6\u675F\u56DE\u8303\u56F4\u5185\uFF0C\u4F1A\u5BFC\u81F4\u5C55\u793A\u6570\u636E\u4E0E\u5B9E\u9645\u5B58\u50A8\u6570\u636E\u4E0D\u4E00\u81F4\u7684\u60C5\u51B5\u3002\u8FD9\u4F7F\u5F97\u4E00\u4E9B\u5982\u8868\u5355\u573A\u666F\u5B58\u5728\u6F5C\u5728\u7684\u6570\u636E\u95EE\u9898\u3002"],["h3","\u4E3A\u4F55\u52A8\u6001\u4FEE\u6539 ",["code","min"]," \u548C ",["code","max"]," \u8BA9 ",["code","value"]," \u8D85\u51FA\u8303\u56F4\u4E0D\u4F1A\u89E6\u53D1 ",["code","onChange"]," \u4E8B\u4EF6\uFF1F"],["p",["code","onChange"]," \u4E8B\u4EF6\u4E3A\u7528\u6237\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u81EA\u884C\u89E6\u53D1\u4F1A\u5BFC\u81F4\u8868\u5355\u5E93\u8BEF\u4EE5\u4E3A\u53D8\u66F4\u6765\u81EA\u7528\u6237\u64CD\u4F5C\u3002\u6211\u4EEC\u4EE5\u9519\u8BEF\u6837\u5F0F\u5C55\u793A\u8D85\u51FA\u8303\u56F4\u7684\u6570\u503C\u3002"]]}}}]);
