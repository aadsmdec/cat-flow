montageDefine("559c66f","lib/ProxyHandler",{dependencies:["./"],factory:function(e,t,n){n.exports=i;var i=function(e){this._cbs=e||{}},r=e("./").EVENTS;Object.keys(r).forEach(function(e){if(0===r[e])e="on"+e,i.prototype[e]=function(){this._cbs[e]&&this._cbs[e]()};else if(1===r[e])e="on"+e,i.prototype[e]=function(t){this._cbs[e]&&this._cbs[e](t)};else{if(2!==r[e])throw Error("wrong number of arguments");e="on"+e,i.prototype[e]=function(t,n){this._cbs[e]&&this._cbs[e](t,n)}}})}});