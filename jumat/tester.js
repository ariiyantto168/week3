// function bubble_Sort(a)
// {
//     var swapp;
//     var n = a.length-1;
//     var x=a;
//     do {
//         swapp = false;
//         for (var i=0; i < n; i++)
//         {
//             if (x[i] < x[i+1])
//             {
//                var temp = x[i];
//                x[i] = x[i+1];
//                x[i+1] = temp;
//                swapp = true;
//             }
//         }
//         n--;
//     } while (swapp);
//  return x; 
// }

// console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

function groupAnimals(animals) {
    // you can only write your code here!
    
    // array untuk hasil pengelompokan hewan
    var hasil = [];
    // variabel untuk indeks array hasil
    var indeks = 0;
    // fungsi sorting
    animals.sort();
    
    // perulangan sebanyak jumlah hewan di array animals
    for (var i = 0; i < animals.length; i++) {
      // jika array hasil masih kosong, maka hewan pertama dari array animals akan di-push 
      if (hasil.length === 0) {
        // push data hewan ke array hasil
        // [['ayam']]
        hasil.push([animals[i]]);
      // membandingkan karakter pertama hasil[indeks][0][0] dengan karakter pertama pada array animals   
      } 
      else if (hasil[indeks][0][0] === animals[i][0]) {
        // jika karakter pertama dari nama hewan sama, maka akan dipush ke indeks array yang sama
        // [['ayam', 'anoa']]
        hasil[indeks].push(animals[i]);
      // jika 2 kondisi sebelumnya tidak terpenuhi (karakter pertama dengan nama hewan sebelumnya tidak sama  
      }
       else {
        // push hewan dari animals ke indeks array baru di dalam array hasil
        // [['ayam', 'anoa'], ['cacing']]
        hasil.push([animals[i]]);
        // indeks dari array hasil ditambah 1
        indeks++;
      }
    }
    // return output array hasil
    return hasil;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda'] ]
  console.log('\n');
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]