var mask = "HH:MM",
    pattern = {
        'translation': {
            'H': {
                pattern: /[0-23]/
            },
            'M': {
                pattern: /[0-59]/
            }
        }
    };

$("#time").mask(mask, pattern);

$(document).ready(function () {
    $("#stay").mask("");
});
 
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});