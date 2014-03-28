montageDefine("e44f370","core/meta/binder",{dependencies:["montage","core/promise","core/serialization","core/meta/binder-manager","core/meta/blueprint","../deprecate","core/logger"],factory:function(e,t){"use strict";var n=e("montage").Montage;e("core/promise").Promise,e("core/serialization").Deserializer;var r=e("core/meta/binder-manager").BinderManager,i=e("core/meta/blueprint"),a=e("../deprecate");e("core/logger").logger("blueprint");var o=null,s=t.Binder=n.specialize({constructor:{value:function s(){return this.superForValue("constructor")(),this._name=null,this.binderModuleId=null,this.isDefault=!1,this._blueprintForPrototypeTable={},this}},initWithNameAndRequire:{value:function(e,t){if(!e)throw Error("name is required");if(!t)throw Error("require is required");return this._name=e,this._require=t,s.manager.addBinder(this),this}},serializeSelf:{value:function(e){e.setProperty("name",this.name),this.blueprints.length>0&&e.setProperty("blueprints",this.blueprints),e.setProperty("binderModuleId",this.binderInstanceModuleId)}},deserializeSelf:{value:function(e){this._name=e.getProperty("name");var t=e.getProperty("blueprints");t&&(this._blueprints=t),this.binderInstanceModuleId=e.getProperty("binderModuleId")}},_name:{value:null},name:{get:function(){return this._name}},_require:{value:null},require:{get:function(){return this._require}},_blueprintForPrototypeTable:{distinct:!0,value:{}},identifier:{get:function(){return["binder",this.name.toLowerCase()].join("_")}},binderInstanceModuleId:{serializable:!1,value:null},isDefault:{serializable:!1,value:!1},_blueprints:{distinct:!0,value:[]},blueprints:{get:function(){return this._blueprints}},addBlueprint:{value:function(e){if(null!==e){var t=this.blueprints.indexOf(e);0>t&&(null!==e.binder&&e.binder!==this&&e.binder.removeBlueprint(e),this.blueprints.push(e),e.binder=this)}return e}},removeBlueprint:{value:function(e){if(null!==e){var t=this.blueprints.indexOf(e);t>=0&&(this.blueprints.splice(t,1),e.binder=null)}return e}},addBlueprintNamed:{value:function(e){return this.addBlueprint((new i.Blueprint).initWithName(e))}},blueprintForPrototype:{value:a.deprecateMethod(void 0,function(e){return this.blueprintForName(e)},"blueprintForPrototype","blueprintForName")},blueprintForName:{value:function(e){for(var t=this.blueprints,n=t.length,r=0;n>r;r++)if(t[r].name===e)return t[r]}},_blueprintObjectProperty:{value:null},ObjectProperty:{get:function(){return this._blueprintObjectProperty||(this._blueprintObjectProperty=s.manager.defaultBlueprintObjectProperty),this._blueprintObjectProperty}},blueprintModuleId:e("montage")._blueprintModuleIdDescriptor,blueprint:e("montage")._blueprintDescriptor},{manager:{get:function(){return null===o&&(o=new r),o}}})}});