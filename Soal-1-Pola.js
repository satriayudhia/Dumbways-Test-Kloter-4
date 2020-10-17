const cetak_gambar = (panjang) => {
  var arr = []
  for(var i = 0; i < panjang; i++) {
    arr[i] = " = "
  }
  
  arr[0] = " * "
  arr[arr.length-1] = " * "
  
  var ceil = Math.floor(arr.length / 2)
  
  for(var j = 0; j < arr.length; j++) {
    if(j == ceil) {
      arr.fill(" * ")
    } else if(j > ceil) {
      arr.fill(" = ")
      arr[0] = " * "
      arr[arr.length-1] = " * "
    }
    console.log(arr.join(""))
  }
  return arr
}

cetak_gambar(5)

