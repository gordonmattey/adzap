	var advertisingConfig;
	var adLastShown = null;
	var displayableAds = [];
	var zappedAds = [];
	var availableAds = [];
	
	// TODO move to central game logic component
	function awardXP(){
		console.log("ENTER: awardXP()");
		var min = 1;
		var max = 15;
		var awardedXP = Math.floor(Math.random() * (max - min + 1)) + min;
		
		var msgMin = 1;
		var msgMax = message.length;
		var randomMessage = Math.floor(Math.random() * (msgMax - msgMin + 1)) + msgMin;

		addXP(awardedXP);  // TODO - move this into a game module
	};

	function notifyUser(){
		console.log("ENTER: notifyUser()");		
		// Update notifications to current tab
		if (userNotifications.length > 0){
			chrome.tabs.getSelected(null, function(tab) {				
				chrome.tabs.sendMessage(tab.id, JSON.stringify({message: "notifyUser", userNotifications: userNotifications}), function(response) {
						userNotifications = []; // reset the notification so it doesn't get sent again in future
						// TODO handle error conditions
				});
			});						
		}
		
		// Update all tabs with status
		chrome.tabs.getAllInWindow(null, function(tabs){
		    for (var i = 0; i < tabs.length; i++) {
		    	chrome.tabs.sendMessage(tabs[i].id, JSON.stringify({ message: "updateStatus"}));                         
		    }
		});
	};
	

	function findAdById(id){
		console.log("ENTER: findAdById(" + id + ")");		

		for (var i = 0; i < advertisingConfig.ads.length; i++) {

		    if (id == parseInt(advertisingConfig.ads[i].id)){
		    	return advertisingConfig.ads[i];
		    } 
		}

		return null;
	};

	function updateDisplayableAds(){
		console.log("ENTER: updateDisplayableAds()");
		displayableAds = _.difference(availableAds, getZappedAdIds());
		console.log("Available Ads " + availableAds);
		console.log("Zapped Ads " + getZappedAdIds());
		console.log("Displayable Ads " + displayableAds);

	};

	// Stores the details of ads we have displayed to the user
	function showAd(tabId, sourceURL){
		console.log("ENTER: showAd()");

		var min = 1;
		var max = displayableAds.length;;
		var index = (Math.floor(Math.random() * (max - min + 1)) + min) - 1;
		var displayEffect = false;
		
		if ((max != 0) && (adLastShown == null || ((new Date() - adLastShown) > advertisingConfig.config.adServing.displayInterval))){

			console.log("Showing Ad Now");

			var initialEffectsDisplayed = getGameState().ads.initialEffectsDisplayed;

			// Check to see if we should display a special effect on the ad 
			if (initialEffectsDisplayed < advertisingConfig.config.adEffects.initialEffectCountBeforeRandom) {
				initialEffectsDisplayed++;
				setGameState_initialEffectsDisplayed(initialEffectsDisplayed);	
				displayEffect = true;
			}
			// calculate random change of it displaying
			else if (Math.random() < advertisingConfig.config.adEffects.chance) {
				displayEffect = true;
			}

			var ad = findAdById(displayableAds[index]);

			chrome.tabs.sendMessage(tabId, JSON.stringify({message: "showAd", payload: ad, payloadUserInfo: getUserInfo(), payloadAdEffects: displayEffect}), function(response) {
						// TODO handle error conditions
				});
		}
	};

	// Stores the zapped ad in our main array, and then persists it immediately to storage
	function zappedAd(info, sourceURL){
		console.log("ENTER: zapAd()");
		addZappedAd(info);
		awardXP();
		trackZapped(info.adId);
		updateDisplayableAds();
	};

	function displayedAd(info, sourceURL){
		console.log("ENTER: displayedAd()");
		addDisplayedAd(info);				
		trackDisplayed(info.adId);
		adLastShown = new Date();
		setGameState_adLastShwon(adLastShown);
	};	

	// Stores the details of ads we have vaporized for the user
	function vaporizedAd(info, sourceURL){
		console.log("ENTER: vaporizedAd()");
		addVaporizedAd(info);				
		trackVaporized(info.adId);
	};	
	
	// Stores the details of ads that have been clicked by the user
	function clickedAd(info, sourceURL){
		console.log("ENTER: clickedAd()");
		addClickedAd(info);
		awardXP();
		trackClicked(info.adId);
		openAdTarget(findAdById(info.adId).targetURL);
	};
		
	function openSettings(){
		chrome.tabs.create({url: "html/settings.html"});
	};

	function openAdTarget(targetURL){
		chrome.tabs.create({url: targetURL});
	};

	function reloadTrackedAds(){
		loadUserData();
		updateDisplayableAds();
	};
	
	function activateNuke(){
		setNuke();
		trackActivateNuke();
	};

	// Message handler for message requests from content scripts
	function scriptRequest(request, sender, sendResponse) {
		console.log("ENTER: scriptRequest()");
		var parsedRequest = JSON.parse(request);
		
		if (parsedRequest.message == "zap"){
			console.log("Received message: zap");
			console.log(parsedRequest.payload);
			zappedAd(parsedRequest.payload, sender.tab.url);
			sendResponse({}); // send empty response to close the connection
		}
		else if (parsedRequest.message == "displayed"){
			console.log("Received message: displayed");
			console.log(parsedRequest.payload);
			displayedAd(parsedRequest.payload, sender.tab.url);
			sendResponse({}); // send empty response to close the connection
		}
		else if (parsedRequest.message == "vaporized"){
			console.log("Received message: vaporized");
			console.log(parsedRequest.payload);
			vaporizedAd(parsedRequest.payload, sender.tab.url);
			sendResponse({}); // send empty response to close the connection
		}	
		else if (parsedRequest.message == "clicked"){
			console.log("Received message: clicked");
			console.log(parsedRequest.payload);
			clickedAd(parsedRequest.payload, sender.tab.url);
			sendResponse({}); // send empty response to close the connection
		}			
		else if (parsedRequest.message == "getZappedAds"){
			console.log("Received message: getZappedAds");
			sendResponse(JSON.stringify({payload: getZappedAdList(), payloadNuke: isNukeActive()})); // send regex list of zapped ads
		}
		else if (parsedRequest.message == "getUserInfoAndSettings"){
			console.log("Received message: getUserInfoAndSettings");
			loadUserData();  // TODO - should really handle this based on a message from settings to the extension to refresh itself after the settings have changed
			sendResponse(JSON.stringify({payloadUserInfo: getUserInfo(), payloadSettings: getSettings(), payloadGameState: getGameState()})); // send user information
		}
		else if (parsedRequest.message == "openSettings"){
			console.log("Received message: openSettings");
			openSettings();
			sendResponse({}); // send empty response to close the connection
		}
		else if (parsedRequest.message == "reloadTrackedAds"){
			console.log("Received message: reloadTrackedAds");
			reloadTrackedAds();
			sendResponse({}); // send empty response to close the connection
		}
		else if (parsedRequest.message == "activateNuke"){
			console.log("Received message: activateNuke");
			activateNuke();
			sendResponse({}); // send empty response to close the connection
		}
	};
	
	function setupScriptListeners(){
		console.log("ENTER: setupScriptListeners()");
		chrome.extension.onMessage.addListener(scriptRequest);
	};

	function setupURLChangeCheck(){
		console.log("ENTER: setupURLChangeCheck()");

		chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
				console.log("ENTER: chrome.tabs.onUpdated()");

				if (changeInfo.status == "complete"){
					console.log("tab updated complete");
					window.setTimeout(function() {urlChangeCallback(tabId, tab.url)}, 2500);		// Probably have to put this in for FB browsing - double check
					//urlChangeCallback(tabId, tab.url);
				}
			});
	};

	/* This URL change callback is flakey - check for better way to track tab change*/
	function urlChangeCallback(tabId, url){
		console.log("ENTER: urlChangeCallback()");
		trackOpenHost(parseUri(url).host);
		chrome.tabs.sendMessage(tabId, JSON.stringify({message: "process", payload: getZappedAdList(), payloadNuke: isNukeActive()}), function(response) {
					// TODO handle error conditions
			});		
	};

	function initAds(){
		console.log("ENTER: initAds()");

		var dataRef = new Firebase('https://adzap.firebaseio.com/');
		availableAds = [];

		dataRef.on('value', function(snapshot){

			console.log("updating from firebase")
			if (snapshot.val() !== null){
				advertisingConfig = snapshot.val();
				
				for(var i = 0; i < advertisingConfig.ads.length; i++) {
					availableAds[i] = advertisingConfig.ads[i].id;
				}

				updateDisplayableAds();
			};
		});

		adLastShown = new Date(getGameState().ads.adLastDisplayed);
	};

	// Initial setup of the main extension process
	function initExtension() {
		console.log("ENTER: initExtension()");
		setupScriptListeners();
		setupURLChangeCheck();
		setUpAnalytics();
		initUserInfo();
		trackLoad();
		initAds();
	};

	console.log("ENTER: background.js script");
	initExtension();

	//	var soaker = new Soak();
	//	var soakSettings = new SoakSettings();
