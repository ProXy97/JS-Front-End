function convertToObject(jsonObj)
{
    let obj = JSON.parse(jsonObj);

    for (const el of Object.entries(obj)) {
        const [key, value] = el;
        console.log(`${key}: ${value}`)
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')