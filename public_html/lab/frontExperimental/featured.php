<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <link href="main.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="js/button.js"></script>
    <script type="text/javascript" src="js/wiicore.js"></script>
    <script type="text/JavaScript">
        shop.setWallpaper(3)
        sound.playBGM();
    </script>
</head>
<body onload="FP_preloadImgs(/*url*/'asset/button/exploreA.png',/*url*/'asset/button/exploreB.png',/*url*/'asset/button/exploreC.png'); initPage();">
<table border="1" cellspacing="0" cellpadding="0" align="left" class="table">
    <tbody>
    <tr>
        <td width="215" valign="top">
            <p align="center">
                <strong>New Additions</strong>
            </p>
        </td>
    </tr>
    <tr>
        <td width="215" valign="top">
            <p>Item #1</p>
        </td>
    </tr>
    <tr>
        <td width="215" valign="top">
            <p>Item #2</p>
        </td>
    </tr>
    <tr>
        <td width="215" valign="top">
            <p>Item #3</p>
        </td>
    </tr>
    <tr>
        <td width="215" valign="top">
            <p>Item #4</p>
        </td>
    </tr>
    </tbody>
</table>
<p>
    <p class="heading">Open Shop Channel</p>
</p>
<p>
    <p class="heading"><img alt="Explore Button" id="explore" dir="ltr" height="100" src="asset/button/exploreA.png" width="200" onmousedown="FP_swapImg(1,1,/*id*/'explore',/*url*/'asset/button/exploreC.png')" onmouseout="FP_swapImgRestore()" onmouseover="FP_swapImg(1,1,/*id*/'explore',/*url*/'asset/button/exploreB.png');" onmouseup="FP_swapImgRestore()" class="heading" onclick="FP_goToURL(/*href*/'explore.php');"></p>
</p>
