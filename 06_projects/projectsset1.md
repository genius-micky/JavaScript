 # projects related to DOM

 ## Projects link 
 [Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

 ## project 1

 ```javascript
 console.log("mickey")

 const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2 solution

```javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    
    let category = "";

    if (bmi < 18.6) {
      category = "Underweight";
    } else if (bmi >= 18.6 && bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obese";
    }

    // Show the result with guide
    results.innerHTML = `<span>Your BMI is ${bmi} — <strong>${category}</strong></span>`;
  }
});


```

## project 3 solution code 

```javascript

const clock = document.getElementById('clock');



setInterval(function(){
  let date = new Date();
// console.log(date.toLocaleString());
clock.innerHTML = date.toLocaleTimeString()
}, 1000)


````


