// Kehitä ohjelma, joka pyytää käyttäjää syöttämään 20 lukua. Kun kaikki luvut on syötetty,
//ohjelman tulisi näyttää, kuinka monta näistä luvuista on parillisia.
// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.

// Разработать программу, которая просит пользователя ввести 20 цифр. После того, как все числа введены,
//программа должна показать, сколько из этих чисел четные.
// Поскольку используется приглашение, это работает в браузере через html-страницу.

// (function () {
//     let i = 0;
//     let j = 0;
//     while (i < 20) {
//         let number = parseInt(
//             prompt("Enter the number " + (i + 1) + " of 20:")
//         );
//         if (number % 2 === 0) {
//             j++;
//         }
//         i++;
//     }
//     console.log("Total even numbers:", j);
// })();

// Option #2

let parilliset = 0;

for (let i = 0; i < 20; i++) {
    let syote = Number(prompt("syötä numero #" + (i + 1)));
    console.log("syöte on: ", syöte);

    if (syote % 2 == 2) {
        parilliset++;
    }
}
console.log("parillisten määrä:", parilliset);

let laskuri = 0;
let parillisetLuvut = 0;
while (laskuri < 20) {
    let input = Number(prompt("Anna lisää lukuja"));
    if (input % 2 == 0) {
        parillisetLuvut++;
    }
    laskuri++;
}
while (laskuri != 20) console.log("Parillisia lukuja oli:" + parillisetLuvut);
