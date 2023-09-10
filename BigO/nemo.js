const nemo = ["nemo"]; // O(1) --> Constant Time
const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"]; // O(n)
const large = new Array(100).fill("nemo"); // O(n)


function findNemo(array) {
    //let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "nemo") {
            console.log("We found Nemo!");
        }
    }
    //let t1 = performance.now();
    //console.log(t1 - t0);
}

findNemo(large);


// O(n) --> Linear Time


// BIG O EXERCISES

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}

// O(1+1+4n+1)
// So:
// O(n)


// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) { // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) { // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}


// O(4 + 5n(or 7n))
// So:
// O(n)
