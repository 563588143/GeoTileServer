var _0x540b4e=_0x5a3b;function _0x5a3b(t,r){var e=_0x484d();return(_0x5a3b=function(t,r){return e[t-=314]})(t,r)}function _0x484d(){var t=["2rfdFBe","getOctEncodedNormal","30OyXqGI","getHeight","defineProperties","BITS12","position3DAndHeight","multiplyByScalar","UNIT_SPHERE","16219IsWlKz","Ellipsoid","9Tfpseq","floor","_calculateStrideAndOffsets","3848201wrJGDo","./ComponentDatatype-333fe9a1","_distanceToLimbInScaledSpaceSquared","fromCartesian3","1104102PHvAkt","encode","fromRadians","./Transforms-700082a4","168JQUnIb","3654027THHloX","divideByScalar","exaggerationRelativeHeight","decodeTextureCoordinates","63UpGNov","11NpKwLd","longitude","624rAacHt","988ALLITx","decodePosition","exaggeration","isScaledSpacePointVisible","length","33073890WMGbCZ","isPointVisible","minimumHeight","setTranslation","2XqDxsx","magnitudeSquared","84ADbwKV","NONE","cameraPosition","14944088kvFJFe","55OadDxH","stride","48oTFMlN","clone","_cameraPositionInScaledSpace","TerrainEncoding","104125VSNKre","1692BiHPzP","transformPositionToScaledSpace","maximumHeight","center","multiply","subsample","sqrt","./Matrix2-a7a88f55","computeHorizonCullingPoint","BoundingSphere","188mPbAEv","multiplyByPoint","subtract","2207316slGLFM","hasGeodeticSurfaceNormals","exports","addGeodeticSurfaceNormals","computeHorizonCullingPointFromVertices","CesiumMath","magnitude","1420084ISZRKS","387927ymzwGe","shift","geodeticSurfaceNormal","7XijQup","getSizeInBytes","11610gRsgAD","9306044HRQdSj","decodeHeight","compressed0","matrix","quantization","dot","clamp","./AttributeCompression-32588b8d","ZERO","defined","maximumComponent","computeHorizonCullingPointPossiblyUnderEllipsoid","4103oyDmQG","124BYoBxQ","_ellipsoid","7169YaEJvY","273894bpmLhY","1140440ksIMeo","hasVertexNormals","computeHorizonCullingPointFromRectangle","./when-17d33ba2","AttributeCompression","defaultValue","337500uPdSxa","latitude","1600977vwPxNd","1970570XDWdwT","fromTranslation","562399tqCLyE","29229rKmqNZ","Cartesian2","pow","11140630YqFHKu","210BcAtlX","Matrix4","67582JHiCZy","_cameraPosition","_offsetVertexNormal","fromPoints","hasWebMercatorT","4110888Dtrhcw","push","removeGeodeticSurfaceNormals","normalize","691008cfobIQ","7253104FYdUSp","_offsetGeodeticSurfaceNormal","octPackFloat","fromScale","computeHorizonCullingPointFromVerticesPossiblyUnderEllipsoid","prototype","getAttributes","equals","fromElements","_0x31781d","9uGZWis","radii","Rectangle","EllipsoidalOccluder","toScaledENU","455789veMXez","getAttributeLocations","Cartesian3","max","getPosition","fromScaledENU"];return(_0x484d=function(){return t})()}(function(t,r){for(var e=_0x5a3b,i=_0x484d();;)try{if(293146===-parseInt(e(453))/1*(-parseInt(e(353))/2)+-parseInt(e(422))/3*(parseInt(e(376))/4)+-parseInt(e(419))/5+-parseInt(e(409))/6+-parseInt(e(322))/7*(parseInt(e(343))/8)+parseInt(e(366))/9*(-parseInt(e(426))/10)+-parseInt(e(359))/11*(-parseInt(e(379))/12))break;i.push(i.shift())}catch(t){i.push(i.shift())}})(),define([_0x540b4e(381),_0x540b4e(334),_0x540b4e(373),"./RuntimeError-26d8918f",_0x540b4e(413),_0x540b4e(400),_0x540b4e(328)],(function(t,r,e,i,n,a,s){"use strict";var o=_0x540b4e,u=z;function c(t,r){var i=_0x5a3b,a=z;this[a(408)]=t,this[a(392)]=new(e[i(455)]),this._cameraPositionInScaledSpace=new(e[i(455)]),this[a(379)]=0,n.defined(r)&&(this[a(396)]=r)}!function(t,r){for(var e=_0x5a3b,i=z,n=t();;)try{if(956276===-parseInt(i(384))/1*(parseInt(i(411))/2)+-parseInt(i(399))/3+-parseInt(i(402))/4*(parseInt(i(398))/5)+-parseInt(i(412))/6+parseInt(i(404))/7+parseInt(i(391))/8*(-parseInt(i(386))/9)+-parseInt(i(375))/10*(-parseInt(i(401))/11))break;n[e(434)](n[e(388)]())}catch(t){n[e(434)](n[e(388)]())}}(d),Object[o(317)](c[u(406)],{ellipsoid:{get:function(){return this._ellipsoid}},cameraPosition:{get:function(){return this[u(392)]},set:function(t){var r=o,i=u,n=this[i(408)][i(382)](t,this[i(388)]),a=e.Cartesian3[i(397)](n)-1;e[r(455)][r(362)](t,this[i(392)]),this[i(388)]=n,this[r(329)]=a}}});var h=new(e[o(455)]);c[o(443)][o(350)]=function(t){var r=u;return g(this._ellipsoid[r(382)](t,h),this[r(388)],this[r(379)])},c[u(406)][u(374)]=function(t){var r=o;return g(t,this[u(388)],this[r(329)])};var f=new(e[o(455)]);c.prototype[u(377)]=function(t,r){var e,i,a=o,s=u,c=this[s(408)];return n[a(402)](r)&&r<0&&c[s(373)]>-r?((i=f).x=this[s(392)].x/(c[s(405)].x+r),i.y=this[s(392)].y/(c[s(405)].y+r),i.z=this[a(429)].z/(c[a(449)].z+r),e=i.x*i.x+i.y*i.y+i.z*i.z-1):(i=this[s(388)],e=this[s(379)]),g(t,i,e)},c[o(443)][o(374)]=function(t,r,e){return x(this._ellipsoid,t,r,e)};var p=e[o(323)][u(385)](e[o(323)][u(407)]);function d(){var t=o,r=["magnitudeSquared","5HUNbKC","3742731necMxn",t(372),t(341),t(386),t(348),t(418),t(449),t(443),t(321),"_ellipsoid",t(436),t(456),"4xUFQaJ",t(416),t(404),t(320),t(378),"minimumRadius",t(347),t(349),t(337),"isScaledSpacePointVisiblePossiblyUnderEllipsoid",t(446),t(329),t(330),t(445),t(367),t(369),t(408),t(362),t(324),"cross",t(363),t(385),t(398),t(438),t(429),t(442),t(383),t(431),t(357)];return(d=function(){return r})()}c.prototype[u(413)]=function(t,r,e,i){return x(m(this[o(407)],e,p),t,r,i)},c[u(406)][u(394)]=function(t,r,e,i,n){return y(this[u(408)],t,r,e,i,n)},c[u(406)][u(393)]=function(t,r,e,i,n,a){return y(m(this[u(408)],n,p),t,r,e,i,a)};var l=[];c.prototype[o(412)]=function(t,i,n){var a=o,s=u,c=e[a(450)][a(371)](t,i,0,l),h=r[a(375)][s(395)](c);if(!(e[a(455)][s(389)](h[s(383)])<.1*i[s(373)]))return this[a(374)](h[s(383)],c,n)};var v=new e.Cartesian3;function m(t,r,i){var a=o,s=u;if(n.defined(r)&&r<0&&t[s(373)]>-r){var c=e[a(455)][s(378)](t[s(405)].x+r,t.radii.y+r,t[a(449)].z+r,v);t=e[a(323)][s(380)](c,i)}return t}function x(t,r,i,a){var s=o,c=u;!n[s(402)](a)&&(a=new(e[s(455)]));for(var h=N(t,r),f=0,p=0,d=i[c(403)];p<d;++p){var l=S(t,i[p],h);if(l<0)return;f=Math[c(410)](f,l)}return P(h,f,a)}var I=new(e[o(455)]);function y(t,r,i,a,s,c){var h=o,f=u;!n[h(402)](c)&&(c=new e.Cartesian3),a=n[h(415)](a,3),s=n[h(415)](s,e.Cartesian3[h(401)]);for(var p=N(t,r),d=0,l=0,v=i.length;l<v;l+=a){I.x=i[l]+s.x,I.y=i[l+1]+s.y,I.z=i[l+2]+s.z;var m=S(t,I,p);if(m<0)return;d=Math[f(410)](d,m)}return P(p,d,c)}function g(t,r,i){var n=o,a=u,s=r,c=i,f=e.Cartesian3[a(372)](t,s,h),p=-e[n(455)][a(390)](f,s);return!(c<0?p>0:p>c&&p*p/e[n(455)][a(397)](f)>c)}var b=new(e[o(455)]),C=new(e[o(455)]);function S(t,r,i){var n=o,a=u,s=t[a(382)](r,b),c=e[n(455)][n(354)](s),h=Math[a(400)](c),f=e.Cartesian3[a(376)](s,h,C);c=Math[a(410)](1,c);var p=1/(h=Math[a(410)](1,h));return 1/(e[n(455)][n(398)](f,i)*p-e[n(455)][a(389)](e.Cartesian3[a(387)](f,i,f))*(Math[a(400)](c-1)*p))}function z(t,r){var e=d();return(z=function(t,r){return e[t-=371]})(t,r)}function P(t,r,i){var n=u;if(!(r<=0||r===1/0||r!=r))return e[o(455)][n(371)](t,r,i)}var w=new e.Cartesian3;function N(t,r){var i=o,n=u;return e[i(455)][n(381)](r,e[i(455)][i(401)])?r:(t[n(382)](r,w),e[i(455)][n(409)](w,w))}var _=E;!function(t,r){for(var e=o,i=E,n=t();;)try{if(943220===-parseInt(i(221))/1*(-parseInt(i(219))/2)+parseInt(i(233))/3+parseInt(i(217))/4*(parseInt(i(226))/5)+parseInt(i(229))/6*(parseInt(i(218))/7)+-parseInt(i(230))/8+parseInt(i(222))/9*(parseInt(i(224))/10)+-parseInt(i(220))/11*(parseInt(i(216))/12))break;n.push(n[e(388)]())}catch(t){n[e(434)](n.shift())}}(T);var M={};function T(){var t=o,r=["310dRZfPo","height","246820eOoeBk",t(316),t(333),"1118400OhGIrA",t(358),t(417),t(457),t(433),t(361),t(406),t(390),"1772074sbkPcN",t(393),t(459),t(387),t(342)];return(T=function(){return r})()}M.getHeight=function(t,r,e){return(t-e)*r+e};var H=new(e[o(455)]);function E(t,r){var e=T();return(E=function(t,r){return e[t-=216]})(t,r)}function A(t,r){var e=B();return(A=function(t,r){return e[t-=489]})(t,r)}function B(){var t=o,r=[t(421),t(437),t(327),t(340),t(365),"2076789cgWoWU",t(410),t(355),t(331)];return(B=function(){return r})()}M[_(232)]=function(t,r,i,n,a){var s=_,o=r.cartesianToCartographic(t,H),u=M[s(227)](o[s(225)],i,n);return e.Cartesian3[s(228)](o[s(223)],o[s(231)],u,r,a)},function(t,r){for(var e=o,i=A,n=t();;)try{if(661139===-parseInt(i(491))/1+-parseInt(i(490))/2+parseInt(i(496))/3+-parseInt(i(492))/4+parseInt(i(495))/5*(-parseInt(i(489))/6)+parseInt(i(493))/7+-parseInt(i(497))/8*(-parseInt(i(494))/9))break;n[e(434)](n[e(388)]())}catch(t){n[e(434)](n[e(388)]())}}(B);var G=Object.freeze({NONE:0,BITS12:1}),O=X;function q(){var t=o,r=[t(368),t(326),t(456),t(369),t(336),t(394),t(444),t(403),"inverseTransformation",t(319),t(382),t(396),t(448),t(380),t(360),"getExaggeratedPosition",t(362),"FLOAT","add",t(314),t(441),"compressTextureCoordinates",t(346),"length",t(439),t(428),"clamp",t(352),t(432),t(425),"decompressTextureCoordinates",t(440),"288480JAJoEz",t(424),t(378),t(420),t(315),t(392),t(377),"multiply",t(345),t(344),"decodeGeodeticSurfaceNormal","negate",t(458),t(452),"BITS12",t(356),"93228TAYKmU",t(411),t(316),"minimum","decodeWebMercatorT",t(446),t(351),"prototype",t(338),"quantization",t(389),"6227672AfnrmC",t(401),t(430),t(405),t(335),t(391)];return(q=function(){return r})()}!function(t,r){for(var e=o,i=X,n=t();;)try{if(831166===-parseInt(i(461))/1*(parseInt(i(472))/2)+-parseInt(i(440))/3+-parseInt(i(477))/4*(parseInt(i(473))/5)+parseInt(i(468))/6*(-parseInt(i(434))/7)+parseInt(i(430))/8+-parseInt(i(448))/9*(-parseInt(i(465))/10)+-parseInt(i(433))/11*(-parseInt(i(484))/12))break;n[e(434)](n.shift())}catch(t){n[e(434)](n[e(388)]())}}(q);var F=new e.Cartesian3,U=new(e[o(455)]),D=new(e[o(423)]),R=new(e[o(427)]),k=new(e[o(427)]),V=Math[O(469)](2,12);function K(t,r,i,a,s,u,c,h,f,p){var d,l,v=o,m=O,x=G[v(356)];if(n[v(402)](r)&&n[v(402)](i)&&n[v(402)](a)&&n[v(402)](s)){var I=r[m(422)],y=r.maximum,g=e[v(455)][m(470)](y,I,U),b=a-i;x=Math[m(438)](e[v(455)][m(443)](g),b)<V-1?G[v(318)]:G[m(483)],d=e.Matrix4[m(444)](s,new(e[v(427)]));var C=e.Cartesian3[m(479)](I,F);e[v(427)][m(475)](e.Matrix4[m(471)](C,R),d,d);var S=F;S.x=1/g.x,S.y=1/g.y,S.z=1/g.z,e[v(427)][m(475)](e[v(427)][m(456)](S,R),d,d),l=e[v(427)][m(452)](s),e.Matrix4[m(463)](l,e.Cartesian3[m(431)],l),s=e[v(427)][m(452)](s,new(e[v(427)]));var z=e[v(427)][m(471)](I,R),P=e[v(427)][m(456)](g,k),w=e.Matrix4[m(475)](z,P,R);e[v(427)][m(475)](s,w,s),e[v(427)][v(370)](l,w,l)}this[m(428)]=x,this[m(425)]=i,this.maximumHeight=a,this.center=e.Cartesian3[m(452)](t),this[v(452)]=d,this[m(480)]=s,this.matrix=l,this[m(485)]=u,this[m(464)]=n[v(415)](c,!1),this[m(449)]=n[v(415)](h,!1),this[m(458)]=n[v(415)](f,1),this[m(427)]=n[v(415)](p,0),this[m(450)]=0,this[m(460)]=0,this[v(430)]=0,this[v(326)]()}K[O(426)][o(332)]=function(t,r,i,n,u,c,h,f){var p=o,d=O,l=n.x,v=n.y;if(this[d(428)]===G[d(482)]){(i=e[p(427)][d(474)](this[d(481)],i,F)).x=s[p(384)][d(462)](i.x,0,1),i.y=s.CesiumMath[p(399)](i.y,0,1),i.z=s[p(384)][d(462)](i.z,0,1);var m=this[p(368)]-this[d(425)],x=s[p(384)][p(399)]((u-this[p(351)])/m,0,1);e[p(423)][p(446)](i.x,i.y,D);var I=a[p(414)][d(457)](D);e.Cartesian2[d(424)](i.z,x,D);var y=a[p(414)][d(457)](D);e[p(423)][d(424)](l,v,D);var g=a[p(414)][d(457)](D);if(t[r++]=I,t[r++]=y,t[r++]=g,this[d(464)]){e.Cartesian2[p(446)](h,0,D);var b=a[p(414)][d(457)](D);t[r++]=b}}else e.Cartesian3[d(470)](i,this[p(369)],F),t[r++]=F.x,t[r++]=F.y,t[r++]=F.z,t[r++]=u,t[r++]=l,t[r++]=v,this[d(464)]&&(t[r++]=h);return this[d(485)]&&(t[r++]=a[p(414)][d(467)](c)),this[d(449)]&&(t[r++]=f.x,t[r++]=f.y,t[r++]=f.z),r};var L=new(e[o(455)]),W=new e.Cartesian3;K[O(426)][O(446)]=function(t,r,e){var i=O;if(!this[i(449)]){var n=this[i(450)],a=t[i(459)]/n;this[i(449)]=!0,this[i(437)]();for(var s=this[i(450)],o=0;o<a;o++){for(var u=0;u<n;u++){var c=o*n+u;r[o*s+u]=t[c]}var h=this[i(476)](r,o,L),f=e[i(429)](h,W),p=o*s+this[i(460)];r[p]=f.x,r[p+1]=f.y,r[p+2]=f.z}}},K[O(426)][o(435)]=function(t,r){var e=O;if(this[e(449)]){var i=this[e(450)],n=t[e(459)]/i;this[e(449)]=!1,this[e(437)]();for(var a=this[e(450)],s=0;s<n;s++)for(var o=0;o<a;o++){var u=s*i+o;r[s*a+o]=t[u]}}},K[O(426)][o(345)]=function(t,r,i){var s=o,u=O;if(!n.defined(i)&&(i=new e.Cartesian3),r*=this[u(450)],this[s(397)]===G.BITS12){var c=a[s(414)][u(466)](t[r],D);i.x=c.x,i.y=c.y;var h=a[s(414)][u(466)](t[r+1],D);return i.z=h.x,e.Matrix4[u(474)](this[u(480)],i,i)}return i.x=t[r],i.y=t[r+1],i.z=t[r+2],e[s(455)][u(454)](i,this[s(369)],i)},K[O(426)][O(451)]=function(t,r,e){var i=o,n=O;e=this[i(345)](t,r,e);var a=this.exaggeration,s=this[i(338)];if(1!==a&&this[i(380)]){var u=this[n(478)](t,r,W),c=this[i(394)](t,r),h=M[n(486)](c,a,s)-c;e.x+=u.x*h,e.y+=u.y*h,e.z+=u.z*h}return e},K[o(443)][o(339)]=function(t,r,i){var s=o,u=O;return!n.defined(i)&&(i=new(e[s(423)])),r*=this[s(360)],this[u(428)]===G[u(482)]?a[s(414)][u(466)](t[r+2],i):e[s(423)][u(424)](t[r+4],t[r+5],i)},K[O(426)][O(441)]=function(t,r){var e=o,i=O;return r*=this[i(450)],this[i(428)]===G[i(482)]?a[e(414)][i(466)](t[r+1],D).y*(this[i(436)]-this[i(425)])+this[i(425)]:t[r+3]},K[O(426)][O(423)]=function(t,r){var e=o,i=O;return r*=this[i(450)],this[e(397)]===G[e(318)]?a[e(414)][i(466)](t[r+3],D).x:t[r+6]},K[O(426)][O(455)]=function(t,r,i){var n=o,a=O,s=t[r=r*this[a(450)]+this[a(432)]]/256,u=Math[n(325)](s),c=256*(s-u);return e[n(423)][a(424)](u,c,i)},K[O(426)][O(478)]=function(t,r,e){var i=O;return r=r*this[i(450)]+this[i(460)],e.x=t[r],e.y=t[r+1],e.z=t[r+2],e},K[O(426)][O(437)]=function(){var t=o,r=O,e=0;if(this[t(397)]===G[t(318)])e+=3;else e+=6;this[r(464)]&&(e+=1),this[r(485)]&&(this[r(432)]=e,e+=1),this[r(449)]&&(this[t(439)]=e,e+=3),this[r(450)]=e};var J={position3DAndHeight:0,textureCoordAndEncodedNormals:1,geodeticSurfaceNormal:2},Q={compressed0:0,compressed1:1,geodeticSurfaceNormal:2};function X(t,r){var e=q();return(X=function(t,r){return e[t-=422]})(t,r)}K[O(426)][O(442)]=function(t){var r=o,e=O,i=s[r(447)][e(453)],n=s[r(447)][e(435)](i),a=this[e(450)]*n,u=0,c=[];function h(e,s){c[r(434)]({index:e,vertexBuffer:t,componentDatatype:i,componentsPerAttribute:s,offsetInBytes:u,strideInBytes:a}),u+=s*n}if(this[e(428)]===G.NONE){h(J[e(445)],4);var f=2;f+=this[e(464)]?1:0,f+=this.hasVertexNormals?1:0,h(J.textureCoordAndEncodedNormals,f),this.hasGeodeticSurfaceNormals&&h(J[e(429)],3)}else{var p=this[e(464)]||this[e(485)],d=this.hasWebMercatorT&&this[e(485)];h(Q[r(395)],p?4:3),d&&h(Q.compressed1,1),this[e(449)]&&h(Q[e(429)],3)}return c},K[O(426)][o(454)]=function(){var t=O;return this[t(428)]===G[t(483)]?J:Q},K[O(452)]=function(t,r){var i=o,a=O;if(n.defined(t))return!n.defined(r)&&(r=new K),r[a(428)]=t[a(428)],r[a(425)]=t[a(425)],r[a(436)]=t[a(436)],r.center=e[i(455)][a(452)](t[a(439)]),r[a(481)]=e[i(427)][a(452)](t[i(452)]),r[a(480)]=e.Matrix4[a(452)](t[i(458)]),r[a(447)]=e.Matrix4[a(452)](t[a(447)]),r[i(411)]=t[a(485)],r[a(464)]=t[a(464)],r[a(449)]=t[a(449)],r[a(458)]=t[a(458)],r[a(427)]=t[i(338)],r[a(437)](),r},t[o(451)]=c,t[o(364)]=K}));
