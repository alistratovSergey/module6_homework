//Задание 1
function oddNumbers(array) {
    for (let i = 0; i < array.length; i++) {
      let item = array[i];
      if(item % 2) 
        console.log(item);
    }
  }
   
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  oddNumbers(numbers);