# gro-city-backend

## Description
  gro_city_backend is intended for accessing of plant data, board_data for gro_city users. DB have 4 tables. Here the users are allowed to signup and login and create boards for keeping the information about their plants. Logged in users can search for plants from 1400 plants.

### ERD

  ![erd](./src/db/db/gro_city_ERD.png)

## Routes
  - Authorization is sent as Bearer token

##### user routes
  signup `post` request https://gro-city-backend.herokuapp.com/api/users/signup
    - requires first_name, last_name, email, password as body of request  
  login `post` request https://gro-city-backend.herokuapp.com/api/users/login
    - requires email, password as body of request
    - requires Authorization token

##### board routes
  get all boards https://gro-city-backend.herokuapp.com/api/boards/
  - requires Authorization token
  get one board  https://gro-city-backend.herokuapp.com/api/boards/:id
  - requires Authorization token
  create board   https://gro-city-backend.herokuapp.com/api/boards/
  - requires title as body
  - requires Authorization token
  update board   https://gro-city-backend.herokuapp.com/api/boards/:id
  - requires title as body
  - requires Authorization token
  delete board   https://gro-city-backend.herokuapp.com/api/boards/:id
  - requires Authorization token
  delete plant from a board   https://gro-city-backend.herokuapp.com/api/boards/:id/plants/:plant_id
  - requires Authorization token
  create plant for a board
  https://gro-city-backend.herokuapp.com/api/boards/:id/plants/:plant_id
  - requires Authorization token

##### plant routes
  get all plants https://gro-city-backend.herokuapp.com/api/plants/
  - requires Authorization token
  get plants in a page https://gro-city-backend.herokuapp.com/api/plants/:page
  - requires Authorization token

## plant data
  ![each plant data](./src/db/db/each_plant_data.png)

## Installation

1. Fork and/or Clone this repository

1. `npm install`

1. `mv .env.sample .env`

1. `createdb gro_city_backend_dev && createdb gro_city_backend_test`
