function hint(x){
    if (x === 1){
        document.getElementById("hint-adaptable").style.display="flex";
    }
    else if (x === 2){
        document.getElementById("hint-corporate").style.display="flex";
    }
    else if (x === 3){
        document.getElementById("hint-adaptable").style.display="none";
    }
    else{
        document.getElementById("hint-corporate").style.display="none";
    }
}


// function openHint(){
//     const button = document.query.SelectorAll(".hint")
   
// }

// function closeHint(){
//     const hintIcon = document.()
// }




// spacebox.forEach(element, index => {
   
// });


//  place.forEach((element, index, arr)=>{
//      element.addEventListener('click',()=>{
//         arr[index].classList.add("borda");
      
//      })
//  })

var button = document.getElementById("advance");


const selectTypeOF = () => {
   const optionsOffice = document.querySelectorAll('.space-box')
   optionsOffice.forEach((option, index, arr) => option.addEventListener('click',()=>{

       if(index == 0){
           button.setAttribute('href','/categorias-de-espacos-adaptaveis')
       }

       if(index == 1){
           button.setAttribute('href','/categorias-corporativo')
       }


       for(let i = 0; i < arr.length; i++){
           arr[i].classList.remove('border-select')
       }

       arr[index].classList.add('border-select')
       button.firstElementChild.style.background = "var(--scale-2-purple)";
    
   }))

   // function checked(){  
   //     optionsOffice.forEach(option => option.classList.remove('border-select'));
   //     this.classList.add('border-select');
   // }
}

selectTypeOF();