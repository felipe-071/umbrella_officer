

/*Script: Pop up de calendário (próximas visitas)*/
const openPopCalendar = () => {
    const buttonCalendar = document.querySelectorAll(".visits");
    const container_popUp_calendar = document.getElementById("container_popUp_calendar");

    buttonCalendar.forEach(element=> {
        element.addEventListener('click', () => {
        container_popUp_calendar.style.display = 'flex'
    })
    })


    closePopCalendar(container_popUp_calendar)
    
}

function closePopCalendar(container_popUp_calendar) {
    container_popUp_calendar.addEventListener('click', e => {

        if (e.target == container_popUp_calendar) {
            container_popUp_calendar.style.display = 'none'
        }
    })
}

openPopCalendar();

let calendar = document.querySelector('.popUp_calendar')

const month_names = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 
'Outubro', 'Novembro', 'Dezembro']

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

generateCalendar = (month, year) => {

    let calendar_days = calendar.querySelector('.calendar-days')
    let calendar_header_year = calendar.querySelector('#year')

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    calendar_days.innerHTML = ''

    let currDate = new Date()
    if (!month) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()

    let curr_month = `${month_names[month]}`
    month_picker.innerHTML = curr_month
    calendar_header_year.innerHTML = year

    // get first day of month
    
    let first_day = new Date(year, month, 1)

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div')
        if (i >= first_day.getDay()) {
            day.classList.add('calendar-day-hover')
            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += `<span>
                            <span>
                            <span>
                            <span>`
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date')
            }
        }
        calendar_days.appendChild(day)
    }
}

let month_list = calendar.querySelector('.month-list')

month_names.forEach((e, index) => {
    let month = document.createElement('div')
    month.innerHTML = `<div data-month="${index}">${e}</div>`
    month.querySelector('div').onclick = () => {
        month_list.classList.remove('show')
        curr_month.value = index
        generateCalendar(index, curr_year.value)
    }
    month_list.appendChild(month)
})

let month_picker = calendar.querySelector('#month-picker')

month_picker.onclick = () => {
    month_list.classList.add('show')
}

let currDate = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_year = {value: currDate.getFullYear()}

generateCalendar(curr_month.value, curr_year.value)

document.querySelector('#prev-year').onclick = () => {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

/*Script: Pop up de cancelamento*/
const openPopCancel = () => {
    const buttonCancel = document.querySelectorAll(".cancel");
    const container_popUp_cancel = document.getElementById("container_popUp_cancel");

    buttonCancel.forEach(element=> {
        element.addEventListener('click', () => {
        container_popUp_cancel.style.display = 'flex'
    })
    })


    closePopCancel(container_popUp_cancel)
    
}

function closePopCancel(container_popUp_cancel) {
    container_popUp_cancel.addEventListener('click', e => {

        console.log(e.target)

        if (e.target.id == 'close_popUp_cancel' || e.target == container_popUp_cancel) {
            container_popUp_cancel.style.display = 'none'
        }
    })
}

openPopCancel();


const switchContent = () => {
    const popUpCancel = document.querySelectorAll(".popUp_cancel > div > div");
    console.log(popUpCancel);

    popUpCancel.forEach((content, index, arr)=>{
        content.addEventListener('click', (e) => {
            if(e.target.name == 'next'){
                nextContent(index, arr)
            }

            if(e.target.className == 'fa-solid fa-chevron-left arrow-left'){
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

/*Script: Pop up de cancelamento - Avaliação (estrelas)*/
const rating = () => {

    const listStars = document.querySelector('.rating')
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
