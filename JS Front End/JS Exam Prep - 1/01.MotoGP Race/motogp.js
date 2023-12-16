function solve(input) {
    const numberOfRiders = Number(input.shift());

    let riders = {};

    for (let riderInfo = 0; riderInfo < numberOfRiders; riderInfo++) {
        let [riderName, fuelCapacity, position] = input.shift().split('|');

        riders[riderName] = {
            fuelCapacity,
            position: Number(position)
        };

    }

    let command = input.shift();

    while (command !== 'Finish') {
        command = command.split(' - ');
        let riderName = command[1];

        switch (command[0]) {
            case 'StopForFuel':
                let minimumFuel = Number(command[2]);
                let changedPosition = Number(command[3]);

                if (riders[riderName].fuelCapacity < minimumFuel) 
                {
                    console.log(`${riderName} stopped to refuel but lost his position, now he is ${changedPosition}.`);
                    riders[riderName].position = changedPosition;
                }
                else{
                    console.log(`${riderName} does not need to stop for fuel!`);
                }
                break;
            case 'Overtaking':
                let riderOne = command[1];
                let riderTwo = command[2];

                if (riders[riderOne].position < riders[riderTwo].position) {
                    let riderOnePosition = riders[riderOne].position;
                    riders[riderOne].position = riders[riderTwo].position;
                    riders[riderTwo].position = riderOnePosition;
                    console.log(`${riderOne} overtook ${riderTwo}!`);
                }

                break;

            case 'EngineFail':
                let lapsLeft = command[2];
                console.log(`${riderName} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
                delete riders[riderName];
                break;
        }

        command = input.shift();
    }

    for (const rider in riders) {
        console.log(rider);
        console.log(`  Final position: ${riders[rider].position}`);
    }
}

solve((["3",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"]));