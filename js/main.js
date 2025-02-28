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

const catList = document.querySelector(".js-list");

const kittenData_1 = {
    image: 'https://dev.adalab.es/gato-siames.webp', 
    name: 'Anastacio',
    desc: 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
    race: 'Siamés',
};

const kittenData_2 = {
    image: 'https://dev.adalab.es/sphynx-gato.webp', 
    name: 'Fiona',
    desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo',
    race: 'Sphynx',
};

const kittenData_3 = {
    image: 'https://dev.adalab.es/maine-coon-cat.webp', 
    name: 'Cielo',
    desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
    race: 'Maine Coon',
};

const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];

function renderKitten(patata) {
    return `<li class="card">
    <article>
        <img class="card_img" src=${patata.image} alt="siames-cat" />
        <h3 class="card_title">${patata.name.toUpperCase()}</h3>
        <h4 class="card_race">${patata.race}</h4>
        <p class="card_description">
        ${patata.desc}
        </p>
    </article>
</li>`;
}



// Esto sería otra manera de poner la card de los gatitos
// renderKitten(kittenImg1, kittenName1, kittenRace1, kittenDesc1);
// const kittenOne = renderKitten(kittenImg1, kittenName1, kittenRace1, kittenDesc1);
catList.innerHTML = renderKitten(kittenDataList[0]) + renderKitten(kittenDataList[1])+ renderKitten(kittenDataList[2]);






/*const kittenOne =  kittenImg1 + kittenName1 + kittenRace1 + kittenDesc1;
console.log(kittenOne)
const kittenTwo = kittenImg2 + kittenName2 + kittenRace2 + kittenDesc2;
const kittenThree = kittenImg3 + kittenName3 + kittenRace3 + kittenDesc3;
kittenOne.classList.add("card");*/




const btnCancel = document.querySelector(".js-btn-cancel");




const btn = document.querySelector(".js-btn-add");
const newForm = document.querySelector(".js-newForm");

// function showNewCatForm() {
//     newForm.classList.remove("collapsed");
// }

// function hideNewCatFrom() {
//     newForm.classList.add("collapsed");
// }

function handleClickNewCatForm(event) {
    if (newForm.classList.contains("collapsed")) {
        newForm.classList.remove("collapsed");
    } else {
        newForm.classList.add("collapsed")
    }
}

btn.addEventListener("click", handleClickNewCatForm);

btnCancel.addEventListener("click", handleClickNewCatForm);

// 1- Definir lo que vamos a usar 
// 2- Escuchar la acción click del botón
//- Almacenar el valor a buscar (input description)
//- Si el valor de descripción coincide con la descripción de los gatos



const btnSearch = document.querySelector(".js_button-search");
const description = document.querySelector(".js_in_search_desc");
const catSection = document.querySelector(".js-list");

/*btnSearch.addEventListener("click", (event) => {
    event.preventDefault(btnSearch);
    const inputDescription = description.value;;
    if (kittenDesc1.includes(inputDescription)) {
        catSection.innerHTML = kittenOne;
    }
});*/


//Revisar!
const filterKitten = (event) => {
    const inputDescription = description.value;
    event.preventDefault();
    catSection.innerHTML = "";
    if (kittenDesc1.includes(inputDescription)) {
        catSection.innerHTML += kittenOne;
    }
    if (kittenDesc2.includes(inputDescription)) {
        catSection.innerHTML += kittenTwo;
    }
    if (kittenDesc3.includes(inputDescription)) {
        catSection.innerHTML += kittenThree;
    }
};

btnSearch.addEventListener('click', filterKitten);
