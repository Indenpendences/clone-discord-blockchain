import dotenv from "dotenv";
dotenv.config();

import express from "express";
import Gun from "gun";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(Gun.serve);

app.get("/", (request, response) => {
  response.status(200).send("Discord Node is live");
});

const server = async function () {
  try {
    await app.listen(PORT, function () {
      console.log(`http://localhost${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

Gun({ web: server });
