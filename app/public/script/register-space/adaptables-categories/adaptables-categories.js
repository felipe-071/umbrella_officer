var button = document.getElementById("advanceButton"); //Depois: padronizar os IDs do botão
var link = button.parentNode;

const selectTypeOF = () =>{ //Coloca-se uma função anônima por causa da const
        const optionsOffice = document.querySelectorAll('.space-box');
        optionsOffice.forEach((option, index, arr) => option.addEventListener('click', () =>{
            
            button.disabled = false
            
            if(index == 0){
                link.setAttribute('href', '/subcategoria-casa')
                console.log
            }

            else if(index == 1){
                link.setAttribute('href', '/subcategoria-apartamento')
            }

            else if(index == 2){
                link.setAttribute('href', '/subcategoria-unidade')
            }
        
        for(let i = 0; i < arr.length; i++){
            arr[i].classList.remove('border-select')
        }

        arr[index].classList.add('border-select')
        button.style.background = "var(--scale-2-purple)";     
    }))
        
}

selectTypeOF();