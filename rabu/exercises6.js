function angkaPalindrome(num) {
  while (true) {
    num++
    let a = String(num);
    let strReverse = a.split('').reverse().join('');
    if (a === strReverse) {
      return Number(a);
    }
  }

}


  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001

 
 