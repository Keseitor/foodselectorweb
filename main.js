function randomInt(max){
    return Math.floor(Math.random() * max);
}

document.querySelector('#newFood').onclick = function(){
    let selected = randomInt(10);
    let dish;
    let desc;
    let img;

    switch (selected){
        case 0:
            dish = 'Italiana';
            desc = 'La más internacional de las cocinas del mundo (¿donde no hay una pizzería o una trattoria para disfrutar de una buena pizza o un delicioso plato de pasta?) tiene en los productos mediterráneos su base casi inamovible a la que da varias vueltas de tuerca para convertirla en una de las más apreciadas. A pesar de su variedad –la cocina lombarda poco se parece a la siciliana– la gastronomía italiana se caracteriza por lo esencial, por condensar los aromas y sabores de sus ingredientes más cercanos (recordemos que el slow food tiene en la Toscana su cuna).';
            img = 'images/dishes/italian.jpg';
            break;
        case 1:
            dish = 'Griega'; 
            desc = 'La esencia del Mediterráneo es la base de la gastronomía griega elaborada con ingredientes frescos como tomates, patatas, queso de cabra o pescado, y siempre aliñados con aceite de oliva. Las ensaladas, el gyros (carna asada), las sopas o la famosa musaka (lasaña con berenjenas) no pueden dejarse de probar en un viaje al país helénico con gran historia y tradición por todos lados.';
            img = 'images/dishes/greek.jpg';
            break;
        case 2:
            dish = 'Española';
            desc = 'Cada rincón de España produce, elabora y consume distintas especialidades gastronómicas que si bien son muy distintas entre ellas, tienen varios denominadores comunes como el uso de ingredientes de proximidad, la profusión y mezcla de sabores, así como el reto de ir modernizando las recetas hasta convertirlas en platillos de fama internacional. El País Vasco y Cataluña están la cabeza en cuanto a sofisticación y excelencia gastronómica, pero no hay que olvidar los deliciosos productos del resto de España como el jamón extremeño, el marisco gallego y la amplia gama de vinos de todo el territorio. ';
            img = 'images/dishes/spanish.jpg';
            break;
        case 3:
            dish = 'Mexicana';
            desc = 'Si te gusta el picante, esta es tu comida. La mexicana es una de las cocinas más ricas, elaboradas y populares del mundo. Basta recordar algunos de sus platos más tradicionales: guacamole, nachos, quesadillas, enchiladas de mole, fajitas, flautas, carnitas, tacos de pollo y guacamole, tamales… que una vez probados, no se olvidan. El secreto es la mezcla de las distintas cocinas que conviven en su territorio, empezando por la de sus antiguos habitantes, mayas y aztecas, la española y la norteamericana, y el uso de productos autóctonos, sobre todo la gran variedad chiles que define el sabor de sus platos';
            img = 'images/dishes/mexican.jpg';
            break;
        case 4:
            dish = 'Francesa';
            desc = 'Durante años ha sido el emblema de la gran cocina mundial, y desde 2010, su gastronomía forma parte del Patrimonio Inmaterial de la Humanidad, lo que da una idea de la trascendencia que tiene la comida en este país y la gran influencia que ejerce en todo el mundo. Además del uso de productos de gran calidad, la cocina francesa se caracteriza por su constante innovación y porque en Francia el hecho de comer va más allá y se convierte en un acto social de gran relevancia. En el territorio francés se pueden encontrar numerosos restaurantes distinguidos con estrellas Michelin, pero también infinidad de pequeños bistrós donde sirven las mejores delicias de la cocina francesa.';
            img = 'images/dishes/french.jpg';
            break;
        case 5:
            dish = 'Peruana';
            desc = 'Aclamado por muchos como el mejor destino culinario del mundo, en 2014 recibió el World Travel Awards por la riqueza, originalidad y diversidad de su gastronomía y por el empeño empresarial que la promueve. Lima, la capital, alberga un buen puñado de reputados restaurantes, pero en cualquier lugar del país se puede disfrutar con las inspiradas recetas peruanas que tienen en el ceviche (pescado crudo y marinado), el ají de gallina y los camarones acaramelados, tres de sus especialidades más tradicionales y a la vez innovadoras.';
            img = 'images/dishes/peruvian.jpg';
            break;
        case 6:
            dish = 'Tailandesa';
            desc = 'Encrucijada de caminos entre India, China y Oceanía, Tailandia ha captado lo mejor de la gastronomía de esos países y ha lo ha incorporado a su cocina que se caracteriza por la mezcla de sabores ácidos, salados, picantes y dulces y por la abundancia de condimentos. A los muchos matices de sus platos hay que añadir la presentación, de gran importancia en este territorio. Sus guisos más internacionales son el Pad Thai, el Tom Kha Gai, el Nevayum o el Khao Mangal.';
            img = 'images/dishes/thailandese.jpg';
            break;
        case 7:
            dish = 'Danesa'
            desc = 'Cuando se habla de destinos gastronómicos es inevitable pensar en las maravillas de la cocina francesa, española o italiana. Sin embargo, para encontrar una de las grandes capitales gastronómicas del mundo hay que mirar al norte: a Copenhague, la ciudad del mundo que cuenta con más estrellas Michelin, nada menos que 17, repartidas en 15 restaurantes.  ';
            img = 'images/dishes/danese.jpg';
            break;
        case 8:
            dish = 'Japonesa'
            desc = 'El archiconocido sushi, elaborado a base de arroz y diversos ingredientes frescos como pescado o marisco, es tan sólo una pequeña parte de la extensa gastronomía nipona. Sopas, carnes maceradas, otras especialidades a base de arroz y pescado como el maki, también las tempuras y todo tipo de verduras cocidas al dente… hoy se pueden disfrutar en casi cualquier lugar del mundo, aunque siempre tendrán mejor sabor si las tomamos en uno de los muchos mercados gastronómicos de las calles de Tokio.';
            img = 'images/dishes/japanese.jpg';
            break;
        case 9:
            dish = 'Estadounidense'
            desc = 'Un paseo por las calles de Brooklyn y de Manhattan ofrece un sinfín de posibilidades con lo mejor de la cocina italiana, japonesa, china, rusa y de un largo etcétera de nacionalidades. Los que gusten de la cocina genuinamente norteamericana, también encontrarán el restaurante donde degustar las mejores hamburguesas de medio kilo acompañada de tiernas y crujientes fries.';
            img = 'images/dishes/american.jpg';
            break;
        default:
            break;
    }
    document.getElementById('dishName').innerHTML = dish;
    document.getElementById('dishDesc').innerHTML = desc;
    document.getElementById('dishImg').src = img;
}