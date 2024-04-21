/**
Muokkaa funktiota lowerName, jotta se palauttaa saamansa name-parametrin kokonaan pienin kirjaimin

 */

/**
Измените функцию lowName так, чтобы она возвращала полученный параметр имени только строчными буквами.

  */

function lowerName(name) {
    return name.toLowerCase()
}

// Esimerkki - älä muokkaa
console.log(lowerName('Sam')); // "sam"
console.log(lowerName('ALEX')); // "alex"



// Treenaa: Keksi itse samanlainen funktio eri nimellä

function lowerSana(name) {
    return name.toLowerCase()
}

// Kutsu tekemääsi funktiota


console.log(lowerName('Summer Is ComING soon')); // 