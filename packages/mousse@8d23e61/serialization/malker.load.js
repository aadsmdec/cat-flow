montageDefine("8d23e61","serialization/malker",{dependencies:[],factory:function(e,t){(function(e){function t(e){this._visitHandler=e,this._enteredObjects={}}Object.defineProperties(t.prototype,{_visitHandler:{value:null,writable:!0},_enteredObjects:{value:null,writable:!0},_isObjectEntered:{value:function(e){return Object.hash(e)in this._enteredObjects}},_markObjectAsEntered:{value:function(e){this._enteredObjects[Object.hash(e)]=!0}},visit:{value:function(e,t){this._visitValue(e,t)},enumerable:!0},_getTypeOf:{value:function(e){return Array.isArray(e)?"array":RegExp.isRegExp(e)?"regexp":null===e?"null":"object"==typeof e||"function"==typeof e?this._getObjectType(e):typeof e}},_getObjectType:{value:function(e){var t,n=this._visitHandler;return"function"==typeof n.getTypeOf&&(t=n.getTypeOf(e)),t===void 0?typeof e:t}},_visitValue:{value:function(e,t){var n=this._getTypeOf(e);"object"===n?this._visitObject(e,t):"array"===n?this._visitArray(e,t):"regexp"===n?this._visitRegExp(e,t):"number"===n?this._visitNumber(e,t):"string"===n?this._visitString(e,t):"boolean"===n?this._visitBoolean(e,t):"null"===n?this._visitNull(t):"undefined"===n?this._visitUndefined(t):this._visitCustomType(n,e,t)}},_visitCustomType:{value:function(e,t,n){this._callVisitorMethod("visit"+e,t,n)}},_enterCustomObject:{value:function(e,t,n){this._callVisitorMethod("enter"+e,t,n),this._callVisitorMethod("exit"+e,t,n)}},_visitObject:{value:function(e,t){var n;this._isObjectEntered(e)?this._callVisitorMethod("visitObject",e,t):(n=this._callVisitorMethod("willEnterObject",e,t),n!==!1&&(this._markObjectAsEntered(e),this._enterObject(e,t)))}},_enterObject:{value:function(e,t){var n,r=Object.keys(e);this._callVisitorMethod("enterObject",e,t);for(var i=0,o=r.length;o>i;i++)n=r[i],this._visitValue(e[n],n);this._callVisitorMethod("exitObject",e,t)}},_visitArray:{value:function(e,t){var n;this._isObjectEntered(e)?this._callVisitorMethod("visitArray",e,t):(n=this._callVisitorMethod("willEnterArray",e,t),n!==!1&&(this._markObjectAsEntered(e),this._enterArray(e,t)))}},_enterArray:{value:function(e,t){this._callVisitorMethod("enterArray",e,t);for(var n=0,r=e.length;r>n;n++)this._visitValue(e[n],""+n);this._callVisitorMethod("exitArray",e,t)}},_visitRegExp:{value:function(e,t){this._callVisitorMethod("visitRegExp",e,t)}},_visitString:{value:function(e,t){this._callVisitorMethod("visitString",e,t)}},_visitNumber:{value:function(e,t){this._callVisitorMethod("visitNumber",e,t)}},_visitBoolean:{value:function(e,t){this._callVisitorMethod("visitBoolean",e,t)}},_visitNull:{value:function(e){this._callVisitorMethod("visitNull",e)}},_visitUndefined:{value:function(e){this._callVisitorMethod("visitUndefined",e)}},_callVisitorMethod:{value:function(e){var t,n=this._visitHandler;return"function"==typeof n[e]?(t=Array.prototype.slice.call(arguments,1),t.unshift(this),n[e].apply(n,t)):void 0}}}),Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),RegExp.isRegExp||(RegExp.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}),e.Malker=t,e.visit=function(e,n){var r=new t(n);r.visit(e)}})(t)}});