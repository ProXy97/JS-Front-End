function solve(number)
{
    let numString = Math.abs(number).toString();

    let sum = 0;

    for(let i = 0; i < numString.length; i++){
        sum += parseInt(numString[i], 10);
    }

    console.log(sum)
}

solve(245678)