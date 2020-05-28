

////spread operator

function add(...arg){
    console.log(arg);
    var result = 0;
    for(i of arg){
        result = result + i;
    }
    return result;
}

console.log(add(1,2,3,4,5,6,7,8,9,2,3,4,5,5,6,7,8,9))

