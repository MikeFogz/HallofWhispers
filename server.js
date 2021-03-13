const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// After you run it, creates index.html file inside the "Build" folder.
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/hall_of_whispers", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
);

// This has "/api" because all routes from this route are implied to contain /api/
app.use("/api", require("./routes/api-routes"))

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
