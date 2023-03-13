// DOM query on the buttons
const buttons = document.querySelectorAll('.counterBtn');

// variable for the counter value:
let counter = 0;

// Eventlistener for the buttons:
buttons.forEach(function(button){
    button.addEventListener('click', counterFunction)

    function counterFunction(){
        // Hvis der er klikket på minus: 'counter--' / det samme som counter = counter - 1
        if(button.classList.contains('minus')) {
            counter--;
        } else if(button.classList.contains('plus')) {
            counter++;  // same as: counter = counter + 1
        }
        console.log(counter);

        // DOM query for the h2:
        const value = document.querySelector('.value');
        // update the textContent of the h2
        value.textContent = counter;

        // Hint til opgave 6:
        // Style color like this: value.style.color = 'red'

    }

});

