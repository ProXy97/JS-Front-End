function employees(arr)
{
    let nameObj = {};

    for (let i = 0; i < arr.length; i++) {
        nameObj.fullName = arr[i];
        nameObj.personalNumber = arr[i].length;
        console.log(`Name: ${nameObj.fullName} -- Personal Number: ${nameObj.personalNumber}`);
    } 

}

employees(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal'])