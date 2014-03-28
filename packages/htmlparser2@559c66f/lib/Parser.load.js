montageDefine("559c66f","lib/Parser",{dependencies:["./Tokenizer.js","util","events"],factory:function(e,t,n){function r(e,t){t||(t=o),e||(e=a),this._options=t,this._cbs=e,this._tagname="",this._attribname="",this._attribs=null,this._stack=[],this._done=!1,this._tokenizer=new i(t,this)}var i=e("./Tokenizer.js"),o={xmlMode:!1,lowerCaseAttributeNames:!1,lowerCaseTags:!1},a={},s={input:!0,option:!0,optgroup:!0,select:!0,button:!0,datalist:!0,textarea:!0},l={tr:{tr:!0,th:!0,td:!0},th:{th:!0},td:{thead:!0,td:!0},body:{head:!0,link:!0,script:!0},li:{li:!0},p:{p:!0},select:s,input:s,output:s,button:s,datalist:s,textarea:s,option:{option:!0},optgroup:{optgroup:!0}},u={__proto__:null,area:!0,base:!0,basefont:!0,br:!0,col:!0,frame:!0,hr:!0,img:!0,input:!0,isindex:!0,link:!0,meta:!0,param:!0,embed:!0};e("util").inherits(r,e("events").EventEmitter),r.prototype.ontext=function(e){this._cbs.ontext&&this._cbs.ontext(e)},r.prototype.onopentagname=function(e){if(this._options.lowerCaseTags&&(e=e.toLowerCase()),this._tagname=e,!this._options.xmlMode&&e in l)for(var t;(t=this._stack[this._stack.length-1])in l[e];this.onclosetag(t));!this._options.xmlMode&&e in u||this._stack.push(e),this._cbs.onopentagname&&this._cbs.onopentagname(e),this._cbs.onopentag&&(this._attribs={})},r.prototype.onopentagend=function(){""!==this._attribname&&this.onattribvalue(""),this._attribs&&(this._cbs.onopentag&&this._cbs.onopentag(this._tagname,this._attribs),this._attribs=null),!this._options.xmlMode&&this._cbs.onclosetag&&this._tagname in u&&this._cbs.onclosetag(this._tagname),this._tagname=""},r.prototype.onclosetag=function(e){if(this._options.lowerCaseTags&&(e=e.toLowerCase()),this._stack.length&&(!(e in u)||this._options.xmlMode)){var t=this._stack.lastIndexOf(e);if(-1!==t)if(this._cbs.onclosetag)for(t=this._stack.length-t;t--;)this._cbs.onclosetag(this._stack.pop());else this._stack.splice(t)}},r.prototype.onselfclosingtag=function(){var e=this._tagname;this.onopentagend(),this._stack[this._stack.length-1]===e&&(this._cbs.onclosetag?this._cbs.onclosetag(this._stack.pop()):this._stack.pop())},r.prototype.onattribname=function(e){""!==this._attribname&&this.onattribvalue(""),this._options.lowerCaseAttributeNames&&(e=e.toLowerCase()),this._attribname=e},r.prototype.onattribvalue=function(e){this._cbs.onattribute&&this._cbs.onattribute(this._attribname,e),this._attribs&&(this._attribs[this._attribname]=e),this._attribname=""},r.prototype.ondeclaration=function(e){if(this._cbs.onprocessinginstruction){var t=e.split(/\s|\//,1)[0];this._options.lowerCaseTags&&(t=t.toLowerCase()),this._cbs.onprocessinginstruction("!"+t,"!"+e)}},r.prototype.onprocessinginstruction=function(e){if(this._cbs.onprocessinginstruction){var t=e.split(/\s|\//,1)[0];this._options.lowerCaseTags&&(t=t.toLowerCase()),this._cbs.onprocessinginstruction("?"+t,"?"+e)}},r.prototype.oncomment=function(e){this._cbs.oncomment&&this._cbs.oncomment(e),this._cbs.oncommentend&&this._cbs.oncommentend()},r.prototype.oncdata=function(e){this._cbs.oncdatastart&&this._cbs.oncdatastart(),this._cbs.ontext&&this._cbs.ontext(e),this._cbs.oncdataend&&this._cbs.oncdataend()},r.prototype.onerror=function(e){this._cbs.onerror&&this._cbs.onerror(e)},r.prototype.onend=function(){if(this._cbs.onclosetag)for(var e=this._stack.length;e>0;this._cbs.onclosetag(this._stack[--e]));this._cbs.onend&&this._cbs.onend()},r.prototype.reset=function(){this._cbs.onreset&&this._cbs.onreset(),this._tokenizer.reset(),this._tagname="",this._attribname="",this._attribs=null,this._stack=[],this._done=!1},r.prototype.parseComplete=function(e){this.reset(),this.end(e)},r.prototype.write=function(e){this._done&&this.onerror(Error(".write() after done!")),this._tokenizer.write(e)},r.prototype.end=function(e){this._done&&this.onerror(Error(".end() after done!")),this._tokenizer.end(e),this._done=!0},r.prototype.parseChunk=r.prototype.write,r.prototype.done=r.prototype.end,n.exports=r}});