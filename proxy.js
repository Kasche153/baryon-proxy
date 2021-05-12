const express = require("express");
const request = require("request");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/deviation/:line", (req, res) => {
  const line = req.params.line;
  console.log(line);
  request(
    {
      url: `https://api.sl.se/api2/deviationsrawdata.Json?key=8af86a22170d47ee8edca745db35d1ac
      &lineNumber=${line}`,
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
