//task.1
//declare your name,age,city using let and log all three in one console.log()statement.
// let name="lovepreet";
// let age=21;
// let city="Mahilpur";
// console.log(name,age,city);     //lovepreet  21  Mahilpur

//task.2
//convert the string"100" to a number using Number(),pareseInt(),and the unary+operator.log all the three results .
// let string="100";
// console.log(Number(string));     //100
// console.log(parseInt(string));    //100
// console.log(+string);             //100

//task.3
//convert the value 0,1,"", and"hello" to booleans. log each result .
// console.log(Boolean(0));   //false
// console.log(Boolean(1));   //true
// console.log(Boolean(""));     //false
// console.log(Boolean("hello"));  //true

//task.4
//find the maximum of the numbers 5,2,8
// console.log(Math.max(5,2,8));     //8
// console.log(Math.min(5,2,8));     //2

//task.5
//swap the values of two variables without using a temporary variable .
// let a=55;
// let b=66;
// [a,b]=[b,a];
// console.log(a,b);     //66  55

//task.6
//find the length of the string "abcdefgh" and convert it to uppercase.
// let string="abcdefgh";
// console.log(string.length);          //8
// console.log(string.toUpperCase());   //ABCDEFGH

//task.7
//replace all occurrence of "a" in "abcad" with"_" .
// let string="abcad";
// console.log(string.replaceAll("a","_"));     //_bc_d

//tasl.8
// log the result occurence of 10+"5",10-"5",10*"5",and10/"2". observe the output.
// console.log(10+"5");   //105
// console.log(10-"5");    //5
// console.log(10*"5");    //50
// console.log(10/"2");    //5

//task.9
//use the ** (exponent) operator to calculate 2 to the power of 10.



//task.10
// given a number x,return true if it reads the same foarward and backward(palindrome); otherwise return false.



//task.11
//write the if/else statement that checks if a person's age is 18 or above and logs either "adult" or "minor"
// let age=18;
// if(age>=18){
//     console.log("adult");
// }else{
//     console.log("minor");
// }     //adult

//task.12
//write an if/else if/else statement that takes a score and logs:A for90+.B for 70+,c for 50+,and fail otherwise.
// let score=45;
// if(score>=90){
//     console.log("A");
// }else if(score>=70){
//     console.log("B");
// }else if(score>=50){
//     console.log("C");
// }
// else{
//     console.log("Fail");
// }                          //Fail

//task.13
//write a switch statement that takes a day number(1-7) ans logs the name of the day.
// let day=3;
// switch(day){
//     case 1:console.log("Monday");
//     break;
//     case 2:console.log("Tuesday");
//     break;
//     case 3:console.log("Wednesday");
//     break;
//     case 4:console.log("Thursday");
//     break;
//     case 5:console.log("Friday");
//     break;
//     case 6:console.log("Saturday");
//     break;
//     case 7:console.log("Sunday");
//     break;
// }  //Wednesday

//task14. Write a switch statement that takes a traffic light color ("red", "yellow", "green") and logs the appropriate action.
// let color="yellow";
// switch(color){
//     case"red":
//     console.log("Stop");
//     break;
//     case"yellow":
//     console.log("Wait");
//     break;
//     case"green":
//     console.log("Go");
//     break;
// }        //Wait

// task 15. Merge two sorted arrays into one sorted array.

// task 16. Write a for loop that logs only even numbers between 1 and 20.
// for(i=1;i<=20;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }        //4 6 8 10 12 14 16 18 20

// 17. Write a for loop that calculates the sum of numbers from 1 to 100 and logs the result.
// let sum=0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);              //5050

// 18. Combine two strings: let a = 'table'; let b = 'chairs'; using the concatenation operator.
// let a='table';
// let b='chairs';
// console.log(a+b);    //tablechairs

// 19. Write a while loop that keeps doubling a number starting from 1 until it exceeds 1000. Log the final number.


// 20. Use the Date object to log today's full date and time.
// let today=new Date();
// console.log(today);


// 21. Use the Date object to log the current year, month, and day separately.
// let today=new Date();
// console.log(today.getDate());
// console.log(today.getMonth()+1);
// console.log(today.getFullYear());    //18 6 2026


// 22. Calculate how many days are left until New Year using the Date object.


// 23. Write a named function called greet that takes a name as a parameter and logs "Hello, [name]!".
// function greet(name) {
//     console.log("Hello, " + name + "!");
// }

// greet("Lovepreet");   //Hello, Lovepreet!

// 24. Write an anonymous function stored in a variable called multiply that takes two numbers and returns their product.
// let multiply=function(a,b){
//     return a*b;
// }
// console.log(multiply(5,3));    //15

// 25. Write an arrow function called square that takes a number and returns its square.

// 26. Write a function called isEven that takes a number and returns true if it is even and false if it is odd.
// function isEven(num){
//     return num%2===0;
// }
// console.log(isEven(5));    //false

// 27. Write a function calculator that takes two numbers and an operator (+, -, *, /) and returns the result.
// function calculator(a,b,operator){
//     switch(operator){
//         case"+":return a+b;
//          case"-":return a-b;
//           case"*":return a*b;
//            case"/":return a/b;
//         }
// }
// console.log(calculator(10,5,"*"));   //50

// 28. Write a function that takes another function as a callback and calls it after logging "Starting task...".

// 29. Create an array of 5 fruit names. Log the first and last item using their index.
// let fruits=["apple","banana","mango","lichi","grapes"]
// console.log(fruits[0]);
// console.log(fruits[4]);           //apple grapes

// 30. Find the length of an array and log the last element using the length property.
// let arr=[10,20,30,40]
// console.log(arr.lenth);
// console.log(arr(arr.length-1));

// 31. Use push() to add two items to the end of an array and log the updated array.
// let days=["sunday","monday","tuesday"]
// days.push("wednessday");
// days.push("thursday");
// console.log(days);      //['sunday','monday','tuesday','wednessday','thursday']

// 32. Use pop() to remove the last item from an array and log both the removed item and the updated array.
// let fruits = ["mango", "orange", "apple", "lichi"];

// let removedItem = fruits.pop();

// console.log(removedItem);
// console.log(fruits);    //lichi  ['mango','orange','apple']

// 33. Remove the first item and add a new item at the beginning. Log the array after each step.
// let fruits= ["mango", "orange", "apple", "lichi"];
// fruits.shift();
// console.log(fruits);           //['orange','apple','lochi']
// fruits.unshift("banana");
// console.log(fruits);            //['banana','oramgr','apple','lichi']

// 34. Use forEach() to loop through an array of numbers and log each number multiplied by 2.
// let numbers=[1,2,3,4,5];
// numbers.forEach(function(num){
//     console.log(num*2);
// });                    //2 4 6 8 10

// 35. Use map() to create a new array where each number in [1, 2, 3, 4, 5] is multiplied by 10.

// 36. Use filter() to create a new array of only even numbers from [1, 2, 3, 4, 5, 6, 7, 8].
// let number=[1, 2, 3, 4, 5, 6, 7, 8];
// let even=number.filter(num=>num%2===0);
// console.log(even);            //[2,4,6,8]

// 37. Use reduce() to calculate the total sum of [10, 20, 30, 40, 50].
//  let number=[10, 20, 30, 40, 50];
// let total=number.reduce((sum,num)=>sum+num,0);
//  console.log(total)                  //150

// 38. Use find() to get the first number greater than 15 from [5, 10, 18, 22, 3].
//  let number=[5, 10, 18, 22, 3];
// let result=number.find(num=>num>15);
//  console.log(result);             //18

// 39. Use some() to check if any number in [1, 3, 5, 7, 8] is even.
// let number=[1, 3, 5, 7, 8];
// let result=number.some(num=>num%2===0);
//  console.log(result); //true

// 40. Use every() to check if all values in [2, 4, 6, 8] are even.
// let number=[2, 4, 6, 8];
// let result=number.every(num=>num%2===0);
//  console.log(result);   //true

// 41. Create a student object with properties: name, age, grade, and passed. Log the whole object.
// let student={
//     name:"suneha",
//     age:20,
//     grade:"A",
//     passed:true,
// };
// console.log(student);
//  { name: 'suneha', age: 20, grade: 'A', passed: true }

// 42. Access each property of the student object using both dot notation and bracket notation.
// console.log(student);     
// let student={
//      name:"suneha",
//      age:20,
//      grade:"A",
//      passed:true,
//  };
//  console.log(student.name);    //suneha
//  console.log(student["name"]); //suneha

// 43. Add a new property school to the student object after it is created. Log the updated object.
// let student={
// name:"jass",
// age:19,
// };
// student.school="ABC School";
// console.log(student);    //{ name: 'jass', age: 19, school: 'ABC School' }

// 44. Use Object.keys() on the student object and log all the keys.
// let student={
// name:"jass",
//  age:19,
//  grade:"A"
//  };
//  console.log(Object.keys(student));   //[ 'name', 'age', 'grade' ]

// 45. Use Object.values() on the student object and log all the values.
// let student={
// name:"love",
//  age:21,
//  grade:"A"
//  };
//  console.log(Object.values(student));    //[ 'love', 21, 'A' ]

// 46. Use Object.entries() to print all keys and values.
let student={
name:"love",
 age:21,
 grade:"A"
 };
 console.log(Object.entries(student));    //[ [ 'name', 'love' ], [ 'age', 21 ], [ 'grade', 'A' ] ]

// 47. Write a function checkObject(obj) that returns:
// - "Frozen" if the object is frozen
// - "Sealed" if the object is sealed but not frozen
// - "Normal" otherwise
function checkObject(obj){
if(Object.isFrozen(obj)){
    return"Frozen";
}else if(Object.isSealed(obj)){
    return"sealed";
}else{
    return"Normal";
}
}    //[ [ 'name', 'love' ], [ 'age', 21 ], [ 'grade', 'A' ] ]

// 48. Write a function that returns the number of properties in an object without using Object.keys().

// 49. Using Object.entries(), write a function that returns the key whose value matches the given value.

// 50. Compare two objects using Object.entries() and determine whether they have exactly the same keys and values.
