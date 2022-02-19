const caroHolder = new CaroHolder("mycaro", "mycaroInd",
 ["./assets/img/carousel/1.jpg", "./assets/img/carousel/2.jpg", "./assets/img/carousel/3.jpg", "./assets/img/carousel/4.jpg"],
 ["./assets/img/carousel/m1.jpg", "./assets/img/carousel/m2.jpg", "./assets/img/carousel/m3.jpg", "./assets/img/carousel/m4.jpg"],
 [, , , "./pages/books.html"]);




fillGrid("presents", 8, "./assets/img/homePage", "jpg", []);




const contentHolder = new ContentHolder();
contentHolder.addContent("./assets/img/items/sales/1.png", "Подгузники детские", "11.50$");
contentHolder.addContent("./assets/img/items/sales/2.png",  "Щетка кухонная", "2.99$");
contentHolder.addContent("./assets/img/items/sales/3.png", "Фитнес-браслет", "33.99$");
contentHolder.addContent("./assets/img/items/sales/4.png", "Угловая шлифмашина", "39.90$");
contentHolder.addContent("./assets/img/items/sales/5.png", "Маска одноразовая", "5.90$");
contentHolder.addContent("./assets/img/items/sales/6.png", "Автокресло детское", "59.90$");


const carousel = new AdaptiveCarousel(contentHolder);

const cont = document.getElementById("karlsson");
cont.appendChild(carousel.element);



