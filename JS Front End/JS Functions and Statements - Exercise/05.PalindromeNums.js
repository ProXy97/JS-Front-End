function palindromeNums(arr)
{

    function isPalindrome(num)
    {
        let numsAsString = num.toString();
        let reversedNums = numsAsString.split('').reverse().join('');

        return numsAsString === reversedNums;
    }

    for (const num of arr) {
        console.log(isPalindrome(num))
    }
}

palindromeNums([123,323,421,121]);