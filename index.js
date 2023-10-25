let copyBtn = document.querySelector(".fa");
let brush = document.querySelector(".fa-brush");
let input = document.getElementById("input");
// generate password function
function genHex(length = 6) {
  const characters = "0123456789abcdef";
  let hexCode = "";
  for (let i = 0; i < length; i++) {
    let randomValue = characters[Math.floor(Math.random() * characters.length)];
    hexCode += randomValue;
  }
  input.value = `#${hexCode}`;
  document.body.style.backgroundColor = `${input.value}`;
  brush.style.color = `${input.value}`;
  copyBtn.classList.replace("fa-check", "fa-clone");
  copyBtn.classList.replace("green", "fa-clone");
  copyBtn.innerText = "";
  copyBtn.style.fontFamily = "";
}
// copy password function
async function copyHex() {
  navigator.clipboard.writeText(input.value);
  copyBtn.classList.replace("fa-clone", "fa-check");
  await new Promise((test) => setTimeout(test, 1000));
  copyBtn.innerText = "Copied";
  copyBtn.classList.replace("fa-check", "green");
  copyBtn.style.fontFamily = "Tahoma";
}
