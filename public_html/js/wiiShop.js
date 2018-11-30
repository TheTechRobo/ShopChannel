var shop = new wiiShop();


/*
shop.returnToMenu() - go to wii menu
shop.beginWaiting() - display loading thing
shop.endWaiting() - hide loading thing
shop.returnToUpdate() - go to update
shop.jumpDataMng(URL) - go to data management (doesn't work properly from what i've tried)
shop.jumpToEULAViewer() - go to the eula
shop.rebootSystem() - reboot teh wii
shop.setWallpaper(ID) - change background
shop.enableHRP() - enable home button
shop.disableHRP() - disable home button
shop.error(code, type)

=====background ids:=====
0: dots
1: black
2: white
3: blue vertical lines

=====error types:=====
0: internet?
1: server?

=====localized strings=====
shop.title: "Wii Shop Channel"
shop.menuBtn: "Wii Menu"
shop.retryBtn: Try Again
shop.connecting: "Connecting. Please wait..."
*/

// uwu
var debug = false;
var wii = true;
var opera = true;
var msie = false;

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

function finishOp(opName, opDesc, progress, doneFunc)
{
    showProgress(true, opName, opDesc, doneFunc);
    eval(doneFunc+"(progress)");
    }

function showProgress(flag)
{
    document.getElementById("debug").innerHTML = flag;
}
function checkShopApp()
{
    var ok = true;
    return ok;
}