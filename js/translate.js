const toTxt = document.querySelector('#toTxt');


export const translate = (text, translateFrom, translateTo) => {
    // console.log(text, translateFrom, translateTo);
    toTxt.setAttribute('placeholder', 'Translating...')
    const api = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    fetch(api)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        // console.log(data.matches[1].translation);
        console.log(data.matches[1].match)
        if(text === ''){
            toTxt.value = '';
            toTxt.setAttribute('placeholder', 'Translation')
        }
        else{
            toTxt.value = `${data.matches[1].translation}, \n ${data.matches[2].translation}`;
        }

    })
    .catch(err => console.log(err.message));
}


export const swap = () => {
    [fromTxt.value, toTxt.value] = [toTxt.value, fromTxt.value];
}

