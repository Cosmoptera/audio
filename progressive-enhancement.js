function pickOption (array, el) {
    el.innerHTML = array[Math.floor(Math.random()*array.length)];
}

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    randomize();
  });

function randomize(){
    console.log("Hey Now")
    pickOption(["Analog","Digital","Vintage","Melodic","Harmonic","Textural","Artificial","Human","Synthetic"], document.getElementById("analog"));
    pickOption(["Analog","Digital","Modern","Melodic","Harmonic","Physical","Artificial","Human","Manufactured"], document.getElementById("digital"));
};
