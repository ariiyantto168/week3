// Buatlah sebuah fungsi dengan nama balikString. Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.


function balikString(backWords) {

  var wordBacks = '';
  for(var i=backWords.length-2; i>=0; i--){
    wordBacks = wordBacks+backWords[i]; 
    // console.log(wordBacks);
  }


  return wordBacks;
}

console.log(balikString("hello world!"));


// input "hello world!"
// output
// "!dlrow olleh"