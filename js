hello = "Привет мир"
let num1
let operation
function set_operation(op){
    number = document.forms.screen.data.value
      num1 = number
  operation = op
  document.forms.screen.data.value = ""
}
function sin(){
    document.forms.screen.data.value = Math.sin
  number = parseFloat(number)
  let res = Math.sin(number)
  document.forms.screen.data.value = res
}
function put_to_memory() {
  let number = document.forms.screen.data.value
  value = number
  document.forms.screen.data.value = ""
}
function input_pi() {
    document.forms.screen.data.value = Math.PI
  }
  function result(){
    number = document.forms.screen.data.value
  num1 = parseFloat(num1)
  number = parseFloat(number)
  if (operation == "+"){
    let res = num1 + number
  document.forms.screen.data.value = res
}
  if (operation == "-"){
    let res = num1 - number
  document.forms.screen.data.value = res
}
  if (operation == ":") {
    let res = num1 / number
  document.forms.screen.data.value = res
}
  if (operation == "*") {
    let res = num1 * number
  document.forms.screen.data.value = res
}
}
function init(){
    el = document.getElementById("hello")
  el.innerHTML = hello
}
el = document.getElementById("hello")
el.innerHTML = hello

function add_digit(n){
    number = document.forms.screen.data.value
    number += n
document.forms.screen.data.value = number
}
