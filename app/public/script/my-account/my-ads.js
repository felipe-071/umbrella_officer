function ads() {
    const actives_space = document.getElementById("actives_space");
    const inactives_space = document.getElementById("inactives_space");
    const optionsNavigation = document.querySelectorAll('.options-navigation')

    optionsNavigation.forEach(option=>{
        option.addEventListener('click',optionChecked)
    })

    function optionChecked(){
        if(this == optionsNavigation[0]){
            optionsNavigation[1].classList.remove('option-checked')
            this.classList.add('option-checked')
            actives_space.style.display = "block";
            inactives_space.style.display = "none";
            return
        }

        optionsNavigation[0].classList.remove('option-checked')
        this.classList.add('option-checked')
        actives_space.style.display = "none";
        inactives_space.style.display = "block";

    }
}


ads()

const openPopDelete = () => {
    const iconDelete = document.querySelectorAll(".delete");
    const container_popUp_delete = document.getElementById("container_popUp_delete");

    console.log({iconDelete})

    iconDelete.forEach(element=> {
        element.addEventListener('click', () => {
        container_popUp_delete.style.display = 'flex'
    })
    })


    closePopDelete(container_popUp_delete)
    
}

function closePopDelete(container_popUp_delete) {
    container_popUp_delete.addEventListener('click', e => {

        console.log(e.target)

        if (e.target.id == 'close_pop' || e.target == container_popUp_delete || e.target.id == 'no') {
            container_popUp_delete.style.display = 'none'
        }
    })
}

openPopDelete()

