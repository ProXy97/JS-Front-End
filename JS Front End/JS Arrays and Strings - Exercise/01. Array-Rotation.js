function solve(array, rotations)
{
    for(let i = 0; i < rotations; i++)
    {
        var firstElement = array.shift();
        array.push(firstElement);
    }
    console.log(array.join(" "))
}

solve([51, 47, 32, 61, 21], 2)