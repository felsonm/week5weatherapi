console.log('javascript connected!');

const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 2000,
    pause: false
})

const carouselButton = document.getElementById('carouselButton');
const faIcon = document.getElementById('faButton');

carouselButton.addEventListener('click', function () {
    if (faIcon.classList.contains('fa-pause')) {
        faIcon.classList.remove('fa-pause');
        faIcon.classList.add('fa-play');
        carousel.pause();
    } else {
        faIcon.classList.remove('fa-play');
        faIcon.classList.add('fa-pause');
        carousel.cycle();
    }
})

// scripts.js

// Define the fetchWeather function
async function fetchWeather() {
    // Assign your API key and city
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const city = "State College"; // Replace with the desired city name

    // Construct the URL using template literals
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    try {
        // Fetch data from the API
        const response = await fetch(url);

        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Weather data could not be fetched.');
        }

        // Parse the JSON data from the response
        const data = await response.json();

        // Log the weather data
        console.log(data);

        // You can now work with the 'data' object containing weather information
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Call the fetchWeather function
fetchWeather();

function displayWeather(weatherData) {
    const temperature = weatherData.main.temp;
    const description = weatherData.weather[0].description;
    const icon = weatherData.weather[0].icon;

    // Create and append image element
    const imageElement = document.createElement('img');
    imageElement.src = `https://openweathermap.org/img/w/${icon}.png`;
    // Append the image element to an appropriate container
    document.getElementById('icon-container').appendChild(imageElement);

    // Display temperature
    const temperatureElement = document.getElementById('temperature');
    temperatureElement.textContent = `${temperature} \u00B0`;

    // Display weather description
    const descriptionElement = document.getElementById('description');
    descriptionElement.textContent = description;
}

// Call function
displayWeather();