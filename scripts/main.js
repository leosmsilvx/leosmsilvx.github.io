function showLoadingProjects() {
  const loadingCircle = document.getElementById("load_projects");
  setTimeout(() => {
    loadingCircle.style.display = "none";
  }, 600);
}

let slideIndex = 0;
function showSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    if (slideIndex - 1 == i) {
      slides[i].style.opacity = 0;
      setTimeout(() => {
        slides[i].style.display = "none";
      }, 600);
    }
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  setTimeout(() => {
    slides[slideIndex - 1].style.display = "block";
  }, 599);
  setTimeout(() => {
    slides[slideIndex - 1].style.opacity = "100%";
  }, 599);

  setTimeout(showSlides, 3000); // Muda a imagem a cada 2 segundos
}

const startYear = 2022;
function setYearOfExperience() {
  const divYearsExperience = document.getElementById("anosExperiencia");
  divYearsExperience.innerHTML = new Date().getFullYear() - startYear;
}

const projectCounter = document.getElementsByClassName("slide").length;
function setPublicProjects() {
  const divCountProjects = document.getElementById("numeroProjetos");
  divCountProjects.innerHTML = projectCounter;
}

const palavras = ["Java", "Café"];
let indicePalavra = 0;
let indiceLetra = 0;
let direcao = "right";
function animarTexto() {
  const textoAnimado = document.getElementById("texto-animado");
  const palavraAtual = palavras[indicePalavra];
  if (direcao === "right") {
    if (indiceLetra < palavraAtual.length) {
      textoAnimado.textContent += palavraAtual.charAt(indiceLetra);
      indiceLetra++;
      setTimeout(animarTexto, 100);
    } else {
      direcao = "left";
      setTimeout(animarTexto, 2000);
    }
  } else {
    if (indiceLetra > 0) {
      textoAnimado.textContent = palavraAtual.slice(0, --indiceLetra);
      setTimeout(animarTexto, 50);
    } else {
      indicePalavra = (indicePalavra + 1) % palavras.length;
      indiceLetra = 0;
      direcao = "right";
      setTimeout(animarTexto, 100);
    }
  }
}

function changeBriefcase() {
  const briefcase = document.getElementById("briefcase_animation");
  if (briefcase.innerHTML == "computer") {
    briefcase.innerHTML = "sync_saved_locally";
  } else {
    briefcase.innerHTML = "computer";
  }
  setTimeout(changeBriefcase, 500);
}

//Initiallize Functions
showLoadingProjects();
showSlides();
setYearOfExperience();
setPublicProjects();
animarTexto();
changeBriefcase();
