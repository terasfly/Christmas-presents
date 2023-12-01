const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const image4 = document.getElementById('image4')

const images = document.querySelectorAll('.image-class')




const memberMatas = document.getElementById('member--matas')


const matas = [
    'images/matas/x.jpg',
    'images/matas/xbo.jpg',
    'images/matas/xb.jpg',
    'images/face1.jpg'
]

images.forEach(allImages => {

    memberMatas.addEventListener('click', () => {
        allImages.addEventListener('click', changeImage)
    })
});

function changeImage() {
    const randomNumber = Math.floor(Math.random() * matas.length)
    console.log(randomNumber)
    this.src = matas[randomNumber];


}


// image1.addEventListener('click', () => {
//     image1.src = matas.image1
// })
// image2.addEventListener('click', () => {
//     image2.src = matas.image2
// })


// rightBtn.addEventListener('click', () => {
//     scrollAmount = 0;
//     let slideTimer = setInterval(() => {
//         slider.scrollLeft += 10
//             // after press button left slides move
//         scrollAmount += 10
//         if (scrollAmount >= 300) {
//             window.clearInterval(slideTimer)
//                 // if press button imediatly clear slidetimer
//         }
//     }, 25)
// })

// leftBtn.addEventListener('click', () => {
//         scrollAmount = 0;
//         let slideTimer = setInterval(() => {
//             slider.scrollLeft -= 10
//                 // after press button left slides move
//             scrollAmount += 10
//             if (scrollAmount >= 300) {
//                 window.clearInterval(slideTimer)
//                     // if press button imediatly clear slidetimer
//             }
//         }, 25)
//     })
//     // Slider width values
// function sw() {
//     alert()
// }


// auto play function



// document.addEventListener('DOMContentLoaded', function() {
//     const snowflakes = document.querySelectorAll('.snowflake');

//     // Initial snowflake settings
//     snowflakes.forEach(snowflake => {
//         setSnowflakeInitialProperties(snowflake);
//     });

//     // Function to gradually increase speed
//     function increaseSpeedGradually() {
//         snowflakes.forEach(snowflake => {
//             let currentDuration = parseFloat(snowflake.style.animationDuration);
//             if (currentDuration > 2) { // Minimum duration limit (2s in this case)
//                 snowflake.style.animationDuration = `${currentDuration - 0.1}s`; // Reduce duration gradually
//             }
//         });
//     }

//     // Call the function every 1 second
//     const increaseSpeedInterval = setInterval(increaseSpeedGradually, 1000);

//     // Optional: Clear interval after a certain time if needed
//     setTimeout(() => {
//         clearInterval(increaseSpeedInterval);
//     }, 15000); // Stop increasing speed after 10 seconds

//     function setSnowflakeInitialProperties(snowflake) {
//         snowflake.style.left = Math.random() * 100 + '%';
//         snowflake.style.opacity = Math.random();
//         snowflake.style.fontSize = Math.random() * (20 - 8) + 50 + 'px';
//         snowflake.style.animationDuration = 8 + Math.random() * 5 + 's'; // Initial falling duration
//         snowflake.style.animationDelay = Math.random() * 5 + 's';
//     }
// });



// document.addEventListener('DOMContentLoaded', function() {
//     const snowflakesContainer = document.querySelector('.snowflakes');
//     const snowBottom = document.createElement('div');
//     snowBottom.classList.add('snow-bottom');
//     document.body.appendChild(snowBottom);

//     setInterval(() => {
//         const maxHeight = 1000; // Maximum height of snow
//         const increase = 1; // Height increase per interval
//         const currentHeight = parseInt(getComputedStyle(snowBottom).height, 10);
//         if (currentHeight < maxHeight) {
//             snowBottom.style.height = `${currentHeight + increase}px`;
//         }
//     }, 1000); // Time interval in milliseconds
// });
