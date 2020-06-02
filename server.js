


const express = require("express");
const app=express();
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"));
}
require("./routes/api-routes")(app);



mongoose.connect(process.env.MONGODB_URI||"mongodb://user:password2@ds013014.mlab.com:13014/heroku_69cmtz6l");

// routes

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
// {
//   "name": "react-portfolio",
//   "version": "0.1.0",
//   "private": true,
//   "dependencies": {
//     "@testing-library/jest-dom": "^4.2.4",
//     "@testing-library/react": "^9.5.0",
//     "@testing-library/user-event": "^7.2.1",
//     "axios": "^0.19.2",
//     "express": "^4.17.1",
//     "react": "^16.13.1",
//     "react-dom": "^16.13.1",
//     "react-scripts": "3.4.1"
//   },
//   "scripts": {
//     "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject"
//   },
//   "eslintConfig": {
//     "extends": "react-app"
//   },
//   "browserslist": {
//     "production": [
//       ">0.2%",
//       "not dead",
//       "not op_mini all"
//     ],
//     "development": [
//       "last 1 chrome version",
//       "last 1 firefox version",
//       "last 1 safari version"
//     ]
//   }
// }