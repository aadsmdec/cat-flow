montageDefine("c5bcf1f","lib/trie",{dependencies:[],factory:function(e,t,n){function r(e){var t=Object.keys(e),n={value:void 0,children:{}},i={};t.forEach(function(t){if(0===t.length)n.value=e[t];else{var r=t[0];i[r]||(i[r]={});var o=t.slice(1);i[r][o]=e[t]}});var o=Object.keys(i);return o.forEach(function(e){n.children[e]=r(i[e])}),n}n.exports=r}});