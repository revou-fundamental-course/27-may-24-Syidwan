// ini javascript

// 

// menganti nama
function replaceName() {
   let name = prompt("siapa kamu", "")
   document.getElementById("name").innerHTML = name;
}

replaceName();


// script untuk menampilkan pesan
function displayOutput() {
  
  const currentTime = new Date().toLocaleString();

  const nama = document.getElementById('nama').value;
  const tanggal = document.getElementById('tanggal').value;
  const pesan = document.getElementById('pesan').value;
  const genderElements = document.getElementsByName('gender');

  if (nama === '' || tanggal === '' || pesan === '') {
    alert('Semua input harus diisi.');
    return;
  }

  let gender = '';
  for (const element of genderElements) {
    if (element.checked) {
      gender = element.value;
      break;
    }
  }

  if (gender === '') {
    alert('Silakan pilih jenis kelamin.');
    return;
  }

  const outputText = `
    Current time: ${currentTime}
    
    Nama: ${nama}
    Tanggal Lahir: ${tanggal}
    Kelamin: ${gender}
    Pesan: ${pesan}`;

  document.getElementById('output-text').textContent = outputText;
}

// slideshow
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) { 
  showDivs(slideIndex += n)
}

function showDivs(n) { 
  let i;
  let x = document.getElementsByClassName("mySlides");
  console.log(x.length);
  if (n > x.length) slideIndex = 1;
  else if (n < 1)  slideIndex = x.length ;
  for (i = 0; i < x.length; i++) { 
    x[i].style.display = "none"
  }
  x[slideIndex - 1].style.display = "block";
}
setInterval(() => { 
  plusDivs(1);
}, 4000)


const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
    console.log("toTop");
  } else {
    toTop.classList.remove("active");
    console.log("toTop");
  }

});
