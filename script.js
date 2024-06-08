let displayString = '';
let isSolution = false;
let solution = document.querySelector('.solution');
let display = document.querySelector('.live-display');

document.querySelectorAll('.value')
.forEach((value)=>{
  value.addEventListener('click',()=>{
    if(isSolution){
      solution.innerHTML='';
    }
    displayString+=value.value;
    liveDisplay();
  });
});

document.querySelector('.clear').addEventListener('click',()=>{
  displayString = '';
  if(isSolution){
    display.innerHTML='';
    solution.innerHTML='';
  }
  solution.innerHTML ='';
  display.innerHTML = '';
  liveDisplay();
});

document.querySelector('.delete').addEventListener('click',()=>{ 
  if(isSolution){
    solution.innerHTML='';
  }
  displayString = displayString.slice(0,-1); 
  liveDisplay();
});

document.querySelector('.equal').addEventListener('click', ()=>{
  isSolution = true;
  solution.innerHTML = eval(displayString);
  displayString='';
});

function displayValue(){
  solution.innerHTML = value;
}

function liveDisplay(){
  display.innerHTML = displayString;
}
