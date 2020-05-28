function simpleinterest(principle, rate, year){
    return principle*rate*year/100;
}

function compoundinterest(principle, rate, year){
    return principle*(1+(rate/100))^year;
}

var data = {};

data.simpleinterest = simpleinterest(12000, 2, 4);
data.compoundInterest = compoundinterest(1200, 2, 4);
data.principleAmount = 12000;
data.rate = 2;
data.time = 4;

console.log(data);