var button = document.getElementById("advance");

const selectTypeOF = () =>{ //Coloca-se uma função anônima por causa da const
        const optionsOffice = document.querySelectorAll('.space-box');
        optionsOffice.forEach((option, index, arr) => option.addEventListener('click', () =>{
            if(index == 0){
                button.setAttribute('href', '/subcategoria-casa')
            }

            else if(index == 1){
                button.setAttribute('href', '/subcategoria-apartamento')
            }

            else if(index == 2){
                button.setAttribute('href', '/subcategoria-unidade')
            }
        
        for(let i = 0; i < arr.length; i++){
            arr[i].classList.remove('border-select')
        }

        arr[index].classList.add('border-select')
        button.firstElementChild.style.background = "var(--scale-2-purple)";     
    }))
        
}

selectTypeOF();