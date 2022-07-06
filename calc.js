//1. display number in text box
function displayNum(num) {
    result.value += num
}
//2. clear text box
function clearBox(num) {
    result.value = ""
}
   //3.evaluate expression
function evaluateExpr(num){
    result.value = eval(result.value)
}
//4.remove the last item from the textbox
function removeItem(num){
    curExp = result.value
    result.value = curExp.slice(0,-1)
}