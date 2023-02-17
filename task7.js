const arr = [0, 1, 2, 3, 4, 5, 6, 7];
let even = 0;
let odd = 0;
let zero = 0;
function getEvenOdd() {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            if (arr[i] === 0) {
                zero++;
            } else if (arr[i]%2 === 0) {
                even++;
            } else {
                odd++;
            }
        }
    }
    console.log(`zero ${zero}; even ${even}; odd ${odd};`)
}
getEvenOdd()
