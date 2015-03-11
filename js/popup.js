function load(){
	var userInfo = getUserInfo();
	var settings = getSettings();
	var levelUp = parseInt(userInfo.level) + 1;
		
	$("#levelPercentageProgress").css("width", userInfo.progress+"%");

	$("#levelBelow").html("<h2>Level " + userInfo.level + "</h2>");
	$("#levelAbove").html("<h2>Level " + levelUp + "</h2>");			
	$("#totalZaps").html("<h3>" + userInfo.adsZapped + "</h3>");
	$("#totalVaporized").html("<h3>" + userInfo.adsVaporized + "</h3>");
	$("#totalClicked").html("<h3>" + userInfo.adsClicked + "</h3>");
	$("#totalDisplayed").html("<h3>" + userInfo.adsDisplayed + "</h3>");

	$("#totalXP2").html("<h3>" + userInfo.xp + " XP</h3>");
	$("#tips2,#tips3,#tips4").tooltip();
};

$(document).ready(function(){
	initUserInfo();
	load();

});
		
