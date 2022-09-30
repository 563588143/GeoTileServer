define(["exports","./Matrix2-91d5b6af","./when-4bbc8319","./RuntimeError-346a3079","./EllipsoidGeodesic-6a52e412","./EllipsoidRhumbLine-447d6334","./IntersectionTests-26599c5e","./ComponentDatatype-f194c48b","./Plane-4f333bc4"],(function(a,e,r,i,t,n,o,s,c){"use strict";var l={numberOfPoints:function(a,r,i){var t=e.Cartesian3.distance(a,r);return Math.ceil(t/i)},numberOfPointsRhumbLine:function(a,e,r){var i=Math.pow(a.longitude-e.longitude,2)+Math.pow(a.latitude-e.latitude,2);return Math.max(1,Math.ceil(Math.sqrt(i/(r*r))))}},u=new e.Cartographic;l.extractHeights=function(a,e){for(var r=a.length,i=new Array(r),t=0;t<r;t++){var n=a[t];i[t]=e.cartesianToCartographic(n,u).height}return i};var h=new e.Matrix4,f=new e.Cartesian3,p=new e.Cartesian3,g=new c.Plane(e.Cartesian3.UNIT_X,0),d=new e.Cartesian3,C=new c.Plane(e.Cartesian3.UNIT_X,0),v=new e.Cartesian3,m=new e.Cartesian3,w=[];function P(a,e,r){var i,t=w;if(t.length=a,e===r){for(i=0;i<a;i++)t[i]=e;return t}var n=(r-e)/a;for(i=0;i<a;i++){var o=e+i*n;t[i]=o}return t}var T=new e.Cartographic,y=new e.Cartographic,E=new e.Cartesian3,A=new e.Cartesian3,b=new e.Cartesian3,R=new t.EllipsoidGeodesic,D=new n.EllipsoidRhumbLine;function M(a,r,i,t,n,o,s,c){var u=t.scaleToGeodeticSurface(a,A),h=t.scaleToGeodeticSurface(r,b),f=l.numberOfPoints(a,r,i),p=t.cartesianToCartographic(u,T),g=t.cartesianToCartographic(h,y),d=P(f,n,o);R.setEndPoints(p,g);var C=R.surfaceDistance/f,v=c;p.height=n;var m=t.cartographicToCartesian(p,E);e.Cartesian3.pack(m,s,v),v+=3;for(var w=1;w<f;w++){var D=R.interpolateUsingSurfaceDistance(w*C,y);D.height=d[w],m=t.cartographicToCartesian(D,E),e.Cartesian3.pack(m,s,v),v+=3}return v}function S(a,r,i,t,o,s,c,u){var h=t.cartesianToCartographic(a,T),f=t.cartesianToCartographic(r,y),p=l.numberOfPointsRhumbLine(h,f,i);h.height=0,f.height=0;var g=P(p,o,s);D.ellipsoid.equals(t)||(D=new n.EllipsoidRhumbLine(void 0,void 0,t)),D.setEndPoints(h,f);var d=D.surfaceDistance/p,C=u;h.height=o;var v=t.cartographicToCartesian(h,E);e.Cartesian3.pack(v,c,C),C+=3;for(var m=1;m<p;m++){var w=D.interpolateUsingSurfaceDistance(m*d,y);w.height=g[m],v=t.cartographicToCartesian(w,E),e.Cartesian3.pack(v,c,C),C+=3}return C}l.wrapLongitude=function(a,i){var t=[],n=[];if(r.defined(a)&&a.length>0){i=r.defaultValue(i,e.Matrix4.IDENTITY);var s=e.Matrix4.inverseTransformation(i,h),l=e.Matrix4.multiplyByPoint(s,e.Cartesian3.ZERO,f),u=e.Cartesian3.normalize(e.Matrix4.multiplyByPointAsVector(s,e.Cartesian3.UNIT_Y,p),p),w=c.Plane.fromPointNormal(l,u,g),P=e.Cartesian3.normalize(e.Matrix4.multiplyByPointAsVector(s,e.Cartesian3.UNIT_X,d),d),T=c.Plane.fromPointNormal(l,P,C),y=1;t.push(e.Cartesian3.clone(a[0]));for(var E=t[0],A=a.length,b=1;b<A;++b){var R=a[b];if(c.Plane.getPointDistance(T,E)<0||c.Plane.getPointDistance(T,R)<0){var D=o.IntersectionTests.lineSegmentPlane(E,R,w,v);if(r.defined(D)){var M=e.Cartesian3.multiplyByScalar(u,5e-9,m);c.Plane.getPointDistance(w,E)<0&&e.Cartesian3.negate(M,M),t.push(e.Cartesian3.add(D,M,new e.Cartesian3)),n.push(y+1),e.Cartesian3.negate(M,M),t.push(e.Cartesian3.add(D,M,new e.Cartesian3)),y=1}}t.push(e.Cartesian3.clone(a[b])),y++,E=R}n.push(y)}return{positions:t,lengths:n}},l.generateArc=function(a){r.defined(a)||(a={});var t=a.positions;if(!r.defined(t))throw new i.DeveloperError("options.positions is required.");var n=t.length,o=r.defaultValue(a.ellipsoid,e.Ellipsoid.WGS84),c=r.defaultValue(a.height,0),u=Array.isArray(c);if(n<1)return[];if(1===n){var h=o.scaleToGeodeticSurface(t[0],A);if(0!==(c=u?c[0]:c)){var f=o.geodeticSurfaceNormal(h,E);e.Cartesian3.multiplyByScalar(f,c,f),e.Cartesian3.add(h,f,h)}return[h.x,h.y,h.z]}var p=a.minDistance;if(!r.defined(p)){var g=r.defaultValue(a.granularity,s.CesiumMath.RADIANS_PER_DEGREE);p=s.CesiumMath.chordLength(g,o.maximumRadius)}var d,C=0;for(d=0;d<n-1;d++)C+=l.numberOfPoints(t[d],t[d+1],p);var v=3*(C+1),m=new Array(v),P=0;for(d=0;d<n-1;d++){P=M(t[d],t[d+1],p,o,u?c[d]:c,u?c[d+1]:c,m,P)}w.length=0;var y=t[n-1],b=o.cartesianToCartographic(y,T);b.height=u?c[n-1]:c;var R=o.cartographicToCartesian(b,E);return e.Cartesian3.pack(R,m,v-3),m};var x=new e.Cartographic,N=new e.Cartographic;l.generateRhumbArc=function(a){r.defined(a)||(a={});var t=a.positions;if(!r.defined(t))throw new i.DeveloperError("options.positions is required.");var n=t.length,o=r.defaultValue(a.ellipsoid,e.Ellipsoid.WGS84),c=r.defaultValue(a.height,0),u=Array.isArray(c);if(n<1)return[];if(1===n){var h=o.scaleToGeodeticSurface(t[0],A);if(0!==(c=u?c[0]:c)){var f=o.geodeticSurfaceNormal(h,E);e.Cartesian3.multiplyByScalar(f,c,f),e.Cartesian3.add(h,f,h)}return[h.x,h.y,h.z]}var p,g,d=r.defaultValue(a.granularity,s.CesiumMath.RADIANS_PER_DEGREE),C=0,v=o.cartesianToCartographic(t[0],x);for(p=0;p<n-1;p++)g=o.cartesianToCartographic(t[p+1],N),C+=l.numberOfPointsRhumbLine(v,g,d),v=e.Cartographic.clone(g,x);var m=3*(C+1),P=new Array(m),y=0;for(p=0;p<n-1;p++){y=S(t[p],t[p+1],d,o,u?c[p]:c,u?c[p+1]:c,P,y)}w.length=0;var b=t[n-1],R=o.cartesianToCartographic(b,T);R.height=u?c[n-1]:c;var D=o.cartographicToCartesian(R,E);return e.Cartesian3.pack(D,P,m-3),P},l.generateCartesianArc=function(a){for(var r=l.generateArc(a),i=r.length/3,t=new Array(i),n=0;n<i;n++)t[n]=e.Cartesian3.unpack(r,3*n);return t},l.generateCartesianRhumbArc=function(a){for(var r=l.generateRhumbArc(a),i=r.length/3,t=new Array(i),n=0;n<i;n++)t[n]=e.Cartesian3.unpack(r,3*n);return t},a.PolylinePipeline=l}));
//# sourceMappingURL=PolylinePipeline-3cab578f.js.map
