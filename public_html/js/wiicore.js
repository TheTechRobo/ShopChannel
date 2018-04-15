//This file is for quick access, simply use <script src="js/wiicore.js"></script> to load it into any page on public_html.
var toLoad = ["wiiShop", "wiiKeyboard", "wiiSound", "wiiECommerceInterface"]
var newScriptLol;
for (var ok = 0; ok < toLoad.length; ok++) {
    newScriptLol = document.createElement("script");
	newScriptLol.type = "text/javascript";
	newScriptLol.src = "https://" + location.host + "/js/" + toLoad[ok] + ".js";
	document.getElementsByTagName("head")[0].appendChild(newScriptLol);
}
