fillGrid("benefits", 4, "./img/about", "png", []);



const caroHolder = new CaroHolder("mycaro", "mycaroInd",
 ["./assets/img/carousel/1.jpg", "./assets/img/carousel/2.jpg", "./assets/img/carousel/3.jpg", "./assets/img/carousel/4.jpg"],
 ["./assets/img/carousel/m1.jpg", "./assets/img/carousel/m2.jpg", "./assets/img/carousel/m3.jpg", "./assets/img/carousel/m4.jpg"],
 [, , , "./pages/books.html"]);




fillGrid("presents", 8, "./assets/img/homePage", "jpg", []);





const contentHolder = new ContentHolder();
contentHolder.addContent("./assets/img/items/sales/1.png", "Подгузники де...", "11.50$");
contentHolder.addContent("./assets/img/items/sales/2.png",  "Щетка кухонная", "2.99$");
contentHolder.addContent("./assets/img/items/sales/3.png", "Фитнес-браслет", "33.99$");
contentHolder.addContent("./assets/img/items/sales/4.png", "Угловая шлиф...", "39.90$");
contentHolder.addContent("./assets/img/items/sales/5.png", "Маска однор...", "5.90$");
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
contentHolder2.addContent("./assets/img/items/interesting/1.png", "Электрическая зуб...", "11.50$");
contentHolder2.addContent("./assets/img/items/interesting/2.png",  "Колонка JBL", "29.99$");
contentHolder2.addContent("./assets/img/items/interesting/3.png", "Кофемашина EP4", "63.99$");
contentHolder2.addContent("./assets/img/items/interesting/4.png", "Видеокарта Nvidia", "1200.90$");
contentHolder2.addContent("./assets/img/items/interesting/5.png", "Медиаплеер Xiomi", "35.90$");

const carousel2 = new AdaptiveCarousel(contentHolder2);

const cont2 = document.getElementById("karlsson2");
cont2.appendChild(carousel2.element);