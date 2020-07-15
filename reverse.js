function reverseString(str){
    var reverse = "";
    for(var i = 0; i < str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement ="Hello alien brother.";
var forAlien = reverseString(statement);
console.log(forAlien);
var foodVlog = reverseString("food manu item");
console.log(foodVlog);