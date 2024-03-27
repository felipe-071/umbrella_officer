var button = document.getElementById("bottom-div__advance");
var link = button.parentNode;

button.disabled = true;
button.style.cursor = "default";

const selectTypeOF = () => {
    const optionsOffice = document.querySelectorAll('.ul__space-item')
    optionsOffice.forEach((option, index, arr) => option.addEventListener('click', () => {

        button.disabled = false;
        button.style.cursor = "pointer";
        button.style.backgroundColor = "var(--scale-2-purple)";

        if (index == 0) {
            link.setAttribute('href', '/subcategoria-casa')
        }

        if (index == 1) {
            link.setAttribute('href', '/subcategoria-apartamento')
        }

        if (index == 2) {
            link.setAttribute('href', '/subcategoria-unidade')
        }

        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove('border-select')
        }

        arr[index].classList.add('border-select')

    }))

    // function checked(){  
    //     optionsOffice.forEach(option => option.classList.remove('border-select'));
    //     this.classList.add('border-select');
    // }
}

selectTypeOF();
