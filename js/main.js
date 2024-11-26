// Vytvor novu kartu do ol/li v content sekcii z buttonu v header class="add-new"

// Pretvor svg na input, ktory po kliknuti zrusi ulohu v content sekcii a presunie ju do ukoncenych
// pripocita sa do spanu v nave

// Po kliknuti na nav v sekcii sidebar, sa otvori okno z ulohami v content sekcii

// Search funkcia vyhlada ulohu 



function createNewTask (text) {
    const newTask = document.createElement('li');

    newTask.innerHTML = `
    <label>
        <input type="checkbox"></input>
        <span class="custom-checkbox"></span>
    </label>
    <p>${text}</p>
    `;


    const checkbox = newTask.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function() {
        if(checkbox.checked) {
            newTask.classList.add('finished');
        } else {
            newTask.classList.remove('finished');
        }
    });

    const container = document.querySelector('ol');
    container.appendChild(newTask);

}

document.querySelector(' .add-new button').addEventListener('click', function () {
    const taskText = prompt("ADD NEW TASK:");
    if (taskText) {
        createNewTask(taskText);
    }
});