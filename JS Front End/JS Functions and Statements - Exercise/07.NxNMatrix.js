function matrix(number)
{
    numberAsString = number + ` `;
    for(let i = 0; i < number; i++)
    {
        console.log(numberAsString.repeat(number));
    }

}


matrix(3)