var counter = (

function() {
    
    var _number;
    
    
    var setNumber = function (x) {
        if( _checkInteger(x) ) {
           _number = x;
        } else {
            console.log("Значение ложно!")
        }
        
    }
    var _checkInteger = function (x) {
        if (x.isInteger(x)) {
            return true;
        } else {
            return false;
        }
    }
    
    
    var increaseCounter = function () {
        _number++;
    }
    var decreaseCounter = function () {
        _number--;
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