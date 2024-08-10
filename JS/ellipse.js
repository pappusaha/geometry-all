function calculateEllipseArea(){
const major=getInputValueById('major-axis');
const minor=getInputValueById('minor-axis');
const area =3.14159*major*minor;

console.log(area);

}


function getInputValueById(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    const inputFieldText=inputField.value;
    const value=parseFloat(inputFieldText);
    return value ;
}