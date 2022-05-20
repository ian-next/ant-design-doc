(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{3803:function(t,e){t.exports={content:["section",["p","A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data."],["h2","When To Use"],["ul",["li",["p","A user input in a form field is needed."]],["li",["p","A search input is required."]]]],meta:{category:"Components",type:"Data Entry",title:"Input",cover:"https://gw.alipayobjects.com/zos/alicdn/xS9YEJhfe/Input.svg",filename:"components/input/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["h3","Input"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","addonAfter"],["td","The label text displayed after (on the right side of) the input field"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","addonBefore"],["td","The label text displayed before (on the left side of) the input field"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","allowClear"],["td","If allow to remove input content with clear icon"],["td","boolean ","|"," { clearIcon: ReactNode }"],["td","false"],["td"]],["tr",["td","bordered"],["td","Whether has border style"],["td","boolean"],["td","true"],["td","4.5.0"]],["tr",["td","defaultValue"],["td","The initial input content"],["td","string"],["td","-"],["td"]],["tr",["td","disabled"],["td","Whether the input is disabled"],["td","boolean"],["td","false"],["td"]],["tr",["td","id"],["td","The ID for input"],["td","string"],["td","-"],["td"]],["tr",["td","maxLength"],["td","The max length"],["td","number"],["td","-"],["td"]],["tr",["td","showCount"],["td","Whether show text count"],["td","boolean ","|"," { formatter: ({ count: number, maxLength?: number }) => ReactNode }"],["td","false"],["td","4.18.0"]],["tr",["td","status"],["td","Set validation status"],["td","'error' ","|"," 'warning'"],["td","-"],["td","4.19.0"]],["tr",["td","prefix"],["td","The prefix icon for the Input"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","size"],["td","The size of the input box. Note: in the context of a form, the ",["code","middle"]," size is used"],["td",["code","large"]," ","|"," ",["code","middle"]," ","|"," ",["code","small"]],["td","-"],["td"]],["tr",["td","suffix"],["td","The suffix icon for the Input"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","type"],["td","The type of input, see: ",["a",{title:null,href:"https://developer.mozilla.org/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types"},"MDN"],"( use ",["code","Input.TextArea"]," instead of ",["code",'type="textarea"'],")"],["td","string"],["td",["code","text"]],["td"]],["tr",["td","value"],["td","The input content value"],["td","string"],["td","-"],["td"]],["tr",["td","onChange"],["td","Callback when user input"],["td","function(e)"],["td","-"],["td"]],["tr",["td","onPressEnter"],["td","The callback function that is triggered when Enter key is pressed"],["td","function(e)"],["td","-"],["td"]]]],["blockquote",["p","When ",["code","Input"]," is used in a ",["code","Form.Item"]," context, if the ",["code","Form.Item"]," has the ",["code","id"]," and ",["code","options"]," props defined then ",["code","value"],", ",["code","defaultValue"],", and ",["code","id"]," props of ",["code","Input"]," are automatically set."]],["p","The rest of the props of Input are exactly the same as the original ",["a",{title:null,href:"https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes"},"input"],"."],["h3","Input.TextArea"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","allowClear"],["td","If allow to remove input content with clear icon"],["td","boolean"],["td","false"],["td"]],["tr",["td","autoSize"],["td","Height autosize feature, can be set to true ","|"," false or an object { minRows: 2, maxRows: 6 }"],["td","boolean ","|"," object"],["td","false"],["td"]],["tr",["td","bordered"],["td","Whether has border style"],["td","boolean"],["td","true"],["td","4.5.0"]],["tr",["td","defaultValue"],["td","The initial input content"],["td","string"],["td","-"],["td"]],["tr",["td","maxLength"],["td","The max length"],["td","number"],["td","-"],["td","4.7.0"]],["tr",["td","showCount"],["td","Whether show text count"],["td","boolean ","|"," { formatter: ({ count: number, maxLength?: number }) => string }"],["td","false"],["td","4.7.0 (formatter: 4.10.0)"]],["tr",["td","value"],["td","The input content value"],["td","string"],["td","-"],["td"]],["tr",["td","onPressEnter"],["td","The callback function that is triggered when Enter key is pressed"],["td","function(e)"],["td","-"],["td"]],["tr",["td","onResize"],["td","The callback function that is triggered when resize"],["td","function({ width, height })"],["td","-"],["td"]]]],["p","The rest of the props of ",["code","Input.TextArea"]," are the same as the original ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea"},"textarea"],"."],["h4","Input.Search"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","enterButton"],["td","Whether to show an enter button after input. This property conflicts with the ",["code","addonAfter"]," property"],["td","boolean ","|"," ReactNode"],["td","false"]],["tr",["td","loading"],["td","Search box with loading"],["td","boolean"],["td","false"]],["tr",["td","onSearch"],["td","The callback function triggered when you click on the search-icon, the clear-icon or press the Enter key"],["td","function(value, event)"],["td","-"]]]],["p","Supports all props of ",["code","Input"],"."],["h4","Input.Group"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","compact"],["td","Whether use compact style"],["td","boolean"],["td","false"]],["tr",["td","size"],["td","The size of ",["code","Input.Group"]," specifies the size of the included ",["code","Input"]," fields. Available: ",["code","large"]," ",["code","default"]," ",["code","small"]],["td","string"],["td",["code","default"]]]]],["pre",{lang:"jsx",highlighted:`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input.Group</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Input.Group</span><span class="token punctuation">></span></span>`},["code",`<Input.Group>
  <input />
  <input />
</Input.Group>`]],["h4","Input.Password"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","iconRender"],["td","Custom toggle button"],["td","(visible) => ReactNode"],["td","(visible) => (visible ? ","<","EyeOutlined /> : ","<","EyeInvisibleOutlined />)"],["td","4.3.0"]],["tr",["td","visibilityToggle"],["td","Whether show toggle button"],["td","boolean"],["td","true"],["td"]]]],["h4","Input Methods"],["table",["thead",["tr",["th","Name"],["th","Description"],["th","Parameters"],["th","Version"]]],["tbody",["tr",["td","blur"],["td","Remove focus"],["td","-"],["td"]],["tr",["td","focus"],["td","Get focus"],["td","(option?: { preventScroll?: boolean, cursor?: 'start' ","|"," 'end' ","|"," 'all' })"],["td","option - 4.10.0"]]]],["h2","FAQ"],["h3","Why Input lose focus when change ",["code","prefix/suffix/showCount"]],["p","When Input dynamic add or remove ",["code","prefix/suffix/showCount"]," will make React recreate the dom structure and new input will be not focused. You can set an empty ",["code","<span />"]," element to keep the dom structure:"],["pre",{lang:"jsx",highlighted:`<span class="token keyword">const</span> suffix <span class="token operator">=</span> condition <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>smile<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token attr-name">suffix</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>suffix<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>`},["code",`const suffix = condition ? <Icon type="smile" /> : <span />;

<Input suffix={suffix} />;`]],["h3","Why TextArea in control can make ",["code","value"]," exceed ",["code","maxLength"],"?"],["p","When in control, component should show as what it set to avoid submit value not align with store value in Form."]]}}}]);
