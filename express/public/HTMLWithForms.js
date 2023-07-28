let cardno;
let condition;
let numerr;
let holdername;
let nameerr;
let cvc;
let cvcerr;
document.querySelector('#Number').onchange = () =>{
     cardno="";
     condition = /^(?:4\d{12}(?:\d{3})?)$/;
    cardno=document.querySelector('#Number').value;
    if(cardno!=""&&cardno.match(condition)){
               document.querySelector('.cardnumber').innerText = cardno;
               document.querySelector('#Number').style.border="2px solid green";
               numerr=true;
    }
    else{
            document.querySelector('#Number').style.border="2px solid red";
            numerr=false;
    }
}
document.querySelector('#Name').onchange = () =>{
       holdername=document.querySelector('#Name').value;
        condition= /[a-zA-Z]/;    
    if(holdername!=""&&holdername.match(condition))
    {
           document.querySelector('.name').innerText =holdername ;
           document.querySelector('#Name').style.border="2px solid green";
           nameerr=true;
    }
    else{
            document.querySelector('#Name').style.border="2px solid red";
            nameerr=false;
    }
}
document.querySelector('.month-input').onchange = () =>{
    document.querySelector('.month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').onchange = () =>{
    document.querySelector('.year').innerText = document.querySelector('.year-input').value;
}


document.querySelector('#Code').onchange = () =>{
     cvc="";
    cvc=document.querySelector('#Code').value;
    condition=/^\d{3}$/
    if(cvc!=""&&cvc.match(condition))
    {
       document.querySelector('.cvc').innerText = cvc;
       document.querySelector('#Code').style.border="2px solid green";
       cvcerr=true;
    }
    else{
        document.querySelector('#Code').style.border="2px solid red";
        cvcerr=false;
    }
}
const submitForm=()=>{
   if(numerr==true&&cardno!=""&&nameerr==true&&holdername!=""&&cvcerr==true&&cvc!="")
    {
        document.querySelector('.cardnumber').innerText = cardno;
        document.querySelector('.name').innerText =holdername ;
         document.querySelector('.cvc').innerText = cvc;
         alert("Submitted Successfully!");
    }
    else{
        alert("Enter valid inputs!");
    }           
}
const cancelForm=()=>{
        document.querySelector('#Number').value = "";
        document.querySelector('#Name').value ="" ;
        document.querySelector('.month-input').value= "";
        document.querySelector('.year-input').value= "";
        document.querySelector('#Code').value = "";
}
