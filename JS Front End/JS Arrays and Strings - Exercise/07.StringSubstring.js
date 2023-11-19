function solve(word, text){

    let textArray = text.toLowerCase().split(' ');
    let output = `${word} not found!`;
    

    for(let i = 0; i < textArray.length; i++)
    {
        let currentWord = textArray[i];

        if(currentWord === word){
            output = currentWord;
        }
    }
    console.log(output);
}


solve('javascript', 'JavaScript is the best programming language')