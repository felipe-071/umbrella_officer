const rating = () => {

  const bar = document.querySelectorAll(".teste8")
  const teste7 = document.querySelectorAll('.teste7')

  bar.forEach((item, index, arr)=>{
      item.addEventListener('click',(e)=>{
              
          const current_bar_level = index + 1
          const lengthBars= arr.length
          
          if(index == index){
              for (let i = 0; i <= index; i++) {
                arr[i].classList.add('rating-bar-active')
              }
          }

          if(current_bar_level < lengthBars){
          for (let i = index+1; i < lengthBars; i++) {
              arr[i].classList.remove('rating-bar-active')
            }
          }
      })
  })

  teste7.forEach((item, index, arr)=>{
    item.addEventListener('click',(e)=>{
      console.log({teste7})
    
        const current_bar_level = index + 1
        const lengthBars= arr.length
        
        if(index == index){
            for (let i = 0; i <= index; i++) {
              arr[i].classList.add('rating-bar-active')
            }
        }

        if(current_bar_level < lengthBars){
        for (let i = index+1; i < lengthBars; i++) {
            arr[i].classList.remove('rating-bar-active')
          }
        }
    })
})

}

rating()