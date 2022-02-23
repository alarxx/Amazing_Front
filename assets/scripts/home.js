fillGrid("benefits", 4, "./img/about", "png", []);



const caroHolder = new CaroHolder("mycaro", "mycaroInd",
 ["./assets/img/carousel/1.jpg", "./assets/img/carousel/2.jpg", "./assets/img/carousel/3.jpg", "./assets/img/carousel/4.jpg"],
 ["./assets/img/carousel/m1.jpg", "./assets/img/carousel/m2.jpg", "./assets/img/carousel/m3.jpg", "./assets/img/carousel/m4.jpg"],
 ["#"]);




fillGrid("presents", 8, "./assets/img/homePage", "jpg", []);





const contentHolder = new ContentHolder();
contentHolder.addContent("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-silver-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000", "MacBook Pro M1", "1,499$", "./pages/productForBeiba.html");
contentHolder.addContent("./assets/img/items/sales/2.png",  "Щетка кухонная", "2.99$");
contentHolder.addContent("./assets/img/items/sales/3.png", "Фитнес-браслет", "33.99$");
contentHolder.addContent("./assets/img/items/sales/4.png", "Угловая шлиф...", "39.90$");
contentHolder.addContent("./assets/img/items/booksPar/5.png", "Гравити фолз", "5.90$", "./pages/productForAlar.html");
contentHolder.addContent("./assets/img/items/sales/6.png", "Автокресло дет...", "59.90$");

const carousel = new AdaptiveCarousel(contentHolder);

const cont = document.getElementById("karlsson");
cont.appendChild(carousel.element);



fillGrid("presents2", 4, "./assets/img/homePage/two", "jpg", []);


// JQuery
    $( ".pDecripText" ).hide();
        $( ".pDecrip" ).click(function() {
          $( ".pDecripText" ).toggle( "slow" );
    });



const contentHolder2 = new ContentHolder();
contentHolder2.addContent("./assets/img/items/zooDogs/3.png", "Поводок рулетка", "3.99$", "./pages/productForDaur.html");
contentHolder2.addContent("./assets/img/items/interesting/2.png",  "Колонка JBL", "29.99$");
contentHolder2.addContent("./assets/img/items/interesting/3.png", "Кофемашина EP4", "63.99$");
contentHolder2.addContent("./assets/img/items/interesting/4.png", "Видеокарта Nvidia", "1200.90$");
contentHolder2.addContent("./assets/img/items/interesting/5.png", "Медиаплеер Xiomi", "35.90$");

const carousel2 = new AdaptiveCarousel(contentHolder2);

const cont2 = document.getElementById("karlsson2");
cont2.appendChild(carousel2.element);
