(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{2886:function(t,s){t.exports={content:["section",["p","\u5C06\u9875\u9762\u5143\u7D20\u9489\u5728\u53EF\u89C6\u8303\u56F4\u3002"],["h2","\u4F55\u65F6\u4F7F\u7528"],["p","\u5F53\u5185\u5BB9\u533A\u57DF\u6BD4\u8F83\u957F\uFF0C\u9700\u8981\u6EDA\u52A8\u9875\u9762\u65F6\uFF0C\u8FD9\u90E8\u5206\u5185\u5BB9\u5BF9\u5E94\u7684\u64CD\u4F5C\u6216\u8005\u5BFC\u822A\u9700\u8981\u5728\u6EDA\u52A8\u8303\u56F4\u5185\u59CB\u7EC8\u5C55\u73B0\u3002\u5E38\u7528\u4E8E\u4FA7\u8FB9\u83DC\u5355\u548C\u6309\u94AE\u7EC4\u5408\u3002"],["p","\u9875\u9762\u53EF\u89C6\u8303\u56F4\u8FC7\u5C0F\u65F6\uFF0C\u614E\u7528\u6B64\u529F\u80FD\u4EE5\u514D\u906E\u6321\u9875\u9762\u5185\u5BB9\u3002"]],meta:{category:"Components",subtitle:"\u56FA\u9489",type:"\u5BFC\u822A",title:"Affix",cover:"https://gw.alipayobjects.com/zos/alicdn/tX6-md4H6/Affix.svg",filename:"components/affix/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4F55\u65F6\u4F7F\u7528",title:"\u4F55\u65F6\u4F7F\u7528"},"\u4F55\u65F6\u4F7F\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","\u6210\u5458"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"]]],["tbody",["tr",["td","offsetBottom"],["td","\u8DDD\u79BB\u7A97\u53E3\u5E95\u90E8\u8FBE\u5230\u6307\u5B9A\u504F\u79FB\u91CF\u540E\u89E6\u53D1"],["td","number"],["td","-"]],["tr",["td","offsetTop"],["td","\u8DDD\u79BB\u7A97\u53E3\u9876\u90E8\u8FBE\u5230\u6307\u5B9A\u504F\u79FB\u91CF\u540E\u89E6\u53D1"],["td","number"],["td","0"]],["tr",["td","target"],["td","\u8BBE\u7F6E ",["code","Affix"]," \u9700\u8981\u76D1\u542C\u5176\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5143\u7D20\uFF0C\u503C\u4E3A\u4E00\u4E2A\u8FD4\u56DE\u5BF9\u5E94 DOM \u5143\u7D20\u7684\u51FD\u6570"],["td","() => HTMLElement"],["td","() => window"]],["tr",["td","onChange"],["td","\u56FA\u5B9A\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570"],["td","(affixed?: boolean) => void"],["td","-"]]]],["p",["strong","\u6CE8\u610F\uFF1A"],["code","Affix"]," \u5185\u7684\u5143\u7D20\u4E0D\u8981\u4F7F\u7528\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u5982\u9700\u8981\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u6548\u679C\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8BBE\u7F6E ",["code","Affix"]," \u4E3A\u7EDD\u5BF9\u5B9A\u4F4D\uFF1A"],["pre",{lang:"jsx",highlighted:`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Affix</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> position<span class="token punctuation">:</span> <span class="token string">'absolute'</span><span class="token punctuation">,</span> top<span class="token punctuation">:</span> y<span class="token punctuation">,</span> left<span class="token punctuation">:</span> x <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Affix</span><span class="token punctuation">></span></span>`},["code","<Affix style={{ position: 'absolute', top: y, left: x }}>...</Affix>"]],["h2","FAQ"],["h3","Affix \u4F7F\u7528 ",["code","target"]," \u7ED1\u5B9A\u5BB9\u5668\u65F6\uFF0C\u5143\u7D20\u4F1A\u8DD1\u5230\u5BB9\u5668\u5916\u3002"],["p","\u4ECE\u6027\u80FD\u89D2\u5EA6\u8003\u8651\uFF0C\u6211\u4EEC\u53EA\u76D1\u542C\u5BB9\u5668\u6EDA\u52A8\u4E8B\u4EF6\u3002\u5982\u679C\u5E0C\u671B\u4EFB\u610F\u6EDA\u52A8\uFF0C\u4F60\u53EF\u4EE5\u5728\u7A97\u4F53\u6DFB\u52A0\u6EDA\u52A8\u76D1\u542C\uFF1A",["a",{title:null,href:"https://codesandbox.io/s/2xyj5zr85p"},"https://codesandbox.io/s/2xyj5zr85p"]],["p","\u76F8\u5173 issue\uFF1A",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/3938"},"#3938"]," ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/5642"},"#5642"]," ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/16120"},"#16120"]],["h3","Affix \u5728\u6C34\u5E73\u6EDA\u52A8\u5BB9\u5668\u4E2D\u4F7F\u7528\u65F6\uFF0C \u5143\u7D20 ",["code","left"]," \u4F4D\u7F6E\u4E0D\u6B63\u786E\u3002"],["p","Affix \u4E00\u822C\u53EA\u9002\u7528\u4E8E\u5355\u5411\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u53EA\u652F\u6301\u5728\u5782\u76F4\u6EDA\u52A8\u5BB9\u5668\u4E2D\u4F7F\u7528\u3002\u5982\u679C\u5E0C\u671B\u5728\u6C34\u5E73\u5BB9\u5668\u4E2D\u4F7F\u7528\uFF0C\u4F60\u53EF\u4EE5\u8003\u8651\u4F7F\u7528 \u539F\u751F ",["code","position: sticky"]," \u5B9E\u73B0\u3002"],["p","\u76F8\u5173 issue: ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/29108"},"#29108"]]]}}}]);
