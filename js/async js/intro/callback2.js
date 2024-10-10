// redirectToFeed(result);

function doLogin(callback) {
    setTimeout(() => {
        let result = { status: 200, username: "admin" };
        if (result.status === 200) {
            console.log("user logged in successfully!");
            callback(result);
        } else {
            console.log("user login failed");
        }
        return result;
    }, 1000);
}

function redirectToFeed(result, callback) {
    setTimeout(() => {
        callback(result);
    }, 1000);
}

function printRedirectMssg(result) {
    console.log(`redirecting to ${result.username}'s feed`);
}


doLogin((result) => {
    redirectToFeed(result, (result) => {
        printRedirectMssg(result);
    });
});
