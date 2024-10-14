function doLogin() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("successfully logged in ..");
      resolve({ status: 200, username: "admin" });
    }, 1000);
  });
}

function redirectToFeed(result) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (result.status == 200) {
        resolve(true);
      } else {
        reject(false);
      }
    }, 100);
  });
}

function printRedirectMssg(result) {
  if (result) {
    console.log(`redirecting to user feed`);
  } else console.log(`error redirecting`);
}

//  promise1            promise2
// doLogin() then() -> redirectToFeed() then() -> printRedirectMssg()

doLogin()
  .then((result) => {
    console.log("response after resolving doLogin function", result);
    return redirectToFeed(result);
  })
  // here the return function will be dumped
  // so that means that promise now exists at this level ....
  .then((redirectToFeedPromiseResponse) => {
    console.log(
      "response after resolving redirecToFeed function",
      redirectToFeedPromiseResponse
    );
    printRedirectMssg(redirectToFeedPromiseResponse);
  })
  .catch(() => {
    console.log("error logging in...");
  });

//   function outer(){
//     return function inner(){
//         console.log('inner is being called')
//     }
//   }

//   outer()()
