montageDefine("e44f370","core/converter/converter",{dependencies:["montage"],factory:function(e,t){var n=e("montage").Montage,i="[object Number]",s=Object.prototype.toString,a=function(e){return s.call(e)===i};t.isNumber=a;var o=function(e){return e&&e!==void 0};t.isDef=o,t.Validator=n.specialize({validate:{value:null}}),t.Converter=n.specialize({allowPartialConversion:{value:!0},convert:{enumerable:!1,value:null},revert:{enumerable:!1,value:null}},{blueprintModuleId:e("montage")._blueprintModuleIdDescriptor,blueprint:e("montage")._blueprintDescriptor})}});