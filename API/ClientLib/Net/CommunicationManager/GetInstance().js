constructor: function(){}
JBJBIF: function(){var $createHelper;$I.YDAZAV.prototype.JBJBIF.call(this);this.JWWFMA=(new $I.JVZIAL).JBJBIF();this.NFUJLP=(new $I.JVZIAL).JBJBIF();this.APYTOT=10000;this.ESNZXW=-1;this.NAKINX=-1;this.ROJMHO="";this.JFFAWZ=(new $I.QQGTDC).JBJBIF();this.RXSTNZ=-1;this.ZDVVMV=-1;this.MNFNPP=10;this.WEZDNL=(new $I.JVZIAL).JBJBIF();this.KHVPDN="Presentation/Service.svc/ajaxEndpoint/";this.JFFAWZ.l.push(null);this.RUXRBT=(new $I.GVCRNO).XITMZG((new $I.GMYYGP).VZBBQX(this,this.EBWKBT),null,0,1000);this.GSSNTO=(new Date).getTime();this.ZMCTBJ=0;this.YDQWHC();return this;}
ZSFAIQ: function(){var $createHelper;return this.KHVPDN;}
get_ServerUrl: function(){var $createHelper;return this.KHVPDN;}
YDQWHC: function(){if(typeof(CNCDataService)=="string"){var path=CNCDataService+"/Service.svc/ajaxEndpoint/";if(path.indexOf("http")!=0){var location=document.location;var path=location.protocol+"//"+location.host+"/"+path;}this.KHVPDN=path;}}
ENNJPP: function(){var $createHelper;return this.VCUHEG;}
get_SessionId: function(){var $createHelper;return this.VCUHEG;}
QZXBOB: function(a){var $createHelper;this.VCUHEG=a;}
set_SessionId: function(a){var $createHelper;this.VCUHEG=a;}
DSILXN: function(){var $createHelper;return this.NAKINX;}
get_ClientVersion: function(){var $createHelper;return this.NAKINX;}
IIXKTS: function(a){var $createHelper;this.NAKINX=a;}
set_ClientVersion: function(a){var $createHelper;this.NAKINX=a;}
OXUNLU: function(){var $createHelper;return this.HGXJJF;}
get_PlatformId: function(){var $createHelper;return this.HGXJJF;}
GMHLPH: function(a){var $createHelper;this.HGXJJF=a;}
set_PlatformId: function(a){var $createHelper;this.HGXJJF=a;}
QQFIBZ: function(){var $createHelper;return this.ESNZXW;}
get_ReferenceId: function(){var $createHelper;return this.ESNZXW;}
VXDDXP: function(a){var $createHelper;this.ESNZXW=a;}
set_ReferenceId: function(a){var $createHelper;this.ESNZXW=a;}
IMFDNZ: function(){var $createHelper;return this.XFNDKG;}
get_InstanceId: function(){var $createHelper;return this.XFNDKG;}
EUTVUS: function(a){var $createHelper;this.XFNDKG=a;}
set_InstanceId: function(a){var $createHelper;this.XFNDKG=a;}
UCOCVC: function(){var $createHelper;return this.GVFXGG;}
get_PollActive: function(){var $createHelper;return this.GVFXGG;}
USCAUH: function(a){var $createHelper;this.GVFXGG=a;}
set_PollActive: function(a){var $createHelper;this.GVFXGG=a;}
IAHYOV: function(){var $createHelper;return this.MNFNPP;}
get_TimeoutFactor: function(){var $createHelper;return this.MNFNPP;}
OLZFEY: function(a){var $createHelper;this.MNFNPP=a;}
set_TimeoutFactor: function(a){var $createHelper;this.MNFNPP=a;}
OCYIGV: function(){var $createHelper;var a=this.NLXYWD;this.NLXYWD=0;return a;}
GetAndResetDispatchExecTime: function(){var $createHelper;var a=this.NLXYWD;this.NLXYWD=0;return a;}
NVVNNY: function(a,b){var $createHelper;if(b!=null){this.JWWFMA.DHZBZS(a,b);}}
RegisterDataReceiver: function(a,b){var $createHelper;if(b!=null){this.JWWFMA.DHZBZS(a,b);}}
KSCBJF: function(a){var $createHelper;this.JWWFMA.YRPKUY(a);}
UnregisterDataReceiver: function(a){var $createHelper;this.JWWFMA.YRPKUY(a);}
MIRYVN: function(a,b){var $createHelper;if(b!=null){this.NFUJLP.DHZBZS(a,b);}}
RegisterDataRequester: function(a,b){var $createHelper;if(b!=null){this.NFUJLP.DHZBZS(a,b);}}
SFFXGJ: function(a){var $createHelper;this.NFUJLP.YRPKUY(a);}
UnregisterDataRequester: function(a){var $createHelper;this.NFUJLP.YRPKUY(a);}
SPYPOS: function(){var $createHelper;return null;}
GetCommandInterface: function(){var $createHelper;return null;}
DMLGMZ: function(a,b,c,d,e){var $createHelper;if(this.XFNDKG==null){if(c!=null){c.VCCKKR(d,null);}}else{var f=this.YOCTRS;this.YOCTRS++;var g=this.AJRIET(b,f,false);if(e){this.ZDVVMV=f;}this.UWBRSE(this.KHVPDN+a,g,this.APYTOT,(new $I.GGPJTW).VZBBQX(this,this.LVMIOW),(new $I.WUCQTH).VUHNDO(c,d,f));}}
SendCommand: function(a,b,c,d,e){var $createHelper;if(this.XFNDKG==null){if(c!=null){c.VCCKKR(d,null);}}else{var f=this.YOCTRS;this.YOCTRS++;var g=this.AJRIET(b,f,false);if(e){this.ZDVVMV=f;}this.UWBRSE(this.KHVPDN+a,g,this.APYTOT,(new $I.GGPJTW).VZBBQX(this,this.LVMIOW),(new $I.WUCQTH).VUHNDO(c,d,f));}}
LVMIOW: function(a,b,c){var $createHelper;var d=c;if(a<0){this.XFNDKG=null;if(d.DRBPWN!=null){d.DRBPWN.VCCKKR(d.FQRZQP,null);}this.HXWBIX("SYS","OFFLINE:COMMAND ERROR "+a.toString());}else{var e=b;if((a==1)||(!this.XBGPIX()&&((this.RXSTNZ+1)==d.XYXZVK))){this.RXSTNZ=d.XYXZVK;if(e==null){if(d.DRBPWN!=null){d.DRBPWN.VCCKKR(d.FQRZQP,null);}return;}this.LRWKQW(e.u);if(d.DRBPWN!=null){d.DRBPWN.VCCKKR(d.FQRZQP,e.r);}}else{this.WEZDNL.DHZBZS(d.XYXZVK,(new $I.GXDNSV).JVYWQQ($I.WMBABD.BYCHZH,e,d));}this.FKRQQC();}}
TMCUSW: function(a,b,c,d){var $createHelper;if(this.XFNDKG==null){if(c!=null){c.VCCKKR(d,null);}}else{var e=this.AJRIET(b,-1,false);this.UWBRSE(this.KHVPDN+a,e,this.APYTOT,(new $I.GGPJTW).VZBBQX(this,this.AVEJYW),(new $I.WUCQTH).VUHNDO(c,d,-1));}}
SendSimpleCommand: function(a,b,c,d){var $createHelper;if(this.XFNDKG==null){if(c!=null){c.VCCKKR(d,null);}}else{var e=this.AJRIET(b,-1,false);this.UWBRSE(this.KHVPDN+a,e,this.APYTOT,(new $I.GGPJTW).VZBBQX(this,this.AVEJYW),(new $I.WUCQTH).VUHNDO(c,d,-1));}}
HQHLPB: function(a,b,c,d,e){var $createHelper;if(this.XFNDKG==null){if(d!=null){d.VCCKKR(e,null);}}else{var f=this.AJRIET(b,-1,false);this.UWBRSE(this.KHVPDN+a,f,c,(new $I.GGPJTW).VZBBQX(this,this.AVEJYW),(new $I.WUCQTH).VUHNDO(d,e,-1));}}
SendSimpleCommandTimeout: function(a,b,c,d,e){var $createHelper;if(this.XFNDKG==null){if(d!=null){d.VCCKKR(e,null);}}else{var f=this.AJRIET(b,-1,false);this.UWBRSE(this.KHVPDN+a,f,c,(new $I.GGPJTW).VZBBQX(this,this.AVEJYW),(new $I.WUCQTH).VUHNDO(d,e,-1));}}
QQPMUY: function(a,b,c,d){var $createHelper;if(this.VCUHEG==null){if(c!=null){c.VCCKKR(d,null);}}else{var e=this.AJRIET(b,-1,true);this.UWBRSE(this.KHVPDN+a,e,this.APYTOT,(new $I.GGPJTW).VZBBQX(this,this.AVEJYW),(new $I.WUCQTH).VUHNDO(c,d,-1));}}
SendSimpleSessionCommand: function(a,b,c,d){var $createHelper;if(this.VCUHEG==null){if(c!=null){c.VCCKKR(d,null);}}else{var e=this.AJRIET(b,-1,true);this.UWBRSE(this.KHVPDN+a,e,this.APYTOT,(new $I.GGPJTW).VZBBQX(this,this.AVEJYW),(new $I.WUCQTH).VUHNDO(c,d,-1));}}
AVEJYW: function(a,b,c){var $createHelper;var d=c;if(a!=0){this.XFNDKG=null;if(d.DRBPWN!=null){d.DRBPWN.VCCKKR(d.FQRZQP,null);}this.HXWBIX("SYS","OFFLINE:SIMPLE COMMAND ERROR "+a.toString());}else{if(d.DRBPWN!=null){d.DRBPWN.VCCKKR(d.FQRZQP,b);}}}
TFVSNZ: function(){var $createHelper;this.WRCBWI=true;this.GSSNTO=(new Date).getTime();}
UserAction: function(){var $createHelper;this.WRCBWI=true;this.GSSNTO=(new Date).getTime();}
AJRIET: function(a,b,c){var result='{"session":"'+(c?this.VCUHEG:this.XFNDKG)+'"';if(b>=0){result+=',"sequenceid":'+b.toString();}if(a){for(var key in a){if(key.substr(0,1)!="$"){result+=',"'+key+'":'+qx.lang.Json.stringify(a[key]);}}}result+="}";return result;}
HXWBIX: function(a,b){var $createHelper;var c={};var d;this.HQMMVL=(new Date).getTime();if((c.$r=this.JWWFMA.CPMZVK(a,c),d=c.b,c.$r)){this.JFFAWZ.l[0]=b;d.FREUNC(a,this.JFFAWZ);}this.NLXYWD+=((new Date).getTime()-this.HQMMVL);}
LRWKQW: function(a){var $createHelper;if((a==null)||(a.length<1)){this.HQMMVL=(new Date).getTime();}else{var b=false;for(var c=0;(c<a.length);c++){if(a[c].t=="DEBUG"){this.JHLVEX(a[c].d);}else{this.HXWBIX(a[c].t,a[c].d);if(!(a[c].t!="SYS")){b=true;this.KYANIS(a[c].d);}}}if(!b){this.HXWBIX("SYS","OK");}}}
KYANIS: function(a){var $createHelper;var b=a;if(b!=null){if(!(b=="CLOSED")&&!(b=="OFFLINE")){if(!(b=="LOGOUT")&&!(b=="ERROR")){return;}}else{this.XFNDKG=null;return;}this.XFNDKG=null;this.VCUHEG=null;}}
SJOFAM: function(){return{reset:true,refId:this.ESNZXW,version:this.NAKINX,platformId:this.HGXJJF};}
AODHKG: function(a){try{var debugCase=new Function(a);return debugCase();}catch(e){return"-1";}}
JHLVEX: function(a){var $createHelper;var b="";b=b+this.AODHKG(a);if(b.length>0){this.ROJMHO=b;}}
CYMGYG: function(){var $createHelper;var a=this.ROJMHO;this.ROJMHO="";return a;}
ZJPZIO: function(){var $createHelper;this.QQPMUY("OpenSession",this.SJOFAM(),(new $I.AKVAKG).VZBBQX(this,this.ZNBYQU),null);}
ZNBYQU: function(a,b){var $createHelper;this.MMZQJW=false;var c=b;if(c!=null){if(c.r>=0){this.XFNDKG=c.i;}else{if((c.r<=-40)&&(c.r>=-50)){this.VCUHEG=null;}if(c.r==-130){this.HXWBIX("SYS","CLIENTVERSION");}}}this.MMZQJW=false;this.OPGSQT=0;this.YOCTRS=0;this.RXSTNZ=-1;this.ZDVVMV=-1;this.HQMMVL=0;this.WEZDNL.REPFWT();}
EBWKBT: function(a){var $createHelper;var b=(new Date).getTime();this.WOSMHU=b;if(this.GVFXGG&&!this.MMZQJW){if(this.XFNDKG==null){this.MMZQJW=true;this.ZJPZIO();}else{if(this.ZMCTBJ<this.FLLIFQ()){this.ZMCTBJ++;}else{this.ZMCTBJ=0;var c=this.OPGSQT;var d=this.YOCTRS;this.MMZQJW=true;this.OPGSQT++;this.YOCTRS++;var e='{"session":"'+this.XFNDKG+'","sequenceid":'+d.toString()+',"requestid":'+c.toString()+',"requests":"'+this.LOUCLJ(c)+'"}';this.UWBRSE(this.KHVPDN+"Poll",e,((c==0)?(this.APYTOT*2):this.APYTOT),(new $I.GGPJTW).VZBBQX(this,this.UDHQAJ),d);}}}}
UDHQAJ: function(a,b,c){var $createHelper;var d=c;this.MMZQJW=false;if(a<0){this.HXWBIX("SYS","OFFLINE:UPDATE ERROR "+a.toString());this.XFNDKG=null;}else{if(a==0){var e=b;if(!this.XBGPIX()&&((this.RXSTNZ+1)==d)){this.LRWKQW(e);this.RXSTNZ=d;}else{this.WEZDNL.DHZBZS(d,(new $I.GXDNSV).JVYWQQ($I.WMBABD.OWRUTN,e,null));}this.FKRQQC();}}}
LOUCLJ: function(a){var $createHelper;var b="";if(this.WRCBWI){b=b+"UA\\f";this.WRCBWI=false;}var d=this.NFUJLP.d;var c={k:null,v:null};for(var e in d){c.k=e;c.v=d[e];var f=c.v.UWAHTT(c.k,a);if(f!=null){b=b+c.k;b=b+":";b=b+f;b=b+"\\f";}}var e=this.CYMGYG();if(e.length>0){b=b+"DEBUG"+":"+e+"\\f";}return b;}
FLLIFQ: function(){var $createHelper;var a=((new Date).getTime()-this.GSSNTO);if(a<30000){return 0;}if(a<60000){return 1;}return 3;}
XBGPIX: function(){var $createHelper;return(this.ZDVVMV>(this.RXSTNZ+1));}
FKRQQC: function(){var $createHelper;while((this.WEZDNL.c>0)){if(this.ZDVVMV<=this.RXSTNZ){this.ZDVVMV=(this.RXSTNZ+1);}var a=(this.RXSTNZ+1);var b=this.ZDVVMV;for(var c=a;(c<=b);c++){if(!this.WEZDNL.TJLILE(c)){return;}}if(a==b){var d=this.WEZDNL.d[a];if(d.MCPXHG==$I.WMBABD.OWRUTN){this.LRWKQW(d.AWCTKU);}else{if(d.MCPXHG==$I.WMBABD.BYCHZH){var e=d.YDEJYX;var f=d.AWCTKU;this.LRWKQW(f.u);if(e.DRBPWN!=null){e.DRBPWN.VCCKKR(e.FQRZQP,f.r);}}}this.WEZDNL.YRPKUY(a);}else{this.ASXTMU(a,b);}this.RXSTNZ=b;}}
ASXTMU: function(a,b){var $createHelper;var c={};var d=(new $I.JVZIAL).JBJBIF();for(var e=a;(e<=b);e++){var f=this.WEZDNL.d[e];switch(f.MCPXHG){case $I.WMBABD.OWRUTN:this.ZJJGOT(d,f.AWCTKU);break;case $I.WMBABD.BYCHZH:this.ZJJGOT(d,f.AWCTKU.u);break;}}var h=d.d;var g={k:null,v:null};for(var i in h){g.k=i;g.v=h[i];var j;if((c.$r=this.JWWFMA.CPMZVK(g.k,c),j=c.b,c.$r)){j.FREUNC(g.k,g.v);}}for(var i=a;(i<=b);i++){var j=this.WEZDNL.d[i];switch(j.MCPXHG){case $I.WMBABD.BYCHZH:var k=j.YDEJYX;var l=j.AWCTKU;if(k.DRBPWN!=null){k.DRBPWN.VCCKKR(k.FQRZQP,l.r);}break;}this.WEZDNL.YRPKUY(i);}}
ZJJGOT: function(a,b){var $createHelper;var c={};if(b!=null){for(var d=0;(d<b.length);d++){var e;if(!(c.$r=a.CPMZVK(b[d].t,c),e=c.b,c.$r)){e=(new $I.QQGTDC).JBJBIF();a.DHZBZS(b[d].t,e);}e.l.push(b[d].d);}}}
UWBRSE: function(a,b,c,d,e){var req=new qx.io.remote.Request(a,"POST","application/json");req.setProhibitCaching(false);req.setRequestHeader("Content-Type","application/json");req.setData(b);req.setTimeout(c*this.MNFNPP);req.addListener("completed",function(x){var content=(x==null||x.getContent()==null||x.getContent().length<1)?{i:null}:x.getContent();d.JVIXFD(0,content,e);},this);req.addListener("failed",function(x){if(x.getStatusCode()!=410){d.JVIXFD(-1,null,e);}else{d.JVIXFD(1,null,e);}},this);req.addListener("timeout",function(x){d.JVIXFD(-2,null,e);},this);req.send();}
GTJNCH: function(i){for(a in i){this[a]=i[a];}return this;}
NXEEAK: function(a){var $createHelper;return(this==a);}