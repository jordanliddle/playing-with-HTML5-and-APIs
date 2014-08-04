var mygame = {
	canvas: {
		ctx:'',
		offsetx: 0,
		offsety: 0
	},
	ship: {
		x: 300,
		y: 200,
		movex: 0,
		movey: 0,
		speed: 1
	},
	initiate: function() {
		var elem = document.getElementById('canvas');
		mygame.canvas.ctx = elem.getContext('2d');
		mygame.canvas.offsetx = elem.offsetLeft;
		mygame.canvas.offsety = elem.offsetTop;
		document.addEventListener('click', function(e) {mygame.control(e);});
		mygame.loop();
	},
	loop: function(){
		if(mygame.ship.speed){
			mygame.process();
			mygame.detect();
			mygame.draw();
			webkitRequestAnimationFrame(function(){mygame.loop() });
		}else{
			mygame.canvas.ctx.font = "bold 36px verdana, sans-serif";
			mygame.canvas.ctx.fillText('Game Over!', 182, 210);
		}
	},
	control:function(e){
		var distancex = e.clientX - (mygame.canvas.offsetx + mygame.ship.x);
		var distancey = e.clientY - (mygame.canvas.offsety + mygame.ship.y);
		var ang = Math.atan(distancex,distancey);
		mygame.ship.movex = Math.sin(ang);
		mygame.ship.movey = Math.cos(ang);
		mygame.ship.speed += 1;
	},
	draw: function() {
		mygame.canvas.ctx.clearRect(0,0,600,400);
		mygame.canvas.ctx.beginPath();
		mygame.canvas.ctx.arc(mygame.ship.x, mygame.ship.y, 20, 0, Math.PI/180 * 360, false);
		mygame.canvas.ctx.fill();
	},
	process: function() {
		mygame.ship.x += mygame.ship.movex * mygame.ship.speed;
		mygame.ship.y += mygame.ship.movey * mygame.ship.speed;
	},
	detect: function() {
		if(mygame.ship.x < 0 || mygame.ship.x > 600 || mygame.ship.y < 0 || mygame.ship.speed.y > 400) {
			mygame.ship.speed = 0;
		}
		}
		
	};
	addEventListener('load',function(){ mygame.initiate(); });