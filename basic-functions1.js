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
