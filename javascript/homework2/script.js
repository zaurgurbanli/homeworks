function calc(a, b, op) {

    switch (op) {
        case '+': {
            return a + b;
        }
        case '-':{
            return a-b;
        }
        case '*':{
            return a*b;
        }
        case '/':{
            return a/b;
        }
        default:
            return -1;
    }
}


let a= +prompt("Enter first number:");
let b= +prompt("Enter second number:");

while (b===0 || isNaN(b)||a===0 || isNaN(a)){
    a= +prompt("Error! Enter first number again:");
    b= +prompt("Error! Enter second number again:");
}

let op= prompt("Enter operation:");

alert(calc(a,b,op));