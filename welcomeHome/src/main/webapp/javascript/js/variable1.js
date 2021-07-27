// js / variable1.js

const numbers = [23, 44, 18, 35, 50];
numbers.push(42);

let sum = 0;
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
    console.log(numbers[i]);
}
console.log(sum);

let numSum = 0;
document.write('<table >');
document.write('<tbody>');        
for(let i = 0; i < numbers.length; i++){
    document.write('<tr>');

    if( i == 0 ){
        document.write('<td></td>');
    }else{
        document.write('<td>+</td>');    
    }
        
    document.write('<td>'+ numbers[i]+'</td>');
    document.write('</tr>');
    numSum += numbers[i];
}
document.write('<tr>');        
document.write('<td id="total">합계</td>');
document.write('<td id="total">'+ numSum +'</td>');
document.write('</tr>'); 
document.write('</tbody>');        
document.write('</table>');    