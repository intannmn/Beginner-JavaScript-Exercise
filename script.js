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

//------PARAMETER & ARGUMENT IN FUNCTION-----
// function say(name) {
//   console.log(`Hello, ${name}`);
// }
// say("Dewo");

//------MULTIPLE PARAMETER & ARGUMENT----
// function perkalian(a, b) {
//   const kali = a * b;
//   console.log(`Hasilnya ${kali}`);
// }
// perkalian(2, 9);

//------RETURN STATEMENT----
// let test = function (a, b) {
//   return a * b;
// };
// console.log(test(2, 9));

//------SCOPE FUNCTION----
// let kota = "Bandung";

// function city() {
//   let kota = "Sukabumi";
//   console.log(kota); // scope function
// }
// console.log(kota); // scope non-function

//------BLOCKED SCOPE VARIABEL----
// let tinggi = 8;
// if (tinggi > 5) {
//   let lebar = 7; //Blocked scope kecuali use Var
//   //   console.log(lebar);
// }
// console.log(lebar);

// for (let index = 0; index < 10; index++) {
//   const indexNumber = index; // Blocked Scope kecuali use Var
//   //   console.log(indexNumber);
// }
// console.log(indexNumber);

//------LEXICAL SCOPE----
// function lamarKerja() {
//   const jabatan = "Programmer";

//   function lebihDalam() {
//     function orangDalam() {
//       let kenalan = `Orang dalam bisa memasukkan ${jabatan}`;
//       console.log(kenalan);
//     }

//     orangDalam();
//   }

//   lebihDalam();
// }

//------FUNCTION EXPRESSIONS----
// const hasilPerpangkatan = function (nilai) {
//   return nilai * nilai;
// };

//------FUNCTION As ARGUMENT----
// function duaKali(func) {
//   func();
//   func();
// }

// function lemparDadu() {
//   //function as arguments
//   const hasil = Math.floor(Math.random() * 6) + 1;
//   console.log(hasil);
// }

//------FUNCTION RETURN FUNCTION----
// function hasilFunction() {
//   const rand = Math.random();
//   if (rand > 0.1) {
//     return function () {
//       console.log("Selamat, nilai nya lebih besar");
//     };
//   } else {
//     return function () {
//       console.log("Maaf, Silahkan coba lagi");
//     };
//   }
// }

//------METHOD DEFINE----
// function learn() {  //function biasa
//   console.log("Belajar JavaScript");
//   return "Yuk, Belajar JavaScript";
// }

// const myLearn = {   //object

//   bagi: function (x, y) {   // method
//     return x / y;
//   },
// };

//------KEYWORD THIS----
// const aku = {
//   nama: "intan mn",
//   hobi: "jajan batagor",
//   lainnya: function () {
//     return `Hai, saya ${this.nama}, hobi saya adalah ${this.hobi};`;
//     // this fungsinya utk mendapatkan nilai dari variabel yang dipanggil
//   },
// };

//------TRY AND CATCH----
//Example 1
// try {
//   aku.lainnya;
// } catch {
//   console.log("error");
// }
// // aku.lainnya();
// console.log("ini dijalankan setelah try and catch");

//Example 2
// function hi(msg) {
//   try {
//     console.log(msg.toUpperCase());
//   } catch (error) {
//     console.log(error);
//     console.log("Masukkan Tipe data string");
//   }
// }

//------FOREACH METHOD----
// const nilai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// nilai.forEach(function (el) {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

//------MAP METHOD----
// const nilai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// const nilaiDb = nilai.map(function (num) { //regenerate nilai atau callbacks
// });

//------ARROW FUNCTION----
// const pangkat = (x) => { //arrow function
//   return x * x;
// };

//------ARROW FUNCTION RETURN IMPLISIT----
// const rand = () => Math.floor(Math.random() * 200); //tanpa return

//------SET TIMEOUT & SET INTERVAL----
// console.log("Hallo Dewo");

// setTimeout(() => {
//   console.log("Udah Mandi Belom?");
// }, 5000);
// console.log("Mandi sana, Udah Bau Tau!!!!!");

// const intr = setInterval(() => {
//   console.log(Math.round(Math.random()));
// }, 1000);

//-----------------ARRAY METHOD----------------

//----FILTER----
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const ganjil = angka.filter((n) => {
//   return n % 2 === 1; //hanya memfilter angka ganjil
// });

//----EVERY----
// const score = ["80", "85", "88", "90"];
// const graduate = score.every((score) => score >= 75); //true
//const scoreGraduate = score.every((score) => score >= 85); //false

//----SOME----
// const score = ["80", "85", "88", "90"];
// // const graduate = score.some((score) => score >= 75); //true
// const scoreGraduate = score.some((score) => score >= 85); //true

//----REDUCE----
// const examScore = [80, 85, 88, 90, 70, 88, 91];
// const total = examScore.reduce((hasil, score) => {
//   return hasil + score;
// });

//-----------------THIS IN OBJECT----------------
// const nama = {
//   fullName: "Intan MN",
//   umur: "21",
//   test: function () {
//     console.log(this.fullName, this.umur);
//   },
// };

//----SPREAD OPERATOR----
// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // console.log(Math.max(...data));
// console.log(...data, ...data); //penggabungan

//----MERGE OBJECT SPREAD OPERATOR----
// const nama = {
//   fullName: "Intan MN",
//   umur: "21",
// };
// const gabung = { ...nama, alamat: "Bandung" };
// console.log(gabung);

//----REST PARAMETER----
// const tambahan = (...nums) => {
//   return nums.reduce((total, el) => total + el);
// };
