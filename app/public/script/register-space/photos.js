const pictures = document.querySelectorAll('.photos');

const renderElement = document.querySelectorAll('.renderElement');

const advance = document.querySelector("#photos_section input[type=button]");

for(let i = 0; i < pictures.length; i++){
    renderElement[i].innerHTML = 'Adicionar foto +'
}

pictures.forEach((picture,index,arr)=>{
    picture.addEventListener('change', function(e){
        const pictureTarget = e.target;
        const file = pictureTarget.files[0];
    
        if(file){
            const reader = new FileReader();
            reader.addEventListener('load', function(e){
                const thisReader = e.target;
    
                const img = document.createElement('img');
                img.src = thisReader.result;
                img.classList.add('pictureImg');
    
                renderElement[index].innerHTML = ''

                renderElement[index].appendChild(img)

                advance.classList.add('next_default');


            })
            reader.readAsDataURL(file)
            console.log(reader)
        } 
        
        else{
            renderElement[index].innerHTML = 'Adicionar foto +';
        }
    })
})
