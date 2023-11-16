const icons = document.querySelectorAll('.icon i');

export const voiceCopy = (translateFrom, translateTo) =>{
    console.log(translateFrom, translateTo);
    icons.forEach((icon)=>{
        icon.addEventListener('click', ({target})=>{
            // console.log(target.classList.contains('copyFrom'));
            if(target.classList.contains('bi-copy')){
                if(target.classList.contains('copyFrom')){
                    navigator.clipboard.writeText(fromTxt.value);

                }
                else{
                    navigator.clipboard.writeText(toTxt.value);
                    console.log(`click copy`)
                }
                setTimeout(()=>{
                    icon.classList.remove('bi-copy');
                    icon.classList.add('bi-check');
                }, 1000);
            }
            else{
                let utterance;
                if(target.classList.contains('copyFrom')){
                    utterance = new SpeechSynthesisUtterance(fromTxt.value);
                    utterance.lang = translateFrom;
                    // console.log(translateFrom)
                }
                else{
                    utterance = new SpeechSynthesisUtterance(toTxt.value);
                    utterance.lang = translateTo;
                    // console.log(translateTo)
                }
                speechSynthesis.speak(utterance);
            }
        })
    })
}