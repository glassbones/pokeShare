const express = require("express");
const path = require("path");
const fs = require("fs");
var cors = require('cors')
const app = express();
const port = 3000;

app.use(cors()) 

app.get("/", function (req, res) {
  const filePath = path.resolve(__dirname, "./build", "index.html");

  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.replace(/{{title}}/, "PokeShare");
    data = data.replace(
      /{{description}}/,
      "A pokemon sharing app"
    );

    res.send(data);
  });
});

app.get("/referred/*", function (req, res) {
  const filePath = path.resolve(__dirname, ".build", "index.html");

  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.replace(/{{title}}/, "About | PokeShare");
    data = data.replace(/{{description}}/, "About PokeShare");

    res.send(data);
  });
});


app.get("/referred", function (req, res) {
  const filePath = path.resolve(__dirname, ".build", "index.html");

  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.replace(/{{title}}/, "About | PokeShare");
    data = data.replace(/{{description}}/, "About PokeShare");

    res.send(data);
  });
});
/*
app.get("/contact", function (req, res) {
  const filePath = path.resolve(__dirname, "build", "index.html");

  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.replace(/{{title}}/, "Contact | PokeShare");
    data = data.replace(/{{description}}/, "Contact PokeShare");

    res.send(data);
  });
});

app.use(express.static(path.resolve(__dirname, "./build")));



app.get("*", function (req, res) {
  const filePath = path.resolve(__dirname, 'build/index.html'); //../client/build
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.replace(/{{title}}/, "PokeShare");
    data = data.replace(
      /{{description}}/,
      "PokeShare pokemon sharing app"
    );

    res.send(data);
  });
});



app.use(express.static(path.join(__dirname, 'build')));
/*
// PATH CONFIGURATION TO RESPOND TO A REQUEST TO STATIC ROUTE REQUEST BY SERVING index.html
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
*/

app.listen(port, () => console.log(`Listening on port ${port}`));
