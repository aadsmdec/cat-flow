montageDefine("3436970","sorted-array-set",{dependencies:["./shim","./sorted-array","./generic-set","./listen/property-changes"],factory:function(e,t,n){"use strict";function i(e,t,n,a){return this instanceof i?(r.call(this,e,t,n,a),void 0):new i(e,t,n,a)}n.exports=i,e("./shim");var r=e("./sorted-array"),a=e("./generic-set"),o=e("./listen/property-changes");i.SortedArraySet=i,i.prototype=Object.create(r.prototype),i.prototype.constructor=i,Object.addEach(i.prototype,a.prototype),Object.addEach(i.prototype,o.prototype),i.prototype.isSorted=!0,i.prototype.add=function(e){return this.has(e)?!1:(r.prototype.add.call(this,e),!0)},i.prototype.reduce=function(e,t){var n=this,i=arguments[2];return this.array.reduce(function(t,r,a){return e.call(i,t,r,a,n)},t)},i.prototype.reduceRight=function(e,t){var n=this,i=arguments[2];return this.array.reduceRight(function(t,r,a){return e.call(i,t,r,a,n)},t)}}});