const supabase = require("./src/utils/supabase");

const app = require("express")();
const http = require("http").createServer(app);

app.set("view engine", "ejs");
app.set("views", "./assets/views");

// routing
app.get("/", (req, res) => {
  res.render("index");
});

// open server on 5000
http.listen(5000, async () => {
  console.log("Listen start on *:5000");
});
