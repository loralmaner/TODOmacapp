// Vytvor novu kartu do ol/li v content sekcii z buttonu v header class="add-new"

// Pretvor svg na input, ktory po kliknuti zrusi ulohu v content sekcii a presunie ju do ukoncenych
// pripocita sa do spanu v nave

// 

// Po kliknuti na nav v sekcii sidebar, sa otvori okno z ulohami v content sekcii

// Search funkcia vyhlada ulohu 




// VYTVORENIE NOVEJ ULOHY 
document.addEventListener("DOMContentLoaded", function() {
    // Funkcia na vytvorenie novej úlohy
    function createNewTask(text) {
        const newTask = document.createElement('li');

        newTask.innerHTML = `
            <p>${text}</p>
        `;

        const checkbox = newTask.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                // Presun úlohy do sekcie "Finished"
                const finishedSection = document.querySelector('.finished-tasks');
                finishedSection.appendChild(newTask);

            } else {
                // Presun úlohy do sekcie "Active"
                const activeSection = document.querySelector('.active-tasks');
                activeSection.appendChild(newTask);
            }
        });

        // Začiatočne pridáme úlohu do sekcie "Active"
        const activeSection = document.querySelector('.active-tasks');
        activeSection.appendChild(newTask);
    }

    // Pridanie novej úlohy po kliknutí na tlačidlo "+"
    document.querySelector('.add-new button').addEventListener('click', function () {
        const taskText = prompt("ADD NEW TASK:");
        if (taskText) {
            createNewTask(taskText);
        }
    });
});




// NAV ITEMS - CONTENT WINDOW

document.addEventListener('DOMContentLoaded', function () {
    // Teraz je DOM načítaný a skript môže manipulovať s elementmi
    const navItems = document.querySelectorAll('.nav-item'); // Vyberieme vsetky odkazy v nav
    const contentSections = document.querySelectorAll('.title h1'); // Vyberieme vsetky h1 v title


    //Predtym nez nieco nastane skryjeme vsetky sekcie, upravujeme tym vlastne css
    contentSections.forEach(section => {
        section.style.display = 'none';
    });


    // Predvolený stav - zobrazíme "Active"
    document.querySelector('.active-content').style.display = 'block';



    navItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Zabránime predvolenému správaní odkazu

            const target = item.getAttribute('data-target');
            
             contentSections.forEach(section => {
                section.style.display = 'none';

            });

            const targetSection = document.querySelector(`h1.${target}-content`);

            if (targetSection) {
                targetSection.style.display = 'block';
            }

            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });
});



