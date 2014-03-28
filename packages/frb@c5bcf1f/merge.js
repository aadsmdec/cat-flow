"use strict";function graphOt(e,t){for(var n,r=(t.length+1)*(e.length+1),i=Array(r),o=Array(t.length+1),a=Array(t.length+1),s=0;e.length+1>s;s++){for(var l=0;t.length+1>l;l++){var u,c;if(0===s&&0===l)u=" ",c=0;else if(0===s)u="insert",c=l;else if(0===l)u="delete",c=s;else if(e[s-1]===t[l-1])u="retain",c=a[l-1];else{var h=o[l-1],d=a[l];h>d?(u="delete",c=d+1):(u="insert",c=h+1)}i[s+l*(e.length+1)]=u,o[l]=c}n=o,o=a,a=n}return{edges:i,cost:a[t.length],source:t,target:e}}function traceOt(e){for(var t,n,r=[],i=e.edges,o=t=e.target.length,a=e.source.length;t||a;){var s=i[t+a*(o+1)];if("delete"===s){if(n&&"delete"===n[0])n[1]++;else{var l=["delete",1];n=l,r.push(l)}t--}else if("insert"===s){if(n&&"insert"===n[0])n[1]++;else{var l=["insert",1];n=l,r.push(l)}a--}else if("retain"===s){var l=["retain",1];n&&"retain"===n[0]?n[1]++:(n=l,r.push(l)),t--,a--}}return r.reverse(),r}function ot(e,t){return traceOt(graphOt(e,t))}function diff(e,t){for(var n=ot(e,t),r=[],i=0,o=0,a=0;n.length>a;){var s=n[a++];if("insert"===s[0])r.push([o,0,t.slice(o,o+s[1])]),o+=s[1];else if("delete"===s[0])if(n.length>a&&"insert"===n[a][0]){var l=n[a++];r.push([o,s[1],t.slice(o,o+l[1])]),i+=s[1],o+=l[1]}else r.push([o,s[1]]),i+=s[1];else"retain"==s[0]&&(i+=s[1],o+=s[1])}return r}function apply(e,t){for(var n=0;t.length>n;n++)e.swap.apply(e,t[n])}function merge(e,t){apply(e,diff(e,t))}require("collections/shim"),exports.graphOt=graphOt,exports.traceOt=traceOt,exports.ot=ot,exports.diff=diff,exports.apply=apply,exports.merge=merge;