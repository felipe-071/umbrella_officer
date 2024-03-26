const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("option").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

const selectedType = document.querySelector(".selected-type");
const typeContainer = document.querySelector(".type-container");

const typeList = document.querySelectorAll(".type");

selectedType.addEventListener("click", () => {
  typeContainer.classList.toggle("active-type");
});

typeList.forEach(t => {
  t.addEventListener("click", () => {
    selectedType.innerHTML = t.querySelector("option").innerHTML;
    typeContainer.classList.remove("active-type");
 });
});

const selectedCategory = document.querySelector(".selected-category");
const categoryContainer = document.querySelector(".category-container");

const categoryList = document.querySelectorAll(".category");

selectedCategory.addEventListener("click", () => {
  categoryContainer.classList.toggle("active-category");
});

categoryList.forEach(c => {
  c.addEventListener("click", () => {
    selectedCategory.innerHTML = c.querySelector("option").innerHTML;
    categoryContainer.classList.remove("active-category");
 });
});

const selectedSubcategory = document.querySelector(".selected-subcategory");
const subcategoryContainer = document.querySelector(".subcategory-container");

const subcategoryList = document.querySelectorAll(".subcategory");

selectedSubcategory.addEventListener("click", () => {
  subcategoryContainer.classList.toggle("active-subcategory");
});

subcategoryList.forEach(s => {
  s.addEventListener("click", () => {
    selectedSubcategory.innerHTML = s.querySelector("option").innerHTML;
    subcategoryContainer.classList.remove("active-subcategory");
 });
});

const selectedWifi= document.querySelector(".selected-wifi");
const wifiContainer = document.querySelector(".wifi-container");

const wifiList = document.querySelectorAll(".wifi");

selectedWifi.addEventListener("click", () => {
  wifiContainer.classList.toggle("active-wifi");
});

wifiList.forEach(w => {
  w.addEventListener("click", () => {
    selectedWifi.innerHTML = w.querySelector("option").innerHTML;
    wifiContainer.classList.remove("active-wifi");
 });
});

$(document).ready(function () {
  $("#cep_ad").mask("00.000-000");
  $("#price").mask("999.99", {reverse :true});
  // $('#price').mask({
  //   prefix:'R$ ',
  //   allowNegative: true,
  //   thousands:'.', decimal:',',
  //   affixesStay: true});
});


const operationsValues = () =>{
  const form = document.querySelector('[data-js="form"]')
  
  form.addEventListener('submit',(e)=>{
    e.preventDefault()
  })

  const specifications = document.querySelectorAll(".specification")

  specifications.forEach((specification,index)=>{
      specification.addEventListener('click',(e)=>{
          if(e.target.classList == "fa-solid fa-minus subtract"){
              subtractionInput(specification,index)
          }

          if(e.target.classList == "fa-solid fa-plus addition"){
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
          }
      }
      
}

operationsValues()


