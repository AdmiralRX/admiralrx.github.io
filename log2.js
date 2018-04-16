var g = 1;
var time;
var second;
var Timer;
function add(){
	g+=1;
	document.getElementById('f').innerHTML = g;
}
function min(){
	if(g>1){
		g-=1;
		document.getElementById('f').innerHTML = g;
	}
}

function getX(){
	var id = document.URL.indexOf('?');
	var p = new Array();
	if (id != -1) {
		var pairs = document.URL.substring(id+1, document.URL.length).split('&');
		for (var i=0; i<pairs.length; i++){
			nameVal = pairs[i].split('=');
			p[nameVal[0]] = nameVal[1];
			}
		}
	return p;
}
p = getX();
user = unescape(p["o1"]);
document.getElementById('adg').innerHTML = "WELCOME " + user;

function go(){
	var a =document.login.o1.value;
	a = a.toLowerCase();
	var b=document.login.o2.value;
		if(a=="aaaa" && b=="aaaa"){
			alert("WELCOME " + a);
			window.location.href="FinalP.html";
		}
		else if(a=="" || b==""){
			alert("FILL IT FIRST !!!");
		}
		else{
			alert("WRONG USERNAME OR PASSWORD !!!");
		}
}

function myCanvas(){
	var k = document.getElementById('canvas1');
	var ctx = k.getContext('2d');
	ctx.webkitImageSmoothingEnabled = false;
	ctx.mozImageSmoothingEnabled = false;
	ctx.imageSmoothingEnabled = false;
	var image1 = new Image();
	image1.src = "peta.jpg";
	ctx.drawImage(image1,0,0,k.width,k.height);
}

function move(elementa) {
 	var a = document.getElementById('h1');
 	var e = document.getElementById(elementa);
 	e.addEventListener("click", getClickPosition, false);
 	function getClickPosition(o){
 		var xP = o.clientX - (a.offsetWidth
 			/ 2);
 		var yP = o.clientY - (a.offsetHeight *4);
 		var to3d = "translate3d(" + xP + "px," + yP + "px, 0)";
 		a.style.transform = to3d;
 	}
}

function loadDoc(res){
	var mhttp = new XMLHttpRequest();
	var g = document.getElementById('ab');
	g.style.display = "block";
	mhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200){
			g.innerHTML = 
			this.responseText;
		}
	};
	mhttp.open("GET", res, true);
	mhttp.send();
}

function next(){
	window.location.href = "book.html";
}

function displaypop(){
	var mdl = document.getElementById('modal1');
	mdl.style.display = "block";
}

function close1(){
	var mdl = document.getElementById('modal1');
	mdl.style.display = "none";
}

window.onclick = function(event) {
	modal = document.getElementById('modal1');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function countdown(){
	var time = 6;
	var Timer = setInterval(function(){
		time--;
		document.getElementById('io').innerHTML = "Redirecting..."+time;
		if(time==0){
			window.location.href = "hotel.html";
		}
	},1000)
}

var t;t="";
function getradio(t){
	this.t = t;
}

function stopTime(){
	clearInterval(Timer);
	alert("Thank You For Purchasing !!!");
}

function submission(){
	time = 30;
	second = 59;
	Timer = setInterval(function(){
		second--;
		document.getElementById('olk').innerHTML = "<br><br><br>Waiting for Payment : "+time+" minutes "+second+" seconds";
		if(second==0){
			time--;
			second=59;
		}
		if(time==0 && second==0){
			alert("PURCHASE CANCELED !!!");
		}
	},1000)
	var a=document.getElementById('cc').value;
	var b=document.getElementById('o12').value;
	var c=document.getElementById('o13').value;
	document.getElementById('aa').style.display = "none";
	document.getElementById('bb').style.display = "none";
	document.getElementById('li').innerHTML= "DETAIL PAYMENT"+"<br><br>Hotel Location : "+a+"<br><br>Room Type : "+t+"<br><br>Room Ammounts : "+g+"<br><br>Check In Date : "+b+"<br><br>Check Out Date : "+c;
	document.getElementById('lop').style.display = "block";
	document.getElementById('li').style.display = "block";
}

function skp(){
	window.location.href = "FinalP.html";
}
