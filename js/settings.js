function newAlert (type, message) {
    $("#alert-area").append($("<div id='alert-1' class='alert alert-" + type + " fade in' data-alert><a class='close' data-dismiss='alert' href='#'>&times;</a>" + message + "</div>"));
    $("#alert-1").delay(2000).fadeOut("slow", function () { $(this).remove(); });
};

function load(){
	console.log("ENTER: load()");
	var userInfo = getUserInfo();
	var settings = getSettings();
	var levelUp = parseInt(userInfo.level) + 1;

	console.log(userInfo);
	console.log(settings);

	$("#levelPercentageProgress").css("width", userInfo.progress+"%");

	$("#levelBelow").html("<h2>Level " + userInfo.level + "</h2>");
	$("#levelAbove").html("<h2>Level " + levelUp + "</h2>");			
	$("#totalZaps").html("<h3>" + userInfo.adsZapped + "</h3>");
	$("#totalClicked").html("<h3>" + userInfo.adsClicked + "</h3>");
	$("#totalDisplayed").html("<h3>" + userInfo.adsDisplayed + "</h3>");

	$("#totalXP2").html("<h3>" + userInfo.xp + " XP</h3>");
/*
	$("#checkboxShowNotificationsXP").prop("checked", settings.showNotificationsXP);
	$("#checkboxShowNotificationsLevelUp").prop("checked", settings.showNotificationsLevelUp);
	$("#checkboxShowRayGun").prop("checked", settings.alwaysShowRayGun);
	$("#checkboxShowNuke").prop("checked", settings.alwaysShowNuke);
	$("#checkboxShowScoreCounter").prop("checked", settings.alwaysShowXPCounter);
*/
	$("#selectRemember").val(settings.rememberAds);			
};

function save(){
	console.log("ENTER: save()");
	var settings = getSettings();
	settings.rememberAds = $("#selectRemember").val();
/*	settings.showNotificationsXP = $("#checkboxShowNotificationsXP").prop("checked");
	settings.showNotificationsLevelUp = $("#checkboxShowNotificationsLevelUp").prop("checked");
	settings.alwaysShowRayGun = $("#checkboxShowRayGun").prop("checked");
	settings.alwaysShowXPCounter = $("#checkboxShowScoreCounter").prop("checked");
	settings.alwaysShowNuke = $("#checkboxShowNuke").prop("checked");
*/
	setSettings(settings);
	newAlert("success", "Your changes have been saved.")
};

$(document).ready(function(){
	console.log("ENTER: doc ready");
	initUserInfo();
	load();
	$("#selectRemember").change(save);
/*	$("#checkboxShowNotificationsXP").change(save);
	$("#checkboxShowNotificationsLevelUp").change(save);
	$("#checkboxShowRayGun").change(save);
	$("#checkboxShowScoreCounter").change(save);
	$("#checkboxShowNuke").change(save);
*/
	$("#tips1,#tips2,#tips3,#tips4").tooltip();

	// add click handler for onclick on reset button
	$("#resetAll").on("click", function(){
		resetTrackedAds();
		newAlert('success', 'Your changes have been saved.');
	});

});