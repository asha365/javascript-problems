var name = [3, 2, 4, 5, 7, 9, 5, 9, 2, 11, 13, 15];
var unicueName = [];
for(var i = 0; i < name.length; i++){
    var element = name[i];
    var index = unicueName.indexOf(element);
    if(index == -1){
        unicueName.push(element);
    }

}
console.log(unicueName);