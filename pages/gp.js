document.getElementById("overlay").style.display = "none"

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://imnot16im300indisbih.github.io/lists/glist.txt', false);
xhr.send(null);
if (xhr.status === 200) {
	var games = xhr.responseText.replaceAll("\n","").split("~~|%%|~~");
}

console.log(window.location.hash.replaceAll("#g-",""))
for (const [i,v] of Object.entries(games)) {
	var gs2 = v.split(" ~||")
	if (gs2[0] == window.location.hash.replaceAll("#g-","")){
		gFound = gs2
	}
}

document.getElementById("page").innerHTML = (`

<div style="margin:1%;">
	<iframe id="gFrame" src="https://imnot16im300indisbih.github.io/pages/embed.html#`+gFound[0]+`" class="gFrame"></iframe>
	
	<div id="gDevFrame" onclick="window.open('`+gFound[6]+`','_blank')" class="sgFr" style="height:6vw;cursor:pointer;">
		<h2 style="margin-left:4%;font-size:2vw;margin-top:5%;color:#0373FF">Developed by</h2>
		<p id="gDevTitle" style="margin-left:4%;font-size:1.6vw">`+gFound[5]+`</p>
	</div>
	
	<div class="sgFr" style="height:24vw;">
		<h2 style="margin-left:4%;font-size:2vw;margin-top:5%;color:#0373FF;margin-bottom:-2%;">Description</h2>
		<p id="gDesc" style="width:90%;margin-left:4%;font-size:1.6vw;line-height:120%">`+gFound[7]+`</p>
	</div>
	
	<div class="sgFr" style="height:12.1vw;">
		<p style="margin-top:7%;" class="gt">Plays: <font id="gPlays" class="gd">`+`</font></p><br>
		<p class="gt">Date added: <font id="gDate" class="gd">`+gFound[4]+`</font></p><br>
	</div>
	
	<div class="gBar">
		<p style="font-size:3vw;color:#0373FF;margin-left:1.5%;margin-top:2.3%;">`+gFound[1]+`</p>
		
		<!--<button onclick="like()" style="margin-right:24%;" class="gbB"><img id="like" style="filter:brightness(0) invert(1);" class="gbI" src="https://cdn-icons-png.flaticon.com/128/739/739231.png"></img></button>
		
		<button onclick="dislike()" style="margin-right:19%;" class="gbB"><img id="dislike" style="filter:brightness(0) invert(1);" class="gbI" src="https://cdn-icons-png.flaticon.com/128/880/880613.png"></img></button>-->
		
		<button onclick="bookmark()" style="margin-right:11%;" class="gbB"><img class="gbI" id="bookmark" src="https://cdn-icons-png.flaticon.com/512/102/102279.png"></img></button>
	
	<button onclick="embed()" style="margin-right:6%;" class="gbB"><img class="gbI" src="https://cdn-icons-png.flaticon.com/512/59/59118.png"></img></button>
		
		<button onclick="fullscreen()" class="gbB"><img class="gbI" src="https://cdn-icons-png.flaticon.com/512/161/161728.png"></img></button>
		
	</div>
	
</div>

`)

updLikes()

fetch('https://api.countapi.xyz/hit/bobs_shack/'+window.location.hash.replaceAll("#","")+'-plays')
		.then((response) => response.json())
		.catch((error) => {})
  .then((data) => (document.getElementById('gPlays').innerHTML = (numberWithCommas(Number(data.value)))) );


/*

bowman ~||
Bowman ~||
Fighting,2 player,2D,Competitive,Arcade ~||
https://assets.codepen.io/2104921/bowman.jpeg ~||
11/23/22 ~||
AddictingGames.com ~||
https://addictinggames.com ~||
desc ~||

*/