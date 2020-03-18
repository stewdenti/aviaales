const formSearch = document.querySelector('.form-search'),
    inputCitiesFrom = formSearch.querySelector('.input__cities-from'),
    dropdownCitiesFrom = formSearch.querySelector('.dropdown__cities-from'),
    inputCitiesTo = formSearch.querySelector('.input__cities_-to'),
    dropdownCitiesTo = formSearch.querySelector('.dropdown__cities-to'),
    inputDateDepart = formSearch.querySelector('.imput__date-depart')

const obj = {
    key: 'value',

}
const city = ['Москва', 'Санкт-Петербург', 'Ухань', 'Минск', 'Милан',
    'Керчь', 'Мадрид', 'Мельбурн'];

const showCity = (input, list) => {
    list.textContent = '';

    if (input.value !== '') {
        const filterCity = city.filter((item) => {
            const fixItem = item.toLowerCase();
            return fixItem.includes(input.value.toLowerCase());

        });
        filterCity.forEach((item) => {
            const li = document.createElement('li');
            li.classList.add('dropdown__city');
            li.textContent = item;
            list.append(li)
        });
    }
};
// кликнул - изменение
inputCitiesFrom.addEventListener('input', () => {
    showCity(inputCitiesFrom, dropdownCitiesFrom)
});

dropdownCitiesFrom.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName.toLowerCase() === 'li') {
        inputCitiesFrom.value = target.textContent;
        dropdownCitiesFrom.textContent = '';
        console.log(target.textContent);
    }
})


// const get = (name) => {
//     console.log('вызов get: ' + name);
// };

// get('Тирекс');





