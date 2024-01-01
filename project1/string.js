const client = require('./client');

async function init(){
    const result = await client.get("person:1");
    console.log("Persn name is ", result);

    const result1 = await client.get("person:2");
    console.log("Persn name is ", result1);
}

init();
