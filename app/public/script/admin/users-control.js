const openPopUser = () => {
    const buttonMore_info = document.querySelectorAll(".more-informations");
    const container_popUp_user = document.getElementById("container_popUp-user");
    console.log(buttonMore_info);
    console.log(container_popUp_user);

    buttonMore_info.forEach(element=> {
        element.addEventListener('click', () => {
        container_popUp_user.style.display = 'flex'
    })
    })


    closePopUser(container_popUp_user)
    
}

function closePopUser(container_popUp_user) {
    container_popUp_user.addEventListener('click', u => {


        if (u.target.id == 'close_pop-user' || u.target.id == 'container_popUp-user') {
            container_popUp_user.style.display = 'none'
        }
    })
}

openPopUser()