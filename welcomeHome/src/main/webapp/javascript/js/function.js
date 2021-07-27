console.log('function 정의 전 : ' +  sum(22,33));
    // console.log('function 정의 전 : ' +  fnc(22,33));   // 안됨

    function sum(num1,num2){  // hoisting : 선언하기전에 먼저 호출해서 function정의문을 실행.
        return num1 + num2;
    }

    function cal(){
        let num1 = document.getElementById('num1');
        let num2 = document.getElementById('num2');        
        let result = document.getElementById('result');
        result.value = fnc(Number(num1.value), Number(num2.value));
        
    }    
    
    let fnc = function(a,b){
        return a + b;
    }
    console.log(fnc(10,40));

    // let result = sum(10, 20);
    // result = sum('Hello','World');
    // console.log(result);