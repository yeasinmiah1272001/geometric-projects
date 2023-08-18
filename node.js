// tringle area
function calculateTriangleArea(){
       // base value 
       const baseField = document.getElementById('triangle-base');
       const baseValueText = baseField.value;
       const base = parseFloat(baseValueText);


       // height 
       const heightField = document.getElementById('triangle-height');
       const heightValueText = heightField.value;
       const height = parseFloat(heightValueText)

       const Area = 0.5 * base * height;
       console.log(Area);

       // area show
       const areaSpan = document.getElementById('triangle-area');
       areaSpan.innerText = Area;

       baseField.value = '';
       heightField.value = '';


}
// ReTangle Area 

// retangle width 
function calculateRetriangleArea(){
       const widthField = document.getElementById('rectangle-width');
       const widthValueText = widthField.value;
       const width = parseFloat( widthValueText)
       console.log(width);


       // heigth

       const heightField = document.getElementById('retriangle-height');
       const heightValueText = heightField.value;
       const height = parseFloat(heightValueText);
       console.log(height);

       const area = width * height;

       const areaSpan = document.getElementById('rectangle-area');
       areaSpan.innerText = area;

       heightField.value = '';
       widthField.value = '';

       // validate 
       if(isNaN(height) || isNaN(width)){
              alert('please insert a number');
              return;
       }


}

// parallelogram

function calculateParallelogramArea(){
       const height = getInputValue('parallelogram-height');

       const width = getInputValue('parallelogram-width')

       const area = height * width;
       setElementinnertext('parallelogram-area', area);

       // validat 
       if(isNaN(height) || isNaN(width)){
              alert('please provide a number');
              return;
       }

}

// elesplse 

        function calculateEllipseArea(){
              const EllipseHeight = getInputValue('Ellipse-height');
              const EllipseWidth = getInputValue('Ellipse-width');
              const area = 3.1416 * EllipseHeight * EllipseWidth;
              const AreaToDecimal = area.toFixed(2)
              setElementinnertext('Ellipse-area', AreaToDecimal);
        }


// age ata korte hobe 
function getInputValue(fieldId){
       const inputValue = document.getElementById(fieldId);
       const inputValueText = inputValue.value;
       const value = parseFloat(inputValueText);
       return value;
}

// set area span,p ,div etc
function setElementinnertext(elementId, area){
       const element = document.getElementById(elementId);
       element.innerText = area;
}



// data validition

