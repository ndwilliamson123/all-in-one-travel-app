<a id="readme-top"></a>
<br />

<div align="center">
  <h1 align="center">All In One Travel App</h1>
  <p align="center">
    Traveling internationally can be a hassle to plan when all you want is to enjoy your trip.<br />This app will give you everything you need to have safe, well-planned travel so you can relax!
    <br />
    <br />
    <a href="https://drive.google.com/drive/u/1/folders/1hD_Ht9XtXbjTcTPJv1mrE9ATRzhrkKQ1">View Demo</a>
    ·
    <a href="https://github.com/ndwilliamson123/all-in-one-travel-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/ndwilliamson123/all-in-one-travel-app/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

<br />
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
    <li><a href="#disclaimer">Disclaimer</a></li>
  </ol>
</details>
<br />

<!-- ABOUT THE PROJECT -->
## <a id="about-the-project"></a> About The Project

### <ins>December 17, 2022</ins>

This is my capstone project for the BrainStation Web Development course. I incorporated many of the concepts I've learned over the past 8 months while giving myself a project with opportunities to grow further. For this first submission, I really focused specifically on learning more backend tools like user authentication, database administration, MVC methodologies, and integrating with third-party APIs.

If you're looking at this (or grading it!) I plan on improving the frontend UX/UI design soon, but I hope you can see the hard work I put into the backend engineering :)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- BUILT WITH -->

### <a id="built-with"></a> Built With 

- React
- Sass
- Axios
- Node
- Express
- MySQL
- Knex
- Passport
- Google Cloud APIs

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## <a id="getting-started"></a> Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these steps.

### <a id="installation"></a> Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/ndwilliamson123/all-in-one-travel-app.git
   ```
1. Install NPM packages in "\client" folder:
   ```sh
   cd client
   npm install
   ```
1. Create a client side .env file:
   ```sh
   touch .env
   ```
1. Add the following properties to the client side .env file
   ```sh
    REACT_APP_GOOGLE_MAPS_API_KEY = 
    REACT_APP_GOOGLE_GEOCODING_API_KEY = 
   ```
1. Navigate to the "\server" folder and install NPM packages:
   ```sh
   cd ../server
   npm install
   ```
1. Create a server side .env file:
   ```sh
   touch .env
   ```
1. Add the following properties to the .env file:
   ```sh
   PORT=8080
   dbUser =
   dbPassword =
   SECRET_KEY = 
   FRONTEND_DOMAIN = 

   ITERATIONS =
   LENGTH =
   ALGO =
   GOOGLE_API_KEY = 
   ```
1. Create a MySQL Schema called "travel_app" (or use your own, but replace the    `database` property in the knexfile.js file). Once complete:
   ```sh
   knex migrate:latest
   ```
1. Seed data is provided to get you started:
   ```sh
   knex seed:run
   ```
1. Username and password to login:
   ```sh
   username: test@test.com
   password: abc123
   ```

Please reach out to me if you have any questions: <a href="#contact">Contact me</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## <a id="roadmap"></a> Roadmap

### Expected Completion: <ins>January 11, 2023</ins>

- [X] Finish "add trip" feature for users to enter hotel information
- [X] Allow users to update their password
- [ ] More interactive map with directions from user's hotel address to requested locations
- [X] Track when a user is logged in (i.e. not showing a "Login" button if the user is logged in, not showing a "Logout" button if the user is not logged in, etc.)
- [ ] Overall more user friendly pages and UI/UX design

### Expected Completion: <ins>TBD</ins>

- [ ] More Local/Session storage to prevent API calls upon every page refresh
- [ ] Front-end and back-end user input validation on forms for stability and error handling (and preventing issues like having a trip end-date before a trip start-date)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## <a id="contributing"></a> Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are welcomed.

If you have a suggestion that would make this better or where I could improve, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## <a id="contact"></a> Contact

Nicholas Williamson - ndwilliamson3@gmail.com

Project Link: https://github.com/ndwilliamson123/all-in-one-travel-app

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## <a id="acknowledgments"></a> Acknowledgments

Thank you so much to my BrainStation instructors and TAs for all their knowledge and help!

- Nathan Leggatt - BrainStation Lead Instructor
- Ankur Bag - BrainStation Instructor
- Bahareh Ashtiani - Teaching Assistant
- Brandon Wong - Teaching Assistant

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## <a id="disclaimer"></a> Disclaimer

This project is for software development practice only. While much of the data is accurate as of December 2022, it is not consistently maintained and should NOT be relied upon while planning any domestic or international travel.