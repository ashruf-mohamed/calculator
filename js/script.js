
var current = document.getElementById("current");
var previous = document.getElementById("previous");
var isLastBtnNum = false;
var operType = '';
var values = {prev: null, now: null, total: null};
var newValue;


function getNumbers(num) {
    'use strict';
    if (isLastBtnNum) {
        var result;
        if (values.now) {
            result = values.now + '' + num;
            values.now = result;
            current.value = result;
        } else {
            result = values.prev + '' + num;
            values.prev = result;
            current.value = result;
        }
        
    } else {
        current.value = num;
        if (values.prev) {
            values.now = num;
        } else if (newValue) {
            values.now = num;
        } else {
            values.prev = num;
        }
    }
    isLastBtnNum = true;
}
function getOperators(opr) {
    'use strict';
    if (values.now && (values.prev || newValue) && operType) {
        calculate();
        operType = opr;
    } else {
        operType = opr;
    }
        
    isLastBtnNum = false;
}
function calculate() {
    'use strict';
    if (!values.now) {
        return;
    }
    if (values.now && values.prev && operType) {
        
        if (operType === "+") {
            newValue = Number(values.prev) + Number(values.now);
            current.value = newValue;
            
        }
        if (operType === "-") {
            newValue = Number(values.prev) - Number(values.now);
            current.value = newValue;
        
        }
        if (operType === "*") {
            newValue = Number(values.prev) * Number(values.now);
            current.value = newValue;
        
        }
        if (operType === "/") {
            newValue = Number(values.prev) / Number(values.now);
            current.value = newValue;
        }
        values.prev = "";
        
    } else if (values.now && newValue && operType) {
        
        if (operType === "+") {
            newValue = Number(newValue) + Number(values.now);
            current.value = newValue;
            
        }
        if (operType === "-") {
            newValue = Number(newValue) - Number(values.now);
            current.value = newValue;
        
        }
        if (operType === "*") {
            newValue = Number(newValue) * Number(values.now);
            current.value = newValue;
        
        }
        if (operType === "/") {
            newValue = Number(newValue) / Number(values.now);
            current.value = newValue;
            
        }
        
    }
    
    values.now = "";
}
isLastBtnNum = false;

function clear1() {
    'use strict';
    current.value = "";
    values.prev = "";
    values.now = "";
}
function back() {
    'use strict';
    current.value = current.value.substring(0, current.value.length - 1);
    newValue = current.value;
    values.prev = current.value;
    values.now = current.value;
}
function toCurrencies(rate) {
    'use strict';
    if (values.prev) {
        newValue = Number(values.prev) * rate;
        current.value = newValue;
        
    } else {
        newValue = Number(newValue) * rate;
        current.value = newValue;
       
    }
    values.prev = "";
}
function fromCurrencies(rate) {
    'use strict';
    if (values.prev) {
        newValue = Number(values.prev) / rate;
        current.value = newValue;
        
    } else {
        newValue = Number(newValue) / rate;
        current.value = newValue;
       
    }
    values.prev = "";
}

