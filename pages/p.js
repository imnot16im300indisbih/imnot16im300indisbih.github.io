document.getElementById("overlay").style.display = "none"
document.getElementById("page").innerHTML = `
<div style="padding-left:10px;">

<h1 style="text-align:center;color:gold;font-size:40px">⚠ This page is still under construction ⚠</h1>

<hr>

<div style="font-size:20px;text-align:center;">
<b>Tab cloak:</b>
<select id="tabCloak" class="select2" style="font-size:17px;"><option>Default</option> <option>Schoology</option> <option>Google Docs</option> <option>Desmos</option> <option>Desmos graphing</option> <option>Google classroom</option> </select>
</p>
</div>

</div>
`

var icon = localStorage.getItem('tabCloak')
document.getElementById("tabCloak").value = icon

document.getElementById("tabCloak").addEventListener("change",function(event){
	localStorage.setItem('tabCloak', event.target.value);
	console.log(localStorage.getItem("tabCloak"))
	setIcon();
})