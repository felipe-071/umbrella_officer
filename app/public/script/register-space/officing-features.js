// const operationsValues = () =>{
    
//     const specifications = document.querySelectorAll(".specification")
//     specifications.forEach((specification,index)=>{
//         specification.addEventListener('click',(e)=>{
//             if(e.target.classList == "subtract"){
//                 subtractionInput(specification,index)
//             }
//             if(e.target.classList == "addition"){
//                 additionInput(specification,index)
//             }
//         })
//     })
//         function subtractionInput(specification,index){
//             if(index == index){
//                 var amountInput = specification.children[1]
//                 var i = amountInput.value
//                 if (i > 0) {
//                     i--
//                     amountInput.setAttribute('value', i)
//                 }
//             }
//         }
//         function additionInput(specification,index){
//             if(index == index){
//                 var amountInput = specification.children[1]
//                 var i = amountInput.value
//                 i++
//                 amountInput.setAttribute('value', i)
//             }
//         }

 
// }

// operationsValues();

const switchContent = () => {
    const space = document.querySelectorAll(".step");
    console.log({space});

    space.forEach((content, index, arr)=>{
        content.addEventListener('click', (e) => {
            if(e.target.className == 'advanceButton'){
                nextContent(index, arr)
            }

            if(e.target.className == 'return'){
                previousContent(index, arr)
            }

        })
    })

    function nextContent(index, arr){
        var lengthArray = arr.length-=1

                if(index == index && index < lengthArray){
                    console.log(arr)
                    const teste = index*-1
                    console.log(teste)
                        var i = index
                        arr[i].style.display = 'none'
                        arr[i+=1].style.display = 'block'
                }
    }

    function previousContent(index, arr){
                if(index == index){
                        var i = index
                        arr[i].style.display = 'none'
                        arr[i-=1].style.display = 'block'
                }
    }
     
}

switchContent()