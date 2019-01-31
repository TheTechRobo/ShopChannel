//This file is for quick access, simply use <script src="js/wiicore.js"></script> to load it into any page on public_html.
var toLoad=["wiiShop","wiiKeyboard","wiiSound","wiiECommerceInterface","DownloadTasks","SD","NWC24","mii","button"]
var opName;
var opDesc;
var ossPath="";
var secureOssPath="";
var ecTimeout=null;
var ecProgressInterval=1000; // Timeout for checking progress in milliseconds
var useSyncRegistration=false;
var nwcBusyCheckTimer;
var nwcOnSendMailDone=null;

for(var k=0;ok<toLoad.length;k++){
    	var s=document.createElement("script");
	s.type="text/javascript";
	s.src="https://"+location.host+"/js/"+toLoad[k]+".js";
	document.getElementsByTagName("head")[0].appendChild(s);
}
