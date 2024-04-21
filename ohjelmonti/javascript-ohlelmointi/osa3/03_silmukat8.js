// Tee ohjelma, joka kysyy aluksi käyttäjältä, kuinka monta numeroa he haluavat syöttää.
//Saatuaan tämän tiedon ohjelman tulisi pyytää käyttäjää syöttämään jokainen näistä numeroista.
//Kun kaikki numerot on syötetty, ohjelman tulisi selvittää ja näyttää käyttäjän antamista numeroista pienin ja suurin.

// Создать программу, которая сначала спрашивает пользователя, сколько чисел он хочет ввести.
//После получения этой информации программа должна предложить пользователю ввести каждое из этих чисел.
//Когда все числа введены, программа должна найти и отобразить наименьшее и наибольшее из введенных пользователем чисел.

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
