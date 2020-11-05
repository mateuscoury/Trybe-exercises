function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

/*

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createdaysofmonth(){


let gedaylist =  document.querySelector("#days")


for (let index = 0; index < dezDaysList.length; index += 1) {
    let createdays = document.createElement("li")
    let dayn = dezDaysList[i]
    

    if (dayn === 24 || dayn === 25 || dayn === 31) {

        createdays.className = "holiday"
        createdays.innerHTML = dayn
        gedaylist.appendChild(createdays)
    }
    else if (dayn === 4 || dayn === 11 || dayn === 18 || dayn === 25) {
        
        createdays.className = "friday"
    }
    else {
        
        createdays.innerHTML = dayn
        createdays.className = "dayn"
        gedaylist.appendChild(createdays)
    }


}

}

createdaysofmonth() ;

*/
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let getDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');

    if (day === 24 | day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 4 | day === 11 | day === 18) {
      dayItem.className = 'day friday-day';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday-day';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.innerHTML = day;
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  };
};
createDaysOfTheMonth();


function botaol(par1) {

  let nome = par1

  let getPos = document.querySelector(".buttons-container")

  let element = document.createElement("button")

  element.innerText = nome

  element.tagName = "btn-holiday"

  getPos.appendChild(element)


}

botaol("Feriados")


function displayHolidays() {

  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function () {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};

displayHolidays();



function butaosext(par2) {
  let sexta = par2

  let getposi = document.querySelector(".buttons-container")
  let element = document.createElement("button")
  let tag = "btn-friday"

  element.id = tag

  element.innerHTML = sexta

  getposi.appendChild(element)


}

butaosext("Sexta-Feira")




function event1(zin) {

  let tag1 = document.querySelector("#btn-friday")

  let tag2 = document.querySelectorAll("friday-day")

  let texto = "Sexta Feira"


  ag1.addEventListener("click", function () {

    for (let i = 0; i < tag2.length; i++) {

      if (tag1[i].innerHTML !== texto) {
        tag1.innerHTML = texto
      }
      else {

        tag1[i] = tag1[i]

      }

    }

  })

}

let dezFridays = [4, 11, 18, 25]

event1(dezDaysList)
