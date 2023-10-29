// Problem 1
// ----------------------------
// function solve (num)
// {
//     console.log(num * 2)
// }

// Problem 2
// ----------------------------

// function solve (name, age, grade)
// {
//     console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
// }

// solve('John', 15, 5.54678)

// Problem 3
// ----------------------------

// function solve (grade)
// {
//     if(grade >= 5.50)
//     {
//         console.log("Excellent")
//     }
//     else {
//         console.log("Not excellent")
//     }
// }

// solve(5.50)
// solve(4.35)

// Problem 4
// ----------------------------

// function solve(month)
// {
//     let monthAsString = "";
//     switch(month)
//     {
//         case 1:
//             monthAsString = "January"
//         break;
        
//         case 2:
//             monthAsString = "February"
//         break;

//         case 3:
//             monthAsString = "March"
//         break;

//         case 4:
//             monthAsString = "April"
//         break;

//         case 5:
//             monthAsString = "May"
//         break;

//         case 6:
//             monthAsString = "June"
//         break;

//         case 7:
//             monthAsString = "July"
//         break;

//         case 8:
//             monthAsString = "August"
//         break;

//         case 9:
//             monthAsString = "September"
//         break;

//         case 10:
//             monthAsString = "October"
//         break;

//         case 11:
//             monthAsString = "November"
//         break;

//         case 12:
//             monthAsString = "December"
//         break;

//         default:
//             monthAsString = "Error!"
//             break;
//     }
//     console.log(monthAsString);
// }

// solve(13);


// Problem 5
// ----------------------------

// function solve(num1, num2, operator)
// {
//     let result;

//     switch(operator){
//         case '+':
//             result = num1 + num2;
//         break;
//         case '-':
//             result = num1 - num2;
//         break;
//         case '/':
//             result = num1 / num2;
//         break;
//         case '*':
//             result = num1 * num2;
//         break;
//         case '%':
//             result = num1 % num2;
//         break;
//         case '**':
//             result = num1 ** num2;
//         break;
//     }
//     console.log(result);
// }

// Problem 6
// ----------------------------

// function solve(num1, num2, num3){
//     let result;

//     if (num1 > num2 && num1 > num3)
//     {
//         result = num1;
//     }

//     else if(num2 > num1 && num2 > num3){
//         result = num2;
//     }

//     else if(num3 > num1 && num3 > num2){
//         result = num3;
//     }
//     console.log(`The largest number is ${result}.`)
// }


// Problem 7
// ----------------------------------------

// function solve(day, age)
// {
//     let ticketPrice;
//     switch(day)
//     {
//         case "Weekday":
//             if(age >= 0 && age <= 18)
//             {
//                 ticketPrice = 12;
//             }

//             if(age > 18 && age <= 64)
//             {
//                 ticketPrice = 18;
//             }

//             if (age > 64 && age <= 122)
//             {
//                 ticketPrice = 12;
//             }
//         break;
//         case "Weekend":
//             if(age >= 0 && age <= 18)
//             {
//                 ticketPrice = 15;
//             }

//             if(age > 18 && age <= 64)
//             {
//                 ticketPrice = 20;
//             }

//             if (age > 64 && age <= 122)
//             {
//                 ticketPrice = 15;
//             }
//         break;
//         case "Holiday":
//             if(age >= 0 && age <= 18)
//             {
//                 ticketPrice = 5;
//             }

//             if(age > 18 && age <= 64)
//             {
//                 ticketPrice = 12;
//             }

//             if (age > 64 && age <= 122)
//             {
//                 ticketPrice = 10;
//             }
//         break;
//     }

//     if (ticketPrice == undefined){
//         console.log("Error!")
//     }
//     else{
//         console.log(`${ticketPrice}$`)
//     }
// }

// solve('Holiday', -12)


// Problem 8
// ----------------------------------------

// function solve(input){
//     let result;

//     let inputType = typeof(input);

//     if(inputType === 'number'){
//         result = Math.pow(input, 2) * Math.PI;
//         console.log(result.toFixed(2));
//     }
//     else{
//         console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
//     }
// }


// Problem 9
// ----------------------------------------
// function solve()
// {
//     for(let i=1; i <= 5; i++)
//     {
//         console.log(i);
//     }
// }

function solve(numM, numN)
{
    for(let i = numM; i >= numN; i--){
        console.log(i);
    }
}

solve(6, 2);