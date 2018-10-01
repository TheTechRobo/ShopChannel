<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
        "http://www.w3.org/TR/html4/strict.dtd">
<HTML>
	<HEAD>
	    <TITLE>OSC Testing Ground</TITLE>
		<script type="text/javascript">
			function checkRegistration()
{
    var progress = ec.checkRegistration ();
    opName = "Check Registration";
    opDesc = "Checking Registration";
    finishOp(opName, opDesc, progress, "onCheckRegistrationDone");
}

function onCheckRegistrationDone (progress)
{
    showResult (progress, opName, opDesc);
    if (progress.status >= 0) {
        var r = ec.getDeviceInfo ();
        // If not registered - set loyalty system and show terms, call register
        // If transfer pending - show "Confirm Transfer", call transfer
        // If transfer complete - call transfer to get account id (show status)
        // If registered - call register to get account id (show status)
        //trace("device id=" + r.accountId + " status=" + r.registrationStatus);
        switch (r.registrationStatus) {
          case 'U': // Not registered
                // Ask user to register

                if (useSyncRegistration) {
                    if (r.accountId == EC_INVALID_ACCOUNT_ID) {
                        // Ask user to register
                        trace("Ask the user to register - U");
                        replacePage('L_03.jsp');
                    } else {
                        // Synchronizes registration info
                        trace("Get registration info - U");
                        showRegister("getRegistrationInfo");
                    }
                } else {
                     // Ask user to register
                     trace("Ask the user to register - U");
                        replacePage('L_03.jsp');
                }
                break;
            case 'R': // Registered
                trace("Get registration info - R");
                showRegister("getRegistrationInfo");
                break;
            case 'P': // Transfer pending
                trace("Transfer pending - P");
                showRegister("performPendingTransfer");
                break;
            case 'T':
                trace("Get transfer info - T");
                showRegister("getTransferInfo");
                break;
            default:
                var errorStr = "Unknown registration status: " + r.registrationStatus;
                trace(errorStr);;
                setConnectingToServer(false);               
                setUnderButton(true, shop.menuBtn, "javascript:showWiiMenu()", "wiiSelectSound();");
                hideElement("text02-01");
                var elem = document.getElementById("errorCodeText");
                setErrorHtmlMsg(elem, OSS_INVALID_REGISTRATION_STATUS, "The Wii Number you entered is incorrect.<BR><BR>Visit support.nintendo.com for assistance.");
                break;              
        }
    } else {
        setConnectingToServer(false);
        setUnderButton(true, shop.menuBtn, "javascript:showWiiMenu()", "wiiSelectSound();");
        // Show error message and code
        hideElement("text02-01");
        var elem = document.getElementById("errorCodeText");
        setErrorHtml(elem, progress);
    }
}

// Check if device is registered
function checkRegistered()
{
    setUnderButton(false);
    var r = ec.getDeviceInfo ();
    // Probably we can delete the line below.
    var checkRegisterNeeded = isCheckRegisterNeeded();
    var weakToken = ec.getWeakToken();
    trace("AccountId=" + r.accountId + " token=" + weakToken + " Country=" + r.country + " a/c Country=" + r.accountCountry);
    trace("DeviceCode=" + r.deviceCode + " a/c DeviceCode=" + r.accountDeviceCode);
        
    if (!checkRegisterNeeded) {
        checkRegisterNeeded = (r.accountId == EC_INVALID_ACCOUNT_ID || !weakToken);
    }
        
    if (checkRegisterNeeded) {
        checkRegistration();
    } else {
        if (r.country != r.accountCountry) {
            replacePage("L_01.jsp?origCountry=" + r.accountCountry);
        } else if ((r.accountDeviceCode != undefined)
                    && (r.accountDeviceCode != null)
                    && (r.accountDeviceCode != "") 
                    && (r.deviceCode != r.accountDeviceCode)) {
            trace("Re-registering because device code is out of sync: old " + r.accountDeviceCode + ", new " + r.deviceCode);
            showRegister("register");
        } else {
            showInitialPage(true);
        }
    }
}
		</script>
	</HEAD>
		<BODY>
		Hello, welcome to this HTML 4.01 document.
		We'll be changing more soon.
			<p>hai twitch</p>
			<p><a href="featured.php">Featured</a></p>
			<p><a href="newexplore.php">New Explore</a></p>
			<p><a href="explore.php">Explore</a></p>
			<p><a href="download/prodinfo.php">Product Page</a></p>
			<p><a href="/clubspot/index.php">Club Spot index</a></p>
            <p><a href="/error/list.php">Error List</a></p>
			<p><a href="debug.php">debugmii</a></p>
			<p><button onmousedown="sound.playBGM()">play thy bgm</button></p>
			<p><button onmousedown="">Check Registration!?</button></p>
			<p id="test" style="display: none;"></p>
        <p>Open Shop Channel for the Nintendo Wii
            Copyright (C) 2018  Open Shop Channel Team</p>
			<script>
			    document.getElementById('test').innerHTML = new wiiShop().connecting
			</script>
			<script type="text/javascript" src="/js/wiicore.js"></script>
			<script>
				//document.getElementById("helpme").innerHTML = location.href
				//wiiec.setSessionValue("connecting", "true");
				/*wiiec.setSessionValue("connecting", "false")
				shop.endWaiting()
				shop.enableHRP()*/
				//sound.playBGM();
				//var ecTimeout = new ECTimeout(parseInt("0"));
			</script>
		</BODY>
</HTML>
