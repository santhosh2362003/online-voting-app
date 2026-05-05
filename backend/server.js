const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let votes = { A: 0, B: 0 };

app.get("/votes", (req, res) => {
  res.json(votes);
});

app.post("/vote", (req, res) => {
  const { option } = req.body;
  if (votes[option] !== undefined) {
    votes[option]++;
    res.json({ message: "Vote counted", votes });
  } else {
    res.status(400).json({ error: "Invalid option" });
  }
});

app.listen(5000, () => console.log("Backend running on port 5000"));
