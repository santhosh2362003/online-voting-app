import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [votes, setVotes] = useState({ A: 0, B: 0 });

  const fetchVotes = async () => {
    const res = await axios.get("http://backend:5000/votes");
    setVotes(res.data);
  };

  const vote = async (option) => {
    await axios.post("http://backend:5000/vote", { option });
    fetchVotes();
  };

  useEffect(() => {
    fetchVotes();
  }, []);

  return (
    <div>
      <h1>Online Voting App</h1>
      <button onClick={() => vote("A")}>Vote A</button>
      <button onClick={() => vote("B")}>Vote B</button>
      <h2>A: {votes.A}</h2>
      <h2>B: {votes.B}</h2>
    </div>
  );
}

export default App;
