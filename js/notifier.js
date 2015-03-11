var userInfo;
var settings;
var gameState;

var iAlert = 0;

function newAlert (type, message) {
	console.log("ENTER: newAlert()");
    $("#az-notification-list").append($("<div id='alert-" + ++iAlert + "' class='az-alert az-alert-" + type + " az-fade in'>" + message + "</div>")); // <a class='close' data-dismiss='alert'>x</a>
    $("#alert-" + iAlert).delay(3500).fadeOut("slow", function () { $(this).remove(); });
};

function setNotification(userNotification){
	console.log("ENTER: setNotification()");
	newAlert("xp-notify", userNotification.message)
};

function setMainStatus(userInfo){
	console.log("ENTER: setMainStatus()");
	
	var element = $("#az-main-status-info");
		// hide the main status window if user has set it that way or show the current XP and level
	if (!settings.alwaysShowXPCounter){
		$(element).hide();
	}
	else {
		$(element).html("<strong>" + userInfo.xp + " XP" + "</strong><br/>Level " + userInfo.level);
	}

	// only show the nuke element if it can be activated
	var nukeElement = $("#az-main-status-nuke");
	if (!settings.alwaysShowNuke && gameState.nuke.state < 5){
		$(nukeElement).hide();
	}
};

function resetView(){
	chrome.extension.sendMessage(JSON.stringify({message: "getUserInfoAndSettings"}), userInfoLoader);
};

function activateNuke(){
	console.log("ENTER: activateNuke()");

	chrome.extension.sendMessage(JSON.stringify({message: "activateNuke", payload: ""}) /*, no response handler needed */);
	resetView();
};


// Message handler for message requests from the extension
function extensionRequest(request, sender, sendResponse) {
	console.log("ENTER: extensionRequest()");
	var parsedRequest = JSON.parse(request);
	if (parsedRequest.message == "notifyUser"){
		console.log("Received message: notifyUser=" + parsedRequest);
		
		// only show notifications if the user wants them
		if (settings.showNotificationsXP){
			
			for (var iNotification = 0; iNotification < parsedRequest.userNotifications.length; iNotification++){
				setNotification(parsedRequest.userNotifications[iNotification]);
			}
		}
		
		sendResponse({}); // send empty response to close the connection
	}
	else if (parsedRequest.message == "updateStatus"){
		console.log("Received message: updateStatus");
		resetView();
		sendResponse({}); // send empty response to close the connection
	}
};

function userInfoLoader(response) {
	console.log("ENTER: userInfoLoader()");
	userInfo = JSON.parse(response).payloadUserInfo;
	settings = JSON.parse(response).payloadSettings;
	gameState = JSON.parse(response).payloadGameState;
	setMainStatus(userInfo);
	$("#az-main-status-info").off("click");

	// TODO - switch to using an object with the game state
	switch(gameState.nuke.state)
	{
		case 0:
	  		break;
	 	case 1:
			$("#az-main-status-nuke").addClass('az-nuke-charging0');
	  		$("#az-main-status-nuke").prop("title", "MegaZap Charging")
	  		break;
	 	case 2:
			$("#az-main-status-nuke").addClass('az-nuke-charging1');
	  		$("#az-main-status-nuke").prop("title", "MegaZap Charging")
	  		break;
	 	case 3:
			$("#az-main-status-nuke").addClass('az-nuke-charging2');
	  		$("#az-main-status-nuke").prop("title", "MegaZap Charging")
	  		break;
	 	case 4:
			$("#az-main-status-nuke").addClass('az-nuke-charging3');
	  		$("#az-main-status-nuke").prop("title", "MegaZap Charging")
	  		break;
	 	case 5:
			$("#az-main-status-nuke").addClass('az-nuke-ready');
	  		$("#az-main-status-nuke").prop("title", "MegaZap Ready. Click to Activate")
	  		$("#az-main-status-nuke").css('opacity', "1");
			$("#az-main-status-nuke").click(activateNuke);
	  		break;
	 	case 6:
	  		$("#az-main-status-nuke").addClass('az-nuke-active');
	  		$("#az-main-status-nuke").prop("title", "MegaZap Active")
			$("#az-main-status-nuke").off("click");
	  		break;
 	}		

	// TODO - need to change this to be re-entrant through DOM, vs a direct call.  double check on the recommended method, I think this could be an issue
	$("#az-main-status-info").click(openSettings);

};

function openSettings(){
	chrome.extension.sendMessage(JSON.stringify({message: "openSettings"}));
};


// STARTING POINT FOR CONTENT SCRIPT
console.log("ENTER: notifier.js - loading document - document.location.href="+document.location.href);

var notificationDiv = "";
notificationDiv += "<div class=\"az-notification-area\">";
notificationDiv += "	<div class=\"az-row\">";
notificationDiv += "		<div class=\"az-span2\">";
notificationDiv += "			<div id=\"az-notification-list\"></div>";
notificationDiv += "		</div>";
notificationDiv += "	</div>";
notificationDiv += "	<div class=\"az-row\">";
notificationDiv += "		<div class=\"az-span2\">";
notificationDiv += "			<div id='az-main-status'>";
notificationDiv += "				<div id='az-main-status-info' class='az-main-status-info' title='Click for Options'></div>";
notificationDiv += "				<div id='az-main-status-nuke' class='az-main-status-nuke'></div>";
notificationDiv += "			</div>";
notificationDiv += "		</div>";
notificationDiv += "	</div>";
notificationDiv += "</div>";

$('body').append(notificationDiv);

// Set up listeners for updates coming from the extension
chrome.extension.onMessage.addListener(extensionRequest);

// Send a request to the extensions to get the user info
resetView();




