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

  const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
    
  function averageWord(mixedElements) {

    let numeros= 0;
    let strings= 0;
   
    for (let i = 0; i < mixedElements.length; i++){

        if(typeof(mixedElements[i])=="number"){

            numeros += mixedElements[i];

        }else if (typeof(mixedElements[i])!=="number"){

            strings +=mixedElements[i].length;
        }
    }
    return numeros+strings
}
console.log(averageWord(mixedElements));



//--------------------------------------------------------------

const duplicates = ['sushi','pizza','burger','potatoe','pasta','ice-cream','pizza', 'chicken','onion rings','pasta','soda'];
  
function removeDuplicates(duplicates) {

    for (let i = 0; i< duplicates.length; i++){
        let string = duplicates[i]

        if (duplicates.indexOf(string)!==-1){

            return true
        }
        else{

            return false
        }
    }
}
let result = removeDuplicates(duplicates)

console.log(result);

let sinDuplicados= duplicates.filter((item,index)=>{
    return duplicates.indexOf(item)===index;
})

console.log(sinDuplicados);

//------------------------------------------------------------------------


const nameFinder = ['Peter','Steve','Tony','Natasha','Clint','Logan','Xabier','Bruce','Peggy','Jessica','Marc'];     

function finderName(array,valor) {

    return array.some(function(arrayValor){
        return valor === arrayValor;
    });
}
finderName(nameFinder, "Peggy");
console.log(true)

    
if( nameFinder.includes("Peggy")){
  nameFinder.indexOf("Peggy");
    
}


//----------------------------------------------------------------------------

const counterWords = ['code','repeat','eat','sleep','code','enjoy','sleep','code','enjoy','upgrade','code'];
  
function repeatCounter(counterWords) {
   let repetidos= {};
 
   counterWords.forEach(function(numero){
    repetidos[numero] = (repetidos[numero] || 0) + 1;
  });
  
 return repetidos

}
console.log(repeatCounter(counterWords));
