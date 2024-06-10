let displayString = '';
let isSolution = false;
let answer = '';
let solution = document.querySelector('.solution');
let display = document.querySelector('.live-display');

document.querySelectorAll('.value')
.forEach((value)=>{
  value.addEventListener('click',()=>{
    if(isSolution){
      solution.innerHTML='';
      displayString='';
      isSolution=false;
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
    displayString='';
  }
  displayString = displayString.slice(0,-1); 
  liveDisplay();
});

document.querySelector('.answer').addEventListener('click',()=>{
  if(isSolution){
    solution.innerHTML='';
    displayString='';
    isSolution=false;
  }
  displayString+=answer;
  liveDisplay();
});

document.querySelector('.equal').addEventListener('click', ()=>{
  isSolution = true;
  answer = eval(displayString);
  solution.innerHTML = answer;
  displayString='';
});

function displayValue(){
  solution.innerHTML = value;
}

function liveDisplay(){
  display.innerHTML = displayString;
}

function addBracket(){
  if(displayString.includes('(')){
    displayString+=')';
    liveDisplay();
  }
  else{
    displayString+='(';
    liveDisplay();
  }
}

function errorMessage(){
  solution.innerHTML = `<span class="error">Syntax Error</span>`;
}

function sin(){   
  if(!(displayString==="")){
    isSolution=true;
    const value = Number(eval(displayString));
    answer = Math.sin(value);
    solution.innerHTML = answer;
    displayString=`sin(${displayString})`;
    liveDisplay();
  }
  else{
    errorMessage();
  }  
}

function cos(){   
  if(!(displayString==="")){
    isSolution=true;
    const value = Number(eval(displayString));
    solution.innerHTML = Math.cos(value);
    answer = Math.cos(value);
    displayString=`cos(${displayString})`;
    liveDisplay();
  }
  else{
    errorMessage();
  }  
}

function tan(){   
  if(!(displayString==="")){
    isSolution=true;
    const value = Number(eval(displayString));
    solution.innerHTML = Math.tan(value); 
    answer = Math.tan(value);
    displayString=`tan(${displayString})`;
    liveDisplay();
  }
  else{
    errorMessage();
  }  
}

function log(){   
  if(!(displayString==="")){
    isSolution=true;
    const value = Number(eval(displayString));
    solution.innerHTML = (Math.log(value)/Math.log(10)); 
    answer = (Math.log(value)/Math.log(10));
    displayString=`log(${displayString})`;
    liveDisplay();
  }
  else{
    errorMessage();
  }  
}

function percentage(){    
  if(!(displayString==="")){
    isSolution=true;
    const value = Number(eval(displayString));
    solution.innerHTML = (value/100);
    answer = (value/100);
    displayString=`${displayString}%`;
    liveDisplay();
  }
  else{
    errorMessage();
  }  
}

function factorial(){ 
  let value = 0;
  let num = 1; 

  if(!(displayString==="")){
    isSolution=true;
    value = Number(eval(displayString));
    for(let i=value; i>0; i--){
      num *= i;
    }
    solution.innerHTML = num;
    answer=num;
    displayString=`${displayString}!`;
    liveDisplay();
  }
  else{
    errorMessage();
  }  
}
