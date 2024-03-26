const rooms = () =>{
    const roomsAvailable = document.querySelectorAll(".rooms-available-container");
    roomsAvailable.forEach((option, index, arr)=> option.addEventListener('click', ()=>{
        
        for(let i = 0; i < arr.length; i++){
            arr[i].classList.remove('selectRoom')
        }

        arr[index].classList.add('selectRoom')
    }))

}

rooms();