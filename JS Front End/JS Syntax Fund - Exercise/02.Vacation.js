function solve(people, groupType, dayOfWeek)
{
    let result;
    let totalPrice;
    let price;

    switch(groupType)
    {
        case "Students":
            switch(dayOfWeek)
            {
                case "Friday":
                    price = 8.45;
                    break;
                case "Saturday":
                    price = 9.80;
                    break;
                case "Sunday":
                    price = 10.46;
                    break;
            }
            break;
        case "Business":
            switch(dayOfWeek)
            {
                case "Friday":
                    price = 10.45;
                    break;
                case "Saturday":
                    price = 15.60;
                    break;
                case "Sunday":
                    price = 16;
                    break;
            }
            break;
        case "Regular":
            switch(dayOfWeek)
            {
                case "Friday":
                    price = 15;
                    break;
                case "Saturday":
                    price = 20;
                    break;
                case "Sunday":
                    price = 22.50;
                    break;
            }
            break;
    }
    totalPrice = people * price;

    if(groupType == "Students" && people >= 30)
    {
        totalPrice = totalPrice - (totalPrice * 0.15);
    }

    if(groupType == "Business" && people >= 100)
    {
        totalPrice = totalPrice - (price * 10);
    }

    if(groupType == "Regular" && people >= 10 && people <= 20)
    {
        totalPrice = totalPrice - (totalPrice * 0.05);
    }

    result = `Total price: ${totalPrice.toFixed(2)}`

    console.log(result)
}

solve(30, "Students", "Sunday")
solve(40, "Regular", "Saturday")