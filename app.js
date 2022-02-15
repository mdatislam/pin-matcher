function getPin(){
    const randomPin =Math.round(Math.random()*10000);
    const randomPinString = randomPin + '';
    const pinLength = randomPinString.length;
    if(pinLength == 4){
        document.getElementById('pin-inputField').value= randomPin;
    }
    else{
         getPin();
    }
}



document.getElementById('keys').addEventListener('click', function(event){
    const calDisplay = document.getElementById('cal-display')
    const number = event.target.innerText;
    if(isNaN(number)){
        if(number == 'C')
        {calDisplay.value = '';}
    }
    if(isNaN(number)){
        if(number == '<'){
        const preeNumber = calDisplay.value 
        const length = preeNumber.length;
        const newwNumber = preeNumber.slice(0,(length-1));
        calDisplay.value = newwNumber;
        }
    }
   else{
    const preNumber = calDisplay.value 
    const newNumber = preNumber + number
    calDisplay.value = newNumber;
   }
})



function veryfiPin(){
    document.getElementById('notify').style.display = 'block'
    const calculatorDisplay = document.getElementById('cal-display').value;
const pinNumber = document.getElementById('pin-inputField').value;
const successMsg = document.getElementById('success');
const errorMsg = document.getElementById('error');
 if(pinNumber != '' && calculatorDisplay == pinNumber){
    successMsg.style.display = 'block';
    errorMsg.style.display = 'none'
 }
 else{
    successMsg.style.display = 'none';
    errorMsg.style.display = 'block'

 }
}