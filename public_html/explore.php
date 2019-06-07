<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<title>Explore</title>
	<style type="text/css">
		.heading {
			margin-top: 0px;
			font-size: 32px;
			font-weight: 900;
			font-style: normal;
			font-variant: normal;
			text-transform: none;
			color: #000000;
			text-align:center
		}
		.highlighted {
			font-size: 16px;
			font-weight: 200;
			font-style: normal;
			font-variant: normal;
			text-transform: none;
			color: #FFFFFF;
			background-color: #34BEED;
		}
		.default {
			font-size: 16px;
			font-weight: 200;
			font-style: normal;
			font-variant: normal;
			text-transform: none;
			color: #000000;
		}
		.imgShadow {
			margin-top: -1px;
			position: absolute;
			top: 109.5px;
			width: 108px;
			height: 108px;
			background: url("asset/section/sectionShadowV2.png");
			z-index: -100;
		}
		/*Information that appears on hover (for explore.php*/
		.divHoverInfo {
			margin-top: -2px;
			position: absolute;
			background-color: rgb(52, 190, 237);
			width: 430px;
			height: 30px;
			color: #FFFFFF;
			left: 87px;
			right: 50%;
			top: 217px;
			visibility: hidden;
		}
		.txtHoverInfoPatch {
			position: absolute;
			left: 55px;
			top: -10px;
		}
		.txtHoverInfoHomebrew {
			position: absolute;
			left: 50px;
			top: -10px;
		}
		.txtHoverInfoClubSpot {
			position: absolute;
			left: 38px;
			top: -10px;
		}
		.bl {
			position: absolute;
			top: 23px;
		}
		.br {
			position: absolute;
			top: 23px;
			left: 423px;
		}
		.tr {
			position: absolute;
			left: 423px;
		}
		.dots {
			position: absolute;
			color: rgb(142, 148, 168);
			left: 270px;
			top: 50px;
		}
	</style>
	<script type="text/javascript" src="js/wiicore.js"></script>
	<script type="text/javascript">
		<!--
		function FP_swapImg() {//v1.0
			var doc=document,args=arguments,elm,n; doc.$imgSwaps=new Array(); for(n=2; n<args.length;
																				  n+=2) { elm=FP_getObjectByID(args[n]); if(elm) { doc.$imgSwaps[doc.$imgSwaps.length]=elm;
				elm.$src=elm.src; elm.src=args[n+1]; } }
		}
		function FP_preloadImgs() {//v1.0
			var d=document,a=arguments; if(!d.FP_imgs) d.FP_imgs=new Array();
			for(var i=0; i<a.length; i++) { d.FP_imgs[i]=new Image; d.FP_imgs[i].src=a[i]; }
		}
		function FP_getObjectByID(id,o) {//v1.0
			var c,el,els,f,m,n; if(!o)o=document; if(o.getElementById) el=o.getElementById(id);
			else if(o.layers) c=o.layers; else if(o.all) el=o.all[id]; if(el) return el;
			if(o.id==id || o.name==id) return o; if(o.childNodes) c=o.childNodes; if(c)
				for(n=0; n<c.length; n++) { el=FP_getObjectByID(id,c[n]); if(el) return el; }
			f=o.forms; if(f) for(n=0; n<f.length; n++) { els=f[n].elements;
				for(m=0; m<els.length; m++){ el=FP_getObjectByID(id,els[n]); if(el) return el; } }
			return null;
		}
		function FP_swapImgRestore() {//v1.0
			var doc=document,i; if(doc.$imgSwaps) { for(i=0;i<doc.$imgSwaps.length;i++) {
				var elm=doc.$imgSwaps[i]; if(elm) { elm.src=elm.$src; elm.$src=null; } }
				doc.$imgSwaps=null; }
		}
		function FP_goToURL(url) {//v1.0
			window.location=url;
		}
		shop.setWallpaper(2);
		// -->
	</script>
</head>
<body onload="FP_preloadImgs(/*url*/'asset/button/open2.png',/*url*/'asset/button/open3.png',/*url*/'asset/section/clubspotB.png',/*url*/'asset/section/clubspotC.png',/*url*/'asset/section/patchesB.png',/*url*/'asset/section/patchesC.png',/*url*/'asset/section/homebrewB.png',/*url*/'asset/section/homebrewC.png',/*url*/'asset/button/returnB.png',/*url*/'asset/button/returnC.png')">

<p class="heading"><img src="asset/logo/bluelogo.png" width="32" height="32"> Open Shop Channel <span class="highlighted">Explore</span>
	<span class="default">&nbsp;&nbsp;&nbsp;&nbsp; </span>
	<img alt="About" id="aboutbut" dir="ltr" height="38" src="asset/button/open.png" width="36" onmousedown="FP_swapImg(1,1,/*id*/'aboutbut',/*url*/'asset/button/open3.png')" onmouseout="FP_swapImgRestore()" onmouseover="FP_swapImg(1,1,/*id*/'aboutbut',/*url*/'asset/button/open2.png')" onmouseup="FP_swapImgRestore()" class="heading" onclick="FP_goToURL('docs/credits.php')">&nbsp;
</p>

<h6 class="dots" style="margin-top: 12px; left: 5px;">• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • </h6>
<div style="margin-bottom: 55px;"></div>

<!--For the sake of order, stylize Buttons with the heading class in main.css.-->
<div class="imgShadow" style="left: 139.5px;"></div>
<div class="imgShadow" style="left: 250px;"></div>
<div class="imgShadow" style="left: 361px;"></div>
	
<p class="heading">
	<!--Sections-->	
	<img alt="Club Spot" id="clubspotbut" dir="ltr" height="100" src="asset/section/clubspotA.png" width="100" onmousedown="FP_swapImg(1,1,/*id*/'clubspotbut',/*url*/'asset/section/clubspotC.png')" onmouseout="FP_swapImgRestore(); document.getElementById('HoverClubSpot').style.visibility='hidden';" onmouseover="FP_swapImg(1,1,/*id*/'clubspotbut',/*url*/'asset/section/clubspotB.png'); document.getElementById('HoverClubSpot').style.visibility='visible';" onmouseup="FP_swapImgRestore()" class="heading" onclick="FP_goToURL('clubspot/index.php')">
	<img alt="Patches" id="patchesbut" dir="ltr" height="100" src="asset/section/patchesA.png" width="100" onmousedown="FP_swapImg(1,1,/*id*/'patchesbut',/*url*/'asset/section/patchesC.png')" onmouseout="FP_swapImgRestore(); document.getElementById('HoverPatch').style.visibility='hidden';" onmouseover="FP_swapImg(1,1,/*id*/'patchesbut',/*url*/'asset/section/patchesB.png'); document.getElementById('HoverPatch').style.visibility='visible';" onmouseup="FP_swapImgRestore()" class="heading" onclick="FP_goToURL('patches/list_warn.php');">
	<img alt="Homebrew" id="homebrewbut" dir="ltr" height="100" src="asset/section/homebrewA.png" width="100" onmousedown="FP_swapImg(1,1,/*id*/'homebrewbut',/*url*/'asset/section/homebrewC.png')" onmouseout="FP_swapImgRestore(); document.getElementById('HoverHomebrew').style.visibility='hidden';" onmouseover="FP_swapImg(1,1,/*id*/'homebrewbut',/*url*/'asset/section/homebrewB.png'); document.getElementById('HoverHomebrew').style.visibility='visible';" onmouseup="FP_swapImgRestore()" class="heading" onclick="FP_goToURL(/*href*/'list.php?category=1');">
	</img></p>
<p class="heading">
	<img alt="Return Button" id="returnbut" dir="ltr" height="69" src="asset/button/return1A.png" width="319" onmousedown="FP_swapImg(1,1,/*id*/'returnbut',/*url*/'asset/button/return1C.png')" onmouseout="FP_swapImgRestore()" onmouseover="FP_swapImg(1,1,/*id*/'returnbut',/*url*/'asset/button/return1B.png')" onmouseup="FP_swapImgRestore()" class="heading" onclick="FP_goToURL(/*href*/'index.php')">
</p>

<!--Information that appears on hover-->
<div class="divHoverInfo" id="HoverPatch">
	<img src="asset/common/bl.png" class="bl">
	<img src="asset/common/br.png" class="br">
	<img src="asset/common/tr.png" class="tr">
	<img src="asset/common/tl.png" style="position: absolute;">
	<p class="txtHoverInfoPatch">Download patches that modify your Consoles behaviour!</p>
</div>
<div class="divHoverInfo" id="HoverHomebrew">
	<img src="asset/common/bl.png" class="bl">
	<img src="asset/common/br.png" class="br">
	<img src="asset/common/tr.png" class="tr">
	<img src="asset/common/tl.png" style="position: absolute;">
	<p class="txtHoverInfoHomebrew">Explore some helpful utilities and awesome games!</p>
</div>
<div class="divHoverInfo" id="HoverClubSpot">
	<img src="asset/common/bl.png" class="bl">
	<img src="asset/common/br.png" class="br">
	<img src="asset/common/tr.png" class="tr">
	<img src="asset/common/tl.png" style="position: absolute;">
	<p class="txtHoverInfoClubSpot">Support the project and reap the benefits!</p>
</div>

<h6 class="dots" style="margin-top: 316px; left: 5px;">• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • </h6>

</body>
</html>
