const getIndexOf = function(array, item) {
    return array.indexOf(item);
}

console.log(getIndexOf(["apple", "pear", "banana"], "kiwi")); // -1
console.log(getIndexOf(["apple", "pear", "banana"], "banana")); // 2
console.log(getIndexOf(["apple", "pear", "banana"], "apple")); // 0
