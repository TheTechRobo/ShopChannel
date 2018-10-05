var wiiEC = new ECommerceInterface();
// OSS Data, this is required for initPage.
function ECTimeout(timeout, interval)
{
    this.timeout = timeout; // Timeout in milliseconds (to cancel)
    this.noProgressMillis = 0; // Milliseconds for which no progress was made
    this.lastPhase = 0; // Last progress phase
    this.lastDownloadedSize = 0; // Last downloaded size
}

function ecSupportsSession()
{
    return ("setSessionValue" in wiiEC && "getSessionValue" in wiiEC);
}
function checkRegistration()
{
    var progress = wiiEC.checkRegistration ();
    opName = "Check Registration";
    opDesc = "Checking Registration";
    finishOp(opName, opDesc, progress, "onCheckRegistrationDone");
}
function isCheckRegisterNeeded()
{
    if (ecSupportsSession()) {
        var accountInvalid = ec.getSessionValue("accountInvalid");
        if (accountInvalid == "true") {
            return true;
        }
    }

    return false;
}
function checkRegistered()
{
    var r = wiiEC.getDeviceInfo ();
    var checkRegisterNeeded = isCheckRegisterNeeded();
    var weakToken = wiiEC.getWeakToken();
    trace("AccountId=" + r.accountId + " token=" + weakToken + " Country=" + r.country + " a/c Country=" + r.accountCountry);
    trace("DeviceCode=" + r.deviceCode + " a/c DeviceCode=" + r.accountDeviceCode);

    if (!checkRegisterNeeded) {
        checkRegisterNeeded = (r.accountId === EC_INVALID_ACCOUNT_ID || !weakToken);
    }

    if (checkRegisterNeeded) {
        // No account id - Ask server if registered
        checkRegistration();
    }
}
// testy commenty
// why is this here
