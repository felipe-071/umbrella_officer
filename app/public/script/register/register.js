// import {localization} from '../register-space/localization'
//Cannot use import statement outside a module
//type:"module" não resolve o problema
const informationsFieldsetForm = [
    {
      teste:`
      <fieldset id="adaptables-categories_section" class="container_margin_default fieldset">
      <div class="default_margin">   
          <nav id="breadcrumb-father">
              <ul class="breadcrumb">
                    <li><a href="/tipo-de-ambiente">Tipo de ambiente</a></li>
                    <li>></li>
                    <a href=""><li aria-current="page">Categoria do ambiente</li></a>
              </ul>
          </nav>

          <div class="align-elements center">
              <h1>Escolha a categoria</h1>
              <ul>
                  <li class="space-box">
                      <img class="space-photo" src="images/register-space/adaptables/house-category.png" alt="">
                  </li>
                  
                  <li class="space-box">
                      <img class="space-photo" src="images/register-space/adaptables/apartment-category.png" alt="">
                  </li>

                  <li class="space-box">
                      <img class="space-photo" src="images/register-space/adaptables/unity-category.png" alt="">
                  </li>
              </ul>
          </div>
          <div class="align-elements" id="align-buttons">
              <button>Nenhuma das opções</button>
                    <input type="button" class="advanceButton next_choice" value="Avançar">             
          </div>
    </div>
    </fieldset>
      `
    },
    {
      teste:`
      <fieldset name='4' id="adaptables-categories_section2" class="container_margin_default">
        <div class="default_margin">
        
          <nav>
              <ul class="breadcrumb">
                  <li><a class="hoverU" href="/tipo-de-ambiente">Tipo de ambiente</a></li>
                  <li class="divisor">></li>
                  <a class="hoverU" href="/categorias-espacos-adaptaveis"><li>Categoria do ambiente</li></a>
                  <li class="divisor">></li>
                  <a href=""><li aria-current="page">Subcategoria do ambiente</li></a>
                </ul>
          </nav>

        <div class="align-elements center">
            <h1>Escolha a categoria</h1>
            <ul>
                <li class="space-box">
                    <img class="space-photo" src="images/register-space/adaptables/house-category.png" alt="">
                    <div><span>Casa comum</span></div>
                </li>
                
                <li class="space-box">
                    <img class="space-photo" src="images/register-space/adaptables/kitnet.png" alt="">
                    <div><span>Microcasa</span></div>
                </li>
            </ul>
        </div>
        <div class="align-elements" id="align-buttons">
            <button>Nenhuma das opções</button>
                <input type="button" class="advanceButton" value="Avançar">
        </div>
        </div>
    </fieldset>
      `
    },
    {
      teste:`
      <fieldset name="4" id="adaptables-categories_section3" class="container_margin_default">
        <div class="default_margin">
        
                    <nav>
                            <ul class="breadcrumb">
                              <li><a class="hoverU" href="/tipo-de-ambiente">Tipo de ambiente</a></li>
                              <li class="divisor">></li>
                              <a class="hoverU" href="/categorias-espacos-adaptaveis"><li>Categoria do ambiente</li></a>
                              <li class="divisor">></li>
                              <a href=""><li aria-current="page">Subcategoria do ambiente</li></a>
                            </ul>
                    </nav>

            <div class="align-elements center">
                <h1>Escolha a categoria</h1>
                <ul>
                    <li class="space-box">
                        <img class="space-photo" src="images/register-space/adaptables/apartment-category.png" alt="">
                        <div><span>Apartamento comum</span></div>
                    </li>
                    
                    <li class="space-box">
                        <img class="space-photo" src="images/register-space/adaptables/kitnet.png" alt="">
                        <div><span>Kitnet</span></div>
                    </li>

                    <li class="space-box">
                        <img class="space-photo" src="images/register-space/adaptables/loft.png" alt="">
                        <div><span>Loft</span></div>
                    </li>
                </ul>
            </div>
            <div class="align-elements" id="align-buttons">
                <button>Nenhuma das opções</button>
                    <input type="button" class="advanceButton" value="Avançar">
            </div>
        </div>
    </fieldset>
      `
    },
    {
      teste:``
    }
]

const form = document.querySelector('#form_fieldset')
var Allfields = document.querySelectorAll('#form fieldset')
var fieldsetForm = document.querySelectorAll('.fieldset')  

const teste5 = () => {
  const button = document.querySelectorAll(".advanceButton");
  var optionsOffice = document.querySelectorAll('.space-box')
  optionsOffice.forEach((option, index, arr) => option.addEventListener('click',()=>{

      if(optionsOffice.length == 3){
        var fields = index+1
        button[0].setAttribute('name',fields)       
      }

      for(let i = 0; i < arr.length; i++){
          arr[i].classList.remove('border-select')
      }

      arr[index].classList.add('border-select')
    
      button[0].classList.add('next_default')

  }))

    test6()

}

const test6 = ()=> {

    Allfields = document.querySelectorAll('#form fieldset')

    Allfields.forEach((element,index,arr)=>{
    element.addEventListener('click',(event)=>{ 

      if(event.target.classList.contains('next_choice')){
          var indexOption = event.target.getAttribute('name')
          var teste8 = Number(indexOption)
          form.innerHTML = informationsFieldsetForm[teste8].teste
          teste5()
          return
       }

     if(event.target.classList.contains('next_default')){

        if(index >= 1){
            arr[index].style.display = 'none'
            arr[index+=1].style.display = 'flex'
            return
        }

        // var teste9 = Number(arr[index].name)

        // console.log(teste9)

        form.innerHTML = ''

        arr[1].style.display = 'flex'
      
        Allfields = document.querySelectorAll('#form fieldset')
        
        teste5();
        return
     }
    })
  })
}

test6()
teste5() 

