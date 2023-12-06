const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const image4 = document.getElementById('image4')


let canChangeImageMatas = false
let canChangeImageLaura = false
let canChangeImageEgle = false

const memberMatas = document.getElementById('member--matas')



const memberLaura = document.getElementById('member--laura')
const memberEgle = document.getElementById('member--egle')

const imagesLaura = document.querySelectorAll('.image-class')
const images = document.querySelectorAll('.image-class');
const imagesEgle = document.querySelectorAll('.image-class');
// laura setup 

const laura = [

    'images/matas/m&ms.png',
    'images/face1.jpg',
    'images/face1.jpg',
    'images/face1.jpg'
]
const egle = [

    'images/matas/m&ms.png',
    'images/face2.jpg',
    'images/face2.jpg',
    'images/face2.jpg'
]
memberLaura.addEventListener('click', () => {
    canChangeImageLaura = true

})
memberEgle.addEventListener('click', () => {
    canChangeImageEgle = true

})

images.forEach(image => {
    image.addEventListener('click', () => {
        if (canChangeImageEgle) {
            changeImageEgle.call(image)
            canChangeImageEgle = false
        }
    })

});

function changeImageEgle() {
    const randomNumber = Math.floor(Math.random() * egle.length);
    this.src = egle[randomNumber];
}


imagesLaura.forEach(image => {
    image.addEventListener('click', () => {
        if (canChangeImageLaura) {
            changeImageLaura.call(image)
            canChangeImageLaura = false
        }
    })
});


function changeImageLaura() {
    const randomNumber = Math.floor(Math.random() * laura.length);
    this.src = laura[randomNumber];
}


const matas = [
    'images/matas/m&ms.png',
    'images/matas/netflix.png',
    'images/matas/poundgift.png',
    'images/matas/xbox.jpg'




]



memberMatas.addEventListener('click', () => {

    canChangeImageMatas = true; // Nustatome flag į true paspaudus ant memberMatas
});



images.forEach(image => {
    image.addEventListener('click', () => {
        if (canChangeImageMatas) {
            changeImage.call(image); // Iškviečiame changeImage su tinkama konteksto nuoroda
            canChangeImageMatas = false; // Nustatome flag atgal į false
        }
    });
});

function changeImage() {
    const randomNumber = Math.floor(Math.random() * matas.length);
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



document.addEventListener('DOMContentLoaded', function() {
    const snowflakes = document.querySelectorAll('.snowflake');

    // Initial snowflake settings
    snowflakes.forEach(snowflake => {
        setSnowflakeInitialProperties(snowflake);
    });

    // Function to gradually increase speed
    function increaseSpeedGradually() {
        snowflakes.forEach(snowflake => {
            let currentDuration = parseFloat(snowflake.style.animationDuration);
            if (currentDuration > 2) { // Minimum duration limit (2s in this case)
                snowflake.style.animationDuration = `${currentDuration - 0.1}s`; // Reduce duration gradually
            }
        });
    }

    // Call the function every 1 second
    const increaseSpeedInterval = setInterval(increaseSpeedGradually, 1000);

    // Optional: Clear interval after a certain time if needed
    setTimeout(() => {
        clearInterval(increaseSpeedInterval);
    }, 15000); // Stop increasing speed after 10 seconds

    function setSnowflakeInitialProperties(snowflake) {
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = Math.random() * (20 - 8) + 50 + 'px';
        snowflake.style.animationDuration = 8 + Math.random() * 5 + 's'; // Initial falling duration
        snowflake.style.animationDelay = Math.random() * 5 + 's';
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const snowflakesContainer = document.querySelector('.snowflakes');
    const snowBottom = document.createElement('div');
    snowBottom.classList.add('snow-bottom');
    document.body.appendChild(snowBottom);

    setInterval(() => {
        const maxHeight = 100; // Maximum height of snow
        const increase = 1; // Height increase per interval
        const currentHeight = parseInt(getComputedStyle(snowBottom).height, 10);
        if (currentHeight < maxHeight) {
            snowBottom.style.height = `${currentHeight + increase}px`;
        }
    }, 1000); // Time interval in milliseconds
});
