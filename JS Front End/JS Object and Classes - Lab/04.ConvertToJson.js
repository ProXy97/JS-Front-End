function convertToJson(name, lastName, hairColor)
{
    const person = {name, lastName, hairColor};
    const objectAsJson = JSON.stringify(person);

    console.log(objectAsJson);
}


convertToJson('George', 'Jones', 'Brown')