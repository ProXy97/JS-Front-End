function townsObj(townsArray)
{
    let towns = {};

    for(let currentRow = 0; currentRow < townsArray.length; currentRow++)
    {
        let currentRowSplitted = townsArray[currentRow].split(" | ");

        towns.town = currentRowSplitted[0];
        towns.latitude = Number(currentRowSplitted[1]).toFixed(2);
        towns.longitude = Number(currentRowSplitted[2]).toFixed(2);
        console.log(towns);
    }

}

townsObj(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625'])