const element8 = document.querySelector('.sliding-tab-center .tab-content');
element8.style.backgroundColor = "#a6a4a4";
element8.style.border = "3px solid #a6a4a4";
document.getElementById("centretab").style.backgroundColor = "#a6a4a4";
document.getElementById("centretab").style.border = "3px solid #a6a4a4";

const panel2 = document.getElementById('panel2');
let isPanel2Open = false;


var audio1 = new Audio('keyboard1.wav');
var audio2 = new Audio('keyboard2.wav');
var audio3 = new Audio('keyboard3.wav');
var audio4 = new Audio('keyboard4.wav');
//audio1.volume = 1;
//audio2.volume = 1;
//audio3.volume = 1;
//audio4.volume = 1;
//document.addEventListener("keypress", logKey);
//function logKey() {
   // var num = Math.floor(Math.random() * 4);
  //  if (num = 0) {
  //      audio1.play();
   ////// }
   // if (num = 1) {
  //      audio2.play();
  //  }
  //  if (num = 2) {
  //      audio3.play();
 //   }
 //   if (num = 3) {
//        audio4.play();
//    }
//}
document.getElementById('search-form').addEventListener('submit', function (e) {
    var query = document.querySelector('input[name="q"]').value;
    if (!query.trim()) {
        e.preventDefault(); // Prevent empty searches
    }
});
document.getElementById('lucky-button').addEventListener('click', function () {
    var query = document.querySelector('input[name="q"]').value;
    if (query.trim()) {
        window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query) + '&btnI';
    }
});
// Sliding Tab Script for both tabs
const slidingTabs = document.querySelectorAll('.sliding-tab, .sliding-tab-right, .sliding-tab-left,.sliding-tab-center,.sliding-tab-center');
slidingTabs.forEach(slidingTab => {
    const tab = slidingTab.querySelector('.tab');
    tab.addEventListener('click', () => {
        slidingTab.classList.toggle('open');
    });
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        let centertab = document.getElementById('centertab');
        const tab2 = centertab.querySelector('.tab');
        centertab.classList.toggle('open');
    }
});
const checkbox = document.querySelector('input[name="switch1"]');
checkbox.addEventListener('change', function () {
    if (this.checked) {
        document.getElementById("music").src = " https://www.youtube.com/embed/videoseries?list=PLMr7aAMAt4PgUxsfItBMPNiRQVTO-r9-m&index=3";
    } else {
        document.getElementById("music").src = "https://open.spotify.com/embed/track/35nsl8YiBIYw1YdNmkmhnk";
    }
});

const checkbox2 = document.querySelector('input[name="switch2"]');
checkbox2.addEventListener('change', function () {
    if (this.checked) {
        panel2.classList.add('open');
    } else {
        panel2.classList.remove('open');
    }
});

function themered() {
    document.getElementById("bg-video").src = "car1.mp4";
    const element1 = document.querySelector('.search-box');
    element1.style.border = "4px solid #DC052D";
    element1.style.backgroundColor = "#DC052D";
    const element2 = document.querySelector('.button'); element2.style.backgroundColor = "#DC052D";
    element2.style.border = "4px solid #DC052D";
    const element3 = document.querySelector('.tab');
    element3.style.backgroundColor = "#DC052D";
    const element4 = document.querySelector('.tab-content');
    element4.style.backgroundColor = "#DC052D";
    element4.style.border = "3px solid #DC052D";
    const element5 = document.querySelector('.sliding-tab-right .tab-content');
    element5.style.backgroundColor = "#DC052D";
    element5.style.border = "3px solid #DC052D";
    const element6 = document.querySelector('.sliding-tab-left .tab-content');
    element6.style.backgroundColor = "#DC052D";
    element6.style.border = "3px solid #DC052D";
    document.getElementById("sear").style.backgroundColor = "#DC052D";
    document.getElementById("sear").style.border = "3px solid #DC052D";
    document.getElementById("lucky-button").style.backgroundColor = "#DC052D";
    document.getElementById("lucky-button").style.border = "3px solid #DC052D";
    document.getElementById("righttab").style.backgroundColor = "#DC052D";
    document.getElementById("righttab").style.border = "3px solid #DC052D";
    document.getElementById("lefttab").style.backgroundColor = "#DC052D";
    document.getElementById("lefttab").style.border = "3px solid #DC052D";
}
function themeblack() {
    document.getElementById("bg-video").src = "black1.mp4";
    const element1 = document.querySelector('.search-box');
    element1.style.border = "4px solid #a6a4a4";
    element1.style.backgroundColor = "#a6a4a4";
    const element2 = document.querySelector('.button');
    element2.style.backgroundColor = "#a6a4a4";
    element2.style.border = "4px solid #dbd9da";
    const element3 = document.querySelector('.tab');
    element3.style.backgroundColor = "#a6a4a4";
    const element4 = document.querySelector('.tab-content');
    element4.style.backgroundColor = "#a6a4a4";
    element4.style.border = "3px solid #a6a4a4";
    const element5 = document.querySelector('.sliding-tab-right .tab-content');
    element5.style.backgroundColor = "#a6a4a4";
    element5.style.border = "3px solid #a6a4a4";
    const element6 = document.querySelector('.sliding-tab-left .tab-content');
    element6.style.backgroundColor = "#a6a4a4";
    element6.style.border = "3px solid #a6a4a4";
    document.getElementById("sear").style.backgroundColor = "#a6a4a4";
    document.getElementById("sear").style.border = "3px solid #a6a4a4";
    document.getElementById("lucky-button").style.backgroundColor = "#a6a4a4";
    document.getElementById("lucky-button").style.border = "3px solid #a6a4a4";
    document.getElementById("righttab").style.backgroundColor = "#a6a4a4";
    document.getElementById("righttab").style.border = "3px solid #a6a4a4";
    document.getElementById("lefttab").style.backgroundColor = "#a6a4a4";
    document.getElementById("lefttab").style.border = "3px solid #a6a4a4";
}
const draggableDiv = document.getElementById('draggable-div');
const dragHandle = document.getElementById('drag-handle');
let isDragging = false;
let startY;
let startBottom;
dragHandle.addEventListener('mousedown', startDragging);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', stopDragging);
dragHandle.addEventListener('touchstart', startDragging);
document.addEventListener('touchmove', drag);
document.addEventListener('touchend', stopDragging);
function startDragging(e) {
    isDragging = true;
    startY = e.clientY || e.touches[0].clientY;
    startBottom = parseInt(window.getComputedStyle(draggableDiv).bottom);
    e.preventDefault();
}
function drag(e) {
    if (!isDragging) return;
    const currentY = e.clientY || e.touches[0].clientY;
    const deltaY = startY - currentY;
    let newBottom = startBottom + deltaY;
    // Limit the draggable area
    newBottom = Math.max(-300, Math.min(newBottom, 0));
    draggableDiv.style.bottom = `${newBottom}px`;
}
function stopDragging() {
    isDragging = false;
}
//calander fnctions
function generateCalendar() {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const currentDay = now.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    document.getElementById('currentMonth').textContent = `${monthNames[currentMonth]} ${currentYear}`;
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    let calendarHTML = '';

    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarHTML += '<div class="empty"></div>';
    }
    for (let day = 1; day <= daysInMonth; day++) {
        if (day === currentDay) {
            calendarHTML += `<div class="today">${day}</div>`;
        } else {
            calendarHTML += `<div>${day}</div>`;
        }
    }
    const totalDays = firstDayOfMonth + daysInMonth;
    const remainingSlots = 7 - (totalDays % 7);
    if (remainingSlots < 7) {
        for (let i = 0; i < remainingSlots; i++) {
            calendarHTML += '<div class="empty"></div>';
        }
    }
    document.getElementById('calendarDays').innerHTML = calendarHTML;
}
generateCalendar();
function handleSliderChange(value) {
    document.getElementById('assignments').style.opacity = (value/10);
  // Perform actions based on the new value
}
function changeurl(value) {
    document.getElementById('draggable').src = value;
}
function createE() {
    Element = document.getElementById('text2').value;
    Eid = document.getElementById('text3').value;
    const para = document.createElement(Element);
    para.id = Eid;
    const source = document.getElementById("customm");
    source.appendChild(para);
}

function EditE() {
    string = "document.getElementById('" + document.getElementById('text4').value + "')." + document.getElementById('text5').value + " = '" + document.getElementById('text6').value + "';";
    console.log(string);

    createNewScript(string);
}

function createNewScript(code) {
  const script = document.createElement('script');
  script.textContent = code;
  document.body.appendChild(script);
}

const panel = document.getElementById('panel');
let isPanelOpen = false;


document.addEventListener('keydown', function(event) {
    if (event.key.toLowerCase() === 'n') {
        isPanelOpen = !isPanelOpen;
        if (isPanelOpen) {
            panel.classList.add('open');
        } else {
            panel.classList.remove('open');
        }
    }
});