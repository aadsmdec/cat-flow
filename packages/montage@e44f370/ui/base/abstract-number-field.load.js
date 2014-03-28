montageDefine("e44f370","ui/base/abstract-number-field",{dependencies:["montage","ui/base/abstract-control","composer/key-composer","collections/dict"],factory:function(e,t){var n=(e("montage").Montage,e("ui/base/abstract-control").AbstractControl),r=e("composer/key-composer").KeyComposer;e("collections/dict");var i=t.AbstractNumberField=n.specialize({constructor:{value:function i(){if(this.constructor===i)throw Error("AbstractNumberField cannot be instantiated.");n.constructor.call(this),this._propertyNamesUsed={},this.defineBinding("classList.has('montage--disabled')",{"<-":"!enabled"})}},enterDocument:{value:function(e){if(e){var t=this._propertyNamesUsed;t.min||(this.min=this.element.getAttribute("min")||this._min),t.max||(this.max=this.element.getAttribute("max")||this._max),t.step||(this.step=this.element.getAttribute("step")||this._step),t.value||(this.value=this.element.getAttribute("value")||this._value),delete this._propertyNamesUsed,this._numberFieldTextFieldComponent.addEventListener("action",this,!1),this._numberFieldMinusComponent.addEventListener("action",this,!1),this._numberFieldPlusComponent.addEventListener("action",this,!1),this._numberFieldTextFieldComponent.delegate=this,this.element.addEventListener("mousedown",this,!1),this.element.tabIndex="-1",this._upKeyComposer=r.createKey(this,"up","increase"),this._downKeyComposer=r.createKey(this,"down","decrease"),this._rightKeyComposer=r.createKey(this,"right","increase"),this._leftKeyComposer=r.createKey(this,"left","decrease")}}},textFieldShouldBeginEditing:{value:function(){return this.enabled}},textFieldDidChange:{value:function(){}},textFieldDidEndEditing:{value:function(){this.value=this._numberFieldTextFieldComponent.value}},textFieldShouldAcceptValue:{value:function(){return this._activeValueChange===!0?!0:void 0}},prepareForActivationEvents:{value:function(){this._upKeyComposer.addEventListener("keyPress",this,!1),this._downKeyComposer.addEventListener("keyPress",this,!1),this._leftKeyComposer.addEventListener("keyPress",this,!1),this._rightKeyComposer.addEventListener("keyPress",this,!1)}},draw:{value:function(){this.element.setAttribute("aria-valuemax",this.max),this.element.setAttribute("aria-valuemin",this.min),this.element.setAttribute("aria-valuenow",this.value)}},acceptsActiveTarget:{value:!0},handleMousedown:{value:function(){this.element.focus()}},handlePlusAction:{value:function(){this._activeValueChange=!0;var e=this.step*this._stepDecimal,t="number"==typeof this.min?this.min*this._stepDecimal:0,n=this.value*this._stepDecimal-t;n%e?0>n?n-=n%e:n+=e-n%e:n+=e,this.value=(n+t)/this._stepDecimal,this._activeValueChange=!1}},handleMinusAction:{value:function(){this._activeValueChange=!0;var e=this.step*this._stepDecimal,t="number"==typeof this.min?this.min*this._stepDecimal:0,n=this.value*this._stepDecimal-t;n-=n%e?n>0?n%e:e+n%e:e,this.value=(n+t)/this._stepDecimal,this._activeValueChange=!1}},handleKeyPress:{value:function(e){this.enabled&&("increase"===e.identifier?this.handlePlusAction():"decrease"===e.identifier&&this.handleMinusAction())}},handleAction:{value:function(e){(e.target===this._numberFieldTextFieldComponent||e.target===this._numberFieldMinusComponent||e.target===this._numberFieldPlusComponent)&&(e.stopPropagation(),this.dispatchActionEvent())}},_value:{value:0},_required:{value:!1},_min:{value:"any"},_max:{value:"any"},_step:{value:1},min:{get:function(){return this._min},set:function(e){return"any"!==e&&isNaN(e=parseFloat(e))?!1:(this._min!==e&&(this._propertyNamesUsed&&(this._propertyNamesUsed.min=!0),this._min=e,this.needsDraw=!0,"number"==typeof e&&e>this.value&&(this.value=e)),void 0)}},max:{get:function(){return this._max},set:function(e){return"any"!==e&&isNaN(e=parseFloat(e))?!1:(this._max!==e&&(this._propertyNamesUsed&&(this._propertyNamesUsed.max=!0),this._max=e,this.needsDraw=!0,"number"==typeof e&&this.value>e&&(this.value=e)),void 0)}},_stepDecimal:{value:1},step:{get:function(){return this._step},set:function(e){if(isNaN(e=parseFloat(e))||0>=e)return!1;if(this._step!==e){this._propertyNamesUsed&&(this._propertyNamesUsed.step=!0),this._step=e;var t=(e+"").match(/\.(\d+)$/);this._stepDecimal=t?Math.pow(10,t[1].length):1}}},value:{get:function(){return this._value},set:function(e){isNaN(e=parseFloat(e))||("number"==typeof this.min&&this.min>e&&(e=this.min),"number"==typeof this.max&&e>this.max&&(e=this.max),this._value!==e&&(this._propertyNamesUsed&&(this._propertyNamesUsed.value=!0),this._value=e,this.needsDraw=!0)),this._numberFieldTextFieldComponent&&this._value!==this._numberFieldTextFieldComponent.value&&(this._numberFieldTextFieldComponent.value=this._value)}},enabled:{value:!0},_numberFieldTextFieldComponent:{value:null},_numberFieldMinusComponent:{value:null},_numberFieldPlusComponent:{value:null},_activeValueChange:{value:!1}})}});