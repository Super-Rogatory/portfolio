const express = require("express");
const app = express();
const PORT = 8000;

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send({ test: "ok" });
});
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
