// JavaScript Document

var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var image=document.createElement("img");
var image1=document.createElement("img");
var i =45;
image.src="http://etc.usf.edu/clipart/48400/48481/48481_nclockb_sm.gif";
var poshour='';
var positionx=100;
var	positiony=100;
function init()
{
	
	ctx.clearRect(0,0,200,200);
	var d = new Date();
	var hour=d.getHours();
	var mins=d.getMinutes();
	var sec=d.getSeconds();
	ctx.beginPath();
	//ctx.arc(100,100,50,0,Math.PI*2,true);
	//ctx.stroke();
	ctx.drawImage(image,0,0,200,200);
	
	
	radius=58;
	//set hour
	posh=gethxy(positionx, positiony, radius, gethour(hour));
	ctx.beginPath();
	ctx.fillStyle = "#FFA500";
	ctx.arc(posh.x,posh.y,8,0,Math.PI*2,true); 
	ctx.closePath();
	ctx.fill();
	
	radius=45;
	//set minutes
	posm=getsxy(positionx, positiony, radius, getsec(mins));
	ctx.beginPath();
	ctx.fillStyle = "#FF0188";
	ctx.arc(posm.x,posm.y,6,0,Math.PI*2,true); 
	ctx.closePath();
	ctx.fill();
	
	radius=66;
	//set second
	poss=getsxy(positionx, positiony, radius, getsec(sec));
	ctx.beginPath();
	ctx.fillStyle = "#00B5E2";
	ctx.arc(poss.x,poss.y,4.5,0,Math.PI*2,true); 
	ctx.closePath();
	ctx.fill();
	//ctx.arc(x,y,3,0,Math.PI*2,true);
	
	 
	

}
init();


function gethxy(posx, posy, rad, hr)
{
		var angle=hr*2*Math.PI/12;
	x = posx + rad * Math.cos(angle);
    y = posy + rad * Math.sin(angle);
	return {"x":x, "y":y};
}

function getsxy(posx, posy, rad, sec)
{
		var angle=sec*2*Math.PI/60;
	x = posx + rad * Math.cos(angle);
    y = posy + rad * Math.sin(angle);
	return {"x":x, "y":y};
}

function gethour(hr)
{
	if(hr > 12)
	{
		hr=hr-12-3;
	}
	else
	{
		hr=hr-3;
	}
	return hr;
	
}

function getsec(sec)
{
if(sec <= 15)
{
	sec=sec+45;	 
}
else
{
	sec=sec-15;	
}
return sec;
	
}
setInterval(init,1000);