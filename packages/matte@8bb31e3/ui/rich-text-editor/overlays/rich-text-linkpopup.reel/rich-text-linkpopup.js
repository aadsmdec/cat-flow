var Component=require("montage/ui/component").Component;exports.RichTextLinkPopup=Component.specialize({_isActive:{enumerable:!1,value:!1},_editor:{enumerable:!1,value:null},target:{enumerable:!1,value:null},_needsReset:{enumerable:!1,value:!1},initWithEditor:{value:function(e){this._editor=e}},editorMouseUp:{value:function(e){var t;if(this._editor.activeOverlay!=this&&"IMG"==e.target.nodeName)for(t=e.target;t&&t!=this._element;){if("A"==t.nodeName)return t!=this.target&&(this.target=t,this._needsReset=!0,this._isActive?this.needsDraw=!0:this._editor.showOverlay(this)),!0;t=t.parentElement}}},editorTouchEnd:{value:function(e){this.editorMouseUp(e)}},editorSelectionDidChange:{value:function(e){var t;if(e&&e.collapsed)for(t=e.commonAncestorContainer;t&&t!=this._element;){if("A"==t.nodeName)return t!=this.target&&(this.target=t,this._needsReset=!0,this._isActive?this.needsDraw=!0:this._editor.showOverlay(this)),!0;t=t.parentElement}return this._editor.activeOverlay==this&&this._editor.hideOverlay(),this.target=null,!1}},didBecomeActive:{value:function(){this._isActive=!0,window.addEventListener("resize",this,!1)}},didBecomeInactive:{value:function(){this._isActive=!1,window.removeEventListener("resize",this,!1),this.target=null,this._needsReset=!1}},enterDocument:{value:function(e){e&&(this._popupExtraWidth=this.element.offsetWidth)}},draw:{enumerable:!1,value:function(){var e=this.element,t=this.target,n=this._editor.innerElement;if(this._needsReset){var r,i,o,a,s,l,u,c,h=n.offsetHeight,d=n.offsetWidth,p=n.scrollTop,f=n.scrollLeft,m=t.offsetWidth,v=t.offsetHeight,g="",b=function(e){for(i=e.offsetTop,r=e.offsetLeft;(e=e.offsetParent)&&e!=n;)i+=e.offsetTop,r+=e.offsetLeft};b(t),o=r,a=i,g=a>60&&a-p+v+50>h?"bottom: "+(h-a+5)+"px;":"top: "+(a+v+5)+"px;",s=f,u=f+d,l=u-o,c=o+m-s,l>c?150>l?(g+=" left: "+(s+5)+"px;",g+=" max-width: "+(d-10-this._popupExtraWidth)+"px;"):(g+=" left: "+(s+o)+"px;",g+=" max-width: "+(l-5-this._popupExtraWidth)+"px;"):150>c?(g+=" right: "+(s+5)+"px;",g+=" max-width: "+(d-10-this._popupExtraWidth)+"px;"):(g+=" right: "+(u-(s+o+m+1))+"px;",g+=" max-width: "+(c-this._popupExtraWidth)+"px;"),e.setAttribute("style",g),this.link.href=t.href,this.link.textContent=t.href,this._needsReset=!1}}},handleResize:{enumerable:!1,value:function(){this._needsReset=!0,this.needsDraw=!0}}});