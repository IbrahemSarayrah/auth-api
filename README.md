# auth-api

## LAB - 08

### Author: Ibrahem Sarayrah

### LINKS

* [github action](https://github.com/IbrahemSarayrah/auth-api/actions)

* [github action test](https://github.com/IbrahemSarayrah/auth-api/runs/3411491041)

* HEROKU Prod : [https://ibrahem--auth-api.herokuapp.com/](https://ibrahem--auth-api.herokuapp.com/)

* pull request : [https://github.com/IbrahemSarayrah/auth-api/pull/1](https://github.com/IbrahemSarayrah/auth-api/pull/1)

### Setup

* **.env** requirements:
>
> PORT=3000
>
> DATABASE_URL=postgres://localhost/lab08
>
> SECRET=secretstring
>

## Dependencies and technologies needs to install

* npm init -y
* npm i dotenv express cors
* npm i -D jest supertest
* npm i sequelize
* npm i sqlite3
* npm i pg
* npm i morgan
* npm i jsonwebtoken
* npm i bcrypt
* npm i base-64

### Running the app

* npm start / nodemon

* Endpoint: `/signin`
* Endpoint: `/signup`
* Endpoint: `/users`
* Endpoint: `/secret`
* Endpoint: `/api/v1/food`
* Endpoint: `/api/v1/clothes`
* Endpoint: `/api/v2/food`
* Endpoint: `/api/v2/clothes`
* Returns Objects

```

{
    "user": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImlicmFoZW0iLCJpYXQiOjE2Mjk3Mzc3ODJ9.QShYT7Ho5yvkFKQrZ3_8SM-U6Zv7ybPQSBis2DRdFbE",
        "id": 1,
        "username": "ibrahem",
        "password": "$2b$10$zfTqBTtCljc8nXK4//83LeNQGxprZr7GE1NrfP53mmlyyv6Kl8FUW",
        "createdAt": "2021-08-23T16:16:29.871Z",
        "updatedAt": "2021-08-23T16:16:29.871Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImlicmFoZW0iLCJpYXQiOjE2Mjk3Mzc3ODJ9.QShYT7Ho5yvkFKQrZ3_8SM-U6Zv7ybPQSBis2DRdFbE"
}

food {
    "id": 3,
    "name": "apple",
    "calories": 10,
    "type": "fruit",
    "updatedAt": "2021-08-24T11:09:35.326Z",
    "createdAt": "2021-08-24T11:09:35.326Z"
}

clothes {
    "id": 1,
    "name": "t-shirt",
    "color": "white",
    "size": "L",
    "createdAt": "2021-08-24T11:10:59.535Z",
    "updatedAt": "2021-08-24T11:21:45.239Z"
}

```

### UML

![UML](uml-img/auth-api.png)
