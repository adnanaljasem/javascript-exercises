// two ways : if (){} else{} && switch () {case:); break; default:;}

let day = prompt("please enter a day");
day.toLowerCase();

/*if (day === "monday") {
  alert("Montag");
} else if (day === "tuesday") {
  alert("Dienstag");
} else if (day === "wednesday") {
  alert("Mittwoch");
} else if (day === "thursday") {
  alert("Donnerstag");
} else if (day === "friday") {
  alert("Freitag");
} else if (day === "saturday") {
  alert("Samstag");
} else if (day === "sunday") {
  alert("Sonntag");
} else {
  alert("please enter a day");
}
*/

switch (day) {
  case "monday":
    alert("Montag");
    break;
  case "tuesday":
    alert("Dienstag");
    break;
  case "wednesday":
    alert("Mittwoch");
    break;
  case "thursday":
    alert("Donerstag");
    break;
  case "friday":
    alert("Freitag");
    break;
  case "saturday":
    alert("Samstag");
    break;
  case "sunday":
    alert("Sonntag");
    break;
  default:
    alert("please enter a day");
}
