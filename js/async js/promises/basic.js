function asyncOperation(){
    // modifcation needed!
    // instead of ghosting the awaited result,
    // why not just tell them to wait until you respond
    setTimeout(()=>{
        return 'success'
    },100)
}

let result = asyncOperation();

asyncOperationReturningPromise()
.then((result)=>{
    console.log(result)
    // console.log('promise resolved');
}).catch((err)=>{
    console.log(err)
    // console.log('promise rejected')
});

// console.log(result)
// console.log(promiseResult)

function asyncOperationReturningPromise(){
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({username:'admin',email:"admin@gmail.com"})
        },3000)
    });

    // let promise = new Promise((resolve, reject)=>{
    //     setTimeout(()=>{
    //         reject({message:'we are testing promise rejection'})
    //     },100)
    // });

    // let promise = new Promise((resolve, reject)=>{
    //     resolve({message:'promise resolved immediately', data: [1,2,3]})
    // });

    return promise;
}
