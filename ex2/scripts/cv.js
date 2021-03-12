function parseQuery(queryString) {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const age  = urlParams.get('age');
    const uni = urlParams.get('uni');
    const career = urlParams.get('career');
    const english = urlParams.get('languages1');
    const german = urlParams.get('languages2');
    const french = urlParams.get('languages3');
    const japanese = urlParams.get('languages4');
    const mandarin = urlParams.get('languages5');
    const web = urlParams.get('skills1');
    const backend = urlParams.get('skills2');
    const systems = urlParams.get('skills3');
    const jvm = urlParams.get('skills4');
    const mobile = urlParams.get('skills5');
    const englishLevel = urlParams.get('english');

    document.getElementById("name").innerHTML = name;
    document.getElementById("age").innerHTML = age;
    document.getElementById("uni").innerHTML = uni;
    document.getElementById("career").innerHTML = career;
    document.getElementById("languages1").innerHTML = english === 'on' ? 'Inglés' : '';
    document.getElementById("languages2").innerHTML = german === 'on' ? 'Alemán' : '';;
    document.getElementById("languages3").innerHTML = french === 'on' ? 'Francés' : '';;
    document.getElementById("languages3").innerHTML = japanese === 'on' ? 'Japonés' : '';;
    document.getElementById("languages5").innerHTML = mandarin === 'on' ? 'Mandarín' : '';;
    document.getElementById("skills1").innerHTML = web === 'on' ? 'Web/Frontend' : '';
    document.getElementById("skills2").innerHTML = backend === 'on' ? 'Backend/Scripting' : '';
    document.getElementById("skills3").innerHTML = systems === 'on' ? 'Sistemas' : '';
    document.getElementById("skills4").innerHTML = jvm === 'on' ? 'JVM' : '';
    document.getElementById("skills5").innerHTML = mobile === 'on' ? 'Móvil' : '';
    document.getElementById("english").innerHTML = englishLevel;
}

parseQuery();
