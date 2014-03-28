montageDefine("1acc9e0","index",{dependencies:["domelementtype"],factory:function(e,t,n){function i(e,t,n){"object"==typeof e?(n=t,t=e,e=null):"function"==typeof t&&(n=t,t=a),this._callback=e,this._options=t||a,this._elementCB=n,this.dom=[],this._done=!1,this._tagStack=[]}var r=e("domelementtype"),a={ignoreWhitespace:!1};i.prototype.onreset=function(){i.call(this,this._callback,this._options,this._elementCB)},i.prototype.onend=function(){this._done||(this._done=!0,this._handleCallback(null))},i.prototype._handleCallback=i.prototype.onerror=function(e){if("function"==typeof this._callback)this._callback(e,this.dom);else if(e)throw e},i.prototype.onclosetag=function(){var e=this._tagStack.pop();this._elementCB&&this._elementCB(e)},i.prototype._addDomElement=function(e){var t=this._tagStack[this._tagStack.length-1];t?t.children.push(e):this.dom.push(e)},i.prototype.onopentag=function(e,t){var n=this._tagStack[this._tagStack.length-1],i={type:"script"===e?r.Script:"style"===e?r.Style:r.Tag,name:e,attribs:t,children:[],prev:null,next:null,parent:n||null};if(n){for(var a=n.children.length;a>0;)if(r.isTag(n.children[--a])){i.prev=n.children[a],n.children[a].next=i;break}n.children.push(i)}else this.dom.push(i);this._tagStack.push(i)},i.prototype.ontext=function(e){if(!this._options.ignoreWhitespace||""!==e.trim()){if(this._tagStack.length){var t;if((t=this._tagStack[this._tagStack.length-1])&&(t=t.children[t.children.length-1])&&t.type===r.Text)return t.data+=e,void 0}else if(this.dom.length&&this.dom[this.dom.length-1].type===r.Text)return this.dom[this.dom.length-1].data+=e,void 0;this._addDomElement({data:e,type:r.Text})}},i.prototype.oncomment=function(e){var t=this._tagStack[this._tagStack.length-1];if(t&&t.type===r.Comment)return t.data+=e,void 0;var n={data:e,type:r.Comment};this._addDomElement(n),this._tagStack.push(n)},i.prototype.oncdatastart=function(){var e={children:[{data:"",type:r.Text}],type:r.CDATA};this._addDomElement(e),this._tagStack.push(e)},i.prototype.oncommentend=i.prototype.oncdataend=function(){this._tagStack.pop()},i.prototype.onprocessinginstruction=function(e,t){this._addDomElement({name:e,data:t,type:r.Directive})},n.exports=i}});