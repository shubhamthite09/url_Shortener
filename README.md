# URL Shortener Project

![URL Shortener Logo](./frontend//src/assets/logo.png)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Introduction

URL Shortener is a simple web application that allows users to shorten long URLs into short and easily shareable links. The project aims to provide a user-friendly interface for generating short URLs, making it convenient for users to share links on social media platforms, emails, or any other medium with character limits.

## Features

- Shorten long URLs into compact and shareable links.
- Customizable short URLs (if not already taken).
- Redirect users to the original long URL when they access the shortened link.
- Analytics tracking to monitor the usage of shortened URLs (e.g., number of clicks, geographic locations, etc.).

## Technologies Used

- **Frontend**: React js , Tailwind Css
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: Netlify,render

## Getting Started

To run the URL Shortener project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/url-shortener.git`
2. cd into backend `cd backend`
3. Install the required dependencies: `npm install`
4. Set up the MongoDB database. remote url in .env file
5. Start the server: `npm start` start the backend on required port
6. Then `cd frontend`
7. Then change the backend URl in .env file
8. Open your web browser and visit `http://localhost:3000`

## Usage

1. On the homepage, enter the long URL you want to shorten.
2. Click on the "Shorten" button to generate the short URL.
3. The shortened URL will be displayed along with statistics (e.g., number of clicks).
4. Users can copy the short URL and share it with others.

## API Endpoints

there are 3

## Contributing

We welcome contributions to the URL Shortener project. If you find a bug or have an idea for improvement, please feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request explaining your changes.


We hope you find the URL Shortener project useful! If you have any questions or need further assistance, feel free to contact me at [shubhamthite09@gmail.com](shubhamthite09@gmail.com). Happy shortening!
