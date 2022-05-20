(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{3962:function(e,t){e.exports={content:["article",["p","Detail Pages display the complete data to users. Users can edit the information or do other operations."],["h2","Design Goals"],["p","To increase the information viewing and searching efficiency. To raise the convenience of operation."],["h2","Design Principles"],["div",{class:"design-inline-cards"},["div",["img",{src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*3CfhSZLxsIEAAAAAAAAAAABkARQnAQ"}],["div",["h4","Direct"],["p","Try to display the information as flat as possible. Do not hide or fold up the content if not necessary."]]],["div",["img",{src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*lN6IRbhv8fIAAAAAAAAAAABkARQnAQ"}],["div",["h4","Clear hierarchy"],["p","In order to decrease the information complexity on each page, put information in levels and groups, following the principle of proximity."]]],["div",["img",{src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*jXDwQ6NF7dIAAAAAAAAAAABkARQnAQ"}],["div",["h4","Concise"],["p","Reduce the use of complex structures, try to use similar layouts and modules to reduce the interference of structural differences to users, and let them focus on information itself."]]]],["h2","Typical Templates"],["h3","Basic Layouts"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/zos/antfincdn/pCRKNg9k17/1bd63a4b-d1f4-4e07-b22a-d473846ffa4c.png"}]],["p","Basic Detail Pages directly show all the information at the same level of hierarchy. We suggest such method of displaying data."],["h4",["a",{title:null,href:"https://preview.pro.ant.design/profile/basic"},"Basic Detail Templates"]],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/zos/antfincdn/mbOatwyvyE/0fb8dd2b-b0d6-4833-8eef-4b9bb403eece.png"}]],["p","Basic layout templates display the main information on one whole card, using non-column split lines to separate the content into groups."],["p",["strong","When to use"]],["p","To display information with less content and low complexity."],["h4","Document Detail Templates"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/zos/antfincdn/scYc%24%24mD8l/17738081-f446-417b-9b32-a8c30de2f221.png"}]],["p","Document Detail Templates display the detailed information of approval documents. They use cards to separate the modules with complex content."],["p",["strong","When to use"]],["p","To display approval process and detailed approval information, as well as some approval operations."],["p",["strong","Related operations"]],["p","Pass, reject, transfer, sign, suspend and withdraw."],["h3","Complex Layouts"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/zos/antfincdn/B76lyJVA80/3c938d7e-06a8-464c-b70c-5b2bebfcd638.png"}]],["p","Deal with complex details in the following way: Divide information with high complexity and weak correlation into multiple parts. And put the parts into groups according to their relativities, with tabs, steps, cards, etc."],["h4",["a",{title:null,href:"https://preview.pro.ant.design/profile/advanced"},"Advanced Detail Templates"]],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/zos/antfincdn/%241vXHbjQ2A/ad454bfb-55d8-43b1-b1fb-adfbc889045c.png"}]],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/zos/antfincdn/O0dPbOqGT0/07b6e341-2186-4a20-bc2c-513d91d3faa8.png"}]],["p",["strong","When to use"]],["p","When the detail page has large and complex content, it has to be split into multiple tabs to guide users to browse information."],["h4","Publish Process Templates"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/zos/antfincdn/zMjpjg%24oaY/a9b7e996-ca9a-45d8-afbb-3c1727208629.png"}]],["p","Divide the content into steps, letting users to browse and operate step by step."],["p",["strong","When to use"]],["p","Such templates are suitable for developing and collaborating processes."],["h2","Design Suggestions"],["h4","How to choose template"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/zos/antfincdn/1uy%243Y6SRp/1a6ff7f8-4cd0-483b-b8a5-c8d49c63fa92.png"}]],["p","Based on information complexity and correlation model, choose related modes to present the information, and select suitable layouts to display the contents of detail pages."],["h4","Separation Methods"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/zos/antfincdn/gadw%26gZBCW/f8c03ba9-73ae-40f6-b687-c322ecf963cb.png"}]],["p","Conclude the closeness of each information module according to the relevance among them. Usually, the more relevant the contents are, the closer they are to each other."],["ul",["li",["p","Non-column split lines: to separate relevant contents;"]],["li",["p","Full-column split lines: to divide the content into multiple parts;"]],["li",["p","Cards: to display information on one topic;"]],["li",["p","Tabs: to put the information into groups according to some feature, such as version, intention, phase, etc."]]],["h4","Content Components"],["p",["img",{class:"preview-img no-padding",align:"right",src:"https://gw.alipayobjects.com/zos/antfincdn/J7ccrSNpjz/89878d45-ca15-4a6a-853e-3281fe02f114.png"}]],["p","Select presentation modes of the information according to its types and complexity. Abased on the complexity from low to high, the followings are available components:"],["h2","Read more"],["h4","Related Global Rules"],["ul",["li",["p",["a",{title:null,href:"/docs/spec/data-format"},"Data Format"]]],["li",["p",["a",{title:null,href:"/docs/spec/buttons"},"Button"]]]],["h4","Related Modules or Components"],["ul",["li",["p",["a",{title:null,href:"/components/descriptions/"},"Description"]]],["li",["p",["a",{title:null,href:"/components/collapse/"},"Collapse"]]],["li",["p",["a",{title:null,href:"/components/table/"},"Table"]]]],["h4","Reference"],["ul",["li",["p",["a",{title:null,href:"https://blogs.sap.com/2017/08/06/fiori-elements-how-to-design-an-object-page/"},"Fiori \u2013 How to Design an Object Page"]]],["li",["p",["a",{title:null,href:"https://experience.sap.com/skillup/sap-fiori-2-0-the-object-page-part-1-its-history/"},"SAP Fiori 2.0: The Object Page \u2014\u2014 Part 1: It's History"]]],["li",["p",["a",{title:null,href:"https://experience.sap.com/fiori-design-web/object-page/"},"Object Page Floorplan"]]],["li",["p",["a",{title:null,href:"https://experience.sap.com/fiori-design-web/object-page/"},"Principle of Product Display in Supermarkets"]]]]],meta:{category:"Design Patterns",type:"Template Document",order:3,title:"Detail Page",filename:"docs/spec/detail-page.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Design-Goals",title:"Design Goals"},"Design Goals"]],["li",["a",{className:"bisheng-toc-h2",href:"#Design-Principles",title:"Design Principles"},"Design Principles"]],["li",["a",{className:"bisheng-toc-h2",href:"#Typical-Templates",title:"Typical Templates"},"Typical Templates"]],["li",["a",{className:"bisheng-toc-h2",href:"#Design-Suggestions",title:"Design Suggestions"},"Design Suggestions"]],["li",["a",{className:"bisheng-toc-h2",href:"#Read-more",title:"Read more"},"Read more"]]]}}}]);
