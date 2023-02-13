document.getElementById("overlay").style.display = "none"
document.getElementById("page").innerHTML = `
<div style="padding-left:10px;">

<h1 style="font-size:40px;">GAMES</h1>
<input id="gSearch" onkeyup="gSearch()" class="search" placeholder="Search for a game or genre..."></input>
<!--<select id="gSort1">
	<option>Newest</option>
	<option>Most liked</option>
	<option>Most played</option>
	<option>Oldest</option>
</select>-->
<select id="gSort2" onchange="gSort(2)">
	<option>All tags</option>
	<option>Exclusive</option>
	<option>Community-made</option>
	<option>Save-friendly</option>
	<option>Demo</option>
	<option>Action</option>
	<option>Adventure</option>
	<option>Simulator</option>
	<option>Platformer</option>
	<option>Educational</option>
	<option>Runner</option>
	<option>Building</option>
	<option>Shooter</option>
	<option>Endless</option>
	<option>Clicker</option>
	<option>FPS</option>
	<option>Fighting</option>
	<option>Idle</option>
	<option>Puzzle</option>
	<option>2 player</option>
	<option>Strategy</option>
	<option>Driving</option>
	<option>Horror</option>
	<option>Sports</option>
	<option>Arcade</option>
	<option>Multiplayer</option>
	<option>Rage</option>
	<option>Mobile port</option>
	<option>Exploration</option>
	<option>Casual</option>
	<option>Drifting</option>
	<option>Spam</option>
	<option>Racing</option>
	<option>Animals</option>
	<option>3D</option>
	<option>2D</option>
	<option>Skateboarding</option>
	<option>Story</option>
	<option>Scary</option>
	<option>Rhythm</option>
	<option>RPG</option>
	<option>Open world</option>
	<option>MMO</option>
	<option>Sandbox</option>
	<option>Competitive</option>
	<option>Racing</option>
	<option>Maze</option>
	<option>Tower Defense</option>
	<option>Point and Click</option>
	<option>Space</option>
	<option>IO</option>
	<option>Physics</option>
</select>
<button id="gCount" class="gvCount">10 games</button>
<hr class="fHr">

<a href="https://forms.gle/1xmRqxYBcQZEJbeB7" target="_blank"><img class="gotm-banner" src="https://i.ibb.co/CPprXV0/gotmjan-transformed.jpg"></a>
<hr class="fHr" style="border-color:gray;">


<div id="gList"></div>
`

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://imnot16im300indisbih.github.io/lists/glist.txt', false);
xhr.send(null);
if (xhr.status === 200) {
	var games = xhr.responseText.replaceAll("\n","").split("~~|%%|~~");
}

function randGame(){
	var item = games[Math.floor(Math.random()*games.length)];
	var gs = item.split(" ~||")
	if (gs[4] == "N/A GAME"){
		randGame()
	}else{
		window.location.hash=('g-'+gs[0])
	}
}

var gc = 0
for (const [i,v] of Object.entries(games)) {
	var gs = v.split(" ~||")
	if (gs[0] != "id"){
		gc+=1
		let str = (`<button onclick="window.location.hash=`+`'g-`+gs[0]+`'" name='`+gs[1]+`,`+gs[2]+`' class='game'><img class='gameImg' src='`+gs[3]+`'></img>`)
		
		if (gs[0] == "rand"){
			str = (`<button onclick="randGame()" name='`+gs[1]+`,`+gs[2]+`' class='game'><img class='gameImg' src='`+gs[3]+`'></img>`)
		}
		
		if (gs[2].includes(`New,`)){str+=`<p class='newTag'>NEW!</p>`}
		if (localStorage.getItem("bm-"+gs[0]) == "true"){str+=`<p class='bmTag'>BOOKMARKED</p>`}
		str+=(`<h1 class='gameTitle'>`+gs[1]+`</h1><div class='gTags'>`)
		for (const [i,v] of Object.entries(gs[2].split(`,`))){
			if (v != `New`){str+=(`<p class='gTag'>`+v+`</p>`)}
		}
		str+=("</div></button>") //<p style='color:#f7bf05' class='gameRating'>90%</p>
		if (localStorage.getItem("bm-"+gs[0]) == "true"){
			document.getElementById("gList").innerHTML = (str + document.getElementById("gList").innerHTML)
		} else {
			document.getElementById("gList").innerHTML += str
		}
	}
}
document.getElementById("gCount").innerHTML = (gc+" games")


/*var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://000690268.codepen.website/glist.txt', false);
xhr.send(null);
	if (xhr.status === 200) {
		var games = xhr.responseText.replaceAll("\n","").split("~~|%%|~~");
	}*/
