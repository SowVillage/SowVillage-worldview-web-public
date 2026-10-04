import{d as oi,w as zn,s as Zl,c as sl,a as bo,r as xi,b as Ba,i as Jl,o as Ql,e as th,f as eh,M as nh,g as ih}from"./index-B3UnoaLJ.js";const ga="180",Wi={ROTATE:0,DOLLY:1,PAN:2},Gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sh=0,za=1,rh=2,rl=1,oh=2,An=3,jn=0,Ve=1,Ie=2,qn=0,Xi=1,ka=2,Ga=3,Ha=4,ah=5,ai=100,ch=101,lh=102,hh=103,uh=104,dh=200,fh=201,ph=202,mh=203,Eo=204,wo=205,gh=206,_h=207,vh=208,xh=209,yh=210,Mh=211,Sh=212,bh=213,Eh=214,To=0,Ao=1,Ro=2,$i=3,Co=4,Po=5,Do=6,Lo=7,_a=0,wh=1,Th=2,Yn=0,Ah=1,Rh=2,Ch=3,Ph=4,Dh=5,Lh=6,Ih=7,ol=300,ji=301,Ki=302,Io=303,Uo=304,Cr=306,No=1e3,li=1001,Fo=1002,Te=1003,Uh=1004,hi=1005,tn=1006,Fr=1007,Cn=1008,vn=1009,al=1010,cl=1011,Ms=1012,va=1013,fi=1014,mn=1015,Ds=1016,xa=1017,ya=1018,Ss=1020,ll=35902,hl=35899,ul=1021,dl=1022,ln=1023,bs=1026,Es=1027,Ma=1028,Sa=1029,fl=1030,ba=1031,Ea=1033,pr=33776,mr=33777,gr=33778,_r=33779,Oo=35840,Bo=35841,zo=35842,ko=35843,Go=36196,Ho=37492,Vo=37496,Wo=37808,Xo=37809,qo=37810,Yo=37811,$o=37812,jo=37813,Ko=37814,Zo=37815,Jo=37816,Qo=37817,ta=37818,ea=37819,na=37820,ia=37821,sa=36492,ra=36494,oa=36495,aa=36283,ca=36284,la=36285,ha=36286,Nh=3200,Fh=3201,pl=0,Oh=1,Hn="",ge="srgb",Zi="srgb-linear",yr="linear",Kt="srgb",yi=7680,Va=519,Bh=512,zh=513,kh=514,ml=515,Gh=516,Hh=517,Vh=518,Wh=519,ua=35044,Wa="300 es",gn=2e3,Mr=2001;class mi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xa=1234567;const qi=Math.PI/180,ws=180/Math.PI;function Pn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[s&255]+Pe[s>>8&255]+Pe[s>>16&255]+Pe[s>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function zt(s,t,e){return Math.max(t,Math.min(e,s))}function wa(s,t){return(s%t+t)%t}function Xh(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function qh(s,t,e){return s!==t?(e-s)/(t-s):0}function ms(s,t,e){return(1-e)*s+e*t}function Yh(s,t,e,n){return ms(s,t,1-Math.exp(-e*n))}function $h(s,t=1){return t-Math.abs(wa(s,t*2)-t)}function jh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Kh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Zh(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Jh(s,t){return s+Math.random()*(t-s)}function Qh(s){return s*(.5-Math.random())}function tu(s){s!==void 0&&(Xa=s);let t=Xa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function eu(s){return s*qi}function nu(s){return s*ws}function iu(s){return(s&s-1)===0&&s!==0}function su(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ru(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ou(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function cn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function $t(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const an={DEG2RAD:qi,RAD2DEG:ws,generateUUID:Pn,clamp:zt,euclideanModulo:wa,mapLinear:Xh,inverseLerp:qh,lerp:ms,damp:Yh,pingpong:$h,smoothstep:jh,smootherstep:Kh,randInt:Zh,randFloat:Jh,randFloatSpread:Qh,seededRandom:tu,degToRad:eu,radToDeg:nu,isPowerOfTwo:iu,ceilPowerOfTwo:su,floorPowerOfTwo:ru,setQuaternionFromProperEuler:ou,normalize:$t,denormalize:cn};class Et{constructor(t=0,e=0){Et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ln{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,x=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const T=Math.sqrt(S),A=Math.atan2(T,p*x);m=Math.sin(m*A)/T,a=Math.sin(a*A)/T}const y=a*x;if(c=c*m+d*y,l=l*m+f*y,h=h*m+g*y,u=u*m+_*y,m===1-a){const T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Or.copy(this).projectOnVector(t),this.sub(Or)}reflect(t){return this.sub(Or.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Or=new R,qa=new Ln;class It{constructor(t,e,n,i,r,o,a,c,l){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],x=i[1],S=i[4],y=i[7],T=i[2],A=i[5],P=i[8];return r[0]=o*_+a*x+c*T,r[3]=o*m+a*S+c*A,r[6]=o*p+a*y+c*P,r[1]=l*_+h*x+u*T,r[4]=l*m+h*S+u*A,r[7]=l*p+h*y+u*P,r[2]=d*_+f*x+g*T,r[5]=d*m+f*S+g*A,r[8]=d*p+f*y+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Br.makeScale(t,e)),this}rotate(t){return this.premultiply(Br.makeRotation(-t)),this}translate(t,e){return this.premultiply(Br.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Br=new It;function gl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ts(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function au(){const s=Ts("canvas");return s.style.display="block",s}const Ya={};function As(s){s in Ya||(Ya[s]=!0,console.warn(s))}function cu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const $a=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ja=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lu(){const s={enabled:!0,workingColorSpace:Zi,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Kt&&(i.r=Dn(i.r),i.g=Dn(i.g),i.b=Dn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Kt&&(i.r=Yi(i.r),i.g=Yi(i.g),i.b=Yi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hn?yr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return As("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return As("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Zi]:{primaries:t,whitePoint:n,transfer:yr,toXYZ:$a,fromXYZ:ja,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ge},outputColorSpaceConfig:{drawingBufferColorSpace:ge}},[ge]:{primaries:t,whitePoint:n,transfer:Kt,toXYZ:$a,fromXYZ:ja,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ge}}}),s}const Xt=lu();function Dn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Yi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Mi;class hu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Mi===void 0&&(Mi=Ts("canvas")),Mi.width=t.width,Mi.height=t.height;const i=Mi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Mi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ts("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Dn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Dn(e[n]/255)*255):e[n]=Dn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uu=0;class Ta{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=Pn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(zr(i[o].image)):r.push(zr(i[o]))}else r=zr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function zr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let du=0;const kr=new R;class ve extends mi{constructor(t=ve.DEFAULT_IMAGE,e=ve.DEFAULT_MAPPING,n=li,i=li,r=tn,o=Cn,a=ln,c=vn,l=ve.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=Pn(),this.name="",this.source=new Ta(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(kr).x}get height(){return this.source.getSize(kr).y}get depth(){return this.source.getSize(kr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ol)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case No:t.x=t.x-Math.floor(t.x);break;case li:t.x=t.x<0?0:1;break;case Fo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case No:t.y=t.y-Math.floor(t.y);break;case li:t.y=t.y<0?0:1;break;case Fo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ve.DEFAULT_IMAGE=null;ve.DEFAULT_MAPPING=ol;ve.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,i=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,y=(f+1)/2,T=(p+1)/2,A=(h+d)/4,P=(u+_)/4,I=(g+m)/4;return S>y&&S>T?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=A/n,r=P/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=A/i,r=I/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=P/r,i=I/r),this.set(n,i,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this.w=zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this.w=zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fu extends mi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new ve(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ta(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends fu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class _l extends ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Te,this.minFilter=Te,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class pu extends ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Te,this.minFilter=Te,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Be{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,nn):nn.fromBufferAttribute(r,o),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(t.matrixWorld),this.union(Fs)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ns),Os.subVectors(this.max,ns),Si.subVectors(t.a,ns),bi.subVectors(t.b,ns),Ei.subVectors(t.c,ns),In.subVectors(bi,Si),Un.subVectors(Ei,bi),Qn.subVectors(Si,Ei);let e=[0,-In.z,In.y,0,-Un.z,Un.y,0,-Qn.z,Qn.y,In.z,0,-In.x,Un.z,0,-Un.x,Qn.z,0,-Qn.x,-In.y,In.x,0,-Un.y,Un.x,0,-Qn.y,Qn.x,0];return!Gr(e,Si,bi,Ei,Os)||(e=[1,0,0,0,1,0,0,0,1],!Gr(e,Si,bi,Ei,Os))?!1:(Bs.crossVectors(In,Un),e=[Bs.x,Bs.y,Bs.z],Gr(e,Si,bi,Ei,Os))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const yn=[new R,new R,new R,new R,new R,new R,new R,new R],nn=new R,Fs=new Be,Si=new R,bi=new R,Ei=new R,In=new R,Un=new R,Qn=new R,ns=new R,Os=new R,Bs=new R,ti=new R;function Gr(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ti.fromArray(s,r);const a=i.x*Math.abs(ti.x)+i.y*Math.abs(ti.y)+i.z*Math.abs(ti.z),c=t.dot(ti),l=e.dot(ti),h=n.dot(ti);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const mu=new Be,is=new R,Hr=new R;class gi{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):mu.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;is.subVectors(t,this.center);const e=is.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(is,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(is.copy(t.center).add(Hr)),this.expandByPoint(is.copy(t.center).sub(Hr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Mn=new R,Vr=new R,zs=new R,Nn=new R,Wr=new R,ks=new R,Xr=new R;class Pr{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Vr.copy(t).add(e).multiplyScalar(.5),zs.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub(Vr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(zs),a=Nn.dot(this.direction),c=-Nn.dot(zs),l=Nn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Vr).addScaledVector(zs,d),f}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const n=Mn.dot(this.direction),i=Mn.dot(Mn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,i,r){Wr.subVectors(e,t),ks.subVectors(n,t),Xr.crossVectors(Wr,ks);let o=this.direction.dot(Xr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Nn.subVectors(this.origin,t);const c=a*this.direction.dot(ks.crossVectors(Nn,ks));if(c<0)return null;const l=a*this.direction.dot(Wr.cross(Nn));if(l<0||c+l>o)return null;const h=-a*Nn.dot(Xr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,i,r,o,a,c,l,h,u,d,f,g,_,m){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,d,f,g,_,m)}set(t,e,n,i,r,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/wi.setFromMatrixColumn(t,0).length(),r=1/wi.setFromMatrixColumn(t,1).length(),o=1/wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gu,t,_u)}lookAt(t,e,n){const i=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Fn.crossVectors(n,qe),Fn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Fn.crossVectors(n,qe)),Fn.normalize(),Gs.crossVectors(qe,Fn),i[0]=Fn.x,i[4]=Gs.x,i[8]=qe.x,i[1]=Fn.y,i[5]=Gs.y,i[9]=qe.y,i[2]=Fn.z,i[6]=Gs.z,i[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],S=n[7],y=n[11],T=n[15],A=i[0],P=i[4],I=i[8],E=i[12],b=i[1],L=i[5],B=i[9],k=i[13],W=i[2],$=i[6],X=i[10],et=i[14],G=i[3],rt=i[7],lt=i[11],St=i[15];return r[0]=o*A+a*b+c*W+l*G,r[4]=o*P+a*L+c*$+l*rt,r[8]=o*I+a*B+c*X+l*lt,r[12]=o*E+a*k+c*et+l*St,r[1]=h*A+u*b+d*W+f*G,r[5]=h*P+u*L+d*$+f*rt,r[9]=h*I+u*B+d*X+f*lt,r[13]=h*E+u*k+d*et+f*St,r[2]=g*A+_*b+m*W+p*G,r[6]=g*P+_*L+m*$+p*rt,r[10]=g*I+_*B+m*X+p*lt,r[14]=g*E+_*k+m*et+p*St,r[3]=x*A+S*b+y*W+T*G,r[7]=x*P+S*L+y*$+T*rt,r[11]=x*I+S*B+y*X+T*lt,r[15]=x*E+S*k+y*et+T*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],x=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,S=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,y=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,T=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,A=e*x+n*S+i*y+r*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return t[0]=x*P,t[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*P,t[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*p+n*c*p)*P,t[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*P,t[4]=S*P,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*P,t[6]=(g*c*r-o*m*r-g*i*l+e*m*l+o*i*p-e*c*p)*P,t[7]=(o*d*r-h*c*r+h*i*l-e*d*l-o*i*f+e*c*f)*P,t[8]=y*P,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*P,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*P,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*P,t[12]=T*P,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*P,t[14]=(g*a*i-o*_*i-g*n*c+e*_*c+o*n*m-e*a*m)*P,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*P,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,x=c*l,S=c*h,y=c*u,T=n.x,A=n.y,P=n.z;return i[0]=(1-(_+p))*T,i[1]=(f+y)*T,i[2]=(g-S)*T,i[3]=0,i[4]=(f-y)*A,i[5]=(1-(d+p))*A,i[6]=(m+x)*A,i[7]=0,i[8]=(g+S)*P,i[9]=(m-x)*P,i[10]=(1-(d+_))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=wi.set(i[0],i[1],i[2]).length();const o=wi.set(i[4],i[5],i[6]).length(),a=wi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],sn.copy(this);const l=1/r,h=1/o,u=1/a;return sn.elements[0]*=l,sn.elements[1]*=l,sn.elements[2]*=l,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,e.setFromRotationMatrix(sn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=gn,c=!1){const l=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===gn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Mr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=gn,c=!1){const l=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===gn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Mr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const wi=new R,sn=new ee,gu=new R(0,0,0),_u=new R(1,1,1),Fn=new R,Gs=new R,qe=new R,Ka=new ee,Za=new Ln;class un{constructor(t=0,e=0,n=0,i=un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ka.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ka,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Za.setFromEuler(this),this.setFromQuaternion(Za,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class Aa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vu=0;const Ja=new R,Ti=new Ln,Sn=new ee,Hs=new R,ss=new R,xu=new R,yu=new Ln,Qa=new R(1,0,0),tc=new R(0,1,0),ec=new R(0,0,1),nc={type:"added"},Mu={type:"removed"},Ai={type:"childadded",child:null},qr={type:"childremoved",child:null};class Ae extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new R,e=new un,n=new Ln,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new It}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(Qa,t)}rotateY(t){return this.rotateOnAxis(tc,t)}rotateZ(t){return this.rotateOnAxis(ec,t)}translateOnAxis(t,e){return Ja.copy(t).applyQuaternion(this.quaternion),this.position.add(Ja.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qa,t)}translateY(t){return this.translateOnAxis(tc,t)}translateZ(t){return this.translateOnAxis(ec,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hs.copy(t):Hs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(ss,Hs,this.up):Sn.lookAt(Hs,ss,this.up),this.quaternion.setFromRotationMatrix(Sn),i&&(Sn.extractRotation(i.matrixWorld),Ti.setFromRotationMatrix(Sn),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nc),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mu),qr.child=t,this.dispatchEvent(qr),qr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nc),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,t,xu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,yu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ae.DEFAULT_UP=new R(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new R,bn=new R,Yr=new R,En=new R,Ri=new R,Ci=new R,ic=new R,$r=new R,jr=new R,Kr=new R,Zr=new de,Jr=new de,Qr=new de;class $e{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),rn.subVectors(t,e),i.cross(rn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){rn.subVectors(i,e),bn.subVectors(n,e),Yr.subVectors(t,e);const o=rn.dot(rn),a=rn.dot(bn),c=rn.dot(Yr),l=bn.dot(bn),h=bn.dot(Yr),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,En)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,En.x),c.addScaledVector(o,En.y),c.addScaledVector(a,En.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return Zr.setScalar(0),Jr.setScalar(0),Qr.setScalar(0),Zr.fromBufferAttribute(t,e),Jr.fromBufferAttribute(t,n),Qr.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Zr,r.x),o.addScaledVector(Jr,r.y),o.addScaledVector(Qr,r.z),o}static isFrontFacing(t,e,n,i){return rn.subVectors(n,e),bn.subVectors(t,e),rn.cross(bn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),rn.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return $e.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Ri.subVectors(i,n),Ci.subVectors(r,n),$r.subVectors(t,n);const c=Ri.dot($r),l=Ci.dot($r);if(c<=0&&l<=0)return e.copy(n);jr.subVectors(t,i);const h=Ri.dot(jr),u=Ci.dot(jr);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ri,o);Kr.subVectors(t,r);const f=Ri.dot(Kr),g=Ci.dot(Kr);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ci,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return ic.subVectors(r,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(ic,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(Ri,o).addScaledVector(Ci,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const vl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function to(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Xt.workingColorSpace){if(t=wa(t,1),e=zt(e,0,1),n=zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=to(o,r,t+1/3),this.g=to(o,r,t),this.b=to(o,r,t-1/3)}return Xt.colorSpaceToWorking(this,i),this}setStyle(t,e=ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){const n=vl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Dn(t.r),this.g=Dn(t.g),this.b=Dn(t.b),this}copyLinearToSRGB(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return Xt.workingToColorSpace(De.copy(this),t),Math.round(zt(De.r*255,0,255))*65536+Math.round(zt(De.g*255,0,255))*256+Math.round(zt(De.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.workingToColorSpace(De.copy(this),e);const n=De.r,i=De.g,r=De.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.workingToColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=ge){Xt.workingToColorSpace(De.copy(this),t);const e=De.r,n=De.g,i=De.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(Vs);const n=ms(On.h,Vs.h,e),i=ms(On.s,Vs.s,e),r=ms(On.l,Vs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Ht;Ht.NAMES=vl;let Su=0;class _i extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=Xi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eo,this.blendDst=wo,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Va,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Eo&&(n.blendSrc=this.blendSrc),this.blendDst!==wo&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Va&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ji extends _i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=_a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new R,Ws=new Et;let bu=0;class Re{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ua,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ws.fromBufferAttribute(this,e),Ws.applyMatrix3(t),this.setXY(e,Ws.x,Ws.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),i=$t(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ua&&(t.usage=this.usage),t}}class xl extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yl extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Eu=0;const Je=new ee,eo=new Ae,Pi=new R,Ye=new Be,rs=new Be,Se=new R;class ke extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gl(t)?yl:xl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new It().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return eo.lookAt(t),eo.updateMatrix(),this.applyMatrix4(eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Be);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Ye.min,rs.min),Ye.expandByPoint(Se),Se.addVectors(Ye.max,rs.max),Ye.expandByPoint(Se)):(Ye.expandByPoint(rs.min),Ye.expandByPoint(rs.max))}Ye.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Se.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Se));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Se.fromBufferAttribute(a,l),c&&(Pi.fromBufferAttribute(t,l),Se.add(Pi)),i=Math.max(i,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new R,c[I]=new R;const l=new R,h=new R,u=new R,d=new Et,f=new Et,g=new Et,_=new R,m=new R;function p(I,E,b){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,b),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),a[I].add(_),a[E].add(_),a[b].add(_),c[I].add(m),c[E].add(m),c[b].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let I=0,E=x.length;I<E;++I){const b=x[I],L=b.start,B=b.count;for(let k=L,W=L+B;k<W;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const S=new R,y=new R,T=new R,A=new R;function P(I){T.fromBufferAttribute(i,I),A.copy(T);const E=a[I];S.copy(E),S.sub(T.multiplyScalar(T.dot(E))).normalize(),y.crossVectors(A,E);const L=y.dot(c[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,L)}for(let I=0,E=x.length;I<E;++I){const b=x[I],L=b.start,B=b.count;for(let k=L,W=L+B;k<W;k+=3)P(t.getX(k+0)),P(t.getX(k+1)),P(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Re(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ke,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sc=new ee,ei=new Pr,Xs=new gi,rc=new R,qs=new R,Ys=new R,$s=new R,no=new R,js=new R,oc=new R,Ks=new R;class Ot extends Ae{constructor(t=new ke,e=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){js.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(no.fromBufferAttribute(u,t),o?js.addScaledVector(no,h):js.addScaledVector(no.sub(e),h))}e.add(js)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(r),ei.copy(t.ray).recast(t.near),!(Xs.containsPoint(ei.origin)===!1&&(ei.intersectSphere(Xs,rc)===null||ei.origin.distanceToSquared(rc)>(t.far-t.near)**2))&&(sc.copy(r).invert(),ei.copy(t.ray).applyMatrix4(sc),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ei)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,T=S;y<T;y+=3){const A=a.getX(y),P=a.getX(y+1),I=a.getX(y+2);i=Zs(this,p,t,n,l,h,u,A,P,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);i=Zs(this,o,t,n,l,h,u,x,S,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,T=S;y<T;y+=3){const A=y,P=y+1,I=y+2;i=Zs(this,p,t,n,l,h,u,A,P,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,S=m+1,y=m+2;i=Zs(this,o,t,n,l,h,u,x,S,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function wu(s,t,e,n,i,r,o,a){let c;if(t.side===Ve?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===jn,a),c===null)return null;Ks.copy(a),Ks.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ks);return l<e.near||l>e.far?null:{distance:l,point:Ks.clone(),object:s}}function Zs(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,qs),s.getVertexPosition(c,Ys),s.getVertexPosition(l,$s);const h=wu(s,t,e,n,qs,Ys,$s,oc);if(h){const u=new R;$e.getBarycoord(oc,qs,Ys,$s,u),i&&(h.uv=$e.getInterpolatedAttribute(i,a,c,l,u,new Et)),r&&(h.uv1=$e.getInterpolatedAttribute(r,a,c,l,u,new Et)),o&&(h.normal=$e.getInterpolatedAttribute(o,a,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new R,materialIndex:0};$e.getNormal(qs,Ys,$s,d.normal),h.face=d,h.barycoord=u}return h}class dn extends ke{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function g(_,m,p,x,S,y,T,A,P,I,E){const b=y/P,L=T/I,B=y/2,k=T/2,W=A/2,$=P+1,X=I+1;let et=0,G=0;const rt=new R;for(let lt=0;lt<X;lt++){const St=lt*L-k;for(let kt=0;kt<$;kt++){const ne=kt*b-B;rt[_]=ne*x,rt[m]=St*S,rt[p]=W,l.push(rt.x,rt.y,rt.z),rt[_]=0,rt[m]=0,rt[p]=A>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(kt/P),u.push(1-lt/I),et+=1}}for(let lt=0;lt<I;lt++)for(let St=0;St<P;St++){const kt=d+St+$*lt,ne=d+St+$*(lt+1),oe=d+(St+1)+$*(lt+1),qt=d+(St+1)+$*lt;c.push(kt,ne,qt),c.push(ne,oe,qt),G+=6}a.addGroup(f,G,E),f+=G,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Oe(s){const t={};for(let e=0;e<s.length;e++){const n=Qi(s[e]);for(const i in n)t[i]=n[i]}return t}function Tu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ml(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const Au={clone:Qi,merge:Oe};var Ru=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends _i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ru,this.fragmentShader=Cu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=Tu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Sl extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new R,ac=new Et,cc=new Et;class Qe extends Sl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ws*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,ac,cc),e.subVectors(cc,ac)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Di=-90,Li=1;class Pu extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Qe(Di,Li,t,e);i.layers=this.layers,this.add(i);const r=new Qe(Di,Li,t,e);r.layers=this.layers,this.add(r);const o=new Qe(Di,Li,t,e);o.layers=this.layers,this.add(o);const a=new Qe(Di,Li,t,e);a.layers=this.layers,this.add(a);const c=new Qe(Di,Li,t,e);c.layers=this.layers,this.add(c);const l=new Qe(Di,Li,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class bl extends ve{constructor(t=[],e=ji,n,i,r,o,a,c,l,h){super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Du extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new bl(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new dn(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:qn});r.uniforms.tEquirect.value=e;const o=new Ot(i,r),a=e.minFilter;return e.minFilter===Cn&&(e.minFilter=tn),new Pu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class fe extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lu={type:"move"};class io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lu)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class gs{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=n}clone(){return new gs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Iu extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Uu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ua,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fe=new R;class Sr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),i=$t(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Re(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Sr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Hi extends _i{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ii;const os=new R,Ui=new R,Ni=new R,Fi=new Et,as=new Et,El=new ee,Js=new R,cs=new R,Qs=new R,lc=new Et,so=new Et,hc=new Et;class kn extends Ae{constructor(t=new Hi){if(super(),this.isSprite=!0,this.type="Sprite",Ii===void 0){Ii=new ke;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Uu(e,5);Ii.setIndex([0,1,2,0,2,3]),Ii.setAttribute("position",new Sr(n,3,0,!1)),Ii.setAttribute("uv",new Sr(n,2,3,!1))}this.geometry=Ii,this.material=t,this.center=new Et(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ui.setFromMatrixScale(this.matrixWorld),El.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ni.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ui.multiplyScalar(-Ni.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;tr(Js.set(-.5,-.5,0),Ni,o,Ui,i,r),tr(cs.set(.5,-.5,0),Ni,o,Ui,i,r),tr(Qs.set(.5,.5,0),Ni,o,Ui,i,r),lc.set(0,0),so.set(1,0),hc.set(1,1);let a=t.ray.intersectTriangle(Js,cs,Qs,!1,os);if(a===null&&(tr(cs.set(-.5,.5,0),Ni,o,Ui,i,r),so.set(0,1),a=t.ray.intersectTriangle(Js,Qs,cs,!1,os),a===null))return;const c=t.ray.origin.distanceTo(os);c<t.near||c>t.far||e.push({distance:c,point:os.clone(),uv:$e.getInterpolation(os,Js,cs,Qs,lc,so,hc,new Et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function tr(s,t,e,n,i,r){Fi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(as.x=r*Fi.x-i*Fi.y,as.y=i*Fi.x+r*Fi.y):as.copy(Fi),s.copy(t),s.x+=as.x,s.y+=as.y,s.applyMatrix4(El)}class Nu extends ve{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Te,h=Te,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uc extends Re{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Oi=new ee,dc=new ee,er=[],fc=new Be,Fu=new ee,ls=new Ot,hs=new gi;class Ou extends Ot{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new uc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Fu)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Be),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Oi),fc.copy(t.boundingBox).applyMatrix4(Oi),this.boundingBox.union(fc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Oi),hs.copy(t.boundingSphere).applyMatrix4(Oi),this.boundingSphere.union(hs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ls.geometry=this.geometry,ls.material=this.material,ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hs.copy(this.boundingSphere),hs.applyMatrix4(n),t.ray.intersectsSphere(hs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Oi),dc.multiplyMatrices(n,Oi),ls.matrixWorld=dc,ls.raycast(t,er);for(let o=0,a=er.length;o<a;o++){const c=er[o];c.instanceId=r,c.object=this,e.push(c)}er.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new uc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nu(new Float32Array(i*this.count),i,this.count,Ma,mn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ro=new R,Bu=new R,zu=new It;class Gn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ro.subVectors(n,e).cross(Bu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ro),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zu.getNormalMatrix(t),i=this.coplanarPoint(ro).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new gi,ku=new Et(.5,.5),nr=new R;class Ra{constructor(t=new Gn,e=new Gn,n=new Gn,i=new Gn,r=new Gn,o=new Gn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gn,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],x=r[12],S=r[13],y=r[14],T=r[15];if(i[0].setComponents(l-o,f-h,p-g,T-x).normalize(),i[1].setComponents(l+o,f+h,p+g,T+x).normalize(),i[2].setComponents(l+a,f+u,p+_,T+S).normalize(),i[3].setComponents(l-a,f-u,p-_,T-S).normalize(),n)i[4].setComponents(c,d,m,y).normalize(),i[5].setComponents(l-c,f-d,p-m,T-y).normalize();else if(i[4].setComponents(l-c,f-d,p-m,T-y).normalize(),e===gn)i[5].setComponents(l+c,f+d,p+m,T+y).normalize();else if(e===Mr)i[5].setComponents(c,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(t){ni.center.set(0,0,0);const e=ku.distanceTo(t.center);return ni.radius=.7071067811865476+e,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(nr.x=i.normal.x>0?t.max.x:t.min.x,nr.y=i.normal.y>0?t.max.y:t.min.y,nr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(nr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wl extends _i{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const br=new R,Er=new R,pc=new ee,us=new Pr,ir=new gi,oo=new R,mc=new R;class Gu extends Ae{constructor(t=new ke,e=new wl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)br.fromBufferAttribute(e,i-1),Er.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=br.distanceTo(Er);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(i),ir.radius+=r,t.ray.intersectsSphere(ir)===!1)return;pc.copy(i).invert(),us.copy(t.ray).applyMatrix4(pc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),x=h.getX(_+1),S=sr(this,t,us,c,p,x,_);S&&e.push(S)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=sr(this,t,us,c,_,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=sr(this,t,us,c,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=sr(this,t,us,c,g-1,f,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function sr(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(br.fromBufferAttribute(a,i),Er.fromBufferAttribute(a,r),e.distanceSqToSegment(br,Er,oo,mc)>n)return;oo.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(oo);if(!(l<t.near||l>t.far))return{distance:l,point:mc.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const gc=new R,_c=new R;class Hu extends Gu{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)gc.fromBufferAttribute(e,i),_c.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+gc.distanceTo(_c);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ls extends ve{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tl extends ve{constructor(t,e,n=fi,i,r,o,a=Te,c=Te,l,h=bs,u=1){if(h!==bs&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ta(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Al extends ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}const rr=new R,or=new R,ao=new R,ar=new $e;class Vu extends ke{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(qi*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:m,c:p}=ar;if(_.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),ar.getNormal(ao),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const S=(x+1)%3,y=u[x],T=u[S],A=ar[h[x]],P=ar[h[S]],I=`${y}_${T}`,E=`${T}_${y}`;E in d&&d[E]?(ao.dot(d[E].normal)<=r&&(f.push(A.x,A.y,A.z),f.push(P.x,P.y,P.z)),d[E]=null):I in d||(d[I]={index0:l[x],index1:l[S],normal:ao.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];rr.fromBufferAttribute(a,_),or.fromBufferAttribute(a,m),f.push(rr.x,rr.y,rr.z),f.push(or.x,or.y,or.z)}this.setAttribute("position",new se(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class $n extends ke{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const x=p*d-o;for(let S=0;S<l;S++){const y=S*u-r;g.push(y,-x,0),_.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const S=x+l*p,y=x+l*(p+1),T=x+1+l*(p+1),A=x+1+l*p;f.push(S,y,A),f.push(y,T,A)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ue extends _i{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pl,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=_a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wu extends _i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xu extends _i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const co={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class qu{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Yu=new qu;class Ca{constructor(t){this.manager=t!==void 0?t:Yu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Ca.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bi=new WeakMap;class $u extends Ca{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=co.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=Bi.get(o);u===void 0&&(u=[],Bi.set(o,u)),u.push({onLoad:e,onError:i})}return o}const a=Ts("img");function c(){h(),e&&e(this);const u=Bi.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Bi.delete(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),co.remove(`image:${t}`);const d=Bi.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}Bi.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),co.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class ju extends Ca{constructor(t){super(t)}load(t,e,n,i){const r=new ve,o=new $u(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Rl extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const lo=new ee,vc=new R,xc=new R;class Ku{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ra,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;vc.setFromMatrixPosition(t.matrixWorld),e.position.copy(vc),xc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xc),e.updateMatrixWorld(),lo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Cl extends Sl{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Zu extends Ku{constructor(){super(new Cl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ju extends Rl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new Zu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Qu extends Rl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class td extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const yc=new ee;class Mc{constructor(t,e,n=0,i=1/0){this.ray=new Pr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Aa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return yc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yc),this}intersectObject(t,e=!0,n=[]){return da(t,this,n,e),n.sort(Sc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)da(t[i],this,n,e);return n.sort(Sc),n}}function Sc(s,t){return s.distance-t.distance}function da(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)da(r[o],t,e,!0)}}class _s{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ed extends mi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function bc(s,t,e,n){const i=nd(n);switch(e){case ul:return s*t;case Ma:return s*t/i.components*i.byteLength;case Sa:return s*t/i.components*i.byteLength;case fl:return s*t*2/i.components*i.byteLength;case ba:return s*t*2/i.components*i.byteLength;case dl:return s*t*3/i.components*i.byteLength;case ln:return s*t*4/i.components*i.byteLength;case Ea:return s*t*4/i.components*i.byteLength;case pr:case mr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case gr:case _r:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Bo:case ko:return Math.max(s,16)*Math.max(t,8)/4;case Oo:case zo:return Math.max(s,8)*Math.max(t,8)/2;case Go:case Ho:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Vo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case qo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case $o:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case jo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Zo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Jo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Qo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ta:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ea:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case na:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ia:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case sa:case ra:case oa:return Math.ceil(s/4)*Math.ceil(t/4)*16;case aa:case ca:return Math.ceil(s/4)*Math.ceil(t/4)*8;case la:case ha:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function nd(s){switch(s){case vn:case al:return{byteLength:1,components:1};case Ms:case cl:case Ds:return{byteLength:2,components:1};case xa:case ya:return{byteLength:2,components:4};case fi:case va:case mn:return{byteLength:4,components:1};case ll:case hl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ga);function Pl(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function id(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,od=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ld=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ud=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,md=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_d=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ad=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ld=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ud="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$d=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ef=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,of=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,af=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ff=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_f=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Af=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Df=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,If=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Uf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ff=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Of=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Gf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$f=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ip=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ap=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,up=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_p=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ap=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ip=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Up=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Np=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:sd,alphahash_pars_fragment:rd,alphamap_fragment:od,alphamap_pars_fragment:ad,alphatest_fragment:cd,alphatest_pars_fragment:ld,aomap_fragment:hd,aomap_pars_fragment:ud,batching_pars_vertex:dd,batching_vertex:fd,begin_vertex:pd,beginnormal_vertex:md,bsdfs:gd,iridescence_fragment:_d,bumpmap_pars_fragment:vd,clipping_planes_fragment:xd,clipping_planes_pars_fragment:yd,clipping_planes_pars_vertex:Md,clipping_planes_vertex:Sd,color_fragment:bd,color_pars_fragment:Ed,color_pars_vertex:wd,color_vertex:Td,common:Ad,cube_uv_reflection_fragment:Rd,defaultnormal_vertex:Cd,displacementmap_pars_vertex:Pd,displacementmap_vertex:Dd,emissivemap_fragment:Ld,emissivemap_pars_fragment:Id,colorspace_fragment:Ud,colorspace_pars_fragment:Nd,envmap_fragment:Fd,envmap_common_pars_fragment:Od,envmap_pars_fragment:Bd,envmap_pars_vertex:zd,envmap_physical_pars_fragment:Kd,envmap_vertex:kd,fog_vertex:Gd,fog_pars_vertex:Hd,fog_fragment:Vd,fog_pars_fragment:Wd,gradientmap_pars_fragment:Xd,lightmap_pars_fragment:qd,lights_lambert_fragment:Yd,lights_lambert_pars_fragment:$d,lights_pars_begin:jd,lights_toon_fragment:Zd,lights_toon_pars_fragment:Jd,lights_phong_fragment:Qd,lights_phong_pars_fragment:tf,lights_physical_fragment:ef,lights_physical_pars_fragment:nf,lights_fragment_begin:sf,lights_fragment_maps:rf,lights_fragment_end:of,logdepthbuf_fragment:af,logdepthbuf_pars_fragment:cf,logdepthbuf_pars_vertex:lf,logdepthbuf_vertex:hf,map_fragment:uf,map_pars_fragment:df,map_particle_fragment:ff,map_particle_pars_fragment:pf,metalnessmap_fragment:mf,metalnessmap_pars_fragment:gf,morphinstance_vertex:_f,morphcolor_vertex:vf,morphnormal_vertex:xf,morphtarget_pars_vertex:yf,morphtarget_vertex:Mf,normal_fragment_begin:Sf,normal_fragment_maps:bf,normal_pars_fragment:Ef,normal_pars_vertex:wf,normal_vertex:Tf,normalmap_pars_fragment:Af,clearcoat_normal_fragment_begin:Rf,clearcoat_normal_fragment_maps:Cf,clearcoat_pars_fragment:Pf,iridescence_pars_fragment:Df,opaque_fragment:Lf,packing:If,premultiplied_alpha_fragment:Uf,project_vertex:Nf,dithering_fragment:Ff,dithering_pars_fragment:Of,roughnessmap_fragment:Bf,roughnessmap_pars_fragment:zf,shadowmap_pars_fragment:kf,shadowmap_pars_vertex:Gf,shadowmap_vertex:Hf,shadowmask_pars_fragment:Vf,skinbase_vertex:Wf,skinning_pars_vertex:Xf,skinning_vertex:qf,skinnormal_vertex:Yf,specularmap_fragment:$f,specularmap_pars_fragment:jf,tonemapping_fragment:Kf,tonemapping_pars_fragment:Zf,transmission_fragment:Jf,transmission_pars_fragment:Qf,uv_pars_fragment:tp,uv_pars_vertex:ep,uv_vertex:np,worldpos_vertex:ip,background_vert:sp,background_frag:rp,backgroundCube_vert:op,backgroundCube_frag:ap,cube_vert:cp,cube_frag:lp,depth_vert:hp,depth_frag:up,distanceRGBA_vert:dp,distanceRGBA_frag:fp,equirect_vert:pp,equirect_frag:mp,linedashed_vert:gp,linedashed_frag:_p,meshbasic_vert:vp,meshbasic_frag:xp,meshlambert_vert:yp,meshlambert_frag:Mp,meshmatcap_vert:Sp,meshmatcap_frag:bp,meshnormal_vert:Ep,meshnormal_frag:wp,meshphong_vert:Tp,meshphong_frag:Ap,meshphysical_vert:Rp,meshphysical_frag:Cp,meshtoon_vert:Pp,meshtoon_frag:Dp,points_vert:Lp,points_frag:Ip,shadow_vert:Up,shadow_frag:Np,sprite_vert:Fp,sprite_frag:Op},st={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},pn={basic:{uniforms:Oe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Oe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Oe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Oe([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Oe([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Oe([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Oe([st.points,st.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Oe([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Oe([st.common,st.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Oe([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Oe([st.sprite,st.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Oe([st.common,st.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Oe([st.lights,st.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};pn.physical={uniforms:Oe([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const cr={r:0,b:0,g:0},ii=new un,Bp=new ee;function zp(s,t,e,n,i,r,o){const a=new Ht(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function _(S){let y=!1;const T=g(S);T===null?p(a,c):T&&T.isColor&&(p(T,1),y=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,y){const T=g(y);T&&(T.isCubeTexture||T.mapping===Cr)?(h===void 0&&(h=new Ot(new dn(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Qi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ii.copy(y.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Bp.makeRotationFromEuler(ii)),h.material.toneMapped=Xt.getTransfer(T.colorSpace)!==Kt,(u!==T||d!==T.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,f=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Ot(new $n(2,2),new Kn({name:"BackgroundMaterial",uniforms:Qi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Xt.getTransfer(T.colorSpace)!==Kt,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=T,d=T.version,f=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,y){S.getRGB(cr,Ml(s)),n.buffers.color.setClear(cr.r,cr.g,cr.b,y,o)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:_,addToRenderList:m,dispose:x}}function kp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(b,L,B,k,W){let $=!1;const X=u(k,B,L);r!==X&&(r=X,l(r.object)),$=f(b,k,B,W),$&&g(b,k,B,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,y(b,L,B,k),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return s.createVertexArray()}function l(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,L,B){const k=B.wireframe===!0;let W=n[b.id];W===void 0&&(W={},n[b.id]=W);let $=W[L.id];$===void 0&&($={},W[L.id]=$);let X=$[k];return X===void 0&&(X=d(c()),$[k]=X),X}function d(b){const L=[],B=[],k=[];for(let W=0;W<e;W++)L[W]=0,B[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:k,object:b,attributes:{},index:null}}function f(b,L,B,k){const W=r.attributes,$=L.attributes;let X=0;const et=B.getAttributes();for(const G in et)if(et[G].location>=0){const lt=W[G];let St=$[G];if(St===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(St=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(St=b.instanceColor)),lt===void 0||lt.attribute!==St||St&&lt.data!==St.data)return!0;X++}return r.attributesNum!==X||r.index!==k}function g(b,L,B,k){const W={},$=L.attributes;let X=0;const et=B.getAttributes();for(const G in et)if(et[G].location>=0){let lt=$[G];lt===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(lt=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(lt=b.instanceColor));const St={};St.attribute=lt,lt&&lt.data&&(St.data=lt.data),W[G]=St,X++}r.attributes=W,r.attributesNum=X,r.index=k}function _(){const b=r.newAttributes;for(let L=0,B=b.length;L<B;L++)b[L]=0}function m(b){p(b,0)}function p(b,L){const B=r.newAttributes,k=r.enabledAttributes,W=r.attributeDivisors;B[b]=1,k[b]===0&&(s.enableVertexAttribArray(b),k[b]=1),W[b]!==L&&(s.vertexAttribDivisor(b,L),W[b]=L)}function x(){const b=r.newAttributes,L=r.enabledAttributes;for(let B=0,k=L.length;B<k;B++)L[B]!==b[B]&&(s.disableVertexAttribArray(B),L[B]=0)}function S(b,L,B,k,W,$,X){X===!0?s.vertexAttribIPointer(b,L,B,W,$):s.vertexAttribPointer(b,L,B,k,W,$)}function y(b,L,B,k){_();const W=k.attributes,$=B.getAttributes(),X=L.defaultAttributeValues;for(const et in $){const G=$[et];if(G.location>=0){let rt=W[et];if(rt===void 0&&(et==="instanceMatrix"&&b.instanceMatrix&&(rt=b.instanceMatrix),et==="instanceColor"&&b.instanceColor&&(rt=b.instanceColor)),rt!==void 0){const lt=rt.normalized,St=rt.itemSize,kt=t.get(rt);if(kt===void 0)continue;const ne=kt.buffer,oe=kt.type,qt=kt.bytesPerElement,q=oe===s.INT||oe===s.UNSIGNED_INT||rt.gpuType===va;if(rt.isInterleavedBufferAttribute){const K=rt.data,dt=K.stride,Pt=rt.offset;if(K.isInstancedInterleavedBuffer){for(let Mt=0;Mt<G.locationSize;Mt++)p(G.location+Mt,K.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Mt=0;Mt<G.locationSize;Mt++)m(G.location+Mt);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let Mt=0;Mt<G.locationSize;Mt++)S(G.location+Mt,St/G.locationSize,oe,lt,dt*qt,(Pt+St/G.locationSize*Mt)*qt,q)}else{if(rt.isInstancedBufferAttribute){for(let K=0;K<G.locationSize;K++)p(G.location+K,rt.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let K=0;K<G.locationSize;K++)m(G.location+K);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let K=0;K<G.locationSize;K++)S(G.location+K,St/G.locationSize,oe,lt,St*qt,St/G.locationSize*K*qt,q)}}else if(X!==void 0){const lt=X[et];if(lt!==void 0)switch(lt.length){case 2:s.vertexAttrib2fv(G.location,lt);break;case 3:s.vertexAttrib3fv(G.location,lt);break;case 4:s.vertexAttrib4fv(G.location,lt);break;default:s.vertexAttrib1fv(G.location,lt)}}}}x()}function T(){I();for(const b in n){const L=n[b];for(const B in L){const k=L[B];for(const W in k)h(k[W].object),delete k[W];delete L[B]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;const L=n[b.id];for(const B in L){const k=L[B];for(const W in k)h(k[W].object),delete k[W];delete L[B]}delete n[b.id]}function P(b){for(const L in n){const B=n[L];if(B[b.id]===void 0)continue;const k=B[b.id];for(const W in k)h(k[W].object),delete k[W];delete B[b.id]}}function I(){E(),o=!0,r!==i&&(r=i,l(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function Gp(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Hp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(P){return!(P!==ln&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const I=P===Ds&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==vn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==mn&&!I)}function c(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:T,maxSamples:A}}function Vp(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Gn,a=new It,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const x=r?0:n,S=x*4;let y=p.clippingState||null;c.value=y,y=h(g,d,S,f);for(let T=0;T!==S;++T)y[T]=e[T];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,y=f;S!==_;++S,y+=4)o.copy(u[S]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Wp(s){let t=new WeakMap;function e(o,a){return a===Io?o.mapping=ji:a===Uo&&(o.mapping=Ki),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Io||a===Uo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Du(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Vi=4,Ec=[.125,.215,.35,.446,.526,.582],ci=20,ho=new Cl,wc=new Ht;let uo=null,fo=0,po=0,mo=!1;const ri=(1+Math.sqrt(5))/2,zi=1/ri,Tc=[new R(-ri,zi,0),new R(ri,zi,0),new R(-zi,0,ri),new R(zi,0,ri),new R(0,ri,-zi),new R(0,ri,zi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Xp=new R;class Ac{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=Xp}=r;uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(uo,fo,po),this._renderer.xr.enabled=mo,t.scissorTest=!1,lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ji||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Ds,format:ln,colorSpace:Zi,depthBuffer:!1},i=Rc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qp(r)),this._blurMaterial=Yp(r,t,e)}return i}_compileMaterial(t){const e=new Ot(this._lodPlanes[0],t);this._renderer.compile(e,ho)}_sceneToCubeUV(t,e,n,i,r){const c=new Qe(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(wc),u.toneMapping=Yn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const _=new Ji({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),m=new Ot(new dn,_);let p=!1;const x=t.background;x?x.isColor&&(_.color.copy(x),t.background=null,p=!0):(_.color.copy(wc),p=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[S],r.y,r.z)):y===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[S]));const T=this._cubeSize;lr(i,y*T,S>2?T:0,T,T),u.setRenderTarget(i),p&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ji||t.mapping===Ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ot(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;lr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ho)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Tc[(i-r-1)%Tc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ot(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ci-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ci;m>ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ci}`);const p=[];let x=0;for(let P=0;P<ci;++P){const I=P/_,E=Math.exp(-I*I/2);p.push(E),P===0?x+=E:P<m&&(x+=2*E)}for(let P=0;P<p.length;P++)p[P]=p[P]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const y=this._sizeLods[i],T=3*y*(i>S-Vi?i-S+Vi:0),A=4*(this._cubeSize-y);lr(e,T,A,3*y,2*y),c.setRenderTarget(e),c.render(u,ho)}}function qp(s){const t=[],e=[],n=[];let i=s;const r=s-Vi+1+Ec.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Vi?c=Ec[o-s+Vi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),S=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let A=0;A<f;A++){const P=A%3*2/3-1,I=A>2?0:-1,E=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];x.set(E,_*g*A),S.set(d,m*g*A);const b=[A,A,A,A,A,A];y.set(b,p*g*A)}const T=new ke;T.setAttribute("position",new Re(x,_)),T.setAttribute("uv",new Re(S,m)),T.setAttribute("faceIndex",new Re(y,p)),t.push(T),i>Vi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Rc(s,t,e){const n=new pi(s,t,e);return n.texture.mapping=Cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Yp(s,t,e){const n=new Float32Array(ci),i=new R(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Cc(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Pc(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Pa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $p(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Io||c===Uo,h=c===ji||c===Ki;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ac(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Ac(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function jp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&As("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Kp(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)t.update(d[f],s.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let S=0,y=x.length;S<y;S+=3){const T=x[S+0],A=x[S+1],P=x[S+2];d.push(T,A,A,P,P,T)}}else if(g!==void 0){const x=g.array;_=g.version;for(let S=0,y=x.length/3-1;S<y;S+=3){const T=S+0,A=S+1,P=S+2;d.push(T,A,A,P,P,T)}}else return;const m=new(gl(d)?yl:xl)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Zp(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*_[x];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Jp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Qp(s,t,e){const n=new WeakMap,i=new de;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let E=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;f===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let y=a.attributes.position.count*S,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const A=new Float32Array(y*T*4*u),P=new _l(A,y,T,u);P.type=mn,P.needsUpdate=!0;const I=S*4;for(let b=0;b<u;b++){const L=m[b],B=p[b],k=x[b],W=y*T*4*b;for(let $=0;$<L.count;$++){const X=$*I;f===!0&&(i.fromBufferAttribute(L,$),A[W+X+0]=i.x,A[W+X+1]=i.y,A[W+X+2]=i.z,A[W+X+3]=0),g===!0&&(i.fromBufferAttribute(B,$),A[W+X+4]=i.x,A[W+X+5]=i.y,A[W+X+6]=i.z,A[W+X+7]=0),_===!0&&(i.fromBufferAttribute(k,$),A[W+X+8]=i.x,A[W+X+9]=i.y,A[W+X+10]=i.z,A[W+X+11]=k.itemSize===4?i.w:1)}}d={count:u,texture:P,size:new Et(y,T)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function tm(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const Dl=new ve,Dc=new Tl(1,1),Ll=new _l,Il=new pu,Ul=new bl,Lc=[],Ic=[],Uc=new Float32Array(16),Nc=new Float32Array(9),Fc=new Float32Array(4);function ts(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Lc[i];if(r===void 0&&(r=new Float32Array(i),Lc[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function xe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ye(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Dr(s,t){let e=Ic[t];e===void 0&&(e=new Int32Array(t),Ic[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function em(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function nm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2fv(this.addr,t),ye(e,t)}}function im(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;s.uniform3fv(this.addr,t),ye(e,t)}}function sm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4fv(this.addr,t),ye(e,t)}}function rm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;Fc.set(n),s.uniformMatrix2fv(this.addr,!1,Fc),ye(e,n)}}function om(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;Nc.set(n),s.uniformMatrix3fv(this.addr,!1,Nc),ye(e,n)}}function am(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;Uc.set(n),s.uniformMatrix4fv(this.addr,!1,Uc),ye(e,n)}}function cm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function lm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2iv(this.addr,t),ye(e,t)}}function hm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3iv(this.addr,t),ye(e,t)}}function um(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4iv(this.addr,t),ye(e,t)}}function dm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function fm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2uiv(this.addr,t),ye(e,t)}}function pm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3uiv(this.addr,t),ye(e,t)}}function mm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4uiv(this.addr,t),ye(e,t)}}function gm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Dc.compareFunction=ml,r=Dc):r=Dl,e.setTexture2D(t||r,i)}function _m(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Il,i)}function vm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ul,i)}function xm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ll,i)}function ym(s){switch(s){case 5126:return em;case 35664:return nm;case 35665:return im;case 35666:return sm;case 35674:return rm;case 35675:return om;case 35676:return am;case 5124:case 35670:return cm;case 35667:case 35671:return lm;case 35668:case 35672:return hm;case 35669:case 35673:return um;case 5125:return dm;case 36294:return fm;case 36295:return pm;case 36296:return mm;case 35678:case 36198:case 36298:case 36306:case 35682:return gm;case 35679:case 36299:case 36307:return _m;case 35680:case 36300:case 36308:case 36293:return vm;case 36289:case 36303:case 36311:case 36292:return xm}}function Mm(s,t){s.uniform1fv(this.addr,t)}function Sm(s,t){const e=ts(t,this.size,2);s.uniform2fv(this.addr,e)}function bm(s,t){const e=ts(t,this.size,3);s.uniform3fv(this.addr,e)}function Em(s,t){const e=ts(t,this.size,4);s.uniform4fv(this.addr,e)}function wm(s,t){const e=ts(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Tm(s,t){const e=ts(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Am(s,t){const e=ts(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Rm(s,t){s.uniform1iv(this.addr,t)}function Cm(s,t){s.uniform2iv(this.addr,t)}function Pm(s,t){s.uniform3iv(this.addr,t)}function Dm(s,t){s.uniform4iv(this.addr,t)}function Lm(s,t){s.uniform1uiv(this.addr,t)}function Im(s,t){s.uniform2uiv(this.addr,t)}function Um(s,t){s.uniform3uiv(this.addr,t)}function Nm(s,t){s.uniform4uiv(this.addr,t)}function Fm(s,t,e){const n=this.cache,i=t.length,r=Dr(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Dl,r[o])}function Om(s,t,e){const n=this.cache,i=t.length,r=Dr(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Il,r[o])}function Bm(s,t,e){const n=this.cache,i=t.length,r=Dr(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Ul,r[o])}function zm(s,t,e){const n=this.cache,i=t.length,r=Dr(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Ll,r[o])}function km(s){switch(s){case 5126:return Mm;case 35664:return Sm;case 35665:return bm;case 35666:return Em;case 35674:return wm;case 35675:return Tm;case 35676:return Am;case 5124:case 35670:return Rm;case 35667:case 35671:return Cm;case 35668:case 35672:return Pm;case 35669:case 35673:return Dm;case 5125:return Lm;case 36294:return Im;case 36295:return Um;case 36296:return Nm;case 35678:case 36198:case 36298:case 36306:case 35682:return Fm;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return zm}}class Gm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ym(e.type)}}class Hm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=km(e.type)}}class Vm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const go=/(\w+)(\])?(\[|\.)?/g;function Oc(s,t){s.seq.push(t),s.map[t.id]=t}function Wm(s,t,e){const n=s.name,i=n.length;for(go.lastIndex=0;;){const r=go.exec(n),o=go.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Oc(e,l===void 0?new Gm(a,s,t):new Hm(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Vm(a),Oc(e,u)),e=u}}}class vr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Wm(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Bc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Xm=37297;let qm=0;function Ym(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const zc=new It;function $m(s){Xt._getMatrix(zc,Xt.workingColorSpace,s);const t=`mat3( ${zc.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(s)){case yr:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function kc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Ym(s.getShaderSource(t),a)}else return r}function jm(s,t){const e=$m(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Km(s,t){let e;switch(t){case Ah:e="Linear";break;case Rh:e="Reinhard";break;case Ch:e="Cineon";break;case Ph:e="ACESFilmic";break;case Lh:e="AgX";break;case Ih:e="Neutral";break;case Dh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const hr=new R;function Zm(){Xt.getLuminanceCoefficients(hr);const s=hr.x.toFixed(4),t=hr.y.toFixed(4),e=hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function Qm(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function fs(s){return s!==""}function Gc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function fa(s){return s.replace(eg,ig)}const ng=new Map;function ig(s,t){let e=Ft[t];if(e===void 0){const n=ng.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return fa(e)}const sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vc(s){return s.replace(sg,rg)}function rg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Wc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function og(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===rl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===oh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function ag(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ji:case Ki:t="ENVMAP_TYPE_CUBE";break;case Cr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cg(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ki&&(t="ENVMAP_MODE_REFRACTION"),t}function lg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case _a:t="ENVMAP_BLENDING_MULTIPLY";break;case wh:t="ENVMAP_BLENDING_MIX";break;case Th:t="ENVMAP_BLENDING_ADD";break}return t}function hg(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ug(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=og(e),l=ag(e),h=cg(e),u=lg(e),d=hg(e),f=Jm(e),g=Qm(r),_=i.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fs).join(`
`),p.length>0&&(p+=`
`)):(m=[Wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),p=[Wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Yn?Km("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,jm("linearToOutputTexel",e.outputColorSpace),Zm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fs).join(`
`)),o=fa(o),o=Gc(o,e),o=Hc(o,e),a=fa(a),a=Gc(a,e),a=Hc(a,e),o=Vc(o),a=Vc(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Wa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=x+m+o,y=x+p+a,T=Bc(i,i.VERTEX_SHADER,S),A=Bc(i,i.FRAGMENT_SHADER,y);i.attachShader(_,T),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function P(L){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(_)||"",k=i.getShaderInfoLog(T)||"",W=i.getShaderInfoLog(A)||"",$=B.trim(),X=k.trim(),et=W.trim();let G=!0,rt=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,T,A);else{const lt=kc(i,T,"vertex"),St=kc(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+$+`
`+lt+`
`+St)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(X===""||et==="")&&(rt=!1);rt&&(L.diagnostics={runnable:G,programLog:$,vertexShader:{log:X,prefix:m},fragmentShader:{log:et,prefix:p}})}i.deleteShader(T),i.deleteShader(A),I=new vr(i,_),E=tg(i,_)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,Xm)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=A,this}let dg=0;class fg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new pg(t),e.set(t,n)),n}}class pg{constructor(t){this.id=dg++,this.code=t,this.usedTimes=0}}function mg(s,t,e,n,i,r,o){const a=new Aa,c=new fg,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,b,L,B,k){const W=B.fog,$=k.geometry,X=E.isMeshStandardMaterial?B.environment:null,et=(E.isMeshStandardMaterial?e:t).get(E.envMap||X),G=et&&et.mapping===Cr?et.image.height:null,rt=g[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const lt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,St=lt!==void 0?lt.length:0;let kt=0;$.morphAttributes.position!==void 0&&(kt=1),$.morphAttributes.normal!==void 0&&(kt=2),$.morphAttributes.color!==void 0&&(kt=3);let ne,oe,qt,q;if(rt){const Yt=pn[rt];ne=Yt.vertexShader,oe=Yt.fragmentShader}else ne=E.vertexShader,oe=E.fragmentShader,c.update(E),qt=c.getVertexShaderID(E),q=c.getFragmentShaderID(E);const K=s.getRenderTarget(),dt=s.state.buffers.depth.getReversed(),Pt=k.isInstancedMesh===!0,Mt=k.isBatchedMesh===!0,Vt=!!E.map,Ce=!!E.matcap,C=!!et,ae=!!E.aoMap,Lt=!!E.lightMap,Rt=!!E.bumpMap,mt=!!E.normalMap,ce=!!E.displacementMap,gt=!!E.emissiveMap,Nt=!!E.metalnessMap,Me=!!E.roughnessMap,pe=E.anisotropy>0,w=E.clearcoat>0,v=E.dispersion>0,F=E.iridescence>0,V=E.sheen>0,j=E.transmission>0,H=pe&&!!E.anisotropyMap,yt=w&&!!E.clearcoatMap,nt=w&&!!E.clearcoatNormalMap,_t=w&&!!E.clearcoatRoughnessMap,vt=F&&!!E.iridescenceMap,Q=F&&!!E.iridescenceThicknessMap,ct=V&&!!E.sheenColorMap,At=V&&!!E.sheenRoughnessMap,xt=!!E.specularMap,ot=!!E.specularColorMap,Ut=!!E.specularIntensityMap,D=j&&!!E.transmissionMap,tt=j&&!!E.thicknessMap,it=!!E.gradientMap,ut=!!E.alphaMap,Z=E.alphaTest>0,Y=!!E.alphaHash,pt=!!E.extensions;let Dt=Yn;E.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Dt=s.toneMapping);const ie={shaderID:rt,shaderType:E.type,shaderName:E.name,vertexShader:ne,fragmentShader:oe,defines:E.defines,customVertexShaderID:qt,customFragmentShaderID:q,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Mt,batchingColor:Mt&&k._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&k.instanceColor!==null,instancingMorph:Pt&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Zi,alphaToCoverage:!!E.alphaToCoverage,map:Vt,matcap:Ce,envMap:C,envMapMode:C&&et.mapping,envMapCubeUVHeight:G,aoMap:ae,lightMap:Lt,bumpMap:Rt,normalMap:mt,displacementMap:d&&ce,emissiveMap:gt,normalMapObjectSpace:mt&&E.normalMapType===Oh,normalMapTangentSpace:mt&&E.normalMapType===pl,metalnessMap:Nt,roughnessMap:Me,anisotropy:pe,anisotropyMap:H,clearcoat:w,clearcoatMap:yt,clearcoatNormalMap:nt,clearcoatRoughnessMap:_t,dispersion:v,iridescence:F,iridescenceMap:vt,iridescenceThicknessMap:Q,sheen:V,sheenColorMap:ct,sheenRoughnessMap:At,specularMap:xt,specularColorMap:ot,specularIntensityMap:Ut,transmission:j,transmissionMap:D,thicknessMap:tt,gradientMap:it,opaque:E.transparent===!1&&E.blending===Xi&&E.alphaToCoverage===!1,alphaMap:ut,alphaTest:Z,alphaHash:Y,combine:E.combine,mapUv:Vt&&_(E.map.channel),aoMapUv:ae&&_(E.aoMap.channel),lightMapUv:Lt&&_(E.lightMap.channel),bumpMapUv:Rt&&_(E.bumpMap.channel),normalMapUv:mt&&_(E.normalMap.channel),displacementMapUv:ce&&_(E.displacementMap.channel),emissiveMapUv:gt&&_(E.emissiveMap.channel),metalnessMapUv:Nt&&_(E.metalnessMap.channel),roughnessMapUv:Me&&_(E.roughnessMap.channel),anisotropyMapUv:H&&_(E.anisotropyMap.channel),clearcoatMapUv:yt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:nt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:At&&_(E.sheenRoughnessMap.channel),specularMapUv:xt&&_(E.specularMap.channel),specularColorMapUv:ot&&_(E.specularColorMap.channel),specularIntensityMapUv:Ut&&_(E.specularIntensityMap.channel),transmissionMapUv:D&&_(E.transmissionMap.channel),thicknessMapUv:tt&&_(E.thicknessMap.channel),alphaMapUv:ut&&_(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(mt||pe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!$.attributes.uv&&(Vt||ut),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:dt,skinning:k.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:kt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Vt&&E.map.isVideoTexture===!0&&Xt.getTransfer(E.map.colorSpace)===Kt,decodeVideoTextureEmissive:gt&&E.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(E.emissiveMap.colorSpace)===Kt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ie,flipSided:E.side===Ve,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:pt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&E.extensions.multiDraw===!0||Mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ie.vertexUv1s=l.has(1),ie.vertexUv2s=l.has(2),ie.vertexUv3s=l.has(3),l.clear(),ie}function p(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)b.push(L),b.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(x(b,E),S(b,E),b.push(s.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function x(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function S(E,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){const b=g[E.type];let L;if(b){const B=pn[b];L=Au.clone(B.uniforms)}else L=E.uniforms;return L}function T(E,b){let L;for(let B=0,k=h.length;B<k;B++){const W=h[B];if(W.cacheKey===b){L=W,++L.usedTimes;break}}return L===void 0&&(L=new ug(s,b,E,r),h.push(L)),L}function A(E){if(--E.usedTimes===0){const b=h.indexOf(E);h[b]=h[h.length-1],h.pop(),E.destroy()}}function P(E){c.remove(E)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:T,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:I}}function gg(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function _g(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Xc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function qc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||_g),n.length>1&&n.sort(d||Xc),i.length>1&&i.sort(d||Xc)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function vg(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new qc,s.set(n,[o])):i>=r.length?(o=new qc,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function xg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Ht};break;case"SpotLight":e={position:new R,direction:new R,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function yg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Mg=0;function Sg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function bg(s){const t=new xg,e=yg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const i=new R,r=new ee,o=new ee;function a(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,S=0,y=0,T=0,A=0,P=0;l.sort(Sg);for(let E=0,b=l.length;E<b;E++){const L=l[E],B=L.color,k=L.intensity,W=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=B.r*k,u+=B.g*k,d+=B.b*k;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],k);P++}else if(L.isDirectionalLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const et=L.shadow,G=e.get(L);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=L.shadow.matrix,x++}n.directional[f]=X,f++}else if(L.isSpotLight){const X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(B).multiplyScalar(k),X.distance=W,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[_]=X;const et=L.shadow;if(L.map&&(n.spotLightMap[T]=L.map,T++,et.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[_]=et.matrix,L.castShadow){const G=e.get(L);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=$,y++}_++}else if(L.isRectAreaLight){const X=t.get(L);X.color.copy(B).multiplyScalar(k),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=X,m++}else if(L.isPointLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const et=L.shadow,G=e.get(L);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,G.shadowCameraNear=et.camera.near,G.shadowCameraFar=et.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=L.shadow.matrix,S++}n.point[g]=X,g++}else if(L.isHemisphereLight){const X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(k),X.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[p]=X,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==x||I.numPointShadows!==S||I.numSpotShadows!==y||I.numSpotMaps!==T||I.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=x,I.numPointShadows=S,I.numSpotShadows=y,I.numSpotMaps=T,I.numLightProbes=P,n.version=Mg++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const S=l[p];if(S.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(S.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Yc(s){const t=new bg(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Eg(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Yc(s),t.set(i,[a])):r>=o.length?(a=new Yc(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ag(s,t,e){let n=new Ra;const i=new Et,r=new Et,o=new de,a=new Wu({depthPacking:Fh}),c=new Xu,l={},h=e.maxTextureSize,u={[jn]:Ve,[Ve]:jn,[Ie]:Ie},d=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:wg,fragmentShader:Tg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ke;g.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ot(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rl;let p=this.type;this.render=function(A,P,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=s.getRenderTarget(),b=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),B=s.state;B.setBlending(qn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=p!==An&&this.type===An,W=p===An&&this.type!==An;for(let $=0,X=A.length;$<X;$++){const et=A[$],G=et.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const rt=G.getFrameExtents();if(i.multiply(rt),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/rt.x),i.x=r.x*rt.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/rt.y),i.y=r.y*rt.y,G.mapSize.y=r.y)),G.map===null||k===!0||W===!0){const St=this.type!==An?{minFilter:Te,magFilter:Te}:{};G.map!==null&&G.map.dispose(),G.map=new pi(i.x,i.y,St),G.map.texture.name=et.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const lt=G.getViewportCount();for(let St=0;St<lt;St++){const kt=G.getViewport(St);o.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),B.viewport(o),G.updateMatrices(et,St),n=G.getFrustum(),y(P,I,G.camera,et,this.type)}G.isPointLightShadow!==!0&&this.type===An&&x(G,I),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(E,b,L)};function x(A,P){const I=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new pi(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(P,null,I,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(P,null,I,f,_,null)}function S(A,P,I,E){let b=null;const L=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)b=L;else if(b=I.isPointLight===!0?c:a,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const B=b.uuid,k=P.uuid;let W=l[B];W===void 0&&(W={},l[B]=W);let $=W[k];$===void 0&&($=b.clone(),W[k]=$,P.addEventListener("dispose",T)),b=$}if(b.visible=P.visible,b.wireframe=P.wireframe,E===An?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:u[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const B=s.properties.get(b);B.light=I}return b}function y(A,P,I,E,b){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===An)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const k=t.update(A),W=A.material;if(Array.isArray(W)){const $=k.groups;for(let X=0,et=$.length;X<et;X++){const G=$[X],rt=W[G.materialIndex];if(rt&&rt.visible){const lt=S(A,rt,E,b);A.onBeforeShadow(s,A,P,I,k,lt,G),s.renderBufferDirect(I,null,k,lt,A,G),A.onAfterShadow(s,A,P,I,k,lt,G)}}}else if(W.visible){const $=S(A,W,E,b);A.onBeforeShadow(s,A,P,I,k,$,null),s.renderBufferDirect(I,null,k,$,A,null),A.onAfterShadow(s,A,P,I,k,$,null)}}const B=A.children;for(let k=0,W=B.length;k<W;k++)y(B[k],P,I,E,b)}function T(A){A.target.removeEventListener("dispose",T);for(const I in l){const E=l[I],b=A.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}const Rg={[To]:Ao,[Ro]:Do,[Co]:Lo,[$i]:Po,[Ao]:To,[Do]:Ro,[Lo]:Co,[Po]:$i};function Cg(s,t){function e(){let D=!1;const tt=new de;let it=null;const ut=new de(0,0,0,0);return{setMask:function(Z){it!==Z&&!D&&(s.colorMask(Z,Z,Z,Z),it=Z)},setLocked:function(Z){D=Z},setClear:function(Z,Y,pt,Dt,ie){ie===!0&&(Z*=Dt,Y*=Dt,pt*=Dt),tt.set(Z,Y,pt,Dt),ut.equals(tt)===!1&&(s.clearColor(Z,Y,pt,Dt),ut.copy(tt))},reset:function(){D=!1,it=null,ut.set(-1,0,0,0)}}}function n(){let D=!1,tt=!1,it=null,ut=null,Z=null;return{setReversed:function(Y){if(tt!==Y){const pt=t.get("EXT_clip_control");Y?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT),tt=Y;const Dt=Z;Z=null,this.setClear(Dt)}},getReversed:function(){return tt},setTest:function(Y){Y?K(s.DEPTH_TEST):dt(s.DEPTH_TEST)},setMask:function(Y){it!==Y&&!D&&(s.depthMask(Y),it=Y)},setFunc:function(Y){if(tt&&(Y=Rg[Y]),ut!==Y){switch(Y){case To:s.depthFunc(s.NEVER);break;case Ao:s.depthFunc(s.ALWAYS);break;case Ro:s.depthFunc(s.LESS);break;case $i:s.depthFunc(s.LEQUAL);break;case Co:s.depthFunc(s.EQUAL);break;case Po:s.depthFunc(s.GEQUAL);break;case Do:s.depthFunc(s.GREATER);break;case Lo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ut=Y}},setLocked:function(Y){D=Y},setClear:function(Y){Z!==Y&&(tt&&(Y=1-Y),s.clearDepth(Y),Z=Y)},reset:function(){D=!1,it=null,ut=null,Z=null,tt=!1}}}function i(){let D=!1,tt=null,it=null,ut=null,Z=null,Y=null,pt=null,Dt=null,ie=null;return{setTest:function(Yt){D||(Yt?K(s.STENCIL_TEST):dt(s.STENCIL_TEST))},setMask:function(Yt){tt!==Yt&&!D&&(s.stencilMask(Yt),tt=Yt)},setFunc:function(Yt,xn,fn){(it!==Yt||ut!==xn||Z!==fn)&&(s.stencilFunc(Yt,xn,fn),it=Yt,ut=xn,Z=fn)},setOp:function(Yt,xn,fn){(Y!==Yt||pt!==xn||Dt!==fn)&&(s.stencilOp(Yt,xn,fn),Y=Yt,pt=xn,Dt=fn)},setLocked:function(Yt){D=Yt},setClear:function(Yt){ie!==Yt&&(s.clearStencil(Yt),ie=Yt)},reset:function(){D=!1,tt=null,it=null,ut=null,Z=null,Y=null,pt=null,Dt=null,ie=null}}}const r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,S=null,y=null,T=null,A=null,P=new Ht(0,0,0),I=0,E=!1,b=null,L=null,B=null,k=null,W=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,et=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=et>=1):G.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=et>=2);let rt=null,lt={};const St=s.getParameter(s.SCISSOR_BOX),kt=s.getParameter(s.VIEWPORT),ne=new de().fromArray(St),oe=new de().fromArray(kt);function qt(D,tt,it,ut){const Z=new Uint8Array(4),Y=s.createTexture();s.bindTexture(D,Y),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let pt=0;pt<it;pt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(tt,0,s.RGBA,1,1,ut,0,s.RGBA,s.UNSIGNED_BYTE,Z):s.texImage2D(tt+pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Z);return Y}const q={};q[s.TEXTURE_2D]=qt(s.TEXTURE_2D,s.TEXTURE_2D,1),q[s.TEXTURE_CUBE_MAP]=qt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[s.TEXTURE_2D_ARRAY]=qt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),q[s.TEXTURE_3D]=qt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(s.DEPTH_TEST),o.setFunc($i),Rt(!1),mt(za),K(s.CULL_FACE),ae(qn);function K(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function dt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Pt(D,tt){return u[D]!==tt?(s.bindFramebuffer(D,tt),u[D]=tt,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=tt),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=tt),!0):!1}function Mt(D,tt){let it=f,ut=!1;if(D){it=d.get(tt),it===void 0&&(it=[],d.set(tt,it));const Z=D.textures;if(it.length!==Z.length||it[0]!==s.COLOR_ATTACHMENT0){for(let Y=0,pt=Z.length;Y<pt;Y++)it[Y]=s.COLOR_ATTACHMENT0+Y;it.length=Z.length,ut=!0}}else it[0]!==s.BACK&&(it[0]=s.BACK,ut=!0);ut&&s.drawBuffers(it)}function Vt(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const Ce={[ai]:s.FUNC_ADD,[ch]:s.FUNC_SUBTRACT,[lh]:s.FUNC_REVERSE_SUBTRACT};Ce[hh]=s.MIN,Ce[uh]=s.MAX;const C={[dh]:s.ZERO,[fh]:s.ONE,[ph]:s.SRC_COLOR,[Eo]:s.SRC_ALPHA,[yh]:s.SRC_ALPHA_SATURATE,[vh]:s.DST_COLOR,[gh]:s.DST_ALPHA,[mh]:s.ONE_MINUS_SRC_COLOR,[wo]:s.ONE_MINUS_SRC_ALPHA,[xh]:s.ONE_MINUS_DST_COLOR,[_h]:s.ONE_MINUS_DST_ALPHA,[Mh]:s.CONSTANT_COLOR,[Sh]:s.ONE_MINUS_CONSTANT_COLOR,[bh]:s.CONSTANT_ALPHA,[Eh]:s.ONE_MINUS_CONSTANT_ALPHA};function ae(D,tt,it,ut,Z,Y,pt,Dt,ie,Yt){if(D===qn){_===!0&&(dt(s.BLEND),_=!1);return}if(_===!1&&(K(s.BLEND),_=!0),D!==ah){if(D!==m||Yt!==E){if((p!==ai||y!==ai)&&(s.blendEquation(s.FUNC_ADD),p=ai,y=ai),Yt)switch(D){case Xi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ka:s.blendFunc(s.ONE,s.ONE);break;case Ga:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ha:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Xi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ka:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ga:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ha:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,S=null,T=null,A=null,P.set(0,0,0),I=0,m=D,E=Yt}return}Z=Z||tt,Y=Y||it,pt=pt||ut,(tt!==p||Z!==y)&&(s.blendEquationSeparate(Ce[tt],Ce[Z]),p=tt,y=Z),(it!==x||ut!==S||Y!==T||pt!==A)&&(s.blendFuncSeparate(C[it],C[ut],C[Y],C[pt]),x=it,S=ut,T=Y,A=pt),(Dt.equals(P)===!1||ie!==I)&&(s.blendColor(Dt.r,Dt.g,Dt.b,ie),P.copy(Dt),I=ie),m=D,E=!1}function Lt(D,tt){D.side===Ie?dt(s.CULL_FACE):K(s.CULL_FACE);let it=D.side===Ve;tt&&(it=!it),Rt(it),D.blending===Xi&&D.transparent===!1?ae(qn):ae(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const ut=D.stencilWrite;a.setTest(ut),ut&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),gt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(D){b!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),b=D)}function mt(D){D!==sh?(K(s.CULL_FACE),D!==L&&(D===za?s.cullFace(s.BACK):D===rh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):dt(s.CULL_FACE),L=D}function ce(D){D!==B&&(X&&s.lineWidth(D),B=D)}function gt(D,tt,it){D?(K(s.POLYGON_OFFSET_FILL),(k!==tt||W!==it)&&(s.polygonOffset(tt,it),k=tt,W=it)):dt(s.POLYGON_OFFSET_FILL)}function Nt(D){D?K(s.SCISSOR_TEST):dt(s.SCISSOR_TEST)}function Me(D){D===void 0&&(D=s.TEXTURE0+$-1),rt!==D&&(s.activeTexture(D),rt=D)}function pe(D,tt,it){it===void 0&&(rt===null?it=s.TEXTURE0+$-1:it=rt);let ut=lt[it];ut===void 0&&(ut={type:void 0,texture:void 0},lt[it]=ut),(ut.type!==D||ut.texture!==tt)&&(rt!==it&&(s.activeTexture(it),rt=it),s.bindTexture(D,tt||q[D]),ut.type=D,ut.texture=tt)}function w(){const D=lt[rt];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function v(){try{s.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{s.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function V(){try{s.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function H(){try{s.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{s.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{s.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{s.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{s.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{s.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(D){ne.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),ne.copy(D))}function At(D){oe.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),oe.copy(D))}function xt(D,tt){let it=l.get(tt);it===void 0&&(it=new WeakMap,l.set(tt,it));let ut=it.get(D);ut===void 0&&(ut=s.getUniformBlockIndex(tt,D.name),it.set(D,ut))}function ot(D,tt){const ut=l.get(tt).get(D);c.get(tt)!==ut&&(s.uniformBlockBinding(tt,ut,D.__bindingPointIndex),c.set(tt,ut))}function Ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},rt=null,lt={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,S=null,y=null,T=null,A=null,P=new Ht(0,0,0),I=0,E=!1,b=null,L=null,B=null,k=null,W=null,ne.set(0,0,s.canvas.width,s.canvas.height),oe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:dt,bindFramebuffer:Pt,drawBuffers:Mt,useProgram:Vt,setBlending:ae,setMaterial:Lt,setFlipSided:Rt,setCullFace:mt,setLineWidth:ce,setPolygonOffset:gt,setScissorTest:Nt,activeTexture:Me,bindTexture:pe,unbindTexture:w,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:vt,texImage3D:Q,updateUBOMapping:xt,uniformBlockBinding:ot,texStorage2D:nt,texStorage3D:_t,texSubImage2D:V,texSubImage3D:j,compressedTexSubImage2D:H,compressedTexSubImage3D:yt,scissor:ct,viewport:At,reset:Ut}}function Pg(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Et,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return f?new OffscreenCanvas(w,v):Ts("canvas")}function _(w,v,F){let V=1;const j=pe(w);if((j.width>F||j.height>F)&&(V=F/Math.max(j.width,j.height)),V<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const H=Math.floor(V*j.width),yt=Math.floor(V*j.height);u===void 0&&(u=g(H,yt));const nt=v?g(H,yt):u;return nt.width=H,nt.height=yt,nt.getContext("2d").drawImage(w,0,0,H,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+H+"x"+yt+")."),nt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){s.generateMipmap(w)}function x(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(w,v,F,V,j=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let H=v;if(v===s.RED&&(F===s.FLOAT&&(H=s.R32F),F===s.HALF_FLOAT&&(H=s.R16F),F===s.UNSIGNED_BYTE&&(H=s.R8)),v===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(H=s.R8UI),F===s.UNSIGNED_SHORT&&(H=s.R16UI),F===s.UNSIGNED_INT&&(H=s.R32UI),F===s.BYTE&&(H=s.R8I),F===s.SHORT&&(H=s.R16I),F===s.INT&&(H=s.R32I)),v===s.RG&&(F===s.FLOAT&&(H=s.RG32F),F===s.HALF_FLOAT&&(H=s.RG16F),F===s.UNSIGNED_BYTE&&(H=s.RG8)),v===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(H=s.RG8UI),F===s.UNSIGNED_SHORT&&(H=s.RG16UI),F===s.UNSIGNED_INT&&(H=s.RG32UI),F===s.BYTE&&(H=s.RG8I),F===s.SHORT&&(H=s.RG16I),F===s.INT&&(H=s.RG32I)),v===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(H=s.RGB8UI),F===s.UNSIGNED_SHORT&&(H=s.RGB16UI),F===s.UNSIGNED_INT&&(H=s.RGB32UI),F===s.BYTE&&(H=s.RGB8I),F===s.SHORT&&(H=s.RGB16I),F===s.INT&&(H=s.RGB32I)),v===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(H=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(H=s.RGBA16UI),F===s.UNSIGNED_INT&&(H=s.RGBA32UI),F===s.BYTE&&(H=s.RGBA8I),F===s.SHORT&&(H=s.RGBA16I),F===s.INT&&(H=s.RGBA32I)),v===s.RGB&&(F===s.UNSIGNED_INT_5_9_9_9_REV&&(H=s.RGB9_E5),F===s.UNSIGNED_INT_10F_11F_11F_REV&&(H=s.R11F_G11F_B10F)),v===s.RGBA){const yt=j?yr:Xt.getTransfer(V);F===s.FLOAT&&(H=s.RGBA32F),F===s.HALF_FLOAT&&(H=s.RGBA16F),F===s.UNSIGNED_BYTE&&(H=yt===Kt?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(H=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(H=s.RGB5_A1)}return(H===s.R16F||H===s.R32F||H===s.RG16F||H===s.RG32F||H===s.RGBA16F||H===s.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function y(w,v){let F;return w?v===null||v===fi||v===Ss?F=s.DEPTH24_STENCIL8:v===mn?F=s.DEPTH32F_STENCIL8:v===Ms&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===fi||v===Ss?F=s.DEPTH_COMPONENT24:v===mn?F=s.DEPTH_COMPONENT32F:v===Ms&&(F=s.DEPTH_COMPONENT16),F}function T(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Te&&w.minFilter!==tn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function A(w){const v=w.target;v.removeEventListener("dispose",A),I(v),v.isVideoTexture&&h.delete(v)}function P(w){const v=w.target;v.removeEventListener("dispose",P),b(v)}function I(w){const v=n.get(w);if(v.__webglInit===void 0)return;const F=w.source,V=d.get(F);if(V){const j=V[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(w),Object.keys(V).length===0&&d.delete(F)}n.remove(w)}function E(w){const v=n.get(w);s.deleteTexture(v.__webglTexture);const F=w.source,V=d.get(F);delete V[v.__cacheKey],o.memory.textures--}function b(w){const v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let j=0;j<v.__webglFramebuffer[V].length;j++)s.deleteFramebuffer(v.__webglFramebuffer[V][j]);else s.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)s.deleteFramebuffer(v.__webglFramebuffer[V]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=w.textures;for(let V=0,j=F.length;V<j;V++){const H=n.get(F[V]);H.__webglTexture&&(s.deleteTexture(H.__webglTexture),o.memory.textures--),n.remove(F[V])}n.remove(w)}let L=0;function B(){L=0}function k(){const w=L;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),L+=1,w}function W(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function $(w,v){const F=n.get(w);if(w.isVideoTexture&&Nt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){const V=w.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,w,v);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+v)}function X(w,v){const F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){q(F,w,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+v)}function et(w,v){const F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){q(F,w,v);return}e.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+v)}function G(w,v){const F=n.get(w);if(w.version>0&&F.__version!==w.version){K(F,w,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+v)}const rt={[No]:s.REPEAT,[li]:s.CLAMP_TO_EDGE,[Fo]:s.MIRRORED_REPEAT},lt={[Te]:s.NEAREST,[Uh]:s.NEAREST_MIPMAP_NEAREST,[hi]:s.NEAREST_MIPMAP_LINEAR,[tn]:s.LINEAR,[Fr]:s.LINEAR_MIPMAP_NEAREST,[Cn]:s.LINEAR_MIPMAP_LINEAR},St={[Bh]:s.NEVER,[Wh]:s.ALWAYS,[zh]:s.LESS,[ml]:s.LEQUAL,[kh]:s.EQUAL,[Vh]:s.GEQUAL,[Gh]:s.GREATER,[Hh]:s.NOTEQUAL};function kt(w,v){if(v.type===mn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===tn||v.magFilter===Fr||v.magFilter===hi||v.magFilter===Cn||v.minFilter===tn||v.minFilter===Fr||v.minFilter===hi||v.minFilter===Cn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,rt[v.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,rt[v.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,rt[v.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,lt[v.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,lt[v.minFilter]),v.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,St[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Te||v.minFilter!==hi&&v.minFilter!==Cn||v.type===mn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");s.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ne(w,v){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",A));const V=v.source;let j=d.get(V);j===void 0&&(j={},d.set(V,j));const H=W(v);if(H!==w.__cacheKey){j[H]===void 0&&(j[H]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),j[H].usedTimes++;const yt=j[w.__cacheKey];yt!==void 0&&(j[w.__cacheKey].usedTimes--,yt.usedTimes===0&&E(v)),w.__cacheKey=H,w.__webglTexture=j[H].texture}return F}function oe(w,v,F){return Math.floor(Math.floor(w/F)/v)}function qt(w,v,F,V){const H=w.updateRanges;if(H.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,F,V,v.data);else{H.sort((Q,ct)=>Q.start-ct.start);let yt=0;for(let Q=1;Q<H.length;Q++){const ct=H[yt],At=H[Q],xt=ct.start+ct.count,ot=oe(At.start,v.width,4),Ut=oe(ct.start,v.width,4);At.start<=xt+1&&ot===Ut&&oe(At.start+At.count-1,v.width,4)===ot?ct.count=Math.max(ct.count,At.start+At.count-ct.start):(++yt,H[yt]=At)}H.length=yt+1;const nt=s.getParameter(s.UNPACK_ROW_LENGTH),_t=s.getParameter(s.UNPACK_SKIP_PIXELS),vt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let Q=0,ct=H.length;Q<ct;Q++){const At=H[Q],xt=Math.floor(At.start/4),ot=Math.ceil(At.count/4),Ut=xt%v.width,D=Math.floor(xt/v.width),tt=ot,it=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ut),s.pixelStorei(s.UNPACK_SKIP_ROWS,D),e.texSubImage2D(s.TEXTURE_2D,0,Ut,D,tt,it,F,V,v.data)}w.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,nt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,_t),s.pixelStorei(s.UNPACK_SKIP_ROWS,vt)}}function q(w,v,F){let V=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=s.TEXTURE_3D);const j=ne(w,v),H=v.source;e.bindTexture(V,w.__webglTexture,s.TEXTURE0+F);const yt=n.get(H);if(H.version!==yt.__version||j===!0){e.activeTexture(s.TEXTURE0+F);const nt=Xt.getPrimaries(Xt.workingColorSpace),_t=v.colorSpace===Hn?null:Xt.getPrimaries(v.colorSpace),vt=v.colorSpace===Hn||nt===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Q=_(v.image,!1,i.maxTextureSize);Q=Me(v,Q);const ct=r.convert(v.format,v.colorSpace),At=r.convert(v.type);let xt=S(v.internalFormat,ct,At,v.colorSpace,v.isVideoTexture);kt(V,v);let ot;const Ut=v.mipmaps,D=v.isVideoTexture!==!0,tt=yt.__version===void 0||j===!0,it=H.dataReady,ut=T(v,Q);if(v.isDepthTexture)xt=y(v.format===Es,v.type),tt&&(D?e.texStorage2D(s.TEXTURE_2D,1,xt,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,xt,Q.width,Q.height,0,ct,At,null));else if(v.isDataTexture)if(Ut.length>0){D&&tt&&e.texStorage2D(s.TEXTURE_2D,ut,xt,Ut[0].width,Ut[0].height);for(let Z=0,Y=Ut.length;Z<Y;Z++)ot=Ut[Z],D?it&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,ot.width,ot.height,ct,At,ot.data):e.texImage2D(s.TEXTURE_2D,Z,xt,ot.width,ot.height,0,ct,At,ot.data);v.generateMipmaps=!1}else D?(tt&&e.texStorage2D(s.TEXTURE_2D,ut,xt,Q.width,Q.height),it&&qt(v,Q,ct,At)):e.texImage2D(s.TEXTURE_2D,0,xt,Q.width,Q.height,0,ct,At,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){D&&tt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ut,xt,Ut[0].width,Ut[0].height,Q.depth);for(let Z=0,Y=Ut.length;Z<Y;Z++)if(ot=Ut[Z],v.format!==ln)if(ct!==null)if(D){if(it)if(v.layerUpdates.size>0){const pt=bc(ot.width,ot.height,v.format,v.type);for(const Dt of v.layerUpdates){const ie=ot.data.subarray(Dt*pt/ot.data.BYTES_PER_ELEMENT,(Dt+1)*pt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,Dt,ot.width,ot.height,1,ct,ie)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,ot.width,ot.height,Q.depth,ct,ot.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,xt,ot.width,ot.height,Q.depth,0,ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?it&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,ot.width,ot.height,Q.depth,ct,At,ot.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Z,xt,ot.width,ot.height,Q.depth,0,ct,At,ot.data)}else{D&&tt&&e.texStorage2D(s.TEXTURE_2D,ut,xt,Ut[0].width,Ut[0].height);for(let Z=0,Y=Ut.length;Z<Y;Z++)ot=Ut[Z],v.format!==ln?ct!==null?D?it&&e.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,ot.width,ot.height,ct,ot.data):e.compressedTexImage2D(s.TEXTURE_2D,Z,xt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?it&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,ot.width,ot.height,ct,At,ot.data):e.texImage2D(s.TEXTURE_2D,Z,xt,ot.width,ot.height,0,ct,At,ot.data)}else if(v.isDataArrayTexture)if(D){if(tt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ut,xt,Q.width,Q.height,Q.depth),it)if(v.layerUpdates.size>0){const Z=bc(Q.width,Q.height,v.format,v.type);for(const Y of v.layerUpdates){const pt=Q.data.subarray(Y*Z/Q.data.BYTES_PER_ELEMENT,(Y+1)*Z/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Y,Q.width,Q.height,1,ct,At,pt)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ct,At,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,xt,Q.width,Q.height,Q.depth,0,ct,At,Q.data);else if(v.isData3DTexture)D?(tt&&e.texStorage3D(s.TEXTURE_3D,ut,xt,Q.width,Q.height,Q.depth),it&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ct,At,Q.data)):e.texImage3D(s.TEXTURE_3D,0,xt,Q.width,Q.height,Q.depth,0,ct,At,Q.data);else if(v.isFramebufferTexture){if(tt)if(D)e.texStorage2D(s.TEXTURE_2D,ut,xt,Q.width,Q.height);else{let Z=Q.width,Y=Q.height;for(let pt=0;pt<ut;pt++)e.texImage2D(s.TEXTURE_2D,pt,xt,Z,Y,0,ct,At,null),Z>>=1,Y>>=1}}else if(Ut.length>0){if(D&&tt){const Z=pe(Ut[0]);e.texStorage2D(s.TEXTURE_2D,ut,xt,Z.width,Z.height)}for(let Z=0,Y=Ut.length;Z<Y;Z++)ot=Ut[Z],D?it&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,ct,At,ot):e.texImage2D(s.TEXTURE_2D,Z,xt,ct,At,ot);v.generateMipmaps=!1}else if(D){if(tt){const Z=pe(Q);e.texStorage2D(s.TEXTURE_2D,ut,xt,Z.width,Z.height)}it&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct,At,Q)}else e.texImage2D(s.TEXTURE_2D,0,xt,ct,At,Q);m(v)&&p(V),yt.__version=H.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function K(w,v,F){if(v.image.length!==6)return;const V=ne(w,v),j=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+F);const H=n.get(j);if(j.version!==H.__version||V===!0){e.activeTexture(s.TEXTURE0+F);const yt=Xt.getPrimaries(Xt.workingColorSpace),nt=v.colorSpace===Hn?null:Xt.getPrimaries(v.colorSpace),_t=v.colorSpace===Hn||yt===nt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const vt=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,ct=[];for(let Y=0;Y<6;Y++)!vt&&!Q?ct[Y]=_(v.image[Y],!0,i.maxCubemapSize):ct[Y]=Q?v.image[Y].image:v.image[Y],ct[Y]=Me(v,ct[Y]);const At=ct[0],xt=r.convert(v.format,v.colorSpace),ot=r.convert(v.type),Ut=S(v.internalFormat,xt,ot,v.colorSpace),D=v.isVideoTexture!==!0,tt=H.__version===void 0||V===!0,it=j.dataReady;let ut=T(v,At);kt(s.TEXTURE_CUBE_MAP,v);let Z;if(vt){D&&tt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Ut,At.width,At.height);for(let Y=0;Y<6;Y++){Z=ct[Y].mipmaps;for(let pt=0;pt<Z.length;pt++){const Dt=Z[pt];v.format!==ln?xt!==null?D?it&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt,0,0,Dt.width,Dt.height,xt,Dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt,Ut,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt,0,0,Dt.width,Dt.height,xt,ot,Dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt,Ut,Dt.width,Dt.height,0,xt,ot,Dt.data)}}}else{if(Z=v.mipmaps,D&&tt){Z.length>0&&ut++;const Y=pe(ct[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Ut,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Q){D?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ct[Y].width,ct[Y].height,xt,ot,ct[Y].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ut,ct[Y].width,ct[Y].height,0,xt,ot,ct[Y].data);for(let pt=0;pt<Z.length;pt++){const ie=Z[pt].image[Y].image;D?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt+1,0,0,ie.width,ie.height,xt,ot,ie.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt+1,Ut,ie.width,ie.height,0,xt,ot,ie.data)}}else{D?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,xt,ot,ct[Y]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ut,xt,ot,ct[Y]);for(let pt=0;pt<Z.length;pt++){const Dt=Z[pt];D?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt+1,0,0,xt,ot,Dt.image[Y]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt+1,Ut,xt,ot,Dt.image[Y])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),H.__version=j.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function dt(w,v,F,V,j,H){const yt=r.convert(F.format,F.colorSpace),nt=r.convert(F.type),_t=S(F.internalFormat,yt,nt,F.colorSpace),vt=n.get(v),Q=n.get(F);if(Q.__renderTarget=v,!vt.__hasExternalTextures){const ct=Math.max(1,v.width>>H),At=Math.max(1,v.height>>H);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,H,_t,ct,At,v.depth,0,yt,nt,null):e.texImage2D(j,H,_t,ct,At,0,yt,nt,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),gt(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,j,Q.__webglTexture,0,ce(v)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,j,Q.__webglTexture,H),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(w,v,F){if(s.bindRenderbuffer(s.RENDERBUFFER,w),v.depthBuffer){const V=v.depthTexture,j=V&&V.isDepthTexture?V.type:null,H=y(v.stencilBuffer,j),yt=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,nt=ce(v);gt(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt,H,v.width,v.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,H,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,H,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,w)}else{const V=v.textures;for(let j=0;j<V.length;j++){const H=V[j],yt=r.convert(H.format,H.colorSpace),nt=r.convert(H.type),_t=S(H.internalFormat,yt,nt,H.colorSpace),vt=ce(v);F&&gt(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,vt,_t,v.width,v.height):gt(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,vt,_t,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,_t,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Mt(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=n.get(v.depthTexture);V.__renderTarget=v,(!V.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);const j=V.__webglTexture,H=ce(v);if(v.depthTexture.format===bs)gt(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(v.depthTexture.format===Es)gt(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Vt(w){const v=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const V=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",j)};V.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=V}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const V=w.texture.mipmaps;V&&V.length>0?Mt(v.__webglFramebuffer[0],w):Mt(v.__webglFramebuffer,w)}else if(F){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=s.createRenderbuffer(),Pt(v.__webglDepthbuffer[V],w,!1);else{const j=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,H),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,H)}}else{const V=w.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Pt(v.__webglDepthbuffer,w,!1);else{const j=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,H),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,H)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(w,v,F){const V=n.get(w);v!==void 0&&dt(V.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Vt(w)}function C(w){const v=w.texture,F=n.get(w),V=n.get(v);w.addEventListener("dispose",P);const j=w.textures,H=w.isWebGLCubeRenderTarget===!0,yt=j.length>1;if(yt||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=v.version,o.memory.textures++),H){F.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[nt]=[];for(let _t=0;_t<v.mipmaps.length;_t++)F.__webglFramebuffer[nt][_t]=s.createFramebuffer()}else F.__webglFramebuffer[nt]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let nt=0;nt<v.mipmaps.length;nt++)F.__webglFramebuffer[nt]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(yt)for(let nt=0,_t=j.length;nt<_t;nt++){const vt=n.get(j[nt]);vt.__webglTexture===void 0&&(vt.__webglTexture=s.createTexture(),o.memory.textures++)}if(w.samples>0&&gt(w)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let nt=0;nt<j.length;nt++){const _t=j[nt];F.__webglColorRenderbuffer[nt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[nt]);const vt=r.convert(_t.format,_t.colorSpace),Q=r.convert(_t.type),ct=S(_t.internalFormat,vt,Q,_t.colorSpace,w.isXRRenderTarget===!0),At=ce(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,At,ct,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,F.__webglColorRenderbuffer[nt])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Pt(F.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(H){e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),kt(s.TEXTURE_CUBE_MAP,v);for(let nt=0;nt<6;nt++)if(v.mipmaps&&v.mipmaps.length>0)for(let _t=0;_t<v.mipmaps.length;_t++)dt(F.__webglFramebuffer[nt][_t],w,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t);else dt(F.__webglFramebuffer[nt],w,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);m(v)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let nt=0,_t=j.length;nt<_t;nt++){const vt=j[nt],Q=n.get(vt);let ct=s.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ct=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,Q.__webglTexture),kt(ct,vt),dt(F.__webglFramebuffer,w,vt,s.COLOR_ATTACHMENT0+nt,ct,0),m(vt)&&p(ct)}e.unbindTexture()}else{let nt=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(nt=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(nt,V.__webglTexture),kt(nt,v),v.mipmaps&&v.mipmaps.length>0)for(let _t=0;_t<v.mipmaps.length;_t++)dt(F.__webglFramebuffer[_t],w,v,s.COLOR_ATTACHMENT0,nt,_t);else dt(F.__webglFramebuffer,w,v,s.COLOR_ATTACHMENT0,nt,0);m(v)&&p(nt),e.unbindTexture()}w.depthBuffer&&Vt(w)}function ae(w){const v=w.textures;for(let F=0,V=v.length;F<V;F++){const j=v[F];if(m(j)){const H=x(w),yt=n.get(j).__webglTexture;e.bindTexture(H,yt),p(H),e.unbindTexture()}}}const Lt=[],Rt=[];function mt(w){if(w.samples>0){if(gt(w)===!1){const v=w.textures,F=w.width,V=w.height;let j=s.COLOR_BUFFER_BIT;const H=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=n.get(w),nt=v.length>1;if(nt)for(let vt=0;vt<v.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);const _t=w.texture.mipmaps;_t&&_t.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let vt=0;vt<v.length;vt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),nt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,yt.__webglColorRenderbuffer[vt]);const Q=n.get(v[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,F,V,0,0,F,V,j,s.NEAREST),c===!0&&(Lt.length=0,Rt.length=0,Lt.push(s.COLOR_ATTACHMENT0+vt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Lt.push(H),Rt.push(H),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Rt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Lt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),nt)for(let vt=0;vt<v.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,yt.__webglColorRenderbuffer[vt]);const Q=n.get(v[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,Q,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const v=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function ce(w){return Math.min(i.maxSamples,w.samples)}function gt(w){const v=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Nt(w){const v=o.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function Me(w,v){const F=w.colorSpace,V=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Zi&&F!==Hn&&(Xt.getTransfer(F)===Kt?(V!==ln||j!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function pe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=X,this.setTexture3D=et,this.setTextureCube=G,this.rebindTextures=Ce,this.setupRenderTarget=C,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=gt}function Dg(s,t){function e(n,i=Hn){let r;const o=Xt.getTransfer(i);if(n===vn)return s.UNSIGNED_BYTE;if(n===xa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ya)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ll)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===hl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===al)return s.BYTE;if(n===cl)return s.SHORT;if(n===Ms)return s.UNSIGNED_SHORT;if(n===va)return s.INT;if(n===fi)return s.UNSIGNED_INT;if(n===mn)return s.FLOAT;if(n===Ds)return s.HALF_FLOAT;if(n===ul)return s.ALPHA;if(n===dl)return s.RGB;if(n===ln)return s.RGBA;if(n===bs)return s.DEPTH_COMPONENT;if(n===Es)return s.DEPTH_STENCIL;if(n===Ma)return s.RED;if(n===Sa)return s.RED_INTEGER;if(n===fl)return s.RG;if(n===ba)return s.RG_INTEGER;if(n===Ea)return s.RGBA_INTEGER;if(n===pr||n===mr||n===gr||n===_r)if(o===Kt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oo||n===Bo||n===zo||n===ko)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Go||n===Ho||n===Vo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Go||n===Ho)return o===Kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vo)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wo||n===Xo||n===qo||n===Yo||n===$o||n===jo||n===Ko||n===Zo||n===Jo||n===Qo||n===ta||n===ea||n===na||n===ia)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wo)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xo)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qo)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yo)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$o)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jo)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ko)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zo)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jo)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qo)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ta)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ea)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===na)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ia)return o===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sa||n===ra||n===oa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===sa)return o===Kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ra)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===aa||n===ca||n===la||n===ha)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ca)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===la)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ha)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Lg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ig=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ug{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Al(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Kn({vertexShader:Lg,fragmentShader:Ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ot(new $n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ng extends mi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Ug,p={},x=e.getContextAttributes();let S=null,y=null;const T=[],A=[],P=new Et;let I=null;const E=new Qe;E.viewport=new de;const b=new Qe;b.viewport=new de;const L=[E,b],B=new td;let k=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=T[q];return K===void 0&&(K=new io,T[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=T[q];return K===void 0&&(K=new io,T[q]=K),K.getGripSpace()},this.getHand=function(q){let K=T[q];return K===void 0&&(K=new io,T[q]=K),K.getHandSpace()};function $(q){const K=A.indexOf(q.inputSource);if(K===-1)return;const dt=T[K];dt!==void 0&&(dt.update(q.inputSource,q.frame,l||o),dt.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){i.removeEventListener("select",$),i.removeEventListener("selectstart",$),i.removeEventListener("selectend",$),i.removeEventListener("squeeze",$),i.removeEventListener("squeezestart",$),i.removeEventListener("squeezeend",$),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",et);for(let q=0;q<T.length;q++){const K=A[q];K!==null&&(A[q]=null,T[q].disconnect(K))}k=null,W=null,m.reset();for(const q in p)delete p[q];t.setRenderTarget(S),f=null,d=null,u=null,i=null,y=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",$),i.addEventListener("selectstart",$),i.addEventListener("selectend",$),i.addEventListener("squeeze",$),i.addEventListener("squeezestart",$),i.addEventListener("squeezeend",$),i.addEventListener("end",X),i.addEventListener("inputsourceschange",et),x.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,Pt=null,Mt=null;x.depth&&(Mt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=x.stencil?Es:bs,Pt=x.stencil?Ss:fi);const Vt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Vt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new pi(d.textureWidth,d.textureHeight,{format:ln,type:vn,depthTexture:new Tl(d.textureWidth,d.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const dt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,dt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new pi(f.framebufferWidth,f.framebufferHeight,{format:ln,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),qt.setContext(i),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(q){for(let K=0;K<q.removed.length;K++){const dt=q.removed[K],Pt=A.indexOf(dt);Pt>=0&&(A[Pt]=null,T[Pt].disconnect(dt))}for(let K=0;K<q.added.length;K++){const dt=q.added[K];let Pt=A.indexOf(dt);if(Pt===-1){for(let Vt=0;Vt<T.length;Vt++)if(Vt>=A.length){A.push(dt),Pt=Vt;break}else if(A[Vt]===null){A[Vt]=dt,Pt=Vt;break}if(Pt===-1)break}const Mt=T[Pt];Mt&&Mt.connect(dt)}}const G=new R,rt=new R;function lt(q,K,dt){G.setFromMatrixPosition(K.matrixWorld),rt.setFromMatrixPosition(dt.matrixWorld);const Pt=G.distanceTo(rt),Mt=K.projectionMatrix.elements,Vt=dt.projectionMatrix.elements,Ce=Mt[14]/(Mt[10]-1),C=Mt[14]/(Mt[10]+1),ae=(Mt[9]+1)/Mt[5],Lt=(Mt[9]-1)/Mt[5],Rt=(Mt[8]-1)/Mt[0],mt=(Vt[8]+1)/Vt[0],ce=Ce*Rt,gt=Ce*mt,Nt=Pt/(-Rt+mt),Me=Nt*-Rt;if(K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Me),q.translateZ(Nt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Mt[10]===-1)q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const pe=Ce+Nt,w=C+Nt,v=ce-Me,F=gt+(Pt-Me),V=ae*C/w*pe,j=Lt*C/w*pe;q.projectionMatrix.makePerspective(v,F,V,j,pe,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function St(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let K=q.near,dt=q.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(dt=m.depthFar)),B.near=b.near=E.near=K,B.far=b.far=E.far=dt,(k!==B.near||W!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),k=B.near,W=B.far),B.layers.mask=q.layers.mask|6,E.layers.mask=B.layers.mask&3,b.layers.mask=B.layers.mask&5;const Pt=q.parent,Mt=B.cameras;St(B,Pt);for(let Vt=0;Vt<Mt.length;Vt++)St(Mt[Vt],Pt);Mt.length===2?lt(B,E,b):B.projectionMatrix.copy(E.projectionMatrix),kt(q,B,Pt)};function kt(q,K,dt){dt===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(dt.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ws*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(q){return p[q]};let ne=null;function oe(q,K){if(h=K.getViewerPose(l||o),g=K,h!==null){const dt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Pt=!1;dt.length!==B.cameras.length&&(B.cameras.length=0,Pt=!0);for(let C=0;C<dt.length;C++){const ae=dt[C];let Lt=null;if(f!==null)Lt=f.getViewport(ae);else{const mt=u.getViewSubImage(d,ae);Lt=mt.viewport,C===0&&(t.setRenderTargetTextures(y,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(y))}let Rt=L[C];Rt===void 0&&(Rt=new Qe,Rt.layers.enable(C),Rt.viewport=new de,L[C]=Rt),Rt.matrix.fromArray(ae.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(ae.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),C===0&&(B.matrix.copy(Rt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Pt===!0&&B.cameras.push(Rt)}const Mt=i.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const C=u.getDepthInformation(dt[0]);C&&C.isValid&&C.texture&&m.init(C,i.renderState)}if(Mt&&Mt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let C=0;C<dt.length;C++){const ae=dt[C].camera;if(ae){let Lt=p[ae];Lt||(Lt=new Al,p[ae]=Lt);const Rt=u.getCameraImage(ae);Lt.sourceTexture=Rt}}}}for(let dt=0;dt<T.length;dt++){const Pt=A[dt],Mt=T[dt];Pt!==null&&Mt!==void 0&&Mt.update(Pt,K,l||o)}ne&&ne(q,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const qt=new Pl;qt.setAnimationLoop(oe),this.setAnimationLoop=function(q){ne=q},this.dispose=function(){}}}const si=new un,Fg=new ee;function Og(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ml(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ve&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ve&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),S=x.envMap,y=x.envMapRotation;S&&(m.envMap.value=S,si.copy(y),si.x*=-1,si.y*=-1,si.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),m.envMapRotation.value.setFromMatrix4(Fg.makeRotationFromEuler(si)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Bg(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,S){const y=S.program;n.uniformBlockBinding(x,y)}function l(x,S){let y=i[x.id];y===void 0&&(g(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",m));const T=S.program;n.updateUBOMapping(x,T);const A=t.render.frame;r[x.id]!==A&&(d(x),r[x.id]=A)}function h(x){const S=u();x.__bindingPointIndex=S;const y=s.createBuffer(),T=x.__size,A=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,T,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,y),y}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const S=i[x.id],y=x.uniforms,T=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let A=0,P=y.length;A<P;A++){const I=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,b=I.length;E<b;E++){const L=I[E];if(f(L,A,E,T)===!0){const B=L.__offset,k=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let $=0;$<k.length;$++){const X=k[$],et=_(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,B+W,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,W),W+=et.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,S,y,T){const A=x.value,P=S+"_"+y;if(T[P]===void 0)return typeof A=="number"||typeof A=="boolean"?T[P]=A:T[P]=A.clone(),!0;{const I=T[P];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return T[P]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(x){const S=x.uniforms;let y=0;const T=16;for(let P=0,I=S.length;P<I;P++){const E=Array.isArray(S[P])?S[P]:[S[P]];for(let b=0,L=E.length;b<L;b++){const B=E[b],k=Array.isArray(B.value)?B.value:[B.value];for(let W=0,$=k.length;W<$;W++){const X=k[W],et=_(X),G=y%T,rt=G%et.boundary,lt=G+rt;y+=rt,lt!==0&&T-lt<et.storage&&(y+=T-lt),B.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=et.storage}}}const A=y%T;return A>0&&(y+=T-A),x.__size=y,x.__cache={},this}function _(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function m(x){const S=x.target;S.removeEventListener("dispose",m);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class zg{constructor(t={}){const{canvas:e=au(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const x=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let T=!1;this._outputColorSpace=ge;let A=0,P=0,I=null,E=-1,b=null;const L=new de,B=new de;let k=null;const W=new Ht(0);let $=0,X=e.width,et=e.height,G=1,rt=null,lt=null;const St=new de(0,0,X,et),kt=new de(0,0,X,et);let ne=!1;const oe=new Ra;let qt=!1,q=!1;const K=new ee,dt=new R,Pt=new de,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function Ce(){return I===null?G:1}let C=n;function ae(M,U){return e.getContext(M,U)}try{const M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ga}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",Z,!1),C===null){const U="webgl2";if(C=ae(U,M),C===null)throw ae(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Lt,Rt,mt,ce,gt,Nt,Me,pe,w,v,F,V,j,H,yt,nt,_t,vt,Q,ct,At,xt,ot,Ut;function D(){Lt=new jp(C),Lt.init(),xt=new Dg(C,Lt),Rt=new Hp(C,Lt,t,xt),mt=new Cg(C,Lt),Rt.reversedDepthBuffer&&d&&mt.buffers.depth.setReversed(!0),ce=new Jp(C),gt=new gg,Nt=new Pg(C,Lt,mt,gt,Rt,xt,ce),Me=new Wp(y),pe=new $p(y),w=new id(C),ot=new kp(C,w),v=new Kp(C,w,ce,ot),F=new tm(C,v,w,ce),Q=new Qp(C,Rt,Nt),nt=new Vp(gt),V=new mg(y,Me,pe,Lt,Rt,ot,nt),j=new Og(y,gt),H=new vg,yt=new Eg(Lt),vt=new zp(y,Me,pe,mt,F,f,c),_t=new Ag(y,F,Rt),Ut=new Bg(C,ce,Rt,mt),ct=new Gp(C,Lt,ce),At=new Zp(C,Lt,ce),ce.programs=V.programs,y.capabilities=Rt,y.extensions=Lt,y.properties=gt,y.renderLists=H,y.shadowMap=_t,y.state=mt,y.info=ce}D();const tt=new Ng(y,C);this.xr=tt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=Lt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Lt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(M){M!==void 0&&(G=M,this.setSize(X,et,!1))},this.getSize=function(M){return M.set(X,et)},this.setSize=function(M,U,O=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,et=U,e.width=Math.floor(M*G),e.height=Math.floor(U*G),O===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(X*G,et*G).floor()},this.setDrawingBufferSize=function(M,U,O){X=M,et=U,G=O,e.width=Math.floor(M*O),e.height=Math.floor(U*O),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(St)},this.setViewport=function(M,U,O,z){M.isVector4?St.set(M.x,M.y,M.z,M.w):St.set(M,U,O,z),mt.viewport(L.copy(St).multiplyScalar(G).round())},this.getScissor=function(M){return M.copy(kt)},this.setScissor=function(M,U,O,z){M.isVector4?kt.set(M.x,M.y,M.z,M.w):kt.set(M,U,O,z),mt.scissor(B.copy(kt).multiplyScalar(G).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(M){mt.setScissorTest(ne=M)},this.setOpaqueSort=function(M){rt=M},this.setTransparentSort=function(M){lt=M},this.getClearColor=function(M){return M.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor(...arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,O=!0){let z=0;if(M){let N=!1;if(I!==null){const J=I.texture.format;N=J===Ea||J===ba||J===Sa}if(N){const J=I.texture.type,at=J===vn||J===fi||J===Ms||J===Ss||J===xa||J===ya,ft=vt.getClearColor(),ht=vt.getClearAlpha(),Tt=ft.r,Ct=ft.g,bt=ft.b;at?(g[0]=Tt,g[1]=Ct,g[2]=bt,g[3]=ht,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Tt,_[1]=Ct,_[2]=bt,_[3]=ht,C.clearBufferiv(C.COLOR,0,_))}else z|=C.COLOR_BUFFER_BIT}U&&(z|=C.DEPTH_BUFFER_BIT),O&&(z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",Z,!1),vt.dispose(),H.dispose(),yt.dispose(),gt.dispose(),Me.dispose(),pe.dispose(),F.dispose(),ot.dispose(),Ut.dispose(),V.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",fn),tt.removeEventListener("sessionend",La),Zn.stop()};function it(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const M=ce.autoReset,U=_t.enabled,O=_t.autoUpdate,z=_t.needsUpdate,N=_t.type;D(),ce.autoReset=M,_t.enabled=U,_t.autoUpdate=O,_t.needsUpdate=z,_t.type=N}function Z(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Y(M){const U=M.target;U.removeEventListener("dispose",Y),pt(U)}function pt(M){Dt(M),gt.remove(M)}function Dt(M){const U=gt.get(M).programs;U!==void 0&&(U.forEach(function(O){V.releaseProgram(O)}),M.isShaderMaterial&&V.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,O,z,N,J){U===null&&(U=Mt);const at=N.isMesh&&N.matrixWorld.determinant()<0,ft=Xl(M,U,O,z,N);mt.setMaterial(z,at);let ht=O.index,Tt=1;if(z.wireframe===!0){if(ht=v.getWireframeAttribute(O),ht===void 0)return;Tt=2}const Ct=O.drawRange,bt=O.attributes.position;let Gt=Ct.start*Tt,jt=(Ct.start+Ct.count)*Tt;J!==null&&(Gt=Math.max(Gt,J.start*Tt),jt=Math.min(jt,(J.start+J.count)*Tt)),ht!==null?(Gt=Math.max(Gt,0),jt=Math.min(jt,ht.count)):bt!=null&&(Gt=Math.max(Gt,0),jt=Math.min(jt,bt.count));const ue=jt-Gt;if(ue<0||ue===1/0)return;ot.setup(N,z,ft,O,ht);let re,Jt=ct;if(ht!==null&&(re=w.get(ht),Jt=At,Jt.setIndex(re)),N.isMesh)z.wireframe===!0?(mt.setLineWidth(z.wireframeLinewidth*Ce()),Jt.setMode(C.LINES)):Jt.setMode(C.TRIANGLES);else if(N.isLine){let wt=z.linewidth;wt===void 0&&(wt=1),mt.setLineWidth(wt*Ce()),N.isLineSegments?Jt.setMode(C.LINES):N.isLineLoop?Jt.setMode(C.LINE_LOOP):Jt.setMode(C.LINE_STRIP)}else N.isPoints?Jt.setMode(C.POINTS):N.isSprite&&Jt.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)As("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Jt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Lt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const wt=N._multiDrawStarts,le=N._multiDrawCounts,Wt=N._multiDrawCount,We=ht?w.get(ht).bytesPerElement:1,vi=gt.get(z).currentProgram.getUniforms();for(let Xe=0;Xe<Wt;Xe++)vi.setValue(C,"_gl_DrawID",Xe),Jt.render(wt[Xe]/We,le[Xe])}else if(N.isInstancedMesh)Jt.renderInstances(Gt,ue,N.count);else if(O.isInstancedBufferGeometry){const wt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,le=Math.min(O.instanceCount,wt);Jt.renderInstances(Gt,ue,le)}else Jt.render(Gt,ue)};function ie(M,U,O){M.transparent===!0&&M.side===Ie&&M.forceSinglePass===!1?(M.side=Ve,M.needsUpdate=!0,Ns(M,U,O),M.side=jn,M.needsUpdate=!0,Ns(M,U,O),M.side=Ie):Ns(M,U,O)}this.compile=function(M,U,O=null){O===null&&(O=M),p=yt.get(O),p.init(U),S.push(p),O.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),M!==O&&M.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const z=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const J=N.material;if(J)if(Array.isArray(J))for(let at=0;at<J.length;at++){const ft=J[at];ie(ft,O,N),z.add(ft)}else ie(J,O,N),z.add(J)}),p=S.pop(),z},this.compileAsync=function(M,U,O=null){const z=this.compile(M,U,O);return new Promise(N=>{function J(){if(z.forEach(function(at){gt.get(at).currentProgram.isReady()&&z.delete(at)}),z.size===0){N(M);return}setTimeout(J,10)}Lt.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Yt=null;function xn(M){Yt&&Yt(M)}function fn(){Zn.stop()}function La(){Zn.start()}const Zn=new Pl;Zn.setAnimationLoop(xn),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(M){Yt=M,tt.setAnimationLoop(M),M===null?Zn.stop():Zn.start()},tt.addEventListener("sessionstart",fn),tt.addEventListener("sessionend",La),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(U),U=tt.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,U,I),p=yt.get(M,S.length),p.init(U),S.push(p),K.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),oe.setFromProjectionMatrix(K,gn,U.reversedDepth),q=this.localClippingEnabled,qt=nt.init(this.clippingPlanes,q),m=H.get(M,x.length),m.init(),x.push(m),tt.enabled===!0&&tt.isPresenting===!0){const J=y.xr.getDepthSensingMesh();J!==null&&Ur(J,U,-1/0,y.sortObjects)}Ur(M,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(rt,lt),Vt=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,Vt&&vt.addToRenderList(m,M),this.info.render.frame++,qt===!0&&nt.beginShadows();const O=p.state.shadowsArray;_t.render(O,M,U),qt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const J=U.cameras;if(N.length>0)for(let at=0,ft=J.length;at<ft;at++){const ht=J[at];Ua(z,N,M,ht)}Vt&&vt.render(M);for(let at=0,ft=J.length;at<ft;at++){const ht=J[at];Ia(m,M,ht,ht.viewport)}}else N.length>0&&Ua(z,N,M,U),Vt&&vt.render(M),Ia(m,M,U);I!==null&&P===0&&(Nt.updateMultisampleRenderTarget(I),Nt.updateRenderTargetMipmap(I)),M.isScene===!0&&M.onAfterRender(y,M,U),ot.resetDefaultState(),E=-1,b=null,S.pop(),S.length>0?(p=S[S.length-1],qt===!0&&nt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Ur(M,U,O,z){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||oe.intersectsSprite(M)){z&&Pt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(K);const at=F.update(M),ft=M.material;ft.visible&&m.push(M,at,ft,O,Pt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||oe.intersectsObject(M))){const at=F.update(M),ft=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Pt.copy(M.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),Pt.copy(at.boundingSphere.center)),Pt.applyMatrix4(M.matrixWorld).applyMatrix4(K)),Array.isArray(ft)){const ht=at.groups;for(let Tt=0,Ct=ht.length;Tt<Ct;Tt++){const bt=ht[Tt],Gt=ft[bt.materialIndex];Gt&&Gt.visible&&m.push(M,at,Gt,O,Pt.z,bt)}}else ft.visible&&m.push(M,at,ft,O,Pt.z,null)}}const J=M.children;for(let at=0,ft=J.length;at<ft;at++)Ur(J[at],U,O,z)}function Ia(M,U,O,z){const N=M.opaque,J=M.transmissive,at=M.transparent;p.setupLightsView(O),qt===!0&&nt.setGlobalState(y.clippingPlanes,O),z&&mt.viewport(L.copy(z)),N.length>0&&Us(N,U,O),J.length>0&&Us(J,U,O),at.length>0&&Us(at,U,O),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function Ua(M,U,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new pi(1,1,{generateMipmaps:!0,type:Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float")?Ds:vn,minFilter:Cn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const J=p.state.transmissionRenderTarget[z.id],at=z.viewport||L;J.setSize(at.z*y.transmissionResolutionScale,at.w*y.transmissionResolutionScale);const ft=y.getRenderTarget(),ht=y.getActiveCubeFace(),Tt=y.getActiveMipmapLevel();y.setRenderTarget(J),y.getClearColor(W),$=y.getClearAlpha(),$<1&&y.setClearColor(16777215,.5),y.clear(),Vt&&vt.render(O);const Ct=y.toneMapping;y.toneMapping=Yn;const bt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),qt===!0&&nt.setGlobalState(y.clippingPlanes,z),Us(M,O,z),Nt.updateMultisampleRenderTarget(J),Nt.updateRenderTargetMipmap(J),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let jt=0,ue=U.length;jt<ue;jt++){const re=U[jt],Jt=re.object,wt=re.geometry,le=re.material,Wt=re.group;if(le.side===Ie&&Jt.layers.test(z.layers)){const We=le.side;le.side=Ve,le.needsUpdate=!0,Na(Jt,O,z,wt,le,Wt),le.side=We,le.needsUpdate=!0,Gt=!0}}Gt===!0&&(Nt.updateMultisampleRenderTarget(J),Nt.updateRenderTargetMipmap(J))}y.setRenderTarget(ft,ht,Tt),y.setClearColor(W,$),bt!==void 0&&(z.viewport=bt),y.toneMapping=Ct}function Us(M,U,O){const z=U.isScene===!0?U.overrideMaterial:null;for(let N=0,J=M.length;N<J;N++){const at=M[N],ft=at.object,ht=at.geometry,Tt=at.group;let Ct=at.material;Ct.allowOverride===!0&&z!==null&&(Ct=z),ft.layers.test(O.layers)&&Na(ft,U,O,ht,Ct,Tt)}}function Na(M,U,O,z,N,J){M.onBeforeRender(y,U,O,z,N,J),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(y,U,O,z,M,J),N.transparent===!0&&N.side===Ie&&N.forceSinglePass===!1?(N.side=Ve,N.needsUpdate=!0,y.renderBufferDirect(O,U,z,N,M,J),N.side=jn,N.needsUpdate=!0,y.renderBufferDirect(O,U,z,N,M,J),N.side=Ie):y.renderBufferDirect(O,U,z,N,M,J),M.onAfterRender(y,U,O,z,N,J)}function Ns(M,U,O){U.isScene!==!0&&(U=Mt);const z=gt.get(M),N=p.state.lights,J=p.state.shadowsArray,at=N.state.version,ft=V.getParameters(M,N.state,J,U,O),ht=V.getProgramCacheKey(ft);let Tt=z.programs;z.environment=M.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(M.isMeshStandardMaterial?pe:Me).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Tt===void 0&&(M.addEventListener("dispose",Y),Tt=new Map,z.programs=Tt);let Ct=Tt.get(ht);if(Ct!==void 0){if(z.currentProgram===Ct&&z.lightsStateVersion===at)return Oa(M,ft),Ct}else ft.uniforms=V.getUniforms(M),M.onBeforeCompile(ft,y),Ct=V.acquireProgram(ft,ht),Tt.set(ht,Ct),z.uniforms=ft.uniforms;const bt=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(bt.clippingPlanes=nt.uniform),Oa(M,ft),z.needsLights=Yl(M),z.lightsStateVersion=at,z.needsLights&&(bt.ambientLightColor.value=N.state.ambient,bt.lightProbe.value=N.state.probe,bt.directionalLights.value=N.state.directional,bt.directionalLightShadows.value=N.state.directionalShadow,bt.spotLights.value=N.state.spot,bt.spotLightShadows.value=N.state.spotShadow,bt.rectAreaLights.value=N.state.rectArea,bt.ltc_1.value=N.state.rectAreaLTC1,bt.ltc_2.value=N.state.rectAreaLTC2,bt.pointLights.value=N.state.point,bt.pointLightShadows.value=N.state.pointShadow,bt.hemisphereLights.value=N.state.hemi,bt.directionalShadowMap.value=N.state.directionalShadowMap,bt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,bt.spotShadowMap.value=N.state.spotShadowMap,bt.spotLightMatrix.value=N.state.spotLightMatrix,bt.spotLightMap.value=N.state.spotLightMap,bt.pointShadowMap.value=N.state.pointShadowMap,bt.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Ct,z.uniformsList=null,Ct}function Fa(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=vr.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Oa(M,U){const O=gt.get(M);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function Xl(M,U,O,z,N){U.isScene!==!0&&(U=Mt),Nt.resetTextureUnits();const J=U.fog,at=z.isMeshStandardMaterial?U.environment:null,ft=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Zi,ht=(z.isMeshStandardMaterial?pe:Me).get(z.envMap||at),Tt=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ct=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),bt=!!O.morphAttributes.position,Gt=!!O.morphAttributes.normal,jt=!!O.morphAttributes.color;let ue=Yn;z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ue=y.toneMapping);const re=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Jt=re!==void 0?re.length:0,wt=gt.get(z),le=p.state.lights;if(qt===!0&&(q===!0||M!==b)){const Ne=M===b&&z.id===E;nt.setState(z,M,Ne)}let Wt=!1;z.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==le.state.version||wt.outputColorSpace!==ft||N.isBatchedMesh&&wt.batching===!1||!N.isBatchedMesh&&wt.batching===!0||N.isBatchedMesh&&wt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&wt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&wt.instancing===!1||!N.isInstancedMesh&&wt.instancing===!0||N.isSkinnedMesh&&wt.skinning===!1||!N.isSkinnedMesh&&wt.skinning===!0||N.isInstancedMesh&&wt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&wt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&wt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&wt.instancingMorph===!1&&N.morphTexture!==null||wt.envMap!==ht||z.fog===!0&&wt.fog!==J||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==nt.numPlanes||wt.numIntersection!==nt.numIntersection)||wt.vertexAlphas!==Tt||wt.vertexTangents!==Ct||wt.morphTargets!==bt||wt.morphNormals!==Gt||wt.morphColors!==jt||wt.toneMapping!==ue||wt.morphTargetsCount!==Jt)&&(Wt=!0):(Wt=!0,wt.__version=z.version);let We=wt.currentProgram;Wt===!0&&(We=Ns(z,U,N));let vi=!1,Xe=!1,es=!1;const he=We.getUniforms(),Ke=wt.uniforms;if(mt.useProgram(We.program)&&(vi=!0,Xe=!0,es=!0),z.id!==E&&(E=z.id,Xe=!0),vi||b!==M){mt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),he.setValue(C,"projectionMatrix",M.projectionMatrix),he.setValue(C,"viewMatrix",M.matrixWorldInverse);const Ge=he.map.cameraPosition;Ge!==void 0&&Ge.setValue(C,dt.setFromMatrixPosition(M.matrixWorld)),Rt.logarithmicDepthBuffer&&he.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&he.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,Xe=!0,es=!0)}if(N.isSkinnedMesh){he.setOptional(C,N,"bindMatrix"),he.setOptional(C,N,"bindMatrixInverse");const Ne=N.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),he.setValue(C,"boneTexture",Ne.boneTexture,Nt))}N.isBatchedMesh&&(he.setOptional(C,N,"batchingTexture"),he.setValue(C,"batchingTexture",N._matricesTexture,Nt),he.setOptional(C,N,"batchingIdTexture"),he.setValue(C,"batchingIdTexture",N._indirectTexture,Nt),he.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&he.setValue(C,"batchingColorTexture",N._colorsTexture,Nt));const Ze=O.morphAttributes;if((Ze.position!==void 0||Ze.normal!==void 0||Ze.color!==void 0)&&Q.update(N,O,We),(Xe||wt.receiveShadow!==N.receiveShadow)&&(wt.receiveShadow=N.receiveShadow,he.setValue(C,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ke.envMap.value=ht,Ke.flipEnvMap.value=ht.isCubeTexture&&ht.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Ke.envMapIntensity.value=U.environmentIntensity),Xe&&(he.setValue(C,"toneMappingExposure",y.toneMappingExposure),wt.needsLights&&ql(Ke,es),J&&z.fog===!0&&j.refreshFogUniforms(Ke,J),j.refreshMaterialUniforms(Ke,z,G,et,p.state.transmissionRenderTarget[M.id]),vr.upload(C,Fa(wt),Ke,Nt)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(vr.upload(C,Fa(wt),Ke,Nt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&he.setValue(C,"center",N.center),he.setValue(C,"modelViewMatrix",N.modelViewMatrix),he.setValue(C,"normalMatrix",N.normalMatrix),he.setValue(C,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ne=z.uniformsGroups;for(let Ge=0,Nr=Ne.length;Ge<Nr;Ge++){const Jn=Ne[Ge];Ut.update(Jn,We),Ut.bind(Jn,We)}}return We}function ql(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Yl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,U,O){const z=gt.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),gt.get(M.texture).__webglTexture=U,gt.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:O,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const O=gt.get(M);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0};const $l=C.createFramebuffer();this.setRenderTarget=function(M,U=0,O=0){I=M,A=U,P=O;let z=!0,N=null,J=!1,at=!1;if(M){const ht=gt.get(M);if(ht.__useDefaultFramebuffer!==void 0)mt.bindFramebuffer(C.FRAMEBUFFER,null),z=!1;else if(ht.__webglFramebuffer===void 0)Nt.setupRenderTarget(M);else if(ht.__hasExternalTextures)Nt.rebindTextures(M,gt.get(M.texture).__webglTexture,gt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const bt=M.depthTexture;if(ht.__boundDepthTexture!==bt){if(bt!==null&&gt.has(bt)&&(M.width!==bt.image.width||M.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Nt.setupDepthRenderbuffer(M)}}const Tt=M.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(at=!0);const Ct=gt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ct[U])?N=Ct[U][O]:N=Ct[U],J=!0):M.samples>0&&Nt.useMultisampledRTT(M)===!1?N=gt.get(M).__webglMultisampledFramebuffer:Array.isArray(Ct)?N=Ct[O]:N=Ct,L.copy(M.viewport),B.copy(M.scissor),k=M.scissorTest}else L.copy(St).multiplyScalar(G).floor(),B.copy(kt).multiplyScalar(G).floor(),k=ne;if(O!==0&&(N=$l),mt.bindFramebuffer(C.FRAMEBUFFER,N)&&z&&mt.drawBuffers(M,N),mt.viewport(L),mt.scissor(B),mt.setScissorTest(k),J){const ht=gt.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,ht.__webglTexture,O)}else if(at){const ht=U;for(let Tt=0;Tt<M.textures.length;Tt++){const Ct=gt.get(M.textures[Tt]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Tt,Ct.__webglTexture,O,ht)}}else if(M!==null&&O!==0){const ht=gt.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ht.__webglTexture,O)}E=-1},this.readRenderTargetPixels=function(M,U,O,z,N,J,at,ft=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=gt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&at!==void 0&&(ht=ht[at]),ht){mt.bindFramebuffer(C.FRAMEBUFFER,ht);try{const Tt=M.textures[ft],Ct=Tt.format,bt=Tt.type;if(!Rt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-z&&O>=0&&O<=M.height-N&&(M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ft),C.readPixels(U,O,z,N,xt.convert(Ct),xt.convert(bt),J))}finally{const Tt=I!==null?gt.get(I).__webglFramebuffer:null;mt.bindFramebuffer(C.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(M,U,O,z,N,J,at,ft=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=gt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&at!==void 0&&(ht=ht[at]),ht)if(U>=0&&U<=M.width-z&&O>=0&&O<=M.height-N){mt.bindFramebuffer(C.FRAMEBUFFER,ht);const Tt=M.textures[ft],Ct=Tt.format,bt=Tt.type;if(!Rt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Gt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Gt),C.bufferData(C.PIXEL_PACK_BUFFER,J.byteLength,C.STREAM_READ),M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ft),C.readPixels(U,O,z,N,xt.convert(Ct),xt.convert(bt),0);const jt=I!==null?gt.get(I).__webglFramebuffer:null;mt.bindFramebuffer(C.FRAMEBUFFER,jt);const ue=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await cu(C,ue,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Gt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,J),C.deleteBuffer(Gt),C.deleteSync(ue),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,O=0){const z=Math.pow(2,-O),N=Math.floor(M.image.width*z),J=Math.floor(M.image.height*z),at=U!==null?U.x:0,ft=U!==null?U.y:0;Nt.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,O,0,0,at,ft,N,J),mt.unbindTexture()};const jl=C.createFramebuffer(),Kl=C.createFramebuffer();this.copyTextureToTexture=function(M,U,O=null,z=null,N=0,J=null){J===null&&(N!==0?(As("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=N,N=0):J=0);let at,ft,ht,Tt,Ct,bt,Gt,jt,ue;const re=M.isCompressedTexture?M.mipmaps[J]:M.image;if(O!==null)at=O.max.x-O.min.x,ft=O.max.y-O.min.y,ht=O.isBox3?O.max.z-O.min.z:1,Tt=O.min.x,Ct=O.min.y,bt=O.isBox3?O.min.z:0;else{const Ze=Math.pow(2,-N);at=Math.floor(re.width*Ze),ft=Math.floor(re.height*Ze),M.isDataArrayTexture?ht=re.depth:M.isData3DTexture?ht=Math.floor(re.depth*Ze):ht=1,Tt=0,Ct=0,bt=0}z!==null?(Gt=z.x,jt=z.y,ue=z.z):(Gt=0,jt=0,ue=0);const Jt=xt.convert(U.format),wt=xt.convert(U.type);let le;U.isData3DTexture?(Nt.setTexture3D(U,0),le=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Nt.setTexture2DArray(U,0),le=C.TEXTURE_2D_ARRAY):(Nt.setTexture2D(U,0),le=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const Wt=C.getParameter(C.UNPACK_ROW_LENGTH),We=C.getParameter(C.UNPACK_IMAGE_HEIGHT),vi=C.getParameter(C.UNPACK_SKIP_PIXELS),Xe=C.getParameter(C.UNPACK_SKIP_ROWS),es=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,re.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,re.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Tt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ct),C.pixelStorei(C.UNPACK_SKIP_IMAGES,bt);const he=M.isDataArrayTexture||M.isData3DTexture,Ke=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const Ze=gt.get(M),Ne=gt.get(U),Ge=gt.get(Ze.__renderTarget),Nr=gt.get(Ne.__renderTarget);mt.bindFramebuffer(C.READ_FRAMEBUFFER,Ge.__webglFramebuffer),mt.bindFramebuffer(C.DRAW_FRAMEBUFFER,Nr.__webglFramebuffer);for(let Jn=0;Jn<ht;Jn++)he&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,gt.get(M).__webglTexture,N,bt+Jn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,gt.get(U).__webglTexture,J,ue+Jn)),C.blitFramebuffer(Tt,Ct,at,ft,Gt,jt,at,ft,C.DEPTH_BUFFER_BIT,C.NEAREST);mt.bindFramebuffer(C.READ_FRAMEBUFFER,null),mt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||M.isRenderTargetTexture||gt.has(M)){const Ze=gt.get(M),Ne=gt.get(U);mt.bindFramebuffer(C.READ_FRAMEBUFFER,jl),mt.bindFramebuffer(C.DRAW_FRAMEBUFFER,Kl);for(let Ge=0;Ge<ht;Ge++)he?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ze.__webglTexture,N,bt+Ge):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ze.__webglTexture,N),Ke?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ne.__webglTexture,J,ue+Ge):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ne.__webglTexture,J),N!==0?C.blitFramebuffer(Tt,Ct,at,ft,Gt,jt,at,ft,C.COLOR_BUFFER_BIT,C.NEAREST):Ke?C.copyTexSubImage3D(le,J,Gt,jt,ue+Ge,Tt,Ct,at,ft):C.copyTexSubImage2D(le,J,Gt,jt,Tt,Ct,at,ft);mt.bindFramebuffer(C.READ_FRAMEBUFFER,null),mt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Ke?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(le,J,Gt,jt,ue,at,ft,ht,Jt,wt,re.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(le,J,Gt,jt,ue,at,ft,ht,Jt,re.data):C.texSubImage3D(le,J,Gt,jt,ue,at,ft,ht,Jt,wt,re):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,J,Gt,jt,at,ft,Jt,wt,re.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,J,Gt,jt,re.width,re.height,Jt,re.data):C.texSubImage2D(C.TEXTURE_2D,J,Gt,jt,at,ft,Jt,wt,re);C.pixelStorei(C.UNPACK_ROW_LENGTH,Wt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,We),C.pixelStorei(C.UNPACK_SKIP_PIXELS,vi),C.pixelStorei(C.UNPACK_SKIP_ROWS,Xe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,es),J===0&&U.generateMipmaps&&C.generateMipmap(le),mt.unbindTexture()},this.initRenderTarget=function(M){gt.get(M).__webglFramebuffer===void 0&&Nt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Nt.setTextureCube(M,0):M.isData3DTexture?Nt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Nt.setTexture2DArray(M,0):Nt.setTexture2D(M,0),mt.unbindTexture()},this.resetState=function(){A=0,P=0,I=null,mt.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}const $c={type:"change"},Da={type:"start"},Nl={type:"end"},ur=new Pr,jc=new Gn,kg=Math.cos(70*an.DEG2RAD),_e=new R,He=2*Math.PI,Zt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_o=1e-6;class Gg extends ed{constructor(t,e=null){super(t,e),this.state=Zt.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wi.ROTATE,MIDDLE:Wi.DOLLY,RIGHT:Wi.PAN},this.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Ln,this._lastTargetPosition=new R,this._quat=new Ln().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _s,this._sphericalDelta=new _s,this._scale=1,this._panOffset=new R,this._rotateStart=new Et,this._rotateEnd=new Et,this._rotateDelta=new Et,this._panStart=new Et,this._panEnd=new Et,this._panDelta=new Et,this._dollyStart=new Et,this._dollyEnd=new Et,this._dollyDelta=new Et,this._dollyDirection=new R,this._mouse=new Et,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Vg.bind(this),this._onPointerDown=Hg.bind(this),this._onPointerUp=Wg.bind(this),this._onContextMenu=Zg.bind(this),this._onMouseWheel=Yg.bind(this),this._onKeyDown=$g.bind(this),this._onTouchStart=jg.bind(this),this._onTouchMove=Kg.bind(this),this._onMouseDown=Xg.bind(this),this._onMouseMove=qg.bind(this),this._interceptControlDown=Jg.bind(this),this._interceptControlUp=Qg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($c),this.update(),this.state=Zt.NONE}update(t=null){const e=this.object.position;_e.copy(e).sub(this.target),_e.applyQuaternion(this._quat),this._spherical.setFromVector3(_e),this.autoRotate&&this.state===Zt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=He:n>Math.PI&&(n-=He),i<-Math.PI?i+=He:i>Math.PI&&(i-=He),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(_e.setFromSpherical(this._spherical),_e.applyQuaternion(this._quatInverse),e.copy(this.target).add(_e),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=_e.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new R(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=_e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ur.origin.copy(this.object.position),ur.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ur.direction))<kg?this.object.lookAt(this.target):(jc.setFromNormalAndCoplanarPoint(this.object.up,this.target),ur.intersectPlane(jc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>_o||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_o||this._lastTargetPosition.distanceToSquared(this.target)>_o?(this.dispatchEvent($c),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?He/60*this.autoRotateSpeed*t:He/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){_e.setFromMatrixColumn(e,0),_e.multiplyScalar(-t),this._panOffset.add(_e)}_panUp(t,e){this.screenSpacePanning===!0?_e.setFromMatrixColumn(e,1):(_e.setFromMatrixColumn(e,0),_e.crossVectors(this.object.up,_e)),_e.multiplyScalar(t),this._panOffset.add(_e)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;_e.copy(i).sub(this.target);let r=_e.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(He*this._rotateDelta.x/e.clientHeight),this._rotateUp(He*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(He*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-He*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(He*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-He*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(He*this._rotateDelta.x/e.clientHeight),this._rotateUp(He*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Et,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Hg(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Vg(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Wg(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nl),this.state=Zt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Xg(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Wi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Zt.DOLLY;break;case Wi.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Zt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Zt.ROTATE}break;case Wi.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Zt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Zt.PAN}break;default:this.state=Zt.NONE}this.state!==Zt.NONE&&this.dispatchEvent(Da)}function qg(s){switch(this.state){case Zt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Zt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Zt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Yg(s){this.enabled===!1||this.enableZoom===!1||this.state!==Zt.NONE||(s.preventDefault(),this.dispatchEvent(Da),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Nl))}function $g(s){this.enabled!==!1&&this._handleKeyDown(s)}function jg(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Gi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Zt.TOUCH_ROTATE;break;case Gi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Zt.TOUCH_PAN;break;default:this.state=Zt.NONE}break;case 2:switch(this.touches.TWO){case Gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Zt.TOUCH_DOLLY_PAN;break;case Gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Zt.TOUCH_DOLLY_ROTATE;break;default:this.state=Zt.NONE}break;default:this.state=Zt.NONE}this.state!==Zt.NONE&&this.dispatchEvent(Da)}function Kg(s){switch(this._trackPointer(s),this.state){case Zt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Zt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Zt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Zt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Zt.NONE}}function Zg(s){this.enabled!==!1&&s.preventDefault()}function Jg(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Qg(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function t0(s,t,e,n){s.magFilter=Te,s.minFilter=Te,s.generateMipmaps=!1,s.colorSpace=ge;const i=t.atlas;if(!i)return{texture:s,atlas:t,maxFootprint:0};const r=an.ceilPowerOfTwo(i.tileSize*2),o=(r-i.tileSize)/2,a=Math.min(i.columns,Math.floor(e/r)),c=i.columns*i.rows,l=Math.ceil(c/a);if(!a||l*r>e)return{texture:s,atlas:t,maxFootprint:0};const h=document.createElement("canvas");h.width=a*r,h.height=l*r;const u=h.getContext("2d");if(!u)return{texture:s,atlas:t,maxFootprint:0};u.imageSmoothingEnabled=!1;const d=s.image;for(let g=0;g<c;g++){const _=g%i.columns*i.stride+i.padding,m=Math.floor(g/i.columns)*i.stride+i.padding,p=g%a*r,x=Math.floor(g/a)*r,S=[0,0,i.tileSize-1],y=[1,i.tileSize,1],T=[0,o,o+i.tileSize],A=[o,i.tileSize,o];for(let P=0;P<3;P++)for(let I=0;I<3;I++)u.drawImage(d,_+S[I],m+S[P],y[I],y[P],p+T[I],x+T[P],A[I],A[P])}const f=new Ls(h);return f.colorSpace=ge,f.magFilter=tn,f.minFilter=Cn,f.anisotropy=Math.max(1,n),{texture:f,atlas:{...t,atlas:{...i,width:h.width,height:h.height,columns:a,rows:l,stride:r,padding:o}},maxFootprint:o}}function ui(s,t,e){e&&(s.customProgramCacheKey=()=>"village-atlas-sampling-v1",s.onBeforeCompile=n=>{n.uniforms.villageAtlasSize={value:new Et(t.image.width,t.image.height)},n.uniforms.villageMaxFootprint={value:e},n.fragmentShader=n.fragmentShader.replace("#include <map_pars_fragment>",`#include <map_pars_fragment>
        uniform vec2 villageAtlasSize;
        uniform float villageMaxFootprint;`).replace("#include <map_fragment>",`
        #ifdef USE_MAP
          vec2 atlasDx = dFdx(vMapUv);
          vec2 atlasDy = dFdy(vMapUv);
          float footprint = max(length(atlasDx * villageAtlasSize), length(atlasDy * villageAtlasSize));
          vec4 atlasColor;
          if (footprint < 1.0) {
            vec2 pixelUv = (floor(vMapUv * villageAtlasSize) + 0.5) / villageAtlasSize;
            atlasColor = textureLod(map, pixelUv, 0.0);
          } else {
            float scale = min(1.0, villageMaxFootprint / footprint);
            atlasColor = textureGrad(map, vMapUv, atlasDx * scale, atlasDy * scale);
          }
          diffuseColor *= atlasColor;
        #endif
      `)})}const Fl=["east","west","up","down","south","north"];function Ol(s){const[t,e,n]=s.size,i=s.uv??[0,0];if(!Array.isArray(i))return Object.fromEntries(Fl.map(a=>{const c=i[a];if(!c)return[a,void 0];const l=c.uv_size||c.uvSize||(a==="up"||a==="down"?[t,n]:a==="east"||a==="west"?[n,e]:[t,e]);return[a,[...c.uv,...l]]}));const[r,o]=i;return{west:[r,o+n,n,e],north:[r+n,o+n,t,e],east:[r+n+t,o+n,n,e],south:[r+2*n+t,o+n,t,e],up:[r+n,o,t,n],down:[r+n+t,o,t,n]}}function Kc(s,t,e,n=0,i=!1){const r=s.inflate??n,o=new dn(...s.size.map(d=>Math.max(0,d+r*2)/16)),a=Ol(s),c=s.mirror??i,l=o.getAttribute("uv"),h=Array.from(o.getIndex().array),u=[];Fl.forEach((d,f)=>{const _=a[c&&d==="east"?"west":c&&d==="west"?"east":d];if(!_)return;const[m,p,x,S]=_,y=(c?m+x:m)/t,T=(c?m:m+x)/t,A=d==="down"&&(s.uv===void 0||Array.isArray(s.uv)),P=1-(p+(A?S:0))/e,I=1-(p+(A?0:S))/e,E=[y,P,T,P,y,I,T,I];for(let b=0;b<4;b++)l.setXY(f*4+b,E[b*2],E[b*2+1]);u.push(...h.slice(f*6,f*6+6))}),o.clearGroups(),o.scale(-1,1,1);for(let d=0;d<u.length;d+=3)[u[d+1],u[d+2]]=[u[d+2],u[d+1]];return o.setIndex(u),o.computeBoundingSphere(),o}const vo=s=>s*Math.PI/180;function vs(s=[0,0,0]){return new un(-vo(s[0]),-vo(s[1]),vo(s[2]),"ZYX")}function e0(s,t,e,n,i=[]){const r=new fe,o=new Map,a=new Map(s.bones.map(d=>[d.name.toLowerCase(),d])),c=d=>o.get(a.get(d.toLowerCase()).name),l=new Map(Object.entries(n||{}).map(([d,f])=>[d.toLowerCase(),f])),h=new Set(i.map(d=>d.toLowerCase()));let u=0;for(const d of s.bones){const f=new fe;f.name=d.name,f.visible=!h.has(d.name.toLowerCase()),f.rotation.copy(vs(l.get(d.name.toLowerCase())||d.rotation)),o.set(d.name,f)}for(const d of s.bones){const f=o.get(d.name),g=d.pivot||[0,0,0],_=d.parent?a.get(d.parent.toLowerCase())?.pivot||[0,0,0]:[0,0,0];f.position.set(-(g[0]-_[0])/16,(g[1]-_[1])/16,(g[2]-_[2])/16),(d.parent?c(d.parent):r).add(f);const m=new fe;m.rotation.copy(vs(d.bind_pose_rotation)),f.add(m);for(const[p,x]of(d.cubes||[]).entries()){const S=new Ot(e(x,`${d.name}:${p}`,d.inflate,d.mirror),t),y=x.rotation?x.pivot||x.origin.map((T,A)=>T+x.size[A]/2):g;if(S.position.set(-(x.origin[0]+x.size[0]/2-y[0])/16,(x.origin[1]+x.size[1]/2-y[1])/16,(x.origin[2]+x.size[2]/2-y[2])/16),x.rotation){const T=new fe;T.position.set(-(y[0]-g[0])/16,(y[1]-g[1])/16,(y[2]-g[2])/16),T.rotation.copy(vs(x.rotation)),T.add(S),m.add(T)}else m.add(S);u++}}return r.scale.setScalar(s.scale??1),{group:r,bones:o,cubes:u}}const ki=s=>s.toLowerCase();function n0(s,t,e){const n=new Map([...s.bones].map(([c,l])=>[ki(c),l])),i=(c,l)=>n.get(ki(c))?.rotation.copy(vs(l)),r=(c,l)=>n.get(ki(c))?.position.add({x:-l[0]/16,y:l[1]/16,z:l[2]/16}),o=(c,l)=>{const h=n.get(ki(c));h&&(Array.isArray(l)?h.scale.set(...l):h.scale.setScalar(l))},a=c=>{for(const[l,h]of n)c.test(l)&&(h.visible=!1)};if(["minecraft:zombie","minecraft:husk","minecraft:drowned","minecraft:zombie_villager_v2"].includes(e.type)&&(i("rightarm",[-90,0,0]),i("leftarm",[-90,0,0])),(e.type==="minecraft:vindicator"||e.type==="minecraft:evocation_illager")&&a(/^(?:left|right)(?:arm|item)$/),(e.type==="minecraft:spider"||e.type==="minecraft:cave_spider")&&[[0,45,-45],[0,-45,45],[0,22.5,-33.3],[0,-22.5,33.3],[0,-22.5,-33.3],[0,22.5,33.3],[0,-45,-45],[0,45,45]].forEach((l,h)=>i(`leg${h}`,l)),e.type==="minecraft:blaze")for(let c=0;c<12;c++){const l=Math.floor(c/4),h=(c%4*90+[0,45,27][l])*Math.PI/180,u=[9,7,5][l];r(`upperbodyparts${c}`,[Math.cos(h)*u,[2,-2,-11][l]+Math.cos(c*(l===2?1.5:2)*14.32*Math.PI/180),Math.sin(h)*u])}if(e.type==="minecraft:guardian"||e.type==="minecraft:elder_guardian"){const c=[[-45,0,0],[45,0,0],[0,0,45],[0,0,-45],[90,45,0],[90,-45,0],[90,-135,0],[90,135,0],[-135,0,0],[135,0,0],[0,0,135],[0,0,-135]];[[0,1,1],[0,1,-1],[1,1,0],[-1,1,0],[-1,0,-1],[1,0,-1],[1,0,1],[-1,0,1],[0,-1,1],[0,-1,-1],[1,-1,0],[-1,-1,0]].forEach(([h,u,d],f)=>{const g=`spikepart${f}`,_=8*(1+Math.cos(f*Math.PI/180)*.01),m=[h*_,u===1?24-_:u===-1?_-8:8,d*_],p=t.bones.find(x=>ki(x.name)===g)?.pivot||[0,24,0];r(g,m.map((x,S)=>x-p[S])),i(g,c[f])}),r("eye",[0,0,-8.25]),r("tailpart1",[-1.5,-.5,14]),r("tailpart2",[.5,-.5,6])}if(e.type.endsWith("minecart")&&n.has("root")&&r("root",[0,-18.5,0]),e.type==="minecraft:tripod_camera"&&(s.group.position.y+=24/16,i("leg0",[18,0,0]),i("leg1",[-18,0,0]),i("leg2",[0,0,18]),i("leg3",[0,0,-18])),["minecraft:horse","minecraft:donkey","minecraft:mule","minecraft:skeleton_horse","minecraft:zombie_horse"].includes(e.type)&&(e.saddled||a(/^(saddle|bit|bridle)/),a(/^reins/),(e.type==="minecraft:horse"||!e.chested)&&a(/^bag/),a(e.type==="minecraft:donkey"||e.type==="minecraft:mule"?/^ear/:/^muleear/)),e.type==="minecraft:ender_crystal"&&(e.showBottom||a(/^base$/),i("outerglass",[39.2,14.5,-39.2]),r("outerglass",[0,16,0]),i("innerglass",[39.2,14.5,-39.2]),n.get("innerglass")?.scale.setScalar(.875),i("crystal",[219.2,14.5,-39.2]),n.get("crystal")?.scale.setScalar(.875)),e.type==="minecraft:cat"&&e.sitting){for(const c of["backlegl","backlegr"])i(c,[-45,0,0]),r(c,[0,0,1]);i("body",[-45,0,0]),r("body",[0,-1,0]);for(const c of["frontlegl","frontlegr"])i(c,[42.15,0,0]),r(c,[0,-4.5,-1]);i("tail1",[45,0,0]),r("tail1",[0,-3,1]),i("tail2",[45,0,0]),r("head",[0,-1.25,0])}if(e.type==="minecraft:wolf"){const c=e.sitting?{body:[0,6,0],leg0:[-2.5,2,2],leg1:[.5,2,2],leg2:[-2.49,7,-4],leg3:[.51,7,-4],tail:[-1,3,6],upperbody:[-1,8,-3]}:{body:[0,10,2],leg0:[-2.5,8,7],leg1:[.5,8,7],leg2:[-2.5,8,-4],leg3:[.5,8,-4],tail:[-1,12,8],upperbody:[-1,10,-3]};for(const[l,h]of Object.entries(c)){const u=t.bones.find(d=>ki(d.name)===l)?.pivot||[0,0,0];r(l,h.map((d,f)=>d-u[f]))}i("body",[e.sitting?45:90,0,0]),i("upperbody",[e.sitting?72:90,0,0]),e.sitting&&(i("leg0",[270,0,0]),i("leg1",[270,0,0]),i("leg2",[333,0,0]),i("leg3",[333,0,0]))}if(e.type==="minecraft:parrot"){i("wing0",[-40,-180,e.sitting?-5:0]),i("wing1",[-40,-180,e.sitting?5:0]);for(const c of["leg0","leg1"])r(c,[0,.5,-.5]),i(c,[e.sitting?73.287:3.287,0,0]);i("tail",[e.sitting?90:60,0,0]),e.sitting&&r("body",[0,-1.9,0])}if(e.type==="minecraft:enderman"&&(r("head",[0,14,0]),r("hat",[0,-14,0]),r("rightarm",[-2,0,0]),r("leftleg",[0,4,0]),r("rightleg",[0,4,0]),e.carriedBlock&&(i("leftarm",[-28.65,0,-2.87]),i("rightarm",[-28.65,0,2.87])),e.angry&&(r("head",[0,5,0]),r("hat",[0,-5,0]))),e.type==="minecraft:panda"&&(e.sitting||e.scared||e.eating)&&(r("body",[0,-12.15,0]),i("body",[-90+(e.scared?16.2:0),0,0]),i("head",[e.eating?90:100,0,0]),i("leg0",[0,0,32.7]),i("leg1",[0,0,-32.7]),i("leg2",[e.eating?-23:0,0,-15]),i("leg3",[e.eating?-23:0,0,15])),e.type==="minecraft:drowned"&&e.swimming&&(r("body",[0,-10,9]),i("body",[90+(e.rotation?.pitch||0),0,0]),i("leftarm",[-180,14.325,8.595]),i("rightarm",[-180,14.325,-8.595]),i("leftleg",[-.3,0,0]),i("rightleg",[.3,0,0])),e.baby){const c=e.type.slice(10);if(["cow","mooshroom","pig","sheep"].includes(c)&&(r("head",[0,4,4]),o("head",2)),c==="chicken"&&o("head",2),(c==="cat"||c==="ocelot")&&o("head",1.5),c==="fox"&&(r("head",[0,4,4]),o("head",1.3)),c==="wolf"&&(r("head",[0,1,-2]),o("head",1.6)),(c==="hoglin"||c==="zoglin")&&(r("head",[0,10,4]),o("head",1.4)),["zombie","husk","drowned","zombie_villager","zombie_villager_v2","piglin","zombie_pigman"].includes(c)&&o("head",1.4),(c==="villager"||c==="villager_v2")&&o("head",1.5),c==="panda"&&(r("body",[0,1.77,0]),o("body",[1.15,1.15,1]),r("head",[0,-.18,.15]),o("head",1.8)),c==="rabbit")for(const l of["head","earleft","earright","nose"])r(l,[0,-1,1]),o(l,1.5);if(c==="llama"){r("body",[0,-5.5,-5]),o("body",[1.2,1,1]),r("head",[0,2,0]),o("head",[1.3,1.2,1.2]);for(const l of["leg0","leg1","leg2","leg3"])r(l,[0,-1,0]),o(l,[.91,.56,.91])}if(["horse","donkey","mule","skeleton_horse","zombie_horse"].includes(c)){const l=1-(e.scale??.5);r("body",[0,11*l,0]),o("head",1+.5*l);for(const h of["legbl","legbr","legfl","legfr"])o(h,[1,1+l,1])}}}const Rn=3/16,Wn=s=>s.states||{},Is=s=>(Number(s??0)%4+4)%4;function i0(s,t){const e=Wn(s),n=!!e.upper_block_bit,i=t?.name===s.name&&!!Wn(t).upper_block_bit!==n,r=n&&i?Wn(t):e,o=!n&&i?Wn(t):e;return{direction:Is(r.direction),open:!!r.open_bit,hinge:!!o.door_hinge_bit}}function Bl(s,t){let[e,n,i,r,o,a]=s;for(let c=0;c<Is(t);c++)[e,i,r,a]=[1-a,e,1-i,r];return[e,n,i,r,o,a]}function s0(s){const t=s.open?s.hinge?[0,0,1-Rn,1,1,1]:[0,0,0,1,1,Rn]:[0,0,0,Rn,1,1];return[Bl(t,s.direction)]}function r0(s){const t=Wn(s);return t.open_bit?[[[0,0,0,Rn,1,1],[1-Rn,0,0,1,1,1],[0,0,0,1,1,Rn],[0,0,1-Rn,1,1,1]][Is(t.direction)]]:[t.upside_down_bit?[0,1-Rn,0,1,1,1]:[0,0,0,1,Rn,1]]}function o0(s){const t=Wn(s),e=t.in_wall_bit?3/16:0,n=(r,o,a,c,l,h)=>[r/16,o/16-e,a/16,c/16,l/16-e,h/16],i=[n(0,5,7,2,16,9),n(14,5,7,16,16,9)];if(t.open_bit)for(const[r,o]of[[0,2],[14,16]])i.push(n(r,6,9,o,9,15),n(r,12,9,o,15,15),n(r,9,13,o,12,15));else i.push(n(2,6,7,14,9,9),n(2,12,7,14,15,9),n(6,9,7,10,12,9));return i.map(r=>Bl(r,Is(t.direction)))}function a0(s){return Is(Wn(s).weirdo_direction)}function c0(s,t,e){return s===0?[.5,t,0,1,e,1]:s===1?[0,t,0,.5,e,1]:s===2?[0,t,.5,1,e,1]:[0,t,0,1,e,.5]}function l0(s,t){const e=!!Wn(s).upside_down_bit,n=a0(s),i=e?[0,.5,0,1,1,1]:[0,0,0,1,.5,1],a=c0(n,e?0:.5,e?.5:1);return[i,a]}function zl(s,t){const[e,n,i,r,o,a]=s;return t===0?[[e,1-a],[r,1-a],[r,1-i],[e,1-i]]:t===1?[[e,i],[r,i],[r,a],[e,a]]:t===2?[[1-a,n],[1-i,n],[1-i,o],[1-a,o]]:t===3?[[i,n],[a,n],[a,o],[i,o]]:t===4?[[e,n],[r,n],[r,o],[e,o]]:[[1-r,n],[1-e,n],[1-e,o],[1-r,o]]}function h0(s,t){const e=Math.max(s[0],t[0]),n=Math.max(s[1],t[1]),i=Math.min(s[2],t[2]),r=Math.min(s[3],t[3]);if(e>=i||n>=r)return[s];const o=[];return s[0]<e&&o.push([s[0],s[1],e,s[3]]),i<s[2]&&o.push([i,s[1],s[2],s[3]]),s[1]<n&&o.push([e,s[1],i,n]),r<s[3]&&o.push([e,r,i,s[3]]),o}function u0(s,t){const e=s[t],n=[];for(let i=0;i<6;i++){const r=i<2?1:i<4?0:2,o=i%2===0,a=e[r+(o?3:0)],c=r===0?[1,2]:r===1?[0,2]:[0,1];let l=[[e[c[0]],e[c[1]],e[c[0]+3],e[c[1]+3]]];for(let h=0;h<s.length;h++){if(h===t)continue;const u=s[h];if(!(o?u[r]<=a&&(u[r+3]>a||h<t&&u[r+3]===a):u[r+3]>=a&&(u[r]<a||h<t&&u[r]===a)))continue;const f=[u[c[0]],u[c[1]],u[c[0]+3],u[c[1]+3]];if(l=l.flatMap(g=>h0(g,f)),!l.length)break}for(const[h,u,d,f]of l){const g=[...e];g[c[0]]=h,g[c[1]]=u,g[c[0]+3]=d,g[c[1]+3]=f,n.push({face:i,box:g})}}return n}function d0(s){const t=s.name.includes("wall_sign"),e=s.states?.[t?"facing_direction":"ground_sign_direction"],n=Number(e??Number(s.states?.block_data??0)&(t?7:15));return t?[2,3,4,5].includes(n)?n:2:Number.isFinite(n)?(Math.trunc(n)%16+16)%16:0}function wr(s){const t=d0(s);if(!s.name.includes("wall_sign"))return{center:[.5,5/6,.5],angle:-t*Math.PI/8};switch(t){case 3:return{center:[.5,25/48,1/16],angle:0};case 4:return{center:[15/16,25/48,.5],angle:-Math.PI/2};case 5:return{center:[1/16,25/48,.5],angle:Math.PI/2};default:return{center:[.5,25/48,15/16],angle:Math.PI}}}const f0=[[0,1,0],[0,-1,0],[1,0,0],[-1,0,0],[0,0,1],[0,0,-1]],p0=[[0,0],[1,0],[1,1],[0,1]],m0=[16383998,16351261,13061821,3847130,16701501,8439583,15961002,4673362,10329495,1481884,8991416,3949738,8606770,6192150,11546150,1908001],g0={5:2039713,6:2039713,7:8356754,8:8356754,9:2293580,10:2293580,11:2293580,12:14981690,13:14981690,14:8171462,15:8171462,16:8171462,17:5926017,18:5926017,19:3035801,20:3035801,21:16262179,22:16262179,23:4393481,24:4393481,25:5149489,26:5149489,27:5149489,28:13458603,29:13458603,30:13458603,31:9643043,32:9643043,33:9643043,34:4738376,35:4738376,36:3484199,40:13565951,41:13565951,42:5926017};function kl(s){const t=s.name.replace("minecraft:","");if(/^(?:\w+_)?(?:standing|wall)_sign$/.test(t))return"sign";if(t==="standing_banner"||t==="wall_banner")return"banner";if(t==="bed")return"bed";if(["chest","trapped_chest","ender_chest"].includes(t))return"chest";if(t==="frame"||t==="glow_frame"||t==="item_frame"||t==="glow_item_frame")return"frame";if(t==="flower_pot")return"flower_pot";if(t==="skull")return"skull";if(t==="cauldron"||t==="lava_cauldron")return"cauldron";if(["hopper","brewing_stand","lectern","bell","enchanting_table","anvil"].includes(t))return t}function _0([s,t,e,n,i,r]){return[[[s,i,r],[n,i,r],[n,i,e],[s,i,e]],[[s,t,e],[n,t,e],[n,t,r],[s,t,r]],[[n,t,r],[n,t,e],[n,i,e],[n,i,r]],[[s,t,e],[s,t,r],[s,i,r],[s,i,e]],[[s,t,r],[n,t,r],[n,i,r],[s,i,r]],[[n,t,e],[s,t,e],[s,i,e],[n,i,e]]]}function te(s,t,e=!1,n=[0,1,2,3,4,5]){const i=_0(s);return n.map(r=>({points:i[r],normal:f0[r],tile:t[r],coordinates:e?zl(s,r):p0}))}function Rs(s,t,e){return s.map(n=>({...n,points:n.points.map(t),normal:e(n.normal)}))}function _n(s,t){const e=Math.sin(t),n=Math.cos(t),i=([r,o,a])=>[n*r+e*a,o,-e*r+n*a];return Rs(s,([r,o,a])=>{const[c,l,h]=i([r-.5,o,a-.5]);return[c+.5,l,h+.5]},i)}function Cs(s,t,e,n){return Rs(s,([i,r,o])=>[i+t,r+e,o+n],i=>i)}function Lr(s,t){return t===0?Rs(s,([e,n,i])=>[e,i,1-n],([e,n,i])=>[e,i,-n]):t===1?Rs(s,([e,n,i])=>[e,1-i,n],([e,n,i])=>[e,-i,n]):_n(s,{2:0,3:Math.PI,4:Math.PI/2,5:-Math.PI/2}[t]||0)}function Bt(s,t,e=s.side){return s.modelTextures?.[t]??e}function ze(s){return Array(6).fill(s)}function di([s,t,e,n]){return[[s/16,1-n/16],[e/16,1-n/16],[e/16,1-t/16],[s/16,1-t/16]]}const Zc=["up","down","east","west","south","north"];function Tr(s,t,e,n=[.5,.5,.5],i=!1){const r=Math.sin(e),o=Math.cos(e),a=([c,l,h])=>t==="x"?[c,l*o-h*r,l*r+h*o]:t==="y"?[c*o+h*r,l,-c*r+h*o]:[c*o-l*r,c*r+l*o,h];return Rs(s,c=>{const l=c.map((h,u)=>(h-n[u])*(i&&["x","y","z"][u]!==t?1/o:1));return a(l).map((h,u)=>h+n[u])},a)}function wn(s,t){const e=[];for(const n of A0[s]||[]){const i=[...n.from,...n.to].map(a=>a/16),r=Zc.flatMap((a,c)=>n.faces[a]?[c]:[]);let o=te(i,ze(0),!0,r);for(let a=0;a<o.length;a++){const c=n.faces[Zc[r[a]]];o[a].tile=t[c.texture.replace("#","")]??0,c.uv&&(o[a].coordinates=di(c.uv));const l=(c.rotation||0)/90;for(let h=0;h<l;h++)o[a].coordinates=[o[a].coordinates[3],...o[a].coordinates.slice(0,3)]}n.rotation&&(o=Tr(o,n.rotation.axis,n.rotation.angle*Math.PI/180,n.rotation.origin.map(a=>a/16),n.rotation.rescale)),e.push(...o)}return e}function v0(s,t){const e=Bt(t,"signEdge"),n=Bt(t,"post");let i=te([0,7/12,11/24,1,13/12,13/24],[e,e,e,e,Bt(t,"signFront"),Bt(t,"signBack")]);return s.name.includes("wall_sign")?(i=Cs(i,0,-5/16,-7/16),_n(i,wr(s).angle)):(i.push(...te([11/24,0,11/24,13/24,7/12,13/24],ze(n))),_n(i,wr(s).angle))}function x0(s,t,e,n){const i=!!s.states?.head_piece_bit,r=n.entity?.type==="bed"?n.entity.color:0,o=e.decorativeBeds?.[String(Number.isInteger(r)&&r>=0&&r<16?r:0)],a=(g,_=t.side)=>o?.[g]??Bt(t,g,_),c=i?"head":"foot",l=a("leg",t.bottom),h=te([0,3/16,0,1,9/16,1],[a(`${c}Top`,t.top),l,a(`${c}Side`),a(`${c}Side`),a(i?"headEnd":"footSide"),a(i?"headSide":"footEnd")]);h[0].coordinates=[[0,1],[1,1],[1,0],[0,0]],h[3].coordinates=[[1,0],[0,0],[0,1],[1,1]];const u=i?5:4;h[u].seam=!0,n.joined&&h.splice(u,1);const d=i?13/16:0,f=i?1:3/16;return h.push(...te([0,0,d,3/16,3/16,f],ze(l),!0)),h.push(...te([13/16,0,d,1,3/16,f],ze(l),!0)),_n(h,-Number(s.states?.direction||0)*Math.PI/2)}function y0(s,t,e){const n=e===-1?0:.0625,i=e===1?1:15/16,r=Number(s.states?.facing_direction??2),o={2:"north",3:"south",4:"west",5:"east"}[r]||"north",a=t.faces?.[o]??t.side,c=(g,_=t.side)=>{const m=Bt(t,g,_),p=g==="chestTop"?"Top":g==="chestBottom"?"Bottom":g[0].toUpperCase()+g.slice(1);return e?Bt(t,`${e>0?"doubleLeft":"doubleRight"}${p}`,m):m},l=te([n,0,1/16,i,9/16,15/16],[c("chestTop",t.top),c("chestBottom",t.bottom),c("bodySide"),c("bodySide"),c("bodyBack"),c("bodyFront",a)],!1,[1,2,3,4,5]),h=te([n,9/16,1/16,i,14/16,15/16],[c("chestTop",t.top),c("chestBottom",t.bottom),c("lidSide"),c("lidSide"),c("lidBack"),c("lidFront",a)],!1,[0,2,3,4,5]);let u=[...l,...h];const d=e===-1?0:e===1?15/16:7/16,f=e===-1?1/16:e===1?1:9/16;return u.push(...te([d,8/16,0,f,12/16,1/16],ze(Bt(t,"latch",a)))),e&&(u=u.filter(g=>g.normal[0]!==e)),Lr(u,r>=2&&r<=5?r:2)}function M0(s,t,e){const n=Bt(t,"cloth"),i=Bt(t,"post",t.bottom),r=e?.type==="banner"?15-e.baseColor:0,o=m0[Number.isInteger(r)&&r>=0&&r<16?r:0],a={...t,tint:[(o>>>16&255)/255,(o>>>8&255)/255,(o&255)/255]};let c=te([1/12,1/6,13/24,11/12,11/6,7/12],ze(n)).map(l=>({...l,material:a}));return c.push(...te([1/12,7/4,11/24,11/12,11/6,13/24],ze(i))),s.name==="minecraft:wall_banner"?(c=Cs(c,0,-5/16,-7/16),_n(c,{3:0,4:-Math.PI/2,2:Math.PI,5:Math.PI/2}[Number(s.states?.facing_direction)]||0)):(c.push(...te([11/24,0,11/24,13/24,7/4,13/24],ze(i))),_n(c,-Number(s.states?.ground_sign_direction||0)*Math.PI/8))}function S0(s,t,e){if(e?.type==="item_frame"&&e.item?.map)return[];const n=Bt(t,"frameBack"),i=Bt(t,"frameRim",t.bottom),r=te([3/16,3/16,15.5/16,13/16,13/16,1],ze(n),!1,[4,5]);for(const a of r)a.coordinates=di([3,3,13,13]);const o=[{box:[2/16,2/16,15/16,14/16,3/16,1],faces:[0,1,2,3,4,5],uv:{0:[2,15,14,16],1:[2,0,14,1],2:[0,13,1,14],3:[15,13,16,14],4:[2,13,14,14],5:[2,13,14,14]}},{box:[2/16,13/16,15/16,14/16,14/16,1],faces:[0,1,2,3,4,5],uv:{0:[2,15,14,16],1:[2,0,14,1],2:[0,2,1,3],3:[15,2,16,3],4:[2,2,14,3],5:[2,2,14,3]}},{box:[2/16,3/16,15/16,3/16,13/16,1],faces:[2,3,4,5],uv:{2:[0,3,1,13],3:[15,3,16,13],4:[2,3,3,13],5:[13,3,14,13]}},{box:[13/16,3/16,15/16,14/16,13/16,1],faces:[2,3,4,5],uv:{2:[0,3,1,13],3:[15,3,16,13],4:[13,3,14,13],5:[2,3,3,13]}}];for(const a of o){const c=te(a.box,ze(i),!1,a.faces);for(let l=0;l<c.length;l++)c[l].coordinates=di(a.uv[a.faces[l]]);r.push(...c)}return Lr(r,Number(s.states?.facing_direction??2))}function b0(s){const t=Bt(s,"potSide"),e=Bt(s,"potTop",t),n=Bt(s,"potSoil",s.top),i=[],r=[{box:[5/16,0,5/16,6/16,6/16,11/16],faces:[0,1,2,3,4,5],uv:{0:[5,5,6,11],1:[5,5,6,11],2:[5,10,11,16],3:[5,10,11,16],4:[5,10,6,16],5:[10,10,11,16]}},{box:[10/16,0,5/16,11/16,6/16,11/16],faces:[0,1,2,3,4,5],uv:{0:[10,5,11,11],1:[10,5,11,11],2:[5,10,11,16],3:[5,10,11,16],4:[10,10,11,16],5:[5,10,6,16]}},{box:[6/16,0,5/16,10/16,6/16,6/16],faces:[0,1,4,5],uv:{0:[6,5,10,6],1:[6,10,10,11],4:[6,10,10,16],5:[6,10,10,16]}},{box:[6/16,0,10/16,10/16,6/16,11/16],faces:[0,1,4,5],uv:{0:[6,10,10,11],1:[6,5,10,6],4:[6,10,10,16],5:[6,10,10,16]}}];for(const a of r){const c=te(a.box,[e,t,t,t,t,t],!1,a.faces);for(let l=0;l<c.length;l++)c[l].coordinates=di(a.uv[a.faces[l]]);i.push(...c)}const o=te([6/16,0,6/16,10/16,4/16,10/16],[n,t,t,t,t,t],!1,[0,1]);return o[0].coordinates=di([6,6,10,10]),o[1].coordinates=di([6,12,10,16]),i.push(...o),i}function E0(s,t,e,n){const i=n?.type==="skull"?n.skullType:0,r=e.decorativeSkulls?.[String(i)],o=(h,u=t.side)=>r?.[h]??Bt(t,h,u);let a=te([4/16,0,4/16,12/16,8/16,12/16],[o("top",t.top),o("bottom",t.bottom),o("side"),o("side"),o("back"),o("front")]);if(i===5){const h=([u,d,f],[g,_,m])=>[.5+u*3/64,(d-16)*3/64,.5+f*3/64,.5+(u+g)*3/64,(d+_-16)*3/64,.5+(f+m)*3/64];a=te(h([-8,16,-10],[16,16,16]),[o("top"),o("bottom"),o("side"),o("side"),o("back"),o("front")]),a.push(...te(h([-6,20,-24],[12,5,16]),[o("snoutTop",o("top")),o("snoutBottom",o("bottom")),o("snoutSide",o("side")),o("snoutSide",o("side")),o("back"),o("snoutFront",o("front"))])),a.push(...te(h([-6,16,-24],[12,4,16]),[o("jawTop",o("bottom")),o("jawBottom",o("bottom")),o("jawSide",o("side")),o("jawSide",o("side")),o("back"),o("jawFront",o("front"))]));for(const u of[-5,3])a.push(...te(h([u,32,-4],[2,4,6]),ze(o("horn",o("top"))))),a.push(...te(h([u,25,-22],[2,2,4]),ze(o("nostril",o("top")))))}const c=Number(s.states?.facing_direction??1);if(c===1)return _n(a,-(n?.type==="skull"?n.rotation:0)*Math.PI/180);const l=i===5?7/32:4/16;return a=Cs(a,0,4/16,l),Lr(a,c>=2&&c<=5?c:2)}function Jc(s){const t=Bt(s,"bookCover",s.bottom),e=Bt(s,"bookPages",s.top),n=[];for(const i of[-1,1]){let r=te([i<0?.125:.5,0,.1875,i<0?.5:.875,.015625,.8125],ze(t));r.push(...te([i<0?3/16:.5,1/64,4/16,i<0?.5:13/16,3/64,12/16],ze(e))),n.push(...Tr(r,"z",-i*Math.PI/32,[.5,0,.5]))}return n}function w0(s,t,e){const n=kl(s),i=s.states||{},r={top:Bt(t,"top",t.top),bottom:Bt(t,"bottom",t.bottom),side:Bt(t,"side"),inside:Bt(t,"inside",t.bottom),stand:Bt(t,"stand"),base:Bt(t,"base",t.bottom),front:Bt(t,"front"),sides:Bt(t,"sides"),body:Bt(t,"body"),bar:Bt(t,"bar"),post:Bt(t,"post")};if(n==="cauldron"){const o=wn("cauldron",r),a=Math.max(0,Math.min(6,Number(i.fill_level||0))),c=i.cauldron_liquid??(s.name==="minecraft:lava_cauldron"?"lava":"water");if(a){const l=(6+1.5*a)/16,h=c==="water"&&e?.type==="cauldron"?e.color??g0[e.potionId??-1]:void 0,u=te([2/16,l,2/16,14/16,l,14/16],ze(h===void 0?Bt(t,"liquid"):Bt(t,"customLiquid",Bt(t,"liquid"))),!1,[0])[0],d=h===void 0?void 0:[(h>>>16&255)/255,(h>>>8&255)/255,(h&255)/255];u.material={...t,transparent:c!=="lava",tint:d},u.coordinates=di([2,2,14,14]),o.push(u)}return o}if(n==="hopper"){const o=Number(i.facing_direction||0);return o===0?wn("hopper",r):Lr(wn("hopper_side",r),o>=2&&o<=5?o:2)}if(n==="brewing_stand"){const o=wn("brewing_stand",r);for(let a=0;a<3;a++){const c=e?.type==="brewing_stand"?e.bottles[a]:!!i[`brewing_stand_slot_${"abc"[a]}_bit`];o.push(...wn(`brewing_stand_${c?"bottle":"empty"}${a}`,r))}return o}if(n==="lectern"){const o=wn("lectern",r);if(e?.type==="lectern"&&e.hasBook){const a=Cs(Jc(t),0,1.046875,.0625);o.push(...Tr(a,"x",-Math.PI/8))}return _n(o,(2-Number(i.direction||0))*Math.PI/2)}if(n==="enchanting_table"){const o=wn("enchanting_table",r);return o.push(...Cs(Tr(Jc(t),"x",-Math.PI/3,[.5,0,.5]),0,17/16,0)),o}if(n==="anvil")return _n(wn("template_anvil",r),-Number(i.direction||0)*Math.PI/2);if(n==="bell"){const o=i.attachment,a=Number(i.direction||0);let l=wn(o==="hanging"?"bell_ceiling":o==="side"?"bell_wall":o==="multiple"?"bell_between_walls":"bell_floor",r);l=_n(l,(o==="side"||o==="multiple"?1-a:-a)*Math.PI/2);const h=te([5/16,6/16,5/16,11/16,13/16,11/16],[Bt(t,"bellBodyTop",t.top),Bt(t,"bellBottom",t.bottom),...Array(4).fill(Bt(t,"bellBodySide"))],!1,[0,2,3,4,5]),u=te([4/16,4/16,4/16,12/16,6/16,12/16],[Bt(t,"bellBodyTop",t.top),Bt(t,"bellBottom",t.bottom),...Array(4).fill(Bt(t,"bellRimSide"))]);return[...l,...h,...u]}return[]}function T0(s,t,e,n={}){switch(kl(s)){case"sign":return v0(s,t);case"bed":return x0(s,t,e,n);case"chest":return y0(s,t,n.chestJoin||0);case"banner":return M0(s,t,n.entity);case"frame":return S0(s,t,n.entity);case"flower_pot":return b0(t);case"skull":return E0(s,t,e,n.entity);case"cauldron":case"hopper":case"brewing_stand":case"lectern":case"bell":case"enchanting_table":case"anvil":return w0(s,t,n.entity);default:return}}const A0={cauldron:[{from:[0,3,0],to:[2,16,16],faces:{north:{texture:"#side"},east:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},up:{texture:"#top"},down:{texture:"#inside"}}},{from:[2,3,2],to:[14,4,14],faces:{up:{texture:"#inside"},down:{texture:"#inside"}}},{from:[14,3,0],to:[16,16,16],faces:{north:{texture:"#side"},east:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},up:{texture:"#top"},down:{texture:"#inside"}}},{from:[2,3,0],to:[14,16,2],faces:{north:{texture:"#side"},south:{texture:"#side"},up:{texture:"#top"},down:{texture:"#inside"}}},{from:[2,3,14],to:[14,16,16],faces:{north:{texture:"#side"},south:{texture:"#side"},up:{texture:"#top"},down:{texture:"#inside"}}},{from:[0,0,0],to:[4,3,2],faces:{north:{texture:"#side"},east:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},down:{texture:"#bottom"}}},{from:[0,0,2],to:[2,3,4],faces:{east:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},down:{texture:"#bottom"}}},{from:[12,0,0],to:[16,3,2],faces:{north:{texture:"#side"},east:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},down:{texture:"#bottom"}}},{from:[14,0,2],to:[16,3,4],faces:{east:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},down:{texture:"#bottom"}}},{from:[0,0,14],to:[4,3,16],faces:{north:{texture:"#side"},east:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},down:{texture:"#bottom"}}},{from:[0,0,12],to:[2,3,14],faces:{north:{texture:"#side"},east:{texture:"#side"},west:{texture:"#side"},down:{texture:"#bottom"}}},{from:[12,0,14],to:[16,3,16],faces:{north:{texture:"#side"},east:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},down:{texture:"#bottom"}}},{from:[14,0,12],to:[16,3,14],faces:{north:{texture:"#side"},east:{texture:"#side"},west:{texture:"#side"},down:{texture:"#bottom"}}}],hopper:[{from:[0,10,0],to:[16,11,16],faces:{down:{texture:"#side"},up:{texture:"#inside"},north:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}},{from:[0,11,0],to:[2,16,16],faces:{up:{texture:"#top"},north:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}},{from:[14,11,0],to:[16,16,16],faces:{up:{texture:"#top"},north:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}},{from:[2,11,0],to:[14,16,2],faces:{up:{texture:"#top"},north:{texture:"#side"},south:{texture:"#side"}}},{from:[2,11,14],to:[14,16,16],faces:{up:{texture:"#top"},north:{texture:"#side"},south:{texture:"#side"}}},{from:[4,4,4],to:[12,10,12],faces:{down:{texture:"#side"},north:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}},{from:[6,0,6],to:[10,4,10],faces:{down:{texture:"#side"},north:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}}],hopper_side:[{from:[0,10,0],to:[16,11,16],faces:{down:{texture:"#side"},up:{texture:"#inside"},north:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}},{from:[0,11,0],to:[2,16,16],faces:{up:{texture:"#top"},north:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}},{from:[14,11,0],to:[16,16,16],faces:{up:{texture:"#top"},north:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}},{from:[2,11,0],to:[14,16,2],faces:{up:{texture:"#top"},north:{texture:"#side"},south:{texture:"#side"}}},{from:[2,11,14],to:[14,16,16],faces:{up:{texture:"#top"},north:{texture:"#side"},south:{texture:"#side"}}},{from:[4,4,4],to:[12,10,12],faces:{down:{texture:"#side"},north:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}},{from:[6,4,0],to:[10,8,4],faces:{down:{texture:"#side"},up:{texture:"#side"},north:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}}],brewing_stand:[{from:[7,0,7],to:[9,14,9],faces:{down:{uv:[7,7,9,9],texture:"#stand"},up:{uv:[7,7,9,9],texture:"#stand"},north:{uv:[7,2,9,16],texture:"#stand"},south:{uv:[7,2,9,16],texture:"#stand"},west:{uv:[7,2,9,16],texture:"#stand"},east:{uv:[7,2,9,16],texture:"#stand"}}},{from:[9,0,5],to:[15,2,11],faces:{down:{uv:[9,5,15,11],texture:"#base"},up:{uv:[9,5,15,11],texture:"#base"},north:{uv:[9,14,15,16],texture:"#base"},south:{uv:[9,14,15,16],texture:"#base"},west:{uv:[5,14,11,16],texture:"#base"},east:{uv:[5,14,11,16],texture:"#base"}}},{from:[2,0,1],to:[8,2,7],faces:{down:{uv:[2,1,8,7],texture:"#base"},up:{uv:[2,1,8,7],texture:"#base"},north:{uv:[2,14,8,16],texture:"#base"},south:{uv:[2,14,8,16],texture:"#base"},west:{uv:[1,14,7,16],texture:"#base"},east:{uv:[1,14,7,16],texture:"#base"}}},{from:[2,0,9],to:[8,2,15],faces:{down:{uv:[2,9,8,15],texture:"#base"},up:{uv:[2,9,8,15],texture:"#base"},north:{uv:[2,14,8,16],texture:"#base"},south:{uv:[2,14,8,16],texture:"#base"},west:{uv:[9,14,15,16],texture:"#base"},east:{uv:[9,14,15,16],texture:"#base"}}}],lectern:[{from:[0,0,0],to:[16,2,16],faces:{north:{uv:[0,14,16,16],texture:"#base"},east:{uv:[0,6,16,8],texture:"#base"},south:{uv:[0,6,16,8],texture:"#base"},west:{uv:[0,6,16,8],texture:"#base"},up:{uv:[0,0,16,16],rotation:180,texture:"#base"},down:{uv:[0,0,16,16],texture:"#bottom"}}},{from:[4,2,4],to:[12,15,12],faces:{north:{uv:[0,0,8,13],texture:"#front"},east:{uv:[2,16,15,8],rotation:90,texture:"#sides"},south:{uv:[8,3,16,16],texture:"#front"},west:{uv:[2,8,15,16],rotation:90,texture:"#sides"}}},{from:[.01,12,3],to:[15.99,16,16],rotation:{angle:-22.5,axis:"x",origin:[8,8,8]},faces:{north:{uv:[0,0,16,4],texture:"#sides"},east:{uv:[0,4,13,8],texture:"#sides"},south:{uv:[0,4,16,8],texture:"#sides"},west:{uv:[0,4,13,8],texture:"#sides"},up:{uv:[0,1,16,14],rotation:180,texture:"#top"},down:{uv:[0,0,16,13],texture:"#bottom"}}}],bell_floor:[{from:[2,13,7],to:[14,15,9],faces:{north:{uv:[2,2,14,4],texture:"#bar"},south:{uv:[2,3,14,5],texture:"#bar"},up:{uv:[2,3,14,5],texture:"#bar"},down:{uv:[2,3,14,5],texture:"#bar"}}},{from:[14,0,6],to:[16,16,10],faces:{north:{uv:[0,1,2,16],texture:"#post"},east:{uv:[0,1,4,16],texture:"#post"},south:{uv:[0,1,2,16],texture:"#post"},west:{uv:[0,1,4,16],texture:"#post"},up:{uv:[0,0,2,4],texture:"#post"},down:{uv:[0,0,2,4],texture:"#post"}}},{from:[0,0,6],to:[2,16,10],faces:{north:{uv:[0,1,2,16],texture:"#post"},east:{uv:[0,1,4,16],texture:"#post"},south:{uv:[0,1,2,16],texture:"#post"},west:{uv:[0,1,4,16],texture:"#post"},up:{uv:[0,0,2,4],texture:"#post"},down:{uv:[0,0,2,4],texture:"#post"}}}],bell_wall:[{from:[3,13,7],to:[16,15,9],faces:{north:{uv:[2,2,14,4],texture:"#bar"},east:{uv:[5,4,7,6],texture:"#bar"},south:{uv:[2,3,14,5],texture:"#bar"},west:{uv:[5,4,7,6],texture:"#bar"},up:{uv:[2,3,14,5],texture:"#bar"},down:{uv:[2,3,14,5],texture:"#bar"}}}],bell_ceiling:[{from:[7,13,7],to:[9,16,9],faces:{north:{uv:[7,2,9,5],texture:"#bar"},east:{uv:[1,2,3,5],texture:"#bar"},south:{uv:[6,2,8,5],texture:"#bar"},west:{uv:[4,2,6,5],texture:"#bar"},up:{uv:[1,3,3,5],texture:"#bar"}}}],bell_between_walls:[{from:[0,13,7],to:[16,15,9],faces:{north:{uv:[2,2,14,4],texture:"#bar"},east:{uv:[5,4,7,6],texture:"#bar"},south:{uv:[2,3,14,5],texture:"#bar"},west:{uv:[5,4,7,6],texture:"#bar"},up:{uv:[2,3,14,5],texture:"#bar"},down:{uv:[2,3,14,5],texture:"#bar"}}}],enchanting_table:[{from:[0,0,0],to:[16,12,16],faces:{down:{uv:[0,0,16,16],texture:"#bottom"},up:{uv:[0,0,16,16],texture:"#top"},north:{uv:[0,4,16,16],texture:"#side"},south:{uv:[0,4,16,16],texture:"#side"},west:{uv:[0,4,16,16],texture:"#side"},east:{uv:[0,4,16,16],texture:"#side"}}}],template_anvil:[{from:[2,0,2],to:[14,4,14],faces:{down:{uv:[2,2,14,14],texture:"#body",rotation:180},up:{uv:[2,2,14,14],texture:"#body",rotation:180},north:{uv:[2,12,14,16],texture:"#body"},south:{uv:[2,12,14,16],texture:"#body"},west:{uv:[0,2,4,14],texture:"#body",rotation:90},east:{uv:[4,2,0,14],texture:"#body",rotation:270}}},{from:[4,4,3],to:[12,5,13],faces:{up:{uv:[4,3,12,13],texture:"#body",rotation:180},north:{uv:[4,11,12,12],texture:"#body"},south:{uv:[4,11,12,12],texture:"#body"},west:{uv:[4,3,5,13],texture:"#body",rotation:90},east:{uv:[5,3,4,13],texture:"#body",rotation:270}}},{from:[6,5,4],to:[10,10,12],faces:{north:{uv:[6,6,10,11],texture:"#body"},south:{uv:[6,6,10,11],texture:"#body"},west:{uv:[5,4,10,12],texture:"#body",rotation:90},east:{uv:[10,4,5,12],texture:"#body",rotation:270}}},{from:[3,10,0],to:[13,16,16],faces:{down:{uv:[3,0,13,16],texture:"#body",rotation:180},up:{uv:[3,0,13,16],texture:"#top",rotation:180},north:{uv:[3,0,13,6],texture:"#body"},south:{uv:[3,0,13,6],texture:"#body"},west:{uv:[10,0,16,16],texture:"#body",rotation:90},east:{uv:[16,0,10,16],texture:"#body",rotation:270}}}],brewing_stand_bottle0:[{from:[8,0,8],to:[16,16,8],faces:{north:{uv:[0,0,8,16],texture:"#stand"},south:{uv:[8,0,0,16],texture:"#stand"}}}],brewing_stand_bottle1:[{from:[-.41,0,8],to:[7.59,16,8],rotation:{origin:[8,8,8],axis:"y",angle:-45},faces:{north:{uv:[8,0,0,16],texture:"#stand"},south:{uv:[0,0,8,16],texture:"#stand"}}}],brewing_stand_bottle2:[{from:[-.41,0,8],to:[7.59,16,8],rotation:{origin:[8,8,8],axis:"y",angle:45},faces:{north:{uv:[8,0,0,16],texture:"#stand"},south:{uv:[0,0,8,16],texture:"#stand"}}}],brewing_stand_empty0:[{from:[8,0,8],to:[16,16,8],faces:{north:{uv:[16,0,8,16],texture:"#stand"},south:{uv:[8,0,16,16],texture:"#stand"}}}],brewing_stand_empty1:[{from:[0,0,8],to:[8,16,8],rotation:{origin:[8,8,8],axis:"y",angle:-45},faces:{north:{uv:[8,0,16,16],texture:"#stand"},south:{uv:[16,0,8,16],texture:"#stand"}}}],brewing_stand_empty2:[{from:[0,0,8],to:[8,16,8],rotation:{origin:[8,8,8],axis:"y",angle:45},faces:{north:{uv:[8,0,16,16],texture:"#stand"},south:{uv:[16,0,8,16],texture:"#stand"}}}]},Gl=[[0,1,0],[0,-1,0],[1,0,0],[-1,0,0],[0,0,1],[0,0,-1]],Ir=[[0,0],[1,0],[1,1],[0,1]];function je(s,t,e,n){return[[s/16,1-n/16],[e/16,1-n/16],[e/16,1-t/16],[s/16,1-t/16]]}function R0([s,t,e,n,i,r]){return[[[s,i,r],[n,i,r],[n,i,e],[s,i,e]],[[s,t,e],[n,t,e],[n,t,r],[s,t,r]],[[n,t,r],[n,t,e],[n,i,e],[n,i,r]],[[s,t,e],[s,t,r],[s,i,r],[s,i,e]],[[s,t,r],[n,t,r],[n,i,r],[s,i,r]],[[n,t,e],[s,t,e],[s,i,e],[n,i,e]]]}function Ps(s,t,e,n=[0,1,2,3,4,5]){const i=R0(s);return n.map(r=>({points:i[r],normal:Gl[r],tile:t,coordinates:e[r]}))}function en(s,t,e,n=Ir,i=e){return[{points:s,normal:t,tile:e,coordinates:n},{points:[...s].reverse(),normal:t.map(r=>-r),tile:i,coordinates:[...n].reverse()}]}function Vn(s,t,e){return s.map(n=>{const i=e(n.normal),r=n.cullFace===void 0?void 0:Gl.findIndex(o=>o.every((a,c)=>Math.abs(a-i[c])<1e-6));return{...n,points:n.points.map(t),normal:i,cullFace:r===-1?void 0:r}})}function Hl(s,t){for(let e=0;e<t;e++)s=Vn(s,([n,i,r])=>[1-r,i,n],([n,i,r])=>[-r,i,n]);return s}function C0(s){return(s.states?.bamboo_stalk_thickness==="thick"?3:2)/16}function P0(s,t){const e=C0(s),n=e*16,i=(1-e)/2,r=1-i,o=t.modelTextures?.stem??t.side,a=t.modelTextures?.cap??o,c=Ps([i,0,i,r,1,r],o,[je(13,0,13+n,n),je(13,4,13+n,4+n),...Array.from({length:4},()=>je(0,0,n,16))]);if(c[0].tile=a,c[0].cullFace=0,c[1].tile=a,c[1].cullFace=1,s.states?.bamboo_leaf_size!=="no_leaves"&&t.modelTextures?.leaves!==void 0){const l=t.modelTextures.leaves;c.push(...en([[.05,0,.5],[.95,0,.5],[.95,1,.5],[.05,1,.5]],[0,0,1],l)),c.push(...en([[.5,0,.95],[.5,0,.05],[.5,1,.05],[.5,1,.95]],[1,0,0],l))}return c}function D0(s,t){const e=je(7,6,9,16);let n=Ps([7/16,0,7/16,9/16,10/16,9/16],t.side,[je(7,6,9,8),je(7,13,9,15),e,e,e,e]);const i=s.states?.torch_facing_direction;if(!["west","east","north","south"].includes(String(i)))return n;const r=Math.PI/8,o=Math.cos(r),a=Math.sin(r);return n=Vn(n,([c,l,h])=>[(c-.5)*o+l*a,3.5/16-(c-.5)*a+l*o,h],([c,l,h])=>[c*o+l*a,-c*a+l*o,h]),Hl(n,{west:0,north:1,east:2,south:3}[String(i)])}function L0(s,t){const e=je(2,6,6,7),n=je(0,0,2,15),i=Ps([6/16,0,6/16,10/16,1/16,10/16],t.side,[je(2,2,6,6),je(6,6,2,2),e,e,e,e]);i[1].cullFace=1;const r=Ps([7/16,1/16,7/16,9/16,1,9/16],t.side,[je(2,0,4,2),Ir,n,n,n,n],[0,2,3,4,5]);r[0].cullFace=0;const o=[...i,...r];switch(Number(s.states?.facing_direction??1)){case 0:return Vn(o,([a,c,l])=>[a,1-c,1-l],([a,c,l])=>[a,-c,-l]);case 2:return Vn(o,([a,c,l])=>[a,1-l,c],([a,c,l])=>[a,-l,c]);case 3:return Vn(o,([a,c,l])=>[a,l,1-c],([a,c,l])=>[a,l,-c]);case 4:return Vn(o,([a,c,l])=>[c,1-a,l],([a,c,l])=>[c,-a,l]);case 5:return Vn(o,([a,c,l])=>[1-c,a,l],([a,c,l])=>[-c,a,l]);default:return o}}function I0(s,t){const e=Number(s.states?.rail_direction??0),n=1/16,i=(l,h)=>n+(e===2?l:e===3?1-l:e===4?1-h:e===5?h:0),r=[[0,i(0,1),1],[1,i(1,1),1],[1,i(1,0),0],[0,i(0,0),0]],o=e===2?[-Math.SQRT1_2,Math.SQRT1_2,0]:e===3?[Math.SQRT1_2,Math.SQRT1_2,0]:e===4?[0,Math.SQRT1_2,Math.SQRT1_2]:e===5?[0,Math.SQRT1_2,-Math.SQRT1_2]:[0,1,0],a=e>=6?e-6:[1,2,3].includes(e)?1:0;let c=Ir;for(let l=0;l<a;l++)c=c.map(([h,u])=>[1-u,h]);return en(r,o,t.side,c)}function U0(s,t){const e=Number(s.states?.vine_direction_bits??0),n=1/16,i=[];return e&1&&i.push(...en([[0,0,1-n],[1,0,1-n],[1,1,1-n],[0,1,1-n]],[0,0,1],t.side)),e&2&&i.push(...en([[n,0,0],[n,0,1],[n,1,1],[n,1,0]],[-1,0,0],t.side)),e&4&&i.push(...en([[1,0,n],[0,0,n],[0,1,n],[1,1,n]],[0,0,-1],t.side)),e&8&&i.push(...en([[1-n,0,1],[1-n,0,0],[1-n,1,0],[1-n,1,1]],[1,0,0],t.side)),i}function pa(s,t=s.side,e=s.modelTextures?.crossAlt??t){return[...en([[.05,0,.05],[.95,0,.95],[.95,1,.95],[.05,1,.05]],[-Math.SQRT1_2,0,Math.SQRT1_2],t),...en([[.95,0,.05],[.05,0,.95],[.05,1,.95],[.95,1,.05]],[-Math.SQRT1_2,0,-Math.SQRT1_2],e)]}function N0(s){const t=[];for(const i of[4/16,12/16])t.push(...en([[i,-.0625,1],[i,-.0625,0],[i,.9375,0],[i,.9375,1]],[1,0,0],s.side)),t.push(...en([[0,-.0625,i],[1,-.0625,i],[1,.9375,i],[0,.9375,i]],[0,0,1],s.side));return t}function F0(s){const t=pa(s);for(const l of t)l.points=l.points.map(([h,u,d])=>[h,u/2,d]),l.coordinates=l.coordinates.map(([h,u])=>[h,u/2]);const e=s.modelTextures?.flowerFront,n=s.modelTextures?.flowerBack;if(e===void 0||n===void 0)return t;const i=Math.PI/8,r=Math.cos(i),o=Math.sin(i),c=[[9.6/16,-1/16,15/16],[9.6/16,-1/16,1/16],[9.6/16,15/16,1/16],[9.6/16,15/16,15/16]].map(([l,h,u])=>[.5+((l-.5)*r-(h-.5)*o)/r,.5+((l-.5)*o+(h-.5)*r)/r,u]);return t.push(...en(c,[r,o,0],e,Ir,n)),t}function O0(s,t){const e=[];for(const i of[Math.PI/8,-Math.PI/8]){const r=Math.cos(i),o=Math.sin(i),a=Ps([0,.5,0,1,.5,1],t.side,[je(0,0,16,16),je(16,16,0,0)],[0,1]);e.push(...Vn(a,([c,l,h])=>[c,.5+(l-.5)-(h-14/16)*o/r,14/16+(l-.5)*o/r+(h-14/16)],([c,l,h])=>[c,l*r-h*o,l*o+h*r]))}const n=Number(s.states?.coral_direction??Number(s.states?.block_data??0)>>2&3);return Hl(e,[3,1,0,2][n]??3)}function B0(s,t,e){switch(e){case"bamboo":return P0(s,t);case"torch":return D0(s,t);case"end_rod":return L0(s,t);case"rail":return I0(s,t);case"vine":return U0(s,t);case"coral_wall_fan":return O0(s,t);case"cross":return["minecraft:wheat","minecraft:carrots","minecraft:potatoes","minecraft:beetroot","minecraft:nether_wart"].includes(s.name)?N0(t):s.name==="minecraft:kelp"?pa(t,t.modelTextures?.body??t.side,t.modelTextures?.bodyAlt??t.side):s.name==="minecraft:double_plant"&&s.states?.double_plant_type==="sunflower"&&s.states?.upper_block_bit?F0(t):pa(t);default:return}}const z0=[[0,1,0],[0,-1,0],[1,0,0],[-1,0,0],[0,0,1],[0,0,-1]];function k0([s,t,e,n,i,r]){return[[[s,i,r],[n,i,r],[n,i,e],[s,i,e]],[[s,t,e],[n,t,e],[n,t,r],[s,t,r]],[[n,t,r],[n,t,e],[n,i,e],[n,i,r]],[[s,t,e],[s,t,r],[s,i,r],[s,i,e]],[[s,t,r],[n,t,r],[n,i,r],[s,i,r]],[[n,t,e],[s,t,e],[s,i,e],[n,i,e]]]}function ma(s,t,e=!0){const n=t.atlas;if(!n)return;const i=[],r=[],o=[],a=[];for(const l of s){const h=i.length/3,u=l.tile%n.columns*n.stride+n.padding,d=Math.floor(l.tile/n.columns)*n.stride+n.padding;for(let f=0;f<4;f++){const[g,_,m]=l.points[f];i.push(g-(e?.5:0),_,m-(e?.5:0)),r.push(...l.normal);const[p,x]=l.coordinates[f];o.push((u+.05+p*(n.tileSize-.1))/n.width,1-(d+.05+(1-x)*(n.tileSize-.1))/n.height)}a.push(h,h+1,h+2,h,h+2,h+3)}const c=new ke;return c.setAttribute("position",new se(i,3)),c.setAttribute("normal",new se(r,3)),c.setAttribute("uv",new se(o,2)),c.setIndex(a),c.computeBoundingSphere(),c}function Ar(s,t,e){const n=s.name.replace("minecraft:",""),i=t.shape||(n.endsWith("_stairs")?"stairs":n.includes("slab")&&!n.includes("double")?"slab":"cube"),r=T0(s,t,e)||B0(s,t,i);if(r)return ma(r,e);const o=s.states||{},a=!!(o.top_slot_bit||o.upside_down_bit);let c=[[0,0,0,1,1,1]];i==="slab"?c=[a?[0,.5,0,1,1,1]:[0,0,0,1,.5,1]]:i==="stairs"?c=l0(s):i==="trapdoor"?c=r0(s):i==="gate"?c=o0(s):i==="door"?c=s0(i0(s)):i==="carpet"?c=[[0,0,0,1,1/16,1]]:i==="snow"?c=[[0,0,0,1,(Number(o.height||0)+1)/8,1]]:i==="farmland"?c=[[0,0,0,1,15/16,1]]:i==="cactus"?c=[[1/16,0,1/16,15/16,1,15/16]]:i==="fence"?c=[[6/16,0,6/16,10/16,1,10/16],[0,6/16,7/16,1,9/16,9/16],[0,12/16,7/16,1,15/16,9/16]]:i==="wall"?c=[[.25,0,.25,.75,1,.75],[0,0,5/16,1,13/16,11/16]]:i==="pane"&&(c=[[7/16,0,0,9/16,1,1]]);const l=[],h=[t.top,t.bottom,t.faces?.east??t.side,t.faces?.west??t.side,t.faces?.south??t.side,t.faces?.north??t.side];return c.forEach((u,d)=>{for(const f of u0(c,d))l.push({points:k0(f.box)[f.face],normal:[...z0[f.face]],coordinates:zl(f.box,f.face),tile:h[f.face]})}),ma(l,e)}function G0(s,t,e){const n=t.atlas;if(!n)return;const i=n.tileSize,r=1/32,o=[],a=[[0,0],[1,0],[1,1],[0,1]];o.push({tile:s,points:[[-.5,0,r],[.5,0,r],[.5,1,r],[-.5,1,r]],normal:[0,0,1],coordinates:a}),o.push({tile:s,points:[[.5,0,-r],[-.5,0,-r],[-.5,1,-r],[.5,1,-r]],normal:[0,0,-1],coordinates:[[1,0],[0,0],[0,1],[1,1]]});const c=(l,h)=>l>=0&&l<i&&h>=0&&h<i&&(!e||e[(h*i+l)*4+3]>=115);for(let l=0;l<i;l++)for(let h=0;h<i;h++)if(c(h,l)){const u=h/i-.5,d=(h+1)/i-.5,f=1-(l+1)/i,g=1-l/i,_=Array.from({length:4},()=>[(h+.5)/i,1-(l+.5)/i]);c(h-1,l)||o.push({tile:s,points:[[u,f,-r],[u,f,r],[u,g,r],[u,g,-r]],normal:[-1,0,0],coordinates:_}),c(h+1,l)||o.push({tile:s,points:[[d,f,r],[d,f,-r],[d,g,-r],[d,g,r]],normal:[1,0,0],coordinates:_}),c(h,l-1)||o.push({tile:s,points:[[u,g,r],[d,g,r],[d,g,-r],[u,g,-r]],normal:[0,1,0],coordinates:_}),c(h,l+1)||o.push({tile:s,points:[[u,f,-r],[d,f,-r],[d,f,r],[u,f,r]],normal:[0,-1,0],coordinates:_})}return ma(o,t,!1)}const H0=s=>`${Math.floor(s.position.x/16)},${Math.floor(s.position.z/16)}`,dr=s=>s*Math.PI/180,xo=s=>s.toLowerCase().replace(/[^a-z]/g,""),Qc=(s,t=!1,e)=>`${t?"light:":""}${s}${e?`|${e}`:""}`,ps=["head","headcontrol","headmain"],V0={head:ps,chest:["body","torso","chest"],mainhand:["rightitem","rightarmitem","helditem","rightarm","armright","arms"],offhand:["leftitem","leftarmitem","leftarm","armleft"]};class W0{constructor(t,e,n,i){this.catalog=t,this.assets=e,this.changed=n,this.failed=i,this.group.name="saved-world-entities",e.palette.forEach((a,c)=>this.paletteEntries.set(this.blockKey(a),c));const r=document.createElement("canvas"),o=e.atlas.atlas;o&&(r.width=o.width,r.height=o.height,this.itemCanvas=r.getContext("2d",{willReadFrequently:!0})||void 0,this.itemCanvas?.drawImage(e.texture.image,0,0,o.width,o.height)),this.itemMaterial=new Ue({map:e.texture,alphaTest:.45,side:Ie}),this.fireMaterial=new Ji({map:e.texture,alphaTest:.1,side:Ie})}catalog;assets;changed;failed;group=new fe;regions=new Map;active=new Map;materials=new Map;geometries=new Map;controller=new AbortController;paletteEntries=new Map;itemCanvas;itemMaterial;fireMaterial;lastSignature="";disposed=!1;unsupported=0;batches=[];omitted=0;invisible=0;unknownTypes=[];setRegion(t,e){this.removeRegion(t),this.regions.set(t,e),this.lastSignature=""}removeRegion(t){this.regions.delete(t);for(const[e,n]of this.active)e.startsWith(`${t}|`)&&this.release(e,n);this.lastSignature=""}clear(){for(const[t,e]of this.active)this.release(t,e);this.regions.clear(),this.lastSignature="",this.unsupported=this.omitted=this.invisible=0,this.clearBatches()}sync(t,e){if(this.disposed)return!1;const n=[];this.invisible=0;for(const[l,h]of this.regions)for(const u of h)t.has(H0(u))&&(u.invisible&&(this.invisible++,!Object.keys(u.equipment||{}).length&&!u.parts?.length&&!u.carriedBlock&&!u.fireTicks)||n.push({key:`${l}|${u.id}`,entity:u}));const i=l=>(l.position.x-e.x)**2+(l.position.y-e.y)**2+(l.position.z-e.z)**2;n.sort((l,h)=>i(l.entity)-i(h.entity));const r=n.slice(0,4096);this.omitted=n.length-r.length;const o=new Set(r.map(l=>l.key)),a=[...o].sort().join("|");if(a===this.lastSignature)return!1;for(const[l,h]of this.active)o.has(l)||this.release(l,h);this.unsupported=0;const c=new Set;for(const l of r){if(this.active.has(l.key))continue;const h=this.create(l.entity);h?this.active.set(l.key,h):(this.unsupported++,c.add(l.entity.type))}return this.unknownTypes=[...c],this.lastSignature=a,this.rebuildBatches(),this.trimTextures(),!0}texture(t,e=!1,n){const i=Qc(t,e,n),r=this.materials.get(i);if(r)return r.used=performance.now(),r.material;const o=new ve;o.colorSpace=ge,o.magFilter=Te,o.minFilter=hi;const a={map:o,alphaTest:.05,side:Ie,transparent:!0,opacity:0},c=e?new Ji(a):new Ue(a),l=n&&!e?new ve:void 0;l&&(l.colorSpace=ge,l.magFilter=Te,l.minFilter=hi),l&&c instanceof Ue&&(c.emissive.set(16777215),c.emissiveMap=l);const h={texture:o,emissiveTexture:l,material:c,pending:!0,error:!1,sprites:new Set,refs:0,used:performance.now()};this.materials.set(i,h);const u=(d,f)=>fetch(oi(d),{signal:this.controller.signal}).then(g=>{if(!g.ok)throw new Error("世界里的生物外观还没有载入，请重试。");return g.blob()}).then(g=>createImageBitmap(g,{imageOrientation:"flipY"})).then(g=>{if(this.disposed||this.materials.get(i)!==h){g.close();return}return f.image=g,f.flipY=!1,f.needsUpdate=!0,g});return Promise.all([u(t,o),...l?[u(n,l)]:[]]).then(([d])=>{if(!d||this.disposed||this.materials.get(i)!==h)return;const f=new OffscreenCanvas(d.width,d.height),g=f.getContext("2d");g?.drawImage(d,0,0);const m=g?.getImageData(0,0,d.width,d.height).data?.some((p,x)=>x%4===3&&p>12&&p<250)||!1;c.opacity=1,c.transparent=m,c.depthWrite=!m,c.needsUpdate=!0,h.pending=!1;for(const p of h.sprites)p.opacity=1,p.needsUpdate=!0;this.changed()}).catch(d=>{this.disposed||this.controller.signal.aborted||this.materials.get(i)!==h||(h.pending=!1,h.error=!0,this.failed(d instanceof Error?d.message:"世界里的生物外观还没有载入，请重试。"),this.changed())}),c}skeleton(t,e,n,i,r){const o=r||e.texture;i.add(Qc(o,e.emissive,e.emissiveTexture));const a={...this.catalog.poses?.[n.type]?.[String(n.pose??0)]||{},...n.boneRotations};return e0(e,this.texture(o,e.emissive,e.emissiveTexture),(l,h,u,d)=>{const f=`${t}:${h}`;let g=this.geometries.get(f);return g||(g=Kc(l,e.textureWidth,e.textureHeight,u,d),this.geometries.set(f,g)),g},a,n.hiddenBones)}bone(t,e){for(const n of e){const i=[...t.bones].find(([r])=>xo(r)===n)?.[1];if(i)return i}}blockKey(t){return`${t.name}:${JSON.stringify(Object.entries(t.states||{}).sort(([e],[n])=>e.localeCompare(n)))}`}itemGeometry(t){const e=this.assets.atlas,n=`${t.name}:${t.damage??0}`;if(t.block){const d=this.blockKey(t.block),f=`block:${d}`,g=this.geometries.get(f);if(g)return g;const _=this.paletteEntries.get(d),m=_===void 0?e.materials[t.block.name]:e.paletteMaterials?.[_]||e.materials[t.block.name];if(!m)return;const p=Ar(t.block,m,e);return p&&this.geometries.set(f,p),p}const r=(e.inventoryItems?.[n]||e.inventoryItems?.[t.name]||e.inventoryItems?.[`${t.name}:0`])?.tile??e.decorativeItems?.[n]??e.decorativeItems?.[t.name];if(r===void 0||!e.atlas)return;const o=this.geometries.get(`item:${r}`);if(o)return o;const a=e.atlas,c=r%a.columns*a.stride+a.padding,l=Math.floor(r/a.columns)*a.stride+a.padding,h=this.itemCanvas?.getImageData(c,l,a.tileSize,a.tileSize).data,u=G0(r,e,h);return u&&this.geometries.set(`item:${r}`,u),u}item(t,e){const n=this.itemGeometry(t);if(!n)return;const i=new Ot(n,this.itemMaterial);return i.scale.setScalar(e),i.userData.savedItem=t.name,i}armor(t,e,n,i){const r=/^minecraft:(leather|chainmail|iron|golden|diamond|netherite|turtle)_(helmet|chestplate|leggings|boots)$/.exec(n.name);if(!r)return!1;const o=(r[1]==="leather"&&n.color!==void 0?this.catalog.dyedArmorTextures?.[String(n.color)]:void 0)||this.catalog.armorTextures?.[r[1]];if(!o)return!1;const a=o[e==="legs"?1:0];i.add(a);const c=this.texture(a),l=e==="legs"?.25:.5,h=[];e==="head"&&h.push({names:ps,origin:[-4,24,-4],size:[8,8,8],uv:[0,0],pivot:[0,24,0]}),(e==="chest"||e==="legs")&&h.push({names:["body","torso","chest"],origin:[-4,12,-2],size:[8,12,4],uv:[16,16],pivot:[0,24,0]}),e==="chest"&&(h.push({names:["rightarm","armright"],origin:[-8,12,-2],size:[4,12,4],uv:[40,16],pivot:[-5,22,0]}),h.push({names:["leftarm","armleft"],origin:[4,12,-2],size:[4,12,4],uv:[40,16],pivot:[5,22,0]})),(e==="legs"||e==="feet")&&(h.push({names:["rightleg","legright"],origin:[-4,0,-2],size:[4,12,4],uv:[0,16],pivot:[-2,12,0]}),h.push({names:["leftleg","legleft"],origin:[0,0,-2],size:[4,12,4],uv:[0,16],pivot:[2,12,0]}));let u=!1;for(const d of h){const f=this.bone(t,d.names);if(!f)continue;const g=`armor:${e}:${d.names[0]}`;let _=this.geometries.get(g);_||(_=Kc({origin:d.origin,size:d.size,uv:d.uv,inflate:l,mirror:d.names[0].startsWith("left")},64,32),this.geometries.set(g,_));const m=new Ot(_,c);m.position.set(-(d.origin[0]+d.size[0]/2-d.pivot[0])/16,(d.origin[1]+d.size[1]/2-d.pivot[1])/16,(d.origin[2]+d.size[2]/2-d.pivot[2])/16),f.add(m),u=!0}return u}create(t){const e=new fe,n=new Set,i=[],r=[],o=`${t.type}:${t.variant??0}`,a=t.model||(Object.hasOwn(this.catalog.models,o)?o:t.type),c=this.catalog.models[a];let l,h=0,u=0;if(t.type==="minecraft:item"||t.type==="minecraft:ice_bomb"||t.type==="minecraft:falling_block"){const f=t.item||(t.block?{name:t.block.name,block:t.block}:t.type==="minecraft:ice_bomb"?{name:"minecraft:ice_bomb"}:void 0);if(!f)return;const g=t.type==="minecraft:falling_block",_=this.item(f,g?1:f.block?.25:.5);if(!_)return;if(_.position.y=g?-.5:.12,e.add(_),h=1,!g){const m=(f.count||1)>48?5:(f.count||1)>32?4:(f.count||1)>16?3:(f.count||1)>1?2:1;for(let p=1;p<m;p++){const x=_.clone();x.position.x+=(p*7%5-2)*.04,x.position.y+=p*.018,x.position.z+=p*.035,e.add(x),h++}}}else if(c){const f=c.bones.flatMap(_=>_.cubes||[]),g=f.length===1&&f[0].size[2]===0?f[0]:void 0;if(g){const _=t.texture||c.texture,m=c.emissive||/xp_orb|fireball/.test(t.type),p=`${m?"light:":""}${_}`;n.add(p);const x=this.texture(_,m),S=this.materials.get(p),y=new Hi({map:x.map,alphaTest:.05,opacity:S.pending?0:1}),T=Ol(g),A=[T.south,T.north].find(E=>E&&E[0]+Math.abs(E[2])<=c.textureWidth)||T.south||T.north;if(A){const[E,b,L,B]=A,k=[E/c.textureWidth,1-(b+B)/c.textureHeight,L/c.textureWidth,B/c.textureHeight];y.onBeforeCompile=W=>{W.vertexShader=W.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
#ifdef USE_MAP
vMapUv = vec2(${k[0]}, ${k[1]}) + vMapUv * vec2(${k[2]}, ${k[3]});
#endif`)},y.customProgramCacheKey=()=>k.join(",")}const P=new kn(y),I=t.type==="minecraft:xp_orb"?.3:1;P.scale.set(g.size[0]/16*I,g.size[1]/16*I,1),P.position.set(-(g.origin[0]+g.size[0]/2)/16*I,(g.origin[1]+g.size[1]/2)/16*I,0),t.type==="minecraft:xp_orb"&&(P.position.x=0,y.color.setRGB(.5,1,.0134)),e.add(P),S.sprites.add(y),r.push(y),h=1}else if(l=this.skeleton(a,c,t,n,t.texture),n0(l,c,t),t.invisible&&l.group.traverse(_=>{_ instanceof Ot&&(_.visible=!1)}),e.add(l.group),h+=l.cubes,c.billboard){const _=this.texture(t.texture||c.texture,c.emissive,c.emissiveTexture),m=new Hi({map:_.map,alphaTest:.05});r.push(m);const p=new kn(m);p.position.y=c.billboard.height/2,p.scale.set(c.billboard.width,c.billboard.height,1),e.add(p)}}else return;if(e.name=t.id,e.position.set(t.position.x,t.position.y,t.position.z),e.rotation.y=Math.PI-dr(t.bodyYaw??t.rotation?.yaw??0),e.scale.setScalar(t.scale??(t.baby?.5:1)),l&&t.rotation){const f=this.bone(l,ps);f?(f.rotation.x-=dr(t.rotation.pitch),f.rotation.y-=dr(t.rotation.yaw-(t.bodyYaw??t.rotation.yaw))):/arrow|fireball|trident|skull|bullet|rocket/.test(t.type)&&(e.rotation.x=-dr(t.rotation.pitch))}for(const f of t.parts||[]){const g=this.catalog.models[f.model];if(!g){u++;continue}const _=this.skeleton(f.model,g,t,n,f.texture);f.position&&_.group.position.set(-f.position[0]/16,f.position[1]/16,f.position[2]/16),f.rotation&&_.group.rotation.copy(vs(f.rotation)),f.scale&&_.group.scale.multiplyScalar(f.scale),((f.bone&&l?this.bone(l,[xo(f.bone)]):void 0)||l?.group||e).add(_.group),h+=_.cubes}for(const[f,g]of Object.entries(t.equipment||{})){if(t.hiddenEquipment?.includes(f)||t.parts?.some(S=>S.slot===f))continue;if(!l){u++;continue}if((t.type==="minecraft:fox"||t.type==="minecraft:panda")&&f==="mainhand"){const S=this.bone(l,ps),y=this.item(g,.5);S&&y?(y.position.set(0,t.type==="minecraft:panda"?-.3:-.2,t.type==="minecraft:panda"?-.65:-.45),y.rotation.x=Math.PI/2,S.add(y)):u++;continue}if(!["mainhand","offhand"].includes(f)&&this.armor(l,f,g,n))continue;const _=this.bone(l,V0[f]||[]),m=this.item(g,f==="head"?.65:.7);if(!_||!m){u++;continue}const p=/item/i.test(_.name),x=xo(_.name)==="arms";m.position.set(0,f==="head"?.25:p?-.15:x?-.1:-.65,x?-.4:f==="head"||p?0:-.12),f!=="head"&&(m.rotation.x=-Math.PI/2,m.rotation.z=-Math.PI/4),_.add(m)}if(t.type==="minecraft:enderman"&&t.carriedBlock){const f=this.item({name:t.carriedBlock.name,block:t.carriedBlock},.5);f?(f.position.set(0,1.15,-.55),e.add(f)):u++}const d={"minecraft:chest_minecart":"minecraft:chest","minecraft:hopper_minecart":"minecraft:hopper","minecraft:tnt_minecart":"minecraft:tnt","minecraft:command_block_minecart":"minecraft:command_block"};if(d[t.type]){const f=this.assets.palette.find(_=>_.name===d[t.type]),g=f&&this.item({name:f.name,block:f},.75);g?(g.position.y=.22,e.add(g)):u++}if(t.type==="minecraft:snow_golem"&&!t.sheared&&l){const f=this.assets.palette.find(m=>/^(minecraft:)?(?:carved_)?pumpkin$/.test(m.name)),g=this.bone(l,ps),_=f&&this.item({name:f.name,block:f},10/16);g&&_?(_.position.y=-5/16,g.add(_)):u++}if(t.fireTicks&&!/wither_skull|fireball|blaze|magma_cube|ender_crystal|lightning_bolt/.test(t.type)){const f=this.assets.atlas.materials["minecraft:fire"];let g=this.geometries.get("saved-fire");if(!g&&f&&(g=Ar({name:"minecraft:fire"},f,this.assets.atlas),g&&this.geometries.set("saved-fire",g)),g){const _=new Be().setFromObject(e).getSize(new R).divideScalar(e.scale.x),m=Math.max(.35,Math.min(2,Math.max(_.x,_.z)*1.1)),p=Math.max(.3,Math.min(3.5,_.y));for(let x=0;x<p;x+=m*.45){const S=new Ot(g,this.fireMaterial);S.position.y=x,S.scale.set(m*(1-x/p*.25),Math.min(m,p-x+m*.25),m*(1-x/p*.25)),e.add(S),h++}}}if(t.name&&t.showName!==!1){const f=t.name.replace(/§[0-9a-fk-or]/gi,"").slice(0,96),g=document.createElement("canvas");g.width=512,g.height=64;const _=g.getContext("2d");_.font=`24px ${this.assets.fontFamily}`,_.textAlign="center",_.textBaseline="middle";const m=Math.min(500,_.measureText(f).width+18);_.fillStyle="#0009",_.fillRect((512-m)/2,8,m,48),_.fillStyle="#fff",_.fillText(f,256,32,490);const p=new Ls(g);p.colorSpace=ge;const x=new Hi({map:p,depthWrite:!1}),S=new kn(x),y=new Be().setFromObject(l?.group||e);S.position.y=Number.isFinite(y.max.y)?(y.max.y-t.position.y)/e.scale.y+.35:2.2,S.scale.set(3.5,.4375,1),e.add(S),i.push(p),r.push(x)}for(const f of n){const g=this.materials.get(f);g&&g.refs++}return{entity:t,group:e,materials:n,ownTextures:i,ownMaterials:r,model:a,cubes:h,unsupportedEquipment:u}}clearBatches(){for(const t of this.batches)t.dispose();this.batches.length=0,this.group.clear()}rebuildBatches(){this.clearBatches();const t=new Map;for(const e of this.active.values())e.group.updateMatrixWorld(!0),e.group.traverseVisible(n=>{if(n instanceof kn){const o=new kn(n.material);n.matrixWorld.decompose(o.position,o.quaternion,o.scale),this.group.add(o);return}if(!(n instanceof Ot)||Array.isArray(n.material))return;const i=`${n.geometry.uuid}:${n.material.uuid}`;let r=t.get(i);r||(r={geometry:n.geometry,material:n.material,matrices:[]},t.set(i,r)),r.matrices.push(n.matrixWorld.clone())});for(const e of t.values()){const n=new Ou(e.geometry,e.material,e.matrices.length);e.matrices.forEach((i,r)=>n.setMatrixAt(r,i)),n.instanceMatrix.needsUpdate=!0,n.computeBoundingSphere(),this.batches.push(n),this.group.add(n)}}release(t,e){this.group.remove(e.group),this.active.delete(t);for(const n of e.materials){const i=this.materials.get(n);if(i){i.refs=Math.max(0,i.refs-1);for(const r of e.ownMaterials)r instanceof Hi&&i.sprites.delete(r)}}e.ownTextures.forEach(n=>n.dispose()),e.ownMaterials.forEach(n=>n.dispose())}trimTextures(){if(!(this.materials.size<=256)){for(const[t,e]of[...this.materials].filter(([,n])=>!n.refs).sort((n,i)=>n[1].used-i[1].used))if(this.materials.delete(t),e.texture.dispose(),e.emissiveTexture?.dispose(),e.material.dispose(),e.texture.image?.close?.(),e.emissiveTexture?.image?.close?.(),this.materials.size<=256)break}}getDiagnostics(){const t={};let e=0;for(const n of this.active.values())t[n.entity.type]=(t[n.entity.type]||0)+1,e+=n.cubes;return{savedEntities:this.active.size,savedEntityTypes:t,savedEntityCubes:e,savedEntityBatches:this.batches.length,savedEntitySprites:this.group.children.filter(n=>n instanceof kn).length,savedEntityVisible:this.group.visible,savedEntityTexturePending:[...this.materials.values()].filter(n=>n.pending).length,savedEntityTextureErrors:[...this.materials.values()].filter(n=>n.error).length,unsupportedSavedEntities:this.unsupported,unsupportedSavedEquipment:[...this.active.values()].reduce((n,i)=>n+i.unsupportedEquipment,0),unsupportedSavedEntityTypes:this.unknownTypes,omittedSavedEntities:this.omitted,invisibleSavedEntities:this.invisible,savedEntityEquipmentIssues:[...this.active.values()].filter(n=>n.unsupportedEquipment).slice(0,12).map(n=>({id:n.entity.id,type:n.entity.type,equipment:n.entity.equipment,parts:n.entity.parts,hidden:n.entity.hiddenEquipment})),savedEntitySamples:[...this.active.values()].slice(0,12).map(n=>({id:n.entity.id,type:n.entity.type,position:n.entity.position,rotation:n.entity.rotation,model:n.model,pose:n.entity.pose}))}}dispose(){if(!this.disposed){this.disposed=!0,this.controller.abort(),this.clear();for(const t of this.materials.values())t.texture.dispose(),t.emissiveTexture?.dispose(),t.material.dispose(),t.texture.image?.close?.(),t.emissiveTexture?.image?.close?.();for(const t of this.geometries.values())t.dispose();this.itemMaterial.dispose(),this.fireMaterial.dispose(),this.materials.clear(),this.geometries.clear()}}}const we=s=>typeof s=="number"&&Number.isFinite(s),hn=s=>Array.isArray(s)&&s.length===3&&s.every(we),xs=s=>typeof s=="string"&&/^textures\/[a-zA-Z0-9_./-]+\.(?:png|webp|jpg)$/.test(s)&&!s.split("/").some(t=>t===".."||t==="."),yo=s=>!!s&&typeof s=="object"&&/^minecraft:[a-zA-Z0-9_]+$/.test(s.name)&&(s.damage===void 0||we(s.damage));function X0(s){return!s||!hn(s.origin)||!hn(s.size)||s.size.some(t=>t<0)||s.inflate!==void 0&&!we(s.inflate)||s.rotation!==void 0&&!hn(s.rotation)||s.pivot!==void 0&&!hn(s.pivot)?!1:s.uv===void 0?!0:Array.isArray(s.uv)?s.uv.length===2&&s.uv.every(we):!!s.uv&&typeof s.uv=="object"&&Object.entries(s.uv).every(([t,e])=>["east","west","north","south","up","down"].includes(t)&&!!e&&Array.isArray(e.uv)&&e.uv.length===2&&e.uv.every(we)&&(e.uv_size===void 0||Array.isArray(e.uv_size)&&e.uv_size.length===2&&e.uv_size.every(we))&&(e.uvSize===void 0||Array.isArray(e.uvSize)&&e.uvSize.length===2&&e.uvSize.every(we)))}function q0(s){const t=s;if(!t||t.version!==1||!t.models||typeof t.models!="object"||Array.isArray(t.models))throw new Error("世界里的生物外观暂时无法读取。");for(const e of Object.values(t.models)){if(!e||!xs(e.texture)||!we(e.textureWidth)||e.textureWidth<=0||!we(e.textureHeight)||e.textureHeight<=0||e.emissiveTexture!==void 0&&!xs(e.emissiveTexture)||!Array.isArray(e.bones)||e.bones.length>512||e.scale!==void 0&&(!we(e.scale)||e.scale<=0)||e.billboard&&(!we(e.billboard.width)||!we(e.billboard.height)||e.billboard.width<=0||e.billboard.height<=0))throw new Error("世界里的生物外观暂时无法读取。");const n=new Map(e.bones.map(i=>[i.name.toLowerCase(),i]));if(n.size!==e.bones.length)throw new Error("世界里的生物姿态暂时无法读取。");for(const i of e.bones){if(typeof i.name!="string"||!i.name||i.pivot!==void 0&&!hn(i.pivot)||i.rotation!==void 0&&!hn(i.rotation)||i.bind_pose_rotation!==void 0&&!hn(i.bind_pose_rotation)||i.cubes!==void 0&&(!Array.isArray(i.cubes)||i.cubes.length>2048||i.cubes.some(a=>!X0(a))))throw new Error("世界里的生物姿态暂时无法读取。");const r=new Set([i.name.toLowerCase()]);let o=i.parent?.toLowerCase();for(;o;){if(r.has(o)||!n.has(o))throw new Error("世界里的生物姿态暂时无法读取。");r.add(o),o=n.get(o).parent?.toLowerCase()}}}for(const e of[t.armorTextures,t.dyedArmorTextures])if(e&&Object.values(e).some(n=>!Array.isArray(n)||n.length!==2||!n.every(xs)))throw new Error("世界里的盔甲外观暂时无法读取。");if(t.poses&&Object.values(t.poses).some(e=>!e||typeof e!="object"||Object.values(e).some(n=>!n||typeof n!="object"||Object.values(n).some(i=>!hn(i)))))throw new Error("世界里的生物姿态暂时无法读取。");return t}function Y0(s,t){const e=s;if(!e||e.version!==1||!Array.isArray(e.entities)||e.entities.length!==t.count)throw new Error("附近的生物暂时无法读取，请重新打开地图。");const n=new Set;for(const i of e.entities){if(!i||typeof i.id!="string"||!i.id||n.has(i.id)||typeof i.type!="string"||!/^minecraft:[a-zA-Z0-9_]+$/.test(i.type)||!i.position||![i.position.x,i.position.y,i.position.z].every(we)||Math.floor(i.position.x/64)!==t.x||Math.floor(i.position.z/64)!==t.z||i.rotation&&(!we(i.rotation.yaw)||!we(i.rotation.pitch))||i.hiddenEquipment&&(!Array.isArray(i.hiddenEquipment)||i.hiddenEquipment.some(r=>!["head","chest","legs","feet","mainhand","offhand"].includes(r)))||i.scale!==void 0&&(!we(i.scale)||i.scale<=0)||i.texture!==void 0&&!xs(i.texture)||i.name!==void 0&&typeof i.name!="string"||i.boneRotations&&Object.values(i.boneRotations).some(r=>!hn(r))||i.hiddenBones&&(!Array.isArray(i.hiddenBones)||i.hiddenBones.some(r=>typeof r!="string"))||i.item&&!yo(i.item)||i.equipment&&Object.values(i.equipment).some(r=>!yo(r))||i.carriedBlock&&!yo(i.carriedBlock)||i.fireTicks!==void 0&&(!we(i.fireTicks)||i.fireTicks<0)||i.parts&&(!Array.isArray(i.parts)||i.parts.some(r=>!r||typeof r.model!="string"||r.slot!==void 0&&!["head","chest","legs","feet","mainhand","offhand"].includes(r.slot)||r.texture!==void 0&&!xs(r.texture)||r.position!==void 0&&!hn(r.position)||r.rotation!==void 0&&!hn(r.rotation)||r.scale!==void 0&&(!we(r.scale)||r.scale<=0))))throw new Error("附近的生物暂时无法读取，请重新打开地图。");n.add(i.id)}return e.entities}const tl=["#f9fffe","#f9801d","#c74ebd","#3ab3da","#fed83d","#80c71f","#f38baa","#474f52","#9d9d97","#169c9c","#8932b8","#3c44aa","#835432","#5e7c16","#b02e26","#1d1d21"],$0=s=>`${Math.floor(s.x/16)},${Math.floor(s.z/16)}`,Mo=(s,t,e=0)=>Number(s.states?.[t]??e);class j0{constructor(t,e){this.family=t,this.size=Math.min(1536,Math.floor(e/this.cell)*this.cell);const n=document.createElement("canvas");n.width=n.height=this.size,this.context=n.getContext("2d"),this.texture=new Ls(n),this.texture.colorSpace=ge,this.texture.magFilter=tn,this.texture.minFilter=Cn,this.texture.generateMipmaps=!0}family;texture;cell=32;size;context;glyphs=new Map;changed=!1;missing=0;get count(){return this.glyphs.size}get bytes(){return this.size*this.size*4}font(t){return`${t.italic?"italic ":""}${t.bold?"bold ":""}20px ${this.family}`}advance(t,e){return this.context.font=this.font(e),this.context.measureText(t).width}glyph(t,e){const n=e.obfuscated&&t!==" "?"▒":t,i=`${e.bold?1:0}${e.italic?1:0}:${n}`,r=this.glyphs.get(i);if(r)return r;const o=this.size/this.cell;if(this.glyphs.size>=o*o){this.missing++;return}const a=this.glyphs.size%o*this.cell,c=Math.floor(this.glyphs.size/o)*this.cell;this.context.font=this.font(e),this.context.fillStyle="#ffffff",this.context.textBaseline="alphabetic",this.context.save(),this.context.beginPath(),this.context.rect(a,c,this.cell,this.cell),this.context.clip(),this.context.fillText(n,a+5,c+24),this.context.restore();const l={x:a,y:c,advance:this.context.measureText(t).width};return this.glyphs.set(i,l),this.changed=!0,l}upload(){this.changed&&(this.texture.needsUpdate=!0,this.changed=!1)}dispose(){this.texture.dispose(),this.glyphs.clear(),this.context.canvas.width=this.context.canvas.height=1}}class K0{constructor(t,e=()=>{},n=()=>{}){this.assets=t,this.changed=e,this.failed=n,this.group.name="visual-block-entities",this.glyphs=new j0(t.fontFamily,t.maxTextureSize);const i={map:this.glyphs.texture,vertexColors:!0,transparent:!0,alphaTest:.03,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1};this.normalText=new Ue(i),this.glowingText=new Ji(i),t.palette.forEach((r,o)=>{if(r.extra?.length)return;const a=this.paletteByName.get(r.name)||[];a.push(o),this.paletteByName.set(r.name,a)})}assets;changed;failed;group=new fe;regions=new Map;active=new Map;glyphs;normalText;glowingText;geometries=new Set;sharedMaterials=new Map;paletteByName=new Map;plantMaterials=new Map;appearances=new Map;images=new Map;imageController=new AbortController;lastSignature="";omitted=0;unsupported=0;disposed=!1;setRegion(t,e){this.removeRegion(t),this.regions.set(t,e),this.lastSignature=""}removeRegion(t){this.regions.delete(t);for(const[e,n]of this.active)e.startsWith(`${t}:`)&&this.release(e,n);this.lastSignature=""}clear(){for(const[t,e]of this.active)this.release(t,e);this.regions.clear(),this.lastSignature="",this.omitted=this.unsupported=0}sync(t,e,n,i){if(this.disposed)return!1;const r=[];for(const[h,u]of this.regions)u.forEach((d,f)=>{if(d.type==="sign"?!n.has(`${d.x},${d.y},${d.z}`):!i)return;const g=d.type==="sign"?!!(d.front.text.trim()||d.back?.text.trim()):d.type==="flower_pot"?!!d.plant:d.type==="item_frame"?!!d.item:d.type==="banner";t.has($0(d))&&g&&r.push({region:h,index:f,entity:d})});const o=h=>(h.x-e.x)**2+(h.y-e.y)**2+(h.z-e.z)**2;r.sort((h,u)=>o(h.entity)-o(u.entity));const a=r.slice(0,2048);this.omitted=r.length-a.length;const c=new Set(a.map(h=>`${h.region}:${h.index}`)),l=[...c].sort().join("|");if(l===this.lastSignature)return!1;this.unsupported=0;for(const[h,u]of this.active)c.has(h)||this.release(h,u);for(const h of a){const u=`${h.region}:${h.index}`;if(this.active.has(u))continue;const d=this.create(h.entity);d?(this.active.set(u,d),this.group.add(d.group)):this.unsupported++}return this.glyphs.upload(),this.lastSignature=l,!0}getDiagnostics(){const t={};for(const n of this.active.values()){const i=String(n.group.userData.entityType);t[i]=(t[i]||0)+1}let e=0;return this.group.traverse(n=>{if(!(n instanceof Ot))return;const i=n.geometry;for(const r of Object.values(i.attributes))e+=r.array.byteLength;e+=i.index?.array.byteLength||0}),{entities:this.active.size,entityTypes:t,cachedEntityRegions:this.regions.size,entityGlyphs:this.glyphs.count,entityGeometryBytes:e,entityTextureBytes:this.disposed?0:this.glyphs.bytes+[...this.appearances.values()].reduce((n,i)=>n+i.canvas.width*i.canvas.height*4,0),missingEntityGlyphs:this.glyphs.missing,omittedEntities:this.omitted,unsupportedEntityContents:this.unsupported,pendingEntityTextures:[...this.appearances.values()].filter(n=>n.pending).length,entityTextureErrors:[...this.appearances.values()].filter(n=>n.error).length}}create(t){if(t.type==="sign")return this.sign(t);if(t.type==="banner")return this.banner(t);if(t.type==="flower_pot")return this.pot(t);if(t.type==="item_frame")return this.frame(t)}banner(t){const e=this.assets.atlas.decorativeBanners,n=t.bannerType===1;if(!e||(n?!e.ominous:t.patterns.some(l=>!e.patterns[l.pattern])))return;const i=n?"banner:ominous":`banner:${t.baseColor}:${JSON.stringify(t.patterns)}`,r=this.appearance(i,20,40,async l=>{if(n){l.getContext("2d").drawImage(await this.image(e.ominous),0,0,20,40);return}const h=await this.image(e.base),u=await Promise.all(t.patterns.map(f=>this.image(e.patterns[f.pattern]))),d=l.getContext("2d");d.clearRect(0,0,l.width,l.height),this.tintedImage(d,h,tl[15-t.baseColor]),u.forEach((f,g)=>this.tintedImage(d,f,tl[15-t.patterns[g].color]))}),o=this.entityGroup(t);o.userData.bannerType=t.bannerType||0;const a=t.block.name.includes("wall_banner");o.position.set(t.x+.5,t.y+(a?11/16:1),t.z+.5),o.rotation.y=wr({name:a?"minecraft:wall_sign":"minecraft:standing_sign",states:{facing_direction:Mo(t.block,"facing_direction",2),ground_sign_direction:Mo(t.block,"ground_sign_direction")}}).angle;const c=[];for(const l of[!1,!0]){const h=new $n(.8333333333333334,1.6666666666666667);if(l){const d=h.getAttribute("uv");for(let f=0;f<d.count;f++)d.setX(f,1-d.getX(f))}const u=new Ot(h,r.material);u.position.z=1/16+(a?-7/16:0)+(l?-1:1)*(1/48+.002),l&&(u.rotation.y=Math.PI),o.add(u),c.push(h)}return{group:o,release:()=>{c.forEach(l=>l.dispose()),this.releaseAppearance(i)}}}tintedImage(t,e,n){const i=document.createElement("canvas");i.width=t.canvas.width,i.height=t.canvas.height;const r=i.getContext("2d");r.imageSmoothingEnabled=!1,r.drawImage(e,0,0,i.width,i.height),r.globalCompositeOperation="multiply",r.fillStyle=n,r.fillRect(0,0,i.width,i.height),r.globalCompositeOperation="destination-in",r.drawImage(e,0,0,i.width,i.height),t.drawImage(i,0,0),i.width=i.height=1}pot(t){if(!t.plant)return;const e=this.plantMaterial(t.plant);if(!e)return;if(t.plant.name==="minecraft:cactus"||t.plant.name==="minecraft:bamboo")return this.pottedStem(t,e);const n=this.entityGroup(t),i=new ke,r=2.6/16,o=13.4/16,a=4/16,c=1,l=[r,a,r,o,a,o,o,c,o,r,c,r,o,a,r,r,a,o,r,c,o,o,c,r];i.setAttribute("position",new se(l,3));const h=this.tileUvs(e.side);i.setAttribute("uv",new se([...h,...h],2));const u=e.tint||[1,1,1];i.setAttribute("color",new se(Array.from({length:8},()=>u).flat(),3)),i.setIndex([0,1,2,0,2,3,4,5,6,4,6,7]),i.computeVertexNormals(),i.computeBoundingSphere();const d=new Ot(i,this.atlasMaterial());return n.add(d),{group:n,release:()=>i.dispose()}}pottedStem(t,e){const n=t.plant?.name==="minecraft:bamboo",i=this.entityGroup(t),r=[],o=new dn(n?2/16:4/16,n?1:11/16,n?2/16:4/16),a=n?e.modelTextures?.stem??e.side:e.side,c=n?e.modelTextures?.cap??e.top:e.top,l=[];for(let u=0;u<6;u++){const d=u===2||u===3?n?[13,0,15,2]:[6,6,10,10]:n?[6,0,8,16]:[6,0,10,12];l.push(...this.tileUvs(u===2||u===3?c:a,!0,d))}o.setAttribute("uv",new se(l,2)),o.setAttribute("color",new se(Array(72).fill(1),3));const h=new Ot(o,this.atlasMaterial());if(h.position.set(.5,n?.5:21/32,.5),i.add(h),r.push(o),n&&e.modelTextures?.pottedLeaves!==void 0){const u=new $n(1,1);u.setAttribute("uv",new se(this.tileUvs(e.modelTextures.pottedLeaves,!0),2)),u.setAttribute("color",new se(Array(12).fill(1),3));const d=new Ot(u,this.atlasMaterial());d.position.set(.5,10/16,.5),i.add(d),r.push(u)}return{group:i,release:()=>r.forEach(u=>u.dispose())}}plantMaterial(t){const e=`${t.name}:${JSON.stringify(Object.entries(t.states||{}).sort(([o],[a])=>o.localeCompare(a)))}`;if(this.plantMaterials.has(e))return this.plantMaterials.get(e);let n=-1,i=-1;for(const o of this.paletteByName.get(t.name)||[]){const a=this.assets.palette[o],c=Object.entries(t.states||{}).filter(([h,u])=>a.states?.[h]===u).length;!Object.entries(t.states||{}).some(([h,u])=>a.states?.[h]!==void 0&&a.states[h]!==u)&&c>i&&(n=o,i=c)}const r=n<0?this.assets.atlas.materials[t.name]:this.assets.atlas.paletteMaterials?.[n]||this.assets.atlas.materials[t.name];return this.plantMaterials.size>=512&&this.plantMaterials.clear(),this.plantMaterials.set(e,r),r}frame(t){if(!t.item)return;const e=this.entityGroup(t);switch(e.position.set(t.x+.5,t.y+.5,t.z+.5),Mo(t.block,"facing_direction",2)){case 0:e.rotation.x=Math.PI/2;break;case 1:e.rotation.x=-Math.PI/2;break;case 3:break;case 4:e.rotation.y=-Math.PI/2;break;case 5:e.rotation.y=Math.PI/2;break;default:e.rotation.y=Math.PI}const n=t.item.map,i=n?1:.5,r=new $n(i,i);let o,a,c=()=>{};if(n){const h=`map:${n.file}`;a=this.appearance(h,n.width,n.height,async(d,f)=>{const g=d.getContext("2d");g.fillStyle="#d8cfa8",g.fillRect(0,0,d.width,d.height);const _=await fetch(zn(n.file),{signal:f});if(!_.ok)throw new Error(`地图画下载失败（${_.status}）`);const m=this.assets.atlas.decorativeMapBackground,p=await createImageBitmap(await _.blob());try{const x=m?await this.image(m):void 0;x&&g.drawImage(x,0,0,d.width,d.height),g.drawImage(p,0,0)}finally{p.close()}},!0).material,c=()=>this.releaseAppearance(h)}else{const h=t.item.block,u=`${t.item.name}:${t.item.damage}`,d=h?`${u}|${h.name}|${JSON.stringify(Object.fromEntries(Object.entries(h.states||{}).sort(([_],[m])=>_<m?-1:_>m?1:0)))}`:void 0,f=this.assets.atlas.decorativeItems;o=d&&f?.[d]!==void 0?d:f?.[u]!==void 0?u:t.item.name;const g=f?.[o];if(g===void 0){r.dispose();return}r.setAttribute("uv",new se(this.tileUvs(g,!0),2)),a=this.atlasMaterial(),r.setAttribute("color",new se(Array(12).fill(1),3))}const l=new Ot(r,a);return l.position.z=-7/16+.002,l.rotation.z=-t.rotation*Math.PI/180,l.renderOrder=2,l.userData.framedItem=t.item.name,o&&(l.userData.itemTextureKey=o),n&&(l.userData.mapFile=n.file),e.add(l),{group:e,release:()=>{r.dispose(),c()}}}entityGroup(t){const e=new fe;return e.position.set(t.x,t.y,t.z),e.userData.entityType=t.type,e.userData.position={x:t.x,y:t.y,z:t.z},e}tileUvs(t,e=!1,n=[0,0,16,16]){const i=this.assets.atlas.atlas,r=t%i.columns*i.stride+i.padding,o=Math.floor(t/i.columns)*i.stride+i.padding,[a,c,l,h]=n.map(_=>_/16*i.tileSize),u=(r+a)/i.width,d=(r+l)/i.width,f=1-(o+h)/i.height,g=1-(o+c)/i.height;return e?[u,g,d,g,u,f,d,f]:[u,f,d,f,d,g,u,g]}atlasMaterial(){let t=this.sharedMaterials.get("atlas");return t||(t=new Ue({map:this.assets.texture,vertexColors:!0,alphaTest:.45,alphaToCoverage:!0,side:Ie}),ui(t,this.assets.texture,this.assets.maxFootprint),this.sharedMaterials.set("atlas",t)),t}image(t){let e=this.images.get(t);return e||(e=fetch(oi(t),{signal:this.imageController.signal}).then(n=>{if(!n.ok)throw new Error(`地图装饰贴图下载失败（${n.status}）`);return n.blob()}).then(n=>createImageBitmap(n)).catch(n=>{throw this.images.delete(t),n}),this.images.set(t,e)),e}appearance(t,e,n,i,r=!1){let o=this.appearances.get(t);if(o)return o.refs++,o;const a=document.createElement("canvas");a.width=e,a.height=n;const c=new Ls(a);c.colorSpace=ge,c.magFilter=Te,c.minFilter=hi;const l={map:c,alphaTest:.02,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1},h=r?new Ji(l):new Ue(l);o={canvas:a,texture:c,material:h,refs:1,controller:new AbortController,pending:!0,error:!1},this.appearances.set(t,o);const u=o;return i(a,u.controller.signal).then(()=>{this.disposed||this.appearances.get(t)!==u||(u.pending=!1,c.needsUpdate=!0,this.changed())}).catch(d=>{this.disposed||this.appearances.get(t)!==u||u.controller.signal.aborted||(u.pending=!1,u.error=!0,this.failed(d instanceof Error?d.message:"地图装饰贴图加载失败"),this.changed())}),o}releaseAppearance(t){const e=this.appearances.get(t);!e||--e.refs>0||(e.controller.abort(),e.texture.dispose(),e.material.dispose(),e.canvas.width=e.canvas.height=1,this.appearances.delete(t))}sign(t){const e=wr(t.block),n=new fe;n.position.set(t.x+e.center[0],t.y+e.center[1],t.z+e.center[2]),n.rotation.y=e.angle,n.userData.entityType="sign",n.userData.position={x:t.x,y:t.y,z:t.z};const i=[];for(const[r,o]of[[t.front,!1],[t.back,!0]]){if(!r?.text.trim())continue;const a=this.textGeometry(r);if(!a)continue;const c=new Ot(a,r.glowing?this.glowingText:this.normalText);c.position.z=(o?-1:1)*(1/24+.002),o&&(c.rotation.y=Math.PI),c.renderOrder=3,c.userData.signSide=o?"back":"front",c.userData.text=r.text,n.add(c),i.push(a),this.geometries.add(a)}if(i.length)return{group:n,release:()=>{for(const r of i)r.dispose(),this.geometries.delete(r)}}}textGeometry(t){const e=[],n=[],i=[],r=[],o=.003928571428571429;if(Zl(t.text,`#${(t.color&16777215).toString(16).padStart(6,"0")}`).forEach((c,l)=>{const h=c.flatMap(_=>Array.from(_.text).map(m=>({character:m,run:_,advance:this.glyphs.advance(m,_)}))),u=h.reduce((_,m)=>_+m.advance,0),d=Math.min(o,.9/Math.max(1,u));let f=-u*d/2;const g=.165-l*.11-.03;for(const{character:_,run:m,advance:p}of h){const x=this.glyphs.glyph(_,m);if(x&&_!==" "){const S=f-5*d,y=S+this.glyphs.cell*d,T=g-8*o,A=T+this.glyphs.cell*o,P=e.length/3;e.push(S,T,0,y,T,0,y,A,0,S,A,0);const I=x.x/this.glyphs.size,E=(x.x+this.glyphs.cell)/this.glyphs.size,b=1-(x.y+this.glyphs.cell)/this.glyphs.size,L=1-x.y/this.glyphs.size;n.push(I,b,E,b,E,L,I,L);const B=new Ht(m.color);for(let k=0;k<4;k++)i.push(B.r,B.g,B.b);r.push(P,P+1,P+2,P,P+2,P+3)}f+=p*d}}),!e.length)return;const a=new ke;return a.setAttribute("position",new se(e,3)),a.setAttribute("uv",new se(n,2)),a.setAttribute("color",new se(i,3)),a.setIndex(r),a.computeVertexNormals(),a.computeBoundingSphere(),a}release(t,e){this.group.remove(e.group),e.release(),this.active.delete(t)}dispose(){if(!this.disposed){this.disposed=!0,this.clear(),this.imageController.abort();for(const t of this.images.values())t.then(e=>e.close()).catch(()=>{});this.images.clear(),this.plantMaterials.clear(),this.paletteByName.clear(),this.glyphs.dispose(),this.normalText.dispose(),this.glowingText.dispose();for(const t of this.sharedMaterials.values())t.dispose();this.sharedMaterials.clear()}}}function Z0(s,t=0){const e=i=>["wooden_pickaxe","stone_pickaxe","iron_pickaxe","diamond_pickaxe"][Math.min(3,Math.max(i,Math.floor(t)))],n=s.replace("minecraft:","");return/^(?:tallgrass|double_plant|deadbush|sapling|red_flower|yellow_flower|wheat|carrots|potatoes|beetroot|reeds|nether_wart|kelp|seagrass)$/.test(n)?"hand":/obsidian|ancient_debris/.test(n)?e(3):/diamond|emerald|gold_ore|gold_block|raw_gold_block|redstone|lapis/.test(n)?e(/lapis/.test(n)?1:2):/iron_ore|iron_block|raw_iron_block|copper_ore|copper_block|raw_copper_block/.test(n)?e(1):/stone|ore|brick|furnace|rail|anvil|terracotta|concrete|prismarine|quartz|basalt|blackstone|iron_door|iron_trapdoor|iron_bars/.test(n)?e(0):/leaves|vine|wool|web/.test(n)?"shears":/dirt|grass|sand|gravel|clay|snow|soul_soil|mycelium|podzol/.test(n)?"stone_shovel":/log|wood|plank|chest|barrel|crafting|bookshelf|fence|door|sign|pumpkin/.test(n)?"stone_axe":"hand"}function el(s){return/diamond/.test(s)?7460051:/emerald|leaves|vine|grass/.test(s)?7706195:/redstone|netherrack/.test(s)?11296849:/gold/.test(s)?13874013:/iron/.test(s)?12297618:/coal/.test(s)?4671815:/lapis|water/.test(s)?5798558:/dirt|log|wood|plank|chest|barrel/.test(s)?10583891:/sand/.test(s)?14207382:/snow|quartz|wool/.test(s)?14934227:10066321}function J0(s,t){const e=s.replace("minecraft:","");if(/glass|(?:^|_)ice$|spawner|bedrock|barrier|portal|(?:^|_)fire$|(?:^|_)water$|(?:^|_)lava$/.test(e)||/^(?:tallgrass|double_plant|seagrass)$/.test(e))return null;if(e==="deadbush")return"minecraft:stick";if(e==="carrots")return"minecraft:carrot";if(e==="potatoes")return"minecraft:potato";if(e==="wheat"||e==="beetroot"){const n=t?.states?.growth;return typeof n=="number"?`minecraft:${e}${n>=7?"":"_seeds"}`:null}return/diamond_ore/.test(e)?"minecraft:diamond":/emerald_ore/.test(e)?"minecraft:emerald":/coal_ore/.test(e)?"minecraft:coal":/redstone_ore/.test(e)?"minecraft:redstone":/lapis_ore/.test(e)?"minecraft:lapis_lazuli":e==="stone"&&(!t?.states?.stone_type||t.states.stone_type==="stone")?"minecraft:cobblestone":/grass|mycelium|podzol/.test(e)?"minecraft:dirt":s}const Q0=()=>new dn(1,1,1),ds=s=>JSON.stringify([s.name,Object.entries(s.states||{}).sort(([t],[e])=>t.localeCompare(e)),s.extra||[]]);class t_{group=new fe;box=Q0();plane=new $n(1,1);materials=new Map;itemGeometries=new Map;itemMaterials=new Map;blockMaterials=new Map;accepted=new Map;effects=[];actions=new Map;held=new Map;miningTiers=new Map;texture;atlas;maxFootprint=0;clock=0;sourceTime=NaN;sourceSpeed=1;playing=!1;emitted=0;disposed=!1;constructor(){this.group.name="memory-interactions"}configure(t,e,n=[],i=0){this.texture=t,this.atlas=e,this.maxFootprint=i,this.blockMaterials.clear(),n.forEach((r,o)=>{const a=e.paletteMaterials?.[o];a&&this.blockMaterials.set(ds(r),a)})}setReplayClock(t,e){this.sourceTime=t,this.sourceSpeed=e}synchronizeActor(t){const e=this.actions.get(t.player);if(!e)return;const n=t.actionTarget;e.current=t.actionTime===e.time&&!!n&&n.x===e.target.x&&n.y===e.target.y&&n.z===e.target.z,!e.current&&(t.actionTime!==void 0||this.sourceTime>e.time+2.5)&&this.actions.delete(t.player)}setPlaying(t){this.playing=t}get time(){return this.clock}material(t){let e=this.materials.get(t);return e||(e=new Ue({color:t}),this.materials.set(t,e)),e}cube(t,e){const n=new Ot(this.box,this.material(t));return n.scale.setScalar(e),n}item(t,e){const n=this.atlas,i=n?.inventoryItems?.[`${t}:0`]||n?.inventoryItems?.[t];if(!i||!this.texture||!n?.atlas)return this.cube(el(t),e*.7);let r=this.itemGeometries.get(t),o=this.itemMaterials.get(t);if(!r){const c=n.atlas,l=i.tile%c.columns*c.stride+c.padding,h=Math.floor(i.tile/c.columns)*c.stride+c.padding,u=(l+.15)/c.width,d=(l+c.tileSize-.15)/c.width,f=1-(h+c.tileSize-.15)/c.height,g=1-(h+.15)/c.height;r=this.plane.clone(),r.setAttribute("uv",new se([u,g,d,g,u,f,d,f],2)),this.itemGeometries.set(t,r),o=new Ue({map:this.texture,alphaTest:.45,side:Ie}),ui(o,this.texture,this.maxFootprint),this.itemMaterials.set(t,o)}const a=new Ot(r,o);return a.scale.setScalar(e),a}blockItem(t,e,n){if(!t||!this.atlas||!this.texture)return this.item(e,n);const i=this.blockMaterials.get(ds(t));if(!i)return this.item(e,n);const r=`block:${ds(t)}`;let o=this.itemGeometries.get(r),a=this.itemMaterials.get("block-atlas");if(!o&&this.itemGeometries.size<512&&(o=Ar(t,i,this.atlas),o&&(o.translate(0,-.5,0),this.itemGeometries.set(r,o))),!o)return this.item(e,n);a||(a=new Ue({map:this.texture,alphaTest:.45,side:Ie}),ui(a,this.texture,this.maxFootprint),this.itemMaterials.set("block-atlas",a));const c=new Ot(o,a);return c.scale.setScalar(n),c}chip(t,e,n){const i=t&&this.blockMaterials.get(ds(t)),r=this.atlas;if(!i||!r?.atlas||!this.texture)return this.cube(e,n);const o=`chip:${i.side}`;let a=this.itemGeometries.get(o),c=this.itemMaterials.get("block-atlas");if(!a&&this.itemGeometries.size<512){const h=r.atlas,u=i.side%h.columns*h.stride+h.padding,d=Math.floor(i.side/h.columns)*h.stride+h.padding;a=this.box.clone();const f=a.getAttribute("uv");for(let g=0;g<f.count;g++)f.setXY(g,(u+3+f.getX(g)*7)/h.width,1-(d+3+(1-f.getY(g))*7)/h.height);this.itemGeometries.set(o,a)}if(!a)return this.cube(e,n);c||(c=new Ue({map:this.texture,alphaTest:.45}),ui(c,this.texture,this.maxFootprint),this.itemMaterials.set("block-atlas",c));const l=new Ot(a,c);return l.scale.setScalar(n),l}effect(t,e,n){for(;this.effects.length>=160;){const i=this.effects.shift();this.group.remove(i.object)}this.group.add(t),this.effects.push({object:t,duration:e,age:0,update:n}),n(0,0)}show(t){if(this.disposed||!/^(?:break|place|interact|container_(?:put|take|open|close)|item_use|teleport|death|join|leaf_decay|plant_decay|crop_growth|stack_growth|soil_preparation|soil_reversion|fire_spread|fire_extinguish)$/.test(t.kind))return;const e=this.accepted.get(t.player);t.player&&e&&(t.time<e.time||t.time===e.time&&(t.order??0)<e.order)&&(t={...t,player:""});const n=this.actions.get(t.player);if(n&&n.time===t.time&&n.age<.18&&n.kind===t.kind&&Math.hypot(n.target.x-t.target.x,n.target.y-t.target.y,n.target.z-t.target.z)<.1)return;const i=t.kind==="break"?1.35:1.1,r={...t,age:0,duration:i,tool:t.kind==="break"?Z0(t.block,this.miningTiers.get(t.player)):"hand"};if(t.player&&r.tool.endsWith("_pickaxe")&&(this.miningTiers.delete(t.player),this.miningTiers.set(t.player,["wooden_pickaxe","stone_pickaxe","iron_pickaxe","diamond_pickaxe"].indexOf(r.tool)),this.miningTiers.size>256&&this.miningTiers.delete(this.miningTiers.keys().next().value)),t.player){for(this.accepted.delete(t.player),this.accepted.set(t.player,{time:t.time,order:t.order??0});this.accepted.size>256;)this.accepted.delete(this.accepted.keys().next().value);for(this.actions.set(t.player,r);this.actions.size>64;)this.actions.delete(this.actions.keys().next().value)}this.emitted++;const o=new R(t.target.x+.5,t.target.y+.5,t.target.z+.5),a=new R(t.origin.x,t.origin.y+1.05,t.origin.z),c=el(t.block);if(t.kind==="break"){for(let h=0;h<10;h++){const u=this.chip(t.blockState,/ore/.test(t.block)&&h%3?9606283:c,.08+h%3*.018),d=h*2.39996,f=.25+h%4*.085,g=o.clone().add(new R(Math.sin(d)*.28,h%3*.1,Math.cos(d)*.28));this.effect(u,.68+h%3*.08,(_,m)=>{u.position.copy(g).add(new R(Math.sin(d)*f*_,m*(1.6+h%3*.3)-3*m*m,Math.cos(d)*f*_)),u.rotation.set(_*3,d+_*4,_),u.scale.setScalar((.08+h%3*.018)*Math.min(1,(1-_)*4))})}const l=J0(t.block,t.blockState);if(l){const h=this.blockItem(l===t.block&&!/:(?:wheat|beetroot|carrots|potatoes|reeds|nether_wart)$/.test(t.block)?t.blockState:void 0,l,.32);this.effect(h,1.6,(u,d)=>{const f=t.player?Math.max(0,(u-.68)/.32):0;h.position.copy(o).add(new R(.12,Math.max(-.26,.7*d-1.4*d*d)+Math.sin(d*7)*.04,.12)).lerp(a,f*f),h.rotation.y=d*2.4,h.scale.setScalar(.32*(1-f*.7))})}}else if(t.kind==="place"){if(t.player){const l=this.blockItem(t.blockState,t.block,.32);this.effect(l,.42,h=>{l.position.copy(a).lerp(o,h),l.position.y+=Math.sin(h*Math.PI)*.25,l.rotation.y=h,l.scale.setScalar(.32*(1-h*.6))})}this.cornerCue(o,c,1.1)}else if(/interact|container_|item_use/.test(t.kind)){const l=/furnace|smoker/.test(t.block),h=/chest|barrel|shulker/.test(t.block),u=t.kind==="container_take",d=t.kind==="container_close";if(this.cornerCue(o,l?14788703:13810308,1.1),t.player&&/container_(?:put|take)/.test(t.kind))for(let f=0;f<3;f++){const g=this.cube(14670530,.12);this.effect(g,.95+f*.12,_=>{const m=Math.max(0,Math.min(1,(_-f*.06)/.82));g.position.copy(u?o:a).lerp(u?a:o,m),g.position.y+=Math.sin(m*Math.PI)*.38+.15,g.rotation.y=m*Math.PI,g.scale.setScalar(.18*Math.min(1,m*8+.2,(1-m)*8+.2))})}if(l&&/lit_furnace|lit_smoker|lit_blast_furnace/.test(t.block))for(let f=0;f<4;f++){const g=this.cube(f%2?14134116:11448483,.055);this.effect(g,1+f*.1,_=>{g.position.copy(o).add(new R(Math.sin(f*2)*.18,.6+_*.65,Math.cos(f*2)*.18)),g.scale.setScalar(.055*(1-_))})}if(h){const f=this.cube(14861697,.09);this.effect(f,.9,g=>{f.position.copy(o).add(new R(0,.42+Math.sin(g*Math.PI)*(d?-.14:.14),0)),f.scale.setScalar(.09*Math.min(1,(1-g)*5))})}}else if(/leaf_decay|plant_decay|crop_growth|stack_growth|soil_preparation|soil_reversion|fire_spread|fire_extinguish/.test(t.kind)){const l=/leaf_decay|plant_decay/.test(t.kind),h=t.kind==="fire_spread",u=/crop_growth|stack_growth/.test(t.kind),d=/soil_preparation|soil_reversion/.test(t.kind);for(let f=0;f<6;f++){const g=this.chip(t.blockState,d?8938050:l||u?7706195:h&&f%2?15642977:9606284,u?.035:l?.07:.09);this.effect(g,1.2+f*.08,(_,m)=>{g.position.copy(o).add(new R(Math.sin(f*2.4+m)*(.18+_*.22),d?-.2+_*.2:l?.2-_*.85:_*(u?.25:.9),Math.cos(f*2.4+m)*.24)),g.rotation.set(m,m*.8,f),g.scale.setScalar((u?.035:l?.07:.09)*(1-_))})}}else/teleport|death|join/.test(t.kind)&&this.cornerCue(a.clone().add(new R(0,-.7,0)),12173262,1)}cornerCue(t,e,n){for(let i=0;i<4;i++){const r=this.cube(e,.06),o=i&1?.49:-.49,a=i&2?.49:-.49;this.effect(r,n,c=>{r.position.copy(t).add(new R(o,.48+c*.14,a)),r.scale.set(.065,.13*(1-c),.065)})}}tool(t){const e=new fe;if(e.name=`held-${t}`,t==="hand")return e;const n=(r,o,a)=>{const c=this.cube(a,.078);c.position.set(r*.07,o*.07,0),c.scale.z=.055,e.add(c)};for(let r=0;r<7;r++)n(r-3,r-3,r%2?9528891:6834215);const i=t.startsWith("diamond")?6803654:t.startsWith("iron")?13882309:t.startsWith("wooden")?11831890:9606795;if(t.includes("pickaxe"))for(const[r,o]of[[-1,5],[0,5],[1,5],[2,5],[3,4],[4,3],[5,2],[5,1],[5,0]])n(r,o,i);else if(t.includes("shovel"))for(const[r,o]of[[2,4],[3,4],[4,4],[3,5],[4,5],[4,3]])n(r,o,i);else if(t==="shears")for(const[r,o]of[[-2,3],[-1,4],[0,5],[3,2],[4,1],[5,0]])n(r,o,13882309);else for(const[r,o]of[[0,4],[1,5],[2,5],[3,5],[0,3],[1,3],[2,4]])n(r,o,i);return e.position.set(0,-.52,.05),e.rotation.set(.1,Math.PI/4,-2.1),e}animateAvatar(t,e,n,i=!1,r=!1){if(this.disposed)return;const o=this.actions.get(t),a=this.clock*9,c=n||r?Math.sin(a*(r?.45:1))*(i?.65:r?.28:.5):0,l=!!o&&(o.current||o.age<o.duration),h=e.getObjectByName("arm1"),u=e.getObjectByName("arm-1"),d=e.getObjectByName("leg-1"),f=e.getObjectByName("leg1");if(!h||!u||!d||!f)return;const g=l&&o.kind==="break",_=l?Math.atan2(o.target.y+.5-e.position.y-1.3,Math.max(.6,Math.hypot(o.target.x+.5-e.position.x,o.target.z+.5-e.position.z))):0;u.rotation.x=i?-2+c:r?-.8+c:c,h.rotation.x=l?-1.2-_+Math.sin(Math.min(o.age,o.duration)*(g?17:9))*(g?.65:.16):i?-2-c:r?-.8-c:-c,u.rotation.z=r?-.55:0,h.rotation.z=r?.55:0,d.rotation.x=-c,f.rotation.x=c;const m=l?g?o.tool:o.kind==="place"?`block:${o.blockState?ds(o.blockState):o.block}`:"hand":"hand",p=this.held.get(t);if(p?.key!==m){p&&p.object.removeFromParent();const S=m.startsWith("block:")?new fe:this.tool(m);if(m.startsWith("block:")){const y=this.blockItem(o.blockState,o.block,.29);S.position.set(0,-.48,.05),S.add(y)}h.add(S),this.held.set(t,{key:m,object:S})}const x=e.getObjectByName("head");x&&(x.rotation.x=l?-_*.6:0)}forgetPlayer(t){this.held.get(t)?.object.removeFromParent(),this.held.delete(t)}targetFor(t){return this.actions.get(t)?.target}update(t){if(this.disposed||!this.playing)return!1;this.clock+=t;const e=this.effects.length>0||this.actions.size>0;for(const[n,i]of this.actions)i.age+=t,i.age>i.duration&&!i.current&&this.actions.delete(n);for(let n=this.effects.length-1;n>=0;n--){const i=this.effects[n];i.age+=t,i.age>=i.duration?(this.group.remove(i.object),this.effects.splice(n,1)):i.update(i.age/i.duration,i.age)}return e}reset(){this.group.clear(),this.effects.length=0,this.actions.clear(),this.accepted.clear(),this.miningTiers.clear();for(const t of this.held.keys())this.forgetPlayer(t);this.clock=0}diagnostics(){return{effects:this.effects.length,actions:this.actions.size,heldPlayers:this.held.size,rememberedTools:this.miningTiers.size,cachedItems:this.itemGeometries.size,cachedMaterials:this.materials.size+this.itemMaterials.size,emitted:this.emitted,presentationTime:this.clock,sourceTime:this.sourceTime,sourceSpeed:this.sourceSpeed,kinds:[...this.actions.values()].map(t=>t.kind),active:[...this.actions.values()].map(({player:t,kind:e,block:n,blockState:i,target:r,time:o,age:a})=>({player:t,kind:e,block:n,blockState:i,target:r,time:o,age:a})),tools:[...this.held].filter(([,t])=>t.key!=="hand").map(([t,e])=>({player:t,tool:e.key}))}}dispose(){if(!this.disposed){this.disposed=!0,this.playing=!1,this.reset(),this.group.removeFromParent(),this.box.dispose(),this.plane.dispose();for(const t of this.itemGeometries.values())t.dispose();for(const t of[...this.materials.values(),...this.itemMaterials.values()])t.dispose();this.itemGeometries.clear(),this.materials.clear(),this.itemMaterials.clear(),this.blockMaterials.clear(),this.accepted.clear(),this.texture=void 0,this.atlas=void 0}}}function e_(s,t,e){const n=Math.atan2(Math.sin(t-s),Math.cos(t-s));return s+Math.max(-8*e,Math.min(8*e,n))}function n_(s,t,e){return!!s?.online&&s.actionTime===t&&!!s.actionTarget&&s.actionTarget.x===e.x&&s.actionTarget.y===e.y&&s.actionTarget.z===e.z&&Math.hypot(s.x-e.x-.5,s.z-e.z-.5)<=6&&Math.abs(s.y-e.y)<=8}function i_(s){const t=s;if(t?.version!==1||!Array.isArray(t.generators)||t.generators.length>4096)return[];const e=new Map;for(const n of t.generators){if(!Array.isArray(n)||n.length!==7||n[0]!==0||!n.every(Number.isSafeInteger))return[];if(n.slice(1).some(i=>Math.abs(i)>3e7)||Math.hypot(n[1]-n[4],n[2]-n[5],n[3]-n[6])>16)return[];e.set(n.slice(0,4).join(","),n)}return[...e.values()]}class s_{group=new fe;geometry;material;block;drop;chips;active;elapsed=0;disposed=!1;constructor(t,e,n=0){const i={name:"minecraft:cobblestone",states:{}},r=e.materials[i.name]||e.materials.cobblestone||{top:0,side:0,bottom:0};this.geometry=Ar(i,r,e)||new dn(1,1,1).translate(0,.5,0),this.geometry.translate(0,-.5,0),this.material=new Ue({map:t}),ui(this.material,t,n),this.block=new Ot(this.geometry,this.material),this.block.scale.setScalar(.985),this.drop=new Ot(this.geometry,this.material),this.drop.scale.setScalar(.24),this.chips=Array.from({length:8},()=>{const o=new Ot(this.geometry,this.material);return o.scale.setScalar(.085),o}),this.group.name="island-generator-preview",this.group.add(this.block,this.drop,...this.chips),this.group.visible=!1}start(t){this.disposed||(this.active=t,this.elapsed=0,this.group.visible=!0,this.update(0))}stop(){const t=this.group.visible;return this.active=void 0,this.group.visible=!1,this.elapsed=0,t}get running(){return!!this.active}update(t){if(!this.active||this.disposed)return!1;if(this.elapsed+=Number.isFinite(t)?Math.max(0,t):0,this.elapsed>=6)return this.stop(),!0;const[,e,n,i,r,o,a]=this.active,c=this.elapsed%2;this.block.position.set(e+.5,n+.5,i+.5),this.block.visible=c<.65,this.drop.visible=c>=.65&&c<1.7;const l=Math.min(1,Math.max(0,(c-.65)/1.05)),h=Math.min(e,r)-.65,u=Math.min(1,l/.25),d=Math.max(0,Math.min(1,(l-.25)/.5)),f=Math.max(0,(l-.75)/.25);this.drop.position.set(e+.5+(h-e-.5)*u+(r+.5-h)*f,n+.5+(o-n)*d+Math.sin(l*Math.PI)*.3,i+.5+(a-i)*d),this.drop.rotation.set(.15,this.elapsed*2.4,.1);for(let g=0;g<this.chips.length;g++){const _=this.chips[g],m=c-.65,p=g*2.4;_.visible=m>=0&&m<.55,_.position.set(e+.5+Math.sin(p)*m*.8,n+.5+m*1.5-m*m*3,i+.5+Math.cos(p)*m*.8),_.rotation.set(m*3,p,m*2)}return!0}diagnostics(){return{running:this.running,elapsed:this.elapsed,objects:this.group.children.length,source:this.active?.slice(1,4),output:this.active?.slice(4)}}dispose(){this.disposed||(this.stop(),this.disposed=!0,this.group.removeFromParent(),this.geometry.dispose(),this.material.dispose())}}function r_(s,t,e){if(e!=="overworld")return;let n,i=14;for(const r of s){const o=Math.hypot(t.x-r[1]-.5,(t.y-r[2]-.5)*.5,t.z-r[3]-.5);o<i&&(n=r,i=o)}return n}function o_(s,t,e,n,i,r=new Set,o,a=new Set,c=!1){const l=(p,x,S)=>(i.set(p,x),i.near=0,i.far=S,i.intersectObjects(n,!0)),h=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1)],u=p=>{const x=p.uv,S=o?.atlas;return x&&S?Math.floor(x.x*S.width/S.stride)+Math.floor((1-x.y)*S.height/S.stride)*S.columns:-1},d=p=>p.object instanceof Ot&&!r.has(u(p));if(c&&(p=>!l(new R(s,p+.07,e),new R(0,1,0),1.74).some(d)&&![.3,1.45].some(x=>h.some(S=>l(new R(s,p+x,e),S,.27).some(d))))(t))return{x:s,y:t,z:e,swimming:!0};const g=a.size>0&&h.some(p=>{const x=l(new R(s,t+.85,e),p,.78).find(d);return x&&a.has(u(x))}),_=l(new R(s,t+1.35,e),new R(0,-1,0),7.35).filter(p=>(p.face?.normal.y||0)>.5&&d(p)).sort((p,x)=>x.point.y-p.point.y);let m=null;for(const p of _){const x=p.point.y+.015;if(!(x-t>1.36||t-x>6.05||l(new R(s,x+.07,e),new R(0,1,0),1.74).some(d)||[.3,1.45].some(y=>h.some(T=>l(new R(s,x+y,e),T,.27).some(d))))){m={x:s,y:x,z:e,...g?{climbing:!0}:{}};break}}return g&&(!m||Math.abs(m.y-t)>1.1)&&!l(new R(s,t+.07,e),new R(0,1,0),1.74).some(d)&&(m={x:s,y:t,z:e,climbing:!0}),m}function a_(...s){const t=new Map;for(const e of s[3])e.traverse(n=>{if(n instanceof Ot)for(const i of Array.isArray(n.material)?n.material:[n.material])t.has(i)||(t.set(i,i.side),i.side=Ie)});try{return o_(...s)}finally{for(const[e,n]of t)e.side=n}}const be=4,Rr=new WeakMap,Vl=(s,t,e)=>`${s},${t},${e}`;function c_(s){const t=Rr.get(s);if(t)return t;const e=new Map,n=s.geometry,i=n.getAttribute("position"),r=n.getIndex();if(!r)return{source:s,buckets:e};for(let a=0;a<r.count;a+=3){const c=r.getX(a),l=r.getX(a+1),h=r.getX(a+2),u=Math.floor(Math.min(i.getX(c),i.getX(l),i.getX(h))/be),d=Math.floor(Math.min(i.getY(c),i.getY(l),i.getY(h))/be),f=Math.floor(Math.min(i.getZ(c),i.getZ(l),i.getZ(h))/be),g=Math.floor(Math.max(i.getX(c),i.getX(l),i.getX(h))/be),_=Math.floor(Math.max(i.getY(c),i.getY(l),i.getY(h))/be),m=Math.floor(Math.max(i.getZ(c),i.getZ(l),i.getZ(h))/be);for(let p=u;p<=g;p++)for(let x=d;x<=_;x++)for(let S=f;S<=m;S++){const y=Vl(p,x,S);let T=e.get(y);T||(T={indices:[]},e.set(y,T)),T.indices.push(c,l,h)}}const o={source:s,buckets:e};return Rr.set(s,o),o}function l_(s,t,e,n){return xr(s,new Be(new R(t-.85,e-6.1,n-.85),new R(t+.85,e+3.2,n+.85)))}function xr(s,t){const e=[];for(const n of s)n.traverse(i=>{if(!(i instanceof Ot))return;const r=i,o=r.geometry;if(o.boundingBox||o.computeBoundingBox(),!o.boundingBox.clone().applyMatrix4(r.matrixWorld).intersectsBox(t))return;const c=c_(r),l=t.clone().applyMatrix4(r.matrixWorld.clone().invert());for(let h=Math.floor(l.min.x/be);h<=Math.floor(l.max.x/be);h++)for(let u=Math.floor(l.min.y/be);u<=Math.floor(l.max.y/be);u++)for(let d=Math.floor(l.min.z/be);d<=Math.floor(l.max.z/be);d++){const f=c.buckets.get(Vl(h,u,d));if(f){if(!f.mesh){const g=new ke;for(const[_,m]of Object.entries(o.attributes))g.setAttribute(_,m);g.setIndex(f.indices),f.indices=[],g.boundingBox=new Be(new R(h*be,u*be,d*be),new R((h+1)*be,(u+1)*be,(d+1)*be)),g.boundingSphere=g.boundingBox.getBoundingSphere(new gi),f.mesh=new Ot(g,r.material),f.mesh.matrixAutoUpdate=!1}f.mesh.matrixWorld.copy(r.matrixWorld),e.push(f.mesh)}}});return e}function h_(s){const t=Rr.get(s);if(t){for(const e of t.buckets.values())e.mesh?.geometry.dispose();Rr.delete(s)}}function nl(s,t,e){const n=(s||e).clone();if(s&&t&&t.lengthSq()>1e-12&&e.lengthSq()>1e-12&&e.distanceToSquared(t)>1e-8){const r=new _s().setFromVector3(s),o=new _s().setFromVector3(t),a=new _s().setFromVector3(e);r.theta+=Math.atan2(Math.sin(a.theta-o.theta),Math.cos(a.theta-o.theta)),r.phi=an.clamp(r.phi+a.phi-o.phi,1e-6,Math.PI-1e-6),r.radius*=a.radius/o.radius,n.setFromSpherical(r)}if(n.lengthSq()<1e-12)return new R(0,0,.35);const i=n.length();return i<.35||i>180?n.setLength(an.clamp(i,.35,180)):n}function u_(s,t){return s.clone()}function d_(s,t,e,n,i){const r=t.length();if(!e.length||r<1e-8)return t.clone();const o=t.clone().normalize(),a=new R().crossVectors(o,new R(0,1,0));a.lengthSq()<1e-8?a.set(1,0,0):a.normalize();const c=new R().crossVectors(a,o).normalize(),l=.08*Math.tan(Math.PI/6)+.02,h=.08*Math.tan(Math.PI/6)*Math.max(.3,i?.aspect??1.6)+.02;let u=r;for(const d of[-1,0,1])for(const f of[-1,0,1]){const g=s.clone().addScaledVector(a,d*h).addScaledVector(c,f*l);n.set(g,o),n.near=.01,n.far=u+.22;const _=n.intersectObjects(e,!1)[0];_&&(u=Math.max(.08,Math.min(u,_.distance-.22)))}return u<r?t.clone().setLength(u):t.clone()}function f_(s,t,e,n){if(t===void 0||s<=t)return s;const i=Math.min(Math.max(0,e),Math.max(0,n-.18)),r=t+(s-t)*(1-Math.exp(-i/.2));return s-r<.001?s:r}const il={chest:27,trapped_chest:27,ender_chest:27,barrel:27,furnace:3,blast_furnace:3,smoker:3,hopper:5,dispenser:9,dropper:9,brewing_stand:5,shulker_box:27},Qt=s=>{throw new Error(`容器数据无效：${s}`)},Xn=(s,t,e)=>{if(!s||typeof s!="object"||Array.isArray(s))return Qt(e);const n=s;return Object.keys(n).some(i=>!t.includes(i))?Qt(`${e}包含未支持的字段`):n},Ee=(s,t,e,n)=>Number.isInteger(s)&&s>=t&&s<=e?s:Qt(n),ys=(s,t,e)=>typeof s=="string"&&s.length<=t?s:Qt(e),So=(s,t)=>s===void 0?void 0:typeof s=="boolean"?s:Qt(t);function Wl(s){const t=Xn(s,["name","states"],"方块"),e=ys(t.name,128,"方块名称");if(!/^[a-z0-9_.-]+:[A-Za-z0-9_.-]+$/.test(e))return Qt("方块标识");if(t.states!==void 0){if(!t.states||typeof t.states!="object"||Array.isArray(t.states)||Object.keys(t.states).length>32)return Qt("方块状态");for(const[n,i]of Object.entries(t.states))if(n.length>128||!(typeof i=="boolean"||typeof i=="string"&&i.length<=128||typeof i=="number"&&Number.isFinite(i)))return Qt("方块状态值")}return{name:e,...t.states===void 0?{}:{states:t.states}}}function p_(s,t){const e=Xn(s,["slot","name","count","damage","durabilityDamage","color","bannerType","bannerPatterns","block","customName","enchantments"],"物品"),n=ys(e.name,128,"物品名称");if(!/^[a-z0-9_.-]+:[a-z0-9_.-]+$/.test(n))return Qt("物品标识");const i={slot:Ee(e.slot,0,t-1,"物品槽位"),name:n,count:Ee(e.count,1,255,"物品数量"),damage:Ee(e.damage,0,65535,"物品状态")};if(e.durabilityDamage!==void 0&&(i.durabilityDamage=Ee(e.durabilityDamage,0,65535,"物品耐久")),e.color!==void 0){if(!/^minecraft:leather_(helmet|chestplate|leggings|boots)$/.test(n)&&!["minecraft:fireworkscharge","minecraft:firework_star","minecraft:horsearmorleather","minecraft:leather_horse_armor"].includes(n))return Qt("物品染色类型");i.color=Ee(e.color,0,4294967295,"物品颜色")}if(e.bannerType!==void 0){if(n!=="minecraft:banner")return Qt("旗帜类型");i.bannerType=Ee(e.bannerType,0,1,"旗帜类型")}if(e.bannerPatterns!==void 0){if(n!=="minecraft:banner"||!Array.isArray(e.bannerPatterns)||e.bannerPatterns.length>32)return Qt("旗帜纹样");i.bannerPatterns=e.bannerPatterns.map(r=>{const o=Xn(r,["color","pattern"],"旗帜纹样"),a=ys(o.pattern,32,"旗帜纹样标识");return/^[a-z0-9_]+$/.test(a)?{color:Ee(o.color,0,15,"旗帜纹样染料"),pattern:a}:Qt("旗帜纹样标识")})}if(e.block!==void 0&&(i.block=Wl(e.block)),e.customName!==void 0&&(i.customName=ys(e.customName,1024,"物品名称文字")),e.enchantments!==void 0){if(!Array.isArray(e.enchantments)||e.enchantments.length>128)return Qt("物品附魔");i.enchantments=e.enchantments.map(r=>{const o=Xn(r,["id","level"],"附魔");return{id:Ee(o.id,0,65535,"附魔ID"),level:Ee(o.level,-32768,32767,"附魔等级")}})}return i}function m_(s,t){Ee(t.x,-33554432,33554431,"区域X"),Ee(t.z,-33554432,33554431,"区域Z"),Ee(t.count,0,65536,"区域容器数量");const e=Xn(s,["version","containers"],"容器文件");if(e.version!==1||!Array.isArray(e.containers)||e.containers.length!==t.count)return Qt("容器文件版本或数量");const n=new Set;return e.containers.map(i=>{const r=Xn(i,["type","x","y","z","block","capacity","slots","customName","pair","pairLead","forceUnpair","inaccessible","unresolvedLoot","progress"],"容器");if(typeof r.type!="string"||!Object.hasOwn(il,r.type))return Qt("容器类型");const o=r.type,a=il[o],c=Wl(r.block);if(sl(c.name)!==o||r.capacity!==a)return Qt("容器方块或容量");const l=Ee(r.x,t.x*64,t.x*64+63,"容器X"),h=Ee(r.y,-2048,2047,"容器Y"),u=Ee(r.z,t.z*64,t.z*64+63,"容器Z"),d=bo({x:l,y:h,z:u});if(n.has(d))return Qt("重复容器位置");if(n.add(d),!Array.isArray(r.slots)||r.slots.length>a)return Qt("容器物品槽位");const f=r.slots.map(_=>p_(_,a));if(new Set(f.map(_=>_.slot)).size!==f.length)return Qt("重复物品槽位");const g={type:o,x:l,y:h,z:u,block:c,capacity:a,slots:f};if(r.customName!==void 0&&(g.customName=ys(r.customName,1024,"容器名称")),r.pair!==void 0){if(o!=="chest"&&o!=="trapped_chest")return Qt("非箱子的配对");const _=Xn(r.pair,["x","z"],"箱子配对");if(g.pair={x:Ee(_.x,l-1,l+1,"配对X"),z:Ee(_.z,u-1,u+1,"配对Z")},Math.abs(g.pair.x-l)+Math.abs(g.pair.z-u)!==1)return Qt("箱子配对距离")}if(r.pairLead!==void 0&&(g.pairLead=So(r.pairLead,"配对主箱")),r.forceUnpair!==void 0&&(g.forceUnpair=So(r.forceUnpair,"独立箱子")),r.inaccessible!==void 0){if(o!=="ender_chest"||r.inaccessible!=="player_inventory"||f.length)return Qt("个人末影库存");g.inaccessible="player_inventory"}if(o==="ender_chest"&&(!g.inaccessible||f.length))return Qt("末影库存不可公开");if(r.unresolvedLoot!==void 0){if(!["chest","trapped_chest","dispenser"].includes(o))return Qt("战利品容器类型");if(g.unresolvedLoot=So(r.unresolvedLoot,"待生成战利品"),g.unresolvedLoot&&f.length)return Qt("未生成战利品与已存物品冲突")}if(r.progress!==void 0){const _=Xn(r.progress,["burnTime","burnDuration","cookTime","fuelAmount","fuelTotal"],"容器进度");if(!["furnace","blast_furnace","smoker","brewing_stand"].includes(o))return Qt("容器进度类型");g.progress=Object.fromEntries(Object.entries(_).map(([m,p])=>[m,Ee(p,0,2e4,"容器进度值")]))}return g})}async function g_(s,t,e){if(!/^([a-z0-9_-]+\/)?containers\/-?\d+_-?\d+\.json\.gz$/.test(s.file)||s.file.split("/").some(i=>i===".."))throw new Error("容器数据文件路径无效");const n=await fetch(e.worldUrl(s.file),{signal:t});if(!n.ok)throw new Error(`容器读取失败（${n.status}），请重试`);return m_(await e.readJson(n),s)}function __(s,t,e,n){const i=Math.floor(e/16),r=s?.find(c=>c[0]===i)?.[1];if(!r)return!1;const o=c=>(Math.floor(c)%16+16)%16,a=o(t)*256+o(n)*16+o(e);return!!(r[a>>3]&1<<(a&7))}const Le=(s,t)=>`${s},${t}`,on=(s,t)=>`${s},${t}`,Tn=s=>({x:s.x,y:s.y,z:s.z}),fr=s=>{let t=0;for(let e=s;e;e&=e-1)t++;return t};class x_{ready;host;callbacks;manifest;renderer;scene=new Iu;camera=new Qe(60,1,.08,800);controls;worker;resizeObserver;meshes=new Map;dirtyMeshes=new Set;regions=new Map;regionIndex=new Map;entityRegionIndex=new Map;entityRenderer;savedEntityRegions=new Map;savedEntities;signFont;desired=new Map;streamingDesired=new Map;streamingCenter="";memoryPreloadCenters=[];memoryPreloadSignature="";dimension;opaqueMaterial;transparentMaterial;atlasTexture;mode="orbit";distance=matchMedia("(pointer: coarse)").matches?3:4;generation=0;initialized=!1;active=!0;disposed=!1;bytes=0;loading=0;pendingMesh;pendingMemoryRevision;memorySource;memoryTime=1/0;memoryRevision=0;memoryAcknowledgedRevision=-1;memoryCallbacks={};memoryPlayers=new Map;memoryPlayerMaterial=new Ue({color:15777122});memoryPlayerGeometry=new dn(1,1,1);memorySkinMaterial=new Ue({color:13938564});memoryPantsMaterial=new Ue({color:4215630});memoryInteractions=new t_;memoryPoses=new Map;memoryGroundCache=new Map;memoryInteractionLookups=new Map;memoryGroundRaycaster=new Mc;memoryClimbTiles=new Set;memoryPassableTiles=new Set;memoryAtlas;memoryEffectsGeneration=0;memoryEventOrder=0;memoryReplayClock=NaN;memoryPoseReset=!0;memoryPlaying=!1;islandGenerators=[];islandMechanism;islandMechanismPrompt;islandMechanismButton;islandMechanismCaption;islandMechanismNearby;memoryCameraKey="";memoryCameraOffset;memoryCameraTarget;memoryRequestedOffset;memoryAppliedOffset;memoryPanOffset=new R;memoryCameraFrame=0;memoryCameraClearSince;memoryCameraSafeDistance;orbitUserAdjusted=!1;memoryFollow;memoryEstimated=0;memoryLoadedRegions=0;memoryInspectionId=0;memoryInspections=new Map;animation=0;lastFrame=0;lastStream=0;lastPosition=0;lastStatus="";yaw=0;pitch=0;touchMove=new R;keys=new Set;dragging;disposers=[];initController=new AbortController;workerReady;workerFailure;totalChunks=0;renderDirty=!0;framesRendered=0;renderedPosition=new R(1/0,1/0,1/0);renderedQuaternion=new Ln;containerCallbacks={};containerState={status:"closed"};containerTarget=null;containerController;containerRequestId=0;containerRequests=0;containerRecords=new Map;containerAssets;containerPicking=!1;containerPreparing=!1;containerPrepareRevision=0;containerRetryScreen;containerPickRevision=0;containerTargetChecked=0;containerRaycaster=new Mc;containerOutline=new Hu(new Vu(new dn(1,1,1)),new wl({color:0,transparent:!0,opacity:.45,depthWrite:!1,fog:!1}));hudVisible=!0;containerTargetPosition=new R(1/0,1/0,1/0);containerTargetQuaternion=new Ln;containerPointers=new Set;containerGesture;constructor(t,e,n={}){if(this.host=t,this.manifest=e,this.callbacks=n,!e.dimensions.length)throw new Error("地图没有可浏览的维度");this.dimension=e.dimensions.find(r=>r.id==="overworld")||e.dimensions[0],this.renderer=new zg({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.worker=new Worker(new URL(""+new URL("mesh-worker-DAG_1PFU.js",import.meta.url).href,import.meta.url),{type:"module"}),this.renderer.outputColorSpace=ge,this.renderer.setClearColor(12506847),this.renderer.domElement.className="world-canvas",this.renderer.domElement.setAttribute("aria-label",`${e.worldName||e.name||"老母猪村"}三维地图，拖动旋转视角，滚轮缩放`),this.renderer.domElement.tabIndex=0,this.renderer.domElement.style.touchAction="none",t.append(this.renderer.domElement),this.containerOutline.visible=!1,this.scene.add(this.containerOutline),this.scene.add(this.memoryInteractions.group),this.scene.fog=new gs(12506847,50,115),this.scene.add(new Qu(16777215,1.6));const i=new Ju(16774624,1.3);i.position.set(-80,150,65),this.scene.add(i),this.controls=new Gg(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.09,this.controls.minDistance=2,this.controls.maxDistance=180,this.controls.maxPolarAngle=Math.PI*.94,this.controls.zoomSpeed=.75,this.controls.panSpeed=.7,this.controls.target.set(this.dimension.spawn.x,this.dimension.spawn.y,this.dimension.spawn.z),this.camera.position.set(this.dimension.spawn.x+38,this.dimension.spawn.y+38,this.dimension.spawn.z+48),this.camera.lookAt(this.controls.target),this.controls.update(),this.reindex(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.resize(),this.bindInput(),this.worker.onmessage=r=>this.onWorker(r.data),this.worker.onerror=r=>{this.workerFailure?.(new Error(r.message||"地图处理线程发生错误")),this.callbacks.onError?.("地图处理线程发生错误，请重新打开地图")},this.ready=this.initialize(),this.animation=requestAnimationFrame(r=>this.frame(r))}async initialize(){try{const t=this.initController.signal,[e,n]=await Promise.all([fetch(zn(this.manifest.palette||"palette.json"),{signal:t}),fetch(oi("textures/materials.json.gz"),{signal:t}).then(_=>_.ok?_:fetch(oi("textures/materials.json"),{signal:t}))]);if(!e.ok||!n.ok)throw new Error("地图索引或材质加载失败");const i=xi(e),r=xi(n),[o,a,c,l]=await Promise.all([i,r,this.loadSignFont(t),this.manifest.entityModels?fetch(oi(this.manifest.entityModels.file),{signal:t}).then(_=>xi(_)).then(q0):void 0]);if(!Array.isArray(o)||!a.materials)throw new Error("地图材质格式无效");if(a.paletteLength!==void 0&&a.paletteLength!==o.length||a.paletteMaterials!==void 0&&(!Array.isArray(a.paletteMaterials)||a.paletteMaterials.length!==o.length))throw new Error("地图索引与材质版本不一致，请重新加载地图");const h=a.atlas?.image||a.image||"textures/atlas.png";this.containerAssets={atlas:a,imageUrl:oi(h)};const u=await new ju().setCrossOrigin("anonymous").loadAsync(oi(h));if(this.disposed){u.dispose();return}const d=Math.min(this.renderer.capabilities.getMaxAnisotropy(),matchMedia("(pointer: coarse)").matches?4:8),f=t0(u,a,this.renderer.capabilities.maxTextureSize,d),g=f.texture;if(g!==u&&u.dispose(),this.atlasTexture=g,this.memoryAtlas=f.atlas,this.memoryInteractions.configure(g,f.atlas,o,f.maxFootprint),this.manifest.mechanisms?.version===1){const _=await fetch(zn(this.manifest.mechanisms.file),{signal:t}).then(async m=>m.ok?i_(await xi(m)):[]).catch(()=>[]);if(this.disposed)return;if(this.islandGenerators=_,_.length){this.islandMechanism=new s_(g,f.atlas,f.maxFootprint),this.scene.add(this.islandMechanism.group);const m=document.createElement("div");m.className="island-machine-preview",m.hidden=!0;const p=document.createElement("button");p.type="button",p.textContent="看看刷石机",p.setAttribute("aria-pressed","false");const x=document.createElement("p");x.textContent="水与岩浆相遇，圆石收进料箱",x.hidden=!0,p.addEventListener("click",()=>{p.getAttribute("aria-pressed")==="true"?this.stopIslandMechanism():this.islandMechanismNearby&&!this.memorySource&&this.active&&(this.frameIslandMechanism(this.islandMechanismNearby),this.islandMechanism?.start(this.islandMechanismNearby)),this.renderDirty=!0,this.updateIslandMechanismPrompt()}),m.append(p,x),this.host.append(m),this.islandMechanismPrompt=m,this.islandMechanismButton=p,this.islandMechanismCaption=x}}for(const[_,m]of Object.entries(f.atlas.materials))if(/ladder|vine/.test(_))for(const p of[m.top,m.side,m.bottom,...Object.values(m.faces||{})])p!==void 0&&this.memoryClimbTiles.add(p);for(const[_,m]of Object.entries(f.atlas.materials))if(/(?:^|:)(?:(?:flowing_)?(?:water|lava)|bubble_column|tallgrass|double_plant|red_flower|yellow_flower|deadbush|fire|soul_fire|torch|redstone_torch|unlit_redstone_torch|rail|powered_rail|detector_rail|activator_rail|redstone_wire)$/.test(_))for(const p of[m.top,m.side,m.bottom,...Object.values(m.faces||{})])p!==void 0&&this.memoryPassableTiles.add(p);if(this.opaqueMaterial=new Ue({map:g,vertexColors:!0,alphaTest:.45,alphaToCoverage:!0}),this.transparentMaterial=new Ue({map:g,vertexColors:!0,transparent:!0,opacity:.72,alphaTest:.02,depthWrite:!1}),ui(this.opaqueMaterial,g,f.maxFootprint),ui(this.transparentMaterial,g,f.maxFootprint),this.entityRenderer=new K0({image:g.image,texture:g,atlas:f.atlas,maxFootprint:f.maxFootprint,palette:o,fontFamily:c,maxTextureSize:this.renderer.capabilities.maxTextureSize},()=>{this.renderDirty=!0},_=>this.callbacks.onError?.(_)),this.scene.add(this.entityRenderer.group),l&&(this.savedEntities=new W0(l,{texture:g,atlas:f.atlas,palette:o,fontFamily:c},()=>{this.renderDirty=!0},_=>this.callbacks.onError?.(_)),this.scene.add(this.savedEntities.group)),await new Promise((_,m)=>{this.workerReady=_,this.workerFailure=m,this.post({type:"init",palette:o,atlas:f.atlas})}),this.disposed)return;this.initialized=!0,this.renderDirty=!0,this.updateStreaming(!0)}catch(t){if(this.disposed||t instanceof DOMException&&t.name==="AbortError")return;const e=t instanceof Error?t.message:String(t);throw this.callbacks.onError?.(e),t}}post(t,e=[]){this.worker.postMessage(t,e)}async loadSignFont(t){const e='"Microsoft YaHei","PingFang SC","Noto Sans CJK SC",sans-serif',n=this.manifest.blockEntityFont;if(!n)return e;const i=await fetch(zn(n.file),{signal:t});if(!i.ok)throw new Error(`告示牌字体加载失败（${i.status}）`);const r=await i.arrayBuffer(),o=await new FontFace(n.family,r).load();return this.disposed||t.aborted?e:(document.fonts.add(o),this.signFont=o,`${JSON.stringify(n.family)},${e}`)}reindex(){this.regionIndex.clear(),this.entityRegionIndex.clear(),this.savedEntityRegions.clear(),this.totalChunks=0;for(const r of this.dimension.regions)this.regionIndex.set(on(r.x,r.z),r),this.totalChunks+=fr(r.chunks);const t=[...this.memorySource?.manifest.regions||[],...this.memorySource?.manifest.repairs?.regions||[]];for(const r of t){if(r.dimension!==this.dimension.id)continue;const o=on(r.x,r.z),a=this.regionIndex.get(o);this.regionIndex.set(o,a?{...a,chunks:65535}:{x:r.x,z:r.z,file:"",bytes:0,chunks:65535}),this.totalChunks+=16-fr(a?.chunks||0)}for(const r of this.dimension.blockEntities?.regions||[])this.entityRegionIndex.set(on(r.x,r.z),r);for(const r of this.dimension.entities?.regions||[]){const o=on(r.x,r.z),a=this.regionIndex.get(o),c=(a?.chunks||0)|(r.chunks??65535);this.savedEntityRegions.set(o,r),this.regionIndex.set(o,a?{...a,chunks:c}:{x:r.x,z:r.z,file:"",bytes:0,chunks:c}),this.totalChunks+=fr(c)-fr(a?.chunks||0)}const e=this.dimension.dimension===1||this.dimension.id==="nether",n=this.dimension.dimension===2||this.dimension.id==="end",i=e?4007207:n?2370359:12506847;this.renderer.setClearColor(i),this.scene.fog=new gs(i,this.distance*12,this.distance*16+18),this.renderDirty=!0}resize(){const t=Math.max(1,this.host.clientWidth),e=Math.max(1,this.host.clientHeight),n=eh(t,e);this.renderer.getPixelRatio()!==n&&this.renderer.setPixelRatio(n),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderDirty=!0}bindInput(){const t=this.renderer.domElement,e=()=>{this.orbitUserAdjusted=!0,this.memoryFollow||(this.memoryRequestedOffset=void 0,this.memoryPanOffset.set(0,0,0))};this.controls.addEventListener("start",e),this.disposers.push(()=>this.controls.removeEventListener("start",e));const n=o=>this.mode==="fly"&&o.button===2&&o.pointerType==="mouse",i=(o,a,c,l)=>{o.addEventListener(a,c,l),this.disposers.push(()=>o.removeEventListener(a,c,l))};i(window,"keydown",o=>{const a=o.target;if(o.code==="Escape"&&this.containerPreparing){o.preventDefault(),this.closeContainer();return}if(!(!this.active||this.containerState.status!=="closed"||this.containerPreparing||this.mode!=="fly"||a.matches('input,textarea,select,[contenteditable="true"]'))){if(o.code==="KeyE"){o.preventDefault(),o.repeat||this.openTargetContainer();return}["KeyW","KeyA","KeyS","KeyD","KeyQ","Space","ShiftLeft","ShiftRight","ControlLeft","ControlRight","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(o.code)&&(o.preventDefault(),this.keys.add(o.code))}}),i(window,"keyup",o=>this.keys.delete(o.code)),i(window,"blur",()=>{this.keys.clear(),this.touchMove.set(0,0,0),this.dragging=void 0,this.containerGesture=void 0,this.containerPointers.clear()}),i(t,"pointerdown",o=>{!this.active||this.containerState.status!=="closed"||this.containerPreparing||(this.containerPointers.add(o.pointerId),this.containerPointers.size>1&&this.containerGesture&&(this.containerGesture.invalid=!0),(o.button===0||o.button===2)&&!this.containerGesture&&(this.containerGesture={id:o.pointerId,button:o.button,x:o.clientX,y:o.clientY,time:performance.now(),moved:!1,invalid:this.containerPointers.size!==1||!n(o)&&(this.keys.size>0||this.touchMove.lengthSq()>0)}),!(this.mode!=="fly"||o.button!==0||document.pointerLockElement===t)&&(this.dragging||(this.dragging={id:o.pointerId,x:o.clientX,y:o.clientY},t.setPointerCapture(o.pointerId),t.focus({preventScroll:!0}))))}),i(t,"pointermove",o=>{const a=this.containerGesture;a?.id===o.pointerId&&!(this.mode==="fly"&&a.button===2&&o.pointerType==="mouse")&&(Math.hypot(o.clientX-a.x,o.clientY-a.y)>(o.pointerType==="touch"?8:4)||document.pointerLockElement===t&&Math.hypot(o.movementX,o.movementY)>1)&&(a.moved=!0),!(!this.active||this.containerState.status!=="closed"||this.containerPreparing||this.mode!=="fly")&&(document.pointerLockElement===t?this.look(o.movementX,o.movementY):this.dragging?.id===o.pointerId&&(this.look(o.clientX-this.dragging.x,o.clientY-this.dragging.y),this.dragging.x=o.clientX,this.dragging.y=o.clientY))});const r=o=>{this.dragging?.id===o.pointerId&&(this.dragging=void 0),this.containerPointers.delete(o.pointerId);const a=this.containerGesture;a?.id===o.pointerId&&(this.containerGesture=void 0,!(o.type!=="pointerup"||!this.active||this.containerState.status!=="closed"||a.invalid||a.moved||this.containerPointers.size||!n(o)&&(this.keys.size||this.touchMove.lengthSq())||performance.now()-a.time>650)&&this.openContainerAt(document.pointerLockElement===t?void 0:{x:o.clientX,y:o.clientY}))};i(t,"pointerup",r),i(t,"pointercancel",r),i(t,"dblclick",o=>{this.active&&this.containerState.status==="closed"&&!this.containerPreparing&&this.mode==="fly"&&(o.preventDefault(),this.requestPointerLock())}),i(t,"wheel",o=>{this.active&&this.containerState.status==="closed"&&!this.containerPreparing&&this.mode==="fly"&&(o.preventDefault(),this.zoom(o.deltaY<0?1.25:.8))},{passive:!1}),i(t,"contextmenu",o=>{this.active&&o.preventDefault()}),i(document,"pointerlockchange",()=>{document.pointerLockElement!==t&&(this.keys.clear(),this.touchMove.set(0,0,0),this.dragging=void 0,this.containerGesture=void 0,this.containerPointers.clear())}),i(t,"webglcontextlost",o=>{o.preventDefault(),this.callbacks.onError?.("三维画面暂时中断，请重新打开三维地图")})}look(t,e){this.yaw-=t*.0035,this.pitch=an.clamp(this.pitch-e*.0035,-Math.PI/2+.025,Math.PI/2-.025),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ")}requestPointerLock(){if(this.mode!=="fly"||!this.active||this.containerState.status!=="closed"||typeof this.renderer.domElement.requestPointerLock!="function")return;const t=this.renderer.domElement.requestPointerLock();t&&typeof t.catch=="function"&&t.catch(()=>{})}setMode(t){if(t!==this.mode){if(this.closeContainer(),this.setContainerTarget(null),this.containerTargetPosition.x=1/0,this.containerPickRevision++,this.keys.clear(),this.touchMove.set(0,0,0),this.dragging=void 0,document.pointerLockElement===this.renderer.domElement&&document.exitPointerLock(),t==="fly")this.camera.rotation.reorder("YXZ"),this.yaw=this.camera.rotation.y,this.pitch=this.camera.rotation.x;else{const e=this.camera.getWorldDirection(new R);this.controls.target.copy(this.camera.position).addScaledVector(e,28)}this.mode=t,this.controls.enabled=t==="orbit"&&this.active&&this.containerState.status==="closed"&&!this.containerPreparing,this.renderer.domElement.setAttribute("aria-label",t==="fly"?"三维飞行地图，拖动转头，WASD移动，空格上升，Shift下降":"三维地图，拖动旋转，双指平移和缩放"),this.callbacks.onMode?.(t),this.updateStreaming(!0)}}setActive(t){t||this.stopIslandMechanism(),this.active=t,t&&(this.renderDirty=!0),this.controls.enabled=this.mode==="orbit"&&t&&this.containerState.status==="closed"&&!this.containerPreparing,t||(this.closeContainer(),this.setContainerTarget(null),this.containerTargetPosition.x=1/0,this.keys.clear(),this.touchMove.set(0,0,0),this.dragging=void 0,document.pointerLockElement===this.renderer.domElement&&document.exitPointerLock())}setDimension(t){const e=this.manifest.dimensions.find(n=>n.id===t);if(!(!e||e===this.dimension)){this.stopIslandMechanism(),this.closeContainer(),this.setContainerTarget(null),this.containerPickRevision++,this.generation++,this.memoryFollow=void 0,this.clearMemoryPreload(),this.clearMemoryPlayers();for(const n of this.regions.values())n.controller?.abort();this.regions.clear(),this.entityRenderer?.clear(),this.savedEntities?.clear(),this.loading=0,this.pendingMesh=void 0,this.pendingMemoryRevision=void 0,this.memoryAcknowledgedRevision=-1,this.dirtyMeshes.clear(),this.desired.clear(),this.streamingDesired.clear(),this.streamingCenter="";for(const n of this.meshes.keys())this.removeMesh(n);this.post({type:"reset"}),this.dimension=e,this.reindex(),this.memorySource&&(this.memoryRevision++,this.configureMemoryWorker()),this.mode==="orbit"?(this.controls.target.set(e.spawn.x,e.spawn.y,e.spawn.z),this.camera.position.set(e.spawn.x+38,e.spawn.y+38,e.spawn.z+48),this.controls.update()):(this.camera.position.set(e.spawn.x,e.spawn.y+7,e.spawn.z),this.pitch=-.22,this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ")),this.updateStreaming(!0),this.emitPosition()}}setLocation(t,e,n){if([t,e,n].every(Number.isFinite)){if(this.mode==="orbit"){const i=this.camera.position.clone().sub(this.controls.target);this.controls.target.set(t,e,n),this.camera.position.copy(this.controls.target).add(i),this.controls.update()}else this.camera.position.set(t,e,n);this.updateStreaming(!0),this.emitPosition()}}setDistance(t){if(!Number.isFinite(t))return;const e=an.clamp(Math.round(t),nh,ih);e!==this.distance&&(this.distance=e,this.updateFog(),this.updateStreaming(!0))}setTouchMove(t,e,n=0){this.containerState.status!=="closed"||this.containerPreparing||this.touchMove.set(an.clamp(t,-1,1),an.clamp(n,-1,1),an.clamp(e,-1,1))}getPosition(){return Tn(this.camera.position)}getFocus(){return this.mode==="orbit"?Tn(this.controls.target):Tn(this.camera.position.clone().addScaledVector(this.camera.getWorldDirection(new R),8))}getLocation(){return this.mode==="orbit"?Tn(this.controls.target):this.getPosition()}getMode(){return this.mode}getDimension(){return this.dimension.id}getMemoryGeometryRevision(){return this.memoryRevision}setContainerCallbacks(t={}){this.containerCallbacks=t,t.onState?.(this.containerState),t.onTarget?.(this.containerTarget)}getContainerState(){return this.containerState}getContainerAssets(){return this.containerAssets}setContainerTarget(t){const e=this.containerTarget;if(this.containerTarget=t,t?.bounds){const[n,i,r,o,a,c]=t.bounds;this.containerOutline.position.set(t.x+(n+o)/2,t.y+(i+a)/2,t.z+(r+c)/2),this.containerOutline.scale.set(o-n+.004,a-i+.004,c-r+.004),this.renderDirty=!0}e?.dimension===t?.dimension&&e?.x===t?.x&&e?.y===t?.y&&e?.z===t?.z&&e?.type===t?.type&&e?.available===t?.available&&e?.reason===t?.reason||this.containerCallbacks.onTarget?.(t)}setHudVisible(t){this.hudVisible=t,t||this.stopIslandMechanism(),this.updateIslandMechanismPrompt(),this.renderDirty=!0}frameIslandMechanism(t){this.mode!=="orbit"&&this.setMode("orbit");const[,e,n,i,r,o,a]=t,c=new R(e+.5,n+.5,i+.5),l=new Be(new R(e-8,n-1,i-3),new R(e+3,n+8,i+9)),h=[...this.meshes.values()];h.forEach(f=>f.updateMatrixWorld(!0));const u=xr(h,l),d=this.memoryGroundRaycaster;for(const f of[[-6,2.5,1.7],[-5,2,.5],[-4,1.5,.5],[0,7,1]]){const g=new R(e+f[0],n+f[1],i+f[2]),_=g.clone().sub(c),m=_.length();if(d.set(c,_.normalize()),d.near=.6,d.far=m,!d.intersectObjects(u,!1).some(p=>p.distance<m-.15)){this.controls.target.set((e+r)/2+.5,(n+o)/2+.7,(i+a)/2+.5),this.camera.position.copy(g),this.controls.update(),this.renderDirty=!0;return}}}stopIslandMechanism(){this.islandMechanism?.stop()&&(this.renderDirty=!0)}updateIslandMechanismPrompt(){if(!this.islandMechanismPrompt)return;const t=this.active&&this.hudVisible&&!this.memorySource&&this.containerState.status==="closed",e=this.mode==="orbit"?this.controls.target:this.camera.position,n=t?r_(this.islandGenerators,e,this.dimension.id):void 0;(n!==this.islandMechanismNearby||!t)&&this.stopIslandMechanism(),this.islandMechanismNearby=n,this.islandMechanismPrompt.hidden=!n;const i=!!this.islandMechanism?.running;this.islandMechanismButton.textContent=i?"结束演示":"看看刷石机",this.islandMechanismButton.setAttribute("aria-pressed",String(i)),this.islandMechanismCaption.hidden=!i}updateContainerOutline(){const t=this.containerTarget,e=!!t?.bounds&&this.hudVisible&&this.active&&this.mode==="fly"&&this.containerState.status==="closed"&&!this.containerPreparing&&this.meshReady(Le(Math.floor(t.x/16),Math.floor(t.z/16)))&&this.canOpenInventory()&&this.camera.position.distanceToSquared(this.containerTargetPosition)<1e-8&&1-Math.abs(this.camera.quaternion.dot(this.containerTargetQuaternion))<1e-8;this.containerOutline.visible!==e&&(this.containerOutline.visible=e,this.renderDirty=!0)}setContainerState(t){this.containerState=t,t.status!=="closed"&&(this.keys.clear(),this.touchMove.set(0,0,0),this.dragging=void 0,this.containerGesture=void 0,this.containerPointers.clear(),document.pointerLockElement===this.renderer.domElement&&document.exitPointerLock()),this.controls.enabled=this.active&&this.mode==="orbit"&&t.status==="closed"&&!this.containerPreparing,this.containerCallbacks.onState?.(t)}closeContainer(){this.containerPrepareRevision++,this.containerPickRevision++,this.containerRetryScreen=void 0,this.containerRequestId++,this.containerController?.abort(),this.containerController=void 0,this.containerRecords.clear(),this.keys.clear(),this.touchMove.set(0,0,0),this.dragging=void 0,this.containerState.status!=="closed"&&this.setContainerState({status:"closed"})}async openTargetContainer(){if(this.containerState.status==="error"){await this.openContainerAt(this.containerRetryScreen,!0);return}this.containerState.status==="closed"&&await this.openContainerAt()}canOpenInventory(){return!this.memorySource||this.memoryAcknowledgedRevision===this.memoryRevision&&this.getMemoryBufferStatus().ready}async openContainerAt(t,e=!1){if(!this.active||!this.initialized||this.disposed||this.containerPreparing||this.containerState.status!=="closed"&&!(e&&this.containerState.status==="error"))return;const n=this.generation,i=++this.containerPickRevision,r=++this.containerPrepareRevision;this.containerPreparing=!0;let o=r;const a=()=>this.active&&!this.disposed&&n===this.generation&&o===this.containerPrepareRevision&&(this.containerState.status==="closed"||e&&this.containerState.status==="error");try{if(!await this.pickContainer(t)||!a()||i!==this.containerPickRevision||(this.keys.clear(),this.touchMove.set(0,0,0),this.dragging=void 0,this.controls.enabled=!1,this.containerCallbacks.onBeforeOpen?.(),!this.active||this.disposed||n!==this.generation||this.containerState.status!=="closed"&&!(e&&this.containerState.status==="error")))return;o=++this.containerPrepareRevision;const l=this.memoryRevision,h=++this.containerPickRevision,u=performance.now()+1e4;for(;a()&&l===this.memoryRevision&&!this.canOpenInventory();){if(performance.now()>=u){this.callbacks.onError?.("这段回忆仍在准备中，请稍后重新打开容器。");return}await new Promise(f=>requestAnimationFrame(()=>f()))}if(!a()||l!==this.memoryRevision||h!==this.containerPickRevision)return;const d=await this.pickContainer(t);if(!d||!a()||l!==this.memoryRevision||h!==this.containerPickRevision)return;this.containerRetryScreen=t?{...t}:void 0,this.setContainerTarget(d),await this.loadContainer(d)}catch(c){a()&&this.callbacks.onError?.(c instanceof Error?c.message:"容器选择失败")}finally{this.containerPreparing=!1,this.controls.enabled=this.active&&this.mode==="orbit"&&this.containerState.status==="closed"}}async refreshContainerTarget(){if(!this.initialized||this.disposed)return;this.containerPicking=!0;const t=this.generation,e=this.containerPickRevision;this.containerTargetPosition.copy(this.camera.position),this.containerTargetQuaternion.copy(this.camera.quaternion);try{const n=await this.pickContainer();t===this.generation&&e===this.containerPickRevision&&this.active&&this.containerState.status==="closed"&&!this.disposed&&this.setContainerTarget(n)}catch{}finally{this.containerPicking=!1}}async pickContainer(t){if(!this.canOpenInventory())return null;const e=this.generation,n=this.memoryRevision,i=this.renderer.domElement.getBoundingClientRect(),r=t?new Et((t.x-i.left)/i.width*2-1,-(t.y-i.top)/i.height*2+1):new Et;if(Math.abs(r.x)>1||Math.abs(r.y)>1)return null;this.camera.updateMatrixWorld(!0);const o=this.containerRaycaster;o.near=0,o.far=this.mode==="fly"?8:96,o.setFromCamera(r,this.camera);const a=[],c=[];for(const y of Ba(o.ray.origin,o.ray.direction,o.far)){if(this.desired.has(y)&&!this.meshReady(y))return null;const T=this.meshes.get(y);if(T?.visible){if(!this.meshReady(y))return null;c.push([y,T]),T.updateMatrixWorld(!0);for(const A of T.children)A instanceof Ot&&!A.geometry.boundingBox&&A.geometry.computeBoundingBox();a.push(...T.children)}}const l=o.intersectObjects(a,!1)[0];if(!l?.face)return null;const h=l.face.normal.clone().applyNormalMatrix(new It().getNormalMatrix(l.object.matrixWorld)),u=l.point.clone().addScaledVector(h,-1e-4),d=Math.floor(u.x),f=Math.floor(u.y),g=Math.floor(u.z);if(!this.meshReady(Le(Math.floor(d/16),Math.floor(g/16))))return null;const _=await this.inspectMemoryBlock(d,f,g);if(e!==this.generation||n!==this.memoryRevision||!this.canOpenInventory()||this.memorySource&&!Object.is(_.time,this.memoryTime)||c.some(([y,T])=>this.meshes.get(y)!==T||!this.meshReady(y)))return null;const m=_.currentName||"",p=sl(m);if(!p)return null;const x=!!this.memorySource&&this.memoryTime<(this.memorySource.manifest.finalMapTime??1/0),S=!!this.dimension.containers;return{x:d,y:f,z:g,type:p,blockName:m,dimension:this.dimension.id,available:!x&&S&&p!=="ender_chest",..._.containerBounds?{bounds:_.containerBounds}:{},...x?{reason:"这一刻的物品暂时无法查看。把时间线移到最后，看看留下的东西。"}:S?p==="ender_chest"?{reason:"末影箱属于每位玩家的个人库存，公开地图不提供这些物品。"}:{}:{reason:"这份地图没有公开容器的物品记录。"}}}async loadContainer(t){if(!this.active||this.disposed||t.dimension!==this.dimension.id)return;this.containerController?.abort();const e=new AbortController,n=this.generation,i=++this.containerRequestId;this.containerController=e,this.containerRecords.clear();const r=()=>!this.disposed&&this.active&&n===this.generation&&i===this.containerRequestId&&!e.signal.aborted&&this.containerController===e;if(this.setContainerState({status:"loading",target:t}),!t.available){this.setContainerState({status:"unavailable",target:t,message:t.reason||"这份地图没有可查看的容器库存。"});return}const o=this.dimension.containers,a=new Map((o?.regions||[]).map(h=>[on(h.x,h.z),h])),c=this.containerRecords,l=async h=>{const u=on(h.x,h.z);if(c.has(u))return c.get(u);this.containerRequests++;const d=await g_(h,e.signal,{readJson:xi,worldUrl:zn});return r()?(c.set(u,d),d):[]};try{const h=a.get(on(Math.floor(t.x/64),Math.floor(t.z/64)));if(!h){r()&&this.setContainerState({status:"unavailable",target:t,message:"存档中没有这个容器的物品记录，无法判断它是否为空。"});return}const u=await l(h);if(!r())return;const d=u.find(g=>bo(g)===bo(t));if(!d||d.type!==t.type||d.block.name!==t.blockName){this.setContainerState({status:"unavailable",target:t,message:"存档中没有这个容器的匹配物品记录，无法判断它是否为空。"});return}if(d.unresolvedLoot){this.setContainerState({status:"unavailable",target:t,message:"战利品尚未生成，存档中没有可展示的物品。"});return}if(d.inaccessible){this.setContainerState({status:"unavailable",target:t,message:"末影箱属于每位玩家的个人库存，公开地图不提供这些物品。"});return}let f;if(d.pair&&!d.forceUnpair){const g=a.get(on(Math.floor(d.pair.x/64),Math.floor(d.pair.z/64)));if(g){const _=await l(g);if(!r())return;const m=_.find(p=>p.x===d.pair.x&&p.y===d.y&&p.z===d.pair.z);if(m&&Jl(d,m)){if(m.unresolvedLoot){this.setContainerState({status:"unavailable",target:t,message:"大型箱子的另一半战利品尚未生成，存档中没有完整的物品记录。"});return}f=m}}if(!f)throw new Error("大型箱子的另一半记录不完整，未显示可能缺失的库存。请重试。")}r()&&this.setContainerState({status:"ready",target:t,container:Ql(d,f)})}catch(h){if(!r()||h instanceof DOMException&&h.name==="AbortError")return;this.containerRecords.clear(),this.setContainerState({status:"error",target:t,message:h instanceof Error?h.message:"容器读取失败，请重试。"})}}inspectMemoryBlock(t,e,n){if(this.disposed)return Promise.reject(new Error("地图已关闭"));const i=++this.memoryInspectionId;return new Promise((r,o)=>{const a=setTimeout(()=>{this.memoryInspections.delete(i),o(new Error("方块读取超时"))},1e4);this.memoryInspections.set(i,{resolve:c=>{clearTimeout(a),r(c)},reject:c=>{clearTimeout(a),o(c)}}),this.post({type:"memory-inspect",x:Math.floor(t),y:Math.floor(e),z:Math.floor(n),requestId:i,generation:this.generation})})}hasWorldPosition(t,e){const n=this.manifest.dimensions.find(a=>a.id===t);if(!n)return!1;const i=n.regions.find(a=>a.x===Math.floor(e.x/64)&&a.z===Math.floor(e.z/64)),r=(Math.floor(e.x/16)%4+4)%4,o=(Math.floor(e.z/16)%4+4)%4;return!!i&&!!(i.chunks&1<<r*4+o)}async setMemorySource(t,e={}){if(this.stopIslandMechanism(),await this.ready,!this.disposed){this.closeContainer(),this.setContainerTarget(null),this.containerPickRevision++,this.memorySource=t||void 0,this.memoryCallbacks=e,this.resetMemoryEffects(),this.clearMemoryPreload(),this.memoryRevision++,this.memoryAcknowledgedRevision=-1,this.generation++;for(const n of this.regions.values())n.controller?.abort();this.regions.clear(),this.entityRenderer?.clear(),this.savedEntities?.clear(),this.loading=0,this.pendingMesh=void 0,this.pendingMemoryRevision=void 0,this.dirtyMeshes.clear(),this.desired.clear(),this.streamingDesired.clear(),this.streamingCenter="";for(const n of this.meshes.keys())this.removeMesh(n);this.post({type:"reset"}),this.reindex(),t&&this.configureMemoryWorker(),this.savedEntities&&(this.savedEntities.group.visible=!t||this.memoryTime>=(t.manifest.finalMapTime??1/0)),t||(this.memoryFollow=void 0,this.clearMemoryPlayers()),this.updateStreaming(!0)}}setMemoryTime(t){Object.is(t,this.memoryTime)||(this.memorySource&&(this.closeContainer(),this.setContainerTarget(null),this.containerPickRevision++),this.memoryTime=t,!(!this.memorySource||this.disposed)&&(this.memoryRevision++,this.pendingMesh&&this.dirtyMeshes.add(this.pendingMesh),this.pendingMesh=void 0,this.pendingMemoryRevision=void 0,this.post({type:"memory-time",time:t,revision:this.memoryRevision,generation:this.generation}),this.savedEntities&&(this.savedEntities.group.visible=t>=(this.memorySource.manifest.finalMapTime??1/0)),this.syncEntityOverlays(),this.renderDirty=!0))}configureMemoryWorker(){const t=this.memorySource;t&&(this.post({type:"memory-config",palette:t.palette,repairPalette:t.repairPalette,end:t.manifest.finalMapTime??1/0,time:this.memoryTime,revision:this.memoryRevision,generation:this.generation}),this.post({type:"memory-time",time:this.memoryTime,revision:this.memoryRevision,generation:this.generation}))}setMemoryPreload(t){if(this.disposed)return;const e=[],n=new Set,i=this.getLocation(),r=Le(Math.floor(i.x/16),Math.floor(i.z/16));if(this.memorySource)for(const a of t){if(a.dimension!==this.dimension.id||!Number.isFinite(a.x)||!Number.isFinite(a.z))continue;const c=Math.floor(a.x/16),l=Math.floor(a.z/16),h=Le(c,l);if(!(h===r||n.has(h))&&(n.add(h),e.push({x:c,z:l}),e.length===6))break}const o=e.map(a=>Le(a.x,a.z)).join(";");o!==this.memoryPreloadSignature&&(this.memoryPreloadCenters=e,this.memoryPreloadSignature=o,this.updateStreaming())}getMemoryBufferStatus(t){if(this.disposed||t?.dimension!==void 0&&t.dimension!==this.dimension.id)return{ready:!1,loaded:0,total:0};const e=t||this.getLocation();if(!Number.isFinite(e.x)||!Number.isFinite(e.z))return{ready:!1,loaded:0,total:0};const n=this.getLocation();Le(Math.floor(n.x/16),Math.floor(n.z/16))!==this.streamingCenter&&this.updateStreaming();const r=Math.floor(e.x/16),o=Math.floor(e.z/16),a=Le(r,o)===this.streamingCenter?this.desired:this.chunkWindow(r,o);let c=0;for(const[u,d]of a)this.regions.get(d.region)?.state==="ready"&&this.meshReady(u)&&c++;const l=a.size,h=!this.memorySource||this.memoryAcknowledgedRevision===this.memoryRevision;return{ready:l===0||this.initialized&&h&&c===l,loaded:c,total:l}}getMemoryPresentationStatus(t){const e=t||this.memoryFollow||this.getLocation();if(this.disposed||!this.initialized||"dimension"in e&&e.dimension!==this.dimension.id||!Number.isFinite(e.x)||!Number.isFinite(e.z))return{ready:!1,loaded:0,total:0};const n=new Map,i=(_,m)=>{const p=on(Math.floor(_/4),Math.floor(m/4)),x=this.regionIndex.get(p),S=(_%4+4)%4,y=(m%4+4)%4;x&&x.chunks&1<<S*4+y&&n.set(Le(_,m),p)},r=Math.floor(e.x/16),o=Math.floor(e.z/16);for(let _=-1;_<=1;_++)for(let m=-1;m<=1;m++)i(r+_,o+m);const a=t||this.memoryFollow,c=a?.actionTarget;c&&Math.hypot(c.x+.5-e.x,c.z+.5-e.z)<=6&&i(Math.floor(c.x/16),Math.floor(c.z/16));const l=this.camera.position.clone().sub(this.controls.target),h=a?nl(this.memoryRequestedOffset,this.memoryAppliedOffset,l):l,u=new R(e.x,e.y+1,e.z);a&&u.add(this.memoryPanOffset);for(const _ of Ba(u,h.clone().normalize(),h.length()+1)){const[m,p]=_.split(",").map(Number);i(m,p)}let d=0;for(const[_,m]of n)this.regions.get(m)?.state==="ready"&&this.meshReady(_)&&d++;const f=!this.memorySource||this.memoryAcknowledgedRevision===this.memoryRevision,g=[...this.desired.keys()].some(_=>this.meshes.has(_)&&!this.meshReady(_));return{ready:n.size>0&&f&&!g&&d===n.size,loaded:d,total:n.size}}clearMemoryPreload(){this.memoryPreloadCenters=[],this.memoryPreloadSignature=""}setMemoryReplayClock(t,e){(!Number.isFinite(this.memoryReplayClock)||t<this.memoryReplayClock)&&(this.memoryPoseReset=!0),this.memoryReplayClock=t,this.memoryInteractions.setReplayClock(t,e)}setMemoryPlayback(t){t||this.stopIslandMechanism(),this.memoryPlaying=t,this.memoryInteractions.setPlaying(t)}resetMemoryEffects(){this.memoryPoseReset=!0,this.memoryEventOrder=0,this.memoryEffectsGeneration++,this.memoryInteractions.reset(),this.memoryGroundCache.clear(),this.memoryCameraKey="",this.memoryInteractionLookups.clear();for(const t of this.memoryInspections.values())t.reject(new Error("回忆时间已改变"));this.memoryInspections.clear(),this.renderDirty=!0}showMemoryEvent(t,e,n="",i,r,o){if(e!==this.dimension.id||!this.memorySource||this.disposed)return;const[a,,c,l,h,u,d,f]=t,g={x:c,y:l,z:h},_=++this.memoryEventOrder,m=r||this.memorySource.eventName(f),p=i||this.memorySource.palette[m==="break"?u:d]?.name||"",x=this.memoryEffectsGeneration,S=y=>{if(x!==this.memoryEffectsGeneration||e!==this.dimension.id||this.disposed)return;const T=this.memoryPoses.get(n),A=n_(T,a,g)?n:"",P=A&&T?T:{x:c+.5,y:l,z:h+.5};this.memoryInteractions.show({player:A,kind:m,block:y,blockState:o,target:g,origin:P,time:a,order:_}),this.renderDirty=!0};if(!p&&/interact|container_|item_use/.test(m)){const y=`${c},${l},${h}`;let T=this.memoryInteractionLookups.get(y);if(!T){if(this.memoryInteractionLookups.size>=16){S("");return}T=this.inspectMemoryBlock(c,l,h),this.memoryInteractionLookups.set(y,T)}const A=T;A.then(P=>S(P.currentName||"")).catch(()=>S("")).finally(()=>{this.memoryInteractionLookups.get(y)===A&&this.memoryInteractionLookups.delete(y)})}else S(p)}findMemoryGround(t,e,n){if(![t,e,n].every(Number.isFinite))return null;const i=`${Math.round(t*8)},${Math.round(e*4)},${Math.round(n*8)}`;if(this.memoryGroundCache.has(i))return this.memoryGroundCache.get(i)||null;const r=[];for(let h=-1;h<=1;h++)for(let u=-1;u<=1;u++){const d=this.meshes.get(Le(Math.floor(t/16)+h,Math.floor(n/16)+u));d&&(d.updateMatrixWorld(!0),r.push(d))}if(!r.length)return null;const o=l_(r,t,e,n),a=this.meshes.get(Le(Math.floor(t/16),Math.floor(n/16))),c=__(a?.userData.memoryWater,t,e+.4,n),l=a_(t,e,n,o,this.memoryGroundRaycaster,this.memoryPassableTiles,this.memoryAtlas,this.memoryClimbTiles,c);return this.memoryGroundCache.size>2048&&this.memoryGroundCache.clear(),this.memoryGroundCache.set(i,l),l}resolveMemoryPose(t){if(t.dimension!==this.dimension.id)return t;const e=t.actionTarget,n=this.memoryPoses.get(t.player),i=e||(t.inferredWorkPosition&&t.actionKind==="activity"?n?.actionTarget:void 0);if(!this.memoryPoseReset&&!t.teleport&&t.inferredWorkPosition&&n?.inferredWorkPosition&&n.dimension===t.dimension&&i&&n.actionTarget&&t.actionTime!==void 0&&n.actionTime!==void 0&&Math.abs(t.actionTime-n.actionTime)<=20&&Math.hypot(t.x-n.x,t.z-n.z)<=3&&Math.hypot(i.x+.5-n.x,i.z+.5-n.z)<=2.8&&Math.abs(i.y+.5-n.y-1.4)<=3.5){const a=this.findMemoryGround(n.x,n.y,n.z);if(a&&!a.climbing&&!a.swimming&&Math.abs(a.y-n.y)<.08){const c=new R(n.x,n.y+1.4,n.z),l=new R(i.x+.5,i.y+.5,i.z+.5),h=new Be().setFromPoints([c,l]).expandByScalar(.2),u=[];for(let g=Math.floor(h.min.x/16);g<=Math.floor(h.max.x/16);g++)for(let _=Math.floor(h.min.z/16);_<=Math.floor(h.max.z/16);_++){const m=this.meshes.get(Le(g,_));m&&(m.updateMatrixWorld(!0),u.push(m))}const d=xr(u,h).filter(g=>g.material!==this.transparentMaterial);this.memoryGroundRaycaster.set(c,l.clone().sub(c).normalize()),this.memoryGroundRaycaster.near=.04;const f=this.memoryGroundRaycaster.ray.intersectBox(new Be(new R(i.x,i.y,i.z),new R(i.x+1,i.y+1,i.z+1)),new R);if(this.memoryGroundRaycaster.far=Math.max(0,c.distanceTo(f||l)-.02),!this.memoryGroundRaycaster.intersectObjects(d,!1).length)return{...t,...a,actionTarget:i,moving:!1,climbing:!1,swimming:!1}}}const r=this.findMemoryGround(t.x,t.y,t.z);if(r&&(!e||t.moving||r.climbing||r.swimming||Math.abs(r.y-t.y)<.3))return{...t,climbing:!1,swimming:!1,...r};const o=r?[r]:[];for(const[a,c]of[[.5,0],[-.5,0],[0,.5],[0,-.5],[1,0],[-1,0],[0,1],[0,-1]]){const l=this.findMemoryGround(t.x+a,t.y,t.z+c);l&&o.push(l)}if(!t.moving&&e)for(const[a,c]of[[1,0],[-1,0],[0,1],[0,-1]]){const l=this.findMemoryGround(e.x+.5+a,t.y,e.z+.5+c);l&&o.push(l)}return o.sort((a,c)=>Math.hypot(a.x-t.x,a.z-t.z)+Math.abs(a.y-t.y)*3.5-Math.hypot(c.x-t.x,c.z-t.z)-Math.abs(c.y-t.y)*3.5),o[0]?{...t,climbing:!1,swimming:!1,...o[0]}:n&&!t.teleport&&n.dimension===t.dimension&&Math.hypot(n.x-t.x,n.z-t.z)<3&&this.findMemoryGround(n.x,n.y,n.z)?{...t,x:n.x,y:n.y,z:n.z,moving:!1}:{...t,online:!1}}setMemoryPlayers(t){const e=new Set;let n=!1;for(const i of t){if(i.dimension!==this.dimension.id||!i.online)continue;this.memoryPoses.set(i.player,i),e.add(i.player);let r=this.memoryPlayers.get(i.player);if(!r){n=!0,r=new fe,r.rotation.y=i.yaw;const a=(d,f,g,_,m=r)=>{const p=new Ot(this.memoryPlayerGeometry,f);return p.name=d,p.scale.set(...g),p.position.set(..._),m.add(p),p},c=new fe;c.name="head",c.position.set(0,1.56,0),r.add(c),a("face",this.memorySkinMaterial,[.48,.48,.48],[0,0,0],c),a("hair",this.memoryPantsMaterial,[.49,.15,.49],[0,.17,-.005],c),a("body",this.memoryPlayerMaterial,[.5,.62,.28],[0,1.03,0]);for(const d of[-1,1])a("eye",this.memoryPantsMaterial,[.065,.065,.02],[d*.1,.025,.246],c);for(const d of[-1,1]){const f=new fe;f.name=`arm${d}`,f.position.set(d*.36,1.28,0),r.add(f),a("sleeve",this.memoryPlayerMaterial,[.18,.32,.25],[0,-.12,0],f),a("hand",this.memorySkinMaterial,[.18,.28,.25],[0,-.4,0],f);const g=new fe;g.name=`leg${d}`,g.position.set(d*.13,.72,0),r.add(g),a("trouser",this.memoryPantsMaterial,[.22,.72,.25],[0,-.36,0],g)}const l=document.createElement("canvas");l.width=512,l.height=64;const h=l.getContext("2d");h.fillStyle="rgba(24,35,32,.85)",h.fillRect(0,0,512,64),h.fillStyle="#fff2d7",h.textAlign="center",h.font="32px sans-serif",h.fillText(i.name.slice(0,32),256,44);const u=new kn(new Hi({map:new Ls(l),depthTest:!0,depthWrite:!1}));u.name="memory-nameplate",u.visible=i.player!==this.memoryFollow?.player,u.position.y=2.15,u.scale.set(3.6,.45,1),r.add(u),this.memoryPlayers.set(i.player,r),this.scene.add(r)}const o=r.rotation.y;(r.position.x!==i.x||r.position.y!==i.y||r.position.z!==i.z)&&(n=!0),r.position.set(i.x,i.y,i.z),(this.memoryPoseReset||i.teleport)&&(r.rotation.y=i.yaw),this.memoryInteractions.synchronizeActor(i),this.memoryInteractions.animateAvatar(i.player,r,!!i.moving,!!i.climbing,!!i.swimming),r.rotation.y!==o&&(n=!0)}this.memoryPoseReset=!1;for(const[i,r]of this.memoryPlayers)e.has(i)||(this.removeMemoryPlayer(i,r),n=!0);n&&(this.renderDirty=!0)}followMemoryPlayer(t){const e=this.memoryFollow,n=e?.player;if(n!==t?.player){if(this.renderDirty=!0,n){const T=this.memoryPlayers.get(n)?.getObjectByName("memory-nameplate");T&&(T.visible=!0)}if(t){const T=this.memoryPlayers.get(t.player)?.getObjectByName("memory-nameplate");T&&(T.visible=!1)}}if(!t){this.memoryFollow=void 0,this.controls.minDistance=2,this.controls.enableDamping=!0,this.memoryCameraKey="",this.memoryCameraOffset=void 0,this.memoryCameraTarget=void 0,this.memoryAppliedOffset=void 0,this.memoryCameraFrame=0,this.memoryCameraClearSince=void 0,this.memoryCameraSafeDistance=void 0;return}this.controls.enableDamping&&(this.controls.enableDamping=!1,this.controls.update()),this.controls.minDistance=.08;const i=this.camera.position.clone().sub(this.controls.target),r=!!this.memoryAppliedOffset&&i.distanceToSquared(this.memoryAppliedOffset)>1e-8,o=this.memoryCameraTarget?this.controls.target.clone().sub(this.memoryCameraTarget):new R,a=!!e&&o.lengthSq()>1e-8;a&&this.memoryPanOffset.add(o),!this.memoryRequestedOffset&&!this.orbitUserAdjusted&&(this.memoryRequestedOffset=new R(9,7,12)),this.memoryRequestedOffset=nl(this.memoryRequestedOffset,this.memoryAppliedOffset,i);const c=t.dimension!==this.dimension.id;c&&this.setDimension(t.dimension),this.memoryFollow=t,this.mode!=="orbit"&&this.setMode("orbit"),(c||n!==t.player||e&&Math.hypot(e.x-t.x,e.y-t.y,e.z-t.z)>8)&&(this.memoryCameraKey="",this.memoryCameraSafeDistance=void 0,this.memoryCameraClearSince=void 0);const h=new R(t.x,t.y+1,t.z),u=u_(h).add(this.memoryPanOffset),d=this.memoryRequestedOffset.clone(),f=[...u.toArray(),...d.toArray(),this.camera.aspect].join(","),g=this.getMemoryBufferStatus().ready||this.getMemoryPresentationStatus(t).ready;if(g&&f!==this.memoryCameraKey){const T=new Be().setFromPoints([u,u.clone().add(d)]).expandByScalar(.3),A=[];for(let I=Math.floor(T.min.x/16);I<=Math.floor(T.max.x/16);I++)for(let E=Math.floor(T.min.z/16);E<=Math.floor(T.max.z/16);E++){const b=this.meshes.get(Le(I,E));b&&(b.updateMatrixWorld(!0),A.push(b))}const P=xr(A,T).filter(I=>I.material!==this.transparentMaterial);this.memoryCameraOffset=d_(u,d,P,this.memoryGroundRaycaster,{aspect:this.camera.aspect}),this.memoryCameraKey=f}const _=performance.now(),m=Math.min(.05,Math.max(0,(_-(this.memoryCameraFrame||_))/1e3));this.memoryCameraFrame=_;const p=this.memoryAppliedOffset?.length(),x=g&&this.memoryCameraOffset?this.memoryCameraOffset.length():Math.min(d.length(),p??d.length());(!g||r||a||this.memoryCameraClearSince===void 0||p!==void 0&&x<=p+.001||this.memoryCameraSafeDistance!==void 0&&x<this.memoryCameraSafeDistance-.02)&&(this.memoryCameraClearSince=_),this.memoryCameraSafeDistance=x,d.setLength(f_(x,r||a?void 0:p,m,(_-this.memoryCameraClearSince)/1e3));const S=u.clone().add(d),y=this.controls.target.distanceToSquared(u)>1e-10||this.camera.position.distanceToSquared(S)>1e-10;this.controls.target.copy(u),this.camera.position.copy(S),this.camera.lookAt(u),this.controls.minDistance=Math.min(.35,d.length()),this.memoryCameraTarget=u.clone(),this.memoryAppliedOffset=d.clone(),Le(Math.floor(t.x/16),Math.floor(t.z/16))!==this.streamingCenter&&this.updateStreaming(),y&&(this.renderDirty=!0)}removeMemoryPlayer(t,e){this.memoryInteractions.forgetPlayer(t),this.memoryPoses.delete(t),e.traverse(n=>{if(n instanceof kn){const i=n.material;i.map?.dispose(),i.dispose()}}),this.scene.remove(e),this.memoryPlayers.delete(t)}clearMemoryPlayers(){for(const[t,e]of this.memoryPlayers)this.removeMemoryPlayer(t,e);this.resetMemoryEffects()}getDiagnostics(){const t=this.memorySource?{time:this.memoryTime,revision:this.memoryRevision,acknowledgedRevision:this.memoryAcknowledgedRevision,estimated:this.memoryEstimated,regions:this.memoryLoadedRegions,preloadWindows:this.memoryPreloadCenters.length,preloadedChunks:this.streamingDesired.size-this.desired.size,buffer:this.getMemoryBufferStatus(),presentation:this.getMemoryPresentationStatus(),interactions:this.memoryInteractions.diagnostics(),avatars:[...this.memoryPoses.values()].map(r=>({player:r.player,x:r.x,y:r.y,z:r.z,moving:r.moving,climbing:r.climbing,swimming:r.swimming,yaw:this.memoryPlayers.get(r.player)?.rotation.y,targetYaw:r.yaw,actionTime:r.actionTime,actionTarget:r.actionTarget}))}:void 0,e=this.memoryFollow?{requestedOffset:this.memoryRequestedOffset&&Tn(this.memoryRequestedOffset),appliedOffset:this.memoryAppliedOffset&&Tn(this.memoryAppliedOffset),target:Tn(this.controls.target),panOffset:Tn(this.memoryPanOffset)}:void 0;let n=0,i=0;for(const r of this.meshes.values())r.traverse(o=>{if(o instanceof Ot){const a=o.geometry;n+=(a.index?.count||a.getAttribute("position").count)/3;for(const c of Object.values(a.attributes))i+=c.array.byteLength;i+=a.index?.array.byteLength||0}});return{mechanism:this.islandMechanism?.diagnostics(),containerOutline:{visible:this.containerOutline.visible,position:this.containerTarget?{x:this.containerTarget.x,y:this.containerTarget.y,z:this.containerTarget.z}:null,bounds:this.containerTarget?.bounds||null},memory:t&&{...t,camera:e},cachedRegions:this.regions.size,cachedRegionKeys:[...this.regions.keys()],meshes:this.meshes.size,meshKeys:[...this.meshes.keys()],workers:this.disposed?0:1,triangles:n,geometryBytes:i,pending:this.desired.size-[...this.desired.keys()].filter(r=>this.meshReady(r)).length,radius:this.distance,fetchedBytes:this.bytes,renderer:"voxel",renderCalls:this.renderer.info.render.calls,framesRendered:this.framesRendered,textureCount:this.renderer.info.memory.textures,pixelRatio:this.renderer.getPixelRatio(),yaw:this.yaw,pitch:this.pitch,mode:this.mode,cameraDirection:Tn(this.camera.getWorldDirection(new R)),...this.entityRenderer?.getDiagnostics(),...this.savedEntities?.getDiagnostics(),containerState:this.containerState.status,containerTarget:this.containerTarget?{x:this.containerTarget.x,y:this.containerTarget.y,z:this.containerTarget.z,type:this.containerTarget.type,available:this.containerTarget.available}:null,containerRequests:this.containerRequests,containerCachedRegions:this.containerRecords.size,containerOpen:this.containerState.status!=="closed",containerPreparing:this.containerPreparing}}zoom(t){if(!(!this.active||this.containerState.status!=="closed"||this.containerPreparing)){if(this.mode==="orbit"){this.orbitUserAdjusted=!0,this.memoryFollow||(this.memoryRequestedOffset=void 0,this.memoryPanOffset.set(0,0,0));const e=this.camera.position.clone().sub(this.controls.target),n=an.clamp(e.length()/Math.max(.1,t),this.controls.minDistance,this.controls.maxDistance);e.setLength(n),this.camera.position.copy(this.controls.target).add(e),this.controls.update()}else this.camera.position.addScaledVector(this.camera.getWorldDirection(new R),(t-1)*12);this.updateStreaming(!0)}}move(t){if(!this.active||this.containerState.status!=="closed"||this.containerPreparing||this.mode!=="fly")return;const e=(...c)=>c.some(l=>this.keys.has(l));let n=(e("KeyD","ArrowRight")?1:0)-(e("KeyA","ArrowLeft")?1:0)+this.touchMove.x,i=(e("KeyS","ArrowDown")?1:0)-(e("KeyW","ArrowUp")?1:0)+this.touchMove.z,r=(e("Space")?1:0)-(e("ShiftLeft","ShiftRight","KeyQ")?1:0)+this.touchMove.y;const o=Math.hypot(n,r,i);if(!o)return;o>1&&(n/=o,r/=o,i/=o);const a=t*(e("ControlLeft","ControlRight")?48:16);this.camera.position.x+=(Math.cos(this.yaw)*n+Math.sin(this.yaw)*i)*a,this.camera.position.z+=(-Math.sin(this.yaw)*n+Math.cos(this.yaw)*i)*a,this.camera.position.y=an.clamp(this.camera.position.y+r*a,this.dimension.bounds.minY-24,this.dimension.bounds.maxY+180)}frame(t){if(this.disposed)return;const e=Math.max(0,(t-(this.lastFrame||t))/1e3),n=Math.min(.05,e);if(this.lastFrame=t,this.active&&this.memoryPlaying){this.memoryInteractions.update(Math.min(.25,e))&&(this.renderDirty=!0);for(const[i,r]of this.memoryPlayers){const o=this.memoryPoses.get(i);if(o){const a=r.rotation.y;r.rotation.y=e_(a,o.yaw,n),this.memoryInteractions.animateAvatar(i,r,!!o.moving,!!o.climbing,!!o.swimming),(o.moving||o.swimming||r.rotation.y!==a)&&(this.renderDirty=!0)}}}this.active&&this.islandMechanism?.update(e)&&(this.renderDirty=!0),this.move(n),this.mode==="orbit"&&this.containerState.status==="closed"&&!this.containerPreparing&&this.controls.update(),this.updateFog(),t-this.lastStream>220&&(this.lastStream=t,this.updateStreaming()),t-this.lastPosition>150&&(this.lastPosition=t,this.emitPosition(),this.updateIslandMechanismPrompt()),this.updateContainerOutline(),this.active&&this.mode==="fly"&&this.containerState.status==="closed"&&!this.containerPreparing&&t-this.containerTargetChecked>350&&!this.containerPicking&&(this.camera.position.distanceToSquared(this.containerTargetPosition)>1e-8||1-Math.abs(this.camera.quaternion.dot(this.containerTargetQuaternion))>1e-8)&&(this.containerTargetChecked=t,this.refreshContainerTarget()),(this.camera.position.distanceToSquared(this.renderedPosition)>1e-12||1-Math.abs(this.camera.quaternion.dot(this.renderedQuaternion))>1e-12)&&(this.renderDirty=!0),this.active&&this.renderDirty&&(this.renderer.render(this.scene,this.camera),this.renderedPosition.copy(this.camera.position),this.renderedQuaternion.copy(this.camera.quaternion),this.renderDirty=!1,this.framesRendered++),this.animation=requestAnimationFrame(i=>this.frame(i))}emitPosition(){this.callbacks.onPosition?.(this.getLocation())}updateFog(){if(!(this.scene.fog instanceof gs))return;const t=this.mode==="orbit"?this.camera.position.distanceTo(this.controls.target)*.7:0,e=this.distance*12+t,n=this.distance*16+18+t;(this.scene.fog.near!==e||this.scene.fog.far!==n)&&(this.scene.fog.near=e,this.scene.fog.far=n,this.renderDirty=!0)}chunkWindow(t,e,n=0,i=this.distance){const r=new Map;for(let o=-i;o<=i;o++)for(let a=-i;a<=i;a++){if(o*o+a*a>i*i+i)continue;const c=t+o,l=e+a,h=Math.floor(c/4),u=Math.floor(l/4),d=on(h,u),f=this.regionIndex.get(d),g=(c%4+4)%4,_=(l%4+4)%4;!f||!(f.chunks&1<<g*4+_)||r.set(Le(c,l),{x:c,z:l,region:d,priority:n+o*o+a*a})}return r}updateStreaming(t=!1){if(!this.initialized||this.disposed)return;const e=this.getLocation(),n=Math.floor(e.x/16),i=Math.floor(e.z/16),r=this.chunkWindow(n,i),o=this.distance;this.desired=r,this.streamingCenter=Le(n,i);const a=new Map(r),c=o*o+o+1,l=Math.min(256,Math.max(48,r.size*4));for(const[p,x]of this.memoryPreloadCenters.entries()){const S=[...this.chunkWindow(x.x,x.z,c*(p+1))].sort((y,T)=>y[1].priority-T[1].priority);for(const[y,T]of S){if(a.size-r.size>=l)break;a.has(y)||a.set(y,T)}}if(this.memorySource&&!this.memoryPreloadCenters.length){const p=[...this.chunkWindow(n,i,c,o+2)].sort((x,S)=>x[1].priority-S[1].priority);for(const[x,S]of p){if(a.size-r.size>=l)break;a.has(x)||a.set(x,S)}}this.streamingDesired=a;const h=performance.now(),u=new Set;for(const p of a.values()){u.add(p.region);const x=this.regions.get(p.region);x&&(x.used=h)}const d=o+2,f=new Set(this.memorySource?[...this.regions].filter(([p,x])=>!u.has(p)&&x.state==="ready"&&h-x.used<15e3).sort((p,x)=>x[1].used-p[1].used).slice(0,8).map(([p])=>p):[]);for(const p of this.meshes.keys()){const[x,S]=p.split(",").map(Number),y=f.has(on(Math.floor(x/4),Math.floor(S/4)));!a.has(p)&&!y&&(Math.abs(x-n)>d||Math.abs(S-i)>d)&&this.removeMesh(p)}for(const[p,x]of this.regions){if(u.has(p)||f.has(p))continue;const S=x.definition.x*4+1.5-n,y=x.definition.z*4+1.5-i;(Math.abs(S)>o+6||Math.abs(y)>o+6)&&(x.controller?.abort(),this.regions.delete(p),this.entityRenderer?.removeRegion(p),this.savedEntities?.removeRegion(p),this.post({type:"evict",key:p}),this.invalidateNeighbours(x.chunks||[]))}for(const[p,x]of this.meshes){const S=r.has(p);x.visible!==S&&(x.visible=S,this.renderDirty=!0)}this.syncEntityOverlays();const g=[...a.values()].sort((p,x)=>p.priority-x.priority),_=new Set([...r.values()].map(p=>p.region)),m=this.memorySource?6:3;for(const p of g){if(this.loading>=m)break;if(this.memorySource&&!_.has(p.region)&&this.loading>=m-2)continue;const x=this.regions.get(p.region);if(!x||x.state==="error"&&(x.retry||0)<h){const S=this.regionIndex.get(p.region);this.fetchRegion(p.region,S)}}this.scheduleMesh(),this.emitStatus(t)}async fetchRegion(t,e){const n=new AbortController,i=this.generation,r=this.memorySource,o={definition:e,state:"loading",controller:n,used:performance.now()};this.regions.set(t,o),this.loading++;try{const a=this.entityRegionIndex.get(t),c=this.savedEntityRegions.get(t),l=new ArrayBuffer(8);new Uint8Array(l).set([83,86,82,50]);const[h,u,d,f,g]=await Promise.all([e.file?fetch(zn(e.file),{signal:n.signal}):Promise.resolve(new Response(l)),a?fetch(zn(a.file),{signal:n.signal}):void 0,r?.region(this.dimension.id,e.x,e.z,n.signal),r?.repairRegion?.(this.dimension.id,e.x,e.z,n.signal),c?fetch(zn(c.file),{signal:n.signal}):void 0]);if(!h.ok)throw new Error(`地图区块下载失败（${h.status}）`);const[_,m,p]=await Promise.all([h.arrayBuffer(),u&&a?th(u,a):[],g&&c?xi(g).then(S=>Y0(S,c)):[]]);if(this.disposed||i!==this.generation||this.regions.get(t)!==o)return;this.bytes+=Number(h.headers.get("content-length"))||e.bytes||_.byteLength,a&&(this.bytes+=Number(u?.headers.get("content-length"))||a.bytes),this.entityRenderer?.setRegion(t,m),this.savedEntities?.setRegion(t,p),c&&(this.bytes+=Number(g?.headers.get("content-length"))||c.bytes),d&&this.memoryCallbacks.onEvents?.(d,this.dimension.id,t);const x=d?.flatMap((S,y)=>{const T=r?.eventState?.(S);return T?[[y,...T]]:[]});this.post({type:"region",key:t,x:e.x,z:e.z,buffer:_,entities:m,generation:i,memoryEvents:d,memoryEventStates:x,memoryRepair:f},[_])}catch(a){if(this.disposed||i!==this.generation||this.regions.get(t)!==o)return;a instanceof DOMException&&a.name==="AbortError"?this.regions.delete(t):(o.state="error",o.retry=performance.now()+12e3,this.callbacks.onError?.(a instanceof Error?a.message:"地图区块下载失败"))}finally{i===this.generation&&(this.loading=Math.max(0,this.loading-1)),this.emitStatus(),i===this.generation&&this.memorySource&&!this.disposed&&this.updateStreaming()}}scheduleMesh(){if(this.pendingMesh||!this.initialized||this.disposed||this.memorySource&&this.memoryAcknowledgedRevision!==this.memoryRevision)return;const t=[...this.streamingDesired.entries()].filter(([i,r])=>(!this.meshes.has(i)||this.dirtyMeshes.has(i))&&this.regions.get(r.region)?.state==="ready").sort((i,r)=>i[1].priority-r[1].priority)[0];if(!t)return;const[e,n]=t;this.dirtyMeshes.delete(e),this.pendingMesh=e,this.pendingMemoryRevision=this.memorySource?this.memoryRevision:void 0,this.post({type:"mesh",region:n.region,x:n.x,z:n.z,generation:this.generation,memoryRevision:this.pendingMemoryRevision})}onWorker(t){if(!this.disposed){if(t.type==="ready"){this.workerReady?.(),this.workerReady=void 0;return}if(t.type==="memory-inspect"){const e=this.memoryInspections.get(t.requestId);this.memoryInspections.delete(t.requestId),t.generation===this.generation?e?.resolve(t.block):e?.reject(new Error("读取期间地图维度已切换"));return}if(!(t.generation!==void 0&&t.generation!==this.generation)){if(t.type==="region"){const e=this.regions.get(t.key);if(!e){this.post({type:"evict",key:t.key});return}e.state="ready",e.chunks=new Set(t.chunks),e.controller=void 0,t.memoryStats&&t.memoryStats.revision===this.memoryRevision&&(this.memoryEstimated=t.memoryStats.estimated,this.memoryLoadedRegions=t.memoryStats.regions,this.memoryCallbacks.onStatus?.(this.memoryEstimated,this.memoryLoadedRegions)),this.invalidateNeighbours(t.chunks),this.scheduleMesh()}else if(t.type==="memory"){if(this.invalidateNeighbours(t.chunks),t.revision!==this.memoryRevision)return;this.memoryAcknowledgedRevision=t.revision,this.containerTargetPosition.x=1/0,this.memoryEstimated=t.estimated,this.memoryLoadedRegions=t.regions,this.memoryCallbacks.onStatus?.(t.estimated,t.regions),this.scheduleMesh()}else if(t.type==="mesh"){if(this.memorySource&&t.memoryRevision!==this.memoryRevision){this.pendingMesh===t.key&&this.pendingMemoryRevision===t.memoryRevision&&(this.pendingMesh=void 0,this.pendingMemoryRevision=void 0),this.scheduleMesh();return}if(this.pendingMesh===t.key&&(this.pendingMesh=void 0,this.pendingMemoryRevision=void 0),this.streamingDesired.get(t.key)){this.removeMesh(t.key,!0);const n=new fe;n.userData.memoryWater=t.waterSections,n.userData.visibleSigns=t.visibleSigns||[],n.visible=this.desired.has(t.key);const[i,r]=t.key.split(",").map(Number);n.position.set(i*16,0,r*16),this.addGeometry(n,t.opaque,this.opaqueMaterial),this.addGeometry(n,t.transparent,this.transparentMaterial),this.meshes.set(t.key,n),this.memoryGroundCache.clear(),this.memoryCameraKey="",this.scene.add(n),this.containerTargetPosition.x=1/0,this.syncEntityOverlays(),this.renderDirty=!0}this.scheduleMesh()}else if(t.type==="error"){t.key===this.pendingMesh&&(this.pendingMesh=void 0);const e=t.key?this.regions.get(t.key):void 0;e&&(e.state="error",e.retry=performance.now()+15e3),this.callbacks.onError?.(t.message),this.scheduleMesh()}this.emitStatus()}}}addGeometry(t,e,n){if(!e.positions.length)return;const i=new ke;i.setAttribute("position",new Re(e.positions,3)),i.setAttribute("normal",new Re(e.normals,3,!0)),i.setAttribute("uv",new Re(e.uvs,2)),i.setAttribute("color",new Re(e.colors,3,!0)),i.setIndex(new Re(e.indices,1)),i.computeBoundingSphere();const r=new Ot(i,n);r.renderOrder=n===this.transparentMaterial?1:0,t.add(r)}syncEntityOverlays(){const t=new Set([...this.desired.keys()].filter(i=>this.meshes.has(i))),e=new Set;for(const i of t)for(const r of this.meshes.get(i).userData.visibleSigns)e.add(r.join(","));const n=!this.memorySource||this.memoryTime>=(this.memorySource.manifest.finalMapTime??1/0);this.entityRenderer?.sync(t,this.camera.position,e,n)&&(this.renderDirty=!0),this.savedEntities?.sync(t,this.camera.position)&&(this.renderDirty=!0)}invalidateNeighbours(t){for(const e of t){const[n,i]=e.split(",").map(Number);for(const[r,o]of[[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const a=Le(n+r,i+o);(this.meshes.has(a)||this.pendingMesh===a)&&this.dirtyMeshes.add(a)}}}meshReady(t){return this.meshes.has(t)&&!this.dirtyMeshes.has(t)&&this.pendingMesh!==t}removeMesh(t,e=!1){e||this.dirtyMeshes.delete(t);const n=this.meshes.get(t);n&&(this.memoryGroundCache.clear(),this.memoryCameraKey="",n.traverse(i=>{i instanceof Ot&&(h_(i),i.geometry.dispose())}),this.scene.remove(n),this.meshes.delete(t),this.renderDirty=!0)}emitStatus(t=!1){const e=[...this.desired.keys()].filter(r=>this.meshReady(r)).length,n={loaded:e,pending:Math.max(0,this.desired.size-e),bytes:this.bytes,visible:e,total:this.totalChunks,dimension:this.dimension.id},i=JSON.stringify(n);(t||i!==this.lastStatus)&&(this.lastStatus=i,this.callbacks.onStatus?.(n))}dispose(){if(!this.disposed){this.closeContainer(),this.setContainerTarget(null),this.containerPickRevision++,this.containerAssets=void 0,this.disposed=!0,this.initController.abort(),cancelAnimationFrame(this.animation);for(const t of this.regions.values())t.controller?.abort();this.regions.clear(),this.clearMemoryPreload(),this.desired.clear(),this.streamingDesired.clear(),this.resizeObserver.disconnect(),this.disposers.forEach(t=>t()),this.controls.dispose(),this.worker.terminate(),this.workerReady?.(),document.pointerLockElement===this.renderer.domElement&&document.exitPointerLock();for(const t of this.meshes.keys())this.removeMesh(t);this.opaqueMaterial?.dispose(),this.transparentMaterial?.dispose(),this.atlasTexture?.dispose(),this.entityRenderer?.dispose(),this.savedEntities?.dispose(),this.containerOutline.geometry.dispose(),this.containerOutline.material.dispose(),this.clearMemoryPlayers(),this.memoryInteractions.dispose(),this.islandMechanism?.dispose(),this.islandMechanismPrompt?.remove(),this.islandGenerators=[],this.memoryPlayerGeometry.dispose(),this.memoryPlayerMaterial.dispose(),this.memorySkinMaterial.dispose(),this.memoryPantsMaterial.dispose();for(const t of this.memoryInspections.values())t.reject(new Error("地图已关闭"));this.memoryInspections.clear(),this.signFont&&document.fonts.delete(this.signFont),this.renderer.dispose(),this.renderer.domElement.remove()}}}export{x_ as Viewer3D};
