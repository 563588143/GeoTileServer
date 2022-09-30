define(["exports","./GeometryOffsetAttribute-6a692b56","./Transforms-86b6fa28","./Matrix2-91d5b6af","./ComponentDatatype-f194c48b","./when-4bbc8319","./RuntimeError-346a3079","./GeometryAttribute-e0d0d297","./GeometryAttributes-7827a6c2","./IndexDatatype-ee69f1fd"],(function(e,t,i,r,a,o,n,s,u,m){"use strict";var f=new r.Cartesian3(1,1,1),d=Math.cos,l=Math.sin;function c(e){e=o.defaultValue(e,o.defaultValue.EMPTY_OBJECT);var i=o.defaultValue(e.radii,f),s=o.defaultValue(e.innerRadii,i),u=o.defaultValue(e.minimumClock,0),m=o.defaultValue(e.maximumClock,a.CesiumMath.TWO_PI),d=o.defaultValue(e.minimumCone,0),l=o.defaultValue(e.maximumCone,a.CesiumMath.PI),c=Math.round(o.defaultValue(e.stackPartitions,10)),p=Math.round(o.defaultValue(e.slicePartitions,8)),C=Math.round(o.defaultValue(e.subdivisions,128));if(c<1)throw new n.DeveloperError("options.stackPartitions cannot be less than 1");if(p<0)throw new n.DeveloperError("options.slicePartitions cannot be less than 0");if(C<0)throw new n.DeveloperError("options.subdivisions must be greater than or equal to zero.");if(o.defined(e.offsetAttribute)&&e.offsetAttribute===t.GeometryOffsetAttribute.TOP)throw new n.DeveloperError("GeometryOffsetAttribute.TOP is not a supported options.offsetAttribute for this geometry.");this._radii=r.Cartesian3.clone(i),this._innerRadii=r.Cartesian3.clone(s),this._minimumClock=u,this._maximumClock=m,this._minimumCone=d,this._maximumCone=l,this._stackPartitions=c,this._slicePartitions=p,this._subdivisions=C,this._offsetAttribute=e.offsetAttribute,this._workerName="createEllipsoidOutlineGeometry"}c.packedLength=2*r.Cartesian3.packedLength+8,c.pack=function(e,t,i){if(!o.defined(e))throw new n.DeveloperError("value is required");if(!o.defined(t))throw new n.DeveloperError("array is required");return i=o.defaultValue(i,0),r.Cartesian3.pack(e._radii,t,i),i+=r.Cartesian3.packedLength,r.Cartesian3.pack(e._innerRadii,t,i),i+=r.Cartesian3.packedLength,t[i++]=e._minimumClock,t[i++]=e._maximumClock,t[i++]=e._minimumCone,t[i++]=e._maximumCone,t[i++]=e._stackPartitions,t[i++]=e._slicePartitions,t[i++]=e._subdivisions,t[i]=o.defaultValue(e._offsetAttribute,-1),t};var p=new r.Cartesian3,C=new r.Cartesian3,h={radii:p,innerRadii:C,minimumClock:void 0,maximumClock:void 0,minimumCone:void 0,maximumCone:void 0,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0,offsetAttribute:void 0};c.unpack=function(e,t,i){if(!o.defined(e))throw new n.DeveloperError("array is required");t=o.defaultValue(t,0);var a=r.Cartesian3.unpack(e,t,p);t+=r.Cartesian3.packedLength;var s=r.Cartesian3.unpack(e,t,C);t+=r.Cartesian3.packedLength;var u=e[t++],m=e[t++],f=e[t++],d=e[t++],l=e[t++],_=e[t++],v=e[t++],b=e[t];return o.defined(i)?(i._radii=r.Cartesian3.clone(a,i._radii),i._innerRadii=r.Cartesian3.clone(s,i._innerRadii),i._minimumClock=u,i._maximumClock=m,i._minimumCone=f,i._maximumCone=d,i._stackPartitions=l,i._slicePartitions=_,i._subdivisions=v,i._offsetAttribute=-1===b?void 0:b,i):(h.minimumClock=u,h.maximumClock=m,h.minimumCone=f,h.maximumCone=d,h.stackPartitions=l,h.slicePartitions=_,h.subdivisions=v,h.offsetAttribute=-1===b?void 0:b,new c(h))},c.createGeometry=function(e){var n=e._radii;if(!(n.x<=0||n.y<=0||n.z<=0)){var f=e._innerRadii;if(!(f.x<=0||f.y<=0||f.z<=0)){var c=e._minimumClock,p=e._maximumClock,C=e._minimumCone,h=e._maximumCone,_=e._subdivisions,v=r.Ellipsoid.fromCartesian3(n),b=e._slicePartitions+1,y=e._stackPartitions+1;(b=Math.round(b*Math.abs(p-c)/a.CesiumMath.TWO_PI))<2&&(b=2),(y=Math.round(y*Math.abs(h-C)/a.CesiumMath.PI))<2&&(y=2);var k=0,A=1,w=f.x!==n.x||f.y!==n.y||f.z!==n.z,P=!1,x=!1;w&&(A=2,C>0&&(P=!0,k+=b),h<Math.PI&&(x=!0,k+=b));var E,D,M,g,G=_*A*(y+b),O=new Float64Array(3*G),V=2*(G+k-(b+y)*A),T=m.IndexDatatype.createTypedArray(G,V),z=0,I=new Array(y),L=new Array(y);for(E=0;E<y;E++)g=C+E*(h-C)/(y-1),I[E]=l(g),L[E]=d(g);var R=new Array(_),N=new Array(_);for(E=0;E<_;E++)M=c+E*(p-c)/(_-1),R[E]=l(M),N[E]=d(M);for(E=0;E<y;E++)for(D=0;D<_;D++)O[z++]=n.x*I[E]*N[D],O[z++]=n.y*I[E]*R[D],O[z++]=n.z*L[E];if(w)for(E=0;E<y;E++)for(D=0;D<_;D++)O[z++]=f.x*I[E]*N[D],O[z++]=f.y*I[E]*R[D],O[z++]=f.z*L[E];for(I.length=_,L.length=_,E=0;E<_;E++)g=C+E*(h-C)/(_-1),I[E]=l(g),L[E]=d(g);for(R.length=b,N.length=b,E=0;E<b;E++)M=c+E*(p-c)/(b-1),R[E]=l(M),N[E]=d(M);for(E=0;E<_;E++)for(D=0;D<b;D++)O[z++]=n.x*I[E]*N[D],O[z++]=n.y*I[E]*R[D],O[z++]=n.z*L[E];if(w)for(E=0;E<_;E++)for(D=0;D<b;D++)O[z++]=f.x*I[E]*N[D],O[z++]=f.y*I[E]*R[D],O[z++]=f.z*L[E];for(z=0,E=0;E<y*A;E++){var q=E*_;for(D=0;D<_-1;D++)T[z++]=q+D,T[z++]=q+D+1}var B=y*_*A;for(E=0;E<b;E++)for(D=0;D<_-1;D++)T[z++]=B+E+D*b,T[z++]=B+E+(D+1)*b;if(w)for(B=y*_*A+b*_,E=0;E<b;E++)for(D=0;D<_-1;D++)T[z++]=B+E+D*b,T[z++]=B+E+(D+1)*b;if(w){var S=y*_*A,U=S+_*b;if(P)for(E=0;E<b;E++)T[z++]=S+E,T[z++]=U+E;if(x)for(S+=_*b-b,U+=_*b-b,E=0;E<b;E++)T[z++]=S+E,T[z++]=U+E}var F=new u.GeometryAttributes({position:new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:O})});if(o.defined(e._offsetAttribute)){var W=O.length,Y=new Uint8Array(W/3),J=e._offsetAttribute===t.GeometryOffsetAttribute.NONE?0:1;t.arrayFill(Y,J),F.applyOffset=new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:Y})}return new s.Geometry({attributes:F,indices:T,primitiveType:s.PrimitiveType.LINES,boundingSphere:i.BoundingSphere.fromEllipsoid(v),offsetAttribute:e._offsetAttribute})}}},e.EllipsoidOutlineGeometry=c}));
//# sourceMappingURL=EllipsoidOutlineGeometry-ee987302.js.map