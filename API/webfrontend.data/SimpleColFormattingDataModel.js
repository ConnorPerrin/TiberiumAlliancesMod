constructor: [Class webfrontend.data.SimpleColFormattingDataModel]
setColFormat: function(f,g,h){if(!qx.lang.Type.isNumber(f)||(!g&&!h)){return;}this.__Ot[f]=new Object();this.__Ot[f].pre=g||e;this.__Ot[f].post=h||e;}
unsetColFormat: function(i){delete this.__Ot[i];}
getValue: function(k,j){var l=this.getData();if(j<0||j>=l.length){throw new Error(a+j+b+l.length+c);}if(this.__Ot.hasOwnProperty(k)){return this.__Ot[k].pre+l[j][k]+this.__Ot[k].post;}return l[j][k];}
getCaseSensitiveSorting: function anonymous(value
) {
if(this.$$runtime_caseSensitiveSorting!==undefined)return this.$$runtime_caseSensitiveSorting;if(this.$$user_caseSensitiveSorting!==undefined)return this.$$user_caseSensitiveSorting;else return this.$$init_caseSensitiveSorting;
}
setCaseSensitiveSorting: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"caseSensitiveSorting","set",value);this.$$user_caseSensitiveSorting=value;return value;
}
resetCaseSensitiveSorting: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
setRuntimeCaseSensitiveSorting: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeCaseSensitiveSorting: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
toggleCaseSensitiveSorting: function anonymous(
) {
return this.setCaseSensitiveSorting(!this.getCaseSensitiveSorting())
}
isCaseSensitiveSorting: function anonymous(
) {
return this.getCaseSensitiveSorting()
}
getRowData: function(E){var F=this.__On[E];if(F==null||F.originalData==null){return F;}else{return F.originalData;}}
getRowDataAsMap: function(G){var I=this.__On[G];if(I!=null){var H={};for(var J=0;J<this.getColumnCount();J++){H[this.getColumnId(J)]=I[J];}if(I.originalData!=null){for(var K in I.originalData){if(H[K]==undefined){H[K]=I.originalData[K];}}}return H;}return(I&&I.originalData)?I.originalData:null;}
getDataAsMapArray: function(){var M=this.getRowCount();var L=[];for(var i=0;i<M;i++){L.push(this.getRowDataAsMap(i));}return L;}
setEditable: function(N){this.__Oq=[];for(var O=0;O<this.getColumnCount();O++){this.__Oq[O]=N;}this.fireEvent(d);}
setColumnEditable: function(P,Q){if(Q!=this.isColumnEditable(P)){if(this.__Oq==null){this.__Oq=[];}this.__Oq[P]=Q;this.fireEvent(d);}}
isColumnEditable: function(R){return this.__Oq?(this.__Oq[R]==true):false;}
setColumnSortable: function(S,T){if(T!=this.isColumnSortable(S)){if(this.__Or==null){this.__Or=[];}this.__Or[S]=T;this.fireEvent(d);}}
isColumnSortable: function(U){return(this.__Or?(this.__Or[U]!==false):true);}
sortByColumn: function(V,ba){var Y;var X=this.__Op[V];if(X){Y=(ba?X.ascending:X.descending);}else{if(this.getCaseSensitiveSorting()){Y=(ba?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);}else{Y=(ba?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);}}Y.columnIndex=V;this.__On.sort(Y);this.__Oo=V;this.__Os=ba;var W={columnIndex:V,ascending:ba};this.fireDataEvent(h,W);this.fireEvent(d);}
setSortMethods: function(bb,bc){var bd;if(qx.lang.Type.isFunction(bc)){bd={ascending:bc,descending:function(be,bf){return bc(bf,be);}};}else{bd=bc;}this.__Op[bb]=bd;}
getSortMethods: function(bg){return this.__Op[bg];}
clearSorting: function(){if(this.__Oo!=-1){this.__Oo=-1;this.__Os=true;this.fireEvent(d);}}
getSortColumnIndex: function(){return this.__Oo;}
_setSortColumnIndex: function(bh){this.__Oo=bh;}
isSortAscending: function(){return this.__Os;}
_setSortAscending: function(bi){this.__Os=bi;}
getRowCount: function(){return this.__On.length;}
setValue: function(bm,bl,bo){if(this.__On[bl][bm]!=bo){this.__On[bl][bm]=bo;if(this.hasListener(f)){var bn={firstRow:bl,lastRow:bl,firstColumn:bm,lastColumn:bm};this.fireDataEvent(f,bn);}if(bm==this.__Oo){this.clearSorting();}}}
setData: function(bq,bp){this.__On=bq;if(this.hasListener(f)){var br={firstRow:0,lastRow:bq.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};this.fireDataEvent(f,br);}if(bp!==false){this.clearSorting();}}
getData: function(){return this.__On;}
setDataAsMapArray: function(bt,bs,bu){this.setData(this._mapArray2RowArr(bt,bs),bu);}
addRows: function(bx,bw,bv){if(bw==null){bw=this.__On.length;}bx.splice(0,0,bw,0);Array.prototype.splice.apply(this.__On,bx);var by={firstRow:bw,lastRow:this.__On.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};this.fireDataEvent(f,by);if(bv!==false){this.clearSorting();}}
addRowsAsMapArray: function(bA,bB,bz,bC){this.addRows(this._mapArray2RowArr(bA,bz),bB,bC);}
setRows: function(bF,bE,bD){if(bE==null){bE=0;}bF.splice(0,0,bE,bF.length);Array.prototype.splice.apply(this.__On,bF);var bG={firstRow:bE,lastRow:this.__On.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};this.fireDataEvent(f,bG);if(bD!==false){this.clearSorting();}}
setRowsAsMapArray: function(bI,bJ,bH,bK){this.setRows(this._mapArray2RowArr(bI,bH),bJ,bK);}
removeRows: function(bM,bN,bL){this.__On.splice(bM,bN);var bO={firstRow:bM,lastRow:this.__On.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:bM,removeCount:bN};this.fireDataEvent(f,bO);if(bL!==false){this.clearSorting();}}
_mapArray2RowArr: function(bQ,bU){var bT=bQ.length;var bP=this.getColumnCount();var bS=new Array(bT);var bR;for(var i=0;i<bT;++i){bR=[];if(bU){bR.originalData=bQ[i];}for(var j=0;j<bP;++j){bR[j]=bQ[i][this.getColumnId(j)];}bS[i]=bR;}return bS;}
init: function(m){}
prefetchRows: function(t,s){}
getValueById: function(x,w){return this.getValue(this.getColumnIndexById(x),w);}
setValueById: function(C,B,D){this.setValue(this.getColumnIndexById(C),B,D);}
getColumnCount: function(){return this.__Oj.length;}
getColumnIndexById: function(E){return this.__Ol[E];}
getColumnId: function(F){return this.__Oj[F];}
getColumnName: function(G){return this.__Ok[G];}
setColumnIds: function(H){this.__Oj=H;this.__Ol={};for(var i=0;i<H.length;i++){this.__Ol[H[i]]=i;}this.__Ok=new Array(H.length);if(!this.__Om){this.fireEvent(c);}}
setColumnNamesByIndex: function(I){if(this.__Oj.length!=I.length){throw new Error(h+this.__Oj.length+a+I.length);}this.__Ok=I;this.fireEvent(c);}
setColumnNamesById: function(J){this.__Ok=new Array(this.__Oj.length);for(var i=0;i<this.__Oj.length;++i){this.__Ok[i]=J[this.__Oj[i]];}}
setColumns: function(K,L){var M=this.__Oj.length==0||L;if(L==null){if(this.__Oj.length==0){L=K;}else{L=this.__Oj;}}if(L.length!=K.length){throw new Error(d+L.length+a+K.length);}if(M){this.__Om=true;this.setColumnIds(L);this.__Om=false;}this.setColumnNamesByIndex(K);}
toHashCode: function(){return this.$$hash;}
toString: function(){return this.classname+f+this.$$hash+e;}
base: function(h,j){if(arguments.length===1){return h.callee.base.call(this);}else{return h.callee.base.apply(this,Array.prototype.slice.call(arguments,1));}}
self: function(k){return k.callee.self;}
clone: function(){if(!qx.core.Environment.get(d)){throw new Error(b);}var n=this.constructor;var m=new n;var p=qx.Class.getProperties(n);var o=this.__bF.$$store.user;var q=this.__bF.$$method.set;var name;for(var i=0,l=p.length;i<l;i++){name=p[i];if(this.hasOwnProperty(o[name])){m[q[name]](this[o[name]]);}}return m;}
setUserData: function(r,s){if(!this.__cU){this.__cU={};}this.__cU[r]=s;}
getUserData: function(u){if(!this.__cU){return null;}var t=this.__cU[u];return t===undefined?null:t;}
isDisposed: function(){return this.$$disposed||false;}
dispose: function(){if(this.$$disposed){return;}this.$$disposed=true;this.$$instance=null;this.$$allowconstruct=null;var x=this.constructor;var v;while(x.superclass){if(x.$$destructor){x.$$destructor.call(this);}if(x.$$includes){v=x.$$flatIncludes;for(var i=0,l=v.length;i<l;i++){if(v[i].$$destructor){v[i].$$destructor.call(this);}}}x=x.superclass;}var y,w;}
_disposeObjects: function(z){qx.util.DisposeUtil.disposeObjects(this,arguments);}
_disposeSingletonObjects: function(A){qx.util.DisposeUtil.disposeObjects(this,arguments,true);}
_disposeArray: function(B){qx.util.DisposeUtil.disposeArray(this,B);}
_disposeMap: function(C){qx.util.DisposeUtil.disposeMap(this,C);}
bind: function(b,e,c,d){return qx.data.SingleValueBinding.bind(this,b,e,c,d);}
removeBinding: function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);}
removeRelatedBindings: function(g){qx.data.SingleValueBinding.removeRelatedBindings(this,g);}
removeAllBindings: function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);}
getBindings: function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);}
debug: function(f){this.__cD(b,arguments);}
info: function(g){this.__cD(a,arguments);}
warn: function(h){this.__cD(c,arguments);}
error: function(i){this.__cD(e,arguments);}
trace: function(){this.__cC.trace(this);}
__cD: function(j,l){var k=qx.lang.Array.fromArguments(l);k.unshift(this);this.__cC[j].apply(this.__cC,k);}
addListener: function(d,b,self,c){if(!this.$$disposed){return this.__cT.addListener(this,d,b,self,c);}return null;}
addListenerOnce: function(h,f,self,g){var i=function(e){this.removeListener(h,f,this,g);f.call(self||this,e);};if(!f.$$wrapped_callback){f.$$wrapped_callback={};}f.$$wrapped_callback[h+this.$$hash]=i;return this.addListener(h,i,this,g);}
removeListener: function(l,j,self,k){if(!this.$$disposed){if(j.$$wrapped_callback&&j.$$wrapped_callback[l+this.$$hash]){var m=j.$$wrapped_callback[l+this.$$hash];delete j.$$wrapped_callback[l+this.$$hash];j=m;}return this.__cT.removeListener(this,l,j,self,k);}return false;}
removeListenerById: function(n){if(!this.$$disposed){return this.__cT.removeListenerById(this,n);}return false;}
hasListener: function(p,o){return this.__cT.hasListener(this,p,o);}
dispatchEvent: function(q){if(!this.$$disposed){return this.__cT.dispatchEvent(this,q);}return true;}
fireEvent: function(s,t,r){if(!this.$$disposed){return this.__cT.fireEvent(this,s,t,r);}return true;}
fireNonBubblingEvent: function(v,w,u){if(!this.$$disposed){return this.__cT.fireNonBubblingEvent(this,v,w,u);}return true;}
fireDataEvent: function(z,A,x,y){if(!this.$$disposed){if(x===undefined){x=null;}return this.__cT.fireNonBubblingEvent(this,z,qx.event.type.Data,[A,x,!!y]);}return true;}
set: function(g,h){var f=qx.core.Property.$$method.set;if(qx.Bootstrap.isString(g)){if(!this[f[g]]){if(this[e+qx.Bootstrap.firstUp(g)]!=undefined){this[e+qx.Bootstrap.firstUp(g)](h);return this;}throw new Error(d+g);}return this[f[g]](h);}else{for(var i in g){if(!this[f[i]]){if(this[e+qx.Bootstrap.firstUp(i)]!=undefined){this[e+qx.Bootstrap.firstUp(i)](g[i]);continue;}throw new Error(d+i);}this[f[i]](g[i]);}return this;}}
get: function(k){var j=qx.core.Property.$$method.get;if(!this[j[k]]){if(this[b+qx.Bootstrap.firstUp(k)]!=undefined){return this[b+qx.Bootstrap.firstUp(k)]();}throw new Error(d+k);}return this[j[k]]();}
reset: function(m){var l=qx.core.Property.$$method.reset;if(!this[l[m]]){if(this[c+qx.Bootstrap.firstUp(m)]!=undefined){this[c+qx.Bootstrap.firstUp(m)]();return;}throw new Error(d+m);}this[l[m]]();}