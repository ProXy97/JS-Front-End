function encodeAndDecodeMessages() {
    let encodeBtn = document.getElementsByTagName("button")[0];
    let decodeBtn = document.getElementsByTagName("button")[1];

    let encodeText = document.getElementsByTagName("textarea")[0];
    let decodeText = document.getElementsByTagName("textarea")[1];
    
    encodeBtn.addEventListener("click", encodeMessage);
    decodeBtn.addEventListener("click", decodeMessage);

    let encodedTextArr = [];
    let decodedTextArr = [];

    function encodeMessage()
    {
        let encodedTextValue = encodeText.value;

        for (let index = 0; index < encodedTextValue.length; index++) {
            let currentCharAsNumber = encodedTextValue[index].charCodeAt(0)+1;
            
            encodedTextArr.push(String.fromCharCode(currentCharAsNumber));
            
        }
        
        decodeText.value = encodedTextArr.join('')
        encodeText.value = '';
    }

    function decodeMessage()
    {
        
    }


}