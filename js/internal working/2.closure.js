function outer(){
    let outerScope = 10;
    function inner(){
        console.log(outerScope);
    }
    return inner;
}

let returnedInner = outer(); 
returnedInner(); // inner();