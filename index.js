const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/userRouter.js");
const availabilityRouter = require("./routes/availabilityRouter.js");
const contactRouter = require("./routes/contactRouter.js");

app.use(express.json());
app.use(cors());

app.set("port", process.env.PORT || 2013);

app.get("/", (req, res) => {
  const _rootUrl = req.get("host") + req.url;
  res.send({
    msg: "Welcome to the API. Check the routes object ",
    routes: {
      contact: `${_rootUrl}contact`,
    },
  });
});

app.use("/availability", availabilityRouter);
app.use("/user/register", userRouter);
app.use("/user/login", userRouter);
app.use("/contact", contactRouter);

app.listen(app.get("port"), (server) => {
  console.log(`Server listening on port ${app.get("port")}`);
  console.log("Press CTRL+C to quit");
});
