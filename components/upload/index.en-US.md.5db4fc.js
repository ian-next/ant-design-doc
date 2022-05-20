(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{3075:function(e,t){e.exports={content:["section",["p","Upload file by selecting or dragging."],["h2","When To Use"],["p","Uploading is the process of publishing information (web pages, text, pictures, video, etc.) to a remote server via a web page or upload tool."],["ul",["li",["p","When you need to upload one or more files."]],["li",["p","When you need to show the process of uploading."]],["li",["p","When you need to upload files by dragging and dropping."]]]],meta:{category:"Components",type:"Data Entry",title:"Upload",cover:"https://gw.alipayobjects.com/zos/alicdn/QaeBt_ZMg/Upload.svg",filename:"components/upload/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","accept"],["td","File types that can be accepted. See ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept"},"input accept Attribute"]],["td","string"],["td","-"],["td"]],["tr",["td","action"],["td","Uploading URL"],["td","string ","|"," (file) => Promise","<","string>"],["td","-"],["td"]],["tr",["td","beforeUpload"],["td","Hook function which will be executed before uploading. Uploading will be stopped with ",["code","false"]," or a rejected Promise returned. When returned value is ",["code","Upload.LIST_IGNORE"],", the list of files that have been uploaded will ignore it. ",["strong","Warning\uFF1Athis function is not supported in IE9"]],["td","(file, fileList) => boolean ","|"," Promise","<","File> ","|"," ",["code","Upload.LIST_IGNORE"]],["td","-"],["td"]],["tr",["td","customRequest"],["td","Override for the default xhr behavior allowing for additional customization and ability to implement your own XMLHttpRequest"],["td","function"],["td","-"],["td"]],["tr",["td","data"],["td","Uploading extra params or function which can return uploading extra params"],["td","object ","|"," (file) => object ","|"," Promise","<","object>"],["td","-"],["td"]],["tr",["td","defaultFileList"],["td","Default list of files that have been uploaded"],["td","object","[","]"],["td","-"],["td"]],["tr",["td","directory"],["td","Support upload whole directory (",["a",{title:null,href:"https://caniuse.com/#feat=input-file-directory"},"caniuse"],")"],["td","boolean"],["td","false"],["td"]],["tr",["td","disabled"],["td","Disable upload button"],["td","boolean"],["td","false"],["td"]],["tr",["td","fileList"],["td","List of files that have been uploaded (controlled). Here is a common issue ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/2423"},"#2423"]," when using it"],["td",["a",{title:null,href:"#UploadFile"},"UploadFile"],"[","]"],["td","-"],["td"]],["tr",["td","headers"],["td","Set request headers, valid above IE10"],["td","object"],["td","-"],["td"]],["tr",["td","iconRender"],["td","Custom show icon"],["td","(file: UploadFile, listType?: UploadListType) => ReactNode"],["td","-"],["td"]],["tr",["td","isImageUrl"],["td","Customize if render ","<","img /> in thumbnail"],["td","(file: UploadFile) => boolean"],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/4ad5830eecfb87471cd8ac588c5d992862b70770/components/upload/utils.tsx#L47-L68"},"(inside implementation)"]],["td"]],["tr",["td","itemRender"],["td","Custom item of uploadList"],["td","(originNode: ReactElement, file: UploadFile, fileList: object","[","], actions: { download: function, preview: function, remove: function }) => React.ReactNode"],["td","-"],["td","4.16.0"]],["tr",["td","listType"],["td","Built-in stylesheets, support for three types: ",["code","text"],", ",["code","picture"]," or ",["code","picture-card"]],["td","string"],["td",["code","text"]],["td"]],["tr",["td","maxCount"],["td","Limit the number of uploaded files. Will replace current one when ",["code","maxCount"]," is ",["code","1"]],["td","number"],["td","-"],["td","4.10.0"]],["tr",["td","method"],["td","The http method of upload request"],["td","string"],["td",["code","post"]],["td"]],["tr",["td","multiple"],["td","Whether to support selected multiple file. ",["code","IE10+"]," supported. You can select multiple files with CTRL holding down while multiple is set to be true"],["td","boolean"],["td","false"],["td"]],["tr",["td","name"],["td","The name of uploading file"],["td","string"],["td",["code","file"]],["td"]],["tr",["td","openFileDialogOnClick"],["td","Click open file dialog"],["td","boolean"],["td","true"],["td"]],["tr",["td","previewFile"],["td","Customize preview file logic"],["td","(file: File ","|"," Blob) => Promise","<","dataURL: string>"],["td","-"],["td"]],["tr",["td","progress"],["td","Custom progress bar"],["td",["a",{title:null,href:"/components/progress/#API"},"ProgressProps"]," (support ",["code",'type="line"']," only)"],["td","{ strokeWidth: 2, showInfo: false }"],["td","4.3.0"]],["tr",["td","showUploadList"],["td","Whether to show default upload list, could be an object to specify ",["code","showPreviewIcon"],", ",["code","showRemoveIcon"],", ",["code","showDownloadIcon"],", ",["code","removeIcon"]," and ",["code","downloadIcon"]," individually"],["td","boolean ","|"," { showPreviewIcon?: boolean, showDownloadIcon?: boolean, showRemoveIcon?: boolean, previewIcon?: ReactNode ","|"," (file: UploadFile) => ReactNode, removeIcon?: ReactNode ","|"," (file: UploadFile) => ReactNode, downloadIcon?: ReactNode ","|"," (file: UploadFile) => ReactNode }"],["td","true"],["td","function: 4.7.0"]],["tr",["td","withCredentials"],["td","The ajax upload with cookie sent"],["td","boolean"],["td","false"],["td"]],["tr",["td","onChange"],["td","A callback function, can be executed when uploading state is changing, see ",["a",{title:null,href:"#onChange"},"onChange"]],["td","function"],["td","-"],["td"]],["tr",["td","onDrop"],["td","A callback function executed when files are dragged and dropped into upload area"],["td","(event: React.DragEvent) => void"],["td","-"],["td","4.16.0"]],["tr",["td","onDownload"],["td","Click the method to download the file, pass the method to perform the method logic, do not pass the default jump to the new TAB"],["td","function(file): void"],["td","(Jump to new TAB)"],["td"]],["tr",["td","onPreview"],["td","A callback function, will be executed when file link or preview icon is clicked"],["td","function(file)"],["td","-"],["td"]],["tr",["td","onRemove"],["td","A callback function, will be executed when removing file button is clicked, remove event will be prevented when return value is false or a Promise which resolve(false) or reject"],["td","function(file): boolean ","|"," Promise"],["td","-"],["td"]]]],["h3","UploadFile"],["p","Extends File with additional props."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","name"],["td","File name"],["td","string"],["td","-"]],["tr",["td","percent"],["td","Upload progress percent"],["td","number"],["td","-"]],["tr",["td","status"],["td","Upload status. Show different style when configured"],["td",["code","error"]," ","|"," ",["code","success"]," ","|"," ",["code","done"]," ","|"," ",["code","uploading"]," ","|"," ",["code","removed"]],["td","-"]],["tr",["td","thumbUrl"],["td","Thumb image url"],["td","string"],["td","-"]],["tr",["td","uid"],["td","unique id. Will auto generate when not provided"],["td","string"],["td","-"]],["tr",["td","url"],["td","Download url"],["td","string"],["td","-"]]]],["h3","onChange"],["blockquote",["p","The function will be called when uploading is in progress, completed or failed."]],["p","When uploading state change, it returns:"],["pre",{lang:"js",highlighted:`<span class="token punctuation">{</span>
  file<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token comment" spellcheck="true">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  fileList<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token comment" spellcheck="true">/* ... */</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
  event<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token comment" spellcheck="true">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>`},["code",`{
  file: { /* ... */ },
  fileList: [ /* ... */ ],
  event: { /* ... */ },
}`]],["ol",["li",["p",["code","file"]," File object for the current operation."],["pre",{lang:"js",highlighted:`<span class="token punctuation">{</span>
   uid<span class="token punctuation">:</span> <span class="token string">'uid'</span><span class="token punctuation">,</span>      <span class="token comment" spellcheck="true">// unique identifier, negative is recommend, to prevent interference with internal generated id</span>
   name<span class="token punctuation">:</span> <span class="token string">'xx.png'</span><span class="token punctuation">,</span>   <span class="token comment" spellcheck="true">// file name</span>
   status<span class="token punctuation">:</span> <span class="token string">'done'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// options\uFF1Auploading, done, error, removed. Intercepted file by beforeUpload don't have status field.</span>
   response<span class="token punctuation">:</span> <span class="token string">'{"status": "success"}'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// response from server</span>
   linkProps<span class="token punctuation">:</span> <span class="token string">'{"download": "image"}'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// additional html props of file link</span>
   xhr<span class="token punctuation">:</span> <span class="token string">'XMLHttpRequest{ ... }'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// XMLHttpRequest Header</span>
<span class="token punctuation">}</span>`},["code",`{
   uid: 'uid',      // unique identifier, negative is recommend, to prevent interference with internal generated id
   name: 'xx.png',   // file name
   status: 'done', // options\uFF1Auploading, done, error, removed. Intercepted file by beforeUpload don't have status field.
   response: '{"status": "success"}', // response from server
   linkProps: '{"download": "image"}', // additional html props of file link
   xhr: 'XMLHttpRequest{ ... }', // XMLHttpRequest Header
}`]]],["li",["p",["code","fileList"]," current list of files"]],["li",["p",["code","event"]," response from server, including uploading progress, supported by advanced browsers."]]],["h2","FAQ"],["h3","How do I implement upload server side?"],["ul",["li",["p","You can consult ",["a",{title:null,href:"https://github.com/blueimp/jQuery-File-Upload/wiki#server-side"},"jQuery-File-Upload"]," about how to implement server side upload interface."]],["li",["p","There is a mock example of ",["a",{title:null,href:"https://github.com/react-component/upload/blob/master/server.js"},"express"]," in rc-upload."]]],["h3","I want to display download links."],["p","Please set property ",["code","url"]," of each item in ",["code","fileList"]," to control content of link."],["h3","How to use ",["code","customRequest"],"?"],["p","See ",["a",{title:null,href:"https://github.com/react-component/upload#customrequest"},"https://github.com/react-component/upload#customrequest"],"."],["h3","Why will the ",["code","fileList"]," that's in control not trigger ",["code","onChange"]," ",["code","status"]," update when the file is not in the list?"],["p",["code","onChange"]," will only trigger when the file is in the list, it will ignore any events removed from the list. Please note that there does exist a bug which makes an event still trigger even when the file is not in the list before ",["code","4.13.0"],"."],["h3","Why does ",["code","onChange"]," sometimes return File object and other times return { originFileObj: File }?"],["p","For compatible case, we return File object when ",["code","beforeUpload"]," return ",["code","false"],". It will merge to ",["code","{ originFileObj: File }"]," in next major version. Current version is compatible to get origin file by ",["code","info.file.originFileObj"],". You can change this before major release."]]}}}]);
