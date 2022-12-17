
import { useRef } from "react";
import "./App.css";
import Child from "./Child";
import useHasFocus from "./CustomHooks/useHasFocus";
import useOnClickOutside from "./CustomHooks/useOnClickOutside";
import useToggle from "./CustomHooks/useToggle";

function App() {
  // const [,ref] = useHasFocus()
  
  const [ref] = useOnClickOutside(()=>console.log('clicked outside'))
  return (
    <div className="App">
      {/* <Parent /> */}
      {/* <input ref={ref} type='text'/> */}
      <div ref={ref}>Click outside of this</div>
    </div>
  );
}
function Parent() {
  console.log("Parent rendering...");
  const [value, toggle] = useToggle();
  return (
    <div>
      {value ? "show" : "hide"}
      <Child toggle={toggle}/>
    </div>
  );
}


export default App;
