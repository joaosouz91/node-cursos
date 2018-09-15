var categoria = [
    { "description": "Desenvolvimento" }, 
    { "description": "Negócios" },
    { "description": "Estilo de Vida" }, 
    { "description": "Desenvolvimento Pessoal" }, 
    { "description": "Design" }, 
    { "description": "Música" }
];

var list = document.getElementById("listCategoria");

function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function showSubject() {
    clearList();
    for (var i = 0; i < categoria.length; i++) {
        var option = document.createElement("option");
        option.textContent = categoria[i].description;
        option.setAttribute("value", categoria[i].description);
        list.appendChild(option);
    }
}

showSubject();