
// 1: Fibonacci series...
// take input from the user
const number = parseInt(prompt('Enter a positive number: '));
let x = 0, y = 1, z;
document.write('Fibonacci Series:');
for(let i=1; i<=number; i++) {
document.write(x);
  z=x+y;
   x=y;
    y = z;
}

// 2: Factorial of a number...
// take input from the user
const n = parseInt(prompt('Enter a positive integer: '));

// checking if number is negative
if (n < 0) {
   document.write('No factorial for a negative number.');
}

// if number is 0
else if (n == 0) {
    document.write(`The factorial of ${n} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= n; i++) {
        fact *= i;
    }
    document.write(`The factorial of ${n} is ${fact}.`);
}


// 3: Remove all occurrences in a given characters...
let charac = "Removing all occurrences in a given character"; 
charac= charac.replace(/a/g, ""); 
document.write(charac); 

// 4: Reversing a string

function ReverseString(myString) { 
return myString .split("").reverse("").join("") 
} 
 // Function call 
document.write(ReverseString("I am Munaza"))

//5: Applying Getter and Setter...

const car = {

    // data property
    carname: 'Ferrari',
    
    // accessor property (getter)
    get getName() {
        return this.carname;
    }
};
    document.write(cars.getName); 

    const cars= {
        carname: 'Ferrari',
 //accessor property(setter)
        set changeName(carnewName) {
            this.carname = carnewName;
        }
    };
     document.write(cars.carname);
// change(set) object property using a setter
    cars.changeName = 'Lexus';
    document.write(cars.carname); 

//6: First Repeating character...
let str = "munazanasir";
 function firstRepeating(str)
{
  // Creates an empty hashset

    let h = new Set();

     

    // Traverse the input array from left to right

    for(let i = 0; i <= str.length - 1; i++)

    {

        let c = str[i];
 

        // If element is already in hash 

        // set, update x and then break

        if (h.has(c))

            return c;

             

        // Else add element to hash set

        else

            h.add(c);

    }

    return '\0';
};
document.write(firstRepeating(str));


// 7: If a given numbver is integer or not...
const num= prompt("Enter a number");
function isInt(num){
    return num%1==0;
}
document.write(isInt(num));

// 8: Function that alllows to call a funtion...

function myfunc(){
    return "this is my func"
}
function addfunc(a,b){
    return a+b;
}
document.write(myfunc());
document.write(addfunc(4,6));



