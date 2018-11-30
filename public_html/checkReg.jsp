<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>PLEASE WAIT</title>
	<script type="application/javascript" src="js/wiicore.js"></script>
	<script type="application/javascript">
        function initPageCommon() {
            var isShoppingManualEnabled = "true";
            shop.beginWaiting();

			// There seems to be an issue with the JS running here.
            shop.endWaiting();
            wiiEC.cancelOperation();
            shop.beginWaiting();
            ecsUrl = 'https://soapy.oscwii.org/ecs/services/ECommerceSOAP';
            iasUrl = 'https://soapy.oscwii.org/ias/services/IdentityAuthenticationSOAP';
            shop.endWaiting();

            wiiEC.setWebSvcUrls(ecsUrl, iasUrl);
            shop.beginWaiting();
        }

        function initPage()
        {
            initPageCommon();
	    isCheckRegisterNeeded();
            checkRegistered();
        }
	</script>
</head>

<body onload="initPage();">
<h1 style="color: #34BEED; text-align: center;">Please Wait...</h1>
<hr/><p style="text-align: center;">The Open Shop Channel is checking your registration. If you are not registered, OSC will automatically set you up with little to no interaction required.</p>
<p id="debug"></p>
    <button onmousedown="initPage();">Begin</button>
	</body>
</html>
