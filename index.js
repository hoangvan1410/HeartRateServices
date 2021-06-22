const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const request = require("request");

// router
//const userRoute = require("./router/user.router.js");
//const healthInfoRouter = require("./router/healthInfo.router.js");
const rateRoute = require("./router/rate.route.js");

//const healthInfoRouterTest = require("./src/features/HealthInfoTest/ports/http/routes.js")
dotenv.config();
const app = express();
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());

// connect db
mongoose.connect(
    process.env.URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    },
    () => console.log(`connect database success`)
);

// router
//app.use("/api/users", userRoute);
//app.use("/api/user", userRoute);
app.use("/api/rates", rateRoute);

// app listen
const PORT = process.env.PORT || 3300
var HOST = process.env.HOST || '0.0.0.0'
app.listen(PORT, HOST, () => {
    console.log(`server is running at port 3300`);
});