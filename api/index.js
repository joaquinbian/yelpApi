var express = require("express");
var app = express();
const { api, token } = require("./api");
const axios = require("axios").default;
const cors = require("cors");

app.use(cors());
app.get("/business", (req, res) => {
  const { location } = req.query;
  axios
    .get(`${api}?location=${location}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(({ data }) => {
      const { businesses } = data;
      res.json(businesses);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});
app.listen(3001, () => {
  console.log("listen port 3001");
});
