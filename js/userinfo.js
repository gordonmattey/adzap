var zappedAds = [];
var displayedAds = [];
var vaporizedAds = [];
var clickedAds = [];
var zappedAdIds = [];
var zappedAdList = "";
var userInfo;
var settings;
var installedFlag;
var gameState;
var lastAwardedXP = 0;
var targetStorageVersion = "1.5";
var currentStorageVersion;

var NUKE_STATE = {"disabled": 0, "charging0": 1, "charging1": 2, "charging2": 3, "charging3": 4, "ready": 5, "active": 6};

function setGameState_adLastShwon(lastDisplayTime){

	gameState.ads.adLastDisplayed = lastDisplayTime;
	storeGameState();
};

function setGameState_initialEffectsDisplayed(numberEffects){

	gameState.ads.initialEffectsDisplayed = numberEffects;
	storeGameState();
};

function setNuke(){
	gameState.nuke.state = NUKE_STATE.active;
	var safeTime = new Date();
	safeTime.setTime(safeTime.getTime() + (6 * 60 * 60 * 1000)); /* current time + 6 hours */
	gameState.nuke.safeTime = safeTime;
	storeGameState();
};

function isNukeDisabled(){
	return (gameState.nuke.state == NUKE_STATE.disabled);
};

function isNukeCharging(){
	return (gameState.nuke.state == NUKE_STATE.charging0 || gameState.nuke.state == NUKE_STATE.charging1 || gameState.nuke.state == NUKE_STATE.charging2 || gameState.nuke.state == NUKE_STATE.charging3);
};

function isNukeReady(){
	return (gameState.nuke.state == NUKE_STATE.ready);
};

function isNukeActive(){
	return (gameState.nuke.state == NUKE_STATE.active);
};

function checkAndResetNuke(){
	console.log("ENTER: checkAndResetNuke()");
	
	if (gameState.nuke.state == NUKE_STATE.active)
	{
		var currentTime = new Date();

		console.log("currentTime=" + currentTime);
		console.log("safeTime=" + gameState.nuke.safeTime);
		if (currentTime > gameState.nuke.safeTime)
		{
			gameState.nuke.state = NUKE_STATE.charging0;
			gameState.nuke.safeTime = null;
			gameState.nuke.charge = 0;
			storeGameState();
		}
	}

}

function incrementAdsZapped(){
	userInfo.adsZapped++;
};

function incrementAdsDisplayed(){
	userInfo.adsDisplayed++;
};

function incrementAdsVaporized(){
	userInfo.adsVaporized++;
};

function incrementAdsClicked(){
	userInfo.adsClicked++;
};

function getZappedAdIds(){
	return zappedAdIds;	
};

function getZappedAdList(){
	return zappedAdList;	
};

function getUserInfo(){
	return userInfo;	
};

function getSettings(){
	return settings;	
};


function getGameState(){
	return gameState;	
};

function checkLevelUp(){
	
	var levels = [{lower:0,higher:25},{lower:25,higher:50},{lower:50,higher:100},{lower:100,higher:200},{lower:200,higher:500},{lower:500,higher:1000},{lower:1000,higher:2000},{lower:2000,higher:5000},{lower:5000,higher:10000},{lower:10000,higher:20000},{lower:20000,higher:50000}];
	
	var foundLevel = false;
	var levelToCheck = 0;
		
	while (!foundLevel && levelToCheck <= levels.length - 1){
		if (userInfo.xp >= levels[levelToCheck].lower && userInfo.xp < levels[levelToCheck].higher){
			userInfo.level = levelToCheck;
			userInfo.progress = (userInfo.xp - levels[levelToCheck].lower) / (levels[levelToCheck].higher - levels[levelToCheck].lower) * 100;
			foundLevel = true;
		}
		levelToCheck++;
	}
};

function chargeNuke(){

	if (gameState.nuke.state == NUKE_STATE.charging0 || gameState.nuke.state == NUKE_STATE.charging1 || gameState.nuke.state == NUKE_STATE.charging2 || gameState.nuke.state == NUKE_STATE.charging3){

		gameState.nuke.charge += lastAwardedXP;

		if (gameState.nuke.charge >= 100){
			gameState.nuke.state = NUKE_STATE.ready;
		}
		else if (gameState.nuke.charge >= 75){
			gameState.nuke.state = NUKE_STATE.charging3;
		}
		else if (gameState.nuke.charge >= 50){
			gameState.nuke.state = NUKE_STATE.charging2;
		}
		else if (gameState.nuke.charge >= 25){
			gameState.nuke.state = NUKE_STATE.charging1;
		}

	}

	storeGameState();
};

function addXP(awardedXP){
	console.log("ENTER: addXP()");
	lastAwardedXP = awardedXP;
	userInfo.xp = userInfo.xp + awardedXP;
	checkLevelUp();
	chargeNuke();
	storeUserInfo();	
};

function addZappedAd(ad){
	zappedAds.push(ad);
	incrementAdsZapped();
	storeZappedAds();
	storeUserInfo();
};

function addClickedAd(ad){
	clickedAds.push(ad);
	incrementAdsClicked();
	storeClickedAds();
	storeUserInfo();	
};

function addDisplayedAd(ad){
	displayedAds.push(ad);
	incrementAdsDisplayed();
	storeDisplayedAds();
	storeUserInfo();	
};

function addVaporizedAd(ad){
	//vaporizedAds.push(ad);
	incrementAdsVaporized();
	//storeVaporizedAds();
	storeUserInfo();
};

function updateZappedAdIds(){
	console.log("ENTER: updateZappedAdIds()");
	
	zappedAdIds = [];
	
	for (var indexAd = 0; indexAd < zappedAds.length; indexAd++){
		zappedAdIds[indexAd] = zappedAds[indexAd].adId;
	}
};

function updateZappedAdList(){
	console.log("ENTER: updateZappedAdList()");
	
	zappedAdList = "";
	
	for (var indexAd = 0; indexAd < zappedAds.length; indexAd++){
		zappedAdList += zappedAds[indexAd].adId;
		zappedAdList += "|";
		// TODO evaulate the performance of += vs. .join
		// zappedAdList = zappedAdList.join(zappedAds[indexAd].adId);
	}
	// remove the final pipe (|) so the regex works otherwise it matches null/empty?
	zappedAdList = zappedAdList.substring(0, zappedAdList.length-1);
	//console.log(zappedAdList);		
};

// Store the array of zapped ads
function storeZappedAds(){
	console.log("ENTER: storeZappedAds()");
	localStorage.setItem("zappedAds", JSON.stringify(zappedAds));
	updateZappedAdIds();
	updateZappedAdList();
};

function loadZappedAds(){
	console.log("ENTER: loadZappedAds()");
	zappedAds = JSON.parse(localStorage.getItem("zappedAds"));
	if (zappedAds == null){
		console.log("Stored data in inconsistent state");
		zappedAds = [];
	}

	updateZappedAdIds();
	updateZappedAdList();
	
};

function storeVaporizedAds(){
	console.log("ENTER: storeVaporizedAds()");
	localStorage.setItem("vaporizedAds", JSON.stringify(vaporizedAds));
};

function loadVaporizedAds(){
	console.log("ENTER: loadVaporizedAds()");

	vaporizedAds = JSON.parse(localStorage.getItem("vaporizedAds"));
	
	if(vaporizedAds == null){
		console.log("Stored data in inconsistent state");
		vaporizedAds = [];
	}
};	

function storeDisplayedAds(){

	console.log("ENTER: storeDisplayedAds()");
	localStorage.setItem("displayedAds", JSON.stringify(displayedAds));

};
	
function loadDisplayedAds(){
	
	console.log("ENTER: loadDisplayedAds()");

	displayedAds = JSON.parse(localStorage.getItem("displayedAds")); 
	
	if(displayedAds == null){
		console.log("Stored data in inconsistent state");
		displayedAds = [];
	}

};


function storeClickedAds(){
	console.log("ENTER: storeClickedAds()");
	localStorage.setItem("clickedAds", JSON.stringify(clickedAds));
};

function loadClickedAds(){
	console.log("ENTER: loadClickedAds()");

	clickedAds = JSON.parse(localStorage.getItem("clickedAds"));
	
	if(clickedAds == null){
		console.log("Stored data in inconsistent state");
		clickedAds = [];
	}
};

function resetTrackedAds(){
	console.log("ENTER: resetTrackedAds()");
	localStorage.setItem("zappedAds", JSON.stringify([{adId:"00000000000000000000000000000000", adURL: "", documentLocation: "", windowLocation: "", date:"2000-01-01T00:00:00.000Z"}]));	
	localStorage.setItem("vaporizedAds", JSON.stringify([]));
	localStorage.setItem("displayedAds", JSON.stringify([]));
	localStorage.setItem("clickedAds", JSON.stringify([]));
	
	loadUserData();

	// Let the extension know it should reset itself
	chrome.extension.sendMessage(JSON.stringify({message: "reloadTrackedAds"}));
};

function resetUserData(){
	localStorage.setItem("userInfo", JSON.stringify({userId: "0", xp: 0, level: 0, progress: 0, adsDisplayed: 0, adsZapped: 0, adsVaporized: 0, adsClicked: 0, referralLink: "", numberReferrals: 0}));
	localStorage.setItem("settings", JSON.stringify({showNotificationsXP: false, showNotificationsLevelUp: false, alwaysShowRayGun: true, alwaysShowNuke: false, alwaysShowXPCounter: false, addScoreToBoard: false, rememberAds: 0}));
	localStorage.setItem("gameState", JSON.stringify({ads: {adLastDisplayed: null, initialEffectsDisplayed: 0}, nuke: {state: NUKE_STATE.charging0, charge: 0, safeTime: null}}));

	loadUserData();
}

function loadUserInfo(){
	console.log("ENTER: loadUserInfo()");

	userInfo = JSON.parse(localStorage.getItem("userInfo"));
	
	if(userInfo == null){
		console.log("Stored data in inconsistent state");
	}
};

function storeUserInfo(){
	console.log("ENTER: storeUserInfo()");
	localStorage.setItem("userInfo", JSON.stringify(userInfo));
};

function loadSettings(){
	console.log("ENTER: loadSettings()");

	settings = JSON.parse(localStorage.getItem("settings"));
	
	if(settings == null){
		console.log("Stored data in inconsistent state");
	}
};	
	
function storeSettings(){
	console.log("ENTER: storeSettings()");
	localStorage.setItem("settings", JSON.stringify(settings));
};

function storeGameState(){
	console.log("ENTER: storeGameState()");
	localStorage.setItem("gameState", JSON.stringify(gameState));
};


function loadGameState(){
	console.log("ENTER: loadGameState()");

	gameState = JSON.parse(localStorage.getItem("gameState"));
	
	// sort out the date because json parse doesn't make it so. putting the date string back into the constructor
	gameState.nuke.safeTime = new Date(gameState.nuke.safeTime);

	if(gameState == null){
		console.log("Stored gameState data in inconsistent state");
	}
	else
	{
		/* Check if the nuke has expired */
		checkAndResetNuke();
	}

};	

function setSettings(settingsToSet){
	console.log("ENTER: setSettings()");
	settings = settingsToSet;
	storeSettings();
};
	
// load user data from storage
function loadUserData(){
	console.log("ENTER: loadUserData()");

	loadZappedAds();
	//loadVaporizedAds();
	//loadDisplayedAds();
	loadClickedAds();
	loadUserInfo();
	loadSettings();
	loadGameState();
};

// Ensure the storage schema is set up
function initUserInfo() {
	console.log("ENTER: initUserInfo()");
	
	var installedFlag = localStorage.getItem("installed");

	// Check for first time use
	if (installedFlag == null ){
		console.log("first time extension is being used");
		localStorage.setItem("installed", "true")
		localStorage.setItem("storageVersion", targetStorageVersion)
		
		resetUserData();
		resetTrackedAds();
		
		// Show instructions for first time use
		chrome.tabs.create({url: "http://www.getadzap.com/app/chrome/confirm.html"});
		trackInstall();
	}
	
	currentStorageVersion = localStorage.getItem("storageVersion");
	
	if (targetStorageVersion != currentStorageVersion)
	{
		
		localStorage.setItem("storageVersion", targetStorageVersion);

		// storage version migration from 1.0 upwards
		if (currentStorageVersion != "1.4")
		{
			resetTrackedAds();
			resetUserData();

			chrome.tabs.create({url: "http://www.getadzap.com/app/chrome/upgrade.html"});
		}
		else if (currentStorageVersion != "1.5")
		{
			resetTrackedAds();
			resetUserData();
		}

		// storage version migration from 1.4 upwards
/*		if (currentStorageVersion == "1.4")
		{
		}
*/	}

	loadUserData();	
};
