function loadingBar(percentage)
{

    if(percentage === 100)
    {
        console.log(`100% Complete!`);
        console.log(`[%%%%%%%%%%]`);
    }

    else
    {
        let symbol = `%`;
        let dot = `.`;
        let symbols = symbol.repeat(percentage / 10);
        let dots = dot.repeat(10 - symbols.length);

        console.log(`${percentage}% [${symbols}${dots}]`);
        console.log(`Still loading...`);

    }

} 


loadingBar(100);