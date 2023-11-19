function oddAndEvenSum(number)
{
    let numberAsString = String(number);
    let oddSum = 0;
    let evenSum = 0;

    for(let index = 0; index < numberAsString.length; index++)
    {
        let currentNumber = Number(numberAsString[index]);

        if(currentNumber % 2 == 0)
        {
            evenSum+= currentNumber;
        }
        else{
            oddSum += currentNumber;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}


oddAndEvenSum(1000435)