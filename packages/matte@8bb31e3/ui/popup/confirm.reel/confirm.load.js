montageDefine("8bb31e3","ui/popup/confirm.reel/confirm",{dependencies:["montage/ui/component","ui/popup/popup.reel"],factory:function(e,t){var n=e("montage/ui/component").Component,r=e("ui/popup/popup.reel").Popup,i=t.Confirm=n.specialize({hasTemplate:{value:!0},title:{value:"Confirm"},msg:{value:"Are you sure?"},okLabel:{value:"OK"},cancelLabel:{value:"Cancel"},_popup:{value:null},popup:{set:function(e){this._popup=e},get:function(){return this._popup}},okCallback:{value:null},cancelCallback:{value:null},enterDocument:{value:function(e){e&&this.element.addEventListener("keyup",this,!1)}},draw:{value:function(){}},handleKeyup:{value:function(e){13==e.keyCode?this.handleOkAction(e):27==e.keyCode&&this.handleCancelAction(e)}},handleOkAction:{value:function(e){this.okCallback&&this.okCallback.call(this,e);var t=document.createEvent("CustomEvent");t.initCustomEvent("montage_confirm_ok",!0,!0,null),this.dispatchEvent(t),this.popup.hide()}},handleCancelAction:{value:function(e){this.cancelCallback&&this.cancelCallback.call(this,e);var t=document.createEvent("CustomEvent");t.initCustomEvent("montage_confirm_cancel",!0,!0,null),this.dispatchEvent(t),this.popup.hide()}},show:{value:function(e,t,n){var o,a=this.application._confirmPopup;a||(a=new r,this.popup=a,a.type="confirm",a.title="Confirmation",a.modal=!0,this.application._confirmPopup=a,o=new i,a.content=o),o=a.content,"string"==typeof e?(o.msg=e,o.okLabel="OK",o.cancelLabel="Cancel"):(o.msg=e.message,o.okLabel=e.okLabel||"OK",o.cancelLabel=e.cancelLabel||"Cancel"),o.okCallback=t||null,o.cancelCallback=n||null,a.show()}}})}});