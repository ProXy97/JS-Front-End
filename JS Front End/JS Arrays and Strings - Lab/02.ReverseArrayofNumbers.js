function solve(number, array)
{
    let arr = [];

    for(let i = 0; i < number; i++)
    {
        arr.push(array[i]);
    }

    let output = "";

    for(let i = arr.length - 1; i >= 0; i--)
    {
        output += arr[i] + " ";
    }

    console.log(output);
}

solve(3, [10, 20, 30, 40, 50])