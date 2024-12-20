// ==UserScript==
// @name        Tiberium Alliances Player Tracker
// @namespace   CnCTracker
// @include     http*://*.alliances.commandandconquer.com/*
// @version     0.1
// @grant       none
// ==/UserScript==


(function () {

    // Create a <script> element to load the js-yaml library from a CDN
    var yamlScript = document.createElement("script");
    yamlScript.src = "https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js";
    document.head.appendChild(yamlScript);

    // Create a <script> element that will inject the script into the webpage
    var script = document.createElement("script");
    script.textContent = "(" +
        function () {
            // let players = new Map();
            let tableManager = null;

            class AllianceData {
                constructor(
                    numPlayers = '', numBases = 0, numNod = 0, numGDI = 0, pois = [],
                    tiberiumBonus = 0, crystalBonus = 0, powerBonus = 0,
                    infantryBonus = 0, vehicleBonus = 0, airBonus = 0, defenseBonus = 0,
                    tiberiumRank = 0, crystalRank = 0, powerRank = 0,
                    infantryRank = 0, vehicleRank = 0, airRank = 0, defenseRank = 0
                ) {
                    this.__numPlayers = numPlayers;
                    this.__numBases = numBases;
                    this.__numNod = numNod;
                    this.__numGDI = numGDI;
                    this.__pois = pois; // Updated from __bonuses
                    this.__tiberiumBonus = tiberiumBonus;
                    this.__crystalBonus = crystalBonus;
                    this.__powerBonus = powerBonus;
                    this.__infantryBonus = infantryBonus;
                    this.__vehicleBonus = vehicleBonus;
                    this.__airBonus = airBonus;
                    this.__defenseBonus = defenseBonus;
            
                    this.__tiberiumRank = tiberiumRank;
                    this.__crystalRank = crystalRank;
                    this.__powerRank = powerRank;
                    this.__infantryRank = infantryRank;
                    this.__vehicleRank = vehicleRank;
                    this.__airRank = airRank;
                    this.__defenseRank = defenseRank;
                }
            
                // Setters
                set numPlayers(value) { this.__numPlayers = value; }
                set numBases(value) { this.__numBases = value; }
                set numNod(value) { this.__numNod = value; }
                set numGDI(value) { this.__numGDI = value; }
                set pois(value) { // Updated setter
                    if (Array.isArray(value)) this.__pois = value;
                    else throw new Error("POIs must be an array");
                }
                set tiberiumBonus(value) { this.__tiberiumBonus = value; }
                set crystalBonus(value) { this.__crystalBonus = value; }
                set powerBonus(value) { this.__powerBonus = value; }
                set infantryBonus(value) { this.__infantryBonus = value; }
                set vehicleBonus(value) { this.__vehicleBonus = value; }
                set airBonus(value) { this.__airBonus = value; }
                set defenseBonus(value) { this.__defenseBonus = value; }
            
                set tiberiumRank(value) { this.__tiberiumRank = value; }
                set crystalRank(value) { this.__crystalRank = value; }
                set powerRank(value) { this.__powerRank = value; }
                set infantryRank(value) { this.__infantryRank = value; }
                set vehicleRank(value) { this.__vehicleRank = value; }
                set airRank(value) { this.__airRank = value; }
                set defenseRank(value) { this.__defenseRank = value; }
            
                // Getters
                get numPlayers() { return this.__numPlayers; }
                get numBases() { return this.__numBases; }
                get numNod() { return this.__numNod; }
                get numGDI() { return this.__numGDI; }
                get pois() { return this.__pois; } // Updated getter
                get tiberiumBonus() { return this.__tiberiumBonus; }
                get crystalBonus() { return this.__crystalBonus; }
                get powerBonus() { return this.__powerBonus; }
                get infantryBonus() { return this.__infantryBonus; }
                get vehicleBonus() { return this.__vehicleBonus; }
                get airBonus() { return this.__airBonus; }
                get defenseBonus() { return this.__defenseBonus; }
            
                get tiberiumRank() { return this.__tiberiumRank; }
                get crystalRank() { return this.__crystalRank; }
                get powerRank() { return this.__powerRank; }
                get infantryRank() { return this.__infantryRank; }
                get vehicleRank() { return this.__vehicleRank; }
                get airRank() { return this.__airRank; }
                get defenseRank() { return this.__defenseRank; }

                increaseGDI() {
                    this.__numGDI += 1;
                }

                increaseNOD() {
                    this.__numNod += 1;
                }
            
                // Method to add a POI
                addPOI(bonus) {
                    if (bonus && typeof bonus === 'object') {
                        this.__pois.push(bonus);
                    } else {
                        throw new Error("Invalid Bonus object");
                    }
                }

                getData() {
                    return {
                        numPlayers: this.__numPlayers,
                        numBases: this.__numBases,
                        numNod: this.__numNod,
                        numGDI: this.__numGDI,
                        pois: this.__pois,
                        tiberiumBonus: this.__tiberiumBonus,
                        crystalBonus: this.__crystalBonus,
                        powerBonus: this.__powerBonus,
                        infantryBonus: this.__infantryBonus,
                        vehicleBonus: this.__vehicleBonus,
                        airBonus: this.__airBonus,
                        defenseBonus: this.__defenseBonus,
                        tiberiumRank: this.__tiberiumRank,
                        crystalRank: this.__crystalRank,
                        powerRank: this.__powerRank,
                        infantryRank: this.__infantryRank,
                        vehicleRank: this.__vehicleRank,
                        airRank: this.__airRank,
                        defenseRank: this.__defenseRank
                    };
                }
            }                     
            
            // Helper class for Bonus type
            class Bonus {
                constructor(type = '', amount = 0, level = 0, x = 0, y = 0) {
                    this.__type = type;
                    this.__amount = amount;
                    this.__level = level;
                    this.__x = x;
                    this.__y = y;
                }
            
                // Setters
                set type(value) { this.__type = value; }
                set amount(value) { this.__amount = value; }
                set level(value) { this.__level = value; }
                set x(value) { this.__x = value; }
                set y(value) { this.__y = value; }
            
                // Getters
                get type() { return this.__type; }
                get amount() { return this.__amount; }
                get level() { return this.__level; }
                get x() { return this.__x; }
                get y() { return this.__y; }

                getData() {
                    return {
                        type: this.__type,
                        amount: this.__amount,
                        level: this.__level,
                        x: this.__x,
                        y: this.__y
                    };
                }
            }

            // Define the Base class (assuming it's something like this)
            class Base {
                constructor() {
                    this.__id = null;
                    this.__baseNum = null;
                    this.__owner = null;
                    this.__name = null;
                    this.__score = null;
                    this.__x = null;
                    this.__y = null;
                    this.__faction = null;
                    this.__tiberiumPackage = null;
                    this.__tiberiumContinuous = null;
                    this.__tiberiumMaxStorage = null;
                    this.__crystalPackage = null;
                    this.__crystalContinuous = null;
                    this.__crystalMaxStorage = null;
                    this.__powerPackage = null;
                    this.__powerContinuous = null;
                    this.__powerMaxStorage = null;
                    this.__creditPackage = null;
                    this.__creditContinuous = null;
                    this.__factoryRepairTime = null;
                    this.__airfieldRepairTime = null;
                    this.__barracksRepairTime = null;
                    this.__worstRepairTime = null;
                    this.__supportWeapon = null;
                    this.__supportWeaponLevel = null;
                    this.__offensiveLevel = null;
                    this.__defensiveLevel = null;
                    this.__baseLevel = null;
                    this.__numBuildings = null;
                    this.__numUnitLimitOffense = null;
                    this.__isProtected = null;
                    this.__baseResourceLayout = null;
                    this.__baseBuildingLayout = null;
                }
            
                // Setters
                set Id(value) { this.__id = value; }
                set BaseNum(value) { this.__baseNum = value; }
                set Owner(value) { this.__owner = value; }
                set Name(value) { this.__name = value; }
                set Score(value) { this.__score = value; }
                set X(value) { this.__x = value; }
                set Y(value) { this.__y = value; }
                set Faction(value) { this.__faction = value; }
                set TiberiumPackage(value) { this.__tiberiumPackage = value; }
                set TiberiumContinuous(value) { this.__tiberiumContinuous = value; }
                set TiberiumMaxStorage(value) { this.__tiberiumMaxStorage = value; }
                set CrystalPackage(value) { this.__crystalPackage = value; }
                set CrystalContinuous(value) { this.__crystalContinuous = value; }
                set CrystalMaxStorage(value) { this.__crystalMaxStorage = value; }
                set PowerPackage(value) { this.__powerPackage = value; }
                set PowerContinuous(value) { this.__powerContinuous = value; }
                set PowerMaxStorage(value) { this.__powerMaxStorage = value; }
                set CreditPackage(value) { this.__creditPackage = value; }
                set CreditContinuous(value) { this.__creditContinuous = value; }
                set FactoryRepairTime(value) { this.__factoryRepairTime = value; }
                set AirfieldRepairTime(value) { this.__airfieldRepairTime = value; }
                set BarracksRepairTime(value) { this.__barracksRepairTime = value; }
                set WorstRepairTime(value) { this.__worstRepairTime = value; }
                set SupportWeapon(value) { this.__supportWeapon = value; }
                set SupportWeaponLevel(value) { this.__supportWeaponLevel = value; }
                set OffensiveLevel(value) { this.__offensiveLevel = value; }
                set DefensiveLevel(value) { this.__defensiveLevel = value; }
                set BaseLevel(value) { this.__baseLevel = value; }
                set NumBuildings(value) { this.__numBuildings = value; }
                set NumUnitLimitOffense(value) { this.__numUnitLimitOffense = value; }
                set IsProtected(value) { this.__isProtected = value; }
                set BaseResourceLayout(value) { this.__baseResourceLayout = value; }
                set BaseBuildingLayout(value) { this.__baseBuildingLayout = value; }
            
                // Getters
                get Id() { return this.__id; }
                get BaseNum() { return this.__baseNum; }
                get Owner() { return this.__owner; }
                get Name() { return this.__name; }
                get Score() { return this.__score; }
                get X() { return this.__x; }
                get Y() { return this.__y; }
                get Faction() { return this.__faction; }
                get TiberiumPackage() { return this.__tiberiumPackage; }
                get TiberiumContinuous() { return this.__tiberiumContinuous; }
                get TiberiumMaxStorage() { return this.__tiberiumMaxStorage; }
                get CrystalPackage() { return this.__crystalPackage; }
                get CrystalContinuous() { return this.__crystalContinuous; }
                get CrystalMaxStorage() { return this.__crystalMaxStorage; }
                get PowerPackage() { return this.__powerPackage; }
                get PowerContinuous() { return this.__powerContinuous; }
                get PowerMaxStorage() { return this.__powerMaxStorage; }
                get CreditPackage() { return this.__creditPackage; }
                get CreditContinuous() { return this.__creditContinuous; }
                get FactoryRepairTime() { return this.__factoryRepairTime; }
                get AirfieldRepairTime() { return this.__airfieldRepairTime; }
                get BarracksRepairTime() { return this.__barracksRepairTime; }
                get WorstRepairTime() { return this.__worstRepairTime; }
                get SupportWeapon() { return this.__supportWeapon; }
                get SupportWeaponLevel() { return this.__supportWeaponLevel; }
                get OffensiveLevel() { return this.__offensiveLevel; }
                get DefensiveLevel() { return this.__defensiveLevel; }
                get BaseLevel() { return this.__baseLevel; }
                get NumBuildings() { return this.__numBuildings; }
                get NumUnitLimitOffense() { return this.__numUnitLimitOffense; }
                get IsProtected() { return this.__isProtected; }
                get BaseResourceLayout() { return this.__baseResourceLayout; }
                get BaseBuildingLayout() { return this.__baseBuildingLayout; }

                getData() {
                    return {
                        id: this.__id,
                        baseNum: this.__baseNum,
                        owner: this.__owner,
                        name: this.__name,
                        score: this.__score,
                        x: this.__x,
                        y: this.__y,
                        faction: this.__faction,
                        tiberiumPackage: this.__tiberiumPackage,
                        tiberiumContinuous: this.__tiberiumContinuous,
                        tiberiumMaxStorage: this.__tiberiumMaxStorage,
                        crystalPackage: this.__crystalPackage,
                        crystalContinuous: this.__crystalContinuous,
                        crystalMaxStorage: this.__crystalMaxStorage,
                        powerPackage: this.__powerPackage,
                        powerContinuous: this.__powerContinuous,
                        powerMaxStorage: this.__powerMaxStorage,
                        creditPackage: this.__creditPackage,
                        creditContinuous: this.__creditContinuous,
                        factoryRepairTime: this.__factoryRepairTime,
                        airfieldRepairTime: this.__airfieldRepairTime,
                        barracksRepairTime: this.__barracksRepairTime,
                        worstRepairTime: this.__worstRepairTime,
                        supportWeapon: this.__supportWeapon,
                        supportWeaponLevel: this.__supportWeaponLevel,
                        offensiveLevel: this.__offensiveLevel,
                        defensiveLevel: this.__defensiveLevel,
                        baseLevel: this.__baseLevel,
                        numBuildings: this.__numBuildings,
                        numUnitLimitOffense: this.__numUnitLimitOffense,
                        isProtected: this.__isProtected,
                        baseResourceLayout: this.__baseResourceLayout,
                        baseBuildingLayout: this.__baseBuildingLayout
                    };
                }
            }
            

            // Define the Player class
            class Player {
                constructor() {
                    this.__AvgDefenseLvl = null;
                    this.__AvgOffenseLvl = null;
                    this.__NumBases = null;
                    this.__NumBasesDestroyed = null;
                    this.__PvP = null;
                    this.__PvE = null;
                    this.__BestDefenseLvl = null;
                    this.__BestOffenseLvl = null;
                    this.__Faction = null;
                    this.__HasControlHubCode = null;
                    this.__Id = null;
                    this.__JoinStep = null;
                    this.__LastSeen = null;
                    this.__Level = null;
                    this.__Name = null;
                    this.__OnlineState = null;
                    this.__Points = null;
                    this.__Rank = null;
                    this.__Role = null;
                    this.__RoleName = null;
                    this.__VeteranPointContribution = null;
                    this.__Bases = [];
                    this.__TotalTiberium = 0;
                    this.__TotalCrystal = 0;
                    this.__TotalPower = 0;
                    this.__TotalCredits = 0;
            
                    this.__MaxFactoryRepairTime = 0;
                    this.__MaxAirfieldRepairTime = 0;
                    this.__MaxBarracksRepairTime = 0;
            
                    this.__PublicPlayerInfoByName = null;
                }
            
                // Setters
                set AvgDefenseLvl(value) { this.__AvgDefenseLvl = value; }
                set AvgOffenseLvl(value) { this.__AvgOffenseLvl = value; }
                set NumBases(value) { this.__NumBases = value; }
                set NumBasesDestroyed(value) { this.__NumBasesDestroyed = value; }
                set PvP(value) { this.__PvP = value; }
                set PvE(value) { this.__PvE = value; }
                set BestDefenseLvl(value) { this.__BestDefenseLvl = value; }
                set BestOffenseLvl(value) { this.__BestOffenseLvl = value; }
                set Faction(value) { this.__Faction = value; }
                set HasControlHubCode(value) { this.__HasControlHubCode = value; }
                set Id(value) { this.__Id = value; }
                set JoinStep(value) { this.__JoinStep = value; }
                set LastSeen(value) { this.__LastSeen = value; }
                set Level(value) { this.__Level = value; }
                set Name(value) { this.__Name = value; }
                set OnlineState(value) { this.__OnlineState = value; }
                set Points(value) { this.__Points = value; }
                set Rank(value) { this.__Rank = value; }
                set Role(value) { this.__Role = value; }
                set RoleName(value) { this.__RoleName = value; }
                set VeteranPointContribution(value) { this.__VeteranPointContribution = value; }
                set PublicPlayerInfoByName(value) { this.__PublicPlayerInfoByName = value; }
                set TotalTiberium(value) { this.__TotalTiberium = value; }
                set TotalCrystal(value) { this.__TotalCrystal = value; }
                set TotalPower(value) { this.__TotalPower = value; }
                set TotalCredits(value) { this.__TotalCredits = value; }
            
                set MaxFactoryRepairTime(value) { this.__MaxFactoryRepairTime = value; }
                set MaxAirfieldRepairTime(value) { this.__MaxAirfieldRepairTime = value; }
                set MaxBarracksRepairTime(value) { this.__MaxBarracksRepairTime = value; }
            
                // Bases-related Setters
                set Bases(bases) {
                    if (Array.isArray(bases) && bases.every(base => base instanceof Base)) {
                        this.__Bases = bases;
                    } else {
                        throw new Error("Invalid input: bases must be an array of Base instances.");
                    }
                }
            
                addBase(base) {
                    if (base instanceof Base) {
                        this.__Bases.push(base);
                    } else {
                        throw new Error("Invalid input: base must be an instance of Base.");
                    }
                }
            
                removeBase(baseId) {
                    this.__Bases = this.__Bases.filter(base => base.id !== baseId);
                }
            
                getData() {
                    return {
                        AvgDefenseLvl: this.__AvgDefenseLvl,
                        AvgOffenseLvl: this.__AvgOffenseLvl,
                        NumBases: this.__NumBases,
                        NumBasesDestroyed: this.__NumBasesDestroyed,
                        PvP: this.__PvP,
                        PvE: this.__PvE,
                        BestDefenseLvl: this.__BestDefenseLvl,
                        BestOffenseLvl: this.__BestOffenseLvl,
                        Faction: this.FactionToName(this.__Faction),
                        HasControlHubCode: this.__HasControlHubCode,
                        Id: this.__Id,
                        JoinStep: this.__JoinStep,
                        LastSeen: this.__LastSeen,
                        Level: this.__Level,
                        Name: this.__Name,
                        OnlineState: this.__OnlineState,
                        Points: this.__Points,
                        Rank: this.__Rank,
                        Role: this.__Role,
                        RoleName: this.__RoleName,
                        VeteranPointContribution: this.__VeteranPointContribution,
                        TotalTiberium: this.__TotalTiberium,
                        TotalCrystal: this.__TotalCrystal,
                        TotalPower: this.__TotalPower,
                        TotalCredits: this.__TotalCredits,
                        MaxFactoryRepairTime: this.__MaxFactoryRepairTime,
                        MaxAirfieldRepairTime: this.__MaxAirfieldRepairTime,
                        MaxBarracksRepairTime: this.__MaxBarracksRepairTime,
                    };
                }
            
                // Getters
                get AvgDefenseLvl() { return this.__AvgDefenseLvl; }
                get AvgOffenseLvl() { return this.__AvgOffenseLvl; }
                get NumBases() { return this.__NumBases; }
                get NumBasesDestroyed() { return this.__NumBasesDestroyed; }
                get PvP() { return this.__PvP; }
                get PvE() { return this.__PvE; }
                get BestDefenseLvl() { return this.__BestDefenseLvl; }
                get BestOffenseLvl() { return this.__BestOffenseLvl; }
                get Faction() { return this.FactionToName(this.__Faction); }
                get HasControlHubCode() { return this.__HasControlHubCode; }
                get Id() { return this.__Id; }
                get JoinStep() { return this.__JoinStep; }
                get LastSeen() { return this.__LastSeen; }
                get Level() { return this.__Level; }
                get Name() { return this.__Name; }
                get OnlineState() { return this.__OnlineState; }
                get Points() { return this.__Points; }
                get Rank() { return this.__Rank; }
                get Role() { return this.__Role; }
                get RoleName() { return this.__RoleName; }
                get VeteranPointContribution() { return this.__VeteranPointContribution; }
                get PublicPlayerInfoByName() { return this.__PublicPlayerInfoByName; }
                get TotalTiberium() { return this.__TotalTiberium; }
                get TotalCrystal() { return this.__TotalCrystal; }
                get TotalPower() { return this.__TotalPower; }
                get TotalCredits() { return this.__TotalCredits; }
            
                get MaxFactoryRepairTime() { return this.__MaxFactoryRepairTime; }
                get MaxAirfieldRepairTime() { return this.__MaxAirfieldRepairTime; }
                get MaxBarracksRepairTime() { return this.__MaxBarracksRepairTime; }
            
                // Getter for bases
                get Bases() {
                    return this.__Bases;
                }
            
                FactionToName(val) {
                    return val == 1 ? "GDI" : "NOD";
                }
            }                       

            class AllianceRankingData {
                constructor(allianceID, allianceName, allianceWon, baseCount, playerCount, rank, top40Score, averageScore, totalScore) {
                    this._allianceID = allianceID;
                    this._allianceName = allianceName;
                    this._allianceWon = allianceWon;
                    this._baseCount = baseCount;
                    this._playerCount = playerCount;
                    this._rank = rank;
                    this._top40Score = top40Score;
                    this._averageScore = averageScore;
                    this._totalScore = totalScore;
                }
            
                // Getters
                get allianceID() { return this._allianceID; }
                get allianceName() { return this._allianceName; }
                get allianceWon() { return this._allianceWon; }
                get baseCount() { return this._baseCount; }
                get playerCount() { return this._playerCount; }
                get rank() { return this._rank; }
                get top40Score() { return this._top40Score; }
                get averageScore() { return this._averageScore; }
                get totalScore() { return this._totalScore; }
            
                // Setters
                set allianceID(value) { this._allianceID = value; }
                set allianceName(value) { this._allianceName = value; }
                set allianceWon(value) { this._allianceWon = value; }
                set baseCount(value) { this._baseCount = value; }
                set playerCount(value) { this._playerCount = value; }
                set rank(value) { this._rank = value; }
                set top40Score(value) { this._top40Score = value; }
                set averageScore(value) { this._averageScore = value; }
                set totalScore(value) { this._totalScore = value; }

                getData() {
                    return {
                        allianceID: this._allianceID,
                        allianceName: this._allianceName,
                        allianceWon: this._allianceWon,
                        baseCount: this._baseCount,
                        playerCount: this._playerCount,
                        rank: this._rank,
                        top40Score: this._top40Score,
                        averageScore: this._averageScore,
                        totalScore: this._totalScore
                    };
                }
            }

            // This function defines and creates the necessary classes for the menu buttons
            function CnCTracker() {
                qx.Class.define("myApp.TableManager", {
                    extend: qx.core.Object,
                  
                    construct: function() {
                        console.log("[CnCTracker] construct called");
                        this._createWindow();
                        this._createTables();
                        this._createUI();
                        this._createTabView();
                        this._getAllianceRanking();
                        this._getAllianceInfo();
                      //   this.drawTables(); // Initialize with default entries
                    },
                  
                    members: {
                        _win: null,
                        _playerTable: null,
                        _playerTableModel: null,
                        _baseTable: null,
                        _baseTableModel: null,
                        _progressBar: null,
                        _progressLabel: null,
                        _numBasesToScan: null,
                        _baseProgressBar: null,
                        _baseProgressLabel: null,
                        _numPlayers: 50,
                        _numPlayersScanned: 0,
                        _numBases: 0,
                        _numbasesScanned: 0,
                        _playerTableData: [],
                        _BaseTableData: [],

                        _bases: [],
                        _players: new Map(),
                        _allianceData: null,
                        _allianceRankingData: null,
                  
                        // Create the window
                        _createWindow: function() {
                            this._win = new qx.ui.window.Window("Table Manager");
                            this._win.set({
                            width: 750,
                            height: 400,
                            contentPadding: 10,
                            showClose: true,
                            showMaximize: false,
                            showMinimize: false
                            });
                    
                            this._win.setLayout(new qx.ui.layout.VBox());
                            this._win.open();
                            this._win.moveTo(100, 100);
                        },
                    
                        // Create both tables
                        _createTables: function() {
                            // Player Table
                            this._playerTable = new qx.ui.table.Table();
                            this._playerTableModel = new qx.ui.table.model.Simple();
                            this._playerTableModel.setColumns([
                                "Rank", 
                                "Name", 
                                "Faction", 
                                "Bases", 
                                "Bases Destoryed", 
                                "PvP",
                                "PvE",                               
                                "Best Offense Level", 
                                "Best Defense Level",
                                "Total Tiberium",
                                "Total Crystal",
                                "Total Power",
                                "Total Credits",
                                "Max Factory Repair Time",
                                "Max Airfield Repair Time",
                                "Max Barracks Repair Time",
                            ]);
                            this._playerTable.setTableModel(this._playerTableModel);
                    
                            // Base Table
                            this._baseTable = new qx.ui.table.Table();
                            this._baseTableModel = new qx.ui.table.model.Simple();
                            this._baseTableModel.setColumns([
                                "Owner", 
                                "Base Name (num)", 
                                "Score", 
                                "Faction", 
                                "Tiberium Package", 
                                "Tiberium Continuous", 
                                "Tiberium Max Storage", 
                                "Crystal Package", 
                                "Crystal Continuous", 
                                "Crystal Max Storage", 
                                "Power Package", 
                                "Power Continuous", 
                                "Power Max Storage", 
                                "Credit Package", 
                                "Credit Continuous", 
                                "Factory Repair Time", 
                                "Airfield Repair Time", 
                                "Barracks Repair Time", 
                                "Worst Repair Time",
                                "Support Weapon", 
                                "Support Weapon Level", 
                                "Offensive Level", 
                                "Defensive Level", 
                                "Base Level",
                                "Number of Buildings",
                                "Number of Offensive Units",
                                "Base Id"
                            ]);                            
                            this._baseTable.setTableModel(this._baseTableModel);



                            this._playerTable.addListener("cellTap", function (cellEvent) {
                                var row = cellEvent.getRow(); // Get the row index
                            
                                // Get the table model
                                var tableModel = this._playerTable.getTableModel();
                            
                                // Get the row data
                                var rowData = tableModel.getRowData(row);
                            
                                webfrontend.gui.info.PlayerInfoWindow.getInstance().openWithPlayerName(rowData[1]);
                            }, this);

                            this._baseTable.addListener("cellTap", function (cellEvent) {
                                var row = cellEvent.getRow(); // Get the row index
                            
                                // Get the table model
                                var tableModel = this._baseTable.getTableModel();
                            
                                // Get the row data
                                var rowData = tableModel.getRowData(row);

                                webfrontend.gui.info.BaseInfoWindow.getInstance().openWithBaseId(rowData[26]);
                            }, this);



                            
                                              
                        },
                    
                        // Draw both tables with data
                        drawTables: function() {
                            // Draw Player Table with default data
                            this._playerTableModel.setData(this._playerTableData);
                            this._sortPlayerTable();
                    
                            // Draw Base Table with default data
                            this._baseTableModel.setData(this._BaseTableData);
                        },
                    
                        // Sort player table by Rank column
                        _sortPlayerTable: function() {
                            let playerData = this._playerTableModel.getData();
                            playerData.sort(function(a, b) {
                            return a[0] - b[0]; // Sort by Rank (first column)
                            });
                            this._playerTableModel.setData(playerData);
                        },
                        
                        // Add data to the Player Table as each player's data is retrieved
                        addPlayerData: async function() {
                            if(this._playerTableData.length == 0) {
                                // Wait for getPlayers to complete
                                await this.getPlayers();
                            }
                        },

                        // Add data to the Player Table and redraw
                        updatePlayerData: function() {
                            this._playerTableData = [];

                            // Players: Collect data from _players (Map)
                            if (this._players instanceof Map) {
                                this._players.forEach((player) => {

                                    this._playerTableData.push([
                                        player.Rank,
                                        player.Name,
                                        player.Faction,
                                        player.NumBases,
                                        player.NumBasesDestroyed,
                                        player.PvP,
                                        player.PvE,
                                        player.BestOffenseLvl,
                                        player.BestDefenseLvl,
                                        player.TotalTiberium,
                                        player.TotalCrystal,
                                        player.TotalPower,
                                        player.TotalCredits,
                                        this.formatTime(player.MaxFactoryRepairTime),
                                        this.formatTime(player.MaxAirfieldRepairTime),
                                        this.formatTime(player.MaxBarracksRepairTime)
                                    ]);
                                });
                            }

                            this.drawTables(); // Redraw the tables
                        },

                        updateProgressBar: function() {
                            if (this._numPlayersScanned < this._numPlayers) {
                                this._numPlayersScanned += 1; // Increase progress
                                this._progressBar.setWidth((this._numPlayersScanned / this._numPlayers) * 300); // Update width of green bar
                                this._progressLabel.setValue(this._numPlayersScanned + " / " + this._numPlayers); // Update progress text

                                this._baseProgressLabel.setValue("0 / " + this._numBases);
                            } 
                        },

                        updateBaseProgressBar: function() {
                            if (this._numbasesScanned < this._numBases) {
                                this._numbasesScanned += 1; // Increase progress
                                this._baseProgressBar.setWidth((this._numbasesScanned / this._numBases) * 300); // Update width of green bar
                                this._baseProgressLabel.setValue(this._numbasesScanned + " / " + this._numBases); // Update progress text
                            } 
                        },
                    
                        // Add data to the Base Table and redraw
                        addBaseData: function(newBaseData) {
                            this._BaseTableData = this._BaseTableData.concat(newBaseData);
                            this.drawTables(); // Redraw the tables
                        },
                    
                        // Create buttons, progress bars, and dropdown menu
                        _createUI: function() {
                            // Main vertical container
                            let mainContainer = new qx.ui.container.Composite(new qx.ui.layout.VBox(20)); // 20px vertical spacing
                        
                            // Create buttons and dropdown container
                            let topContainer = new qx.ui.container.Composite(new qx.ui.layout.HBox(10)); // 10px horizontal spacing
  
                            let getPlayersButton = new qx.ui.form.Button("Get Players");
                            getPlayersButton.addListener("execute", function() {
                                this.getPlayers(); // Placeholder function
                            }, this);
                        
  
                            let getBasesButton = new qx.ui.form.Button("Get Bases");
                            getBasesButton.addListener("execute", function() {
                                this.getBases(); // Placeholder function
                            }, this);
                        
                            let sendButton = new qx.ui.form.Button("Send");
                            sendButton.addListener("execute", function() {
                                this.sendBases(); // Placeholder function
                            }, this);

                            let clearDataButton = new qx.ui.form.Button("Clear Data");
                            clearDataButton.addListener("execute", function() {
                                if (confirm("Are you sure you want to clear the data?")) {
                                    this.clearData(); // Placeholder function
                                }
                            }, this);

                            // Create numBasesToScan menu
                            let numBasesToScanLabel = new qx.ui.basic.Label("Select Range:"); // Label for numBasesToScan
                            numBasesToScan = new qx.ui.form.SelectBox();
                        
                            // Populate numBasesToScan with numbers from 1 to x
                            for (let i = 1; i <= this._numPlayers; i++) {
                                let listItem = new qx.ui.form.ListItem(i.toString());
                                numBasesToScan.add(listItem);
                            }
                        
                            // Add buttons and dropdown to the top container
                            topContainer.add(getPlayersButton);
                            topContainer.add(getBasesButton);
                            topContainer.add(sendButton);
                            topContainer.add(clearDataButton);
                            topContainer.add(numBasesToScanLabel);
                            topContainer.add(numBasesToScan);
                        
                            // Create progress bars container (side by side)
                            let progressBarContainer = new qx.ui.container.Composite(new qx.ui.layout.HBox(10)); // 10px horizontal spacing
                        
                            // Player progress bar
                            let playerProgressBarContainer = new qx.ui.container.Composite(new qx.ui.layout.Canvas());
                            playerProgressBarContainer.set({
                                width: 300,
                                height: 20,
                                decorator: new qx.ui.decoration.Decorator().set({
                                    backgroundColor: "red"
                                })
                            });
                        
                            this._progressBar = new qx.ui.core.Widget().set({
                                width: 0,
                                height: 30,
                                backgroundColor: "green"
                            });
                            playerProgressBarContainer.add(this._progressBar, { left: 0, top: 0 });
                        
                            this._progressLabel = new qx.ui.basic.Label("0 / 50");
                            this._progressLabel.set({
                                textColor: "white",
                                alignX: "center",
                                alignY: "middle"
                            });
                            playerProgressBarContainer.add(this._progressLabel, { left: "50%", top: "10%", zIndex: 10 });
                        
                            // Base progress bar
                            let baseProgressBarContainer = new qx.ui.container.Composite(new qx.ui.layout.Canvas());
                            baseProgressBarContainer.set({
                                width: 300,
                                height: 20,
                                decorator: new qx.ui.decoration.Decorator().set({
                                    backgroundColor: "red"
                                })
                            });
                        
                            this._baseProgressBar = new qx.ui.core.Widget().set({
                                width: 0,
                                height: 30,
                                backgroundColor: "green"
                            });
                            baseProgressBarContainer.add(this._baseProgressBar, { left: 0, top: 0 });
                        
                            this._baseProgressLabel = new qx.ui.basic.Label("0 / 0");
                            this._baseProgressLabel.set({
                                textColor: "white",
                                alignX: "center",
                                alignY: "middle"
                            });
                            baseProgressBarContainer.add(this._baseProgressLabel, { left: "50%", top: "10%", zIndex: 10 });
                        
                            // Add both progress bars to the progress bar container
                            progressBarContainer.add(playerProgressBarContainer);
                            progressBarContainer.add(baseProgressBarContainer);
                        
                            // Add spacer for extra space below progress bars
                            let spacer = new qx.ui.core.Spacer(null, 20); // Spacer with 20px height
                        
                            // Add all components to the main container
                            mainContainer.add(topContainer); // Buttons and dropdown (on the same line)
                            mainContainer.add(progressBarContainer); // Progress bars (on the same line)
                            mainContainer.add(spacer); // Add extra space below progress bars
                        
                            // Add the main container to the window
                            this._win.add(mainContainer);
                        },                                                                     
                    
                        // Create TabView to hold multiple tables
                        _createTabView: function() {
                            var tabView = new qx.ui.tabview.TabView();
                    
                            // Player Info Tab
                            var playerInfoTab = new qx.ui.tabview.Page("Player Info");
                            playerInfoTab.setLayout(new qx.ui.layout.VBox());
                            playerInfoTab.add(this._playerTable);
                            tabView.add(playerInfoTab);
                    
                            // Base Info Tab
                            var baseInfoTab = new qx.ui.tabview.Page("Base Info");
                            baseInfoTab.setLayout(new qx.ui.layout.VBox());
                            baseInfoTab.add(this._baseTable);
                            tabView.add(baseInfoTab);
                    
                            this._win.add(tabView, { left: 10, top: 10, right: 10, bottom: 10 });
                        },

                        _getAllianceRanking: async function() {
                            try {
                                return new Promise((resolve, reject) => {
                                    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand(
                                        'RankingGetData',
                                        {
                                            firstIndex: 0,
                                            lastIndex: 99,
                                            view: 1,
                                            rankingType: 0,
                                            sortColumn: 2,
                                            ascending: 1,
                                            searchValue: "",
                                        },
                                        webfrontend.phe.cnc.Util.createEventDelegate(
                                            ClientLib.Net.CommandResult,
                                            this,
                                            async function(context, results) {
                                                try {
                                                    const allianceData = await this.onRankingGetDataAlliance(context, results);
                                                    // Resolve the main promise with the alliance data
                                                    resolve(allianceData);
                                                } catch (error) {
                                                    // Handle any errors in `onRankingGetDataAlliance`
                                                    reject(error);
                                                }
                                            }.bind(this) // Bind `this` to ensure the correct context
                                        ),
                                        null
                                    );
                                });
                            } catch (error) {
                                console.error("Error in _getAllianceRanking: ", error);
                                throw error;
                            }
                        },
                        

                        _getAllianceInfo: async function() {
                            this._allianceData = new AllianceData();
                            var alliance = ClientLib.Data.MainData.GetInstance().get_Alliance();

                            this._allianceData.numPlayers = alliance.get_NumMembers();

                            this._allianceData.tiberiumBonus = alliance.get_POITiberiumBonus();
                            this._allianceData.tiberiumRank = ClientLib.Data.MainData.GetInstance().get_Alliance().get_POIRankScore()[ClientLib.Base.EPOIType.TiberiumBonus - ClientLib.Base.EPOIType.RankedTypeBegin];
                            
                            this._allianceData.crystalBonus = alliance.get_POICrystalBonus();
                            this._allianceData.crystalRank = ClientLib.Data.MainData.GetInstance().get_Alliance().get_POIRankScore()[ClientLib.Base.EPOIType.CrystalBonus - ClientLib.Base.EPOIType.RankedTypeBegin];
                            
                            this._allianceData.powerBonus = alliance.get_POIPowerBonus();
                            this._allianceData.powerRank = ClientLib.Data.MainData.GetInstance().get_Alliance().get_POIRankScore()[ClientLib.Base.EPOIType.PowerBonus - ClientLib.Base.EPOIType.RankedTypeBegin];
                            
                            this._allianceData.infantryBonus = alliance.get_POIInfantryBonus();
                            this._allianceData.infantryRank = ClientLib.Data.MainData.GetInstance().get_Alliance().get_POIRankScore()[ClientLib.Base.EPOIType.InfanteryBonus - ClientLib.Base.EPOIType.RankedTypeBegin];
                            
                            this._allianceData.vehicleBonus = alliance.get_POIVehicleBonus();
                            this._allianceData.vehicleRank = ClientLib.Data.MainData.GetInstance().get_Alliance().get_POIRankScore()[ClientLib.Base.EPOIType.VehicleBonus - ClientLib.Base.EPOIType.RankedTypeBegin];
                            
                            this._allianceData.airBonus = alliance.get_POIAirBonus();
                            this._allianceData.airRank = ClientLib.Data.MainData.GetInstance().get_Alliance().get_POIRankScore()[ClientLib.Base.EPOIType.AirBonus - ClientLib.Base.EPOIType.RankedTypeBegin];
                            
                            this._allianceData.defenseBonus = alliance.get_POIDefenseBonus();
                            this._allianceData.defenseRank = ClientLib.Data.MainData.GetInstance().get_Alliance().get_POIRankScore()[ClientLib.Base.EPOIType.DefenseBonus - ClientLib.Base.EPOIType.RankedTypeBegin];

                            var num = -1;
							var tibArr = [];
							var poiSorceHolder = [];

                            for (var key in ClientLib.Data.MainData.GetInstance().get_Alliance().get_OwnedPOIs()) {
								var obj = ClientLib.Data.MainData.GetInstance().get_Alliance().get_OwnedPOIs()[key];
								tibArr[num] = obj;

                                var poi = new Bonus;

                                poi.level = obj.l;
                                poi.x = obj.x;
                                poi.y = obj.y;
                                poi.type = obj.t;
                                poi.amount = null;

                                num++;
                                poiSorceHolder[num] = ClientLib.Base.PointOfInterestTypes.GetScoreByLevel(obj.l);
                                
                                if (num >= 0) {
                                    var allianceId = ClientLib.Data.MainData.GetInstance().get_Alliance().get_Id();
                                    var selectedPoiScore = ClientLib.Base.PointOfInterestTypes.GetScoreByLevel(obj.l);
                                    var poiType = ClientLib.Base.PointOfInterestTypes.GetPOITypeFromWorldPOIType(this.convertPOIType(obj.t));
                                    var poiRankScore = ClientLib.Data.MainData.GetInstance().get_Alliance().get_POIRankScore()[poiType - ClientLib.Base.EPOIType.RankedTypeBegin];
                                    var allianceRank = poiRankScore.r;
                                    var allianceScore = poiRankScore.s;
                                    var nextAllianceScore = poiRankScore.ns;
                                    var previousAllianceScore = poiRankScore.ps;
                                    var bonusMultiplier = ClientLib.Data.MainData.GetInstance().get_Server().get_POIGlobalBonusFactor();
                                    var currentTotalBonus = ClientLib.Base.PointOfInterestTypes.GetTotalBonusByType(poiType, allianceRank, allianceScore, bonusMultiplier);
                                    
                                    if (previousAllianceScore <= 0) {
                                        // No rank multiplier; no loss by rank
                                        poi.amount = currentTotalBonus - ClientLib.Base.PointOfInterestTypes.GetTotalBonusByType(poiType, allianceRank, allianceScore - selectedPoiScore, bonusMultiplier);
                                    } else if (allianceScore - selectedPoiScore < previousAllianceScore) {
                                        // gainOrLoss = currentTotalBonus - ClientLib.Base.PointOfInterestTypes.GetTotalBonusByType(poiType, allianceRank, allianceScore - selectedPoiScore, bonusMultiplier);
                                        // Falling behind previous alliance; need to use rankings
                                    } else {
                                        // No loss by rank; if we end up with same score as previous alliance, our rank stays the same and they get same rank
                                        poi.amount = currentTotalBonus - ClientLib.Base.PointOfInterestTypes.GetTotalBonusByType(poiType, allianceRank, allianceScore - selectedPoiScore, bonusMultiplier);
                                    }

                                    // Processing POI bonuses
                                    if (poi.amount === null) {
                                        try {
                                            poi.amount = await this.fetchAndCalculateBonusWithRankingData(poi, poiType, allianceRank, allianceScore, selectedPoiScore, allianceId, allianceId);
                                        } catch (error) {
                                            console.error('Error fetching bonus:', error);
                                        }
                                    }

                                    this._allianceData.addPOI(poi);

                                }
                            }
                        },

                        poiScoreLevel: function (nextScore, score, scoreByLevel) {
							var poiDiff = nextScore - score;
							for (var x = 0; x < 99; x++) {
								var scoreFromX = scoreByLevel(x);
								if (scoreFromX >= poiDiff) {
									break;
								}
							}
							return x;

						},

                        fetchAndCalculateBonusWithRankingData: function (poi, poiType, currentRank, currentScore, poiScore, allianceId, poiOwnerId) {
                            return new Promise((resolve, reject) => {
                                var context = {
                                    poiType: poiType,
                                    currentRank: currentRank,
                                    currentScore: currentScore,
                                    poiScore: poiScore,
                                    allianceId: allianceId,
                                    poiOwnerId: poiOwnerId,
                                    poi: poi,
                                    resolve: resolve,  // Pass resolve to the context
                                    reject: reject     // Pass reject to the context
                                };
                        
                                var PoiTypeToPoiRankingTypeMap = {};
                                var PoiRankingTypeToSortColumnMap = {};
                                PoiTypeToPoiRankingTypeMap[ClientLib.Base.EPOIType.TiberiumBonus] = ClientLib.Data.Ranking.ERankingType.BonusTiberium;
                                PoiTypeToPoiRankingTypeMap[ClientLib.Base.EPOIType.CrystalBonus] = ClientLib.Data.Ranking.ERankingType.BonusCrystal;
                                PoiTypeToPoiRankingTypeMap[ClientLib.Base.EPOIType.PowerBonus] = ClientLib.Data.Ranking.ERankingType.BonusPower;
                                PoiTypeToPoiRankingTypeMap[ClientLib.Base.EPOIType.InfanteryBonus] = ClientLib.Data.Ranking.ERankingType.BonusInfantry;
                                PoiTypeToPoiRankingTypeMap[ClientLib.Base.EPOIType.VehicleBonus] = ClientLib.Data.Ranking.ERankingType.BonusVehicles;
                                PoiTypeToPoiRankingTypeMap[ClientLib.Base.EPOIType.AirBonus] = ClientLib.Data.Ranking.ERankingType.BonusAircraft;
                                PoiTypeToPoiRankingTypeMap[ClientLib.Base.EPOIType.DefenseBonus] = ClientLib.Data.Ranking.ERankingType.BonusDefense;
                        
                                PoiRankingTypeToSortColumnMap[ClientLib.Data.Ranking.ERankingType.BonusTiberium] = ClientLib.Data.Ranking.ESortColumn.TiberiumScore;
                                PoiRankingTypeToSortColumnMap[ClientLib.Data.Ranking.ERankingType.BonusCrystal] = ClientLib.Data.Ranking.ESortColumn.CrystalScore;
                                PoiRankingTypeToSortColumnMap[ClientLib.Data.Ranking.ERankingType.BonusPower] = ClientLib.Data.Ranking.ESortColumn.PowerScore;
                                PoiRankingTypeToSortColumnMap[ClientLib.Data.Ranking.ERankingType.BonusInfantry] = ClientLib.Data.Ranking.ESortColumn.InfantryScore;
                                PoiRankingTypeToSortColumnMap[ClientLib.Data.Ranking.ERankingType.BonusVehicles] = ClientLib.Data.Ranking.ESortColumn.VehicleScore;
                                PoiRankingTypeToSortColumnMap[ClientLib.Data.Ranking.ERankingType.BonusAircraft] = ClientLib.Data.Ranking.ESortColumn.AircraftScore;
                                PoiRankingTypeToSortColumnMap[ClientLib.Data.Ranking.ERankingType.BonusDefense] = ClientLib.Data.Ranking.ESortColumn.DefenseScore;
                        
                                var lastMultiplierRank = Object.keys(ClientLib.Res.ResMain.GetInstance().GetGamedata().poibmbr).length;
                                var rankingPoiType = PoiTypeToPoiRankingTypeMap[poiType];
                                var sortColumn = PoiRankingTypeToSortColumnMap[rankingPoiType];
                        
                                ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand('RankingGetData', {
                                    firstIndex: 0,
                                    lastIndex: lastMultiplierRank,
                                    view: ClientLib.Data.Ranking.EViewType.Alliance,
                                    rankingType: rankingPoiType,
                                    sortColumn: sortColumn,
                                    ascending: true,
                                }, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, this, this.onRankingGetData), context);
                            });
                        },

                        onRankingGetDataAlliance: async function(context, results) {
                            return new Promise((resolve, reject) => {
                                try {
                                    const alliances = results.a.map(item => new AllianceRankingData(
                                        item.a,     // AllianceID
                                        item.an,    // AllianceName
                                        item.aw,    // AllianceWon
                                        item.bc,    // BaseCount
                                        item.pc,    // PlayerCount
                                        item.r,     // Rank
                                        item.s,     // Top40Score
                                        item.sa,    // AverageScore
                                        item.sc     // TotalScore
                                    ));
                        
                                    this._allianceRankingData = alliances;
                        
                                    // Example: Printing details of all alliances
                                    // alliances.forEach(alliance => {
                                    //     console.log(`Alliance: ${alliance.allianceName}, Rank: ${alliance.rank}`);
                                    // });
                        
                                    // Resolve with the alliances
                                    resolve(this._allianceRankingData);
                                } catch (error) {
                                    // Reject the promise in case of an error
                                    reject(error);
                                }
                            });
                        },
                        
                        
                        onRankingGetData: function (context, results) {
                            if (results === null) {
                                context.reject("Failed to get results");
                                return;  // Stop further execution if results are null
                            }
                        
                            var allianceBonuses = results.a;
                        
                            // Remove own alliance from list and add missing scores
                            for (var i = 0; i < allianceBonuses.length; i++) {
                                if (allianceBonuses[i].a === context.allianceId) {
                                    allianceBonuses.splice(i--, 1);
                                } else if (allianceBonuses[i].pois === undefined) {
                                    allianceBonuses[i].pois = 0;
                                }
                            }
                        
                            var isGain = context.poiOwnerId !== context.allianceId;
                            var i;
                        
                            if (isGain && context.poiOwnerId !== webfrontend.gui.widgets.AllianceLabel.ESpecialNoAllianceName) {
                                // Subtract POI score from current owner
                                for (i = 0; i < allianceBonuses.length; i++) {
                                    if (allianceBonuses[i].a === context.poiOwnerId) {
                                        // Array can be safely modified after cloning
                                        allianceBonuses = allianceBonuses.map(this.shallowClone);
                                        allianceBonuses[i].pois -= context.poiScore;
                        
                                        allianceBonuses.sort(function (a, b) {
                                            return b.pois - a.pois;
                                        });
                                        break;
                                    }
                                }
                            }
                        
                            var newAllianceScore = context.currentScore + (isGain ? context.poiScore : -context.poiScore);
                        
                            for (i = 0; i < allianceBonuses.length; i++) {
                                if (allianceBonuses[i].pois <= newAllianceScore) {
                                    break;
                                }
                            }
                        
                            var bonusMultiplier = ClientLib.Data.MainData.GetInstance().get_Server().get_POIGlobalBonusFactor();
                            var currentTotalBonus = ClientLib.Base.PointOfInterestTypes.GetTotalBonusByType(context.poiType, context.currentRank, context.currentScore, bonusMultiplier);
                            var newTotalBonus = ClientLib.Base.PointOfInterestTypes.GetTotalBonusByType(context.poiType, i + 1, newAllianceScore, bonusMultiplier);
                            var gainOrLoss = isGain ?
                                newTotalBonus - currentTotalBonus :
                                currentTotalBonus - newTotalBonus;
                        
                            context.resolve(gainOrLoss);
                        },                        

                        calculateBonus: function (context, allianceBonuses) {
                            var isGain = context.poiOwnerId !== context.allianceId;
                            var i;
    
                            if (isGain && context.poiOwnerId !== webfrontend.gui.widgets.AllianceLabel.ESpecialNoAllianceName) {
                                // Subtract POI score from current owner
                                for (i = 0; i < allianceBonuses.length; i++) {
                                    if (allianceBonuses[i].a === context.poiOwnerId) {
                                        // Array can be safely modified after cloning
                                        allianceBonuses = allianceBonuses.map(this.shallowClone);
                                        allianceBonuses[i].pois -= context.poiScore;
    
                                        allianceBonuses.sort(function (a, b) {
                                            return b.pois - a.pois;
                                        });
                                        break;
                                    }
                                }
                            }
    
                            var newAllianceScore = context.currentScore + (isGain ? context.poiScore : -context.poiScore);
    
                            for (i = 0; i < allianceBonuses.length; i++) {
                                if (allianceBonuses[i].pois <= newAllianceScore) {
                                    break;
                                }
                            }
                            var bonusMultiplier = ClientLib.Data.MainData.GetInstance().get_Server().get_POIGlobalBonusFactor();
                            var currentTotalBonus = ClientLib.Base.PointOfInterestTypes.GetTotalBonusByType(context.poiType, context.currentRank, context.currentScore, bonusMultiplier);
                            var newTotalBonus = ClientLib.Base.PointOfInterestTypes.GetTotalBonusByType(context.poiType, i + 1, newAllianceScore, bonusMultiplier);
                            var gainOrLoss = isGain ?
                                newTotalBonus - currentTotalBonus :
                                currentTotalBonus - newTotalBonus;
                                
                            context.poi.amount = gainOrLoss;
                        },

                        convertPOIType: function(n) {
                            switch (n) {
                                case ClientLib.Base.EPOIType.TiberiumBonus:
                                    return ClientLib.Data.WorldSector.WorldObjectPointOfInterest.EPOIType.TiberiumMine;
                                case ClientLib.Base.EPOIType.CrystalBonus:
                                    return ClientLib.Data.WorldSector.WorldObjectPointOfInterest.EPOIType.CrystalMine;
                                case ClientLib.Base.EPOIType.PowerBonus:
                                    return ClientLib.Data.WorldSector.WorldObjectPointOfInterest.EPOIType.PowerVortex;
                                case ClientLib.Base.EPOIType.InfanteryBonus:
                                    return ClientLib.Data.WorldSector.WorldObjectPointOfInterest.EPOIType.Infantery;
                                case ClientLib.Base.EPOIType.VehicleBonus:
                                    return ClientLib.Data.WorldSector.WorldObjectPointOfInterest.EPOIType.Vehicle;
                                case ClientLib.Base.EPOIType.AirBonus:
                                    return ClientLib.Data.WorldSector.WorldObjectPointOfInterest.EPOIType.Air;
                                case ClientLib.Base.EPOIType.DefenseBonus:
                                    return ClientLib.Data.WorldSector.WorldObjectPointOfInterest.EPOIType.Defense;
                            }
                        },
                    
                        sendBases: function() {
                            console.log("Send button clicked");

                            // Construct the overall JSON object
                            const combinedData = {
                                Players: [],
                                Bases: [],
                                AllianceData: {},
                                AllianceRanking: []
                            };

                            // Players: Collect data from _players (Map)
                            if (this._players instanceof Map) {
                                this._players.forEach((player) => {
                                    combinedData.Players.push(player.getData());
                                });
                            }

                            // Bases: Collect data from _bases
                            if (this._bases && Array.isArray(this._bases)) {
                                this._bases.forEach(base => {
                                    combinedData.Bases.push(base.getData());
                                });
                            }

                            // Alliance Data: Collect from _allianceData
                            if (this._allianceData && typeof this._allianceData.getData === 'function') {
                                combinedData.AllianceData = this._allianceData.getData();
                            }

                            // Alliance Rankings: Collect from _allianceRankingData
                            if (this._allianceRankingData && Array.isArray(this._allianceRankingData)) {
                                this._allianceRankingData.forEach(alliance => {
                                    combinedData.AllianceRanking.push(alliance.getData());
                                });
                            }

                            // Convert the combined data to JSON
                            const jsonData = JSON.stringify(combinedData);

                            console.log(jsonData);
                        
                            // Sending the JSON data as an example
                            // fetch('https://your-website.com/receiveData.php', {
                            //     method: 'POST',
                            //     headers: {
                            //         'Content-Type': 'application/json',
                            //     },
                            //     body: JSON.stringify(playerDataArray),
                            // })
                            // .then(response => response.json())
                            // .then(result => console.log('Data sent successfully:', result))
                            // .catch(error => console.error('Error sending data:', error));
                        },      
                        
                        clearData: function() {
                            this._numPlayersScanned = 0;
                            this._numbasesScanned = 0;
                            
                            this._playerTableData = [];
                            this._BaseTableData = [];
    
                            this._bases = [];
                            this._players = new Map();          

                            this._progressLabel.setValue(this._numPlayersScanned + " / " + this._numPlayers); // Update progress text
                            this._baseProgressLabel.setValue("0 / 0");
                            
                            this._progressBar.setWidth((this._numPlayersScanned / this._numPlayers) * 300); // Update width of green bar
                            this._baseProgressBar.setWidth((this._numbasesScanned / this._numBases) * 300); // Update width of green bar
                            
                            this.drawTables(); // Redraw the tables
                        },
                        
                        // PLAYER INFO
                        getPlayers: async function() {
                            this._numPlayers = ClientLib.Data.MainData.GetInstance().get_Alliance().get_NumMembers();
                            let members = ClientLib.Data.MainData.GetInstance().get_Alliance().get_MemberDataAsArray();

                            // A function to wrap the asynchronous command
                            const getPublicPlayerInfo = async (playerName) => {
                                return new Promise((resolve, reject) => {
                                    let ao = "GetPublicPlayerInfoByName";
                                    ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand(ao, {
                                        name: playerName,
                                    }, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, null, function(u, f) {
                                        if (f) {
                                            resolve(f);  // Resolve the promise with the data
                                        } else {
                                            reject("Failed to retrieve player data");
                                        }
                                    }));
                                });
                            };

                            // Get the selected value from the dropdown
                            let selectedItem = numBasesToScan.getSelection()[0]; // Returns the first selected item (as we expect a single selection)
                            if (selectedItem) {
                                let selectedValue = parseInt(selectedItem.getLabel(), 10); // Convert the label (text) to an integer

                                // Limit the loop to the selectedValue
                                let limitedMembers = members.slice(0, selectedValue); // Get only the first `selectedValue` members
                                for (let member of limitedMembers) {
                                    let player = new Player();
                                    player.AvgDefenseLvl = member["AvgDefenseLvl"];
                                    player.AvgOffenseLvl = member["AvgOffenseLvl"];
                                    player.NumBases = member["Bases"];
                                    player.BestDefenseLvl = member["BestDefenseLvl"];
                                    player.BestOffenseLvl = member["BestOffenseLvl"];
                                    player.Faction = member["Faction"];
                                    player.HasControlHubCode = member["HasControlHubCode"];
                                    player.Id = member["Id"];
                                    player.JoinStep = member["JoinStep"];
                                    player.LastSeen = member["LastSeen"];
                                    player.Level = member["Level"];
                                    player.Name = member["Name"];
                                    player.OnlineState = member["OnlineState"];
                                    player.Points = member["Points"];
                                    player.Rank = member["Rank"];
                                    player.Role = member["Role"];
                                    player.RoleName = member["RoleName"];
                                    player.VeteranPointContribution = member["VeteranPointContribution"];

                                    if ( member["Faction"] == 1) {
                                        this._allianceData.increaseGDI();
                                    } else {
                                        this._allianceData.increaseNOD();
                                    }
                                
                                    try {
                                        let publicPlayerData = await getPublicPlayerInfo(player.Name);
                                        player.PublicPlayerInfoByName = publicPlayerData;
                                        player.NumBasesDestroyed = publicPlayerData.bd;
                                        player.PvP = publicPlayerData.bd - publicPlayerData.bde;
                                        player.PvE = publicPlayerData.bde;
                                        this._numBases += player.NumBases;
                                        this._allianceData.numBases += player.NumBases;
                                    } catch (error) {
                                        console.error(`Failed to fetch data for player ${player.Name}: ${error}`);
                                    }

                                    // this._players[member["Name"]] = player;
                                    this._players.set(member["Name"], player);

                                    // Push the player's data into the tableData array immediately
                                    this._playerTableData.push([
                                        player.Rank,
                                        player.Name,
                                        player.Faction,
                                        player.NumBases,
                                        player.NumBasesDestroyed,
                                        player.PvP,
                                        player.PvE,
                                        player.BestOffenseLvl,
                                        player.BestDefenseLvl,
                                        player.TotalTiberium,
                                        player.TotalCrystal,
                                        player.TotalPower,
                                        player.TotalCredits,
                                        this.formatTime(player.MaxFactoryRepairTime),
                                        this.formatTime(player.MaxAirfieldRepairTime),
                                        this.formatTime(player.MaxBarracksRepairTime),
                                    ]);

                                    // Update the player table immediately
                                    this.drawTables();

                                    // Update the progress bar as each player is processed
                                    this.updateProgressBar();
                                }
                            }
                        },
                        

                        //BASE INFO
                        getBases: function() {
                            console.log("Getting base data");

                            // Get the list of player IDs
                            const playerNames = [];

                            for (const [key, player] of this._players.entries()) {
                                if (player.__Id !== undefined) {
                                    playerNames.push(player.Name);
                                }
                            }
                            
                            // Start recursive call
                            this.fetchPlayerDataSequentially(playerNames, 0).then(() => {
                                console.log("All player data fetched.");
                            });
                        },
                        
                        // Recursive function to fetch player data sequentially using Promises
                        fetchPlayerDataSequentially: function(playerNames, currentIndex) {
                            // If all players are processed, return a resolved Promise
                            if (currentIndex >= playerNames.length) {
                                return Promise.resolve();
                            }

                            // Get the current player
                            let player = this._players.get(playerNames[currentIndex]);                            
                            
                            // Fetch player info
                            return this.getPlayerInfo(player.Name).then(() => {
                                // Once the player info is fetched, call the next one
                                return this.fetchPlayerDataSequentially(playerNames, currentIndex + 1);
                            }).catch(error => {
                                console.error("Error fetching player info:", error);
                                return this.fetchPlayerDataSequentially(playerNames, currentIndex + 1);  // Continue even on error
                            });
                        },

                        getPlayerInfo: function(playerName) {
                            return new Promise((resolve, reject) => {
                                try {
                                   
                                    // Ensure the player exists in the players object before adding bases
                                    if (!this._players.get(playerName)) {
                                        // this._players[n] = new Player();
                                        this._players.set(playerName, new Player());

                                    }

                                    // Process bases in sequence
                                    let baseQueue = this._players.get(playerName).PublicPlayerInfoByName.c.map((item, index) => {
                                        let base = new Base();
                                        base.Owner = playerName;
                                        base.Id = item.i;
                                        base.BaseNum = index;
                                        base.Name = item.n;
                                        base.Score = item.p;
                                        base.X = item.x;
                                        base.Y = item.y;

                                        if (this._players.has(playerName)) {
                                            this._players.get(playerName).addBase(base);
                                        }

                                        return base;
                                    });

                                    const processBasesSequentially = (index) => {
                                        if (index >= baseQueue.length) {
                                            console.log("All bases processed for player:", playerName);
                                            return resolve();  // All bases processed, resolve the promise here
                                        }
                                    
                                        let base = baseQueue[index];
                                    
                                        // Call testBase for the current base
                                        testBase(base).then(() => {
                                            this.addBaseData([
                                                [   
                                                    base.Owner, 
                                                    base.Name + " ("+base.BaseNum+")",
                                                    base.Score, 
                                                    base.Faction, 
                                                    base.TiberiumPackage, 
                                                    base.TiberiumContinuous, 
                                                    base.TiberiumMaxStorage, 
                                                    base.CrystalPackage, 
                                                    base.CrystalContinuous, 
                                                    base.CrystalMaxStorage, 
                                                    base.PowerPackage, 
                                                    base.PowerContinuous, 
                                                    base.PowerMaxStorage, 
                                                    base.CreditPackage, 
                                                    base.CreditContinuous, 
                                                    this.formatTime(base.FactoryRepairTime), 
                                                    this.formatTime(base.AirfieldRepairTime), 
                                                    this.formatTime(base.BarracksRepairTime),
                                                    this.formatTime(base.WorstRepairTime), 
                                                    base.SupportWeapon, 
                                                    base.SupportWeaponLevel, 
                                                    base.OffensiveLevel, 
                                                    base.DefensiveLevel, 
                                                    base.BaseLevel,
                                                    base.NumBuildings,
                                                    base.NumUnitLimitOffense,
                                                    base.Id
                                                ]
                                            ]);

                                            this._players.get(base.Owner).TotalTiberium += (base.TiberiumPackage + base.TiberiumContinuous);
                                            this._players.get(base.Owner).TotalCrystal += (base.CrystalPackage + base.CrystalContinuous);
                                            this._players.get(base.Owner).TotalPower += (base.PowerPackage + base.PowerContinuous);
                                            this._players.get(base.Owner).TotalCredits += (base.CreditPackage + base.CreditContinuous);
                                            this._players.get(base.Owner).MaxAirfieldRepairTime = Math.max(this._players.get(base.Owner).MaxAirfieldRepairTime, base.AirfieldRepairTime);
                                            this._players.get(base.Owner).MaxBarracksRepairTime = Math.max(this._players.get(base.Owner).MaxBarracksRepairTime, base.BarracksRepairTime);
                                            this._players.get(base.Owner).MaxFactoryRepairTime = Math.max(this._players.get(base.Owner).MaxFactoryRepairTime, base.FactoryRepairTime);

                                            this._bases = this._bases.concat(base);
                                            
                                            this.updateBaseProgressBar();
                                            this.updatePlayerData();

                                            // After processing the current base, move to the next one
                                            processBasesSequentially(index + 1);

                                        }).catch(error => {
                                            console.error("Error processing base:", base.Name, error);
                                            processBasesSequentially(index + 1);  // Proceed to next base even in case of error
                                        });
                                    };

                                    function testBase(base) {
                                        return new Promise((resolve) => {
                                            ClientLib.Vis.VisMain.GetInstance().CenterGridPosition(base.X, base.Y);
                                            ClientLib.Vis.VisMain.GetInstance().Update();
                                            ClientLib.Vis.VisMain.GetInstance().ViewUpdate();
                                    
                                            ClientLib.Data.MainData.GetInstance().get_Cities().set_CurrentCityId(base.Id);
                                            var scanBase = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(base.Id);
                                            var comm = ClientLib.Net.CommunicationManager.GetInstance();
                                            comm.UserAction();

                                            // If base was destroyed, resolve immediately
                                            if (scanBase.get_IsGhostMode()) {
                                                return resolve();  // Continue to the next base
                                            }

                                            // Retry mechanism for checking Tiberium storage with a retry limit
                                            let retryCount = 0;
                                            let maxRetries = 25;  // Set a retry limit

                                            function checkTiberiumStorage() {
                                                var tibTest = scanBase.GetResourceMaxStorage(ClientLib.Base.EResourceType.Tiberium);

                                                if (tibTest === 0 && retryCount < maxRetries) {
                                                    // Retry after 2 seconds if tibTest is still zero, up to maxRetries
                                                    retryCount++;
                                                    setTimeout(checkTiberiumStorage, 200);
                                                } else if (retryCount >= maxRetries) {
                                                    console.log("Tiberium check failed after max retries, skipping base.");
                                                    return resolve();  // Skip to the next base if retry limit reached
                                                } else {
                                                    base.Id = scanBase.get_Id();
                                                    base.Faction = scanBase.get_CityFaction();
                                                    base.TiberiumMaxStorage = scanBase.GetResourceMaxStorage(ClientLib.Base.EResourceType.Tiberium);
                                                    base.CrystalMaxStorage = scanBase.GetResourceMaxStorage(ClientLib.Base.EResourceType.Crystal);
                                                    base.PowerMaxStorage = scanBase.GetResourceMaxStorage(ClientLib.Base.EResourceType.Power);

                                                    base.TiberiumPackage = scanBase.GetResourceBonusGrowPerHour(ClientLib.Base.EResourceType.Tiberium);
                                                    base.CrystalPackage = scanBase.GetResourceBonusGrowPerHour(ClientLib.Base.EResourceType.Crystal);
                                                    base.PowerPackage = scanBase.GetResourceBonusGrowPerHour(ClientLib.Base.EResourceType.Power);
                                                    base.CreditPackage = Math.floor(ClientLib.Base.Resource.GetResourceBonusGrowPerHour(scanBase.get_CityCreditsProduction()));

                                                    base.TiberiumContinuous = scanBase.GetResourceGrowPerHour(ClientLib.Base.EResourceType.Tiberium, !1, !1);
                                                    base.CrystalContinuous = scanBase.GetResourceGrowPerHour(ClientLib.Base.EResourceType.Crystal, !1, !1);
                                                    base.PowerContinuous = scanBase.GetResourceGrowPerHour(ClientLib.Base.EResourceType.Power, !1, !1);
                                                    base.CreditContinuous = Math.floor(ClientLib.Base.Resource.GetResourceGrowPerHour(scanBase.get_CityCreditsProduction(), !1));

                                                    base.AirfieldRepairTime = scanBase.get_CityUnitsData().GetRepairTimeFromEUnitGroup(ClientLib.Data.EUnitGroup.Infantry, null);
                                                    base.FactoryRepairTime = scanBase.get_CityUnitsData().GetRepairTimeFromEUnitGroup(ClientLib.Data.EUnitGroup.Vehicle, null);
                                                    base.BarracksRepairTime = scanBase.get_CityUnitsData().GetRepairTimeFromEUnitGroup(ClientLib.Data.EUnitGroup.Aircraft, null);
                                                    base.WorstRepairTime = Math.max(base.FactoryRepairTime, base.AirfieldRepairTime, base.BarracksRepairTime)
                                                    
                                                    base.SupportWeapon = scanBase.get_SupportWeapon() ? scanBase.get_SupportWeapon().dn : "null";
                                                    base.SupportWeaponLevel = scanBase.get_SupportWeapon() ? scanBase.get_SupportData().get_Level() : "null";

                                                    base.OffensiveLevel = scanBase.get_LvlOffense();
                                                    base.DefensiveLevel = scanBase.get_LvlDefense();
                                                    base.BaseLevel = scanBase.get_LvlBase();

                                                    // "-1" to counter that the construction yard is a building
                                                    base.NumBuildings = scanBase.GetNumBuildings()-1; 
                                                    base.NumUnitLimitOffense = scanBase.get_UnitLimitOffense();
                                                    base.IsProtected = scanBase.get_isProtected();

                                                    base.BaseResourceLayout = getResourceLayout(scanBase);
                                                    base.BaseBuildingLayout = getBuildingLayout(scanBase);

                                                    resolve();  // Notify that the base scanning is done
                                                }
                                            }

                                            // Call the check function to start checking for Tiberium storage
                                            checkTiberiumStorage();
                                        });
                                    }

                                    function getResourceLayout(base) {
                                        var layout = [];
                                        try {
                                            for (var y = 0; y < 8; y++) {
                                                for (var x = 0; x < 9; x++) {
                                                    var resourceType = base.GetResourceType(x, y);
                                                    switch (resourceType) {
                                                        case 0:
                                                            layout.push('.');
                                                            break;
                                                        case 1:
                                                            layout.push('c');
                                                            break;
                                                        case 2:
                                                            layout.push('t');
                                                            break;
                                                    }
                                                }
                                            }
                                        } catch (e) {
                                            console.error('\terror: ' + e);
                                        } finally {
                                            return layout.join('');
                                        }
                                    }

                                    function getBuildingLayout(base) {
                                        var layout = [];
                                        var buildings = base.get_Buildings().d;
                                    
                                        for (let building_key in buildings) {
                                            if (buildings.hasOwnProperty(building_key)) {
                                                let building = buildings[building_key];
                                                layout.push({
                                                    x: building.get_CoordX(),
                                                    y: building.get_CoordY(),
                                                    type: building.get_Type()
                                                });
                                            }
                                        }
                                        
                                        return layout;
                                    }                                    

                                    // Start processing bases sequentially, starting with the first base
                                    processBasesSequentially(0);

                                    this.updatePlayerData();

                                } catch (error) {
                                    console.error("Command execution failed:", error);  // Log any error during execution
                                    reject(error);  // Reject the promise in case of error
                                }
                            });
                        },

                        formatTime: function(seconds) {
                            let hours = Math.floor(seconds / 3600);
                            let minutes = Math.floor((seconds % 3600) / 60);
                            let remainingSeconds = seconds % 60;
                        
                            return `${hours}hrs ${minutes}mins ${remainingSeconds}secs`;
                        },
                    }
                });
                  

                
                  

                
                // Define a custom button class with a model property
                qx.Class.define("qx.ui.form.ModelButton", {
                    extend: qx.ui.form.Button,
                    include: [qx.ui.form.MModelProperty],
                    implement: [qx.ui.form.IModel]
                });

                // Define the main TABS class as a singleton that holds button and menu initialization logic
                qx.Class.define("TABS", {
                    type: "singleton",
                    extend: qx.core.Object,
                    construct: function () {
                        try {
                            this.base(arguments);
                            this.self(arguments).Init(); // Initialize the menu buttons
                        } catch (e) {
                            console.group("CnCTracker Menu Button");
                            console.error("Error setting up TABS constructor", e);
                            console.groupEnd();
                        }
                    },
                    statics: {
                        _Init: [], // Array to store initialization functions
                        addInit: function (func) {
                            this._Init.push(func); // Add initialization functions
                        },
                        Init: function () {
                            // Initialize each class stored in the _Init array
                            for (var i in this._Init)
                                qx.Class.getByName(this._Init[i]).getInstance();
                        }
                    }
                });

                // Define the MENU class that adds buttons to the UI, attached to the ScriptsButton in the game's menu
                qx.Class.define("TABS.MENU", {
                    type: "singleton",
                    extend: qx.core.Object,
                    include: [qx.locale.MTranslation],
                    construct: function () {
                        this.base(arguments);

                        // Get the game's "Scripts" button where new buttons will be added
                        var ScriptsButton = qx.core.Init.getApplication().getMenuBar().getScriptsButton();

                        // Create a new menu object where the custom buttons will be attached
                        this.Menu = new qx.ui.menu.Menu();

                        // Add a custom button to the game's "Scripts" button menu
                        ScriptsButton.Add("Menu Button", TABS.RES.IMG.Menu, this.Menu);

                        // Create a submenu for settings
                        cncTrackerButton = new qx.ui.menu.Button(this.tr("CnCTracker"), null, null);

                        // Add functionality for "Button One"
                        cncTrackerButton.addListener("execute", function () {
                            TABS.SETTINGS.CnCTrackerFunc();
                        }, this);

                        this.Menu.add(cncTrackerButton);
                    },
                    members: {
                        Menu: null // The menu member is initialized in the constructor
                    },
                    defer: function () {
                        TABS.addInit("TABS.MENU"); // Ensure the menu is added during initialization
                    }
                });

                // Define the SETTINGS class, which holds functions for handling button events and other settings-related actions
                // qx.Class.define("TABS.SETTINGS", {
                //     type: "static",
                //     statics: {
                //         // Initialization function for settings (can be expanded)
                //         _Init: function () {
                //             console.log("INIT function");
                //         },

                //         // Functionality for "Button One" when clicked
                //         CnCTrackerFunc: function () {
                //             console.log("Open CnCTracker Window");
                //             openWindow();
                //         },
                //     }
                // });

                if (typeof TABS !== "undefined" && typeof TABS.SETTINGS !== "undefined") {
                    // Add your function to the existing TABS.SETTINGS class
                    TABS.SETTINGS.CnCTrackerFunc = function () {
                        if (!TABS.SETTINGS._tableManagerInstance) {
                            TABS.SETTINGS._tableManagerInstance = new myApp.TableManager();
                        } else {
                            TABS.SETTINGS._tableManagerInstance._win.open(); // Ensure the window is visible
                        }
                    };
                } else {
                    // If TABS.SETTINGS is not defined, define it
                    qx.Class.define("TABS.SETTINGS", {
                        type: "static",
                        statics: {
                            _tableManagerInstance: null, // Static variable to hold the singleton instance
                
                            _Init: function () {
                                console.log("INIT function");
                            },
                
                            CnCTrackerFunc: function () {
                                console.log("[2] Open CnCTracker Window");
                                if (!this._tableManagerInstance) {
                                    console.log("Creating a new instance of TableManager");
                                    this._tableManagerInstance = new myApp.TableManager();
                                } else {
                                    console.log("Reusing the existing instance of TableManager");
                                    this._tableManagerInstance._win.open(); // Ensure the window is visible
                                }
                            }
                        }
                    });
                }                

                // Define resources (e.g., images) used in the menu
                qx.Class.define("TABS.RES.IMG", {
                    type: "static",
                    statics: {
                        // Base64-encoded image for the menu icon
                        Menu: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAADAFBMVEUAAAAAAAAAAAAABgAAAgACDQAAAAAAAAAAAAAAAAAAAAAAAQCV3icGGAETNwQIDAIAAAABBgBwsi9KghoUKwZFih0YVQlpph4iZAksYg8AAQACCABlmxmr0ieayiuM3SFMsBR/wymM0CFtsSQ5bhVFfRgRNQaY1DOLzCZYiRVJqhSDuylc2RiQzCSb2S9epyqVzjOi4TgWZQwecxIGLQQEFgJJgB07exh3niGHwCSv0zG01y////9RkhuX+yaR/iGd2zj///2hpEb//vNllSRijx9yoS5s2RdpmyhorB6GpDjE5GKL2Spjoh9y5h1hqRd36h9nniGm/Stv6Rhc2BNn7hGs/yhwzh6ttUvy5Z24sFvD01vo3Y2zvk61r2X9+emoqEvHuXytqFv58cmswFG9x1JS3Q3DuXCTmkSgvUL49L6LqEaWr09osh2P/idTpxV3pym2ymr1/NqPuje3vV2ewFB2tSWWrEN8mjZupyv7+9iCsy3z+rpplCZs3hqjyUaFnDHY63uJzi6AvivP3W6On0KRrDlcsRDK32CY/yeS9SJitRSHwzHc5Y+Ot0JlmiOg7TWAozB4rSqC4huWp0qz2E1bxxNanR6s2Ex/+hZi4Q9zySKc0EB5zyFgqCOq8jJ4+xKf+yVVnRpMsBJooyij4D6F0iqr0lNt9BlzwyFz9hSM/Rt72CJo+g+ysVF3rivWxmyEqzLt3qJwvCPMw4O6r3BJihSwzE/Bw3fXzYja2I3QwHqpuFnj6Zd7oTCCmC+0ymbl04zLv2zx3qHz8Kzs3pehrUjK33ieskrp7ax99CK502j7/tDI2GdajhpHkhFquCNj1xSnsE/M6G7i8KJXkxl4nSajq1qz9jW+6FLL9Fjb9W2530+btEJhwxiS2jRsrx9/2yZGvQxy1h3L5mW24U1foRtSzg2oyVZWrhZevxFLnheO9x+B+xxo5hac4TyVyTt/yy5f0Bej9jGu/TS5/zJxqymF4ix86xxvwx168RNW0hGh4Cqb3yl69R2T+iQ+CJL9AAAAPHRSTlMAERguJDYNAQgEFSn2P1dIHDytf0uNaLV4iB8ypdnX6Lbe3sJ2gVDp6ZKoxufO9ann+JScbl2lpMXW4/FzYe/CAAACJklEQVQoz2IAA3YOAV4TYzNzI1NWLk4GBOBkEtE3/BIWFvb1s4EoKxs7TJyDRXRC59rQAL+A4BULgtTFmDih6pmFOlfVLVvmsNThvc/jYPv5qgLsYHEWoby02U1Nc2ZM9X7y1MHHfeYNFS6QDKPw/5DNPc3126NTzrZ03Lm11N1ughoHUANArDxpuWXVxZnREamxqS2Ntx18/Oy1WdgZ2IS78j3Xb0yJjViXEJN1ssP75tyHM+fzcTCw6D73rSwoL3Fyiop0trEpuux9f827hTJcDIKTFz8L3Od1LCFqQ7wNEFyZOmPu919yLAz8bxYF9ruVnig5FOkIkqhZPmf2mlBraQb+t7bTfUsLG48cPWwDAlUvPvwM//dXEDAG/tWv51X2HT9jE38wGajFubdv+crwVX+AEisWz1uSc7rIxjlm96bkrN671T0fw9daMTMw6zya7pJ9oMaxamdiemL6pbb65lefVltIMTBp+dl6uGQX7t21ZWtcklPDteL2lbOCJBkZOPhO5bvVuubs2RGXlJGxvy2zrPveAj1WTgZ2KYUAWw/XiorWKddbG8onTsrtBmkAxQavvPs2l3OutVO8vLwKPP3bL9orc4NjhI2PZ/L5q/1uHoG+kx74X6jLU+TlgEQ4o4hS17RFtkv8v3m+nBa6UJwVKA6RYZPW5LH7EfI7JNjeTkOChQMpNXCxSojLycpayogxM4LjFSHFJsDNzc3CxAZLPQCSE8MJTTlJqQAAAABJRU5ErkJggg==",
                    }
                });
            }

            function getTextWidth(text, font) {
                var canvas = document.createElement("canvas");
                var context = canvas.getContext("2d");
                context.font = font || "16px sans-serif"; // Default font if not provided
                return context.measureText(text).width;
            }
                
            // function openWindow() {
            //     console.log("Got to ehre");
            //     try {
            //         // Create a basic window when the button is pressed
            //         let win = new qx.ui.window.Window("Basic Window");
            //         win.set({
            //             width: 750,
            //             height: 400,
            //             contentPadding: 10,
            //             showClose: true,
            //             showMaximize: false,
            //             showMinimize: false
            //         });

            //         win.setLayout(new qx.ui.layout.VBox());

            //         let label = new qx.ui.basic.Label("CnC Tracker");
            //         win.add(label);

            //         // Container for the button and progress bar (HBox for horizontal alignment)
            //         let container = new qx.ui.container.Composite(new qx.ui.layout.HBox(10)); // 10px spacing

            //         // First button next to progress bar
            //         let getBasesButton = new qx.ui.form.Button("Get Bases");
            //         getBasesButton.addListener("execute", function() {
            //             getBases();
            //         });

            //         // First button next to progress bar
            //         let innerButton1 = new qx.ui.form.Button("Scan");
            //         innerButton1.addListener("execute", function() {
            //             // getBaseData();
            //             testBase();
            //         });
                                    
                        
            //             // console.log(webfrontend.gui.info);
            //             // webfrontend.gui.info.PlayerInfoWindow.getInstance().openWithPlayerName("Amaury7777");

            //             // setTimeout(function() {
            //             //     var playerInfoWindow = webfrontend.gui.info.PlayerInfoWindow.getInstance();
            //             //     console.log(playerInfoWindow);
            //             //     console.log(playerInfoWindow["__zc"]);
            //             // }, 1000);
            //         // });


            //         container.add(getBasesButton);  // Add the button to the container
            //         container.add(innerButton1);  // Add the button to the container
                    

            //         // Create progress bar container with red background and green progress bar
            //         let progressBarContainer = new qx.ui.container.Composite(new qx.ui.layout.Canvas());
            //         progressBarContainer.set({
            //             width: 300,
            //             height: 20,
            //             decorator: new qx.ui.decoration.Decorator().set({
            //                 backgroundColor: "red"
            //             })
            //         });

            //         // Green bar inside the red container
            //         let greenBar = new qx.ui.core.Widget().set({
            //             width: 0, // Initial width of 0
            //             height: 30,
            //             backgroundColor: "green"
            //         });
            //         progressBarContainer.add(greenBar, {left: 0, top: 0});

            //         // Text box for progress (e.g., "1 / 50")
            //         let progressLabel = new qx.ui.basic.Label("0 / 50");
            //         progressBarContainer.add(progressLabel, {left: "50%", top: "10%", zIndex: 10});
            //         progressLabel.set({
            //             textColor: "white",
            //             alignX: "center",
            //             alignY: "middle"
            //         });

            //         // Add progress bar container to the horizontal box (next to the button)
            //         container.add(progressBarContainer);

            //         // Add the button and progress bar container to the window
            //         win.add(container);

            //         // Add a spacer for vertical space
            //         let spacer = new qx.ui.core.Spacer(null, 20); // 20px vertical space
            //         win.add(spacer);

            //         // Getting player information
            //         getPlayers();

            //         // Create an empty array to hold the table data
            //         let tableData = [];

            //         // Use a traditional for-loop to iterate through the players map or object
            //         for (let id in players) {
            //             if (players.hasOwnProperty(id)) {  // Ensure the property is a player's property
            //                 let player = players[id];

            //                 // Push the player's data into the tableData array
            //                 tableData.push([
            //                     player.Rank,
            //                     player.Name,
            //                     player.Faction,
            //                     player.Bases,
            //                     player.BestDefenseLvl,
            //                     player.BestOffenseLvl,
            //                 ]);
            //             }
            //         }

            //         // Set the data to the table model
            //         // tableModel.setData(tableData);

            //         // Create table
            //         // let table = new qx.ui.table.Table(tableModel);
            //         // table.set({
            //         //     height: 350
            //         // });

            //         // Assuming tableData is an array of arrays where the first element is the rank
            //         // Sort the tableData by the "Rank" column (index 0)
            //         tableData.sort(function(a, b) {
            //             return a[0] - b[0]; // Compare the rank values (assuming numerical ranking)
            //         });

            //         // Define the first table
            //         var playerTable = new qx.ui.table.Table();
            //         var playerTableModel = new qx.ui.table.model.Simple();
            //         var columns = ["Rank", "Name", "Faction", "Bases", "Best Defense Level", "Best Offense Level"];
            //         playerTableModel.setColumns(columns);
            //         playerTable.setTableModel(playerTableModel);

            //         // Set the column model
            //         var colModel = playerTable.getTableColumnModel();

            //         // Iterate over columns and adjust width based on header text length
            //         columns.forEach(function(columnName, index) {
            //             // Get the width of the header text
            //             var headerWidth = getTextWidth(columnName, "14px Arial");
            //             // Set the column width with some padding
            //             colModel.setColumnWidth(index, headerWidth + 20); // Add padding of 20px
            //         });

            //         // Setting width of Name 
            //         // TODO: Set this to the longest name field
            //         colModel.setColumnWidth(1, 150);

            //         // Set table data
            //         playerTableModel.setData(tableData);

            //         // Define the second table
            //         var baseInfo = new qx.ui.table.Table();
            //         var baseInfoModel = new qx.ui.table.model.Simple();
            //         baseInfoModel.setColumns(["Column A", "Column B", "Column C"]);
            //         baseInfo.setTableModel(baseInfoModel);

            //         // Add some mock rows to baseInfoModel
            //         baseInfoModel.setData([
            //             ["A1", "B1", "C1"],
            //             ["A2", "B2", "C2"],
            //             ["A3", "B3", "C3"],
            //             ["A4", "B4", "C4"]
            //         ]);

            //         // Create the TabView
            //         var tabView = new qx.ui.tabview.TabView();

            //         // Create and add tabs with layouts
            //         var playerInfoTab = new qx.ui.tabview.Page("Player Info");
            //         playerInfoTab.setLayout(new qx.ui.layout.VBox()); // Set vertical layout for Tab 1
            //         playerInfoTab.add(playerTable);
            //         tabView.add(playerInfoTab);

            //         var baseInfoTab = new qx.ui.tabview.Page("Base Info");
            //         baseInfoTab.setLayout(new qx.ui.layout.VBox()); // Set vertical layout for Tab 2
            //         baseInfoTab.add(baseInfo);
            //         tabView.add(baseInfoTab);

            //         // Add the TabView to the window
            //         win.add(tabView, {left: 10, top: 10, right: 10, bottom: 10});





            //         // Add table to the window below the buttons
            //         // win.add(table);

                    

            //         // // Simulate progress (like the FP function)
            //         // let value = 0;
            //         // let max = 50;
            //         // let interval = setInterval(function() {
            //         //     if (value < max) {
            //         //         value += 5; // Increase progress
            //         //         greenBar.setWidth((value / max) * 300); // Update width of green bar
            //         //         progressLabel.setValue(value + " / " + max); // Update progress text
            //         //     } else {
            //         //         clearInterval(interval); // Stop when progress is complete
            //         //     }
            //         // }, 500);

            //         // Open the window and move it to a visible position
            //         win.open();
            //         win.moveTo(100, 100);
            //     } catch (e) {
            //         console.log("Error initializing buttons:", e);
            //     }
            // }

            
            // function getBases() {
            //     console.log("Getting base data");
            
            //     // Get the list of player IDs
            //     const playerIds = Object.keys(players).filter(id => players.hasOwnProperty(id));
            
            //     // Start recursive call
            //     fetchPlayerDataSequentially(playerIds, 0).then(() => {
            //         console.log("All player data fetched.");
            //     });
            // }
            
            // // Recursive function to fetch player data sequentially using Promises
            // function fetchPlayerDataSequentially(playerIds, currentIndex) {
            //     // If all players are processed, return a resolved Promise
            //     if (currentIndex >= playerIds.length) {
            //         return Promise.resolve();
            //     }
            
            //     // Get the current player
            //     let player = players[playerIds[currentIndex]];
            
            //     // Fetch player info
            //     return getPlayerInfo(player.Name).then(() => {
            //         // Once the player info is fetched, call the next one
            //         return fetchPlayerDataSequentially(playerIds, currentIndex + 1);
            //     });
            // }
            

            // function getPlayerInfo(playerName) {
            //     return new Promise((resolve, reject) => {
            //         try {
            //             let ao = "GetPublicPlayerInfoByName";  // Corrected command
            //             let n = playerName;  // The player name you're querying
            //             console.log("Sending command:", ao, "with playerName:", n);
            
            //             // Send the command with an inline event delegate
            //             ClientLib.Net.CommunicationManager.GetInstance().SendSimpleCommand(ao, {
            //                 name: n
            //             }, webfrontend.phe.cnc.Util.createEventDelegate(ClientLib.Net.CommandResult, null, function(u, f) {
            
            //                 // Ensure the player exists in the players object before adding bases
            //                 if (!players[n]) {
            //                     players[n] = new Player();
            //                 }
            
            //                 let baseQueue = f.c.map(function(item) {
            //                     let base = new Base();
            //                     base.Id = item.i;
            //                     base.Name = item.n;
            //                     base.Score = item.p;
            //                     base.X = item.x;
            //                     base.Y = item.y;
            //                     players[n].addBase(base);
            //                     return base;
            //                 });
            
            //                 // Recursive function to process each base sequentially
            //                 function processBasesSequentially(index) {
            //                     if (index >= baseQueue.length) {
            //                         console.log("All bases processed for player:", playerName);
            //                         return resolve();  // All bases processed, resolve the promise
            //                     }
            
            //                     let base = baseQueue[index];
            //                     console.log("Processing base:", base.Name);
                                
            //                     // Call testBase for the current base
            //                     testBase(base).then(() => {
            //                         console.log("Finished processing base:", base.Name);
            //                         // Proceed to the next base after the current one is done
            //                         processBasesSequentially(index + 1);
            //                     }).catch(error => {
            //                         console.error("Error processing base:", base.Name, error);
            //                         // Skip to the next base in case of error
            //                         processBasesSequentially(index + 1);
            //                     });
            //                 }
            
            //                 // Start processing bases sequentially, starting with the first base
            //                 processBasesSequentially(0);
            //             }), null);
            
            //         } catch (error) {
            //             console.error("Command execution failed:", error);  // Log any error during execution
            //             reject(error);  // Reject the promise in case of error
            //         }
            //     });
            // }
            
            

            // function testBase(base) {
            //     return new Promise((resolve) => {
            //         ClientLib.Vis.VisMain.GetInstance().CenterGridPosition(base.X, base.Y);
            //         ClientLib.Vis.VisMain.GetInstance().Update();
            //         ClientLib.Vis.VisMain.GetInstance().ViewUpdate();
            
            //         ClientLib.Data.MainData.GetInstance().get_Cities().set_CurrentCityId(base.Id);
            //         var scanBase = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(base.Id);
            //         var comm = ClientLib.Net.CommunicationManager.GetInstance();
            //         comm.UserAction();
            
            //         // If base was destroyed, resolve immediately
            //         if (scanBase.get_IsGhostMode()) {
            //             console.log("Base destroyed.");
            //             return resolve();  // Continue to the next base
            //         }
            
            //         // Now check Tiberium storage
            //         function checkTiberiumStorage() {
            //             var tibTest = scanBase.GetResourceMaxStorage(ClientLib.Base.EResourceType.Tiberium);
            //             console.log("Base Name: ", base.Name, " || TibTest: ", tibTest);
            
            //             if (tibTest === 0) {
            //                 // Retry after 2 seconds if tibTest is still zero
            //                 setTimeout(checkTiberiumStorage, 2000);
            //             } else {
            //                 // Base is valid, resolve the promise
            //                 console.log("Valid base found with Tiberium: ", tibTest);
            //                 resolve();  // Notify that the base scanning is done
            //             }
            //         }
            
            //         // Call the check function to start checking for Tiberium storage
            //         checkTiberiumStorage();
            //     });
            // }
            
                     
            
            

            function getBaseInfo(id) {
                console.log("here [0]");
                ClientLib.Data.MainData.GetInstance().get_Cities().set_CurrentCityId(id);
                ncity = ClientLib.Data.MainData.GetInstance().get_Cities().GetCity(id);
                
                
                if (ncity != null && ncity.get_Version() > 0) {
                    console.log("here [1]");
                    console.log(ncity);
                    console.log(ncity.GetResourceMaxStorage(ClientLib.Base.EResourceType.Tiberium));
                    // MOD remove if Ally
                    // if (ncity.get_OwnerAllianceId() == 0 || (ncity.get_OwnerAllianceId() != playerbase.get_AllianceId()) && !Object.values(ClientLib.Data.MainData.GetInstance().get_Alliance().get_Relationships()).some(e => e.OtherAllianceId == ncity.get_OwnerAllianceId() && [1, 2].includes(e.Relationship))) {
                    //     console.log("here [2]");
                    //     if (!ncity.get_IsGhostMode()) {
                    //         console.log("here [3]");
                    //         //if(ncity.get_Name() != null)
                    //         //console.log("ncity.get_Name ", ncity.get_Name() , ncity.get_CityBuildingsData().get_Buildings());
                    //         //var cityBuildings = ncity.get_CityBuildingsData();
                    //         var cityUnits = ncity.get_CityUnitsData();
                    //         if (cityUnits != null) { // cityUnits !=null können null sein
                    //             console.log("here [4]");
                    //             //console.log("ncity.cityUnits", cityUnits );
                    //             var selectedBase = this.ZC.getSelection()[0].getModel();
                    //             var buildings = ncity.get_Buildings().d;
                    //             var defenseUnits = cityUnits.get_DefenseUnits().d;
                    //             var offensivUnits = selectedBase.get_CityUnitsData().get_OffenseUnits().d;
                    //         }
                    //     }
                    // }
                }
            }



            function getBasesData() {

            }

            function setCurrentBase(baseID) {
                //console.log('DEBUG: ' + 'function setCurrentBase');
                var allCities = ClientLib.Data.MainData.GetInstance().get_Cities().get_AllCities().d;
                var selectedBase = allCities[baseID];
                ClientLib.Vis.VisMain.GetInstance().CenterGridPosition(selectedBase.get_PosX(), selectedBase.get_PosY());
                ClientLib.Vis.VisMain.GetInstance().Update();
                ClientLib.Vis.VisMain.GetInstance().ViewUpdate();
            }

            function getBase(x, y) {

            }

            function goToPos(x, y) {
                ClientLib.Vis.VisMain.GetInstance().CenterGridPosition(x, y);
            }

            // Wait for the game to load fully before running the script
            function waitForGame() {
                try {
                    if (typeof qx != 'undefined' && typeof qx.core != 'undfined' && typeof qx.core.Init != 'undefined') {
                        var app = qx.core.Init.getApplication();
                        // Check if the player and server data is loaded
                        if (app !== null && app.initDone === true && ClientLib.Data.MainData.GetInstance().get_Player().get_Id() !== 0 && ClientLib.Data.MainData.GetInstance().get_Server().get_WorldId() !== 0) {
                            try {
                                console.time("loaded in");
                                CnCTracker(); // Call the function to create the classes and buttons
                                TABS.getInstance(); // Initialize the TABS instance
                                console.group("Tiberium Alliances Menu Button");
                                console.timeEnd("loaded in");
                                console.groupEnd();
                            } catch (e) {
                                console.group("Tiberium Alliances Menu Button");
                                console.error("Error in waitForGame", e);
                                console.groupEnd();
                            }
                        } else {
                            window.setTimeout(waitForGame, 1000); // Retry after 1 second if the game isn't fully initialized
                        }
                    } else {
                        window.setTimeout(waitForGame, 1000); // Retry after 1 second if qx is not ready
                    }
                } catch (e) {
                    console.group("Tiberium Alliances Menu Button");
                    console.error("Error in waitForGame", e);
                    console.groupEnd();
                }
            }

            // Start waiting for the game to load
            window.setTimeout(waitForGame, 5000);
        }.toString() + ")();";

    // Set the script type and append it to the <head> element of the webpage
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);
})();
