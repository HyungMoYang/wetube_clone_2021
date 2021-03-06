import dotenv from "dotenv";
import "./db";
import app from "./app";

import "./models/Video";
import "./models/Comment";
import "./models/User";

dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = (req, res) => {
  console.log(`✅  Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
