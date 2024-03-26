/*Pop-up - Visualizar fotos*/
const openPopUp_seePictures = () => {
    const buttonSee = document.querySelectorAll(".viewPhotos");
    console.log(buttonSee)
    const containerPopUp_seePictures = document.getElementById("container_popUp-seePictures"); 

    buttonSee.forEach(element=> {
        element.addEventListener('click', () => {
        containerPopUp_seePictures.style.display = 'flex'
    })
    })


    closePopUp_seePictures(containerPopUp_seePictures)
    
}

function closePopUp_seePictures(containerPopUp_seePictures) {
    containerPopUp_seePictures.addEventListener('click',  p => { 

        if (p.target.id == 'seePictures-close' || p.target == containerPopUp_seePictures) {
            containerPopUp_seePictures.style.display = 'none'
        }
    })
}

openPopUp_seePictures()

/*Pop-up - Resumo da reserva*/
const openPopUp_bookingSummary = () => {
    const buttonReserve = document.querySelectorAll(".reserve");
    const containerPopUp_bookingSummary = document.getElementById("container_popUp-bookingSummary"); 

    buttonReserve.forEach(element=> {
        element.addEventListener('click', () => {
        containerPopUp_bookingSummary.style.display = 'flex'
    })
    })


    closePopUp_bookingSummary(containerPopUp_bookingSummary)
    
}

function closePopUp_bookingSummary(containerPopUp_bookingSummary) {
    containerPopUp_bookingSummary.addEventListener('click',  b => { 

        if (b.target.id == 'bookingSummary-close' || b.target == containerPopUp_bookingSummary) {
            containerPopUp_bookingSummary.style.display = 'none'
        }
    })
}

openPopUp_bookingSummary()
