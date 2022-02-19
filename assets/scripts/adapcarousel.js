class Card {
    #x; #y; #width; #height;
    //Card element
    #ob;
    // Elements
    #img; #title; #text; #link;

    constructor(x, y, width, height){ //arg height
        this.#x = x;
        this.#y = y;
        this.#width = width;
        this.#height = height;
        this.#ob = this.#createCard();
        this.#setListener();
    }

    #setListener(){
      this.#ob.addEventListener("click", () => {if(this.#link) window.location.href = this.#link});
      this.#ob.addEventListener("mouseover", () => this.#ob.classList.add("border-dark"));
      this.#ob.addEventListener("mouseout", () => this.#ob.classList.remove("border-dark"));
    }
    #createCard(){
        let ob = document.createElement("div");
        ob.setAttribute("class", "card  swipperCol hoverscale");
        ob.style.borderRadius = "1rem";
        // console.log(this.#height);
        ob.style.width = `${this.#width}px`;
        if(this.#height != -1) ob.style.height = `${this.#height}px`
        ob.style.margin = "0.5rem"
        // ob.style.height = `${this.#height}px`;
        // ob.style.backgroundColor = "black";
        ob.style.display = "inline-block";

        // IMAGE
        this.#img = document.createElement("img");
        this.#img.setAttribute("class", "card-img-top");
        this.#img.setAttribute("alt", "image");
        this.#img.setAttribute("width", `${this.#width}`);
        this.#img.style.borderRadius = "1rem";
        this.#img.setAttribute("height", `${this.#width}`);


        // this.setImgDir("./assets/img/sleepy.jpg");

        ob.appendChild(this.#img);

        // BODY
        let card_body = document.createElement("div");
        card_body.setAttribute("class", "card-body");

        this.#title = document.createElement("h5");
        this.#title.setAttribute("class", "card-title");
        // this.#title.textContent = "TITLE";
        card_body.appendChild(this.#title);

        this.#text = document.createElement("p");
        // this.setText("Some text Some text Some text Some text Some text");
        this.#text.setAttribute("class", "card-text");
        card_body.appendChild(this.#text);

        // const btn = document.createElement("a");
        // btn.textContent = "view";
        // btn.setAttribute("class", "btn btn-primary");
        // card_body.appendChild(btn);

        ob.appendChild(card_body);

        return ob;
    }

    setImgDir(imgDir){
        this.#img.setAttribute("src", imgDir);
    }
    setTitle(titleText){
        this.#title.textContent = titleText;
        // while (this.#title.firstChild)
          // this.#title.removeChild();
        // this.#title.insertAdjacentHTML('afterbegin', titleText);
    }
    setText(text){
        this.#text.textContent = text;
        // this.#text.insertAdjacentHTML('afterbegin', text);
        // console.log(this.#text);

    }
    setLink(link){
      this.#link = link;
    }

    get element(){
        return this.#ob;
    }
}
class MyCarousel {
    #WIDTH; #HEIGHT;
    #VISIBLE_N;
    #containerElement;

    #carousel;
    #cards;
    #prevBtn; #nextBtn;

    constructor(VISIBLE_N=3, HEIGHT=-1, WIDTH=240){
        // WIDTH нужно расчитывать как-нибудь
        this.#WIDTH = WIDTH;
        this.#VISIBLE_N = VISIBLE_N;

        if(HEIGHT!=-1)  this.#HEIGHT = HEIGHT;

        this.#containerElement = document.createElement("div");
        this.#containerElement.setAttribute("class", "container");

        // CARD BASE
        this.#carousel = document.createElement("div");
        this.#carousel.style.display = "inline-block";
        this.#containerElement.style.textAlign = "center";

        

        // BUTTONS
        // const buttons = document.createElement("div");
        // buttons.style.display = "inline-block";
        // buttons.style.textAlign = "center";

        this.#prevBtn = this.#createBtn(false);
        this.#containerElement.appendChild(this.#prevBtn);

        this.createCards();
        this.#containerElement.appendChild(this.#carousel);

        this.#nextBtn = this.#createBtn(true);
        this.#containerElement.appendChild(this.#nextBtn);

        // this.#containerElement.appendChild(buttons);
    }


    #createBtn(isNext){
        const btn = document.createElement("button");
        btn.setAttribute("type", "button");
        btn.setAttribute("class", "btn btn-outline-dark");
        // btn.style.width = "100px";
        // ==btn.style.height = "30px";
        btn.style.margin = "0.5rem 0.5rem 5rem 0.5rem";

        const ic = document.createElement("i");
        // ic.setAttribute("style", "font-size:2rem");
        ic.setAttribute("class", isNext ? "fa fa-arrow-right" : "fa fa-arrow-left");
        btn.appendChild(ic);
        return btn;
    }

    createCards(){
      this.#cards = [];
      for(let i=0; i<this.#VISIBLE_N; i++){
          this.#cards[i] = new Card(this.#containerElement.clientX, this.#containerElement.clientY, this.#WIDTH, this.#HEIGHT);
          this.#carousel.appendChild(this.#cards[i].element);
      }
    }

    getNextBtn(){
        return this.#nextBtn
    }

    getPrevBtn(){
        return this.#prevBtn;
    }

    getCards(){
        return this.#cards;
    }

    setCardContent(i, content){
      this.#cards[i].setImgDir(content.getImgDir());
      this.#cards[i].setTitle(content.getTitle());
      this.#cards[i].setText(content.getText());
      this.#cards[i].setLink(content.getLink());
    }

    getVisibleNs(){
      return this.#VISIBLE_N;
    }
    setVisibleNs(n){
      this.#VISIBLE_N = n;
    }

    remove(){
      this.#containerElement.remove();
    }

    removeCards(){
      for(let i=0; i<this.#VISIBLE_N; i++)
        this.#cards[i].element.remove();
    }

    get element(){
      return this.#containerElement;
    }
}

class MyContent {
    #imgDir; #title; #text; #link;
    constructor(imgDir, title, text, link){
        this.#imgDir = imgDir;
        this.#title = title;
        this.#text = text;
        this.#link = link;
    }

    getImgDir(){
      return this.#imgDir;
    }
    getTitle(){
      return this.#title;
    }
    getText(){
      return this.#text;
    }
    getLink(){
      return this.#link;
    }
}
class ContentHolder {
    #contentArr;

    constructor(){
        this.#contentArr = [];
    }

    addContent(imgDir, title, text, link){
        this.#contentArr[this.len()] = new MyContent(imgDir, title, text, link);
    }

    getContent(i){
        return this.#contentArr[i];
    }

    len(){
        return this.#contentArr.length;
    }
}
class MyManager {
  #carousel;
  #contentHolder;
  #activeOnes;

  constructor(carousel, contentHolder){
    this.#carousel = carousel;
    //contentHolder должен иметь контент больше трех
    this.#contentHolder = contentHolder;
    this.setActiveOnes();
    this.setListeners();
  }

  setActiveOnes(){
    this.#activeOnes = [];
    for(let i=0; i<this.#carousel.getVisibleNs(); i++)
      this.#activeOnes[i] = i;
    this.updateActiveOnes(this.#activeOnes);
  }

  updateActiveOnes(activeOnes){
    this.#activeOnes = activeOnes;
    const l = activeOnes.length;
    for(let i=0; i<l; i++){
      this.#carousel.setCardContent(i, this.#contentHolder.getContent(activeOnes[i]));
    }
  }

  static shiftActives(shift, actives, len){
    return actives.map(x=>{
        const n = x + shift;
        let a = n - (Math.floor(n / len)) * len;
        if(a < 0) a = len - a;
        return a;
    });
  }

  setListeners(){
    this.#carousel.getNextBtn().addEventListener("click", () => this.updateActiveOnes(MyManager.shiftActives(+1, this.#activeOnes, this.#contentHolder.len())));
    this.#carousel.getPrevBtn().addEventListener("click", () => this.updateActiveOnes(MyManager.shiftActives(-1, this.#activeOnes, this.#contentHolder.len())));
  }
}

function calcContainerWidth(w){
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
class AdaptiveCarousel {
  #containerWidth;
  #carousel;
  #manager;
  #width;
  constructor(contentHolder, height=-1, width=170){
    this.#containerWidth = calcContainerWidth(document.documentElement.scrollWidth);
    this.#width = width;
    this.#carousel = new MyCarousel(this.#ns(), height, width);
    this.#manager = new MyManager(this.#carousel, contentHolder);
    this.setListener();
  }

  #ns(){
    return this.#containerWidth < 540 ? 1 : (this.#containerWidth < 720 ? 2 : (this.#containerWidth < 960 ? 3 : (this.#containerWidth < 1140 ? 4 : 5)));
  }

  #changeCards(){
    this.#carousel.removeCards();
    this.#carousel.setVisibleNs(this.#ns());
    this.#carousel.createCards();
  }

  setListener(){
    window.addEventListener("resize", (e) => {
      const width = calcContainerWidth(document.documentElement.scrollWidth);
      if(this.#containerWidth != width){
        this.#containerWidth = width;
        this.#changeCards();
        //this.#manager = new MyManager(this.#carousel, contentHolder);
        this.#manager.setActiveOnes();
      }
    });
  }

  get element(){
    return this.#carousel.element;
  }
}
