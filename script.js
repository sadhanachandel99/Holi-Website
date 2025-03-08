// document.getElementById('throwColor').addEventListener('click', () => {
//     throwColors();
// });

// function throwColors() {
//     const colorsContainer = document.querySelector('.colors');
//     const colors = ['#ff6f61', '#ffcc00', '#00ccff', '#ff00ff', '#6f61ff', '#ccff00'];

//     for (let i = 0; i < 50; i++) {
//         const color = document.createElement('div');
//         color.classList.add('color');
//         color.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
//         color.style.left = `${Math.random() * 100}vw`;
//         color.style.animationDuration = `${Math.random() * 5 + 10}s`;
//         colorsContainer.appendChild(color);

//         setTimeout(() => {
//             color.remove();
//         }, 2000);
//     }
// }



// new changes


// document.getElementById('throwColor').addEventListener('click', () => {
//     throwColors();
// });

// function throwColors() {
//     const colorsContainer = document.querySelector('.colors');
//     const colors = ['#ff6f61', '#ffcc00', '#00ccff', '#ff00ff', '#6f61ff', '#ccff00'];

//     // Clear existing colors before throwing new ones
//     colorsContainer.innerHTML = '';

//     // Generate color particles for the full screen
//     for (let i = 0; i < 100; i++) { // Increase the number of particles
//         const color = document.createElement('div');
//         color.classList.add('color');

        // Randomize color
        // color.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // // Randomize position
        // color.style.left = `${Math.random() * 100}vw`;
        // color.style.top = `${Math.random() * 100}vh`;

        // // Randomize size
        // const size = Math.random() * 30 + 10; // Size between 10px and 40px
        // color.style.width = `${size}px`;
        // color.style.height = `${size}px`;

        // // Randomize animation duration
        // color.style.animationDuration = `${Math.random() * 2 + 1}s`;

        // Add particle to the container
        // colorsContainer.appendChild(color);

        // Remove particle after animation ends
        // setTimeout(() => {
            // color.remove();
        // }, 2000); // Match this with the animation duration
    // }
// }






document.getElementById('throwColor').addEventListener('click', () => {
    throwColors();
});

function throwColors() {
    const colorsContainer = document.querySelector('.colors');
    const colors = ['#ff6f61', '#ffcc00', '#00ccff', '#ff00ff', '#6f61ff', '#ccff00'];

    // Clear existing colors before throwing new ones
    colorsContainer.innerHTML = '';

    // Generate color particles for the full screen
    for (let i = 0; i < 100; i++) {
        const color = document.createElement('div');
        color.classList.add('color');

        // Randomize color
        color.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // Randomize position
        color.style.left = `${Math.random() * 100}vw`;
        color.style.top = `${Math.random() * 100}vh`;

        // Randomize size
        const size = Math.random() * 30 + 10; // Size between 10px and 40px
        color.style.width = `${size}px`;
        color.style.height = `${size}px`;

        // Randomize animation duration
        color.style.animationDuration = `${Math.random() * 2 + 1}s`;

        // Add particle to the container
        colorsContainer.appendChild(color);

        // Remove particle after animation ends
        setTimeout(() => {
            color.remove();
        }, 2000); // Match this with the animation duration
    }
}