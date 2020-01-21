// Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter.
//  Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat.
//  Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. 
// Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
function targetTerdekat(arr) {
    // you can only write your code here!
    let a = 0;
    let b = 0;
    let tampung = 0;
    let arrX = [];

    if(arr.indexOf('x') === -1){
        return 0;
      }
      else{
        for(var i = 0; i < arr.length; i++){
          if(arr[i] === 'x'){
            a = i;
            arrX.push(a);
          }
          else if(arr[i] === 'o'){
            b = i;
          }
          var hasil = [];
          for(var j = 0; j < arr.length; j++){
            tampung = Math.abs(b - arrX[j]);
            hasil.push(tampung);
            hasil.sort();
          }
        }
        return hasil[0]; 
      }
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2