//Escribe un pequeño programa que imprima los números del 1 al 100 pero que
//cuando el número sea múltiplo de 3 imprima "Fizz" y para múltiplos de 5 
//debería imprimir "Buzz" finalmente cuando el número sea múltiplo de 3 y 5
//debe imprimir FizzBuzz.


//Objeto donde van todas nuestras condiciones

const MODULES = {
    3: 'Fizz',
    5: 'Buzz',
}

function fizzBuzz(num){
   let result = '';
   for(const module in MODULES){
      const moduleNum = Number(module);
      if(num % moduleNum == 0){
        result += MODULES[module];
      }
   }
   return result ? result : num;
}


//DOM SCRIPTING

const $ = query=> document.querySelector(query);
const C = element => document.createElement(element);

const form = $('#form');
const inputModule = $('#module');
const inputText= $('#text');
const results = $('#results');

function fillResults(){
  
  while(results.firstChild){
    results.removeChild(results.firstChild);
  }

  for(let i = 1; i <= 100; i++){
    const fizz = fizzBuzz(i);
    const isString = typeof fizz == 'string' 
    const DIV = C('DIV');
    const SPAN = C('SPAN');
    SPAN.textContent = `${i}: `;
    const SPAN2 = C('SPAN');
    SPAN2.textContent = fizz;
    SPAN.className = 'font-bold text-md text-red-600 mx-2 text-center w-1/3 block';
    SPAN2.className = `w-1/4 ${isString ? 'text-emerald-600 font-bold' : ''}`
    DIV.className = `border py-2 lg:w-1/6 w-1/2 
                     justify-center flex 
                     ${isString ? 'bg-gray-200' : ''}`;
    DIV.appendChild(SPAN);
    DIV.appendChild(SPAN2);
    results.appendChild(DIV);
  }
}


form.addEventListener('submit', e=>{
  e.preventDefault();
  const moduleValue = inputModule.value;
  const textValue = inputText.value;
  MODULES[moduleValue] = textValue;
  fillResults();
});
