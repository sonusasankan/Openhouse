
//question 1

function stringToNumber(string) {
  let numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let numbers = [];

  for (let i = 0; i < string.length; i++) {

    //checking if string has letters and any special characters  
    if (numArray.indexOf(string[i] * 1) != -1) {
       numbers.push(string[i]);
     } else if(string[i] === '-' ||  string[i] === '.'){
        numbers.push(string[i]);
     }
     else {
      if (numbers.length == 0) {
        numbers.push(0);
      }
      break;
    }
  }
  
  //Converting to number
  let number = numbers.join("") * 1;
  
  console.log(number + " " + typeof number);
}

//Test Cases.
stringToNumber("42");
stringToNumber("0");
stringToNumber("42a");
stringToNumber("42A");
stringToNumber("42a35");
stringToNumber("abc42");
stringToNumber("-42");
stringToNumber(".42");
stringToNumber("%$42");


//question2

const prizes = ["A Unicorn!", "A Hug!", "Fresh Laundry!"];

// for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
//     // For each of our buttons, when the user clicks it...
//     document.getElementById(`btn-${btnNum}`).onclick = function(){
//       // Tell her what she's won!
//       alert(prizes[btnNum]);
//     };
//   }

for (let btnNum = 0; btnNum < prizes.length; btnNum++) {
  // For each of our buttons, when the user clicks it...
  document.getElementById(`btn-${btnNum}`).onclick = function(){
    // Tell her what she's won!
    alert(prizes[btnNum]);
  };
}

// Here 'var' keyword need to be replaced with 'let' because 'var' has global scope and the value will be assigned as 3 globally. So whenever the button click happens, the 'prizes[btnNum]' === prizes[3] which is undefined.
