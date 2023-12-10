// Image Elements
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');

// Flags to control image changes
let canChangeImageMatas = false;
let canChangeImageLaura = false;
let canChangeImageEgle = false;

// Image index counters for each member
let currentIndexMatas = 0;
let currentIndexEgle = 0;
let currentIndexLaura = 0;

// Member Elements
const memberMatas = document.getElementById('member--matas');
const memberLaura = document.getElementById('member--laura');
const memberEgle = document.getElementById('member--egle');

// Image class elements
const imagesLaura = document.querySelectorAll('.image-class');
const images = document.querySelectorAll('.image-class');
const imagesEgle = document.querySelectorAll('.image-class');

// Image arrays for each member
const lauraImages = [
    'matas/m&ms.png',
    'matas/m&ms.png',
    'matas/m&ms.png',
    'laura/astronaut.png',

];

const egleImages = [
    'matas/m&ms.png',
    'egle/massage.png',
    'egle/lupdazis.png',
    'egle/coffe.png'
];
// member button active
// Select all elements with the class 'member'
const members = document.querySelectorAll('.member');

// Function to remove 'clicked' class from all members
function removeClickedClass() {
    members.forEach(member => {
        member.classList.remove('clicked');
    });
}

// Add a click event listener to each member
members.forEach(member => {
    member.addEventListener('click', function() {
        // Remove 'clicked' class from all members
        removeClickedClass();

        // Add 'clicked' class to the clicked member
        this.classList.add('clicked');
    });
});



// Egle setup
// Enable image changing when Egle is clicked
memberEgle.addEventListener('click', () => {
    canChangeImageEgle = true;
});

// Handle image clicks for Egle
images.forEach(image => {
    image.addEventListener('click', () => {
        if (canChangeImageEgle) {
            changeImageIndexEgle(image);
            canChangeImageEgle = false;
        }
    });
});

// Function to change Egle's image
function changeImageIndexEgle(imageElement) {
    if (currentIndexEgle < egleImages.length) {
        imageElement.src = egleImages[currentIndexEgle];
        currentIndexEgle += 1;
    } else {
        currentIndexEgle = 0;
        imageElement.src = egleImages[currentIndexEgle];
    }
}

// Laura setup
// Enable image changing when Laura is clicked
memberLaura.addEventListener('click', () => {
    canChangeImageLaura = true;
});

// Handle image clicks for Laura
imagesLaura.forEach(image => {
    image.addEventListener('click', () => {
        if (canChangeImageLaura) {
            changeImageIndexLaura(image);
            canChangeImageLaura = false;
        }
    });
});

// Function to change Laura's image
function changeImageIndexLaura(imageElement) {
    if (currentIndexLaura < lauraImages.length) {
        imageElement.src = lauraImages[currentIndexLaura];
        currentIndexLaura += 1;
    } else {
        currentIndexLaura = 0;
        imageElement.src = lauraImages[currentIndexLaura];
    }
}

// Matas setup
// Image array for Matas
const matasImages = [
    'matas/m&ms.png',
    'matas/netflix.png',
    'matas/poundgift.png',
    'matas/charger.png'
];

// Enable image changing when Matas is clicked
memberMatas.addEventListener('click', () => {
    canChangeImageMatas = true;
});

// Handle image clicks for Matas
images.forEach(image => {
    image.addEventListener('click', () => {
        if (canChangeImageMatas) {
            changeImageMatas(image);
            canChangeImageMatas = false;
        }
    });
});

// Function to change Matas's image
function changeImageMatas(imageElement) {
    if (currentIndexMatas < matasImages.length) {
        imageElement.src = matasImages[currentIndexMatas];
        currentIndexMatas += 1;
    } else {
        currentIndexMatas = 0;
        imageElement.src = matasImages[currentIndexMatas];
    }
}

// Snow animation setup
document.addEventListener('DOMContentLoaded', function() {
    const snowflakes = document.querySelectorAll('.snowflake');

    // Set initial properties for each snowflake
    snowflakes.forEach(snowflake => {
        setSnowflakeInitialProperties(snowflake);
    });

    // Gradually increase the speed of the snowflakes
    function increaseSpeedGradually() {
        snowflakes.forEach(snowflake => {
            let currentDuration = parseFloat(snowflake.style.animationDuration);
            if (currentDuration > 2) {
                snowflake.style.animationDuration = `${currentDuration - 0.1}s`;
            }
        });
    }

    // Increase speed every 1 second
    const increaseSpeedInterval = setInterval(increaseSpeedGradually, 1000);

    // Stop increasing speed after 15 seconds
    setTimeout(() => {
        clearInterval(increaseSpeedInterval);
    }, 15000);

    // Set initial properties for snowflakes
    function setSnowflakeInitialProperties(snowflake) {
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = `${Math.random() * (20 - 8) + 50}px`;
        snowflake.style.animationDuration = `${8 + Math.random() * 5}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
    }
});

// Accumulating snow effect
document.addEventListener('DOMContentLoaded', function() {
    const snowflakesContainer = document.querySelector('.snowflakes');
    const snowBottom = document.createElement('div');
    snowBottom.classList.add('snow-bottom');
    document.body.appendChild(snowBottom);

    // Gradually increase the height of the accumulated snow
    setInterval(() => {
        const maxHeight = 100; // Maximum height of snow
        const increase = 1; // Height increase per interval
        const currentHeight = parseInt(getComputedStyle(snowBottom).height, 10);
        if (currentHeight < maxHeight) {
            snowBottom.style.height = `${currentHeight + increase}px`;
        }
    }, 1000);
});

// JavaScript to handle the click event
// document.addEventListener('DOMContentLoaded', function() {
//     const members = document.querySelectorAll('.family-members .member');

//     members.forEach(member => {
//         member.addEventListener('click', function() {
//             // Remove the active class from all members
//             members.forEach(m => m.classList.remove('member-active'));

//             // Add the active class to the clicked member
//             this.classList.add('member-active');
//         });
//     });
// });
