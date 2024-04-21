/**
* Tätä ohjelmaa varten tarvitaan verkkosivua, eli se ei toimi pelkästään konsolissa.
* Joten tee ensin html sivu ja linkkaa tämä tiedosto siihen. Prompt-ikkuna aukeaa sivulle, testaa Live serverin avulla.
* Luo ohjelma getTemperature, joka kysyy käyttäjältä lämpötilaa Celsius-asteina ja sitten tulostaa, pitäisikö heidän pukea takki päälle (jos lämpötila on alle 15°C) vai ei.
*/

/**
* Для этой программы требуется веб-сайт, поэтому она работает не только на консоли.
* Итак, сначала создайте HTML-страницу и свяжите с ней этот файл. 
* В окне подсказки откроется страница, протестируйте с помощью Live-сервера.
* Создайте программу getTemperature, которая запрашивает у пользователя температуру в градусах Цельсия, 
* а затем печатает, следует ли ему надевать куртку (если температура ниже 15°C) или нет.
*/

function getTemperature(temp) {
    if (temp >= 15) {return 'You can go without coat'}
    else {return 'Please put on coat'};
}


let esimerkki = prompt('Mikä on nykyinen lämpötila?');

let numero = Number(esimerkki);

getTemperature(numero);


// Treenaa: Keksi itse samanlainen funktio eri nimellä




// Kutsu tekemääsi funktiota