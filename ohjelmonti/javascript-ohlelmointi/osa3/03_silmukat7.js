//Tee ohjelma, joka kysyy kymmentä numeroa. Ohjelma laskee ja tulostaa summan ja keskiarvon sekä
//tulostaa pienimmän ja suurimman numeron.

//Создать программу, которая запрашивает десять чисел. Программа рассчитывает и печатает сумму и среднее значение.
//выводим наименьшее и наибольшее число.

(function () {
    let num;
    let i = 1;
    let sum = 0;

    do {
        num = Number(prompt("Enter #" + i + " number of 10:"));
        i++;
        sum += num;

        console.log("Haluatko jatkaa numeroiden antamista? (k/e)");
    } while (i !== 11);

    let averageAmount = sum / (i - 1);
    console.log(
        "Numeroiden määrä on",
        i - 1,
        ", lukujen summa on",
        sum,
        ". Keskimääräinen summa on",
        averageAmount
    );
})();
