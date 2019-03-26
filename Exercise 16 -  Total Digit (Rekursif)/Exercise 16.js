function totalDigitRekursif(angka) {
  // you can only write your code here!
  var str = angka.toString()
  // console.log(str)

  if (str.length === 1){
    return angka
  } else {
    var awal = Number(str[0]) //Angka pertama
    // console.log(awal)
    var potong = Number(str.slice(1)) //Potong string
    // console.log(potong)

    return awal + totalDigitRekursif(potong)
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5