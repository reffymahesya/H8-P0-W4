function attack(damage) {
  // Code disini
  var damageKurang = 2
  var damageTotal = damage - damageKurang
  
  return damageTotal
}


function damageCalculation (numberOfAttacks, damagePerAttack) {
  // Code disini
  var damage =  attack(damagePerAttack)
  // console.log(damage)
  var damageCal = numberOfAttacks * damage

  return damageCal
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90