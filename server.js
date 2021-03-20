const express = require("express");
const mongoose = require("mongoose");
const socketIO = require("socket.io")
const cors = require("cors")
const app = express();
const http = require("http")
const PORT = process.env.PORT || 5000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

const server = http.createServer(app)

const io = socketIO(server)

io.on("connection", (socket) => {
  console.log("new user connected");

  socket.emit("new", {
    from: "Admin",
    message: "Welcome the DND App"
  })

  socket.broadcast.emit("newUser", {
    from: "Admin",
    message: "New user connected"
  })

  socket.on("newMessage", (data, callback) => {
    console.log(data)
    io.emit("message", {
      message: data.message,
      id: data.id
    })
    callback("Message Send From Server")
  })

  socket.on("disconnect", () => {
    console.log("user disconnected");
  })
})

// app.get("/", (req, res) => {
//   res.send("hello from chat server")
// })
// After you run it, creates index.html file inside the "Build" folder.
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/hall_of_whispers",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("connected to mongodb");
  }
);

// This has "/api" because all routes from this route are implied to contain /api/
app.use("/api", require("./routes/api-routes"));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}


app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
