// fetch("https://catfact.ninja/fact")
//   .then((response) => {
//     // console.log("Api response", response);
//     return response.json();
//   })
//   .then((json) => {
//     document.querySelector("div").innerText = json.fact;
//     console.log(json);
//   })
//   .catch((err) => {
//     console.log("error fetching the api", err);
//   });


async function fetchApiUsingAsyncAwait(){
    try{
        let response = await fetch("https://catfact.ninja/fact");
        let json = await response.json();
        document.querySelector("div").innerText = json.fact;
        console.log(json.fact);
    } catch(err){
        console.log('error fetching api', err)
    }
}

fetchApiUsingAsyncAwait();
