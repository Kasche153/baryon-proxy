const express = require("express");
const request = require("request");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  console.log("i was pinged ");
  request(
    {
      url:
        "https://api.sl.se/api2/realtimedeparturesV4.String?key=387faad00f39470d93e2233bc7b387f1&siteid=9192&timewindow=1000",
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: err.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
