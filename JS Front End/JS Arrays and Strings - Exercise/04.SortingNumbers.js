function solve(numbers)
{
    numbers.sort((a, b) => a - b);
    let smallNumber;
    let bigNumber;
    let sorted = [];

    while(numbers.length > 0)
    {
        smallNumber = numbers.shift();
        bigNumber = numbers.pop();

        sorted.push(smallNumber);
        sorted.push(bigNumber);
    }
    return sorted;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])