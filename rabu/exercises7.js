function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var i=0;
    var numberofwords=1;
    
    while (i<= kalimat.length) {
        if(kalimat.substring(i, i+1) == " "){
            numberofwords++;
            i++
        }
        if(kalimat.substring(i, i+1) == "\n"){
            numberofwords++;
            i++
        }
        i++
    }
    return numberofwords;


  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5



