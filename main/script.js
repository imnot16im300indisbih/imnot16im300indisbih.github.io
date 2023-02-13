function loading(val){
	if (val == true){
		document.getElementById("overlay").style.display = "block"
	} else {
		document.getElementById("overlay").style.display = "none"
	}
}

function renderPage(){
	let page = window.location.hash.replace("#","")
	if (window.location.hash == ""){
		window.location.hash = "h"
	}
	loading(true)
	
	document.getElementById("page").scrollTo(0, 0);
	
	if (page.includes("t-")){
		let scr = document.createElement('script');
		scr.src = ("https://imnot16im300indisbih.github.io/tools/"+(page.replace("t-",""))+"/index.js");
		document.head.appendChild(scr);
	} else {
		if (page.includes("g-")){
			let scr = document.createElement('script');
		 scr.src = ("https://imnot16im300indisbih.github.io/pages/gp.js");
		 document.head.appendChild(scr);
		} else {
			let scr = document.createElement('script');
		 scr.src = ("https://imnot16im300indisbih.github.io/pages/"+page+".js");
		 document.head.appendChild(scr);
		}
	}
}

window.onhashchange = function(){
	renderPage()
}

function showPopup(p){
	document.getElementById("popupback").style.display = "block"
	//document.getElementById(p+"Popup").style.display = "block"
	if (p == "notifs"){
		document.body.innerHTML += `<div id="popup" class="popup" style="display:block;text-align:left;line-height:0%;width:400px;">
		
	<h1 style="line-height:0%;padding-left:10px;margin-top:20px;">NOTIFICATIONS</h1><hr>
	<p class="notif">⚇ Welcome to Bob's Shack!<hr class="nHr"></p>
	<p class="notif">⚠ This page is still under construction.<hr class="nHr"></p>
</div>`
	}
	if (p == "credits"){
		document.body.innerHTML += `<div id="creditsPopup" class="popup" style="display:block;">
	<h1 style="line-height:0%;margin-top:20px;">CREDITS</h1><hr>
	<a style="color:white;" target="_blank" href="https://www.flaticon.com/"><u>Icons from flaticon.com</u></a><br>
	<p style="color:white;">Inspired by newgrounds</p><br>
</div>`
	}
	if (p == "signup"){
		document.body.innerHTML += `<div id="signupPopup" class="popup" style="display:block;width:500px;height:300px;">
	<h1 style="line-height:0%;margin-top:20px;">SIGNUP</h1><hr>
<input id="suUser" placeholder="Enter username (max 16)" class="input2"></input>
<input id="suPass" placeholder="Enter password (max 32)" class="input2"></input>
<input id="suDay" type="number" min="1" max="32" placeholder="Day" class="input2"></input>

<br><a style="font-weight:100;color:gray;" onclick="showPopup('login')"><u>Log in</u> instead</a>
</div>`
	}
	if (p == "inprogress"){
		document.body.innerHTML += `<div id="signupPopup" class="popup" style="display:block;width:500px;height:300px;">
	<h1 style="line-height:0%;margin-top:20px;">Under construction</h1><hr>
	<p>this page is unfinished.
	<br>click anywhere to exit</p>
</div>`
	}
}

function hidePopup(){
	let popups = document.getElementsByClassName("popup");
	for (var i = 0; i < popups.length; i++) {
		popups[i].style.display = "none"
	}
	document.getElementById("popupback").style.display = "none"
}

function tSearch(){
	let input = document.getElementById("tSearch").value
	input=input.toLowerCase();
 let x = document.getElementsByClassName('tool');
 for (i = 0; i < x.length; i++) {
		if (!x[i].name.toLowerCase().includes(input)) {
			x[i].style.display="none";
		} else {
			x[i].style.display="inline-table";          
		}
	}
}
function gSearch(){
	let input = document.getElementById("gSearch").value
	input=input.toLowerCase();
 let x = document.getElementsByClassName('game');
 for (i = 0; i < x.length; i++) {
		if (!x[i].name.toLowerCase().includes(input)) {
			x[i].style.display="none";
		} else {
			x[i].style.display="inline-table";          
		}
	}
}
function gSort(ty){
	let genreSort = document.getElementById("gSort2")
	if (genreSort.value == "All tags"){
		document.getElementById("gSearch").value = ""
	} else {
		document.getElementById("gSearch").value = genreSort.value;
	}
	gSearch();
}

function setIcon(){
	if (localStorage.getItem("tabCloak")===null){
		localStorage.setItem("tabCloak","Default")
	}
	var link = window.document.querySelector("link[rel~='icon']");
	if (!link) {
		link = window.document.createElement('link');
		link.rel = 'icon';
		window.document.getElementsByTagName('head')[0].appendChild(link);
	}
	var icon = localStorage.getItem('tabCloak')
	if (icon=="Default"){
		link.href = 'https://i.ibb.co/RgKTfQj/bobs-logo.webp';
		document.title = "Bob's Shack"
	}
	if (icon=="Schoology"){
		link.href = 'https://asset-cdn.schoology.com/sites/all/themes/schoology_theme/favicon.ico';
		document.title = "Home | Schoology"
	}
	if (icon=="Google Docs"){
		link.href = 'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico';
		document.title = "Google Docs"
	}
 if (icon=="Desmos"){
		link.href = 'https://www.desmos.com/assets/img/apps/scientific/favicon.ico';
		document.title = "Desmos | Scientific Calculator"
	}
	if (icon=="Desmos graphing"){
		link.href = 'https://www.desmos.com/assets/img/touch-icon-192x192.png';
		document.title = "Desmos | Graphing Calculator"
	}
	if (icon=="Google classroom"){
		link.href = 'https://ssl.gstatic.com/classroom/favicon.png';
		document.title = "Classes"
	}
}

function makeBDate(){
	
}

window.onload = function(){
	
	document.head.innerHTML = `
	<link rel="stylesheet" href="https://imnot16im300indisbih.github.io/main/style.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lexend&display=swap">
	`
	
	document.body.innerHTML = `
	<div class="sidebar">
	<a href="#h"><img draggable="false" title="Home" style="filter:none;" class="sideimg-t" src="https://i.ibb.co/RgKTfQj/bobs-logo.webp"></img></a>
	<a onclick="showPopup('notifs')"><img draggable="false" title="Notifications" style="top:50px;" class="sideimg-t" src="https://cdn-icons-png.flaticon.com/128/542/542689.png"></img></a>

	<a onclick="showPopup('inprogress')"><img draggable="false" title="Profile" style="bottom:4px;" class="sideimg-b" src="https://cdn-icons-png.flaticon.com/128/456/456212.png"></img></a>
	<a href="https://peerboard.com/583030755" target="_blank"><img draggable="false" title="Community" style="bottom:50px;" class="sideimg-b" src="https://cdn-icons-png.flaticon.com/512/3059/3059469.png"></img></a>
 <a href="#t"><img draggable="false" title="Tools" style="bottom:100px;" class="sideimg-b" src="https://cdn-icons-png.flaticon.com/128/100/100852.png"></img></a>
 <a onclick="showPopup('inprogress')"><img draggable="false" title="Videos" style="bottom:150px;" class="sideimg-b" src="https://cdn-icons-png.flaticon.com/128/409/409802.png"></img></a>
 <a href="#g"><img draggable="false" title="Games" style="bottom:200px;" class="sideimg-b" src="https://cdn-icons-png.flaticon.com/128/13/13973.png"></img></a>
 <a href="#h"><img draggable="false" title="Home" style="bottom:250px;" class="sideimg-b" src="https://cdn-icons-png.flaticon.com/128/1946/1946436.png"></im></a>
</div>

<span class="page" id="page">
	<h1>Please enable javascript.</h1>
</span>

<span onclick="hidePopup()" style="display:none" class="overlay" id="popupback"></span>

<span style="display:block" class="overlay" id="overlay">
</span>`
	
	//mobile check
	if (screen.width < 1260) {alert("⚠ This page is not optimized for screens smaller than 1260px and may not function as intended")}
	
	if (localStorage.getItem("tabCloak") == null){localStorage.setItem("tabCloak","Default")}
	
	renderPage();
	setIcon();
	
	fetch('https://api.countapi.xyz/hit/bobs_shack/visits')
		.then((response) => response.json())
		.catch((error) => {});
}

function fullscreen(){
	let elem = document.getElementById("gFrame")
	
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.webkitRequestFullscreen) {
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) {
		elem.msRequestFullscreen();
	}
}

function embed(){
	openPopup("embed")
}

function bookmark(){
	
}

function updLikes(){
	let cg = window.location.hash.replaceAll("#g-","")
	
	/*document.getElementById("like").style.filter="brightness(0) invert(1)"
	document.getElementById("dislike").style.filter="brightness(0) invert(1)"
	
	if (localStorage.getItem("gl-"+cg) === "true"){
		document.getElementById("like").style.filter="brightness(0) invert(0.5)"
		document.getElementById("dislike").style.filter="brightness(0) invert(1)"
	} else {
		if (localStorage.getItem("gl-"+cg) === "false"){
			document.getElementById("like").style.filter="brightness(0) invert(1)"
		 document.getElementById("dislike").style.filter="brightness(0) invert(0.5)"
	}
	}*/
	
	document.getElementById("bookmark").style.filter="brightness(0) invert(1)"
	if (localStorage.getItem("bm-"+cg) === "true"){
		document.getElementById("bookmark").style.filter="brightness(0) invert(0.5)"
	}
}

function like(){
	let cg = window.location.hash.replaceAll("#g-","")

	if (localStorage.getItem("gl-"+cg)){
		if (localStorage.getItem("gl-"+cg) === "true"){
			localStorage.setItem("gl-"+cg,undefined)
		}else{
			localStorage.setItem("gl-"+cg,"true")
		}
	}else{
			localStorage.setItem("gl-"+cg,"true")
	}
	updLikes()
}

function dislike(){
	let cg = window.location.hash.replaceAll("#g-","")

	if (localStorage.getItem("gl-"+cg)){
		if (localStorage.getItem("gl-"+cg) === "false"){
			localStorage.setItem("gl-"+cg,undefined)
		}else{
			localStorage.setItem("gl-"+cg,"false")
		}
	}else{
			localStorage.setItem("gl-"+cg,"false")
	}
	updLikes()
}

function bookmark(){
	let cg = window.location.hash.replaceAll("#g-","")

	if (localStorage.getItem("bm-"+cg)){
		if (localStorage.getItem("bm-"+cg) === "true"){
			localStorage.setItem("bm-"+cg,undefined)
		}else{
			localStorage.setItem("bm-"+cg,"true")
		}
	}else{
			localStorage.setItem("bm-"+cg,"true")
	}
	updLikes()
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
