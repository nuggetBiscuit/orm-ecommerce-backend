## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Mock-Up

Server and Seeding Setup: 

https://drive.google.com/file/d/1HW-fRBK4V6CQZBkW9KnzElX4WTHXjmFq/view?usp=drive_link

The following animation shows the application's GET routes to return all categories, all products, and a single category, a single product, and a single tag being tested in Insomnia:

![In Insomnia, the user tests “GET tags,” “GET Categories,” and “GET All Products” and “GET tag by id,” “GET Category by ID,” and “GET One Product.]

https://drive.google.com/file/d/17PXGyBI4lOSWMvLx5assCgjFohpPXQ-T/view?usp=drive_links


The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia:

![In Insomnia, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”]

https://drive.google.com/file/d/1ALiBMwUrf21_cChMeiDL9X124r6ZQxkO/view?usp=drive_link

Your walkthrough video should also show the POST, PUT, and DELETE routes for products and tags being tested in Insomnia.

## Installation
Run `npm i` to install dependencies.

After creating the models and routes, run `npm run seed` to seed data to your database so that you can test your routes.

Then write `npm start` in command line to start
