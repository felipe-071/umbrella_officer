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

// const selectedFrequency = document.querySelector(".selected-frequency");
// const frequencyContainer = document.querySelector(".frequency-container");

// const frequencyList = document.querySelectorAll(".frequency");

// selectedFrequency.addEventListener("click", () => {
//   frequencyContainer.classList.toggle("active1");
// });

// frequencyList.forEach(f => {
//   f.addEventListener("click", () => {
//     selectedFrequency.innerHTML = f.querySelector("option").innerHTML;
//     frequencyContainer.classList.remove("active1");
//   });
// });


let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('calendar-data');
const popUp_addSchedule = document.getElementById('popUp_addSchedule');
const popUp_schedule = document.getElementById('popUp_schedule');
const backDrop = document.getElementById('containerPopUp_data');
const eventTitleInput = document.querySelectorAll('.timeComplete');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function openContainer_data(date) {
  clicked = date;

  const schedules = events.find(e => e.date === clicked);
  if (schedules) {
    document.querySelector('.schedules').innerText = schedules.title;
    popUp_schedule.style.display = 'block'; 
  } else {
    popUp_addSchedule.style.display = 'block';
  }

  backDrop.style.display = 'flex';
}

function load() {
  const dt = new Date();

  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
  const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

  document.getElementById('monthDisplay').innerText = 
    `${dt.toLocaleDateString('pt-br', { month: 'long' })} ${year}`;

  calendar.innerHTML = '';

  for(let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement('div');
    daySquare.classList.add('day');

    const dayString = `${month + 1}/${i - paddingDays}/${year}`;

      if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;
      const schedules = events.find(e => e.date === dayString);

      if (i - paddingDays === day && nav === 0) {
        daySquare.id = 'currentDay';
      }

      if (schedules) {
        const eventTime = document.createElement('div');
        eventTime.classList.add('time');
        eventTime.innerText = schedules.title;
        daySquare.appendChild(eventTime);
      }

      daySquare.addEventListener('click', () => openContainer_data(dayString));
    } else {
      daySquare.classList.add('padding');
    }

    calendar.appendChild(daySquare);    
  }
}

function closeModal() {
  eventTitleInput[0].classList.remove('error')
  eventTitleInput[1].classList.remove('error');
  popUp_addSchedule.style.display = 'none';
  popUp_schedule.style.display = 'none';
  backDrop.style.display = 'none';
  eventTitleInput[0].value = '';
  eventTitleInput[1].value = '';
  clicked = null;
  load();
}

function saveEvent() {
  if (eventTitleInput[1].value) {
    eventTitleInput[0].classList.remove('error');
    eventTitleInput[1].classList.remove('error');
    events.push({
      date: clicked,
      title:`${eventTitleInput[0].value}, ${eventTitleInput[1].value}`,
    });

    localStorage.setItem('events', JSON.stringify(events));
    closeModal();
  } else {
    eventTitleInput[0].classList.add('error')
    eventTitleInput[1].classList.add('error');
  }
}

function deleteEvent() {
  events = events.filter(e => e.date !== clicked); 
  localStorage.setItem('events', JSON.stringify(events));
  closeModal();
}

function initButtons() {
  document.getElementById('nextButton').addEventListener('click', () => {
    nav++;
    load();
  });

  document.getElementById('backButton').addEventListener('click', () => {
    nav--;
    load();
  });

  document.getElementById('saveButton').addEventListener('click', saveEvent);
  document.getElementById('deleteButton').addEventListener('click', deleteEvent); 
  document.getElementById('cancelButton-close').addEventListener('click', closeModal); 
  document.getElementById('cancelButton').addEventListener('click', closeModal); 
  document.getElementById('closeButton').addEventListener('click', closeModal);
}

initButtons();
load();

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

$(".timeComplete").mask(mask, pattern);