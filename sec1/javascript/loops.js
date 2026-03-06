// for loop

for (let i = 0; i < 10; i++) {
    console.log(i);
}

//while loop

let b = 0;
while (b < 10) {
    console.log(b);
    b++;
}

//do while loop
console.log('do while loop');
let c = 0;
do {
    console.log(c);
    c++;
} while (c < 10);

//prime number checker using for loop

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7));  
console.log(isPrime(10));  

//eligibility for dl

function checkDL(age) {
  if (age >= 18) {
    console.log("Eligible for Driving Licence");
  } else {
    console.log("Not Eligible for Driving Licence");
  }
}

checkDL(20);  
checkDL(15);  

// greatest of three numbers

function greatest(a, b, c) {
  if (a >= b && a >= c) {
    console.log(a + " is the greatest");
  } else if (b >= a && b >= c) {
    console.log(b + " is the greatest");
  } else {
    console.log(c + " is the greatest");
  }
}

greatest(10, 45, 30);  // 45 is the greatest

//divisiblity by 7 and 11

function checkDivisibility(n) {
  if (n % 7 === 0 && n % 11 === 0) {
    console.log(n + " is divisible by both 7 and 11");
  } else {
    console.log(n + " is NOT divisible by both 7 and 11");
  }
}

checkDivisibility(77);   // divisible
checkDivisibility(14);   // not divisible

//palindrome checker

function isPalindrome(n) {
  let original = n;
  let reversed = 0;

  while (n > 0) {
    let digit = n % 10;
    reversed = reversed * 10 + digit;
    n = Math.floor(n / 10);
  }

  if (original === reversed) {
    console.log(original + " is a Palindrome");
  } else {
    console.log(original + " is NOT a Palindrome");
  }
}

isPalindrome(121);  // Palindrome
isPalindrome(123);  // Not Palindrome

//palindrome number

let a=121;
temp=a;
reverse=0;

while(temp>0){
    reverse=reverse*10+temp%10;
    temp=Math.floor(temp/10);
}
if(a===reverse){
    console.log(a+" is a palindrome");
}
else{
    console.log(a+" is not a palindrome");
}

//table print

let num=5;
for(let i=1;i<=10;i++){
  console.log(a*1);
}

// even or odd numbers

for(let i=0;i<=100;i++){
  if(i%2==0){
    console.log(i+" is even");
  }
  else{
    console.log(i+" is odd");
  }
} 

//divisibility by 5
for(let i=0;i<=100;i++){
  if(i%5==0){
    console.log(i+" is divisible by 5");
  }
  else{
    console.log(i+" is not divisible by 5");
  }
}

//while loop to print even and odd numbers
let i=0;
while(i<=100){
  if(i%2==0){
    console.log(i+" is even");
  }
  else{
    console.log(i+" is odd");
  }
  i++;
}