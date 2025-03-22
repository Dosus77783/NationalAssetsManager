Feature List: 

# National Assets Manager Application

## Description

A web application which allows you adjust national assets which are simulated and changed through an update function. 
After creating a user account, you create a nation with certain parameters, including its name, government, and development type. Many aspects are randomized for now, but plans for future will include presets for better testing. As the server runs each nation will update via a specified node-cron task that takes data from 4 sections of user input (Taxes, Spending, Trade and Development) which then simulates the nation changing over the period of 1 day per update. The settings (government, and development type) are incorporated into the node-cron task function to differentiate how the update function handles the changes and build upon your adjustments. These changes include the monetary assets (treasury, tax revenue) of the nation as well as its population, professions, corporations, birth and death rates etc.

## Stack Information

- MERN:
- Javascript using Node.js (Soon to be reformated to TypeScript)
- React.js (Front-End)
- Express.js (Back-End Server)
- MongoDB (Database)

## Features

- Login and registration
- The below features are limited to logged in users:
  - Create a nation (Creates a Country Document in MongoDB)
  - Edit/Update Tax Rates, Spending Capital
  - (Soon to added) Export/imports and Current National Developments
  - View all nations under user account
  - Delete Nation, and all of its Data to restard from scratch.
  - An node-cron function which continously updates the data of each nation per minute.

## Prerequisites

Before you begin, ensure you have met the following requirements:  

- Npm or other Package manager to install modules in dependencies list
- MongoDB cridentials for connecting to a database via a dotenv file

## Recommendations
- Remember to turn the server off after you're finished otherwise the update function will run indefinately and you will get some interesting numbers from your nation stats.

## Usage

To run the National Assets Manager App (Using NPM): 
1) Open the project in an IDE
2) Open up 2 terminals in whichever desired CLI for both client and server folders.
3) Run "npm i" in both.
4) Set Up a .env file in the server side with a PORT (i.e. 8008) , MONGO_URI (must be your mongoDB Cluster connection string), and a FIRST_SECRET_KEY (Can be anything) variable. 
5) Run "npm run dev" on both terminals.
??) You can now use the application

## Contact

If you have any questions, please open an issue or contact the project maintainer  
Project Link: [NationalAssetsManager](https://github.com/Dosus77783/NationalAssetsManager)  
Primary Contact: zic678@gmail.com

