## A Bachelor project (IN PROGRESS :poop:) 

### To run the application in development mode:
 
Fetch yourself a copy of these on your machine of choice:
 
* Node.js (version > 6.10)
* Node Package Manager (npm)
* MongoDB (version > 3.2)
 
#### Clone this repo (if you want). Then configure the database:
 
1. Install MongoDB (if you haven't already)
2. Create data folder in C:\ drive and db folder inside it to store the database
3. In command line, run ```"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"```
4. Keep the script running in the background 
 
#### Much like your finances, this project is dependent on others. To install:
 
Open a new command line in the root folder of the project and install all dependencies:
```npm install```

:raised_hand: Wait until the node modules have finished installing, then start the server:
``` npm start```

#### :pray: If there's a God...
The application can be accessed at http://localhost:3000/
 
 
**Note:** The server will be running on http://localhost:3001/.
To test only server-side code without the need of restarting the build, use ```nodemon server.js``` instead of ```npm start```


#### And that's all!
:cactus::camel::sunny:
