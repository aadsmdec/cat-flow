montageDefine("e44f370","core/promise-controller",{dependencies:["montage","core/promise"],factory:function(e,t){var n=e("montage").Montage,r=e("core/promise").Promise;t.PromiseController=n.specialize({constructor:{value:function(){this.reset=null,this.addOwnPropertyChangeListener("promise",this),this.promise=null,this.defineBindings({"state == 'pending'":{"<-":"pending"},"state == 'fulfilled'":{"<-":"fulfilled"},"state == 'rejected'":{"<-":"rejected"},"progressState == 'determinate'":{"<-":"pending && determinate"},"progressState == 'indeterminate'":{"<-":"pending && determinate"},"progressState == 'fulfilled'":{"<-":"fulfilled"},"progressState == 'rejected'":{"<-":"rejected"}})}},promise:{value:null},state:{value:null},progressState:{value:null},pending:{value:null},fulfilled:{value:null},rejected:{value:null},determinate:{value:null},progress:{value:null},value:{value:null},error:{value:null},handlePromiseChange:{value:function(e){var t=this;e=r.resolve(e),t.reset&&t.reset();var n=!1;t.reset=function(){n=!0},t.value=null,t.error=null,t.progress=0,t.determinate=!1,t.pending=!0,t.fulfilled=!1,t.rejected=!1,e.then(function(e){n||(t.fulfilled=!0,t.value=e,t.progress=1)},function(e){n||(t.rejected=!0,t.error=e)},function(e){n||(t.progress=e,t.determinate="number"==typeof e)})}}},{blueprintModuleId:e("montage")._blueprintModuleIdDescriptor,blueprint:e("montage")._blueprintDescriptor})}});