// const openInputsearchCoworkingSpaces = ()=> {

//     const header = document.querySelector('#header')
//     const search = document.querySelector('.container_search_input')
//     const search_txt = document.querySelector('#search_txt')
//     const container_informations_find_coworking = document.querySelector('#container_informations_find_coworking')
//     const box_black = document.querySelector('#box_black')
//     const type_office = document.querySelector('#type_office')

//     if(search !== null){
//         search.addEventListener('click',(e)=>{
//             header.classList.add('header_expanded')
//             type_office.style.display = 'flex'
//             search_txt.style.display = 'none'
//             search.classList.add("expanded")
//             container_informations_find_coworking.style.display = 'flex'
//             box_black.style.display = 'block'
//     })
//     closeInputsearchCoworkingSpaces(box_black,header,search,search_txt,container_informations_find_coworking)
// }
//     select_type_office()
// }

// const select_type_office = () => {

//     const optionsOffice = document.querySelectorAll('.option_office')
//     optionsOffice.forEach(option=> option.addEventListener('click',checked))

//     function checked(){  
//         optionsOffice.forEach(option => option.classList.remove('checked'))
//         this.classList.add('checked')
//     }
// }

// const closeInputsearchCoworkingSpaces = (box_black,header,search,search_txt,container_informations_find_coworking)=> {

//     box_black.addEventListener('click',()=>{
//         header.classList.remove('header_expanded')
//         type_office.style.display = 'none'
//         box_black.style.display = 'none'
//         search.classList.remove("expanded")
//         search_txt.style.display = 'block'
//         container_informations_find_coworking.style.display = 'none'
//     })

//     window.addEventListener('scroll',()=>{
//         if(window.scrollY > 0){
//             header.classList.remove('header_expanded')
//             type_office.style.display = 'none'
//             box_black.style.display = 'none'
//             search.classList.remove("expanded")
//             search_txt.style.display = 'block'
//             container_informations_find_coworking.style.display = 'none'
//             return
//         }
//         })
// }

// const menuHamburguer  = () =>{
//     const menu_sign_in_up = document.querySelector('#menu_sign-in-up')
//     const menu_open = document.querySelector('.menu_open')

//     window.addEventListener('click',(e)=>{

//         if(menu_sign_in_up.contains(e.target) == true){
//             menu_open.classList.toggle('menu_open_checked')
//             return
//         }

//         if(menu_open.contains(e.target) == false || menu_open.contains(e.target) == true && e.target.tagName == 'LI' || menu_open.contains(e.target) == true && e.target.tagName == 'IMG'){
//            return menu_open.classList.remove('menu_open_checked')
//         }
//     })
    
//     popUp_login_signUp()
// }

// const popUp_login_signUp = () => {

//     const optionsMenu = document.querySelectorAll('.popUp-login-signUp')
//     const containerPopUp = document.querySelector('#container_popUp_login-signUp')
//     const AllPopUp = document.querySelectorAll(".popUp")
//     optionsMenu.forEach(option=>option.addEventListener('click',openPopUp))

//     function openPopUp (){
//         containerPopUp.style.display = 'flex'
//         if(this == optionsMenu[0] || this == optionsMenu[2]){
//             AllPopUp[0].classList.add('popUpChecked')
//         }

//         if(this == optionsMenu[1] || this == optionsMenu[3]){
//             AllPopUp[1].classList.add('popUpChecked')
//         }

//         closePopUP()
//     }

//     function closePopUP() {
//        containerPopUp.addEventListener('click',e=>{
//         console.log(e.target)
//         if(e.target.classList == 'close_popup' || e.target == containerPopUp){
//         containerPopUp.style.display = 'none'
//         AllPopUp.forEach(popUp => popUp.classList.remove('popUpChecked'))
//         }

//        })
//     }

// }

// openInputsearchCoworkingSpaces()
// menuHamburguer ()


// const openPop_profilePicture = () => {
//     const pictureProfile = document.querySelectorAll(".pictureProfile");
//     const container_popUp_profilePicture = document.getElementById("container_popUp_profilePicture");

//     console.log({pictureProfile})

//     pictureProfile.forEach(element=> {
//         element.addEventListener('click', () => {
//         container_popUp_profilePicture.style.display = 'flex'
//     })
//     })


//     closePop_profilePicture(container_popUp_profilePicture)
    
// }

// function closePop_profilePicture(container_popUp_profilePicture) {
//     container_popUp_profilePicture.addEventListener('click', p => {

//         console.log(p.target)

//         if (p.target.id == 'close' || e.target == container_popUp_profilePicture) {
//             container_popUp_profilePicture.style.display = 'none'
//         }
//     })
// }

// openPop_profilePicture()

// const changeBottom_bar = (item) => {
//     const buttonInactive = document.querySelectorAll('.inactive')
//     const buttonActive = document.querySelectorAll('.active');

//     buttonInactive.forEach(e=> {
//         e.addEventListener('click', () => {
//             item.classList.add("active");
//     })
//     })
    
// }

// const colorIcon = document.querySelectorAll(".icon");
// console.log({colorIcon})
// colorIcon.forEach((color, index, arr)=>{
//     color.addEventListener('click',()=>{
//         if(arr[index].classList.contains('icon-color')){
//             return arr[index].classList.remove('icon-color')
//         }

//         for(let i = 0; i < arr.length; i++){
//             arr[i].classList.remove('icon-color')
//         }

//         arr[index].classList.add('icon-color')
//     })
// })

const openInputsearchCoworkingSpaces = ()=> {

    const header = document.querySelector('#header')
    const search = document.querySelector('.container_search_input')
    const search_txt = document.querySelector('#search_txt')
    const container_informations_find_coworking = document.querySelector('#container_informations_find_coworking')
    const box_black = document.querySelector('#box_black')
    const type_office = document.querySelector('#type_office')

    if(search !== null){
        search.addEventListener('click',(e)=>{
            header.classList.add('header_expanded')
            type_office.style.display = 'flex'
            search_txt.style.display = 'none'
            search.classList.add("expanded")
            container_informations_find_coworking.style.display = 'flex'
            box_black.style.display = 'block'
    })
    closeInputsearchCoworkingSpaces(box_black,header,search,search_txt,container_informations_find_coworking)
}
    select_type_office()
}

const select_type_office = () => {

    const optionsOffice = document.querySelectorAll('.option_office')
    optionsOffice.forEach(option=> option.addEventListener('click',checked))

    function checked(){  
        optionsOffice.forEach(option => option.classList.remove('checked'))
        this.classList.add('checked')
    }

    optionsBooking()

}

const optionsBooking = () =>{
    const booking_informations = document.querySelectorAll('.booking_informations')
    const popUp_input = document.querySelectorAll('.popUp_input')

    booking_informations.forEach((information, index, arr)=> information.addEventListener('click',checked_information))

    function checked_information(){
        booking_informations.forEach(information => information.classList.remove('input_checked'))
        this.classList.add('input_checked')
    
        if(this == booking_informations[0]){
            popUp_input[0].style.display = 'none'
            popUp_input[1].style.display = 'none'
            return
        }

        if(this == booking_informations[1]){
            popUp_input[1].style.display = 'none'
            popUp_input[0].style.display = 'flex'
        }

        if(this == booking_informations[2]){
            popUp_input[0].style.display = 'none'
            popUp_input[1].style.display = 'flex'
        }
    }

}

const closeInputsearchCoworkingSpaces = (box_black,header,search,search_txt,container_informations_find_coworking)=> {

    box_black.addEventListener('click',()=>{
        header.classList.remove('header_expanded')
        type_office.style.display = 'none'
        box_black.style.display = 'none'
        search.classList.remove("expanded")
        search_txt.style.display = 'block'
        container_informations_find_coworking.style.display = 'none'
    })

    window.addEventListener('scroll',()=>{
        if(window.scrollY > 0){
            header.classList.remove('header_expanded')
            type_office.style.display = 'none'
            box_black.style.display = 'none'
            search.classList.remove("expanded")
            search_txt.style.display = 'block'
            container_informations_find_coworking.style.display = 'none'
            return
        }
        })
}

const menuHamburguer  = () =>{
    const menu_sign_in_up = document.querySelector('#menu_sign-in-up')
    const menu_open = document.querySelector('.menu_open')
    const container_menu_open = document.querySelector(".container_menu_open")

    window.addEventListener('click',(e)=>{

        if(menu_sign_in_up.contains(e.target) == true){
            menu_open.classList.toggle('menu_open_checked')

            if(container_menu_open.style.overflow == 'unset'){
                container_menu_open.style.overflow = 'hidden'
                return
            }

           return container_menu_open.style.overflow = 'unset'
            
        }

        if(menu_open.contains(e.target) == false || menu_open.contains(e.target) == true && e.target.tagName == 'LI' || menu_open.contains(e.target) == true && e.target.tagName == 'I'){
            menu_open.classList.remove('menu_open_checked')
            container_menu_open.style.overflow = 'hidden' 
            return
        }
    })
    
    popUp_login_signUp()
}

const popUp_login_signUp = () => {

    const optionsMenu = document.querySelectorAll('.popUp-login-signUp')
    const containerPopUp = document.querySelector('#container_popUp_login-signUp')
    const AllPopUp = document.querySelectorAll(".popUp")
    optionsMenu.forEach(option=>option.addEventListener('click',openPopUp))

    function openPopUp (){
        containerPopUp.style.display = 'flex'
        if(this == optionsMenu[0] || this == optionsMenu[2]){
            AllPopUp[0].classList.add('popUpChecked')
        }

        if(this == optionsMenu[1] || this == optionsMenu[3]){
            AllPopUp[1].classList.add('popUpChecked')
        }

        closePopUP()
    }

    function closePopUP() {
       containerPopUp.addEventListener('click',e=>{
        if(e.target.classList == 'close_popup' || e.target == containerPopUp){
        containerPopUp.style.display = 'none'
        AllPopUp.forEach(popUp => popUp.classList.remove('popUpChecked'))
        }

       })
    }

}

openInputsearchCoworkingSpaces()
menuHamburguer ()


const openPop_profilePicture = () => {
    const pictureProfile = document.querySelectorAll(".pictureProfile");
    const container_popUp_profilePicture = document.getElementById("container_popUp_profilePicture");

    pictureProfile.forEach(element=> {
        element.addEventListener('click', () => {
        container_popUp_profilePicture.style.display = 'flex'
    })
    })


    closePop_profilePicture(container_popUp_profilePicture)

    changeImageProfile()
    
}

function closePop_profilePicture(container_popUp_profilePicture) {
    container_popUp_profilePicture.addEventListener('click', p => {

        if (p.target.id == 'close' || p.target == container_popUp_profilePicture) {
            container_popUp_profilePicture.style.display = 'none'
        }
    })
}

const changeImageProfile = ()=> {

    const imageProfile = document.querySelectorAll('.image_profile')

    // const uploadPicture = document.querySelector('.uploadPicture')
    
    // uploadPicture.addEventListener('click',()=>{
    //     imageProfile.forEach(img=>{
    //         img.setAttribute('src','images/default/perfil.png')
    //     })
    // })

    const deletePicture = document.querySelector('.deletePicture')
    deletePicture.addEventListener('click',()=>{
        imageProfile.forEach(img=>{
            img.setAttribute('src','images/default/perfil.png')
        })
    })

}

openPop_profilePicture()

// const colorIcon = document.querySelectorAll(".icon");
// console.log({colorIcon})
// colorIcon.forEach((color, index, arr)=>{
//     color.addEventListener('click',()=>{
//         if(arr[index].classList.contains('icon-color')){
//             return arr[index].classList.remove('icon-color')
//         }

//         for(let i = 0; i < arr.length; i++){
//             arr[i].classList.remove('icon-color')
//         }

//         arr[index].classList.add('icon-color')
//     })
// })


// const openMenuMobile = () => {
//     const bars = document.querySelectorAll(".bars");
//     const menuMobile = document.getElementById("menu_mobile");
//     const close = document.querySelectorAll('.close')

//     console.log({bars})

//     bars.forEach(element=> {
//         element.addEventListener('click', () => {
//         menuMobile.style.display = 'flex'
//     })
//     })


//     closeMenuMobile(menuMobile)
    
// }

// function closeMenuMobile(menuMobile) {
//     menuMobile.addEventListener('click', m => { 

//         if(m.target.classList == 'bars' || m.target.classList == 'fa-solid fa-pen pictureProfile list') {
//             menuMobile.style.display = 'none';
//         }
//     })
// }

// openMenuMobile()

// const openSearchMobile = () => {
//     const searchMobile = document.querySelectorAll(".p");
//     const searchContainerMobile = document.getElementById("#container_search-mobile");

//     console.log(searchMobile)

//     searchMobile.forEach(element=> {
//         element.addEventListener('click', () => {
//         searchContainerMobile.display = 'flex'
//     })
//     })


//     closeSearchMobile(searchContainerMobile)
    
// }

// function closeSearchMobile(searchContainerMobile) {
//     searchContainerMobile.addEventListener('click', s => { 

//         if (s.target.classList == 'close_search' || s.target.classList == '') {
//             searchContainerMobile.style.display = 'none'
//         }
//     })
// }

// openSearchMobile()