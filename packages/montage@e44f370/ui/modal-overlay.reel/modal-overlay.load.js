montageDefine("e44f370","ui/modal-overlay.reel/modal-overlay",{dependencies:["ui/overlay.reel","core/promise"],factory:function(e,t){var n=e("ui/overlay.reel").Overlay,i=e("core/promise").Promise,r="montage-ModalOverlay";t.ModalOverlay=n.specialize({constructor:{value:function(){this.super()}},enterDocument:{value:function(e){var t;this.super(e),e&&(t=this.element.ownerDocument.body,t.appendChild(this.modalMaskElement))}},_queue:{value:[]},_showPromise:{value:null},_dismissOnExternalInteraction:{value:!1},hasModalMask:{value:!0},show:{value:function(){var e,t=this._queue,n=t.indexOf(this);return-1===n?(0===t.length?(this.super(),e=i.resolve()):(this._showPromise=i.defer(),e=this._showPromise.promise),t.push(this)):(0===n&&(this._showPromise=i.defer(),t.push(this)),e=this._showPromise.promise),e}},hide:{value:function(){var e,t=this._queue,i=t.indexOf(this);0===i?(t.shift(),this.super(),t.length>0&&(e=t[0],e._showPromise.resolve(),n.prototype.show.call(e))):i>0&&(t.splice(i,1),this._showPromise.reject())}},draw:{value:function(){this.super(),this._isShown&&this.hasModalMask?this.modalMaskElement.classList.add(r+"-modalMask--visible"):this.modalMaskElement.classList.remove(r+"-modalMask--visible")}}})}});