function printStore(currentStock, orderedStock)
{
    const stock = {};

    for(let i = 0; i < currentStock.length; i+= 2)
    {
        let product = currentStock[i];
        let qty = Number(currentStock[i + 1]);

        if(!stock.hasOwnProperty(product))
        {
            stock[product] = qty;
        }
        else{
            stock[product] += qty;
        }
    }

    for(let i = 0; i < orderedStock.length; i+= 2)
    {
        let product = orderedStock[i];
        let qty = Number(orderedStock[i + 1]);

        if(!stock.hasOwnProperty(product))
        {
            stock[product] = qty;
        }
        else{
            stock[product] += qty;
        }
    }

    for (const product in stock) {
        console.log(`${product} -> ${stock[product]}`);
    }
}


printStore(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])