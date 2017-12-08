'use strict';

function testSum() { //eslint-disable-line
  if (sum(4,7)[1] === 'The sum of 4 and 7 is 11.') {
    document.getElementById('sum').innerHTML = sum(4,7)[0] + ', "' + sum(4,7)[1] + '"';
    console.log('%c TEST FOR sum() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR sum() FAILS', 'color: red');
  }
}

function testMultiply() { //eslint-disable-line
  if (multiply(5,9)[1] === 'The product of 5 and 9 is 45.') {
    document.getElementById('multiply').innerHTML = multiply(5,9)[0] + ', "' + multiply(5,9)[1] + '"';
    console.log('%c TEST FOR multiply() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR multiply() FAILS', 'color: red');
  }
}

function testSumAndMultiply() { //eslint-disable-line
  if (sumAndMultiply(4, 7, 5)[2] === '4 and 7 and 5 sum to 16.' && sumAndMultiply(4, 7, 5)[3] === 'The product of 4 and 7 and 5 is 140.') {
    document.getElementById('sumAndMultiply1').innerHTML = sumAndMultiply(4, 7, 5)[0] + ', "' + sumAndMultiply(4, 7, 5)[2] + '"';
    document.getElementById('sumAndMultiply2').innerHTML = sumAndMultiply(4, 7, 5)[1] + ', "' + sumAndMultiply(4, 7, 5)[3] + '"';
    console.log('%c TEST FOR sumAndMultiply() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR sumAndMultiply() FAILS', 'color: red');
  }
}

function testSumArray() { //eslint-disable-line
  if (sumArray(testArray)[1] === '2,3,4 was passed in as an array of numbers, and 9 is their sum.') {
    document.getElementById('sumArray').innerHTML = sumArray(testArray)[0] + ', "' + sumArray(testArray)[1] + '"';
    console.log('%c TEST FOR sumArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR sumArray() FAILS', 'color: red');
  }
}

function testMultiplyArray() { //eslint-disable-line
  if (multiplyArray(testArray)[1] === 'The numbers 2,3,4 have a product of 24.') {
    document.getElementById('multiplyArray').innerHTML = multiplyArray(testArray)[0] + ', "' +  multiplyArray(testArray)[1] + '"';
    console.log('%c TEST FOR multiplyArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR multiplyArray() FAILS', 'color: red');
  }
}
