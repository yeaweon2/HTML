const numbers = [23, 43, 77, 88, 65];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
console.log("------------------------");

for (let num of numbers) {
    console.log(num);
}
console.log("------------------------");

let sum = 0;
let fData = numbers.filter(function (val, idx) {
    return val > 40;
});
console.log(fData);

let mData = fData.map(function (val, idx) {
    return val * 2;
});
console.log(`mData : ${mData}`);

mData.forEach(sumCallBack);
console.log(`합계 : ${sum}`);

function sumCallBack(v, i) {
    if (v < 160) {
        sum += v;
    }
}

console.log("------------------------");

numbers.filter(function (val, idx) {
        return val > 40;
    })
    .map(function (val, idx) {
        return val * 2;
    })
    .forEach(function (val, idx) {
        console.log(`val : ${val} , idx : ${idx}`);
    });