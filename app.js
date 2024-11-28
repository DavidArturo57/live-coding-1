function bigWords(inputString, inputArray) {
    return inputArray.filter(word => word.length > inputString.length);
}


const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
const resul = bigWords('bocina', myArray);
console.log(resul);


function printArray(inputArray) {
    // Seleccionar el elemento <ul> del DOM
    const ulElement = document.querySelector('ul');
    
    // Limpiar contenido previo de la lista (opcional)
    ulElement.innerHTML = '';
    
    // Crear y agregar elementos <li> para cada string del array
    inputArray.forEach(item => {
        const liElement = document.createElement('li');
        liElement.textContent = item;
        ulElement.appendChild(liElement);
    });
}

const filteredArray = bigWords('bocina', myArray);
printArray(filteredArray);


document.getElementById('filterButton').addEventListener('click', () => {
    const userInput = document.getElementById('userInput').value.trim();
    if (userInput) {
        const filteredWords = bigWords(userInput, myArray);
        printArray(filteredWords);
    } else {
        alert('Por favor, ingresa una palabra para filtrar.');
    }
});