var numbers = [45, 65, 78, 12, 3, 54, 65];
var sum = 0;
for(var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    var element = numbers[i];
    sum = sum + element;
}
console.log('total of the numbers:', sum);

function getArraySum(numbers){
    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [45, 65, 78, 12, 3, 54, 65];
var result = getArraySum(numbers);
console.log('total of the numbers:', result);

//var total = getArraySum([43, 53, 35, 65]);
//console.log('total of the numbers:', total);