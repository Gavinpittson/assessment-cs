// #1   O(n^2)

let array = [3, -2, 3, -4, 2]
const sumZero = (arr) => {
    for ( i = 0; i < arr.length; i++ ) {
        for ( k=0; k < arr.length; k++ ) {
            if ( arr[i] + arr[k] === 0 ) {
                return true
            }
        }
    } return false
}

console.log(sumZero(array))



// #2 0(n)

let string = 'helo'
function onlyUniqueCharacters(str){
    for(i = 0; i < str.length - 1; i++){
        if(str.includes(str[i], i + 1)){
            return false
        }
    }
    return true
}

console.log(onlyUniqueCharacters(string))

// #3  0(n)

function isPangram(string){
    let stringArray = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(stringArray.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;  
}

console.log(isPangram('Pack my box with five dozen liquor jugs'))

//#4  0(n)

let words = ['potato', 'hello', 'rock', 'Pneumonoultramicroscopicsilicovolcanoconiosis']

const findLongestWord = (arr) => {
    let word = ''
    for ( let i = 0; i < arr.length; i++){
        if (word.length < arr[i].length){
            word = arr[i]
        }
    }
    return word.length
}

console.log(findLongestWord(words))


  
  
  
  