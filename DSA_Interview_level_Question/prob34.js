
let array = [1,4,54,8,9,1];
let sequence = [1,8,9];

function isValidSubsequence(array, sequence) {
  //subsequence cares about one
  //array = [5,1,22,25,6,-1,8,10]
  //sequence = [1,6,-1,10]
  let arrIdx = 0;
  let sqxInx = 0;
  while (arrIdx < array.length && sqxInx < sequence.length) {
    if (array[arrIdx] === sequence[sqxInx]) sqxInx++;
    //regardless if True we keep moving forward in main array
    arrIdx++;
  }
  //only valid subsequence if the sequenceIdx is equal to the sequence array
  return sqxInx === sequence.length;
}


console.log(isValidSubsequence(array,sequence))