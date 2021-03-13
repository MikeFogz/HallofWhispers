const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// After you run it, creates index.html file inside the "Build" folder.
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

// This has "/api" because all routes from this route are implied to contain /api/
app.use("/api", require("./routes/apiRoutes"))
app.use("/api/posts", require("./routes/homeRoutes"))

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));