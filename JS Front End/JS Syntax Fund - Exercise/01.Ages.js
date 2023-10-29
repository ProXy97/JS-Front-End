function solve(age)
{
    let result;

    if(age >= 0 && age <= 2){
        result = "baby";
    }

    if(age >= 3 && age <= 13){
        result = "child";
    }

    if(age >= 14 && age <= 19){
        result = "teenager";
    }

    if(age > 19 && age <= 65){
        result = "adult";
    }
    if(age > 65){
        result = "elder";
    }
    if(age < 0){
        result = "out of bounds";
    }
    console.log(result);
}

solve(20)