function calcContainerWidth(){
  let w = document.documentElement.scrollWidth;
  let r = w;
  if(w >= 1200)
    r = 1140;
  else if(w >= 992)
    r = 960;
  else if(w >= 768)
    r = 720;
  else if(w >= 576)
    r = 540;
  return r;
}

class Indic{
	#li;
	constructor(i){
		const li = document.createElement("li");
		li.setAttribute("data-target", "#carouselExampleIndicators");
		li.setAttribute("data-slide-to", `${i}`);
		if(i==0) li.setAttribute("class", "active");
		this.#li = li;
	}

	get element(){
		return this.#li;
	}
}

class Item{
	#item; #img;
	constructor(isActive){
		this.#item = document.createElement("div");
		this.#item.setAttribute("class", "carousel-item roundedImg hoverscale");
		this.#img = document.createElement("img");
		this.#img.setAttribute("class", "d-block w-100 roundedImg hoverscale");
		if(isActive) this.#item.classList.add("active");
		this.#item.appendChild(this.#img);
	}

	get element(){
		return this.#item;
	}
	getImg(){
		return this.#img;
	}
	setImgDir(dir){
		this.#img.setAttribute("src", dir);
	}
}

class CaroHolder{
	#width;
	#caro; #caroInds;
	#imgsBig; #imgsSmall;
	#items;
	#links;
	constructor(caroId, caroIndsId, imgsBig, imgsSmall, links){
		this.#caro = document.getElementById(caroId);
		this.#caroInds = document.getElementById(caroIndsId);
		this.#links = links;

		this.#imgsBig = imgsBig;
		this.#imgsSmall = imgsSmall;
		this.#items = [];
		this.#width = calcContainerWidth();
		this.#createElement(!(this.#width < 720));
		this.setListeners();
	}

	#createElement(isBig){
		const l = this.#imgsBig.length;
		for(let i=0; i<l; i++){
			const ind0 = new Indic(i);
			this.#caroInds.appendChild(ind0.element);

			this.#items[i] = new Item(i==0);
			this.#items[i].setImgDir(isBig ? this.#imgsBig[i] : this.#imgsSmall[i]);
			// if(this.#links[i]) this.#items[i].element.addEventListener("click", () => {window.location.href = this.#links[i]});

			this.#caro.appendChild(this.#items[i].element);
		}
	}

	updateAdap(isBig){
		for(let i=0; i<this.#imgsBig.length; i++)
			this.#items[i].setImgDir(isBig ? this.#imgsBig[i] : this.#imgsSmall[i]);
	}
	
	setListeners(){
		window.addEventListener("resize", (e) => {
			if(this.#width != calcContainerWidth()){
				this.#width = calcContainerWidth();
				if(this.#width < 720)
					this.updateAdap(false);
				else
					this.updateAdap(true);
			}
		});
	}	
}