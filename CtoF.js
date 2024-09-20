const boxctof = document.getElementById("checkctof")
const boxftoc = document.getElementById("checkftoc")
const numberinput = document.getElementById("numberinput")
const answer = document.getElementById("answer")
let temp

function convert(){
    if(isNaN(numberinput.value)){
        answer.textContent = "can not convert letters"
    }
    else{
        if(boxctof.checked && boxftoc.checked){
            answer.textContent = "error"
        }
        else if(boxctof.checked){
            temp = Number(numberinput.value)
            temp = temp * 9 / 5 + 32
            answer.textContent = temp + "°F"
        }
        else if(boxftoc.checked){
            temp = Number(numberinput.value)
            temp = (temp - 32) * 5 / 9
            answer.textContent = temp + "°C"
        }
        else{
            answer.textContent = "you forget to select unit"
        }
    }
}
