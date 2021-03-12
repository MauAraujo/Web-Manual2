let title;
let author;
let sculpture;
let arquitecture;
let painting;
let disponibility;
let style;
let comments;

function setValues() {
  document.getElementById("title").innerHTML = title;
  document.getElementById("author").innerHTML = author;

  if (sculpture) {
    let sculptureLabel = document.createElement("span");
    sculptureLabel.className = "label";
    sculptureLabel.innerHTML = sculpture;
    document.getElementById("labels").appendChild(sculptureLabel);
  }
  if (arquitecture) {
    let arquitectureLabel = document.createElement("span");
    arquitectureLabel.className = "label";
    arquitectureLabel.innerHTML = arquitecture;
    document.getElementById("labels").appendChild(arquitectureLabel);
  }
  if (painting) {
    let paintingLabel = document.createElement("span");
    paintingLabel.className = "label";
    paintingLabel.innerHTML = painting;
    document.getElementById("labels").appendChild(paintingLabel);
  }

  let styleLabel = document.createElement("span");
  styleLabel.className = "label";
  styleLabel.innerHTML = style;
  document.getElementById("labels").appendChild(styleLabel);

  document.getElementById("disponibility").innerHTML =
    disponibility == "public" ? "🔓 Público" : "🔒 Privado";

  document.getElementById("comments").innerHTML = comments.trim()
    ? comments
    : "Sin Comentarios";
}

function parseQuery() {
  const urlParams = new URLSearchParams(window.location.search);
  title = urlParams.get("title");
  author = urlParams.get("author");
  sculpture = urlParams.get("sculpture");
  arquitecture = urlParams.get("arquitecture");
  painting = urlParams.get("painting");
  disponibility = urlParams.get("disponibility");
  style = urlParams.get("style");
  comments = urlParams.get("comments");

  console.table({
    title,
    author,
    sculpture,
    arquitecture,
    painting,
    disponibility,
    style,
    comments,
  });
  setValues();
}

parseQuery();

function goHome() {
  window.location.replace("index.html");
}
