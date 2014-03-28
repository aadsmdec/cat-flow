function compile(e){return compile.semantics.compile(e)}var compileEvaluator=require("./compile-evaluator"),solve=require("./algebra"),Scope=require("./scope"),valueSyntax={type:"value"},trueScope={type:"literal",value:!0},falseScope={type:"literal",value:!1};module.exports=compile,compile.semantics={compile:function(e){var t=this.compilers;if("equals"===e.type){var n=this.compile(e.args[0]),r=this.compileEvaluator(e.args[1]);return t.equals(n,r)}if("if"===e.type){var i=this.compileEvaluator(e.args[0]),a=this.compile(e.args[1]),o=this.compile(e.args[2]);return t["if"](i,a,o)}if("and"===e.type||"or"===e.type){var s=solve(e.args[0],valueSyntax),l=solve(e.args[1],valueSyntax),u=this.compileEvaluator(e.args[0]),r=this.compileEvaluator(e.args[1]),c=this.compileEvaluator(s[1]),h=this.compileEvaluator(l[1]),n=this.compile(s[0]),d=this.compile(l[0]);return t[e.type](n,d,u,r,c,h)}if("everyBlock"===e.type){var p=this.compileEvaluator(e.args[0]),f=solve(e.args[1],{type:"literal",value:!0}),m=this.compile(f[0]),v=this.compileEvaluator(f[1]);return t.everyBlock(p,m,v)}if("parent"===e.type){var g=this.compile(e.args[0]);return function(e,t){return g(e,t.parent)}}if(t.hasOwnProperty(e.type)){var _=e.args.map(this.compileEvaluator,this.compileEvaluator.semantics);return t[e.type].apply(null,_)}throw Error("Can't compile assigner for "+JSON.stringify(e.type))},compileEvaluator:compileEvaluator,compilers:{property:function(e,t){return function(n,r){var i=e(r);if(i){var a=t(r);null!=a&&(Array.isArray(i)?i.set(a,n):i[a]=n)}}},get:function(e,t){return function(n,r){var i=e(r);if(i){var a=t(r);null!=a&&i.set(a,n)}}},has:function(e,t){return function(n,r){var i=e(r);if(i){var a=t(r);null!=n&&(n?(i.has||i.contains).call(i,a)||i.add(a):(i.has||i.contains).call(i,a)&&(i.remove||i["delete"]).call(i,a))}}},equals:function(e,t){return function(n,r){return n?e(t(r),r):void 0}},"if":function(e,t,n){return function(r,i){var a=e(i);if(null!=a)return a?t(r,i):n(r,i)}},and:function(e,t,n,r,i,a){return function(o,s){null!=o&&(o?(e(i(trueScope),s),t(a(trueScope),s)):e(n(s)&&!r(s),s))}},or:function(e,t,n,r,i,a){return function(o,s){null!=o&&(o?e(n(s)||!r(s),s):(e(i(falseScope),s),t(a(falseScope),s)))}},rangeContent:function(e){return function(t,n){var r=e(n);r&&(t?r.swap(0,r.length,t):r.clear())}},mapContent:function(e){return function(t,n){var r=e(n);r&&(r.clear(),n.value&&r.addEach(t))}},reversed:function(e){return function(t,n){var r=e(n);r&&r.swap(0,r.length,t.reversed())}},everyBlock:function(e,t,n){return function(r,i){if(r){var a=e(i),o=n(i);a.forEach(function(e){t(o,i.nest(e))})}}}}};