$(document).ready(async function () {

    document.querySelectorAll('select').forEach(el => {
        let disabled = new Option('не выбрано', 0, true);
        el.append(disabled);
    })

    let firstSelect = document.querySelector('#country');
    let secondSelect = document.querySelector('#city');
    let thirdSelect = document.querySelector('#quantity');

    firstSelect.onchange = selectCountry;
    secondSelect.onchange = selectCity;

    let response = await fetch('stubs/countries.json');
    let data = await response.json();

    data.forEach((el) => {
        let option = new Option(el.name, el.index, false);
        firstSelect.append(option);
    })

    async function selectCountry(e) {
        secondSelect.innerHTML = '';

        let response = await fetch('stubs/cities.json');
        let data = await response.json();

        if (e.target.value != 0) {
            data[e.target.value].forEach(el => {
                let option = new Option(el.name, el.index, false);
                secondSelect.append(option);
            });
        } else {
            secondSelect.append(new Option('не выбрано', 0, true));
            thirdSelect.innerHTML = '';
            thirdSelect.append(new Option('не выбрано', 0, true))
        }
    }

    async function selectCity(e) {
        thirdSelect.innerHTML = "";

        let response = await fetch('stubs/quantity.json');
        let data = await response.json();

        data[e.target.value].forEach(el => {
            let option = new Option(el.name, false, false);
            thirdSelect.append(option);
        });
    }
});