// 1 Сделать свой стиль и создать проект
// 2 Перебрать массив котов и отобразить их на странице

const btnOpenPopupForm = document.querySelector('#add');
const formAddCat = document.querySelector('#popup-form-cat');
const sectionCard = document.querySelector('.cards');

const popupAddCat = new Popup("popup-add-cats");
popupAddCat.setEventListener();

function renderCat(cat) {
    const catCard = new Card(cat, '#card-template')
    const catCardElement = catCard.getElement()

    sectionCard.append(catCardElement);
}

for (cat of cats) {
    renderCat(cat)
}

function handleFormAddCat(e) {
    e.preventDefault();

    const newCat = {
        id: e.target.id.value,
        name: e.target.name.value,
        img_link: e.target.img_link.value,
        age: e.target.age.value,
        rate: e.target.rate.value,
        description: e.target.description.value,
        favourite: e.target.favourite.checked,
    }
    cats.push(newCat)
    renderCat(newCat);

    popupAddCat.close();
}

btnOpenPopupForm.addEventListener('click', () => popupAddCat.open());
formAddCat.addEventListener('submit', handleFormAddCat);