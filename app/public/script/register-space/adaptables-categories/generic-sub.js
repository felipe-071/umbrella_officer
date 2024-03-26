var button = document.getElementById("advance");

const selectTypeOF = () =>{ //Coloca-se uma função anônima por causa da const
        const optionsOffice = document.querySelectorAll('.space-box');
        optionsOffice.forEach((option, index, arr) => option.addEventListener('click', () =>{
                    
        for(let i = 0; i < arr.length; i++){
            arr[i].classList.remove('border-select')
        }

        arr[index].classList.add('border-select')
        button.firstElementChild.style.background = "var(--scale-2-purple)";     
    }))
        
}

selectTypeOF();