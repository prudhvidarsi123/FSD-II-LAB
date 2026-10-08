import React, { useState } from "react";

// Child Component
function MessageDisplay({ message }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h2>Message from Parent</h2>
      <p>{message}</p>
    </div>
  );
}

// Parent Component
function ParentComponent() {
  const [message, setMessage] = useState(
    "Hello from the parent component!"
  );

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>React Props Example</h1>

      <MessageDisplay message={message} />
    </div>
  );
}

export default ParentComponent;