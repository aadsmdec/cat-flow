montageDefine("e44f370","node",{dependencies:["q-io/fs","./montage","mr/require","mr/node","q","url","htmlparser2"],factory:function(e,t){function n(e){var t,n,r=new d.DomHandler(function(e,r){n=e,t=r}),i=new d.Parser(r);if(i.write(e),i.done(),n)throw n;if(!t)throw Error("HTML parsing did not complete");return{type:"document",children:t}}function r(e,t){var n,i=function(){n=!0};if(t(e,i),!n)for(var a=e.children,o=a?a.length:0,s=0;o>s;s++)r(a[s],t)}function i(e,t){return e.attribs?e.attribs[t]:null}function a(e){return h.getText(e)}function o(e){return e.replace(/\[[^\]]+\]$/,"")}var s=e("q-io/fs"),l=e("./montage"),u=e("mr/require");e("mr/node"),e("q");var c=e("url"),d=e("htmlparser2"),h=d.DomUtils;u.overlays=["node","server","montage"],t.bootstrap=function(){var e=process.argv.slice(0,3),t=process.argv.slice(2),n=t.shift();return s.canonical(n).then(function(n){return p(n).fail(function(r){if("Can't find package"!==r.message)throw Error(r);f(n,e,t)}).then(function(r){return v(r,n,e,t)})})};var p=function(e){var t=s.directory(e);if(t===e)throw Error("Can't find package");return s.join(t,"package.json"),s.stat(e).then(function(e){return e.isFile()?t:p(t)})},f=function(){throw Error("Can't load module that is not in a package")},v=function(e,t){return l.loadPackage(e).then(function(n){var r=t.slice(e.length+1);return n.async(r)}).done()};l.loadPackage=function(e,t){return"/"!==e.slice(e.length-1,e.length)&&(e+="/"),t=t||{},t.location=c.resolve(u.getLocation(),e),t.moduleTypes=["html","meta"],t.makeLoader=function(e){return l.ReelLoader(e,u.makeLoader(e))},t.makeCompiler=function(e){return l.TemplateCompiler(e,l.SerializationCompiler(e,u.makeCompiler(e)))},u.loadPackage(t.location,t)},l.TemplateLoader=function(e,t){return function(e,n){var r=e.match(/(.*\/)?(?=[^\/]+\.html$)/),i=e.match(/(?=[^\/]+\.json$)/),a=e.match(/(.*\/)?([^\/]+)\.reel\/\2$/);return r?t(e,n).then(function(){return n.dependencies=m(n.text,n.location),n}):i?t(e,n).then(function(){return n.dependencies=b(n.text,[]),n}):a?t(e,n).then(function(){var t=c.resolve(n.location,a[2]+".html");return s.stat(c.parse(t).pathname).then(function(t){t.isFile()&&(n.extraDependencies=[e+".html"])},function(){})}):t(e,n)}},u.makeLoader=function(e){return function(t){return l.TemplateLoader(t,e(t))}}(u.makeLoader);var m=function(e){var t=[],r=n(e);return g(r,t),t},g=function(e,t){r(e,function(e){h.isTag(e)&&("script"===e.name?"text/montage-serialization"===i(e,"type")&&b(a(e),t):"link"===e.name&&"text/montage-serialization"===i(e,"type")&&t.push(i(e,"href")))})},b=function(e,t){var n=JSON.parse(e);return Object.keys(n).forEach(function(e){var r=n[e];r.lazy||("string"==typeof r.prototype&&t.push(o(r.prototype)),"string"==typeof r.object&&t.push(o(r.object)))}),t}}});