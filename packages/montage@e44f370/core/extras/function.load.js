montageDefine("e44f370","core/extras/function",{dependencies:["./object"],factory:function(e){e("./object"),Object.defineProperty(Function,"identity",{value:function(e){return e},writable:!0,configurable:!0}),Object.defineProperty(Function,"noop",{value:function(){},writable:!0,configurable:!0}),Object.defineProperty(Function,"by",{value:function(e,t){t=t||Object.compare,e=e||Function.identity;var n=function(n,r){return t(e(n),e(r))};return n.compare=t,n.by=e,n},writable:!0,configurable:!0})}});