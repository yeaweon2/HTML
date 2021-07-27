// js/variable.js

let var1 = 'Hello';
console.log(typeof var1);
var1 = 'World';     // String타입
var1 = 100;         // 
console.log(typeof var1);
var1 = true;
console.log(typeof var1);
let var11 = 10;

console.log(var1);

let txt = 'Morning'
const con1 = 'Good';    // 상수
//con1 = 'Morning';

console.log(1+1);
console.log(1+1+txt);
console.log(1+1+con1);

let num1 = 3;
let num2 = 2;
console.log(num1 * num2);

document.write('<h1>Hello</h1>');
document.write('<ul>');
document.write('    <li>Banana</li>');
document.write('    <li>Apple</li>');
document.write('</ul>');

let str = '<ul>';
str += '    <li>Orange</li>';
str += '    <li>Mango</li>';
str += '    <li>Cherry</li>';
str += '  </ul>';
document.write(str);

let fruits = [ '수박','딸기','복숭아','참외'];
// fruits = new Array(); <- 이렇게 하지말고 위에처럼 바로 배열 선언하라고 가이드한다고함. 왜?

fruits = new Array();
fruits.push('수박');
fruits.push('멜론');
fruits[2] = '복숭아';
fruits[fruits.length] = '옥수수';
fruits[fruits.length] = '감자';


fruits.pop(); // 마지막 위치 삭제
fruits.pop(); // 마지막 위치 삭제
fruits.shift(); //첫번째 삭제
fruits.unshift('옥수수'); // 제일 앞에 추가

console.log(typeof fruits);

document.write('<ul>');
for( let i = 0; i < fruits.length; i++){
    document.write('<li>' + fruits[i] +'</li>');
}
document.write('</ul>');

