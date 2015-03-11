	

	var _gaq = _gaq || [];	
	var userNotifications = [];
	var message = ["Whoa! Nice shot, partner.","Nice shot, partner.","Nice Zap!","Nice Zap!","Nice Zap!","Looks like there's a new sheriff in town.","Great shot! You're a natural.","Zapped!","Zapped!","Zapped!","Zapped!","Zapped!","Zapped!","Great shot!","Zzzzzzzap!","Wow, you're good at this!","You're on a roll!","Zap master!","See ya!","Bull's-eye! ","Bull's-eye!","That ad is vaporized!","That ad didn't stand a chance.","Where'd you learn to zap like that?","Nice shot!","Nice shot!"];
	
	function setUpAnalytics(){
		console.log("ENTER: setUpAnalytics()");
		_gaq.push(['_setAccount', 'UA-29586062-1']);

	    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	     ga.src = 'https://ssl.google-analytics.com/ga.js';
	     //ga.src = 'http://www.google-analytics.com/ga.js';
	     var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);

	    (function(c,a){window.mixpanel=a;var b,d,h,e;b=c.createElement("script");
	    b.type="text/javascript";b.async=!0;b.src='https://cdn.mxpnl.com/libs/mixpanel-2.2.min.js';d=c.getElementsByTagName("script")[0];
	    d.parentNode.insertBefore(b,d);a._i=[];a.init=function(b,c,f){function d(a,b){
	    var c=b.split(".");2==c.length&&(a=a[c[0]],b=c[1]);a[b]=function(){a.push([b].concat(
	    Array.prototype.slice.call(arguments,0)))}}var g=a;"undefined"!==typeof f?g=a[f]=[]:
	    f="mixpanel";g.people=g.people||[];h=['disable','track','track_pageview','track_links',
	    'track_forms','register','register_once','unregister','identify','alias','name_tag',
	    'set_config','people.set','people.increment','people.track_charge','people.append'];
	    for(e=0;e<h.length;e++)d(g,h[e]);a._i.push([b,c,f])};a.__SV=1.2;})(document,window.mixpanel||[]);
	    mixpanel.init("9424ec6fc8ee30157bf8fe29d3093805");

	};

	function trackZapped(id){
		console.log("ENTER: trackZapped()");
		_gaq.push(['_trackEvent', 'Ad', 'Zapped', id]);
		mixpanel.track("Ad Zapped", {"adid": id}); 		
	};

	function trackActivateNuke(){
		console.log("ENTER: trackActivateNuke()");
		_gaq.push(['_trackEvent', 'Ad', 'MegaZap']);
		mixpanel.track("Nuke Activated"); 		
	};
	
	function trackVaporized(id){
		console.log("ENTER: trackVaporized()");
		_gaq.push(['_trackEvent', 'Ad', 'Vaporized', id]);		
		//mixpanel.track("Ad Vaporized"); 		
	};

	function trackDisplayed(id){
		console.log("ENTER: trackDisplayed()");
		_gaq.push(['_trackEvent', 'Ad', 'Displayed'], id);
		//mixpanel.track("Ad Displayed", {"adid": id});			
	};

	function trackClicked(id){
		console.log("ENTER: trackClicked()");
		_gaq.push(['_trackEvent', 'Ad', 'Clicked', id]);		
		mixpanel.track("Ad Clicked", {"adid": id});		
	};
			
	function trackLoad(){
		console.log("ENTER: trackLoad()");
		_gaq.push(['_trackEvent', 'Extension', 'Loaded']);	
		mixpanel.track("Extension Loaded"); 		
	};

	function trackInstall(){
		console.log("ENTER: trackInstall()");
		_gaq.push(['_trackEvent', 'Extension', 'Installed']);	
		mixpanel.track("Extension Installed"); 		

	};

	function trackOpenHost(host){
		console.log("ENTER: trackOpenHost() " + host);
		_gaq.push(['_trackEvent', 'Extension', 'OpenHost', host]);	

	};

	function trackInstallConfirmPage(){
		console.log("ENTER: trackInstall()");
		_gaq.push(['_trackEvent', 'Extension', 'Viewed Install Confirm']);	
		mixpanel.track("Viewed Install Confirm"); 		

	};
