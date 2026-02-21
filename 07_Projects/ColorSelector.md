## project 1

```javascript
const button = document.querySelectorAll('.button');
console.log(button);
const body = document.querySelectorAll('body');
button.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body[0].style.backgroundColor= e.target.id;
    }
    if (e.target.id === 'white') {
      body[0].style.backgroundColor= e.target.id;
    }
    if (e.target.id === 'blue') {
      body[0].style.backgroundColor= e.target.id;
    }
    if (e.target.id === 'yellow') {
      body[0].style.backgroundColor= e.target.id;
    }
  });
});
```
## project 2

```javascript
const form = document.querySelector('form')
const result = document.querySelector('#results')
const span = document.createElement('span')
result.after(span)
form.addEventListener('submit',(e) => {
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  if(height===0 || height < 0 || isNaN(height)){
    result.innerHTML = 'Please enter a valid height'
  }else if(weight===0 || weight < 0 || isNaN(weight)){
    result.innerHTML = 'Please enter a valid weight'
  }
  else{
    const bmi = ((weight * 10000)/ (height * height)).toFixed(1)
    result.innerHTML = `<span>${bmi}<span>`
    
    if(bmi<18.5){
      span.textContent = 'Underweight'
    }else if(bmi>=18.5 && bmi <=25){
      span.textContent = 'Normal'
    }
    else{
      span.textContent = 'Overweight'
    }
  }
})
```