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
    document.getElementById('action').innerText='3'
    document.getElementById('cal-display').style.backgroundColor ='#222436';
    
 }
  else if(calculatorDisplay == ""){
    document.getElementById('cal-display').style.backgroundColor ='red';
      document.getElementById('cal-display').value ='Please Enter your Pin code Here !! '

    }
  
 else if(pinNumber != '' && calculatorDisplay != pinNumber){
    
    const actionDisplay = document.getElementById('action')
    const preValue = actionDisplay.innerText
    if(preValue>=1){
        actionDisplay.innerText  = preValue-1;
        successMsg.style.display = 'none';
        errorMsg.style.display = 'block'

    }
    else{
        document.getElementById('submit-btn').style.backgroundColor= 'red'
        actionDisplay.setAttribute('disabled', true)
        document.getElementById('try-msg').innerText = 'You cross the tring Limit'
    }
    
}

}