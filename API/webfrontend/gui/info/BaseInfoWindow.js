constructor: [Class webfrontend.gui.info.BaseInfoWindow]
openWithBaseId: function(cG){this.show();this._initializeInternal();ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand(ca,{id:cG},phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult,this,this._onBaseInfo),null);}
openWithBaseCoordsId: function(cH){this.show();this._initializeInternal();ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand(cl,{id:cH},phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult,this,this._onBaseInfo),null);}
_initializeInternal: function(){this.centerPosition();this.bringToFront();this.__xC();phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Reports(),cy,ClientLib.Data.Reports.BaseReportsDelivered,this,this.__yn);phe.cnc.Util.attachNetEvent(ClientLib.Data.MainData.GetInstance().get_Reports(),cj,ClientLib.Data.Reports.TotalUnreadCountUpdated,this,this.__yp);webfrontend.data.AllianceEvents.getInstance().addListener(r,this.__yq,this);}
_onClose: function(){phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Reports(),cy,ClientLib.Data.Reports.BaseReportsDelivered,this,this.__yn);phe.cnc.Util.detachNetEvent(ClientLib.Data.MainData.GetInstance().get_Reports(),cj,ClientLib.Data.Reports.TotalUnreadCountUpdated,this,this.__yp);webfrontend.data.AllianceEvents.getInstance().removeListener(r,this.__yq,this);var cI=ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.__yc);if(cI!=null){phe.cnc.Util.detachNetEvent(cI,M,ClientLib.Data.CityChange,this,this.__ym);}}
_onResize: function(){var parent=this.__xk.getLayoutParent();if(parent==null){return;}var cL=parent.getBounds();var cK=this.__xk.getBounds();if(cL==null||cK==null){return;}var cJ=Math.floor((cL.width-cK.width)/2);var cM=Math.floor((cL.height-cK.height-24)/2);this.__xk.setLayoutProperties({left:Math.max(0,cJ),top:Math.max(0,cM)});}
_onBaseInfo: function(cQ,cP){if(cQ==false||cP==null){this.__wT.setVisibility(ce);this.__xW.setVisibility(F);this.__xk.setVisibility(ce);this.__yd.setEnabled(false);}else{this.__wT.setVisibility(F);this.__xW.setVisibility(ce);this.__wU.setValue(cP.n);this.__xU.setCoordinates(cP.x,cP.y);this.__ya=cP.x;this.__yb=cP.y;this.__wV.setValue(phe.cnc.gui.util.Numbers.formatNumbers(cP.po));this.__xV.setPlayer(cP.pn.toString(),cP.p);this.__wY.setAlliance(cP.an,cP.a);this.__xX.setBaseId(cP.i);this.__xY.setBaseId(cP.i);this.__yc=cP.i;this.__xX.reloadData();this.__xY.reloadData();this.__xk.setSource(phe.cnc.gui.util.Images.getFactionIconLarge(cP.f));this.__xk.setVisibility(F);this.__yd.setEnabled(true);var cN=ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.__yc);if(cN!=null){phe.cnc.Util.attachNetEvent(cN,M,ClientLib.Data.CityChange,this,this.__ym);}this.__yG();}var cO=new qx.util.DeferredCall(function(){this._onResize();},this);cO.schedule();}
__ym: function(cR){this.__wU.setValue(cR.get_Name());this.__ya=cR.get_X();this.__yb=cR.get_Y();this.__xU.setCoordinates(this.__ya,this.__yb);this.__xV.setPlayer(cR.get_PlayerName(),cR.get_PlayerId());this.__wY.setAlliance(cR.get_AllianceName(),cR.get_AllianceId());}
__yn: function(cS,dd){if(cS!=null){var cY=new Array();for(var i=0;i<cS.length;i++){cY.push(new Object());cY[i].reportData=cS[i];cY[i].Id=cS[i].get_Id();var da=cm;if(!cS[i].get_IsRead()){da=y;}cY[i].Status=webfrontend.gui.reports.ReportsUtil.getStatusText(cS[i].get_PlayerReportType(),cS[i].get_CombatResult());cY[i].Subject=webfrontend.gui.reports.ReportsUtil.getSubjectText(cS[i]);cY[i].Time=phe.cnc.Util.getDateTimeString(new Date(cS[i].get_Time()));this.__xM.clear();var cU=(cS[i].get_DefenderFaction()!=null)?cS[i].get_DefenderFaction():cS[i].get_ReportOtherFaction();switch(cU){case ClientLib.Base.EFactionType.FORFaction:case ClientLib.Base.EFactionType.NPCBase:case ClientLib.Base.EFactionType.NPCCamp:case ClientLib.Base.EFactionType.NPCOutpost:case ClientLib.Base.EFactionType.NPCFortress:case ClientLib.Base.EFactionType.NPCEvent:this.__xM.add(X,da,O,this.tr(v),c);cY[i].Owner=this.__xM.get();break;case ClientLib.Base.EFactionType.GDIFaction:case ClientLib.Base.EFactionType.NODFaction:var cW=(cS[i].get_DefenderPlayerName()!=null)?cS[i].get_DefenderPlayerName():cS[i].get_ReportOwnerName();this.__xM.add(bS,da,k,webfrontend.gui.util.BBCode.clrLink,cx,cW,c);cY[i].Owner=this.__xM.get();break;default:this.__xM.add(X,da,O,this.tr(v),c);cY[i].Owner=this.__xM.get();break;}var db=phe.cnc.gui.util.Images.getFactionIconWebPathFromType(cS[i].get_ReportOtherFaction());if(db!=cm){this.__xM.clear();this.__xM.add(H,db,bP);cY[i].FactionPath=this.__xM.get();}else{cY[i].FactionPath=cm;}this.__xM.clear();this.__xM.add(bS,da,k,webfrontend.gui.util.BBCode.clrLink,cx,cY[i].Subject,h);cY[i].Subject=this.__xM.get();this.__xM.clear();this.__xM.add(bS,da,k,webfrontend.gui.util.BBCode.clrLink,cx,cY[i].Time,h);cY[i].Time=this.__xM.get();var cX=cm;switch(ClientLib.Data.MainData.GetInstance().get_Player().get_Faction()){case ClientLib.Base.EFactionType.GDIFaction:cX=n;break;case ClientLib.Base.EFactionType.NODFaction:cX=C;break;}this.__xM.clear();this.__xM.add(bO,cX,cr,(cS[i].get_ValidReplayData()?bU:J));var dc=ClientLib.File.FileManager.GetInstance().GetPhysicalPath(this.__xM.get());this.__xM.clear();this.__xM.add(H,dc,w);cY[i].Replay=this.__xM.get();}if(dd==ClientLib.Data.Reports.EBaseReportType.Incoming){var cV=this.__xX.isSortAscending();var cT=this.__xX.getSortColumnIndex();if(cT==-1){cT=2;}this.__xX._onRowDataLoaded(cY);this.__xX.sortByColumn(cT,cV);}else{if(dd==ClientLib.Data.Reports.EBaseReportType.Outgoing){var cV=this.__xY.isSortAscending();var cT=this.__xY.getSortColumnIndex();if(cT==-1){cT=2;}this.__xY._onRowDataLoaded(cY);this.__xY.sortByColumn(cT,cV);}}}else{if(dd==ClientLib.Data.Reports.EBaseReportType.Incoming){this.__xX.reloadData();}else{if(dd==ClientLib.Data.Reports.EBaseReportType.Outgoing){this.__xY.reloadData();}}}}
__yo: function(dl,dn,de,df){var dk=dl.getRowData(dn);if(dk!=null){var di=null;var dh=false;if(de==5){var dj=J;if(dk.reportData.get_ValidReplayData()){dj=bU;if(df){dj=cv;}}var dg=ClientLib.Base.Util.GetFactionGuiPatchText();var dm=ClientLib.File.FileManager.GetInstance().GetPhysicalPath(bO+dg+cr+dj);di=H+dm+m;dh=true;}if(dh){dl.setValue(de,dn,di);}}}
__yp: function(){this.__xX.reloadData();this.__xY.reloadData();}
__yq: function(){this.__xX.reloadData();this.__xY.reloadData();qx.ui.core.queue.Layout.add(this);}
__yr: function(){var dp=qx.core.Init.getApplication();if(dp.getMainOverlay().isVisible()){dp.showMainOverlay(false);}webfrontend.gui.UtilView.centerCoordinatesOnRegionViewWindow(this.__ya,this.__yb);}
__ys: function(){var dt=ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity();if(dt.get_isProtected()){var ds=ClientLib.Data.MainData.GetInstance().get_Time();var dv=phe.cnc.Util.getDateTimeString(ds.GetJSStepTime(dt.get_ProtectionEndStep()));var du=dt.get_X()-this.__ya;var dr=dt.get_Y()-this.__yb;var dq=Math.floor(Math.sqrt(du*du+dr*dr));this.__xN.showLossNewbieProtectionWarning(this,this.__yt,dt.get_Name(),dt.get_X(),dt.get_Y(),dq,dv);}else{this.__yt(0);}}
__yt: function(dA){if(dA==0){var dw=this.__yc;ClientLib.Data.MainData.GetInstance().get_Cities().AddOtherCity(-1,dw,this.__ya,this.__yb);ClientLib.Data.MainData.GetInstance().get_Cities().set_CurrentCityId(dw);var dz=qx.core.Init.getApplication();dz.getBackgroundArea().closeCityInfo();dz.getPlayArea().setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense,dw,0,0);ClientLib.Vis.VisMain.GetInstance().get_CombatSetup().SetPosition(0,dz.getPlayArea().getHUD().getCombatSetupOffset(ClientLib.Vis.CombatSetup.CombatSetupViewMode.Defense));}this.__xN.disable();}
__yu: function(){var dB=ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.__yc);if(dB!=null&&dB.IsOwnBase()){this.__xO.showCityRenameConfirmation(this,this.__yv,dB.get_Name());}}
__yv: function(dE,dD){if(dE==0){var dC=ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.__yc);if(dC!=null){dC.Rename(dD);}}this.__xO.disable();}
__yw: function(e){var dF=e.getData();if(dF!=null){this.form.__yo(this.tableData,dF.oldRow,dF.oldColumn,false);this.form.__yo(this.tableData,dF.newRow,dF.newColumn,true);}}
__yx: function(e){var dG=e.getData();if(dG!=null){this.form.__yo(this.tableData,dG.oldRow,dG.oldColumn,false);}}
__yy: function(e){switch(e.getColumn()){case 3:var dH=this.getRowData(e.getRow());if(dH.reportData.get_ReportOwnerFaction()==ClientLib.Base.EFactionType.GDIFaction||dH.reportData.get_ReportOwnerFaction()==ClientLib.Base.EFactionType.NODFaction){webfrontend.gui.info.PlayerInfoWindow.getInstance().openWithPlayerName(dH.reportData.get_ReportOwnerName());}break;case 5:var dH=this.getRowData(e.getRow());if(dH!=null&&dH.reportData.get_ValidReplayData()){var dI=qx.core.Init.getApplication();if(dI.getCurrentMenuOverlay()!=this){dI.switchMenuOverlay(null);}dI.showOptionsPage(true);webfrontend.gui.Util.displayCombatReplay(dH.Id);}break;default:var dH=this.getRowData(e.getRow());if(dH!=null){webfrontend.gui.reports.ReportPopupManager.getInstance().openPopup(dH.Id,dH.reportData.get_PlayerReportType(),true);dH.reportData.set_IsRead(true);dH.Subject=qx.lang.String.format(cg+webfrontend.gui.util.BBCode.clrLink+cq,[webfrontend.gui.reports.ReportsUtil.getSubjectText(dH.reportData)]);dH.Time=qx.lang.String.format(cg+webfrontend.gui.util.BBCode.clrLink+cq,[phe.cnc.Util.getDateTimeString(new Date(dH.reportData.get_Time()))]);this.refreshDisplay();}break;}}
__yz: function(dK,dL,dJ){return this.__yB(dK,this.__xX.getRowData(dL));}
__yA: function(dN,dO,dM){return this.__yB(dN,this.__xY.getRowData(dO));}
__yB: function(dQ,dP){var dR=null;if(dP!=null&&dQ==4&&!dP.reportData.get_ValidReplayData()){dR=this.tr(cu);}return dR;}
__xC: function(){this.__wU.setValue(cm);this.__xU.setValue(cm);this.__wV.setValue(cm);this.__xV.setValue(cm);this.__wY.setValue(cm);this.__yd.setEnabled(false);this.__xX.setBaseId(-1);this.__xY.setBaseId(-1);this.__wT.setVisibility(ce);this.__xW.setVisibility(F);}
__xD: function(){this.__wT=this.__yE();var dS=new qx.ui.container.Composite(new qx.ui.layout.VBox(0));dS.add(this.__wT);dS.add(this.__yH());dS.add(this.__yI());this.__yk=new qx.ui.container.Scroll().set({scrollbarX:cb,scrollbarY:A,decorator:u});this.__yk.add(dS);var dT=new qx.ui.tabview.Page(this.tr(cc)).set({layout:new qx.ui.layout.Canvas()});dT.add(this.__yk,{top:4,bottom:0,left:2,right:2});return dT;}
__yC: function(){this.__xX=new webfrontend.data.ReportHeaderDataModel();this.__xX.setColumns([this.tr(f),this.tr(p),this.tr(Q),this.tr(ch),this.tr(D),this.tr(cn)],[j,bQ,t,ck,o,bX]);this.__xX.setColumnSortable(0,false);this.__xX.setColumnSortable(1,false);this.__xX.setColumnSortable(3,false);this.__xX.setColumnSortable(4,false);this.__xX.setColumnSortable(5,false);this.__xX.sortByColumn(2,false);this.__xX.setBaseReportType(ClientLib.Data.Reports.EBaseReportType.Incoming);var dU=new webfrontend.gui.widgets.CustomTable(this.__xX,{tablePaneScroller:function(ea){return new webfrontend.gui.widgets.TablePaneScrollerCustom(ea,{toolTipCols:[{col:5}]});}},true);dU.set({statusBarVisible:false,columnVisibilityButtonVisible:false});dU.addListener(Y,this.__yy,this.__xX);dU.addListener(V,this.__yw,{form:this,tableData:this.__xX});dU.addListener(P,this.__yx,{form:this,tableData:this.__xX});dU.setRowHeight(24);dU.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.NO_SELECTION);var dW=dU.getTableColumnModel();dW.setDataCellRenderer(0,new qx.ui.table.cellrenderer.Html());dW.getDataCellRenderer(0).setDefaultCellStyle(cA);dW.setDataCellRenderer(1,new qx.ui.table.cellrenderer.Html());dW.setDataCellRenderer(2,new qx.ui.table.cellrenderer.Html());dW.setDataCellRenderer(3,new qx.ui.table.cellrenderer.Html());dW.setDataCellRenderer(4,new qx.ui.table.cellrenderer.Html());dW.getDataCellRenderer(4).setDefaultCellStyle(cA);dW.setDataCellRenderer(5,new qx.ui.table.cellrenderer.Html());dW.getDataCellRenderer(5).setDefaultCellStyle(cA);var dV=dU.getTableColumnModel();dV.setColumnWidth(0,54);dV.setColumnWidth(1,160);dV.setColumnWidth(4,70);var dY=dU._getPaneScrollerArr()[0];dY.setToolTipFunction({func:this.__yz,ctx:this});var dX=new qx.ui.tabview.Page(this.tr(U)).set({layout:new qx.ui.layout.Grow(),padding:[2]});dX.add(dU);return dX;}
__yD: function(){this.__xY=new webfrontend.data.ReportHeaderDataModel();this.__xY.setColumns([this.tr(f),this.tr(p),this.tr(Q),this.tr(ch),this.tr(D),this.tr(cn)],[j,bQ,t,ck,o,bX]);this.__xY.setColumnSortable(0,false);this.__xY.setColumnSortable(1,false);this.__xY.setColumnSortable(3,false);this.__xY.setColumnSortable(4,false);this.__xY.setColumnSortable(5,false);this.__xY.sortByColumn(2,false);this.__xY.setBaseReportType(ClientLib.Data.Reports.EBaseReportType.Outgoing);var eb=new webfrontend.gui.widgets.CustomTable(this.__xY,{tablePaneScroller:function(eg){return new webfrontend.gui.widgets.TablePaneScrollerCustom(eg,{toolTipCols:[{col:5}]});}},true);eb.set({statusBarVisible:false,columnVisibilityButtonVisible:false});eb.addListener(Y,this.__yy,this.__xY);eb.addListener(V,this.__yw,{form:this,tableData:this.__xY});eb.addListener(P,this.__yx,{form:this,tableData:this.__xY});eb.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.NO_SELECTION);eb.setRowHeight(24);var ed=eb.getTableColumnModel();ed.setDataCellRenderer(0,new qx.ui.table.cellrenderer.Html());ed.getDataCellRenderer(0).setDefaultCellStyle(cA);ed.setDataCellRenderer(1,new qx.ui.table.cellrenderer.Html());ed.setDataCellRenderer(2,new qx.ui.table.cellrenderer.Html());ed.setDataCellRenderer(3,new qx.ui.table.cellrenderer.Html());ed.setDataCellRenderer(4,new qx.ui.table.cellrenderer.Html());ed.getDataCellRenderer(4).setDefaultCellStyle(cA);ed.setDataCellRenderer(5,new qx.ui.table.cellrenderer.Html());ed.getDataCellRenderer(5).setDefaultCellStyle(cA);var ec=eb.getTableColumnModel();ec.setColumnWidth(0,64);ec.setColumnWidth(1,160);ec.setColumnWidth(4,70);var ef=eb._getPaneScrollerArr()[0];ef.setToolTipFunction({func:this.__yA,ctx:this});var ee=new qx.ui.tabview.Page(this.tr(cf)).set({layout:new qx.ui.layout.Grow(),padding:[2]});ee.add(eb);return ee;}
__yE: function(){var ek=new qx.ui.groupbox.GroupBox(this.tr(cc)).set({allowGrowY:true,contentPadding:10,contentPaddingTop:14});ek.setLayout(new qx.ui.layout.Canvas());var ej=new qx.ui.container.Composite(new qx.ui.layout.VBox());this.__xk=new qx.ui.basic.Image(W).set({width:Math.floor(450*0.5),height:Math.floor(449*0.5),scale:true});ek.add(this.__xk,{top:0,left:0});ek.add(ej,{top:0,bottom:0,left:0,right:0});ek.add(this.__yF(),{top:0,right:0});var ei=new qx.ui.container.Composite();var eh=new qx.ui.layout.Grid().set({spacingX:10,spacingY:6});eh.setColumnAlign(0,cw,I);eh.setColumnAlign(1,bW,I);eh.setColumnAlign(2,cw,I);eh.setColumnAlign(3,cw,I);eh.setColumnAlign(4,bW,I);eh.setColumnWidth(2,30);ei.setLayout(eh);this.__xP=new qx.ui.basic.Label(this.tr(d)).set({textColor:bV,font:cd,marginBottom:6});this.__wU=new webfrontend.gui.widgets.SelectableLabel(cm).set({textColor:G,font:T,marginBottom:6});ei.add(this.__xP,{row:0,column:0});ei.add(this.__wU,{row:0,column:1});this.__xR=new qx.ui.basic.Label(this.tr(bN)).set({textColor:bV,font:cd,marginBottom:6});this.__wV=new qx.ui.basic.Label(cm).set({textColor:G,font:T,marginBottom:6});ei.add(this.__xR,{row:0,column:3});ei.add(this.__wV,{row:0,column:4});this.__xS=new qx.ui.basic.Label(this.tr(bY));this.__xV=new webfrontend.gui.widgets.PlayerLabel(cm,0).set({font:L,maxWidth:155});ei.add(this.__xS,{row:1,column:0});ei.add(this.__xV,{row:1,column:1});this.__xT=new qx.ui.basic.Label(this.tr(s));this.__wY=new webfrontend.gui.widgets.AllianceLabel(cm).set({font:L,maxWidth:155});ei.add(this.__xT,{row:1,column:3});ei.add(this.__wY,{row:1,column:4});this.__xQ=new qx.ui.basic.Label(this.tr(co));this.__xU=new webfrontend.gui.widgets.CoordinatesLabel(cm).set({font:L});ei.add(this.__xQ,{row:2,column:0});ei.add(this.__xU,{row:2,column:1});ej.add(ei);return ek;}
__yF: function(){var el=new qx.ui.container.Composite(new qx.ui.layout.Basic());this.__yd=new webfrontend.ui.SoundButton(null,E);this.__yd.setWidth(28);this.__yd.setHeight(32);this.__yd.setToolTipText(this.tr(cp));this.__yd.addListener(B,this.__yr,this);el.add(this.__yd);return el;}
__yG: function(){var em=ClientLib.Data.MainData.GetInstance().get_World().CheckAttackBaseRegion(this.__ya,this.__yb);var eo=phe.cnc.gui.region.Messages.getAttackToolTip(em);this.__ye.set({toolTipText:eo});var ep=false;if(em==ClientLib.Data.EAttackBaseResult.OK){ep=true;}else{if(em==ClientLib.Data.EAttackBaseResult.FailInsufficientCommandPoints){ep=true;}}this.__ye.setEnabled(ep);var en=ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(this.__yc);if(en!=null&&en.IsOwnBase()){this.__yj.show();this.__yi.setEnabled(true);}else{this.__yj.exclude();this.__yi.setEnabled(false);}}
__yH: function(){this.__yl=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({marginTop:-3});this.__ye=new webfrontend.ui.SoundButton(this.tr(z)).set({minWidth:62});this.__ye.addListener(B,this.__ys,this);this.__ye.setEnabled(false);var er=new qx.ui.container.Composite(new qx.ui.layout.HBox());er.add(this.__ye);er.add(new qx.ui.core.Spacer(),{flex:1});er.exclude();this.__yf=new webfrontend.ui.SoundButton(this.tr(q)).set({minWidth:62});this.__yf.setEnabled(false);var eq=new qx.ui.container.Composite(new qx.ui.layout.HBox());eq.add(this.__yf);eq.add(new qx.ui.core.Spacer(),{flex:1});eq.exclude();this.__yg=new webfrontend.ui.SoundButton(this.tr(ci)).set({minWidth:62});this.__yg.setEnabled(false);var es=new qx.ui.container.Composite(new qx.ui.layout.HBox());es.add(this.__yg);es.add(new qx.ui.core.Spacer(),{flex:1});es.exclude();this.__yh=new webfrontend.ui.SoundButton(this.tr(cs)).set({minWidth:62});this.__yh.setEnabled(false);var et=new qx.ui.container.Composite(new qx.ui.layout.HBox());et.add(this.__yh);et.add(new qx.ui.core.Spacer(),{flex:1});et.exclude();this.__yi=new webfrontend.ui.SoundButton(this.tr(ct)).set({minWidth:62,toolTipText:this.tr(g)});this.__yi.addListener(B,this.__yu,this);this.__yi.setEnabled(false);this.__yj=new qx.ui.container.Composite(new qx.ui.layout.HBox());this.__yj.add(this.__yi);this.__yj.add(new qx.ui.core.Spacer(),{flex:1});this.__yj.exclude();this.__yl.add(new qx.ui.core.Spacer(),{flex:2});this.__yl.add(er,{flex:2});this.__yl.add(eq,{flex:2});this.__yl.add(es,{flex:2});this.__yl.add(et,{flex:2});this.__yl.add(this.__yj,{flex:2});return this.__yl;}
__yI: function(){var eu=new qx.ui.container.Composite(new qx.ui.layout.HBox());this.__xW=new qx.ui.basic.Label(this.tr(cz)).set({textColor:bR,font:R,textAlign:bT});eu.add(this.__xW,{flex:1});return eu;}
getCenterOnShow: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setCenterOnShow: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetCenterOnShow: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
setRuntimeCenterOnShow: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeCenterOnShow: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
toggleCenterOnShow: function anonymous(
) {
return this.setCenterOnShow(!this.getCenterOnShow())
}
isCenterOnShow: function anonymous(
) {
return this.getCenterOnShow()
}
bringToFront: function(){qx.core.Init.getApplication().getRoot().getWindowManager().bringToFront(this);}
centerPosition: function(){var x=0;var y=0;var B=0;var A=0;var v=qx.core.Init.getApplication();var t=v.getMainOverlay();if(t!=null){var u=t.getBounds();x=u.width;y=u.height;B=u.left;A=u.top;}else{x=qx.bom.Viewport.getWidth(window);y=qx.bom.Viewport.getHeight(window);}var z=this.getWidth();if(z==null&&this.getBounds()!=null){z=this.getBounds().width;}var w=this.getHeight();if(w==null&&this.getBounds()!=null){w=this.getBounds().height;}x=B+Math.floor((x-z)/2);y=A+Math.floor((y-w)/2);this.moveTo(x,y);return{x:x,y:y};}
fadeIn: function(){this.animate(qx.phe.AnimationManager.getInstance().getAnimation(i).getDescription());}
fadeOut: function(){this.animate(qx.phe.AnimationManager.getInstance().getAnimation(b).getDescription());}
_onCloseButtonTap: function(e){ClientLib.Vis.VisMain.GetInstance().PlayUISound(webfrontend.ui.SoundButton.defaultFile);qx.ui.window.Window.prototype._onCloseButtonTap.call(this);}
_onDesktopResize: function(){var C=qx.core.Init.getApplication();var E=C.getDesktop().getBounds();var D=this.getBounds();if(D===null||E===null){return;}var x=D.left;var y=D.top;if(D.left<E.left){x=E.left;}if(D.left+D.width>E.width){x=E.width-D.width;}if(D.top<E.top){y=E.top;}if(D.top+D.height>E.height){y=E.height-D.height;}this.moveTo(x,y);}
_deferredAppear: function(){this.__ui=null;if(this.getCenterOnShow()){this.centerPosition();}this.bringToFront();this.setCssContent(q);this.fadeIn();}
_isActive: function(){return this.__uh;}
close: function(F){if(this.__uh||F){if(this.fireNonBubblingEvent(f,qx.event.type.Event,[false,true])||F){this.__uh=false;if(!F){this.animate(qx.phe.AnimationManager.getInstance().getAnimation(b).getDescription(),null,function(){this.close(true);},this);}else{qx.ui.window.Window.prototype.close.call(this);}}}}
show: function(){if(!this.isVisible()){if(!this.__ui){this.__ui=this.addListenerOnce(d,this._deferredAppear,this);}this.setCssContent(k);qx.ui.window.Window.prototype.show.call(this);this.__uh=true;}else{this.bringToFront();}}
animate: function(h,e,g,f){qx.html.Element.flush();this.stopAnimation();this.__uf(h.keyFrames);var self=this;this.__ue(function(){for(var i in h.keyFrames){self.__ug(self.getContentElement(),h.keyFrames[i]);break;}if(g){self.addListenerOnce(c,g,f);}self._animateImpl(h,e);},function(){var j=null;for(var k in frames){j=h.keyFrames[k];}self.__ug(self.getContentElement(),h.keyFrames[k]);if(g){self.addListenerOnce(c,g,f);}},5);}
stopAnimation: function(){if(this.__ud!=null){this.__ud.cancel();}this.__ud=null;if(this.__uc&&this.__uc.isValid()){this.__uc.stop();}this.__uc=null;}
__ue: function(l,m,n){if(this.__ud!=null){this.__ud.cancel();}var self=this;this.__ud=new qx.util.DeferredCall(function(){self.__ud=null;if(self.getContentElement().getDomElement()!=null){l();}else{if(n==0){m();}else{self.__ue(l,m,n-1);}}},self);this.__ud.schedule();}
__uf: function(frames){for(var o in frames){var q=frames[o];for(var p in q){if(!webfrontend.gui.MAnimateable.__ub[p]){var r=qx.bom.Style.getPropertyName(p);if(r){webfrontend.gui.MAnimateable.__ub[p]=r;}else{webfrontend.gui.MAnimateable.__ub[p]=p;}}}}}
__ug: function(s,t){if(t){for(var u in t){s.setStyle(u,t[u]);}}}
_animateImpl: function(w,v){this.__uc=qx.bom.element.Animation.animate(this.getContentElement().getDomElement(),w,v);this.__uc.on(a,function(){this.fireEvent(c);},this);}
getActive: function anonymous(value
) {
if(this.$$runtime_active!==undefined)return this.$$runtime_active;if(this.$$user_active!==undefined)return this.$$user_active;else return this.$$init_active;
}
setActive: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"active","set",value);if(this.$$user_active===value)return value;var computed, old;if(this.$$runtime_active!==undefined){old=computed=this.$$runtime_active;this.$$user_active=value;}else if(this.$$user_active!==undefined){old=this.$$user_active;computed=this.$$user_active=value;}else if(this.$$useinit_active){old=this.$$init_active;delete this.$$useinit_active;computed=this.$$user_active=value;}else{computed=this.$$user_active=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_active;this._applyActive(computed, old, "active", "set");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeActive')){reg.fireEvent(this, 'changeActive', qx.event.type.Data, [computed, old])}return value;
}
resetActive: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initActive: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeActive: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeActive: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
toggleActive: function anonymous(
) {
return this.setActive(!this.getActive())
}
isActive: function anonymous(
) {
return this.getActive()
}
getAlwaysOnTop: function anonymous(value
) {
if(this.$$runtime_alwaysOnTop!==undefined)return this.$$runtime_alwaysOnTop;if(this.$$user_alwaysOnTop!==undefined)return this.$$user_alwaysOnTop;else return this.$$init_alwaysOnTop;
}
setAlwaysOnTop: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"alwaysOnTop","set",value);if(this.$$user_alwaysOnTop===value)return value;var computed, old;if(this.$$runtime_alwaysOnTop!==undefined){old=computed=this.$$runtime_alwaysOnTop;this.$$user_alwaysOnTop=value;}else if(this.$$user_alwaysOnTop!==undefined){old=this.$$user_alwaysOnTop;computed=this.$$user_alwaysOnTop=value;}else if(this.$$useinit_alwaysOnTop){old=this.$$init_alwaysOnTop;delete this.$$useinit_alwaysOnTop;computed=this.$$user_alwaysOnTop=value;}else{computed=this.$$user_alwaysOnTop=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_alwaysOnTop;var reg=qx.event.Registration;if(reg.hasListener(this, 'changeAlwaysOnTop')){reg.fireEvent(this, 'changeAlwaysOnTop', qx.event.type.Data, [computed, old])}return value;
}
resetAlwaysOnTop: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initAlwaysOnTop: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeAlwaysOnTop: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeAlwaysOnTop: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
toggleAlwaysOnTop: function anonymous(
) {
return this.setAlwaysOnTop(!this.getAlwaysOnTop())
}
isAlwaysOnTop: function anonymous(
) {
return this.getAlwaysOnTop()
}
getModal: function anonymous(value
) {
if(this.$$runtime_modal!==undefined)return this.$$runtime_modal;if(this.$$user_modal!==undefined)return this.$$user_modal;else return this.$$init_modal;
}
setModal: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"modal","set",value);if(this.$$user_modal===value)return value;var computed, old;if(this.$$runtime_modal!==undefined){old=computed=this.$$runtime_modal;this.$$user_modal=value;}else if(this.$$user_modal!==undefined){old=this.$$user_modal;computed=this.$$user_modal=value;}else if(this.$$useinit_modal){old=this.$$init_modal;delete this.$$useinit_modal;computed=this.$$user_modal=value;}else{computed=this.$$user_modal=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_modal;this._applyModal(computed, old, "modal", "set");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeModal')){reg.fireEvent(this, 'changeModal', qx.event.type.Data, [computed, old])}return value;
}
resetModal: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initModal: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeModal: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeModal: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
toggleModal: function anonymous(
) {
return this.setModal(!this.getModal())
}
isModal: function anonymous(
) {
return this.getModal()
}
getCaption: function anonymous(value
) {
if(this.$$runtime_caption!==undefined)return this.$$runtime_caption;if(this.$$user_caption!==undefined)return this.$$user_caption;else return null;
}
setCaption: function anonymous(value
) {
if(value===undefined)prop.error(this,2,"caption","set",value);if(this.$$user_caption===value)return value;var computed, old;if(this.$$runtime_caption!==undefined){old=computed=this.$$runtime_caption;this.$$user_caption=value;}else if(this.$$user_caption!==undefined){old=this.$$user_caption;computed=this.$$user_caption=value;}else if(this.$$useinit_caption){old=this.$$init_caption;delete this.$$useinit_caption;computed=this.$$user_caption=value;}else{computed=this.$$user_caption=value;}if(old===computed)return value;if(old===undefined)old=null;this._applyCaptionBarChange(computed, old, "caption", "set");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeCaption')){reg.fireEvent(this, 'changeCaption', qx.event.type.Data, [computed, old])}return value;
}
resetCaption: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initCaption: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeCaption: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeCaption: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
getIcon: function anonymous(value
) {
if(this.$$runtime_icon!==undefined)return this.$$runtime_icon;if(this.$$user_icon!==undefined)return this.$$user_icon;else if(this.$$theme_icon!==undefined)return this.$$theme_icon;else return null;
}
setIcon: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetIcon: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initIcon: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeIcon: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeIcon: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedIcon: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedIcon: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getStatus: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setStatus: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetStatus: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initStatus: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeStatus: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeStatus: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
getShowClose: function anonymous(value
) {
if(this.$$runtime_showClose!==undefined)return this.$$runtime_showClose;if(this.$$user_showClose!==undefined)return this.$$user_showClose;else if(this.$$theme_showClose!==undefined)return this.$$theme_showClose;else return this.$$init_showClose;
}
setShowClose: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"showClose","set",value);if(this.$$user_showClose===value)return value;var computed, old;if(this.$$runtime_showClose!==undefined){old=computed=this.$$runtime_showClose;this.$$user_showClose=value;}else if(this.$$user_showClose!==undefined){old=this.$$user_showClose;computed=this.$$user_showClose=value;}else if(this.$$theme_showClose!==undefined){old=this.$$theme_showClose;computed=this.$$user_showClose=value;}else if(this.$$useinit_showClose){old=this.$$init_showClose;delete this.$$useinit_showClose;computed=this.$$user_showClose=value;}else{computed=this.$$user_showClose=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_showClose;this._applyCaptionBarChange(computed, old, "showClose", "set");return value;
}
resetShowClose: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initShowClose: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeShowClose: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeShowClose: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedShowClose: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedShowClose: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
toggleShowClose: function anonymous(
) {
return this.setShowClose(!this.getShowClose())
}
isShowClose: function anonymous(
) {
return this.getShowClose()
}
getShowMaximize: function anonymous(value
) {
if(this.$$runtime_showMaximize!==undefined)return this.$$runtime_showMaximize;if(this.$$user_showMaximize!==undefined)return this.$$user_showMaximize;else if(this.$$theme_showMaximize!==undefined)return this.$$theme_showMaximize;else return this.$$init_showMaximize;
}
setShowMaximize: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"showMaximize","set",value);if(this.$$user_showMaximize===value)return value;var computed, old;if(this.$$runtime_showMaximize!==undefined){old=computed=this.$$runtime_showMaximize;this.$$user_showMaximize=value;}else if(this.$$user_showMaximize!==undefined){old=this.$$user_showMaximize;computed=this.$$user_showMaximize=value;}else if(this.$$theme_showMaximize!==undefined){old=this.$$theme_showMaximize;computed=this.$$user_showMaximize=value;}else if(this.$$useinit_showMaximize){old=this.$$init_showMaximize;delete this.$$useinit_showMaximize;computed=this.$$user_showMaximize=value;}else{computed=this.$$user_showMaximize=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_showMaximize;this._applyCaptionBarChange(computed, old, "showMaximize", "set");return value;
}
resetShowMaximize: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initShowMaximize: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeShowMaximize: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeShowMaximize: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedShowMaximize: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedShowMaximize: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
toggleShowMaximize: function anonymous(
) {
return this.setShowMaximize(!this.getShowMaximize())
}
isShowMaximize: function anonymous(
) {
return this.getShowMaximize()
}
getShowMinimize: function anonymous(value
) {
if(this.$$runtime_showMinimize!==undefined)return this.$$runtime_showMinimize;if(this.$$user_showMinimize!==undefined)return this.$$user_showMinimize;else if(this.$$theme_showMinimize!==undefined)return this.$$theme_showMinimize;else return this.$$init_showMinimize;
}
setShowMinimize: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"showMinimize","set",value);if(this.$$user_showMinimize===value)return value;var computed, old;if(this.$$runtime_showMinimize!==undefined){old=computed=this.$$runtime_showMinimize;this.$$user_showMinimize=value;}else if(this.$$user_showMinimize!==undefined){old=this.$$user_showMinimize;computed=this.$$user_showMinimize=value;}else if(this.$$theme_showMinimize!==undefined){old=this.$$theme_showMinimize;computed=this.$$user_showMinimize=value;}else if(this.$$useinit_showMinimize){old=this.$$init_showMinimize;delete this.$$useinit_showMinimize;computed=this.$$user_showMinimize=value;}else{computed=this.$$user_showMinimize=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_showMinimize;this._applyCaptionBarChange(computed, old, "showMinimize", "set");return value;
}
resetShowMinimize: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initShowMinimize: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeShowMinimize: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeShowMinimize: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedShowMinimize: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedShowMinimize: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
toggleShowMinimize: function anonymous(
) {
return this.setShowMinimize(!this.getShowMinimize())
}
isShowMinimize: function anonymous(
) {
return this.getShowMinimize()
}
getAllowClose: function anonymous(value
) {
if(this.$$runtime_allowClose!==undefined)return this.$$runtime_allowClose;if(this.$$user_allowClose!==undefined)return this.$$user_allowClose;else return this.$$init_allowClose;
}
setAllowClose: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetAllowClose: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initAllowClose: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeAllowClose: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeAllowClose: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
toggleAllowClose: function anonymous(
) {
return this.setAllowClose(!this.getAllowClose())
}
isAllowClose: function anonymous(
) {
return this.getAllowClose()
}
getAllowMaximize: function anonymous(value
) {
if(this.$$runtime_allowMaximize!==undefined)return this.$$runtime_allowMaximize;if(this.$$user_allowMaximize!==undefined)return this.$$user_allowMaximize;else return this.$$init_allowMaximize;
}
setAllowMaximize: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"allowMaximize","set",value);if(this.$$user_allowMaximize===value)return value;var computed, old;if(this.$$runtime_allowMaximize!==undefined){old=computed=this.$$runtime_allowMaximize;this.$$user_allowMaximize=value;}else if(this.$$user_allowMaximize!==undefined){old=this.$$user_allowMaximize;computed=this.$$user_allowMaximize=value;}else if(this.$$useinit_allowMaximize){old=this.$$init_allowMaximize;delete this.$$useinit_allowMaximize;computed=this.$$user_allowMaximize=value;}else{computed=this.$$user_allowMaximize=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_allowMaximize;this._applyCaptionBarChange(computed, old, "allowMaximize", "set");return value;
}
resetAllowMaximize: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initAllowMaximize: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeAllowMaximize: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeAllowMaximize: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
toggleAllowMaximize: function anonymous(
) {
return this.setAllowMaximize(!this.getAllowMaximize())
}
isAllowMaximize: function anonymous(
) {
return this.getAllowMaximize()
}
getAllowMinimize: function anonymous(value
) {
if(this.$$runtime_allowMinimize!==undefined)return this.$$runtime_allowMinimize;if(this.$$user_allowMinimize!==undefined)return this.$$user_allowMinimize;else return this.$$init_allowMinimize;
}
setAllowMinimize: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"allowMinimize","set",value);if(this.$$user_allowMinimize===value)return value;var computed, old;if(this.$$runtime_allowMinimize!==undefined){old=computed=this.$$runtime_allowMinimize;this.$$user_allowMinimize=value;}else if(this.$$user_allowMinimize!==undefined){old=this.$$user_allowMinimize;computed=this.$$user_allowMinimize=value;}else if(this.$$useinit_allowMinimize){old=this.$$init_allowMinimize;delete this.$$useinit_allowMinimize;computed=this.$$user_allowMinimize=value;}else{computed=this.$$user_allowMinimize=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_allowMinimize;this._applyCaptionBarChange(computed, old, "allowMinimize", "set");return value;
}
resetAllowMinimize: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initAllowMinimize: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeAllowMinimize: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeAllowMinimize: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
toggleAllowMinimize: function anonymous(
) {
return this.setAllowMinimize(!this.getAllowMinimize())
}
isAllowMinimize: function anonymous(
) {
return this.getAllowMinimize()
}
getShowStatusbar: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setShowStatusbar: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"showStatusbar","set",value);if(this.$$user_showStatusbar===value)return value;var computed, old;if(this.$$runtime_showStatusbar!==undefined){old=computed=this.$$runtime_showStatusbar;this.$$user_showStatusbar=value;}else if(this.$$user_showStatusbar!==undefined){old=this.$$user_showStatusbar;computed=this.$$user_showStatusbar=value;}else if(this.$$useinit_showStatusbar){old=this.$$init_showStatusbar;delete this.$$useinit_showStatusbar;computed=this.$$user_showStatusbar=value;}else{computed=this.$$user_showStatusbar=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_showStatusbar;this._applyShowStatusbar(computed, old, "showStatusbar", "set");return value;
}
resetShowStatusbar: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initShowStatusbar: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeShowStatusbar: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeShowStatusbar: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
toggleShowStatusbar: function anonymous(
) {
return this.setShowStatusbar(!this.getShowStatusbar())
}
isShowStatusbar: function anonymous(
) {
return this.getShowStatusbar()
}
getChildrenContainer: function(){return this.getChildControl(Q);}
setLayoutParent: function(parent){qx.ui.core.Widget.prototype.setLayoutParent.call(this,parent);}
_createChildControlImpl: function(be,bd){var ba;switch(be){case q:ba=new qx.ui.container.Composite(new qx.ui.layout.HBox());this._add(ba);ba.add(this.getChildControl(J));break;case J:ba=new qx.ui.basic.Label();ba.setValue(this.getStatus());break;case Q:ba=new qx.ui.container.Composite();this._add(ba,{flex:1});break;case r:var bb=new qx.ui.layout.Grid();bb.setRowFlex(0,1);bb.setColumnFlex(1,1);ba=new qx.ui.container.Composite(bb);this._add(ba);ba.addListener(u,this._onCaptionPointerDblTap,this);this._activateMoveHandle(ba);break;case y:ba=new qx.ui.basic.Image(this.getIcon());this.getChildControl(r).add(ba,{row:0,column:0});break;case x:ba=new qx.ui.basic.Label(this.getCaption());ba.setWidth(0);ba.setAllowGrowX(true);var bc=this.getChildControl(r);bc.add(ba,{row:0,column:1});break;case m:ba=new qx.ui.form.Button();ba.setFocusable(false);ba.addListener(j,this._onMinimizeButtonTap,this);this.getChildControl(r).add(ba,{row:0,column:2});break;case k:ba=new qx.ui.form.Button();ba.setFocusable(false);ba.addListener(j,this._onRestoreButtonTap,this);this.getChildControl(r).add(ba,{row:0,column:3});break;case N:ba=new qx.ui.form.Button();ba.setFocusable(false);ba.addListener(j,this._onMaximizeButtonTap,this);this.getChildControl(r).add(ba,{row:0,column:4});break;case o:ba=new qx.ui.form.Button();ba.setFocusable(false);ba.addListener(j,this._onCloseButtonTap,this);this.getChildControl(r).add(ba,{row:0,column:6});break;}return ba||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,be);}
_updateCaptionBar: function(){var bg;var bh=this.getIcon();if(bh){this.getChildControl(y).setSource(bh);this._showChildControl(y);}else{this._excludeChildControl(y);}var bf=this.getCaption();if(bf){this.getChildControl(x).setValue(bf);this._showChildControl(x);}else{this._excludeChildControl(x);}if(this.getShowMinimize()){this._showChildControl(m);bg=this.getChildControl(m);this.getAllowMinimize()?bg.resetEnabled():bg.setEnabled(false);}else{this._excludeChildControl(m);}if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(k);this._excludeChildControl(N);}else{this._showChildControl(N);this._excludeChildControl(k);}bg=this.getChildControl(N);this.getAllowMaximize()?bg.resetEnabled():bg.setEnabled(false);}else{this._excludeChildControl(N);this._excludeChildControl(k);}if(this.getShowClose()){this._showChildControl(o);bg=this.getChildControl(o);this.getAllowClose()?bg.resetEnabled():bg.setEnabled(false);}else{this._excludeChildControl(o);}}
open: function(){this.show();this.setActive(true);this.focus();}
center: function(){var parent=this.getLayoutParent();if(parent){var bj=parent.getBounds();if(bj){var bk=this.getSizeHint();var bi=Math.round((bj.width-bk.width)/2);var top=Math.round((bj.height-bk.height)/2);if(top<0){top=0;}this.moveTo(bi,top);return;}}}
maximize: function(){if(this.isMaximized()){return;}var parent=this.getLayoutParent();if(parent!=null&&parent.supportsMaximize()){if(this.fireNonBubblingEvent(L,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();}var bl=this.getLayoutProperties();this.__tx=bl.left===undefined?0:bl.left;this.__tw=bl.top===undefined?0:bl.top;this.setLayoutProperties({left:null,top:null,edge:0});this.addState(D);this._updateCaptionBar();this.fireEvent(M);}}}
minimize: function(){if(!this.isVisible()){return;}if(this.fireNonBubblingEvent(b,qx.event.type.Event,[false,true])){var bm=this.getLayoutProperties();this.__tx=bm.left===undefined?0:bm.left;this.__tw=bm.top===undefined?0:bm.top;this.removeState(D);this.hide();this.fireEvent(t);}}
restore: function(){if(this.getMode()===G){return;}if(this.fireNonBubblingEvent(p,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();}var bn=this.__tx;var top=this.__tw;this.setLayoutProperties({edge:null,left:bn,top:top});this.removeState(D);this._updateCaptionBar();this.fireEvent(O);}}
moveTo: function(bo,top){if(this.isMaximized()){return;}this.setLayoutProperties({left:bo,top:top});}
isMaximized: function(){return this.hasState(D);}
getMode: function(){if(!this.isVisible()){return W;}else{if(this.isMaximized()){return D;}else{return G;}}}
_applyActive: function(bq,bp){if(bp){this.removeState(V);}else{this.addState(V);}}
_applyModal: function(bs,br){if(br){this.removeState(v);}else{this.addState(v);}}
_getContentPaddingTarget: function(){return this.getChildControl(Q);}
_applyShowStatusbar: function(bv,bt){var bu=this._getResizeFrame();if(bv){this.addState(z);bu.addState(z);}else{this.removeState(z);bu.removeState(z);}if(bv){this._showChildControl(q);}else{this._excludeChildControl(q);}}
_applyCaptionBarChange: function(bx,bw){this._updateCaptionBar();}
_applyStatus: function(bz,by){var bA=this.getChildControl(J,true);if(bA){bA.setValue(bz);}}
_applyFocusable: function(bC,bB){if(qx.core.Environment.get(I)!==T){qx.ui.core.Widget.prototype._applyFocusable.call(this,bC,bB);}}
_onWindowEventStop: function(e){e.stopPropagation();}
_onWindowPointerDown: function(e){this.setActive(true);}
_onWindowFocusOut: function(e){if(this.getModal()){return;}var bD=e.getRelatedTarget();if(bD!=null&&!qx.ui.core.Widget.contains(this,bD)){this.setActive(false);}}
_onCaptionPointerDblTap: function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();}}
_onMinimizeButtonTap: function(e){this.minimize();this.getChildControl(m).reset();}
_onRestoreButtonTap: function(e){this.restore();this.getChildControl(k).reset();}
_onMaximizeButtonTap: function(e){this.maximize();this.getChildControl(N).reset();}
__qt: function(q,m,o,n){var p=this.getChildrenContainer();if(p===this){q=e+q;}return(p[q])(m,o,n);}
getChildren: function(){return this.__qt(j);}
hasChildren: function(){return this.__qt(g);}
add: function(s,r){return this.__qt(c,s,r);}
remove: function(t){return this.__qt(k,t);}
removeAll: function(){return this.__qt(i);}
indexOf: function(u){return this.__qt(a,u);}
addAt: function(x,v,w){this.__qt(f,x,v,w);}
addBefore: function(y,A,z){this.__qt(d,y,A,z);}
addAfter: function(D,B,C){this.__qt(b,D,B,C);}
removeAt: function(E){return this.__qt(h,E);}
setLayout: function(b){this.getChildrenContainer().setLayout(b);}
getLayout: function(){return this.getChildrenContainer().getLayout();}
getResizableTop: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setResizableTop: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"resizableTop","set",value);this.$$user_resizableTop=value;return value;
}
resetResizableTop: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
setRuntimeResizableTop: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeResizableTop: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
toggleResizableTop: function anonymous(
) {
return this.setResizableTop(!this.getResizableTop())
}
isResizableTop: function anonymous(
) {
return this.getResizableTop()
}
getResizableRight: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setResizableRight: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"resizableRight","set",value);this.$$user_resizableRight=value;return value;
}
resetResizableRight: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
setRuntimeResizableRight: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeResizableRight: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
toggleResizableRight: function anonymous(
) {
return this.setResizableRight(!this.getResizableRight())
}
isResizableRight: function anonymous(
) {
return this.getResizableRight()
}
getResizableBottom: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setResizableBottom: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"resizableBottom","set",value);this.$$user_resizableBottom=value;return value;
}
resetResizableBottom: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
setRuntimeResizableBottom: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeResizableBottom: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
toggleResizableBottom: function anonymous(
) {
return this.setResizableBottom(!this.getResizableBottom())
}
isResizableBottom: function anonymous(
) {
return this.getResizableBottom()
}
getResizableLeft: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setResizableLeft: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"resizableLeft","set",value);this.$$user_resizableLeft=value;return value;
}
resetResizableLeft: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
setRuntimeResizableLeft: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeResizableLeft: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
toggleResizableLeft: function anonymous(
) {
return this.setResizableLeft(!this.getResizableLeft())
}
isResizableLeft: function anonymous(
) {
return this.getResizableLeft()
}
setResizable: function anonymous(
) {
var a=arguments[0] instanceof Array?arguments[0]:arguments;a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));this.setResizableTop(a[0]);this.setResizableRight(a[1]);this.setResizableBottom(a[2]);this.setResizableLeft(a[3]);
}
resetResizable: function anonymous(
) {
this.resetResizableTop();this.resetResizableRight();this.resetResizableBottom();this.resetResizableLeft();
}
getResizeSensitivity: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setResizeSensitivity: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"resizeSensitivity","set",value);this.$$user_resizeSensitivity=value;return value;
}
resetResizeSensitivity: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
setRuntimeResizeSensitivity: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeResizeSensitivity: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
getUseResizeFrame: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setUseResizeFrame: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"useResizeFrame","set",value);this.$$user_useResizeFrame=value;return value;
}
resetUseResizeFrame: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
setRuntimeUseResizeFrame: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeUseResizeFrame: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
toggleUseResizeFrame: function anonymous(
) {
return this.setUseResizeFrame(!this.getUseResizeFrame())
}
isUseResizeFrame: function anonymous(
) {
return this.getUseResizeFrame()
}
setResizeHandle: function(E){if(this.__tj==E){return;}if(this.__tj){this.__tj.removeListener(s,this.__tk,this,true);this.__tj.removeListener(u,this.__tl,this,true);}this.__tj=E;if(this.__tj){this.__tj.addListener(s,this.__tk,this,true);this.__tj.addListener(u,this.__tl,this,true);}}
__tk: function(e){if(!this.hasState(p)&&!this.hasState(o)&&!this.__tc.isSessionActive()){this.__te=0;if(this.getResizableLeft()){this.__te+=this.RESIZE_LEFT;}if(this.getResizableTop()){this.__te+=this.RESIZE_TOP;}if(this.getResizableRight()){this.__te+=this.RESIZE_RIGHT;}if(this.getResizableBottom()){this.__te+=this.RESIZE_BOTTOM;}}}
__tl: function(e){if(!this.hasState(p)){this.__te=0;}}
_getResizeFrame: function(){var F=this.__td;if(!F){F=this.__td=new qx.ui.core.Widget();F.setAppearance(x);F.exclude();qx.core.Init.getApplication().getRoot().add(F);}return F;}
__tm: function(){var location=this.getContentLocation();var G=this._getResizeFrame();G.setUserBounds(location.left,location.top,location.right-location.left,location.bottom-location.top);G.show();G.setZIndex(this.getZIndex()+1);}
__tn: function(e){var I=this.__te;var H=this.getSizeHint();var L=this.__ti;var K=this.__th;var M=K.width;var J=K.height;var O=K.left;var top=K.top;var N;if((I&this.RESIZE_TOP)||(I&this.RESIZE_BOTTOM)){N=Math.max(L.top,Math.min(L.bottom,e.getDocumentTop()))-this.__tg;if(this.getMaxHeight()>0){N=Math.min(this.getMaxHeight()-J,N);}if(I&this.RESIZE_TOP){J-=N;}else{J+=N;}if(J<H.minHeight){J=H.minHeight;}else{if(J>H.maxHeight){J=H.maxHeight;}}if(I&this.RESIZE_TOP){top+=K.height-J;}}if((I&this.RESIZE_LEFT)||(I&this.RESIZE_RIGHT)){N=Math.max(L.left,Math.min(L.right,e.getDocumentLeft()))-this.__tf;if(this.getMaxWidth()>0){N=Math.min(this.getMaxWidth()-M,N);}if(I&this.RESIZE_LEFT){M-=N;}else{M+=N;}if(M<H.minWidth){M=H.minWidth;}else{if(M>H.maxWidth){M=H.maxWidth;}}if(I&this.RESIZE_LEFT){O+=K.width-M;}}return{viewportLeft:O,viewportTop:top,parentLeft:K.bounds.left+O-K.left,parentTop:K.bounds.top+top-K.top,width:M,height:J};}
__tp: function(e){var location=this.getContentLocation();var R=this.getResizeSensitivity();var Q=e.getDocumentLeft();var S=e.getDocumentTop();var P=this.__tq(location,Q,S,R);if(P>0){P=P|this.__tq(location,Q,S,R*2);}this.__te=P;}
__tq: function(location,W,U,V){var T=0;if(this.getResizableTop()&&Math.abs(location.top-U)<V&&W>location.left-V&&W<location.right+V){T+=this.RESIZE_TOP;}else{if(this.getResizableBottom()&&Math.abs(location.bottom-U)<V&&W>location.left-V&&W<location.right+V){T+=this.RESIZE_BOTTOM;}}if(this.getResizableLeft()&&Math.abs(location.left-W)<V&&U>location.top-V&&U<location.bottom+V){T+=this.RESIZE_LEFT;}else{if(this.getResizableRight()&&Math.abs(location.right-W)<V&&U>location.top-V&&U<location.bottom+V){T+=this.RESIZE_RIGHT;}}return T;}
__tr: function(e){if(!this.__te||!this.getEnabled()||e.getPointerType()==c){return;}this.addState(p);this.__tf=e.getDocumentLeft();this.__tg=e.getDocumentTop();var location=this.getContentLocation();var Y=this.getBounds();this.__th={top:location.top,left:location.left,width:location.right-location.left,height:location.bottom-location.top,bounds:qx.lang.Object.clone(Y)};var parent=this.getLayoutParent();var ba=parent.getContentLocation();var X=parent.getBounds();this.__ti={left:ba.left,top:ba.top,right:ba.left+X.width,bottom:ba.top+X.height};if(this.getUseResizeFrame()){this.__tm();}this.capture();e.stop();}
__ts: function(e){if(!this.hasState(p)||!this.getEnabled()||e.getPointerType()==c){return;}if(this.getUseResizeFrame()){this._getResizeFrame().exclude();}var bb=this.__tn(e);this.setWidth(bb.width);this.setHeight(bb.height);if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:bb.parentLeft,top:bb.parentTop});}this.__te=0;this.removeState(p);this.resetCursor();this.getApplicationRoot().resetGlobalCursor();this.releaseCapture();e.stopPropagation();}
__tt: function(e){if(!this.__te){return;}this.resetCursor();this.getApplicationRoot().resetGlobalCursor();this.removeState(m);if(this.getUseResizeFrame()){this._getResizeFrame().exclude();}}
__tu: function(e){if(!this.getEnabled()||e.getPointerType()==c){return;}if(this.hasState(p)){var bd=this.__tn(e);if(this.getUseResizeFrame()){var bc=this._getResizeFrame();bc.setUserBounds(bd.viewportLeft,bd.viewportTop,bd.width,bd.height);}else{this.setWidth(bd.width);this.setHeight(bd.height);if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:bd.parentLeft,top:bd.parentTop});}}e.stopPropagation();}else{if(!this.__tj&&!this.hasState(o)&&!this.__tc.isSessionActive()){this.__tp(e);var bg=this.__te;var bf=this.getApplicationRoot();if(bg){var be=this.__to[bg];this.setCursor(be);bf.setGlobalCursor(be);}else{if(this.getCursor()){this.resetCursor();bf.resetGlobalCursor();}}}}}
__tv: function(e){if(e.getPointerType()==c){return;}if(this.getCursor()&&!this.hasState(p)){this.resetCursor();this.getApplicationRoot().resetGlobalCursor();}}
getMovable: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setMovable: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"movable","set",value);this.$$user_movable=value;return value;
}
resetMovable: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
setRuntimeMovable: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeMovable: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
toggleMovable: function anonymous(
) {
return this.setMovable(!this.getMovable())
}
isMovable: function anonymous(
) {
return this.getMovable()
}
getUseMoveFrame: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setUseMoveFrame: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"useMoveFrame","set",value);this.$$user_useMoveFrame=value;return value;
}
resetUseMoveFrame: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
setRuntimeUseMoveFrame: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeUseMoveFrame: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
toggleUseMoveFrame: function anonymous(
) {
return this.setUseMoveFrame(!this.getUseMoveFrame())
}
isUseMoveFrame: function anonymous(
) {
return this.getUseMoveFrame()
}
_activateMoveHandle: function(o){if(this.__sN){throw new Error(i);}this.__sN=o;o.addListener(j,this._onMovePointerDown,this);o.addListener(b,this._onMovePointerUp,this);o.addListener(l,this._onMovePointerMove,this);o.addListener(d,this.__tb,this);}
__sX: function(){var p=this.__sO;if(!p){p=this.__sO=new qx.ui.core.Widget();p.setAppearance(n);p.exclude();qx.core.Init.getApplication().getRoot().add(p);}return p;}
__sY: function(){var location=this.getContentLocation();var r=this.getBounds();var q=this.__sX();q.setUserBounds(location.left,location.top,r.width,r.height);q.show();q.setZIndex(this.getZIndex()+1);}
__ta: function(e){var t=this.__sP;var s=Math.max(t.left,Math.min(t.right,e.getDocumentLeft()));var v=Math.max(t.top,Math.min(t.bottom,e.getDocumentTop()));var u=this.__sQ+s;var w=this.__sR+v;return{viewportLeft:parseInt(u,10),viewportTop:parseInt(w,10),parentLeft:parseInt(u-this.__sS,10),parentTop:parseInt(w-this.__sT,10)};}
_onMoveRoll: function(e){e.stop();}
_onMovePointerDown: function(e){if(!this.getMovable()||this.hasState(k)){return;}this.addListener(m,this._onMoveRoll,this);var parent=this.getLayoutParent();var x=parent.getContentLocation();var z=parent.getBounds();if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(!parent.isBlocked()){this.__sV=parent.getBlockerColor();this.__sW=parent.getBlockerOpacity();parent.setBlockerColor(null);parent.setBlockerOpacity(1);parent.blockContent(this.getZIndex()-1);this.__sU=true;}}this.__sP={left:x.left,top:x.top,right:x.left+z.width,bottom:x.top+z.height};var y=this.getContentLocation();this.__sS=x.left;this.__sT=x.top;this.__sQ=y.left-e.getDocumentLeft();this.__sR=y.top-e.getDocumentTop();this.addState(f);this.__sN.capture();if(this.getUseMoveFrame()){this.__sY();}e.stop();}
_onMovePointerMove: function(e){if(!this.hasState(f)){return;}var B=this.__ta(e);if(this.getUseMoveFrame()){this.__sX().setDomPosition(B.viewportLeft,B.viewportTop);}else{var A=this.getLayoutParent().getInsets();this.setDomPosition(B.parentLeft-(A.left||0),B.parentTop-(A.top||0));}e.stopPropagation();}
_onMovePointerUp: function(e){if(this.hasListener(m)){this.removeListener(m,this._onMoveRoll,this);}if(!this.hasState(f)){return;}this.removeState(f);var parent=this.getLayoutParent();if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(this.__sU){parent.unblock();parent.setBlockerColor(this.__sV);parent.setBlockerOpacity(this.__sW);this.__sV=null;this.__sW=0;this.__sU=false;}}this.__sN.releaseCapture();var D=this.__ta(e);var C=this.getLayoutParent().getInsets();this.setLayoutProperties({left:D.parentLeft-(C.left||0),top:D.parentTop-(C.top||0)});if(this.getUseMoveFrame()){this.__sX().exclude();}e.stopPropagation();}
__tb: function(e){if(!this.hasState(f)){return;}this.removeState(f);if(this.getUseMoveFrame()){this.__sX().exclude();}}
getContentPaddingTop: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setContentPaddingTop: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"contentPaddingTop","set",value);if(this.$$user_contentPaddingTop===value)return value;var computed, old;if(this.$$runtime_contentPaddingTop!==undefined){old=computed=this.$$runtime_contentPaddingTop;this.$$user_contentPaddingTop=value;}else if(this.$$user_contentPaddingTop!==undefined){old=this.$$user_contentPaddingTop;computed=this.$$user_contentPaddingTop=value;}else if(this.$$theme_contentPaddingTop!==undefined){old=this.$$theme_contentPaddingTop;computed=this.$$user_contentPaddingTop=value;}else if(this.$$useinit_contentPaddingTop){old=this.$$init_contentPaddingTop;delete this.$$useinit_contentPaddingTop;computed=this.$$user_contentPaddingTop=value;}else{computed=this.$$user_contentPaddingTop=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_contentPaddingTop;this._applyContentPadding(computed, old, "contentPaddingTop", "set");return value;
}
resetContentPaddingTop: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initContentPaddingTop: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeContentPaddingTop: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeContentPaddingTop: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedContentPaddingTop: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedContentPaddingTop: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getContentPaddingRight: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setContentPaddingRight: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"contentPaddingRight","set",value);if(this.$$user_contentPaddingRight===value)return value;var computed, old;if(this.$$runtime_contentPaddingRight!==undefined){old=computed=this.$$runtime_contentPaddingRight;this.$$user_contentPaddingRight=value;}else if(this.$$user_contentPaddingRight!==undefined){old=this.$$user_contentPaddingRight;computed=this.$$user_contentPaddingRight=value;}else if(this.$$theme_contentPaddingRight!==undefined){old=this.$$theme_contentPaddingRight;computed=this.$$user_contentPaddingRight=value;}else if(this.$$useinit_contentPaddingRight){old=this.$$init_contentPaddingRight;delete this.$$useinit_contentPaddingRight;computed=this.$$user_contentPaddingRight=value;}else{computed=this.$$user_contentPaddingRight=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_contentPaddingRight;this._applyContentPadding(computed, old, "contentPaddingRight", "set");return value;
}
resetContentPaddingRight: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initContentPaddingRight: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeContentPaddingRight: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeContentPaddingRight: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedContentPaddingRight: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedContentPaddingRight: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getContentPaddingBottom: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setContentPaddingBottom: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"contentPaddingBottom","set",value);if(this.$$user_contentPaddingBottom===value)return value;var computed, old;if(this.$$runtime_contentPaddingBottom!==undefined){old=computed=this.$$runtime_contentPaddingBottom;this.$$user_contentPaddingBottom=value;}else if(this.$$user_contentPaddingBottom!==undefined){old=this.$$user_contentPaddingBottom;computed=this.$$user_contentPaddingBottom=value;}else if(this.$$theme_contentPaddingBottom!==undefined){old=this.$$theme_contentPaddingBottom;computed=this.$$user_contentPaddingBottom=value;}else if(this.$$useinit_contentPaddingBottom){old=this.$$init_contentPaddingBottom;delete this.$$useinit_contentPaddingBottom;computed=this.$$user_contentPaddingBottom=value;}else{computed=this.$$user_contentPaddingBottom=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_contentPaddingBottom;this._applyContentPadding(computed, old, "contentPaddingBottom", "set");return value;
}
resetContentPaddingBottom: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initContentPaddingBottom: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeContentPaddingBottom: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeContentPaddingBottom: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedContentPaddingBottom: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedContentPaddingBottom: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getContentPaddingLeft: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setContentPaddingLeft: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"contentPaddingLeft","set",value);if(this.$$user_contentPaddingLeft===value)return value;var computed, old;if(this.$$runtime_contentPaddingLeft!==undefined){old=computed=this.$$runtime_contentPaddingLeft;this.$$user_contentPaddingLeft=value;}else if(this.$$user_contentPaddingLeft!==undefined){old=this.$$user_contentPaddingLeft;computed=this.$$user_contentPaddingLeft=value;}else if(this.$$theme_contentPaddingLeft!==undefined){old=this.$$theme_contentPaddingLeft;computed=this.$$user_contentPaddingLeft=value;}else if(this.$$useinit_contentPaddingLeft){old=this.$$init_contentPaddingLeft;delete this.$$useinit_contentPaddingLeft;computed=this.$$user_contentPaddingLeft=value;}else{computed=this.$$user_contentPaddingLeft=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_contentPaddingLeft;this._applyContentPadding(computed, old, "contentPaddingLeft", "set");return value;
}
resetContentPaddingLeft: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initContentPaddingLeft: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeContentPaddingLeft: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeContentPaddingLeft: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedContentPaddingLeft: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedContentPaddingLeft: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
setContentPadding: function anonymous(
) {
var a=arguments[0] instanceof Array?arguments[0]:arguments;a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));this.setContentPaddingTop(a[0]);this.setContentPaddingRight(a[1]);this.setContentPaddingBottom(a[2]);this.setContentPaddingLeft(a[3]);
}
resetContentPadding: function anonymous(
) {
this.resetContentPaddingTop();this.resetContentPaddingRight();this.resetContentPaddingBottom();this.resetContentPaddingLeft();
}
setThemedContentPadding: function anonymous(
) {
var a=arguments[0] instanceof Array?arguments[0]:arguments;a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));this.setThemedContentPaddingTop(a[0]);this.setThemedContentPaddingRight(a[1]);this.setThemedContentPaddingBottom(a[2]);this.setThemedContentPaddingLeft(a[3]);
}
resetThemedContentPadding: function anonymous(
) {
this.resetThemedContentPaddingTop();this.resetThemedContentPaddingRight();this.resetThemedContentPaddingBottom();this.resetThemedContentPaddingLeft();
}
_applyContentPadding: function(z,w,name,y){var A=this._getContentPaddingTarget();if(z==null){var x=this.__qs[name];A[x]();}else{if(y==m||y==e){var B=this.__qr[name];A[B](z);}else{var B=this.__qq[name];A[B](z);}}}
getPaddingTop: function anonymous(value
) {
if(this.$$runtime_paddingTop!==undefined)return this.$$runtime_paddingTop;if(this.$$user_paddingTop!==undefined)return this.$$user_paddingTop;else if(this.$$theme_paddingTop!==undefined)return this.$$theme_paddingTop;else return this.$$init_paddingTop;
}
setPaddingTop: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"paddingTop","set",value);if(this.$$user_paddingTop===value)return value;var computed, old;if(this.$$runtime_paddingTop!==undefined){old=computed=this.$$runtime_paddingTop;this.$$user_paddingTop=value;}else if(this.$$user_paddingTop!==undefined){old=this.$$user_paddingTop;computed=this.$$user_paddingTop=value;}else if(this.$$theme_paddingTop!==undefined){old=this.$$theme_paddingTop;computed=this.$$user_paddingTop=value;}else if(this.$$useinit_paddingTop){old=this.$$init_paddingTop;delete this.$$useinit_paddingTop;computed=this.$$user_paddingTop=value;}else{computed=this.$$user_paddingTop=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_paddingTop;this._applyPadding(computed, old, "paddingTop", "set");return value;
}
resetPaddingTop: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initPaddingTop: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimePaddingTop: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimePaddingTop: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedPaddingTop: function anonymous(value
) {
var prop=qx.core.Property;if(this.$$theme_paddingTop===value)return value;var computed, old;if(this.$$runtime_paddingTop!==undefined){old=computed=this.$$runtime_paddingTop;this.$$theme_paddingTop=value;}else if(this.$$user_paddingTop!==undefined){old=computed=this.$$user_paddingTop;this.$$theme_paddingTop=value;}else if(this.$$theme_paddingTop!==undefined){old=this.$$theme_paddingTop;computed=this.$$theme_paddingTop=value;}else if(this.$$useinit_paddingTop){old=this.$$init_paddingTop;delete this.$$useinit_paddingTop;computed=this.$$theme_paddingTop=value;}else{computed=this.$$theme_paddingTop=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_paddingTop;this._applyPadding(computed, old, "paddingTop", "setThemed");return value;
}
resetThemedPaddingTop: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getPaddingRight: function anonymous(value
) {
if(this.$$runtime_paddingRight!==undefined)return this.$$runtime_paddingRight;if(this.$$user_paddingRight!==undefined)return this.$$user_paddingRight;else if(this.$$theme_paddingRight!==undefined)return this.$$theme_paddingRight;else return this.$$init_paddingRight;
}
setPaddingRight: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"paddingRight","set",value);if(this.$$user_paddingRight===value)return value;var computed, old;if(this.$$runtime_paddingRight!==undefined){old=computed=this.$$runtime_paddingRight;this.$$user_paddingRight=value;}else if(this.$$user_paddingRight!==undefined){old=this.$$user_paddingRight;computed=this.$$user_paddingRight=value;}else if(this.$$theme_paddingRight!==undefined){old=this.$$theme_paddingRight;computed=this.$$user_paddingRight=value;}else if(this.$$useinit_paddingRight){old=this.$$init_paddingRight;delete this.$$useinit_paddingRight;computed=this.$$user_paddingRight=value;}else{computed=this.$$user_paddingRight=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_paddingRight;this._applyPadding(computed, old, "paddingRight", "set");return value;
}
resetPaddingRight: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initPaddingRight: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimePaddingRight: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimePaddingRight: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedPaddingRight: function anonymous(value
) {
var prop=qx.core.Property;if(this.$$theme_paddingRight===value)return value;var computed, old;if(this.$$runtime_paddingRight!==undefined){old=computed=this.$$runtime_paddingRight;this.$$theme_paddingRight=value;}else if(this.$$user_paddingRight!==undefined){old=computed=this.$$user_paddingRight;this.$$theme_paddingRight=value;}else if(this.$$theme_paddingRight!==undefined){old=this.$$theme_paddingRight;computed=this.$$theme_paddingRight=value;}else if(this.$$useinit_paddingRight){old=this.$$init_paddingRight;delete this.$$useinit_paddingRight;computed=this.$$theme_paddingRight=value;}else{computed=this.$$theme_paddingRight=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_paddingRight;this._applyPadding(computed, old, "paddingRight", "setThemed");return value;
}
resetThemedPaddingRight: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getPaddingBottom: function anonymous(value
) {
if(this.$$runtime_paddingBottom!==undefined)return this.$$runtime_paddingBottom;if(this.$$user_paddingBottom!==undefined)return this.$$user_paddingBottom;else if(this.$$theme_paddingBottom!==undefined)return this.$$theme_paddingBottom;else return this.$$init_paddingBottom;
}
setPaddingBottom: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"paddingBottom","set",value);if(this.$$user_paddingBottom===value)return value;var computed, old;if(this.$$runtime_paddingBottom!==undefined){old=computed=this.$$runtime_paddingBottom;this.$$user_paddingBottom=value;}else if(this.$$user_paddingBottom!==undefined){old=this.$$user_paddingBottom;computed=this.$$user_paddingBottom=value;}else if(this.$$theme_paddingBottom!==undefined){old=this.$$theme_paddingBottom;computed=this.$$user_paddingBottom=value;}else if(this.$$useinit_paddingBottom){old=this.$$init_paddingBottom;delete this.$$useinit_paddingBottom;computed=this.$$user_paddingBottom=value;}else{computed=this.$$user_paddingBottom=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_paddingBottom;this._applyPadding(computed, old, "paddingBottom", "set");return value;
}
resetPaddingBottom: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initPaddingBottom: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimePaddingBottom: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimePaddingBottom: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedPaddingBottom: function anonymous(value
) {
var prop=qx.core.Property;if(this.$$theme_paddingBottom===value)return value;var computed, old;if(this.$$runtime_paddingBottom!==undefined){old=computed=this.$$runtime_paddingBottom;this.$$theme_paddingBottom=value;}else if(this.$$user_paddingBottom!==undefined){old=computed=this.$$user_paddingBottom;this.$$theme_paddingBottom=value;}else if(this.$$theme_paddingBottom!==undefined){old=this.$$theme_paddingBottom;computed=this.$$theme_paddingBottom=value;}else if(this.$$useinit_paddingBottom){old=this.$$init_paddingBottom;delete this.$$useinit_paddingBottom;computed=this.$$theme_paddingBottom=value;}else{computed=this.$$theme_paddingBottom=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_paddingBottom;this._applyPadding(computed, old, "paddingBottom", "setThemed");return value;
}
resetThemedPaddingBottom: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getPaddingLeft: function anonymous(value
) {
if(this.$$runtime_paddingLeft!==undefined)return this.$$runtime_paddingLeft;if(this.$$user_paddingLeft!==undefined)return this.$$user_paddingLeft;else if(this.$$theme_paddingLeft!==undefined)return this.$$theme_paddingLeft;else return this.$$init_paddingLeft;
}
setPaddingLeft: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"paddingLeft","set",value);if(this.$$user_paddingLeft===value)return value;var computed, old;if(this.$$runtime_paddingLeft!==undefined){old=computed=this.$$runtime_paddingLeft;this.$$user_paddingLeft=value;}else if(this.$$user_paddingLeft!==undefined){old=this.$$user_paddingLeft;computed=this.$$user_paddingLeft=value;}else if(this.$$theme_paddingLeft!==undefined){old=this.$$theme_paddingLeft;computed=this.$$user_paddingLeft=value;}else if(this.$$useinit_paddingLeft){old=this.$$init_paddingLeft;delete this.$$useinit_paddingLeft;computed=this.$$user_paddingLeft=value;}else{computed=this.$$user_paddingLeft=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_paddingLeft;this._applyPadding(computed, old, "paddingLeft", "set");return value;
}
resetPaddingLeft: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initPaddingLeft: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimePaddingLeft: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimePaddingLeft: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedPaddingLeft: function anonymous(value
) {
var prop=qx.core.Property;if(this.$$theme_paddingLeft===value)return value;var computed, old;if(this.$$runtime_paddingLeft!==undefined){old=computed=this.$$runtime_paddingLeft;this.$$theme_paddingLeft=value;}else if(this.$$user_paddingLeft!==undefined){old=computed=this.$$user_paddingLeft;this.$$theme_paddingLeft=value;}else if(this.$$theme_paddingLeft!==undefined){old=this.$$theme_paddingLeft;computed=this.$$theme_paddingLeft=value;}else if(this.$$useinit_paddingLeft){old=this.$$init_paddingLeft;delete this.$$useinit_paddingLeft;computed=this.$$theme_paddingLeft=value;}else{computed=this.$$theme_paddingLeft=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_paddingLeft;this._applyPadding(computed, old, "paddingLeft", "setThemed");return value;
}
resetThemedPaddingLeft: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
setPadding: function anonymous(
) {
var a=arguments[0] instanceof Array?arguments[0]:arguments;a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));this.setPaddingTop(a[0]);this.setPaddingRight(a[1]);this.setPaddingBottom(a[2]);this.setPaddingLeft(a[3]);
}
resetPadding: function anonymous(
) {
this.resetPaddingTop();this.resetPaddingRight();this.resetPaddingBottom();this.resetPaddingLeft();
}
setThemedPadding: function anonymous(
) {
var a=arguments[0] instanceof Array?arguments[0]:arguments;a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));this.setThemedPaddingTop(a[0]);this.setThemedPaddingRight(a[1]);this.setThemedPaddingBottom(a[2]);this.setThemedPaddingLeft(a[3]);
}
resetThemedPadding: function anonymous(
) {
this.resetThemedPaddingTop();this.resetThemedPaddingRight();this.resetThemedPaddingBottom();this.resetThemedPaddingLeft();
}
getZIndex: function anonymous(value
) {
if(this.$$runtime_zIndex!==undefined)return this.$$runtime_zIndex;if(this.$$user_zIndex!==undefined)return this.$$user_zIndex;else if(this.$$theme_zIndex!==undefined)return this.$$theme_zIndex;else return this.$$init_zIndex;
}
setZIndex: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"zIndex","set",value);if(this.$$user_zIndex===value)return value;var computed, old;if(this.$$runtime_zIndex!==undefined){old=computed=this.$$runtime_zIndex;this.$$user_zIndex=value;}else if(this.$$user_zIndex!==undefined){old=this.$$user_zIndex;computed=this.$$user_zIndex=value;}else if(this.$$theme_zIndex!==undefined){old=this.$$theme_zIndex;computed=this.$$user_zIndex=value;}else if(this.$$useinit_zIndex){old=this.$$init_zIndex;delete this.$$useinit_zIndex;computed=this.$$user_zIndex=value;}else{computed=this.$$user_zIndex=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_zIndex;this._applyZIndex(computed, old, "zIndex", "set");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeZIndex')){reg.fireEvent(this, 'changeZIndex', qx.event.type.Data, [computed, old])}return value;
}
resetZIndex: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initZIndex: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeZIndex: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeZIndex: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedZIndex: function anonymous(value
) {
var prop=qx.core.Property;if(this.$$theme_zIndex===value)return value;var computed, old;if(this.$$runtime_zIndex!==undefined){old=computed=this.$$runtime_zIndex;this.$$theme_zIndex=value;}else if(this.$$user_zIndex!==undefined){old=computed=this.$$user_zIndex;this.$$theme_zIndex=value;}else if(this.$$theme_zIndex!==undefined){old=this.$$theme_zIndex;computed=this.$$theme_zIndex=value;}else if(this.$$useinit_zIndex){old=this.$$init_zIndex;delete this.$$useinit_zIndex;computed=this.$$theme_zIndex=value;}else{computed=this.$$theme_zIndex=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_zIndex;this._applyZIndex(computed, old, "zIndex", "setThemed");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeZIndex')){reg.fireEvent(this, 'changeZIndex', qx.event.type.Data, [computed, old])}return value;
}
resetThemedZIndex: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getDecorator: function anonymous(value
) {
if(this.$$runtime_decorator!==undefined)return this.$$runtime_decorator;if(this.$$user_decorator!==undefined)return this.$$user_decorator;else if(this.$$theme_decorator!==undefined)return this.$$theme_decorator;else return this.$$init_decorator;
}
setDecorator: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"decorator","set",value);if(this.$$user_decorator===value)return value;var computed, old;if(this.$$runtime_decorator!==undefined){old=computed=this.$$runtime_decorator;this.$$user_decorator=value;}else if(this.$$user_decorator!==undefined){old=this.$$user_decorator;computed=this.$$user_decorator=value;}else if(this.$$theme_decorator!==undefined){old=this.$$theme_decorator;computed=this.$$user_decorator=value;}else if(this.$$useinit_decorator){old=this.$$init_decorator;delete this.$$useinit_decorator;computed=this.$$user_decorator=value;}else{computed=this.$$user_decorator=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_decorator;this._applyDecorator(computed, old, "decorator", "set");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeDecorator')){reg.fireEvent(this, 'changeDecorator', qx.event.type.Data, [computed, old])}return value;
}
resetDecorator: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initDecorator: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeDecorator: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeDecorator: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedDecorator: function anonymous(value
) {
var prop=qx.core.Property;if(this.$$theme_decorator===value)return value;var computed, old;if(this.$$runtime_decorator!==undefined){old=computed=this.$$runtime_decorator;this.$$theme_decorator=value;}else if(this.$$user_decorator!==undefined){old=computed=this.$$user_decorator;this.$$theme_decorator=value;}else if(this.$$theme_decorator!==undefined){old=this.$$theme_decorator;computed=this.$$theme_decorator=value;}else if(this.$$useinit_decorator){old=this.$$init_decorator;delete this.$$useinit_decorator;computed=this.$$theme_decorator=value;}else{computed=this.$$theme_decorator=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_decorator;this._applyDecorator(computed, old, "decorator", "setThemed");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeDecorator')){reg.fireEvent(this, 'changeDecorator', qx.event.type.Data, [computed, old])}return value;
}
resetThemedDecorator: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getBackgroundColor: function anonymous(value
) {
if(this.$$runtime_backgroundColor!==undefined)return this.$$runtime_backgroundColor;if(this.$$user_backgroundColor!==undefined)return this.$$user_backgroundColor;else if(this.$$theme_backgroundColor!==undefined)return this.$$theme_backgroundColor;else return null;
}
setBackgroundColor: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"backgroundColor","set",value);if(this.$$user_backgroundColor===value)return value;var computed, old;if(this.$$runtime_backgroundColor!==undefined){old=computed=this.$$runtime_backgroundColor;this.$$user_backgroundColor=value;}else if(this.$$user_backgroundColor!==undefined){old=this.$$user_backgroundColor;computed=this.$$user_backgroundColor=value;}else if(this.$$theme_backgroundColor!==undefined){old=this.$$theme_backgroundColor;computed=this.$$user_backgroundColor=value;}else if(this.$$useinit_backgroundColor){old=this.$$init_backgroundColor;delete this.$$useinit_backgroundColor;computed=this.$$user_backgroundColor=value;}else{computed=this.$$user_backgroundColor=value;}if(old===computed)return value;if(old===undefined)old=null;this._applyBackgroundColor(computed, old, "backgroundColor", "set");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeBackgroundColor')){reg.fireEvent(this, 'changeBackgroundColor', qx.event.type.Data, [computed, old])}return value;
}
resetBackgroundColor: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initBackgroundColor: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeBackgroundColor: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeBackgroundColor: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedBackgroundColor: function anonymous(value
) {
var prop=qx.core.Property;if(this.$$theme_backgroundColor===value)return value;var computed, old;if(this.$$runtime_backgroundColor!==undefined){old=computed=this.$$runtime_backgroundColor;this.$$theme_backgroundColor=value;}else if(this.$$user_backgroundColor!==undefined){old=computed=this.$$user_backgroundColor;this.$$theme_backgroundColor=value;}else if(this.$$theme_backgroundColor!==undefined){old=this.$$theme_backgroundColor;computed=this.$$theme_backgroundColor=value;}else if(this.$$useinit_backgroundColor){old=this.$$init_backgroundColor;delete this.$$useinit_backgroundColor;computed=this.$$theme_backgroundColor=value;}else{computed=this.$$theme_backgroundColor=value;}if(old===computed)return value;if(old===undefined)old=null;this._applyBackgroundColor(computed, old, "backgroundColor", "setThemed");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeBackgroundColor')){reg.fireEvent(this, 'changeBackgroundColor', qx.event.type.Data, [computed, old])}return value;
}
resetThemedBackgroundColor: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
$$refreshInheritables: function anonymous(
) {
var parent = this.getLayoutParent();if (!parent) return;var value = parent.$$inherit_textColor;if (value===undefined) value = parent.$$init_textColor;this.refreshTextColor(value);var value = parent.$$inherit_font;if (value===undefined) value = parent.$$init_font;this.refreshFont(value);var value = parent.$$inherit_cursor;if (value===undefined) value = parent.$$init_cursor;this.refreshCursor(value);var value = parent.$$inherit_enabled;if (value===undefined) value = parent.$$init_enabled;this.refreshEnabled(value);
}
getTextColor: function anonymous(value
) {
if(this.$$runtime_textColor!==undefined)return this.$$runtime_textColor;else if(this.$$inherit_textColor!==undefined)return this.$$inherit_textColor;else if(this.$$user_textColor!==undefined)return this.$$user_textColor;else if(this.$$theme_textColor!==undefined)return this.$$theme_textColor;else return null;
}
setTextColor: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"textColor","set",value);if(this.$$user_textColor===value)return value;var inherit=prop.$$inherit;var computed, old=this.$$inherit_textColor;if(this.$$runtime_textColor!==undefined){old=computed=this.$$runtime_textColor;this.$$user_textColor=value;}else if(this.$$user_textColor!==undefined){computed=this.$$user_textColor=value;}else if(this.$$theme_textColor!==undefined){computed=this.$$user_textColor=value;}else if(this.$$useinit_textColor){delete this.$$useinit_textColor;computed=this.$$user_textColor=value;}else{computed=this.$$user_textColor=value;}if(computed===undefined||computed===inherit){var pa=this.getLayoutParent();if(pa)computed=pa.$$inherit_textColor;if((computed===undefined||computed===inherit)&&this.$$init_textColor!==undefined&&this.$$init_textColor!==inherit){computed=this.$$init_textColor;this.$$useinit_textColor=true;}else{delete this.$$useinit_textColor;}}if(old===computed)return value;if(computed===inherit){computed=undefined;delete this.$$inherit_textColor;}else if(computed===undefined)delete this.$$inherit_textColor;else this.$$inherit_textColor=computed;var backup=computed;if(old===undefined)old=null;if(computed===undefined||computed==inherit)computed=null;this._applyTextColor(computed, old, "textColor", "set");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeTextColor')){reg.fireEvent(this, 'changeTextColor', qx.event.type.Data, [computed, old])}var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){if(a[i].refreshTextColor)a[i].refreshTextColor(backup);}return value;
}
resetTextColor: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initTextColor: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
refreshTextColor: function anonymous(value
) {
var prop=qx.core.Property;var inherit=prop.$$inherit;var computed, old=this.$$inherit_textColor;if(this.$$runtime_textColor!==undefined){old=computed=this.$$runtime_textColor;}else if(this.$$user_textColor!==undefined){computed=this.$$user_textColor;}else if(this.$$theme_textColor!==undefined){computed=this.$$theme_textColor;}else if(this.$$useinit_textColor){delete this.$$useinit_textColor;computed=this.$$init_textColor;}if(computed===undefined||computed===inherit){computed=value;if((computed===undefined||computed===inherit)&&this.$$init_textColor!==undefined&&this.$$init_textColor!==inherit){computed=this.$$init_textColor;this.$$useinit_textColor=true;}else{delete this.$$useinit_textColor;}}if(old===computed)return value;if(computed===inherit){computed=undefined;delete this.$$inherit_textColor;}else if(computed===undefined)delete this.$$inherit_textColor;else this.$$inherit_textColor=computed;var backup=computed;if(old===undefined)old=null;if(computed===undefined||computed==inherit)computed=null;this._applyTextColor(computed, old, "textColor", "refresh");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeTextColor')){reg.fireEvent(this, 'changeTextColor', qx.event.type.Data, [computed, old])}var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){if(a[i].refreshTextColor)a[i].refreshTextColor(backup);}
}
setRuntimeTextColor: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeTextColor: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedTextColor: function anonymous(value
) {
var prop=qx.core.Property;if(this.$$theme_textColor===value)return value;var inherit=prop.$$inherit;var computed, old=this.$$inherit_textColor;if(this.$$runtime_textColor!==undefined){old=computed=this.$$runtime_textColor;this.$$theme_textColor=value;}else if(this.$$user_textColor!==undefined){computed=this.$$user_textColor;this.$$theme_textColor=value;}else if(this.$$theme_textColor!==undefined){computed=this.$$theme_textColor=value;}else if(this.$$useinit_textColor){delete this.$$useinit_textColor;computed=this.$$theme_textColor=value;}else{computed=this.$$theme_textColor=value;}if(computed===undefined||computed===inherit){var pa=this.getLayoutParent();if(pa)computed=pa.$$inherit_textColor;if((computed===undefined||computed===inherit)&&this.$$init_textColor!==undefined&&this.$$init_textColor!==inherit){computed=this.$$init_textColor;this.$$useinit_textColor=true;}else{delete this.$$useinit_textColor;}}if(old===computed)return value;if(computed===inherit){computed=undefined;delete this.$$inherit_textColor;}else if(computed===undefined)delete this.$$inherit_textColor;else this.$$inherit_textColor=computed;var backup=computed;if(old===undefined)old=null;if(computed===undefined||computed==inherit)computed=null;this._applyTextColor(computed, old, "textColor", "setThemed");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeTextColor')){reg.fireEvent(this, 'changeTextColor', qx.event.type.Data, [computed, old])}var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){if(a[i].refreshTextColor)a[i].refreshTextColor(backup);}return value;
}
resetThemedTextColor: function anonymous(value
) {
var prop=qx.core.Property;if(this.$$theme_textColor===undefined)return;var inherit=prop.$$inherit;var computed, old=this.$$inherit_textColor;if(this.$$runtime_textColor!==undefined){old=computed=this.$$runtime_textColor;delete this.$$theme_textColor;}else if(this.$$user_textColor!==undefined){computed=this.$$user_textColor;delete this.$$theme_textColor;}else if(this.$$theme_textColor!==undefined){delete this.$$theme_textColor;if(this.$$init_textColor!==undefined){computed=this.$$init_textColor;this.$$useinit_textColor=true;}}else if(this.$$useinit_textColor){}if(computed===undefined||computed===inherit){var pa=this.getLayoutParent();if(pa)computed=pa.$$inherit_textColor;if((computed===undefined||computed===inherit)&&this.$$init_textColor!==undefined&&this.$$init_textColor!==inherit){computed=this.$$init_textColor;this.$$useinit_textColor=true;}else{delete this.$$useinit_textColor;}}if(old===computed)return value;if(computed===inherit){computed=undefined;delete this.$$inherit_textColor;}else if(computed===undefined)delete this.$$inherit_textColor;else this.$$inherit_textColor=computed;var backup=computed;if(old===undefined)old=null;if(computed===undefined||computed==inherit)computed=null;this._applyTextColor(computed, old, "textColor", "resetThemed");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeTextColor')){reg.fireEvent(this, 'changeTextColor', qx.event.type.Data, [computed, old])}var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){if(a[i].refreshTextColor)a[i].refreshTextColor(backup);}
}
getFont: function anonymous(value
) {
if(this.$$runtime_font!==undefined)return this.$$runtime_font;else if(this.$$inherit_font!==undefined)return this.$$inherit_font;else if(this.$$user_font!==undefined)return this.$$user_font;else if(this.$$theme_font!==undefined)return this.$$theme_font;else return null;
}
setFont: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"font","set",value);if(this.$$user_font===value)return value;var inherit=prop.$$inherit;var computed, old=this.$$inherit_font;if(this.$$runtime_font!==undefined){old=computed=this.$$runtime_font;this.$$user_font=value;}else if(this.$$user_font!==undefined){computed=this.$$user_font=value;}else if(this.$$theme_font!==undefined){computed=this.$$user_font=value;}else if(this.$$useinit_font){delete this.$$useinit_font;computed=this.$$user_font=value;}else{computed=this.$$user_font=value;}if(computed===undefined||computed===inherit){var pa=this.getLayoutParent();if(pa)computed=pa.$$inherit_font;if((computed===undefined||computed===inherit)&&this.$$init_font!==undefined&&this.$$init_font!==inherit){computed=this.$$init_font;this.$$useinit_font=true;}else{delete this.$$useinit_font;}}if(old===computed)return value;if(computed===inherit){computed=undefined;delete this.$$inherit_font;}else if(computed===undefined)delete this.$$inherit_font;else this.$$inherit_font=computed;var backup=computed;if(old===undefined)old=null;if(computed===undefined||computed==inherit)computed=null;this._applyFont(computed, old, "font", "set");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeFont')){reg.fireEvent(this, 'changeFont', qx.event.type.Data, [computed, old])}var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){if(a[i].refreshFont)a[i].refreshFont(backup);}return value;
}
resetFont: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initFont: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
refreshFont: function anonymous(value
) {
var prop=qx.core.Property;var inherit=prop.$$inherit;var computed, old=this.$$inherit_font;if(this.$$runtime_font!==undefined){old=computed=this.$$runtime_font;}else if(this.$$user_font!==undefined){computed=this.$$user_font;}else if(this.$$theme_font!==undefined){computed=this.$$theme_font;}else if(this.$$useinit_font){delete this.$$useinit_font;computed=this.$$init_font;}if(computed===undefined||computed===inherit){computed=value;if((computed===undefined||computed===inherit)&&this.$$init_font!==undefined&&this.$$init_font!==inherit){computed=this.$$init_font;this.$$useinit_font=true;}else{delete this.$$useinit_font;}}if(old===computed)return value;if(computed===inherit){computed=undefined;delete this.$$inherit_font;}else if(computed===undefined)delete this.$$inherit_font;else this.$$inherit_font=computed;var backup=computed;if(old===undefined)old=null;if(computed===undefined||computed==inherit)computed=null;this._applyFont(computed, old, "font", "refresh");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeFont')){reg.fireEvent(this, 'changeFont', qx.event.type.Data, [computed, old])}var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){if(a[i].refreshFont)a[i].refreshFont(backup);}
}
setRuntimeFont: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeFont: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedFont: function anonymous(value
) {
var prop=qx.core.Property;if(this.$$theme_font===value)return value;var inherit=prop.$$inherit;var computed, old=this.$$inherit_font;if(this.$$runtime_font!==undefined){old=computed=this.$$runtime_font;this.$$theme_font=value;}else if(this.$$user_font!==undefined){computed=this.$$user_font;this.$$theme_font=value;}else if(this.$$theme_font!==undefined){computed=this.$$theme_font=value;}else if(this.$$useinit_font){delete this.$$useinit_font;computed=this.$$theme_font=value;}else{computed=this.$$theme_font=value;}if(computed===undefined||computed===inherit){var pa=this.getLayoutParent();if(pa)computed=pa.$$inherit_font;if((computed===undefined||computed===inherit)&&this.$$init_font!==undefined&&this.$$init_font!==inherit){computed=this.$$init_font;this.$$useinit_font=true;}else{delete this.$$useinit_font;}}if(old===computed)return value;if(computed===inherit){computed=undefined;delete this.$$inherit_font;}else if(computed===undefined)delete this.$$inherit_font;else this.$$inherit_font=computed;var backup=computed;if(old===undefined)old=null;if(computed===undefined||computed==inherit)computed=null;this._applyFont(computed, old, "font", "setThemed");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeFont')){reg.fireEvent(this, 'changeFont', qx.event.type.Data, [computed, old])}var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){if(a[i].refreshFont)a[i].refreshFont(backup);}return value;
}
resetThemedFont: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getOpacity: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setOpacity: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"opacity","set",value);if(this.$$user_opacity===value)return value;var computed, old;if(this.$$runtime_opacity!==undefined){old=computed=this.$$runtime_opacity;this.$$user_opacity=value;}else if(this.$$user_opacity!==undefined){old=this.$$user_opacity;computed=this.$$user_opacity=value;}else if(this.$$theme_opacity!==undefined){old=this.$$theme_opacity;computed=this.$$user_opacity=value;}else if(this.$$useinit_opacity){old=this.$$init_opacity;delete this.$$useinit_opacity;computed=this.$$user_opacity=value;}else{computed=this.$$user_opacity=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_opacity;this._applyOpacity(computed, old, "opacity", "set");return value;
}
resetOpacity: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initOpacity: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeOpacity: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeOpacity: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedOpacity: function anonymous(value
) {
var prop=qx.core.Property;if(this.$$theme_opacity===value)return value;var computed, old;if(this.$$runtime_opacity!==undefined){old=computed=this.$$runtime_opacity;this.$$theme_opacity=value;}else if(this.$$user_opacity!==undefined){old=computed=this.$$user_opacity;this.$$theme_opacity=value;}else if(this.$$theme_opacity!==undefined){old=this.$$theme_opacity;computed=this.$$theme_opacity=value;}else if(this.$$useinit_opacity){old=this.$$init_opacity;delete this.$$useinit_opacity;computed=this.$$theme_opacity=value;}else{computed=this.$$theme_opacity=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_opacity;this._applyOpacity(computed, old, "opacity", "setThemed");return value;
}
resetThemedOpacity: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getCursor: function anonymous(value
) {
if(this.$$runtime_cursor!==undefined)return this.$$runtime_cursor;else if(this.$$inherit_cursor!==undefined)return this.$$inherit_cursor;else if(this.$$user_cursor!==undefined)return this.$$user_cursor;else if(this.$$theme_cursor!==undefined)return this.$$theme_cursor;else var init=this.$$init_cursor;if(init==qx.core.Property.$$inherit)init=null;return init;
}
setCursor: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"cursor","set",value);if(this.$$user_cursor===value)return value;var inherit=prop.$$inherit;var computed, old=this.$$inherit_cursor;if(this.$$runtime_cursor!==undefined){old=computed=this.$$runtime_cursor;this.$$user_cursor=value;}else if(this.$$user_cursor!==undefined){computed=this.$$user_cursor=value;}else if(this.$$theme_cursor!==undefined){computed=this.$$user_cursor=value;}else if(this.$$useinit_cursor){delete this.$$useinit_cursor;computed=this.$$user_cursor=value;}else{computed=this.$$user_cursor=value;}if(computed===undefined||computed===inherit){var pa=this.getLayoutParent();if(pa)computed=pa.$$inherit_cursor;if((computed===undefined||computed===inherit)&&this.$$init_cursor!==undefined&&this.$$init_cursor!==inherit){computed=this.$$init_cursor;this.$$useinit_cursor=true;}else{delete this.$$useinit_cursor;}}if(old===computed)return value;if(computed===inherit){computed=undefined;delete this.$$inherit_cursor;}else if(computed===undefined)delete this.$$inherit_cursor;else this.$$inherit_cursor=computed;var backup=computed;if(old===undefined)old=this.$$init_cursor;if(computed===undefined||computed==inherit)computed=null;this._applyCursor(computed, old, "cursor", "set");var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){if(a[i].refreshCursor)a[i].refreshCursor(backup);}return value;
}
resetCursor: function anonymous(value
) {
var prop=qx.core.Property;if(this.$$user_cursor===undefined)return;var inherit=prop.$$inherit;var computed, old=this.$$inherit_cursor;if(this.$$runtime_cursor!==undefined){old=computed=this.$$runtime_cursor;delete this.$$user_cursor;}else if(this.$$user_cursor!==undefined){delete this.$$user_cursor;if(this.$$runtime_cursor!==undefined)computed=this.$$runtime_cursor;if(this.$$theme_cursor!==undefined)computed=this.$$theme_cursor;else if(this.$$init_cursor!==undefined){computed=this.$$init_cursor;this.$$useinit_cursor=true;}}else if(this.$$theme_cursor!==undefined){}else if(this.$$useinit_cursor){}if(computed===undefined||computed===inherit){var pa=this.getLayoutParent();if(pa)computed=pa.$$inherit_cursor;if((computed===undefined||computed===inherit)&&this.$$init_cursor!==undefined&&this.$$init_cursor!==inherit){computed=this.$$init_cursor;this.$$useinit_cursor=true;}else{delete this.$$useinit_cursor;}}if(old===computed)return value;if(computed===inherit){computed=undefined;delete this.$$inherit_cursor;}else if(computed===undefined)delete this.$$inherit_cursor;else this.$$inherit_cursor=computed;var backup=computed;if(old===undefined)old=this.$$init_cursor;if(computed===undefined||computed==inherit)computed=null;this._applyCursor(computed, old, "cursor", "reset");var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){if(a[i].refreshCursor)a[i].refreshCursor(backup);}
}
initCursor: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
refreshCursor: function anonymous(value
) {
var prop=qx.core.Property;var inherit=prop.$$inherit;var computed, old=this.$$inherit_cursor;if(this.$$runtime_cursor!==undefined){old=computed=this.$$runtime_cursor;}else if(this.$$user_cursor!==undefined){computed=this.$$user_cursor;}else if(this.$$theme_cursor!==undefined){computed=this.$$theme_cursor;}else if(this.$$useinit_cursor){delete this.$$useinit_cursor;computed=this.$$init_cursor;}if(computed===undefined||computed===inherit){computed=value;if((computed===undefined||computed===inherit)&&this.$$init_cursor!==undefined&&this.$$init_cursor!==inherit){computed=this.$$init_cursor;this.$$useinit_cursor=true;}else{delete this.$$useinit_cursor;}}if(old===computed)return value;if(computed===inherit){computed=undefined;delete this.$$inherit_cursor;}else if(computed===undefined)delete this.$$inherit_cursor;else this.$$inherit_cursor=computed;var backup=computed;if(old===undefined)old=this.$$init_cursor;if(computed===undefined||computed==inherit)computed=null;this._applyCursor(computed, old, "cursor", "refresh");var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){if(a[i].refreshCursor)a[i].refreshCursor(backup);}
}
setRuntimeCursor: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeCursor: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedCursor: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedCursor: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getToolTip: function anonymous(value
) {
if(this.$$runtime_toolTip!==undefined)return this.$$runtime_toolTip;if(this.$$user_toolTip!==undefined)return this.$$user_toolTip;else return null;
}
setToolTip: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"toolTip","set",value);this.$$user_toolTip=value;return value;
}
resetToolTip: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
setRuntimeToolTip: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeToolTip: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
getToolTipText: function anonymous(value
) {
if(this.$$runtime_toolTipText!==undefined)return this.$$runtime_toolTipText;if(this.$$user_toolTipText!==undefined)return this.$$user_toolTipText;else return null;
}
setToolTipText: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"toolTipText","set",value);if(this.$$user_toolTipText===value)return value;var computed, old;if(this.$$runtime_toolTipText!==undefined){old=computed=this.$$runtime_toolTipText;this.$$user_toolTipText=value;}else if(this.$$user_toolTipText!==undefined){old=this.$$user_toolTipText;computed=this.$$user_toolTipText=value;}else if(this.$$useinit_toolTipText){old=this.$$init_toolTipText;delete this.$$useinit_toolTipText;computed=this.$$user_toolTipText=value;}else{computed=this.$$user_toolTipText=value;}if(old===computed)return value;if(old===undefined)old=null;this._applyToolTipText(computed, old, "toolTipText", "set");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeToolTipText')){reg.fireEvent(this, 'changeToolTipText', qx.event.type.Data, [computed, old])}return value;
}
resetToolTipText: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initToolTipText: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeToolTipText: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeToolTipText: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
getToolTipIcon: function anonymous(value
) {
if(this.$$runtime_toolTipIcon!==undefined)return this.$$runtime_toolTipIcon;if(this.$$user_toolTipIcon!==undefined)return this.$$user_toolTipIcon;else return null;
}
setToolTipIcon: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetToolTipIcon: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initToolTipIcon: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeToolTipIcon: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeToolTipIcon: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
getBlockToolTip: function anonymous(value
) {
if(this.$$runtime_blockToolTip!==undefined)return this.$$runtime_blockToolTip;if(this.$$user_blockToolTip!==undefined)return this.$$user_blockToolTip;else return this.$$init_blockToolTip;
}
setBlockToolTip: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"blockToolTip","set",value);this.$$user_blockToolTip=value;return value;
}
resetBlockToolTip: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
setRuntimeBlockToolTip: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeBlockToolTip: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
toggleBlockToolTip: function anonymous(
) {
return this.setBlockToolTip(!this.getBlockToolTip())
}
isBlockToolTip: function anonymous(
) {
return this.getBlockToolTip()
}
getShowToolTipWhenDisabled: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setShowToolTipWhenDisabled: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"showToolTipWhenDisabled","set",value);this.$$user_showToolTipWhenDisabled=value;return value;
}
resetShowToolTipWhenDisabled: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
setRuntimeShowToolTipWhenDisabled: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeShowToolTipWhenDisabled: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
toggleShowToolTipWhenDisabled: function anonymous(
) {
return this.setShowToolTipWhenDisabled(!this.getShowToolTipWhenDisabled())
}
isShowToolTipWhenDisabled: function anonymous(
) {
return this.getShowToolTipWhenDisabled()
}
getVisibility: function anonymous(value
) {
if(this.$$runtime_visibility!==undefined)return this.$$runtime_visibility;if(this.$$user_visibility!==undefined)return this.$$user_visibility;else return this.$$init_visibility;
}
setVisibility: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"visibility","set",value);if(this.$$user_visibility===value)return value;var computed, old;if(this.$$runtime_visibility!==undefined){old=computed=this.$$runtime_visibility;this.$$user_visibility=value;}else if(this.$$user_visibility!==undefined){old=this.$$user_visibility;computed=this.$$user_visibility=value;}else if(this.$$useinit_visibility){old=this.$$init_visibility;delete this.$$useinit_visibility;computed=this.$$user_visibility=value;}else{computed=this.$$user_visibility=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_visibility;this._applyVisibility(computed, old, "visibility", "set");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeVisibility')){reg.fireEvent(this, 'changeVisibility', qx.event.type.Data, [computed, old])}return value;
}
resetVisibility: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initVisibility: function anonymous(value
) {
var prop=qx.core.Property;var computed, old;if(this.$$runtime_visibility!==undefined){old=computed=this.$$runtime_visibility;}else if(this.$$user_visibility!==undefined){old=computed=this.$$user_visibility;}else if(this.$$useinit_visibility){old=this.$$init_visibility;computed=this.$$init_visibility;}else{computed=this.$$init_visibility;this.$$useinit_visibility=true;}if(computed===undefined)computed=null;if(old===computed)return value;if(old===undefined)old=null;this._applyVisibility(computed, old, "visibility", "init");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeVisibility')){reg.fireEvent(this, 'changeVisibility', qx.event.type.Data, [computed, old])}
}
setRuntimeVisibility: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeVisibility: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
getEnabled: function anonymous(value
) {
if(this.$$runtime_enabled!==undefined)return this.$$runtime_enabled;else if(this.$$inherit_enabled!==undefined)return this.$$inherit_enabled;else if(this.$$user_enabled!==undefined)return this.$$user_enabled;else var init=this.$$init_enabled;return this.$$init_enabled;return init;
}
setEnabled: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"enabled","set",value);if(this.$$user_enabled===value)return value;var inherit=prop.$$inherit;var computed, old=this.$$inherit_enabled;if(this.$$runtime_enabled!==undefined){old=computed=this.$$runtime_enabled;this.$$user_enabled=value;}else if(this.$$user_enabled!==undefined){computed=this.$$user_enabled=value;}else if(this.$$useinit_enabled){delete this.$$useinit_enabled;computed=this.$$user_enabled=value;}else{computed=this.$$user_enabled=value;}if(computed===undefined||computed===inherit){var pa=this.getLayoutParent();if(pa)computed=pa.$$inherit_enabled;if((computed===undefined||computed===inherit)&&this.$$init_enabled!==undefined&&this.$$init_enabled!==inherit){computed=this.$$init_enabled;this.$$useinit_enabled=true;}else{delete this.$$useinit_enabled;}}if(old===computed)return value;if(computed===inherit){computed=undefined;delete this.$$inherit_enabled;}else if(computed===undefined)delete this.$$inherit_enabled;else this.$$inherit_enabled=computed;var backup=computed;if(old===undefined)old=this.$$init_enabled;if(computed===undefined||computed==inherit)computed=null;this._applyEnabled(computed, old, "enabled", "set");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeEnabled')){reg.fireEvent(this, 'changeEnabled', qx.event.type.Data, [computed, old])}var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){if(a[i].refreshEnabled)a[i].refreshEnabled(backup);}return value;
}
resetEnabled: function anonymous(value
) {
var prop=qx.core.Property;if(this.$$user_enabled===undefined)return;var inherit=prop.$$inherit;var computed, old=this.$$inherit_enabled;if(this.$$runtime_enabled!==undefined){old=computed=this.$$runtime_enabled;delete this.$$user_enabled;}else if(this.$$user_enabled!==undefined){delete this.$$user_enabled;if(this.$$runtime_enabled!==undefined)computed=this.$$runtime_enabled;if(this.$$theme_enabled!==undefined)computed=this.$$theme_enabled;else if(this.$$init_enabled!==undefined){computed=this.$$init_enabled;this.$$useinit_enabled=true;}}else if(this.$$useinit_enabled){}if(computed===undefined||computed===inherit){var pa=this.getLayoutParent();if(pa)computed=pa.$$inherit_enabled;if((computed===undefined||computed===inherit)&&this.$$init_enabled!==undefined&&this.$$init_enabled!==inherit){computed=this.$$init_enabled;this.$$useinit_enabled=true;}else{delete this.$$useinit_enabled;}}if(old===computed)return value;if(computed===inherit){computed=undefined;delete this.$$inherit_enabled;}else if(computed===undefined)delete this.$$inherit_enabled;else this.$$inherit_enabled=computed;var backup=computed;if(old===undefined)old=this.$$init_enabled;if(computed===undefined||computed==inherit)computed=null;this._applyEnabled(computed, old, "enabled", "reset");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeEnabled')){reg.fireEvent(this, 'changeEnabled', qx.event.type.Data, [computed, old])}var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){if(a[i].refreshEnabled)a[i].refreshEnabled(backup);}
}
initEnabled: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
refreshEnabled: function anonymous(value
) {
var prop=qx.core.Property;var inherit=prop.$$inherit;var computed, old=this.$$inherit_enabled;if(this.$$runtime_enabled!==undefined){old=computed=this.$$runtime_enabled;}else if(this.$$user_enabled!==undefined){computed=this.$$user_enabled;}else if(this.$$useinit_enabled){delete this.$$useinit_enabled;computed=this.$$init_enabled;}if(computed===undefined||computed===inherit){computed=value;if((computed===undefined||computed===inherit)&&this.$$init_enabled!==undefined&&this.$$init_enabled!==inherit){computed=this.$$init_enabled;this.$$useinit_enabled=true;}else{delete this.$$useinit_enabled;}}if(old===computed)return value;if(computed===inherit){computed=undefined;delete this.$$inherit_enabled;}else if(computed===undefined)delete this.$$inherit_enabled;else this.$$inherit_enabled=computed;var backup=computed;if(old===undefined)old=this.$$init_enabled;if(computed===undefined||computed==inherit)computed=null;this._applyEnabled(computed, old, "enabled", "refresh");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeEnabled')){reg.fireEvent(this, 'changeEnabled', qx.event.type.Data, [computed, old])}var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){if(a[i].refreshEnabled)a[i].refreshEnabled(backup);}
}
setRuntimeEnabled: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeEnabled: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
toggleEnabled: function anonymous(
) {
return this.setEnabled(!this.getEnabled())
}
isEnabled: function anonymous(
) {
return this.getEnabled()
}
getAnonymous: function anonymous(value
) {
if(this.$$runtime_anonymous!==undefined)return this.$$runtime_anonymous;if(this.$$user_anonymous!==undefined)return this.$$user_anonymous;else return this.$$init_anonymous;
}
setAnonymous: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"anonymous","set",value);if(this.$$user_anonymous===value)return value;var computed, old;if(this.$$runtime_anonymous!==undefined){old=computed=this.$$runtime_anonymous;this.$$user_anonymous=value;}else if(this.$$user_anonymous!==undefined){old=this.$$user_anonymous;computed=this.$$user_anonymous=value;}else if(this.$$useinit_anonymous){old=this.$$init_anonymous;delete this.$$useinit_anonymous;computed=this.$$user_anonymous=value;}else{computed=this.$$user_anonymous=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_anonymous;this._applyAnonymous(computed, old, "anonymous", "set");return value;
}
resetAnonymous: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initAnonymous: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeAnonymous: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeAnonymous: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
toggleAnonymous: function anonymous(
) {
return this.setAnonymous(!this.getAnonymous())
}
isAnonymous: function anonymous(
) {
return this.getAnonymous()
}
getTabIndex: function anonymous(value
) {
if(this.$$runtime_tabIndex!==undefined)return this.$$runtime_tabIndex;if(this.$$user_tabIndex!==undefined)return this.$$user_tabIndex;else return null;
}
setTabIndex: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"tabIndex","set",value);if(this.$$user_tabIndex===value)return value;var computed, old;if(this.$$runtime_tabIndex!==undefined){old=computed=this.$$runtime_tabIndex;this.$$user_tabIndex=value;}else if(this.$$user_tabIndex!==undefined){old=this.$$user_tabIndex;computed=this.$$user_tabIndex=value;}else if(this.$$useinit_tabIndex){old=this.$$init_tabIndex;delete this.$$useinit_tabIndex;computed=this.$$user_tabIndex=value;}else{computed=this.$$user_tabIndex=value;}if(old===computed)return value;if(old===undefined)old=null;this._applyTabIndex(computed, old, "tabIndex", "set");return value;
}
resetTabIndex: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initTabIndex: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeTabIndex: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeTabIndex: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
getFocusable: function anonymous(value
) {
if(this.$$runtime_focusable!==undefined)return this.$$runtime_focusable;if(this.$$user_focusable!==undefined)return this.$$user_focusable;else return this.$$init_focusable;
}
setFocusable: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"focusable","set",value);if(this.$$user_focusable===value)return value;var computed, old;if(this.$$runtime_focusable!==undefined){old=computed=this.$$runtime_focusable;this.$$user_focusable=value;}else if(this.$$user_focusable!==undefined){old=this.$$user_focusable;computed=this.$$user_focusable=value;}else if(this.$$useinit_focusable){old=this.$$init_focusable;delete this.$$useinit_focusable;computed=this.$$user_focusable=value;}else{computed=this.$$user_focusable=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_focusable;this._applyFocusable(computed, old, "focusable", "set");return value;
}
resetFocusable: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initFocusable: function anonymous(value
) {
var prop=qx.core.Property;var computed, old;if(this.$$runtime_focusable!==undefined){old=computed=this.$$runtime_focusable;}else if(this.$$user_focusable!==undefined){old=computed=this.$$user_focusable;}else if(this.$$useinit_focusable){old=this.$$init_focusable;computed=this.$$init_focusable;}else{computed=this.$$init_focusable;this.$$useinit_focusable=true;}if(computed===undefined)computed=null;if(old===computed)return value;if(old===undefined)old=null;this._applyFocusable(computed, old, "focusable", "init");
}
setRuntimeFocusable: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeFocusable: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
toggleFocusable: function anonymous(
) {
return this.setFocusable(!this.getFocusable())
}
isFocusable: function anonymous(
) {
return this.getFocusable()
}
getKeepFocus: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setKeepFocus: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"keepFocus","set",value);if(this.$$user_keepFocus===value)return value;var computed, old;if(this.$$runtime_keepFocus!==undefined){old=computed=this.$$runtime_keepFocus;this.$$user_keepFocus=value;}else if(this.$$user_keepFocus!==undefined){old=this.$$user_keepFocus;computed=this.$$user_keepFocus=value;}else if(this.$$useinit_keepFocus){old=this.$$init_keepFocus;delete this.$$useinit_keepFocus;computed=this.$$user_keepFocus=value;}else{computed=this.$$user_keepFocus=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_keepFocus;this._applyKeepFocus(computed, old, "keepFocus", "set");return value;
}
resetKeepFocus: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initKeepFocus: function anonymous(value
) {
var prop=qx.core.Property;var computed, old;if(this.$$runtime_keepFocus!==undefined){old=computed=this.$$runtime_keepFocus;}else if(this.$$user_keepFocus!==undefined){old=computed=this.$$user_keepFocus;}else if(this.$$useinit_keepFocus){old=this.$$init_keepFocus;computed=this.$$init_keepFocus;}else{computed=this.$$init_keepFocus;this.$$useinit_keepFocus=true;}if(computed===undefined)computed=null;if(old===computed)return value;if(old===undefined)old=null;this._applyKeepFocus(computed, old, "keepFocus", "init");
}
setRuntimeKeepFocus: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeKeepFocus: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
toggleKeepFocus: function anonymous(
) {
return this.setKeepFocus(!this.getKeepFocus())
}
isKeepFocus: function anonymous(
) {
return this.getKeepFocus()
}
getKeepActive: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setKeepActive: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"keepActive","set",value);if(this.$$user_keepActive===value)return value;var computed, old;if(this.$$runtime_keepActive!==undefined){old=computed=this.$$runtime_keepActive;this.$$user_keepActive=value;}else if(this.$$user_keepActive!==undefined){old=this.$$user_keepActive;computed=this.$$user_keepActive=value;}else if(this.$$useinit_keepActive){old=this.$$init_keepActive;delete this.$$useinit_keepActive;computed=this.$$user_keepActive=value;}else{computed=this.$$user_keepActive=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_keepActive;this._applyKeepActive(computed, old, "keepActive", "set");return value;
}
resetKeepActive: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initKeepActive: function anonymous(value
) {
var prop=qx.core.Property;var computed, old;if(this.$$runtime_keepActive!==undefined){old=computed=this.$$runtime_keepActive;}else if(this.$$user_keepActive!==undefined){old=computed=this.$$user_keepActive;}else if(this.$$useinit_keepActive){old=this.$$init_keepActive;computed=this.$$init_keepActive;}else{computed=this.$$init_keepActive;this.$$useinit_keepActive=true;}if(computed===undefined)computed=null;if(old===computed)return value;if(old===undefined)old=null;this._applyKeepActive(computed, old, "keepActive", "init");
}
setRuntimeKeepActive: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeKeepActive: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
toggleKeepActive: function anonymous(
) {
return this.setKeepActive(!this.getKeepActive())
}
isKeepActive: function anonymous(
) {
return this.getKeepActive()
}
getDraggable: function anonymous(value
) {
if(this.$$runtime_draggable!==undefined)return this.$$runtime_draggable;if(this.$$user_draggable!==undefined)return this.$$user_draggable;else return this.$$init_draggable;
}
setDraggable: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"draggable","set",value);if(this.$$user_draggable===value)return value;var computed, old;if(this.$$runtime_draggable!==undefined){old=computed=this.$$runtime_draggable;this.$$user_draggable=value;}else if(this.$$user_draggable!==undefined){old=this.$$user_draggable;computed=this.$$user_draggable=value;}else if(this.$$useinit_draggable){old=this.$$init_draggable;delete this.$$useinit_draggable;computed=this.$$user_draggable=value;}else{computed=this.$$user_draggable=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_draggable;this._applyDraggable(computed, old, "draggable", "set");return value;
}
resetDraggable: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initDraggable: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeDraggable: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeDraggable: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
toggleDraggable: function anonymous(
) {
return this.setDraggable(!this.getDraggable())
}
isDraggable: function anonymous(
) {
return this.getDraggable()
}
getDroppable: function anonymous(value
) {
if(this.$$runtime_droppable!==undefined)return this.$$runtime_droppable;if(this.$$user_droppable!==undefined)return this.$$user_droppable;else return this.$$init_droppable;
}
setDroppable: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"droppable","set",value);if(this.$$user_droppable===value)return value;var computed, old;if(this.$$runtime_droppable!==undefined){old=computed=this.$$runtime_droppable;this.$$user_droppable=value;}else if(this.$$user_droppable!==undefined){old=this.$$user_droppable;computed=this.$$user_droppable=value;}else if(this.$$useinit_droppable){old=this.$$init_droppable;delete this.$$useinit_droppable;computed=this.$$user_droppable=value;}else{computed=this.$$user_droppable=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_droppable;this._applyDroppable(computed, old, "droppable", "set");return value;
}
resetDroppable: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initDroppable: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeDroppable: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeDroppable: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
toggleDroppable: function anonymous(
) {
return this.setDroppable(!this.getDroppable())
}
isDroppable: function anonymous(
) {
return this.getDroppable()
}
getSelectable: function anonymous(value
) {
if(this.$$runtime_selectable!==undefined)return this.$$runtime_selectable;if(this.$$user_selectable!==undefined)return this.$$user_selectable;else return this.$$init_selectable;
}
setSelectable: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"selectable","set",value);if(this.$$user_selectable===value)return value;var computed, old;if(this.$$runtime_selectable!==undefined){old=computed=this.$$runtime_selectable;this.$$user_selectable=value;}else if(this.$$user_selectable!==undefined){old=this.$$user_selectable;computed=this.$$user_selectable=value;}else if(this.$$useinit_selectable){old=this.$$init_selectable;delete this.$$useinit_selectable;computed=this.$$user_selectable=value;}else{computed=this.$$user_selectable=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_selectable;this._applySelectable(computed, old, "selectable", "set");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeSelectable')){reg.fireEvent(this, 'changeSelectable', qx.event.type.Data, [computed, old])}return value;
}
resetSelectable: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initSelectable: function anonymous(value
) {
var prop=qx.core.Property;var computed, old;if(this.$$runtime_selectable!==undefined){old=computed=this.$$runtime_selectable;}else if(this.$$user_selectable!==undefined){old=computed=this.$$user_selectable;}else if(this.$$useinit_selectable){old=this.$$init_selectable;computed=this.$$init_selectable;}else{computed=this.$$init_selectable;this.$$useinit_selectable=true;}if(computed===undefined)computed=null;if(old===computed)return value;if(old===undefined)old=null;this._applySelectable(computed, old, "selectable", "init");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeSelectable')){reg.fireEvent(this, 'changeSelectable', qx.event.type.Data, [computed, old])}
}
setRuntimeSelectable: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeSelectable: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
toggleSelectable: function anonymous(
) {
return this.setSelectable(!this.getSelectable())
}
isSelectable: function anonymous(
) {
return this.getSelectable()
}
getContextMenu: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setContextMenu: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetContextMenu: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initContextMenu: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeContextMenu: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeContextMenu: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
getNativeContextMenu: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setNativeContextMenu: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetNativeContextMenu: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initNativeContextMenu: function anonymous(value
) {
var prop=qx.core.Property;var computed, old;if(this.$$runtime_nativeContextMenu!==undefined){old=computed=this.$$runtime_nativeContextMenu;}else if(this.$$user_nativeContextMenu!==undefined){old=computed=this.$$user_nativeContextMenu;}else if(this.$$theme_nativeContextMenu!==undefined){old=this.$$theme_nativeContextMenu;computed=this.$$theme_nativeContextMenu;}else if(this.$$useinit_nativeContextMenu){old=this.$$init_nativeContextMenu;computed=this.$$init_nativeContextMenu;}else{computed=this.$$init_nativeContextMenu;this.$$useinit_nativeContextMenu=true;}if(computed===undefined)computed=null;if(old===computed)return value;if(old===undefined)old=null;this._applyNativeContextMenu(computed, old, "nativeContextMenu", "init");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeNativeContextMenu')){reg.fireEvent(this, 'changeNativeContextMenu', qx.event.type.Data, [computed, old])}
}
setRuntimeNativeContextMenu: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeNativeContextMenu: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedNativeContextMenu: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedNativeContextMenu: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
toggleNativeContextMenu: function anonymous(
) {
return this.setNativeContextMenu(!this.getNativeContextMenu())
}
isNativeContextMenu: function anonymous(
) {
return this.getNativeContextMenu()
}
getAppearance: function anonymous(value
) {
if(this.$$runtime_appearance!==undefined)return this.$$runtime_appearance;if(this.$$user_appearance!==undefined)return this.$$user_appearance;else return this.$$init_appearance;
}
setAppearance: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"appearance","set",value);if(this.$$user_appearance===value)return value;var computed, old;if(this.$$runtime_appearance!==undefined){old=computed=this.$$runtime_appearance;this.$$user_appearance=value;}else if(this.$$user_appearance!==undefined){old=this.$$user_appearance;computed=this.$$user_appearance=value;}else if(this.$$useinit_appearance){old=this.$$init_appearance;delete this.$$useinit_appearance;computed=this.$$user_appearance=value;}else{computed=this.$$user_appearance=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_appearance;this._applyAppearance(computed, old, "appearance", "set");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeAppearance')){reg.fireEvent(this, 'changeAppearance', qx.event.type.Data, [computed, old])}return value;
}
resetAppearance: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initAppearance: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeAppearance: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeAppearance: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
_getLayout: function(){return this.__kf;}
_setLayout: function(eu){if(this.__kf){this.__kf.connectToWidget(null);}if(eu){eu.connectToWidget(this);}this.__kf=eu;qx.ui.core.queue.Layout.add(this);}
renderLayout: function(eB,top,ey,ew){var eC=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,eB,top,ey,ew);if(!eC){return null;}if(qx.lang.Object.isEmpty(eC)&&!this._updateInsets){return null;}var content=this.getContentElement();var eF=eC.size||this._updateInsets;var eD=eo;var ev={};if(eC.position){ev.left=eB+eD;ev.top=top+eD;}if(eF||eC.margin){ev.width=ey+eD;ev.height=ew+eD;}if(Object.keys(ev).length>0){content.setStyles(ev);}if(eF||eC.local||eC.margin){if(this.__kf&&this.hasLayoutChildren()){var eA=this.getInsets();var innerWidth=ey-eA.left-eA.right;var innerHeight=ew-eA.top-eA.bottom;var eE=this.getDecorator();var ez={left:0,right:0,top:0,bottom:0};if(eE){eE=qx.theme.manager.Decoration.getInstance().resolve(eE);ez=eE.getPadding();}var ex={top:this.getPaddingTop()+ez.top,right:this.getPaddingRight()+ez.right,bottom:this.getPaddingBottom()+ez.bottom,left:this.getPaddingLeft()+ez.left};this.__kf.renderLayout(innerWidth,innerHeight,ex);}else{if(this.hasLayoutChildren()){throw new Error(O+this._findTopControl()+k);}}}if(eC.position&&this.hasListener(q)){this.fireDataEvent(q,this.getBounds());}if(eC.size&&this.hasListener(V)){this.fireDataEvent(V,this.getBounds());}delete this._updateInsets;return eC;}
clearSeparators: function(){var eH=this.__kg;if(!eH){return;}var eI=qx.ui.core.Widget.__kc;var content=this.getContentElement();var eG;for(var i=0,l=eH.length;i<l;i++){eG=eH[i];eI.poolObject(eG);content.remove(eG.getContentElement());}eH.length=0;}
renderSeparator: function(eK,eL){var eJ=qx.ui.core.Widget.__kc.getObject(qx.ui.core.Widget);eJ.set({decorator:eK});var eN=eJ.getContentElement();this.getContentElement().add(eN);var eM=eN.getDomElement();if(eM){eM.style.top=eL.top+eo;eM.style.left=eL.left+eo;eM.style.width=eL.width+eo;eM.style.height=eL.height+eo;}else{eN.setStyles({left:eL.left+eo,top:eL.top+eo,width:eL.width+eo,height:eL.height+eo});}if(!this.__kg){this.__kg=[];}this.__kg.push(eJ);}
_computeSizeHint: function(){var eU=this.getWidth();var eO=this.getMinWidth();var eP=this.getMaxWidth();var eS=this.getHeight();var eQ=this.getMinHeight();var eR=this.getMaxHeight();var eV=this._getContentHint();var eT=this.getInsets();var eX=eT.left+eT.right;var eW=eT.top+eT.bottom;if(eU==null){eU=eV.width+eX;}if(eS==null){eS=eV.height+eW;}if(eO==null){eO=eX;if(eV.minWidth!=null){eO+=eV.minWidth;if(eO>eP&&eP!=null){eO=eP;}}}if(eQ==null){eQ=eW;if(eV.minHeight!=null){eQ+=eV.minHeight;if(eQ>eR&&eR!=null){eQ=eR;}}}if(eP==null){if(eV.maxWidth==null){eP=Infinity;}else{eP=eV.maxWidth+eX;if(eP<eO&&eO!=null){eP=eO;}}}if(eR==null){if(eV.maxHeight==null){eR=Infinity;}else{eR=eV.maxHeight+eW;if(eR<eQ&&eQ!=null){eR=eQ;}}}return{width:eU,minWidth:eO,maxWidth:eP,height:eS,minHeight:eQ,maxHeight:eR};}
invalidateLayoutCache: function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);if(this.__kf){this.__kf.invalidateLayoutCache();}}
_getContentHint: function(){var fa=this.__kf;if(fa){if(this.hasLayoutChildren()){var fb=fa.getSizeHint();var eY;return fb;}else{return{width:0,height:0};}}else{return{width:100,height:50};}}
_getHeightForWidth: function(fg){var ff=this.getInsets();var fc=ff.left+ff.right;var fi=ff.top+ff.bottom;var fh=fg-fc;var fd=this._getLayout();if(fd&&fd.hasHeightForWidth()){var fj=fd.getHeightForWidth(fh);}else{fj=this._getContentHeightForWidth(fh);}var fe=fj+fi;return fe;}
_getContentHeightForWidth: function(fk){throw new Error(dh);}
getInsets: function(){var top=this.getPaddingTop();var fl=this.getPaddingRight();var fm=this.getPaddingBottom();var fp=this.getPaddingLeft();if(this.getDecorator()){var fo=qx.theme.manager.Decoration.getInstance().resolve(this.getDecorator());var fn=fo.getInsets();top+=fn.top;fl+=fn.right;fm+=fn.bottom;fp+=fn.left;}return{"top":top,"right":fl,"bottom":fm,"left":fp};}
getInnerSize: function(){var fr=this.getBounds();if(!fr){return null;}var fq=this.getInsets();return{width:fr.width-fq.left-fq.right,height:fr.height-fq.top-fq.bottom};}
_applyAnonymous: function(fu){if(fu){this.getContentElement().setAttribute(s,dA);}else{this.getContentElement().removeAttribute(s);}}
hide: function(){this.setVisibility(cO);}
exclude: function(){this.setVisibility(en);}
isVisible: function(){return this.getVisibility()===P;}
isHidden: function(){return this.getVisibility()!==P;}
isExcluded: function(){return this.getVisibility()===en;}
isSeeable: function(){qx.ui.core.queue.Manager.flush();var fv=this.getContentElement().getDomElement();if(fv){return fv.offsetWidth>0;}return false;}
__kh: function(){var fx=this._createContentElement();fx.setAttribute(cL,this.toHashCode());fx.setStyles({"touch-action":cU,"-ms-touch-action":cU});var fw={"zIndex":10,"boxSizing":dC};if(!qx.ui.root.Inline||!(this instanceof qx.ui.root.Inline)){fw.position=eg;}fx.setStyles(fw);return fx;}
_createContentElement: function(){return new qx.html.Element(f,{overflowX:cO,overflowY:cO});}
getContentElement: function(){return this.__kb;}
getLayoutChildren: function(){var fz=this.__ki;if(!fz){return this.__kj;}var fA;for(var i=0,l=fz.length;i<l;i++){var fy=fz[i];if(fy.hasUserBounds()||fy.isExcluded()){if(fA==null){fA=fz.concat();}qx.lang.Array.remove(fA,fy);}}return fA||fz;}
scheduleLayoutUpdate: function(){qx.ui.core.queue.Layout.add(this);}
invalidateLayoutChildren: function(){var fB=this.__kf;if(fB){fB.invalidateChildrenCache();}qx.ui.core.queue.Layout.add(this);}
hasLayoutChildren: function(){var fD=this.__ki;if(!fD){return false;}var fC;for(var i=0,l=fD.length;i<l;i++){fC=fD[i];if(!fC.hasUserBounds()&&!fC.isExcluded()){return true;}}return false;}
_getChildren: function(){return this.__ki||this.__kj;}
_indexOf: function(fF){var fE=this.__ki;if(!fE){return -1;}return fE.indexOf(fF);}
_hasChildren: function(){var fG=this.__ki;return fG!=null&&(!!fG[0]);}
addChildrenToQueue: function(fH){var fI=this.__ki;if(!fI){return;}var fJ;for(var i=0,l=fI.length;i<l;i++){fJ=fI[i];fH.push(fJ);fJ.addChildrenToQueue(fH);}}
_add: function(fL,fK){if(fL.getLayoutParent()==this){qx.lang.Array.remove(this.__ki,fL);}if(this.__ki){this.__ki.push(fL);}else{this.__ki=[fL];}this.__kk(fL,fK);}
_addAt: function(fP,fM,fO){if(!this.__ki){this.__ki=[];}if(fP.getLayoutParent()==this){qx.lang.Array.remove(this.__ki,fP);}var fN=this.__ki[fM];if(fN===fP){fP.setLayoutProperties(fO);}if(fN){qx.lang.Array.insertBefore(this.__ki,fP,fN);}else{this.__ki.push(fP);}this.__kk(fP,fO);}
_addBefore: function(fQ,fS,fR){if(fQ==fS){return;}if(!this.__ki){this.__ki=[];}if(fQ.getLayoutParent()==this){qx.lang.Array.remove(this.__ki,fQ);}qx.lang.Array.insertBefore(this.__ki,fQ,fS);this.__kk(fQ,fR);}
_addAfter: function(fV,fT,fU){if(fV==fT){return;}if(!this.__ki){this.__ki=[];}if(fV.getLayoutParent()==this){qx.lang.Array.remove(this.__ki,fV);}qx.lang.Array.insertAfter(this.__ki,fV,fT);this.__kk(fV,fU);}
_remove: function(fW){if(!this.__ki){throw new Error(cJ);}qx.lang.Array.remove(this.__ki,fW);this.__kl(fW);}
_removeAt: function(fX){if(!this.__ki){throw new Error(cJ);}var fY=this.__ki[fX];qx.lang.Array.removeAt(this.__ki,fX);this.__kl(fY);return fY;}
_removeAll: function(){if(!this.__ki){return[];}var ga=this.__ki.concat();this.__ki.length=0;for(var i=ga.length-1;i>=0;i--){this.__kl(ga[i]);}qx.ui.core.queue.Layout.add(this);return ga;}
__kk: function(gc,gb){var parent=gc.getLayoutParent();if(parent&&parent!=this){parent._remove(gc);}gc.setLayoutParent(this);if(gb){gc.setLayoutProperties(gb);}else{this.updateLayoutProperties();}if(this._afterAddChild){this._afterAddChild(gc);}}
__kl: function(gd){if(gd.getLayoutParent()!==this){throw new Error(X+gd+dz);}gd.setLayoutParent(null);if(this.__kf){this.__kf.invalidateChildrenCache();}qx.ui.core.queue.Layout.add(this);if(this._afterRemoveChild){this._afterRemoveChild(gd);}}
capture: function(ge){this.getContentElement().capture(ge);}
releaseCapture: function(){this.getContentElement().releaseCapture();}
isCapturing: function(){var gf=this.getContentElement().getDomElement();if(!gf){return false;}var gg=qx.event.Registration.getManager(gf);var gh=gg.getDispatcher(qx.event.dispatch.MouseCapture);return gf==gh.getCaptureElement();}
_applyPadding: function(gj,gi,name){this._updateInsets=true;qx.ui.core.queue.Layout.add(this);this.__km(name,gj);}
__km: function(gk,gn){var content=this.getContentElement();var gl=this.getDecorator();gl=qx.theme.manager.Decoration.getInstance().resolve(gl);if(gl){var gm=qx.Bootstrap.firstLow(gk.replace(dG,dJ));gn+=gl.getPadding()[gm]||0;}content.setStyle(gk,gn+eo);}
_applyDecorator: function(gp,go){var content=this.getContentElement();if(go){go=qx.theme.manager.Decoration.getInstance().getCssClassName(go);content.removeClass(go);}if(gp){gp=qx.theme.manager.Decoration.getInstance().addCssClass(gp);content.addClass(gp);}if(gp||go){qx.ui.core.queue.Layout.add(this);}}
_applyToolTipText: function(gs,gr){if(qx.core.Environment.get(w)){if(this.__ke){return;}var gq=qx.locale.Manager.getInstance();this.__ke=gq.addListener(dR,function(){var gt=this.getToolTipText();if(gt&&gt.translate){this.setToolTipText(gt.translate());}},this);}}
_applyTextColor: function(gv,gu){}
_applyZIndex: function(gx,gw){this.getContentElement().setStyle(Y,gx==null?0:gx);}
_applyVisibility: function(gz,gy){var content=this.getContentElement();if(gz===P){content.show();}else{content.hide();}var parent=this.$$parent;if(parent&&(gy==null||gz==null||gy===en||gz===en)){parent.invalidateLayoutChildren();}qx.ui.core.queue.Visibility.add(this);}
_applyOpacity: function(gB,gA){this.getContentElement().setStyle(cI,gB==1?null:gB);}
_applyCursor: function(gD,gC){if(gD==null&&!this.isSelectable()){gD=cW;}this.getContentElement().setStyle(db,gD,qx.core.Environment.get(dn)==ed);}
_applyBackgroundColor: function(gH,gG){var gF=this.getBackgroundColor();var content=this.getContentElement();var gE=qx.theme.manager.Color.getInstance().resolve(gF);content.setStyle(a,gE);}
_applyFont: function(gJ,gI){}
_onChangeTheme: function(){if(this.isDisposed()){return;}qx.ui.core.LayoutItem.prototype._onChangeTheme.call(this);this.updateAppearance();var gK=this.getDecorator();this._applyDecorator(null,gK);this._applyDecorator(gK);gK=this.getFont();if(qx.lang.Type.isString(gK)){this._applyFont(gK,gK);}gK=this.getTextColor();if(qx.lang.Type.isString(gK)){this._applyTextColor(gK,gK);}gK=this.getBackgroundColor();if(qx.lang.Type.isString(gK)){this._applyBackgroundColor(gK,gK);}}
hasState: function(gM){var gL=this.__kn;return !!gL&&!!gL[gM];}
addState: function(gQ){var gP=this.__kn;if(!gP){gP=this.__kn={};}if(gP[gQ]){return;}this.__kn[gQ]=true;if(gQ===cQ){this.syncAppearance();}else{if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;}else{qx.ui.core.queue.Appearance.add(this);}}var forward=this._forwardStates;var gO=this.__kq;if(forward&&forward[gQ]&&gO){var gN;for(var gR in gO){gN=gO[gR];if(gN instanceof qx.ui.core.Widget){gO[gR].addState(gQ);}}}}
removeState: function(gV){var gU=this.__kn;if(!gU||!gU[gV]){return;}delete this.__kn[gV];if(gV===cQ){this.syncAppearance();}else{if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;}else{qx.ui.core.queue.Appearance.add(this);}}var forward=this._forwardStates;var gT=this.__kq;if(forward&&forward[gV]&&gT){for(var gW in gT){var gS=gT[gW];if(gS instanceof qx.ui.core.Widget){gS.removeState(gV);}}}}
replaceState: function(gY,hc){var hb=this.__kn;if(!hb){hb=this.__kn={};}if(!hb[hc]){hb[hc]=true;}if(hb[gY]){delete hb[gY];}if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;}else{qx.ui.core.queue.Appearance.add(this);}var forward=this._forwardStates;var ha=this.__kq;if(forward&&forward[hc]&&ha){for(var hd in ha){var gX=ha[hd];if(gX instanceof qx.ui.core.Widget){gX.replaceState(gY,hc);}}}}
syncAppearance: function(){var hi=this.__kn;var hh=this.__ko;var hj=qx.theme.manager.Appearance.getInstance();var hf=qx.core.Property.$$method.setThemed;var hn=qx.core.Property.$$method.resetThemed;if(this.__kp){delete this.__kp;if(hh){var he=hj.styleFrom(hh,hi,null,this.getAppearance());hh=null;}}if(!hh){var hg=this;var hk=[];do{hk.push(hg.$$subcontrol||hg.getAppearance());}while(hg=hg.$$subparent);hh=hk.reverse().join(dE).replace(/#[0-9]+/g,dJ);this.__ko=hh;}var hm=hj.styleFrom(hh,hi,null,this.getAppearance());if(hm){if(he){for(var hl in he){if(hm[hl]===undefined){this[hn[hl]]();}}}var hl;for(var hl in hm){hm[hl]===undefined?this[hn[hl]]():this[hf[hl]](hm[hl]);}}else{if(he){for(var hl in he){this[hn[hl]]();}}}this.fireDataEvent(I,this.__kn);}
_applyAppearance: function(hp,ho){this.updateAppearance();}
checkAppearanceNeeds: function(){if(!this.__kd){qx.ui.core.queue.Appearance.add(this);this.__kd=true;}else{if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);delete this.$$stateChanges;}}}
updateAppearance: function(){this.__kp=true;qx.ui.core.queue.Appearance.add(this);var hs=this.__kq;if(hs){var hq;for(var hr in hs){hq=hs[hr];if(hq instanceof qx.ui.core.Widget){hq.updateAppearance();}}}}
syncWidget: function(ht){}
getEventTarget: function(){var hu=this;while(hu.getAnonymous()){hu=hu.getLayoutParent();if(!hu){return null;}}return hu;}
getFocusTarget: function(){var hv=this;if(!hv.getEnabled()){return null;}while(hv.getAnonymous()||!hv.getFocusable()){hv=hv.getLayoutParent();if(!hv||!hv.getEnabled()){return null;}}return hv;}
getFocusElement: function(){return this.getContentElement();}
isTabable: function(){return(!!this.getContentElement().getDomElement())&&this.isFocusable();}
_applyKeepFocus: function(hB){var hA=this.getFocusElement();hA.setAttribute(ee,hB?cG:null);}
_applyKeepActive: function(hD){var hC=this.getContentElement();hC.setAttribute(eh,hD?cG:null);}
_applyTabIndex: function(hE){if(hE==null){hE=1;}else{if(hE<1||hE>32000){throw new Error(ej);}}if(this.getFocusable()&&hE!=null){this.getFocusElement().setAttribute(dX,hE);}}
_applySelectable: function(hG,hF){if(hF!==null){this._applyCursor(this.getCursor());}this.getContentElement().setSelectable(hG);}
_applyEnabled: function(hI,hH){if(hI===false){this.addState(p);this.removeState(cQ);if(this.isFocusable()){this.removeState(n);this._applyFocusable(false,true);}if(this.isDraggable()){this._applyDraggable(false,true);}if(this.isDroppable()){this._applyDroppable(false,true);}}else{this.removeState(p);if(this.isFocusable()){this._applyFocusable(true,false);}if(this.isDraggable()){this._applyDraggable(true,false);}if(this.isDroppable()){this._applyDroppable(true,false);}}}
_applyNativeContextMenu: function(hK,hJ,name){}
_applyContextMenu: function(hM,hL){if(hL){hL.removeState(ea);if(hL.getOpener()==this){hL.resetOpener();}if(!hM){this.removeListener(ea,this._onContextMenuOpen);this.removeListener(cV,this._onContextMenuOpen);hL.removeListener(T,this._onBeforeContextMenuOpen,this);}}if(hM){hM.setOpener(this);hM.addState(ea);if(!hL){this.addListener(ea,this._onContextMenuOpen);this.addListener(cV,this._onContextMenuOpen);hM.addListener(T,this._onBeforeContextMenuOpen,this);}}}
_onContextMenuOpen: function(e){if(e.getType()==cV){if(e.getPointerType()!==d){return;}}this.getContextMenu().openAtPointer(e);e.stop();}
_onBeforeContextMenuOpen: function(e){if(e.getData()==P&&this.hasListener(dV)){this.fireDataEvent(dV,e);}}
_onStopEvent: function(e){e.stopPropagation();}
_getDragDropCursor: function(){return qx.ui.core.DragDropCursor.getInstance();}
_applyDraggable: function(hO,hN){if(!this.isEnabled()&&hO===true){hO=false;}this._getDragDropCursor();if(hO){this.addListener(u,this._onDragStart);this.addListener(b,this._onDrag);this.addListener(D,this._onDragEnd);this.addListener(x,this._onDragChange);}else{this.removeListener(u,this._onDragStart);this.removeListener(b,this._onDrag);this.removeListener(D,this._onDragEnd);this.removeListener(x,this._onDragChange);}this.getContentElement().setAttribute(G,hO?cG:null);}
_applyDroppable: function(hQ,hP){if(!this.isEnabled()&&hQ===true){hQ=false;}this.getContentElement().setAttribute(dc,hQ?cG:null);}
_onDragStart: function(e){this._getDragDropCursor().placeToPointer(e);this.getApplicationRoot().setGlobalCursor(cW);}
_onDrag: function(e){this._getDragDropCursor().placeToPointer(e);}
_onDragEnd: function(e){this._getDragDropCursor().moveTo(-1000,-1000);this.getApplicationRoot().resetGlobalCursor();}
_onDragChange: function(e){var hR=this._getDragDropCursor();var hS=e.getCurrentAction();hS?hR.setAction(hS):hR.resetAction();}
visualizeFocus: function(){this.addState(n);}
visualizeBlur: function(){this.removeState(n);}
scrollChildIntoView: function(hX,hW,hV,hU){hU=typeof hU==ec?true:hU;var hT=qx.ui.core.queue.Layout;var parent;if(hU){hU=!hT.isScheduled(hX);parent=hX.getLayoutParent();if(hU&&parent){hU=!hT.isScheduled(parent);if(hU){parent.getChildren().forEach(function(hY){hU=hU&&!hT.isScheduled(hY);});}}}this.scrollChildIntoViewX(hX,hW,hU);this.scrollChildIntoViewY(hX,hV,hU);}
scrollChildIntoViewX: function(ic,ia,ib){this.getContentElement().scrollChildIntoViewX(ic.getContentElement(),ia,ib);}
scrollChildIntoViewY: function(ih,ie,ig){this.getContentElement().scrollChildIntoViewY(ih.getContentElement(),ie,ig);}
focus: function(){if(this.isFocusable()){this.getFocusElement().focus();}else{throw new Error(dm);}}
blur: function(){if(this.isFocusable()){this.getFocusElement().blur();}else{throw new Error(dm);}}
activate: function(){this.getContentElement().activate();}
deactivate: function(){this.getContentElement().deactivate();}
tabFocus: function(){this.getFocusElement().focus();}
hasChildControl: function(ii){if(!this.__kq){return false;}return !!this.__kq[ii];}
_getCreatedChildControls: function(){return this.__kq;}
getChildControl: function(il,ik){if(!this.__kq){if(ik){return null;}this.__kq={};}var ij=this.__kq[il];if(ij){return ij;}if(ik===true){return null;}return this._createChildControl(il);}
_showChildControl: function(io){var im=this.getChildControl(io);im.show();return im;}
_excludeChildControl: function(iq){var ip=this.getChildControl(iq,true);if(ip){ip.exclude();}}
_isChildControlVisible: function(is){var ir=this.getChildControl(is,true);if(ir){return ir.isVisible();}return false;}
_releaseChildControl: function(iw){var it=this.getChildControl(iw,false);if(!it){throw new Error(t+iw);}delete it.$$subcontrol;delete it.$$subparent;var iu=this.__kn;var forward=this._forwardStates;if(iu&&forward&&it instanceof qx.ui.core.Widget){for(var iv in iu){if(forward[iv]){it.removeState(iv);}}}delete this.__kq[iw];return it;}
_createChildControl: function(iB){if(!this.__kq){this.__kq={};}else{if(this.__kq[iB]){throw new Error(F+iB+dd);}}var iy=iB.indexOf(N);try{if(iy==-1){var ix=this._createChildControlImpl(iB);}else{var ix=this._createChildControlImpl(iB.substring(0,iy),iB.substring(iy+1,iB.length));}}catch(iC){iC.message=du+iB+K+this.toString()+dk+iC.message;throw iC;}if(!ix){throw new Error(t+iB);}ix.$$subcontrol=iB;ix.$$subparent=this;var iz=this.__kn;var forward=this._forwardStates;if(iz&&forward&&ix instanceof qx.ui.core.Widget){for(var iA in iz){if(forward[iA]){ix.addState(iA);}}}this.fireDataEvent(r,ix);return this.__kq[iB]=ix;}
_disposeChildControls: function(){var iI=this.__kq;if(!iI){return;}var iG=qx.ui.core.Widget;for(var iH in iI){var iF=iI[iH];if(!iG.contains(this,iF)){iF.destroy();}else{iF.dispose();}}delete this.__kq;}
_findTopControl: function(){var iJ=this;while(iJ){if(!iJ.$$subparent){return iJ;}iJ=iJ.$$subparent;}return null;}
getContentLocation: function(iL){var iK=this.getContentElement().getDomElement();return iK?qx.bom.element.Location.get(iK,iL):null;}
setDomLeft: function(iN){var iM=this.getContentElement().getDomElement();if(iM){iM.style.left=iN+eo;}else{throw new Error(dy);}}
setDomTop: function(iP){var iO=this.getContentElement().getDomElement();if(iO){iO.style.top=iP+eo;}else{throw new Error(dy);}}
setDomPosition: function(iR,top){var iQ=this.getContentElement().getDomElement();if(iQ){iQ.style.left=iR+eo;iQ.style.top=top+eo;}else{throw new Error(dy);}}
destroy: function(){if(this.$$disposed){return;}var parent=this.$$parent;if(parent){parent._remove(this);}qx.ui.core.queue.Dispose.add(this);}
clone: function(){var iS=qx.ui.core.LayoutItem.prototype.clone.call(this);if(this.getChildren){var iT=this.getChildren();for(var i=0,l=iT.length;i<l;i++){iS.add(iT[i].clone());}}return iS;}
tr: function(c,e){var d=qx.locale.Manager;if(d){return d.tr.apply(d,arguments);}throw new Error(a);}
trn: function(g,j,f,h){var i=qx.locale.Manager;if(i){return i.trn.apply(i,arguments);}throw new Error(a);}
trc: function(n,m,l){var k=qx.locale.Manager;if(k){return k.trc.apply(k,arguments);}throw new Error(a);}
trnc: function(p,q,r,o,s){var t=qx.locale.Manager;if(t){return t.trnc.apply(t,arguments);}throw new Error(a);}
marktr: function(v){var u=qx.locale.Manager;if(u){return u.marktr.apply(u,arguments);}throw new Error(a);}
getAnimation: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setAnimation: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetAnimation: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initAnimation: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeAnimation: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeAnimation: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedAnimation: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedAnimation: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getAnimationtoggled: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setAnimationtoggled: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetAnimationtoggled: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initAnimationtoggled: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeAnimationtoggled: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeAnimationtoggled: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedAnimationtoggled: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedAnimationtoggled: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
__jW: function(k,j){this.__jV=null;this.__jU=k;if(typeof k==h){this.__jU=qx.phe.AnimationManager.getInstance().getAnimation(k);}}
__jX: function(n,m){this.__jV=null;var l=n;if(typeof l==h){l=qx.phe.AnimationManager.getInstance().getAnimation(l);}if(l){this.__jY(l);}}
__jY: function(o){if(this.__jV){return false;}var p=o;if(p&&this.getContentElement()&&this.getContentElement().getDomElement()){if(!!p.getDescription&&!!p.getDescription()){this.__jV=qx.bom.element.Animation.animate(this.getContentElement().getDomElement(),p.getDescription());this.__jV.on(e,this.__ka,this);return true;}}return false;}
startAnimation: function(r){this.__jY(this.__jU);if(r&&this.getChildren&&this.getChildren()){var q=this.getChildren();for(var i=0;i<q.length;++i){if(q[i].startAnimation){q[i].startAnimation(r);}}}}
__ka: function(){this.fireEvent(a);this.__jV=null;}
getEdgeAnimationShow: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setEdgeAnimationShow: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetEdgeAnimationShow: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initEdgeAnimationShow: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeEdgeAnimationShow: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeEdgeAnimationShow: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedEdgeAnimationShow: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedEdgeAnimationShow: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getEdgeAnimationHover: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setEdgeAnimationHover: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetEdgeAnimationHover: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initEdgeAnimationHover: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeEdgeAnimationHover: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeEdgeAnimationHover: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedEdgeAnimationHover: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedEdgeAnimationHover: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getEdgeAnimationHide: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setEdgeAnimationHide: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetEdgeAnimationHide: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initEdgeAnimationHide: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeEdgeAnimationHide: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeEdgeAnimationHide: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedEdgeAnimationHide: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedEdgeAnimationHide: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getEdgeAnimation: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setEdgeAnimation: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetEdgeAnimation: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initEdgeAnimation: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeEdgeAnimation: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeEdgeAnimation: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
__fj: function(r,q){this.__fe=this.__fq(r);if(!!r){this.setOpacity(0);this.addListener(i,this.__fm,this);}else{this.setOpacity(1);this.removeListener(i,this.__fm);}}
__fk: function(t,s){this.__ff=this.__fq(t);if(!!t){this.addListener(h,this.__fn,this);}else{this.removeListener(h,this.__fn);}}
__fl: function(v,u){this.__fg=this.__fq(v);if(!!v){this.addListener(k,this.__fo,this);}else{this.removeListener(k,this.__fo);}}
__fm: function(){this.startEdgeAnimation(p);}
__fn: function(){this.startEdgeAnimation(g);}
__fo: function(){this.startEdgeAnimation(c);}
__fp: function(x,w){this.startEdgeAnimation(x);}
__fq: function(y){if(typeof y==n){return webfrontend.res.animcomp[y];}return y;}
__fr: function(A){var z=this;if(!!this.__fh){this.stopEdgeAnimation();}this.__fh=new qx.phe.edge.Animation(A,this);this.__fh.onfinished=function(){z.__ft();};}
startEdgeAnimation: function(B){this.__fi=B;if(B==p&&!!this.__fe){this.__fr(this.__fe);if(!!this.__fh){qx.bom.element.Style.setStyles(this.getContentElement().getDomElement(),{opacity:0},true);}}else{if(B==g&&!!this.__ff){this.__fr(this.__ff);}else{if(B==c&&!!this.__fg){this.__fr(this.__fg);}}}return this.__fs(false);}
__fs: function(D){if(!this.__fh){return false;}if(D){qx.bom.element.Style.setStyles(this.getContentElement().getDomElement(),{opacity:1},true);this.__fh.play(true);}else{if(this.__fh.canPlay()){qx.bom.element.Style.setStyles(this.getContentElement().getDomElement(),{opacity:1},true);this.__fh.play(false);}else{var C=this;window.setTimeout(function(){C.__fs(true);},1);}}return true;}
stopEdgeAnimation: function(){if(this.__fh){this.__fh.stop();}this.__fh=null;}
__ft: function(){if(this.__fi==p){qx.bom.element.Style.reset(this.getContainerElement().getDomElement(),b,true);}this.fireEvent(e);this.setEdgeAnimation(null);this.__fh=null;}
getCssContent: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setCssContent: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetCssContent: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initCssContent: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeCssContent: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeCssContent: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
__fH: function(value,old){try{var cssStylesOld=old?eval(c+old+a):null;var cssStyles=value?eval(c+value+a):null;var elem=this.getContentElement();if(elem){for(var key in cssStylesOld){if(!cssStyles||cssStyles[key]!=cssStylesOld[key]){elem.removeStyle(key);}}for(var key in cssStyles){if(!cssStylesOld||cssStyles[key]!=cssStylesOld[key]){elem.setStyle(key,cssStyles[key]);}}}}catch(e){}}
refreshCssContent: function(){this.__fH(this.getCssContent());}
getMinWidth: function anonymous(value
) {
if(this.$$runtime_minWidth!==undefined)return this.$$runtime_minWidth;if(this.$$user_minWidth!==undefined)return this.$$user_minWidth;else if(this.$$theme_minWidth!==undefined)return this.$$theme_minWidth;else return this.$$init_minWidth;
}
setMinWidth: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"minWidth","set",value);if(this.$$user_minWidth===value)return value;var computed, old;if(this.$$runtime_minWidth!==undefined){old=computed=this.$$runtime_minWidth;this.$$user_minWidth=value;}else if(this.$$user_minWidth!==undefined){old=this.$$user_minWidth;computed=this.$$user_minWidth=value;}else if(this.$$theme_minWidth!==undefined){old=this.$$theme_minWidth;computed=this.$$user_minWidth=value;}else if(this.$$useinit_minWidth){old=this.$$init_minWidth;delete this.$$useinit_minWidth;computed=this.$$user_minWidth=value;}else{computed=this.$$user_minWidth=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_minWidth;this._applyDimension(computed, old, "minWidth", "set");return value;
}
resetMinWidth: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initMinWidth: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeMinWidth: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeMinWidth: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedMinWidth: function anonymous(value
) {
var prop=qx.core.Property;if(this.$$theme_minWidth===value)return value;var computed, old;if(this.$$runtime_minWidth!==undefined){old=computed=this.$$runtime_minWidth;this.$$theme_minWidth=value;}else if(this.$$user_minWidth!==undefined){old=computed=this.$$user_minWidth;this.$$theme_minWidth=value;}else if(this.$$theme_minWidth!==undefined){old=this.$$theme_minWidth;computed=this.$$theme_minWidth=value;}else if(this.$$useinit_minWidth){old=this.$$init_minWidth;delete this.$$useinit_minWidth;computed=this.$$theme_minWidth=value;}else{computed=this.$$theme_minWidth=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_minWidth;this._applyDimension(computed, old, "minWidth", "setThemed");return value;
}
resetThemedMinWidth: function anonymous(value
) {
var prop=qx.core.Property;if(this.$$theme_minWidth===undefined)return;var computed, old;if(this.$$runtime_minWidth!==undefined){old=computed=this.$$runtime_minWidth;delete this.$$theme_minWidth;}else if(this.$$user_minWidth!==undefined){old=computed=this.$$user_minWidth;delete this.$$theme_minWidth;}else if(this.$$theme_minWidth!==undefined){old=this.$$theme_minWidth;delete this.$$theme_minWidth;if(this.$$init_minWidth!==undefined){computed=this.$$init_minWidth;this.$$useinit_minWidth=true;}}else if(this.$$useinit_minWidth){old=this.$$init_minWidth;}if(computed===undefined)computed=null;if(old===computed)return value;if(old===undefined)old=this.$$init_minWidth;this._applyDimension(computed, old, "minWidth", "resetThemed");
}
getWidth: function anonymous(value
) {
if(this.$$runtime_width!==undefined)return this.$$runtime_width;if(this.$$user_width!==undefined)return this.$$user_width;else if(this.$$theme_width!==undefined)return this.$$theme_width;else return this.$$init_width;
}
setWidth: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"width","set",value);if(this.$$user_width===value)return value;var computed, old;if(this.$$runtime_width!==undefined){old=computed=this.$$runtime_width;this.$$user_width=value;}else if(this.$$user_width!==undefined){old=this.$$user_width;computed=this.$$user_width=value;}else if(this.$$theme_width!==undefined){old=this.$$theme_width;computed=this.$$user_width=value;}else if(this.$$useinit_width){old=this.$$init_width;delete this.$$useinit_width;computed=this.$$user_width=value;}else{computed=this.$$user_width=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_width;this._applyDimension(computed, old, "width", "set");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeWidth')){reg.fireEvent(this, 'changeWidth', qx.event.type.Data, [computed, old])}return value;
}
resetWidth: function anonymous(value
) {
var prop=qx.core.Property;if(this.$$user_width===undefined)return;var computed, old;if(this.$$runtime_width!==undefined){old=computed=this.$$runtime_width;delete this.$$user_width;}else if(this.$$user_width!==undefined){old=this.$$user_width;delete this.$$user_width;if(this.$$runtime_width!==undefined)computed=this.$$runtime_width;if(this.$$theme_width!==undefined)computed=this.$$theme_width;else if(this.$$init_width!==undefined){computed=this.$$init_width;this.$$useinit_width=true;}}else if(this.$$theme_width!==undefined){old=this.$$theme_width;}else if(this.$$useinit_width){old=this.$$init_width;}if(computed===undefined)computed=null;if(old===computed)return value;if(old===undefined)old=this.$$init_width;this._applyDimension(computed, old, "width", "reset");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeWidth')){reg.fireEvent(this, 'changeWidth', qx.event.type.Data, [computed, old])}
}
initWidth: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeWidth: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeWidth: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedWidth: function anonymous(value
) {
var prop=qx.core.Property;if(this.$$theme_width===value)return value;var computed, old;if(this.$$runtime_width!==undefined){old=computed=this.$$runtime_width;this.$$theme_width=value;}else if(this.$$user_width!==undefined){old=computed=this.$$user_width;this.$$theme_width=value;}else if(this.$$theme_width!==undefined){old=this.$$theme_width;computed=this.$$theme_width=value;}else if(this.$$useinit_width){old=this.$$init_width;delete this.$$useinit_width;computed=this.$$theme_width=value;}else{computed=this.$$theme_width=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_width;this._applyDimension(computed, old, "width", "setThemed");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeWidth')){reg.fireEvent(this, 'changeWidth', qx.event.type.Data, [computed, old])}return value;
}
resetThemedWidth: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getMaxWidth: function anonymous(value
) {
if(this.$$runtime_maxWidth!==undefined)return this.$$runtime_maxWidth;if(this.$$user_maxWidth!==undefined)return this.$$user_maxWidth;else if(this.$$theme_maxWidth!==undefined)return this.$$theme_maxWidth;else return this.$$init_maxWidth;
}
setMaxWidth: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"maxWidth","set",value);if(this.$$user_maxWidth===value)return value;var computed, old;if(this.$$runtime_maxWidth!==undefined){old=computed=this.$$runtime_maxWidth;this.$$user_maxWidth=value;}else if(this.$$user_maxWidth!==undefined){old=this.$$user_maxWidth;computed=this.$$user_maxWidth=value;}else if(this.$$theme_maxWidth!==undefined){old=this.$$theme_maxWidth;computed=this.$$user_maxWidth=value;}else if(this.$$useinit_maxWidth){old=this.$$init_maxWidth;delete this.$$useinit_maxWidth;computed=this.$$user_maxWidth=value;}else{computed=this.$$user_maxWidth=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_maxWidth;this._applyDimension(computed, old, "maxWidth", "set");return value;
}
resetMaxWidth: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initMaxWidth: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeMaxWidth: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeMaxWidth: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedMaxWidth: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedMaxWidth: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getMinHeight: function anonymous(value
) {
if(this.$$runtime_minHeight!==undefined)return this.$$runtime_minHeight;if(this.$$user_minHeight!==undefined)return this.$$user_minHeight;else if(this.$$theme_minHeight!==undefined)return this.$$theme_minHeight;else return this.$$init_minHeight;
}
setMinHeight: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"minHeight","set",value);if(this.$$user_minHeight===value)return value;var computed, old;if(this.$$runtime_minHeight!==undefined){old=computed=this.$$runtime_minHeight;this.$$user_minHeight=value;}else if(this.$$user_minHeight!==undefined){old=this.$$user_minHeight;computed=this.$$user_minHeight=value;}else if(this.$$theme_minHeight!==undefined){old=this.$$theme_minHeight;computed=this.$$user_minHeight=value;}else if(this.$$useinit_minHeight){old=this.$$init_minHeight;delete this.$$useinit_minHeight;computed=this.$$user_minHeight=value;}else{computed=this.$$user_minHeight=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_minHeight;this._applyDimension(computed, old, "minHeight", "set");return value;
}
resetMinHeight: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initMinHeight: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeMinHeight: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeMinHeight: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedMinHeight: function anonymous(value
) {
var prop=qx.core.Property;if(this.$$theme_minHeight===value)return value;var computed, old;if(this.$$runtime_minHeight!==undefined){old=computed=this.$$runtime_minHeight;this.$$theme_minHeight=value;}else if(this.$$user_minHeight!==undefined){old=computed=this.$$user_minHeight;this.$$theme_minHeight=value;}else if(this.$$theme_minHeight!==undefined){old=this.$$theme_minHeight;computed=this.$$theme_minHeight=value;}else if(this.$$useinit_minHeight){old=this.$$init_minHeight;delete this.$$useinit_minHeight;computed=this.$$theme_minHeight=value;}else{computed=this.$$theme_minHeight=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_minHeight;this._applyDimension(computed, old, "minHeight", "setThemed");return value;
}
resetThemedMinHeight: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getHeight: function anonymous(value
) {
if(this.$$runtime_height!==undefined)return this.$$runtime_height;if(this.$$user_height!==undefined)return this.$$user_height;else if(this.$$theme_height!==undefined)return this.$$theme_height;else return this.$$init_height;
}
setHeight: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"height","set",value);if(this.$$user_height===value)return value;var computed, old;if(this.$$runtime_height!==undefined){old=computed=this.$$runtime_height;this.$$user_height=value;}else if(this.$$user_height!==undefined){old=this.$$user_height;computed=this.$$user_height=value;}else if(this.$$theme_height!==undefined){old=this.$$theme_height;computed=this.$$user_height=value;}else if(this.$$useinit_height){old=this.$$init_height;delete this.$$useinit_height;computed=this.$$user_height=value;}else{computed=this.$$user_height=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_height;this._applyDimension(computed, old, "height", "set");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeHeight')){reg.fireEvent(this, 'changeHeight', qx.event.type.Data, [computed, old])}return value;
}
resetHeight: function anonymous(value
) {
var prop=qx.core.Property;if(this.$$user_height===undefined)return;var computed, old;if(this.$$runtime_height!==undefined){old=computed=this.$$runtime_height;delete this.$$user_height;}else if(this.$$user_height!==undefined){old=this.$$user_height;delete this.$$user_height;if(this.$$runtime_height!==undefined)computed=this.$$runtime_height;if(this.$$theme_height!==undefined)computed=this.$$theme_height;else if(this.$$init_height!==undefined){computed=this.$$init_height;this.$$useinit_height=true;}}else if(this.$$theme_height!==undefined){old=this.$$theme_height;}else if(this.$$useinit_height){old=this.$$init_height;}if(computed===undefined)computed=null;if(old===computed)return value;if(old===undefined)old=this.$$init_height;this._applyDimension(computed, old, "height", "reset");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeHeight')){reg.fireEvent(this, 'changeHeight', qx.event.type.Data, [computed, old])}
}
initHeight: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeHeight: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeHeight: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedHeight: function anonymous(value
) {
var prop=qx.core.Property;if(this.$$theme_height===value)return value;var computed, old;if(this.$$runtime_height!==undefined){old=computed=this.$$runtime_height;this.$$theme_height=value;}else if(this.$$user_height!==undefined){old=computed=this.$$user_height;this.$$theme_height=value;}else if(this.$$theme_height!==undefined){old=this.$$theme_height;computed=this.$$theme_height=value;}else if(this.$$useinit_height){old=this.$$init_height;delete this.$$useinit_height;computed=this.$$theme_height=value;}else{computed=this.$$theme_height=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_height;this._applyDimension(computed, old, "height", "setThemed");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeHeight')){reg.fireEvent(this, 'changeHeight', qx.event.type.Data, [computed, old])}return value;
}
resetThemedHeight: function anonymous(value
) {
var prop=qx.core.Property;if(this.$$theme_height===undefined)return;var computed, old;if(this.$$runtime_height!==undefined){old=computed=this.$$runtime_height;delete this.$$theme_height;}else if(this.$$user_height!==undefined){old=computed=this.$$user_height;delete this.$$theme_height;}else if(this.$$theme_height!==undefined){old=this.$$theme_height;delete this.$$theme_height;if(this.$$init_height!==undefined){computed=this.$$init_height;this.$$useinit_height=true;}}else if(this.$$useinit_height){old=this.$$init_height;}if(computed===undefined)computed=null;if(old===computed)return value;if(old===undefined)old=this.$$init_height;this._applyDimension(computed, old, "height", "resetThemed");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeHeight')){reg.fireEvent(this, 'changeHeight', qx.event.type.Data, [computed, old])}
}
getMaxHeight: function anonymous(value
) {
if(this.$$runtime_maxHeight!==undefined)return this.$$runtime_maxHeight;if(this.$$user_maxHeight!==undefined)return this.$$user_maxHeight;else if(this.$$theme_maxHeight!==undefined)return this.$$theme_maxHeight;else return this.$$init_maxHeight;
}
setMaxHeight: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"maxHeight","set",value);if(this.$$user_maxHeight===value)return value;var computed, old;if(this.$$runtime_maxHeight!==undefined){old=computed=this.$$runtime_maxHeight;this.$$user_maxHeight=value;}else if(this.$$user_maxHeight!==undefined){old=this.$$user_maxHeight;computed=this.$$user_maxHeight=value;}else if(this.$$theme_maxHeight!==undefined){old=this.$$theme_maxHeight;computed=this.$$user_maxHeight=value;}else if(this.$$useinit_maxHeight){old=this.$$init_maxHeight;delete this.$$useinit_maxHeight;computed=this.$$user_maxHeight=value;}else{computed=this.$$user_maxHeight=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_maxHeight;this._applyDimension(computed, old, "maxHeight", "set");return value;
}
resetMaxHeight: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initMaxHeight: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeMaxHeight: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeMaxHeight: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedMaxHeight: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedMaxHeight: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getAllowGrowX: function anonymous(value
) {
if(this.$$runtime_allowGrowX!==undefined)return this.$$runtime_allowGrowX;if(this.$$user_allowGrowX!==undefined)return this.$$user_allowGrowX;else if(this.$$theme_allowGrowX!==undefined)return this.$$theme_allowGrowX;else return this.$$init_allowGrowX;
}
setAllowGrowX: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"allowGrowX","set",value);if(this.$$user_allowGrowX===value)return value;var computed, old;if(this.$$runtime_allowGrowX!==undefined){old=computed=this.$$runtime_allowGrowX;this.$$user_allowGrowX=value;}else if(this.$$user_allowGrowX!==undefined){old=this.$$user_allowGrowX;computed=this.$$user_allowGrowX=value;}else if(this.$$theme_allowGrowX!==undefined){old=this.$$theme_allowGrowX;computed=this.$$user_allowGrowX=value;}else if(this.$$useinit_allowGrowX){old=this.$$init_allowGrowX;delete this.$$useinit_allowGrowX;computed=this.$$user_allowGrowX=value;}else{computed=this.$$user_allowGrowX=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_allowGrowX;this._applyStretching(computed, old, "allowGrowX", "set");return value;
}
resetAllowGrowX: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initAllowGrowX: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeAllowGrowX: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeAllowGrowX: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedAllowGrowX: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedAllowGrowX: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
toggleAllowGrowX: function anonymous(
) {
return this.setAllowGrowX(!this.getAllowGrowX())
}
isAllowGrowX: function anonymous(
) {
return this.getAllowGrowX()
}
getAllowShrinkX: function anonymous(value
) {
if(this.$$runtime_allowShrinkX!==undefined)return this.$$runtime_allowShrinkX;if(this.$$user_allowShrinkX!==undefined)return this.$$user_allowShrinkX;else if(this.$$theme_allowShrinkX!==undefined)return this.$$theme_allowShrinkX;else return this.$$init_allowShrinkX;
}
setAllowShrinkX: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"allowShrinkX","set",value);if(this.$$user_allowShrinkX===value)return value;var computed, old;if(this.$$runtime_allowShrinkX!==undefined){old=computed=this.$$runtime_allowShrinkX;this.$$user_allowShrinkX=value;}else if(this.$$user_allowShrinkX!==undefined){old=this.$$user_allowShrinkX;computed=this.$$user_allowShrinkX=value;}else if(this.$$theme_allowShrinkX!==undefined){old=this.$$theme_allowShrinkX;computed=this.$$user_allowShrinkX=value;}else if(this.$$useinit_allowShrinkX){old=this.$$init_allowShrinkX;delete this.$$useinit_allowShrinkX;computed=this.$$user_allowShrinkX=value;}else{computed=this.$$user_allowShrinkX=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_allowShrinkX;this._applyStretching(computed, old, "allowShrinkX", "set");return value;
}
resetAllowShrinkX: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initAllowShrinkX: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeAllowShrinkX: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeAllowShrinkX: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedAllowShrinkX: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedAllowShrinkX: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
toggleAllowShrinkX: function anonymous(
) {
return this.setAllowShrinkX(!this.getAllowShrinkX())
}
isAllowShrinkX: function anonymous(
) {
return this.getAllowShrinkX()
}
getAllowGrowY: function anonymous(value
) {
if(this.$$runtime_allowGrowY!==undefined)return this.$$runtime_allowGrowY;if(this.$$user_allowGrowY!==undefined)return this.$$user_allowGrowY;else if(this.$$theme_allowGrowY!==undefined)return this.$$theme_allowGrowY;else return this.$$init_allowGrowY;
}
setAllowGrowY: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"allowGrowY","set",value);if(this.$$user_allowGrowY===value)return value;var computed, old;if(this.$$runtime_allowGrowY!==undefined){old=computed=this.$$runtime_allowGrowY;this.$$user_allowGrowY=value;}else if(this.$$user_allowGrowY!==undefined){old=this.$$user_allowGrowY;computed=this.$$user_allowGrowY=value;}else if(this.$$theme_allowGrowY!==undefined){old=this.$$theme_allowGrowY;computed=this.$$user_allowGrowY=value;}else if(this.$$useinit_allowGrowY){old=this.$$init_allowGrowY;delete this.$$useinit_allowGrowY;computed=this.$$user_allowGrowY=value;}else{computed=this.$$user_allowGrowY=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_allowGrowY;this._applyStretching(computed, old, "allowGrowY", "set");return value;
}
resetAllowGrowY: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initAllowGrowY: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeAllowGrowY: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeAllowGrowY: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedAllowGrowY: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedAllowGrowY: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
toggleAllowGrowY: function anonymous(
) {
return this.setAllowGrowY(!this.getAllowGrowY())
}
isAllowGrowY: function anonymous(
) {
return this.getAllowGrowY()
}
getAllowShrinkY: function anonymous(value
) {
if(this.$$runtime_allowShrinkY!==undefined)return this.$$runtime_allowShrinkY;if(this.$$user_allowShrinkY!==undefined)return this.$$user_allowShrinkY;else if(this.$$theme_allowShrinkY!==undefined)return this.$$theme_allowShrinkY;else return this.$$init_allowShrinkY;
}
setAllowShrinkY: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"allowShrinkY","set",value);if(this.$$user_allowShrinkY===value)return value;var computed, old;if(this.$$runtime_allowShrinkY!==undefined){old=computed=this.$$runtime_allowShrinkY;this.$$user_allowShrinkY=value;}else if(this.$$user_allowShrinkY!==undefined){old=this.$$user_allowShrinkY;computed=this.$$user_allowShrinkY=value;}else if(this.$$theme_allowShrinkY!==undefined){old=this.$$theme_allowShrinkY;computed=this.$$user_allowShrinkY=value;}else if(this.$$useinit_allowShrinkY){old=this.$$init_allowShrinkY;delete this.$$useinit_allowShrinkY;computed=this.$$user_allowShrinkY=value;}else{computed=this.$$user_allowShrinkY=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_allowShrinkY;this._applyStretching(computed, old, "allowShrinkY", "set");return value;
}
resetAllowShrinkY: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initAllowShrinkY: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeAllowShrinkY: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeAllowShrinkY: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedAllowShrinkY: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedAllowShrinkY: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
toggleAllowShrinkY: function anonymous(
) {
return this.setAllowShrinkY(!this.getAllowShrinkY())
}
isAllowShrinkY: function anonymous(
) {
return this.getAllowShrinkY()
}
setAllowStretchX: function anonymous(
) {
var a=arguments[0] instanceof Array?arguments[0]:arguments;a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));this.setAllowGrowX(a[0]);this.setAllowShrinkX(a[1]);
}
resetAllowStretchX: function anonymous(
) {
this.resetAllowGrowX();this.resetAllowShrinkX();
}
setThemedAllowStretchX: function anonymous(
) {
var a=arguments[0] instanceof Array?arguments[0]:arguments;a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));this.setThemedAllowGrowX(a[0]);this.setThemedAllowShrinkX(a[1]);
}
resetThemedAllowStretchX: function anonymous(
) {
this.resetThemedAllowGrowX();this.resetThemedAllowShrinkX();
}
setAllowStretchY: function anonymous(
) {
var a=arguments[0] instanceof Array?arguments[0]:arguments;a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));this.setAllowGrowY(a[0]);this.setAllowShrinkY(a[1]);
}
resetAllowStretchY: function anonymous(
) {
this.resetAllowGrowY();this.resetAllowShrinkY();
}
setThemedAllowStretchY: function anonymous(
) {
var a=arguments[0] instanceof Array?arguments[0]:arguments;a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));this.setThemedAllowGrowY(a[0]);this.setThemedAllowShrinkY(a[1]);
}
resetThemedAllowStretchY: function anonymous(
) {
this.resetThemedAllowGrowY();this.resetThemedAllowShrinkY();
}
getMarginTop: function anonymous(value
) {
if(this.$$runtime_marginTop!==undefined)return this.$$runtime_marginTop;if(this.$$user_marginTop!==undefined)return this.$$user_marginTop;else if(this.$$theme_marginTop!==undefined)return this.$$theme_marginTop;else return this.$$init_marginTop;
}
setMarginTop: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"marginTop","set",value);if(this.$$user_marginTop===value)return value;var computed, old;if(this.$$runtime_marginTop!==undefined){old=computed=this.$$runtime_marginTop;this.$$user_marginTop=value;}else if(this.$$user_marginTop!==undefined){old=this.$$user_marginTop;computed=this.$$user_marginTop=value;}else if(this.$$theme_marginTop!==undefined){old=this.$$theme_marginTop;computed=this.$$user_marginTop=value;}else if(this.$$useinit_marginTop){old=this.$$init_marginTop;delete this.$$useinit_marginTop;computed=this.$$user_marginTop=value;}else{computed=this.$$user_marginTop=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_marginTop;this._applyMargin(computed, old, "marginTop", "set");return value;
}
resetMarginTop: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initMarginTop: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeMarginTop: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeMarginTop: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedMarginTop: function anonymous(value
) {
var prop=qx.core.Property;if(this.$$theme_marginTop===value)return value;var computed, old;if(this.$$runtime_marginTop!==undefined){old=computed=this.$$runtime_marginTop;this.$$theme_marginTop=value;}else if(this.$$user_marginTop!==undefined){old=computed=this.$$user_marginTop;this.$$theme_marginTop=value;}else if(this.$$theme_marginTop!==undefined){old=this.$$theme_marginTop;computed=this.$$theme_marginTop=value;}else if(this.$$useinit_marginTop){old=this.$$init_marginTop;delete this.$$useinit_marginTop;computed=this.$$theme_marginTop=value;}else{computed=this.$$theme_marginTop=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_marginTop;this._applyMargin(computed, old, "marginTop", "setThemed");return value;
}
resetThemedMarginTop: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getMarginRight: function anonymous(value
) {
if(this.$$runtime_marginRight!==undefined)return this.$$runtime_marginRight;if(this.$$user_marginRight!==undefined)return this.$$user_marginRight;else if(this.$$theme_marginRight!==undefined)return this.$$theme_marginRight;else return this.$$init_marginRight;
}
setMarginRight: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"marginRight","set",value);if(this.$$user_marginRight===value)return value;var computed, old;if(this.$$runtime_marginRight!==undefined){old=computed=this.$$runtime_marginRight;this.$$user_marginRight=value;}else if(this.$$user_marginRight!==undefined){old=this.$$user_marginRight;computed=this.$$user_marginRight=value;}else if(this.$$theme_marginRight!==undefined){old=this.$$theme_marginRight;computed=this.$$user_marginRight=value;}else if(this.$$useinit_marginRight){old=this.$$init_marginRight;delete this.$$useinit_marginRight;computed=this.$$user_marginRight=value;}else{computed=this.$$user_marginRight=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_marginRight;this._applyMargin(computed, old, "marginRight", "set");return value;
}
resetMarginRight: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initMarginRight: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeMarginRight: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeMarginRight: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedMarginRight: function anonymous(value
) {
var prop=qx.core.Property;if(this.$$theme_marginRight===value)return value;var computed, old;if(this.$$runtime_marginRight!==undefined){old=computed=this.$$runtime_marginRight;this.$$theme_marginRight=value;}else if(this.$$user_marginRight!==undefined){old=computed=this.$$user_marginRight;this.$$theme_marginRight=value;}else if(this.$$theme_marginRight!==undefined){old=this.$$theme_marginRight;computed=this.$$theme_marginRight=value;}else if(this.$$useinit_marginRight){old=this.$$init_marginRight;delete this.$$useinit_marginRight;computed=this.$$theme_marginRight=value;}else{computed=this.$$theme_marginRight=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_marginRight;this._applyMargin(computed, old, "marginRight", "setThemed");return value;
}
resetThemedMarginRight: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getMarginBottom: function anonymous(value
) {
if(this.$$runtime_marginBottom!==undefined)return this.$$runtime_marginBottom;if(this.$$user_marginBottom!==undefined)return this.$$user_marginBottom;else if(this.$$theme_marginBottom!==undefined)return this.$$theme_marginBottom;else return this.$$init_marginBottom;
}
setMarginBottom: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"marginBottom","set",value);if(this.$$user_marginBottom===value)return value;var computed, old;if(this.$$runtime_marginBottom!==undefined){old=computed=this.$$runtime_marginBottom;this.$$user_marginBottom=value;}else if(this.$$user_marginBottom!==undefined){old=this.$$user_marginBottom;computed=this.$$user_marginBottom=value;}else if(this.$$theme_marginBottom!==undefined){old=this.$$theme_marginBottom;computed=this.$$user_marginBottom=value;}else if(this.$$useinit_marginBottom){old=this.$$init_marginBottom;delete this.$$useinit_marginBottom;computed=this.$$user_marginBottom=value;}else{computed=this.$$user_marginBottom=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_marginBottom;this._applyMargin(computed, old, "marginBottom", "set");return value;
}
resetMarginBottom: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initMarginBottom: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeMarginBottom: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeMarginBottom: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedMarginBottom: function anonymous(value
) {
var prop=qx.core.Property;if(this.$$theme_marginBottom===value)return value;var computed, old;if(this.$$runtime_marginBottom!==undefined){old=computed=this.$$runtime_marginBottom;this.$$theme_marginBottom=value;}else if(this.$$user_marginBottom!==undefined){old=computed=this.$$user_marginBottom;this.$$theme_marginBottom=value;}else if(this.$$theme_marginBottom!==undefined){old=this.$$theme_marginBottom;computed=this.$$theme_marginBottom=value;}else if(this.$$useinit_marginBottom){old=this.$$init_marginBottom;delete this.$$useinit_marginBottom;computed=this.$$theme_marginBottom=value;}else{computed=this.$$theme_marginBottom=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_marginBottom;this._applyMargin(computed, old, "marginBottom", "setThemed");return value;
}
resetThemedMarginBottom: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getMarginLeft: function anonymous(value
) {
if(this.$$runtime_marginLeft!==undefined)return this.$$runtime_marginLeft;if(this.$$user_marginLeft!==undefined)return this.$$user_marginLeft;else if(this.$$theme_marginLeft!==undefined)return this.$$theme_marginLeft;else return this.$$init_marginLeft;
}
setMarginLeft: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"marginLeft","set",value);if(this.$$user_marginLeft===value)return value;var computed, old;if(this.$$runtime_marginLeft!==undefined){old=computed=this.$$runtime_marginLeft;this.$$user_marginLeft=value;}else if(this.$$user_marginLeft!==undefined){old=this.$$user_marginLeft;computed=this.$$user_marginLeft=value;}else if(this.$$theme_marginLeft!==undefined){old=this.$$theme_marginLeft;computed=this.$$user_marginLeft=value;}else if(this.$$useinit_marginLeft){old=this.$$init_marginLeft;delete this.$$useinit_marginLeft;computed=this.$$user_marginLeft=value;}else{computed=this.$$user_marginLeft=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_marginLeft;this._applyMargin(computed, old, "marginLeft", "set");return value;
}
resetMarginLeft: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initMarginLeft: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeMarginLeft: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeMarginLeft: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedMarginLeft: function anonymous(value
) {
var prop=qx.core.Property;if(this.$$theme_marginLeft===value)return value;var computed, old;if(this.$$runtime_marginLeft!==undefined){old=computed=this.$$runtime_marginLeft;this.$$theme_marginLeft=value;}else if(this.$$user_marginLeft!==undefined){old=computed=this.$$user_marginLeft;this.$$theme_marginLeft=value;}else if(this.$$theme_marginLeft!==undefined){old=this.$$theme_marginLeft;computed=this.$$theme_marginLeft=value;}else if(this.$$useinit_marginLeft){old=this.$$init_marginLeft;delete this.$$useinit_marginLeft;computed=this.$$theme_marginLeft=value;}else{computed=this.$$theme_marginLeft=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_marginLeft;this._applyMargin(computed, old, "marginLeft", "setThemed");return value;
}
resetThemedMarginLeft: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
setMargin: function anonymous(
) {
var a=arguments[0] instanceof Array?arguments[0]:arguments;a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));this.setMarginTop(a[0]);this.setMarginRight(a[1]);this.setMarginBottom(a[2]);this.setMarginLeft(a[3]);
}
resetMargin: function anonymous(
) {
this.resetMarginTop();this.resetMarginRight();this.resetMarginBottom();this.resetMarginLeft();
}
setThemedMargin: function anonymous(
) {
var a=arguments[0] instanceof Array?arguments[0]:arguments;a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));this.setThemedMarginTop(a[0]);this.setThemedMarginRight(a[1]);this.setThemedMarginBottom(a[2]);this.setThemedMarginLeft(a[3]);
}
resetThemedMargin: function anonymous(
) {
this.resetThemedMarginTop();this.resetThemedMarginRight();this.resetThemedMarginBottom();this.resetThemedMarginLeft();
}
getAlignX: function anonymous(value
) {
if(this.$$runtime_alignX!==undefined)return this.$$runtime_alignX;if(this.$$user_alignX!==undefined)return this.$$user_alignX;else if(this.$$theme_alignX!==undefined)return this.$$theme_alignX;else return null;
}
setAlignX: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"alignX","set",value);if(this.$$user_alignX===value)return value;var computed, old;if(this.$$runtime_alignX!==undefined){old=computed=this.$$runtime_alignX;this.$$user_alignX=value;}else if(this.$$user_alignX!==undefined){old=this.$$user_alignX;computed=this.$$user_alignX=value;}else if(this.$$theme_alignX!==undefined){old=this.$$theme_alignX;computed=this.$$user_alignX=value;}else if(this.$$useinit_alignX){old=this.$$init_alignX;delete this.$$useinit_alignX;computed=this.$$user_alignX=value;}else{computed=this.$$user_alignX=value;}if(old===computed)return value;if(old===undefined)old=null;this._applyAlign(computed, old, "alignX", "set");return value;
}
resetAlignX: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initAlignX: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeAlignX: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeAlignX: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedAlignX: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedAlignX: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getAlignY: function anonymous(value
) {
if(this.$$runtime_alignY!==undefined)return this.$$runtime_alignY;if(this.$$user_alignY!==undefined)return this.$$user_alignY;else if(this.$$theme_alignY!==undefined)return this.$$theme_alignY;else return null;
}
setAlignY: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"alignY","set",value);if(this.$$user_alignY===value)return value;var computed, old;if(this.$$runtime_alignY!==undefined){old=computed=this.$$runtime_alignY;this.$$user_alignY=value;}else if(this.$$user_alignY!==undefined){old=this.$$user_alignY;computed=this.$$user_alignY=value;}else if(this.$$theme_alignY!==undefined){old=this.$$theme_alignY;computed=this.$$user_alignY=value;}else if(this.$$useinit_alignY){old=this.$$init_alignY;delete this.$$useinit_alignY;computed=this.$$user_alignY=value;}else{computed=this.$$user_alignY=value;}if(old===computed)return value;if(old===undefined)old=null;this._applyAlign(computed, old, "alignY", "set");return value;
}
resetAlignY: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initAlignY: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeAlignY: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeAlignY: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedAlignY: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedAlignY: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getBounds: function(){return this.__fN||this.__fJ||null;}
hasValidLayout: function(){return !this.__fK;}
getSizeHint: function(O){var P=this.__fL;if(P){return P;}if(O===false){return null;}P=this.__fL=this._computeSizeHint();if(this._hasHeightForWidth()&&this.__fI&&this.getHeight()==null){P.height=this.__fI;}if(P.minWidth>P.width){P.width=P.minWidth;}if(P.maxWidth<P.width){P.width=P.maxWidth;}if(!this.getAllowGrowX()){P.maxWidth=P.width;}if(!this.getAllowShrinkX()){P.minWidth=P.width;}if(P.minHeight>P.height){P.height=P.minHeight;}if(P.maxHeight<P.height){P.height=P.maxHeight;}if(!this.getAllowGrowY()){P.maxHeight=P.height;}if(!this.getAllowShrinkY()){P.minHeight=P.height;}return P;}
_hasHeightForWidth: function(){var W=this._getLayout();if(W){return W.hasHeightForWidth();}return false;}
_applyMargin: function(){this.__fM=true;var parent=this.$$parent;if(parent){parent.updateLayoutProperties();}}
_applyAlign: function(){var parent=this.$$parent;if(parent){parent.updateLayoutProperties();}}
_applyDimension: function(){qx.ui.core.queue.Layout.add(this);}
_applyStretching: function(){qx.ui.core.queue.Layout.add(this);}
hasUserBounds: function(){return !!this.__fN;}
setUserBounds: function(bb,top,ba,bc){this.__fN={left:bb,top:top,width:ba,height:bc};qx.ui.core.queue.Layout.add(this);}
resetUserBounds: function(){delete this.__fN;qx.ui.core.queue.Layout.add(this);}
setLayoutProperties: function(bf){if(bf==null){return;}var bd=this.__fO;if(!bd){bd=this.__fO={};}var parent=this.getLayoutParent();if(parent){parent.updateLayoutProperties(bf);}for(var be in bf){if(bf[be]==null){delete bd[be];}else{bd[be]=bf[be];}}}
getLayoutProperties: function(){return this.__fO||this.__fP;}
clearLayoutProperties: function(){delete this.__fO;}
updateLayoutProperties: function(bi){var bg=this._getLayout();if(bg){var bh;bg.invalidateChildrenCache();}qx.ui.core.queue.Layout.add(this);}
getApplicationRoot: function(){return qx.core.Init.getApplication().getRoot();}
getLayoutParent: function(){return this.$$parent||null;}
isRootWidget: function(){return false;}
_getRoot: function(){var parent=this;while(parent){if(parent.isRootWidget()){return parent;}parent=parent.$$parent;}return null;}
toHashCode: function(){return this.$$hash;}
toString: function(){return this.classname+f+this.$$hash+e;}
base: function(h,j){if(arguments.length===1){return h.callee.base.call(this);}else{return h.callee.base.apply(this,Array.prototype.slice.call(arguments,1));}}
self: function(k){return k.callee.self;}
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