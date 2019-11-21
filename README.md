# ern-template
Express + React + Node on a single process

# First steps
First of all, you should install all the required npm packages

```
npm i
cd .\client\
npm i
cd ..
```

# Running the project
You can run the project just with ```npm start```, that will start the express server by itself. If you didn't built the client, then you should run ```npm run build``` which should make a production-ready static build of the react app and then start express server on port 8080.

If you are developing the react app, then you can also switch to the client folder and run ```npm start```, the client will be running on port 8081.
