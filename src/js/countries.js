import api from '../js/fetchCountries.js';
import countriesTemplate from '../templates/countriesTemplates.hbs';
import listCountries from '../templates/listCountries.hbs';
import { showError,notFound} from '../js/errors.js'
const debounce = require('lodash.debounce');

const refs = {
    countries: document.querySelector('.countries'),
    input: document.querySelector('.input'),
}

refs.input.addEventListener('input', debounce(inputHeandler, 500));

function inputHeandler(e) {
    clear();
    const inputValue = e.target.value;
    api.fetchCountries(inputValue)
        .then(data => {
            if (data.length > 10) {
                showError();
            } else if (data.status === 404) {
                notFound();
             }else if (data.length === 1) {
                renderCountriesSelected(data)
            } else if ( data.length <= 10) {
                renderCountryList(data)
            }  
        })
}
function renderCountriesSelected(data) {
     refs.countries.innerHTML = countriesTemplate(data);    
}
function renderCountryList(data) {
    refs.countries.innerHTML = listCountries(data);
}
function clear () {
    refs.countries.innerHTML = '';        
}
