function parseQuery(queryString) {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get("name");
  const date = urlParams.get("date");
  const gender = urlParams.get("gender");

  getPrediction(name, date, gender);
}

function getZodiacSign(day, month) {
  var zodiacSigns = {
    capricorn: "Capricornio",
    aquarius: "Aquario",
    pisces: "Piscis",
    aries: "Aries",
    taurus: "Тauro",
    gemini: "Geminis",
    cancer: "Cancer",
    leo: "Leo",
    virgo: "Virgo",
    libra: "Libra",
    scorpio: "Escorpio",
    sagittarius: "Sagitario",
  };

  if ((month == 0 && day <= 20) || (month == 11 && day >= 22)) {
    return zodiacSigns.capricorn;
  } else if ((month == 0 && day >= 21) || (month == 1 && day <= 18)) {
    return zodiacSigns.aquarius;
  } else if ((month == 1 && day >= 19) || (month == 2 && day <= 20)) {
    return zodiacSigns.pisces;
  } else if ((month == 2 && day >= 21) || (month == 3 && day <= 20)) {
    return zodiacSigns.aries;
  } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    return zodiacSigns.taurus;
  } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    return zodiacSigns.gemini;
  } else if ((month == 5 && day >= 22) || (month == 6 && day <= 22)) {
    return zodiacSigns.cancer;
  } else if ((month == 6 && day >= 23) || (month == 7 && day <= 23)) {
    return zodiacSigns.leo;
  } else if ((month == 7 && day >= 24) || (month == 8 && day <= 23)) {
    return zodiacSigns.virgo;
  } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
    return zodiacSigns.libra;
  } else if ((month == 9 && day >= 24) || (month == 10 && day <= 22)) {
    return zodiacSigns.scorpio;
  } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
    return zodiacSigns.sagittarius;
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function getPrediction(name, date, gender) {
  var signos = {
    Capricornio: "♑️",
    Aquario: "♒️",
    Piscis: "♓️",
    Aries: "♈️",
    Тauro: "♉️",
    Geminis: "♊️",
    Cancer: "♋️",
    Leo: "♌️",
    Virgo: "♍️",
    Libra: "♎️",
    Escorpio: "♏️",
    Sagitario: "♐️",
  };
  let birthdate = new Date(date);
  const sign = getZodiacSign(birthdate.getDay(), birthdate.getMonth());
  const predictions = readings[sign];
  const index = getRandomIntInclusive(0, 1);
  document.getElementById("name").innerHTML = name;
  document.getElementById("sign").innerHTML = sign;
  document.getElementById("prediction").innerHTML = predictions[index];

  console.log(signos[index]);
  document.getElementById("signo").innerHTML = signos[sign];
}
parseQuery(window.location.search);
