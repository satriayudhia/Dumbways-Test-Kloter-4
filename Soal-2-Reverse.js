const Reverse = (number) => {
  var numberRev = []
  for(var i = number.length; i >= 0; i--) {
      numberRev[number.length - i] = number[i]
  }
  return numberRev.filter(x => x != null)
}

var Rev = Reverse([19,22,3,28,26,17,18,4,28,0])
console.log(Rev)