function getparallelogramCalculate(){
const base =getInputvalueById('Parallelogram-base');
console.log(base);



const height=getInputvalueById('Parallelogram-height');

console.log (height);

const area= base*height;
console.log('here is the value of area', area);
}


function getInputvalueById(inputFieldId){
  const  inputField=document.getElementById(inputFieldId);
  const inputFieldText=inputField.value;
const inputfieldvalue=parseFloat(inputFieldText);
return inputfieldvalue ;
    
}


function setInnerTextById(elementId, text){
    


}