const removeVowels = (string) => {
    let arr = ["a","e","i","o","u","A","E","I","O","U"];
    let newString = "";
    let x = 0;
    for(let j = 0;j<=string.length;j++){
        x=0;
        for(let i = 0;i <= arr.length;i++){
            if(string[j] == arr[i]){    
                x++;
            }
            if(i==arr.length&&x==0){
                newString += string[j];
            }
        }
    }

    return newString;

}

console.log(removeVowels("table")); // "tbl"
console.log(removeVowels("JavaScript")); // "JvScrpt"
console.log(removeVowels("AEIOU")); // ""
console.log(removeVowels("ABCDe")); // "BCD"