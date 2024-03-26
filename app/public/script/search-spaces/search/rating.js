const rating = () => {

    const stars = document.querySelectorAll(".star")


    stars.forEach((item, index, arr)=>{

        

        item.addEventListener('click',(e)=>{
         
            const current_star_level = index + 1
            const lengthStars = arr.length
            
            if(index == index){
                for (let i = 0; i <= index; i++) {
                  arr[i].setAttribute('src','images/search-spaces/search/background-star.png')
                }
            }

            if(current_star_level < lengthStars){
            for (let i = index+1; i < lengthStars; i++) {
                arr[i].setAttribute('src','images/search-spaces/search/star.png')
              }
            }

        })
    })

}

rating()