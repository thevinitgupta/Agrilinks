# AgriLinks API
## Documentation

API for doing market reasearch for ease of decision for customers 

## Features

- Post a new user report for a particular commodity from a market.
- Get the aggregate report back for a particular commodity
- Prevents the user from making the entry for the same commodity from the same market twice


## npm Packages Used

The npm packages used in the project are:

- [express] - Frame work to compliment NodeJS
- [mongoose](https://mongoosejs.com/) - Use MongoDB commands in NodeJS
- [uuid](https://www.npmjs.com/package/uuid) - To generate custom UIDs for reports
- [dotenv](https://www.npmjs.com/package/dotenv) - To access environment packages
- [cors](https://www.npmjs.com/package/cors) - To handle cross site scripting in case of MongoDB Atlas server

## Setup Process

### Requirements 
- NodeJS installed (if not go to this 👉 page [NodeJS installation](https://nodejs.org/en/download/) )
- MongoDB installed (if not installed, follow this process to install 👉 [MongoDB installation](https://medium.com/@LondonAppBrewery/how-to-download-install-mongodb-on-windows-4ee4b3493514))
- Start MongoDB server on your System (To know the process, 👉 [Start MongoDB Server](https://stackoverflow.com/questions/20796714/how-do-i-start-mongo-db-from-windows))

Once the above process is complete, go ahead and clone this repository on your system.

### Clone Git Repository 👉 [Clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)

Once the above process is complete, you are ready to test the API in the following steps.
## Installation

After cloning the repository to your system, run the following command in the terminal of the folder to install all packages used in the project.

```sh
npm install
```


## Start Server

Before testing endpoints, we need to start the server.
Run the following command to start your server.

```sh
npm start
```

## Testing 


Post a new report : 
>Make a `POST` request to the following endpoint : 
```sh
http://localhost:3000/reports
```
>Sample Request Bodies :

#### 1
```sh
{
    "reportDetails" : {
        "userID": "user-1",
        "marketID": "market-1",
        "marketName": "test market",
        "cmdtyID": "cmdty-1",
        "marketType": "mandi",
        "cmdtyName": "Potato",
        "priceUnit": "Pack",
        "convFctr": 40,
        "price":800
    }
}
```
> Reposonse : 
```sh
{
    "status": "success",
    "reportID": "8d8f3869-5b01-476d-a213-a96fa50d9aa9"
}
```
#### 2
```sh
{
    "reportDetails" : {
        "userID": "user-2",
        "marketID": "market-1",
        "marketName": "test market",
        "cmdtyID": "cmdty-1",
        "marketType": "mandi",
        "cmdtyName": "Potato",
        "priceUnit": "Quintals",
        "convFctr": 100,
        "price":1800
    }
}
```
> Reposonse : 
```sh
{
    "status": "success",
    "reportID": "8d8f3869-5b01-476d-a213-a96fa50d9aa9"
}
```
***
Get an Aggregate report : 
>Make a `GET` request to the following endpoint : 
``Remember the String after reportID= is the reportID received above``
```sh
http://localhost:3000/reports?reportID=8d8f3869-5b01-476d-a213-a96fa50d9aa9
```
> Reposonse : 
```sh
{
    "users": [
        "user-2",
        "user-1",
        "user-4"
    ],
    "_id": "8d8f3869-5b01-476d-a213-a96fa50d9aa9",
    "cmdtyName": "Potato",
    "cmdtyID": "cmdty-1",
    "marketID": "market-1",
    "marketName": "test market",
    "timestamp": "1627567063327",
    "priceUnit": "Kg",
    "price": 19.5,
    "__v": 2
}
```
>To end processes : 
Simply go to the terminal and press :

``
ctrl+c
``

## Contact Me :

- Email : ``thevinitgupta@gmail.com``
- Phone : ``+918389073221``
- LinkedIn : [Vinit Gupta](https://www.linkedin.com/in/thevinitgupta/)
- GitHub : [Vinit Gupta](https://github.com/thevinitgupta)

