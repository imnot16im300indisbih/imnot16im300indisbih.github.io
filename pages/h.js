document.getElementById("overlay").style.display = "none"
document.getElementById("page").innerHTML = `
<img class="banner" src="https://i.ibb.co/yYK0BtL/naturescene-transformed.jpg"></img>

<span class="hp-left">

 <div class="hp-d" style="height:85px;line-height:140%;">
		<p style="font-size:30px;">Welcome to <b>Bob's Shack</b>!</p>
	</div>
	
	<div class="hp-d" style="height:130px;">
		<p style="font-size:40px;color:#0373FF;font-weight:bold;margin-bottom:0;">RANDOM FACT</p>
		<p id="randFact" style="font-size:25px;line-height:110%;margin-top:30px;">...</p>
	</div>
	
	<div class="hp-d" style="height:85px;">
	<p style="font-size:17px;padding-bottom:6px;">©Copyright 2020-2023 Bob’s Shack</p>
	<a style="font-size:20px;" class="tLink" onclick="showPopup('credits')">Credits</a>
	<p style="font-size:20px;padding-top:6px;">Contact: bobs.secret.shack@gmail.com</p>
</div>
	
</span>

<span class="hp-right">

	<div class="hp-d" style="height:calc(302px + 2vw);">
	<p style="font-size:40px;color:#0373FF;font-weight:bold;">NEWS/UPDATES</p>
		<p style="font-size:35px;font-weight:bold;margin-bottom:0;">v6.1.1 UPDATE</p>
		<p style="font-size:25px;line-height:110%;margin-top:20px;">
		-2 new games<br>
		-Removed blocked games and tools<br>
		-Small UI changes<br>
		-New banner and GOTM<br>
		-Changes to forums (see <a href="https://peerboard.com/583030755/post/1601207729" target="_blank">here</a>)
		</p>
	</div>

</span>

`

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function randMessage(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://imnot16im300indisbih.github.io/lists/mlist.txt', false);
	xhr.send(null);
	if (xhr.status === 200) {
		var msgs = xhr.responseText.split("%");
		var int = getRandomInt(0, msgs.length)
		var msg = msgs[int].trim();
		document.getElementById("randFact").innerHTML = (msg)
	}
}

randMessage()
