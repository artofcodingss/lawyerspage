(self.webpackChunkdoctolib=self.webpackChunkdoctolib||[]).push([[84748],{755296:(t,e)=>{"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,a=r&&!n.call({1:2},1);e.f=a?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},252262:(t,e,n)=>{"use strict";var r=n(82109),a=n(747908),i=n(426244),o=n(19303),l=n(951223);r({target:"Array",proto:!0},{at:function(t){var e=a(this),n=i(e),r=o(t),l=r>=0?r:n+r;return l<0||l>=n?void 0:e[l]}}),l("at")},226699:(t,e,n)=>{"use strict";var r=n(82109),a=n(841318).includes,i=n(747293),o=n(951223);r({target:"Array",proto:!0,forced:i((function(){return!Array(1).includes()}))},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},996644:(t,e,n)=>{"use strict";var r=n(82109),a=n(753671).right,i=n(609341),o=n(507392),l=n(235268);r({target:"Array",proto:!0,forced:!i("reduceRight")||!l&&o>79&&o<83},{reduceRight:function(t){return a(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},185827:(t,e,n)=>{"use strict";var r=n(82109),a=n(753671).left,i=n(609341),o=n(507392),l=n(235268);r({target:"Array",proto:!0,forced:!i("reduce")||!l&&o>79&&o<83},{reduce:function(t){var e=arguments.length;return a(this,t,e,e>1?arguments[1]:void 0)}})},199244:(t,e,n)=>{n(951223)("flatMap")},133792:(t,e,n)=>{n(951223)("flat")},838559:(t,e,n)=>{var r=n(82109),a=n(720408),i=n(586135);r({target:"Object",stat:!0},{fromEntries:function(t){var e={};return a(t,(function(t,n){i(e,t,n)}),{AS_ENTRIES:!0}),e}})},241637:(t,e,n)=>{n(65556)},560285:(t,e,n)=>{n(368789)},583753:(t,e,n)=>{"use strict";var r=n(82109),a=n(246916);r({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return a(URL.prototype.toString,this)}})},425738:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i,i:()=>a});var r=n(962354),a=/(\$\d)/;function i(t,e,n){var i=n.useInternationalFormat,o=n.withNationalPrefix,l=(n.carrierCode,n.metadata,t.replace(new RegExp(e.pattern()),i?e.internationalFormat():o&&e.nationalPrefixFormattingRule()?e.format().replace(a,e.nationalPrefixFormattingRule()):e.format()));return i?(0,r.Z)(l):l}},829233:(t,e,n)=>{"use strict";function r(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,{ZP:()=>l,xh:()=>o});var i={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9"};function o(t){return i[t]}function l(t){for(var e,n="",a=r(t.split(""));!(e=a()).done;){var i=o(e.value);i&&(n+=i)}return n}},308398:(t,e,n)=>{"use strict";n.d(e,{R:()=>ot});var r=n(321293),a=n(812581),i=n(700433);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function t(e){var n=e.onCountryChange,r=e.onCallingCodeChange;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.onCountryChange=n,this.onCallingCodeChange=r}var e,n,r;return e=t,(n=[{key:"reset",value:function(t,e){this.international=!1,this.IDDPrefix=void 0,this.missingPlus=void 0,this.callingCode=void 0,this.digits="",this.resetNationalSignificantNumber(),this.initCountryAndCallingCode(t,e)}},{key:"resetNationalSignificantNumber",value:function(){this.nationalSignificantNumber=this.getNationalDigits(),this.nationalSignificantNumberMatchesInput=!0,this.nationalPrefix=void 0,this.carrierCode=void 0,this.complexPrefixBeforeNationalSignificantNumber=void 0}},{key:"update",value:function(t){for(var e=0,n=Object.keys(t);e<n.length;e++){var r=n[e];this[r]=t[r]}}},{key:"initCountryAndCallingCode",value:function(t,e){this.setCountry(t),this.setCallingCode(e)}},{key:"setCountry",value:function(t){this.country=t,this.onCountryChange(t)}},{key:"setCallingCode",value:function(t){return this.callingCode=t,this.onCallingCodeChange(this.country,t)}},{key:"startInternationalNumber",value:function(){this.international=!0,this.initCountryAndCallingCode()}},{key:"appendDigits",value:function(t){this.digits+=t}},{key:"appendNationalSignificantNumberDigits",value:function(t){this.nationalSignificantNumber+=t}},{key:"getNationalDigits",value:function(){return this.international?this.digits.slice((this.IDDPrefix?this.IDDPrefix.length:0)+(this.callingCode?this.callingCode.length:0)):this.digits}},{key:"getDigitsWithoutInternationalPrefix",value:function(){return this.international&&this.IDDPrefix?this.digits.slice(this.IDDPrefix.length):this.digits}}])&&o(e.prototype,n),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c="x",f=new RegExp(c);function h(t,e){if(e<1)return"";for(var n="";e>1;)1&e&&(n+=t),e>>=1,t+=t;return n+t}function g(t,e){return")"===t[e]&&e++,function(t){var e=[],n=0;for(;n<t.length;)"("===t[n]?e.push(n):")"===t[n]&&e.pop(),n++;var r=0,a="";e.push(t.length);for(var i=0,o=e;i<o.length;i++){var l=o[i];a+=t.slice(r,l),r=l+1}return a}(t.slice(0,e))}var m=n(187856),d=n(829233),p=n(425738);function v(t,e,n){var r=n.metadata,a=n.shouldTryNationalPrefixFormattingRule,i=n.getSeparatorAfterNationalPrefix;if(new RegExp("^(?:".concat(e.pattern(),")$")).test(t.nationalSignificantNumber))return function(t,e,n){var r=n.metadata,a=n.shouldTryNationalPrefixFormattingRule,i=n.getSeparatorAfterNationalPrefix;t.nationalSignificantNumber,t.international,t.nationalPrefix,t.carrierCode;if(a(e)){var o=y(t,e,{useNationalPrefixFormattingRule:!0,getSeparatorAfterNationalPrefix:i,metadata:r});if(o)return o}return y(t,e,{useNationalPrefixFormattingRule:!1,getSeparatorAfterNationalPrefix:i,metadata:r})}(t,e,{metadata:r,shouldTryNationalPrefixFormattingRule:a,getSeparatorAfterNationalPrefix:i})}function y(t,e,n){var r=n.metadata,a=n.useNationalPrefixFormattingRule,i=n.getSeparatorAfterNationalPrefix,o=(0,p.Z)(t.nationalSignificantNumber,e,{carrierCode:t.carrierCode,useInternationalFormat:t.international,withNationalPrefix:a,metadata:r});if(a||(t.nationalPrefix?o=t.nationalPrefix+i(e)+o:t.complexPrefixBeforeNationalSignificantNumber&&(o=t.complexPrefixBeforeNationalSignificantNumber+" "+o)),function(t,e){return(0,d.ZP)(t)===e.getNationalDigits()}(o,t))return o}function b(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return N(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function N(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function C(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function P(t,e,n){return e&&x(t.prototype,e),n&&x(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var S=function(){function t(e){C(this,t),this.matchTree=(new A).parse(e)}return P(t,[{key:"match",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.allowOverflow;if(!t)throw new Error("String is required");var r=w(t.split(""),this.matchTree,!0);if(r&&r.match&&delete r.matchedChars,!r||!r.overflow||n)return r}}]),t}();function w(t,e,n){if("string"===typeof e){if(n&&t.length>e.length)return{overflow:!0};var r=t.join("");return 0===e.indexOf(r)?t.length===e.length?{match:!0,matchedChars:t}:{partialMatch:!0}:0===r.indexOf(e)?{match:!0,matchedChars:t.slice(0,e.length)}:void 0}if(Array.isArray(e)){for(var a=t.slice(),i=0;i<e.length;){var o=w(a,e[i],n&&i===e.length-1);if(!o)return;if(o.overflow)return o;if(!o.match){if(o.partialMatch)return{partialMatch:!0};throw new Error("Unsupported match result:\n".concat(JSON.stringify(o,null,2)))}if(0===(a=a.slice(o.matchedChars.length)).length)return i===e.length-1?{match:!0,matchedChars:t}:{partialMatch:!0};i++}return n?{overflow:!0}:{match:!0,matchedChars:t.slice(0,t.length-a.length)}}switch(e.op){case"|":for(var l,u,s=b(e.args);!(u=s()).done;){var c=w(t,u.value,n);if(c){if(c.overflow)return c;if(c.match)return{match:!0,matchedChars:c.matchedChars};if(!c.partialMatch)throw new Error("Unsupported match result:\n".concat(JSON.stringify(c,null,2)));l=!0}}return l?{partialMatch:!0}:void 0;case"[]":for(var f,h=b(e.args);!(f=h()).done;){var g=f.value;if(t[0]===g)return 1===t.length?{match:!0,matchedChars:t}:n?{overflow:!0}:{match:!0,matchedChars:[g]}}return;default:throw new Error("Unsupported instruction tree: ".concat(e))}}var k=new RegExp("(\\||\\(\\?\\:|\\)|\\[|\\])"),F=/[\(\)\[\]\?\:\|]/,A=function(){function t(){C(this,t)}return P(t,[{key:"parse",value:function(t){if(this.context=[{or:!0,instructions:[]}],this.parsePattern(t),1!==this.context.length)throw new Error("Non-finalized contexts left when pattern parse ended");var e=this.context[0],n=e.branches,r=e.instructions;if(n)return[{op:"|",args:n.concat([r])}];if(0===r.length)throw new Error("Pattern is required");return r}},{key:"startContext",value:function(t){this.context.push(t)}},{key:"endContext",value:function(){this.context.pop()}},{key:"getContext",value:function(){return this.context[this.context.length-1]}},{key:"parsePattern",value:function(t){if(!t)throw new Error("Pattern is required");var e=t.match(k);if(e){var n=e[1],r=t.slice(0,e.index),a=t.slice(e.index+n.length);switch(n){case"(?:":r&&this.parsePattern(r),this.startContext({or:!0,instructions:[],branches:[]});break;case")":if(!this.getContext().or)throw new Error('")" operator must be preceded by "(?:" operator');if(r&&this.parsePattern(r),0===this.getContext().instructions.length)throw new Error('No instructions found after "|" operator in an "or" group');var i=this.getContext().branches;i.push(this.getContext().instructions),this.endContext(),this.getContext().instructions.push({op:"|",args:i});break;case"|":if(!this.getContext().or)throw new Error('"|" operator can only be used inside "or" groups');if(r&&this.parsePattern(r),!this.getContext().branches){if(1!==this.context.length)throw new Error('"branches" not found in an "or" group context');this.getContext().branches=[]}this.getContext().branches.push(this.getContext().instructions),this.getContext().instructions=[];break;case"[":r&&this.parsePattern(r),this.startContext({oneOfSet:!0});break;case"]":if(!this.getContext().oneOfSet)throw new Error('"]" operator must be preceded by "[" operator');this.endContext(),this.getContext().instructions.push({op:"[]",args:I(r)});break;default:throw new Error("Unknown operator: ".concat(n))}a&&this.parsePattern(a)}else{if(F.test(t))throw new Error("Illegal characters found in a pattern: ".concat(t));this.getContext().instructions=this.getContext().instructions.concat(t.split(""))}}}]),t}();function I(t){for(var e=[],n=0;n<t.length;){if("-"===t[n]){if(0===n||n===t.length-1)throw new Error("Couldn't parse a one-of set pattern: ".concat(t));for(var r=t[n-1].charCodeAt(0)+1,a=t[n+1].charCodeAt(0)-1,i=r;i<=a;)e.push(String.fromCharCode(i)),i++}else e.push(t[n]);n++}return e}var E=n(295619),T=n(962354);function O(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return D(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var R=h("9",15),M=/[- ]/,Z=function(){return/\[([^\[\]])*\]/g},$=function(){return/\d(?=[^,}][^,}])/g},U=new RegExp("["+E.uv+"]*\\$1["+E.uv+"]*(\\$\\d["+E.uv+"]*)*$"),W=function(){function t(e){e.state;var n=e.metadata;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.metadata=n,this.resetFormat()}var e,n,r;return e=t,(n=[{key:"resetFormat",value:function(){this.chosenFormat=void 0,this.template=void 0,this.nationalNumberTemplate=void 0,this.populatedNationalNumberTemplate=void 0,this.populatedNationalNumberTemplatePosition=-1}},{key:"reset",value:function(t,e){this.resetFormat(),t?(this.isNANP="1"===t.callingCode(),this.matchingFormats=t.formats(),e.nationalSignificantNumber&&this.narrowDownMatchingFormats(e)):(this.isNANP=void 0,this.matchingFormats=[])}},{key:"format",value:function(t,e){var n,r,a=this;if(n=e.nationalSignificantNumber,r=this.metadata,"IS_POSSIBLE"===(0,m.Z)(n,r))for(var i,o=O(this.matchingFormats);!(i=o()).done;){var l=i.value,u=v(e,l,{metadata:this.metadata,shouldTryNationalPrefixFormattingRule:function(t){return a.shouldTryNationalPrefixFormattingRule(t,{international:e.international,nationalPrefix:e.nationalPrefix})},getSeparatorAfterNationalPrefix:function(t){return a.getSeparatorAfterNationalPrefix(t)}});if(u)return this.resetFormat(),this.chosenFormat=l,this.setNationalNumberTemplate(u.replace(/\d/g,c),e),this.populatedNationalNumberTemplate=u,this.populatedNationalNumberTemplatePosition=this.template.lastIndexOf(c),u}return this.formatNationalNumberWithNextDigits(t,e)}},{key:"formatNationalNumberWithNextDigits",value:function(t,e){var n=this.chosenFormat,r=this.chooseFormat(e);if(r)return r===n?this.formatNextNationalNumberDigits(t):this.formatNextNationalNumberDigits(e.getNationalDigits())}},{key:"narrowDownMatchingFormats",value:function(t){var e=this,n=t.nationalSignificantNumber,r=t.nationalPrefix,a=t.international,i=n,o=i.length-3;o<0&&(o=0),this.matchingFormats=this.matchingFormats.filter((function(t){return e.formatSuits(t,a,r)&&e.formatMatches(t,i,o)})),this.chosenFormat&&-1===this.matchingFormats.indexOf(this.chosenFormat)&&this.resetFormat()}},{key:"formatSuits",value:function(t,e,n){return!(n&&!t.usesNationalPrefix()&&!t.nationalPrefixIsOptionalWhenFormattingInNationalFormat())&&!(!e&&!n&&t.nationalPrefixIsMandatoryWhenFormattingInNationalFormat())}},{key:"formatMatches",value:function(t,e,n){var r=t.leadingDigitsPatterns().length;if(0===r)return!0;n=Math.min(n,r-1);var a=t.leadingDigitsPatterns()[n];if(e.length<3)try{return void 0!==new S(a).match(e,{allowOverflow:!0})}catch(i){return console.error(i),!0}return new RegExp("^(".concat(a,")")).test(e)}},{key:"getFormatFormat",value:function(t,e){return e?t.internationalFormat():t.format()}},{key:"chooseFormat",value:function(t){for(var e,n=this,r=function(){var r=e.value;return n.chosenFormat===r?"break":U.test(n.getFormatFormat(r,t.international))?n.createTemplateForFormat(r,t)?(n.chosenFormat=r,"break"):(n.matchingFormats=n.matchingFormats.filter((function(t){return t!==r})),"continue"):"continue"},a=O(this.matchingFormats.slice());!(e=a()).done;){var i=r();if("break"===i)break}return this.chosenFormat||this.resetFormat(),this.chosenFormat}},{key:"createTemplateForFormat",value:function(t,e){if(!(t.pattern().indexOf("|")>=0)){var n=this.getTemplateForFormat(t,e);return n?(this.setNationalNumberTemplate(n,e),!0):void 0}}},{key:"getSeparatorAfterNationalPrefix",value:function(t){return this.isNANP||t&&t.nationalPrefixFormattingRule()&&M.test(t.nationalPrefixFormattingRule())?" ":""}},{key:"getInternationalPrefixBeforeCountryCallingCode",value:function(t,e){var n=t.IDDPrefix,r=t.missingPlus;return n?e&&!1===e.spacing?n:n+" ":r?"":"+"}},{key:"getTemplate",value:function(t){if(this.template){for(var e=-1,n=0,r=t.international?this.getInternationalPrefixBeforeCountryCallingCode(t,{spacing:!1}):"";n<r.length+t.getDigitsWithoutInternationalPrefix().length;)e=this.template.indexOf(c,e+1),n++;return g(this.template,e+1)}}},{key:"setNationalNumberTemplate",value:function(t,e){this.nationalNumberTemplate=t,this.populatedNationalNumberTemplate=t,this.populatedNationalNumberTemplatePosition=-1,e.international?this.template=this.getInternationalPrefixBeforeCountryCallingCode(e).replace(/[\d\+]/g,c)+h(c,e.callingCode.length)+" "+t:this.template=t}},{key:"getTemplateForFormat",value:function(t,e){var n=e.nationalSignificantNumber,r=e.international,a=e.nationalPrefix,i=e.complexPrefixBeforeNationalSignificantNumber,o=t.pattern();o=o.replace(Z(),"\\d").replace($(),"\\d");var l=R.match(o)[0];if(!(n.length>l.length)){var u=new RegExp("^"+o+"$"),s=n.replace(/\d/g,"9");u.test(s)&&(l=s);var f,g=this.getFormatFormat(t,r);if(this.shouldTryNationalPrefixFormattingRule(t,{international:r,nationalPrefix:a})){var m=g.replace(p.i,t.nationalPrefixFormattingRule());if((0,d.ZP)(t.nationalPrefixFormattingRule())===(a||"")+(0,d.ZP)("$1")&&(g=m,f=!0,a))for(var v=a.length;v>0;)g=g.replace(/\d/,c),v--}var y=l.replace(new RegExp(o),g).replace(new RegExp("9","g"),c);return f||(i?y=h(c,i.length)+" "+y:a&&(y=h(c,a.length)+this.getSeparatorAfterNationalPrefix(t)+y)),r&&(y=(0,T.Z)(y)),y}}},{key:"formatNextNationalNumberDigits",value:function(t){var e=function(t,e,n){for(var r,a=u(n.split(""));!(r=a()).done;){var i=r.value;if(t.slice(e+1).search(f)<0)return;e=t.search(f),t=t.replace(f,i)}return[t,e]}(this.populatedNationalNumberTemplate,this.populatedNationalNumberTemplatePosition,t);if(e)return this.populatedNationalNumberTemplate=e[0],this.populatedNationalNumberTemplatePosition=e[1],g(this.populatedNationalNumberTemplate,this.populatedNationalNumberTemplatePosition+1);this.resetFormat()}},{key:"shouldTryNationalPrefixFormattingRule",value:function(t,e){var n=e.international,r=e.nationalPrefix;if(t.nationalPrefixFormattingRule()){var a=t.usesNationalPrefix();if(a&&r||!a&&!n)return!0}}}])&&j(e.prototype,n),r&&j(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),B=n(513661),_=n(399471),L=n(5227),q=n(113633);function J(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,a,i=[],o=!0,l=!1;try{for(n=n.call(t);!(o=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(u){l=!0,a=u}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return V(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return V(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var G="["+E.uv+E.xc+"]+",H=new RegExp("^"+G+"$","i"),K="(?:["+E.xy+"]["+E.uv+E.xc+"]*|["+E.uv+E.xc+"]+)",Q=new RegExp("[^"+E.uv+E.xc+"]+.*$"),X=/[^\d\[\]]/,Y=function(){function t(e){var n=e.defaultCountry,r=e.defaultCallingCode,a=e.metadata,i=e.onNationalSignificantNumberChange;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.defaultCountry=n,this.defaultCallingCode=r,this.metadata=a,this.onNationalSignificantNumberChange=i}var e,n,r;return e=t,(n=[{key:"input",value:function(t,e){var n,r=function(t){var e=J(function(t){var e=function(t){var e,n=t.search(K);if(!(n<0))return"+"===(t=t.slice(n))[0]&&(e=!0,t=t.slice("+".length)),t=t.replace(Q,""),e&&(t="+"+t),t}(t)||"";return"+"===e[0]?[e.slice("+".length),!0]:[e]}(t),2),n=e[0],r=e[1];return H.test(n)||(n=""),[n,r]}(t),a=J(r,2),i=a[0],o=a[1],l=(0,d.ZP)(i);return o&&(e.digits||(e.startInternationalNumber(),l||(n=!0))),l&&this.inputDigits(l,e),{digits:l,justLeadingPlus:n}}},{key:"inputDigits",value:function(t,e){var n=e.digits,r=n.length<3&&n.length+t.length>=3;if(e.appendDigits(t),r&&this.extractIddPrefix(e),this.isWaitingForCountryCallingCode(e)){if(!this.extractCountryCallingCode(e))return}else e.appendNationalSignificantNumberDigits(t);e.international||this.hasExtractedNationalSignificantNumber||this.extractNationalSignificantNumber(e.getNationalDigits(),(function(t){return e.update(t)}))}},{key:"isWaitingForCountryCallingCode",value:function(t){var e=t.international,n=t.callingCode;return e&&!n}},{key:"extractCountryCallingCode",value:function(t){var e=(0,B.Z)("+"+t.getDigitsWithoutInternationalPrefix(),this.defaultCountry,this.defaultCallingCode,this.metadata.metadata),n=e.countryCallingCode,r=e.number;if(n)return t.setCallingCode(n),t.update({nationalSignificantNumber:r}),!0}},{key:"reset",value:function(t){if(t){this.hasSelectedNumberingPlan=!0;var e=t._nationalPrefixForParsing();this.couldPossiblyExtractAnotherNationalSignificantNumber=e&&X.test(e)}else this.hasSelectedNumberingPlan=void 0,this.couldPossiblyExtractAnotherNationalSignificantNumber=void 0}},{key:"extractNationalSignificantNumber",value:function(t,e){if(this.hasSelectedNumberingPlan){var n=(0,L.Z)(t,this.metadata),r=n.nationalPrefix,a=n.nationalNumber,i=n.carrierCode;if(a!==t)return this.onExtractedNationalNumber(r,i,a,t,e),!0}}},{key:"extractAnotherNationalSignificantNumber",value:function(t,e,n){if(!this.hasExtractedNationalSignificantNumber)return this.extractNationalSignificantNumber(t,n);if(this.couldPossiblyExtractAnotherNationalSignificantNumber){var r=(0,L.Z)(t,this.metadata),a=r.nationalPrefix,i=r.nationalNumber,o=r.carrierCode;if(i!==e)return this.onExtractedNationalNumber(a,o,i,t,n),!0}}},{key:"onExtractedNationalNumber",value:function(t,e,n,r,a){var i,o,l=r.lastIndexOf(n);if(l>=0&&l===r.length-n.length){o=!0;var u=r.slice(0,l);u!==t&&(i=u)}a({nationalPrefix:t,carrierCode:e,nationalSignificantNumber:n,nationalSignificantNumberMatchesInput:o,complexPrefixBeforeNationalSignificantNumber:i}),this.hasExtractedNationalSignificantNumber=!0,this.onNationalSignificantNumberChange()}},{key:"reExtractNationalSignificantNumber",value:function(t){return!!this.extractAnotherNationalSignificantNumber(t.getNationalDigits(),t.nationalSignificantNumber,(function(e){return t.update(e)}))||(this.extractIddPrefix(t)||this.fixMissingPlus(t)?(this.extractCallingCodeAndNationalSignificantNumber(t),!0):void 0)}},{key:"extractIddPrefix",value:function(t){var e=t.international,n=t.IDDPrefix,r=t.digits;if(t.nationalSignificantNumber,!e&&!n){var a=(0,q.Z)(r,this.defaultCountry,this.defaultCallingCode,this.metadata.metadata);return void 0!==a&&a!==r?(t.update({IDDPrefix:r.slice(0,r.length-a.length)}),this.startInternationalNumber(t),!0):void 0}}},{key:"fixMissingPlus",value:function(t){if(!t.international){var e=(0,_.Z)(t.digits,this.defaultCountry,this.defaultCallingCode,this.metadata.metadata),n=e.countryCallingCode;if(e.number,n)return t.update({missingPlus:!0}),this.startInternationalNumber(t),!0}}},{key:"startInternationalNumber",value:function(t){t.startInternationalNumber(),t.nationalSignificantNumber&&(t.resetNationalSignificantNumber(),this.onNationalSignificantNumberChange(),this.hasExtractedNationalSignificantNumber=void 0)}},{key:"extractCallingCodeAndNationalSignificantNumber",value:function(t){this.extractCountryCallingCode(t)&&this.extractNationalSignificantNumber(t.getNationalDigits(),(function(e){return t.update(e)}))}}])&&z(e.prototype,n),r&&z(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();var tt=n(792691);function et(t){return et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},et(t)}function nt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,a,i=[],o=!0,l=!1;try{for(n=n.call(t);!(o=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(u){l=!0,a=u}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return rt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return rt(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function rt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function at(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var it=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.metadata=new a.ZP(n);var r=nt(this.getCountryAndCallingCode(e),2),i=r[0],o=r[1];this.defaultCountry=i,this.defaultCallingCode=o,this.reset()}var e,n,r;return e=t,(n=[{key:"getCountryAndCallingCode",value:function(t){var e,n;return t&&("object"===et(t)?(e=t.defaultCountry,n=t.defaultCallingCode):e=t),e&&!this.metadata.hasCountry(e)&&(e=void 0),[e,n]}},{key:"input",value:function(t){var e=this.parser.input(t,this.state),n=e.digits;if(e.justLeadingPlus)this.formattedOutput="+";else if(n){var r;if(this.determineTheCountryIfNeeded(),this.state.nationalSignificantNumber&&this.formatter.narrowDownMatchingFormats(this.state),this.metadata.hasSelectedNumberingPlan()&&(r=this.formatter.format(n,this.state)),void 0===r&&this.parser.reExtractNationalSignificantNumber(this.state)){this.determineTheCountryIfNeeded();var a=this.state.getNationalDigits();a&&(r=this.formatter.format(a,this.state))}this.formattedOutput=r?this.getFullNumber(r):this.getNonFormattedNumber()}return this.formattedOutput}},{key:"reset",value:function(){var t=this;return this.state=new l({onCountryChange:function(e){t.country=e},onCallingCodeChange:function(e,n){t.metadata.selectNumberingPlan(e,n),t.formatter.reset(t.metadata.numberingPlan,t.state),t.parser.reset(t.metadata.numberingPlan)}}),this.formatter=new W({state:this.state,metadata:this.metadata}),this.parser=new Y({defaultCountry:this.defaultCountry,defaultCallingCode:this.defaultCallingCode,metadata:this.metadata,state:this.state,onNationalSignificantNumberChange:function(){t.determineTheCountryIfNeeded(),t.formatter.reset(t.metadata.numberingPlan,t.state)}}),this.state.reset(this.defaultCountry,this.defaultCallingCode),this.formattedOutput="",this}},{key:"isInternational",value:function(){return this.state.international}},{key:"getCallingCode",value:function(){if(this.isInternational())return this.state.callingCode}},{key:"getCountryCallingCode",value:function(){return this.getCallingCode()}},{key:"getCountry",value:function(){if(this.state.digits)return this._getCountry()}},{key:"_getCountry",value:function(){var t=this.state.country;return t}},{key:"determineTheCountryIfNeeded",value:function(){this.state.country&&!this.isCountryCallingCodeAmbiguous()||this.determineTheCountry()}},{key:"getFullNumber",value:function(t){var e=this;if(this.isInternational()){var n=function(t){return e.formatter.getInternationalPrefixBeforeCountryCallingCode(e.state,{spacing:!!t})+t},r=this.state.callingCode;return n(r?t?"".concat(r," ").concat(t):r:"".concat(this.state.getDigitsWithoutInternationalPrefix()))}return t}},{key:"getNonFormattedNationalNumberWithPrefix",value:function(){var t=this.state,e=t.nationalSignificantNumber,n=t.complexPrefixBeforeNationalSignificantNumber,r=t.nationalPrefix,a=e,i=n||r;return i&&(a=i+a),a}},{key:"getNonFormattedNumber",value:function(){var t=this.state.nationalSignificantNumberMatchesInput;return this.getFullNumber(t?this.getNonFormattedNationalNumberWithPrefix():this.state.getNationalDigits())}},{key:"getNonFormattedTemplate",value:function(){var t=this.getNonFormattedNumber();if(t)return t.replace(/[\+\d]/g,c)}},{key:"isCountryCallingCodeAmbiguous",value:function(){var t=this.state.callingCode,e=this.metadata.getCountryCodesForCallingCode(t);return e&&e.length>1}},{key:"determineTheCountry",value:function(){this.state.setCountry((0,tt.Z)(this.isInternational()?this.state.callingCode:this.defaultCallingCode,this.state.nationalSignificantNumber,this.metadata))}},{key:"getNumberValue",value:function(){var t=this.state,e=t.digits,n=t.callingCode,r=t.country,a=t.nationalSignificantNumber;if(e)return this.isInternational()?n?"+"+n+a:"+"+e:r||n?"+"+(r?this.metadata.countryCallingCode():n)+a:void 0}},{key:"getNumber",value:function(){var t=this.state,e=t.nationalSignificantNumber,n=t.carrierCode,r=t.callingCode,a=this._getCountry();if(e&&(a||r)){var o=new i.Z(a||r,e,this.metadata.metadata);return n&&(o.carrierCode=n),o}}},{key:"isPossible",value:function(){var t=this.getNumber();return!!t&&t.isPossible()}},{key:"isValid",value:function(){var t=this.getNumber();return!!t&&t.isValid()}},{key:"getNationalNumber",value:function(){return this.state.nationalSignificantNumber}},{key:"getChars",value:function(){return(this.state.international?"+":"")+this.state.digits}},{key:"getTemplate",value:function(){return this.formatter.getTemplate(this.state)||this.getNonFormattedTemplate()||""}}])&&at(e.prototype,n),r&&at(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function ot(t){return it.call(this,t,r.Z)}ot.prototype=Object.create(it.prototype,{}),ot.prototype.constructor=ot}}]);
//# sourceMappingURL=84748-92992b071e2f4c1467d9.js.map