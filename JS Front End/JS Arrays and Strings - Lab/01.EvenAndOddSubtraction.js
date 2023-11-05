function solve(arr)
{
    let evenSum = 0;
    let oddSum = 0;

    for(i = 0; i < arr.length; i++)
    {
        currentNumber = Number(arr[i]);

        if(currentNumber % 2 == 0)
        {
            evenSum += currentNumber;
        }
        else
        {
            oddSum += currentNumber;
        }
    }
    let result = evenSum - oddSum;

    console.log(result)
}

solve([2,4,6,8,10])