function city(obj)
{
    const {name, area, population, country, postCode} = obj;

    console.log(`name -> ${name}`);
    console.log(`area -> ${area}`);
    console.log(`population -> ${population}`);
    console.log(`country -> ${country}`);
    console.log(`postCode -> ${postCode}`);
} 


city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})