// let nilai = prompt("Masukkan Nilai Kamu");
// switch (String(nilai)) {
//   case "70":
//     console.log("Cukup");
//     break;
//   case "80":
//     console.log("Baik");
//     break;
//   case "90":
//     console.log("Sangat Baik");
//     break;
//   default:
//     console.log("Sangat Buruk");
// }

// let nama = [];
// for (let i = 0; i < 3; i++) {
//   nama[i] = prompt("Masukkan Nama Ke-" + i);
// }
// let tampilNama = prompt("Tampilkan Nama");
// console.log(nama[tampilNama]);

// let id;
// let email = [];
// let password = [];
// for (let i = 0; i <= 2; ) {
//   id = prompt("Register Masukkan ID");
//   email[id] = prompt("Register Masukkan Email");
//   password[id] = prompt("Masukkan Password");
//   let pilihan = prompt(
//     "Untuk Login Masukkan (Y), Untuk Register Masukkan (N)"
//   ).toUpperCase();
//   if (pilihan === "N") {
//     i++;
//   } else {
//     id = prompt("Masukkan ID");
//     let logEmail = prompt("Masukkan Email");
//     let logPassword = prompt("Masukkan Password");
//     if (logEmail === email[id] && logPassword === password[id]) {
//       alert("Login Berhasil");
//     } else {
//       alert("Login Gagal");
//     }
//   }
// }

// let barbel = [];
// barbel.push(20, 15, 10, 5);
// barbel.push(2.5, 0);
// barbel.pop();
// barbel.shift();
// barbel.unshift(20);

// let array1 = ["intan", "dewo"];
// let array2 = ["mei", "botak"];
// let array3 = array2.concat(array1);

// console.log(array3);

// let bilangan = [100, 199, 2008, 313, 2125];

// console.log(bilangan.join("/"));

// const outfit = ["celana", "baju", "blouse", "tanktop"];
// console.log(outfit);

// const board = [
//   ["O", null, "O"],
//   ["X", "X", "X"],
//   [null, null, "O"],
// ];
// console.log(board[2][0]);

// ------MEMBUAT SEBUAH OBJECT------
// let namaHewan = {
//   unggas: "Burung",
//   melata: "Ular",
// };
// const barang = {
//   namaBrg: "Sepatu",
//   harga: "150000",
//   isReady: true,
//   size: ["36", "37", "38", "39", "40", "41", "42"],
//   location: {
//     indonesia: 48,
//     australia: 58,
//   },
// };

//------CARA MEMANGGIL DATA DARI OBJECT------
// barang.harga;
// barang.size[3];
// barang['is' + 'Ready'];
// barang.location.indonesia;

//------CARA MEMBUAT OBJECT BERSARANG------
// barang.harga = 200000;
// barang.warna = "blue"; //menambah properties baru

//------CARA MEMANGGIL OBJECT DI DALAM ARRAY------
// const kota = [
//   {
//     namaKota: "Bandung",
//     provinsi: "Jawa Barat",
//   },
//   {
//     namaKota: "Solo",
//     provinsi: "Jawa Tengah",
//   },
//   {
//     namaKota: "Medan",
//     provinsi: "Sumatera Utara",
//   },
// ];

// kota[1]; // memanggil index array
// kota[2].namaKota; //memanggil object dalam index array

//------PERULANGAN/LOOPING------

//---FOR---

// for (let i = 1; i <= 10; i++) {
//   console.log(`ini adalah angka ke-${i}`);
// }

// for (let i = 0; i <= 10; i += 2) {
//   console.log(`ini adalah bilangan genap ke-${i}`); //contoh 2
// }

// for (let i = 20; i >=0; i--) {
//   console.log(`ini adalah pengurangan bilangan ke-${i}`); //contoh 3
// }

// for (let i = 20; i <= 200000; i *= 10) {
//   console.log(`ini adalah perkalian ke-${i}`); //contoh 4
// }

//---LOOPING ARRAY (FOR)---
// const buah = ["apel", "anggur", "jeruk", "salak", "nanas"];

// for (let i = 0; i < buah.length; i++) {
//   console.log(i, buah[i]);
// }

//------NESTED LOOP------
//Example 1
// const pilihan = "abcde";
// for (let i = 1; i <= 5; i++) {
//   console.log(`${i}. Soal Nomor ${i}`);
//   for (let j = 0; j < pilihan.length; j++) {
//     console.log(`   ${pilihan[j]}. Pilihan Jawaban`);
//   }
// }

//Example 2 Nested Array with Nested Loop
// const studenRow = [
//   ["Dewo", "Wahyu", "Mustika", "Wiwaha"],
//   ["intan", "Meilanie", "Nugraha", "Nazla"],
//   ["Jaliah", "Kokom", "Indah", "Abdul"],
// ];

// for (let i = 0; i < studenRow.length; i++) {
//   const row = studenRow[i];
//   console.log(`Seat Row #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(`   ${row[j]}`);
//   }
// }

//---WHILE---
//Example 1
// const pw = "pass200502";
// let guess = prompt("enter password");
// while (guess !== pw) {
//   guess = prompt("enter password");
// }
// alert("Password is correct");

//Example 2
// let input = prompt("say something!");
// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase === "stop") break;
// }
// alert("OK");

//---GAME WITH WHILE---
// let maximum = parseInt(prompt('Masukkan Nilai Maksimal');
// while (maximum) {
//     maximum = parseInt(prompt('Masukkan Nilai Maksimal');
// }
// const targetNumber = math.floor(math.random() * maximum) + 1;
// console.log(targetNumber);

// let guess = parseInt(prompt('Isi tebakan pertama');
// let attempt = 1;

// while (parseInt(guess) !== targetNumber) {
//     attempt++;
//     if (guess > targetNumber) {
//         guess = parseInt(prompt('Terlalu Tinggi! Tebak Lagi:'));
//     } else {
//         guess = parseInt(prompt('Terlalu Rendah! Tebak Lagi:'));
//     }
// }
// alert(`Selamat Tebakkan Anda Benar! Dengan Percobann ${attempt} Kali`);

//---FOR OF---
//Example 1
// const fruits = ["Apel", "Mangga", "Jeruk", "Anggur"];
// for (let fruit of fruits) {
//   console.log(`Buah ${fruit}`);
// }

//Example 2 With Nested Array
// const studenRow = [
//   ["Dewo", "Wahyu", "Mustika", "Wiwaha"],
//   ["intan", "Meilanie", "Nugraha", "Nazla"],
//   ["Jaliah", "Kokom", "Indah", "Abdul"],
// ];
// for (let row of studenRow) {
//   for (let student of row) {
//     console.log(student);
//   }
// }

//---FOR IN---
// const score = {
//   Intan: 10,
//   In: 20,
//   tan: 10,
// };
// for (let student in score) {
//   console.log(`${student} Memiliki Skor ${score[student]}`);
// }

//------FUNCTION------
// function wowo() {
//   console.log("Bau Banget");
//   console.log("BOTAKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK");
//   console.log("HAHAHAHA WWKWKWKKWKWKWKWKWKWKWKWKW");
// }
// wowo();
