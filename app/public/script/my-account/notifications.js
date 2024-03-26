function notificacoes(x){
    if(x === 1){
        document.getElementById("last-notifications").style.display="block";
        document.getElementById("unread-notifications").style.display="none";
        document.getElementById("read-notifications").style.display="none";
    }

    else if(x === 2){
        document.getElementById("last-notifications").style.display="none";
        document.getElementById("unread-notifications").style.display="block";
        document.getElementById("read-notifications").style.display="none";
    }

    else{
        document.getElementById("last-notifications").style.display="none";
        document.getElementById("unread-notifications").style.display="none";
        document.getElementById("read-notifications").style.display="block";
    }
}

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});
