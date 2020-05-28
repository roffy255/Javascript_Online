var function1 = ()=>{
    var prom = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("hello white man");
            reject('sharad turned black');
        }, 5000)
    })
     return prom;
}

result = function1();

result
    .then((data)=>{
        console.log('resolved data ====> ', data);
    })
    .catch((error)=>{
        console.log('rejected error =====> ', error);
    })
    .finally(()=>{
        console.log("promise settled");
    })
