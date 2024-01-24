let array = [];

//gjør så man kan trykke på knappen
document.getElementById('add').addEventListener('click', function() {
    // Henter verdiene brukeren inputta
    const navn = document.getElementById('navn').value;
    const info = document.getElementById('info').value;
    const bursdag = document.getElementById('bursdag').value;
    const category = document.getElementById('category').value;

    // Fjerner det som står i input-elementene
    document.getElementById('navn').value = '';
    document.getElementById('info').value = '';
    document.getElementById('bursdag').value = '';
    document.getElementById('category').value = '';

    //legger info i riktig boks
    sortByCategory(category, navn, bursdag, info);

    let objekt = {
        name: navn,
        info: info,
        bursdag: bursdag,
        category: category
    };
   
    array.push(objekt);
});

// funksjon som sorterer etter kategori, legger ting i riktig boks
function sortByCategory(category, navn, bursdag, info) {
    let putInBox;

    if (category === 'Artist') {
        putInBox = document.querySelector('.box1 .listItem');
    } else if (category === 'Skuespiller') {
        putInBox = document.querySelector('.box2 .listItem');
    } else if (category === 'President') {
        putInBox = document.querySelector('.box3 .listItem');
    } 

// Lager nytt listItem-element
let newListItem = document.createElement('li');
newListItem.classname = 'listItem';

// Gjør så listitem skrives på ulike linjer
let nameParagraph = document.createElement('p');
nameParagraph.className = 'listTitle';
nameParagraph.textContent = navn;

let dateParagraph = document.createElement('p');
dateParagraph.className = 'listDate';
dateParagraph.textContent = bursdag;

let categoryParagraph = document.createElement('p');
categoryParagraph.className = 'listDate';
categoryParagraph.textContent = category;

let infoParagraph = document.createElement('p');
infoParagraph.className = 'listInfo';
infoParagraph.textContent = info;

// Legger til paragrafene i listItem
newListItem.appendChild(nameParagraph);
newListItem.appendChild(dateParagraph);
newListItem.appendChild(categoryParagraph);
newListItem.appendChild(infoParagraph);

// Legger riktig listItem i riktig box
putInBox.appendChild(newListItem);

// Legger til fjerne-knapp
let removeButton = document.createElement('button');
removeButton.textContent = 'Fjern';
removeButton.addEventListener('click', function() {
    putInBox.removeChild(newListItem);
    });
    newListItem.appendChild(removeButton);
    };

//logger i kronologisk rekkefølge
function sortByDate() {
    array.sort(function (a, b) {
        let dateA = new Date(a.bursdag);
        let dateB = new Date(b.bursdag);
        return dateA - dateB;
    });
    
console.log(array);
};
    
document.getElementById('sort').addEventListener('click', sortByDate);

console.log(array);
        
        
    

    

    




