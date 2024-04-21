//Tee ohjelma, joka tulostaa kaikki parittomat numerot 1 ja 100 välillä. Eli 1, 3, 5, 7, 9, 11 jne. 
//Создать программу, которая печатает все нечетные числа от 1 до 100. Итак, 1, 3, 5, 7, 9, 11 и т. д.

for (let i = 1; i < 100; i+=2) {
    console.log(i);
}

let j = 1
while (j < 100) {
    console.log(j);
    j+=2
}

let l = "";
for (let k = 1; k < 100; k+=2){
    l += k + ", "

}

