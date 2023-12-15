function solve(input) {
    let astronautsCount = input.shift();

    let astronauts = {};


    for (let astronaut = 0; astronaut < astronautsCount; astronaut++) {
        const [astronautName, oxygenLevel, energyReserve] = input.shift().split(' ');

        astronauts[astronautName] = {
            oxygenLevel: Number(oxygenLevel),
            energyReserve: Number(energyReserve)
        };
    }

    let command = input.shift();

    while (command !== 'End') {
        command = command.split(' - ');

        let action = command[0];
        let name = command[1];
        let amount = Number(command[2]);
        let difference = 0;
        switch (action) {
            case 'Explore':
            if (astronauts[name].energyReserve < amount ) 
                {
                    console.log(`${name} does not have enough energy to explore!`);
                }
            else {
                astronauts[name].energyReserve -= amount;
                console.log(`${name} has successfully explored a new area and now has ${astronauts[name].energyReserve} energy!`);
            }
                break;
            case 'Refuel':
                astronauts[name].energyReserve += amount;
                if(astronauts[name].energyReserve > 200)
                {
                    difference = 200 - astronauts[name].energyReserve;
                    astronauts[name].energyReserve = 200;
                }
                console.log(`${name} refueled their energy by ${amount + difference}!`);
                break;
            case 'Breathe':
                astronauts[name].oxygenLevel += amount;
                if (astronauts[name].oxygenLevel > 100) 
                {
                    difference = 100 - astronauts[name].oxygenLevel;
                    astronauts[name].oxygenLevel = 100;
                }
                console.log(`${name} took a breath and recovered ${amount + difference} oxygen!`);
                break;
        }
        command = input.shift();
    }

    for (const astronaut in astronauts) {
        
        console.log(`Astronaut: ${astronaut}, Oxygen: ${astronauts[astronaut].oxygenLevel}, Energy: ${astronauts[astronaut].energyReserve}`);
    }

}




solve(['3',
    'John 50 120',
    'Kate 80 180',
    'Rob 70 150',
    'Explore - John - 50',
    'Refuel - Kate - 30',
    'Breathe - Rob - 20',
    'End'])