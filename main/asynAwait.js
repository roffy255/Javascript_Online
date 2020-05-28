async function example(){
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject('seti')
        }, 2000)
    })
    let condition = await promise;
    console.log('hellooooo');
    return condition;
}

example()
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
        console.log(error)
    })
