import { useState } from "react";

import Program2A from "./2a";
import Program2B from "./2b";
import Program2C from "./2c";
import Program2D from "./2d";
import Program2E from "./2e";
import Program3A from "./3a";
import Program3B from "./3b";
import Program3C from "./3c";
import Program3D from "./3d";
import Program3E from "./3e";

function App() {
  const [program, setProgram] = useState("");

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
     

      <button onClick={() => setProgram("2a")}>2A</button>
      <button onClick={() => setProgram("2b")}>2B</button>
      <button onClick={() => setProgram("2c")}>2C</button>
      <button onClick={() => setProgram("2d")}>2D</button>
      <button onClick={() => setProgram("2e")}>2E</button>
      <button onClick={() => setProgram("3a")}>3A</button>
      <button onClick={() => setProgram("3b")}>3B</button>
      <button onClick={() => setProgram("3c")}>3C</button>
      <button onClick={() => setProgram("3d")}>3D</button>
      <button onClick={() => setProgram("3e")}>3E</button>

      <hr />

      {program === "2a" && <Program2A />}
      {program === "2b" && <Program2B />}
      {program === "2c" && <Program2C />}
      {program === "2d" && <Program2D />}
      {program === "2e" && <Program2E />}
      {program === "3a" && <Program3A />}
      {program === "3b" && <Program3B />}
      {program === "3c" && <Program3C />}
      {program === "3d" && <Program3D />}
      {program === "3e" && <Program3E />}
    </div>
  );
}

export default App;