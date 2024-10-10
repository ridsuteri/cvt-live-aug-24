let loginDetails = doLogin(printLoginInfo) // will make an login request for me [this is blocking piece of code]
// it is bound to take time

// console.log(loginDetails); // this is non blocking 
// it will execute immediately
// instead of doing this, we will take use of callback functions

function printLoginInfo(loginDetails){
    console.log(loginDetails);
}

// this callback here represents the function that we are going to receive at the time of funciton invokation
function doLogin(callback){
    setTimeout(()=>{
        let result = {username: 'loggedInUser'}
        callback(result);
    },1000)
}
