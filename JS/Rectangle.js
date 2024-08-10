function calculateRectangleArea(){
 const  RectangleWidthInput=document.getElementById('Rectangle-width')   
const RectangleWidthText=RectangleWidthInput.value;
 const  RectangleWidthNumber=parseFloat(RectangleWidthText);
 console.log(  RectangleWidthNumber);

 
 const RectangleLengthInput=document.getElementById('Rectangle-length');
const RectangleLengthText=RectangleLengthInput.value
 const RectangleLengthNumber=parseFloat(RectangleLengthText);
 console.log(RectangleLengthNumber);


 const calculateRectangle=RectangleWidthNumber*RectangleLengthNumber;
 console.log(calculateRectangle);

}
