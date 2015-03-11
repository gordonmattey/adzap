// Retrieves the list of filters for ad serving URLs
// TODO - change to read this in from a file, .js JSON or another format? - maybe inject it from the background page
function getAdServersFilter(){
	var serversList = "cdn1\.clkads\.com|getadzap\.com\/ads|adzerk\.com|core\.videoegg\.com|cache\.specificmedia\.com|ads\.yimg\.com|ads\.yldmgrimg\.net|i\.cdn\.turner\.com\/ttn\/ttn_adspaces|fw\.adsafeprotected\.com|drmcmm\.baidu\.com|influads\.com|content\.yieldmanager\.edgesuite\.net|oascentral\.comcast\.net|img\.turn\.com|w\.p\.veruta\.com|googleadservices\.pagead\.com|pagead2\.googlesyndication\.com|publishers\.abaxinteractive\.com|media-aol\.pictela\.net|adassets\.foxnews\.com|cdn\.widgetserver\.com|usweb\.dotomi\.com|cdn\.uc\.atwola\.com|cdn\.statics\.live\.spongecell\.com|cdn\.eyewonder\.com|speed\.pointroll\.com|img-cdn\.mediaplex\.com|ds\.serving-sys\.com|s0\.2mdn\.net|ec\.atdmt\.com|view\.atdmt\.com|ads\.cnn\.com|i\.cdn\.turner\.com\\/cnn\\/cnn_adspaces|101m3\.com|103092804\.com|10pipsaffiliates\.com|1100i\.com|188server\.com|18clicks\.com|247realmedia\.com|2mdn\.net|360ads\.com|360yield\.com|365sbaffiliates\.com|3rdads\.com|43plc\.com|4affiliate\.net|600z\.com|777seo\.com|7search\.com|888\.com|888casino\.comp|888games\.com|888media\.net|888media\.net|888medianetwork\.com|888promos\.com|a433\.com|aa\.voice2page\.com|abtracker\.us|accuserveadsystem\.com|acf-webmaster\.net|acronym\.com|actiondesk\.com|activedancer\.com|ad-balancer\.net|ad-delivery\.net|ad-flow\.com|ad-sponsor\.com|ad20\.net|ad2games\.com|ad2games\.com|ad4game\.com|adaction\.se|adaos-ads\.net|adap\.tv|adbard\.net|adbasket\.net|adblade\.com|adboost\.com|adbrite\.com|adbroo\.com|adbull\.com|adbureau\.net|adbutler\.com|adcash\.com|adcastplus\.net|adcde\.com|adcentriconline\.com|adchap\.com|adchemical\.com|adclickmedia\.com|adcolo\.com|adcru\.com|addaim\.com|adecn\.com|adengage\.com|adf01\.net|adfactory88\.com|adform\.net|adfrog\.info|adfrontiers\.com|adfunkyserver\.com|adfusion\.com|adgalax\.com|adgardener\.com|adgatemedia\.com|adgear\.com|adgent007\.com|adgine\.net|adgitize\.com|adgroups\.com|adhese\.be|adhese\.com|adhese\.net|adhitzads\.com|adhostingsolutions\.com|adicate\.com|adimise\.com|adimpact\.com|adimperia\.com|adinterax\.com|adireland\.com|adisfy\.com|adisn\.com|adition\.com|adjal\.com|adjug\.com|adjuggler\.com|adjuggler\.net|adjuggler\.net|adk2\.com|adkick\.net|adknowledge\.com|adkonekt\.com|adlayer\.net|adlegend\.com|adlink\.net|adlisher\.com|adloaded\.com|adm\.fwmrm\.net/p/mtvn_live/|admagnet\.net|admamba\.com|adman\.gr|admarketplace\.net|admaya\.in|admedia\.com|admeld\.com|admeta\.com|admitad\.com|admixer\.net|admpads\.com|adnectar\.com|adnet-media\.net|adnet\.biz|adnet\.com|adnet\.ru|adnet\.vn|adnetwork\.com\.br|adnetwork\.net|cdn\.adnxs\.com|adnxs\.com|adocean\.pl|adoperator\.com|adoptim\.com|adorika\.com|adotube\.com|adparlor\.com|adpath\.mobi|adpay\.com|adperium\.com|adpinion\.com|adpionier\.de|adppv\.com|adpremo\.com|adprovi\.de|adprs\.net|adquest3d\.com|adready\.com|adreadytractions\.com|adresellers\.com|adrise\.de|adrocket\.com|adroll\.com|ads-stats\.com|ads2srv\.com|ads4cheap\.com|adsalvo\.com|adscale\.de|adscendmedia\.com|adsdk\.com|adsensecamp\.com|adserve\.com|adservinginternational\.com|adservpi\.com|adsfactor\.net|adsfast\.com|adsforindians\.com|adsfundi\.com|adsfundi\.net|adsfuse\.com|adshack\.com|adshopping\.com|adshost1\.com|adshuffle\.com|adsignals\.com|adsimilis\.com|adsmarket\.com|adsmarket\.es|adsmedia\.cc|adsnext\.net|adsonar\.com|adsovo\.com|adspdbl\.com|adspeed\.com|adspring\.to|adsrevenue\.net|adsrvr\.org|adsupermarket\.com|adsurve\.com|adsurve\.com|adsvert\.com|adswizz\.com|adtaily\.com|adtaily\.eu|adtech\.de|adtechus\.com|adtegrity\.net|adtgs\.com|adtoll\.com|adtology1\.com|adtology2\.com|adtology3\.com|adtoma\.com|adtomafusion\.com|adtoox\.com|adtotal\.pl|adtrgt\.com|adtrix\.com|adult-adv\.com|adultadworld\.com|adurr\.com|adv-adserver\.com|advatar\.to|adversaldisplay\.com|adversalservers\.com|adverserve\.net|advertarium\.com\.ua|adverticum\.net|advertise\.com|advertiseforfree\.co\.za|advertisegame\.com|advertiseyourgame\.com|advertising-department\.com|advertising\.com|advertisingiq\.com|advertisingpath\.net|advertisingvalue\.info|advertlead\.net|advertlets\.com|advertmarketing\.com|advertserve\.com|advertserve\.com|advertstatic\.com|advertstream\.com|advertxi\.com|advg\.jp|advgoogle\.com|adviva\.net|advmd\.com|advpoints\.com|adworkmedia\.com|adworldmedia\.com|adxpose\.com|adxpower\.com|adyoz\.com|adzerk\.net|adzouk\.com|adzs\.nl|afcyhf\.com|afdads\.com|aff\.biz|affbot1\.com|affbot3\.com|affbot7\.com|affbot8\.com|affbuzzads\.com|affec\.tv|affiliate-robot\.com|affiliate\.com|affiliate\.cx|affiliatebannerfarm\.com|affiliatefuel\.com|affiliatefuture\.com|affiliategateways\.co|affiliatelounge\.com|affiliatemembership\.com|affiliatesensor\.com|affiliationzone\.com|affiliproducts\.com|affimo\.de|affinity\.com|affiz\.net|afterdownload\.com|afy11\.net|agentcenters\.com|aggregateknowledge\.com|aim4media\.com|aimatch\.com|ajansreklam\.net|alchemysocial\.com|alfynetwork\.com|allabc\.com|alleliteads\.com|alloydigital\.com|alphabird\.com|alphabirdnetwork\.com|alphagodaddy\.com|alternads\.info|alternads\.info|am10\.ru|amazon-adsystem\.com|amazon-cornerstone\.com|amgdgt\.com|ampxchange\.com|anastasiasaffiliate\.com|andohs\.net|andomedia\.com|andomediagroup\.com|anrdoezrs\.net|apex-ad\.com|apmebf\.com|applifier\.com|arcadebannerexchange\.net|arcadebanners\.com|arcadebe\.com|areasnap\.com|arti-mediagroup\.com|as5000\.com|asklots\.com|assetize\.com|assoc-amazon\.co\.uk|assoc-amazon\.com|atdmt\.com|atemda\.com|atmalinks\.com|atwola\.com|audienceprofiler\.com|automateyourlist\.com|avads\.co\.uk|avantlink\.com|avazutracking\.net|awaps\.net|awempire\.com|awin1\.com|awltovhc\.com|axill\.com|azads\.com|azjmp\.com|azoogleads\.com|backbeatmedia\.com|banner-clix\.com|bannerbank\.ru|bannerblasters\.com|bannercde\.com|bannerconnect\.com|bannerconnect\.net|bannerexchange\.com\.au|bannerflux\.com|bannerignition\.co\.za|bannerjammers\.com|bannerlot\.com|bannerperformance\.net|bannerrage\.com|bannersmania\.com|bannersnack\.com|bannersnack\.net|bannersurvey\.biz|bannertgt\.com|baronsoffers\.com|bbelements\.com|beaconads\.com|belointeractive\.com|belvertising\.be|bestcasinopartner\.com|bestdeals\.ws|bestfindsite\.com|bestgameads\.com|besthitsnow\.com|bestofferdirect\.com|bet3000partners\.com|bet365affiliates\.com|bfast\.com|bidvertiser\.com|biemedia\.com|bin-layer\.de|bin-layer\.ru|bingo4affiliates\.com|binlayer\.com|binlayer\.de|bittads\.com|blamads\.com|blogads\.com|blueadvertise\.com|bluestreak\.com|bmanpn\.com|bnetworx\.com|bnmla\.com|bnr\.sys\.lv|boo-box\.com|boylesportsreklame\.com|bptracking\.com|br\.rk\.com|branchr\.com|brandreachsys\.com|brandreachsys\.com|bravenetmedianetwork\.com|bridgetrack\.com|brightshare\.com|btrll\.com|bu520\.com|buildtrafficx\.com|bunny-net\.com|burstnet\.com|busterzaster\.de|buysellads\.com|buzzparadise\.com|c-on-text\.com|c-planet\.net|c8\.net\.ua|canoeklix\.com|captainad\.com|carbonads\.com|carrier\.bz|casalemedia\.com|cash4members\.com|cashtrafic\.com|cb-content\.com|cbaazars\.com|cbclickbank\.com|cbclicks\.com|cc-dt\.com|cdn-image\.com|cdna\.tremormedia\.com|cgecwm\.org|chango\.com|charltonmedia\.com|checkm8\.com|checkmystats\.com\.au|checkoutfree\.com|chipleader\.com|chitika\.net|chronicads\.com|cjt1\.net|clash-media\.com|claxonmedia\.com|clayaim\.com|cleafs\.com|clear-request\.com|click2jump\.com|click4free\.info|clickad\.pl|clickbank\.net|clickbooth\.com|clickbubbles\.net|clickcash\.com|clickexa\.com|clickexperts\.net|clickfuse\.com|clickintext\.net|clicknano\.com|clicksor\.com|clicksor\.net|clicksurvey\.mobi|clickthrucash\.com|clickupto\.com|clickwinks\.com|clixgalore\.com|clixtrac\.com|coadvertise\.com|cogsdigital\.com|collection-day\.com|collective-media\.net|commission-junction\.com|commission\.bz|commissionmonster\.com|comscore\.com|conduit-banners\.com|connectedads\.net|connectionads\.com|connextra\.com|content-cooperation\.com|contenture\.com|contexlink\.se|contextuads\.com|contextweb\.com|coretarget\.co\.uk|cpaclicks\.com|cpalead\.com|cpays\.com|cpm\.biz|cpmstar\.com|cpmstar\.com|cpuim\.com|cpvtgt\.com|cpxadroit\.com|cpxinteractive\.com|crakmedia\.com|crazylead\.com|creditcards15x\.tk|crispads\.com|criteo\.com|criteo\.net|crowdgravity\.com|ctasnet\.com|ctm-media\.com|ctrhub\.com|cubics\.com|d\.m3\.net|d03x2011\.com|dapper\.net|dashboardad\.net|dating-banners\.com|datinggold\.com|dbbsrv\.com|dbclix\.com|decisionmark\.com|decisionnews\.com|decknetwork\.net|dedicatednetworks\.com|deepmetrix\.com|defaultimg\.com|deguiste\.com|demdex\.net|deplayer\.net|destinationurl\.com|dexplatform\.com|dgmaustralia\.com|digipathmedia\.com|digitrevenue\.com|dinclinx\.com|dipads\.net|directaclick\.com|directleads\.com|directorym\.com|directtrack\.com|dl-rms\.com|dollarade\.com|domainadvertising\.com|domainbuyingservices\.com|domainsponsor\.com|domdex\.com|dotomi\.com|pubads\.g\.doubleclick\.net|double\.net|doublepimp\.com|doublerecall\.com|dpbolvw\.net|drowle\.com|dsnextgen\.com|dsnr-affiliates\.com|dsultra\.com|dualmarket\.info|dynamicoxygen\.com|e-planning\.net|e-viral\.com|eads-adserving\.com|easy-adserver\.com|easyad\.com|easyhits4u\.com|ebannertraffic\.com|ebayobjects\.com\.au|ebayobjects\.com|eblastengine\.com|ebuzzing\.com|edgeads\.org|egamingonline\.com|ekmas\.com|emediate\.ch|emediate\.eu|emediate\.se|emjcd\.com|empiremoney\.com|engineseeker\.com|entrecard\.com|entrecard\.s3\.amazonaws\.com|epicgameads\.com|ero-advertising\.com|erovinmo\.com|escale\.to|etargetnet\.com|etology\.com|euroclick\.com|euros4click\.de|exelator\.com|exitexplosion\.com|exitjunction\.com|exoclick\.com|exoclick\.com|exponential\.com|eyereturn\.com|eyewond\.hs\.llnwd\.net|eyewonder\.com|fairadsnetwork\.com|fairfax\.com\.au|falkag\.net|fastclick\.net|feed-ads\.com|fidel\.to|fidel\.to|filtermomosearch\.com|fimserve\.com|findsthat\.com|firstadsolution\.com|firstlightera\.com|fixionmedia\.com|flashclicks\.com|flashtalking\.com|fluxads\.com|fmpub\.net|foodieblogroll\.com|foonad\.com|footerslideupad\.com|forex-affiliate\.net|forexyard\.com|forrestersurveys\.com|freebannerswap\.co\.uk|freedownloadsoft\.net|freelancer\.com|friendlyduck\.com|friendlyduck\.com|ftjcfx\.com|ftv-publicite\.fr|funklicks\.com|fusionads\.net|futureus\.com|fwmrm\.net|static\.doubleclick\.net|googleads\.g\.doubleclick\.net|g\.doubleclick\.net|gagenez\.com|galleyn\.com|gambling-affiliation\.com|game-advertising-online\.com|gameads\.com|gamecetera\.com|gamersbanner\.com|gannett\.gcion\.com|gate-ru\.com|geek2us\.net|geld-internet-verdienen\.net|geo-idm\.fr|geopromos\.com|gestionpub\.com|gettipsz\.info|ggncpm\.com|giantaffiliates\.com|gimiclub\.com|gklmedia\.com|globaladsales\.com|globaladv\.net|globaltakeoff\.net|gmads\.net|go2media\.org|go2speed\.org|goodadvert\.ru|googleadservicepixel\.com|googleadservices\.com|googletagservices\.com|goviral\.hs\.llnwd\.net|grabmyads\.com|gratisnetwork\.com|groovinads\.com|guardiandigitalcomparison\.co\.uk|gumgum\.com|gururevenue\.com|gwallet\.com|gx101\.com|halogennetwork\.com|harrenmedianetwork\.com|havamedia\.net|hb-247\.com|hit-now\.com|hits\.sys\.lv|hopfeed\.com|horse-racing-affiliate-program\.co\.uk|hosticanaffiliate\.com|hot-hits\.us|hotkeys\.com|hotptp\.com|httpool\.com|hypemakers\.net|hypervre\.com|iasbetaffiliates\.com|ibatom\.com|icdirect\.com|identads\.com|igameunion\.com|imedia\.co\.il|imglt\.com|imgwebfeed\.com|imho\.ru|imiclk\.com|impact-ad\.jp|implix\.com|impresionesweb\.com|impressionaffiliate\.mobi|impressioncontent\.info|impressionperformance\.biz|impressionvalue\.mobi|indiabanner\.com|indiads\.com|indianbannerexchange\.com|indianlinkexchange\.com|indicate\.to|indieclick\.com|industrybrains\.com|infinite-ads\.com|infinityads\.com|influads\.com|info4\.a7\.org|infolinks\.com|information-sale\.com|innity\.com|innovid\.com|insightexpress\.com|insightexpressai\.com|insitepromotion\.com|inskinad\.com|inskinmedia\.com|instantbannercreator\.com|instantdollarz\.com|instivate\.com|intellibanners\.com|intellitxt\.com|interclick\.com|intermarkets\.net|internetadbrokers\.com|interpolls\.com|intextscript\.com|inuvo\.com|investingchannel\.com|ipromote\.com|iwantmoar\.net|jango\.com|jangonetwork\.com|jdoqocy\.com|jdtracker\.com|jeetyetmedia\.com|jiwire\.com|joytocash\.com|js\.cdn\.ac|jscount\.com|jsfeedadsget\.com|jumboaffiliates\.com|justrelevant\.com|kanoodle\.com|kantarmedia\.com|keewurd\.com|kehalim\.com|kerg\.net|ketoo\.com|keywordblocks\.com|kitnmedia\.com|kliksaya\.com|klikvip\.com|klipmart\.com|komoona\.com|kontera\.com|kontextua\.com|kqzyfj\.com|krxd\.net|kumpulblogger\.com|lakequincy\.com|lanistaconcepts\.com|lbm1\.com|ldgateway\.com|lduhtrp\.net|leadacceptor\.com|leadad\.mobi|leadadvert\.info|leadbolt\.net|leadcola\.com|leadintelligence\.co\.uk|leetmedia\.com|letsgoshopping\.tk|liftdna\.com|ligatus\.com|lightningcast\.net|linkbuddies\.com|linkconnector\.com|linkexchange\.com|linkreferral\.com|links\.io|linkshowoff\.com|linksmart\.com|linkstorm\.net|linkwash\.de|linkworth\.com|linkz\.net|livepromotools\.com|liverail\.com|liveuniversenetwork\.com|loading-resource\.com|localadbuy\.com|logo-net\.co\.uk|lookit-quick\.com|looksmart\.com|loseads\.eu|lotteryaffiliates\.com|love-banner\.com|lqcdn\.com|lqw\.me|ltassrv\.com\.s3\.amazonaws\.com|ltassrv\.com|luminate\.com|lzjl\.com|madisonlogic\.com|makecashtakingsurveys\.biz|marbil24\.co\.za|markethealth\.com|marketingsolutions\.yahoo\.com|marketleverage\.com|marketnetwork\.com|matiro\.com|maxserving\.com|mb01\.com|mbn\.com\.ua|media-servers\.net|media-servers\.net|media6degrees\.com|mediaclick\.com|mediacpm\.com|mediaflire\.com|mediaforge\.com|mediag4\.com|mediagridwork\.com|medialation\.net|mediaonenetwork\.net|mediapeo\.com|mediaplex\.com|mediatarget\.com|mediatraffic\.com|medleyads\.com|medrx\.sensis\.com\.au|meendocash\.com|meetic-partners\.com|megacpm\.com|mercuras\.com|metaffiliation\.com|metrics\.io|meviodisplayads\.com|mezimedia\.com|mgcash\.com|microsoftaffiliates\.net|milabra\.com|mirago\.com|miva\.com|mixmarket\.biz|mixpo\.com|mktseek\.com|mmondi\.com|mmotraffic\.com|mokonocdn\.com|money4ads\.com|monkeybroker\.net|monsoonads\.com|mootermedia\.com|moregamers\.com|moreplayerz\.com|mpression\.net|msads\.net|my-layer\.net|my-layer\.net|myclickbankads\.com|mylinkbox\.com|mythings\.com|ad\.doubleclick\.net|nabbr\.com|nbjmp\.com|nbstatic\.com|neobux\.com|neodatagroup\.com|neoffic\.com|net-ad-vantage\.com|net3media\.com|netavenir\.com|netseer\.com|netshelter\.net|networkxi\.com|networldmedia\.net|neudesicmediagroup\.com|newsadstream\.com|newstogram\.com|newtention\.net|nexac\.com|nextmobilecash\.com|nicheads\.com|nobleppc\.com|northmay\.com|nowlooking\.net|nuggad\.net|nuseek\.com|nvero\.net|nxtck\.com|nyadmcncserve-05y06a\.com|oainternetservices\.com|obeus\.com|obibanners\.com|objects\.tremormedia\.com|objectservers\.com|oclus\.com|offeradvertising\.biz|offerforge\.com|offerserve\.com|oggifinogi\.com|omg2\.com|omguk\.com|onad\.eu|onads\.com|onenetworkdirect\.com|onenetworkdirect\.net|onlineadtracker\.co\.uk|onlinedl\.info|opensourceadvertisementnetwork\.info|openx\.com|openx\.net|openx\.org|opinionbar\.com|opt-intelligence\.com|optimizeadvert\.biz|orbengine\.com|othersonline\.com|overture\.com|oxado\.com|oxtracking\.com|p-advg\.com|pakbanners\.com|panachetech\.com|paperg\.com|partner\.video\.syndication\.msn\.com|partypartners\.com|paygear\.com|payperpost\.com|pc-ads\.com|peer39\.net|pepperjamnetwork\.com|perfb\.com|performance-based\.com|performanceadvertising\.mobi|performancetrack\.info|performancingads\.com|pgmediaserve\.com|pgmediaserve\.com|pgpartner\.com|pharmcash\.com|pheedo\.com|pianobuyerdeals\.com|picadmedia\.com|picbucks\.com|pinballpublishernetwork\.com|pixazza\.com|pixeltrack66\.com|platinumadvertisement\.com|playertraffic\.com|plenomedia\.com|plugerr\.com|pmsrvr\.com|pntra\.com|pntrac\.com|pntrs\.com|pointclicktrack\.com|pointroll\.com|popads\.net|popadscdn\.net|popcpm\.com|poponclick\.com|populis\.com|traffic\.com|postaffiliatepro\.com|powerlinks\.com|ppclinking\.com|ppctrck\.com|ppcwebspy\.com|precisionclick\.com|predictad\.com|primaryads\.com|pro-advertising\.com|pro-market\.net|proadsdirect\.com|probannerswap\.com|prod\.untd\.com|profitpeelers\.com|projectwonderful\.com|promotionoffer\.mobi|promotiontrack\.mobi|proximic\.com|psclicks\.com|ptmzr\.com|ptp\.lolco\.net|pubdirecte\.com|publicidees\.com|publisher\.to|publisheradnetwork\.com|pubmatic\.com|pulse360\.com|pulse360\.com|qdmil\.com|qksrv\.net|qksz\.net|qnsr\.com|questionmarket\.com|questus\.com|raasnet\.com|radiusmarketing\.com|rapt\.com|rbcdn\.com|rcads\.net|reachlocal\.com|reachmode\.com|realclick\.co\.kr|realmedia\.com|recomendedsite\.com|reelcentric\.com|reklamz\.com|resultlinks\.com|retargeter\.com|revenuegiants\.com|revenuemantra\.com|revfusion\.net|revresda\.com|revsci\.net|rewardsaffiliates\.com|rgadvert\.com|ricead\.com|ringtonematcher\.com|ringtonepartner\.com|ringtonepartner\.com|rmxads\.com|roicharger\.com|roirocket\.com|romance-net\.com|rotatingad\.com|rovion\.com|roxyaffiliates\.com|ru4\.com|rubiconproject\.com|rwpads\.com|s2d6\.com|sa\.entireweb\.com|safelistextreme\.com|salvador24\.com|saple\.net|saveads\.net|sbaffiliates\.com|scanscout\.com|scratchaffs\.com|search123\.uk\.com|seccoads\.com|secondstreetmedia\.com|secure-softwaremanager\.com|secureintl\.com|securesoft\.info|securewebsiteaccess\.com|seductionprofits\.com|sekindo\.com|selsin\.net|sendptp\.com|seriousfiles\.com|servali\.net|sev4ifmxa\.com|sexmoney\.com|shareasale\.com|sharegods\.com|shareresults\.com|shinobi\.jp|showyoursite\.com|simply\.com|sitebrand\.com|siteencore\.com|sitesense-oo\.com|skimlinks\.com|skimresources\.com|skoovyads\.com|slimtrade\.com/out\.php|slimtrade\.com|smart\.allocine\.fr|smart2\.allocine\.fr|smartadserver\.com|smarttargetting\.co\.uk|smarttargetting\.com|smarttargetting\.net|smowtion\.com|smpgfx\.com|snap\.com|so-excited\.com|sochr\.com|sociallypublish\.com|socialmedia\.com|socialspark\.com|sociocast\.com|sociomantic\.com|softonicads\.com|softpopads\.com|sonnerie\.net|sparkstudios\.com|sparkstudios\.com|specificclick\.net|specificmedia\.com|speedsuccess\.net|spinbox\.freedom\.com|splinky\.com|spongecell\.com|sponsorads\.de|sponsoredtweets\.com|sponsormob\.com|sponsorpalace\.com|sportsyndicator\.com|spotrails\.com|spottt\.com|spotxchange\.com|sproose\.com|srtk\.net|sta-ads\.com|starlayer\.com|statcamp\.net|stocker\.bonnint\.net|streamate\.com|struq\.com|sublimemedia\.net|suitesmart\.com|sumarketing\.co\.uk|suparewards\.com|supremeadsonline\.com|survey-poll\.com|surveyvalue\.mobi|surveyvalue\.net|surveywidget\.biz|symbiosting\.com|tacoda\.net|taggify\.net|tailsweep\.com|tapad\.com|targetnet\.com|targetpoint\.com|targetspot\.com|teasernet\.com|technoratimedia\.com|telemetryverification\.net|teracent\.net|testnet\.nl|text-link-ads\.com|textonlyads\.com|textsrv\.com|theloungenet\.com|thewebgemnetwork\.com|thewheelof\.com|tidaltv\.com|tiser\.com|tkqlhce\.com|tldadserv\.com|tlvmedia\.com|topauto10\.com|topcasino10\.com|total-media\.net|totalprofitplan\.com|totemcash\.com|tqlkg\.com|traceadmanager\.com|trackadvertising\.net|trackcorner\.com|tracking\.to|trackingoffer\.info|trackingoffer\.net|trackpath\.biz|trackpromotion\.net|tradedoubler\.com|tradepub\.com|tradetracker\.net|traff-advertazer\.com|trafficbarads\.com|trafficbroker\.com|trafficforce\.com|traffichaus\.com|traffichaus\.com|trafficjunky\.net|trafficmasterz\.net|trafficrevenue\.net|trafficwave\.net|trafficz\.com|traveladvertising\.com|travelscream\.com|travidia\.com|tredirect\.com|triadmedianetwork\.com|tribalfusion\.com|trigami\.com|trkalot\.com|trker\.com|tubemogul\.com|tutvp\.com|tutvp\.com|tvprocessing\.com|twinpinenetwork\.com|twinplan\.com|twistads\.com|twittad\.com|tyroo\.com|udmserve\.net|uiadserver\.com|ukbanners\.com|unanimis\.co\.uk|undertone\.com|unicast\.com|unicornmedia\.com|unlockr\.com|unrulymedia\.com|upliftsearch\.com|urlcash\.net|usbanners\.com|usemax\.de|usenetjunction\.com|usenetpassport\.com|usercash\.com|utarget\.co\.uk|v\.fwmrm\.net|v\.movad\.de|v2cigs\.com|validclick\.com|valuead\.com|valueaffiliate\.net|valueclick\.com|valueclickmedia\.com|valuecontent\.net|vcmedia\.com|vdopia\.com|velmedia\.net|vemba\.com|veoxa\.com|versetime\.com|vhmnetwork\.com|vianadserver\.com|vibrantmedia\.com|video-loader\.com|videoegg\.com|videoplaza\.com|videoplaza\.tv/proxy/distributor|videoplaza\.tv|videostrip\.com*/admatcherclient\.|adzmob\.com|amobee\.com|mkhoj\.com|mobgold\.com|mobpartner\.mobi|mocean\.mobi|mojiva\.com|sascdn\.com|smaato\.net|waptrick\.com|easyinline\.com|mysupercheap\.com|nsdsvc\.com|toprelatedtopics\.com|21sexturycash\.com|24x7adservice\.com|33traffic\.com|777-partner\.com|777partner\.com|aaovn\.info|adjunky\.com|adult-profit-files\.com|adultlinkexchange\.com|adultpopunders\.com|advmania\.com|adxpansion\.com|aeesy\.com|affiligay\.net|aipbannerx\.com|aipmedia\.com|angelpastel\.com|apromoweb\.com|belamicash\.com|belasninfetas\.org|bestssn\.com|board-books\.com|camads\.net|campartner\.com|campromos\.nl|cash-program\.com|cdn\.nsimg\.net|cennter\.com|clickthruserver\.com|clicktrace\.info|coldhardcash\.com|crocoads\.com|danzabucks\.com|data-ero-advertising\.com|desiad\.net|enoratraffic\.com|ero-advertising\.com|filthads\.com|filthads\.com|flashadtools\.com|fncash\.com|forgetstore\.com|fpctraffic2\.com|funcel\.mobi|gayadpros\.com|gridlockparadise\.com|gtsads\.com|hentaibiz\.com|highnets\.com|hotsocials\.com|imagehost123\.com|intrapromotion\.com|jackao\.net|juicyads\.com|juicycash\.net|k9x\.net|lovercash\.com|magical-sky\.com|mediagra\.com|meineserver\.com|methodcash\.com|mmaaxx\.com|mtoor\.com|mywebclick\.net|naiadsystems\.com|nastydollars\.com|nature-friend\.com|naughtyplayful\.com|newagerevenue\.com|otherprofit\.com|partnercash\.com|plugrush\.com|porkolt\.com|pornconversions\.com|portable-basketball\.com|privateseiten\.net|privatewebseiten\.com|promo4partners\.com|promowebstar\.com|redcash\.net|robotadserver\.com|rukplaza\.com|sascentral\.com|sexad\.net|sexad\.net|sexdatecash\.com|sexsearch\.com|sextracker\.com|socialsexnetwork\.net|startwebpromo\.com|sv2\.biz|targetingnow\.com|tinyweene\.com|trafficholder\.com|trafficpimps\.com|tubedspots\.com|twistyscash\.com|webcambait\.com|wetpeachcash\.com|whaleads\.com|wood-pen\.com|xfuckbook\.com|xhamstercams\.com|xxxex\.com|xxxlnk\.com|yazcash\.com";
	return serversList;
};

function createAdId(url){
	return hex_md5(url);
};

function processURL(url){
	// process the URL down to the domain and path - remove any parameters, these would probably be unique to this user or the specific request
	var urlSplit = url.toLowerCase().split(/\?|\;/)
	return urlSplit[0];
};


function addAd(docIndex, url, adzapTargetElement, adzapTargetId, adzapClickElement){
	var adId = createAdId(url)
	console.log("ENTER: addAd(adding docIndex=" + docIndex + " / adId=" + adId + " / url=" + url + " / adZapTargetId=" + adzapTargetId);
		
	adsInDocument.ads[adsInDocument.ads.length] = {docIndex: docIndex, adId: adId, adURL: url, adZapTargetElement: adzapTargetElement, adzapTargetId: adzapTargetId, adzapClickElement: adzapClickElement, displayedDate: new Date()};
	return adsInDocument.ads.length-1;
};

function getAd(index){
	console.log("ENTER: getAdId()");
	return adsInDocument.ads[index];
};

function zapAd(ad, fadeIt){
	console.log("ENTER: zapAd()" + ad);
	
	// hide the element
	if (fadeIt){
		//ad.adZapTargetElement.hide("fade", {}, 500);
		ad.adZapTargetElement.fadeOut(500);

	}
	else{
		ad.adZapTargetElement.hide();
	}

	// add some extra data to the information about being zapped
	ad.zappedDate = new Date();
		
	// send the ad information back to the extension
	chrome.extension.sendMessage(JSON.stringify({message: "zap", payload: {adId: ad.adId, adURL: ad.adURL, documentLocation: adsInDocument.documentURI, date: ad.zappedDate}}) /*, no response handler needed */);
};

function clickedAd(){
	console.log("ENTER: clickedAd()");

	// send the ad information back to the extension
	chrome.extension.sendMessage(JSON.stringify({message: "clicked", payload: {documentLocation: adsInDocument.documentURI, date: new Date()}}) /*, no response handler needed */);
};

// send the ad information back to the extension for ads that have already been zapped
function vaporizeAd(ad){
	console.log("ENTER: vaporizeAd()");
	
	ad.vaporizedDate = new Date();
	chrome.extension.sendMessage(JSON.stringify({message: "vaporized", payload: {adId: ad.adId, adURL: ad.adURL, documentLocation: adsInDocument.documentURI, date: ad.vaporizedDate}}) /*, no response handler needed */);
};

// send the ad information back to the extension, only sends ads that have not already been zapped
function displayedAds(adsInDoc){
	console.log("ENTER: displayedAds()");

	for (var i in adsInDoc.ads) {
		var ad = adsInDoc.ads[i];
		chrome.extension.sendMessage(JSON.stringify({message: "displayed", payload: {adId: ad.adId, adURL: ad.adURL, documentLocation: adsInDocument.documentURI, date: ad.displayedDate}}) /*, no response handler needed */);
	}
};

function listenForZaps(){
	
	// make sure we only have one listener
	if (!zapListenerActive){
		zapListenerActive = true;

		// Listen for events from the DOM for people zapping the ad - event data contains the index to the ad in the current document
		document.addEventListener('adzapZapEvent', function() { 

			// TODO Add check to make sure this event was dispatched from the window we trust
			console.log("ENTER: eventListener / adzapZapEvent");
			var eventData = JSON.parse(event.detail); 	
			zapAd(getAd(eventData.index), false);
		});	

	}
};

function extensionRequestForAdIdentifier(request, sender, sendResponse) {
	console.log("ENTER: extensionRequestForAdIdentifier()");
	var parsedRequest = JSON.parse(request);
	if (parsedRequest.message == "process"){
		adsToBlockList = parsedRequest.payload;
		isNukeActive = parsedRequest.payloadNuke;

		process();
		sendResponse({}); // send empty response to close the connection
	}

};


// process facebook, which is structured so we are going top down
// this function can be called multiple times in a single page load, because faceobok uses ajax and we need to process whenever the url changes
function processFacebookDocument(){
	
	console.log("processFacebookDocument()");
	
	//reset the ads and ray guns as this can be called over and over again because of ajax
	for(var i = 0, l = adsInDocument.ads.length; i < l ; i++){
    	$(adsInDocument.ads[i].adzapClickElement).off("click.az");
	}	

	adsInDocument.ads = [];  
	$(".btn-raygun-fb").remove();

	$("div[class='ego_unit']").each(function(elementIndex, element){

		var targetElement;
		var targetId;
		var elementSource;
		var adId;
		var adURL;
		var clickElement;
		
		console.log("found an element containing an ad");
		
		// TODO - switch to handling based on actual facebook ad id
		// TODO - handle when opening photo in lightbox
		// TODO - add block to request traffic for these ads...  we're seeing it too late.
		
		var fbAdData = JSON.parse($(element).attr('data-ego-fbid'));
		var fbAdId = fbAdData.adid;
		console.log('fbAdId=' + fbAdId);
		
		var fbAdImage = $(element).find("img");
		var fbAdURL = $(fbAdImage).attr('src');
		console.log('fbAdURL=' + fbAdURL);
		
		// get the source of the element and calculate the ad id
		adURL = processURL(fbAdURL);
		adId = createAdId(adURL);
		
		// Check for a match in the user's blocked list
		if (isNukeActive || adId.match(adsToBlockList)){
			$(element).hide();
			vaporizeAd({adId: adId, adURL: adURL});
		}
		else{ // no match found so process the element

			// check if the element already has a ray gun on it
				console.log("no match found so process the element");
				targetElement = $(element);
				targetId = $(element).attr("id");
				clickElement = $(element);
		}

		if (targetElement){
			var targetIndex = addAd(elementIndex, adURL, targetElement, targetId, clickElement);
			var $divRaygun = $("<a onclick='' class='btn-raygun-fb'></a>");		
			var startingElement = $(element).find("div[class='wrap']");
			
			// remove the x feedback mechanism	
			$(startingElement).find("a").remove();	
			$($divRaygun).on("click.az", function(event){event.stopImmediatePropagation(); event.preventDefault(); zapAd(getAd(targetIndex), true);});
			$(element).prepend($divRaygun);
			$(clickElement).on("click.az", function(event){clickedAd();});
		}
	});

	displayedAds(adsInDocument);
	listenForZaps();
};


function checkForIAB(element){

	var iabUnits = [{width: 970, height: 250},{width: 300, height: 600},{width: 300, height: 1050},{width: 970, height: 90},{width: 300, height: 250},{width: 180, height: 150},{width: 160, height: 600},{width: 728, height: 90},{width: 180, height: 160},{width: 550, height: 480},{width: 468, height: 60},{width: 234, height: 60},{width: 336, height: 280}];

	var i = 0;
	var foundMatch = false;

/*
	console.log("checkForIAB()");

	console.log("width=" + element.width + " / height=" + element.height);
	console.log(element);
*/
	while (!foundMatch && i < iabUnits.length)
	{
		if (element.height == iabUnits[i].height && element.width == iabUnits[i].width){
//			console.log("match found");
			foundMatch = true;
		}		
		
		i++;
	}	 

	return foundMatch;
};


function zapYouTubeAd(ad, trackZap) {
	console.log("ENTER: zapYouTubeAd()");

/*
	var is_html5 = $("#watch-player").find("video").length > 0;

	if (is_html5) {
		$("div.video-ads").hide();
	}
*/
	var newEmbed = $(ad.adZapTargetElement).clone();
	var videoId;

	if (location.href.indexOf("user") == -1){
		videoId = location.href.split("v=")[1].split("&")[0];

	}else{
		//videoId = $(newEmbed).attr("flashvars").split("&video_id=")[1].split("&")[0];
	}

	newEmbed.attr("src" , "http://www.youtube.com/v/" +
	               videoId +
	              "&version=3&autoplay=1&enablejsapi=1");
	$(ad.adZapTargetElement).remove();
	$(ad.adzapClickElement).prepend(newEmbed);
	//$(ad.adzapClickElement).off("mousedown.az", clickedAd);
	
	if (trackZap){
		// add some extra data to the information about being zapped
		ad.zappedDate = new Date();

		// send the ad information back to the extension
		chrome.extension.sendMessage(JSON.stringify({message: "zap", payload: {adId: ad.adId, adURL: ad.adURL, documentLocation: adsInDocument.documentURI, date: ad.zappedDate}}) /*, no response handler needed */);
	}
};

function processYouTubeDocument(){
	console.log("ENTER: processYouTubeDocument()");
	// var parentDiv = $("#watch-player,.player-container");
	var parentDiv = $("#watch7-player");

	var embed = $(parentDiv).children("embed");
	var flashvars = $(embed).attr("flashvars");
	//var preroll = flashvars.split("ad_preroll=")[1].split("&")[0];
	var adId = -1;
	var adURL = "";
	var targetIndex = addAd(adId, adURL, embed, 0, parentDiv);

	var divRaygun = $("<a id='adZap'></a>");	
	//$("#watch-headline-user-info,.upper-section").append(divRaygun);
	$("#watch-like-dislike-buttons").append(divRaygun);

	if (isNukeActive){
			// remove the ad
			zapYouTubeAd(getAd(targetIndex), false);
			vaporizeAd({adId: adId, adURL: adURL});
			$("#adZap").addClass("btn-raygun-yt-disabled");

	}
	else {
		// add the ray gun
		$("#adZap").on("click.az", function(event) {
			zapYouTubeAd(getAd(targetIndex), true);
			$("#adZap").off("click.az");
			$("#adZap").removeClass("btn-raygun-yt");
			$("#adZap").addClass("btn-raygun-yt-disabled");});
		
		$("#adZap").addClass("btn-raygun-yt");

		// set up click tracking
		//$(parentDiv).on("mousedown.az", clickedAd);
	}


};

function processHuluDocument(){

	var parentDiv = $("#player-container");
	var embed = $(parentDiv).children("embed");
	var newEmbed = $(embed).clone();

	newEmbed.attr("flashvars" , "content_id=60080457&user_id=-1&pgid=1&siteSessionId=9D7CA578E21820A2C6218299A2374A6C&userSocialIdentityIds=&socialPopupStatus=0&authCookie=null&isAuthVideo=false&startLoadWrapperTime=1338916567076&modes=4&initMode=1&sortBy=&referrer=http%3A%2F%2Fwww.hulu.com%2Fwatch%2F367364%2Fthe-secret-life-of-the-american-teenager-love-is-love&overrideBrand=&referralUrl=http%3A%2F%2Fwww.hulu.com%2Fmasthead.swf%3Fv2&spv=1");
	$(embed).remove();
	$(parentDiv).prepend(newEmbed);

};

function processDocument(documentToProcess){
	// process images, embeds and objects - whatever we can see that contains an ad..
	// always work at the lowest level.
	// never create wrapping div unless we need to - just keep it at the same level...

	// TODO - need to handle objects without embed tags - they exist (objects with data attr)
	// TODO - need to handle embed with immediate div - didn't work
	// div / a / img - no seem to work?
	// TODO - check undefined id on embed even though it exists - doubleclick // 
	// TODO - handle image ads served by publisher (so technically on their URL), but they click through to something like doubleclick..  our server filtering fails on this configuration

	// structural considerations
	// TODO - perhaps only make this only work with divs as the wrapping element - of one doesn't exist, then create it..  would make click tracking easier
	// TODO - add seearch for keywords in divs and urls to capture other ads - ad, ads, banner, advertisement
	// TODO - handle text based ads - constructed using tables usually.  and div has the identifier than it is an ad
	// TODO - look for ad verification pixels to see where there are ads..
	
	console.log("processDocument(" + documentToProcess.location.href + ")");
	
	// just run against the current document context - don't use passed in document

	// how do abp and chromeadblock process regex on the list? can we use their list?
	$("embed,img").filter(function() { 
			//console.log("checking element=" + this)
		// add object here - but needs to pull different part of the data - object vars - ?
			return (this.src.match(getAdServersFilter()) || checkForIAB(this));
		}).each(function(elementIndex, element){

		var targetElement;
		var targetId;
		var elementSource;
		var adId;
		var adURL;
		var bProcessRayGunNow = false;
		
		console.log("found an element containing an ad - " + $(element).attr('src')	);

		// get the source of the element and calculate the ad id
		adURL = processURL($(element).attr('src'));
		adId = createAdId(adURL);
		
		console.log("Checking adId=" + adId);
		// Check for a match in the user's blocked list
		// TODO - process blocked list at document start onbeforeload rather than after
		if (isNukeActive || adId.match(adsToBlockList)){
			console.log("vaporize match found for  adId=" + adId);

			// for testing, mark as vaporized and slowly hide the ad
			//$(element).before("<div class=\"vaporized\">VAPORIZED</div>");
			$(element).hide();
		
			vaporizeAd({adId: adId, adURL: adURL});
		}
		else{ // no match found so process the element
			console.log("no match found so process the element " + adURL);
			// check to see if there is an immediate wrapping object to use as the ad zap target
			// TODO what happens if there is no element id?  create one and give it to the element?  have seen this on some embeds
			// Perhaps we should at least check if element doesn't have at least one of class name, ID or URL, before giving up
			if ($(element).is("img")){
				// image tags require extra handling 
				// create a wrapping div with a unique id that we can reference to close it
				console.log('element is actually an image');

				// add a load handler to the image to make sure it's not a tracking pixel - 0x0 or 1x1 image, or the adchoices logo
				//attr("height")
				if(element.complete){
					console.log("image already loaded height="+element.height);
					if (element.height <= 20){
						bProcessRayGunNow = false;
					}
					else{
						bProcessRayGunNow = true;
						targetId = "adzap-" + Math.floor( Math.random()*99999 );
						$(element).parent().wrap("<div class='adraygun' id='" + targetId + "'/>");
						targetElement = $(element).parent().parent();
						targetId = $(element).parent().parent().attr("id");		
					}
  				}
  				else{
  					bProcessRayGunNow = false;
					$(element).load(function () { 
						console.log("image loaded height="+this.height);
						if (this.height > 20){
							targetId = "adzap-" + Math.floor( Math.random()*99999 );
							$(this).parent().wrap("<div class='adraygun' id='" + targetId + "'/>");
							targetElement = $(this).parent().parent();
							targetId = $(this).parent().parent().attr("id");									
							var targetIndex = addAd(elementIndex, adURL, targetElement, targetId, element);
							addRayGun(this, targetIndex);

							// TODO - ads added here don't get counted toward the display count
							// TODO - this is a mix of variables from calling block plus some in the context - should be consistent..
						}
					}); 
  				}
			}
/*			else if ($(element).is("object")){
				console.log('element is an object, searching for an embed to see if we need to handle it');
				if ($(element).find("embed").length == 0){
					targetId = "adzap-" + Math.floor( Math.random()*99999 );
					$(element).wrap("<div class='adraygun' id='" + targetId + "'/>");
					targetElement = $(element).parent();
					targetId = $(element).parent().attr("id");					
				}
			}
*/			// we are only looking for img and embed, so the rest of this logic is for embeds
			else if ($(element).parent().is("object")){
				console.log('enclosing element is object');
				targetElement = $(element).parent();
				targetId = $(element).parent().attr("id");
				bProcessRayGunNow = true;
			}
			else if ($(element).parent().is("div")){
				console.log('enclosing element is div');
				targetElement = $(element).parent();
				targetId = $(element).parent().attr("id");

				// if the id is not set, let's give it one so we have a reference to the element
				if (targetId == null){
					targetId = Math.floor( Math.random()*99999 );
					 $(element).parent().attr("id", targetId);
				}

				bProcessRayGunNow = true;
			}
			else if ($(element).parent().is("body")){
				console.log('enclosing element is body');
				targetElement = $(element);
				targetId = $(element).attr("id");		
				bProcessRayGunNow = true;
			}
			else{ 
				console.log('enclosing element is unknown - wrapping in div');
				targetId = "adzap-" + Math.floor( Math.random()*99999 );
				$(element).wrap("<div class='adraygun' id='" + targetId + "'/>");
				targetElement = $(element).parent();
				targetId = $(element).parent().attr("id");
				bProcessRayGunNow = true;
			}
			
			// TODO change to only add the ad, if we intend to process it			
			if (bProcessRayGunNow){
				var targetIndex = addAd(elementIndex, adURL, targetElement, targetId, element);
				addRayGun(element, targetIndex);
			}
		}
	});
	
	displayedAds(adsInDocument);
	
	listenForZaps();
	
};

function addRayGun(pElement, pTargetIndex){
	console.log("ENTER: addRayGun()");  //e.preventDefault(); e.stopPropagation(); 
	var $divRaygun = $("<a onclick='this.style.display=\"none\"; var d = document.createEvent(\"CustomEvent\"); d.initCustomEvent(\"adzapZapEvent\", true, true, JSON.stringify({index: " + pTargetIndex + "})); document.dispatchEvent(d);' class='btn-raygun'></a>");		
	
	// add click tracking to the target element
	if ($(pElement).is("img")){
		$(pElement).parent().before($divRaygun);	
		$(pElement).click(clickedAd);
	}
	else if ($(pElement).parent().is("object")){
		var flashAdId = "adzap-flashad-" + Math.floor( Math.random()*99999 );
		$(pElement).parent().wrap("<div id='" + flashAdId + "' style='z-index: 999998'/>");  // TODO - create a class for this div and move it to the section above - or move the image stuff down here...  // TODO - is this causing flash reload?
		$(pElement).parent().parent().before($divRaygun);											
		$("#" + flashAdId).mousedown(clickedAd);
	}
	else if ($(pElement).parent().is("body")){
		$(pElement).before($divRaygun);	
		$(pElement).parent().click(clickedAd);
	}
	else if ($(pElement).parent().is("div")){
		//$(pElement).parent().wrap("<div id='" + flashAdId + "' style='z-index: 999998'/>");  // TODO - create a class for this div and move it to the section above - or move the image stuff down here...
		$(pElement).parent().before($divRaygun);	
		$(pElement).parent().mousedown(clickedAd);
	}
	else{
		$(pElement).before($divRaygun);	
		$(pElement).click(clickedAd);
	}				
};

// Response handler from extension to load ads, which kicks off the process for loading the document
function adLoader(response) {
	console.log("ENTER: adLoader()");
	adsToBlockList = JSON.parse(response).payload;
	isNukeActive = JSON.parse(response).payloadNuke;

	console.log("isNukeActive =" + isNukeActive);

	console.log("Previously zapped ads=" + adsToBlockList);
	
	// let's kick off the process to block ads or show the ray gun
	process();	
	
};

function process(){
	console.log("ENTER: process()");

	// check to see if we've already processed this page, this function can get called too many times on a single page load
	console.log("window.location.href=" + window.location.href);
	console.log("lastURLProcessed=" + lastURLProcessed);
	if (window.location.href != lastURLProcessed){

		if (adsInDocument.documentURI == "www.facebook.com" || adsInDocument.documentURI == "apps.facebook.com"){
			processFacebookDocument();
			//var container = document.getElementById ("rightCol");
			//container.addEventListener ('DOMSubtreeModified', processFacebookDocument, false);
		}
		else if (adsInDocument.documentURI == "www.youtube.com"){
			processYouTubeDocument();
			processDocument(document);
		}
		else if (adsInDocument.documentURI == "www.hulu.com"){
			//processHuluDocument();
		}
		else {		
			processDocument(document);
		}

		// keep track of what we just processed so we don't do it again
		lastURLProcessed = window.location.href;
	}
};



	// STARTING POINT FOR CONTENT SCRIPT
	console.log("ENTER: adidentifier.js - loading document - document.location.href="+document.location.href);

	var domain = document.location.hostname;
	var adsInDocument = {documentURI: domain};
	adsInDocument.ads = [];
	var adsToBlockList = null;
	var lastURLProcessed = null;
	var isNukeActive = false;
	var zapListenerActive = false;

	// Request already zapped ads from the extension
	chrome.extension.sendMessage(JSON.stringify({message: "getZappedAds"}), adLoader);

	chrome.extension.onMessage.addListener(extensionRequestForAdIdentifier);