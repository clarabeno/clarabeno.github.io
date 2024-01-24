// Array:
let list = [
    { name: "Cornflakes", price: 23.50, category: "mat" },
    { name: "Knekkebrød", price: 15.90, category: "mat" },
    { name: "Eplejuice", price: 30.00, category: "mat" },
    { name: "Yoghurt", price: 12.50, category: "mat" },
    { name: "Gulrot", price: 2.50, category: "mat" },
    { name: "Lego sett", price: 250.00, category: "leker" },
    { name: "Fotball", price: 120.00, category: "leker" },
    { name: "Brettspill", price: 299.00, category: "leker" },
    { name: "Dukke", price: 150.00, category: "leker" },
    { name: "Puslespill", price: 100.00, category: "leker" },
    { name: "Toalettpapir", price: 40.00, category: "huskeliste" },
    { name: "Tannkrem", price: 35.00, category: "huskeliste" },
    { name: "Vaskemiddel", price: 89.00, category: "huskeliste" },
    { name: "Batterier", price: 45.00, category: "huskeliste" },
    { name: "Glødepærer", price: 60.00, category: "huskeliste" }
];


// Inputs:
const inputNameEl = document.getElementById("name");
const inputPriceEl = document.getElementById("price");
const inputCategoryEl = document.getElementById("category");
// Containers:
const containerEl = document.getElementById("container");
// Buttons:
const addToListEl = document.getElementById("add")
const sortByNameEl = document.getElementById("sortName");
const sortByPriceEl = document.getElementById("sortPrice");
const sortByCategoryEl = document.getElementById("sortCategory");

// Oppgave 4
sortByPriceEl.addEventListener("click",sortByPrice);


// Oppgave 2
showList(); // Vi vil kalle funksjonen umiddelbart for at det vises på skjermen.
function showList(){
    // Fjerner alt inni containeren.
    containerEl.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        // Henter objektet:
        let o = list[i];
       
        // For hvert objekt o i list: lag en div, og fyll den med info
        let divEl = document.createElement("div");
        divEl.classList = "eksempelklasse"; // Her kan dere endre klassen til div'en

        // Lager et p-element, som vi kan legge info i, og etterpå legger vi p-elementet inn i div'en.
        let pEl = document.createElement("p");
        pEl.innerHTML = o.name + ":  " + o.price + " kr, kategori: " + o.category;

        // Lager en knapp vi kan bruke til å slette elementet.
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "X";
        deleteBtn.id = i;   // Bruker id'en til å identifisere hvilken knapp det trykkes på!
        deleteBtn.addEventListener("click", removeFromList);   // Viktig å gjøre at knappen vi lagde faktisk kaller funksjonen.

        // Her legger vi p-elementet og knappen inn i div'en
        divEl.appendChild(pEl);
        divEl.appendChild(deleteBtn);

        // Til slutt skal vi legge div'en inn i container elementet vårt.
        containerEl.appendChild(divEl);
    }
}

// Oppgave 3
function addToList(){
    let n = inputNameEl.value;
    let p = Number(inputPriceEl.value);
    let c = inputCategoryEl.value;

    console.log(c)
    // 1. Lag et objekt med variablene over.
    // 2. Legg til objektet i listen
    // 3. Vis Arrayet på nytt.
}

// Oppgave 4
function sortByPrice(){
    list.sort(comparePrice);
    showArray();
}
function comparePrice(a,b){
    return a.price - b.price;
}

// Lag en sortByName funksjon
// Lag en sortByCategory funksjon
// Dere kan se på 3F-Objekter i arrayer for hint.


// Oppgave 5
function removeFromList(e){
    let id = e.target.id;
    console.log("Du prøver å fjerne " + list[id].name);

    // 1. fjern loggingen over.
    // 2. fjern det relevantet elementet fra list
    // 3. tegn lista på nytt.
}