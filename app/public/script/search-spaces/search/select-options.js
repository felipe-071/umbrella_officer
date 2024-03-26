const selected = document.querySelectorAll(".selected");
const optionsContainer = document.querySelectorAll(".options-container");

const optionsList = document.querySelectorAll(".option"); 

selected.forEach((e, index)=>{
  e.addEventListener("click", () => {
    optionsContainer[index].classList.toggle("active");
  });
});

  optionsList.forEach((e,i,arr) => {
  e.addEventListener("click", () => {  
    selected[i].innerHTML = e.querySelector("label").innerHTML;
  });
});
 
