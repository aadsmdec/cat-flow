montageDefine("94d3ae4","q",{dependencies:[],factory:function(e,t,n){(function(e){if("function"==typeof bootstrap)bootstrap("promise",e);else if("object"==typeof t)n.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeQ=e}else Q=e()})(function(){"use strict";function e(e){return function(){return K.apply(e,arguments)}}function t(e){return e===Object(e)}function n(e){return"[object StopIteration]"===rt(e)||e instanceof H}function r(e,t){if(V&&t.stack&&"object"==typeof e&&null!==e&&e.stack&&-1===e.stack.indexOf(at)){for(var n=[],r=t;r;r=r.source)r.stack&&n.unshift(r.stack);n.unshift(e.stack);var a=n.join("\n"+at+"\n");e.stack=i(a)}}function i(e){for(var t=e.split("\n"),n=[],r=0;t.length>r;++r){var i=t[r];s(i)||a(i)||!i||n.push(i)}return n.join("\n")}function a(e){return-1!==e.indexOf("(module.js:")||-1!==e.indexOf("(node.js:")}function o(e){var t=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(e);if(t)return[t[1],Number(t[2])];var n=/at ([^ ]+):(\d+):(?:\d+)$/.exec(e);if(n)return[n[1],Number(n[2])];var r=/.*@(.+):(\d+)$/.exec(e);return r?[r[1],Number(r[2])]:void 0}function s(e){var t=o(e);if(!t)return!1;var n=t[0],r=t[1];return n===U&&r>=Y&&ct>=r}function l(){if(V)try{throw Error()}catch(e){var t=e.stack.split("\n"),n=t[0].indexOf("@")>0?t[1]:t[2],r=o(n);if(!r)return;return U=r[0],r[1]}}function u(e,t,n){return function(){return"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(t+" is deprecated, use "+n+" instead.",Error("").stack),e.apply(e,arguments)}}function c(e){return g(e)?e:_(e)?D(e):P(e)}function h(){function e(e){t=e,a.source=e,$(n,function(t,n){X(function(){e.promiseDispatch.apply(e,n)})},void 0),n=void 0,r=void 0}var t,n=[],r=[],i=et(h.prototype),a=et(f.prototype);if(a.promiseDispatch=function(e,i,a){var o=J(arguments);n?(n.push(o),"when"===i&&a[1]&&r.push(a[1])):X(function(){t.promiseDispatch.apply(t,o)})},a.valueOf=u(function(){if(n)return a;var e=v(t);return g(e)&&(t=e),e},"valueOf","inspect"),a.inspect=function(){return t?t.inspect():{state:"pending"}},c.longStackSupport&&V)try{throw Error()}catch(o){a.stack=o.stack.substring(o.stack.indexOf("\n")+1)}return i.promise=a,i.resolve=function(n){t||e(c(n))},i.fulfill=function(n){t||e(P(n))},i.reject=function(n){t||e(T(n))},i.notify=function(e){t||$(r,function(t,n){X(function(){n(e)})},void 0)},i}function d(e){if("function"!=typeof e)throw new TypeError("resolver must be a function.");var t=h();try{e(t.resolve,t.reject,t.notify)}catch(n){t.reject(n)}return t.promise}function p(e){return d(function(t,n){for(var r=0,i=e.length;i>r;r++)c(e[r]).then(t,n)})}function f(e,t,n){void 0===t&&(t=function(e){return T(Error("Promise does not support operation: "+e))}),void 0===n&&(n=function(){return{state:"unknown"}});var r=et(f.prototype);if(r.promiseDispatch=function(n,i,a){var o;try{o=e[i]?e[i].apply(r,a):t.call(r,i,a)}catch(s){o=T(s)}n&&n(o)},r.inspect=n,n){var i=n();"rejected"===i.state&&(r.exception=i.reason),r.valueOf=u(function(){var e=n();return"pending"===e.state||"rejected"===e.state?r:e.value})}return r}function m(e,t,n,r){return c(e).then(t,n,r)}function v(e){if(g(e)){var t=e.inspect();if("fulfilled"===t.state)return t.value}return e}function g(e){return t(e)&&"function"==typeof e.promiseDispatch&&"function"==typeof e.inspect}function _(e){return t(e)&&"function"==typeof e.then}function b(e){return g(e)&&"pending"===e.inspect().state}function y(e){return!g(e)||"fulfilled"===e.inspect().state}function w(e){return g(e)&&"rejected"===e.inspect().state}function E(){lt||"undefined"==typeof window||window.Touch||!window.console||console.warn("[Q] Unhandled rejection reasons (should be empty):",ot),lt=!0}function C(){for(var e=0;ot.length>e;e++){var t=ot[e];console.warn("Unhandled rejection reason:",t)}}function x(){ot.length=0,st.length=0,lt=!1,ut||(ut=!0,"undefined"!=typeof process&&process.on&&process.on("exit",C))}function S(e,t){ut&&(st.push(e),t&&t.stack!==void 0?ot.push(t.stack):ot.push("(no stack) "+t),E())}function O(e){if(ut){var t=Z(st,e);-1!==t&&(st.splice(t,1),ot.splice(t,1))}}function T(e){var t=f({when:function(t){return t&&O(this),t?t(e):this}},function(){return this},function(){return{state:"rejected",reason:e}});return S(t,e),t}function P(e){return f({when:function(){return e},get:function(t){return e[t]},set:function(t,n){e[t]=n},"delete":function(t){delete e[t]},post:function(t,n){return null===t||void 0===t?e.apply(void 0,n):e[t].apply(e,n)},apply:function(t,n){return e.apply(t,n)},keys:function(){return nt(e)}},void 0,function(){return{state:"fulfilled",value:e}})}function D(e){var t=h();return X(function(){try{e.then(t.resolve,t.reject,t.notify)}catch(n){t.reject(n)}}),t.promise}function M(e){return f({isDef:function(){}},function(t,n){return R(e,t,n)},function(){return c(e).inspect()})}function k(e,t,n){return c(e).spread(t,n)}function A(e){return function(){function t(e,t){var o;if(it){try{o=r[e](t)}catch(s){return T(s)}return o.done?o.value:m(o.value,i,a)}try{o=r[e](t)}catch(s){return n(s)?s.value:T(s)}return m(o,i,a)}var r=e.apply(this,arguments),i=t.bind(t,"next"),a=t.bind(t,"throw");return i()}}function L(e){c.done(c.async(e)())}function j(e){throw new H(e)}function I(e){return function(){return k([this,z(arguments)],function(t,n){return e.apply(t,n)})}}function R(e,t,n){return c(e).dispatch(t,n)}function z(e){return m(e,function(e){var t=0,n=h();return $(e,function(r,i,a){var o;g(i)&&"fulfilled"===(o=i.inspect()).state?e[a]=o.value:(++t,m(i,function(r){e[a]=r,0===--t&&n.resolve(e)},n.reject,function(e){n.notify({index:a,value:e})}))},void 0),0===t&&n.resolve(e),n.promise})}function B(e){return m(e,function(e){return e=Q(e,c),m(z(Q(e,function(e){return m(e,G,G)})),function(){return e})})}function N(e){return c(e).allSettled()}function F(e,t){return c(e).then(void 0,void 0,t)}function q(e,t){return c(e).nodeify(t)}var V=!1;try{throw Error()}catch(W){V=!!W.stack}var U,H,Y=l(),G=function(){},X=function(){function e(){for(;t.next;){t=t.next;var n=t.task;t.task=void 0;var i=t.domain;i&&(t.domain=void 0,i.enter());try{n()}catch(o){if(a)throw i&&i.exit(),setTimeout(e,0),i&&i.enter(),o;setTimeout(function(){throw o},0)}i&&i.exit()}r=!1}var t={task:void 0,next:null},n=t,r=!1,i=void 0,a=!1;if(X=function(e){n=n.next={task:e,domain:a&&process.domain,next:null},r||(r=!0,i())},"undefined"!=typeof process&&process.nextTick)a=!0,i=function(){process.nextTick(e)};else if("function"==typeof setImmediate)i="undefined"!=typeof window?setImmediate.bind(window,e):function(){setImmediate(e)};else if("undefined"!=typeof MessageChannel){var o=new MessageChannel;o.port1.onmessage=function(){i=s,o.port1.onmessage=e,e()};var s=function(){o.port2.postMessage(0)};i=function(){setTimeout(e,0),s()}}else i=function(){setTimeout(e,0)};return X}(),K=Function.call,J=e(Array.prototype.slice),$=e(Array.prototype.reduce||function(e,t){var n=0,r=this.length;if(1===arguments.length)for(;;){if(n in this){t=this[n++];break}if(++n>=r)throw new TypeError}for(;r>n;n++)n in this&&(t=e(t,this[n],n));return t}),Z=e(Array.prototype.indexOf||function(e){for(var t=0;this.length>t;t++)if(this[t]===e)return t;return-1}),Q=e(Array.prototype.map||function(e,t){var n=this,r=[];return $(n,function(i,a,o){r.push(e.call(t,a,o,n))},void 0),r}),et=Object.create||function(e){function t(){}return t.prototype=e,new t},tt=e(Object.prototype.hasOwnProperty),nt=Object.keys||function(e){var t=[];for(var n in e)tt(e,n)&&t.push(n);return t},rt=e(Object.prototype.toString);H="undefined"!=typeof ReturnValue?ReturnValue:function(e){this.value=e};var it;try{Function("(function* (){ yield 1; })"),it=!0}catch(W){it=!1}var at="From previous event:";c.resolve=c,c.nextTick=X,c.longStackSupport=!1,c.defer=h,h.prototype.makeNodeResolver=function(){var e=this;return function(t,n){t?e.reject(t):arguments.length>2?e.resolve(J(arguments,1)):e.resolve(n)}},c.promise=d,c.passByCopy=function(e){return e},f.prototype.passByCopy=function(){return this},c.join=function(e,t){return c(e).join(t)},f.prototype.join=function(e){return c([this,e]).spread(function(e,t){if(e===t)return e;throw Error("Can't join: not the same: "+e+" "+t)})},c.race=p,f.prototype.race=function(){return this.then(c.race)},c.makePromise=f,f.prototype.toString=function(){return"[object Promise]"},f.prototype.then=function(e,t,n){function i(t){try{return"function"==typeof e?e(t):t}catch(n){return T(n)}}function a(e){if("function"==typeof t){r(e,s);try{return t(e)}catch(n){return T(n)}}return T(e)}function o(e){return"function"==typeof n?n(e):e}var s=this,l=h(),u=!1;return X(function(){s.promiseDispatch(function(e){u||(u=!0,l.resolve(i(e)))},"when",[function(e){u||(u=!0,l.resolve(a(e)))}])}),s.promiseDispatch(void 0,"when",[void 0,function(e){var t,n=!1;try{t=o(e)}catch(r){if(n=!0,!c.onerror)throw r;c.onerror(r)}n||l.notify(t)}]),l.promise},c.when=m,f.prototype.thenResolve=function(e){return this.then(function(){return e})},c.thenResolve=function(e,t){return c(e).thenResolve(t)},f.prototype.thenReject=function(e){return this.then(function(){throw e})},c.thenReject=function(e,t){return c(e).thenReject(t)},c.nearer=v,c.isPromise=g,c.isPromiseAlike=_,c.isPending=b,f.prototype.isPending=function(){return"pending"===this.inspect().state},c.isFulfilled=y,f.prototype.isFulfilled=function(){return"fulfilled"===this.inspect().state},c.isRejected=w,f.prototype.isRejected=function(){return"rejected"===this.inspect().state};var ot=[],st=[],lt=!1,ut=!0;c.resetUnhandledRejections=x,c.getUnhandledReasons=function(){return ot.slice()},c.stopUnhandledRejectionTracking=function(){x(),"undefined"!=typeof process&&process.on&&process.removeListener("exit",C),ut=!1},x(),c.reject=T,c.fulfill=P,c.master=M,c.spread=k,f.prototype.spread=function(e,t){return this.all().then(function(t){return e.apply(void 0,t)},t)},c.async=A,c.spawn=L,c["return"]=j,c.promised=I,c.dispatch=R,f.prototype.dispatch=function(e,t){var n=this,r=h();return X(function(){n.promiseDispatch(r.resolve,e,t)}),r.promise},c.get=function(e,t){return c(e).dispatch("get",[t])},f.prototype.get=function(e){return this.dispatch("get",[e])},c.set=function(e,t,n){return c(e).dispatch("set",[t,n])},f.prototype.set=function(e,t){return this.dispatch("set",[e,t])},c.del=c["delete"]=function(e,t){return c(e).dispatch("delete",[t])},f.prototype.del=f.prototype["delete"]=function(e){return this.dispatch("delete",[e])},c.mapply=c.post=function(e,t,n){return c(e).dispatch("post",[t,n])},f.prototype.mapply=f.prototype.post=function(e,t){return this.dispatch("post",[e,t])},c.send=c.mcall=c.invoke=function(e,t){return c(e).dispatch("post",[t,J(arguments,2)])},f.prototype.send=f.prototype.mcall=f.prototype.invoke=function(e){return this.dispatch("post",[e,J(arguments,1)])},c.fapply=function(e,t){return c(e).dispatch("apply",[void 0,t])},f.prototype.fapply=function(e){return this.dispatch("apply",[void 0,e])},c["try"]=c.fcall=function(e){return c(e).dispatch("apply",[void 0,J(arguments,1)])},f.prototype.fcall=function(){return this.dispatch("apply",[void 0,J(arguments)])},c.fbind=function(e){var t=c(e),n=J(arguments,1);return function(){return t.dispatch("apply",[this,n.concat(J(arguments))])}},f.prototype.fbind=function(){var e=this,t=J(arguments);return function(){return e.dispatch("apply",[this,t.concat(J(arguments))])}},c.keys=function(e){return c(e).dispatch("keys",[])},f.prototype.keys=function(){return this.dispatch("keys",[])},c.all=z,f.prototype.all=function(){return z(this)},c.allResolved=u(B,"allResolved","allSettled"),f.prototype.allResolved=function(){return B(this)},c.allSettled=N,f.prototype.allSettled=function(){return this.then(function(e){return z(Q(e,function(e){function t(){return e.inspect()}return e=c(e),e.then(t,t)}))})},c.fail=c["catch"]=function(e,t){return c(e).then(void 0,t)},f.prototype.fail=f.prototype["catch"]=function(e){return this.then(void 0,e)},c.progress=F,f.prototype.progress=function(e){return this.then(void 0,void 0,e)},c.fin=c["finally"]=function(e,t){return c(e)["finally"](t)},f.prototype.fin=f.prototype["finally"]=function(e){return e=c(e),this.then(function(t){return e.fcall().then(function(){return t})},function(t){return e.fcall().then(function(){throw t})})},c.done=function(e,t,n,r){return c(e).done(t,n,r)},f.prototype.done=function(e,t,n){var i=function(e){X(function(){if(r(e,a),!c.onerror)throw e;c.onerror(e)})},a=e||t||n?this.then(e,t,n):this;"object"==typeof process&&process&&process.domain&&(i=process.domain.bind(i)),a.then(void 0,i)},c.timeout=function(e,t,n){return c(e).timeout(t,n)},f.prototype.timeout=function(e,t){var n=h(),r=setTimeout(function(){n.reject(Error(t||"Timed out after "+e+" ms"))},e);return this.then(function(e){clearTimeout(r),n.resolve(e)},function(e){clearTimeout(r),n.reject(e)},n.notify),n.promise},c.delay=function(e,t){return void 0===t&&(t=e,e=void 0),c(e).delay(t)},f.prototype.delay=function(e){return this.then(function(t){var n=h();return setTimeout(function(){n.resolve(t)},e),n.promise})},c.nfapply=function(e,t){return c(e).nfapply(t)},f.prototype.nfapply=function(e){var t=h(),n=J(e);return n.push(t.makeNodeResolver()),this.fapply(n).fail(t.reject),t.promise},c.nfcall=function(e){var t=J(arguments,1);return c(e).nfapply(t)},f.prototype.nfcall=function(){var e=J(arguments),t=h();return e.push(t.makeNodeResolver()),this.fapply(e).fail(t.reject),t.promise},c.nfbind=c.denodeify=function(e){var t=J(arguments,1);return function(){var n=t.concat(J(arguments)),r=h();return n.push(r.makeNodeResolver()),c(e).fapply(n).fail(r.reject),r.promise}},f.prototype.nfbind=f.prototype.denodeify=function(){var e=J(arguments);return e.unshift(this),c.denodeify.apply(void 0,e)},c.nbind=function(e,t){var n=J(arguments,2);return function(){function r(){return e.apply(t,arguments)}var i=n.concat(J(arguments)),a=h();return i.push(a.makeNodeResolver()),c(r).fapply(i).fail(a.reject),a.promise}},f.prototype.nbind=function(){var e=J(arguments,0);return e.unshift(this),c.nbind.apply(void 0,e)},c.nmapply=c.npost=function(e,t,n){return c(e).npost(t,n)},f.prototype.nmapply=f.prototype.npost=function(e,t){var n=J(t||[]),r=h();return n.push(r.makeNodeResolver()),this.dispatch("post",[e,n]).fail(r.reject),r.promise},c.nsend=c.nmcall=c.ninvoke=function(e,t){var n=J(arguments,2),r=h();return n.push(r.makeNodeResolver()),c(e).dispatch("post",[t,n]).fail(r.reject),r.promise},f.prototype.nsend=f.prototype.nmcall=f.prototype.ninvoke=function(e){var t=J(arguments,1),n=h();return t.push(n.makeNodeResolver()),this.dispatch("post",[e,t]).fail(n.reject),n.promise},c.nodeify=q,f.prototype.nodeify=function(e){return e?(this.then(function(t){X(function(){e(null,t)})},function(t){X(function(){e(t)})}),void 0):this};var ct=l();return c})}});