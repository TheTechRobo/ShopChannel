// Credits System
// Coded by Shinji on a Cup.
// Really hardcoded but there is better things to be working on right now.
function credits() {
	var initInfo = "Open Shop Channel";
	var initBottom = "Credits";
	var finalInfo = "The End."
	var finalBottom = "Thanks for using Open Shop Channel!"
	var creditInfo = ["Frontend", "Patcher", "Backend", "Button Design", "Dynamic Banners", "Development Help", "Credits Page", "Donations"]
	var creditBottom = ["CornierKhan1", "KrcPL", "dhtdht020 and DarkPheonix", "Iyenal","Larsenv","Snoot", "Shinji On A Cup","Sesurio - $2.00 (USD)"]
	// now we got that out of the way now lets work on the main page stuff
	// init page
	document.getElementById("firstchild").innerHTML = initInfo
	document.getElementById("secondchild").innerHTML = initBottom
	document.getElementById("debug").innerHTML = "init success"
	setTimeout(function () { 
 		// here we go!
    		document.getElementById("debug").innerHTML = "timeout hit. changing to " + creditInfo[0] + ", " + creditBottom[0]
    		document.getElementById("firstchild").innerHTML = creditInfo[0]
    		document.getElementById("secondchild").innerHTML = creditBottom[0]
    	}, 6000)
	setTimeout(function () { 
 		// here we go!
    		document.getElementById("debug").innerHTML = "timeout hit. changing to " + creditInfo[1] + ", " + creditBottom[1]
    		document.getElementById("firstchild").innerHTML = creditInfo[1]
    		document.getElementById("secondchild").innerHTML = creditBottom[1]
    	}, 12000)
        setTimeout(function () { 
   		// here we go!
    		document.getElementById("debug").innerHTML = "timeout hit. changing to " + creditInfo[2] + ", " + creditBottom[2]
    		document.getElementById("firstchild").innerHTML = creditInfo[2]
    		document.getElementById("secondchild").innerHTML = creditBottom[2]
    	}, 18000)
        setTimeout(function () { 
   		// here we go!
    		document.getElementById("debug").innerHTML = ("timeout hit. changing to " + creditInfo[3] + ", " + creditBottom[3])
    		document.getElementById("firstchild").innerHTML = creditInfo[3]
    		document.getElementById("secondchild").innerHTML = creditBottom[3]
    	}, 24000)
    	setTimeout(function () { 
   		// here we go!
    		document.getElementById("debug").innerHTML = ("timeout hit. changing to " + creditInfo[4] + ", " + creditBottom[4])
    		document.getElementById("firstchild").innerHTML = creditInfo[4]
    		document.getElementById("secondchild").innerHTML = creditBottom[4]
    	}, 30000)
    	setTimeout(function () { 
   		// here we go!
    		document.getElementById("debug").innerHTML = "timeout hit. changing to " + creditInfo[5] + ", " + creditBottom[5]
    		document.getElementById("firstchild").innerHTML = creditInfo[5]
    		document.getElementById("secondchild").innerHTML = creditBottom[5]
    	}, 36000)
    	setTimeout(function () { 
   		// here we go!
    		document.getElementById("debug").innerHTML = "timeout hit. changing to " + creditInfo[6] + ", " + creditBottom[6]
    		document.getElementById("firstchild").innerHTML = creditInfo[6]
    		document.getElementById("secondchild").innerHTML = creditBottom[6]
    	}, 42000)
    	setTimeout(function () { 
   		// here we go!
    		document.getElementById("debug").innerHTML = "timeout hit. changing to " + creditInfo[7] + ", " + creditBottom[7]
    		document.getElementById("firstchild").innerHTML = creditInfo[7]
    		document.getElementById("secondchild").innerHTML = creditBottom[7]
    	}, 48000)
    	setTimeout(function () { 
   		// here we go!
    		document.getElementById("firstchild").innerHTML = finalInfo
    		document.getElementById("secondchild").innerHTML = finalBottom
    	}, 54000)
    	setTimeout(function () { 
   		// here we go!
    		window.location.href = "../explore.php"
    	}, 60000)
}
