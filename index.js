// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];

function  destructivelyAppendCat(name) {
    cats.push(name);
}

function  destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function  destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name){
    let newArray = cats.concat(name);
    return newArray;
}

function prependCat(name){
    let newArray = cats.slice();
    newArray.unshift(name);
    return newArray;
}

function removeLastCat(){
    let newArray = cats.slice(0, cats.length -1);
    return newArray
}

function removeFirstCat() {
    let newArray = cats.slice(1);
    return newArray
}
// removeLastCat()
// 3) removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
// removeFirstCat()
// 4) removes the first cat from the cats array and returns a new array, leaving the cats array unchanged