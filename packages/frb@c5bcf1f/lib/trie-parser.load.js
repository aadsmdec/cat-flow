montageDefine("c5bcf1f","lib/trie-parser",{dependencies:[],factory:function(e,t,n){function r(e){var t={};return Object.keys(e.children).forEach(function(n){t[n]=r(e.children[n])}),function(n,r){return r=r||i,function(i,o){return t[i]?t[i](n,function(e){return r(e)(i,o)}):n(e.value,r)(i,o)}}}function i(e){return e}n.exports=r}});