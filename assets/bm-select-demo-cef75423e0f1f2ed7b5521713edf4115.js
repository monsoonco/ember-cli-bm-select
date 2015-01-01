define("bm-select-demo/app",["ember","ember/resolver","ember/load-initializers","bm-select-demo/config/environment","exports"],function(e,t,n,s,a){"use strict";var o=e["default"],r=t["default"],c=n["default"],u=s["default"];o.MODEL_FACTORY_INJECTIONS=!0;var h=o.Application.extend({modulePrefix:u.modulePrefix,podModulePrefix:u.podModulePrefix,Resolver:r});c(h,u.modulePrefix),a["default"]=h}),define("bm-select-demo/components/bm-option",["ember","bm-select/components/bm-option","exports"],function(e,t,n){"use strict";var s=(e["default"],t["default"]);n["default"]=s}),define("bm-select-demo/components/bm-options",["ember","bm-select/components/bm-options","exports"],function(e,t,n){"use strict";var s=(e["default"],t["default"]);n["default"]=s}),define("bm-select-demo/components/bm-select",["ember","bm-select/components/bm-select","exports"],function(e,t,n){"use strict";var s=(e["default"],t["default"]);n["default"]=s}),define("bm-select-demo/components/bm-selected",["ember","bm-select/components/bm-selected","exports"],function(e,t,n){"use strict";var s=(e["default"],t["default"]);n["default"]=s}),define("bm-select-demo/controllers/application",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.ObjectController.extend({selectedCountry:"India",selectedLanguage:"",selectedCurrency:"Rupee",countryFromAction:"",currencySymbolFromAction:"",actions:{countryChanged:function(e){this.set("countryFromAction",e.name)},currencyChanged:function(e){this.set("currencySymbolFromAction",e.symbol)}}})}),define("bm-select-demo/initializers/export-application-global",["ember","bm-select-demo/config/environment","exports"],function(e,t,n){"use strict";function s(e,t){var n=a.String.classify(o.modulePrefix);o.exportApplicationGlobal&&(window[n]=t)}var a=e["default"],o=t["default"];n.initialize=s,n["default"]={name:"export-application-global",initialize:s}}),define("bm-select-demo/router",["ember","bm-select-demo/config/environment","exports"],function(e,t,n){"use strict";var s=e["default"],a=t["default"],o=s.Router.extend({location:a.locationType});o.map(function(){}),n["default"]=o}),define("bm-select-demo/routes/application",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Route.extend({model:function(){return{countries:[{name:"France"},{name:"Germany"},{name:"India"},{name:"China"}],languages:["French","German","Hindi","Mandarin"],currencies:[{name:"Euro",country:"france",symbol:"€"},{name:"Rupee",country:"india",symbol:"₹"},{name:"Yen",country:"china",symbol:"¥"}]}}})}),define("bm-select-demo/templates/application",["ember","exports"],function(e,t){"use strict";var n=e["default"];t["default"]=n.Handlebars.template(function(e,t,s,a,o){function r(e,t){var n,a,o,r="";return t.buffer.push("\n\n      "),o={hash:{},hashTypes:{},hashContexts:{},inverse:k.noop,fn:k.program(2,c,t),contexts:[],types:[],data:t},(a=s["bm-selected"])?n=a.call(e,o):(a=e&&e["bm-selected"],n=typeof a===A?a.call(e,o):a),s["bm-selected"]||(n=R.call(e,"bm-selected",{hash:{},hashTypes:{},hashContexts:{},inverse:k.noop,fn:k.program(2,c,t),contexts:[],types:[],data:t})),(n||0===n)&&t.buffer.push(n),t.buffer.push("\n\n      "),o={hash:{},hashTypes:{},hashContexts:{},inverse:k.noop,fn:k.program(4,u,t),contexts:[],types:[],data:t},(a=s["bm-options"])?n=a.call(e,o):(a=e&&e["bm-options"],n=typeof a===A?a.call(e,o):a),s["bm-options"]||(n=R.call(e,"bm-options",{hash:{},hashTypes:{},hashContexts:{},inverse:k.noop,fn:k.program(4,u,t),contexts:[],types:[],data:t})),(n||0===n)&&t.buffer.push(n),t.buffer.push("\n\n    "),r}function c(e,t){var n,a="";return t.buffer.push("\n        "),n=s._triageMustache.call(e,"selectedCountry",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(n||0===n)&&t.buffer.push(n),t.buffer.push("\n      "),a}function u(e,t){var n,a="";return t.buffer.push("\n        "),n=s.each.call(e,"item","in","model.countries",{hash:{},hashTypes:{},hashContexts:{},inverse:k.noop,fn:k.program(5,h,t),contexts:[e,e,e],types:["ID","ID","ID"],data:t}),(n||0===n)&&t.buffer.push(n),t.buffer.push("\n      "),a}function h(e,t){var n,a,o,r="";return t.buffer.push("\n            "),a=s["bm-option"]||e&&e["bm-option"],o={hash:{data:"item",key:"name"},hashTypes:{data:"ID",key:"STRING"},hashContexts:{data:e,key:e},inverse:k.noop,fn:k.program(6,l,t),contexts:[],types:[],data:t},n=a?a.call(e,o):w.call(e,"bm-option",o),(n||0===n)&&t.buffer.push(n),t.buffer.push("\n        "),r}function l(e,t){var n,a="";return t.buffer.push("\n              "),n=s._triageMustache.call(e,"item.name",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(n||0===n)&&t.buffer.push(n),t.buffer.push("\n            "),a}function p(e,t){var n,a,o,r="";return t.buffer.push("\n\n      "),o={hash:{},hashTypes:{},hashContexts:{},inverse:k.noop,fn:k.program(9,i,t),contexts:[],types:[],data:t},(a=s["bm-selected"])?n=a.call(e,o):(a=e&&e["bm-selected"],n=typeof a===A?a.call(e,o):a),s["bm-selected"]||(n=R.call(e,"bm-selected",{hash:{},hashTypes:{},hashContexts:{},inverse:k.noop,fn:k.program(9,i,t),contexts:[],types:[],data:t})),(n||0===n)&&t.buffer.push(n),t.buffer.push("\n\n      "),o={hash:{},hashTypes:{},hashContexts:{},inverse:k.noop,fn:k.program(14,d,t),contexts:[],types:[],data:t},(a=s["bm-options"])?n=a.call(e,o):(a=e&&e["bm-options"],n=typeof a===A?a.call(e,o):a),s["bm-options"]||(n=R.call(e,"bm-options",{hash:{},hashTypes:{},hashContexts:{},inverse:k.noop,fn:k.program(14,d,t),contexts:[],types:[],data:t})),(n||0===n)&&t.buffer.push(n),t.buffer.push("\n\n    "),r}function i(e,t){var n,a="";return t.buffer.push("\n        "),n=s["if"].call(e,"selectedLanguage",{hash:{},hashTypes:{},hashContexts:{},inverse:k.program(12,m,t),fn:k.program(10,f,t),contexts:[e],types:["ID"],data:t}),(n||0===n)&&t.buffer.push(n),t.buffer.push("\n      "),a}function f(e,t){var n,a="";return t.buffer.push("\n          "),n=s._triageMustache.call(e,"selectedLanguage",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(n||0===n)&&t.buffer.push(n),t.buffer.push("\n        "),a}function m(e,t){t.buffer.push("\n          Select a language\n        ")}function d(e,t){var n,a,o,r="";return t.buffer.push("\n        "),o={hash:{},hashTypes:{},hashContexts:{},inverse:k.noop,fn:k.program(15,b,t),contexts:[],types:[],data:t},(a=s["bm-option"])?n=a.call(e,o):(a=e&&e["bm-option"],n=typeof a===A?a.call(e,o):a),s["bm-option"]||(n=R.call(e,"bm-option",{hash:{},hashTypes:{},hashContexts:{},inverse:k.noop,fn:k.program(15,b,t),contexts:[],types:[],data:t})),(n||0===n)&&t.buffer.push(n),t.buffer.push("\n        "),n=s.each.call(e,"item","in","model.languages",{hash:{},hashTypes:{},hashContexts:{},inverse:k.noop,fn:k.program(17,y,t),contexts:[e,e,e],types:["ID","ID","ID"],data:t}),(n||0===n)&&t.buffer.push(n),t.buffer.push("\n      "),r}function b(e,t){t.buffer.push("Select a language")}function y(e,t){var n,a,o,r="";return t.buffer.push("\n            "),a=s["bm-option"]||e&&e["bm-option"],o={hash:{value:"item"},hashTypes:{value:"ID"},hashContexts:{value:e},inverse:k.noop,fn:k.program(18,g,t),contexts:[],types:[],data:t},n=a?a.call(e,o):w.call(e,"bm-option",o),(n||0===n)&&t.buffer.push(n),t.buffer.push("\n        "),r}function g(e,t){var n,a="";return t.buffer.push("\n              "),n=s._triageMustache.call(e,"item",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(n||0===n)&&t.buffer.push(n),t.buffer.push("\n            "),a}function v(e,t){var n,a,o,r="";return t.buffer.push("\n\n      "),o={hash:{},hashTypes:{},hashContexts:{},inverse:k.noop,fn:k.program(21,x,t),contexts:[],types:[],data:t},(a=s["bm-selected"])?n=a.call(e,o):(a=e&&e["bm-selected"],n=typeof a===A?a.call(e,o):a),s["bm-selected"]||(n=R.call(e,"bm-selected",{hash:{},hashTypes:{},hashContexts:{},inverse:k.noop,fn:k.program(21,x,t),contexts:[],types:[],data:t})),(n||0===n)&&t.buffer.push(n),t.buffer.push("\n\n      "),o={hash:{},hashTypes:{},hashContexts:{},inverse:k.noop,fn:k.program(23,C,t),contexts:[],types:[],data:t},(a=s["bm-options"])?n=a.call(e,o):(a=e&&e["bm-options"],n=typeof a===A?a.call(e,o):a),s["bm-options"]||(n=R.call(e,"bm-options",{hash:{},hashTypes:{},hashContexts:{},inverse:k.noop,fn:k.program(23,C,t),contexts:[],types:[],data:t})),(n||0===n)&&t.buffer.push(n),t.buffer.push("\n\n    "),r}function x(e,t){var n,a="";return t.buffer.push("\n        Currency - "),n=s._triageMustache.call(e,"currencySymbolFromAction",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(n||0===n)&&t.buffer.push(n),t.buffer.push("\n      "),a}function C(e,t){var n,a="";return t.buffer.push("\n        "),n=s.each.call(e,"item","in","model.currencies",{hash:{},hashTypes:{},hashContexts:{},inverse:k.noop,fn:k.program(24,T,t),contexts:[e,e,e],types:["ID","ID","ID"],data:t}),(n||0===n)&&t.buffer.push(n),t.buffer.push("\n      "),a}function T(e,t){var n,a,o,r="";return t.buffer.push("\n          "),a=s["bm-option"]||e&&e["bm-option"],o={hash:{data:"item",key:"name"},hashTypes:{data:"ID",key:"STRING"},hashContexts:{data:e,key:e},inverse:k.noop,fn:k.program(25,I,t),contexts:[],types:[],data:t},n=a?a.call(e,o):w.call(e,"bm-option",o),(n||0===n)&&t.buffer.push(n),t.buffer.push("\n        "),r}function I(e,t){var n,a="";return t.buffer.push("\n            "),n=s._triageMustache.call(e,"item.name",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(n||0===n)&&t.buffer.push(n),t.buffer.push("\n          "),a}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,n.Handlebars.helpers),o=o||{};var D,S,M,_="",k=this,w=s.helperMissing,A="function",R=s.blockHelperMissing;return o.buffer.push('<header>\n  <h2>{{bm-select}}</h2>\n  <p>\n    bm-select is a customizable select component that supports keyboard navigation and WAI-ARIA for Ember.\n    <br/>With bm-select you can specify how the options and selected option should look using handlebars.\n  </p>\n  <a href="https://github.com/blessenm/ember-cli-bm-select"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"></a>\n</header>\n\n<div class="demo-row">\n  <div class="demo">\n    <h4>Using default styles</h4>\n    <p>The country selected is '),D=s._triageMustache.call(t,"countryFromAction",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:o}),(D||0===D)&&o.buffer.push(D),o.buffer.push(".</p>\n\n    "),S=s["bm-select"]||t&&t["bm-select"],M={hash:{value:"selectedCountry",action:"countryChanged"},hashTypes:{value:"ID",action:"STRING"},hashContexts:{value:t,action:t},inverse:k.noop,fn:k.program(1,r,o),contexts:[],types:[],data:o},D=S?S.call(t,M):w.call(t,"bm-select",M),(D||0===D)&&o.buffer.push(D),o.buffer.push('\n  </div>\n\n  <div class="code">\n    <p>How to use in template.</p>\n    <pre><code>{{#bm-select value=selectedCountry action="countryChanged"}}\n\n  {{#bm-selected}}\n    {{selectedCountry}}\n  {{/bm-selected}}\n\n  {{#bm-options}}\n    {{#each item in model.countries}}\n      {{#bm-option data=item key="name"}}\n        {{item.name}}\n      {{/bm-option}}\n    {{/each}}\n  {{/bm-options}}\n\n{{/bm-select}}</code></pre>\n  </div>\n</div>\n\n<div class="demo-row">\n  <div class="demo">\n    <h4>Using array of strings as options and a placeholder text</h4>\n    <p>The language selected is '),D=s._triageMustache.call(t,"selectedLanguage",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:o}),(D||0===D)&&o.buffer.push(D),o.buffer.push(".</p>\n\n    "),S=s["bm-select"]||t&&t["bm-select"],M={hash:{value:"selectedLanguage"},hashTypes:{value:"ID"},hashContexts:{value:t},inverse:k.noop,fn:k.program(8,p,o),contexts:[],types:[],data:o},D=S?S.call(t,M):w.call(t,"bm-select",M),(D||0===D)&&o.buffer.push(D),o.buffer.push('\n  </div>\n\n  <div class="code">\n    <p>How to use in template.</p>\n    <pre><code>{{#bm-select value=selectedLanguage}}\n\n  {{#bm-selected}}\n    {{#if selectedLanguage}}\n      {{selectedLanguage}}\n    {{else}}\n      Select a language\n    {{/if}}\n  {{/bm-selected}}\n\n  {{#bm-options}}\n    {{#bm-option}}Select a language{{/bm-option}}\n    {{#each item in model.languages}}\n      {{#bm-option value=item}}\n        {{item}}\n      {{/bm-option}}\n    {{/each}}\n  {{/bm-options}}\n\n{{/bm-select}}</code></pre>\n  </div>\n</div>\n\n<div class="demo-row">\n  <div class="demo">\n    <h4>Using custom styles</h4>\n    <p>The currency selected is '),D=s._triageMustache.call(t,"selectedCurrency",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:o}),(D||0===D)&&o.buffer.push(D),o.buffer.push(".</p>\n\n    "),S=s["bm-select"]||t&&t["bm-select"],M={hash:{value:"selectedCurrency",action:"currencyChanged","class":"currency-demo"},hashTypes:{value:"ID",action:"STRING","class":"STRING"},hashContexts:{value:t,action:t,"class":t},inverse:k.noop,fn:k.program(20,v,o),contexts:[],types:[],data:o},D=S?S.call(t,M):w.call(t,"bm-select",M),(D||0===D)&&o.buffer.push(D),o.buffer.push('\n  </div>\n\n  <div class="code">\n    <p>How to use in template.</p>\n    <pre><code>{{#bm-select value=selectedCurrency action="currencyChanged" class="currency-demo"}}\n\n  {{#bm-selected}}\n    Currency - {{currencySymbolFromAction}}\n  {{/bm-selected}}\n\n  {{#bm-options}}\n    {{#each item in model.currencies}}\n      {{#bm-option data=item key="name"}}\n        {{item.name}}\n      {{/bm-option}}\n    {{/each}}\n  {{/bm-options}}\n\n{{/bm-select}}</code></pre>\n  </div>\n</div>\n'),_})}),define("bm-select-demo/config/environment",["ember"],function(e){var t="bm-select-demo";try{var n=t+"/config/environment",s=e["default"].$('meta[name="'+n+'"]').attr("content"),a=JSON.parse(unescape(s));return{"default":a}}catch(o){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("bm-select-demo/tests/test-helper"):require("bm-select-demo/app")["default"].create({});