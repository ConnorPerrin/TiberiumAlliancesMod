constructor: [Class webfrontend.gui.region.RegionCityMenu]
showMenu: function(bf){if(bf===null){return;}this.__QG=bf;this.removeAll();this.resetButtonState();this.__bgQ();switch(bf.get_VisObjectType()){case ClientLib.Vis.VisObject.EObjectType.RegionCityType:var bg=bf.get_Type();switch(bg){case ClientLib.Vis.Region.RegionCity.ERegionCityType.Own:this.add(this.__bgh);break;case ClientLib.Vis.Region.RegionCity.ERegionCityType.Alliance:this.add(this.__bgi);break;case ClientLib.Vis.Region.RegionCity.ERegionCityType.Enemy:this.add(this.__bgj);break;}break;case ClientLib.Vis.VisObject.EObjectType.RegionGhostCity:this.add(this.__bgk);break;case ClientLib.Vis.VisObject.EObjectType.RegionNPCBase:this.add(this.__bgl);break;case ClientLib.Vis.VisObject.EObjectType.RegionNPCCamp:if(!this.__QG.get_IsDestroyed()){this.add(this.__bgl);}break;case ClientLib.Vis.VisObject.EObjectType.RegionHubCenter:this.add(this.__bgm);break;case ClientLib.Vis.VisObject.EObjectType.RegionAllianceMarker:this.add(this.__bgn);this.__bgX();break;case ClientLib.Vis.VisObject.EObjectType.RegionPointOfInterest:case ClientLib.Vis.VisObject.EObjectType.RegionRuin:case ClientLib.Vis.VisObject.EObjectType.RegionHubControl:case ClientLib.Vis.VisObject.EObjectType.RegionHubServer:this.add(this.__bgo);break;}}
onCitiesChange: function(){}
onTick: function(){if(this.__QG!==null){this.__bgQ();}}
__bgQ: function(){switch(this.__QG.get_VisObjectType()){case ClientLib.Vis.VisObject.EObjectType.RegionCityType:var bh=this.__QG.get_Type();switch(bh){case ClientLib.Vis.Region.RegionCity.ERegionCityType.Own:this.__bgR();break;case ClientLib.Vis.Region.RegionCity.ERegionCityType.Alliance:this.__bgS();break;case ClientLib.Vis.Region.RegionCity.ERegionCityType.Enemy:this.__bgT();break;}break;case ClientLib.Vis.VisObject.EObjectType.RegionGhostCity:this.__bgU();break;case ClientLib.Vis.VisObject.EObjectType.RegionNPCBase:this.__bgV();break;case ClientLib.Vis.VisObject.EObjectType.RegionNPCCamp:if(!this.__QG.get_IsDestroyed()){this.__bgV();}break;case ClientLib.Vis.VisObject.EObjectType.RegionHubCenter:this.__bgW();break;case ClientLib.Vis.VisObject.EObjectType.RegionAllianceMarker:this.__bgX();break;}}
clickFirstButton: function(){var bi=this.getChildren()[0];if(bi){for(var i=0;i<bi.getChildren().length;i++){if(bi.getChildren()[i]!==null&&bi.getChildren()[i].isVisible()){if(bi.getChildren()[i].isEnabled()){bi.getChildren()[i].execute();}break;}}}}
__bgR: function(){var bo=this.__QG.CanMove();if(bo===ClientLib.Data.EMoveBaseResult.OK){this.__bgs.setEnabled(true);this.__bgs.set({toolTipText:this.tr(W)});}else{if((bo&ClientLib.Data.EMoveBaseResult.isBeingAttacked)===ClientLib.Data.EMoveBaseResult.isBeingAttacked){this.__bgs.setEnabled(false);this.__bgs.set({toolTipText:this.tr(X)});}else{if((bo&ClientLib.Data.EMoveBaseResult.isAttacking)===ClientLib.Data.EMoveBaseResult.isAttacking){this.__bgs.setEnabled(false);this.__bgs.set({toolTipText:this.tr(L)});}else{if((bo&ClientLib.Data.EMoveBaseResult.InsufficientBaseLevel)===ClientLib.Data.EMoveBaseResult.InsufficientBaseLevel){this.__bgs.setEnabled(false);this.__bgs.set({toolTipText:this.tr(u,ClientLib.Data.MainData.GetInstance().get_Server().get_MinLevelMoveBase())});}else{if((bo&ClientLib.Data.EMoveBaseResult.FailMovementRecoveryTime)===ClientLib.Data.EMoveBaseResult.FailMovementRecoveryTime){this.__bgs.setEnabled(false);this.__bgs.set({toolTipText:this.tr(P)});}else{if((bo&ClientLib.Data.EMoveBaseResult.FailBaseRecoveryTime)===ClientLib.Data.EMoveBaseResult.FailBaseRecoveryTime){this.__bgs.setEnabled(false);this.__bgs.set({toolTipText:this.tr(bc)});}}}}}}var bl=this.__QG.get_SupportWeaponStatus();if(bl.Status===ClientLib.Vis.Region.ESupportWeaponStatus.NotBuild){this.__bgt.exclude();this.__bgu.exclude();}else{this.__bgt.show();if((bl.Status&ClientLib.Vis.Region.ESupportWeaponStatus.Destroyed)===ClientLib.Vis.Region.ESupportWeaponStatus.Destroyed){this.__bgt.setEnabled(false);this.__bgt.set({toolTipText:this.tr(o)});if(this.__QG.get_hasDedicatedSupportBase()){this.__bgu.setEnabled(false);this.__bgu.set({toolTipText:this.tr(o)});}}else{if(this.__QG.get_hasDedicatedSupportBase()){this.__bgu.show();this.__bgu.setEnabled(true);}else{this.__bgu.exclude();this.__bgu.setEnabled(false);}if(this.__QG.get_isProtected()){this.__bgt.setEnabled(false);}else{this.__bgt.setEnabled(true);}this.__bgt.set({toolTipText:this.tr(n)});}}var bt=ClientLib.Data.MainData.GetInstance().get_EndGame();var bk=bt.GetControl(this.__QG.get_RawX(),this.__QG.get_RawY());if(bk!==null&&!ClientLib.Data.MainData.GetInstance().get_Server().get_IsSeasonServer()){var bn=ClientLib.Data.MainData.GetInstance().get_Time();var bu=bn.GetServerStep();var bq=ClientLib.Data.MainData.GetInstance().get_Player().get_EndGameLevelDebuffCooldown();var br;var bs=this.tr(F);var bm=false;if(bt.CanAttackCenter()){if(bk.get_AllianceId()===ClientLib.Data.MainData.GetInstance().get_Alliance().get_Id()){if(bq<bu){var bj=bt.GetCenter();if(bj.get_LevelDebuff()>0){br=phe.cnc.Util.getTimespanString(bn.GetTimeSpan(Math.max(0,bt.GetCenter().get_EndStep()-bu)),true,true);if(bt.GetCenter().get_LevelDebuff()<ClientLib.Data.MainData.GetInstance().get_Server().get_HubCenterDebuffCap()){bs=this.tr(I,bt.GetCenter().get_LevelDebuff(),br);}else{bs=this.tr(I,E+bt.GetCenter().get_LevelDebuff()+l,br);}}else{var bp=phe.cnc.Util.getTimespanString(ClientLib.Data.MainData.GetInstance().get_Server().get_HubCenterDebuffIncreaseSteps(),false,false);bs=this.tr(c,bp);}bm=true;}else{br=phe.cnc.Util.getTimespanString(bn.GetTimeSpan(Math.max(0,bq-bu)),true,true);bs=this.tr(m,br);}}else{bs=this.tr(j);}}this.__bgw.getToolTip().setLabel(bs);this.__bgw.setEnabled(bm);this.__bgw.show();}else{this.__bgw.exclude();}}
__bgS: function(){var bw=ClientLib.Data.MainData.GetInstance().get_AllianceCombatState().GetCombatByBaseId(this.__QG.get_Id());var bv=ClientLib.Data.MainData.GetInstance().get_Player().get_Id();if(bw&&bw.IsFinished===0){this.__bgE.setVisibility(bw.AttackerId===bv?h:t);this.__bgF.setVisibility(bw.AttackerId===bv?t:h);}else{this.__bgE.setVisibility(h);this.__bgF.setVisibility(h);}}
__bgT: function(){var bB=ClientLib.Data.MainData.GetInstance().get_AllianceCombatState().GetCombatByBaseId(this.__QG.get_Id());var bx=ClientLib.Data.MainData.GetInstance().get_Player().get_Id();if(bB&&bB.IsFinished===0){this.__bgx.setVisibility(bB.AttackerId===bx?h:t);this.__bgz.setVisibility(bB.AttackerId===bx?t:h);this.__bgy.setVisibility(h);}else{this.__bgx.setVisibility(h);this.__bgz.setVisibility(h);this.__bgy.setVisibility(t);var bA=ClientLib.Data.MainData.GetInstance().get_World().CheckAttackBaseRegion(this.__QG.get_RawX(),this.__QG.get_RawY());var by=phe.cnc.gui.region.Messages.getAttackToolTip(bA);this.__bgy.set({toolTipText:by});var bz=false;if(bA===ClientLib.Data.EAttackBaseResult.OK){bz=true;}else{if(bA===ClientLib.Data.EAttackBaseResult.FailInsufficientCommandPoints){bz=true;}}this.__bgy.setEnabled(bz);}}
__bgU: function(){var bC=this.__QG.CanMove();if(bC===ClientLib.Data.EMoveBaseResult.OK){this.__bgI.setEnabled(true);this.__bgI.set({toolTipText:this.tr(W)});}else{if((bC&ClientLib.Data.EMoveBaseResult.FailBaseRecoveryTime)===ClientLib.Data.EMoveBaseResult.FailBaseRecoveryTime){this.__bgI.setEnabled(false);this.__bgI.set({toolTipText:this.tr(bd)});}}}
__bgV: function(){var bH=ClientLib.Data.MainData.GetInstance().get_AllianceCombatState().GetCombatByBaseId(this.__QG.get_Id());var bD=ClientLib.Data.MainData.GetInstance().get_Player().get_Id();if(bH&&bH.IsFinished===0){this.__bgB.setVisibility(bH.AttackerId===bD?h:t);this.__bgD.setVisibility(bH.AttackerId===bD?t:h);this.__bgC.setVisibility(h);}else{this.__bgB.setVisibility(h);this.__bgD.setVisibility(h);this.__bgC.setVisibility(t);var bG=ClientLib.Data.MainData.GetInstance().get_World().CheckAttackBaseRegion(this.__QG.get_RawX(),this.__QG.get_RawY());var bE=phe.cnc.gui.region.Messages.getAttackToolTip(bG);this.__bgC.set({toolTipText:bE});var bF=false;if(bG===ClientLib.Data.EAttackBaseResult.OK){bF=true;}else{if(bG===ClientLib.Data.EAttackBaseResult.FailInsufficientCommandPoints){bF=true;}}this.__bgC.setEnabled(bF);}}
__bgW: function(){if(this.__QG.get_State()===ClientLib.Data.EndGame.EHubState.Ruin){this.__bgK.setVisibility(h);this.__bgL.setVisibility(h);this.__bgJ.setVisibility(h);this.__bgM.exclude();return;}var bU=f;var bO=null;var bW=null;var bQ=null;if(this.__QG.get_State()===ClientLib.Data.EndGame.EHubState.Attackable){var bK=ClientLib.Data.MainData.GetInstance().get_AllianceCombatState().GetCombatByBaseId(this.__QG.get_Id());var bL=ClientLib.Data.MainData.GetInstance().get_Player().get_Id();if(bK&&bK.IsFinished===0){this.__bgK.setVisibility(bK.AttackerId===bL?h:t);this.__bgL.setVisibility(bK.AttackerId===bL?t:h);this.__bgJ.setVisibility(h);}else{this.__bgK.setVisibility(h);this.__bgL.setVisibility(h);this.__bgJ.setVisibility(t);var bS=this.__QG.get_RawX();var bN=this.__QG.get_RawY();if(this.__QG.get_VisObjectType()===ClientLib.Vis.VisObject.EObjectType.RegionHubCenter){var bJ=ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity();var bP=this.__QG.GetClosestAttackField(bJ.get_X(),bJ.get_Y());bS=bP[0];bN=bP[1];}var bR=ClientLib.Data.MainData.GetInstance().get_World().CheckAttackBaseRegion(bS,bN);bU=phe.cnc.gui.region.Messages.getAttackToolTip(bR);var bI=false;if(bR===ClientLib.Data.EAttackBaseResult.OK){bI=true;}else{if((bR&ClientLib.Data.EAttackBaseResult.FailHubCenterAttackLockdown)===ClientLib.Data.EAttackBaseResult.FailHubCenterAttackLockdown){bO=ClientLib.Data.MainData.GetInstance().get_Time();bW=bO.GetServerStep();bQ=ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity().get_HubCenterAttackLockdownEndStep();bT=phe.cnc.Util.getTimespanString(bO.GetTimeSpan(Math.max(0,bQ-bW)),true,false);bU=qx.lang.String.format(bU,[bT]);bI=true;}else{if(bR===ClientLib.Data.EAttackBaseResult.FailInsufficientCommandPoints){bI=true;}}}this.__bgJ.getToolTip().setLabel(bU);this.__bgJ.setEnabled(bI);}}else{this.__bgK.setVisibility(h);this.__bgL.setVisibility(h);this.__bgJ.setVisibility(h);}var bV=ClientLib.Data.MainData.GetInstance().get_EndGame();if(bV.IsCityOnControlHub()){var bM=false;bU=this.tr(Q);if(bV.CanAttackCenter()){if(bV.IsCityOnOwnedControlHub()){bO=ClientLib.Data.MainData.GetInstance().get_Time();bW=bO.GetServerStep();bQ=ClientLib.Data.MainData.GetInstance().get_Player().get_EndGameLevelDebuffCooldown();if(bQ<bW){bM=true;bU=this.tr(B,phe.cnc.Util.getTimespanString(ClientLib.Data.MainData.GetInstance().get_Server().get_HubCenterDebuffIncreaseSteps(),false,false));}else{var bT=phe.cnc.Util.getTimespanString(bO.GetTimeSpan(Math.max(0,bQ-bW)),true,false);bU=this.tr(m,bT);}}else{bU=this.tr(N);}}this.__bgM.getToolTip().setLabel(bU);this.__bgM.setEnabled(bM);this.__bgM.show();}else{this.__bgM.exclude();}}
__bgX: function(){var bY=webfrontend.data.AllianceEvents.getInstance().getAllianceMarkerById(this.__QG.get_Data().get_Id());var bX=ClientLib.Data.MainData.GetInstance().get_Player().get_Id();var ca=D;if(bY!==null&&bY.get_Type()===5&&bY.get_IdPlayerCreated()===bX){ca=t;}else{ca=webfrontend.data.AllianceEvents.getInstance().getCanEditMarkers()?t:h;}this.__bgN.setVisibility(ca);this.__bgO.setVisibility(ca);this.__bgP.setVisibility(ca);}
__bgY: function(){var cb=new qx.ui.container.Composite(new qx.ui.layout.VBox(0)).set({padding:2});this.__bgC=new webfrontend.ui.SoundButton(this.tr(a)).set({toolTipText:this.tr(a)});this.__bgC.addListener(H,this.__bhi,this);this.__bgC.addListener(R,this.__bhj,this);this.__bgC.addListener(e,this.__bhk,this);this.__bgC.addListener(M,this.__bhk,this);cb.add(this.__bgC);this.__bgB=new webfrontend.ui.SoundButton(this.tr(k)).set({toolTipText:this.tr(k)});this.__bgB.addListener(H,this.__bhm,this);cb.add(this.__bgB);this.__bgD=new webfrontend.ui.SoundButton(this.tr(K)).set({toolTipText:this.tr(K)});this.__bgD.addListener(H,this.__bhn,this);cb.add(this.__bgD);this.__bhg(cb);return cb;}
__bha: function(){var cc=new qx.ui.container.Composite(new qx.ui.layout.VBox(0)).set({padding:2});var cd=new qx.ui.tooltip.ToolTip().set({rich:true});cd.setLabel(this.tr(a));this.__bgJ=new webfrontend.ui.SoundButton(this.tr(a)).set({toolTip:cd});this.__bgJ.addListener(H,this.__bhi,this);this.__bgJ.addListener(R,this.__bhj,this);this.__bgJ.addListener(e,this.__bhk,this);this.__bgJ.addListener(M,this.__bhk,this);cc.add(this.__bgJ);this.__bgK=new webfrontend.ui.SoundButton(this.tr(k)).set({toolTipText:this.tr(k)});this.__bgK.addListener(H,this.__bhm,this);cc.add(this.__bgK);this.__bgL=new webfrontend.ui.SoundButton(this.tr(K)).set({toolTipText:this.tr(K)});this.__bgL.addListener(H,this.__bhn,this);cc.add(this.__bgL);cd=new qx.ui.tooltip.ToolTip().set({rich:true});this.__bgM=new webfrontend.ui.SoundButton(this.tr(s)).set({toolTip:cd});this.__bgM.addListener(H,this.__bhx,this);cc.add(this.__bgM);this.__bhg(cc);return cc;}
__bhb: function(){this.__bgN=new webfrontend.ui.SoundButton(this.tr(q)).set({toolTipText:this.tr(v)});this.__bgO=new webfrontend.ui.SoundButton(this.tr(x)).set({toolTipText:this.tr(S)});this.__bgP=new webfrontend.ui.SoundButton(this.tr(T)).set({toolTipText:this.tr(g)});var ce=new qx.ui.container.Composite(new qx.ui.layout.VBox(0)).set({padding:2});ce.add(this.__bgN);ce.add(this.__bgO);ce.add(this.__bgP);this.__bhg(ce);this.__bgN.addListener(H,function(){qx.core.Init.getApplication().getBackgroundArea().closeCityInfo();webfrontend.gui.info.AllianceMarkerInfoWindow.getInstance().set({MarkerId:this.__QG.get_Data().get_Id()}).show();},this);this.__bgO.addListener(H,function(){qx.core.Init.getApplication().getBackgroundArea().closeCityInfo();webfrontend.gui.region.RegionInfoAllianceMarker.getInstance().startMoveMarkerOnRegion(this.__QG.get_Data().get_Id());},this);this.__bgP.addListener(H,function(){qx.core.Init.getApplication().getBackgroundArea().closeCityInfo();var cf=this.__QG.get_Data().get_Type();webfrontend.gui.region.RegionInfoAllianceMarker.getInstance().startRemoveMarkerOnRegion(cf,this.__QG.get_Data().get_Id());},this);return ce;}
__bhc: function(){var ch=new qx.ui.container.Composite(new qx.ui.layout.VBox(0)).set({padding:2});this.__bgy=new webfrontend.ui.SoundButton(this.tr(a)).set({toolTipText:this.tr(a)});this.__bgy.addListener(H,this.__bhi,this);this.__bgy.addListener(R,this.__bhj,this);this.__bgy.addListener(e,this.__bhk,this);this.__bgy.addListener(M,this.__bhk,this);ch.add(this.__bgy);this.__bgx=new webfrontend.ui.SoundButton(this.tr(k)).set({toolTipText:this.tr(k)});this.__bgx.addListener(H,this.__bhm,this);ch.add(this.__bgx);this.__bgz=new webfrontend.ui.SoundButton(this.tr(K)).set({toolTipText:this.tr(K)});this.__bgz.addListener(H,this.__bhn,this);ch.add(this.__bgz);this.__bgA=new webfrontend.ui.SoundButton(this.tr(V)).set({toolTipText:this.tr(V)});this.__bgA.addListener(H,this.__bhw,this);ch.add(this.__bgA);var cg=new webfrontend.ui.SoundButton(this.tr(O)).set({toolTipText:this.tr(O)});cg.addListener(H,this.__bho,this);ch.add(cg);this.__bhg(ch);return ch;}
__bhd: function(){var ci=new qx.ui.container.Composite(new qx.ui.layout.VBox(0)).set({padding:2});this.__bgr=new webfrontend.ui.SoundButton(this.tr(Y)).set({toolTipText:this.tr(Y)});this.__bgr.addListener(H,this.__bhq,this);ci.add(this.__bgr);this.__bgs=new webfrontend.ui.SoundButton(this.tr(W)).set({toolTipText:this.tr(W)});this.__bgs.setEnabled(false);this.__bgs.addListener(H,this.__bhr,this);ci.add(this.__bgs);this.__bgt=new webfrontend.ui.SoundButton(this.tr(n)).set({toolTipText:this.tr(n)});this.__bgt.setEnabled(false);this.__bgt.addListener(H,this.__bht,this);ci.add(this.__bgt);this.__bgu=new webfrontend.ui.SoundButton(this.tr(U)).set({toolTipText:this.tr(U)});this.__bgu.setEnabled(false);this.__bgu.addListener(H,this.__bhu,this);ci.add(this.__bgu);var cj=new qx.ui.tooltip.ToolTip().set({rich:true});this.__bgw=new webfrontend.ui.SoundButton(this.tr(s)).set({toolTip:cj});this.__bgw.addListener(H,this.__bhx,this);ci.add(this.__bgw);this.__bgv=new webfrontend.ui.SoundButton(this.tr(V)).set({toolTipText:this.tr(V)});this.__bgv.addListener(H,this.__bhw,this);ci.add(this.__bgv);this.__bhg(ci);return ci;}
__bhe: function(){var cl=new qx.ui.container.Composite(new qx.ui.layout.VBox(0)).set({padding:2});this.__bgH=new webfrontend.ui.SoundButton(this.tr(y)).set({toolTipText:this.tr(y)});this.__bgH.addListener(H,this.__bhl,this);cl.add(this.__bgH);this.__bgE=new webfrontend.ui.SoundButton(this.tr(k)).set({toolTipText:this.tr(k)});this.__bgE.addListener(H,this.__bhm,this);cl.add(this.__bgE);this.__bgF=new webfrontend.ui.SoundButton(this.tr(K)).set({toolTipText:this.tr(K)});this.__bgF.addListener(H,this.__bhn,this);cl.add(this.__bgF);this.__bgG=new webfrontend.ui.SoundButton(this.tr(V)).set({toolTipText:this.tr(V)});this.__bgG.addListener(H,this.__bhw,this);cl.add(this.__bgG);var ck=new webfrontend.ui.SoundButton(this.tr(O)).set({toolTipText:this.tr(O)});ck.addListener(H,this.__bho,this);cl.add(ck);this.__bhg(cl);return cl;}
__bhf: function(){var cm=new qx.ui.container.Composite(new qx.ui.layout.VBox(0)).set({padding:2});this.__bhg(cm);return cm;}
__bhg: function(cn){if(cn){var co=new webfrontend.ui.SoundButton(this.tr(b)).set({toolTipText:this.tr(b)});co.addListener(H,this.__bhp,this);cn.add(co);}}
__bhh: function(){var cp=new qx.ui.container.Composite(new qx.ui.layout.VBox(0)).set({padding:2});this.__bgI=new webfrontend.ui.SoundButton(this.tr(W));this.__bgI.addListener(H,this.__bhr,this);cp.add(this.__bgI);return cp;}
__bhi: function(){var cu=ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity();if(cu.get_isProtected()&&this.__QG.get_PlayerFaction()!==ClientLib.Base.EFactionType.FORFaction){var ct=ClientLib.Data.MainData.GetInstance().get_Time();var cs=phe.cnc.Util.getDateTimeString(ct.GetJSStepTime(cu.get_ProtectionEndStep()));var cv=cu.get_X()-this.__QG.get_RawX();var cw=cu.get_Y()-this.__QG.get_RawY();var cq=Math.floor(Math.sqrt(cv*cv+cw*cw));this.__xN.showLossNewbieProtectionWarning(this,this.__yt,cu.get_Name(),cu.get_X(),cu.get_Y(),cq,cs);}else{this.__yt(0);}var cr=qx.core.Init.getApplication();cr.getBackgroundArea().closeCityInfo();}
__yt: function(cC){if(cC===0){var cA=this.__QG.get_Id();var cB=this.__QG.get_Coordinates();var cD=ClientLib.Data.MainData.GetInstance().get_Cities();cD.AddOtherCity(-1,cA,cB&65535,cB>>16);cD.set_CurrentCityId(cA);var cz=qx.core.Init.getApplication();var cy=cz.getPlayArea();var cx=cy.getHUD();cz.getBackgroundArea().closeCityInfo();cx.set_LastAttackedCityCoords(cB);cy.setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatSetupDefense,cA,0,cx.getCombatSetupOffset());ClientLib.Vis.VisMain.GetInstance().get_CombatSetup().SetPosition(0,cx.getCombatSetupOffset(ClientLib.Vis.CombatSetup.CombatSetupViewMode.Defense));}this.__xN.disable();}
__bhj: function(){var cE=ClientLib.Data.MainData.GetInstance().get_World().CheckAttackBaseRegion(this.__QG.get_RawX(),this.__QG.get_RawY());if(cE!==ClientLib.Data.EAttackBaseResult.OK&&cE!==ClientLib.Data.EAttackBaseResult.FailInsufficientCommandPoints){return;}switch(this.__QG.get_VisObjectType()){case ClientLib.Vis.VisObject.EObjectType.RegionNPCCamp:case ClientLib.Vis.VisObject.EObjectType.RegionHubServer:case ClientLib.Vis.VisObject.EObjectType.RegionHubCenter:case ClientLib.Vis.VisObject.EObjectType.RegionHubControl:return;case ClientLib.Vis.VisObject.EObjectType.RegionNPCBase:if(this.__QG.get_IsHubBase()){return;}break;}ClientLib.Vis.VisMain.GetInstance().get_RegionOwnershipPreview().ShowPreview(this.__QG.get_RawX(),this.__QG.get_RawY());}
__bhk: function(){ClientLib.Vis.VisMain.GetInstance().get_RegionOwnershipPreview().HidePreview();}
__bhl: function(){var cF=this.__QG.get_Id();var cG=qx.core.Init.getApplication();var cH=ClientLib.Data.PlayerAreaViewMode.pavmAllianceBase;if(cG.getPlayArea().getViewMode()>0){cH=cG.getPlayArea().getViewMode();}cG.getBackgroundArea().closeCityInfo();cG.getPlayArea().setView(cH,cF,0,0);}
__bhm: function(){webfrontend.gui.UtilView.spectateCombat(this.__QG.get_Id());}
__bhn: function(){var cI=this.__QG.get_Id();ClientLib.Data.MainData.GetInstance().get_Combat().set_Id(cI);var cJ=qx.core.Init.getApplication();cJ.getBackgroundArea().closeCityInfo();cJ.getPlayArea().setView(ClientLib.Data.PlayerAreaViewMode.pavmCombatAttacker,cI,0,0);}
__bho: function(){var cL=qx.core.Init.getApplication();cL.getBackgroundArea().closeCityInfo();var cK=this.__QG.get_PlayerName();var cM=webfrontend.gui.mail.MailOverlay.getInstance();cM.onNewMessage([cK],false);}
__bhp: function(){var cN=webfrontend.gui.mail.MailOverlay.getInstance();if(cN.getOpenedNew()){cN.addToMessage(J+this.__QG.get_RawX()+w+this.__QG.get_RawY()+C);return;}var cQ=qx.core.Init.getApplication().getChat().getChatWidget().getEditable();var cO=cQ.getValue()!==null?cQ.getValue():D;var cP=new qx.util.StringBuilder(1024);cP.add(cO.substring(0,cQ.getTextSelectionEnd()),J,this.__QG.get_RawX(),w,this.__QG.get_RawY(),C,cO.substring(cQ.getTextSelectionEnd()));cQ.setValue(cP.get());}
__bhq: function(){var cR=this.__QG.get_Id();ClientLib.Data.MainData.GetInstance().get_Cities().set_HomeCityId(cR);var cS=qx.core.Init.getApplication();cS.getBackgroundArea().closeCityInfo();cS.getPlayArea().setView(ClientLib.Data.PlayerAreaViewMode.pavmPlayerBase,cR,0,0);}
__bhr: function(){var cV=ClientLib.Data.MainData.GetInstance();var cU=cV.get_EndGame().GetControl(this.__QG.get_RawX(),this.__QG.get_RawY());if(cU!==null&&!cV.get_Alliance().get_HasWon()&&!ClientLib.Data.MainData.GetInstance().get_Server().get_IsSeasonServer()){var cT=cV.get_EndGame().GetCenter();if(cU.get_AllianceId()===cV.get_Alliance().get_Id()&&cV.get_EndGame().GetOwnedControlHubsCount(cV.get_Alliance().get_Id())===cV.get_Server().get_HubControlClaimCount()&&cT.get_State()===ClientLib.Data.EndGame.EHubState.Attackable){this.__bgp.showControlHubLossWarning(this.tr(d),this,this.__bhs);return;}else{if(cU.get_AllianceId()===cV.get_Alliance().get_Id()&&cV.get_EndGame().GetOwnedControlHubsCount(cV.get_Alliance().get_Id())===cV.get_Server().get_HubControlClaimCount()&&cT.get_State()!==ClientLib.Data.EndGame.EHubState.Attackable&&cT.get_State()!==ClientLib.Data.EndGame.EHubState.Ruin){this.__bgp.showControlHubLossWarning(this.tr(r),this,this.__bhs);return;}else{if(cU.get_AllianceId()===cV.get_Alliance().get_Id()&&cU.GetOwnedTerminalCount(cV.get_Alliance().get_Id())<=ClientLib.Data.MainData.GetInstance().get_Server().get_HubControlTerminalClaimCount()&&cV.get_EndGame().GetOwnedControlHubsCount(cV.get_Alliance().get_Id())<cV.get_Server().get_HubControlClaimCount()&&cT.get_State()!==ClientLib.Data.EndGame.EHubState.Attackable&&cT.get_State()!==ClientLib.Data.EndGame.EHubState.Ruin){this.__bgp.showControlHubLossWarning(this.tr(z),this,this.__bhs);return;}}}}else{if(cU!==null&&!cV.get_Alliance().get_HasWon()){if(cU.get_AllianceId()===cV.get_Alliance().get_Id()&&cU.GetOwnedTerminalCount(cV.get_Alliance().get_Id())<=ClientLib.Data.MainData.GetInstance().get_Server().get_HubControlTerminalClaimCount()){if(this.__QG.get_VisObjectType()!==ClientLib.Vis.VisObject.EObjectType.RegionGhostCity){this.__bgp.showControlHubLossWarning(this.tr(z),this,this.__bhs);return;}}}}this.__bhs(0);}
__bhs: function(cX){if(cX===0){webfrontend.gui.region.RegionCityMoveInfo.getInstance().setCity(this.__QG);ClientLib.Vis.VisMain.GetInstance().SetMouseTool(ClientLib.Vis.MouseTool.EMouseTool.MoveBase,this.__QG.get_Id());var cW=qx.core.Init.getApplication();cW.getBackgroundArea().closeCityInfo();}this.__bgp.disable();}
__bht: function(){webfrontend.gui.region.RegionCitySupportInfo.getInstance().setCity(this.__QG);ClientLib.Vis.VisMain.GetInstance().SetMouseTool(ClientLib.Vis.MouseTool.EMouseTool.SelectSupport,this.__QG);var cY=qx.core.Init.getApplication();cY.getBackgroundArea().closeCityInfo();}
__bhu: function(){var da=this.__QG.get_SupportWeapon();var db=da.pt;var de=phe.cnc.Util.getTimespanString(db,false);var dc=this.__QG.get_Name();this.__bgq.showRecallSupportConfirmation(this,this.__bhv,this.__QG.get_RawX(),this.__QG.get_RawY(),dc,de);var dd=qx.core.Init.getApplication();dd.getBackgroundArea().closeCityInfo();}
__bhv: function(dg){if(dg===0){var df=ClientLib.Data.MainData.GetInstance().get_Cities().get_CurrentOwnCity();if(df!==null){df.RecallDedicatedSupport();}}this.__bgq.disable();}
__bhw: function(){webfrontend.gui.info.BaseInfoWindow.getInstance().openWithBaseId(this.__QG.get_Id());var dh=qx.core.Init.getApplication();dh.getBackgroundArea().closeCityInfo();}
__bhx: function(){this.__QG.ShowDebuffEffect();ClientLib.Data.MainData.GetInstance().get_EndGame().LevelDebuff();}
resetButtonState: function(){this.__bgr.reset();this.__bgs.reset();this.__bgt.reset();this.__bgu.reset();this.__bgv.reset();this.__bgw.reset();this.__bgx.reset();this.__bgy.reset();this.__bgz.reset();this.__bgA.reset();this.__bgB.reset();this.__bgC.reset();this.__bgD.reset();this.__bgE.reset();this.__bgF.reset();this.__bgG.reset();this.__bgJ.reset();this.__bgK.reset();this.__bgL.reset();this.__bgM.reset();}
__cnctaopt_real_showMenu: function(bf){if(bf===null){return;}this.__QG=bf;this.removeAll();this.resetButtonState();this.__bgQ();switch(bf.get_VisObjectType()){case ClientLib.Vis.VisObject.EObjectType.RegionCityType:var bg=bf.get_Type();switch(bg){case ClientLib.Vis.Region.RegionCity.ERegionCityType.Own:this.add(this.__bgh);break;case ClientLib.Vis.Region.RegionCity.ERegionCityType.Alliance:this.add(this.__bgi);break;case ClientLib.Vis.Region.RegionCity.ERegionCityType.Enemy:this.add(this.__bgj);break;}break;case ClientLib.Vis.VisObject.EObjectType.RegionGhostCity:this.add(this.__bgk);break;case ClientLib.Vis.VisObject.EObjectType.RegionNPCBase:this.add(this.__bgl);break;case ClientLib.Vis.VisObject.EObjectType.RegionNPCCamp:if(!this.__QG.get_IsDestroyed()){this.add(this.__bgl);}break;case ClientLib.Vis.VisObject.EObjectType.RegionHubCenter:this.add(this.__bgm);break;case ClientLib.Vis.VisObject.EObjectType.RegionAllianceMarker:this.add(this.__bgn);this.__bgX();break;case ClientLib.Vis.VisObject.EObjectType.RegionPointOfInterest:case ClientLib.Vis.VisObject.EObjectType.RegionRuin:case ClientLib.Vis.VisObject.EObjectType.RegionHubControl:case ClientLib.Vis.VisObject.EObjectType.RegionHubServer:this.add(this.__bgo);break;}}
_afterAddChild: function(f){this.fireNonBubblingEvent(b,qx.event.type.Data,[f]);}
_afterRemoveChild: function(g){this.fireNonBubblingEvent(c,qx.event.type.Data,[g]);}
getChildren: function(){return this.__ki||this.__kj;}
hasChildren: function(){var fG=this.__ki;return fG!=null&&(!!fG[0]);}
indexOf: function(fF){var fE=this.__ki;if(!fE){return -1;}return fE.indexOf(fF);}
add: function(fL,fK){if(fL.getLayoutParent()==this){qx.lang.Array.remove(this.__ki,fL);}if(this.__ki){this.__ki.push(fL);}else{this.__ki=[fL];}this.__kk(fL,fK);}
addAt: function(fP,fM,fO){if(!this.__ki){this.__ki=[];}if(fP.getLayoutParent()==this){qx.lang.Array.remove(this.__ki,fP);}var fN=this.__ki[fM];if(fN===fP){fP.setLayoutProperties(fO);}if(fN){qx.lang.Array.insertBefore(this.__ki,fP,fN);}else{this.__ki.push(fP);}this.__kk(fP,fO);}
addBefore: function(fQ,fS,fR){if(fQ==fS){return;}if(!this.__ki){this.__ki=[];}if(fQ.getLayoutParent()==this){qx.lang.Array.remove(this.__ki,fQ);}qx.lang.Array.insertBefore(this.__ki,fQ,fS);this.__kk(fQ,fR);}
addAfter: function(fV,fT,fU){if(fV==fT){return;}if(!this.__ki){this.__ki=[];}if(fV.getLayoutParent()==this){qx.lang.Array.remove(this.__ki,fV);}qx.lang.Array.insertAfter(this.__ki,fV,fT);this.__kk(fV,fU);}
remove: function(fW){if(!this.__ki){throw new Error(cJ);}qx.lang.Array.remove(this.__ki,fW);this.__kl(fW);}
removeAt: function(fX){if(!this.__ki){throw new Error(cJ);}var fY=this.__ki[fX];qx.lang.Array.removeAt(this.__ki,fX);this.__kl(fY);return fY;}
removeAll: function(){if(!this.__ki){return[];}var ga=this.__ki.concat();this.__ki.length=0;for(var i=ga.length-1;i>=0;i--){this.__kl(ga[i]);}qx.ui.core.queue.Layout.add(this);return ga;}
setLayout: function(eu){if(this.__kf){this.__kf.connectToWidget(null);}if(eu){eu.connectToWidget(this);}this.__kf=eu;qx.ui.core.queue.Layout.add(this);}
getLayout: function(){return this.__kf;}
getPaddingTop: function anonymous(value
) {
if(this.$$runtime_paddingTop!==undefined)return this.$$runtime_paddingTop;if(this.$$user_paddingTop!==undefined)return this.$$user_paddingTop;else if(this.$$theme_paddingTop!==undefined)return this.$$theme_paddingTop;else return this.$$init_paddingTop;
}
setPaddingTop: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetPaddingTop: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initPaddingTop: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimePaddingTop: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimePaddingTop: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedPaddingTop: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedPaddingTop: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getPaddingRight: function anonymous(value
) {
if(this.$$runtime_paddingRight!==undefined)return this.$$runtime_paddingRight;if(this.$$user_paddingRight!==undefined)return this.$$user_paddingRight;else if(this.$$theme_paddingRight!==undefined)return this.$$theme_paddingRight;else return this.$$init_paddingRight;
}
setPaddingRight: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetPaddingRight: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initPaddingRight: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimePaddingRight: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimePaddingRight: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedPaddingRight: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedPaddingRight: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getPaddingBottom: function anonymous(value
) {
if(this.$$runtime_paddingBottom!==undefined)return this.$$runtime_paddingBottom;if(this.$$user_paddingBottom!==undefined)return this.$$user_paddingBottom;else if(this.$$theme_paddingBottom!==undefined)return this.$$theme_paddingBottom;else return this.$$init_paddingBottom;
}
setPaddingBottom: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetPaddingBottom: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initPaddingBottom: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimePaddingBottom: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimePaddingBottom: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedPaddingBottom: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedPaddingBottom: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getPaddingLeft: function anonymous(value
) {
if(this.$$runtime_paddingLeft!==undefined)return this.$$runtime_paddingLeft;if(this.$$user_paddingLeft!==undefined)return this.$$user_paddingLeft;else if(this.$$theme_paddingLeft!==undefined)return this.$$theme_paddingLeft;else return this.$$init_paddingLeft;
}
setPaddingLeft: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetPaddingLeft: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initPaddingLeft: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimePaddingLeft: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimePaddingLeft: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedPaddingLeft: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
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
getZIndex: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setZIndex: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetZIndex: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initZIndex: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeZIndex: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeZIndex: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedZIndex: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedZIndex: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getDecorator: function anonymous(value
) {
if(this.$$runtime_decorator!==undefined)return this.$$runtime_decorator;if(this.$$user_decorator!==undefined)return this.$$user_decorator;else if(this.$$theme_decorator!==undefined)return this.$$theme_decorator;else return this.$$init_decorator;
}
setDecorator: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetDecorator: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initDecorator: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeDecorator: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeDecorator: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedDecorator: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
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
getTextColor: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setTextColor: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
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
resetThemedTextColor: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getFont: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setFont: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
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
setOpacity: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetOpacity: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initOpacity: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeOpacity: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeOpacity: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedOpacity: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedOpacity: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getCursor: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setCursor: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetCursor: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initCursor: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
refreshCursor: function anonymous(value
) {
var prop=qx.core.Property;var inherit=prop.$$inherit;var computed, old=this.$$inherit_cursor;if(this.$$runtime_cursor!==undefined){old=computed=this.$$runtime_cursor;}else if(this.$$user_cursor!==undefined){computed=this.$$user_cursor;}else if(this.$$theme_cursor!==undefined){computed=this.$$theme_cursor;}else if(this.$$useinit_cursor){delete this.$$useinit_cursor;computed=this.$$init_cursor;}if(computed===undefined||computed===inherit){computed=value;if((computed===undefined||computed===inherit)&&this.$$init_cursor!==undefined&&this.$$init_cursor!==inherit){computed=this.$$init_cursor;this.$$useinit_cursor=true;}else{delete this.$$useinit_cursor;}}if(old===computed)return value;if(computed===inherit){computed=undefined;delete this.$$inherit_cursor;}else if(computed===undefined)delete this.$$inherit_cursor;else this.$$inherit_cursor=computed;var backup=computed;if(old===undefined)old=this.$$init_cursor;if(computed===undefined||computed==inherit)computed=null;this._applyCursor(computed, old, "cursor", "refresh");var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){if(a[i].refreshCursor)a[i].refreshCursor(backup);}
}
setRuntimeCursor: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeCursor: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedCursor: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedCursor: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getToolTip: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setToolTip: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetToolTip: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
setRuntimeToolTip: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeToolTip: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
getToolTipText: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setToolTipText: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetToolTipText: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initToolTipText: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeToolTipText: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeToolTipText: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
getToolTipIcon: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setToolTipIcon: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetToolTipIcon: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initToolTipIcon: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeToolTipIcon: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeToolTipIcon: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
getBlockToolTip: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setBlockToolTip: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
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
setShowToolTipWhenDisabled: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
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
setVisibility: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetVisibility: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initVisibility: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeVisibility: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeVisibility: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
getEnabled: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setEnabled: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetEnabled: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
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
getAnonymous: function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bk);}
setAnonymous: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
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
setTabIndex: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
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
setKeepFocus: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetKeepFocus: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initKeepFocus: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
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
setKeepActive: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetKeepActive: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initKeepActive: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
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
setDraggable: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
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
setDroppable: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
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
setSelectable: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
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
setAppearance: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetAppearance: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initAppearance: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeAppearance: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeAppearance: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
_getLayout: function(){return this.__kf;}
_setLayout: function(eu){if(this.__kf){this.__kf.connectToWidget(null);}if(eu){eu.connectToWidget(this);}this.__kf=eu;qx.ui.core.queue.Layout.add(this);}
setLayoutParent: function(parent){if(this.$$parent===parent){return;}var content=this.getContentElement();if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(content);}this.$$parent=parent||null;if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(content);}this.$$refreshInheritables();qx.ui.core.queue.Visibility.add(this);}
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
fadeOut: function(fs){return this.getContentElement().fadeOut(fs);}
fadeIn: function(ft){return this.getContentElement().fadeIn(ft);}
_applyAnonymous: function(fu){if(fu){this.getContentElement().setAttribute(s,dA);}else{this.getContentElement().removeAttribute(s);}}
show: function(){this.setVisibility(P);}
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
getChildrenContainer: function(){return this;}
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
_applyFocusable: function(hy,hw){var hx=this.getFocusElement();if(hy){var hz=this.getTabIndex();if(hz==null){hz=1;}hx.setAttribute(dX,hz);hx.setStyle(cN,cU);}else{if(hx.isNativelyFocusable()){hx.setAttribute(dX,-1);}else{if(hw){hx.setAttribute(dX,null);}}}}
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
_createChildControlImpl: function(iE,iD){return null;}
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
stopAnimation: function(){if(this.__jV){this.__jV.stop();}this.__jV=null;}
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
resetThemedMinWidth: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getWidth: function anonymous(value
) {
if(this.$$runtime_width!==undefined)return this.$$runtime_width;if(this.$$user_width!==undefined)return this.$$user_width;else if(this.$$theme_width!==undefined)return this.$$theme_width;else return this.$$init_width;
}
setWidth: function anonymous(value
) {
var prop=qx.core.Property;if(value===undefined)prop.error(this,2,"width","set",value);if(this.$$user_width===value)return value;var computed, old;if(this.$$runtime_width!==undefined){old=computed=this.$$runtime_width;this.$$user_width=value;}else if(this.$$user_width!==undefined){old=this.$$user_width;computed=this.$$user_width=value;}else if(this.$$theme_width!==undefined){old=this.$$theme_width;computed=this.$$user_width=value;}else if(this.$$useinit_width){old=this.$$init_width;delete this.$$useinit_width;computed=this.$$user_width=value;}else{computed=this.$$user_width=value;}if(old===computed)return value;if(old===undefined)old=this.$$init_width;this._applyDimension(computed, old, "width", "set");var reg=qx.event.Registration;if(reg.hasListener(this, 'changeWidth')){reg.fireEvent(this, 'changeWidth', qx.event.type.Data, [computed, old])}return value;
}
resetWidth: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initWidth: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeWidth: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeWidth: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedWidth: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedWidth: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getMaxWidth: function anonymous(value
) {
if(this.$$runtime_maxWidth!==undefined)return this.$$runtime_maxWidth;if(this.$$user_maxWidth!==undefined)return this.$$user_maxWidth;else if(this.$$theme_maxWidth!==undefined)return this.$$theme_maxWidth;else return this.$$init_maxWidth;
}
setMaxWidth: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
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
resetHeight: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initHeight: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeHeight: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeHeight: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedHeight: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedHeight: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getMaxHeight: function anonymous(value
) {
if(this.$$runtime_maxHeight!==undefined)return this.$$runtime_maxHeight;if(this.$$user_maxHeight!==undefined)return this.$$user_maxHeight;else if(this.$$theme_maxHeight!==undefined)return this.$$theme_maxHeight;else return this.$$init_maxHeight;
}
setMaxHeight: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
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
setAllowGrowX: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
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
setAllowShrinkX: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
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
setAllowGrowY: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
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
setAllowShrinkY: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
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
setMarginTop: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetMarginTop: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initMarginTop: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeMarginTop: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeMarginTop: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedMarginTop: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedMarginTop: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getMarginRight: function anonymous(value
) {
if(this.$$runtime_marginRight!==undefined)return this.$$runtime_marginRight;if(this.$$user_marginRight!==undefined)return this.$$user_marginRight;else if(this.$$theme_marginRight!==undefined)return this.$$theme_marginRight;else return this.$$init_marginRight;
}
setMarginRight: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetMarginRight: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initMarginRight: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeMarginRight: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeMarginRight: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedMarginRight: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedMarginRight: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getMarginBottom: function anonymous(value
) {
if(this.$$runtime_marginBottom!==undefined)return this.$$runtime_marginBottom;if(this.$$user_marginBottom!==undefined)return this.$$user_marginBottom;else if(this.$$theme_marginBottom!==undefined)return this.$$theme_marginBottom;else return this.$$init_marginBottom;
}
setMarginBottom: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetMarginBottom: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initMarginBottom: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeMarginBottom: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeMarginBottom: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedMarginBottom: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
resetThemedMarginBottom: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
getMarginLeft: function anonymous(value
) {
if(this.$$runtime_marginLeft!==undefined)return this.$$runtime_marginLeft;if(this.$$user_marginLeft!==undefined)return this.$$user_marginLeft;else if(this.$$theme_marginLeft!==undefined)return this.$$theme_marginLeft;else return this.$$init_marginLeft;
}
setMarginLeft: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
resetMarginLeft: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,ba);}
initMarginLeft: function(ds){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cz,arguments);}
setRuntimeMarginLeft: function(du){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bN,arguments);}
resetRuntimeMarginLeft: function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,T);}
setThemedMarginLeft: function(dv){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bt,arguments);}
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
setAlignX: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
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
setAlignY: function(dr){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
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