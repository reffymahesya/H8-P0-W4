function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var str = angka.toString()
  // console.log(str)

  if (str.length === 1){
    return angka
  } 
  else{
    var hasil = 1
    for (var i = 0; i < str.length; i++){
    hasil = hasil * str[i]
    }
  }
  return kaliTerusRekursif(hasil)
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6