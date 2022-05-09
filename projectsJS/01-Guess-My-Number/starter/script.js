'use strict';

console.log(document.querySelector('.message'));

console.log(`Before accesing the value of INPUT field is
 ${document.querySelector('.guess').value}`);

document.querySelector('.guess').value = 999;

console.log(`After changing the value of INPUT field is
 ${document.querySelector('.guess').value}`);
