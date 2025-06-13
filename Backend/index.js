import "dotenv/config";
import { app } from "./app.js";
import  dbConnect  from "./db/db.config.js";



app.get("/", (req, res) => {
  res.send("Hello World!");
})

const port = process.env.PORT || 9000;
dbConnect().then((data) =>{
    app.listen(port, () => {console.log(`Server started on http://localhost:${port}`)});

}).catch((error) => console.log(error));

