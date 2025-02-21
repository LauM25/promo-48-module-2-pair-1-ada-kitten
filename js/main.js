"use strict";
console.log("Web Ada Kitten");
// Añadir elementos al html
document.querySelector(".js-list");
const kittenOne = `<li class="card">
    <article>
        <img class="card_img" src="https://dev.adalab.es/gato-siames.webp" alt="siames-cat" />
        <h3 class="card_title">Anastacio</h3>
        <h4 class="card_race">Siamés</h4>
        <p class="card_description">
            Porte elegante, su patrón de color tan característico y sus ojos
            de un azul intenso, pero su historia se remonta a Asía al menos
            hace 500 años, donde tuvo su origen muy posiblemente.
        </p>
    </article>
</li>`;
const kittenTwo = `<li class="card">
                    <img class="card_img" src="https://dev.adalab.es/sphynx-gato.webp" alt="sphynx-cat" />
                    <h3 class="card_title">Fiona</h3>
                    <h4 class="card_race">Sphynx</h4>
                    <p class="card_description">
                        Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
                        hasta con pinta de alienígena han llegado a definir a esta raza
                        gatuna que se caracteriza por la «ausencia» de pelo.
                    </p>
                </li>`;
const kittenThree = `<li class="card">
                    <img class="card_img" src="https://dev.adalab.es/maine-coon-cat.webp" alt="maine-coon-cat" />
                    <h3 class="card_title">Cielo</h3>
                    <h4 class="card_race">Maine Coon</h4>
                    <p class="card_description">
                        Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
                        bella mirada se ha convertido en una de sus señas de identidad.
                        Sus ojos son grandes y las orejas resultan largas y en punta.
                    </p>
                </li>`;
const catList = document.querySelector(".js-list");
const btnCancel = document.querySelector(".js-btn-cancel");

catList.innerHTML = kittenOne + kittenTwo + kittenThree;


const btn = document.querySelector(".js-btn-add");
const newForm = document.querySelector(".js-newForm")

btn.addEventListener ("click", () => {
    // console.log("click hecho");
    newForm.classList.remove("collapsed");
})

btnCancel.addEventListener ("click", () => {
    // console.log("click cancelled");
    newForm.classList.add("collapsed");
})

// 1- Definir lo que vamos a usar 
// 2- Escuchar la acción click del botón
      //- Almacenar el valor a buscar (input description)
      //- Si el valor de descripción coincide con la descripción de los gatos



const btnSearch = document.querySelector(".js_button-search");
const description = document.querySelector(".js_in_search_desc");
const KitterDesc1 = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";
const KitterDesc2 = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo";
const KitterDesc3 = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";
const catSection = document.querySelector(".js-list");

btnSearch.addEventListener("click", (event) => {
    event.preventDefault(btnSearch);
    const inputDescription = description.value; ;
    if (KitterDesc1.includes(inputDescription)) {
        catSection.innerHTML = kittenOne;




    }
    
  });


