function greet(){
    console.log("Hello, World!");
}

greet();

//parameter function
function hello(name){
    console.log("Hello, "+name+"!");
    
}

//subtraction function

function subtract(a,b){
    console.log(a-b);
}

subtract(9,4)


function addNums(a,b){
   var c = a + b;
    console.log(c);
}
addNums(5,10);


const avg = function(m1, m2, m3){
    const average = (m1, m2, m3)/3;
    console.log(average);
    return average;
}
const res = avg(80, 90, 85);
console.log(res);

//es6 arrow function
const factorial= (n) => {
    let fact = 1;
    for(let i=1; i<=n; i++){
        fact *= i;
    }   
    return fact;

}
 const res2= factorial(5);
 console.log(res2);