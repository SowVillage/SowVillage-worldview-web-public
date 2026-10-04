import{d as pi,w as Pn,s as yh,c as El,a as Fo,r as ri,b as Ja,i as xh,o as Mh,e as bh,f as Sh,M as Eh,g as wh}from"./index-jf-5yS2b.js";const Ca="180",es={ROTATE:0,DOLLY:1,PAN:2},Zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Th=0,Qa=1,Ah=2,wl=1,Rh=2,Dn=3,Mn=0,Vt=1,It=2,Zn=0,ts=1,ec=2,tc=3,nc=4,Ch=5,mi=100,Ph=101,Dh=102,Ih=103,Lh=104,Uh=200,Nh=201,Fh=202,Oh=203,Oo=204,ko=205,kh=206,zh=207,Bh=208,Gh=209,Hh=210,Vh=211,Wh=212,Xh=213,qh=214,zo=0,Bo=1,Go=2,ss=3,Ho=4,Vo=5,Wo=6,Xo=7,Pa=0,Yh=1,$h=2,Jn=0,jh=1,Kh=2,Zh=3,Jh=4,Qh=5,eu=6,tu=7,Tl=300,rs=301,os=302,qo=303,Yo=304,Gr=306,$o=1e3,vi=1001,jo=1002,Pt=1003,nu=1004,yi=1005,rn=1006,qr=1007,Ln=1008,bn=1009,Al=1010,Rl=1011,Is=1012,Da=1013,bi=1014,vn=1015,Vs=1016,Ia=1017,La=1018,Ls=1020,Cl=35902,Pl=35899,Dl=1021,Il=1022,dn=1023,Us=1026,Ns=1027,Ua=1028,Na=1029,Ll=1030,Fa=1031,Oa=1033,Ar=33776,Rr=33777,Cr=33778,Pr=33779,Ko=35840,Zo=35841,Jo=35842,Qo=35843,ea=36196,ta=37492,na=37496,ia=37808,sa=37809,ra=37810,oa=37811,aa=37812,ca=37813,la=37814,ha=37815,ua=37816,da=37817,fa=37818,pa=37819,ma=37820,ga=37821,_a=36492,va=36494,ya=36495,xa=36283,Ma=36284,ba=36285,Sa=36286,iu=3200,su=3201,Ul=0,ru=1,Yn="",vt="srgb",as="srgb-linear",Ir="linear",Qe="srgb",Ri=7680,ic=519,ou=512,au=513,cu=514,Nl=515,lu=516,hu=517,uu=518,du=519,Ea=35044,sc="300 es",yn=2e3,Lr=2001;class Ei{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rc=1234567;const ns=Math.PI/180,Fs=180/Math.PI;function Nn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[s&255]+Nt[s>>8&255]+Nt[s>>16&255]+Nt[s>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function ze(s,e,t){return Math.max(e,Math.min(t,s))}function ka(s,e){return(s%e+e)%e}function fu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function pu(s,e,t){return s!==e?(t-s)/(e-s):0}function As(s,e,t){return(1-t)*s+t*e}function mu(s,e,t,n){return As(s,e,1-Math.exp(-t*n))}function gu(s,e=1){return e-Math.abs(ka(s,e*2)-e)}function _u(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function vu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function yu(s,e){return s+Math.floor(Math.random()*(e-s+1))}function xu(s,e){return s+Math.random()*(e-s)}function Mu(s){return s*(.5-Math.random())}function bu(s){s!==void 0&&(rc=s);let e=rc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Su(s){return s*ns}function Eu(s){return s*Fs}function wu(s){return(s&s-1)===0&&s!==0}function Tu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Au(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ru(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*d,c*u,a*l);break;case"YZY":s.set(c*u,a*h,c*d,a*l);break;case"ZXZ":s.set(c*d,c*u,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ke(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const nn={DEG2RAD:ns,RAD2DEG:Fs,generateUUID:Nn,clamp:ze,euclideanModulo:ka,mapLinear:fu,inverseLerp:pu,lerp:As,damp:mu,pingpong:gu,smoothstep:_u,smootherstep:vu,randInt:yu,randFloat:xu,randFloatSpread:Mu,seededRandom:bu,degToRad:Su,radToDeg:Eu,isPowerOfTwo:wu,ceilPowerOfTwo:Tu,floorPowerOfTwo:Au,setQuaternionFromProperEuler:Ru,normalize:Ke,denormalize:un};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class On{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==u||l!==f||h!==g){let m=1-a;const p=c*u+l*f+h*g+d*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const S=Math.sqrt(y),T=Math.atan2(S,p*v);m=Math.sin(m*T)/S,a=Math.sin(a*T)/S}const x=a*v;if(c=c*m+u*x,l=l*m+f*x,h=h*m+g*x,d=d*m+_*x,m===1-a){const S=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=S,l*=S,h*=S,d*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+c*f-l*u,e[t+1]=c*g+h*u+l*d-a*f,e[t+2]=l*g+h*f+a*u-c*d,e[t+3]=h*g-a*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(r/2),u=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=i+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yr.copy(this).projectOnVector(e),this.sub(Yr)}reflect(e){return this.sub(Yr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yr=new C,oc=new On;class Ie{constructor(e,t,n,i,r,o,a,c,l){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],y=i[4],x=i[7],S=i[2],T=i[5],R=i[8];return r[0]=o*_+a*v+c*S,r[3]=o*m+a*y+c*T,r[6]=o*p+a*x+c*R,r[1]=l*_+h*v+d*S,r[4]=l*m+h*y+d*T,r[7]=l*p+h*x+d*R,r[2]=u*_+f*v+g*S,r[5]=u*m+f*y+g*T,r[8]=u*p+f*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=u*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply($r.makeScale(e,t)),this}rotate(e){return this.premultiply($r.makeRotation(-e)),this}translate(e,t){return this.premultiply($r.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $r=new Ie;function Fl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Os(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Cu(){const s=Os("canvas");return s.style.display="block",s}const ac={};function ks(s){s in ac||(ac[s]=!0,console.warn(s))}function Pu(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const cc=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lc=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Du(){const s={enabled:!0,workingColorSpace:as,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Qe&&(i.r=Fn(i.r),i.g=Fn(i.g),i.b=Fn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Qe&&(i.r=is(i.r),i.g=is(i.g),i.b=is(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Yn?Ir:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ks("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ks("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[as]:{primaries:e,whitePoint:n,transfer:Ir,toXYZ:cc,fromXYZ:lc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:cc,fromXYZ:lc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),s}const qe=Du();function Fn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function is(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ci;class Iu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ci===void 0&&(Ci=Os("canvas")),Ci.width=e.width,Ci.height=e.height;const i=Ci.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ci}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Os("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Fn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fn(t[n]/255)*255):t[n]=Fn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lu=0;class za{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Nn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(jr(i[o].image)):r.push(jr(i[o]))}else r=jr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function jr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Iu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uu=0;const Kr=new C;class Mt extends Ei{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=vi,i=vi,r=rn,o=Ln,a=dn,c=bn,l=Mt.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Nn(),this.name="",this.source=new za(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kr).x}get height(){return this.source.getSize(Kr).y}get depth(){return this.source.getSize(Kr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $o:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $o:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=Tl;Mt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,n=0,i=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,x=(f+1)/2,S=(p+1)/2,T=(h+u)/4,R=(d+_)/4,D=(g+m)/4;return y>x&&y>S?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=T/n,r=R/n):x>S?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=T/i,r=D/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=R/r,i=D/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nu extends Ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Mt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new za(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends Nu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ol extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fu extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ot{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$s.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$s.copy(n.boundingBox)),$s.applyMatrix4(e.matrixWorld),this.union($s)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),js.subVectors(this.max,fs),Pi.subVectors(e.a,fs),Di.subVectors(e.b,fs),Ii.subVectors(e.c,fs),kn.subVectors(Di,Pi),zn.subVectors(Ii,Di),oi.subVectors(Pi,Ii);let t=[0,-kn.z,kn.y,0,-zn.z,zn.y,0,-oi.z,oi.y,kn.z,0,-kn.x,zn.z,0,-zn.x,oi.z,0,-oi.x,-kn.y,kn.x,0,-zn.y,zn.x,0,-oi.y,oi.x,0];return!Zr(t,Pi,Di,Ii,js)||(t=[1,0,0,0,1,0,0,0,1],!Zr(t,Pi,Di,Ii,js))?!1:(Ks.crossVectors(kn,zn),t=[Ks.x,Ks.y,Ks.z],Zr(t,Pi,Di,Ii,js))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const En=[new C,new C,new C,new C,new C,new C,new C,new C],an=new C,$s=new Ot,Pi=new C,Di=new C,Ii=new C,kn=new C,zn=new C,oi=new C,fs=new C,js=new C,Ks=new C,ai=new C;function Zr(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ai.fromArray(s,r);const a=i.x*Math.abs(ai.x)+i.y*Math.abs(ai.y)+i.z*Math.abs(ai.z),c=e.dot(ai),l=t.dot(ai),h=n.dot(ai);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Ou=new Ot,ps=new C,Jr=new C;class wi{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ou.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ps.subVectors(e,this.center);const t=ps.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ps,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ps.copy(e.center).add(Jr)),this.expandByPoint(ps.copy(e.center).sub(Jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const wn=new C,Qr=new C,Zs=new C,Bn=new C,eo=new C,Js=new C,to=new C;class Hr{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Qr.copy(e).add(t).multiplyScalar(.5),Zs.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(Qr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Zs),a=Bn.dot(this.direction),c=-Bn.dot(Zs),l=Bn.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Qr).addScaledVector(Zs,u),f}intersectSphere(e,t){wn.subVectors(e.center,this.origin);const n=wn.dot(this.direction),i=wn.dot(wn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,n,i,r){eo.subVectors(t,e),Js.subVectors(n,e),to.crossVectors(eo,Js);let o=this.direction.dot(to),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bn.subVectors(this.origin,e);const c=a*this.direction.dot(Js.crossVectors(Bn,Js));if(c<0)return null;const l=a*this.direction.dot(eo.cross(Bn));if(l<0||c+l>o)return null;const h=-a*Bn.dot(to);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,n,i,r,o,a,c,l,h,d,u,f,g,_,m){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,d,u,f,g,_,m)}set(e,t,n,i,r,o,a,c,l,h,d,u,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Li.setFromMatrixColumn(e,0).length(),r=1/Li.setFromMatrixColumn(e,1).length(),o=1/Li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=o*h,f=o*d,g=a*h,_=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=u-_*l,t[9]=-a*c,t[2]=_-u*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*h,f=c*d,g=l*h,_=l*d;t[0]=u+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*h,f=c*d,g=l*h,_=l*d;t[0]=u-_*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*h,f=o*d,g=a*h,_=a*d;t[0]=c*h,t[4]=g*l-f,t[8]=u*l+_,t[1]=c*d,t[5]=_*l+u,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+_,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ku,e,zu)}lookAt(e,t,n){const i=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Gn.crossVectors(n,$t),Gn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Gn.crossVectors(n,$t)),Gn.normalize(),Qs.crossVectors($t,Gn),i[0]=Gn.x,i[4]=Qs.x,i[8]=$t.x,i[1]=Gn.y,i[5]=Qs.y,i[9]=$t.y,i[2]=Gn.z,i[6]=Qs.z,i[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],y=n[7],x=n[11],S=n[15],T=i[0],R=i[4],D=i[8],E=i[12],w=i[1],I=i[5],O=i[9],k=i[13],V=i[2],W=i[6],G=i[10],j=i[14],H=i[3],se=i[7],ae=i[11],xe=i[15];return r[0]=o*T+a*w+c*V+l*H,r[4]=o*R+a*I+c*W+l*se,r[8]=o*D+a*O+c*G+l*ae,r[12]=o*E+a*k+c*j+l*xe,r[1]=h*T+d*w+u*V+f*H,r[5]=h*R+d*I+u*W+f*se,r[9]=h*D+d*O+u*G+f*ae,r[13]=h*E+d*k+u*j+f*xe,r[2]=g*T+_*w+m*V+p*H,r[6]=g*R+_*I+m*W+p*se,r[10]=g*D+_*O+m*G+p*ae,r[14]=g*E+_*k+m*j+p*xe,r[3]=v*T+y*w+x*V+S*H,r[7]=v*R+y*I+x*W+S*se,r[11]=v*D+y*O+x*G+S*ae,r[15]=v*E+y*k+x*j+S*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*d-i*l*d-r*a*u+n*l*u+i*a*f-n*c*f)+_*(+t*c*f-t*l*u+r*o*u-i*o*f+i*l*h-r*c*h)+m*(+t*l*d-t*a*f-r*o*d+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-t*c*d+t*a*u+i*o*d-n*o*u+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=d*m*l-_*u*l+_*c*f-a*m*f-d*c*p+a*u*p,y=g*u*l-h*m*l-g*c*f+o*m*f+h*c*p-o*u*p,x=h*_*l-g*d*l+g*a*f-o*_*f-h*a*p+o*d*p,S=g*d*c-h*_*c-g*a*u+o*_*u+h*a*m-o*d*m,T=t*v+n*y+i*x+r*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=v*R,e[1]=(_*u*r-d*m*r-_*i*f+n*m*f+d*i*p-n*u*p)*R,e[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*p+n*c*p)*R,e[3]=(d*c*r-a*u*r-d*i*l+n*u*l+a*i*f-n*c*f)*R,e[4]=y*R,e[5]=(h*m*r-g*u*r+g*i*f-t*m*f-h*i*p+t*u*p)*R,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*p-t*c*p)*R,e[7]=(o*u*r-h*c*r+h*i*l-t*u*l-o*i*f+t*c*f)*R,e[8]=x*R,e[9]=(g*d*r-h*_*r-g*n*f+t*_*f+h*n*p-t*d*p)*R,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*R,e[11]=(h*a*r-o*d*r-h*n*l+t*d*l+o*n*f-t*a*f)*R,e[12]=S*R,e[13]=(h*_*i-g*d*i+g*n*u-t*_*u-h*n*m+t*d*m)*R,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*R,e[15]=(o*d*i-h*a*i+h*n*c-t*d*c-o*n*u+t*a*u)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,g=r*d,_=o*h,m=o*d,p=a*d,v=c*l,y=c*h,x=c*d,S=n.x,T=n.y,R=n.z;return i[0]=(1-(_+p))*S,i[1]=(f+x)*S,i[2]=(g-y)*S,i[3]=0,i[4]=(f-x)*T,i[5]=(1-(u+p))*T,i[6]=(m+v)*T,i[7]=0,i[8]=(g+y)*R,i[9]=(m-v)*R,i[10]=(1-(u+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Li.set(i[0],i[1],i[2]).length();const o=Li.set(i[4],i[5],i[6]).length(),a=Li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],cn.copy(this);const l=1/r,h=1/o,d=1/a;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=d,cn.elements[9]*=d,cn.elements[10]*=d,t.setFromRotationMatrix(cn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=yn,c=!1){const l=this.elements,h=2*r/(t-e),d=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===yn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Lr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=yn,c=!1){const l=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===yn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Lr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Li=new C,cn=new it,ku=new C(0,0,0),zu=new C(1,1,1),Gn=new C,Qs=new C,$t=new C,hc=new it,uc=new On;class pn{constructor(e=0,t=0,n=0,i=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uc.setFromEuler(this),this.setFromQuaternion(uc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class Ba{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bu=0;const dc=new C,Ui=new On,Tn=new it,er=new C,ms=new C,Gu=new C,Hu=new On,fc=new C(1,0,0),pc=new C(0,1,0),mc=new C(0,0,1),gc={type:"added"},Vu={type:"removed"},Ni={type:"childadded",child:null},no={type:"childremoved",child:null};class Dt extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new C,t=new pn,n=new On,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new it},normalMatrix:{value:new Ie}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(fc,e)}rotateY(e){return this.rotateOnAxis(pc,e)}rotateZ(e){return this.rotateOnAxis(mc,e)}translateOnAxis(e,t){return dc.copy(e).applyQuaternion(this.quaternion),this.position.add(dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fc,e)}translateY(e){return this.translateOnAxis(pc,e)}translateZ(e){return this.translateOnAxis(mc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?er.copy(e):er.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(ms,er,this.up):Tn.lookAt(er,ms,this.up),this.quaternion.setFromRotationMatrix(Tn),i&&(Tn.extractRotation(i.matrixWorld),Ui.setFromRotationMatrix(Tn),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gc),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vu),no.child=e,this.dispatchEvent(no),no.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gc),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,Gu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Hu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Dt.DEFAULT_UP=new C(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new C,An=new C,io=new C,Rn=new C,Fi=new C,Oi=new C,_c=new C,so=new C,ro=new C,oo=new C,ao=new ft,co=new ft,lo=new ft;class Kt{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ln.subVectors(e,t),i.cross(ln);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ln.subVectors(i,t),An.subVectors(n,t),io.subVectors(e,t);const o=ln.dot(ln),a=ln.dot(An),c=ln.dot(io),l=An.dot(An),h=An.dot(io),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Rn.x),c.addScaledVector(o,Rn.y),c.addScaledVector(a,Rn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return ao.setScalar(0),co.setScalar(0),lo.setScalar(0),ao.fromBufferAttribute(e,t),co.fromBufferAttribute(e,n),lo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ao,r.x),o.addScaledVector(co,r.y),o.addScaledVector(lo,r.z),o}static isFrontFacing(e,t,n,i){return ln.subVectors(n,t),An.subVectors(e,t),ln.cross(An).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),An.subVectors(this.a,this.b),ln.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Kt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Fi.subVectors(i,n),Oi.subVectors(r,n),so.subVectors(e,n);const c=Fi.dot(so),l=Oi.dot(so);if(c<=0&&l<=0)return t.copy(n);ro.subVectors(e,i);const h=Fi.dot(ro),d=Oi.dot(ro);if(h>=0&&d<=h)return t.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Fi,o);oo.subVectors(e,r);const f=Fi.dot(oo),g=Oi.dot(oo);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Oi,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return _c.subVectors(r,i),a=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(_c,a);const p=1/(m+_+u);return o=_*p,a=u*p,t.copy(n).addScaledVector(Fi,o).addScaledVector(Oi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},tr={h:0,s:0,l:0};function ho(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=qe.workingColorSpace){if(e=ka(e,1),t=ze(t,0,1),n=ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ho(o,r,e+1/3),this.g=ho(o,r,e),this.b=ho(o,r,e-1/3)}return qe.colorSpaceToWorking(this,i),this}setStyle(e,t=vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const n=kl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}copyLinearToSRGB(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return qe.workingToColorSpace(Ft.copy(this),e),Math.round(ze(Ft.r*255,0,255))*65536+Math.round(ze(Ft.g*255,0,255))*256+Math.round(ze(Ft.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Ft.copy(this),t);const n=Ft.r,i=Ft.g,r=Ft.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=vt){qe.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,i=Ft.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(tr);const n=As(Hn.h,tr.h,t),i=As(Hn.s,tr.s,t),r=As(Hn.l,tr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new He;He.NAMES=kl;let Wu=0;class Ti extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=ts,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oo,this.blendDst=ko,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oo&&(n.blendSrc=this.blendSrc),this.blendDst!==ko&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cs extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new C,nr=new Ee;let Xu=0;class Lt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ea,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nr.fromBufferAttribute(this,t),nr.applyMatrix3(e),this.setXY(t,nr.x,nr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=un(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=un(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=un(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),r=Ke(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ea&&(e.usage=this.usage),e}}class zl extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Bl extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class je extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let qu=0;const en=new it,uo=new Dt,ki=new C,jt=new Ot,gs=new Ot,wt=new C;class kt extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fl(e)?Bl:zl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ie().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return uo.lookAt(e),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new je(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ot);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];gs.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(jt.min,gs.min),jt.expandByPoint(wt),wt.addVectors(jt.max,gs.max),jt.expandByPoint(wt)):(jt.expandByPoint(gs.min),jt.expandByPoint(gs.max))}jt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)wt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(wt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)wt.fromBufferAttribute(a,l),c&&(ki.fromBufferAttribute(e,l),wt.add(ki)),i=Math.max(i,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new C,c[D]=new C;const l=new C,h=new C,d=new C,u=new Ee,f=new Ee,g=new Ee,_=new C,m=new C;function p(D,E,w){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,w),u.fromBufferAttribute(r,D),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,w),h.sub(l),d.sub(l),f.sub(u),g.sub(u);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[D].add(_),a[E].add(_),a[w].add(_),c[D].add(m),c[E].add(m),c[w].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let D=0,E=v.length;D<E;++D){const w=v[D],I=w.start,O=w.count;for(let k=I,V=I+O;k<V;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new C,x=new C,S=new C,T=new C;function R(D){S.fromBufferAttribute(i,D),T.copy(S);const E=a[D];y.copy(E),y.sub(S.multiplyScalar(S.dot(E))).normalize(),x.crossVectors(T,E);const I=x.dot(c[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,I)}for(let D=0,E=v.length;D<E;++D){const w=v[D],I=w.start,O=w.count;for(let k=I,V=I+O;k<V;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new C,r=new C,o=new C,a=new C,c=new C,l=new C,h=new C,d=new C;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new Lt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vc=new it,ci=new Hr,ir=new wi,yc=new C,sr=new C,rr=new C,or=new C,fo=new C,ar=new C,xc=new C,cr=new C;class Pe extends Dt{constructor(e=new kt,t=new cs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){ar.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(fo.fromBufferAttribute(d,e),o?ar.addScaledVector(fo,h):ar.addScaledVector(fo.sub(t),h))}t.add(ar)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(r),ci.copy(e.ray).recast(e.near),!(ir.containsPoint(ci.origin)===!1&&(ci.intersectSphere(ir,yc)===null||ci.origin.distanceToSquared(yc)>(e.far-e.near)**2))&&(vc.copy(r).invert(),ci.copy(e.ray).applyMatrix4(vc),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,S=y;x<S;x+=3){const T=a.getX(x),R=a.getX(x+1),D=a.getX(x+2);i=lr(this,p,e,n,l,h,d,T,R,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);i=lr(this,o,e,n,l,h,d,v,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,S=y;x<S;x+=3){const T=x,R=x+1,D=x+2;i=lr(this,p,e,n,l,h,d,T,R,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,y=m+1,x=m+2;i=lr(this,o,e,n,l,h,d,v,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Yu(s,e,t,n,i,r,o,a){let c;if(e.side===Vt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Mn,a),c===null)return null;cr.copy(a),cr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(cr);return l<t.near||l>t.far?null:{distance:l,point:cr.clone(),object:s}}function lr(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,sr),s.getVertexPosition(c,rr),s.getVertexPosition(l,or);const h=Yu(s,e,t,n,sr,rr,or,xc);if(h){const d=new C;Kt.getBarycoord(xc,sr,rr,or,d),i&&(h.uv=Kt.getInterpolatedAttribute(i,a,c,l,d,new Ee)),r&&(h.uv1=Kt.getInterpolatedAttribute(r,a,c,l,d,new Ee)),o&&(h.normal=Kt.getInterpolatedAttribute(o,a,c,l,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new C,materialIndex:0};Kt.getNormal(sr,rr,or,u.normal),h.face=u,h.barycoord=d}return h}class on extends kt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(d,2));function g(_,m,p,v,y,x,S,T,R,D,E){const w=x/R,I=S/D,O=x/2,k=S/2,V=T/2,W=R+1,G=D+1;let j=0,H=0;const se=new C;for(let ae=0;ae<G;ae++){const xe=ae*I-k;for(let Be=0;Be<W;Be++){const st=Be*w-O;se[_]=st*v,se[m]=xe*y,se[p]=V,l.push(se.x,se.y,se.z),se[_]=0,se[m]=0,se[p]=T>0?1:-1,h.push(se.x,se.y,se.z),d.push(Be/R),d.push(1-ae/D),j+=1}}for(let ae=0;ae<D;ae++)for(let xe=0;xe<R;xe++){const Be=u+xe+W*ae,st=u+xe+W*(ae+1),at=u+(xe+1)+W*(ae+1),Ye=u+(xe+1)+W*ae;c.push(Be,st,Ye),c.push(st,at,Ye),H+=6}a.addGroup(f,H,E),f+=H,u+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ls(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Gt(s){const e={};for(let t=0;t<s.length;t++){const n=ls(s[t]);for(const i in n)e[i]=n[i]}return e}function $u(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Gl(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const ju={clone:ls,merge:Gt};var Ku=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ku,this.fragmentShader=Zu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ls(e.uniforms),this.uniformsGroups=$u(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Hl extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new C,Mc=new Ee,bc=new Ee;class sn extends Hl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z)}getViewSize(e,t){return this.getViewBounds(e,Mc,bc),t.subVectors(bc,Mc)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ns*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zi=-90,Bi=1;class Ju extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new sn(zi,Bi,e,t);i.layers=this.layers,this.add(i);const r=new sn(zi,Bi,e,t);r.layers=this.layers,this.add(r);const o=new sn(zi,Bi,e,t);o.layers=this.layers,this.add(o);const a=new sn(zi,Bi,e,t);a.layers=this.layers,this.add(a);const c=new sn(zi,Bi,e,t);c.layers=this.layers,this.add(c);const l=new sn(zi,Bi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Vl extends Mt{constructor(e=[],t=rs,n,i,r,o,a,c,l,h){super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qu extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Vl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new on(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:Zn});r.uniforms.tEquirect.value=t;const o=new Pe(i,r),a=t.minFilter;return t.minFilter===Ln&&(t.minFilter=rn),new Ju(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class Ze extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ed={type:"move"};class po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ed)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Rs{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=n}clone(){return new Rs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class td extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class nd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ea,this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bt=new C;class hs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),r=Ke(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ji extends Ti{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Gi;const _s=new C,Hi=new C,Vi=new C,Wi=new Ee,vs=new Ee,Wl=new it,hr=new C,ys=new C,ur=new C,Sc=new Ee,mo=new Ee,Ec=new Ee;class Wn extends Dt{constructor(e=new Ji){if(super(),this.isSprite=!0,this.type="Sprite",Gi===void 0){Gi=new kt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new nd(t,5);Gi.setIndex([0,1,2,0,2,3]),Gi.setAttribute("position",new hs(n,3,0,!1)),Gi.setAttribute("uv",new hs(n,2,3,!1))}this.geometry=Gi,this.material=e,this.center=new Ee(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hi.setFromMatrixScale(this.matrixWorld),Wl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hi.multiplyScalar(-Vi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;dr(hr.set(-.5,-.5,0),Vi,o,Hi,i,r),dr(ys.set(.5,-.5,0),Vi,o,Hi,i,r),dr(ur.set(.5,.5,0),Vi,o,Hi,i,r),Sc.set(0,0),mo.set(1,0),Ec.set(1,1);let a=e.ray.intersectTriangle(hr,ys,ur,!1,_s);if(a===null&&(dr(ys.set(-.5,.5,0),Vi,o,Hi,i,r),mo.set(0,1),a=e.ray.intersectTriangle(hr,ur,ys,!1,_s),a===null))return;const c=e.ray.origin.distanceTo(_s);c<e.near||c>e.far||t.push({distance:c,point:_s.clone(),uv:Kt.getInterpolation(_s,hr,ys,ur,Sc,mo,Ec,new Ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function dr(s,e,t,n,i,r){Wi.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(vs.x=r*Wi.x-i*Wi.y,vs.y=i*Wi.x+r*Wi.y):vs.copy(Wi),s.copy(e),s.x+=vs.x,s.y+=vs.y,s.applyMatrix4(Wl)}class id extends Mt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Pt,h=Pt,d,u){super(null,o,a,c,l,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wc extends Lt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Xi=new it,Tc=new it,fr=[],Ac=new Ot,sd=new it,xs=new Pe,Ms=new wi;class rd extends Pe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,sd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ot),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xi),Ac.copy(e.boundingBox).applyMatrix4(Xi),this.boundingBox.union(Ac)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xi),Ms.copy(e.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(Ms)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(xs.geometry=this.geometry,xs.material=this.material,xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(n),e.ray.intersectsSphere(Ms)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Xi),Tc.multiplyMatrices(n,Xi),xs.matrixWorld=Tc,xs.raycast(e,fr);for(let o=0,a=fr.length;o<a;o++){const c=fr[o];c.instanceId=r,c.object=this,t.push(c)}fr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new id(new Float32Array(i*this.count),i,this.count,Ua,vn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const go=new C,od=new C,ad=new Ie;class Xn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=go.subVectors(n,t).cross(od.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(go),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ad.getNormalMatrix(e),i=this.coplanarPoint(go).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new wi,cd=new Ee(.5,.5),pr=new C;class Ga{constructor(e=new Xn,t=new Xn,n=new Xn,i=new Xn,r=new Xn,o=new Xn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yn,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],v=r[12],y=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-o,f-h,p-g,S-v).normalize(),i[1].setComponents(l+o,f+h,p+g,S+v).normalize(),i[2].setComponents(l+a,f+d,p+_,S+y).normalize(),i[3].setComponents(l-a,f-d,p-_,S-y).normalize(),n)i[4].setComponents(c,u,m,x).normalize(),i[5].setComponents(l-c,f-u,p-m,S-x).normalize();else if(i[4].setComponents(l-c,f-u,p-m,S-x).normalize(),t===yn)i[5].setComponents(l+c,f+u,p+m,S+x).normalize();else if(t===Lr)i[5].setComponents(c,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){li.center.set(0,0,0);const t=cd.distanceTo(e.center);return li.radius=.7071067811865476+t,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(pr.x=i.normal.x>0?e.max.x:e.min.x,pr.y=i.normal.y>0?e.max.y:e.min.y,pr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(pr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xl extends Ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ur=new C,Nr=new C,Rc=new it,bs=new Hr,mr=new wi,_o=new C,Cc=new C;class ld extends Dt{constructor(e=new kt,t=new Xl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ur.fromBufferAttribute(t,i-1),Nr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ur.distanceTo(Nr);e.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(i),mr.radius+=r,e.ray.intersectsSphere(mr)===!1)return;Rc.copy(i).invert(),bs.copy(e.ray).applyMatrix4(Rc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),v=h.getX(_+1),y=gr(this,e,bs,c,p,v,_);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=gr(this,e,bs,c,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=gr(this,e,bs,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=gr(this,e,bs,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function gr(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Ur.fromBufferAttribute(a,i),Nr.fromBufferAttribute(a,r),t.distanceSqToSegment(Ur,Nr,_o,Cc)>n)return;_o.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(_o);if(!(l<e.near||l>e.far))return{distance:l,point:Cc.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Pc=new C,Dc=new C;class hd extends ld{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Pc.fromBufferAttribute(t,i),Dc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Pc.distanceTo(Dc);e.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ws extends Mt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ql extends Mt{constructor(e,t,n=bi,i,r,o,a=Pt,c=Pt,l,h=Us,d=1){if(h!==Us&&h!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new za(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Yl extends Mt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}const _r=new C,vr=new C,vo=new C,yr=new Kt;class ud extends kt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(ns*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:m,c:p}=yr;if(_.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),yr.getNormal(vo),d[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){const y=(v+1)%3,x=d[v],S=d[y],T=yr[h[v]],R=yr[h[y]],D=`${x}_${S}`,E=`${S}_${x}`;E in u&&u[E]?(vo.dot(u[E].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(R.x,R.y,R.z)),u[E]=null):D in u||(u[D]={index0:l[v],index1:l[y],normal:vo.clone()})}}for(const g in u)if(u[g]){const{index0:_,index1:m}=u[g];_r.fromBufferAttribute(a,_),vr.fromBufferAttribute(a,m),f.push(_r.x,_r.y,_r.z),f.push(vr.x,vr.y,vr.z)}this.setAttribute("position",new je(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Qn extends kt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=e/a,u=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*u-o;for(let y=0;y<l;y++){const x=y*d-r;g.push(x,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const y=v+l*p,x=v+l*(p+1),S=v+1+l*(p+1),T=v+1+l*p;f.push(y,x,T),f.push(x,S,T)}this.setIndex(f),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.width,e.height,e.widthSegments,e.heightSegments)}}class xt extends Ti{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ul,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dd extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fd extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yo={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class pd{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const md=new pd;class Ha{constructor(e){this.manager=e!==void 0?e:md,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ha.DEFAULT_MATERIAL_NAME="__DEFAULT";const qi=new WeakMap;class gd extends Ha{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=yo.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=qi.get(o);d===void 0&&(d=[],qi.set(o,d)),d.push({onLoad:t,onError:i})}return o}const a=Os("img");function c(){h(),t&&t(this);const d=qi.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}qi.delete(this),r.manager.itemEnd(e)}function l(d){h(),i&&i(d),yo.remove(`image:${e}`);const u=qi.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(d)}qi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),yo.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class _d extends Ha{constructor(e){super(e)}load(e,t,n,i){const r=new Mt,o=new gd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class $l extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const xo=new it,Ic=new C,Lc=new C;class vd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ga,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ic.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ic),Lc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lc),t.updateMatrixWorld(),xo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jl extends Hl{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class yd extends vd{constructor(){super(new jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xd extends $l{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new yd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Md extends $l{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class bd extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Uc=new it;class Nc{constructor(e,t,n=0,i=1/0){this.ray=new Hr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ba,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Uc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uc),this}intersectObject(e,t=!0,n=[]){return wa(e,this,n,t),n.sort(Fc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)wa(e[i],this,n,t);return n.sort(Fc),n}}function Fc(s,e){return s.distance-e.distance}function wa(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)wa(r[o],e,t,!0)}}class xi{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Sd extends Ei{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Oc(s,e,t,n){const i=Ed(n);switch(t){case Dl:return s*e;case Ua:return s*e/i.components*i.byteLength;case Na:return s*e/i.components*i.byteLength;case Ll:return s*e*2/i.components*i.byteLength;case Fa:return s*e*2/i.components*i.byteLength;case Il:return s*e*3/i.components*i.byteLength;case dn:return s*e*4/i.components*i.byteLength;case Oa:return s*e*4/i.components*i.byteLength;case Ar:case Rr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Cr:case Pr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zo:case Qo:return Math.max(s,16)*Math.max(e,8)/4;case Ko:case Jo:return Math.max(s,8)*Math.max(e,8)/2;case ea:case ta:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case na:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ia:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sa:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ra:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case oa:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case aa:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ca:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case la:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ha:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ua:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case da:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case fa:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case pa:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ma:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ga:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case _a:case va:case ya:return Math.ceil(s/4)*Math.ceil(e/4)*16;case xa:case Ma:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ba:case Sa:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ed(s){switch(s){case bn:case Al:return{byteLength:1,components:1};case Is:case Rl:case Vs:return{byteLength:2,components:1};case Ia:case La:return{byteLength:2,components:4};case bi:case Da:case vn:return{byteLength:4,components:1};case Cl:case Pl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ca}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ca);function Kl(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function wd(s){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(s.bindBuffer(l,a),d.length===0)s.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Td=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ad=`#ifdef USE_ALPHAHASH
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
#endif`,Rd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Id=`#ifdef USE_AOMAP
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
#endif`,Ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ud=`#ifdef USE_BATCHING
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
#endif`,Nd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zd=`#ifdef USE_IRIDESCENCE
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
#endif`,Bd=`#ifdef USE_BUMPMAP
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
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jd=`#define PI 3.141592653589793
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
} // validated`,Kd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zd=`vec3 transformedNormal = objectNormal;
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
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ef=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",sf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rf=`#ifdef USE_ENVMAP
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
#endif`,of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,af=`#ifdef USE_ENVMAP
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
#endif`,cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lf=`#ifdef USE_ENVMAP
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
#endif`,hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,df=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pf=`#ifdef USE_GRADIENTMAP
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
}`,mf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vf=`uniform bool receiveShadow;
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
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,xf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ef=`PhysicalMaterial material;
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
#endif`,wf=`struct PhysicalMaterial {
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
}`,Tf=`
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
#endif`,Af=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Df=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ff=`#if defined( USE_POINTS_UV )
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
#endif`,Of=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hf=`#ifdef USE_MORPHTARGETS
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
#endif`,Vf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$f=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jf=`#ifdef USE_NORMALMAP
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
#endif`,Kf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ep=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,np=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ap=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,up=`float getShadowMask() {
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
}`,dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fp=`#ifdef USE_SKINNING
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
#endif`,pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mp=`#ifdef USE_SKINNING
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
#endif`,gp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xp=`#ifdef USE_TRANSMISSION
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
#endif`,Mp=`#ifdef USE_TRANSMISSION
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ap=`uniform sampler2D t2D;
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
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ip=`#include <common>
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
}`,Lp=`#if DEPTH_PACKING == 3200
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
}`,Up=`#define DISTANCE
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
}`,Np=`#define DISTANCE
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`uniform float scale;
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
}`,zp=`uniform vec3 diffuse;
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
}`,Bp=`#include <common>
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Hp=`#define LAMBERT
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
}`,Vp=`#define LAMBERT
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
}`,Wp=`#define MATCAP
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
}`,Xp=`#define MATCAP
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
}`,qp=`#define NORMAL
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
}`,Yp=`#define NORMAL
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
}`,$p=`#define PHONG
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
}`,jp=`#define PHONG
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
}`,Kp=`#define STANDARD
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
}`,Zp=`#define STANDARD
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
}`,Jp=`#define TOON
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
}`,Qp=`#define TOON
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
}`,em=`uniform float size;
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
}`,tm=`uniform vec3 diffuse;
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
}`,nm=`#include <common>
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
}`,im=`uniform vec3 color;
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
}`,sm=`uniform float rotation;
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
}`,rm=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:Td,alphahash_pars_fragment:Ad,alphamap_fragment:Rd,alphamap_pars_fragment:Cd,alphatest_fragment:Pd,alphatest_pars_fragment:Dd,aomap_fragment:Id,aomap_pars_fragment:Ld,batching_pars_vertex:Ud,batching_vertex:Nd,begin_vertex:Fd,beginnormal_vertex:Od,bsdfs:kd,iridescence_fragment:zd,bumpmap_pars_fragment:Bd,clipping_planes_fragment:Gd,clipping_planes_pars_fragment:Hd,clipping_planes_pars_vertex:Vd,clipping_planes_vertex:Wd,color_fragment:Xd,color_pars_fragment:qd,color_pars_vertex:Yd,color_vertex:$d,common:jd,cube_uv_reflection_fragment:Kd,defaultnormal_vertex:Zd,displacementmap_pars_vertex:Jd,displacementmap_vertex:Qd,emissivemap_fragment:ef,emissivemap_pars_fragment:tf,colorspace_fragment:nf,colorspace_pars_fragment:sf,envmap_fragment:rf,envmap_common_pars_fragment:of,envmap_pars_fragment:af,envmap_pars_vertex:cf,envmap_physical_pars_fragment:yf,envmap_vertex:lf,fog_vertex:hf,fog_pars_vertex:uf,fog_fragment:df,fog_pars_fragment:ff,gradientmap_pars_fragment:pf,lightmap_pars_fragment:mf,lights_lambert_fragment:gf,lights_lambert_pars_fragment:_f,lights_pars_begin:vf,lights_toon_fragment:xf,lights_toon_pars_fragment:Mf,lights_phong_fragment:bf,lights_phong_pars_fragment:Sf,lights_physical_fragment:Ef,lights_physical_pars_fragment:wf,lights_fragment_begin:Tf,lights_fragment_maps:Af,lights_fragment_end:Rf,logdepthbuf_fragment:Cf,logdepthbuf_pars_fragment:Pf,logdepthbuf_pars_vertex:Df,logdepthbuf_vertex:If,map_fragment:Lf,map_pars_fragment:Uf,map_particle_fragment:Nf,map_particle_pars_fragment:Ff,metalnessmap_fragment:Of,metalnessmap_pars_fragment:kf,morphinstance_vertex:zf,morphcolor_vertex:Bf,morphnormal_vertex:Gf,morphtarget_pars_vertex:Hf,morphtarget_vertex:Vf,normal_fragment_begin:Wf,normal_fragment_maps:Xf,normal_pars_fragment:qf,normal_pars_vertex:Yf,normal_vertex:$f,normalmap_pars_fragment:jf,clearcoat_normal_fragment_begin:Kf,clearcoat_normal_fragment_maps:Zf,clearcoat_pars_fragment:Jf,iridescence_pars_fragment:Qf,opaque_fragment:ep,packing:tp,premultiplied_alpha_fragment:np,project_vertex:ip,dithering_fragment:sp,dithering_pars_fragment:rp,roughnessmap_fragment:op,roughnessmap_pars_fragment:ap,shadowmap_pars_fragment:cp,shadowmap_pars_vertex:lp,shadowmap_vertex:hp,shadowmask_pars_fragment:up,skinbase_vertex:dp,skinning_pars_vertex:fp,skinning_vertex:pp,skinnormal_vertex:mp,specularmap_fragment:gp,specularmap_pars_fragment:_p,tonemapping_fragment:vp,tonemapping_pars_fragment:yp,transmission_fragment:xp,transmission_pars_fragment:Mp,uv_pars_fragment:bp,uv_pars_vertex:Sp,uv_vertex:Ep,worldpos_vertex:wp,background_vert:Tp,background_frag:Ap,backgroundCube_vert:Rp,backgroundCube_frag:Cp,cube_vert:Pp,cube_frag:Dp,depth_vert:Ip,depth_frag:Lp,distanceRGBA_vert:Up,distanceRGBA_frag:Np,equirect_vert:Fp,equirect_frag:Op,linedashed_vert:kp,linedashed_frag:zp,meshbasic_vert:Bp,meshbasic_frag:Gp,meshlambert_vert:Hp,meshlambert_frag:Vp,meshmatcap_vert:Wp,meshmatcap_frag:Xp,meshnormal_vert:qp,meshnormal_frag:Yp,meshphong_vert:$p,meshphong_frag:jp,meshphysical_vert:Kp,meshphysical_frag:Zp,meshtoon_vert:Jp,meshtoon_frag:Qp,points_vert:em,points_frag:tm,shadow_vert:nm,shadow_frag:im,sprite_vert:sm,sprite_frag:rm},re={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},gn={basic:{uniforms:Gt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Gt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new He(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Gt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Gt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Gt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new He(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Gt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Gt([re.points,re.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Gt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Gt([re.common,re.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Gt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Gt([re.sprite,re.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Gt([re.common,re.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Gt([re.lights,re.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};gn.physical={uniforms:Gt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const xr={r:0,b:0,g:0},hi=new pn,om=new it;function am(s,e,t,n,i,r,o){const a=new He(0);let c=r===!0?0:1,l,h,d=null,u=0,f=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1;const S=g(y);S===null?p(a,c):S&&S.isColor&&(p(S,1),x=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===Gr)?(h===void 0&&(h=new Pe(new on(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:ls(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),hi.copy(x.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(om.makeRotationFromEuler(hi)),h.material.toneMapped=qe.getTransfer(S.colorSpace)!==Qe,(d!==S||u!==S.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=S,u=S.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Pe(new Qn(2,2),new ni({name:"BackgroundMaterial",uniforms:ls(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=qe.getTransfer(S.colorSpace)!==Qe,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||u!==S.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,d=S,u=S.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,x){y.getRGB(xr,Gl(s)),n.buffers.color.setClear(xr.r,xr.g,xr.b,x,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:m,dispose:v}}function cm(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(w,I,O,k,V){let W=!1;const G=d(k,O,I);r!==G&&(r=G,l(r.object)),W=f(w,k,O,V),W&&g(w,k,O,V),V!==null&&e.update(V,s.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,x(w,I,O,k),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return s.createVertexArray()}function l(w){return s.bindVertexArray(w)}function h(w){return s.deleteVertexArray(w)}function d(w,I,O){const k=O.wireframe===!0;let V=n[w.id];V===void 0&&(V={},n[w.id]=V);let W=V[I.id];W===void 0&&(W={},V[I.id]=W);let G=W[k];return G===void 0&&(G=u(c()),W[k]=G),G}function u(w){const I=[],O=[],k=[];for(let V=0;V<t;V++)I[V]=0,O[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:k,object:w,attributes:{},index:null}}function f(w,I,O,k){const V=r.attributes,W=I.attributes;let G=0;const j=O.getAttributes();for(const H in j)if(j[H].location>=0){const ae=V[H];let xe=W[H];if(xe===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(xe=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(xe=w.instanceColor)),ae===void 0||ae.attribute!==xe||xe&&ae.data!==xe.data)return!0;G++}return r.attributesNum!==G||r.index!==k}function g(w,I,O,k){const V={},W=I.attributes;let G=0;const j=O.getAttributes();for(const H in j)if(j[H].location>=0){let ae=W[H];ae===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(ae=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(ae=w.instanceColor));const xe={};xe.attribute=ae,ae&&ae.data&&(xe.data=ae.data),V[H]=xe,G++}r.attributes=V,r.attributesNum=G,r.index=k}function _(){const w=r.newAttributes;for(let I=0,O=w.length;I<O;I++)w[I]=0}function m(w){p(w,0)}function p(w,I){const O=r.newAttributes,k=r.enabledAttributes,V=r.attributeDivisors;O[w]=1,k[w]===0&&(s.enableVertexAttribArray(w),k[w]=1),V[w]!==I&&(s.vertexAttribDivisor(w,I),V[w]=I)}function v(){const w=r.newAttributes,I=r.enabledAttributes;for(let O=0,k=I.length;O<k;O++)I[O]!==w[O]&&(s.disableVertexAttribArray(O),I[O]=0)}function y(w,I,O,k,V,W,G){G===!0?s.vertexAttribIPointer(w,I,O,V,W):s.vertexAttribPointer(w,I,O,k,V,W)}function x(w,I,O,k){_();const V=k.attributes,W=O.getAttributes(),G=I.defaultAttributeValues;for(const j in W){const H=W[j];if(H.location>=0){let se=V[j];if(se===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(se=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(se=w.instanceColor)),se!==void 0){const ae=se.normalized,xe=se.itemSize,Be=e.get(se);if(Be===void 0)continue;const st=Be.buffer,at=Be.type,Ye=Be.bytesPerElement,Y=at===s.INT||at===s.UNSIGNED_INT||se.gpuType===Da;if(se.isInterleavedBufferAttribute){const Z=se.data,de=Z.stride,De=se.offset;if(Z.isInstancedInterleavedBuffer){for(let be=0;be<H.locationSize;be++)p(H.location+be,Z.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let be=0;be<H.locationSize;be++)m(H.location+be);s.bindBuffer(s.ARRAY_BUFFER,st);for(let be=0;be<H.locationSize;be++)y(H.location+be,xe/H.locationSize,at,ae,de*Ye,(De+xe/H.locationSize*be)*Ye,Y)}else{if(se.isInstancedBufferAttribute){for(let Z=0;Z<H.locationSize;Z++)p(H.location+Z,se.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Z=0;Z<H.locationSize;Z++)m(H.location+Z);s.bindBuffer(s.ARRAY_BUFFER,st);for(let Z=0;Z<H.locationSize;Z++)y(H.location+Z,xe/H.locationSize,at,ae,xe*Ye,xe/H.locationSize*Z*Ye,Y)}}else if(G!==void 0){const ae=G[j];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(H.location,ae);break;case 3:s.vertexAttrib3fv(H.location,ae);break;case 4:s.vertexAttrib4fv(H.location,ae);break;default:s.vertexAttrib1fv(H.location,ae)}}}}v()}function S(){D();for(const w in n){const I=n[w];for(const O in I){const k=I[O];for(const V in k)h(k[V].object),delete k[V];delete I[O]}delete n[w]}}function T(w){if(n[w.id]===void 0)return;const I=n[w.id];for(const O in I){const k=I[O];for(const V in k)h(k[V].object),delete k[V];delete I[O]}delete n[w.id]}function R(w){for(const I in n){const O=n[I];if(O[w.id]===void 0)continue;const k=O[w.id];for(const V in k)h(k[V].object),delete k[V];delete O[w.id]}}function D(){E(),o=!0,r!==i&&(r=i,l(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function lm(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,d){d!==0&&(s.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function a(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,n,1)}function c(l,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function hm(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==dn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===Vs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==bn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==vn&&!D)}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:S,maxSamples:T}}function um(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Xn,a=new Ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const v=r?0:n,y=v*4;let x=p.clippingState||null;c.value=x,x=h(g,u,y,f);for(let S=0;S!==y;++S)x[S]=t[S];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(d[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function dm(s){let e=new WeakMap;function t(o,a){return a===qo?o.mapping=rs:a===Yo&&(o.mapping=os),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===qo||a===Yo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Qu(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Qi=4,kc=[.125,.215,.35,.446,.526,.582],gi=20,Mo=new jl,zc=new He;let bo=null,So=0,Eo=0,wo=!1;const di=(1+Math.sqrt(5))/2,Yi=1/di,Bc=[new C(-di,Yi,0),new C(di,Yi,0),new C(-Yi,0,di),new C(Yi,0,di),new C(0,di,-Yi),new C(0,di,Yi),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],fm=new C;class Gc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=fm}=r;bo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),Eo=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bo,So,Eo),this._renderer.xr.enabled=wo,e.scissorTest=!1,Mr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),Eo=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Vs,format:dn,colorSpace:as,depthBuffer:!1},i=Hc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pm(r)),this._blurMaterial=mm(r,e,t)}return i}_compileMaterial(e){const t=new Pe(this._lodPlanes[0],e);this._renderer.compile(t,Mo)}_sceneToCubeUV(e,t,n,i,r){const c=new sn(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(zc),d.toneMapping=Jn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null));const _=new cs({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),m=new Pe(new on,_);let p=!1;const v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,p=!0):(_.color.copy(zc),p=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[y],r.y,r.z)):x===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[y]));const S=this._cubeSize;Mr(i,x*S,y>2?S:0,S,S),d.setRenderTarget(i),p&&d.render(m,c),d.render(e,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===rs||e.mapping===os;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Mr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Mo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Bc[(i-r-1)%Bc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Pe(this._lodPlanes[i],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*gi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):gi;m>gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);const p=[];let v=0;for(let R=0;R<gi;++R){const D=R/_,E=Math.exp(-D*D/2);p.push(E),R===0?v+=E:R<m&&(v+=2*E)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;const x=this._sizeLods[i],S=3*x*(i>y-Qi?i-y+Qi:0),T=4*(this._cubeSize-x);Mr(t,S,T,3*x,2*x),c.setRenderTarget(t),c.render(d,Mo)}}function pm(s){const e=[],t=[],n=[];let i=s;const r=s-Qi+1+kc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Qi?c=kc[o-s+Qi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let T=0;T<f;T++){const R=T%3*2/3-1,D=T>2?0:-1,E=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];v.set(E,_*g*T),y.set(u,m*g*T);const w=[T,T,T,T,T,T];x.set(w,p*g*T)}const S=new kt;S.setAttribute("position",new Lt(v,_)),S.setAttribute("uv",new Lt(y,m)),S.setAttribute("faceIndex",new Lt(x,p)),e.push(S),i>Qi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hc(s,e,t){const n=new Si(s,e,t);return n.texture.mapping=Gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function mm(s,e,t){const n=new Float32Array(gi),i=new C(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Va(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Vc(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Va(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Wc(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Va(){return`

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
	`}function gm(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===qo||c===Yo,h=c===rs||c===os;if(l||h){let d=e.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Gc(s)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Gc(s)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function _m(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ks("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function vm(s,e,t,n){const i={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)e.update(u[f],s.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let y=0,x=v.length;y<x;y+=3){const S=v[y+0],T=v[y+1],R=v[y+2];u.push(S,T,T,R,R,S)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const S=y+0,T=y+1,R=y+2;u.push(S,T,T,R,R,S)}}else return;const m=new(Fl(u)?Bl:zl)(u,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function ym(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){s.drawElements(n,f,r,u*o),t.update(f,n,1)}function l(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,u*o,g),t.update(f,n,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function d(u,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*_[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function xm(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Mm(s,e,t){const n=new WeakMap,i=new ft;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let E=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const T=new Float32Array(x*S*4*d),R=new Ol(T,x,S,d);R.type=vn,R.needsUpdate=!0;const D=y*4;for(let w=0;w<d;w++){const I=m[w],O=p[w],k=v[w],V=x*S*4*w;for(let W=0;W<I.count;W++){const G=W*D;f===!0&&(i.fromBufferAttribute(I,W),T[V+G+0]=i.x,T[V+G+1]=i.y,T[V+G+2]=i.z,T[V+G+3]=0),g===!0&&(i.fromBufferAttribute(O,W),T[V+G+4]=i.x,T[V+G+5]=i.y,T[V+G+6]=i.z,T[V+G+7]=0),_===!0&&(i.fromBufferAttribute(k,W),T[V+G+8]=i.x,T[V+G+9]=i.y,T[V+G+10]=i.z,T[V+G+11]=k.itemSize===4?i.w:1)}}u={count:d,texture:R,size:new Ee(x,S)},n.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function bm(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);if(i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Zl=new Mt,Xc=new ql(1,1),Jl=new Ol,Ql=new Fu,eh=new Vl,qc=[],Yc=[],$c=new Float32Array(16),jc=new Float32Array(9),Kc=new Float32Array(4);function us(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=qc[i];if(r===void 0&&(r=new Float32Array(i),qc[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function bt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function St(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Vr(s,e){let t=Yc[e];t===void 0&&(t=new Int32Array(e),Yc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Sm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Em(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2fv(this.addr,e),St(t,e)}}function wm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;s.uniform3fv(this.addr,e),St(t,e)}}function Tm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4fv(this.addr,e),St(t,e)}}function Am(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Kc.set(n),s.uniformMatrix2fv(this.addr,!1,Kc),St(t,n)}}function Rm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;jc.set(n),s.uniformMatrix3fv(this.addr,!1,jc),St(t,n)}}function Cm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;$c.set(n),s.uniformMatrix4fv(this.addr,!1,$c),St(t,n)}}function Pm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Dm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2iv(this.addr,e),St(t,e)}}function Im(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;s.uniform3iv(this.addr,e),St(t,e)}}function Lm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4iv(this.addr,e),St(t,e)}}function Um(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Nm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2uiv(this.addr,e),St(t,e)}}function Fm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;s.uniform3uiv(this.addr,e),St(t,e)}}function Om(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4uiv(this.addr,e),St(t,e)}}function km(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Xc.compareFunction=Nl,r=Xc):r=Zl,t.setTexture2D(e||r,i)}function zm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ql,i)}function Bm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||eh,i)}function Gm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jl,i)}function Hm(s){switch(s){case 5126:return Sm;case 35664:return Em;case 35665:return wm;case 35666:return Tm;case 35674:return Am;case 35675:return Rm;case 35676:return Cm;case 5124:case 35670:return Pm;case 35667:case 35671:return Dm;case 35668:case 35672:return Im;case 35669:case 35673:return Lm;case 5125:return Um;case 36294:return Nm;case 36295:return Fm;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return Gm}}function Vm(s,e){s.uniform1fv(this.addr,e)}function Wm(s,e){const t=us(e,this.size,2);s.uniform2fv(this.addr,t)}function Xm(s,e){const t=us(e,this.size,3);s.uniform3fv(this.addr,t)}function qm(s,e){const t=us(e,this.size,4);s.uniform4fv(this.addr,t)}function Ym(s,e){const t=us(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function $m(s,e){const t=us(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function jm(s,e){const t=us(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Km(s,e){s.uniform1iv(this.addr,e)}function Zm(s,e){s.uniform2iv(this.addr,e)}function Jm(s,e){s.uniform3iv(this.addr,e)}function Qm(s,e){s.uniform4iv(this.addr,e)}function eg(s,e){s.uniform1uiv(this.addr,e)}function tg(s,e){s.uniform2uiv(this.addr,e)}function ng(s,e){s.uniform3uiv(this.addr,e)}function ig(s,e){s.uniform4uiv(this.addr,e)}function sg(s,e,t){const n=this.cache,i=e.length,r=Vr(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Zl,r[o])}function rg(s,e,t){const n=this.cache,i=e.length,r=Vr(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ql,r[o])}function og(s,e,t){const n=this.cache,i=e.length,r=Vr(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||eh,r[o])}function ag(s,e,t){const n=this.cache,i=e.length,r=Vr(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Jl,r[o])}function cg(s){switch(s){case 5126:return Vm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return Ym;case 35675:return $m;case 35676:return jm;case 5124:case 35670:return Km;case 35667:case 35671:return Zm;case 35668:case 35672:return Jm;case 35669:case 35673:return Qm;case 5125:return eg;case 36294:return tg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return ag}}class lg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hm(t.type)}}class hg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cg(t.type)}}class ug{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const To=/(\w+)(\])?(\[|\.)?/g;function Zc(s,e){s.seq.push(e),s.map[e.id]=e}function dg(s,e,t){const n=s.name,i=n.length;for(To.lastIndex=0;;){const r=To.exec(n),o=To.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Zc(t,l===void 0?new lg(a,s,e):new hg(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new ug(a),Zc(t,d)),t=d}}}class Dr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);dg(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Jc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const fg=37297;let pg=0;function mg(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Qc=new Ie;function gg(s){qe._getMatrix(Qc,qe.workingColorSpace,s);const e=`mat3( ${Qc.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(s)){case Ir:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function el(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+mg(s.getShaderSource(e),a)}else return r}function _g(s,e){const t=gg(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function vg(s,e){let t;switch(e){case jh:t="Linear";break;case Kh:t="Reinhard";break;case Zh:t="Cineon";break;case Jh:t="ACESFilmic";break;case eu:t="AgX";break;case tu:t="Neutral";break;case Qh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const br=new C;function yg(){qe.getLuminanceCoefficients(br);const s=br.x.toFixed(4),e=br.y.toFixed(4),t=br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function Mg(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bg(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Es(s){return s!==""}function tl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(s){return s.replace(Sg,wg)}const Eg=new Map;function wg(s,e){let t=Oe[e];if(t===void 0){const n=Eg.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ta(t)}const Tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function il(s){return s.replace(Tg,Ag)}function Ag(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function sl(s){let e=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===wl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Rh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Dn&&(e="SHADOWMAP_TYPE_VSM"),e}function Cg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case rs:case os:e="ENVMAP_TYPE_CUBE";break;case Gr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pg(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===os&&(e="ENVMAP_MODE_REFRACTION"),e}function Dg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Pa:e="ENVMAP_BLENDING_MULTIPLY";break;case Yh:e="ENVMAP_BLENDING_MIX";break;case $h:e="ENVMAP_BLENDING_ADD";break}return e}function Ig(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Lg(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Rg(t),l=Cg(t),h=Pg(t),d=Dg(t),u=Ig(t),f=xg(t),g=Mg(r),_=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Es).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Es).join(`
`),p.length>0&&(p+=`
`)):(m=[sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),p=[sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Jn?vg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,_g("linearToOutputTexel",t.outputColorSpace),yg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Es).join(`
`)),o=Ta(o),o=tl(o,t),o=nl(o,t),a=Ta(a),a=tl(a,t),a=nl(a,t),o=il(o),a=il(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+o,x=v+p+a,S=Jc(i,i.VERTEX_SHADER,y),T=Jc(i,i.FRAGMENT_SHADER,x);i.attachShader(_,S),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(I){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(_)||"",k=i.getShaderInfoLog(S)||"",V=i.getShaderInfoLog(T)||"",W=O.trim(),G=k.trim(),j=V.trim();let H=!0,se=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,S,T);else{const ae=el(i,S,"vertex"),xe=el(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+ae+`
`+xe)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(G===""||j==="")&&(se=!1);se&&(I.diagnostics={runnable:H,programLog:W,vertexShader:{log:G,prefix:m},fragmentShader:{log:j,prefix:p}})}i.deleteShader(S),i.deleteShader(T),D=new Dr(i,_),E=bg(i,_)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(_,fg)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=T,this}let Ug=0;class Ng{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Fg(e),t.set(e,n)),n}}class Fg{constructor(e){this.id=Ug++,this.code=e,this.usedTimes=0}}function Og(s,e,t,n,i,r,o){const a=new Ba,c=new Ng,l=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,w,I,O,k){const V=O.fog,W=k.geometry,G=E.isMeshStandardMaterial?O.environment:null,j=(E.isMeshStandardMaterial?t:e).get(E.envMap||G),H=j&&j.mapping===Gr?j.image.height:null,se=g[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const ae=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,xe=ae!==void 0?ae.length:0;let Be=0;W.morphAttributes.position!==void 0&&(Be=1),W.morphAttributes.normal!==void 0&&(Be=2),W.morphAttributes.color!==void 0&&(Be=3);let st,at,Ye,Y;if(se){const $e=gn[se];st=$e.vertexShader,at=$e.fragmentShader}else st=E.vertexShader,at=E.fragmentShader,c.update(E),Ye=c.getVertexShaderID(E),Y=c.getFragmentShaderID(E);const Z=s.getRenderTarget(),de=s.state.buffers.depth.getReversed(),De=k.isInstancedMesh===!0,be=k.isBatchedMesh===!0,Ve=!!E.map,Ut=!!E.matcap,P=!!j,ct=!!E.aoMap,Ue=!!E.lightMap,Re=!!E.bumpMap,me=!!E.normalMap,lt=!!E.displacementMap,ge=!!E.emissiveMap,Fe=!!E.metalnessMap,Et=!!E.roughnessMap,pt=E.anisotropy>0,A=E.clearcoat>0,M=E.dispersion>0,F=E.iridescence>0,q=E.sheen>0,K=E.transmission>0,X=pt&&!!E.anisotropyMap,Me=A&&!!E.clearcoatMap,ne=A&&!!E.clearcoatNormalMap,_e=A&&!!E.clearcoatRoughnessMap,ve=F&&!!E.iridescenceMap,ee=F&&!!E.iridescenceThicknessMap,le=q&&!!E.sheenColorMap,Ae=q&&!!E.sheenRoughnessMap,ye=!!E.specularMap,oe=!!E.specularColorMap,Ne=!!E.specularIntensityMap,L=K&&!!E.transmissionMap,te=K&&!!E.thicknessMap,ie=!!E.gradientMap,ue=!!E.alphaMap,J=E.alphaTest>0,$=!!E.alphaHash,pe=!!E.extensions;let Le=Jn;E.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Le=s.toneMapping);const rt={shaderID:se,shaderType:E.type,shaderName:E.name,vertexShader:st,fragmentShader:at,defines:E.defines,customVertexShaderID:Ye,customFragmentShaderID:Y,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:be,batchingColor:be&&k._colorsTexture!==null,instancing:De,instancingColor:De&&k.instanceColor!==null,instancingMorph:De&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Z===null?s.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:as,alphaToCoverage:!!E.alphaToCoverage,map:Ve,matcap:Ut,envMap:P,envMapMode:P&&j.mapping,envMapCubeUVHeight:H,aoMap:ct,lightMap:Ue,bumpMap:Re,normalMap:me,displacementMap:u&&lt,emissiveMap:ge,normalMapObjectSpace:me&&E.normalMapType===ru,normalMapTangentSpace:me&&E.normalMapType===Ul,metalnessMap:Fe,roughnessMap:Et,anisotropy:pt,anisotropyMap:X,clearcoat:A,clearcoatMap:Me,clearcoatNormalMap:ne,clearcoatRoughnessMap:_e,dispersion:M,iridescence:F,iridescenceMap:ve,iridescenceThicknessMap:ee,sheen:q,sheenColorMap:le,sheenRoughnessMap:Ae,specularMap:ye,specularColorMap:oe,specularIntensityMap:Ne,transmission:K,transmissionMap:L,thicknessMap:te,gradientMap:ie,opaque:E.transparent===!1&&E.blending===ts&&E.alphaToCoverage===!1,alphaMap:ue,alphaTest:J,alphaHash:$,combine:E.combine,mapUv:Ve&&_(E.map.channel),aoMapUv:ct&&_(E.aoMap.channel),lightMapUv:Ue&&_(E.lightMap.channel),bumpMapUv:Re&&_(E.bumpMap.channel),normalMapUv:me&&_(E.normalMap.channel),displacementMapUv:lt&&_(E.displacementMap.channel),emissiveMapUv:ge&&_(E.emissiveMap.channel),metalnessMapUv:Fe&&_(E.metalnessMap.channel),roughnessMapUv:Et&&_(E.roughnessMap.channel),anisotropyMapUv:X&&_(E.anisotropyMap.channel),clearcoatMapUv:Me&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:le&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&_(E.sheenRoughnessMap.channel),specularMapUv:ye&&_(E.specularMap.channel),specularColorMapUv:oe&&_(E.specularColorMap.channel),specularIntensityMapUv:Ne&&_(E.specularIntensityMap.channel),transmissionMapUv:L&&_(E.transmissionMap.channel),thicknessMapUv:te&&_(E.thicknessMap.channel),alphaMapUv:ue&&_(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(me||pt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(Ve||ue),fog:!!V,useFog:E.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:de,skinning:k.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Be,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Le,decodeVideoTexture:Ve&&E.map.isVideoTexture===!0&&qe.getTransfer(E.map.colorSpace)===Qe,decodeVideoTextureEmissive:ge&&E.emissiveMap.isVideoTexture===!0&&qe.getTransfer(E.emissiveMap.colorSpace)===Qe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===It,flipSided:E.side===Vt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:pe&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&E.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function p(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)w.push(I),w.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(v(w,E),y(w,E),w.push(s.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function v(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function y(E,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const w=g[E.type];let I;if(w){const O=gn[w];I=ju.clone(O.uniforms)}else I=E.uniforms;return I}function S(E,w){let I;for(let O=0,k=h.length;O<k;O++){const V=h[O];if(V.cacheKey===w){I=V,++I.usedTimes;break}}return I===void 0&&(I=new Lg(s,w,E,r),h.push(I)),I}function T(E){if(--E.usedTimes===0){const w=h.indexOf(E);h[w]=h[h.length-1],h.pop(),E.destroy()}}function R(E){c.remove(E)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:S,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:D}}function kg(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function zg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function rl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ol(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,u,f,g,_,m){let p=s[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function a(d,u,f,g,_,m){const p=o(d,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(d,u,f,g,_,m){const p=o(d,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(d,u){t.length>1&&t.sort(d||zg),n.length>1&&n.sort(u||rl),i.length>1&&i.sort(u||rl)}function h(){for(let d=e,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function Bg(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new ol,s.set(n,[o])):i>=r.length?(o=new ol,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Gg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new He};break;case"SpotLight":t={position:new C,direction:new C,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function Hg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Vg=0;function Wg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Xg(s){const e=new Gg,t=Hg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const i=new C,r=new it,o=new it;function a(l){let h=0,d=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,y=0,x=0,S=0,T=0,R=0;l.sort(Wg);for(let E=0,w=l.length;E<w;E++){const I=l[E],O=I.color,k=I.intensity,V=I.distance,W=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=O.r*k,d+=O.g*k,u+=O.b*k;else if(I.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(I.sh.coefficients[G],k);R++}else if(I.isDirectionalLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const j=I.shadow,H=t.get(I);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=I.shadow.matrix,v++}n.directional[f]=G,f++}else if(I.isSpotLight){const G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(O).multiplyScalar(k),G.distance=V,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,n.spot[_]=G;const j=I.shadow;if(I.map&&(n.spotLightMap[S]=I.map,S++,j.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[_]=j.matrix,I.castShadow){const H=t.get(I);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=W,x++}_++}else if(I.isRectAreaLight){const G=e.get(I);G.color.copy(O).multiplyScalar(k),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=G,m++}else if(I.isPointLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){const j=I.shadow,H=t.get(I);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=I.shadow.matrix,y++}n.point[g]=G,g++}else if(I.isHemisphereLight){const G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(k),G.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[p]=G,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==v||D.numPointShadows!==y||D.numSpotShadows!==x||D.numSpotMaps!==S||D.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+S-T,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,D.directionalLength=f,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=v,D.numPointShadows=y,D.numSpotShadows=x,D.numSpotMaps=S,D.numLightProbes=R,n.version=Vg++)}function c(l,h){let d=0,u=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const y=l[p];if(y.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function al(s){const e=new Xg(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function qg(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new al(s),e.set(i,[a])):r>=o.length?(a=new al(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$g=`uniform sampler2D shadow_pass;
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
}`;function jg(s,e,t){let n=new Ga;const i=new Ee,r=new Ee,o=new ft,a=new dd({depthPacking:su}),c=new fd,l={},h=t.maxTextureSize,d={[Mn]:Vt,[Vt]:Mn,[It]:It},u=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:Yg,fragmentShader:$g}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new kt;g.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pe(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wl;let p=this.type;this.render=function(T,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=s.getRenderTarget(),w=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Zn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=p!==Dn&&this.type===Dn,V=p===Dn&&this.type!==Dn;for(let W=0,G=T.length;W<G;W++){const j=T[W],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const se=H.getFrameExtents();if(i.multiply(se),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/se.x),i.x=r.x*se.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/se.y),i.y=r.y*se.y,H.mapSize.y=r.y)),H.map===null||k===!0||V===!0){const xe=this.type!==Dn?{minFilter:Pt,magFilter:Pt}:{};H.map!==null&&H.map.dispose(),H.map=new Si(i.x,i.y,xe),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const ae=H.getViewportCount();for(let xe=0;xe<ae;xe++){const Be=H.getViewport(xe);o.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),O.viewport(o),H.updateMatrices(j,xe),n=H.getFrustum(),x(R,D,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===Dn&&v(H,D),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(E,w,I)};function v(T,R){const D=e.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Si(i.x,i.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(R,null,D,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(R,null,D,f,_,null)}function y(T,R,D,E){let w=null;const I=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)w=I;else if(w=D.isPointLight===!0?c:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=w.uuid,k=R.uuid;let V=l[O];V===void 0&&(V={},l[O]=V);let W=V[k];W===void 0&&(W=w.clone(),V[k]=W,R.addEventListener("dispose",S)),w=W}if(w.visible=R.visible,w.wireframe=R.wireframe,E===Dn?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:d[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const O=s.properties.get(w);O.light=D}return w}function x(T,R,D,E,w){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===Dn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const k=e.update(T),V=T.material;if(Array.isArray(V)){const W=k.groups;for(let G=0,j=W.length;G<j;G++){const H=W[G],se=V[H.materialIndex];if(se&&se.visible){const ae=y(T,se,E,w);T.onBeforeShadow(s,T,R,D,k,ae,H),s.renderBufferDirect(D,null,k,ae,T,H),T.onAfterShadow(s,T,R,D,k,ae,H)}}}else if(V.visible){const W=y(T,V,E,w);T.onBeforeShadow(s,T,R,D,k,W,null),s.renderBufferDirect(D,null,k,W,T,null),T.onAfterShadow(s,T,R,D,k,W,null)}}const O=T.children;for(let k=0,V=O.length;k<V;k++)x(O[k],R,D,E,w)}function S(T){T.target.removeEventListener("dispose",S);for(const D in l){const E=l[D],w=T.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}const Kg={[zo]:Bo,[Go]:Wo,[Ho]:Xo,[ss]:Vo,[Bo]:zo,[Wo]:Go,[Xo]:Ho,[Vo]:ss};function Zg(s,e){function t(){let L=!1;const te=new ft;let ie=null;const ue=new ft(0,0,0,0);return{setMask:function(J){ie!==J&&!L&&(s.colorMask(J,J,J,J),ie=J)},setLocked:function(J){L=J},setClear:function(J,$,pe,Le,rt){rt===!0&&(J*=Le,$*=Le,pe*=Le),te.set(J,$,pe,Le),ue.equals(te)===!1&&(s.clearColor(J,$,pe,Le),ue.copy(te))},reset:function(){L=!1,ie=null,ue.set(-1,0,0,0)}}}function n(){let L=!1,te=!1,ie=null,ue=null,J=null;return{setReversed:function($){if(te!==$){const pe=e.get("EXT_clip_control");$?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),te=$;const Le=J;J=null,this.setClear(Le)}},getReversed:function(){return te},setTest:function($){$?Z(s.DEPTH_TEST):de(s.DEPTH_TEST)},setMask:function($){ie!==$&&!L&&(s.depthMask($),ie=$)},setFunc:function($){if(te&&($=Kg[$]),ue!==$){switch($){case zo:s.depthFunc(s.NEVER);break;case Bo:s.depthFunc(s.ALWAYS);break;case Go:s.depthFunc(s.LESS);break;case ss:s.depthFunc(s.LEQUAL);break;case Ho:s.depthFunc(s.EQUAL);break;case Vo:s.depthFunc(s.GEQUAL);break;case Wo:s.depthFunc(s.GREATER);break;case Xo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ue=$}},setLocked:function($){L=$},setClear:function($){J!==$&&(te&&($=1-$),s.clearDepth($),J=$)},reset:function(){L=!1,ie=null,ue=null,J=null,te=!1}}}function i(){let L=!1,te=null,ie=null,ue=null,J=null,$=null,pe=null,Le=null,rt=null;return{setTest:function($e){L||($e?Z(s.STENCIL_TEST):de(s.STENCIL_TEST))},setMask:function($e){te!==$e&&!L&&(s.stencilMask($e),te=$e)},setFunc:function($e,Sn,mn){(ie!==$e||ue!==Sn||J!==mn)&&(s.stencilFunc($e,Sn,mn),ie=$e,ue=Sn,J=mn)},setOp:function($e,Sn,mn){($!==$e||pe!==Sn||Le!==mn)&&(s.stencilOp($e,Sn,mn),$=$e,pe=Sn,Le=mn)},setLocked:function($e){L=$e},setClear:function($e){rt!==$e&&(s.clearStencil($e),rt=$e)},reset:function(){L=!1,te=null,ie=null,ue=null,J=null,$=null,pe=null,Le=null,rt=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,S=null,T=null,R=new He(0,0,0),D=0,E=!1,w=null,I=null,O=null,k=null,V=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,j=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=j>=2);let se=null,ae={};const xe=s.getParameter(s.SCISSOR_BOX),Be=s.getParameter(s.VIEWPORT),st=new ft().fromArray(xe),at=new ft().fromArray(Be);function Ye(L,te,ie,ue){const J=new Uint8Array(4),$=s.createTexture();s.bindTexture(L,$),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let pe=0;pe<ie;pe++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(te,0,s.RGBA,1,1,ue,0,s.RGBA,s.UNSIGNED_BYTE,J):s.texImage2D(te+pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,J);return $}const Y={};Y[s.TEXTURE_2D]=Ye(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=Ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=Ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=Ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(s.DEPTH_TEST),o.setFunc(ss),Re(!1),me(Qa),Z(s.CULL_FACE),ct(Zn);function Z(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function de(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function De(L,te){return d[L]!==te?(s.bindFramebuffer(L,te),d[L]=te,L===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=te),L===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=te),!0):!1}function be(L,te){let ie=f,ue=!1;if(L){ie=u.get(te),ie===void 0&&(ie=[],u.set(te,ie));const J=L.textures;if(ie.length!==J.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let $=0,pe=J.length;$<pe;$++)ie[$]=s.COLOR_ATTACHMENT0+$;ie.length=J.length,ue=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,ue=!0);ue&&s.drawBuffers(ie)}function Ve(L){return g!==L?(s.useProgram(L),g=L,!0):!1}const Ut={[mi]:s.FUNC_ADD,[Ph]:s.FUNC_SUBTRACT,[Dh]:s.FUNC_REVERSE_SUBTRACT};Ut[Ih]=s.MIN,Ut[Lh]=s.MAX;const P={[Uh]:s.ZERO,[Nh]:s.ONE,[Fh]:s.SRC_COLOR,[Oo]:s.SRC_ALPHA,[Hh]:s.SRC_ALPHA_SATURATE,[Bh]:s.DST_COLOR,[kh]:s.DST_ALPHA,[Oh]:s.ONE_MINUS_SRC_COLOR,[ko]:s.ONE_MINUS_SRC_ALPHA,[Gh]:s.ONE_MINUS_DST_COLOR,[zh]:s.ONE_MINUS_DST_ALPHA,[Vh]:s.CONSTANT_COLOR,[Wh]:s.ONE_MINUS_CONSTANT_COLOR,[Xh]:s.CONSTANT_ALPHA,[qh]:s.ONE_MINUS_CONSTANT_ALPHA};function ct(L,te,ie,ue,J,$,pe,Le,rt,$e){if(L===Zn){_===!0&&(de(s.BLEND),_=!1);return}if(_===!1&&(Z(s.BLEND),_=!0),L!==Ch){if(L!==m||$e!==E){if((p!==mi||x!==mi)&&(s.blendEquation(s.FUNC_ADD),p=mi,x=mi),$e)switch(L){case ts:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ec:s.blendFunc(s.ONE,s.ONE);break;case tc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ts:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ec:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case tc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,y=null,S=null,T=null,R.set(0,0,0),D=0,m=L,E=$e}return}J=J||te,$=$||ie,pe=pe||ue,(te!==p||J!==x)&&(s.blendEquationSeparate(Ut[te],Ut[J]),p=te,x=J),(ie!==v||ue!==y||$!==S||pe!==T)&&(s.blendFuncSeparate(P[ie],P[ue],P[$],P[pe]),v=ie,y=ue,S=$,T=pe),(Le.equals(R)===!1||rt!==D)&&(s.blendColor(Le.r,Le.g,Le.b,rt),R.copy(Le),D=rt),m=L,E=!1}function Ue(L,te){L.side===It?de(s.CULL_FACE):Z(s.CULL_FACE);let ie=L.side===Vt;te&&(ie=!ie),Re(ie),L.blending===ts&&L.transparent===!1?ct(Zn):ct(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const ue=L.stencilWrite;a.setTest(ue),ue&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ge(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Z(s.SAMPLE_ALPHA_TO_COVERAGE):de(s.SAMPLE_ALPHA_TO_COVERAGE)}function Re(L){w!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),w=L)}function me(L){L!==Th?(Z(s.CULL_FACE),L!==I&&(L===Qa?s.cullFace(s.BACK):L===Ah?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):de(s.CULL_FACE),I=L}function lt(L){L!==O&&(G&&s.lineWidth(L),O=L)}function ge(L,te,ie){L?(Z(s.POLYGON_OFFSET_FILL),(k!==te||V!==ie)&&(s.polygonOffset(te,ie),k=te,V=ie)):de(s.POLYGON_OFFSET_FILL)}function Fe(L){L?Z(s.SCISSOR_TEST):de(s.SCISSOR_TEST)}function Et(L){L===void 0&&(L=s.TEXTURE0+W-1),se!==L&&(s.activeTexture(L),se=L)}function pt(L,te,ie){ie===void 0&&(se===null?ie=s.TEXTURE0+W-1:ie=se);let ue=ae[ie];ue===void 0&&(ue={type:void 0,texture:void 0},ae[ie]=ue),(ue.type!==L||ue.texture!==te)&&(se!==ie&&(s.activeTexture(ie),se=ie),s.bindTexture(L,te||Y[L]),ue.type=L,ue.texture=te)}function A(){const L=ae[se];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F(){try{s.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{s.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{s.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{s.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{s.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{s.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{s.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{s.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(L){st.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),st.copy(L))}function Ae(L){at.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),at.copy(L))}function ye(L,te){let ie=l.get(te);ie===void 0&&(ie=new WeakMap,l.set(te,ie));let ue=ie.get(L);ue===void 0&&(ue=s.getUniformBlockIndex(te,L.name),ie.set(L,ue))}function oe(L,te){const ue=l.get(te).get(L);c.get(te)!==ue&&(s.uniformBlockBinding(te,ue,L.__bindingPointIndex),c.set(te,ue))}function Ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},se=null,ae={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,S=null,T=null,R=new He(0,0,0),D=0,E=!1,w=null,I=null,O=null,k=null,V=null,st.set(0,0,s.canvas.width,s.canvas.height),at.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:de,bindFramebuffer:De,drawBuffers:be,useProgram:Ve,setBlending:ct,setMaterial:Ue,setFlipSided:Re,setCullFace:me,setLineWidth:lt,setPolygonOffset:ge,setScissorTest:Fe,activeTexture:Et,bindTexture:pt,unbindTexture:A,compressedTexImage2D:M,compressedTexImage3D:F,texImage2D:ve,texImage3D:ee,updateUBOMapping:ye,uniformBlockBinding:oe,texStorage2D:ne,texStorage3D:_e,texSubImage2D:q,texSubImage3D:K,compressedTexSubImage2D:X,compressedTexSubImage3D:Me,scissor:le,viewport:Ae,reset:Ne}}function Jg(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ee,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return f?new OffscreenCanvas(A,M):Os("canvas")}function _(A,M,F){let q=1;const K=pt(A);if((K.width>F||K.height>F)&&(q=F/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(q*K.width),Me=Math.floor(q*K.height);d===void 0&&(d=g(X,Me));const ne=M?g(X,Me):d;return ne.width=X,ne.height=Me,ne.getContext("2d").drawImage(A,0,0,X,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+Me+")."),ne}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){s.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(A,M,F,q,K=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=M;if(M===s.RED&&(F===s.FLOAT&&(X=s.R32F),F===s.HALF_FLOAT&&(X=s.R16F),F===s.UNSIGNED_BYTE&&(X=s.R8)),M===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(X=s.R8UI),F===s.UNSIGNED_SHORT&&(X=s.R16UI),F===s.UNSIGNED_INT&&(X=s.R32UI),F===s.BYTE&&(X=s.R8I),F===s.SHORT&&(X=s.R16I),F===s.INT&&(X=s.R32I)),M===s.RG&&(F===s.FLOAT&&(X=s.RG32F),F===s.HALF_FLOAT&&(X=s.RG16F),F===s.UNSIGNED_BYTE&&(X=s.RG8)),M===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(X=s.RG8UI),F===s.UNSIGNED_SHORT&&(X=s.RG16UI),F===s.UNSIGNED_INT&&(X=s.RG32UI),F===s.BYTE&&(X=s.RG8I),F===s.SHORT&&(X=s.RG16I),F===s.INT&&(X=s.RG32I)),M===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(X=s.RGB8UI),F===s.UNSIGNED_SHORT&&(X=s.RGB16UI),F===s.UNSIGNED_INT&&(X=s.RGB32UI),F===s.BYTE&&(X=s.RGB8I),F===s.SHORT&&(X=s.RGB16I),F===s.INT&&(X=s.RGB32I)),M===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),F===s.UNSIGNED_INT&&(X=s.RGBA32UI),F===s.BYTE&&(X=s.RGBA8I),F===s.SHORT&&(X=s.RGBA16I),F===s.INT&&(X=s.RGBA32I)),M===s.RGB&&(F===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),F===s.UNSIGNED_INT_10F_11F_11F_REV&&(X=s.R11F_G11F_B10F)),M===s.RGBA){const Me=K?Ir:qe.getTransfer(q);F===s.FLOAT&&(X=s.RGBA32F),F===s.HALF_FLOAT&&(X=s.RGBA16F),F===s.UNSIGNED_BYTE&&(X=Me===Qe?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(A,M){let F;return A?M===null||M===bi||M===Ls?F=s.DEPTH24_STENCIL8:M===vn?F=s.DEPTH32F_STENCIL8:M===Is&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===bi||M===Ls?F=s.DEPTH_COMPONENT24:M===vn?F=s.DEPTH_COMPONENT32F:M===Is&&(F=s.DEPTH_COMPONENT16),F}function S(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Pt&&A.minFilter!==rn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function T(A){const M=A.target;M.removeEventListener("dispose",T),D(M),M.isVideoTexture&&h.delete(M)}function R(A){const M=A.target;M.removeEventListener("dispose",R),w(M)}function D(A){const M=n.get(A);if(M.__webglInit===void 0)return;const F=A.source,q=u.get(F);if(q){const K=q[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(A),Object.keys(q).length===0&&u.delete(F)}n.remove(A)}function E(A){const M=n.get(A);s.deleteTexture(M.__webglTexture);const F=A.source,q=u.get(F);delete q[M.__cacheKey],o.memory.textures--}function w(A){const M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let K=0;K<M.__webglFramebuffer[q].length;K++)s.deleteFramebuffer(M.__webglFramebuffer[q][K]);else s.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)s.deleteFramebuffer(M.__webglFramebuffer[q]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=A.textures;for(let q=0,K=F.length;q<K;q++){const X=n.get(F[q]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(F[q])}n.remove(A)}let I=0;function O(){I=0}function k(){const A=I;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),I+=1,A}function V(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function W(A,M){const F=n.get(A);if(A.isVideoTexture&&Fe(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,A,M);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+M)}function G(A,M){const F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){Y(F,A,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+M)}function j(A,M){const F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){Y(F,A,M);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+M)}function H(A,M){const F=n.get(A);if(A.version>0&&F.__version!==A.version){Z(F,A,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+M)}const se={[$o]:s.REPEAT,[vi]:s.CLAMP_TO_EDGE,[jo]:s.MIRRORED_REPEAT},ae={[Pt]:s.NEAREST,[nu]:s.NEAREST_MIPMAP_NEAREST,[yi]:s.NEAREST_MIPMAP_LINEAR,[rn]:s.LINEAR,[qr]:s.LINEAR_MIPMAP_NEAREST,[Ln]:s.LINEAR_MIPMAP_LINEAR},xe={[ou]:s.NEVER,[du]:s.ALWAYS,[au]:s.LESS,[Nl]:s.LEQUAL,[cu]:s.EQUAL,[uu]:s.GEQUAL,[lu]:s.GREATER,[hu]:s.NOTEQUAL};function Be(A,M){if(M.type===vn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===rn||M.magFilter===qr||M.magFilter===yi||M.magFilter===Ln||M.minFilter===rn||M.minFilter===qr||M.minFilter===yi||M.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,se[M.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,se[M.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,se[M.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ae[M.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ae[M.minFilter]),M.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,xe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pt||M.minFilter!==yi&&M.minFilter!==Ln||M.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function st(A,M){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",T));const q=M.source;let K=u.get(q);K===void 0&&(K={},u.set(q,K));const X=V(M);if(X!==A.__cacheKey){K[X]===void 0&&(K[X]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),K[X].usedTimes++;const Me=K[A.__cacheKey];Me!==void 0&&(K[A.__cacheKey].usedTimes--,Me.usedTimes===0&&E(M)),A.__cacheKey=X,A.__webglTexture=K[X].texture}return F}function at(A,M,F){return Math.floor(Math.floor(A/F)/M)}function Ye(A,M,F,q){const X=A.updateRanges;if(X.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,F,q,M.data);else{X.sort((ee,le)=>ee.start-le.start);let Me=0;for(let ee=1;ee<X.length;ee++){const le=X[Me],Ae=X[ee],ye=le.start+le.count,oe=at(Ae.start,M.width,4),Ne=at(le.start,M.width,4);Ae.start<=ye+1&&oe===Ne&&at(Ae.start+Ae.count-1,M.width,4)===oe?le.count=Math.max(le.count,Ae.start+Ae.count-le.start):(++Me,X[Me]=Ae)}X.length=Me+1;const ne=s.getParameter(s.UNPACK_ROW_LENGTH),_e=s.getParameter(s.UNPACK_SKIP_PIXELS),ve=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let ee=0,le=X.length;ee<le;ee++){const Ae=X[ee],ye=Math.floor(Ae.start/4),oe=Math.ceil(Ae.count/4),Ne=ye%M.width,L=Math.floor(ye/M.width),te=oe,ie=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ne),s.pixelStorei(s.UNPACK_SKIP_ROWS,L),t.texSubImage2D(s.TEXTURE_2D,0,Ne,L,te,ie,F,q,M.data)}A.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ne),s.pixelStorei(s.UNPACK_SKIP_PIXELS,_e),s.pixelStorei(s.UNPACK_SKIP_ROWS,ve)}}function Y(A,M,F){let q=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=s.TEXTURE_3D);const K=st(A,M),X=M.source;t.bindTexture(q,A.__webglTexture,s.TEXTURE0+F);const Me=n.get(X);if(X.version!==Me.__version||K===!0){t.activeTexture(s.TEXTURE0+F);const ne=qe.getPrimaries(qe.workingColorSpace),_e=M.colorSpace===Yn?null:qe.getPrimaries(M.colorSpace),ve=M.colorSpace===Yn||ne===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let ee=_(M.image,!1,i.maxTextureSize);ee=Et(M,ee);const le=r.convert(M.format,M.colorSpace),Ae=r.convert(M.type);let ye=y(M.internalFormat,le,Ae,M.colorSpace,M.isVideoTexture);Be(q,M);let oe;const Ne=M.mipmaps,L=M.isVideoTexture!==!0,te=Me.__version===void 0||K===!0,ie=X.dataReady,ue=S(M,ee);if(M.isDepthTexture)ye=x(M.format===Ns,M.type),te&&(L?t.texStorage2D(s.TEXTURE_2D,1,ye,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,ye,ee.width,ee.height,0,le,Ae,null));else if(M.isDataTexture)if(Ne.length>0){L&&te&&t.texStorage2D(s.TEXTURE_2D,ue,ye,Ne[0].width,Ne[0].height);for(let J=0,$=Ne.length;J<$;J++)oe=Ne[J],L?ie&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,oe.width,oe.height,le,Ae,oe.data):t.texImage2D(s.TEXTURE_2D,J,ye,oe.width,oe.height,0,le,Ae,oe.data);M.generateMipmaps=!1}else L?(te&&t.texStorage2D(s.TEXTURE_2D,ue,ye,ee.width,ee.height),ie&&Ye(M,ee,le,Ae)):t.texImage2D(s.TEXTURE_2D,0,ye,ee.width,ee.height,0,le,Ae,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){L&&te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,ye,Ne[0].width,Ne[0].height,ee.depth);for(let J=0,$=Ne.length;J<$;J++)if(oe=Ne[J],M.format!==dn)if(le!==null)if(L){if(ie)if(M.layerUpdates.size>0){const pe=Oc(oe.width,oe.height,M.format,M.type);for(const Le of M.layerUpdates){const rt=oe.data.subarray(Le*pe/oe.data.BYTES_PER_ELEMENT,(Le+1)*pe/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,Le,oe.width,oe.height,1,le,rt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,ee.depth,le,oe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,ye,oe.width,oe.height,ee.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ie&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,ee.depth,le,Ae,oe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,ye,oe.width,oe.height,ee.depth,0,le,Ae,oe.data)}else{L&&te&&t.texStorage2D(s.TEXTURE_2D,ue,ye,Ne[0].width,Ne[0].height);for(let J=0,$=Ne.length;J<$;J++)oe=Ne[J],M.format!==dn?le!==null?L?ie&&t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,oe.width,oe.height,le,oe.data):t.compressedTexImage2D(s.TEXTURE_2D,J,ye,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ie&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,oe.width,oe.height,le,Ae,oe.data):t.texImage2D(s.TEXTURE_2D,J,ye,oe.width,oe.height,0,le,Ae,oe.data)}else if(M.isDataArrayTexture)if(L){if(te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,ye,ee.width,ee.height,ee.depth),ie)if(M.layerUpdates.size>0){const J=Oc(ee.width,ee.height,M.format,M.type);for(const $ of M.layerUpdates){const pe=ee.data.subarray($*J/ee.data.BYTES_PER_ELEMENT,($+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,ee.width,ee.height,1,le,Ae,pe)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,le,Ae,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ye,ee.width,ee.height,ee.depth,0,le,Ae,ee.data);else if(M.isData3DTexture)L?(te&&t.texStorage3D(s.TEXTURE_3D,ue,ye,ee.width,ee.height,ee.depth),ie&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,le,Ae,ee.data)):t.texImage3D(s.TEXTURE_3D,0,ye,ee.width,ee.height,ee.depth,0,le,Ae,ee.data);else if(M.isFramebufferTexture){if(te)if(L)t.texStorage2D(s.TEXTURE_2D,ue,ye,ee.width,ee.height);else{let J=ee.width,$=ee.height;for(let pe=0;pe<ue;pe++)t.texImage2D(s.TEXTURE_2D,pe,ye,J,$,0,le,Ae,null),J>>=1,$>>=1}}else if(Ne.length>0){if(L&&te){const J=pt(Ne[0]);t.texStorage2D(s.TEXTURE_2D,ue,ye,J.width,J.height)}for(let J=0,$=Ne.length;J<$;J++)oe=Ne[J],L?ie&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,le,Ae,oe):t.texImage2D(s.TEXTURE_2D,J,ye,le,Ae,oe);M.generateMipmaps=!1}else if(L){if(te){const J=pt(ee);t.texStorage2D(s.TEXTURE_2D,ue,ye,J.width,J.height)}ie&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,le,Ae,ee)}else t.texImage2D(s.TEXTURE_2D,0,ye,le,Ae,ee);m(M)&&p(q),Me.__version=X.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Z(A,M,F){if(M.image.length!==6)return;const q=st(A,M),K=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+F);const X=n.get(K);if(K.version!==X.__version||q===!0){t.activeTexture(s.TEXTURE0+F);const Me=qe.getPrimaries(qe.workingColorSpace),ne=M.colorSpace===Yn?null:qe.getPrimaries(M.colorSpace),_e=M.colorSpace===Yn||Me===ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const ve=M.isCompressedTexture||M.image[0].isCompressedTexture,ee=M.image[0]&&M.image[0].isDataTexture,le=[];for(let $=0;$<6;$++)!ve&&!ee?le[$]=_(M.image[$],!0,i.maxCubemapSize):le[$]=ee?M.image[$].image:M.image[$],le[$]=Et(M,le[$]);const Ae=le[0],ye=r.convert(M.format,M.colorSpace),oe=r.convert(M.type),Ne=y(M.internalFormat,ye,oe,M.colorSpace),L=M.isVideoTexture!==!0,te=X.__version===void 0||q===!0,ie=K.dataReady;let ue=S(M,Ae);Be(s.TEXTURE_CUBE_MAP,M);let J;if(ve){L&&te&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Ne,Ae.width,Ae.height);for(let $=0;$<6;$++){J=le[$].mipmaps;for(let pe=0;pe<J.length;pe++){const Le=J[pe];M.format!==dn?ye!==null?L?ie&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,0,0,Le.width,Le.height,ye,Le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,Ne,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,0,0,Le.width,Le.height,ye,oe,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,Ne,Le.width,Le.height,0,ye,oe,Le.data)}}}else{if(J=M.mipmaps,L&&te){J.length>0&&ue++;const $=pt(le[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Ne,$.width,$.height)}for(let $=0;$<6;$++)if(ee){L?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,le[$].width,le[$].height,ye,oe,le[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ne,le[$].width,le[$].height,0,ye,oe,le[$].data);for(let pe=0;pe<J.length;pe++){const rt=J[pe].image[$].image;L?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,0,0,rt.width,rt.height,ye,oe,rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,Ne,rt.width,rt.height,0,ye,oe,rt.data)}}else{L?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ye,oe,le[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ne,ye,oe,le[$]);for(let pe=0;pe<J.length;pe++){const Le=J[pe];L?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,0,0,ye,oe,Le.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,Ne,ye,oe,Le.image[$])}}}m(M)&&p(s.TEXTURE_CUBE_MAP),X.__version=K.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function de(A,M,F,q,K,X){const Me=r.convert(F.format,F.colorSpace),ne=r.convert(F.type),_e=y(F.internalFormat,Me,ne,F.colorSpace),ve=n.get(M),ee=n.get(F);if(ee.__renderTarget=M,!ve.__hasExternalTextures){const le=Math.max(1,M.width>>X),Ae=Math.max(1,M.height>>X);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?t.texImage3D(K,X,_e,le,Ae,M.depth,0,Me,ne,null):t.texImage2D(K,X,_e,le,Ae,0,Me,ne,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),ge(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,K,ee.__webglTexture,0,lt(M)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,K,ee.__webglTexture,X),t.bindFramebuffer(s.FRAMEBUFFER,null)}function De(A,M,F){if(s.bindRenderbuffer(s.RENDERBUFFER,A),M.depthBuffer){const q=M.depthTexture,K=q&&q.isDepthTexture?q.type:null,X=x(M.stencilBuffer,K),Me=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ne=lt(M);ge(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,X,M.width,M.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,X,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,X,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,A)}else{const q=M.textures;for(let K=0;K<q.length;K++){const X=q[K],Me=r.convert(X.format,X.colorSpace),ne=r.convert(X.type),_e=y(X.internalFormat,Me,ne,X.colorSpace),ve=lt(M);F&&ge(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,_e,M.width,M.height):ge(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,_e,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,_e,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function be(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(M.depthTexture);q.__renderTarget=M,(!q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const K=q.__webglTexture,X=lt(M);if(M.depthTexture.format===Us)ge(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(M.depthTexture.format===Ns)ge(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ve(A){const M=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){const K=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),M.__depthDisposeCallback=K}M.__boundDepthTexture=q}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const q=A.texture.mipmaps;q&&q.length>0?be(M.__webglFramebuffer[0],A):be(M.__webglFramebuffer,A)}else if(F){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=s.createRenderbuffer(),De(M.__webglDepthbuffer[q],A,!1);else{const K=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,X)}}else{const q=A.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),De(M.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,X)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(A,M,F){const q=n.get(A);M!==void 0&&de(q.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Ve(A)}function P(A){const M=A.texture,F=n.get(A),q=n.get(M);A.addEventListener("dispose",R);const K=A.textures,X=A.isWebGLCubeRenderTarget===!0,Me=K.length>1;if(Me||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=M.version,o.memory.textures++),X){F.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[ne]=[];for(let _e=0;_e<M.mipmaps.length;_e++)F.__webglFramebuffer[ne][_e]=s.createFramebuffer()}else F.__webglFramebuffer[ne]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let ne=0;ne<M.mipmaps.length;ne++)F.__webglFramebuffer[ne]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(Me)for(let ne=0,_e=K.length;ne<_e;ne++){const ve=n.get(K[ne]);ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&ge(A)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ne=0;ne<K.length;ne++){const _e=K[ne];F.__webglColorRenderbuffer[ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[ne]);const ve=r.convert(_e.format,_e.colorSpace),ee=r.convert(_e.type),le=y(_e.internalFormat,ve,ee,_e.colorSpace,A.isXRRenderTarget===!0),Ae=lt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,le,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,F.__webglColorRenderbuffer[ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),De(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),Be(s.TEXTURE_CUBE_MAP,M);for(let ne=0;ne<6;ne++)if(M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)de(F.__webglFramebuffer[ne][_e],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e);else de(F.__webglFramebuffer[ne],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(M)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ne=0,_e=K.length;ne<_e;ne++){const ve=K[ne],ee=n.get(ve);let le=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,ee.__webglTexture),Be(le,ve),de(F.__webglFramebuffer,A,ve,s.COLOR_ATTACHMENT0+ne,le,0),m(ve)&&p(le)}t.unbindTexture()}else{let ne=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ne=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ne,q.__webglTexture),Be(ne,M),M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)de(F.__webglFramebuffer[_e],A,M,s.COLOR_ATTACHMENT0,ne,_e);else de(F.__webglFramebuffer,A,M,s.COLOR_ATTACHMENT0,ne,0);m(M)&&p(ne),t.unbindTexture()}A.depthBuffer&&Ve(A)}function ct(A){const M=A.textures;for(let F=0,q=M.length;F<q;F++){const K=M[F];if(m(K)){const X=v(A),Me=n.get(K).__webglTexture;t.bindTexture(X,Me),p(X),t.unbindTexture()}}}const Ue=[],Re=[];function me(A){if(A.samples>0){if(ge(A)===!1){const M=A.textures,F=A.width,q=A.height;let K=s.COLOR_BUFFER_BIT;const X=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=n.get(A),ne=M.length>1;if(ne)for(let ve=0;ve<M.length;ve++)t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const _e=A.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),ne){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const ee=n.get(M[ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,F,q,0,0,F,q,K,s.NEAREST),c===!0&&(Ue.length=0,Re.length=0,Ue.push(s.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ue.push(X),Re.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Re)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ne)for(let ve=0;ve<M.length;ve++){t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const ee=n.get(M[ve]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const M=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function lt(A){return Math.min(i.maxSamples,A.samples)}function ge(A){const M=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Fe(A){const M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Et(A,M){const F=A.colorSpace,q=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==as&&F!==Yn&&(qe.getTransfer(F)===Qe?(q!==dn||K!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function pt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.setTexture2D=W,this.setTexture2DArray=G,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=Ut,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ge}function Qg(s,e){function t(n,i=Yn){let r;const o=qe.getTransfer(i);if(n===bn)return s.UNSIGNED_BYTE;if(n===Ia)return s.UNSIGNED_SHORT_4_4_4_4;if(n===La)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Cl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Pl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Al)return s.BYTE;if(n===Rl)return s.SHORT;if(n===Is)return s.UNSIGNED_SHORT;if(n===Da)return s.INT;if(n===bi)return s.UNSIGNED_INT;if(n===vn)return s.FLOAT;if(n===Vs)return s.HALF_FLOAT;if(n===Dl)return s.ALPHA;if(n===Il)return s.RGB;if(n===dn)return s.RGBA;if(n===Us)return s.DEPTH_COMPONENT;if(n===Ns)return s.DEPTH_STENCIL;if(n===Ua)return s.RED;if(n===Na)return s.RED_INTEGER;if(n===Ll)return s.RG;if(n===Fa)return s.RG_INTEGER;if(n===Oa)return s.RGBA_INTEGER;if(n===Ar||n===Rr||n===Cr||n===Pr)if(o===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ko||n===Zo||n===Jo||n===Qo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ko)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ea||n===ta||n===na)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ea||n===ta)return o===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===na)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ia||n===sa||n===ra||n===oa||n===aa||n===ca||n===la||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ia)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sa)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ra)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oa)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===aa)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ca)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===la)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ha)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ua)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===da)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fa)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pa)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ma)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ga)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_a||n===va||n===ya)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_a)return o===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ya)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xa||n===Ma||n===ba||n===Sa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===xa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ma)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const e0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t0=`
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

}`;class n0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Yl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ni({vertexShader:e0,fragmentShader:t0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pe(new Qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i0 extends Ei{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new n0,p={},v=t.getContextAttributes();let y=null,x=null;const S=[],T=[],R=new Ee;let D=null;const E=new sn;E.viewport=new ft;const w=new sn;w.viewport=new ft;const I=[E,w],O=new bd;let k=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=S[Y];return Z===void 0&&(Z=new po,S[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=S[Y];return Z===void 0&&(Z=new po,S[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=S[Y];return Z===void 0&&(Z=new po,S[Y]=Z),Z.getHandSpace()};function W(Y){const Z=T.indexOf(Y.inputSource);if(Z===-1)return;const de=S[Z];de!==void 0&&(de.update(Y.inputSource,Y.frame,l||o),de.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",j);for(let Y=0;Y<S.length;Y++){const Z=T[Y];Z!==null&&(T[Y]=null,S[Y].disconnect(Z))}k=null,V=null,m.reset();for(const Y in p)delete p[Y];e.setRenderTarget(y),f=null,u=null,d=null,i=null,x=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",G),i.addEventListener("inputsourceschange",j),v.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,De=null,be=null;v.depth&&(be=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=v.stencil?Ns:Us,De=v.stencil?Ls:bi);const Ve={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ve),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Si(u.textureWidth,u.textureHeight,{format:dn,type:bn,depthTexture:new ql(u.textureWidth,u.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const de={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Si(f.framebufferWidth,f.framebufferHeight,{format:dn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(Y){for(let Z=0;Z<Y.removed.length;Z++){const de=Y.removed[Z],De=T.indexOf(de);De>=0&&(T[De]=null,S[De].disconnect(de))}for(let Z=0;Z<Y.added.length;Z++){const de=Y.added[Z];let De=T.indexOf(de);if(De===-1){for(let Ve=0;Ve<S.length;Ve++)if(Ve>=T.length){T.push(de),De=Ve;break}else if(T[Ve]===null){T[Ve]=de,De=Ve;break}if(De===-1)break}const be=S[De];be&&be.connect(de)}}const H=new C,se=new C;function ae(Y,Z,de){H.setFromMatrixPosition(Z.matrixWorld),se.setFromMatrixPosition(de.matrixWorld);const De=H.distanceTo(se),be=Z.projectionMatrix.elements,Ve=de.projectionMatrix.elements,Ut=be[14]/(be[10]-1),P=be[14]/(be[10]+1),ct=(be[9]+1)/be[5],Ue=(be[9]-1)/be[5],Re=(be[8]-1)/be[0],me=(Ve[8]+1)/Ve[0],lt=Ut*Re,ge=Ut*me,Fe=De/(-Re+me),Et=Fe*-Re;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Et),Y.translateZ(Fe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),be[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const pt=Ut+Fe,A=P+Fe,M=lt-Et,F=ge+(De-Et),q=ct*P/A*pt,K=Ue*P/A*pt;Y.projectionMatrix.makePerspective(M,F,q,K,pt,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function xe(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let Z=Y.near,de=Y.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(de=m.depthFar)),O.near=w.near=E.near=Z,O.far=w.far=E.far=de,(k!==O.near||V!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,V=O.far),O.layers.mask=Y.layers.mask|6,E.layers.mask=O.layers.mask&3,w.layers.mask=O.layers.mask&5;const De=Y.parent,be=O.cameras;xe(O,De);for(let Ve=0;Ve<be.length;Ve++)xe(be[Ve],De);be.length===2?ae(O,E,w):O.projectionMatrix.copy(E.projectionMatrix),Be(Y,O,De)};function Be(Y,Z,de){de===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(de.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Fs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Y){return p[Y]};let st=null;function at(Y,Z){if(h=Z.getViewerPose(l||o),g=Z,h!==null){const de=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let De=!1;de.length!==O.cameras.length&&(O.cameras.length=0,De=!0);for(let P=0;P<de.length;P++){const ct=de[P];let Ue=null;if(f!==null)Ue=f.getViewport(ct);else{const me=d.getViewSubImage(u,ct);Ue=me.viewport,P===0&&(e.setRenderTargetTextures(x,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(x))}let Re=I[P];Re===void 0&&(Re=new sn,Re.layers.enable(P),Re.viewport=new ft,I[P]=Re),Re.matrix.fromArray(ct.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(ct.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),P===0&&(O.matrix.copy(Re.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),De===!0&&O.cameras.push(Re)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const P=d.getDepthInformation(de[0]);P&&P.isValid&&P.texture&&m.init(P,i.renderState)}if(be&&be.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let P=0;P<de.length;P++){const ct=de[P].camera;if(ct){let Ue=p[ct];Ue||(Ue=new Yl,p[ct]=Ue);const Re=d.getCameraImage(ct);Ue.sourceTexture=Re}}}}for(let de=0;de<S.length;de++){const De=T[de],be=S[de];De!==null&&be!==void 0&&be.update(De,Z,l||o)}st&&st(Y,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Ye=new Kl;Ye.setAnimationLoop(at),this.setAnimationLoop=function(Y){st=Y},this.dispose=function(){}}}const ui=new pn,s0=new it;function r0(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Gl(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,ui.copy(x),ui.x*=-1,ui.y*=-1,ui.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),m.envMapRotation.value.setFromMatrix4(s0.makeRotationFromEuler(ui)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function o0(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function l(v,y){let x=i[v.id];x===void 0&&(g(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",m));const S=y.program;n.updateUBOMapping(v,S);const T=e.render.frame;r[v.id]!==T&&(u(v),r[v.id]=T)}function h(v){const y=d();v.__bindingPointIndex=y;const x=s.createBuffer(),S=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,S,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,x),x}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const y=i[v.id],x=v.uniforms,S=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let T=0,R=x.length;T<R;T++){const D=Array.isArray(x[T])?x[T]:[x[T]];for(let E=0,w=D.length;E<w;E++){const I=D[E];if(f(I,T,E,S)===!0){const O=I.__offset,k=Array.isArray(I.value)?I.value:[I.value];let V=0;for(let W=0;W<k.length;W++){const G=k[W],j=_(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,O+V,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,V),V+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,y,x,S){const T=v.value,R=y+"_"+x;if(S[R]===void 0)return typeof T=="number"||typeof T=="boolean"?S[R]=T:S[R]=T.clone(),!0;{const D=S[R];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return S[R]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function g(v){const y=v.uniforms;let x=0;const S=16;for(let R=0,D=y.length;R<D;R++){const E=Array.isArray(y[R])?y[R]:[y[R]];for(let w=0,I=E.length;w<I;w++){const O=E[w],k=Array.isArray(O.value)?O.value:[O.value];for(let V=0,W=k.length;V<W;V++){const G=k[V],j=_(G),H=x%S,se=H%j.boundary,ae=H+se;x+=se,ae!==0&&S-ae<j.storage&&(x+=S-ae),O.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=j.storage}}}const T=x%S;return T>0&&(x+=S-T),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class a0{constructor(e={}){const{canvas:t=Cu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let S=!1;this._outputColorSpace=vt;let T=0,R=0,D=null,E=-1,w=null;const I=new ft,O=new ft;let k=null;const V=new He(0);let W=0,G=t.width,j=t.height,H=1,se=null,ae=null;const xe=new ft(0,0,G,j),Be=new ft(0,0,G,j);let st=!1;const at=new Ga;let Ye=!1,Y=!1;const Z=new it,de=new C,De=new ft,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function Ut(){return D===null?H:1}let P=n;function ct(b,U){return t.getContext(b,U)}try{const b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ca}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",J,!1),P===null){const U="webgl2";if(P=ct(U,b),P===null)throw ct(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ue,Re,me,lt,ge,Fe,Et,pt,A,M,F,q,K,X,Me,ne,_e,ve,ee,le,Ae,ye,oe,Ne;function L(){Ue=new _m(P),Ue.init(),ye=new Qg(P,Ue),Re=new hm(P,Ue,e,ye),me=new Zg(P,Ue),Re.reversedDepthBuffer&&u&&me.buffers.depth.setReversed(!0),lt=new xm(P),ge=new kg,Fe=new Jg(P,Ue,me,ge,Re,ye,lt),Et=new dm(x),pt=new gm(x),A=new wd(P),oe=new cm(P,A),M=new vm(P,A,lt,oe),F=new bm(P,M,A,lt),ee=new Mm(P,Re,Fe),ne=new um(ge),q=new Og(x,Et,pt,Ue,Re,oe,ne),K=new r0(x,ge),X=new Bg,Me=new qg(Ue),ve=new am(x,Et,pt,me,F,f,c),_e=new jg(x,F,Re),Ne=new o0(P,lt,Re,me),le=new lm(P,Ue,lt),Ae=new ym(P,Ue,lt),lt.programs=q.programs,x.capabilities=Re,x.extensions=Ue,x.properties=ge,x.renderLists=X,x.shadowMap=_e,x.state=me,x.info=lt}L();const te=new i0(x,P);this.xr=te,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=Ue.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ue.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(G,j,!1))},this.getSize=function(b){return b.set(G,j)},this.setSize=function(b,U,z=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,j=U,t.width=Math.floor(b*H),t.height=Math.floor(U*H),z===!0&&(t.style.width=b+"px",t.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(G*H,j*H).floor()},this.setDrawingBufferSize=function(b,U,z){G=b,j=U,H=z,t.width=Math.floor(b*z),t.height=Math.floor(U*z),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(I)},this.getViewport=function(b){return b.copy(xe)},this.setViewport=function(b,U,z,B){b.isVector4?xe.set(b.x,b.y,b.z,b.w):xe.set(b,U,z,B),me.viewport(I.copy(xe).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(Be)},this.setScissor=function(b,U,z,B){b.isVector4?Be.set(b.x,b.y,b.z,b.w):Be.set(b,U,z,B),me.scissor(O.copy(Be).multiplyScalar(H).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(b){me.setScissorTest(st=b)},this.setOpaqueSort=function(b){se=b},this.setTransparentSort=function(b){ae=b},this.getClearColor=function(b){return b.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,z=!0){let B=0;if(b){let N=!1;if(D!==null){const Q=D.texture.format;N=Q===Oa||Q===Fa||Q===Na}if(N){const Q=D.texture.type,ce=Q===bn||Q===bi||Q===Is||Q===Ls||Q===Ia||Q===La,fe=ve.getClearColor(),he=ve.getClearAlpha(),Te=fe.r,Ce=fe.g,Se=fe.b;ce?(g[0]=Te,g[1]=Ce,g[2]=Se,g[3]=he,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Te,_[1]=Ce,_[2]=Se,_[3]=he,P.clearBufferiv(P.COLOR,0,_))}else B|=P.COLOR_BUFFER_BIT}U&&(B|=P.DEPTH_BUFFER_BIT),z&&(B|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",J,!1),ve.dispose(),X.dispose(),Me.dispose(),ge.dispose(),Et.dispose(),pt.dispose(),F.dispose(),oe.dispose(),Ne.dispose(),q.dispose(),te.dispose(),te.removeEventListener("sessionstart",mn),te.removeEventListener("sessionend",qa),ii.stop()};function ie(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=lt.autoReset,U=_e.enabled,z=_e.autoUpdate,B=_e.needsUpdate,N=_e.type;L(),lt.autoReset=b,_e.enabled=U,_e.autoUpdate=z,_e.needsUpdate=B,_e.type=N}function J(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function $(b){const U=b.target;U.removeEventListener("dispose",$),pe(U)}function pe(b){Le(b),ge.remove(b)}function Le(b){const U=ge.get(b).programs;U!==void 0&&(U.forEach(function(z){q.releaseProgram(z)}),b.isShaderMaterial&&q.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,z,B,N,Q){U===null&&(U=be);const ce=N.isMesh&&N.matrixWorld.determinant()<0,fe=fh(b,U,z,B,N);me.setMaterial(B,ce);let he=z.index,Te=1;if(B.wireframe===!0){if(he=M.getWireframeAttribute(z),he===void 0)return;Te=2}const Ce=z.drawRange,Se=z.attributes.position;let Ge=Ce.start*Te,Je=(Ce.start+Ce.count)*Te;Q!==null&&(Ge=Math.max(Ge,Q.start*Te),Je=Math.min(Je,(Q.start+Q.count)*Te)),he!==null?(Ge=Math.max(Ge,0),Je=Math.min(Je,he.count)):Se!=null&&(Ge=Math.max(Ge,0),Je=Math.min(Je,Se.count));const dt=Je-Ge;if(dt<0||dt===1/0)return;oe.setup(N,B,fe,z,he);let ot,tt=le;if(he!==null&&(ot=A.get(he),tt=Ae,tt.setIndex(ot)),N.isMesh)B.wireframe===!0?(me.setLineWidth(B.wireframeLinewidth*Ut()),tt.setMode(P.LINES)):tt.setMode(P.TRIANGLES);else if(N.isLine){let we=B.linewidth;we===void 0&&(we=1),me.setLineWidth(we*Ut()),N.isLineSegments?tt.setMode(P.LINES):N.isLineLoop?tt.setMode(P.LINE_LOOP):tt.setMode(P.LINE_STRIP)}else N.isPoints?tt.setMode(P.POINTS):N.isSprite&&tt.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ks("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))tt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const we=N._multiDrawStarts,ht=N._multiDrawCounts,Xe=N._multiDrawCount,qt=he?A.get(he).bytesPerElement:1,Ai=ge.get(B).currentProgram.getUniforms();for(let Yt=0;Yt<Xe;Yt++)Ai.setValue(P,"_gl_DrawID",Yt),tt.render(we[Yt]/qt,ht[Yt])}else if(N.isInstancedMesh)tt.renderInstances(Ge,dt,N.count);else if(z.isInstancedBufferGeometry){const we=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ht=Math.min(z.instanceCount,we);tt.renderInstances(Ge,dt,ht)}else tt.render(Ge,dt)};function rt(b,U,z){b.transparent===!0&&b.side===It&&b.forceSinglePass===!1?(b.side=Vt,b.needsUpdate=!0,Ys(b,U,z),b.side=Mn,b.needsUpdate=!0,Ys(b,U,z),b.side=It):Ys(b,U,z)}this.compile=function(b,U,z=null){z===null&&(z=b),p=Me.get(z),p.init(U),y.push(p),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),b!==z&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const B=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const Q=N.material;if(Q)if(Array.isArray(Q))for(let ce=0;ce<Q.length;ce++){const fe=Q[ce];rt(fe,z,N),B.add(fe)}else rt(Q,z,N),B.add(Q)}),p=y.pop(),B},this.compileAsync=function(b,U,z=null){const B=this.compile(b,U,z);return new Promise(N=>{function Q(){if(B.forEach(function(ce){ge.get(ce).currentProgram.isReady()&&B.delete(ce)}),B.size===0){N(b);return}setTimeout(Q,10)}Ue.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let $e=null;function Sn(b){$e&&$e(b)}function mn(){ii.stop()}function qa(){ii.start()}const ii=new Kl;ii.setAnimationLoop(Sn),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(b){$e=b,te.setAnimationLoop(b),b===null?ii.stop():ii.start()},te.addEventListener("sessionstart",mn),te.addEventListener("sessionend",qa),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(U),U=te.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,U,D),p=Me.get(b,y.length),p.init(U),y.push(p),Z.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),at.setFromProjectionMatrix(Z,yn,U.reversedDepth),Y=this.localClippingEnabled,Ye=ne.init(this.clippingPlanes,Y),m=X.get(b,v.length),m.init(),v.push(m),te.enabled===!0&&te.isPresenting===!0){const Q=x.xr.getDepthSensingMesh();Q!==null&&Wr(Q,U,-1/0,x.sortObjects)}Wr(b,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(se,ae),Ve=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Ve&&ve.addToRenderList(m,b),this.info.render.frame++,Ye===!0&&ne.beginShadows();const z=p.state.shadowsArray;_e.render(z,b,U),Ye===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const Q=U.cameras;if(N.length>0)for(let ce=0,fe=Q.length;ce<fe;ce++){const he=Q[ce];$a(B,N,b,he)}Ve&&ve.render(b);for(let ce=0,fe=Q.length;ce<fe;ce++){const he=Q[ce];Ya(m,b,he,he.viewport)}}else N.length>0&&$a(B,N,b,U),Ve&&ve.render(b),Ya(m,b,U);D!==null&&R===0&&(Fe.updateMultisampleRenderTarget(D),Fe.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(x,b,U),oe.resetDefaultState(),E=-1,w=null,y.pop(),y.length>0?(p=y[y.length-1],Ye===!0&&ne.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Wr(b,U,z,B){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||at.intersectsSprite(b)){B&&De.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Z);const ce=F.update(b),fe=b.material;fe.visible&&m.push(b,ce,fe,z,De.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||at.intersectsObject(b))){const ce=F.update(b),fe=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),De.copy(b.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),De.copy(ce.boundingSphere.center)),De.applyMatrix4(b.matrixWorld).applyMatrix4(Z)),Array.isArray(fe)){const he=ce.groups;for(let Te=0,Ce=he.length;Te<Ce;Te++){const Se=he[Te],Ge=fe[Se.materialIndex];Ge&&Ge.visible&&m.push(b,ce,Ge,z,De.z,Se)}}else fe.visible&&m.push(b,ce,fe,z,De.z,null)}}const Q=b.children;for(let ce=0,fe=Q.length;ce<fe;ce++)Wr(Q[ce],U,z,B)}function Ya(b,U,z,B){const N=b.opaque,Q=b.transmissive,ce=b.transparent;p.setupLightsView(z),Ye===!0&&ne.setGlobalState(x.clippingPlanes,z),B&&me.viewport(I.copy(B)),N.length>0&&qs(N,U,z),Q.length>0&&qs(Q,U,z),ce.length>0&&qs(ce,U,z),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function $a(b,U,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new Si(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?Vs:bn,minFilter:Ln,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const Q=p.state.transmissionRenderTarget[B.id],ce=B.viewport||I;Q.setSize(ce.z*x.transmissionResolutionScale,ce.w*x.transmissionResolutionScale);const fe=x.getRenderTarget(),he=x.getActiveCubeFace(),Te=x.getActiveMipmapLevel();x.setRenderTarget(Q),x.getClearColor(V),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Ve&&ve.render(z);const Ce=x.toneMapping;x.toneMapping=Jn;const Se=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),Ye===!0&&ne.setGlobalState(x.clippingPlanes,B),qs(b,z,B),Fe.updateMultisampleRenderTarget(Q),Fe.updateRenderTargetMipmap(Q),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Je=0,dt=U.length;Je<dt;Je++){const ot=U[Je],tt=ot.object,we=ot.geometry,ht=ot.material,Xe=ot.group;if(ht.side===It&&tt.layers.test(B.layers)){const qt=ht.side;ht.side=Vt,ht.needsUpdate=!0,ja(tt,z,B,we,ht,Xe),ht.side=qt,ht.needsUpdate=!0,Ge=!0}}Ge===!0&&(Fe.updateMultisampleRenderTarget(Q),Fe.updateRenderTargetMipmap(Q))}x.setRenderTarget(fe,he,Te),x.setClearColor(V,W),Se!==void 0&&(B.viewport=Se),x.toneMapping=Ce}function qs(b,U,z){const B=U.isScene===!0?U.overrideMaterial:null;for(let N=0,Q=b.length;N<Q;N++){const ce=b[N],fe=ce.object,he=ce.geometry,Te=ce.group;let Ce=ce.material;Ce.allowOverride===!0&&B!==null&&(Ce=B),fe.layers.test(z.layers)&&ja(fe,U,z,he,Ce,Te)}}function ja(b,U,z,B,N,Q){b.onBeforeRender(x,U,z,B,N,Q),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(x,U,z,B,b,Q),N.transparent===!0&&N.side===It&&N.forceSinglePass===!1?(N.side=Vt,N.needsUpdate=!0,x.renderBufferDirect(z,U,B,N,b,Q),N.side=Mn,N.needsUpdate=!0,x.renderBufferDirect(z,U,B,N,b,Q),N.side=It):x.renderBufferDirect(z,U,B,N,b,Q),b.onAfterRender(x,U,z,B,N,Q)}function Ys(b,U,z){U.isScene!==!0&&(U=be);const B=ge.get(b),N=p.state.lights,Q=p.state.shadowsArray,ce=N.state.version,fe=q.getParameters(b,N.state,Q,U,z),he=q.getProgramCacheKey(fe);let Te=B.programs;B.environment=b.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(b.isMeshStandardMaterial?pt:Et).get(b.envMap||B.environment),B.envMapRotation=B.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Te===void 0&&(b.addEventListener("dispose",$),Te=new Map,B.programs=Te);let Ce=Te.get(he);if(Ce!==void 0){if(B.currentProgram===Ce&&B.lightsStateVersion===ce)return Za(b,fe),Ce}else fe.uniforms=q.getUniforms(b),b.onBeforeCompile(fe,x),Ce=q.acquireProgram(fe,he),Te.set(he,Ce),B.uniforms=fe.uniforms;const Se=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Se.clippingPlanes=ne.uniform),Za(b,fe),B.needsLights=mh(b),B.lightsStateVersion=ce,B.needsLights&&(Se.ambientLightColor.value=N.state.ambient,Se.lightProbe.value=N.state.probe,Se.directionalLights.value=N.state.directional,Se.directionalLightShadows.value=N.state.directionalShadow,Se.spotLights.value=N.state.spot,Se.spotLightShadows.value=N.state.spotShadow,Se.rectAreaLights.value=N.state.rectArea,Se.ltc_1.value=N.state.rectAreaLTC1,Se.ltc_2.value=N.state.rectAreaLTC2,Se.pointLights.value=N.state.point,Se.pointLightShadows.value=N.state.pointShadow,Se.hemisphereLights.value=N.state.hemi,Se.directionalShadowMap.value=N.state.directionalShadowMap,Se.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Se.spotShadowMap.value=N.state.spotShadowMap,Se.spotLightMatrix.value=N.state.spotLightMatrix,Se.spotLightMap.value=N.state.spotLightMap,Se.pointShadowMap.value=N.state.pointShadowMap,Se.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Ce,B.uniformsList=null,Ce}function Ka(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Dr.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Za(b,U){const z=ge.get(b);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function fh(b,U,z,B,N){U.isScene!==!0&&(U=be),Fe.resetTextureUnits();const Q=U.fog,ce=B.isMeshStandardMaterial?U.environment:null,fe=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:as,he=(B.isMeshStandardMaterial?pt:Et).get(B.envMap||ce),Te=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ce=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Se=!!z.morphAttributes.position,Ge=!!z.morphAttributes.normal,Je=!!z.morphAttributes.color;let dt=Jn;B.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(dt=x.toneMapping);const ot=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,tt=ot!==void 0?ot.length:0,we=ge.get(B),ht=p.state.lights;if(Ye===!0&&(Y===!0||b!==w)){const zt=b===w&&B.id===E;ne.setState(B,b,zt)}let Xe=!1;B.version===we.__version?(we.needsLights&&we.lightsStateVersion!==ht.state.version||we.outputColorSpace!==fe||N.isBatchedMesh&&we.batching===!1||!N.isBatchedMesh&&we.batching===!0||N.isBatchedMesh&&we.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&we.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&we.instancing===!1||!N.isInstancedMesh&&we.instancing===!0||N.isSkinnedMesh&&we.skinning===!1||!N.isSkinnedMesh&&we.skinning===!0||N.isInstancedMesh&&we.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&we.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&we.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&we.instancingMorph===!1&&N.morphTexture!==null||we.envMap!==he||B.fog===!0&&we.fog!==Q||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ne.numPlanes||we.numIntersection!==ne.numIntersection)||we.vertexAlphas!==Te||we.vertexTangents!==Ce||we.morphTargets!==Se||we.morphNormals!==Ge||we.morphColors!==Je||we.toneMapping!==dt||we.morphTargetsCount!==tt)&&(Xe=!0):(Xe=!0,we.__version=B.version);let qt=we.currentProgram;Xe===!0&&(qt=Ys(B,U,N));let Ai=!1,Yt=!1,ds=!1;const ut=qt.getUniforms(),Jt=we.uniforms;if(me.useProgram(qt.program)&&(Ai=!0,Yt=!0,ds=!0),B.id!==E&&(E=B.id,Yt=!0),Ai||w!==b){me.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ut.setValue(P,"projectionMatrix",b.projectionMatrix),ut.setValue(P,"viewMatrix",b.matrixWorldInverse);const Wt=ut.map.cameraPosition;Wt!==void 0&&Wt.setValue(P,de.setFromMatrixPosition(b.matrixWorld)),Re.logarithmicDepthBuffer&&ut.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ut.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),w!==b&&(w=b,Yt=!0,ds=!0)}if(N.isSkinnedMesh){ut.setOptional(P,N,"bindMatrix"),ut.setOptional(P,N,"bindMatrixInverse");const zt=N.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),ut.setValue(P,"boneTexture",zt.boneTexture,Fe))}N.isBatchedMesh&&(ut.setOptional(P,N,"batchingTexture"),ut.setValue(P,"batchingTexture",N._matricesTexture,Fe),ut.setOptional(P,N,"batchingIdTexture"),ut.setValue(P,"batchingIdTexture",N._indirectTexture,Fe),ut.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&ut.setValue(P,"batchingColorTexture",N._colorsTexture,Fe));const Qt=z.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&ee.update(N,z,qt),(Yt||we.receiveShadow!==N.receiveShadow)&&(we.receiveShadow=N.receiveShadow,ut.setValue(P,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Jt.envMap.value=he,Jt.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(Jt.envMapIntensity.value=U.environmentIntensity),Yt&&(ut.setValue(P,"toneMappingExposure",x.toneMappingExposure),we.needsLights&&ph(Jt,ds),Q&&B.fog===!0&&K.refreshFogUniforms(Jt,Q),K.refreshMaterialUniforms(Jt,B,H,j,p.state.transmissionRenderTarget[b.id]),Dr.upload(P,Ka(we),Jt,Fe)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Dr.upload(P,Ka(we),Jt,Fe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ut.setValue(P,"center",N.center),ut.setValue(P,"modelViewMatrix",N.modelViewMatrix),ut.setValue(P,"normalMatrix",N.normalMatrix),ut.setValue(P,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const zt=B.uniformsGroups;for(let Wt=0,Xr=zt.length;Wt<Xr;Wt++){const si=zt[Wt];Ne.update(si,qt),Ne.bind(si,qt)}}return qt}function ph(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function mh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,U,z){const B=ge.get(b);B.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),ge.get(b.texture).__webglTexture=U,ge.get(b.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:z,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){const z=ge.get(b);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const gh=P.createFramebuffer();this.setRenderTarget=function(b,U=0,z=0){D=b,T=U,R=z;let B=!0,N=null,Q=!1,ce=!1;if(b){const he=ge.get(b);if(he.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(P.FRAMEBUFFER,null),B=!1;else if(he.__webglFramebuffer===void 0)Fe.setupRenderTarget(b);else if(he.__hasExternalTextures)Fe.rebindTextures(b,ge.get(b.texture).__webglTexture,ge.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Se=b.depthTexture;if(he.__boundDepthTexture!==Se){if(Se!==null&&ge.has(Se)&&(b.width!==Se.image.width||b.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(b)}}const Te=b.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ce=!0);const Ce=ge.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ce[U])?N=Ce[U][z]:N=Ce[U],Q=!0):b.samples>0&&Fe.useMultisampledRTT(b)===!1?N=ge.get(b).__webglMultisampledFramebuffer:Array.isArray(Ce)?N=Ce[z]:N=Ce,I.copy(b.viewport),O.copy(b.scissor),k=b.scissorTest}else I.copy(xe).multiplyScalar(H).floor(),O.copy(Be).multiplyScalar(H).floor(),k=st;if(z!==0&&(N=gh),me.bindFramebuffer(P.FRAMEBUFFER,N)&&B&&me.drawBuffers(b,N),me.viewport(I),me.scissor(O),me.setScissorTest(k),Q){const he=ge.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,he.__webglTexture,z)}else if(ce){const he=U;for(let Te=0;Te<b.textures.length;Te++){const Ce=ge.get(b.textures[Te]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Te,Ce.__webglTexture,z,he)}}else if(b!==null&&z!==0){const he=ge.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,he.__webglTexture,z)}E=-1},this.readRenderTargetPixels=function(b,U,z,B,N,Q,ce,fe=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ce!==void 0&&(he=he[ce]),he){me.bindFramebuffer(P.FRAMEBUFFER,he);try{const Te=b.textures[fe],Ce=Te.format,Se=Te.type;if(!Re.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-B&&z>=0&&z<=b.height-N&&(b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+fe),P.readPixels(U,z,B,N,ye.convert(Ce),ye.convert(Se),Q))}finally{const Te=D!==null?ge.get(D).__webglFramebuffer:null;me.bindFramebuffer(P.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(b,U,z,B,N,Q,ce,fe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ce!==void 0&&(he=he[ce]),he)if(U>=0&&U<=b.width-B&&z>=0&&z<=b.height-N){me.bindFramebuffer(P.FRAMEBUFFER,he);const Te=b.textures[fe],Ce=Te.format,Se=Te.type;if(!Re.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ge),P.bufferData(P.PIXEL_PACK_BUFFER,Q.byteLength,P.STREAM_READ),b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+fe),P.readPixels(U,z,B,N,ye.convert(Ce),ye.convert(Se),0);const Je=D!==null?ge.get(D).__webglFramebuffer:null;me.bindFramebuffer(P.FRAMEBUFFER,Je);const dt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Pu(P,dt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ge),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Q),P.deleteBuffer(Ge),P.deleteSync(dt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,z=0){const B=Math.pow(2,-z),N=Math.floor(b.image.width*B),Q=Math.floor(b.image.height*B),ce=U!==null?U.x:0,fe=U!==null?U.y:0;Fe.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,ce,fe,N,Q),me.unbindTexture()};const _h=P.createFramebuffer(),vh=P.createFramebuffer();this.copyTextureToTexture=function(b,U,z=null,B=null,N=0,Q=null){Q===null&&(N!==0?(ks("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=N,N=0):Q=0);let ce,fe,he,Te,Ce,Se,Ge,Je,dt;const ot=b.isCompressedTexture?b.mipmaps[Q]:b.image;if(z!==null)ce=z.max.x-z.min.x,fe=z.max.y-z.min.y,he=z.isBox3?z.max.z-z.min.z:1,Te=z.min.x,Ce=z.min.y,Se=z.isBox3?z.min.z:0;else{const Qt=Math.pow(2,-N);ce=Math.floor(ot.width*Qt),fe=Math.floor(ot.height*Qt),b.isDataArrayTexture?he=ot.depth:b.isData3DTexture?he=Math.floor(ot.depth*Qt):he=1,Te=0,Ce=0,Se=0}B!==null?(Ge=B.x,Je=B.y,dt=B.z):(Ge=0,Je=0,dt=0);const tt=ye.convert(U.format),we=ye.convert(U.type);let ht;U.isData3DTexture?(Fe.setTexture3D(U,0),ht=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Fe.setTexture2DArray(U,0),ht=P.TEXTURE_2D_ARRAY):(Fe.setTexture2D(U,0),ht=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Xe=P.getParameter(P.UNPACK_ROW_LENGTH),qt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ai=P.getParameter(P.UNPACK_SKIP_PIXELS),Yt=P.getParameter(P.UNPACK_SKIP_ROWS),ds=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ot.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ot.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Te),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ce),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Se);const ut=b.isDataArrayTexture||b.isData3DTexture,Jt=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const Qt=ge.get(b),zt=ge.get(U),Wt=ge.get(Qt.__renderTarget),Xr=ge.get(zt.__renderTarget);me.bindFramebuffer(P.READ_FRAMEBUFFER,Wt.__webglFramebuffer),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Xr.__webglFramebuffer);for(let si=0;si<he;si++)ut&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ge.get(b).__webglTexture,N,Se+si),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ge.get(U).__webglTexture,Q,dt+si)),P.blitFramebuffer(Te,Ce,ce,fe,Ge,Je,ce,fe,P.DEPTH_BUFFER_BIT,P.NEAREST);me.bindFramebuffer(P.READ_FRAMEBUFFER,null),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(N!==0||b.isRenderTargetTexture||ge.has(b)){const Qt=ge.get(b),zt=ge.get(U);me.bindFramebuffer(P.READ_FRAMEBUFFER,_h),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,vh);for(let Wt=0;Wt<he;Wt++)ut?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Qt.__webglTexture,N,Se+Wt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Qt.__webglTexture,N),Jt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,zt.__webglTexture,Q,dt+Wt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,zt.__webglTexture,Q),N!==0?P.blitFramebuffer(Te,Ce,ce,fe,Ge,Je,ce,fe,P.COLOR_BUFFER_BIT,P.NEAREST):Jt?P.copyTexSubImage3D(ht,Q,Ge,Je,dt+Wt,Te,Ce,ce,fe):P.copyTexSubImage2D(ht,Q,Ge,Je,Te,Ce,ce,fe);me.bindFramebuffer(P.READ_FRAMEBUFFER,null),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Jt?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(ht,Q,Ge,Je,dt,ce,fe,he,tt,we,ot.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(ht,Q,Ge,Je,dt,ce,fe,he,tt,ot.data):P.texSubImage3D(ht,Q,Ge,Je,dt,ce,fe,he,tt,we,ot):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Q,Ge,Je,ce,fe,tt,we,ot.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Q,Ge,Je,ot.width,ot.height,tt,ot.data):P.texSubImage2D(P.TEXTURE_2D,Q,Ge,Je,ce,fe,tt,we,ot);P.pixelStorei(P.UNPACK_ROW_LENGTH,Xe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,qt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ai),P.pixelStorei(P.UNPACK_SKIP_ROWS,Yt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ds),Q===0&&U.generateMipmaps&&P.generateMipmap(ht),me.unbindTexture()},this.initRenderTarget=function(b){ge.get(b).__webglFramebuffer===void 0&&Fe.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Fe.setTextureCube(b,0):b.isData3DTexture?Fe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Fe.setTexture2DArray(b,0):Fe.setTexture2D(b,0),me.unbindTexture()},this.resetState=function(){T=0,R=0,D=null,me.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const cl={type:"change"},Wa={type:"start"},th={type:"end"},Sr=new Hr,ll=new Xn,c0=Math.cos(70*nn.DEG2RAD),yt=new C,Xt=2*Math.PI,et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ao=1e-6;class l0 extends Sd{constructor(e,t=null){super(e,t),this.state=et.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:Zi.ROTATE,TWO:Zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new On,this._lastTargetPosition=new C,this._quat=new On().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xi,this._sphericalDelta=new xi,this._scale=1,this._panOffset=new C,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new C,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=u0.bind(this),this._onPointerDown=h0.bind(this),this._onPointerUp=d0.bind(this),this._onContextMenu=y0.bind(this),this._onMouseWheel=m0.bind(this),this._onKeyDown=g0.bind(this),this._onTouchStart=_0.bind(this),this._onTouchMove=v0.bind(this),this._onMouseDown=f0.bind(this),this._onMouseMove=p0.bind(this),this._interceptControlDown=x0.bind(this),this._interceptControlUp=M0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cl),this.update(),this.state=et.NONE}update(e=null){const t=this.object.position;yt.copy(t).sub(this.target),yt.applyQuaternion(this._quat),this._spherical.setFromVector3(yt),this.autoRotate&&this.state===et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Xt:n>Math.PI&&(n-=Xt),i<-Math.PI?i+=Xt:i>Math.PI&&(i-=Xt),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(yt.setFromSpherical(this._spherical),yt.applyQuaternion(this._quatInverse),t.copy(this.target).add(yt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=yt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new C(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=yt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Sr.origin.copy(this.object.position),Sr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Sr.direction))<c0?this.object.lookAt(this.target):(ll.setFromNormalAndCoplanarPoint(this.object.up,this.target),Sr.intersectPlane(ll,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ao||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ao||this._lastTargetPosition.distanceToSquared(this.target)>Ao?(this.dispatchEvent(cl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Xt/60*this.autoRotateSpeed*e:Xt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){yt.setFromMatrixColumn(t,0),yt.multiplyScalar(-e),this._panOffset.add(yt)}_panUp(e,t){this.screenSpacePanning===!0?yt.setFromMatrixColumn(t,1):(yt.setFromMatrixColumn(t,0),yt.crossVectors(this.object.up,yt)),yt.multiplyScalar(e),this._panOffset.add(yt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;yt.copy(i).sub(this.target);let r=yt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ee,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function h0(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function u0(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function d0(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(th),this.state=et.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function f0(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case es.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=et.DOLLY;break;case es.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=et.ROTATE}break;case es.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=et.PAN}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(Wa)}function p0(s){switch(this.state){case et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function m0(s){this.enabled===!1||this.enableZoom===!1||this.state!==et.NONE||(s.preventDefault(),this.dispatchEvent(Wa),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(th))}function g0(s){this.enabled!==!1&&this._handleKeyDown(s)}function _0(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Zi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=et.TOUCH_ROTATE;break;case Zi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=et.TOUCH_PAN;break;default:this.state=et.NONE}break;case 2:switch(this.touches.TWO){case Zi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=et.TOUCH_DOLLY_PAN;break;case Zi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=et.TOUCH_DOLLY_ROTATE;break;default:this.state=et.NONE}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(Wa)}function v0(s){switch(this._trackPointer(s),this.state){case et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=et.NONE}}function y0(s){this.enabled!==!1&&s.preventDefault()}function x0(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function M0(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function b0(s,e,t,n){s.magFilter=Pt,s.minFilter=Pt,s.generateMipmaps=!1,s.colorSpace=vt;const i=e.atlas;if(!i)return{texture:s,atlas:e,maxFootprint:0};const r=nn.ceilPowerOfTwo(i.tileSize*2),o=(r-i.tileSize)/2,a=Math.min(i.columns,Math.floor(t/r)),c=i.columns*i.rows,l=Math.ceil(c/a);if(!a||l*r>t)return{texture:s,atlas:e,maxFootprint:0};const h=document.createElement("canvas");h.width=a*r,h.height=l*r;const d=h.getContext("2d");if(!d)return{texture:s,atlas:e,maxFootprint:0};d.imageSmoothingEnabled=!1;const u=s.image;for(let g=0;g<c;g++){const _=g%i.columns*i.stride+i.padding,m=Math.floor(g/i.columns)*i.stride+i.padding,p=g%a*r,v=Math.floor(g/a)*r,y=[0,0,i.tileSize-1],x=[1,i.tileSize,1],S=[0,o,o+i.tileSize],T=[o,i.tileSize,o];for(let R=0;R<3;R++)for(let D=0;D<3;D++)d.drawImage(u,_+y[D],m+y[R],x[D],x[R],p+S[D],v+S[R],T[D],T[R])}const f=new Ws(h);return f.colorSpace=vt,f.magFilter=rn,f.minFilter=Ln,f.anisotropy=Math.max(1,n),{texture:f,atlas:{...e,atlas:{...i,width:h.width,height:h.height,columns:a,rows:l,stride:r,padding:o}},maxFootprint:o}}function ei(s,e,t){t&&(s.customProgramCacheKey=()=>"village-atlas-sampling-v1",s.onBeforeCompile=n=>{n.uniforms.villageAtlasSize={value:new Ee(e.image.width,e.image.height)},n.uniforms.villageMaxFootprint={value:t},n.fragmentShader=n.fragmentShader.replace("#include <map_pars_fragment>",`#include <map_pars_fragment>
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
      `)})}const nh=["east","west","up","down","south","north"];function ih(s){const[e,t,n]=s.size,i=s.uv??[0,0];if(!Array.isArray(i))return Object.fromEntries(nh.map(a=>{const c=i[a];if(!c)return[a,void 0];const l=c.uv_size||c.uvSize||(a==="up"||a==="down"?[e,n]:a==="east"||a==="west"?[n,t]:[e,t]);return[a,[...c.uv,...l]]}));const[r,o]=i;return{west:[r,o+n,n,t],north:[r+n,o+n,e,t],east:[r+n+e,o+n,n,t],south:[r+2*n+e,o+n,e,t],up:[r+n,o,e,n],down:[r+n+e,o,e,n]}}function hl(s,e,t,n=0,i=!1){const r=s.inflate??n,o=new on(...s.size.map(u=>Math.max(0,u+r*2)/16)),a=ih(s),c=s.mirror??i,l=o.getAttribute("uv"),h=Array.from(o.getIndex().array),d=[];nh.forEach((u,f)=>{const _=a[c&&u==="east"?"west":c&&u==="west"?"east":u];if(!_)return;const[m,p,v,y]=_,x=(c?m+v:m)/e,S=(c?m:m+v)/e,T=u==="down"&&(s.uv===void 0||Array.isArray(s.uv)),R=1-(p+(T?y:0))/t,D=1-(p+(T?0:y))/t,E=[x,R,S,R,x,D,S,D];for(let w=0;w<4;w++)l.setXY(f*4+w,E[w*2],E[w*2+1]);d.push(...h.slice(f*6,f*6+6))}),o.clearGroups(),o.scale(-1,1,1);for(let u=0;u<d.length;u+=3)[d[u+1],d[u+2]]=[d[u+2],d[u+1]];return o.setIndex(d),o.computeBoundingSphere(),o}const Ro=s=>s*Math.PI/180;function Cs(s=[0,0,0]){return new pn(-Ro(s[0]),-Ro(s[1]),Ro(s[2]),"ZYX")}function S0(s,e,t,n,i=[]){const r=new Ze,o=new Map,a=new Map(s.bones.map(u=>[u.name.toLowerCase(),u])),c=u=>o.get(a.get(u.toLowerCase()).name),l=new Map(Object.entries(n||{}).map(([u,f])=>[u.toLowerCase(),f])),h=new Set(i.map(u=>u.toLowerCase()));let d=0;for(const u of s.bones){const f=new Ze;f.name=u.name,f.visible=!h.has(u.name.toLowerCase()),f.rotation.copy(Cs(l.get(u.name.toLowerCase())||u.rotation)),o.set(u.name,f)}for(const u of s.bones){const f=o.get(u.name),g=u.pivot||[0,0,0],_=u.parent?a.get(u.parent.toLowerCase())?.pivot||[0,0,0]:[0,0,0];f.position.set(-(g[0]-_[0])/16,(g[1]-_[1])/16,(g[2]-_[2])/16),(u.parent?c(u.parent):r).add(f);const m=new Ze;m.rotation.copy(Cs(u.bind_pose_rotation)),f.add(m);for(const[p,v]of(u.cubes||[]).entries()){const y=new Pe(t(v,`${u.name}:${p}`,u.inflate,u.mirror),e),x=v.rotation?v.pivot||v.origin.map((S,T)=>S+v.size[T]/2):g;if(y.position.set(-(v.origin[0]+v.size[0]/2-x[0])/16,(v.origin[1]+v.size[1]/2-x[1])/16,(v.origin[2]+v.size[2]/2-x[2])/16),v.rotation){const S=new Ze;S.position.set(-(x[0]-g[0])/16,(x[1]-g[1])/16,(x[2]-g[2])/16),S.rotation.copy(Cs(v.rotation)),S.add(y),m.add(S)}else m.add(y);d++}}return r.scale.setScalar(s.scale??1),{group:r,bones:o,cubes:d}}const $i=s=>s.toLowerCase();function E0(s,e,t){const n=new Map([...s.bones].map(([c,l])=>[$i(c),l])),i=(c,l)=>n.get($i(c))?.rotation.copy(Cs(l)),r=(c,l)=>n.get($i(c))?.position.add({x:-l[0]/16,y:l[1]/16,z:l[2]/16}),o=(c,l)=>{const h=n.get($i(c));h&&(Array.isArray(l)?h.scale.set(...l):h.scale.setScalar(l))},a=c=>{for(const[l,h]of n)c.test(l)&&(h.visible=!1)};if(["minecraft:zombie","minecraft:husk","minecraft:drowned","minecraft:zombie_villager_v2"].includes(t.type)&&(i("rightarm",[-90,0,0]),i("leftarm",[-90,0,0])),(t.type==="minecraft:vindicator"||t.type==="minecraft:evocation_illager")&&a(/^(?:left|right)(?:arm|item)$/),(t.type==="minecraft:spider"||t.type==="minecraft:cave_spider")&&[[0,45,-45],[0,-45,45],[0,22.5,-33.3],[0,-22.5,33.3],[0,-22.5,-33.3],[0,22.5,33.3],[0,-45,-45],[0,45,45]].forEach((l,h)=>i(`leg${h}`,l)),t.type==="minecraft:blaze")for(let c=0;c<12;c++){const l=Math.floor(c/4),h=(c%4*90+[0,45,27][l])*Math.PI/180,d=[9,7,5][l];r(`upperbodyparts${c}`,[Math.cos(h)*d,[2,-2,-11][l]+Math.cos(c*(l===2?1.5:2)*14.32*Math.PI/180),Math.sin(h)*d])}if(t.type==="minecraft:guardian"||t.type==="minecraft:elder_guardian"){const c=[[-45,0,0],[45,0,0],[0,0,45],[0,0,-45],[90,45,0],[90,-45,0],[90,-135,0],[90,135,0],[-135,0,0],[135,0,0],[0,0,135],[0,0,-135]];[[0,1,1],[0,1,-1],[1,1,0],[-1,1,0],[-1,0,-1],[1,0,-1],[1,0,1],[-1,0,1],[0,-1,1],[0,-1,-1],[1,-1,0],[-1,-1,0]].forEach(([h,d,u],f)=>{const g=`spikepart${f}`,_=8*(1+Math.cos(f*Math.PI/180)*.01),m=[h*_,d===1?24-_:d===-1?_-8:8,u*_],p=e.bones.find(v=>$i(v.name)===g)?.pivot||[0,24,0];r(g,m.map((v,y)=>v-p[y])),i(g,c[f])}),r("eye",[0,0,-8.25]),r("tailpart1",[-1.5,-.5,14]),r("tailpart2",[.5,-.5,6])}if(t.type.endsWith("minecart")&&n.has("root")&&r("root",[0,-18.5,0]),t.type==="minecraft:tripod_camera"&&(s.group.position.y+=24/16,i("leg0",[18,0,0]),i("leg1",[-18,0,0]),i("leg2",[0,0,18]),i("leg3",[0,0,-18])),["minecraft:horse","minecraft:donkey","minecraft:mule","minecraft:skeleton_horse","minecraft:zombie_horse"].includes(t.type)&&(t.saddled||a(/^(saddle|bit|bridle)/),a(/^reins/),(t.type==="minecraft:horse"||!t.chested)&&a(/^bag/),a(t.type==="minecraft:donkey"||t.type==="minecraft:mule"?/^ear/:/^muleear/)),t.type==="minecraft:ender_crystal"&&(t.showBottom||a(/^base$/),i("outerglass",[39.2,14.5,-39.2]),r("outerglass",[0,16,0]),i("innerglass",[39.2,14.5,-39.2]),n.get("innerglass")?.scale.setScalar(.875),i("crystal",[219.2,14.5,-39.2]),n.get("crystal")?.scale.setScalar(.875)),t.type==="minecraft:cat"&&t.sitting){for(const c of["backlegl","backlegr"])i(c,[-45,0,0]),r(c,[0,0,1]);i("body",[-45,0,0]),r("body",[0,-1,0]);for(const c of["frontlegl","frontlegr"])i(c,[42.15,0,0]),r(c,[0,-4.5,-1]);i("tail1",[45,0,0]),r("tail1",[0,-3,1]),i("tail2",[45,0,0]),r("head",[0,-1.25,0])}if(t.type==="minecraft:wolf"){const c=t.sitting?{body:[0,6,0],leg0:[-2.5,2,2],leg1:[.5,2,2],leg2:[-2.49,7,-4],leg3:[.51,7,-4],tail:[-1,3,6],upperbody:[-1,8,-3]}:{body:[0,10,2],leg0:[-2.5,8,7],leg1:[.5,8,7],leg2:[-2.5,8,-4],leg3:[.5,8,-4],tail:[-1,12,8],upperbody:[-1,10,-3]};for(const[l,h]of Object.entries(c)){const d=e.bones.find(u=>$i(u.name)===l)?.pivot||[0,0,0];r(l,h.map((u,f)=>u-d[f]))}i("body",[t.sitting?45:90,0,0]),i("upperbody",[t.sitting?72:90,0,0]),t.sitting&&(i("leg0",[270,0,0]),i("leg1",[270,0,0]),i("leg2",[333,0,0]),i("leg3",[333,0,0]))}if(t.type==="minecraft:parrot"){i("wing0",[-40,-180,t.sitting?-5:0]),i("wing1",[-40,-180,t.sitting?5:0]);for(const c of["leg0","leg1"])r(c,[0,.5,-.5]),i(c,[t.sitting?73.287:3.287,0,0]);i("tail",[t.sitting?90:60,0,0]),t.sitting&&r("body",[0,-1.9,0])}if(t.type==="minecraft:enderman"&&(r("head",[0,14,0]),r("hat",[0,-14,0]),r("rightarm",[-2,0,0]),r("leftleg",[0,4,0]),r("rightleg",[0,4,0]),t.carriedBlock&&(i("leftarm",[-28.65,0,-2.87]),i("rightarm",[-28.65,0,2.87])),t.angry&&(r("head",[0,5,0]),r("hat",[0,-5,0]))),t.type==="minecraft:panda"&&(t.sitting||t.scared||t.eating)&&(r("body",[0,-12.15,0]),i("body",[-90+(t.scared?16.2:0),0,0]),i("head",[t.eating?90:100,0,0]),i("leg0",[0,0,32.7]),i("leg1",[0,0,-32.7]),i("leg2",[t.eating?-23:0,0,-15]),i("leg3",[t.eating?-23:0,0,15])),t.type==="minecraft:drowned"&&t.swimming&&(r("body",[0,-10,9]),i("body",[90+(t.rotation?.pitch||0),0,0]),i("leftarm",[-180,14.325,8.595]),i("rightarm",[-180,14.325,-8.595]),i("leftleg",[-.3,0,0]),i("rightleg",[.3,0,0])),t.baby){const c=t.type.slice(10);if(["cow","mooshroom","pig","sheep"].includes(c)&&(r("head",[0,4,4]),o("head",2)),c==="chicken"&&o("head",2),(c==="cat"||c==="ocelot")&&o("head",1.5),c==="fox"&&(r("head",[0,4,4]),o("head",1.3)),c==="wolf"&&(r("head",[0,1,-2]),o("head",1.6)),(c==="hoglin"||c==="zoglin")&&(r("head",[0,10,4]),o("head",1.4)),["zombie","husk","drowned","zombie_villager","zombie_villager_v2","piglin","zombie_pigman"].includes(c)&&o("head",1.4),(c==="villager"||c==="villager_v2")&&o("head",1.5),c==="panda"&&(r("body",[0,1.77,0]),o("body",[1.15,1.15,1]),r("head",[0,-.18,.15]),o("head",1.8)),c==="rabbit")for(const l of["head","earleft","earright","nose"])r(l,[0,-1,1]),o(l,1.5);if(c==="llama"){r("body",[0,-5.5,-5]),o("body",[1.2,1,1]),r("head",[0,2,0]),o("head",[1.3,1.2,1.2]);for(const l of["leg0","leg1","leg2","leg3"])r(l,[0,-1,0]),o(l,[.91,.56,.91])}if(["horse","donkey","mule","skeleton_horse","zombie_horse"].includes(c)){const l=1-(t.scale??.5);r("body",[0,11*l,0]),o("head",1+.5*l);for(const h of["legbl","legbr","legfl","legfr"])o(h,[1,1+l,1])}}}const In=3/16,$n=s=>s.states||{},Xs=s=>(Number(s??0)%4+4)%4;function w0(s,e){const t=$n(s),n=!!t.upper_block_bit,i=e?.name===s.name&&!!$n(e).upper_block_bit!==n,r=n&&i?$n(e):t,o=!n&&i?$n(e):t;return{direction:Xs(r.direction),open:!!r.open_bit,hinge:!!o.door_hinge_bit}}function sh(s,e){let[t,n,i,r,o,a]=s;for(let c=0;c<Xs(e);c++)[t,i,r,a]=[1-a,t,1-i,r];return[t,n,i,r,o,a]}function T0(s){const e=s.open?s.hinge?[0,0,1-In,1,1,1]:[0,0,0,1,1,In]:[0,0,0,In,1,1];return[sh(e,s.direction)]}function A0(s){const e=$n(s);return e.open_bit?[[[0,0,0,In,1,1],[1-In,0,0,1,1,1],[0,0,0,1,1,In],[0,0,1-In,1,1,1]][Xs(e.direction)]]:[e.upside_down_bit?[0,1-In,0,1,1,1]:[0,0,0,1,In,1]]}function R0(s){const e=$n(s),t=e.in_wall_bit?3/16:0,n=(r,o,a,c,l,h)=>[r/16,o/16-t,a/16,c/16,l/16-t,h/16],i=[n(0,5,7,2,16,9),n(14,5,7,16,16,9)];if(e.open_bit)for(const[r,o]of[[0,2],[14,16]])i.push(n(r,6,9,o,9,15),n(r,12,9,o,15,15),n(r,9,13,o,12,15));else i.push(n(2,6,7,14,9,9),n(2,12,7,14,15,9),n(6,9,7,10,12,9));return i.map(r=>sh(r,Xs(e.direction)))}function C0(s){return Xs($n(s).weirdo_direction)}function P0(s,e,t){return s===0?[.5,e,0,1,t,1]:s===1?[0,e,0,.5,t,1]:s===2?[0,e,.5,1,t,1]:[0,e,0,1,t,.5]}function D0(s,e){const t=!!$n(s).upside_down_bit,n=C0(s),i=t?[0,.5,0,1,1,1]:[0,0,0,1,.5,1],a=P0(n,t?0:.5,t?.5:1);return[i,a]}function rh(s,e){const[t,n,i,r,o,a]=s;return e===0?[[t,1-a],[r,1-a],[r,1-i],[t,1-i]]:e===1?[[t,i],[r,i],[r,a],[t,a]]:e===2?[[1-a,n],[1-i,n],[1-i,o],[1-a,o]]:e===3?[[i,n],[a,n],[a,o],[i,o]]:e===4?[[t,n],[r,n],[r,o],[t,o]]:[[1-r,n],[1-t,n],[1-t,o],[1-r,o]]}function I0(s,e){const t=Math.max(s[0],e[0]),n=Math.max(s[1],e[1]),i=Math.min(s[2],e[2]),r=Math.min(s[3],e[3]);if(t>=i||n>=r)return[s];const o=[];return s[0]<t&&o.push([s[0],s[1],t,s[3]]),i<s[2]&&o.push([i,s[1],s[2],s[3]]),s[1]<n&&o.push([t,s[1],i,n]),r<s[3]&&o.push([t,r,i,s[3]]),o}function L0(s,e){const t=s[e],n=[];for(let i=0;i<6;i++){const r=i<2?1:i<4?0:2,o=i%2===0,a=t[r+(o?3:0)],c=r===0?[1,2]:r===1?[0,2]:[0,1];let l=[[t[c[0]],t[c[1]],t[c[0]+3],t[c[1]+3]]];for(let h=0;h<s.length;h++){if(h===e)continue;const d=s[h];if(!(o?d[r]<=a&&(d[r+3]>a||h<e&&d[r+3]===a):d[r+3]>=a&&(d[r]<a||h<e&&d[r]===a)))continue;const f=[d[c[0]],d[c[1]],d[c[0]+3],d[c[1]+3]];if(l=l.flatMap(g=>I0(g,f)),!l.length)break}for(const[h,d,u,f]of l){const g=[...t];g[c[0]]=h,g[c[1]]=d,g[c[0]+3]=u,g[c[1]+3]=f,n.push({face:i,box:g})}}return n}function U0(s){const e=s.name.includes("wall_sign"),t=s.states?.[e?"facing_direction":"ground_sign_direction"],n=Number(t??Number(s.states?.block_data??0)&(e?7:15));return e?[2,3,4,5].includes(n)?n:2:Number.isFinite(n)?(Math.trunc(n)%16+16)%16:0}function Fr(s){const e=U0(s);if(!s.name.includes("wall_sign"))return{center:[.5,5/6,.5],angle:-e*Math.PI/8};switch(e){case 3:return{center:[.5,25/48,1/16],angle:0};case 4:return{center:[15/16,25/48,.5],angle:-Math.PI/2};case 5:return{center:[1/16,25/48,.5],angle:Math.PI/2};default:return{center:[.5,25/48,15/16],angle:Math.PI}}}const N0=[[0,1,0],[0,-1,0],[1,0,0],[-1,0,0],[0,0,1],[0,0,-1]],F0=[[0,0],[1,0],[1,1],[0,1]],O0=[16383998,16351261,13061821,3847130,16701501,8439583,15961002,4673362,10329495,1481884,8991416,3949738,8606770,6192150,11546150,1908001],k0={5:2039713,6:2039713,7:8356754,8:8356754,9:2293580,10:2293580,11:2293580,12:14981690,13:14981690,14:8171462,15:8171462,16:8171462,17:5926017,18:5926017,19:3035801,20:3035801,21:16262179,22:16262179,23:4393481,24:4393481,25:5149489,26:5149489,27:5149489,28:13458603,29:13458603,30:13458603,31:9643043,32:9643043,33:9643043,34:4738376,35:4738376,36:3484199,40:13565951,41:13565951,42:5926017};function oh(s){const e=s.name.replace("minecraft:","");if(/^(?:\w+_)?(?:standing|wall)_sign$/.test(e))return"sign";if(e==="standing_banner"||e==="wall_banner")return"banner";if(e==="bed")return"bed";if(["chest","trapped_chest","ender_chest"].includes(e))return"chest";if(e==="frame"||e==="glow_frame"||e==="item_frame"||e==="glow_item_frame")return"frame";if(e==="flower_pot")return"flower_pot";if(e==="skull")return"skull";if(e==="cauldron"||e==="lava_cauldron")return"cauldron";if(["hopper","brewing_stand","lectern","bell","enchanting_table","anvil"].includes(e))return e}function z0([s,e,t,n,i,r]){return[[[s,i,r],[n,i,r],[n,i,t],[s,i,t]],[[s,e,t],[n,e,t],[n,e,r],[s,e,r]],[[n,e,r],[n,e,t],[n,i,t],[n,i,r]],[[s,e,t],[s,e,r],[s,i,r],[s,i,t]],[[s,e,r],[n,e,r],[n,i,r],[s,i,r]],[[n,e,t],[s,e,t],[s,i,t],[n,i,t]]]}function We(s,e,t=!1,n=[0,1,2,3,4,5]){const i=z0(s);return n.map(r=>({points:i[r],normal:N0[r],tile:e[r],coordinates:t?rh(s,r):F0}))}function zs(s,e,t){return s.map(n=>({...n,points:n.points.map(e),normal:t(n.normal)}))}function xn(s,e){const t=Math.sin(e),n=Math.cos(e),i=([r,o,a])=>[n*r+t*a,o,-t*r+n*a];return zs(s,([r,o,a])=>{const[c,l,h]=i([r-.5,o,a-.5]);return[c+.5,l,h+.5]},i)}function Bs(s,e,t,n){return zs(s,([i,r,o])=>[i+e,r+t,o+n],i=>i)}function Gs(s,e){return e===0?zs(s,([t,n,i])=>[t,i,1-n],([t,n,i])=>[t,i,-n]):e===1?zs(s,([t,n,i])=>[t,1-i,n],([t,n,i])=>[t,-i,n]):xn(s,{2:0,3:Math.PI,4:Math.PI/2,5:-Math.PI/2}[e]||0)}function ke(s,e,t=s.side){return s.modelTextures?.[e]??t}function gt(s){return Array(6).fill(s)}function Mi([s,e,t,n]){return[[s/16,1-n/16],[t/16,1-n/16],[t/16,1-e/16],[s/16,1-e/16]]}const ul=["up","down","east","west","south","north"];function Or(s,e,t,n=[.5,.5,.5],i=!1){const r=Math.sin(t),o=Math.cos(t),a=([c,l,h])=>e==="x"?[c,l*o-h*r,l*r+h*o]:e==="y"?[c*o+h*r,l,-c*r+h*o]:[c*o-l*r,c*r+l*o,h];return zs(s,c=>{const l=c.map((h,d)=>(h-n[d])*(i&&["x","y","z"][d]!==e?1/o:1));return a(l).map((h,d)=>h+n[d])},a)}function Cn(s,e){const t=[];for(const n of K0[s]||[]){const i=[...n.from,...n.to].map(a=>a/16),r=ul.flatMap((a,c)=>n.faces[a]?[c]:[]);let o=We(i,gt(0),!0,r);for(let a=0;a<o.length;a++){const c=n.faces[ul[r[a]]];o[a].tile=e[c.texture.replace("#","")]??0,c.uv&&(o[a].coordinates=Mi(c.uv));const l=(c.rotation||0)/90;for(let h=0;h<l;h++)o[a].coordinates=[o[a].coordinates[3],...o[a].coordinates.slice(0,3)]}n.rotation&&(o=Or(o,n.rotation.axis,n.rotation.angle*Math.PI/180,n.rotation.origin.map(a=>a/16),n.rotation.rescale)),t.push(...o)}return t}function B0(s,e){const t=ke(e,"signEdge"),n=ke(e,"post");let i=We([0,7/12,11/24,1,13/12,13/24],[t,t,t,t,ke(e,"signFront"),ke(e,"signBack")]);return s.name.includes("wall_sign")?(i=Bs(i,0,-5/16,-7/16),xn(i,Fr(s).angle)):(i.push(...We([11/24,0,11/24,13/24,7/12,13/24],gt(n))),xn(i,Fr(s).angle))}function G0(s,e,t,n){const i=!!s.states?.head_piece_bit,r=n.entity?.type==="bed"?n.entity.color:0,o=t.decorativeBeds?.[String(Number.isInteger(r)&&r>=0&&r<16?r:0)],a=(g,_=e.side)=>o?.[g]??ke(e,g,_),c=i?"head":"foot",l=a("leg",e.bottom),h=We([0,3/16,0,1,9/16,1],[a(`${c}Top`,e.top),l,a(`${c}Side`),a(`${c}Side`),a(i?"headEnd":"footSide"),a(i?"headSide":"footEnd")]);h[0].coordinates=[[0,1],[1,1],[1,0],[0,0]],h[3].coordinates=[[1,0],[0,0],[0,1],[1,1]];const d=i?5:4;h[d].seam=!0,n.joined&&h.splice(d,1);const u=i?13/16:0,f=i?1:3/16;return h.push(...We([0,0,u,3/16,3/16,f],gt(l),!0)),h.push(...We([13/16,0,u,1,3/16,f],gt(l),!0)),xn(h,-Number(s.states?.direction||0)*Math.PI/2)}function H0(s,e,t=0,n=!1){const i=t===-1?0:.0625,r=t===1?1:15/16,o=Number(s.states?.facing_direction??2),a={2:"north",3:"south",4:"west",5:"east"}[o]||"north",c=e.faces?.[a]??e.side,l=(_,m=e.side)=>{const p=ke(e,_,m),v=_==="chestTop"?"Top":_==="chestBottom"?"Bottom":_[0].toUpperCase()+_.slice(1);return t?ke(e,`${t>0?"doubleLeft":"doubleRight"}${v}`,p):p};let h=We([i,0,1/16,r,9/16,15/16],[l("chestTop",e.top),l("chestBottom",e.bottom),l("bodySide"),l("bodySide"),l("bodyBack"),l("bodyFront",c)],!1,[1,2,3,4,5]),d=We([i,9/16,1/16,r,14/16,15/16],[l("chestTop",e.top),l("chestBottom",e.bottom),l("lidSide"),l("lidSide"),l("lidBack"),l("lidFront",c)],!1,[0,2,3,4,5]);const u=t===-1?0:t===1?15/16:7/16,f=t===-1?1/16:t===1?1:9/16;if(d.push(...We([u,8/16,0,f,12/16,1/16],gt(ke(e,"latch",c)))),t&&(h=h.filter(_=>_.normal[0]!==t),d=d.filter(_=>_.normal[0]!==t)),n){const _=t===-1?i:i+.0625,m=t===1?r:r-1/16,p=[_,1/16,2/16,m,9/16,14/16],v={...e,tint:[.42,.42,.42]},y=T=>T.map(R=>({...R,material:v}));h.push(...y(We([_,0,2/16,m,1/16,14/16],gt(l("chestBottom",e.bottom)),!1,[0])));const x=We(p,gt(l("bodySide")),!1,[2,3,4,5]).filter(T=>!t||T.normal[0]!==t).map(T=>({...T,points:[...T.points].reverse(),coordinates:[...T.coordinates].reverse(),normal:T.normal.map(R=>-R)}));h.push(...y(x));const S=l("chestTop",e.top);for(const T of[[i,8/16,1/16,r,9/16,2/16],[i,8/16,14/16,r,9/16,15/16]])h.push(...We(T,gt(S),!0,[0]));t!==-1&&h.push(...We([i,8/16,2/16,_,9/16,14/16],gt(S),!0,[0])),t!==1&&h.push(...We([m,8/16,2/16,r,9/16,14/16],gt(S),!0,[0])),d.push(...y(We([i,9/16,1/16,r,14/16,15/16],gt(l("chestBottom",e.bottom)),!1,[1])))}const g=o>=2&&o<=5?o:2;return{body:Gs(h,g).map(_=>({..._,chestJoin:t})),lid:Gs(d,g).map(_=>({..._,chestJoin:t}))}}function V0(s,e,t){const{body:n,lid:i}=H0(s,e,t);return[...n,...i]}function W0(s,e,t){const n=ke(e,"cloth"),i=ke(e,"post",e.bottom),r=t?.type==="banner"?15-t.baseColor:0,o=O0[Number.isInteger(r)&&r>=0&&r<16?r:0],a={...e,tint:[(o>>>16&255)/255,(o>>>8&255)/255,(o&255)/255]};let c=We([1/12,1/6,13/24,11/12,11/6,7/12],gt(n)).map(l=>({...l,material:a}));return c.push(...We([1/12,7/4,11/24,11/12,11/6,13/24],gt(i))),s.name==="minecraft:wall_banner"?(c=Bs(c,0,-5/16,-7/16),xn(c,{3:0,4:-Math.PI/2,2:Math.PI,5:Math.PI/2}[Number(s.states?.facing_direction)]||0)):(c.push(...We([11/24,0,11/24,13/24,7/4,13/24],gt(i))),xn(c,-Number(s.states?.ground_sign_direction||0)*Math.PI/8))}function X0(s,e,t){if(t?.type==="item_frame"&&t.item?.map)return[];const n=ke(e,"frameBack"),i=ke(e,"frameRim",e.bottom),r=We([3/16,3/16,15.5/16,13/16,13/16,1],gt(n),!1,[4,5]);for(const a of r)a.coordinates=Mi([3,3,13,13]);const o=[{box:[2/16,2/16,15/16,14/16,3/16,1],faces:[0,1,2,3,4,5],uv:{0:[2,15,14,16],1:[2,0,14,1],2:[0,13,1,14],3:[15,13,16,14],4:[2,13,14,14],5:[2,13,14,14]}},{box:[2/16,13/16,15/16,14/16,14/16,1],faces:[0,1,2,3,4,5],uv:{0:[2,15,14,16],1:[2,0,14,1],2:[0,2,1,3],3:[15,2,16,3],4:[2,2,14,3],5:[2,2,14,3]}},{box:[2/16,3/16,15/16,3/16,13/16,1],faces:[2,3,4,5],uv:{2:[0,3,1,13],3:[15,3,16,13],4:[2,3,3,13],5:[13,3,14,13]}},{box:[13/16,3/16,15/16,14/16,13/16,1],faces:[2,3,4,5],uv:{2:[0,3,1,13],3:[15,3,16,13],4:[13,3,14,13],5:[2,3,3,13]}}];for(const a of o){const c=We(a.box,gt(i),!1,a.faces);for(let l=0;l<c.length;l++)c[l].coordinates=Mi(a.uv[a.faces[l]]);r.push(...c)}return Gs(r,Number(s.states?.facing_direction??2))}function q0(s){const e=ke(s,"potSide"),t=ke(s,"potTop",e),n=ke(s,"potSoil",s.top),i=[],r=[{box:[5/16,0,5/16,6/16,6/16,11/16],faces:[0,1,2,3,4,5],uv:{0:[5,5,6,11],1:[5,5,6,11],2:[5,10,11,16],3:[5,10,11,16],4:[5,10,6,16],5:[10,10,11,16]}},{box:[10/16,0,5/16,11/16,6/16,11/16],faces:[0,1,2,3,4,5],uv:{0:[10,5,11,11],1:[10,5,11,11],2:[5,10,11,16],3:[5,10,11,16],4:[10,10,11,16],5:[5,10,6,16]}},{box:[6/16,0,5/16,10/16,6/16,6/16],faces:[0,1,4,5],uv:{0:[6,5,10,6],1:[6,10,10,11],4:[6,10,10,16],5:[6,10,10,16]}},{box:[6/16,0,10/16,10/16,6/16,11/16],faces:[0,1,4,5],uv:{0:[6,10,10,11],1:[6,5,10,6],4:[6,10,10,16],5:[6,10,10,16]}}];for(const a of r){const c=We(a.box,[t,e,e,e,e,e],!1,a.faces);for(let l=0;l<c.length;l++)c[l].coordinates=Mi(a.uv[a.faces[l]]);i.push(...c)}const o=We([6/16,0,6/16,10/16,4/16,10/16],[n,e,e,e,e,e],!1,[0,1]);return o[0].coordinates=Mi([6,6,10,10]),o[1].coordinates=Mi([6,12,10,16]),i.push(...o),i}function Y0(s,e,t,n){const i=n?.type==="skull"?n.skullType:0,r=t.decorativeSkulls?.[String(i)],o=(h,d=e.side)=>r?.[h]??ke(e,h,d);let a=We([4/16,0,4/16,12/16,8/16,12/16],[o("top",e.top),o("bottom",e.bottom),o("side"),o("side"),o("back"),o("front")]);if(i===5){const h=([d,u,f],[g,_,m])=>[.5+d*3/64,(u-16)*3/64,.5+f*3/64,.5+(d+g)*3/64,(u+_-16)*3/64,.5+(f+m)*3/64];a=We(h([-8,16,-10],[16,16,16]),[o("top"),o("bottom"),o("side"),o("side"),o("back"),o("front")]),a.push(...We(h([-6,20,-24],[12,5,16]),[o("snoutTop",o("top")),o("snoutBottom",o("bottom")),o("snoutSide",o("side")),o("snoutSide",o("side")),o("back"),o("snoutFront",o("front"))])),a.push(...We(h([-6,16,-24],[12,4,16]),[o("jawTop",o("bottom")),o("jawBottom",o("bottom")),o("jawSide",o("side")),o("jawSide",o("side")),o("back"),o("jawFront",o("front"))]));for(const d of[-5,3])a.push(...We(h([d,32,-4],[2,4,6]),gt(o("horn",o("top"))))),a.push(...We(h([d,25,-22],[2,2,4]),gt(o("nostril",o("top")))))}const c=Number(s.states?.facing_direction??1);if(c===1)return xn(a,-(n?.type==="skull"?n.rotation:0)*Math.PI/180);const l=i===5?7/32:4/16;return a=Bs(a,0,4/16,l),Gs(a,c>=2&&c<=5?c:2)}function dl(s){const e=ke(s,"bookCover",s.bottom),t=ke(s,"bookPages",s.top),n=[];for(const i of[-1,1]){let r=We([i<0?.125:.5,0,.1875,i<0?.5:.875,.015625,.8125],gt(e));r.push(...We([i<0?3/16:.5,1/64,4/16,i<0?.5:13/16,3/64,12/16],gt(t))),n.push(...Or(r,"z",-i*Math.PI/32,[.5,0,.5]))}return n}function $0(s,e,t){const n=oh(s),i=s.states||{},r={top:ke(e,"top",e.top),bottom:ke(e,"bottom",e.bottom),side:ke(e,"side"),inside:ke(e,"inside",e.bottom),stand:ke(e,"stand"),base:ke(e,"base",e.bottom),front:ke(e,"front"),sides:ke(e,"sides"),body:ke(e,"body"),bar:ke(e,"bar"),post:ke(e,"post")};if(n==="cauldron"){const o=Cn("cauldron",r),a=Math.max(0,Math.min(6,Number(i.fill_level||0))),c=i.cauldron_liquid??(s.name==="minecraft:lava_cauldron"?"lava":"water");if(a){const l=(6+1.5*a)/16,h=c==="water"&&t?.type==="cauldron"?t.color??k0[t.potionId??-1]:void 0,d=We([2/16,l,2/16,14/16,l,14/16],gt(h===void 0?ke(e,"liquid"):ke(e,"customLiquid",ke(e,"liquid"))),!1,[0])[0],u=h===void 0?void 0:[(h>>>16&255)/255,(h>>>8&255)/255,(h&255)/255];d.material={...e,transparent:c!=="lava",tint:u},d.coordinates=Mi([2,2,14,14]),o.push(d)}return o}if(n==="hopper"){const o=Number(i.facing_direction||0);return o===0?Cn("hopper",r):Gs(Cn("hopper_side",r),o>=2&&o<=5?o:2)}if(n==="brewing_stand"){const o=Cn("brewing_stand",r);for(let a=0;a<3;a++){const c=t?.type==="brewing_stand"?t.bottles[a]:!!i[`brewing_stand_slot_${"abc"[a]}_bit`];o.push(...Cn(`brewing_stand_${c?"bottle":"empty"}${a}`,r))}return o}if(n==="lectern"){const o=Cn("lectern",r);if(t?.type==="lectern"&&t.hasBook){const a=Bs(dl(e),0,1.046875,.0625);o.push(...Or(a,"x",-Math.PI/8))}return xn(o,(2-Number(i.direction||0))*Math.PI/2)}if(n==="enchanting_table"){const o=Cn("enchanting_table",r);return o.push(...Bs(Or(dl(e),"x",-Math.PI/3,[.5,0,.5]),0,17/16,0)),o}if(n==="anvil")return xn(Cn("template_anvil",r),-Number(i.direction||0)*Math.PI/2);if(n==="bell"){const o=i.attachment,a=Number(i.direction||0);let l=Cn(o==="hanging"?"bell_ceiling":o==="side"?"bell_wall":o==="multiple"?"bell_between_walls":"bell_floor",r);l=xn(l,(o==="side"||o==="multiple"?1-a:-a)*Math.PI/2);const h=We([5/16,6/16,5/16,11/16,13/16,11/16],[ke(e,"bellBodyTop",e.top),ke(e,"bellBottom",e.bottom),...Array(4).fill(ke(e,"bellBodySide"))],!1,[0,2,3,4,5]),d=We([4/16,4/16,4/16,12/16,6/16,12/16],[ke(e,"bellBodyTop",e.top),ke(e,"bellBottom",e.bottom),...Array(4).fill(ke(e,"bellRimSide"))]);return[...l,...h,...d]}return[]}function j0(s,e,t,n={}){switch(oh(s)){case"sign":return B0(s,e);case"bed":return G0(s,e,t,n);case"chest":return V0(s,e,n.chestJoin||0);case"banner":return W0(s,e,n.entity);case"frame":return X0(s,e,n.entity);case"flower_pot":return q0(e);case"skull":return Y0(s,e,t,n.entity);case"cauldron":case"hopper":case"brewing_stand":case"lectern":case"bell":case"enchanting_table":case"anvil":return $0(s,e,n.entity);default:return}}const K0={cauldron:[{from:[0,3,0],to:[2,16,16],faces:{north:{texture:"#side"},east:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},up:{texture:"#top"},down:{texture:"#inside"}}},{from:[2,3,2],to:[14,4,14],faces:{up:{texture:"#inside"},down:{texture:"#inside"}}},{from:[14,3,0],to:[16,16,16],faces:{north:{texture:"#side"},east:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},up:{texture:"#top"},down:{texture:"#inside"}}},{from:[2,3,0],to:[14,16,2],faces:{north:{texture:"#side"},south:{texture:"#side"},up:{texture:"#top"},down:{texture:"#inside"}}},{from:[2,3,14],to:[14,16,16],faces:{north:{texture:"#side"},south:{texture:"#side"},up:{texture:"#top"},down:{texture:"#inside"}}},{from:[0,0,0],to:[4,3,2],faces:{north:{texture:"#side"},east:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},down:{texture:"#bottom"}}},{from:[0,0,2],to:[2,3,4],faces:{east:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},down:{texture:"#bottom"}}},{from:[12,0,0],to:[16,3,2],faces:{north:{texture:"#side"},east:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},down:{texture:"#bottom"}}},{from:[14,0,2],to:[16,3,4],faces:{east:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},down:{texture:"#bottom"}}},{from:[0,0,14],to:[4,3,16],faces:{north:{texture:"#side"},east:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},down:{texture:"#bottom"}}},{from:[0,0,12],to:[2,3,14],faces:{north:{texture:"#side"},east:{texture:"#side"},west:{texture:"#side"},down:{texture:"#bottom"}}},{from:[12,0,14],to:[16,3,16],faces:{north:{texture:"#side"},east:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},down:{texture:"#bottom"}}},{from:[14,0,12],to:[16,3,14],faces:{north:{texture:"#side"},east:{texture:"#side"},west:{texture:"#side"},down:{texture:"#bottom"}}}],hopper:[{from:[0,10,0],to:[16,11,16],faces:{down:{texture:"#side"},up:{texture:"#inside"},north:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}},{from:[0,11,0],to:[2,16,16],faces:{up:{texture:"#top"},north:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}},{from:[14,11,0],to:[16,16,16],faces:{up:{texture:"#top"},north:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}},{from:[2,11,0],to:[14,16,2],faces:{up:{texture:"#top"},north:{texture:"#side"},south:{texture:"#side"}}},{from:[2,11,14],to:[14,16,16],faces:{up:{texture:"#top"},north:{texture:"#side"},south:{texture:"#side"}}},{from:[4,4,4],to:[12,10,12],faces:{down:{texture:"#side"},north:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}},{from:[6,0,6],to:[10,4,10],faces:{down:{texture:"#side"},north:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}}],hopper_side:[{from:[0,10,0],to:[16,11,16],faces:{down:{texture:"#side"},up:{texture:"#inside"},north:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}},{from:[0,11,0],to:[2,16,16],faces:{up:{texture:"#top"},north:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}},{from:[14,11,0],to:[16,16,16],faces:{up:{texture:"#top"},north:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}},{from:[2,11,0],to:[14,16,2],faces:{up:{texture:"#top"},north:{texture:"#side"},south:{texture:"#side"}}},{from:[2,11,14],to:[14,16,16],faces:{up:{texture:"#top"},north:{texture:"#side"},south:{texture:"#side"}}},{from:[4,4,4],to:[12,10,12],faces:{down:{texture:"#side"},north:{texture:"#side"},south:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}},{from:[6,4,0],to:[10,8,4],faces:{down:{texture:"#side"},up:{texture:"#side"},north:{texture:"#side"},west:{texture:"#side"},east:{texture:"#side"}}}],brewing_stand:[{from:[7,0,7],to:[9,14,9],faces:{down:{uv:[7,7,9,9],texture:"#stand"},up:{uv:[7,7,9,9],texture:"#stand"},north:{uv:[7,2,9,16],texture:"#stand"},south:{uv:[7,2,9,16],texture:"#stand"},west:{uv:[7,2,9,16],texture:"#stand"},east:{uv:[7,2,9,16],texture:"#stand"}}},{from:[9,0,5],to:[15,2,11],faces:{down:{uv:[9,5,15,11],texture:"#base"},up:{uv:[9,5,15,11],texture:"#base"},north:{uv:[9,14,15,16],texture:"#base"},south:{uv:[9,14,15,16],texture:"#base"},west:{uv:[5,14,11,16],texture:"#base"},east:{uv:[5,14,11,16],texture:"#base"}}},{from:[2,0,1],to:[8,2,7],faces:{down:{uv:[2,1,8,7],texture:"#base"},up:{uv:[2,1,8,7],texture:"#base"},north:{uv:[2,14,8,16],texture:"#base"},south:{uv:[2,14,8,16],texture:"#base"},west:{uv:[1,14,7,16],texture:"#base"},east:{uv:[1,14,7,16],texture:"#base"}}},{from:[2,0,9],to:[8,2,15],faces:{down:{uv:[2,9,8,15],texture:"#base"},up:{uv:[2,9,8,15],texture:"#base"},north:{uv:[2,14,8,16],texture:"#base"},south:{uv:[2,14,8,16],texture:"#base"},west:{uv:[9,14,15,16],texture:"#base"},east:{uv:[9,14,15,16],texture:"#base"}}}],lectern:[{from:[0,0,0],to:[16,2,16],faces:{north:{uv:[0,14,16,16],texture:"#base"},east:{uv:[0,6,16,8],texture:"#base"},south:{uv:[0,6,16,8],texture:"#base"},west:{uv:[0,6,16,8],texture:"#base"},up:{uv:[0,0,16,16],rotation:180,texture:"#base"},down:{uv:[0,0,16,16],texture:"#bottom"}}},{from:[4,2,4],to:[12,15,12],faces:{north:{uv:[0,0,8,13],texture:"#front"},east:{uv:[2,16,15,8],rotation:90,texture:"#sides"},south:{uv:[8,3,16,16],texture:"#front"},west:{uv:[2,8,15,16],rotation:90,texture:"#sides"}}},{from:[.01,12,3],to:[15.99,16,16],rotation:{angle:-22.5,axis:"x",origin:[8,8,8]},faces:{north:{uv:[0,0,16,4],texture:"#sides"},east:{uv:[0,4,13,8],texture:"#sides"},south:{uv:[0,4,16,8],texture:"#sides"},west:{uv:[0,4,13,8],texture:"#sides"},up:{uv:[0,1,16,14],rotation:180,texture:"#top"},down:{uv:[0,0,16,13],texture:"#bottom"}}}],bell_floor:[{from:[2,13,7],to:[14,15,9],faces:{north:{uv:[2,2,14,4],texture:"#bar"},south:{uv:[2,3,14,5],texture:"#bar"},up:{uv:[2,3,14,5],texture:"#bar"},down:{uv:[2,3,14,5],texture:"#bar"}}},{from:[14,0,6],to:[16,16,10],faces:{north:{uv:[0,1,2,16],texture:"#post"},east:{uv:[0,1,4,16],texture:"#post"},south:{uv:[0,1,2,16],texture:"#post"},west:{uv:[0,1,4,16],texture:"#post"},up:{uv:[0,0,2,4],texture:"#post"},down:{uv:[0,0,2,4],texture:"#post"}}},{from:[0,0,6],to:[2,16,10],faces:{north:{uv:[0,1,2,16],texture:"#post"},east:{uv:[0,1,4,16],texture:"#post"},south:{uv:[0,1,2,16],texture:"#post"},west:{uv:[0,1,4,16],texture:"#post"},up:{uv:[0,0,2,4],texture:"#post"},down:{uv:[0,0,2,4],texture:"#post"}}}],bell_wall:[{from:[3,13,7],to:[16,15,9],faces:{north:{uv:[2,2,14,4],texture:"#bar"},east:{uv:[5,4,7,6],texture:"#bar"},south:{uv:[2,3,14,5],texture:"#bar"},west:{uv:[5,4,7,6],texture:"#bar"},up:{uv:[2,3,14,5],texture:"#bar"},down:{uv:[2,3,14,5],texture:"#bar"}}}],bell_ceiling:[{from:[7,13,7],to:[9,16,9],faces:{north:{uv:[7,2,9,5],texture:"#bar"},east:{uv:[1,2,3,5],texture:"#bar"},south:{uv:[6,2,8,5],texture:"#bar"},west:{uv:[4,2,6,5],texture:"#bar"},up:{uv:[1,3,3,5],texture:"#bar"}}}],bell_between_walls:[{from:[0,13,7],to:[16,15,9],faces:{north:{uv:[2,2,14,4],texture:"#bar"},east:{uv:[5,4,7,6],texture:"#bar"},south:{uv:[2,3,14,5],texture:"#bar"},west:{uv:[5,4,7,6],texture:"#bar"},up:{uv:[2,3,14,5],texture:"#bar"},down:{uv:[2,3,14,5],texture:"#bar"}}}],enchanting_table:[{from:[0,0,0],to:[16,12,16],faces:{down:{uv:[0,0,16,16],texture:"#bottom"},up:{uv:[0,0,16,16],texture:"#top"},north:{uv:[0,4,16,16],texture:"#side"},south:{uv:[0,4,16,16],texture:"#side"},west:{uv:[0,4,16,16],texture:"#side"},east:{uv:[0,4,16,16],texture:"#side"}}}],template_anvil:[{from:[2,0,2],to:[14,4,14],faces:{down:{uv:[2,2,14,14],texture:"#body",rotation:180},up:{uv:[2,2,14,14],texture:"#body",rotation:180},north:{uv:[2,12,14,16],texture:"#body"},south:{uv:[2,12,14,16],texture:"#body"},west:{uv:[0,2,4,14],texture:"#body",rotation:90},east:{uv:[4,2,0,14],texture:"#body",rotation:270}}},{from:[4,4,3],to:[12,5,13],faces:{up:{uv:[4,3,12,13],texture:"#body",rotation:180},north:{uv:[4,11,12,12],texture:"#body"},south:{uv:[4,11,12,12],texture:"#body"},west:{uv:[4,3,5,13],texture:"#body",rotation:90},east:{uv:[5,3,4,13],texture:"#body",rotation:270}}},{from:[6,5,4],to:[10,10,12],faces:{north:{uv:[6,6,10,11],texture:"#body"},south:{uv:[6,6,10,11],texture:"#body"},west:{uv:[5,4,10,12],texture:"#body",rotation:90},east:{uv:[10,4,5,12],texture:"#body",rotation:270}}},{from:[3,10,0],to:[13,16,16],faces:{down:{uv:[3,0,13,16],texture:"#body",rotation:180},up:{uv:[3,0,13,16],texture:"#top",rotation:180},north:{uv:[3,0,13,6],texture:"#body"},south:{uv:[3,0,13,6],texture:"#body"},west:{uv:[10,0,16,16],texture:"#body",rotation:90},east:{uv:[16,0,10,16],texture:"#body",rotation:270}}}],brewing_stand_bottle0:[{from:[8,0,8],to:[16,16,8],faces:{north:{uv:[0,0,8,16],texture:"#stand"},south:{uv:[8,0,0,16],texture:"#stand"}}}],brewing_stand_bottle1:[{from:[-.41,0,8],to:[7.59,16,8],rotation:{origin:[8,8,8],axis:"y",angle:-45},faces:{north:{uv:[8,0,0,16],texture:"#stand"},south:{uv:[0,0,8,16],texture:"#stand"}}}],brewing_stand_bottle2:[{from:[-.41,0,8],to:[7.59,16,8],rotation:{origin:[8,8,8],axis:"y",angle:45},faces:{north:{uv:[8,0,0,16],texture:"#stand"},south:{uv:[0,0,8,16],texture:"#stand"}}}],brewing_stand_empty0:[{from:[8,0,8],to:[16,16,8],faces:{north:{uv:[16,0,8,16],texture:"#stand"},south:{uv:[8,0,16,16],texture:"#stand"}}}],brewing_stand_empty1:[{from:[0,0,8],to:[8,16,8],rotation:{origin:[8,8,8],axis:"y",angle:-45},faces:{north:{uv:[8,0,16,16],texture:"#stand"},south:{uv:[16,0,8,16],texture:"#stand"}}}],brewing_stand_empty2:[{from:[0,0,8],to:[8,16,8],rotation:{origin:[8,8,8],axis:"y",angle:45},faces:{north:{uv:[8,0,16,16],texture:"#stand"},south:{uv:[16,0,8,16],texture:"#stand"}}}]},ah=[[0,1,0],[0,-1,0],[1,0,0],[-1,0,0],[0,0,1],[0,0,-1]],jn=[[0,0],[1,0],[1,1],[0,1]];function Ct(s,e,t,n){return[[s/16,1-n/16],[t/16,1-n/16],[t/16,1-e/16],[s/16,1-e/16]]}function Z0([s,e,t,n,i,r]){return[[[s,i,r],[n,i,r],[n,i,t],[s,i,t]],[[s,e,t],[n,e,t],[n,e,r],[s,e,r]],[[n,e,r],[n,e,t],[n,i,t],[n,i,r]],[[s,e,t],[s,e,r],[s,i,r],[s,i,t]],[[s,e,r],[n,e,r],[n,i,r],[s,i,r]],[[n,e,t],[s,e,t],[s,i,t],[n,i,t]]]}function ti(s,e,t,n=[0,1,2,3,4,5]){const i=Z0(s);return n.map(r=>({points:i[r],normal:ah[r],tile:e,coordinates:t[r]}))}function Zt(s,e,t,n=jn,i=t){return[{points:s,normal:e,tile:t,coordinates:n},{points:[...s].reverse(),normal:e.map(r=>-r),tile:i,coordinates:[...n].reverse()}]}function _n(s,e,t){return s.map(n=>{const i=t(n.normal),r=n.cullFace===void 0?void 0:ah.findIndex(o=>o.every((a,c)=>Math.abs(a-i[c])<1e-6));return{...n,points:n.points.map(e),normal:i,cullFace:r===-1?void 0:r}})}function Hs(s,e){for(let t=0;t<e;t++)s=_n(s,([n,i,r])=>[1-r,i,n],([n,i,r])=>[-r,i,n]);return s}function J0(s){return(s.states?.bamboo_stalk_thickness==="thick"?3:2)/16}function Q0(s,e){const t=J0(s),n=t*16,i=(1-t)/2,r=1-i,o=e.modelTextures?.stem??e.side,a=e.modelTextures?.cap??o,c=ti([i,0,i,r,1,r],o,[Ct(13,0,13+n,n),Ct(13,4,13+n,4+n),...Array.from({length:4},()=>Ct(0,0,n,16))]);if(c[0].tile=a,c[0].cullFace=0,c[1].tile=a,c[1].cullFace=1,s.states?.bamboo_leaf_size!=="no_leaves"&&e.modelTextures?.leaves!==void 0){const l=e.modelTextures.leaves;c.push(...Zt([[.05,0,.5],[.95,0,.5],[.95,1,.5],[.05,1,.5]],[0,0,1],l)),c.push(...Zt([[.5,0,.95],[.5,0,.05],[.5,1,.05],[.5,1,.95]],[1,0,0],l))}return c}function e_(s,e){const t=Ct(7,6,9,16);let n=ti([7/16,0,7/16,9/16,10/16,9/16],e.side,[Ct(7,6,9,8),Ct(7,13,9,15),t,t,t,t]);const i=s.states?.torch_facing_direction;if(!["west","east","north","south"].includes(String(i)))return n;const r=Math.PI/8,o=Math.cos(r),a=Math.sin(r);return n=_n(n,([c,l,h])=>[(c-.5)*o+l*a,3.5/16-(c-.5)*a+l*o,h],([c,l,h])=>[c*o+l*a,-c*a+l*o,h]),Hs(n,{west:0,north:1,east:2,south:3}[String(i)])}function t_(s,e){const t=Ct(2,6,6,7),n=Ct(0,0,2,15),i=ti([6/16,0,6/16,10/16,1/16,10/16],e.side,[Ct(2,2,6,6),Ct(6,6,2,2),t,t,t,t]);i[1].cullFace=1;const r=ti([7/16,1/16,7/16,9/16,1,9/16],e.side,[Ct(2,0,4,2),jn,n,n,n,n],[0,2,3,4,5]);r[0].cullFace=0;const o=[...i,...r];switch(Number(s.states?.facing_direction??1)){case 0:return _n(o,([a,c,l])=>[a,1-c,1-l],([a,c,l])=>[a,-c,-l]);case 2:return _n(o,([a,c,l])=>[a,1-l,c],([a,c,l])=>[a,-l,c]);case 3:return _n(o,([a,c,l])=>[a,l,1-c],([a,c,l])=>[a,l,-c]);case 4:return _n(o,([a,c,l])=>[c,1-a,l],([a,c,l])=>[c,-a,l]);case 5:return _n(o,([a,c,l])=>[1-c,a,l],([a,c,l])=>[-c,a,l]);default:return o}}function n_(s){const e=Number(s.states?.facing_direction??s.states?.block_data??1)&7;return[[0,-1,0],[0,1,0],[0,0,1],[0,0,-1],[1,0,0],[-1,0,0]][e]||[0,1,0]}function i_(s){return!!(s&&/^(?:sticky)?piston_?arm_?collision$/i.test(s.name.replace("minecraft:","")))}function fl(s,e,t=!1){const n=e.modelTextures||{},i=n.pistonSide??e.side,r=n_(s),o=["bottom","top","south","north","east","west"],a=Number(s.states?.facing_direction??s.states?.block_data??1)&7,c=o[a]||"top",l=n.pistonTop??(c==="top"?e.top:c==="bottom"?e.bottom:e.faces?.[c]??i),h=n.pistonBottom??e.bottom,d=n.pistonInner??i,u=n.pistonUnsticky??l,f=(m,p)=>m.map((v,y)=>m[(y+p/90)%4]),g=(m,p)=>{const v=Ct(0,m,16,p);return[v,f(v,180),f(v,90),f(v,270),jn,jn]};let _;if(i_(s)){_=ti([0,0,0,1,1,4/16],i,g(0,4)),_[4].tile=u,_[5].tile=l;for(const p of[0,1,2,3,5])_[p].cullFace=p;const m=[f(Ct(0,0,16,4),270),f(Ct(0,0,16,4),90),Ct(0,0,16,4),Ct(16,4,0,0),jn,jn];_.push(...ti([6/16,6/16,4/16,10/16,10/16,20/16],i,m,[0,1,2,3]))}else _=ti([0,0,t?4/16:0,1,1,1],i,g(t?4:0,16)),_[4].tile=h,_[5].tile=t?d:l,_.forEach((m,p)=>{(!t||p!==5)&&(m.cullFace=p)});return r[1]>0?_n(_,([m,p,v])=>[m,1-v,p],([m,p,v])=>[m,-v,p]):r[1]<0?_n(_,([m,p,v])=>[m,v,1-p],([m,p,v])=>[m,v,-p]):Hs(_,r[0]>0?1:r[2]>0?2:r[0]<0?3:0)}function s_(s,e){const t=Number(s.states?.rail_direction??0),n=1/16,i=(l,h)=>n+(t===2?l:t===3?1-l:t===4?1-h:t===5?h:0),r=[[0,i(0,1),1],[1,i(1,1),1],[1,i(1,0),0],[0,i(0,0),0]],o=t===2?[-Math.SQRT1_2,Math.SQRT1_2,0]:t===3?[Math.SQRT1_2,Math.SQRT1_2,0]:t===4?[0,Math.SQRT1_2,Math.SQRT1_2]:t===5?[0,Math.SQRT1_2,-Math.SQRT1_2]:[0,1,0],a=t>=6?t-6:[1,2,3].includes(t)?1:0;let c=jn;for(let l=0;l<a;l++)c=c.map(([h,d])=>[1-d,h]);return Zt(r,o,e.side,c)}function r_(s,e){const t=Number(s.states?.vine_direction_bits??0),n=1/16,i=[];return t&1&&i.push(...Zt([[0,0,1-n],[1,0,1-n],[1,1,1-n],[0,1,1-n]],[0,0,1],e.side)),t&2&&i.push(...Zt([[n,0,0],[n,0,1],[n,1,1],[n,1,0]],[-1,0,0],e.side)),t&4&&i.push(...Zt([[1,0,n],[0,0,n],[0,1,n],[1,1,n]],[0,0,-1],e.side)),t&8&&i.push(...Zt([[1-n,0,1],[1-n,0,0],[1-n,1,0],[1-n,1,1]],[1,0,0],e.side)),i}function Aa(s,e=s.side,t=s.modelTextures?.crossAlt??e){return[...Zt([[.05,0,.05],[.95,0,.95],[.95,1,.95],[.05,1,.05]],[-Math.SQRT1_2,0,Math.SQRT1_2],e),...Zt([[.95,0,.05],[.05,0,.95],[.05,1,.95],[.95,1,.05]],[-Math.SQRT1_2,0,-Math.SQRT1_2],t)]}function o_(s){const e=[];for(const i of[4/16,12/16])e.push(...Zt([[i,-.0625,1],[i,-.0625,0],[i,.9375,0],[i,.9375,1]],[1,0,0],s.side)),e.push(...Zt([[0,-.0625,i],[1,-.0625,i],[1,.9375,i],[0,.9375,i]],[0,0,1],s.side));return e}function a_(s){const e=Aa(s);for(const l of e)l.points=l.points.map(([h,d,u])=>[h,d/2,u]),l.coordinates=l.coordinates.map(([h,d])=>[h,d/2]);const t=s.modelTextures?.flowerFront,n=s.modelTextures?.flowerBack;if(t===void 0||n===void 0)return e;const i=Math.PI/8,r=Math.cos(i),o=Math.sin(i),c=[[9.6/16,-1/16,15/16],[9.6/16,-1/16,1/16],[9.6/16,15/16,1/16],[9.6/16,15/16,15/16]].map(([l,h,d])=>[.5+((l-.5)*r-(h-.5)*o)/r,.5+((l-.5)*o+(h-.5)*r)/r,d]);return e.push(...Zt(c,[r,o,0],t,jn,n)),e}function c_(s,e){const t=Math.cos(Math.PI/8),n=Math.sin(Math.PI/8),i=Zt([[.5,0,1],[.5+t,n,1],[.5+t,n,0],[.5,0,0]],[-n,t,0],e.side,[[0,0],[0,1],[1,1],[1,0]]),r=[0,1,2,3].flatMap(o=>Hs(i,o));return Hs(r,Number(s.states?.coral_fan_direction??0)===1?1:0)}function l_(s,e){const t=[];for(const i of[Math.PI/8,-Math.PI/8]){const r=Math.cos(i),o=Math.sin(i),a=ti([0,.5,0,1,.5,1],e.side,[Ct(0,0,16,16),Ct(16,16,0,0)],[0,1]);t.push(..._n(a,([c,l,h])=>[c,.5+(l-.5)-(h-14/16)*o/r,14/16+(l-.5)*o/r+(h-14/16)],([c,l,h])=>[c,l*r-h*o,l*o+h*r]))}const n=Number(s.states?.coral_direction??Number(s.states?.block_data??0)>>2&3);return Hs(t,[3,1,0,2][n]??3)}function h_(s,e,t){switch(t){case"bamboo":return Q0(s,e);case"torch":return e_(s,e);case"end_rod":return t_(s,e);case"piston":return fl(s,e);case"piston_head":return fl(s,e);case"rail":return s_(s,e);case"vine":return r_(s,e);case"coral_wall_fan":return l_(s,e);case"coral_fan":return c_(s,e);case"cross":return["minecraft:wheat","minecraft:carrots","minecraft:potatoes","minecraft:beetroot","minecraft:nether_wart"].includes(s.name)?o_(e):s.name==="minecraft:kelp"?Aa(e,e.modelTextures?.body??e.side,e.modelTextures?.bodyAlt??e.side):s.name==="minecraft:double_plant"&&s.states?.double_plant_type==="sunflower"&&s.states?.upper_block_bit?a_(e):Aa(e);default:return}}function Un(s,e){const t=s.states,n=t&&Object.hasOwn(t,"block_data")?e.legacyStates?.[s.name]?.[String(t.block_data)]:void 0;let i=!1;const r=s.extra?.map(o=>{if(!o||typeof o!="object"||Array.isArray(o)||typeof o.name!="string")return o;const a=Un(o,e);return a!==o&&(i=!0),a});return!n&&!i?s:{...s,...n?{name:n.name,states:{...n.states,...Object.fromEntries(Object.entries(t).filter(([o])=>o!=="block_data"))}}:{},...i?{extra:r}:{}}}const u_=[[0,1,0],[0,-1,0],[1,0,0],[-1,0,0],[0,0,1],[0,0,-1]];function d_([s,e,t,n,i,r]){return[[[s,i,r],[n,i,r],[n,i,t],[s,i,t]],[[s,e,t],[n,e,t],[n,e,r],[s,e,r]],[[n,e,r],[n,e,t],[n,i,t],[n,i,r]],[[s,e,t],[s,e,r],[s,i,r],[s,i,t]],[[s,e,r],[n,e,r],[n,i,r],[s,i,r]],[[n,e,t],[s,e,t],[s,i,t],[n,i,t]]]}function Ra(s,e,t=!0){const n=e.atlas;if(!n)return;const i=[],r=[],o=[],a=[];for(const l of s){const h=i.length/3,d=l.tile%n.columns*n.stride+n.padding,u=Math.floor(l.tile/n.columns)*n.stride+n.padding;for(let f=0;f<4;f++){const[g,_,m]=l.points[f];i.push(g-(t?.5:0),_,m-(t?.5:0)),r.push(...l.normal);const[p,v]=l.coordinates[f];o.push((d+.05+p*(n.tileSize-.1))/n.width,1-(u+.05+(1-v)*(n.tileSize-.1))/n.height)}a.push(h,h+1,h+2,h,h+2,h+3)}const c=new kt;return c.setAttribute("position",new je(i,3)),c.setAttribute("normal",new je(r,3)),c.setAttribute("uv",new je(o,2)),c.setIndex(a),c.computeBoundingSphere(),c}function kr(s,e,t){s=Un(s,t);const n=s.name.replace("minecraft:",""),i=e.shape||(n.endsWith("_stairs")?"stairs":n.includes("slab")&&!n.includes("double")?"slab":"cube"),r=j0(s,e,t)||h_(s,e,i);if(r)return Ra(r,t);const o=s.states||{},a=!!(o.top_slot_bit||o.upside_down_bit);let c=[[0,0,0,1,1,1]];i==="slab"?c=[a?[0,.5,0,1,1,1]:[0,0,0,1,.5,1]]:i==="stairs"?c=D0(s):i==="trapdoor"?c=A0(s):i==="gate"?c=R0(s):i==="door"?c=T0(w0(s)):i==="carpet"?c=[[0,0,0,1,1/16,1]]:i==="snow"?c=[[0,0,0,1,(Number(o.height||0)+1)/8,1]]:i==="farmland"?c=[[0,0,0,1,15/16,1]]:i==="cactus"?c=[[1/16,0,1/16,15/16,1,15/16]]:i==="fence"?c=[[6/16,0,6/16,10/16,1,10/16],[0,6/16,7/16,1,9/16,9/16],[0,12/16,7/16,1,15/16,9/16]]:i==="wall"?c=[[.25,0,.25,.75,1,.75],[0,0,5/16,1,13/16,11/16]]:i==="pane"&&(c=[[7/16,0,0,9/16,1,1]]);const l=[],h=[e.top,e.bottom,e.faces?.east??e.side,e.faces?.west??e.side,e.faces?.south??e.side,e.faces?.north??e.side];return c.forEach((d,u)=>{for(const f of L0(c,u))l.push({points:d_(f.box)[f.face],normal:[...u_[f.face]],coordinates:rh(f.box,f.face),tile:h[f.face]})}),Ra(l,t)}function f_(s,e,t){const n=e.atlas;if(!n)return;const i=n.tileSize,r=1/32,o=[],a=[[0,0],[1,0],[1,1],[0,1]];o.push({tile:s,points:[[-.5,0,r],[.5,0,r],[.5,1,r],[-.5,1,r]],normal:[0,0,1],coordinates:a}),o.push({tile:s,points:[[.5,0,-r],[-.5,0,-r],[-.5,1,-r],[.5,1,-r]],normal:[0,0,-1],coordinates:[[1,0],[0,0],[0,1],[1,1]]});const c=(l,h)=>l>=0&&l<i&&h>=0&&h<i&&(!t||t[(h*i+l)*4+3]>=115);for(let l=0;l<i;l++)for(let h=0;h<i;h++)if(c(h,l)){const d=h/i-.5,u=(h+1)/i-.5,f=1-(l+1)/i,g=1-l/i,_=Array.from({length:4},()=>[(h+.5)/i,1-(l+.5)/i]);c(h-1,l)||o.push({tile:s,points:[[d,f,-r],[d,f,r],[d,g,r],[d,g,-r]],normal:[-1,0,0],coordinates:_}),c(h+1,l)||o.push({tile:s,points:[[u,f,r],[u,f,-r],[u,g,-r],[u,g,r]],normal:[1,0,0],coordinates:_}),c(h,l-1)||o.push({tile:s,points:[[d,g,r],[u,g,r],[u,g,-r],[d,g,-r]],normal:[0,1,0],coordinates:_}),c(h,l+1)||o.push({tile:s,points:[[d,f,-r],[u,f,-r],[u,f,r],[d,f,r]],normal:[0,-1,0],coordinates:_})}return Ra(o,e,!1)}const p_=s=>`${Math.floor(s.position.x/16)},${Math.floor(s.position.z/16)}`,Er=s=>s*Math.PI/180,Co=s=>s.toLowerCase().replace(/[^a-z]/g,""),pl=(s,e=!1,t)=>`${e?"light:":""}${s}${t?`|${t}`:""}`,ws=["head","headcontrol","headmain"],m_={head:ws,chest:["body","torso","chest"],mainhand:["rightitem","rightarmitem","helditem","rightarm","armright","arms"],offhand:["leftitem","leftarmitem","leftarm","armleft"]};class g_{constructor(e,t,n,i){this.catalog=e,this.assets=t,this.changed=n,this.failed=i,this.group.name="saved-world-entities",t.palette.forEach((a,c)=>this.paletteEntries.set(this.blockKey(a),c));const r=document.createElement("canvas"),o=t.atlas.atlas;o&&(r.width=o.width,r.height=o.height,this.itemCanvas=r.getContext("2d",{willReadFrequently:!0})||void 0,this.itemCanvas?.drawImage(t.texture.image,0,0,o.width,o.height)),this.itemMaterial=new xt({map:t.texture,alphaTest:.45,side:It}),this.fireMaterial=new cs({map:t.texture,alphaTest:.1,side:It})}catalog;assets;changed;failed;group=new Ze;regions=new Map;active=new Map;materials=new Map;geometries=new Map;controller=new AbortController;paletteEntries=new Map;itemCanvas;itemMaterial;fireMaterial;lastSignature="";disposed=!1;unsupported=0;batches=[];omitted=0;invisible=0;unknownTypes=[];setRegion(e,t){this.removeRegion(e),this.regions.set(e,t),this.lastSignature=""}removeRegion(e){this.regions.delete(e);for(const[t,n]of this.active)t.startsWith(`${e}|`)&&this.release(t,n);this.lastSignature=""}clear(){for(const[e,t]of this.active)this.release(e,t);this.regions.clear(),this.lastSignature="",this.unsupported=this.omitted=this.invisible=0,this.clearBatches()}sync(e,t){if(this.disposed)return!1;const n=[];this.invisible=0;for(const[l,h]of this.regions)for(const d of h)e.has(p_(d))&&(d.invisible&&(this.invisible++,!Object.keys(d.equipment||{}).length&&!d.parts?.length&&!d.carriedBlock&&!d.fireTicks)||n.push({key:`${l}|${d.id}`,entity:d}));const i=l=>(l.position.x-t.x)**2+(l.position.y-t.y)**2+(l.position.z-t.z)**2;n.sort((l,h)=>i(l.entity)-i(h.entity));const r=n.slice(0,4096);this.omitted=n.length-r.length;const o=new Set(r.map(l=>l.key)),a=[...o].sort().join("|");if(a===this.lastSignature)return!1;for(const[l,h]of this.active)o.has(l)||this.release(l,h);this.unsupported=0;const c=new Set;for(const l of r){if(this.active.has(l.key))continue;const h=this.create(l.entity);h?this.active.set(l.key,h):(this.unsupported++,c.add(l.entity.type))}return this.unknownTypes=[...c],this.lastSignature=a,this.rebuildBatches(),this.trimTextures(),!0}texture(e,t=!1,n){const i=pl(e,t,n),r=this.materials.get(i);if(r)return r.used=performance.now(),r.material;const o=new Mt;o.colorSpace=vt,o.magFilter=Pt,o.minFilter=yi;const a={map:o,alphaTest:.05,side:It,transparent:!0,opacity:0},c=t?new cs(a):new xt(a),l=n&&!t?new Mt:void 0;l&&(l.colorSpace=vt,l.magFilter=Pt,l.minFilter=yi),l&&c instanceof xt&&(c.emissive.set(16777215),c.emissiveMap=l);const h={texture:o,emissiveTexture:l,material:c,pending:!0,error:!1,sprites:new Set,refs:0,used:performance.now()};this.materials.set(i,h);const d=(u,f)=>fetch(pi(u),{signal:this.controller.signal}).then(g=>{if(!g.ok)throw new Error("世界里的生物外观还没有载入，请重试。");return g.blob()}).then(g=>createImageBitmap(g,{imageOrientation:"flipY"})).then(g=>{if(this.disposed||this.materials.get(i)!==h){g.close();return}return f.image=g,f.flipY=!1,f.needsUpdate=!0,g});return Promise.all([d(e,o),...l?[d(n,l)]:[]]).then(([u])=>{if(!u||this.disposed||this.materials.get(i)!==h)return;const f=new OffscreenCanvas(u.width,u.height),g=f.getContext("2d");g?.drawImage(u,0,0);const m=g?.getImageData(0,0,u.width,u.height).data?.some((p,v)=>v%4===3&&p>12&&p<250)||!1;c.opacity=1,c.transparent=m,c.depthWrite=!m,c.needsUpdate=!0,h.pending=!1;for(const p of h.sprites)p.opacity=1,p.needsUpdate=!0;this.changed()}).catch(u=>{this.disposed||this.controller.signal.aborted||this.materials.get(i)!==h||(h.pending=!1,h.error=!0,this.failed(u instanceof Error?u.message:"世界里的生物外观还没有载入，请重试。"),this.changed())}),c}skeleton(e,t,n,i,r){const o=r||t.texture;i.add(pl(o,t.emissive,t.emissiveTexture));const a={...this.catalog.poses?.[n.type]?.[String(n.pose??0)]||{},...n.boneRotations};return S0(t,this.texture(o,t.emissive,t.emissiveTexture),(l,h,d,u)=>{const f=`${e}:${h}`;let g=this.geometries.get(f);return g||(g=hl(l,t.textureWidth,t.textureHeight,d,u),this.geometries.set(f,g)),g},a,n.hiddenBones)}bone(e,t){for(const n of t){const i=[...e.bones].find(([r])=>Co(r)===n)?.[1];if(i)return i}}blockKey(e){return`${e.name}:${JSON.stringify(Object.entries(e.states||{}).sort(([t],[n])=>t.localeCompare(n)))}`}itemGeometry(e){const t=this.assets.atlas,n=`${e.name}:${e.damage??0}`;if(e.block){const u=this.blockKey(e.block),f=`block:${u}`,g=this.geometries.get(f);if(g)return g;const _=this.paletteEntries.get(u),m=_===void 0?t.materials[e.block.name]:t.paletteMaterials?.[_]||t.materials[e.block.name];if(!m)return;const p=kr(e.block,m,t);return p&&this.geometries.set(f,p),p}const r=(t.inventoryItems?.[n]||t.inventoryItems?.[e.name]||t.inventoryItems?.[`${e.name}:0`])?.tile??t.decorativeItems?.[n]??t.decorativeItems?.[e.name];if(r===void 0||!t.atlas)return;const o=this.geometries.get(`item:${r}`);if(o)return o;const a=t.atlas,c=r%a.columns*a.stride+a.padding,l=Math.floor(r/a.columns)*a.stride+a.padding,h=this.itemCanvas?.getImageData(c,l,a.tileSize,a.tileSize).data,d=f_(r,t,h);return d&&this.geometries.set(`item:${r}`,d),d}item(e,t){const n=this.itemGeometry(e);if(!n)return;const i=new Pe(n,this.itemMaterial);return i.scale.setScalar(t),i.userData.savedItem=e.name,i}armor(e,t,n,i){const r=/^minecraft:(leather|chainmail|iron|golden|diamond|netherite|turtle)_(helmet|chestplate|leggings|boots)$/.exec(n.name);if(!r)return!1;const o=(r[1]==="leather"&&n.color!==void 0?this.catalog.dyedArmorTextures?.[String(n.color)]:void 0)||this.catalog.armorTextures?.[r[1]];if(!o)return!1;const a=o[t==="legs"?1:0];i.add(a);const c=this.texture(a),l=t==="legs"?.25:.5,h=[];t==="head"&&h.push({names:ws,origin:[-4,24,-4],size:[8,8,8],uv:[0,0],pivot:[0,24,0]}),(t==="chest"||t==="legs")&&h.push({names:["body","torso","chest"],origin:[-4,12,-2],size:[8,12,4],uv:[16,16],pivot:[0,24,0]}),t==="chest"&&(h.push({names:["rightarm","armright"],origin:[-8,12,-2],size:[4,12,4],uv:[40,16],pivot:[-5,22,0]}),h.push({names:["leftarm","armleft"],origin:[4,12,-2],size:[4,12,4],uv:[40,16],pivot:[5,22,0]})),(t==="legs"||t==="feet")&&(h.push({names:["rightleg","legright"],origin:[-4,0,-2],size:[4,12,4],uv:[0,16],pivot:[-2,12,0]}),h.push({names:["leftleg","legleft"],origin:[0,0,-2],size:[4,12,4],uv:[0,16],pivot:[2,12,0]}));let d=!1;for(const u of h){const f=this.bone(e,u.names);if(!f)continue;const g=`armor:${t}:${u.names[0]}`;let _=this.geometries.get(g);_||(_=hl({origin:u.origin,size:u.size,uv:u.uv,inflate:l,mirror:u.names[0].startsWith("left")},64,32),this.geometries.set(g,_));const m=new Pe(_,c);m.position.set(-(u.origin[0]+u.size[0]/2-u.pivot[0])/16,(u.origin[1]+u.size[1]/2-u.pivot[1])/16,(u.origin[2]+u.size[2]/2-u.pivot[2])/16),f.add(m),d=!0}return d}create(e){const t=new Ze,n=new Set,i=[],r=[],o=`${e.type}:${e.variant??0}`,a=e.model||(Object.hasOwn(this.catalog.models,o)?o:e.type),c=this.catalog.models[a];let l,h=0,d=0;if(e.type==="minecraft:item"||e.type==="minecraft:ice_bomb"||e.type==="minecraft:falling_block"){const f=e.item||(e.block?{name:e.block.name,block:e.block}:e.type==="minecraft:ice_bomb"?{name:"minecraft:ice_bomb"}:void 0);if(!f)return;const g=e.type==="minecraft:falling_block",_=this.item(f,g?1:f.block?.25:.5);if(!_)return;if(_.position.y=g?-.5:.12,t.add(_),h=1,!g){const m=(f.count||1)>48?5:(f.count||1)>32?4:(f.count||1)>16?3:(f.count||1)>1?2:1;for(let p=1;p<m;p++){const v=_.clone();v.position.x+=(p*7%5-2)*.04,v.position.y+=p*.018,v.position.z+=p*.035,t.add(v),h++}}}else if(c){const f=c.bones.flatMap(_=>_.cubes||[]),g=f.length===1&&f[0].size[2]===0?f[0]:void 0;if(g){const _=e.texture||c.texture,m=c.emissive||/xp_orb|fireball/.test(e.type),p=`${m?"light:":""}${_}`;n.add(p);const v=this.texture(_,m),y=this.materials.get(p),x=new Ji({map:v.map,alphaTest:.05,opacity:y.pending?0:1}),S=ih(g),T=[S.south,S.north].find(E=>E&&E[0]+Math.abs(E[2])<=c.textureWidth)||S.south||S.north;if(T){const[E,w,I,O]=T,k=[E/c.textureWidth,1-(w+O)/c.textureHeight,I/c.textureWidth,O/c.textureHeight];x.onBeforeCompile=V=>{V.vertexShader=V.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
#ifdef USE_MAP
vMapUv = vec2(${k[0]}, ${k[1]}) + vMapUv * vec2(${k[2]}, ${k[3]});
#endif`)},x.customProgramCacheKey=()=>k.join(",")}const R=new Wn(x),D=e.type==="minecraft:xp_orb"?.3:1;R.scale.set(g.size[0]/16*D,g.size[1]/16*D,1),R.position.set(-(g.origin[0]+g.size[0]/2)/16*D,(g.origin[1]+g.size[1]/2)/16*D,0),e.type==="minecraft:xp_orb"&&(R.position.x=0,x.color.setRGB(.5,1,.0134)),t.add(R),y.sprites.add(x),r.push(x),h=1}else if(l=this.skeleton(a,c,e,n,e.texture),E0(l,c,e),e.invisible&&l.group.traverse(_=>{_ instanceof Pe&&(_.visible=!1)}),t.add(l.group),h+=l.cubes,c.billboard){const _=this.texture(e.texture||c.texture,c.emissive,c.emissiveTexture),m=new Ji({map:_.map,alphaTest:.05});r.push(m);const p=new Wn(m);p.position.y=c.billboard.height/2,p.scale.set(c.billboard.width,c.billboard.height,1),t.add(p)}}else return;if(t.name=e.id,t.position.set(e.position.x,e.position.y,e.position.z),t.rotation.y=Math.PI-Er(e.bodyYaw??e.rotation?.yaw??0),t.scale.setScalar(e.scale??(e.baby?.5:1)),l&&e.rotation){const f=this.bone(l,ws);f?(f.rotation.x-=Er(e.rotation.pitch),f.rotation.y-=Er(e.rotation.yaw-(e.bodyYaw??e.rotation.yaw))):/arrow|fireball|trident|skull|bullet|rocket/.test(e.type)&&(t.rotation.x=-Er(e.rotation.pitch))}for(const f of e.parts||[]){const g=this.catalog.models[f.model];if(!g){d++;continue}const _=this.skeleton(f.model,g,e,n,f.texture);f.position&&_.group.position.set(-f.position[0]/16,f.position[1]/16,f.position[2]/16),f.rotation&&_.group.rotation.copy(Cs(f.rotation)),f.scale&&_.group.scale.multiplyScalar(f.scale),((f.bone&&l?this.bone(l,[Co(f.bone)]):void 0)||l?.group||t).add(_.group),h+=_.cubes}for(const[f,g]of Object.entries(e.equipment||{})){if(e.hiddenEquipment?.includes(f)||e.parts?.some(y=>y.slot===f))continue;if(!l){d++;continue}if((e.type==="minecraft:fox"||e.type==="minecraft:panda")&&f==="mainhand"){const y=this.bone(l,ws),x=this.item(g,.5);y&&x?(x.position.set(0,e.type==="minecraft:panda"?-.3:-.2,e.type==="minecraft:panda"?-.65:-.45),x.rotation.x=Math.PI/2,y.add(x)):d++;continue}if(!["mainhand","offhand"].includes(f)&&this.armor(l,f,g,n))continue;const _=this.bone(l,m_[f]||[]),m=this.item(g,f==="head"?.65:.7);if(!_||!m){d++;continue}const p=/item/i.test(_.name),v=Co(_.name)==="arms";m.position.set(0,f==="head"?.25:p?-.15:v?-.1:-.65,v?-.4:f==="head"||p?0:-.12),f!=="head"&&(m.rotation.x=-Math.PI/2,m.rotation.z=-Math.PI/4),_.add(m)}if(e.type==="minecraft:enderman"&&e.carriedBlock){const f=this.item({name:e.carriedBlock.name,block:e.carriedBlock},.5);f?(f.position.set(0,1.15,-.55),t.add(f)):d++}const u={"minecraft:chest_minecart":"minecraft:chest","minecraft:hopper_minecart":"minecraft:hopper","minecraft:tnt_minecart":"minecraft:tnt","minecraft:command_block_minecart":"minecraft:command_block"};if(u[e.type]){const f=this.assets.palette.find(_=>_.name===u[e.type]),g=f&&this.item({name:f.name,block:f},.75);g?(g.position.y=.22,t.add(g)):d++}if(e.type==="minecraft:snow_golem"&&!e.sheared&&l){const f=this.assets.palette.find(m=>/^(minecraft:)?(?:carved_)?pumpkin$/.test(m.name)),g=this.bone(l,ws),_=f&&this.item({name:f.name,block:f},10/16);g&&_?(_.position.y=-5/16,g.add(_)):d++}if(e.fireTicks&&!/wither_skull|fireball|blaze|magma_cube|ender_crystal|lightning_bolt/.test(e.type)){const f=this.assets.atlas.materials["minecraft:fire"];let g=this.geometries.get("saved-fire");if(!g&&f&&(g=kr({name:"minecraft:fire"},f,this.assets.atlas),g&&this.geometries.set("saved-fire",g)),g){const _=new Ot().setFromObject(t).getSize(new C).divideScalar(t.scale.x),m=Math.max(.35,Math.min(2,Math.max(_.x,_.z)*1.1)),p=Math.max(.3,Math.min(3.5,_.y));for(let v=0;v<p;v+=m*.45){const y=new Pe(g,this.fireMaterial);y.position.y=v,y.scale.set(m*(1-v/p*.25),Math.min(m,p-v+m*.25),m*(1-v/p*.25)),t.add(y),h++}}}if(e.name&&e.showName!==!1){const f=e.name.replace(/§[0-9a-fk-or]/gi,"").slice(0,96),g=document.createElement("canvas");g.width=512,g.height=64;const _=g.getContext("2d");_.font=`24px ${this.assets.fontFamily}`,_.textAlign="center",_.textBaseline="middle";const m=Math.min(500,_.measureText(f).width+18);_.fillStyle="#0009",_.fillRect((512-m)/2,8,m,48),_.fillStyle="#fff",_.fillText(f,256,32,490);const p=new Ws(g);p.colorSpace=vt;const v=new Ji({map:p,depthWrite:!1}),y=new Wn(v),x=new Ot().setFromObject(l?.group||t);y.position.y=Number.isFinite(x.max.y)?(x.max.y-e.position.y)/t.scale.y+.35:2.2,y.scale.set(3.5,.4375,1),t.add(y),i.push(p),r.push(v)}for(const f of n){const g=this.materials.get(f);g&&g.refs++}return{entity:e,group:t,materials:n,ownTextures:i,ownMaterials:r,model:a,cubes:h,unsupportedEquipment:d}}clearBatches(){for(const e of this.batches)e.dispose();this.batches.length=0,this.group.clear()}rebuildBatches(){this.clearBatches();const e=new Map;for(const t of this.active.values())t.group.updateMatrixWorld(!0),t.group.traverseVisible(n=>{if(n instanceof Wn){const o=new Wn(n.material);n.matrixWorld.decompose(o.position,o.quaternion,o.scale),this.group.add(o);return}if(!(n instanceof Pe)||Array.isArray(n.material))return;const i=`${n.geometry.uuid}:${n.material.uuid}`;let r=e.get(i);r||(r={geometry:n.geometry,material:n.material,matrices:[]},e.set(i,r)),r.matrices.push(n.matrixWorld.clone())});for(const t of e.values()){const n=new rd(t.geometry,t.material,t.matrices.length);t.matrices.forEach((i,r)=>n.setMatrixAt(r,i)),n.instanceMatrix.needsUpdate=!0,n.computeBoundingSphere(),this.batches.push(n),this.group.add(n)}}release(e,t){this.group.remove(t.group),this.active.delete(e);for(const n of t.materials){const i=this.materials.get(n);if(i){i.refs=Math.max(0,i.refs-1);for(const r of t.ownMaterials)r instanceof Ji&&i.sprites.delete(r)}}t.ownTextures.forEach(n=>n.dispose()),t.ownMaterials.forEach(n=>n.dispose())}trimTextures(){if(!(this.materials.size<=256)){for(const[e,t]of[...this.materials].filter(([,n])=>!n.refs).sort((n,i)=>n[1].used-i[1].used))if(this.materials.delete(e),t.texture.dispose(),t.emissiveTexture?.dispose(),t.material.dispose(),t.texture.image?.close?.(),t.emissiveTexture?.image?.close?.(),this.materials.size<=256)break}}getDiagnostics(){const e={};let t=0;for(const n of this.active.values())e[n.entity.type]=(e[n.entity.type]||0)+1,t+=n.cubes;return{savedEntities:this.active.size,savedEntityTypes:e,savedEntityCubes:t,savedEntityBatches:this.batches.length,savedEntitySprites:this.group.children.filter(n=>n instanceof Wn).length,savedEntityVisible:this.group.visible,savedEntityTexturePending:[...this.materials.values()].filter(n=>n.pending).length,savedEntityTextureErrors:[...this.materials.values()].filter(n=>n.error).length,unsupportedSavedEntities:this.unsupported,unsupportedSavedEquipment:[...this.active.values()].reduce((n,i)=>n+i.unsupportedEquipment,0),unsupportedSavedEntityTypes:this.unknownTypes,omittedSavedEntities:this.omitted,invisibleSavedEntities:this.invisible,savedEntityEquipmentIssues:[...this.active.values()].filter(n=>n.unsupportedEquipment).slice(0,12).map(n=>({id:n.entity.id,type:n.entity.type,equipment:n.entity.equipment,parts:n.entity.parts,hidden:n.entity.hiddenEquipment})),savedEntitySamples:[...this.active.values()].slice(0,12).map(n=>({id:n.entity.id,type:n.entity.type,position:n.entity.position,rotation:n.entity.rotation,model:n.model,pose:n.entity.pose}))}}dispose(){if(!this.disposed){this.disposed=!0,this.controller.abort(),this.clear();for(const e of this.materials.values())e.texture.dispose(),e.emissiveTexture?.dispose(),e.material.dispose(),e.texture.image?.close?.(),e.emissiveTexture?.image?.close?.();for(const e of this.geometries.values())e.dispose();this.itemMaterial.dispose(),this.fireMaterial.dispose(),this.materials.clear(),this.geometries.clear()}}}const Rt=s=>typeof s=="number"&&Number.isFinite(s),fn=s=>Array.isArray(s)&&s.length===3&&s.every(Rt),Ps=s=>typeof s=="string"&&/^textures\/[a-zA-Z0-9_./-]+\.(?:png|webp|jpg)$/.test(s)&&!s.split("/").some(e=>e===".."||e==="."),Po=s=>!!s&&typeof s=="object"&&/^minecraft:[a-zA-Z0-9_]+$/.test(s.name)&&(s.damage===void 0||Rt(s.damage));function __(s){return!s||!fn(s.origin)||!fn(s.size)||s.size.some(e=>e<0)||s.inflate!==void 0&&!Rt(s.inflate)||s.rotation!==void 0&&!fn(s.rotation)||s.pivot!==void 0&&!fn(s.pivot)?!1:s.uv===void 0?!0:Array.isArray(s.uv)?s.uv.length===2&&s.uv.every(Rt):!!s.uv&&typeof s.uv=="object"&&Object.entries(s.uv).every(([e,t])=>["east","west","north","south","up","down"].includes(e)&&!!t&&Array.isArray(t.uv)&&t.uv.length===2&&t.uv.every(Rt)&&(t.uv_size===void 0||Array.isArray(t.uv_size)&&t.uv_size.length===2&&t.uv_size.every(Rt))&&(t.uvSize===void 0||Array.isArray(t.uvSize)&&t.uvSize.length===2&&t.uvSize.every(Rt)))}function v_(s){const e=s;if(!e||e.version!==1||!e.models||typeof e.models!="object"||Array.isArray(e.models))throw new Error("世界里的生物外观暂时无法读取。");for(const t of Object.values(e.models)){if(!t||!Ps(t.texture)||!Rt(t.textureWidth)||t.textureWidth<=0||!Rt(t.textureHeight)||t.textureHeight<=0||t.emissiveTexture!==void 0&&!Ps(t.emissiveTexture)||!Array.isArray(t.bones)||t.bones.length>512||t.scale!==void 0&&(!Rt(t.scale)||t.scale<=0)||t.billboard&&(!Rt(t.billboard.width)||!Rt(t.billboard.height)||t.billboard.width<=0||t.billboard.height<=0))throw new Error("世界里的生物外观暂时无法读取。");const n=new Map(t.bones.map(i=>[i.name.toLowerCase(),i]));if(n.size!==t.bones.length)throw new Error("世界里的生物姿态暂时无法读取。");for(const i of t.bones){if(typeof i.name!="string"||!i.name||i.pivot!==void 0&&!fn(i.pivot)||i.rotation!==void 0&&!fn(i.rotation)||i.bind_pose_rotation!==void 0&&!fn(i.bind_pose_rotation)||i.cubes!==void 0&&(!Array.isArray(i.cubes)||i.cubes.length>2048||i.cubes.some(a=>!__(a))))throw new Error("世界里的生物姿态暂时无法读取。");const r=new Set([i.name.toLowerCase()]);let o=i.parent?.toLowerCase();for(;o;){if(r.has(o)||!n.has(o))throw new Error("世界里的生物姿态暂时无法读取。");r.add(o),o=n.get(o).parent?.toLowerCase()}}}for(const t of[e.armorTextures,e.dyedArmorTextures])if(t&&Object.values(t).some(n=>!Array.isArray(n)||n.length!==2||!n.every(Ps)))throw new Error("世界里的盔甲外观暂时无法读取。");if(e.poses&&Object.values(e.poses).some(t=>!t||typeof t!="object"||Object.values(t).some(n=>!n||typeof n!="object"||Object.values(n).some(i=>!fn(i)))))throw new Error("世界里的生物姿态暂时无法读取。");return e}function y_(s,e){const t=s;if(!t||t.version!==1||!Array.isArray(t.entities)||t.entities.length!==e.count)throw new Error("附近的生物暂时无法读取，请重新打开地图。");const n=new Set;for(const i of t.entities){if(!i||typeof i.id!="string"||!i.id||n.has(i.id)||typeof i.type!="string"||!/^minecraft:[a-zA-Z0-9_]+$/.test(i.type)||!i.position||![i.position.x,i.position.y,i.position.z].every(Rt)||Math.floor(i.position.x/64)!==e.x||Math.floor(i.position.z/64)!==e.z||i.rotation&&(!Rt(i.rotation.yaw)||!Rt(i.rotation.pitch))||i.hiddenEquipment&&(!Array.isArray(i.hiddenEquipment)||i.hiddenEquipment.some(r=>!["head","chest","legs","feet","mainhand","offhand"].includes(r)))||i.scale!==void 0&&(!Rt(i.scale)||i.scale<=0)||i.texture!==void 0&&!Ps(i.texture)||i.name!==void 0&&typeof i.name!="string"||i.boneRotations&&Object.values(i.boneRotations).some(r=>!fn(r))||i.hiddenBones&&(!Array.isArray(i.hiddenBones)||i.hiddenBones.some(r=>typeof r!="string"))||i.item&&!Po(i.item)||i.equipment&&Object.values(i.equipment).some(r=>!Po(r))||i.carriedBlock&&!Po(i.carriedBlock)||i.fireTicks!==void 0&&(!Rt(i.fireTicks)||i.fireTicks<0)||i.parts&&(!Array.isArray(i.parts)||i.parts.some(r=>!r||typeof r.model!="string"||r.slot!==void 0&&!["head","chest","legs","feet","mainhand","offhand"].includes(r.slot)||r.texture!==void 0&&!Ps(r.texture)||r.position!==void 0&&!fn(r.position)||r.rotation!==void 0&&!fn(r.rotation)||r.scale!==void 0&&(!Rt(r.scale)||r.scale<=0))))throw new Error("附近的生物暂时无法读取，请重新打开地图。");n.add(i.id)}return t.entities}const ml=["#f9fffe","#f9801d","#c74ebd","#3ab3da","#fed83d","#80c71f","#f38baa","#474f52","#9d9d97","#169c9c","#8932b8","#3c44aa","#835432","#5e7c16","#b02e26","#1d1d21"],x_=s=>`${Math.floor(s.x/16)},${Math.floor(s.z/16)}`,Do=(s,e,t=0)=>Number(s.states?.[e]??t);class M_{constructor(e,t){this.family=e,this.size=Math.min(1536,Math.floor(t/this.cell)*this.cell);const n=document.createElement("canvas");n.width=n.height=this.size,this.context=n.getContext("2d"),this.texture=new Ws(n),this.texture.colorSpace=vt,this.texture.magFilter=rn,this.texture.minFilter=Ln,this.texture.generateMipmaps=!0}family;texture;cell=32;size;context;glyphs=new Map;changed=!1;missing=0;get count(){return this.glyphs.size}get bytes(){return this.size*this.size*4}font(e){return`${e.italic?"italic ":""}${e.bold?"bold ":""}20px ${this.family}`}advance(e,t){return this.context.font=this.font(t),this.context.measureText(e).width}glyph(e,t){const n=t.obfuscated&&e!==" "?"▒":e,i=`${t.bold?1:0}${t.italic?1:0}:${n}`,r=this.glyphs.get(i);if(r)return r;const o=this.size/this.cell;if(this.glyphs.size>=o*o){this.missing++;return}const a=this.glyphs.size%o*this.cell,c=Math.floor(this.glyphs.size/o)*this.cell;this.context.font=this.font(t),this.context.fillStyle="#ffffff",this.context.textBaseline="alphabetic",this.context.save(),this.context.beginPath(),this.context.rect(a,c,this.cell,this.cell),this.context.clip(),this.context.fillText(n,a+5,c+24),this.context.restore();const l={x:a,y:c,advance:this.context.measureText(e).width};return this.glyphs.set(i,l),this.changed=!0,l}upload(){this.changed&&(this.texture.needsUpdate=!0,this.changed=!1)}dispose(){this.texture.dispose(),this.glyphs.clear(),this.context.canvas.width=this.context.canvas.height=1}}class b_{constructor(e,t=()=>{},n=()=>{}){this.assets=e,this.changed=t,this.failed=n,this.group.name="visual-block-entities",this.glyphs=new M_(e.fontFamily,e.maxTextureSize);const i={map:this.glyphs.texture,vertexColors:!0,transparent:!0,alphaTest:.03,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1};this.normalText=new xt(i),this.glowingText=new cs(i),this.renderPalette=e.palette.map(r=>Un(r,e.atlas)),this.renderPalette.forEach((r,o)=>{if(r.extra?.length)return;const a=this.paletteByName.get(r.name)||[];a.push(o),this.paletteByName.set(r.name,a)})}assets;changed;failed;group=new Ze;regions=new Map;active=new Map;glyphs;normalText;glowingText;geometries=new Set;sharedMaterials=new Map;paletteByName=new Map;renderPalette;plantMaterials=new Map;appearances=new Map;images=new Map;imageController=new AbortController;lastSignature="";omitted=0;unsupported=0;disposed=!1;setRegion(e,t){this.removeRegion(e),this.regions.set(e,t),this.lastSignature=""}removeRegion(e){this.regions.delete(e);for(const[t,n]of this.active)t.startsWith(`${e}:`)&&this.release(t,n);this.lastSignature=""}clear(){for(const[e,t]of this.active)this.release(e,t);this.regions.clear(),this.lastSignature="",this.omitted=this.unsupported=0}sync(e,t,n,i,r){if(this.disposed)return!1;const o=[];for(const[d,u]of this.regions)u.forEach((f,g)=>{const _=`${f.x},${f.y},${f.z}`;if(f.type==="sign"?!n.has(_):!i&&!r?.has(_))return;const m=f.type==="sign"?!!(f.front.text.trim()||f.back?.text.trim()):f.type==="flower_pot"?!!f.plant:f.type==="item_frame"?!!f.item:f.type==="banner";e.has(x_(f))&&m&&(f.type==="sign"||!r||r.has(_))&&o.push({region:d,index:g,entity:f})});const a=d=>(d.x-t.x)**2+(d.y-t.y)**2+(d.z-t.z)**2;o.sort((d,u)=>a(d.entity)-a(u.entity));const c=o.slice(0,2048);this.omitted=o.length-c.length;const l=new Set(c.map(d=>`${d.region}:${d.index}`)),h=[...l].sort().join("|");if(h===this.lastSignature)return!1;this.unsupported=0;for(const[d,u]of this.active)l.has(d)||this.release(d,u);for(const d of c){const u=`${d.region}:${d.index}`;if(this.active.has(u))continue;const f=this.create(d.entity);f?(this.active.set(u,f),this.group.add(f.group)):this.unsupported++}return this.glyphs.upload(),this.lastSignature=h,!0}getDiagnostics(){const e={};for(const i of this.active.values()){const r=String(i.group.userData.entityType);e[r]=(e[r]||0)+1}const t=[];for(const{group:i}of this.active.values())if(i.userData.entityType==="sign"&&(t.push({...i.userData.position,hasText:i.children.some(r=>typeof r.userData.text=="string"&&r.userData.text.trim().length>0)}),t.length>=64))break;let n=0;return this.group.traverse(i=>{if(!(i instanceof Pe))return;const r=i.geometry;for(const o of Object.values(r.attributes))n+=o.array.byteLength;n+=r.index?.array.byteLength||0}),{entities:this.active.size,entityTypes:e,signPositions:t,cachedEntityRegions:this.regions.size,entityGlyphs:this.glyphs.count,entityGeometryBytes:n,entityTextureBytes:this.disposed?0:this.glyphs.bytes+[...this.appearances.values()].reduce((i,r)=>i+r.canvas.width*r.canvas.height*4,0),missingEntityGlyphs:this.glyphs.missing,omittedEntities:this.omitted,unsupportedEntityContents:this.unsupported,pendingEntityTextures:[...this.appearances.values()].filter(i=>i.pending).length,entityTextureErrors:[...this.appearances.values()].filter(i=>i.error).length}}create(e){const t=Un(e.block,this.assets.atlas);if(t!==e.block&&(e={...e,block:t}),e.type==="flower_pot"&&e.plant&&(e={...e,plant:Un(e.plant,this.assets.atlas)}),e.type==="sign")return this.sign(e);if(e.type==="banner")return this.banner(e);if(e.type==="flower_pot")return this.pot(e);if(e.type==="item_frame")return this.frame(e)}banner(e){const t=this.assets.atlas.decorativeBanners,n=e.bannerType===1;if(!t||(n?!t.ominous:e.patterns.some(l=>!t.patterns[l.pattern])))return;const i=n?"banner:ominous":`banner:${e.baseColor}:${JSON.stringify(e.patterns)}`,r=this.appearance(i,20,40,async l=>{if(n){l.getContext("2d").drawImage(await this.image(t.ominous),0,0,20,40);return}const h=await this.image(t.base),d=await Promise.all(e.patterns.map(f=>this.image(t.patterns[f.pattern]))),u=l.getContext("2d");u.clearRect(0,0,l.width,l.height),this.tintedImage(u,h,ml[15-e.baseColor]),d.forEach((f,g)=>this.tintedImage(u,f,ml[15-e.patterns[g].color]))}),o=this.entityGroup(e);o.userData.bannerType=e.bannerType||0;const a=e.block.name.includes("wall_banner");o.position.set(e.x+.5,e.y+(a?11/16:1),e.z+.5),o.rotation.y=Fr({name:a?"minecraft:wall_sign":"minecraft:standing_sign",states:{facing_direction:Do(e.block,"facing_direction",2),ground_sign_direction:Do(e.block,"ground_sign_direction")}}).angle;const c=[];for(const l of[!1,!0]){const h=new Qn(.8333333333333334,1.6666666666666667);if(l){const u=h.getAttribute("uv");for(let f=0;f<u.count;f++)u.setX(f,1-u.getX(f))}const d=new Pe(h,r.material);d.position.z=1/16+(a?-7/16:0)+(l?-1:1)*(1/48+.002),l&&(d.rotation.y=Math.PI),o.add(d),c.push(h)}return{group:o,release:()=>{c.forEach(l=>l.dispose()),this.releaseAppearance(i)}}}tintedImage(e,t,n){const i=document.createElement("canvas");i.width=e.canvas.width,i.height=e.canvas.height;const r=i.getContext("2d");r.imageSmoothingEnabled=!1,r.drawImage(t,0,0,i.width,i.height),r.globalCompositeOperation="multiply",r.fillStyle=n,r.fillRect(0,0,i.width,i.height),r.globalCompositeOperation="destination-in",r.drawImage(t,0,0,i.width,i.height),e.drawImage(i,0,0),i.width=i.height=1}pot(e){if(!e.plant)return;const t=this.plantMaterial(e.plant);if(!t)return;if(e.plant.name==="minecraft:cactus"||e.plant.name==="minecraft:bamboo")return this.pottedStem(e,t);const n=this.entityGroup(e),i=new kt,r=2.6/16,o=13.4/16,a=4/16,c=1,l=[r,a,r,o,a,o,o,c,o,r,c,r,o,a,r,r,a,o,r,c,o,o,c,r];i.setAttribute("position",new je(l,3));const h=this.tileUvs(t.side);i.setAttribute("uv",new je([...h,...h],2));const d=t.tint||[1,1,1];i.setAttribute("color",new je(Array.from({length:8},()=>d).flat(),3)),i.setIndex([0,1,2,0,2,3,4,5,6,4,6,7]),i.computeVertexNormals(),i.computeBoundingSphere();const u=new Pe(i,this.atlasMaterial());return n.add(u),{group:n,release:()=>i.dispose()}}pottedStem(e,t){const n=e.plant?.name==="minecraft:bamboo",i=this.entityGroup(e),r=[],o=new on(n?2/16:4/16,n?1:11/16,n?2/16:4/16),a=n?t.modelTextures?.stem??t.side:t.side,c=n?t.modelTextures?.cap??t.top:t.top,l=[];for(let d=0;d<6;d++){const u=d===2||d===3?n?[13,0,15,2]:[6,6,10,10]:n?[6,0,8,16]:[6,0,10,12];l.push(...this.tileUvs(d===2||d===3?c:a,!0,u))}o.setAttribute("uv",new je(l,2)),o.setAttribute("color",new je(Array(72).fill(1),3));const h=new Pe(o,this.atlasMaterial());if(h.position.set(.5,n?.5:21/32,.5),i.add(h),r.push(o),n&&t.modelTextures?.pottedLeaves!==void 0){const d=new Qn(1,1);d.setAttribute("uv",new je(this.tileUvs(t.modelTextures.pottedLeaves,!0),2)),d.setAttribute("color",new je(Array(12).fill(1),3));const u=new Pe(d,this.atlasMaterial());u.position.set(.5,10/16,.5),i.add(u),r.push(d)}return{group:i,release:()=>r.forEach(d=>d.dispose())}}plantMaterial(e){e=Un(e,this.assets.atlas);const t=`${e.name}:${JSON.stringify(Object.entries(e.states||{}).sort(([o],[a])=>o.localeCompare(a)))}`;if(this.plantMaterials.has(t))return this.plantMaterials.get(t);let n=-1,i=-1;for(const o of this.paletteByName.get(e.name)||[]){const a=this.renderPalette[o],c=Object.entries(e.states||{}).filter(([h,d])=>a.states?.[h]===d).length;!Object.entries(e.states||{}).some(([h,d])=>a.states?.[h]!==void 0&&a.states[h]!==d)&&c>i&&(n=o,i=c)}const r=n<0?this.assets.atlas.materials[e.name]:this.assets.atlas.paletteMaterials?.[n]||this.assets.atlas.materials[e.name];return this.plantMaterials.size>=512&&this.plantMaterials.clear(),this.plantMaterials.set(t,r),r}frame(e){if(!e.item)return;const t=this.entityGroup(e);switch(t.position.set(e.x+.5,e.y+.5,e.z+.5),Do(e.block,"facing_direction",2)){case 0:t.rotation.x=Math.PI/2;break;case 1:t.rotation.x=-Math.PI/2;break;case 3:break;case 4:t.rotation.y=-Math.PI/2;break;case 5:t.rotation.y=Math.PI/2;break;default:t.rotation.y=Math.PI}const n=e.item.map,i=n?1:.5,r=new Qn(i,i);let o,a,c=()=>{};if(n){const h=`map:${n.file}`;a=this.appearance(h,n.width,n.height,async(u,f)=>{const g=u.getContext("2d");g.fillStyle="#d8cfa8",g.fillRect(0,0,u.width,u.height);const _=await fetch(Pn(n.file),{signal:f});if(!_.ok)throw new Error(`地图画下载失败（${_.status}）`);const m=this.assets.atlas.decorativeMapBackground,p=await createImageBitmap(await _.blob());try{const v=m?await this.image(m):void 0;v&&g.drawImage(v,0,0,u.width,u.height),g.drawImage(p,0,0)}finally{p.close()}},!0).material,c=()=>this.releaseAppearance(h)}else{const h=e.item.block,d=`${e.item.name}:${e.item.damage}`,u=h?`${d}|${h.name}|${JSON.stringify(Object.fromEntries(Object.entries(h.states||{}).sort(([_],[m])=>_<m?-1:_>m?1:0)))}`:void 0,f=this.assets.atlas.decorativeItems;o=u&&f?.[u]!==void 0?u:f?.[d]!==void 0?d:e.item.name;const g=f?.[o];if(g===void 0){r.dispose();return}r.setAttribute("uv",new je(this.tileUvs(g,!0),2)),a=this.atlasMaterial(),r.setAttribute("color",new je(Array(12).fill(1),3))}const l=new Pe(r,a);return l.position.z=-7/16+.002,l.rotation.z=-e.rotation*Math.PI/180,l.renderOrder=2,l.userData.framedItem=e.item.name,o&&(l.userData.itemTextureKey=o),n&&(l.userData.mapFile=n.file),t.add(l),{group:t,release:()=>{r.dispose(),c()}}}entityGroup(e){const t=new Ze;return t.position.set(e.x,e.y,e.z),t.userData.entityType=e.type,t.userData.position={x:e.x,y:e.y,z:e.z},t}tileUvs(e,t=!1,n=[0,0,16,16]){const i=this.assets.atlas.atlas,r=e%i.columns*i.stride+i.padding,o=Math.floor(e/i.columns)*i.stride+i.padding,[a,c,l,h]=n.map(_=>_/16*i.tileSize),d=(r+a)/i.width,u=(r+l)/i.width,f=1-(o+h)/i.height,g=1-(o+c)/i.height;return t?[d,g,u,g,d,f,u,f]:[d,f,u,f,u,g,d,g]}atlasMaterial(){let e=this.sharedMaterials.get("atlas");return e||(e=new xt({map:this.assets.texture,vertexColors:!0,alphaTest:.45,alphaToCoverage:!0,side:It}),ei(e,this.assets.texture,this.assets.maxFootprint),this.sharedMaterials.set("atlas",e)),e}image(e){let t=this.images.get(e);return t||(t=fetch(pi(e),{signal:this.imageController.signal}).then(n=>{if(!n.ok)throw new Error(`地图装饰贴图下载失败（${n.status}）`);return n.blob()}).then(n=>createImageBitmap(n)).catch(n=>{throw this.images.delete(e),n}),this.images.set(e,t)),t}appearance(e,t,n,i,r=!1){let o=this.appearances.get(e);if(o)return o.refs++,o;const a=document.createElement("canvas");a.width=t,a.height=n;const c=new Ws(a);c.colorSpace=vt,c.magFilter=Pt,c.minFilter=yi;const l={map:c,alphaTest:.02,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1},h=r?new cs(l):new xt(l);o={canvas:a,texture:c,material:h,refs:1,controller:new AbortController,pending:!0,error:!1},this.appearances.set(e,o);const d=o;return i(a,d.controller.signal).then(()=>{this.disposed||this.appearances.get(e)!==d||(d.pending=!1,c.needsUpdate=!0,this.changed())}).catch(u=>{this.disposed||this.appearances.get(e)!==d||d.controller.signal.aborted||(d.pending=!1,d.error=!0,this.failed(u instanceof Error?u.message:"地图装饰贴图加载失败"),this.changed())}),o}releaseAppearance(e){const t=this.appearances.get(e);!t||--t.refs>0||(t.controller.abort(),t.texture.dispose(),t.material.dispose(),t.canvas.width=t.canvas.height=1,this.appearances.delete(e))}sign(e){const t=Fr(e.block),n=new Ze;n.position.set(e.x+t.center[0],e.y+t.center[1],e.z+t.center[2]),n.rotation.y=t.angle,n.userData.entityType="sign",n.userData.position={x:e.x,y:e.y,z:e.z};const i=[];for(const[r,o]of[[e.front,!1],[e.back,!0]]){if(!r?.text.trim())continue;const a=this.textGeometry(r);if(!a)continue;const c=new Pe(a,r.glowing?this.glowingText:this.normalText);c.position.z=(o?-1:1)*(1/24+.002),o&&(c.rotation.y=Math.PI),c.renderOrder=3,c.userData.signSide=o?"back":"front",c.userData.text=r.text,n.add(c),i.push(a),this.geometries.add(a)}if(i.length)return{group:n,release:()=>{for(const r of i)r.dispose(),this.geometries.delete(r)}}}textGeometry(e){const t=[],n=[],i=[],r=[],o=.003928571428571429;if(yh(e.text,`#${(e.color&16777215).toString(16).padStart(6,"0")}`).forEach((c,l)=>{const h=c.flatMap(_=>Array.from(_.text).map(m=>({character:m,run:_,advance:this.glyphs.advance(m,_)}))),d=h.reduce((_,m)=>_+m.advance,0),u=Math.min(o,.9/Math.max(1,d));let f=-d*u/2;const g=.165-l*.11-.03;for(const{character:_,run:m,advance:p}of h){const v=this.glyphs.glyph(_,m);if(v&&_!==" "){const y=f-5*u,x=y+this.glyphs.cell*u,S=g-8*o,T=S+this.glyphs.cell*o,R=t.length/3;t.push(y,S,0,x,S,0,x,T,0,y,T,0);const D=v.x/this.glyphs.size,E=(v.x+this.glyphs.cell)/this.glyphs.size,w=1-(v.y+this.glyphs.cell)/this.glyphs.size,I=1-v.y/this.glyphs.size;n.push(D,w,E,w,E,I,D,I);const O=new He(m.color);for(let k=0;k<4;k++)i.push(O.r,O.g,O.b);r.push(R,R+1,R+2,R,R+2,R+3)}f+=p*u}}),!t.length)return;const a=new kt;return a.setAttribute("position",new je(t,3)),a.setAttribute("uv",new je(n,2)),a.setAttribute("color",new je(i,3)),a.setIndex(r),a.computeVertexNormals(),a.computeBoundingSphere(),a}release(e,t){this.group.remove(t.group),t.release(),this.active.delete(e)}dispose(){if(!this.disposed){this.disposed=!0,this.clear(),this.imageController.abort();for(const e of this.images.values())e.then(t=>t.close()).catch(()=>{});this.images.clear(),this.plantMaterials.clear(),this.paletteByName.clear(),this.glyphs.dispose(),this.normalText.dispose(),this.glowingText.dispose();for(const e of this.sharedMaterials.values())e.dispose();this.sharedMaterials.clear()}}}function S_(s,e=0){const t=i=>["wooden_pickaxe","stone_pickaxe","iron_pickaxe","diamond_pickaxe"][Math.min(3,Math.max(i,Math.floor(e)))],n=s.replace("minecraft:","");return/^(?:tallgrass|double_plant|deadbush|sapling|red_flower|yellow_flower|wheat|carrots|potatoes|beetroot|reeds|nether_wart|kelp|seagrass)$/.test(n)?"hand":/obsidian|ancient_debris|netherite_block/.test(n)?t(3):/diamond|emerald|gold_ore|gold_block|raw_gold_block|redstone|lapis/.test(n)?t(/lapis/.test(n)?1:2):/iron_ore|iron_block|raw_iron_block|copper_ore|copper_block|raw_copper_block/.test(n)?t(1):/(?:^|_)(?:granite|diorite|andesite|deepslate|tuff|calcite|purpur|amethyst|dripstone)(?:_|$)/.test(n)||/^(?:coal_block|bone_block|(?:stained_)?hardened_clay)$/.test(n)?t(0):n==="concrete_powder"?"stone_shovel":/stone|ore|brick|furnace|rail|anvil|terracotta|concrete|prismarine|quartz|basalt|blackstone|iron_door|iron_trapdoor|iron_bars/.test(n)?t(0):/leaves|vine|wool|web/.test(n)?"shears":/dirt|grass|sand|gravel|clay|snow|soul_soil|mycelium|podzol/.test(n)?"stone_shovel":/log|wood|plank|chest|barrel|crafting|bookshelf|fence|door|sign|pumpkin/.test(n)?"stone_axe":"hand"}function gl(s){return/diamond/.test(s)?7460051:/emerald|leaves|vine|grass|reeds|sugar_cane|wheat|carrot|potato|beetroot|bamboo/.test(s)?7706195:/redstone|netherrack/.test(s)?11296849:/gold/.test(s)?13874013:/iron/.test(s)?12297618:/coal/.test(s)?4671815:/lapis|water/.test(s)?5798558:/dirt|log|wood|plank|chest|barrel/.test(s)?10583891:/sand/.test(s)?14207382:/snow|quartz|wool/.test(s)?14934227:10066321}function E_(s,e){const t=e&&typeof e.name=="string"?e.states:e,n=s.replace("minecraft:","");if(/glass|(?:^|_)ice$|spawner|bedrock|barrier|portal|(?:^|_)fire$|(?:^|_)water$|(?:^|_)lava$/.test(n)||/^(?:tallgrass|tall_grass|short_grass|fern|large_fern|double_plant|seagrass|tall_seagrass)$/.test(n))return null;if(/^(?:deadbush|dead_bush)$/.test(n))return"minecraft:stick";if(/^carrots?$/.test(n))return"minecraft:carrot";if(/^potatoes$|^potato$/.test(n))return"minecraft:potato";if(/^(?:wheat|wheat_crop|beetroot|beetroots)$/.test(n)){const i=n.startsWith("wheat")?"wheat":"beetroot",r=t?.growth;return typeof r=="number"?`minecraft:${i}${r>=7?"":"_seeds"}`:null}return/^(?:reeds|sugar_cane)$/.test(n)?"minecraft:sugar_cane":/^(?:melon|melon_block)$/.test(n)?"minecraft:melon_slice":/^(?:attached_)?(?:melon|pumpkin)_stem$/.test(n)?`minecraft:${n.includes("melon")?"melon":"pumpkin"}_seeds`:/diamond_ore/.test(n)?"minecraft:diamond":/emerald_ore/.test(n)?"minecraft:emerald":/coal_ore/.test(n)?"minecraft:coal":/redstone_ore/.test(n)?"minecraft:redstone":/lapis_ore/.test(n)?"minecraft:lapis_lazuli":n==="stone"&&(!t?.stone_type||t.stone_type==="stone")?"minecraft:cobblestone":/^(?:grass|grass_block|grass_path|dirt_path|farmland|mycelium|podzol)$/.test(n)?"minecraft:dirt":n==="snow_layer"?"minecraft:snowball":n==="lit_furnace"?"minecraft:furnace":n==="lit_redstone_lamp"?"minecraft:redstone_lamp":s}function w_(s,e,t){if(!Number.isFinite(s)||!Number.isFinite(e))return Number.isFinite(e)?e:0;const n=Math.atan2(Math.sin(e-s),Math.cos(e-s)),i=Number.isFinite(t)?Math.max(0,Math.min(.1,t)):0,r=Math.min(Math.abs(n)*(1-Math.exp(-12*i)),i*6);return s+Math.sign(n)*r}const T_=(s,e)=>e?`${s}:0|${s}|${JSON.stringify(Object.fromEntries(Object.entries(e).sort(([t],[n])=>t<n?-1:t>n?1:0)))}`:s,A_=()=>new on(1,1,1),ji=s=>JSON.stringify([s.name,Object.entries(s.states||{}).sort(([e],[t])=>e.localeCompare(t)),s.extra||[]]);class R_{group=new Ze;box=A_();plane=new Qn(1,1);materials=new Map;itemGeometries=new Map;itemMaterials=new Map;blockMaterials=new Map;accepted=new Map;effects=[];actions=new Map;actionLabels=new Map;miningPreviews=new Map;recentActions=[];held=new Map;actorHands=new Map;miningTiers=new Map;headClocks=new WeakMap;texture;atlas;maxFootprint=0;clock=0;sourceTime=NaN;sourceSpeed=1;playing=!1;emitted=0;disposed=!1;constructor(){this.group.name="memory-interactions"}configure(e,t,n=[],i=0){this.texture=e,this.atlas=t,this.maxFootprint=i,this.blockMaterials.clear(),n.forEach((r,o)=>{const a=t.paletteMaterials?.[o];a&&(this.blockMaterials.set(ji(r),a),this.blockMaterials.set(ji(Un(r,t)),a))})}setReplayClock(e,t){this.sourceTime=e,this.sourceSpeed=t}synchronizeActor(e){const t=this.actions.get(e.player);if(!t)return;const n=e.actionTarget;t.current=e.actionTime===t.time&&!!n&&n.x===t.target.x&&n.y===t.target.y&&n.z===t.target.z&&(t.kind!=="mine_prepare"||this.sourceTime<t.time),!t.current&&(e.actionTime!==void 0||this.sourceTime>t.time+2.5)&&(this.actions.delete(e.player),this.clearMiningPreview(e.player))}setPlaying(e){this.playing=e}get time(){return this.clock}material(e){let t=this.materials.get(e);return t||(t=new xt({color:e}),this.materials.set(e,t)),t}cube(e,t){const n=new Pe(this.box,this.material(e));return n.scale.setScalar(t),n}item(e,t,n){const i=T_(e,n),r=this.atlas,o=r?.inventoryItems?.[i]||r?.inventoryItems?.[`${e}:0`]||r?.inventoryItems?.[e];if(!o||!this.texture||!r?.atlas)return this.cube(gl(e),t*.7);let a=this.itemGeometries.get(i),c=this.itemMaterials.get(i);if(!a){const h=r.atlas,d=o.tile%h.columns*h.stride+h.padding,u=Math.floor(o.tile/h.columns)*h.stride+h.padding,f=(d+.15)/h.width,g=(d+h.tileSize-.15)/h.width,_=1-(u+h.tileSize-.15)/h.height,m=1-(u+.15)/h.height;a=this.plane.clone(),a.setAttribute("uv",new je([f,m,g,m,f,_,g,_],2)),this.itemGeometries.set(i,a),c=new xt({map:this.texture,alphaTest:.45,side:It}),ei(c,this.texture,this.maxFootprint),this.itemMaterials.set(i,c)}const l=new Pe(a,c);return l.scale.setScalar(t),l}blockItem(e,t,n){if(!e||!this.atlas||!this.texture)return this.item(t,n,e?.states);const i=this.blockMaterials.get(ji(e));if(!i)return this.item(t,n,e.states);const r=`block:${ji(e)}`;let o=this.itemGeometries.get(r),a=this.itemMaterials.get("block-atlas");if(!o&&this.itemGeometries.size<512&&(o=kr(e,i,this.atlas),o&&(o.translate(0,-.5,0),this.itemGeometries.set(r,o))),!o)return this.item(t,n,e.states);a||(a=new xt({map:this.texture,alphaTest:.45,side:It}),ei(a,this.texture,this.maxFootprint),this.itemMaterials.set("block-atlas",a));const c=new Pe(o,a);return c.scale.setScalar(n),c}chip(e,t,n){const i=e&&this.blockMaterials.get(ji(e)),r=this.atlas;if(!i||!r?.atlas||!this.texture)return this.cube(t,n);const o=`chip:${i.side}`;let a=this.itemGeometries.get(o),c=this.itemMaterials.get("block-atlas");if(!a&&this.itemGeometries.size<512){const h=r.atlas,d=i.side%h.columns*h.stride+h.padding,u=Math.floor(i.side/h.columns)*h.stride+h.padding;a=this.box.clone();const f=a.getAttribute("uv");for(let g=0;g<f.count;g++)f.setXY(g,(d+3+f.getX(g)*7)/h.width,1-(u+3+(1-f.getY(g))*7)/h.height);this.itemGeometries.set(o,a)}if(!a)return this.cube(t,n);c||(c=new xt({map:this.texture,alphaTest:.45}),ei(c,this.texture,this.maxFootprint),this.itemMaterials.set("block-atlas",c));const l=new Pe(a,c);return l.scale.setScalar(n),l}effect(e,t,n){for(;this.effects.length>=160;){const i=this.effects.shift();this.group.remove(i.object)}this.group.add(e),this.effects.push({object:e,duration:t,age:0,update:n}),n(0,0)}clearMiningPreview(e){const t=this.miningPreviews.get(e);if(!t)return;t.removeFromParent(),this.miningPreviews.delete(e);const n=this.effects.findIndex(i=>i.object===t);n>=0&&this.effects.splice(n,1)}show(e){if(this.disposed||e.kind==="fluid_change"||!/^(?:mine_prepare|break|support_removed|crop_grow|place|interact|container_(?:put|take|open|close)|item_use|teleport|death|join|leaf_decay|plant_decay|crop_growth|stack_growth|soil_preparation|soil_reversion|fire_spread|fire_extinguish)$/.test(e.kind))return;const t=e.blockState||(e.blockStates?{name:e.block,states:e.blockStates}:void 0);if(t){const u=Un(t,this.atlas||{});e={...e,block:u.name,blockState:u,blockStates:u.states}}const n=this.accepted.get(e.player);e.player&&n&&(e.time<n.time||e.time===n.time&&(e.order??0)<n.order)&&(e={...e,player:""});const i=this.actions.get(e.player);if(i&&i.time===e.time&&i.age<.18&&i.kind===e.kind&&Math.hypot(i.target.x-e.target.x,i.target.y-e.target.y,i.target.z-e.target.z)<.1)return;const{dropGround:r,...o}=e;if(this.recentActions.push(o),this.recentActions.length>24&&this.recentActions.shift(),this.clearMiningPreview(e.player),/^(break|support_removed)$/.test(e.kind))for(const[u,f]of this.actions)f.kind==="mine_prepare"&&f.target.x===e.target.x&&f.target.y===e.target.y&&f.target.z===e.target.z&&(this.clearMiningPreview(u),this.actions.delete(u));const a=e.kind==="mine_prepare"?.85:e.kind==="break"?.45:1.1,c={...o,age:0,duration:a,tool:/^(break|mine_prepare)$/.test(e.kind)?S_(e.block,this.miningTiers.get(e.player)):"hand"};if(e.player&&c.tool.endsWith("_pickaxe")&&(this.miningTiers.delete(e.player),this.miningTiers.set(e.player,["wooden_pickaxe","stone_pickaxe","iron_pickaxe","diamond_pickaxe"].indexOf(c.tool)),this.miningTiers.size>256&&this.miningTiers.delete(this.miningTiers.keys().next().value)),e.player){if(e.kind!=="mine_prepare")for(this.accepted.delete(e.player),this.accepted.set(e.player,{time:e.time,order:e.order??0});this.accepted.size>256;)this.accepted.delete(this.accepted.keys().next().value);for(this.actions.set(e.player,c);this.actions.size>64;){const g=this.actions.keys().next().value;this.clearMiningPreview(g),this.actions.delete(g)}const u=this.actionLabels.get(e.player),f=e.recorded!==!1&&e.kind!=="mine_prepare";if(f||!u?.recorded||u.until<=this.clock)for(this.actionLabels.set(e.player,{kind:e.kind==="mine_prepare"?"break":e.kind,until:this.clock+Math.max(.6,a),recorded:f});this.actionLabels.size>64;)this.actionLabels.delete(this.actionLabels.keys().next().value)}this.emitted++;const l=new C(e.target.x+.5,e.target.y+.5,e.target.z+.5),h=new C(e.origin.x,e.origin.y+1.05,e.origin.z),d=gl(e.block);if(e.kind==="mine_prepare"){if(!e.player||/sapling|flower|tallgrass|wheat|carrot|potato|beet|reeds|sugar_cane|bamboo|stem|torch|rail|wire|ladder|vine|fence|sign|door|bed$|button|lever|pressure_plate|chest|barrel|hopper|anvil|stairs|slab/.test(e.block))return;const u=new Ze;u.name="memory-mining-cracks",u.position.copy(l);const f=[];for(const[g,_,m,p,v]of[[0,0,.503,0,0],[0,0,-.503,0,Math.PI],[.503,0,0,0,Math.PI/2],[-.503,0,0,0,-Math.PI/2],[0,.503,0,-Math.PI/2,0],[0,-.503,0,Math.PI/2,0]]){const y=new Ze;y.position.set(g,_,m),y.rotation.set(p,v,0),u.add(y);for(const[x,S,T,R]of[[-.18,.16,.01,-.03],[.01,-.03,.17,.07]]){const D=new Pe(this.box,this.material(3750967)),E=Math.hypot(T-x,R-S);D.position.set((x+T)/2,(S+R)/2,0),D.rotation.z=Math.atan2(R-S,T-x),D.scale.set(E,.012,.003),y.add(D),f.push({mesh:D,length:E})}}this.miningPreviews.set(e.player,u),this.effect(u,a,g=>{for(const{mesh:_,length:m}of f)_.scale.x=m*(.35+g*.65)})}else if(e.kind==="break"||e.kind==="support_removed"){for(let f=0;f<(e.kind==="support_removed"?4:10);f++){const g=this.chip(e.blockState,/ore/.test(e.block)&&f%3?9606283:d,.08+f%3*.018),_=f*2.39996,m=.25+f%4*.085,p=l.clone().add(new C(Math.sin(_)*.28,f%3*.1,Math.cos(_)*.28));this.effect(g,.68+f%3*.08,(v,y)=>{g.position.copy(p).add(new C(Math.sin(_)*m*v,y*(1.6+f%3*.3)-3*y*y,Math.cos(_)*m*v)),g.rotation.set(v*3,_+v*4,v),g.scale.setScalar((.08+f%3*.018)*Math.min(1,(1-v)*4))})}const u=E_(e.block,e.blockState);if(u){const f=this.blockItem(u===e.block&&!/:(?:wheat|beetroot|carrots|potatoes|reeds|nether_wart)$/.test(e.block)?e.blockState:void 0,u,.32);f.name="memory-drop",f.userData.memoryDrop={block:u,target:e.target,floor:e.dropFloor,time:e.time};let g,_=l.y,m=1.1,p=0;this.effect(f,1.6,(v,y)=>{const x=Math.max(0,(v-.78)/.22),S=e.dropGround?e.dropGround():e.dropFloor;f.userData.memoryDrop.floor=S;const T=S===void 0?-1/0:Math.min(l.y,S+.16),R=Math.max(0,y-p);p=y,_+=m*R-4.8*R*R,m-=9.6*R;const D=_<=T;D&&(_=T,m=0),f.position.set(l.x+.12,_,l.z+.12),D&&(f.position.y+=.025*Math.abs(Math.sin(y*4)));const E=e.player?this.actorHands.get(e.player):void 0;!g&&y>=.65&&E&&f.position.distanceTo(E)<=2.2&&(g={from:f.position.clone(),hand:E.clone(),age:y});let w=1-x;if(g){E&&E.distanceTo(g.hand)<1&&g.hand.copy(E);const I=Math.min(1,(y-g.age)/.38);f.position.copy(g.from).lerp(g.hand,I*I*(3-2*I)),w=Math.min(w,1-I)}f.rotation.y=y*2.4,f.scale.setScalar(.32*w)})}}else if(e.kind==="place"){if(e.player){const u=this.blockItem(e.blockState,e.block,.32);this.effect(u,.42,f=>{u.position.copy(h).lerp(l,f),u.position.y+=Math.sin(f*Math.PI)*.25,u.rotation.y=f,u.scale.setScalar(.32*(1-f*.6))})}this.cornerCue(l,d,1.1)}else if(/interact|container_|item_use/.test(e.kind)){const u=/furnace|smoker/.test(e.block),f=e.kind==="container_take";if(this.cornerCue(l,u?14788703:13810308,1.1),e.player&&/container_(?:put|take)/.test(e.kind))for(let g=0;g<3;g++){const _=this.cube(14670530,.12);this.effect(_,.95+g*.12,m=>{const p=Math.max(0,Math.min(1,(m-g*.06)/.82));_.position.copy(f?l:h).lerp(f?h:l,p),_.position.y+=Math.sin(p*Math.PI)*.38+.15,_.rotation.y=p*Math.PI,_.scale.setScalar(.18*Math.min(1,p*8+.2,(1-p)*8+.2))})}if(u&&/lit_furnace|lit_smoker|lit_blast_furnace/.test(e.block))for(let g=0;g<4;g++){const _=this.cube(g%2?14134116:11448483,.055);this.effect(_,1+g*.1,m=>{_.position.copy(l).add(new C(Math.sin(g*2)*.18,.6+m*.65,Math.cos(g*2)*.18)),_.scale.setScalar(.055*(1-m))})}if(e.block==="minecraft:ender_chest"&&e.kind!=="container_close")for(let g=0;g<5;g++){const _=this.cube(g%2?10768832:13470428,.035);this.effect(_,1.2+g*.1,m=>{_.position.copy(l).add(new C(Math.sin(g*2.4+m)*(.4+m*.2),.25+m*.65,Math.cos(g*2.4+m)*(.4+m*.2))),_.scale.setScalar(.035*(1-m))})}}else if(/leaf_decay|plant_decay|crop_grow|crop_growth|stack_growth|soil_preparation|soil_reversion|fire_spread|fire_extinguish/.test(e.kind)){const u=/leaf_decay|plant_decay/.test(e.kind),f=e.kind==="fire_spread",g=/crop_grow|crop_growth|stack_growth/.test(e.kind),_=/soil_preparation|soil_reversion/.test(e.kind);for(let m=0;m<(g?2:6);m++){const p=this.chip(e.blockState,_?8938050:u||g?7706195:f&&m%2?15642977:9606284,g?.035:u?.07:.09);this.effect(p,1.2+m*.08,(v,y)=>{p.position.copy(l).add(new C(Math.sin(m*2.4+y)*(.18+v*.22),_?-.2+v*.2:u?.2-v*.85:v*(g?.25:.9),Math.cos(m*2.4+y)*.24)),p.rotation.set(y,y*.8,m),p.scale.setScalar((g?.035:u?.07:.09)*(1-v))})}}else/teleport|death|join/.test(e.kind)&&this.cornerCue(h.clone().add(new C(0,-.7,0)),12173262,1)}cornerCue(e,t,n){for(let i=0;i<4;i++){const r=this.cube(t,.06),o=i&1?.49:-.49,a=i&2?.49:-.49;this.effect(r,n,c=>{r.position.copy(e).add(new C(o,.48+c*.14,a)),r.scale.set(.065,.13*(1-c),.065)})}}tool(e){const t=new Ze;if(t.name=`held-${e}`,e==="hand")return t;const n=(r,o,a)=>{const c=this.cube(a,.078);c.position.set(r*.07,o*.07,0),c.scale.z=.055,t.add(c)};for(let r=0;r<7;r++)n(r-3,r-3,r%2?9528891:6834215);const i=e.startsWith("diamond")?6803654:e.startsWith("iron")?13882309:e.startsWith("wooden")?11831890:9606795;if(e.includes("pickaxe"))for(const[r,o]of[[-1,5],[0,5],[1,5],[2,5],[3,4],[4,3],[5,2],[5,1],[5,0]])n(r,o,i);else if(e.includes("shovel"))for(const[r,o]of[[2,4],[3,4],[4,4],[3,5],[4,5],[4,3]])n(r,o,i);else if(e==="shears")for(const[r,o]of[[-2,3],[-1,4],[0,5],[3,2],[4,1],[5,0]])n(r,o,13882309);else for(const[r,o]of[[0,4],[1,5],[2,5],[3,5],[0,3],[1,3],[2,4]])n(r,o,i);return t.position.set(0,-.52,.05),t.rotation.set(.1,Math.PI/4,-2.1),t}animateAvatar(e,t,n,i=!1,r=!1){if(this.disposed)return;let o=this.actorHands.get(e);o||(o=new C,this.actorHands.set(e,o)),o.copy(t.position),o.y+=1.05;const a=this.actions.get(e),c=this.clock*9,l=n||r?Math.sin(c*(r?.45:1))*(i?.65:r?.28:.5):0,h=a?Math.hypot(a.target.x+.5-t.position.x,a.target.y+.5-t.position.y-1.3,a.target.z+.5-t.position.z):1/0,d=!!a&&(a.current||a.age<a.duration)&&!(n&&h>3.3),u=t.getObjectByName("arm1"),f=t.getObjectByName("arm-1"),g=t.getObjectByName("leg-1"),_=t.getObjectByName("leg1");if(!u||!f||!g||!_)return;const m=d&&/^(break|mine_prepare)$/.test(a.kind),p=d?Math.atan2(a.target.y+.5-t.position.y-1.3,Math.max(.6,Math.hypot(a.target.x+.5-t.position.x,a.target.z+.5-t.position.z))):0;f.rotation.x=i?-2+l:r?-.8+l:l,u.rotation.x=d?-1.2-p+Math.sin(Math.min(a.age,a.duration)*(m?17:9))*(m?.65:.16):i?-2-l:r?-.8-l:-l,f.rotation.z=r?-.55:0,u.rotation.z=r?.55:0,g.rotation.x=-l,_.rotation.x=l;const v=d?m?a.tool:a.kind==="place"?`block:${a.blockState?ji(a.blockState):a.block}`:"hand":"hand",y=this.held.get(e);if(y?.key!==v){y&&y.object.removeFromParent();const S=v.startsWith("block:")?new Ze:this.tool(v);if(v.startsWith("block:")){const T=this.blockItem(a.blockState,a.block,.29);S.position.set(0,-.48,.05),S.add(T)}u.add(S),this.held.set(e,{key:v,object:S})}const x=t.getObjectByName("head");if(x){const S=this.headClocks.get(x),T=d?-p*.6:0;x.rotation.x=S===void 0||this.clock<S?T:w_(x.rotation.x,T,this.clock-S),this.headClocks.set(x,this.clock)}}forgetPlayer(e){this.held.get(e)?.object.removeFromParent(),this.held.delete(e),this.actorHands.delete(e)}targetFor(e){return this.actions.get(e)?.target}actionKindFor(e){return this.actionLabels.get(e)?.kind}update(e){if(this.disposed||!this.playing)return!1;this.clock+=e;const t=this.effects.length>0||this.actions.size>0;for(const[n,i]of this.actionLabels)i.until<=this.clock&&this.actionLabels.delete(n);for(const[n,i]of this.actions)i.age+=e,i.age>i.duration&&!i.current&&(this.actions.delete(n),this.clearMiningPreview(n));for(let n=this.effects.length-1;n>=0;n--){const i=this.effects[n];i.age+=e,i.age>=i.duration?(this.group.remove(i.object),this.effects.splice(n,1)):i.update(i.age/i.duration,i.age)}return t}reset(){this.group.clear(),this.effects.length=0,this.actions.clear(),this.accepted.clear(),this.actionLabels.clear(),this.miningPreviews.clear(),this.miningTiers.clear(),this.recentActions.length=0;for(const e of this.held.keys())this.forgetPlayer(e);this.actorHands.clear(),this.headClocks=new WeakMap,this.clock=0}diagnostics(){const e=({player:n,kind:i,block:r,blockState:o,blockStates:a,target:c,time:l})=>({player:n,kind:i,block:r,blockState:o,blockStates:o?.states||a,target:c,time:l});return{drops:this.effects.filter(n=>n.object.name==="memory-drop").map(({object:n,age:i})=>({...n.userData.memoryDrop,age:i,x:n.position.x,y:n.position.y,z:n.position.z,scale:n.scale.x})),effects:this.effects.length,actions:this.actions.size,heldPlayers:this.held.size,rememberedTools:this.miningTiers.size,cachedItems:this.itemGeometries.size,cachedMaterials:this.materials.size+this.itemMaterials.size,emitted:this.emitted,presentationTime:this.clock,sourceTime:this.sourceTime,sourceSpeed:this.sourceSpeed,kinds:[...this.actions.values()].map(n=>n.kind),recent:this.recentActions.map(e),active:[...this.actions.values()].map(n=>({...e(n),age:n.age})),tools:[...this.held].filter(([,n])=>n.key!=="hand").map(([n,i])=>({player:n,tool:i.key}))}}dispose(){if(!this.disposed){this.disposed=!0,this.playing=!1,this.reset(),this.group.removeFromParent(),this.box.dispose(),this.plane.dispose();for(const e of this.itemGeometries.values())e.dispose();for(const e of[...this.materials.values(),...this.itemMaterials.values()])e.dispose();this.itemGeometries.clear(),this.materials.clear(),this.itemMaterials.clear(),this.blockMaterials.clear(),this.accepted.clear(),this.texture=void 0,this.atlas=void 0}}}const Tt=4,zr=new WeakMap,ch=(s,e,t)=>`${s},${e},${t}`;function C_(s){const e=zr.get(s);if(e?.geometry===s.geometry)return e;e&&Xa(s);const t=new Map,n=s.geometry,i=n.getAttribute("position"),r=n.getIndex();if(!r)return{source:s,geometry:n,buckets:t};for(let a=0;a<r.count;a+=3){const c=r.getX(a),l=r.getX(a+1),h=r.getX(a+2),d=Math.floor(Math.min(i.getX(c),i.getX(l),i.getX(h))/Tt),u=Math.floor(Math.min(i.getY(c),i.getY(l),i.getY(h))/Tt),f=Math.floor(Math.min(i.getZ(c),i.getZ(l),i.getZ(h))/Tt),g=Math.floor(Math.max(i.getX(c),i.getX(l),i.getX(h))/Tt),_=Math.floor(Math.max(i.getY(c),i.getY(l),i.getY(h))/Tt),m=Math.floor(Math.max(i.getZ(c),i.getZ(l),i.getZ(h))/Tt);for(let p=d;p<=g;p++)for(let v=u;v<=_;v++)for(let y=f;y<=m;y++){const x=ch(p,v,y);let S=t.get(x);S||(S={indices:[]},t.set(x,S)),S.indices.push(c,l,h)}}const o={source:s,geometry:n,buckets:t};return zr.set(s,o),o}function _l(s,e,t,n){return fi(s,new Ot(new C(e-.85,t-6.1,n-.85),new C(e+.85,t+3.2,n+.85)))}function fi(s,e){const t=[];for(const n of s)n.traverse(i=>{if(!(i instanceof Pe)||!i.visible)return;const r=i,o=r.geometry;if(o.boundingBox||o.computeBoundingBox(),!o.boundingBox.clone().applyMatrix4(r.matrixWorld).intersectsBox(e))return;if(!o.getIndex()||Array.isArray(r.material)){t.push(r);return}const c=C_(r),l=e.clone().applyMatrix4(r.matrixWorld.clone().invert());for(let h=Math.floor(l.min.x/Tt);h<=Math.floor(l.max.x/Tt);h++)for(let d=Math.floor(l.min.y/Tt);d<=Math.floor(l.max.y/Tt);d++)for(let u=Math.floor(l.min.z/Tt);u<=Math.floor(l.max.z/Tt);u++){const f=c.buckets.get(ch(h,d,u));if(f){if(!f.mesh){const g=new kt;for(const[_,m]of Object.entries(o.attributes))g.setAttribute(_,m);g.setIndex(f.indices),f.indices=[],g.boundingBox=new Ot(new C(h*Tt,d*Tt,u*Tt),new C((h+1)*Tt,(d+1)*Tt,(u+1)*Tt)),g.boundingSphere=g.boundingBox.getBoundingSphere(new wi),f.mesh=new Pe(g,r.material),f.mesh.matrixAutoUpdate=!1}f.mesh.matrixWorld.copy(r.matrixWorld),t.push(f.mesh)}}});return t}function Xa(s){const e=zr.get(s);if(e){for(const t of e.buckets.values())t.mesh?.geometry.dispose();zr.delete(s)}}const Ht=s=>`${Math.floor(s.x)},${Math.floor(s.y)},${Math.floor(s.z)}`,P_=s=>({time:s.time,order:s.order??0}),wr=(s,e)=>s.time<e.time||s.time===e.time&&s.order<e.order,Ts=s=>s.replace(/^minecraft:/,""),Ki=s=>JSON.stringify([s.kind,s.block.name,Object.entries(s.block.states||{}).sort(([e],[t])=>e.localeCompare(t))]);function D_(s){if(s=Ts(s),/^(?:trapped_|ender_)?chest$/.test(s))return"chest";if(s==="barrel")return"barrel";if(/^(?:[a-z_]+_)?shulker_box$/.test(s))return"shulker"}function Ss(s){if(!s.pair)return Ht(s.position);const e=s.position,t=s.pair;return Ht(e.x<t.x||e.x===t.x&&(e.y<t.y||e.y===t.y&&e.z<=t.z)?e:t)}class I_{group=new Ze;chunks=new Map;instances=new Map;sessions=new Map;addresses=new Map;accepted=new Map;playerAccepted=new Map;texture;atlas;material;clock=0;sourceTime=NaN;sourceSpeed=1;playing=!1;disposed=!1;constructor(){this.group.name="memory-container-effects"}configure(e,t,n=0){if(!this.disposed){this.texture=e,this.atlas=t,this.material?.dispose(),this.material=new xt({map:e,alphaTest:.45,vertexColors:!0}),ei(this.material,e,n);for(const[i,r]of[...this.chunks])this.setChunk(i,r.models,r.host)}}geometry(e,t,n){const i=this.atlas?.atlas;if(!i)return;const r=[],o=[],a=[],c=[],l=[];for(const d of e){const u=r.length/3,f=d.tile%i.columns*i.stride+i.padding,g=Math.floor(d.tile/i.columns)*i.stride+i.padding,_=d.material||t,m=d.normal[1]>0&&_.topTint||_.tint;for(let p=0;p<4;p++){const[v,y,x]=d.points[p],[S,T]=d.coordinates[p];r.push(v-n.x,y-n.y,x-n.z),o.push(...d.normal),c.push(...m||[1,1,1]),a.push((f+.05+S*(i.tileSize-.1))/i.width,1-(g+.05+(1-T)*(i.tileSize-.1))/i.height)}l.push(u,u+1,u+2,u,u+2,u+3)}const h=new kt;return h.setAttribute("position",new je(r,3)),h.setAttribute("normal",new je(o,3)),h.setAttribute("uv",new je(a,2)),h.setAttribute("color",new je(c,3)),h.setIndex(l),h.computeBoundingSphere(),h}setChunk(e,t,n){if(this.disposed)return;const i=this.chunks.get(e),r=new Map(t.map(c=>[Ht(c.position),c]));if(i){for(const c of i.models){const l=r.get(Ht(c.position));(!l||Ki(c)!==Ki(l))&&this.forgetPosition(Ht(c.position))}this.disposeChunk(i)}const o=new Ze;o.name=`memory-container-chunk-${e}`;const a={models:t,group:o,instances:[],host:n};this.chunks.set(e,a),(n||this.group).add(o);for(const c of t){if(!this.material)continue;const l=new C(...c.pivot),h=this.geometry(c.body,c.material,new C),d=this.geometry(c.lid,c.material,l);if(!h||!d){h?.dispose(),d?.dispose();continue}const u=new Ze;u.name=`memory-container-${Ht(c.position)}`,u.position.set(c.position.x,c.position.y,c.position.z),n&&u.position.sub(n.position);const f=new Pe(h,this.material),g=new Pe(d,this.material);f.name="memory-container-body",g.name="memory-container-lid",g.position.copy(l),f.userData.memoryContainerPosition=c.position,g.userData.memoryContainerPosition=c.position,u.add(f,g),o.add(u);const _={model:c,object:u,lid:g,axis:new C(...c.axis).normalize(),base:l,openness:0};a.instances.push(_),this.instances.set(Ht(c.position),_)}for(const c of this.instances.values())this.adoptSession(c.model);for(const c of this.instances.values())this.apply(c,this.openness(c.model));this.prune()}disposeChunk(e){e.group.removeFromParent();for(const t of e.instances){this.instances.get(Ht(t.model.position))===t&&this.instances.delete(Ht(t.model.position));for(const n of t.object.children)n instanceof Pe&&(Xa(n),n.geometry.dispose())}}removeChunk(e){const t=this.chunks.get(e);t&&(this.disposeChunk(t),this.chunks.delete(e),this.prune())}detachChunk(e){this.chunks.get(e)?.group.removeFromParent()}deleteSession(e){const t=this.sessions.get(e);if(t){for(const n of t.members)this.addresses.get(n)===e&&this.addresses.delete(n);this.sessions.delete(e)}}sessionFor(e){return this.sessions.get(this.addresses.get(Ht(e.position))||Ss(e))}forgetPosition(e){for(const[t,n]of this.sessions)if(n.members.has(e)){this.deleteSession(t),this.accepted.delete(t);for(const i of n.members)this.accepted.delete(i);for(const i of this.instances.values())n.members.has(Ht(i.model.position))&&this.apply(i,0)}this.accepted.delete(e)}adoptSession(e){const t=Ht(e.position),n=e.pair&&Ht(e.pair),i=this.sessionFor(e),r=!n&&i&&this.instances.has(i.key)?i.key:Ss(e),o=[...new Set([r,t,...n?[n]:[],...i?[i.key]:[],...n&&this.addresses.has(n)?[this.addresses.get(n)]:[]])];let a=this.sessions.get(r);for(const l of o){const h=this.sessions.get(l);if(h){if(h.kind!==e.kind||Ts(h.block)!==Ts(e.block.name)||h.identities.has(t)&&h.identities.get(t)!==Ki(e)){this.deleteSession(l),a===h&&(a=void 0);continue}if(!a||a===h)a=h,this.deleteSession(l),a.key=r,a.position=e.position,this.sessions.set(r,a);else{for(const[d,u]of h.owners){const f=a.owners.get(d);(!f||!wr(u,f))&&a.owners.set(d,u)}a.openness=Math.max(a.openness,h.openness);for(const d of h.members)a.members.add(d);for(const[d,u]of h.identities)a.identities.set(d,u);this.deleteSession(l)}}}if(a){a.members.add(t),a.identities.set(t,Ki(e)),n&&a.members.add(n);for(const l of a.members)this.addresses.set(l,r)}const c=o.map(l=>this.accepted.get(l)).filter(l=>!!l).reduce((l,h)=>!l||wr(l,h)?h:l,void 0);c&&this.accepted.set(r,c)}setReplayClock(e,t=1){this.sourceTime=e,this.sourceSpeed=Number.isFinite(t)&&t>0?t:1}setPlaying(e){this.playing=e}baseline(e){if(this.accepted.has(Ss(e))||e.kind!=="barrel")return 0;const t=e.block.states?.open_bit??e.block.states?.open;return t===!0||t===1||t==="true"?1:0}openness(e){return this.sessionFor(e)?.openness??this.baseline(e)}show(e){if(this.disposed||!Number.isFinite(e.time)||e.recorded===!1||e.kind==="mine_prepare"||e.kind==="fluid_change")return;const t=P_(e),n=e.player,i=this.playerAccepted.get(n);if(n&&i&&wr(t,i))return;const r=Ht(e.target),o=this.instances.get(r)?.model,a=o?this.sessionFor(o)?.key||Ss(o):this.addresses.get(r)||r,c=o?.kind||D_(e.block),l=/^container_(?:open|close|put|take)$/.test(e.kind)||e.kind==="interact"&&!!c,h=this.accepted.get(a);if(l&&c&&h&&wr(t,h))return;if(n){for(this.playerAccepted.delete(n),this.playerAccepted.set(n,t);this.playerAccepted.size>256;)this.playerAccepted.delete(this.playerAccepted.keys().next().value);for(const f of this.sessions.values())(f.key!==a||/^(?:quit|death|teleport|portal|respawn)$/.test(e.kind))&&f.owners.delete(n)}if(!l||!c||o&&e.block&&Ts(e.block)!==Ts(o.block.name))return;for(this.accepted.delete(a),this.accepted.set(a,t);this.accepted.size>256;)this.accepted.delete(this.accepted.keys().next().value);let d=this.sessions.get(a);if(!d){if(e.kind==="container_close")return;d={key:a,position:o?.position||{x:Math.floor(e.target.x),y:Math.floor(e.target.y),z:Math.floor(e.target.z)},kind:c,block:o?.block.name||e.block,owners:new Map,members:new Set([r]),identities:new Map,openness:this.instances.get(r)?.openness||0},o&&d.identities.set(r,Ki(o)),o?.pair&&d.members.add(Ht(o.pair)),this.sessions.set(a,d);for(const f of d.members){this.addresses.set(f,a);const g=this.instances.get(f)?.model;g&&d.identities.set(f,Ki(g))}}const u=n||"";if(e.kind==="container_close")d.owners.delete(u);else{const f=d.owners.get(u),g=e.kind==="container_open"||!!f?.explicit;for(d.owners.set(u,{...t,explicit:g,until:e.time+(g?30:2.5),presented:f?.presented??this.clock,sourceStart:e.time});d.owners.size>64;)d.owners.delete(d.owners.keys().next().value)}this.prune()}restore(e){this.show(e),this.expire(!0);for(const t of this.sessions.values())t.openness=t.owners.size?1:0;for(const t of this.instances.values())this.apply(t,this.openness(t.model))}expire(e=!1){for(const t of this.sessions.values())for(const[n,i]of t.owners)(Number.isFinite(this.sourceTime)?this.sourceTime:i.sourceStart+(this.clock-i.presented)*this.sourceSpeed)>=i.until&&(e||this.clock-i.presented>=.8)&&t.owners.delete(n)}apply(e,t){e.openness=t;const n=1-Math.pow(1-t,3);e.lid.position.copy(e.base),e.lid.quaternion.identity(),e.lid.visible=!0,e.model.kind==="chest"?e.lid.quaternion.setFromAxisAngle(e.axis,Math.PI/2*n):e.model.kind==="shulker"?(e.lid.position.addScaledVector(e.axis,.5*n),e.lid.quaternion.setFromAxisAngle(e.axis,Math.PI/2*n)):e.lid.visible=t<.01}update(e){if(this.disposed||!this.playing||!Number.isFinite(e)||e<=0)return!1;const t=Math.min(e,1);this.clock+=t,this.expire();for(const i of this.sessions.values()){const r=i.owners.size?1:0;i.openness+=Math.sign(r-i.openness)*Math.min(Math.abs(r-i.openness),t*5)}let n=!1;for(const i of this.instances.values()){const r=this.openness(i.model);r!==i.openness&&(this.apply(i,r),n=!0)}return this.prune(),n}prune(){const e=[];for(const[t,n]of this.sessions){const i=[...n.members].some(r=>this.instances.has(r));!n.owners.size&&n.openness===0?this.deleteSession(t):i||e.push(t)}for(const t of e.slice(0,Math.max(0,e.length-128)))this.deleteSession(t)}reset(){this.sessions.clear(),this.addresses.clear(),this.accepted.clear(),this.playerAccepted.clear(),this.clock=0,this.sourceTime=NaN;for(const e of this.instances.values())this.apply(e,this.baseline(e.model))}diagnostics(){const e=[...this.instances.values()].map(t=>{const n=this.sessionFor(t.model);return{key:n?.key||Ss(t.model),position:{...t.model.position},kind:t.model.kind,block:t.model.block.name,targetOpen:n?!!n.owners.size:!!this.baseline(t.model),openness:t.openness,owners:[...n?.owners.keys()||[]],paired:!!t.model.pair}});return{containers:e.length,open:e.filter(t=>t.openness>0).length,owners:[...this.sessions.values()].reduce((t,n)=>t+n.owners.size,0),pending:[...this.sessions.values()].filter(t=>![...t.members].some(n=>this.instances.has(n))).length,active:e}}dispose(){if(!this.disposed){this.reset(),this.disposed=!0;for(const e of this.chunks.values())this.disposeChunk(e);this.chunks.clear(),this.material?.dispose(),this.material=void 0,this.texture=void 0,this.atlas=void 0,this.group.removeFromParent()}}}function L_(s,e,t){const n=Math.atan2(Math.sin(e-s),Math.cos(e-s));return s+Math.max(-8*t,Math.min(8*t,n))}function U_(s,e,t){return!!s?.online&&s.actionTime===e&&!!s.actionTarget&&s.actionTarget.x===t.x&&s.actionTarget.y===t.y&&s.actionTarget.z===t.z&&Math.hypot(s.x-t.x-.5,s.z-t.z-.5)<=6&&Math.abs(s.y-t.y)<=8}function N_(s){const e=s;if(e?.version!==1||!Array.isArray(e.generators)||e.generators.length>4096)return[];const t=new Map;for(const n of e.generators){if(!Array.isArray(n)||n.length!==7||n[0]!==0||!n.every(Number.isSafeInteger))return[];if(n.slice(1).some(i=>Math.abs(i)>3e7)||Math.hypot(n[1]-n[4],n[2]-n[5],n[3]-n[6])>16)return[];t.set(n.slice(0,4).join(","),n)}return[...t.values()]}class F_{group=new Ze;geometry;material;block;drop;chips;active;elapsed=0;disposed=!1;constructor(e,t,n=0){const i={name:"minecraft:cobblestone",states:{}},r=t.materials[i.name]||t.materials.cobblestone||{top:0,side:0,bottom:0};this.geometry=kr(i,r,t)||new on(1,1,1).translate(0,.5,0),this.geometry.translate(0,-.5,0),this.material=new xt({map:e}),ei(this.material,e,n),this.block=new Pe(this.geometry,this.material),this.block.scale.setScalar(.985),this.drop=new Pe(this.geometry,this.material),this.drop.scale.setScalar(.24),this.chips=Array.from({length:8},()=>{const o=new Pe(this.geometry,this.material);return o.scale.setScalar(.085),o}),this.group.name="island-generator-preview",this.group.add(this.block,this.drop,...this.chips),this.group.visible=!1}start(e){this.disposed||(this.active=e,this.elapsed=0,this.group.visible=!0,this.update(0))}stop(){const e=this.group.visible;return this.active=void 0,this.group.visible=!1,this.elapsed=0,e}get running(){return!!this.active}update(e){if(!this.active||this.disposed)return!1;if(this.elapsed+=Number.isFinite(e)?Math.max(0,e):0,this.elapsed>=6)return this.stop(),!0;const[,t,n,i,r,o,a]=this.active,c=this.elapsed%2;this.block.position.set(t+.5,n+.5,i+.5),this.block.visible=c<.65,this.drop.visible=c>=.65&&c<1.7;const l=Math.min(1,Math.max(0,(c-.65)/1.05)),h=Math.min(t,r)-.65,d=Math.min(1,l/.25),u=Math.max(0,Math.min(1,(l-.25)/.5)),f=Math.max(0,(l-.75)/.25);this.drop.position.set(t+.5+(h-t-.5)*d+(r+.5-h)*f,n+.5+(o-n)*u+Math.sin(l*Math.PI)*.3,i+.5+(a-i)*u),this.drop.rotation.set(.15,this.elapsed*2.4,.1);for(let g=0;g<this.chips.length;g++){const _=this.chips[g],m=c-.65,p=g*2.4;_.visible=m>=0&&m<.55,_.position.set(t+.5+Math.sin(p)*m*.8,n+.5+m*1.5-m*m*3,i+.5+Math.cos(p)*m*.8),_.rotation.set(m*3,p,m*2)}return!0}diagnostics(){return{running:this.running,elapsed:this.elapsed,objects:this.group.children.length,source:this.active?.slice(1,4),output:this.active?.slice(4)}}dispose(){this.disposed||(this.stop(),this.disposed=!0,this.group.removeFromParent(),this.geometry.dispose(),this.material.dispose())}}function O_(s,e,t){if(t!=="overworld")return;let n,i=14;for(const r of s){const o=Math.hypot(e.x-r[1]-.5,(e.y-r[2]-.5)*.5,e.z-r[3]-.5);o<i&&(n=r,i=o)}return n}const Io=s=>Array.isArray(s)&&s.length===3&&s.every(Number.isSafeInteger)&&Math.abs(s[0])<=3e7&&Math.abs(s[2])<=3e7&&s[1]>=-2048&&s[1]<=2048;function k_(s){if(!s||typeof s!="object")throw new Error("海岛设施暂时无法载入");const e=s;if(e.version!==1||!Array.isArray(e.machines)||e.machines.length>1e4)throw new Error("海岛设施数据无效");const t=new Set;for(const n of e.machines){if(!n||!["overworld","nether","end"].includes(n.dimension)||!Io(n.source)||!Io(n.output)||!Io(n.power)||!Number.isFinite(n.period)||n.period<.5||n.period>60||typeof n.active!="boolean"||Math.hypot(...n.output.map((r,o)=>r-n.source[o]))>16||Math.hypot(...n.power.map((r,o)=>r-n.source[o]))>20)throw new Error("海岛设施数据无效");const i=Br(n);if(t.has(i))throw new Error("海岛设施数据重复");t.add(i)}return e.machines}const Br=s=>`${s.dimension}:${s.source.join(",")}`,z_=(s,e)=>s==="minecraft:redstone_block"&&/^minecraft:(?:trapped_chest|chest|hopper|barrel)$/.test(e);class B_{regions=new Map;constructor(e){for(const t of e){const n=`${t.dimension}:${Math.floor(t.source[0]/64)},${Math.floor(t.source[2]/64)}`,i=this.regions.get(n)||[];i.push(t),this.regions.set(n,i)}}near(e,t,n=48){const i=[];for(let r=Math.floor((t.x-n)/64);r<=Math.floor((t.x+n)/64);r++)for(let o=Math.floor((t.z-n)/64);o<=Math.floor((t.z+n)/64);o++)for(const a of this.regions.get(`${e}:${r},${o}`)||[])Math.hypot(a.source[0]-t.x,a.source[2]-t.z)<=n&&i.push(a);return i.sort((r,o)=>Math.hypot(r.source[0]-t.x,r.source[2]-t.z)-Math.hypot(o.source[0]-t.x,o.source[2]-t.z)).slice(0,8)}}class G_{group=new Ze;geometry=new on(1,1,1);stone=new xt({color:9014404});steam=new xt({color:14213078,transparent:!0,opacity:.65,depthWrite:!1});active=new Map;clock=0;disposed=!1;constructor(){this.group.name="island-machines"}setMachines(e){const t=new Set(e.map(Br));let n=!1;for(const[i,r]of this.active)t.has(i)||(r.group.removeFromParent(),this.active.delete(i),n=!0);for(const i of e.slice(0,8)){const r=Br(i);if(this.active.has(r))continue;const o=new Ze,a=[];o.name="cobblestone-generator";for(let c=0;c<8;c++){const l=new Pe(this.geometry,c<5?this.steam:this.stone);o.add(l),a.push(l)}this.active.set(r,{machine:i,group:o,parts:a}),this.group.add(o),n=!0}return n&&this.animate(),n}animate(){for(const{machine:e,parts:t}of this.active.values()){const[n,i,r]=e.source,[o,a,c]=e.output;for(let l=0;l<t.length;l++){const h=((this.clock/e.period+l/t.length)%1+1)%1,d=t[l];l<5?(d.position.set(n+.5+Math.sin(l*2.4+h)*.2,i+.6+h*.55,r+.5+Math.cos(l*2.4+h)*.2),d.scale.setScalar(.055*(1-h)),d.rotation.set(h,h*2,l)):(d.position.set(n+.5+(o-n)*h,i+.65+(a-i)*h+Math.sin(h*Math.PI)*.35,r+.5+(c-r)*h),d.scale.setScalar(.12*Math.sin(h*Math.PI)),d.rotation.set(h*3,l+h*4,h))}}}update(e){return this.disposed||!this.active.size?!1:(this.clock+=e,this.animate(),!0)}clear(){this.active.clear(),this.group.clear(),this.clock=0}diagnostics(){return{active:this.active.size,parts:this.active.size*8,clock:this.clock,sources:[...this.active.values()].map(({machine:e})=>e.source)}}dispose(){this.disposed||(this.disposed=!0,this.clear(),this.geometry.dispose(),this.stone.dispose(),this.steam.dispose(),this.group.removeFromParent())}}function lh(s,e,t,n,i,r,o){const a=(g,_,m)=>(n.set(g,_),n.near=0,n.far=m,n.intersectObjects(t,!0)),c=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1)],l=g=>{const _=g.uv,m=r?.atlas;return _&&m?Math.floor(_.x*m.width/m.stride)+Math.floor((1-_.y)*m.height/m.stride)*m.columns:-1},h=g=>g.object instanceof Pe&&g.object.visible&&!i.has(l(g)),d=g=>h(g)&&!o.has(l(g)),u=[new C(1,0,0),new C(0,0,1),new C(Math.SQRT1_2,0,Math.SQRT1_2),new C(Math.SQRT1_2,0,-Math.SQRT1_2)];return{cast:a,directions:c,tileAt:l,obstacle:h,solid:d,clearBody:g=>!a(new C(s,g+.07,e),new C(0,1,0),1.74).some(d)&&!a(new C(s,g+1.81,e),new C(0,-1,0),1.74).some(d)&&![.3,.9,1.65].some(_=>u.some((m,p)=>{const v=p<2?.29:.4,y=new C(s,g+_,e);return a(y.clone().addScaledVector(m,-v),m,v*2).some(d)||a(y.addScaledVector(m,v),m.clone().negate(),v*2).some(d)}))}}function H_(s,e,t,n,i,r=new Set,o,a=new Set,c=!1){const{cast:l,directions:h,tileAt:d,obstacle:u,solid:f,clearBody:g}=lh(s,t,n,i,r,o,a);if(c&&g(e))return{x:s,y:e,z:t,swimming:!0};const _=a.size>0&&h.some(x=>{const S=l(new C(s,e+.85,t),x,.78).find(u);return S&&a.has(d(S))}),m=new C,p=new Ie,v=l(new C(s,e+1.35,t),new C(0,-1,0),7.35).filter(x=>x.face&&f(x)&&m.copy(x.face.normal).applyNormalMatrix(p.getNormalMatrix(x.object.matrixWorld)).y>.5).sort((x,S)=>S.point.y-x.point.y);let y=null;for(const x of v){const S=x.point.y+.015;if(!(S-e>1.36||e-S>6.05)&&g(S)){y={x:s,y:S,z:t,..._?{climbing:!0}:{}};break}}return _&&(!y||e-y.y>.45)&&g(e)&&(y={x:s,y:e,z:t,climbing:!0}),y}function hh(s,e){const t=new Map;for(const n of s)n.traverse(i=>{if(!(!(i instanceof Pe)||!i.visible))for(const r of Array.isArray(i.material)?i.material:[i.material])t.has(r)||(t.set(r,r.side),r.side=It)});try{return e()}finally{for(const[n,i]of t)n.side=i}}function V_(...s){return hh(s[3],()=>H_(...s))}function W_(s,e,t,n,i,r=new Set,o,a=new Set){return hh(n,()=>lh(s,t,n,i,r,o,a).clearBody(e))}function X_(s,e,t,n,i,r){t.set(new C(s.x+.62,s.y+.001,s.z+.62),new C(0,-1,0)),t.near=0,t.far=32;const o=r?.atlas,a=new C,c=new Ie;for(const l of t.intersectObjects(e,!1)){if(!(l.object instanceof Pe)||!l.object.visible||!l.face||a.copy(l.face.normal).applyNormalMatrix(c.getNormalMatrix(l.object.matrixWorld)).y<=.5)continue;const h=l.uv,d=h&&o?Math.floor(h.x*o.width/o.stride)+Math.floor((1-h.y)*o.height/o.stride)*o.columns:-1;if(!n.has(d)&&!i.has(d))return l.point.y}}const vl=new WeakMap,Lo=new DataView(new ArrayBuffer(8)),uh=()=>({triangles:0,a:0,b:0,c:0,d:0}),qn=(s,e)=>Math.imul(s^e,16777619)>>>0,yl=s=>(s=Math.imul(s^s>>>16,2246822507),s=Math.imul(s^s>>>13,3266489909),(s^s>>>16)>>>0),xl=(s,e)=>(Lo.setFloat64(0,e===0?0:e,!0),qn(qn(s,Lo.getUint32(0,!0)),Lo.getUint32(4,!0))),Uo=(s,e)=>s.length===e.length&&s.every((t,n)=>Object.is(t,e[n])),q_=(s,e)=>{s.triangles+=e.triangles,s.a=s.a+e.a>>>0,s.b=s.b+e.b>>>0,s.c=s.c+e.c>>>0,s.d=s.d+e.d>>>0};function Y_(s){const e=s.geometry,t=e.getAttribute("position"),n=e.getAttribute("uv"),i=e.index||void 0,r=[t,n,i],o=r.map(m=>m?.array),a=[...s.matrixWorld.elements,s.layers.mask];for(const m of r){const p=m instanceof hs?m.data.version:m?.version;a.push(p??-1,m?.count??0,m?.itemSize??0,Number(m?.normalized)),m instanceof hs&&a.push(m.offset,m.data.stride)}const c=i?.count??t?.count??0,l=e.drawRange,h=[];if(Array.isArray(s.material))for(const m of e.groups){const p=s.material[m.materialIndex??0];p&&h.push({start:Math.max(m.start,l.start),end:Math.min(c,m.start+m.count,l.start+l.count),side:p.side})}else s.material&&h.push({start:Math.max(0,l.start),end:Math.min(c,l.start+l.count),side:s.material.side});for(const m of h)a.push(m.start,m.end,m.side);const d=vl.get(s);if(d?.geometry===e&&Uo(d.attributes,r)&&Uo(d.arrays,o)&&Uo(d.state,a))return d.digest;const u=uh(),f=new C,g=[new Array(5),new Array(5),new Array(5)],_=s.matrixWorld.determinant()<0;if(t)for(const m of h){const p=_&&m.side!==It?m.side===Mn?Vt:Mn:m.side;for(let v=m.start;v<m.end&&v+2<c;v+=3){for(let T=0;T<3;T++){const R=i?i.getX(v+T):v+T,D=g[T];f.fromBufferAttribute(t,R).applyMatrix4(s.matrixWorld),D[0]=f.x,D[1]=f.y,D[2]=f.z,D[3]=n?.getX(R)??0,D[4]=n?.getY(R)??0}let y=0;for(let T=1;T<3;T++){let R=0;for(let D=0;D<15&&!R;D++)R=g[(T+Math.floor(D/5))%3][D%5]-g[(y+Math.floor(D/5))%3][D%5];R<0&&(y=T)}let x=qn(qn(qn(2166136261,p),+!!n),s.layers.mask),S=qn(qn(qn(2654435769,p),+!!n),s.layers.mask);for(let T=0;T<3;T++)for(const R of g[(y+T)%3])x=xl(x,R),S=xl(S,R);u.triangles++,u.a=u.a+x>>>0,u.b=u.b+S>>>0,u.c=u.c+yl(x)>>>0,u.d=u.d+yl(S^x)>>>0}}return vl.set(s,{geometry:e,attributes:r,arrays:o,state:a,digest:u}),u}function $_(s){const e=uh();for(const t of s)t instanceof Pe&&q_(e,Y_(t));return`${e.triangles}:${[e.a,e.b,e.c,e.d].map(t=>t.toString(16)).join(":")}`}function j_(s,e,t,n,i){return t||s.length()<=2.6||e.length()>=1.6?!1:!i||i.position.distanceToSquared(n.position)>=.25**2||i.geometry!==n.geometry||Math.abs(i.aspect-n.aspect)>.001}function Ml(s,e,t){const n=(s||t).clone();if(s&&e&&e.lengthSq()>1e-12&&t.lengthSq()>1e-12&&t.distanceToSquared(e)>1e-8){const r=new xi().setFromVector3(s),o=new xi().setFromVector3(e),a=new xi().setFromVector3(t);r.theta+=Math.atan2(Math.sin(a.theta-o.theta),Math.cos(a.theta-o.theta)),r.phi=nn.clamp(r.phi+a.phi-o.phi,1e-6,Math.PI-1e-6),r.radius*=a.radius/o.radius,n.setFromSpherical(r)}if(n.lengthSq()<1e-12)return new C(0,0,.35);const i=n.length();return i<.35||i>180?n.setLength(nn.clamp(i,.35,180)):n}function K_(s,e){return s.clone()}function _i(s,e,t,n,i){const r=e.length();if(!t.length||r<1e-8)return e.clone();const o=e.clone().normalize(),a=new C().crossVectors(o,new C(0,1,0));a.lengthSq()<1e-8?a.set(1,0,0):a.normalize();const c=new C().crossVectors(a,o).normalize(),l=.08*Math.tan(Math.PI/6)+.02,h=.08*Math.tan(Math.PI/6)*Math.max(.3,i?.aspect??1.6)+.02,d=f=>{const g=f.uv,_=i?.atlas?.atlas;if(!g||!_||!i?.passableTiles?.size)return!0;const m=Math.floor(g.x*_.width/_.stride)+Math.floor((1-g.y)*_.height/_.stride)*_.columns;return!i.passableTiles.has(m)};let u=r;for(const f of[-1,0,1])for(const g of[-1,0,1]){const _=s.clone().addScaledVector(a,f*h).addScaledVector(c,g*l);n.set(_,o),n.near=.01,n.far=u+.22;const m=n.intersectObjects(t,!1).find(d);m&&(u=Math.max(.08,Math.min(u,m.distance-.22)))}return u<r?e.clone().setLength(u):e.clone()}function bl(s,e,t,n,i){const r=(p,v)=>{const y=s.clone().add(p),S=i.actor.clone().add(new C(0,v,0)).sub(y),T=S.length();n.set(y,S.normalize()),n.near=.04,n.far=Math.max(.04,T-.12);const R=i.atlas?.atlas;return!n.intersectObjects(t,!1).some(D=>{const E=D.uv&&R?Math.floor(D.uv.x*R.width/R.stride)+Math.floor((1-D.uv.y)*R.height/R.stride)*R.columns:-1;return!i.passableTiles?.has(E)})},o=p=>Math.min(7,p.length())+(r(p,.68)?4:0)+(r(p,-.82)?3:0)+(i.facing?new C(p.x,0,p.z).normalize().dot(i.facing.clone().setY(0).normalize())*.35:0);let a=e.clone(),c=_i(s,a,t,n,i);if(i.preferExistingReadable&&c.length()>=1.65&&r(c,.68)&&r(c,-.82))return a;const l=i.nearbyActors??[[-1,0],[1,0],[0,-1],[0,1]].map(([p,v])=>s.clone().add(new C(p,0,v))),h=p=>{let v=4;for(const y of l)v=Math.min(v,_i(y,p,t,n,i).length());return v};if(c.length()>=4&&r(c,.68)&&r(c,-.82)&&h(a)>=2.6)return a;const d=h(a);let u=o(c)+d*2;const f=(p,v)=>p.length()>=1.65&&v>=1.65&&r(p,.68)&&r(p,-.82);let g=f(c,d);const _=Math.atan2(e.x,e.z),m=[_,...[1,-1,2,-2,3,-3,4,-4,5,-5,6].map(p=>_+p*Math.PI/6),0,Math.PI/2,Math.PI,-Math.PI/2];for(const p of[2.8,.6,5.5])for(const v of m){const y=new C(Math.sin(v)*7,p,Math.cos(v)*7);if(c=_i(s,y,t,n,i),c.length()<2.6)continue;const x=h(y),S=f(c,x),T=o(c)+x*2+Math.cos(v-_)*.025;(S&&!g||S===g&&T>u+.1)&&(a=y,u=T,g=S)}if(_i(s,a,t,n,i).length()<2.6||!g){const p=Array.from({length:24},(x,S)=>S*Math.PI/12);let v=g?u:-1/0,y=g;for(const x of[-8,0,15,45,65,80])for(const S of p){const T=x*Math.PI/180,R=Math.cos(T)*4.2,D=new C(Math.sin(S)*R,Math.sin(T)*4.2,Math.cos(S)*R);if(c=_i(s,D,t,n,i),c.length()<1.65||!r(c,.68))continue;const E=i.facing?new C(c.x,0,c.z).normalize().dot(i.facing.clone().setY(0).normalize()):0,w=h(D),I=f(c,w),O=o(c)+w*2+E*1.65;(I&&!y||I===y&&O>v+.1)&&(a=D,v=O,y=I)}}return a}function Z_(s,e,t){const n=new xi().setFromVector3(s),i=new xi().setFromVector3(e),r=Math.atan2(Math.sin(i.theta-n.theta),Math.cos(i.theta-n.theta)),o=Math.min(.05,Math.max(0,t)),a=o*3,c=i.phi-n.phi,l=Math.min(1,a/(Math.hypot(r,c)||1));return n.theta+=r*l,n.phi+=c*l,n.radius+=nn.clamp(i.radius-n.radius,-o*8,o*8),new C().setFromSpherical(n)}function J_(s,e,t,n){if(e===void 0||s<=e)return s;const i=Math.min(Math.max(0,t),Math.max(0,n-.18)),r=e+(s-e)*(1-Math.exp(-i/.2));return s-r<.001?s:r}const Sl={chest:27,trapped_chest:27,ender_chest:27,barrel:27,furnace:3,blast_furnace:3,smoker:3,hopper:5,dispenser:9,dropper:9,brewing_stand:5,shulker_box:27},nt=s=>{throw new Error(`容器数据无效：${s}`)},Kn=(s,e,t)=>{if(!s||typeof s!="object"||Array.isArray(s))return nt(t);const n=s;return Object.keys(n).some(i=>!e.includes(i))?nt(`${t}包含未支持的字段`):n},At=(s,e,t,n)=>Number.isInteger(s)&&s>=e&&s<=t?s:nt(n),Ds=(s,e,t)=>typeof s=="string"&&s.length<=e?s:nt(t),No=(s,e)=>s===void 0?void 0:typeof s=="boolean"?s:nt(e);function dh(s){const e=Kn(s,["name","states"],"方块"),t=Ds(e.name,128,"方块名称");if(!/^[a-z0-9_.-]+:[A-Za-z0-9_.-]+$/.test(t))return nt("方块标识");if(e.states!==void 0){if(!e.states||typeof e.states!="object"||Array.isArray(e.states)||Object.keys(e.states).length>32)return nt("方块状态");for(const[n,i]of Object.entries(e.states))if(n.length>128||!(typeof i=="boolean"||typeof i=="string"&&i.length<=128||typeof i=="number"&&Number.isFinite(i)))return nt("方块状态值")}return{name:t,...e.states===void 0?{}:{states:e.states}}}function Q_(s,e){const t=Kn(s,["slot","name","count","damage","durabilityDamage","color","bannerType","bannerPatterns","block","customName","enchantments"],"物品"),n=Ds(t.name,128,"物品名称");if(!/^[a-z0-9_.-]+:[a-z0-9_.-]+$/.test(n))return nt("物品标识");const i={slot:At(t.slot,0,e-1,"物品槽位"),name:n,count:At(t.count,1,255,"物品数量"),damage:At(t.damage,0,65535,"物品状态")};if(t.durabilityDamage!==void 0&&(i.durabilityDamage=At(t.durabilityDamage,0,65535,"物品耐久")),t.color!==void 0){if(!/^minecraft:leather_(helmet|chestplate|leggings|boots)$/.test(n)&&!["minecraft:fireworkscharge","minecraft:firework_star","minecraft:horsearmorleather","minecraft:leather_horse_armor"].includes(n))return nt("物品染色类型");i.color=At(t.color,0,4294967295,"物品颜色")}if(t.bannerType!==void 0){if(n!=="minecraft:banner")return nt("旗帜类型");i.bannerType=At(t.bannerType,0,1,"旗帜类型")}if(t.bannerPatterns!==void 0){if(n!=="minecraft:banner"||!Array.isArray(t.bannerPatterns)||t.bannerPatterns.length>32)return nt("旗帜纹样");i.bannerPatterns=t.bannerPatterns.map(r=>{const o=Kn(r,["color","pattern"],"旗帜纹样"),a=Ds(o.pattern,32,"旗帜纹样标识");return/^[a-z0-9_]+$/.test(a)?{color:At(o.color,0,15,"旗帜纹样染料"),pattern:a}:nt("旗帜纹样标识")})}if(t.block!==void 0&&(i.block=dh(t.block)),t.customName!==void 0&&(i.customName=Ds(t.customName,1024,"物品名称文字")),t.enchantments!==void 0){if(!Array.isArray(t.enchantments)||t.enchantments.length>128)return nt("物品附魔");i.enchantments=t.enchantments.map(r=>{const o=Kn(r,["id","level"],"附魔");return{id:At(o.id,0,65535,"附魔ID"),level:At(o.level,-32768,32767,"附魔等级")}})}return i}function ev(s,e){At(e.x,-33554432,33554431,"区域X"),At(e.z,-33554432,33554431,"区域Z"),At(e.count,0,65536,"区域容器数量");const t=Kn(s,["version","containers"],"容器文件");if(t.version!==1||!Array.isArray(t.containers)||t.containers.length!==e.count)return nt("容器文件版本或数量");const n=new Set;return t.containers.map(i=>{const r=Kn(i,["type","x","y","z","block","capacity","slots","customName","pair","pairLead","forceUnpair","inaccessible","unresolvedLoot","progress"],"容器");if(typeof r.type!="string"||!Object.hasOwn(Sl,r.type))return nt("容器类型");const o=r.type,a=Sl[o],c=dh(r.block);if(El(c.name)!==o||r.capacity!==a)return nt("容器方块或容量");const l=At(r.x,e.x*64,e.x*64+63,"容器X"),h=At(r.y,-2048,2047,"容器Y"),d=At(r.z,e.z*64,e.z*64+63,"容器Z"),u=Fo({x:l,y:h,z:d});if(n.has(u))return nt("重复容器位置");if(n.add(u),!Array.isArray(r.slots)||r.slots.length>a)return nt("容器物品槽位");const f=r.slots.map(_=>Q_(_,a));if(new Set(f.map(_=>_.slot)).size!==f.length)return nt("重复物品槽位");const g={type:o,x:l,y:h,z:d,block:c,capacity:a,slots:f};if(r.customName!==void 0&&(g.customName=Ds(r.customName,1024,"容器名称")),r.pair!==void 0){if(o!=="chest"&&o!=="trapped_chest")return nt("非箱子的配对");const _=Kn(r.pair,["x","z"],"箱子配对");if(g.pair={x:At(_.x,l-1,l+1,"配对X"),z:At(_.z,d-1,d+1,"配对Z")},Math.abs(g.pair.x-l)+Math.abs(g.pair.z-d)!==1)return nt("箱子配对距离")}if(r.pairLead!==void 0&&(g.pairLead=No(r.pairLead,"配对主箱")),r.forceUnpair!==void 0&&(g.forceUnpair=No(r.forceUnpair,"独立箱子")),r.inaccessible!==void 0){if(o!=="ender_chest"||r.inaccessible!=="player_inventory"||f.length)return nt("个人末影库存");g.inaccessible="player_inventory"}if(o==="ender_chest"&&(!g.inaccessible||f.length))return nt("末影库存不可公开");if(r.unresolvedLoot!==void 0){if(!["chest","trapped_chest","dispenser"].includes(o))return nt("战利品容器类型");if(g.unresolvedLoot=No(r.unresolvedLoot,"待生成战利品"),g.unresolvedLoot&&f.length)return nt("未生成战利品与已存物品冲突")}if(r.progress!==void 0){const _=Kn(r.progress,["burnTime","burnDuration","cookTime","fuelAmount","fuelTotal"],"容器进度");if(!["furnace","blast_furnace","smoker","brewing_stand"].includes(o))return nt("容器进度类型");g.progress=Object.fromEntries(Object.entries(_).map(([m,p])=>[m,At(p,0,2e4,"容器进度值")]))}return g})}async function tv(s,e,t){if(!/^([a-z0-9_-]+\/)?containers\/-?\d+_-?\d+\.json\.gz$/.test(s.file)||s.file.split("/").some(i=>i===".."))throw new Error("容器数据文件路径无效");const n=await fetch(t.worldUrl(s.file),{signal:e});if(!n.ok)throw new Error(`容器读取失败（${n.status}），请重试`);return ev(await t.readJson(n),s)}function nv(s,e,t,n){const i=Math.floor(t/16),r=s?.find(c=>c[0]===i)?.[1];if(!r)return!1;const o=c=>(Math.floor(c)%16+16)%16,a=o(e)*256+o(n)*16+o(t);return!!(r[a>>3]&1<<(a&7))}const mt=(s,e)=>`${s},${e}`,hn=(s,e)=>`${s},${e}`,tn=s=>({x:s.x,y:s.y,z:s.z}),Tr=s=>{let e=0;for(let t=s;t;t&=t-1)e++;return e};class sv{ready;host;callbacks;manifest;renderer;scene=new td;camera=new sn(60,1,.08,800);controls;worker;resizeObserver;meshes=new Map;dirtyMeshes=new Set;memoryStaleMeshes=new Set;regions=new Map;regionIndex=new Map;entityRegionIndex=new Map;entityRenderer;savedEntityRegions=new Map;savedEntities;signFont;desired=new Map;streamingDesired=new Map;streamingCenter="";memoryPreloadCenters=[];memoryPreloadSignature="";memoryPreloadPose;memoryPreloadRequired=new Map;memoryPreloadUrgent=!1;dimension;opaqueMaterial;transparentMaterial;atlasTexture;mode="orbit";distance=matchMedia("(pointer: coarse)").matches?3:4;generation=0;initialized=!1;active=!0;disposed=!1;bytes=0;loading=0;pendingMesh;pendingMemoryRevision;memorySource;memoryTime=1/0;memoryRevision=0;memoryAcknowledgedRevision=-1;memoryCallbacks={};memoryPlayers=new Map;memoryPlayerMaterial=new xt({color:15777122});memoryPlayerGeometry=new on(1,1,1);memorySkinMaterial=new xt({color:13938564});memoryPantsMaterial=new xt({color:4215630});memoryInteractions=new R_;memoryContainers=new I_;islandMachines=new G_;islandMachineIndex;machineChecking=!1;machineSignature="";lastMachineCheck=0;memoryPoses=new Map;memoryGroundCache=new Map;memoryStanceCache=new Map;memoryReachCache=new Map;memoryTargetBounds=new Map;memoryInteractionLookups=new Map;memoryMiningPreviews=new Map;memoryGroundRaycaster=new Nc;memoryClimbTiles=new Set;memoryPassableTiles=new Set;memoryAtlas;memoryEffectsGeneration=0;memoryContainerGeometryRevision=0;memoryEventOrder=0;memoryReplayClock=NaN;memoryPoseReset=!0;memoryPlaying=!1;islandGenerators=[];islandMechanism;islandMechanismPrompt;islandMechanismButton;islandMechanismCaption;islandMechanismNearby;memoryCameraKey="";memoryCameraOffset;memoryCameraTarget;memoryRequestedOffset;memoryAppliedOffset;memoryPanOffset=new C;memoryCameraFrame=0;memoryCameraClearSince;memoryCameraSafeDistance;orbitUserAdjusted=!1;memoryInitialViewPending=!0;memoryInitialViewFromTravel=!1;memoryDefaultReframe;memoryDefaultViewAttempt;memoryDefaultRecoveries=0;memoryDefaultTravel;memoryFollow;memoryEstimated=0;memoryLoadedRegions=0;memoryInspectionId=0;memoryInspections=new Map;animation=0;lastFrame=0;lastStream=0;lastPosition=0;lastStatus="";yaw=0;pitch=0;touchMove=new C;keys=new Set;dragging;disposers=[];initController=new AbortController;workerReady;workerFailure;totalChunks=0;renderDirty=!0;framesRendered=0;renderedPosition=new C(1/0,1/0,1/0);renderedQuaternion=new On;containerCallbacks={};containerState={status:"closed"};containerTarget=null;containerController;containerRequestId=0;containerRequests=0;containerRecords=new Map;containerAssets;containerPicking=!1;containerPreparing=!1;containerPrepareRevision=0;containerRetryScreen;containerPickRevision=0;containerTargetChecked=0;containerRaycaster=new Nc;containerOutline=new hd(new ud(new on(1,1,1)),new Xl({color:0,transparent:!0,opacity:.45,depthWrite:!1,fog:!1}));hudVisible=!0;containerTargetPosition=new C(1/0,1/0,1/0);containerTargetQuaternion=new On;containerPointers=new Set;containerGesture;constructor(e,t,n={}){if(this.host=e,this.manifest=t,this.callbacks=n,!t.dimensions.length)throw new Error("地图没有可浏览的维度");this.dimension=t.dimensions.find(r=>r.id==="overworld")||t.dimensions[0],this.renderer=new a0({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.worker=new Worker(new URL(""+new URL("mesh-worker-Cff2cufv.js",import.meta.url).href,import.meta.url),{type:"module"}),this.renderer.outputColorSpace=vt,this.renderer.setClearColor(12506847),this.renderer.domElement.className="world-canvas",this.renderer.domElement.setAttribute("aria-label",`${t.worldName||t.name||"老母猪村"}三维地图，拖动旋转视角，滚轮缩放`),this.renderer.domElement.tabIndex=0,this.renderer.domElement.style.touchAction="none",e.append(this.renderer.domElement),this.containerOutline.visible=!1,this.scene.add(this.containerOutline),this.scene.add(this.memoryInteractions.group),this.scene.add(this.islandMachines.group),this.scene.fog=new Rs(12506847,50,115),this.scene.add(new Md(16777215,1.6));const i=new xd(16774624,1.3);i.position.set(-80,150,65),this.scene.add(i),this.controls=new l0(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.09,this.controls.minDistance=2,this.controls.maxDistance=180,this.controls.maxPolarAngle=Math.PI*.94,this.controls.zoomSpeed=.75,this.controls.panSpeed=.7,this.controls.target.set(this.dimension.spawn.x,this.dimension.spawn.y,this.dimension.spawn.z),this.camera.position.set(this.dimension.spawn.x+38,this.dimension.spawn.y+38,this.dimension.spawn.z+48),this.camera.lookAt(this.controls.target),this.controls.update(),this.reindex(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.resize(),this.bindInput(),this.worker.onmessage=r=>this.onWorker(r.data),this.worker.onerror=r=>{this.workerFailure?.(new Error(r.message||"地图处理线程发生错误")),this.callbacks.onError?.("地图处理线程发生错误，请重新打开地图")},this.ready=this.initialize(),this.animation=requestAnimationFrame(r=>this.frame(r))}async initialize(){try{const e=this.initController.signal,[t,n]=await Promise.all([fetch(Pn(this.manifest.palette||"palette.json"),{signal:e}),fetch(pi("textures/materials.json.gz"),{signal:e}).then(m=>m.ok?m:fetch(pi("textures/materials.json"),{signal:e}))]);if(!t.ok||!n.ok)throw new Error("地图索引或材质加载失败");const i=ri(t),r=ri(n),[o,a,c,l,h]=await Promise.all([i,r,this.loadSignFont(e),this.manifest.entityModels?fetch(pi(this.manifest.entityModels.file),{signal:e}).then(m=>ri(m)).then(v_):void 0,this.manifest.islandMachines?fetch(Pn(this.manifest.islandMachines.file),{signal:e}).then(ri).then(k_).catch(()=>{}):void 0]);if(h&&(this.islandMachineIndex=new B_(h)),!Array.isArray(o)||!a.materials)throw new Error("地图材质格式无效");if(a.paletteLength!==void 0&&a.paletteLength!==o.length||a.paletteMaterials!==void 0&&(!Array.isArray(a.paletteMaterials)||a.paletteMaterials.length!==o.length))throw new Error("地图索引与材质版本不一致，请重新加载地图");const d=a.atlas?.image||a.image||"textures/atlas.png";this.containerAssets={atlas:a,imageUrl:pi(d)};const u=await new _d().setCrossOrigin("anonymous").loadAsync(pi(d));if(this.disposed){u.dispose();return}const f=Math.min(this.renderer.capabilities.getMaxAnisotropy(),matchMedia("(pointer: coarse)").matches?4:8),g=b0(u,a,this.renderer.capabilities.maxTextureSize,f),_=g.texture;if(_!==u&&u.dispose(),this.atlasTexture=_,this.memoryAtlas=g.atlas,this.memoryInteractions.configure(_,g.atlas,o,g.maxFootprint),this.memoryContainers.configure(_,g.atlas,g.maxFootprint),this.manifest.mechanisms?.version===1){const m=await fetch(Pn(this.manifest.mechanisms.file),{signal:e}).then(async p=>p.ok?N_(await ri(p)):[]).catch(()=>[]);if(this.disposed)return;if(this.islandGenerators=m,m.length){this.islandMechanism=new F_(_,g.atlas,g.maxFootprint),this.scene.add(this.islandMechanism.group);const p=document.createElement("div");p.className="island-machine-preview",p.hidden=!0;const v=document.createElement("button");v.type="button",v.textContent="看看刷石机",v.setAttribute("aria-pressed","false");const y=document.createElement("p");y.textContent="水与岩浆相遇，圆石收进料箱",y.hidden=!0,v.addEventListener("click",()=>{v.getAttribute("aria-pressed")==="true"?this.stopIslandMechanism():this.islandMechanismNearby&&!this.memorySource&&this.active&&(this.islandMachines.clear(),this.machineSignature="",this.frameIslandMechanism(this.islandMechanismNearby),this.islandMechanism?.start(this.islandMechanismNearby)),this.renderDirty=!0,this.updateIslandMechanismPrompt()}),p.append(v,y),this.host.append(p),this.islandMechanismPrompt=p,this.islandMechanismButton=v,this.islandMechanismCaption=y}}for(const[m,p]of Object.entries(g.atlas.materials))if(/ladder|vine/.test(m))for(const v of[p.top,p.side,p.bottom,...Object.values(p.faces||{})])v!==void 0&&this.memoryClimbTiles.add(v);for(const[m,p]of Object.entries(g.atlas.materials))if(/(?:^|:)(?:(?:flowing_)?(?:water|lava)|bubble_column|tallgrass|double_plant|red_flower|yellow_flower|deadbush|fire|soul_fire|torch|redstone_torch|unlit_redstone_torch|rail|powered_rail|detector_rail|activator_rail|redstone_wire|wheat|carrots|potatoes|beetroot|beetroots|nether_wart|reeds|sugar_cane|pumpkin_stem|melon_stem|seagrass|kelp)$/.test(m))for(const v of[p.top,p.side,p.bottom,...Object.values(p.faces||{})])v!==void 0&&this.memoryPassableTiles.add(v);if(this.opaqueMaterial=new xt({map:_,vertexColors:!0,alphaTest:.45,alphaToCoverage:!0}),this.transparentMaterial=new xt({map:_,vertexColors:!0,transparent:!0,opacity:.72,alphaTest:.02,depthWrite:!1}),ei(this.opaqueMaterial,_,g.maxFootprint),ei(this.transparentMaterial,_,g.maxFootprint),this.entityRenderer=new b_({image:_.image,texture:_,atlas:g.atlas,maxFootprint:g.maxFootprint,palette:o,fontFamily:c,maxTextureSize:this.renderer.capabilities.maxTextureSize},()=>{this.renderDirty=!0},m=>this.callbacks.onError?.(m)),this.scene.add(this.entityRenderer.group),l&&(this.savedEntities=new g_(l,{texture:_,atlas:g.atlas,palette:o,fontFamily:c},()=>{this.renderDirty=!0},m=>this.callbacks.onError?.(m)),this.scene.add(this.savedEntities.group)),await new Promise((m,p)=>{this.workerReady=m,this.workerFailure=p,this.post({type:"init",palette:o,atlas:g.atlas})}),this.disposed)return;this.initialized=!0,this.renderDirty=!0,this.updateStreaming(!0)}catch(e){if(this.disposed||e instanceof DOMException&&e.name==="AbortError")return;const t=e instanceof Error?e.message:String(e);throw this.callbacks.onError?.(t),e}}post(e,t=[]){this.worker.postMessage(e,t)}async loadSignFont(e){const t='"Microsoft YaHei","PingFang SC","Noto Sans CJK SC",sans-serif',n=this.manifest.blockEntityFont;if(!n)return t;const i=await fetch(Pn(n.file),{signal:e});if(!i.ok)throw new Error(`告示牌字体加载失败（${i.status}）`);const r=await i.arrayBuffer(),o=await new FontFace(n.family,r).load();return this.disposed||e.aborted?t:(document.fonts.add(o),this.signFont=o,`${JSON.stringify(n.family)},${t}`)}reindex(){this.regionIndex.clear(),this.entityRegionIndex.clear(),this.savedEntityRegions.clear(),this.totalChunks=0;for(const r of this.dimension.regions)this.regionIndex.set(hn(r.x,r.z),r),this.totalChunks+=Tr(r.chunks);const e=[...this.memorySource?.manifest.regions||[],...this.memorySource?.manifest.repairs?.regions||[]];for(const r of e){if(r.dimension!==this.dimension.id)continue;const o=hn(r.x,r.z),a=this.regionIndex.get(o);this.regionIndex.set(o,a?{...a,chunks:65535}:{x:r.x,z:r.z,file:"",bytes:0,chunks:65535}),this.totalChunks+=16-Tr(a?.chunks||0)}for(const r of this.dimension.blockEntities?.regions||[])this.entityRegionIndex.set(hn(r.x,r.z),r);for(const r of this.dimension.entities?.regions||[]){const o=hn(r.x,r.z),a=this.regionIndex.get(o),c=(a?.chunks||0)|(r.chunks??65535);this.savedEntityRegions.set(o,r),this.regionIndex.set(o,a?{...a,chunks:c}:{x:r.x,z:r.z,file:"",bytes:0,chunks:c}),this.totalChunks+=Tr(c)-Tr(a?.chunks||0)}const t=this.dimension.dimension===1||this.dimension.id==="nether",n=this.dimension.dimension===2||this.dimension.id==="end",i=t?4007207:n?2370359:12506847;this.renderer.setClearColor(i),this.scene.fog=new Rs(i,this.distance*12,this.distance*16+18),this.renderDirty=!0}resize(){const e=Math.max(1,this.host.clientWidth),t=Math.max(1,this.host.clientHeight),n=Sh(e,t);this.renderer.getPixelRatio()!==n&&this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderDirty=!0}bindInput(){const e=this.renderer.domElement,t=()=>{this.orbitUserAdjusted=!0,this.memoryFollow||(this.memoryRequestedOffset=void 0,this.memoryPanOffset.set(0,0,0))};this.controls.addEventListener("start",t),this.disposers.push(()=>this.controls.removeEventListener("start",t));const n=o=>this.mode==="fly"&&o.button===2&&o.pointerType==="mouse",i=(o,a,c,l)=>{o.addEventListener(a,c,l),this.disposers.push(()=>o.removeEventListener(a,c,l))};i(window,"keydown",o=>{const a=o.target;if(o.code==="Escape"&&this.containerPreparing){o.preventDefault(),this.closeContainer();return}if(!(!this.active||this.containerState.status!=="closed"||this.containerPreparing||this.mode!=="fly"||a.matches('input,textarea,select,[contenteditable="true"]'))){if(o.code==="KeyE"){o.preventDefault(),o.repeat||this.openTargetContainer();return}["KeyW","KeyA","KeyS","KeyD","KeyQ","Space","ShiftLeft","ShiftRight","ControlLeft","ControlRight","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(o.code)&&(o.preventDefault(),this.keys.add(o.code))}}),i(window,"keyup",o=>this.keys.delete(o.code)),i(window,"blur",()=>{this.keys.clear(),this.touchMove.set(0,0,0),this.dragging=void 0,this.containerGesture=void 0,this.containerPointers.clear()}),i(e,"pointerdown",o=>{!this.active||this.containerState.status!=="closed"||this.containerPreparing||(this.containerPointers.add(o.pointerId),this.containerPointers.size>1&&this.containerGesture&&(this.containerGesture.invalid=!0),(o.button===0||o.button===2)&&!this.containerGesture&&(this.containerGesture={id:o.pointerId,button:o.button,x:o.clientX,y:o.clientY,time:performance.now(),moved:!1,invalid:this.containerPointers.size!==1||!n(o)&&(this.keys.size>0||this.touchMove.lengthSq()>0)}),!(this.mode!=="fly"||o.button!==0||document.pointerLockElement===e)&&(this.dragging||(this.dragging={id:o.pointerId,x:o.clientX,y:o.clientY},e.setPointerCapture(o.pointerId),e.focus({preventScroll:!0}))))}),i(e,"pointermove",o=>{const a=this.containerGesture;a?.id===o.pointerId&&!(this.mode==="fly"&&a.button===2&&o.pointerType==="mouse")&&(Math.hypot(o.clientX-a.x,o.clientY-a.y)>(o.pointerType==="touch"?8:4)||document.pointerLockElement===e&&Math.hypot(o.movementX,o.movementY)>1)&&(a.moved=!0),!(!this.active||this.containerState.status!=="closed"||this.containerPreparing||this.mode!=="fly")&&(document.pointerLockElement===e?this.look(o.movementX,o.movementY):this.dragging?.id===o.pointerId&&(this.look(o.clientX-this.dragging.x,o.clientY-this.dragging.y),this.dragging.x=o.clientX,this.dragging.y=o.clientY))});const r=o=>{this.dragging?.id===o.pointerId&&(this.dragging=void 0),this.containerPointers.delete(o.pointerId);const a=this.containerGesture;a?.id===o.pointerId&&(this.containerGesture=void 0,!(o.type!=="pointerup"||!this.active||this.containerState.status!=="closed"||a.invalid||a.moved||this.containerPointers.size||!n(o)&&(this.keys.size||this.touchMove.lengthSq())||performance.now()-a.time>650)&&this.openContainerAt(document.pointerLockElement===e?void 0:{x:o.clientX,y:o.clientY}))};i(e,"pointerup",r),i(e,"pointercancel",r),i(e,"dblclick",o=>{this.active&&this.containerState.status==="closed"&&!this.containerPreparing&&this.mode==="fly"&&(o.preventDefault(),this.requestPointerLock())}),i(e,"wheel",o=>{this.active&&this.containerState.status==="closed"&&!this.containerPreparing&&this.mode==="fly"&&(o.preventDefault(),this.zoom(o.deltaY<0?1.25:.8))},{passive:!1}),i(e,"contextmenu",o=>{this.active&&o.preventDefault()}),i(document,"pointerlockchange",()=>{document.pointerLockElement!==e&&(this.keys.clear(),this.touchMove.set(0,0,0),this.dragging=void 0,this.containerGesture=void 0,this.containerPointers.clear())}),i(e,"webglcontextlost",o=>{o.preventDefault(),this.callbacks.onError?.("三维画面暂时中断，请重新打开三维地图")})}look(e,t){this.yaw-=e*.0035,this.pitch=nn.clamp(this.pitch-t*.0035,-Math.PI/2+.025,Math.PI/2-.025),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ")}requestPointerLock(){if(this.mode!=="fly"||!this.active||this.containerState.status!=="closed"||typeof this.renderer.domElement.requestPointerLock!="function")return;const e=this.renderer.domElement.requestPointerLock();e&&typeof e.catch=="function"&&e.catch(()=>{})}setMode(e){if(e!==this.mode){if(this.closeContainer(),this.setContainerTarget(null),this.containerTargetPosition.x=1/0,this.containerPickRevision++,this.keys.clear(),this.touchMove.set(0,0,0),this.dragging=void 0,document.pointerLockElement===this.renderer.domElement&&document.exitPointerLock(),e==="fly")this.camera.rotation.reorder("YXZ"),this.yaw=this.camera.rotation.y,this.pitch=this.camera.rotation.x;else{const t=this.camera.getWorldDirection(new C);this.controls.target.copy(this.camera.position).addScaledVector(t,28)}this.mode=e,this.controls.enabled=e==="orbit"&&this.active&&this.containerState.status==="closed"&&!this.containerPreparing,this.renderer.domElement.setAttribute("aria-label",e==="fly"?"三维飞行地图，拖动转头，WASD移动，空格上升，Shift下降":"三维地图，拖动旋转，双指平移和缩放"),this.callbacks.onMode?.(e),this.updateStreaming(!0)}}setActive(e){e||this.stopIslandMechanism(),this.active=e,e&&(this.renderDirty=!0),this.controls.enabled=this.mode==="orbit"&&e&&this.containerState.status==="closed"&&!this.containerPreparing,e||(this.closeContainer(),this.setContainerTarget(null),this.containerTargetPosition.x=1/0,this.keys.clear(),this.touchMove.set(0,0,0),this.dragging=void 0,document.pointerLockElement===this.renderer.domElement&&document.exitPointerLock())}setDimension(e){const t=this.manifest.dimensions.find(n=>n.id===e);if(!(!t||t===this.dimension)){this.stopIslandMechanism(),this.closeContainer(),this.setContainerTarget(null),this.containerPickRevision++,this.generation++,this.memoryFollow=void 0,this.clearMemoryPreload(),this.clearMemoryPlayers();for(const n of this.regions.values())n.controller?.abort();this.regions.clear(),this.entityRenderer?.clear(),this.savedEntities?.clear(),this.loading=0,this.pendingMesh=void 0,this.pendingMemoryRevision=void 0,this.memoryAcknowledgedRevision=-1,this.dirtyMeshes.clear(),this.memoryStaleMeshes.clear(),this.desired.clear(),this.streamingDesired.clear(),this.streamingCenter="";for(const n of this.meshes.keys())this.removeMesh(n);this.post({type:"reset"}),this.dimension=t,this.reindex(),this.memorySource&&(this.memoryRevision++,this.configureMemoryWorker()),this.mode==="orbit"?(this.controls.target.set(t.spawn.x,t.spawn.y,t.spawn.z),this.camera.position.set(t.spawn.x+38,t.spawn.y+38,t.spawn.z+48),this.controls.update()):(this.camera.position.set(t.spawn.x,t.spawn.y+7,t.spawn.z),this.pitch=-.22,this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ")),this.updateStreaming(!0),this.emitPosition()}}setLocation(e,t,n){if([e,t,n].every(Number.isFinite)){if(this.mode==="orbit"){const i=this.camera.position.clone().sub(this.controls.target);this.controls.target.set(e,t,n),this.camera.position.copy(this.controls.target).add(i),this.controls.update()}else this.camera.position.set(e,t,n);this.updateStreaming(!0),this.emitPosition()}}setDistance(e){if(!Number.isFinite(e))return;const t=nn.clamp(Math.round(e),Eh,wh);t!==this.distance&&(this.distance=t,this.updateFog(),this.updateStreaming(!0))}setTouchMove(e,t,n=0){this.containerState.status!=="closed"||this.containerPreparing||this.touchMove.set(nn.clamp(e,-1,1),nn.clamp(n,-1,1),nn.clamp(t,-1,1))}getPosition(){return tn(this.camera.position)}getFocus(){return this.mode==="orbit"?tn(this.controls.target):tn(this.camera.position.clone().addScaledVector(this.camera.getWorldDirection(new C),8))}getLocation(){return this.mode==="orbit"?tn(this.controls.target):this.getPosition()}getMode(){return this.mode}getDimension(){return this.dimension.id}getMemoryGeometryRevision(){return this.memoryRevision}setContainerCallbacks(e={}){this.containerCallbacks=e,e.onState?.(this.containerState),e.onTarget?.(this.containerTarget)}getContainerState(){return this.containerState}getContainerAssets(){return this.containerAssets}setContainerTarget(e){const t=this.containerTarget;if(this.containerTarget=e,e?.bounds){const[n,i,r,o,a,c]=e.bounds;this.containerOutline.position.set(e.x+(n+o)/2,e.y+(i+a)/2,e.z+(r+c)/2),this.containerOutline.scale.set(o-n+.004,a-i+.004,c-r+.004),this.renderDirty=!0}t?.dimension===e?.dimension&&t?.x===e?.x&&t?.y===e?.y&&t?.z===e?.z&&t?.type===e?.type&&t?.available===e?.available&&t?.reason===e?.reason||this.containerCallbacks.onTarget?.(e)}setHudVisible(e){this.hudVisible=e,e||this.stopIslandMechanism(),this.updateIslandMechanismPrompt(),this.renderDirty=!0}frameIslandMechanism(e){this.mode!=="orbit"&&this.setMode("orbit");const[,t,n,i,r,o,a]=e,c=new C(t+.5,n+.5,i+.5),l=new Ot(new C(t-8,n-1,i-3),new C(t+3,n+8,i+9)),h=[...this.meshes.values()];h.forEach(f=>f.updateMatrixWorld(!0));const d=fi(h,l),u=this.memoryGroundRaycaster;for(const f of[[-6,2.5,1.7],[-5,2,.5],[-4,1.5,.5],[0,7,1]]){const g=new C(t+f[0],n+f[1],i+f[2]),_=g.clone().sub(c),m=_.length();if(u.set(c,_.normalize()),u.near=.6,u.far=m,!u.intersectObjects(d,!1).some(p=>p.distance<m-.15)){this.controls.target.set((t+r)/2+.5,(n+o)/2+.7,(i+a)/2+.5),this.camera.position.copy(g),this.controls.update(),this.renderDirty=!0;return}}}stopIslandMechanism(){this.islandMechanism?.stop()&&(this.machineSignature="",this.renderDirty=!0)}updateIslandMechanismPrompt(){if(!this.islandMechanismPrompt)return;const e=this.active&&this.hudVisible&&!this.memorySource&&this.containerState.status==="closed",t=this.mode==="orbit"?this.controls.target:this.camera.position,n=e?O_(this.islandGenerators,t,this.dimension.id):void 0;(n!==this.islandMechanismNearby||!e)&&this.stopIslandMechanism(),this.islandMechanismNearby=n,this.islandMechanismPrompt.hidden=!n;const i=!!this.islandMechanism?.running;this.islandMechanismButton.textContent=i?"结束演示":"看看刷石机",this.islandMechanismButton.setAttribute("aria-pressed",String(i)),this.islandMechanismCaption.hidden=!i}updateContainerOutline(){const e=this.containerTarget,t=!!e?.bounds&&this.hudVisible&&this.active&&this.mode==="fly"&&this.containerState.status==="closed"&&!this.containerPreparing&&this.meshReady(mt(Math.floor(e.x/16),Math.floor(e.z/16)))&&this.canOpenInventory()&&this.camera.position.distanceToSquared(this.containerTargetPosition)<1e-8&&1-Math.abs(this.camera.quaternion.dot(this.containerTargetQuaternion))<1e-8;this.containerOutline.visible!==t&&(this.containerOutline.visible=t,this.renderDirty=!0)}setContainerState(e){this.containerState=e,e.status!=="closed"&&(this.keys.clear(),this.touchMove.set(0,0,0),this.dragging=void 0,this.containerGesture=void 0,this.containerPointers.clear(),document.pointerLockElement===this.renderer.domElement&&document.exitPointerLock()),this.controls.enabled=this.active&&this.mode==="orbit"&&e.status==="closed"&&!this.containerPreparing,this.containerCallbacks.onState?.(e)}closeContainer(){this.containerPrepareRevision++,this.containerPickRevision++,this.containerRetryScreen=void 0,this.containerRequestId++,this.containerController?.abort(),this.containerController=void 0,this.containerRecords.clear(),this.keys.clear(),this.touchMove.set(0,0,0),this.dragging=void 0,this.containerState.status!=="closed"&&this.setContainerState({status:"closed"})}async openTargetContainer(){if(this.containerState.status==="error"){await this.openContainerAt(this.containerRetryScreen,!0);return}this.containerState.status==="closed"&&await this.openContainerAt()}canOpenInventory(){return!this.memorySource||this.memoryAcknowledgedRevision===this.memoryRevision&&this.getMemoryBufferStatus().ready}async openContainerAt(e,t=!1){if(!this.active||!this.initialized||this.disposed||this.containerPreparing||this.containerState.status!=="closed"&&!(t&&this.containerState.status==="error"))return;const n=this.generation,i=++this.containerPickRevision,r=++this.containerPrepareRevision;this.containerPreparing=!0;let o=r;const a=()=>this.active&&!this.disposed&&n===this.generation&&o===this.containerPrepareRevision&&(this.containerState.status==="closed"||t&&this.containerState.status==="error");try{if(!await this.pickContainer(e)||!a()||i!==this.containerPickRevision||(this.keys.clear(),this.touchMove.set(0,0,0),this.dragging=void 0,this.controls.enabled=!1,this.containerCallbacks.onBeforeOpen?.(),!this.active||this.disposed||n!==this.generation||this.containerState.status!=="closed"&&!(t&&this.containerState.status==="error")))return;o=++this.containerPrepareRevision;const l=this.memoryRevision,h=++this.containerPickRevision,d=performance.now()+1e4;for(;a()&&l===this.memoryRevision&&!this.canOpenInventory();){if(performance.now()>=d){this.callbacks.onError?.("这段回忆仍在准备中，请稍后重新打开容器。");return}await new Promise(f=>requestAnimationFrame(()=>f()))}if(!a()||l!==this.memoryRevision||h!==this.containerPickRevision)return;const u=await this.pickContainer(e);if(!u||!a()||l!==this.memoryRevision||h!==this.containerPickRevision)return;this.containerRetryScreen=e?{...e}:void 0,this.setContainerTarget(u),await this.loadContainer(u)}catch(c){a()&&this.callbacks.onError?.(c instanceof Error?c.message:"容器选择失败")}finally{this.containerPreparing=!1,this.controls.enabled=this.active&&this.mode==="orbit"&&this.containerState.status==="closed"}}async refreshContainerTarget(){if(!this.initialized||this.disposed)return;this.containerPicking=!0;const e=this.generation,t=this.containerPickRevision;this.containerTargetPosition.copy(this.camera.position),this.containerTargetQuaternion.copy(this.camera.quaternion);try{const n=await this.pickContainer();e===this.generation&&t===this.containerPickRevision&&this.active&&this.containerState.status==="closed"&&!this.disposed&&this.setContainerTarget(n)}catch{}finally{this.containerPicking=!1}}async pickContainer(e){if(!this.canOpenInventory())return null;const t=this.generation,n=this.memoryRevision,i=this.renderer.domElement.getBoundingClientRect(),r=e?new Ee((e.x-i.left)/i.width*2-1,-(e.y-i.top)/i.height*2+1):new Ee;if(Math.abs(r.x)>1||Math.abs(r.y)>1)return null;this.camera.updateMatrixWorld(!0);const o=this.containerRaycaster;o.near=0,o.far=this.mode==="fly"?8:96,o.setFromCamera(r,this.camera);const a=[],c=[];for(const S of Ja(o.ray.origin,o.ray.direction,o.far)){if(this.desired.has(S)&&!this.meshReady(S))return null;const T=this.meshes.get(S);if(T?.visible){if(!this.meshReady(S))return null;c.push([S,T]),T.updateMatrixWorld(!0),T.traverse(R=>{!(R instanceof Pe)||!R.visible||(R.geometry.boundingBox||R.geometry.computeBoundingBox(),a.push(R))})}}const l=o.intersectObjects(a,!1)[0];if(!l?.face)return null;const h=l.face.normal.clone().applyNormalMatrix(new Ie().getNormalMatrix(l.object.matrixWorld)),d=l.point.clone().addScaledVector(h,-1e-4),u=l.object.userData.memoryContainerPosition,f=u?.x??Math.floor(d.x),g=u?.y??Math.floor(d.y),_=u?.z??Math.floor(d.z);if(!this.meshReady(mt(Math.floor(f/16),Math.floor(_/16))))return null;const m=await this.inspectMemoryBlock(f,g,_);if(t!==this.generation||n!==this.memoryRevision||!this.canOpenInventory()||this.memorySource&&!Object.is(m.time,this.memoryTime)||c.some(([S,T])=>this.meshes.get(S)!==T||!this.meshReady(S)))return null;const p=m.currentName||"",v=El(p);if(!v)return null;const y=!!this.memorySource&&this.memoryTime<(this.memorySource.manifest.finalMapTime??1/0),x=!!this.dimension.containers;return{x:f,y:g,z:_,type:v,blockName:p,dimension:this.dimension.id,available:!y&&x&&v!=="ender_chest",...m.containerBounds?{bounds:m.containerBounds}:{},...y?{reason:"这一刻的物品暂时无法查看。把时间线移到最后，看看留下的东西。"}:x?v==="ender_chest"?{reason:"末影箱属于每位玩家的个人库存，公开地图不提供这些物品。"}:{}:{reason:"这份地图没有公开容器的物品记录。"}}}async loadContainer(e){if(!this.active||this.disposed||e.dimension!==this.dimension.id)return;this.containerController?.abort();const t=new AbortController,n=this.generation,i=++this.containerRequestId;this.containerController=t,this.containerRecords.clear();const r=()=>!this.disposed&&this.active&&n===this.generation&&i===this.containerRequestId&&!t.signal.aborted&&this.containerController===t;if(this.setContainerState({status:"loading",target:e}),!e.available){this.setContainerState({status:"unavailable",target:e,message:e.reason||"这份地图没有可查看的容器库存。"});return}const o=this.dimension.containers,a=new Map((o?.regions||[]).map(h=>[hn(h.x,h.z),h])),c=this.containerRecords,l=async h=>{const d=hn(h.x,h.z);if(c.has(d))return c.get(d);this.containerRequests++;const u=await tv(h,t.signal,{readJson:ri,worldUrl:Pn});return r()?(c.set(d,u),u):[]};try{const h=a.get(hn(Math.floor(e.x/64),Math.floor(e.z/64)));if(!h){r()&&this.setContainerState({status:"unavailable",target:e,message:"存档中没有这个容器的物品记录，无法判断它是否为空。"});return}const d=await l(h);if(!r())return;const u=d.find(g=>Fo(g)===Fo(e));if(!u||u.type!==e.type||u.block.name!==e.blockName){this.setContainerState({status:"unavailable",target:e,message:"存档中没有这个容器的匹配物品记录，无法判断它是否为空。"});return}if(u.unresolvedLoot){this.setContainerState({status:"unavailable",target:e,message:"战利品尚未生成，存档中没有可展示的物品。"});return}if(u.inaccessible){this.setContainerState({status:"unavailable",target:e,message:"末影箱属于每位玩家的个人库存，公开地图不提供这些物品。"});return}let f;if(u.pair&&!u.forceUnpair){const g=a.get(hn(Math.floor(u.pair.x/64),Math.floor(u.pair.z/64)));if(g){const _=await l(g);if(!r())return;const m=_.find(p=>p.x===u.pair.x&&p.y===u.y&&p.z===u.pair.z);if(m&&xh(u,m)){if(m.unresolvedLoot){this.setContainerState({status:"unavailable",target:e,message:"大型箱子的另一半战利品尚未生成，存档中没有完整的物品记录。"});return}f=m}}if(!f)throw new Error("大型箱子的另一半记录不完整，未显示可能缺失的库存。请重试。")}r()&&this.setContainerState({status:"ready",target:e,container:Mh(u,f)})}catch(h){if(!r()||h instanceof DOMException&&h.name==="AbortError")return;this.containerRecords.clear(),this.setContainerState({status:"error",target:e,message:h instanceof Error?h.message:"容器读取失败，请重试。"})}}inspectMemoryBlock(e,t,n){if(this.disposed)return Promise.reject(new Error("地图已关闭"));const i=++this.memoryInspectionId;return new Promise((r,o)=>{const a=setTimeout(()=>{this.memoryInspections.delete(i),o(new Error("方块读取超时"))},1e4);this.memoryInspections.set(i,{resolve:c=>{clearTimeout(a),r(c)},reject:c=>{clearTimeout(a),o(c)}}),this.post({type:"memory-inspect",x:Math.floor(e),y:Math.floor(t),z:Math.floor(n),requestId:i,generation:this.generation})})}hasWorldPosition(e,t){const n=this.manifest.dimensions.find(a=>a.id===e);if(!n)return!1;const i=n.regions.find(a=>a.x===Math.floor(t.x/64)&&a.z===Math.floor(t.z/64)),r=(Math.floor(t.x/16)%4+4)%4,o=(Math.floor(t.z/16)%4+4)%4;return!!i&&!!(i.chunks&1<<r*4+o)}async setMemorySource(e,t={}){if(this.stopIslandMechanism(),await this.ready,!this.disposed){this.closeContainer(),this.setContainerTarget(null),this.containerPickRevision++,this.memorySource=e||void 0,this.memoryCallbacks=t,this.resetMemoryEffects(),this.clearMemoryPreload(),this.memoryRevision++,this.memoryAcknowledgedRevision=-1,this.generation++;for(const n of this.regions.values())n.controller?.abort();this.regions.clear(),this.entityRenderer?.clear(),this.savedEntities?.clear(),this.loading=0,this.pendingMesh=void 0,this.pendingMemoryRevision=void 0,this.dirtyMeshes.clear(),this.memoryStaleMeshes.clear(),this.desired.clear(),this.streamingDesired.clear(),this.streamingCenter="";for(const n of this.meshes.keys())this.removeMesh(n);this.post({type:"reset"}),this.reindex(),e&&this.configureMemoryWorker(),this.entityRenderer&&(this.entityRenderer.group.visible=!0),this.savedEntities&&(this.savedEntities.group.visible=!e||this.memoryTime>=(e.manifest.finalMapTime??1/0)),e||(this.memoryFollow=void 0,this.clearMemoryPlayers()),this.updateStreaming(!0)}}setMemoryTime(e){Object.is(e,this.memoryTime)||(this.memorySource&&(this.closeContainer(),this.setContainerTarget(null),this.containerPickRevision++),this.memoryTime=e,!(!this.memorySource||this.disposed)&&(this.memoryRevision++,this.pendingMesh&&this.dirtyMeshes.add(this.pendingMesh),this.pendingMesh=void 0,this.pendingMemoryRevision=void 0,this.post({type:"memory-time",time:e,revision:this.memoryRevision,generation:this.generation}),this.entityRenderer&&(this.entityRenderer.group.visible=!0),this.savedEntities&&(this.savedEntities.group.visible=e>=(this.memorySource.manifest.finalMapTime??1/0)),this.syncEntityOverlays(),this.renderDirty=!0))}configureMemoryWorker(){const e=this.memorySource;e&&(this.post({type:"memory-config",palette:e.palette,repairPalette:e.repairPalette,end:e.manifest.finalMapTime??1/0,time:this.memoryTime,revision:this.memoryRevision,generation:this.generation}),this.post({type:"memory-time",time:this.memoryTime,revision:this.memoryRevision,generation:this.generation}))}setMemoryPreload(e,t=!1){if(this.disposed)return;const n=[],i=new Set,r=this.getLocation(),o=mt(Math.floor(r.x/16),Math.floor(r.z/16));if(this.memoryPreloadPose=this.memorySource?e.find(l=>l.dimension===this.dimension.id&&Number.isFinite(l.x)&&Number.isFinite(l.z)):void 0,this.memoryPreloadUrgent=t,this.memorySource)for(const l of e){if(l.dimension!==this.dimension.id||!Number.isFinite(l.x)||!Number.isFinite(l.z))continue;const h=Math.floor(l.x/16),d=Math.floor(l.z/16),u=mt(h,d);if(!(u===o||i.has(u))&&(i.add(u),n.push({x:h,z:d}),n.length===6))break}const a=this.memoryPreloadPose?this.memoryRequiredChunks(this.memoryPreloadPose):new Map,c=`${n.map(l=>mt(l.x,l.z)).join(";")}|${[...a.keys()].join(";")}|${t}`;c!==this.memoryPreloadSignature&&(this.memoryPreloadCenters=n,this.memoryPreloadSignature=c,this.updateStreaming())}getMemoryBufferStatus(e){if(this.disposed||e?.dimension!==void 0&&e.dimension!==this.dimension.id)return{ready:!1,loaded:0,total:0};const t=e||this.getLocation();if(!Number.isFinite(t.x)||!Number.isFinite(t.z))return{ready:!1,loaded:0,total:0};const n=this.getLocation();mt(Math.floor(n.x/16),Math.floor(n.z/16))!==this.streamingCenter&&this.updateStreaming();const r=Math.floor(t.x/16),o=Math.floor(t.z/16),a=mt(r,o)===this.streamingCenter?this.desired:this.chunkWindow(r,o);let c=0;for(const[d,u]of a)this.regions.get(u.region)?.state==="ready"&&this.meshReady(d)&&c++;const l=a.size,h=!this.memorySource||this.memoryAcknowledgedRevision===this.memoryRevision;return{ready:l===0||this.initialized&&h&&c===l,loaded:c,total:l}}getMemoryPresentationStatus(e){const t=e||this.memoryFollow||this.getLocation();if(this.disposed||!this.initialized||"dimension"in t&&t.dimension!==this.dimension.id||!Number.isFinite(t.x)||!Number.isFinite(t.z))return{ready:!1,loaded:0,total:0};const n=this.getLocation();mt(Math.floor(n.x/16),Math.floor(n.z/16))!==this.streamingCenter&&this.updateStreaming();const i=this.memoryRequiredChunks(e);let r=0;for(const[a,c]of i)this.regions.get(c)?.state==="ready"&&this.meshes.has(a)&&!this.memoryStaleMeshes.has(a)&&r++;return{ready:(!this.memorySource||this.memoryAcknowledgedRevision===this.memoryRevision)&&r===i.size,loaded:r,total:i.size}}memoryRequiredChunks(e){const t=e||this.memoryFollow||this.getLocation(),n=new Map,i=(u,f)=>{const g=hn(Math.floor(u/4),Math.floor(f/4)),_=this.regionIndex.get(g),m=(u%4+4)%4,p=(f%4+4)%4;_&&_.chunks&1<<m*4+p&&n.set(mt(u,f),g)},r=Math.floor(t.x/16),o=Math.floor(t.z/16);for(let u=-1;u<=1;u++)for(let f=-1;f<=1;f++)i(r+u,o+f);const a=e||this.memoryFollow,c=a?.actionTarget;c&&Math.hypot(c.x+.5-t.x,c.z+.5-t.z)<=6&&i(Math.floor(c.x/16),Math.floor(c.z/16));const l=this.camera.position.clone().sub(this.controls.target),h=this.mode==="fly"?new C:a?Ml(this.memoryRequestedOffset,this.memoryAppliedOffset,l):l,d=new C(t.x,t.y+1,t.z);a&&d.add(this.memoryPanOffset);for(const u of Ja(d,h.clone().normalize(),h.length()+1)){const[f,g]=u.split(",").map(Number);i(f,g)}return n}memoryStreamingPriority(e,t){const n=mt(e.x,e.z);if(t.has(n))return 0;if(this.memoryPreloadRequired.has(n))return 1;const i=this.memoryPreloadCenters[0];return this.memorySource&&i&&Math.abs(e.x-i.x)<=1&&Math.abs(e.z-i.z)<=1?1:2}clearMemoryPreload(){this.memoryPreloadCenters=[],this.memoryPreloadSignature="",this.memoryPreloadPose=void 0,this.memoryPreloadRequired.clear(),this.memoryPreloadUrgent=!1}setMemoryReplayClock(e,t){(!Number.isFinite(this.memoryReplayClock)||e<this.memoryReplayClock)&&(this.memoryPoseReset=!0),this.memoryReplayClock=e,this.memoryInteractions.setReplayClock(e,t),this.memoryContainers.setReplayClock(e,t)}setMemoryPlayback(e){e||this.stopIslandMechanism(),this.memoryPlaying=e,this.memoryInteractions.setPlaying(e),this.memoryContainers.setPlaying(e)}getMemoryActionKind(e){return this.memoryInteractions.actionKindFor(e)}invalidateMemoryContainerGeometry(){this.memoryContainerGeometryRevision++,this.memoryGroundCache.clear(),this.memoryStanceCache.clear(),this.memoryReachCache.clear(),this.memoryCameraKey=""}resetMemoryEffects(){this.memoryPoseReset=!0,this.memoryEventOrder=0,this.memoryInitialViewPending=!this.orbitUserAdjusted,this.memoryDefaultTravel=void 0,this.memoryDefaultViewAttempt=void 0,this.memoryDefaultRecoveries=0,this.memoryInitialViewFromTravel=!1,this.memoryDefaultReframe=void 0,this.memoryEffectsGeneration++,this.memoryInteractions.reset(),this.memoryGroundCache.clear(),this.memoryStanceCache.clear(),this.memoryReachCache.clear(),this.memoryTargetBounds.clear(),this.memoryCameraKey="",this.memoryCameraOffset=void 0,this.memoryContainers.reset(),this.memoryInteractionLookups.clear(),this.memoryMiningPreviews.clear(),this.islandMachines.clear(),this.machineSignature="";for(const e of this.memoryInspections.values())e.reject(new Error("回忆时间已改变"));this.memoryInspections.clear(),this.renderDirty=!0}showMemoryEvent(e,t,n="",i,r,o,a=!0,c=!1){this.presentMemoryEvent(e,t,n,i,r,o,a,c?"particles":"all")}showMemoryContainerEvent(e,t,n="",i,r,o,a=!1){this.presentMemoryEvent(e,t,n,i,r,o,!0,a?"restore":"container")}presentMemoryEvent(e,t,n,i,r,o,a,c){if(t!==this.dimension.id||!this.memorySource||this.disposed)return;const[l,,h,d,u,f,g,_]=e,m={x:h,y:d,z:u},p=++this.memoryEventOrder,v=r||this.memorySource.eventName(_),y=c==="all"||c==="particles";y&&v==="break"&&n&&this.memoryMiningPreviews.set(n,-l);const x=this.memorySource.palette[/break|leaf_decay|support_removed/.test(v)?f:g],S=o?.name||i||x?.name||"",T=o||(!i||i===x?.name?x:void 0),R=this.memoryEffectsGeneration,D=(E,w=T)=>{if(R!==this.memoryEffectsGeneration||t!==this.dimension.id||this.disposed)return;const I=this.memoryPoses.get(n),O=y&&U_(I,l,m)&&I&&this.memoryCanReach(I,m)?n:"",k=O&&I?I:{x:h+.5,y:d,z:u+.5};let V,W,G=-1;const j=v==="break"||v==="support_removed"?()=>{if(R!==this.memoryEffectsGeneration||this.disposed)return;const ae=this.meshes.get(mt(Math.floor(h/16),Math.floor(u/16)));if(ae===V&&G===this.memoryContainerGeometryRevision)return W;if(V=ae,G=this.memoryContainerGeometryRevision,W=void 0,ae){ae.updateMatrixWorld(!0);const xe=new Ot(new C(h+.45,d-32,u+.45),new C(h+.8,d+.01,u+.8));W=X_(m,fi([ae],xe),this.memoryGroundRaycaster,this.memoryPassableTiles,this.memoryClimbTiles,this.memoryAtlas)}return W}:void 0,H=Un(w?.name===E?w:{name:E},this.memoryAtlas||{}),se={player:O,kind:v,block:H.name,blockState:H,target:m,origin:k,time:l,order:p,dropGround:j,recorded:a};c==="restore"?(this.memoryContainers.restore({...se,player:n}),this.invalidateMemoryContainerGeometry()):(y&&this.memoryInteractions.show(se),c!=="particles"&&this.memoryContainers.show({...se,player:n})),this.renderDirty=!0};if(!S&&/interact|container_|item_use/.test(v)){const E=`${h},${d},${u}`;let w=this.memoryInteractionLookups.get(E);if(!w){if(this.memoryInteractionLookups.size>=16){D("");return}w=this.inspectMemoryBlock(h,d,u),this.memoryInteractionLookups.set(E,w)}const I=w;I.then(O=>D(O.currentName||"",{name:O.currentName||"",states:O.currentStates})).catch(()=>D("")).finally(()=>{this.memoryInteractionLookups.get(E)===I&&this.memoryInteractionLookups.delete(E)})}else D(S)}async updateIslandMachines(){if(!this.islandMachineIndex||this.machineChecking||!this.initialized||this.disposed||this.islandMechanism?.running||this.memorySource&&this.memoryAcknowledgedRevision!==this.memoryRevision)return;const e=this.islandMachineIndex.near(this.dimension.id,this.getLocation()).filter(o=>[o.source,o.power,o.output].every(([a,,c])=>this.meshes.has(mt(Math.floor(a/16),Math.floor(c/16))))),t=`${e.map(Br).join(";")}:${this.memorySource?this.memoryRevision:"final"}`;if(t===this.machineSignature)return;const n=this.generation,i=this.memoryEffectsGeneration,r=this.memoryRevision;this.machineChecking=!0;try{const o=await Promise.all(e.map(async a=>{if(!this.memorySource)return a.active?a:void 0;const[c,l]=await Promise.all([this.inspectMemoryBlock(...a.power),this.inspectMemoryBlock(...a.output)]);return z_(c.currentName||"",l.currentName||"")?a:void 0}));if(this.disposed||this.islandMechanism?.running||n!==this.generation||i!==this.memoryEffectsGeneration||r!==this.memoryRevision)return;this.islandMachines.setMachines(o.filter(a=>!!a))&&(this.renderDirty=!0),this.machineSignature=t}catch{}finally{this.machineChecking=!1}}memoryCanReach(e,t){const n=this.memoryTargetBounds.get(`${t.x},${t.y},${t.z}`)||[0,0,0,1,1,1],i=[e.x,e.y,e.z,t.x,t.y,t.z,...n].join(","),r=this.memoryReachCache.get(i);if(r!==void 0)return r;const o=new C(e.x,e.y+1.5,e.z),a=new C(t.x+.5,t.y+.5,t.z+.5);if(o.distanceTo(a)>5.2)return!1;const l=new C(t.x+n[0],t.y+n[1],t.z+n[2]),h=new C(t.x+n[3],t.y+n[4],t.z+n[5]),d=[],u=new Ot().setFromPoints([o,a,l,h]).expandByScalar(.1);for(let v=Math.floor(u.min.x/16);v<=Math.floor(u.max.x/16);v++)for(let y=Math.floor(u.min.z/16);y<=Math.floor(u.max.z/16);y++){const x=this.meshes.get(mt(v,y));x&&(x.updateMatrixWorld(!0),d.push(x))}const f=fi(d,u),g=new C,_=this.memoryAtlas?.atlas,m=(v,y=.1)=>{const x=o.distanceTo(v);return x>5.2?!1:(this.memoryGroundRaycaster.set(o,g.subVectors(v,o).normalize()),this.memoryGroundRaycaster.near=.05,this.memoryGroundRaycaster.far=Math.max(.05,x-y),!this.memoryGroundRaycaster.intersectObjects(f,!1).some(S=>{const T=_&&S.uv?Math.floor(S.uv.x*_.width/_.stride)+Math.floor((1-S.uv.y)*_.height/_.stride)*_.columns:-1;return this.memoryPassableTiles.has(T)||this.memoryClimbTiles.has(T)?!1:S.point.x<l.x-.02||S.point.x>h.x+.02||S.point.y<l.y-.02||S.point.y>h.y+.02||S.point.z<l.z-.02||S.point.z>h.z+.02}))};let p=m(a);if(!p)e:for(const[v,y,x]of[["y","x","z"],["x","y","z"],["z","x","y"]]){const S=h[v]-l[v];if(S<=0||o[v]>=l[v]&&o[v]<=h[v])continue;const T=l.clone().add(h).multiplyScalar(.5),R=Math.min(.03,S/4);T[v]=o[v]>h[v]?h[v]-R:l[v]+R;for(const[D,E]of[[.5,.5],[.25,.5],[.75,.5],[.5,.25],[.5,.75]])if(T[y]=l[y]+(h[y]-l[y])*D,T[x]=l[x]+(h[x]-l[x])*E,m(T,1e-4)){p=!0;break e}}return this.memoryReachCache.size>=2048&&this.memoryReachCache.clear(),this.memoryReachCache.set(i,p),p}findMemoryGround(e,t,n){if(![e,t,n].every(Number.isFinite))return null;const i=`${Math.round(e*8)},${Math.round(t*4)},${Math.round(n*8)}`;if(this.memoryGroundCache.has(i))return this.memoryGroundCache.get(i)||null;const r=[];for(let h=-1;h<=1;h++)for(let d=-1;d<=1;d++){const u=this.meshes.get(mt(Math.floor(e/16)+h,Math.floor(n/16)+d));u&&(u.updateMatrixWorld(!0),r.push(u))}if(!r.length)return null;const o=_l(r,e,t,n),a=this.meshes.get(mt(Math.floor(e/16),Math.floor(n/16))),c=nv(a?.userData.memoryWater,e,t+.4,n),l=V_(e,t,n,o,this.memoryGroundRaycaster,this.memoryPassableTiles,this.memoryAtlas,this.memoryClimbTiles,c);return this.memoryGroundCache.size>2048&&this.memoryGroundCache.clear(),this.memoryGroundCache.set(i,l),l}isMemoryBodyClear(e,t,n){if(![e,t,n].every(Number.isFinite))return!1;const i=[];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){const a=this.meshes.get(mt(Math.floor(e/16)+r,Math.floor(n/16)+o));a&&(a.updateMatrixWorld(!0),i.push(a))}return i.length>0&&W_(e,t,n,_l(i,e,t,n),this.memoryGroundRaycaster,this.memoryPassableTiles,this.memoryAtlas,this.memoryClimbTiles)}resolveMemoryPose(e){if(e.dimension!==this.dimension.id)return e;const t=e.actionTarget,n=this.memoryPoses.get(e.player),i=t||(e.inferredWorkPosition&&e.actionKind==="activity"?n?.actionTarget:void 0);if(!this.memoryPoseReset&&!e.teleport&&e.inferredWorkPosition&&n?.inferredWorkPosition&&n.dimension===e.dimension&&i&&n.actionTarget&&e.actionTime!==void 0&&n.actionTime!==void 0&&Math.abs(e.actionTime-n.actionTime)<=20&&Math.hypot(e.x-n.x,e.z-n.z)<=3&&Math.hypot(i.x+.5-n.x,i.z+.5-n.z)<=4.1&&Math.abs(i.y+.5-n.y-1.4)<=3.5){const u=this.findMemoryGround(n.x,n.y,n.z);if(u&&!u.climbing&&!u.swimming&&Math.abs(u.y-n.y)<.08&&this.memoryCanReach(u,i))return{...e,...u,actionTarget:i,moving:!1,climbing:!1,swimming:!1}}const r=this.findMemoryGround(e.x,e.y,e.z);if(r&&(!t||e.moving))return{...e,climbing:!1,swimming:!1,...r};const o=!this.memoryPoseReset&&n&&!e.teleport&&n.dimension===e.dimension&&Math.hypot(n.x-e.x,n.z-e.z)<3?n:void 0,a=[e.x,e.y,e.z,t?.x,t?.y,t?.z,o?.x,o?.y,o?.z,e.moving?1:0].join(","),c=this.memoryStanceCache.get(a);if(c)return{...e,...c};const l=u=>(this.memoryStanceCache.size>=1024&&this.memoryStanceCache.clear(),this.memoryStanceCache.set(a,u),{...e,...u}),h=r?[r]:[];if(o&&!e.moving){const u=this.findMemoryGround(o.x,o.y,o.z);u&&h.push(u)}for(const[u,f]of[[.5,0],[-.5,0],[0,.5],[0,-.5],[1,0],[-1,0],[0,1],[0,-1]]){const g=this.findMemoryGround(e.x+u,e.y,e.z+f);g&&h.push(g)}if(!e.moving&&t)for(const[u,f]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1],[2,0],[-2,0],[0,2],[0,-2]])for(const g of[e.y,Math.min(e.y+1,t.y-1)]){const _=this.findMemoryGround(t.x+.5+u,g,t.z+.5+f);_&&h.push(_)}const d=h.map(u=>{let f=Math.hypot(u.x-e.x,u.z-e.z)+Math.abs(u.y-e.y)*3.5;return o&&!e.moving&&(f+=Math.hypot(u.x-o.x,u.z-o.z)*.8),t&&!e.moving&&(this.memoryCanReach(u,t)||(f+=80)),{foot:u,score:f}}).sort((u,f)=>u.score-f.score);if(d[0]){const u=d[0].foot,f=t&&!e.moving?Math.atan2(t.x+.5-u.x,t.z+.5-u.z):e.yaw;return l({yaw:f,climbing:!1,swimming:!1,...u})}return n&&!e.teleport&&n.dimension===e.dimension&&Math.hypot(n.x-e.x,n.z-e.z)<3&&this.findMemoryGround(n.x,n.y,n.z)?{...e,x:n.x,y:n.y,z:n.z,moving:!1}:l({online:!1})}setMemoryPlayers(e,t=this.memoryTime){const n=new Set;let i=!1;for(const a of e){if(a.dimension!==this.dimension.id||!a.online)continue;this.memoryPoses.set(a.player,a),n.add(a.player);let c=this.memoryPlayers.get(a.player);if(!c){i=!0,c=new Ze,c.rotation.y=a.yaw;const h=(_,m,p,v,y=c)=>{const x=new Pe(this.memoryPlayerGeometry,m);return x.name=_,x.scale.set(...p),x.position.set(...v),y.add(x),x},d=new Ze;d.name="head",d.position.set(0,1.56,0),c.add(d),h("face",this.memorySkinMaterial,[.48,.48,.48],[0,0,0],d),h("hair",this.memoryPantsMaterial,[.49,.15,.49],[0,.17,-.005],d),h("body",this.memoryPlayerMaterial,[.5,.62,.28],[0,1.03,0]);for(const _ of[-1,1])h("eye",this.memoryPantsMaterial,[.065,.065,.02],[_*.1,.025,.246],d);for(const _ of[-1,1]){const m=new Ze;m.name=`arm${_}`,m.position.set(_*.36,1.28,0),c.add(m),h("sleeve",this.memoryPlayerMaterial,[.18,.32,.25],[0,-.12,0],m),h("hand",this.memorySkinMaterial,[.18,.28,.25],[0,-.4,0],m);const p=new Ze;p.name=`leg${_}`,p.position.set(_*.13,.72,0),c.add(p),h("trouser",this.memoryPantsMaterial,[.22,.72,.25],[0,-.36,0],p)}const u=document.createElement("canvas");u.height=48;const f=u.getContext("2d");f.font="26px sans-serif",u.width=Math.min(512,Math.max(80,Math.ceil(f.measureText(a.name.slice(0,32)).width)+24)),f.fillStyle="rgba(24,35,32,.65)",f.fillRect(0,0,u.width,48),f.fillStyle="#fff2d7",f.textAlign="center",f.font="26px sans-serif",f.fillText(a.name.slice(0,32),u.width/2,34);const g=new Wn(new Ji({map:new Ws(u),depthTest:!0,depthWrite:!1}));g.name="memory-nameplate",g.visible=a.player!==this.memoryFollow?.player,g.position.y=2.08,g.scale.set(u.width/190,48/190,1),c.add(g),this.memoryPlayers.set(a.player,c),this.scene.add(c),c.rotation.y=a.yaw}const l=c.rotation.y;if((c.position.x!==a.x||c.position.y!==a.y||c.position.z!==a.z)&&(i=!0),c.position.set(a.x,a.y,a.z),(this.memoryPoseReset||a.teleport)&&(c.rotation.y=a.yaw),this.memoryInteractions.synchronizeActor(a),this.memoryInteractions.animateAvatar(a.player,c,!!a.moving,!!a.climbing,!!a.swimming),c.rotation.y!==l&&(i=!0),this.memoryPlaying&&a.actionKind==="break"&&a.actionTarget&&a.actionTime!==void 0&&a.actionTime>t&&a.actionTime-t<=.85&&this.memoryCanReach(a,a.actionTarget)&&this.memoryMiningPreviews.get(a.player)!==a.actionTime){const h={...a.actionTarget},d={x:a.x,y:a.y,z:a.z},u=a.actionTime,f=this.memoryEffectsGeneration;this.memoryMiningPreviews.set(a.player,u),this.inspectMemoryBlock(h.x,h.y,h.z).then(g=>{this.disposed||f!==this.memoryEffectsGeneration||this.memoryMiningPreviews.get(a.player)!==u||this.memoryTime>=u||!g.currentName||g.currentName==="minecraft:air"||(this.memoryInteractions.show({player:a.player,kind:"mine_prepare",block:g.currentName,blockState:{name:g.currentName,states:g.currentStates},target:h,origin:d,time:u}),this.renderDirty=!0)}).catch(()=>{})}}this.memoryPoseReset=!1;for(const[a,c]of this.memoryPlayers)n.has(a)||(this.removeMemoryPlayer(a,c),i=!0);const r=[...this.memoryPlayers].filter(([a,c])=>a!==this.memoryFollow?.player&&(!this.memoryFollow||Math.hypot(c.position.x-this.memoryFollow.x,c.position.z-this.memoryFollow.z)>2.2)).sort((a,c)=>a[1].position.distanceToSquared(this.camera.position)-c[1].position.distanceToSquared(this.camera.position)).slice(0,6),o=new Set(r.map(([a])=>a));for(const[a,c]of this.memoryPlayers){const l=c.getObjectByName("memory-nameplate");l&&l.visible!==o.has(a)&&(l.visible=o.has(a),i=!0)}this.updateMemoryCameraVisibility(),i&&(this.renderDirty=!0)}updateMemoryCameraVisibility(){const e=!!this.memoryRequestedOffset&&!!this.memoryAppliedOffset&&this.memoryRequestedOffset.length()>this.memoryAppliedOffset.length()+.1;for(const[t,n]of this.memoryPlayers){let i=!0;e&&t===this.memoryFollow?.player&&(i=this.camera.position.distanceTo(n.position.clone().add(new C(0,1,0)))>=(n.visible?1.2:1.5)),n.visible!==i&&(n.visible=i,this.renderDirty=!0)}}followMemoryPlayer(e){const t=this.memoryFollow,n=t?.player;if(n!==e?.player){if(this.renderDirty=!0,n){const S=this.memoryPlayers.get(n)?.getObjectByName("memory-nameplate");S&&(S.visible=!0)}if(e){const S=this.memoryPlayers.get(e.player)?.getObjectByName("memory-nameplate");S&&(S.visible=!1)}}if(!e){this.memoryDefaultViewAttempt=void 0,this.memoryFollow=void 0,this.memoryDefaultTravel=void 0,this.memoryDefaultReframe=void 0,this.memoryInitialViewFromTravel=!1,this.controls.minDistance=2,this.controls.enableDamping=!0,this.memoryCameraKey="",this.memoryCameraOffset=void 0,this.memoryCameraTarget=void 0,this.memoryAppliedOffset=void 0,this.memoryCameraFrame=0,this.memoryCameraClearSince=void 0,this.memoryCameraSafeDistance=void 0,this.updateMemoryCameraVisibility();return}this.controls.enableDamping&&(this.controls.enableDamping=!1,this.controls.update()),this.controls.minDistance=.08;const i=this.camera.position.clone().sub(this.controls.target),r=!!this.memoryAppliedOffset&&i.distanceToSquared(this.memoryAppliedOffset)>1e-8,o=this.memoryCameraTarget?this.controls.target.clone().sub(this.memoryCameraTarget):new C,a=!!t&&o.lengthSq()>1e-8;a&&this.memoryPanOffset.add(o),!this.memoryRequestedOffset&&!this.orbitUserAdjusted&&(this.memoryRequestedOffset=new C(9,7,12)),this.memoryRequestedOffset=Ml(this.memoryRequestedOffset,this.memoryAppliedOffset,i);const c=e.dimension!==this.dimension.id;c&&this.setDimension(e.dimension),this.memoryFollow=e,this.mode!=="orbit"&&this.setMode("orbit");const l=c||n!==e.player||!!t&&Math.hypot(t.x-e.x,t.y-e.y,t.z-e.z)>8;if(l&&(this.memoryDefaultViewAttempt=void 0,this.memoryInitialViewPending=!this.orbitUserAdjusted,this.memoryInitialViewFromTravel=!1,this.memoryDefaultReframe=void 0,this.memoryCameraKey="",this.memoryCameraSafeDistance=void 0,this.memoryCameraClearSince=void 0),this.orbitUserAdjusted&&(this.memoryDefaultReframe=void 0,this.memoryInitialViewFromTravel=!1),this.orbitUserAdjusted||l)this.memoryDefaultTravel=void 0;else if(e.moving)this.memoryDefaultTravel||={start:new C(t?.x??e.x,t?.y??e.y,t?.z??e.z)},this.memoryDefaultTravel.stop=void 0,this.memoryDefaultTravel.since=void 0;else if(this.memoryDefaultTravel){const S=new C(e.x,e.y,e.z),T=this.memoryDefaultTravel;S.distanceTo(T.start)<4?this.memoryDefaultTravel=void 0:!T.stop||S.distanceTo(T.stop)>.15?(T.stop=S,T.since=performance.now()):performance.now()-T.since>=200&&(this.memoryInitialViewPending=!0,this.memoryInitialViewFromTravel=!0,this.memoryCameraKey="",this.memoryDefaultTravel=void 0)}const h=new C(e.x,e.y+1,e.z),d=K_(h).add(this.memoryPanOffset),u=this.memoryRequestedOffset.clone(),f=performance.now(),g=Math.min(.05,Math.max(0,(f-(this.memoryCameraFrame||f))/1e3)),_=this.getMemoryBufferStatus().ready||this.getMemoryPresentationStatus(e).ready;_&&this.memoryDefaultReframe&&(u.copy(Z_(u,this.memoryDefaultReframe,g)),this.memoryRequestedOffset.copy(u),u.distanceToSquared(this.memoryDefaultReframe)<1e-8&&(this.memoryDefaultReframe=void 0));let m=[...d.toArray(),...u.toArray(),this.camera.aspect].join(",");if(_&&m!==this.memoryCameraKey){const S=this.memoryInitialViewPending&&!this.orbitUserAdjusted,T=new Ot().setFromPoints([d,d.clone().add(u)]).expandByScalar(.3),R=new Ot(d.clone().add(new C(-8,-1,-8)),d.clone().add(new C(8,6,8)));S&&T.union(R);const D=k=>{const V=[];for(let W=Math.floor(k.min.x/16);W<=Math.floor(k.max.x/16);W++)for(let G=Math.floor(k.min.z/16);G<=Math.floor(k.max.z/16);G++){const j=this.meshes.get(mt(W,G));j&&(j.updateMatrixWorld(!0),V.push(j))}return V},E=D(T),w=fi(E,T).filter(k=>k.material!==this.transparentMaterial),I=k=>({position:h.clone(),geometry:$_(k),aspect:this.camera.aspect}),O=(k=!1)=>{const V=[];for(let W=-1;W<=1;W++)for(let G=-1;G<=1;G++)if(W||G){const j=this.findMemoryGround(e.x+W,e.y,e.z+G);j&&!j.climbing&&Math.abs(j.y-e.y)<=.3&&V.push(new C(j.x,j.y+1,j.z))}return{actor:h,nearbyActors:V,preferExistingReadable:k,facing:new C(Math.sin(e.yaw||0),0,Math.cos(e.yaw||0)),aspect:this.camera.aspect,passableTiles:this.memoryPassableTiles,atlas:this.memoryAtlas}};if(S){this.memoryDefaultViewAttempt=I(fi(E,R).filter(V=>V.material!==this.transparentMaterial));const k=bl(d,u,w,this.memoryGroundRaycaster,O(this.memoryInitialViewFromTravel));this.memoryInitialViewFromTravel&&k.distanceToSquared(u)>1e-8?this.memoryDefaultReframe=k:(u.copy(k),this.memoryRequestedOffset.copy(u),this.memoryAppliedOffset=void 0),m=[...d.toArray(),...u.toArray(),this.camera.aspect].join(",")}if(this.memoryInitialViewPending=!1,this.memoryInitialViewFromTravel=!1,this.memoryCameraOffset=_i(d,u,w,this.memoryGroundRaycaster,{aspect:this.camera.aspect,passableTiles:this.memoryPassableTiles,atlas:this.memoryAtlas}),!S&&!this.orbitUserAdjusted&&this.memoryCameraOffset.length()<1.6&&u.length()>2.6){const k=fi(D(R),R).filter(W=>W.material!==this.transparentMaterial),V=I(k);if(j_(u,this.memoryCameraOffset,this.orbitUserAdjusted,V,this.memoryDefaultViewAttempt)){this.memoryDefaultViewAttempt=V;const W=O(),G=bl(d,u,k,this.memoryGroundRaycaster,W),j=_i(d,G,k,this.memoryGroundRaycaster,W);j.length()>=1.65&&(u.copy(G),this.memoryRequestedOffset.copy(G),this.memoryCameraOffset=j,this.memoryAppliedOffset=void 0,this.memoryCameraClearSince=void 0,this.memoryCameraSafeDistance=void 0,this.memoryDefaultReframe=void 0,this.memoryDefaultRecoveries++,m=[...d.toArray(),...u.toArray(),this.camera.aspect].join(","))}}this.memoryCameraKey=m}this.memoryCameraFrame=f;const p=this.memoryAppliedOffset?.length(),v=_&&this.memoryCameraOffset?this.memoryCameraOffset.length():Math.min(u.length(),p??u.length());(!_||r||a||this.memoryCameraClearSince===void 0||p!==void 0&&v<=p+.001||this.memoryCameraSafeDistance!==void 0&&v<this.memoryCameraSafeDistance-.02)&&(this.memoryCameraClearSince=f),this.memoryCameraSafeDistance=v,u.setLength(J_(v,r||a?void 0:p,g,(f-this.memoryCameraClearSince)/1e3));const y=d.clone().add(u),x=this.controls.target.distanceToSquared(d)>1e-10||this.camera.position.distanceToSquared(y)>1e-10;this.controls.target.copy(d),this.camera.position.copy(y),this.camera.lookAt(d),this.controls.minDistance=Math.min(.35,u.length()),this.memoryCameraTarget=d.clone(),this.memoryAppliedOffset=u.clone(),this.updateMemoryCameraVisibility(),mt(Math.floor(e.x/16),Math.floor(e.z/16))!==this.streamingCenter&&this.updateStreaming(),x&&(this.renderDirty=!0)}removeMemoryPlayer(e,t){this.memoryInteractions.forgetPlayer(e),this.memoryPoses.delete(e),t.traverse(n=>{if(n instanceof Wn){const i=n.material;i.map?.dispose(),i.dispose()}}),this.scene.remove(t),this.memoryPlayers.delete(e)}clearMemoryPlayers(){for(const[e,t]of this.memoryPlayers)this.removeMemoryPlayer(e,t);this.resetMemoryEffects()}getDiagnostics(){const e=this.memorySource?{time:this.memoryTime,revision:this.memoryRevision,acknowledgedRevision:this.memoryAcknowledgedRevision,estimated:this.memoryEstimated,regions:this.memoryLoadedRegions,preloadWindows:this.memoryPreloadCenters.length,preloadedChunks:this.streamingDesired.size-this.desired.size,buffer:this.getMemoryBufferStatus(),presentation:this.getMemoryPresentationStatus(),interactions:this.memoryInteractions.diagnostics(),containers:this.memoryContainers.diagnostics(),avatars:[...this.memoryPoses.values()].map(r=>({player:r.player,x:r.x,y:r.y,z:r.z,moving:r.moving,climbing:r.climbing,swimming:r.swimming,visible:this.memoryPlayers.get(r.player)?.visible,yaw:this.memoryPlayers.get(r.player)?.rotation.y,targetYaw:r.yaw,actionTime:r.actionTime,actionTarget:r.actionTarget}))}:void 0,t=this.memoryFollow?{requestedOffset:this.memoryRequestedOffset&&tn(this.memoryRequestedOffset),appliedOffset:this.memoryAppliedOffset&&tn(this.memoryAppliedOffset),target:tn(this.controls.target),panOffset:tn(this.memoryPanOffset),userAdjusted:this.orbitUserAdjusted,initialViewPending:this.memoryInitialViewPending,safeDistance:this.memoryCameraSafeDistance,defaultRecoveries:this.memoryDefaultRecoveries,defaultReframe:this.memoryDefaultReframe&&tn(this.memoryDefaultReframe)}:void 0;let n=0,i=0;for(const r of this.meshes.values())r.traverse(o=>{if(o instanceof Pe){const a=o.geometry;n+=(a.index?.count||a.getAttribute("position").count)/3;for(const c of Object.values(a.attributes))i+=c.array.byteLength;i+=a.index?.array.byteLength||0}});return{cameraPosition:tn(this.camera.position),cameraTarget:tn(this.controls.target),cameraFov:this.camera.fov,islandMachines:this.islandMachines.diagnostics(),mechanism:this.islandMechanism?.diagnostics(),containerOutline:{visible:this.containerOutline.visible,position:this.containerTarget?{x:this.containerTarget.x,y:this.containerTarget.y,z:this.containerTarget.z}:null,bounds:this.containerTarget?.bounds||null},memory:e&&{...e,camera:t},cachedRegions:this.regions.size,cachedRegionKeys:[...this.regions.keys()],meshes:this.meshes.size,meshKeys:[...this.meshes.keys()],workers:this.disposed?0:1,triangles:n,geometryBytes:i,pending:this.desired.size-[...this.desired.keys()].filter(r=>this.meshReady(r)).length,radius:this.distance,fetchedBytes:this.bytes,renderer:"voxel",renderCalls:this.renderer.info.render.calls,framesRendered:this.framesRendered,textureCount:this.renderer.info.memory.textures,pixelRatio:this.renderer.getPixelRatio(),yaw:this.yaw,pitch:this.pitch,mode:this.mode,cameraDirection:tn(this.camera.getWorldDirection(new C)),...this.entityRenderer?.getDiagnostics(),...this.savedEntities?.getDiagnostics(),containerState:this.containerState.status,containerTarget:this.containerTarget?{x:this.containerTarget.x,y:this.containerTarget.y,z:this.containerTarget.z,type:this.containerTarget.type,available:this.containerTarget.available}:null,containerRequests:this.containerRequests,containerCachedRegions:this.containerRecords.size,containerOpen:this.containerState.status!=="closed",containerPreparing:this.containerPreparing}}zoom(e){if(!(!this.active||this.containerState.status!=="closed"||this.containerPreparing)){if(this.mode==="orbit"){this.orbitUserAdjusted=!0,this.memoryFollow||(this.memoryRequestedOffset=void 0,this.memoryPanOffset.set(0,0,0));const t=this.camera.position.clone().sub(this.controls.target),n=nn.clamp(t.length()/Math.max(.1,e),this.controls.minDistance,this.controls.maxDistance);t.setLength(n),this.camera.position.copy(this.controls.target).add(t),this.controls.update()}else this.camera.position.addScaledVector(this.camera.getWorldDirection(new C),(e-1)*12);this.updateStreaming(!0)}}move(e){if(!this.active||this.containerState.status!=="closed"||this.containerPreparing||this.mode!=="fly")return;const t=(...c)=>c.some(l=>this.keys.has(l));let n=(t("KeyD","ArrowRight")?1:0)-(t("KeyA","ArrowLeft")?1:0)+this.touchMove.x,i=(t("KeyS","ArrowDown")?1:0)-(t("KeyW","ArrowUp")?1:0)+this.touchMove.z,r=(t("Space")?1:0)-(t("ShiftLeft","ShiftRight","KeyQ")?1:0)+this.touchMove.y;const o=Math.hypot(n,r,i);if(!o)return;o>1&&(n/=o,r/=o,i/=o);const a=e*(t("ControlLeft","ControlRight")?48:16);this.camera.position.x+=(Math.cos(this.yaw)*n+Math.sin(this.yaw)*i)*a,this.camera.position.z+=(-Math.sin(this.yaw)*n+Math.cos(this.yaw)*i)*a,this.camera.position.y=nn.clamp(this.camera.position.y+r*a,this.dimension.bounds.minY-24,this.dimension.bounds.maxY+180)}frame(e){if(this.disposed)return;const t=Math.max(0,(e-(this.lastFrame||e))/1e3),n=Math.min(.05,t);if(this.lastFrame=e,this.active&&(!this.memorySource||this.memoryPlaying)&&this.islandMachines.update(n)&&(this.renderDirty=!0),this.active&&e-this.lastMachineCheck>800&&(this.lastMachineCheck=e,this.updateIslandMachines()),this.active&&this.memoryPlaying){this.memoryInteractions.update(Math.min(.25,t))&&(this.renderDirty=!0),this.memoryContainers.update(Math.min(.25,t))&&(this.invalidateMemoryContainerGeometry(),this.renderDirty=!0);for(const[i,r]of this.memoryPlayers){const o=this.memoryPoses.get(i);if(o){const a=r.rotation.y;r.rotation.y=L_(a,o.yaw,n),this.memoryInteractions.animateAvatar(i,r,!!o.moving,!!o.climbing,!!o.swimming),(o.moving||o.swimming||r.rotation.y!==a)&&(this.renderDirty=!0)}}}this.active&&this.islandMechanism?.update(t)&&(this.renderDirty=!0),this.move(n),this.mode==="orbit"&&this.containerState.status==="closed"&&!this.containerPreparing&&this.controls.update(),this.updateFog(),e-this.lastStream>220&&(this.lastStream=e,this.updateStreaming()),e-this.lastPosition>150&&(this.lastPosition=e,this.emitPosition(),this.updateIslandMechanismPrompt()),this.updateContainerOutline(),this.active&&this.mode==="fly"&&this.containerState.status==="closed"&&!this.containerPreparing&&e-this.containerTargetChecked>350&&!this.containerPicking&&(this.camera.position.distanceToSquared(this.containerTargetPosition)>1e-8||1-Math.abs(this.camera.quaternion.dot(this.containerTargetQuaternion))>1e-8)&&(this.containerTargetChecked=e,this.refreshContainerTarget()),(this.camera.position.distanceToSquared(this.renderedPosition)>1e-12||1-Math.abs(this.camera.quaternion.dot(this.renderedQuaternion))>1e-12)&&(this.renderDirty=!0),this.active&&this.renderDirty&&(this.renderer.render(this.scene,this.camera),this.renderedPosition.copy(this.camera.position),this.renderedQuaternion.copy(this.camera.quaternion),this.renderDirty=!1,this.framesRendered++),this.animation=requestAnimationFrame(i=>this.frame(i))}emitPosition(){this.callbacks.onPosition?.(this.getLocation())}updateFog(){if(!(this.scene.fog instanceof Rs))return;const e=this.mode==="orbit"?this.camera.position.distanceTo(this.controls.target)*.7:0,t=this.distance*12+e,n=this.distance*16+18+e;(this.scene.fog.near!==t||this.scene.fog.far!==n)&&(this.scene.fog.near=t,this.scene.fog.far=n,this.renderDirty=!0)}chunkWindow(e,t,n=0,i=this.distance){const r=new Map;for(let o=-i;o<=i;o++)for(let a=-i;a<=i;a++){if(o*o+a*a>i*i+i)continue;const c=e+o,l=t+a,h=Math.floor(c/4),d=Math.floor(l/4),u=hn(h,d),f=this.regionIndex.get(u),g=(c%4+4)%4,_=(l%4+4)%4;!f||!(f.chunks&1<<g*4+_)||r.set(mt(c,l),{x:c,z:l,region:u,priority:n+o*o+a*a})}return r}updateStreaming(e=!1){if(!this.initialized||this.disposed)return;const t=this.getLocation(),n=Math.floor(t.x/16),i=Math.floor(t.z/16),r=this.chunkWindow(n,i),o=this.distance;this.desired=r,this.streamingCenter=mt(n,i);const a=new Map(r),c=o*o+o+1,l=Math.min(256,Math.max(48,r.size*4));for(const[v,y]of this.memoryPreloadCenters.entries()){const x=[...this.chunkWindow(y.x,y.z,c*(v+1))].sort((S,T)=>S[1].priority-T[1].priority);for(const[S,T]of x){if(a.size-r.size>=l)break;a.has(S)||a.set(S,T)}}const h=this.memorySource?this.memoryRequiredChunks():new Map;this.memoryPreloadRequired=this.memoryPreloadPose?this.memoryRequiredChunks(this.memoryPreloadPose):new Map;for(const[v,y]of new Map([...h,...this.memoryPreloadRequired]))if(!a.has(v)){const[x,S]=v.split(",").map(Number);a.set(v,{x,z:S,region:y,priority:(x-n)**2+(S-i)**2})}if(this.memorySource&&!this.memoryPreloadCenters.length){const v=[...this.chunkWindow(n,i,c,o+2)].sort((y,x)=>y[1].priority-x[1].priority);for(const[y,x]of v){if(a.size-r.size>=l)break;a.has(y)||a.set(y,x)}}this.streamingDesired=a;const d=performance.now(),u=new Set;for(const v of a.values()){u.add(v.region);const y=this.regions.get(v.region);y&&(y.used=d)}const f=o+2,g=new Set(this.memorySource?[...this.regions].filter(([v,y])=>!u.has(v)&&y.state==="ready"&&d-y.used<15e3).sort((v,y)=>y[1].used-v[1].used).slice(0,8).map(([v])=>v):[]);for(const v of this.meshes.keys()){const[y,x]=v.split(",").map(Number),S=g.has(hn(Math.floor(y/4),Math.floor(x/4)));!a.has(v)&&!S&&(Math.abs(y-n)>f||Math.abs(x-i)>f)&&this.removeMesh(v)}for(const[v,y]of this.regions){if(u.has(v)||g.has(v))continue;const x=y.definition.x*4+1.5-n,S=y.definition.z*4+1.5-i;(Math.abs(x)>o+6||Math.abs(S)>o+6)&&(y.controller?.abort(),this.regions.delete(v),this.entityRenderer?.removeRegion(v),this.savedEntities?.removeRegion(v),this.post({type:"evict",key:v}),this.invalidateNeighbours(y.chunks||[]))}for(const[v,y]of this.meshes){const x=r.has(v);y.visible!==x&&(y.visible=x,this.renderDirty=!0)}this.syncEntityOverlays();const _=[...a.values()].sort((v,y)=>this.memoryStreamingPriority(v,h)-this.memoryStreamingPriority(y,h)||v.priority-y.priority),m=new Set(h.values());if(this.memoryPreloadUrgent)for(const v of this.memoryPreloadRequired.values())m.add(v);const p=this.memorySource?6:3;for(const v of _){if(this.loading>=p)break;if(this.memorySource&&!m.has(v.region)&&this.loading>=p-2)continue;const y=this.regions.get(v.region);if(!y||y.state==="error"&&(y.retry||0)<d){const x=this.regionIndex.get(v.region);this.fetchRegion(v.region,x)}}this.scheduleMesh(),this.emitStatus(e)}async fetchRegion(e,t){const n=new AbortController,i=this.generation,r=this.memorySource,o={definition:t,state:"loading",controller:n,used:performance.now()};this.regions.set(e,o),this.loading++;try{const a=this.entityRegionIndex.get(e),c=this.savedEntityRegions.get(e),l=new ArrayBuffer(8);new Uint8Array(l).set([83,86,82,50]);const[h,d,u,f,g]=await Promise.all([t.file?fetch(Pn(t.file),{signal:n.signal}):Promise.resolve(new Response(l)),a?fetch(Pn(a.file),{signal:n.signal}):void 0,r?.region(this.dimension.id,t.x,t.z,n.signal),r?.repairRegion?.(this.dimension.id,t.x,t.z,n.signal),c?fetch(Pn(c.file),{signal:n.signal}):void 0]);if(!h.ok)throw new Error(`地图区块下载失败（${h.status}）`);const[_,m,p]=await Promise.all([h.arrayBuffer(),d&&a?bh(d,a):[],g&&c?ri(g).then(y=>y_(y,c)):[]]);if(this.disposed||i!==this.generation||this.regions.get(e)!==o)return;this.bytes+=Number(h.headers.get("content-length"))||t.bytes||_.byteLength,a&&(this.bytes+=Number(d?.headers.get("content-length"))||a.bytes),this.entityRenderer?.setRegion(e,m),this.savedEntities?.setRegion(e,p),c&&(this.bytes+=Number(g?.headers.get("content-length"))||c.bytes),u&&this.memoryCallbacks.onEvents?.(u,this.dimension.id,e);const v=u?.flatMap((y,x)=>{const S=r?.eventState?.(y);return S?[[x,...S]]:[]});this.post({type:"region",key:e,x:t.x,z:t.z,buffer:_,entities:m,generation:i,memoryEvents:u,memoryEventStates:v,memoryRepair:f},[_])}catch(a){if(this.disposed||i!==this.generation||this.regions.get(e)!==o)return;a instanceof DOMException&&a.name==="AbortError"?this.regions.delete(e):(o.state="error",o.retry=performance.now()+12e3,this.callbacks.onError?.(a instanceof Error?a.message:"地图区块下载失败"))}finally{i===this.generation&&(this.loading=Math.max(0,this.loading-1)),this.emitStatus(),i===this.generation&&this.memorySource&&!this.disposed&&this.updateStreaming()}}scheduleMesh(){if(this.pendingMesh||!this.initialized||this.disposed||this.memorySource&&this.memoryAcknowledgedRevision!==this.memoryRevision)return;const e=this.memorySource?this.memoryRequiredChunks():new Map,t=[...this.streamingDesired.entries()].filter(([r,o])=>(!this.meshes.has(r)||this.dirtyMeshes.has(r))&&this.regions.get(o.region)?.state==="ready").sort((r,o)=>this.memoryStreamingPriority(r[1],e)-this.memoryStreamingPriority(o[1],e)||r[1].priority-o[1].priority)[0];if(!t)return;const[n,i]=t;this.dirtyMeshes.delete(n),this.pendingMesh=n,this.pendingMemoryRevision=this.memorySource?this.memoryRevision:void 0,this.post({type:"mesh",region:i.region,x:i.x,z:i.z,generation:this.generation,memoryRevision:this.pendingMemoryRevision})}onWorker(e){if(!this.disposed){if(e.type==="ready"){this.workerReady?.(),this.workerReady=void 0;return}if(e.type==="memory-inspect"){const t=this.memoryInspections.get(e.requestId);if(this.memoryInspections.delete(e.requestId),!t)return;if(e.generation!==this.generation){t.reject(new Error("读取期间地图维度已切换"));return}e.block.interactionBounds&&(this.memoryTargetBounds.size>=256&&this.memoryTargetBounds.clear(),this.memoryTargetBounds.set(`${e.block.x},${e.block.y},${e.block.z}`,e.block.interactionBounds),this.memoryStanceCache.clear()),t.resolve(e.block);return}if(!(e.generation!==void 0&&e.generation!==this.generation)){if(e.type==="region"){const t=this.regions.get(e.key);if(!t){this.post({type:"evict",key:e.key});return}t.state="ready",t.chunks=new Set(e.chunks),t.controller=void 0,e.memoryStats&&e.memoryStats.revision===this.memoryRevision&&(this.memoryEstimated=e.memoryStats.estimated,this.memoryLoadedRegions=e.memoryStats.regions,this.memoryCallbacks.onStatus?.(this.memoryEstimated,this.memoryLoadedRegions)),this.invalidateNeighbours(e.chunks),this.scheduleMesh()}else if(e.type==="memory"){if(this.invalidateNeighbours(e.chunks,!0),e.revision!==this.memoryRevision)return;this.memoryAcknowledgedRevision=e.revision,this.containerTargetPosition.x=1/0,this.memoryEstimated=e.estimated,this.memoryLoadedRegions=e.regions,this.memoryCallbacks.onStatus?.(e.estimated,e.regions),this.scheduleMesh()}else if(e.type==="mesh"){if(this.memorySource&&e.memoryRevision!==this.memoryRevision){this.pendingMesh===e.key&&this.pendingMemoryRevision===e.memoryRevision&&(this.pendingMesh=void 0,this.pendingMemoryRevision=void 0),this.scheduleMesh();return}if(this.pendingMesh===e.key&&(this.pendingMesh=void 0,this.pendingMemoryRevision=void 0),this.streamingDesired.get(e.key)){this.removeMesh(e.key,!0);const n=new Ze;n.userData.memoryWater=e.waterSections,n.userData.visibleSigns=e.visibleSigns||[],n.userData.visibleBlockEntities=e.visibleBlockEntities,n.visible=this.desired.has(e.key);const[i,r]=e.key.split(",").map(Number);n.position.set(i*16,0,r*16),this.addGeometry(n,e.opaque,this.opaqueMaterial),this.addGeometry(n,e.transparent,this.transparentMaterial),this.memoryContainers.setChunk(e.key,e.memoryContainers||[],n),this.meshes.set(e.key,n),this.memoryStaleMeshes.delete(e.key),this.memoryGroundCache.clear(),this.memoryStanceCache.clear(),this.memoryReachCache.clear(),this.memoryTargetBounds.clear(),this.memoryCameraKey="",this.scene.add(n),this.containerTargetPosition.x=1/0,this.syncEntityOverlays(),this.renderDirty=!0}this.scheduleMesh()}else if(e.type==="error"){e.key===this.pendingMesh&&(this.pendingMesh=void 0);const t=e.key?this.regions.get(e.key):void 0;t&&(t.state="error",t.retry=performance.now()+15e3),this.callbacks.onError?.(e.message),this.scheduleMesh()}this.emitStatus()}}}addGeometry(e,t,n){if(!t.positions.length)return;const i=new kt;i.setAttribute("position",new Lt(t.positions,3)),i.setAttribute("normal",new Lt(t.normals,3,!0)),i.setAttribute("uv",new Lt(t.uvs,2)),i.setAttribute("color",new Lt(t.colors,3,!0)),i.setIndex(new Lt(t.indices,1)),i.computeBoundingSphere();const r=new Pe(i,n);r.renderOrder=n===this.transparentMaterial?1:0,e.add(r)}syncEntityOverlays(){const e=new Set([...this.desired.keys()].filter(r=>this.meshes.has(r))),t=new Set;for(const r of e)for(const o of this.meshes.get(r).userData.visibleSigns)t.add(o.join(","));const n=!this.memorySource||this.memoryTime>=(this.memorySource.manifest.finalMapTime??1/0),i=this.memorySource?new Set([...e].flatMap(r=>this.meshes.get(r)?.userData.visibleBlockEntities||[])):void 0;this.entityRenderer?.sync(e,this.camera.position,t,n,i)&&(this.renderDirty=!0),this.savedEntities?.sync(e,this.camera.position)&&(this.renderDirty=!0)}invalidateNeighbours(e,t=!1){for(const n of e){const[i,r]=n.split(",").map(Number);for(const[o,a]of[[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const c=mt(i+o,r+a);(this.meshes.has(c)||this.pendingMesh===c)&&(this.dirtyMeshes.add(c),t&&this.memoryStaleMeshes.add(c))}}}meshReady(e){return this.meshes.has(e)&&!this.dirtyMeshes.has(e)&&this.pendingMesh!==e}removeMesh(e,t=!1){t||(this.dirtyMeshes.delete(e),this.memoryStaleMeshes.delete(e)),t?this.memoryContainers.detachChunk(e):this.memoryContainers.removeChunk(e);const n=this.meshes.get(e);n&&(this.memoryGroundCache.clear(),this.memoryStanceCache.clear(),this.memoryReachCache.clear(),this.memoryTargetBounds.clear(),this.memoryCameraKey="",n.traverse(i=>{i instanceof Pe&&(Xa(i),i.geometry.dispose())}),this.scene.remove(n),this.meshes.delete(e),this.renderDirty=!0)}emitStatus(e=!1){const t=[...this.desired.keys()].filter(r=>this.meshReady(r)).length,n={loaded:t,pending:Math.max(0,this.desired.size-t),bytes:this.bytes,visible:t,total:this.totalChunks,dimension:this.dimension.id},i=JSON.stringify(n);(e||i!==this.lastStatus)&&(this.lastStatus=i,this.callbacks.onStatus?.(n))}dispose(){if(!this.disposed){this.closeContainer(),this.setContainerTarget(null),this.containerPickRevision++,this.containerAssets=void 0,this.disposed=!0,this.initController.abort(),cancelAnimationFrame(this.animation);for(const e of this.regions.values())e.controller?.abort();this.regions.clear(),this.clearMemoryPreload(),this.desired.clear(),this.streamingDesired.clear(),this.resizeObserver.disconnect(),this.disposers.forEach(e=>e()),this.controls.dispose(),this.worker.terminate(),this.workerReady?.(),document.pointerLockElement===this.renderer.domElement&&document.exitPointerLock();for(const e of this.meshes.keys())this.removeMesh(e);this.opaqueMaterial?.dispose(),this.transparentMaterial?.dispose(),this.atlasTexture?.dispose(),this.entityRenderer?.dispose(),this.savedEntities?.dispose(),this.containerOutline.geometry.dispose(),this.containerOutline.material.dispose(),this.clearMemoryPlayers(),this.memoryInteractions.dispose(),this.memoryContainers.dispose(),this.islandMechanism?.dispose(),this.islandMechanismPrompt?.remove(),this.islandGenerators=[],this.islandMachines.dispose(),this.memoryPlayerGeometry.dispose(),this.memoryPlayerMaterial.dispose(),this.memorySkinMaterial.dispose(),this.memoryPantsMaterial.dispose();for(const e of this.memoryInspections.values())e.reject(new Error("地图已关闭"));this.memoryInspections.clear(),this.signFont&&document.fonts.delete(this.signFont),this.renderer.dispose(),this.renderer.domElement.remove()}}}export{sv as Viewer3D};
