var fetch = require('node-fetch');


async function extractor(user){
    const url = 'https://api.github.com/users/'+ user;
    let promise = fetch(url);
    let checkpoint = await promise;
    let githubUser = await checkpoint.json();

    return githubUser;
}

extractor('rsnjoshi')
    .then((data)=>{
        console.log(data.name);
    })


    