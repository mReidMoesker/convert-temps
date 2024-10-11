'use strict';

document.querySelector('#convertBtn').addEventListener('click', function() { // '#' seperates by id instead of class
  const temperatureInput = document.querySelector("#temperature").value.trim();
            
  if (temperatureInput === "") {
    document.querySelector('#resultText').innerHTML = 'Please enter a valid temperature.';
    return;
  }

  if (isNaN(temperatureInput)) { // This is just another way of sayin temperatureInput = NaN
    document.querySelector('#resultText').innerHTML = 'Please enter a valid number.';
    return;
  }

  const temperature = parseFloat(temperatureInput); // parseFloat converts a string into a number
  const isCtoF = document.querySelector('#cToF').checked;
  let result;

  if (isCtoF) {
    result = (temperature * 9 / 5) + 32;
    document.querySelector('#resultText').innerHTML = temperature + '°C is equal to ' + result.toFixed(2) + '°F';
  } else {
    result = (temperature - 32) * 5 / 9;
    document.querySelector('#resultText').innerHTML = temperature + '°F is equal to ' + result.toFixed(2) + '°C';
    // I did copy the degrees symbol
  }
});

document.querySelector('#toggleBtn').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  document.querySelector('.container').classList.toggle('dark-mode');
  document.querySelector('#resultText').classList.toggle('dark-mode');
  document.querySelector('#convertBtn').classList.toggle('dark-mode');
  document.querySelector('#toggleBtn').classList.toggle('dark-mode');
});
