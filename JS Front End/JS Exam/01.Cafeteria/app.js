function solve(input) {
    const baristaCount = Number(input.shift())

    let baristas = {};

    for (let baristaInfo = 0; baristaInfo < baristaCount; baristaInfo++) {

        let [baristaName, shift, skills] = input.shift().split(' ');

        baristas[baristaName] = {
            shift,
            skills: skills.split(',')
        };
    }

    let command = input.shift()

    while (command !== "Closed") {
        command = command.split(' / ');

        let action = command[0];
        let baristaName = command[1];
        let shift = '';
        let coffe = '';

        switch (action) 
        {

            case "Prepare":
                shift = command[2];
                coffe = command[3];
                if (baristas[baristaName].shift === shift && baristas[baristaName].skills.includes(coffe)) 
                {
                    console.log(`${baristaName} has prepared a ${coffe} for you!`);
                }
                else {
                    console.log(`${baristaName} is not available to prepare a ${coffe}.`);
                }
                break;
            case "Change Shift":
                shift = command[2];
                console.log(`${baristaName} has updated his shift to: ${shift}`);
                baristas[baristaName].shift = shift;
                break;
            case "Learn":
                coffe = command[2];
                if (baristas[baristaName].skills.includes(coffe)) 
                {
                    console.log(`${baristaName} knows how to make ${coffe}.`);
                }
                else {
                    baristas[baristaName].skills.push(coffe);
                    console.log(`${baristaName} has learned a new coffee type: ${coffe}.`);
                }
                break;
        }

        command = input.shift()
    }
    for (const barista in baristas) {
        console.log(`Barista: ${barista}, Shift: ${baristas[barista].shift}, Drinks: ${baristas[barista].skills.join(', ')}`);
    }
}

solve([
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed']);