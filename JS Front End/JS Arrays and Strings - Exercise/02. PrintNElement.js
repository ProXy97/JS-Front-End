function solve(stringArray, number)
{
    let arrayLength = stringArray.length;
    let newArray = [];
    
    for(let i = 0; i < arrayLength; i++)
    {
        let currentNum = stringArray.shift();
        if(i % number == 0)
        {
            newArray.push(currentNum);
        }
    }

    return newArray;
}


solve(['5', '20', '31', '4', '20'], 2)