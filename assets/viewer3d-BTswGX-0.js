import{f as rn,c as Hl,a as Qo,b as us,r as Ya,d as or,i as qh,o as Yh,w as Nn,e as Kn,g as Mi,s as $h,h as jh,M as Kh,j as Zh}from"./index-CJEnbBzn.js";import{v as Wl}from"./memory-load-scheduling-xa6WsnFE.js";const $a="180",as={ROTATE:0,DOLLY:1,PAN:2},ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jh=0,yc=1,Qh=2,Xl=1,eu=2,Ln=3,xn=0,Wt=1,Ct=2,ni=0,cs=1,_c=2,Mc=3,vc=4,tu=5,vi=100,nu=101,iu=102,su=103,ru=104,ou=200,au=201,cu=202,lu=203,ea=204,ta=205,hu=206,uu=207,du=208,fu=209,mu=210,pu=211,gu=212,yu=213,_u=214,na=0,ia=1,sa=2,ds=3,ra=4,oa=5,aa=6,ca=7,ja=0,Mu=1,vu=2,ii=0,bu=1,Su=2,xu=3,Eu=4,Tu=5,Au=6,Ru=7,ql=300,fs=301,ms=302,la=303,ha=304,to=306,ua=1e3,xi=1001,da=1002,It=1003,wu=1004,Ei=1005,an=1006,ao=1007,Fn=1008,En=1009,Yl=1010,$l=1011,Vs=1012,Ka=1013,Pi=1014,vn=1015,tr=1016,Za=1017,Ja=1018,Hs=1020,jl=35902,Kl=35899,Zl=1021,Jl=1022,mn=1023,Ws=1026,Xs=1027,Qa=1028,ec=1029,Ql=1030,tc=1031,nc=1033,Vr=33776,Hr=33777,Wr=33778,Xr=33779,fa=35840,ma=35841,pa=35842,ga=35843,ya=36196,_a=37492,Ma=37496,va=37808,ba=37809,Sa=37810,xa=37811,Ea=37812,Ta=37813,Aa=37814,Ra=37815,wa=37816,Pa=37817,Da=37818,Ia=37819,La=37820,Ca=37821,Ua=36492,Na=36494,Fa=36495,ka=36283,Oa=36284,za=36285,Ba=36286,Pu=3200,Du=3201,eh=0,Iu=1,Zn="",_t="srgb",ps="srgb-linear",Yr="linear",et="srgb",Ui=7680,bc=519,Lu=512,Cu=513,Uu=514,th=515,Nu=516,Fu=517,ku=518,Ou=519,Ga=35044,Sc="300 es",bn=2e3,$r=2001;class Ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xc=1234567;const ls=Math.PI/180,qs=180/Math.PI;function On(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function Ge(n,e,t){return Math.max(e,Math.min(t,n))}function ic(n,e){return(n%e+e)%e}function zu(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Bu(n,e,t){return n!==e?(t-n)/(e-n):0}function Os(n,e,t){return(1-t)*n+t*e}function Gu(n,e,t,i){return Os(n,e,1-Math.exp(-t*i))}function Vu(n,e=1){return e-Math.abs(ic(n,e*2)-e)}function Hu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Wu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Xu(n,e){return n+Math.floor(Math.random()*(e-n+1))}function qu(n,e){return n+Math.random()*(e-n)}function Yu(n){return n*(.5-Math.random())}function $u(n){n!==void 0&&(xc=n);let e=xc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ju(n){return n*ls}function Ku(n){return n*qs}function Zu(n){return(n&n-1)===0&&n!==0}function Ju(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Qu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ed(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),u=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*d,c*u,a*l);break;case"YZY":n.set(c*u,a*h,c*d,a*l);break;case"ZXZ":n.set(c*d,c*u,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ze(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ot={DEG2RAD:ls,RAD2DEG:qs,generateUUID:On,clamp:Ge,euclideanModulo:ic,mapLinear:zu,inverseLerp:Bu,lerp:Os,damp:Gu,pingpong:Vu,smoothstep:Hu,smootherstep:Wu,randInt:Xu,randFloat:qu,randFloatSpread:Yu,seededRandom:$u,degToRad:ju,radToDeg:Ku,isPowerOfTwo:Zu,ceilPowerOfTwo:Ju,floorPowerOfTwo:Qu,setQuaternionFromProperEuler:ed,normalize:Ze,denormalize:fn};class xe{constructor(e=0,t=0){xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],d=i[s+3];const u=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(d!==y||c!==u||l!==f||h!==g){let p=1-a;const m=c*u+l*f+h*g+d*y,M=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const S=Math.sqrt(v),A=Math.atan2(S,m*M);p=Math.sin(p*A)/S,a=Math.sin(a*A)/S}const _=a*M;if(c=c*p+u*_,l=l*p+f*_,h=h*p+g*_,d=d*p+y*_,p===1-a){const S=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=S,l*=S,h*=S,d*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+c*f-l*u,e[t+1]=c*g+h*u+l*d-a*f,e[t+2]=l*g+h*f+a*u-c*d,e[t+3]=h*g-a*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),d=a(r/2),u=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ec.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ec.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+c*l+o*d-a*h,this.y=i+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return co.copy(this).projectOnVector(e),this.sub(co)}reflect(e){return this.sub(co.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const co=new P,Ec=new Bn;class Ce{constructor(e,t,i,s,r,o,a,c,l){Ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],y=s[0],p=s[3],m=s[6],M=s[1],v=s[4],_=s[7],S=s[2],A=s[5],R=s[8];return r[0]=o*y+a*M+c*S,r[3]=o*p+a*v+c*A,r[6]=o*m+a*_+c*R,r[1]=l*y+h*M+d*S,r[4]=l*p+h*v+d*A,r[7]=l*m+h*_+d*R,r[2]=u*y+f*M+g*S,r[5]=u*p+f*v+g*A,r[8]=u*m+f*_+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,g=t*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=d*y,e[1]=(s*l-h*i)*y,e[2]=(a*i-s*o)*y,e[3]=u*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-a*t)*y,e[6]=f*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(lo.makeScale(e,t)),this}rotate(e){return this.premultiply(lo.makeRotation(-e)),this}translate(e,t){return this.premultiply(lo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lo=new Ce;function nh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ys(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function td(){const n=Ys("canvas");return n.style.display="block",n}const Tc={};function $s(n){n in Tc||(Tc[n]=!0,console.warn(n))}function nd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Ac=new Ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rc=new Ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function id(){const n={enabled:!0,workingColorSpace:ps,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===et&&(s.r=zn(s.r),s.g=zn(s.g),s.b=zn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===et&&(s.r=hs(s.r),s.g=hs(s.g),s.b=hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zn?Yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $s("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $s("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ps]:{primaries:e,whitePoint:i,transfer:Yr,toXYZ:Ac,fromXYZ:Rc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:e,whitePoint:i,transfer:et,toXYZ:Ac,fromXYZ:Rc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}}),n}const Ye=id();function zn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ni;class sd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ni===void 0&&(Ni=Ys("canvas")),Ni.width=e.width,Ni.height=e.height;const s=Ni.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ni}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ys("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=zn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zn(t[i]/255)*255):t[i]=zn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rd=0;class sc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ho(s[o].image)):r.push(ho(s[o]))}else r=ho(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ho(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let od=0;const uo=new P;class bt extends Ii{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,i=xi,s=xi,r=an,o=Fn,a=mn,c=En,l=bt.DEFAULT_ANISOTROPY,h=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=On(),this.name="",this.source=new sc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(uo).x}get height(){return this.source.getSize(uo).y}get depth(){return this.source.getSize(uo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ql)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ua:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ua:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=ql;bt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,i=0,s=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],y=c[2],p=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,_=(f+1)/2,S=(m+1)/2,A=(h+u)/4,R=(d+y)/4,D=(g+p)/4;return v>_&&v>S?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=A/i,r=R/i):_>S?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=A/s,r=D/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=R/r,s=D/r),this.set(i,s,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-y)/M,this.z=(u-h)/M,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ad extends Ii{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new bt(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new sc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends ad{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ih extends bt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cd extends bt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ut{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ln):ln.fromBufferAttribute(r,o),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ar.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ar.copy(i.boundingBox)),ar.applyMatrix4(e.matrixWorld),this.union(ar)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ss),cr.subVectors(this.max,Ss),Fi.subVectors(e.a,Ss),ki.subVectors(e.b,Ss),Oi.subVectors(e.c,Ss),Gn.subVectors(ki,Fi),Vn.subVectors(Oi,ki),ui.subVectors(Fi,Oi);let t=[0,-Gn.z,Gn.y,0,-Vn.z,Vn.y,0,-ui.z,ui.y,Gn.z,0,-Gn.x,Vn.z,0,-Vn.x,ui.z,0,-ui.x,-Gn.y,Gn.x,0,-Vn.y,Vn.x,0,-ui.y,ui.x,0];return!fo(t,Fi,ki,Oi,cr)||(t=[1,0,0,0,1,0,0,0,1],!fo(t,Fi,ki,Oi,cr))?!1:(lr.crossVectors(Gn,Vn),t=[lr.x,lr.y,lr.z],fo(t,Fi,ki,Oi,cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const An=[new P,new P,new P,new P,new P,new P,new P,new P],ln=new P,ar=new Ut,Fi=new P,ki=new P,Oi=new P,Gn=new P,Vn=new P,ui=new P,Ss=new P,cr=new P,lr=new P,di=new P;function fo(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){di.fromArray(n,r);const a=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),c=e.dot(di),l=t.dot(di),h=i.dot(di);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const ld=new Ut,xs=new P,mo=new P;class ci{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ld.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xs.subVectors(e,this.center);const t=xs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(xs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xs.copy(e.center).add(mo)),this.expandByPoint(xs.copy(e.center).sub(mo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Rn=new P,po=new P,hr=new P,Hn=new P,go=new P,ur=new P,yo=new P;class no{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){po.copy(e).add(t).multiplyScalar(.5),hr.copy(t).sub(e).normalize(),Hn.copy(this.origin).sub(po);const r=e.distanceTo(t)*.5,o=-this.direction.dot(hr),a=Hn.dot(this.direction),c=-Hn.dot(hr),l=Hn.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const y=1/h;d*=y,u*=y,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(po).addScaledVector(hr,u),f}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const i=Rn.dot(this.direction),s=Rn.dot(Rn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,i,s,r){go.subVectors(t,e),ur.subVectors(i,e),yo.crossVectors(go,ur);let o=this.direction.dot(yo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hn.subVectors(this.origin,e);const c=a*this.direction.dot(ur.crossVectors(Hn,ur));if(c<0)return null;const l=a*this.direction.dot(go.cross(Hn));if(l<0||c+l>o)return null;const h=-a*Hn.dot(yo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,i,s,r,o,a,c,l,h,d,u,f,g,y,p){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,d,u,f,g,y,p)}set(e,t,i,s,r,o,a,c,l,h,d,u,f,g,y,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/zi.setFromMatrixColumn(e,0).length(),r=1/zi.setFromMatrixColumn(e,1).length(),o=1/zi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=o*h,f=o*d,g=a*h,y=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=u-y*l,t[9]=-a*c,t[2]=y-u*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*h,f=c*d,g=l*h,y=l*d;t[0]=u+y*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=y+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*h,f=c*d,g=l*h,y=l*d;t[0]=u-y*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=y-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*h,f=o*d,g=a*h,y=a*d;t[0]=c*h,t[4]=g*l-f,t[8]=u*l+y,t[1]=c*d,t[5]=y*l+u,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,f=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=y-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*d+g,t[10]=u-y*d}else if(e.order==="XZY"){const u=o*c,f=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+y,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hd,e,ud)}lookAt(e,t,i){const s=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Wn.crossVectors(i,Zt),Wn.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Wn.crossVectors(i,Zt)),Wn.normalize(),dr.crossVectors(Zt,Wn),s[0]=Wn.x,s[4]=dr.x,s[8]=Zt.x,s[1]=Wn.y,s[5]=dr.y,s[9]=Zt.y,s[2]=Wn.z,s[6]=dr.z,s[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],y=i[6],p=i[10],m=i[14],M=i[3],v=i[7],_=i[11],S=i[15],A=s[0],R=s[4],D=s[8],x=s[12],E=s[1],I=s[5],F=s[9],O=s[13],G=s[2],V=s[6],H=s[10],$=s[14],W=s[3],ie=s[7],se=s[11],pe=s[15];return r[0]=o*A+a*E+c*G+l*W,r[4]=o*R+a*I+c*V+l*ie,r[8]=o*D+a*F+c*H+l*se,r[12]=o*x+a*O+c*$+l*pe,r[1]=h*A+d*E+u*G+f*W,r[5]=h*R+d*I+u*V+f*ie,r[9]=h*D+d*F+u*H+f*se,r[13]=h*x+d*O+u*$+f*pe,r[2]=g*A+y*E+p*G+m*W,r[6]=g*R+y*I+p*V+m*ie,r[10]=g*D+y*F+p*H+m*se,r[14]=g*x+y*O+p*$+m*pe,r[3]=M*A+v*E+_*G+S*W,r[7]=M*R+v*I+_*V+S*ie,r[11]=M*D+v*F+_*H+S*se,r[15]=M*x+v*O+_*$+S*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],y=e[7],p=e[11],m=e[15];return g*(+r*c*d-s*l*d-r*a*u+i*l*u+s*a*f-i*c*f)+y*(+t*c*f-t*l*u+r*o*u-s*o*f+s*l*h-r*c*h)+p*(+t*l*d-t*a*f-r*o*d+i*o*f+r*a*h-i*l*h)+m*(-s*a*h-t*c*d+t*a*u+s*o*d-i*o*u+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],y=e[13],p=e[14],m=e[15],M=d*p*l-y*u*l+y*c*f-a*p*f-d*c*m+a*u*m,v=g*u*l-h*p*l-g*c*f+o*p*f+h*c*m-o*u*m,_=h*y*l-g*d*l+g*a*f-o*y*f-h*a*m+o*d*m,S=g*d*c-h*y*c-g*a*u+o*y*u+h*a*p-o*d*p,A=t*M+i*v+s*_+r*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=M*R,e[1]=(y*u*r-d*p*r-y*s*f+i*p*f+d*s*m-i*u*m)*R,e[2]=(a*p*r-y*c*r+y*s*l-i*p*l-a*s*m+i*c*m)*R,e[3]=(d*c*r-a*u*r-d*s*l+i*u*l+a*s*f-i*c*f)*R,e[4]=v*R,e[5]=(h*p*r-g*u*r+g*s*f-t*p*f-h*s*m+t*u*m)*R,e[6]=(g*c*r-o*p*r-g*s*l+t*p*l+o*s*m-t*c*m)*R,e[7]=(o*u*r-h*c*r+h*s*l-t*u*l-o*s*f+t*c*f)*R,e[8]=_*R,e[9]=(g*d*r-h*y*r-g*i*f+t*y*f+h*i*m-t*d*m)*R,e[10]=(o*y*r-g*a*r+g*i*l-t*y*l-o*i*m+t*a*m)*R,e[11]=(h*a*r-o*d*r-h*i*l+t*d*l+o*i*f-t*a*f)*R,e[12]=S*R,e[13]=(h*y*s-g*d*s+g*i*u-t*y*u-h*i*p+t*d*p)*R,e[14]=(g*a*s-o*y*s-g*i*c+t*y*c+o*i*p-t*a*p)*R,e[15]=(o*d*s-h*a*s+h*i*c-t*d*c-o*i*u+t*a*u)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,g=r*d,y=o*h,p=o*d,m=a*d,M=c*l,v=c*h,_=c*d,S=i.x,A=i.y,R=i.z;return s[0]=(1-(y+m))*S,s[1]=(f+_)*S,s[2]=(g-v)*S,s[3]=0,s[4]=(f-_)*A,s[5]=(1-(u+m))*A,s[6]=(p+M)*A,s[7]=0,s[8]=(g+v)*R,s[9]=(p-M)*R,s[10]=(1-(u+y))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=zi.set(s[0],s[1],s[2]).length();const o=zi.set(s[4],s[5],s[6]).length(),a=zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],hn.copy(this);const l=1/r,h=1/o,d=1/a;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=d,hn.elements[9]*=d,hn.elements[10]*=d,t.setFromRotationMatrix(hn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=bn,c=!1){const l=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s);let g,y;if(c)g=r/(o-r),y=o*r/(o-r);else if(a===bn)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===$r)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=bn,c=!1){const l=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s);let g,y;if(c)g=1/(o-r),y=o/(o-r);else if(a===bn)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===$r)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const zi=new P,hn=new rt,hd=new P(0,0,0),ud=new P(1,1,1),Wn=new P,dr=new P,Zt=new P,wc=new rt,Pc=new Bn;class gn{constructor(e=0,t=0,i=0,s=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pc.setFromEuler(this),this.setFromQuaternion(Pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class rc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dd=0;const Dc=new P,Bi=new Bn,wn=new rt,fr=new P,Es=new P,fd=new P,md=new Bn,Ic=new P(1,0,0),Lc=new P(0,1,0),Cc=new P(0,0,1),Uc={type:"added"},pd={type:"removed"},Gi={type:"childadded",child:null},_o={type:"childremoved",child:null};class Lt extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new P,t=new gn,i=new Bn,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new Ce}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(Ic,e)}rotateY(e){return this.rotateOnAxis(Lc,e)}rotateZ(e){return this.rotateOnAxis(Cc,e)}translateOnAxis(e,t){return Dc.copy(e).applyQuaternion(this.quaternion),this.position.add(Dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ic,e)}translateY(e){return this.translateOnAxis(Lc,e)}translateZ(e){return this.translateOnAxis(Cc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fr.copy(e):fr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Es,fr,this.up):wn.lookAt(fr,Es,this.up),this.quaternion.setFromRotationMatrix(wn),s&&(wn.extractRotation(s.matrixWorld),Bi.setFromRotationMatrix(wn),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uc),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pd),_o.child=e,this.dispatchEvent(_o),_o.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uc),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,fd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,md,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Lt.DEFAULT_UP=new P(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new P,Pn=new P,Mo=new P,Dn=new P,Vi=new P,Hi=new P,Nc=new P,vo=new P,bo=new P,So=new P,xo=new ft,Eo=new ft,To=new ft;class Qt{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),un.subVectors(e,t),s.cross(un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){un.subVectors(s,t),Pn.subVectors(i,t),Mo.subVectors(e,t);const o=un.dot(un),a=un.dot(Pn),c=un.dot(Mo),l=Pn.dot(Pn),h=Pn.dot(Mo),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Dn.x),c.addScaledVector(o,Dn.y),c.addScaledVector(a,Dn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return xo.setScalar(0),Eo.setScalar(0),To.setScalar(0),xo.fromBufferAttribute(e,t),Eo.fromBufferAttribute(e,i),To.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(xo,r.x),o.addScaledVector(Eo,r.y),o.addScaledVector(To,r.z),o}static isFrontFacing(e,t,i,s){return un.subVectors(i,t),Pn.subVectors(e,t),un.cross(Pn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),un.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Qt.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Vi.subVectors(s,i),Hi.subVectors(r,i),vo.subVectors(e,i);const c=Vi.dot(vo),l=Hi.dot(vo);if(c<=0&&l<=0)return t.copy(i);bo.subVectors(e,s);const h=Vi.dot(bo),d=Hi.dot(bo);if(h>=0&&d<=h)return t.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(Vi,o);So.subVectors(e,r);const f=Vi.dot(So),g=Hi.dot(So);if(g>=0&&f<=g)return t.copy(r);const y=f*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Hi,a);const p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return Nc.subVectors(r,s),a=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Nc,a);const m=1/(p+y+u);return o=y*m,a=u*m,t.copy(i).addScaledVector(Vi,o).addScaledVector(Hi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},mr={h:0,s:0,l:0};function Ao(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class He{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ye.workingColorSpace){if(e=ic(e,1),t=Ge(t,0,1),i=Ge(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ao(o,r,e+1/3),this.g=Ao(o,r,e),this.b=Ao(o,r,e-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(e,t=_t){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const i=sh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return Ye.workingToColorSpace(kt.copy(this),e),Math.round(Ge(kt.r*255,0,255))*65536+Math.round(Ge(kt.g*255,0,255))*256+Math.round(Ge(kt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(kt.copy(this),t);const i=kt.r,s=kt.g,r=kt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=_t){Ye.workingToColorSpace(kt.copy(this),e);const t=kt.r,i=kt.g,s=kt.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(mr);const i=Os(Xn.h,mr.h,t),s=Os(Xn.s,mr.s,t),r=Os(Xn.l,mr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new He;He.NAMES=sh;let gd=0;class Li extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=On(),this.name="",this.type="Material",this.blending=cs,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ea,this.blendDst=ta,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(i.blending=this.blending),this.side!==xn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ea&&(i.blendSrc=this.blendSrc),this.blendDst!==ta&&(i.blendDst=this.blendDst),this.blendEquation!==vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gs extends Li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new P,pr=new xe;let yd=0;class Pt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ga,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix3(e),this.setXY(t,pr.x,pr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ze(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),s=Ze(s,this.array),r=Ze(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ga&&(e.usage=this.usage),e}}class rh extends Pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class oh extends Pt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ke extends Pt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let _d=0;const sn=new rt,Ro=new Lt,Wi=new P,Jt=new Ut,Ts=new Ut,Tt=new P;class zt extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nh(e)?oh:rh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ce().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,i){return sn.makeTranslation(e,t,i),this.applyMatrix4(sn),this}scale(e,t,i){return sn.makeScale(e,t,i),this.applyMatrix4(sn),this}lookAt(e){return Ro.lookAt(e),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ke(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ut);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ts.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(Jt.min,Ts.min),Jt.expandByPoint(Tt),Tt.addVectors(Jt.max,Ts.max),Jt.expandByPoint(Tt)):(Jt.expandByPoint(Ts.min),Jt.expandByPoint(Ts.max))}Jt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Tt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Tt.fromBufferAttribute(a,l),c&&(Wi.fromBufferAttribute(e,l),Tt.add(Wi)),s=Math.max(s,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<i.count;D++)a[D]=new P,c[D]=new P;const l=new P,h=new P,d=new P,u=new xe,f=new xe,g=new xe,y=new P,p=new P;function m(D,x,E){l.fromBufferAttribute(i,D),h.fromBufferAttribute(i,x),d.fromBufferAttribute(i,E),u.fromBufferAttribute(r,D),f.fromBufferAttribute(r,x),g.fromBufferAttribute(r,E),h.sub(l),d.sub(l),f.sub(u),g.sub(u);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[D].add(y),a[x].add(y),a[E].add(y),c[D].add(p),c[x].add(p),c[E].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let D=0,x=M.length;D<x;++D){const E=M[D],I=E.start,F=E.count;for(let O=I,G=I+F;O<G;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const v=new P,_=new P,S=new P,A=new P;function R(D){S.fromBufferAttribute(s,D),A.copy(S);const x=a[D];v.copy(x),v.sub(S.multiplyScalar(S.dot(x))).normalize(),_.crossVectors(A,x);const I=_.dot(c[D])<0?-1:1;o.setXYZW(D,v.x,v.y,v.z,I)}for(let D=0,x=M.length;D<x;++D){const E=M[D],I=E.start,F=E.count;for(let O=I,G=I+F;O<G;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,d=new P;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),y=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,p),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let y=0,p=c.length;y<p;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*h;for(let m=0;m<h;m++)u[g++]=l[f++]}return new Pt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=e(u,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fc=new rt,fi=new no,gr=new ci,kc=new P,yr=new P,_r=new P,Mr=new P,wo=new P,vr=new P,Oc=new P,br=new P;class we extends Lt{constructor(e=new zt,t=new gs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){vr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(wo.fromBufferAttribute(d,e),o?vr.addScaledVector(wo,h):vr.addScaledVector(wo.sub(t),h))}t.add(vr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere),gr.applyMatrix4(r),fi.copy(e.ray).recast(e.near),!(gr.containsPoint(fi.origin)===!1&&(fi.intersectSphere(gr,kc)===null||fi.origin.distanceToSquared(kc)>(e.far-e.near)**2))&&(Fc.copy(r).invert(),fi.copy(e.ray).applyMatrix4(Fc),!(i.boundingBox!==null&&fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){const p=u[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let _=M,S=v;_<S;_+=3){const A=a.getX(_),R=a.getX(_+1),D=a.getX(_+2);s=Sr(this,m,e,i,l,h,d,A,R,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){const M=a.getX(p),v=a.getX(p+1),_=a.getX(p+2);s=Sr(this,o,e,i,l,h,d,M,v,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){const p=u[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),v=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let _=M,S=v;_<S;_+=3){const A=_,R=_+1,D=_+2;s=Sr(this,m,e,i,l,h,d,A,R,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){const M=p,v=p+1,_=p+2;s=Sr(this,o,e,i,l,h,d,M,v,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Md(n,e,t,i,s,r,o,a){let c;if(e.side===Wt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===xn,a),c===null)return null;br.copy(a),br.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(br);return l<t.near||l>t.far?null:{distance:l,point:br.clone(),object:n}}function Sr(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,yr),n.getVertexPosition(c,_r),n.getVertexPosition(l,Mr);const h=Md(n,e,t,i,yr,_r,Mr,Oc);if(h){const d=new P;Qt.getBarycoord(Oc,yr,_r,Mr,d),s&&(h.uv=Qt.getInterpolatedAttribute(s,a,c,l,d,new xe)),r&&(h.uv1=Qt.getInterpolatedAttribute(r,a,c,l,d,new xe)),o&&(h.normal=Qt.getInterpolatedAttribute(o,a,c,l,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new P,materialIndex:0};Qt.getNormal(yr,_r,Mr,u.normal),h.face=u,h.barycoord=d}return h}class cn extends zt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(d,2));function g(y,p,m,M,v,_,S,A,R,D,x){const E=_/R,I=S/D,F=_/2,O=S/2,G=A/2,V=R+1,H=D+1;let $=0,W=0;const ie=new P;for(let se=0;se<H;se++){const pe=se*I-O;for(let Ie=0;Ie<V;Ie++){const Fe=Ie*E-F;ie[y]=Fe*M,ie[p]=pe*v,ie[m]=G,l.push(ie.x,ie.y,ie.z),ie[y]=0,ie[p]=0,ie[m]=A>0?1:-1,h.push(ie.x,ie.y,ie.z),d.push(Ie/R),d.push(1-se/D),$+=1}}for(let se=0;se<D;se++)for(let pe=0;pe<R;pe++){const Ie=u+pe+V*se,Fe=u+pe+V*(se+1),nt=u+(pe+1)+V*(se+1),$e=u+(pe+1)+V*se;c.push(Ie,Fe,$e),c.push(Fe,nt,$e),W+=6}a.addGroup(f,W,x),f+=W,u+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ys(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Vt(n){const e={};for(let t=0;t<n.length;t++){const i=ys(n[t]);for(const s in i)e[s]=i[s]}return e}function vd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ah(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const bd={clone:ys,merge:Vt};var Sd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends Li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sd,this.fragmentShader=xd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=vd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ch extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qn=new P,zc=new xe,Bc=new xe;class on extends ch{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qn.x,qn.y).multiplyScalar(-e/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qn.x,qn.y).multiplyScalar(-e/qn.z)}getViewSize(e,t){return this.getViewBounds(e,zc,Bc),t.subVectors(Bc,zc)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ls*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xi=-90,qi=1;class Ed extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(Xi,qi,e,t);s.layers=this.layers,this.add(s);const r=new on(Xi,qi,e,t);r.layers=this.layers,this.add(r);const o=new on(Xi,qi,e,t);o.layers=this.layers,this.add(o);const a=new on(Xi,qi,e,t);a.layers=this.layers,this.add(a);const c=new on(Xi,qi,e,t);c.layers=this.layers,this.add(c);const l=new on(Xi,qi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===bn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===$r)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class lh extends bt{constructor(e=[],t=fs,i,s,r,o,a,c,l,h){super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Td extends Di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new lh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cn(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:ni});r.uniforms.tEquirect.value=t;const o=new we(s,r),a=t.minFilter;return t.minFilter===Fn&&(t.minFilter=an),new Ed(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Je extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ad={type:"move"};class Po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const y of e.hand.values()){const p=t.getJointPose(y,i),m=this._getHandJoint(l,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ad)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Je;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class js{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=i}clone(){return new js(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Rd extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class wd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ga,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new P;class _s{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=fn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ze(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),s=Ze(s,this.array),r=Ze(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new _s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class rs extends Li{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Yi;const As=new P,$i=new P,ji=new P,Ki=new xe,Rs=new xe,hh=new rt,xr=new P,ws=new P,Er=new P,Gc=new xe,Do=new xe,Vc=new xe;class Yn extends Lt{constructor(e=new rs){if(super(),this.isSprite=!0,this.type="Sprite",Yi===void 0){Yi=new zt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new wd(t,5);Yi.setIndex([0,1,2,0,2,3]),Yi.setAttribute("position",new _s(i,3,0,!1)),Yi.setAttribute("uv",new _s(i,2,3,!1))}this.geometry=Yi,this.material=e,this.center=new xe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$i.setFromMatrixScale(this.matrixWorld),hh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ji.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$i.multiplyScalar(-ji.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Tr(xr.set(-.5,-.5,0),ji,o,$i,s,r),Tr(ws.set(.5,-.5,0),ji,o,$i,s,r),Tr(Er.set(.5,.5,0),ji,o,$i,s,r),Gc.set(0,0),Do.set(1,0),Vc.set(1,1);let a=e.ray.intersectTriangle(xr,ws,Er,!1,As);if(a===null&&(Tr(ws.set(-.5,.5,0),ji,o,$i,s,r),Do.set(0,1),a=e.ray.intersectTriangle(xr,Er,ws,!1,As),a===null))return;const c=e.ray.origin.distanceTo(As);c<e.near||c>e.far||t.push({distance:c,point:As.clone(),uv:Qt.getInterpolation(As,xr,ws,Er,Gc,Do,Vc,new xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Tr(n,e,t,i,s,r){Ki.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Rs.x=r*Ki.x-s*Ki.y,Rs.y=s*Ki.x+r*Ki.y):Rs.copy(Ki),n.copy(e),n.x+=Rs.x,n.y+=Rs.y,n.applyMatrix4(hh)}class Pd extends bt{constructor(e=null,t=1,i=1,s,r,o,a,c,l=It,h=It,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hc extends Pt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Zi=new rt,Wc=new rt,Ar=[],Xc=new Ut,Dd=new rt,Ps=new we,Ds=new ci;class Id extends we{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Dd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ut),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Zi),Xc.copy(e.boundingBox).applyMatrix4(Zi),this.boundingBox.union(Xc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Zi),Ds.copy(e.boundingSphere).applyMatrix4(Zi),this.boundingSphere.union(Ds)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Ps.geometry=this.geometry,Ps.material=this.material,Ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ds.copy(this.boundingSphere),Ds.applyMatrix4(i),e.ray.intersectsSphere(Ds)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zi),Wc.multiplyMatrices(i,Zi),Ps.matrixWorld=Wc,Ps.raycast(e,Ar);for(let o=0,a=Ar.length;o<a;o++){const c=Ar[o];c.instanceId=r,c.object=this,t.push(c)}Ar.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Hc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Pd(new Float32Array(s*this.count),s,this.count,Qa,vn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Io=new P,Ld=new P,Cd=new Ce;class $n{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Io.subVectors(i,t).cross(Ld.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Io),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Cd.getNormalMatrix(e),s=this.coplanarPoint(Io).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new ci,Ud=new xe(.5,.5),Rr=new P;class oc{constructor(e=new $n,t=new $n,i=new $n,s=new $n,r=new $n,o=new $n){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=bn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],y=r[9],p=r[10],m=r[11],M=r[12],v=r[13],_=r[14],S=r[15];if(s[0].setComponents(l-o,f-h,m-g,S-M).normalize(),s[1].setComponents(l+o,f+h,m+g,S+M).normalize(),s[2].setComponents(l+a,f+d,m+y,S+v).normalize(),s[3].setComponents(l-a,f-d,m-y,S-v).normalize(),i)s[4].setComponents(c,u,p,_).normalize(),s[5].setComponents(l-c,f-u,m-p,S-_).normalize();else if(s[4].setComponents(l-c,f-u,m-p,S-_).normalize(),t===bn)s[5].setComponents(l+c,f+u,m+p,S+_).normalize();else if(t===$r)s[5].setComponents(c,u,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){mi.center.set(0,0,0);const t=Ud.distanceTo(e.center);return mi.radius=.7071067811865476+t,mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Rr.x=s.normal.x>0?e.max.x:e.min.x,Rr.y=s.normal.y>0?e.max.y:e.min.y,Rr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uh extends Li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jr=new P,Kr=new P,qc=new rt,Is=new no,wr=new ci,Lo=new P,Yc=new P;class Nd extends Lt{constructor(e=new zt,t=new uh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)jr.fromBufferAttribute(t,s-1),Kr.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=jr.distanceTo(Kr);e.setAttribute("lineDistance",new Ke(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wr.copy(i.boundingSphere),wr.applyMatrix4(s),wr.radius+=r,e.ray.intersectsSphere(wr)===!1)return;qc.copy(s).invert(),Is.copy(e.ray).applyMatrix4(qc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=f,p=g-1;y<p;y+=l){const m=h.getX(y),M=h.getX(y+1),v=Pr(this,e,Is,c,m,M,y);v&&t.push(v)}if(this.isLineLoop){const y=h.getX(g-1),p=h.getX(f),m=Pr(this,e,Is,c,y,p,g-1);m&&t.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=f,p=g-1;y<p;y+=l){const m=Pr(this,e,Is,c,y,y+1,y);m&&t.push(m)}if(this.isLineLoop){const y=Pr(this,e,Is,c,g-1,f,g-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Pr(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(jr.fromBufferAttribute(a,s),Kr.fromBufferAttribute(a,r),t.distanceSqToSegment(jr,Kr,Lo,Yc)>i)return;Lo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Lo);if(!(l<e.near||l>e.far))return{distance:l,point:Yc.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const $c=new P,jc=new P;class Fd extends Nd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)$c.fromBufferAttribute(t,s),jc.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+$c.distanceTo(jc);e.setAttribute("lineDistance",new Ke(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nr extends bt{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dh extends bt{constructor(e,t,i=Pi,s,r,o,a=It,c=It,l,h=Ws,d=1){if(h!==Ws&&h!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class fh extends bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}const Dr=new P,Ir=new P,Co=new P,Lr=new Qt;class kd extends zt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(ls*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:y,b:p,c:m}=Lr;if(y.fromBufferAttribute(a,l[0]),p.fromBufferAttribute(a,l[1]),m.fromBufferAttribute(a,l[2]),Lr.getNormal(Co),d[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,d[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,d[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let M=0;M<3;M++){const v=(M+1)%3,_=d[M],S=d[v],A=Lr[h[M]],R=Lr[h[v]],D=`${_}_${S}`,x=`${S}_${_}`;x in u&&u[x]?(Co.dot(u[x].normal)<=r&&(f.push(A.x,A.y,A.z),f.push(R.x,R.y,R.z)),u[x]=null):D in u||(u[D]={index0:l[M],index1:l[v],normal:Co.clone()})}}for(const g in u)if(u[g]){const{index0:y,index1:p}=u[g];Dr.fromBufferAttribute(a,y),Ir.fromBufferAttribute(a,p),f.push(Dr.x,Dr.y,Dr.z),f.push(Ir.x,Ir.y,Ir.z)}this.setAttribute("position",new Ke(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class si extends zt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,d=e/a,u=t/c,f=[],g=[],y=[],p=[];for(let m=0;m<h;m++){const M=m*u-o;for(let v=0;v<l;v++){const _=v*d-r;g.push(_,-M,0),y.push(0,0,1),p.push(v/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<a;M++){const v=M+l*m,_=M+l*(m+1),S=M+1+l*(m+1),A=M+1+l*m;f.push(v,_,A),f.push(_,S,A)}this.setIndex(f),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(y,3)),this.setAttribute("uv",new Ke(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.width,e.height,e.widthSegments,e.heightSegments)}}class vt extends Li{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eh,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Od extends Li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zd extends Li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Uo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Bd{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Gd=new Bd;class ac{constructor(e){this.manager=e!==void 0?e:Gd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ac.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ji=new WeakMap;class Vd extends ac{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Uo.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=Ji.get(o);d===void 0&&(d=[],Ji.set(o,d)),d.push({onLoad:t,onError:s})}return o}const a=Ys("img");function c(){h(),t&&t(this);const d=Ji.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}Ji.delete(this),r.manager.itemEnd(e)}function l(d){h(),s&&s(d),Uo.remove(`image:${e}`);const u=Ji.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(d)}Ji.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Uo.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Hd extends ac{constructor(e){super(e)}load(e,t,i,s){const r=new bt,o=new Vd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class mh extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const No=new rt,Kc=new P,Zc=new P;class Wd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oc,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kc),Zc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zc),t.updateMatrixWorld(),No.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(No,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(No)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ph extends ch{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xd extends Wd{constructor(){super(new ph(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qd extends mh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Xd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Yd extends mh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class $d extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Jc=new rt;class Va{constructor(e,t,i=0,s=1/0){this.ray=new no(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new rc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Jc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jc),this}intersectObject(e,t=!0,i=[]){return Ha(e,this,i,t),i.sort(Qc),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ha(e[s],this,i,t);return i.sort(Qc),i}}function Qc(n,e){return n.distance-e.distance}function Ha(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Ha(r[o],e,t,!0)}}class Ai{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ge(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jd extends Ii{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function el(n,e,t,i){const s=Kd(i);switch(t){case Zl:return n*e;case Qa:return n*e/s.components*s.byteLength;case ec:return n*e/s.components*s.byteLength;case Ql:return n*e*2/s.components*s.byteLength;case tc:return n*e*2/s.components*s.byteLength;case Jl:return n*e*3/s.components*s.byteLength;case mn:return n*e*4/s.components*s.byteLength;case nc:return n*e*4/s.components*s.byteLength;case Vr:case Hr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wr:case Xr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ma:case ga:return Math.max(n,16)*Math.max(e,8)/4;case fa:case pa:return Math.max(n,8)*Math.max(e,8)/2;case ya:case _a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ma:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ba:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case xa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case wa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Da:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ia:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case La:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ca:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ua:case Na:case Fa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ka:case Oa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case za:case Ba:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kd(n){switch(n){case En:case Yl:return{byteLength:1,components:1};case Vs:case $l:case tr:return{byteLength:2,components:1};case Za:case Ja:return{byteLength:2,components:4};case Pi:case Ka:case vn:return{byteLength:4,components:1};case jl:case Kl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$a}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$a);function gh(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Zd(n){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,d=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const h=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const y=d[f];n.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Jd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qd=`#ifdef USE_ALPHAHASH
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
#endif`,ef=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rf=`#ifdef USE_AOMAP
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
#endif`,of=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,af=`#ifdef USE_BATCHING
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
#endif`,cf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,df=`#ifdef USE_IRIDESCENCE
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
#endif`,ff=`#ifdef USE_BUMPMAP
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
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sf=`#define PI 3.141592653589793
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
} // validated`,xf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ef=`vec3 transformedNormal = objectNormal;
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
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Df=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,If=`#ifdef USE_ENVMAP
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
#endif`,Lf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cf=`#ifdef USE_ENVMAP
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
#endif`,Uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
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
#endif`,Ff=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bf=`#ifdef USE_GRADIENTMAP
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
}`,Gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wf=`uniform bool receiveShadow;
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
#endif`,Xf=`#ifdef USE_ENVMAP
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
#endif`,qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$f=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kf=`PhysicalMaterial material;
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
#endif`,Zf=`struct PhysicalMaterial {
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
}`,Jf=`
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
#endif`,Qf=`#if defined( RE_IndirectDiffuse )
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
#endif`,em=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cm=`#if defined( USE_POINTS_UV )
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
#endif`,lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,um=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mm=`#ifdef USE_MORPHTARGETS
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
#endif`,pm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bm=`#ifdef USE_NORMALMAP
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
#endif`,Sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,km=`float getShadowMask() {
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
}`,Om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,Bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gm=`#ifdef USE_SKINNING
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
#endif`,Vm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qm=`#ifdef USE_TRANSMISSION
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
#endif`,Ym=`#ifdef USE_TRANSMISSION
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qm=`uniform sampler2D t2D;
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
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ip=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sp=`#include <common>
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
}`,rp=`#if DEPTH_PACKING == 3200
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
}`,op=`#define DISTANCE
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
}`,ap=`#define DISTANCE
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
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`uniform float scale;
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
}`,up=`uniform vec3 diffuse;
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
}`,dp=`#include <common>
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
}`,fp=`uniform vec3 diffuse;
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
}`,mp=`#define LAMBERT
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
}`,pp=`#define LAMBERT
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
}`,gp=`#define MATCAP
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
}`,yp=`#define MATCAP
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
}`,_p=`#define NORMAL
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
}`,Mp=`#define NORMAL
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
}`,vp=`#define PHONG
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
}`,bp=`#define PHONG
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
}`,Sp=`#define STANDARD
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
}`,xp=`#define STANDARD
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
}`,Ep=`#define TOON
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
}`,Tp=`#define TOON
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
}`,Ap=`uniform float size;
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
}`,Rp=`uniform vec3 diffuse;
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
}`,wp=`#include <common>
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
}`,Pp=`uniform vec3 color;
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
}`,Dp=`uniform float rotation;
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
}`,Ip=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Jd,alphahash_pars_fragment:Qd,alphamap_fragment:ef,alphamap_pars_fragment:tf,alphatest_fragment:nf,alphatest_pars_fragment:sf,aomap_fragment:rf,aomap_pars_fragment:of,batching_pars_vertex:af,batching_vertex:cf,begin_vertex:lf,beginnormal_vertex:hf,bsdfs:uf,iridescence_fragment:df,bumpmap_pars_fragment:ff,clipping_planes_fragment:mf,clipping_planes_pars_fragment:pf,clipping_planes_pars_vertex:gf,clipping_planes_vertex:yf,color_fragment:_f,color_pars_fragment:Mf,color_pars_vertex:vf,color_vertex:bf,common:Sf,cube_uv_reflection_fragment:xf,defaultnormal_vertex:Ef,displacementmap_pars_vertex:Tf,displacementmap_vertex:Af,emissivemap_fragment:Rf,emissivemap_pars_fragment:wf,colorspace_fragment:Pf,colorspace_pars_fragment:Df,envmap_fragment:If,envmap_common_pars_fragment:Lf,envmap_pars_fragment:Cf,envmap_pars_vertex:Uf,envmap_physical_pars_fragment:Xf,envmap_vertex:Nf,fog_vertex:Ff,fog_pars_vertex:kf,fog_fragment:Of,fog_pars_fragment:zf,gradientmap_pars_fragment:Bf,lightmap_pars_fragment:Gf,lights_lambert_fragment:Vf,lights_lambert_pars_fragment:Hf,lights_pars_begin:Wf,lights_toon_fragment:qf,lights_toon_pars_fragment:Yf,lights_phong_fragment:$f,lights_phong_pars_fragment:jf,lights_physical_fragment:Kf,lights_physical_pars_fragment:Zf,lights_fragment_begin:Jf,lights_fragment_maps:Qf,lights_fragment_end:em,logdepthbuf_fragment:tm,logdepthbuf_pars_fragment:nm,logdepthbuf_pars_vertex:im,logdepthbuf_vertex:sm,map_fragment:rm,map_pars_fragment:om,map_particle_fragment:am,map_particle_pars_fragment:cm,metalnessmap_fragment:lm,metalnessmap_pars_fragment:hm,morphinstance_vertex:um,morphcolor_vertex:dm,morphnormal_vertex:fm,morphtarget_pars_vertex:mm,morphtarget_vertex:pm,normal_fragment_begin:gm,normal_fragment_maps:ym,normal_pars_fragment:_m,normal_pars_vertex:Mm,normal_vertex:vm,normalmap_pars_fragment:bm,clearcoat_normal_fragment_begin:Sm,clearcoat_normal_fragment_maps:xm,clearcoat_pars_fragment:Em,iridescence_pars_fragment:Tm,opaque_fragment:Am,packing:Rm,premultiplied_alpha_fragment:wm,project_vertex:Pm,dithering_fragment:Dm,dithering_pars_fragment:Im,roughnessmap_fragment:Lm,roughnessmap_pars_fragment:Cm,shadowmap_pars_fragment:Um,shadowmap_pars_vertex:Nm,shadowmap_vertex:Fm,shadowmask_pars_fragment:km,skinbase_vertex:Om,skinning_pars_vertex:zm,skinning_vertex:Bm,skinnormal_vertex:Gm,specularmap_fragment:Vm,specularmap_pars_fragment:Hm,tonemapping_fragment:Wm,tonemapping_pars_fragment:Xm,transmission_fragment:qm,transmission_pars_fragment:Ym,uv_pars_fragment:$m,uv_pars_vertex:jm,uv_vertex:Km,worldpos_vertex:Zm,background_vert:Jm,background_frag:Qm,backgroundCube_vert:ep,backgroundCube_frag:tp,cube_vert:np,cube_frag:ip,depth_vert:sp,depth_frag:rp,distanceRGBA_vert:op,distanceRGBA_frag:ap,equirect_vert:cp,equirect_frag:lp,linedashed_vert:hp,linedashed_frag:up,meshbasic_vert:dp,meshbasic_frag:fp,meshlambert_vert:mp,meshlambert_frag:pp,meshmatcap_vert:gp,meshmatcap_frag:yp,meshnormal_vert:_p,meshnormal_frag:Mp,meshphong_vert:vp,meshphong_frag:bp,meshphysical_vert:Sp,meshphysical_frag:xp,meshtoon_vert:Ep,meshtoon_frag:Tp,points_vert:Ap,points_frag:Rp,shadow_vert:wp,shadow_frag:Pp,sprite_vert:Dp,sprite_frag:Ip},oe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},envMapRotation:{value:new Ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},_n={basic:{uniforms:Vt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Vt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new He(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Vt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Vt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Vt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new He(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Vt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Vt([oe.points,oe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Vt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Vt([oe.common,oe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Vt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Vt([oe.sprite,oe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ce}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Vt([oe.common,oe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Vt([oe.lights,oe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};_n.physical={uniforms:Vt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Cr={r:0,b:0,g:0},pi=new gn,Lp=new rt;function Cp(n,e,t,i,s,r,o){const a=new He(0);let c=r===!0?0:1,l,h,d=null,u=0,f=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function y(v){let _=!1;const S=g(v);S===null?m(a,c):S&&S.isColor&&(m(S,1),_=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(v,_){const S=g(_);S&&(S.isCubeTexture||S.mapping===to)?(h===void 0&&(h=new we(new cn(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:ys(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),pi.copy(_.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Lp.makeRotationFromEuler(pi)),h.material.toneMapped=Ye.getTransfer(S.colorSpace)!==et,(d!==S||u!==S.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=S,u=S.version,f=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new we(new si(2,2),new ai({name:"BackgroundMaterial",uniforms:ys(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(S.colorSpace)!==et,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||u!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=S,u=S.version,f=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,_){v.getRGB(Cr,ah(n)),i.buffers.color.setClear(Cr.r,Cr.g,Cr.b,_,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),c=_,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,m(a,c)},render:y,addToRenderList:p,dispose:M}}function Up(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(E,I,F,O,G){let V=!1;const H=d(O,F,I);r!==H&&(r=H,l(r.object)),V=f(E,O,F,G),V&&g(E,O,F,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,_(E,I,F,O),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return n.createVertexArray()}function l(E){return n.bindVertexArray(E)}function h(E){return n.deleteVertexArray(E)}function d(E,I,F){const O=F.wireframe===!0;let G=i[E.id];G===void 0&&(G={},i[E.id]=G);let V=G[I.id];V===void 0&&(V={},G[I.id]=V);let H=V[O];return H===void 0&&(H=u(c()),V[O]=H),H}function u(E){const I=[],F=[],O=[];for(let G=0;G<t;G++)I[G]=0,F[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:O,object:E,attributes:{},index:null}}function f(E,I,F,O){const G=r.attributes,V=I.attributes;let H=0;const $=F.getAttributes();for(const W in $)if($[W].location>=0){const se=G[W];let pe=V[W];if(pe===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(pe=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(pe=E.instanceColor)),se===void 0||se.attribute!==pe||pe&&se.data!==pe.data)return!0;H++}return r.attributesNum!==H||r.index!==O}function g(E,I,F,O){const G={},V=I.attributes;let H=0;const $=F.getAttributes();for(const W in $)if($[W].location>=0){let se=V[W];se===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(se=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(se=E.instanceColor));const pe={};pe.attribute=se,se&&se.data&&(pe.data=se.data),G[W]=pe,H++}r.attributes=G,r.attributesNum=H,r.index=O}function y(){const E=r.newAttributes;for(let I=0,F=E.length;I<F;I++)E[I]=0}function p(E){m(E,0)}function m(E,I){const F=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;F[E]=1,O[E]===0&&(n.enableVertexAttribArray(E),O[E]=1),G[E]!==I&&(n.vertexAttribDivisor(E,I),G[E]=I)}function M(){const E=r.newAttributes,I=r.enabledAttributes;for(let F=0,O=I.length;F<O;F++)I[F]!==E[F]&&(n.disableVertexAttribArray(F),I[F]=0)}function v(E,I,F,O,G,V,H){H===!0?n.vertexAttribIPointer(E,I,F,G,V):n.vertexAttribPointer(E,I,F,O,G,V)}function _(E,I,F,O){y();const G=O.attributes,V=F.getAttributes(),H=I.defaultAttributeValues;for(const $ in V){const W=V[$];if(W.location>=0){let ie=G[$];if(ie===void 0&&($==="instanceMatrix"&&E.instanceMatrix&&(ie=E.instanceMatrix),$==="instanceColor"&&E.instanceColor&&(ie=E.instanceColor)),ie!==void 0){const se=ie.normalized,pe=ie.itemSize,Ie=e.get(ie);if(Ie===void 0)continue;const Fe=Ie.buffer,nt=Ie.type,$e=Ie.bytesPerElement,Y=nt===n.INT||nt===n.UNSIGNED_INT||ie.gpuType===Ka;if(ie.isInterleavedBufferAttribute){const Z=ie.data,de=Z.stride,Le=ie.offset;if(Z.isInstancedInterleavedBuffer){for(let Se=0;Se<W.locationSize;Se++)m(W.location+Se,Z.meshPerAttribute);E.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Se=0;Se<W.locationSize;Se++)p(W.location+Se);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let Se=0;Se<W.locationSize;Se++)v(W.location+Se,pe/W.locationSize,nt,se,de*$e,(Le+pe/W.locationSize*Se)*$e,Y)}else{if(ie.isInstancedBufferAttribute){for(let Z=0;Z<W.locationSize;Z++)m(W.location+Z,ie.meshPerAttribute);E.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Z=0;Z<W.locationSize;Z++)p(W.location+Z);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let Z=0;Z<W.locationSize;Z++)v(W.location+Z,pe/W.locationSize,nt,se,pe*$e,pe/W.locationSize*Z*$e,Y)}}else if(H!==void 0){const se=H[$];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(W.location,se);break;case 3:n.vertexAttrib3fv(W.location,se);break;case 4:n.vertexAttrib4fv(W.location,se);break;default:n.vertexAttrib1fv(W.location,se)}}}}M()}function S(){D();for(const E in i){const I=i[E];for(const F in I){const O=I[F];for(const G in O)h(O[G].object),delete O[G];delete I[F]}delete i[E]}}function A(E){if(i[E.id]===void 0)return;const I=i[E.id];for(const F in I){const O=I[F];for(const G in O)h(O[G].object),delete O[G];delete I[F]}delete i[E.id]}function R(E){for(const I in i){const F=i[I];if(F[E.id]===void 0)continue;const O=F[E.id];for(const G in O)h(O[G].object),delete O[G];delete F[E.id]}}function D(){x(),o=!0,r!==s&&(r=s,l(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:x,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:p,disableUnusedAttributes:M}}function Np(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,d){d!==0&&(n.drawArraysInstanced(i,l,h,d),t.update(h,i,d))}function a(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,i,1)}function c(l,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,u,0,d);let g=0;for(let y=0;y<d;y++)g+=h[y]*u[y];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Fp(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==mn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==En&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==vn&&!D)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:S,maxSamples:A}}function kp(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new $n,a=new Ce,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{const M=r?0:i,v=M*4;let _=m.clippingState||null;c.value=_,_=h(g,u,v,f);for(let S=0;S!==v;++S)_[S]=t[S];m.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=c.value,g!==!0||p===null){const m=f+y*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,_=f;v!==y;++v,_+=4)o.copy(d[v]).applyMatrix4(M,a),o.normal.toArray(p,_),p[_+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function Op(n){let e=new WeakMap;function t(o,a){return a===la?o.mapping=fs:a===ha&&(o.mapping=ms),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===la||a===ha)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Td(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const os=4,tl=[.125,.215,.35,.446,.526,.582],bi=20,Fo=new ph,nl=new He;let ko=null,Oo=0,zo=0,Bo=!1;const _i=(1+Math.sqrt(5))/2,Qi=1/_i,il=[new P(-_i,Qi,0),new P(_i,Qi,0),new P(-Qi,0,_i),new P(Qi,0,_i),new P(0,_i,-Qi),new P(0,_i,Qi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],zp=new P;class sl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=zp}=r;ko=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ko,Oo,zo),this._renderer.xr.enabled=Bo,e.scissorTest=!1,Ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ko=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:tr,format:mn,colorSpace:ps,depthBuffer:!1},s=rl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rl(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bp(r)),this._blurMaterial=Gp(r,e,t)}return s}_compileMaterial(e){const t=new we(this._lodPlanes[0],e);this._renderer.compile(t,Fo)}_sceneToCubeUV(e,t,i,s,r){const c=new on(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(nl),d.toneMapping=ii,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const y=new gs({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),p=new we(new cn,y);let m=!1;const M=e.background;M?M.isColor&&(y.color.copy(M),e.background=null,m=!0):(y.color.copy(nl),m=!0);for(let v=0;v<6;v++){const _=v%3;_===0?(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[v],r.y,r.z)):_===1?(c.up.set(0,0,l[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[v],r.z)):(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[v]));const S=this._cubeSize;Ur(s,_*S,v>2?S:0,S,S),d.setRenderTarget(s),m&&d.render(p,c),d.render(e,c)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===fs||e.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=al()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ol());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new we(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Ur(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Fo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=il[(s-r-1)%il.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new we(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*bi-1),y=r/g,p=isFinite(r)?1+Math.floor(h*y):bi;p>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${bi}`);const m=[];let M=0;for(let R=0;R<bi;++R){const D=R/y,x=Math.exp(-D*D/2);m.push(x),R===0?M+=x:R<p&&(M+=2*x)}for(let R=0;R<m.length;R++)m[R]=m[R]/M;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-i;const _=this._sizeLods[s],S=3*_*(s>v-os?s-v+os:0),A=4*(this._cubeSize-_);Ur(t,S,A,3*_,2*_),c.setRenderTarget(t),c.render(d,Fo)}}function Bp(n){const e=[],t=[],i=[];let s=n;const r=n-os+1+tl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-os?c=tl[o-n+os-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,y=3,p=2,m=1,M=new Float32Array(y*g*f),v=new Float32Array(p*g*f),_=new Float32Array(m*g*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,D=A>2?0:-1,x=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];M.set(x,y*g*A),v.set(u,p*g*A);const E=[A,A,A,A,A,A];_.set(E,m*g*A)}const S=new zt;S.setAttribute("position",new Pt(M,y)),S.setAttribute("uv",new Pt(v,p)),S.setAttribute("faceIndex",new Pt(_,m)),e.push(S),s>os&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function rl(n,e,t){const i=new Di(n,e,t);return i.texture.mapping=to,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ur(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Gp(n,e,t){const i=new Float32Array(bi),s=new P(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function ol(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function al(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function cc(){return`

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
	`}function Vp(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===la||c===ha,h=c===fs||c===ms;if(l||h){let d=e.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new sl(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new sl(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Hp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&$s("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Wp(n,e,t,i){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)e.update(u[f],n.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,g=d.attributes.position;let y=0;if(f!==null){const M=f.array;y=f.version;for(let v=0,_=M.length;v<_;v+=3){const S=M[v+0],A=M[v+1],R=M[v+2];u.push(S,A,A,R,R,S)}}else if(g!==void 0){const M=g.array;y=g.version;for(let v=0,_=M.length/3-1;v<_;v+=3){const S=v+0,A=v+1,R=v+2;u.push(S,A,A,R,R,S)}}else return;const p=new(nh(u)?oh:rh)(u,1);p.version=y;const m=r.get(d);m&&e.remove(m),r.set(d,p)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Xp(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){n.drawElements(i,f,r,u*o),t.update(f,i,1)}function l(u,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,u*o,g),t.update(f,i,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,i,1)}function d(u,f,g,y){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)l(u[m]/o,f[m],y[m]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,y,0,g);let m=0;for(let M=0;M<g;M++)m+=f[M]*y[M];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function qp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Yp(n,e,t){const i=new WeakMap,s=new ft;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let x=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",x)};u!==void 0&&u.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;f===!0&&(v=1),g===!0&&(v=2),y===!0&&(v=3);let _=a.attributes.position.count*v,S=1;_>e.maxTextureSize&&(S=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const A=new Float32Array(_*S*4*d),R=new ih(A,_,S,d);R.type=vn,R.needsUpdate=!0;const D=v*4;for(let E=0;E<d;E++){const I=p[E],F=m[E],O=M[E],G=_*S*4*E;for(let V=0;V<I.count;V++){const H=V*D;f===!0&&(s.fromBufferAttribute(I,V),A[G+H+0]=s.x,A[G+H+1]=s.y,A[G+H+2]=s.z,A[G+H+3]=0),g===!0&&(s.fromBufferAttribute(F,V),A[G+H+4]=s.x,A[G+H+5]=s.y,A[G+H+6]=s.z,A[G+H+7]=0),y===!0&&(s.fromBufferAttribute(O,V),A[G+H+8]=s.x,A[G+H+9]=s.y,A[G+H+10]=s.z,A[G+H+11]=O.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new xe(_,S)},i.set(a,u),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function $p(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const yh=new bt,cl=new dh(1,1),_h=new ih,Mh=new cd,vh=new lh,ll=[],hl=[],ul=new Float32Array(16),dl=new Float32Array(9),fl=new Float32Array(4);function vs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=ll[s];if(r===void 0&&(r=new Float32Array(s),ll[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function io(n,e){let t=hl[e];t===void 0&&(t=new Int32Array(e),hl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function jp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Kp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),xt(t,e)}}function Zp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),xt(t,e)}}function Jp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),xt(t,e)}}function Qp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(St(t,i))return;fl.set(i),n.uniformMatrix2fv(this.addr,!1,fl),xt(t,i)}}function eg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(St(t,i))return;dl.set(i),n.uniformMatrix3fv(this.addr,!1,dl),xt(t,i)}}function tg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(St(t,i))return;ul.set(i),n.uniformMatrix4fv(this.addr,!1,ul),xt(t,i)}}function ng(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),xt(t,e)}}function sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),xt(t,e)}}function rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),xt(t,e)}}function og(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),xt(t,e)}}function cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),xt(t,e)}}function lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),xt(t,e)}}function hg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(cl.compareFunction=th,r=cl):r=yh,t.setTexture2D(e||r,s)}function ug(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Mh,s)}function dg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||vh,s)}function fg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||_h,s)}function mg(n){switch(n){case 5126:return jp;case 35664:return Kp;case 35665:return Zp;case 35666:return Jp;case 35674:return Qp;case 35675:return eg;case 35676:return tg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return og;case 36294:return ag;case 36295:return cg;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return fg}}function pg(n,e){n.uniform1fv(this.addr,e)}function gg(n,e){const t=vs(e,this.size,2);n.uniform2fv(this.addr,t)}function yg(n,e){const t=vs(e,this.size,3);n.uniform3fv(this.addr,t)}function _g(n,e){const t=vs(e,this.size,4);n.uniform4fv(this.addr,t)}function Mg(n,e){const t=vs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function vg(n,e){const t=vs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function bg(n,e){const t=vs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Sg(n,e){n.uniform1iv(this.addr,e)}function xg(n,e){n.uniform2iv(this.addr,e)}function Eg(n,e){n.uniform3iv(this.addr,e)}function Tg(n,e){n.uniform4iv(this.addr,e)}function Ag(n,e){n.uniform1uiv(this.addr,e)}function Rg(n,e){n.uniform2uiv(this.addr,e)}function wg(n,e){n.uniform3uiv(this.addr,e)}function Pg(n,e){n.uniform4uiv(this.addr,e)}function Dg(n,e,t){const i=this.cache,s=e.length,r=io(t,s);St(i,r)||(n.uniform1iv(this.addr,r),xt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||yh,r[o])}function Ig(n,e,t){const i=this.cache,s=e.length,r=io(t,s);St(i,r)||(n.uniform1iv(this.addr,r),xt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Mh,r[o])}function Lg(n,e,t){const i=this.cache,s=e.length,r=io(t,s);St(i,r)||(n.uniform1iv(this.addr,r),xt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||vh,r[o])}function Cg(n,e,t){const i=this.cache,s=e.length,r=io(t,s);St(i,r)||(n.uniform1iv(this.addr,r),xt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||_h,r[o])}function Ug(n){switch(n){case 5126:return pg;case 35664:return gg;case 35665:return yg;case 35666:return _g;case 35674:return Mg;case 35675:return vg;case 35676:return bg;case 5124:case 35670:return Sg;case 35667:case 35671:return xg;case 35668:case 35672:return Eg;case 35669:case 35673:return Tg;case 5125:return Ag;case 36294:return Rg;case 36295:return wg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Cg}}class Ng{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=mg(t.type)}}class Fg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ug(t.type)}}class kg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Go=/(\w+)(\])?(\[|\.)?/g;function ml(n,e){n.seq.push(e),n.map[e.id]=e}function Og(n,e,t){const i=n.name,s=i.length;for(Go.lastIndex=0;;){const r=Go.exec(i),o=Go.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ml(t,l===void 0?new Ng(a,n,e):new Fg(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new kg(a),ml(t,d)),t=d}}}class qr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Og(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function pl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const zg=37297;let Bg=0;function Gg(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const gl=new Ce;function Vg(n){Ye._getMatrix(gl,Ye.workingColorSpace,n);const e=`mat3( ${gl.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(n)){case Yr:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function yl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Gg(n.getShaderSource(e),a)}else return r}function Hg(n,e){const t=Vg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Wg(n,e){let t;switch(e){case bu:t="Linear";break;case Su:t="Reinhard";break;case xu:t="Cineon";break;case Eu:t="ACESFilmic";break;case Au:t="AgX";break;case Ru:t="Neutral";break;case Tu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Nr=new P;function Xg(){Ye.getLuminanceCoefficients(Nr);const n=Nr.x.toFixed(4),e=Nr.y.toFixed(4),t=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function Yg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $g(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Us(n){return n!==""}function _l(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ml(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(n){return n.replace(jg,Zg)}const Kg=new Map;function Zg(n,e){let t=ze[e];if(t===void 0){const i=Kg.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wa(t)}const Jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vl(n){return n.replace(Jg,Qg)}function Qg(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bl(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function e0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===eu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ln&&(e="SHADOWMAP_TYPE_VSM"),e}function t0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fs:case ms:e="ENVMAP_TYPE_CUBE";break;case to:e="ENVMAP_TYPE_CUBE_UV";break}return e}function n0(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ms&&(e="ENVMAP_MODE_REFRACTION"),e}function i0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ja:e="ENVMAP_BLENDING_MULTIPLY";break;case Mu:e="ENVMAP_BLENDING_MIX";break;case vu:e="ENVMAP_BLENDING_ADD";break}return e}function s0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function r0(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=e0(t),l=t0(t),h=n0(t),d=i0(t),u=s0(t),f=qg(t),g=Yg(r),y=s.createProgram();let p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Us).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Us).join(`
`),m.length>0&&(m+=`
`)):(p=[bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),m=[bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?ze.tonemapping_pars_fragment:"",t.toneMapping!==ii?Wg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Hg("linearToOutputTexel",t.outputColorSpace),Xg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Us).join(`
`)),o=Wa(o),o=_l(o,t),o=Ml(o,t),a=Wa(a),a=_l(a,t),a=Ml(a,t),o=vl(o),a=vl(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=M+p+o,_=M+m+a,S=pl(s,s.VERTEX_SHADER,v),A=pl(s,s.FRAGMENT_SHADER,_);s.attachShader(y,S),s.attachShader(y,A),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(I){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(y)||"",O=s.getShaderInfoLog(S)||"",G=s.getShaderInfoLog(A)||"",V=F.trim(),H=O.trim(),$=G.trim();let W=!0,ie=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,S,A);else{const se=yl(s,S,"vertex"),pe=yl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+se+`
`+pe)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||$==="")&&(ie=!1);ie&&(I.diagnostics={runnable:W,programLog:V,vertexShader:{log:H,prefix:p},fragmentShader:{log:$,prefix:m}})}s.deleteShader(S),s.deleteShader(A),D=new qr(s,y),x=$g(s,y)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(y,zg)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bg++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=A,this}let o0=0;class a0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new c0(e),t.set(e,i)),i}}class c0{constructor(e){this.id=o0++,this.code=e,this.usedTimes=0}}function l0(n,e,t,i,s,r,o){const a=new rc,c=new a0,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,E,I,F,O){const G=F.fog,V=O.geometry,H=x.isMeshStandardMaterial?F.environment:null,$=(x.isMeshStandardMaterial?t:e).get(x.envMap||H),W=$&&$.mapping===to?$.image.height:null,ie=g[x.type];x.precision!==null&&(f=s.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const se=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,pe=se!==void 0?se.length:0;let Ie=0;V.morphAttributes.position!==void 0&&(Ie=1),V.morphAttributes.normal!==void 0&&(Ie=2),V.morphAttributes.color!==void 0&&(Ie=3);let Fe,nt,$e,Y;if(ie){const je=_n[ie];Fe=je.vertexShader,nt=je.fragmentShader}else Fe=x.vertexShader,nt=x.fragmentShader,c.update(x),$e=c.getVertexShaderID(x),Y=c.getFragmentShaderID(x);const Z=n.getRenderTarget(),de=n.state.buffers.depth.getReversed(),Le=O.isInstancedMesh===!0,Se=O.isBatchedMesh===!0,We=!!x.map,Nt=!!x.matcap,L=!!$,ct=!!x.aoMap,Ne=!!x.lightMap,Pe=!!x.bumpMap,ge=!!x.normalMap,lt=!!x.displacementMap,ye=!!x.emissiveMap,Oe=!!x.metalnessMap,Et=!!x.roughnessMap,mt=x.anisotropy>0,w=x.clearcoat>0,b=x.dispersion>0,k=x.iridescence>0,q=x.sheen>0,K=x.transmission>0,X=mt&&!!x.anisotropyMap,be=w&&!!x.clearcoatMap,ne=w&&!!x.clearcoatNormalMap,_e=w&&!!x.clearcoatRoughnessMap,Me=k&&!!x.iridescenceMap,ee=k&&!!x.iridescenceThicknessMap,le=q&&!!x.sheenColorMap,Re=q&&!!x.sheenRoughnessMap,ve=!!x.specularMap,ae=!!x.specularColorMap,ke=!!x.specularIntensityMap,C=K&&!!x.transmissionMap,te=K&&!!x.thicknessMap,re=!!x.gradientMap,ue=!!x.alphaMap,J=x.alphaTest>0,j=!!x.alphaHash,me=!!x.extensions;let Ue=ii;x.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ue=n.toneMapping);const ot={shaderID:ie,shaderType:x.type,shaderName:x.name,vertexShader:Fe,fragmentShader:nt,defines:x.defines,customVertexShaderID:$e,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Se,batchingColor:Se&&O._colorsTexture!==null,instancing:Le,instancingColor:Le&&O.instanceColor!==null,instancingMorph:Le&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ps,alphaToCoverage:!!x.alphaToCoverage,map:We,matcap:Nt,envMap:L,envMapMode:L&&$.mapping,envMapCubeUVHeight:W,aoMap:ct,lightMap:Ne,bumpMap:Pe,normalMap:ge,displacementMap:u&&lt,emissiveMap:ye,normalMapObjectSpace:ge&&x.normalMapType===Iu,normalMapTangentSpace:ge&&x.normalMapType===eh,metalnessMap:Oe,roughnessMap:Et,anisotropy:mt,anisotropyMap:X,clearcoat:w,clearcoatMap:be,clearcoatNormalMap:ne,clearcoatRoughnessMap:_e,dispersion:b,iridescence:k,iridescenceMap:Me,iridescenceThicknessMap:ee,sheen:q,sheenColorMap:le,sheenRoughnessMap:Re,specularMap:ve,specularColorMap:ae,specularIntensityMap:ke,transmission:K,transmissionMap:C,thicknessMap:te,gradientMap:re,opaque:x.transparent===!1&&x.blending===cs&&x.alphaToCoverage===!1,alphaMap:ue,alphaTest:J,alphaHash:j,combine:x.combine,mapUv:We&&y(x.map.channel),aoMapUv:ct&&y(x.aoMap.channel),lightMapUv:Ne&&y(x.lightMap.channel),bumpMapUv:Pe&&y(x.bumpMap.channel),normalMapUv:ge&&y(x.normalMap.channel),displacementMapUv:lt&&y(x.displacementMap.channel),emissiveMapUv:ye&&y(x.emissiveMap.channel),metalnessMapUv:Oe&&y(x.metalnessMap.channel),roughnessMapUv:Et&&y(x.roughnessMap.channel),anisotropyMapUv:X&&y(x.anisotropyMap.channel),clearcoatMapUv:be&&y(x.clearcoatMap.channel),clearcoatNormalMapUv:ne&&y(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&y(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&y(x.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&y(x.iridescenceThicknessMap.channel),sheenColorMapUv:le&&y(x.sheenColorMap.channel),sheenRoughnessMapUv:Re&&y(x.sheenRoughnessMap.channel),specularMapUv:ve&&y(x.specularMap.channel),specularColorMapUv:ae&&y(x.specularColorMap.channel),specularIntensityMapUv:ke&&y(x.specularIntensityMap.channel),transmissionMapUv:C&&y(x.transmissionMap.channel),thicknessMapUv:te&&y(x.thicknessMap.channel),alphaMapUv:ue&&y(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ge||mt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(We||ue),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:de,skinning:O.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Ie,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:We&&x.map.isVideoTexture===!0&&Ye.getTransfer(x.map.colorSpace)===et,decodeVideoTextureEmissive:ye&&x.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(x.emissiveMap.colorSpace)===et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ct,flipSided:x.side===Wt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:me&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&x.extensions.multiDraw===!0||Se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function m(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)E.push(I),E.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(M(E,x),v(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function M(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function v(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),x.push(a.mask)}function _(x){const E=g[x.type];let I;if(E){const F=_n[E];I=bd.clone(F.uniforms)}else I=x.uniforms;return I}function S(x,E){let I;for(let F=0,O=h.length;F<O;F++){const G=h[F];if(G.cacheKey===E){I=G,++I.usedTimes;break}}return I===void 0&&(I=new r0(n,E,x,r),h.push(I)),I}function A(x){if(--x.usedTimes===0){const E=h.indexOf(x);h[E]=h[h.length-1],h.pop(),x.destroy()}}function R(x){c.remove(x)}function D(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:_,acquireProgram:S,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:D}}function h0(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function u0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Sl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xl(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,u,f,g,y,p){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:y,group:p},n[e]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=y,m.group=p),e++,m}function a(d,u,f,g,y,p){const m=o(d,u,f,g,y,p);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):t.push(m)}function c(d,u,f,g,y,p){const m=o(d,u,f,g,y,p);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function l(d,u){t.length>1&&t.sort(d||u0),i.length>1&&i.sort(u||Sl),s.length>1&&s.sort(u||Sl)}function h(){for(let d=e,u=n.length;d<u;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function d0(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new xl,n.set(i,[o])):s>=r.length?(o=new xl,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function f0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new He};break;case"SpotLight":t={position:new P,direction:new P,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function m0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let p0=0;function g0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function y0(n){const e=new f0,t=m0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);const s=new P,r=new rt,o=new rt;function a(l){let h=0,d=0,u=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let f=0,g=0,y=0,p=0,m=0,M=0,v=0,_=0,S=0,A=0,R=0;l.sort(g0);for(let x=0,E=l.length;x<E;x++){const I=l[x],F=I.color,O=I.intensity,G=I.distance,V=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=F.r*O,d+=F.g*O,u+=F.b*O;else if(I.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(I.sh.coefficients[H],O);R++}else if(I.isDirectionalLight){const H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const $=I.shadow,W=t.get(I);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.directionalShadow[f]=W,i.directionalShadowMap[f]=V,i.directionalShadowMatrix[f]=I.shadow.matrix,M++}i.directional[f]=H,f++}else if(I.isSpotLight){const H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(F).multiplyScalar(O),H.distance=G,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,i.spot[y]=H;const $=I.shadow;if(I.map&&(i.spotLightMap[S]=I.map,S++,$.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[y]=$.matrix,I.castShadow){const W=t.get(I);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.spotShadow[y]=W,i.spotShadowMap[y]=V,_++}y++}else if(I.isRectAreaLight){const H=e.get(I);H.color.copy(F).multiplyScalar(O),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),i.rectArea[p]=H,p++}else if(I.isPointLight){const H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){const $=I.shadow,W=t.get(I);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=I.shadow.matrix,v++}i.point[g]=H,g++}else if(I.isHemisphereLight){const H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(O),H.groundColor.copy(I.groundColor).multiplyScalar(O),i.hemi[m]=H,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const D=i.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==y||D.rectAreaLength!==p||D.hemiLength!==m||D.numDirectionalShadows!==M||D.numPointShadows!==v||D.numSpotShadows!==_||D.numSpotMaps!==S||D.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=_+S-A,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,D.directionalLength=f,D.pointLength=g,D.spotLength=y,D.rectAreaLength=p,D.hemiLength=m,D.numDirectionalShadows=M,D.numPointShadows=v,D.numSpotShadows=_,D.numSpotMaps=S,D.numLightProbes=R,i.version=p0++)}function c(l,h){let d=0,u=0,f=0,g=0,y=0;const p=h.matrixWorldInverse;for(let m=0,M=l.length;m<M;m++){const v=l[m];if(v.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),d++}else if(v.isSpotLight){const _=i.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),f++}else if(v.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const _=i.point[u];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(p),u++}else if(v.isHemisphereLight){const _=i.hemi[y];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(p),y++}}}return{setup:a,setupView:c,state:i}}function El(n){const e=new y0(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function _0(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new El(n),e.set(s,[a])):r>=o.length?(a=new El(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const M0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v0=`uniform sampler2D shadow_pass;
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
}`;function b0(n,e,t){let i=new oc;const s=new xe,r=new xe,o=new ft,a=new Od({depthPacking:Du}),c=new zd,l={},h=t.maxTextureSize,d={[xn]:Wt,[Wt]:xn,[Ct]:Ct},u=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:M0,fragmentShader:v0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new zt;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new we(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xl;let m=this.type;this.render=function(A,R,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const x=n.getRenderTarget(),E=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ni),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=m!==Ln&&this.type===Ln,G=m===Ln&&this.type!==Ln;for(let V=0,H=A.length;V<H;V++){const $=A[V],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ie=W.getFrameExtents();if(s.multiply(ie),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,W.mapSize.y=r.y)),W.map===null||O===!0||G===!0){const pe=this.type!==Ln?{minFilter:It,magFilter:It}:{};W.map!==null&&W.map.dispose(),W.map=new Di(s.x,s.y,pe),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const se=W.getViewportCount();for(let pe=0;pe<se;pe++){const Ie=W.getViewport(pe);o.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),F.viewport(o),W.updateMatrices($,pe),i=W.getFrustum(),_(R,D,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===Ln&&M(W,D),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(x,E,I)};function M(A,R){const D=e.update(y);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Di(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,D,u,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,D,f,y,null)}function v(A,R,D,x){let E=null;const I=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)E=I;else if(E=D.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=E.uuid,O=R.uuid;let G=l[F];G===void 0&&(G={},l[F]=G);let V=G[O];V===void 0&&(V=E.clone(),G[O]=V,R.addEventListener("dispose",S)),E=V}if(E.visible=R.visible,E.wireframe=R.wireframe,x===Ln?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:d[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const F=n.properties.get(E);F.light=D}return E}function _(A,R,D,x,E){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===Ln)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const O=e.update(A),G=A.material;if(Array.isArray(G)){const V=O.groups;for(let H=0,$=V.length;H<$;H++){const W=V[H],ie=G[W.materialIndex];if(ie&&ie.visible){const se=v(A,ie,x,E);A.onBeforeShadow(n,A,R,D,O,se,W),n.renderBufferDirect(D,null,O,se,A,W),A.onAfterShadow(n,A,R,D,O,se,W)}}}else if(G.visible){const V=v(A,G,x,E);A.onBeforeShadow(n,A,R,D,O,V,null),n.renderBufferDirect(D,null,O,V,A,null),A.onAfterShadow(n,A,R,D,O,V,null)}}const F=A.children;for(let O=0,G=F.length;O<G;O++)_(F[O],R,D,x,E)}function S(A){A.target.removeEventListener("dispose",S);for(const D in l){const x=l[D],E=A.target.uuid;E in x&&(x[E].dispose(),delete x[E])}}}const S0={[na]:ia,[sa]:aa,[ra]:ca,[ds]:oa,[ia]:na,[aa]:sa,[ca]:ra,[oa]:ds};function x0(n,e){function t(){let C=!1;const te=new ft;let re=null;const ue=new ft(0,0,0,0);return{setMask:function(J){re!==J&&!C&&(n.colorMask(J,J,J,J),re=J)},setLocked:function(J){C=J},setClear:function(J,j,me,Ue,ot){ot===!0&&(J*=Ue,j*=Ue,me*=Ue),te.set(J,j,me,Ue),ue.equals(te)===!1&&(n.clearColor(J,j,me,Ue),ue.copy(te))},reset:function(){C=!1,re=null,ue.set(-1,0,0,0)}}}function i(){let C=!1,te=!1,re=null,ue=null,J=null;return{setReversed:function(j){if(te!==j){const me=e.get("EXT_clip_control");j?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),te=j;const Ue=J;J=null,this.setClear(Ue)}},getReversed:function(){return te},setTest:function(j){j?Z(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(j){re!==j&&!C&&(n.depthMask(j),re=j)},setFunc:function(j){if(te&&(j=S0[j]),ue!==j){switch(j){case na:n.depthFunc(n.NEVER);break;case ia:n.depthFunc(n.ALWAYS);break;case sa:n.depthFunc(n.LESS);break;case ds:n.depthFunc(n.LEQUAL);break;case ra:n.depthFunc(n.EQUAL);break;case oa:n.depthFunc(n.GEQUAL);break;case aa:n.depthFunc(n.GREATER);break;case ca:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=j}},setLocked:function(j){C=j},setClear:function(j){J!==j&&(te&&(j=1-j),n.clearDepth(j),J=j)},reset:function(){C=!1,re=null,ue=null,J=null,te=!1}}}function s(){let C=!1,te=null,re=null,ue=null,J=null,j=null,me=null,Ue=null,ot=null;return{setTest:function(je){C||(je?Z(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(je){te!==je&&!C&&(n.stencilMask(je),te=je)},setFunc:function(je,Tn,yn){(re!==je||ue!==Tn||J!==yn)&&(n.stencilFunc(je,Tn,yn),re=je,ue=Tn,J=yn)},setOp:function(je,Tn,yn){(j!==je||me!==Tn||Ue!==yn)&&(n.stencilOp(je,Tn,yn),j=je,me=Tn,Ue=yn)},setLocked:function(je){C=je},setClear:function(je){ot!==je&&(n.clearStencil(je),ot=je)},reset:function(){C=!1,te=null,re=null,ue=null,J=null,j=null,me=null,Ue=null,ot=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,y=!1,p=null,m=null,M=null,v=null,_=null,S=null,A=null,R=new He(0,0,0),D=0,x=!1,E=null,I=null,F=null,O=null,G=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=$>=2);let ie=null,se={};const pe=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),Fe=new ft().fromArray(pe),nt=new ft().fromArray(Ie);function $e(C,te,re,ue){const J=new Uint8Array(4),j=n.createTexture();n.bindTexture(C,j),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let me=0;me<re;me++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(te+me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return j}const Y={};Y[n.TEXTURE_2D]=$e(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=$e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=$e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=$e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(n.DEPTH_TEST),o.setFunc(ds),Pe(!1),ge(yc),Z(n.CULL_FACE),ct(ni);function Z(C){h[C]!==!0&&(n.enable(C),h[C]=!0)}function de(C){h[C]!==!1&&(n.disable(C),h[C]=!1)}function Le(C,te){return d[C]!==te?(n.bindFramebuffer(C,te),d[C]=te,C===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=te),C===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=te),!0):!1}function Se(C,te){let re=f,ue=!1;if(C){re=u.get(te),re===void 0&&(re=[],u.set(te,re));const J=C.textures;if(re.length!==J.length||re[0]!==n.COLOR_ATTACHMENT0){for(let j=0,me=J.length;j<me;j++)re[j]=n.COLOR_ATTACHMENT0+j;re.length=J.length,ue=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,ue=!0);ue&&n.drawBuffers(re)}function We(C){return g!==C?(n.useProgram(C),g=C,!0):!1}const Nt={[vi]:n.FUNC_ADD,[nu]:n.FUNC_SUBTRACT,[iu]:n.FUNC_REVERSE_SUBTRACT};Nt[su]=n.MIN,Nt[ru]=n.MAX;const L={[ou]:n.ZERO,[au]:n.ONE,[cu]:n.SRC_COLOR,[ea]:n.SRC_ALPHA,[mu]:n.SRC_ALPHA_SATURATE,[du]:n.DST_COLOR,[hu]:n.DST_ALPHA,[lu]:n.ONE_MINUS_SRC_COLOR,[ta]:n.ONE_MINUS_SRC_ALPHA,[fu]:n.ONE_MINUS_DST_COLOR,[uu]:n.ONE_MINUS_DST_ALPHA,[pu]:n.CONSTANT_COLOR,[gu]:n.ONE_MINUS_CONSTANT_COLOR,[yu]:n.CONSTANT_ALPHA,[_u]:n.ONE_MINUS_CONSTANT_ALPHA};function ct(C,te,re,ue,J,j,me,Ue,ot,je){if(C===ni){y===!0&&(de(n.BLEND),y=!1);return}if(y===!1&&(Z(n.BLEND),y=!0),C!==tu){if(C!==p||je!==x){if((m!==vi||_!==vi)&&(n.blendEquation(n.FUNC_ADD),m=vi,_=vi),je)switch(C){case cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _c:n.blendFunc(n.ONE,n.ONE);break;case Mc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _c:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Mc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}M=null,v=null,S=null,A=null,R.set(0,0,0),D=0,p=C,x=je}return}J=J||te,j=j||re,me=me||ue,(te!==m||J!==_)&&(n.blendEquationSeparate(Nt[te],Nt[J]),m=te,_=J),(re!==M||ue!==v||j!==S||me!==A)&&(n.blendFuncSeparate(L[re],L[ue],L[j],L[me]),M=re,v=ue,S=j,A=me),(Ue.equals(R)===!1||ot!==D)&&(n.blendColor(Ue.r,Ue.g,Ue.b,ot),R.copy(Ue),D=ot),p=C,x=!1}function Ne(C,te){C.side===Ct?de(n.CULL_FACE):Z(n.CULL_FACE);let re=C.side===Wt;te&&(re=!re),Pe(re),C.blending===cs&&C.transparent===!1?ct(ni):ct(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);const ue=C.stencilWrite;a.setTest(ue),ue&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),ye(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(C){E!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),E=C)}function ge(C){C!==Jh?(Z(n.CULL_FACE),C!==I&&(C===yc?n.cullFace(n.BACK):C===Qh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),I=C}function lt(C){C!==F&&(H&&n.lineWidth(C),F=C)}function ye(C,te,re){C?(Z(n.POLYGON_OFFSET_FILL),(O!==te||G!==re)&&(n.polygonOffset(te,re),O=te,G=re)):de(n.POLYGON_OFFSET_FILL)}function Oe(C){C?Z(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function Et(C){C===void 0&&(C=n.TEXTURE0+V-1),ie!==C&&(n.activeTexture(C),ie=C)}function mt(C,te,re){re===void 0&&(ie===null?re=n.TEXTURE0+V-1:re=ie);let ue=se[re];ue===void 0&&(ue={type:void 0,texture:void 0},se[re]=ue),(ue.type!==C||ue.texture!==te)&&(ie!==re&&(n.activeTexture(re),ie=re),n.bindTexture(C,te||Y[C]),ue.type=C,ue.texture=te)}function w(){const C=se[ie];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function b(){try{n.compressedTexImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function q(){try{n.texSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function K(){try{n.texSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function be(){try{n.compressedTexSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ne(){try{n.texStorage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{n.texStorage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Me(){try{n.texImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{n.texImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function le(C){Fe.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),Fe.copy(C))}function Re(C){nt.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),nt.copy(C))}function ve(C,te){let re=l.get(te);re===void 0&&(re=new WeakMap,l.set(te,re));let ue=re.get(C);ue===void 0&&(ue=n.getUniformBlockIndex(te,C.name),re.set(C,ue))}function ae(C,te){const ue=l.get(te).get(C);c.get(te)!==ue&&(n.uniformBlockBinding(te,ue,C.__bindingPointIndex),c.set(te,ue))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ie=null,se={},d={},u=new WeakMap,f=[],g=null,y=!1,p=null,m=null,M=null,v=null,_=null,S=null,A=null,R=new He(0,0,0),D=0,x=!1,E=null,I=null,F=null,O=null,G=null,Fe.set(0,0,n.canvas.width,n.canvas.height),nt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:de,bindFramebuffer:Le,drawBuffers:Se,useProgram:We,setBlending:ct,setMaterial:Ne,setFlipSided:Pe,setCullFace:ge,setLineWidth:lt,setPolygonOffset:ye,setScissorTest:Oe,activeTexture:Et,bindTexture:mt,unbindTexture:w,compressedTexImage2D:b,compressedTexImage3D:k,texImage2D:Me,texImage3D:ee,updateUBOMapping:ve,uniformBlockBinding:ae,texStorage2D:ne,texStorage3D:_e,texSubImage2D:q,texSubImage3D:K,compressedTexSubImage2D:X,compressedTexSubImage3D:be,scissor:le,viewport:Re,reset:ke}}function E0(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xe,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,b){return f?new OffscreenCanvas(w,b):Ys("canvas")}function y(w,b,k){let q=1;const K=mt(w);if((K.width>k||K.height>k)&&(q=k/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const X=Math.floor(q*K.width),be=Math.floor(q*K.height);d===void 0&&(d=g(X,be));const ne=b?g(X,be):d;return ne.width=X,ne.height=be,ne.getContext("2d").drawImage(w,0,0,X,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+be+")."),ne}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function p(w){return w.generateMipmaps}function m(w){n.generateMipmap(w)}function M(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(w,b,k,q,K=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let X=b;if(b===n.RED&&(k===n.FLOAT&&(X=n.R32F),k===n.HALF_FLOAT&&(X=n.R16F),k===n.UNSIGNED_BYTE&&(X=n.R8)),b===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(X=n.R8UI),k===n.UNSIGNED_SHORT&&(X=n.R16UI),k===n.UNSIGNED_INT&&(X=n.R32UI),k===n.BYTE&&(X=n.R8I),k===n.SHORT&&(X=n.R16I),k===n.INT&&(X=n.R32I)),b===n.RG&&(k===n.FLOAT&&(X=n.RG32F),k===n.HALF_FLOAT&&(X=n.RG16F),k===n.UNSIGNED_BYTE&&(X=n.RG8)),b===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(X=n.RG8UI),k===n.UNSIGNED_SHORT&&(X=n.RG16UI),k===n.UNSIGNED_INT&&(X=n.RG32UI),k===n.BYTE&&(X=n.RG8I),k===n.SHORT&&(X=n.RG16I),k===n.INT&&(X=n.RG32I)),b===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(X=n.RGB8UI),k===n.UNSIGNED_SHORT&&(X=n.RGB16UI),k===n.UNSIGNED_INT&&(X=n.RGB32UI),k===n.BYTE&&(X=n.RGB8I),k===n.SHORT&&(X=n.RGB16I),k===n.INT&&(X=n.RGB32I)),b===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),k===n.UNSIGNED_INT&&(X=n.RGBA32UI),k===n.BYTE&&(X=n.RGBA8I),k===n.SHORT&&(X=n.RGBA16I),k===n.INT&&(X=n.RGBA32I)),b===n.RGB&&(k===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),b===n.RGBA){const be=K?Yr:Ye.getTransfer(q);k===n.FLOAT&&(X=n.RGBA32F),k===n.HALF_FLOAT&&(X=n.RGBA16F),k===n.UNSIGNED_BYTE&&(X=be===et?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function _(w,b){let k;return w?b===null||b===Pi||b===Hs?k=n.DEPTH24_STENCIL8:b===vn?k=n.DEPTH32F_STENCIL8:b===Vs&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Pi||b===Hs?k=n.DEPTH_COMPONENT24:b===vn?k=n.DEPTH_COMPONENT32F:b===Vs&&(k=n.DEPTH_COMPONENT16),k}function S(w,b){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==It&&w.minFilter!==an?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function A(w){const b=w.target;b.removeEventListener("dispose",A),D(b),b.isVideoTexture&&h.delete(b)}function R(w){const b=w.target;b.removeEventListener("dispose",R),E(b)}function D(w){const b=i.get(w);if(b.__webglInit===void 0)return;const k=w.source,q=u.get(k);if(q){const K=q[b.__cacheKey];K.usedTimes--,K.usedTimes===0&&x(w),Object.keys(q).length===0&&u.delete(k)}i.remove(w)}function x(w){const b=i.get(w);n.deleteTexture(b.__webglTexture);const k=w.source,q=u.get(k);delete q[b.__cacheKey],o.memory.textures--}function E(w){const b=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(b.__webglFramebuffer[q]))for(let K=0;K<b.__webglFramebuffer[q].length;K++)n.deleteFramebuffer(b.__webglFramebuffer[q][K]);else n.deleteFramebuffer(b.__webglFramebuffer[q]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[q])}else{if(Array.isArray(b.__webglFramebuffer))for(let q=0;q<b.__webglFramebuffer.length;q++)n.deleteFramebuffer(b.__webglFramebuffer[q]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let q=0;q<b.__webglColorRenderbuffer.length;q++)b.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[q]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const k=w.textures;for(let q=0,K=k.length;q<K;q++){const X=i.get(k[q]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(k[q])}i.remove(w)}let I=0;function F(){I=0}function O(){const w=I;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),I+=1,w}function G(w){const b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.colorSpace),b.join()}function V(w,b){const k=i.get(w);if(w.isVideoTexture&&Oe(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&k.__version!==w.version){const q=w.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(k,w,b);return}}else w.isExternalTexture&&(k.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+b)}function H(w,b){const k=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){Y(k,w,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+b)}function $(w,b){const k=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){Y(k,w,b);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+b)}function W(w,b){const k=i.get(w);if(w.version>0&&k.__version!==w.version){Z(k,w,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+b)}const ie={[ua]:n.REPEAT,[xi]:n.CLAMP_TO_EDGE,[da]:n.MIRRORED_REPEAT},se={[It]:n.NEAREST,[wu]:n.NEAREST_MIPMAP_NEAREST,[Ei]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[ao]:n.LINEAR_MIPMAP_NEAREST,[Fn]:n.LINEAR_MIPMAP_LINEAR},pe={[Lu]:n.NEVER,[Ou]:n.ALWAYS,[Cu]:n.LESS,[th]:n.LEQUAL,[Uu]:n.EQUAL,[ku]:n.GEQUAL,[Nu]:n.GREATER,[Fu]:n.NOTEQUAL};function Ie(w,b){if(b.type===vn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===an||b.magFilter===ao||b.magFilter===Ei||b.magFilter===Fn||b.minFilter===an||b.minFilter===ao||b.minFilter===Ei||b.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,ie[b.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ie[b.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ie[b.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,se[b.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,se[b.minFilter]),b.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,pe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===It||b.minFilter!==Ei&&b.minFilter!==Fn||b.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Fe(w,b){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",A));const q=b.source;let K=u.get(q);K===void 0&&(K={},u.set(q,K));const X=G(b);if(X!==w.__cacheKey){K[X]===void 0&&(K[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),K[X].usedTimes++;const be=K[w.__cacheKey];be!==void 0&&(K[w.__cacheKey].usedTimes--,be.usedTimes===0&&x(b)),w.__cacheKey=X,w.__webglTexture=K[X].texture}return k}function nt(w,b,k){return Math.floor(Math.floor(w/k)/b)}function $e(w,b,k,q){const X=w.updateRanges;if(X.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,k,q,b.data);else{X.sort((ee,le)=>ee.start-le.start);let be=0;for(let ee=1;ee<X.length;ee++){const le=X[be],Re=X[ee],ve=le.start+le.count,ae=nt(Re.start,b.width,4),ke=nt(le.start,b.width,4);Re.start<=ve+1&&ae===ke&&nt(Re.start+Re.count-1,b.width,4)===ae?le.count=Math.max(le.count,Re.start+Re.count-le.start):(++be,X[be]=Re)}X.length=be+1;const ne=n.getParameter(n.UNPACK_ROW_LENGTH),_e=n.getParameter(n.UNPACK_SKIP_PIXELS),Me=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let ee=0,le=X.length;ee<le;ee++){const Re=X[ee],ve=Math.floor(Re.start/4),ae=Math.ceil(Re.count/4),ke=ve%b.width,C=Math.floor(ve/b.width),te=ae,re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,C),t.texSubImage2D(n.TEXTURE_2D,0,ke,C,te,re,k,q,b.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ne),n.pixelStorei(n.UNPACK_SKIP_PIXELS,_e),n.pixelStorei(n.UNPACK_SKIP_ROWS,Me)}}function Y(w,b,k){let q=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=n.TEXTURE_3D);const K=Fe(w,b),X=b.source;t.bindTexture(q,w.__webglTexture,n.TEXTURE0+k);const be=i.get(X);if(X.version!==be.__version||K===!0){t.activeTexture(n.TEXTURE0+k);const ne=Ye.getPrimaries(Ye.workingColorSpace),_e=b.colorSpace===Zn?null:Ye.getPrimaries(b.colorSpace),Me=b.colorSpace===Zn||ne===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let ee=y(b.image,!1,s.maxTextureSize);ee=Et(b,ee);const le=r.convert(b.format,b.colorSpace),Re=r.convert(b.type);let ve=v(b.internalFormat,le,Re,b.colorSpace,b.isVideoTexture);Ie(q,b);let ae;const ke=b.mipmaps,C=b.isVideoTexture!==!0,te=be.__version===void 0||K===!0,re=X.dataReady,ue=S(b,ee);if(b.isDepthTexture)ve=_(b.format===Xs,b.type),te&&(C?t.texStorage2D(n.TEXTURE_2D,1,ve,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,ve,ee.width,ee.height,0,le,Re,null));else if(b.isDataTexture)if(ke.length>0){C&&te&&t.texStorage2D(n.TEXTURE_2D,ue,ve,ke[0].width,ke[0].height);for(let J=0,j=ke.length;J<j;J++)ae=ke[J],C?re&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ae.width,ae.height,le,Re,ae.data):t.texImage2D(n.TEXTURE_2D,J,ve,ae.width,ae.height,0,le,Re,ae.data);b.generateMipmaps=!1}else C?(te&&t.texStorage2D(n.TEXTURE_2D,ue,ve,ee.width,ee.height),re&&$e(b,ee,le,Re)):t.texImage2D(n.TEXTURE_2D,0,ve,ee.width,ee.height,0,le,Re,ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){C&&te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,ve,ke[0].width,ke[0].height,ee.depth);for(let J=0,j=ke.length;J<j;J++)if(ae=ke[J],b.format!==mn)if(le!==null)if(C){if(re)if(b.layerUpdates.size>0){const me=el(ae.width,ae.height,b.format,b.type);for(const Ue of b.layerUpdates){const ot=ae.data.subarray(Ue*me/ae.data.BYTES_PER_ELEMENT,(Ue+1)*me/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Ue,ae.width,ae.height,1,le,ot)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ae.width,ae.height,ee.depth,le,ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,ve,ae.width,ae.height,ee.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else C?re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ae.width,ae.height,ee.depth,le,Re,ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,ve,ae.width,ae.height,ee.depth,0,le,Re,ae.data)}else{C&&te&&t.texStorage2D(n.TEXTURE_2D,ue,ve,ke[0].width,ke[0].height);for(let J=0,j=ke.length;J<j;J++)ae=ke[J],b.format!==mn?le!==null?C?re&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ae.width,ae.height,le,ae.data):t.compressedTexImage2D(n.TEXTURE_2D,J,ve,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?re&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ae.width,ae.height,le,Re,ae.data):t.texImage2D(n.TEXTURE_2D,J,ve,ae.width,ae.height,0,le,Re,ae.data)}else if(b.isDataArrayTexture)if(C){if(te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,ve,ee.width,ee.height,ee.depth),re)if(b.layerUpdates.size>0){const J=el(ee.width,ee.height,b.format,b.type);for(const j of b.layerUpdates){const me=ee.data.subarray(j*J/ee.data.BYTES_PER_ELEMENT,(j+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,ee.width,ee.height,1,le,Re,me)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,le,Re,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,ee.width,ee.height,ee.depth,0,le,Re,ee.data);else if(b.isData3DTexture)C?(te&&t.texStorage3D(n.TEXTURE_3D,ue,ve,ee.width,ee.height,ee.depth),re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,le,Re,ee.data)):t.texImage3D(n.TEXTURE_3D,0,ve,ee.width,ee.height,ee.depth,0,le,Re,ee.data);else if(b.isFramebufferTexture){if(te)if(C)t.texStorage2D(n.TEXTURE_2D,ue,ve,ee.width,ee.height);else{let J=ee.width,j=ee.height;for(let me=0;me<ue;me++)t.texImage2D(n.TEXTURE_2D,me,ve,J,j,0,le,Re,null),J>>=1,j>>=1}}else if(ke.length>0){if(C&&te){const J=mt(ke[0]);t.texStorage2D(n.TEXTURE_2D,ue,ve,J.width,J.height)}for(let J=0,j=ke.length;J<j;J++)ae=ke[J],C?re&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,le,Re,ae):t.texImage2D(n.TEXTURE_2D,J,ve,le,Re,ae);b.generateMipmaps=!1}else if(C){if(te){const J=mt(ee);t.texStorage2D(n.TEXTURE_2D,ue,ve,J.width,J.height)}re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,Re,ee)}else t.texImage2D(n.TEXTURE_2D,0,ve,le,Re,ee);p(b)&&m(q),be.__version=X.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function Z(w,b,k){if(b.image.length!==6)return;const q=Fe(w,b),K=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+k);const X=i.get(K);if(K.version!==X.__version||q===!0){t.activeTexture(n.TEXTURE0+k);const be=Ye.getPrimaries(Ye.workingColorSpace),ne=b.colorSpace===Zn?null:Ye.getPrimaries(b.colorSpace),_e=b.colorSpace===Zn||be===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Me=b.isCompressedTexture||b.image[0].isCompressedTexture,ee=b.image[0]&&b.image[0].isDataTexture,le=[];for(let j=0;j<6;j++)!Me&&!ee?le[j]=y(b.image[j],!0,s.maxCubemapSize):le[j]=ee?b.image[j].image:b.image[j],le[j]=Et(b,le[j]);const Re=le[0],ve=r.convert(b.format,b.colorSpace),ae=r.convert(b.type),ke=v(b.internalFormat,ve,ae,b.colorSpace),C=b.isVideoTexture!==!0,te=X.__version===void 0||q===!0,re=K.dataReady;let ue=S(b,Re);Ie(n.TEXTURE_CUBE_MAP,b);let J;if(Me){C&&te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,ke,Re.width,Re.height);for(let j=0;j<6;j++){J=le[j].mipmaps;for(let me=0;me<J.length;me++){const Ue=J[me];b.format!==mn?ve!==null?C?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,me,0,0,Ue.width,Ue.height,ve,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,me,ke,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,me,0,0,Ue.width,Ue.height,ve,ae,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,me,ke,Ue.width,Ue.height,0,ve,ae,Ue.data)}}}else{if(J=b.mipmaps,C&&te){J.length>0&&ue++;const j=mt(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,ke,j.width,j.height)}for(let j=0;j<6;j++)if(ee){C?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,le[j].width,le[j].height,ve,ae,le[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ke,le[j].width,le[j].height,0,ve,ae,le[j].data);for(let me=0;me<J.length;me++){const ot=J[me].image[j].image;C?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,me+1,0,0,ot.width,ot.height,ve,ae,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,me+1,ke,ot.width,ot.height,0,ve,ae,ot.data)}}else{C?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ve,ae,le[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ke,ve,ae,le[j]);for(let me=0;me<J.length;me++){const Ue=J[me];C?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,me+1,0,0,ve,ae,Ue.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,me+1,ke,ve,ae,Ue.image[j])}}}p(b)&&m(n.TEXTURE_CUBE_MAP),X.__version=K.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function de(w,b,k,q,K,X){const be=r.convert(k.format,k.colorSpace),ne=r.convert(k.type),_e=v(k.internalFormat,be,ne,k.colorSpace),Me=i.get(b),ee=i.get(k);if(ee.__renderTarget=b,!Me.__hasExternalTextures){const le=Math.max(1,b.width>>X),Re=Math.max(1,b.height>>X);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,X,_e,le,Re,b.depth,0,be,ne,null):t.texImage2D(K,X,_e,le,Re,0,be,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),ye(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,K,ee.__webglTexture,0,lt(b)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,K,ee.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(w,b,k){if(n.bindRenderbuffer(n.RENDERBUFFER,w),b.depthBuffer){const q=b.depthTexture,K=q&&q.isDepthTexture?q.type:null,X=_(b.stencilBuffer,K),be=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=lt(b);ye(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,X,b.width,b.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,X,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,X,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,w)}else{const q=b.textures;for(let K=0;K<q.length;K++){const X=q[K],be=r.convert(X.format,X.colorSpace),ne=r.convert(X.type),_e=v(X.internalFormat,be,ne,X.colorSpace),Me=lt(b);k&&ye(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,_e,b.width,b.height):ye(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,_e,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,_e,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(w,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(b.depthTexture);q.__renderTarget=b,(!q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);const K=q.__webglTexture,X=lt(b);if(b.depthTexture.format===Ws)ye(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(b.depthTexture.format===Xs)ye(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function We(w){const b=i.get(w),k=w.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==w.depthTexture){const q=w.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),q){const K=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),b.__depthDisposeCallback=K}b.__boundDepthTexture=q}if(w.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const q=w.texture.mipmaps;q&&q.length>0?Se(b.__webglFramebuffer[0],w):Se(b.__webglFramebuffer,w)}else if(k){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]===void 0)b.__webglDepthbuffer[q]=n.createRenderbuffer(),Le(b.__webglDepthbuffer[q],w,!1);else{const K=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=b.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,X)}}else{const q=w.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Le(b.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,X)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(w,b,k){const q=i.get(w);b!==void 0&&de(q.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&We(w)}function L(w){const b=w.texture,k=i.get(w),q=i.get(b);w.addEventListener("dispose",R);const K=w.textures,X=w.isWebGLCubeRenderTarget===!0,be=K.length>1;if(be||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=b.version,o.memory.textures++),X){k.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[ne]=[];for(let _e=0;_e<b.mipmaps.length;_e++)k.__webglFramebuffer[ne][_e]=n.createFramebuffer()}else k.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let ne=0;ne<b.mipmaps.length;ne++)k.__webglFramebuffer[ne]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(be)for(let ne=0,_e=K.length;ne<_e;ne++){const Me=i.get(K[ne]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&ye(w)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ne=0;ne<K.length;ne++){const _e=K[ne];k.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ne]);const Me=r.convert(_e.format,_e.colorSpace),ee=r.convert(_e.type),le=v(_e.internalFormat,Me,ee,_e.colorSpace,w.isXRRenderTarget===!0),Re=lt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,le,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,k.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(k.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,b);for(let ne=0;ne<6;ne++)if(b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)de(k.__webglFramebuffer[ne][_e],w,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e);else de(k.__webglFramebuffer[ne],w,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(b)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ne=0,_e=K.length;ne<_e;ne++){const Me=K[ne],ee=i.get(Me);let le=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,ee.__webglTexture),Ie(le,Me),de(k.__webglFramebuffer,w,Me,n.COLOR_ATTACHMENT0+ne,le,0),p(Me)&&m(le)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ne=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,q.__webglTexture),Ie(ne,b),b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)de(k.__webglFramebuffer[_e],w,b,n.COLOR_ATTACHMENT0,ne,_e);else de(k.__webglFramebuffer,w,b,n.COLOR_ATTACHMENT0,ne,0);p(b)&&m(ne),t.unbindTexture()}w.depthBuffer&&We(w)}function ct(w){const b=w.textures;for(let k=0,q=b.length;k<q;k++){const K=b[k];if(p(K)){const X=M(w),be=i.get(K).__webglTexture;t.bindTexture(X,be),m(X),t.unbindTexture()}}}const Ne=[],Pe=[];function ge(w){if(w.samples>0){if(ye(w)===!1){const b=w.textures,k=w.width,q=w.height;let K=n.COLOR_BUFFER_BIT;const X=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(w),ne=b.length>1;if(ne)for(let Me=0;Me<b.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const _e=w.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Me=0;Me<b.length;Me++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Me]);const ee=i.get(b[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,k,q,0,0,k,q,K,n.NEAREST),c===!0&&(Ne.length=0,Pe.length=0,Ne.push(n.COLOR_ATTACHMENT0+Me),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ne.push(X),Pe.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Pe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let Me=0;Me<b.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,be.__webglColorRenderbuffer[Me]);const ee=i.get(b[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const b=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function lt(w){return Math.min(s.maxSamples,w.samples)}function ye(w){const b=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Oe(w){const b=o.render.frame;h.get(w)!==b&&(h.set(w,b),w.update())}function Et(w,b){const k=w.colorSpace,q=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==ps&&k!==Zn&&(Ye.getTransfer(k)===et?(q!==mn||K!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function mt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=W,this.rebindTextures=Nt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ye}function T0(n,e){function t(i,s=Zn){let r;const o=Ye.getTransfer(s);if(i===En)return n.UNSIGNED_BYTE;if(i===Za)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ja)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Kl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Yl)return n.BYTE;if(i===$l)return n.SHORT;if(i===Vs)return n.UNSIGNED_SHORT;if(i===Ka)return n.INT;if(i===Pi)return n.UNSIGNED_INT;if(i===vn)return n.FLOAT;if(i===tr)return n.HALF_FLOAT;if(i===Zl)return n.ALPHA;if(i===Jl)return n.RGB;if(i===mn)return n.RGBA;if(i===Ws)return n.DEPTH_COMPONENT;if(i===Xs)return n.DEPTH_STENCIL;if(i===Qa)return n.RED;if(i===ec)return n.RED_INTEGER;if(i===Ql)return n.RG;if(i===tc)return n.RG_INTEGER;if(i===nc)return n.RGBA_INTEGER;if(i===Vr||i===Hr||i===Wr||i===Xr)if(o===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fa||i===ma||i===pa||i===ga)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ya||i===_a||i===Ma)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ya||i===_a)return o===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ma)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===va||i===ba||i===Sa||i===xa||i===Ea||i===Ta||i===Aa||i===Ra||i===wa||i===Pa||i===Da||i===Ia||i===La||i===Ca)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===va)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ba)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sa)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xa)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ea)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ta)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Aa)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ra)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wa)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pa)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Da)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ia)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===La)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ca)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ua||i===Na||i===Fa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ua)return o===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Na)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ka||i===Oa||i===za||i===Ba)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ka)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Oa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ba)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const A0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R0=`
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

}`;class w0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new fh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ai({vertexShader:A0,fragmentShader:R0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new we(new si(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class P0 extends Ii{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const y=typeof XRWebGLBinding<"u",p=new w0,m={},M=t.getContextAttributes();let v=null,_=null;const S=[],A=[],R=new xe;let D=null;const x=new on;x.viewport=new ft;const E=new on;E.viewport=new ft;const I=[x,E],F=new $d;let O=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=S[Y];return Z===void 0&&(Z=new Po,S[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=S[Y];return Z===void 0&&(Z=new Po,S[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=S[Y];return Z===void 0&&(Z=new Po,S[Y]=Z),Z.getHandSpace()};function V(Y){const Z=A.indexOf(Y.inputSource);if(Z===-1)return;const de=S[Z];de!==void 0&&(de.update(Y.inputSource,Y.frame,l||o),de.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",$);for(let Y=0;Y<S.length;Y++){const Z=A[Y];Z!==null&&(A[Y]=null,S[Y].disconnect(Z))}O=null,G=null,p.reset();for(const Y in m)delete m[Y];e.setRenderTarget(v),f=null,u=null,d=null,s=null,_=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",H),s.addEventListener("inputsourceschange",$),M.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Le=null,Se=null;M.depth&&(Se=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=M.stencil?Xs:Ws,Le=M.stencil?Hs:Pi);const We={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(We),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new Di(u.textureWidth,u.textureHeight,{format:mn,type:En,depthTexture:new dh(u.textureWidth,u.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const de={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Di(f.framebufferWidth,f.framebufferHeight,{format:mn,type:En,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),$e.setContext(s),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function $(Y){for(let Z=0;Z<Y.removed.length;Z++){const de=Y.removed[Z],Le=A.indexOf(de);Le>=0&&(A[Le]=null,S[Le].disconnect(de))}for(let Z=0;Z<Y.added.length;Z++){const de=Y.added[Z];let Le=A.indexOf(de);if(Le===-1){for(let We=0;We<S.length;We++)if(We>=A.length){A.push(de),Le=We;break}else if(A[We]===null){A[We]=de,Le=We;break}if(Le===-1)break}const Se=S[Le];Se&&Se.connect(de)}}const W=new P,ie=new P;function se(Y,Z,de){W.setFromMatrixPosition(Z.matrixWorld),ie.setFromMatrixPosition(de.matrixWorld);const Le=W.distanceTo(ie),Se=Z.projectionMatrix.elements,We=de.projectionMatrix.elements,Nt=Se[14]/(Se[10]-1),L=Se[14]/(Se[10]+1),ct=(Se[9]+1)/Se[5],Ne=(Se[9]-1)/Se[5],Pe=(Se[8]-1)/Se[0],ge=(We[8]+1)/We[0],lt=Nt*Pe,ye=Nt*ge,Oe=Le/(-Pe+ge),Et=Oe*-Pe;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Et),Y.translateZ(Oe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Se[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const mt=Nt+Oe,w=L+Oe,b=lt-Et,k=ye+(Le-Et),q=ct*L/w*mt,K=Ne*L/w*mt;Y.projectionMatrix.makePerspective(b,k,q,K,mt,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function pe(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Z=Y.near,de=Y.far;p.texture!==null&&(p.depthNear>0&&(Z=p.depthNear),p.depthFar>0&&(de=p.depthFar)),F.near=E.near=x.near=Z,F.far=E.far=x.far=de,(O!==F.near||G!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),O=F.near,G=F.far),F.layers.mask=Y.layers.mask|6,x.layers.mask=F.layers.mask&3,E.layers.mask=F.layers.mask&5;const Le=Y.parent,Se=F.cameras;pe(F,Le);for(let We=0;We<Se.length;We++)pe(Se[We],Le);Se.length===2?se(F,x,E):F.projectionMatrix.copy(x.projectionMatrix),Ie(Y,F,Le)};function Ie(Y,Z,de){de===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(de.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=qs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(Y){return m[Y]};let Fe=null;function nt(Y,Z){if(h=Z.getViewerPose(l||o),g=Z,h!==null){const de=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Le=!1;de.length!==F.cameras.length&&(F.cameras.length=0,Le=!0);for(let L=0;L<de.length;L++){const ct=de[L];let Ne=null;if(f!==null)Ne=f.getViewport(ct);else{const ge=d.getViewSubImage(u,ct);Ne=ge.viewport,L===0&&(e.setRenderTargetTextures(_,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(_))}let Pe=I[L];Pe===void 0&&(Pe=new on,Pe.layers.enable(L),Pe.viewport=new ft,I[L]=Pe),Pe.matrix.fromArray(ct.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(ct.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),L===0&&(F.matrix.copy(Pe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Le===!0&&F.cameras.push(Pe)}const Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();const L=d.getDepthInformation(de[0]);L&&L.isValid&&L.texture&&p.init(L,s.renderState)}if(Se&&Se.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let L=0;L<de.length;L++){const ct=de[L].camera;if(ct){let Ne=m[ct];Ne||(Ne=new fh,m[ct]=Ne);const Pe=d.getCameraImage(ct);Ne.sourceTexture=Pe}}}}for(let de=0;de<S.length;de++){const Le=A[de],Se=S[de];Le!==null&&Se!==void 0&&Se.update(Le,Z,l||o)}Fe&&Fe(Y,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const $e=new gh;$e.setAnimationLoop(nt),this.setAnimationLoop=function(Y){Fe=Y},this.dispose=function(){}}}const gi=new gn,D0=new rt;function I0(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,ah(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,v,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,M,v):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Wt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Wt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m),v=M.envMap,_=M.envMapRotation;v&&(p.envMap.value=v,gi.copy(_),gi.x*=-1,gi.y*=-1,gi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),p.envMapRotation.value.setFromMatrix4(D0.makeRotationFromEuler(gi)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,M,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Wt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function L0(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,v){const _=v.program;i.uniformBlockBinding(M,_)}function l(M,v){let _=s[M.id];_===void 0&&(g(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",p));const S=v.program;i.updateUBOMapping(M,S);const A=e.render.frame;r[M.id]!==A&&(u(M),r[M.id]=A)}function h(M){const v=d();M.__bindingPointIndex=v;const _=n.createBuffer(),S=M.__size,A=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,S,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,_),_}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const v=s[M.id],_=M.uniforms,S=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let A=0,R=_.length;A<R;A++){const D=Array.isArray(_[A])?_[A]:[_[A]];for(let x=0,E=D.length;x<E;x++){const I=D[x];if(f(I,A,x,S)===!0){const F=I.__offset,O=Array.isArray(I.value)?I.value:[I.value];let G=0;for(let V=0;V<O.length;V++){const H=O[V],$=y(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,F+G,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,G),G+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,v,_,S){const A=M.value,R=v+"_"+_;if(S[R]===void 0)return typeof A=="number"||typeof A=="boolean"?S[R]=A:S[R]=A.clone(),!0;{const D=S[R];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return S[R]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(M){const v=M.uniforms;let _=0;const S=16;for(let R=0,D=v.length;R<D;R++){const x=Array.isArray(v[R])?v[R]:[v[R]];for(let E=0,I=x.length;E<I;E++){const F=x[E],O=Array.isArray(F.value)?F.value:[F.value];for(let G=0,V=O.length;G<V;G++){const H=O[G],$=y(H),W=_%S,ie=W%$.boundary,se=W+ie;_+=ie,se!==0&&S-se<$.storage&&(_+=S-se),F.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=$.storage}}}const A=_%S;return A>0&&(_+=S-A),M.__size=_,M.__cache={},this}function y(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function p(M){const v=M.target;v.removeEventListener("dispose",p);const _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(const M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}class C0{constructor(e={}){const{canvas:t=td(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),y=new Int32Array(4);let p=null,m=null;const M=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let S=!1;this._outputColorSpace=_t;let A=0,R=0,D=null,x=-1,E=null;const I=new ft,F=new ft;let O=null;const G=new He(0);let V=0,H=t.width,$=t.height,W=1,ie=null,se=null;const pe=new ft(0,0,H,$),Ie=new ft(0,0,H,$);let Fe=!1;const nt=new oc;let $e=!1,Y=!1;const Z=new rt,de=new P,Le=new ft,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function Nt(){return D===null?W:1}let L=i;function ct(T,U){return t.getContext(T,U)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$a}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",J,!1),L===null){const U="webgl2";if(L=ct(U,T),L===null)throw ct(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ne,Pe,ge,lt,ye,Oe,Et,mt,w,b,k,q,K,X,be,ne,_e,Me,ee,le,Re,ve,ae,ke;function C(){Ne=new Hp(L),Ne.init(),ve=new T0(L,Ne),Pe=new Fp(L,Ne,e,ve),ge=new x0(L,Ne),Pe.reversedDepthBuffer&&u&&ge.buffers.depth.setReversed(!0),lt=new qp(L),ye=new h0,Oe=new E0(L,Ne,ge,ye,Pe,ve,lt),Et=new Op(_),mt=new Vp(_),w=new Zd(L),ae=new Up(L,w),b=new Wp(L,w,lt,ae),k=new $p(L,b,w,lt),ee=new Yp(L,Pe,Oe),ne=new kp(ye),q=new l0(_,Et,mt,Ne,Pe,ae,ne),K=new I0(_,ye),X=new d0,be=new _0(Ne),Me=new Cp(_,Et,mt,ge,k,f,c),_e=new b0(_,k,Pe),ke=new L0(L,lt,Pe,ge),le=new Np(L,Ne,lt),Re=new Xp(L,Ne,lt),lt.programs=q.programs,_.capabilities=Pe,_.extensions=Ne,_.properties=ye,_.renderLists=X,_.shadowMap=_e,_.state=ge,_.info=lt}C();const te=new P0(_,L);this.xr=te,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=Ne.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ne.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(H,$,!1))},this.getSize=function(T){return T.set(H,$)},this.setSize=function(T,U,z=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,$=U,t.width=Math.floor(T*W),t.height=Math.floor(U*W),z===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(H*W,$*W).floor()},this.setDrawingBufferSize=function(T,U,z){H=T,$=U,W=z,t.width=Math.floor(T*z),t.height=Math.floor(U*z),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(pe)},this.setViewport=function(T,U,z,B){T.isVector4?pe.set(T.x,T.y,T.z,T.w):pe.set(T,U,z,B),ge.viewport(I.copy(pe).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(Ie)},this.setScissor=function(T,U,z,B){T.isVector4?Ie.set(T.x,T.y,T.z,T.w):Ie.set(T,U,z,B),ge.scissor(F.copy(Ie).multiplyScalar(W).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(T){ge.setScissorTest(Fe=T)},this.setOpaqueSort=function(T){ie=T},this.setTransparentSort=function(T){se=T},this.getClearColor=function(T){return T.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,z=!0){let B=0;if(T){let N=!1;if(D!==null){const Q=D.texture.format;N=Q===nc||Q===tc||Q===ec}if(N){const Q=D.texture.type,ce=Q===En||Q===Pi||Q===Vs||Q===Hs||Q===Za||Q===Ja,fe=Me.getClearColor(),he=Me.getClearAlpha(),Ae=fe.r,De=fe.g,Ee=fe.b;ce?(g[0]=Ae,g[1]=De,g[2]=Ee,g[3]=he,L.clearBufferuiv(L.COLOR,0,g)):(y[0]=Ae,y[1]=De,y[2]=Ee,y[3]=he,L.clearBufferiv(L.COLOR,0,y))}else B|=L.COLOR_BUFFER_BIT}U&&(B|=L.DEPTH_BUFFER_BIT),z&&(B|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",J,!1),Me.dispose(),X.dispose(),be.dispose(),ye.dispose(),Et.dispose(),mt.dispose(),k.dispose(),ae.dispose(),ke.dispose(),q.dispose(),te.dispose(),te.removeEventListener("sessionstart",yn),te.removeEventListener("sessionend",uc),li.stop()};function re(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=lt.autoReset,U=_e.enabled,z=_e.autoUpdate,B=_e.needsUpdate,N=_e.type;C(),lt.autoReset=T,_e.enabled=U,_e.autoUpdate=z,_e.needsUpdate=B,_e.type=N}function J(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function j(T){const U=T.target;U.removeEventListener("dispose",j),me(U)}function me(T){Ue(T),ye.remove(T)}function Ue(T){const U=ye.get(T).programs;U!==void 0&&(U.forEach(function(z){q.releaseProgram(z)}),T.isShaderMaterial&&q.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,z,B,N,Q){U===null&&(U=Se);const ce=N.isMesh&&N.matrixWorld.determinant()<0,fe=Bh(T,U,z,B,N);ge.setMaterial(B,ce);let he=z.index,Ae=1;if(B.wireframe===!0){if(he=b.getWireframeAttribute(z),he===void 0)return;Ae=2}const De=z.drawRange,Ee=z.attributes.position;let Ve=De.start*Ae,Qe=(De.start+De.count)*Ae;Q!==null&&(Ve=Math.max(Ve,Q.start*Ae),Qe=Math.min(Qe,(Q.start+Q.count)*Ae)),he!==null?(Ve=Math.max(Ve,0),Qe=Math.min(Qe,he.count)):Ee!=null&&(Ve=Math.max(Ve,0),Qe=Math.min(Qe,Ee.count));const dt=Qe-Ve;if(dt<0||dt===1/0)return;ae.setup(N,B,fe,z,he);let at,it=le;if(he!==null&&(at=w.get(he),it=Re,it.setIndex(at)),N.isMesh)B.wireframe===!0?(ge.setLineWidth(B.wireframeLinewidth*Nt()),it.setMode(L.LINES)):it.setMode(L.TRIANGLES);else if(N.isLine){let Te=B.linewidth;Te===void 0&&(Te=1),ge.setLineWidth(Te*Nt()),N.isLineSegments?it.setMode(L.LINES):N.isLineLoop?it.setMode(L.LINE_LOOP):it.setMode(L.LINE_STRIP)}else N.isPoints?it.setMode(L.POINTS):N.isSprite&&it.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)$s("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))it.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Te=N._multiDrawStarts,ht=N._multiDrawCounts,qe=N._multiDrawCount,jt=he?w.get(he).bytesPerElement:1,Ci=ye.get(B).currentProgram.getUniforms();for(let Kt=0;Kt<qe;Kt++)Ci.setValue(L,"_gl_DrawID",Kt),it.render(Te[Kt]/jt,ht[Kt])}else if(N.isInstancedMesh)it.renderInstances(Ve,dt,N.count);else if(z.isInstancedBufferGeometry){const Te=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ht=Math.min(z.instanceCount,Te);it.renderInstances(Ve,dt,ht)}else it.render(Ve,dt)};function ot(T,U,z){T.transparent===!0&&T.side===Ct&&T.forceSinglePass===!1?(T.side=Wt,T.needsUpdate=!0,rr(T,U,z),T.side=xn,T.needsUpdate=!0,rr(T,U,z),T.side=Ct):rr(T,U,z)}this.compile=function(T,U,z=null){z===null&&(z=T),m=be.get(z),m.init(U),v.push(m),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),T!==z&&T.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const B=new Set;return T.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const Q=N.material;if(Q)if(Array.isArray(Q))for(let ce=0;ce<Q.length;ce++){const fe=Q[ce];ot(fe,z,N),B.add(fe)}else ot(Q,z,N),B.add(Q)}),m=v.pop(),B},this.compileAsync=function(T,U,z=null){const B=this.compile(T,U,z);return new Promise(N=>{function Q(){if(B.forEach(function(ce){ye.get(ce).currentProgram.isReady()&&B.delete(ce)}),B.size===0){N(T);return}setTimeout(Q,10)}Ne.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let je=null;function Tn(T){je&&je(T)}function yn(){li.stop()}function uc(){li.start()}const li=new gh;li.setAnimationLoop(Tn),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(T){je=T,te.setAnimationLoop(T),T===null?li.stop():li.start()},te.addEventListener("sessionstart",yn),te.addEventListener("sessionend",uc),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(U),U=te.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,U,D),m=be.get(T,v.length),m.init(U),v.push(m),Z.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),nt.setFromProjectionMatrix(Z,bn,U.reversedDepth),Y=this.localClippingEnabled,$e=ne.init(this.clippingPlanes,Y),p=X.get(T,M.length),p.init(),M.push(p),te.enabled===!0&&te.isPresenting===!0){const Q=_.xr.getDepthSensingMesh();Q!==null&&ro(Q,U,-1/0,_.sortObjects)}ro(T,U,0,_.sortObjects),p.finish(),_.sortObjects===!0&&p.sort(ie,se),We=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,We&&Me.addToRenderList(p,T),this.info.render.frame++,$e===!0&&ne.beginShadows();const z=m.state.shadowsArray;_e.render(z,T,U),$e===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=p.opaque,N=p.transmissive;if(m.setupLights(),U.isArrayCamera){const Q=U.cameras;if(N.length>0)for(let ce=0,fe=Q.length;ce<fe;ce++){const he=Q[ce];fc(B,N,T,he)}We&&Me.render(T);for(let ce=0,fe=Q.length;ce<fe;ce++){const he=Q[ce];dc(p,T,he,he.viewport)}}else N.length>0&&fc(B,N,T,U),We&&Me.render(T),dc(p,T,U);D!==null&&R===0&&(Oe.updateMultisampleRenderTarget(D),Oe.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(_,T,U),ae.resetDefaultState(),x=-1,E=null,v.pop(),v.length>0?(m=v[v.length-1],$e===!0&&ne.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function ro(T,U,z,B){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||nt.intersectsSprite(T)){B&&Le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Z);const ce=k.update(T),fe=T.material;fe.visible&&p.push(T,ce,fe,z,Le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||nt.intersectsObject(T))){const ce=k.update(T),fe=T.material;if(B&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Le.copy(T.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Le.copy(ce.boundingSphere.center)),Le.applyMatrix4(T.matrixWorld).applyMatrix4(Z)),Array.isArray(fe)){const he=ce.groups;for(let Ae=0,De=he.length;Ae<De;Ae++){const Ee=he[Ae],Ve=fe[Ee.materialIndex];Ve&&Ve.visible&&p.push(T,ce,Ve,z,Le.z,Ee)}}else fe.visible&&p.push(T,ce,fe,z,Le.z,null)}}const Q=T.children;for(let ce=0,fe=Q.length;ce<fe;ce++)ro(Q[ce],U,z,B)}function dc(T,U,z,B){const N=T.opaque,Q=T.transmissive,ce=T.transparent;m.setupLightsView(z),$e===!0&&ne.setGlobalState(_.clippingPlanes,z),B&&ge.viewport(I.copy(B)),N.length>0&&sr(N,U,z),Q.length>0&&sr(Q,U,z),ce.length>0&&sr(ce,U,z),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function fc(T,U,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new Di(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?tr:En,minFilter:Fn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const Q=m.state.transmissionRenderTarget[B.id],ce=B.viewport||I;Q.setSize(ce.z*_.transmissionResolutionScale,ce.w*_.transmissionResolutionScale);const fe=_.getRenderTarget(),he=_.getActiveCubeFace(),Ae=_.getActiveMipmapLevel();_.setRenderTarget(Q),_.getClearColor(G),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),We&&Me.render(z);const De=_.toneMapping;_.toneMapping=ii;const Ee=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),$e===!0&&ne.setGlobalState(_.clippingPlanes,B),sr(T,z,B),Oe.updateMultisampleRenderTarget(Q),Oe.updateRenderTargetMipmap(Q),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Qe=0,dt=U.length;Qe<dt;Qe++){const at=U[Qe],it=at.object,Te=at.geometry,ht=at.material,qe=at.group;if(ht.side===Ct&&it.layers.test(B.layers)){const jt=ht.side;ht.side=Wt,ht.needsUpdate=!0,mc(it,z,B,Te,ht,qe),ht.side=jt,ht.needsUpdate=!0,Ve=!0}}Ve===!0&&(Oe.updateMultisampleRenderTarget(Q),Oe.updateRenderTargetMipmap(Q))}_.setRenderTarget(fe,he,Ae),_.setClearColor(G,V),Ee!==void 0&&(B.viewport=Ee),_.toneMapping=De}function sr(T,U,z){const B=U.isScene===!0?U.overrideMaterial:null;for(let N=0,Q=T.length;N<Q;N++){const ce=T[N],fe=ce.object,he=ce.geometry,Ae=ce.group;let De=ce.material;De.allowOverride===!0&&B!==null&&(De=B),fe.layers.test(z.layers)&&mc(fe,U,z,he,De,Ae)}}function mc(T,U,z,B,N,Q){T.onBeforeRender(_,U,z,B,N,Q),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(_,U,z,B,T,Q),N.transparent===!0&&N.side===Ct&&N.forceSinglePass===!1?(N.side=Wt,N.needsUpdate=!0,_.renderBufferDirect(z,U,B,N,T,Q),N.side=xn,N.needsUpdate=!0,_.renderBufferDirect(z,U,B,N,T,Q),N.side=Ct):_.renderBufferDirect(z,U,B,N,T,Q),T.onAfterRender(_,U,z,B,N,Q)}function rr(T,U,z){U.isScene!==!0&&(U=Se);const B=ye.get(T),N=m.state.lights,Q=m.state.shadowsArray,ce=N.state.version,fe=q.getParameters(T,N.state,Q,U,z),he=q.getProgramCacheKey(fe);let Ae=B.programs;B.environment=T.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(T.isMeshStandardMaterial?mt:Et).get(T.envMap||B.environment),B.envMapRotation=B.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ae===void 0&&(T.addEventListener("dispose",j),Ae=new Map,B.programs=Ae);let De=Ae.get(he);if(De!==void 0){if(B.currentProgram===De&&B.lightsStateVersion===ce)return gc(T,fe),De}else fe.uniforms=q.getUniforms(T),T.onBeforeCompile(fe,_),De=q.acquireProgram(fe,he),Ae.set(he,De),B.uniforms=fe.uniforms;const Ee=B.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ee.clippingPlanes=ne.uniform),gc(T,fe),B.needsLights=Vh(T),B.lightsStateVersion=ce,B.needsLights&&(Ee.ambientLightColor.value=N.state.ambient,Ee.lightProbe.value=N.state.probe,Ee.directionalLights.value=N.state.directional,Ee.directionalLightShadows.value=N.state.directionalShadow,Ee.spotLights.value=N.state.spot,Ee.spotLightShadows.value=N.state.spotShadow,Ee.rectAreaLights.value=N.state.rectArea,Ee.ltc_1.value=N.state.rectAreaLTC1,Ee.ltc_2.value=N.state.rectAreaLTC2,Ee.pointLights.value=N.state.point,Ee.pointLightShadows.value=N.state.pointShadow,Ee.hemisphereLights.value=N.state.hemi,Ee.directionalShadowMap.value=N.state.directionalShadowMap,Ee.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ee.spotShadowMap.value=N.state.spotShadowMap,Ee.spotLightMatrix.value=N.state.spotLightMatrix,Ee.spotLightMap.value=N.state.spotLightMap,Ee.pointShadowMap.value=N.state.pointShadowMap,Ee.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=De,B.uniformsList=null,De}function pc(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=qr.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function gc(T,U){const z=ye.get(T);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Bh(T,U,z,B,N){U.isScene!==!0&&(U=Se),Oe.resetTextureUnits();const Q=U.fog,ce=B.isMeshStandardMaterial?U.environment:null,fe=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ps,he=(B.isMeshStandardMaterial?mt:Et).get(B.envMap||ce),Ae=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,De=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ee=!!z.morphAttributes.position,Ve=!!z.morphAttributes.normal,Qe=!!z.morphAttributes.color;let dt=ii;B.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(dt=_.toneMapping);const at=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,it=at!==void 0?at.length:0,Te=ye.get(B),ht=m.state.lights;if($e===!0&&(Y===!0||T!==E)){const Bt=T===E&&B.id===x;ne.setState(B,T,Bt)}let qe=!1;B.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==ht.state.version||Te.outputColorSpace!==fe||N.isBatchedMesh&&Te.batching===!1||!N.isBatchedMesh&&Te.batching===!0||N.isBatchedMesh&&Te.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Te.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Te.instancing===!1||!N.isInstancedMesh&&Te.instancing===!0||N.isSkinnedMesh&&Te.skinning===!1||!N.isSkinnedMesh&&Te.skinning===!0||N.isInstancedMesh&&Te.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Te.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Te.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Te.instancingMorph===!1&&N.morphTexture!==null||Te.envMap!==he||B.fog===!0&&Te.fog!==Q||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ne.numPlanes||Te.numIntersection!==ne.numIntersection)||Te.vertexAlphas!==Ae||Te.vertexTangents!==De||Te.morphTargets!==Ee||Te.morphNormals!==Ve||Te.morphColors!==Qe||Te.toneMapping!==dt||Te.morphTargetsCount!==it)&&(qe=!0):(qe=!0,Te.__version=B.version);let jt=Te.currentProgram;qe===!0&&(jt=rr(B,U,N));let Ci=!1,Kt=!1,bs=!1;const ut=jt.getUniforms(),tn=Te.uniforms;if(ge.useProgram(jt.program)&&(Ci=!0,Kt=!0,bs=!0),B.id!==x&&(x=B.id,Kt=!0),Ci||E!==T){ge.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ut.setValue(L,"projectionMatrix",T.projectionMatrix),ut.setValue(L,"viewMatrix",T.matrixWorldInverse);const qt=ut.map.cameraPosition;qt!==void 0&&qt.setValue(L,de.setFromMatrixPosition(T.matrixWorld)),Pe.logarithmicDepthBuffer&&ut.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ut.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,Kt=!0,bs=!0)}if(N.isSkinnedMesh){ut.setOptional(L,N,"bindMatrix"),ut.setOptional(L,N,"bindMatrixInverse");const Bt=N.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),ut.setValue(L,"boneTexture",Bt.boneTexture,Oe))}N.isBatchedMesh&&(ut.setOptional(L,N,"batchingTexture"),ut.setValue(L,"batchingTexture",N._matricesTexture,Oe),ut.setOptional(L,N,"batchingIdTexture"),ut.setValue(L,"batchingIdTexture",N._indirectTexture,Oe),ut.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&ut.setValue(L,"batchingColorTexture",N._colorsTexture,Oe));const nn=z.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&ee.update(N,z,jt),(Kt||Te.receiveShadow!==N.receiveShadow)&&(Te.receiveShadow=N.receiveShadow,ut.setValue(L,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(tn.envMap.value=he,tn.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(tn.envMapIntensity.value=U.environmentIntensity),Kt&&(ut.setValue(L,"toneMappingExposure",_.toneMappingExposure),Te.needsLights&&Gh(tn,bs),Q&&B.fog===!0&&K.refreshFogUniforms(tn,Q),K.refreshMaterialUniforms(tn,B,W,$,m.state.transmissionRenderTarget[T.id]),qr.upload(L,pc(Te),tn,Oe)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(qr.upload(L,pc(Te),tn,Oe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ut.setValue(L,"center",N.center),ut.setValue(L,"modelViewMatrix",N.modelViewMatrix),ut.setValue(L,"normalMatrix",N.normalMatrix),ut.setValue(L,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Bt=B.uniformsGroups;for(let qt=0,oo=Bt.length;qt<oo;qt++){const hi=Bt[qt];ke.update(hi,jt),ke.bind(hi,jt)}}return jt}function Gh(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Vh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,U,z){const B=ye.get(T);B.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),ye.get(T.texture).__webglTexture=U,ye.get(T.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:z,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){const z=ye.get(T);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const Hh=L.createFramebuffer();this.setRenderTarget=function(T,U=0,z=0){D=T,A=U,R=z;let B=!0,N=null,Q=!1,ce=!1;if(T){const he=ye.get(T);if(he.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(L.FRAMEBUFFER,null),B=!1;else if(he.__webglFramebuffer===void 0)Oe.setupRenderTarget(T);else if(he.__hasExternalTextures)Oe.rebindTextures(T,ye.get(T.texture).__webglTexture,ye.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ee=T.depthTexture;if(he.__boundDepthTexture!==Ee){if(Ee!==null&&ye.has(Ee)&&(T.width!==Ee.image.width||T.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(T)}}const Ae=T.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ce=!0);const De=ye.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(De[U])?N=De[U][z]:N=De[U],Q=!0):T.samples>0&&Oe.useMultisampledRTT(T)===!1?N=ye.get(T).__webglMultisampledFramebuffer:Array.isArray(De)?N=De[z]:N=De,I.copy(T.viewport),F.copy(T.scissor),O=T.scissorTest}else I.copy(pe).multiplyScalar(W).floor(),F.copy(Ie).multiplyScalar(W).floor(),O=Fe;if(z!==0&&(N=Hh),ge.bindFramebuffer(L.FRAMEBUFFER,N)&&B&&ge.drawBuffers(T,N),ge.viewport(I),ge.scissor(F),ge.setScissorTest(O),Q){const he=ye.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,he.__webglTexture,z)}else if(ce){const he=U;for(let Ae=0;Ae<T.textures.length;Ae++){const De=ye.get(T.textures[Ae]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ae,De.__webglTexture,z,he)}}else if(T!==null&&z!==0){const he=ye.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,he.__webglTexture,z)}x=-1},this.readRenderTargetPixels=function(T,U,z,B,N,Q,ce,fe=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ce!==void 0&&(he=he[ce]),he){ge.bindFramebuffer(L.FRAMEBUFFER,he);try{const Ae=T.textures[fe],De=Ae.format,Ee=Ae.type;if(!Pe.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-B&&z>=0&&z<=T.height-N&&(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe),L.readPixels(U,z,B,N,ve.convert(De),ve.convert(Ee),Q))}finally{const Ae=D!==null?ye.get(D).__webglFramebuffer:null;ge.bindFramebuffer(L.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(T,U,z,B,N,Q,ce,fe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ce!==void 0&&(he=he[ce]),he)if(U>=0&&U<=T.width-B&&z>=0&&z<=T.height-N){ge.bindFramebuffer(L.FRAMEBUFFER,he);const Ae=T.textures[fe],De=Ae.format,Ee=Ae.type;if(!Pe.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ve),L.bufferData(L.PIXEL_PACK_BUFFER,Q.byteLength,L.STREAM_READ),T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe),L.readPixels(U,z,B,N,ve.convert(De),ve.convert(Ee),0);const Qe=D!==null?ye.get(D).__webglFramebuffer:null;ge.bindFramebuffer(L.FRAMEBUFFER,Qe);const dt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await nd(L,dt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ve),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Q),L.deleteBuffer(Ve),L.deleteSync(dt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,z=0){const B=Math.pow(2,-z),N=Math.floor(T.image.width*B),Q=Math.floor(T.image.height*B),ce=U!==null?U.x:0,fe=U!==null?U.y:0;Oe.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,ce,fe,N,Q),ge.unbindTexture()};const Wh=L.createFramebuffer(),Xh=L.createFramebuffer();this.copyTextureToTexture=function(T,U,z=null,B=null,N=0,Q=null){Q===null&&(N!==0?($s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=N,N=0):Q=0);let ce,fe,he,Ae,De,Ee,Ve,Qe,dt;const at=T.isCompressedTexture?T.mipmaps[Q]:T.image;if(z!==null)ce=z.max.x-z.min.x,fe=z.max.y-z.min.y,he=z.isBox3?z.max.z-z.min.z:1,Ae=z.min.x,De=z.min.y,Ee=z.isBox3?z.min.z:0;else{const nn=Math.pow(2,-N);ce=Math.floor(at.width*nn),fe=Math.floor(at.height*nn),T.isDataArrayTexture?he=at.depth:T.isData3DTexture?he=Math.floor(at.depth*nn):he=1,Ae=0,De=0,Ee=0}B!==null?(Ve=B.x,Qe=B.y,dt=B.z):(Ve=0,Qe=0,dt=0);const it=ve.convert(U.format),Te=ve.convert(U.type);let ht;U.isData3DTexture?(Oe.setTexture3D(U,0),ht=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Oe.setTexture2DArray(U,0),ht=L.TEXTURE_2D_ARRAY):(Oe.setTexture2D(U,0),ht=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const qe=L.getParameter(L.UNPACK_ROW_LENGTH),jt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ci=L.getParameter(L.UNPACK_SKIP_PIXELS),Kt=L.getParameter(L.UNPACK_SKIP_ROWS),bs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,at.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,at.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ae),L.pixelStorei(L.UNPACK_SKIP_ROWS,De),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ee);const ut=T.isDataArrayTexture||T.isData3DTexture,tn=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){const nn=ye.get(T),Bt=ye.get(U),qt=ye.get(nn.__renderTarget),oo=ye.get(Bt.__renderTarget);ge.bindFramebuffer(L.READ_FRAMEBUFFER,qt.__webglFramebuffer),ge.bindFramebuffer(L.DRAW_FRAMEBUFFER,oo.__webglFramebuffer);for(let hi=0;hi<he;hi++)ut&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.get(T).__webglTexture,N,Ee+hi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.get(U).__webglTexture,Q,dt+hi)),L.blitFramebuffer(Ae,De,ce,fe,Ve,Qe,ce,fe,L.DEPTH_BUFFER_BIT,L.NEAREST);ge.bindFramebuffer(L.READ_FRAMEBUFFER,null),ge.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(N!==0||T.isRenderTargetTexture||ye.has(T)){const nn=ye.get(T),Bt=ye.get(U);ge.bindFramebuffer(L.READ_FRAMEBUFFER,Wh),ge.bindFramebuffer(L.DRAW_FRAMEBUFFER,Xh);for(let qt=0;qt<he;qt++)ut?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,nn.__webglTexture,N,Ee+qt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,nn.__webglTexture,N),tn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Bt.__webglTexture,Q,dt+qt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Bt.__webglTexture,Q),N!==0?L.blitFramebuffer(Ae,De,ce,fe,Ve,Qe,ce,fe,L.COLOR_BUFFER_BIT,L.NEAREST):tn?L.copyTexSubImage3D(ht,Q,Ve,Qe,dt+qt,Ae,De,ce,fe):L.copyTexSubImage2D(ht,Q,Ve,Qe,Ae,De,ce,fe);ge.bindFramebuffer(L.READ_FRAMEBUFFER,null),ge.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else tn?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(ht,Q,Ve,Qe,dt,ce,fe,he,it,Te,at.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(ht,Q,Ve,Qe,dt,ce,fe,he,it,at.data):L.texSubImage3D(ht,Q,Ve,Qe,dt,ce,fe,he,it,Te,at):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Q,Ve,Qe,ce,fe,it,Te,at.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Q,Ve,Qe,at.width,at.height,it,at.data):L.texSubImage2D(L.TEXTURE_2D,Q,Ve,Qe,ce,fe,it,Te,at);L.pixelStorei(L.UNPACK_ROW_LENGTH,qe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,jt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ci),L.pixelStorei(L.UNPACK_SKIP_ROWS,Kt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,bs),Q===0&&U.generateMipmaps&&L.generateMipmap(ht),ge.unbindTexture()},this.initRenderTarget=function(T){ye.get(T).__webglFramebuffer===void 0&&Oe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Oe.setTextureCube(T,0):T.isData3DTexture?Oe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Oe.setTexture2DArray(T,0):Oe.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){A=0,R=0,D=null,ge.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}const Tl={chest:27,trapped_chest:27,ender_chest:27,barrel:27,furnace:3,blast_furnace:3,smoker:3,hopper:5,dispenser:9,dropper:9,brewing_stand:5,shulker_box:27},st=n=>{throw new Error(`容器数据无效：${n}`)},Jn=(n,e,t)=>{if(!n||typeof n!="object"||Array.isArray(n))return st(t);const i=n;return Object.keys(i).some(s=>!e.includes(s))?st(`${t}包含未支持的字段`):i},Rt=(n,e,t,i)=>Number.isInteger(n)&&n>=e&&n<=t?n:st(i),zs=(n,e,t)=>typeof n=="string"&&n.length<=e?n:st(t),Vo=(n,e)=>n===void 0?void 0:typeof n=="boolean"?n:st(e);function bh(n){const e=Jn(n,["name","states"],"方块"),t=zs(e.name,128,"方块名称");if(!/^[a-z0-9_.-]+:[A-Za-z0-9_.-]+$/.test(t))return st("方块标识");if(e.states!==void 0){if(!e.states||typeof e.states!="object"||Array.isArray(e.states)||Object.keys(e.states).length>32)return st("方块状态");for(const[i,s]of Object.entries(e.states))if(i.length>128||!(typeof s=="boolean"||typeof s=="string"&&s.length<=128||typeof s=="number"&&Number.isFinite(s)))return st("方块状态值")}return{name:t,...e.states===void 0?{}:{states:e.states}}}function U0(n,e){const t=Jn(n,["slot","name","count","damage","durabilityDamage","color","bannerType","bannerPatterns","block","customName","enchantments"],"物品"),i=zs(t.name,128,"物品名称");if(!/^[a-z0-9_.-]+:[a-z0-9_.-]+$/.test(i))return st("物品标识");const s={slot:Rt(t.slot,0,e-1,"物品槽位"),name:i,count:Rt(t.count,1,255,"物品数量"),damage:Rt(t.damage,0,65535,"物品状态")};if(t.durabilityDamage!==void 0&&(s.durabilityDamage=Rt(t.durabilityDamage,0,65535,"物品耐久")),t.color!==void 0){if(!/^minecraft:leather_(helmet|chestplate|leggings|boots)$/.test(i)&&!["minecraft:fireworkscharge","minecraft:firework_star","minecraft:horsearmorleather","minecraft:leather_horse_armor"].includes(i))return st("物品染色类型");s.color=Rt(t.color,0,4294967295,"物品颜色")}if(t.bannerType!==void 0){if(i!=="minecraft:banner")return st("旗帜类型");s.bannerType=Rt(t.bannerType,0,1,"旗帜类型")}if(t.bannerPatterns!==void 0){if(i!=="minecraft:banner"||!Array.isArray(t.bannerPatterns)||t.bannerPatterns.length>32)return st("旗帜纹样");s.bannerPatterns=t.bannerPatterns.map(r=>{const o=Jn(r,["color","pattern"],"旗帜纹样"),a=zs(o.pattern,32,"旗帜纹样标识");return/^[a-z0-9_]+$/.test(a)?{color:Rt(o.color,0,15,"旗帜纹样染料"),pattern:a}:st("旗帜纹样标识")})}if(t.block!==void 0&&(s.block=bh(t.block)),t.customName!==void 0&&(s.customName=zs(t.customName,1024,"物品名称文字")),t.enchantments!==void 0){if(!Array.isArray(t.enchantments)||t.enchantments.length>128)return st("物品附魔");s.enchantments=t.enchantments.map(r=>{const o=Jn(r,["id","level"],"附魔");return{id:Rt(o.id,0,65535,"附魔ID"),level:Rt(o.level,-32768,32767,"附魔等级")}})}return s}function N0(n,e){Rt(e.x,-33554432,33554431,"区域X"),Rt(e.z,-33554432,33554431,"区域Z"),Rt(e.count,0,65536,"区域容器数量");const t=Jn(n,["version","containers"],"容器文件");if(t.version!==1||!Array.isArray(t.containers)||t.containers.length!==e.count)return st("容器文件版本或数量");const i=new Set;return t.containers.map(s=>{const r=Jn(s,["type","x","y","z","block","capacity","slots","customName","pair","pairLead","forceUnpair","inaccessible","unresolvedLoot","progress"],"容器");if(typeof r.type!="string"||!Object.hasOwn(Tl,r.type))return st("容器类型");const o=r.type,a=Tl[o],c=bh(r.block);if(Hl(c.name)!==o||r.capacity!==a)return st("容器方块或容量");const l=Rt(r.x,e.x*64,e.x*64+63,"容器X"),h=Rt(r.y,-2048,2047,"容器Y"),d=Rt(r.z,e.z*64,e.z*64+63,"容器Z"),u=Qo({x:l,y:h,z:d});if(i.has(u))return st("重复容器位置");if(i.add(u),!Array.isArray(r.slots)||r.slots.length>a)return st("容器物品槽位");const f=r.slots.map(y=>U0(y,a));if(new Set(f.map(y=>y.slot)).size!==f.length)return st("重复物品槽位");const g={type:o,x:l,y:h,z:d,block:c,capacity:a,slots:f};if(r.customName!==void 0&&(g.customName=zs(r.customName,1024,"容器名称")),r.pair!==void 0){if(o!=="chest"&&o!=="trapped_chest")return st("非箱子的配对");const y=Jn(r.pair,["x","z"],"箱子配对");if(g.pair={x:Rt(y.x,l-1,l+1,"配对X"),z:Rt(y.z,d-1,d+1,"配对Z")},Math.abs(g.pair.x-l)+Math.abs(g.pair.z-d)!==1)return st("箱子配对距离")}if(r.pairLead!==void 0&&(g.pairLead=Vo(r.pairLead,"配对主箱")),r.forceUnpair!==void 0&&(g.forceUnpair=Vo(r.forceUnpair,"独立箱子")),r.inaccessible!==void 0){if(o!=="ender_chest"||r.inaccessible!=="player_inventory"||f.length)return st("个人末影库存");g.inaccessible="player_inventory"}if(o==="ender_chest"&&(!g.inaccessible||f.length))return st("末影库存不可公开");if(r.unresolvedLoot!==void 0){if(!["chest","trapped_chest","dispenser"].includes(o))return st("战利品容器类型");if(g.unresolvedLoot=Vo(r.unresolvedLoot,"待生成战利品"),g.unresolvedLoot&&f.length)return st("未生成战利品与已存物品冲突")}if(r.progress!==void 0){const y=Jn(r.progress,["burnTime","burnDuration","cookTime","fuelAmount","fuelTotal"],"容器进度");if(!["furnace","blast_furnace","smoker","brewing_stand"].includes(o))return st("容器进度类型");g.progress=Object.fromEntries(Object.entries(y).map(([p,m])=>[p,Rt(m,0,2e4,"容器进度值")]))}return g})}async function F0(n,e,t){if(!/^([a-z0-9_-]+\/)?containers\/-?\d+_-?\d+\.json\.gz$/.test(n.file)||n.file.split("/").some(s=>s===".."))throw new Error("容器数据文件路径无效");const i=await rn(t.worldUrl(n.file),{signal:e});if(!i.ok)throw new Error(`容器读取失败（${i.status}），请重试`);return N0(await t.readJson(i),n)}function k0(n,e={}){n.containerCallbacks=e,e.onState?.(n.containerState),e.onTarget?.(n.containerTarget)}function O0(n){return n.containerState}function z0(n){return n.containerAssets}function B0(n,e){const t=n.containerTarget;if(n.containerTarget=e,e?.bounds){const[i,s,r,o,a,c]=e.bounds;n.containerOutline.position.set(e.x+(i+o)/2,e.y+(s+a)/2,e.z+(r+c)/2),n.containerOutline.scale.set(o-i+.004,a-s+.004,c-r+.004),n.renderDirty=!0}t?.dimension===e?.dimension&&t?.x===e?.x&&t?.y===e?.y&&t?.z===e?.z&&t?.type===e?.type&&t?.available===e?.available&&t?.reason===e?.reason||n.containerCallbacks.onTarget?.(e)}function G0(n){const e=n.containerTarget,t=!!e?.bounds&&n.hudVisible&&n.active&&n.mode!=="orbit"&&n.containerState.status==="closed"&&!n.containerPreparing&&n.meshReady(us(Math.floor(e.x/16),Math.floor(e.z/16)))&&n.canOpenInventory()&&n.camera.position.distanceToSquared(n.containerTargetPosition)<1e-8&&1-Math.abs(n.camera.quaternion.dot(n.containerTargetQuaternion))<1e-8;n.containerOutline.visible!==t&&(n.containerOutline.visible=t,n.renderDirty=!0)}function V0(n,e){n.containerState=e,e.status!=="closed"&&(n.keys.clear(),n.touchMove.set(0,0,0),n.dragging=void 0,n.containerGesture=void 0,n.containerPointers.clear(),document.pointerLockElement===n.renderer.domElement&&document.exitPointerLock()),n.controls.enabled=n.active&&n.mode==="orbit"&&e.status==="closed"&&!n.containerPreparing,n.containerCallbacks.onState?.(e)}function H0(n){n.containerPrepareRevision++,n.containerPickRevision++,n.containerRetryScreen=void 0,n.containerRequestId++,n.containerController?.abort(),n.containerController=void 0,n.containerRecords.clear(),n.keys.clear(),n.touchMove.set(0,0,0),n.dragging=void 0,n.containerState.status!=="closed"&&n.setContainerState({status:"closed"})}async function W0(n){if(n.containerState.status==="error"){await n.openContainerAt(n.containerRetryScreen,!0);return}n.containerState.status==="closed"&&await n.openContainerAt()}function X0(n){return!n.memorySource||n.memoryAcknowledgedRevision===n.memoryRevision&&n.getMemoryBufferStatus().ready}async function q0(n,e,t=!1){if(!n.active||!n.initialized||n.disposed||n.containerPreparing||n.containerState.status!=="closed"&&!(t&&n.containerState.status==="error"))return;const i=n.generation,s=++n.containerPickRevision,r=++n.containerPrepareRevision;n.containerPreparing=!0;let o=r;const a=()=>n.active&&!n.disposed&&i===n.generation&&o===n.containerPrepareRevision&&(n.containerState.status==="closed"||t&&n.containerState.status==="error");try{if(!await n.pickContainer(e)||!a()||s!==n.containerPickRevision||(n.keys.clear(),n.touchMove.set(0,0,0),n.dragging=void 0,n.controls.enabled=!1,n.containerCallbacks.onBeforeOpen?.(),!n.active||n.disposed||i!==n.generation||n.containerState.status!=="closed"&&!(t&&n.containerState.status==="error")))return;o=++n.containerPrepareRevision;const l=n.memoryRevision,h=++n.containerPickRevision,d=performance.now()+1e4;for(;a()&&l===n.memoryRevision&&!n.canOpenInventory();){if(performance.now()>=d){n.callbacks.onError?.("这段回忆仍在准备中，请稍后重新打开容器。");return}await new Promise(f=>requestAnimationFrame(()=>f()))}if(!a()||l!==n.memoryRevision||h!==n.containerPickRevision)return;const u=await n.pickContainer(e);if(!u||!a()||l!==n.memoryRevision||h!==n.containerPickRevision)return;n.containerRetryScreen=e?{...e}:void 0,n.setContainerTarget(u),await n.loadContainer(u)}catch(c){a()&&n.callbacks.onError?.(c instanceof Error?c.message:"容器选择失败")}finally{n.containerPreparing=!1,n.controls.enabled=n.active&&n.mode==="orbit"&&n.containerState.status==="closed"}}async function Y0(n){if(!n.initialized||n.disposed)return;n.containerPicking=!0;const e=n.generation,t=n.containerPickRevision;n.containerTargetPosition.copy(n.camera.position),n.containerTargetQuaternion.copy(n.camera.quaternion);try{const i=await n.pickContainer();e===n.generation&&t===n.containerPickRevision&&n.active&&n.containerState.status==="closed"&&!n.disposed&&n.setContainerTarget(i)}catch{}finally{n.containerPicking=!1}}async function $0(n,e){if(!n.canOpenInventory())return null;const t=n.generation,i=n.memoryRevision,s=n.renderer.domElement.getBoundingClientRect(),r=e?new xe((e.x-s.left)/s.width*2-1,-(e.y-s.top)/s.height*2+1):new xe;if(Math.abs(r.x)>1||Math.abs(r.y)>1)return null;n.camera.updateMatrixWorld(!0);const o=n.containerRaycaster;o.near=0,o.far=n.mode==="orbit"?96:8,o.setFromCamera(r,n.camera);const a=[],c=[];for(const S of Ya(o.ray.origin,o.ray.direction,o.far)){if(n.desired.has(S)&&!n.meshReady(S))return null;const A=n.meshes.get(S);if(A?.visible){if(!n.meshReady(S))return null;c.push([S,A]),A.updateMatrixWorld(!0),A.traverse(R=>{!(R instanceof we)||!R.visible||(R.geometry.boundingBox||R.geometry.computeBoundingBox(),a.push(R))})}}const l=o.intersectObjects(a,!1)[0];if(!l?.face)return null;const h=l.face.normal.clone().applyNormalMatrix(new Ce().getNormalMatrix(l.object.matrixWorld)),d=l.point.clone().addScaledVector(h,-1e-4),u=l.object.userData.memoryContainerPosition,f=u?.x??Math.floor(d.x),g=u?.y??Math.floor(d.y),y=u?.z??Math.floor(d.z);if(!n.meshReady(us(Math.floor(f/16),Math.floor(y/16))))return null;const p=await n.inspectMemoryBlock(f,g,y);if(t!==n.generation||i!==n.memoryRevision||!n.canOpenInventory()||n.memorySource&&!Object.is(p.time,n.memoryTime)||c.some(([S,A])=>n.meshes.get(S)!==A||!n.meshReady(S)))return null;const m=p.currentName||"",M=Hl(m);if(!M)return null;const v=!!n.memorySource&&n.memoryTime<(n.memorySource.manifest.finalMapTime??1/0),_=!!n.dimension.containers;return{x:f,y:g,z:y,type:M,blockName:m,dimension:n.dimension.id,available:!v&&_&&M!=="ender_chest",...p.containerBounds?{bounds:p.containerBounds}:{},...v?{reason:"这一刻的物品暂时无法查看。把时间线移到最后，看看留下的东西。"}:_?M==="ender_chest"?{reason:"末影箱属于每位玩家的个人库存，公开地图不提供这些物品。"}:{}:{reason:"这份地图没有公开容器的物品记录。"}}}async function j0(n,e){if(!n.active||n.disposed||e.dimension!==n.dimension.id)return;n.containerController?.abort();const t=new AbortController,i=n.generation,s=++n.containerRequestId;n.containerController=t,n.containerRecords.clear();const r=()=>!n.disposed&&n.active&&i===n.generation&&s===n.containerRequestId&&!t.signal.aborted&&n.containerController===t;if(n.setContainerState({status:"loading",target:e}),!e.available){n.setContainerState({status:"unavailable",target:e,message:e.reason||"这份地图没有可查看的容器库存。"});return}const o=n.dimension.containers,a=new Map((o?.regions||[]).map(h=>[or(h.x,h.z),h])),c=n.containerRecords,l=async h=>{const d=or(h.x,h.z);if(c.has(d))return c.get(d);n.containerRequests++;const u=await F0(h,t.signal,{readJson:Kn,worldUrl:Nn});return r()?(c.set(d,u),u):[]};try{const h=a.get(or(Math.floor(e.x/64),Math.floor(e.z/64)));if(!h){r()&&n.setContainerState({status:"unavailable",target:e,message:"存档中没有这个容器的物品记录，无法判断它是否为空。"});return}const d=await l(h);if(!r())return;const u=d.find(g=>Qo(g)===Qo(e));if(!u||u.type!==e.type||u.block.name!==e.blockName){n.setContainerState({status:"unavailable",target:e,message:"存档中没有这个容器的匹配物品记录，无法判断它是否为空。"});return}if(u.unresolvedLoot){n.setContainerState({status:"unavailable",target:e,message:"战利品尚未生成，存档中没有可展示的物品。"});return}if(u.inaccessible){n.setContainerState({status:"unavailable",target:e,message:"末影箱属于每位玩家的个人库存，公开地图不提供这些物品。"});return}let f;if(u.pair&&!u.forceUnpair){const g=a.get(or(Math.floor(u.pair.x/64),Math.floor(u.pair.z/64)));if(g){const y=await l(g);if(!r())return;const p=y.find(m=>m.x===u.pair.x&&m.y===u.y&&m.z===u.pair.z);if(p&&qh(u,p)){if(p.unresolvedLoot){n.setContainerState({status:"unavailable",target:e,message:"大型箱子的另一半战利品尚未生成，存档中没有完整的物品记录。"});return}f=p}}if(!f)throw new Error("大型箱子的另一半记录不完整，未显示可能缺失的库存。请重试。")}r()&&n.setContainerState({status:"ready",target:e,container:Yh(u,f)})}catch(h){if(!r()||h instanceof DOMException&&h.name==="AbortError")return;n.containerRecords.clear(),n.setContainerState({status:"error",target:e,message:h instanceof Error?h.message:"容器读取失败，请重试。"})}}function K0(n){const e=n.renderer.domElement,t=()=>{n.orbitUserAdjusted=!0,n.memoryFollow||(n.memoryRequestedOffset=void 0,n.memoryPanOffset.set(0,0,0))};n.controls.addEventListener("start",t),n.disposers.push(()=>n.controls.removeEventListener("start",t));const i=o=>n.mode!=="orbit"&&o.button===2&&o.pointerType==="mouse",s=(o,a,c,l)=>{o.addEventListener(a,c,l),n.disposers.push(()=>o.removeEventListener(a,c,l))};s(window,"keydown",o=>{const a=o.target;if(o.code==="Escape"&&n.containerPreparing){o.preventDefault(),n.closeContainer();return}if(!(!n.active||n.containerState.status!=="closed"||n.containerPreparing||n.mode==="orbit"||a.matches('input,textarea,select,[contenteditable="true"]'))){if(o.code==="KeyE"){o.preventDefault(),o.repeat||(n.mode==="walk"?n.interactAt():n.openTargetContainer());return}["KeyW","KeyA","KeyS","KeyD","KeyQ","Space","ShiftLeft","ShiftRight","ControlLeft","ControlRight","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(o.code)&&(o.preventDefault(),n.keys.add(o.code))}}),s(window,"keyup",o=>n.keys.delete(o.code)),s(window,"blur",()=>{n.keys.clear(),n.touchMove.set(0,0,0),n.setTouchAction("jump",!1),n.setTouchAction("sprint",!1),n.dragging=void 0,n.containerGesture=void 0,n.containerPointers.clear()}),s(e,"pointerdown",o=>{!n.active||n.containerState.status!=="closed"||n.containerPreparing||(n.containerPointers.add(o.pointerId),n.containerPointers.size>1&&n.containerGesture&&(n.containerGesture.invalid=!0),(o.button===0||o.button===2)&&!n.containerGesture&&(n.containerGesture={id:o.pointerId,button:o.button,x:o.clientX,y:o.clientY,time:performance.now(),moved:!1,invalid:n.containerPointers.size!==1||!i(o)&&(n.keys.size>0||n.touchMove.lengthSq()>0)}),!(n.mode==="orbit"||o.button!==0||document.pointerLockElement===e)&&(n.dragging||(n.dragging={id:o.pointerId,x:o.clientX,y:o.clientY},e.setPointerCapture(o.pointerId),e.focus({preventScroll:!0}))))}),s(e,"pointermove",o=>{const a=n.containerGesture;a?.id===o.pointerId&&!(n.mode!=="orbit"&&a.button===2&&o.pointerType==="mouse")&&(Math.hypot(o.clientX-a.x,o.clientY-a.y)>(o.pointerType==="touch"?8:4)||document.pointerLockElement===e&&Math.hypot(o.movementX,o.movementY)>1)&&(a.moved=!0),!(!n.active||n.containerState.status!=="closed"||n.containerPreparing||n.mode==="orbit")&&(document.pointerLockElement===e?n.look(o.movementX,o.movementY):n.dragging?.id===o.pointerId&&(n.look(o.clientX-n.dragging.x,o.clientY-n.dragging.y),n.dragging.x=o.clientX,n.dragging.y=o.clientY))});const r=o=>{n.dragging?.id===o.pointerId&&(n.dragging=void 0),n.containerPointers.delete(o.pointerId);const a=n.containerGesture;if(a?.id!==o.pointerId||(n.containerGesture=void 0,o.type!=="pointerup"||!n.active||n.containerState.status!=="closed"||a.invalid||a.moved||n.containerPointers.size||!i(o)&&(n.keys.size||n.touchMove.lengthSq())||performance.now()-a.time>650))return;const c=document.pointerLockElement===e?void 0:{x:o.clientX,y:o.clientY};n.mode==="walk"?n.interactAt(c):n.openContainerAt(c)};s(e,"pointerup",r),s(e,"pointercancel",r),s(e,"dblclick",o=>{n.active&&n.containerState.status==="closed"&&!n.containerPreparing&&n.mode!=="orbit"&&(o.preventDefault(),n.requestPointerLock())}),s(e,"wheel",o=>{n.active&&n.containerState.status==="closed"&&!n.containerPreparing&&n.mode!=="orbit"&&(o.preventDefault(),n.zoom(o.deltaY<0?1.25:.8))},{passive:!1}),s(e,"contextmenu",o=>{n.active&&o.preventDefault()}),s(document,"pointerlockchange",()=>{document.pointerLockElement!==e&&(n.keys.clear(),n.touchMove.set(0,0,0),n.setTouchAction("jump",!1),n.setTouchAction("sprint",!1),n.dragging=void 0,n.containerGesture=void 0,n.containerPointers.clear())}),s(e,"webglcontextlost",o=>{o.preventDefault(),n.callbacks.onError?.("三维画面暂时中断，请重新打开三维地图")})}function Z0(n,e){e||n.stopIslandMechanism(),n.active=e,e&&(n.renderDirty=!0),n.controls.enabled=n.mode==="orbit"&&e&&n.containerState.status==="closed"&&!n.containerPreparing,e||(n.closeContainer(),n.setContainerTarget(null),n.containerTargetPosition.x=1/0,n.keys.clear(),n.touchMove.set(0,0,0),n.setTouchAction("jump",!1),n.setTouchAction("sprint",!1),n.dragging=void 0,document.pointerLockElement===n.renderer.domElement&&document.exitPointerLock())}function Sh(n,e,t,i,s,r,o){const a=(g,y,p)=>(i.set(g,y),i.near=0,i.far=p,i.intersectObjects(t,!0)),c=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1)],l=g=>{const y=g.uv,p=r?.atlas;return y&&p?Math.floor(y.x*p.width/p.stride)+Math.floor((1-y.y)*p.height/p.stride)*p.columns:-1},h=g=>g.object instanceof we&&g.object.visible&&!s.has(l(g)),d=g=>h(g)&&!o.has(l(g)),u=[new P(1,0,0),new P(0,0,1),new P(Math.SQRT1_2,0,Math.SQRT1_2),new P(Math.SQRT1_2,0,-Math.SQRT1_2)];return{cast:a,directions:c,tileAt:l,obstacle:h,solid:d,clearBody:g=>!a(new P(n,g+.07,e),new P(0,1,0),1.74).some(d)&&!a(new P(n,g+1.81,e),new P(0,-1,0),1.74).some(d)&&![.3,.9,1.65].some(y=>u.some((p,m)=>{const M=m<2?.29:.4,v=new P(n,g+y,e);return a(v.clone().addScaledVector(p,-M),p,M*2).some(d)||a(v.addScaledVector(p,M),p.clone().negate(),M*2).some(d)}))}}function J0(n,e,t,i,s,r=new Set,o,a=new Set,c=!1){const{cast:l,directions:h,tileAt:d,obstacle:u,solid:f,clearBody:g}=Sh(n,t,i,s,r,o,a);if(c&&g(e))return{x:n,y:e,z:t,swimming:!0};const y=a.size>0&&h.some(_=>{const S=l(new P(n,e+.85,t),_,.78).find(u);return S&&a.has(d(S))}),p=new P,m=new Ce,M=l(new P(n,e+1.35,t),new P(0,-1,0),7.35).filter(_=>_.face&&f(_)&&p.copy(_.face.normal).applyNormalMatrix(m.getNormalMatrix(_.object.matrixWorld)).y>.5).sort((_,S)=>S.point.y-_.point.y);let v=null;for(const _ of M){const S=_.point.y+.015;if(!(S-e>1.36||e-S>6.05)&&g(S)){v={x:n,y:S,z:t,...y?{climbing:!0}:{}};break}}return y&&(!v||e-v.y>.45)&&g(e)&&(v={x:n,y:e,z:t,climbing:!0}),v}function xh(n,e){const t=new Map;for(const i of n)i.traverse(s=>{if(!(!(s instanceof we)||!s.visible))for(const r of Array.isArray(s.material)?s.material:[s.material])t.has(r)||(t.set(r,r.side),r.side=Ct)});try{return e()}finally{for(const[i,s]of t)i.side=s}}function Q0(...n){return xh(n[3],()=>J0(...n))}function ey(n,e,t,i,s,r=new Set,o,a=new Set){return xh(i,()=>Sh(n,t,i,s,r,o,a).clearBody(e))}const ty=4,At=ty,Ks=new WeakMap,lc=(n,e,t)=>`${n},${e},${t}`;function ny(n,e){so(n);const t=new Map;for(let i=0;i<e.offsets.length-1;i++){const s=i*3;t.set(lc(e.cells[s],e.cells[s+1],e.cells[s+2]),{indices:e.indices.subarray(e.offsets[i],e.offsets[i+1])})}Ks.set(n,{source:n,geometry:n.geometry,buckets:t})}function iy(n){const e=Ks.get(n);if(e?.geometry===n.geometry)return e;e&&so(n);const t=new Map,i=n.geometry,s=i.getAttribute("position"),r=i.getIndex();if(!r)return{source:n,geometry:i,buckets:t};for(let a=0;a<r.count;a+=3){const c=r.getX(a),l=r.getX(a+1),h=r.getX(a+2),d=Math.floor(Math.min(s.getX(c),s.getX(l),s.getX(h))/At),u=Math.floor(Math.min(s.getY(c),s.getY(l),s.getY(h))/At),f=Math.floor(Math.min(s.getZ(c),s.getZ(l),s.getZ(h))/At),g=Math.floor(Math.max(s.getX(c),s.getX(l),s.getX(h))/At),y=Math.floor(Math.max(s.getY(c),s.getY(l),s.getY(h))/At),p=Math.floor(Math.max(s.getZ(c),s.getZ(l),s.getZ(h))/At);for(let m=d;m<=g;m++)for(let M=u;M<=y;M++)for(let v=f;v<=p;v++){const _=lc(m,M,v);let S=t.get(_);S||(S={indices:[]},t.set(_,S)),S.indices.push(c,l,h)}}const o={source:n,geometry:i,buckets:t};return Ks.set(n,o),o}function Eh(n,e,t,i){return Ri(n,new Ut(new P(e-.85,t-6.1,i-.85),new P(e+.85,t+3.2,i+.85)))}function Ri(n,e){const t=[];for(const i of n)i.traverse(s=>{if(!(s instanceof we)||!s.visible)return;const r=s,o=r.geometry;if(o.boundingBox||o.computeBoundingBox(),!o.boundingBox.clone().applyMatrix4(r.matrixWorld).intersectsBox(e))return;if(!o.getIndex()||Array.isArray(r.material)){t.push(r);return}const c=iy(r),l=e.clone().applyMatrix4(r.matrixWorld.clone().invert());for(let h=Math.floor(l.min.x/At);h<=Math.floor(l.max.x/At);h++)for(let d=Math.floor(l.min.y/At);d<=Math.floor(l.max.y/At);d++)for(let u=Math.floor(l.min.z/At);u<=Math.floor(l.max.z/At);u++){const f=c.buckets.get(lc(h,d,u));if(f){if(!f.mesh){const g=new zt;for(const[y,p]of Object.entries(o.attributes))g.setAttribute(y,p);f.indices instanceof Uint32Array?g.setIndex(new Pt(f.indices,1)):g.setIndex(f.indices),f.indices=[],g.boundingBox=new Ut(new P(h*At,d*At,u*At),new P((h+1)*At,(d+1)*At,(u+1)*At)),g.boundingSphere=g.boundingBox.getBoundingSphere(new ci),f.mesh=new we(g,r.material),f.mesh.matrixAutoUpdate=!1}f.mesh.matrixWorld.copy(r.matrixWorld),t.push(f.mesh)}}});return t}function so(n){const e=Ks.get(n);if(e){for(const t of e.buckets.values())t.mesh?.geometry.dispose();Ks.delete(n)}}function Th(n,e,t,i){const s=Math.floor(t/16),r=n?.find(c=>c[0]===s)?.[1];if(!r)return!1;const o=c=>(Math.floor(c)%16+16)%16,a=o(e)*256+o(i)*16+o(t);return!!(r[a>>3]&1<<(a&7))}function sy(n,e,t){const i=n.memoryTargetBounds.get(`${t.x},${t.y},${t.z}`)||[0,0,0,1,1,1],s=[e.x,e.y,e.z,t.x,t.y,t.z,...i].join(","),r=n.memoryReachCache.get(s);if(r!==void 0)return r;const o=new P(e.x,e.y+1.5,e.z),a=new P(t.x+.5,t.y+.5,t.z+.5);if(o.distanceTo(a)>5.2)return!1;const l=new P(t.x+i[0],t.y+i[1],t.z+i[2]),h=new P(t.x+i[3],t.y+i[4],t.z+i[5]),d=[],u=new Ut().setFromPoints([o,a,l,h]).expandByScalar(.1);for(let M=Math.floor(u.min.x/16);M<=Math.floor(u.max.x/16);M++)for(let v=Math.floor(u.min.z/16);v<=Math.floor(u.max.z/16);v++){const _=n.meshes.get(us(M,v));_&&(_.updateMatrixWorld(!0),d.push(_))}const f=Ri(d,u),g=new P,y=n.memoryAtlas?.atlas,p=(M,v=.1)=>{const _=o.distanceTo(M);return _>5.2?!1:(n.memoryGroundRaycaster.set(o,g.subVectors(M,o).normalize()),n.memoryGroundRaycaster.near=.05,n.memoryGroundRaycaster.far=Math.max(.05,_-v),!n.memoryGroundRaycaster.intersectObjects(f,!1).some(S=>{const A=y&&S.uv?Math.floor(S.uv.x*y.width/y.stride)+Math.floor((1-S.uv.y)*y.height/y.stride)*y.columns:-1;return n.memoryPassableTiles.has(A)||n.memoryClimbTiles.has(A)?!1:S.point.x<l.x-.02||S.point.x>h.x+.02||S.point.y<l.y-.02||S.point.y>h.y+.02||S.point.z<l.z-.02||S.point.z>h.z+.02}))};let m=p(a);if(!m)e:for(const[M,v,_]of[["y","x","z"],["x","y","z"],["z","x","y"]]){const S=h[M]-l[M];if(S<=0||o[M]>=l[M]&&o[M]<=h[M])continue;const A=l.clone().add(h).multiplyScalar(.5),R=Math.min(.03,S/4);A[M]=o[M]>h[M]?h[M]-R:l[M]+R;for(const[D,x]of[[.5,.5],[.25,.5],[.75,.5],[.5,.25],[.5,.75]])if(A[v]=l[v]+(h[v]-l[v])*D,A[_]=l[_]+(h[_]-l[_])*x,p(A,1e-4)){m=!0;break e}}return n.memoryReachCache.size>=2048&&n.memoryReachCache.clear(),n.memoryReachCache.set(s,m),m}function ry(n,e,t,i){if(![e,t,i].every(Number.isFinite))return null;const s=`${Math.round(e*8)},${Math.round(t*4)},${Math.round(i*8)}`;if(n.memoryGroundCache.has(s))return n.memoryGroundCache.get(s)||null;const r=[];for(let h=-1;h<=1;h++)for(let d=-1;d<=1;d++){const u=n.meshes.get(us(Math.floor(e/16)+h,Math.floor(i/16)+d));u&&(u.updateMatrixWorld(!0),r.push(u))}if(!r.length)return null;const o=Eh(r,e,t,i),a=n.meshes.get(us(Math.floor(e/16),Math.floor(i/16))),c=Th(a?.userData.memoryWater,e,t+.4,i),l=Q0(e,t,i,o,n.memoryGroundRaycaster,n.memoryPassableTiles,n.memoryAtlas,n.memoryClimbTiles,c);return n.memoryGroundCache.size>2048&&n.memoryGroundCache.clear(),n.memoryGroundCache.set(s,l),l}function oy(n,e,t,i){if(![e,t,i].every(Number.isFinite))return!1;const s=[];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){const a=n.meshes.get(us(Math.floor(e/16)+r,Math.floor(i/16)+o));a&&(a.updateMatrixWorld(!0),s.push(a))}return s.length>0&&ey(e,t,i,Eh(s,e,t,i),n.memoryGroundRaycaster,n.memoryPassableTiles,n.memoryAtlas,n.memoryClimbTiles)}function ay(n,e){if(e.dimension!==n.dimension.id)return e;const t=e.actionTarget,i=n.memoryPoses.get(e.player),s=t||(e.inferredWorkPosition&&e.actionKind==="activity"?i?.actionTarget:void 0);if(!n.memoryPoseReset&&!e.teleport&&e.inferredWorkPosition&&i?.inferredWorkPosition&&i.dimension===e.dimension&&s&&i.actionTarget&&e.actionTime!==void 0&&i.actionTime!==void 0&&Math.abs(e.actionTime-i.actionTime)<=20&&Math.hypot(e.x-i.x,e.z-i.z)<=3&&Math.hypot(s.x+.5-i.x,s.z+.5-i.z)<=4.1&&Math.abs(s.y+.5-i.y-1.4)<=3.5){const u=n.findMemoryGround(i.x,i.y,i.z);if(u&&!u.climbing&&!u.swimming&&Math.abs(u.y-i.y)<.08&&n.memoryCanReach(u,s))return{...e,...u,actionTarget:s,moving:!1,climbing:!1,swimming:!1}}const r=n.findMemoryGround(e.x,e.y,e.z);if(r&&(!t||e.moving))return{...e,climbing:!1,swimming:!1,...r};const o=!n.memoryPoseReset&&i&&!e.teleport&&i.dimension===e.dimension&&Math.hypot(i.x-e.x,i.z-e.z)<3?i:void 0,a=[e.x,e.y,e.z,t?.x,t?.y,t?.z,o?.x,o?.y,o?.z,e.moving?1:0].join(","),c=n.memoryStanceCache.get(a);if(c)return{...e,...c};const l=u=>(n.memoryStanceCache.size>=1024&&n.memoryStanceCache.clear(),n.memoryStanceCache.set(a,u),{...e,...u}),h=r?[r]:[];if(o&&!e.moving){const u=n.findMemoryGround(o.x,o.y,o.z);u&&h.push(u)}for(const[u,f]of[[.5,0],[-.5,0],[0,.5],[0,-.5],[1,0],[-1,0],[0,1],[0,-1]]){const g=n.findMemoryGround(e.x+u,e.y,e.z+f);g&&h.push(g)}if(!e.moving&&t)for(const[u,f]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1],[2,0],[-2,0],[0,2],[0,-2]])for(const g of[e.y,Math.min(e.y+1,t.y-1)]){const y=n.findMemoryGround(t.x+.5+u,g,t.z+.5+f);y&&h.push(y)}const d=h.map(u=>{let f=Math.hypot(u.x-e.x,u.z-e.z)+Math.abs(u.y-e.y)*3.5;return o&&!e.moving&&(f+=Math.hypot(u.x-o.x,u.z-o.z)*.8),t&&!e.moving&&(n.memoryCanReach(u,t)||(f+=80)),{foot:u,score:f}}).sort((u,f)=>u.score-f.score);if(d[0]){const u=d[0].foot,f=t&&!e.moving?Math.atan2(t.x+.5-u.x,t.z+.5-u.z):e.yaw;return l({yaw:f,climbing:!1,swimming:!1,...u})}return i&&!e.teleport&&i.dimension===e.dimension&&Math.hypot(i.x-e.x,i.z-e.z)<3&&n.findMemoryGround(i.x,i.y,i.z)?{...e,x:i.x,y:i.y,z:i.z,moving:!1}:l({online:!1})}const Al=new WeakMap,Ho=new DataView(new ArrayBuffer(8)),Ah=()=>({triangles:0,a:0,b:0,c:0,d:0}),jn=(n,e)=>Math.imul(n^e,16777619)>>>0,Rl=n=>(n=Math.imul(n^n>>>16,2246822507),n=Math.imul(n^n>>>13,3266489909),(n^n>>>16)>>>0),wl=(n,e)=>(Ho.setFloat64(0,e===0?0:e,!0),jn(jn(n,Ho.getUint32(0,!0)),Ho.getUint32(4,!0))),Wo=(n,e)=>n.length===e.length&&n.every((t,i)=>Object.is(t,e[i])),cy=(n,e)=>{n.triangles+=e.triangles,n.a=n.a+e.a>>>0,n.b=n.b+e.b>>>0,n.c=n.c+e.c>>>0,n.d=n.d+e.d>>>0};function ly(n){const e=n.geometry,t=e.getAttribute("position"),i=e.getAttribute("uv"),s=e.index||void 0,r=[t,i,s],o=r.map(p=>p?.array),a=[...n.matrixWorld.elements,n.layers.mask];for(const p of r){const m=p instanceof _s?p.data.version:p?.version;a.push(m??-1,p?.count??0,p?.itemSize??0,Number(p?.normalized)),p instanceof _s&&a.push(p.offset,p.data.stride)}const c=s?.count??t?.count??0,l=e.drawRange,h=[];if(Array.isArray(n.material))for(const p of e.groups){const m=n.material[p.materialIndex??0];m&&h.push({start:Math.max(p.start,l.start),end:Math.min(c,p.start+p.count,l.start+l.count),side:m.side})}else n.material&&h.push({start:Math.max(0,l.start),end:Math.min(c,l.start+l.count),side:n.material.side});for(const p of h)a.push(p.start,p.end,p.side);const d=Al.get(n);if(d?.geometry===e&&Wo(d.attributes,r)&&Wo(d.arrays,o)&&Wo(d.state,a))return d.digest;const u=Ah(),f=new P,g=[new Array(5),new Array(5),new Array(5)],y=n.matrixWorld.determinant()<0;if(t)for(const p of h){const m=y&&p.side!==Ct?p.side===xn?Wt:xn:p.side;for(let M=p.start;M<p.end&&M+2<c;M+=3){for(let A=0;A<3;A++){const R=s?s.getX(M+A):M+A,D=g[A];f.fromBufferAttribute(t,R).applyMatrix4(n.matrixWorld),D[0]=f.x,D[1]=f.y,D[2]=f.z,D[3]=i?.getX(R)??0,D[4]=i?.getY(R)??0}let v=0;for(let A=1;A<3;A++){let R=0;for(let D=0;D<15&&!R;D++)R=g[(A+Math.floor(D/5))%3][D%5]-g[(v+Math.floor(D/5))%3][D%5];R<0&&(v=A)}let _=jn(jn(jn(2166136261,m),+!!i),n.layers.mask),S=jn(jn(jn(2654435769,m),+!!i),n.layers.mask);for(let A=0;A<3;A++)for(const R of g[(v+A)%3])_=wl(_,R),S=wl(S,R);u.triangles++,u.a=u.a+_>>>0,u.b=u.b+S>>>0,u.c=u.c+Rl(_)>>>0,u.d=u.d+Rl(S^_)>>>0}}return Al.set(n,{geometry:e,attributes:r,arrays:o,state:a,digest:u}),u}function hy(n){const e=Ah();for(const t of n)t instanceof we&&cy(e,ly(t));return`${e.triangles}:${[e.a,e.b,e.c,e.d].map(t=>t.toString(16)).join(":")}`}function uy(n,e,t,i,s){return t||n.length()<=2.6||e.length()>=1.6?!1:!s||s.position.distanceToSquared(i.position)>=.25**2||s.geometry!==i.geometry||Math.abs(s.aspect-i.aspect)>.001}function Rh(n,e,t){const i=(n||t).clone();if(n&&e&&e.lengthSq()>1e-12&&t.lengthSq()>1e-12&&t.distanceToSquared(e)>1e-8){const r=new Ai().setFromVector3(n),o=new Ai().setFromVector3(e),a=new Ai().setFromVector3(t);r.theta+=Math.atan2(Math.sin(a.theta-o.theta),Math.cos(a.theta-o.theta)),r.phi=Ot.clamp(r.phi+a.phi-o.phi,1e-6,Math.PI-1e-6),r.radius*=a.radius/o.radius,i.setFromSpherical(r)}if(i.lengthSq()<1e-12)return new P(0,0,.35);const s=i.length();return s<.35||s>180?i.setLength(Ot.clamp(s,.35,180)):i}function dy(n,e){return n.clone()}function Si(n,e,t,i,s){const r=e.length();if(!t.length||r<1e-8)return e.clone();const o=e.clone().normalize(),a=new P().crossVectors(o,new P(0,1,0));a.lengthSq()<1e-8?a.set(1,0,0):a.normalize();const c=new P().crossVectors(a,o).normalize(),l=.08*Math.tan(Math.PI/6)+.02,h=.08*Math.tan(Math.PI/6)*Math.max(.3,s?.aspect??1.6)+.02,d=f=>{const g=f.uv,y=s?.atlas?.atlas;if(!g||!y||!s?.passableTiles?.size)return!0;const p=Math.floor(g.x*y.width/y.stride)+Math.floor((1-g.y)*y.height/y.stride)*y.columns;return!s.passableTiles.has(p)};let u=r;for(const f of[-1,0,1])for(const g of[-1,0,1]){const y=n.clone().addScaledVector(a,f*h).addScaledVector(c,g*l);i.set(y,o),i.near=.01,i.far=u+.22;const p=i.intersectObjects(t,!1).find(d);p&&(u=Math.max(.08,Math.min(u,p.distance-.22)))}return u<r?e.clone().setLength(u):e.clone()}function Pl(n,e,t,i,s){const r=(m,M)=>{const v=n.clone().add(m),S=s.actor.clone().add(new P(0,M,0)).sub(v),A=S.length();i.set(v,S.normalize()),i.near=.04,i.far=Math.max(.04,A-.12);const R=s.atlas?.atlas;return!i.intersectObjects(t,!1).some(D=>{const x=D.uv&&R?Math.floor(D.uv.x*R.width/R.stride)+Math.floor((1-D.uv.y)*R.height/R.stride)*R.columns:-1;return!s.passableTiles?.has(x)})},o=m=>Math.min(7,m.length())+(r(m,.68)?4:0)+(r(m,-.82)?3:0)+(s.facing?new P(m.x,0,m.z).normalize().dot(s.facing.clone().setY(0).normalize())*.35:0);let a=e.clone(),c=Si(n,a,t,i,s);if(s.preferExistingReadable&&c.length()>=1.65&&r(c,.68)&&r(c,-.82))return a;const l=s.nearbyActors??[[-1,0],[1,0],[0,-1],[0,1]].map(([m,M])=>n.clone().add(new P(m,0,M))),h=m=>{let M=4;for(const v of l)M=Math.min(M,Si(v,m,t,i,s).length());return M};if(c.length()>=4&&r(c,.68)&&r(c,-.82)&&h(a)>=2.6)return a;const d=h(a);let u=o(c)+d*2;const f=(m,M)=>m.length()>=1.65&&M>=1.65&&r(m,.68)&&r(m,-.82);let g=f(c,d);const y=Math.atan2(e.x,e.z),p=[y,...[1,-1,2,-2,3,-3,4,-4,5,-5,6].map(m=>y+m*Math.PI/6),0,Math.PI/2,Math.PI,-Math.PI/2];for(const m of[2.8,.6,5.5])for(const M of p){const v=new P(Math.sin(M)*7,m,Math.cos(M)*7);if(c=Si(n,v,t,i,s),c.length()<2.6)continue;const _=h(v),S=f(c,_),A=o(c)+_*2+Math.cos(M-y)*.025;(S&&!g||S===g&&A>u+.1)&&(a=v,u=A,g=S)}if(Si(n,a,t,i,s).length()<2.6||!g){const m=Array.from({length:24},(_,S)=>S*Math.PI/12);let M=g?u:-1/0,v=g;for(const _ of[-8,0,15,45,65,80])for(const S of m){const A=_*Math.PI/180,R=Math.cos(A)*4.2,D=new P(Math.sin(S)*R,Math.sin(A)*4.2,Math.cos(S)*R);if(c=Si(n,D,t,i,s),c.length()<1.65||!r(c,.68))continue;const x=s.facing?new P(c.x,0,c.z).normalize().dot(s.facing.clone().setY(0).normalize()):0,E=h(D),I=f(c,E),F=o(c)+E*2+x*1.65;(I&&!v||I===v&&F>M+.1)&&(a=D,M=F,v=I)}}return a}function fy(n,e,t){const i=new Ai().setFromVector3(n),s=new Ai().setFromVector3(e),r=Math.atan2(Math.sin(s.theta-i.theta),Math.cos(s.theta-i.theta)),o=Math.min(.05,Math.max(0,t)),a=o*3,c=s.phi-i.phi,l=Math.min(1,a/(Math.hypot(r,c)||1));return i.theta+=r*l,i.phi+=c*l,i.radius+=Ot.clamp(s.radius-i.radius,-o*8,o*8),new P().setFromSpherical(i)}function my(n,e,t,i){if(e===void 0||n<=e)return n;const s=Math.min(Math.max(0,t),Math.max(0,i-.18)),r=e+(n-e)*(1-Math.exp(-s/.2));return n-r<.001?n:r}const Xt=(n,e)=>`${n},${e}`,Ti=(n,e)=>`${n},${e}`,dn=n=>({x:n.x,y:n.y,z:n.z}),Fr=n=>{let e=0;for(let t=n;t;t&=t-1)e++;return e};function py(n){const e=!!n.memoryRequestedOffset&&!!n.memoryAppliedOffset&&n.memoryRequestedOffset.length()>n.memoryAppliedOffset.length()+.1;for(const[t,i]of n.memoryPlayers){let s=!0;e&&t===n.memoryFollow?.player&&(s=n.camera.position.distanceTo(i.position.clone().add(new P(0,1,0)))>=(i.visible?1.2:1.5)),i.visible!==s&&(i.visible=s,n.renderDirty=!0)}}function gy(n,e){n.memoryAutoCamera!==e&&(n.memoryAutoCamera=e,n.memoryCameraKey="",n.memoryCameraOffset=void 0,n.memoryAppliedOffset=void 0,n.memoryCameraClearSince=void 0,n.memoryCameraSafeDistance=void 0,n.memoryDefaultReframe=void 0,n.memoryDefaultTravel=void 0,n.memoryInitialViewPending=e&&!!n.memoryFollow&&!n.orbitUserAdjusted,n.memoryInitialViewFromTravel=!1,n.updateMemoryCameraVisibility(),n.renderDirty=!0)}function yy(n,e){const t=n.memoryFollow,i=t?.player;if(i!==e?.player&&(n.renderDirty=!0),!e){n.memoryDefaultViewAttempt=void 0,n.memoryFollow=void 0,n.memoryDefaultTravel=void 0,n.memoryDefaultReframe=void 0,n.memoryInitialViewFromTravel=!1,n.controls.minDistance=2,n.controls.enableDamping=!0,n.memoryCameraKey="",n.memoryCameraOffset=void 0,n.memoryCameraTarget=void 0,n.memoryAppliedOffset=void 0,n.memoryCameraFrame=0,n.memoryCameraClearSince=void 0,n.memoryCameraSafeDistance=void 0,n.updateMemoryCameraVisibility();return}n.controls.enableDamping&&(n.controls.enableDamping=!1,n.controls.update()),n.controls.minDistance=.08;const s=n.camera.position.clone().sub(n.controls.target),r=!!n.memoryAppliedOffset&&s.distanceToSquared(n.memoryAppliedOffset)>1e-8,o=n.memoryCameraTarget?n.controls.target.clone().sub(n.memoryCameraTarget):new P,a=!!t&&o.lengthSq()>1e-8;a&&n.memoryPanOffset.add(o),!n.memoryRequestedOffset&&!n.orbitUserAdjusted&&(n.memoryRequestedOffset=new P(9,7,12)),n.memoryRequestedOffset=Rh(n.memoryRequestedOffset,n.memoryAppliedOffset,s);const c=e.dimension!==n.dimension.id;c&&n.setDimension(e.dimension),n.memoryFollow=e,n.mode!=="orbit"&&n.setMode("orbit");const l=c||i!==e.player||!!t&&Math.hypot(t.x-e.x,t.y-e.y,t.z-e.z)>8;if(l&&(n.memoryDefaultViewAttempt=void 0,n.memoryInitialViewPending=!n.orbitUserAdjusted,n.memoryInitialViewFromTravel=!1,n.memoryDefaultReframe=void 0,n.memoryCameraKey="",n.memoryCameraSafeDistance=void 0,n.memoryCameraClearSince=void 0),n.orbitUserAdjusted&&(n.memoryDefaultReframe=void 0,n.memoryInitialViewFromTravel=!1),!n.memoryAutoCamera||n.orbitUserAdjusted||l)n.memoryDefaultTravel=void 0;else if(e.moving)n.memoryDefaultTravel||={start:new P(t?.x??e.x,t?.y??e.y,t?.z??e.z)},n.memoryDefaultTravel.stop=void 0,n.memoryDefaultTravel.since=void 0;else if(n.memoryDefaultTravel){const S=new P(e.x,e.y,e.z),A=n.memoryDefaultTravel;S.distanceTo(A.start)<4?n.memoryDefaultTravel=void 0:!A.stop||S.distanceTo(A.stop)>.15?(A.stop=S,A.since=performance.now()):performance.now()-A.since>=200&&(n.memoryInitialViewPending=!0,n.memoryInitialViewFromTravel=!0,n.memoryCameraKey="",n.memoryDefaultTravel=void 0)}const h=new P(e.x,e.y+1,e.z),d=dy(h).add(n.memoryPanOffset),u=n.memoryRequestedOffset.clone(),f=performance.now(),g=Math.min(.05,Math.max(0,(f-(n.memoryCameraFrame||f))/1e3)),y=n.memoryAutoCamera&&(n.getMemoryBufferStatus().ready||n.getMemoryPresentationStatus(e).ready);n.memoryAutoCamera&&y&&n.memoryDefaultReframe&&(u.copy(fy(u,n.memoryDefaultReframe,g)),n.memoryRequestedOffset.copy(u),u.distanceToSquared(n.memoryDefaultReframe)<1e-8&&(n.memoryDefaultReframe=void 0));let p=[...d.toArray(),...u.toArray(),n.camera.aspect].join(",");if(n.memoryAutoCamera&&y&&p!==n.memoryCameraKey){const S=n.memoryInitialViewPending&&!n.orbitUserAdjusted,A=new Ut().setFromPoints([d,d.clone().add(u)]).expandByScalar(.3),R=new Ut(d.clone().add(new P(-8,-1,-8)),d.clone().add(new P(8,6,8)));S&&A.union(R);const D=O=>{const G=[];for(let V=Math.floor(O.min.x/16);V<=Math.floor(O.max.x/16);V++)for(let H=Math.floor(O.min.z/16);H<=Math.floor(O.max.z/16);H++){const $=n.meshes.get(Xt(V,H));$&&($.updateMatrixWorld(!0),G.push($))}return G},x=D(A),E=Ri(x,A).filter(O=>O.material!==n.transparentMaterial),I=O=>({position:h.clone(),geometry:hy(O),aspect:n.camera.aspect}),F=(O=!1)=>{const G=[];for(let V=-1;V<=1;V++)for(let H=-1;H<=1;H++)if(V||H){const $=n.findMemoryGround(e.x+V,e.y,e.z+H);$&&!$.climbing&&Math.abs($.y-e.y)<=.3&&G.push(new P($.x,$.y+1,$.z))}return{actor:h,nearbyActors:G,preferExistingReadable:O,facing:new P(Math.sin(e.yaw||0),0,Math.cos(e.yaw||0)),aspect:n.camera.aspect,passableTiles:n.memoryPassableTiles,atlas:n.memoryAtlas}};if(S){n.memoryDefaultViewAttempt=I(Ri(x,R).filter(G=>G.material!==n.transparentMaterial));const O=Pl(d,u,E,n.memoryGroundRaycaster,F(n.memoryInitialViewFromTravel));n.memoryInitialViewFromTravel&&O.distanceToSquared(u)>1e-8?n.memoryDefaultReframe=O:(u.copy(O),n.memoryRequestedOffset.copy(u),n.memoryAppliedOffset=void 0),p=[...d.toArray(),...u.toArray(),n.camera.aspect].join(",")}if(n.memoryInitialViewPending=!1,n.memoryInitialViewFromTravel=!1,n.memoryCameraOffset=Si(d,u,E,n.memoryGroundRaycaster,{aspect:n.camera.aspect,passableTiles:n.memoryPassableTiles,atlas:n.memoryAtlas}),!S&&!n.orbitUserAdjusted&&n.memoryCameraOffset.length()<1.6&&u.length()>2.6){const O=Ri(D(R),R).filter(V=>V.material!==n.transparentMaterial),G=I(O);if(uy(u,n.memoryCameraOffset,n.orbitUserAdjusted,G,n.memoryDefaultViewAttempt)){n.memoryDefaultViewAttempt=G;const V=F(),H=Pl(d,u,O,n.memoryGroundRaycaster,V),$=Si(d,H,O,n.memoryGroundRaycaster,V);$.length()>=1.65&&(u.copy(H),n.memoryRequestedOffset.copy(H),n.memoryCameraOffset=$,n.memoryAppliedOffset=void 0,n.memoryCameraClearSince=void 0,n.memoryCameraSafeDistance=void 0,n.memoryDefaultReframe=void 0,n.memoryDefaultRecoveries++,p=[...d.toArray(),...u.toArray(),n.camera.aspect].join(","))}}n.memoryCameraKey=p}n.memoryAutoCamera||(n.memoryCameraOffset=u.clone()),n.memoryCameraFrame=f;const m=n.memoryAppliedOffset?.length(),M=n.memoryAutoCamera?y&&n.memoryCameraOffset?n.memoryCameraOffset.length():Math.min(u.length(),m??u.length()):u.length();n.memoryAutoCamera?(!y||r||a||n.memoryCameraClearSince===void 0||m!==void 0&&M<=m+.001||n.memoryCameraSafeDistance!==void 0&&M<n.memoryCameraSafeDistance-.02)&&(n.memoryCameraClearSince=f):(n.memoryCameraClearSince=f,n.memoryCameraSafeDistance=M),n.memoryAutoCamera&&(n.memoryCameraSafeDistance=M,u.setLength(my(M,r||a?void 0:m,g,(f-n.memoryCameraClearSince)/1e3)));const v=d.clone().add(u),_=n.controls.target.distanceToSquared(d)>1e-10||n.camera.position.distanceToSquared(v)>1e-10;n.controls.target.copy(d),n.camera.position.copy(v),n.camera.lookAt(d),n.controls.minDistance=Math.min(.35,u.length()),n.memoryCameraTarget=d.clone(),n.memoryAppliedOffset=u.clone(),n.updateMemoryCameraVisibility(),Xt(Math.floor(e.x/16),Math.floor(e.z/16))!==n.streamingCenter&&n.updateStreaming(),_&&(n.renderDirty=!0)}function _y(n,e,t,i,s){e===n||t||(i(),s())}function My(n,e,t){const i=Math.atan2(Math.sin(e-n),Math.cos(e-n));return n+Math.max(-8*t,Math.min(8*t,i))}function vy(n,e,t){return!!n?.online&&n.actionTime===e&&!!n.actionTarget&&n.actionTarget.x===t.x&&n.actionTarget.y===t.y&&n.actionTarget.z===t.z&&Math.hypot(n.x-t.x-.5,n.z-t.z-.5)<=6&&Math.abs(n.y-t.y)<=8}const Cn=3/16,Qn=n=>n.states||{},ir=n=>(Number(n??0)%4+4)%4;function by(n,e){const t=Qn(n),i=!!t.upper_block_bit,s=e?.name===n.name&&!!Qn(e).upper_block_bit!==i,r=i&&s?Qn(e):t,o=!i&&s?Qn(e):t;return{direction:ir(r.direction),open:!!r.open_bit,hinge:!!o.door_hinge_bit}}function wh(n,e){let[t,i,s,r,o,a]=n;for(let c=0;c<ir(e);c++)[t,s,r,a]=[1-a,t,1-s,r];return[t,i,s,r,o,a]}function Sy(n){const e=n.open?n.hinge?[0,0,1-Cn,1,1,1]:[0,0,0,1,1,Cn]:[0,0,0,Cn,1,1];return[wh(e,n.direction)]}function xy(n){const e=Qn(n);return e.open_bit?[[[0,0,0,Cn,1,1],[1-Cn,0,0,1,1,1],[0,0,0,1,1,Cn],[0,0,1-Cn,1,1,1]][ir(e.direction)]]:[e.upside_down_bit?[0,1-Cn,0,1,1,1]:[0,0,0,1,Cn,1]]}function Ey(n){const e=Qn(n),t=e.in_wall_bit?3/16:0,i=(r,o,a,c,l,h)=>[r/16,o/16-t,a/16,c/16,l/16-t,h/16],s=[i(0,5,7,2,16,9),i(14,5,7,16,16,9)];if(e.open_bit)for(const[r,o]of[[0,2],[14,16]])s.push(i(r,6,9,o,9,15),i(r,12,9,o,15,15),i(r,9,13,o,12,15));else s.push(i(2,6,7,14,9,9),i(2,12,7,14,15,9),i(6,9,7,10,12,9));return s.map(r=>wh(r,ir(e.direction)))}function Ty(n){return ir(Qn(n).weirdo_direction)}function Ay(n,e,t){return n===0?[.5,e,0,1,t,1]:n===1?[0,e,0,.5,t,1]:n===2?[0,e,.5,1,t,1]:[0,e,0,1,t,.5]}function Ry(n,e){const t=!!Qn(n).upside_down_bit,i=Ty(n),s=t?[0,.5,0,1,1,1]:[0,0,0,1,.5,1],a=Ay(i,t?0:.5,t?.5:1);return[s,a]}function Ph(n,e){const[t,i,s,r,o,a]=n;return e===0?[[t,1-a],[r,1-a],[r,1-s],[t,1-s]]:e===1?[[t,s],[r,s],[r,a],[t,a]]:e===2?[[1-a,i],[1-s,i],[1-s,o],[1-a,o]]:e===3?[[s,i],[a,i],[a,o],[s,o]]:e===4?[[t,i],[r,i],[r,o],[t,o]]:[[1-r,i],[1-t,i],[1-t,o],[1-r,o]]}function wy(n,e){const t=Math.max(n[0],e[0]),i=Math.max(n[1],e[1]),s=Math.min(n[2],e[2]),r=Math.min(n[3],e[3]);if(t>=s||i>=r)return[n];const o=[];return n[0]<t&&o.push([n[0],n[1],t,n[3]]),s<n[2]&&o.push([s,n[1],n[2],n[3]]),n[1]<i&&o.push([t,n[1],s,i]),r<n[3]&&o.push([t,r,s,n[3]]),o}function Py(n,e){const t=n[e],i=[];for(let s=0;s<6;s++){const r=s<2?1:s<4?0:2,o=s%2===0,a=t[r+(o?3:0)],c=r===0?[1,2]:r===1?[0,2]:[0,1];let l=[[t[c[0]],t[c[1]],t[c[0]+3],t[c[1]+3]]];for(let h=0;h<n.length;h++){if(h===e)continue;const d=n[h];if(!(o?d[r]<=a&&(d[r+3]>a||h<e&&d[r+3]===a):d[r+3]>=a&&(d[r]<a||h<e&&d[r]===a)))continue;const f=[d[c[0]],d[c[1]],d[c[0]+3],d[c[1]+3]];if(l=l.flatMap(g=>wy(g,f)),!l.length)break}for(const[h,d,u,f]of l){const g=[...t];g[c[0]]=h,g[c[1]]=d,g[c[0]+3]=u,g[c[1]+3]=f,i.push({face:s,box:g})}}return i}function Dy(n){const e=n.name.includes("wall_sign"),t=n.states?.[e?"facing_direction":"ground_sign_direction"],i=Number(t??Number(n.states?.block_data??0)&(e?7:15));return e?[2,3,4,5].includes(i)?i:2:Number.isFinite(i)?(Math.trunc(i)%16+16)%16:0}function Zr(n){const e=Dy(n);if(!n.name.includes("wall_sign"))return{center:[.5,5/6,.5],angle:-e*Math.PI/8};switch(e){case 3:return{center:[.5,25/48,1/16],angle:0};case 4:return{center:[15/16,25/48,.5],angle:-Math.PI/2};case 5:return{center:[1/16,25/48,.5],angle:Math.PI/2};default:return{center:[.5,25/48,15/16],angle:Math.PI}}}const Iy=[[0,1,0],[0,-1,0],[1,0,0],[-1,0,0],[0,0,1],[0,0,-1]],Ly=[[0,0],[1,0],[1,1],[0,1]],Cy=[16383998,16351261,13061821,3847130,16701501,8439583,15961002,4673362,10329495,1481884,8991416,3949738,8606770,6192150,11546150,1908001],Uy={5:2039713,6:2039713,7:8356754,8:8356754,9:2293580,10:2293580,11:2293580,12:14981690,13:14981690,14:8171462,15:8171462,16:8171462,17:5926017,18:5926017,19:3035801,20:3035801,21:16262179,22:16262179,23:4393481,24:4393481,25:5149489,26:5149489,27:5149489,28:13458603,29:13458603,30:13458603,31:9643043,32:9643043,33:9643043,34:4738376,35:4738376,36:3484199,40:13565951,41:13565951,42:5926017};function Dh(n){const e=n.name.replace("minecraft:","");if(/^(?:\w+_)?(?:standing|wall)_sign$/.test(e))return"sign";if(e==="standing_banner"||e==="wall_banner")return"banner";if(e==="bed")return"bed";if(["chest","trapped_chest","ender_chest"].includes(e))return"chest";if(e==="frame"||e==="glow_frame"||e==="item_frame"||e==="glow_item_frame")return"frame";if(e==="flower_pot")return"flower_pot";if(e==="skull")return"skull";if(e==="cauldron"||e==="lava_cauldron")return"cauldron";if(["hopper","brewing_stand","lectern","bell","enchanting_table","anvil"].includes(e))return e}function Ny([n,e,t,i,s,r]){return[[[n,s,r],[i,s,r],[i,s,t],[n,s,t]],[[n,e,t],[i,e,t],[i,e,r],[n,e,r]],[[i,e,r],[i,e,t],[i,s,t],[i,s,r]],[[n,e,t],[n,e,r],[n,s,r],[n,s,t]],[[n,e,r],[i,e,r],[i,s,r],[n,s,r]],[[i,e,t],[n,e,t],[n,s,t],[i,s,t]]]}function Xe(n,e,t=!1,i=[0,1,2,3,4,5]){const s=Ny(n);return i.map(r=>({points:s[r],normal:Iy[r],tile:e[r],coordinates:t?Ph(n,r):Ly}))}function Zs(n,e,t){return n.map(i=>({...i,points:i.points.map(e),normal:t(i.normal)}))}function Sn(n,e){const t=Math.sin(e),i=Math.cos(e),s=([r,o,a])=>[i*r+t*a,o,-t*r+i*a];return Zs(n,([r,o,a])=>{const[c,l,h]=s([r-.5,o,a-.5]);return[c+.5,l,h+.5]},s)}function Js(n,e,t,i){return Zs(n,([s,r,o])=>[s+e,r+t,o+i],s=>s)}function Qs(n,e){return e===0?Zs(n,([t,i,s])=>[t,s,1-i],([t,i,s])=>[t,s,-i]):e===1?Zs(n,([t,i,s])=>[t,1-s,i],([t,i,s])=>[t,-s,i]):Sn(n,{2:0,3:Math.PI,4:Math.PI/2,5:-Math.PI/2}[e]||0)}function Be(n,e,t=n.side){return n.modelTextures?.[e]??t}function pt(n){return Array(6).fill(n)}function wi([n,e,t,i]){return[[n/16,1-i/16],[t/16,1-i/16],[t/16,1-e/16],[n/16,1-e/16]]}const Dl=["up","down","east","west","south","north"];function Jr(n,e,t,i=[.5,.5,.5],s=!1){const r=Math.sin(t),o=Math.cos(t),a=([c,l,h])=>e==="x"?[c,l*o-h*r,l*r+h*o]:e==="y"?[c*o+h*r,l,-c*r+h*o]:[c*o-l*r,c*r+l*o,h];return Zs(n,c=>{const l=c.map((h,d)=>(h-i[d])*(s&&["x","y","z"][d]!==e?1/o:1));return a(l).map((h,d)=>h+i[d])},a)}function In(n,e){const t=[];for(const i of qy[n]||[]){const s=[...i.from,...i.to].map(a=>a/16),r=Dl.flatMap((a,c)=>i.faces[a]?[c]:[]);let o=Xe(s,pt(0),!0,r);for(let a=0;a<o.length;a++){const c=i.faces[Dl[r[a]]];o[a].tile=e[c.texture.replace("#","")]??0,c.uv&&(o[a].coordinates=wi(c.uv));const l=(c.rotation||0)/90;for(let h=0;h<l;h++)o[a].coordinates=[o[a].coordinates[3],...o[a].coordinates.slice(0,3)]}i.rotation&&(o=Jr(o,i.rotation.axis,i.rotation.angle*Math.PI/180,i.rotation.origin.map(a=>a/16),i.rotation.rescale)),t.push(...o)}return t}function Fy(n,e){const t=Be(e,"signEdge"),i=Be(e,"post");let s=Xe([0,7/12,11/24,1,13/12,13/24],[t,t,t,t,Be(e,"signFront"),Be(e,"signBack")]);return n.name.includes("wall_sign")?(s=Js(s,0,-5/16,-7/16),Sn(s,Zr(n).angle)):(s.push(...Xe([11/24,0,11/24,13/24,7/12,13/24],pt(i))),Sn(s,Zr(n).angle))}function ky(n,e,t,i){const s=!!n.states?.head_piece_bit,r=i.entity?.type==="bed"?i.entity.color:0,o=t.decorativeBeds?.[String(Number.isInteger(r)&&r>=0&&r<16?r:0)],a=(g,y=e.side)=>o?.[g]??Be(e,g,y),c=s?"head":"foot",l=a("leg",e.bottom),h=Xe([0,3/16,0,1,9/16,1],[a(`${c}Top`,e.top),l,a(`${c}Side`),a(`${c}Side`),a(s?"headEnd":"footSide"),a(s?"headSide":"footEnd")]);h[0].coordinates=[[0,1],[1,1],[1,0],[0,0]],h[3].coordinates=[[1,0],[0,0],[0,1],[1,1]];const d=s?5:4;h[d].seam=!0,i.joined&&h.splice(d,1);const u=s?13/16:0,f=s?1:3/16;return h.push(...Xe([0,0,u,3/16,3/16,f],pt(l),!0)),h.push(...Xe([13/16,0,u,1,3/16,f],pt(l),!0)),Sn(h,-Number(n.states?.direction||0)*Math.PI/2)}function Oy(n,e,t=0,i=!1){const s=t===-1?0:.0625,r=t===1?1:15/16,o=Number(n.states?.facing_direction??2),a={2:"north",3:"south",4:"west",5:"east"}[o]||"north",c=e.faces?.[a]??e.side,l=(y,p=e.side)=>{const m=Be(e,y,p),M=y==="chestTop"?"Top":y==="chestBottom"?"Bottom":y[0].toUpperCase()+y.slice(1);return t?Be(e,`${t>0?"doubleLeft":"doubleRight"}${M}`,m):m};let h=Xe([s,0,1/16,r,9/16,15/16],[l("chestTop",e.top),l("chestBottom",e.bottom),l("bodySide"),l("bodySide"),l("bodyBack"),l("bodyFront",c)],!1,[1,2,3,4,5]),d=Xe([s,9/16,1/16,r,14/16,15/16],[l("chestTop",e.top),l("chestBottom",e.bottom),l("lidSide"),l("lidSide"),l("lidBack"),l("lidFront",c)],!1,[0,2,3,4,5]);const u=t===-1?0:t===1?15/16:7/16,f=t===-1?1/16:t===1?1:9/16;if(d.push(...Xe([u,8/16,0,f,12/16,1/16],pt(Be(e,"latch",c)))),t&&(h=h.filter(y=>y.normal[0]!==t),d=d.filter(y=>y.normal[0]!==t)),i){const y=t===-1?s:s+.0625,p=t===1?r:r-1/16,m=[y,1/16,2/16,p,9/16,14/16],M={...e,tint:[.42,.42,.42]},v=A=>A.map(R=>({...R,material:M}));h.push(...v(Xe([y,0,2/16,p,1/16,14/16],pt(l("chestBottom",e.bottom)),!1,[0])));const _=Xe(m,pt(l("bodySide")),!1,[2,3,4,5]).filter(A=>!t||A.normal[0]!==t).map(A=>({...A,points:[...A.points].reverse(),coordinates:[...A.coordinates].reverse(),normal:A.normal.map(R=>-R)}));h.push(...v(_));const S=l("chestTop",e.top);for(const A of[[s,8/16,1/16,r,9/16,2/16],[s,8/16,14/16,r,9/16,15/16]])h.push(...Xe(A,pt(S),!0,[0]));t!==-1&&h.push(...Xe([s,8/16,2/16,y,9/16,14/16],pt(S),!0,[0])),t!==1&&h.push(...Xe([p,8/16,2/16,r,9/16,14/16],pt(S),!0,[0])),d.push(...v(Xe([s,9/16,1/16,r,14/16,15/16],pt(l("chestBottom",e.bottom)),!1,[1])))}const g=o>=2&&o<=5?o:2;return{body:Qs(h,g).map(y=>({...y,chestJoin:t})),lid:Qs(d,g).map(y=>({...y,chestJoin:t}))}}function zy(n,e,t){const{body:i,lid:s}=Oy(n,e,t);return[...i,...s]}function By(n,e,t){const i=Be(e,"cloth"),s=Be(e,"post",e.bottom),r=t?.type==="banner"?15-t.baseColor:0,o=Cy[Number.isInteger(r)&&r>=0&&r<16?r:0],a={...e,tint:[(o>>>16&255)/255,(o>>>8&255)/255,(o&255)/255]};let c=Xe([1/12,1/6,13/24,11/12,11/6,7/12],pt(i)).map(l=>({...l,material:a}));return c.push(...Xe([1/12,7/4,11/24,11/12,11/6,13/24],pt(s))),n.name==="minecraft:wall_banner"?(c=Js(c,0,-5/16,-7/16),Sn(c,{3:0,4:-Math.PI/2,2:Math.PI,5:Math.PI/2}[Number(n.states?.facing_direction)]||0)):(c.push(...Xe([11/24,0,11/24,13/24,7/4,13/24],pt(s))),Sn(c,-Number(n.states?.ground_sign_direction||0)*Math.PI/8))}function Gy(n,e,t){if(t?.type==="item_frame"&&t.item?.map)return[];const i=Be(e,"frameBack"),s=Be(e,"frameRim",e.bottom),r=Xe([3/16,3/16,15.5/16,13/16,13/16,1],pt(i),!1,[4,5]);for(const a of r)a.coordinates=wi([3,3,13,13]);const o=[{box:[2/16,2/16,15/16,14/16,3/16,1],faces:[0,1,2,3,4,5],uv:{0:[2,15,14,16],1:[2,0,14,1],2:[0,13,1,14],3:[15,13,16,14],4:[2,13,14,14],5:[2,13,14,14]}},{box:[2/16,13/16,15/16,14/16,14/16,1],faces:[0,1,2,3,4,5],uv:{0:[2,15,14,16],1:[2,0,14,1],2:[0,2,1,3],3:[15,2,16,3],4:[2,2,14,3],5:[2,2,14,3]}},{box:[2/16,3/16,15/16,3/16,13/16,1],faces:[2,3,4,5],uv:{2:[0,3,1,13],3:[15,3,16,13],4:[2,3,3,13],5:[13,3,14,13]}},{box:[13/16,3/16,15/16,14/16,13/16,1],faces:[2,3,4,5],uv:{2:[0,3,1,13],3:[15,3,16,13],4:[13,3,14,13],5:[2,3,3,13]}}];for(const a of o){const c=Xe(a.box,pt(s),!1,a.faces);for(let l=0;l<c.length;l++)c[l].coordinates=wi(a.uv[a.faces[l]]);r.push(...c)}return Qs(r,Number(n.states?.facing_direction??2))}function Vy(n){const e=Be(n,"potSide"),t=Be(n,"potTop",e),i=Be(n,"potSoil",n.top),s=[],r=[{box:[5/16,0,5/16,6/16,6/16,11/16],faces:[0,1,2,3,4,5],uv:{0:[5,5,6,11],1:[5,5,6,11],2:[5,10,11,16],3:[5,10,11,16],4:[5,10,6,16],5:[10,10,11,16]}},{box:[10/16,0,5/16,11/16,6/16,11/16],faces:[0,1,2,3,4,5],uv:{0:[10,5,11,11],1:[10,5,11,11],2:[5,10,11,16],3:[5,10,11,16],4:[10,10,11,16],5:[5,10,6,16]}},{box:[6/16,0,5/16,10/16,6/16,6/16],faces:[0,1,4,5],uv:{0:[6,5,10,6],1:[6,10,10,11],4:[6,10,10,16],5:[6,10,10,16]}},{box:[6/16,0,10/16,10/16,6/16,11/16],faces:[0,1,4,5],uv:{0:[6,10,10,11],1:[6,5,10,6],4:[6,10,10,16],5:[6,10,10,16]}}];for(const a of r){const c=Xe(a.box,[t,e,e,e,e,e],!1,a.faces);for(let l=0;l<c.length;l++)c[l].coordinates=wi(a.uv[a.faces[l]]);s.push(...c)}const o=Xe([6/16,0,6/16,10/16,4/16,10/16],[i,e,e,e,e,e],!1,[0,1]);return o[0].coordinates=wi([6,6,10,10]),o[1].coordinates=wi([6,12,10,16]),s.push(...o),s}function Hy(n,e,t,i){const s=i?.type==="skull"?i.skullType:0,r=t.decorativeSkulls?.[String(s)],o=(h,d=e.side)=>r?.[h]??Be(e,h,d);let a=Xe([4/16,0,4/16,12/16,8/16,12/16],[o("top",e.top),o("bottom",e.bottom),o("side"),o("side"),o("back"),o("front")]);if(s===5){const h=([d,u,f],[g,y,p])=>[.5+d*3/64,(u-16)*3/64,.5+f*3/64,.5+(d+g)*3/64,(u+y-16)*3/64,.5+(f+p)*3/64];a=Xe(h([-8,16,-10],[16,16,16]),[o("top"),o("bottom"),o("side"),o("side"),o("back"),o("front")]),a.push(...Xe(h([-6,20,-24],[12,5,16]),[o("snoutTop",o("top")),o("snoutBottom",o("bottom")),o("snoutSide",o("side")),o("snoutSide",o("side")),o("back"),o("snoutFront",o("front"))])),a.push(...Xe(h([-6,16,-24],[12,4,16]),[o("jawTop",o("bottom")),o("jawBottom",o("bottom")),o("jawSide",o("side")),o("jawSide",o("side")),o("back"),o("jawFront",o("front"))]));for(const d of[-5,3])a.push(...Xe(h([d,32,-4],[2,4,6]),pt(o("horn",o("top"))))),a.push(...Xe(h([d,25,-22],[2,2,4]),pt(o("nostril",o("top")))))}const c=Number(n.states?.facing_direction??1);if(c===1)return Sn(a,-(i?.type==="skull"?i.rotation:0)*Math.PI/180);const l=s===5?7/32:4/16;return a=Js(a,0,4/16,l),Qs(a,c>=2&&c<=5?c:2)}function Il(n){const e=Be(n,"bookCover",n.bottom),t=Be(n,"bookPages",n.top),i=[];for(const s of[-1,1]){let r=Xe([s<0?.125:.5,0,.1875,s<0?.5:.875,.015625,.8125],pt(e));r.push(...Xe([s<0?3/16:.5,1/64,4/16,s<0?.5:13/16,3/64,12/16],pt(t))),i.push(...Jr(r,"z",-s*Math.PI/32,[.5,0,.5]))}return i}function Wy(n,e,t){const i=Dh(n),s=n.states||{},r={top:Be(e,"top",e.top),bottom:Be(e,"bottom",e.bottom),side:Be(e,"side"),inside:Be(e,"inside",e.bottom),stand:Be(e,"stand"),base:Be(e,"base",e.bottom),front:Be(e,"front"),sides:Be(e,"sides"),body:Be(e,"body"),bar:Be(e,"bar"),post:Be(e,"post")};if(i==="cauldron"){const o=In("cauldron",r),a=Math.max(0,Math.min(6,Number(s.fill_level||0))),c=s.cauldron_liquid??(n.name==="minecraft:lava_cauldron"?"lava":"water");if(a){const l=(6+1.5*a)/16,h=c==="water"&&t?.type==="cauldron"?t.color??Uy[t.potionId??-1]:void 0,d=Xe([2/16,l,2/16,14/16,l,14/16],pt(h===void 0?Be(e,"liquid"):Be(e,"customLiquid",Be(e,"liquid"))),!1,[0])[0],u=h===void 0?void 0:[(h>>>16&255)/255,(h>>>8&255)/255,(h&255)/255];d.material={...e,transparent:c!=="lava",tint:u},d.coordinates=wi([2,2,14,14]),o.push(d)}return o}if(i==="hopper"){const o=Number(s.facing_direction||0);return o===0?In("hopper",r):Qs(In("hopper_side",r),o>=2&&o<=5?o:2)}if(i==="brewing_stand"){const o=In("brewing_stand",r);for(let a=0;a<3;a++){const c=t?.type==="brewing_stand"?t.bottles[a]:!!s[`brewing_stand_slot_${"abc"[a]}_bit`];o.push(...In(`brewing_stand_${c?"bottle":"empty"}${a}`,r))}return o}if(i==="lectern"){const o=In("lectern",r);if(t?.type==="lectern"&&t.hasBook){const a=Js(Il(e),0,1.046875,.0625);o.push(...Jr(a,"x",-Math.PI/8))}return Sn(o,(2-Number(s.direction||0))*Math.PI/2)}if(i==="enchanting_table"){const o=In("enchanting_table",r);return o.push(...Js(Jr(Il(e),"x",-Math.PI/3,[.5,0,.5]),0,17/16,0)),o}if(i==="anvil")return Sn(In("template_anvil",r),-Number(s.direction||0)*Math.PI/2);if(i==="bell"){const o=s.attachment,a=Number(s.direction||0);let l=In(o==="hanging"?"bell_ceiling":o==="side"?"bell_wall":o==="multiple"?"bell_between_walls":"bell_floor",r);l=Sn(l,(o==="side"||o==="multiple"?1-a:-a)*Math.PI/2);const h=Xe([5/16,6/16,5/16,11/16,13/16,11/16],[Be(e,"bellBodyTop",e.top),Be(e,"bellBottom",e.bottom),...Array(4).fill(Be(e,"bellBodySide"))],!1,[0,2,3,4,5]),d=Xe([4/16,4/16,4/16,12/16,6/16,12/16],[Be(e,"bellBodyTop",e.top),Be(e,"bellBottom",e.bottom),...Array(4).fill(Be(e,"bellRimSide"))]);return[...l,...h,...d]}return[]}function Xy(n,e,t,i={}){switch(Dh(n)){case"sign":return Fy(n,e);case"bed":return ky(n,e,t,i);case"chest":return zy(n,e,i.chestJoin||0);case"banner":return By(n,e,i.entity);case"frame":return Gy(n,e,i.entity);case"flower_pot":return Vy(e);case"skull":return Hy(n,e,t,i.entity);case"cauldron":case"hopper":case"brewing_stand":case"lectern":case"bell":case"enchanting_table":case"anvil":return Wy(n,e,i.entity);default:return}}const qy={cauldron:[{from:[0,3,0],to:[2,16,16],faces:{north:{texture:"#side"},east:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},up:{texture:"#top"},down:{texture:"#inside"}}},{from:[2,3,2],to:[14,4,14],faces:{up:{texture:"#inside"},down:{texture:"#inside"}}},{from:[14,3,0],to:[16,16,16],faces:{north:{texture:"#side"},east:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},up:{texture:"#top"},down:{texture:"#inside"}}},{from:[2,3,0],to:[14,16,2],faces:{north:{texture:"#side"},south:{texture:"#side"},up:{texture:"#top"},down:{texture:"#inside"}}},{from:[2,3,14],to:[14,16,16],faces:{north:{texture:"#side"},south:{texture:"#side"},up:{texture:"#top"},down:{texture:"#inside"}}},{from:[0,0,0],to:[4,3,2],faces:{north:{texture:"#side"},east:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},down:{texture:"#bottom"}}},{from:[0,0,2],to:[2,3,4],faces:{east:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},down:{texture:"#bottom"}}},{from:[12,0,0],to:[16,3,2],faces:{north:{texture:"#side"},east:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},down:{texture:"#bottom"}}},{from:[14,0,2],to:[16,3,4],faces:{east:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},down:{texture:"#bottom"}}},{from:[0,0,14],to:[4,3,16],faces:{north:{texture:"#side"},east:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},down:{texture:"#bottom"}}},{from:[0,0,12],to:[2,3,14],faces:{north:{texture:"#side"},east:{texture:"#side"},west:{texture:"#side"},down:{texture:"#bottom"}}},{from:[12,0,14],to:[16,3,16],faces:{north:{texture:"#side"},east:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},down:{texture:"#bottom"}}},{from:[14,0,12],to:[16,3,14],faces:{north:{texture:"#side"},east:{texture:"#side"},west:{texture:"#side"},down:{texture:"#bottom"}}}],hopper:[{from:[0,10,0],to:[16,11,16],faces:{down:{texture:"#side"},up:{texture:"#inside"},north:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}},{from:[0,11,0],to:[2,16,16],faces:{up:{texture:"#top"},north:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}},{from:[14,11,0],to:[16,16,16],faces:{up:{texture:"#top"},north:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}},{from:[2,11,0],to:[14,16,2],faces:{up:{texture:"#top"},north:{texture:"#side"},south:{texture:"#side"}}},{from:[2,11,14],to:[14,16,16],faces:{up:{texture:"#top"},north:{texture:"#side"},south:{texture:"#side"}}},{from:[4,4,4],to:[12,10,12],faces:{down:{texture:"#side"},north:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}},{from:[6,0,6],to:[10,4,10],faces:{down:{texture:"#side"},north:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}}],hopper_side:[{from:[0,10,0],to:[16,11,16],faces:{down:{texture:"#side"},up:{texture:"#inside"},north:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}},{from:[0,11,0],to:[2,16,16],faces:{up:{texture:"#top"},north:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}},{from:[14,11,0],to:[16,16,16],faces:{up:{texture:"#top"},north:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}},{from:[2,11,0],to:[14,16,2],faces:{up:{texture:"#top"},north:{texture:"#side"},south:{texture:"#side"}}},{from:[2,11,14],to:[14,16,16],faces:{up:{texture:"#top"},north:{texture:"#side"},south:{texture:"#side"}}},{from:[4,4,4],to:[12,10,12],faces:{down:{texture:"#side"},north:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}},{from:[6,4,0],to:[10,8,4],faces:{down:{texture:"#side"},up:{texture:"#side"},north:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}}],brewing_stand:[{from:[7,0,7],to:[9,14,9],faces:{down:{uv:[7,7,9,9],texture:"#stand"},up:{uv:[7,7,9,9],texture:"#stand"},north:{uv:[7,2,9,16],texture:"#stand"},south:{uv:[7,2,9,16],texture:"#stand"},west:{uv:[7,2,9,16],texture:"#stand"},east:{uv:[7,2,9,16],texture:"#stand"}}},{from:[9,0,5],to:[15,2,11],faces:{down:{uv:[9,5,15,11],texture:"#base"},up:{uv:[9,5,15,11],texture:"#base"},north:{uv:[9,14,15,16],texture:"#base"},south:{uv:[9,14,15,16],texture:"#base"},west:{uv:[5,14,11,16],texture:"#base"},east:{uv:[5,14,11,16],texture:"#base"}}},{from:[2,0,1],to:[8,2,7],faces:{down:{uv:[2,1,8,7],texture:"#base"},up:{uv:[2,1,8,7],texture:"#base"},north:{uv:[2,14,8,16],texture:"#base"},south:{uv:[2,14,8,16],texture:"#base"},west:{uv:[1,14,7,16],texture:"#base"},east:{uv:[1,14,7,16],texture:"#base"}}},{from:[2,0,9],to:[8,2,15],faces:{down:{uv:[2,9,8,15],texture:"#base"},up:{uv:[2,9,8,15],texture:"#base"},north:{uv:[2,14,8,16],texture:"#base"},south:{uv:[2,14,8,16],texture:"#base"},west:{uv:[9,14,15,16],texture:"#base"},east:{uv:[9,14,15,16],texture:"#base"}}}],lectern:[{from:[0,0,0],to:[16,2,16],faces:{north:{uv:[0,14,16,16],texture:"#base"},east:{uv:[0,6,16,8],texture:"#base"},south:{uv:[0,6,16,8],texture:"#base"},west:{uv:[0,6,16,8],texture:"#base"},up:{uv:[0,0,16,16],rotation:180,texture:"#base"},down:{uv:[0,0,16,16],texture:"#bottom"}}},{from:[4,2,4],to:[12,15,12],faces:{north:{uv:[0,0,8,13],texture:"#front"},east:{uv:[2,16,15,8],rotation:90,texture:"#sides"},south:{uv:[8,3,16,16],texture:"#front"},west:{uv:[2,8,15,16],rotation:90,texture:"#sides"}}},{from:[.01,12,3],to:[15.99,16,16],rotation:{angle:-22.5,axis:"x",origin:[8,8,8]},faces:{north:{uv:[0,0,16,4],texture:"#sides"},east:{uv:[0,4,13,8],texture:"#sides"},south:{uv:[0,4,16,8],texture:"#sides"},west:{uv:[0,4,13,8],texture:"#sides"},up:{uv:[0,1,16,14],rotation:180,texture:"#top"},down:{uv:[0,0,16,13],texture:"#bottom"}}}],bell_floor:[{from:[2,13,7],to:[14,15,9],faces:{north:{uv:[2,2,14,4],texture:"#bar"},south:{uv:[2,3,14,5],texture:"#bar"},up:{uv:[2,3,14,5],texture:"#bar"},down:{uv:[2,3,14,5],texture:"#bar"}}},{from:[14,0,6],to:[16,16,10],faces:{north:{uv:[0,1,2,16],texture:"#post"},east:{uv:[0,1,4,16],texture:"#post"},south:{uv:[0,1,2,16],texture:"#post"},west:{uv:[0,1,4,16],texture:"#post"},up:{uv:[0,0,2,4],texture:"#post"},down:{uv:[0,0,2,4],texture:"#post"}}},{from:[0,0,6],to:[2,16,10],faces:{north:{uv:[0,1,2,16],texture:"#post"},east:{uv:[0,1,4,16],texture:"#post"},south:{uv:[0,1,2,16],texture:"#post"},west:{uv:[0,1,4,16],texture:"#post"},up:{uv:[0,0,2,4],texture:"#post"},down:{uv:[0,0,2,4],texture:"#post"}}}],bell_wall:[{from:[3,13,7],to:[16,15,9],faces:{north:{uv:[2,2,14,4],texture:"#bar"},east:{uv:[5,4,7,6],texture:"#bar"},south:{uv:[2,3,14,5],texture:"#bar"},west:{uv:[5,4,7,6],texture:"#bar"},up:{uv:[2,3,14,5],texture:"#bar"},down:{uv:[2,3,14,5],texture:"#bar"}}}],bell_ceiling:[{from:[7,13,7],to:[9,16,9],faces:{north:{uv:[7,2,9,5],texture:"#bar"},east:{uv:[1,2,3,5],texture:"#bar"},south:{uv:[6,2,8,5],texture:"#bar"},west:{uv:[4,2,6,5],texture:"#bar"},up:{uv:[1,3,3,5],texture:"#bar"}}}],bell_between_walls:[{from:[0,13,7],to:[16,15,9],faces:{north:{uv:[2,2,14,4],texture:"#bar"},east:{uv:[5,4,7,6],texture:"#bar"},south:{uv:[2,3,14,5],texture:"#bar"},west:{uv:[5,4,7,6],texture:"#bar"},up:{uv:[2,3,14,5],texture:"#bar"},down:{uv:[2,3,14,5],texture:"#bar"}}}],enchanting_table:[{from:[0,0,0],to:[16,12,16],faces:{down:{uv:[0,0,16,16],texture:"#bottom"},up:{uv:[0,0,16,16],texture:"#top"},north:{uv:[0,4,16,16],texture:"#side"},south:{uv:[0,4,16,16],texture:"#side"},west:{uv:[0,4,16,16],texture:"#side"},east:{uv:[0,4,16,16],texture:"#side"}}}],template_anvil:[{from:[2,0,2],to:[14,4,14],faces:{down:{uv:[2,2,14,14],texture:"#body",rotation:180},up:{uv:[2,2,14,14],texture:"#body",rotation:180},north:{uv:[2,12,14,16],texture:"#body"},south:{uv:[2,12,14,16],texture:"#body"},west:{uv:[0,2,4,14],texture:"#body",rotation:90},east:{uv:[4,2,0,14],texture:"#body",rotation:270}}},{from:[4,4,3],to:[12,5,13],faces:{up:{uv:[4,3,12,13],texture:"#body",rotation:180},north:{uv:[4,11,12,12],texture:"#body"},south:{uv:[4,11,12,12],texture:"#body"},west:{uv:[4,3,5,13],texture:"#body",rotation:90},east:{uv:[5,3,4,13],texture:"#body",rotation:270}}},{from:[6,5,4],to:[10,10,12],faces:{north:{uv:[6,6,10,11],texture:"#body"},south:{uv:[6,6,10,11],texture:"#body"},west:{uv:[5,4,10,12],texture:"#body",rotation:90},east:{uv:[10,4,5,12],texture:"#body",rotation:270}}},{from:[3,10,0],to:[13,16,16],faces:{down:{uv:[3,0,13,16],texture:"#body",rotation:180},up:{uv:[3,0,13,16],texture:"#top",rotation:180},north:{uv:[3,0,13,6],texture:"#body"},south:{uv:[3,0,13,6],texture:"#body"},west:{uv:[10,0,16,16],texture:"#body",rotation:90},east:{uv:[16,0,10,16],texture:"#body",rotation:270}}}],brewing_stand_bottle0:[{from:[8,0,8],to:[16,16,8],faces:{north:{uv:[0,0,8,16],texture:"#stand"},south:{uv:[8,0,0,16],texture:"#stand"}}}],brewing_stand_bottle1:[{from:[-.41,0,8],to:[7.59,16,8],rotation:{origin:[8,8,8],axis:"y",angle:-45},faces:{north:{uv:[8,0,0,16],texture:"#stand"},south:{uv:[0,0,8,16],texture:"#stand"}}}],brewing_stand_bottle2:[{from:[-.41,0,8],to:[7.59,16,8],rotation:{origin:[8,8,8],axis:"y",angle:45},faces:{north:{uv:[8,0,0,16],texture:"#stand"},south:{uv:[0,0,8,16],texture:"#stand"}}}],brewing_stand_empty0:[{from:[8,0,8],to:[16,16,8],faces:{north:{uv:[16,0,8,16],texture:"#stand"},south:{uv:[8,0,16,16],texture:"#stand"}}}],brewing_stand_empty1:[{from:[0,0,8],to:[8,16,8],rotation:{origin:[8,8,8],axis:"y",angle:-45},faces:{north:{uv:[8,0,16,16],texture:"#stand"},south:{uv:[16,0,8,16],texture:"#stand"}}}],brewing_stand_empty2:[{from:[0,0,8],to:[8,16,8],rotation:{origin:[8,8,8],axis:"y",angle:45},faces:{north:{uv:[8,0,16,16],texture:"#stand"},south:{uv:[16,0,8,16],texture:"#stand"}}}]},Ih=[[0,1,0],[0,-1,0],[1,0,0],[-1,0,0],[0,0,1],[0,0,-1]],ei=[[0,0],[1,0],[1,1],[0,1]];function Dt(n,e,t,i){return[[n/16,1-i/16],[t/16,1-i/16],[t/16,1-e/16],[n/16,1-e/16]]}function Yy([n,e,t,i,s,r]){return[[[n,s,r],[i,s,r],[i,s,t],[n,s,t]],[[n,e,t],[i,e,t],[i,e,r],[n,e,r]],[[i,e,r],[i,e,t],[i,s,t],[i,s,r]],[[n,e,t],[n,e,r],[n,s,r],[n,s,t]],[[n,e,r],[i,e,r],[i,s,r],[n,s,r]],[[i,e,t],[n,e,t],[n,s,t],[i,s,t]]]}function ri(n,e,t,i=[0,1,2,3,4,5]){const s=Yy(n);return i.map(r=>({points:s[r],normal:Ih[r],tile:e,coordinates:t[r]}))}function en(n,e,t,i=ei,s=t){return[{points:n,normal:e,tile:t,coordinates:i},{points:[...n].reverse(),normal:e.map(r=>-r),tile:s,coordinates:[...i].reverse()}]}function Mn(n,e,t){return n.map(i=>{const s=t(i.normal),r=i.cullFace===void 0?void 0:Ih.findIndex(o=>o.every((a,c)=>Math.abs(a-s[c])<1e-6));return{...i,points:i.points.map(e),normal:s,cullFace:r===-1?void 0:r}})}function er(n,e){for(let t=0;t<e;t++)n=Mn(n,([i,s,r])=>[1-r,s,i],([i,s,r])=>[-r,s,i]);return n}function $y(n){return(n.states?.bamboo_stalk_thickness==="thick"?3:2)/16}function jy(n,e){const t=$y(n),i=t*16,s=(1-t)/2,r=1-s,o=e.modelTextures?.stem??e.side,a=e.modelTextures?.cap??o,c=ri([s,0,s,r,1,r],o,[Dt(13,0,13+i,i),Dt(13,4,13+i,4+i),...Array.from({length:4},()=>Dt(0,0,i,16))]);if(c[0].tile=a,c[0].cullFace=0,c[1].tile=a,c[1].cullFace=1,n.states?.bamboo_leaf_size!=="no_leaves"&&e.modelTextures?.leaves!==void 0){const l=e.modelTextures.leaves;c.push(...en([[.05,0,.5],[.95,0,.5],[.95,1,.5],[.05,1,.5]],[0,0,1],l)),c.push(...en([[.5,0,.95],[.5,0,.05],[.5,1,.05],[.5,1,.95]],[1,0,0],l))}return c}function Ky(n,e){const t=Dt(7,6,9,16);let i=ri([7/16,0,7/16,9/16,10/16,9/16],e.side,[Dt(7,6,9,8),Dt(7,13,9,15),t,t,t,t]);const s=n.states?.torch_facing_direction;if(!["west","east","north","south"].includes(String(s)))return i;const r=Math.PI/8,o=Math.cos(r),a=Math.sin(r);return i=Mn(i,([c,l,h])=>[(c-.5)*o+l*a,3.5/16-(c-.5)*a+l*o,h],([c,l,h])=>[c*o+l*a,-c*a+l*o,h]),er(i,{west:0,north:1,east:2,south:3}[String(s)])}function Zy(n,e){const t=Dt(2,6,6,7),i=Dt(0,0,2,15),s=ri([6/16,0,6/16,10/16,1/16,10/16],e.side,[Dt(2,2,6,6),Dt(6,6,2,2),t,t,t,t]);s[1].cullFace=1;const r=ri([7/16,1/16,7/16,9/16,1,9/16],e.side,[Dt(2,0,4,2),ei,i,i,i,i],[0,2,3,4,5]);r[0].cullFace=0;const o=[...s,...r];switch(Number(n.states?.facing_direction??1)){case 0:return Mn(o,([a,c,l])=>[a,1-c,1-l],([a,c,l])=>[a,-c,-l]);case 2:return Mn(o,([a,c,l])=>[a,1-l,c],([a,c,l])=>[a,-l,c]);case 3:return Mn(o,([a,c,l])=>[a,l,1-c],([a,c,l])=>[a,l,-c]);case 4:return Mn(o,([a,c,l])=>[c,1-a,l],([a,c,l])=>[c,-a,l]);case 5:return Mn(o,([a,c,l])=>[1-c,a,l],([a,c,l])=>[-c,a,l]);default:return o}}function Jy(n){const e=Number(n.states?.facing_direction??n.states?.block_data??1)&7;return[[0,-1,0],[0,1,0],[0,0,1],[0,0,-1],[1,0,0],[-1,0,0]][e]||[0,1,0]}function Qy(n){return!!(n&&/^(?:sticky)?piston_?arm_?collision$/i.test(n.name.replace("minecraft:","")))}function Ll(n,e,t=!1){const i=e.modelTextures||{},s=i.pistonSide??e.side,r=Jy(n),o=["bottom","top","south","north","east","west"],a=Number(n.states?.facing_direction??n.states?.block_data??1)&7,c=o[a]||"top",l=i.pistonTop??(c==="top"?e.top:c==="bottom"?e.bottom:e.faces?.[c]??s),h=i.pistonBottom??e.bottom,d=i.pistonInner??s,u=i.pistonUnsticky??l,f=(p,m)=>p.map((M,v)=>p[(v+m/90)%4]),g=(p,m)=>{const M=Dt(0,p,16,m);return[M,f(M,180),f(M,90),f(M,270),ei,ei]};let y;if(Qy(n)){y=ri([0,0,0,1,1,4/16],s,g(0,4)),y[4].tile=u,y[5].tile=l;for(const m of[0,1,2,3,5])y[m].cullFace=m;const p=[f(Dt(0,0,16,4),270),f(Dt(0,0,16,4),90),Dt(0,0,16,4),Dt(16,4,0,0),ei,ei];y.push(...ri([6/16,6/16,4/16,10/16,10/16,20/16],s,p,[0,1,2,3]))}else y=ri([0,0,t?4/16:0,1,1,1],s,g(t?4:0,16)),y[4].tile=h,y[5].tile=t?d:l,y.forEach((p,m)=>{(!t||m!==5)&&(p.cullFace=m)});return r[1]>0?Mn(y,([p,m,M])=>[p,1-M,m],([p,m,M])=>[p,-M,m]):r[1]<0?Mn(y,([p,m,M])=>[p,M,1-m],([p,m,M])=>[p,M,-m]):er(y,r[0]>0?1:r[2]>0?2:r[0]<0?3:0)}function e_(n,e){const t=Number(n.states?.rail_direction??0),i=1/16,s=(l,h)=>i+(t===2?l:t===3?1-l:t===4?1-h:t===5?h:0),r=[[0,s(0,1),1],[1,s(1,1),1],[1,s(1,0),0],[0,s(0,0),0]],o=t===2?[-Math.SQRT1_2,Math.SQRT1_2,0]:t===3?[Math.SQRT1_2,Math.SQRT1_2,0]:t===4?[0,Math.SQRT1_2,Math.SQRT1_2]:t===5?[0,Math.SQRT1_2,-Math.SQRT1_2]:[0,1,0],a=t>=6?t-6:[1,2,3].includes(t)?1:0;let c=ei;for(let l=0;l<a;l++)c=c.map(([h,d])=>[1-d,h]);return en(r,o,e.side,c)}function t_(n,e){const t=Number(n.states?.vine_direction_bits??0),i=1/16,s=[];return t&1&&s.push(...en([[0,0,1-i],[1,0,1-i],[1,1,1-i],[0,1,1-i]],[0,0,1],e.side)),t&2&&s.push(...en([[i,0,0],[i,0,1],[i,1,1],[i,1,0]],[-1,0,0],e.side)),t&4&&s.push(...en([[1,0,i],[0,0,i],[0,1,i],[1,1,i]],[0,0,-1],e.side)),t&8&&s.push(...en([[1-i,0,1],[1-i,0,0],[1-i,1,0],[1-i,1,1]],[1,0,0],e.side)),s}function Xa(n,e=n.side,t=n.modelTextures?.crossAlt??e){return[...en([[.05,0,.05],[.95,0,.95],[.95,1,.95],[.05,1,.05]],[-Math.SQRT1_2,0,Math.SQRT1_2],e),...en([[.95,0,.05],[.05,0,.95],[.05,1,.95],[.95,1,.05]],[-Math.SQRT1_2,0,-Math.SQRT1_2],t)]}function n_(n){const e=[];for(const s of[4/16,12/16])e.push(...en([[s,-.0625,1],[s,-.0625,0],[s,.9375,0],[s,.9375,1]],[1,0,0],n.side)),e.push(...en([[0,-.0625,s],[1,-.0625,s],[1,.9375,s],[0,.9375,s]],[0,0,1],n.side));return e}function i_(n){const e=Xa(n);for(const l of e)l.points=l.points.map(([h,d,u])=>[h,d/2,u]),l.coordinates=l.coordinates.map(([h,d])=>[h,d/2]);const t=n.modelTextures?.flowerFront,i=n.modelTextures?.flowerBack;if(t===void 0||i===void 0)return e;const s=Math.PI/8,r=Math.cos(s),o=Math.sin(s),c=[[9.6/16,-1/16,15/16],[9.6/16,-1/16,1/16],[9.6/16,15/16,1/16],[9.6/16,15/16,15/16]].map(([l,h,d])=>[.5+((l-.5)*r-(h-.5)*o)/r,.5+((l-.5)*o+(h-.5)*r)/r,d]);return e.push(...en(c,[r,o,0],t,ei,i)),e}function s_(n,e){const t=Math.cos(Math.PI/8),i=Math.sin(Math.PI/8),s=en([[.5,0,1],[.5+t,i,1],[.5+t,i,0],[.5,0,0]],[-i,t,0],e.side,[[0,0],[0,1],[1,1],[1,0]]),r=[0,1,2,3].flatMap(o=>er(s,o));return er(r,Number(n.states?.coral_fan_direction??0)===1?1:0)}function r_(n,e){const t=[];for(const s of[Math.PI/8,-Math.PI/8]){const r=Math.cos(s),o=Math.sin(s),a=ri([0,.5,0,1,.5,1],e.side,[Dt(0,0,16,16),Dt(16,16,0,0)],[0,1]);t.push(...Mn(a,([c,l,h])=>[c,.5+(l-.5)-(h-14/16)*o/r,14/16+(l-.5)*o/r+(h-14/16)],([c,l,h])=>[c,l*r-h*o,l*o+h*r]))}const i=Number(n.states?.coral_direction??Number(n.states?.block_data??0)>>2&3);return er(t,[3,1,0,2][i]??3)}function o_(n,e,t){switch(t){case"bamboo":return jy(n,e);case"torch":return Ky(n,e);case"end_rod":return Zy(n,e);case"piston":return Ll(n,e);case"piston_head":return Ll(n,e);case"rail":return e_(n,e);case"vine":return t_(n,e);case"coral_wall_fan":return r_(n,e);case"coral_fan":return s_(n,e);case"cross":return["minecraft:wheat","minecraft:carrots","minecraft:potatoes","minecraft:beetroot","minecraft:nether_wart"].includes(n.name)?n_(e):n.name==="minecraft:kelp"?Xa(e,e.modelTextures?.body??e.side,e.modelTextures?.bodyAlt??e.side):n.name==="minecraft:double_plant"&&n.states?.double_plant_type==="sunflower"&&n.states?.upper_block_bit?i_(e):Xa(e);default:return}}function kn(n,e){const t=n.states,i=t&&Object.hasOwn(t,"block_data")?e.legacyStates?.[n.name]?.[String(t.block_data)]:void 0;let s=!1;const r=n.extra?.map(o=>{if(!o||typeof o!="object"||Array.isArray(o)||typeof o.name!="string")return o;const a=kn(o,e);return a!==o&&(s=!0),a});return!i&&!s?n:{...n,...i?{name:i.name,states:{...i.states,...Object.fromEntries(Object.entries(t).filter(([o])=>o!=="block_data"))}}:{},...s?{extra:r}:{}}}const a_=[[0,1,0],[0,-1,0],[1,0,0],[-1,0,0],[0,0,1],[0,0,-1]];function c_([n,e,t,i,s,r]){return[[[n,s,r],[i,s,r],[i,s,t],[n,s,t]],[[n,e,t],[i,e,t],[i,e,r],[n,e,r]],[[i,e,r],[i,e,t],[i,s,t],[i,s,r]],[[n,e,t],[n,e,r],[n,s,r],[n,s,t]],[[n,e,r],[i,e,r],[i,s,r],[n,s,r]],[[i,e,t],[n,e,t],[n,s,t],[i,s,t]]]}function qa(n,e,t=!0){const i=e.atlas;if(!i)return;const s=[],r=[],o=[],a=[];for(const l of n){const h=s.length/3,d=l.tile%i.columns*i.stride+i.padding,u=Math.floor(l.tile/i.columns)*i.stride+i.padding;for(let f=0;f<4;f++){const[g,y,p]=l.points[f];s.push(g-(t?.5:0),y,p-(t?.5:0)),r.push(...l.normal);const[m,M]=l.coordinates[f];o.push((d+.05+m*(i.tileSize-.1))/i.width,1-(u+.05+(1-M)*(i.tileSize-.1))/i.height)}a.push(h,h+1,h+2,h,h+2,h+3)}const c=new zt;return c.setAttribute("position",new Ke(s,3)),c.setAttribute("normal",new Ke(r,3)),c.setAttribute("uv",new Ke(o,2)),c.setIndex(a),c.computeBoundingSphere(),c}function Qr(n,e,t){n=kn(n,t);const i=n.name.replace("minecraft:",""),s=e.shape||(i.endsWith("_stairs")?"stairs":i.includes("slab")&&!i.includes("double")?"slab":"cube"),r=Xy(n,e,t)||o_(n,e,s);if(r)return qa(r,t);const o=n.states||{},a=!!(o.top_slot_bit||o.upside_down_bit);let c=[[0,0,0,1,1,1]];s==="slab"?c=[a?[0,.5,0,1,1,1]:[0,0,0,1,.5,1]]:s==="stairs"?c=Ry(n):s==="trapdoor"?c=xy(n):s==="gate"?c=Ey(n):s==="door"?c=Sy(by(n)):s==="carpet"?c=[[0,0,0,1,1/16,1]]:s==="snow"?c=[[0,0,0,1,(Number(o.height||0)+1)/8,1]]:s==="farmland"?c=[[0,0,0,1,15/16,1]]:s==="cactus"?c=[[1/16,0,1/16,15/16,1,15/16]]:s==="fence"?c=[[6/16,0,6/16,10/16,1,10/16],[0,6/16,7/16,1,9/16,9/16],[0,12/16,7/16,1,15/16,9/16]]:s==="wall"?c=[[.25,0,.25,.75,1,.75],[0,0,5/16,1,13/16,11/16]]:s==="pane"&&(c=[[7/16,0,0,9/16,1,1]]);const l=[],h=[e.top,e.bottom,e.faces?.east??e.side,e.faces?.west??e.side,e.faces?.south??e.side,e.faces?.north??e.side];return c.forEach((d,u)=>{for(const f of Py(c,u))l.push({points:c_(f.box)[f.face],normal:[...a_[f.face]],coordinates:Ph(f.box,f.face),tile:h[f.face]})}),qa(l,t)}function l_(n,e,t){const i=e.atlas;if(!i)return;const s=i.tileSize,r=1/32,o=[],a=[[0,0],[1,0],[1,1],[0,1]];o.push({tile:n,points:[[-.5,0,r],[.5,0,r],[.5,1,r],[-.5,1,r]],normal:[0,0,1],coordinates:a}),o.push({tile:n,points:[[.5,0,-r],[-.5,0,-r],[-.5,1,-r],[.5,1,-r]],normal:[0,0,-1],coordinates:[[1,0],[0,0],[0,1],[1,1]]});const c=(l,h)=>l>=0&&l<s&&h>=0&&h<s&&(!t||t[(h*s+l)*4+3]>=115);for(let l=0;l<s;l++)for(let h=0;h<s;h++)if(c(h,l)){const d=h/s-.5,u=(h+1)/s-.5,f=1-(l+1)/s,g=1-l/s,y=Array.from({length:4},()=>[(h+.5)/s,1-(l+.5)/s]);c(h-1,l)||o.push({tile:n,points:[[d,f,-r],[d,f,r],[d,g,r],[d,g,-r]],normal:[-1,0,0],coordinates:y}),c(h+1,l)||o.push({tile:n,points:[[u,f,r],[u,f,-r],[u,g,-r],[u,g,r]],normal:[1,0,0],coordinates:y}),c(h,l-1)||o.push({tile:n,points:[[d,g,r],[u,g,r],[u,g,-r],[d,g,-r]],normal:[0,1,0],coordinates:y}),c(h,l+1)||o.push({tile:n,points:[[d,f,-r],[u,f,-r],[u,f,r],[d,f,r]],normal:[0,-1,0],coordinates:y})}return qa(o,e,!1)}function h_(n,e,t,i){n.magFilter=It,n.minFilter=It,n.generateMipmaps=!1,n.colorSpace=_t;const s=e.atlas;if(!s)return{texture:n,atlas:e,maxFootprint:0};const r=Ot.ceilPowerOfTwo(s.tileSize*2),o=(r-s.tileSize)/2,a=Math.min(s.columns,Math.floor(t/r)),c=s.columns*s.rows,l=Math.ceil(c/a);if(!a||l*r>t)return{texture:n,atlas:e,maxFootprint:0};const h=document.createElement("canvas");h.width=a*r,h.height=l*r;const d=h.getContext("2d");if(!d)return{texture:n,atlas:e,maxFootprint:0};d.imageSmoothingEnabled=!1;const u=n.image;for(let g=0;g<c;g++){const y=g%s.columns*s.stride+s.padding,p=Math.floor(g/s.columns)*s.stride+s.padding,m=g%a*r,M=Math.floor(g/a)*r,v=[0,0,s.tileSize-1],_=[1,s.tileSize,1],S=[0,o,o+s.tileSize],A=[o,s.tileSize,o];for(let R=0;R<3;R++)for(let D=0;D<3;D++)d.drawImage(u,y+v[D],p+v[R],_[D],_[R],m+S[D],M+S[R],A[D],A[R])}const f=new nr(h);return f.colorSpace=_t,f.magFilter=an,f.minFilter=Fn,f.anisotropy=Math.max(1,i),{texture:f,atlas:{...e,atlas:{...s,width:h.width,height:h.height,columns:a,rows:l,stride:r,padding:o}},maxFootprint:o}}function oi(n,e,t){t&&(n.customProgramCacheKey=()=>"village-atlas-sampling-v1",n.onBeforeCompile=i=>{i.uniforms.villageAtlasSize={value:new xe(e.image.width,e.image.height)},i.uniforms.villageMaxFootprint={value:t},i.fragmentShader=i.fragmentShader.replace("#include <map_pars_fragment>",`#include <map_pars_fragment>
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
      `)})}function u_(n){const e=n;if(e?.version!==1||!Array.isArray(e.generators)||e.generators.length>4096)return[];const t=new Map;for(const i of e.generators){if(!Array.isArray(i)||i.length!==7||i[0]!==0||!i.every(Number.isSafeInteger))return[];if(i.slice(1).some(s=>Math.abs(s)>3e7)||Math.hypot(i[1]-i[4],i[2]-i[5],i[3]-i[6])>16)return[];t.set(i.slice(0,4).join(","),i)}return[...t.values()]}class d_{group=new Je;geometry;material;block;drop;chips;active;elapsed=0;disposed=!1;constructor(e,t,i=0){const s={name:"minecraft:cobblestone",states:{}},r=t.materials[s.name]||t.materials.cobblestone||{top:0,side:0,bottom:0};this.geometry=Qr(s,r,t)||new cn(1,1,1).translate(0,.5,0),this.geometry.translate(0,-.5,0),this.material=new vt({map:e}),oi(this.material,e,i),this.block=new we(this.geometry,this.material),this.block.scale.setScalar(.985),this.drop=new we(this.geometry,this.material),this.drop.scale.setScalar(.24),this.chips=Array.from({length:8},()=>{const o=new we(this.geometry,this.material);return o.scale.setScalar(.085),o}),this.group.name="island-generator-preview",this.group.add(this.block,this.drop,...this.chips),this.group.visible=!1}start(e){this.disposed||(this.active=e,this.elapsed=0,this.group.visible=!0,this.update(0))}stop(){const e=this.group.visible;return this.active=void 0,this.group.visible=!1,this.elapsed=0,e}get running(){return!!this.active}update(e){if(!this.active||this.disposed)return!1;if(this.elapsed+=Number.isFinite(e)?Math.max(0,e):0,this.elapsed>=6)return this.stop(),!0;const[,t,i,s,r,o,a]=this.active,c=this.elapsed%2;this.block.position.set(t+.5,i+.5,s+.5),this.block.visible=c<.65,this.drop.visible=c>=.65&&c<1.7;const l=Math.min(1,Math.max(0,(c-.65)/1.05)),h=Math.min(t,r)-.65,d=Math.min(1,l/.25),u=Math.max(0,Math.min(1,(l-.25)/.5)),f=Math.max(0,(l-.75)/.25);this.drop.position.set(t+.5+(h-t-.5)*d+(r+.5-h)*f,i+.5+(o-i)*u+Math.sin(l*Math.PI)*.3,s+.5+(a-s)*u),this.drop.rotation.set(.15,this.elapsed*2.4,.1);for(let g=0;g<this.chips.length;g++){const y=this.chips[g],p=c-.65,m=g*2.4;y.visible=p>=0&&p<.55,y.position.set(t+.5+Math.sin(m)*p*.8,i+.5+p*1.5-p*p*3,s+.5+Math.cos(m)*p*.8),y.rotation.set(p*3,m,p*2)}return!0}diagnostics(){return{running:this.running,elapsed:this.elapsed,objects:this.group.children.length,source:this.active?.slice(1,4),output:this.active?.slice(4)}}dispose(){this.disposed||(this.stop(),this.disposed=!0,this.group.removeFromParent(),this.geometry.dispose(),this.material.dispose())}}function f_(n,e,t){if(t!=="overworld")return;let i,s=14;for(const r of n){const o=Math.hypot(e.x-r[1]-.5,(e.y-r[2]-.5)*.5,e.z-r[3]-.5);o<s&&(i=r,s=o)}return i}const Xo=n=>Array.isArray(n)&&n.length===3&&n.every(Number.isSafeInteger)&&Math.abs(n[0])<=3e7&&Math.abs(n[2])<=3e7&&n[1]>=-2048&&n[1]<=2048;function m_(n){if(!n||typeof n!="object")throw new Error("海岛设施暂时无法载入");const e=n;if(e.version!==1||!Array.isArray(e.machines)||e.machines.length>1e4)throw new Error("海岛设施数据无效");const t=new Set;for(const i of e.machines){if(!i||!["overworld","nether","end"].includes(i.dimension)||!Xo(i.source)||!Xo(i.output)||!Xo(i.power)||!Number.isFinite(i.period)||i.period<.5||i.period>60||typeof i.active!="boolean"||Math.hypot(...i.output.map((r,o)=>r-i.source[o]))>16||Math.hypot(...i.power.map((r,o)=>r-i.source[o]))>20)throw new Error("海岛设施数据无效");const s=eo(i);if(t.has(s))throw new Error("海岛设施数据重复");t.add(s)}return e.machines}const eo=n=>`${n.dimension}:${n.source.join(",")}`,p_=(n,e)=>n==="minecraft:redstone_block"&&/^minecraft:(?:trapped_chest|chest|hopper|barrel)$/.test(e);class g_{regions=new Map;constructor(e){for(const t of e){const i=`${t.dimension}:${Math.floor(t.source[0]/64)},${Math.floor(t.source[2]/64)}`,s=this.regions.get(i)||[];s.push(t),this.regions.set(i,s)}}near(e,t,i=48){const s=[];for(let r=Math.floor((t.x-i)/64);r<=Math.floor((t.x+i)/64);r++)for(let o=Math.floor((t.z-i)/64);o<=Math.floor((t.z+i)/64);o++)for(const a of this.regions.get(`${e}:${r},${o}`)||[])Math.hypot(a.source[0]-t.x,a.source[2]-t.z)<=i&&s.push(a);return s.sort((r,o)=>Math.hypot(r.source[0]-t.x,r.source[2]-t.z)-Math.hypot(o.source[0]-t.x,o.source[2]-t.z)).slice(0,8)}}function y_(n,e,t,i,s,r){t.set(new P(n.x+.62,n.y+.001,n.z+.62),new P(0,-1,0)),t.near=0,t.far=32;const o=r?.atlas,a=new P,c=new Ce;for(const l of t.intersectObjects(e,!1)){if(!(l.object instanceof we)||!l.object.visible||!l.face||a.copy(l.face.normal).applyNormalMatrix(c.getNormalMatrix(l.object.matrixWorld)).y<=.5)continue;const h=l.uv,d=h&&o?Math.floor(h.x*o.width/o.stride)+Math.floor((1-h.y)*o.height/o.stride)*o.columns:-1;if(!i.has(d)&&!s.has(d))return l.point.y}}function __(n){n.memoryPoseReset=!0,n.memoryEventOrder=0,n.memoryInitialViewPending=!n.orbitUserAdjusted,n.memoryDefaultTravel=void 0,n.memoryDefaultViewAttempt=void 0,n.memoryDefaultRecoveries=0,n.memoryInitialViewFromTravel=!1,n.memoryDefaultReframe=void 0,n.memoryEffectsGeneration++,n.memoryInteractions.reset(),n.memoryGroundCache.clear(),n.memoryStanceCache.clear(),n.memoryReachCache.clear(),n.memoryTargetBounds.clear(),n.memoryCameraKey="",n.memoryCameraOffset=void 0,n.memoryContainers.reset(),n.invalidateMemoryContainerRouteChunks(),n.memoryInteractionLookups.clear(),n.memoryMiningPreviews.clear(),n.islandMachines.clear(),n.machineSignature="";for(const e of n.memoryInspections.values())e.reject(new Error("回忆时间已改变"));n.memoryInspections.clear(),n.renderDirty=!0}function M_(n,e,t,i,s,r,o,a,c){if(t!==n.dimension.id||!n.memorySource||n.disposed)return;const[l,,h,d,u,f,g,y]=e,p={x:h,y:d,z:u},m=++n.memoryEventOrder,M=r||n.memorySource.eventName(y),v=c==="all"||c==="particles";v&&M==="break"&&i&&n.memoryMiningPreviews.set(i,-l);const _=n.memorySource.palette[/break|leaf_decay|support_removed/.test(M)?f:g],S=o?.name||s||_?.name||"",A=o||(!s||s===_?.name?_:void 0),R=n.memoryEffectsGeneration,D=(x,E=A)=>{if(R!==n.memoryEffectsGeneration||t!==n.dimension.id||n.disposed)return;const I=n.memoryPoses.get(i),F=v&&vy(I,l,p)&&I&&n.memoryCanReach(I,p)?i:"",O=F&&I?I:{x:h+.5,y:d,z:u+.5};let G,V,H=-1;const $=M==="break"||M==="support_removed"?()=>{if(R!==n.memoryEffectsGeneration||n.disposed)return;const se=n.meshes.get(Xt(Math.floor(h/16),Math.floor(u/16)));if(se===G&&H===n.memoryContainerGeometryRevision)return V;if(G=se,H=n.memoryContainerGeometryRevision,V=void 0,se){se.updateMatrixWorld(!0);const pe=new Ut(new P(h+.45,d-32,u+.45),new P(h+.8,d+.01,u+.8));V=y_(p,Ri([se],pe),n.memoryGroundRaycaster,n.memoryPassableTiles,n.memoryClimbTiles,n.memoryAtlas)}return V}:void 0,W=kn(E?.name===x?E:{name:x},n.memoryAtlas||{}),ie={player:F,kind:M,block:W.name,blockState:W,target:p,origin:O,time:l,order:m,dropGround:$,recorded:a};c==="restore"?(n.memoryContainers.restore({...ie,player:i}),n.invalidateMemoryContainerGeometry()):(v&&n.memoryInteractions.show(ie),c!=="particles"&&n.memoryContainers.show({...ie,player:i})),n.renderDirty=!0};if(!S&&/interact|container_|item_use/.test(M)){const x=`${h},${d},${u}`;let E=n.memoryInteractionLookups.get(x);if(!E){if(n.memoryInteractionLookups.size>=16){D("");return}E=n.inspectMemoryBlock(h,d,u),n.memoryInteractionLookups.set(x,E)}const I=E;I.then(F=>D(F.currentName||"",{name:F.currentName||"",states:F.currentStates})).catch(()=>D("")).finally(()=>{n.memoryInteractionLookups.get(x)===I&&n.memoryInteractionLookups.delete(x)})}else D(S)}async function v_(n){if(!n.islandMachineIndex||n.machineChecking||!n.initialized||n.disposed||n.islandMechanism?.running||n.memorySource&&n.memoryAcknowledgedRevision!==n.memoryRevision)return;const e=n.islandMachineIndex.near(n.dimension.id,n.getLocation()).filter(o=>[o.source,o.power,o.output].every(([a,,c])=>n.meshes.has(Xt(Math.floor(a/16),Math.floor(c/16))))),t=`${e.map(eo).join(";")}:${n.memorySource?n.memoryRevision:"final"}`;if(t===n.machineSignature)return;const i=n.generation,s=n.memoryEffectsGeneration,r=n.memoryRevision;n.machineChecking=!0;try{const o=await Promise.all(e.map(async a=>{if(!n.memorySource)return a.active?a:void 0;const[c,l]=await Promise.all([n.inspectMemoryBlock(...a.power),n.inspectMemoryBlock(...a.output)]);return p_(c.currentName||"",l.currentName||"")?a:void 0}));if(n.disposed||n.islandMechanism?.running||i!==n.generation||s!==n.memoryEffectsGeneration||r!==n.memoryRevision)return;n.islandMachines.setMachines(o.filter(a=>!!a))&&(n.renderDirty=!0),n.machineSignature=t}catch{}finally{n.machineChecking=!1}}function b_(n,e,t=n.memoryTime){const i=new Set;let s=!1;for(const a of e){if(a.dimension!==n.dimension.id||!a.online)continue;n.memoryPoses.set(a.player,a),i.add(a.player);let c=n.memoryPlayers.get(a.player);if(!c){s=!0,c=new Je,c.rotation.y=a.yaw;const h=(y,p,m,M,v=c)=>{const _=new we(n.memoryPlayerGeometry,p);return _.name=y,_.scale.set(...m),_.position.set(...M),v.add(_),_},d=new Je;d.name="head",d.position.set(0,1.56,0),c.add(d),h("face",n.memorySkinMaterial,[.48,.48,.48],[0,0,0],d),h("hair",n.memoryPantsMaterial,[.49,.15,.49],[0,.17,-.005],d),h("body",n.memoryPlayerMaterial,[.5,.62,.28],[0,1.03,0]);for(const y of[-1,1])h("eye",n.memoryPantsMaterial,[.065,.065,.02],[y*.1,.025,.246],d);for(const y of[-1,1]){const p=new Je;p.name=`arm${y}`,p.position.set(y*.36,1.28,0),c.add(p),h("sleeve",n.memoryPlayerMaterial,[.18,.32,.25],[0,-.12,0],p),h("hand",n.memorySkinMaterial,[.18,.28,.25],[0,-.4,0],p);const m=new Je;m.name=`leg${y}`,m.position.set(y*.13,.72,0),c.add(m),h("trouser",n.memoryPantsMaterial,[.22,.72,.25],[0,-.36,0],m)}const u=document.createElement("canvas");u.height=48;const f=u.getContext("2d");f.font="26px sans-serif",u.width=Math.min(512,Math.max(80,Math.ceil(f.measureText(a.name.slice(0,32)).width)+24)),f.fillStyle="rgba(24,35,32,.65)",f.fillRect(0,0,u.width,48),f.fillStyle="#fff2d7",f.textAlign="center",f.font="26px sans-serif",f.fillText(a.name.slice(0,32),u.width/2,34);const g=new Yn(new rs({map:new nr(u),depthTest:!1,depthWrite:!1}));g.name="memory-nameplate",g.renderOrder=10,g.position.y=2.08,g.scale.set(u.width/190,48/190,1),c.add(g),n.memoryPlayers.set(a.player,c),n.scene.add(c),c.rotation.y=a.yaw}const l=c.rotation.y;if((c.position.x!==a.x||c.position.y!==a.y||c.position.z!==a.z)&&(s=!0),c.position.set(a.x,a.y,a.z),(n.memoryPoseReset||a.teleport)&&(c.rotation.y=a.yaw),n.memoryInteractions.synchronizeActor(a),n.memoryInteractions.animateAvatar(a.player,c,!!a.moving,!!a.climbing,!!a.swimming),c.rotation.y!==l&&(s=!0),n.memoryPlaying&&a.actionKind==="break"&&a.actionTarget&&a.actionTime!==void 0&&a.actionTime>t&&a.actionTime-t<=.85&&n.memoryCanReach(a,a.actionTarget)&&n.memoryMiningPreviews.get(a.player)!==a.actionTime){const h={...a.actionTarget},d={x:a.x,y:a.y,z:a.z},u=a.actionTime,f=n.memoryEffectsGeneration;n.memoryMiningPreviews.set(a.player,u),n.inspectMemoryBlock(h.x,h.y,h.z).then(g=>{n.disposed||f!==n.memoryEffectsGeneration||n.memoryMiningPreviews.get(a.player)!==u||n.memoryTime>=u||!g.currentName||g.currentName==="minecraft:air"||(n.memoryInteractions.show({player:a.player,kind:"mine_prepare",block:g.currentName,blockState:{name:g.currentName,states:g.currentStates},target:h,origin:d,time:u}),n.renderDirty=!0)}).catch(()=>{})}}n.memoryPoseReset=!1;for(const[a,c]of n.memoryPlayers)i.has(a)||(n.removeMemoryPlayer(a,c),s=!0);const r=[...n.memoryPlayers].filter(([a,c])=>a===n.memoryFollow?.player||!n.memoryFollow||Math.hypot(c.position.x-n.memoryFollow.x,c.position.z-n.memoryFollow.z)>2.2).sort((a,c)=>a[0]===n.memoryFollow?.player?-1:c[0]===n.memoryFollow?.player?1:a[1].position.distanceToSquared(n.camera.position)-c[1].position.distanceToSquared(n.camera.position)).slice(0,6),o=new Set(r.map(([a])=>a));for(const[a,c]of n.memoryPlayers){const l=c.getObjectByName("memory-nameplate");l&&l.visible!==o.has(a)&&(l.visible=o.has(a),s=!0)}n.updateMemoryCameraVisibility(),s&&(n.renderDirty=!0)}function S_(n,e){n.mode!=="orbit"&&n.setMode("orbit");const[,t,i,s,r,o,a]=e,c=new P(t+.5,i+.5,s+.5),l=new Ut(new P(t-8,i-1,s-3),new P(t+3,i+8,s+9)),h=[...n.meshes.values()];h.forEach(f=>f.updateMatrixWorld(!0));const d=Ri(h,l),u=n.memoryGroundRaycaster;for(const f of[[-6,2.5,1.7],[-5,2,.5],[-4,1.5,.5],[0,7,1]]){const g=new P(t+f[0],i+f[1],s+f[2]),y=g.clone().sub(c),p=y.length();if(u.set(c,y.normalize()),u.near=.6,u.far=p,!u.intersectObjects(d,!1).some(m=>m.distance<p-.15)){n.controls.target.set((t+r)/2+.5,(i+o)/2+.7,(s+a)/2+.5),n.camera.position.copy(g),n.controls.update(),n.renderDirty=!0;return}}}function x_(n){n.islandMechanism?.stop()&&(n.machineSignature="",n.renderDirty=!0)}function E_(n){if(!n.islandMechanismPrompt)return;const e=n.active&&n.hudVisible&&!n.memorySource&&n.containerState.status==="closed",t=n.mode==="orbit"?n.controls.target:n.camera.position,i=e?f_(n.islandGenerators,t,n.dimension.id):void 0;(i!==n.islandMechanismNearby||!e)&&n.stopIslandMechanism(),n.islandMechanismNearby=i,n.islandMechanismPrompt.hidden=!i;const s=!!n.islandMechanism?.running;n.islandMechanismButton.textContent=s?"结束演示":"看看刷石机",n.islandMechanismButton.setAttribute("aria-pressed",String(s)),n.islandMechanismCaption.hidden=!s}const Un=n=>!!n&&typeof n=="object"&&!Array.isArray(n),$t=n=>typeof n=="number"&&Number.isSafeInteger(n),qo=n=>$t(n)&&n>=0&&n<=15,Lh=n=>typeof n=="string"&&/^[a-z0-9_.-]+:[a-z0-9_./-]+$/.test(n),T_=n=>typeof n=="string"&&n.length<512&&!n.includes("..")&&/^[a-zA-Z0-9_./-]+$/.test(n)&&!n.startsWith("/");function Cl(n){return Un(n)&&Lh(n.name)&&(n.states===void 0||Un(n.states)&&Object.values(n.states).every(e=>typeof e=="string"||typeof e=="boolean"||typeof e=="number"&&Number.isFinite(e)))}function Ul(n){return Un(n)&&typeof n.text=="string"&&n.text.length<=65536&&$t(n.color)&&n.color>=0&&n.color<=4294967295&&typeof n.glowing=="boolean"}function A_(n,e){const t=()=>{throw new Error("地图装饰数据格式无效，请重新加载地图")};if(!Un(n)||n.version!==1||!Array.isArray(n.entities)||n.entities.length!==e.count||n.entities.length>65536)return t();const i=new Set;for(const s of n.entities){if(!Un(s)||!$t(s.x)||!$t(s.y)||!$t(s.z)||Math.floor(s.x/64)!==e.x||Math.floor(s.z/64)!==e.z||s.y<-2048||s.y>2047||!Cl(s.block))return t();const r=`${s.x},${s.y},${s.z}`;if(i.has(r))return t();switch(i.add(r),s.type){case"sign":if(!Ul(s.front)||s.back!==void 0&&!Ul(s.back))return t();break;case"banner":if(!qo(s.baseColor)||!Array.isArray(s.patterns)||s.patterns.length>128||s.patterns.some(o=>!Un(o)||!qo(o.color)||typeof o.pattern!="string"||!/^[a-z0-9_]+$/.test(o.pattern)))return t();break;case"bed":if(!qo(s.color))return t();break;case"flower_pot":if(s.plant!==void 0&&!Cl(s.plant))return t();break;case"skull":if(!$t(s.skullType)||s.skullType<0||s.skullType>6||typeof s.rotation!="number"||!Number.isFinite(s.rotation))return t();break;case"lectern":if(typeof s.hasBook!="boolean")return t();break;case"brewing_stand":if(!Array.isArray(s.bottles)||s.bottles.length!==3||s.bottles.some(o=>typeof o!="boolean"))return t();break;case"cauldron":if(s.color!==void 0&&(!$t(s.color)||s.color<0||s.color>4294967295)||s.potionId!==void 0&&(!$t(s.potionId)||s.potionId<0||s.potionId>42)||s.potionType!==void 0&&(!$t(s.potionType)||s.potionType<0||s.potionType>2))return t();break;case"chest":if(s.pair!==void 0&&(!Un(s.pair)||!$t(s.pair.x)||!$t(s.pair.z)||Math.abs(s.pair.x-s.x)+Math.abs(s.pair.z-s.z)!==1)||s.pairLead!==void 0&&typeof s.pairLead!="boolean"||s.forceUnpair!==void 0&&typeof s.forceUnpair!="boolean")return t();break;case"item_frame":{if(typeof s.rotation!="number"||!Number.isFinite(s.rotation))return t();if(s.item!==void 0){const o=s.item;if(!Un(o)||!Lh(o.name)||!$t(o.damage)||o.map!==void 0&&(!Un(o.map)||!T_(o.map.file)||!$t(o.map.width)||!$t(o.map.height)||o.map.width<1||o.map.height<1||o.map.width>1024||o.map.height>1024))return t()}break}default:return t()}}return n.entities}async function R_(n,e){return A_(await Kn(n),e)}const wt=n=>typeof n=="number"&&Number.isFinite(n),pn=n=>Array.isArray(n)&&n.length===3&&n.every(wt),Bs=n=>typeof n=="string"&&/^textures\/[a-zA-Z0-9_./-]+\.(?:png|webp|jpg)$/.test(n)&&!n.split("/").some(e=>e===".."||e==="."),Yo=n=>!!n&&typeof n=="object"&&/^minecraft:[a-zA-Z0-9_]+$/.test(n.name)&&(n.damage===void 0||wt(n.damage));function w_(n){return!n||!pn(n.origin)||!pn(n.size)||n.size.some(e=>e<0)||n.inflate!==void 0&&!wt(n.inflate)||n.rotation!==void 0&&!pn(n.rotation)||n.pivot!==void 0&&!pn(n.pivot)?!1:n.uv===void 0?!0:Array.isArray(n.uv)?n.uv.length===2&&n.uv.every(wt):!!n.uv&&typeof n.uv=="object"&&Object.entries(n.uv).every(([e,t])=>["east","west","north","south","up","down"].includes(e)&&!!t&&Array.isArray(t.uv)&&t.uv.length===2&&t.uv.every(wt)&&(t.uv_size===void 0||Array.isArray(t.uv_size)&&t.uv_size.length===2&&t.uv_size.every(wt))&&(t.uvSize===void 0||Array.isArray(t.uvSize)&&t.uvSize.length===2&&t.uvSize.every(wt)))}function P_(n){const e=n;if(!e||e.version!==1||!e.models||typeof e.models!="object"||Array.isArray(e.models))throw new Error("世界里的生物外观暂时无法读取。");for(const t of Object.values(e.models)){if(!t||!Bs(t.texture)||!wt(t.textureWidth)||t.textureWidth<=0||!wt(t.textureHeight)||t.textureHeight<=0||t.emissiveTexture!==void 0&&!Bs(t.emissiveTexture)||!Array.isArray(t.bones)||t.bones.length>512||t.scale!==void 0&&(!wt(t.scale)||t.scale<=0)||t.billboard&&(!wt(t.billboard.width)||!wt(t.billboard.height)||t.billboard.width<=0||t.billboard.height<=0))throw new Error("世界里的生物外观暂时无法读取。");const i=new Map(t.bones.map(s=>[s.name.toLowerCase(),s]));if(i.size!==t.bones.length)throw new Error("世界里的生物姿态暂时无法读取。");for(const s of t.bones){if(typeof s.name!="string"||!s.name||s.pivot!==void 0&&!pn(s.pivot)||s.rotation!==void 0&&!pn(s.rotation)||s.bind_pose_rotation!==void 0&&!pn(s.bind_pose_rotation)||s.cubes!==void 0&&(!Array.isArray(s.cubes)||s.cubes.length>2048||s.cubes.some(a=>!w_(a))))throw new Error("世界里的生物姿态暂时无法读取。");const r=new Set([s.name.toLowerCase()]);let o=s.parent?.toLowerCase();for(;o;){if(r.has(o)||!i.has(o))throw new Error("世界里的生物姿态暂时无法读取。");r.add(o),o=i.get(o).parent?.toLowerCase()}}}for(const t of[e.armorTextures,e.dyedArmorTextures])if(t&&Object.values(t).some(i=>!Array.isArray(i)||i.length!==2||!i.every(Bs)))throw new Error("世界里的盔甲外观暂时无法读取。");if(e.poses&&Object.values(e.poses).some(t=>!t||typeof t!="object"||Object.values(t).some(i=>!i||typeof i!="object"||Object.values(i).some(s=>!pn(s)))))throw new Error("世界里的生物姿态暂时无法读取。");return e}function D_(n,e){const t=n;if(!t||t.version!==1||!Array.isArray(t.entities)||t.entities.length!==e.count)throw new Error("附近的生物暂时无法读取，请重新打开地图。");const i=new Set;for(const s of t.entities){if(!s||typeof s.id!="string"||!s.id||i.has(s.id)||typeof s.type!="string"||!/^minecraft:[a-zA-Z0-9_]+$/.test(s.type)||!s.position||![s.position.x,s.position.y,s.position.z].every(wt)||Math.floor(s.position.x/64)!==e.x||Math.floor(s.position.z/64)!==e.z||s.rotation&&(!wt(s.rotation.yaw)||!wt(s.rotation.pitch))||s.hiddenEquipment&&(!Array.isArray(s.hiddenEquipment)||s.hiddenEquipment.some(r=>!["head","chest","legs","feet","mainhand","offhand"].includes(r)))||s.scale!==void 0&&(!wt(s.scale)||s.scale<=0)||s.texture!==void 0&&!Bs(s.texture)||s.name!==void 0&&typeof s.name!="string"||s.boneRotations&&Object.values(s.boneRotations).some(r=>!pn(r))||s.hiddenBones&&(!Array.isArray(s.hiddenBones)||s.hiddenBones.some(r=>typeof r!="string"))||s.item&&!Yo(s.item)||s.equipment&&Object.values(s.equipment).some(r=>!Yo(r))||s.carriedBlock&&!Yo(s.carriedBlock)||s.fireTicks!==void 0&&(!wt(s.fireTicks)||s.fireTicks<0)||s.parts&&(!Array.isArray(s.parts)||s.parts.some(r=>!r||typeof r.model!="string"||r.slot!==void 0&&!["head","chest","legs","feet","mainhand","offhand"].includes(r.slot)||r.texture!==void 0&&!Bs(r.texture)||r.position!==void 0&&!pn(r.position)||r.rotation!==void 0&&!pn(r.rotation)||r.scale!==void 0&&(!wt(r.scale)||r.scale<=0))))throw new Error("附近的生物暂时无法读取，请重新打开地图。");i.add(s.id)}return t.entities}async function Ls(n,e,t){const i=new Float64Array(n.length*e);return await Wl(n,(s,r)=>i.set(s,r*e),t),i}async function I_(n,e,t,i){const s={};n&&(s.events=await Ls(n,8,i)),e&&(s.eventStates=await Ls(e,4,i)),t&&(s.repair={initial:await Ls(t.initial,4,i),patches:await Ls(t.patches,8,i)},t.actors&&(s.repair.actors=await Ls(t.actors,6,i)));const r=[s.events,s.eventStates,s.repair?.initial,s.repair?.patches,s.repair?.actors].filter(o=>!!o).map(o=>o.buffer);return{memoryTransfer:s,buffers:r}}const es=4,Ch=(n,e,t)=>`${n},${e},${t}`;function L_(n){const e=new Map;for(let t=0;t<n.offsets.length-1;t++){const i=t*3;e.set(Ch(n.cells[i],n.cells[i+1],n.cells[i+2]),n.indices.subarray(n.offsets[t],n.offsets[t+1]))}return{boxes:n.boxes,kinds:n.kinds,cells:e}}function yi(n,e,t){const i=[];for(const s of n){const r=s.userData.touristCollisionShapes;if(!r)continue;const o=s.position.x,a=s.position.z,c=Math.floor((e.minX-o)/es),l=Math.floor((e.maxX-o)/es),h=Math.floor(e.minY/es),d=Math.floor(e.maxY/es),u=Math.floor((e.minZ-a)/es),f=Math.floor((e.maxZ-a)/es),g=new Set;for(let y=c;y<=l;y++)for(let p=h;p<=d;p++)for(let m=u;m<=f;m++){const M=r.cells.get(Ch(y,p,m));if(M)for(const v of M){if(g.has(v)||r.kinds[v]!==t)continue;g.add(v);const _=v*6,S=r.boxes[_]+o,A=r.boxes[_+1],R=r.boxes[_+2]+a,D=r.boxes[_+3]+o,x=r.boxes[_+4],E=r.boxes[_+5]+a;D<=e.minX||S>=e.maxX||x<=e.minY||A>=e.maxY||E<=e.minZ||R>=e.maxZ||i.push({minX:S,minY:A,minZ:R,maxX:D,maxY:x,maxZ:E})}}}return i}function C_(n){n.regionIndex.clear(),n.entityRegionIndex.clear(),n.savedEntityRegions.clear(),n.totalChunks=0;for(const r of n.dimension.regions)n.regionIndex.set(Ti(r.x,r.z),r),n.totalChunks+=Fr(r.chunks);const e=[...n.memorySource?.manifest.regions||[],...n.memorySource?.manifest.repairs?.regions||[]];for(const r of e){if(r.dimension!==n.dimension.id)continue;const o=Ti(r.x,r.z),a=n.regionIndex.get(o);n.regionIndex.set(o,a?{...a,chunks:65535}:{x:r.x,z:r.z,file:"",bytes:0,chunks:65535}),n.totalChunks+=16-Fr(a?.chunks||0)}for(const r of n.dimension.blockEntities?.regions||[])n.entityRegionIndex.set(Ti(r.x,r.z),r);for(const r of n.dimension.entities?.regions||[]){const o=Ti(r.x,r.z),a=n.regionIndex.get(o),c=(a?.chunks||0)|(r.chunks??65535);n.savedEntityRegions.set(o,r),n.regionIndex.set(o,a?{...a,chunks:c}:{x:r.x,z:r.z,file:"",bytes:0,chunks:c}),n.totalChunks+=Fr(c)-Fr(a?.chunks||0)}const t=n.dimension.dimension===1||n.dimension.id==="nether",i=n.dimension.dimension===2||n.dimension.id==="end",s=t?4007207:i?2370359:12506847;n.renderer.setClearColor(s),n.scene.fog=new js(s,n.distance*12,n.distance*16+18),n.renderDirty=!0}function U_(n,e,t,i=0,s=n.distance){const r=new Map;for(let o=-s;o<=s;o++)for(let a=-s;a<=s;a++){if(o*o+a*a>s*s+s)continue;const c=e+o,l=t+a,h=Math.floor(c/4),d=Math.floor(l/4),u=Ti(h,d),f=n.regionIndex.get(u),g=(c%4+4)%4,y=(l%4+4)%4;!f||!(f.chunks&1<<g*4+y)||r.set(Xt(c,l),{x:c,z:l,region:u,priority:i+o*o+a*a})}return r}function N_(n,e=!1){if(!n.initialized||n.disposed)return;const t=n.getLocation(),i=Math.floor(t.x/16),s=Math.floor(t.z/16),r=n.distance,o=n.memorySource?n.memoryRequiredChunks():new Map,a=n.memoryPreloadPose?n.memoryRequiredChunks(n.memoryPreloadPose):new Map,c=`${i},${s}:${r}:${n.memoryPreloadSignature}:${[...o.keys()].join(";")}:${[...a.keys()].join(";")}`,l=e||c!==n.streamingSignature;if(n.memoryPreloadRequired=a,l){n.streamingSignature=c;const _=n.chunkWindow(i,s);n.desired=_,n.streamingCenter=Xt(i,s);const S=new Map(_),A=r*r+r+1,R=Math.min(256,Math.max(48,_.size*4));for(const[D,x]of n.memoryPreloadCenters.entries()){const E=[...n.chunkWindow(x.x,x.z,A*(D+1))].sort((I,F)=>I[1].priority-F[1].priority);for(const[I,F]of E){if(S.size-_.size>=R)break;S.has(I)||S.set(I,F)}}if(n.memorySource&&!n.memoryPreloadCenters.length){const D=[...n.chunkWindow(i,s,A,r+2)].sort((x,E)=>x[1].priority-E[1].priority);for(const[x,E]of D){if(S.size-_.size>=R)break;S.has(x)||S.set(x,E)}}for(const[D,x]of new Map([...o,...a]))if(!S.has(D)){const[E,I]=D.split(",").map(Number);S.set(D,{x:E,z:I,region:x,priority:(E-i)**2+(I-s)**2})}n.streamingDesired=S;for(const[D,x]of n.meshes){const E=_.has(D);x.visible!==E&&(x.visible=E,n.renderDirty=!0)}}n.desired;const h=n.streamingDesired,d=performance.now(),u=new Set;for(const _ of h.values()){u.add(_.region);const S=n.regions.get(_.region);S&&(S.used=d)}const f=r+2,g=new Set(n.memorySource?[...n.regions].filter(([_,S])=>!u.has(_)&&S.state==="ready"&&d-S.used<15e3).sort((_,S)=>S[1].used-_[1].used).slice(0,8).map(([_])=>_):[]);for(const _ of n.meshes.keys()){const[S,A]=_.split(",").map(Number),R=g.has(Ti(Math.floor(S/4),Math.floor(A/4)));!h.has(_)&&!R&&(Math.abs(S-i)>f||Math.abs(A-s)>f)&&n.removeMesh(_)}for(const[_,S]of n.regions){if(u.has(_)||g.has(_))continue;const A=S.definition.x*4+1.5-i,R=S.definition.z*4+1.5-s;(Math.abs(A)>r+6||Math.abs(R)>r+6)&&(S.controller?.abort(),n.regions.delete(_),n.entityRenderer?.removeRegion(_),n.savedEntities?.removeRegion(_),n.post({type:"evict",key:_}),n.invalidateNeighbours(S.chunks||[]))}(l||n.renderDirty||!n.camera.position.equals(n.renderedPosition))&&n.syncEntityOverlays();const y=new Map;for(const _ of h.values()){const S=n.regions.get(_.region);if(S&&(S.state!=="error"||(S.retry||0)>=d))continue;const A=y.get(_.region);(!A||n.memoryStreamingPriority(_,o)<n.memoryStreamingPriority(A,o)||n.memoryStreamingPriority(_,o)===n.memoryStreamingPriority(A,o)&&_.priority<A.priority)&&y.set(_.region,_)}const p=[...y.values()].sort((_,S)=>n.memoryStreamingPriority(_,o)-n.memoryStreamingPriority(S,o)||_.priority-S.priority),m=new Set(o.values());if(n.memoryPreloadUrgent)for(const _ of a.values())m.add(_);const M=n.memorySource?n.mobileDevice?4:6:n.mobileDevice?2:3;let v=0;for(const _ of n.regions.values())_.state==="loading"&&v++;v=Math.max(v,n.loading);for(const _ of p){if(v>=M)break;if(n.memorySource&&!m.has(_.region)&&v>=M-2)continue;const S=n.regionIndex.get(_.region);n.fetchRegion(_.region,S,m.has(_.region)),v++}n.scheduleMesh(),n.emitStatus(e)}async function F_(n,e,t,i=!0){const s=new AbortController,r=n.generation,o=n.memorySource,a={definition:t,state:"loading",controller:s,used:performance.now()};n.regions.set(e,a),n.loading++;try{const c=n.entityRegionIndex.get(e),l=n.savedEntityRegions.get(e),h=new ArrayBuffer(8);new Uint8Array(h).set([83,86,82,50]);const[d,u,f,g,y]=await Promise.all([t.file?rn(Nn(t.file),{signal:s.signal}):Promise.resolve(new Response(h)),c?rn(Nn(c.file),{signal:s.signal}):void 0,o?.region(n.dimension.id,t.x,t.z,s.signal,i?0:1),o?.repairRegion?.(n.dimension.id,t.x,t.z,s.signal,i?0:1),l?rn(Nn(l.file),{signal:s.signal}):void 0]);if(!d.ok)throw new Error(`地图区块下载失败（${d.status}）`);const[p,m,M]=await Promise.all([d.arrayBuffer(),u&&c?R_(u,c):[],y&&l?Kn(y).then(A=>D_(A,l)):[]]);if(n.disposed||r!==n.generation||n.regions.get(e)!==a)return;n.bytes+=Number(d.headers.get("content-length"))||t.bytes||p.byteLength,c&&(n.bytes+=Number(u?.headers.get("content-length"))||c.bytes),n.entityRenderer?.setRegion(e,m),n.savedEntities?.setRegion(e,M),l&&(n.bytes+=Number(y?.headers.get("content-length"))||l.bytes),f&&await n.memoryCallbacks.onEvents?.(f,n.dimension.id,e);const v=[];f&&await Wl(f,(A,R)=>{const D=o?.eventState?.(A);D&&v.push([R,...D])},s.signal);const{memoryTransfer:_,buffers:S}=await I_(f,v,g,s.signal);if(n.disposed||r!==n.generation||n.regions.get(e)!==a)return;n.post({type:"region",key:e,x:t.x,z:t.z,buffer:p,entities:m,generation:r,memoryTransfer:_},[p,...S])}catch(c){const l=s.signal.aborted||c instanceof DOMException&&c.name==="AbortError";if(s.abort(),n.disposed||r!==n.generation||n.regions.get(e)!==a)return;a.controller=void 0,l?n.regions.delete(e):(a.state="error",a.retry=performance.now()+12e3,n.callbacks.onError?.(c instanceof Error?c.message:"地图区块下载失败"))}finally{r===n.generation&&(n.loading=Math.max(0,n.loading-1)),n.emitStatus(),r===n.generation&&!n.disposed&&(n.streamingRequested=!0)}}function k_(n){if(n.flushMemoryTime()||n.pendingMesh||n.queuedMesh||!n.initialized||n.disposed||n.memorySource&&n.memoryAcknowledgedRevision!==n.memoryRevision)return;const e=n.memorySource?n.memoryRequiredChunks():new Map;let t,i=1/0;for(const[o,a]of n.streamingDesired){if(n.meshes.has(o)&&!n.dirtyMeshes.has(o)||n.regions.get(a.region)?.state!=="ready")continue;const c=n.memoryStreamingPriority(a,e);(c<i||c===i&&a.priority<t[1].priority)&&(t=[o,a],i=c)}if(!t)return;const[s,r]=t;n.dirtyMeshes.delete(s),n.pendingMesh=s,n.pendingMemoryRevision=n.memorySource?n.memoryRevision:void 0,n.post({type:"mesh",region:r.region,x:r.x,z:r.z,generation:n.generation,memoryRevision:n.pendingMemoryRevision,collision:n.shouldBuildCollision(s)})}function O_(n,e){if(!n.disposed){if(e.type==="ready"){n.workerReady?.(),n.workerReady=void 0;return}if(e.type==="memory-inspect"){const t=n.memoryInspections.get(e.requestId);if(n.memoryInspections.delete(e.requestId),!t)return;if(e.generation!==n.generation){t.reject(new Error("读取期间地图维度已切换"));return}e.block.interactionBounds&&(n.memoryTargetBounds.size>=256&&n.memoryTargetBounds.clear(),n.memoryTargetBounds.set(`${e.block.x},${e.block.y},${e.block.z}`,e.block.interactionBounds),n.memoryStanceCache.clear()),t.resolve(e.block);return}if(!(e.generation!==void 0&&e.generation!==n.generation)){if(e.type==="region"){const t=n.regions.get(e.key);if(!t){n.post({type:"evict",key:e.key});return}t.state="ready",t.chunks=new Set(e.chunks),t.controller=void 0,e.memoryStats&&e.memoryStats.revision===n.memoryRevision&&(n.memoryEstimated=e.memoryStats.estimated,n.memoryLoadedRegions=e.memoryStats.regions,n.memoryCallbacks.onStatus?.(n.memoryEstimated,n.memoryLoadedRegions)),n.invalidateNeighbours(e.chunks),n.streamingRequested=!0,n.scheduleMesh()}else if(e.type==="memory"){if(e.meshChunks?n.invalidateMeshKeys(e.meshChunks,!0):n.invalidateNeighbours(e.chunks,!0),e.revision!==n.memoryRevision)return;n.memoryAcknowledgedRevision=e.revision,n.containerTargetPosition.x=1/0,n.memoryEstimated=e.estimated,n.memoryLoadedRegions=e.regions,n.memoryCallbacks.onStatus?.(e.estimated,e.regions),n.scheduleMesh()}else if(e.type==="mesh"){if(n.memorySource&&e.memoryRevision!==n.memoryRevision){n.pendingMesh===e.key&&n.pendingMemoryRevision===e.memoryRevision&&(n.pendingMesh=void 0,n.pendingMemoryRevision=void 0),n.scheduleMesh();return}n.queuedMesh=e;return}else if(e.type==="error"){e.key===n.pendingMesh&&(n.pendingMesh=void 0,n.pendingMemoryRevision=void 0);const t=e.key?n.regions.get(e.key):void 0;t&&(t.state="error",t.retry=performance.now()+15e3),n.callbacks.onError?.(e.message),n.scheduleMesh()}n.emitStatus()}}}function z_(n){const e=n.queuedMesh;if(!e)return;if(n.queuedMesh=void 0,e.generation!==n.generation||n.memorySource&&e.memoryRevision!==n.memoryRevision){n.pendingMesh===e.key&&n.pendingMemoryRevision===e.memoryRevision&&(n.pendingMesh=void 0,n.pendingMemoryRevision=void 0),n.scheduleMesh();return}if(n.pendingMesh===e.key&&(n.pendingMesh=void 0,n.pendingMemoryRevision=void 0),n.streamingDesired.get(e.key)){n.removeMesh(e.key,!0);const i=new Je;i.userData.memoryWater=e.waterSections,i.userData.touristCollision=e.collision,e.touristCollision&&(i.userData.touristCollisionShapes=L_(e.touristCollision)),i.userData.visibleSigns=e.visibleSigns||[],i.userData.visibleBlockEntities=e.visibleBlockEntities,i.visible=n.desired.has(e.key);const[s,r]=e.key.split(",").map(Number);i.position.set(s*16,0,r*16),n.addGeometry(i,e.opaque,n.opaqueMaterial),n.addGeometry(i,e.transparent,n.transparentMaterial),n.memoryContainers.setChunk(e.key,e.memoryContainers||[],i),n.invalidateMemoryContainerRouteChunks(),n.meshes.set(e.key,i),n.memoryContinuous&&(n.memoryContinuousChunks??=new Set).add(e.key),n.memoryTerrainRevision++,n.invalidateMemoryRouteChunk(e.key),n.memoryStaleMeshes.delete(e.key),n.memoryGroundCache.clear(),n.memoryStanceCache.clear(),n.memoryReachCache.clear(),n.memoryTargetBounds.clear(),n.memoryCameraKey="",n.scene.add(i),n.containerTargetPosition.x=1/0,n.syncEntityOverlays(),n.renderDirty=!0}n.scheduleMesh(),n.emitStatus()}function B_(n,e,t,i){if(!t.positions.length)return;const s=new zt;s.setAttribute("position",new Pt(t.positions,3)),s.setAttribute("normal",new Pt(t.normals,3,!0)),s.setAttribute("uv",new Pt(t.uvs,2)),s.setAttribute("color",new Pt(t.colors,3,!0)),s.setIndex(new Pt(t.indices,1)),t.bounds?(s.boundingBox=new Ut(new P(...t.bounds.min),new P(...t.bounds.max)),s.boundingSphere=s.boundingBox.getBoundingSphere(new ci)):s.computeBoundingSphere();const r=new we(s,i);t.collision&&ny(r,t.collision),r.renderOrder=i===n.transparentMaterial?1:0,e.add(r)}function G_(n){const e=new Set([...n.desired.keys()].filter(r=>n.meshes.has(r))),t=new Set;for(const r of e)for(const o of n.meshes.get(r).userData.visibleSigns)t.add(o.join(","));const i=!n.memorySource||n.memoryTime>=(n.memorySource.manifest.finalMapTime??1/0),s=n.memorySource?new Set([...e].flatMap(r=>n.meshes.get(r)?.userData.visibleBlockEntities||[])):void 0;n.entityRenderer?.sync(e,n.camera.position,t,i,s)&&(n.renderDirty=!0),n.savedEntities?.sync(e,n.camera.position)&&(n.renderDirty=!0)}function V_(n,e,t=!1){const i=new Set;for(const s of e){const[r,o]=s.split(",").map(Number);for(const[a,c]of[[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]])i.add(Xt(r+a,o+c))}n.invalidateMeshKeys(i,t)}function H_(n,e,t=!1){for(const i of e)(n.meshes.has(i)||n.pendingMesh===i)&&(n.dirtyMeshes.add(i),t&&!n.memoryStaleMeshes.has(i)&&(n.memoryStaleMeshes.add(i),n.memoryTerrainRevision++,n.invalidateMemoryRouteChunk(i)))}function W_(n,e){return n.meshes.has(e)&&!n.dirtyMeshes.has(e)&&n.pendingMesh!==e&&n.queuedMesh?.key!==e}function X_(n,e,t=!1){n.memoryContinuousChunks?.delete(e),t||(n.dirtyMeshes.delete(e),n.memoryStaleMeshes.delete(e)),t?n.memoryContainers.detachChunk(e):n.memoryContainers.removeChunk(e);const i=n.meshes.get(e);i&&(n.memoryGroundCache.clear(),n.memoryStanceCache.clear(),n.memoryReachCache.clear(),n.memoryTargetBounds.clear(),n.memoryCameraKey="",i.traverse(s=>{s instanceof we&&(so(s),s.geometry.dispose())}),n.scene.remove(i),n.meshes.delete(e),n.memoryTerrainRevision++,n.invalidateMemoryRouteChunk(e),n.renderDirty=!0)}function q_(n,e=!1){const t=[...n.desired.keys()].filter(r=>n.meshReady(r)).length,i={loaded:t,pending:Math.max(0,n.desired.size-t),bytes:n.bytes,visible:t,total:n.totalChunks,dimension:n.dimension.id},s=JSON.stringify(i);(e||s!==n.lastStatus)&&(n.lastStatus=s,n.callbacks.onStatus?.(i))}async function Y_(n,e,t={}){if(n.stopIslandMechanism(),await n.ready,!n.disposed){n.closeContainer(),n.setContainerTarget(null),n.containerPickRevision++,n.memorySource=e||void 0,n.memoryCallbacks=t,n.resetMemoryEffects(),n.clearMemoryPreload(),n.memoryRevision++,n.memoryAcknowledgedRevision=-1,n.generation++,n.resetMemoryContinuity();for(const i of n.regions.values())i.controller?.abort();n.regions.clear(),n.entityRenderer?.clear(),n.savedEntities?.clear(),n.loading=0,n.pendingMesh=void 0,n.pendingMemoryRevision=void 0,n.queuedMesh=void 0,n.dirtyMeshes.clear(),n.memoryStaleMeshes.clear(),n.desired.clear(),n.streamingDesired.clear(),n.streamingCenter="",n.streamingSignature="";for(const i of n.meshes.keys())n.removeMesh(i);n.memoryRouteChunkRevisions?.clear(),n.post({type:"reset"}),n.reindex(),e&&n.configureMemoryWorker(),n.entityRenderer&&(n.entityRenderer.group.visible=!0),n.savedEntities&&(n.savedEntities.group.visible=!e||n.memoryTime>=(e.manifest.finalMapTime??1/0)),e||(n.memoryFollow=void 0,n.clearMemoryPlayers()),n.updateStreaming(!0)}}function $_(n){n.memoryContinuous=!1,n.memoryQueuedTime=void 0,n.memoryContinuousChunks?.clear()}function j_(n,e,t=!1){if(Number.isFinite(e)){if(t?!n.memoryContinuous&&n.getMemoryPresentationStatus().ready&&(n.memoryContinuous=!0,n.memoryContinuousChunks=new Set([...n.meshes.keys()].filter(i=>!n.memoryStaleMeshes.has(i)))):n.resetMemoryContinuity(),n.memoryContinuous&&n.memoryUpdatePending()){n.memoryQueuedTime=e;return}n.commitMemoryTime(e)}}function K_(n){return n.memoryAcknowledgedRevision!==n.memoryRevision||[...n.memoryRequiredChunks().keys()].some(e=>n.memoryStaleMeshes.has(e))}function Z_(n){if(!n.memoryContinuous||n.memoryQueuedTime===void 0||n.memoryUpdatePending())return!1;const e=n.memoryQueuedTime;return n.memoryQueuedTime=void 0,Object.is(e,n.memoryTime)?!1:(n.commitMemoryTime(e),!0)}function J_(n,e){Object.is(e,n.memoryTime)||(n.memorySource&&(n.closeContainer(),n.setContainerTarget(null),n.containerPickRevision++),n.memoryTime=e,!(!n.memorySource||n.disposed)&&(n.memoryRevision++,n.pendingMesh&&n.dirtyMeshes.add(n.pendingMesh),n.pendingMesh=void 0,n.pendingMemoryRevision=void 0,n.queuedMesh=void 0,n.post({type:"memory-time",time:e,revision:n.memoryRevision,generation:n.generation}),n.entityRenderer&&(n.entityRenderer.group.visible=!0),n.savedEntities&&(n.savedEntities.group.visible=e>=(n.memorySource.manifest.finalMapTime??1/0)),n.syncEntityOverlays(),n.renderDirty=!0))}function Q_(n){const e=n.memorySource;e&&(n.post({type:"memory-config",palette:e.palette,repairPalette:e.repairPalette,end:e.manifest.finalMapTime??1/0,time:n.memoryTime,revision:n.memoryRevision,generation:n.generation}),n.post({type:"memory-time",time:n.memoryTime,revision:n.memoryRevision,generation:n.generation}))}function eM(n,e,t=!1){if(n.disposed)return;const i=[],s=new Set,r=n.getLocation(),o=Xt(Math.floor(r.x/16),Math.floor(r.z/16));if(n.memoryPreloadPose=n.memorySource?e.find(l=>l.dimension===n.dimension.id&&Number.isFinite(l.x)&&Number.isFinite(l.z)):void 0,n.memoryPreloadUrgent=t,n.memorySource)for(const l of e){if(l.dimension!==n.dimension.id||!Number.isFinite(l.x)||!Number.isFinite(l.z))continue;const h=Math.floor(l.x/16),d=Math.floor(l.z/16),u=Xt(h,d);if(!(u===o||s.has(u))&&(s.add(u),i.push({x:h,z:d}),i.length===6))break}const a=n.memoryPreloadPose?n.memoryRequiredChunks(n.memoryPreloadPose):new Map,c=`${i.map(l=>Xt(l.x,l.z)).join(";")}|${[...a.keys()].join(";")}|${t}`;c!==n.memoryPreloadSignature&&(n.memoryPreloadCenters=i,n.memoryPreloadSignature=c,n.updateStreaming())}function tM(n,e){if(n.disposed||e?.dimension!==void 0&&e.dimension!==n.dimension.id)return{ready:!1,loaded:0,total:0};const t=e||n.getLocation();if(!Number.isFinite(t.x)||!Number.isFinite(t.z))return{ready:!1,loaded:0,total:0};const i=n.getLocation();Xt(Math.floor(i.x/16),Math.floor(i.z/16))!==n.streamingCenter&&n.updateStreaming();const r=Math.floor(t.x/16),o=Math.floor(t.z/16),a=Xt(r,o)===n.streamingCenter?n.desired:n.chunkWindow(r,o);let c=0;for(const[d,u]of a)n.regions.get(u.region)?.state==="ready"&&n.meshReady(d)&&c++;const l=a.size,h=!n.memorySource||n.memoryAcknowledgedRevision===n.memoryRevision;return{ready:l===0||n.initialized&&h&&c===l,loaded:c,total:l}}function nM(n,e){const t=e||n.memoryFollow||n.getLocation();if(n.disposed||!n.initialized||"dimension"in t&&t.dimension!==n.dimension.id||!Number.isFinite(t.x)||!Number.isFinite(t.z))return{ready:!1,loaded:0,total:0};const i=n.getLocation();Xt(Math.floor(i.x/16),Math.floor(i.z/16))!==n.streamingCenter&&n.updateStreaming();const s=n.memoryRequiredChunks(e);let r=0;for(const[c,l]of s)n.regions.get(l)?.state==="ready"&&n.meshes.has(c)&&(!n.memoryStaleMeshes.has(c)||n.memoryContinuous&&n.memoryContinuousChunks?.has(c))&&r++;return{ready:(n.memoryContinuous&&[...s.keys()].every(c=>n.memoryContinuousChunks?.has(c))||!n.memorySource||n.memoryAcknowledgedRevision===n.memoryRevision)&&r===s.size,loaded:r,total:s.size}}function iM(n,e){const t=e||n.memoryFollow||n.getLocation(),i=new Map,s=(u,f)=>{const g=Ti(Math.floor(u/4),Math.floor(f/4)),y=n.regionIndex.get(g),p=(u%4+4)%4,m=(f%4+4)%4;y&&y.chunks&1<<p*4+m&&i.set(Xt(u,f),g)},r=Math.floor(t.x/16),o=Math.floor(t.z/16);for(let u=-1;u<=1;u++)for(let f=-1;f<=1;f++)s(r+u,o+f);const a=e||n.memoryFollow,c=a?.actionTarget;c&&Math.hypot(c.x+.5-t.x,c.z+.5-t.z)<=6&&s(Math.floor(c.x/16),Math.floor(c.z/16));const l=n.camera.position.clone().sub(n.controls.target),h=n.mode==="fly"||n.mode==="walk"?new P:a?Rh(n.memoryRequestedOffset,n.memoryAppliedOffset,l):l,d=new P(t.x,t.y+1,t.z);a&&d.add(n.memoryPanOffset);for(const u of Ya(d,h.clone().normalize(),h.length()+1)){const[f,g]=u.split(",").map(Number);s(f,g)}return i}function sM(n,e,t){const i=Xt(e.x,e.z);if(t.has(i))return 0;if(n.memoryPreloadRequired.has(i))return 1;const s=n.memoryPreloadCenters[0];return n.memorySource&&s&&Math.abs(e.x-s.x)<=1&&Math.abs(e.z-s.z)<=1?1:2}function rM(n){n.memoryPreloadCenters=[],n.memoryPreloadSignature="",n.memoryPreloadPose=void 0,n.memoryPreloadRequired.clear(),n.memoryPreloadUrgent=!1}const Nl={type:"change"},hc={type:"start"},Uh={type:"end"},kr=new no,Fl=new $n,oM=Math.cos(70*Ot.DEG2RAD),Mt=new P,Yt=2*Math.PI,tt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$o=1e-6;class aM extends jd{constructor(e,t=null){super(e,t),this.state=tt.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:as.ROTATE,MIDDLE:as.DOLLY,RIGHT:as.PAN},this.touches={ONE:ss.ROTATE,TWO:ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Bn,this._lastTargetPosition=new P,this._quat=new Bn().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ai,this._sphericalDelta=new Ai,this._scale=1,this._panOffset=new P,this._rotateStart=new xe,this._rotateEnd=new xe,this._rotateDelta=new xe,this._panStart=new xe,this._panEnd=new xe,this._panDelta=new xe,this._dollyStart=new xe,this._dollyEnd=new xe,this._dollyDelta=new xe,this._dollyDirection=new P,this._mouse=new xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lM.bind(this),this._onPointerDown=cM.bind(this),this._onPointerUp=hM.bind(this),this._onContextMenu=yM.bind(this),this._onMouseWheel=fM.bind(this),this._onKeyDown=mM.bind(this),this._onTouchStart=pM.bind(this),this._onTouchMove=gM.bind(this),this._onMouseDown=uM.bind(this),this._onMouseMove=dM.bind(this),this._interceptControlDown=_M.bind(this),this._interceptControlUp=MM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Nl),this.update(),this.state=tt.NONE}update(e=null){const t=this.object.position;Mt.copy(t).sub(this.target),Mt.applyQuaternion(this._quat),this._spherical.setFromVector3(Mt),this.autoRotate&&this.state===tt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Yt:i>Math.PI&&(i-=Yt),s<-Math.PI?s+=Yt:s>Math.PI&&(s-=Yt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Mt.setFromSpherical(this._spherical),Mt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Mt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Mt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Mt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(kr.origin.copy(this.object.position),kr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(kr.direction))<oM?this.object.lookAt(this.target):(Fl.setFromNormalAndCoplanarPoint(this.object.up,this.target),kr.intersectPlane(Fl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>$o||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$o||this._lastTargetPosition.distanceToSquared(this.target)>$o?(this.dispatchEvent(Nl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Yt/60*this.autoRotateSpeed*e:Yt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Mt.setFromMatrixColumn(t,0),Mt.multiplyScalar(-e),this._panOffset.add(Mt)}_panUp(e,t){this.screenSpacePanning===!0?Mt.setFromMatrixColumn(t,1):(Mt.setFromMatrixColumn(t,0),Mt.crossVectors(this.object.up,Mt)),Mt.multiplyScalar(e),this._panOffset.add(Mt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Mt.copy(s).sub(this.target);let r=Mt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Yt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Yt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Yt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Yt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Yt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Yt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Yt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Yt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function cM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function lM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function hM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Uh),this.state=tt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function uM(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case as.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=tt.DOLLY;break;case as.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=tt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=tt.ROTATE}break;case as.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=tt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=tt.PAN}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(hc)}function dM(n){switch(this.state){case tt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case tt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function fM(n){this.enabled===!1||this.enableZoom===!1||this.state!==tt.NONE||(n.preventDefault(),this.dispatchEvent(hc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Uh))}function mM(n){this.enabled!==!1&&this._handleKeyDown(n)}function pM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ss.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=tt.TOUCH_ROTATE;break;case ss.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=tt.TOUCH_PAN;break;default:this.state=tt.NONE}break;case 2:switch(this.touches.TWO){case ss.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=tt.TOUCH_DOLLY_PAN;break;case ss.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=tt.TOUCH_DOLLY_ROTATE;break;default:this.state=tt.NONE}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(hc)}function gM(n){switch(this._trackPointer(n),this.state){case tt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case tt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case tt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case tt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=tt.NONE}}function yM(n){this.enabled!==!1&&n.preventDefault()}function _M(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function MM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const kl=1.62,Ns=.3,Nh=.25,ti=Ns,vM=1.8,jo=.6,Or=.05,yt=1e-7,bM=32,SM=.98;function Ol(n,e,t){return n<e?Math.min(e,n+t):Math.max(e,n-t)}function Fh(n,e=vM){return{minX:n.x-ti,minY:n.y,minZ:n.z-ti,maxX:n.x+ti,maxY:n.y+e,maxZ:n.z+ti}}function xM(n,e){const t={minX:n.x-ti,minY:n.y-6.1,minZ:n.z-ti,maxX:n.x+ti,maxY:n.y+.12,maxZ:n.z+ti};let i=-1/0;for(const s of e.boxesIn(t))s.maxY>n.y+.12||s.maxY<n.y-6.05||s.maxX<=t.minX+yt||s.minX>=t.maxX-yt||s.maxZ<=t.minZ+yt||s.minZ>=t.maxZ-yt||(i=Math.max(i,s.maxY));return Number.isFinite(i)?{x:n.x,y:i,z:n.z}:null}function Ms(n,e,t,i){if(Math.abs(t)<yt)return 0;const s=Fh(n),r={...s};e==="x"?(r.minX=Math.min(s.minX,s.minX+t),r.maxX=Math.max(s.maxX,s.maxX+t)):e==="y"?(r.minY=Math.min(s.minY,s.minY+t),r.maxY=Math.max(s.maxY,s.maxY+t)):(r.minZ=Math.min(s.minZ,s.minZ+t),r.maxZ=Math.max(s.maxZ,s.maxZ+t));let o=t;for(const a of i.boxesIn(r)){if(!(e==="x"?s.maxY>a.minY+yt&&s.minY<a.maxY-yt&&s.maxZ>a.minZ+yt&&s.minZ<a.maxZ-yt:e==="y"?s.maxX>a.minX+yt&&s.minX<a.maxX-yt&&s.maxZ>a.minZ+yt&&s.minZ<a.maxZ-yt:s.maxX>a.minX+yt&&s.minX<a.maxX-yt&&s.maxY>a.minY+yt&&s.minY<a.maxY-yt))continue;const l=e==="x"?a.minX:e==="y"?a.minY:a.minZ,h=e==="x"?a.maxX:e==="y"?a.maxY:a.maxZ,d=e==="x"?s.minX:e==="y"?s.minY:s.minZ,u=e==="x"?s.maxX:e==="y"?s.maxY:s.maxZ;t>0&&u<=l+yt?o=Math.min(o,Math.max(0,l-u)):t<0&&d>=h-yt&&(o=Math.max(o,Math.min(0,h-d)))}return o}function kh(n,e,t,i){const s={...n},r=Ms(s,"x",e,i);s.x+=r;const o=Ms(s,"z",t,i);return s.z+=o,{feet:s,x:r,z:o}}function EM(n,e,t,i){const s={...n},r=Ms(s,"y",jo,i);if(r<jo-1e-5)return null;s.y+=r;const o=kh(s,e,t,i),a=Ms(o.feet,"y",-jo-1e-4,i);return o.feet.y+=a,a>=-1e-5?null:o}class TM{feet=new P;velocity=new P;grounded=!1;swimming=!1;forwardWasDown=!1;lastForwardTap=0;autoSprint=!1;teleport(e){this.feet.set(e.x,e.y,e.z),this.velocity.set(0,0,0),this.grounded=!1,this.swimming=!1,this.forwardWasDown=!1,this.lastForwardTap=0,this.autoSprint=!1}getDiagnostics(){return{feet:this.feet.toArray(),velocity:this.velocity.toArray(),grounded:this.grounded,swimming:this.swimming}}step(e,t,i,s,r){let o=Math.min(Math.max(e,0),Nh),a=!1;for(;o>1e-8&&s.readyAt(this.feet.x,this.feet.z);){const c=Math.min(o,.05);a=this.stepFrame(c,t,i,s,r)||a,o-=c}return a}stepFrame(e,t,i,s,r){const o=(...Fe)=>Fe.some(nt=>i.keys.has(nt)),a=Ot.clamp((o("KeyD","ArrowRight")?1:0)-(o("KeyA","ArrowLeft")?1:0)+i.touchMove.x,-1,1),c=Ot.clamp((o("KeyW","ArrowUp")?1:0)-(o("KeyS","ArrowDown")?1:0)-i.touchMove.z,-1,1),l=o("KeyW","ArrowUp");if(l&&!this.forwardWasDown){const Fe=performance.now();this.autoSprint=Fe-this.lastForwardTap<300,this.lastForwardTap=Fe}else l||(this.autoSprint=!1);this.forwardWasDown=l;const h=Math.hypot(a,c),d=h>1?a/h:a,u=h>1?-c/h:-c,f=Math.cos(t)*d+Math.sin(t)*u,g=-Math.sin(t)*d+Math.cos(t)*u,y=xM(this.feet,s);this.grounded=!this.swimming&&y!==null&&Math.abs(y.y-this.feet.y)<=.04,this.grounded&&y&&(this.feet.y=y.y);const p=i.touchJump||o("Space");this.swimming=s.waterAt(this.feet.x,this.feet.y+.65,this.feet.z)||s.waterAt(this.feet.x,this.feet.y+1.2,this.feet.z);const m=Fh(this.feet),M={...m,minX:m.minX-Or,minZ:m.minZ-Or,maxX:m.maxX+Or,maxZ:m.maxZ+Or},v=!this.swimming&&s.climbableIn(M).length>0,_=s.webIn(m),S=o("ShiftLeft","ShiftRight"),A=!S&&(i.touchSprint||o("ControlLeft","ControlRight")||this.autoSprint),R=this.swimming?A?4.7:2.25:S?1.3:A?5.62:4.32,D=this.swimming?7:this.grounded?24:5;if(this.velocity.x=Ol(this.velocity.x,f*R,D*e),this.velocity.z=Ol(this.velocity.z,g*R,D*e),v){const Fe=(c>.12?1:0)-(c<-.12||S?1:0);this.velocity.y=Fe*3.2,this.grounded=!1}else this.swimming?(p?this.velocity.y=Math.min(3.1,this.velocity.y+8*e):S?this.velocity.y=Math.max(-2.7,this.velocity.y-8*e):this.velocity.y=Math.max(-2,this.velocity.y*Math.exp(-8*e)),this.grounded=!1):p&&this.grounded?(this.velocity.y=8.4,this.grounded=!1):this.grounded?this.velocity.y=0:this.velocity.y=Math.max(-78.4,(this.velocity.y-bM*e)*Math.pow(SM,20*e));let x=!1,E=this.velocity.x*e*(_?.25:1),I=this.velocity.z*e*(_?.25:1);const F={x:this.feet.x,y:this.feet.y,z:this.feet.z},O=F.x+E,G=F.z+I;(O<r.minX||O>r.maxX||!s.readyAt(O,F.z))&&(E=0,this.velocity.x=0),(G<r.minZ||G>r.maxZ||!s.readyAt(F.x,G))&&(I=0,this.velocity.z=0);const V=kh(F,E,I,s),H=Math.abs(V.x-E)>1e-5||Math.abs(V.z-I)>1e-5,$=!this.swimming&&H&&(this.grounded||this.velocity.y<=0)?EM(F,E,I,s):null,W=V.x*V.x+V.z*V.z,ie=$?$.x*$.x+$.z*$.z:0,se=$&&ie>W+1e-8?$:V;this.feet.x=se.feet.x,this.feet.z=se.feet.z,x||=Math.abs(se.x)>1e-7||Math.abs(se.z)>1e-7,$&&se===$&&(this.feet.y=se.feet.y,this.grounded=!0);const pe=Ot.clamp(this.feet.y+this.velocity.y*e,r.minY-8,r.maxY+32);let Ie=(pe-this.feet.y)*(_?.05:1);if(pe<r.minY-8&&(Ie=0),v||this.swimming){const Fe=Ms(this.feet,"y",Ie,s);this.feet.y+=Fe,Math.abs(Fe-Ie)>1e-5&&(this.velocity.y=0),x||=Math.abs(Fe)>1e-7}else{const Fe=Ms(this.feet,"y",Ie,s);this.feet.y+=Fe,Math.abs(Fe-Ie)>1e-5?(Ie<0&&(this.grounded=!0),this.velocity.y=0):this.grounded&&Math.abs(Ie)<yt?this.velocity.y=0:this.grounded=!1,x||=Math.abs(Fe)>1e-7}return x}}const Oh=["east","west","up","down","south","north"];function zh(n){const[e,t,i]=n.size,s=n.uv??[0,0];if(!Array.isArray(s))return Object.fromEntries(Oh.map(a=>{const c=s[a];if(!c)return[a,void 0];const l=c.uv_size||c.uvSize||(a==="up"||a==="down"?[e,i]:a==="east"||a==="west"?[i,t]:[e,t]);return[a,[...c.uv,...l]]}));const[r,o]=s;return{west:[r,o+i,i,t],north:[r+i,o+i,e,t],east:[r+i+e,o+i,i,t],south:[r+2*i+e,o+i,e,t],up:[r+i,o,e,i],down:[r+i+e,o,e,i]}}function zl(n,e,t,i=0,s=!1){const r=n.inflate??i,o=new cn(...n.size.map(u=>Math.max(0,u+r*2)/16)),a=zh(n),c=n.mirror??s,l=o.getAttribute("uv"),h=Array.from(o.getIndex().array),d=[];Oh.forEach((u,f)=>{const y=a[c&&u==="east"?"west":c&&u==="west"?"east":u];if(!y)return;const[p,m,M,v]=y,_=(c?p+M:p)/e,S=(c?p:p+M)/e,A=u==="down"&&(n.uv===void 0||Array.isArray(n.uv)),R=1-(m+(A?v:0))/t,D=1-(m+(A?0:v))/t,x=[_,R,S,R,_,D,S,D];for(let E=0;E<4;E++)l.setXY(f*4+E,x[E*2],x[E*2+1]);d.push(...h.slice(f*6,f*6+6))}),o.clearGroups(),o.scale(-1,1,1);for(let u=0;u<d.length;u+=3)[d[u+1],d[u+2]]=[d[u+2],d[u+1]];return o.setIndex(d),o.computeBoundingSphere(),o}const Ko=n=>n*Math.PI/180;function Gs(n=[0,0,0]){return new gn(-Ko(n[0]),-Ko(n[1]),Ko(n[2]),"ZYX")}function AM(n,e,t,i,s=[]){const r=new Je,o=new Map,a=new Map(n.bones.map(u=>[u.name.toLowerCase(),u])),c=u=>o.get(a.get(u.toLowerCase()).name),l=new Map(Object.entries(i||{}).map(([u,f])=>[u.toLowerCase(),f])),h=new Set(s.map(u=>u.toLowerCase()));let d=0;for(const u of n.bones){const f=new Je;f.name=u.name,f.visible=!h.has(u.name.toLowerCase()),f.rotation.copy(Gs(l.get(u.name.toLowerCase())||u.rotation)),o.set(u.name,f)}for(const u of n.bones){const f=o.get(u.name),g=u.pivot||[0,0,0],y=u.parent?a.get(u.parent.toLowerCase())?.pivot||[0,0,0]:[0,0,0];f.position.set(-(g[0]-y[0])/16,(g[1]-y[1])/16,(g[2]-y[2])/16),(u.parent?c(u.parent):r).add(f);const p=new Je;p.rotation.copy(Gs(u.bind_pose_rotation)),f.add(p);for(const[m,M]of(u.cubes||[]).entries()){const v=new we(t(M,`${u.name}:${m}`,u.inflate,u.mirror),e),_=M.rotation?M.pivot||M.origin.map((S,A)=>S+M.size[A]/2):g;if(v.position.set(-(M.origin[0]+M.size[0]/2-_[0])/16,(M.origin[1]+M.size[1]/2-_[1])/16,(M.origin[2]+M.size[2]/2-_[2])/16),M.rotation){const S=new Je;S.position.set(-(_[0]-g[0])/16,(_[1]-g[1])/16,(_[2]-g[2])/16),S.rotation.copy(Gs(M.rotation)),S.add(v),p.add(S)}else p.add(v);d++}}return r.scale.setScalar(n.scale??1),{group:r,bones:o,cubes:d}}const ts=n=>n.toLowerCase();function RM(n,e,t){const i=new Map([...n.bones].map(([c,l])=>[ts(c),l])),s=(c,l)=>i.get(ts(c))?.rotation.copy(Gs(l)),r=(c,l)=>i.get(ts(c))?.position.add({x:-l[0]/16,y:l[1]/16,z:l[2]/16}),o=(c,l)=>{const h=i.get(ts(c));h&&(Array.isArray(l)?h.scale.set(...l):h.scale.setScalar(l))},a=c=>{for(const[l,h]of i)c.test(l)&&(h.visible=!1)};if(["minecraft:zombie","minecraft:husk","minecraft:drowned","minecraft:zombie_villager_v2"].includes(t.type)&&(s("rightarm",[-90,0,0]),s("leftarm",[-90,0,0])),(t.type==="minecraft:vindicator"||t.type==="minecraft:evocation_illager")&&a(/^(?:left|right)(?:arm|item)$/),(t.type==="minecraft:spider"||t.type==="minecraft:cave_spider")&&[[0,45,-45],[0,-45,45],[0,22.5,-33.3],[0,-22.5,33.3],[0,-22.5,-33.3],[0,22.5,33.3],[0,-45,-45],[0,45,45]].forEach((l,h)=>s(`leg${h}`,l)),t.type==="minecraft:blaze")for(let c=0;c<12;c++){const l=Math.floor(c/4),h=(c%4*90+[0,45,27][l])*Math.PI/180,d=[9,7,5][l];r(`upperbodyparts${c}`,[Math.cos(h)*d,[2,-2,-11][l]+Math.cos(c*(l===2?1.5:2)*14.32*Math.PI/180),Math.sin(h)*d])}if(t.type==="minecraft:guardian"||t.type==="minecraft:elder_guardian"){const c=[[-45,0,0],[45,0,0],[0,0,45],[0,0,-45],[90,45,0],[90,-45,0],[90,-135,0],[90,135,0],[-135,0,0],[135,0,0],[0,0,135],[0,0,-135]];[[0,1,1],[0,1,-1],[1,1,0],[-1,1,0],[-1,0,-1],[1,0,-1],[1,0,1],[-1,0,1],[0,-1,1],[0,-1,-1],[1,-1,0],[-1,-1,0]].forEach(([h,d,u],f)=>{const g=`spikepart${f}`,y=8*(1+Math.cos(f*Math.PI/180)*.01),p=[h*y,d===1?24-y:d===-1?y-8:8,u*y],m=e.bones.find(M=>ts(M.name)===g)?.pivot||[0,24,0];r(g,p.map((M,v)=>M-m[v])),s(g,c[f])}),r("eye",[0,0,-8.25]),r("tailpart1",[-1.5,-.5,14]),r("tailpart2",[.5,-.5,6])}if(t.type.endsWith("minecart")&&i.has("root")&&r("root",[0,-18.5,0]),t.type==="minecraft:tripod_camera"&&(n.group.position.y+=24/16,s("leg0",[18,0,0]),s("leg1",[-18,0,0]),s("leg2",[0,0,18]),s("leg3",[0,0,-18])),["minecraft:horse","minecraft:donkey","minecraft:mule","minecraft:skeleton_horse","minecraft:zombie_horse"].includes(t.type)&&(t.saddled||a(/^(saddle|bit|bridle)/),a(/^reins/),(t.type==="minecraft:horse"||!t.chested)&&a(/^bag/),a(t.type==="minecraft:donkey"||t.type==="minecraft:mule"?/^ear/:/^muleear/)),t.type==="minecraft:ender_crystal"&&(t.showBottom||a(/^base$/),s("outerglass",[39.2,14.5,-39.2]),r("outerglass",[0,16,0]),s("innerglass",[39.2,14.5,-39.2]),i.get("innerglass")?.scale.setScalar(.875),s("crystal",[219.2,14.5,-39.2]),i.get("crystal")?.scale.setScalar(.875)),t.type==="minecraft:cat"&&t.sitting){for(const c of["backlegl","backlegr"])s(c,[-45,0,0]),r(c,[0,0,1]);s("body",[-45,0,0]),r("body",[0,-1,0]);for(const c of["frontlegl","frontlegr"])s(c,[42.15,0,0]),r(c,[0,-4.5,-1]);s("tail1",[45,0,0]),r("tail1",[0,-3,1]),s("tail2",[45,0,0]),r("head",[0,-1.25,0])}if(t.type==="minecraft:wolf"){const c=t.sitting?{body:[0,6,0],leg0:[-2.5,2,2],leg1:[.5,2,2],leg2:[-2.49,7,-4],leg3:[.51,7,-4],tail:[-1,3,6],upperbody:[-1,8,-3]}:{body:[0,10,2],leg0:[-2.5,8,7],leg1:[.5,8,7],leg2:[-2.5,8,-4],leg3:[.5,8,-4],tail:[-1,12,8],upperbody:[-1,10,-3]};for(const[l,h]of Object.entries(c)){const d=e.bones.find(u=>ts(u.name)===l)?.pivot||[0,0,0];r(l,h.map((u,f)=>u-d[f]))}s("body",[t.sitting?45:90,0,0]),s("upperbody",[t.sitting?72:90,0,0]),t.sitting&&(s("leg0",[270,0,0]),s("leg1",[270,0,0]),s("leg2",[333,0,0]),s("leg3",[333,0,0]))}if(t.type==="minecraft:parrot"){s("wing0",[-40,-180,t.sitting?-5:0]),s("wing1",[-40,-180,t.sitting?5:0]);for(const c of["leg0","leg1"])r(c,[0,.5,-.5]),s(c,[t.sitting?73.287:3.287,0,0]);s("tail",[t.sitting?90:60,0,0]),t.sitting&&r("body",[0,-1.9,0])}if(t.type==="minecraft:enderman"&&(r("head",[0,14,0]),r("hat",[0,-14,0]),r("rightarm",[-2,0,0]),r("leftleg",[0,4,0]),r("rightleg",[0,4,0]),t.carriedBlock&&(s("leftarm",[-28.65,0,-2.87]),s("rightarm",[-28.65,0,2.87])),t.angry&&(r("head",[0,5,0]),r("hat",[0,-5,0]))),t.type==="minecraft:panda"&&(t.sitting||t.scared||t.eating)&&(r("body",[0,-12.15,0]),s("body",[-90+(t.scared?16.2:0),0,0]),s("head",[t.eating?90:100,0,0]),s("leg0",[0,0,32.7]),s("leg1",[0,0,-32.7]),s("leg2",[t.eating?-23:0,0,-15]),s("leg3",[t.eating?-23:0,0,15])),t.type==="minecraft:drowned"&&t.swimming&&(r("body",[0,-10,9]),s("body",[90+(t.rotation?.pitch||0),0,0]),s("leftarm",[-180,14.325,8.595]),s("rightarm",[-180,14.325,-8.595]),s("leftleg",[-.3,0,0]),s("rightleg",[.3,0,0])),t.baby){const c=t.type.slice(10);if(["cow","mooshroom","pig","sheep"].includes(c)&&(r("head",[0,4,4]),o("head",2)),c==="chicken"&&o("head",2),(c==="cat"||c==="ocelot")&&o("head",1.5),c==="fox"&&(r("head",[0,4,4]),o("head",1.3)),c==="wolf"&&(r("head",[0,1,-2]),o("head",1.6)),(c==="hoglin"||c==="zoglin")&&(r("head",[0,10,4]),o("head",1.4)),["zombie","husk","drowned","zombie_villager","zombie_villager_v2","piglin","zombie_pigman"].includes(c)&&o("head",1.4),(c==="villager"||c==="villager_v2")&&o("head",1.5),c==="panda"&&(r("body",[0,1.77,0]),o("body",[1.15,1.15,1]),r("head",[0,-.18,.15]),o("head",1.8)),c==="rabbit")for(const l of["head","earleft","earright","nose"])r(l,[0,-1,1]),o(l,1.5);if(c==="llama"){r("body",[0,-5.5,-5]),o("body",[1.2,1,1]),r("head",[0,2,0]),o("head",[1.3,1.2,1.2]);for(const l of["leg0","leg1","leg2","leg3"])r(l,[0,-1,0]),o(l,[.91,.56,.91])}if(["horse","donkey","mule","skeleton_horse","zombie_horse"].includes(c)){const l=1-(t.scale??.5);r("body",[0,11*l,0]),o("head",1+.5*l);for(const h of["legbl","legbr","legfl","legfr"])o(h,[1,1+l,1])}}}const wM=n=>`${Math.floor(n.position.x/16)},${Math.floor(n.position.z/16)}`,zr=n=>n*Math.PI/180,Zo=n=>n.toLowerCase().replace(/[^a-z]/g,""),Bl=(n,e=!1,t)=>`${e?"light:":""}${n}${t?`|${t}`:""}`,Fs=["head","headcontrol","headmain"],PM={head:Fs,chest:["body","torso","chest"],mainhand:["rightitem","rightarmitem","helditem","rightarm","armright","arms"],offhand:["leftitem","leftarmitem","leftarm","armleft"]};class DM{constructor(e,t,i,s){this.catalog=e,this.assets=t,this.changed=i,this.failed=s,this.group.name="saved-world-entities",t.palette.forEach((a,c)=>this.paletteEntries.set(this.blockKey(a),c));const r=document.createElement("canvas"),o=t.atlas.atlas;o&&(r.width=o.width,r.height=o.height,this.itemCanvas=r.getContext("2d",{willReadFrequently:!0})||void 0,this.itemCanvas?.drawImage(t.texture.image,0,0,o.width,o.height)),this.itemMaterial=new vt({map:t.texture,alphaTest:.45,side:Ct}),this.fireMaterial=new gs({map:t.texture,alphaTest:.1,side:Ct})}catalog;assets;changed;failed;group=new Je;regions=new Map;active=new Map;materials=new Map;geometries=new Map;controller=new AbortController;paletteEntries=new Map;itemCanvas;itemMaterial;fireMaterial;lastSignature="";disposed=!1;unsupported=0;batches=[];omitted=0;invisible=0;unknownTypes=[];setRegion(e,t){this.removeRegion(e),this.regions.set(e,t),this.lastSignature=""}removeRegion(e){this.regions.delete(e);for(const[t,i]of this.active)t.startsWith(`${e}|`)&&this.release(t,i);this.lastSignature=""}clear(){for(const[e,t]of this.active)this.release(e,t);this.regions.clear(),this.lastSignature="",this.unsupported=this.omitted=this.invisible=0,this.clearBatches()}sync(e,t){if(this.disposed)return!1;const i=[];this.invisible=0;for(const[l,h]of this.regions)for(const d of h)e.has(wM(d))&&(d.invisible&&(this.invisible++,!Object.keys(d.equipment||{}).length&&!d.parts?.length&&!d.carriedBlock&&!d.fireTicks)||i.push({key:`${l}|${d.id}`,entity:d}));const s=l=>(l.position.x-t.x)**2+(l.position.y-t.y)**2+(l.position.z-t.z)**2;i.sort((l,h)=>s(l.entity)-s(h.entity));const r=i.slice(0,4096);this.omitted=i.length-r.length;const o=new Set(r.map(l=>l.key)),a=[...o].sort().join("|");if(a===this.lastSignature)return!1;for(const[l,h]of this.active)o.has(l)||this.release(l,h);this.unsupported=0;const c=new Set;for(const l of r){if(this.active.has(l.key))continue;const h=this.create(l.entity);h?this.active.set(l.key,h):(this.unsupported++,c.add(l.entity.type))}return this.unknownTypes=[...c],this.lastSignature=a,this.rebuildBatches(),this.trimTextures(),!0}texture(e,t=!1,i){const s=Bl(e,t,i),r=this.materials.get(s);if(r)return r.used=performance.now(),r.material;const o=new bt;o.colorSpace=_t,o.magFilter=It,o.minFilter=Ei;const a={map:o,alphaTest:.05,side:Ct,transparent:!0,opacity:0},c=t?new gs(a):new vt(a),l=i&&!t?new bt:void 0;l&&(l.colorSpace=_t,l.magFilter=It,l.minFilter=Ei),l&&c instanceof vt&&(c.emissive.set(16777215),c.emissiveMap=l);const h={texture:o,emissiveTexture:l,material:c,pending:!0,error:!1,sprites:new Set,refs:0,used:performance.now()};this.materials.set(s,h);const d=(u,f)=>fetch(Mi(u),{signal:this.controller.signal}).then(g=>{if(!g.ok)throw new Error("世界里的生物外观还没有载入，请重试。");return g.blob()}).then(g=>createImageBitmap(g,{imageOrientation:"flipY"})).then(g=>{if(this.disposed||this.materials.get(s)!==h){g.close();return}return f.image=g,f.flipY=!1,f.needsUpdate=!0,g});return Promise.all([d(e,o),...l?[d(i,l)]:[]]).then(([u])=>{if(!u||this.disposed||this.materials.get(s)!==h)return;const f=new OffscreenCanvas(u.width,u.height),g=f.getContext("2d");g?.drawImage(u,0,0);const p=g?.getImageData(0,0,u.width,u.height).data?.some((m,M)=>M%4===3&&m>12&&m<250)||!1;c.opacity=1,c.transparent=p,c.depthWrite=!p,c.needsUpdate=!0,h.pending=!1;for(const m of h.sprites)m.opacity=1,m.needsUpdate=!0;this.changed()}).catch(u=>{this.disposed||this.controller.signal.aborted||this.materials.get(s)!==h||(h.pending=!1,h.error=!0,this.failed(u instanceof Error?u.message:"世界里的生物外观还没有载入，请重试。"),this.changed())}),c}skeleton(e,t,i,s,r){const o=r||t.texture;s.add(Bl(o,t.emissive,t.emissiveTexture));const a={...this.catalog.poses?.[i.type]?.[String(i.pose??0)]||{},...i.boneRotations};return AM(t,this.texture(o,t.emissive,t.emissiveTexture),(l,h,d,u)=>{const f=`${e}:${h}`;let g=this.geometries.get(f);return g||(g=zl(l,t.textureWidth,t.textureHeight,d,u),this.geometries.set(f,g)),g},a,i.hiddenBones)}bone(e,t){for(const i of t){const s=[...e.bones].find(([r])=>Zo(r)===i)?.[1];if(s)return s}}blockKey(e){return`${e.name}:${JSON.stringify(Object.entries(e.states||{}).sort(([t],[i])=>t.localeCompare(i)))}`}itemGeometry(e){const t=this.assets.atlas,i=`${e.name}:${e.damage??0}`;if(e.block){const u=this.blockKey(e.block),f=`block:${u}`,g=this.geometries.get(f);if(g)return g;const y=this.paletteEntries.get(u),p=y===void 0?t.materials[e.block.name]:t.paletteMaterials?.[y]||t.materials[e.block.name];if(!p)return;const m=Qr(e.block,p,t);return m&&this.geometries.set(f,m),m}const r=(t.inventoryItems?.[i]||t.inventoryItems?.[e.name]||t.inventoryItems?.[`${e.name}:0`])?.tile??t.decorativeItems?.[i]??t.decorativeItems?.[e.name];if(r===void 0||!t.atlas)return;const o=this.geometries.get(`item:${r}`);if(o)return o;const a=t.atlas,c=r%a.columns*a.stride+a.padding,l=Math.floor(r/a.columns)*a.stride+a.padding,h=this.itemCanvas?.getImageData(c,l,a.tileSize,a.tileSize).data,d=l_(r,t,h);return d&&this.geometries.set(`item:${r}`,d),d}item(e,t){const i=this.itemGeometry(e);if(!i)return;const s=new we(i,this.itemMaterial);return s.scale.setScalar(t),s.userData.savedItem=e.name,s}armor(e,t,i,s){const r=/^minecraft:(leather|chainmail|iron|golden|diamond|netherite|turtle)_(helmet|chestplate|leggings|boots)$/.exec(i.name);if(!r)return!1;const o=(r[1]==="leather"&&i.color!==void 0?this.catalog.dyedArmorTextures?.[String(i.color)]:void 0)||this.catalog.armorTextures?.[r[1]];if(!o)return!1;const a=o[t==="legs"?1:0];s.add(a);const c=this.texture(a),l=t==="legs"?.25:.5,h=[];t==="head"&&h.push({names:Fs,origin:[-4,24,-4],size:[8,8,8],uv:[0,0],pivot:[0,24,0]}),(t==="chest"||t==="legs")&&h.push({names:["body","torso","chest"],origin:[-4,12,-2],size:[8,12,4],uv:[16,16],pivot:[0,24,0]}),t==="chest"&&(h.push({names:["rightarm","armright"],origin:[-8,12,-2],size:[4,12,4],uv:[40,16],pivot:[-5,22,0]}),h.push({names:["leftarm","armleft"],origin:[4,12,-2],size:[4,12,4],uv:[40,16],pivot:[5,22,0]})),(t==="legs"||t==="feet")&&(h.push({names:["rightleg","legright"],origin:[-4,0,-2],size:[4,12,4],uv:[0,16],pivot:[-2,12,0]}),h.push({names:["leftleg","legleft"],origin:[0,0,-2],size:[4,12,4],uv:[0,16],pivot:[2,12,0]}));let d=!1;for(const u of h){const f=this.bone(e,u.names);if(!f)continue;const g=`armor:${t}:${u.names[0]}`;let y=this.geometries.get(g);y||(y=zl({origin:u.origin,size:u.size,uv:u.uv,inflate:l,mirror:u.names[0].startsWith("left")},64,32),this.geometries.set(g,y));const p=new we(y,c);p.position.set(-(u.origin[0]+u.size[0]/2-u.pivot[0])/16,(u.origin[1]+u.size[1]/2-u.pivot[1])/16,(u.origin[2]+u.size[2]/2-u.pivot[2])/16),f.add(p),d=!0}return d}create(e){const t=new Je,i=new Set,s=[],r=[],o=`${e.type}:${e.variant??0}`,a=e.model||(Object.hasOwn(this.catalog.models,o)?o:e.type),c=this.catalog.models[a];let l,h=0,d=0;if(e.type==="minecraft:item"||e.type==="minecraft:ice_bomb"||e.type==="minecraft:falling_block"){const f=e.item||(e.block?{name:e.block.name,block:e.block}:e.type==="minecraft:ice_bomb"?{name:"minecraft:ice_bomb"}:void 0);if(!f)return;const g=e.type==="minecraft:falling_block",y=this.item(f,g?1:f.block?.25:.5);if(!y)return;if(y.position.y=g?-.5:.12,t.add(y),h=1,!g){const p=(f.count||1)>48?5:(f.count||1)>32?4:(f.count||1)>16?3:(f.count||1)>1?2:1;for(let m=1;m<p;m++){const M=y.clone();M.position.x+=(m*7%5-2)*.04,M.position.y+=m*.018,M.position.z+=m*.035,t.add(M),h++}}}else if(c){const f=c.bones.flatMap(y=>y.cubes||[]),g=f.length===1&&f[0].size[2]===0?f[0]:void 0;if(g){const y=e.texture||c.texture,p=c.emissive||/xp_orb|fireball/.test(e.type),m=`${p?"light:":""}${y}`;i.add(m);const M=this.texture(y,p),v=this.materials.get(m),_=new rs({map:M.map,alphaTest:.05,opacity:v.pending?0:1}),S=zh(g),A=[S.south,S.north].find(x=>x&&x[0]+Math.abs(x[2])<=c.textureWidth)||S.south||S.north;if(A){const[x,E,I,F]=A,O=[x/c.textureWidth,1-(E+F)/c.textureHeight,I/c.textureWidth,F/c.textureHeight];_.onBeforeCompile=G=>{G.vertexShader=G.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
#ifdef USE_MAP
vMapUv = vec2(${O[0]}, ${O[1]}) + vMapUv * vec2(${O[2]}, ${O[3]});
#endif`)},_.customProgramCacheKey=()=>O.join(",")}const R=new Yn(_),D=e.type==="minecraft:xp_orb"?.3:1;R.scale.set(g.size[0]/16*D,g.size[1]/16*D,1),R.position.set(-(g.origin[0]+g.size[0]/2)/16*D,(g.origin[1]+g.size[1]/2)/16*D,0),e.type==="minecraft:xp_orb"&&(R.position.x=0,_.color.setRGB(.5,1,.0134)),t.add(R),v.sprites.add(_),r.push(_),h=1}else if(l=this.skeleton(a,c,e,i,e.texture),RM(l,c,e),e.invisible&&l.group.traverse(y=>{y instanceof we&&(y.visible=!1)}),t.add(l.group),h+=l.cubes,c.billboard){const y=this.texture(e.texture||c.texture,c.emissive,c.emissiveTexture),p=new rs({map:y.map,alphaTest:.05});r.push(p);const m=new Yn(p);m.position.y=c.billboard.height/2,m.scale.set(c.billboard.width,c.billboard.height,1),t.add(m)}}else return;if(t.name=e.id,t.position.set(e.position.x,e.position.y,e.position.z),t.rotation.y=Math.PI-zr(e.bodyYaw??e.rotation?.yaw??0),t.scale.setScalar(e.scale??(e.baby?.5:1)),l&&e.rotation){const f=this.bone(l,Fs);f?(f.rotation.x-=zr(e.rotation.pitch),f.rotation.y-=zr(e.rotation.yaw-(e.bodyYaw??e.rotation.yaw))):/arrow|fireball|trident|skull|bullet|rocket/.test(e.type)&&(t.rotation.x=-zr(e.rotation.pitch))}for(const f of e.parts||[]){const g=this.catalog.models[f.model];if(!g){d++;continue}const y=this.skeleton(f.model,g,e,i,f.texture);f.position&&y.group.position.set(-f.position[0]/16,f.position[1]/16,f.position[2]/16),f.rotation&&y.group.rotation.copy(Gs(f.rotation)),f.scale&&y.group.scale.multiplyScalar(f.scale),((f.bone&&l?this.bone(l,[Zo(f.bone)]):void 0)||l?.group||t).add(y.group),h+=y.cubes}for(const[f,g]of Object.entries(e.equipment||{})){if(e.hiddenEquipment?.includes(f)||e.parts?.some(v=>v.slot===f))continue;if(!l){d++;continue}if((e.type==="minecraft:fox"||e.type==="minecraft:panda")&&f==="mainhand"){const v=this.bone(l,Fs),_=this.item(g,.5);v&&_?(_.position.set(0,e.type==="minecraft:panda"?-.3:-.2,e.type==="minecraft:panda"?-.65:-.45),_.rotation.x=Math.PI/2,v.add(_)):d++;continue}if(!["mainhand","offhand"].includes(f)&&this.armor(l,f,g,i))continue;const y=this.bone(l,PM[f]||[]),p=this.item(g,f==="head"?.65:.7);if(!y||!p){d++;continue}const m=/item/i.test(y.name),M=Zo(y.name)==="arms";p.position.set(0,f==="head"?.25:m?-.15:M?-.1:-.65,M?-.4:f==="head"||m?0:-.12),f!=="head"&&(p.rotation.x=-Math.PI/2,p.rotation.z=-Math.PI/4),y.add(p)}if(e.type==="minecraft:enderman"&&e.carriedBlock){const f=this.item({name:e.carriedBlock.name,block:e.carriedBlock},.5);f?(f.position.set(0,1.15,-.55),t.add(f)):d++}const u={"minecraft:chest_minecart":"minecraft:chest","minecraft:hopper_minecart":"minecraft:hopper","minecraft:tnt_minecart":"minecraft:tnt","minecraft:command_block_minecart":"minecraft:command_block"};if(u[e.type]){const f=this.assets.palette.find(y=>y.name===u[e.type]),g=f&&this.item({name:f.name,block:f},.75);g?(g.position.y=.22,t.add(g)):d++}if(e.type==="minecraft:snow_golem"&&!e.sheared&&l){const f=this.assets.palette.find(p=>/^(minecraft:)?(?:carved_)?pumpkin$/.test(p.name)),g=this.bone(l,Fs),y=f&&this.item({name:f.name,block:f},10/16);g&&y?(y.position.y=-5/16,g.add(y)):d++}if(e.fireTicks&&!/wither_skull|fireball|blaze|magma_cube|ender_crystal|lightning_bolt/.test(e.type)){const f=this.assets.atlas.materials["minecraft:fire"];let g=this.geometries.get("saved-fire");if(!g&&f&&(g=Qr({name:"minecraft:fire"},f,this.assets.atlas),g&&this.geometries.set("saved-fire",g)),g){const y=new Ut().setFromObject(t).getSize(new P).divideScalar(t.scale.x),p=Math.max(.35,Math.min(2,Math.max(y.x,y.z)*1.1)),m=Math.max(.3,Math.min(3.5,y.y));for(let M=0;M<m;M+=p*.45){const v=new we(g,this.fireMaterial);v.position.y=M,v.scale.set(p*(1-M/m*.25),Math.min(p,m-M+p*.25),p*(1-M/m*.25)),t.add(v),h++}}}if(e.name&&e.showName!==!1){const f=e.name.replace(/§[0-9a-fk-or]/gi,"").slice(0,96),g=document.createElement("canvas");g.width=512,g.height=64;const y=g.getContext("2d");y.font=`24px ${this.assets.fontFamily}`,y.textAlign="center",y.textBaseline="middle";const p=Math.min(500,y.measureText(f).width+18);y.fillStyle="#0009",y.fillRect((512-p)/2,8,p,48),y.fillStyle="#fff",y.fillText(f,256,32,490);const m=new nr(g);m.colorSpace=_t;const M=new rs({map:m,depthWrite:!1}),v=new Yn(M),_=new Ut().setFromObject(l?.group||t);v.position.y=Number.isFinite(_.max.y)?(_.max.y-e.position.y)/t.scale.y+.35:2.2,v.scale.set(3.5,.4375,1),t.add(v),s.push(m),r.push(M)}for(const f of i){const g=this.materials.get(f);g&&g.refs++}return{entity:e,group:t,materials:i,ownTextures:s,ownMaterials:r,model:a,cubes:h,unsupportedEquipment:d}}clearBatches(){for(const e of this.batches)e.dispose();this.batches.length=0,this.group.clear()}rebuildBatches(){this.clearBatches();const e=new Map;for(const t of this.active.values())t.group.updateMatrixWorld(!0),t.group.traverseVisible(i=>{if(i instanceof Yn){const o=new Yn(i.material);i.matrixWorld.decompose(o.position,o.quaternion,o.scale),this.group.add(o);return}if(!(i instanceof we)||Array.isArray(i.material))return;const s=`${i.geometry.uuid}:${i.material.uuid}`;let r=e.get(s);r||(r={geometry:i.geometry,material:i.material,matrices:[]},e.set(s,r)),r.matrices.push(i.matrixWorld.clone())});for(const t of e.values()){const i=new Id(t.geometry,t.material,t.matrices.length);t.matrices.forEach((s,r)=>i.setMatrixAt(r,s)),i.instanceMatrix.needsUpdate=!0,i.computeBoundingSphere(),this.batches.push(i),this.group.add(i)}}release(e,t){this.group.remove(t.group),this.active.delete(e);for(const i of t.materials){const s=this.materials.get(i);if(s){s.refs=Math.max(0,s.refs-1);for(const r of t.ownMaterials)r instanceof rs&&s.sprites.delete(r)}}t.ownTextures.forEach(i=>i.dispose()),t.ownMaterials.forEach(i=>i.dispose())}trimTextures(){if(!(this.materials.size<=256)){for(const[e,t]of[...this.materials].filter(([,i])=>!i.refs).sort((i,s)=>i[1].used-s[1].used))if(this.materials.delete(e),t.texture.dispose(),t.emissiveTexture?.dispose(),t.material.dispose(),t.texture.image?.close?.(),t.emissiveTexture?.image?.close?.(),this.materials.size<=256)break}}getDiagnostics(){const e={};let t=0;for(const i of this.active.values())e[i.entity.type]=(e[i.entity.type]||0)+1,t+=i.cubes;return{savedEntities:this.active.size,savedEntityTypes:e,savedEntityCubes:t,savedEntityBatches:this.batches.length,savedEntitySprites:this.group.children.filter(i=>i instanceof Yn).length,savedEntityVisible:this.group.visible,savedEntityTexturePending:[...this.materials.values()].filter(i=>i.pending).length,savedEntityTextureErrors:[...this.materials.values()].filter(i=>i.error).length,unsupportedSavedEntities:this.unsupported,unsupportedSavedEquipment:[...this.active.values()].reduce((i,s)=>i+s.unsupportedEquipment,0),unsupportedSavedEntityTypes:this.unknownTypes,omittedSavedEntities:this.omitted,invisibleSavedEntities:this.invisible,savedEntityEquipmentIssues:[...this.active.values()].filter(i=>i.unsupportedEquipment).slice(0,12).map(i=>({id:i.entity.id,type:i.entity.type,equipment:i.entity.equipment,parts:i.entity.parts,hidden:i.entity.hiddenEquipment})),savedEntitySamples:[...this.active.values()].slice(0,12).map(i=>({id:i.entity.id,type:i.entity.type,position:i.entity.position,rotation:i.entity.rotation,model:i.model,pose:i.entity.pose}))}}dispose(){if(!this.disposed){this.disposed=!0,this.controller.abort(),this.clear();for(const e of this.materials.values())e.texture.dispose(),e.emissiveTexture?.dispose(),e.material.dispose(),e.texture.image?.close?.(),e.emissiveTexture?.image?.close?.();for(const e of this.geometries.values())e.dispose();this.itemMaterial.dispose(),this.fireMaterial.dispose(),this.materials.clear(),this.geometries.clear()}}}const Gl=["#f9fffe","#f9801d","#c74ebd","#3ab3da","#fed83d","#80c71f","#f38baa","#474f52","#9d9d97","#169c9c","#8932b8","#3c44aa","#835432","#5e7c16","#b02e26","#1d1d21"],IM=n=>`${Math.floor(n.x/16)},${Math.floor(n.z/16)}`,Jo=(n,e,t=0)=>Number(n.states?.[e]??t);class LM{constructor(e,t){this.family=e,this.size=Math.min(1536,Math.floor(t/this.cell)*this.cell);const i=document.createElement("canvas");i.width=i.height=this.size,this.context=i.getContext("2d"),this.texture=new nr(i),this.texture.colorSpace=_t,this.texture.magFilter=an,this.texture.minFilter=Fn,this.texture.generateMipmaps=!0}family;texture;cell=32;size;context;glyphs=new Map;changed=!1;missing=0;get count(){return this.glyphs.size}get bytes(){return this.size*this.size*4}font(e){return`${e.italic?"italic ":""}${e.bold?"bold ":""}20px ${this.family}`}advance(e,t){return this.context.font=this.font(t),this.context.measureText(e).width}glyph(e,t){const i=t.obfuscated&&e!==" "?"▒":e,s=`${t.bold?1:0}${t.italic?1:0}:${i}`,r=this.glyphs.get(s);if(r)return r;const o=this.size/this.cell;if(this.glyphs.size>=o*o){this.missing++;return}const a=this.glyphs.size%o*this.cell,c=Math.floor(this.glyphs.size/o)*this.cell;this.context.font=this.font(t),this.context.fillStyle="#ffffff",this.context.textBaseline="alphabetic",this.context.save(),this.context.beginPath(),this.context.rect(a,c,this.cell,this.cell),this.context.clip(),this.context.fillText(i,a+5,c+24),this.context.restore();const l={x:a,y:c,advance:this.context.measureText(e).width};return this.glyphs.set(s,l),this.changed=!0,l}upload(){this.changed&&(this.texture.needsUpdate=!0,this.changed=!1)}dispose(){this.texture.dispose(),this.glyphs.clear(),this.context.canvas.width=this.context.canvas.height=1}}class CM{constructor(e,t=()=>{},i=()=>{}){this.assets=e,this.changed=t,this.failed=i,this.group.name="visual-block-entities",this.glyphs=new LM(e.fontFamily,e.maxTextureSize);const s={map:this.glyphs.texture,vertexColors:!0,transparent:!0,alphaTest:.03,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1};this.normalText=new vt(s),this.glowingText=new gs(s),this.renderPalette=e.palette.map(r=>kn(r,e.atlas)),this.renderPalette.forEach((r,o)=>{if(r.extra?.length)return;const a=this.paletteByName.get(r.name)||[];a.push(o),this.paletteByName.set(r.name,a)})}assets;changed;failed;group=new Je;regions=new Map;active=new Map;glyphs;normalText;glowingText;geometries=new Set;sharedMaterials=new Map;paletteByName=new Map;renderPalette;plantMaterials=new Map;appearances=new Map;images=new Map;imageController=new AbortController;lastSignature="";omitted=0;unsupported=0;disposed=!1;setRegion(e,t){this.removeRegion(e),this.regions.set(e,t),this.lastSignature=""}removeRegion(e){this.regions.delete(e);for(const[t,i]of this.active)t.startsWith(`${e}:`)&&this.release(t,i);this.lastSignature=""}clear(){for(const[e,t]of this.active)this.release(e,t);this.regions.clear(),this.lastSignature="",this.omitted=this.unsupported=0}sync(e,t,i,s,r){if(this.disposed)return!1;const o=[];for(const[d,u]of this.regions)u.forEach((f,g)=>{const y=`${f.x},${f.y},${f.z}`;if(f.type==="sign"?!i.has(y):!s&&!r?.has(y))return;const p=f.type==="sign"?!!(f.front.text.trim()||f.back?.text.trim()):f.type==="flower_pot"?!!f.plant:f.type==="item_frame"?!!f.item:f.type==="banner";e.has(IM(f))&&p&&(f.type==="sign"||!r||r.has(y))&&o.push({region:d,index:g,entity:f})});const a=d=>(d.x-t.x)**2+(d.y-t.y)**2+(d.z-t.z)**2;o.sort((d,u)=>a(d.entity)-a(u.entity));const c=o.slice(0,2048);this.omitted=o.length-c.length;const l=new Set(c.map(d=>`${d.region}:${d.index}`)),h=[...l].sort().join("|");if(h===this.lastSignature)return!1;this.unsupported=0;for(const[d,u]of this.active)l.has(d)||this.release(d,u);for(const d of c){const u=`${d.region}:${d.index}`;if(this.active.has(u))continue;const f=this.create(d.entity);f?(this.active.set(u,f),this.group.add(f.group)):this.unsupported++}return this.glyphs.upload(),this.lastSignature=h,!0}getDiagnostics(){const e={};for(const s of this.active.values()){const r=String(s.group.userData.entityType);e[r]=(e[r]||0)+1}const t=[];for(const{group:s}of this.active.values())if(s.userData.entityType==="sign"&&(t.push({...s.userData.position,hasText:s.children.some(r=>typeof r.userData.text=="string"&&r.userData.text.trim().length>0)}),t.length>=64))break;let i=0;return this.group.traverse(s=>{if(!(s instanceof we))return;const r=s.geometry;for(const o of Object.values(r.attributes))i+=o.array.byteLength;i+=r.index?.array.byteLength||0}),{entities:this.active.size,entityTypes:e,signPositions:t,cachedEntityRegions:this.regions.size,entityGlyphs:this.glyphs.count,entityGeometryBytes:i,entityTextureBytes:this.disposed?0:this.glyphs.bytes+[...this.appearances.values()].reduce((s,r)=>s+r.canvas.width*r.canvas.height*4,0),missingEntityGlyphs:this.glyphs.missing,omittedEntities:this.omitted,unsupportedEntityContents:this.unsupported,pendingEntityTextures:[...this.appearances.values()].filter(s=>s.pending).length,entityTextureErrors:[...this.appearances.values()].filter(s=>s.error).length}}create(e){const t=kn(e.block,this.assets.atlas);if(t!==e.block&&(e={...e,block:t}),e.type==="flower_pot"&&e.plant&&(e={...e,plant:kn(e.plant,this.assets.atlas)}),e.type==="sign")return this.sign(e);if(e.type==="banner")return this.banner(e);if(e.type==="flower_pot")return this.pot(e);if(e.type==="item_frame")return this.frame(e)}banner(e){const t=this.assets.atlas.decorativeBanners,i=e.bannerType===1;if(!t||(i?!t.ominous:e.patterns.some(l=>!t.patterns[l.pattern])))return;const s=i?"banner:ominous":`banner:${e.baseColor}:${JSON.stringify(e.patterns)}`,r=this.appearance(s,20,40,async l=>{if(i){l.getContext("2d").drawImage(await this.image(t.ominous),0,0,20,40);return}const h=await this.image(t.base),d=await Promise.all(e.patterns.map(f=>this.image(t.patterns[f.pattern]))),u=l.getContext("2d");u.clearRect(0,0,l.width,l.height),this.tintedImage(u,h,Gl[15-e.baseColor]),d.forEach((f,g)=>this.tintedImage(u,f,Gl[15-e.patterns[g].color]))}),o=this.entityGroup(e);o.userData.bannerType=e.bannerType||0;const a=e.block.name.includes("wall_banner");o.position.set(e.x+.5,e.y+(a?11/16:1),e.z+.5),o.rotation.y=Zr({name:a?"minecraft:wall_sign":"minecraft:standing_sign",states:{facing_direction:Jo(e.block,"facing_direction",2),ground_sign_direction:Jo(e.block,"ground_sign_direction")}}).angle;const c=[];for(const l of[!1,!0]){const h=new si(.8333333333333334,1.6666666666666667);if(l){const u=h.getAttribute("uv");for(let f=0;f<u.count;f++)u.setX(f,1-u.getX(f))}const d=new we(h,r.material);d.position.z=1/16+(a?-7/16:0)+(l?-1:1)*(1/48+.002),l&&(d.rotation.y=Math.PI),o.add(d),c.push(h)}return{group:o,release:()=>{c.forEach(l=>l.dispose()),this.releaseAppearance(s)}}}tintedImage(e,t,i){const s=document.createElement("canvas");s.width=e.canvas.width,s.height=e.canvas.height;const r=s.getContext("2d");r.imageSmoothingEnabled=!1,r.drawImage(t,0,0,s.width,s.height),r.globalCompositeOperation="multiply",r.fillStyle=i,r.fillRect(0,0,s.width,s.height),r.globalCompositeOperation="destination-in",r.drawImage(t,0,0,s.width,s.height),e.drawImage(s,0,0),s.width=s.height=1}pot(e){if(!e.plant)return;const t=this.plantMaterial(e.plant);if(!t)return;if(e.plant.name==="minecraft:cactus"||e.plant.name==="minecraft:bamboo")return this.pottedStem(e,t);const i=this.entityGroup(e),s=new zt,r=2.6/16,o=13.4/16,a=4/16,c=1,l=[r,a,r,o,a,o,o,c,o,r,c,r,o,a,r,r,a,o,r,c,o,o,c,r];s.setAttribute("position",new Ke(l,3));const h=this.tileUvs(t.side);s.setAttribute("uv",new Ke([...h,...h],2));const d=t.tint||[1,1,1];s.setAttribute("color",new Ke(Array.from({length:8},()=>d).flat(),3)),s.setIndex([0,1,2,0,2,3,4,5,6,4,6,7]),s.computeVertexNormals(),s.computeBoundingSphere();const u=new we(s,this.atlasMaterial());return i.add(u),{group:i,release:()=>s.dispose()}}pottedStem(e,t){const i=e.plant?.name==="minecraft:bamboo",s=this.entityGroup(e),r=[],o=new cn(i?2/16:4/16,i?1:11/16,i?2/16:4/16),a=i?t.modelTextures?.stem??t.side:t.side,c=i?t.modelTextures?.cap??t.top:t.top,l=[];for(let d=0;d<6;d++){const u=d===2||d===3?i?[13,0,15,2]:[6,6,10,10]:i?[6,0,8,16]:[6,0,10,12];l.push(...this.tileUvs(d===2||d===3?c:a,!0,u))}o.setAttribute("uv",new Ke(l,2)),o.setAttribute("color",new Ke(Array(72).fill(1),3));const h=new we(o,this.atlasMaterial());if(h.position.set(.5,i?.5:21/32,.5),s.add(h),r.push(o),i&&t.modelTextures?.pottedLeaves!==void 0){const d=new si(1,1);d.setAttribute("uv",new Ke(this.tileUvs(t.modelTextures.pottedLeaves,!0),2)),d.setAttribute("color",new Ke(Array(12).fill(1),3));const u=new we(d,this.atlasMaterial());u.position.set(.5,10/16,.5),s.add(u),r.push(d)}return{group:s,release:()=>r.forEach(d=>d.dispose())}}plantMaterial(e){e=kn(e,this.assets.atlas);const t=`${e.name}:${JSON.stringify(Object.entries(e.states||{}).sort(([o],[a])=>o.localeCompare(a)))}`;if(this.plantMaterials.has(t))return this.plantMaterials.get(t);let i=-1,s=-1;for(const o of this.paletteByName.get(e.name)||[]){const a=this.renderPalette[o],c=Object.entries(e.states||{}).filter(([h,d])=>a.states?.[h]===d).length;!Object.entries(e.states||{}).some(([h,d])=>a.states?.[h]!==void 0&&a.states[h]!==d)&&c>s&&(i=o,s=c)}const r=i<0?this.assets.atlas.materials[e.name]:this.assets.atlas.paletteMaterials?.[i]||this.assets.atlas.materials[e.name];return this.plantMaterials.size>=512&&this.plantMaterials.clear(),this.plantMaterials.set(t,r),r}frame(e){if(!e.item)return;const t=this.entityGroup(e);switch(t.position.set(e.x+.5,e.y+.5,e.z+.5),Jo(e.block,"facing_direction",2)){case 0:t.rotation.x=Math.PI/2;break;case 1:t.rotation.x=-Math.PI/2;break;case 3:break;case 4:t.rotation.y=-Math.PI/2;break;case 5:t.rotation.y=Math.PI/2;break;default:t.rotation.y=Math.PI}const i=e.item.map,s=i?1:.5,r=new si(s,s);let o,a,c=()=>{};if(i){const h=`map:${i.file}`;a=this.appearance(h,i.width,i.height,async(u,f)=>{const g=u.getContext("2d");g.fillStyle="#d8cfa8",g.fillRect(0,0,u.width,u.height);const y=await fetch(Nn(i.file),{signal:f});if(!y.ok)throw new Error(`地图画下载失败（${y.status}）`);const p=this.assets.atlas.decorativeMapBackground,m=await createImageBitmap(await y.blob());try{const M=p?await this.image(p):void 0;M&&g.drawImage(M,0,0,u.width,u.height),g.drawImage(m,0,0)}finally{m.close()}},!0).material,c=()=>this.releaseAppearance(h)}else{const h=e.item.block,d=`${e.item.name}:${e.item.damage}`,u=h?`${d}|${h.name}|${JSON.stringify(Object.fromEntries(Object.entries(h.states||{}).sort(([y],[p])=>y<p?-1:y>p?1:0)))}`:void 0,f=this.assets.atlas.decorativeItems;o=u&&f?.[u]!==void 0?u:f?.[d]!==void 0?d:e.item.name;const g=f?.[o];if(g===void 0){r.dispose();return}r.setAttribute("uv",new Ke(this.tileUvs(g,!0),2)),a=this.atlasMaterial(),r.setAttribute("color",new Ke(Array(12).fill(1),3))}const l=new we(r,a);return l.position.z=-7/16+.002,l.rotation.z=-e.rotation*Math.PI/180,l.renderOrder=2,l.userData.framedItem=e.item.name,o&&(l.userData.itemTextureKey=o),i&&(l.userData.mapFile=i.file),t.add(l),{group:t,release:()=>{r.dispose(),c()}}}entityGroup(e){const t=new Je;return t.position.set(e.x,e.y,e.z),t.userData.entityType=e.type,t.userData.position={x:e.x,y:e.y,z:e.z},t}tileUvs(e,t=!1,i=[0,0,16,16]){const s=this.assets.atlas.atlas,r=e%s.columns*s.stride+s.padding,o=Math.floor(e/s.columns)*s.stride+s.padding,[a,c,l,h]=i.map(y=>y/16*s.tileSize),d=(r+a)/s.width,u=(r+l)/s.width,f=1-(o+h)/s.height,g=1-(o+c)/s.height;return t?[d,g,u,g,d,f,u,f]:[d,f,u,f,u,g,d,g]}atlasMaterial(){let e=this.sharedMaterials.get("atlas");return e||(e=new vt({map:this.assets.texture,vertexColors:!0,alphaTest:.45,alphaToCoverage:!0,side:Ct}),oi(e,this.assets.texture,this.assets.maxFootprint),this.sharedMaterials.set("atlas",e)),e}image(e){let t=this.images.get(e);return t||(t=fetch(Mi(e),{signal:this.imageController.signal}).then(i=>{if(!i.ok)throw new Error(`地图装饰贴图下载失败（${i.status}）`);return i.blob()}).then(i=>createImageBitmap(i)).catch(i=>{throw this.images.delete(e),i}),this.images.set(e,t)),t}appearance(e,t,i,s,r=!1){let o=this.appearances.get(e);if(o)return o.refs++,o;const a=document.createElement("canvas");a.width=t,a.height=i;const c=new nr(a);c.colorSpace=_t,c.magFilter=It,c.minFilter=Ei;const l={map:c,alphaTest:.02,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1},h=r?new gs(l):new vt(l);o={canvas:a,texture:c,material:h,refs:1,controller:new AbortController,pending:!0,error:!1},this.appearances.set(e,o);const d=o;return s(a,d.controller.signal).then(()=>{this.disposed||this.appearances.get(e)!==d||(d.pending=!1,c.needsUpdate=!0,this.changed())}).catch(u=>{this.disposed||this.appearances.get(e)!==d||d.controller.signal.aborted||(d.pending=!1,d.error=!0,this.failed(u instanceof Error?u.message:"地图装饰贴图加载失败"),this.changed())}),o}releaseAppearance(e){const t=this.appearances.get(e);!t||--t.refs>0||(t.controller.abort(),t.texture.dispose(),t.material.dispose(),t.canvas.width=t.canvas.height=1,this.appearances.delete(e))}sign(e){const t=Zr(e.block),i=new Je;i.position.set(e.x+t.center[0],e.y+t.center[1],e.z+t.center[2]),i.rotation.y=t.angle,i.userData.entityType="sign",i.userData.position={x:e.x,y:e.y,z:e.z};const s=[];for(const[r,o]of[[e.front,!1],[e.back,!0]]){if(!r?.text.trim())continue;const a=this.textGeometry(r);if(!a)continue;const c=new we(a,r.glowing?this.glowingText:this.normalText);c.position.z=(o?-1:1)*(1/24+.002),o&&(c.rotation.y=Math.PI),c.renderOrder=3,c.userData.signSide=o?"back":"front",c.userData.text=r.text,i.add(c),s.push(a),this.geometries.add(a)}if(s.length)return{group:i,release:()=>{for(const r of s)r.dispose(),this.geometries.delete(r)}}}textGeometry(e){const t=[],i=[],s=[],r=[],o=.003928571428571429;if($h(e.text,`#${(e.color&16777215).toString(16).padStart(6,"0")}`).forEach((c,l)=>{const h=c.flatMap(y=>Array.from(y.text).map(p=>({character:p,run:y,advance:this.glyphs.advance(p,y)}))),d=h.reduce((y,p)=>y+p.advance,0),u=Math.min(o,.9/Math.max(1,d));let f=-d*u/2;const g=.165-l*.11-.03;for(const{character:y,run:p,advance:m}of h){const M=this.glyphs.glyph(y,p);if(M&&y!==" "){const v=f-5*u,_=v+this.glyphs.cell*u,S=g-8*o,A=S+this.glyphs.cell*o,R=t.length/3;t.push(v,S,0,_,S,0,_,A,0,v,A,0);const D=M.x/this.glyphs.size,x=(M.x+this.glyphs.cell)/this.glyphs.size,E=1-(M.y+this.glyphs.cell)/this.glyphs.size,I=1-M.y/this.glyphs.size;i.push(D,E,x,E,x,I,D,I);const F=new He(p.color);for(let O=0;O<4;O++)s.push(F.r,F.g,F.b);r.push(R,R+1,R+2,R,R+2,R+3)}f+=m*u}}),!t.length)return;const a=new zt;return a.setAttribute("position",new Ke(t,3)),a.setAttribute("uv",new Ke(i,2)),a.setAttribute("color",new Ke(s,3)),a.setIndex(r),a.computeVertexNormals(),a.computeBoundingSphere(),a}release(e,t){this.group.remove(t.group),t.release(),this.active.delete(e)}dispose(){if(!this.disposed){this.disposed=!0,this.clear(),this.imageController.abort();for(const e of this.images.values())e.then(t=>t.close()).catch(()=>{});this.images.clear(),this.plantMaterials.clear(),this.paletteByName.clear(),this.glyphs.dispose(),this.normalText.dispose(),this.glowingText.dispose();for(const e of this.sharedMaterials.values())e.dispose();this.sharedMaterials.clear()}}}function UM(n,e=0){const t=s=>["wooden_pickaxe","stone_pickaxe","iron_pickaxe","diamond_pickaxe"][Math.min(3,Math.max(s,Math.floor(e)))],i=n.replace("minecraft:","");return/^(?:tallgrass|double_plant|deadbush|sapling|red_flower|yellow_flower|wheat|carrots|potatoes|beetroot|reeds|nether_wart|kelp|seagrass)$/.test(i)?"hand":/obsidian|ancient_debris|netherite_block/.test(i)?t(3):/diamond|emerald|gold_ore|gold_block|raw_gold_block|redstone|lapis/.test(i)?t(/lapis/.test(i)?1:2):/iron_ore|iron_block|raw_iron_block|copper_ore|copper_block|raw_copper_block/.test(i)?t(1):/(?:^|_)(?:granite|diorite|andesite|deepslate|tuff|calcite|purpur|amethyst|dripstone)(?:_|$)/.test(i)||/^(?:coal_block|bone_block|(?:stained_)?hardened_clay)$/.test(i)?t(0):i==="concrete_powder"?"stone_shovel":/stone|ore|brick|furnace|rail|anvil|terracotta|concrete|prismarine|quartz|basalt|blackstone|iron_door|iron_trapdoor|iron_bars/.test(i)?t(0):/leaves|vine|wool|web/.test(i)?"shears":/dirt|grass|sand|gravel|clay|snow|soul_soil|mycelium|podzol/.test(i)?"stone_shovel":/log|wood|plank|chest|barrel|crafting|bookshelf|fence|door|sign|pumpkin/.test(i)?"stone_axe":"hand"}function Vl(n){return/diamond/.test(n)?7460051:/emerald|leaves|vine|grass|reeds|sugar_cane|wheat|carrot|potato|beetroot|bamboo/.test(n)?7706195:/redstone|netherrack/.test(n)?11296849:/gold/.test(n)?13874013:/iron/.test(n)?12297618:/coal/.test(n)?4671815:/lapis|water/.test(n)?5798558:/dirt|log|wood|plank|chest|barrel/.test(n)?10583891:/sand/.test(n)?14207382:/snow|quartz|wool/.test(n)?14934227:10066321}function NM(n,e){const t=e&&typeof e.name=="string"?e.states:e,i=n.replace("minecraft:","");if(/glass|(?:^|_)ice$|spawner|bedrock|barrier|portal|(?:^|_)fire$|(?:^|_)water$|(?:^|_)lava$/.test(i)||/^(?:tallgrass|tall_grass|short_grass|fern|large_fern|double_plant|seagrass|tall_seagrass)$/.test(i))return null;if(/^(?:deadbush|dead_bush)$/.test(i))return"minecraft:stick";if(/^carrots?$/.test(i))return"minecraft:carrot";if(/^potatoes$|^potato$/.test(i))return"minecraft:potato";if(/^(?:wheat|wheat_crop|beetroot|beetroots)$/.test(i)){const s=i.startsWith("wheat")?"wheat":"beetroot",r=t?.growth;return typeof r=="number"?`minecraft:${s}${r>=7?"":"_seeds"}`:null}return/^(?:reeds|sugar_cane)$/.test(i)?"minecraft:sugar_cane":/^(?:melon|melon_block)$/.test(i)?"minecraft:melon_slice":/^(?:attached_)?(?:melon|pumpkin)_stem$/.test(i)?`minecraft:${i.includes("melon")?"melon":"pumpkin"}_seeds`:/diamond_ore/.test(i)?"minecraft:diamond":/emerald_ore/.test(i)?"minecraft:emerald":/coal_ore/.test(i)?"minecraft:coal":/redstone_ore/.test(i)?"minecraft:redstone":/lapis_ore/.test(i)?"minecraft:lapis_lazuli":i==="stone"&&(!t?.stone_type||t.stone_type==="stone")?"minecraft:cobblestone":/^(?:grass|grass_block|grass_path|dirt_path|farmland|mycelium|podzol)$/.test(i)?"minecraft:dirt":i==="snow_layer"?"minecraft:snowball":i==="lit_furnace"?"minecraft:furnace":i==="lit_redstone_lamp"?"minecraft:redstone_lamp":n}function FM(n,e,t){if(!Number.isFinite(n)||!Number.isFinite(e))return Number.isFinite(e)?e:0;const i=Math.atan2(Math.sin(e-n),Math.cos(e-n)),s=Number.isFinite(t)?Math.max(0,Math.min(.1,t)):0,r=Math.min(Math.abs(i)*(1-Math.exp(-12*s)),s*6);return n+Math.sign(i)*r}const kM=(n,e)=>e?`${n}:0|${n}|${JSON.stringify(Object.fromEntries(Object.entries(e).sort(([t],[i])=>t<i?-1:t>i?1:0)))}`:n,OM=()=>new cn(1,1,1),ns=n=>JSON.stringify([n.name,Object.entries(n.states||{}).sort(([e],[t])=>e.localeCompare(t)),n.extra||[]]);class zM{group=new Je;box=OM();plane=new si(1,1);materials=new Map;itemGeometries=new Map;itemMaterials=new Map;blockMaterials=new Map;accepted=new Map;effects=[];actions=new Map;actionLabels=new Map;miningPreviews=new Map;recentActions=[];held=new Map;actorHands=new Map;miningTiers=new Map;headClocks=new WeakMap;texture;atlas;maxFootprint=0;clock=0;sourceTime=NaN;sourceSpeed=1;playing=!1;emitted=0;disposed=!1;constructor(){this.group.name="memory-interactions"}configure(e,t,i=[],s=0){this.texture=e,this.atlas=t,this.maxFootprint=s,this.blockMaterials.clear(),i.forEach((r,o)=>{const a=t.paletteMaterials?.[o];a&&(this.blockMaterials.set(ns(r),a),this.blockMaterials.set(ns(kn(r,t)),a))})}setReplayClock(e,t){this.sourceTime=e,this.sourceSpeed=t}synchronizeActor(e){const t=this.actions.get(e.player);if(!t)return;const i=e.actionTarget;t.current=e.actionTime===t.time&&!!i&&i.x===t.target.x&&i.y===t.target.y&&i.z===t.target.z&&(t.kind!=="mine_prepare"||this.sourceTime<t.time),!t.current&&(e.actionTime!==void 0||this.sourceTime>t.time+2.5)&&(this.actions.delete(e.player),this.clearMiningPreview(e.player))}setPlaying(e){this.playing=e}get time(){return this.clock}material(e){let t=this.materials.get(e);return t||(t=new vt({color:e}),this.materials.set(e,t)),t}cube(e,t){const i=new we(this.box,this.material(e));return i.scale.setScalar(t),i}item(e,t,i){const s=kM(e,i),r=this.atlas,o=r?.inventoryItems?.[s]||r?.inventoryItems?.[`${e}:0`]||r?.inventoryItems?.[e];if(!o||!this.texture||!r?.atlas)return this.cube(Vl(e),t*.7);let a=this.itemGeometries.get(s),c=this.itemMaterials.get(s);if(!a){const h=r.atlas,d=o.tile%h.columns*h.stride+h.padding,u=Math.floor(o.tile/h.columns)*h.stride+h.padding,f=(d+.15)/h.width,g=(d+h.tileSize-.15)/h.width,y=1-(u+h.tileSize-.15)/h.height,p=1-(u+.15)/h.height;a=this.plane.clone(),a.setAttribute("uv",new Ke([f,p,g,p,f,y,g,y],2)),this.itemGeometries.set(s,a),c=new vt({map:this.texture,alphaTest:.45,side:Ct}),oi(c,this.texture,this.maxFootprint),this.itemMaterials.set(s,c)}const l=new we(a,c);return l.scale.setScalar(t),l}blockItem(e,t,i){if(!e||!this.atlas||!this.texture)return this.item(t,i,e?.states);const s=this.blockMaterials.get(ns(e));if(!s)return this.item(t,i,e.states);const r=`block:${ns(e)}`;let o=this.itemGeometries.get(r),a=this.itemMaterials.get("block-atlas");if(!o&&this.itemGeometries.size<512&&(o=Qr(e,s,this.atlas),o&&(o.translate(0,-.5,0),this.itemGeometries.set(r,o))),!o)return this.item(t,i,e.states);a||(a=new vt({map:this.texture,alphaTest:.45,side:Ct}),oi(a,this.texture,this.maxFootprint),this.itemMaterials.set("block-atlas",a));const c=new we(o,a);return c.scale.setScalar(i),c}chip(e,t,i){const s=e&&this.blockMaterials.get(ns(e)),r=this.atlas;if(!s||!r?.atlas||!this.texture)return this.cube(t,i);const o=`chip:${s.side}`;let a=this.itemGeometries.get(o),c=this.itemMaterials.get("block-atlas");if(!a&&this.itemGeometries.size<512){const h=r.atlas,d=s.side%h.columns*h.stride+h.padding,u=Math.floor(s.side/h.columns)*h.stride+h.padding;a=this.box.clone();const f=a.getAttribute("uv");for(let g=0;g<f.count;g++)f.setXY(g,(d+3+f.getX(g)*7)/h.width,1-(u+3+(1-f.getY(g))*7)/h.height);this.itemGeometries.set(o,a)}if(!a)return this.cube(t,i);c||(c=new vt({map:this.texture,alphaTest:.45}),oi(c,this.texture,this.maxFootprint),this.itemMaterials.set("block-atlas",c));const l=new we(a,c);return l.scale.setScalar(i),l}effect(e,t,i){for(;this.effects.length>=160;){const s=this.effects.shift();this.group.remove(s.object)}this.group.add(e),this.effects.push({object:e,duration:t,age:0,update:i}),i(0,0)}clearMiningPreview(e){const t=this.miningPreviews.get(e);if(!t)return;t.removeFromParent(),this.miningPreviews.delete(e);const i=this.effects.findIndex(s=>s.object===t);i>=0&&this.effects.splice(i,1)}show(e){if(this.disposed||e.kind==="fluid_change"||!/^(?:mine_prepare|break|support_removed|crop_grow|place|interact|container_(?:put|take|open|close)|item_use|teleport|death|join|leaf_decay|plant_decay|crop_growth|stack_growth|soil_preparation|soil_reversion|fire_spread|fire_extinguish)$/.test(e.kind))return;const t=e.blockState||(e.blockStates?{name:e.block,states:e.blockStates}:void 0);if(t){const u=kn(t,this.atlas||{});e={...e,block:u.name,blockState:u,blockStates:u.states}}const i=this.accepted.get(e.player);e.player&&i&&(e.time<i.time||e.time===i.time&&(e.order??0)<i.order)&&(e={...e,player:""});const s=this.actions.get(e.player);if(s&&s.time===e.time&&s.age<.18&&s.kind===e.kind&&Math.hypot(s.target.x-e.target.x,s.target.y-e.target.y,s.target.z-e.target.z)<.1)return;const{dropGround:r,...o}=e;if(this.recentActions.push(o),this.recentActions.length>24&&this.recentActions.shift(),this.clearMiningPreview(e.player),/^(break|support_removed)$/.test(e.kind))for(const[u,f]of this.actions)f.kind==="mine_prepare"&&f.target.x===e.target.x&&f.target.y===e.target.y&&f.target.z===e.target.z&&(this.clearMiningPreview(u),this.actions.delete(u));const a=e.kind==="mine_prepare"?.85:e.kind==="break"?.45:1.1,c={...o,age:0,duration:a,tool:/^(break|mine_prepare)$/.test(e.kind)?UM(e.block,this.miningTiers.get(e.player)):"hand"};if(e.player&&c.tool.endsWith("_pickaxe")&&(this.miningTiers.delete(e.player),this.miningTiers.set(e.player,["wooden_pickaxe","stone_pickaxe","iron_pickaxe","diamond_pickaxe"].indexOf(c.tool)),this.miningTiers.size>256&&this.miningTiers.delete(this.miningTiers.keys().next().value)),e.player){if(e.kind!=="mine_prepare")for(this.accepted.delete(e.player),this.accepted.set(e.player,{time:e.time,order:e.order??0});this.accepted.size>256;)this.accepted.delete(this.accepted.keys().next().value);for(this.actions.set(e.player,c);this.actions.size>64;){const g=this.actions.keys().next().value;this.clearMiningPreview(g),this.actions.delete(g)}const u=this.actionLabels.get(e.player),f=e.recorded!==!1&&e.kind!=="mine_prepare";if(f||!u?.recorded||u.until<=this.clock)for(this.actionLabels.set(e.player,{kind:e.kind==="mine_prepare"?"break":e.kind,until:this.clock+Math.max(.6,a),recorded:f});this.actionLabels.size>64;)this.actionLabels.delete(this.actionLabels.keys().next().value)}this.emitted++;const l=new P(e.target.x+.5,e.target.y+.5,e.target.z+.5),h=new P(e.origin.x,e.origin.y+1.05,e.origin.z),d=Vl(e.block);if(e.kind==="mine_prepare"){if(!e.player||/sapling|flower|tallgrass|wheat|carrot|potato|beet|reeds|sugar_cane|bamboo|stem|torch|rail|wire|ladder|vine|fence|sign|door|bed$|button|lever|pressure_plate|chest|barrel|hopper|anvil|stairs|slab/.test(e.block))return;const u=new Je;u.name="memory-mining-cracks",u.position.copy(l);const f=[];for(const[g,y,p,m,M]of[[0,0,.503,0,0],[0,0,-.503,0,Math.PI],[.503,0,0,0,Math.PI/2],[-.503,0,0,0,-Math.PI/2],[0,.503,0,-Math.PI/2,0],[0,-.503,0,Math.PI/2,0]]){const v=new Je;v.position.set(g,y,p),v.rotation.set(m,M,0),u.add(v);for(const[_,S,A,R]of[[-.18,.16,.01,-.03],[.01,-.03,.17,.07]]){const D=new we(this.box,this.material(3750967)),x=Math.hypot(A-_,R-S);D.position.set((_+A)/2,(S+R)/2,0),D.rotation.z=Math.atan2(R-S,A-_),D.scale.set(x,.012,.003),v.add(D),f.push({mesh:D,length:x})}}this.miningPreviews.set(e.player,u),this.effect(u,a,g=>{for(const{mesh:y,length:p}of f)y.scale.x=p*(.35+g*.65)})}else if(e.kind==="break"||e.kind==="support_removed"){for(let f=0;f<(e.kind==="support_removed"?4:10);f++){const g=this.chip(e.blockState,/ore/.test(e.block)&&f%3?9606283:d,.08+f%3*.018),y=f*2.39996,p=.25+f%4*.085,m=l.clone().add(new P(Math.sin(y)*.28,f%3*.1,Math.cos(y)*.28));this.effect(g,.68+f%3*.08,(M,v)=>{g.position.copy(m).add(new P(Math.sin(y)*p*M,v*(1.6+f%3*.3)-3*v*v,Math.cos(y)*p*M)),g.rotation.set(M*3,y+M*4,M),g.scale.setScalar((.08+f%3*.018)*Math.min(1,(1-M)*4))})}const u=NM(e.block,e.blockState);if(u){const f=this.blockItem(u===e.block&&!/:(?:wheat|beetroot|carrots|potatoes|reeds|nether_wart)$/.test(e.block)?e.blockState:void 0,u,.32);f.name="memory-drop",f.userData.memoryDrop={block:u,target:e.target,floor:e.dropFloor,time:e.time};let g,y=l.y,p=1.1,m=0;this.effect(f,1.6,(M,v)=>{const _=Math.max(0,(M-.78)/.22),S=e.dropGround?e.dropGround():e.dropFloor;f.userData.memoryDrop.floor=S;const A=S===void 0?-1/0:Math.min(l.y,S+.16),R=Math.max(0,v-m);m=v,y+=p*R-4.8*R*R,p-=9.6*R;const D=y<=A;D&&(y=A,p=0),f.position.set(l.x+.12,y,l.z+.12),D&&(f.position.y+=.025*Math.abs(Math.sin(v*4)));const x=e.player?this.actorHands.get(e.player):void 0;!g&&v>=.65&&x&&f.position.distanceTo(x)<=2.2&&(g={from:f.position.clone(),hand:x.clone(),age:v});let E=1-_;if(g){x&&x.distanceTo(g.hand)<1&&g.hand.copy(x);const I=Math.min(1,(v-g.age)/.38);f.position.copy(g.from).lerp(g.hand,I*I*(3-2*I)),E=Math.min(E,1-I)}f.rotation.y=v*2.4,f.scale.setScalar(.32*E)})}}else if(e.kind==="place"){if(e.player){const u=this.blockItem(e.blockState,e.block,.32);this.effect(u,.42,f=>{u.position.copy(h).lerp(l,f),u.position.y+=Math.sin(f*Math.PI)*.25,u.rotation.y=f,u.scale.setScalar(.32*(1-f*.6))})}this.cornerCue(l,d,1.1)}else if(/interact|container_|item_use/.test(e.kind)){const u=/furnace|smoker/.test(e.block),f=e.kind==="container_take";if(this.cornerCue(l,u?14788703:13810308,1.1),e.player&&/container_(?:put|take)/.test(e.kind))for(let g=0;g<3;g++){const y=this.cube(14670530,.12);this.effect(y,.95+g*.12,p=>{const m=Math.max(0,Math.min(1,(p-g*.06)/.82));y.position.copy(f?l:h).lerp(f?h:l,m),y.position.y+=Math.sin(m*Math.PI)*.38+.15,y.rotation.y=m*Math.PI,y.scale.setScalar(.18*Math.min(1,m*8+.2,(1-m)*8+.2))})}if(u&&/lit_furnace|lit_smoker|lit_blast_furnace/.test(e.block))for(let g=0;g<4;g++){const y=this.cube(g%2?14134116:11448483,.055);this.effect(y,1+g*.1,p=>{y.position.copy(l).add(new P(Math.sin(g*2)*.18,.6+p*.65,Math.cos(g*2)*.18)),y.scale.setScalar(.055*(1-p))})}if(e.block==="minecraft:ender_chest"&&e.kind!=="container_close")for(let g=0;g<5;g++){const y=this.cube(g%2?10768832:13470428,.035);this.effect(y,1.2+g*.1,p=>{y.position.copy(l).add(new P(Math.sin(g*2.4+p)*(.4+p*.2),.25+p*.65,Math.cos(g*2.4+p)*(.4+p*.2))),y.scale.setScalar(.035*(1-p))})}}else if(/leaf_decay|plant_decay|crop_grow|crop_growth|stack_growth|soil_preparation|soil_reversion|fire_spread|fire_extinguish/.test(e.kind)){const u=/leaf_decay|plant_decay/.test(e.kind),f=e.kind==="fire_spread",g=/crop_grow|crop_growth|stack_growth/.test(e.kind),y=/soil_preparation|soil_reversion/.test(e.kind);for(let p=0;p<(g?2:6);p++){const m=this.chip(e.blockState,y?8938050:u||g?7706195:f&&p%2?15642977:9606284,g?.035:u?.07:.09);this.effect(m,1.2+p*.08,(M,v)=>{m.position.copy(l).add(new P(Math.sin(p*2.4+v)*(.18+M*.22),y?-.2+M*.2:u?.2-M*.85:M*(g?.25:.9),Math.cos(p*2.4+v)*.24)),m.rotation.set(v,v*.8,p),m.scale.setScalar((g?.035:u?.07:.09)*(1-M))})}}else/teleport|death|join/.test(e.kind)&&this.cornerCue(h.clone().add(new P(0,-.7,0)),12173262,1)}cornerCue(e,t,i){for(let s=0;s<4;s++){const r=this.cube(t,.06),o=s&1?.49:-.49,a=s&2?.49:-.49;this.effect(r,i,c=>{r.position.copy(e).add(new P(o,.48+c*.14,a)),r.scale.set(.065,.13*(1-c),.065)})}}tool(e){const t=new Je;if(t.name=`held-${e}`,e==="hand")return t;const i=(r,o,a)=>{const c=this.cube(a,.078);c.position.set(r*.07,o*.07,0),c.scale.z=.055,t.add(c)};for(let r=0;r<7;r++)i(r-3,r-3,r%2?9528891:6834215);const s=e.startsWith("diamond")?6803654:e.startsWith("iron")?13882309:e.startsWith("wooden")?11831890:9606795;if(e.includes("pickaxe"))for(const[r,o]of[[-1,5],[0,5],[1,5],[2,5],[3,4],[4,3],[5,2],[5,1],[5,0]])i(r,o,s);else if(e.includes("shovel"))for(const[r,o]of[[2,4],[3,4],[4,4],[3,5],[4,5],[4,3]])i(r,o,s);else if(e==="shears")for(const[r,o]of[[-2,3],[-1,4],[0,5],[3,2],[4,1],[5,0]])i(r,o,13882309);else for(const[r,o]of[[0,4],[1,5],[2,5],[3,5],[0,3],[1,3],[2,4]])i(r,o,s);return t.position.set(0,-.52,.05),t.rotation.set(.1,Math.PI/4,-2.1),t}animateAvatar(e,t,i,s=!1,r=!1){if(this.disposed)return;let o=this.actorHands.get(e);o||(o=new P,this.actorHands.set(e,o)),o.copy(t.position),o.y+=1.05;const a=this.actions.get(e),c=this.clock*9,l=i||r?Math.sin(c*(r?.45:1))*(s?.65:r?.28:.5):0,h=a?Math.hypot(a.target.x+.5-t.position.x,a.target.y+.5-t.position.y-1.3,a.target.z+.5-t.position.z):1/0,d=!!a&&(a.current||a.age<a.duration)&&!(i&&h>3.3),u=t.getObjectByName("arm1"),f=t.getObjectByName("arm-1"),g=t.getObjectByName("leg-1"),y=t.getObjectByName("leg1");if(!u||!f||!g||!y)return;const p=d&&/^(break|mine_prepare)$/.test(a.kind),m=d?Math.atan2(a.target.y+.5-t.position.y-1.3,Math.max(.6,Math.hypot(a.target.x+.5-t.position.x,a.target.z+.5-t.position.z))):0;f.rotation.x=s?-2+l:r?-.8+l:l,u.rotation.x=d?-1.2-m+Math.sin(Math.min(a.age,a.duration)*(p?17:9))*(p?.65:.16):s?-2-l:r?-.8-l:-l,f.rotation.z=r?-.55:0,u.rotation.z=r?.55:0,g.rotation.x=-l,y.rotation.x=l;const M=d?p?a.tool:a.kind==="place"?`block:${a.blockState?ns(a.blockState):a.block}`:"hand":"hand",v=this.held.get(e);if(v?.key!==M){v&&v.object.removeFromParent();const S=M.startsWith("block:")?new Je:this.tool(M);if(M.startsWith("block:")){const A=this.blockItem(a.blockState,a.block,.29);S.position.set(0,-.48,.05),S.add(A)}u.add(S),this.held.set(e,{key:M,object:S})}const _=t.getObjectByName("head");if(_){const S=this.headClocks.get(_),A=d?-m*.6:0;_.rotation.x=S===void 0||this.clock<S?A:FM(_.rotation.x,A,this.clock-S),this.headClocks.set(_,this.clock)}}forgetPlayer(e){this.held.get(e)?.object.removeFromParent(),this.held.delete(e),this.actorHands.delete(e)}targetFor(e){return this.actions.get(e)?.target}actionKindFor(e){return this.actionLabels.get(e)?.kind}update(e){if(this.disposed||!this.playing)return!1;this.clock+=e;const t=this.effects.length>0||this.actions.size>0;for(const[i,s]of this.actionLabels)s.until<=this.clock&&this.actionLabels.delete(i);for(const[i,s]of this.actions)s.age+=e,s.age>s.duration&&!s.current&&(this.actions.delete(i),this.clearMiningPreview(i));for(let i=this.effects.length-1;i>=0;i--){const s=this.effects[i];s.age+=e,s.age>=s.duration?(this.group.remove(s.object),this.effects.splice(i,1)):s.update(s.age/s.duration,s.age)}return t}reset(){this.group.clear(),this.effects.length=0,this.actions.clear(),this.accepted.clear(),this.actionLabels.clear(),this.miningPreviews.clear(),this.miningTiers.clear(),this.recentActions.length=0;for(const e of this.held.keys())this.forgetPlayer(e);this.actorHands.clear(),this.headClocks=new WeakMap,this.clock=0}diagnostics(){const e=({player:i,kind:s,block:r,blockState:o,blockStates:a,target:c,time:l})=>({player:i,kind:s,block:r,blockState:o,blockStates:o?.states||a,target:c,time:l});return{drops:this.effects.filter(i=>i.object.name==="memory-drop").map(({object:i,age:s})=>({...i.userData.memoryDrop,age:s,x:i.position.x,y:i.position.y,z:i.position.z,scale:i.scale.x})),effects:this.effects.length,actions:this.actions.size,heldPlayers:this.held.size,rememberedTools:this.miningTiers.size,cachedItems:this.itemGeometries.size,cachedMaterials:this.materials.size+this.itemMaterials.size,emitted:this.emitted,presentationTime:this.clock,sourceTime:this.sourceTime,sourceSpeed:this.sourceSpeed,kinds:[...this.actions.values()].map(i=>i.kind),recent:this.recentActions.map(e),active:[...this.actions.values()].map(i=>({...e(i),age:i.age})),tools:[...this.held].filter(([,i])=>i.key!=="hand").map(([i,s])=>({player:i,tool:s.key}))}}dispose(){if(!this.disposed){this.disposed=!0,this.playing=!1,this.reset(),this.group.removeFromParent(),this.box.dispose(),this.plane.dispose();for(const e of this.itemGeometries.values())e.dispose();for(const e of[...this.materials.values(),...this.itemMaterials.values()])e.dispose();this.itemGeometries.clear(),this.materials.clear(),this.itemMaterials.clear(),this.blockMaterials.clear(),this.accepted.clear(),this.texture=void 0,this.atlas=void 0}}}const Ht=n=>`${Math.floor(n.x)},${Math.floor(n.y)},${Math.floor(n.z)}`,BM=n=>({time:n.time,order:n.order??0}),Br=(n,e)=>n.time<e.time||n.time===e.time&&n.order<e.order,ks=n=>n.replace(/^minecraft:/,""),is=n=>JSON.stringify([n.kind,n.block.name,Object.entries(n.block.states||{}).sort(([e],[t])=>e.localeCompare(t))]);function GM(n){if(n=ks(n),/^(?:trapped_|ender_)?chest$/.test(n))return"chest";if(n==="barrel")return"barrel";if(/^(?:[a-z_]+_)?shulker_box$/.test(n))return"shulker"}function Cs(n){if(!n.pair)return Ht(n.position);const e=n.position,t=n.pair;return Ht(e.x<t.x||e.x===t.x&&(e.y<t.y||e.y===t.y&&e.z<=t.z)?e:t)}class VM{group=new Je;chunks=new Map;instances=new Map;sessions=new Map;addresses=new Map;accepted=new Map;playerAccepted=new Map;changedChunks=new Set;texture;atlas;material;clock=0;sourceTime=NaN;sourceSpeed=1;playing=!1;disposed=!1;constructor(){this.group.name="memory-container-effects"}configure(e,t,i=0){if(!this.disposed){this.texture=e,this.atlas=t,this.material?.dispose(),this.material=new vt({map:e,alphaTest:.45,vertexColors:!0}),oi(this.material,e,i);for(const[s,r]of[...this.chunks])this.setChunk(s,r.models,r.host)}}geometry(e,t,i){const s=this.atlas?.atlas;if(!s)return;const r=[],o=[],a=[],c=[],l=[];for(const d of e){const u=r.length/3,f=d.tile%s.columns*s.stride+s.padding,g=Math.floor(d.tile/s.columns)*s.stride+s.padding,y=d.material||t,p=d.normal[1]>0&&y.topTint||y.tint;for(let m=0;m<4;m++){const[M,v,_]=d.points[m],[S,A]=d.coordinates[m];r.push(M-i.x,v-i.y,_-i.z),o.push(...d.normal),c.push(...p||[1,1,1]),a.push((f+.05+S*(s.tileSize-.1))/s.width,1-(g+.05+(1-A)*(s.tileSize-.1))/s.height)}l.push(u,u+1,u+2,u,u+2,u+3)}const h=new zt;return h.setAttribute("position",new Ke(r,3)),h.setAttribute("normal",new Ke(o,3)),h.setAttribute("uv",new Ke(a,2)),h.setAttribute("color",new Ke(c,3)),h.setIndex(l),h.computeBoundingSphere(),h}setChunk(e,t,i){if(this.disposed)return;const s=this.chunks.get(e),r=new Map(t.map(c=>[Ht(c.position),c]));if(s){for(const c of s.models){const l=r.get(Ht(c.position));(!l||is(c)!==is(l))&&this.forgetPosition(Ht(c.position))}this.disposeChunk(s)}const o=new Je;o.name=`memory-container-chunk-${e}`;const a={models:t,group:o,instances:[],host:i};this.chunks.set(e,a),(i||this.group).add(o);for(const c of t){if(!this.material)continue;const l=new P(...c.pivot),h=this.geometry(c.body,c.material,new P),d=this.geometry(c.lid,c.material,l);if(!h||!d){h?.dispose(),d?.dispose();continue}const u=new Je;u.name=`memory-container-${Ht(c.position)}`,u.position.set(c.position.x,c.position.y,c.position.z),i&&u.position.sub(i.position);const f=new we(h,this.material),g=new we(d,this.material);f.name="memory-container-body",g.name="memory-container-lid",g.position.copy(l),f.userData.memoryContainerPosition=c.position,g.userData.memoryContainerPosition=c.position,u.add(f,g),o.add(u);const y={model:c,object:u,lid:g,axis:new P(...c.axis).normalize(),base:l,openness:0};a.instances.push(y),this.instances.set(Ht(c.position),y)}for(const c of this.instances.values())this.adoptSession(c.model);for(const c of this.instances.values())this.apply(c,this.openness(c.model));this.prune()}disposeChunk(e){e.group.removeFromParent();for(const t of e.instances){this.instances.get(Ht(t.model.position))===t&&this.instances.delete(Ht(t.model.position));for(const i of t.object.children)i instanceof we&&(so(i),i.geometry.dispose())}}removeChunk(e){const t=this.chunks.get(e);t&&(this.disposeChunk(t),this.chunks.delete(e),this.prune())}detachChunk(e){this.chunks.get(e)?.group.removeFromParent()}deleteSession(e){const t=this.sessions.get(e);if(t){for(const i of t.members)this.addresses.get(i)===e&&this.addresses.delete(i);this.sessions.delete(e)}}sessionFor(e){return this.sessions.get(this.addresses.get(Ht(e.position))||Cs(e))}forgetPosition(e){for(const[t,i]of this.sessions)if(i.members.has(e)){this.deleteSession(t),this.accepted.delete(t);for(const s of i.members)this.accepted.delete(s);for(const s of this.instances.values())i.members.has(Ht(s.model.position))&&this.apply(s,0)}this.accepted.delete(e)}adoptSession(e){const t=Ht(e.position),i=e.pair&&Ht(e.pair),s=this.sessionFor(e),r=!i&&s&&this.instances.has(s.key)?s.key:Cs(e),o=[...new Set([r,t,...i?[i]:[],...s?[s.key]:[],...i&&this.addresses.has(i)?[this.addresses.get(i)]:[]])];let a=this.sessions.get(r);for(const l of o){const h=this.sessions.get(l);if(h){if(h.kind!==e.kind||ks(h.block)!==ks(e.block.name)||h.identities.has(t)&&h.identities.get(t)!==is(e)){this.deleteSession(l),a===h&&(a=void 0);continue}if(!a||a===h)a=h,this.deleteSession(l),a.key=r,a.position=e.position,this.sessions.set(r,a);else{for(const[d,u]of h.owners){const f=a.owners.get(d);(!f||!Br(u,f))&&a.owners.set(d,u)}a.openness=Math.max(a.openness,h.openness);for(const d of h.members)a.members.add(d);for(const[d,u]of h.identities)a.identities.set(d,u);this.deleteSession(l)}}}if(a){a.members.add(t),a.identities.set(t,is(e)),i&&a.members.add(i);for(const l of a.members)this.addresses.set(l,r)}const c=o.map(l=>this.accepted.get(l)).filter(l=>!!l).reduce((l,h)=>!l||Br(l,h)?h:l,void 0);c&&this.accepted.set(r,c)}setReplayClock(e,t=1){this.sourceTime=e,this.sourceSpeed=Number.isFinite(t)&&t>0?t:1}setPlaying(e){this.playing=e}baseline(e){if(this.accepted.has(Cs(e))||e.kind!=="barrel")return 0;const t=e.block.states?.open_bit??e.block.states?.open;return t===!0||t===1||t==="true"?1:0}openness(e){return this.sessionFor(e)?.openness??this.baseline(e)}show(e){if(this.disposed||!Number.isFinite(e.time)||e.recorded===!1||e.kind==="mine_prepare"||e.kind==="fluid_change")return;const t=BM(e),i=e.player,s=this.playerAccepted.get(i);if(i&&s&&Br(t,s))return;const r=Ht(e.target),o=this.instances.get(r)?.model,a=o?this.sessionFor(o)?.key||Cs(o):this.addresses.get(r)||r,c=o?.kind||GM(e.block),l=/^container_(?:open|close|put|take)$/.test(e.kind)||e.kind==="interact"&&!!c,h=this.accepted.get(a);if(l&&c&&h&&Br(t,h))return;if(i){for(this.playerAccepted.delete(i),this.playerAccepted.set(i,t);this.playerAccepted.size>256;)this.playerAccepted.delete(this.playerAccepted.keys().next().value);for(const f of this.sessions.values())(f.key!==a||/^(?:quit|death|teleport|portal|respawn)$/.test(e.kind))&&f.owners.delete(i)}if(!l||!c||o&&e.block&&ks(e.block)!==ks(o.block.name))return;for(this.accepted.delete(a),this.accepted.set(a,t);this.accepted.size>256;)this.accepted.delete(this.accepted.keys().next().value);let d=this.sessions.get(a);if(!d){if(e.kind==="container_close")return;d={key:a,position:o?.position||{x:Math.floor(e.target.x),y:Math.floor(e.target.y),z:Math.floor(e.target.z)},kind:c,block:o?.block.name||e.block,owners:new Map,members:new Set([r]),identities:new Map,openness:this.instances.get(r)?.openness||0},o&&d.identities.set(r,is(o)),o?.pair&&d.members.add(Ht(o.pair)),this.sessions.set(a,d);for(const f of d.members){this.addresses.set(f,a);const g=this.instances.get(f)?.model;g&&d.identities.set(f,is(g))}}const u=i||"";if(e.kind==="container_close")d.owners.delete(u);else{const f=d.owners.get(u),g=e.kind==="container_open"||!!f?.explicit;for(d.owners.set(u,{...t,explicit:g,until:e.time+(g?30:2.5),presented:f?.presented??this.clock,sourceStart:e.time});d.owners.size>64;)d.owners.delete(d.owners.keys().next().value)}this.prune()}restore(e){this.show(e),this.expire(!0);for(const t of this.sessions.values())t.openness=t.owners.size?1:0;for(const t of this.instances.values())this.apply(t,this.openness(t.model))}expire(e=!1){for(const t of this.sessions.values())for(const[i,s]of t.owners)(Number.isFinite(this.sourceTime)?this.sourceTime:s.sourceStart+(this.clock-s.presented)*this.sourceSpeed)>=s.until&&(e||this.clock-s.presented>=.8)&&t.owners.delete(i)}apply(e,t){e.openness!==t&&this.changedChunks.add(`${Math.floor(e.model.position.x/16)},${Math.floor(e.model.position.z/16)}`),e.openness=t;const i=1-Math.pow(1-t,3);e.lid.position.copy(e.base),e.lid.quaternion.identity(),e.lid.visible=!0,e.model.kind==="chest"?e.lid.quaternion.setFromAxisAngle(e.axis,Math.PI/2*i):e.model.kind==="shulker"?(e.lid.position.addScaledVector(e.axis,.5*i),e.lid.quaternion.setFromAxisAngle(e.axis,Math.PI/2*i)):e.lid.visible=t<.01}update(e){if(this.disposed||!this.playing||!Number.isFinite(e)||e<=0)return!1;const t=Math.min(e,1);this.clock+=t,this.expire();for(const s of this.sessions.values()){const r=s.owners.size?1:0;s.openness+=Math.sign(r-s.openness)*Math.min(Math.abs(r-s.openness),t*5)}let i=!1;for(const s of this.instances.values()){const r=this.openness(s.model);r!==s.openness&&(this.apply(s,r),i=!0)}return this.prune(),i}takeChangedChunks(){const e=[...this.changedChunks];return this.changedChunks.clear(),e}prune(){const e=[];for(const[t,i]of this.sessions){const s=[...i.members].some(r=>this.instances.has(r));!i.owners.size&&i.openness===0?this.deleteSession(t):s||e.push(t)}for(const t of e.slice(0,Math.max(0,e.length-128)))this.deleteSession(t)}reset(){this.sessions.clear(),this.addresses.clear(),this.accepted.clear(),this.playerAccepted.clear(),this.clock=0,this.sourceTime=NaN;for(const e of this.instances.values())this.apply(e,this.baseline(e.model))}diagnostics(){const e=[...this.instances.values()].map(t=>{const i=this.sessionFor(t.model);return{key:i?.key||Cs(t.model),position:{...t.model.position},kind:t.model.kind,block:t.model.block.name,targetOpen:i?!!i.owners.size:!!this.baseline(t.model),openness:t.openness,owners:[...i?.owners.keys()||[]],paired:!!t.model.pair}});return{containers:e.length,open:e.filter(t=>t.openness>0).length,owners:[...this.sessions.values()].reduce((t,i)=>t+i.owners.size,0),pending:[...this.sessions.values()].filter(t=>![...t.members].some(i=>this.instances.has(i))).length,active:e}}dispose(){if(!this.disposed){this.reset(),this.disposed=!0,this.changedChunks.clear();for(const e of this.chunks.values())this.disposeChunk(e);this.chunks.clear(),this.material?.dispose(),this.material=void 0,this.texture=void 0,this.atlas=void 0,this.group.removeFromParent()}}}class HM{group=new Je;geometry=new cn(1,1,1);stone=new vt({color:9014404});steam=new vt({color:14213078,transparent:!0,opacity:.65,depthWrite:!1});active=new Map;clock=0;disposed=!1;constructor(){this.group.name="island-machines"}setMachines(e){const t=new Set(e.map(eo));let i=!1;for(const[s,r]of this.active)t.has(s)||(r.group.removeFromParent(),this.active.delete(s),i=!0);for(const s of e.slice(0,8)){const r=eo(s);if(this.active.has(r))continue;const o=new Je,a=[];o.name="cobblestone-generator";for(let c=0;c<8;c++){const l=new we(this.geometry,c<5?this.steam:this.stone);o.add(l),a.push(l)}this.active.set(r,{machine:s,group:o,parts:a}),this.group.add(o),i=!0}return i&&this.animate(),i}animate(){for(const{machine:e,parts:t}of this.active.values()){const[i,s,r]=e.source,[o,a,c]=e.output;for(let l=0;l<t.length;l++){const h=((this.clock/e.period+l/t.length)%1+1)%1,d=t[l];l<5?(d.position.set(i+.5+Math.sin(l*2.4+h)*.2,s+.6+h*.55,r+.5+Math.cos(l*2.4+h)*.2),d.scale.setScalar(.055*(1-h)),d.rotation.set(h,h*2,l)):(d.position.set(i+.5+(o-i)*h,s+.65+(a-s)*h+Math.sin(h*Math.PI)*.35,r+.5+(c-r)*h),d.scale.setScalar(.12*Math.sin(h*Math.PI)),d.rotation.set(h*3,l+h*4,h))}}}update(e){return this.disposed||!this.active.size?!1:(this.clock+=e,this.animate(),!0)}clear(){this.active.clear(),this.group.clear(),this.clock=0}diagnostics(){return{active:this.active.size,parts:this.active.size*8,clock:this.clock,sources:[...this.active.values()].map(({machine:e})=>e.source)}}dispose(){this.disposed||(this.disposed=!0,this.clear(),this.geometry.dispose(),this.stone.dispose(),this.steam.dispose(),this.group.removeFromParent())}}class WM{tourist=new TM;touchJump=!1;touchSprint=!1;interactionRaycaster=new Va;interactionId=0;lastBlockInteraction;blockInteractions=new Map;buttonReleaseTimers=new Map;setTouchAction(e,t){const i=t&&this.mode==="walk"&&this.containerState.status==="closed"&&!this.containerPreparing;e==="jump"?this.touchJump=i:this.touchSprint=i}resetTouristActions(){this.touchJump=this.touchSprint=!1}setTouchMove(e,t,i=0){this.containerState.status!=="closed"||this.containerPreparing||this.touchMove.set(Ot.clamp(e,-1,1),Ot.clamp(i,-1,1),Ot.clamp(t,-1,1))}getMode(){return this.mode}getDimension(){return this.dimension.id}getLocation(){return this.mode==="orbit"?Gr(this.controls.target):this.mode==="walk"?this.getTouristLocation():Gr(this.camera.position)}enterTouristMode(e,t,i){const s=e==="orbit"?t:i,r=e==="orbit"?s.y:e==="walk"?this.tourist.feet.y:s.y-kl;this.teleportTourist({x:s.x,y:r,z:s.z})}teleportTourist(e){this.tourist.teleport(e),this.syncTouristCamera()}getTouristLocation(){return{x:this.tourist.feet.x,y:this.tourist.feet.y,z:this.tourist.feet.z}}zoomTourist(e){this.camera.fov=Ot.clamp(this.camera.fov+(e<1?5:-5),35,90),this.camera.updateProjectionMatrix(),this.renderDirty=!0}shouldBuildCollision(e){if(this.mode!=="walk")return!1;const[t,i]=e.split(",").map(Number);return Math.abs(t-Math.floor(this.tourist.feet.x/16))<=1&&Math.abs(i-Math.floor(this.tourist.feet.z/16))<=1}refreshTouristCollisionWindow(){if(this.mode!=="walk"||this.memorySource)return;const e=Math.floor(this.tourist.feet.x/16),t=Math.floor(this.tourist.feet.z/16);for(let i=-1;i<=1;i++)for(let s=-1;s<=1;s++){const r=`${e+i},${t+s}`,o=this.meshes.get(r);this.desired.has(r)&&o&&o.userData.touristCollision!==!0&&this.meshReady(r)&&this.invalidateMeshKeys([r])}this.scheduleMesh()}moveTourist(e){this.refreshTouristCollisionWindow();const t=new Map,i=s=>{const r=(s.minX+s.maxX)/2,o=(s.minZ+s.maxZ)/2,a=`${Math.floor(r/16)},${Math.floor(o/16)}`;let c=t.get(a);return c||(c=this.touristCollisionGroups(r,o),t.set(a,c)),c};this.tourist.step(e,this.yaw,{keys:this.keys,touchMove:this.touchMove,touchJump:this.touchJump,touchSprint:this.touchSprint},{readyAt:(s,r)=>this.touristCollisionReady(s,r),boxesIn:s=>yi(i(s),s,1),climbableIn:s=>yi(i(s),s,2),webIn:s=>yi(i(s),s,3).length>0,waterAt:(s,r,o)=>Th(this.meshes.get(`${Math.floor(s/16)},${Math.floor(o/16)}`)?.userData.memoryWater,s,r,o)},this.dimension.bounds),this.syncTouristCamera()}async interactAt(e){if(!this.active||this.mode!=="walk"||this.containerState.status!=="closed"||this.containerPreparing)return;const t=this.pickBlock(e,4.5);t&&await this.requestBlockInteraction(t)||await this.openContainerAt(e)}handleBlockInteraction(e){if(e.type!=="block-interaction")return!1;const t=this.blockInteractions.get(e.requestId),i=e.changed&&e.generation===this.generation;return t&&e.generation===this.generation&&(this.lastBlockInteraction={position:t.position,blockName:e.blockName,changed:i}),t&&e.buttonPressed&&e.generation===this.generation&&this.scheduleButtonRelease(t.position),i&&(this.invalidateNeighbours(e.chunks),this.scheduleMesh(),this.containerTargetPosition.x=1/0),t&&(clearTimeout(t.timer),this.blockInteractions.delete(e.requestId),t.resolve(i)),!0}clearBlockInteractions(){for(const e of this.blockInteractions.values())clearTimeout(e.timer),e.resolve(!1);this.blockInteractions.clear(),this.lastBlockInteraction=void 0;for(const e of this.buttonReleaseTimers.values())clearTimeout(e);this.buttonReleaseTimers.clear()}getBlockInteractionDiagnostics(){return this.lastBlockInteraction}getTouristPhysicsDiagnostics(){const{feet:e,...t}=this.tourist.getDiagnostics(),i={minX:e[0]-.3,minY:e[1],minZ:e[2]-.3,maxX:e[0]+.3,maxY:e[1]+1.8,maxZ:e[2]+.3},s=this.touristCollisionGroups(e[0],e[2]),r={...i,minX:i.minX-.05,minZ:i.minZ-.05,maxX:i.maxX+.05,maxZ:i.maxZ+.05},o={minX:i.minX,minY:e[1]-6.1,minZ:i.minZ,maxX:i.maxX,maxY:e[1]+.12,maxZ:i.maxZ},a=yi(s,o,1).filter(c=>c.maxY<=e[1]+.12&&c.maxY>=e[1]-6.05&&c.maxX>i.minX+1e-7&&c.minX<i.maxX-1e-7&&c.maxZ>i.minZ+1e-7&&c.minZ<i.maxZ-1e-7).reduce((c,l)=>Math.max(c,l.maxY),-1/0);return{...t,feet:e,collisionReady:this.touristCollisionReady(e[0],e[2]),supportY:Number.isFinite(a)?a:null,nearbySolidBoxes:yi(s,i,1).length,nearbyClimbables:yi(s,r,2).length,inWeb:yi(s,i,3).length>0}}syncTouristCamera(){this.camera.position.set(this.tourist.feet.x,this.tourist.feet.y+kl,this.tourist.feet.z),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ")}touristCollisionGroups(e,t){const i=Math.floor(e/16),s=Math.floor(t/16),r=[];for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++){const c=this.meshes.get(`${i+o},${s+a}`);c?.visible&&(c.updateMatrixWorld(!0),r.push(c))}return r}touristCollisionReady(e,t){const i=Math.floor(e/16),s=Math.floor(t/16);if(!this.meshReady(`${i},${s}`))return!1;const r=Math.floor((e-Ns)/16),o=Math.floor((e+Ns-1e-7)/16),a=Math.floor((t-Ns)/16),c=Math.floor((t+Ns-1e-7)/16);for(let l=r;l<=o;l++)for(let h=a;h<=c;h++){const d=`${l},${h}`;if(this.desired.has(d)&&(!this.meshReady(d)||this.meshes.get(d)?.userData.touristCollision!==!0))return!1}return!0}pickBlock(e,t){const i=this.renderer.domElement.getBoundingClientRect(),s=e?new xe((e.x-i.left)/i.width*2-1,-(e.y-i.top)/i.height*2+1):new xe;if(Math.abs(s.x)>1||Math.abs(s.y)>1)return null;this.camera.updateMatrixWorld(!0);const r=this.interactionRaycaster;r.near=0,r.far=t,r.setFromCamera(s,this.camera);const o=[],a=Ya(Gr(r.ray.origin),Gr(r.ray.direction),t);for(const u of a){if(this.desired.has(u)&&!this.meshReady(u))return null;const f=this.meshes.get(u);f?.visible&&(f.updateMatrixWorld(!0),f.traverse(g=>{!(g instanceof we)||!g.visible||o.push(g)}))}const c=r.intersectObjects(o,!1)[0];if(!c?.face)return null;const l=c.face.normal.clone().applyNormalMatrix(new Ce().getNormalMatrix(c.object.matrixWorld)),h=c.point.clone().addScaledVector(l,-1e-4),d={x:Math.floor(h.x),y:Math.floor(h.y),z:Math.floor(h.z)};return this.meshReady(`${Math.floor(d.x/16)},${Math.floor(d.z/16)}`)?d:null}requestBlockInteraction(e){if(this.memorySource||!this.initialized||this.disposed)return Promise.resolve(!1);const t=++this.interactionId;return new Promise(i=>{const s=setTimeout(()=>{this.blockInteractions.delete(t),i(!1)},3e3);this.blockInteractions.set(t,{resolve:i,timer:s,position:e}),this.post({type:"block-interaction",...e,requestId:t,generation:this.generation})})}scheduleButtonRelease(e){const t=`${e.x},${e.y},${e.z}`,i=this.buttonReleaseTimers.get(t);i&&clearTimeout(i);const s=setTimeout(()=>{this.buttonReleaseTimers.delete(t),!(this.disposed||this.memorySource||!this.initialized)&&this.post({type:"block-interaction",...e,requestId:++this.interactionId,generation:this.generation,release:!0})},700);this.buttonReleaseTimers.set(t,s)}}function Gr(n){return{x:n.x,y:n.y,z:n.z}}class YM extends WM{containerContext=(()=>{const e=this;return{get containerCallbacks(){return e.containerCallbacks},set containerCallbacks(t){e.containerCallbacks=t},get containerState(){return e.containerState},set containerState(t){e.containerState=t},get containerTarget(){return e.containerTarget},set containerTarget(t){e.containerTarget=t},get containerAssets(){return e.containerAssets},get containerOutline(){return e.containerOutline},get renderDirty(){return e.renderDirty},set renderDirty(t){e.renderDirty=t},get hudVisible(){return e.hudVisible},get active(){return e.active},get mode(){return e.mode},get containerPreparing(){return e.containerPreparing},set containerPreparing(t){e.containerPreparing=t},meshReady:(...t)=>e.meshReady(...t),canOpenInventory:(...t)=>e.canOpenInventory(...t),get camera(){return e.camera},get containerTargetPosition(){return e.containerTargetPosition},get containerTargetQuaternion(){return e.containerTargetQuaternion},get keys(){return e.keys},get touchMove(){return e.touchMove},get dragging(){return e.dragging},set dragging(t){e.dragging=t},get containerGesture(){return e.containerGesture},set containerGesture(t){e.containerGesture=t},get containerPointers(){return e.containerPointers},get renderer(){return e.renderer},get controls(){return e.controls},get containerPrepareRevision(){return e.containerPrepareRevision},set containerPrepareRevision(t){e.containerPrepareRevision=t},get containerPickRevision(){return e.containerPickRevision},set containerPickRevision(t){e.containerPickRevision=t},get containerRetryScreen(){return e.containerRetryScreen},set containerRetryScreen(t){e.containerRetryScreen=t},get containerRequestId(){return e.containerRequestId},set containerRequestId(t){e.containerRequestId=t},get containerController(){return e.containerController},set containerController(t){e.containerController=t},get containerRecords(){return e.containerRecords},setContainerState:(...t)=>e.setContainerState(...t),openContainerAt:(...t)=>e.openContainerAt(...t),get memorySource(){return e.memorySource},get memoryAcknowledgedRevision(){return e.memoryAcknowledgedRevision},get memoryRevision(){return e.memoryRevision},getMemoryBufferStatus:(...t)=>e.getMemoryBufferStatus(...t),get initialized(){return e.initialized},get disposed(){return e.disposed},get generation(){return e.generation},pickContainer:(...t)=>e.pickContainer(...t),get callbacks(){return e.callbacks},setContainerTarget:(...t)=>e.setContainerTarget(...t),loadContainer:(...t)=>e.loadContainer(...t),get containerPicking(){return e.containerPicking},set containerPicking(t){e.containerPicking=t},get containerRaycaster(){return e.containerRaycaster},get desired(){return e.desired},get meshes(){return e.meshes},inspectMemoryBlock:(...t)=>e.inspectMemoryBlock(...t),get memoryTime(){return e.memoryTime},get dimension(){return e.dimension},get containerRequests(){return e.containerRequests},set containerRequests(t){e.containerRequests=t}}})();inputContext=(()=>{const e=this;return{get renderer(){return e.renderer},get orbitUserAdjusted(){return e.orbitUserAdjusted},set orbitUserAdjusted(t){e.orbitUserAdjusted=t},get memoryFollow(){return e.memoryFollow},get memoryRequestedOffset(){return e.memoryRequestedOffset},set memoryRequestedOffset(t){e.memoryRequestedOffset=t},get memoryPanOffset(){return e.memoryPanOffset},get controls(){return e.controls},get disposers(){return e.disposers},get mode(){return e.mode},get containerPreparing(){return e.containerPreparing},closeContainer:(...t)=>e.closeContainer(...t),get active(){return e.active},set active(t){e.active=t},get containerState(){return e.containerState},openTargetContainer:(...t)=>e.openTargetContainer(...t),get keys(){return e.keys},get touchMove(){return e.touchMove},get dragging(){return e.dragging},set dragging(t){e.dragging=t},get containerGesture(){return e.containerGesture},set containerGesture(t){e.containerGesture=t},get containerPointers(){return e.containerPointers},look:(...t)=>e.look(...t),openContainerAt:(...t)=>e.openContainerAt(...t),interactAt:(...t)=>e.interactAt(...t),requestPointerLock:(...t)=>e.requestPointerLock(...t),zoom:(...t)=>e.zoom(...t),get callbacks(){return e.callbacks},stopIslandMechanism:(...t)=>e.stopIslandMechanism(...t),get renderDirty(){return e.renderDirty},set renderDirty(t){e.renderDirty=t},setContainerTarget:(...t)=>e.setContainerTarget(...t),get containerTargetPosition(){return e.containerTargetPosition},setTouchAction:(...t)=>e.setTouchAction(...t)}})();spatialContext=(()=>{const e=this;return{get memoryTargetBounds(){return e.memoryTargetBounds},get memoryReachCache(){return e.memoryReachCache},get meshes(){return e.meshes},get memoryAtlas(){return e.memoryAtlas},get memoryGroundRaycaster(){return e.memoryGroundRaycaster},get memoryPassableTiles(){return e.memoryPassableTiles},get memoryClimbTiles(){return e.memoryClimbTiles},get memoryGroundCache(){return e.memoryGroundCache},get dimension(){return e.dimension},get memoryPoses(){return e.memoryPoses},get memoryPoseReset(){return e.memoryPoseReset},findMemoryGround:(...t)=>e.findMemoryGround(...t),memoryCanReach:(...t)=>e.memoryCanReach(...t),get memoryStanceCache(){return e.memoryStanceCache}}})();memoryCameraContext=(()=>{const e=this;return{get memoryRequestedOffset(){return e.memoryRequestedOffset},set memoryRequestedOffset(t){e.memoryRequestedOffset=t},get memoryAppliedOffset(){return e.memoryAppliedOffset},set memoryAppliedOffset(t){e.memoryAppliedOffset=t},get memoryPlayers(){return e.memoryPlayers},get memoryFollow(){return e.memoryFollow},set memoryFollow(t){e.memoryFollow=t},get camera(){return e.camera},get renderDirty(){return e.renderDirty},set renderDirty(t){e.renderDirty=t},get memoryDefaultViewAttempt(){return e.memoryDefaultViewAttempt},set memoryDefaultViewAttempt(t){e.memoryDefaultViewAttempt=t},get memoryDefaultTravel(){return e.memoryDefaultTravel},set memoryDefaultTravel(t){e.memoryDefaultTravel=t},get memoryDefaultReframe(){return e.memoryDefaultReframe},set memoryDefaultReframe(t){e.memoryDefaultReframe=t},get memoryInitialViewFromTravel(){return e.memoryInitialViewFromTravel},set memoryInitialViewFromTravel(t){e.memoryInitialViewFromTravel=t},get controls(){return e.controls},get memoryCameraKey(){return e.memoryCameraKey},set memoryCameraKey(t){e.memoryCameraKey=t},get memoryCameraOffset(){return e.memoryCameraOffset},set memoryCameraOffset(t){e.memoryCameraOffset=t},get memoryCameraTarget(){return e.memoryCameraTarget},set memoryCameraTarget(t){e.memoryCameraTarget=t},get memoryCameraFrame(){return e.memoryCameraFrame},set memoryCameraFrame(t){e.memoryCameraFrame=t},get memoryCameraClearSince(){return e.memoryCameraClearSince},set memoryCameraClearSince(t){e.memoryCameraClearSince=t},get memoryCameraSafeDistance(){return e.memoryCameraSafeDistance},set memoryCameraSafeDistance(t){e.memoryCameraSafeDistance=t},memoryAutoCamera:!1,updateMemoryCameraVisibility:(...t)=>e.updateMemoryCameraVisibility(...t),get memoryPanOffset(){return e.memoryPanOffset},get orbitUserAdjusted(){return e.orbitUserAdjusted},get dimension(){return e.dimension},setDimension:(...t)=>e.setDimension(...t),get mode(){return e.mode},setMode:(...t)=>e.setMode(...t),get memoryInitialViewPending(){return e.memoryInitialViewPending},set memoryInitialViewPending(t){e.memoryInitialViewPending=t},getMemoryBufferStatus:(...t)=>e.getMemoryBufferStatus(...t),getMemoryPresentationStatus:(...t)=>e.getMemoryPresentationStatus(...t),get meshes(){return e.meshes},get transparentMaterial(){return e.transparentMaterial},findMemoryGround:(...t)=>e.findMemoryGround(...t),get memoryPassableTiles(){return e.memoryPassableTiles},get memoryAtlas(){return e.memoryAtlas},get memoryGroundRaycaster(){return e.memoryGroundRaycaster},get memoryDefaultRecoveries(){return e.memoryDefaultRecoveries},set memoryDefaultRecoveries(t){e.memoryDefaultRecoveries=t},get streamingCenter(){return e.streamingCenter},updateStreaming:(...t)=>e.updateStreaming(...t)}})();presentationContext=(()=>{const e=this;return{get memoryPoseReset(){return e.memoryPoseReset},set memoryPoseReset(t){e.memoryPoseReset=t},get memoryEventOrder(){return e.memoryEventOrder},set memoryEventOrder(t){e.memoryEventOrder=t},get memoryInitialViewPending(){return e.memoryInitialViewPending},set memoryInitialViewPending(t){e.memoryInitialViewPending=t},get orbitUserAdjusted(){return e.orbitUserAdjusted},get memoryDefaultTravel(){return e.memoryDefaultTravel},set memoryDefaultTravel(t){e.memoryDefaultTravel=t},get memoryDefaultViewAttempt(){return e.memoryDefaultViewAttempt},set memoryDefaultViewAttempt(t){e.memoryDefaultViewAttempt=t},get memoryDefaultRecoveries(){return e.memoryDefaultRecoveries},set memoryDefaultRecoveries(t){e.memoryDefaultRecoveries=t},get memoryInitialViewFromTravel(){return e.memoryInitialViewFromTravel},set memoryInitialViewFromTravel(t){e.memoryInitialViewFromTravel=t},get memoryDefaultReframe(){return e.memoryDefaultReframe},set memoryDefaultReframe(t){e.memoryDefaultReframe=t},get memoryEffectsGeneration(){return e.memoryEffectsGeneration},set memoryEffectsGeneration(t){e.memoryEffectsGeneration=t},get memoryInteractions(){return e.memoryInteractions},get memoryGroundCache(){return e.memoryGroundCache},get memoryStanceCache(){return e.memoryStanceCache},get memoryReachCache(){return e.memoryReachCache},get memoryTargetBounds(){return e.memoryTargetBounds},get memoryCameraKey(){return e.memoryCameraKey},set memoryCameraKey(t){e.memoryCameraKey=t},get memoryCameraOffset(){return e.memoryCameraOffset},set memoryCameraOffset(t){e.memoryCameraOffset=t},get memoryContainers(){return e.memoryContainers},invalidateMemoryContainerRouteChunks:(...t)=>e.invalidateMemoryContainerRouteChunks(...t),get memoryInteractionLookups(){return e.memoryInteractionLookups},get memoryMiningPreviews(){return e.memoryMiningPreviews},get islandMachines(){return e.islandMachines},get machineSignature(){return e.machineSignature},set machineSignature(t){e.machineSignature=t},get memoryInspections(){return e.memoryInspections},get renderDirty(){return e.renderDirty},set renderDirty(t){e.renderDirty=t},get dimension(){return e.dimension},get memorySource(){return e.memorySource},get disposed(){return e.disposed},get memoryPoses(){return e.memoryPoses},memoryCanReach:(...t)=>e.memoryCanReach(...t),get meshes(){return e.meshes},get memoryContainerGeometryRevision(){return e.memoryContainerGeometryRevision},get memoryGroundRaycaster(){return e.memoryGroundRaycaster},get memoryPassableTiles(){return e.memoryPassableTiles},get memoryClimbTiles(){return e.memoryClimbTiles},get memoryAtlas(){return e.memoryAtlas},invalidateMemoryContainerGeometry:(...t)=>e.invalidateMemoryContainerGeometry(...t),inspectMemoryBlock:(...t)=>e.inspectMemoryBlock(...t),get islandMachineIndex(){return e.islandMachineIndex},get machineChecking(){return e.machineChecking},set machineChecking(t){e.machineChecking=t},get initialized(){return e.initialized},get islandMechanism(){return e.islandMechanism},get memoryAcknowledgedRevision(){return e.memoryAcknowledgedRevision},get memoryRevision(){return e.memoryRevision},getLocation:(...t)=>e.getLocation(...t),get generation(){return e.generation},get memoryTime(){return e.memoryTime},get memoryPlayers(){return e.memoryPlayers},get memoryPlayerGeometry(){return e.memoryPlayerGeometry},get memorySkinMaterial(){return e.memorySkinMaterial},get memoryPantsMaterial(){return e.memoryPantsMaterial},get memoryPlayerMaterial(){return e.memoryPlayerMaterial},get memoryFollow(){return e.memoryFollow},get scene(){return e.scene},get memoryPlaying(){return e.memoryPlaying},removeMemoryPlayer:(...t)=>e.removeMemoryPlayer(...t),get camera(){return e.camera},updateMemoryCameraVisibility:(...t)=>e.updateMemoryCameraVisibility(...t),get mode(){return e.mode},setMode:(...t)=>e.setMode(...t),get controls(){return e.controls},get islandMechanismPrompt(){return e.islandMechanismPrompt},get active(){return e.active},get hudVisible(){return e.hudVisible},get containerState(){return e.containerState},get islandGenerators(){return e.islandGenerators},get islandMechanismNearby(){return e.islandMechanismNearby},set islandMechanismNearby(t){e.islandMechanismNearby=t},stopIslandMechanism:(...t)=>e.stopIslandMechanism(...t),get islandMechanismButton(){return e.islandMechanismButton},get islandMechanismCaption(){return e.islandMechanismCaption}}})();streamingContext=(()=>{const e=this;return{get regionIndex(){return e.regionIndex},get entityRegionIndex(){return e.entityRegionIndex},get savedEntityRegions(){return e.savedEntityRegions},get totalChunks(){return e.totalChunks},set totalChunks(t){e.totalChunks=t},get dimension(){return e.dimension},get memorySource(){return e.memorySource},get renderer(){return e.renderer},get scene(){return e.scene},get distance(){return e.distance},get renderDirty(){return e.renderDirty},set renderDirty(t){e.renderDirty=t},get initialized(){return e.initialized},get disposed(){return e.disposed},getLocation:(...t)=>e.getLocation(...t),memoryRequiredChunks:(...t)=>e.memoryRequiredChunks(...t),get memoryPreloadPose(){return e.memoryPreloadPose},get memoryPreloadSignature(){return e.memoryPreloadSignature},get streamingSignature(){return e.streamingSignature},set streamingSignature(t){e.streamingSignature=t},get memoryPreloadRequired(){return e.memoryPreloadRequired},set memoryPreloadRequired(t){e.memoryPreloadRequired=t},chunkWindow:(...t)=>e.chunkWindow(...t),get desired(){return e.desired},set desired(t){e.desired=t},get streamingCenter(){return e.streamingCenter},set streamingCenter(t){e.streamingCenter=t},get memoryPreloadCenters(){return e.memoryPreloadCenters},get streamingDesired(){return e.streamingDesired},set streamingDesired(t){e.streamingDesired=t},get meshes(){return e.meshes},get regions(){return e.regions},removeMesh:(...t)=>e.removeMesh(...t),get entityRenderer(){return e.entityRenderer},get savedEntities(){return e.savedEntities},post:(...t)=>e.post(...t),invalidateNeighbours:(...t)=>e.invalidateNeighbours(...t),get camera(){return e.camera},get renderedPosition(){return e.renderedPosition},syncEntityOverlays:(...t)=>e.syncEntityOverlays(...t),memoryStreamingPriority:(...t)=>e.memoryStreamingPriority(...t),shouldBuildCollision:t=>e.shouldBuildCollision(t),get memoryPreloadUrgent(){return e.memoryPreloadUrgent},get mobileDevice(){return e.mobileDevice},get loading(){return e.loading},set loading(t){e.loading=t},fetchRegion:(...t)=>e.fetchRegion(...t),scheduleMesh:(...t)=>e.scheduleMesh(...t),emitStatus:(...t)=>e.emitStatus(...t),get generation(){return e.generation},get bytes(){return e.bytes},set bytes(t){e.bytes=t},get memoryCallbacks(){return e.memoryCallbacks},get callbacks(){return e.callbacks},get streamingRequested(){return e.streamingRequested},set streamingRequested(t){e.streamingRequested=t},flushMemoryTime:(...t)=>e.flushMemoryTime(...t),get pendingMesh(){return e.pendingMesh},set pendingMesh(t){e.pendingMesh=t},get queuedMesh(){return e.queuedMesh},set queuedMesh(t){e.queuedMesh=t},get memoryAcknowledgedRevision(){return e.memoryAcknowledgedRevision},set memoryAcknowledgedRevision(t){e.memoryAcknowledgedRevision=t},get memoryRevision(){return e.memoryRevision},get dirtyMeshes(){return e.dirtyMeshes},get pendingMemoryRevision(){return e.pendingMemoryRevision},set pendingMemoryRevision(t){e.pendingMemoryRevision=t},get workerReady(){return e.workerReady},set workerReady(t){e.workerReady=t},get memoryInspections(){return e.memoryInspections},get memoryTargetBounds(){return e.memoryTargetBounds},get memoryStanceCache(){return e.memoryStanceCache},get memoryEstimated(){return e.memoryEstimated},set memoryEstimated(t){e.memoryEstimated=t},get memoryLoadedRegions(){return e.memoryLoadedRegions},set memoryLoadedRegions(t){e.memoryLoadedRegions=t},invalidateMeshKeys:(...t)=>e.invalidateMeshKeys(...t),get containerTargetPosition(){return e.containerTargetPosition},addGeometry:(...t)=>e.addGeometry(...t),get opaqueMaterial(){return e.opaqueMaterial},get transparentMaterial(){return e.transparentMaterial},get memoryContainers(){return e.memoryContainers},invalidateMemoryContainerRouteChunks:(...t)=>e.invalidateMemoryContainerRouteChunks(...t),get memoryContinuous(){return e.memoryContinuous},get memoryContinuousChunks(){return e.memoryContinuousChunks},set memoryContinuousChunks(t){e.memoryContinuousChunks=t},get memoryTerrainRevision(){return e.memoryTerrainRevision},set memoryTerrainRevision(t){e.memoryTerrainRevision=t},invalidateMemoryRouteChunk:(...t)=>e.invalidateMemoryRouteChunk(...t),get memoryStaleMeshes(){return e.memoryStaleMeshes},get memoryGroundCache(){return e.memoryGroundCache},get memoryReachCache(){return e.memoryReachCache},get memoryCameraKey(){return e.memoryCameraKey},set memoryCameraKey(t){e.memoryCameraKey=t},get memoryTime(){return e.memoryTime},meshReady:(...t)=>e.meshReady(...t),get lastStatus(){return e.lastStatus},set lastStatus(t){e.lastStatus=t}}})();terrainContext=(()=>{const e=this;return{stopIslandMechanism:(...t)=>e.stopIslandMechanism(...t),get ready(){return e.ready},get disposed(){return e.disposed},closeContainer:(...t)=>e.closeContainer(...t),setContainerTarget:(...t)=>e.setContainerTarget(...t),get containerPickRevision(){return e.containerPickRevision},set containerPickRevision(t){e.containerPickRevision=t},get memorySource(){return e.memorySource},set memorySource(t){e.memorySource=t},get memoryCallbacks(){return e.memoryCallbacks},set memoryCallbacks(t){e.memoryCallbacks=t},resetMemoryEffects:(...t)=>e.resetMemoryEffects(...t),clearMemoryPreload:(...t)=>e.clearMemoryPreload(...t),get memoryRevision(){return e.memoryRevision},set memoryRevision(t){e.memoryRevision=t},get memoryAcknowledgedRevision(){return e.memoryAcknowledgedRevision},set memoryAcknowledgedRevision(t){e.memoryAcknowledgedRevision=t},get generation(){return e.generation},set generation(t){e.generation=t},resetMemoryContinuity:(...t)=>e.resetMemoryContinuity(...t),get regions(){return e.regions},get entityRenderer(){return e.entityRenderer},get savedEntities(){return e.savedEntities},get loading(){return e.loading},set loading(t){e.loading=t},get pendingMesh(){return e.pendingMesh},set pendingMesh(t){e.pendingMesh=t},get pendingMemoryRevision(){return e.pendingMemoryRevision},set pendingMemoryRevision(t){e.pendingMemoryRevision=t},get queuedMesh(){return e.queuedMesh},set queuedMesh(t){e.queuedMesh=t},get dirtyMeshes(){return e.dirtyMeshes},get memoryStaleMeshes(){return e.memoryStaleMeshes},get desired(){return e.desired},get streamingDesired(){return e.streamingDesired},get streamingCenter(){return e.streamingCenter},set streamingCenter(t){e.streamingCenter=t},get streamingSignature(){return e.streamingSignature},set streamingSignature(t){e.streamingSignature=t},get meshes(){return e.meshes},removeMesh:(...t)=>e.removeMesh(...t),get memoryRouteChunkRevisions(){return e.memoryRouteChunkRevisions},post:(...t)=>e.post(...t),reindex:(...t)=>e.reindex(...t),configureMemoryWorker:(...t)=>e.configureMemoryWorker(...t),get memoryTime(){return e.memoryTime},set memoryTime(t){e.memoryTime=t},get memoryFollow(){return e.memoryFollow},set memoryFollow(t){e.memoryFollow=t},clearMemoryPlayers:(...t)=>e.clearMemoryPlayers(...t),updateStreaming:(...t)=>e.updateStreaming(...t),get memoryContinuous(){return e.memoryContinuous},set memoryContinuous(t){e.memoryContinuous=t},get memoryQueuedTime(){return e.memoryQueuedTime},set memoryQueuedTime(t){e.memoryQueuedTime=t},get memoryContinuousChunks(){return e.memoryContinuousChunks},set memoryContinuousChunks(t){e.memoryContinuousChunks=t},getMemoryPresentationStatus:(...t)=>e.getMemoryPresentationStatus(...t),memoryUpdatePending:(...t)=>e.memoryUpdatePending(...t),commitMemoryTime:(...t)=>e.commitMemoryTime(...t),memoryRequiredChunks:(...t)=>e.memoryRequiredChunks(...t),syncEntityOverlays:(...t)=>e.syncEntityOverlays(...t),get renderDirty(){return e.renderDirty},set renderDirty(t){e.renderDirty=t},getLocation:(...t)=>e.getLocation(...t),get memoryPreloadPose(){return e.memoryPreloadPose},set memoryPreloadPose(t){e.memoryPreloadPose=t},get dimension(){return e.dimension},get memoryPreloadUrgent(){return e.memoryPreloadUrgent},set memoryPreloadUrgent(t){e.memoryPreloadUrgent=t},get memoryPreloadSignature(){return e.memoryPreloadSignature},set memoryPreloadSignature(t){e.memoryPreloadSignature=t},get memoryPreloadCenters(){return e.memoryPreloadCenters},set memoryPreloadCenters(t){e.memoryPreloadCenters=t},chunkWindow:(...t)=>e.chunkWindow(...t),meshReady:(...t)=>e.meshReady(...t),get initialized(){return e.initialized},get regionIndex(){return e.regionIndex},get camera(){return e.camera},get controls(){return e.controls},get mode(){return e.mode},get memoryRequestedOffset(){return e.memoryRequestedOffset},get memoryAppliedOffset(){return e.memoryAppliedOffset},get memoryPanOffset(){return e.memoryPanOffset},get memoryPreloadRequired(){return e.memoryPreloadRequired}}})();ready;host;callbacks;manifest;renderer;scene=new Rd;camera=new on(60,1,.08,800);controls;worker;resizeObserver;meshes=new Map;dirtyMeshes=new Set;memoryStaleMeshes=new Set;memoryTerrainRevision=0;memoryRouteChunkRevisions;regions=new Map;regionIndex=new Map;entityRegionIndex=new Map;entityRenderer;savedEntityRegions=new Map;savedEntities;signFont;desired=new Map;streamingDesired=new Map;streamingCenter="";streamingSignature="";streamingRequested=!1;memoryPreloadCenters=[];memoryPreloadSignature="";memoryPreloadPose;memoryPreloadRequired=new Map;memoryPreloadUrgent=!1;dimension;opaqueMaterial;transparentMaterial;atlasTexture;mode="orbit";distance=matchMedia("(pointer: coarse)").matches?3:4;generation=0;initialized=!1;active=!0;disposed=!1;bytes=0;loading=0;pendingMesh;queuedMesh;pendingMemoryRevision;performanceMode=!1;mobileDevice=matchMedia("(pointer: coarse)").matches;memorySource;memoryTime=1/0;memoryRevision=0;memoryAcknowledgedRevision=-1;memoryContinuous=!1;memoryContinuousChunks;memoryQueuedTime;memoryCallbacks={};memoryPlayers=new Map;memoryPlayerMaterial=new vt({color:15777122});memoryPlayerGeometry=new cn(1,1,1);memorySkinMaterial=new vt({color:13938564});memoryPantsMaterial=new vt({color:4215630});memoryInteractions=new zM;memoryContainers=new VM;islandMachines=new HM;islandMachineIndex;machineChecking=!1;machineSignature="";lastMachineCheck=0;memoryPoses=new Map;memoryGroundCache=new Map;memoryStanceCache=new Map;memoryReachCache=new Map;memoryTargetBounds=new Map;memoryInteractionLookups=new Map;memoryMiningPreviews=new Map;memoryGroundRaycaster=new Va;memoryClimbTiles=new Set;memoryPassableTiles=new Set;memoryAtlas;memoryEffectsGeneration=0;memoryContainerGeometryRevision=0;memoryEventOrder=0;memoryReplayClock=NaN;memoryPoseReset=!0;memoryPlaying=!1;islandGenerators=[];islandMechanism;islandMechanismPrompt;islandMechanismButton;islandMechanismCaption;islandMechanismNearby;memoryCameraKey="";memoryCameraOffset;memoryCameraTarget;memoryRequestedOffset;memoryAppliedOffset;memoryPanOffset=new P;memoryCameraFrame=0;memoryCameraClearSince;memoryCameraSafeDistance;orbitUserAdjusted=!1;memoryInitialViewPending=!0;memoryInitialViewFromTravel=!1;memoryDefaultReframe;memoryDefaultViewAttempt;memoryDefaultRecoveries=0;memoryDefaultTravel;memoryFollow;memoryEstimated=0;memoryLoadedRegions=0;memoryInspectionId=0;memoryInspections=new Map;animation=0;lastFrame=0;lastStream=0;lastPosition=0;lastStatus="";yaw=0;pitch=0;touchMove=new P;keys=new Set;dragging;disposers=[];initController=new AbortController;workerReady;workerFailure;totalChunks=0;renderDirty=!0;framesRendered=0;renderedPosition=new P(1/0,1/0,1/0);renderedQuaternion=new Bn;containerCallbacks={};containerState={status:"closed"};containerTarget=null;containerController;containerRequestId=0;containerRequests=0;containerRecords=new Map;containerAssets;containerPicking=!1;containerPreparing=!1;containerPrepareRevision=0;containerRetryScreen;containerPickRevision=0;containerTargetChecked=0;containerRaycaster=new Va;containerOutline=new Fd(new kd(new cn(1,1,1)),new uh({color:0,transparent:!0,opacity:.45,depthWrite:!1,fog:!1}));hudVisible=!0;containerTargetPosition=new P(1/0,1/0,1/0);containerTargetQuaternion=new Bn;containerPointers=new Set;containerGesture;constructor(e,t,i={}){if(super(),this.host=e,this.manifest=t,this.callbacks=i,!t.dimensions.length)throw new Error("地图没有可浏览的维度");this.dimension=t.dimensions.find(r=>r.id==="overworld")||t.dimensions[0],this.renderer=new C0({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.worker=new Worker(new URL(""+new URL("mesh-worker-B9agfyip.js",import.meta.url).href,import.meta.url),{type:"module"}),this.renderer.outputColorSpace=_t,this.renderer.setClearColor(12506847),this.renderer.domElement.className="world-canvas",this.renderer.domElement.setAttribute("aria-label",`${t.worldName||t.name||"老母猪村"}三维地图，拖动旋转视角，滚轮缩放`),this.renderer.domElement.tabIndex=0,this.renderer.domElement.style.touchAction="none",e.append(this.renderer.domElement),this.containerOutline.visible=!1,this.scene.add(this.containerOutline),this.scene.add(this.memoryInteractions.group),this.scene.add(this.islandMachines.group),this.scene.fog=new js(12506847,50,115),this.scene.add(new Yd(16777215,1.6));const s=new qd(16774624,1.3);s.position.set(-80,150,65),this.scene.add(s),this.controls=new aM(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.09,this.controls.minDistance=2,this.controls.maxDistance=180,this.controls.maxPolarAngle=Math.PI*.94,this.controls.zoomSpeed=.75,this.controls.panSpeed=.7,this.controls.target.set(this.dimension.spawn.x,this.dimension.spawn.y,this.dimension.spawn.z),this.camera.position.set(this.dimension.spawn.x+38,this.dimension.spawn.y+38,this.dimension.spawn.z+48),this.camera.lookAt(this.controls.target),this.controls.update(),this.reindex(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.resize(),this.bindInput(),this.worker.onmessage=r=>this.onWorker(r.data),this.worker.onerror=r=>{this.workerFailure?.(new Error(r.message||"地图处理线程发生错误")),this.callbacks.onError?.("地图处理线程发生错误，请重新打开地图")},this.ready=this.initialize(),this.animation=requestAnimationFrame(r=>this.frame(r))}async initialize(){try{const e=this.initController.signal,[t,i]=await Promise.all([rn(Nn(this.manifest.palette||"palette.json"),{signal:e}),rn(Mi("textures/materials.json.gz"),{signal:e}).then(M=>M.ok?M:rn(Mi("textures/materials.json"),{signal:e}))]);if(!t.ok||!i.ok)throw new Error("地图索引或材质加载失败");const s=Kn(t),r=Kn(i),[o,a,c,l,h]=await Promise.all([s,r,this.loadSignFont(e),this.manifest.entityModels?rn(Mi(this.manifest.entityModels.file),{signal:e}).then(M=>Kn(M)).then(P_):void 0,this.manifest.islandMachines?rn(Nn(this.manifest.islandMachines.file),{signal:e}).then(Kn).then(m_).catch(()=>{}):void 0]);if(h&&(this.islandMachineIndex=new g_(h)),!Array.isArray(o)||!a.materials)throw new Error("地图材质格式无效");if(a.paletteLength!==void 0&&a.paletteLength!==o.length||a.paletteMaterials!==void 0&&(!Array.isArray(a.paletteMaterials)||a.paletteMaterials.length!==o.length))throw new Error("地图索引与材质版本不一致，请重新加载地图");const d=a.atlas?.image||a.image||"textures/atlas.png";this.containerAssets={atlas:a,imageUrl:Mi(d)};const u=await rn(Mi(d),{signal:e});if(!u.ok)throw new Error(`地图材质图片加载失败（${u.status}）`);const f=URL.createObjectURL(await u.blob());let g;try{g=await new Hd().loadAsync(f)}finally{URL.revokeObjectURL(f)}if(this.disposed){g.dispose();return}const y=Math.min(this.renderer.capabilities.getMaxAnisotropy(),matchMedia("(pointer: coarse)").matches?4:8),p=h_(g,a,this.renderer.capabilities.maxTextureSize,y),m=p.texture;if(m!==g&&g.dispose(),this.atlasTexture=m,this.memoryAtlas=p.atlas,this.memoryInteractions.configure(m,p.atlas,o,p.maxFootprint),this.memoryContainers.configure(m,p.atlas,p.maxFootprint),this.manifest.mechanisms?.version===1){const M=await rn(Nn(this.manifest.mechanisms.file),{signal:e}).then(async v=>v.ok?u_(await Kn(v)):[]).catch(()=>[]);if(this.disposed)return;if(this.islandGenerators=M,M.length){this.islandMechanism=new d_(m,p.atlas,p.maxFootprint),this.scene.add(this.islandMechanism.group);const v=document.createElement("div");v.className="island-machine-preview",v.hidden=!0;const _=document.createElement("button");_.type="button",_.textContent="看看刷石机",_.setAttribute("aria-pressed","false");const S=document.createElement("p");S.textContent="水与岩浆相遇，圆石收进料箱",S.hidden=!0,_.addEventListener("click",()=>{_.getAttribute("aria-pressed")==="true"?this.stopIslandMechanism():this.islandMechanismNearby&&!this.memorySource&&this.active&&(this.islandMachines.clear(),this.machineSignature="",this.frameIslandMechanism(this.islandMechanismNearby),this.islandMechanism?.start(this.islandMechanismNearby)),this.renderDirty=!0,this.updateIslandMechanismPrompt()}),v.append(_,S),this.host.append(v),this.islandMechanismPrompt=v,this.islandMechanismButton=_,this.islandMechanismCaption=S}}for(const[M,v]of Object.entries(p.atlas.materials))if(/ladder|vine/.test(M))for(const _ of[v.top,v.side,v.bottom,...Object.values(v.faces||{})])_!==void 0&&this.memoryClimbTiles.add(_);for(const[M,v]of Object.entries(p.atlas.materials))if(/(?:^|:)(?:(?:flowing_)?(?:water|lava)|bubble_column|tallgrass|double_plant|red_flower|yellow_flower|deadbush|fire|soul_fire|torch|redstone_torch|unlit_redstone_torch|rail|powered_rail|detector_rail|activator_rail|redstone_wire|wheat|carrots|potatoes|beetroot|beetroots|nether_wart|reeds|sugar_cane|pumpkin_stem|melon_stem|seagrass|kelp)$/.test(M))for(const _ of[v.top,v.side,v.bottom,...Object.values(v.faces||{})])_!==void 0&&this.memoryPassableTiles.add(_);if(this.opaqueMaterial=new vt({map:m,vertexColors:!0,alphaTest:.45,alphaToCoverage:!0}),this.transparentMaterial=new vt({map:m,vertexColors:!0,transparent:!0,opacity:.72,alphaTest:.02,depthWrite:!1}),oi(this.opaqueMaterial,m,p.maxFootprint),oi(this.transparentMaterial,m,p.maxFootprint),this.entityRenderer=new CM({image:m.image,texture:m,atlas:p.atlas,maxFootprint:p.maxFootprint,palette:o,fontFamily:c,maxTextureSize:this.renderer.capabilities.maxTextureSize},()=>{this.renderDirty=!0},M=>this.callbacks.onError?.(M)),this.scene.add(this.entityRenderer.group),l&&(this.savedEntities=new DM(l,{texture:m,atlas:p.atlas,palette:o,fontFamily:c},()=>{this.renderDirty=!0},M=>this.callbacks.onError?.(M)),this.scene.add(this.savedEntities.group)),await new Promise((M,v)=>{this.workerReady=M,this.workerFailure=v,this.post({type:"init",palette:o,atlas:p.atlas})}),this.disposed)return;this.initialized=!0,this.renderDirty=!0,this.updateStreaming(!0)}catch(e){if(this.initController.abort(),this.disposed||e instanceof DOMException&&e.name==="AbortError")return;const t=e instanceof Error?e.message:String(e);throw this.callbacks.onError?.(t),e}}post(e,t=[]){this.worker.postMessage(e,t)}async loadSignFont(e){const t='"Microsoft YaHei","PingFang SC","Noto Sans CJK SC",sans-serif',i=this.manifest.blockEntityFont;if(!i)return t;const s=await rn(Nn(i.file),{signal:e});if(!s.ok)throw new Error(`告示牌字体加载失败（${s.status}）`);const r=await s.arrayBuffer(),o=await new FontFace(i.family,r).load();return this.disposed||e.aborted?t:(document.fonts.add(o),this.signFont=o,`${JSON.stringify(i.family)},${t}`)}reindex(){return C_(this.streamingContext)}resize(){const e=Math.max(1,this.host.clientWidth),t=Math.max(1,this.host.clientHeight),i=jh(e,t,devicePixelRatio,this.performanceMode);this.renderer.getPixelRatio()!==i&&this.renderer.setPixelRatio(i),this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderDirty=!0}setPerformanceMode(e){_y(e,this.performanceMode,this.disposed,()=>{this.performanceMode=e},()=>this.resize())}setMemoryAutoCamera(e){this.disposed||gy(this.memoryCameraContext,e)}bindInput(){return K0(this.inputContext)}look(e,t){this.yaw-=e*.0035,this.pitch=Ot.clamp(this.pitch-t*.0035,-Math.PI/2+.025,Math.PI/2-.025),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ")}requestPointerLock(){if(this.mode==="orbit"||!this.active||this.containerState.status!=="closed"||typeof this.renderer.domElement.requestPointerLock!="function")return;const e=this.renderer.domElement.requestPointerLock();e&&typeof e.catch=="function"&&e.catch(()=>{})}setMode(e){if(e===this.mode)return;const t=this.mode;if(this.closeContainer(),this.setContainerTarget(null),this.containerTargetPosition.x=1/0,this.containerPickRevision++,this.keys.clear(),this.touchMove.set(0,0,0),this.resetTouristActions(),this.dragging=void 0,document.pointerLockElement===this.renderer.domElement&&document.exitPointerLock(),e!=="orbit")this.camera.rotation.reorder("YXZ"),this.yaw=this.camera.rotation.y,this.pitch=this.camera.rotation.x,e==="walk"&&this.enterTouristMode(t,this.controls.target,this.camera.position);else{const s=this.camera.getWorldDirection(new P);this.controls.target.copy(this.camera.position).addScaledVector(s,28)}this.mode=e,this.controls.enabled=e==="orbit"&&this.active&&this.containerState.status==="closed"&&!this.containerPreparing,e==="walk"&&this.refreshTouristCollisionWindow();const i=e==="walk"?"三维观光地图，WASD行走，空格跳跃，Control疾跑，E使用":e==="fly"?"三维观察者地图，拖动转头，WASD移动，空格上升，Shift下降":"三维地图，拖动旋转，双指平移和缩放";this.renderer.domElement.setAttribute("aria-label",i),this.callbacks.onMode?.(e),this.updateStreaming(!0)}setActive(e){return Z0(this.inputContext,e)}setDimension(e){const t=this.manifest.dimensions.find(i=>i.id===e);if(!(!t||t===this.dimension)){this.stopIslandMechanism(),this.closeContainer(),this.setContainerTarget(null),this.containerPickRevision++,this.generation++,this.resetMemoryContinuity(),this.memoryFollow=void 0,this.clearMemoryPreload(),this.clearMemoryPlayers();for(const i of this.regions.values())i.controller?.abort();this.regions.clear(),this.entityRenderer?.clear(),this.savedEntities?.clear(),this.loading=0,this.pendingMesh=void 0,this.queuedMesh=void 0,this.pendingMemoryRevision=void 0,this.memoryAcknowledgedRevision=-1,this.dirtyMeshes.clear(),this.memoryStaleMeshes.clear(),this.desired.clear(),this.streamingDesired.clear(),this.streamingCenter="",this.streamingSignature="",this.clearBlockInteractions();for(const i of this.meshes.keys())this.removeMesh(i);this.memoryRouteChunkRevisions?.clear(),this.post({type:"reset"}),this.dimension=t,this.reindex(),this.memorySource&&(this.memoryRevision++,this.configureMemoryWorker()),this.mode==="orbit"?(this.controls.target.set(t.spawn.x,t.spawn.y,t.spawn.z),this.camera.position.set(t.spawn.x+38,t.spawn.y+38,t.spawn.z+48),this.controls.update()):this.mode==="walk"?this.teleportTourist(t.spawn):(this.camera.position.set(t.spawn.x,t.spawn.y+7,t.spawn.z),this.pitch=-.22,this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ")),this.updateStreaming(!0),this.emitPosition()}}setLocation(e,t,i){if([e,t,i].every(Number.isFinite)){if(this.mode==="orbit"){const s=this.camera.position.clone().sub(this.controls.target);this.controls.target.set(e,t,i),this.camera.position.copy(this.controls.target).add(s),this.controls.update()}else this.mode==="walk"?this.teleportTourist({x:e,y:t,z:i}):this.camera.position.set(e,t,i);this.updateStreaming(!0),this.emitPosition()}}setDistance(e){if(!Number.isFinite(e))return;const t=Ot.clamp(Math.round(e),Kh,Zh);t!==this.distance&&(this.distance=t,this.updateFog(),this.updateStreaming(!0))}getPosition(){return dn(this.camera.position)}getFocus(){return this.mode==="orbit"?dn(this.controls.target):dn(this.camera.position.clone().addScaledVector(this.camera.getWorldDirection(new P),8))}getMemoryGeometryRevision(){return this.memoryRevision}getMemoryTerrainRevision(){return this.memoryTerrainRevision}getMemoryRouteRevision(e){const t=[...new Set(e)].sort();return`${this.generation}:${this.dimension.id}:${t.map(i=>`${i}=${this.memoryRouteChunkRevisions?.get(i)||0}`).join(";")}`}invalidateMemoryRouteChunk(e){const t=this.memoryRouteChunkRevisions??=new Map;t.set(e,(t.get(e)||0)+1)}getCachedRegionKeys(){return[...this.regions.keys()]}getViewDistance(){return this.distance}setContainerCallbacks(e={}){return k0(this.containerContext,e)}getContainerState(){return O0(this.containerContext)}getContainerAssets(){return z0(this.containerContext)}setContainerTarget(e){return B0(this.containerContext,e)}setHudVisible(e){this.hudVisible=e,e||this.stopIslandMechanism(),this.updateIslandMechanismPrompt(),this.renderDirty=!0}frameIslandMechanism(e){return S_(this.presentationContext,e)}stopIslandMechanism(){return x_(this.presentationContext)}updateIslandMechanismPrompt(){return E_(this.presentationContext)}updateContainerOutline(){return G0(this.containerContext)}setContainerState(e){return V0(this.containerContext,e)}closeContainer(){return H0(this.containerContext)}async openTargetContainer(){return W0(this.containerContext)}canOpenInventory(){return X0(this.containerContext)}async openContainerAt(e,t=!1){return q0(this.containerContext,e,t)}async refreshContainerTarget(){return Y0(this.containerContext)}async pickContainer(e){return $0(this.containerContext,e)}async loadContainer(e){return j0(this.containerContext,e)}inspectMemoryBlock(e,t,i){if(this.disposed)return Promise.reject(new Error("地图已关闭"));const s=++this.memoryInspectionId;return new Promise((r,o)=>{const a=setTimeout(()=>{this.memoryInspections.delete(s),o(new Error("方块读取超时"))},1e4);this.memoryInspections.set(s,{resolve:c=>{clearTimeout(a),r(c)},reject:c=>{clearTimeout(a),o(c)}}),this.post({type:"memory-inspect",x:Math.floor(e),y:Math.floor(t),z:Math.floor(i),requestId:s,generation:this.generation})})}hasWorldPosition(e,t){const i=this.manifest.dimensions.find(a=>a.id===e);if(!i)return!1;const s=i.regions.find(a=>a.x===Math.floor(t.x/64)&&a.z===Math.floor(t.z/64)),r=(Math.floor(t.x/16)%4+4)%4,o=(Math.floor(t.z/16)%4+4)%4;return!!s&&!!(s.chunks&1<<r*4+o)}async setMemorySource(e,t={}){return Y_(this.terrainContext,e,t)}resetMemoryContinuity(){return $_(this.terrainContext)}setMemoryTime(e,t=!1){return j_(this.terrainContext,e,t)}memoryUpdatePending(){return K_(this.terrainContext)}flushMemoryTime(){return Z_(this.terrainContext)}commitMemoryTime(e){return J_(this.terrainContext,e)}configureMemoryWorker(){return Q_(this.terrainContext)}setMemoryPreload(e,t=!1){return eM(this.terrainContext,e,t)}getMemoryBufferStatus(e){return tM(this.terrainContext,e)}getMemoryPresentationStatus(e){return nM(this.terrainContext,e)}memoryRequiredChunks(e){return iM(this.terrainContext,e)}memoryStreamingPriority(e,t){return sM(this.terrainContext,e,t)}clearMemoryPreload(){return rM(this.terrainContext)}setMemoryReplayClock(e,t){(!Number.isFinite(this.memoryReplayClock)||e<this.memoryReplayClock)&&(this.memoryPoseReset=!0),this.memoryReplayClock=e,this.memoryInteractions.setReplayClock(e,t),this.memoryContainers.setReplayClock(e,t)}setMemoryPlayback(e){e||this.stopIslandMechanism(),this.memoryPlaying=e,this.memoryInteractions.setPlaying(e),this.memoryContainers.setPlaying(e)}getMemoryActionKind(e){return this.memoryInteractions.actionKindFor(e)}invalidateMemoryContainerGeometry(){this.memoryContainerGeometryRevision++,this.memoryTerrainRevision++,this.invalidateMemoryContainerRouteChunks(),this.memoryGroundCache.clear(),this.memoryStanceCache.clear(),this.memoryReachCache.clear(),this.memoryCameraKey=""}invalidateMemoryContainerRouteChunks(){const e=this.memoryContainers.takeChangedChunks?.();for(const t of e??this.meshes.keys())this.invalidateMemoryRouteChunk(t)}resetMemoryEffects(){return __(this.presentationContext)}showMemoryEvent(e,t,i="",s,r,o,a=!0,c=!1){this.presentMemoryEvent(e,t,i,s,r,o,a,c?"particles":"all")}showMemoryContainerEvent(e,t,i="",s,r,o,a=!1){this.presentMemoryEvent(e,t,i,s,r,o,!0,a?"restore":"container")}presentMemoryEvent(e,t,i,s,r,o,a,c){return M_(this.presentationContext,e,t,i,s,r,o,a,c)}async updateIslandMachines(){return v_(this.presentationContext)}memoryCanReach(e,t){return sy(this.spatialContext,e,t)}findMemoryGround(e,t,i){return ry(this.spatialContext,e,t,i)}isMemoryBodyClear(e,t,i){return oy(this.spatialContext,e,t,i)}resolveMemoryPose(e){return ay(this.spatialContext,e)}setMemoryPlayers(e,t=this.memoryTime){return b_(this.presentationContext,e,t)}updateMemoryCameraVisibility(){return py(this.memoryCameraContext)}followMemoryPlayer(e){return yy(this.memoryCameraContext,e)}removeMemoryPlayer(e,t){this.memoryInteractions.forgetPlayer(e),this.memoryPoses.delete(e),t.traverse(i=>{if(i instanceof Yn){const s=i.material;s.map?.dispose(),s.dispose()}}),this.scene.remove(t),this.memoryPlayers.delete(e)}clearMemoryPlayers(){for(const[e,t]of this.memoryPlayers)this.removeMemoryPlayer(e,t);this.resetMemoryEffects()}getDiagnostics(){const e=this.memorySource?{time:this.memoryTime,revision:this.memoryRevision,acknowledgedRevision:this.memoryAcknowledgedRevision,continuous:this.memoryContinuous,queuedTime:this.memoryQueuedTime,updating:this.memoryAcknowledgedRevision!==this.memoryRevision||this.memoryStaleMeshes.size>0||this.memoryQueuedTime!==void 0,estimated:this.memoryEstimated,regions:this.memoryLoadedRegions,preloadWindows:this.memoryPreloadCenters.length,preloadedChunks:this.streamingDesired.size-this.desired.size,buffer:this.getMemoryBufferStatus(),presentation:this.getMemoryPresentationStatus(),interactions:this.memoryInteractions.diagnostics(),containers:this.memoryContainers.diagnostics(),avatars:[...this.memoryPoses.values()].map(r=>({player:r.player,x:r.x,y:r.y,z:r.z,moving:r.moving,climbing:r.climbing,swimming:r.swimming,visible:this.memoryPlayers.get(r.player)?.visible,yaw:this.memoryPlayers.get(r.player)?.rotation.y,targetYaw:r.yaw,actionTime:r.actionTime,actionTarget:r.actionTarget}))}:void 0,t=this.memoryFollow?{requestedOffset:this.memoryRequestedOffset&&dn(this.memoryRequestedOffset),appliedOffset:this.memoryAppliedOffset&&dn(this.memoryAppliedOffset),target:dn(this.controls.target),panOffset:dn(this.memoryPanOffset),userAdjusted:this.orbitUserAdjusted,initialViewPending:this.memoryInitialViewPending,safeDistance:this.memoryCameraSafeDistance,defaultRecoveries:this.memoryDefaultRecoveries,defaultReframe:this.memoryDefaultReframe&&dn(this.memoryDefaultReframe)}:void 0;let i=0,s=0;for(const r of this.meshes.values())r.traverse(o=>{if(o instanceof we){const a=o.geometry;i+=(a.index?.count||a.getAttribute("position").count)/3;for(const c of Object.values(a.attributes))s+=c.array.byteLength;s+=a.index?.array.byteLength||0}});return{performanceMode:this.performanceMode,queuedMeshes:this.queuedMesh?1:0,loadingRegions:this.loading,cameraPosition:dn(this.camera.position),cameraTarget:dn(this.controls.target),cameraFov:this.camera.fov,islandMachines:this.islandMachines.diagnostics(),mechanism:this.islandMechanism?.diagnostics(),containerOutline:{visible:this.containerOutline.visible,position:this.containerTarget?{x:this.containerTarget.x,y:this.containerTarget.y,z:this.containerTarget.z}:null,bounds:this.containerTarget?.bounds||null},memory:e&&{...e,camera:t},cachedRegions:this.regions.size,cachedRegionKeys:[...this.regions.keys()],meshes:this.meshes.size,meshKeys:[...this.meshes.keys()],workers:this.disposed?0:1,triangles:i,geometryBytes:s,pending:this.desired.size-[...this.desired.keys()].filter(r=>this.meshReady(r)).length,radius:this.distance,fetchedBytes:this.bytes,renderer:"voxel",renderCalls:this.renderer.info.render.calls,framesRendered:this.framesRendered,textureCount:this.renderer.info.memory.textures,pixelRatio:this.renderer.getPixelRatio(),yaw:this.yaw,pitch:this.pitch,mode:this.mode,tourist:this.getTouristPhysicsDiagnostics(),cameraDirection:dn(this.camera.getWorldDirection(new P)),blockInteraction:this.getBlockInteractionDiagnostics(),...this.entityRenderer?.getDiagnostics(),...this.savedEntities?.getDiagnostics(),containerState:this.containerState.status,containerTarget:this.containerTarget?{x:this.containerTarget.x,y:this.containerTarget.y,z:this.containerTarget.z,type:this.containerTarget.type,available:this.containerTarget.available}:null,containerRequests:this.containerRequests,containerCachedRegions:this.containerRecords.size,containerOpen:this.containerState.status!=="closed",containerPreparing:this.containerPreparing}}zoom(e){if(!(!this.active||this.containerState.status!=="closed"||this.containerPreparing)){if(this.mode==="orbit"){this.orbitUserAdjusted=!0,this.memoryFollow||(this.memoryRequestedOffset=void 0,this.memoryPanOffset.set(0,0,0));const t=this.camera.position.clone().sub(this.controls.target),i=Ot.clamp(t.length()/Math.max(.1,e),this.controls.minDistance,this.controls.maxDistance);t.setLength(i),this.camera.position.copy(this.controls.target).add(t),this.controls.update()}else this.mode==="walk"?this.zoomTourist(e):this.camera.position.addScaledVector(this.camera.getWorldDirection(new P),(e-1)*12);this.updateStreaming(!0)}}move(e){if(!this.active||this.containerState.status!=="closed"||this.containerPreparing)return;if(this.mode==="walk"){this.moveTourist(e);return}if(this.mode!=="fly")return;const t=(...c)=>c.some(l=>this.keys.has(l));let i=(t("KeyD","ArrowRight")?1:0)-(t("KeyA","ArrowLeft")?1:0)+this.touchMove.x,s=(t("KeyS","ArrowDown")?1:0)-(t("KeyW","ArrowUp")?1:0)+this.touchMove.z,r=(t("Space")?1:0)-(t("ShiftLeft","ShiftRight","KeyQ")?1:0)+this.touchMove.y;const o=Math.hypot(i,r,s);if(!o)return;o>1&&(i/=o,r/=o,s/=o);const a=e*(t("ControlLeft","ControlRight")?48:16);this.camera.position.x+=(Math.cos(this.yaw)*i+Math.sin(this.yaw)*s)*a,this.camera.position.z+=(-Math.sin(this.yaw)*i+Math.cos(this.yaw)*s)*a,this.camera.position.y=Ot.clamp(this.camera.position.y+r*a,this.dimension.bounds.minY-24,this.dimension.bounds.maxY+180)}frame(e){if(this.disposed)return;const t=Math.max(0,(e-(this.lastFrame||e))/1e3),i=Math.min(.05,t);if(this.lastFrame=e,this.active&&(!this.memorySource||this.memoryPlaying)&&this.islandMachines.update(i)&&(this.renderDirty=!0),this.active&&e-this.lastMachineCheck>800&&(this.lastMachineCheck=e,this.updateIslandMachines()),this.active&&this.memoryPlaying){this.memoryInteractions.update(Math.min(.25,t))&&(this.renderDirty=!0),this.memoryContainers.update(Math.min(.25,t))&&(this.invalidateMemoryContainerGeometry(),this.renderDirty=!0);for(const[s,r]of this.memoryPlayers){const o=this.memoryPoses.get(s);if(o){const a=r.rotation.y;r.rotation.y=My(a,o.yaw,i),this.memoryInteractions.animateAvatar(s,r,!!o.moving,!!o.climbing,!!o.swimming),(o.moving||o.swimming||r.rotation.y!==a)&&(this.renderDirty=!0)}}}this.active&&this.islandMechanism?.update(t)&&(this.renderDirty=!0),this.move(this.mode==="walk"?Math.min(Nh,t):i),this.mode==="orbit"&&this.containerState.status==="closed"&&!this.containerPreparing&&this.controls.update(),this.updateFog(),(this.streamingRequested||e-this.lastStream>220)&&(this.streamingRequested=!1,this.lastStream=e,this.updateStreaming()),this.active&&this.queuedMesh&&this.applyPendingMesh(),e-this.lastPosition>150&&(this.lastPosition=e,this.emitPosition(),this.updateIslandMechanismPrompt()),this.updateContainerOutline(),this.active&&this.mode!=="orbit"&&this.containerState.status==="closed"&&!this.containerPreparing&&e-this.containerTargetChecked>350&&!this.containerPicking&&(this.camera.position.distanceToSquared(this.containerTargetPosition)>1e-8||1-Math.abs(this.camera.quaternion.dot(this.containerTargetQuaternion))>1e-8)&&(this.containerTargetChecked=e,this.refreshContainerTarget()),(this.camera.position.distanceToSquared(this.renderedPosition)>1e-12||1-Math.abs(this.camera.quaternion.dot(this.renderedQuaternion))>1e-12)&&(this.renderDirty=!0),this.active&&this.renderDirty&&(this.renderer.render(this.scene,this.camera),this.renderedPosition.copy(this.camera.position),this.renderedQuaternion.copy(this.camera.quaternion),this.renderDirty=!1,this.framesRendered++),this.animation=requestAnimationFrame(s=>this.frame(s))}emitPosition(){this.callbacks.onPosition?.(this.getLocation())}updateFog(){if(!(this.scene.fog instanceof js))return;const e=this.mode==="orbit"?this.camera.position.distanceTo(this.controls.target)*.7:0,t=this.distance*12+e,i=this.distance*16+18+e;(this.scene.fog.near!==t||this.scene.fog.far!==i)&&(this.scene.fog.near=t,this.scene.fog.far=i,this.renderDirty=!0)}chunkWindow(e,t,i=0,s=this.distance){return U_(this.streamingContext,e,t,i,s)}updateStreaming(e=!1){return N_(this.streamingContext,e)}async fetchRegion(e,t,i=!0){return F_(this.streamingContext,e,t,i)}scheduleMesh(){return k_(this.streamingContext)}onWorker(e){if(!this.handleBlockInteraction(e))return O_(this.streamingContext,e)}applyPendingMesh(){return z_(this.streamingContext)}addGeometry(e,t,i){return B_(this.streamingContext,e,t,i)}syncEntityOverlays(){return G_(this.streamingContext)}invalidateNeighbours(e,t=!1){return V_(this.streamingContext,e,t)}invalidateMeshKeys(e,t=!1){return H_(this.streamingContext,e,t)}meshReady(e){return W_(this.streamingContext,e)}removeMesh(e,t=!1){return X_(this.streamingContext,e,t)}emitStatus(e=!1){return q_(this.streamingContext,e)}dispose(){if(!this.disposed){this.clearBlockInteractions(),this.closeContainer(),this.setContainerTarget(null),this.containerPickRevision++,this.containerAssets=void 0,this.disposed=!0,this.queuedMesh=void 0,this.initController.abort(),cancelAnimationFrame(this.animation);for(const e of this.regions.values())e.controller?.abort();this.regions.clear(),this.clearMemoryPreload(),this.desired.clear(),this.streamingDesired.clear(),this.resizeObserver.disconnect(),this.disposers.forEach(e=>e()),this.controls.dispose(),this.worker.terminate(),this.workerReady?.(),document.pointerLockElement===this.renderer.domElement&&document.exitPointerLock();for(const e of this.meshes.keys())this.removeMesh(e);this.opaqueMaterial?.dispose(),this.transparentMaterial?.dispose(),this.atlasTexture?.dispose(),this.entityRenderer?.dispose(),this.savedEntities?.dispose(),this.containerOutline.geometry.dispose(),this.containerOutline.material.dispose(),this.clearMemoryPlayers(),this.memoryInteractions.dispose(),this.memoryContainers.dispose(),this.islandMechanism?.dispose(),this.islandMechanismPrompt?.remove(),this.islandGenerators=[],this.islandMachines.dispose(),this.memoryPlayerGeometry.dispose(),this.memoryPlayerMaterial.dispose(),this.memorySkinMaterial.dispose(),this.memoryPantsMaterial.dispose();for(const e of this.memoryInspections.values())e.reject(new Error("地图已关闭"));this.memoryInspections.clear(),this.signFont&&document.fonts.delete(this.signFont),this.renderer.dispose(),this.renderer.domElement.remove()}}}export{YM as Viewer3D};
