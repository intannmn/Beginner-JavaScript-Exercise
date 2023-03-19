//----GET ELEMENTS-----
// const a = document.getElementsByClassName("judul")[0];
// console.log(a);
// a.innerText = "Document Object Model";
// a.hidden = true;
// a.setAttribute("class", "judul1");
// a.setAttribute("style", "font-family: times-new-roman, serif");

// const b = document.getElementById("isi");
// b.innerText = "I Learn From Code Politan";
// b.setAttribute("class", "isi");

// const c = document.getElementById("text");
// c.innerText = "Halo Saya Sedang belajar DOM";
// c.setAttribute("style", "color: green;");

//----QUERY SELECTOR----
// const a = document.querySelectorAll("h1 a");
// console.dir(a);
// a.forEach((aNew) => {
//   aNew.innerText = "Halo Saya Sedang belajar DOM";
// });

// const b = document.querySelector("p[id='text']");
// b.innerText = "Yuk Belajar DOM";

//---Innerthtml, Innertext Dan Textcontent----
// const a = document.querySelector("p");
// a.innerText = "Hai Saya Intan";
// a.innerHTML = "Hai Saya <b>Intan</b>"; //menyisipkan fungsi
// a.textContent = "Hai Saya Intan";

//----ATRIBUTE----
// const a = document.querySelector("#text");
// a.innerHTML = "ini isinya bebas";

//----STYLING----
// const b = document.querySelector("#text");
// b.setAttribute("style", "color : purple");

// const b = document.querySelectorAll("#text");
// for (let ab of b) {
//   ab.style.color = "rgb(0, 108, 134)";
// }

// const p = document.querySelector("p");
// p.setAttribute(
//   "style",
//   "color: red; border: 10px solid black; padding: 5px 5px;"
// );

//----CLASS LIST----
// const h1 = document.querySelector("h1");
// console.log(h1.classList);

//----SIBLING----
// const h1 = document.querySelector("h1");
// h1.setAttribute("class", "judul");
// console.log(h1.nextSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.previousElementSibling);

//----CHILD----
// const h1 = document.querySelector("h1");
// console.log(h1.children);
// h1.removeChild(h1.firstChild.firstChild.firstChild);
// h1.remove();

//----PARENT---
// const h1 = document.querySelector("h1 a");
// console.log(h1.parentElement);

//----REMOVE----
// const h1 = document.querySelector("h1 a");
// console.log(h1.remove());

//----APPEND----
// const div = document.querySelector("div");
// const img = document.createElement("img");
// img.src = "https://upload.wikimedia.org/wikipedia/id/3/36/Naruto_Uzumaki.png";
// div.append(img);

// const img2 = document.createElement("img");
// img2.src = "https://cdn.myanimelist.net/images/characters/7/443690.jpg";
// div.appendChild(img2);

//----Addeventlistener Generate Color----
// const button = document.querySelector("button");
// const h1 = document.querySelector("h1");
// button.addEventListener("click", () => {
//   const newColor = generateRandomColor();
//   document.body.style.backgroundColor = newColor;
//   h1.innerText = newColor;
//   console.log(newColor);
// });

// generateRandomColor = () => {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);

//   return `rgb(${r},${g},${b})`;
// };

//---THIS----
// generateRandomColor = () => {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);

//   return `rgb(${r},${g},${b})`;
// };

// const buttons = document.querySelectorAll("button");
// console.dir(buttons);
// buttons.forEach((button) => {
//   button.addEventListener("click", changeColor);
//   setInterval(() => {
//     changeColor();
//   }, 1000);
//   function changeColor() {
//     button.style.backgroundColor = generateRandomColor();
//     button.style.color = generateRandomColor();
//     button.style.borderColor = generateRandomColor();
//   }
// });
