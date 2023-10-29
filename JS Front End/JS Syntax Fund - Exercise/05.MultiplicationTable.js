function solve(number){
    let product = 0;
    let result;
    for(let i = 1; i <= 10; i++)
    {
        product = number * i;
        result = `${number} X ${i} = ${product}`
        console.log(result);
    }
}

solve(5);
solve(2);