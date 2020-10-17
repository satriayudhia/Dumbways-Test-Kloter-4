const Filter = (string) => {
  var arr = string.split('')
  var uniqueItems = Array.from(new Set(arr)) 
  return uniqueItems.join("")
}

var Fil = Filter("cbcabaccffpgkkklll")
console.log(Fil)