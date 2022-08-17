// https://calculator.swiftutors.com/slant-height-of-a-cone-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const slantHeightofaConeRadio = document.getElementById('slantHeightofaConeRadio');
const radiusoftheConeRadio = document.getElementById('radiusoftheConeRadio');
const heightoftheConeRadio = document.getElementById('heightoftheConeRadio');

let slantHeightofaCone;
let radiusoftheCone = v1;
let heightoftheCone = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

slantHeightofaConeRadio.addEventListener('click', function() {
  variable1.textContent = '(r) Radius of the Cone';
  variable2.textContent = '(h) Height of the Cone';
  radiusoftheCone = v1;
  heightoftheCone = v2;
  result.textContent = '';
});

radiusoftheConeRadio.addEventListener('click', function() {
  variable1.textContent = 'Slant Height of a Cone';
  variable2.textContent = '(h) Height of the Cone';
  slantHeightofaCone = v1;
  heightoftheCone = v2;
  result.textContent = '';
});

heightoftheConeRadio.addEventListener('click', function() {
  variable1.textContent = 'Slant Height of a Cone';
  variable2.textContent = '(r) Radius of the Cone';
  slantHeightofaCone = v1;
  radiusoftheCone = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(slantHeightofaConeRadio.checked)
    result.textContent = `Slant Height of a Cone = ${computeSlantHeightofaCone().toFixed(2)}`;

  else if(radiusoftheConeRadio.checked)
    result.textContent = `Radius of the Cone = ${computeRadiusoftheCone().toFixed(2)}`;

  else if(heightoftheConeRadio.checked)
    result.textContent = `Height of the Cone = ${computeHeightoftheCone().toFixed(2)}`;
})

// calculation

function computeSlantHeightofaCone() {
  return Math.sqrt(Math.pow(Number(radiusoftheCone.value), 2) + Math.pow(Number(heightoftheCone.value), 2));
}

function computeRadiusoftheCone() {
  return Math.sqrt(Math.pow(Number(slantHeightofaCone.value), 2) - Math.pow(Number(heightoftheCone.value), 2));
}

function computeHeightoftheCone() {
  return Math.sqrt(Math.pow(Number(slantHeightofaCone.value), 2) - Math.pow(Number(radiusoftheCone.value), 2));
}