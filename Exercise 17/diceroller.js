let getdiceFaces = document.getElementById('diceFaces')
console.log(getdiceFaces)
let min = 1
function rollDice(min, getdiceFaces) {
    diceFaces = parseInt(getdiceFaces.value)
    min = Math.ceil(min);
    max = Math.floor(diceFaces);
    return Math.floor(Math.random() * (diceFaces - min + 1) + min);
  }
  function onButtonPress(){
    const result = rollDice(1,getdiceFaces)
    alert(result)
}