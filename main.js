var counter = (

function() {
    
    var _number;
    
    
    var setNumber = function (x) {
        //Проверяю, что передано целое число и оно точно больше или равно 0
        if( _checkInteger(x) && x > -1) {
           _number = x;
        } else {
            console.log("Значение ложно!")
        }
        
    }
    var _checkInteger = function (x) {
        if (Number.isInteger(x)) {
            return true;
        } else {
            return false;
        }
    }
    
    
    var increaseCounter = function () {
        _number++;
    }
    var decreaseCounter = function () {
        _temp = _number - 1;
        if (_temp > 0) {
            _number = _temp;
        } else {
            console.log("Счетчик остался без изменений. Счетчик не может стать отрицательным");
        }
    }
    var printCounter = function () {
        console.log(_number);
    }
    
    
    return {
        setNumber,
        increaseCounter,
        decreaseCounter,
        printCounter
    }
}()


);
console.log("Привет");
counter.setNumber(1); 

counter.increaseCounter(); 

counter.decreaseCounter();  

counter.decreaseCounter();

counter.printCounter();