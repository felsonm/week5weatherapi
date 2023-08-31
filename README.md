# week5weatherapi



Assignment Tasks

    Set up the HTML for the weather component
    Secure your API key
    Write the JavaScript to fetch weather data
    Display the weather data in the weather box
    Add the SCSS partial to style the weather box
    Test your code



Task 1: Set up the HTML

    Open your nucampsite project folder in VS Code, then open index.html.
    Inside the navbar, locate the <ul> that contains the nav-links.
    Just below the </ul> closing tag, and before the <span> for the login modal, add this code:

    <!-- Weather Component -->
    <div id="weather" class="d-none d-md-flex align-items-center">
        <i id="weather-icon"></i>
        <span id="weather-temp"></span>
        <span id="weather-description" class="d-none d-lg-inline"></span>
    </div>


        Note that this code has three empty elements containing ids, which you can target through DOM manipulation to pull your API data into your UI.

    Below the footer, locate the script tag that links to your javascript file, and update it like this:

    <script src="js/scripts.js" type="module"></script>

    Run npm start to verify that your nucampsite project is able to load and work properly, before you begin modifying the JavaScript.



Task 2: Secure your API key

    Create an .env file in the root of your project directory.
    Inside the .env file, add your OpenWeather API key like this:

    OPEN_WEATHER_API_KEY=your-api-key-here

        Replace your-api-key-here with your actual API key.

    Open or create a .gitignore file in the root of your project directory and add the following line to ensure that your .env file is not tracked by Git:

    .env



Task 3: Set up the Fetch function

This task is very similar to the one you completed for the News App exercise. You may refer to that exercise if you get stuck, but try to complete these tasks together with your classmates before looking at your former code.

    In your scripts.js file, set up a basic asynchronous function named fetchWeather that will fetch data from the API.
    Inside the function, create a variable called apiKey and assign it to process.env.OPEN_WEATHER_API_KEY
    Create another variable called city and set it equal to the name of a city that you want your fictional campground to be located in.
    Create a third variable called url and use a template literal (with back-ticks) to insert your city and apiKey into the string. Use this URL:

    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`


    In your function, include code that will await the fetch from the url, and await the response in JSON.
    Log the output to the console to test your endpoint connection.
    Be sure to use error handling to catch any errors and log them to the console.



Task 4: Display the data in the weather box

Again, this task is very similar to the one you completed for the News App exercise, but you should try to figure this out on your own (with your classmates) first.

    Before writing the code to handle the weather data, consult the OpenWeather API documentation for the Current Weather endpoint. Understand what properties are available to you, specifically focusing on the temperature, weather description, and icons.
    If you completed Task 3 successfully, you should be able to see the JSON object response from the API endpoint in your console. Open it up to examine the data that is available to you.
    Create a function named displayWeather that will accept the JSON object returned from your fetch request as a parameter.
    Inside this function, you'll need to extract the information you want to display. Find the properties in the JSON object that represent the temperature, weather description, and icon.
    Use DOM Manipulation to Display the Weather Information:
        Use an appropriate DOM method to create a new image element.
        For the source of this new image element, use this URL, making sure to replace the text inside the template literal with your JSON data for the icon:

        `https://openweathermap.org/img/w/${your_code_here}.png`

        Use an appropriate DOM method to append the image element to the appropriate container on the page.
        For the temperature, use the .textContent property to add text from the data object. if you want to add the degree symbol to the temp, the JavaScript unicode symbol is \u00B0.
        For the description, use an appropriate DOM method to add text from the data object.
        Make sure that all of your weather elements are attached to the DOM
    Inside your fetchWeather function, after receiving and logging the JSON response, call the displayWeather function and pass the JSON data as the argument.
    Observe your changes in the browser. If your site crashed, use ctrl-C to close localhost, then type npm start to re-open the session.
    Be sure to run your code with your console open so that you can check for any error messages in the console.



Task 5: Add a SCSS partial to style the weather box

    In your SCSS folder, create a new file called _weather.scss. Don't forget the underscore in front of the file name, as this designates a "partial" file.
    Inside _weather.scss, paste the following SCSS code, or write your own:

    #weather {
        display: flex;
        align-items: center;
        color: #fff;

        #weather-icon {
            font-size: 1rem;
        }

        #weather-temp,
        #weather-description {
            margin-right: 10px;
        }

        #weather-description {
            text-transform: capitalize;
        }
    }

    #weather:hover {
        opacity: 0.8;
    }


    Finally, open your main styles.scss file and import the _weather.scss partial by adding the following line at the end of your main SCSS file, below the other imports:

    @import 'weather';


    This SCSS code will style the weather box in line with the rest of your site, using the predefined variables for color and typography.
    Be sure to observe your changes and test your code.
    If you are using git, make sure that you have added the .env file to .gitignore, then commit and push your changes.
    If you have previously deployed your nucampsite project, you may re-deploy it with your changes by typing  npm run build, then firebase deploy.
