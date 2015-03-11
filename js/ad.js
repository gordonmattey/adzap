var iAlert = 0;
var userInfo;
var settings;
var gameState;

function showAd(ad){
	console.log("ENTER: showAd()");
	
	if (iAlert == 0){
		++iAlert;
		var adId = "az-ad-" + ad.id;
		var raygunId = "az-ad-raygun-" + ad.id;

		var adDiv = "";
		adDiv += "<div id='" + adId + "' class='azslide' style=''>";
		adDiv += "	<div id='testquick' class='aznotif' style='margin-left:317px;'>";
		adDiv += "		<div id='" + raygunId + "' class='az-notifgun'></div>";
		adDiv += "		<div id='az-score' class='az-notifgunscore'>" + userInfo.xp + " XP</div>";
		adDiv += "		<div style='font-weight:bold'>" + ad.title + "</div>" + ad.description + "";
		adDiv += "	</div>";
		adDiv += "</div>";

		$("#az-ad-list").append(adDiv); 

		var displayEffectCode = ["explode", "clip", "blind", "fold"];
		var effectToUse = "fade";

		if (displayEffects)
		{
			var min = 1;
			var max = displayEffectCode.length;;
			var index = (Math.floor(Math.random() * (max - min + 1)) + min) - 1;

			effectToUse = displayEffectCode[0];
		}

		$("#" + adId).on("click.az", function(event){openAd(ad.id);$("#"+adId).hide()});
		$("#" + raygunId).on("click.az", function(event){event.stopImmediatePropagation(); event.preventDefault(); zapAd(ad.id); $("#"+adId).effect(effectToUse);});
		$("#az-score").on("click.az", function(event){event.stopImmediatePropagation(); event.preventDefault(); openSettings();});
	//	$("#" + adId).animate({width: 'toggle'}, 500);
	//	$("#" + adId).show("slide", { direction: "right" }, 0);

	var marginLefty = $("#testquick");

	window.setTimeout(function(){
	    marginLefty.animate({
	      marginLeft: parseInt(marginLefty.css('marginLeft'),10) == 0 ?
	        marginLefty.outerWidth() :
	        0
	    });
	
		chrome.extension.sendMessage(JSON.stringify({message: "displayed", payload: {adId: ad.id, documentLocation: currentDomain, date: new Date()}}));

	}, 2000);		// display as quickly as possible after two seconds - not ever tied into page load.


	}
};

function openAd(id){
	console.log("ENTER: openAd()");
	chrome.extension.sendMessage(JSON.stringify({message: "clicked", payload: {adId: id, documentLocation: currentDomain, date: new Date()}}));
	iAlert--;

};

function zapXAd(id){
	console.log("ENTER: zapAd()");
	chrome.extension.sendMessage(JSON.stringify({message: "zap", payload: {adId: id, documentLocation: currentDomain, date: new Date()}}));
	iAlert--;
};

// Message handler for message requests from the extension
function adRequest(request, sender, sendResponse) {
	console.log("ENTER: adRequest()");
	var parsedRequest = JSON.parse(request);
	if (parsedRequest.message == "showAd"){
		console.log("Received message: showAd=" + parsedRequest);
		
		// only show notifications if the user wants them
		/*
		if (settings.showNotificationsXP){
			
			for (var iNotification = 0; iNotification < parsedRequest.userNotifications.length; iNotification++){
				setNotification(parsedRequest.userNotifications[iNotification]);
			}
		}
		*/

		userInfo = parsedRequest.payloadUserInfo;
		displayEffects = parsedRequest.payloadAdEffects;
		showAd(parsedRequest.payload);
		sendResponse({}); // send empty response to close the connection
	}
	/*
	else if (parsedRequest.message == "updateStatus"){
		console.log("Received message: updateStatus");
		resetView();
		sendResponse({}); // send empty response to close the connection
	}
	*/
};

function openSettings(){
	chrome.extension.sendMessage(JSON.stringify({message: "openSettings"}));
};

// Content Script Entry Point 
console.log("ENTER: ad.js");

var currentDomain = document.location.hostname;

var notificationDiv = "";
notificationDiv += "<div class=\"az-ad-display-area\">";
notificationDiv += "	<div class=\"az-row\">";
notificationDiv += "		<div class=\"az-span4\">";
notificationDiv += "			<div id=\"az-ad-list\"></div>";
notificationDiv += "		</div>";
notificationDiv += "	</div>";
notificationDiv += "</div>";

$('body').append(notificationDiv);

// Set up listeners for updates coming from the extension
chrome.extension.onMessage.addListener(adRequest);
