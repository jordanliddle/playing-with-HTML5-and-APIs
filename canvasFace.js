function initiate() {
	var elem = document.getElementById('canvas');
	var canvas = elem.getContext('2d');

	// head //
	canvas.lineWidth = 5;
	canvas.beginPath();
	canvas.arc(200,150,50,0,Math.PI * 2, false);
	canvas.stroke();
	
	// mouth //
	canvas.lineWidth = 2;
	canvas.lineCap = "round";
	canvas.beginPath();
	canvas.moveTo(230,150);
	canvas.arc(200,150,30,0,Math.PI*.5,false);
	canvas.stroke();
	
	// nose //
	canvas.lineWidth = 5;
	canvas.lineJoin = "bevel";
	canvas.beginPath();
	canvas.moveTo(195,135);
	canvas.lineTo(215,155);
	canvas.lineTo(195,155);
	canvas.stroke();
	
	// left eye //
	canvas.lineWidth = 6;
	canvas.beginPath();
	canvas.moveTo(190,125);
	canvas.arc(185,125,5,0,Math.PI*2,false);
	canvas.stroke();
	//right eye //
	canvas.lineWidth = 6;
	canvas.beginPath();
	canvas.moveTo(205,125);
	canvas.arc(200,125,5,0,Math.PI*2,false);
	canvas.stroke();
	
}
addEventListener("load", initiate);
