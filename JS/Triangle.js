function calculateTriangleArea(){ 
  const triangleAreaInput=document.getElementById('triangle-base');

  const triangleBaseText=triangleAreaInput.value
  const base=parseFloat(triangleBaseText);
    console.log(base);


    const triangleHeightInput=document.getElementById('triangle-height');

    const triangleHeightText=triangleHeightInput.value;
    const height=parseFloat(triangleHeightText);

    console.log(height);
const calculateTriangle=0.5*base*height
console.log('the total calculation of the  triangle is',calculateTriangle);
}



