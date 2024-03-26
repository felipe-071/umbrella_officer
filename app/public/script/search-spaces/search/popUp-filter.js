/*Pop up - Filtro (mobile)*/
const openPopUp_filter = () => {
    const buttonFilter = document.querySelectorAll(".filter-mobile");
    const containerPopUp_filter = document.getElementById("container_popUp-filter"); 

    buttonFilter.forEach(element=> {
        element.addEventListener('click', () => {
        containerPopUp_filter.style.display = 'flex'
    })
    })


    closePopUp_filter(containerPopUp_filter)
    
}

function closePopUp_filter(containerPopUp_filter) {
    containerPopUp_filter.addEventListener('click', f => { 

        if (f.target.id == 'close-filter' || f.target == containerPopUp_filter) {
            containerPopUp_filter.style.display = 'none'
        }
    })
}

openPopUp_filter()


