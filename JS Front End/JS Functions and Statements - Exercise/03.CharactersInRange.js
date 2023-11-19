function printCharactersBetween(firstChar, secondChar)
{
  let result = '';
  let start = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
  let end = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());
  

  for(let i = start + 1; i < end; i++)
    {
      let currentChar = String.fromCharCode(i);

      result += `${currentChar} `
    }
    
    console.log(result)
}


printCharactersBetween('a','k')