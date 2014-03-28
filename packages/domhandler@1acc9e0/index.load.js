montageDefine("1acc9e0","index",{dependencies:["domelementtype"],factory:function(e,t,n){function r(e,t,n){"object"==typeof e?(n=t,t=e,e=null):"function"==typeof t&&(n=t,t=a),this._callback=e,this._options=t||a,this._elementCB=n,this.dom=[],this._done=!1,this._tagStack=[]}var i=e("domelementtype"),a={ignoreWhitespace:!1};r.prototype.onreset=function(){r.call(this,this._callback,this._options,this._elementCB)},r.prototype.onend=function(){this._done||(this._done=!0,this._handleCallback(null))},r.prototype._handleCallback=r.prototype.onerror=function(e){if("function"==typeof this._callback)this._callback(e,this.dom);else if(e)throw e},r.prototype.onclosetag=function(){var e=this._tagStack.pop();this._elementCB&&this._elementCB(e)},r.prototype._addDomElement=function(e){var t=this._tagStack[this._tagStack.length-1];t?t.children.push(e):this.dom.push(e)},r.prototype.onopentag=function(e,t){var n=this._tagStack[this._tagStack.length-1],r={type:"script"===e?i.Script:"style"===e?i.Style:i.Tag,name:e,attribs:t,children:[],prev:null,next:null,parent:n||null};if(n){for(var a=n.children.length;a>0;)if(i.isTag(n.children[--a])){r.prev=n.children[a],n.children[a].next=r;break}n.children.push(r)}else this.dom.push(r);this._tagStack.push(r)},r.prototype.ontext=function(e){if(!this._options.ignoreWhitespace||""!==e.trim()){if(this._tagStack.length){var t;if((t=this._tagStack[this._tagStack.length-1])&&(t=t.children[t.children.length-1])&&t.type===i.Text)return t.data+=e,void 0}else if(this.dom.length&&this.dom[this.dom.length-1].type===i.Text)return this.dom[this.dom.length-1].data+=e,void 0;this._addDomElement({data:e,type:i.Text})}},r.prototype.oncomment=function(e){var t=this._tagStack[this._tagStack.length-1];if(t&&t.type===i.Comment)return t.data+=e,void 0;var n={data:e,type:i.Comment};this._addDomElement(n),this._tagStack.push(n)},r.prototype.oncdatastart=function(){var e={children:[{data:"",type:i.Text}],type:i.CDATA};this._addDomElement(e),this._tagStack.push(e)},r.prototype.oncommentend=r.prototype.oncdataend=function(){this._tagStack.pop()},r.prototype.onprocessinginstruction=function(e,t){this._addDomElement({name:e,data:t,type:i.Directive})},n.exports=r}});