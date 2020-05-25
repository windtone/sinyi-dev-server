const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const axios = require("axios");

app.use(bodyParser.json());

app.post("/", async function (req, res, next) {
  let ret = await send(req.body);
  res.send(ret);
  next();
});

app.listen(3000, function () {
  console.log("Server start at 3000 port");
});

async function send(payload) {
  return await axios
    .post(
      "http://34.96.92.102/enterprise/flow/users/000000000000000000000000/apps/80fe74bc23f707ffd5da.6bfb6b9717ea/api/?token=at3gJ7ZR5b6YRqS8Xt&source=editor",
      payload
    )
    .then((res) => {
      return res.data;
    });
}
