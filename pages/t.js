document.getElementById("overlay").style.display = "none"
document.getElementById("page").innerHTML = `
<div style="padding-left:10px;">

<h1 style="font-size:40px;">TOOLS</h1>
<input id="tSearch" onkeyup="tSearch()" class="search" placeholder="Search for a tool..."></input>
<button class="gvCount">4 tools</button>
<hr class="fHr">


<button name="alt links" class="tool" onclick="window.open('https://docs.google.com/presentation/d/1CSWtlCtc7y-yBA1EW0WXic9qw4vuTSh8liGIHbh0Lls/edit?usp=sharing','_blank')">
	<img class="toolImg" src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1280,h_720/https://blog.snappa.com/wp-content/uploads/2019/01/YouTube-Thumbnail-Dimensions.jpg"></img>
	<h1 class="toolTitle">Alt links</h1>
	<p class="toolDesc">Frequently updated list of alternate unblocked links for Bob's Shack</p>
</button>

<!--<button name="bobs proxy" class="tool">
	<img class="toolImg" src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1280,h_720/https://blog.snappa.com/wp-content/uploads/2019/01/YouTube-Thumbnail-Dimensions.jpg"></img>
	<h1 class="toolTitle">Bob's Proxy</h1>
	<p class="toolDesc">Specially optimized Bob’s Shack proxy using Incognito as a backend</p>
</button>-->

<!--<button name="emulator" class="tool" onclick="window.location.hash = 't-emulator'">
	<img class="toolImg" src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1280,h_720/https://blog.snappa.com/wp-content/uploads/2019/01/YouTube-Thumbnail-Dimensions.jpg"></img>
	<h1 class="toolTitle">Emulator</h1>
	<p class="toolDesc">Flexible emulation system that supports lots of different consoles and ROMS</p>
</button>-->

<button name="soundboard" class="tool" onclick="window.location.hash = 't-soundboard'">
	<img class="toolImg" src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1280,h_720/https://blog.snappa.com/wp-content/uploads/2019/01/YouTube-Thumbnail-Dimensions.jpg"></img>
	<h1 class="toolTitle">Soundboard</h1>
	<p class="toolDesc">A simple soundboard with 50+ sounds to play whenever whenever needed</p>
</button>

<button name="bobs shack help bob's shack help" class="tool" onclick="window.location.hash = 't-help'">
	<img class="toolImg" src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1280,h_720/https://blog.snappa.com/wp-content/uploads/2019/01/YouTube-Thumbnail-Dimensions.jpg"></img>
	<h1 class="toolTitle">Bob's Shack Help</h1>
	<p class="toolDesc">Includes informational features including Bob's Shack LiveStats and FAQ.</p>
</button>

</div>
`
