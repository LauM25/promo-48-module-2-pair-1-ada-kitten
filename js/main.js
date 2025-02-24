"use strict";
//console.log("Web Ada Kitten");
// Añadir elementos al html
// document.querySelector(".js-list");
const kittenImg1 = "https://dev.adalab.es/gato-siames.webp";
const kittenImg2 = "https://dev.adalab.es/sphynx-gato.webp";
const kittenImg3 = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenName1 = "Anastacio";
const kittenName2 = "Fiona";
const kittenName3 = "Cielo";
const kittenDesc1 = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";
const kittenDesc2 = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo";
const kittenDesc3 = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";
const kittenRace1 = "Siamés";
const kittenRace2 = "Sphynx";
const kittenRace3 = "Maine Coon";
const kittenOne = `<li class="card">
    <article>
        <img class="card_img" src=${kittenImg1} alt="siames-cat" />
        <h3 class="card_title">${kittenName1.toUpperCase()}</h3>
        <h4 class="card_race">${kittenRace1}</h4>
        <p class="card_description">
        ${kittenDesc1}
        </p>
    </article>
</li>`;
const kittenTwo = `<li class="card">
                    <img class="card_img" src=${kittenImg2} alt="sphynx-cat" />
                    <h3 class="card_title">${kittenName2.toUpperCase()}</h3>
                    <h4 class="card_race">${kittenRace2}</h4>
                    <p class="card_description">
                    ${kittenDesc2}
                    </p>
                </li>`;
const kittenThree = `<li class="card">
                    <img class="card_img" src=${kittenImg3} alt="maine-coon-cat" />
                    <h3 class="card_title">${kittenName3.toUpperCase()}</h3>
                    <h4 class="card_race">${kittenRace3}</h4>
                    <p class="card_description">
                    ${kittenDesc3}
                    </p>
                </li>`;



/*const kittenOne =  kittenImg1 + kittenName1 + kittenRace1 + kittenDesc1;
console.log(kittenOne)
const kittenTwo = kittenImg2 + kittenName2 + kittenRace2 + kittenDesc2;
const kittenThree = kittenImg3 + kittenName3 + kittenRace3 + kittenDesc3;
kittenOne.classList.add("card");*/



const catList = document.querySelector(".js-list");
const btnCancel = document.querySelector(".js-btn-cancel");

catList.innerHTML = kittenOne + kittenTwo + kittenThree;


const btn = document.querySelector(".js-btn-add");
const newForm = document.querySelector(".js-newForm")

btn.addEventListener("click", () => {
    // console.log("click hecho");
    newForm.classList.remove("collapsed");
})

btnCancel.addEventListener("click", () => {
    // console.log("click cancelled");
    newForm.classList.add("collapsed");
})

// 1- Definir lo que vamos a usar 
// 2- Escuchar la acción click del botón
//- Almacenar el valor a buscar (input description)
//- Si el valor de descripción coincide con la descripción de los gatos



const btnSearch = document.querySelector(".js_button-search");
const description = document.querySelector(".js_in_search_desc");
const catSection = document.querySelector(".js-list");

btnSearch.addEventListener("click", (event) => {
    event.preventDefault(btnSearch);
    const inputDescription = description.value;;
    if (KittenDesc1.includes(inputDescription)) {
        catSection.innerHTML = kittenOne;




    }

});


