const express = require("express");
const path = require("path");
const app = express();
const PORT = 8000;

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// mount public folder so that index.html can make sure of the bundled js file
app.use(express.static(path.resolve(__dirname, "../public")));

// load html file -> loads bundled js files to output React functionality
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/index.html"));
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
