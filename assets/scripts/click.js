const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

function randomColor(){
	let a = rand(0, 3);
	if(a == 0)
		a = "#B5B5B5";
	else if(a == 1)
		a = "#B5B5B5";
	else
		a = "yellow";
	return a;
}

class Vector {
	#x;
	#y;
	constructor(x, y){
		this.#x = x;
		this.#y = y;
	}
	x(){ return this.#x; }
	y(){ return this.#y; }

	setX(x){ this.#x = x; }
	setY(y){ this.#y = y; }

	addX(x){ this.#x += x; }
	addY(y){ this.#y += y; }
}


class Spark {
	#width;
	#height;
	#acc;
	#position;
	#velocity;
	#ob;

	constructor(x, y){
		this.#width = rand(3, 5);
		this.#height = this.#width;

		this.#acc = new Vector(0, 1000);
		this.#position = new Vector(x, y);
		this.#velocity = new Vector(rand(-500, 500), rand(-500, -300));

		this.#ob = this.#createObj();
	}

	#createObj(){
		let ob = document.createElement("div");
		document.body.appendChild(ob);
		ob.style.backgroundColor = randomColor();

		ob.style.position = "absolute";

		ob.style.left = `${this.#position.x()}px`
		ob.style.top = `${this.#position.y()}px`

		ob.style.width = `${this.#width}px`;
		ob.style.height = `${this.#height}px`;

		return ob;
	}

	update(dt){
		this.updateVel(dt);
		this.updatePos(dt);
	}

	updatePos(dt){
		this.#position.addX(dt * this.#velocity.x());
		this.#position.addY(dt * this.#velocity.y());

		this.#ob.style.left = `${this.#position.x()}px`;
		this.#ob.style.top = `${this.#position.y()}px`;
	}

	updateVel(dt){
		// this.#velocity.addX(dt * this.#acc.x());
		this.#velocity.addY(dt * this.#acc.y());
	}

	delete(){
		this.#ob.remove();
	}
}


class Explosion{
	#sparks;

	constructor(x, y){
		let n = rand(10, 20);
		this.#sparks = [];
		for(let i=0; i<n; i++)
			this.#sparks[i] = new Spark(x, y);
	}

	update(dt){
		for(let i=0; i<this.#sparks.length; i++)
			this.#sparks[i].update(dt);
	}

	delete(){
		for(let i=0; i<this.#sparks.length; i++)
			this.#sparks[i].delete();
	}
}


function explode(x, y){
	//fps
	const dt = 20 / 1000;

	const start = Date.now(); // запомнить время начала

	const obj = new Explosion(x, y);

	const timer = setInterval(function() {
		// сколько времени прошло с начала анимации?
		let timePassed = Date.now() - start;

		if (timePassed >= 500) {
			clearInterval(timer); // закончить анимацию через 0.5 секунды
			obj.delete();
			return;
		}else {
			obj.update(dt);
		}
	}, 20)
};


function soundPlay(dir) {
	try{
		let audio = new Audio();
		audio.src = dir;
		audio.play();
	} catch(e){

	}
}

function setClickListener(soundDir){
	window.addEventListener("mousedown", (e)=>{
		let x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		let y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		explode(x, y);
		soundPlay(soundDir);
	});
}

