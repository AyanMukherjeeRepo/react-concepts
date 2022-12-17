
import "./App.css";
import Child from "./Child";
import useHasFocus from "./CustomHooks/useHasFocus";
import useToggle from "./CustomHooks/useToggle";

function App() {
  const [,ref] = useHasFocus()
  return (
    <div className="App">
      <Parent />
      <input ref={ref} type='text'/>
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
