module.exports=function(){function e(e,t){function n(){this.constructor=e}n.prototype=t.prototype,e.prototype=new n}function t(e,t,n,r,i){function a(e,t){function n(e){function t(e){return e.charCodeAt(0).toString(16).toUpperCase()}return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(e){return"\\x0"+t(e)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(e){return"\\x"+t(e)}).replace(/[\u0180-\u0FFF]/g,function(e){return"\\u0"+t(e)}).replace(/[\u1080-\uFFFF]/g,function(e){return"\\u"+t(e)})}var r,i;switch(e.length){case 0:r="end of input";break;case 1:r=e[0];break;default:r=e.slice(0,-1).join(", ")+" or "+e[e.length-1]}return i=t?'"'+n(t)+'"':"end of input","Expected "+r+" but "+i+" found."}this.expected=e,this.found=t,this.offset=n,this.line=r,this.column=i,this.name="SyntaxError",this.message=a(e,t)}function n(e){function n(t){function n(t,n,r){var i,a;for(i=n;r>i;i++)a=e.charAt(i),"\n"===a?(t.seenCR||t.line++,t.column=1,t.seenCR=!1):"\r"===a||"\u2028"===a||"\u2029"===a?(t.line++,t.column=1,t.seenCR=!0):(t.column++,t.seenCR=!1)}return Yi!==t&&(Yi>t&&(Yi=0,Hi={line:1,column:1,seenCR:!1}),n(Hi,Yi,t),Yi=t),Hi}function r(e){Gi>Wi||(Wi>Gi&&(Gi=Wi,Xi=[]),Xi.push(e))}function i(e){var t=0;for(e.sort();e.length>t;)e[t-1]===e[t]?e.splice(t,1):t++}function a(){var e,t;return Ki++,e=l(),Ki--,null===e&&(t=null,0===Ki&&r(Q)),e}function o(){var t,n,i,o,s,l,u;if(t=Wi,n=a(),null!==n){for(i=[],o=Wi,44===e.charCodeAt(Wi)?(s=tt,Wi++):(s=null,0===Ki&&r(nt)),null!==s?(l=F(),null!==l?(u=a(),null!==u?(s=[s,l,u],o=s):(Wi=o,o=et)):(Wi=o,o=et)):(Wi=o,o=et);null!==o;)i.push(o),o=Wi,44===e.charCodeAt(Wi)?(s=tt,Wi++):(s=null,0===Ki&&r(nt)),null!==s?(l=F(),null!==l?(u=a(),null!==u?(s=[s,l,u],o=s):(Wi=o,o=et)):(Wi=o,o=et)):(Wi=o,o=et);null!==i?(Vi=t,n=rt(n,i),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)}else Wi=t,t=et;return t}function s(){var t,n,i,a;return t=Wi,40===e.charCodeAt(Wi)?(n=it,Wi++):(n=null,0===Ki&&r(at)),null!==n?(i=F(),null!==i?(41===e.charCodeAt(Wi)?(a=ot,Wi++):(a=null,0===Ki&&r(st)),null!==a?(Vi=t,n=lt(),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et),null===t&&(t=Wi,40===e.charCodeAt(Wi)?(n=it,Wi++):(n=null,0===Ki&&r(at)),null!==n?(i=o(),null!==i?(41===e.charCodeAt(Wi)?(a=ot,Wi++):(a=null,0===Ki&&r(st)),null!==a?(Vi=t,n=ut(i),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et)),t}function l(){var t,n,i,o,s,l,c,h,d,p,f;return t=Wi,n=u(),null!==n?(i=F(),null!==i?(o=Wi,63===e.charCodeAt(Wi)?(s=ht,Wi++):(s=null,0===Ki&&r(dt)),null!==s?(l=F(),null!==l?(c=a(),null!==c?(h=F(),null!==h?(58===e.charCodeAt(Wi)?(d=pt,Wi++):(d=null,0===Ki&&r(ft)),null!==d?(p=F(),null!==p?(f=a(),null!==f?(s=[s,l,c,h,d,p,f],o=s):(Wi=o,o=et)):(Wi=o,o=et)):(Wi=o,o=et)):(Wi=o,o=et)):(Wi=o,o=et)):(Wi=o,o=et)):(Wi=o,o=et),null===o&&(o=ct),null!==o?(Vi=t,n=mt(n,o),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et),t}function u(){var t,n,i,a,o,s,l,u;if(t=Wi,n=c(),null!==n){for(i=[],a=Wi,o=F(),null!==o?(e.substr(Wi,2)===vt?(s=vt,Wi+=2):(s=null,0===Ki&&r(gt)),null!==s?(l=F(),null!==l?(u=c(),null!==u?(o=[o,s,l,u],a=o):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et);null!==a;)i.push(a),a=Wi,o=F(),null!==o?(e.substr(Wi,2)===vt?(s=vt,Wi+=2):(s=null,0===Ki&&r(gt)),null!==s?(l=F(),null!==l?(u=c(),null!==u?(o=[o,s,l,u],a=o):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et);null!==i?(Vi=t,n=_t(n,i),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)}else Wi=t,t=et;return t}function c(){var t,n,i,a,o,s,l,u;if(t=Wi,n=h(),null!==n){for(i=[],a=Wi,o=F(),null!==o?(e.substr(Wi,2)===bt?(s=bt,Wi+=2):(s=null,0===Ki&&r(yt)),null!==s?(l=F(),null!==l?(u=h(),null!==u?(o=[o,s,l,u],a=o):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et);null!==a;)i.push(a),a=Wi,o=F(),null!==o?(e.substr(Wi,2)===bt?(s=bt,Wi+=2):(s=null,0===Ki&&r(yt)),null!==s?(l=F(),null!==l?(u=h(),null!==u?(o=[o,s,l,u],a=o):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et);null!==i?(Vi=t,n=_t(n,i),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)}else Wi=t,t=et;return t}function h(){var t,n,i,a,o,s,l,u,c;return t=Wi,n=d(),null!==n?(i=Wi,a=F(),null!==a?(o=Wi,e.substr(Wi,3)===wt?(s=wt,Wi+=3):(s=null,0===Ki&&r(Et)),null===s&&(e.substr(Wi,2)===Ct?(s=Ct,Wi+=2):(s=null,0===Ki&&r(St)),null===s&&(e.substr(Wi,2)===Ot?(s=Ot,Wi+=2):(s=null,0===Ki&&r(Pt)),null===s&&(s=Wi,60===e.charCodeAt(Wi)?(l=Tt,Wi++):(l=null,0===Ki&&r(Dt)),null!==l?(u=Wi,Ki++,45===e.charCodeAt(Wi)?(c=xt,Wi++):(c=null,0===Ki&&r(Mt)),Ki--,null===c?u=ct:(Wi=u,u=et),null!==u?(l=[l,u],s=l):(Wi=s,s=et)):(Wi=s,s=et),null===s&&(62===e.charCodeAt(Wi)?(s=At,Wi++):(s=null,0===Ki&&r(jt)),null===s&&(e.substr(Wi,2)===Lt?(s=Lt,Wi+=2):(s=null,0===Ki&&r(kt)),null===s&&(e.substr(Wi,2)===It?(s=It,Wi+=2):(s=null,0===Ki&&r(Rt)))))))),null!==s&&(s=e.substring(o,Wi)),o=s,null!==o?(s=F(),null!==s?(l=d(),null!==l?(a=[a,o,s,l],i=a):(Wi=i,i=et)):(Wi=i,i=et)):(Wi=i,i=et)):(Wi=i,i=et),null===i&&(i=ct),null!==i?(Vi=t,n=zt(n,i),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et),t}function d(){var t,n,i,a,o,s,l,u;if(t=Wi,n=p(),null!==n){for(i=[],a=Wi,o=F(),null!==o?(s=Wi,43===e.charCodeAt(Wi)?(l=Nt,Wi++):(l=null,0===Ki&&r(Bt)),null===l&&(45===e.charCodeAt(Wi)?(l=xt,Wi++):(l=null,0===Ki&&r(Mt))),null!==l&&(l=e.substring(s,Wi)),s=l,null!==s?(l=F(),null!==l?(u=p(),null!==u?(o=[o,s,l,u],a=o):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et);null!==a;)i.push(a),a=Wi,o=F(),null!==o?(s=Wi,43===e.charCodeAt(Wi)?(l=Nt,Wi++):(l=null,0===Ki&&r(Bt)),null===l&&(45===e.charCodeAt(Wi)?(l=xt,Wi++):(l=null,0===Ki&&r(Mt))),null!==l&&(l=e.substring(s,Wi)),s=l,null!==s?(l=F(),null!==l?(u=p(),null!==u?(o=[o,s,l,u],a=o):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et);null!==i?(Vi=t,n=_t(n,i),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)}else Wi=t,t=et;return t}function p(){var t,n,i,a,o,s,l,u;if(t=Wi,n=f(),null!==n){for(i=[],a=Wi,o=F(),null!==o?(s=Wi,42===e.charCodeAt(Wi)?(l=Ft,Wi++):(l=null,0===Ki&&r(qt)),null===l&&(47===e.charCodeAt(Wi)?(l=Ut,Wi++):(l=null,0===Ki&&r(Wt)),null===l&&(37===e.charCodeAt(Wi)?(l=Vt,Wi++):(l=null,0===Ki&&r(Yt)),null===l&&(e.substr(Wi,3)===Ht?(l=Ht,Wi+=3):(l=null,0===Ki&&r(Gt))))),null!==l&&(l=e.substring(s,Wi)),s=l,null!==s?(l=F(),null!==l?(u=f(),null!==u?(o=[o,s,l,u],a=o):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et);null!==a;)i.push(a),a=Wi,o=F(),null!==o?(s=Wi,42===e.charCodeAt(Wi)?(l=Ft,Wi++):(l=null,0===Ki&&r(qt)),null===l&&(47===e.charCodeAt(Wi)?(l=Ut,Wi++):(l=null,0===Ki&&r(Wt)),null===l&&(37===e.charCodeAt(Wi)?(l=Vt,Wi++):(l=null,0===Ki&&r(Yt)),null===l&&(e.substr(Wi,3)===Ht?(l=Ht,Wi+=3):(l=null,0===Ki&&r(Gt))))),null!==l&&(l=e.substring(s,Wi)),s=l,null!==s?(l=F(),null!==l?(u=f(),null!==u?(o=[o,s,l,u],a=o):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et);null!==i?(Vi=t,n=_t(n,i),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)}else Wi=t,t=et;return t}function f(){var t,n,i,a,o,s,l,u;if(t=Wi,n=m(),null!==n){for(i=[],a=Wi,o=F(),null!==o?(s=Wi,e.substr(Wi,2)===Xt?(l=Xt,Wi+=2):(l=null,0===Ki&&r(Kt)),null===l&&(e.substr(Wi,2)===Jt?(l=Jt,Wi+=2):(l=null,0===Ki&&r($t)),null===l&&(e.substr(Wi,2)===Zt?(l=Zt,Wi+=2):(l=null,0===Ki&&r(Qt)))),null!==l&&(l=e.substring(s,Wi)),s=l,null!==s?(l=F(),null!==l?(u=m(),null!==u?(o=[o,s,l,u],a=o):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et);null!==a;)i.push(a),a=Wi,o=F(),null!==o?(s=Wi,e.substr(Wi,2)===Xt?(l=Xt,Wi+=2):(l=null,0===Ki&&r(Kt)),null===l&&(e.substr(Wi,2)===Jt?(l=Jt,Wi+=2):(l=null,0===Ki&&r($t)),null===l&&(e.substr(Wi,2)===Zt?(l=Zt,Wi+=2):(l=null,0===Ki&&r(Qt)))),null!==l&&(l=e.substring(s,Wi)),s=l,null!==s?(l=F(),null!==l?(u=m(),null!==u?(o=[o,s,l,u],a=o):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et);null!==i?(Vi=t,n=_t(n,i),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)}else Wi=t,t=et;return t}function m(){var t,n,i,a,o,s,l,u;if(t=Wi,n=v(),null!==n){for(i=[],a=Wi,o=F(),null!==o?(e.substr(Wi,2)===en?(s=en,Wi+=2):(s=null,0===Ki&&r(tn)),null!==s?(l=F(),null!==l?(u=v(),null!==u?(o=[o,s,l,u],a=o):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et);null!==a;)i.push(a),a=Wi,o=F(),null!==o?(e.substr(Wi,2)===en?(s=en,Wi+=2):(s=null,0===Ki&&r(tn)),null!==s?(l=F(),null!==l?(u=v(),null!==u?(o=[o,s,l,u],a=o):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et);null!==i?(Vi=t,n=_t(n,i),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)}else Wi=t,t=et;return t}function v(){var t,n,i;return t=Wi,n=Wi,33===e.charCodeAt(Wi)?(i=nn,Wi++):(i=null,0===Ki&&r(rn)),null===i&&(43===e.charCodeAt(Wi)?(i=Nt,Wi++):(i=null,0===Ki&&r(Bt)),null===i&&(45===e.charCodeAt(Wi)?(i=xt,Wi++):(i=null,0===Ki&&r(Mt)))),null!==i&&(i=e.substring(n,Wi)),n=i,null!==n?(i=v(),null!==i?(Vi=t,n=an(n,i),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et),null===t&&(t=g()),t}function g(){var e,t,n,r;if(e=Wi,t=y(),null!==t){for(n=[],r=_();null!==r;)n.push(r),r=_();null!==n?(Vi=e,t=on(t,n),null===t?(Wi=e,e=t):e=t):(Wi=e,e=et)}else Wi=e,e=et;return e}function _(){var t,n,i,o;return t=Wi,46===e.charCodeAt(Wi)?(n=sn,Wi++):(n=null,0===Ki&&r(ln)),null!==n?(i=b(),null!==i?(Vi=t,n=un(i),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et),null===t&&(t=Wi,91===e.charCodeAt(Wi)?(n=cn,Wi++):(n=null,0===Ki&&r(hn)),null!==n?(i=a(),null!==i?(93===e.charCodeAt(Wi)?(o=dn,Wi++):(o=null,0===Ki&&r(pn)),null!==o?(Vi=t,n=fn(i),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et)),t}function b(){var t,n,i,o,l;return t=Wi,n=Wi,i=w(),null!==i&&(i=e.substring(n,Wi)),n=i,null!==n?(123===e.charCodeAt(Wi)?(i=mn,Wi++):(i=null,0===Ki&&r(vn)),null!==i?(o=a(),null!==o?(125===e.charCodeAt(Wi)?(l=gn,Wi++):(l=null,0===Ki&&r(_n)),null!==l?(Vi=t,n=bn(n,o),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et),null===t&&(t=Wi,n=Wi,i=w(),null!==i&&(i=e.substring(n,Wi)),n=i,null!==n?(i=s(),null!==i?(Vi=t,n=yn(n,i),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et),null===t&&(t=Wi,n=R(),null!==n&&(Vi=t,n=wn(n)),null===n?(Wi=t,t=n):t=n,null===t&&(t=Wi,n=Wi,i=w(),null!==i&&(i=e.substring(n,Wi)),n=i,null!==n&&(Vi=t,n=En(n)),null===n?(Wi=t,t=n):t=n,null===t&&(t=Wi,n=T(),null!==n&&(Vi=t,n=Cn(n)),null===n?(Wi=t,t=n):t=n,null===t&&(t=Wi,n=D(),null!==n&&(Vi=t,n=Cn(n)),null===n?(Wi=t,t=n):t=n,null===t&&(t=Wi,40===e.charCodeAt(Wi)?(n=it,Wi++):(n=null,0===Ki&&r(at)),null!==n?(i=a(),null!==i?(41===e.charCodeAt(Wi)?(o=ot,Wi++):(o=null,0===Ki&&r(st)),null!==o?(Vi=t,n=Cn(i),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et))))))),t}function y(){var t,n,i,o;return t=T(),null===t&&(t=D(),null===t&&(t=E(),null===t&&(t=A(),null===t&&(t=Wi,e.substr(Wi,4)===Sn?(n=Sn,Wi+=4):(n=null,0===Ki&&r(On)),null!==n&&(Vi=t,n=Pn()),null===n?(Wi=t,t=n):t=n,null===t&&(t=Wi,e.substr(Wi,4)===Tn?(n=Tn,Wi+=4):(n=null,0===Ki&&r(Dn)),null!==n&&(Vi=t,n=xn()),null===n?(Wi=t,t=n):t=n,null===t&&(t=Wi,e.substr(Wi,5)===Mn?(n=Mn,Wi+=5):(n=null,0===Ki&&r(An)),null!==n&&(Vi=t,n=jn()),null===n?(Wi=t,t=n):t=n,null===t&&(t=Wi,e.substr(Wi,4)===Ln?(n=Ln,Wi+=4):(n=null,0===Ki&&r(kn)),null!==n&&(Vi=t,n=In()),null===n?(Wi=t,t=n):t=n,null===t&&(t=Wi,64===e.charCodeAt(Wi)?(n=Rn,Wi++):(n=null,0===Ki&&r(zn)),null!==n?(i=Wi,o=H(),null!==o&&(o=e.substring(i,Wi)),i=o,null!==i?(Vi=t,n=Nn(i),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et),null===t&&(t=Wi,36===e.charCodeAt(Wi)?(n=Bn,Wi++):(n=null,0===Ki&&r(Fn)),null!==n?(i=Wi,o=w(),null!==o&&(o=e.substring(i,Wi)),i=o,null!==i?(Vi=t,n=qn(i),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et),null===t&&(t=Wi,36===e.charCodeAt(Wi)?(n=Bn,Wi++):(n=null,0===Ki&&r(Fn)),null!==n&&(Vi=t,n=Un()),null===n?(Wi=t,t=n):t=n,null===t&&(t=Wi,35===e.charCodeAt(Wi)?(n=Wn,Wi++):(n=null,0===Ki&&r(Vn)),null!==n?(i=Wi,o=w(),null!==o&&(o=e.substring(i,Wi)),i=o,null!==i?(Vi=t,n=Yn(i),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et),null===t&&(t=Wi,38===e.charCodeAt(Wi)?(n=Hn,Wi++):(n=null,0===Ki&&r(Gn)),null!==n?(i=Wi,o=w(),null!==o&&(o=e.substring(i,Wi)),i=o,null!==i?(o=s(),null!==o?(Vi=t,n=Xn(i,o),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et),null===t&&(t=Wi,94===e.charCodeAt(Wi)?(n=Kn,Wi++):(n=null,0===Ki&&r(Jn)),null!==n?(i=y(),null!==i?(Vi=t,n=$n(i),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et),null===t&&(t=Wi,40===e.charCodeAt(Wi)?(n=it,Wi++):(n=null,0===Ki&&r(at)),null!==n?(i=a(),null!==i?(41===e.charCodeAt(Wi)?(o=ot,Wi++):(o=null,0===Ki&&r(st)),null!==o?(Vi=t,n=Zn(i),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et),null===t&&(t=Wi,n=b(),null!==n&&(Vi=t,n=Qn(n)),null===n?(Wi=t,t=n):t=n,null===t&&(t=Wi,n=[],null!==n&&(Vi=t,n=er()),null===n?(Wi=t,t=n):t=n)))))))))))))))),t}function w(){var t,n;if(Ki++,t=[],nr.test(e.charAt(Wi))?(n=e.charAt(Wi),Wi++):(n=null,0===Ki&&r(rr)),null!==n)for(;null!==n;)t.push(n),nr.test(e.charAt(Wi))?(n=e.charAt(Wi),Wi++):(n=null,0===Ki&&r(rr));else t=et;return Ki--,null===t&&(n=null,0===Ki&&r(tr)),t}function E(){var t,n,i,a;if(Ki++,t=Wi,39===e.charCodeAt(Wi)?(n=ar,Wi++):(n=null,0===Ki&&r(or)),null!==n){for(i=[],a=C();null!==a;)i.push(a),a=C();null!==i?(39===e.charCodeAt(Wi)?(a=ar,Wi++):(a=null,0===Ki&&r(or)),null!==a?(Vi=t,n=sr(i),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et)}else Wi=t,t=et;if(null===t)if(t=Wi,34===e.charCodeAt(Wi)?(n=lr,Wi++):(n=null,0===Ki&&r(ur)),null!==n){for(i=[],a=S();null!==a;)i.push(a),a=S();null!==i?(34===e.charCodeAt(Wi)?(a=lr,Wi++):(a=null,0===Ki&&r(ur)),null!==a?(Vi=t,n=sr(i),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et)}else Wi=t,t=et;return Ki--,null===t&&(n=null,0===Ki&&r(ir)),t}function C(){var t,n;return cr.test(e.charAt(Wi))?(t=e.charAt(Wi),Wi++):(t=null,0===Ki&&r(hr)),null===t&&(t=Wi,e.substr(Wi,2)===dr?(n=dr,Wi+=2):(n=null,0===Ki&&r(pr)),null!==n&&(Vi=t,n=fr()),null===n?(Wi=t,t=n):t=n,null===t&&(t=O())),t}function S(){var t,n;return mr.test(e.charAt(Wi))?(t=e.charAt(Wi),Wi++):(t=null,0===Ki&&r(vr)),null===t&&(t=Wi,e.substr(Wi,2)===gr?(n=gr,Wi+=2):(n=null,0===Ki&&r(_r)),null!==n&&(Vi=t,n=br()),null===n?(Wi=t,t=n):t=n,null===t&&(t=O())),t}function O(){var t,n,i,a,o,s,l,u;return t=Wi,e.substr(Wi,2)===yr?(n=yr,Wi+=2):(n=null,0===Ki&&r(wr)),null!==n&&(Vi=t,n=Er()),null===n?(Wi=t,t=n):t=n,null===t&&(t=Wi,e.substr(Wi,2)===Cr?(n=Cr,Wi+=2):(n=null,0===Ki&&r(Sr)),null!==n&&(Vi=t,n=Or()),null===n?(Wi=t,t=n):t=n,null===t&&(t=Wi,e.substr(Wi,2)===Pr?(n=Pr,Wi+=2):(n=null,0===Ki&&r(Tr)),null!==n&&(Vi=t,n=Dr()),null===n?(Wi=t,t=n):t=n,null===t&&(t=Wi,e.substr(Wi,2)===xr?(n=xr,Wi+=2):(n=null,0===Ki&&r(Mr)),null!==n&&(Vi=t,n=Ar()),null===n?(Wi=t,t=n):t=n,null===t&&(t=Wi,e.substr(Wi,2)===jr?(n=jr,Wi+=2):(n=null,0===Ki&&r(Lr)),null!==n&&(Vi=t,n=kr()),null===n?(Wi=t,t=n):t=n,null===t&&(t=Wi,e.substr(Wi,2)===Ir?(n=Ir,Wi+=2):(n=null,0===Ki&&r(Rr)),null!==n&&(Vi=t,n=zr()),null===n?(Wi=t,t=n):t=n,null===t&&(t=Wi,e.substr(Wi,2)===Nr?(n=Nr,Wi+=2):(n=null,0===Ki&&r(Br)),null!==n&&(Vi=t,n=Fr()),null===n?(Wi=t,t=n):t=n,null===t&&(t=Wi,e.substr(Wi,2)===qr?(n=qr,Wi+=2):(n=null,0===Ki&&r(Ur)),null!==n&&(Vi=t,n=Wr()),null===n?(Wi=t,t=n):t=n,null===t&&(t=Wi,e.substr(Wi,2)===Vr?(n=Vr,Wi+=2):(n=null,0===Ki&&r(Yr)),null!==n?(i=Wi,a=Wi,o=P(),null!==o?(s=P(),null!==s?(l=P(),null!==l?(u=P(),null!==u?(o=[o,s,l,u],a=o):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et),null!==a&&(a=e.substring(i,Wi)),i=a,null!==i?(Vi=t,n=Hr(i),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et))))))))),t}function P(){var t;return Gr.test(e.charAt(Wi))?(t=e.charAt(Wi),Wi++):(t=null,0===Ki&&r(Xr)),t}function T(){var t,n,i,a;return t=Wi,91===e.charCodeAt(Wi)?(n=cn,Wi++):(n=null,0===Ki&&r(hn)),null!==n?(i=F(),null!==i?(93===e.charCodeAt(Wi)?(a=dn,Wi++):(a=null,0===Ki&&r(pn)),null!==a?(Vi=t,n=Kr(),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et),null===t&&(t=Wi,91===e.charCodeAt(Wi)?(n=cn,Wi++):(n=null,0===Ki&&r(hn)),null!==n?(i=o(),null!==i?(93===e.charCodeAt(Wi)?(a=dn,Wi++):(a=null,0===Ki&&r(pn)),null!==a?(Vi=t,n=Jr(i),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et)),t}function D(){var t,n,i,a,o,s;return t=Wi,123===e.charCodeAt(Wi)?(n=mn,Wi++):(n=null,0===Ki&&r(vn)),null!==n?(i=F(),null!==i?(125===e.charCodeAt(Wi)?(a=gn,Wi++):(a=null,0===Ki&&r(_n)),null!==a?(o=F(),null!==o?(Vi=t,n=$r(),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et),null===t&&(t=Wi,123===e.charCodeAt(Wi)?(n=mn,Wi++):(n=null,0===Ki&&r(vn)),null!==n?(i=F(),null!==i?(a=x(),null!==a?(125===e.charCodeAt(Wi)?(o=gn,Wi++):(o=null,0===Ki&&r(_n)),null!==o?(s=F(),null!==s?(Vi=t,n=Zr(a),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et)),t}function x(){var t,n,i,a,o,s,l;if(t=Wi,n=M(),null!==n){for(i=[],a=Wi,44===e.charCodeAt(Wi)?(o=tt,Wi++):(o=null,0===Ki&&r(nt)),null!==o?(s=F(),null!==s?(l=M(),null!==l?(o=[o,s,l],a=o):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et);null!==a;)i.push(a),a=Wi,44===e.charCodeAt(Wi)?(o=tt,Wi++):(o=null,0===Ki&&r(nt)),null!==o?(s=F(),null!==s?(l=M(),null!==l?(o=[o,s,l],a=o):(Wi=a,a=et)):(Wi=a,a=et)):(Wi=a,a=et);null!==i?(Vi=t,n=Qr(n,i),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)}else Wi=t,t=et;return t}function M(){var t,n,i,o,s;return t=Wi,n=Wi,i=w(),null!==i&&(i=e.substring(n,Wi)),n=i,null!==n?(58===e.charCodeAt(Wi)?(i=pt,Wi++):(i=null,0===Ki&&r(ft)),null!==i?(o=F(),null!==o?(s=a(),null!==s?(Vi=t,n=ei(n,s),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et),t}function A(){var t,n,i;return Ki++,t=Wi,n=Wi,i=j(),null!==i&&(i=e.substring(n,Wi)),n=i,null!==n&&(Vi=t,n=ni(n)),null===n?(Wi=t,t=n):t=n,Ki--,null===t&&(n=null,0===Ki&&r(ti)),t}function j(){var e,t,n,r;return e=Wi,t=L(),null!==t?(n=k(),null!==n?(r=I(),null!==r?(t=[t,n,r],e=t):(Wi=e,e=et)):(Wi=e,e=et)):(Wi=e,e=et),null===e&&(e=Wi,t=L(),null!==t?(n=k(),null!==n?(t=[t,n],e=t):(Wi=e,e=et)):(Wi=e,e=et),null===e&&(e=Wi,t=L(),null!==t?(n=I(),null!==n?(t=[t,n],e=t):(Wi=e,e=et)):(Wi=e,e=et),null===e&&(e=L()))),e}function L(){var t,n,i,a;return t=Wi,n=B(),null!==n?(i=R(),null!==i?(n=[n,i],t=n):(Wi=t,t=et)):(Wi=t,t=et),null===t&&(t=N(),null===t&&(t=Wi,45===e.charCodeAt(Wi)?(n=xt,Wi++):(n=null,0===Ki&&r(Mt)),null!==n?(i=B(),null!==i?(a=R(),null!==a?(n=[n,i,a],t=n):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et),null===t&&(t=Wi,45===e.charCodeAt(Wi)?(n=xt,Wi++):(n=null,0===Ki&&r(Mt)),null!==n?(i=N(),null!==i?(n=[n,i],t=n):(Wi=t,t=et)):(Wi=t,t=et)))),t}function k(){var t,n,i;return t=Wi,46===e.charCodeAt(Wi)?(n=sn,Wi++):(n=null,0===Ki&&r(ln)),null!==n?(i=R(),null!==i?(n=[n,i],t=n):(Wi=t,t=et)):(Wi=t,t=et),t}function I(){var e,t,n;return e=Wi,t=z(),null!==t?(n=R(),null!==n?(t=[t,n],e=t):(Wi=e,e=et)):(Wi=e,e=et),e}function R(){var e,t;if(e=[],t=N(),null!==t)for(;null!==t;)e.push(t),t=N();else e=et;return e}function z(){var t,n,i;return t=Wi,ri.test(e.charAt(Wi))?(n=e.charAt(Wi),Wi++):(n=null,0===Ki&&r(ii)),null!==n?(ai.test(e.charAt(Wi))?(i=e.charAt(Wi),Wi++):(i=null,0===Ki&&r(oi)),null===i&&(i=ct),null!==i?(n=[n,i],t=n):(Wi=t,t=et)):(Wi=t,t=et),t}function N(){var t;return si.test(e.charAt(Wi))?(t=e.charAt(Wi),Wi++):(t=null,0===Ki&&r(li)),t}function B(){var t;return ui.test(e.charAt(Wi))?(t=e.charAt(Wi),Wi++):(t=null,0===Ki&&r(ci)),t}function F(){var e,t;for(e=[],t=q(),null===t&&(t=U());null!==t;)e.push(t),t=q(),null===t&&(t=U());return e}function q(){var t,n;return Ki++,di.test(e.charAt(Wi))?(t=e.charAt(Wi),Wi++):(t=null,0===Ki&&r(pi)),null===t&&(fi.test(e.charAt(Wi))?(t=e.charAt(Wi),Wi++):(t=null,0===Ki&&r(mi))),Ki--,null===t&&(n=null,0===Ki&&r(hi)),t}function U(){var t,n;return Ki++,gi.test(e.charAt(Wi))?(t=e.charAt(Wi),Wi++):(t=null,0===Ki&&r(_i)),Ki--,null===t&&(n=null,0===Ki&&r(vi)),t}function W(){var e,t,n,r;if(e=Wi,t=F(),null!==t){for(n=[],r=V();null!==r;)n.push(r),r=V();null!==n?(r=F(),null!==r?(Vi=e,t=bi(n),null===t?(Wi=e,e=t):e=t):(Wi=e,e=et)):(Wi=e,e=et)}else Wi=e,e=et;return e}function V(){var t,n,i,a,o,s,l,u,c,h;return t=Wi,64===e.charCodeAt(Wi)?(n=Rn,Wi++):(n=null,0===Ki&&r(zn)),null!==n?(i=Wi,a=H(),null!==a&&(a=e.substring(i,Wi)),i=a,null!==i?(a=F(),null!==a?(o=Y(),null===o&&(o=ct),null!==o?(123===e.charCodeAt(Wi)?(s=mn,Wi++):(s=null,0===Ki&&r(vn)),null!==s?(l=F(),null!==l?(u=G(),null!==u?(125===e.charCodeAt(Wi)?(c=gn,Wi++):(c=null,0===Ki&&r(_n)),null!==c?(h=F(),null!==h?(Vi=t,n=yi(i,o,u),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et),t}function Y(){var t,n,i,o,s,l,u,c;return t=Wi,60===e.charCodeAt(Wi)?(n=Tt,Wi++):(n=null,0===Ki&&r(Dt)),null===n&&(58===e.charCodeAt(Wi)?(n=pt,Wi++):(n=null,0===Ki&&r(ft))),null!==n?(i=F(),null!==i?(o=E(),null===o&&(o=ct),null!==o?(s=F(),null!==s?(l=Wi,u=Wi,Ki++,123===e.charCodeAt(Wi)?(c=mn,Wi++):(c=null,0===Ki&&r(vn)),Ki--,null===c?u=ct:(Wi=u,u=et),null!==u?(c=a(),null!==c?(u=[u,c],l=u):(Wi=l,l=et)):(Wi=l,l=et),null===l&&(l=ct),null!==l?(u=F(),null!==u?(Vi=t,n=wi(n,o,l),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et),null===t&&(t=Wi,n=F(),null!==n&&(Vi=t,n=Ei()),null===n?(Wi=t,t=n):t=n),t}function H(){var t,n,i,a,o,s,l;if(t=Wi,n=[],Ci.test(e.charAt(Wi))?(i=e.charAt(Wi),Wi++):(i=null,0===Ki&&r(Si)),null!==i)for(;null!==i;)n.push(i),Ci.test(e.charAt(Wi))?(i=e.charAt(Wi),Wi++):(i=null,0===Ki&&r(Si));else n=et;if(null!==n){if(i=[],a=Wi,58===e.charCodeAt(Wi)?(o=pt,Wi++):(o=null,0===Ki&&r(ft)),null!==o){if(s=[],Ci.test(e.charAt(Wi))?(l=e.charAt(Wi),Wi++):(l=null,0===Ki&&r(Si)),null!==l)for(;null!==l;)s.push(l),Ci.test(e.charAt(Wi))?(l=e.charAt(Wi),Wi++):(l=null,0===Ki&&r(Si));else s=et;null!==s?(o=[o,s],a=o):(Wi=a,a=et)}else Wi=a,a=et;for(;null!==a;)if(i.push(a),a=Wi,58===e.charCodeAt(Wi)?(o=pt,Wi++):(o=null,0===Ki&&r(ft)),null!==o){if(s=[],Ci.test(e.charAt(Wi))?(l=e.charAt(Wi),Wi++):(l=null,0===Ki&&r(Si)),null!==l)for(;null!==l;)s.push(l),Ci.test(e.charAt(Wi))?(l=e.charAt(Wi),Wi++):(l=null,0===Ki&&r(Si));else s=et;null!==s?(o=[o,s],a=o):(Wi=a,a=et)}else Wi=a,a=et;null!==i?(n=[n,i],t=n):(Wi=t,t=et)}else Wi=t,t=et;return t}function G(){var t,n,i,a,o,s,l,u,c;if(t=Wi,n=X(),null!==n)if(i=F(),null!==i){for(a=[],o=Wi,59===e.charCodeAt(Wi)?(s=Oi,Wi++):(s=null,0===Ki&&r(Pi)),null!==s?(l=F(),null!==l?(u=X(),null!==u?(c=F(),null!==c?(s=[s,l,u,c],o=s):(Wi=o,o=et)):(Wi=o,o=et)):(Wi=o,o=et)):(Wi=o,o=et);null!==o;)a.push(o),o=Wi,59===e.charCodeAt(Wi)?(s=Oi,Wi++):(s=null,0===Ki&&r(Pi)),null!==s?(l=F(),null!==l?(u=X(),null!==u?(c=F(),null!==c?(s=[s,l,u,c],o=s):(Wi=o,o=et)):(Wi=o,o=et)):(Wi=o,o=et)):(Wi=o,o=et);null!==a?(59===e.charCodeAt(Wi)?(o=Oi,Wi++):(o=null,0===Ki&&r(Pi)),null===o&&(o=ct),null!==o?(s=F(),null!==s?(Vi=t,n=rt(n,a),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et)}else Wi=t,t=et;else Wi=t,t=et;return null===t&&(t=Wi,n=X(),null!==n?(i=F(),null!==i?(59===e.charCodeAt(Wi)?(a=Oi,Wi++):(a=null,0===Ki&&r(Pi)),null===a&&(a=ct),null!==a?(o=F(),null!==o?(Vi=t,n=Ti(n),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et),null===t&&(t=Wi,n=F(),null!==n&&(Vi=t,n=lt()),null===n?(Wi=t,t=n):t=n)),t}function X(){var t,n,i,o,s,l,u,c,h,d,p,f,m,v,g,_,b;if(t=Wi,e.substr(Wi,2)===Di?(n=Di,Wi+=2):(n=null,0===Ki&&r(xi)),null===n&&(e.substr(Wi,6)===Mi?(n=Mi,Wi+=6):(n=null,0===Ki&&r(Ai))),null!==n?(32===e.charCodeAt(Wi)?(i=ji,Wi++):(i=null,0===Ki&&r(Li)),null!==i?(o=F(),null!==o?(s=Wi,l=w(),null!==l&&(l=e.substring(s,Wi)),s=l,null!==s?(l=F(),null!==l?(e.substr(Wi,2)===ki?(u=ki,Wi+=2):(u=null,0===Ki&&r(Ii)),null!==u?(c=F(),null!==c?(h=a(),null!==h?(d=F(),null!==d?(Vi=t,n=Ri(n,s,h),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et),null===t){if(t=Wi,n=a(),null!==n)if(i=F(),null!==i)if(58===e.charCodeAt(Wi)?(o=pt,Wi++):(o=null,0===Ki&&r(ft)),null===o&&(e.substr(Wi,3)===zi?(o=zi,Wi+=3):(o=null,0===Ki&&r(Ni)),null===o&&(e.substr(Wi,2)===Bi?(o=Bi,Wi+=2):(o=null,0===Ki&&r(Fi)))),null!==o)if(s=F(),null!==s)if(l=a(),null!==l)if(u=F(),null!==u){for(c=[],h=Wi,44===e.charCodeAt(Wi)?(d=tt,Wi++):(d=null,0===Ki&&r(nt)),null!==d?(p=F(),null!==p?(f=Wi,m=w(),null!==m&&(m=e.substring(f,Wi)),f=m,null!==f?(m=F(),null!==m?(58===e.charCodeAt(Wi)?(v=pt,Wi++):(v=null,0===Ki&&r(ft)),null!==v?(g=F(),null!==g?(_=a(),null!==_?(b=F(),null!==b?(d=[d,p,f,m,v,g,_,b],h=d):(Wi=h,h=et)):(Wi=h,h=et)):(Wi=h,h=et)):(Wi=h,h=et)):(Wi=h,h=et)):(Wi=h,h=et)):(Wi=h,h=et)):(Wi=h,h=et);null!==h;)c.push(h),h=Wi,44===e.charCodeAt(Wi)?(d=tt,Wi++):(d=null,0===Ki&&r(nt)),null!==d?(p=F(),null!==p?(f=Wi,m=w(),null!==m&&(m=e.substring(f,Wi)),f=m,null!==f?(m=F(),null!==m?(58===e.charCodeAt(Wi)?(v=pt,Wi++):(v=null,0===Ki&&r(ft)),null!==v?(g=F(),null!==g?(_=a(),null!==_?(b=F(),null!==b?(d=[d,p,f,m,v,g,_,b],h=d):(Wi=h,h=et)):(Wi=h,h=et)):(Wi=h,h=et)):(Wi=h,h=et)):(Wi=h,h=et)):(Wi=h,h=et)):(Wi=h,h=et)):(Wi=h,h=et);null!==c?(Vi=t,n=qi(n,o,l,c),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)}else Wi=t,t=et;else Wi=t,t=et;else Wi=t,t=et;else Wi=t,t=et;else Wi=t,t=et;else Wi=t,t=et;null===t&&(t=Wi,n=Wi,i=w(),null!==i&&(i=e.substring(n,Wi)),n=i,null!==n?(i=F(),null!==i?(o=a(),null!==o?(s=F(),null!==s?(Vi=t,n=Ui(n,o),null===n?(Wi=t,t=n):t=n):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et)):(Wi=t,t=et))}return t}var K,J=arguments.length>1?arguments[1]:{},$={expression:a,sheet:W},Z=a,Q="expression",et=null,tt=",",nt='","',rt=function(e,t){for(var n=[e],r=0;t.length>r;r++)n.push(t[r][2]);return n},it="(",at='"("',ot=")",st='")"',lt=function(){return[]},ut=function(e){return e},ct="",ht="?",dt='"?"',pt=":",ft='":"',mt=function(e,t){if(t){var n=t[2],r=t[6];return{type:"if",args:[e,n,r]}}return e},vt="||",gt='"||"',_t=function(e,t){for(var n=0;t.length>n;n++)e={type:Ji[t[n][1]],args:[e,t[n][3]]};return e},bt="&&",yt='"&&"',wt="<=>",Et='"<=>"',Ct="<=",St='"<="',Ot=">=",Pt='">="',Tt="<",Dt='"<"',xt="-",Mt='"-"',At=">",jt='">"',Lt="==",kt='"=="',It="!=",Rt='"!="',zt=function(e,t){if(t){var n=t[1],r=t[3];return"!="===n?{type:"not",args:[{type:"equals",args:[e,r]}]}:{type:Ji[n],args:[e,r]}}return e},Nt="+",Bt='"+"',Ft="*",qt='"*"',Ut="/",Wt='"/"',Vt="%",Yt='"%"',Ht="rem",Gt='"rem"',Xt="**",Kt='"**"',Jt="//",$t='"//"',Zt="%%",Qt='"%%"',en="??",tn='"??"',nn="!",rn='"!"',an=function(e,t){return{type:$i[e],args:[t]}},on=function(e,t){for(var n=0;t.length>n;n++)e=t[n](e);return e},sn=".",ln='"."',un=function(e){return e},cn="[",hn='"["',dn="]",pn='"]"',fn=function(e){return function(t){return{type:"property",args:[t,e]}}},mn="{",vn='"{"',gn="}",_n='"}"',bn=function(e,t){return Zi[e]?function(n){return{type:Zi[e],args:[n,t]}}:"value"===t.type?function(t){return{type:e,args:[t]}}:function(n){return{type:e,args:[{type:"mapBlock",args:[n,t]}]}}},yn=function(e,t){return function(n){return{type:e,args:[n].concat(t)}}},wn=function(e){return function(t){return{type:"property",args:[t,{type:"literal",value:+e.join("")}]}}},En=function(e){return function(t){return{type:"property",args:[t,{type:"literal",value:e}]}}},Cn=function(e){return function(t){return{type:"with",args:[t,e]}}},Sn="this",On='"this"',Pn=function(){return{type:"value"}},Tn="true",Dn='"true"',xn=function(){return{type:"literal",value:!0}},Mn="false",An='"false"',jn=function(){return{type:"literal",value:!1}},Ln="null",kn='"null"',In=function(){return{type:"literal",value:null}},Rn="@",zn='"@"',Nn=function(e){return{type:"component",label:e}},Bn="$",Fn='"$"',qn=function(e){return{type:"property",args:[{type:"parameters"},{type:"literal",value:e}]}},Un=function(){return{type:"parameters"}},Wn="#",Vn='"#"',Yn=function(e){return{type:"element",id:e}},Hn="&",Gn='"&"',Xn=function(e,t){return{type:e,args:t,inline:!0}},Kn="^",Jn='"^"',$n=function(e){return{type:"parent",args:[e]}},Zn=function(e){return e},Qn=function(e){return e({type:"value"})},er=function(){return{type:"value"}},tr="word",nr=/^[a-zA-Z_0-9\-]/,rr="[a-zA-Z_0-9\\-]",ir="string",ar="'",or='"\'"',sr=function(e){return{type:"literal",value:e.join("")}},lr='"',ur='"\\""',cr=/^[^'\\\0-\x1F]/,hr="[^'\\\\\\0-\\x1F]",dr="\\'",pr='"\\\\\'"',fr=function(){return"'"},mr=/^[^"\\\0-\x1F]/,vr='[^"\\\\\\0-\\x1F]',gr='\\"',_r='"\\\\\\""',br=function(){return'"'},yr="\\\\",wr='"\\\\\\\\"',Er=function(){return"\\"},Cr="\\/",Sr='"\\\\/"',Or=function(){return"/"},Pr="\\b",Tr='"\\\\b"',Dr=function(){return"\b"},xr="\\f",Mr='"\\\\f"',Ar=function(){return"\f"},jr="\\n",Lr='"\\\\n"',kr=function(){return"\n"},Ir="\\r",Rr='"\\\\r"',zr=function(){return"\r"},Nr="\\t",Br='"\\\\t"',Fr=function(){return"	"},qr="\\0",Ur='"\\\\0"',Wr=function(){return"\0"},Vr="\\u",Yr='"\\\\u"',Hr=function(e){return String.fromCharCode(parseInt(e,16))},Gr=/^[0-9a-fA-F]/,Xr="[0-9a-fA-F]",Kr=function(){return{type:"tuple",args:[]}},Jr=function(e){return{type:"tuple",args:e}},$r=function(){return{type:"record",args:[]}},Zr=function(e){return{type:"record",args:e}},Qr=function(e,t){var n={};n[e[0]]=e[1];for(var r=0;t.length>r;r++)n[t[r][2][0]]=t[r][2][1];return n},ei=function(e,t){return[e,t]},ti="number",ni=function(e){return{type:"literal",value:+e}},ri=/^[eE]/,ii="[eE]",ai=/^[+\-]/,oi="[+\\-]",si=/^[0-9]/,li="[0-9]",ui=/^[1-9]/,ci="[1-9]",hi="whitespace",di=/^[\t\x0B\f \xA0\uFEFF]/,pi="[\\t\\x0B\\f \\xA0\\uFEFF]",fi=/^[ \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000]/,mi="[ \\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000]",vi="line terminator",gi=/^[\n\r\u2028\u2029]/,_i="[\\n\\r\\u2028\\u2029]",bi=function(e){return{type:"sheet",blocks:e}},yi=function(e,t,n){return{type:"block",connection:t.connection,module:t.module,exports:t.exports,label:e,statements:n}},wi=function(e,t,n){return{connection:{"<":"prototype",":":"object"}[e],module:t&&t.value,exports:""!==n?n[1]:void 0}},Ei=function(){return{}},Ci=/^[a-zA-Z_0-9]/,Si="[a-zA-Z_0-9]",Oi=";",Pi='";"',Ti=function(e){return[e]},Di="on",xi='"on"',Mi="before",Ai='"before"',ji=" ",Li='" "',ki="->",Ii='"->"',Ri=function(e,t,n){return{type:"event",when:e,event:t,listener:n}},zi="<->",Ni='"<->"',Bi="<-",Fi='"<-"',qi=function(e,t,n,r){var i={type:Qi[t],args:[e,n]};if(r.length){for(var a={},o=0;r.length>o;o++)a[r[o][2]]=r[o][6];i.descriptor=a}return i},Ui=function(e,t){return{type:"unit",name:e,value:t}},Wi=0,Vi=0,Yi=0,Hi={line:1,column:1,seenCR:!1},Gi=0,Xi=[],Ki=0;if("startRule"in J){if(!(J.startRule in $))throw Error("Can't start parsing from rule \""+J.startRule+'".');Z=$[J.startRule]}var Ji={"**":"pow","//":"root","%%":"log","*":"mul","/":"div","%":"mod",rem:"rem","+":"add","-":"sub","<":"lt",">":"gt","<=":"le",">=":"ge","==":"equals","<=>":"compare","??":"default","&&":"and","||":"or","<-":"bind","<->":"bind2",":":"assign"},$i={"+":"toNumber","-":"neg","!":"not","^":"parent"},Zi={map:"mapBlock",filter:"filterBlock",some:"someBlock",every:"everyBlock",sorted:"sortedBlock",sortedSet:"sortedSetBlock",group:"groupBlock",groupMap:"groupMapBlock",min:"minBlock",max:"maxBlock"},Qi={":":"assign","<-":"bind","<->":"bind2"};if(K=Z(),null!==K&&Wi===e.length)return K;throw i(Xi),Vi=Math.max(Wi,Gi),new t(Xi,e.length>Vi?e.charAt(Vi):null,Vi,n(Vi).line,n(Vi).column)}return e(t,Error),{SyntaxError:t,parse:n}}();