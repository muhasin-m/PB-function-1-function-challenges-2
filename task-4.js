const repeatString = (string, n) => {
    let newString = "";
    for(let i = 0;i<n;i++){
        newString += string;
    }
    return newString;

}

console.log(repeatString("table", 3)); // "tabletabletable"
console.log(repeatString("cat", 5)); // "catcatcatcatcat"
console.log(repeatString("dog", 0)); // ""
console.log(repeatString("", 5)); // ""
console.log(repeatString("+", 10)); // "++++++++++"
