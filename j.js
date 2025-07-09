const subjectpopup = document.getElementById("subject-popup");
const timetable = document.getElementById("timetable-grid");

var monday = 22;
var tuesday = 24;
var wednesday = 26;
var thursday = 28;
var friday = 30;

var buttonpressed;

// in half hrs
var timeleft = {"BREAK": 17};
["PC", "CM", "BL", "CS", "DV", "HU", "PE", "AR_MU", "ELECTIVE"].forEach(key => timeleft[key] = 4);
["EL", "CCA", "CAM"].forEach(key => timeleft[key] = 8);
["MT", "MA"].forEach(key => timeleft[key] = 6);

function showpopup(day) {
  subjectpopup.style.display = "block";
  buttonpressed = day;
}

function addsubject(name) {
  const newDiv = document.createElement("div");
  newDiv.textContent = name;
  newDiv.className = name;
  newDiv.style.color = "black";
  subjectpopup.style.display = "none";
  timeleft[name]--;

  if (buttonpressed == 1) {
    timetable.insertBefore(newDiv, timetable.children[monday]);
    monday++;
    tuesday++;
    wednesday++;
    thursday++;
    friday++;
  }
  if (buttonpressed == 2) {
    timetable.insertBefore(newDiv, timetable.children[tuesday]);
    tuesday++;
    wednesday++;
    thursday++;
    friday++;
  }
  if (buttonpressed == 3) {
    timetable.insertBefore(newDiv, timetable.children[wednesday]);
    wednesday++;
    thursday++;
    friday++;
  }
  if (buttonpressed == 4) {
    timetable.insertBefore(newDiv, timetable.children[thursday]);
    thursday++;
    friday++;
  }
  if (buttonpressed == 5) {
    timetable.insertBefore(newDiv, timetable.children[friday]);
    friday++;
  }

  if (timeleft[name] == 0) {
    document.getElementById(name).disabled = true;
  }
}