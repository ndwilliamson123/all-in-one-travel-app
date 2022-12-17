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

This is my capstone project for the BrainStation Web Development course. I incorporated many of the concepts I've learned over the past 8 months while giving myself a project. With the foundation my instuctors and TAs have provided, I was able to self-teach integration with Google Cloud APIs, learn and incorporate password salts and hashing, and Express.js sessions with CORs configuration.

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
2. Install NPM packages in "\client" folder:
   ```sh
   cd client
   npm install
   ```
3. Create a client side .env file:
   ```sh
   touch .env
   ```
4. Add the following properties to the client side .env file
   ```sh
    REACT_APP_GOOGLE_MAPS_API_KEY = 
    REACT_APP_GOOGLE_GEOCODING_API_KEY = 
   ```
5. Navigate to the "\server" folder and install NPM packages:
   ```sh
   cd ../server
   npm install
   ```
6. Create a server side .env file:
   ```sh
   touch .env
   ```
7. Add the following properties to the .env file:
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
8. Create a MySQL Schema called "travel_app" (or use your own, but replace the    `database` property in the knexfile.js file). Once complete:
   ```sh
   knex migrate:latest
   ```
9. Seed data is provided to get you started:
   ```sh
   knex seed:run
   ```

Please reach out to me if you have any questions: <a href="#contact">Contact me</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## <a id="roadmap"></a> Roadmap

- [ ] Front-end and back-end user input validation on forms for stability and error handling
- [ ] More interactive map with directions from user's hotel address to requested locations
- [ ] Allow user to save their own specific translated phrases

See the [open issues](https://github.com/ndwilliamson123/all-in-one-travel-app/issues) for a full list of proposed features (and known issues).

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