// 1. selecting elements
let h1Elements = document.querySelector("h1");

let allH1Eelemets = document.querySelectorAll("h1");

allH1Eelemets[0]; // the first h1 element
allH1Eelemets[1]; // the second h1 element
// .. and so on ....

let obj = {
  textContent: "We are learning dom today",
  querySelector: () => {
    //does the job
  },
  querySelectorAll: () => {
    // does it's job
  },
  style: {
    // ..all possible css properties
    color: "black",
    lineHieght: "1",
    fontSize: 16,
    // ...
  },
};

// 2. modying elements
console.log(allH1Eelemets[1].innerHTML);
// innerHTML - fetch the nested html as well
// textContent - in the same format
// innerText - in plain format
allH1Eelemets[1].innerHTML = "<u> oops, changed using js </u>";
let input = document.querySelector("input");
console.log(input.value);

// alter attributes
input.id = "changed";

// modify the styles
allH1Eelemets[0].style.color = "red";

// allH1Eelemets[0].style.cssText = `
//   property1: value1,
//   protperty2: value2
// `;

// 3. create new elements
// step1: create an element
let img = document.createElement("img");
console.log(img);

// step2: populate the element
img.src = "https://picsum.photos/200/300";

// step3: placing that element onto screen
let documentBody = document.querySelector("body");
let divElement = document.querySelector("div");
divElement.appendChild(img);

// *** event listener ***
// elementToListenEvent.addEventListener('eventToListen', reactionFunction);

// ❌
// documentBody.addEventListener('click', alert('A click happened')) // we are right away calling this function
// we are supposed to only name the function or maybe define the function

// ✅
documentBody.addEventListener("click", function (event) {
    console.log(event)
  alert("A click happened");
});
