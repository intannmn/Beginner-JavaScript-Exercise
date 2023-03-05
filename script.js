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

//------PERULANGAN FOR------
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
