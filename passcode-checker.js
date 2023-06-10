// start solving problem
let i = 0;
let j = 0;
let k = 0;
let l = 0;
let iter = 1;

const runLoop = (passcode) => {
  // check time to complete the code
  console.time("time-to-match");

  while (iter <= 4) {
    // view result on each iteration
    console.log(l, k, j, i);

    // stop loop if it matches
    const result = "" + l + k + j + i;
    if (passcode === result) {
      console.log("matched");
      break;
    }

    if (i < 9) i++;
    else if (i === 9) {
      i = 0;
      if (iter === 1) iter++;
    }

    if (iter >= 2) {
      if (j < 9 && i === 0) j++;
      else if (j === 9 && i === 0) {
        j = 0;
        if (iter === 2) iter++;
      }
    }

    if (iter >= 3) {
      if (k < 9 && j === 0 && i === 0) k++;
      else if (k === 9 && j === 0 && i === 0) {
        k = 0;
        if (iter === 3) iter++;
      }
    }

    if (iter === 4) {
      if (l < 9 && k === 0 && j === 0 && i === 0) l++;
      else if (l === 9 && k === 0 && j === 0 && i === 0) {
        l = 0;
        iter++;
      }
    }
  }

  console.timeEnd("time-to-match");
};

let passcode = "9456";
// take passcode as argument
const arg = process.argv[2];
if (!isNaN(Number(arg)) && arg.length === 4) {
  passcode = arg;
}
runLoop(passcode);
