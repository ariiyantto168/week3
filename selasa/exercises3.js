
// use for

function dataHandling(susunKata) {
    let susun = '';
    for (let i=0; i<=susunKata.length-1; i++) {
        susun 

        console.log('Nomor ID :  '+susunKata[i][0]);
        console.log('Nama  Lengkap :  '+susunKata[i][1]);
        console.log('TTL :  '+susunKata[i][2] + ' ' + susunKata[i][3]);
        console.log('Hobi : '+susunKata[i][4]);
        console.log('');
        
    }
    return susun;
}
  
  console.log(dataHandling([
                  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
              ]));
              


// output
// Nomor ID:  0001
// Nama Lengkap:  Roman Alamsyah
// TTL:  Bandar Lampung 21/05/1989
// Hobi:  Membaca

// Nomor ID:  0002
// Nama Lengkap:  Dika Sembiring
// TTL:  Medan 10/10/1992
// Hobi:  Bermain Gitar

// Nomor ID:  0003
// Nama Lengkap:  Winona
// TTL:  Ambon 25/12/1965
// Hobi:  Memasak

// Nomor ID:  0004
// Nama Lengkap:  Bintang Senjaya
// TTL:  Martapura 6/4/1970
// Hobi:  Berkebun