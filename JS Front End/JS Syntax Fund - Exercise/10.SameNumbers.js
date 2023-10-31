function sameNumbers(number)
{
    let numbersAsString = Math.abs(number).toString()
    let boolIsSame = true;
    let sum = 0;
    let currentNumber = 0;
    let firstNumber = Number(numbersAsString[1]);
    for(let i = 0; i < numbersAsString.length; i++)
    {
        currentNumber = Number(numbersAsString[i]);
        sum+= currentNumber;
        if(firstNumber != currentNumber && numbersAsString.length > 1){
            boolIsSame = false;
        }
    }

    console.log(boolIsSame);
    console.log(sum);
}
sameNumbers(0);

