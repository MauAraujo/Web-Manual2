let student = "";
let teacher = "";
let day = "";
let hour = "";
let subject = "";

function setValues() {
  document.getElementById("student").innerHTML = student;
  document.getElementById("teacher").innerHTML = teacher;
  document.getElementById("day").innerHTML = day;
  document.getElementById("hour").innerHTML = `${hour} hrs.`;
  document.getElementById("subject").innerHTML = subject;
}

function obtenerDatos() {
  const urlParams = new URLSearchParams(window.location.search);
  student = urlParams.get("student");
  teacher = urlParams.get("teacher");
  day = urlParams.get("day");
  hour = urlParams.get("hour");
  subject = urlParams.get("subject");

  console.table({
    student,
    teacher,
    day,
    hour,
    subject,
  });
  setValues();
}

function goHome() {
  window.location.replace("index.html");
}
obtenerDatos();
