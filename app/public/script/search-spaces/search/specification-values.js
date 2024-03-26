const operationsValues = () =>{
    const specifications = document.querySelectorAll(".specification")

    specifications.forEach((specification,index)=>{
        specification.addEventListener('click',(e)=>{
            if(e.target.classList == "subtract"){
                subtractionInput(specification,index)
            }

            if(e.target.classList == "addition"){
                additionInput(specification,index)
            }
        })
    })


        function subtractionInput(specification,index){

            if(index == index){
                var amountInput = specification.children[1]
                var i = amountInput.value

                if (i > 0) {
                    i--
                    amountInput.setAttribute('value', i)
                }
            }
        }

        function additionInput(specification,index){

            if(index == index){
                var amountInput = specification.children[1]
                var i = amountInput.value
                i++
                amountInput.setAttribute('value', i)
                console.log(`${i}`)
            }
        }
        

}

operationsValues()