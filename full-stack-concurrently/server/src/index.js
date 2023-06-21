import express from "express";
import {users} from "./users.js"
import cors from "cors"

const app = express();
app.use(cors());

app.get("/users/list", (req, res) => {
    // res.send('hello from server 5000');
    res.send({ users });
  });
app.listen(5000, () => console.log("Server is up and running at port 5000"));