function smallestNumber(firstNumber, secondNumber, thirdNumber)
{
    let smallestNumber
    if(firstNumber < secondNumber && firstNumber < thirdNumber)
    {
        smallestNumber = firstNumber;
    }
    else if(secondNumber < firstNumber && secondNumber < thirdNumber)
    {
        smallestNumber = secondNumber;
    }
    else{
        smallestNumber = thirdNumber;
    }
    console.log(smallestNumber);
}

smallestNumber(2,2,2)