import React from "react";

function Child({toggle}) {
    console.log("Child rendering...");
    return (
      <div>
        <button onClick={toggle}>Toggle</button>
      </div>
    );
  }
  export default React.memo(Child)