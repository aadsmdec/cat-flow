montageDefine("559c66f","lib/Stream",{dependencies:["./WritableStream.js","util","../"],factory:function(e,t,n){function i(e){a.call(this,new r(this),e)}function r(e){this.scope=e}n.exports=i;var a=e("./WritableStream.js");e("util").inherits(i,a),i.prototype.readable=!0;var o=e("../").EVENTS;Object.keys(o).forEach(function(e){if(0===o[e])r.prototype["on"+e]=function(){this.scope.emit(e)};else if(1===o[e])r.prototype["on"+e]=function(t){this.scope.emit(e,t)};else{if(2!==o[e])throw Error("wrong number of arguments!");r.prototype["on"+e]=function(t,n){this.scope.emit(e,t,n)}}})}});