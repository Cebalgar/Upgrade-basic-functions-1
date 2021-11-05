function sum(numberOne , numberTwo) {
    
    if (numberOne < numberTwo){
        return numberTwo
    } else{
           return numberOne
    }
        
    }
    
    let result = sum(37 ,21);
    
    console.log(result);
    
    //---------------------------------------------------

    const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(avengers) {

    let longestWord= avengers[0];

    for (let i=0; i<avengers.length; i++){
        if(avengers[i].length>longestWord.length){
            longestWord=avengers[i];
        }
    }
  return longestWord
}
let result = findLongestWord(avengers);

console.log(result);

//---------------------------------------------------------
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numbers) {
   let sum = 0;
    for (let i= 0; i<numbers.length; i++){
        sum += numbers[i];
    }
return sum
}
let result= sumNumbers(numbers);
console.log(result);

//--------------------------------------------------------------
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numbers) {
    let sum = 0;
    let count = numbers.length; 
    
    for (let i= 0; i<numbers.length; i++){
        sum += numbers[i];
    }
    let avg = sum/count;
    return avg
  }

  let result = average(numbers);
  console.log(result);
  //---------------------------------------------------------------