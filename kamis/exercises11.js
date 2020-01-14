// Diberikan sebuah function tentukanDeretAritmatika(arr) yang menerima satu parameter berupa array yang terdiri dari angka.
//  Function tersebut akan mengembalikan truejika array dari parameter tersebut merupakan deret aritmatika. 
// Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten. Contoh, [2, 4, 6, 8] adalah deret aritmatika
//  dengan pertambahan nilai sebesar 2, dan [2, 4, 6, 9] bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten.
// deret aritamtika

function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
  let x = arr.slice(-1).pop() - arr.slice(-2, -1).pop();
  let y = true;

  for (let i = arr.length-1; i > 0; i--) {
     if (x !== (arr[i] - arr[i-1])) {
       y = false;
     }
  }
  return y;
}
  

  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
