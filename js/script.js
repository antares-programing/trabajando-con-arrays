// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];
const arrayBtn = document.getElementById("arrayChart");
const functionBtn = document.getElementById("functionChart");
const integerBtn = document.getElementById("intChart");
const stringBtn = document.getElementById("stringChart");

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}
function mostrarStrings(array) {
  const stringElements = [];
  for (element of array) {
      if (typeof element === "string") {
       stringElements.push(element);
      }
  }
  stringElements.sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));
  showList(stringElements)
}

function mostrarIntegers(array) {
  const stringElements = [];
  for (element of array) {
      if (typeof element === "number") {
       stringElements.push(element);
      }
  }
  showList(stringElements)
}

function mostrarArray(array) {
  const arrayElements = [];
  for (element of array) {
      if (Array.isArray(element)) {
       arrayElements.push(element);
      }
  }
  showList(arrayElements)
}

function mostrarFunction(array) {
  const functionElements = [];
  for (element of array) {
      if (typeof element === "function") {
       functionElements.push(element);
      }
  }
  showList(functionElements)
}

stringBtn.addEventListener("click", ()=> {
  mostrarStrings(strangeArray)
});
integerBtn.addEventListener("click", function () {
  mostrarIntegers(strangeArray)
});
arrayBtn.addEventListener("click", function () {
  mostrarArray(strangeArray)
});
functionBtn.addEventListener("click", function () {
  mostrarFunction(strangeArray)
});
  // Escribe tu solución aquí
  // Sugerencia de cómo mostrar el array => showList(strangeArray);

