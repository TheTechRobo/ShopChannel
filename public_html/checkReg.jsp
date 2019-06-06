<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>PLEASE WAIT</title>
	<script type="text/javascript" src="js/wiicore.js"></script>
	<script type="text/javascript">
    function init()
    {

    var s = navigator.userAgent.toLowerCase();
    wii = s.indexOf('wii shop channel') + 1;
    opera = s.indexOf('opera') + 1;
    msie = false;
    if (!opera) {
    msie = s.indexOf('msie') + 1;
    wii = false;
    }
    useSyncRegistration = ("getVersion" in ec && "syncRegistration" in ec);
    }
        function initPageCommon() {
            init();
            var isShoppingManualEnabled = "true";
            shop.beginWaiting();
            document.getElementById('debug').value = 1;
            ecTimeout = new ECTimeout(parseInt("60000"));
			// There seems to be an issue with the JS running here.
            ec.cancelOperation();
            document.getElementById('debug').value = 2;
            ecsUrl = 'https://soapy.oscwii.org/ecs/services/ECommerceSOAP';
            document.getElementById('debug').value = 3;
            iasUrl = 'https://soapy.oscwii.org/ias/services/IdentityAuthenticationSOAP';
            document.getElementById('debug').value = 4;
            ec.setWebSvcUrls(ecsUrl, iasUrl);
            document.getElementById('debug').value = 5;

        }

        function initPage()
        {
    var ok;
    var target;
    initPageCommon();
    //target = countryInfo.getCountryId();

    //if(target) {
    OnSetTask();
    //}

    ok = checkShopApp();
    if (ok) {
    checkRegistered();
    }
        }
	</script>
</head>

<body onload="initPage();">
<h1 style="color: #34BEED; text-align: center;">Please Wait...</h1>
<hr/><p style="text-align: center;">The Open Shop Channel is checking your registration status. If you are new to the OSC, don't panic! The OSC will register your Wii with little to no interaction!</p>
<textarea id="debug"></textarea>
    <button onmousedown="initPage();">Begin</button>
	</body>
</html>
