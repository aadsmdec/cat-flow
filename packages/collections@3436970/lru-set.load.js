montageDefine("3436970","lru-set",{dependencies:["./shim","./set","./generic-collection","./generic-set","./listen/property-changes","./listen/range-changes","lru-set"],factory:function(e,t,n){"use strict";function i(e,t,n,a,o){return this instanceof i?(t=t||1/0,n=n||Object.equals,a=a||Object.hash,o=o||Function.noop,this.store=new r(void 0,n,a),this.contentEquals=n,this.contentHash=a,this.getDefault=o,this.capacity=t,this.length=0,this.addEach(e),void 0):new i(e,t,n,a,o)}e("./shim");var r=e("./set"),a=e("./generic-collection"),o=e("./generic-set"),s=e("./listen/property-changes"),l=e("./listen/range-changes");n.exports=i,i.LruSet=i,Object.addEach(i.prototype,a.prototype),Object.addEach(i.prototype,o.prototype),Object.addEach(i.prototype,s.prototype),Object.addEach(i.prototype,l.prototype),i.prototype.constructClone=function(e){return new this.constructor(e,this.capacity,this.contentEquals,this.contentHash,this.getDefault)},i.prototype.has=function(e){return this.store.has(e)},i.prototype.get=function(e,t){if(t)throw Error("LruSet#get does not support second argument: equals");return e=this.store.get(e),void 0!==e?(this.store["delete"](e),this.store.add(e)):e=this.getDefault(e),e},i.prototype.add=function(e){var t,n=this.store.has(e),i=[],r=[];return n?(this.store["delete"](e),this.store.add(e)):this.capacity>0&&(i.push(e),this.length>=this.capacity&&(t=this.store.order.head.next,r.push(t.value)),this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange(i,r,0),this.store.add(e),r.length>0&&this.store["delete"](t.value),this.length=this.length+i.length-r.length,this.dispatchesRangeChanges&&this.dispatchRangeChange(i,r,0)),i.length!==r.length},i.prototype["delete"]=function(e,t){if(t)throw Error("LruSet#delete does not support second argument: equals");var n=this.store.has(e);return n&&(this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([],[e],0),this.store["delete"](e),this.length--,this.dispatchesRangeChanges&&this.dispatchRangeChange([],[e],0)),n},i.prototype.one=function(){return this.length>0?this.store.one():void 0},i.prototype.clear=function(){this.store.clear(),this.length=0},i.prototype.reduce=function(e,t){var n=arguments[2],i=this.store,r=0;return i.reduce(function(t,i){return e.call(n,t,i,r++,this)},t,this)},i.prototype.reduceRight=function(e,t){var n=arguments[2],i=this.store,r=this.length-1;return i.reduceRight(function(t,i){return e.call(n,t,i,r--,this)},t,this)},i.prototype.iterate=function(){return this.store.iterate()}}});