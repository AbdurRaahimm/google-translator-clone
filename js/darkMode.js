const btn = document.querySelector('.darkMode button');


export const darkMode = () =>{
   btn.addEventListener('click', ()=>{
        document.body.classList.toggle('dark');
        if(document.body.classList.contains('dark')){
            btn.innerHTML = '<i class="bi bi-sun-fill"></i> Light ';
        }
        else{
            btn.innerHTML = '<i class="bi bi-moon-fill"></i> Night';
        }
   })
}
