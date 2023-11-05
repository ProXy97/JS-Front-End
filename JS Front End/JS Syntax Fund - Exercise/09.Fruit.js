function solve(fruitType, weight, pricePerKg)
{
    let moneyNeeded = weight * pricePerKg / 1000;
    weight = weight / 1000;
    let result = `I need $${moneyNeeded.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruitType}.`;

    console.log(result);
}

