import {languageCodes} from './js/lan.js';
import {darkMode} from "./js/darkMode.js";
import {voiceCopy} from "./js/voiceCopy.js";
import { translate, swap} from './js/translate.js'

darkMode();


const languageSelect = document.querySelectorAll('.lan-selected select'),
langSwap = document.querySelector('.lan-swap i'),
fromTxt = document.querySelector('#fromTxt');





langSwap.addEventListener('click', ()=>{
    [languageSelect[0].value, languageSelect[1].value] = [languageSelect[1].value, languageSelect[0].value];
    swap()
});





languageSelect.forEach((select, id) => {
    for (const [key, value] of Object.entries(languageCodes)) {
        let selected;
        if(id==0){
            selected = key == 'en-GB' ? 'selected' : '';
        }
        else{
            selected = key == 'bn-IN' ? 'selected' : '';
        }
        let option = `<option value="${key}" ${selected}> ${value} </option>`;
        select.insertAdjacentHTML('beforeend', option);
    }
     
}
);
// console.log(languageSelect[0].value, languageSelect[1].value);

fromTxt.addEventListener('input', ()=>{
    const text = fromTxt.value;
    const translateFrom = languageSelect[0].value;
    const translateTo = languageSelect[1].value;
    translate(text, translateFrom, translateTo);
    const closeFromTxt = document.querySelector('.txtTo > i');
    closeFromTxt.removeAttribute('hidden');
    // if no value then set attribute 
    if(text == ''){
        closeFromTxt.setAttribute('hidden', '');
    }
    closeFromTxt.addEventListener('click', ()=>{
        fromTxt.value = '';
        translate('', translateFrom, translateTo);
        closeFromTxt.setAttribute('hidden', '');
    })

    // set url params 
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('text', text);
    urlParams.set('from', translateFrom);
    urlParams.set('to', translateTo);
    window.history.replaceState({}, '', `${location.pathname}?${urlParams}`);

    
})

voiceCopy(languageSelect[0].value, languageSelect[1].value);
