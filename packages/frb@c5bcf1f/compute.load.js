montageDefine("c5bcf1f","compute",{dependencies:["./parse","./compile-observer","./compile-binder","./observers","./scope"],factory:function(e,t,n){function r(e,t,n){n.target=e,n.targetPath=t;var r=n.source=n.source||e,u=n.args,c=n.compute,h=n.parameters=n.parameters||r,d=n.document,p=n.components,f=n.trace,m=n.sourceScope=new l(r);m.parameters=h,m.document=d,m.components=p;var v=n.targetScope=new l(e);v.parameters=h,v.document=d,v.components=p;var g=u.map(function(e){return i(e)}).map(function(e){if("rangeContent"===e.type){var t=o(e.args[0]);return s.makeRangeContentObserver(t)}if("mapContent"===e.type){var t=o(e.args[0]);return s.makeMapContentObserver(t)}return o(e)}),_=s.makeRangeContentObserver(s.makeObserversObserver(g)),b=s.makeComputerObserver(_,c,e),y=i(t),w=a(y);return w(b,m,v,n,f?{sourcePath:u.join(", "),targetPath:t}:void 0)}var i=e("./parse"),o=e("./compile-observer"),a=e("./compile-binder"),s=e("./observers"),l=e("./scope");n.exports=r}});