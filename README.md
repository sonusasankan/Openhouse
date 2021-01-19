# Openhouse Assignment

## Answer

### Here 'var' keyword need to be replaced with 'let' because 'var' has global scope and the value will be assigned as 3 globally. So whenever the button click happens, the 'prizes[btnNum]' === prizes[3] which is undefined.

     for (let btnNum = 0; btnNum < prizes.length; btnNum++) {
      // For each of our buttons, when the user clicks it...
      document.getElementById(`btn-${btnNum}`).onclick = function(){
       // Tell her what she's won!
       alert(prizes[btnNum]);
      };
     }
