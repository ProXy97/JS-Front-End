function addAndSubstract(firstNumber, secondNumber, thirdNumber)
{
    function sum()
    {
        return firstNumber + secondNumber;
    }

    function subtract()
    {
        return sum() - thirdNumber;
    }

    console.log(subtract())
}


addAndSubstract(23,6,10)