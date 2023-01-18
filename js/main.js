const number = document.querySelector('.number');

let a = 0;
let inputValue = 0;
let total = 0;

  const plus = document.querySelector('.button_plus');
  plus.addEventListener('click', () =>{
    a += 1;
    total = a * inputValue;
    sum.innerText = total;
    number.innerText = a;
  })

  
  const minus = document.querySelector('.button_minus');
  minus.addEventListener('click', () =>{
    if(a===0) return;
    a -= 1;
    total = a * inputValue;
    sum.innerText = total;
    number.innerText = a;
  })

  const sum = document.querySelector('.sum');
  const priceInput = document.querySelector('.input')
  
  priceInput.addEventListener('keydown', (event) =>{
    if(event.keyCode===13){
      inputValue = event.target.value;
      total = a * event.target.value;
      sum.innerText = total;
    }
  })

  const currency = document.querySelector('.select');
  
  currency.addEventListener('change', (e) =>{
    console.log(e.target.value)
    sum.innerText = (total / e.target.value).toFixed(0)
  })