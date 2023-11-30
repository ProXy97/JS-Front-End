function solve() {
  let text = document.getElementById("text").value;
  let namingConvention = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");

  if(namingConvention === "Camel Case")
  {
    let sentance = [];

    text = text.toLowerCase().split(' ');

    sentance.push(text[0]);

    for (let index = 1; index < text.length; index++) {
      sentance.push(text[index].charAt(0).toUpperCase() + text[index].slice(1));
    }

    result.textContent = sentance.join('');
  }
  else if(namingConvention === "Pascal Case")
  {
    let sentance = [];

    text = text.toLowerCase().split(' ');

    for (let index = 0; index < text.length; index++) {
      sentance.push(text[index].charAt(0).toUpperCase() + text[index].slice(1));
    }

    result.textContent = sentance.join('');
  }
  else {
    result.textContent = "Error!";
  }
  

}