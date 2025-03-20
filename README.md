Descriptions: A web application which allows you adjust national assets which are simulated and changed through an update function. 
After creating a user account, you create a nation with certain parameters, including its name, government, and development type. Many aspects are randomized for now, but plans for future will include presets for better testing. As the server runs each nation will update via a specified node-cron task that takes data from 4 sections of user input (Taxes, Spending, Trade and Development) which then simulates the nation changing over the period of 1 day per update. The settings (government, and development type) are incorporated into the node-cron task function to differentiate how the update function handles the changes and build upon your adjustments. These changes include the monetary assets (treasury, tax revenue) of the nation as well as its population, professions, corporations, birth and death rates etc.
Tech Stack: MERN
Feature List: Create a nation, edit/updates its tax rates, spending total, export/imports and its current developments to change the trajectory of the nations assets.
An updating node-cron function which runs off real time.
